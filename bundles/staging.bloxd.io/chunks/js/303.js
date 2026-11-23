export const id = 303;
export const ids = [303];
export const modules = {
  41422: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC
    });
    var QC = ZC(39925),
      wC = ZC(41429);
    class bC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = ZC, this.gQC = [], this._maxBlockCapacity = zC || 64, this._selectionContent = new QC.e(1024), this._creationFunc = CC
      }
      update(CC, zC, ZC) {
        wC.b._CreateBlocks(CC, zC, ZC, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      zQC(CC) {
        for (let zC = 0; zC < this.blocks.length; zC++) {
          this.blocks[zC].addEntry(CC)
        }
      }
      IH(CC) {
        for (let zC = 0; zC < this.blocks.length; zC++) {
          this.blocks[zC].removeEntry(CC)
        }
      }
      select(CC, zC) {
        this._selectionContent.reset();
        for (let ZC = 0; ZC < this.blocks.length; ZC++) {
          this.blocks[ZC].select(CC, this._selectionContent, zC)
        }
        return zC ? this._selectionContent.concat(this.gQC) : this._selectionContent.concatWithNoDuplicate(this.gQC), this._selectionContent
      }
      intersects(CC, zC, ZC) {
        this._selectionContent.reset();
        for (let QC = 0; QC < this.blocks.length; QC++) {
          this.blocks[QC].intersects(CC, zC, this._selectionContent, ZC)
        }
        return ZC ? this._selectionContent.concat(this.gQC) : this._selectionContent.concatWithNoDuplicate(this.gQC), this._selectionContent
      }
      intersectsRay(CC) {
        this._selectionContent.reset();
        for (let zC = 0; zC < this.blocks.length; zC++) {
          this.blocks[zC].intersectsRay(CC, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.gQC), this._selectionContent
      }
    }
    bC.CreationFuncForMeshes = (CC, zC) => {
      const ZC = CC.WE();
      !CC.isBlocked && ZC.boundingBox.intersectsMinMax(zC.nQC, zC.bQC) && zC.entries.push(CC)
    }, bC.CreationFuncForSubMeshes = (CC, zC) => {
      CC.WE().boundingBox.intersectsMinMax(zC.nQC, zC.bQC) && zC.entries.push(CC)
    }
  },
  41429: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC
    });
    var QC = ZC(36963),
      wC = ZC(40136);
    class bC {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.entries = [], this.SQC = new Array, this._capacity = ZC, this._depth = QC, this._maxDepth = wC, this._creationFunc = bC, this._minPoint = CC, this._maxPoint = zC, this.SQC.push(CC.clone()), this.SQC.push(zC.clone()), this.SQC.push(CC.clone()), this.SQC[2].x = zC.x, this.SQC.push(CC.clone()), this.SQC[3].y = zC.y, this.SQC.push(CC.clone()), this.SQC[4].z = zC.z, this.SQC.push(zC.clone()), this.SQC[5].z = CC.z, this.SQC.push(zC.clone()), this.SQC[6].x = CC.x, this.SQC.push(zC.clone()), this.SQC[7].y = CC.y
      }
      get HW() {
        return this._capacity
      }
      get nQC() {
        return this._minPoint
      }
      get bQC() {
        return this._maxPoint
      }
      addEntry(CC) {
        if (this.blocks)
          for (let zC = 0; zC < this.blocks.length; zC++) {
            this.blocks[zC].addEntry(CC)
          } else this._creationFunc(CC, this), this.entries.length > this.HW && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(CC) {
        if (this.blocks) {
          for (let zC = 0; zC < this.blocks.length; zC++) {
            this.blocks[zC].removeEntry(CC)
          }
          return
        }
        const zC = this.entries.indexOf(CC);
        zC > -1 && this.entries.splice(zC, 1)
      }
      addEntries(CC) {
        for (let zC = 0; zC < CC.length; zC++) {
          const ZC = CC[zC];
          this.addEntry(ZC)
        }
      }
      select(CC, zC, ZC) {
        if (wC.b.IsInFrustum(this.SQC, CC)) {
          if (this.blocks) {
            for (let QC = 0; QC < this.blocks.length; QC++) {
              this.blocks[QC].select(CC, zC, ZC)
            }
            return
          }
          ZC ? zC.concat(this.entries) : zC.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(CC, zC, ZC, QC) {
        if (wC.b.IntersectsSphere(this._minPoint, this._maxPoint, CC, zC)) {
          if (this.blocks) {
            for (let wC = 0; wC < this.blocks.length; wC++) {
              this.blocks[wC].intersects(CC, zC, ZC, QC)
            }
            return
          }
          QC ? ZC.concat(this.entries) : ZC.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(CC, zC) {
        if (CC.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let ZC = 0; ZC < this.blocks.length; ZC++) {
              this.blocks[ZC].intersectsRay(CC, zC)
            }
            return
          }
          zC.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        bC._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(CC, zC, ZC, wC, nC, fC, oC, qC) {
        oC.blocks = new Array;
        const FC = new QC.r((zC.x - CC.x) / 2, (zC.y - CC.y) / 2, (zC.z - CC.z) / 2);
        for (let QC = 0; QC < 2; QC++)
          for (let zC = 0; zC < 2; zC++)
            for (let WC = 0; WC < 2; WC++) {
              const NC = CC.add(FC.multiplyByFloats(QC, zC, WC)),
                MC = CC.add(FC.multiplyByFloats(QC + 1, zC + 1, WC + 1)),
                gC = new bC(NC, MC, wC, nC + 1, fC, qC);
              gC.addEntries(ZC), oC.blocks.push(gC)
            }
      }
    }
  },
  41434: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => FC
    });
    var QC = ZC(39910),
      wC = ZC(36963),
      bC = ZC(40265),
      nC = ZC(41369),
      fC = ZC(39990),
      oC = ZC(36985),
      qC = ZC(41422);
    class FC {
      constructor(CC) {
        this.name = fC.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new nC.u(wC.r.Zero(), new wC.r(1, 1, 1)), (CC = CC || oC.c.LastCreatedScene) && (this.sS = CC, this.sS.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.sS.getActiveSubMeshCandidates = CC => this.getActiveSubMeshCandidates(CC), this.sS.getCollidingSubMeshCandidates = (CC, zC) => this.getCollidingSubMeshCandidates(CC, zC), this.sS.getIntersectingSubMeshCandidates = (CC, zC) => this.getIntersectingSubMeshCandidates(CC, zC))
      }
      register() {
        this.sS.onMeshRemovedObservable.add((CC => {
          const zC = this.sS.selectionOctree;
          if (void 0 !== zC && null !== zC) {
            const ZC = zC.gQC.indexOf(CC); - 1 !== ZC && zC.gQC.splice(ZC, 1)
          }
        })), this.sS.onMeshImportedObservable.add((CC => {
          const zC = this.sS.selectionOctree;
          void 0 !== zC && null !== zC && zC.zQC(CC)
        }))
      }
      getActiveMeshCandidates() {
        return this.sS.xQC?.select(this.sS.frustumPlanes) || this.sS._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(CC) {
        if (CC._submeshesOctree && CC.useOctreeForRenderingSelection) {
          return CC._submeshesOctree.select(this.sS.frustumPlanes)
        }
        return this.sS._getDefaultSubMeshCandidates(CC)
      }
      getIntersectingSubMeshCandidates(CC, zC) {
        if (CC._submeshesOctree && CC.useOctreeForPicking) {
          nC.u.TransformToRef(zC, CC.getWorldMatrix(), this._tempRay);
          return CC._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.sS._getDefaultSubMeshCandidates(CC)
      }
      getCollidingSubMeshCandidates(CC, zC) {
        if (CC._submeshesOctree && CC.useOctreeForCollisions) {
          const ZC = zC._velocityWorldLength + Math.max(zC._radius.x, zC._radius.y, zC._radius.z);
          return CC._submeshesOctree.intersects(zC._basePointWorld, ZC)
        }
        return this.sS._getDefaultSubMeshCandidates(CC)
      }
      rebuild() {}
      dispose() {}
    }
    let WC = !1;
    WC || (WC = !0, QC.g.prototype.createOrUpdateSelectionOctree = function() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        ZC = this._getComponent(fC.b.NAME_OCTREE);
      ZC || (ZC = new FC(this), this.sZC(ZC)), this.xQC || (this.xQC = new qC.c(qC.c.CreationFuncForMeshes, CC, zC));
      const QC = this.getWorldExtends();
      return this.xQC.update(QC.min, QC.max, this.meshes), this.xQC
    }, Object.defineProperty(QC.g.prototype, "selectionOctree", {
      get: function() {
        return this.xQC
      },
      enumerable: !0,
      configurable: !0
    }), bC.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZC = this.Km();
      let QC = ZC._getComponent(fC.b.NAME_OCTREE);
      QC || (QC = new FC(ZC), ZC.sZC(QC)), this._submeshesOctree || (this._submeshesOctree = new qC.c(qC.c.CreationFuncForSubMeshes, CC, zC)), this.computeWorldMatrix(!0);
      const wC = this.WE().boundingBox;
      return this._submeshesOctree.update(wC.minimumWorld, wC.maximumWorld, this.Zx), this._submeshesOctree
    })
  },
  41369: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => YC,
      f: () => SC,
      g: () => gC,
      j: () => MC,
      l: () => hC,
      o: () => eC,
      p: () => IC,
      q: () => vC,
      r: () => iC,
      u: () => WC
    });
    var QC = ZC(36968),
      wC = ZC(36963),
      bC = ZC(36971),
      nC = ZC(40123),
      fC = ZC(39953),
      oC = ZC(36985),
      qC = ZC(40013);
    const FC = {
      internalPickerForMesh: void 0
    };
    class WC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QC.e;
        this.origin = CC, this.direction = zC, this.length = ZC, this.epsilon = wC
      }
      clone() {
        return new WC(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const QC = WC._TmpVector3[0].L_(CC.x - ZC, CC.y - ZC, CC.z - ZC),
          wC = WC._TmpVector3[1].L_(zC.x + ZC, zC.y + ZC, zC.z + ZC);
        let bC, nC, fC, oC, qC = 0,
          FC = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < QC.x || this.origin.x > wC.x) return !1
        } else if (bC = 1 / this.direction.x, nC = (QC.x - this.origin.x) * bC, fC = (wC.x - this.origin.x) * bC, fC === -1 / 0 && (fC = 1 / 0), nC > fC && (oC = nC, nC = fC, fC = oC), qC = Math.max(nC, qC), FC = Math.min(fC, FC), qC > FC) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < QC.y || this.origin.y > wC.y) return !1
        } else if (bC = 1 / this.direction.y, nC = (QC.y - this.origin.y) * bC, fC = (wC.y - this.origin.y) * bC, fC === -1 / 0 && (fC = 1 / 0), nC > fC && (oC = nC, nC = fC, fC = oC), qC = Math.max(nC, qC), FC = Math.min(fC, FC), qC > FC) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < QC.z || this.origin.z > wC.z) return !1
        } else if (bC = 1 / this.direction.z, nC = (QC.z - this.origin.z) * bC, fC = (wC.z - this.origin.z) * bC, fC === -1 / 0 && (fC = 1 / 0), nC > fC && (oC = nC, nC = fC, fC = oC), qC = Math.max(nC, qC), FC = Math.min(fC, FC), qC > FC) return !1;
        return !0
      }
      intersectsBox(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(CC.minimum, CC.maximum, zC)
      }
      intersectsSphere(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = CC.center.x - this.origin.x,
          QC = CC.center.y - this.origin.y,
          wC = CC.center.z - this.origin.z,
          bC = ZC * ZC + QC * QC + wC * wC,
          nC = CC.radius + zC,
          fC = nC * nC;
        if (bC <= fC) return !0;
        const oC = ZC * this.direction.x + QC * this.direction.y + wC * this.direction.z;
        if (oC < 0) return !1;
        return bC - oC * oC <= fC
      }
      intersectsTriangle(CC, zC, ZC) {
        const QC = WC._TmpVector3[0],
          bC = WC._TmpVector3[1],
          fC = WC._TmpVector3[2],
          oC = WC._TmpVector3[3],
          qC = WC._TmpVector3[4];
        zC.subtractToRef(CC, QC), ZC.subtractToRef(CC, bC), wC.r.CrossToRef(this.direction, bC, fC);
        const FC = wC.r.Dot(QC, fC);
        if (0 === FC) return null;
        const NC = 1 / FC;
        this.origin.subtractToRef(CC, oC);
        const MC = wC.r.Dot(oC, fC) * NC;
        if (MC < -this.epsilon || MC > 1 + this.epsilon) return null;
        wC.r.CrossToRef(oC, QC, qC);
        const gC = wC.r.Dot(this.direction, qC) * NC;
        if (gC < -this.epsilon || MC + gC > 1 + this.epsilon) return null;
        const SC = wC.r.Dot(bC, qC) * NC;
        return SC > this.length || SC < 0 ? null : new nC.d(1 - MC - gC, MC, SC)
      }
      intersectsPlane(CC) {
        let zC;
        const ZC = wC.r.Dot(CC.normal, this.direction);
        if (Math.abs(ZC) < 9.99999997475243e-7) return null;
        {
          const QC = wC.r.Dot(CC.normal, this.origin);
          return zC = (-CC.d - QC) / ZC, zC < 0 ? zC < -9.99999997475243e-7 ? null : 0 : zC
        }
      }
      intersectsAxis(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (CC) {
          case "y": {
            const CC = (this.origin.y - zC) / this.direction.y;
            return CC > 0 ? null : new wC.r(this.origin.x + this.direction.x * -CC, zC, this.origin.z + this.direction.z * -CC)
          }
          case "x": {
            const CC = (this.origin.x - zC) / this.direction.x;
            return CC > 0 ? null : new wC.r(zC, this.origin.y + this.direction.y * -CC, this.origin.z + this.direction.z * -CC)
          }
          case "z": {
            const CC = (this.origin.z - zC) / this.direction.z;
            return CC > 0 ? null : new wC.r(this.origin.x + this.direction.x * -CC, this.origin.y + this.direction.y * -CC, zC)
          }
          default:
            return null
        }
      }
      sQC(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bC = arguments.length > 4 ? arguments[4] : void 0,
          nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const fC = wC.j.Matrix[0];
        return CC.getWorldMatrix().invertToRef(fC), this._tmpRay ? WC.TransformToRef(this, fC, this._tmpRay) : this._tmpRay = WC.Transform(this, fC), CC.intersects(this._tmpRay, zC, ZC, QC, bC, nC)
      }
      intersectsMeshes(CC, zC, ZC) {
        ZC ? ZC.length = 0 : ZC = [];
        for (let QC = 0; QC < CC.length; QC++) {
          const wC = this.sQC(CC[QC], zC);
          wC.hit && ZC.push(wC)
        }
        return ZC.sort(this._comparePickingInfo), ZC
      }
      _comparePickingInfo(CC, zC) {
        return CC.distance < zC.distance ? -1 : CC.distance > zC.distance ? 1 : 0
      }
      intersectionSegment(CC, zC, ZC) {
        const QC = this.origin,
          bC = wC.j.Eg[0],
          nC = wC.j.Eg[1],
          fC = wC.j.Eg[2],
          oC = wC.j.Eg[3];
        zC.subtractToRef(CC, bC), this.direction.scaleToRef(WC._Rayl, fC), QC.addToRef(fC, nC), CC.subtractToRef(QC, oC);
        const qC = wC.r.Dot(bC, bC),
          FC = wC.r.Dot(bC, fC),
          NC = wC.r.Dot(fC, fC),
          MC = wC.r.Dot(bC, oC),
          gC = wC.r.Dot(fC, oC),
          SC = qC * NC - FC * FC;
        let pC, PC, GC = SC,
          RC = SC;
        SC < WC._Smallnum ? (pC = 0, GC = 1, PC = gC, RC = NC) : (pC = FC * gC - NC * MC, PC = qC * gC - FC * MC, pC < 0 ? (pC = 0, PC = gC, RC = NC) : pC > GC && (pC = GC, PC = gC + FC, RC = NC)), PC < 0 ? (PC = 0, -MC < 0 ? pC = 0 : -MC > qC ? pC = GC : (pC = -MC, GC = qC)) : PC > RC && (PC = RC, -MC + FC < 0 ? pC = 0 : -MC + FC > qC ? pC = GC : (pC = -MC + FC, GC = qC));
        const AC = Math.abs(pC) < WC._Smallnum ? 0 : pC / GC,
          xC = Math.abs(PC) < WC._Smallnum ? 0 : PC / RC,
          JC = wC.j.Eg[4];
        fC.scaleToRef(xC, JC);
        const IC = wC.j.Eg[5];
        bC.scaleToRef(AC, IC), IC.addInPlace(oC);
        const iC = wC.j.Eg[6];
        IC.subtractToRef(JC, iC);
        return xC > 0 && xC <= this.length && iC.lengthSquared() < ZC * ZC ? IC.length() : -1
      }
      update(CC, zC, ZC, QC, bC, nC, fC) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          WC._RayDistant || (WC._RayDistant = WC.Zero()), WC._RayDistant.unprojectRayToRef(CC, zC, ZC, QC, wC.b.IdentityReadOnly, nC, fC);
          const oC = wC.j.Matrix[0];
          bC.invertToRef(oC), WC.TransformToRef(WC._RayDistant, oC, this)
        } else this.unprojectRayToRef(CC, zC, ZC, QC, bC, nC, fC);
        return this
      }
      static Zero() {
        return new WC(wC.r.Zero(), wC.r.Zero())
      }
      static CreateNew(CC, zC, ZC, QC, wC, bC, nC) {
        return WC.Zero().update(CC, zC, ZC, QC, wC, bC, nC)
      }
      static CreateNewFromTo(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.b.IdentityReadOnly;
        const QC = new WC(new wC.r(0, 0, 0), new wC.r(0, 0, 0));
        return WC.CreateFromToToRef(CC, zC, QC, ZC)
      }
      static CreateFromToToRef(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wC.b.IdentityReadOnly;
        ZC.origin.Av(CC);
        const bC = zC.subtractToRef(CC, ZC.direction),
          nC = Math.sqrt(bC.x * bC.x + bC.y * bC.y + bC.z * bC.z);
        return ZC.length = nC, ZC.direction.normalize(), WC.TransformToRef(ZC, QC, ZC)
      }
      static Transform(CC, zC) {
        const ZC = new WC(new wC.r(0, 0, 0), new wC.r(0, 0, 0));
        return WC.TransformToRef(CC, zC, ZC), ZC
      }
      static TransformToRef(CC, zC, ZC) {
        wC.r.TransformCoordinatesToRef(CC.origin, zC, ZC.origin), wC.r.TransformNormalToRef(CC.direction, zC, ZC.direction), ZC.length = CC.length, ZC.epsilon = CC.epsilon;
        const QC = ZC.direction,
          bC = QC.length();
        if (0 !== bC && 1 !== bC) {
          const CC = 1 / bC;
          QC.x *= CC, QC.y *= CC, QC.z *= CC, ZC.length *= bC
        }
        return ZC
      }
      unprojectRayToRef(CC, zC, ZC, QC, bC, nC, fC) {
        const qC = wC.j.Matrix[0];
        bC.multiplyToRef(nC, qC), qC.multiplyToRef(fC, qC), qC.invert();
        const FC = oC.c.LastCreatedEngine,
          WC = wC.j.Eg[0];
        WC.x = CC / ZC * 2 - 1, WC.y = -(zC / QC * 2 - 1), WC.z = FC?.BZC ? 1 : FC?.isNDCHalfZRange ? 0 : -1;
        const NC = wC.j.Eg[1].L_(WC.x, WC.y, 1 - 1e-8),
          MC = wC.j.Eg[2],
          gC = wC.j.Eg[3];
        wC.r.TransformCoordinatesToRef(WC, qC, MC), wC.r.TransformCoordinatesToRef(NC, qC, gC), this.origin.Av(MC), gC.subtractToRef(MC, this.direction), this.direction.normalize()
      }
    }

    function NC(CC, zC, ZC, QC, wC) {
      let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const nC = WC.Zero();
      return MC(CC, zC, ZC, QC, nC, wC, bC), nC
    }

    function MC(CC, zC, ZC, QC, bC, nC) {
      let fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const qC = CC.mg();
      if (!nC && !(nC = CC.activeCamera) && !(nC = CC.cameraToUseForPointers)) return CC;
      const FC = nC.viewport,
        WC = qC.getRenderHeight(),
        {
          x: NC,
          y: MC,
          width: gC,
          height: SC
        } = FC.toGlobal(qC.getRenderWidth(), WC),
        pC = 1 / qC.getHardwareScalingLevel();
      return zC = zC * pC - NC, ZC = ZC * pC - (WC - MC - SC), bC.update(zC, ZC, gC, SC, QC || wC.b.IdentityReadOnly, fC ? wC.b.IdentityReadOnly : nC.getViewMatrix(), nC.getProjectionMatrix(), oC), CC
    }

    function gC(CC, zC, ZC, QC) {
      const wC = WC.Zero();
      return SC(CC, zC, ZC, wC, QC), wC
    }

    function SC(CC, zC, ZC, QC, bC) {
      if (!fC.c) return CC;
      const nC = CC.mg();
      if (!bC && !(bC = CC.activeCamera) && !(bC = CC.cameraToUseForPointers)) throw new Error("Active camera not set");
      const oC = bC.viewport,
        qC = nC.getRenderHeight(),
        {
          x: FC,
          y: WC,
          width: NC,
          height: MC
        } = oC.toGlobal(nC.getRenderWidth(), qC),
        gC = wC.b.Identity(),
        SC = 1 / nC.getHardwareScalingLevel();
      return zC = zC * SC - FC, ZC = ZC * SC - (qC - WC - MC), QC.update(zC, ZC, NC, MC, gC, gC, bC.getProjectionMatrix()), CC
    }

    function pC(CC, zC, ZC, QC, wC, bC, nC, fC) {
      return PC(CC, ZC, QC, zC(QC, ZC.enableDistantPicking), wC, bC, nC, fC)
    }

    function PC(CC, zC, ZC, QC, wC, bC, nC, fC) {
      const oC = zC.intersects(QC, wC, nC, bC, ZC, fC);
      return oC && oC.hit ? !wC && null != CC && oC.distance >= CC.distance ? null : oC : null
    }

    function GC(CC, zC) {
      return "InstancedLinesMesh" === CC || "LinesMesh" === CC ? zC.intersectionThreshold : 0
    }

    function RC(CC) {
      const zC = CC.getClassName();
      if ("GreasedLineMesh" === zC) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const ZC = CC.rawBoundingInfo;
      return {
        rawBoundingInfo: ZC,
        intersectionThreshold: ZC ? GC(zC, CC) : 0
      }
    }

    function AC(CC, zC, ZC, QC, wC) {
      const bC = CC(ZC, zC.enableDistantPicking);
      return bC.intersectsSphere(QC.IQC, wC) && bC.intersectsBox(QC.boundingBox, wC) ? bC : null
    }

    function xC(CC, zC, ZC, QC, bC, nC) {
      let oC = null;
      const qC = !!(CC.activeCameras && CC.activeCameras.length > 1 && CC.cameraToUseForPointers !== CC.activeCamera),
        WC = CC.cameraToUseForPointers || CC.activeCamera,
        NC = FC.internalPickerForMesh || pC,
        MC = NC === pC;
      for (let fC = 0; fC < CC.meshes.length; fC++) {
        const FC = CC.meshes[fC];
        if (ZC) {
          if (!ZC(FC, -1)) continue
        } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
        const gC = qC && FC.isWorldMatrixCameraDependent(),
          SC = FC.computeWorldMatrix(gC, WC);
        if (FC.hasThinInstances && FC.AzC) {
          const CC = NC(oC, zC, FC, SC, !0, !0, nC);
          if (CC) {
            if (bC) return CC;
            const {
              rawBoundingInfo: fC,
              intersectionThreshold: qC
            } = RC(FC), WC = FC._thinInstanceDataStorage.matrixData;
            if (WC) {
              const CC = wC.j.Matrix[0],
                gC = wC.j.Matrix[1],
                pC = Math.min(FC.N_, WC.length >> 4);
              for (let GC = 0; GC < pC; GC++) {
                if (ZC && !ZC(FC, GC)) continue;
                wC.b.FromArrayToRef(WC, GC << 4, CC), CC.multiplyToRef(SC, gC);
                const pC = MC && fC ? AC(zC, FC, gC, fC, qC) : null;
                if (MC && fC && !pC) continue;
                const RC = MC && pC ? PC(oC, FC, gC, pC, QC, bC, nC, !0) : NC(oC, zC, FC, gC, QC, bC, nC, !0);
                if (RC && (oC = RC, oC.thinInstanceIndex = GC, QC)) return oC
              }
            }
          }
        } else {
          const CC = NC(oC, zC, FC, SC, QC, bC, nC);
          if (CC && (oC = CC, QC)) return oC
        }
      }
      return oC || new fC.c
    }

    function JC(CC, zC, ZC, QC) {
      if (!fC.c) return null;
      const bC = [],
        nC = !!(CC.activeCameras && CC.activeCameras.length > 1 && CC.cameraToUseForPointers !== CC.activeCamera),
        oC = CC.cameraToUseForPointers || CC.activeCamera,
        qC = FC.internalPickerForMesh || pC,
        WC = qC === pC;
      for (let fC = 0; fC < CC.meshes.length; fC++) {
        const FC = CC.meshes[fC];
        if (ZC) {
          if (!ZC(FC, -1)) continue
        } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
        const NC = nC && FC.isWorldMatrixCameraDependent(),
          MC = FC.computeWorldMatrix(NC, oC);
        if (FC.hasThinInstances && FC.AzC) {
          if (qC(null, zC, FC, MC, !0, !0, QC)) {
            const {
              rawBoundingInfo: CC,
              intersectionThreshold: nC
            } = RC(FC), fC = FC._thinInstanceDataStorage.matrixData;
            if (fC) {
              const oC = wC.j.Matrix[0],
                NC = wC.j.Matrix[1],
                gC = Math.min(FC.N_, fC.length >> 4);
              for (let SC = 0; SC < gC; SC++) {
                if (ZC && !ZC(FC, SC)) continue;
                wC.b.FromArrayToRef(fC, SC << 4, oC), oC.multiplyToRef(MC, NC);
                const gC = WC && CC ? AC(zC, FC, NC, CC, nC) : null;
                if (WC && CC && !gC) continue;
                const pC = WC && gC ? PC(null, FC, NC, gC, !1, !1, QC, !0) : qC(null, zC, FC, NC, !1, !1, QC, !0);
                pC && (pC.thinInstanceIndex = SC, bC.push(pC))
              }
            }
          }
        } else {
          const CC = qC(null, zC, FC, MC, !1, !1, QC);
          CC && bC.push(CC)
        }
      }
      return bC
    }

    function IC(CC, zC, ZC, QC, bC, nC) {
      if (!fC.c) return null;
      const oC = xC(CC, (QC => (CC._tempPickingRay || (CC._tempPickingRay = WC.Zero()), MC(CC, zC, ZC, QC, CC._tempPickingRay, nC || null), CC._tempPickingRay)), QC, bC, !0);
      return oC && (oC.ray = NC(CC, zC, ZC, wC.b.Identity(), nC || null)), oC
    }

    function iC(CC, zC, ZC, QC, bC, nC, fC) {
      const oC = xC(CC, ((QC, wC) => (CC._tempPickingRay || (CC._tempPickingRay = WC.Zero()), MC(CC, zC, ZC, QC, CC._tempPickingRay, nC || null, !1, wC), CC._tempPickingRay)), QC, bC, !1, fC);
      return oC && (oC.ray = NC(CC, zC, ZC, wC.b.Identity(), nC || null)), oC
    }

    function vC(CC, zC, ZC, QC, bC) {
      const nC = xC(CC, (ZC => (CC._pickWithRayInverseMatrix || (CC._pickWithRayInverseMatrix = wC.b.Identity()), ZC.invertToRef(CC._pickWithRayInverseMatrix), CC._cachedRayForTransform || (CC._cachedRayForTransform = WC.Zero()), WC.TransformToRef(zC, CC._pickWithRayInverseMatrix, CC._cachedRayForTransform), CC._cachedRayForTransform)), ZC, QC, !1, bC);
      return nC && (nC.ray = zC), nC
    }

    function eC(CC, zC, ZC, QC, wC, bC) {
      return JC(CC, (QC => NC(CC, zC, ZC, QC, wC || null)), QC, bC)
    }

    function hC(CC, zC, ZC, QC) {
      return JC(CC, (ZC => (CC._pickWithRayInverseMatrix || (CC._pickWithRayInverseMatrix = wC.b.Identity()), ZC.invertToRef(CC._pickWithRayInverseMatrix), CC._cachedRayForTransform || (CC._cachedRayForTransform = WC.Zero()), WC.TransformToRef(zC, CC._pickWithRayInverseMatrix, CC._cachedRayForTransform), CC._cachedRayForTransform)), ZC, QC)
    }

    function KC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        QC = arguments.length > 3 ? arguments[3] : void 0,
        bC = arguments.length > 4 ? arguments[4] : void 0;
      QC || (QC = CC.getWorldMatrix()), zC.length = ZC, bC ? zC.origin.Av(bC) : zC.origin.Av(CC.position);
      const nC = wC.j.Eg[2];
      nC.set(0, 0, CC._scene.useRightHandedSystem ? -1 : 1);
      const fC = wC.j.Eg[3];
      return wC.r.TransformNormalToRef(nC, QC, fC), wC.r.NormalizeToRef(fC, zC.direction), zC
    }

    function YC(CC, zC) {
      zC && (zC.prototype.getForwardRay = function() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        return KC(this, new WC(wC.r.Zero(), wC.r.Zero(), CC), CC, zC, ZC)
      }, zC.prototype.getForwardRayToRef = function(CC) {
        return KC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), CC && (qC.c._IsPickingAvailable = !0, CC.prototype.createPickingRay = function(CC, zC, ZC, QC) {
        return NC(this, CC, zC, ZC, QC, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    WC._TmpVector3 = (0, bC.d)(6, wC.r.Zero), WC._RayDistant = WC.Zero(), WC._Smallnum = 1e-8, WC._Rayl = 1e9
  },
  41362: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC.u
    });
    var QC = ZC(39910),
      wC = ZC(40042),
      bC = ZC(41369);
    let nC = !1;
    nC || (nC = !0, (0, bC.c)(QC.g, wC.d), QC.g.prototype.createPickingRayToRef = function(CC, zC, ZC, QC, wC) {
      let nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, bC.j)(this, CC, zC, ZC, QC, wC, nC, fC)
    }, QC.g.prototype.createPickingRayInCameraSpace = function(CC, zC, ZC) {
      return (0, bC.g)(this, CC, zC, ZC)
    }, QC.g.prototype.createPickingRayInCameraSpaceToRef = function(CC, zC, ZC, QC) {
      return (0, bC.f)(this, CC, zC, ZC, QC)
    }, QC.g.prototype.pickWithBoundingInfo = function(CC, zC, ZC, QC, wC) {
      return (0, bC.p)(this, CC, zC, ZC, QC, wC)
    }, QC.g.prototype.CM = function(CC, zC, ZC, QC, wC, nC) {
      let fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, bC.r)(this, CC, zC, ZC, QC, wC, nC, fC)
    }, QC.g.prototype.pickWithRay = function(CC, zC, ZC, QC) {
      return (0, bC.q)(this, CC, zC, ZC, QC)
    }, QC.g.prototype.multiPick = function(CC, zC, ZC, QC, wC) {
      return (0, bC.o)(this, CC, zC, ZC, QC, wC)
    }, QC.g.prototype.multiPickWithRay = function(CC, zC, ZC) {
      return (0, bC.l)(this, CC, zC, ZC)
    })
  },
  41375: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => FC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(40084),
      fC = ZC(41384),
      oC = ZC(40046),
      qC = ZC(37002);
    let FC = (() => {
        var CC;
        let zC, ZC, oC, qC, FC, WC, NC, MC, gC = fC.d,
          SC = [],
          pC = [],
          PC = [],
          GC = [],
          RC = [],
          AC = [],
          xC = [],
          JC = [],
          IC = [],
          iC = [],
          vC = [],
          eC = [],
          hC = [];
        return CC = class extends gC {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(CC) {
            this._shadowFrustumSize = CC, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(CC) {
            this._shadowOrthoScale = CC, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(CC) {
            this._orthoLeft = CC
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(CC) {
            this._orthoRight = CC
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(CC) {
            this._orthoTop = CC
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(CC) {
            this._orthoBottom = CC
          }
          constructor(CC, zC, ZC, wC) {
            super(CC, ZC, wC), this._shadowFrustumSize = ((0, QC.n)(this, SC), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, QC.n)(this, pC, !0), this.autoCalcShadowZBounds = ((0, QC.n)(this, PC), (0, QC.n)(this, GC, !1)), this._orthoLeft = ((0, QC.n)(this, RC), (0, QC.n)(this, AC, Number.MAX_VALUE)), this._orthoRight = ((0, QC.n)(this, xC), (0, QC.n)(this, JC, Number.MIN_VALUE)), this._orthoTop = ((0, QC.n)(this, IC), (0, QC.n)(this, iC, Number.MIN_VALUE)), this._orthoBottom = ((0, QC.n)(this, vC), (0, QC.n)(this, eC, Number.MAX_VALUE)), (0, QC.n)(this, hC), this.position = zC.scale(-1), this.direction = zC
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return nC.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(CC, zC, ZC) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(CC) : this._setDefaultAutoExtendShadowProjectionMatrix(CC, zC, ZC)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(CC) {
            const zC = this.Km().activeCamera;
            bC.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : zC ? zC.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : zC ? zC.maxZ : 1e4, CC, this.Km().mg().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(CC, zC, ZC) {
            const QC = this.Km().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const CC = bC.r.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let QC = Number.MAX_VALUE,
                wC = -Number.MAX_VALUE;
              for (let nC = 0; nC < ZC.length; nC++) {
                const fC = ZC[nC];
                if (!fC) continue;
                const oC = fC.WE().boundingBox;
                for (let ZC = 0; ZC < oC.vectorsWorld.length; ZC++) bC.r.TransformCoordinatesToRef(oC.vectorsWorld[ZC], zC, CC), CC.x < this._orthoLeft && (this._orthoLeft = CC.x), CC.y < this._orthoBottom && (this._orthoBottom = CC.y), CC.x > this._orthoRight && (this._orthoRight = CC.x), CC.y > this._orthoTop && (this._orthoTop = CC.y), this.autoCalcShadowZBounds && (CC.z < QC && (QC = CC.z), CC.z > wC && (wC = CC.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = QC, this._shadowMaxZ = wC)
            }
            const wC = this._orthoRight - this._orthoLeft,
              nC = this._orthoTop - this._orthoBottom,
              fC = void 0 !== this.shadowMinZ ? this.shadowMinZ : QC?.minZ || 0,
              oC = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : QC?.maxZ || 1e4,
              qC = this.Km().mg().BZC;
            bC.b.OrthoOffCenterLHToRef(this._orthoLeft - wC * this.shadowOrthoScale, this._orthoRight + wC * this.shadowOrthoScale, this._orthoBottom - nC * this.shadowOrthoScale, this._orthoTop + nC * this.shadowOrthoScale, qC ? oC : fC, qC ? fC : oC, CC, this.Km().mg().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(CC, zC) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, zC), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, zC), this)
          }
          transferToNodeMaterialEffect(CC, zC) {
            return this.computeTransformedInformation() ? (CC.setFloat3(zC, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (CC.setFloat3(zC, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(CC) {
            const zC = this._scene.mg();
            return !zC.BZC && zC.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(CC) {
            const zC = this._scene.mg();
            return zC.BZC && zC.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(CC, zC) {
            CC["DIRLIGHT" + zC] = !0
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(gC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)("orthoLeft")], WC = [(0, wC.M)("orthoRight")], NC = [(0, wC.M)("orthoTop")], MC = [(0, wC.M)("orthoBottom")], (0, QC.j)(CC, null, zC, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: CC => "shadowFrustumSize" in CC,
              get: CC => CC.shadowFrustumSize
            },
            metadata: bC
          }, null, SC), (0, QC.j)(CC, null, ZC, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: CC => "shadowOrthoScale" in CC,
              get: CC => CC.shadowOrthoScale
            },
            metadata: bC
          }, null, SC), (0, QC.j)(null, null, oC, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: CC => "autoUpdateExtends" in CC,
              get: CC => CC.autoUpdateExtends,
              set: (CC, zC) => {
                CC.autoUpdateExtends = zC
              }
            },
            metadata: bC
          }, pC, PC), (0, QC.j)(null, null, qC, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: CC => "autoCalcShadowZBounds" in CC,
              get: CC => CC.autoCalcShadowZBounds,
              set: (CC, zC) => {
                CC.autoCalcShadowZBounds = zC
              }
            },
            metadata: bC
          }, GC, RC), (0, QC.j)(null, null, FC, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: CC => "_orthoLeft" in CC,
              get: CC => CC._orthoLeft,
              set: (CC, zC) => {
                CC._orthoLeft = zC
              }
            },
            metadata: bC
          }, AC, xC), (0, QC.j)(null, null, WC, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: CC => "_orthoRight" in CC,
              get: CC => CC._orthoRight,
              set: (CC, zC) => {
                CC._orthoRight = zC
              }
            },
            metadata: bC
          }, JC, IC), (0, QC.j)(null, null, NC, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: CC => "_orthoTop" in CC,
              get: CC => CC._orthoTop,
              set: (CC, zC) => {
                CC._orthoTop = zC
              }
            },
            metadata: bC
          }, iC, vC), (0, QC.j)(null, null, MC, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: CC => "_orthoBottom" in CC,
              get: CC => CC._orthoBottom,
              set: (CC, zC) => {
                CC._orthoBottom = zC
              }
            },
            metadata: bC
          }, eC, hC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      WC = !1;
    WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_1", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.DirectionalLight", FC))
  },
  41394: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => jz
    });
    var QC = ZC(38538),
      wC = ZC(36987),
      bC = ZC(36963),
      nC = ZC(39959),
      fC = ZC(41396),
      oC = ZC(36985),
      qC = ZC(40100),
      FC = ZC(37142),
      WC = ZC(38544),
      NC = ZC(38501),
      MC = ZC(36991);
    class gC {
      constructor() {
        this.direction1 = new bC.r(0, 1, 0), this.direction2 = new bC.r(0, 1, 0)
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
          nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
          fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
        QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, QC) {
        QC ? zC.L_(0, 0, 0) : bC.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, CC, zC)
      }
      clone() {
        const CC = new gC;
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(CC) {
        CC.addUniform("direction1", 3), CC.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC
      }
      parse(CC) {
        bC.r.FromArrayToRef(CC.direction1, 0, this.direction1), bC.r.FromArrayToRef(CC.direction2, 0, this.direction2)
      }
    }
    class SC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = CC, this.radiusRange = zC, this.directionRandomizer = ZC
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = ZC.position.subtract(CC.getTranslation()).normalize(),
          nC = (0, MC.RandomRange)(0, this.directionRandomizer),
          fC = (0, MC.RandomRange)(0, this.directionRandomizer),
          oC = (0, MC.RandomRange)(0, this.directionRandomizer);
        wC.x += nC, wC.y += fC, wC.z += oC, wC.normalize(), QC ? zC.Av(wC) : bC.r.TransformNormalFromFloatsToRef(wC.x, wC.y, wC.z, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, QC) {
        const wC = this.radius - (0, MC.RandomRange)(0, this.radius * this.radiusRange),
          nC = (0, MC.RandomRange)(0, 1),
          fC = (0, MC.RandomRange)(0, 2 * Math.PI),
          oC = Math.acos(2 * nC - 1),
          qC = wC * Math.cos(fC) * Math.sin(oC),
          FC = wC * Math.cos(oC),
          WC = wC * Math.sin(fC) * Math.sin(oC);
        QC ? zC.L_(qC, Math.abs(FC), WC) : bC.r.TransformCoordinatesFromFloatsToRef(qC, Math.abs(FC), WC, CC, zC)
      }
      clone() {
        const CC = new SC(this.radius, this.directionRandomizer);
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setFloat("radius", this.radius), CC.setFloat("radiusRange", this.radiusRange), CC.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(CC) {
        CC.addUniform("radius", 1), CC.addUniform("radiusRange", 1), CC.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.radius = this.radius, CC.radiusRange = this.radiusRange, CC.directionRandomizer = this.directionRandomizer, CC
      }
      parse(CC) {
        this.radius = CC.radius, this.radiusRange = CC.radiusRange, this.directionRandomizer = CC.directionRandomizer
      }
    }
    class pC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = CC, this.radiusRange = zC, this.directionRandomizer = ZC
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = ZC.position.subtract(CC.getTranslation()).normalize(),
          nC = (0, MC.RandomRange)(0, this.directionRandomizer),
          fC = (0, MC.RandomRange)(0, this.directionRandomizer),
          oC = (0, MC.RandomRange)(0, this.directionRandomizer);
        wC.x += nC, wC.y += fC, wC.z += oC, wC.normalize(), QC ? zC.Av(wC) : bC.r.TransformNormalFromFloatsToRef(wC.x, wC.y, wC.z, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, QC) {
        const wC = this.radius - (0, MC.RandomRange)(0, this.radius * this.radiusRange),
          nC = (0, MC.RandomRange)(0, 1),
          fC = (0, MC.RandomRange)(0, 2 * Math.PI),
          oC = Math.acos(2 * nC - 1),
          qC = wC * Math.cos(fC) * Math.sin(oC),
          FC = wC * Math.cos(oC),
          WC = wC * Math.sin(fC) * Math.sin(oC);
        QC ? zC.L_(qC, FC, WC) : bC.r.TransformCoordinatesFromFloatsToRef(qC, FC, WC, CC, zC)
      }
      clone() {
        const CC = new pC(this.radius, this.directionRandomizer);
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setFloat("radius", this.radius), CC.setFloat("radiusRange", this.radiusRange), CC.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(CC) {
        CC.addUniform("radius", 1), CC.addUniform("radiusRange", 1), CC.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.radius = this.radius, CC.radiusRange = this.radiusRange, CC.directionRandomizer = this.directionRandomizer, CC
      }
      parse(CC) {
        this.radius = CC.radius, this.radiusRange = CC.radiusRange, this.directionRandomizer = CC.directionRandomizer
      }
    }
    class PC extends pC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0),
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0);
        super(CC), this.direction1 = zC, this.direction2 = ZC
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
          nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
          fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
        QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
      }
      clone() {
        const CC = new PC(this.radius, this.direction1, this.direction2);
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setFloat("radius", this.radius), CC.setFloat("radiusRange", this.radiusRange), CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(CC) {
        CC.addUniform("radius", 1), CC.addUniform("radiusRange", 1), CC.addUniform("direction1", 3), CC.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const CC = super.serialize();
        return CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC
      }
      parse(CC) {
        super.parse(CC), bC.r.FromArrayToRef(CC.direction1, 0, this.direction1), bC.r.FromArrayToRef(CC.direction2, 0, this.direction2)
      }
    }
    var GC = ZC(38497);
    class RC {
      get radius() {
        return this._radius
      }
      set radius(CC) {
        this._radius = CC, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(CC) {
        this._angle = CC, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = ZC, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = zC, this.radius = CC
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = ZC.position.subtract(CC.getTranslation()).normalize(),
          nC = (0, MC.RandomRange)(0, this.directionRandomizer),
          fC = (0, MC.RandomRange)(0, this.directionRandomizer),
          oC = (0, MC.RandomRange)(0, this.directionRandomizer);
        wC.x += nC, wC.y += fC, wC.z += oC, wC.normalize(), QC ? zC.Av(wC) : bC.r.TransformNormalFromFloatsToRef(wC.x, wC.y, wC.z, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, QC) {
        const wC = (0, MC.RandomRange)(0, 2 * Math.PI);
        let nC;
        this.emitFromSpawnPointOnly ? nC = 1e-4 : (nC = (0, MC.RandomRange)(0, this.heightRange), nC = 1 - nC * nC);
        let fC = this._radius - (0, MC.RandomRange)(0, this._radius * this.radiusRange);
        fC *= nC;
        const oC = fC * Math.sin(wC),
          qC = fC * Math.cos(wC),
          FC = nC * this._height;
        if (QC) return zC.x = oC, zC.y = FC, void(zC.z = qC);
        bC.r.TransformCoordinatesFromFloatsToRef(oC, FC, qC, CC, zC)
      }
      clone() {
        const CC = new RC(this._radius, this._angle, this.directionRandomizer);
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setFloat2("radius", this._radius, this.radiusRange), CC.setFloat("coneAngle", this._angle), CC.setFloat2("height", this._height, this.heightRange), CC.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(CC) {
        CC.addUniform("radius", 2), CC.addUniform("coneAngle", 1), CC.addUniform("height", 2), CC.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let CC = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (CC += "\n#define CONEEMITTERSPAWNPOINT"), CC
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.radius = this._radius, CC.angle = this._angle, CC.directionRandomizer = this.directionRandomizer, CC.radiusRange = this.radiusRange, CC.heightRange = this.heightRange, CC.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, CC
      }
      parse(CC) {
        this.radius = CC.radius, this.angle = CC.angle, this.directionRandomizer = CC.directionRandomizer, this.radiusRange = void 0 !== CC.radiusRange ? CC.radiusRange : 1, this.heightRange = void 0 !== CC.heightRange ? CC.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== CC.emitFromSpawnPointOnly && CC.emitFromSpawnPointOnly
      }
    }
    class AC extends RC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0),
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0);
        super(CC, zC), this.direction1 = ZC, this.direction2 = QC
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
          nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
          fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
        QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
      }
      clone() {
        const CC = new AC(this.radius, this.angle, this.direction1, this.direction2);
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        super.applyToShader(CC), CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(CC) {
        super.buildUniformLayout(CC), CC.addUniform("direction1", 3), CC.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const CC = super.serialize();
        return CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC
      }
      parse(CC) {
        super.parse(CC), bC.r.FromArrayToRef(CC.direction1, 0, this.direction1), bC.r.FromArrayToRef(CC.direction2, 0, this.direction2)
      }
    }
    class xC {
      get mesh() {
        return this._mesh
      }
      set mesh(CC) {
        this._mesh !== CC && (this._mesh = CC, CC ? (this._indices = CC.CQC(), this._positions = CC.getVerticesData(nC.k.PositionKind), this._normals = CC.getVerticesData(nC.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = bC.r.Zero(), this._mesh = null, this.direction1 = new bC.r(0, 1, 0), this.direction2 = new bC.r(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = CC
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        if (this.useMeshNormalsForDirection && this._normals) return void bC.r.TransformNormalToRef(this._storedNormal, CC, zC);
        const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
          nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
          fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
        QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, QC) {
        if (!this._indices || !this._positions) return;
        const wC = 3 * (Math.random() * (this._indices.length / 3) | 0),
          nC = Math.random(),
          fC = Math.random() * (1 - nC),
          oC = 1 - nC - fC,
          qC = this._indices[wC],
          FC = this._indices[wC + 1],
          WC = this._indices[wC + 2],
          NC = bC.j.Eg[0],
          MC = bC.j.Eg[1],
          gC = bC.j.Eg[2],
          SC = bC.j.Eg[3];
        bC.r.FromArrayToRef(this._positions, 3 * qC, NC), bC.r.FromArrayToRef(this._positions, 3 * FC, MC), bC.r.FromArrayToRef(this._positions, 3 * WC, gC), SC.x = nC * NC.x + fC * MC.x + oC * gC.x, SC.y = nC * NC.y + fC * MC.y + oC * gC.y, SC.z = nC * NC.z + fC * MC.z + oC * gC.z, QC ? zC.L_(SC.x, SC.y, SC.z) : bC.r.TransformCoordinatesFromFloatsToRef(SC.x, SC.y, SC.z, CC, zC), this.useMeshNormalsForDirection && this._normals && (bC.r.FromArrayToRef(this._normals, 3 * qC, NC), bC.r.FromArrayToRef(this._normals, 3 * FC, MC), bC.r.FromArrayToRef(this._normals, 3 * WC, gC), this._storedNormal.x = nC * NC.x + fC * MC.x + oC * gC.x, this._storedNormal.y = nC * NC.y + fC * MC.y + oC * gC.y, this._storedNormal.z = nC * NC.z + fC * MC.z + oC * gC.z)
      }
      clone() {
        const CC = new xC(this.mesh);
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {
        CC.setVector3("direction1", this.direction1), CC.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(CC) {
        CC.addUniform("direction1", 3), CC.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.direction1 = this.direction1.VZC(), CC.direction2 = this.direction2.VZC(), CC.meshId = this.mesh?.id, CC.useMeshNormalsForDirection = this.useMeshNormalsForDirection, CC
      }
      parse(CC, zC) {
        bC.r.FromArrayToRef(CC.direction1, 0, this.direction1), bC.r.FromArrayToRef(CC.direction2, 0, this.direction2), CC.meshId && zC && (this.mesh = zC.getLastMeshById(CC.meshId)), this.useMeshNormalsForDirection = CC.useMeshNormalsForDirection
      }
    }
    class JC {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(CC) {
        this._targetStopDuration !== CC && (this._targetStopDuration = CC)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(CC) {
        this._noiseTexture !== CC && (this._noiseTexture = CC, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(CC) {
        this._attractors.push(CC)
      }
      removeAttractor(CC) {
        const zC = this._attractors.indexOf(CC); - 1 !== zC && this._attractors.splice(zC, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(CC) {
        this._animationSheetEnabled !== CC && (this._animationSheetEnabled = CC)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(CC) {
        this._isAnimationSheetEnabled != CC && (this._isAnimationSheetEnabled = CC, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(CC) {
        this._useLogarithmicDepth = CC && this.Km().mg().getCaps().fragmentDepthSupported
      }
      Km() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(CC) {
        switch (CC) {
          case JC.BLENDMODE_MULTIPLYADD:
            return;
          case JC.BLENDMODE_ADD:
            CC = 1;
            break;
          case JC.BLENDMODE_ONEONE:
            CC = 6;
            break;
          case JC.BLENDMODE_STANDARD:
            CC = 2;
            break;
          case JC.BLENDMODE_MULTIPLY:
            CC = 4;
            break;
          case JC.BLENDMODE_SUBTRACT:
            CC = 3
        }
        this._engine.setAlphaMode(CC)
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
      addEmitRateGradient(CC, zC, ZC) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, CC, zC, ZC), this
      }
      removeEmitRateGradient(CC) {
        return this._removeFactorGradient(this._emitRateGradients, CC), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : bC.r.Zero()
      }
      set direction1(CC) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = CC)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : bC.r.Zero()
      }
      set direction2(CC) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = CC)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : bC.r.Zero()
      }
      set minEmitBox(CC) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = CC)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : bC.r.Zero()
      }
      set maxEmitBox(CC) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = CC)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(CC) {
        this._billboardMode !== CC && (this._billboardMode = CC, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(CC) {
        this._isBillboardBased !== CC && (this._isBillboardBased = CC, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(CC) {
        this._attachImageProcessingConfiguration(CC)
      }
      _attachImageProcessingConfiguration(CC) {
        CC !== this._imageProcessingConfiguration && (!CC && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = CC)
      }
      _reset() {}
      _addFactorGradient(CC, zC, ZC, wC) {
        const bC = new QC.g(zC, ZC, wC);
        CC.push(bC), CC.sort(((CC, zC) => CC.gradient < zC.gradient ? -1 : CC.gradient > zC.gradient ? 1 : 0))
      }
      _removeFactorGradient(CC, zC) {
        if (!CC) return;
        let ZC = 0;
        for (const QC of CC) {
          if (QC.gradient === zC) {
            CC.splice(ZC, 1);
            break
          }
          ZC++
        }
      }
      _removeGradientAndTexture(CC, zC, ZC) {
        if (!zC) return this;
        let QC = 0;
        for (const wC of zC) {
          if (wC.gradient === CC) {
            zC.splice(QC, 1);
            break
          }
          QC++
        }
        return ZC && ZC.dispose(), this
      }
      constructor(CC) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = bC.r.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new bC.r(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = JC.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new bC.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new bC.r(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = bC.r.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new FC.g(1, 1, 1, 1), this.color2 = new FC.g(1, 1, 1, 1), this.colorDead = new FC.g(0, 0, 0, 1), this.textureMask = new FC.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new qC.d, this.id = CC, this.name = CC
      }
      createPointEmitter(CC, zC) {
        const ZC = function(CC, zC) {
          const ZC = new gC;
          return ZC.direction1 = CC, ZC.direction2 = zC, ZC
        }(CC, zC);
        return this.particleEmitterType = ZC, ZC
      }
      createHemisphericEmitter() {
        const CC = function() {
          return new SC(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = CC, CC
      }
      createSphereEmitter() {
        const CC = function() {
          return new pC(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = CC, CC
      }
      createDirectedSphereEmitter() {
        const CC = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0),
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0);
          return new PC(CC, zC, ZC)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new bC.r(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0));
        return this.particleEmitterType = CC, CC
      }
      createCylinderEmitter() {
        const CC = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new GC.i(CC, zC, ZC, QC)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = CC, CC
      }
      createDirectedCylinderEmitter() {
        const CC = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0),
            wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new bC.r(0, 1, 0);
          return new GC.e(CC, zC, ZC, QC, wC)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new bC.r(0, 1, 0));
        return this.particleEmitterType = CC, CC
      }
      createConeEmitter() {
        const CC = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new RC(CC, zC)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = CC, CC
      }
      createDirectedConeEmitter() {
        const CC = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0),
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0);
          return new AC(CC, zC, ZC, QC)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bC.r(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bC.r(0, 1, 0));
        return this.particleEmitterType = CC, CC
      }
      createBoxEmitter(CC, zC, ZC, QC) {
        const wC = new WC.c;
        return this.particleEmitterType = wC, this.direction1 = CC, this.direction2 = zC, this.minEmitBox = ZC, this.maxEmitBox = QC, wC
      }
      createMeshEmitter() {
        const CC = function() {
          return new xC(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = CC, CC
      }
    }
    JC.BLENDMODE_ONEONE = 0, JC.BLENDMODE_STANDARD = 1, JC.BLENDMODE_ADD = 2, JC.BLENDMODE_MULTIPLY = 3, JC.BLENDMODE_MULTIPLYADD = 4, JC.BLENDMODE_SUBTRACT = -1;
    class IC {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new FC.g(0, 0, 0, 0), this.currentColor2 = new FC.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = bC.r.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class iC {
      constructor(CC) {
        this.particleSystem = CC, this.position = bC.r.Zero(), this.direction = bC.r.Zero(), this.color = new FC.g(0, 0, 0, 0), this.colorStep = new FC.g(0, 0, 0, 0), this.initialColor = new FC.g(0, 0, 0, 0), this.colorDead = new FC.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new bC.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new IC, this.id = iC._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let CC = this.age,
          zC = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === zC ? (zC = 1, CC = this._properties.randomCellOffset) : CC += this._properties.randomCellOffset);
        const ZC = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let QC;
        QC = this._properties.initialSpriteCellLoop ? (0, MC.Clamp)(CC * zC % this.lifeTime / this.lifeTime) : (0, MC.Clamp)(CC * zC / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + QC * ZC | 0
      }
      _inheritParticleInfoToSubEmitter(CC) {
        if (CC.particleSystem.emitter.position) {
          const zC = CC.particleSystem.emitter;
          if (zC.position.Av(this.position), CC.inheritDirection) {
            const CC = bC.j.Eg[0];
            this.direction.normalizeToRef(CC), zC.setDirection(CC, 0, Math.PI / 2)
          }
        } else {
          CC.particleSystem.emitter.Av(this.position)
        }
        this.direction.scaleToRef(CC.inheritedVelocityAmount / 2, bC.j.Eg[0]), CC.particleSystem._inheritedVelocityOffset.Av(bC.j.Eg[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const CC of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(CC)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = iC._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(CC) {
        CC.position.Av(this.position), this._properties.initialDirection ? CC._properties.initialDirection ? CC._properties.initialDirection.Av(this._properties.initialDirection) : CC._properties.initialDirection = this._properties.initialDirection.clone() : CC._properties.initialDirection = null, CC.direction.Av(this.direction), this._properties.localPosition && (CC._properties.localPosition ? CC._properties.localPosition.Av(this._properties.localPosition) : CC._properties.localPosition = this._properties.localPosition.clone()), CC.color.Av(this.color), CC.colorStep.Av(this.colorStep), CC.initialColor.Av(this.initialColor), CC.colorDead.Av(this.colorDead), CC.lifeTime = this.lifeTime, CC.age = this.age, CC._properties.randomCellOffset = this._properties.randomCellOffset, CC.size = this.size, CC.scale.Av(this.scale), CC.angle = this.angle, CC.angularSpeed = this.angularSpeed, CC.particleSystem = this.particleSystem, CC.cellIndex = this.cellIndex, CC.id = this.id, CC._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (CC._properties.currentColorGradient = this._properties.currentColorGradient, CC._properties.currentColor1.Av(this._properties.currentColor1), CC._properties.currentColor2.Av(this._properties.currentColor2)), this._properties.currentSizeGradient && (CC._properties.currentSizeGradient = this._properties.currentSizeGradient, CC._properties.currentSize1 = this._properties.currentSize1, CC._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (CC._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, CC._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, CC._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (CC._properties.currentVelocityGradient = this._properties.currentVelocityGradient, CC._properties.currentVelocity1 = this._properties.currentVelocity1, CC._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (CC._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, CC._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, CC._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (CC._properties.currentDragGradient = this._properties.currentDragGradient, CC._properties.currentDrag1 = this._properties.currentDrag1, CC._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (CC._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, CC._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, CC._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (CC.remapData && this.remapData ? CC.remapData.Av(this.remapData) : CC.remapData = new bC.u(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (CC._properties.randomNoiseCoordinates1 && CC._properties.randomNoiseCoordinates2 ? (CC._properties.randomNoiseCoordinates1.Av(this._properties.randomNoiseCoordinates1), CC._properties.randomNoiseCoordinates2.Av(this._properties.randomNoiseCoordinates2)) : (CC._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), CC._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), CC.metadata = this.metadata
      }
    }
    iC._Count = 0;
    var vC = ZC(40934);
    class eC {
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
      constructor(CC, zC, ZC, QC) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = zC, this.wV = CC, this._scene = ZC, this._host = QC, this._activeTargets = [], zC._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            zb: this._getCorrectLoopMode()
          }, this._animation.dataType === vC.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = bC.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const CC = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, CC)
        }
        if (this.wV instanceof Array) {
          let CC = 0;
          for (const zC of this.wV) this._preparePath(zC, CC), this._getOriginalValues(CC), CC++;
          this._targetIsArray = !0
        } else this._preparePath(this.wV), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const wC = zC.getEvents();
        if (wC && wC.length > 0)
          for (const bC of wC) this._events.push(bC._clone());
        this._enableBlending = CC && CC.animationPropertiesOverride ? CC.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = this._animation.targetPropertyPath;
        if (ZC.length > 1) {
          let QC = CC;
          for (let CC = 0; CC < ZC.length - 1; CC++) {
            const zC = ZC[CC];
            if (QC = QC[zC], void 0 === QC) throw new Error(`Invalid property (${zC}) in property path (${ZC.join(".")})`)
          }
          this._targetPath = ZC[ZC.length - 1], this._activeTargets[zC] = QC
        } else this._targetPath = ZC[0], this._activeTargets[zC] = CC;
        if (void 0 === this._activeTargets[zC][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ZC.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.wV instanceof Array) {
            let CC = 0;
            for (const zC of this.wV) void 0 !== this._originalValue[CC] && this._setValue(zC, this._activeTargets[CC], this._originalValue[CC], -1, CC), CC++
          } else void 0 !== this._originalValue[0] && this._setValue(this.wV, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let CC = 0; CC < this._events.length; CC++) this._events[CC].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const CC = this._animation.runtimeAnimations.indexOf(this);
        CC > -1 && this._animation.runtimeAnimations.splice(CC, 1)
      }
      setValue(CC, zC) {
        if (this._targetIsArray)
          for (let ZC = 0; ZC < this.wV.length; ZC++) {
            const QC = this.wV[ZC];
            this._setValue(QC, this._activeTargets[ZC], CC, zC, ZC)
          } else this._setValue(this.wV, this._directTarget, CC, zC, 0)
      }
      _getOriginalValues() {
        let CC, zC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ZC = this._activeTargets[zC];
        if (vC.b.InheritOriginalValueFromActiveAnimations) {
          const CC = this._scene._activeAnimatables;
          for (let QC = 0; QC < CC.length; QC++) {
            const wC = CC[QC]._runtimeAnimations;
            for (let CC = 0; CC < wC.length; CC++) {
              const QC = wC[CC];
              if (QC !== this && QC._targetPath === this._targetPath)
                for (let CC = 0; CC < QC._activeTargets.length; CC++)
                  if (QC._activeTargets[CC] === ZC && void 0 !== QC._originalValue[CC]) return void(QC._originalValue[CC] && QC._originalValue[CC].clone ? this._originalValue[zC] = QC._originalValue[CC].clone() : this._originalValue[zC] = QC._originalValue[CC])
            }
          }
        }
        CC = ZC.getLocalMatrix && "_matrix" === this._targetPath ? ZC.getLocalMatrix() : ZC[this._targetPath], CC && CC.clone ? this._originalValue[zC] = CC.clone() : this._originalValue[zC] = CC
      }
      _registerTargetForLateAnimationBinding(CC, zC) {
        const ZC = CC.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ZC), ZC._lateAnimationHolders || (ZC._lateAnimationHolders = {}), ZC._lateAnimationHolders[CC.targetPath] || (ZC._lateAnimationHolders[CC.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: zC
        }), CC.isAdditive ? (ZC._lateAnimationHolders[CC.targetPath].additiveAnimations.push(CC), ZC._lateAnimationHolders[CC.targetPath].totalAdditiveWeight += CC.weight) : (ZC._lateAnimationHolders[CC.targetPath].animations.push(CC), ZC._lateAnimationHolders[CC.targetPath].totalWeight += CC.weight)
      }
      _setValue(CC, zC, ZC, QC, wC) {
        const nC = this._scene._animationWrites,
          fC = this._scene._animationWriteCount++;
        let oC = nC[fC];
        if (oC || (oC = nC[fC] = {
            runtimeAnimation: this,
            target: CC,
            weight: QC,
            additive: !1,
            blendingFactor: 1,
            Mp: !1
          }), oC.runtimeAnimation = this, oC.target = CC, oC.weight = QC, oC.additive = this.isAdditive, oC.Mp = !1, this._currentActiveTarget = zC, this._weight = QC, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const CC = zC[this._targetPath];
            CC.clone ? this._originalBlendValue = CC.clone() : this._originalBlendValue = CC
          }
          this._originalBlendValue.m ? vC.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? bC.b.DecomposeLerpToRef(this._originalBlendValue, ZC, this._blendingFactor, this._currentValue) : this._currentValue = bC.b.DecomposeLerp(this._originalBlendValue, ZC, this._blendingFactor) : this._currentValue ? bC.b.LerpToRef(this._originalBlendValue, ZC, this._blendingFactor, this._currentValue) : this._currentValue = bC.b.Lerp(this._originalBlendValue, ZC, this._blendingFactor) : this._currentValue = vC.b._UniversalLerp(this._originalBlendValue, ZC, this._blendingFactor);
          const QC = CC && CC.animationPropertiesOverride ? CC.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          oC.blendingFactor = this._blendingFactor, this._blendingFactor += QC
        } else oC.blendingFactor = 1, this._currentValue ? this._currentValue.Av ? this._currentValue.Av(ZC) : this._currentValue = ZC : this._currentValue = ZC?.clone ? ZC.clone() : ZC; - 1 !== QC ? this._registerTargetForLateAnimationBinding(this, this._originalValue[wC]) : this._animationState.zb === vC.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[wC], zC[this._targetPath]) : zC[this._targetPath] = this._originalValue[wC] + this._currentValue : zC[this._targetPath] = this._currentValue, CC.YzC && CC.YzC(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.wV && this.wV.animationPropertiesOverride) {
          return "MorphTarget" === this.wV.getClassName?.() && null == this.wV._animationPropertiesOverride ? this._animation.zb : this.wV.animationPropertiesOverride.zb
        }
        return this._animation.zb
      }
      goToFrame(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const ZC = this._animation.getKeys();
        CC < ZC[0].frame ? CC = ZC[0].frame : CC > ZC[ZC.length - 1].frame && (CC = ZC[ZC.length - 1].frame);
        const QC = this._events;
        if (QC.length)
          for (let bC = 0; bC < QC.length; bC++) QC[bC].onlyOnce || (QC[bC].isDone = QC[bC].frame < CC);
        this._currentFrame = CC;
        const wC = this._animation._interpolate(CC, this._animationState);
        this.setValue(wC, zC)
      }
      _prepareForSpeedRatioChange(CC) {
        const zC = this._previousElapsedTime * (this._animation.framePerSecond * CC) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - zC
      }
      animate(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const nC = this._animation,
          fC = nC.targetPropertyPath;
        if (!fC || fC.length < 1) return this._stopped = !0, !1;
        let oC, qC = !0;
        const FC = this._events;
        let WC;
        if (this._coreRuntimeAnimation) WC = ZC - zC, oC = this._coreRuntimeAnimation.currentFrame, this._currentFrame = oC, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let bC;
          (zC < this._minFrame || zC > this._maxFrame) && (zC = this._minFrame), (ZC < this._minFrame || ZC > this._maxFrame) && (ZC = this._maxFrame), WC = ZC - zC;
          let fC = CC * (nC.framePerSecond * wC) / 1e3 + this._absoluteFrameOffset,
            NC = 0,
            MC = !1;
          const gC = QC && this._animationState.zb === vC.b.ANIMATIONLOOPMODE_YOYO;
          if (gC) {
            const CC = (fC - zC) / WC,
              ZC = Math.sin(CC * Math.PI);
            fC = Math.abs(ZC) * WC + zC;
            const QC = ZC >= 0 ? 1 : -1;
            this._yoyoDirection !== QC && (MC = !0), this._yoyoDirection = QC
          }
          if (this._previousElapsedTime = CC, this._previousAbsoluteFrame = fC, !QC && ZC >= zC && (fC >= WC && wC > 0 || fC <= 0 && wC < 0)) qC = !1, NC = nC.evaluate(ZC);
          else if (!QC && zC >= ZC && (fC <= WC && wC < 0 || fC >= 0 && wC > 0)) qC = !1, NC = nC.evaluate(zC);
          else if (this._animationState.zb !== vC.b.ANIMATIONLOOPMODE_CYCLE) {
            const CC = ZC.toString() + zC.toString();
            if (!this._offsetsCache[CC]) {
              this._animationState.repeatCount = 0, this._animationState.zb = vC.b.ANIMATIONLOOPMODE_CYCLE;
              const QC = nC._interpolate(zC, this._animationState),
                wC = nC._interpolate(ZC, this._animationState);
              switch (this._animationState.zb = this._getCorrectLoopMode(), nC.dataType) {
                case vC.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[CC] = wC - QC;
                  break;
                case vC.b.ANIMATIONTYPE_QUATERNION:
                case vC.b.ANIMATIONTYPE_VECTOR3:
                case vC.b.ANIMATIONTYPE_VECTOR2:
                case vC.b.ANIMATIONTYPE_SIZE:
                case vC.b.ANIMATIONTYPE_COLOR3:
                case vC.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[CC] = wC.subtract(QC)
              }
              this._highLimitsCache[CC] = wC
            }
            NC = this._highLimitsCache[CC], bC = this._offsetsCache[CC]
          }
          if (void 0 === bC) switch (nC.dataType) {
            case vC.b.ANIMATIONTYPE_FLOAT:
              bC = 0;
              break;
            case vC.b.ANIMATIONTYPE_QUATERNION:
              bC = vC.j;
              break;
            case vC.b.ANIMATIONTYPE_VECTOR3:
              bC = vC.m;
              break;
            case vC.b.ANIMATIONTYPE_VECTOR2:
              bC = vC.l;
              break;
            case vC.b.ANIMATIONTYPE_SIZE:
              bC = vC.k;
              break;
            case vC.b.ANIMATIONTYPE_COLOR3:
              bC = vC.f;
              break;
            case vC.b.ANIMATIONTYPE_COLOR4:
              bC = vC.i
          }
          const SC = this._host ? this._host.syncRoot : null;
          let pC, PC = this._playbackFrames,
            GC = !1;
          if (SC) {
            const CC = SC.toFrame - SC.fromFrame,
              ZC = SC.masterFrame,
              QC = (ZC - SC.fromFrame) / CC;
            oC = zC + WC * QC;
            const wC = SC.getAnimations()[0];
            if (wC && 0 !== CC) {
              const CC = WC * QC,
                zC = wC._playbackTo - wC._playbackFrom;
              if (0 !== zC && wC._playbackFrom <= SC.fromFrame && wC._playbackTo >= SC.toFrame) {
                PC = WC * Math.round((wC._playbackFrames - (wC._currentFrame - wC._playbackFrom)) / zC) + CC
              } else GC = (ZC - this._playbackSyncMasterFrame) * (wC._playbackFrames - this._playbackSyncMasterPlayed) < 0, PC = CC;
              GC = GC || wC._playbackJumped, this._playbackSyncMasterPlayed = wC._playbackFrames, this._playbackSyncMasterFrame = ZC
            }
          } else oC = fC > 0 && zC > ZC || fC < 0 && zC < ZC ? qC && 0 !== WC ? ZC + fC % WC : zC : qC && 0 !== WC ? zC + fC % WC : ZC;
          if (!gC && (wC > 0 && this.currentFrame > oC || wC < 0 && this.currentFrame < oC) || gC && MC) {
            this._onLoop();
            for (let CC = 0; CC < FC.length; CC++) FC[CC].onlyOnce || (FC[CC].isDone = !1);
            this._animationState.key = wC > 0 ? 0 : nC.getKeys().length - 1
          }
          if (this._currentFrame = oC, this._animationState.repeatCount = 0 === WC ? 0 : fC / WC | 0, this._animationState.highLimitValue = NC, this._animationState.offsetValue = bC, this._playbackFrom = zC, this._playbackTo = ZC, this._playbackJumped = GC, this._playbackSyncRoot = SC, SC) pC = PC;
          else if (qC) pC = gC ? oC === zC && fC === ZC ? WC : oC - zC : fC;
          else {
            const CC = 0 !== WC ? Math.floor(this._playbackFrames / WC) : 0;
            pC = (oC === ZC ? CC + 1 : CC) * WC
          }
          this._playbackFrames = pC, this._playbackProgress = this._animationState.zb === vC.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? WC : pC
        }
        const NC = nC._interpolate(oC, this._animationState);
        if (this.setValue(NC, bC), FC.length)
          for (let MC = 0; MC < FC.length; MC++)
            if (WC >= 0 && oC >= FC[MC].frame && FC[MC].frame >= zC || WC < 0 && oC <= FC[MC].frame && FC[MC].frame <= zC) {
              const CC = FC[MC];
              CC.isDone || (CC.onlyOnce && (FC.splice(MC, 1), MC--), CC.isDone = !0, CC.action(oC))
            } return qC || (this._stopped = !0), qC
      }
    }
    var hC = ZC(39730);
    class KC {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(CC) {
        this._weight = -1 !== CC ? Math.min(Math.max(CC, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(CC) {
        for (let zC = 0; zC < this._runtimeAnimations.length; zC++) {
          this._runtimeAnimations[zC]._prepareForSpeedRatioChange(CC)
        }
        this._speedRatio = CC, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          fC = arguments.length > 6 ? arguments[6] : void 0,
          oC = arguments.length > 7 ? arguments[7] : void 0,
          qC = arguments.length > 8 ? arguments[8] : void 0,
          FC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          WC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = zC, this.fromFrame = ZC, this.toFrame = QC, this.loopAnimation = bC, this.onAnimationEnd = fC, this.onAnimationLoop = qC, this.isAdditive = FC, this.playOrder = WC, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.kR = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new wC.d, this.onAnimationLoopObservable = new wC.d, this._scene = CC, oC && this.appendAnimations(zC, oC), this._speedRatio = nC, CC._activeAnimatables.push(this)
      }
      syncWith(CC) {
        if (this._syncRoot = CC, CC) {
          const CC = this._scene._activeAnimatables.indexOf(this);
          CC > -1 && (this._scene._activeAnimatables.splice(CC, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(CC, zC) {
        for (let ZC = 0; ZC < zC.length; ZC++) {
          const QC = zC[ZC],
            wC = new eC(CC, QC, this._scene, this);
          wC._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(wC)
        }
      }
      getAnimationByTargetProperty(CC) {
        const zC = this._runtimeAnimations;
        for (let ZC = 0; ZC < zC.length; ZC++)
          if (zC[ZC].animation.targetProperty === CC) return zC[ZC].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(CC) {
        const zC = this._runtimeAnimations;
        for (let ZC = 0; ZC < zC.length; ZC++)
          if (zC[ZC].animation.targetProperty === CC) return zC[ZC];
        return null
      }
      reset() {
        const CC = this._runtimeAnimations;
        for (let zC = 0; zC < CC.length; zC++) CC[zC].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(CC) {
        const zC = this._runtimeAnimations;
        for (let ZC = 0; ZC < zC.length; ZC++) zC[ZC].animation.enableBlending = !0, zC[ZC].animation.blendingSpeed = CC
      }
      disableBlending() {
        const CC = this._runtimeAnimations;
        for (let zC = 0; zC < CC.length; zC++) CC[zC].animation.enableBlending = !1
      }
      goToFrame(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this._runtimeAnimations;
        if (ZC[0]) {
          const zC = ZC[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? ZC[0].currentFrame;
          const QC = 0 === this.speedRatio ? 0 : (CC - this._frameToSyncFromJump) / zC * 1e3 / this.speedRatio;
          this._manualJumpDelay = -QC
        }
        for (let QC = 0; QC < ZC.length; QC++) ZC[QC].goToFrame(CC, zC ? this._weight : -1);
        this._goToFrame = CC
      }
      get paused() {
        return this.kR
      }
      pause() {
        this.kR || (this.kR = !0)
      }
      restart() {
        this.kR = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (CC || zC) {
          const wC = this._scene._activeAnimatables.indexOf(this);
          if (wC > -1) {
            const bC = this._runtimeAnimations;
            for (let ZC = bC.length - 1; ZC >= 0; ZC--) {
              const QC = bC[ZC];
              CC && QC.animation.name != CC || (zC && !zC(QC.target) || (QC.dispose(), bC.splice(ZC, 1)))
            }
            0 == bC.length && (ZC || this._scene._activeAnimatables.splice(wC, 1), QC || this._raiseOnAnimationEnd())
          }
        } else {
          const CC = this._scene._activeAnimatables.indexOf(this);
          if (CC > -1) {
            ZC || this._scene._activeAnimatables.splice(CC, 1);
            const zC = this._runtimeAnimations;
            for (let CC = 0; CC < zC.length; CC++) zC[CC].dispose();
            this._runtimeAnimations.length = 0, QC || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((CC => {
          this.onAnimationEndObservable.add((() => {
            CC(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(CC) {
        if (this.kR) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = CC), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = CC, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += CC - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !KC.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let zC = !1;
        const ZC = this._runtimeAnimations;
        let QC;
        for (QC = 0; QC < ZC.length; QC++) {
          const wC = ZC[QC].animate(CC - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          zC = zC || wC
        }
        if (this.animationStarted = zC, !zC) {
          if (this.disposeOnEnd)
            for (QC = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(QC, 1), QC = 0; QC < ZC.length; QC++) ZC[QC].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return zC
      }
    }

    function YC(CC) {
      if (0 === CC.totalWeight && 0 === CC.totalAdditiveWeight) return CC.originalValue;
      let zC = 1;
      const ZC = bC.j.Eg[0],
        QC = bC.j.Eg[1],
        wC = bC.j.Quaternion[0];
      let nC = 0;
      const fC = CC.animations[0],
        oC = CC.originalValue;
      let qC, FC = !1;
      if (CC.totalWeight < 1) qC = 1 - CC.totalWeight, oC.decompose(QC, wC, ZC);
      else {
        if (nC = 1, zC = CC.totalWeight, qC = fC.weight / zC, 1 == qC) {
          if (!CC.totalAdditiveWeight) return fC.currentValue;
          FC = !0
        }
        fC.currentValue.decompose(QC, wC, ZC)
      }
      if (!FC) {
        QC.scaleInPlace(qC), ZC.scaleInPlace(qC), wC.scaleInPlace(qC);
        for (let fC = nC; fC < CC.animations.length; fC++) {
          const nC = CC.animations[fC];
          if (0 === nC.weight) continue;
          qC = nC.weight / zC;
          const oC = bC.j.Eg[2],
            FC = bC.j.Eg[3],
            WC = bC.j.Quaternion[1];
          nC.currentValue.decompose(FC, WC, oC), FC.scaleAndAddToRef(qC, QC), WC.scaleAndAddToRef(bC.f.Dot(wC, WC) > 0 ? qC : -qC, wC), oC.scaleAndAddToRef(qC, ZC)
        }
        wC.normalize()
      }
      for (let NC = 0; NC < CC.additiveAnimations.length; NC++) {
        const zC = CC.additiveAnimations[NC];
        if (0 === zC.weight) continue;
        const nC = bC.j.Eg[2],
          fC = bC.j.Eg[3],
          oC = bC.j.Quaternion[1];
        zC.currentValue.decompose(fC, oC, nC), fC.multiplyToRef(QC, fC), bC.r.LerpToRef(QC, fC, zC.weight, QC), wC.multiplyToRef(oC, oC), bC.f.SlerpToRef(wC, oC, zC.weight, wC), nC.scaleAndAddToRef(zC.weight, ZC)
      }
      const WC = fC ? fC._animationState.workValue : bC.j.Matrix[0].clone();
      return bC.b.ComposeToRef(QC, wC, ZC, WC), WC
    }

    function dC(CC, zC) {
      if (0 === CC.totalWeight && 0 === CC.totalAdditiveWeight) return zC;
      const ZC = CC.animations[0],
        QC = CC.originalValue;
      let wC = zC;
      if (0 === CC.totalWeight && CC.totalAdditiveWeight > 0) wC.Av(QC);
      else if (1 === CC.animations.length) {
        if (bC.f.SlerpToRef(QC, ZC.currentValue, Math.min(1, CC.totalWeight), wC), 0 === CC.totalAdditiveWeight) return wC
      } else if (CC.animations.length > 1) {
        let ZC, nC, fC = 1;
        if (CC.totalWeight < 1) {
          const zC = 1 - CC.totalWeight;
          ZC = [], nC = [], ZC.push(QC), nC.push(zC)
        } else {
          if (2 === CC.animations.length && (bC.f.SlerpToRef(CC.animations[0].currentValue, CC.animations[1].currentValue, CC.animations[1].weight / CC.totalWeight, zC), 0 === CC.totalAdditiveWeight)) return zC;
          ZC = [], nC = [], fC = CC.totalWeight
        }
        for (let zC = 0; zC < CC.animations.length; zC++) {
          const QC = CC.animations[zC];
          ZC.push(QC.currentValue), nC.push(QC.weight / fC)
        }
        let oC = 0;
        for (let CC = 0; CC < ZC.length;) CC ? (oC += nC[CC], bC.f.SlerpToRef(wC, ZC[CC], nC[CC] / oC, wC), CC++) : (bC.f.SlerpToRef(ZC[CC], ZC[CC + 1], nC[CC + 1] / (nC[CC] + nC[CC + 1]), zC), wC = zC, oC = nC[CC] + nC[CC + 1], CC += 2)
      }
      for (let nC = 0; nC < CC.additiveAnimations.length; nC++) {
        const zC = CC.additiveAnimations[nC];
        0 !== zC.weight && (wC.multiplyToRef(zC.currentValue, bC.j.Quaternion[0]), bC.f.SlerpToRef(wC, bC.j.Quaternion[0], zC.weight, wC))
      }
      return wC
    }

    function mC(CC, zC) {
      zC && (zC.prototype.copyAnimationRange = function(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new vC.b(this.name, "_matrix", CC.animations[0].framePerSecond, vC.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const bC = CC.animations[0].getRange(zC);
        if (!bC) return !1;
        const nC = bC.from,
          fC = bC.to,
          oC = CC.animations[0].getKeys(),
          qC = CC.length,
          FC = CC.getParent(),
          WC = this.getParent(),
          NC = QC && FC && qC && this.length && qC !== this.length,
          MC = NC && WC && FC ? WC.length / FC.length : 1,
          gC = QC && !WC && wC && (1 !== wC.x || 1 !== wC.y || 1 !== wC.z),
          SC = this.animations[0].getKeys();
        let pC, PC, GC;
        for (let RC = 0, AC = oC.length; RC < AC; RC++) pC = oC[RC], pC.frame >= nC && pC.frame <= fC && (QC ? (GC = pC.value.clone(), NC ? (PC = GC.getTranslation(), GC.setTranslation(PC.scaleInPlace(MC))) : gC && wC ? (PC = GC.getTranslation(), GC.setTranslation(PC.multiplyInPlace(wC))) : GC = pC.value) : GC = pC.value, SC.push({
          frame: pC.frame + ZC,
          value: GC
        }));
        return this.animations[0].createRange(zC, nC + ZC, fC + ZC), !0
      }), CC && (CC.prototype._animate = function(CC) {
        const zC = this._animationWrites,
          ZC = this._animationWriteCount;
        let QC = 0;
        for (let bC = this._animationStepWriteCount; bC < ZC; bC++) {
          const CC = zC[bC];
          CC.Mp && -1 === CC.weight || (CC.Mp = !0, zC[bC] = zC[QC], zC[QC] = CC, QC++)
        }
        for (let bC = QC; bC < ZC; bC++) {
          const CC = zC[bC];
          CC.runtimeAnimation = null, CC.target = null
        }
        if (this._animationWriteCount = QC, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const wC = hC.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = wC
        }
        this.deltaTime = void 0 !== CC ? CC : this.useConstantAnimationDeltaTime ? 16 : (wC - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = wC;
        const nC = this._activeAnimatables;
        if (0 === nC.length) return;
        this._animationTime += this.deltaTime;
        const fC = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let bC = 0; bC < nC.length; bC++) {
          const CC = nC[bC];
          !CC._animate(fC) && CC.disposeOnEnd && bC--
        }! function(CC) {
          if (CC._registeredForLateAnimationBindings.length) {
            for (let zC = 0; zC < CC._registeredForLateAnimationBindings.length; zC++) {
              const ZC = CC._registeredForLateAnimationBindings.data[zC];
              for (const CC in ZC._lateAnimationHolders) {
                const zC = ZC._lateAnimationHolders[CC],
                  QC = zC.animations[0],
                  wC = zC.originalValue;
                if (void 0 === wC || null === wC) continue;
                const nC = vC.b.AllowMatrixDecomposeForInterpolation && wC.m;
                let fC = ZC[CC];
                if (nC) fC = YC(zC);
                else if (void 0 !== wC.w) fC = dC(zC, fC || bC.f.Identity());
                else {
                  let CC = 0,
                    ZC = 1;
                  const bC = QC && QC._animationState.zb === vC.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (zC.totalWeight < 1) fC = bC ? wC.clone ? wC.clone() : wC : QC && wC.scale ? wC.scale(1 - zC.totalWeight) : QC ? wC * (1 - zC.totalWeight) : wC.clone ? wC.clone() : wC;
                  else if (QC) {
                    ZC = zC.totalWeight;
                    const nC = QC.weight / ZC;
                    fC = 1 !== nC ? QC.currentValue.scale ? QC.currentValue.scale(nC) : QC.currentValue * nC : (zC.animations.length > 1 || zC.additiveAnimations.length > 0) && QC.currentValue.clone ? QC.currentValue.clone() : QC.currentValue, bC && (fC.addToRef ? fC.addToRef(wC, fC) : fC += wC), CC = 1
                  }
                  for (let QC = CC; QC < zC.animations.length; QC++) {
                    const CC = zC.animations[QC],
                      wC = CC.weight / ZC;
                    wC && (CC.currentValue.scaleAndAddToRef ? CC.currentValue.scaleAndAddToRef(wC, fC) : fC += CC.currentValue * wC)
                  }
                  for (let QC = 0; QC < zC.additiveAnimations.length; QC++) {
                    const CC = zC.additiveAnimations[QC],
                      ZC = CC.weight;
                    ZC && (CC.currentValue.scaleAndAddToRef ? CC.currentValue.scaleAndAddToRef(ZC, fC) : fC += CC.currentValue * ZC)
                  }
                }
                ZC[CC] = fC
              }
              ZC._lateAnimationHolders = {}
            }
            CC._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, CC.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((CC, zC) => CC.playOrder - zC.playOrder))
      }, CC.prototype.beginWeightedAnimation = function(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 ? arguments[7] : void 0,
          oC = arguments.length > 8 ? arguments[8] : void 0,
          qC = arguments.length > 9 ? arguments[9] : void 0,
          FC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const WC = this.beginAnimation(CC, zC, ZC, wC, bC, nC, fC, !1, oC, qC, FC);
        return WC.weight = QC, WC
      }, CC.prototype.beginAnimation = function(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          bC = arguments.length > 5 ? arguments[5] : void 0,
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oC = arguments.length > 8 ? arguments[8] : void 0,
          qC = arguments.length > 9 ? arguments[9] : void 0,
          FC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (wC < 0) {
          const CC = zC;
          zC = ZC, ZC = CC, wC = -wC
        }
        zC > ZC && (wC = -wC), fC && this.stopAnimation(CC, void 0, oC), nC || (nC = new KC(this, CC, zC, ZC, QC, wC, bC, void 0, qC, FC));
        const WC = !oC || oC(CC);
        if (CC.animations && WC && nC.appendAnimations(CC, CC.animations), CC.getAnimatables) {
          const FC = CC.getAnimatables();
          for (let CC = 0; CC < FC.length; CC++) this.beginAnimation(FC[CC], zC, ZC, QC, wC, bC, nC, fC, oC, qC)
        }
        return nC.reset(), nC
      }, CC.prototype.beginHierarchyAnimation = function(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 ? arguments[7] : void 0,
          oC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          qC = arguments.length > 9 ? arguments[9] : void 0,
          FC = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const WC = CC.getDescendants(zC),
          NC = [];
        NC.push(this.beginAnimation(CC, ZC, QC, wC, bC, nC, fC, oC, qC, void 0, FC));
        for (const MC of WC) NC.push(this.beginAnimation(MC, ZC, QC, wC, bC, nC, fC, oC, qC, void 0, FC));
        return NC
      }, CC.prototype.beginDirectAnimation = function(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (bC < 0) {
          const CC = ZC;
          ZC = QC, QC = CC, bC = -bC
        }
        ZC > QC && (bC = -bC);
        return new KC(this, CC, ZC, QC, wC, bC, arguments.length > 6 ? arguments[6] : void 0, zC, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, CC.prototype.beginDirectHierarchyAnimation = function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        let qC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const FC = CC.getDescendants(zC),
          WC = [];
        WC.push(this.beginDirectAnimation(CC, ZC, QC, wC, bC, nC, fC, oC, qC));
        for (const NC of FC) WC.push(this.beginDirectAnimation(NC, ZC, QC, wC, bC, nC, fC, oC, qC));
        return WC
      }, CC.prototype.getAnimatableByTarget = function(CC) {
        for (let zC = 0; zC < this._activeAnimatables.length; zC++)
          if (this._activeAnimatables[zC].target === CC) return this._activeAnimatables[zC];
        return null
      }, CC.prototype.getAllAnimatablesByTarget = function(CC) {
        const zC = [];
        for (let ZC = 0; ZC < this._activeAnimatables.length; ZC++) this._activeAnimatables[ZC].target === CC && zC.push(this._activeAnimatables[ZC]);
        return zC
      }, CC.prototype.stopAnimation = function(CC, zC, ZC) {
        const QC = this.getAllAnimatablesByTarget(CC);
        for (const wC of QC) wC.stop(zC, ZC)
      }, CC.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let CC = 0; CC < this._activeAnimatables.length; CC++) this._activeAnimatables[CC].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const CC of this.animationGroups) CC.stop()
      })
    }
    KC.ProcessPausedAnimatables = !1;
    var HC, EC = ZC(36971),
      lC = ZC(40046),
      XC = ZC(39694);
    class cC extends lC.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(CC) {
        (CC.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Av(CC), this._markAsDirtyAndDecompose())
      }
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(CC, zC.Km(), !1), this.name = CC, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = zC, this._localMatrix = QC?.clone() ?? bC.b.Identity(), this._restMatrix = wC ?? this._localMatrix.clone(), this._bindMatrix = nC ?? this._localMatrix.clone(), this._index = fC, this._absoluteMatrix = new bC.b, this._absoluteBindMatrix = new bC.b, this._absoluteInverseBindMatrix = new bC.b, this._finalMatrix = new bC.b, zC.bones.push(this), this.setParent(ZC, !1), this._updateAbsoluteBindMatrices()
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
      set parent(CC) {
        this.setParent(CC)
      }
      setParent(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== CC) {
          if (this.parent) {
            const CC = this.parent.children.indexOf(this); - 1 !== CC && this.parent.children.splice(CC, 1)
          }
          this._parentNode = CC, this.parent && this.parent.children.push(this), zC && this._updateAbsoluteBindMatrices(), this.YzC()
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
      setRestMatrix(CC) {
        this._restMatrix.Av(CC)
      }
      setRestPose(CC) {
        this.setRestMatrix(CC)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(CC) {
        this.x_(CC)
      }
      setBindPose(CC) {
        this.setBindMatrix(CC)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const CC = bC.j.Eg[0],
            zC = bC.j.Quaternion[0],
            ZC = bC.j.Eg[1];
          this.getRestMatrix().decompose(CC, zC, ZC), this._linkedTransformNode.position.Av(ZC), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? bC.f.Identity(), this._linkedTransformNode.rotationQuaternion.Av(zC), this._linkedTransformNode.sq.Av(CC)
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
      linkTransformNode(CC) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = CC, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.DCC
      }
      set position(CC) {
        this._decompose(), this.DCC.Av(CC), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(CC) {
        this.setRotation(CC)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(CC) {
        this.setRotationQuaternion(CC)
      }
      get sq() {
        return this.getScale()
      }
      set sq(CC) {
        this.setScale(CC)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = bC.r.Zero(), this._localRotation = bC.f.Zero(), this.DCC = bC.r.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.DCC))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, bC.b.ComposeToRef(this._localScaling, this._localRotation, this.DCC, this._localMatrix)) : this._needToCompose = !1)
      }
      x_(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Av(CC), zC && this._updateAbsoluteBindMatrices(), ZC ? this._matrix = CC : this.YzC()
      }
      _updateAbsoluteBindMatrices(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (CC || (CC = this._bindMatrix), this.parent ? CC.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Av(CC), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), zC)
          for (let ZC = 0; ZC < this.children.length; ZC++) this.children[ZC]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      YzC() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.YzC(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.YzC(), this._needToDecompose = !0
      }
      _updatePosition(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const wC = this.getLocalMatrix();
        if (0 == zC) QC ? (wC.addAtIndex(12, CC.x), wC.addAtIndex(13, CC.y), wC.addAtIndex(14, CC.z)) : wC.setTranslationFromFloats(CC.x, CC.y, CC.z);
        else {
          const zC = cC._TmpMats[0],
            nC = cC._TmpVecs[0];
          this.parent ? (zC.Av(this.parent.getAbsoluteMatrix()), ZC && zC.multiplyToRef(ZC.getWorldMatrix(), zC)) : bC.b.IdentityToRef(zC), QC && zC.setTranslationFromFloats(0, 0, 0), zC.invert(), bC.r.TransformCoordinatesToRef(CC, zC, nC), QC ? (wC.addAtIndex(12, nC.x), wC.addAtIndex(13, nC.y), wC.addAtIndex(14, nC.z)) : wC.setTranslationFromFloats(nC.x, nC.y, nC.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(CC, zC, ZC, !0)
      }
      setPosition(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(CC, zC, ZC, !1)
      }
      setAbsolutePosition(CC, zC) {
        this.setPosition(CC, 1, zC)
      }
      scale(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const wC = this.getLocalMatrix(),
          nC = cC._TmpMats[0];
        bC.b.ScalingToRef(CC, zC, ZC, nC), nC.multiplyToRef(wC, wC), nC.invert();
        for (const bC of this.children) {
          const QC = bC.getLocalMatrix();
          QC.multiplyToRef(nC, QC), QC.multiplyAtIndex(12, CC), QC.multiplyAtIndex(13, zC), QC.multiplyAtIndex(14, ZC), bC._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), QC)
          for (const bC of this.children) bC.scale(CC, zC, ZC, QC)
      }
      setScale(CC) {
        this._decompose(), this._localScaling.Av(CC), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(CC) {
        this._decompose(), CC.Av(this._localScaling)
      }
      setYawPitchRoll(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === QC) {
          const nC = cC._TmpQuat;
          return bC.f.RotationYawPitchRollToRef(CC, zC, ZC, nC), void this.setRotationQuaternion(nC, QC, wC)
        }
        const nC = cC._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(nC, wC)) return;
        const fC = cC._TmpMats[1];
        bC.b.RotationYawPitchRollToRef(CC, zC, ZC, fC), nC.multiplyToRef(fC, fC), this._rotateWithMatrix(fC, QC, wC)
      }
      rotate(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        const wC = cC._TmpMats[0];
        wC.setTranslationFromFloats(0, 0, 0), bC.b.RotationAxisToRef(CC, zC, wC), this._rotateWithMatrix(wC, ZC, QC)
      }
      setAxisAngle(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === ZC) {
          const wC = cC._TmpQuat;
          return bC.f.RotationAxisToRef(CC, zC, wC), void this.setRotationQuaternion(wC, ZC, QC)
        }
        const wC = cC._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wC, QC)) return;
        const nC = cC._TmpMats[1];
        bC.b.RotationAxisToRef(CC, zC, nC), wC.multiplyToRef(nC, nC), this._rotateWithMatrix(nC, ZC, QC)
      }
      setRotation(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(CC.y, CC.x, CC.z, zC, ZC)
      }
      setRotationQuaternion(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === zC) return this._decompose(), this._localRotation.Av(CC), void this._markAsDirtyAndCompose();
        const QC = cC._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(QC, ZC)) return;
        const wC = cC._TmpMats[1];
        bC.b.FromQuaternionToRef(CC, wC), QC.multiplyToRef(wC, wC), this._rotateWithMatrix(wC, zC, ZC)
      }
      setRotationMatrix(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === zC) {
          const QC = cC._TmpQuat;
          return bC.f.FromRotationMatrixToRef(CC, QC), void this.setRotationQuaternion(QC, zC, ZC)
        }
        const QC = cC._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(QC, ZC)) return;
        const wC = cC._TmpMats[1];
        wC.Av(CC), QC.multiplyToRef(CC, wC), this._rotateWithMatrix(wC, zC, ZC)
      }
      _rotateWithMatrix(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = this.getLocalMatrix(),
          wC = QC.m[12],
          bC = QC.m[13],
          nC = QC.m[14],
          fC = this.getParent(),
          oC = cC._TmpMats[3],
          qC = cC._TmpMats[4];
        fC && 1 == zC ? (ZC ? (oC.Av(ZC.getWorldMatrix()), fC.getAbsoluteMatrix().multiplyToRef(oC, oC)) : oC.Av(fC.getAbsoluteMatrix()), qC.Av(oC), qC.invert(), QC.multiplyToRef(oC, QC), QC.multiplyToRef(CC, QC), QC.multiplyToRef(qC, QC)) : 1 == zC && ZC ? (oC.Av(ZC.getWorldMatrix()), qC.Av(oC), qC.invert(), QC.multiplyToRef(oC, QC), QC.multiplyToRef(CC, QC), QC.multiplyToRef(qC, QC)) : QC.multiplyToRef(CC, QC), QC.setTranslationFromFloats(wC, bC, nC), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(CC, zC) {
        const ZC = cC._TmpMats[2];
        return CC.Av(this.getAbsoluteMatrix()), zC ? (CC.multiplyToRef(zC.getWorldMatrix(), CC), bC.b.ScalingToRef(zC.sq.x, zC.sq.y, zC.sq.z, ZC)) : bC.b.IdentityToRef(ZC), CC.invert(), !isNaN(CC.m[0]) && (ZC.multiplyAtIndex(0, this._scalingDeterminant), CC.multiplyToRef(ZC, CC), !0)
      }
      yG() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = bC.r.Zero();
        return this.getPositionToRef(CC, zC, ZC), ZC
      }
      getPositionToRef() {
        let CC = arguments.length > 1 ? arguments[1] : void 0,
          zC = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const CC = this.getLocalMatrix();
          zC.x = CC.m[12], zC.y = CC.m[13], zC.z = CC.m[14]
        } else {
          const ZC = cC._TmpMats[0].Av(this.getAbsoluteMatrix());
          CC && ZC.multiplyToRef(CC.getWorldMatrix(), ZC), zC.x = ZC.m[12], zC.y = ZC.m[13], zC.z = ZC.m[14]
        }
      }
      getAbsolutePosition() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const zC = bC.r.Zero();
        return this.getPositionToRef(1, CC, zC), zC
      }
      getAbsolutePositionToRef(CC, zC) {
        this.getPositionToRef(1, CC, zC)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Av(this._localMatrix);
          const CC = this._skeleton.getPoseMatrix();
          CC && this._absoluteMatrix.multiplyToRef(CC, this._absoluteMatrix)
        }
        const CC = this.children,
          zC = CC.length;
        for (let ZC = 0; ZC < zC; ZC++) CC[ZC].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      yB(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = bC.r.Zero();
        return this.getDirectionToRef(CC, zC, ZC), ZC
      }
      getDirectionToRef(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = cC._TmpMats[0].Av(this.getAbsoluteMatrix());
        zC && QC.multiplyToRef(zC.getWorldMatrix(), QC), bC.r.TransformNormalToRef(CC, QC, ZC), ZC.normalize()
      }
      getRotation() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = bC.r.Zero();
        return this.getRotationToRef(CC, zC, ZC), ZC
      }
      getRotationToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = cC._TmpQuat;
        this.getRotationQuaternionToRef(CC, zC, QC), QC.toEulerAnglesToRef(ZC)
      }
      getRotationQuaternion() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = bC.f.Identity();
        return this.getRotationQuaternionToRef(CC, zC, ZC), ZC
      }
      getRotationQuaternionToRef() {
        let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zC = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), zC.Av(this._localRotation);
        else {
          const ZC = cC._TmpMats[0],
            QC = this.getAbsoluteMatrix();
          CC ? QC.multiplyToRef(CC.getWorldMatrix(), ZC) : ZC.Av(QC), ZC.multiplyAtIndex(0, this._scalingDeterminant), ZC.multiplyAtIndex(1, this._scalingDeterminant), ZC.multiplyAtIndex(2, this._scalingDeterminant), ZC.decompose(void 0, zC, void 0)
        }
      }
      getRotationMatrix() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 ? arguments[1] : void 0;
        const ZC = bC.b.Identity();
        return this.getRotationMatrixToRef(CC, zC, ZC), ZC
      }
      getRotationMatrixToRef() {
        let CC = arguments.length > 1 ? arguments[1] : void 0,
          zC = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(zC);
        else {
          const ZC = cC._TmpMats[0],
            QC = this.getAbsoluteMatrix();
          CC ? QC.multiplyToRef(CC.getWorldMatrix(), ZC) : ZC.Av(QC), ZC.multiplyAtIndex(0, this._scalingDeterminant), ZC.multiplyAtIndex(1, this._scalingDeterminant), ZC.multiplyAtIndex(2, this._scalingDeterminant), ZC.getRotationMatrixToRef(zC)
        }
      }
      getAbsolutePositionFromLocal(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = bC.r.Zero();
        return this.getAbsolutePositionFromLocalToRef(CC, zC, ZC), ZC
      }
      getAbsolutePositionFromLocalToRef(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = cC._TmpMats[0].Av(this.getAbsoluteMatrix());
        zC && QC.multiplyToRef(zC.getWorldMatrix(), QC), bC.r.TransformCoordinatesToRef(CC, QC, ZC)
      }
      getLocalPositionFromAbsolute(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = bC.r.Zero();
        return this.getLocalPositionFromAbsoluteToRef(CC, zC, ZC), ZC
      }
      getLocalPositionFromAbsoluteToRef(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = cC._TmpMats[0].Av(this.getAbsoluteMatrix());
        zC && QC.multiplyToRef(zC.getWorldMatrix(), QC), QC.invert(), bC.r.TransformCoordinatesToRef(CC, QC, ZC)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const CC = this._skeleton.bones.indexOf(this);
        if (-1 !== CC && this._skeleton.bones.splice(CC, 1), this._parentNode && this._parentNode.children) {
          const CC = this._parentNode.children,
            zC = CC.indexOf(this); - 1 !== zC && CC.splice(zC, 1)
        }
        super.dispose()
      }
    }
    cC._TmpVecs = (0, EC.d)(2, bC.r.Zero), cC._TmpQuat = bC.f.Identity(), cC._TmpMats = (0, EC.d)(5, bC.b.Identity), (HC = cC.prototype).copyAnimationRange ?? (HC.copyAnimationRange = (0, XC.f)("Bone", "copyAnimationRange"));
    var uC = ZC(39910);
    let rC = !1;
    var sC = ZC(39778),
      TC = ZC(40148),
      aC = ZC(40157),
      tC = ZC(40151),
      DC = ZC(39944);

    function jC(CC, zC) {
      const ZC = (0, MC.RandomRange)(0, 1);
      FC.g.LerpToRef(zC.color1, zC.color2, ZC, CC.color)
    }

    function yC(CC, zC) {
      zC.colorDead.subtractToRef(CC.color, zC._colorDiff), zC._colorDiff.scaleToRef(1 / CC.lifeTime, CC.colorStep)
    }

    function LC(CC, zC) {
      CC._properties.currentColorGradient = zC._colorGradients[0], CC._properties.currentColorGradient.getColorToRef(CC.color), CC._properties.currentColor1.Av(CC.color), zC._colorGradients.length > 1 ? zC._colorGradients[1].getColorToRef(CC._properties.currentColor2) : CC._properties.currentColor2.Av(CC.color)
    }

    function UC(CC, zC) {
      const ZC = zC._colorGradients;
      QC.k.GetCurrentGradient(zC._ratio, ZC, ((zC, ZC, QC) => {
        zC !== CC._properties.currentColorGradient && (CC._properties.currentColor1.Av(CC._properties.currentColor2), ZC.getColorToRef(CC._properties.currentColor2), CC._properties.currentColorGradient = zC), FC.g.LerpToRef(CC._properties.currentColor1, CC._properties.currentColor2, QC, CC.color), CC.color.a < 0 && (CC.color.a = 0)
      }))
    }

    function BC(CC, zC) {
      CC.colorStep.scaleToRef(zC._scaledUpdateSpeed, zC._scaledColorStep), CC.color.addInPlace(zC._scaledColorStep), CC.color.a < 0 && (CC.color.a = 0)
    }

    function OC(CC, zC) {
      QC.k.GetCurrentGradient(zC._ratio, zC._angularSpeedGradients, ((zC, ZC, QC) => {
        zC !== CC._properties.currentAngularSpeedGradient && (CC._properties.currentAngularSpeed1 = CC._properties.currentAngularSpeed2, CC._properties.currentAngularSpeed2 = ZC.getFactor(), CC._properties.currentAngularSpeedGradient = zC), CC.angularSpeed = (0, MC.Lerp)(CC._properties.currentAngularSpeed1, CC._properties.currentAngularSpeed2, QC)
      }))
    }

    function kC(CC, zC) {
      CC.angle += CC.angularSpeed * zC._scaledUpdateSpeed
    }

    function VC(CC, zC) {
      zC.particleEmitterType.startDirectionFunction(zC._emitterWorldMatrix, CC.direction, CC, zC.isLocal, zC._emitterInverseWorldMatrix)
    }

    function Cz(CC, zC) {
      zC.startDirectionFunction(zC._emitterWorldMatrix, CC.direction, CC, zC.isLocal)
    }

    function zz(CC, zC) {
      CC._properties.currentVelocityGradient = zC._velocityGradients[0], CC._properties.currentVelocity1 = CC._properties.currentVelocityGradient.getFactor(), zC._velocityGradients.length > 1 ? CC._properties.currentVelocity2 = zC._velocityGradients[1].getFactor() : CC._properties.currentVelocity2 = CC._properties.currentVelocity1
    }

    function Zz(CC, zC) {
      CC._properties.currentLimitVelocityGradient = zC._limitVelocityGradients[0], CC._properties.currentLimitVelocity1 = CC._properties.currentLimitVelocityGradient.getFactor(), zC._limitVelocityGradients.length > 1 ? CC._properties.currentLimitVelocity2 = zC._limitVelocityGradients[1].getFactor() : CC._properties.currentLimitVelocity2 = CC._properties.currentLimitVelocity1
    }

    function Qz(CC, zC) {
      QC.k.GetCurrentGradient(zC._ratio, zC._velocityGradients, ((zC, ZC, QC) => {
        zC !== CC._properties.currentVelocityGradient && (CC._properties.currentVelocity1 = CC._properties.currentVelocity2, CC._properties.currentVelocity2 = ZC.getFactor(), CC._properties.currentVelocityGradient = zC), CC._properties.directionScale *= (0, MC.Lerp)(CC._properties.currentVelocity1, CC._properties.currentVelocity2, QC)
      }))
    }

    function wz(CC, zC) {
      QC.k.GetCurrentGradient(zC._ratio, zC._limitVelocityGradients, ((ZC, QC, wC) => {
        ZC !== CC._properties.currentLimitVelocityGradient && (CC._properties.currentLimitVelocity1 = CC._properties.currentLimitVelocity2, CC._properties.currentLimitVelocity2 = QC.getFactor(), CC._properties.currentLimitVelocityGradient = ZC);
        const bC = (0, MC.Lerp)(CC._properties.currentLimitVelocity1, CC._properties.currentLimitVelocity2, wC);
        CC.direction.length() > bC && CC.direction.scaleInPlace(zC.limitVelocityDamping)
      }))
    }

    function bz(CC) {
      CC.direction.scaleToRef(CC._properties.directionScale, CC._properties.scaledDirection)
    }

    function nz(CC, zC) {
      zC.particleEmitterType.startPositionFunction(zC._emitterWorldMatrix, CC.position, CC, zC.isLocal)
    }

    function fz(CC, zC) {
      zC.startPositionFunction(zC._emitterWorldMatrix, CC.position, CC, zC.isLocal)
    }

    function oz(CC, zC) {
      CC._properties.localPosition ? CC._properties.localPosition.Av(CC.position) : CC._properties.localPosition = CC.position.clone(), bC.r.TransformCoordinatesToRef(CC._properties.localPosition, zC._emitterWorldMatrix, CC.position)
    }

    function qz(CC, zC) {
      zC.isLocal && CC._properties.localPosition ? (CC._properties.localPosition.addInPlace(CC._properties.scaledDirection), bC.r.TransformCoordinatesToRef(CC._properties.localPosition, zC._emitterWorldMatrix, CC.position)) : CC.position.addInPlace(CC._properties.scaledDirection)
    }

    function Fz(CC, zC) {
      CC._properties.currentDragGradient = zC._dragGradients[0], CC._properties.currentDrag1 = CC._properties.currentDragGradient.getFactor(), zC._dragGradients.length > 1 ? CC._properties.currentDrag2 = zC._dragGradients[1].getFactor() : CC._properties.currentDrag2 = CC._properties.currentDrag1
    }

    function Wz(CC, zC) {
      QC.k.GetCurrentGradient(zC._ratio, zC._dragGradients, ((zC, ZC, QC) => {
        zC !== CC._properties.currentDragGradient && (CC._properties.currentDrag1 = CC._properties.currentDrag2, CC._properties.currentDrag2 = ZC.getFactor(), CC._properties.currentDragGradient = zC);
        const wC = (0, MC.Lerp)(CC._properties.currentDrag1, CC._properties.currentDrag2, QC);
        CC._properties.scaledDirection.scaleInPlace(1 - wC)
      }))
    }

    function Nz(CC, zC) {
      CC._properties.randomNoiseCoordinates1 && CC._properties.randomNoiseCoordinates2 ? (CC._properties.randomNoiseCoordinates1.L_(Math.random(), Math.random(), Math.random()), CC._properties.randomNoiseCoordinates2.L_(Math.random(), Math.random(), Math.random())) : (CC._properties.randomNoiseCoordinates1 = new bC.r(Math.random(), Math.random(), Math.random()), CC._properties.randomNoiseCoordinates2 = new bC.r(Math.random(), Math.random(), Math.random()))
    }

    function Mz(CC, zC) {
      const ZC = zC._noiseTextureData,
        QC = zC._noiseTextureSize;
      if (ZC && QC && CC._properties.randomNoiseCoordinates1 && CC._properties.randomNoiseCoordinates2) {
        const wC = zC._fetchR(CC._properties.randomNoiseCoordinates1.x, CC._properties.randomNoiseCoordinates1.y, QC.width, QC.height, ZC),
          nC = zC._fetchR(CC._properties.randomNoiseCoordinates1.z, CC._properties.randomNoiseCoordinates2.x, QC.width, QC.height, ZC),
          fC = zC._fetchR(CC._properties.randomNoiseCoordinates2.y, CC._properties.randomNoiseCoordinates2.z, QC.width, QC.height, ZC),
          oC = bC.j.Eg[0],
          qC = bC.j.Eg[1];
        oC.L_((2 * wC - 1) * zC.noiseStrength.x, (2 * nC - 1) * zC.noiseStrength.y, (2 * fC - 1) * zC.noiseStrength.z), oC.scaleToRef(zC._tempScaledUpdateSpeed, qC), CC.direction.addInPlace(qC)
      }
    }

    function gz(CC, zC) {
      zC.gravity.scaleToRef(zC._tempScaledUpdateSpeed, zC._scaledGravity), CC.direction.addInPlace(zC._scaledGravity)
    }

    function Sz(CC, zC) {
      CC.size = (0, MC.RandomRange)(zC.minSize, zC.maxSize), CC.scale.L_((0, MC.RandomRange)(zC.minScaleX, zC.maxScaleX), (0, MC.RandomRange)(zC.minScaleY, zC.maxScaleY))
    }

    function pz(CC, zC) {
      CC._properties.currentSizeGradient = zC._sizeGradients[0], CC._properties.currentSize1 = CC._properties.currentSizeGradient.getFactor(), CC.size = CC._properties.currentSize1, zC._sizeGradients.length > 1 ? CC._properties.currentSize2 = zC._sizeGradients[1].getFactor() : CC._properties.currentSize2 = CC._properties.currentSize1, CC.scale.L_((0, MC.RandomRange)(zC.minScaleX, zC.maxScaleX), (0, MC.RandomRange)(zC.minScaleY, zC.maxScaleY))
    }

    function Pz(CC, zC) {
      const ZC = zC._actualFrame / zC.targetStopDuration;
      QC.k.GetCurrentGradient(ZC, zC._startSizeGradients, ((ZC, QC, wC) => {
        ZC !== zC._currentStartSizeGradient && (zC._currentStartSize1 = zC._currentStartSize2, zC._currentStartSize2 = QC.getFactor(), zC._currentStartSizeGradient = ZC);
        const bC = (0, MC.Lerp)(zC._currentStartSize1, zC._currentStartSize2, wC);
        CC.scale.scaleInPlace(bC)
      }))
    }

    function Gz(CC, zC) {
      QC.k.GetCurrentGradient(zC._ratio, zC._sizeGradients, ((zC, ZC, QC) => {
        zC !== CC._properties.currentSizeGradient && (CC._properties.currentSize1 = CC._properties.currentSize2, CC._properties.currentSize2 = ZC.getFactor(), CC._properties.currentSizeGradient = zC), CC.size = (0, MC.Lerp)(CC._properties.currentSize1, CC._properties.currentSize2, QC)
      }))
    }

    function Rz(CC, zC) {
      CC.remapData = new bC.u(0, 1, 0, 1)
    }

    function Az(CC, zC) {
      zC._colorRemapGradients && zC._colorRemapGradients.length > 0 && QC.k.GetCurrentGradient(zC._ratio, zC._colorRemapGradients, ((zC, ZC, QC) => {
        const wC = (0, MC.Lerp)(zC.factor1, ZC.factor1, QC),
          bC = (0, MC.Lerp)(zC.factor2, ZC.factor2, QC);
        CC.remapData.x = wC, CC.remapData.y = bC - wC
      })), zC._alphaRemapGradients && zC._alphaRemapGradients.length > 0 && QC.k.GetCurrentGradient(zC._ratio, zC._alphaRemapGradients, ((zC, ZC, QC) => {
        const wC = (0, MC.Lerp)(zC.factor1, ZC.factor1, QC),
          bC = (0, MC.Lerp)(zC.factor2, ZC.factor2, QC);
        CC.remapData.z = wC, CC.remapData.w = bC - wC
      }))
    }

    function xz(CC, zC) {
      const ZC = (0, MC.Clamp)(zC._actualFrame / zC.targetStopDuration);
      QC.k.GetCurrentGradient(ZC, zC._lifeTimeGradients, ((zC, QC) => {
        const wC = zC,
          bC = QC,
          nC = wC.getFactor(),
          fC = bC.getFactor(),
          oC = (ZC - wC.gradient) / (bC.gradient - wC.gradient);
        CC.lifeTime = (0, MC.Lerp)(nC, fC, oC)
      })), zC._emitPower = (0, MC.RandomRange)(zC.minEmitPower, zC.maxEmitPower)
    }

    function Jz(CC, zC) {
      CC.lifeTime = (0, MC.RandomRange)(zC.minLifeTime, zC.maxLifeTime), zC._emitPower = (0, MC.RandomRange)(zC.minEmitPower, zC.maxEmitPower)
    }

    function Iz(CC, zC) {
      0 === zC._emitPower ? (CC._properties.initialDirection ? CC._properties.initialDirection.Av(CC.direction) : CC._properties.initialDirection = CC.direction.clone(), CC.direction.set(0, 0, 0)) : (CC._properties.initialDirection = null, CC.direction.scaleInPlace(zC._emitPower)), CC.direction.addInPlace(zC._inheritedVelocityOffset)
    }

    function iz(CC, zC) {
      CC.angularSpeed = (0, MC.RandomRange)(zC.minAngularSpeed, zC.maxAngularSpeed), CC.angle = (0, MC.RandomRange)(zC.minInitialRotation, zC.maxInitialRotation)
    }

    function vz(CC, zC) {
      CC._properties.currentAngularSpeedGradient = zC._angularSpeedGradients[0], CC.angularSpeed = CC._properties.currentAngularSpeedGradient.getFactor(), CC._properties.currentAngularSpeed1 = CC.angularSpeed, zC._angularSpeedGradients.length > 1 ? CC._properties.currentAngularSpeed2 = zC._angularSpeedGradients[1].getFactor() : CC._properties.currentAngularSpeed2 = CC._properties.currentAngularSpeed1, CC.angle = (0, MC.RandomRange)(zC.minInitialRotation, zC.maxInitialRotation)
    }

    function ez(CC, zC) {
      CC._properties.initialStartSpriteCellId = zC.startSpriteCellID, CC._properties.initialEndSpriteCellId = zC.endSpriteCellID, CC._properties.initialSpriteCellLoop = zC.spriteCellLoop
    }

    function hz(CC, zC) {
      CC.previousItem = zC.previousItem, CC.nextItem = zC, zC.previousItem && (zC.previousItem.nextItem = CC), zC.previousItem = CC
    }

    function Kz(CC, zC) {
      CC.previousItem = zC, CC.nextItem = zC.nextItem, zC.nextItem && (zC.nextItem.previousItem = CC), zC.nextItem = CC
    }

    function Yz(CC) {
      CC.previousItem && (CC.previousItem.nextItem = CC.nextItem), CC.nextItem && (CC.nextItem.previousItem = CC.previousItem)
    }
    var dz = ZC(40200);
    class mz extends JC {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(CC) {
        this._startDirectionFunction !== CC && (this._startDirectionFunction = CC, this._directionCreation.process = CC ? Cz : VC)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(CC) {
        this._startPositionFunction !== CC && (this._startPositionFunction = CC, this._positionCreation.process = CC ? fz : nz)
      }
      set onDispose(CC) {
        this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
      }
      get GJ() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(CC) {
        this._useRampGradients !== CC && (this._useRampGradients = CC, this._resetEffect(), CC ? (this._rampCreation = {
          process: Rz,
          previousItem: null,
          nextItem: null
        }, Kz(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Az,
          previousItem: null,
          nextItem: null
        }, Kz(this._remapGradientProcessing, this._gravityProcessing))) : (Yz(this._rampCreation), Yz(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(CC) {
        this._isLocal !== CC && (this._isLocal = CC, CC ? (this._isLocalCreation = {
          process: oz,
          previousItem: null,
          nextItem: null
        }, Kz(this._isLocalCreation, this._positionCreation)) : Yz(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(CC) {
        this._animationSheetEnabled !== CC && (this._animationSheetEnabled = CC, CC ? (this._sheetCreation = {
          process: ez,
          previousItem: null,
          nextItem: null
        }, Kz(this._sheetCreation, this._colorDeadCreation)) : Yz(this._sheetCreation), this._reset())
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[CC]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[CC] ?? this._customWrappers[0]
      }
      setCustomEffect(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[zC] = new TC.d(this._engine), this._customWrappers[zC].effect = CC, this._customWrappers[zC].drawContext && (this._customWrappers[zC].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new wC.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(CC) {
        if (this.noiseTexture !== CC) {
          if (this._noiseTexture = CC, !CC) return Yz(this._noiseCreation), void Yz(this._noiseProcessing);
          this._noiseCreation = {
            process: Nz,
            previousItem: null,
            nextItem: null
          }, Kz(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Mz,
            previousItem: null,
            nextItem: null
          }, Kz(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          qC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        rC || (rC = !0, mC(uC.g, cC)), (0, sC.b)(), super(CC), this._emitterInverseWorldMatrix = bC.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new bC.r, this.Tm = new wC.d, this.onStoppedObservable = new wC.d, this.onStartedObservable = new wC.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new FC.g(0, 0, 0, 0), this._colorDiff = new FC.g(0, 0, 0, 0), this._scaledGravity = bC.r.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = CC => {}, this.recycleParticle = CC => {
          const zC = this._particles.pop();
          zC !== CC && zC.copyTo(CC), zC.metadata = null, this._stockParticles.push(zC)
        }, this._createParticle = () => {
          let CC;
          return 0 !== this._stockParticles.length ? (CC = this._stockParticles.pop(), CC._reset()) : CC = new iC(this), this._prepareParticle(CC), CC
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = zC, this._epsilon = fC, ZC && "Scene" !== ZC.getClassName() ? (this._engine = ZC, this.defaultProjectionMatrix = bC.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = ZC || oC.c.LastCreatedScene, this._engine = this._scene.mg(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.Ix.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Jz,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: nz,
          previousItem: null,
          nextItem: null
        }, Kz(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: VC,
          previousItem: null,
          nextItem: null
        }, Kz(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Iz,
          previousItem: null,
          nextItem: null
        }, Kz(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Sz,
          previousItem: null,
          nextItem: null
        }, Kz(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: iz,
          previousItem: null,
          nextItem: null
        }, Kz(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: jC,
          previousItem: null,
          nextItem: null
        }, Kz(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: yC,
          previousItem: null,
          nextItem: null
        }, Kz(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, qC || (this._colorProcessing = {
          process: BC,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: kC,
          previousItem: null,
          nextItem: null
        }, Kz(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: bz,
          previousItem: null,
          nextItem: null
        }, Kz(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: qz,
          previousItem: null,
          nextItem: null
        }, Kz(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: gz,
          previousItem: null,
          nextItem: null
        }, Kz(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = nC, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new TC.d(this._engine)
        }, this._customWrappers[0].effect = QC, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new WC.c, this.updateFunction = CC => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((CC => {
            this._noiseTextureData = CC
          })));
          const zC = CC === this._particles;
          for (let ZC = 0; ZC < CC.length; ZC++) {
            const QC = CC[ZC];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const wC = QC.age;
            if (QC.age += this._tempScaledUpdateSpeed, QC.age > QC.lifeTime) {
              const CC = QC.age - wC,
                zC = QC.lifeTime - wC;
              this._tempScaledUpdateSpeed = zC * this._tempScaledUpdateSpeed / CC, QC.age = QC.lifeTime
            }
            this._ratio = QC.age / QC.lifeTime, QC._properties.directionScale = this._tempScaledUpdateSpeed;
            let bC = this._updateQueueStart;
            for (; bC;) bC.process(QC, this), bC = bC.nextItem;
            if (this._isAnimationSheetEnabled && !qC && QC.updateCellIndex(), QC._inheritParticleInfoToSubEmitters(), QC.age >= QC.lifeTime) {
              if (this._emitFromParticle(QC), QC._properties.attachedSubEmitters) {
                for (const CC of QC._properties.attachedSubEmitters) CC.particleSystem.disposeOnStop = !0, CC.particleSystem.stop();
                QC._properties.attachedSubEmitters = null
              }
              this.recycleParticle(QC), zC && ZC--
            } else;
          }
        }
      }
      serialize(CC) {
        throw new Error("Method not implemented.")
      }
      clone(CC, zC) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = xz : this._lifeTimeCreation.process = Jz
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Pz,
          previousItem: null,
          nextItem: null
        }, Kz(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Yz(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(CC) {
        this.targetStopDuration !== CC && (this._targetStopDuration = CC, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(CC, zC, ZC) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, CC, zC, ZC), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(CC) {
        return this._removeFactorGradient(this._lifeTimeGradients, CC), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(CC, zC, ZC) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = pz, this._sizeGradientProcessing = {
          process: Gz,
          previousItem: null,
          nextItem: null
        }, hz(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, CC, zC, ZC), this
      }
      removeSizeGradient(CC) {
        return this._removeFactorGradient(this._sizeGradients, CC), 0 === this._sizeGradients?.length && (Yz(this._sizeGradientProcessing), this._sizeCreation.process = Sz), this
      }
      addColorRemapGradient(CC, zC, ZC) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, CC, zC, ZC), this
      }
      removeColorRemapGradient(CC) {
        return this._removeFactorGradient(this._colorRemapGradients, CC), this
      }
      addAlphaRemapGradient(CC, zC, ZC) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, CC, zC, ZC), this
      }
      removeAlphaRemapGradient(CC) {
        return this._removeFactorGradient(this._alphaRemapGradients, CC), this
      }
      addAngularSpeedGradient(CC, zC, ZC) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = vz, this._angularSpeedGradientProcessing = {
          process: OC,
          previousItem: null,
          nextItem: null
        }, hz(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, CC, zC, ZC), this
      }
      removeAngularSpeedGradient(CC) {
        return this._removeFactorGradient(this._angularSpeedGradients, CC), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = iz, Yz(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(CC, zC, ZC) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: zz,
          previousItem: null,
          nextItem: null
        }, Kz(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Qz,
          previousItem: null,
          nextItem: null
        }, hz(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, CC, zC, ZC), this
      }
      removeVelocityGradient(CC) {
        return this._removeFactorGradient(this._velocityGradients, CC), 0 === this._velocityGradients?.length && (Yz(this._velocityCreation), Yz(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(CC, zC, ZC) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Zz,
          previousItem: null,
          nextItem: null
        }, Kz(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: wz,
          previousItem: null,
          nextItem: null
        }, Kz(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, CC, zC, ZC), this
      }
      removeLimitVelocityGradient(CC) {
        return this._removeFactorGradient(this._limitVelocityGradients, CC), 0 === this._limitVelocityGradients?.length && (Yz(this._limitVelocityCreation), Yz(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(CC, zC, ZC) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Fz,
          previousItem: null,
          nextItem: null
        }, hz(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Wz,
          previousItem: null,
          nextItem: null
        }, hz(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, CC, zC, ZC), this
      }
      removeDragGradient(CC) {
        return this._removeFactorGradient(this._dragGradients, CC), 0 === this._dragGradients?.length && (Yz(this._dragCreation), Yz(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(CC, zC, ZC) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, CC, zC, ZC), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(CC) {
        return this._removeFactorGradient(this._startSizeGradients, CC), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const CC = new Uint8Array(4 * this._rawTextureWidth),
          zC = FC.j.Color3[0];
        for (let ZC = 0; ZC < this._rawTextureWidth; ZC++) {
          const wC = ZC / this._rawTextureWidth;
          QC.k.GetCurrentGradient(wC, this._rampGradients, ((QC, wC, bC) => {
            FC.e.LerpToRef(QC.color, wC.color, bC, zC), CC[4 * ZC] = 255 * zC.r, CC[4 * ZC + 1] = 255 * zC.g, CC[4 * ZC + 2] = 255 * zC.b, CC[4 * ZC + 3] = 255
          }))
        }
        this._rampGradientsTexture = fC.b.CreateRGBATexture(CC, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((CC, zC) => CC.gradient < zC.gradient ? -1 : CC.gradient > zC.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(CC, zC) {
        this._rampGradients || (this._rampGradients = []);
        const ZC = new QC.f(CC, zC);
        return this._rampGradients.push(ZC), this._syncRampGradientTexture(), this
      }
      removeRampGradient(CC) {
        return this._removeGradientAndTexture(CC, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(CC, zC, ZC) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = LC, this._colorProcessing.process = UC);
        const wC = new QC.c(CC, zC, ZC);
        return this._colorGradients.push(wC), this._colorGradients.sort(((CC, zC) => CC.gradient < zC.gradient ? -1 : CC.gradient > zC.gradient ? 1 : 0)), this
      }
      removeColorGradient(CC) {
        if (!this._colorGradients) return this;
        let zC = 0;
        for (const ZC of this._colorGradients) {
          if (ZC.gradient === CC) {
            this._colorGradients.splice(zC, 1);
            break
          }
          zC++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = jC, this._colorProcessing.process = BC), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const CC of this._drawWrappers)
            if (CC)
              for (const zC of CC) zC?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(CC, zC, ZC, QC, wC) {
        return wC[4 * (((CC = .5 * Math.abs(CC) + .5) * ZC % ZC | 0) + ((zC = .5 * Math.abs(zC) + .5) * QC % QC | 0) * ZC)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const CC = this._engine,
          zC = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * zC), this._vertexBuffer = new nC.c(CC, this._vertexData, !0, zC);
        let ZC = 0;
        const QC = this._vertexBuffer.createVertexBuffer(nC.k.PositionKind, ZC, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[nC.k.PositionKind] = QC, ZC += 3;
        const wC = this._vertexBuffer.createVertexBuffer(nC.k.ColorKind, ZC, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[nC.k.ColorKind] = wC, ZC += 4;
        const bC = this._vertexBuffer.createVertexBuffer("angle", ZC, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = bC, ZC += 1;
        const fC = this._vertexBuffer.createVertexBuffer("size", ZC, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = fC, ZC += 2, this._isAnimationSheetEnabled) {
          const CC = this._vertexBuffer.createVertexBuffer("cellIndex", ZC, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = CC, ZC += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const CC = this._vertexBuffer.createVertexBuffer("direction", ZC, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = CC, ZC += 3
        }
        if (this._useRampGradients) {
          const CC = this._vertexBuffer.createVertexBuffer("remapData", ZC, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = CC, ZC += 4
        }
        let oC;
        if (this._useInstancing) {
          const zC = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new nC.c(CC, zC, !1, 2), oC = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else oC = this._vertexBuffer.createVertexBuffer("offset", ZC, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = oC, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const CC = [],
          zC = [];
        let ZC = 0;
        for (let QC = 0; QC < this._capacity; QC++) CC.push(ZC), CC.push(ZC + 1), CC.push(ZC + 2), CC.push(ZC), CC.push(ZC + 2), CC.push(ZC + 3), zC.push(ZC, ZC + 1, ZC + 1, ZC + 2, ZC + 2, ZC + 3, ZC + 3, ZC, ZC, ZC + 3), ZC += 4;
        this._indexBuffer = this._engine.createIndexBuffer(CC), this._linesIndexBuffer = this._engine.createIndexBuffer(zC)
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (CC) return this.startDelay = CC, void setTimeout((() => {
          this.start(0)
        }), CC);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const CC = this.noiseTexture;
          if (CC && CC.onGeneratedObservable) CC.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let zC = 0; zC < this.preWarmCycles; zC++) this.animate(!0), CC.render()
            }))
          }));
          else
            for (let zC = 0; zC < this.preWarmCycles; zC++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(CC))
      }
      _postStop(CC) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(CC, zC, ZC, QC) {
        let wC = CC * this._vertexBufferSize;
        const nC = bC.j.Eg[0].Av(this._scene?.floatingOriginOffset || bC.r.ZeroReadOnly);
        if (this._vertexData[wC++] = zC.position.x + this.worldOffset.x - nC.x, this._vertexData[wC++] = zC.position.y + this.worldOffset.y - nC.y, this._vertexData[wC++] = zC.position.z + this.worldOffset.z - nC.z, this._vertexData[wC++] = zC.color.r, this._vertexData[wC++] = zC.color.g, this._vertexData[wC++] = zC.color.b, this._vertexData[wC++] = zC.color.a, this._vertexData[wC++] = zC.angle, this._vertexData[wC++] = zC.scale.x * zC.size, this._vertexData[wC++] = zC.scale.y * zC.size, this._isAnimationSheetEnabled && (this._vertexData[wC++] = zC.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[wC++] = zC.direction.x, this._vertexData[wC++] = zC.direction.y, this._vertexData[wC++] = zC.direction.z);
        else if (zC._properties.initialDirection) {
          let CC = zC._properties.initialDirection;
          this.isLocal && (bC.r.TransformNormalToRef(CC, this._emitterWorldMatrix, bC.j.Eg[0]), CC = bC.j.Eg[0]), 0 === CC.x && 0 === CC.z && (CC.x = .001), this._vertexData[wC++] = CC.x, this._vertexData[wC++] = CC.y, this._vertexData[wC++] = CC.z
        } else {
          let CC = zC.direction;
          this.isLocal && (bC.r.TransformNormalToRef(CC, this._emitterWorldMatrix, bC.j.Eg[0]), CC = bC.j.Eg[0]), 0 === CC.x && 0 === CC.z && (CC.x = .001), this._vertexData[wC++] = CC.x, this._vertexData[wC++] = CC.y, this._vertexData[wC++] = CC.z
        }
        this._useRampGradients && zC.remapData && (this._vertexData[wC++] = zC.remapData.x, this._vertexData[wC++] = zC.remapData.y, this._vertexData[wC++] = zC.remapData.z, this._vertexData[wC++] = zC.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === ZC ? ZC = this._epsilon : 1 === ZC && (ZC = 1 - this._epsilon), 0 === QC ? QC = this._epsilon : 1 === QC && (QC = 1 - this._epsilon)), this._vertexData[wC++] = ZC, this._vertexData[wC] = QC)
      }
      _prepareParticle(CC) {}
      _createNewOnes(CC) {
        let zC;
        for (let ZC = 0; ZC < CC && this._particles.length !== this._capacity; ZC++) {
          zC = this._createParticle(), this._particles.push(zC);
          let CC = this._createQueueStart;
          for (; CC;) CC.process(zC, this), CC = CC.nextItem;
          zC._inheritParticleInfoToSubEmitters()
        }
      }
      _update(CC) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const CC = this.emitter;
          this._emitterWorldMatrix = CC.getWorldMatrix()
        } else {
          const CC = this.emitter;
          this._emitterWorldMatrix = bC.b.Translation(CC.x, CC.y, CC.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(CC)
      }
      static _GetAttributeNamesOrOptions() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = [nC.k.PositionKind, nC.k.ColorKind, "angle", "offset", "size"];
        return CC && QC.push("cellIndex"), zC || QC.push("direction"), ZC && QC.push("remapData"), QC
      }
      static _GetEffectCreationOptions() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, aC.d)(QC), CC && QC.push("particlesInfos"), zC && QC.push("logarithmicDepthConstant"), ZC && (QC.push("vFogInfos"), QC.push("vFogColor")), QC
      }
      fillDefines(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, aC.l)(this, this._scene, CC), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && CC.push("#define FOG")), this._isAnimationSheetEnabled && CC.push("#define ANIMATESHEET"), this.useLogarithmicDepth && CC.push("#define LOGARITHMICDEPTH"), zC === JC.BLENDMODE_MULTIPLY && CC.push("#define BLENDMULTIPLYMODE"), this.isLocal && CC.push("#define LOCAL"), this._useRampGradients && CC.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (CC.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            CC.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            CC.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && CC.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            CC.push("#define BILLBOARDMODE_ALL")
        }
        ZC && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), CC.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(CC, zC, ZC) {
        zC.push(...mz._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), CC.push(...mz._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), ZC.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, DC.d)(CC, this._imageProcessingConfigurationDefines), (0, DC.b)(ZC, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(CC) {
        var zC;
        const ZC = this._getCustomDrawWrapper(CC);
        if (ZC?.effect) return ZC;
        const QC = [];
        this.fillDefines(QC, CC);
        const bC = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          nC = dz.e._PrepareStringDefines(bC, QC),
          fC = nC ? dz.e.GetConfiguration(bC) : void 0;
        let oC = this._drawWrappers[bC];
        oC || (oC = this._drawWrappers[bC] = [], 0 === bC || this._renderPassObserver || (this._renderPassObserver = ((zC = this._engine)._onReleaseRenderPassObservable ?? (zC._onReleaseRenderPassObservable = new wC.d)).add((CC => {
          const zC = this._drawWrappers[CC];
          if (zC) {
            for (const CC of zC) CC?.dispose();
            delete this._drawWrappers[CC]
          }
        }))));
        let qC = oC[CC];
        qC || (qC = new TC.d(this._engine), qC.drawContext && (qC.drawContext.useInstancing = this._useInstancing), oC[CC] = qC);
        const FC = QC.join("\n");
        if (qC.defines !== FC) {
          const CC = [],
            zC = [],
            ZC = [];
          this.fillUniformsAttributesAndSamplerNames(zC, CC, ZC), nC && (zC.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== fC?.defines.PREPASS_LOCAL_POSITION_INDEX && zC.push("inverseEmitterWM", "geometryWorldOffset")), qC.setEffect(this._engine.createEffect("particles", {
            attributes: CC,
            uniformsNames: zC,
            samplers: ZC,
            defines: FC,
            shaderLanguage: this._shaderLanguage,
            multiTarget: nC,
            indexParameters: nC ? {
              buffersCount: fC?._mrtCount ?? 0
            } : void 0
          }, this._engine), FC)
        }
        return qC
      }
      _bindGeometryRendering(CC) {
        const zC = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ZC = dz.e.GetConfiguration(zC);
        if (!ZC?._defines) return;
        CC.setFloat("objectId", 0), CC.setInt("meshBlendTag", 0);
        const QC = this._scene?.activeCamera;
        if (CC.setFloat2("cameraInfo", QC?.minZ ?? 0, QC?.maxZ ?? 1), this.isLocal && void 0 !== ZC.defines.PREPASS_LOCAL_POSITION_INDEX) {
          CC.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const zC = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || bC.r.ZeroReadOnly, bC.j.Eg[0]);
          CC.setVector3("geometryWorldOffset", zC)
        }
      }
      animate() {
        let CC, zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!zC && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (zC ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) CC = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const zC = this._calculateEmitRate();
            CC = zC * this._scaledUpdateSpeed | 0, this._newPartsExcess += zC * this._scaledUpdateSpeed - CC
          }
          if (this._newPartsExcess > 1 && (CC += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? CC = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(CC), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !zC) {
            let CC = 0;
            for (let zC = 0; zC < this._particles.length; zC++) {
              const ZC = this._particles[zC];
              this._appendParticleVertices(CC, ZC), CC += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const CC = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  zC = this._particles.length;
                zC < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, zC * CC, this._fixedCapacityHighWaterMark * CC), this._fixedCapacityHighWaterMark = zC, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const CC = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * CC), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let CC = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const zC = this._actualFrame / this.targetStopDuration;
          QC.k.GetCurrentGradient(zC, this._emitRateGradients, ((zC, ZC, QC) => {
            zC !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = ZC.getFactor(), this._currentEmitRateGradient = zC), CC = (0, MC.Lerp)(this._currentEmitRate1, this._currentEmitRate2, QC)
          }))
        }
        return CC
      }
      _appendParticleVertices(CC, zC) {
        this._appendParticleVertex(CC++, zC, 0, 0), this._useInstancing || (this._appendParticleVertex(CC++, zC, 1, 0), this._appendParticleVertex(CC++, zC, 1, 1), this._appendParticleVertex(CC, zC, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !mz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZC.e(346).then((() => ZC(60966))), ZC.e(340).then((() => ZC(60972)))])) : await Promise.all([ZC.e(329).then((() => ZC(60981))), Promise.all([ZC.e(322), ZC.e(356)]).then((() => ZC(60987)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== JC.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(JC.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(JC.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(CC) {
        const zC = this._getWrapper(CC),
          ZC = zC.effect,
          QC = this._engine;
        QC.enableEffect(zC);
        const wC = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        ZC.setTexture("diffuseSampler", this.particleTexture), ZC.setMatrix("view", wC);
        const nC = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (ZC.setMatrix("projection", nC), this._isAnimationSheetEnabled && this.particleTexture) {
          const CC = this.particleTexture.getBaseSize();
          ZC.setFloat3("particlesInfos", this.spriteCellWidth / CC.width, this.spriteCellHeight / CC.height, this.spriteCellWidth / CC.width)
        }
        if (ZC.setVector2("translationPivot", this.translationPivot), ZC.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const CC = this._scene.activeCamera;
          ZC.setVector3("eyePosition", CC.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), ZC.setTexture("rampSampler", this._rampGradientsTexture));
        const fC = ZC.defines;
        this._scene && ((0, aC.g)(ZC, this, this._scene), this.applyFog && (0, tC.h)(this._scene, void 0, ZC)), fC.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (wC.invertToRef(bC.j.Matrix[0]), ZC.setMatrix("invView", bC.j.Matrix[0])), ZC._multiTarget && this._bindGeometryRendering(ZC), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? QC.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, ZC) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, ZC)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? QC.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, ZC) : QC.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, ZC), this.useLogarithmicDepth && this._scene && (0, tC.t)(fC, ZC, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(ZC), this._setEngineBasedOnBlendMode(CC), ZC._multiTarget && dz.e._BindZeroAlphaDiscard(QC, ZC);
        let oC = !1;
        try {
          dz.e._BindAttachmentsForEffect(QC, ZC) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(ZC), this._useInstancing ? this._scene?.forceWireframe ? QC.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : QC.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? QC.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : QC.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), oC = !0)
        } finally {
          dz.e._RestoreAttachments(QC)
        }
        return oC ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const CC = this._engine;
        let zC;
        return CC.setState && (CC.setState(!1), this.forceDepthWrite && CC.setDepthWrite(!0)), zC = this.blendMode === JC.BLENDMODE_MULTIPLYADD ? this._render(JC.BLENDMODE_MULTIPLY) + this._render(JC.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), zC
      }
      _onDispose() {}
      dispose() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), CC && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), CC && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(zC, ZC), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const CC = this._scene.Ix.indexOf(this);
          CC > -1 && this._scene.Ix.splice(CC, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Tm.notifyObservers(this), this.Tm.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    mz.ForceGLSL = !1;
    var Hz, Ez = ZC(37002);
    ! function(CC) {
      CC[CC.ATTACHED = 0] = "ATTACHED", CC[CC.END = 1] = "END"
    }(Hz || (Hz = {}));
    class lz {
      constructor(CC) {
        if (this.particleSystem = CC, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !CC.emitter || !CC.emitter.dispose) {
          const zC = (0, Ez.c)("BABYLON.AbstractMesh");
          CC.emitter = new zC("SubemitterSystemEmitter", CC.Km()), CC._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let CC = this.particleSystem.emitter;
        if (CC) {
          if (CC instanceof bC.r) CC = CC.clone();
          else if (-1 !== CC.getClassName().indexOf("Mesh")) {
            CC = new((0, Ez.c)("BABYLON.Mesh"))("", CC.Km()), CC.isVisible = !1
          }
        } else CC = new bC.r;
        const zC = new lz(this.particleSystem.clone(this.particleSystem.name, CC));
        return zC.particleSystem.name += "Clone", zC.type = this.type, zC.inheritDirection = this.inheritDirection, zC.inheritedVelocityAmount = this.inheritedVelocityAmount, zC.particleSystem._disposeEmitterOnDispose = !0, zC.particleSystem.disposeOnStop = !0, zC
      }
      serialize() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = {};
        return zC.type = this.type, zC.inheritDirection = this.inheritDirection, zC.inheritedVelocityAmount = this.inheritedVelocityAmount, zC.particleSystem = this.particleSystem.serialize(CC), zC
      }
      static _ParseParticleSystem(CC, zC, ZC) {
        throw (0, XC.i)("ParseParticle")
      }
      static Parse(CC, zC, ZC) {
        const QC = CC.particleSystem,
          wC = new lz(lz._ParseParticleSystem(QC, zC, ZC, !0));
        return wC.type = CC.type, wC.inheritDirection = CC.inheritDirection, wC.inheritedVelocityAmount = CC.inheritedVelocityAmount, wC.particleSystem._isSubEmitter = !0, wC
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Xz = ZC(39721),
      cz = ZC(39842);
    const uz = () => {};
    class rz {
      constructor() {
        this.particlePositionGenerator = uz, this.particleDestinationGenerator = uz, this.particleDirectionGenerator = uz
      }
      startDirectionFunction(CC, zC, ZC, QC) {
        const wC = bC.j.Eg[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== uz) this.particleDirectionGenerator(-1, ZC, wC);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== uz) {
          this.particleDestinationGenerator(-1, ZC, wC);
          const CC = bC.j.Eg[1];
          wC.subtractToRef(ZC.position, CC), CC.scaleToRef(1 / ZC.lifeTime, wC)
        } else wC.set(0, 0, 0);
        QC ? zC.Av(wC) : bC.r.TransformNormalToRef(wC, CC, zC)
      }
      startPositionFunction(CC, zC, ZC, QC) {
        const wC = bC.j.Eg[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== uz ? this.particlePositionGenerator(-1, ZC, wC) : wC.set(0, 0, 0), QC ? zC.Av(wC) : bC.r.TransformCoordinatesToRef(wC, CC, zC)
      }
      clone() {
        const CC = new rz;
        return NC.e.DeepCopy(this, CC), CC
      }
      applyToShader(CC) {}
      buildUniformLayout(CC) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const CC = {};
        return CC.type = this.getClassName(), CC.particlePositionGenerator = this.particlePositionGenerator, CC.particleDestinationGenerator = this.particleDestinationGenerator, CC
      }
      parse(CC) {
        CC.particlePositionGenerator && (this.particlePositionGenerator = CC.particlePositionGenerator), CC.particleDestinationGenerator && (this.particleDestinationGenerator = CC.particleDestinationGenerator)
      }
    }
    const sz = bC.r.Zero(),
      Tz = bC.r.Zero(),
      az = bC.r.Zero();
    class tz {
      constructor() {
        this.strength = 0, this.position = bC.r.Zero()
      }
      _processParticle(CC, zC) {
        this.position.subtractToRef(CC.position, sz);
        const ZC = sz.lengthSquared() + 1;
        sz.normalize().scaleToRef(this.strength / ZC, Tz), Tz.scaleToRef(zC._tempScaledUpdateSpeed, az), CC.direction.addInPlace(az)
      }
      serialize() {
        return {
          position: this.position.VZC(),
          strength: this.strength
        }
      }
    }
    const Dz = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class jz extends mz {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = CC => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const zC = Math.floor(Math.random() * this._subEmitters.length);
          for (const ZC of this._subEmitters[zC])
            if (1 === ZC.type) {
              const zC = ZC.clone();
              CC._inheritParticleInfoToSubEmitter(zC), zC.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(zC.particleSystem), zC.particleSystem.start()
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
      set flowMap(CC) {
        this._flowMap !== CC && (this._flowMap = CC, this._flowMapUpdate && (Yz(this._flowMapUpdate), this._flowMapUpdate = null), CC && (this._flowMapUpdate = {
          process: CC => {
            const zC = this.Km()?.getTransformMatrix();
            this._flowMap._processParticle(CC, this.flowMapStrength * this._tempScaledUpdateSpeed, zC)
          },
          previousItem: null,
          nextItem: null
        }, Kz(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(CC) {
        super.addAttractor(CC), 1 === this._attractors.length && (this._attractorUpdate = {
          process: CC => {
            for (const zC of this._attractors) zC._processParticle(CC, this)
          },
          previousItem: null,
          nextItem: null
        }, Kz(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(CC) {
        super.removeAttractor(CC), 0 === this._attractors.length && this._attractorUpdate && Yz(this._attractorUpdate)
      }
      start() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(CC)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const CC of this.subEmitters) CC instanceof jz ? this._subEmitters.push([new lz(CC)]) : CC instanceof lz ? this._subEmitters.push([CC]) : CC instanceof Array && this._subEmitters.push(CC)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const CC of this.activeSubSystems) CC.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const CC = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== CC && this._rootParticleSystem.activeSubSystems.splice(CC, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(CC) {
        CC && this._stopSubEmitters()
      }
      _prepareParticle(CC) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const zC = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          CC._properties.attachedSubEmitters = [];
          for (const ZC of zC)
            if (0 === ZC.type) {
              const zC = ZC.clone();
              CC._properties.attachedSubEmitters.push(zC), zC.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), CC && this.particles)
          for (const ZC of this.particles)
            if (ZC._properties.attachedSubEmitters)
              for (let CC = ZC._properties.attachedSubEmitters.length - 1; CC >= 0; CC -= 1) ZC._properties.attachedSubEmitters[CC].dispose();
        if (zC && this.activeSubSystems)
          for (let ZC = this.activeSubSystems.length - 1; ZC >= 0; ZC -= 1) this.activeSubSystems[ZC].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let CC = 0; CC < this._subEmitters.length; CC++)
            for (const zC of this._subEmitters[CC]) zC.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(CC, zC, ZC, QC) {
        let wC;
        wC = ZC instanceof Xz.b ? null : ZC;
        const nC = (0, Ez.c)("BABYLON.Texture");
        if (nC && wC)
          if (CC.texture) zC.particleTexture = nC.Parse(CC.texture, wC, QC);
          else if (CC.textureName) {
          const ZC = CC.textureSettings;
          if (zC.particleTexture = new nC(QC + CC.textureName, wC, !1, void 0 === CC.invertY || CC.invertY, ZC ? ZC.samplingMode : void 0), zC.particleTexture.name = CC.textureName, ZC) {
            const CC = zC.particleTexture;
            for (const zC of Dz) void 0 !== ZC[zC] && (CC[zC] = ZC[zC])
          }
        }
        if (CC.emitterId || 0 === CC.emitterId || void 0 !== CC.emitter ? (CC.emitterId || 0 === CC.emitterId) && wC ? (zC.emitter = wC.getLastMeshById(CC.emitterId), zC.emitter || (zC.emitter = bC.r.Zero())) : zC.emitter = bC.r.FromArray(CC.emitter) : zC.emitter = bC.r.Zero(), zC.isLocal = !!CC.isLocal, void 0 !== CC.renderingGroupId && (zC.renderingGroupId = CC.renderingGroupId), void 0 !== CC.isBillboardBased && (zC.isBillboardBased = CC.isBillboardBased), void 0 !== CC.billboardMode && (zC.billboardMode = CC.billboardMode), void 0 !== CC.useLogarithmicDepth && (zC.useLogarithmicDepth = CC.useLogarithmicDepth), CC.animations) {
          for (let ZC = 0; ZC < CC.animations.length; ZC++) {
            const QC = CC.animations[ZC],
              wC = (0, Ez.c)("BABYLON.Animation");
            wC && zC.animations.push(wC.Parse(QC))
          }
          zC.beginAnimationOnStart = CC.beginAnimationOnStart, zC.beginAnimationFrom = CC.beginAnimationFrom, zC.beginAnimationTo = CC.beginAnimationTo, zC.beginAnimationLoop = CC.beginAnimationLoop
        }
        if (CC.autoAnimate && wC && wC.beginAnimation(zC, CC.autoAnimateFrom, CC.autoAnimateTo, CC.autoAnimateLoop, CC.autoAnimateSpeed || 1), zC.startDelay = 0 | CC.startDelay, zC.minAngularSpeed = CC.minAngularSpeed, zC.maxAngularSpeed = CC.maxAngularSpeed, zC.minSize = CC.minSize, zC.maxSize = CC.maxSize, CC.minScaleX && (zC.minScaleX = CC.minScaleX, zC.maxScaleX = CC.maxScaleX, zC.minScaleY = CC.minScaleY, zC.maxScaleY = CC.maxScaleY), void 0 !== CC.preWarmCycles && (zC.preWarmCycles = CC.preWarmCycles, zC.preWarmStepOffset = CC.preWarmStepOffset), void 0 !== CC.minInitialRotation && (zC.minInitialRotation = CC.minInitialRotation, zC.maxInitialRotation = CC.maxInitialRotation), zC.minLifeTime = CC.minLifeTime, zC.maxLifeTime = CC.maxLifeTime, zC.minEmitPower = CC.minEmitPower, zC.maxEmitPower = CC.maxEmitPower, zC.emitRate = CC.emitRate, zC.gravity = bC.r.FromArray(CC.gravity), CC.noiseStrength && (zC.noiseStrength = bC.r.FromArray(CC.noiseStrength)), zC.color1 = FC.g.FromArray(CC.color1), zC.color2 = FC.g.FromArray(CC.color2), zC.colorDead = FC.g.FromArray(CC.colorDead), zC.updateSpeed = CC.updateSpeed, zC.targetStopDuration = CC.targetStopDuration, zC.blendMode = CC.blendMode, CC.colorGradients)
          for (const bC of CC.colorGradients) zC.addColorGradient(bC.gradient, FC.g.FromArray(bC.color1), bC.color2 ? FC.g.FromArray(bC.color2) : void 0);
        if (CC.rampGradients) {
          for (const ZC of CC.rampGradients) zC.addRampGradient(ZC.gradient, FC.e.FromArray(ZC.color));
          zC.useRampGradients = CC.useRampGradients
        }
        if (CC.colorRemapGradients)
          for (const bC of CC.colorRemapGradients) zC.addColorRemapGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.alphaRemapGradients)
          for (const bC of CC.alphaRemapGradients) zC.addAlphaRemapGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.sizeGradients)
          for (const bC of CC.sizeGradients) zC.addSizeGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.angularSpeedGradients)
          for (const bC of CC.angularSpeedGradients) zC.addAngularSpeedGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.velocityGradients)
          for (const bC of CC.velocityGradients) zC.addVelocityGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.dragGradients)
          for (const bC of CC.dragGradients) zC.addDragGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.emitRateGradients)
          for (const bC of CC.emitRateGradients) zC.addEmitRateGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.startSizeGradients)
          for (const bC of CC.startSizeGradients) zC.addStartSizeGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.lifeTimeGradients)
          for (const bC of CC.lifeTimeGradients) zC.addLifeTimeGradient(bC.gradient, void 0 !== bC.factor1 ? bC.factor1 : bC.factor, bC.factor2);
        if (CC.limitVelocityGradients) {
          for (const ZC of CC.limitVelocityGradients) zC.addLimitVelocityGradient(ZC.gradient, void 0 !== ZC.factor1 ? ZC.factor1 : ZC.factor, ZC.factor2);
          zC.limitVelocityDamping = CC.limitVelocityDamping
        }
        if (CC.noiseTexture && wC) {
          const ZC = (0, Ez.c)("BABYLON.ProceduralTexture");
          zC.noiseTexture = ZC.Parse(CC.noiseTexture, wC, QC)
        }
        let fC;
        if (CC.particleEmitterType) {
          switch (CC.particleEmitterType.type) {
            case "SphereParticleEmitter":
              fC = new pC;
              break;
            case "SphereDirectedParticleEmitter":
              fC = new PC;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              fC = new RC;
              break;
            case "ConeDirectedParticleEmitter":
              fC = new AC;
              break;
            case "CylinderParticleEmitter":
              fC = new GC.i;
              break;
            case "CylinderDirectedParticleEmitter":
              fC = new GC.e;
              break;
            case "HemisphericParticleEmitter":
              fC = new SC;
              break;
            case "PointParticleEmitter":
              fC = new gC;
              break;
            case "MeshParticleEmitter":
              fC = new xC;
              break;
            case "CustomParticleEmitter":
              fC = new rz;
              break;
            default:
              fC = new WC.c
          }
          fC.parse(CC.particleEmitterType, wC)
        } else fC = new WC.c, fC.parse(CC, wC);
        zC.particleEmitterType = fC, zC.startSpriteCellID = CC.startSpriteCellID, zC.endSpriteCellID = CC.endSpriteCellID, zC.spriteCellLoop = CC.spriteCellLoop ?? !0, zC.spriteCellWidth = CC.spriteCellWidth, zC.spriteCellHeight = CC.spriteCellHeight, zC.spriteCellChangeSpeed = CC.spriteCellChangeSpeed, zC.spriteRandomStartCell = CC.spriteRandomStartCell, zC.disposeOnStop = CC.disposeOnStop ?? !1, zC.manualEmitCount = CC.manualEmitCount ?? -1
      }
      static Parse(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wC = arguments.length > 4 ? arguments[4] : void 0;
        const nC = CC.name;
        let fC, oC, qC = null,
          WC = null;
        if (zC instanceof Xz.b ? fC = zC : (oC = zC, fC = oC.mg()), CC.customShader && (0, XC.b)(fC.createEffectForParticles)) {
          WC = CC.customShader;
          const zC = WC.shaderOptions.defines.length > 0 ? WC.shaderOptions.defines.join("\n") : "";
          qC = fC.createEffectForParticles(WC.shaderPath.fragmentElement, WC.shaderOptions.uniforms, WC.shaderOptions.samplers, zC)
        }
        const NC = new jz(nC, wC || CC.HW, zC, qC, CC.isAnimationSheetEnabled);
        if (NC.customShader = WC, NC._rootUrl = ZC, CC.id && (NC.id = CC.id), CC.subEmitters) {
          NC.subEmitters = [];
          for (const QC of CC.subEmitters) {
            const CC = [];
            for (const wC of QC) CC.push(lz.Parse(wC, zC, ZC));
            NC.subEmitters.push(CC)
          }
        }
        if (CC.attractors)
          for (const FC of CC.attractors) {
            const CC = new tz;
            CC.position = bC.r.FromArray(FC.position), CC.strength = FC.strength, NC.addAttractor(CC)
          }
        return jz._Parse(CC, NC, zC, ZC), CC.textureMask && (NC.textureMask = FC.g.FromArray(CC.textureMask)), CC.worldOffset && (NC.worldOffset = bC.r.FromArray(CC.worldOffset)), CC.preventAutoStart && (NC.preventAutoStart = CC.preventAutoStart), CC.metadata && (NC.metadata = CC.metadata), QC || NC.preventAutoStart || NC.start(), NC
      }
      serialize() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = {};
        if (jz._Serialize(zC, this, CC), zC.textureMask = this.textureMask.VZC(), zC.customShader = this.customShader, zC.preventAutoStart = this.preventAutoStart, zC.worldOffset = this.worldOffset.VZC(), this.metadata && (zC.metadata = this.metadata), this.subEmitters) {
          zC.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const ZC of this._subEmitters) {
            const QC = [];
            for (const zC of ZC) zC.particleSystem.doNotSerialize || QC.push(zC.serialize(CC));
            zC.subEmitters.push(QC)
          }
        }
        if (this._attractors && this._attractors.length) {
          zC.attractors = [];
          for (const CC of this._attractors) zC.attractors.push(CC.serialize())
        }
        return zC
      }
      static _Serialize(CC, zC, ZC) {
        if (CC.name = zC.name, CC.id = zC.id, CC.HW = zC.getCapacity(), CC.disposeOnStop = zC.disposeOnStop, CC.manualEmitCount = zC.manualEmitCount, zC.emitter.position) {
          const ZC = zC.emitter;
          CC.emitterId = ZC.id
        } else {
          const ZC = zC.emitter;
          CC.emitter = ZC.VZC()
        }
        if (zC.particleEmitterType && (CC.particleEmitterType = zC.particleEmitterType.serialize()), zC.particleTexture)
          if (ZC) CC.texture = zC.particleTexture.serialize();
          else {
            const ZC = zC.particleTexture;
            CC.textureName = zC.particleTexture.name, CC.invertY = !!ZC._invertY;
            const QC = {};
            for (const CC of Dz) QC[CC] = ZC[CC];
            QC.samplingMode = ZC.samplingMode, CC.textureSettings = QC
          } CC.isLocal = zC.isLocal, cz.d.AppendSerializedAnimations(zC, CC), CC.beginAnimationOnStart = zC.beginAnimationOnStart, CC.beginAnimationFrom = zC.beginAnimationFrom, CC.beginAnimationTo = zC.beginAnimationTo, CC.beginAnimationLoop = zC.beginAnimationLoop, CC.startDelay = zC.startDelay, CC.renderingGroupId = zC.renderingGroupId, CC.isBillboardBased = zC.isBillboardBased, CC.billboardMode = zC.billboardMode, CC.minAngularSpeed = zC.minAngularSpeed, CC.maxAngularSpeed = zC.maxAngularSpeed, CC.minSize = zC.minSize, CC.maxSize = zC.maxSize, CC.minScaleX = zC.minScaleX, CC.maxScaleX = zC.maxScaleX, CC.minScaleY = zC.minScaleY, CC.maxScaleY = zC.maxScaleY, CC.minEmitPower = zC.minEmitPower, CC.maxEmitPower = zC.maxEmitPower, CC.minLifeTime = zC.minLifeTime, CC.maxLifeTime = zC.maxLifeTime, CC.emitRate = zC.emitRate, CC.gravity = zC.gravity.VZC(), CC.noiseStrength = zC.noiseStrength.VZC(), CC.color1 = zC.color1.VZC(), CC.color2 = zC.color2.VZC(), CC.colorDead = zC.colorDead.VZC(), CC.updateSpeed = zC.updateSpeed, CC.targetStopDuration = zC.targetStopDuration, CC.blendMode = zC.blendMode, CC.preWarmCycles = zC.preWarmCycles, CC.preWarmStepOffset = zC.preWarmStepOffset, CC.minInitialRotation = zC.minInitialRotation, CC.maxInitialRotation = zC.maxInitialRotation, CC.startSpriteCellID = zC.startSpriteCellID, CC.spriteCellLoop = zC.spriteCellLoop, CC.endSpriteCellID = zC.endSpriteCellID, CC.spriteCellChangeSpeed = zC.spriteCellChangeSpeed, CC.spriteCellWidth = zC.spriteCellWidth, CC.spriteCellHeight = zC.spriteCellHeight, CC.spriteRandomStartCell = zC.spriteRandomStartCell, CC.isAnimationSheetEnabled = zC.isAnimationSheetEnabled, CC.useLogarithmicDepth = zC.useLogarithmicDepth;
        const QC = zC.getColorGradients();
        if (QC) {
          CC.colorGradients = [];
          for (const zC of QC) {
            const ZC = {
              gradient: zC.gradient,
              color1: zC.color1.VZC()
            };
            zC.color2 ? ZC.color2 = zC.color2.VZC() : ZC.color2 = zC.color1.VZC(), CC.colorGradients.push(ZC)
          }
        }
        const wC = zC.getRampGradients();
        if (wC) {
          CC.rampGradients = [];
          for (const zC of wC) {
            const ZC = {
              gradient: zC.gradient,
              color: zC.color.VZC()
            };
            CC.rampGradients.push(ZC)
          }
          CC.useRampGradients = zC.useRampGradients
        }
        const bC = zC.getColorRemapGradients();
        if (bC) {
          CC.colorRemapGradients = [];
          for (const zC of bC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.colorRemapGradients.push(ZC)
          }
        }
        const nC = zC.getAlphaRemapGradients();
        if (nC) {
          CC.alphaRemapGradients = [];
          for (const zC of nC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.alphaRemapGradients.push(ZC)
          }
        }
        const fC = zC.getSizeGradients();
        if (fC) {
          CC.sizeGradients = [];
          for (const zC of fC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.sizeGradients.push(ZC)
          }
        }
        const oC = zC.getAngularSpeedGradients();
        if (oC) {
          CC.angularSpeedGradients = [];
          for (const zC of oC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.angularSpeedGradients.push(ZC)
          }
        }
        const qC = zC.getVelocityGradients();
        if (qC) {
          CC.velocityGradients = [];
          for (const zC of qC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.velocityGradients.push(ZC)
          }
        }
        const FC = zC.getDragGradients();
        if (FC) {
          CC.dragGradients = [];
          for (const zC of FC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.dragGradients.push(ZC)
          }
        }
        const WC = zC.getEmitRateGradients();
        if (WC) {
          CC.emitRateGradients = [];
          for (const zC of WC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.emitRateGradients.push(ZC)
          }
        }
        const NC = zC.getStartSizeGradients();
        if (NC) {
          CC.startSizeGradients = [];
          for (const zC of NC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.startSizeGradients.push(ZC)
          }
        }
        const MC = zC.getLifeTimeGradients();
        if (MC) {
          CC.lifeTimeGradients = [];
          for (const zC of MC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.lifeTimeGradients.push(ZC)
          }
        }
        const gC = zC.getLimitVelocityGradients();
        if (gC) {
          CC.limitVelocityGradients = [];
          for (const zC of gC) {
            const ZC = {
              gradient: zC.gradient,
              factor1: zC.factor1
            };
            void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.limitVelocityGradients.push(ZC)
          }
          CC.limitVelocityDamping = zC.limitVelocityDamping
        }
        zC.noiseTexture && (CC.noiseTexture = zC.noiseTexture.serialize())
      }
      clone(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = {
          ...this._customWrappers
        };
        let wC = null;
        const bC = this._engine;
        if ((0, XC.b)(bC.createEffectForParticles) && null != this.customShader) {
          wC = this.customShader;
          const CC = wC.shaderOptions.defines.length > 0 ? wC.shaderOptions.defines.join("\n") : "",
            zC = bC.createEffectForParticles(wC.shaderPath.fragmentElement, wC.shaderOptions.uniforms, wC.shaderOptions.samplers, CC);
          QC[0] ? QC[0].effect = zC : this.setCustomEffect(zC, 0)
        }
        const nC = this.serialize(ZC),
          fC = !1 === ZC && this.particleTexture ? this.particleTexture.clone() : null;
        fC && (nC.textureName = void 0);
        const oC = jz.Parse(nC, this._scene || this._engine, this._rootUrl);
        return oC.name = CC, oC.customShader = wC, oC._customWrappers = QC, fC && (oC.particleTexture = fC), void 0 === zC && (zC = this.emitter), this.noiseTexture && (oC.noiseTexture = this.noiseTexture.clone()), oC.emitter = zC, this.preventAutoStart || oC.start(), oC
      }
    }
    jz.BILLBOARDMODE_Y = 2, jz.BILLBOARDMODE_ALL = 7, jz.BILLBOARDMODE_STRETCHED = 8, jz.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let yz = !1;
    yz || (yz = !0, lz._ParseParticleSystem = jz.Parse)
  },
  41443: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      SkyMaterial: () => RC,
      _MaxColorValueForRenderTarget: () => GC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(39842),
      nC = ZC(36961),
      fC = ZC(40102),
      oC = ZC(40167),
      qC = ZC(41402),
      FC = ZC(40985),
      WC = ZC(39902),
      NC = ZC(37002),
      MC = ZC(40198),
      gC = ZC(40175),
      SC = ZC(40157),
      pC = ZC(40151);
    class PC extends fC.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function GC(CC) {
      switch (CC) {
        case qC.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case qC.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let RC = (() => {
      var CC;
      let zC, fC, qC, NC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC = oC.e,
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [],
        TC = [],
        aC = [],
        tC = [],
        DC = [],
        jC = [],
        yC = [],
        LC = [],
        UC = [],
        BC = [],
        OC = [],
        kC = [],
        VC = [],
        Cz = [],
        zz = [],
        Zz = [],
        Qz = [],
        wz = [],
        bz = [],
        nz = [],
        fz = [],
        oz = [];
      return CC = class extends dC {
        constructor(CC, zC) {
          super(CC, zC, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, QC.n)(this, mC, 1), this.turbidity = ((0, QC.n)(this, HC), (0, QC.n)(this, EC, 10)), this.rayleigh = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, 2)), this.mieCoefficient = ((0, QC.n)(this, cC), (0, QC.n)(this, uC, .005)), this.mieDirectionalG = ((0, QC.n)(this, rC), (0, QC.n)(this, sC, .8)), this.distance = ((0, QC.n)(this, TC), (0, QC.n)(this, aC, 500)), this.inclination = ((0, QC.n)(this, tC), (0, QC.n)(this, DC, .49)), this.azimuth = ((0, QC.n)(this, jC), (0, QC.n)(this, yC, .25)), this.sunPosition = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, new nC.Eg(0, 100, 0))), this.useSunPosition = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, !1)), this.cameraOffset = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, nC.Eg.Zero())), this.up = ((0, QC.n)(this, Cz), (0, QC.n)(this, zz, nC.Eg.Up())), this.dithering = ((0, QC.n)(this, Zz), (0, QC.n)(this, Qz, !1)), this.rawHdrOutput = ((0, QC.n)(this, wz), (0, QC.n)(this, bz, !1)), this.cloudiness = ((0, QC.n)(this, nz), (0, QC.n)(this, fz, 0)), this._cameraPosition = ((0, QC.n)(this, oz), nC.Eg.Zero()), this._skyOrientation = new nC.Quaternion
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
        isReadyForSubMesh(zC, ZC) {
          const QC = ZC._drawWrapper;
          if (this.isFrozen && QC.effect && QC._wasPreviouslyReady) return !0;
          ZC.materialDefines || (ZC.materialDefines = new PC);
          const wC = ZC.materialDefines,
            bC = this.Km();
          if (this._isReadyForSubMesh(ZC)) return !0;
          if ((0, pC.ib)(zC, bC, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, wC, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, pC.X)(zC, wC, !0, !1), wC.IMAGEPROCESSINGPOSTPROCESS !== bC.imageProcessingConfiguration.applyByPostProcess && wC.markAsMiscDirty(), wC.DITHER !== this.dithering && wC.markAsMiscDirty(), wC.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && wC.markAsMiscDirty(), wC.isDirty) {
            wC.markAsProcessed(), bC.resetCachedMaterial();
            const zC = new gC.c;
            wC.FOG && zC.addFallback(1, "FOG"), wC.IMAGEPROCESSINGPOSTPROCESS = bC.imageProcessingConfiguration.applyByPostProcess, wC.DITHER = this.dithering, wC.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const QC = [FC.f.PositionKind];
            wC.VERTEXCOLOR && QC.push(FC.f.ColorKind);
            const nC = "sky",
              fC = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, SC.d)(fC);
            const oC = wC.toString();
            ZC.setEffect(bC.mg().createEffect(nC, {
              attributes: QC,
              uniformsNames: fC,
              uniformBuffersNames: [],
              samplers: [],
              defines: oC,
              fallbacks: zC,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: CC._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, bC.mg()), wC, this._materialContext)
          }
          return !(!ZC.effect || !ZC.effect.isReady()) && (wC._renderId = bC.getRenderId(), QC._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(CC, zC, ZC) {
          const QC = this.Km(),
            wC = ZC.materialDefines;
          if (!wC) return;
          const bC = ZC.effect;
          if (!bC) return;
          this._activeEffect = bC, this.bindOnlyWorldMatrix(CC), this._activeEffect.setMatrix("viewProjection", QC.getTransformMatrix()), this._mustRebind(QC, bC, ZC) && ((0, SC.g)(bC, this, QC), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, pC.t)(wC, bC, QC)), QC.fogEnabled && zC.applyFog && QC.fogMode !== WC.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", QC.getViewMatrix()), (0, pC.h)(QC, zC, this._activeEffect, this.rawHdrOutput);
          const fC = QC.activeCamera;
          if (fC) {
            const CC = fC.getWorldMatrix();
            this._cameraPosition.x = CC.m[12], this._cameraPosition.y = CC.m[13], this._cameraPosition.z = CC.m[14], this._activeEffect.setVector3("cameraPosition", nC.TmpVectors.Eg[0].Av(this._cameraPosition).RQC(QC.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const CC = QC.mg()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", GC(CC?.texture?.type))
          }
          if (!this.useSunPosition) {
            const CC = Math.PI * (this.inclination - .5),
              zC = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(zC) * Math.cos(CC), this.sunPosition.y = this.distance * Math.sin(-CC), this.sunPosition.z = this.distance * Math.sin(zC) * Math.cos(CC), nC.Quaternion.FromUnitVectorsToRef(nC.Eg.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(zC, this._activeEffect, ZC)
        }
        getAnimatables() {
          return []
        }
        dispose(CC) {
          super.dispose(CC)
        }
        clone(zC) {
          return bC.d.Clone((() => new CC(zC, this.Km())), this)
        }
        serialize() {
          const CC = super.serialize();
          return CC.customType = "BABYLON.SkyMaterial", CC
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(zC, ZC, QC) {
          return bC.d.Parse((() => new CC(zC.name, ZC)), zC, ZC, QC)
        }
      }, (() => {
        const ZC = "function" === typeof Symbol && Symbol.metadata ? Object.create(dC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, wC.M)()], fC = [(0, wC.M)()], qC = [(0, wC.M)()], NC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.J)()], iC = [(0, wC.M)()], vC = [(0, wC.J)()], eC = [(0, wC.J)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: CC => "luminance" in CC,
            get: CC => CC.luminance,
            set: (CC, zC) => {
              CC.luminance = zC
            }
          },
          metadata: ZC
        }, mC, HC), (0, QC.j)(null, null, fC, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: CC => "turbidity" in CC,
            get: CC => CC.turbidity,
            set: (CC, zC) => {
              CC.turbidity = zC
            }
          },
          metadata: ZC
        }, EC, lC), (0, QC.j)(null, null, qC, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: CC => "rayleigh" in CC,
            get: CC => CC.rayleigh,
            set: (CC, zC) => {
              CC.rayleigh = zC
            }
          },
          metadata: ZC
        }, XC, cC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: CC => "mieCoefficient" in CC,
            get: CC => CC.mieCoefficient,
            set: (CC, zC) => {
              CC.mieCoefficient = zC
            }
          },
          metadata: ZC
        }, uC, rC), (0, QC.j)(null, null, RC, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: CC => "mieDirectionalG" in CC,
            get: CC => CC.mieDirectionalG,
            set: (CC, zC) => {
              CC.mieDirectionalG = zC
            }
          },
          metadata: ZC
        }, sC, TC), (0, QC.j)(null, null, AC, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: CC => "distance" in CC,
            get: CC => CC.distance,
            set: (CC, zC) => {
              CC.distance = zC
            }
          },
          metadata: ZC
        }, aC, tC), (0, QC.j)(null, null, xC, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: CC => "inclination" in CC,
            get: CC => CC.inclination,
            set: (CC, zC) => {
              CC.inclination = zC
            }
          },
          metadata: ZC
        }, DC, jC), (0, QC.j)(null, null, JC, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: CC => "azimuth" in CC,
            get: CC => CC.azimuth,
            set: (CC, zC) => {
              CC.azimuth = zC
            }
          },
          metadata: ZC
        }, yC, LC), (0, QC.j)(null, null, IC, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: CC => "sunPosition" in CC,
            get: CC => CC.sunPosition,
            set: (CC, zC) => {
              CC.sunPosition = zC
            }
          },
          metadata: ZC
        }, UC, BC), (0, QC.j)(null, null, iC, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: CC => "useSunPosition" in CC,
            get: CC => CC.useSunPosition,
            set: (CC, zC) => {
              CC.useSunPosition = zC
            }
          },
          metadata: ZC
        }, OC, kC), (0, QC.j)(null, null, vC, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: CC => "cameraOffset" in CC,
            get: CC => CC.cameraOffset,
            set: (CC, zC) => {
              CC.cameraOffset = zC
            }
          },
          metadata: ZC
        }, VC, Cz), (0, QC.j)(null, null, eC, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: CC => "up" in CC,
            get: CC => CC.up,
            set: (CC, zC) => {
              CC.up = zC
            }
          },
          metadata: ZC
        }, zz, Zz), (0, QC.j)(null, null, hC, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: CC => "dithering" in CC,
            get: CC => CC.dithering,
            set: (CC, zC) => {
              CC.dithering = zC
            }
          },
          metadata: ZC
        }, Qz, wz), (0, QC.j)(null, null, KC, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: CC => "rawHdrOutput" in CC,
            get: CC => CC.rawHdrOutput,
            set: (CC, zC) => {
              CC.rawHdrOutput = zC
            }
          },
          metadata: ZC
        }, bz, nz), (0, QC.j)(null, null, YC, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: CC => "cloudiness" in CC,
            get: CC => CC.cloudiness,
            set: (CC, zC) => {
              CC.cloudiness = zC
            }
          },
          metadata: ZC
        }, fz, oz), ZC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZC
        })
      })(), CC._ShaderLoader = new MC.c((() => [ZC.e(330).then((() => ZC(60990))), ZC.e(323).then((() => ZC(60992)))]), (() => [ZC.e(347).then((() => ZC(60999))), ZC.e(341).then((() => ZC(61006)))])), CC
    })();
    (0, NC.d)("BABYLON.SkyMaterial", RC)
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);