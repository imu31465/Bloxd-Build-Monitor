export const id = 308;
export const ids = [308];
export const modules = {
  41701: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(40171),
      nB = zB(41709);
    class dB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = zB, this.GQB = [], this._maxBlockCapacity = jB || 64, this._selectionContent = new QB.e(1024), this._creationFunc = BB
      }
      update(BB, jB, zB) {
        nB.d._CreateBlocks(BB, jB, zB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      IQB(BB) {
        for (let jB = 0; jB < this.blocks.length; jB++) {
          this.blocks[jB].addEntry(BB)
        }
      }
      qY(BB) {
        for (let jB = 0; jB < this.blocks.length; jB++) {
          this.blocks[jB].removeEntry(BB)
        }
      }
      select(BB, jB) {
        this._selectionContent.reset();
        for (let zB = 0; zB < this.blocks.length; zB++) {
          this.blocks[zB].select(BB, this._selectionContent, jB)
        }
        return jB ? this._selectionContent.concat(this.GQB) : this._selectionContent.concatWithNoDuplicate(this.GQB), this._selectionContent
      }
      intersects(BB, jB, zB) {
        this._selectionContent.reset();
        for (let QB = 0; QB < this.blocks.length; QB++) {
          this.blocks[QB].intersects(BB, jB, this._selectionContent, zB)
        }
        return zB ? this._selectionContent.concat(this.GQB) : this._selectionContent.concatWithNoDuplicate(this.GQB), this._selectionContent
      }
      intersectsRay(BB) {
        this._selectionContent.reset();
        for (let jB = 0; jB < this.blocks.length; jB++) {
          this.blocks[jB].intersectsRay(BB, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.GQB), this._selectionContent
      }
    }
    dB.CreationFuncForMeshes = (BB, jB) => {
      const zB = BB.rV();
      !BB.isBlocked && zB.boundingBox.intersectsMinMax(jB.pQB, jB.aQB) && jB.entries.push(BB)
    }, dB.CreationFuncForSubMeshes = (BB, jB) => {
      BB.rV().boundingBox.intersectsMinMax(jB.pQB, jB.aQB) && jB.entries.push(BB)
    }
  },
  41709: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(37171),
      nB = zB(40412);
    class dB {
      constructor(BB, jB, zB, QB, nB, dB) {
        this.entries = [], this.LQB = new Array, this._capacity = zB, this._depth = QB, this._maxDepth = nB, this._creationFunc = dB, this._minPoint = BB, this._maxPoint = jB, this.LQB.push(BB.clone()), this.LQB.push(jB.clone()), this.LQB.push(BB.clone()), this.LQB[2].x = jB.x, this.LQB.push(BB.clone()), this.LQB[3].y = jB.y, this.LQB.push(BB.clone()), this.LQB[4].z = jB.z, this.LQB.push(jB.clone()), this.LQB[5].z = BB.z, this.LQB.push(jB.clone()), this.LQB[6].x = BB.x, this.LQB.push(jB.clone()), this.LQB[7].y = BB.y
      }
      get Ep() {
        return this._capacity
      }
      get pQB() {
        return this._minPoint
      }
      get aQB() {
        return this._maxPoint
      }
      addEntry(BB) {
        if (this.blocks)
          for (let jB = 0; jB < this.blocks.length; jB++) {
            this.blocks[jB].addEntry(BB)
          } else this._creationFunc(BB, this), this.entries.length > this.Ep && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(BB) {
        if (this.blocks) {
          for (let jB = 0; jB < this.blocks.length; jB++) {
            this.blocks[jB].removeEntry(BB)
          }
          return
        }
        const jB = this.entries.indexOf(BB);
        jB > -1 && this.entries.splice(jB, 1)
      }
      addEntries(BB) {
        for (let jB = 0; jB < BB.length; jB++) {
          const zB = BB[jB];
          this.addEntry(zB)
        }
      }
      select(BB, jB, zB) {
        if (nB.e.IsInFrustum(this.LQB, BB)) {
          if (this.blocks) {
            for (let QB = 0; QB < this.blocks.length; QB++) {
              this.blocks[QB].select(BB, jB, zB)
            }
            return
          }
          zB ? jB.concat(this.entries) : jB.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(BB, jB, zB, QB) {
        if (nB.e.IntersectsSphere(this._minPoint, this._maxPoint, BB, jB)) {
          if (this.blocks) {
            for (let nB = 0; nB < this.blocks.length; nB++) {
              this.blocks[nB].intersects(BB, jB, zB, QB)
            }
            return
          }
          QB ? zB.concat(this.entries) : zB.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(BB, jB) {
        if (BB.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let zB = 0; zB < this.blocks.length; zB++) {
              this.blocks[zB].intersectsRay(BB, jB)
            }
            return
          }
          jB.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        dB._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(BB, jB, zB, nB, IB, NB, uB, UB) {
        uB.blocks = new Array;
        const aB = new QB.m((jB.x - BB.x) / 2, (jB.y - BB.y) / 2, (jB.z - BB.z) / 2);
        for (let QB = 0; QB < 2; QB++)
          for (let jB = 0; jB < 2; jB++)
            for (let pB = 0; pB < 2; pB++) {
              const rB = BB.add(aB.multiplyByFloats(QB, jB, pB)),
                sB = BB.add(aB.multiplyByFloats(QB + 1, jB + 1, pB + 1)),
                JB = new dB(rB, sB, nB, IB + 1, NB, UB);
              JB.addEntries(zB), uB.blocks.push(JB)
            }
      }
    }
  },
  41714: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB
    });
    var QB = zB(40156),
      nB = zB(37171),
      dB = zB(40539),
      IB = zB(41659),
      NB = zB(40247),
      uB = zB(37197),
      UB = zB(41701);
    class aB {
      constructor(BB) {
        this.name = NB.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new IB.y(nB.m.Zero(), new nB.m(1, 1, 1)), (BB = BB || uB.c.LastCreatedScene) && (this.ny = BB, this.ny.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.ny.getActiveSubMeshCandidates = BB => this.getActiveSubMeshCandidates(BB), this.ny.getCollidingSubMeshCandidates = (BB, jB) => this.getCollidingSubMeshCandidates(BB, jB), this.ny.getIntersectingSubMeshCandidates = (BB, jB) => this.getIntersectingSubMeshCandidates(BB, jB))
      }
      register() {
        this.ny.onMeshRemovedObservable.add((BB => {
          const jB = this.ny.selectionOctree;
          if (void 0 !== jB && null !== jB) {
            const zB = jB.GQB.indexOf(BB); - 1 !== zB && jB.GQB.splice(zB, 1)
          }
        })), this.ny.onMeshImportedObservable.add((BB => {
          const jB = this.ny.selectionOctree;
          void 0 !== jB && null !== jB && jB.IQB(BB)
        }))
      }
      getActiveMeshCandidates() {
        return this.ny.iQB?.select(this.ny.frustumPlanes) || this.ny._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(BB) {
        if (BB._submeshesOctree && BB.useOctreeForRenderingSelection) {
          return BB._submeshesOctree.select(this.ny.frustumPlanes)
        }
        return this.ny._getDefaultSubMeshCandidates(BB)
      }
      getIntersectingSubMeshCandidates(BB, jB) {
        if (BB._submeshesOctree && BB.useOctreeForPicking) {
          IB.y.TransformToRef(jB, BB.getWorldMatrix(), this._tempRay);
          return BB._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.ny._getDefaultSubMeshCandidates(BB)
      }
      getCollidingSubMeshCandidates(BB, jB) {
        if (BB._submeshesOctree && BB.useOctreeForCollisions) {
          const zB = jB._velocityWorldLength + Math.max(jB._radius.x, jB._radius.y, jB._radius.z);
          return BB._submeshesOctree.intersects(jB._basePointWorld, zB)
        }
        return this.ny._getDefaultSubMeshCandidates(BB)
      }
      rebuild() {}
      dispose() {}
    }
    let pB = !1;
    pB || (pB = !0, QB.g.prototype.createOrUpdateSelectionOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        zB = this._getComponent(NB.b.NAME_OCTREE);
      zB || (zB = new aB(this), this.wzB(zB)), this.iQB || (this.iQB = new UB.e(UB.e.CreationFuncForMeshes, BB, jB));
      const QB = this.getWorldExtends();
      return this.iQB.update(QB.min, QB.max, this.meshes), this.iQB
    }, Object.defineProperty(QB.g.prototype, "selectionOctree", {
      get: function() {
        return this.iQB
      },
      enumerable: !0,
      configurable: !0
    }), dB.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const zB = this.aY();
      let QB = zB._getComponent(NB.b.NAME_OCTREE);
      QB || (QB = new aB(zB), zB.wzB(QB)), this._submeshesOctree || (this._submeshesOctree = new UB.e(UB.e.CreationFuncForSubMeshes, BB, jB)), this.computeWorldMatrix(!0);
      const nB = this.rV().boundingBox;
      return this._submeshesOctree.update(nB.minimumWorld, nB.maximumWorld, this.cL), this._submeshesOctree
    })
  },
  41659: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => HB,
      f: () => mB,
      j: () => JB,
      l: () => sB,
      n: () => fB,
      q: () => qB,
      s: () => MB,
      t: () => iB,
      x: () => EB,
      y: () => pB
    });
    var QB = zB(37178),
      nB = zB(37171),
      dB = zB(37186),
      IB = zB(40396),
      NB = zB(40202),
      uB = zB(37197),
      UB = zB(40276);
    const aB = {
      internalPickerForMesh: void 0
    };
    class pB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QB.c;
        this.origin = BB, this.direction = jB, this.length = zB, this.epsilon = nB
      }
      clone() {
        return new pB(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const QB = pB._TmpVector3[0].U3(BB.x - zB, BB.y - zB, BB.z - zB),
          nB = pB._TmpVector3[1].U3(jB.x + zB, jB.y + zB, jB.z + zB);
        let dB, IB, NB, uB, UB = 0,
          aB = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < QB.x || this.origin.x > nB.x) return !1
        } else if (dB = 1 / this.direction.x, IB = (QB.x - this.origin.x) * dB, NB = (nB.x - this.origin.x) * dB, NB === -1 / 0 && (NB = 1 / 0), IB > NB && (uB = IB, IB = NB, NB = uB), UB = Math.max(IB, UB), aB = Math.min(NB, aB), UB > aB) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < QB.y || this.origin.y > nB.y) return !1
        } else if (dB = 1 / this.direction.y, IB = (QB.y - this.origin.y) * dB, NB = (nB.y - this.origin.y) * dB, NB === -1 / 0 && (NB = 1 / 0), IB > NB && (uB = IB, IB = NB, NB = uB), UB = Math.max(IB, UB), aB = Math.min(NB, aB), UB > aB) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < QB.z || this.origin.z > nB.z) return !1
        } else if (dB = 1 / this.direction.z, IB = (QB.z - this.origin.z) * dB, NB = (nB.z - this.origin.z) * dB, NB === -1 / 0 && (NB = 1 / 0), IB > NB && (uB = IB, IB = NB, NB = uB), UB = Math.max(IB, UB), aB = Math.min(NB, aB), UB > aB) return !1;
        return !0
      }
      intersectsBox(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(BB.minimum, BB.maximum, jB)
      }
      intersectsSphere(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = BB.center.x - this.origin.x,
          QB = BB.center.y - this.origin.y,
          nB = BB.center.z - this.origin.z,
          dB = zB * zB + QB * QB + nB * nB,
          IB = BB.radius + jB,
          NB = IB * IB;
        if (dB <= NB) return !0;
        const uB = zB * this.direction.x + QB * this.direction.y + nB * this.direction.z;
        if (uB < 0) return !1;
        return dB - uB * uB <= NB
      }
      intersectsTriangle(BB, jB, zB) {
        const QB = pB._TmpVector3[0],
          dB = pB._TmpVector3[1],
          NB = pB._TmpVector3[2],
          uB = pB._TmpVector3[3],
          UB = pB._TmpVector3[4];
        jB.subtractToRef(BB, QB), zB.subtractToRef(BB, dB), nB.m.CrossToRef(this.direction, dB, NB);
        const aB = nB.m.Dot(QB, NB);
        if (0 === aB) return null;
        const rB = 1 / aB;
        this.origin.subtractToRef(BB, uB);
        const sB = nB.m.Dot(uB, NB) * rB;
        if (sB < -this.epsilon || sB > 1 + this.epsilon) return null;
        nB.m.CrossToRef(uB, QB, UB);
        const JB = nB.m.Dot(this.direction, UB) * rB;
        if (JB < -this.epsilon || sB + JB > 1 + this.epsilon) return null;
        const mB = nB.m.Dot(dB, UB) * rB;
        return mB > this.length || mB < 0 ? null : new IB.d(1 - sB - JB, sB, mB)
      }
      intersectsPlane(BB) {
        let jB;
        const zB = nB.m.Dot(BB.normal, this.direction);
        if (Math.abs(zB) < 9.99999997475243e-7) return null;
        {
          const QB = nB.m.Dot(BB.normal, this.origin);
          return jB = (-BB.d - QB) / zB, jB < 0 ? jB < -9.99999997475243e-7 ? null : 0 : jB
        }
      }
      intersectsAxis(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (BB) {
          case "y": {
            const BB = (this.origin.y - jB) / this.direction.y;
            return BB > 0 ? null : new nB.m(this.origin.x + this.direction.x * -BB, jB, this.origin.z + this.direction.z * -BB)
          }
          case "x": {
            const BB = (this.origin.x - jB) / this.direction.x;
            return BB > 0 ? null : new nB.m(jB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
          }
          case "z": {
            const BB = (this.origin.z - jB) / this.direction.z;
            return BB > 0 ? null : new nB.m(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, jB)
          }
          default:
            return null
        }
      }
      lQB(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          dB = arguments.length > 4 ? arguments[4] : void 0,
          IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const NB = nB.h.Matrix[0];
        return BB.getWorldMatrix().invertToRef(NB), this._tmpRay ? pB.TransformToRef(this, NB, this._tmpRay) : this._tmpRay = pB.Transform(this, NB), BB.intersects(this._tmpRay, jB, zB, QB, dB, IB)
      }
      intersectsMeshes(BB, jB, zB) {
        zB ? zB.length = 0 : zB = [];
        for (let QB = 0; QB < BB.length; QB++) {
          const nB = this.lQB(BB[QB], jB);
          nB.hit && zB.push(nB)
        }
        return zB.sort(this._comparePickingInfo), zB
      }
      _comparePickingInfo(BB, jB) {
        return BB.distance < jB.distance ? -1 : BB.distance > jB.distance ? 1 : 0
      }
      intersectionSegment(BB, jB, zB) {
        const QB = this.origin,
          dB = nB.h.KJ[0],
          IB = nB.h.KJ[1],
          NB = nB.h.KJ[2],
          uB = nB.h.KJ[3];
        jB.subtractToRef(BB, dB), this.direction.scaleToRef(pB._Rayl, NB), QB.addToRef(NB, IB), BB.subtractToRef(QB, uB);
        const UB = nB.m.Dot(dB, dB),
          aB = nB.m.Dot(dB, NB),
          rB = nB.m.Dot(NB, NB),
          sB = nB.m.Dot(dB, uB),
          JB = nB.m.Dot(NB, uB),
          mB = UB * rB - aB * aB;
        let yB, kB, GB = mB,
          LB = mB;
        mB < pB._Smallnum ? (yB = 0, GB = 1, kB = JB, LB = rB) : (yB = aB * JB - rB * sB, kB = UB * JB - aB * sB, yB < 0 ? (yB = 0, kB = JB, LB = rB) : yB > GB && (yB = GB, kB = JB + aB, LB = rB)), kB < 0 ? (kB = 0, -sB < 0 ? yB = 0 : -sB > UB ? yB = GB : (yB = -sB, GB = UB)) : kB > LB && (kB = LB, -sB + aB < 0 ? yB = 0 : -sB + aB > UB ? yB = GB : (yB = -sB + aB, GB = UB));
        const gB = Math.abs(yB) < pB._Smallnum ? 0 : yB / GB,
          tB = Math.abs(kB) < pB._Smallnum ? 0 : kB / LB,
          SB = nB.h.KJ[4];
        NB.scaleToRef(tB, SB);
        const MB = nB.h.KJ[5];
        dB.scaleToRef(gB, MB), MB.addInPlace(uB);
        const EB = nB.h.KJ[6];
        MB.subtractToRef(SB, EB);
        return tB > 0 && tB <= this.length && EB.lengthSquared() < zB * zB ? MB.length() : -1
      }
      update(BB, jB, zB, QB, dB, IB, NB) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          pB._RayDistant || (pB._RayDistant = pB.Zero()), pB._RayDistant.unprojectRayToRef(BB, jB, zB, QB, nB.c.IdentityReadOnly, IB, NB);
          const uB = nB.h.Matrix[0];
          dB.invertToRef(uB), pB.TransformToRef(pB._RayDistant, uB, this)
        } else this.unprojectRayToRef(BB, jB, zB, QB, dB, IB, NB);
        return this
      }
      static Zero() {
        return new pB(nB.m.Zero(), nB.m.Zero())
      }
      static CreateNew(BB, jB, zB, QB, nB, dB, IB) {
        return pB.Zero().update(BB, jB, zB, QB, nB, dB, IB)
      }
      static CreateNewFromTo(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB.c.IdentityReadOnly;
        const QB = new pB(new nB.m(0, 0, 0), new nB.m(0, 0, 0));
        return pB.CreateFromToToRef(BB, jB, QB, zB)
      }
      static CreateFromToToRef(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nB.c.IdentityReadOnly;
        zB.origin.jH(BB);
        const dB = jB.subtractToRef(BB, zB.direction),
          IB = Math.sqrt(dB.x * dB.x + dB.y * dB.y + dB.z * dB.z);
        return zB.length = IB, zB.direction.normalize(), pB.TransformToRef(zB, QB, zB)
      }
      static Transform(BB, jB) {
        const zB = new pB(new nB.m(0, 0, 0), new nB.m(0, 0, 0));
        return pB.TransformToRef(BB, jB, zB), zB
      }
      static TransformToRef(BB, jB, zB) {
        nB.m.TransformCoordinatesToRef(BB.origin, jB, zB.origin), nB.m.TransformNormalToRef(BB.direction, jB, zB.direction), zB.length = BB.length, zB.epsilon = BB.epsilon;
        const QB = zB.direction,
          dB = QB.length();
        if (0 !== dB && 1 !== dB) {
          const BB = 1 / dB;
          QB.x *= BB, QB.y *= BB, QB.z *= BB, zB.length *= dB
        }
        return zB
      }
      unprojectRayToRef(BB, jB, zB, QB, dB, IB, NB) {
        const UB = nB.h.Matrix[0];
        dB.multiplyToRef(IB, UB), UB.multiplyToRef(NB, UB), UB.invert();
        const aB = uB.c.LastCreatedEngine,
          pB = nB.h.KJ[0];
        pB.x = BB / zB * 2 - 1, pB.y = -(jB / QB * 2 - 1), pB.z = aB?.jQB ? 1 : aB?.isNDCHalfZRange ? 0 : -1;
        const rB = nB.h.KJ[1].U3(pB.x, pB.y, 1 - 1e-8),
          sB = nB.h.KJ[2],
          JB = nB.h.KJ[3];
        nB.m.TransformCoordinatesToRef(pB, UB, sB), nB.m.TransformCoordinatesToRef(rB, UB, JB), this.origin.jH(sB), JB.subtractToRef(sB, this.direction), this.direction.normalize()
      }
    }

    function rB(BB, jB, zB, QB, nB) {
      let dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const IB = pB.Zero();
      return sB(BB, jB, zB, QB, IB, nB, dB), IB
    }

    function sB(BB, jB, zB, QB, dB, IB) {
      let NB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const UB = BB.wJ();
      if (!IB && !(IB = BB.activeCamera) && !(IB = BB.cameraToUseForPointers)) return BB;
      const aB = IB.viewport,
        pB = UB.getRenderHeight(),
        {
          x: rB,
          y: sB,
          width: JB,
          height: mB
        } = aB.toGlobal(UB.getRenderWidth(), pB),
        yB = 1 / UB.getHardwareScalingLevel();
      return jB = jB * yB - rB, zB = zB * yB - (pB - sB - mB), dB.update(jB, zB, JB, mB, QB || nB.c.IdentityReadOnly, NB ? nB.c.IdentityReadOnly : IB.getViewMatrix(), IB.getProjectionMatrix(), uB), BB
    }

    function JB(BB, jB, zB, QB) {
      const nB = pB.Zero();
      return mB(BB, jB, zB, nB, QB), nB
    }

    function mB(BB, jB, zB, QB, dB) {
      if (!NB.d) return BB;
      const IB = BB.wJ();
      if (!dB && !(dB = BB.activeCamera) && !(dB = BB.cameraToUseForPointers)) throw new Error("Active camera not set");
      const uB = dB.viewport,
        UB = IB.getRenderHeight(),
        {
          x: aB,
          y: pB,
          width: rB,
          height: sB
        } = uB.toGlobal(IB.getRenderWidth(), UB),
        JB = nB.c.Identity(),
        mB = 1 / IB.getHardwareScalingLevel();
      return jB = jB * mB - aB, zB = zB * mB - (UB - pB - sB), QB.update(jB, zB, rB, sB, JB, JB, dB.getProjectionMatrix()), BB
    }

    function yB(BB, jB, zB, QB, nB, dB, IB, NB) {
      return kB(BB, zB, QB, jB(QB, zB.enableDistantPicking), nB, dB, IB, NB)
    }

    function kB(BB, jB, zB, QB, nB, dB, IB, NB) {
      const uB = jB.intersects(QB, nB, IB, dB, zB, NB);
      return uB && uB.hit ? !nB && null != BB && uB.distance >= BB.distance ? null : uB : null
    }

    function GB(BB, jB) {
      return "InstancedLinesMesh" === BB || "LinesMesh" === BB ? jB.intersectionThreshold : 0
    }

    function LB(BB) {
      const jB = BB.getClassName();
      if ("GreasedLineMesh" === jB) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const zB = BB.rawBoundingInfo;
      return {
        rawBoundingInfo: zB,
        intersectionThreshold: zB ? GB(jB, BB) : 0
      }
    }

    function gB(BB, jB, zB, QB, nB) {
      const dB = BB(zB, jB.enableDistantPicking);
      return dB.intersectsSphere(QB.fQB, nB) && dB.intersectsBox(QB.boundingBox, nB) ? dB : null
    }

    function tB(BB, jB, zB, QB, dB, IB) {
      let uB = null;
      const UB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        pB = BB.cameraToUseForPointers || BB.activeCamera,
        rB = aB.internalPickerForMesh || yB,
        sB = rB === yB;
      for (let NB = 0; NB < BB.meshes.length; NB++) {
        const aB = BB.meshes[NB];
        if (zB) {
          if (!zB(aB, -1)) continue
        } else if (!aB.isEnabled() || !aB.isVisible || !aB.Ny) continue;
        const JB = UB && aB.isWorldMatrixCameraDependent(),
          mB = aB.computeWorldMatrix(JB, pB);
        if (aB.hasThinInstances && aB.tjB) {
          const BB = rB(uB, jB, aB, mB, !0, !0, IB);
          if (BB) {
            if (dB) return BB;
            const {
              rawBoundingInfo: NB,
              intersectionThreshold: UB
            } = LB(aB), pB = aB._thinInstanceDataStorage.matrixData;
            if (pB) {
              const BB = nB.h.Matrix[0],
                JB = nB.h.Matrix[1],
                yB = Math.min(aB.F_, pB.length >> 4);
              for (let GB = 0; GB < yB; GB++) {
                if (zB && !zB(aB, GB)) continue;
                nB.c.FromArrayToRef(pB, GB << 4, BB), BB.multiplyToRef(mB, JB);
                const yB = sB && NB ? gB(jB, aB, JB, NB, UB) : null;
                if (sB && NB && !yB) continue;
                const LB = sB && yB ? kB(uB, aB, JB, yB, QB, dB, IB, !0) : rB(uB, jB, aB, JB, QB, dB, IB, !0);
                if (LB && (uB = LB, uB.thinInstanceIndex = GB, QB)) return uB
              }
            }
          }
        } else {
          const BB = rB(uB, jB, aB, mB, QB, dB, IB);
          if (BB && (uB = BB, QB)) return uB
        }
      }
      return uB || new NB.d
    }

    function SB(BB, jB, zB, QB) {
      if (!NB.d) return null;
      const dB = [],
        IB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        uB = BB.cameraToUseForPointers || BB.activeCamera,
        UB = aB.internalPickerForMesh || yB,
        pB = UB === yB;
      for (let NB = 0; NB < BB.meshes.length; NB++) {
        const aB = BB.meshes[NB];
        if (zB) {
          if (!zB(aB, -1)) continue
        } else if (!aB.isEnabled() || !aB.isVisible || !aB.Ny) continue;
        const rB = IB && aB.isWorldMatrixCameraDependent(),
          sB = aB.computeWorldMatrix(rB, uB);
        if (aB.hasThinInstances && aB.tjB) {
          if (UB(null, jB, aB, sB, !0, !0, QB)) {
            const {
              rawBoundingInfo: BB,
              intersectionThreshold: IB
            } = LB(aB), NB = aB._thinInstanceDataStorage.matrixData;
            if (NB) {
              const uB = nB.h.Matrix[0],
                rB = nB.h.Matrix[1],
                JB = Math.min(aB.F_, NB.length >> 4);
              for (let mB = 0; mB < JB; mB++) {
                if (zB && !zB(aB, mB)) continue;
                nB.c.FromArrayToRef(NB, mB << 4, uB), uB.multiplyToRef(sB, rB);
                const JB = pB && BB ? gB(jB, aB, rB, BB, IB) : null;
                if (pB && BB && !JB) continue;
                const yB = pB && JB ? kB(null, aB, rB, JB, !1, !1, QB, !0) : UB(null, jB, aB, rB, !1, !1, QB, !0);
                yB && (yB.thinInstanceIndex = mB, dB.push(yB))
              }
            }
          }
        } else {
          const BB = UB(null, jB, aB, sB, !1, !1, QB);
          BB && dB.push(BB)
        }
      }
      return dB
    }

    function MB(BB, jB, zB, QB, dB, IB) {
      if (!NB.d) return null;
      const uB = tB(BB, (QB => (BB._tempPickingRay || (BB._tempPickingRay = pB.Zero()), sB(BB, jB, zB, QB, BB._tempPickingRay, IB || null), BB._tempPickingRay)), QB, dB, !0);
      return uB && (uB.ray = rB(BB, jB, zB, nB.c.Identity(), IB || null)), uB
    }

    function EB(BB, jB, zB, QB, dB, IB, NB) {
      const uB = tB(BB, ((QB, nB) => (BB._tempPickingRay || (BB._tempPickingRay = pB.Zero()), sB(BB, jB, zB, QB, BB._tempPickingRay, IB || null, !1, nB), BB._tempPickingRay)), QB, dB, !1, NB);
      return uB && (uB.ray = rB(BB, jB, zB, nB.c.Identity(), IB || null)), uB
    }

    function iB(BB, jB, zB, QB, dB) {
      const IB = tB(BB, (zB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = nB.c.Identity()), zB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = pB.Zero()), pB.TransformToRef(jB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), zB, QB, !1, dB);
      return IB && (IB.ray = jB), IB
    }

    function qB(BB, jB, zB, QB, nB, dB) {
      return SB(BB, (QB => rB(BB, jB, zB, QB, nB || null)), QB, dB)
    }

    function fB(BB, jB, zB, QB) {
      return SB(BB, (zB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = nB.c.Identity()), zB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = pB.Zero()), pB.TransformToRef(jB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), zB, QB)
    }

    function oB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        QB = arguments.length > 3 ? arguments[3] : void 0,
        dB = arguments.length > 4 ? arguments[4] : void 0;
      QB || (QB = BB.getWorldMatrix()), jB.length = zB, dB ? jB.origin.jH(dB) : jB.origin.jH(BB.position);
      const IB = nB.h.KJ[2];
      IB.set(0, 0, BB._scene.useRightHandedSystem ? -1 : 1);
      const NB = nB.h.KJ[3];
      return nB.m.TransformNormalToRef(IB, QB, NB), nB.m.NormalizeToRef(NB, jB.direction), jB
    }

    function HB(BB, jB) {
      jB && (jB.prototype.getForwardRay = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        return oB(this, new pB(nB.m.Zero(), nB.m.Zero(), BB), BB, jB, zB)
      }, jB.prototype.getForwardRayToRef = function(BB) {
        return oB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), BB && (UB.d._IsPickingAvailable = !0, BB.prototype.createPickingRay = function(BB, jB, zB, QB) {
        return rB(this, BB, jB, zB, QB, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    pB._TmpVector3 = (0, dB.c)(6, nB.m.Zero), pB._RayDistant = pB.Zero(), pB._Smallnum = 1e-8, pB._Rayl = 1e9
  },
  41651: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB.y
    });
    var QB = zB(40156),
      nB = zB(40301),
      dB = zB(41659);
    let IB = !1;
    IB || (IB = !0, (0, dB.e)(QB.g, nB.b), QB.g.prototype.createPickingRayToRef = function(BB, jB, zB, QB, nB) {
      let IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        NB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, dB.l)(this, BB, jB, zB, QB, nB, IB, NB)
    }, QB.g.prototype.createPickingRayInCameraSpace = function(BB, jB, zB) {
      return (0, dB.j)(this, BB, jB, zB)
    }, QB.g.prototype.createPickingRayInCameraSpaceToRef = function(BB, jB, zB, QB) {
      return (0, dB.f)(this, BB, jB, zB, QB)
    }, QB.g.prototype.pickWithBoundingInfo = function(BB, jB, zB, QB, nB) {
      return (0, dB.s)(this, BB, jB, zB, QB, nB)
    }, QB.g.prototype.zs = function(BB, jB, zB, QB, nB, IB) {
      let NB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, dB.x)(this, BB, jB, zB, QB, nB, IB, NB)
    }, QB.g.prototype.pickWithRay = function(BB, jB, zB, QB) {
      return (0, dB.t)(this, BB, jB, zB, QB)
    }, QB.g.prototype.multiPick = function(BB, jB, zB, QB, nB) {
      return (0, dB.q)(this, BB, jB, zB, QB, nB)
    }, QB.g.prototype.multiPickWithRay = function(BB, jB, zB) {
      return (0, dB.n)(this, BB, jB, zB)
    })
  },
  41663: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37171),
      IB = zB(40344),
      NB = zB(41668),
      uB = zB(40306),
      UB = zB(37222);
    let aB = (() => {
        var BB;
        let jB, zB, uB, UB, aB, pB, rB, sB, JB = NB.b,
          mB = [],
          yB = [],
          kB = [],
          GB = [],
          LB = [],
          gB = [],
          tB = [],
          SB = [],
          MB = [],
          EB = [],
          iB = [],
          qB = [],
          fB = [];
        return BB = class extends JB {
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
          constructor(BB, jB, zB, nB) {
            super(BB, zB, nB), this._shadowFrustumSize = ((0, QB.g)(this, mB), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, QB.g)(this, yB, !0), this.autoCalcShadowZBounds = ((0, QB.g)(this, kB), (0, QB.g)(this, GB, !1)), this._orthoLeft = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, Number.MAX_VALUE)), this._orthoRight = ((0, QB.g)(this, tB), (0, QB.g)(this, SB, Number.MIN_VALUE)), this._orthoTop = ((0, QB.g)(this, MB), (0, QB.g)(this, EB, Number.MIN_VALUE)), this._orthoBottom = ((0, QB.g)(this, iB), (0, QB.g)(this, qB, Number.MAX_VALUE)), (0, QB.g)(this, fB), this.position = jB.scale(-1), this.direction = jB
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return IB.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(BB, jB, zB) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(BB) : this._setDefaultAutoExtendShadowProjectionMatrix(BB, jB, zB)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(BB) {
            const jB = this.aY().activeCamera;
            dB.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : jB ? jB.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : jB ? jB.maxZ : 1e4, BB, this.aY().wJ().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(BB, jB, zB) {
            const QB = this.aY().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const BB = dB.m.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let QB = Number.MAX_VALUE,
                nB = -Number.MAX_VALUE;
              for (let IB = 0; IB < zB.length; IB++) {
                const NB = zB[IB];
                if (!NB) continue;
                const uB = NB.rV().boundingBox;
                for (let zB = 0; zB < uB.vectorsWorld.length; zB++) dB.m.TransformCoordinatesToRef(uB.vectorsWorld[zB], jB, BB), BB.x < this._orthoLeft && (this._orthoLeft = BB.x), BB.y < this._orthoBottom && (this._orthoBottom = BB.y), BB.x > this._orthoRight && (this._orthoRight = BB.x), BB.y > this._orthoTop && (this._orthoTop = BB.y), this.autoCalcShadowZBounds && (BB.z < QB && (QB = BB.z), BB.z > nB && (nB = BB.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = QB, this._shadowMaxZ = nB)
            }
            const nB = this._orthoRight - this._orthoLeft,
              IB = this._orthoTop - this._orthoBottom,
              NB = void 0 !== this.shadowMinZ ? this.shadowMinZ : QB?.minZ || 0,
              uB = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : QB?.maxZ || 1e4,
              UB = this.aY().wJ().jQB;
            dB.c.OrthoOffCenterLHToRef(this._orthoLeft - nB * this.shadowOrthoScale, this._orthoRight + nB * this.shadowOrthoScale, this._orthoBottom - IB * this.shadowOrthoScale, this._orthoTop + IB * this.shadowOrthoScale, UB ? uB : NB, UB ? NB : uB, BB, this.aY().wJ().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(BB, jB) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, jB), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, jB), this)
          }
          transferToNodeMaterialEffect(BB, jB) {
            return this.computeTransformedInformation() ? (BB.setFloat3(jB, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (BB.setFloat3(jB, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(BB) {
            const jB = this._scene.wJ();
            return !jB.jQB && jB.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(BB) {
            const jB = this._scene.wJ();
            return jB.jQB && jB.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(BB, jB) {
            BB["DIRLIGHT" + jB] = !0
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(JB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)("orthoLeft")], pB = [(0, nB.A)("orthoRight")], rB = [(0, nB.A)("orthoTop")], sB = [(0, nB.A)("orthoBottom")], (0, QB.e)(BB, null, jB, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowFrustumSize" in BB,
              get: BB => BB.shadowFrustumSize
            },
            metadata: dB
          }, null, mB), (0, QB.e)(BB, null, zB, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowOrthoScale" in BB,
              get: BB => BB.shadowOrthoScale
            },
            metadata: dB
          }, null, mB), (0, QB.e)(null, null, uB, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoUpdateExtends" in BB,
              get: BB => BB.autoUpdateExtends,
              set: (BB, jB) => {
                BB.autoUpdateExtends = jB
              }
            },
            metadata: dB
          }, yB, kB), (0, QB.e)(null, null, UB, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoCalcShadowZBounds" in BB,
              get: BB => BB.autoCalcShadowZBounds,
              set: (BB, jB) => {
                BB.autoCalcShadowZBounds = jB
              }
            },
            metadata: dB
          }, GB, LB), (0, QB.e)(null, null, aB, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoLeft" in BB,
              get: BB => BB._orthoLeft,
              set: (BB, jB) => {
                BB._orthoLeft = jB
              }
            },
            metadata: dB
          }, gB, tB), (0, QB.e)(null, null, pB, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoRight" in BB,
              get: BB => BB._orthoRight,
              set: (BB, jB) => {
                BB._orthoRight = jB
              }
            },
            metadata: dB
          }, SB, MB), (0, QB.e)(null, null, rB, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoTop" in BB,
              get: BB => BB._orthoTop,
              set: (BB, jB) => {
                BB._orthoTop = jB
              }
            },
            metadata: dB
          }, EB, iB), (0, QB.e)(null, null, sB, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoBottom" in BB,
              get: BB => BB._orthoBottom,
              set: (BB, jB) => {
                BB._orthoBottom = jB
              }
            },
            metadata: dB
          }, qB, fB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      pB = !1;
    pB || (pB = !0, uB.c.AddNodeConstructor("Light_Type_1", ((BB, jB) => () => new aB(BB, dB.m.Zero(), jB))), (0, UB.d)("BABYLON.DirectionalLight", aB))
  },
  41679: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => xj
    });
    var QB = zB(38811),
      nB = zB(37202),
      dB = zB(37171),
      IB = zB(40211),
      NB = zB(41682),
      uB = zB(37197),
      UB = zB(40373),
      aB = zB(37379),
      pB = zB(38813),
      rB = zB(38780),
      sB = zB(37208);
    class JB {
      constructor() {
        this.direction1 = new dB.m(0, 1, 0), this.direction2 = new dB.m(0, 1, 0)
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = (0, sB.RandomRange)(this.direction1.x, this.direction2.x),
          IB = (0, sB.RandomRange)(this.direction1.y, this.direction2.y),
          NB = (0, sB.RandomRange)(this.direction1.z, this.direction2.z);
        QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
      }
      startPositionFunction(BB, jB, zB, QB) {
        QB ? jB.U3(0, 0, 0) : dB.m.TransformCoordinatesFromFloatsToRef(0, 0, 0, BB, jB)
      }
      clone() {
        const BB = new JB;
        return rB.e.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
      }
      parse(BB) {
        dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class mB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = jB, this.directionRandomizer = zB
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = zB.position.subtract(BB.getTranslation()).normalize(),
          IB = (0, sB.RandomRange)(0, this.directionRandomizer),
          NB = (0, sB.RandomRange)(0, this.directionRandomizer),
          uB = (0, sB.RandomRange)(0, this.directionRandomizer);
        nB.x += IB, nB.y += NB, nB.z += uB, nB.normalize(), QB ? jB.jH(nB) : dB.m.TransformNormalFromFloatsToRef(nB.x, nB.y, nB.z, BB, jB)
      }
      startPositionFunction(BB, jB, zB, QB) {
        const nB = this.radius - (0, sB.RandomRange)(0, this.radius * this.radiusRange),
          IB = (0, sB.RandomRange)(0, 1),
          NB = (0, sB.RandomRange)(0, 2 * Math.PI),
          uB = Math.acos(2 * IB - 1),
          UB = nB * Math.cos(NB) * Math.sin(uB),
          aB = nB * Math.cos(uB),
          pB = nB * Math.sin(NB) * Math.sin(uB);
        QB ? jB.U3(UB, Math.abs(aB), pB) : dB.m.TransformCoordinatesFromFloatsToRef(UB, Math.abs(aB), pB, BB, jB)
      }
      clone() {
        const BB = new mB(this.radius, this.directionRandomizer);
        return rB.e.DeepCopy(this, BB), BB
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
    class yB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = jB, this.directionRandomizer = zB
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = zB.position.subtract(BB.getTranslation()).normalize(),
          IB = (0, sB.RandomRange)(0, this.directionRandomizer),
          NB = (0, sB.RandomRange)(0, this.directionRandomizer),
          uB = (0, sB.RandomRange)(0, this.directionRandomizer);
        nB.x += IB, nB.y += NB, nB.z += uB, nB.normalize(), QB ? jB.jH(nB) : dB.m.TransformNormalFromFloatsToRef(nB.x, nB.y, nB.z, BB, jB)
      }
      startPositionFunction(BB, jB, zB, QB) {
        const nB = this.radius - (0, sB.RandomRange)(0, this.radius * this.radiusRange),
          IB = (0, sB.RandomRange)(0, 1),
          NB = (0, sB.RandomRange)(0, 2 * Math.PI),
          uB = Math.acos(2 * IB - 1),
          UB = nB * Math.cos(NB) * Math.sin(uB),
          aB = nB * Math.cos(uB),
          pB = nB * Math.sin(NB) * Math.sin(uB);
        QB ? jB.U3(UB, aB, pB) : dB.m.TransformCoordinatesFromFloatsToRef(UB, aB, pB, BB, jB)
      }
      clone() {
        const BB = new yB(this.radius, this.directionRandomizer);
        return rB.e.DeepCopy(this, BB), BB
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
    class kB extends yB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dB.m(0, 1, 0),
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0);
        super(BB), this.direction1 = jB, this.direction2 = zB
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = (0, sB.RandomRange)(this.direction1.x, this.direction2.x),
          IB = (0, sB.RandomRange)(this.direction1.y, this.direction2.y),
          NB = (0, sB.RandomRange)(this.direction1.z, this.direction2.z);
        QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
      }
      clone() {
        const BB = new kB(this.radius, this.direction1, this.direction2);
        return rB.e.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
      }
      parse(BB) {
        super.parse(BB), dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    var GB = zB(38773);
    class LB {
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
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = zB, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = jB, this.radius = BB
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = zB.position.subtract(BB.getTranslation()).normalize(),
          IB = (0, sB.RandomRange)(0, this.directionRandomizer),
          NB = (0, sB.RandomRange)(0, this.directionRandomizer),
          uB = (0, sB.RandomRange)(0, this.directionRandomizer);
        nB.x += IB, nB.y += NB, nB.z += uB, nB.normalize(), QB ? jB.jH(nB) : dB.m.TransformNormalFromFloatsToRef(nB.x, nB.y, nB.z, BB, jB)
      }
      startPositionFunction(BB, jB, zB, QB) {
        const nB = (0, sB.RandomRange)(0, 2 * Math.PI);
        let IB;
        this.emitFromSpawnPointOnly ? IB = 1e-4 : (IB = (0, sB.RandomRange)(0, this.heightRange), IB = 1 - IB * IB);
        let NB = this._radius - (0, sB.RandomRange)(0, this._radius * this.radiusRange);
        NB *= IB;
        const uB = NB * Math.sin(nB),
          UB = NB * Math.cos(nB),
          aB = IB * this._height;
        if (QB) return jB.x = uB, jB.y = aB, void(jB.z = UB);
        dB.m.TransformCoordinatesFromFloatsToRef(uB, aB, UB, BB, jB)
      }
      clone() {
        const BB = new LB(this._radius, this._angle, this.directionRandomizer);
        return rB.e.DeepCopy(this, BB), BB
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
    class gB extends LB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0),
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0);
        super(BB, jB), this.direction1 = zB, this.direction2 = QB
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = (0, sB.RandomRange)(this.direction1.x, this.direction2.x),
          IB = (0, sB.RandomRange)(this.direction1.y, this.direction2.y),
          NB = (0, sB.RandomRange)(this.direction1.z, this.direction2.z);
        QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
      }
      clone() {
        const BB = new gB(this.radius, this.angle, this.direction1, this.direction2);
        return rB.e.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
      }
      parse(BB) {
        super.parse(BB), dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class tB {
      get mesh() {
        return this._mesh
      }
      set mesh(BB) {
        this._mesh !== BB && (this._mesh = BB, BB ? (this._indices = BB.dQB(), this._positions = BB.getVerticesData(IB.l.PositionKind), this._normals = BB.getVerticesData(IB.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = dB.m.Zero(), this._mesh = null, this.direction1 = new dB.m(0, 1, 0), this.direction2 = new dB.m(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = BB
      }
      startDirectionFunction(BB, jB, zB, QB) {
        if (this.useMeshNormalsForDirection && this._normals) return void dB.m.TransformNormalToRef(this._storedNormal, BB, jB);
        const nB = (0, sB.RandomRange)(this.direction1.x, this.direction2.x),
          IB = (0, sB.RandomRange)(this.direction1.y, this.direction2.y),
          NB = (0, sB.RandomRange)(this.direction1.z, this.direction2.z);
        QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
      }
      startPositionFunction(BB, jB, zB, QB) {
        if (!this._indices || !this._positions) return;
        const nB = 3 * (Math.random() * (this._indices.length / 3) | 0),
          IB = Math.random(),
          NB = Math.random() * (1 - IB),
          uB = 1 - IB - NB,
          UB = this._indices[nB],
          aB = this._indices[nB + 1],
          pB = this._indices[nB + 2],
          rB = dB.h.KJ[0],
          sB = dB.h.KJ[1],
          JB = dB.h.KJ[2],
          mB = dB.h.KJ[3];
        dB.m.FromArrayToRef(this._positions, 3 * UB, rB), dB.m.FromArrayToRef(this._positions, 3 * aB, sB), dB.m.FromArrayToRef(this._positions, 3 * pB, JB), mB.x = IB * rB.x + NB * sB.x + uB * JB.x, mB.y = IB * rB.y + NB * sB.y + uB * JB.y, mB.z = IB * rB.z + NB * sB.z + uB * JB.z, QB ? jB.U3(mB.x, mB.y, mB.z) : dB.m.TransformCoordinatesFromFloatsToRef(mB.x, mB.y, mB.z, BB, jB), this.useMeshNormalsForDirection && this._normals && (dB.m.FromArrayToRef(this._normals, 3 * UB, rB), dB.m.FromArrayToRef(this._normals, 3 * aB, sB), dB.m.FromArrayToRef(this._normals, 3 * pB, JB), this._storedNormal.x = IB * rB.x + NB * sB.x + uB * JB.x, this._storedNormal.y = IB * rB.y + NB * sB.y + uB * JB.y, this._storedNormal.z = IB * rB.z + NB * sB.z + uB * JB.z)
      }
      clone() {
        const BB = new tB(this.mesh);
        return rB.e.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB.meshId = this.mesh?.id, BB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, BB
      }
      parse(BB, jB) {
        dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2), BB.meshId && jB && (this.mesh = jB.getLastMeshById(BB.meshId)), this.useMeshNormalsForDirection = BB.useMeshNormalsForDirection
      }
    }
    class SB {
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
        const jB = this._attractors.indexOf(BB); - 1 !== jB && this._attractors.splice(jB, 1)
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
        this._useLogarithmicDepth = BB && this.aY().wJ().getCaps().fragmentDepthSupported
      }
      aY() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(BB) {
        switch (BB) {
          case SB.BLENDMODE_MULTIPLYADD:
            return;
          case SB.BLENDMODE_ADD:
            BB = 1;
            break;
          case SB.BLENDMODE_ONEONE:
            BB = 6;
            break;
          case SB.BLENDMODE_STANDARD:
            BB = 2;
            break;
          case SB.BLENDMODE_MULTIPLY:
            BB = 4;
            break;
          case SB.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(BB, jB, zB) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, BB, jB, zB), this
      }
      removeEmitRateGradient(BB) {
        return this._removeFactorGradient(this._emitRateGradients, BB), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : dB.m.Zero()
      }
      set direction1(BB) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = BB)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : dB.m.Zero()
      }
      set direction2(BB) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = BB)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : dB.m.Zero()
      }
      set minEmitBox(BB) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = BB)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : dB.m.Zero()
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
      _addFactorGradient(BB, jB, zB, nB) {
        const dB = new QB.f(jB, zB, nB);
        BB.push(dB), BB.sort(((BB, jB) => BB.gradient < jB.gradient ? -1 : BB.gradient > jB.gradient ? 1 : 0))
      }
      _removeFactorGradient(BB, jB) {
        if (!BB) return;
        let zB = 0;
        for (const QB of BB) {
          if (QB.gradient === jB) {
            BB.splice(zB, 1);
            break
          }
          zB++
        }
      }
      _removeGradientAndTexture(BB, jB, zB) {
        if (!jB) return this;
        let QB = 0;
        for (const nB of jB) {
          if (nB.gradient === BB) {
            jB.splice(QB, 1);
            break
          }
          QB++
        }
        return zB && zB.dispose(), this
      }
      constructor(BB) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = dB.m.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new dB.m(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = SB.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new dB.i(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new dB.m(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = dB.m.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new aB.g(1, 1, 1, 1), this.color2 = new aB.g(1, 1, 1, 1), this.colorDead = new aB.g(0, 0, 0, 1), this.textureMask = new aB.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new UB.c, this.id = BB, this.name = BB
      }
      createPointEmitter(BB, jB) {
        const zB = function(BB, jB) {
          const zB = new JB;
          return zB.direction1 = BB, zB.direction2 = jB, zB
        }(BB, jB);
        return this.particleEmitterType = zB, zB
      }
      createHemisphericEmitter() {
        const BB = function() {
          return new mB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createSphereEmitter() {
        const BB = function() {
          return new yB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createDirectedSphereEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dB.m(0, 1, 0),
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0);
          return new kB(BB, jB, zB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dB.m(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new GB.g(BB, jB, zB, QB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = BB, BB
      }
      createDirectedCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0),
            nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new dB.m(0, 1, 0);
          return new GB.d(BB, jB, zB, QB, nB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new dB.m(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new LB(BB, jB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = BB, BB
      }
      createDirectedConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0),
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0);
          return new gB(BB, jB, zB, QB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createBoxEmitter(BB, jB, zB, QB) {
        const nB = new pB.c;
        return this.particleEmitterType = nB, this.direction1 = BB, this.direction2 = jB, this.minEmitBox = zB, this.maxEmitBox = QB, nB
      }
      createMeshEmitter() {
        const BB = function() {
          return new tB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = BB, BB
      }
    }
    SB.BLENDMODE_ONEONE = 0, SB.BLENDMODE_STANDARD = 1, SB.BLENDMODE_ADD = 2, SB.BLENDMODE_MULTIPLY = 3, SB.BLENDMODE_MULTIPLYADD = 4, SB.BLENDMODE_SUBTRACT = -1;
    class MB {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new aB.g(0, 0, 0, 0), this.currentColor2 = new aB.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = dB.m.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class EB {
      constructor(BB) {
        this.particleSystem = BB, this.position = dB.m.Zero(), this.direction = dB.m.Zero(), this.color = new aB.g(0, 0, 0, 0), this.colorStep = new aB.g(0, 0, 0, 0), this.initialColor = new aB.g(0, 0, 0, 0), this.colorDead = new aB.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new dB.i(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new MB, this.id = EB._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let BB = this.age,
          jB = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === jB ? (jB = 1, BB = this._properties.randomCellOffset) : BB += this._properties.randomCellOffset);
        const zB = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let QB;
        QB = this._properties.initialSpriteCellLoop ? (0, sB.Clamp)(BB * jB % this.lifeTime / this.lifeTime) : (0, sB.Clamp)(BB * jB / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + QB * zB | 0
      }
      _inheritParticleInfoToSubEmitter(BB) {
        if (BB.particleSystem.emitter.position) {
          const jB = BB.particleSystem.emitter;
          if (jB.position.jH(this.position), BB.inheritDirection) {
            const BB = dB.h.KJ[0];
            this.direction.normalizeToRef(BB), jB.setDirection(BB, 0, Math.PI / 2)
          }
        } else {
          BB.particleSystem.emitter.jH(this.position)
        }
        this.direction.scaleToRef(BB.inheritedVelocityAmount / 2, dB.h.KJ[0]), BB.particleSystem._inheritedVelocityOffset.jH(dB.h.KJ[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const BB of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(BB)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = EB._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(BB) {
        BB.position.jH(this.position), this._properties.initialDirection ? BB._properties.initialDirection ? BB._properties.initialDirection.jH(this._properties.initialDirection) : BB._properties.initialDirection = this._properties.initialDirection.clone() : BB._properties.initialDirection = null, BB.direction.jH(this.direction), this._properties.localPosition && (BB._properties.localPosition ? BB._properties.localPosition.jH(this._properties.localPosition) : BB._properties.localPosition = this._properties.localPosition.clone()), BB.color.jH(this.color), BB.colorStep.jH(this.colorStep), BB.initialColor.jH(this.initialColor), BB.colorDead.jH(this.colorDead), BB.lifeTime = this.lifeTime, BB.age = this.age, BB._properties.randomCellOffset = this._properties.randomCellOffset, BB.size = this.size, BB.scale.jH(this.scale), BB.angle = this.angle, BB.angularSpeed = this.angularSpeed, BB.particleSystem = this.particleSystem, BB.cellIndex = this.cellIndex, BB.id = this.id, BB._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (BB._properties.currentColorGradient = this._properties.currentColorGradient, BB._properties.currentColor1.jH(this._properties.currentColor1), BB._properties.currentColor2.jH(this._properties.currentColor2)), this._properties.currentSizeGradient && (BB._properties.currentSizeGradient = this._properties.currentSizeGradient, BB._properties.currentSize1 = this._properties.currentSize1, BB._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, BB._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (BB._properties.currentVelocityGradient = this._properties.currentVelocityGradient, BB._properties.currentVelocity1 = this._properties.currentVelocity1, BB._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, BB._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (BB._properties.currentDragGradient = this._properties.currentDragGradient, BB._properties.currentDrag1 = this._properties.currentDrag1, BB._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (BB._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, BB._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, BB._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (BB.remapData && this.remapData ? BB.remapData.jH(this.remapData) : BB.remapData = new dB.n(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.jH(this._properties.randomNoiseCoordinates1), BB._properties.randomNoiseCoordinates2.jH(this._properties.randomNoiseCoordinates2)) : (BB._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), BB._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), BB.metadata = this.metadata
      }
    }
    EB._Count = 0;
    var iB = zB(41191);
    class qB {
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
      constructor(BB, jB, zB, QB) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = jB, this.WC = BB, this._scene = zB, this._host = QB, this._activeTargets = [], jB._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            cQ: this._getCorrectLoopMode()
          }, this._animation.dataType === iB.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = dB.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const BB = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, BB)
        }
        if (this.WC instanceof Array) {
          let BB = 0;
          for (const jB of this.WC) this._preparePath(jB, BB), this._getOriginalValues(BB), BB++;
          this._targetIsArray = !0
        } else this._preparePath(this.WC), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const nB = jB.getEvents();
        if (nB && nB.length > 0)
          for (const dB of nB) this._events.push(dB._clone());
        this._enableBlending = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = this._animation.targetPropertyPath;
        if (zB.length > 1) {
          let QB = BB;
          for (let BB = 0; BB < zB.length - 1; BB++) {
            const jB = zB[BB];
            if (QB = QB[jB], void 0 === QB) throw new Error(`Invalid property (${jB}) in property path (${zB.join(".")})`)
          }
          this._targetPath = zB[zB.length - 1], this._activeTargets[jB] = QB
        } else this._targetPath = zB[0], this._activeTargets[jB] = BB;
        if (void 0 === this._activeTargets[jB][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${zB.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.WC instanceof Array) {
            let BB = 0;
            for (const jB of this.WC) void 0 !== this._originalValue[BB] && this._setValue(jB, this._activeTargets[BB], this._originalValue[BB], -1, BB), BB++
          } else void 0 !== this._originalValue[0] && this._setValue(this.WC, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(BB, jB) {
        if (this._targetIsArray)
          for (let zB = 0; zB < this.WC.length; zB++) {
            const QB = this.WC[zB];
            this._setValue(QB, this._activeTargets[zB], BB, jB, zB)
          } else this._setValue(this.WC, this._directTarget, BB, jB, 0)
      }
      _getOriginalValues() {
        let BB, jB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const zB = this._activeTargets[jB];
        if (iB.e.InheritOriginalValueFromActiveAnimations) {
          const BB = this._scene._activeAnimatables;
          for (let QB = 0; QB < BB.length; QB++) {
            const nB = BB[QB]._runtimeAnimations;
            for (let BB = 0; BB < nB.length; BB++) {
              const QB = nB[BB];
              if (QB !== this && QB._targetPath === this._targetPath)
                for (let BB = 0; BB < QB._activeTargets.length; BB++)
                  if (QB._activeTargets[BB] === zB && void 0 !== QB._originalValue[BB]) return void(QB._originalValue[BB] && QB._originalValue[BB].clone ? this._originalValue[jB] = QB._originalValue[BB].clone() : this._originalValue[jB] = QB._originalValue[BB])
            }
          }
        }
        BB = zB.getLocalMatrix && "_matrix" === this._targetPath ? zB.getLocalMatrix() : zB[this._targetPath], BB && BB.clone ? this._originalValue[jB] = BB.clone() : this._originalValue[jB] = BB
      }
      _registerTargetForLateAnimationBinding(BB, jB) {
        const zB = BB.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(zB), zB._lateAnimationHolders || (zB._lateAnimationHolders = {}), zB._lateAnimationHolders[BB.targetPath] || (zB._lateAnimationHolders[BB.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: jB
        }), BB.isAdditive ? (zB._lateAnimationHolders[BB.targetPath].additiveAnimations.push(BB), zB._lateAnimationHolders[BB.targetPath].totalAdditiveWeight += BB.weight) : (zB._lateAnimationHolders[BB.targetPath].animations.push(BB), zB._lateAnimationHolders[BB.targetPath].totalWeight += BB.weight)
      }
      _setValue(BB, jB, zB, QB, nB) {
        const IB = this._scene._animationWrites,
          NB = this._scene._animationWriteCount++;
        let uB = IB[NB];
        if (uB || (uB = IB[NB] = {
            runtimeAnimation: this,
            target: BB,
            weight: QB,
            additive: !1,
            blendingFactor: 1,
            Dy: !1
          }), uB.runtimeAnimation = this, uB.target = BB, uB.weight = QB, uB.additive = this.isAdditive, uB.Dy = !1, this._currentActiveTarget = jB, this._weight = QB, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const BB = jB[this._targetPath];
            BB.clone ? this._originalBlendValue = BB.clone() : this._originalBlendValue = BB
          }
          this._originalBlendValue.m ? iB.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? dB.c.DecomposeLerpToRef(this._originalBlendValue, zB, this._blendingFactor, this._currentValue) : this._currentValue = dB.c.DecomposeLerp(this._originalBlendValue, zB, this._blendingFactor) : this._currentValue ? dB.c.LerpToRef(this._originalBlendValue, zB, this._blendingFactor, this._currentValue) : this._currentValue = dB.c.Lerp(this._originalBlendValue, zB, this._blendingFactor) : this._currentValue = iB.e._UniversalLerp(this._originalBlendValue, zB, this._blendingFactor);
          const QB = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          uB.blendingFactor = this._blendingFactor, this._blendingFactor += QB
        } else uB.blendingFactor = 1, this._currentValue ? this._currentValue.jH ? this._currentValue.jH(zB) : this._currentValue = zB : this._currentValue = zB?.clone ? zB.clone() : zB; - 1 !== QB ? this._registerTargetForLateAnimationBinding(this, this._originalValue[nB]) : this._animationState.cQ === iB.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[nB], jB[this._targetPath]) : jB[this._targetPath] = this._originalValue[nB] + this._currentValue : jB[this._targetPath] = this._currentValue, BB.DjB && BB.DjB(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.WC && this.WC.animationPropertiesOverride) {
          return "MorphTarget" === this.WC.getClassName?.() && null == this.WC._animationPropertiesOverride ? this._animation.cQ : this.WC.animationPropertiesOverride.cQ
        }
        return this._animation.cQ
      }
      goToFrame(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const zB = this._animation.getKeys();
        BB < zB[0].frame ? BB = zB[0].frame : BB > zB[zB.length - 1].frame && (BB = zB[zB.length - 1].frame);
        const QB = this._events;
        if (QB.length)
          for (let dB = 0; dB < QB.length; dB++) QB[dB].onlyOnce || (QB[dB].isDone = QB[dB].frame < BB);
        this._currentFrame = BB;
        const nB = this._animation._interpolate(BB, this._animationState);
        this.setValue(nB, jB)
      }
      _prepareForSpeedRatioChange(BB) {
        const jB = this._previousElapsedTime * (this._animation.framePerSecond * BB) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - jB
      }
      animate(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const IB = this._animation,
          NB = IB.targetPropertyPath;
        if (!NB || NB.length < 1) return this._stopped = !0, !1;
        let uB, UB = !0;
        const aB = this._events;
        let pB;
        if (this._coreRuntimeAnimation) pB = zB - jB, uB = this._coreRuntimeAnimation.currentFrame, this._currentFrame = uB, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let dB;
          (jB < this._minFrame || jB > this._maxFrame) && (jB = this._minFrame), (zB < this._minFrame || zB > this._maxFrame) && (zB = this._maxFrame), pB = zB - jB;
          let NB = BB * (IB.framePerSecond * nB) / 1e3 + this._absoluteFrameOffset,
            rB = 0,
            sB = !1;
          const JB = QB && this._animationState.cQ === iB.e.ANIMATIONLOOPMODE_YOYO;
          if (JB) {
            const BB = (NB - jB) / pB,
              zB = Math.sin(BB * Math.PI);
            NB = Math.abs(zB) * pB + jB;
            const QB = zB >= 0 ? 1 : -1;
            this._yoyoDirection !== QB && (sB = !0), this._yoyoDirection = QB
          }
          if (this._previousElapsedTime = BB, this._previousAbsoluteFrame = NB, !QB && zB >= jB && (NB >= pB && nB > 0 || NB <= 0 && nB < 0)) UB = !1, rB = IB.evaluate(zB);
          else if (!QB && jB >= zB && (NB <= pB && nB < 0 || NB >= 0 && nB > 0)) UB = !1, rB = IB.evaluate(jB);
          else if (this._animationState.cQ !== iB.e.ANIMATIONLOOPMODE_CYCLE) {
            const BB = zB.toString() + jB.toString();
            if (!this._offsetsCache[BB]) {
              this._animationState.repeatCount = 0, this._animationState.cQ = iB.e.ANIMATIONLOOPMODE_CYCLE;
              const QB = IB._interpolate(jB, this._animationState),
                nB = IB._interpolate(zB, this._animationState);
              switch (this._animationState.cQ = this._getCorrectLoopMode(), IB.dataType) {
                case iB.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[BB] = nB - QB;
                  break;
                case iB.e.ANIMATIONTYPE_QUATERNION:
                case iB.e.ANIMATIONTYPE_VECTOR3:
                case iB.e.ANIMATIONTYPE_VECTOR2:
                case iB.e.ANIMATIONTYPE_SIZE:
                case iB.e.ANIMATIONTYPE_COLOR3:
                case iB.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[BB] = nB.subtract(QB)
              }
              this._highLimitsCache[BB] = nB
            }
            rB = this._highLimitsCache[BB], dB = this._offsetsCache[BB]
          }
          if (void 0 === dB) switch (IB.dataType) {
            case iB.e.ANIMATIONTYPE_FLOAT:
              dB = 0;
              break;
            case iB.e.ANIMATIONTYPE_QUATERNION:
              dB = iB.m;
              break;
            case iB.e.ANIMATIONTYPE_VECTOR3:
              dB = iB.t;
              break;
            case iB.e.ANIMATIONTYPE_VECTOR2:
              dB = iB.q;
              break;
            case iB.e.ANIMATIONTYPE_SIZE:
              dB = iB.o;
              break;
            case iB.e.ANIMATIONTYPE_COLOR3:
              dB = iB.i;
              break;
            case iB.e.ANIMATIONTYPE_COLOR4:
              dB = iB.k
          }
          const mB = this._host ? this._host.syncRoot : null;
          let yB, kB = this._playbackFrames,
            GB = !1;
          if (mB) {
            const BB = mB.toFrame - mB.fromFrame,
              zB = mB.masterFrame,
              QB = (zB - mB.fromFrame) / BB;
            uB = jB + pB * QB;
            const nB = mB.getAnimations()[0];
            if (nB && 0 !== BB) {
              const BB = pB * QB,
                jB = nB._playbackTo - nB._playbackFrom;
              if (0 !== jB && nB._playbackFrom <= mB.fromFrame && nB._playbackTo >= mB.toFrame) {
                kB = pB * Math.round((nB._playbackFrames - (nB._currentFrame - nB._playbackFrom)) / jB) + BB
              } else GB = (zB - this._playbackSyncMasterFrame) * (nB._playbackFrames - this._playbackSyncMasterPlayed) < 0, kB = BB;
              GB = GB || nB._playbackJumped, this._playbackSyncMasterPlayed = nB._playbackFrames, this._playbackSyncMasterFrame = zB
            }
          } else uB = NB > 0 && jB > zB || NB < 0 && jB < zB ? UB && 0 !== pB ? zB + NB % pB : jB : UB && 0 !== pB ? jB + NB % pB : zB;
          if (!JB && (nB > 0 && this.currentFrame > uB || nB < 0 && this.currentFrame < uB) || JB && sB) {
            this._onLoop();
            for (let BB = 0; BB < aB.length; BB++) aB[BB].onlyOnce || (aB[BB].isDone = !1);
            this._animationState.key = nB > 0 ? 0 : IB.getKeys().length - 1
          }
          if (this._currentFrame = uB, this._animationState.repeatCount = 0 === pB ? 0 : NB / pB | 0, this._animationState.highLimitValue = rB, this._animationState.offsetValue = dB, this._playbackFrom = jB, this._playbackTo = zB, this._playbackJumped = GB, this._playbackSyncRoot = mB, mB) yB = kB;
          else if (UB) yB = JB ? uB === jB && NB === zB ? pB : uB - jB : NB;
          else {
            const BB = 0 !== pB ? Math.floor(this._playbackFrames / pB) : 0;
            yB = (uB === zB ? BB + 1 : BB) * pB
          }
          this._playbackFrames = yB, this._playbackProgress = this._animationState.cQ === iB.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? pB : yB
        }
        const rB = IB._interpolate(uB, this._animationState);
        if (this.setValue(rB, dB), aB.length)
          for (let sB = 0; sB < aB.length; sB++)
            if (pB >= 0 && uB >= aB[sB].frame && aB[sB].frame >= jB || pB < 0 && uB <= aB[sB].frame && aB[sB].frame <= jB) {
              const BB = aB[sB];
              BB.isDone || (BB.onlyOnce && (aB.splice(sB, 1), sB--), BB.isDone = !0, BB.action(uB))
            } return UB || (this._stopped = !0), UB
      }
    }
    var fB = zB(39986);
    class oB {
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
        for (let jB = 0; jB < this._runtimeAnimations.length; jB++) {
          this._runtimeAnimations[jB]._prepareForSpeedRatioChange(BB)
        }
        this._speedRatio = BB, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          NB = arguments.length > 6 ? arguments[6] : void 0,
          uB = arguments.length > 7 ? arguments[7] : void 0,
          UB = arguments.length > 8 ? arguments[8] : void 0,
          aB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          pB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = jB, this.fromFrame = zB, this.toFrame = QB, this.loopAnimation = dB, this.onAnimationEnd = NB, this.onAnimationLoop = UB, this.isAdditive = aB, this.playOrder = pB, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.qL = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new nB.c, this.onAnimationLoopObservable = new nB.c, this._scene = BB, uB && this.appendAnimations(jB, uB), this._speedRatio = IB, BB._activeAnimatables.push(this)
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
      appendAnimations(BB, jB) {
        for (let zB = 0; zB < jB.length; zB++) {
          const QB = jB[zB],
            nB = new qB(BB, QB, this._scene, this);
          nB._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(nB)
        }
      }
      getAnimationByTargetProperty(BB) {
        const jB = this._runtimeAnimations;
        for (let zB = 0; zB < jB.length; zB++)
          if (jB[zB].animation.targetProperty === BB) return jB[zB].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(BB) {
        const jB = this._runtimeAnimations;
        for (let zB = 0; zB < jB.length; zB++)
          if (jB[zB].animation.targetProperty === BB) return jB[zB];
        return null
      }
      reset() {
        const BB = this._runtimeAnimations;
        for (let jB = 0; jB < BB.length; jB++) BB[jB].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(BB) {
        const jB = this._runtimeAnimations;
        for (let zB = 0; zB < jB.length; zB++) jB[zB].animation.enableBlending = !0, jB[zB].animation.blendingSpeed = BB
      }
      disableBlending() {
        const BB = this._runtimeAnimations;
        for (let jB = 0; jB < BB.length; jB++) BB[jB].animation.enableBlending = !1
      }
      goToFrame(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this._runtimeAnimations;
        if (zB[0]) {
          const jB = zB[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? zB[0].currentFrame;
          const QB = 0 === this.speedRatio ? 0 : (BB - this._frameToSyncFromJump) / jB * 1e3 / this.speedRatio;
          this._manualJumpDelay = -QB
        }
        for (let QB = 0; QB < zB.length; QB++) zB[QB].goToFrame(BB, jB ? this._weight : -1);
        this._goToFrame = BB
      }
      get paused() {
        return this.qL
      }
      pause() {
        this.qL || (this.qL = !0)
      }
      restart() {
        this.qL = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (BB || jB) {
          const nB = this._scene._activeAnimatables.indexOf(this);
          if (nB > -1) {
            const dB = this._runtimeAnimations;
            for (let zB = dB.length - 1; zB >= 0; zB--) {
              const QB = dB[zB];
              BB && QB.animation.name != BB || (jB && !jB(QB.target) || (QB.dispose(), dB.splice(zB, 1)))
            }
            0 == dB.length && (zB || this._scene._activeAnimatables.splice(nB, 1), QB || this._raiseOnAnimationEnd())
          }
        } else {
          const BB = this._scene._activeAnimatables.indexOf(this);
          if (BB > -1) {
            zB || this._scene._activeAnimatables.splice(BB, 1);
            const jB = this._runtimeAnimations;
            for (let BB = 0; BB < jB.length; BB++) jB[BB].dispose();
            this._runtimeAnimations.length = 0, QB || this._raiseOnAnimationEnd()
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
        if (this.qL) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = BB), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = BB, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += BB - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !oB.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let jB = !1;
        const zB = this._runtimeAnimations;
        let QB;
        for (QB = 0; QB < zB.length; QB++) {
          const nB = zB[QB].animate(BB - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          jB = jB || nB
        }
        if (this.animationStarted = jB, !jB) {
          if (this.disposeOnEnd)
            for (QB = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(QB, 1), QB = 0; QB < zB.length; QB++) zB[QB].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return jB
      }
    }

    function HB(BB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return BB.originalValue;
      let jB = 1;
      const zB = dB.h.KJ[0],
        QB = dB.h.KJ[1],
        nB = dB.h.Quaternion[0];
      let IB = 0;
      const NB = BB.animations[0],
        uB = BB.originalValue;
      let UB, aB = !1;
      if (BB.totalWeight < 1) UB = 1 - BB.totalWeight, uB.decompose(QB, nB, zB);
      else {
        if (IB = 1, jB = BB.totalWeight, UB = NB.weight / jB, 1 == UB) {
          if (!BB.totalAdditiveWeight) return NB.currentValue;
          aB = !0
        }
        NB.currentValue.decompose(QB, nB, zB)
      }
      if (!aB) {
        QB.scaleInPlace(UB), zB.scaleInPlace(UB), nB.scaleInPlace(UB);
        for (let NB = IB; NB < BB.animations.length; NB++) {
          const IB = BB.animations[NB];
          if (0 === IB.weight) continue;
          UB = IB.weight / jB;
          const uB = dB.h.KJ[2],
            aB = dB.h.KJ[3],
            pB = dB.h.Quaternion[1];
          IB.currentValue.decompose(aB, pB, uB), aB.scaleAndAddToRef(UB, QB), pB.scaleAndAddToRef(dB.d.Dot(nB, pB) > 0 ? UB : -UB, nB), uB.scaleAndAddToRef(UB, zB)
        }
        nB.normalize()
      }
      for (let rB = 0; rB < BB.additiveAnimations.length; rB++) {
        const jB = BB.additiveAnimations[rB];
        if (0 === jB.weight) continue;
        const IB = dB.h.KJ[2],
          NB = dB.h.KJ[3],
          uB = dB.h.Quaternion[1];
        jB.currentValue.decompose(NB, uB, IB), NB.multiplyToRef(QB, NB), dB.m.LerpToRef(QB, NB, jB.weight, QB), nB.multiplyToRef(uB, uB), dB.d.SlerpToRef(nB, uB, jB.weight, nB), IB.scaleAndAddToRef(jB.weight, zB)
      }
      const pB = NB ? NB._animationState.workValue : dB.h.Matrix[0].clone();
      return dB.c.ComposeToRef(QB, nB, zB, pB), pB
    }

    function DB(BB, jB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return jB;
      const zB = BB.animations[0],
        QB = BB.originalValue;
      let nB = jB;
      if (0 === BB.totalWeight && BB.totalAdditiveWeight > 0) nB.jH(QB);
      else if (1 === BB.animations.length) {
        if (dB.d.SlerpToRef(QB, zB.currentValue, Math.min(1, BB.totalWeight), nB), 0 === BB.totalAdditiveWeight) return nB
      } else if (BB.animations.length > 1) {
        let zB, IB, NB = 1;
        if (BB.totalWeight < 1) {
          const jB = 1 - BB.totalWeight;
          zB = [], IB = [], zB.push(QB), IB.push(jB)
        } else {
          if (2 === BB.animations.length && (dB.d.SlerpToRef(BB.animations[0].currentValue, BB.animations[1].currentValue, BB.animations[1].weight / BB.totalWeight, jB), 0 === BB.totalAdditiveWeight)) return jB;
          zB = [], IB = [], NB = BB.totalWeight
        }
        for (let jB = 0; jB < BB.animations.length; jB++) {
          const QB = BB.animations[jB];
          zB.push(QB.currentValue), IB.push(QB.weight / NB)
        }
        let uB = 0;
        for (let BB = 0; BB < zB.length;) BB ? (uB += IB[BB], dB.d.SlerpToRef(nB, zB[BB], IB[BB] / uB, nB), BB++) : (dB.d.SlerpToRef(zB[BB], zB[BB + 1], IB[BB + 1] / (IB[BB] + IB[BB + 1]), jB), nB = jB, uB = IB[BB] + IB[BB + 1], BB += 2)
      }
      for (let IB = 0; IB < BB.additiveAnimations.length; IB++) {
        const jB = BB.additiveAnimations[IB];
        0 !== jB.weight && (nB.multiplyToRef(jB.currentValue, dB.h.Quaternion[0]), dB.d.SlerpToRef(nB, dB.h.Quaternion[0], jB.weight, nB))
      }
      return nB
    }

    function FB(BB, jB) {
      jB && (jB.prototype.copyAnimationRange = function(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new iB.e(this.name, "_matrix", BB.animations[0].framePerSecond, iB.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const dB = BB.animations[0].getRange(jB);
        if (!dB) return !1;
        const IB = dB.from,
          NB = dB.to,
          uB = BB.animations[0].getKeys(),
          UB = BB.length,
          aB = BB.getParent(),
          pB = this.getParent(),
          rB = QB && aB && UB && this.length && UB !== this.length,
          sB = rB && pB && aB ? pB.length / aB.length : 1,
          JB = QB && !pB && nB && (1 !== nB.x || 1 !== nB.y || 1 !== nB.z),
          mB = this.animations[0].getKeys();
        let yB, kB, GB;
        for (let LB = 0, gB = uB.length; LB < gB; LB++) yB = uB[LB], yB.frame >= IB && yB.frame <= NB && (QB ? (GB = yB.value.clone(), rB ? (kB = GB.getTranslation(), GB.setTranslation(kB.scaleInPlace(sB))) : JB && nB ? (kB = GB.getTranslation(), GB.setTranslation(kB.multiplyInPlace(nB))) : GB = yB.value) : GB = yB.value, mB.push({
          frame: yB.frame + zB,
          value: GB
        }));
        return this.animations[0].createRange(jB, IB + zB, NB + zB), !0
      }), BB && (BB.prototype._animate = function(BB) {
        const jB = this._animationWrites,
          zB = this._animationWriteCount;
        let QB = 0;
        for (let dB = this._animationStepWriteCount; dB < zB; dB++) {
          const BB = jB[dB];
          BB.Dy && -1 === BB.weight || (BB.Dy = !0, jB[dB] = jB[QB], jB[QB] = BB, QB++)
        }
        for (let dB = QB; dB < zB; dB++) {
          const BB = jB[dB];
          BB.runtimeAnimation = null, BB.target = null
        }
        if (this._animationWriteCount = QB, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const nB = fB.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = nB
        }
        this.deltaTime = void 0 !== BB ? BB : this.useConstantAnimationDeltaTime ? 16 : (nB - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = nB;
        const IB = this._activeAnimatables;
        if (0 === IB.length) return;
        this._animationTime += this.deltaTime;
        const NB = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let dB = 0; dB < IB.length; dB++) {
          const BB = IB[dB];
          !BB._animate(NB) && BB.disposeOnEnd && dB--
        }! function(BB) {
          if (BB._registeredForLateAnimationBindings.length) {
            for (let jB = 0; jB < BB._registeredForLateAnimationBindings.length; jB++) {
              const zB = BB._registeredForLateAnimationBindings.data[jB];
              for (const BB in zB._lateAnimationHolders) {
                const jB = zB._lateAnimationHolders[BB],
                  QB = jB.animations[0],
                  nB = jB.originalValue;
                if (void 0 === nB || null === nB) continue;
                const IB = iB.e.AllowMatrixDecomposeForInterpolation && nB.m;
                let NB = zB[BB];
                if (IB) NB = HB(jB);
                else if (void 0 !== nB.w) NB = DB(jB, NB || dB.d.Identity());
                else {
                  let BB = 0,
                    zB = 1;
                  const dB = QB && QB._animationState.cQ === iB.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (jB.totalWeight < 1) NB = dB ? nB.clone ? nB.clone() : nB : QB && nB.scale ? nB.scale(1 - jB.totalWeight) : QB ? nB * (1 - jB.totalWeight) : nB.clone ? nB.clone() : nB;
                  else if (QB) {
                    zB = jB.totalWeight;
                    const IB = QB.weight / zB;
                    NB = 1 !== IB ? QB.currentValue.scale ? QB.currentValue.scale(IB) : QB.currentValue * IB : (jB.animations.length > 1 || jB.additiveAnimations.length > 0) && QB.currentValue.clone ? QB.currentValue.clone() : QB.currentValue, dB && (NB.addToRef ? NB.addToRef(nB, NB) : NB += nB), BB = 1
                  }
                  for (let QB = BB; QB < jB.animations.length; QB++) {
                    const BB = jB.animations[QB],
                      nB = BB.weight / zB;
                    nB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(nB, NB) : NB += BB.currentValue * nB)
                  }
                  for (let QB = 0; QB < jB.additiveAnimations.length; QB++) {
                    const BB = jB.additiveAnimations[QB],
                      zB = BB.weight;
                    zB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(zB, NB) : NB += BB.currentValue * zB)
                  }
                }
                zB[BB] = NB
              }
              zB._lateAnimationHolders = {}
            }
            BB._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, BB.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((BB, jB) => BB.playOrder - jB.playOrder))
      }, BB.prototype.beginWeightedAnimation = function(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 ? arguments[7] : void 0,
          uB = arguments.length > 8 ? arguments[8] : void 0,
          UB = arguments.length > 9 ? arguments[9] : void 0,
          aB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pB = this.beginAnimation(BB, jB, zB, nB, dB, IB, NB, !1, uB, UB, aB);
        return pB.weight = QB, pB
      }, BB.prototype.beginAnimation = function(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          dB = arguments.length > 5 ? arguments[5] : void 0,
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          uB = arguments.length > 8 ? arguments[8] : void 0,
          UB = arguments.length > 9 ? arguments[9] : void 0,
          aB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (nB < 0) {
          const BB = jB;
          jB = zB, zB = BB, nB = -nB
        }
        jB > zB && (nB = -nB), NB && this.stopAnimation(BB, void 0, uB), IB || (IB = new oB(this, BB, jB, zB, QB, nB, dB, void 0, UB, aB));
        const pB = !uB || uB(BB);
        if (BB.animations && pB && IB.appendAnimations(BB, BB.animations), BB.getAnimatables) {
          const aB = BB.getAnimatables();
          for (let BB = 0; BB < aB.length; BB++) this.beginAnimation(aB[BB], jB, zB, QB, nB, dB, IB, NB, uB, UB)
        }
        return IB.reset(), IB
      }, BB.prototype.beginHierarchyAnimation = function(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 ? arguments[7] : void 0,
          uB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          UB = arguments.length > 9 ? arguments[9] : void 0,
          aB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const pB = BB.getDescendants(jB),
          rB = [];
        rB.push(this.beginAnimation(BB, zB, QB, nB, dB, IB, NB, uB, UB, void 0, aB));
        for (const sB of pB) rB.push(this.beginAnimation(sB, zB, QB, nB, dB, IB, NB, uB, UB, void 0, aB));
        return rB
      }, BB.prototype.beginDirectAnimation = function(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (dB < 0) {
          const BB = zB;
          zB = QB, QB = BB, dB = -dB
        }
        zB > QB && (dB = -dB);
        return new oB(this, BB, zB, QB, nB, dB, arguments.length > 6 ? arguments[6] : void 0, jB, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, BB.prototype.beginDirectHierarchyAnimation = function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        let UB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const aB = BB.getDescendants(jB),
          pB = [];
        pB.push(this.beginDirectAnimation(BB, zB, QB, nB, dB, IB, NB, uB, UB));
        for (const rB of aB) pB.push(this.beginDirectAnimation(rB, zB, QB, nB, dB, IB, NB, uB, UB));
        return pB
      }, BB.prototype.getAnimatableByTarget = function(BB) {
        for (let jB = 0; jB < this._activeAnimatables.length; jB++)
          if (this._activeAnimatables[jB].target === BB) return this._activeAnimatables[jB];
        return null
      }, BB.prototype.getAllAnimatablesByTarget = function(BB) {
        const jB = [];
        for (let zB = 0; zB < this._activeAnimatables.length; zB++) this._activeAnimatables[zB].target === BB && jB.push(this._activeAnimatables[zB]);
        return jB
      }, BB.prototype.stopAnimation = function(BB, jB, zB) {
        const QB = this.getAllAnimatablesByTarget(BB);
        for (const nB of QB) nB.stop(jB, zB)
      }, BB.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let BB = 0; BB < this._activeAnimatables.length; BB++) this._activeAnimatables[BB].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const BB of this.animationGroups) BB.stop()
      })
    }
    oB.ProcessPausedAnimatables = !1;
    var YB, VB = zB(37186),
      hB = zB(40306),
      XB = zB(39965);
    class ZB extends hB.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(BB) {
        (BB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.jH(BB), this._markAsDirtyAndDecompose())
      }
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(BB, jB.aY(), !1), this.name = BB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = jB, this._localMatrix = QB?.clone() ?? dB.c.Identity(), this._restMatrix = nB ?? this._localMatrix.clone(), this._bindMatrix = IB ?? this._localMatrix.clone(), this._index = NB, this._absoluteMatrix = new dB.c, this._absoluteBindMatrix = new dB.c, this._absoluteInverseBindMatrix = new dB.c, this._finalMatrix = new dB.c, jB.bones.push(this), this.setParent(zB, !1), this._updateAbsoluteBindMatrices()
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
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== BB) {
          if (this.parent) {
            const BB = this.parent.children.indexOf(this); - 1 !== BB && this.parent.children.splice(BB, 1)
          }
          this._parentNode = BB, this.parent && this.parent.children.push(this), jB && this._updateAbsoluteBindMatrices(), this.DjB()
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
        this._restMatrix.jH(BB)
      }
      setRestPose(BB) {
        this.setRestMatrix(BB)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(BB) {
        this.l_(BB)
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
          const BB = dB.h.KJ[0],
            jB = dB.h.Quaternion[0],
            zB = dB.h.KJ[1];
          this.getRestMatrix().decompose(BB, jB, zB), this._linkedTransformNode.position.jH(zB), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? dB.d.Identity(), this._linkedTransformNode.rotationQuaternion.jH(jB), this._linkedTransformNode.pp.jH(BB)
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
        return this._decompose(), this.xBB
      }
      set position(BB) {
        this._decompose(), this.xBB.jH(BB), this._markAsDirtyAndCompose()
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
      get pp() {
        return this.getScale()
      }
      set pp(BB) {
        this.setScale(BB)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = dB.m.Zero(), this._localRotation = dB.d.Zero(), this.xBB = dB.m.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.xBB))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, dB.c.ComposeToRef(this._localScaling, this._localRotation, this.xBB, this._localMatrix)) : this._needToCompose = !1)
      }
      l_(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.jH(BB), jB && this._updateAbsoluteBindMatrices(), zB ? this._matrix = BB : this.DjB()
      }
      _updateAbsoluteBindMatrices(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (BB || (BB = this._bindMatrix), this.parent ? BB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.jH(BB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), jB)
          for (let zB = 0; zB < this.children.length; zB++) this.children[zB]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      DjB() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.DjB(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.DjB(), this._needToDecompose = !0
      }
      _updatePosition(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nB = this.getLocalMatrix();
        if (0 == jB) QB ? (nB.addAtIndex(12, BB.x), nB.addAtIndex(13, BB.y), nB.addAtIndex(14, BB.z)) : nB.setTranslationFromFloats(BB.x, BB.y, BB.z);
        else {
          const jB = ZB._TmpMats[0],
            IB = ZB._TmpVecs[0];
          this.parent ? (jB.jH(this.parent.getAbsoluteMatrix()), zB && jB.multiplyToRef(zB.getWorldMatrix(), jB)) : dB.c.IdentityToRef(jB), QB && jB.setTranslationFromFloats(0, 0, 0), jB.invert(), dB.m.TransformCoordinatesToRef(BB, jB, IB), QB ? (nB.addAtIndex(12, IB.x), nB.addAtIndex(13, IB.y), nB.addAtIndex(14, IB.z)) : nB.setTranslationFromFloats(IB.x, IB.y, IB.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, jB, zB, !0)
      }
      setPosition(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, jB, zB, !1)
      }
      setAbsolutePosition(BB, jB) {
        this.setPosition(BB, 1, jB)
      }
      scale(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nB = this.getLocalMatrix(),
          IB = ZB._TmpMats[0];
        dB.c.ScalingToRef(BB, jB, zB, IB), IB.multiplyToRef(nB, nB), IB.invert();
        for (const dB of this.children) {
          const QB = dB.getLocalMatrix();
          QB.multiplyToRef(IB, QB), QB.multiplyAtIndex(12, BB), QB.multiplyAtIndex(13, jB), QB.multiplyAtIndex(14, zB), dB._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), QB)
          for (const dB of this.children) dB.scale(BB, jB, zB, QB)
      }
      setScale(BB) {
        this._decompose(), this._localScaling.jH(BB), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(BB) {
        this._decompose(), BB.jH(this._localScaling)
      }
      setYawPitchRoll(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === QB) {
          const IB = ZB._TmpQuat;
          return dB.d.RotationYawPitchRollToRef(BB, jB, zB, IB), void this.setRotationQuaternion(IB, QB, nB)
        }
        const IB = ZB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(IB, nB)) return;
        const NB = ZB._TmpMats[1];
        dB.c.RotationYawPitchRollToRef(BB, jB, zB, NB), IB.multiplyToRef(NB, NB), this._rotateWithMatrix(NB, QB, nB)
      }
      rotate(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        const nB = ZB._TmpMats[0];
        nB.setTranslationFromFloats(0, 0, 0), dB.c.RotationAxisToRef(BB, jB, nB), this._rotateWithMatrix(nB, zB, QB)
      }
      setAxisAngle(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === zB) {
          const nB = ZB._TmpQuat;
          return dB.d.RotationAxisToRef(BB, jB, nB), void this.setRotationQuaternion(nB, zB, QB)
        }
        const nB = ZB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(nB, QB)) return;
        const IB = ZB._TmpMats[1];
        dB.c.RotationAxisToRef(BB, jB, IB), nB.multiplyToRef(IB, IB), this._rotateWithMatrix(IB, zB, QB)
      }
      setRotation(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(BB.y, BB.x, BB.z, jB, zB)
      }
      setRotationQuaternion(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === jB) return this._decompose(), this._localRotation.jH(BB), void this._markAsDirtyAndCompose();
        const QB = ZB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(QB, zB)) return;
        const nB = ZB._TmpMats[1];
        dB.c.FromQuaternionToRef(BB, nB), QB.multiplyToRef(nB, nB), this._rotateWithMatrix(nB, jB, zB)
      }
      setRotationMatrix(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === jB) {
          const QB = ZB._TmpQuat;
          return dB.d.FromRotationMatrixToRef(BB, QB), void this.setRotationQuaternion(QB, jB, zB)
        }
        const QB = ZB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(QB, zB)) return;
        const nB = ZB._TmpMats[1];
        nB.jH(BB), QB.multiplyToRef(BB, nB), this._rotateWithMatrix(nB, jB, zB)
      }
      _rotateWithMatrix(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = this.getLocalMatrix(),
          nB = QB.m[12],
          dB = QB.m[13],
          IB = QB.m[14],
          NB = this.getParent(),
          uB = ZB._TmpMats[3],
          UB = ZB._TmpMats[4];
        NB && 1 == jB ? (zB ? (uB.jH(zB.getWorldMatrix()), NB.getAbsoluteMatrix().multiplyToRef(uB, uB)) : uB.jH(NB.getAbsoluteMatrix()), UB.jH(uB), UB.invert(), QB.multiplyToRef(uB, QB), QB.multiplyToRef(BB, QB), QB.multiplyToRef(UB, QB)) : 1 == jB && zB ? (uB.jH(zB.getWorldMatrix()), UB.jH(uB), UB.invert(), QB.multiplyToRef(uB, QB), QB.multiplyToRef(BB, QB), QB.multiplyToRef(UB, QB)) : QB.multiplyToRef(BB, QB), QB.setTranslationFromFloats(nB, dB, IB), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(BB, jB) {
        const zB = ZB._TmpMats[2];
        return BB.jH(this.getAbsoluteMatrix()), jB ? (BB.multiplyToRef(jB.getWorldMatrix(), BB), dB.c.ScalingToRef(jB.pp.x, jB.pp.y, jB.pp.z, zB)) : dB.c.IdentityToRef(zB), BB.invert(), !isNaN(BB.m[0]) && (zB.multiplyAtIndex(0, this._scalingDeterminant), BB.multiplyToRef(zB, BB), !0)
      }
      iG() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = dB.m.Zero();
        return this.getPositionToRef(BB, jB, zB), zB
      }
      getPositionToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          jB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const BB = this.getLocalMatrix();
          jB.x = BB.m[12], jB.y = BB.m[13], jB.z = BB.m[14]
        } else {
          const zB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
          BB && zB.multiplyToRef(BB.getWorldMatrix(), zB), jB.x = zB.m[12], jB.y = zB.m[13], jB.z = zB.m[14]
        }
      }
      getAbsolutePosition() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const jB = dB.m.Zero();
        return this.getPositionToRef(1, BB, jB), jB
      }
      getAbsolutePositionToRef(BB, jB) {
        this.getPositionToRef(1, BB, jB)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.jH(this._localMatrix);
          const BB = this._skeleton.getPoseMatrix();
          BB && this._absoluteMatrix.multiplyToRef(BB, this._absoluteMatrix)
        }
        const BB = this.children,
          jB = BB.length;
        for (let zB = 0; zB < jB; zB++) BB[zB].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      nC(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = dB.m.Zero();
        return this.getDirectionToRef(BB, jB, zB), zB
      }
      getDirectionToRef(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
        jB && QB.multiplyToRef(jB.getWorldMatrix(), QB), dB.m.TransformNormalToRef(BB, QB, zB), zB.normalize()
      }
      getRotation() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = dB.m.Zero();
        return this.getRotationToRef(BB, jB, zB), zB
      }
      getRotationToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = ZB._TmpQuat;
        this.getRotationQuaternionToRef(BB, jB, QB), QB.toEulerAnglesToRef(zB)
      }
      getRotationQuaternion() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = dB.d.Identity();
        return this.getRotationQuaternionToRef(BB, jB, zB), zB
      }
      getRotationQuaternionToRef() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          jB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), jB.jH(this._localRotation);
        else {
          const zB = ZB._TmpMats[0],
            QB = this.getAbsoluteMatrix();
          BB ? QB.multiplyToRef(BB.getWorldMatrix(), zB) : zB.jH(QB), zB.multiplyAtIndex(0, this._scalingDeterminant), zB.multiplyAtIndex(1, this._scalingDeterminant), zB.multiplyAtIndex(2, this._scalingDeterminant), zB.decompose(void 0, jB, void 0)
        }
      }
      getRotationMatrix() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 ? arguments[1] : void 0;
        const zB = dB.c.Identity();
        return this.getRotationMatrixToRef(BB, jB, zB), zB
      }
      getRotationMatrixToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          jB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(jB);
        else {
          const zB = ZB._TmpMats[0],
            QB = this.getAbsoluteMatrix();
          BB ? QB.multiplyToRef(BB.getWorldMatrix(), zB) : zB.jH(QB), zB.multiplyAtIndex(0, this._scalingDeterminant), zB.multiplyAtIndex(1, this._scalingDeterminant), zB.multiplyAtIndex(2, this._scalingDeterminant), zB.getRotationMatrixToRef(jB)
        }
      }
      getAbsolutePositionFromLocal(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = dB.m.Zero();
        return this.getAbsolutePositionFromLocalToRef(BB, jB, zB), zB
      }
      getAbsolutePositionFromLocalToRef(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
        jB && QB.multiplyToRef(jB.getWorldMatrix(), QB), dB.m.TransformCoordinatesToRef(BB, QB, zB)
      }
      getLocalPositionFromAbsolute(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zB = dB.m.Zero();
        return this.getLocalPositionFromAbsoluteToRef(BB, jB, zB), zB
      }
      getLocalPositionFromAbsoluteToRef(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
        jB && QB.multiplyToRef(jB.getWorldMatrix(), QB), QB.invert(), dB.m.TransformCoordinatesToRef(BB, QB, zB)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const BB = this._skeleton.bones.indexOf(this);
        if (-1 !== BB && this._skeleton.bones.splice(BB, 1), this._parentNode && this._parentNode.children) {
          const BB = this._parentNode.children,
            jB = BB.indexOf(this); - 1 !== jB && BB.splice(jB, 1)
        }
        super.dispose()
      }
    }
    ZB._TmpVecs = (0, VB.c)(2, dB.m.Zero), ZB._TmpQuat = dB.d.Identity(), ZB._TmpMats = (0, VB.c)(5, dB.c.Identity), (YB = ZB.prototype).copyAnimationRange ?? (YB.copyAnimationRange = (0, XB.i)("Bone", "copyAnimationRange"));
    var AB = zB(40156);
    let TB = !1;
    var PB = zB(40046),
      WB = zB(40423),
      eB = zB(40432),
      lB = zB(40428),
      wB = zB(40188);

    function xB(BB, jB) {
      const zB = (0, sB.RandomRange)(0, 1);
      aB.g.LerpToRef(jB.color1, jB.color2, zB, BB.color)
    }

    function KB(BB, jB) {
      jB.colorDead.subtractToRef(BB.color, jB._colorDiff), jB._colorDiff.scaleToRef(1 / BB.lifeTime, BB.colorStep)
    }

    function CB(BB, jB) {
      BB._properties.currentColorGradient = jB._colorGradients[0], BB._properties.currentColorGradient.getColorToRef(BB.color), BB._properties.currentColor1.jH(BB.color), jB._colorGradients.length > 1 ? jB._colorGradients[1].getColorToRef(BB._properties.currentColor2) : BB._properties.currentColor2.jH(BB.color)
    }

    function cB(BB, jB) {
      const zB = jB._colorGradients;
      QB.j.GetCurrentGradient(jB._ratio, zB, ((jB, zB, QB) => {
        jB !== BB._properties.currentColorGradient && (BB._properties.currentColor1.jH(BB._properties.currentColor2), zB.getColorToRef(BB._properties.currentColor2), BB._properties.currentColorGradient = jB), aB.g.LerpToRef(BB._properties.currentColor1, BB._properties.currentColor2, QB, BB.color), BB.color.a < 0 && (BB.color.a = 0)
      }))
    }

    function bB(BB, jB) {
      BB.colorStep.scaleToRef(jB._scaledUpdateSpeed, jB._scaledColorStep), BB.color.addInPlace(jB._scaledColorStep), BB.color.a < 0 && (BB.color.a = 0)
    }

    function vB(BB, jB) {
      QB.j.GetCurrentGradient(jB._ratio, jB._angularSpeedGradients, ((jB, zB, QB) => {
        jB !== BB._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeed1 = BB._properties.currentAngularSpeed2, BB._properties.currentAngularSpeed2 = zB.getFactor(), BB._properties.currentAngularSpeedGradient = jB), BB.angularSpeed = (0, sB.Lerp)(BB._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2, QB)
      }))
    }

    function RB(BB, jB) {
      BB.angle += BB.angularSpeed * jB._scaledUpdateSpeed
    }

    function OB(BB, jB) {
      jB.particleEmitterType.startDirectionFunction(jB._emitterWorldMatrix, BB.direction, BB, jB.isLocal, jB._emitterInverseWorldMatrix)
    }

    function Bj(BB, jB) {
      jB.startDirectionFunction(jB._emitterWorldMatrix, BB.direction, BB, jB.isLocal)
    }

    function jj(BB, jB) {
      BB._properties.currentVelocityGradient = jB._velocityGradients[0], BB._properties.currentVelocity1 = BB._properties.currentVelocityGradient.getFactor(), jB._velocityGradients.length > 1 ? BB._properties.currentVelocity2 = jB._velocityGradients[1].getFactor() : BB._properties.currentVelocity2 = BB._properties.currentVelocity1
    }

    function zj(BB, jB) {
      BB._properties.currentLimitVelocityGradient = jB._limitVelocityGradients[0], BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocityGradient.getFactor(), jB._limitVelocityGradients.length > 1 ? BB._properties.currentLimitVelocity2 = jB._limitVelocityGradients[1].getFactor() : BB._properties.currentLimitVelocity2 = BB._properties.currentLimitVelocity1
    }

    function Qj(BB, jB) {
      QB.j.GetCurrentGradient(jB._ratio, jB._velocityGradients, ((jB, zB, QB) => {
        jB !== BB._properties.currentVelocityGradient && (BB._properties.currentVelocity1 = BB._properties.currentVelocity2, BB._properties.currentVelocity2 = zB.getFactor(), BB._properties.currentVelocityGradient = jB), BB._properties.directionScale *= (0, sB.Lerp)(BB._properties.currentVelocity1, BB._properties.currentVelocity2, QB)
      }))
    }

    function nj(BB, jB) {
      QB.j.GetCurrentGradient(jB._ratio, jB._limitVelocityGradients, ((zB, QB, nB) => {
        zB !== BB._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocity2, BB._properties.currentLimitVelocity2 = QB.getFactor(), BB._properties.currentLimitVelocityGradient = zB);
        const dB = (0, sB.Lerp)(BB._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2, nB);
        BB.direction.length() > dB && BB.direction.scaleInPlace(jB.limitVelocityDamping)
      }))
    }

    function dj(BB) {
      BB.direction.scaleToRef(BB._properties.directionScale, BB._properties.scaledDirection)
    }

    function Ij(BB, jB) {
      jB.particleEmitterType.startPositionFunction(jB._emitterWorldMatrix, BB.position, BB, jB.isLocal)
    }

    function Nj(BB, jB) {
      jB.startPositionFunction(jB._emitterWorldMatrix, BB.position, BB, jB.isLocal)
    }

    function uj(BB, jB) {
      BB._properties.localPosition ? BB._properties.localPosition.jH(BB.position) : BB._properties.localPosition = BB.position.clone(), dB.m.TransformCoordinatesToRef(BB._properties.localPosition, jB._emitterWorldMatrix, BB.position)
    }

    function Uj(BB, jB) {
      jB.isLocal && BB._properties.localPosition ? (BB._properties.localPosition.addInPlace(BB._properties.scaledDirection), dB.m.TransformCoordinatesToRef(BB._properties.localPosition, jB._emitterWorldMatrix, BB.position)) : BB.position.addInPlace(BB._properties.scaledDirection)
    }

    function aj(BB, jB) {
      BB._properties.currentDragGradient = jB._dragGradients[0], BB._properties.currentDrag1 = BB._properties.currentDragGradient.getFactor(), jB._dragGradients.length > 1 ? BB._properties.currentDrag2 = jB._dragGradients[1].getFactor() : BB._properties.currentDrag2 = BB._properties.currentDrag1
    }

    function pj(BB, jB) {
      QB.j.GetCurrentGradient(jB._ratio, jB._dragGradients, ((jB, zB, QB) => {
        jB !== BB._properties.currentDragGradient && (BB._properties.currentDrag1 = BB._properties.currentDrag2, BB._properties.currentDrag2 = zB.getFactor(), BB._properties.currentDragGradient = jB);
        const nB = (0, sB.Lerp)(BB._properties.currentDrag1, BB._properties.currentDrag2, QB);
        BB._properties.scaledDirection.scaleInPlace(1 - nB)
      }))
    }

    function rj(BB, jB) {
      BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.U3(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2.U3(Math.random(), Math.random(), Math.random())) : (BB._properties.randomNoiseCoordinates1 = new dB.m(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2 = new dB.m(Math.random(), Math.random(), Math.random()))
    }

    function sj(BB, jB) {
      const zB = jB._noiseTextureData,
        QB = jB._noiseTextureSize;
      if (zB && QB && BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2) {
        const nB = jB._fetchR(BB._properties.randomNoiseCoordinates1.x, BB._properties.randomNoiseCoordinates1.y, QB.width, QB.height, zB),
          IB = jB._fetchR(BB._properties.randomNoiseCoordinates1.z, BB._properties.randomNoiseCoordinates2.x, QB.width, QB.height, zB),
          NB = jB._fetchR(BB._properties.randomNoiseCoordinates2.y, BB._properties.randomNoiseCoordinates2.z, QB.width, QB.height, zB),
          uB = dB.h.KJ[0],
          UB = dB.h.KJ[1];
        uB.U3((2 * nB - 1) * jB.noiseStrength.x, (2 * IB - 1) * jB.noiseStrength.y, (2 * NB - 1) * jB.noiseStrength.z), uB.scaleToRef(jB._tempScaledUpdateSpeed, UB), BB.direction.addInPlace(UB)
      }
    }

    function Jj(BB, jB) {
      jB.gravity.scaleToRef(jB._tempScaledUpdateSpeed, jB._scaledGravity), BB.direction.addInPlace(jB._scaledGravity)
    }

    function mj(BB, jB) {
      BB.size = (0, sB.RandomRange)(jB.minSize, jB.maxSize), BB.scale.U3((0, sB.RandomRange)(jB.minScaleX, jB.maxScaleX), (0, sB.RandomRange)(jB.minScaleY, jB.maxScaleY))
    }

    function yj(BB, jB) {
      BB._properties.currentSizeGradient = jB._sizeGradients[0], BB._properties.currentSize1 = BB._properties.currentSizeGradient.getFactor(), BB.size = BB._properties.currentSize1, jB._sizeGradients.length > 1 ? BB._properties.currentSize2 = jB._sizeGradients[1].getFactor() : BB._properties.currentSize2 = BB._properties.currentSize1, BB.scale.U3((0, sB.RandomRange)(jB.minScaleX, jB.maxScaleX), (0, sB.RandomRange)(jB.minScaleY, jB.maxScaleY))
    }

    function kj(BB, jB) {
      const zB = jB._actualFrame / jB.targetStopDuration;
      QB.j.GetCurrentGradient(zB, jB._startSizeGradients, ((zB, QB, nB) => {
        zB !== jB._currentStartSizeGradient && (jB._currentStartSize1 = jB._currentStartSize2, jB._currentStartSize2 = QB.getFactor(), jB._currentStartSizeGradient = zB);
        const dB = (0, sB.Lerp)(jB._currentStartSize1, jB._currentStartSize2, nB);
        BB.scale.scaleInPlace(dB)
      }))
    }

    function Gj(BB, jB) {
      QB.j.GetCurrentGradient(jB._ratio, jB._sizeGradients, ((jB, zB, QB) => {
        jB !== BB._properties.currentSizeGradient && (BB._properties.currentSize1 = BB._properties.currentSize2, BB._properties.currentSize2 = zB.getFactor(), BB._properties.currentSizeGradient = jB), BB.size = (0, sB.Lerp)(BB._properties.currentSize1, BB._properties.currentSize2, QB)
      }))
    }

    function Lj(BB, jB) {
      BB.remapData = new dB.n(0, 1, 0, 1)
    }

    function gj(BB, jB) {
      jB._colorRemapGradients && jB._colorRemapGradients.length > 0 && QB.j.GetCurrentGradient(jB._ratio, jB._colorRemapGradients, ((jB, zB, QB) => {
        const nB = (0, sB.Lerp)(jB.factor1, zB.factor1, QB),
          dB = (0, sB.Lerp)(jB.factor2, zB.factor2, QB);
        BB.remapData.x = nB, BB.remapData.y = dB - nB
      })), jB._alphaRemapGradients && jB._alphaRemapGradients.length > 0 && QB.j.GetCurrentGradient(jB._ratio, jB._alphaRemapGradients, ((jB, zB, QB) => {
        const nB = (0, sB.Lerp)(jB.factor1, zB.factor1, QB),
          dB = (0, sB.Lerp)(jB.factor2, zB.factor2, QB);
        BB.remapData.z = nB, BB.remapData.w = dB - nB
      }))
    }

    function tj(BB, jB) {
      const zB = (0, sB.Clamp)(jB._actualFrame / jB.targetStopDuration);
      QB.j.GetCurrentGradient(zB, jB._lifeTimeGradients, ((jB, QB) => {
        const nB = jB,
          dB = QB,
          IB = nB.getFactor(),
          NB = dB.getFactor(),
          uB = (zB - nB.gradient) / (dB.gradient - nB.gradient);
        BB.lifeTime = (0, sB.Lerp)(IB, NB, uB)
      })), jB._emitPower = (0, sB.RandomRange)(jB.minEmitPower, jB.maxEmitPower)
    }

    function Sj(BB, jB) {
      BB.lifeTime = (0, sB.RandomRange)(jB.minLifeTime, jB.maxLifeTime), jB._emitPower = (0, sB.RandomRange)(jB.minEmitPower, jB.maxEmitPower)
    }

    function Mj(BB, jB) {
      0 === jB._emitPower ? (BB._properties.initialDirection ? BB._properties.initialDirection.jH(BB.direction) : BB._properties.initialDirection = BB.direction.clone(), BB.direction.set(0, 0, 0)) : (BB._properties.initialDirection = null, BB.direction.scaleInPlace(jB._emitPower)), BB.direction.addInPlace(jB._inheritedVelocityOffset)
    }

    function Ej(BB, jB) {
      BB.angularSpeed = (0, sB.RandomRange)(jB.minAngularSpeed, jB.maxAngularSpeed), BB.angle = (0, sB.RandomRange)(jB.minInitialRotation, jB.maxInitialRotation)
    }

    function ij(BB, jB) {
      BB._properties.currentAngularSpeedGradient = jB._angularSpeedGradients[0], BB.angularSpeed = BB._properties.currentAngularSpeedGradient.getFactor(), BB._properties.currentAngularSpeed1 = BB.angularSpeed, jB._angularSpeedGradients.length > 1 ? BB._properties.currentAngularSpeed2 = jB._angularSpeedGradients[1].getFactor() : BB._properties.currentAngularSpeed2 = BB._properties.currentAngularSpeed1, BB.angle = (0, sB.RandomRange)(jB.minInitialRotation, jB.maxInitialRotation)
    }

    function qj(BB, jB) {
      BB._properties.initialStartSpriteCellId = jB.startSpriteCellID, BB._properties.initialEndSpriteCellId = jB.endSpriteCellID, BB._properties.initialSpriteCellLoop = jB.spriteCellLoop
    }

    function fj(BB, jB) {
      BB.previousItem = jB.previousItem, BB.nextItem = jB, jB.previousItem && (jB.previousItem.nextItem = BB), jB.previousItem = BB
    }

    function oj(BB, jB) {
      BB.previousItem = jB, BB.nextItem = jB.nextItem, jB.nextItem && (jB.nextItem.previousItem = BB), jB.nextItem = BB
    }

    function Hj(BB) {
      BB.previousItem && (BB.previousItem.nextItem = BB.nextItem), BB.nextItem && (BB.nextItem.previousItem = BB.previousItem)
    }
    var Dj = zB(40475);
    class Fj extends SB {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(BB) {
        this._startDirectionFunction !== BB && (this._startDirectionFunction = BB, this._directionCreation.process = BB ? Bj : OB)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(BB) {
        this._startPositionFunction !== BB && (this._startPositionFunction = BB, this._positionCreation.process = BB ? Nj : Ij)
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.pY.remove(this._onDisposeObserver), this._onDisposeObserver = this.pY.add(BB)
      }
      get aE() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(BB) {
        this._useRampGradients !== BB && (this._useRampGradients = BB, this._resetEffect(), BB ? (this._rampCreation = {
          process: Lj,
          previousItem: null,
          nextItem: null
        }, oj(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: gj,
          previousItem: null,
          nextItem: null
        }, oj(this._remapGradientProcessing, this._gravityProcessing))) : (Hj(this._rampCreation), Hj(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(BB) {
        this._isLocal !== BB && (this._isLocal = BB, BB ? (this._isLocalCreation = {
          process: uj,
          previousItem: null,
          nextItem: null
        }, oj(this._isLocalCreation, this._positionCreation)) : Hj(this._isLocalCreation))
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
          process: qj,
          previousItem: null,
          nextItem: null
        }, oj(this._sheetCreation, this._colorDeadCreation)) : Hj(this._sheetCreation), this._reset())
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[jB] = new WB.e(this._engine), this._customWrappers[jB].effect = BB, this._customWrappers[jB].drawContext && (this._customWrappers[jB].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new nB.c), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = BB, !BB) return Hj(this._noiseCreation), void Hj(this._noiseProcessing);
          this._noiseCreation = {
            process: rj,
            previousItem: null,
            nextItem: null
          }, oj(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: sj,
            previousItem: null,
            nextItem: null
          }, oj(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          NB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          UB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        TB || (TB = !0, FB(AB.g, ZB)), (0, PB.e)(), super(BB), this._emitterInverseWorldMatrix = dB.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new dB.m, this.pY = new nB.c, this.onStoppedObservable = new nB.c, this.onStartedObservable = new nB.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new aB.g(0, 0, 0, 0), this._colorDiff = new aB.g(0, 0, 0, 0), this._scaledGravity = dB.m.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = BB => {}, this.recycleParticle = BB => {
          const jB = this._particles.pop();
          jB !== BB && jB.copyTo(BB), jB.metadata = null, this._stockParticles.push(jB)
        }, this._createParticle = () => {
          let BB;
          return 0 !== this._stockParticles.length ? (BB = this._stockParticles.pop(), BB._reset()) : BB = new EB(this), this._prepareParticle(BB), BB
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = jB, this._epsilon = NB, zB && "Scene" !== zB.getClassName() ? (this._engine = zB, this.defaultProjectionMatrix = dB.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = zB || uB.c.LastCreatedScene, this._engine = this._scene.wJ(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.RL.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Sj,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Ij,
          previousItem: null,
          nextItem: null
        }, oj(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: OB,
          previousItem: null,
          nextItem: null
        }, oj(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Mj,
          previousItem: null,
          nextItem: null
        }, oj(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: mj,
          previousItem: null,
          nextItem: null
        }, oj(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Ej,
          previousItem: null,
          nextItem: null
        }, oj(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: xB,
          previousItem: null,
          nextItem: null
        }, oj(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: KB,
          previousItem: null,
          nextItem: null
        }, oj(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, UB || (this._colorProcessing = {
          process: bB,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: RB,
          previousItem: null,
          nextItem: null
        }, oj(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: dj,
          previousItem: null,
          nextItem: null
        }, oj(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Uj,
          previousItem: null,
          nextItem: null
        }, oj(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Jj,
          previousItem: null,
          nextItem: null
        }, oj(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = IB, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new WB.e(this._engine)
        }, this._customWrappers[0].effect = QB, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new pB.c, this.updateFunction = BB => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((BB => {
            this._noiseTextureData = BB
          })));
          const jB = BB === this._particles;
          for (let zB = 0; zB < BB.length; zB++) {
            const QB = BB[zB];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const nB = QB.age;
            if (QB.age += this._tempScaledUpdateSpeed, QB.age > QB.lifeTime) {
              const BB = QB.age - nB,
                jB = QB.lifeTime - nB;
              this._tempScaledUpdateSpeed = jB * this._tempScaledUpdateSpeed / BB, QB.age = QB.lifeTime
            }
            this._ratio = QB.age / QB.lifeTime, QB._properties.directionScale = this._tempScaledUpdateSpeed;
            let dB = this._updateQueueStart;
            for (; dB;) dB.process(QB, this), dB = dB.nextItem;
            if (this._isAnimationSheetEnabled && !UB && QB.updateCellIndex(), QB._inheritParticleInfoToSubEmitters(), QB.age >= QB.lifeTime) {
              if (this._emitFromParticle(QB), QB._properties.attachedSubEmitters) {
                for (const BB of QB._properties.attachedSubEmitters) BB.particleSystem.disposeOnStop = !0, BB.particleSystem.stop();
                QB._properties.attachedSubEmitters = null
              }
              this.recycleParticle(QB), jB && zB--
            } else;
          }
        }
      }
      serialize(BB) {
        throw new Error("Method not implemented.")
      }
      clone(BB, jB) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = tj : this._lifeTimeCreation.process = Sj
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: kj,
          previousItem: null,
          nextItem: null
        }, oj(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Hj(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(BB) {
        this.targetStopDuration !== BB && (this._targetStopDuration = BB, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(BB, jB, zB) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, BB, jB, zB), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(BB) {
        return this._removeFactorGradient(this._lifeTimeGradients, BB), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(BB, jB, zB) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = yj, this._sizeGradientProcessing = {
          process: Gj,
          previousItem: null,
          nextItem: null
        }, fj(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, BB, jB, zB), this
      }
      removeSizeGradient(BB) {
        return this._removeFactorGradient(this._sizeGradients, BB), 0 === this._sizeGradients?.length && (Hj(this._sizeGradientProcessing), this._sizeCreation.process = mj), this
      }
      addColorRemapGradient(BB, jB, zB) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, BB, jB, zB), this
      }
      removeColorRemapGradient(BB) {
        return this._removeFactorGradient(this._colorRemapGradients, BB), this
      }
      addAlphaRemapGradient(BB, jB, zB) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, BB, jB, zB), this
      }
      removeAlphaRemapGradient(BB) {
        return this._removeFactorGradient(this._alphaRemapGradients, BB), this
      }
      addAngularSpeedGradient(BB, jB, zB) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = ij, this._angularSpeedGradientProcessing = {
          process: vB,
          previousItem: null,
          nextItem: null
        }, fj(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, BB, jB, zB), this
      }
      removeAngularSpeedGradient(BB) {
        return this._removeFactorGradient(this._angularSpeedGradients, BB), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Ej, Hj(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(BB, jB, zB) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: jj,
          previousItem: null,
          nextItem: null
        }, oj(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Qj,
          previousItem: null,
          nextItem: null
        }, fj(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, BB, jB, zB), this
      }
      removeVelocityGradient(BB) {
        return this._removeFactorGradient(this._velocityGradients, BB), 0 === this._velocityGradients?.length && (Hj(this._velocityCreation), Hj(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(BB, jB, zB) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: zj,
          previousItem: null,
          nextItem: null
        }, oj(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: nj,
          previousItem: null,
          nextItem: null
        }, oj(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, BB, jB, zB), this
      }
      removeLimitVelocityGradient(BB) {
        return this._removeFactorGradient(this._limitVelocityGradients, BB), 0 === this._limitVelocityGradients?.length && (Hj(this._limitVelocityCreation), Hj(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(BB, jB, zB) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: aj,
          previousItem: null,
          nextItem: null
        }, fj(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: pj,
          previousItem: null,
          nextItem: null
        }, fj(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, BB, jB, zB), this
      }
      removeDragGradient(BB) {
        return this._removeFactorGradient(this._dragGradients, BB), 0 === this._dragGradients?.length && (Hj(this._dragCreation), Hj(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(BB, jB, zB) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, BB, jB, zB), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(BB) {
        return this._removeFactorGradient(this._startSizeGradients, BB), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const BB = new Uint8Array(4 * this._rawTextureWidth),
          jB = aB.o.Color3[0];
        for (let zB = 0; zB < this._rawTextureWidth; zB++) {
          const nB = zB / this._rawTextureWidth;
          QB.j.GetCurrentGradient(nB, this._rampGradients, ((QB, nB, dB) => {
            aB.d.LerpToRef(QB.color, nB.color, dB, jB), BB[4 * zB] = 255 * jB.r, BB[4 * zB + 1] = 255 * jB.g, BB[4 * zB + 2] = 255 * jB.b, BB[4 * zB + 3] = 255
          }))
        }
        this._rampGradientsTexture = NB.c.CreateRGBATexture(BB, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((BB, jB) => BB.gradient < jB.gradient ? -1 : BB.gradient > jB.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(BB, jB) {
        this._rampGradients || (this._rampGradients = []);
        const zB = new QB.c(BB, jB);
        return this._rampGradients.push(zB), this._syncRampGradientTexture(), this
      }
      removeRampGradient(BB) {
        return this._removeGradientAndTexture(BB, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(BB, jB, zB) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = CB, this._colorProcessing.process = cB);
        const nB = new QB.b(BB, jB, zB);
        return this._colorGradients.push(nB), this._colorGradients.sort(((BB, jB) => BB.gradient < jB.gradient ? -1 : BB.gradient > jB.gradient ? 1 : 0)), this
      }
      removeColorGradient(BB) {
        if (!this._colorGradients) return this;
        let jB = 0;
        for (const zB of this._colorGradients) {
          if (zB.gradient === BB) {
            this._colorGradients.splice(jB, 1);
            break
          }
          jB++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = xB, this._colorProcessing.process = bB), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const BB of this._drawWrappers)
            if (BB)
              for (const jB of BB) jB?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(BB, jB, zB, QB, nB) {
        return nB[4 * (((BB = .5 * Math.abs(BB) + .5) * zB % zB | 0) + ((jB = .5 * Math.abs(jB) + .5) * QB % QB | 0) * zB)] / 255
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
          jB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * jB), this._vertexBuffer = new IB.e(BB, this._vertexData, !0, jB);
        let zB = 0;
        const QB = this._vertexBuffer.createVertexBuffer(IB.l.PositionKind, zB, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[IB.l.PositionKind] = QB, zB += 3;
        const nB = this._vertexBuffer.createVertexBuffer(IB.l.ColorKind, zB, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[IB.l.ColorKind] = nB, zB += 4;
        const dB = this._vertexBuffer.createVertexBuffer("angle", zB, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = dB, zB += 1;
        const NB = this._vertexBuffer.createVertexBuffer("size", zB, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = NB, zB += 2, this._isAnimationSheetEnabled) {
          const BB = this._vertexBuffer.createVertexBuffer("cellIndex", zB, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = BB, zB += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const BB = this._vertexBuffer.createVertexBuffer("direction", zB, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = BB, zB += 3
        }
        if (this._useRampGradients) {
          const BB = this._vertexBuffer.createVertexBuffer("remapData", zB, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = BB, zB += 4
        }
        let uB;
        if (this._useInstancing) {
          const jB = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new IB.e(BB, jB, !1, 2), uB = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else uB = this._vertexBuffer.createVertexBuffer("offset", zB, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = uB, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const BB = [],
          jB = [];
        let zB = 0;
        for (let QB = 0; QB < this._capacity; QB++) BB.push(zB), BB.push(zB + 1), BB.push(zB + 2), BB.push(zB), BB.push(zB + 2), BB.push(zB + 3), jB.push(zB, zB + 1, zB + 1, zB + 2, zB + 2, zB + 3, zB + 3, zB, zB, zB + 3), zB += 4;
        this._indexBuffer = this._engine.createIndexBuffer(BB), this._linesIndexBuffer = this._engine.createIndexBuffer(jB)
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
              for (let jB = 0; jB < this.preWarmCycles; jB++) this.animate(!0), BB.render()
            }))
          }));
          else
            for (let jB = 0; jB < this.preWarmCycles; jB++) this.animate(!0)
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
      _appendParticleVertex(BB, jB, zB, QB) {
        let nB = BB * this._vertexBufferSize;
        const IB = dB.h.KJ[0].jH(this._scene?.floatingOriginOffset || dB.m.ZeroReadOnly);
        if (this._vertexData[nB++] = jB.position.x + this.worldOffset.x - IB.x, this._vertexData[nB++] = jB.position.y + this.worldOffset.y - IB.y, this._vertexData[nB++] = jB.position.z + this.worldOffset.z - IB.z, this._vertexData[nB++] = jB.color.r, this._vertexData[nB++] = jB.color.g, this._vertexData[nB++] = jB.color.b, this._vertexData[nB++] = jB.color.a, this._vertexData[nB++] = jB.angle, this._vertexData[nB++] = jB.scale.x * jB.size, this._vertexData[nB++] = jB.scale.y * jB.size, this._isAnimationSheetEnabled && (this._vertexData[nB++] = jB.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[nB++] = jB.direction.x, this._vertexData[nB++] = jB.direction.y, this._vertexData[nB++] = jB.direction.z);
        else if (jB._properties.initialDirection) {
          let BB = jB._properties.initialDirection;
          this.isLocal && (dB.m.TransformNormalToRef(BB, this._emitterWorldMatrix, dB.h.KJ[0]), BB = dB.h.KJ[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[nB++] = BB.x, this._vertexData[nB++] = BB.y, this._vertexData[nB++] = BB.z
        } else {
          let BB = jB.direction;
          this.isLocal && (dB.m.TransformNormalToRef(BB, this._emitterWorldMatrix, dB.h.KJ[0]), BB = dB.h.KJ[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[nB++] = BB.x, this._vertexData[nB++] = BB.y, this._vertexData[nB++] = BB.z
        }
        this._useRampGradients && jB.remapData && (this._vertexData[nB++] = jB.remapData.x, this._vertexData[nB++] = jB.remapData.y, this._vertexData[nB++] = jB.remapData.z, this._vertexData[nB++] = jB.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === zB ? zB = this._epsilon : 1 === zB && (zB = 1 - this._epsilon), 0 === QB ? QB = this._epsilon : 1 === QB && (QB = 1 - this._epsilon)), this._vertexData[nB++] = zB, this._vertexData[nB] = QB)
      }
      _prepareParticle(BB) {}
      _createNewOnes(BB) {
        let jB;
        for (let zB = 0; zB < BB && this._particles.length !== this._capacity; zB++) {
          jB = this._createParticle(), this._particles.push(jB);
          let BB = this._createQueueStart;
          for (; BB;) BB.process(jB, this), BB = BB.nextItem;
          jB._inheritParticleInfoToSubEmitters()
        }
      }
      _update(BB) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const BB = this.emitter;
          this._emitterWorldMatrix = BB.getWorldMatrix()
        } else {
          const BB = this.emitter;
          this._emitterWorldMatrix = dB.c.Translation(BB.x, BB.y, BB.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(BB)
      }
      static _GetAttributeNamesOrOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = [IB.l.PositionKind, IB.l.ColorKind, "angle", "offset", "size"];
        return BB && QB.push("cellIndex"), jB || QB.push("direction"), zB && QB.push("remapData"), QB
      }
      static _GetEffectCreationOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, eB.c)(QB), BB && QB.push("particlesInfos"), jB && QB.push("logarithmicDepthConstant"), zB && (QB.push("vFogInfos"), QB.push("vFogColor")), QB
      }
      fillDefines(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, eB.l)(this, this._scene, BB), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && BB.push("#define FOG")), this._isAnimationSheetEnabled && BB.push("#define ANIMATESHEET"), this.useLogarithmicDepth && BB.push("#define LOGARITHMICDEPTH"), jB === SB.BLENDMODE_MULTIPLY && BB.push("#define BLENDMULTIPLYMODE"), this.isLocal && BB.push("#define LOCAL"), this._useRampGradients && BB.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (BB.push("#define BILLBOARD"), this.billboardMode) {
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
        zB && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), BB.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(BB, jB, zB) {
        jB.push(...Fj._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), BB.push(...Fj._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), zB.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, wB.c)(BB, this._imageProcessingConfigurationDefines), (0, wB.b)(zB, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(BB) {
        var jB;
        const zB = this._getCustomDrawWrapper(BB);
        if (zB?.effect) return zB;
        const QB = [];
        this.fillDefines(QB, BB);
        const dB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          IB = Dj.c._PrepareStringDefines(dB, QB),
          NB = IB ? Dj.c.GetConfiguration(dB) : void 0;
        let uB = this._drawWrappers[dB];
        uB || (uB = this._drawWrappers[dB] = [], 0 === dB || this._renderPassObserver || (this._renderPassObserver = ((jB = this._engine)._onReleaseRenderPassObservable ?? (jB._onReleaseRenderPassObservable = new nB.c)).add((BB => {
          const jB = this._drawWrappers[BB];
          if (jB) {
            for (const BB of jB) BB?.dispose();
            delete this._drawWrappers[BB]
          }
        }))));
        let UB = uB[BB];
        UB || (UB = new WB.e(this._engine), UB.drawContext && (UB.drawContext.useInstancing = this._useInstancing), uB[BB] = UB);
        const aB = QB.join("\n");
        if (UB.defines !== aB) {
          const BB = [],
            jB = [],
            zB = [];
          this.fillUniformsAttributesAndSamplerNames(jB, BB, zB), IB && (jB.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== NB?.defines.PREPASS_LOCAL_POSITION_INDEX && jB.push("inverseEmitterWM", "geometryWorldOffset")), UB.setEffect(this._engine.createEffect("particles", {
            attributes: BB,
            uniformsNames: jB,
            samplers: zB,
            defines: aB,
            shaderLanguage: this._shaderLanguage,
            multiTarget: IB,
            indexParameters: IB ? {
              buffersCount: NB?._mrtCount ?? 0
            } : void 0
          }, this._engine), aB)
        }
        return UB
      }
      _bindGeometryRendering(BB) {
        const jB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          zB = Dj.c.GetConfiguration(jB);
        if (!zB?._defines) return;
        BB.setFloat("objectId", 0), BB.setInt("meshBlendTag", 0);
        const QB = this._scene?.activeCamera;
        if (BB.setFloat2("cameraInfo", QB?.minZ ?? 0, QB?.maxZ ?? 1), this.isLocal && void 0 !== zB.defines.PREPASS_LOCAL_POSITION_INDEX) {
          BB.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const jB = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || dB.m.ZeroReadOnly, dB.h.KJ[0]);
          BB.setVector3("geometryWorldOffset", jB)
        }
      }
      animate() {
        let BB, jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!jB && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (jB ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) BB = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const jB = this._calculateEmitRate();
            BB = jB * this._scaledUpdateSpeed | 0, this._newPartsExcess += jB * this._scaledUpdateSpeed - BB
          }
          if (this._newPartsExcess > 1 && (BB += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? BB = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(BB), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !jB) {
            let BB = 0;
            for (let jB = 0; jB < this._particles.length; jB++) {
              const zB = this._particles[jB];
              this._appendParticleVertices(BB, zB), BB += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const BB = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  jB = this._particles.length;
                jB < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, jB * BB, this._fixedCapacityHighWaterMark * BB), this._fixedCapacityHighWaterMark = jB, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const jB = this._actualFrame / this.targetStopDuration;
          QB.j.GetCurrentGradient(jB, this._emitRateGradients, ((jB, zB, QB) => {
            jB !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = zB.getFactor(), this._currentEmitRateGradient = jB), BB = (0, sB.Lerp)(this._currentEmitRate1, this._currentEmitRate2, QB)
          }))
        }
        return BB
      }
      _appendParticleVertices(BB, jB) {
        this._appendParticleVertex(BB++, jB, 0, 0), this._useInstancing || (this._appendParticleVertex(BB++, jB, 1, 0), this._appendParticleVertex(BB++, jB, 1, 1), this._appendParticleVertex(BB, jB, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Fj.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([zB.e(351).then((() => zB(61458))), zB.e(345).then((() => zB(61463)))])) : await Promise.all([zB.e(334).then((() => zB(61471))), Promise.all([zB.e(327), zB.e(360)]).then((() => zB(61479)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== SB.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(SB.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(SB.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(BB) {
        const jB = this._getWrapper(BB),
          zB = jB.effect,
          QB = this._engine;
        QB.enableEffect(jB);
        const nB = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        zB.setTexture("diffuseSampler", this.particleTexture), zB.setMatrix("view", nB);
        const IB = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (zB.setMatrix("projection", IB), this._isAnimationSheetEnabled && this.particleTexture) {
          const BB = this.particleTexture.getBaseSize();
          zB.setFloat3("particlesInfos", this.spriteCellWidth / BB.width, this.spriteCellHeight / BB.height, this.spriteCellWidth / BB.width)
        }
        if (zB.setVector2("translationPivot", this.translationPivot), zB.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const BB = this._scene.activeCamera;
          zB.setVector3("eyePosition", BB.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), zB.setTexture("rampSampler", this._rampGradientsTexture));
        const NB = zB.defines;
        this._scene && ((0, eB.g)(zB, this, this._scene), this.applyFog && (0, lB.j)(this._scene, void 0, zB)), NB.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (nB.invertToRef(dB.h.Matrix[0]), zB.setMatrix("invView", dB.h.Matrix[0])), zB._multiTarget && this._bindGeometryRendering(zB), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? QB.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, zB) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, zB)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? QB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, zB) : QB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, zB), this.useLogarithmicDepth && this._scene && (0, lB.x)(NB, zB, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(zB), this._setEngineBasedOnBlendMode(BB), zB._multiTarget && Dj.c._BindZeroAlphaDiscard(QB, zB);
        let uB = !1;
        try {
          Dj.c._BindAttachmentsForEffect(QB, zB) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(zB), this._useInstancing ? this._scene?.forceWireframe ? QB.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : QB.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? QB.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : QB.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), uB = !0)
        } finally {
          Dj.c._RestoreAttachments(QB)
        }
        return uB ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const BB = this._engine;
        let jB;
        return BB.setState && (BB.setState(!1), this.forceDepthWrite && BB.setDepthWrite(!0)), jB = this.blendMode === SB.BLENDMODE_MULTIPLYADD ? this._render(SB.BLENDMODE_MULTIPLY) + this._render(SB.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), jB
      }
      _onDispose() {}
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), BB && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), BB && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(jB, zB), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const BB = this._scene.RL.indexOf(this);
          BB > -1 && this._scene.RL.splice(BB, 1), this._scene._activeParticleSystems.dispose()
        }
        this.pY.notifyObservers(this), this.pY.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Fj.ForceGLSL = !1;
    var Yj, Vj = zB(37222);
    ! function(BB) {
      BB[BB.ATTACHED = 0] = "ATTACHED", BB[BB.END = 1] = "END"
    }(Yj || (Yj = {}));
    class hj {
      constructor(BB) {
        if (this.particleSystem = BB, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !BB.emitter || !BB.emitter.dispose) {
          const jB = (0, Vj.b)("BABYLON.AbstractMesh");
          BB.emitter = new jB("SubemitterSystemEmitter", BB.aY()), BB._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let BB = this.particleSystem.emitter;
        if (BB) {
          if (BB instanceof dB.m) BB = BB.clone();
          else if (-1 !== BB.getClassName().indexOf("Mesh")) {
            BB = new((0, Vj.b)("BABYLON.Mesh"))("", BB.aY()), BB.isVisible = !1
          }
        } else BB = new dB.m;
        const jB = new hj(this.particleSystem.clone(this.particleSystem.name, BB));
        return jB.particleSystem.name += "Clone", jB.type = this.type, jB.inheritDirection = this.inheritDirection, jB.inheritedVelocityAmount = this.inheritedVelocityAmount, jB.particleSystem._disposeEmitterOnDispose = !0, jB.particleSystem.disposeOnStop = !0, jB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = {};
        return jB.type = this.type, jB.inheritDirection = this.inheritDirection, jB.inheritedVelocityAmount = this.inheritedVelocityAmount, jB.particleSystem = this.particleSystem.serialize(BB), jB
      }
      static _ParseParticleSystem(BB, jB, zB) {
        throw (0, XB.k)("ParseParticle")
      }
      static Parse(BB, jB, zB) {
        const QB = BB.particleSystem,
          nB = new hj(hj._ParseParticleSystem(QB, jB, zB, !0));
        return nB.type = BB.type, nB.inheritDirection = BB.inheritDirection, nB.inheritedVelocityAmount = BB.inheritedVelocityAmount, nB.particleSystem._isSubEmitter = !0, nB
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Xj = zB(39980),
      Zj = zB(40086);
    const Aj = () => {};
    class Tj {
      constructor() {
        this.particlePositionGenerator = Aj, this.particleDestinationGenerator = Aj, this.particleDirectionGenerator = Aj
      }
      startDirectionFunction(BB, jB, zB, QB) {
        const nB = dB.h.KJ[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Aj) this.particleDirectionGenerator(-1, zB, nB);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Aj) {
          this.particleDestinationGenerator(-1, zB, nB);
          const BB = dB.h.KJ[1];
          nB.subtractToRef(zB.position, BB), BB.scaleToRef(1 / zB.lifeTime, nB)
        } else nB.set(0, 0, 0);
        QB ? jB.jH(nB) : dB.m.TransformNormalToRef(nB, BB, jB)
      }
      startPositionFunction(BB, jB, zB, QB) {
        const nB = dB.h.KJ[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Aj ? this.particlePositionGenerator(-1, zB, nB) : nB.set(0, 0, 0), QB ? jB.jH(nB) : dB.m.TransformCoordinatesToRef(nB, BB, jB)
      }
      clone() {
        const BB = new Tj;
        return rB.e.DeepCopy(this, BB), BB
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
    const Pj = dB.m.Zero(),
      Wj = dB.m.Zero(),
      ej = dB.m.Zero();
    class lj {
      constructor() {
        this.strength = 0, this.position = dB.m.Zero()
      }
      _processParticle(BB, jB) {
        this.position.subtractToRef(BB.position, Pj);
        const zB = Pj.lengthSquared() + 1;
        Pj.normalize().scaleToRef(this.strength / zB, Wj), Wj.scaleToRef(jB._tempScaledUpdateSpeed, ej), BB.direction.addInPlace(ej)
      }
      serialize() {
        return {
          position: this.position.nQB(),
          strength: this.strength
        }
      }
    }
    const wj = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class xj extends Fj {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = BB => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const jB = Math.floor(Math.random() * this._subEmitters.length);
          for (const zB of this._subEmitters[jB])
            if (1 === zB.type) {
              const jB = zB.clone();
              BB._inheritParticleInfoToSubEmitter(jB), jB.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(jB.particleSystem), jB.particleSystem.start()
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
        this._flowMap !== BB && (this._flowMap = BB, this._flowMapUpdate && (Hj(this._flowMapUpdate), this._flowMapUpdate = null), BB && (this._flowMapUpdate = {
          process: BB => {
            const jB = this.aY()?.getTransformMatrix();
            this._flowMap._processParticle(BB, this.flowMapStrength * this._tempScaledUpdateSpeed, jB)
          },
          previousItem: null,
          nextItem: null
        }, oj(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(BB) {
        super.addAttractor(BB), 1 === this._attractors.length && (this._attractorUpdate = {
          process: BB => {
            for (const jB of this._attractors) jB._processParticle(BB, this)
          },
          previousItem: null,
          nextItem: null
        }, oj(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(BB) {
        super.removeAttractor(BB), 0 === this._attractors.length && this._attractorUpdate && Hj(this._attractorUpdate)
      }
      start() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(BB)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const BB of this.subEmitters) BB instanceof xj ? this._subEmitters.push([new hj(BB)]) : BB instanceof hj ? this._subEmitters.push([BB]) : BB instanceof Array && this._subEmitters.push(BB)
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
          const jB = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          BB._properties.attachedSubEmitters = [];
          for (const zB of jB)
            if (0 === zB.type) {
              const jB = zB.clone();
              BB._properties.attachedSubEmitters.push(jB), jB.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), BB && this.particles)
          for (const zB of this.particles)
            if (zB._properties.attachedSubEmitters)
              for (let BB = zB._properties.attachedSubEmitters.length - 1; BB >= 0; BB -= 1) zB._properties.attachedSubEmitters[BB].dispose();
        if (jB && this.activeSubSystems)
          for (let zB = this.activeSubSystems.length - 1; zB >= 0; zB -= 1) this.activeSubSystems[zB].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let BB = 0; BB < this._subEmitters.length; BB++)
            for (const jB of this._subEmitters[BB]) jB.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(BB, jB, zB, QB) {
        let nB;
        nB = zB instanceof Xj.c ? null : zB;
        const IB = (0, Vj.b)("BABYLON.Texture");
        if (IB && nB)
          if (BB.texture) jB.particleTexture = IB.Parse(BB.texture, nB, QB);
          else if (BB.textureName) {
          const zB = BB.textureSettings;
          if (jB.particleTexture = new IB(QB + BB.textureName, nB, !1, void 0 === BB.invertY || BB.invertY, zB ? zB.samplingMode : void 0), jB.particleTexture.name = BB.textureName, zB) {
            const BB = jB.particleTexture;
            for (const jB of wj) void 0 !== zB[jB] && (BB[jB] = zB[jB])
          }
        }
        if (BB.emitterId || 0 === BB.emitterId || void 0 !== BB.emitter ? (BB.emitterId || 0 === BB.emitterId) && nB ? (jB.emitter = nB.getLastMeshById(BB.emitterId), jB.emitter || (jB.emitter = dB.m.Zero())) : jB.emitter = dB.m.FromArray(BB.emitter) : jB.emitter = dB.m.Zero(), jB.isLocal = !!BB.isLocal, void 0 !== BB.renderingGroupId && (jB.renderingGroupId = BB.renderingGroupId), void 0 !== BB.isBillboardBased && (jB.isBillboardBased = BB.isBillboardBased), void 0 !== BB.billboardMode && (jB.billboardMode = BB.billboardMode), void 0 !== BB.useLogarithmicDepth && (jB.useLogarithmicDepth = BB.useLogarithmicDepth), BB.animations) {
          for (let zB = 0; zB < BB.animations.length; zB++) {
            const QB = BB.animations[zB],
              nB = (0, Vj.b)("BABYLON.Animation");
            nB && jB.animations.push(nB.Parse(QB))
          }
          jB.beginAnimationOnStart = BB.beginAnimationOnStart, jB.beginAnimationFrom = BB.beginAnimationFrom, jB.beginAnimationTo = BB.beginAnimationTo, jB.beginAnimationLoop = BB.beginAnimationLoop
        }
        if (BB.autoAnimate && nB && nB.beginAnimation(jB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), jB.startDelay = 0 | BB.startDelay, jB.minAngularSpeed = BB.minAngularSpeed, jB.maxAngularSpeed = BB.maxAngularSpeed, jB.minSize = BB.minSize, jB.maxSize = BB.maxSize, BB.minScaleX && (jB.minScaleX = BB.minScaleX, jB.maxScaleX = BB.maxScaleX, jB.minScaleY = BB.minScaleY, jB.maxScaleY = BB.maxScaleY), void 0 !== BB.preWarmCycles && (jB.preWarmCycles = BB.preWarmCycles, jB.preWarmStepOffset = BB.preWarmStepOffset), void 0 !== BB.minInitialRotation && (jB.minInitialRotation = BB.minInitialRotation, jB.maxInitialRotation = BB.maxInitialRotation), jB.minLifeTime = BB.minLifeTime, jB.maxLifeTime = BB.maxLifeTime, jB.minEmitPower = BB.minEmitPower, jB.maxEmitPower = BB.maxEmitPower, jB.emitRate = BB.emitRate, jB.gravity = dB.m.FromArray(BB.gravity), BB.noiseStrength && (jB.noiseStrength = dB.m.FromArray(BB.noiseStrength)), jB.color1 = aB.g.FromArray(BB.color1), jB.color2 = aB.g.FromArray(BB.color2), jB.colorDead = aB.g.FromArray(BB.colorDead), jB.updateSpeed = BB.updateSpeed, jB.targetStopDuration = BB.targetStopDuration, jB.blendMode = BB.blendMode, BB.colorGradients)
          for (const dB of BB.colorGradients) jB.addColorGradient(dB.gradient, aB.g.FromArray(dB.color1), dB.color2 ? aB.g.FromArray(dB.color2) : void 0);
        if (BB.rampGradients) {
          for (const zB of BB.rampGradients) jB.addRampGradient(zB.gradient, aB.d.FromArray(zB.color));
          jB.useRampGradients = BB.useRampGradients
        }
        if (BB.colorRemapGradients)
          for (const dB of BB.colorRemapGradients) jB.addColorRemapGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.alphaRemapGradients)
          for (const dB of BB.alphaRemapGradients) jB.addAlphaRemapGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.sizeGradients)
          for (const dB of BB.sizeGradients) jB.addSizeGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.angularSpeedGradients)
          for (const dB of BB.angularSpeedGradients) jB.addAngularSpeedGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.velocityGradients)
          for (const dB of BB.velocityGradients) jB.addVelocityGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.dragGradients)
          for (const dB of BB.dragGradients) jB.addDragGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.emitRateGradients)
          for (const dB of BB.emitRateGradients) jB.addEmitRateGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.startSizeGradients)
          for (const dB of BB.startSizeGradients) jB.addStartSizeGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.lifeTimeGradients)
          for (const dB of BB.lifeTimeGradients) jB.addLifeTimeGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
        if (BB.limitVelocityGradients) {
          for (const zB of BB.limitVelocityGradients) jB.addLimitVelocityGradient(zB.gradient, void 0 !== zB.factor1 ? zB.factor1 : zB.factor, zB.factor2);
          jB.limitVelocityDamping = BB.limitVelocityDamping
        }
        if (BB.noiseTexture && nB) {
          const zB = (0, Vj.b)("BABYLON.ProceduralTexture");
          jB.noiseTexture = zB.Parse(BB.noiseTexture, nB, QB)
        }
        let NB;
        if (BB.particleEmitterType) {
          switch (BB.particleEmitterType.type) {
            case "SphereParticleEmitter":
              NB = new yB;
              break;
            case "SphereDirectedParticleEmitter":
              NB = new kB;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              NB = new LB;
              break;
            case "ConeDirectedParticleEmitter":
              NB = new gB;
              break;
            case "CylinderParticleEmitter":
              NB = new GB.g;
              break;
            case "CylinderDirectedParticleEmitter":
              NB = new GB.d;
              break;
            case "HemisphericParticleEmitter":
              NB = new mB;
              break;
            case "PointParticleEmitter":
              NB = new JB;
              break;
            case "MeshParticleEmitter":
              NB = new tB;
              break;
            case "CustomParticleEmitter":
              NB = new Tj;
              break;
            default:
              NB = new pB.c
          }
          NB.parse(BB.particleEmitterType, nB)
        } else NB = new pB.c, NB.parse(BB, nB);
        jB.particleEmitterType = NB, jB.startSpriteCellID = BB.startSpriteCellID, jB.endSpriteCellID = BB.endSpriteCellID, jB.spriteCellLoop = BB.spriteCellLoop ?? !0, jB.spriteCellWidth = BB.spriteCellWidth, jB.spriteCellHeight = BB.spriteCellHeight, jB.spriteCellChangeSpeed = BB.spriteCellChangeSpeed, jB.spriteRandomStartCell = BB.spriteRandomStartCell, jB.disposeOnStop = BB.disposeOnStop ?? !1, jB.manualEmitCount = BB.manualEmitCount ?? -1
      }
      static Parse(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          nB = arguments.length > 4 ? arguments[4] : void 0;
        const IB = BB.name;
        let NB, uB, UB = null,
          pB = null;
        if (jB instanceof Xj.c ? NB = jB : (uB = jB, NB = uB.wJ()), BB.customShader && (0, XB.c)(NB.createEffectForParticles)) {
          pB = BB.customShader;
          const jB = pB.shaderOptions.defines.length > 0 ? pB.shaderOptions.defines.join("\n") : "";
          UB = NB.createEffectForParticles(pB.shaderPath.fragmentElement, pB.shaderOptions.uniforms, pB.shaderOptions.samplers, jB)
        }
        const rB = new xj(IB, nB || BB.Ep, jB, UB, BB.isAnimationSheetEnabled);
        if (rB.customShader = pB, rB._rootUrl = zB, BB.id && (rB.id = BB.id), BB.subEmitters) {
          rB.subEmitters = [];
          for (const QB of BB.subEmitters) {
            const BB = [];
            for (const nB of QB) BB.push(hj.Parse(nB, jB, zB));
            rB.subEmitters.push(BB)
          }
        }
        if (BB.attractors)
          for (const aB of BB.attractors) {
            const BB = new lj;
            BB.position = dB.m.FromArray(aB.position), BB.strength = aB.strength, rB.addAttractor(BB)
          }
        return xj._Parse(BB, rB, jB, zB), BB.textureMask && (rB.textureMask = aB.g.FromArray(BB.textureMask)), BB.worldOffset && (rB.worldOffset = dB.m.FromArray(BB.worldOffset)), BB.preventAutoStart && (rB.preventAutoStart = BB.preventAutoStart), BB.metadata && (rB.metadata = BB.metadata), QB || rB.preventAutoStart || rB.start(), rB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = {};
        if (xj._Serialize(jB, this, BB), jB.textureMask = this.textureMask.nQB(), jB.customShader = this.customShader, jB.preventAutoStart = this.preventAutoStart, jB.worldOffset = this.worldOffset.nQB(), this.metadata && (jB.metadata = this.metadata), this.subEmitters) {
          jB.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const zB of this._subEmitters) {
            const QB = [];
            for (const jB of zB) jB.particleSystem.doNotSerialize || QB.push(jB.serialize(BB));
            jB.subEmitters.push(QB)
          }
        }
        if (this._attractors && this._attractors.length) {
          jB.attractors = [];
          for (const BB of this._attractors) jB.attractors.push(BB.serialize())
        }
        return jB
      }
      static _Serialize(BB, jB, zB) {
        if (BB.name = jB.name, BB.id = jB.id, BB.Ep = jB.getCapacity(), BB.disposeOnStop = jB.disposeOnStop, BB.manualEmitCount = jB.manualEmitCount, jB.emitter.position) {
          const zB = jB.emitter;
          BB.emitterId = zB.id
        } else {
          const zB = jB.emitter;
          BB.emitter = zB.nQB()
        }
        if (jB.particleEmitterType && (BB.particleEmitterType = jB.particleEmitterType.serialize()), jB.particleTexture)
          if (zB) BB.texture = jB.particleTexture.serialize();
          else {
            const zB = jB.particleTexture;
            BB.textureName = jB.particleTexture.name, BB.invertY = !!zB._invertY;
            const QB = {};
            for (const BB of wj) QB[BB] = zB[BB];
            QB.samplingMode = zB.samplingMode, BB.textureSettings = QB
          } BB.isLocal = jB.isLocal, Zj.b.AppendSerializedAnimations(jB, BB), BB.beginAnimationOnStart = jB.beginAnimationOnStart, BB.beginAnimationFrom = jB.beginAnimationFrom, BB.beginAnimationTo = jB.beginAnimationTo, BB.beginAnimationLoop = jB.beginAnimationLoop, BB.startDelay = jB.startDelay, BB.renderingGroupId = jB.renderingGroupId, BB.isBillboardBased = jB.isBillboardBased, BB.billboardMode = jB.billboardMode, BB.minAngularSpeed = jB.minAngularSpeed, BB.maxAngularSpeed = jB.maxAngularSpeed, BB.minSize = jB.minSize, BB.maxSize = jB.maxSize, BB.minScaleX = jB.minScaleX, BB.maxScaleX = jB.maxScaleX, BB.minScaleY = jB.minScaleY, BB.maxScaleY = jB.maxScaleY, BB.minEmitPower = jB.minEmitPower, BB.maxEmitPower = jB.maxEmitPower, BB.minLifeTime = jB.minLifeTime, BB.maxLifeTime = jB.maxLifeTime, BB.emitRate = jB.emitRate, BB.gravity = jB.gravity.nQB(), BB.noiseStrength = jB.noiseStrength.nQB(), BB.color1 = jB.color1.nQB(), BB.color2 = jB.color2.nQB(), BB.colorDead = jB.colorDead.nQB(), BB.updateSpeed = jB.updateSpeed, BB.targetStopDuration = jB.targetStopDuration, BB.blendMode = jB.blendMode, BB.preWarmCycles = jB.preWarmCycles, BB.preWarmStepOffset = jB.preWarmStepOffset, BB.minInitialRotation = jB.minInitialRotation, BB.maxInitialRotation = jB.maxInitialRotation, BB.startSpriteCellID = jB.startSpriteCellID, BB.spriteCellLoop = jB.spriteCellLoop, BB.endSpriteCellID = jB.endSpriteCellID, BB.spriteCellChangeSpeed = jB.spriteCellChangeSpeed, BB.spriteCellWidth = jB.spriteCellWidth, BB.spriteCellHeight = jB.spriteCellHeight, BB.spriteRandomStartCell = jB.spriteRandomStartCell, BB.isAnimationSheetEnabled = jB.isAnimationSheetEnabled, BB.useLogarithmicDepth = jB.useLogarithmicDepth;
        const QB = jB.getColorGradients();
        if (QB) {
          BB.colorGradients = [];
          for (const jB of QB) {
            const zB = {
              gradient: jB.gradient,
              color1: jB.color1.nQB()
            };
            jB.color2 ? zB.color2 = jB.color2.nQB() : zB.color2 = jB.color1.nQB(), BB.colorGradients.push(zB)
          }
        }
        const nB = jB.getRampGradients();
        if (nB) {
          BB.rampGradients = [];
          for (const jB of nB) {
            const zB = {
              gradient: jB.gradient,
              color: jB.color.nQB()
            };
            BB.rampGradients.push(zB)
          }
          BB.useRampGradients = jB.useRampGradients
        }
        const dB = jB.getColorRemapGradients();
        if (dB) {
          BB.colorRemapGradients = [];
          for (const jB of dB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.colorRemapGradients.push(zB)
          }
        }
        const IB = jB.getAlphaRemapGradients();
        if (IB) {
          BB.alphaRemapGradients = [];
          for (const jB of IB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.alphaRemapGradients.push(zB)
          }
        }
        const NB = jB.getSizeGradients();
        if (NB) {
          BB.sizeGradients = [];
          for (const jB of NB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.sizeGradients.push(zB)
          }
        }
        const uB = jB.getAngularSpeedGradients();
        if (uB) {
          BB.angularSpeedGradients = [];
          for (const jB of uB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.angularSpeedGradients.push(zB)
          }
        }
        const UB = jB.getVelocityGradients();
        if (UB) {
          BB.velocityGradients = [];
          for (const jB of UB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.velocityGradients.push(zB)
          }
        }
        const aB = jB.getDragGradients();
        if (aB) {
          BB.dragGradients = [];
          for (const jB of aB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.dragGradients.push(zB)
          }
        }
        const pB = jB.getEmitRateGradients();
        if (pB) {
          BB.emitRateGradients = [];
          for (const jB of pB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.emitRateGradients.push(zB)
          }
        }
        const rB = jB.getStartSizeGradients();
        if (rB) {
          BB.startSizeGradients = [];
          for (const jB of rB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.startSizeGradients.push(zB)
          }
        }
        const sB = jB.getLifeTimeGradients();
        if (sB) {
          BB.lifeTimeGradients = [];
          for (const jB of sB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.lifeTimeGradients.push(zB)
          }
        }
        const JB = jB.getLimitVelocityGradients();
        if (JB) {
          BB.limitVelocityGradients = [];
          for (const jB of JB) {
            const zB = {
              gradient: jB.gradient,
              factor1: jB.factor1
            };
            void 0 !== jB.factor2 ? zB.factor2 = jB.factor2 : zB.factor2 = jB.factor1, BB.limitVelocityGradients.push(zB)
          }
          BB.limitVelocityDamping = jB.limitVelocityDamping
        }
        jB.noiseTexture && (BB.noiseTexture = jB.noiseTexture.serialize())
      }
      clone(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = {
          ...this._customWrappers
        };
        let nB = null;
        const dB = this._engine;
        if ((0, XB.c)(dB.createEffectForParticles) && null != this.customShader) {
          nB = this.customShader;
          const BB = nB.shaderOptions.defines.length > 0 ? nB.shaderOptions.defines.join("\n") : "",
            jB = dB.createEffectForParticles(nB.shaderPath.fragmentElement, nB.shaderOptions.uniforms, nB.shaderOptions.samplers, BB);
          QB[0] ? QB[0].effect = jB : this.setCustomEffect(jB, 0)
        }
        const IB = this.serialize(zB),
          NB = !1 === zB && this.particleTexture ? this.particleTexture.clone() : null;
        NB && (IB.textureName = void 0);
        const uB = xj.Parse(IB, this._scene || this._engine, this._rootUrl);
        return uB.name = BB, uB.customShader = nB, uB._customWrappers = QB, NB && (uB.particleTexture = NB), void 0 === jB && (jB = this.emitter), this.noiseTexture && (uB.noiseTexture = this.noiseTexture.clone()), uB.emitter = jB, this.preventAutoStart || uB.start(), uB
      }
    }
    xj.BILLBOARDMODE_Y = 2, xj.BILLBOARDMODE_ALL = 7, xj.BILLBOARDMODE_STRETCHED = 8, xj.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Kj = !1;
    Kj || (Kj = !0, hj._ParseParticleSystem = xj.Parse)
  },
  41722: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      SkyMaterial: () => LB,
      _MaxColorValueForRenderTarget: () => GB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(40086),
      IB = zB(37166),
      NB = zB(40376),
      uB = zB(40438),
      UB = zB(41686),
      aB = zB(41251),
      pB = zB(40154),
      rB = zB(37222),
      sB = zB(40473),
      JB = zB(40445),
      mB = zB(40432),
      yB = zB(40428);
    class kB extends NB.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function GB(BB) {
      switch (BB) {
        case UB.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case UB.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let LB = (() => {
      var BB;
      let jB, NB, UB, rB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB = uB.e,
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [],
        WB = [],
        eB = [],
        lB = [],
        wB = [],
        xB = [],
        KB = [],
        CB = [],
        cB = [],
        bB = [],
        vB = [],
        RB = [],
        OB = [],
        Bj = [],
        jj = [],
        zj = [],
        Qj = [],
        nj = [],
        dj = [],
        Ij = [],
        Nj = [],
        uj = [];
      return BB = class extends DB {
        constructor(BB, jB) {
          super(BB, jB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, QB.g)(this, FB, 1), this.turbidity = ((0, QB.g)(this, YB), (0, QB.g)(this, VB, 10)), this.rayleigh = ((0, QB.g)(this, hB), (0, QB.g)(this, XB, 2)), this.mieCoefficient = ((0, QB.g)(this, ZB), (0, QB.g)(this, AB, .005)), this.mieDirectionalG = ((0, QB.g)(this, TB), (0, QB.g)(this, PB, .8)), this.distance = ((0, QB.g)(this, WB), (0, QB.g)(this, eB, 500)), this.inclination = ((0, QB.g)(this, lB), (0, QB.g)(this, wB, .49)), this.azimuth = ((0, QB.g)(this, xB), (0, QB.g)(this, KB, .25)), this.sunPosition = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, new IB.KJ(0, 100, 0))), this.useSunPosition = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, !1)), this.cameraOffset = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, IB.KJ.Zero())), this.up = ((0, QB.g)(this, Bj), (0, QB.g)(this, jj, IB.KJ.Up())), this.dithering = ((0, QB.g)(this, zj), (0, QB.g)(this, Qj, !1)), this.rawHdrOutput = ((0, QB.g)(this, nj), (0, QB.g)(this, dj, !1)), this.cloudiness = ((0, QB.g)(this, Ij), (0, QB.g)(this, Nj, 0)), this._cameraPosition = ((0, QB.g)(this, uj), IB.KJ.Zero()), this._skyOrientation = new IB.Quaternion
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
        isReadyForSubMesh(jB, zB) {
          const QB = zB._drawWrapper;
          if (this.isFrozen && QB.effect && QB._wasPreviouslyReady) return !0;
          zB.materialDefines || (zB.materialDefines = new kB);
          const nB = zB.materialDefines,
            dB = this.aY();
          if (this._isReadyForSubMesh(zB)) return !0;
          if ((0, yB.db)(jB, dB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, nB, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, yB.S)(jB, nB, !0, !1), nB.IMAGEPROCESSINGPOSTPROCESS !== dB.imageProcessingConfiguration.applyByPostProcess && nB.markAsMiscDirty(), nB.DITHER !== this.dithering && nB.markAsMiscDirty(), nB.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && nB.markAsMiscDirty(), nB.isDirty) {
            nB.markAsProcessed(), dB.resetCachedMaterial();
            const jB = new JB.c;
            nB.FOG && jB.addFallback(1, "FOG"), nB.IMAGEPROCESSINGPOSTPROCESS = dB.imageProcessingConfiguration.applyByPostProcess, nB.DITHER = this.dithering, nB.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const QB = [aB.d.PositionKind];
            nB.VERTEXCOLOR && QB.push(aB.d.ColorKind);
            const IB = "sky",
              NB = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, mB.c)(NB);
            const uB = nB.toString();
            zB.setEffect(dB.wJ().createEffect(IB, {
              attributes: QB,
              uniformsNames: NB,
              uniformBuffersNames: [],
              samplers: [],
              defines: uB,
              fallbacks: jB,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, dB.wJ()), nB, this._materialContext)
          }
          return !(!zB.effect || !zB.effect.isReady()) && (nB._renderId = dB.getRenderId(), QB._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(BB, jB, zB) {
          const QB = this.aY(),
            nB = zB.materialDefines;
          if (!nB) return;
          const dB = zB.effect;
          if (!dB) return;
          this._activeEffect = dB, this.bindOnlyWorldMatrix(BB), this._activeEffect.setMatrix("viewProjection", QB.getTransformMatrix()), this._mustRebind(QB, dB, zB) && ((0, mB.g)(dB, this, QB), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, yB.x)(nB, dB, QB)), QB.fogEnabled && jB.applyFog && QB.fogMode !== pB.d.FOGMODE_NONE && this._activeEffect.setMatrix("view", QB.getViewMatrix()), (0, yB.j)(QB, jB, this._activeEffect, this.rawHdrOutput);
          const NB = QB.activeCamera;
          if (NB) {
            const BB = NB.getWorldMatrix();
            this._cameraPosition.x = BB.m[12], this._cameraPosition.y = BB.m[13], this._cameraPosition.z = BB.m[14], this._activeEffect.setVector3("cameraPosition", IB.TmpVectors.KJ[0].jH(this._cameraPosition).MQB(QB.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const BB = QB.wJ()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", GB(BB?.texture?.type))
          }
          if (!this.useSunPosition) {
            const BB = Math.PI * (this.inclination - .5),
              jB = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(jB) * Math.cos(BB), this.sunPosition.y = this.distance * Math.sin(-BB), this.sunPosition.z = this.distance * Math.sin(jB) * Math.cos(BB), IB.Quaternion.FromUnitVectorsToRef(IB.KJ.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(jB, this._activeEffect, zB)
        }
        getAnimatables() {
          return []
        }
        dispose(BB) {
          super.dispose(BB)
        }
        clone(jB) {
          return dB.b.Clone((() => new BB(jB, this.aY())), this)
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.SkyMaterial", BB
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(jB, zB, QB) {
          return dB.b.Parse((() => new BB(jB.name, zB)), jB, zB, QB)
        }
      }, (() => {
        const zB = "function" === typeof Symbol && Symbol.metadata ? Object.create(DB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, nB.A)()], NB = [(0, nB.A)()], UB = [(0, nB.A)()], rB = [(0, nB.A)()], LB = [(0, nB.A)()], gB = [(0, nB.A)()], tB = [(0, nB.A)()], SB = [(0, nB.A)()], MB = [(0, nB.x)()], EB = [(0, nB.A)()], iB = [(0, nB.x)()], qB = [(0, nB.x)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: BB => "luminance" in BB,
            get: BB => BB.luminance,
            set: (BB, jB) => {
              BB.luminance = jB
            }
          },
          metadata: zB
        }, FB, YB), (0, QB.e)(null, null, NB, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: BB => "turbidity" in BB,
            get: BB => BB.turbidity,
            set: (BB, jB) => {
              BB.turbidity = jB
            }
          },
          metadata: zB
        }, VB, hB), (0, QB.e)(null, null, UB, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: BB => "rayleigh" in BB,
            get: BB => BB.rayleigh,
            set: (BB, jB) => {
              BB.rayleigh = jB
            }
          },
          metadata: zB
        }, XB, ZB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieCoefficient" in BB,
            get: BB => BB.mieCoefficient,
            set: (BB, jB) => {
              BB.mieCoefficient = jB
            }
          },
          metadata: zB
        }, AB, TB), (0, QB.e)(null, null, LB, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieDirectionalG" in BB,
            get: BB => BB.mieDirectionalG,
            set: (BB, jB) => {
              BB.mieDirectionalG = jB
            }
          },
          metadata: zB
        }, PB, WB), (0, QB.e)(null, null, gB, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: BB => "distance" in BB,
            get: BB => BB.distance,
            set: (BB, jB) => {
              BB.distance = jB
            }
          },
          metadata: zB
        }, eB, lB), (0, QB.e)(null, null, tB, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: BB => "inclination" in BB,
            get: BB => BB.inclination,
            set: (BB, jB) => {
              BB.inclination = jB
            }
          },
          metadata: zB
        }, wB, xB), (0, QB.e)(null, null, SB, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: BB => "azimuth" in BB,
            get: BB => BB.azimuth,
            set: (BB, jB) => {
              BB.azimuth = jB
            }
          },
          metadata: zB
        }, KB, CB), (0, QB.e)(null, null, MB, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "sunPosition" in BB,
            get: BB => BB.sunPosition,
            set: (BB, jB) => {
              BB.sunPosition = jB
            }
          },
          metadata: zB
        }, cB, bB), (0, QB.e)(null, null, EB, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSunPosition" in BB,
            get: BB => BB.useSunPosition,
            set: (BB, jB) => {
              BB.useSunPosition = jB
            }
          },
          metadata: zB
        }, vB, RB), (0, QB.e)(null, null, iB, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraOffset" in BB,
            get: BB => BB.cameraOffset,
            set: (BB, jB) => {
              BB.cameraOffset = jB
            }
          },
          metadata: zB
        }, OB, Bj), (0, QB.e)(null, null, qB, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: BB => "up" in BB,
            get: BB => BB.up,
            set: (BB, jB) => {
              BB.up = jB
            }
          },
          metadata: zB
        }, jj, zj), (0, QB.e)(null, null, fB, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: BB => "dithering" in BB,
            get: BB => BB.dithering,
            set: (BB, jB) => {
              BB.dithering = jB
            }
          },
          metadata: zB
        }, Qj, nj), (0, QB.e)(null, null, oB, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: BB => "rawHdrOutput" in BB,
            get: BB => BB.rawHdrOutput,
            set: (BB, jB) => {
              BB.rawHdrOutput = jB
            }
          },
          metadata: zB
        }, dj, Ij), (0, QB.e)(null, null, HB, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: BB => "cloudiness" in BB,
            get: BB => BB.cloudiness,
            set: (BB, jB) => {
              BB.cloudiness = jB
            }
          },
          metadata: zB
        }, Nj, uj), zB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zB
        })
      })(), BB._ShaderLoader = new sB.c((() => [zB.e(335).then((() => zB(61485))), zB.e(328).then((() => zB(61493)))]), (() => [zB.e(352).then((() => zB(61497))), zB.e(346).then((() => zB(61500)))])), BB
    })();
    (0, rB.d)("BABYLON.SkyMaterial", LB)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);