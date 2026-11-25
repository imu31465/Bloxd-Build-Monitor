export const id = 268;
export const ids = [268];
export const modules = {
  44265: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(41213),
      SM = iM(44273);
    class jM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = iM, this.uOM = [], this._maxBlockCapacity = rM || 64, this._selectionContent = new OM.d(1024), this._creationFunc = MM
      }
      update(MM, rM, iM) {
        SM.b._CreateBlocks(MM, rM, iM, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      JOM(MM) {
        for (let rM = 0; rM < this.blocks.length; rM++) {
          this.blocks[rM].addEntry(MM)
        }
      }
      Fk(MM) {
        for (let rM = 0; rM < this.blocks.length; rM++) {
          this.blocks[rM].removeEntry(MM)
        }
      }
      select(MM, rM) {
        this._selectionContent.reset();
        for (let iM = 0; iM < this.blocks.length; iM++) {
          this.blocks[iM].select(MM, this._selectionContent, rM)
        }
        return rM ? this._selectionContent.concat(this.uOM) : this._selectionContent.concatWithNoDuplicate(this.uOM), this._selectionContent
      }
      intersects(MM, rM, iM) {
        this._selectionContent.reset();
        for (let OM = 0; OM < this.blocks.length; OM++) {
          this.blocks[OM].intersects(MM, rM, this._selectionContent, iM)
        }
        return iM ? this._selectionContent.concat(this.uOM) : this._selectionContent.concatWithNoDuplicate(this.uOM), this._selectionContent
      }
      intersectsRay(MM) {
        this._selectionContent.reset();
        for (let rM = 0; rM < this.blocks.length; rM++) {
          this.blocks[rM].intersectsRay(MM, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.uOM), this._selectionContent
      }
    }
    jM.CreationFuncForMeshes = (MM, rM) => {
      const iM = MM.aY();
      !MM.isBlocked && iM.boundingBox.intersectsMinMax(rM.UOM, rM.EOM) && rM.entries.push(MM)
    }, jM.CreationFuncForSubMeshes = (MM, rM) => {
      MM.aY().boundingBox.intersectsMinMax(rM.UOM, rM.EOM) && rM.entries.push(MM)
    }
  },
  44273: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(38040),
      SM = iM(41412);
    class jM {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.entries = [], this.ROM = new Array, this._capacity = iM, this._depth = OM, this._maxDepth = SM, this._creationFunc = jM, this._minPoint = MM, this._maxPoint = rM, this.ROM.push(MM.clone()), this.ROM.push(rM.clone()), this.ROM.push(MM.clone()), this.ROM[2].x = rM.x, this.ROM.push(MM.clone()), this.ROM[3].y = rM.y, this.ROM.push(MM.clone()), this.ROM[4].z = rM.z, this.ROM.push(rM.clone()), this.ROM[5].z = MM.z, this.ROM.push(rM.clone()), this.ROM[6].x = MM.x, this.ROM.push(rM.clone()), this.ROM[7].y = MM.y
      }
      get vL() {
        return this._capacity
      }
      get UOM() {
        return this._minPoint
      }
      get EOM() {
        return this._maxPoint
      }
      addEntry(MM) {
        if (this.blocks)
          for (let rM = 0; rM < this.blocks.length; rM++) {
            this.blocks[rM].addEntry(MM)
          } else this._creationFunc(MM, this), this.entries.length > this.vL && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(MM) {
        if (this.blocks) {
          for (let rM = 0; rM < this.blocks.length; rM++) {
            this.blocks[rM].removeEntry(MM)
          }
          return
        }
        const rM = this.entries.indexOf(MM);
        rM > -1 && this.entries.splice(rM, 1)
      }
      addEntries(MM) {
        for (let rM = 0; rM < MM.length; rM++) {
          const iM = MM[rM];
          this.addEntry(iM)
        }
      }
      select(MM, rM, iM) {
        if (SM.e.IsInFrustum(this.ROM, MM)) {
          if (this.blocks) {
            for (let OM = 0; OM < this.blocks.length; OM++) {
              this.blocks[OM].select(MM, rM, iM)
            }
            return
          }
          iM ? rM.concat(this.entries) : rM.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(MM, rM, iM, OM) {
        if (SM.e.IntersectsSphere(this._minPoint, this._maxPoint, MM, rM)) {
          if (this.blocks) {
            for (let SM = 0; SM < this.blocks.length; SM++) {
              this.blocks[SM].intersects(MM, rM, iM, OM)
            }
            return
          }
          OM ? iM.concat(this.entries) : iM.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(MM, rM) {
        if (MM.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let iM = 0; iM < this.blocks.length; iM++) {
              this.blocks[iM].intersectsRay(MM, rM)
            }
            return
          }
          rM.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        jM._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(MM, rM, iM, SM, aM, PM, nM, QM) {
        nM.blocks = new Array;
        const zM = new OM.q((rM.x - MM.x) / 2, (rM.y - MM.y) / 2, (rM.z - MM.z) / 2);
        for (let OM = 0; OM < 2; OM++)
          for (let rM = 0; rM < 2; rM++)
            for (let LM = 0; LM < 2; LM++) {
              const mM = MM.add(zM.multiplyByFloats(OM, rM, LM)),
                HM = MM.add(zM.multiplyByFloats(OM + 1, rM + 1, LM + 1)),
                hM = new jM(mM, HM, SM, aM + 1, PM, QM);
              hM.addEntries(iM), nM.blocks.push(hM)
            }
      }
    }
  },
  44280: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM
    });
    var OM = iM(41196),
      SM = iM(38040),
      jM = iM(41529),
      aM = iM(44214),
      PM = iM(41278),
      nM = iM(38064),
      QM = iM(44265);
    class zM {
      constructor(MM) {
        this.name = PM.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new aM.z(SM.q.Zero(), new SM.q(1, 1, 1)), (MM = MM || nM.c.LastCreatedScene) && (this.YJ = MM, this.YJ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.YJ.getActiveSubMeshCandidates = MM => this.getActiveSubMeshCandidates(MM), this.YJ.getCollidingSubMeshCandidates = (MM, rM) => this.getCollidingSubMeshCandidates(MM, rM), this.YJ.getIntersectingSubMeshCandidates = (MM, rM) => this.getIntersectingSubMeshCandidates(MM, rM))
      }
      register() {
        this.YJ.onMeshRemovedObservable.add((MM => {
          const rM = this.YJ.selectionOctree;
          if (void 0 !== rM && null !== rM) {
            const iM = rM.uOM.indexOf(MM); - 1 !== iM && rM.uOM.splice(iM, 1)
          }
        })), this.YJ.onMeshImportedObservable.add((MM => {
          const rM = this.YJ.selectionOctree;
          void 0 !== rM && null !== rM && rM.JOM(MM)
        }))
      }
      getActiveMeshCandidates() {
        return this.YJ.oOM?.select(this.YJ.frustumPlanes) || this.YJ._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(MM) {
        if (MM._submeshesOctree && MM.useOctreeForRenderingSelection) {
          return MM._submeshesOctree.select(this.YJ.frustumPlanes)
        }
        return this.YJ._getDefaultSubMeshCandidates(MM)
      }
      getIntersectingSubMeshCandidates(MM, rM) {
        if (MM._submeshesOctree && MM.useOctreeForPicking) {
          aM.z.TransformToRef(rM, MM.getWorldMatrix(), this._tempRay);
          return MM._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.YJ._getDefaultSubMeshCandidates(MM)
      }
      getCollidingSubMeshCandidates(MM, rM) {
        if (MM._submeshesOctree && MM.useOctreeForCollisions) {
          const iM = rM._velocityWorldLength + Math.max(rM._radius.x, rM._radius.y, rM._radius.z);
          return MM._submeshesOctree.intersects(rM._basePointWorld, iM)
        }
        return this.YJ._getDefaultSubMeshCandidates(MM)
      }
      rebuild() {}
      dispose() {}
    }
    let LM = !1;
    LM || (LM = !0, OM.d.prototype.createOrUpdateSelectionOctree = function() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        iM = this._getComponent(PM.e.NAME_OCTREE);
      iM || (iM = new zM(this), this.MOM(iM)), this.oOM || (this.oOM = new QM.c(QM.c.CreationFuncForMeshes, MM, rM));
      const OM = this.getWorldExtends();
      return this.oOM.update(OM.min, OM.max, this.meshes), this.oOM
    }, Object.defineProperty(OM.d.prototype, "selectionOctree", {
      get: function() {
        return this.oOM
      },
      enumerable: !0,
      configurable: !0
    }), jM.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const iM = this.Hk();
      let OM = iM._getComponent(PM.e.NAME_OCTREE);
      OM || (OM = new zM(iM), iM.MOM(OM)), this._submeshesOctree || (this._submeshesOctree = new QM.c(QM.c.CreationFuncForSubMeshes, MM, rM)), this.computeWorldMatrix(!0);
      const SM = this.aY().boundingBox;
      return this._submeshesOctree.update(SM.minimumWorld, SM.maximumWorld, this.iG), this._submeshesOctree
    })
  },
  44214: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => RM,
      d: () => JM,
      h: () => hM,
      i: () => HM,
      m: () => gM,
      n: () => tM,
      q: () => eM,
      t: () => wM,
      x: () => bM,
      z: () => LM
    });
    var OM = iM(38044),
      SM = iM(38040),
      jM = iM(38048),
      aM = iM(41408),
      PM = iM(41242),
      nM = iM(38064),
      QM = iM(41302);
    const zM = {
      internalPickerForMesh: void 0
    };
    class LM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OM.d;
        this.origin = MM, this.direction = rM, this.length = iM, this.epsilon = SM
      }
      clone() {
        return new LM(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const OM = LM._TmpVector3[0].iMM(MM.x - iM, MM.y - iM, MM.z - iM),
          SM = LM._TmpVector3[1].iMM(rM.x + iM, rM.y + iM, rM.z + iM);
        let jM, aM, PM, nM, QM = 0,
          zM = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < OM.x || this.origin.x > SM.x) return !1
        } else if (jM = 1 / this.direction.x, aM = (OM.x - this.origin.x) * jM, PM = (SM.x - this.origin.x) * jM, PM === -1 / 0 && (PM = 1 / 0), aM > PM && (nM = aM, aM = PM, PM = nM), QM = Math.max(aM, QM), zM = Math.min(PM, zM), QM > zM) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < OM.y || this.origin.y > SM.y) return !1
        } else if (jM = 1 / this.direction.y, aM = (OM.y - this.origin.y) * jM, PM = (SM.y - this.origin.y) * jM, PM === -1 / 0 && (PM = 1 / 0), aM > PM && (nM = aM, aM = PM, PM = nM), QM = Math.max(aM, QM), zM = Math.min(PM, zM), QM > zM) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < OM.z || this.origin.z > SM.z) return !1
        } else if (jM = 1 / this.direction.z, aM = (OM.z - this.origin.z) * jM, PM = (SM.z - this.origin.z) * jM, PM === -1 / 0 && (PM = 1 / 0), aM > PM && (nM = aM, aM = PM, PM = nM), QM = Math.max(aM, QM), zM = Math.min(PM, zM), QM > zM) return !1;
        return !0
      }
      intersectsBox(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(MM.minimum, MM.maximum, rM)
      }
      intersectsSphere(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = MM.center.x - this.origin.x,
          OM = MM.center.y - this.origin.y,
          SM = MM.center.z - this.origin.z,
          jM = iM * iM + OM * OM + SM * SM,
          aM = MM.radius + rM,
          PM = aM * aM;
        if (jM <= PM) return !0;
        const nM = iM * this.direction.x + OM * this.direction.y + SM * this.direction.z;
        if (nM < 0) return !1;
        return jM - nM * nM <= PM
      }
      intersectsTriangle(MM, rM, iM) {
        const OM = LM._TmpVector3[0],
          jM = LM._TmpVector3[1],
          PM = LM._TmpVector3[2],
          nM = LM._TmpVector3[3],
          QM = LM._TmpVector3[4];
        rM.subtractToRef(MM, OM), iM.subtractToRef(MM, jM), SM.q.CrossToRef(this.direction, jM, PM);
        const zM = SM.q.Dot(OM, PM);
        if (0 === zM) return null;
        const mM = 1 / zM;
        this.origin.subtractToRef(MM, nM);
        const HM = SM.q.Dot(nM, PM) * mM;
        if (HM < -this.epsilon || HM > 1 + this.epsilon) return null;
        SM.q.CrossToRef(nM, OM, QM);
        const hM = SM.q.Dot(this.direction, QM) * mM;
        if (hM < -this.epsilon || HM + hM > 1 + this.epsilon) return null;
        const JM = SM.q.Dot(jM, QM) * mM;
        return JM > this.length || JM < 0 ? null : new aM.c(1 - HM - hM, HM, JM)
      }
      intersectsPlane(MM) {
        let rM;
        const iM = SM.q.Dot(MM.normal, this.direction);
        if (Math.abs(iM) < 9.99999997475243e-7) return null;
        {
          const OM = SM.q.Dot(MM.normal, this.origin);
          return rM = (-MM.d - OM) / iM, rM < 0 ? rM < -9.99999997475243e-7 ? null : 0 : rM
        }
      }
      intersectsAxis(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (MM) {
          case "y": {
            const MM = (this.origin.y - rM) / this.direction.y;
            return MM > 0 ? null : new SM.q(this.origin.x + this.direction.x * -MM, rM, this.origin.z + this.direction.z * -MM)
          }
          case "x": {
            const MM = (this.origin.x - rM) / this.direction.x;
            return MM > 0 ? null : new SM.q(rM, this.origin.y + this.direction.y * -MM, this.origin.z + this.direction.z * -MM)
          }
          case "z": {
            const MM = (this.origin.z - rM) / this.direction.z;
            return MM > 0 ? null : new SM.q(this.origin.x + this.direction.x * -MM, this.origin.y + this.direction.y * -MM, rM)
          }
          default:
            return null
        }
      }
      iSM(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          jM = arguments.length > 4 ? arguments[4] : void 0,
          aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const PM = SM.l.Matrix[0];
        return MM.getWorldMatrix().invertToRef(PM), this._tmpRay ? LM.TransformToRef(this, PM, this._tmpRay) : this._tmpRay = LM.Transform(this, PM), MM.intersects(this._tmpRay, rM, iM, OM, jM, aM)
      }
      intersectsMeshes(MM, rM, iM) {
        iM ? iM.length = 0 : iM = [];
        for (let OM = 0; OM < MM.length; OM++) {
          const SM = this.iSM(MM[OM], rM);
          SM.hit && iM.push(SM)
        }
        return iM.sort(this._comparePickingInfo), iM
      }
      _comparePickingInfo(MM, rM) {
        return MM.distance < rM.distance ? -1 : MM.distance > rM.distance ? 1 : 0
      }
      intersectionSegment(MM, rM, iM) {
        const OM = this.origin,
          jM = SM.l.sh[0],
          aM = SM.l.sh[1],
          PM = SM.l.sh[2],
          nM = SM.l.sh[3];
        rM.subtractToRef(MM, jM), this.direction.scaleToRef(LM._Rayl, PM), OM.addToRef(PM, aM), MM.subtractToRef(OM, nM);
        const QM = SM.q.Dot(jM, jM),
          zM = SM.q.Dot(jM, PM),
          mM = SM.q.Dot(PM, PM),
          HM = SM.q.Dot(jM, nM),
          hM = SM.q.Dot(PM, nM),
          JM = QM * mM - zM * zM;
        let dM, yM, lM = JM,
          EM = JM;
        JM < LM._Smallnum ? (dM = 0, lM = 1, yM = hM, EM = mM) : (dM = zM * hM - mM * HM, yM = QM * hM - zM * HM, dM < 0 ? (dM = 0, yM = hM, EM = mM) : dM > lM && (dM = lM, yM = hM + zM, EM = mM)), yM < 0 ? (yM = 0, -HM < 0 ? dM = 0 : -HM > QM ? dM = lM : (dM = -HM, lM = QM)) : yM > EM && (yM = EM, -HM + zM < 0 ? dM = 0 : -HM + zM > QM ? dM = lM : (dM = -HM + zM, lM = QM));
        const UM = Math.abs(dM) < LM._Smallnum ? 0 : dM / lM,
          GM = Math.abs(yM) < LM._Smallnum ? 0 : yM / EM,
          CM = SM.l.sh[4];
        PM.scaleToRef(GM, CM);
        const eM = SM.l.sh[5];
        jM.scaleToRef(UM, eM), eM.addInPlace(nM);
        const bM = SM.l.sh[6];
        eM.subtractToRef(CM, bM);
        return GM > 0 && GM <= this.length && bM.lengthSquared() < iM * iM ? eM.length() : -1
      }
      update(MM, rM, iM, OM, jM, aM, PM) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          LM._RayDistant || (LM._RayDistant = LM.Zero()), LM._RayDistant.unprojectRayToRef(MM, rM, iM, OM, SM.d.IdentityReadOnly, aM, PM);
          const nM = SM.l.Matrix[0];
          jM.invertToRef(nM), LM.TransformToRef(LM._RayDistant, nM, this)
        } else this.unprojectRayToRef(MM, rM, iM, OM, jM, aM, PM);
        return this
      }
      static Zero() {
        return new LM(SM.q.Zero(), SM.q.Zero())
      }
      static CreateNew(MM, rM, iM, OM, SM, jM, aM) {
        return LM.Zero().update(MM, rM, iM, OM, SM, jM, aM)
      }
      static CreateNewFromTo(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM.d.IdentityReadOnly;
        const OM = new LM(new SM.q(0, 0, 0), new SM.q(0, 0, 0));
        return LM.CreateFromToToRef(MM, rM, OM, iM)
      }
      static CreateFromToToRef(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SM.d.IdentityReadOnly;
        iM.origin.jR(MM);
        const jM = rM.subtractToRef(MM, iM.direction),
          aM = Math.sqrt(jM.x * jM.x + jM.y * jM.y + jM.z * jM.z);
        return iM.length = aM, iM.direction.normalize(), LM.TransformToRef(iM, OM, iM)
      }
      static Transform(MM, rM) {
        const iM = new LM(new SM.q(0, 0, 0), new SM.q(0, 0, 0));
        return LM.TransformToRef(MM, rM, iM), iM
      }
      static TransformToRef(MM, rM, iM) {
        SM.q.TransformCoordinatesToRef(MM.origin, rM, iM.origin), SM.q.TransformNormalToRef(MM.direction, rM, iM.direction), iM.length = MM.length, iM.epsilon = MM.epsilon;
        const OM = iM.direction,
          jM = OM.length();
        if (0 !== jM && 1 !== jM) {
          const MM = 1 / jM;
          OM.x *= MM, OM.y *= MM, OM.z *= MM, iM.length *= jM
        }
        return iM
      }
      unprojectRayToRef(MM, rM, iM, OM, jM, aM, PM) {
        const QM = SM.l.Matrix[0];
        jM.multiplyToRef(aM, QM), QM.multiplyToRef(PM, QM), QM.invert();
        const zM = nM.c.LastCreatedEngine,
          LM = SM.l.sh[0];
        LM.x = MM / iM * 2 - 1, LM.y = -(rM / OM * 2 - 1), LM.z = zM?.LOM ? 1 : zM?.isNDCHalfZRange ? 0 : -1;
        const mM = SM.l.sh[1].iMM(LM.x, LM.y, 1 - 1e-8),
          HM = SM.l.sh[2],
          hM = SM.l.sh[3];
        SM.q.TransformCoordinatesToRef(LM, QM, HM), SM.q.TransformCoordinatesToRef(mM, QM, hM), this.origin.jR(HM), hM.subtractToRef(HM, this.direction), this.direction.normalize()
      }
    }

    function mM(MM, rM, iM, OM, SM) {
      let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const aM = LM.Zero();
      return HM(MM, rM, iM, OM, aM, SM, jM), aM
    }

    function HM(MM, rM, iM, OM, jM, aM) {
      let PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        nM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const QM = MM.ph();
      if (!aM && !(aM = MM.activeCamera) && !(aM = MM.cameraToUseForPointers)) return MM;
      const zM = aM.viewport,
        LM = QM.getRenderHeight(),
        {
          x: mM,
          y: HM,
          width: hM,
          height: JM
        } = zM.toGlobal(QM.getRenderWidth(), LM),
        dM = 1 / QM.getHardwareScalingLevel();
      return rM = rM * dM - mM, iM = iM * dM - (LM - HM - JM), jM.update(rM, iM, hM, JM, OM || SM.d.IdentityReadOnly, PM ? SM.d.IdentityReadOnly : aM.getViewMatrix(), aM.getProjectionMatrix(), nM), MM
    }

    function hM(MM, rM, iM, OM) {
      const SM = LM.Zero();
      return JM(MM, rM, iM, SM, OM), SM
    }

    function JM(MM, rM, iM, OM, jM) {
      if (!PM.c) return MM;
      const aM = MM.ph();
      if (!jM && !(jM = MM.activeCamera) && !(jM = MM.cameraToUseForPointers)) throw new Error("Active camera not set");
      const nM = jM.viewport,
        QM = aM.getRenderHeight(),
        {
          x: zM,
          y: LM,
          width: mM,
          height: HM
        } = nM.toGlobal(aM.getRenderWidth(), QM),
        hM = SM.d.Identity(),
        JM = 1 / aM.getHardwareScalingLevel();
      return rM = rM * JM - zM, iM = iM * JM - (QM - LM - HM), OM.update(rM, iM, mM, HM, hM, hM, jM.getProjectionMatrix()), MM
    }

    function dM(MM, rM, iM, OM, SM, jM, aM, PM) {
      return yM(MM, iM, OM, rM(OM, iM.enableDistantPicking), SM, jM, aM, PM)
    }

    function yM(MM, rM, iM, OM, SM, jM, aM, PM) {
      const nM = rM.intersects(OM, SM, aM, jM, iM, PM);
      return nM && nM.hit ? !SM && null != MM && nM.distance >= MM.distance ? null : nM : null
    }

    function lM(MM, rM) {
      return "InstancedLinesMesh" === MM || "LinesMesh" === MM ? rM.intersectionThreshold : 0
    }

    function EM(MM) {
      const rM = MM.getClassName();
      if ("GreasedLineMesh" === rM) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const iM = MM.rawBoundingInfo;
      return {
        rawBoundingInfo: iM,
        intersectionThreshold: iM ? lM(rM, MM) : 0
      }
    }

    function UM(MM, rM, iM, OM, SM) {
      const jM = MM(iM, rM.enableDistantPicking);
      return jM.intersectsSphere(OM.YOM, SM) && jM.intersectsBox(OM.boundingBox, SM) ? jM : null
    }

    function GM(MM, rM, iM, OM, jM, aM) {
      let nM = null;
      const QM = !!(MM.activeCameras && MM.activeCameras.length > 1 && MM.cameraToUseForPointers !== MM.activeCamera),
        LM = MM.cameraToUseForPointers || MM.activeCamera,
        mM = zM.internalPickerForMesh || dM,
        HM = mM === dM;
      for (let PM = 0; PM < MM.meshes.length; PM++) {
        const zM = MM.meshes[PM];
        if (iM) {
          if (!iM(zM, -1)) continue
        } else if (!zM.isEnabled() || !zM.isVisible || !zM.AJ) continue;
        const hM = QM && zM.isWorldMatrixCameraDependent(),
          JM = zM.computeWorldMatrix(hM, LM);
        if (zM.hasThinInstances && zM.krM) {
          const MM = mM(nM, rM, zM, JM, !0, !0, aM);
          if (MM) {
            if (jM) return MM;
            const {
              rawBoundingInfo: PM,
              intersectionThreshold: QM
            } = EM(zM), LM = zM._thinInstanceDataStorage.matrixData;
            if (LM) {
              const MM = SM.l.Matrix[0],
                hM = SM.l.Matrix[1],
                dM = Math.min(zM.y_, LM.length >> 4);
              for (let lM = 0; lM < dM; lM++) {
                if (iM && !iM(zM, lM)) continue;
                SM.d.FromArrayToRef(LM, lM << 4, MM), MM.multiplyToRef(JM, hM);
                const dM = HM && PM ? UM(rM, zM, hM, PM, QM) : null;
                if (HM && PM && !dM) continue;
                const EM = HM && dM ? yM(nM, zM, hM, dM, OM, jM, aM, !0) : mM(nM, rM, zM, hM, OM, jM, aM, !0);
                if (EM && (nM = EM, nM.thinInstanceIndex = lM, OM)) return nM
              }
            }
          }
        } else {
          const MM = mM(nM, rM, zM, JM, OM, jM, aM);
          if (MM && (nM = MM, OM)) return nM
        }
      }
      return nM || new PM.c
    }

    function CM(MM, rM, iM, OM) {
      if (!PM.c) return null;
      const jM = [],
        aM = !!(MM.activeCameras && MM.activeCameras.length > 1 && MM.cameraToUseForPointers !== MM.activeCamera),
        nM = MM.cameraToUseForPointers || MM.activeCamera,
        QM = zM.internalPickerForMesh || dM,
        LM = QM === dM;
      for (let PM = 0; PM < MM.meshes.length; PM++) {
        const zM = MM.meshes[PM];
        if (iM) {
          if (!iM(zM, -1)) continue
        } else if (!zM.isEnabled() || !zM.isVisible || !zM.AJ) continue;
        const mM = aM && zM.isWorldMatrixCameraDependent(),
          HM = zM.computeWorldMatrix(mM, nM);
        if (zM.hasThinInstances && zM.krM) {
          if (QM(null, rM, zM, HM, !0, !0, OM)) {
            const {
              rawBoundingInfo: MM,
              intersectionThreshold: aM
            } = EM(zM), PM = zM._thinInstanceDataStorage.matrixData;
            if (PM) {
              const nM = SM.l.Matrix[0],
                mM = SM.l.Matrix[1],
                hM = Math.min(zM.y_, PM.length >> 4);
              for (let JM = 0; JM < hM; JM++) {
                if (iM && !iM(zM, JM)) continue;
                SM.d.FromArrayToRef(PM, JM << 4, nM), nM.multiplyToRef(HM, mM);
                const hM = LM && MM ? UM(rM, zM, mM, MM, aM) : null;
                if (LM && MM && !hM) continue;
                const dM = LM && hM ? yM(null, zM, mM, hM, !1, !1, OM, !0) : QM(null, rM, zM, mM, !1, !1, OM, !0);
                dM && (dM.thinInstanceIndex = JM, jM.push(dM))
              }
            }
          }
        } else {
          const MM = QM(null, rM, zM, HM, !1, !1, OM);
          MM && jM.push(MM)
        }
      }
      return jM
    }

    function eM(MM, rM, iM, OM, jM, aM) {
      if (!PM.c) return null;
      const nM = GM(MM, (OM => (MM._tempPickingRay || (MM._tempPickingRay = LM.Zero()), HM(MM, rM, iM, OM, MM._tempPickingRay, aM || null), MM._tempPickingRay)), OM, jM, !0);
      return nM && (nM.ray = mM(MM, rM, iM, SM.d.Identity(), aM || null)), nM
    }

    function bM(MM, rM, iM, OM, jM, aM, PM) {
      const nM = GM(MM, ((OM, SM) => (MM._tempPickingRay || (MM._tempPickingRay = LM.Zero()), HM(MM, rM, iM, OM, MM._tempPickingRay, aM || null, !1, SM), MM._tempPickingRay)), OM, jM, !1, PM);
      return nM && (nM.ray = mM(MM, rM, iM, SM.d.Identity(), aM || null)), nM
    }

    function wM(MM, rM, iM, OM, jM) {
      const aM = GM(MM, (iM => (MM._pickWithRayInverseMatrix || (MM._pickWithRayInverseMatrix = SM.d.Identity()), iM.invertToRef(MM._pickWithRayInverseMatrix), MM._cachedRayForTransform || (MM._cachedRayForTransform = LM.Zero()), LM.TransformToRef(rM, MM._pickWithRayInverseMatrix, MM._cachedRayForTransform), MM._cachedRayForTransform)), iM, OM, !1, jM);
      return aM && (aM.ray = rM), aM
    }

    function tM(MM, rM, iM, OM, SM, jM) {
      return CM(MM, (OM => mM(MM, rM, iM, OM, SM || null)), OM, jM)
    }

    function gM(MM, rM, iM, OM) {
      return CM(MM, (iM => (MM._pickWithRayInverseMatrix || (MM._pickWithRayInverseMatrix = SM.d.Identity()), iM.invertToRef(MM._pickWithRayInverseMatrix), MM._cachedRayForTransform || (MM._cachedRayForTransform = LM.Zero()), LM.TransformToRef(rM, MM._pickWithRayInverseMatrix, MM._cachedRayForTransform), MM._cachedRayForTransform)), iM, OM)
    }

    function uM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        OM = arguments.length > 3 ? arguments[3] : void 0,
        jM = arguments.length > 4 ? arguments[4] : void 0;
      OM || (OM = MM.getWorldMatrix()), rM.length = iM, jM ? rM.origin.jR(jM) : rM.origin.jR(MM.position);
      const aM = SM.l.sh[2];
      aM.set(0, 0, MM._scene.useRightHandedSystem ? -1 : 1);
      const PM = SM.l.sh[3];
      return SM.q.TransformNormalToRef(aM, OM, PM), SM.q.NormalizeToRef(PM, rM.direction), rM
    }

    function RM(MM, rM) {
      rM && (rM.prototype.getForwardRay = function() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        return uM(this, new LM(SM.q.Zero(), SM.q.Zero(), MM), MM, rM, iM)
      }, rM.prototype.getForwardRayToRef = function(MM) {
        return uM(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), MM && (QM.b._IsPickingAvailable = !0, MM.prototype.createPickingRay = function(MM, rM, iM, OM) {
        return mM(this, MM, rM, iM, OM, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    LM._TmpVector3 = (0, jM.c)(6, SM.q.Zero), LM._RayDistant = LM.Zero(), LM._Smallnum = 1e-8, LM._Rayl = 1e9
  },
  44206: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM.z
    });
    var OM = iM(41196),
      SM = iM(41323),
      jM = iM(44214);
    let aM = !1;
    aM || (aM = !0, (0, jM.b)(OM.d, SM.b), OM.d.prototype.createPickingRayToRef = function(MM, rM, iM, OM, SM) {
      let aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, jM.i)(this, MM, rM, iM, OM, SM, aM, PM)
    }, OM.d.prototype.createPickingRayInCameraSpace = function(MM, rM, iM) {
      return (0, jM.h)(this, MM, rM, iM)
    }, OM.d.prototype.createPickingRayInCameraSpaceToRef = function(MM, rM, iM, OM) {
      return (0, jM.d)(this, MM, rM, iM, OM)
    }, OM.d.prototype.pickWithBoundingInfo = function(MM, rM, iM, OM, SM) {
      return (0, jM.q)(this, MM, rM, iM, OM, SM)
    }, OM.d.prototype.LH = function(MM, rM, iM, OM, SM, aM) {
      let PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, jM.x)(this, MM, rM, iM, OM, SM, aM, PM)
    }, OM.d.prototype.pickWithRay = function(MM, rM, iM, OM) {
      return (0, jM.t)(this, MM, rM, iM, OM)
    }, OM.d.prototype.multiPick = function(MM, rM, iM, OM, SM) {
      return (0, jM.n)(this, MM, rM, iM, OM, SM)
    }, OM.d.prototype.multiPickWithRay = function(MM, rM, iM) {
      return (0, jM.m)(this, MM, rM, iM)
    })
  },
  44220: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38040),
      aM = iM(41366),
      PM = iM(44229),
      nM = iM(41328),
      QM = iM(38085);
    let zM = (() => {
        var MM;
        let rM, iM, nM, QM, zM, LM, mM, HM, hM = PM.d,
          JM = [],
          dM = [],
          yM = [],
          lM = [],
          EM = [],
          UM = [],
          GM = [],
          CM = [],
          eM = [],
          bM = [],
          wM = [],
          tM = [],
          gM = [];
        return MM = class extends hM {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(MM) {
            this._shadowFrustumSize = MM, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(MM) {
            this._shadowOrthoScale = MM, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(MM) {
            this._orthoLeft = MM
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(MM) {
            this._orthoRight = MM
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(MM) {
            this._orthoTop = MM
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(MM) {
            this._orthoBottom = MM
          }
          constructor(MM, rM, iM, SM) {
            super(MM, iM, SM), this._shadowFrustumSize = ((0, OM.m)(this, JM), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, OM.m)(this, dM, !0), this.autoCalcShadowZBounds = ((0, OM.m)(this, yM), (0, OM.m)(this, lM, !1)), this._orthoLeft = ((0, OM.m)(this, EM), (0, OM.m)(this, UM, Number.MAX_VALUE)), this._orthoRight = ((0, OM.m)(this, GM), (0, OM.m)(this, CM, Number.MIN_VALUE)), this._orthoTop = ((0, OM.m)(this, eM), (0, OM.m)(this, bM, Number.MIN_VALUE)), this._orthoBottom = ((0, OM.m)(this, wM), (0, OM.m)(this, tM, Number.MAX_VALUE)), (0, OM.m)(this, gM), this.position = rM.scale(-1), this.direction = rM
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return aM.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(MM, rM, iM) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(MM) : this._setDefaultAutoExtendShadowProjectionMatrix(MM, rM, iM)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(MM) {
            const rM = this.Hk().activeCamera;
            jM.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : rM ? rM.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : rM ? rM.maxZ : 1e4, MM, this.Hk().ph().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(MM, rM, iM) {
            const OM = this.Hk().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const MM = jM.q.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let OM = Number.MAX_VALUE,
                SM = -Number.MAX_VALUE;
              for (let aM = 0; aM < iM.length; aM++) {
                const PM = iM[aM];
                if (!PM) continue;
                const nM = PM.aY().boundingBox;
                for (let iM = 0; iM < nM.vectorsWorld.length; iM++) jM.q.TransformCoordinatesToRef(nM.vectorsWorld[iM], rM, MM), MM.x < this._orthoLeft && (this._orthoLeft = MM.x), MM.y < this._orthoBottom && (this._orthoBottom = MM.y), MM.x > this._orthoRight && (this._orthoRight = MM.x), MM.y > this._orthoTop && (this._orthoTop = MM.y), this.autoCalcShadowZBounds && (MM.z < OM && (OM = MM.z), MM.z > SM && (SM = MM.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = OM, this._shadowMaxZ = SM)
            }
            const SM = this._orthoRight - this._orthoLeft,
              aM = this._orthoTop - this._orthoBottom,
              PM = void 0 !== this.shadowMinZ ? this.shadowMinZ : OM?.minZ || 0,
              nM = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : OM?.maxZ || 1e4,
              QM = this.Hk().ph().LOM;
            jM.d.OrthoOffCenterLHToRef(this._orthoLeft - SM * this.shadowOrthoScale, this._orthoRight + SM * this.shadowOrthoScale, this._orthoBottom - aM * this.shadowOrthoScale, this._orthoTop + aM * this.shadowOrthoScale, QM ? nM : PM, QM ? PM : nM, MM, this.Hk().ph().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(MM, rM) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, rM), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, rM), this)
          }
          transferToNodeMaterialEffect(MM, rM) {
            return this.computeTransformedInformation() ? (MM.setFloat3(rM, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (MM.setFloat3(rM, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(MM) {
            const rM = this._scene.ph();
            return !rM.LOM && rM.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(MM) {
            const rM = this._scene.ph();
            return rM.LOM && rM.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(MM, rM) {
            MM["DIRLIGHT" + rM] = !0
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(hM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.L)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], zM = [(0, SM.L)("orthoLeft")], LM = [(0, SM.L)("orthoRight")], mM = [(0, SM.L)("orthoTop")], HM = [(0, SM.L)("orthoBottom")], (0, OM.i)(MM, null, rM, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: MM => "shadowFrustumSize" in MM,
              get: MM => MM.shadowFrustumSize
            },
            metadata: jM
          }, null, JM), (0, OM.i)(MM, null, iM, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: MM => "shadowOrthoScale" in MM,
              get: MM => MM.shadowOrthoScale
            },
            metadata: jM
          }, null, JM), (0, OM.i)(null, null, nM, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: MM => "autoUpdateExtends" in MM,
              get: MM => MM.autoUpdateExtends,
              set: (MM, rM) => {
                MM.autoUpdateExtends = rM
              }
            },
            metadata: jM
          }, dM, yM), (0, OM.i)(null, null, QM, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: MM => "autoCalcShadowZBounds" in MM,
              get: MM => MM.autoCalcShadowZBounds,
              set: (MM, rM) => {
                MM.autoCalcShadowZBounds = rM
              }
            },
            metadata: jM
          }, lM, EM), (0, OM.i)(null, null, zM, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: MM => "_orthoLeft" in MM,
              get: MM => MM._orthoLeft,
              set: (MM, rM) => {
                MM._orthoLeft = rM
              }
            },
            metadata: jM
          }, UM, GM), (0, OM.i)(null, null, LM, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: MM => "_orthoRight" in MM,
              get: MM => MM._orthoRight,
              set: (MM, rM) => {
                MM._orthoRight = rM
              }
            },
            metadata: jM
          }, CM, eM), (0, OM.i)(null, null, mM, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: MM => "_orthoTop" in MM,
              get: MM => MM._orthoTop,
              set: (MM, rM) => {
                MM._orthoTop = rM
              }
            },
            metadata: jM
          }, bM, wM), (0, OM.i)(null, null, HM, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: MM => "_orthoBottom" in MM,
              get: MM => MM._orthoBottom,
              set: (MM, rM) => {
                MM._orthoBottom = rM
              }
            },
            metadata: jM
          }, tM, gM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      LM = !1;
    LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_1", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.DirectionalLight", zM))
  },
  39748: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      c: () => jM,
      e: () => aM,
      i: () => PM
    });
    var OM = iM(38173);
    class SM {
      constructor(MM, rM, iM) {
        this.gradient = MM, this.color1 = rM, this.color2 = iM
      }
      getColorToRef(MM) {
        this.color2 ? OM.h.LerpToRef(this.color1, this.color2, Math.random(), MM) : MM.jR(this.color1)
      }
    }
    class jM {
      constructor(MM, rM) {
        this.gradient = MM, this.color = rM
      }
    }
    class aM {
      constructor(MM, rM, iM) {
        this.gradient = MM, this.factor1 = rM, this.factor2 = iM
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class PM {
      static GetCurrentGradient(MM, rM, iM) {
        if (rM[0].gradient > MM) return void iM(rM[0], rM[0], 1);
        for (let SM = 0; SM < rM.length - 1; SM++) {
          const OM = rM[SM],
            jM = rM[SM + 1];
          if (MM >= OM.gradient && MM <= jM.gradient) {
            return void iM(OM, jM, (MM - OM.gradient) / (jM.gradient - OM.gradient))
          }
        }
        const OM = rM.length - 1;
        iM(rM[OM], rM[OM], 1)
      }
    }
  },
  39756: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(39705);
    class aM {
      constructor() {
        this.direction1 = new OM.q(0, 1, 0), this.direction2 = new OM.q(0, 1, 0), this.minEmitBox = new OM.q(-.5, -.5, -.5), this.maxEmitBox = new OM.q(.5, .5, .5)
      }
      startDirectionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(this.direction1.x, this.direction2.x),
          PM = (0, SM.RandomRange)(this.direction1.y, this.direction2.y),
          nM = (0, SM.RandomRange)(this.direction1.z, this.direction2.z);
        if (jM) return rM.x = aM, rM.y = PM, void(rM.z = nM);
        OM.q.TransformNormalFromFloatsToRef(aM, PM, nM, MM, rM)
      }
      startPositionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          PM = (0, SM.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          nM = (0, SM.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (jM) return rM.x = aM, rM.y = PM, void(rM.z = nM);
        OM.q.TransformCoordinatesFromFloatsToRef(aM, PM, nM, MM, rM)
      }
      clone() {
        const MM = new aM;
        return jM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2), MM.setVector3("minEmitBox", this.minEmitBox), MM.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(MM) {
        MM.addUniform("direction1", 3), MM.addUniform("direction2", 3), MM.addUniform("minEmitBox", 3), MM.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM.minEmitBox = this.minEmitBox.HOM(), MM.maxEmitBox = this.maxEmitBox.HOM(), MM
      }
      parse(MM) {
        OM.q.FromArrayToRef(MM.direction1, 0, this.direction1), OM.q.FromArrayToRef(MM.direction2, 0, this.direction2), OM.q.FromArrayToRef(MM.minEmitBox, 0, this.minEmitBox), OM.q.FromArrayToRef(MM.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39700: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => aM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(39705);
    class aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = MM, this.height = rM, this.radiusRange = iM, this.directionRandomizer = SM, this._tempVector = OM.q.Zero()
      }
      startDirectionFunction(MM, rM, iM, jM, aM) {
        iM.position.subtractToRef(MM.getTranslation(), this._tempVector), this._tempVector.normalize(), OM.q.TransformNormalToRef(this._tempVector, aM, this._tempVector);
        const PM = (0, SM.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let nM = Math.atan2(this._tempVector.x, this._tempVector.z);
        nM += (0, SM.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = PM, this._tempVector.x = Math.sin(nM), this._tempVector.z = Math.cos(nM), this._tempVector.normalize(), jM ? rM.jR(this._tempVector) : OM.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, MM, rM)
      }
      startPositionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(-this.height / 2, this.height / 2),
          PM = (0, SM.RandomRange)(0, 2 * Math.PI),
          nM = (0, SM.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          QM = Math.sqrt(nM) * this.radius,
          zM = QM * Math.cos(PM),
          LM = QM * Math.sin(PM);
        jM ? rM.iMM(zM, aM, LM) : OM.q.TransformCoordinatesFromFloatsToRef(zM, aM, LM, MM, rM)
      }
      clone() {
        const MM = new aM(this.radius, this.directionRandomizer);
        return jM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("height", this.height), MM.setFloat("radiusRange", this.radiusRange), MM.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("height", 1), MM.addUniform("radiusRange", 1), MM.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.radius = this.radius, MM.height = this.height, MM.radiusRange = this.radiusRange, MM.directionRandomizer = this.directionRandomizer, MM
      }
      parse(MM) {
        this.radius = MM.radius, this.height = MM.height, this.radiusRange = MM.radiusRange, this.directionRandomizer = MM.directionRandomizer
      }
    }
    class PM extends aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new OM.q(0, 1, 0),
          jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new OM.q(0, 1, 0);
        super(MM, rM, iM), this.direction1 = SM, this.direction2 = jM
      }
      startDirectionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(this.direction1.x, this.direction2.x),
          PM = (0, SM.RandomRange)(this.direction1.y, this.direction2.y),
          nM = (0, SM.RandomRange)(this.direction1.z, this.direction2.z);
        jM ? rM.iMM(aM, PM, nM) : OM.q.TransformNormalFromFloatsToRef(aM, PM, nM, MM, rM)
      }
      clone() {
        const MM = new PM(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return jM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("height", this.height), MM.setFloat("radiusRange", this.radiusRange), MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("height", 1), MM.addUniform("radiusRange", 1), MM.addUniform("direction1", 3), MM.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const MM = super.serialize();
        return MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM
      }
      parse(MM) {
        super.parse(MM), OM.q.FromArrayToRef(MM.direction1, 0, this.direction1), OM.q.FromArrayToRef(MM.direction2, 0, this.direction2)
      }
    }
  },
  44237: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => Br
    });
    var OM = iM(39748),
      SM = iM(38068),
      jM = iM(38040),
      aM = iM(41250),
      PM = iM(44239),
      nM = iM(38064),
      QM = iM(41386),
      zM = iM(38173),
      LM = iM(39756),
      mM = iM(39705),
      HM = iM(38074);
    class hM {
      constructor() {
        this.direction1 = new jM.q(0, 1, 0), this.direction2 = new jM.q(0, 1, 0)
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = (0, HM.RandomRange)(this.direction1.x, this.direction2.x),
          aM = (0, HM.RandomRange)(this.direction1.y, this.direction2.y),
          PM = (0, HM.RandomRange)(this.direction1.z, this.direction2.z);
        OM ? rM.iMM(SM, aM, PM) : jM.q.TransformNormalFromFloatsToRef(SM, aM, PM, MM, rM)
      }
      startPositionFunction(MM, rM, iM, OM) {
        OM ? rM.iMM(0, 0, 0) : jM.q.TransformCoordinatesFromFloatsToRef(0, 0, 0, MM, rM)
      }
      clone() {
        const MM = new hM;
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(MM) {
        MM.addUniform("direction1", 3), MM.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM
      }
      parse(MM) {
        jM.q.FromArrayToRef(MM.direction1, 0, this.direction1), jM.q.FromArrayToRef(MM.direction2, 0, this.direction2)
      }
    }
    class JM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = MM, this.radiusRange = rM, this.directionRandomizer = iM
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = iM.position.subtract(MM.getTranslation()).normalize(),
          aM = (0, HM.RandomRange)(0, this.directionRandomizer),
          PM = (0, HM.RandomRange)(0, this.directionRandomizer),
          nM = (0, HM.RandomRange)(0, this.directionRandomizer);
        SM.x += aM, SM.y += PM, SM.z += nM, SM.normalize(), OM ? rM.jR(SM) : jM.q.TransformNormalFromFloatsToRef(SM.x, SM.y, SM.z, MM, rM)
      }
      startPositionFunction(MM, rM, iM, OM) {
        const SM = this.radius - (0, HM.RandomRange)(0, this.radius * this.radiusRange),
          aM = (0, HM.RandomRange)(0, 1),
          PM = (0, HM.RandomRange)(0, 2 * Math.PI),
          nM = Math.acos(2 * aM - 1),
          QM = SM * Math.cos(PM) * Math.sin(nM),
          zM = SM * Math.cos(nM),
          LM = SM * Math.sin(PM) * Math.sin(nM);
        OM ? rM.iMM(QM, Math.abs(zM), LM) : jM.q.TransformCoordinatesFromFloatsToRef(QM, Math.abs(zM), LM, MM, rM)
      }
      clone() {
        const MM = new JM(this.radius, this.directionRandomizer);
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("radiusRange", this.radiusRange), MM.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("radiusRange", 1), MM.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.radius = this.radius, MM.radiusRange = this.radiusRange, MM.directionRandomizer = this.directionRandomizer, MM
      }
      parse(MM) {
        this.radius = MM.radius, this.radiusRange = MM.radiusRange, this.directionRandomizer = MM.directionRandomizer
      }
    }
    class dM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = MM, this.radiusRange = rM, this.directionRandomizer = iM
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = iM.position.subtract(MM.getTranslation()).normalize(),
          aM = (0, HM.RandomRange)(0, this.directionRandomizer),
          PM = (0, HM.RandomRange)(0, this.directionRandomizer),
          nM = (0, HM.RandomRange)(0, this.directionRandomizer);
        SM.x += aM, SM.y += PM, SM.z += nM, SM.normalize(), OM ? rM.jR(SM) : jM.q.TransformNormalFromFloatsToRef(SM.x, SM.y, SM.z, MM, rM)
      }
      startPositionFunction(MM, rM, iM, OM) {
        const SM = this.radius - (0, HM.RandomRange)(0, this.radius * this.radiusRange),
          aM = (0, HM.RandomRange)(0, 1),
          PM = (0, HM.RandomRange)(0, 2 * Math.PI),
          nM = Math.acos(2 * aM - 1),
          QM = SM * Math.cos(PM) * Math.sin(nM),
          zM = SM * Math.cos(nM),
          LM = SM * Math.sin(PM) * Math.sin(nM);
        OM ? rM.iMM(QM, zM, LM) : jM.q.TransformCoordinatesFromFloatsToRef(QM, zM, LM, MM, rM)
      }
      clone() {
        const MM = new dM(this.radius, this.directionRandomizer);
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("radiusRange", this.radiusRange), MM.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("radiusRange", 1), MM.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.radius = this.radius, MM.radiusRange = this.radiusRange, MM.directionRandomizer = this.directionRandomizer, MM
      }
      parse(MM) {
        this.radius = MM.radius, this.radiusRange = MM.radiusRange, this.directionRandomizer = MM.directionRandomizer
      }
    }
    class yM extends dM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new jM.q(0, 1, 0),
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jM.q(0, 1, 0);
        super(MM), this.direction1 = rM, this.direction2 = iM
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = (0, HM.RandomRange)(this.direction1.x, this.direction2.x),
          aM = (0, HM.RandomRange)(this.direction1.y, this.direction2.y),
          PM = (0, HM.RandomRange)(this.direction1.z, this.direction2.z);
        OM ? rM.iMM(SM, aM, PM) : jM.q.TransformNormalFromFloatsToRef(SM, aM, PM, MM, rM)
      }
      clone() {
        const MM = new yM(this.radius, this.direction1, this.direction2);
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("radiusRange", this.radiusRange), MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("radiusRange", 1), MM.addUniform("direction1", 3), MM.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const MM = super.serialize();
        return MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM
      }
      parse(MM) {
        super.parse(MM), jM.q.FromArrayToRef(MM.direction1, 0, this.direction1), jM.q.FromArrayToRef(MM.direction2, 0, this.direction2)
      }
    }
    var lM = iM(39700);
    class EM {
      get radius() {
        return this._radius
      }
      set radius(MM) {
        this._radius = MM, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(MM) {
        this._angle = MM, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = iM, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = rM, this.radius = MM
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = iM.position.subtract(MM.getTranslation()).normalize(),
          aM = (0, HM.RandomRange)(0, this.directionRandomizer),
          PM = (0, HM.RandomRange)(0, this.directionRandomizer),
          nM = (0, HM.RandomRange)(0, this.directionRandomizer);
        SM.x += aM, SM.y += PM, SM.z += nM, SM.normalize(), OM ? rM.jR(SM) : jM.q.TransformNormalFromFloatsToRef(SM.x, SM.y, SM.z, MM, rM)
      }
      startPositionFunction(MM, rM, iM, OM) {
        const SM = (0, HM.RandomRange)(0, 2 * Math.PI);
        let aM;
        this.emitFromSpawnPointOnly ? aM = 1e-4 : (aM = (0, HM.RandomRange)(0, this.heightRange), aM = 1 - aM * aM);
        let PM = this._radius - (0, HM.RandomRange)(0, this._radius * this.radiusRange);
        PM *= aM;
        const nM = PM * Math.sin(SM),
          QM = PM * Math.cos(SM),
          zM = aM * this._height;
        if (OM) return rM.x = nM, rM.y = zM, void(rM.z = QM);
        jM.q.TransformCoordinatesFromFloatsToRef(nM, zM, QM, MM, rM)
      }
      clone() {
        const MM = new EM(this._radius, this._angle, this.directionRandomizer);
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat2("radius", this._radius, this.radiusRange), MM.setFloat("coneAngle", this._angle), MM.setFloat2("height", this._height, this.heightRange), MM.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 2), MM.addUniform("coneAngle", 1), MM.addUniform("height", 2), MM.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let MM = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (MM += "\n#define CONEEMITTERSPAWNPOINT"), MM
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.radius = this._radius, MM.angle = this._angle, MM.directionRandomizer = this.directionRandomizer, MM.radiusRange = this.radiusRange, MM.heightRange = this.heightRange, MM.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, MM
      }
      parse(MM) {
        this.radius = MM.radius, this.angle = MM.angle, this.directionRandomizer = MM.directionRandomizer, this.radiusRange = void 0 !== MM.radiusRange ? MM.radiusRange : 1, this.heightRange = void 0 !== MM.heightRange ? MM.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== MM.emitFromSpawnPointOnly && MM.emitFromSpawnPointOnly
      }
    }
    class UM extends EM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jM.q(0, 1, 0),
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jM.q(0, 1, 0);
        super(MM, rM), this.direction1 = iM, this.direction2 = OM
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = (0, HM.RandomRange)(this.direction1.x, this.direction2.x),
          aM = (0, HM.RandomRange)(this.direction1.y, this.direction2.y),
          PM = (0, HM.RandomRange)(this.direction1.z, this.direction2.z);
        OM ? rM.iMM(SM, aM, PM) : jM.q.TransformNormalFromFloatsToRef(SM, aM, PM, MM, rM)
      }
      clone() {
        const MM = new UM(this.radius, this.angle, this.direction1, this.direction2);
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        super.applyToShader(MM), MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(MM) {
        super.buildUniformLayout(MM), MM.addUniform("direction1", 3), MM.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const MM = super.serialize();
        return MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM
      }
      parse(MM) {
        super.parse(MM), jM.q.FromArrayToRef(MM.direction1, 0, this.direction1), jM.q.FromArrayToRef(MM.direction2, 0, this.direction2)
      }
    }
    class GM {
      get mesh() {
        return this._mesh
      }
      set mesh(MM) {
        this._mesh !== MM && (this._mesh = MM, MM ? (this._indices = MM.hOM(), this._positions = MM.getVerticesData(aM.j.PositionKind), this._normals = MM.getVerticesData(aM.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = jM.q.Zero(), this._mesh = null, this.direction1 = new jM.q(0, 1, 0), this.direction2 = new jM.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = MM
      }
      startDirectionFunction(MM, rM, iM, OM) {
        if (this.useMeshNormalsForDirection && this._normals) return void jM.q.TransformNormalToRef(this._storedNormal, MM, rM);
        const SM = (0, HM.RandomRange)(this.direction1.x, this.direction2.x),
          aM = (0, HM.RandomRange)(this.direction1.y, this.direction2.y),
          PM = (0, HM.RandomRange)(this.direction1.z, this.direction2.z);
        OM ? rM.iMM(SM, aM, PM) : jM.q.TransformNormalFromFloatsToRef(SM, aM, PM, MM, rM)
      }
      startPositionFunction(MM, rM, iM, OM) {
        if (!this._indices || !this._positions) return;
        const SM = 3 * (Math.random() * (this._indices.length / 3) | 0),
          aM = Math.random(),
          PM = Math.random() * (1 - aM),
          nM = 1 - aM - PM,
          QM = this._indices[SM],
          zM = this._indices[SM + 1],
          LM = this._indices[SM + 2],
          mM = jM.l.sh[0],
          HM = jM.l.sh[1],
          hM = jM.l.sh[2],
          JM = jM.l.sh[3];
        jM.q.FromArrayToRef(this._positions, 3 * QM, mM), jM.q.FromArrayToRef(this._positions, 3 * zM, HM), jM.q.FromArrayToRef(this._positions, 3 * LM, hM), JM.x = aM * mM.x + PM * HM.x + nM * hM.x, JM.y = aM * mM.y + PM * HM.y + nM * hM.y, JM.z = aM * mM.z + PM * HM.z + nM * hM.z, OM ? rM.iMM(JM.x, JM.y, JM.z) : jM.q.TransformCoordinatesFromFloatsToRef(JM.x, JM.y, JM.z, MM, rM), this.useMeshNormalsForDirection && this._normals && (jM.q.FromArrayToRef(this._normals, 3 * QM, mM), jM.q.FromArrayToRef(this._normals, 3 * zM, HM), jM.q.FromArrayToRef(this._normals, 3 * LM, hM), this._storedNormal.x = aM * mM.x + PM * HM.x + nM * hM.x, this._storedNormal.y = aM * mM.y + PM * HM.y + nM * hM.y, this._storedNormal.z = aM * mM.z + PM * HM.z + nM * hM.z)
      }
      clone() {
        const MM = new GM(this.mesh);
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(MM) {
        MM.addUniform("direction1", 3), MM.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM.meshId = this.mesh?.id, MM.useMeshNormalsForDirection = this.useMeshNormalsForDirection, MM
      }
      parse(MM, rM) {
        jM.q.FromArrayToRef(MM.direction1, 0, this.direction1), jM.q.FromArrayToRef(MM.direction2, 0, this.direction2), MM.meshId && rM && (this.mesh = rM.getLastMeshById(MM.meshId)), this.useMeshNormalsForDirection = MM.useMeshNormalsForDirection
      }
    }
    class CM {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(MM) {
        this._targetStopDuration !== MM && (this._targetStopDuration = MM)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(MM) {
        this._noiseTexture !== MM && (this._noiseTexture = MM, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(MM) {
        this._attractors.push(MM)
      }
      removeAttractor(MM) {
        const rM = this._attractors.indexOf(MM); - 1 !== rM && this._attractors.splice(rM, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(MM) {
        this._animationSheetEnabled !== MM && (this._animationSheetEnabled = MM)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(MM) {
        this._isAnimationSheetEnabled != MM && (this._isAnimationSheetEnabled = MM, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(MM) {
        this._useLogarithmicDepth = MM && this.Hk().ph().getCaps().fragmentDepthSupported
      }
      Hk() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(MM) {
        switch (MM) {
          case CM.BLENDMODE_MULTIPLYADD:
            return;
          case CM.BLENDMODE_ADD:
            MM = 1;
            break;
          case CM.BLENDMODE_ONEONE:
            MM = 6;
            break;
          case CM.BLENDMODE_STANDARD:
            MM = 2;
            break;
          case CM.BLENDMODE_MULTIPLY:
            MM = 4;
            break;
          case CM.BLENDMODE_SUBTRACT:
            MM = 3
        }
        this._engine.setAlphaMode(MM)
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
      addEmitRateGradient(MM, rM, iM) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, MM, rM, iM), this
      }
      removeEmitRateGradient(MM) {
        return this._removeFactorGradient(this._emitRateGradients, MM), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : jM.q.Zero()
      }
      set direction1(MM) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = MM)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : jM.q.Zero()
      }
      set direction2(MM) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = MM)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : jM.q.Zero()
      }
      set minEmitBox(MM) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = MM)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : jM.q.Zero()
      }
      set maxEmitBox(MM) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = MM)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(MM) {
        this._billboardMode !== MM && (this._billboardMode = MM, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(MM) {
        this._isBillboardBased !== MM && (this._isBillboardBased = MM, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(MM) {
        this._attachImageProcessingConfiguration(MM)
      }
      _attachImageProcessingConfiguration(MM) {
        MM !== this._imageProcessingConfiguration && (!MM && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = MM)
      }
      _reset() {}
      _addFactorGradient(MM, rM, iM, SM) {
        const jM = new OM.e(rM, iM, SM);
        MM.push(jM), MM.sort(((MM, rM) => MM.gradient < rM.gradient ? -1 : MM.gradient > rM.gradient ? 1 : 0))
      }
      _removeFactorGradient(MM, rM) {
        if (!MM) return;
        let iM = 0;
        for (const OM of MM) {
          if (OM.gradient === rM) {
            MM.splice(iM, 1);
            break
          }
          iM++
        }
      }
      _removeGradientAndTexture(MM, rM, iM) {
        if (!rM) return this;
        let OM = 0;
        for (const SM of rM) {
          if (SM.gradient === MM) {
            rM.splice(OM, 1);
            break
          }
          OM++
        }
        return iM && iM.dispose(), this
      }
      constructor(MM) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = jM.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new jM.q(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = CM.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new jM.o(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new jM.q(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = jM.q.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new zM.h(1, 1, 1, 1), this.color2 = new zM.h(1, 1, 1, 1), this.colorDead = new zM.h(0, 0, 0, 1), this.textureMask = new zM.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new QM.d, this.id = MM, this.name = MM
      }
      createPointEmitter(MM, rM) {
        const iM = function(MM, rM) {
          const iM = new hM;
          return iM.direction1 = MM, iM.direction2 = rM, iM
        }(MM, rM);
        return this.particleEmitterType = iM, iM
      }
      createHemisphericEmitter() {
        const MM = function() {
          return new JM(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = MM, MM
      }
      createSphereEmitter() {
        const MM = function() {
          return new dM(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = MM, MM
      }
      createDirectedSphereEmitter() {
        const MM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new jM.q(0, 1, 0),
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jM.q(0, 1, 0);
          return new yM(MM, rM, iM)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new jM.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jM.q(0, 1, 0));
        return this.particleEmitterType = MM, MM
      }
      createCylinderEmitter() {
        const MM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new lM.e(MM, rM, iM, OM)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = MM, MM
      }
      createDirectedCylinderEmitter() {
        const MM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jM.q(0, 1, 0),
            SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new jM.q(0, 1, 0);
          return new lM.d(MM, rM, iM, OM, SM)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jM.q(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new jM.q(0, 1, 0));
        return this.particleEmitterType = MM, MM
      }
      createConeEmitter() {
        const MM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new EM(MM, rM)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = MM, MM
      }
      createDirectedConeEmitter() {
        const MM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jM.q(0, 1, 0),
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jM.q(0, 1, 0);
          return new UM(MM, rM, iM, OM)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new jM.q(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jM.q(0, 1, 0));
        return this.particleEmitterType = MM, MM
      }
      createBoxEmitter(MM, rM, iM, OM) {
        const SM = new LM.b;
        return this.particleEmitterType = SM, this.direction1 = MM, this.direction2 = rM, this.minEmitBox = iM, this.maxEmitBox = OM, SM
      }
      createMeshEmitter() {
        const MM = function() {
          return new GM(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = MM, MM
      }
    }
    CM.BLENDMODE_ONEONE = 0, CM.BLENDMODE_STANDARD = 1, CM.BLENDMODE_ADD = 2, CM.BLENDMODE_MULTIPLY = 3, CM.BLENDMODE_MULTIPLYADD = 4, CM.BLENDMODE_SUBTRACT = -1;
    class eM {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new zM.h(0, 0, 0, 0), this.currentColor2 = new zM.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = jM.q.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class bM {
      constructor(MM) {
        this.particleSystem = MM, this.position = jM.q.Zero(), this.direction = jM.q.Zero(), this.color = new zM.h(0, 0, 0, 0), this.colorStep = new zM.h(0, 0, 0, 0), this.initialColor = new zM.h(0, 0, 0, 0), this.colorDead = new zM.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new jM.o(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new eM, this.id = bM._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let MM = this.age,
          rM = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === rM ? (rM = 1, MM = this._properties.randomCellOffset) : MM += this._properties.randomCellOffset);
        const iM = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let OM;
        OM = this._properties.initialSpriteCellLoop ? (0, HM.Clamp)(MM * rM % this.lifeTime / this.lifeTime) : (0, HM.Clamp)(MM * rM / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + OM * iM | 0
      }
      _inheritParticleInfoToSubEmitter(MM) {
        if (MM.particleSystem.emitter.position) {
          const rM = MM.particleSystem.emitter;
          if (rM.position.jR(this.position), MM.inheritDirection) {
            const MM = jM.l.sh[0];
            this.direction.normalizeToRef(MM), rM.setDirection(MM, 0, Math.PI / 2)
          }
        } else {
          MM.particleSystem.emitter.jR(this.position)
        }
        this.direction.scaleToRef(MM.inheritedVelocityAmount / 2, jM.l.sh[0]), MM.particleSystem._inheritedVelocityOffset.jR(jM.l.sh[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const MM of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(MM)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = bM._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(MM) {
        MM.position.jR(this.position), this._properties.initialDirection ? MM._properties.initialDirection ? MM._properties.initialDirection.jR(this._properties.initialDirection) : MM._properties.initialDirection = this._properties.initialDirection.clone() : MM._properties.initialDirection = null, MM.direction.jR(this.direction), this._properties.localPosition && (MM._properties.localPosition ? MM._properties.localPosition.jR(this._properties.localPosition) : MM._properties.localPosition = this._properties.localPosition.clone()), MM.color.jR(this.color), MM.colorStep.jR(this.colorStep), MM.initialColor.jR(this.initialColor), MM.colorDead.jR(this.colorDead), MM.lifeTime = this.lifeTime, MM.age = this.age, MM._properties.randomCellOffset = this._properties.randomCellOffset, MM.size = this.size, MM.scale.jR(this.scale), MM.angle = this.angle, MM.angularSpeed = this.angularSpeed, MM.particleSystem = this.particleSystem, MM.cellIndex = this.cellIndex, MM.id = this.id, MM._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (MM._properties.currentColorGradient = this._properties.currentColorGradient, MM._properties.currentColor1.jR(this._properties.currentColor1), MM._properties.currentColor2.jR(this._properties.currentColor2)), this._properties.currentSizeGradient && (MM._properties.currentSizeGradient = this._properties.currentSizeGradient, MM._properties.currentSize1 = this._properties.currentSize1, MM._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (MM._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, MM._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, MM._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (MM._properties.currentVelocityGradient = this._properties.currentVelocityGradient, MM._properties.currentVelocity1 = this._properties.currentVelocity1, MM._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (MM._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, MM._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, MM._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (MM._properties.currentDragGradient = this._properties.currentDragGradient, MM._properties.currentDrag1 = this._properties.currentDrag1, MM._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (MM._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, MM._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, MM._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (MM.remapData && this.remapData ? MM.remapData.jR(this.remapData) : MM.remapData = new jM.u(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (MM._properties.randomNoiseCoordinates1 && MM._properties.randomNoiseCoordinates2 ? (MM._properties.randomNoiseCoordinates1.jR(this._properties.randomNoiseCoordinates1), MM._properties.randomNoiseCoordinates2.jR(this._properties.randomNoiseCoordinates2)) : (MM._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), MM._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), MM.metadata = this.metadata
      }
    }
    bM._Count = 0;
    var wM = iM(42200);
    class tM {
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
      constructor(MM, rM, iM, OM) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = rM, this.wL = MM, this._scene = iM, this._host = OM, this._activeTargets = [], rM._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            lS: this._getCorrectLoopMode()
          }, this._animation.dataType === wM.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = jM.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const MM = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, MM)
        }
        if (this.wL instanceof Array) {
          let MM = 0;
          for (const rM of this.wL) this._preparePath(rM, MM), this._getOriginalValues(MM), MM++;
          this._targetIsArray = !0
        } else this._preparePath(this.wL), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const SM = rM.getEvents();
        if (SM && SM.length > 0)
          for (const jM of SM) this._events.push(jM._clone());
        this._enableBlending = MM && MM.animationPropertiesOverride ? MM.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = this._animation.targetPropertyPath;
        if (iM.length > 1) {
          let OM = MM;
          for (let MM = 0; MM < iM.length - 1; MM++) {
            const rM = iM[MM];
            if (OM = OM[rM], void 0 === OM) throw new Error(`Invalid property (${rM}) in property path (${iM.join(".")})`)
          }
          this._targetPath = iM[iM.length - 1], this._activeTargets[rM] = OM
        } else this._targetPath = iM[0], this._activeTargets[rM] = MM;
        if (void 0 === this._activeTargets[rM][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${iM.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.wL instanceof Array) {
            let MM = 0;
            for (const rM of this.wL) void 0 !== this._originalValue[MM] && this._setValue(rM, this._activeTargets[MM], this._originalValue[MM], -1, MM), MM++
          } else void 0 !== this._originalValue[0] && this._setValue(this.wL, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let MM = 0; MM < this._events.length; MM++) this._events[MM].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const MM = this._animation.runtimeAnimations.indexOf(this);
        MM > -1 && this._animation.runtimeAnimations.splice(MM, 1)
      }
      setValue(MM, rM) {
        if (this._targetIsArray)
          for (let iM = 0; iM < this.wL.length; iM++) {
            const OM = this.wL[iM];
            this._setValue(OM, this._activeTargets[iM], MM, rM, iM)
          } else this._setValue(this.wL, this._directTarget, MM, rM, 0)
      }
      _getOriginalValues() {
        let MM, rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const iM = this._activeTargets[rM];
        if (wM.b.InheritOriginalValueFromActiveAnimations) {
          const MM = this._scene._activeAnimatables;
          for (let OM = 0; OM < MM.length; OM++) {
            const SM = MM[OM]._runtimeAnimations;
            for (let MM = 0; MM < SM.length; MM++) {
              const OM = SM[MM];
              if (OM !== this && OM._targetPath === this._targetPath)
                for (let MM = 0; MM < OM._activeTargets.length; MM++)
                  if (OM._activeTargets[MM] === iM && void 0 !== OM._originalValue[MM]) return void(OM._originalValue[MM] && OM._originalValue[MM].clone ? this._originalValue[rM] = OM._originalValue[MM].clone() : this._originalValue[rM] = OM._originalValue[MM])
            }
          }
        }
        MM = iM.getLocalMatrix && "_matrix" === this._targetPath ? iM.getLocalMatrix() : iM[this._targetPath], MM && MM.clone ? this._originalValue[rM] = MM.clone() : this._originalValue[rM] = MM
      }
      _registerTargetForLateAnimationBinding(MM, rM) {
        const iM = MM.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(iM), iM._lateAnimationHolders || (iM._lateAnimationHolders = {}), iM._lateAnimationHolders[MM.targetPath] || (iM._lateAnimationHolders[MM.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: rM
        }), MM.isAdditive ? (iM._lateAnimationHolders[MM.targetPath].additiveAnimations.push(MM), iM._lateAnimationHolders[MM.targetPath].totalAdditiveWeight += MM.weight) : (iM._lateAnimationHolders[MM.targetPath].animations.push(MM), iM._lateAnimationHolders[MM.targetPath].totalWeight += MM.weight)
      }
      _setValue(MM, rM, iM, OM, SM) {
        const aM = this._scene._animationWrites,
          PM = this._scene._animationWriteCount++;
        let nM = aM[PM];
        if (nM || (nM = aM[PM] = {
            runtimeAnimation: this,
            target: MM,
            weight: OM,
            additive: !1,
            blendingFactor: 1,
            yd: !1
          }), nM.runtimeAnimation = this, nM.target = MM, nM.weight = OM, nM.additive = this.isAdditive, nM.yd = !1, this._currentActiveTarget = rM, this._weight = OM, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const MM = rM[this._targetPath];
            MM.clone ? this._originalBlendValue = MM.clone() : this._originalBlendValue = MM
          }
          this._originalBlendValue.m ? wM.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? jM.d.DecomposeLerpToRef(this._originalBlendValue, iM, this._blendingFactor, this._currentValue) : this._currentValue = jM.d.DecomposeLerp(this._originalBlendValue, iM, this._blendingFactor) : this._currentValue ? jM.d.LerpToRef(this._originalBlendValue, iM, this._blendingFactor, this._currentValue) : this._currentValue = jM.d.Lerp(this._originalBlendValue, iM, this._blendingFactor) : this._currentValue = wM.b._UniversalLerp(this._originalBlendValue, iM, this._blendingFactor);
          const OM = MM && MM.animationPropertiesOverride ? MM.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          nM.blendingFactor = this._blendingFactor, this._blendingFactor += OM
        } else nM.blendingFactor = 1, this._currentValue ? this._currentValue.jR ? this._currentValue.jR(iM) : this._currentValue = iM : this._currentValue = iM?.clone ? iM.clone() : iM; - 1 !== OM ? this._registerTargetForLateAnimationBinding(this, this._originalValue[SM]) : this._animationState.lS === wM.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[SM], rM[this._targetPath]) : rM[this._targetPath] = this._originalValue[SM] + this._currentValue : rM[this._targetPath] = this._currentValue, MM.FrM && MM.FrM(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.wL && this.wL.animationPropertiesOverride) {
          return "MorphTarget" === this.wL.getClassName?.() && null == this.wL._animationPropertiesOverride ? this._animation.lS : this.wL.animationPropertiesOverride.lS
        }
        return this._animation.lS
      }
      goToFrame(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const iM = this._animation.getKeys();
        MM < iM[0].frame ? MM = iM[0].frame : MM > iM[iM.length - 1].frame && (MM = iM[iM.length - 1].frame);
        const OM = this._events;
        if (OM.length)
          for (let jM = 0; jM < OM.length; jM++) OM[jM].onlyOnce || (OM[jM].isDone = OM[jM].frame < MM);
        this._currentFrame = MM;
        const SM = this._animation._interpolate(MM, this._animationState);
        this.setValue(SM, rM)
      }
      _prepareForSpeedRatioChange(MM) {
        const rM = this._previousElapsedTime * (this._animation.framePerSecond * MM) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - rM
      }
      animate(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const aM = this._animation,
          PM = aM.targetPropertyPath;
        if (!PM || PM.length < 1) return this._stopped = !0, !1;
        let nM, QM = !0;
        const zM = this._events;
        let LM;
        if (this._coreRuntimeAnimation) LM = iM - rM, nM = this._coreRuntimeAnimation.currentFrame, this._currentFrame = nM, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let jM;
          (rM < this._minFrame || rM > this._maxFrame) && (rM = this._minFrame), (iM < this._minFrame || iM > this._maxFrame) && (iM = this._maxFrame), LM = iM - rM;
          let PM = MM * (aM.framePerSecond * SM) / 1e3 + this._absoluteFrameOffset,
            mM = 0,
            HM = !1;
          const hM = OM && this._animationState.lS === wM.b.ANIMATIONLOOPMODE_YOYO;
          if (hM) {
            const MM = (PM - rM) / LM,
              iM = Math.sin(MM * Math.PI);
            PM = Math.abs(iM) * LM + rM;
            const OM = iM >= 0 ? 1 : -1;
            this._yoyoDirection !== OM && (HM = !0), this._yoyoDirection = OM
          }
          if (this._previousElapsedTime = MM, this._previousAbsoluteFrame = PM, !OM && iM >= rM && (PM >= LM && SM > 0 || PM <= 0 && SM < 0)) QM = !1, mM = aM.evaluate(iM);
          else if (!OM && rM >= iM && (PM <= LM && SM < 0 || PM >= 0 && SM > 0)) QM = !1, mM = aM.evaluate(rM);
          else if (this._animationState.lS !== wM.b.ANIMATIONLOOPMODE_CYCLE) {
            const MM = iM.toString() + rM.toString();
            if (!this._offsetsCache[MM]) {
              this._animationState.repeatCount = 0, this._animationState.lS = wM.b.ANIMATIONLOOPMODE_CYCLE;
              const OM = aM._interpolate(rM, this._animationState),
                SM = aM._interpolate(iM, this._animationState);
              switch (this._animationState.lS = this._getCorrectLoopMode(), aM.dataType) {
                case wM.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[MM] = SM - OM;
                  break;
                case wM.b.ANIMATIONTYPE_QUATERNION:
                case wM.b.ANIMATIONTYPE_VECTOR3:
                case wM.b.ANIMATIONTYPE_VECTOR2:
                case wM.b.ANIMATIONTYPE_SIZE:
                case wM.b.ANIMATIONTYPE_COLOR3:
                case wM.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[MM] = SM.subtract(OM)
              }
              this._highLimitsCache[MM] = SM
            }
            mM = this._highLimitsCache[MM], jM = this._offsetsCache[MM]
          }
          if (void 0 === jM) switch (aM.dataType) {
            case wM.b.ANIMATIONTYPE_FLOAT:
              jM = 0;
              break;
            case wM.b.ANIMATIONTYPE_QUATERNION:
              jM = wM.l;
              break;
            case wM.b.ANIMATIONTYPE_VECTOR3:
              jM = wM.v;
              break;
            case wM.b.ANIMATIONTYPE_VECTOR2:
              jM = wM.r;
              break;
            case wM.b.ANIMATIONTYPE_SIZE:
              jM = wM.n;
              break;
            case wM.b.ANIMATIONTYPE_COLOR3:
              jM = wM.j;
              break;
            case wM.b.ANIMATIONTYPE_COLOR4:
              jM = wM.k
          }
          const JM = this._host ? this._host.syncRoot : null;
          let dM, yM = this._playbackFrames,
            lM = !1;
          if (JM) {
            const MM = JM.toFrame - JM.fromFrame,
              iM = JM.masterFrame,
              OM = (iM - JM.fromFrame) / MM;
            nM = rM + LM * OM;
            const SM = JM.getAnimations()[0];
            if (SM && 0 !== MM) {
              const MM = LM * OM,
                rM = SM._playbackTo - SM._playbackFrom;
              if (0 !== rM && SM._playbackFrom <= JM.fromFrame && SM._playbackTo >= JM.toFrame) {
                yM = LM * Math.round((SM._playbackFrames - (SM._currentFrame - SM._playbackFrom)) / rM) + MM
              } else lM = (iM - this._playbackSyncMasterFrame) * (SM._playbackFrames - this._playbackSyncMasterPlayed) < 0, yM = MM;
              lM = lM || SM._playbackJumped, this._playbackSyncMasterPlayed = SM._playbackFrames, this._playbackSyncMasterFrame = iM
            }
          } else nM = PM > 0 && rM > iM || PM < 0 && rM < iM ? QM && 0 !== LM ? iM + PM % LM : rM : QM && 0 !== LM ? rM + PM % LM : iM;
          if (!hM && (SM > 0 && this.currentFrame > nM || SM < 0 && this.currentFrame < nM) || hM && HM) {
            this._onLoop();
            for (let MM = 0; MM < zM.length; MM++) zM[MM].onlyOnce || (zM[MM].isDone = !1);
            this._animationState.key = SM > 0 ? 0 : aM.getKeys().length - 1
          }
          if (this._currentFrame = nM, this._animationState.repeatCount = 0 === LM ? 0 : PM / LM | 0, this._animationState.highLimitValue = mM, this._animationState.offsetValue = jM, this._playbackFrom = rM, this._playbackTo = iM, this._playbackJumped = lM, this._playbackSyncRoot = JM, JM) dM = yM;
          else if (QM) dM = hM ? nM === rM && PM === iM ? LM : nM - rM : PM;
          else {
            const MM = 0 !== LM ? Math.floor(this._playbackFrames / LM) : 0;
            dM = (nM === iM ? MM + 1 : MM) * LM
          }
          this._playbackFrames = dM, this._playbackProgress = this._animationState.lS === wM.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? LM : dM
        }
        const mM = aM._interpolate(nM, this._animationState);
        if (this.setValue(mM, jM), zM.length)
          for (let HM = 0; HM < zM.length; HM++)
            if (LM >= 0 && nM >= zM[HM].frame && zM[HM].frame >= rM || LM < 0 && nM <= zM[HM].frame && zM[HM].frame <= rM) {
              const MM = zM[HM];
              MM.isDone || (MM.onlyOnce && (zM.splice(HM, 1), HM--), MM.isDone = !0, MM.action(nM))
            } return QM || (this._stopped = !0), QM
      }
    }
    var gM = iM(41009);
    class uM {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(MM) {
        this._weight = -1 !== MM ? Math.min(Math.max(MM, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(MM) {
        for (let rM = 0; rM < this._runtimeAnimations.length; rM++) {
          this._runtimeAnimations[rM]._prepareForSpeedRatioChange(MM)
        }
        this._speedRatio = MM, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          PM = arguments.length > 6 ? arguments[6] : void 0,
          nM = arguments.length > 7 ? arguments[7] : void 0,
          QM = arguments.length > 8 ? arguments[8] : void 0,
          zM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          LM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = rM, this.fromFrame = iM, this.toFrame = OM, this.loopAnimation = jM, this.onAnimationEnd = PM, this.onAnimationLoop = QM, this.isAdditive = zM, this.playOrder = LM, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.eL = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new SM.d, this.onAnimationLoopObservable = new SM.d, this._scene = MM, nM && this.appendAnimations(rM, nM), this._speedRatio = aM, MM._activeAnimatables.push(this)
      }
      syncWith(MM) {
        if (this._syncRoot = MM, MM) {
          const MM = this._scene._activeAnimatables.indexOf(this);
          MM > -1 && (this._scene._activeAnimatables.splice(MM, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(MM, rM) {
        for (let iM = 0; iM < rM.length; iM++) {
          const OM = rM[iM],
            SM = new tM(MM, OM, this._scene, this);
          SM._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(SM)
        }
      }
      getAnimationByTargetProperty(MM) {
        const rM = this._runtimeAnimations;
        for (let iM = 0; iM < rM.length; iM++)
          if (rM[iM].animation.targetProperty === MM) return rM[iM].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(MM) {
        const rM = this._runtimeAnimations;
        for (let iM = 0; iM < rM.length; iM++)
          if (rM[iM].animation.targetProperty === MM) return rM[iM];
        return null
      }
      reset() {
        const MM = this._runtimeAnimations;
        for (let rM = 0; rM < MM.length; rM++) MM[rM].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(MM) {
        const rM = this._runtimeAnimations;
        for (let iM = 0; iM < rM.length; iM++) rM[iM].animation.enableBlending = !0, rM[iM].animation.blendingSpeed = MM
      }
      disableBlending() {
        const MM = this._runtimeAnimations;
        for (let rM = 0; rM < MM.length; rM++) MM[rM].animation.enableBlending = !1
      }
      goToFrame(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this._runtimeAnimations;
        if (iM[0]) {
          const rM = iM[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? iM[0].currentFrame;
          const OM = 0 === this.speedRatio ? 0 : (MM - this._frameToSyncFromJump) / rM * 1e3 / this.speedRatio;
          this._manualJumpDelay = -OM
        }
        for (let OM = 0; OM < iM.length; OM++) iM[OM].goToFrame(MM, rM ? this._weight : -1);
        this._goToFrame = MM
      }
      get paused() {
        return this.eL
      }
      pause() {
        this.eL || (this.eL = !0)
      }
      restart() {
        this.eL = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (MM || rM) {
          const SM = this._scene._activeAnimatables.indexOf(this);
          if (SM > -1) {
            const jM = this._runtimeAnimations;
            for (let iM = jM.length - 1; iM >= 0; iM--) {
              const OM = jM[iM];
              MM && OM.animation.name != MM || (rM && !rM(OM.target) || (OM.dispose(), jM.splice(iM, 1)))
            }
            0 == jM.length && (iM || this._scene._activeAnimatables.splice(SM, 1), OM || this._raiseOnAnimationEnd())
          }
        } else {
          const MM = this._scene._activeAnimatables.indexOf(this);
          if (MM > -1) {
            iM || this._scene._activeAnimatables.splice(MM, 1);
            const rM = this._runtimeAnimations;
            for (let MM = 0; MM < rM.length; MM++) rM[MM].dispose();
            this._runtimeAnimations.length = 0, OM || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((MM => {
          this.onAnimationEndObservable.add((() => {
            MM(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(MM) {
        if (this.eL) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = MM), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = MM, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += MM - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !uM.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let rM = !1;
        const iM = this._runtimeAnimations;
        let OM;
        for (OM = 0; OM < iM.length; OM++) {
          const SM = iM[OM].animate(MM - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          rM = rM || SM
        }
        if (this.animationStarted = rM, !rM) {
          if (this.disposeOnEnd)
            for (OM = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(OM, 1), OM = 0; OM < iM.length; OM++) iM[OM].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return rM
      }
    }

    function RM(MM) {
      if (0 === MM.totalWeight && 0 === MM.totalAdditiveWeight) return MM.originalValue;
      let rM = 1;
      const iM = jM.l.sh[0],
        OM = jM.l.sh[1],
        SM = jM.l.Quaternion[0];
      let aM = 0;
      const PM = MM.animations[0],
        nM = MM.originalValue;
      let QM, zM = !1;
      if (MM.totalWeight < 1) QM = 1 - MM.totalWeight, nM.decompose(OM, SM, iM);
      else {
        if (aM = 1, rM = MM.totalWeight, QM = PM.weight / rM, 1 == QM) {
          if (!MM.totalAdditiveWeight) return PM.currentValue;
          zM = !0
        }
        PM.currentValue.decompose(OM, SM, iM)
      }
      if (!zM) {
        OM.scaleInPlace(QM), iM.scaleInPlace(QM), SM.scaleInPlace(QM);
        for (let PM = aM; PM < MM.animations.length; PM++) {
          const aM = MM.animations[PM];
          if (0 === aM.weight) continue;
          QM = aM.weight / rM;
          const nM = jM.l.sh[2],
            zM = jM.l.sh[3],
            LM = jM.l.Quaternion[1];
          aM.currentValue.decompose(zM, LM, nM), zM.scaleAndAddToRef(QM, OM), LM.scaleAndAddToRef(jM.h.Dot(SM, LM) > 0 ? QM : -QM, SM), nM.scaleAndAddToRef(QM, iM)
        }
        SM.normalize()
      }
      for (let mM = 0; mM < MM.additiveAnimations.length; mM++) {
        const rM = MM.additiveAnimations[mM];
        if (0 === rM.weight) continue;
        const aM = jM.l.sh[2],
          PM = jM.l.sh[3],
          nM = jM.l.Quaternion[1];
        rM.currentValue.decompose(PM, nM, aM), PM.multiplyToRef(OM, PM), jM.q.LerpToRef(OM, PM, rM.weight, OM), SM.multiplyToRef(nM, nM), jM.h.SlerpToRef(SM, nM, rM.weight, SM), aM.scaleAndAddToRef(rM.weight, iM)
      }
      const LM = PM ? PM._animationState.workValue : jM.l.Matrix[0].clone();
      return jM.d.ComposeToRef(OM, SM, iM, LM), LM
    }

    function pM(MM, rM) {
      if (0 === MM.totalWeight && 0 === MM.totalAdditiveWeight) return rM;
      const iM = MM.animations[0],
        OM = MM.originalValue;
      let SM = rM;
      if (0 === MM.totalWeight && MM.totalAdditiveWeight > 0) SM.jR(OM);
      else if (1 === MM.animations.length) {
        if (jM.h.SlerpToRef(OM, iM.currentValue, Math.min(1, MM.totalWeight), SM), 0 === MM.totalAdditiveWeight) return SM
      } else if (MM.animations.length > 1) {
        let iM, aM, PM = 1;
        if (MM.totalWeight < 1) {
          const rM = 1 - MM.totalWeight;
          iM = [], aM = [], iM.push(OM), aM.push(rM)
        } else {
          if (2 === MM.animations.length && (jM.h.SlerpToRef(MM.animations[0].currentValue, MM.animations[1].currentValue, MM.animations[1].weight / MM.totalWeight, rM), 0 === MM.totalAdditiveWeight)) return rM;
          iM = [], aM = [], PM = MM.totalWeight
        }
        for (let rM = 0; rM < MM.animations.length; rM++) {
          const OM = MM.animations[rM];
          iM.push(OM.currentValue), aM.push(OM.weight / PM)
        }
        let nM = 0;
        for (let MM = 0; MM < iM.length;) MM ? (nM += aM[MM], jM.h.SlerpToRef(SM, iM[MM], aM[MM] / nM, SM), MM++) : (jM.h.SlerpToRef(iM[MM], iM[MM + 1], aM[MM + 1] / (aM[MM] + aM[MM + 1]), rM), SM = rM, nM = aM[MM] + aM[MM + 1], MM += 2)
      }
      for (let aM = 0; aM < MM.additiveAnimations.length; aM++) {
        const rM = MM.additiveAnimations[aM];
        0 !== rM.weight && (SM.multiplyToRef(rM.currentValue, jM.l.Quaternion[0]), jM.h.SlerpToRef(SM, jM.l.Quaternion[0], rM.weight, SM))
      }
      return SM
    }

    function WM(MM, rM) {
      rM && (rM.prototype.copyAnimationRange = function(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new wM.b(this.name, "_matrix", MM.animations[0].framePerSecond, wM.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const jM = MM.animations[0].getRange(rM);
        if (!jM) return !1;
        const aM = jM.from,
          PM = jM.to,
          nM = MM.animations[0].getKeys(),
          QM = MM.length,
          zM = MM.getParent(),
          LM = this.getParent(),
          mM = OM && zM && QM && this.length && QM !== this.length,
          HM = mM && LM && zM ? LM.length / zM.length : 1,
          hM = OM && !LM && SM && (1 !== SM.x || 1 !== SM.y || 1 !== SM.z),
          JM = this.animations[0].getKeys();
        let dM, yM, lM;
        for (let EM = 0, UM = nM.length; EM < UM; EM++) dM = nM[EM], dM.frame >= aM && dM.frame <= PM && (OM ? (lM = dM.value.clone(), mM ? (yM = lM.getTranslation(), lM.setTranslation(yM.scaleInPlace(HM))) : hM && SM ? (yM = lM.getTranslation(), lM.setTranslation(yM.multiplyInPlace(SM))) : lM = dM.value) : lM = dM.value, JM.push({
          frame: dM.frame + iM,
          value: lM
        }));
        return this.animations[0].createRange(rM, aM + iM, PM + iM), !0
      }), MM && (MM.prototype._animate = function(MM) {
        const rM = this._animationWrites,
          iM = this._animationWriteCount;
        let OM = 0;
        for (let jM = this._animationStepWriteCount; jM < iM; jM++) {
          const MM = rM[jM];
          MM.yd && -1 === MM.weight || (MM.yd = !0, rM[jM] = rM[OM], rM[OM] = MM, OM++)
        }
        for (let jM = OM; jM < iM; jM++) {
          const MM = rM[jM];
          MM.runtimeAnimation = null, MM.target = null
        }
        if (this._animationWriteCount = OM, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const SM = gM.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = SM
        }
        this.deltaTime = void 0 !== MM ? MM : this.useConstantAnimationDeltaTime ? 16 : (SM - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = SM;
        const aM = this._activeAnimatables;
        if (0 === aM.length) return;
        this._animationTime += this.deltaTime;
        const PM = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let jM = 0; jM < aM.length; jM++) {
          const MM = aM[jM];
          !MM._animate(PM) && MM.disposeOnEnd && jM--
        }! function(MM) {
          if (MM._registeredForLateAnimationBindings.length) {
            for (let rM = 0; rM < MM._registeredForLateAnimationBindings.length; rM++) {
              const iM = MM._registeredForLateAnimationBindings.data[rM];
              for (const MM in iM._lateAnimationHolders) {
                const rM = iM._lateAnimationHolders[MM],
                  OM = rM.animations[0],
                  SM = rM.originalValue;
                if (void 0 === SM || null === SM) continue;
                const aM = wM.b.AllowMatrixDecomposeForInterpolation && SM.m;
                let PM = iM[MM];
                if (aM) PM = RM(rM);
                else if (void 0 !== SM.w) PM = pM(rM, PM || jM.h.Identity());
                else {
                  let MM = 0,
                    iM = 1;
                  const jM = OM && OM._animationState.lS === wM.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (rM.totalWeight < 1) PM = jM ? SM.clone ? SM.clone() : SM : OM && SM.scale ? SM.scale(1 - rM.totalWeight) : OM ? SM * (1 - rM.totalWeight) : SM.clone ? SM.clone() : SM;
                  else if (OM) {
                    iM = rM.totalWeight;
                    const aM = OM.weight / iM;
                    PM = 1 !== aM ? OM.currentValue.scale ? OM.currentValue.scale(aM) : OM.currentValue * aM : (rM.animations.length > 1 || rM.additiveAnimations.length > 0) && OM.currentValue.clone ? OM.currentValue.clone() : OM.currentValue, jM && (PM.addToRef ? PM.addToRef(SM, PM) : PM += SM), MM = 1
                  }
                  for (let OM = MM; OM < rM.animations.length; OM++) {
                    const MM = rM.animations[OM],
                      SM = MM.weight / iM;
                    SM && (MM.currentValue.scaleAndAddToRef ? MM.currentValue.scaleAndAddToRef(SM, PM) : PM += MM.currentValue * SM)
                  }
                  for (let OM = 0; OM < rM.additiveAnimations.length; OM++) {
                    const MM = rM.additiveAnimations[OM],
                      iM = MM.weight;
                    iM && (MM.currentValue.scaleAndAddToRef ? MM.currentValue.scaleAndAddToRef(iM, PM) : PM += MM.currentValue * iM)
                  }
                }
                iM[MM] = PM
              }
              iM._lateAnimationHolders = {}
            }
            MM._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, MM.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((MM, rM) => MM.playOrder - rM.playOrder))
      }, MM.prototype.beginWeightedAnimation = function(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 ? arguments[7] : void 0,
          nM = arguments.length > 8 ? arguments[8] : void 0,
          QM = arguments.length > 9 ? arguments[9] : void 0,
          zM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const LM = this.beginAnimation(MM, rM, iM, SM, jM, aM, PM, !1, nM, QM, zM);
        return LM.weight = OM, LM
      }, MM.prototype.beginAnimation = function(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          jM = arguments.length > 5 ? arguments[5] : void 0,
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          nM = arguments.length > 8 ? arguments[8] : void 0,
          QM = arguments.length > 9 ? arguments[9] : void 0,
          zM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (SM < 0) {
          const MM = rM;
          rM = iM, iM = MM, SM = -SM
        }
        rM > iM && (SM = -SM), PM && this.stopAnimation(MM, void 0, nM), aM || (aM = new uM(this, MM, rM, iM, OM, SM, jM, void 0, QM, zM));
        const LM = !nM || nM(MM);
        if (MM.animations && LM && aM.appendAnimations(MM, MM.animations), MM.getAnimatables) {
          const zM = MM.getAnimatables();
          for (let MM = 0; MM < zM.length; MM++) this.beginAnimation(zM[MM], rM, iM, OM, SM, jM, aM, PM, nM, QM)
        }
        return aM.reset(), aM
      }, MM.prototype.beginHierarchyAnimation = function(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 ? arguments[7] : void 0,
          nM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          QM = arguments.length > 9 ? arguments[9] : void 0,
          zM = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const LM = MM.getDescendants(rM),
          mM = [];
        mM.push(this.beginAnimation(MM, iM, OM, SM, jM, aM, PM, nM, QM, void 0, zM));
        for (const HM of LM) mM.push(this.beginAnimation(HM, iM, OM, SM, jM, aM, PM, nM, QM, void 0, zM));
        return mM
      }, MM.prototype.beginDirectAnimation = function(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (jM < 0) {
          const MM = iM;
          iM = OM, OM = MM, jM = -jM
        }
        iM > OM && (jM = -jM);
        return new uM(this, MM, iM, OM, SM, jM, arguments.length > 6 ? arguments[6] : void 0, rM, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, MM.prototype.beginDirectHierarchyAnimation = function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        let QM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const zM = MM.getDescendants(rM),
          LM = [];
        LM.push(this.beginDirectAnimation(MM, iM, OM, SM, jM, aM, PM, nM, QM));
        for (const mM of zM) LM.push(this.beginDirectAnimation(mM, iM, OM, SM, jM, aM, PM, nM, QM));
        return LM
      }, MM.prototype.getAnimatableByTarget = function(MM) {
        for (let rM = 0; rM < this._activeAnimatables.length; rM++)
          if (this._activeAnimatables[rM].target === MM) return this._activeAnimatables[rM];
        return null
      }, MM.prototype.getAllAnimatablesByTarget = function(MM) {
        const rM = [];
        for (let iM = 0; iM < this._activeAnimatables.length; iM++) this._activeAnimatables[iM].target === MM && rM.push(this._activeAnimatables[iM]);
        return rM
      }, MM.prototype.stopAnimation = function(MM, rM, iM) {
        const OM = this.getAllAnimatablesByTarget(MM);
        for (const SM of OM) SM.stop(rM, iM)
      }, MM.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let MM = 0; MM < this._activeAnimatables.length; MM++) this._activeAnimatables[MM].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const MM of this.animationGroups) MM.stop()
      })
    }
    uM.ProcessPausedAnimatables = !1;
    var sM, DM = iM(38048),
      kM = iM(41328),
      ZM = iM(40990);
    class oM extends kM.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(MM) {
        (MM.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.jR(MM), this._markAsDirtyAndDecompose())
      }
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(MM, rM.Hk(), !1), this.name = MM, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = rM, this._localMatrix = OM?.clone() ?? jM.d.Identity(), this._restMatrix = SM ?? this._localMatrix.clone(), this._bindMatrix = aM ?? this._localMatrix.clone(), this._index = PM, this._absoluteMatrix = new jM.d, this._absoluteBindMatrix = new jM.d, this._absoluteInverseBindMatrix = new jM.d, this._finalMatrix = new jM.d, rM.bones.push(this), this.setParent(iM, !1), this._updateAbsoluteBindMatrices()
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
      set parent(MM) {
        this.setParent(MM)
      }
      setParent(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== MM) {
          if (this.parent) {
            const MM = this.parent.children.indexOf(this); - 1 !== MM && this.parent.children.splice(MM, 1)
          }
          this._parentNode = MM, this.parent && this.parent.children.push(this), rM && this._updateAbsoluteBindMatrices(), this.FrM()
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
      setRestMatrix(MM) {
        this._restMatrix.jR(MM)
      }
      setRestPose(MM) {
        this.setRestMatrix(MM)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(MM) {
        this.p_(MM)
      }
      setBindPose(MM) {
        this.setBindMatrix(MM)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const MM = jM.l.sh[0],
            rM = jM.l.Quaternion[0],
            iM = jM.l.sh[1];
          this.getRestMatrix().decompose(MM, rM, iM), this._linkedTransformNode.position.jR(iM), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? jM.h.Identity(), this._linkedTransformNode.rotationQuaternion.jR(rM), this._linkedTransformNode.UL.jR(MM)
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
      linkTransformNode(MM) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = MM, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.arM
      }
      set position(MM) {
        this._decompose(), this.arM.jR(MM), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(MM) {
        this.setRotation(MM)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(MM) {
        this.setRotationQuaternion(MM)
      }
      get UL() {
        return this.getScale()
      }
      set UL(MM) {
        this.setScale(MM)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = jM.q.Zero(), this._localRotation = jM.h.Zero(), this.arM = jM.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.arM))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, jM.d.ComposeToRef(this._localScaling, this._localRotation, this.arM, this._localMatrix)) : this._needToCompose = !1)
      }
      p_(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.jR(MM), rM && this._updateAbsoluteBindMatrices(), iM ? this._matrix = MM : this.FrM()
      }
      _updateAbsoluteBindMatrices(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (MM || (MM = this._bindMatrix), this.parent ? MM.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.jR(MM), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), rM)
          for (let iM = 0; iM < this.children.length; iM++) this.children[iM]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      FrM() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.FrM(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.FrM(), this._needToDecompose = !0
      }
      _updatePosition(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SM = this.getLocalMatrix();
        if (0 == rM) OM ? (SM.addAtIndex(12, MM.x), SM.addAtIndex(13, MM.y), SM.addAtIndex(14, MM.z)) : SM.setTranslationFromFloats(MM.x, MM.y, MM.z);
        else {
          const rM = oM._TmpMats[0],
            aM = oM._TmpVecs[0];
          this.parent ? (rM.jR(this.parent.getAbsoluteMatrix()), iM && rM.multiplyToRef(iM.getWorldMatrix(), rM)) : jM.d.IdentityToRef(rM), OM && rM.setTranslationFromFloats(0, 0, 0), rM.invert(), jM.q.TransformCoordinatesToRef(MM, rM, aM), OM ? (SM.addAtIndex(12, aM.x), SM.addAtIndex(13, aM.y), SM.addAtIndex(14, aM.z)) : SM.setTranslationFromFloats(aM.x, aM.y, aM.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(MM, rM, iM, !0)
      }
      setPosition(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(MM, rM, iM, !1)
      }
      setAbsolutePosition(MM, rM) {
        this.setPosition(MM, 1, rM)
      }
      scale(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SM = this.getLocalMatrix(),
          aM = oM._TmpMats[0];
        jM.d.ScalingToRef(MM, rM, iM, aM), aM.multiplyToRef(SM, SM), aM.invert();
        for (const jM of this.children) {
          const OM = jM.getLocalMatrix();
          OM.multiplyToRef(aM, OM), OM.multiplyAtIndex(12, MM), OM.multiplyAtIndex(13, rM), OM.multiplyAtIndex(14, iM), jM._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), OM)
          for (const jM of this.children) jM.scale(MM, rM, iM, OM)
      }
      setScale(MM) {
        this._decompose(), this._localScaling.jR(MM), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(MM) {
        this._decompose(), MM.jR(this._localScaling)
      }
      setYawPitchRoll(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === OM) {
          const aM = oM._TmpQuat;
          return jM.h.RotationYawPitchRollToRef(MM, rM, iM, aM), void this.setRotationQuaternion(aM, OM, SM)
        }
        const aM = oM._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(aM, SM)) return;
        const PM = oM._TmpMats[1];
        jM.d.RotationYawPitchRollToRef(MM, rM, iM, PM), aM.multiplyToRef(PM, PM), this._rotateWithMatrix(PM, OM, SM)
      }
      rotate(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        const SM = oM._TmpMats[0];
        SM.setTranslationFromFloats(0, 0, 0), jM.d.RotationAxisToRef(MM, rM, SM), this._rotateWithMatrix(SM, iM, OM)
      }
      setAxisAngle(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === iM) {
          const SM = oM._TmpQuat;
          return jM.h.RotationAxisToRef(MM, rM, SM), void this.setRotationQuaternion(SM, iM, OM)
        }
        const SM = oM._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(SM, OM)) return;
        const aM = oM._TmpMats[1];
        jM.d.RotationAxisToRef(MM, rM, aM), SM.multiplyToRef(aM, aM), this._rotateWithMatrix(aM, iM, OM)
      }
      setRotation(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(MM.y, MM.x, MM.z, rM, iM)
      }
      setRotationQuaternion(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === rM) return this._decompose(), this._localRotation.jR(MM), void this._markAsDirtyAndCompose();
        const OM = oM._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(OM, iM)) return;
        const SM = oM._TmpMats[1];
        jM.d.FromQuaternionToRef(MM, SM), OM.multiplyToRef(SM, SM), this._rotateWithMatrix(SM, rM, iM)
      }
      setRotationMatrix(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === rM) {
          const OM = oM._TmpQuat;
          return jM.h.FromRotationMatrixToRef(MM, OM), void this.setRotationQuaternion(OM, rM, iM)
        }
        const OM = oM._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(OM, iM)) return;
        const SM = oM._TmpMats[1];
        SM.jR(MM), OM.multiplyToRef(MM, SM), this._rotateWithMatrix(SM, rM, iM)
      }
      _rotateWithMatrix(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = this.getLocalMatrix(),
          SM = OM.m[12],
          jM = OM.m[13],
          aM = OM.m[14],
          PM = this.getParent(),
          nM = oM._TmpMats[3],
          QM = oM._TmpMats[4];
        PM && 1 == rM ? (iM ? (nM.jR(iM.getWorldMatrix()), PM.getAbsoluteMatrix().multiplyToRef(nM, nM)) : nM.jR(PM.getAbsoluteMatrix()), QM.jR(nM), QM.invert(), OM.multiplyToRef(nM, OM), OM.multiplyToRef(MM, OM), OM.multiplyToRef(QM, OM)) : 1 == rM && iM ? (nM.jR(iM.getWorldMatrix()), QM.jR(nM), QM.invert(), OM.multiplyToRef(nM, OM), OM.multiplyToRef(MM, OM), OM.multiplyToRef(QM, OM)) : OM.multiplyToRef(MM, OM), OM.setTranslationFromFloats(SM, jM, aM), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(MM, rM) {
        const iM = oM._TmpMats[2];
        return MM.jR(this.getAbsoluteMatrix()), rM ? (MM.multiplyToRef(rM.getWorldMatrix(), MM), jM.d.ScalingToRef(rM.UL.x, rM.UL.y, rM.UL.z, iM)) : jM.d.IdentityToRef(iM), MM.invert(), !isNaN(MM.m[0]) && (iM.multiplyAtIndex(0, this._scalingDeterminant), MM.multiplyToRef(iM, MM), !0)
      }
      XE() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = jM.q.Zero();
        return this.getPositionToRef(MM, rM, iM), iM
      }
      getPositionToRef() {
        let MM = arguments.length > 1 ? arguments[1] : void 0,
          rM = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const MM = this.getLocalMatrix();
          rM.x = MM.m[12], rM.y = MM.m[13], rM.z = MM.m[14]
        } else {
          const iM = oM._TmpMats[0].jR(this.getAbsoluteMatrix());
          MM && iM.multiplyToRef(MM.getWorldMatrix(), iM), rM.x = iM.m[12], rM.y = iM.m[13], rM.z = iM.m[14]
        }
      }
      getAbsolutePosition() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const rM = jM.q.Zero();
        return this.getPositionToRef(1, MM, rM), rM
      }
      getAbsolutePositionToRef(MM, rM) {
        this.getPositionToRef(1, MM, rM)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.jR(this._localMatrix);
          const MM = this._skeleton.getPoseMatrix();
          MM && this._absoluteMatrix.multiplyToRef(MM, this._absoluteMatrix)
        }
        const MM = this.children,
          rM = MM.length;
        for (let iM = 0; iM < rM; iM++) MM[iM].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      eT(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = jM.q.Zero();
        return this.getDirectionToRef(MM, rM, iM), iM
      }
      getDirectionToRef(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = oM._TmpMats[0].jR(this.getAbsoluteMatrix());
        rM && OM.multiplyToRef(rM.getWorldMatrix(), OM), jM.q.TransformNormalToRef(MM, OM, iM), iM.normalize()
      }
      getRotation() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = jM.q.Zero();
        return this.getRotationToRef(MM, rM, iM), iM
      }
      getRotationToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = oM._TmpQuat;
        this.getRotationQuaternionToRef(MM, rM, OM), OM.toEulerAnglesToRef(iM)
      }
      getRotationQuaternion() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = jM.h.Identity();
        return this.getRotationQuaternionToRef(MM, rM, iM), iM
      }
      getRotationQuaternionToRef() {
        let MM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          rM = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), rM.jR(this._localRotation);
        else {
          const iM = oM._TmpMats[0],
            OM = this.getAbsoluteMatrix();
          MM ? OM.multiplyToRef(MM.getWorldMatrix(), iM) : iM.jR(OM), iM.multiplyAtIndex(0, this._scalingDeterminant), iM.multiplyAtIndex(1, this._scalingDeterminant), iM.multiplyAtIndex(2, this._scalingDeterminant), iM.decompose(void 0, rM, void 0)
        }
      }
      getRotationMatrix() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 ? arguments[1] : void 0;
        const iM = jM.d.Identity();
        return this.getRotationMatrixToRef(MM, rM, iM), iM
      }
      getRotationMatrixToRef() {
        let MM = arguments.length > 1 ? arguments[1] : void 0,
          rM = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(rM);
        else {
          const iM = oM._TmpMats[0],
            OM = this.getAbsoluteMatrix();
          MM ? OM.multiplyToRef(MM.getWorldMatrix(), iM) : iM.jR(OM), iM.multiplyAtIndex(0, this._scalingDeterminant), iM.multiplyAtIndex(1, this._scalingDeterminant), iM.multiplyAtIndex(2, this._scalingDeterminant), iM.getRotationMatrixToRef(rM)
        }
      }
      getAbsolutePositionFromLocal(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = jM.q.Zero();
        return this.getAbsolutePositionFromLocalToRef(MM, rM, iM), iM
      }
      getAbsolutePositionFromLocalToRef(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = oM._TmpMats[0].jR(this.getAbsoluteMatrix());
        rM && OM.multiplyToRef(rM.getWorldMatrix(), OM), jM.q.TransformCoordinatesToRef(MM, OM, iM)
      }
      getLocalPositionFromAbsolute(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = jM.q.Zero();
        return this.getLocalPositionFromAbsoluteToRef(MM, rM, iM), iM
      }
      getLocalPositionFromAbsoluteToRef(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = oM._TmpMats[0].jR(this.getAbsoluteMatrix());
        rM && OM.multiplyToRef(rM.getWorldMatrix(), OM), OM.invert(), jM.q.TransformCoordinatesToRef(MM, OM, iM)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const MM = this._skeleton.bones.indexOf(this);
        if (-1 !== MM && this._skeleton.bones.splice(MM, 1), this._parentNode && this._parentNode.children) {
          const MM = this._parentNode.children,
            rM = MM.indexOf(this); - 1 !== rM && MM.splice(rM, 1)
        }
        super.dispose()
      }
    }
    oM._TmpVecs = (0, DM.c)(2, jM.q.Zero), oM._TmpQuat = jM.h.Identity(), oM._TmpMats = (0, DM.c)(5, jM.d.Identity), (sM = oM.prototype).copyAnimationRange ?? (sM.copyAnimationRange = (0, ZM.j)("Bone", "copyAnimationRange"));
    var fM = iM(41196);
    let YM = !1;
    var NM = iM(41066),
      AM = iM(41424),
      xM = iM(41433),
      vM = iM(41426),
      FM = iM(41231);

    function BM(MM, rM) {
      const iM = (0, HM.RandomRange)(0, 1);
      zM.h.LerpToRef(rM.color1, rM.color2, iM, MM.color)
    }

    function XM(MM, rM) {
      rM.colorDead.subtractToRef(MM.color, rM._colorDiff), rM._colorDiff.scaleToRef(1 / MM.lifeTime, MM.colorStep)
    }

    function IM(MM, rM) {
      MM._properties.currentColorGradient = rM._colorGradients[0], MM._properties.currentColorGradient.getColorToRef(MM.color), MM._properties.currentColor1.jR(MM.color), rM._colorGradients.length > 1 ? rM._colorGradients[1].getColorToRef(MM._properties.currentColor2) : MM._properties.currentColor2.jR(MM.color)
    }

    function KM(MM, rM) {
      const iM = rM._colorGradients;
      OM.i.GetCurrentGradient(rM._ratio, iM, ((rM, iM, OM) => {
        rM !== MM._properties.currentColorGradient && (MM._properties.currentColor1.jR(MM._properties.currentColor2), iM.getColorToRef(MM._properties.currentColor2), MM._properties.currentColorGradient = rM), zM.h.LerpToRef(MM._properties.currentColor1, MM._properties.currentColor2, OM, MM.color), MM.color.a < 0 && (MM.color.a = 0)
      }))
    }

    function qM(MM, rM) {
      MM.colorStep.scaleToRef(rM._scaledUpdateSpeed, rM._scaledColorStep), MM.color.addInPlace(rM._scaledColorStep), MM.color.a < 0 && (MM.color.a = 0)
    }

    function TM(MM, rM) {
      OM.i.GetCurrentGradient(rM._ratio, rM._angularSpeedGradients, ((rM, iM, OM) => {
        rM !== MM._properties.currentAngularSpeedGradient && (MM._properties.currentAngularSpeed1 = MM._properties.currentAngularSpeed2, MM._properties.currentAngularSpeed2 = iM.getFactor(), MM._properties.currentAngularSpeedGradient = rM), MM.angularSpeed = (0, HM.Lerp)(MM._properties.currentAngularSpeed1, MM._properties.currentAngularSpeed2, OM)
      }))
    }

    function VM(MM, rM) {
      MM.angle += MM.angularSpeed * rM._scaledUpdateSpeed
    }

    function cM(MM, rM) {
      rM.particleEmitterType.startDirectionFunction(rM._emitterWorldMatrix, MM.direction, MM, rM.isLocal, rM._emitterInverseWorldMatrix)
    }

    function Mr(MM, rM) {
      rM.startDirectionFunction(rM._emitterWorldMatrix, MM.direction, MM, rM.isLocal)
    }

    function rr(MM, rM) {
      MM._properties.currentVelocityGradient = rM._velocityGradients[0], MM._properties.currentVelocity1 = MM._properties.currentVelocityGradient.getFactor(), rM._velocityGradients.length > 1 ? MM._properties.currentVelocity2 = rM._velocityGradients[1].getFactor() : MM._properties.currentVelocity2 = MM._properties.currentVelocity1
    }

    function ir(MM, rM) {
      MM._properties.currentLimitVelocityGradient = rM._limitVelocityGradients[0], MM._properties.currentLimitVelocity1 = MM._properties.currentLimitVelocityGradient.getFactor(), rM._limitVelocityGradients.length > 1 ? MM._properties.currentLimitVelocity2 = rM._limitVelocityGradients[1].getFactor() : MM._properties.currentLimitVelocity2 = MM._properties.currentLimitVelocity1
    }

    function Or(MM, rM) {
      OM.i.GetCurrentGradient(rM._ratio, rM._velocityGradients, ((rM, iM, OM) => {
        rM !== MM._properties.currentVelocityGradient && (MM._properties.currentVelocity1 = MM._properties.currentVelocity2, MM._properties.currentVelocity2 = iM.getFactor(), MM._properties.currentVelocityGradient = rM), MM._properties.directionScale *= (0, HM.Lerp)(MM._properties.currentVelocity1, MM._properties.currentVelocity2, OM)
      }))
    }

    function Sr(MM, rM) {
      OM.i.GetCurrentGradient(rM._ratio, rM._limitVelocityGradients, ((iM, OM, SM) => {
        iM !== MM._properties.currentLimitVelocityGradient && (MM._properties.currentLimitVelocity1 = MM._properties.currentLimitVelocity2, MM._properties.currentLimitVelocity2 = OM.getFactor(), MM._properties.currentLimitVelocityGradient = iM);
        const jM = (0, HM.Lerp)(MM._properties.currentLimitVelocity1, MM._properties.currentLimitVelocity2, SM);
        MM.direction.length() > jM && MM.direction.scaleInPlace(rM.limitVelocityDamping)
      }))
    }

    function jr(MM) {
      MM.direction.scaleToRef(MM._properties.directionScale, MM._properties.scaledDirection)
    }

    function ar(MM, rM) {
      rM.particleEmitterType.startPositionFunction(rM._emitterWorldMatrix, MM.position, MM, rM.isLocal)
    }

    function Pr(MM, rM) {
      rM.startPositionFunction(rM._emitterWorldMatrix, MM.position, MM, rM.isLocal)
    }

    function nr(MM, rM) {
      MM._properties.localPosition ? MM._properties.localPosition.jR(MM.position) : MM._properties.localPosition = MM.position.clone(), jM.q.TransformCoordinatesToRef(MM._properties.localPosition, rM._emitterWorldMatrix, MM.position)
    }

    function Qr(MM, rM) {
      rM.isLocal && MM._properties.localPosition ? (MM._properties.localPosition.addInPlace(MM._properties.scaledDirection), jM.q.TransformCoordinatesToRef(MM._properties.localPosition, rM._emitterWorldMatrix, MM.position)) : MM.position.addInPlace(MM._properties.scaledDirection)
    }

    function zr(MM, rM) {
      MM._properties.currentDragGradient = rM._dragGradients[0], MM._properties.currentDrag1 = MM._properties.currentDragGradient.getFactor(), rM._dragGradients.length > 1 ? MM._properties.currentDrag2 = rM._dragGradients[1].getFactor() : MM._properties.currentDrag2 = MM._properties.currentDrag1
    }

    function Lr(MM, rM) {
      OM.i.GetCurrentGradient(rM._ratio, rM._dragGradients, ((rM, iM, OM) => {
        rM !== MM._properties.currentDragGradient && (MM._properties.currentDrag1 = MM._properties.currentDrag2, MM._properties.currentDrag2 = iM.getFactor(), MM._properties.currentDragGradient = rM);
        const SM = (0, HM.Lerp)(MM._properties.currentDrag1, MM._properties.currentDrag2, OM);
        MM._properties.scaledDirection.scaleInPlace(1 - SM)
      }))
    }

    function mr(MM, rM) {
      MM._properties.randomNoiseCoordinates1 && MM._properties.randomNoiseCoordinates2 ? (MM._properties.randomNoiseCoordinates1.iMM(Math.random(), Math.random(), Math.random()), MM._properties.randomNoiseCoordinates2.iMM(Math.random(), Math.random(), Math.random())) : (MM._properties.randomNoiseCoordinates1 = new jM.q(Math.random(), Math.random(), Math.random()), MM._properties.randomNoiseCoordinates2 = new jM.q(Math.random(), Math.random(), Math.random()))
    }

    function Hr(MM, rM) {
      const iM = rM._noiseTextureData,
        OM = rM._noiseTextureSize;
      if (iM && OM && MM._properties.randomNoiseCoordinates1 && MM._properties.randomNoiseCoordinates2) {
        const SM = rM._fetchR(MM._properties.randomNoiseCoordinates1.x, MM._properties.randomNoiseCoordinates1.y, OM.width, OM.height, iM),
          aM = rM._fetchR(MM._properties.randomNoiseCoordinates1.z, MM._properties.randomNoiseCoordinates2.x, OM.width, OM.height, iM),
          PM = rM._fetchR(MM._properties.randomNoiseCoordinates2.y, MM._properties.randomNoiseCoordinates2.z, OM.width, OM.height, iM),
          nM = jM.l.sh[0],
          QM = jM.l.sh[1];
        nM.iMM((2 * SM - 1) * rM.noiseStrength.x, (2 * aM - 1) * rM.noiseStrength.y, (2 * PM - 1) * rM.noiseStrength.z), nM.scaleToRef(rM._tempScaledUpdateSpeed, QM), MM.direction.addInPlace(QM)
      }
    }

    function hr(MM, rM) {
      rM.gravity.scaleToRef(rM._tempScaledUpdateSpeed, rM._scaledGravity), MM.direction.addInPlace(rM._scaledGravity)
    }

    function Jr(MM, rM) {
      MM.size = (0, HM.RandomRange)(rM.minSize, rM.maxSize), MM.scale.iMM((0, HM.RandomRange)(rM.minScaleX, rM.maxScaleX), (0, HM.RandomRange)(rM.minScaleY, rM.maxScaleY))
    }

    function dr(MM, rM) {
      MM._properties.currentSizeGradient = rM._sizeGradients[0], MM._properties.currentSize1 = MM._properties.currentSizeGradient.getFactor(), MM.size = MM._properties.currentSize1, rM._sizeGradients.length > 1 ? MM._properties.currentSize2 = rM._sizeGradients[1].getFactor() : MM._properties.currentSize2 = MM._properties.currentSize1, MM.scale.iMM((0, HM.RandomRange)(rM.minScaleX, rM.maxScaleX), (0, HM.RandomRange)(rM.minScaleY, rM.maxScaleY))
    }

    function yr(MM, rM) {
      const iM = rM._actualFrame / rM.targetStopDuration;
      OM.i.GetCurrentGradient(iM, rM._startSizeGradients, ((iM, OM, SM) => {
        iM !== rM._currentStartSizeGradient && (rM._currentStartSize1 = rM._currentStartSize2, rM._currentStartSize2 = OM.getFactor(), rM._currentStartSizeGradient = iM);
        const jM = (0, HM.Lerp)(rM._currentStartSize1, rM._currentStartSize2, SM);
        MM.scale.scaleInPlace(jM)
      }))
    }

    function lr(MM, rM) {
      OM.i.GetCurrentGradient(rM._ratio, rM._sizeGradients, ((rM, iM, OM) => {
        rM !== MM._properties.currentSizeGradient && (MM._properties.currentSize1 = MM._properties.currentSize2, MM._properties.currentSize2 = iM.getFactor(), MM._properties.currentSizeGradient = rM), MM.size = (0, HM.Lerp)(MM._properties.currentSize1, MM._properties.currentSize2, OM)
      }))
    }

    function Er(MM, rM) {
      MM.remapData = new jM.u(0, 1, 0, 1)
    }

    function Ur(MM, rM) {
      rM._colorRemapGradients && rM._colorRemapGradients.length > 0 && OM.i.GetCurrentGradient(rM._ratio, rM._colorRemapGradients, ((rM, iM, OM) => {
        const SM = (0, HM.Lerp)(rM.factor1, iM.factor1, OM),
          jM = (0, HM.Lerp)(rM.factor2, iM.factor2, OM);
        MM.remapData.x = SM, MM.remapData.y = jM - SM
      })), rM._alphaRemapGradients && rM._alphaRemapGradients.length > 0 && OM.i.GetCurrentGradient(rM._ratio, rM._alphaRemapGradients, ((rM, iM, OM) => {
        const SM = (0, HM.Lerp)(rM.factor1, iM.factor1, OM),
          jM = (0, HM.Lerp)(rM.factor2, iM.factor2, OM);
        MM.remapData.z = SM, MM.remapData.w = jM - SM
      }))
    }

    function Gr(MM, rM) {
      const iM = (0, HM.Clamp)(rM._actualFrame / rM.targetStopDuration);
      OM.i.GetCurrentGradient(iM, rM._lifeTimeGradients, ((rM, OM) => {
        const SM = rM,
          jM = OM,
          aM = SM.getFactor(),
          PM = jM.getFactor(),
          nM = (iM - SM.gradient) / (jM.gradient - SM.gradient);
        MM.lifeTime = (0, HM.Lerp)(aM, PM, nM)
      })), rM._emitPower = (0, HM.RandomRange)(rM.minEmitPower, rM.maxEmitPower)
    }

    function Cr(MM, rM) {
      MM.lifeTime = (0, HM.RandomRange)(rM.minLifeTime, rM.maxLifeTime), rM._emitPower = (0, HM.RandomRange)(rM.minEmitPower, rM.maxEmitPower)
    }

    function er(MM, rM) {
      0 === rM._emitPower ? (MM._properties.initialDirection ? MM._properties.initialDirection.jR(MM.direction) : MM._properties.initialDirection = MM.direction.clone(), MM.direction.set(0, 0, 0)) : (MM._properties.initialDirection = null, MM.direction.scaleInPlace(rM._emitPower)), MM.direction.addInPlace(rM._inheritedVelocityOffset)
    }

    function br(MM, rM) {
      MM.angularSpeed = (0, HM.RandomRange)(rM.minAngularSpeed, rM.maxAngularSpeed), MM.angle = (0, HM.RandomRange)(rM.minInitialRotation, rM.maxInitialRotation)
    }

    function wr(MM, rM) {
      MM._properties.currentAngularSpeedGradient = rM._angularSpeedGradients[0], MM.angularSpeed = MM._properties.currentAngularSpeedGradient.getFactor(), MM._properties.currentAngularSpeed1 = MM.angularSpeed, rM._angularSpeedGradients.length > 1 ? MM._properties.currentAngularSpeed2 = rM._angularSpeedGradients[1].getFactor() : MM._properties.currentAngularSpeed2 = MM._properties.currentAngularSpeed1, MM.angle = (0, HM.RandomRange)(rM.minInitialRotation, rM.maxInitialRotation)
    }

    function tr(MM, rM) {
      MM._properties.initialStartSpriteCellId = rM.startSpriteCellID, MM._properties.initialEndSpriteCellId = rM.endSpriteCellID, MM._properties.initialSpriteCellLoop = rM.spriteCellLoop
    }

    function gr(MM, rM) {
      MM.previousItem = rM.previousItem, MM.nextItem = rM, rM.previousItem && (rM.previousItem.nextItem = MM), rM.previousItem = MM
    }

    function ur(MM, rM) {
      MM.previousItem = rM, MM.nextItem = rM.nextItem, rM.nextItem && (rM.nextItem.previousItem = MM), rM.nextItem = MM
    }

    function Rr(MM) {
      MM.previousItem && (MM.previousItem.nextItem = MM.nextItem), MM.nextItem && (MM.nextItem.previousItem = MM.previousItem)
    }
    var pr = iM(41474);
    class Wr extends CM {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(MM) {
        this._startDirectionFunction !== MM && (this._startDirectionFunction = MM, this._directionCreation.process = MM ? Mr : cM)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(MM) {
        this._startPositionFunction !== MM && (this._startPositionFunction = MM, this._positionCreation.process = MM ? Pr : ar)
      }
      set onDispose(MM) {
        this._onDisposeObserver && this.Rk.remove(this._onDisposeObserver), this._onDisposeObserver = this.Rk.add(MM)
      }
      get xG() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(MM) {
        this._useRampGradients !== MM && (this._useRampGradients = MM, this._resetEffect(), MM ? (this._rampCreation = {
          process: Er,
          previousItem: null,
          nextItem: null
        }, ur(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Ur,
          previousItem: null,
          nextItem: null
        }, ur(this._remapGradientProcessing, this._gravityProcessing))) : (Rr(this._rampCreation), Rr(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(MM) {
        this._isLocal !== MM && (this._isLocal = MM, MM ? (this._isLocalCreation = {
          process: nr,
          previousItem: null,
          nextItem: null
        }, ur(this._isLocalCreation, this._positionCreation)) : Rr(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(MM) {
        this._animationSheetEnabled !== MM && (this._animationSheetEnabled = MM, MM ? (this._sheetCreation = {
          process: tr,
          previousItem: null,
          nextItem: null
        }, ur(this._sheetCreation, this._colorDeadCreation)) : Rr(this._sheetCreation), this._reset())
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[MM]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[MM] ?? this._customWrappers[0]
      }
      setCustomEffect(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[rM] = new AM.c(this._engine), this._customWrappers[rM].effect = MM, this._customWrappers[rM].drawContext && (this._customWrappers[rM].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new SM.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(MM) {
        if (this.noiseTexture !== MM) {
          if (this._noiseTexture = MM, !MM) return Rr(this._noiseCreation), void Rr(this._noiseProcessing);
          this._noiseCreation = {
            process: mr,
            previousItem: null,
            nextItem: null
          }, ur(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Hr,
            previousItem: null,
            nextItem: null
          }, ur(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          QM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        YM || (YM = !0, WM(fM.d, oM)), (0, NM.d)(), super(MM), this._emitterInverseWorldMatrix = jM.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new jM.q, this.Rk = new SM.d, this.onStoppedObservable = new SM.d, this.onStartedObservable = new SM.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new zM.h(0, 0, 0, 0), this._colorDiff = new zM.h(0, 0, 0, 0), this._scaledGravity = jM.q.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = MM => {}, this.recycleParticle = MM => {
          const rM = this._particles.pop();
          rM !== MM && rM.copyTo(MM), rM.metadata = null, this._stockParticles.push(rM)
        }, this._createParticle = () => {
          let MM;
          return 0 !== this._stockParticles.length ? (MM = this._stockParticles.pop(), MM._reset()) : MM = new bM(this), this._prepareParticle(MM), MM
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = rM, this._epsilon = PM, iM && "Scene" !== iM.getClassName() ? (this._engine = iM, this.defaultProjectionMatrix = jM.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = iM || nM.c.LastCreatedScene, this._engine = this._scene.ph(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.aG.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Cr,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: ar,
          previousItem: null,
          nextItem: null
        }, ur(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: cM,
          previousItem: null,
          nextItem: null
        }, ur(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: er,
          previousItem: null,
          nextItem: null
        }, ur(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Jr,
          previousItem: null,
          nextItem: null
        }, ur(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: br,
          previousItem: null,
          nextItem: null
        }, ur(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: BM,
          previousItem: null,
          nextItem: null
        }, ur(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: XM,
          previousItem: null,
          nextItem: null
        }, ur(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, QM || (this._colorProcessing = {
          process: qM,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: VM,
          previousItem: null,
          nextItem: null
        }, ur(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: jr,
          previousItem: null,
          nextItem: null
        }, ur(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Qr,
          previousItem: null,
          nextItem: null
        }, ur(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: hr,
          previousItem: null,
          nextItem: null
        }, ur(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = aM, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new AM.c(this._engine)
        }, this._customWrappers[0].effect = OM, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new LM.b, this.updateFunction = MM => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((MM => {
            this._noiseTextureData = MM
          })));
          const rM = MM === this._particles;
          for (let iM = 0; iM < MM.length; iM++) {
            const OM = MM[iM];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const SM = OM.age;
            if (OM.age += this._tempScaledUpdateSpeed, OM.age > OM.lifeTime) {
              const MM = OM.age - SM,
                rM = OM.lifeTime - SM;
              this._tempScaledUpdateSpeed = rM * this._tempScaledUpdateSpeed / MM, OM.age = OM.lifeTime
            }
            this._ratio = OM.age / OM.lifeTime, OM._properties.directionScale = this._tempScaledUpdateSpeed;
            let jM = this._updateQueueStart;
            for (; jM;) jM.process(OM, this), jM = jM.nextItem;
            if (this._isAnimationSheetEnabled && !QM && OM.updateCellIndex(), OM._inheritParticleInfoToSubEmitters(), OM.age >= OM.lifeTime) {
              if (this._emitFromParticle(OM), OM._properties.attachedSubEmitters) {
                for (const MM of OM._properties.attachedSubEmitters) MM.particleSystem.disposeOnStop = !0, MM.particleSystem.stop();
                OM._properties.attachedSubEmitters = null
              }
              this.recycleParticle(OM), rM && iM--
            } else;
          }
        }
      }
      serialize(MM) {
        throw new Error("Method not implemented.")
      }
      clone(MM, rM) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Gr : this._lifeTimeCreation.process = Cr
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: yr,
          previousItem: null,
          nextItem: null
        }, ur(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Rr(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(MM) {
        this.targetStopDuration !== MM && (this._targetStopDuration = MM, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(MM, rM, iM) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, MM, rM, iM), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(MM) {
        return this._removeFactorGradient(this._lifeTimeGradients, MM), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(MM, rM, iM) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = dr, this._sizeGradientProcessing = {
          process: lr,
          previousItem: null,
          nextItem: null
        }, gr(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, MM, rM, iM), this
      }
      removeSizeGradient(MM) {
        return this._removeFactorGradient(this._sizeGradients, MM), 0 === this._sizeGradients?.length && (Rr(this._sizeGradientProcessing), this._sizeCreation.process = Jr), this
      }
      addColorRemapGradient(MM, rM, iM) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, MM, rM, iM), this
      }
      removeColorRemapGradient(MM) {
        return this._removeFactorGradient(this._colorRemapGradients, MM), this
      }
      addAlphaRemapGradient(MM, rM, iM) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, MM, rM, iM), this
      }
      removeAlphaRemapGradient(MM) {
        return this._removeFactorGradient(this._alphaRemapGradients, MM), this
      }
      addAngularSpeedGradient(MM, rM, iM) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = wr, this._angularSpeedGradientProcessing = {
          process: TM,
          previousItem: null,
          nextItem: null
        }, gr(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, MM, rM, iM), this
      }
      removeAngularSpeedGradient(MM) {
        return this._removeFactorGradient(this._angularSpeedGradients, MM), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = br, Rr(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(MM, rM, iM) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: rr,
          previousItem: null,
          nextItem: null
        }, ur(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Or,
          previousItem: null,
          nextItem: null
        }, gr(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, MM, rM, iM), this
      }
      removeVelocityGradient(MM) {
        return this._removeFactorGradient(this._velocityGradients, MM), 0 === this._velocityGradients?.length && (Rr(this._velocityCreation), Rr(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(MM, rM, iM) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: ir,
          previousItem: null,
          nextItem: null
        }, ur(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Sr,
          previousItem: null,
          nextItem: null
        }, ur(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, MM, rM, iM), this
      }
      removeLimitVelocityGradient(MM) {
        return this._removeFactorGradient(this._limitVelocityGradients, MM), 0 === this._limitVelocityGradients?.length && (Rr(this._limitVelocityCreation), Rr(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(MM, rM, iM) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: zr,
          previousItem: null,
          nextItem: null
        }, gr(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Lr,
          previousItem: null,
          nextItem: null
        }, gr(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, MM, rM, iM), this
      }
      removeDragGradient(MM) {
        return this._removeFactorGradient(this._dragGradients, MM), 0 === this._dragGradients?.length && (Rr(this._dragCreation), Rr(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(MM, rM, iM) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, MM, rM, iM), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(MM) {
        return this._removeFactorGradient(this._startSizeGradients, MM), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const MM = new Uint8Array(4 * this._rawTextureWidth),
          rM = zM.j.Color3[0];
        for (let iM = 0; iM < this._rawTextureWidth; iM++) {
          const SM = iM / this._rawTextureWidth;
          OM.i.GetCurrentGradient(SM, this._rampGradients, ((OM, SM, jM) => {
            zM.d.LerpToRef(OM.color, SM.color, jM, rM), MM[4 * iM] = 255 * rM.r, MM[4 * iM + 1] = 255 * rM.g, MM[4 * iM + 2] = 255 * rM.b, MM[4 * iM + 3] = 255
          }))
        }
        this._rampGradientsTexture = PM.e.CreateRGBATexture(MM, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((MM, rM) => MM.gradient < rM.gradient ? -1 : MM.gradient > rM.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(MM, rM) {
        this._rampGradients || (this._rampGradients = []);
        const iM = new OM.c(MM, rM);
        return this._rampGradients.push(iM), this._syncRampGradientTexture(), this
      }
      removeRampGradient(MM) {
        return this._removeGradientAndTexture(MM, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(MM, rM, iM) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = IM, this._colorProcessing.process = KM);
        const SM = new OM.b(MM, rM, iM);
        return this._colorGradients.push(SM), this._colorGradients.sort(((MM, rM) => MM.gradient < rM.gradient ? -1 : MM.gradient > rM.gradient ? 1 : 0)), this
      }
      removeColorGradient(MM) {
        if (!this._colorGradients) return this;
        let rM = 0;
        for (const iM of this._colorGradients) {
          if (iM.gradient === MM) {
            this._colorGradients.splice(rM, 1);
            break
          }
          rM++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = BM, this._colorProcessing.process = qM), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const MM of this._drawWrappers)
            if (MM)
              for (const rM of MM) rM?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(MM, rM, iM, OM, SM) {
        return SM[4 * (((MM = .5 * Math.abs(MM) + .5) * iM % iM | 0) + ((rM = .5 * Math.abs(rM) + .5) * OM % OM | 0) * iM)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const MM = this._engine,
          rM = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * rM), this._vertexBuffer = new aM.d(MM, this._vertexData, !0, rM);
        let iM = 0;
        const OM = this._vertexBuffer.createVertexBuffer(aM.j.PositionKind, iM, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[aM.j.PositionKind] = OM, iM += 3;
        const SM = this._vertexBuffer.createVertexBuffer(aM.j.ColorKind, iM, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[aM.j.ColorKind] = SM, iM += 4;
        const jM = this._vertexBuffer.createVertexBuffer("angle", iM, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = jM, iM += 1;
        const PM = this._vertexBuffer.createVertexBuffer("size", iM, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = PM, iM += 2, this._isAnimationSheetEnabled) {
          const MM = this._vertexBuffer.createVertexBuffer("cellIndex", iM, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = MM, iM += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const MM = this._vertexBuffer.createVertexBuffer("direction", iM, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = MM, iM += 3
        }
        if (this._useRampGradients) {
          const MM = this._vertexBuffer.createVertexBuffer("remapData", iM, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = MM, iM += 4
        }
        let nM;
        if (this._useInstancing) {
          const rM = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new aM.d(MM, rM, !1, 2), nM = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else nM = this._vertexBuffer.createVertexBuffer("offset", iM, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = nM, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const MM = [],
          rM = [];
        let iM = 0;
        for (let OM = 0; OM < this._capacity; OM++) MM.push(iM), MM.push(iM + 1), MM.push(iM + 2), MM.push(iM), MM.push(iM + 2), MM.push(iM + 3), rM.push(iM, iM + 1, iM + 1, iM + 2, iM + 2, iM + 3, iM + 3, iM, iM, iM + 3), iM += 4;
        this._indexBuffer = this._engine.createIndexBuffer(MM), this._linesIndexBuffer = this._engine.createIndexBuffer(rM)
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (MM) return this.startDelay = MM, void setTimeout((() => {
          this.start(0)
        }), MM);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const MM = this.noiseTexture;
          if (MM && MM.onGeneratedObservable) MM.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let rM = 0; rM < this.preWarmCycles; rM++) this.animate(!0), MM.render()
            }))
          }));
          else
            for (let rM = 0; rM < this.preWarmCycles; rM++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(MM))
      }
      _postStop(MM) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(MM, rM, iM, OM) {
        let SM = MM * this._vertexBufferSize;
        const aM = jM.l.sh[0].jR(this._scene?.floatingOriginOffset || jM.q.ZeroReadOnly);
        if (this._vertexData[SM++] = rM.position.x + this.worldOffset.x - aM.x, this._vertexData[SM++] = rM.position.y + this.worldOffset.y - aM.y, this._vertexData[SM++] = rM.position.z + this.worldOffset.z - aM.z, this._vertexData[SM++] = rM.color.r, this._vertexData[SM++] = rM.color.g, this._vertexData[SM++] = rM.color.b, this._vertexData[SM++] = rM.color.a, this._vertexData[SM++] = rM.angle, this._vertexData[SM++] = rM.scale.x * rM.size, this._vertexData[SM++] = rM.scale.y * rM.size, this._isAnimationSheetEnabled && (this._vertexData[SM++] = rM.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[SM++] = rM.direction.x, this._vertexData[SM++] = rM.direction.y, this._vertexData[SM++] = rM.direction.z);
        else if (rM._properties.initialDirection) {
          let MM = rM._properties.initialDirection;
          this.isLocal && (jM.q.TransformNormalToRef(MM, this._emitterWorldMatrix, jM.l.sh[0]), MM = jM.l.sh[0]), 0 === MM.x && 0 === MM.z && (MM.x = .001), this._vertexData[SM++] = MM.x, this._vertexData[SM++] = MM.y, this._vertexData[SM++] = MM.z
        } else {
          let MM = rM.direction;
          this.isLocal && (jM.q.TransformNormalToRef(MM, this._emitterWorldMatrix, jM.l.sh[0]), MM = jM.l.sh[0]), 0 === MM.x && 0 === MM.z && (MM.x = .001), this._vertexData[SM++] = MM.x, this._vertexData[SM++] = MM.y, this._vertexData[SM++] = MM.z
        }
        this._useRampGradients && rM.remapData && (this._vertexData[SM++] = rM.remapData.x, this._vertexData[SM++] = rM.remapData.y, this._vertexData[SM++] = rM.remapData.z, this._vertexData[SM++] = rM.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === iM ? iM = this._epsilon : 1 === iM && (iM = 1 - this._epsilon), 0 === OM ? OM = this._epsilon : 1 === OM && (OM = 1 - this._epsilon)), this._vertexData[SM++] = iM, this._vertexData[SM] = OM)
      }
      _prepareParticle(MM) {}
      _createNewOnes(MM) {
        let rM;
        for (let iM = 0; iM < MM && this._particles.length !== this._capacity; iM++) {
          rM = this._createParticle(), this._particles.push(rM);
          let MM = this._createQueueStart;
          for (; MM;) MM.process(rM, this), MM = MM.nextItem;
          rM._inheritParticleInfoToSubEmitters()
        }
      }
      _update(MM) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const MM = this.emitter;
          this._emitterWorldMatrix = MM.getWorldMatrix()
        } else {
          const MM = this.emitter;
          this._emitterWorldMatrix = jM.d.Translation(MM.x, MM.y, MM.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(MM)
      }
      static _GetAttributeNamesOrOptions() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = [aM.j.PositionKind, aM.j.ColorKind, "angle", "offset", "size"];
        return MM && OM.push("cellIndex"), rM || OM.push("direction"), iM && OM.push("remapData"), OM
      }
      static _GetEffectCreationOptions() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, xM.b)(OM), MM && OM.push("particlesInfos"), rM && OM.push("logarithmicDepthConstant"), iM && (OM.push("vFogInfos"), OM.push("vFogColor")), OM
      }
      fillDefines(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, xM.j)(this, this._scene, MM), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && MM.push("#define FOG")), this._isAnimationSheetEnabled && MM.push("#define ANIMATESHEET"), this.useLogarithmicDepth && MM.push("#define LOGARITHMICDEPTH"), rM === CM.BLENDMODE_MULTIPLY && MM.push("#define BLENDMULTIPLYMODE"), this.isLocal && MM.push("#define LOCAL"), this._useRampGradients && MM.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (MM.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            MM.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            MM.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && MM.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            MM.push("#define BILLBOARDMODE_ALL")
        }
        iM && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), MM.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(MM, rM, iM) {
        rM.push(...Wr._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), MM.push(...Wr._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), iM.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, FM.i)(MM, this._imageProcessingConfigurationDefines), (0, FM.e)(iM, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(MM) {
        var rM;
        const iM = this._getCustomDrawWrapper(MM);
        if (iM?.effect) return iM;
        const OM = [];
        this.fillDefines(OM, MM);
        const jM = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          aM = pr.c._PrepareStringDefines(jM, OM),
          PM = aM ? pr.c.GetConfiguration(jM) : void 0;
        let nM = this._drawWrappers[jM];
        nM || (nM = this._drawWrappers[jM] = [], 0 === jM || this._renderPassObserver || (this._renderPassObserver = ((rM = this._engine)._onReleaseRenderPassObservable ?? (rM._onReleaseRenderPassObservable = new SM.d)).add((MM => {
          const rM = this._drawWrappers[MM];
          if (rM) {
            for (const MM of rM) MM?.dispose();
            delete this._drawWrappers[MM]
          }
        }))));
        let QM = nM[MM];
        QM || (QM = new AM.c(this._engine), QM.drawContext && (QM.drawContext.useInstancing = this._useInstancing), nM[MM] = QM);
        const zM = OM.join("\n");
        if (QM.defines !== zM) {
          const MM = [],
            rM = [],
            iM = [];
          this.fillUniformsAttributesAndSamplerNames(rM, MM, iM), aM && (rM.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== PM?.defines.PREPASS_LOCAL_POSITION_INDEX && rM.push("inverseEmitterWM", "geometryWorldOffset")), QM.setEffect(this._engine.createEffect("particles", {
            attributes: MM,
            uniformsNames: rM,
            samplers: iM,
            defines: zM,
            shaderLanguage: this._shaderLanguage,
            multiTarget: aM,
            indexParameters: aM ? {
              buffersCount: PM?._mrtCount ?? 0
            } : void 0
          }, this._engine), zM)
        }
        return QM
      }
      _bindGeometryRendering(MM) {
        const rM = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          iM = pr.c.GetConfiguration(rM);
        if (!iM?._defines) return;
        MM.setFloat("objectId", 0), MM.setInt("meshBlendTag", 0);
        const OM = this._scene?.activeCamera;
        if (MM.setFloat2("cameraInfo", OM?.minZ ?? 0, OM?.maxZ ?? 1), this.isLocal && void 0 !== iM.defines.PREPASS_LOCAL_POSITION_INDEX) {
          MM.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const rM = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || jM.q.ZeroReadOnly, jM.l.sh[0]);
          MM.setVector3("geometryWorldOffset", rM)
        }
      }
      animate() {
        let MM, rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!rM && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (rM ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) MM = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const rM = this._calculateEmitRate();
            MM = rM * this._scaledUpdateSpeed | 0, this._newPartsExcess += rM * this._scaledUpdateSpeed - MM
          }
          if (this._newPartsExcess > 1 && (MM += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? MM = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(MM), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !rM) {
            let MM = 0;
            for (let rM = 0; rM < this._particles.length; rM++) {
              const iM = this._particles[rM];
              this._appendParticleVertices(MM, iM), MM += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const MM = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  rM = this._particles.length;
                rM < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, rM * MM, this._fixedCapacityHighWaterMark * MM), this._fixedCapacityHighWaterMark = rM, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const MM = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * MM), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let MM = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const rM = this._actualFrame / this.targetStopDuration;
          OM.i.GetCurrentGradient(rM, this._emitRateGradients, ((rM, iM, OM) => {
            rM !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = iM.getFactor(), this._currentEmitRateGradient = rM), MM = (0, HM.Lerp)(this._currentEmitRate1, this._currentEmitRate2, OM)
          }))
        }
        return MM
      }
      _appendParticleVertices(MM, rM) {
        this._appendParticleVertex(MM++, rM, 0, 0), this._useInstancing || (this._appendParticleVertex(MM++, rM, 1, 0), this._appendParticleVertex(MM++, rM, 1, 1), this._appendParticleVertex(MM, rM, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Wr.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([iM.e(655).then((() => iM(63938))), iM.e(649).then((() => iM(63942)))])) : await Promise.all([iM.e(638).then((() => iM(63944))), Promise.all([iM.e(631), iM.e(664)]).then((() => iM(63948)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== CM.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(CM.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(CM.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(MM) {
        const rM = this._getWrapper(MM),
          iM = rM.effect,
          OM = this._engine;
        OM.enableEffect(rM);
        const SM = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        iM.setTexture("diffuseSampler", this.particleTexture), iM.setMatrix("view", SM);
        const aM = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (iM.setMatrix("projection", aM), this._isAnimationSheetEnabled && this.particleTexture) {
          const MM = this.particleTexture.getBaseSize();
          iM.setFloat3("particlesInfos", this.spriteCellWidth / MM.width, this.spriteCellHeight / MM.height, this.spriteCellWidth / MM.width)
        }
        if (iM.setVector2("translationPivot", this.translationPivot), iM.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const MM = this._scene.activeCamera;
          iM.setVector3("eyePosition", MM.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), iM.setTexture("rampSampler", this._rampGradientsTexture));
        const PM = iM.defines;
        this._scene && ((0, xM.e)(iM, this, this._scene), this.applyFog && (0, vM.g)(this._scene, void 0, iM)), PM.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (SM.invertToRef(jM.l.Matrix[0]), iM.setMatrix("invView", jM.l.Matrix[0])), iM._multiTarget && this._bindGeometryRendering(iM), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? OM.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, iM) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, iM)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? OM.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, iM) : OM.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, iM), this.useLogarithmicDepth && this._scene && (0, vM.q)(PM, iM, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(iM), this._setEngineBasedOnBlendMode(MM), iM._multiTarget && pr.c._BindZeroAlphaDiscard(OM, iM);
        let nM = !1;
        try {
          pr.c._BindAttachmentsForEffect(OM, iM) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(iM), this._useInstancing ? this._scene?.forceWireframe ? OM.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : OM.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? OM.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : OM.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), nM = !0)
        } finally {
          pr.c._RestoreAttachments(OM)
        }
        return nM ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const MM = this._engine;
        let rM;
        return MM.setState && (MM.setState(!1), this.forceDepthWrite && MM.setDepthWrite(!0)), rM = this.blendMode === CM.BLENDMODE_MULTIPLYADD ? this._render(CM.BLENDMODE_MULTIPLY) + this._render(CM.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), rM
      }
      _onDispose() {}
      dispose() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), MM && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), MM && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(rM, iM), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const MM = this._scene.aG.indexOf(this);
          MM > -1 && this._scene.aG.splice(MM, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Rk.notifyObservers(this), this.Rk.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Wr.ForceGLSL = !1;
    var sr, Dr = iM(38085);
    ! function(MM) {
      MM[MM.ATTACHED = 0] = "ATTACHED", MM[MM.END = 1] = "END"
    }(sr || (sr = {}));
    class kr {
      constructor(MM) {
        if (this.particleSystem = MM, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !MM.emitter || !MM.emitter.dispose) {
          const rM = (0, Dr.b)("BABYLON.AbstractMesh");
          MM.emitter = new rM("SubemitterSystemEmitter", MM.Hk()), MM._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let MM = this.particleSystem.emitter;
        if (MM) {
          if (MM instanceof jM.q) MM = MM.clone();
          else if (-1 !== MM.getClassName().indexOf("Mesh")) {
            MM = new((0, Dr.b)("BABYLON.Mesh"))("", MM.Hk()), MM.isVisible = !1
          }
        } else MM = new jM.q;
        const rM = new kr(this.particleSystem.clone(this.particleSystem.name, MM));
        return rM.particleSystem.name += "Clone", rM.type = this.type, rM.inheritDirection = this.inheritDirection, rM.inheritedVelocityAmount = this.inheritedVelocityAmount, rM.particleSystem._disposeEmitterOnDispose = !0, rM.particleSystem.disposeOnStop = !0, rM
      }
      serialize() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = {};
        return rM.type = this.type, rM.inheritDirection = this.inheritDirection, rM.inheritedVelocityAmount = this.inheritedVelocityAmount, rM.particleSystem = this.particleSystem.serialize(MM), rM
      }
      static _ParseParticleSystem(MM, rM, iM) {
        throw (0, ZM.n)("ParseParticle")
      }
      static Parse(MM, rM, iM) {
        const OM = MM.particleSystem,
          SM = new kr(kr._ParseParticleSystem(OM, rM, iM, !0));
        return SM.type = MM.type, SM.inheritDirection = MM.inheritDirection, SM.inheritedVelocityAmount = MM.inheritedVelocityAmount, SM.particleSystem._isSubEmitter = !0, SM
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Zr = iM(41005),
      or = iM(41121);
    const fr = () => {};
    class Yr {
      constructor() {
        this.particlePositionGenerator = fr, this.particleDestinationGenerator = fr, this.particleDirectionGenerator = fr
      }
      startDirectionFunction(MM, rM, iM, OM) {
        const SM = jM.l.sh[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== fr) this.particleDirectionGenerator(-1, iM, SM);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== fr) {
          this.particleDestinationGenerator(-1, iM, SM);
          const MM = jM.l.sh[1];
          SM.subtractToRef(iM.position, MM), MM.scaleToRef(1 / iM.lifeTime, SM)
        } else SM.set(0, 0, 0);
        OM ? rM.jR(SM) : jM.q.TransformNormalToRef(SM, MM, rM)
      }
      startPositionFunction(MM, rM, iM, OM) {
        const SM = jM.l.sh[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== fr ? this.particlePositionGenerator(-1, iM, SM) : SM.set(0, 0, 0), OM ? rM.jR(SM) : jM.q.TransformCoordinatesToRef(SM, MM, rM)
      }
      clone() {
        const MM = new Yr;
        return mM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {}
      buildUniformLayout(MM) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.particlePositionGenerator = this.particlePositionGenerator, MM.particleDestinationGenerator = this.particleDestinationGenerator, MM
      }
      parse(MM) {
        MM.particlePositionGenerator && (this.particlePositionGenerator = MM.particlePositionGenerator), MM.particleDestinationGenerator && (this.particleDestinationGenerator = MM.particleDestinationGenerator)
      }
    }
    const Nr = jM.q.Zero(),
      Ar = jM.q.Zero(),
      xr = jM.q.Zero();
    class vr {
      constructor() {
        this.strength = 0, this.position = jM.q.Zero()
      }
      _processParticle(MM, rM) {
        this.position.subtractToRef(MM.position, Nr);
        const iM = Nr.lengthSquared() + 1;
        Nr.normalize().scaleToRef(this.strength / iM, Ar), Ar.scaleToRef(rM._tempScaledUpdateSpeed, xr), MM.direction.addInPlace(xr)
      }
      serialize() {
        return {
          position: this.position.HOM(),
          strength: this.strength
        }
      }
    }
    const Fr = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Br extends Wr {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = MM => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const rM = Math.floor(Math.random() * this._subEmitters.length);
          for (const iM of this._subEmitters[rM])
            if (1 === iM.type) {
              const rM = iM.clone();
              MM._inheritParticleInfoToSubEmitter(rM), rM.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(rM.particleSystem), rM.particleSystem.start()
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
      set flowMap(MM) {
        this._flowMap !== MM && (this._flowMap = MM, this._flowMapUpdate && (Rr(this._flowMapUpdate), this._flowMapUpdate = null), MM && (this._flowMapUpdate = {
          process: MM => {
            const rM = this.Hk()?.getTransformMatrix();
            this._flowMap._processParticle(MM, this.flowMapStrength * this._tempScaledUpdateSpeed, rM)
          },
          previousItem: null,
          nextItem: null
        }, ur(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(MM) {
        super.addAttractor(MM), 1 === this._attractors.length && (this._attractorUpdate = {
          process: MM => {
            for (const rM of this._attractors) rM._processParticle(MM, this)
          },
          previousItem: null,
          nextItem: null
        }, ur(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(MM) {
        super.removeAttractor(MM), 0 === this._attractors.length && this._attractorUpdate && Rr(this._attractorUpdate)
      }
      start() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(MM)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const MM of this.subEmitters) MM instanceof Br ? this._subEmitters.push([new kr(MM)]) : MM instanceof kr ? this._subEmitters.push([MM]) : MM instanceof Array && this._subEmitters.push(MM)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const MM of this.activeSubSystems) MM.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const MM = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== MM && this._rootParticleSystem.activeSubSystems.splice(MM, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(MM) {
        MM && this._stopSubEmitters()
      }
      _prepareParticle(MM) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const rM = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          MM._properties.attachedSubEmitters = [];
          for (const iM of rM)
            if (0 === iM.type) {
              const rM = iM.clone();
              MM._properties.attachedSubEmitters.push(rM), rM.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), MM && this.particles)
          for (const iM of this.particles)
            if (iM._properties.attachedSubEmitters)
              for (let MM = iM._properties.attachedSubEmitters.length - 1; MM >= 0; MM -= 1) iM._properties.attachedSubEmitters[MM].dispose();
        if (rM && this.activeSubSystems)
          for (let iM = this.activeSubSystems.length - 1; iM >= 0; iM -= 1) this.activeSubSystems[iM].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let MM = 0; MM < this._subEmitters.length; MM++)
            for (const rM of this._subEmitters[MM]) rM.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(MM, rM, iM, OM) {
        let SM;
        SM = iM instanceof Zr.d ? null : iM;
        const aM = (0, Dr.b)("BABYLON.Texture");
        if (aM && SM)
          if (MM.texture) rM.particleTexture = aM.Parse(MM.texture, SM, OM);
          else if (MM.textureName) {
          const iM = MM.textureSettings;
          if (rM.particleTexture = new aM(OM + MM.textureName, SM, !1, void 0 === MM.invertY || MM.invertY, iM ? iM.samplingMode : void 0), rM.particleTexture.name = MM.textureName, iM) {
            const MM = rM.particleTexture;
            for (const rM of Fr) void 0 !== iM[rM] && (MM[rM] = iM[rM])
          }
        }
        if (MM.emitterId || 0 === MM.emitterId || void 0 !== MM.emitter ? (MM.emitterId || 0 === MM.emitterId) && SM ? (rM.emitter = SM.getLastMeshById(MM.emitterId), rM.emitter || (rM.emitter = jM.q.Zero())) : rM.emitter = jM.q.FromArray(MM.emitter) : rM.emitter = jM.q.Zero(), rM.isLocal = !!MM.isLocal, void 0 !== MM.renderingGroupId && (rM.renderingGroupId = MM.renderingGroupId), void 0 !== MM.isBillboardBased && (rM.isBillboardBased = MM.isBillboardBased), void 0 !== MM.billboardMode && (rM.billboardMode = MM.billboardMode), void 0 !== MM.useLogarithmicDepth && (rM.useLogarithmicDepth = MM.useLogarithmicDepth), MM.animations) {
          for (let iM = 0; iM < MM.animations.length; iM++) {
            const OM = MM.animations[iM],
              SM = (0, Dr.b)("BABYLON.Animation");
            SM && rM.animations.push(SM.Parse(OM))
          }
          rM.beginAnimationOnStart = MM.beginAnimationOnStart, rM.beginAnimationFrom = MM.beginAnimationFrom, rM.beginAnimationTo = MM.beginAnimationTo, rM.beginAnimationLoop = MM.beginAnimationLoop
        }
        if (MM.autoAnimate && SM && SM.beginAnimation(rM, MM.autoAnimateFrom, MM.autoAnimateTo, MM.autoAnimateLoop, MM.autoAnimateSpeed || 1), rM.startDelay = 0 | MM.startDelay, rM.minAngularSpeed = MM.minAngularSpeed, rM.maxAngularSpeed = MM.maxAngularSpeed, rM.minSize = MM.minSize, rM.maxSize = MM.maxSize, MM.minScaleX && (rM.minScaleX = MM.minScaleX, rM.maxScaleX = MM.maxScaleX, rM.minScaleY = MM.minScaleY, rM.maxScaleY = MM.maxScaleY), void 0 !== MM.preWarmCycles && (rM.preWarmCycles = MM.preWarmCycles, rM.preWarmStepOffset = MM.preWarmStepOffset), void 0 !== MM.minInitialRotation && (rM.minInitialRotation = MM.minInitialRotation, rM.maxInitialRotation = MM.maxInitialRotation), rM.minLifeTime = MM.minLifeTime, rM.maxLifeTime = MM.maxLifeTime, rM.minEmitPower = MM.minEmitPower, rM.maxEmitPower = MM.maxEmitPower, rM.emitRate = MM.emitRate, rM.gravity = jM.q.FromArray(MM.gravity), MM.noiseStrength && (rM.noiseStrength = jM.q.FromArray(MM.noiseStrength)), rM.color1 = zM.h.FromArray(MM.color1), rM.color2 = zM.h.FromArray(MM.color2), rM.colorDead = zM.h.FromArray(MM.colorDead), rM.updateSpeed = MM.updateSpeed, rM.targetStopDuration = MM.targetStopDuration, rM.blendMode = MM.blendMode, MM.colorGradients)
          for (const jM of MM.colorGradients) rM.addColorGradient(jM.gradient, zM.h.FromArray(jM.color1), jM.color2 ? zM.h.FromArray(jM.color2) : void 0);
        if (MM.rampGradients) {
          for (const iM of MM.rampGradients) rM.addRampGradient(iM.gradient, zM.d.FromArray(iM.color));
          rM.useRampGradients = MM.useRampGradients
        }
        if (MM.colorRemapGradients)
          for (const jM of MM.colorRemapGradients) rM.addColorRemapGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.alphaRemapGradients)
          for (const jM of MM.alphaRemapGradients) rM.addAlphaRemapGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.sizeGradients)
          for (const jM of MM.sizeGradients) rM.addSizeGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.angularSpeedGradients)
          for (const jM of MM.angularSpeedGradients) rM.addAngularSpeedGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.velocityGradients)
          for (const jM of MM.velocityGradients) rM.addVelocityGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.dragGradients)
          for (const jM of MM.dragGradients) rM.addDragGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.emitRateGradients)
          for (const jM of MM.emitRateGradients) rM.addEmitRateGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.startSizeGradients)
          for (const jM of MM.startSizeGradients) rM.addStartSizeGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.lifeTimeGradients)
          for (const jM of MM.lifeTimeGradients) rM.addLifeTimeGradient(jM.gradient, void 0 !== jM.factor1 ? jM.factor1 : jM.factor, jM.factor2);
        if (MM.limitVelocityGradients) {
          for (const iM of MM.limitVelocityGradients) rM.addLimitVelocityGradient(iM.gradient, void 0 !== iM.factor1 ? iM.factor1 : iM.factor, iM.factor2);
          rM.limitVelocityDamping = MM.limitVelocityDamping
        }
        if (MM.noiseTexture && SM) {
          const iM = (0, Dr.b)("BABYLON.ProceduralTexture");
          rM.noiseTexture = iM.Parse(MM.noiseTexture, SM, OM)
        }
        let PM;
        if (MM.particleEmitterType) {
          switch (MM.particleEmitterType.type) {
            case "SphereParticleEmitter":
              PM = new dM;
              break;
            case "SphereDirectedParticleEmitter":
              PM = new yM;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              PM = new EM;
              break;
            case "ConeDirectedParticleEmitter":
              PM = new UM;
              break;
            case "CylinderParticleEmitter":
              PM = new lM.e;
              break;
            case "CylinderDirectedParticleEmitter":
              PM = new lM.d;
              break;
            case "HemisphericParticleEmitter":
              PM = new JM;
              break;
            case "PointParticleEmitter":
              PM = new hM;
              break;
            case "MeshParticleEmitter":
              PM = new GM;
              break;
            case "CustomParticleEmitter":
              PM = new Yr;
              break;
            default:
              PM = new LM.b
          }
          PM.parse(MM.particleEmitterType, SM)
        } else PM = new LM.b, PM.parse(MM, SM);
        rM.particleEmitterType = PM, rM.startSpriteCellID = MM.startSpriteCellID, rM.endSpriteCellID = MM.endSpriteCellID, rM.spriteCellLoop = MM.spriteCellLoop ?? !0, rM.spriteCellWidth = MM.spriteCellWidth, rM.spriteCellHeight = MM.spriteCellHeight, rM.spriteCellChangeSpeed = MM.spriteCellChangeSpeed, rM.spriteRandomStartCell = MM.spriteRandomStartCell, rM.disposeOnStop = MM.disposeOnStop ?? !1, rM.manualEmitCount = MM.manualEmitCount ?? -1
      }
      static Parse(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SM = arguments.length > 4 ? arguments[4] : void 0;
        const aM = MM.name;
        let PM, nM, QM = null,
          LM = null;
        if (rM instanceof Zr.d ? PM = rM : (nM = rM, PM = nM.ph()), MM.customShader && (0, ZM.c)(PM.createEffectForParticles)) {
          LM = MM.customShader;
          const rM = LM.shaderOptions.defines.length > 0 ? LM.shaderOptions.defines.join("\n") : "";
          QM = PM.createEffectForParticles(LM.shaderPath.fragmentElement, LM.shaderOptions.uniforms, LM.shaderOptions.samplers, rM)
        }
        const mM = new Br(aM, SM || MM.vL, rM, QM, MM.isAnimationSheetEnabled);
        if (mM.customShader = LM, mM._rootUrl = iM, MM.id && (mM.id = MM.id), MM.subEmitters) {
          mM.subEmitters = [];
          for (const OM of MM.subEmitters) {
            const MM = [];
            for (const SM of OM) MM.push(kr.Parse(SM, rM, iM));
            mM.subEmitters.push(MM)
          }
        }
        if (MM.attractors)
          for (const zM of MM.attractors) {
            const MM = new vr;
            MM.position = jM.q.FromArray(zM.position), MM.strength = zM.strength, mM.addAttractor(MM)
          }
        return Br._Parse(MM, mM, rM, iM), MM.textureMask && (mM.textureMask = zM.h.FromArray(MM.textureMask)), MM.worldOffset && (mM.worldOffset = jM.q.FromArray(MM.worldOffset)), MM.preventAutoStart && (mM.preventAutoStart = MM.preventAutoStart), MM.metadata && (mM.metadata = MM.metadata), OM || mM.preventAutoStart || mM.start(), mM
      }
      serialize() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = {};
        if (Br._Serialize(rM, this, MM), rM.textureMask = this.textureMask.HOM(), rM.customShader = this.customShader, rM.preventAutoStart = this.preventAutoStart, rM.worldOffset = this.worldOffset.HOM(), this.metadata && (rM.metadata = this.metadata), this.subEmitters) {
          rM.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const iM of this._subEmitters) {
            const OM = [];
            for (const rM of iM) rM.particleSystem.doNotSerialize || OM.push(rM.serialize(MM));
            rM.subEmitters.push(OM)
          }
        }
        if (this._attractors && this._attractors.length) {
          rM.attractors = [];
          for (const MM of this._attractors) rM.attractors.push(MM.serialize())
        }
        return rM
      }
      static _Serialize(MM, rM, iM) {
        if (MM.name = rM.name, MM.id = rM.id, MM.vL = rM.getCapacity(), MM.disposeOnStop = rM.disposeOnStop, MM.manualEmitCount = rM.manualEmitCount, rM.emitter.position) {
          const iM = rM.emitter;
          MM.emitterId = iM.id
        } else {
          const iM = rM.emitter;
          MM.emitter = iM.HOM()
        }
        if (rM.particleEmitterType && (MM.particleEmitterType = rM.particleEmitterType.serialize()), rM.particleTexture)
          if (iM) MM.texture = rM.particleTexture.serialize();
          else {
            const iM = rM.particleTexture;
            MM.textureName = rM.particleTexture.name, MM.invertY = !!iM._invertY;
            const OM = {};
            for (const MM of Fr) OM[MM] = iM[MM];
            OM.samplingMode = iM.samplingMode, MM.textureSettings = OM
          } MM.isLocal = rM.isLocal, or.b.AppendSerializedAnimations(rM, MM), MM.beginAnimationOnStart = rM.beginAnimationOnStart, MM.beginAnimationFrom = rM.beginAnimationFrom, MM.beginAnimationTo = rM.beginAnimationTo, MM.beginAnimationLoop = rM.beginAnimationLoop, MM.startDelay = rM.startDelay, MM.renderingGroupId = rM.renderingGroupId, MM.isBillboardBased = rM.isBillboardBased, MM.billboardMode = rM.billboardMode, MM.minAngularSpeed = rM.minAngularSpeed, MM.maxAngularSpeed = rM.maxAngularSpeed, MM.minSize = rM.minSize, MM.maxSize = rM.maxSize, MM.minScaleX = rM.minScaleX, MM.maxScaleX = rM.maxScaleX, MM.minScaleY = rM.minScaleY, MM.maxScaleY = rM.maxScaleY, MM.minEmitPower = rM.minEmitPower, MM.maxEmitPower = rM.maxEmitPower, MM.minLifeTime = rM.minLifeTime, MM.maxLifeTime = rM.maxLifeTime, MM.emitRate = rM.emitRate, MM.gravity = rM.gravity.HOM(), MM.noiseStrength = rM.noiseStrength.HOM(), MM.color1 = rM.color1.HOM(), MM.color2 = rM.color2.HOM(), MM.colorDead = rM.colorDead.HOM(), MM.updateSpeed = rM.updateSpeed, MM.targetStopDuration = rM.targetStopDuration, MM.blendMode = rM.blendMode, MM.preWarmCycles = rM.preWarmCycles, MM.preWarmStepOffset = rM.preWarmStepOffset, MM.minInitialRotation = rM.minInitialRotation, MM.maxInitialRotation = rM.maxInitialRotation, MM.startSpriteCellID = rM.startSpriteCellID, MM.spriteCellLoop = rM.spriteCellLoop, MM.endSpriteCellID = rM.endSpriteCellID, MM.spriteCellChangeSpeed = rM.spriteCellChangeSpeed, MM.spriteCellWidth = rM.spriteCellWidth, MM.spriteCellHeight = rM.spriteCellHeight, MM.spriteRandomStartCell = rM.spriteRandomStartCell, MM.isAnimationSheetEnabled = rM.isAnimationSheetEnabled, MM.useLogarithmicDepth = rM.useLogarithmicDepth;
        const OM = rM.getColorGradients();
        if (OM) {
          MM.colorGradients = [];
          for (const rM of OM) {
            const iM = {
              gradient: rM.gradient,
              color1: rM.color1.HOM()
            };
            rM.color2 ? iM.color2 = rM.color2.HOM() : iM.color2 = rM.color1.HOM(), MM.colorGradients.push(iM)
          }
        }
        const SM = rM.getRampGradients();
        if (SM) {
          MM.rampGradients = [];
          for (const rM of SM) {
            const iM = {
              gradient: rM.gradient,
              color: rM.color.HOM()
            };
            MM.rampGradients.push(iM)
          }
          MM.useRampGradients = rM.useRampGradients
        }
        const jM = rM.getColorRemapGradients();
        if (jM) {
          MM.colorRemapGradients = [];
          for (const rM of jM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.colorRemapGradients.push(iM)
          }
        }
        const aM = rM.getAlphaRemapGradients();
        if (aM) {
          MM.alphaRemapGradients = [];
          for (const rM of aM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.alphaRemapGradients.push(iM)
          }
        }
        const PM = rM.getSizeGradients();
        if (PM) {
          MM.sizeGradients = [];
          for (const rM of PM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.sizeGradients.push(iM)
          }
        }
        const nM = rM.getAngularSpeedGradients();
        if (nM) {
          MM.angularSpeedGradients = [];
          for (const rM of nM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.angularSpeedGradients.push(iM)
          }
        }
        const QM = rM.getVelocityGradients();
        if (QM) {
          MM.velocityGradients = [];
          for (const rM of QM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.velocityGradients.push(iM)
          }
        }
        const zM = rM.getDragGradients();
        if (zM) {
          MM.dragGradients = [];
          for (const rM of zM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.dragGradients.push(iM)
          }
        }
        const LM = rM.getEmitRateGradients();
        if (LM) {
          MM.emitRateGradients = [];
          for (const rM of LM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.emitRateGradients.push(iM)
          }
        }
        const mM = rM.getStartSizeGradients();
        if (mM) {
          MM.startSizeGradients = [];
          for (const rM of mM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.startSizeGradients.push(iM)
          }
        }
        const HM = rM.getLifeTimeGradients();
        if (HM) {
          MM.lifeTimeGradients = [];
          for (const rM of HM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.lifeTimeGradients.push(iM)
          }
        }
        const hM = rM.getLimitVelocityGradients();
        if (hM) {
          MM.limitVelocityGradients = [];
          for (const rM of hM) {
            const iM = {
              gradient: rM.gradient,
              factor1: rM.factor1
            };
            void 0 !== rM.factor2 ? iM.factor2 = rM.factor2 : iM.factor2 = rM.factor1, MM.limitVelocityGradients.push(iM)
          }
          MM.limitVelocityDamping = rM.limitVelocityDamping
        }
        rM.noiseTexture && (MM.noiseTexture = rM.noiseTexture.serialize())
      }
      clone(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = {
          ...this._customWrappers
        };
        let SM = null;
        const jM = this._engine;
        if ((0, ZM.c)(jM.createEffectForParticles) && null != this.customShader) {
          SM = this.customShader;
          const MM = SM.shaderOptions.defines.length > 0 ? SM.shaderOptions.defines.join("\n") : "",
            rM = jM.createEffectForParticles(SM.shaderPath.fragmentElement, SM.shaderOptions.uniforms, SM.shaderOptions.samplers, MM);
          OM[0] ? OM[0].effect = rM : this.setCustomEffect(rM, 0)
        }
        const aM = this.serialize(iM),
          PM = !1 === iM && this.particleTexture ? this.particleTexture.clone() : null;
        PM && (aM.textureName = void 0);
        const nM = Br.Parse(aM, this._scene || this._engine, this._rootUrl);
        return nM.name = MM, nM.customShader = SM, nM._customWrappers = OM, PM && (nM.particleTexture = PM), void 0 === rM && (rM = this.emitter), this.noiseTexture && (nM.noiseTexture = this.noiseTexture.clone()), nM.emitter = rM, this.preventAutoStart || nM.start(), nM
      }
    }
    Br.BILLBOARDMODE_Y = 2, Br.BILLBOARDMODE_ALL = 7, Br.BILLBOARDMODE_STRETCHED = 8, Br.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Xr = !1;
    Xr || (Xr = !0, kr._ParseParticleSystem = Br.Parse)
  },
  44304: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      SkyMaterial: () => EM,
      _MaxColorValueForRenderTarget: () => lM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(41121),
      aM = iM(38034),
      PM = iM(41393),
      nM = iM(41442),
      QM = iM(44241),
      zM = iM(42269),
      LM = iM(41190),
      mM = iM(38085),
      HM = iM(41472),
      hM = iM(41447),
      JM = iM(41433),
      dM = iM(41426);
    class yM extends PM.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function lM(MM) {
      switch (MM) {
        case QM.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case QM.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let EM = (() => {
      var MM;
      let rM, PM, QM, mM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM = nM.c,
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [],
        AM = [],
        xM = [],
        vM = [],
        FM = [],
        BM = [],
        XM = [],
        IM = [],
        KM = [],
        qM = [],
        TM = [],
        VM = [],
        cM = [],
        Mr = [],
        rr = [],
        ir = [],
        Or = [],
        Sr = [],
        jr = [],
        ar = [],
        Pr = [],
        nr = [];
      return MM = class extends pM {
        constructor(MM, rM) {
          super(MM, rM, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, OM.m)(this, WM, 1), this.turbidity = ((0, OM.m)(this, sM), (0, OM.m)(this, DM, 10)), this.rayleigh = ((0, OM.m)(this, kM), (0, OM.m)(this, ZM, 2)), this.mieCoefficient = ((0, OM.m)(this, oM), (0, OM.m)(this, fM, .005)), this.mieDirectionalG = ((0, OM.m)(this, YM), (0, OM.m)(this, NM, .8)), this.distance = ((0, OM.m)(this, AM), (0, OM.m)(this, xM, 500)), this.inclination = ((0, OM.m)(this, vM), (0, OM.m)(this, FM, .49)), this.azimuth = ((0, OM.m)(this, BM), (0, OM.m)(this, XM, .25)), this.sunPosition = ((0, OM.m)(this, IM), (0, OM.m)(this, KM, new aM.sh(0, 100, 0))), this.useSunPosition = ((0, OM.m)(this, qM), (0, OM.m)(this, TM, !1)), this.cameraOffset = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, aM.sh.Zero())), this.up = ((0, OM.m)(this, Mr), (0, OM.m)(this, rr, aM.sh.Up())), this.dithering = ((0, OM.m)(this, ir), (0, OM.m)(this, Or, !1)), this.rawHdrOutput = ((0, OM.m)(this, Sr), (0, OM.m)(this, jr, !1)), this.cloudiness = ((0, OM.m)(this, ar), (0, OM.m)(this, Pr, 0)), this._cameraPosition = ((0, OM.m)(this, nr), aM.sh.Zero()), this._skyOrientation = new aM.Quaternion
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
        isReadyForSubMesh(rM, iM) {
          const OM = iM._drawWrapper;
          if (this.isFrozen && OM.effect && OM._wasPreviouslyReady) return !0;
          iM.materialDefines || (iM.materialDefines = new yM);
          const SM = iM.materialDefines,
            jM = this.Hk();
          if (this._isReadyForSubMesh(iM)) return !0;
          if ((0, dM.X)(rM, jM, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, SM, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, dM.K)(rM, SM, !0, !1), SM.IMAGEPROCESSINGPOSTPROCESS !== jM.imageProcessingConfiguration.applyByPostProcess && SM.markAsMiscDirty(), SM.DITHER !== this.dithering && SM.markAsMiscDirty(), SM.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && SM.markAsMiscDirty(), SM.isDirty) {
            SM.markAsProcessed(), jM.resetCachedMaterial();
            const rM = new hM.b;
            SM.FOG && rM.addFallback(1, "FOG"), SM.IMAGEPROCESSINGPOSTPROCESS = jM.imageProcessingConfiguration.applyByPostProcess, SM.DITHER = this.dithering, SM.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const OM = [zM.e.PositionKind];
            SM.VERTEXCOLOR && OM.push(zM.e.ColorKind);
            const aM = "sky",
              PM = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, JM.b)(PM);
            const nM = SM.toString();
            iM.setEffect(jM.ph().createEffect(aM, {
              attributes: OM,
              uniformsNames: PM,
              uniformBuffersNames: [],
              samplers: [],
              defines: nM,
              fallbacks: rM,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: MM._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, jM.ph()), SM, this._materialContext)
          }
          return !(!iM.effect || !iM.effect.isReady()) && (SM._renderId = jM.getRenderId(), OM._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(MM, rM, iM) {
          const OM = this.Hk(),
            SM = iM.materialDefines;
          if (!SM) return;
          const jM = iM.effect;
          if (!jM) return;
          this._activeEffect = jM, this.bindOnlyWorldMatrix(MM), this._activeEffect.setMatrix("viewProjection", OM.getTransformMatrix()), this._mustRebind(OM, jM, iM) && ((0, JM.e)(jM, this, OM), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, dM.q)(SM, jM, OM)), OM.fogEnabled && rM.applyFog && OM.fogMode !== LM.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", OM.getViewMatrix()), (0, dM.g)(OM, rM, this._activeEffect, this.rawHdrOutput);
          const PM = OM.activeCamera;
          if (PM) {
            const MM = PM.getWorldMatrix();
            this._cameraPosition.x = MM.m[12], this._cameraPosition.y = MM.m[13], this._cameraPosition.z = MM.m[14], this._activeEffect.setVector3("cameraPosition", aM.TmpVectors.sh[0].jR(this._cameraPosition).kOM(OM.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const MM = OM.ph()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", lM(MM?.texture?.type))
          }
          if (!this.useSunPosition) {
            const MM = Math.PI * (this.inclination - .5),
              rM = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(rM) * Math.cos(MM), this.sunPosition.y = this.distance * Math.sin(-MM), this.sunPosition.z = this.distance * Math.sin(rM) * Math.cos(MM), aM.Quaternion.FromUnitVectorsToRef(aM.sh.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(rM, this._activeEffect, iM)
        }
        getAnimatables() {
          return []
        }
        dispose(MM) {
          super.dispose(MM)
        }
        clone(rM) {
          return jM.b.Clone((() => new MM(rM, this.Hk())), this)
        }
        serialize() {
          const MM = super.serialize();
          return MM.customType = "BABYLON.SkyMaterial", MM
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(rM, iM, OM) {
          return jM.b.Parse((() => new MM(rM.name, iM)), rM, iM, OM)
        }
      }, (() => {
        const iM = "function" === typeof Symbol && Symbol.metadata ? Object.create(pM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, SM.L)()], PM = [(0, SM.L)()], QM = [(0, SM.L)()], mM = [(0, SM.L)()], EM = [(0, SM.L)()], UM = [(0, SM.L)()], GM = [(0, SM.L)()], CM = [(0, SM.L)()], eM = [(0, SM.J)()], bM = [(0, SM.L)()], wM = [(0, SM.J)()], tM = [(0, SM.J)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], RM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: MM => "luminance" in MM,
            get: MM => MM.luminance,
            set: (MM, rM) => {
              MM.luminance = rM
            }
          },
          metadata: iM
        }, WM, sM), (0, OM.i)(null, null, PM, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: MM => "turbidity" in MM,
            get: MM => MM.turbidity,
            set: (MM, rM) => {
              MM.turbidity = rM
            }
          },
          metadata: iM
        }, DM, kM), (0, OM.i)(null, null, QM, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: MM => "rayleigh" in MM,
            get: MM => MM.rayleigh,
            set: (MM, rM) => {
              MM.rayleigh = rM
            }
          },
          metadata: iM
        }, ZM, oM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: MM => "mieCoefficient" in MM,
            get: MM => MM.mieCoefficient,
            set: (MM, rM) => {
              MM.mieCoefficient = rM
            }
          },
          metadata: iM
        }, fM, YM), (0, OM.i)(null, null, EM, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: MM => "mieDirectionalG" in MM,
            get: MM => MM.mieDirectionalG,
            set: (MM, rM) => {
              MM.mieDirectionalG = rM
            }
          },
          metadata: iM
        }, NM, AM), (0, OM.i)(null, null, UM, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: MM => "distance" in MM,
            get: MM => MM.distance,
            set: (MM, rM) => {
              MM.distance = rM
            }
          },
          metadata: iM
        }, xM, vM), (0, OM.i)(null, null, GM, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: MM => "inclination" in MM,
            get: MM => MM.inclination,
            set: (MM, rM) => {
              MM.inclination = rM
            }
          },
          metadata: iM
        }, FM, BM), (0, OM.i)(null, null, CM, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: MM => "azimuth" in MM,
            get: MM => MM.azimuth,
            set: (MM, rM) => {
              MM.azimuth = rM
            }
          },
          metadata: iM
        }, XM, IM), (0, OM.i)(null, null, eM, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: MM => "sunPosition" in MM,
            get: MM => MM.sunPosition,
            set: (MM, rM) => {
              MM.sunPosition = rM
            }
          },
          metadata: iM
        }, KM, qM), (0, OM.i)(null, null, bM, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: MM => "useSunPosition" in MM,
            get: MM => MM.useSunPosition,
            set: (MM, rM) => {
              MM.useSunPosition = rM
            }
          },
          metadata: iM
        }, TM, VM), (0, OM.i)(null, null, wM, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: MM => "cameraOffset" in MM,
            get: MM => MM.cameraOffset,
            set: (MM, rM) => {
              MM.cameraOffset = rM
            }
          },
          metadata: iM
        }, cM, Mr), (0, OM.i)(null, null, tM, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: MM => "up" in MM,
            get: MM => MM.up,
            set: (MM, rM) => {
              MM.up = rM
            }
          },
          metadata: iM
        }, rr, ir), (0, OM.i)(null, null, gM, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: MM => "dithering" in MM,
            get: MM => MM.dithering,
            set: (MM, rM) => {
              MM.dithering = rM
            }
          },
          metadata: iM
        }, Or, Sr), (0, OM.i)(null, null, uM, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: MM => "rawHdrOutput" in MM,
            get: MM => MM.rawHdrOutput,
            set: (MM, rM) => {
              MM.rawHdrOutput = rM
            }
          },
          metadata: iM
        }, jr, ar), (0, OM.i)(null, null, RM, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: MM => "cloudiness" in MM,
            get: MM => MM.cloudiness,
            set: (MM, rM) => {
              MM.cloudiness = rM
            }
          },
          metadata: iM
        }, Pr, nr), iM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iM
        })
      })(), MM._ShaderLoader = new HM.c((() => [iM.e(639).then((() => iM(63957))), iM.e(632).then((() => iM(63963)))]), (() => [iM.e(656).then((() => iM(63968))), iM.e(650).then((() => iM(63971)))])), MM
    })();
    (0, mM.e)("BABYLON.SkyMaterial", EM)
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);