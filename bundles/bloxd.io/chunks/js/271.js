export const id = 271;
export const ids = [271];
export const modules = {
  44737: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(41112),
      DB = GB(44746);
    class QB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = GB, this.hDB = [], this._maxBlockCapacity = OB || 64, this._selectionContent = new YB.b(1024), this._creationFunc = BB
      }
      update(BB, OB, GB) {
        DB.b._CreateBlocks(BB, OB, GB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      UDB(BB) {
        for (let OB = 0; OB < this.blocks.length; OB++) {
          this.blocks[OB].addEntry(BB)
        }
      }
      sF(BB) {
        for (let OB = 0; OB < this.blocks.length; OB++) {
          this.blocks[OB].removeEntry(BB)
        }
      }
      select(BB, OB) {
        this._selectionContent.reset();
        for (let GB = 0; GB < this.blocks.length; GB++) {
          this.blocks[GB].select(BB, this._selectionContent, OB)
        }
        return OB ? this._selectionContent.concat(this.hDB) : this._selectionContent.concatWithNoDuplicate(this.hDB), this._selectionContent
      }
      intersects(BB, OB, GB) {
        this._selectionContent.reset();
        for (let YB = 0; YB < this.blocks.length; YB++) {
          this.blocks[YB].intersects(BB, OB, this._selectionContent, GB)
        }
        return GB ? this._selectionContent.concat(this.hDB) : this._selectionContent.concatWithNoDuplicate(this.hDB), this._selectionContent
      }
      intersectsRay(BB) {
        this._selectionContent.reset();
        for (let OB = 0; OB < this.blocks.length; OB++) {
          this.blocks[OB].intersectsRay(BB, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.hDB), this._selectionContent
      }
    }
    QB.CreationFuncForMeshes = (BB, OB) => {
      const GB = BB.Gw();
      !BB.isBlocked && GB.boundingBox.intersectsMinMax(OB.LDB, OB.iDB) && OB.entries.push(BB)
    }, QB.CreationFuncForSubMeshes = (BB, OB) => {
      BB.Gw().boundingBox.intersectsMinMax(OB.LDB, OB.iDB) && OB.entries.push(BB)
    }
  },
  44746: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(37778),
      DB = GB(41307);
    class QB {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.entries = [], this.aDB = new Array, this._capacity = GB, this._depth = YB, this._maxDepth = DB, this._creationFunc = QB, this._minPoint = BB, this._maxPoint = OB, this.aDB.push(BB.clone()), this.aDB.push(OB.clone()), this.aDB.push(BB.clone()), this.aDB[2].x = OB.x, this.aDB.push(BB.clone()), this.aDB[3].y = OB.y, this.aDB.push(BB.clone()), this.aDB[4].z = OB.z, this.aDB.push(OB.clone()), this.aDB[5].z = BB.z, this.aDB.push(OB.clone()), this.aDB[6].x = BB.x, this.aDB.push(OB.clone()), this.aDB[7].y = BB.y
      }
      get CP() {
        return this._capacity
      }
      get LDB() {
        return this._minPoint
      }
      get iDB() {
        return this._maxPoint
      }
      addEntry(BB) {
        if (this.blocks)
          for (let OB = 0; OB < this.blocks.length; OB++) {
            this.blocks[OB].addEntry(BB)
          } else this._creationFunc(BB, this), this.entries.length > this.CP && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(BB) {
        if (this.blocks) {
          for (let OB = 0; OB < this.blocks.length; OB++) {
            this.blocks[OB].removeEntry(BB)
          }
          return
        }
        const OB = this.entries.indexOf(BB);
        OB > -1 && this.entries.splice(OB, 1)
      }
      addEntries(BB) {
        for (let OB = 0; OB < BB.length; OB++) {
          const GB = BB[OB];
          this.addEntry(GB)
        }
      }
      select(BB, OB, GB) {
        if (DB.c.IsInFrustum(this.aDB, BB)) {
          if (this.blocks) {
            for (let YB = 0; YB < this.blocks.length; YB++) {
              this.blocks[YB].select(BB, OB, GB)
            }
            return
          }
          GB ? OB.concat(this.entries) : OB.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(BB, OB, GB, YB) {
        if (DB.c.IntersectsSphere(this._minPoint, this._maxPoint, BB, OB)) {
          if (this.blocks) {
            for (let DB = 0; DB < this.blocks.length; DB++) {
              this.blocks[DB].intersects(BB, OB, GB, YB)
            }
            return
          }
          YB ? GB.concat(this.entries) : GB.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(BB, OB) {
        if (BB.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let GB = 0; GB < this.blocks.length; GB++) {
              this.blocks[GB].intersectsRay(BB, OB)
            }
            return
          }
          OB.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        QB._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(BB, OB, GB, DB, oB, jB, yB, JB) {
        yB.blocks = new Array;
        const MB = new YB.r((OB.x - BB.x) / 2, (OB.y - BB.y) / 2, (OB.z - BB.z) / 2);
        for (let YB = 0; YB < 2; YB++)
          for (let OB = 0; OB < 2; OB++)
            for (let PB = 0; PB < 2; PB++) {
              const zB = BB.add(MB.multiplyByFloats(YB, OB, PB)),
                lB = BB.add(MB.multiplyByFloats(YB + 1, OB + 1, PB + 1)),
                pB = new QB(zB, lB, DB, oB + 1, jB, JB);
              pB.addEntries(GB), yB.blocks.push(pB)
            }
      }
    }
  },
  44748: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB
    });
    var YB = GB(41091),
      DB = GB(37778),
      QB = GB(41442),
      oB = GB(44695),
      jB = GB(41183),
      yB = GB(37796),
      JB = GB(44737);
    class MB {
      constructor(BB) {
        this.name = jB.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new oB.B(DB.r.Zero(), new DB.r(1, 1, 1)), (BB = BB || yB.b.LastCreatedScene) && (this.eq = BB, this.eq.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.eq.getActiveSubMeshCandidates = BB => this.getActiveSubMeshCandidates(BB), this.eq.getCollidingSubMeshCandidates = (BB, OB) => this.getCollidingSubMeshCandidates(BB, OB), this.eq.getIntersectingSubMeshCandidates = (BB, OB) => this.getIntersectingSubMeshCandidates(BB, OB))
      }
      register() {
        this.eq.onMeshRemovedObservable.add((BB => {
          const OB = this.eq.selectionOctree;
          if (void 0 !== OB && null !== OB) {
            const GB = OB.hDB.indexOf(BB); - 1 !== GB && OB.hDB.splice(GB, 1)
          }
        })), this.eq.onMeshImportedObservable.add((BB => {
          const OB = this.eq.selectionOctree;
          void 0 !== OB && null !== OB && OB.UDB(BB)
        }))
      }
      getActiveMeshCandidates() {
        return this.eq.vDB?.select(this.eq.frustumPlanes) || this.eq._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(BB) {
        if (BB._submeshesOctree && BB.useOctreeForRenderingSelection) {
          return BB._submeshesOctree.select(this.eq.frustumPlanes)
        }
        return this.eq._getDefaultSubMeshCandidates(BB)
      }
      getIntersectingSubMeshCandidates(BB, OB) {
        if (BB._submeshesOctree && BB.useOctreeForPicking) {
          oB.B.TransformToRef(OB, BB.getWorldMatrix(), this._tempRay);
          return BB._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.eq._getDefaultSubMeshCandidates(BB)
      }
      getCollidingSubMeshCandidates(BB, OB) {
        if (BB._submeshesOctree && BB.useOctreeForCollisions) {
          const GB = OB._velocityWorldLength + Math.max(OB._radius.x, OB._radius.y, OB._radius.z);
          return BB._submeshesOctree.intersects(OB._basePointWorld, GB)
        }
        return this.eq._getDefaultSubMeshCandidates(BB)
      }
      rebuild() {}
      dispose() {}
    }
    let PB = !1;
    PB || (PB = !0, YB.e.prototype.createOrUpdateSelectionOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        GB = this._getComponent(jB.b.NAME_OCTREE);
      GB || (GB = new MB(this), this.pDB(GB)), this.vDB || (this.vDB = new JB.d(JB.d.CreationFuncForMeshes, BB, OB));
      const YB = this.getWorldExtends();
      return this.vDB.update(YB.min, YB.max, this.meshes), this.vDB
    }, Object.defineProperty(YB.e.prototype, "selectionOctree", {
      get: function() {
        return this.vDB
      },
      enumerable: !0,
      configurable: !0
    }), QB.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const GB = this.JF();
      let YB = GB._getComponent(jB.b.NAME_OCTREE);
      YB || (YB = new MB(GB), GB.pDB(YB)), this._submeshesOctree || (this._submeshesOctree = new JB.d(JB.d.CreationFuncForSubMeshes, BB, OB)), this.computeWorldMatrix(!0);
      const DB = this.Gw().boundingBox;
      return this._submeshesOctree.update(DB.minimumWorld, DB.maximumWorld, this.iW), this._submeshesOctree
    })
  },
  44695: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => PB,
      d: () => uB,
      g: () => qB,
      j: () => pB,
      m: () => lB,
      q: () => dB,
      u: () => kB,
      x: () => nB,
      y: () => fB,
      z: () => UB
    });
    var YB = GB(37782),
      DB = GB(37778),
      QB = GB(37785),
      oB = GB(41294),
      jB = GB(41145),
      yB = GB(37796),
      JB = GB(41205);
    const MB = {
      internalPickerForMesh: void 0
    };
    class PB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YB.b;
        this.origin = BB, this.direction = OB, this.length = GB, this.epsilon = DB
      }
      clone() {
        return new PB(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const YB = PB._TmpVector3[0].zOB(BB.x - GB, BB.y - GB, BB.z - GB),
          DB = PB._TmpVector3[1].zOB(OB.x + GB, OB.y + GB, OB.z + GB);
        let QB, oB, jB, yB, JB = 0,
          MB = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < YB.x || this.origin.x > DB.x) return !1
        } else if (QB = 1 / this.direction.x, oB = (YB.x - this.origin.x) * QB, jB = (DB.x - this.origin.x) * QB, jB === -1 / 0 && (jB = 1 / 0), oB > jB && (yB = oB, oB = jB, jB = yB), JB = Math.max(oB, JB), MB = Math.min(jB, MB), JB > MB) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < YB.y || this.origin.y > DB.y) return !1
        } else if (QB = 1 / this.direction.y, oB = (YB.y - this.origin.y) * QB, jB = (DB.y - this.origin.y) * QB, jB === -1 / 0 && (jB = 1 / 0), oB > jB && (yB = oB, oB = jB, jB = yB), JB = Math.max(oB, JB), MB = Math.min(jB, MB), JB > MB) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < YB.z || this.origin.z > DB.z) return !1
        } else if (QB = 1 / this.direction.z, oB = (YB.z - this.origin.z) * QB, jB = (DB.z - this.origin.z) * QB, jB === -1 / 0 && (jB = 1 / 0), oB > jB && (yB = oB, oB = jB, jB = yB), JB = Math.max(oB, JB), MB = Math.min(jB, MB), JB > MB) return !1;
        return !0
      }
      intersectsBox(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(BB.minimum, BB.maximum, OB)
      }
      intersectsSphere(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = BB.center.x - this.origin.x,
          YB = BB.center.y - this.origin.y,
          DB = BB.center.z - this.origin.z,
          QB = GB * GB + YB * YB + DB * DB,
          oB = BB.radius + OB,
          jB = oB * oB;
        if (QB <= jB) return !0;
        const yB = GB * this.direction.x + YB * this.direction.y + DB * this.direction.z;
        if (yB < 0) return !1;
        return QB - yB * yB <= jB
      }
      intersectsTriangle(BB, OB, GB) {
        const YB = PB._TmpVector3[0],
          QB = PB._TmpVector3[1],
          jB = PB._TmpVector3[2],
          yB = PB._TmpVector3[3],
          JB = PB._TmpVector3[4];
        OB.subtractToRef(BB, YB), GB.subtractToRef(BB, QB), DB.r.CrossToRef(this.direction, QB, jB);
        const MB = DB.r.Dot(YB, jB);
        if (0 === MB) return null;
        const zB = 1 / MB;
        this.origin.subtractToRef(BB, yB);
        const lB = DB.r.Dot(yB, jB) * zB;
        if (lB < -this.epsilon || lB > 1 + this.epsilon) return null;
        DB.r.CrossToRef(yB, YB, JB);
        const pB = DB.r.Dot(this.direction, JB) * zB;
        if (pB < -this.epsilon || lB + pB > 1 + this.epsilon) return null;
        const qB = DB.r.Dot(QB, JB) * zB;
        return qB > this.length || qB < 0 ? null : new oB.c(1 - lB - pB, lB, qB)
      }
      intersectsPlane(BB) {
        let OB;
        const GB = DB.r.Dot(BB.normal, this.direction);
        if (Math.abs(GB) < 9.99999997475243e-7) return null;
        {
          const YB = DB.r.Dot(BB.normal, this.origin);
          return OB = (-BB.d - YB) / GB, OB < 0 ? OB < -9.99999997475243e-7 ? null : 0 : OB
        }
      }
      intersectsAxis(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (BB) {
          case "y": {
            const BB = (this.origin.y - OB) / this.direction.y;
            return BB > 0 ? null : new DB.r(this.origin.x + this.direction.x * -BB, OB, this.origin.z + this.direction.z * -BB)
          }
          case "x": {
            const BB = (this.origin.x - OB) / this.direction.x;
            return BB > 0 ? null : new DB.r(OB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
          }
          case "z": {
            const BB = (this.origin.z - OB) / this.direction.z;
            return BB > 0 ? null : new DB.r(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, OB)
          }
          default:
            return null
        }
      }
      lQB(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const jB = DB.k.Matrix[0];
        return BB.getWorldMatrix().invertToRef(jB), this._tmpRay ? PB.TransformToRef(this, jB, this._tmpRay) : this._tmpRay = PB.Transform(this, jB), BB.intersects(this._tmpRay, OB, GB, YB, QB, oB)
      }
      intersectsMeshes(BB, OB, GB) {
        GB ? GB.length = 0 : GB = [];
        for (let YB = 0; YB < BB.length; YB++) {
          const DB = this.lQB(BB[YB], OB);
          DB.hit && GB.push(DB)
        }
        return GB.sort(this._comparePickingInfo), GB
      }
      _comparePickingInfo(BB, OB) {
        return BB.distance < OB.distance ? -1 : BB.distance > OB.distance ? 1 : 0
      }
      intersectionSegment(BB, OB, GB) {
        const YB = this.origin,
          QB = DB.k.Xp[0],
          oB = DB.k.Xp[1],
          jB = DB.k.Xp[2],
          yB = DB.k.Xp[3];
        OB.subtractToRef(BB, QB), this.direction.scaleToRef(PB._Rayl, jB), YB.addToRef(jB, oB), BB.subtractToRef(YB, yB);
        const JB = DB.r.Dot(QB, QB),
          MB = DB.r.Dot(QB, jB),
          zB = DB.r.Dot(jB, jB),
          lB = DB.r.Dot(QB, yB),
          pB = DB.r.Dot(jB, yB),
          qB = JB * zB - MB * MB;
        let ZB, NB, RB = qB,
          WB = qB;
        qB < PB._Smallnum ? (ZB = 0, RB = 1, NB = pB, WB = zB) : (ZB = MB * pB - zB * lB, NB = JB * pB - MB * lB, ZB < 0 ? (ZB = 0, NB = pB, WB = zB) : ZB > RB && (ZB = RB, NB = pB + MB, WB = zB)), NB < 0 ? (NB = 0, -lB < 0 ? ZB = 0 : -lB > JB ? ZB = RB : (ZB = -lB, RB = JB)) : NB > WB && (NB = WB, -lB + MB < 0 ? ZB = 0 : -lB + MB > JB ? ZB = RB : (ZB = -lB + MB, RB = JB));
        const AB = Math.abs(ZB) < PB._Smallnum ? 0 : ZB / RB,
          VB = Math.abs(NB) < PB._Smallnum ? 0 : NB / WB,
          SB = DB.k.Xp[4];
        jB.scaleToRef(VB, SB);
        const nB = DB.k.Xp[5];
        QB.scaleToRef(AB, nB), nB.addInPlace(yB);
        const UB = DB.k.Xp[6];
        nB.subtractToRef(SB, UB);
        return VB > 0 && VB <= this.length && UB.lengthSquared() < GB * GB ? nB.length() : -1
      }
      update(BB, OB, GB, YB, QB, oB, jB) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          PB._RayDistant || (PB._RayDistant = PB.Zero()), PB._RayDistant.unprojectRayToRef(BB, OB, GB, YB, DB.d.IdentityReadOnly, oB, jB);
          const yB = DB.k.Matrix[0];
          QB.invertToRef(yB), PB.TransformToRef(PB._RayDistant, yB, this)
        } else this.unprojectRayToRef(BB, OB, GB, YB, QB, oB, jB);
        return this
      }
      static Zero() {
        return new PB(DB.r.Zero(), DB.r.Zero())
      }
      static CreateNew(BB, OB, GB, YB, DB, QB, oB) {
        return PB.Zero().update(BB, OB, GB, YB, DB, QB, oB)
      }
      static CreateNewFromTo(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DB.d.IdentityReadOnly;
        const YB = new PB(new DB.r(0, 0, 0), new DB.r(0, 0, 0));
        return PB.CreateFromToToRef(BB, OB, YB, GB)
      }
      static CreateFromToToRef(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DB.d.IdentityReadOnly;
        GB.origin.IU(BB);
        const QB = OB.subtractToRef(BB, GB.direction),
          oB = Math.sqrt(QB.x * QB.x + QB.y * QB.y + QB.z * QB.z);
        return GB.length = oB, GB.direction.normalize(), PB.TransformToRef(GB, YB, GB)
      }
      static Transform(BB, OB) {
        const GB = new PB(new DB.r(0, 0, 0), new DB.r(0, 0, 0));
        return PB.TransformToRef(BB, OB, GB), GB
      }
      static TransformToRef(BB, OB, GB) {
        DB.r.TransformCoordinatesToRef(BB.origin, OB, GB.origin), DB.r.TransformNormalToRef(BB.direction, OB, GB.direction), GB.length = BB.length, GB.epsilon = BB.epsilon;
        const YB = GB.direction,
          QB = YB.length();
        if (0 !== QB && 1 !== QB) {
          const BB = 1 / QB;
          YB.x *= BB, YB.y *= BB, YB.z *= BB, GB.length *= QB
        }
        return GB
      }
      unprojectRayToRef(BB, OB, GB, YB, QB, oB, jB) {
        const JB = DB.k.Matrix[0];
        QB.multiplyToRef(oB, JB), JB.multiplyToRef(jB, JB), JB.invert();
        const MB = yB.b.LastCreatedEngine,
          PB = DB.k.Xp[0];
        PB.x = BB / GB * 2 - 1, PB.y = -(OB / YB * 2 - 1), PB.z = MB?.fDB ? 1 : MB?.isNDCHalfZRange ? 0 : -1;
        const zB = DB.k.Xp[1].zOB(PB.x, PB.y, 1 - 1e-8),
          lB = DB.k.Xp[2],
          pB = DB.k.Xp[3];
        DB.r.TransformCoordinatesToRef(PB, JB, lB), DB.r.TransformCoordinatesToRef(zB, JB, pB), this.origin.IU(lB), pB.subtractToRef(lB, this.direction), this.direction.normalize()
      }
    }

    function zB(BB, OB, GB, YB, DB) {
      let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const oB = PB.Zero();
      return lB(BB, OB, GB, YB, oB, DB, QB), oB
    }

    function lB(BB, OB, GB, YB, QB, oB) {
      let jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const JB = BB.Lp();
      if (!oB && !(oB = BB.activeCamera) && !(oB = BB.cameraToUseForPointers)) return BB;
      const MB = oB.viewport,
        PB = JB.getRenderHeight(),
        {
          x: zB,
          y: lB,
          width: pB,
          height: qB
        } = MB.toGlobal(JB.getRenderWidth(), PB),
        ZB = 1 / JB.getHardwareScalingLevel();
      return OB = OB * ZB - zB, GB = GB * ZB - (PB - lB - qB), QB.update(OB, GB, pB, qB, YB || DB.d.IdentityReadOnly, jB ? DB.d.IdentityReadOnly : oB.getViewMatrix(), oB.getProjectionMatrix(), yB), BB
    }

    function pB(BB, OB, GB, YB) {
      const DB = PB.Zero();
      return qB(BB, OB, GB, DB, YB), DB
    }

    function qB(BB, OB, GB, YB, QB) {
      if (!jB.e) return BB;
      const oB = BB.Lp();
      if (!QB && !(QB = BB.activeCamera) && !(QB = BB.cameraToUseForPointers)) throw new Error("Active camera not set");
      const yB = QB.viewport,
        JB = oB.getRenderHeight(),
        {
          x: MB,
          y: PB,
          width: zB,
          height: lB
        } = yB.toGlobal(oB.getRenderWidth(), JB),
        pB = DB.d.Identity(),
        qB = 1 / oB.getHardwareScalingLevel();
      return OB = OB * qB - MB, GB = GB * qB - (JB - PB - lB), YB.update(OB, GB, zB, lB, pB, pB, QB.getProjectionMatrix()), BB
    }

    function ZB(BB, OB, GB, YB, DB, QB, oB, jB) {
      return NB(BB, GB, YB, OB(YB, GB.enableDistantPicking), DB, QB, oB, jB)
    }

    function NB(BB, OB, GB, YB, DB, QB, oB, jB) {
      const yB = OB.intersects(YB, DB, oB, QB, GB, jB);
      return yB && yB.hit ? !DB && null != BB && yB.distance >= BB.distance ? null : yB : null
    }

    function RB(BB, OB) {
      return "InstancedLinesMesh" === BB || "LinesMesh" === BB ? OB.intersectionThreshold : 0
    }

    function WB(BB) {
      const OB = BB.getClassName();
      if ("GreasedLineMesh" === OB) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const GB = BB.rawBoundingInfo;
      return {
        rawBoundingInfo: GB,
        intersectionThreshold: GB ? RB(OB, BB) : 0
      }
    }

    function AB(BB, OB, GB, YB, DB) {
      const QB = BB(GB, OB.enableDistantPicking);
      return QB.intersectsSphere(YB.xDB, DB) && QB.intersectsBox(YB.boundingBox, DB) ? QB : null
    }

    function VB(BB, OB, GB, YB, QB, oB) {
      let yB = null;
      const JB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        PB = BB.cameraToUseForPointers || BB.activeCamera,
        zB = MB.internalPickerForMesh || ZB,
        lB = zB === ZB;
      for (let jB = 0; jB < BB.meshes.length; jB++) {
        const MB = BB.meshes[jB];
        if (GB) {
          if (!GB(MB, -1)) continue
        } else if (!MB.isEnabled() || !MB.isVisible || !MB.bq) continue;
        const pB = JB && MB.isWorldMatrixCameraDependent(),
          qB = MB.computeWorldMatrix(pB, PB);
        if (MB.hasThinInstances && MB.HGB) {
          const BB = zB(yB, OB, MB, qB, !0, !0, oB);
          if (BB) {
            if (QB) return BB;
            const {
              rawBoundingInfo: jB,
              intersectionThreshold: JB
            } = WB(MB), PB = MB._thinInstanceDataStorage.matrixData;
            if (PB) {
              const BB = DB.k.Matrix[0],
                pB = DB.k.Matrix[1],
                ZB = Math.min(MB.rBB, PB.length >> 4);
              for (let RB = 0; RB < ZB; RB++) {
                if (GB && !GB(MB, RB)) continue;
                DB.d.FromArrayToRef(PB, RB << 4, BB), BB.multiplyToRef(qB, pB);
                const ZB = lB && jB ? AB(OB, MB, pB, jB, JB) : null;
                if (lB && jB && !ZB) continue;
                const WB = lB && ZB ? NB(yB, MB, pB, ZB, YB, QB, oB, !0) : zB(yB, OB, MB, pB, YB, QB, oB, !0);
                if (WB && (yB = WB, yB.thinInstanceIndex = RB, YB)) return yB
              }
            }
          }
        } else {
          const BB = zB(yB, OB, MB, qB, YB, QB, oB);
          if (BB && (yB = BB, YB)) return yB
        }
      }
      return yB || new jB.e
    }

    function SB(BB, OB, GB, YB) {
      if (!jB.e) return null;
      const QB = [],
        oB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        yB = BB.cameraToUseForPointers || BB.activeCamera,
        JB = MB.internalPickerForMesh || ZB,
        PB = JB === ZB;
      for (let jB = 0; jB < BB.meshes.length; jB++) {
        const MB = BB.meshes[jB];
        if (GB) {
          if (!GB(MB, -1)) continue
        } else if (!MB.isEnabled() || !MB.isVisible || !MB.bq) continue;
        const zB = oB && MB.isWorldMatrixCameraDependent(),
          lB = MB.computeWorldMatrix(zB, yB);
        if (MB.hasThinInstances && MB.HGB) {
          if (JB(null, OB, MB, lB, !0, !0, YB)) {
            const {
              rawBoundingInfo: BB,
              intersectionThreshold: oB
            } = WB(MB), jB = MB._thinInstanceDataStorage.matrixData;
            if (jB) {
              const yB = DB.k.Matrix[0],
                zB = DB.k.Matrix[1],
                pB = Math.min(MB.rBB, jB.length >> 4);
              for (let qB = 0; qB < pB; qB++) {
                if (GB && !GB(MB, qB)) continue;
                DB.d.FromArrayToRef(jB, qB << 4, yB), yB.multiplyToRef(lB, zB);
                const pB = PB && BB ? AB(OB, MB, zB, BB, oB) : null;
                if (PB && BB && !pB) continue;
                const ZB = PB && pB ? NB(null, MB, zB, pB, !1, !1, YB, !0) : JB(null, OB, MB, zB, !1, !1, YB, !0);
                ZB && (ZB.thinInstanceIndex = qB, QB.push(ZB))
              }
            }
          }
        } else {
          const BB = JB(null, OB, MB, lB, !1, !1, YB);
          BB && QB.push(BB)
        }
      }
      return QB
    }

    function nB(BB, OB, GB, YB, QB, oB) {
      if (!jB.e) return null;
      const yB = VB(BB, (YB => (BB._tempPickingRay || (BB._tempPickingRay = PB.Zero()), lB(BB, OB, GB, YB, BB._tempPickingRay, oB || null), BB._tempPickingRay)), YB, QB, !0);
      return yB && (yB.ray = zB(BB, OB, GB, DB.d.Identity(), oB || null)), yB
    }

    function UB(BB, OB, GB, YB, QB, oB, jB) {
      const yB = VB(BB, ((YB, DB) => (BB._tempPickingRay || (BB._tempPickingRay = PB.Zero()), lB(BB, OB, GB, YB, BB._tempPickingRay, oB || null, !1, DB), BB._tempPickingRay)), YB, QB, !1, jB);
      return yB && (yB.ray = zB(BB, OB, GB, DB.d.Identity(), oB || null)), yB
    }

    function fB(BB, OB, GB, YB, QB) {
      const oB = VB(BB, (GB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = DB.d.Identity()), GB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = PB.Zero()), PB.TransformToRef(OB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), GB, YB, !1, QB);
      return oB && (oB.ray = OB), oB
    }

    function kB(BB, OB, GB, YB, DB, QB) {
      return SB(BB, (YB => zB(BB, OB, GB, YB, DB || null)), YB, QB)
    }

    function dB(BB, OB, GB, YB) {
      return SB(BB, (GB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = DB.d.Identity()), GB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = PB.Zero()), PB.TransformToRef(OB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), GB, YB)
    }

    function KB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        YB = arguments.length > 3 ? arguments[3] : void 0,
        QB = arguments.length > 4 ? arguments[4] : void 0;
      YB || (YB = BB.getWorldMatrix()), OB.length = GB, QB ? OB.origin.IU(QB) : OB.origin.IU(BB.position);
      const oB = DB.k.Xp[2];
      oB.set(0, 0, BB._scene.useRightHandedSystem ? -1 : 1);
      const jB = DB.k.Xp[3];
      return DB.r.TransformNormalToRef(oB, YB, jB), DB.r.NormalizeToRef(jB, OB.direction), OB
    }

    function uB(BB, OB) {
      OB && (OB.prototype.getForwardRay = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        return KB(this, new PB(DB.r.Zero(), DB.r.Zero(), BB), BB, OB, GB)
      }, OB.prototype.getForwardRayToRef = function(BB) {
        return KB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), BB && (JB.c._IsPickingAvailable = !0, BB.prototype.createPickingRay = function(BB, OB, GB, YB) {
        return zB(this, BB, OB, GB, YB, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    PB._TmpVector3 = (0, QB.e)(6, DB.r.Zero), PB._RayDistant = PB.Zero(), PB._Smallnum = 1e-8, PB._Rayl = 1e9
  },
  44689: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB.B
    });
    var YB = GB(41091),
      DB = GB(41217),
      QB = GB(44695);
    let oB = !1;
    oB || (oB = !0, (0, QB.d)(YB.e, DB.e), YB.e.prototype.createPickingRayToRef = function(BB, OB, GB, YB, DB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, QB.m)(this, BB, OB, GB, YB, DB, oB, jB)
    }, YB.e.prototype.createPickingRayInCameraSpace = function(BB, OB, GB) {
      return (0, QB.j)(this, BB, OB, GB)
    }, YB.e.prototype.createPickingRayInCameraSpaceToRef = function(BB, OB, GB, YB) {
      return (0, QB.g)(this, BB, OB, GB, YB)
    }, YB.e.prototype.pickWithBoundingInfo = function(BB, OB, GB, YB, DB) {
      return (0, QB.x)(this, BB, OB, GB, YB, DB)
    }, YB.e.prototype.pl = function(BB, OB, GB, YB, DB, oB) {
      let jB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, QB.z)(this, BB, OB, GB, YB, DB, oB, jB)
    }, YB.e.prototype.pickWithRay = function(BB, OB, GB, YB) {
      return (0, QB.y)(this, BB, OB, GB, YB)
    }, YB.e.prototype.multiPick = function(BB, OB, GB, YB, DB) {
      return (0, QB.u)(this, BB, OB, GB, YB, DB)
    }, YB.e.prototype.multiPickWithRay = function(BB, OB, GB) {
      return (0, QB.q)(this, BB, OB, GB)
    })
  },
  44699: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37778),
      oB = GB(41250),
      jB = GB(44702),
      yB = GB(41220),
      JB = GB(37823);
    let MB = (() => {
        var BB;
        let OB, GB, yB, JB, MB, PB, zB, lB, pB = jB.d,
          qB = [],
          ZB = [],
          NB = [],
          RB = [],
          WB = [],
          AB = [],
          VB = [],
          SB = [],
          nB = [],
          UB = [],
          fB = [],
          kB = [],
          dB = [];
        return BB = class extends pB {
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
          constructor(BB, OB, GB, DB) {
            super(BB, GB, DB), this._shadowFrustumSize = ((0, YB.j)(this, qB), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, YB.j)(this, ZB, !0), this.autoCalcShadowZBounds = ((0, YB.j)(this, NB), (0, YB.j)(this, RB, !1)), this._orthoLeft = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, Number.MAX_VALUE)), this._orthoRight = ((0, YB.j)(this, VB), (0, YB.j)(this, SB, Number.MIN_VALUE)), this._orthoTop = ((0, YB.j)(this, nB), (0, YB.j)(this, UB, Number.MIN_VALUE)), this._orthoBottom = ((0, YB.j)(this, fB), (0, YB.j)(this, kB, Number.MAX_VALUE)), (0, YB.j)(this, dB), this.position = OB.scale(-1), this.direction = OB
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return oB.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(BB, OB, GB) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(BB) : this._setDefaultAutoExtendShadowProjectionMatrix(BB, OB, GB)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(BB) {
            const OB = this.JF().activeCamera;
            QB.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : OB ? OB.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : OB ? OB.maxZ : 1e4, BB, this.JF().Lp().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(BB, OB, GB) {
            const YB = this.JF().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const BB = QB.r.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let YB = Number.MAX_VALUE,
                DB = -Number.MAX_VALUE;
              for (let oB = 0; oB < GB.length; oB++) {
                const jB = GB[oB];
                if (!jB) continue;
                const yB = jB.Gw().boundingBox;
                for (let GB = 0; GB < yB.vectorsWorld.length; GB++) QB.r.TransformCoordinatesToRef(yB.vectorsWorld[GB], OB, BB), BB.x < this._orthoLeft && (this._orthoLeft = BB.x), BB.y < this._orthoBottom && (this._orthoBottom = BB.y), BB.x > this._orthoRight && (this._orthoRight = BB.x), BB.y > this._orthoTop && (this._orthoTop = BB.y), this.autoCalcShadowZBounds && (BB.z < YB && (YB = BB.z), BB.z > DB && (DB = BB.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = YB, this._shadowMaxZ = DB)
            }
            const DB = this._orthoRight - this._orthoLeft,
              oB = this._orthoTop - this._orthoBottom,
              jB = void 0 !== this.shadowMinZ ? this.shadowMinZ : YB?.minZ || 0,
              yB = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : YB?.maxZ || 1e4,
              JB = this.JF().Lp().fDB;
            QB.d.OrthoOffCenterLHToRef(this._orthoLeft - DB * this.shadowOrthoScale, this._orthoRight + DB * this.shadowOrthoScale, this._orthoBottom - oB * this.shadowOrthoScale, this._orthoTop + oB * this.shadowOrthoScale, JB ? yB : jB, JB ? jB : yB, BB, this.JF().Lp().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(BB, OB) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, OB), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, OB), this)
          }
          transferToNodeMaterialEffect(BB, OB) {
            return this.computeTransformedInformation() ? (BB.setFloat3(OB, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (BB.setFloat3(OB, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(BB) {
            const OB = this._scene.Lp();
            return !OB.fDB && OB.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(BB) {
            const OB = this._scene.Lp();
            return OB.fDB && OB.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(BB, OB) {
            BB["DIRLIGHT" + OB] = !0
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(pB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)("orthoLeft")], PB = [(0, DB.L)("orthoRight")], zB = [(0, DB.L)("orthoTop")], lB = [(0, DB.L)("orthoBottom")], (0, YB.h)(BB, null, OB, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowFrustumSize" in BB,
              get: BB => BB.shadowFrustumSize
            },
            metadata: QB
          }, null, qB), (0, YB.h)(BB, null, GB, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowOrthoScale" in BB,
              get: BB => BB.shadowOrthoScale
            },
            metadata: QB
          }, null, qB), (0, YB.h)(null, null, yB, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoUpdateExtends" in BB,
              get: BB => BB.autoUpdateExtends,
              set: (BB, OB) => {
                BB.autoUpdateExtends = OB
              }
            },
            metadata: QB
          }, ZB, NB), (0, YB.h)(null, null, JB, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoCalcShadowZBounds" in BB,
              get: BB => BB.autoCalcShadowZBounds,
              set: (BB, OB) => {
                BB.autoCalcShadowZBounds = OB
              }
            },
            metadata: QB
          }, RB, WB), (0, YB.h)(null, null, MB, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoLeft" in BB,
              get: BB => BB._orthoLeft,
              set: (BB, OB) => {
                BB._orthoLeft = OB
              }
            },
            metadata: QB
          }, AB, VB), (0, YB.h)(null, null, PB, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoRight" in BB,
              get: BB => BB._orthoRight,
              set: (BB, OB) => {
                BB._orthoRight = OB
              }
            },
            metadata: QB
          }, SB, nB), (0, YB.h)(null, null, zB, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoTop" in BB,
              get: BB => BB._orthoTop,
              set: (BB, OB) => {
                BB._orthoTop = OB
              }
            },
            metadata: QB
          }, UB, fB), (0, YB.h)(null, null, lB, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoBottom" in BB,
              get: BB => BB._orthoBottom,
              set: (BB, OB) => {
                BB._orthoBottom = OB
              }
            },
            metadata: QB
          }, kB, dB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      PB = !1;
    PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_1", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.DirectionalLight", MB))
  },
  39394: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      d: () => QB,
      g: () => oB,
      h: () => jB
    });
    var YB = GB(37894);
    class DB {
      constructor(BB, OB, GB) {
        this.gradient = BB, this.color1 = OB, this.color2 = GB
      }
      getColorToRef(BB) {
        this.color2 ? YB.g.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.IU(this.color1)
      }
    }
    class QB {
      constructor(BB, OB) {
        this.gradient = BB, this.color = OB
      }
    }
    class oB {
      constructor(BB, OB, GB) {
        this.gradient = BB, this.factor1 = OB, this.factor2 = GB
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class jB {
      static GetCurrentGradient(BB, OB, GB) {
        if (OB[0].gradient > BB) return void GB(OB[0], OB[0], 1);
        for (let DB = 0; DB < OB.length - 1; DB++) {
          const YB = OB[DB],
            QB = OB[DB + 1];
          if (BB >= YB.gradient && BB <= QB.gradient) {
            return void GB(YB, QB, (BB - YB.gradient) / (QB.gradient - YB.gradient))
          }
        }
        const YB = OB.length - 1;
        GB(OB[YB], OB[YB], 1)
      }
    }
  },
  39403: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(39358);
    class oB {
      constructor() {
        this.direction1 = new YB.r(0, 1, 0), this.direction2 = new YB.r(0, 1, 0), this.minEmitBox = new YB.r(-.5, -.5, -.5), this.maxEmitBox = new YB.r(.5, .5, .5)
      }
      startDirectionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(this.direction1.x, this.direction2.x),
          jB = (0, DB.RandomRange)(this.direction1.y, this.direction2.y),
          yB = (0, DB.RandomRange)(this.direction1.z, this.direction2.z);
        if (QB) return OB.x = oB, OB.y = jB, void(OB.z = yB);
        YB.r.TransformNormalFromFloatsToRef(oB, jB, yB, BB, OB)
      }
      startPositionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          jB = (0, DB.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          yB = (0, DB.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (QB) return OB.x = oB, OB.y = jB, void(OB.z = yB);
        YB.r.TransformCoordinatesFromFloatsToRef(oB, jB, yB, BB, OB)
      }
      clone() {
        const BB = new oB;
        return QB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2), BB.setVector3("minEmitBox", this.minEmitBox), BB.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(BB) {
        BB.addUniform("direction1", 3), BB.addUniform("direction2", 3), BB.addUniform("minEmitBox", 3), BB.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB.minEmitBox = this.minEmitBox.dDB(), BB.maxEmitBox = this.maxEmitBox.dDB(), BB
      }
      parse(BB) {
        YB.r.FromArrayToRef(BB.direction1, 0, this.direction1), YB.r.FromArrayToRef(BB.direction2, 0, this.direction2), YB.r.FromArrayToRef(BB.minEmitBox, 0, this.minEmitBox), YB.r.FromArrayToRef(BB.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39356: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => oB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(39358);
    class oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = BB, this.height = OB, this.radiusRange = GB, this.directionRandomizer = DB, this._tempVector = YB.r.Zero()
      }
      startDirectionFunction(BB, OB, GB, QB, oB) {
        GB.position.subtractToRef(BB.getTranslation(), this._tempVector), this._tempVector.normalize(), YB.r.TransformNormalToRef(this._tempVector, oB, this._tempVector);
        const jB = (0, DB.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let yB = Math.atan2(this._tempVector.x, this._tempVector.z);
        yB += (0, DB.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = jB, this._tempVector.x = Math.sin(yB), this._tempVector.z = Math.cos(yB), this._tempVector.normalize(), QB ? OB.IU(this._tempVector) : YB.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, BB, OB)
      }
      startPositionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(-this.height / 2, this.height / 2),
          jB = (0, DB.RandomRange)(0, 2 * Math.PI),
          yB = (0, DB.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          JB = Math.sqrt(yB) * this.radius,
          MB = JB * Math.cos(jB),
          PB = JB * Math.sin(jB);
        QB ? OB.zOB(MB, oB, PB) : YB.r.TransformCoordinatesFromFloatsToRef(MB, oB, PB, BB, OB)
      }
      clone() {
        const BB = new oB(this.radius, this.directionRandomizer);
        return QB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("height", this.height), BB.setFloat("radiusRange", this.radiusRange), BB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("height", 1), BB.addUniform("radiusRange", 1), BB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.radius = this.radius, BB.height = this.height, BB.radiusRange = this.radiusRange, BB.directionRandomizer = this.directionRandomizer, BB
      }
      parse(BB) {
        this.radius = BB.radius, this.height = BB.height, this.radiusRange = BB.radiusRange, this.directionRandomizer = BB.directionRandomizer
      }
    }
    class jB extends oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new YB.r(0, 1, 0),
          QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new YB.r(0, 1, 0);
        super(BB, OB, GB), this.direction1 = DB, this.direction2 = QB
      }
      startDirectionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(this.direction1.x, this.direction2.x),
          jB = (0, DB.RandomRange)(this.direction1.y, this.direction2.y),
          yB = (0, DB.RandomRange)(this.direction1.z, this.direction2.z);
        QB ? OB.zOB(oB, jB, yB) : YB.r.TransformNormalFromFloatsToRef(oB, jB, yB, BB, OB)
      }
      clone() {
        const BB = new jB(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return QB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("height", this.height), BB.setFloat("radiusRange", this.radiusRange), BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("height", 1), BB.addUniform("radiusRange", 1), BB.addUniform("direction1", 3), BB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const BB = super.serialize();
        return BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB
      }
      parse(BB) {
        super.parse(BB), YB.r.FromArrayToRef(BB.direction1, 0, this.direction1), YB.r.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
  },
  44712: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => TO
    });
    var YB = GB(39394),
      DB = GB(37802),
      QB = GB(37778),
      oB = GB(41150),
      jB = GB(44718),
      yB = GB(37796),
      JB = GB(41273),
      MB = GB(37894),
      PB = GB(39403),
      zB = GB(39358),
      lB = GB(37807);
    class pB {
      constructor() {
        this.direction1 = new QB.r(0, 1, 0), this.direction2 = new QB.r(0, 1, 0)
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = (0, lB.RandomRange)(this.direction1.x, this.direction2.x),
          oB = (0, lB.RandomRange)(this.direction1.y, this.direction2.y),
          jB = (0, lB.RandomRange)(this.direction1.z, this.direction2.z);
        YB ? OB.zOB(DB, oB, jB) : QB.r.TransformNormalFromFloatsToRef(DB, oB, jB, BB, OB)
      }
      startPositionFunction(BB, OB, GB, YB) {
        YB ? OB.zOB(0, 0, 0) : QB.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, BB, OB)
      }
      clone() {
        const BB = new pB;
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB
      }
      parse(BB) {
        QB.r.FromArrayToRef(BB.direction1, 0, this.direction1), QB.r.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class qB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = OB, this.directionRandomizer = GB
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = GB.position.subtract(BB.getTranslation()).normalize(),
          oB = (0, lB.RandomRange)(0, this.directionRandomizer),
          jB = (0, lB.RandomRange)(0, this.directionRandomizer),
          yB = (0, lB.RandomRange)(0, this.directionRandomizer);
        DB.x += oB, DB.y += jB, DB.z += yB, DB.normalize(), YB ? OB.IU(DB) : QB.r.TransformNormalFromFloatsToRef(DB.x, DB.y, DB.z, BB, OB)
      }
      startPositionFunction(BB, OB, GB, YB) {
        const DB = this.radius - (0, lB.RandomRange)(0, this.radius * this.radiusRange),
          oB = (0, lB.RandomRange)(0, 1),
          jB = (0, lB.RandomRange)(0, 2 * Math.PI),
          yB = Math.acos(2 * oB - 1),
          JB = DB * Math.cos(jB) * Math.sin(yB),
          MB = DB * Math.cos(yB),
          PB = DB * Math.sin(jB) * Math.sin(yB);
        YB ? OB.zOB(JB, Math.abs(MB), PB) : QB.r.TransformCoordinatesFromFloatsToRef(JB, Math.abs(MB), PB, BB, OB)
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
    class ZB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = OB, this.directionRandomizer = GB
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = GB.position.subtract(BB.getTranslation()).normalize(),
          oB = (0, lB.RandomRange)(0, this.directionRandomizer),
          jB = (0, lB.RandomRange)(0, this.directionRandomizer),
          yB = (0, lB.RandomRange)(0, this.directionRandomizer);
        DB.x += oB, DB.y += jB, DB.z += yB, DB.normalize(), YB ? OB.IU(DB) : QB.r.TransformNormalFromFloatsToRef(DB.x, DB.y, DB.z, BB, OB)
      }
      startPositionFunction(BB, OB, GB, YB) {
        const DB = this.radius - (0, lB.RandomRange)(0, this.radius * this.radiusRange),
          oB = (0, lB.RandomRange)(0, 1),
          jB = (0, lB.RandomRange)(0, 2 * Math.PI),
          yB = Math.acos(2 * oB - 1),
          JB = DB * Math.cos(jB) * Math.sin(yB),
          MB = DB * Math.cos(yB),
          PB = DB * Math.sin(jB) * Math.sin(yB);
        YB ? OB.zOB(JB, MB, PB) : QB.r.TransformCoordinatesFromFloatsToRef(JB, MB, PB, BB, OB)
      }
      clone() {
        const BB = new ZB(this.radius, this.directionRandomizer);
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
    class NB extends ZB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new QB.r(0, 1, 0),
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QB.r(0, 1, 0);
        super(BB), this.direction1 = OB, this.direction2 = GB
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = (0, lB.RandomRange)(this.direction1.x, this.direction2.x),
          oB = (0, lB.RandomRange)(this.direction1.y, this.direction2.y),
          jB = (0, lB.RandomRange)(this.direction1.z, this.direction2.z);
        YB ? OB.zOB(DB, oB, jB) : QB.r.TransformNormalFromFloatsToRef(DB, oB, jB, BB, OB)
      }
      clone() {
        const BB = new NB(this.radius, this.direction1, this.direction2);
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
        return BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB
      }
      parse(BB) {
        super.parse(BB), QB.r.FromArrayToRef(BB.direction1, 0, this.direction1), QB.r.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    var RB = GB(39356);
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
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = GB, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = OB, this.radius = BB
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = GB.position.subtract(BB.getTranslation()).normalize(),
          oB = (0, lB.RandomRange)(0, this.directionRandomizer),
          jB = (0, lB.RandomRange)(0, this.directionRandomizer),
          yB = (0, lB.RandomRange)(0, this.directionRandomizer);
        DB.x += oB, DB.y += jB, DB.z += yB, DB.normalize(), YB ? OB.IU(DB) : QB.r.TransformNormalFromFloatsToRef(DB.x, DB.y, DB.z, BB, OB)
      }
      startPositionFunction(BB, OB, GB, YB) {
        const DB = (0, lB.RandomRange)(0, 2 * Math.PI);
        let oB;
        this.emitFromSpawnPointOnly ? oB = 1e-4 : (oB = (0, lB.RandomRange)(0, this.heightRange), oB = 1 - oB * oB);
        let jB = this._radius - (0, lB.RandomRange)(0, this._radius * this.radiusRange);
        jB *= oB;
        const yB = jB * Math.sin(DB),
          JB = jB * Math.cos(DB),
          MB = oB * this._height;
        if (YB) return OB.x = yB, OB.y = MB, void(OB.z = JB);
        QB.r.TransformCoordinatesFromFloatsToRef(yB, MB, JB, BB, OB)
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
    class AB extends WB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QB.r(0, 1, 0),
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QB.r(0, 1, 0);
        super(BB, OB), this.direction1 = GB, this.direction2 = YB
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = (0, lB.RandomRange)(this.direction1.x, this.direction2.x),
          oB = (0, lB.RandomRange)(this.direction1.y, this.direction2.y),
          jB = (0, lB.RandomRange)(this.direction1.z, this.direction2.z);
        YB ? OB.zOB(DB, oB, jB) : QB.r.TransformNormalFromFloatsToRef(DB, oB, jB, BB, OB)
      }
      clone() {
        const BB = new AB(this.radius, this.angle, this.direction1, this.direction2);
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
        return BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB
      }
      parse(BB) {
        super.parse(BB), QB.r.FromArrayToRef(BB.direction1, 0, this.direction1), QB.r.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class VB {
      get mesh() {
        return this._mesh
      }
      set mesh(BB) {
        this._mesh !== BB && (this._mesh = BB, BB ? (this._indices = BB.KDB(), this._positions = BB.getVerticesData(oB.h.PositionKind), this._normals = BB.getVerticesData(oB.h.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = QB.r.Zero(), this._mesh = null, this.direction1 = new QB.r(0, 1, 0), this.direction2 = new QB.r(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = BB
      }
      startDirectionFunction(BB, OB, GB, YB) {
        if (this.useMeshNormalsForDirection && this._normals) return void QB.r.TransformNormalToRef(this._storedNormal, BB, OB);
        const DB = (0, lB.RandomRange)(this.direction1.x, this.direction2.x),
          oB = (0, lB.RandomRange)(this.direction1.y, this.direction2.y),
          jB = (0, lB.RandomRange)(this.direction1.z, this.direction2.z);
        YB ? OB.zOB(DB, oB, jB) : QB.r.TransformNormalFromFloatsToRef(DB, oB, jB, BB, OB)
      }
      startPositionFunction(BB, OB, GB, YB) {
        if (!this._indices || !this._positions) return;
        const DB = 3 * (Math.random() * (this._indices.length / 3) | 0),
          oB = Math.random(),
          jB = Math.random() * (1 - oB),
          yB = 1 - oB - jB,
          JB = this._indices[DB],
          MB = this._indices[DB + 1],
          PB = this._indices[DB + 2],
          zB = QB.k.Xp[0],
          lB = QB.k.Xp[1],
          pB = QB.k.Xp[2],
          qB = QB.k.Xp[3];
        QB.r.FromArrayToRef(this._positions, 3 * JB, zB), QB.r.FromArrayToRef(this._positions, 3 * MB, lB), QB.r.FromArrayToRef(this._positions, 3 * PB, pB), qB.x = oB * zB.x + jB * lB.x + yB * pB.x, qB.y = oB * zB.y + jB * lB.y + yB * pB.y, qB.z = oB * zB.z + jB * lB.z + yB * pB.z, YB ? OB.zOB(qB.x, qB.y, qB.z) : QB.r.TransformCoordinatesFromFloatsToRef(qB.x, qB.y, qB.z, BB, OB), this.useMeshNormalsForDirection && this._normals && (QB.r.FromArrayToRef(this._normals, 3 * JB, zB), QB.r.FromArrayToRef(this._normals, 3 * MB, lB), QB.r.FromArrayToRef(this._normals, 3 * PB, pB), this._storedNormal.x = oB * zB.x + jB * lB.x + yB * pB.x, this._storedNormal.y = oB * zB.y + jB * lB.y + yB * pB.y, this._storedNormal.z = oB * zB.z + jB * lB.z + yB * pB.z)
      }
      clone() {
        const BB = new VB(this.mesh);
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB.meshId = this.mesh?.id, BB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, BB
      }
      parse(BB, OB) {
        QB.r.FromArrayToRef(BB.direction1, 0, this.direction1), QB.r.FromArrayToRef(BB.direction2, 0, this.direction2), BB.meshId && OB && (this.mesh = OB.getLastMeshById(BB.meshId)), this.useMeshNormalsForDirection = BB.useMeshNormalsForDirection
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
        const OB = this._attractors.indexOf(BB); - 1 !== OB && this._attractors.splice(OB, 1)
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
        this._useLogarithmicDepth = BB && this.JF().Lp().getCaps().fragmentDepthSupported
      }
      JF() {
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
      addEmitRateGradient(BB, OB, GB) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, BB, OB, GB), this
      }
      removeEmitRateGradient(BB) {
        return this._removeFactorGradient(this._emitRateGradients, BB), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : QB.r.Zero()
      }
      set direction1(BB) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = BB)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : QB.r.Zero()
      }
      set direction2(BB) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = BB)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : QB.r.Zero()
      }
      set minEmitBox(BB) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = BB)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : QB.r.Zero()
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
      _addFactorGradient(BB, OB, GB, DB) {
        const QB = new YB.g(OB, GB, DB);
        BB.push(QB), BB.sort(((BB, OB) => BB.gradient < OB.gradient ? -1 : BB.gradient > OB.gradient ? 1 : 0))
      }
      _removeFactorGradient(BB, OB) {
        if (!BB) return;
        let GB = 0;
        for (const YB of BB) {
          if (YB.gradient === OB) {
            BB.splice(GB, 1);
            break
          }
          GB++
        }
      }
      _removeGradientAndTexture(BB, OB, GB) {
        if (!OB) return this;
        let YB = 0;
        for (const DB of OB) {
          if (DB.gradient === BB) {
            OB.splice(YB, 1);
            break
          }
          YB++
        }
        return GB && GB.dispose(), this
      }
      constructor(BB) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = QB.r.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new QB.r(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = SB.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new QB.o(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new QB.r(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = QB.r.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new MB.g(1, 1, 1, 1), this.color2 = new MB.g(1, 1, 1, 1), this.colorDead = new MB.g(0, 0, 0, 1), this.textureMask = new MB.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new JB.e, this.id = BB, this.name = BB
      }
      createPointEmitter(BB, OB) {
        const GB = function(BB, OB) {
          const GB = new pB;
          return GB.direction1 = BB, GB.direction2 = OB, GB
        }(BB, OB);
        return this.particleEmitterType = GB, GB
      }
      createHemisphericEmitter() {
        const BB = function() {
          return new qB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createSphereEmitter() {
        const BB = function() {
          return new ZB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createDirectedSphereEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new QB.r(0, 1, 0),
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QB.r(0, 1, 0);
          return new NB(BB, OB, GB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new QB.r(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QB.r(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new RB.f(BB, OB, GB, YB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = BB, BB
      }
      createDirectedCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QB.r(0, 1, 0),
            DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QB.r(0, 1, 0);
          return new RB.c(BB, OB, GB, YB, DB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QB.r(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QB.r(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new WB(BB, OB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = BB, BB
      }
      createDirectedConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QB.r(0, 1, 0),
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QB.r(0, 1, 0);
          return new AB(BB, OB, GB, YB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QB.r(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QB.r(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createBoxEmitter(BB, OB, GB, YB) {
        const DB = new PB.e;
        return this.particleEmitterType = DB, this.direction1 = BB, this.direction2 = OB, this.minEmitBox = GB, this.maxEmitBox = YB, DB
      }
      createMeshEmitter() {
        const BB = function() {
          return new VB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = BB, BB
      }
    }
    SB.BLENDMODE_ONEONE = 0, SB.BLENDMODE_STANDARD = 1, SB.BLENDMODE_ADD = 2, SB.BLENDMODE_MULTIPLY = 3, SB.BLENDMODE_MULTIPLYADD = 4, SB.BLENDMODE_SUBTRACT = -1;
    class nB {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new MB.g(0, 0, 0, 0), this.currentColor2 = new MB.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = QB.r.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class UB {
      constructor(BB) {
        this.particleSystem = BB, this.position = QB.r.Zero(), this.direction = QB.r.Zero(), this.color = new MB.g(0, 0, 0, 0), this.colorStep = new MB.g(0, 0, 0, 0), this.initialColor = new MB.g(0, 0, 0, 0), this.colorDead = new MB.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new QB.o(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new nB, this.id = UB._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let BB = this.age,
          OB = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === OB ? (OB = 1, BB = this._properties.randomCellOffset) : BB += this._properties.randomCellOffset);
        const GB = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let YB;
        YB = this._properties.initialSpriteCellLoop ? (0, lB.Clamp)(BB * OB % this.lifeTime / this.lifeTime) : (0, lB.Clamp)(BB * OB / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + YB * GB | 0
      }
      _inheritParticleInfoToSubEmitter(BB) {
        if (BB.particleSystem.emitter.position) {
          const OB = BB.particleSystem.emitter;
          if (OB.position.IU(this.position), BB.inheritDirection) {
            const BB = QB.k.Xp[0];
            this.direction.normalizeToRef(BB), OB.setDirection(BB, 0, Math.PI / 2)
          }
        } else {
          BB.particleSystem.emitter.IU(this.position)
        }
        this.direction.scaleToRef(BB.inheritedVelocityAmount / 2, QB.k.Xp[0]), BB.particleSystem._inheritedVelocityOffset.IU(QB.k.Xp[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const BB of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(BB)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = UB._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(BB) {
        BB.position.IU(this.position), this._properties.initialDirection ? BB._properties.initialDirection ? BB._properties.initialDirection.IU(this._properties.initialDirection) : BB._properties.initialDirection = this._properties.initialDirection.clone() : BB._properties.initialDirection = null, BB.direction.IU(this.direction), this._properties.localPosition && (BB._properties.localPosition ? BB._properties.localPosition.IU(this._properties.localPosition) : BB._properties.localPosition = this._properties.localPosition.clone()), BB.color.IU(this.color), BB.colorStep.IU(this.colorStep), BB.initialColor.IU(this.initialColor), BB.colorDead.IU(this.colorDead), BB.lifeTime = this.lifeTime, BB.age = this.age, BB._properties.randomCellOffset = this._properties.randomCellOffset, BB.size = this.size, BB.scale.IU(this.scale), BB.angle = this.angle, BB.angularSpeed = this.angularSpeed, BB.particleSystem = this.particleSystem, BB.cellIndex = this.cellIndex, BB.id = this.id, BB._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (BB._properties.currentColorGradient = this._properties.currentColorGradient, BB._properties.currentColor1.IU(this._properties.currentColor1), BB._properties.currentColor2.IU(this._properties.currentColor2)), this._properties.currentSizeGradient && (BB._properties.currentSizeGradient = this._properties.currentSizeGradient, BB._properties.currentSize1 = this._properties.currentSize1, BB._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, BB._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (BB._properties.currentVelocityGradient = this._properties.currentVelocityGradient, BB._properties.currentVelocity1 = this._properties.currentVelocity1, BB._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, BB._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (BB._properties.currentDragGradient = this._properties.currentDragGradient, BB._properties.currentDrag1 = this._properties.currentDrag1, BB._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (BB._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, BB._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, BB._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (BB.remapData && this.remapData ? BB.remapData.IU(this.remapData) : BB.remapData = new QB.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.IU(this._properties.randomNoiseCoordinates1), BB._properties.randomNoiseCoordinates2.IU(this._properties.randomNoiseCoordinates2)) : (BB._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), BB._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), BB.metadata = this.metadata
      }
    }
    UB._Count = 0;
    var fB = GB(42100);
    class kB {
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
      constructor(BB, OB, GB, YB) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = OB, this.dP = BB, this._scene = GB, this._host = YB, this._activeTargets = [], OB._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            WG: this._getCorrectLoopMode()
          }, this._animation.dataType === fB.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = QB.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const BB = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, BB)
        }
        if (this.dP instanceof Array) {
          let BB = 0;
          for (const OB of this.dP) this._preparePath(OB, BB), this._getOriginalValues(BB), BB++;
          this._targetIsArray = !0
        } else this._preparePath(this.dP), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const DB = OB.getEvents();
        if (DB && DB.length > 0)
          for (const QB of DB) this._events.push(QB._clone());
        this._enableBlending = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = this._animation.targetPropertyPath;
        if (GB.length > 1) {
          let YB = BB;
          for (let BB = 0; BB < GB.length - 1; BB++) {
            const OB = GB[BB];
            if (YB = YB[OB], void 0 === YB) throw new Error(`Invalid property (${OB}) in property path (${GB.join(".")})`)
          }
          this._targetPath = GB[GB.length - 1], this._activeTargets[OB] = YB
        } else this._targetPath = GB[0], this._activeTargets[OB] = BB;
        if (void 0 === this._activeTargets[OB][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${GB.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.dP instanceof Array) {
            let BB = 0;
            for (const OB of this.dP) void 0 !== this._originalValue[BB] && this._setValue(OB, this._activeTargets[BB], this._originalValue[BB], -1, BB), BB++
          } else void 0 !== this._originalValue[0] && this._setValue(this.dP, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(BB, OB) {
        if (this._targetIsArray)
          for (let GB = 0; GB < this.dP.length; GB++) {
            const YB = this.dP[GB];
            this._setValue(YB, this._activeTargets[GB], BB, OB, GB)
          } else this._setValue(this.dP, this._directTarget, BB, OB, 0)
      }
      _getOriginalValues() {
        let BB, OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const GB = this._activeTargets[OB];
        if (fB.d.InheritOriginalValueFromActiveAnimations) {
          const BB = this._scene._activeAnimatables;
          for (let YB = 0; YB < BB.length; YB++) {
            const DB = BB[YB]._runtimeAnimations;
            for (let BB = 0; BB < DB.length; BB++) {
              const YB = DB[BB];
              if (YB !== this && YB._targetPath === this._targetPath)
                for (let BB = 0; BB < YB._activeTargets.length; BB++)
                  if (YB._activeTargets[BB] === GB && void 0 !== YB._originalValue[BB]) return void(YB._originalValue[BB] && YB._originalValue[BB].clone ? this._originalValue[OB] = YB._originalValue[BB].clone() : this._originalValue[OB] = YB._originalValue[BB])
            }
          }
        }
        BB = GB.getLocalMatrix && "_matrix" === this._targetPath ? GB.getLocalMatrix() : GB[this._targetPath], BB && BB.clone ? this._originalValue[OB] = BB.clone() : this._originalValue[OB] = BB
      }
      _registerTargetForLateAnimationBinding(BB, OB) {
        const GB = BB.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(GB), GB._lateAnimationHolders || (GB._lateAnimationHolders = {}), GB._lateAnimationHolders[BB.targetPath] || (GB._lateAnimationHolders[BB.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: OB
        }), BB.isAdditive ? (GB._lateAnimationHolders[BB.targetPath].additiveAnimations.push(BB), GB._lateAnimationHolders[BB.targetPath].totalAdditiveWeight += BB.weight) : (GB._lateAnimationHolders[BB.targetPath].animations.push(BB), GB._lateAnimationHolders[BB.targetPath].totalWeight += BB.weight)
      }
      _setValue(BB, OB, GB, YB, DB) {
        const oB = this._scene._animationWrites,
          jB = this._scene._animationWriteCount++;
        let yB = oB[jB];
        if (yB || (yB = oB[jB] = {
            runtimeAnimation: this,
            target: BB,
            weight: YB,
            additive: !1,
            blendingFactor: 1,
            pZ: !1
          }), yB.runtimeAnimation = this, yB.target = BB, yB.weight = YB, yB.additive = this.isAdditive, yB.pZ = !1, this._currentActiveTarget = OB, this._weight = YB, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const BB = OB[this._targetPath];
            BB.clone ? this._originalBlendValue = BB.clone() : this._originalBlendValue = BB
          }
          this._originalBlendValue.m ? fB.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? QB.d.DecomposeLerpToRef(this._originalBlendValue, GB, this._blendingFactor, this._currentValue) : this._currentValue = QB.d.DecomposeLerp(this._originalBlendValue, GB, this._blendingFactor) : this._currentValue ? QB.d.LerpToRef(this._originalBlendValue, GB, this._blendingFactor, this._currentValue) : this._currentValue = QB.d.Lerp(this._originalBlendValue, GB, this._blendingFactor) : this._currentValue = fB.d._UniversalLerp(this._originalBlendValue, GB, this._blendingFactor);
          const YB = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          yB.blendingFactor = this._blendingFactor, this._blendingFactor += YB
        } else yB.blendingFactor = 1, this._currentValue ? this._currentValue.IU ? this._currentValue.IU(GB) : this._currentValue = GB : this._currentValue = GB?.clone ? GB.clone() : GB; - 1 !== YB ? this._registerTargetForLateAnimationBinding(this, this._originalValue[DB]) : this._animationState.WG === fB.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[DB], OB[this._targetPath]) : OB[this._targetPath] = this._originalValue[DB] + this._currentValue : OB[this._targetPath] = this._currentValue, BB.DYB && BB.DYB(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.dP && this.dP.animationPropertiesOverride) {
          return "MorphTarget" === this.dP.getClassName?.() && null == this.dP._animationPropertiesOverride ? this._animation.WG : this.dP.animationPropertiesOverride.WG
        }
        return this._animation.WG
      }
      goToFrame(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const GB = this._animation.getKeys();
        BB < GB[0].frame ? BB = GB[0].frame : BB > GB[GB.length - 1].frame && (BB = GB[GB.length - 1].frame);
        const YB = this._events;
        if (YB.length)
          for (let QB = 0; QB < YB.length; QB++) YB[QB].onlyOnce || (YB[QB].isDone = YB[QB].frame < BB);
        this._currentFrame = BB;
        const DB = this._animation._interpolate(BB, this._animationState);
        this.setValue(DB, OB)
      }
      _prepareForSpeedRatioChange(BB) {
        const OB = this._previousElapsedTime * (this._animation.framePerSecond * BB) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - OB
      }
      animate(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const oB = this._animation,
          jB = oB.targetPropertyPath;
        if (!jB || jB.length < 1) return this._stopped = !0, !1;
        let yB, JB = !0;
        const MB = this._events;
        let PB;
        if (this._coreRuntimeAnimation) PB = GB - OB, yB = this._coreRuntimeAnimation.currentFrame, this._currentFrame = yB, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let QB;
          (OB < this._minFrame || OB > this._maxFrame) && (OB = this._minFrame), (GB < this._minFrame || GB > this._maxFrame) && (GB = this._maxFrame), PB = GB - OB;
          let jB = BB * (oB.framePerSecond * DB) / 1e3 + this._absoluteFrameOffset,
            zB = 0,
            lB = !1;
          const pB = YB && this._animationState.WG === fB.d.ANIMATIONLOOPMODE_YOYO;
          if (pB) {
            const BB = (jB - OB) / PB,
              GB = Math.sin(BB * Math.PI);
            jB = Math.abs(GB) * PB + OB;
            const YB = GB >= 0 ? 1 : -1;
            this._yoyoDirection !== YB && (lB = !0), this._yoyoDirection = YB
          }
          if (this._previousElapsedTime = BB, this._previousAbsoluteFrame = jB, !YB && GB >= OB && (jB >= PB && DB > 0 || jB <= 0 && DB < 0)) JB = !1, zB = oB.evaluate(GB);
          else if (!YB && OB >= GB && (jB <= PB && DB < 0 || jB >= 0 && DB > 0)) JB = !1, zB = oB.evaluate(OB);
          else if (this._animationState.WG !== fB.d.ANIMATIONLOOPMODE_CYCLE) {
            const BB = GB.toString() + OB.toString();
            if (!this._offsetsCache[BB]) {
              this._animationState.repeatCount = 0, this._animationState.WG = fB.d.ANIMATIONLOOPMODE_CYCLE;
              const YB = oB._interpolate(OB, this._animationState),
                DB = oB._interpolate(GB, this._animationState);
              switch (this._animationState.WG = this._getCorrectLoopMode(), oB.dataType) {
                case fB.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[BB] = DB - YB;
                  break;
                case fB.d.ANIMATIONTYPE_QUATERNION:
                case fB.d.ANIMATIONTYPE_VECTOR3:
                case fB.d.ANIMATIONTYPE_VECTOR2:
                case fB.d.ANIMATIONTYPE_SIZE:
                case fB.d.ANIMATIONTYPE_COLOR3:
                case fB.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[BB] = DB.subtract(YB)
              }
              this._highLimitsCache[BB] = DB
            }
            zB = this._highLimitsCache[BB], QB = this._offsetsCache[BB]
          }
          if (void 0 === QB) switch (oB.dataType) {
            case fB.d.ANIMATIONTYPE_FLOAT:
              QB = 0;
              break;
            case fB.d.ANIMATIONTYPE_QUATERNION:
              QB = fB.q;
              break;
            case fB.d.ANIMATIONTYPE_VECTOR3:
              QB = fB.y;
              break;
            case fB.d.ANIMATIONTYPE_VECTOR2:
              QB = fB.v;
              break;
            case fB.d.ANIMATIONTYPE_SIZE:
              QB = fB.u;
              break;
            case fB.d.ANIMATIONTYPE_COLOR3:
              QB = fB.j;
              break;
            case fB.d.ANIMATIONTYPE_COLOR4:
              QB = fB.m
          }
          const qB = this._host ? this._host.syncRoot : null;
          let ZB, NB = this._playbackFrames,
            RB = !1;
          if (qB) {
            const BB = qB.toFrame - qB.fromFrame,
              GB = qB.masterFrame,
              YB = (GB - qB.fromFrame) / BB;
            yB = OB + PB * YB;
            const DB = qB.getAnimations()[0];
            if (DB && 0 !== BB) {
              const BB = PB * YB,
                OB = DB._playbackTo - DB._playbackFrom;
              if (0 !== OB && DB._playbackFrom <= qB.fromFrame && DB._playbackTo >= qB.toFrame) {
                NB = PB * Math.round((DB._playbackFrames - (DB._currentFrame - DB._playbackFrom)) / OB) + BB
              } else RB = (GB - this._playbackSyncMasterFrame) * (DB._playbackFrames - this._playbackSyncMasterPlayed) < 0, NB = BB;
              RB = RB || DB._playbackJumped, this._playbackSyncMasterPlayed = DB._playbackFrames, this._playbackSyncMasterFrame = GB
            }
          } else yB = jB > 0 && OB > GB || jB < 0 && OB < GB ? JB && 0 !== PB ? GB + jB % PB : OB : JB && 0 !== PB ? OB + jB % PB : GB;
          if (!pB && (DB > 0 && this.currentFrame > yB || DB < 0 && this.currentFrame < yB) || pB && lB) {
            this._onLoop();
            for (let BB = 0; BB < MB.length; BB++) MB[BB].onlyOnce || (MB[BB].isDone = !1);
            this._animationState.key = DB > 0 ? 0 : oB.getKeys().length - 1
          }
          if (this._currentFrame = yB, this._animationState.repeatCount = 0 === PB ? 0 : jB / PB | 0, this._animationState.highLimitValue = zB, this._animationState.offsetValue = QB, this._playbackFrom = OB, this._playbackTo = GB, this._playbackJumped = RB, this._playbackSyncRoot = qB, qB) ZB = NB;
          else if (JB) ZB = pB ? yB === OB && jB === GB ? PB : yB - OB : jB;
          else {
            const BB = 0 !== PB ? Math.floor(this._playbackFrames / PB) : 0;
            ZB = (yB === GB ? BB + 1 : BB) * PB
          }
          this._playbackFrames = ZB, this._playbackProgress = this._animationState.WG === fB.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? PB : ZB
        }
        const zB = oB._interpolate(yB, this._animationState);
        if (this.setValue(zB, QB), MB.length)
          for (let lB = 0; lB < MB.length; lB++)
            if (PB >= 0 && yB >= MB[lB].frame && MB[lB].frame >= OB || PB < 0 && yB <= MB[lB].frame && MB[lB].frame <= OB) {
              const BB = MB[lB];
              BB.isDone || (BB.onlyOnce && (MB.splice(lB, 1), lB--), BB.isDone = !0, BB.action(yB))
            } return JB || (this._stopped = !0), JB
      }
    }
    var dB = GB(40911);
    class KB {
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
        for (let OB = 0; OB < this._runtimeAnimations.length; OB++) {
          this._runtimeAnimations[OB]._prepareForSpeedRatioChange(BB)
        }
        this._speedRatio = BB, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          jB = arguments.length > 6 ? arguments[6] : void 0,
          yB = arguments.length > 7 ? arguments[7] : void 0,
          JB = arguments.length > 8 ? arguments[8] : void 0,
          MB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          PB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = OB, this.fromFrame = GB, this.toFrame = YB, this.loopAnimation = QB, this.onAnimationEnd = jB, this.onAnimationLoop = JB, this.isAdditive = MB, this.playOrder = PB, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.fP = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new DB.b, this.onAnimationLoopObservable = new DB.b, this._scene = BB, yB && this.appendAnimations(OB, yB), this._speedRatio = oB, BB._activeAnimatables.push(this)
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
      appendAnimations(BB, OB) {
        for (let GB = 0; GB < OB.length; GB++) {
          const YB = OB[GB],
            DB = new kB(BB, YB, this._scene, this);
          DB._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(DB)
        }
      }
      getAnimationByTargetProperty(BB) {
        const OB = this._runtimeAnimations;
        for (let GB = 0; GB < OB.length; GB++)
          if (OB[GB].animation.targetProperty === BB) return OB[GB].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(BB) {
        const OB = this._runtimeAnimations;
        for (let GB = 0; GB < OB.length; GB++)
          if (OB[GB].animation.targetProperty === BB) return OB[GB];
        return null
      }
      reset() {
        const BB = this._runtimeAnimations;
        for (let OB = 0; OB < BB.length; OB++) BB[OB].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(BB) {
        const OB = this._runtimeAnimations;
        for (let GB = 0; GB < OB.length; GB++) OB[GB].animation.enableBlending = !0, OB[GB].animation.blendingSpeed = BB
      }
      disableBlending() {
        const BB = this._runtimeAnimations;
        for (let OB = 0; OB < BB.length; OB++) BB[OB].animation.enableBlending = !1
      }
      goToFrame(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this._runtimeAnimations;
        if (GB[0]) {
          const OB = GB[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? GB[0].currentFrame;
          const YB = 0 === this.speedRatio ? 0 : (BB - this._frameToSyncFromJump) / OB * 1e3 / this.speedRatio;
          this._manualJumpDelay = -YB
        }
        for (let YB = 0; YB < GB.length; YB++) GB[YB].goToFrame(BB, OB ? this._weight : -1);
        this._goToFrame = BB
      }
      get paused() {
        return this.fP
      }
      pause() {
        this.fP || (this.fP = !0)
      }
      restart() {
        this.fP = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (BB || OB) {
          const DB = this._scene._activeAnimatables.indexOf(this);
          if (DB > -1) {
            const QB = this._runtimeAnimations;
            for (let GB = QB.length - 1; GB >= 0; GB--) {
              const YB = QB[GB];
              BB && YB.animation.name != BB || (OB && !OB(YB.target) || (YB.dispose(), QB.splice(GB, 1)))
            }
            0 == QB.length && (GB || this._scene._activeAnimatables.splice(DB, 1), YB || this._raiseOnAnimationEnd())
          }
        } else {
          const BB = this._scene._activeAnimatables.indexOf(this);
          if (BB > -1) {
            GB || this._scene._activeAnimatables.splice(BB, 1);
            const OB = this._runtimeAnimations;
            for (let BB = 0; BB < OB.length; BB++) OB[BB].dispose();
            this._runtimeAnimations.length = 0, YB || this._raiseOnAnimationEnd()
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
        if (this.fP) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = BB), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = BB, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += BB - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !KB.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let OB = !1;
        const GB = this._runtimeAnimations;
        let YB;
        for (YB = 0; YB < GB.length; YB++) {
          const DB = GB[YB].animate(BB - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          OB = OB || DB
        }
        if (this.animationStarted = OB, !OB) {
          if (this.disposeOnEnd)
            for (YB = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(YB, 1), YB = 0; YB < GB.length; YB++) GB[YB].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return OB
      }
    }

    function uB(BB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return BB.originalValue;
      let OB = 1;
      const GB = QB.k.Xp[0],
        YB = QB.k.Xp[1],
        DB = QB.k.Quaternion[0];
      let oB = 0;
      const jB = BB.animations[0],
        yB = BB.originalValue;
      let JB, MB = !1;
      if (BB.totalWeight < 1) JB = 1 - BB.totalWeight, yB.decompose(YB, DB, GB);
      else {
        if (oB = 1, OB = BB.totalWeight, JB = jB.weight / OB, 1 == JB) {
          if (!BB.totalAdditiveWeight) return jB.currentValue;
          MB = !0
        }
        jB.currentValue.decompose(YB, DB, GB)
      }
      if (!MB) {
        YB.scaleInPlace(JB), GB.scaleInPlace(JB), DB.scaleInPlace(JB);
        for (let jB = oB; jB < BB.animations.length; jB++) {
          const oB = BB.animations[jB];
          if (0 === oB.weight) continue;
          JB = oB.weight / OB;
          const yB = QB.k.Xp[2],
            MB = QB.k.Xp[3],
            PB = QB.k.Quaternion[1];
          oB.currentValue.decompose(MB, PB, yB), MB.scaleAndAddToRef(JB, YB), PB.scaleAndAddToRef(QB.f.Dot(DB, PB) > 0 ? JB : -JB, DB), yB.scaleAndAddToRef(JB, GB)
        }
        DB.normalize()
      }
      for (let zB = 0; zB < BB.additiveAnimations.length; zB++) {
        const OB = BB.additiveAnimations[zB];
        if (0 === OB.weight) continue;
        const oB = QB.k.Xp[2],
          jB = QB.k.Xp[3],
          yB = QB.k.Quaternion[1];
        OB.currentValue.decompose(jB, yB, oB), jB.multiplyToRef(YB, jB), QB.r.LerpToRef(YB, jB, OB.weight, YB), DB.multiplyToRef(yB, yB), QB.f.SlerpToRef(DB, yB, OB.weight, DB), oB.scaleAndAddToRef(OB.weight, GB)
      }
      const PB = jB ? jB._animationState.workValue : QB.k.Matrix[0].clone();
      return QB.d.ComposeToRef(YB, DB, GB, PB), PB
    }

    function mB(BB, OB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return OB;
      const GB = BB.animations[0],
        YB = BB.originalValue;
      let DB = OB;
      if (0 === BB.totalWeight && BB.totalAdditiveWeight > 0) DB.IU(YB);
      else if (1 === BB.animations.length) {
        if (QB.f.SlerpToRef(YB, GB.currentValue, Math.min(1, BB.totalWeight), DB), 0 === BB.totalAdditiveWeight) return DB
      } else if (BB.animations.length > 1) {
        let GB, oB, jB = 1;
        if (BB.totalWeight < 1) {
          const OB = 1 - BB.totalWeight;
          GB = [], oB = [], GB.push(YB), oB.push(OB)
        } else {
          if (2 === BB.animations.length && (QB.f.SlerpToRef(BB.animations[0].currentValue, BB.animations[1].currentValue, BB.animations[1].weight / BB.totalWeight, OB), 0 === BB.totalAdditiveWeight)) return OB;
          GB = [], oB = [], jB = BB.totalWeight
        }
        for (let OB = 0; OB < BB.animations.length; OB++) {
          const YB = BB.animations[OB];
          GB.push(YB.currentValue), oB.push(YB.weight / jB)
        }
        let yB = 0;
        for (let BB = 0; BB < GB.length;) BB ? (yB += oB[BB], QB.f.SlerpToRef(DB, GB[BB], oB[BB] / yB, DB), BB++) : (QB.f.SlerpToRef(GB[BB], GB[BB + 1], oB[BB + 1] / (oB[BB] + oB[BB + 1]), OB), DB = OB, yB = oB[BB] + oB[BB + 1], BB += 2)
      }
      for (let oB = 0; oB < BB.additiveAnimations.length; oB++) {
        const OB = BB.additiveAnimations[oB];
        0 !== OB.weight && (DB.multiplyToRef(OB.currentValue, QB.k.Quaternion[0]), QB.f.SlerpToRef(DB, QB.k.Quaternion[0], OB.weight, DB))
      }
      return DB
    }

    function IB(BB, OB) {
      OB && (OB.prototype.copyAnimationRange = function(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new fB.d(this.name, "_matrix", BB.animations[0].framePerSecond, fB.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const QB = BB.animations[0].getRange(OB);
        if (!QB) return !1;
        const oB = QB.from,
          jB = QB.to,
          yB = BB.animations[0].getKeys(),
          JB = BB.length,
          MB = BB.getParent(),
          PB = this.getParent(),
          zB = YB && MB && JB && this.length && JB !== this.length,
          lB = zB && PB && MB ? PB.length / MB.length : 1,
          pB = YB && !PB && DB && (1 !== DB.x || 1 !== DB.y || 1 !== DB.z),
          qB = this.animations[0].getKeys();
        let ZB, NB, RB;
        for (let WB = 0, AB = yB.length; WB < AB; WB++) ZB = yB[WB], ZB.frame >= oB && ZB.frame <= jB && (YB ? (RB = ZB.value.clone(), zB ? (NB = RB.getTranslation(), RB.setTranslation(NB.scaleInPlace(lB))) : pB && DB ? (NB = RB.getTranslation(), RB.setTranslation(NB.multiplyInPlace(DB))) : RB = ZB.value) : RB = ZB.value, qB.push({
          frame: ZB.frame + GB,
          value: RB
        }));
        return this.animations[0].createRange(OB, oB + GB, jB + GB), !0
      }), BB && (BB.prototype._animate = function(BB) {
        const OB = this._animationWrites,
          GB = this._animationWriteCount;
        let YB = 0;
        for (let QB = this._animationStepWriteCount; QB < GB; QB++) {
          const BB = OB[QB];
          BB.pZ && -1 === BB.weight || (BB.pZ = !0, OB[QB] = OB[YB], OB[YB] = BB, YB++)
        }
        for (let QB = YB; QB < GB; QB++) {
          const BB = OB[QB];
          BB.runtimeAnimation = null, BB.target = null
        }
        if (this._animationWriteCount = YB, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const DB = dB.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = DB
        }
        this.deltaTime = void 0 !== BB ? BB : this.useConstantAnimationDeltaTime ? 16 : (DB - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = DB;
        const oB = this._activeAnimatables;
        if (0 === oB.length) return;
        this._animationTime += this.deltaTime;
        const jB = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let QB = 0; QB < oB.length; QB++) {
          const BB = oB[QB];
          !BB._animate(jB) && BB.disposeOnEnd && QB--
        }! function(BB) {
          if (BB._registeredForLateAnimationBindings.length) {
            for (let OB = 0; OB < BB._registeredForLateAnimationBindings.length; OB++) {
              const GB = BB._registeredForLateAnimationBindings.data[OB];
              for (const BB in GB._lateAnimationHolders) {
                const OB = GB._lateAnimationHolders[BB],
                  YB = OB.animations[0],
                  DB = OB.originalValue;
                if (void 0 === DB || null === DB) continue;
                const oB = fB.d.AllowMatrixDecomposeForInterpolation && DB.m;
                let jB = GB[BB];
                if (oB) jB = uB(OB);
                else if (void 0 !== DB.w) jB = mB(OB, jB || QB.f.Identity());
                else {
                  let BB = 0,
                    GB = 1;
                  const QB = YB && YB._animationState.WG === fB.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (OB.totalWeight < 1) jB = QB ? DB.clone ? DB.clone() : DB : YB && DB.scale ? DB.scale(1 - OB.totalWeight) : YB ? DB * (1 - OB.totalWeight) : DB.clone ? DB.clone() : DB;
                  else if (YB) {
                    GB = OB.totalWeight;
                    const oB = YB.weight / GB;
                    jB = 1 !== oB ? YB.currentValue.scale ? YB.currentValue.scale(oB) : YB.currentValue * oB : (OB.animations.length > 1 || OB.additiveAnimations.length > 0) && YB.currentValue.clone ? YB.currentValue.clone() : YB.currentValue, QB && (jB.addToRef ? jB.addToRef(DB, jB) : jB += DB), BB = 1
                  }
                  for (let YB = BB; YB < OB.animations.length; YB++) {
                    const BB = OB.animations[YB],
                      DB = BB.weight / GB;
                    DB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(DB, jB) : jB += BB.currentValue * DB)
                  }
                  for (let YB = 0; YB < OB.additiveAnimations.length; YB++) {
                    const BB = OB.additiveAnimations[YB],
                      GB = BB.weight;
                    GB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(GB, jB) : jB += BB.currentValue * GB)
                  }
                }
                GB[BB] = jB
              }
              GB._lateAnimationHolders = {}
            }
            BB._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, BB.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((BB, OB) => BB.playOrder - OB.playOrder))
      }, BB.prototype.beginWeightedAnimation = function(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 ? arguments[7] : void 0,
          yB = arguments.length > 8 ? arguments[8] : void 0,
          JB = arguments.length > 9 ? arguments[9] : void 0,
          MB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const PB = this.beginAnimation(BB, OB, GB, DB, QB, oB, jB, !1, yB, JB, MB);
        return PB.weight = YB, PB
      }, BB.prototype.beginAnimation = function(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          yB = arguments.length > 8 ? arguments[8] : void 0,
          JB = arguments.length > 9 ? arguments[9] : void 0,
          MB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (DB < 0) {
          const BB = OB;
          OB = GB, GB = BB, DB = -DB
        }
        OB > GB && (DB = -DB), jB && this.stopAnimation(BB, void 0, yB), oB || (oB = new KB(this, BB, OB, GB, YB, DB, QB, void 0, JB, MB));
        const PB = !yB || yB(BB);
        if (BB.animations && PB && oB.appendAnimations(BB, BB.animations), BB.getAnimatables) {
          const MB = BB.getAnimatables();
          for (let BB = 0; BB < MB.length; BB++) this.beginAnimation(MB[BB], OB, GB, YB, DB, QB, oB, jB, yB, JB)
        }
        return oB.reset(), oB
      }, BB.prototype.beginHierarchyAnimation = function(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 ? arguments[7] : void 0,
          yB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          JB = arguments.length > 9 ? arguments[9] : void 0,
          MB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const PB = BB.getDescendants(OB),
          zB = [];
        zB.push(this.beginAnimation(BB, GB, YB, DB, QB, oB, jB, yB, JB, void 0, MB));
        for (const lB of PB) zB.push(this.beginAnimation(lB, GB, YB, DB, QB, oB, jB, yB, JB, void 0, MB));
        return zB
      }, BB.prototype.beginDirectAnimation = function(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (QB < 0) {
          const BB = GB;
          GB = YB, YB = BB, QB = -QB
        }
        GB > YB && (QB = -QB);
        return new KB(this, BB, GB, YB, DB, QB, arguments.length > 6 ? arguments[6] : void 0, OB, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, BB.prototype.beginDirectHierarchyAnimation = function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        let JB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const MB = BB.getDescendants(OB),
          PB = [];
        PB.push(this.beginDirectAnimation(BB, GB, YB, DB, QB, oB, jB, yB, JB));
        for (const zB of MB) PB.push(this.beginDirectAnimation(zB, GB, YB, DB, QB, oB, jB, yB, JB));
        return PB
      }, BB.prototype.getAnimatableByTarget = function(BB) {
        for (let OB = 0; OB < this._activeAnimatables.length; OB++)
          if (this._activeAnimatables[OB].target === BB) return this._activeAnimatables[OB];
        return null
      }, BB.prototype.getAllAnimatablesByTarget = function(BB) {
        const OB = [];
        for (let GB = 0; GB < this._activeAnimatables.length; GB++) this._activeAnimatables[GB].target === BB && OB.push(this._activeAnimatables[GB]);
        return OB
      }, BB.prototype.stopAnimation = function(BB, OB, GB) {
        const YB = this.getAllAnimatablesByTarget(BB);
        for (const DB of YB) DB.stop(OB, GB)
      }, BB.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let BB = 0; BB < this._activeAnimatables.length; BB++) this._activeAnimatables[BB].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const BB of this.animationGroups) BB.stop()
      })
    }
    KB.ProcessPausedAnimatables = !1;
    var FB, iB = GB(37785),
      LB = GB(41220),
      gB = GB(40890);
    class rB extends LB.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(BB) {
        (BB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.IU(BB), this._markAsDirtyAndDecompose())
      }
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(BB, OB.JF(), !1), this.name = BB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = OB, this._localMatrix = YB?.clone() ?? QB.d.Identity(), this._restMatrix = DB ?? this._localMatrix.clone(), this._bindMatrix = oB ?? this._localMatrix.clone(), this._index = jB, this._absoluteMatrix = new QB.d, this._absoluteBindMatrix = new QB.d, this._absoluteInverseBindMatrix = new QB.d, this._finalMatrix = new QB.d, OB.bones.push(this), this.setParent(GB, !1), this._updateAbsoluteBindMatrices()
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
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== BB) {
          if (this.parent) {
            const BB = this.parent.children.indexOf(this); - 1 !== BB && this.parent.children.splice(BB, 1)
          }
          this._parentNode = BB, this.parent && this.parent.children.push(this), OB && this._updateAbsoluteBindMatrices(), this.DYB()
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
        this._restMatrix.IU(BB)
      }
      setRestPose(BB) {
        this.setRestMatrix(BB)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(BB) {
        this.TBB(BB)
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
          const BB = QB.k.Xp[0],
            OB = QB.k.Quaternion[0],
            GB = QB.k.Xp[1];
          this.getRestMatrix().decompose(BB, OB, GB), this._linkedTransformNode.position.IU(GB), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? QB.f.Identity(), this._linkedTransformNode.rotationQuaternion.IU(OB), this._linkedTransformNode.SP.IU(BB)
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
        return this._decompose(), this.NGB
      }
      set position(BB) {
        this._decompose(), this.NGB.IU(BB), this._markAsDirtyAndCompose()
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
      get SP() {
        return this.getScale()
      }
      set SP(BB) {
        this.setScale(BB)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = QB.r.Zero(), this._localRotation = QB.f.Zero(), this.NGB = QB.r.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.NGB))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, QB.d.ComposeToRef(this._localScaling, this._localRotation, this.NGB, this._localMatrix)) : this._needToCompose = !1)
      }
      TBB(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.IU(BB), OB && this._updateAbsoluteBindMatrices(), GB ? this._matrix = BB : this.DYB()
      }
      _updateAbsoluteBindMatrices(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (BB || (BB = this._bindMatrix), this.parent ? BB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.IU(BB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), OB)
          for (let GB = 0; GB < this.children.length; GB++) this.children[GB]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      DYB() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.DYB(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.DYB(), this._needToDecompose = !0
      }
      _updatePosition(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const DB = this.getLocalMatrix();
        if (0 == OB) YB ? (DB.addAtIndex(12, BB.x), DB.addAtIndex(13, BB.y), DB.addAtIndex(14, BB.z)) : DB.setTranslationFromFloats(BB.x, BB.y, BB.z);
        else {
          const OB = rB._TmpMats[0],
            oB = rB._TmpVecs[0];
          this.parent ? (OB.IU(this.parent.getAbsoluteMatrix()), GB && OB.multiplyToRef(GB.getWorldMatrix(), OB)) : QB.d.IdentityToRef(OB), YB && OB.setTranslationFromFloats(0, 0, 0), OB.invert(), QB.r.TransformCoordinatesToRef(BB, OB, oB), YB ? (DB.addAtIndex(12, oB.x), DB.addAtIndex(13, oB.y), DB.addAtIndex(14, oB.z)) : DB.setTranslationFromFloats(oB.x, oB.y, oB.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, OB, GB, !0)
      }
      setPosition(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, OB, GB, !1)
      }
      setAbsolutePosition(BB, OB) {
        this.setPosition(BB, 1, OB)
      }
      scale(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const DB = this.getLocalMatrix(),
          oB = rB._TmpMats[0];
        QB.d.ScalingToRef(BB, OB, GB, oB), oB.multiplyToRef(DB, DB), oB.invert();
        for (const QB of this.children) {
          const YB = QB.getLocalMatrix();
          YB.multiplyToRef(oB, YB), YB.multiplyAtIndex(12, BB), YB.multiplyAtIndex(13, OB), YB.multiplyAtIndex(14, GB), QB._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), YB)
          for (const QB of this.children) QB.scale(BB, OB, GB, YB)
      }
      setScale(BB) {
        this._decompose(), this._localScaling.IU(BB), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(BB) {
        this._decompose(), BB.IU(this._localScaling)
      }
      setYawPitchRoll(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === YB) {
          const oB = rB._TmpQuat;
          return QB.f.RotationYawPitchRollToRef(BB, OB, GB, oB), void this.setRotationQuaternion(oB, YB, DB)
        }
        const oB = rB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(oB, DB)) return;
        const jB = rB._TmpMats[1];
        QB.d.RotationYawPitchRollToRef(BB, OB, GB, jB), oB.multiplyToRef(jB, jB), this._rotateWithMatrix(jB, YB, DB)
      }
      rotate(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        const DB = rB._TmpMats[0];
        DB.setTranslationFromFloats(0, 0, 0), QB.d.RotationAxisToRef(BB, OB, DB), this._rotateWithMatrix(DB, GB, YB)
      }
      setAxisAngle(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === GB) {
          const DB = rB._TmpQuat;
          return QB.f.RotationAxisToRef(BB, OB, DB), void this.setRotationQuaternion(DB, GB, YB)
        }
        const DB = rB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(DB, YB)) return;
        const oB = rB._TmpMats[1];
        QB.d.RotationAxisToRef(BB, OB, oB), DB.multiplyToRef(oB, oB), this._rotateWithMatrix(oB, GB, YB)
      }
      setRotation(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(BB.y, BB.x, BB.z, OB, GB)
      }
      setRotationQuaternion(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === OB) return this._decompose(), this._localRotation.IU(BB), void this._markAsDirtyAndCompose();
        const YB = rB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(YB, GB)) return;
        const DB = rB._TmpMats[1];
        QB.d.FromQuaternionToRef(BB, DB), YB.multiplyToRef(DB, DB), this._rotateWithMatrix(DB, OB, GB)
      }
      setRotationMatrix(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === OB) {
          const YB = rB._TmpQuat;
          return QB.f.FromRotationMatrixToRef(BB, YB), void this.setRotationQuaternion(YB, OB, GB)
        }
        const YB = rB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(YB, GB)) return;
        const DB = rB._TmpMats[1];
        DB.IU(BB), YB.multiplyToRef(BB, DB), this._rotateWithMatrix(DB, OB, GB)
      }
      _rotateWithMatrix(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = this.getLocalMatrix(),
          DB = YB.m[12],
          QB = YB.m[13],
          oB = YB.m[14],
          jB = this.getParent(),
          yB = rB._TmpMats[3],
          JB = rB._TmpMats[4];
        jB && 1 == OB ? (GB ? (yB.IU(GB.getWorldMatrix()), jB.getAbsoluteMatrix().multiplyToRef(yB, yB)) : yB.IU(jB.getAbsoluteMatrix()), JB.IU(yB), JB.invert(), YB.multiplyToRef(yB, YB), YB.multiplyToRef(BB, YB), YB.multiplyToRef(JB, YB)) : 1 == OB && GB ? (yB.IU(GB.getWorldMatrix()), JB.IU(yB), JB.invert(), YB.multiplyToRef(yB, YB), YB.multiplyToRef(BB, YB), YB.multiplyToRef(JB, YB)) : YB.multiplyToRef(BB, YB), YB.setTranslationFromFloats(DB, QB, oB), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(BB, OB) {
        const GB = rB._TmpMats[2];
        return BB.IU(this.getAbsoluteMatrix()), OB ? (BB.multiplyToRef(OB.getWorldMatrix(), BB), QB.d.ScalingToRef(OB.SP.x, OB.SP.y, OB.SP.z, GB)) : QB.d.IdentityToRef(GB), BB.invert(), !isNaN(BB.m[0]) && (GB.multiplyAtIndex(0, this._scalingDeterminant), BB.multiplyToRef(GB, BB), !0)
      }
      pR() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = QB.r.Zero();
        return this.getPositionToRef(BB, OB, GB), GB
      }
      getPositionToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          OB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const BB = this.getLocalMatrix();
          OB.x = BB.m[12], OB.y = BB.m[13], OB.z = BB.m[14]
        } else {
          const GB = rB._TmpMats[0].IU(this.getAbsoluteMatrix());
          BB && GB.multiplyToRef(BB.getWorldMatrix(), GB), OB.x = GB.m[12], OB.y = GB.m[13], OB.z = GB.m[14]
        }
      }
      getAbsolutePosition() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const OB = QB.r.Zero();
        return this.getPositionToRef(1, BB, OB), OB
      }
      getAbsolutePositionToRef(BB, OB) {
        this.getPositionToRef(1, BB, OB)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.IU(this._localMatrix);
          const BB = this._skeleton.getPoseMatrix();
          BB && this._absoluteMatrix.multiplyToRef(BB, this._absoluteMatrix)
        }
        const BB = this.children,
          OB = BB.length;
        for (let GB = 0; GB < OB; GB++) BB[GB].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      B_(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = QB.r.Zero();
        return this.getDirectionToRef(BB, OB, GB), GB
      }
      getDirectionToRef(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = rB._TmpMats[0].IU(this.getAbsoluteMatrix());
        OB && YB.multiplyToRef(OB.getWorldMatrix(), YB), QB.r.TransformNormalToRef(BB, YB, GB), GB.normalize()
      }
      getRotation() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = QB.r.Zero();
        return this.getRotationToRef(BB, OB, GB), GB
      }
      getRotationToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = rB._TmpQuat;
        this.getRotationQuaternionToRef(BB, OB, YB), YB.toEulerAnglesToRef(GB)
      }
      getRotationQuaternion() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = QB.f.Identity();
        return this.getRotationQuaternionToRef(BB, OB, GB), GB
      }
      getRotationQuaternionToRef() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), OB.IU(this._localRotation);
        else {
          const GB = rB._TmpMats[0],
            YB = this.getAbsoluteMatrix();
          BB ? YB.multiplyToRef(BB.getWorldMatrix(), GB) : GB.IU(YB), GB.multiplyAtIndex(0, this._scalingDeterminant), GB.multiplyAtIndex(1, this._scalingDeterminant), GB.multiplyAtIndex(2, this._scalingDeterminant), GB.decompose(void 0, OB, void 0)
        }
      }
      getRotationMatrix() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 ? arguments[1] : void 0;
        const GB = QB.d.Identity();
        return this.getRotationMatrixToRef(BB, OB, GB), GB
      }
      getRotationMatrixToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          OB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(OB);
        else {
          const GB = rB._TmpMats[0],
            YB = this.getAbsoluteMatrix();
          BB ? YB.multiplyToRef(BB.getWorldMatrix(), GB) : GB.IU(YB), GB.multiplyAtIndex(0, this._scalingDeterminant), GB.multiplyAtIndex(1, this._scalingDeterminant), GB.multiplyAtIndex(2, this._scalingDeterminant), GB.getRotationMatrixToRef(OB)
        }
      }
      getAbsolutePositionFromLocal(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = QB.r.Zero();
        return this.getAbsolutePositionFromLocalToRef(BB, OB, GB), GB
      }
      getAbsolutePositionFromLocalToRef(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = rB._TmpMats[0].IU(this.getAbsoluteMatrix());
        OB && YB.multiplyToRef(OB.getWorldMatrix(), YB), QB.r.TransformCoordinatesToRef(BB, YB, GB)
      }
      getLocalPositionFromAbsolute(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = QB.r.Zero();
        return this.getLocalPositionFromAbsoluteToRef(BB, OB, GB), GB
      }
      getLocalPositionFromAbsoluteToRef(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = rB._TmpMats[0].IU(this.getAbsoluteMatrix());
        OB && YB.multiplyToRef(OB.getWorldMatrix(), YB), YB.invert(), QB.r.TransformCoordinatesToRef(BB, YB, GB)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const BB = this._skeleton.bones.indexOf(this);
        if (-1 !== BB && this._skeleton.bones.splice(BB, 1), this._parentNode && this._parentNode.children) {
          const BB = this._parentNode.children,
            OB = BB.indexOf(this); - 1 !== OB && BB.splice(OB, 1)
        }
        super.dispose()
      }
    }
    rB._TmpVecs = (0, iB.e)(2, QB.r.Zero), rB._TmpQuat = QB.f.Identity(), rB._TmpMats = (0, iB.e)(5, QB.d.Identity), (FB = rB.prototype).copyAnimationRange ?? (FB.copyAnimationRange = (0, gB.g)("Bone", "copyAnimationRange"));
    var XB = GB(41091);
    let wB = !1;
    var EB = GB(40969),
      cB = GB(41323),
      hB = GB(41333),
      aB = GB(41325),
      eB = GB(41129);

    function TB(BB, OB) {
      const GB = (0, lB.RandomRange)(0, 1);
      MB.g.LerpToRef(OB.color1, OB.color2, GB, BB.color)
    }

    function bB(BB, OB) {
      OB.colorDead.subtractToRef(BB.color, OB._colorDiff), OB._colorDiff.scaleToRef(1 / BB.lifeTime, BB.colorStep)
    }

    function CB(BB, OB) {
      BB._properties.currentColorGradient = OB._colorGradients[0], BB._properties.currentColorGradient.getColorToRef(BB.color), BB._properties.currentColor1.IU(BB.color), OB._colorGradients.length > 1 ? OB._colorGradients[1].getColorToRef(BB._properties.currentColor2) : BB._properties.currentColor2.IU(BB.color)
    }

    function HB(BB, OB) {
      const GB = OB._colorGradients;
      YB.h.GetCurrentGradient(OB._ratio, GB, ((OB, GB, YB) => {
        OB !== BB._properties.currentColorGradient && (BB._properties.currentColor1.IU(BB._properties.currentColor2), GB.getColorToRef(BB._properties.currentColor2), BB._properties.currentColorGradient = OB), MB.g.LerpToRef(BB._properties.currentColor1, BB._properties.currentColor2, YB, BB.color), BB.color.a < 0 && (BB.color.a = 0)
      }))
    }

    function vB(BB, OB) {
      BB.colorStep.scaleToRef(OB._scaledUpdateSpeed, OB._scaledColorStep), BB.color.addInPlace(OB._scaledColorStep), BB.color.a < 0 && (BB.color.a = 0)
    }

    function sB(BB, OB) {
      YB.h.GetCurrentGradient(OB._ratio, OB._angularSpeedGradients, ((OB, GB, YB) => {
        OB !== BB._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeed1 = BB._properties.currentAngularSpeed2, BB._properties.currentAngularSpeed2 = GB.getFactor(), BB._properties.currentAngularSpeedGradient = OB), BB.angularSpeed = (0, lB.Lerp)(BB._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2, YB)
      }))
    }

    function xB(BB, OB) {
      BB.angle += BB.angularSpeed * OB._scaledUpdateSpeed
    }

    function tB(BB, OB) {
      OB.particleEmitterType.startDirectionFunction(OB._emitterWorldMatrix, BB.direction, BB, OB.isLocal, OB._emitterInverseWorldMatrix)
    }

    function BO(BB, OB) {
      OB.startDirectionFunction(OB._emitterWorldMatrix, BB.direction, BB, OB.isLocal)
    }

    function OO(BB, OB) {
      BB._properties.currentVelocityGradient = OB._velocityGradients[0], BB._properties.currentVelocity1 = BB._properties.currentVelocityGradient.getFactor(), OB._velocityGradients.length > 1 ? BB._properties.currentVelocity2 = OB._velocityGradients[1].getFactor() : BB._properties.currentVelocity2 = BB._properties.currentVelocity1
    }

    function GO(BB, OB) {
      BB._properties.currentLimitVelocityGradient = OB._limitVelocityGradients[0], BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocityGradient.getFactor(), OB._limitVelocityGradients.length > 1 ? BB._properties.currentLimitVelocity2 = OB._limitVelocityGradients[1].getFactor() : BB._properties.currentLimitVelocity2 = BB._properties.currentLimitVelocity1
    }

    function YO(BB, OB) {
      YB.h.GetCurrentGradient(OB._ratio, OB._velocityGradients, ((OB, GB, YB) => {
        OB !== BB._properties.currentVelocityGradient && (BB._properties.currentVelocity1 = BB._properties.currentVelocity2, BB._properties.currentVelocity2 = GB.getFactor(), BB._properties.currentVelocityGradient = OB), BB._properties.directionScale *= (0, lB.Lerp)(BB._properties.currentVelocity1, BB._properties.currentVelocity2, YB)
      }))
    }

    function DO(BB, OB) {
      YB.h.GetCurrentGradient(OB._ratio, OB._limitVelocityGradients, ((GB, YB, DB) => {
        GB !== BB._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocity2, BB._properties.currentLimitVelocity2 = YB.getFactor(), BB._properties.currentLimitVelocityGradient = GB);
        const QB = (0, lB.Lerp)(BB._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2, DB);
        BB.direction.length() > QB && BB.direction.scaleInPlace(OB.limitVelocityDamping)
      }))
    }

    function QO(BB) {
      BB.direction.scaleToRef(BB._properties.directionScale, BB._properties.scaledDirection)
    }

    function oO(BB, OB) {
      OB.particleEmitterType.startPositionFunction(OB._emitterWorldMatrix, BB.position, BB, OB.isLocal)
    }

    function jO(BB, OB) {
      OB.startPositionFunction(OB._emitterWorldMatrix, BB.position, BB, OB.isLocal)
    }

    function yO(BB, OB) {
      BB._properties.localPosition ? BB._properties.localPosition.IU(BB.position) : BB._properties.localPosition = BB.position.clone(), QB.r.TransformCoordinatesToRef(BB._properties.localPosition, OB._emitterWorldMatrix, BB.position)
    }

    function JO(BB, OB) {
      OB.isLocal && BB._properties.localPosition ? (BB._properties.localPosition.addInPlace(BB._properties.scaledDirection), QB.r.TransformCoordinatesToRef(BB._properties.localPosition, OB._emitterWorldMatrix, BB.position)) : BB.position.addInPlace(BB._properties.scaledDirection)
    }

    function MO(BB, OB) {
      BB._properties.currentDragGradient = OB._dragGradients[0], BB._properties.currentDrag1 = BB._properties.currentDragGradient.getFactor(), OB._dragGradients.length > 1 ? BB._properties.currentDrag2 = OB._dragGradients[1].getFactor() : BB._properties.currentDrag2 = BB._properties.currentDrag1
    }

    function PO(BB, OB) {
      YB.h.GetCurrentGradient(OB._ratio, OB._dragGradients, ((OB, GB, YB) => {
        OB !== BB._properties.currentDragGradient && (BB._properties.currentDrag1 = BB._properties.currentDrag2, BB._properties.currentDrag2 = GB.getFactor(), BB._properties.currentDragGradient = OB);
        const DB = (0, lB.Lerp)(BB._properties.currentDrag1, BB._properties.currentDrag2, YB);
        BB._properties.scaledDirection.scaleInPlace(1 - DB)
      }))
    }

    function zO(BB, OB) {
      BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.zOB(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2.zOB(Math.random(), Math.random(), Math.random())) : (BB._properties.randomNoiseCoordinates1 = new QB.r(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2 = new QB.r(Math.random(), Math.random(), Math.random()))
    }

    function lO(BB, OB) {
      const GB = OB._noiseTextureData,
        YB = OB._noiseTextureSize;
      if (GB && YB && BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2) {
        const DB = OB._fetchR(BB._properties.randomNoiseCoordinates1.x, BB._properties.randomNoiseCoordinates1.y, YB.width, YB.height, GB),
          oB = OB._fetchR(BB._properties.randomNoiseCoordinates1.z, BB._properties.randomNoiseCoordinates2.x, YB.width, YB.height, GB),
          jB = OB._fetchR(BB._properties.randomNoiseCoordinates2.y, BB._properties.randomNoiseCoordinates2.z, YB.width, YB.height, GB),
          yB = QB.k.Xp[0],
          JB = QB.k.Xp[1];
        yB.zOB((2 * DB - 1) * OB.noiseStrength.x, (2 * oB - 1) * OB.noiseStrength.y, (2 * jB - 1) * OB.noiseStrength.z), yB.scaleToRef(OB._tempScaledUpdateSpeed, JB), BB.direction.addInPlace(JB)
      }
    }

    function pO(BB, OB) {
      OB.gravity.scaleToRef(OB._tempScaledUpdateSpeed, OB._scaledGravity), BB.direction.addInPlace(OB._scaledGravity)
    }

    function qO(BB, OB) {
      BB.size = (0, lB.RandomRange)(OB.minSize, OB.maxSize), BB.scale.zOB((0, lB.RandomRange)(OB.minScaleX, OB.maxScaleX), (0, lB.RandomRange)(OB.minScaleY, OB.maxScaleY))
    }

    function ZO(BB, OB) {
      BB._properties.currentSizeGradient = OB._sizeGradients[0], BB._properties.currentSize1 = BB._properties.currentSizeGradient.getFactor(), BB.size = BB._properties.currentSize1, OB._sizeGradients.length > 1 ? BB._properties.currentSize2 = OB._sizeGradients[1].getFactor() : BB._properties.currentSize2 = BB._properties.currentSize1, BB.scale.zOB((0, lB.RandomRange)(OB.minScaleX, OB.maxScaleX), (0, lB.RandomRange)(OB.minScaleY, OB.maxScaleY))
    }

    function NO(BB, OB) {
      const GB = OB._actualFrame / OB.targetStopDuration;
      YB.h.GetCurrentGradient(GB, OB._startSizeGradients, ((GB, YB, DB) => {
        GB !== OB._currentStartSizeGradient && (OB._currentStartSize1 = OB._currentStartSize2, OB._currentStartSize2 = YB.getFactor(), OB._currentStartSizeGradient = GB);
        const QB = (0, lB.Lerp)(OB._currentStartSize1, OB._currentStartSize2, DB);
        BB.scale.scaleInPlace(QB)
      }))
    }

    function RO(BB, OB) {
      YB.h.GetCurrentGradient(OB._ratio, OB._sizeGradients, ((OB, GB, YB) => {
        OB !== BB._properties.currentSizeGradient && (BB._properties.currentSize1 = BB._properties.currentSize2, BB._properties.currentSize2 = GB.getFactor(), BB._properties.currentSizeGradient = OB), BB.size = (0, lB.Lerp)(BB._properties.currentSize1, BB._properties.currentSize2, YB)
      }))
    }

    function WO(BB, OB) {
      BB.remapData = new QB.t(0, 1, 0, 1)
    }

    function AO(BB, OB) {
      OB._colorRemapGradients && OB._colorRemapGradients.length > 0 && YB.h.GetCurrentGradient(OB._ratio, OB._colorRemapGradients, ((OB, GB, YB) => {
        const DB = (0, lB.Lerp)(OB.factor1, GB.factor1, YB),
          QB = (0, lB.Lerp)(OB.factor2, GB.factor2, YB);
        BB.remapData.x = DB, BB.remapData.y = QB - DB
      })), OB._alphaRemapGradients && OB._alphaRemapGradients.length > 0 && YB.h.GetCurrentGradient(OB._ratio, OB._alphaRemapGradients, ((OB, GB, YB) => {
        const DB = (0, lB.Lerp)(OB.factor1, GB.factor1, YB),
          QB = (0, lB.Lerp)(OB.factor2, GB.factor2, YB);
        BB.remapData.z = DB, BB.remapData.w = QB - DB
      }))
    }

    function VO(BB, OB) {
      const GB = (0, lB.Clamp)(OB._actualFrame / OB.targetStopDuration);
      YB.h.GetCurrentGradient(GB, OB._lifeTimeGradients, ((OB, YB) => {
        const DB = OB,
          QB = YB,
          oB = DB.getFactor(),
          jB = QB.getFactor(),
          yB = (GB - DB.gradient) / (QB.gradient - DB.gradient);
        BB.lifeTime = (0, lB.Lerp)(oB, jB, yB)
      })), OB._emitPower = (0, lB.RandomRange)(OB.minEmitPower, OB.maxEmitPower)
    }

    function SO(BB, OB) {
      BB.lifeTime = (0, lB.RandomRange)(OB.minLifeTime, OB.maxLifeTime), OB._emitPower = (0, lB.RandomRange)(OB.minEmitPower, OB.maxEmitPower)
    }

    function nO(BB, OB) {
      0 === OB._emitPower ? (BB._properties.initialDirection ? BB._properties.initialDirection.IU(BB.direction) : BB._properties.initialDirection = BB.direction.clone(), BB.direction.set(0, 0, 0)) : (BB._properties.initialDirection = null, BB.direction.scaleInPlace(OB._emitPower)), BB.direction.addInPlace(OB._inheritedVelocityOffset)
    }

    function UO(BB, OB) {
      BB.angularSpeed = (0, lB.RandomRange)(OB.minAngularSpeed, OB.maxAngularSpeed), BB.angle = (0, lB.RandomRange)(OB.minInitialRotation, OB.maxInitialRotation)
    }

    function fO(BB, OB) {
      BB._properties.currentAngularSpeedGradient = OB._angularSpeedGradients[0], BB.angularSpeed = BB._properties.currentAngularSpeedGradient.getFactor(), BB._properties.currentAngularSpeed1 = BB.angularSpeed, OB._angularSpeedGradients.length > 1 ? BB._properties.currentAngularSpeed2 = OB._angularSpeedGradients[1].getFactor() : BB._properties.currentAngularSpeed2 = BB._properties.currentAngularSpeed1, BB.angle = (0, lB.RandomRange)(OB.minInitialRotation, OB.maxInitialRotation)
    }

    function kO(BB, OB) {
      BB._properties.initialStartSpriteCellId = OB.startSpriteCellID, BB._properties.initialEndSpriteCellId = OB.endSpriteCellID, BB._properties.initialSpriteCellLoop = OB.spriteCellLoop
    }

    function dO(BB, OB) {
      BB.previousItem = OB.previousItem, BB.nextItem = OB, OB.previousItem && (OB.previousItem.nextItem = BB), OB.previousItem = BB
    }

    function KO(BB, OB) {
      BB.previousItem = OB, BB.nextItem = OB.nextItem, OB.nextItem && (OB.nextItem.previousItem = BB), OB.nextItem = BB
    }

    function uO(BB) {
      BB.previousItem && (BB.previousItem.nextItem = BB.nextItem), BB.nextItem && (BB.nextItem.previousItem = BB.previousItem)
    }
    var mO = GB(41381);
    class IO extends SB {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(BB) {
        this._startDirectionFunction !== BB && (this._startDirectionFunction = BB, this._directionCreation.process = BB ? BO : tB)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(BB) {
        this._startPositionFunction !== BB && (this._startPositionFunction = BB, this._positionCreation.process = BB ? jO : oO)
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
      }
      get lV() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(BB) {
        this._useRampGradients !== BB && (this._useRampGradients = BB, this._resetEffect(), BB ? (this._rampCreation = {
          process: WO,
          previousItem: null,
          nextItem: null
        }, KO(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: AO,
          previousItem: null,
          nextItem: null
        }, KO(this._remapGradientProcessing, this._gravityProcessing))) : (uO(this._rampCreation), uO(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(BB) {
        this._isLocal !== BB && (this._isLocal = BB, BB ? (this._isLocalCreation = {
          process: yO,
          previousItem: null,
          nextItem: null
        }, KO(this._isLocalCreation, this._positionCreation)) : uO(this._isLocalCreation))
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
          process: kO,
          previousItem: null,
          nextItem: null
        }, KO(this._sheetCreation, this._colorDeadCreation)) : uO(this._sheetCreation), this._reset())
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[OB] = new cB.d(this._engine), this._customWrappers[OB].effect = BB, this._customWrappers[OB].drawContext && (this._customWrappers[OB].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new DB.b), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = BB, !BB) return uO(this._noiseCreation), void uO(this._noiseProcessing);
          this._noiseCreation = {
            process: zO,
            previousItem: null,
            nextItem: null
          }, KO(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: lO,
            previousItem: null,
            nextItem: null
          }, KO(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        wB || (wB = !0, IB(XB.e, rB)), (0, EB.e)(), super(BB), this._emitterInverseWorldMatrix = QB.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new QB.r, this.lF = new DB.b, this.onStoppedObservable = new DB.b, this.onStartedObservable = new DB.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new MB.g(0, 0, 0, 0), this._colorDiff = new MB.g(0, 0, 0, 0), this._scaledGravity = QB.r.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = BB => {}, this.recycleParticle = BB => {
          const OB = this._particles.pop();
          OB !== BB && OB.copyTo(BB), OB.metadata = null, this._stockParticles.push(OB)
        }, this._createParticle = () => {
          let BB;
          return 0 !== this._stockParticles.length ? (BB = this._stockParticles.pop(), BB._reset()) : BB = new UB(this), this._prepareParticle(BB), BB
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = OB, this._epsilon = jB, GB && "Scene" !== GB.getClassName() ? (this._engine = GB, this.defaultProjectionMatrix = QB.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = GB || yB.b.LastCreatedScene, this._engine = this._scene.Lp(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.rW.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: SO,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: oO,
          previousItem: null,
          nextItem: null
        }, KO(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: tB,
          previousItem: null,
          nextItem: null
        }, KO(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: nO,
          previousItem: null,
          nextItem: null
        }, KO(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: qO,
          previousItem: null,
          nextItem: null
        }, KO(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: UO,
          previousItem: null,
          nextItem: null
        }, KO(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: TB,
          previousItem: null,
          nextItem: null
        }, KO(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: bB,
          previousItem: null,
          nextItem: null
        }, KO(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, JB || (this._colorProcessing = {
          process: vB,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: xB,
          previousItem: null,
          nextItem: null
        }, KO(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: QO,
          previousItem: null,
          nextItem: null
        }, KO(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: JO,
          previousItem: null,
          nextItem: null
        }, KO(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: pO,
          previousItem: null,
          nextItem: null
        }, KO(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = oB, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new cB.d(this._engine)
        }, this._customWrappers[0].effect = YB, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new PB.e, this.updateFunction = BB => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((BB => {
            this._noiseTextureData = BB
          })));
          const OB = BB === this._particles;
          for (let GB = 0; GB < BB.length; GB++) {
            const YB = BB[GB];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const DB = YB.age;
            if (YB.age += this._tempScaledUpdateSpeed, YB.age > YB.lifeTime) {
              const BB = YB.age - DB,
                OB = YB.lifeTime - DB;
              this._tempScaledUpdateSpeed = OB * this._tempScaledUpdateSpeed / BB, YB.age = YB.lifeTime
            }
            this._ratio = YB.age / YB.lifeTime, YB._properties.directionScale = this._tempScaledUpdateSpeed;
            let QB = this._updateQueueStart;
            for (; QB;) QB.process(YB, this), QB = QB.nextItem;
            if (this._isAnimationSheetEnabled && !JB && YB.updateCellIndex(), YB._inheritParticleInfoToSubEmitters(), YB.age >= YB.lifeTime) {
              if (this._emitFromParticle(YB), YB._properties.attachedSubEmitters) {
                for (const BB of YB._properties.attachedSubEmitters) BB.particleSystem.disposeOnStop = !0, BB.particleSystem.stop();
                YB._properties.attachedSubEmitters = null
              }
              this.recycleParticle(YB), OB && GB--
            } else;
          }
        }
      }
      serialize(BB) {
        throw new Error("Method not implemented.")
      }
      clone(BB, OB) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = VO : this._lifeTimeCreation.process = SO
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: NO,
          previousItem: null,
          nextItem: null
        }, KO(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (uO(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(BB) {
        this.targetStopDuration !== BB && (this._targetStopDuration = BB, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(BB, OB, GB) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, BB, OB, GB), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(BB) {
        return this._removeFactorGradient(this._lifeTimeGradients, BB), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(BB, OB, GB) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = ZO, this._sizeGradientProcessing = {
          process: RO,
          previousItem: null,
          nextItem: null
        }, dO(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, BB, OB, GB), this
      }
      removeSizeGradient(BB) {
        return this._removeFactorGradient(this._sizeGradients, BB), 0 === this._sizeGradients?.length && (uO(this._sizeGradientProcessing), this._sizeCreation.process = qO), this
      }
      addColorRemapGradient(BB, OB, GB) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, BB, OB, GB), this
      }
      removeColorRemapGradient(BB) {
        return this._removeFactorGradient(this._colorRemapGradients, BB), this
      }
      addAlphaRemapGradient(BB, OB, GB) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, BB, OB, GB), this
      }
      removeAlphaRemapGradient(BB) {
        return this._removeFactorGradient(this._alphaRemapGradients, BB), this
      }
      addAngularSpeedGradient(BB, OB, GB) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = fO, this._angularSpeedGradientProcessing = {
          process: sB,
          previousItem: null,
          nextItem: null
        }, dO(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, BB, OB, GB), this
      }
      removeAngularSpeedGradient(BB) {
        return this._removeFactorGradient(this._angularSpeedGradients, BB), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = UO, uO(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(BB, OB, GB) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: OO,
          previousItem: null,
          nextItem: null
        }, KO(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: YO,
          previousItem: null,
          nextItem: null
        }, dO(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, BB, OB, GB), this
      }
      removeVelocityGradient(BB) {
        return this._removeFactorGradient(this._velocityGradients, BB), 0 === this._velocityGradients?.length && (uO(this._velocityCreation), uO(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(BB, OB, GB) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: GO,
          previousItem: null,
          nextItem: null
        }, KO(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: DO,
          previousItem: null,
          nextItem: null
        }, KO(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, BB, OB, GB), this
      }
      removeLimitVelocityGradient(BB) {
        return this._removeFactorGradient(this._limitVelocityGradients, BB), 0 === this._limitVelocityGradients?.length && (uO(this._limitVelocityCreation), uO(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(BB, OB, GB) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: MO,
          previousItem: null,
          nextItem: null
        }, dO(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: PO,
          previousItem: null,
          nextItem: null
        }, dO(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, BB, OB, GB), this
      }
      removeDragGradient(BB) {
        return this._removeFactorGradient(this._dragGradients, BB), 0 === this._dragGradients?.length && (uO(this._dragCreation), uO(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(BB, OB, GB) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, BB, OB, GB), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(BB) {
        return this._removeFactorGradient(this._startSizeGradients, BB), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const BB = new Uint8Array(4 * this._rawTextureWidth),
          OB = MB.o.Color3[0];
        for (let GB = 0; GB < this._rawTextureWidth; GB++) {
          const DB = GB / this._rawTextureWidth;
          YB.h.GetCurrentGradient(DB, this._rampGradients, ((YB, DB, QB) => {
            MB.c.LerpToRef(YB.color, DB.color, QB, OB), BB[4 * GB] = 255 * OB.r, BB[4 * GB + 1] = 255 * OB.g, BB[4 * GB + 2] = 255 * OB.b, BB[4 * GB + 3] = 255
          }))
        }
        this._rampGradientsTexture = jB.d.CreateRGBATexture(BB, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((BB, OB) => BB.gradient < OB.gradient ? -1 : BB.gradient > OB.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(BB, OB) {
        this._rampGradients || (this._rampGradients = []);
        const GB = new YB.d(BB, OB);
        return this._rampGradients.push(GB), this._syncRampGradientTexture(), this
      }
      removeRampGradient(BB) {
        return this._removeGradientAndTexture(BB, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(BB, OB, GB) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = CB, this._colorProcessing.process = HB);
        const DB = new YB.b(BB, OB, GB);
        return this._colorGradients.push(DB), this._colorGradients.sort(((BB, OB) => BB.gradient < OB.gradient ? -1 : BB.gradient > OB.gradient ? 1 : 0)), this
      }
      removeColorGradient(BB) {
        if (!this._colorGradients) return this;
        let OB = 0;
        for (const GB of this._colorGradients) {
          if (GB.gradient === BB) {
            this._colorGradients.splice(OB, 1);
            break
          }
          OB++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = TB, this._colorProcessing.process = vB), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const BB of this._drawWrappers)
            if (BB)
              for (const OB of BB) OB?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(BB, OB, GB, YB, DB) {
        return DB[4 * (((BB = .5 * Math.abs(BB) + .5) * GB % GB | 0) + ((OB = .5 * Math.abs(OB) + .5) * YB % YB | 0) * GB)] / 255
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
          OB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * OB), this._vertexBuffer = new oB.c(BB, this._vertexData, !0, OB);
        let GB = 0;
        const YB = this._vertexBuffer.createVertexBuffer(oB.h.PositionKind, GB, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[oB.h.PositionKind] = YB, GB += 3;
        const DB = this._vertexBuffer.createVertexBuffer(oB.h.ColorKind, GB, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[oB.h.ColorKind] = DB, GB += 4;
        const QB = this._vertexBuffer.createVertexBuffer("angle", GB, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = QB, GB += 1;
        const jB = this._vertexBuffer.createVertexBuffer("size", GB, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = jB, GB += 2, this._isAnimationSheetEnabled) {
          const BB = this._vertexBuffer.createVertexBuffer("cellIndex", GB, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = BB, GB += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const BB = this._vertexBuffer.createVertexBuffer("direction", GB, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = BB, GB += 3
        }
        if (this._useRampGradients) {
          const BB = this._vertexBuffer.createVertexBuffer("remapData", GB, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = BB, GB += 4
        }
        let yB;
        if (this._useInstancing) {
          const OB = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new oB.c(BB, OB, !1, 2), yB = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else yB = this._vertexBuffer.createVertexBuffer("offset", GB, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = yB, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const BB = [],
          OB = [];
        let GB = 0;
        for (let YB = 0; YB < this._capacity; YB++) BB.push(GB), BB.push(GB + 1), BB.push(GB + 2), BB.push(GB), BB.push(GB + 2), BB.push(GB + 3), OB.push(GB, GB + 1, GB + 1, GB + 2, GB + 2, GB + 3, GB + 3, GB, GB, GB + 3), GB += 4;
        this._indexBuffer = this._engine.createIndexBuffer(BB), this._linesIndexBuffer = this._engine.createIndexBuffer(OB)
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
              for (let OB = 0; OB < this.preWarmCycles; OB++) this.animate(!0), BB.render()
            }))
          }));
          else
            for (let OB = 0; OB < this.preWarmCycles; OB++) this.animate(!0)
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
      _appendParticleVertex(BB, OB, GB, YB) {
        let DB = BB * this._vertexBufferSize;
        const oB = QB.k.Xp[0].IU(this._scene?.floatingOriginOffset || QB.r.ZeroReadOnly);
        if (this._vertexData[DB++] = OB.position.x + this.worldOffset.x - oB.x, this._vertexData[DB++] = OB.position.y + this.worldOffset.y - oB.y, this._vertexData[DB++] = OB.position.z + this.worldOffset.z - oB.z, this._vertexData[DB++] = OB.color.r, this._vertexData[DB++] = OB.color.g, this._vertexData[DB++] = OB.color.b, this._vertexData[DB++] = OB.color.a, this._vertexData[DB++] = OB.angle, this._vertexData[DB++] = OB.scale.x * OB.size, this._vertexData[DB++] = OB.scale.y * OB.size, this._isAnimationSheetEnabled && (this._vertexData[DB++] = OB.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[DB++] = OB.direction.x, this._vertexData[DB++] = OB.direction.y, this._vertexData[DB++] = OB.direction.z);
        else if (OB._properties.initialDirection) {
          let BB = OB._properties.initialDirection;
          this.isLocal && (QB.r.TransformNormalToRef(BB, this._emitterWorldMatrix, QB.k.Xp[0]), BB = QB.k.Xp[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[DB++] = BB.x, this._vertexData[DB++] = BB.y, this._vertexData[DB++] = BB.z
        } else {
          let BB = OB.direction;
          this.isLocal && (QB.r.TransformNormalToRef(BB, this._emitterWorldMatrix, QB.k.Xp[0]), BB = QB.k.Xp[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[DB++] = BB.x, this._vertexData[DB++] = BB.y, this._vertexData[DB++] = BB.z
        }
        this._useRampGradients && OB.remapData && (this._vertexData[DB++] = OB.remapData.x, this._vertexData[DB++] = OB.remapData.y, this._vertexData[DB++] = OB.remapData.z, this._vertexData[DB++] = OB.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === GB ? GB = this._epsilon : 1 === GB && (GB = 1 - this._epsilon), 0 === YB ? YB = this._epsilon : 1 === YB && (YB = 1 - this._epsilon)), this._vertexData[DB++] = GB, this._vertexData[DB] = YB)
      }
      _prepareParticle(BB) {}
      _createNewOnes(BB) {
        let OB;
        for (let GB = 0; GB < BB && this._particles.length !== this._capacity; GB++) {
          OB = this._createParticle(), this._particles.push(OB);
          let BB = this._createQueueStart;
          for (; BB;) BB.process(OB, this), BB = BB.nextItem;
          OB._inheritParticleInfoToSubEmitters()
        }
      }
      _update(BB) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const BB = this.emitter;
          this._emitterWorldMatrix = BB.getWorldMatrix()
        } else {
          const BB = this.emitter;
          this._emitterWorldMatrix = QB.d.Translation(BB.x, BB.y, BB.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(BB)
      }
      static _GetAttributeNamesOrOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = [oB.h.PositionKind, oB.h.ColorKind, "angle", "offset", "size"];
        return BB && YB.push("cellIndex"), OB || YB.push("direction"), GB && YB.push("remapData"), YB
      }
      static _GetEffectCreationOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, hB.e)(YB), BB && YB.push("particlesInfos"), OB && YB.push("logarithmicDepthConstant"), GB && (YB.push("vFogInfos"), YB.push("vFogColor")), YB
      }
      fillDefines(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, hB.o)(this, this._scene, BB), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && BB.push("#define FOG")), this._isAnimationSheetEnabled && BB.push("#define ANIMATESHEET"), this.useLogarithmicDepth && BB.push("#define LOGARITHMICDEPTH"), OB === SB.BLENDMODE_MULTIPLY && BB.push("#define BLENDMULTIPLYMODE"), this.isLocal && BB.push("#define LOCAL"), this._useRampGradients && BB.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (BB.push("#define BILLBOARD"), this.billboardMode) {
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
        GB && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), BB.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(BB, OB, GB) {
        OB.push(...IO._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), BB.push(...IO._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), GB.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, eB.f)(BB, this._imageProcessingConfigurationDefines), (0, eB.b)(GB, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(BB) {
        var OB;
        const GB = this._getCustomDrawWrapper(BB);
        if (GB?.effect) return GB;
        const YB = [];
        this.fillDefines(YB, BB);
        const QB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          oB = mO.d._PrepareStringDefines(QB, YB),
          jB = oB ? mO.d.GetConfiguration(QB) : void 0;
        let yB = this._drawWrappers[QB];
        yB || (yB = this._drawWrappers[QB] = [], 0 === QB || this._renderPassObserver || (this._renderPassObserver = ((OB = this._engine)._onReleaseRenderPassObservable ?? (OB._onReleaseRenderPassObservable = new DB.b)).add((BB => {
          const OB = this._drawWrappers[BB];
          if (OB) {
            for (const BB of OB) BB?.dispose();
            delete this._drawWrappers[BB]
          }
        }))));
        let JB = yB[BB];
        JB || (JB = new cB.d(this._engine), JB.drawContext && (JB.drawContext.useInstancing = this._useInstancing), yB[BB] = JB);
        const MB = YB.join("\n");
        if (JB.defines !== MB) {
          const BB = [],
            OB = [],
            GB = [];
          this.fillUniformsAttributesAndSamplerNames(OB, BB, GB), oB && (OB.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== jB?.defines.PREPASS_LOCAL_POSITION_INDEX && OB.push("inverseEmitterWM", "geometryWorldOffset")), JB.setEffect(this._engine.createEffect("particles", {
            attributes: BB,
            uniformsNames: OB,
            samplers: GB,
            defines: MB,
            shaderLanguage: this._shaderLanguage,
            multiTarget: oB,
            indexParameters: oB ? {
              buffersCount: jB?._mrtCount ?? 0
            } : void 0
          }, this._engine), MB)
        }
        return JB
      }
      _bindGeometryRendering(BB) {
        const OB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          GB = mO.d.GetConfiguration(OB);
        if (!GB?._defines) return;
        BB.setFloat("objectId", 0), BB.setInt("meshBlendTag", 0);
        const YB = this._scene?.activeCamera;
        if (BB.setFloat2("cameraInfo", YB?.minZ ?? 0, YB?.maxZ ?? 1), this.isLocal && void 0 !== GB.defines.PREPASS_LOCAL_POSITION_INDEX) {
          BB.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const OB = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || QB.r.ZeroReadOnly, QB.k.Xp[0]);
          BB.setVector3("geometryWorldOffset", OB)
        }
      }
      animate() {
        let BB, OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!OB && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (OB ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) BB = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const OB = this._calculateEmitRate();
            BB = OB * this._scaledUpdateSpeed | 0, this._newPartsExcess += OB * this._scaledUpdateSpeed - BB
          }
          if (this._newPartsExcess > 1 && (BB += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? BB = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(BB), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !OB) {
            let BB = 0;
            for (let OB = 0; OB < this._particles.length; OB++) {
              const GB = this._particles[OB];
              this._appendParticleVertices(BB, GB), BB += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const BB = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  OB = this._particles.length;
                OB < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, OB * BB, this._fixedCapacityHighWaterMark * BB), this._fixedCapacityHighWaterMark = OB, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const OB = this._actualFrame / this.targetStopDuration;
          YB.h.GetCurrentGradient(OB, this._emitRateGradients, ((OB, GB, YB) => {
            OB !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = GB.getFactor(), this._currentEmitRateGradient = OB), BB = (0, lB.Lerp)(this._currentEmitRate1, this._currentEmitRate2, YB)
          }))
        }
        return BB
      }
      _appendParticleVertices(BB, OB) {
        this._appendParticleVertex(BB++, OB, 0, 0), this._useInstancing || (this._appendParticleVertex(BB++, OB, 1, 0), this._appendParticleVertex(BB++, OB, 1, 1), this._appendParticleVertex(BB, OB, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !IO.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([GB.e(655).then((() => GB(63907))), GB.e(649).then((() => GB(63912)))])) : await Promise.all([GB.e(638).then((() => GB(63916))), Promise.all([GB.e(631), GB.e(664)]).then((() => GB(63925)))]), this._shadersLoaded = !0
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
        const OB = this._getWrapper(BB),
          GB = OB.effect,
          YB = this._engine;
        YB.enableEffect(OB);
        const DB = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        GB.setTexture("diffuseSampler", this.particleTexture), GB.setMatrix("view", DB);
        const oB = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (GB.setMatrix("projection", oB), this._isAnimationSheetEnabled && this.particleTexture) {
          const BB = this.particleTexture.getBaseSize();
          GB.setFloat3("particlesInfos", this.spriteCellWidth / BB.width, this.spriteCellHeight / BB.height, this.spriteCellWidth / BB.width)
        }
        if (GB.setVector2("translationPivot", this.translationPivot), GB.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const BB = this._scene.activeCamera;
          GB.setVector3("eyePosition", BB.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), GB.setTexture("rampSampler", this._rampGradientsTexture));
        const jB = GB.defines;
        this._scene && ((0, hB.g)(GB, this, this._scene), this.applyFog && (0, aB.k)(this._scene, void 0, GB)), jB.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (DB.invertToRef(QB.k.Matrix[0]), GB.setMatrix("invView", QB.k.Matrix[0])), GB._multiTarget && this._bindGeometryRendering(GB), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? YB.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, GB) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, GB)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? YB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, GB) : YB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, GB), this.useLogarithmicDepth && this._scene && (0, aB.x)(jB, GB, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(GB), this._setEngineBasedOnBlendMode(BB), GB._multiTarget && mO.d._BindZeroAlphaDiscard(YB, GB);
        let yB = !1;
        try {
          mO.d._BindAttachmentsForEffect(YB, GB) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(GB), this._useInstancing ? this._scene?.forceWireframe ? YB.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : YB.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? YB.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : YB.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), yB = !0)
        } finally {
          mO.d._RestoreAttachments(YB)
        }
        return yB ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const BB = this._engine;
        let OB;
        return BB.setState && (BB.setState(!1), this.forceDepthWrite && BB.setDepthWrite(!0)), OB = this.blendMode === SB.BLENDMODE_MULTIPLYADD ? this._render(SB.BLENDMODE_MULTIPLY) + this._render(SB.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), OB
      }
      _onDispose() {}
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), BB && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), BB && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(OB, GB), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const BB = this._scene.rW.indexOf(this);
          BB > -1 && this._scene.rW.splice(BB, 1), this._scene._activeParticleSystems.dispose()
        }
        this.lF.notifyObservers(this), this.lF.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    IO.ForceGLSL = !1;
    var FO, iO = GB(37823);
    ! function(BB) {
      BB[BB.ATTACHED = 0] = "ATTACHED", BB[BB.END = 1] = "END"
    }(FO || (FO = {}));
    class LO {
      constructor(BB) {
        if (this.particleSystem = BB, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !BB.emitter || !BB.emitter.dispose) {
          const OB = (0, iO.c)("BABYLON.AbstractMesh");
          BB.emitter = new OB("SubemitterSystemEmitter", BB.JF()), BB._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let BB = this.particleSystem.emitter;
        if (BB) {
          if (BB instanceof QB.r) BB = BB.clone();
          else if (-1 !== BB.getClassName().indexOf("Mesh")) {
            BB = new((0, iO.c)("BABYLON.Mesh"))("", BB.JF()), BB.isVisible = !1
          }
        } else BB = new QB.r;
        const OB = new LO(this.particleSystem.clone(this.particleSystem.name, BB));
        return OB.particleSystem.name += "Clone", OB.type = this.type, OB.inheritDirection = this.inheritDirection, OB.inheritedVelocityAmount = this.inheritedVelocityAmount, OB.particleSystem._disposeEmitterOnDispose = !0, OB.particleSystem.disposeOnStop = !0, OB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = {};
        return OB.type = this.type, OB.inheritDirection = this.inheritDirection, OB.inheritedVelocityAmount = this.inheritedVelocityAmount, OB.particleSystem = this.particleSystem.serialize(BB), OB
      }
      static _ParseParticleSystem(BB, OB, GB) {
        throw (0, gB.j)("ParseParticle")
      }
      static Parse(BB, OB, GB) {
        const YB = BB.particleSystem,
          DB = new LO(LO._ParseParticleSystem(YB, OB, GB, !0));
        return DB.type = BB.type, DB.inheritDirection = BB.inheritDirection, DB.inheritedVelocityAmount = BB.inheritedVelocityAmount, DB.particleSystem._isSubEmitter = !0, DB
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var gO = GB(40905),
      rO = GB(41022);
    const XO = () => {};
    class wO {
      constructor() {
        this.particlePositionGenerator = XO, this.particleDestinationGenerator = XO, this.particleDirectionGenerator = XO
      }
      startDirectionFunction(BB, OB, GB, YB) {
        const DB = QB.k.Xp[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== XO) this.particleDirectionGenerator(-1, GB, DB);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== XO) {
          this.particleDestinationGenerator(-1, GB, DB);
          const BB = QB.k.Xp[1];
          DB.subtractToRef(GB.position, BB), BB.scaleToRef(1 / GB.lifeTime, DB)
        } else DB.set(0, 0, 0);
        YB ? OB.IU(DB) : QB.r.TransformNormalToRef(DB, BB, OB)
      }
      startPositionFunction(BB, OB, GB, YB) {
        const DB = QB.k.Xp[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== XO ? this.particlePositionGenerator(-1, GB, DB) : DB.set(0, 0, 0), YB ? OB.IU(DB) : QB.r.TransformCoordinatesToRef(DB, BB, OB)
      }
      clone() {
        const BB = new wO;
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
    const EO = QB.r.Zero(),
      cO = QB.r.Zero(),
      hO = QB.r.Zero();
    class aO {
      constructor() {
        this.strength = 0, this.position = QB.r.Zero()
      }
      _processParticle(BB, OB) {
        this.position.subtractToRef(BB.position, EO);
        const GB = EO.lengthSquared() + 1;
        EO.normalize().scaleToRef(this.strength / GB, cO), cO.scaleToRef(OB._tempScaledUpdateSpeed, hO), BB.direction.addInPlace(hO)
      }
      serialize() {
        return {
          position: this.position.dDB(),
          strength: this.strength
        }
      }
    }
    const eO = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class TO extends IO {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = BB => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const OB = Math.floor(Math.random() * this._subEmitters.length);
          for (const GB of this._subEmitters[OB])
            if (1 === GB.type) {
              const OB = GB.clone();
              BB._inheritParticleInfoToSubEmitter(OB), OB.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(OB.particleSystem), OB.particleSystem.start()
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
        this._flowMap !== BB && (this._flowMap = BB, this._flowMapUpdate && (uO(this._flowMapUpdate), this._flowMapUpdate = null), BB && (this._flowMapUpdate = {
          process: BB => {
            const OB = this.JF()?.getTransformMatrix();
            this._flowMap._processParticle(BB, this.flowMapStrength * this._tempScaledUpdateSpeed, OB)
          },
          previousItem: null,
          nextItem: null
        }, KO(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(BB) {
        super.addAttractor(BB), 1 === this._attractors.length && (this._attractorUpdate = {
          process: BB => {
            for (const OB of this._attractors) OB._processParticle(BB, this)
          },
          previousItem: null,
          nextItem: null
        }, KO(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(BB) {
        super.removeAttractor(BB), 0 === this._attractors.length && this._attractorUpdate && uO(this._attractorUpdate)
      }
      start() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(BB)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const BB of this.subEmitters) BB instanceof TO ? this._subEmitters.push([new LO(BB)]) : BB instanceof LO ? this._subEmitters.push([BB]) : BB instanceof Array && this._subEmitters.push(BB)
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
          const OB = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          BB._properties.attachedSubEmitters = [];
          for (const GB of OB)
            if (0 === GB.type) {
              const OB = GB.clone();
              BB._properties.attachedSubEmitters.push(OB), OB.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), BB && this.particles)
          for (const GB of this.particles)
            if (GB._properties.attachedSubEmitters)
              for (let BB = GB._properties.attachedSubEmitters.length - 1; BB >= 0; BB -= 1) GB._properties.attachedSubEmitters[BB].dispose();
        if (OB && this.activeSubSystems)
          for (let GB = this.activeSubSystems.length - 1; GB >= 0; GB -= 1) this.activeSubSystems[GB].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let BB = 0; BB < this._subEmitters.length; BB++)
            for (const OB of this._subEmitters[BB]) OB.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(BB, OB, GB, YB) {
        let DB;
        DB = GB instanceof gO.d ? null : GB;
        const oB = (0, iO.c)("BABYLON.Texture");
        if (oB && DB)
          if (BB.texture) OB.particleTexture = oB.Parse(BB.texture, DB, YB);
          else if (BB.textureName) {
          const GB = BB.textureSettings;
          if (OB.particleTexture = new oB(YB + BB.textureName, DB, !1, void 0 === BB.invertY || BB.invertY, GB ? GB.samplingMode : void 0), OB.particleTexture.name = BB.textureName, GB) {
            const BB = OB.particleTexture;
            for (const OB of eO) void 0 !== GB[OB] && (BB[OB] = GB[OB])
          }
        }
        if (BB.emitterId || 0 === BB.emitterId || void 0 !== BB.emitter ? (BB.emitterId || 0 === BB.emitterId) && DB ? (OB.emitter = DB.getLastMeshById(BB.emitterId), OB.emitter || (OB.emitter = QB.r.Zero())) : OB.emitter = QB.r.FromArray(BB.emitter) : OB.emitter = QB.r.Zero(), OB.isLocal = !!BB.isLocal, void 0 !== BB.renderingGroupId && (OB.renderingGroupId = BB.renderingGroupId), void 0 !== BB.isBillboardBased && (OB.isBillboardBased = BB.isBillboardBased), void 0 !== BB.billboardMode && (OB.billboardMode = BB.billboardMode), void 0 !== BB.useLogarithmicDepth && (OB.useLogarithmicDepth = BB.useLogarithmicDepth), BB.animations) {
          for (let GB = 0; GB < BB.animations.length; GB++) {
            const YB = BB.animations[GB],
              DB = (0, iO.c)("BABYLON.Animation");
            DB && OB.animations.push(DB.Parse(YB))
          }
          OB.beginAnimationOnStart = BB.beginAnimationOnStart, OB.beginAnimationFrom = BB.beginAnimationFrom, OB.beginAnimationTo = BB.beginAnimationTo, OB.beginAnimationLoop = BB.beginAnimationLoop
        }
        if (BB.autoAnimate && DB && DB.beginAnimation(OB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), OB.startDelay = 0 | BB.startDelay, OB.minAngularSpeed = BB.minAngularSpeed, OB.maxAngularSpeed = BB.maxAngularSpeed, OB.minSize = BB.minSize, OB.maxSize = BB.maxSize, BB.minScaleX && (OB.minScaleX = BB.minScaleX, OB.maxScaleX = BB.maxScaleX, OB.minScaleY = BB.minScaleY, OB.maxScaleY = BB.maxScaleY), void 0 !== BB.preWarmCycles && (OB.preWarmCycles = BB.preWarmCycles, OB.preWarmStepOffset = BB.preWarmStepOffset), void 0 !== BB.minInitialRotation && (OB.minInitialRotation = BB.minInitialRotation, OB.maxInitialRotation = BB.maxInitialRotation), OB.minLifeTime = BB.minLifeTime, OB.maxLifeTime = BB.maxLifeTime, OB.minEmitPower = BB.minEmitPower, OB.maxEmitPower = BB.maxEmitPower, OB.emitRate = BB.emitRate, OB.gravity = QB.r.FromArray(BB.gravity), BB.noiseStrength && (OB.noiseStrength = QB.r.FromArray(BB.noiseStrength)), OB.color1 = MB.g.FromArray(BB.color1), OB.color2 = MB.g.FromArray(BB.color2), OB.colorDead = MB.g.FromArray(BB.colorDead), OB.updateSpeed = BB.updateSpeed, OB.targetStopDuration = BB.targetStopDuration, OB.blendMode = BB.blendMode, BB.colorGradients)
          for (const QB of BB.colorGradients) OB.addColorGradient(QB.gradient, MB.g.FromArray(QB.color1), QB.color2 ? MB.g.FromArray(QB.color2) : void 0);
        if (BB.rampGradients) {
          for (const GB of BB.rampGradients) OB.addRampGradient(GB.gradient, MB.c.FromArray(GB.color));
          OB.useRampGradients = BB.useRampGradients
        }
        if (BB.colorRemapGradients)
          for (const QB of BB.colorRemapGradients) OB.addColorRemapGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.alphaRemapGradients)
          for (const QB of BB.alphaRemapGradients) OB.addAlphaRemapGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.sizeGradients)
          for (const QB of BB.sizeGradients) OB.addSizeGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.angularSpeedGradients)
          for (const QB of BB.angularSpeedGradients) OB.addAngularSpeedGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.velocityGradients)
          for (const QB of BB.velocityGradients) OB.addVelocityGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.dragGradients)
          for (const QB of BB.dragGradients) OB.addDragGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.emitRateGradients)
          for (const QB of BB.emitRateGradients) OB.addEmitRateGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.startSizeGradients)
          for (const QB of BB.startSizeGradients) OB.addStartSizeGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.lifeTimeGradients)
          for (const QB of BB.lifeTimeGradients) OB.addLifeTimeGradient(QB.gradient, void 0 !== QB.factor1 ? QB.factor1 : QB.factor, QB.factor2);
        if (BB.limitVelocityGradients) {
          for (const GB of BB.limitVelocityGradients) OB.addLimitVelocityGradient(GB.gradient, void 0 !== GB.factor1 ? GB.factor1 : GB.factor, GB.factor2);
          OB.limitVelocityDamping = BB.limitVelocityDamping
        }
        if (BB.noiseTexture && DB) {
          const GB = (0, iO.c)("BABYLON.ProceduralTexture");
          OB.noiseTexture = GB.Parse(BB.noiseTexture, DB, YB)
        }
        let jB;
        if (BB.particleEmitterType) {
          switch (BB.particleEmitterType.type) {
            case "SphereParticleEmitter":
              jB = new ZB;
              break;
            case "SphereDirectedParticleEmitter":
              jB = new NB;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              jB = new WB;
              break;
            case "ConeDirectedParticleEmitter":
              jB = new AB;
              break;
            case "CylinderParticleEmitter":
              jB = new RB.f;
              break;
            case "CylinderDirectedParticleEmitter":
              jB = new RB.c;
              break;
            case "HemisphericParticleEmitter":
              jB = new qB;
              break;
            case "PointParticleEmitter":
              jB = new pB;
              break;
            case "MeshParticleEmitter":
              jB = new VB;
              break;
            case "CustomParticleEmitter":
              jB = new wO;
              break;
            default:
              jB = new PB.e
          }
          jB.parse(BB.particleEmitterType, DB)
        } else jB = new PB.e, jB.parse(BB, DB);
        OB.particleEmitterType = jB, OB.startSpriteCellID = BB.startSpriteCellID, OB.endSpriteCellID = BB.endSpriteCellID, OB.spriteCellLoop = BB.spriteCellLoop ?? !0, OB.spriteCellWidth = BB.spriteCellWidth, OB.spriteCellHeight = BB.spriteCellHeight, OB.spriteCellChangeSpeed = BB.spriteCellChangeSpeed, OB.spriteRandomStartCell = BB.spriteRandomStartCell, OB.disposeOnStop = BB.disposeOnStop ?? !1, OB.manualEmitCount = BB.manualEmitCount ?? -1
      }
      static Parse(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          DB = arguments.length > 4 ? arguments[4] : void 0;
        const oB = BB.name;
        let jB, yB, JB = null,
          PB = null;
        if (OB instanceof gO.d ? jB = OB : (yB = OB, jB = yB.Lp()), BB.customShader && (0, gB.b)(jB.createEffectForParticles)) {
          PB = BB.customShader;
          const OB = PB.shaderOptions.defines.length > 0 ? PB.shaderOptions.defines.join("\n") : "";
          JB = jB.createEffectForParticles(PB.shaderPath.fragmentElement, PB.shaderOptions.uniforms, PB.shaderOptions.samplers, OB)
        }
        const zB = new TO(oB, DB || BB.CP, OB, JB, BB.isAnimationSheetEnabled);
        if (zB.customShader = PB, zB._rootUrl = GB, BB.id && (zB.id = BB.id), BB.subEmitters) {
          zB.subEmitters = [];
          for (const YB of BB.subEmitters) {
            const BB = [];
            for (const DB of YB) BB.push(LO.Parse(DB, OB, GB));
            zB.subEmitters.push(BB)
          }
        }
        if (BB.attractors)
          for (const MB of BB.attractors) {
            const BB = new aO;
            BB.position = QB.r.FromArray(MB.position), BB.strength = MB.strength, zB.addAttractor(BB)
          }
        return TO._Parse(BB, zB, OB, GB), BB.textureMask && (zB.textureMask = MB.g.FromArray(BB.textureMask)), BB.worldOffset && (zB.worldOffset = QB.r.FromArray(BB.worldOffset)), BB.preventAutoStart && (zB.preventAutoStart = BB.preventAutoStart), BB.metadata && (zB.metadata = BB.metadata), YB || zB.preventAutoStart || zB.start(), zB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = {};
        if (TO._Serialize(OB, this, BB), OB.textureMask = this.textureMask.dDB(), OB.customShader = this.customShader, OB.preventAutoStart = this.preventAutoStart, OB.worldOffset = this.worldOffset.dDB(), this.metadata && (OB.metadata = this.metadata), this.subEmitters) {
          OB.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const GB of this._subEmitters) {
            const YB = [];
            for (const OB of GB) OB.particleSystem.doNotSerialize || YB.push(OB.serialize(BB));
            OB.subEmitters.push(YB)
          }
        }
        if (this._attractors && this._attractors.length) {
          OB.attractors = [];
          for (const BB of this._attractors) OB.attractors.push(BB.serialize())
        }
        return OB
      }
      static _Serialize(BB, OB, GB) {
        if (BB.name = OB.name, BB.id = OB.id, BB.CP = OB.getCapacity(), BB.disposeOnStop = OB.disposeOnStop, BB.manualEmitCount = OB.manualEmitCount, OB.emitter.position) {
          const GB = OB.emitter;
          BB.emitterId = GB.id
        } else {
          const GB = OB.emitter;
          BB.emitter = GB.dDB()
        }
        if (OB.particleEmitterType && (BB.particleEmitterType = OB.particleEmitterType.serialize()), OB.particleTexture)
          if (GB) BB.texture = OB.particleTexture.serialize();
          else {
            const GB = OB.particleTexture;
            BB.textureName = OB.particleTexture.name, BB.invertY = !!GB._invertY;
            const YB = {};
            for (const BB of eO) YB[BB] = GB[BB];
            YB.samplingMode = GB.samplingMode, BB.textureSettings = YB
          } BB.isLocal = OB.isLocal, rO.d.AppendSerializedAnimations(OB, BB), BB.beginAnimationOnStart = OB.beginAnimationOnStart, BB.beginAnimationFrom = OB.beginAnimationFrom, BB.beginAnimationTo = OB.beginAnimationTo, BB.beginAnimationLoop = OB.beginAnimationLoop, BB.startDelay = OB.startDelay, BB.renderingGroupId = OB.renderingGroupId, BB.isBillboardBased = OB.isBillboardBased, BB.billboardMode = OB.billboardMode, BB.minAngularSpeed = OB.minAngularSpeed, BB.maxAngularSpeed = OB.maxAngularSpeed, BB.minSize = OB.minSize, BB.maxSize = OB.maxSize, BB.minScaleX = OB.minScaleX, BB.maxScaleX = OB.maxScaleX, BB.minScaleY = OB.minScaleY, BB.maxScaleY = OB.maxScaleY, BB.minEmitPower = OB.minEmitPower, BB.maxEmitPower = OB.maxEmitPower, BB.minLifeTime = OB.minLifeTime, BB.maxLifeTime = OB.maxLifeTime, BB.emitRate = OB.emitRate, BB.gravity = OB.gravity.dDB(), BB.noiseStrength = OB.noiseStrength.dDB(), BB.color1 = OB.color1.dDB(), BB.color2 = OB.color2.dDB(), BB.colorDead = OB.colorDead.dDB(), BB.updateSpeed = OB.updateSpeed, BB.targetStopDuration = OB.targetStopDuration, BB.blendMode = OB.blendMode, BB.preWarmCycles = OB.preWarmCycles, BB.preWarmStepOffset = OB.preWarmStepOffset, BB.minInitialRotation = OB.minInitialRotation, BB.maxInitialRotation = OB.maxInitialRotation, BB.startSpriteCellID = OB.startSpriteCellID, BB.spriteCellLoop = OB.spriteCellLoop, BB.endSpriteCellID = OB.endSpriteCellID, BB.spriteCellChangeSpeed = OB.spriteCellChangeSpeed, BB.spriteCellWidth = OB.spriteCellWidth, BB.spriteCellHeight = OB.spriteCellHeight, BB.spriteRandomStartCell = OB.spriteRandomStartCell, BB.isAnimationSheetEnabled = OB.isAnimationSheetEnabled, BB.useLogarithmicDepth = OB.useLogarithmicDepth;
        const YB = OB.getColorGradients();
        if (YB) {
          BB.colorGradients = [];
          for (const OB of YB) {
            const GB = {
              gradient: OB.gradient,
              color1: OB.color1.dDB()
            };
            OB.color2 ? GB.color2 = OB.color2.dDB() : GB.color2 = OB.color1.dDB(), BB.colorGradients.push(GB)
          }
        }
        const DB = OB.getRampGradients();
        if (DB) {
          BB.rampGradients = [];
          for (const OB of DB) {
            const GB = {
              gradient: OB.gradient,
              color: OB.color.dDB()
            };
            BB.rampGradients.push(GB)
          }
          BB.useRampGradients = OB.useRampGradients
        }
        const QB = OB.getColorRemapGradients();
        if (QB) {
          BB.colorRemapGradients = [];
          for (const OB of QB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.colorRemapGradients.push(GB)
          }
        }
        const oB = OB.getAlphaRemapGradients();
        if (oB) {
          BB.alphaRemapGradients = [];
          for (const OB of oB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.alphaRemapGradients.push(GB)
          }
        }
        const jB = OB.getSizeGradients();
        if (jB) {
          BB.sizeGradients = [];
          for (const OB of jB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.sizeGradients.push(GB)
          }
        }
        const yB = OB.getAngularSpeedGradients();
        if (yB) {
          BB.angularSpeedGradients = [];
          for (const OB of yB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.angularSpeedGradients.push(GB)
          }
        }
        const JB = OB.getVelocityGradients();
        if (JB) {
          BB.velocityGradients = [];
          for (const OB of JB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.velocityGradients.push(GB)
          }
        }
        const MB = OB.getDragGradients();
        if (MB) {
          BB.dragGradients = [];
          for (const OB of MB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.dragGradients.push(GB)
          }
        }
        const PB = OB.getEmitRateGradients();
        if (PB) {
          BB.emitRateGradients = [];
          for (const OB of PB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.emitRateGradients.push(GB)
          }
        }
        const zB = OB.getStartSizeGradients();
        if (zB) {
          BB.startSizeGradients = [];
          for (const OB of zB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.startSizeGradients.push(GB)
          }
        }
        const lB = OB.getLifeTimeGradients();
        if (lB) {
          BB.lifeTimeGradients = [];
          for (const OB of lB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.lifeTimeGradients.push(GB)
          }
        }
        const pB = OB.getLimitVelocityGradients();
        if (pB) {
          BB.limitVelocityGradients = [];
          for (const OB of pB) {
            const GB = {
              gradient: OB.gradient,
              factor1: OB.factor1
            };
            void 0 !== OB.factor2 ? GB.factor2 = OB.factor2 : GB.factor2 = OB.factor1, BB.limitVelocityGradients.push(GB)
          }
          BB.limitVelocityDamping = OB.limitVelocityDamping
        }
        OB.noiseTexture && (BB.noiseTexture = OB.noiseTexture.serialize())
      }
      clone(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = {
          ...this._customWrappers
        };
        let DB = null;
        const QB = this._engine;
        if ((0, gB.b)(QB.createEffectForParticles) && null != this.customShader) {
          DB = this.customShader;
          const BB = DB.shaderOptions.defines.length > 0 ? DB.shaderOptions.defines.join("\n") : "",
            OB = QB.createEffectForParticles(DB.shaderPath.fragmentElement, DB.shaderOptions.uniforms, DB.shaderOptions.samplers, BB);
          YB[0] ? YB[0].effect = OB : this.setCustomEffect(OB, 0)
        }
        const oB = this.serialize(GB),
          jB = !1 === GB && this.particleTexture ? this.particleTexture.clone() : null;
        jB && (oB.textureName = void 0);
        const yB = TO.Parse(oB, this._scene || this._engine, this._rootUrl);
        return yB.name = BB, yB.customShader = DB, yB._customWrappers = YB, jB && (yB.particleTexture = jB), void 0 === OB && (OB = this.emitter), this.noiseTexture && (yB.noiseTexture = this.noiseTexture.clone()), yB.emitter = OB, this.preventAutoStart || yB.start(), yB
      }
    }
    TO.BILLBOARDMODE_Y = 2, TO.BILLBOARDMODE_ALL = 7, TO.BILLBOARDMODE_STRETCHED = 8, TO.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let bO = !1;
    bO || (bO = !0, LO._ParseParticleSystem = TO.Parse)
  },
  44769: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      SkyMaterial: () => WB,
      _MaxColorValueForRenderTarget: () => RB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(41022),
      oB = GB(37771),
      jB = GB(41275),
      yB = GB(41346),
      JB = GB(44726),
      MB = GB(42160),
      PB = GB(41089),
      zB = GB(37823),
      lB = GB(41372),
      pB = GB(41354),
      qB = GB(41333),
      ZB = GB(41325);
    class NB extends jB.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function RB(BB) {
      switch (BB) {
        case JB.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case JB.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let WB = (() => {
      var BB;
      let OB, jB, JB, zB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB = yB.d,
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [],
        cB = [],
        hB = [],
        aB = [],
        eB = [],
        TB = [],
        bB = [],
        CB = [],
        HB = [],
        vB = [],
        sB = [],
        xB = [],
        tB = [],
        BO = [],
        OO = [],
        GO = [],
        YO = [],
        DO = [],
        QO = [],
        oO = [],
        jO = [],
        yO = [];
      return BB = class extends mB {
        constructor(BB, OB) {
          super(BB, OB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, YB.j)(this, IB, 1), this.turbidity = ((0, YB.j)(this, FB), (0, YB.j)(this, iB, 10)), this.rayleigh = ((0, YB.j)(this, LB), (0, YB.j)(this, gB, 2)), this.mieCoefficient = ((0, YB.j)(this, rB), (0, YB.j)(this, XB, .005)), this.mieDirectionalG = ((0, YB.j)(this, wB), (0, YB.j)(this, EB, .8)), this.distance = ((0, YB.j)(this, cB), (0, YB.j)(this, hB, 500)), this.inclination = ((0, YB.j)(this, aB), (0, YB.j)(this, eB, .49)), this.azimuth = ((0, YB.j)(this, TB), (0, YB.j)(this, bB, .25)), this.sunPosition = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, new oB.Xp(0, 100, 0))), this.useSunPosition = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, !1)), this.cameraOffset = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, oB.Xp.Zero())), this.up = ((0, YB.j)(this, BO), (0, YB.j)(this, OO, oB.Xp.Up())), this.dithering = ((0, YB.j)(this, GO), (0, YB.j)(this, YO, !1)), this.rawHdrOutput = ((0, YB.j)(this, DO), (0, YB.j)(this, QO, !1)), this.cloudiness = ((0, YB.j)(this, oO), (0, YB.j)(this, jO, 0)), this._cameraPosition = ((0, YB.j)(this, yO), oB.Xp.Zero()), this._skyOrientation = new oB.Quaternion
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
        isReadyForSubMesh(OB, GB) {
          const YB = GB._drawWrapper;
          if (this.isFrozen && YB.effect && YB._wasPreviouslyReady) return !0;
          GB.materialDefines || (GB.materialDefines = new NB);
          const DB = GB.materialDefines,
            QB = this.JF();
          if (this._isReadyForSubMesh(GB)) return !0;
          if ((0, ZB.cb)(OB, QB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, DB, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, ZB.X)(OB, DB, !0, !1), DB.IMAGEPROCESSINGPOSTPROCESS !== QB.imageProcessingConfiguration.applyByPostProcess && DB.markAsMiscDirty(), DB.DITHER !== this.dithering && DB.markAsMiscDirty(), DB.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && DB.markAsMiscDirty(), DB.isDirty) {
            DB.markAsProcessed(), QB.resetCachedMaterial();
            const OB = new pB.c;
            DB.FOG && OB.addFallback(1, "FOG"), DB.IMAGEPROCESSINGPOSTPROCESS = QB.imageProcessingConfiguration.applyByPostProcess, DB.DITHER = this.dithering, DB.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const YB = [MB.g.PositionKind];
            DB.VERTEXCOLOR && YB.push(MB.g.ColorKind);
            const oB = "sky",
              jB = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, qB.e)(jB);
            const yB = DB.toString();
            GB.setEffect(QB.Lp().createEffect(oB, {
              attributes: YB,
              uniformsNames: jB,
              uniformBuffersNames: [],
              samplers: [],
              defines: yB,
              fallbacks: OB,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, QB.Lp()), DB, this._materialContext)
          }
          return !(!GB.effect || !GB.effect.isReady()) && (DB._renderId = QB.getRenderId(), YB._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(BB, OB, GB) {
          const YB = this.JF(),
            DB = GB.materialDefines;
          if (!DB) return;
          const QB = GB.effect;
          if (!QB) return;
          this._activeEffect = QB, this.bindOnlyWorldMatrix(BB), this._activeEffect.setMatrix("viewProjection", YB.getTransformMatrix()), this._mustRebind(YB, QB, GB) && ((0, qB.g)(QB, this, YB), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, ZB.x)(DB, QB, YB)), YB.fogEnabled && OB.applyFog && YB.fogMode !== PB.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", YB.getViewMatrix()), (0, ZB.k)(YB, OB, this._activeEffect, this.rawHdrOutput);
          const jB = YB.activeCamera;
          if (jB) {
            const BB = jB.getWorldMatrix();
            this._cameraPosition.x = BB.m[12], this._cameraPosition.y = BB.m[13], this._cameraPosition.z = BB.m[14], this._activeEffect.setVector3("cameraPosition", oB.TmpVectors.Xp[0].IU(this._cameraPosition).CDB(YB.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const BB = YB.Lp()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", RB(BB?.texture?.type))
          }
          if (!this.useSunPosition) {
            const BB = Math.PI * (this.inclination - .5),
              OB = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(OB) * Math.cos(BB), this.sunPosition.y = this.distance * Math.sin(-BB), this.sunPosition.z = this.distance * Math.sin(OB) * Math.cos(BB), oB.Quaternion.FromUnitVectorsToRef(oB.Xp.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(OB, this._activeEffect, GB)
        }
        getAnimatables() {
          return []
        }
        dispose(BB) {
          super.dispose(BB)
        }
        clone(OB) {
          return QB.d.Clone((() => new BB(OB, this.JF())), this)
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.SkyMaterial", BB
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(OB, GB, YB) {
          return QB.d.Parse((() => new BB(OB.name, GB)), OB, GB, YB)
        }
      }, (() => {
        const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(mB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, DB.L)()], jB = [(0, DB.L)()], JB = [(0, DB.L)()], zB = [(0, DB.L)()], WB = [(0, DB.L)()], AB = [(0, DB.L)()], VB = [(0, DB.L)()], SB = [(0, DB.L)()], nB = [(0, DB.H)()], UB = [(0, DB.L)()], fB = [(0, DB.H)()], kB = [(0, DB.H)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: BB => "luminance" in BB,
            get: BB => BB.luminance,
            set: (BB, OB) => {
              BB.luminance = OB
            }
          },
          metadata: GB
        }, IB, FB), (0, YB.h)(null, null, jB, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: BB => "turbidity" in BB,
            get: BB => BB.turbidity,
            set: (BB, OB) => {
              BB.turbidity = OB
            }
          },
          metadata: GB
        }, iB, LB), (0, YB.h)(null, null, JB, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: BB => "rayleigh" in BB,
            get: BB => BB.rayleigh,
            set: (BB, OB) => {
              BB.rayleigh = OB
            }
          },
          metadata: GB
        }, gB, rB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieCoefficient" in BB,
            get: BB => BB.mieCoefficient,
            set: (BB, OB) => {
              BB.mieCoefficient = OB
            }
          },
          metadata: GB
        }, XB, wB), (0, YB.h)(null, null, WB, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieDirectionalG" in BB,
            get: BB => BB.mieDirectionalG,
            set: (BB, OB) => {
              BB.mieDirectionalG = OB
            }
          },
          metadata: GB
        }, EB, cB), (0, YB.h)(null, null, AB, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: BB => "distance" in BB,
            get: BB => BB.distance,
            set: (BB, OB) => {
              BB.distance = OB
            }
          },
          metadata: GB
        }, hB, aB), (0, YB.h)(null, null, VB, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: BB => "inclination" in BB,
            get: BB => BB.inclination,
            set: (BB, OB) => {
              BB.inclination = OB
            }
          },
          metadata: GB
        }, eB, TB), (0, YB.h)(null, null, SB, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: BB => "azimuth" in BB,
            get: BB => BB.azimuth,
            set: (BB, OB) => {
              BB.azimuth = OB
            }
          },
          metadata: GB
        }, bB, CB), (0, YB.h)(null, null, nB, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "sunPosition" in BB,
            get: BB => BB.sunPosition,
            set: (BB, OB) => {
              BB.sunPosition = OB
            }
          },
          metadata: GB
        }, HB, vB), (0, YB.h)(null, null, UB, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSunPosition" in BB,
            get: BB => BB.useSunPosition,
            set: (BB, OB) => {
              BB.useSunPosition = OB
            }
          },
          metadata: GB
        }, sB, xB), (0, YB.h)(null, null, fB, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraOffset" in BB,
            get: BB => BB.cameraOffset,
            set: (BB, OB) => {
              BB.cameraOffset = OB
            }
          },
          metadata: GB
        }, tB, BO), (0, YB.h)(null, null, kB, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: BB => "up" in BB,
            get: BB => BB.up,
            set: (BB, OB) => {
              BB.up = OB
            }
          },
          metadata: GB
        }, OO, GO), (0, YB.h)(null, null, dB, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: BB => "dithering" in BB,
            get: BB => BB.dithering,
            set: (BB, OB) => {
              BB.dithering = OB
            }
          },
          metadata: GB
        }, YO, DO), (0, YB.h)(null, null, KB, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: BB => "rawHdrOutput" in BB,
            get: BB => BB.rawHdrOutput,
            set: (BB, OB) => {
              BB.rawHdrOutput = OB
            }
          },
          metadata: GB
        }, QO, oO), (0, YB.h)(null, null, uB, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: BB => "cloudiness" in BB,
            get: BB => BB.cloudiness,
            set: (BB, OB) => {
              BB.cloudiness = OB
            }
          },
          metadata: GB
        }, jO, yO), GB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GB
        })
      })(), BB._ShaderLoader = new lB.d((() => [GB.e(639).then((() => GB(63930))), GB.e(632).then((() => GB(63938)))]), (() => [GB.e(656).then((() => GB(63946))), GB.e(650).then((() => GB(63951)))])), BB
    })();
    (0, zB.f)("BABYLON.SkyMaterial", WB)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);