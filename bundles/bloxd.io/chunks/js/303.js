export const id = 303;
export const ids = [303];
export const modules = {
  41504: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(40043),
      sD = wD(41506);
    class KD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = wD, this.ypD = [], this._maxBlockCapacity = zD || 64, this._selectionContent = new pD.c(1024), this._creationFunc = DD
      }
      update(DD, zD, wD) {
        sD.d._CreateBlocks(DD, zD, wD, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      VpD(DD) {
        for (let zD = 0; zD < this.blocks.length; zD++) {
          this.blocks[zD].addEntry(DD)
        }
      }
      zW(DD) {
        for (let zD = 0; zD < this.blocks.length; zD++) {
          this.blocks[zD].removeEntry(DD)
        }
      }
      select(DD, zD) {
        this._selectionContent.reset();
        for (let wD = 0; wD < this.blocks.length; wD++) {
          this.blocks[wD].select(DD, this._selectionContent, zD)
        }
        return zD ? this._selectionContent.concat(this.ypD) : this._selectionContent.concatWithNoDuplicate(this.ypD), this._selectionContent
      }
      intersects(DD, zD, wD) {
        this._selectionContent.reset();
        for (let pD = 0; pD < this.blocks.length; pD++) {
          this.blocks[pD].intersects(DD, zD, this._selectionContent, wD)
        }
        return wD ? this._selectionContent.concat(this.ypD) : this._selectionContent.concatWithNoDuplicate(this.ypD), this._selectionContent
      }
      intersectsRay(DD) {
        this._selectionContent.reset();
        for (let zD = 0; zD < this.blocks.length; zD++) {
          this.blocks[zD].intersectsRay(DD, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.ypD), this._selectionContent
      }
    }
    KD.CreationFuncForMeshes = (DD, zD) => {
      const wD = DD.FW();
      !DD.isBlocked && wD.boundingBox.intersectsMinMax(zD.jpD, zD.bpD) && zD.entries.push(DD)
    }, KD.CreationFuncForSubMeshes = (DD, zD) => {
      DD.FW().boundingBox.intersectsMinMax(zD.jpD, zD.bpD) && zD.entries.push(DD)
    }
  },
  41506: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(37079),
      sD = wD(40239);
    class KD {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.entries = [], this.kpD = new Array, this._capacity = wD, this._depth = pD, this._maxDepth = sD, this._creationFunc = KD, this._minPoint = DD, this._maxPoint = zD, this.kpD.push(DD.clone()), this.kpD.push(zD.clone()), this.kpD.push(DD.clone()), this.kpD[2].x = zD.x, this.kpD.push(DD.clone()), this.kpD[3].y = zD.y, this.kpD.push(DD.clone()), this.kpD[4].z = zD.z, this.kpD.push(zD.clone()), this.kpD[5].z = DD.z, this.kpD.push(zD.clone()), this.kpD[6].x = DD.x, this.kpD.push(zD.clone()), this.kpD[7].y = DD.y
      }
      get bA() {
        return this._capacity
      }
      get jpD() {
        return this._minPoint
      }
      get bpD() {
        return this._maxPoint
      }
      addEntry(DD) {
        if (this.blocks)
          for (let zD = 0; zD < this.blocks.length; zD++) {
            this.blocks[zD].addEntry(DD)
          } else this._creationFunc(DD, this), this.entries.length > this.bA && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(DD) {
        if (this.blocks) {
          for (let zD = 0; zD < this.blocks.length; zD++) {
            this.blocks[zD].removeEntry(DD)
          }
          return
        }
        const zD = this.entries.indexOf(DD);
        zD > -1 && this.entries.splice(zD, 1)
      }
      addEntries(DD) {
        for (let zD = 0; zD < DD.length; zD++) {
          const wD = DD[zD];
          this.addEntry(wD)
        }
      }
      select(DD, zD, wD) {
        if (sD.b.IsInFrustum(this.kpD, DD)) {
          if (this.blocks) {
            for (let pD = 0; pD < this.blocks.length; pD++) {
              this.blocks[pD].select(DD, zD, wD)
            }
            return
          }
          wD ? zD.concat(this.entries) : zD.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(DD, zD, wD, pD) {
        if (sD.b.IntersectsSphere(this._minPoint, this._maxPoint, DD, zD)) {
          if (this.blocks) {
            for (let sD = 0; sD < this.blocks.length; sD++) {
              this.blocks[sD].intersects(DD, zD, wD, pD)
            }
            return
          }
          pD ? wD.concat(this.entries) : wD.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(DD, zD) {
        if (DD.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let wD = 0; wD < this.blocks.length; wD++) {
              this.blocks[wD].intersectsRay(DD, zD)
            }
            return
          }
          zD.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        KD._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(DD, zD, wD, sD, rD, LD, cD, gD) {
        cD.blocks = new Array;
        const RD = new pD.s((zD.x - DD.x) / 2, (zD.y - DD.y) / 2, (zD.z - DD.z) / 2);
        for (let pD = 0; pD < 2; pD++)
          for (let zD = 0; zD < 2; zD++)
            for (let AD = 0; AD < 2; AD++) {
              const UD = DD.add(RD.multiplyByFloats(pD, zD, AD)),
                fD = DD.add(RD.multiplyByFloats(pD + 1, zD + 1, AD + 1)),
                ID = new KD(UD, fD, sD, rD + 1, LD, gD);
              ID.addEntries(wD), cD.blocks.push(ID)
            }
      }
    }
  },
  41514: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD
    });
    var pD = wD(40022),
      sD = wD(37079),
      KD = wD(40368),
      rD = wD(41460),
      LD = wD(40097),
      cD = wD(37110),
      gD = wD(41504);
    class RD {
      constructor(DD) {
        this.name = LD.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new rD.A(sD.s.Zero(), new sD.s(1, 1, 1)), (DD = DD || cD.d.LastCreatedScene) && (this.oB = DD, this.oB.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.oB.getActiveSubMeshCandidates = DD => this.getActiveSubMeshCandidates(DD), this.oB.getCollidingSubMeshCandidates = (DD, zD) => this.getCollidingSubMeshCandidates(DD, zD), this.oB.getIntersectingSubMeshCandidates = (DD, zD) => this.getIntersectingSubMeshCandidates(DD, zD))
      }
      register() {
        this.oB.onMeshRemovedObservable.add((DD => {
          const zD = this.oB.selectionOctree;
          if (void 0 !== zD && null !== zD) {
            const wD = zD.ypD.indexOf(DD); - 1 !== wD && zD.ypD.splice(wD, 1)
          }
        })), this.oB.onMeshImportedObservable.add((DD => {
          const zD = this.oB.selectionOctree;
          void 0 !== zD && null !== zD && zD.VpD(DD)
        }))
      }
      getActiveMeshCandidates() {
        return this.oB.vpD?.select(this.oB.frustumPlanes) || this.oB._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(DD) {
        if (DD._submeshesOctree && DD.useOctreeForRenderingSelection) {
          return DD._submeshesOctree.select(this.oB.frustumPlanes)
        }
        return this.oB._getDefaultSubMeshCandidates(DD)
      }
      getIntersectingSubMeshCandidates(DD, zD) {
        if (DD._submeshesOctree && DD.useOctreeForPicking) {
          rD.A.TransformToRef(zD, DD.getWorldMatrix(), this._tempRay);
          return DD._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.oB._getDefaultSubMeshCandidates(DD)
      }
      getCollidingSubMeshCandidates(DD, zD) {
        if (DD._submeshesOctree && DD.useOctreeForCollisions) {
          const wD = zD._velocityWorldLength + Math.max(zD._radius.x, zD._radius.y, zD._radius.z);
          return DD._submeshesOctree.intersects(zD._basePointWorld, wD)
        }
        return this.oB._getDefaultSubMeshCandidates(DD)
      }
      rebuild() {}
      dispose() {}
    }
    let AD = !1;
    AD || (AD = !0, pD.e.prototype.createOrUpdateSelectionOctree = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        wD = this._getComponent(LD.d.NAME_OCTREE);
      wD || (wD = new RD(this), this.ApD(wD)), this.vpD || (this.vpD = new gD.d(gD.d.CreationFuncForMeshes, DD, zD));
      const pD = this.getWorldExtends();
      return this.vpD.update(pD.min, pD.max, this.meshes), this.vpD
    }, Object.defineProperty(pD.e.prototype, "selectionOctree", {
      get: function() {
        return this.vpD
      },
      enumerable: !0,
      configurable: !0
    }), KD.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const wD = this.Ul();
      let pD = wD._getComponent(LD.d.NAME_OCTREE);
      pD || (pD = new RD(wD), wD.ApD(pD)), this._submeshesOctree || (this._submeshesOctree = new gD.d(gD.d.CreationFuncForSubMeshes, DD, zD)), this.computeWorldMatrix(!0);
      const sD = this.FW().boundingBox;
      return this._submeshesOctree.update(sD.minimumWorld, sD.maximumWorld, this.QE), this._submeshesOctree
    })
  },
  41460: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => AD,
      e: () => TD,
      h: () => BD,
      l: () => ID,
      o: () => fD,
      p: () => CD,
      r: () => PD,
      t: () => QD,
      w: () => VD,
      y: () => XD
    });
    var pD = wD(37088),
      sD = wD(37079),
      KD = wD(37094),
      rD = wD(40231),
      LD = wD(40063),
      cD = wD(37110),
      gD = wD(40124);
    const RD = {
      internalPickerForMesh: void 0
    };
    class AD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pD.b;
        this.origin = DD, this.direction = zD, this.length = wD, this.epsilon = sD
      }
      clone() {
        return new AD(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const pD = AD._TmpVector3[0].Z2(DD.x - wD, DD.y - wD, DD.z - wD),
          sD = AD._TmpVector3[1].Z2(zD.x + wD, zD.y + wD, zD.z + wD);
        let KD, rD, LD, cD, gD = 0,
          RD = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < pD.x || this.origin.x > sD.x) return !1
        } else if (KD = 1 / this.direction.x, rD = (pD.x - this.origin.x) * KD, LD = (sD.x - this.origin.x) * KD, LD === -1 / 0 && (LD = 1 / 0), rD > LD && (cD = rD, rD = LD, LD = cD), gD = Math.max(rD, gD), RD = Math.min(LD, RD), gD > RD) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < pD.y || this.origin.y > sD.y) return !1
        } else if (KD = 1 / this.direction.y, rD = (pD.y - this.origin.y) * KD, LD = (sD.y - this.origin.y) * KD, LD === -1 / 0 && (LD = 1 / 0), rD > LD && (cD = rD, rD = LD, LD = cD), gD = Math.max(rD, gD), RD = Math.min(LD, RD), gD > RD) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < pD.z || this.origin.z > sD.z) return !1
        } else if (KD = 1 / this.direction.z, rD = (pD.z - this.origin.z) * KD, LD = (sD.z - this.origin.z) * KD, LD === -1 / 0 && (LD = 1 / 0), rD > LD && (cD = rD, rD = LD, LD = cD), gD = Math.max(rD, gD), RD = Math.min(LD, RD), gD > RD) return !1;
        return !0
      }
      intersectsBox(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(DD.minimum, DD.maximum, zD)
      }
      intersectsSphere(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = DD.center.x - this.origin.x,
          pD = DD.center.y - this.origin.y,
          sD = DD.center.z - this.origin.z,
          KD = wD * wD + pD * pD + sD * sD,
          rD = DD.radius + zD,
          LD = rD * rD;
        if (KD <= LD) return !0;
        const cD = wD * this.direction.x + pD * this.direction.y + sD * this.direction.z;
        if (cD < 0) return !1;
        return KD - cD * cD <= LD
      }
      intersectsTriangle(DD, zD, wD) {
        const pD = AD._TmpVector3[0],
          KD = AD._TmpVector3[1],
          LD = AD._TmpVector3[2],
          cD = AD._TmpVector3[3],
          gD = AD._TmpVector3[4];
        zD.subtractToRef(DD, pD), wD.subtractToRef(DD, KD), sD.s.CrossToRef(this.direction, KD, LD);
        const RD = sD.s.Dot(pD, LD);
        if (0 === RD) return null;
        const UD = 1 / RD;
        this.origin.subtractToRef(DD, cD);
        const fD = sD.s.Dot(cD, LD) * UD;
        if (fD < -this.epsilon || fD > 1 + this.epsilon) return null;
        sD.s.CrossToRef(cD, pD, gD);
        const ID = sD.s.Dot(this.direction, gD) * UD;
        if (ID < -this.epsilon || fD + ID > 1 + this.epsilon) return null;
        const BD = sD.s.Dot(KD, gD) * UD;
        return BD > this.length || BD < 0 ? null : new rD.d(1 - fD - ID, fD, BD)
      }
      intersectsPlane(DD) {
        let zD;
        const wD = sD.s.Dot(DD.normal, this.direction);
        if (Math.abs(wD) < 9.99999997475243e-7) return null;
        {
          const pD = sD.s.Dot(DD.normal, this.origin);
          return zD = (-DD.d - pD) / wD, zD < 0 ? zD < -9.99999997475243e-7 ? null : 0 : zD
        }
      }
      intersectsAxis(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (DD) {
          case "y": {
            const DD = (this.origin.y - zD) / this.direction.y;
            return DD > 0 ? null : new sD.s(this.origin.x + this.direction.x * -DD, zD, this.origin.z + this.direction.z * -DD)
          }
          case "x": {
            const DD = (this.origin.x - zD) / this.direction.x;
            return DD > 0 ? null : new sD.s(zD, this.origin.y + this.direction.y * -DD, this.origin.z + this.direction.z * -DD)
          }
          case "z": {
            const DD = (this.origin.z - zD) / this.direction.z;
            return DD > 0 ? null : new sD.s(this.origin.x + this.direction.x * -DD, this.origin.y + this.direction.y * -DD, zD)
          }
          default:
            return null
        }
      }
      AsD(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KD = arguments.length > 4 ? arguments[4] : void 0,
          rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const LD = sD.n.Matrix[0];
        return DD.getWorldMatrix().invertToRef(LD), this._tmpRay ? AD.TransformToRef(this, LD, this._tmpRay) : this._tmpRay = AD.Transform(this, LD), DD.intersects(this._tmpRay, zD, wD, pD, KD, rD)
      }
      intersectsMeshes(DD, zD, wD) {
        wD ? wD.length = 0 : wD = [];
        for (let pD = 0; pD < DD.length; pD++) {
          const sD = this.AsD(DD[pD], zD);
          sD.hit && wD.push(sD)
        }
        return wD.sort(this._comparePickingInfo), wD
      }
      _comparePickingInfo(DD, zD) {
        return DD.distance < zD.distance ? -1 : DD.distance > zD.distance ? 1 : 0
      }
      intersectionSegment(DD, zD, wD) {
        const pD = this.origin,
          KD = sD.n.WI[0],
          rD = sD.n.WI[1],
          LD = sD.n.WI[2],
          cD = sD.n.WI[3];
        zD.subtractToRef(DD, KD), this.direction.scaleToRef(AD._Rayl, LD), pD.addToRef(LD, rD), DD.subtractToRef(pD, cD);
        const gD = sD.s.Dot(KD, KD),
          RD = sD.s.Dot(KD, LD),
          UD = sD.s.Dot(LD, LD),
          fD = sD.s.Dot(KD, cD),
          ID = sD.s.Dot(LD, cD),
          BD = gD * UD - RD * RD;
        let GD, hD, nD = BD,
          MD = BD;
        BD < AD._Smallnum ? (GD = 0, nD = 1, hD = ID, MD = UD) : (GD = RD * ID - UD * fD, hD = gD * ID - RD * fD, GD < 0 ? (GD = 0, hD = ID, MD = UD) : GD > nD && (GD = nD, hD = ID + RD, MD = UD)), hD < 0 ? (hD = 0, -fD < 0 ? GD = 0 : -fD > gD ? GD = nD : (GD = -fD, nD = gD)) : hD > MD && (hD = MD, -fD + RD < 0 ? GD = 0 : -fD + RD > gD ? GD = nD : (GD = -fD + RD, nD = gD));
        const OD = Math.abs(GD) < AD._Smallnum ? 0 : GD / nD,
          JD = Math.abs(hD) < AD._Smallnum ? 0 : hD / MD,
          ED = sD.n.WI[4];
        LD.scaleToRef(JD, ED);
        const QD = sD.n.WI[5];
        KD.scaleToRef(OD, QD), QD.addInPlace(cD);
        const XD = sD.n.WI[6];
        QD.subtractToRef(ED, XD);
        return JD > 0 && JD <= this.length && XD.lengthSquared() < wD * wD ? QD.length() : -1
      }
      update(DD, zD, wD, pD, KD, rD, LD) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          AD._RayDistant || (AD._RayDistant = AD.Zero()), AD._RayDistant.unprojectRayToRef(DD, zD, wD, pD, sD.e.IdentityReadOnly, rD, LD);
          const cD = sD.n.Matrix[0];
          KD.invertToRef(cD), AD.TransformToRef(AD._RayDistant, cD, this)
        } else this.unprojectRayToRef(DD, zD, wD, pD, KD, rD, LD);
        return this
      }
      static Zero() {
        return new AD(sD.s.Zero(), sD.s.Zero())
      }
      static CreateNew(DD, zD, wD, pD, sD, KD, rD) {
        return AD.Zero().update(DD, zD, wD, pD, sD, KD, rD)
      }
      static CreateNewFromTo(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.e.IdentityReadOnly;
        const pD = new AD(new sD.s(0, 0, 0), new sD.s(0, 0, 0));
        return AD.CreateFromToToRef(DD, zD, pD, wD)
      }
      static CreateFromToToRef(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sD.e.IdentityReadOnly;
        wD.origin.pC(DD);
        const KD = zD.subtractToRef(DD, wD.direction),
          rD = Math.sqrt(KD.x * KD.x + KD.y * KD.y + KD.z * KD.z);
        return wD.length = rD, wD.direction.normalize(), AD.TransformToRef(wD, pD, wD)
      }
      static Transform(DD, zD) {
        const wD = new AD(new sD.s(0, 0, 0), new sD.s(0, 0, 0));
        return AD.TransformToRef(DD, zD, wD), wD
      }
      static TransformToRef(DD, zD, wD) {
        sD.s.TransformCoordinatesToRef(DD.origin, zD, wD.origin), sD.s.TransformNormalToRef(DD.direction, zD, wD.direction), wD.length = DD.length, wD.epsilon = DD.epsilon;
        const pD = wD.direction,
          KD = pD.length();
        if (0 !== KD && 1 !== KD) {
          const DD = 1 / KD;
          pD.x *= DD, pD.y *= DD, pD.z *= DD, wD.length *= KD
        }
        return wD
      }
      unprojectRayToRef(DD, zD, wD, pD, KD, rD, LD) {
        const gD = sD.n.Matrix[0];
        KD.multiplyToRef(rD, gD), gD.multiplyToRef(LD, gD), gD.invert();
        const RD = cD.d.LastCreatedEngine,
          AD = sD.n.WI[0];
        AD.x = DD / wD * 2 - 1, AD.y = -(zD / pD * 2 - 1), AD.z = RD?.OpD ? 1 : RD?.isNDCHalfZRange ? 0 : -1;
        const UD = sD.n.WI[1].Z2(AD.x, AD.y, 1 - 1e-8),
          fD = sD.n.WI[2],
          ID = sD.n.WI[3];
        sD.s.TransformCoordinatesToRef(AD, gD, fD), sD.s.TransformCoordinatesToRef(UD, gD, ID), this.origin.pC(fD), ID.subtractToRef(fD, this.direction), this.direction.normalize()
      }
    }

    function UD(DD, zD, wD, pD, sD) {
      let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const rD = AD.Zero();
      return fD(DD, zD, wD, pD, rD, sD, KD), rD
    }

    function fD(DD, zD, wD, pD, KD, rD) {
      let LD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const gD = DD.iI();
      if (!rD && !(rD = DD.activeCamera) && !(rD = DD.cameraToUseForPointers)) return DD;
      const RD = rD.viewport,
        AD = gD.getRenderHeight(),
        {
          x: UD,
          y: fD,
          width: ID,
          height: BD
        } = RD.toGlobal(gD.getRenderWidth(), AD),
        GD = 1 / gD.getHardwareScalingLevel();
      return zD = zD * GD - UD, wD = wD * GD - (AD - fD - BD), KD.update(zD, wD, ID, BD, pD || sD.e.IdentityReadOnly, LD ? sD.e.IdentityReadOnly : rD.getViewMatrix(), rD.getProjectionMatrix(), cD), DD
    }

    function ID(DD, zD, wD, pD) {
      const sD = AD.Zero();
      return BD(DD, zD, wD, sD, pD), sD
    }

    function BD(DD, zD, wD, pD, KD) {
      if (!LD.c) return DD;
      const rD = DD.iI();
      if (!KD && !(KD = DD.activeCamera) && !(KD = DD.cameraToUseForPointers)) throw new Error("Active camera not set");
      const cD = KD.viewport,
        gD = rD.getRenderHeight(),
        {
          x: RD,
          y: AD,
          width: UD,
          height: fD
        } = cD.toGlobal(rD.getRenderWidth(), gD),
        ID = sD.e.Identity(),
        BD = 1 / rD.getHardwareScalingLevel();
      return zD = zD * BD - RD, wD = wD * BD - (gD - AD - fD), pD.update(zD, wD, UD, fD, ID, ID, KD.getProjectionMatrix()), DD
    }

    function GD(DD, zD, wD, pD, sD, KD, rD, LD) {
      return hD(DD, wD, pD, zD(pD, wD.enableDistantPicking), sD, KD, rD, LD)
    }

    function hD(DD, zD, wD, pD, sD, KD, rD, LD) {
      const cD = zD.intersects(pD, sD, rD, KD, wD, LD);
      return cD && cD.hit ? !sD && null != DD && cD.distance >= DD.distance ? null : cD : null
    }

    function nD(DD, zD) {
      return "InstancedLinesMesh" === DD || "LinesMesh" === DD ? zD.intersectionThreshold : 0
    }

    function MD(DD) {
      const zD = DD.getClassName();
      if ("GreasedLineMesh" === zD) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const wD = DD.rawBoundingInfo;
      return {
        rawBoundingInfo: wD,
        intersectionThreshold: wD ? nD(zD, DD) : 0
      }
    }

    function OD(DD, zD, wD, pD, sD) {
      const KD = DD(wD, zD.enableDistantPicking);
      return KD.intersectsSphere(pD.FpD, sD) && KD.intersectsBox(pD.boundingBox, sD) ? KD : null
    }

    function JD(DD, zD, wD, pD, KD, rD) {
      let cD = null;
      const gD = !!(DD.activeCameras && DD.activeCameras.length > 1 && DD.cameraToUseForPointers !== DD.activeCamera),
        AD = DD.cameraToUseForPointers || DD.activeCamera,
        UD = RD.internalPickerForMesh || GD,
        fD = UD === GD;
      for (let LD = 0; LD < DD.meshes.length; LD++) {
        const RD = DD.meshes[LD];
        if (wD) {
          if (!wD(RD, -1)) continue
        } else if (!RD.isEnabled() || !RD.isVisible || !RD.uB) continue;
        const ID = gD && RD.isWorldMatrixCameraDependent(),
          BD = RD.computeWorldMatrix(ID, AD);
        if (RD.hasThinInstances && RD.WzD) {
          const DD = UD(cD, zD, RD, BD, !0, !0, rD);
          if (DD) {
            if (KD) return DD;
            const {
              rawBoundingInfo: LD,
              intersectionThreshold: gD
            } = MD(RD), AD = RD._thinInstanceDataStorage.matrixData;
            if (AD) {
              const DD = sD.n.Matrix[0],
                ID = sD.n.Matrix[1],
                GD = Math.min(RD.A4, AD.length >> 4);
              for (let nD = 0; nD < GD; nD++) {
                if (wD && !wD(RD, nD)) continue;
                sD.e.FromArrayToRef(AD, nD << 4, DD), DD.multiplyToRef(BD, ID);
                const GD = fD && LD ? OD(zD, RD, ID, LD, gD) : null;
                if (fD && LD && !GD) continue;
                const MD = fD && GD ? hD(cD, RD, ID, GD, pD, KD, rD, !0) : UD(cD, zD, RD, ID, pD, KD, rD, !0);
                if (MD && (cD = MD, cD.thinInstanceIndex = nD, pD)) return cD
              }
            }
          }
        } else {
          const DD = UD(cD, zD, RD, BD, pD, KD, rD);
          if (DD && (cD = DD, pD)) return cD
        }
      }
      return cD || new LD.c
    }

    function ED(DD, zD, wD, pD) {
      if (!LD.c) return null;
      const KD = [],
        rD = !!(DD.activeCameras && DD.activeCameras.length > 1 && DD.cameraToUseForPointers !== DD.activeCamera),
        cD = DD.cameraToUseForPointers || DD.activeCamera,
        gD = RD.internalPickerForMesh || GD,
        AD = gD === GD;
      for (let LD = 0; LD < DD.meshes.length; LD++) {
        const RD = DD.meshes[LD];
        if (wD) {
          if (!wD(RD, -1)) continue
        } else if (!RD.isEnabled() || !RD.isVisible || !RD.uB) continue;
        const UD = rD && RD.isWorldMatrixCameraDependent(),
          fD = RD.computeWorldMatrix(UD, cD);
        if (RD.hasThinInstances && RD.WzD) {
          if (gD(null, zD, RD, fD, !0, !0, pD)) {
            const {
              rawBoundingInfo: DD,
              intersectionThreshold: rD
            } = MD(RD), LD = RD._thinInstanceDataStorage.matrixData;
            if (LD) {
              const cD = sD.n.Matrix[0],
                UD = sD.n.Matrix[1],
                ID = Math.min(RD.A4, LD.length >> 4);
              for (let BD = 0; BD < ID; BD++) {
                if (wD && !wD(RD, BD)) continue;
                sD.e.FromArrayToRef(LD, BD << 4, cD), cD.multiplyToRef(fD, UD);
                const ID = AD && DD ? OD(zD, RD, UD, DD, rD) : null;
                if (AD && DD && !ID) continue;
                const GD = AD && ID ? hD(null, RD, UD, ID, !1, !1, pD, !0) : gD(null, zD, RD, UD, !1, !1, pD, !0);
                GD && (GD.thinInstanceIndex = BD, KD.push(GD))
              }
            }
          }
        } else {
          const DD = gD(null, zD, RD, fD, !1, !1, pD);
          DD && KD.push(DD)
        }
      }
      return KD
    }

    function QD(DD, zD, wD, pD, KD, rD) {
      if (!LD.c) return null;
      const cD = JD(DD, (pD => (DD._tempPickingRay || (DD._tempPickingRay = AD.Zero()), fD(DD, zD, wD, pD, DD._tempPickingRay, rD || null), DD._tempPickingRay)), pD, KD, !0);
      return cD && (cD.ray = UD(DD, zD, wD, sD.e.Identity(), rD || null)), cD
    }

    function XD(DD, zD, wD, pD, KD, rD, LD) {
      const cD = JD(DD, ((pD, sD) => (DD._tempPickingRay || (DD._tempPickingRay = AD.Zero()), fD(DD, zD, wD, pD, DD._tempPickingRay, rD || null, !1, sD), DD._tempPickingRay)), pD, KD, !1, LD);
      return cD && (cD.ray = UD(DD, zD, wD, sD.e.Identity(), rD || null)), cD
    }

    function VD(DD, zD, wD, pD, KD) {
      const rD = JD(DD, (wD => (DD._pickWithRayInverseMatrix || (DD._pickWithRayInverseMatrix = sD.e.Identity()), wD.invertToRef(DD._pickWithRayInverseMatrix), DD._cachedRayForTransform || (DD._cachedRayForTransform = AD.Zero()), AD.TransformToRef(zD, DD._pickWithRayInverseMatrix, DD._cachedRayForTransform), DD._cachedRayForTransform)), wD, pD, !1, KD);
      return rD && (rD.ray = zD), rD
    }

    function PD(DD, zD, wD, pD, sD, KD) {
      return ED(DD, (pD => UD(DD, zD, wD, pD, sD || null)), pD, KD)
    }

    function CD(DD, zD, wD, pD) {
      return ED(DD, (wD => (DD._pickWithRayInverseMatrix || (DD._pickWithRayInverseMatrix = sD.e.Identity()), wD.invertToRef(DD._pickWithRayInverseMatrix), DD._cachedRayForTransform || (DD._cachedRayForTransform = AD.Zero()), AD.TransformToRef(zD, DD._pickWithRayInverseMatrix, DD._cachedRayForTransform), DD._cachedRayForTransform)), wD, pD)
    }

    function xD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        pD = arguments.length > 3 ? arguments[3] : void 0,
        KD = arguments.length > 4 ? arguments[4] : void 0;
      pD || (pD = DD.getWorldMatrix()), zD.length = wD, KD ? zD.origin.pC(KD) : zD.origin.pC(DD.position);
      const rD = sD.n.WI[2];
      rD.set(0, 0, DD._scene.useRightHandedSystem ? -1 : 1);
      const LD = sD.n.WI[3];
      return sD.s.TransformNormalToRef(rD, pD, LD), sD.s.NormalizeToRef(LD, zD.direction), zD
    }

    function TD(DD, zD) {
      zD && (zD.prototype.getForwardRay = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        return xD(this, new AD(sD.s.Zero(), sD.s.Zero(), DD), DD, zD, wD)
      }, zD.prototype.getForwardRayToRef = function(DD) {
        return xD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), DD && (gD.b._IsPickingAvailable = !0, DD.prototype.createPickingRay = function(DD, zD, wD, pD) {
        return UD(this, DD, zD, wD, pD, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    AD._TmpVector3 = (0, KD.b)(6, sD.s.Zero), AD._RayDistant = AD.Zero(), AD._Smallnum = 1e-8, AD._Rayl = 1e9
  },
  41451: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD.A
    });
    var pD = wD(40022),
      sD = wD(40148),
      KD = wD(41460);
    let rD = !1;
    rD || (rD = !0, (0, KD.e)(pD.e, sD.c), pD.e.prototype.createPickingRayToRef = function(DD, zD, wD, pD, sD) {
      let rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        LD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, KD.o)(this, DD, zD, wD, pD, sD, rD, LD)
    }, pD.e.prototype.createPickingRayInCameraSpace = function(DD, zD, wD) {
      return (0, KD.l)(this, DD, zD, wD)
    }, pD.e.prototype.createPickingRayInCameraSpaceToRef = function(DD, zD, wD, pD) {
      return (0, KD.h)(this, DD, zD, wD, pD)
    }, pD.e.prototype.pickWithBoundingInfo = function(DD, zD, wD, pD, sD) {
      return (0, KD.t)(this, DD, zD, wD, pD, sD)
    }, pD.e.prototype.HU = function(DD, zD, wD, pD, sD, rD) {
      let LD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, KD.y)(this, DD, zD, wD, pD, sD, rD, LD)
    }, pD.e.prototype.pickWithRay = function(DD, zD, wD, pD) {
      return (0, KD.w)(this, DD, zD, wD, pD)
    }, pD.e.prototype.multiPick = function(DD, zD, wD, pD, sD) {
      return (0, KD.r)(this, DD, zD, wD, pD, sD)
    }, pD.e.prototype.multiPickWithRay = function(DD, zD, wD) {
      return (0, KD.p)(this, DD, zD, wD)
    })
  },
  41465: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37079),
      rD = wD(40189),
      LD = wD(41471),
      cD = wD(40155),
      gD = wD(37134);
    let RD = (() => {
        var DD;
        let zD, wD, cD, gD, RD, AD, UD, fD, ID = LD.c,
          BD = [],
          GD = [],
          hD = [],
          nD = [],
          MD = [],
          OD = [],
          JD = [],
          ED = [],
          QD = [],
          XD = [],
          VD = [],
          PD = [],
          CD = [];
        return DD = class extends ID {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(DD) {
            this._shadowFrustumSize = DD, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(DD) {
            this._shadowOrthoScale = DD, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(DD) {
            this._orthoLeft = DD
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(DD) {
            this._orthoRight = DD
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(DD) {
            this._orthoTop = DD
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(DD) {
            this._orthoBottom = DD
          }
          constructor(DD, zD, wD, sD) {
            super(DD, wD, sD), this._shadowFrustumSize = ((0, pD.m)(this, BD), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, pD.m)(this, GD, !0), this.autoCalcShadowZBounds = ((0, pD.m)(this, hD), (0, pD.m)(this, nD, !1)), this._orthoLeft = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, Number.MAX_VALUE)), this._orthoRight = ((0, pD.m)(this, JD), (0, pD.m)(this, ED, Number.MIN_VALUE)), this._orthoTop = ((0, pD.m)(this, QD), (0, pD.m)(this, XD, Number.MIN_VALUE)), this._orthoBottom = ((0, pD.m)(this, VD), (0, pD.m)(this, PD, Number.MAX_VALUE)), (0, pD.m)(this, CD), this.position = zD.scale(-1), this.direction = zD
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return rD.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(DD, zD, wD) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(DD) : this._setDefaultAutoExtendShadowProjectionMatrix(DD, zD, wD)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(DD) {
            const zD = this.Ul().activeCamera;
            KD.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : zD ? zD.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : zD ? zD.maxZ : 1e4, DD, this.Ul().iI().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(DD, zD, wD) {
            const pD = this.Ul().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const DD = KD.s.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let pD = Number.MAX_VALUE,
                sD = -Number.MAX_VALUE;
              for (let rD = 0; rD < wD.length; rD++) {
                const LD = wD[rD];
                if (!LD) continue;
                const cD = LD.FW().boundingBox;
                for (let wD = 0; wD < cD.vectorsWorld.length; wD++) KD.s.TransformCoordinatesToRef(cD.vectorsWorld[wD], zD, DD), DD.x < this._orthoLeft && (this._orthoLeft = DD.x), DD.y < this._orthoBottom && (this._orthoBottom = DD.y), DD.x > this._orthoRight && (this._orthoRight = DD.x), DD.y > this._orthoTop && (this._orthoTop = DD.y), this.autoCalcShadowZBounds && (DD.z < pD && (pD = DD.z), DD.z > sD && (sD = DD.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = pD, this._shadowMaxZ = sD)
            }
            const sD = this._orthoRight - this._orthoLeft,
              rD = this._orthoTop - this._orthoBottom,
              LD = void 0 !== this.shadowMinZ ? this.shadowMinZ : pD?.minZ || 0,
              cD = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : pD?.maxZ || 1e4,
              gD = this.Ul().iI().OpD;
            KD.e.OrthoOffCenterLHToRef(this._orthoLeft - sD * this.shadowOrthoScale, this._orthoRight + sD * this.shadowOrthoScale, this._orthoBottom - rD * this.shadowOrthoScale, this._orthoTop + rD * this.shadowOrthoScale, gD ? cD : LD, gD ? LD : cD, DD, this.Ul().iI().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(DD, zD) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, zD), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, zD), this)
          }
          transferToNodeMaterialEffect(DD, zD) {
            return this.computeTransformedInformation() ? (DD.setFloat3(zD, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (DD.setFloat3(zD, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(DD) {
            const zD = this._scene.iI();
            return !zD.OpD && zD.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(DD) {
            const zD = this._scene.iI();
            return zD.OpD && zD.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(DD, zD) {
            DD["DIRLIGHT" + zD] = !0
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(ID[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)("orthoLeft")], AD = [(0, sD.C)("orthoRight")], UD = [(0, sD.C)("orthoTop")], fD = [(0, sD.C)("orthoBottom")], (0, pD.i)(DD, null, zD, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: DD => "shadowFrustumSize" in DD,
              get: DD => DD.shadowFrustumSize
            },
            metadata: KD
          }, null, BD), (0, pD.i)(DD, null, wD, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "shadowOrthoScale" in DD,
              get: DD => DD.shadowOrthoScale
            },
            metadata: KD
          }, null, BD), (0, pD.i)(null, null, cD, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: DD => "autoUpdateExtends" in DD,
              get: DD => DD.autoUpdateExtends,
              set: (DD, zD) => {
                DD.autoUpdateExtends = zD
              }
            },
            metadata: KD
          }, GD, hD), (0, pD.i)(null, null, gD, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: DD => "autoCalcShadowZBounds" in DD,
              get: DD => DD.autoCalcShadowZBounds,
              set: (DD, zD) => {
                DD.autoCalcShadowZBounds = zD
              }
            },
            metadata: KD
          }, nD, MD), (0, pD.i)(null, null, RD, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoLeft" in DD,
              get: DD => DD._orthoLeft,
              set: (DD, zD) => {
                DD._orthoLeft = zD
              }
            },
            metadata: KD
          }, OD, JD), (0, pD.i)(null, null, AD, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoRight" in DD,
              get: DD => DD._orthoRight,
              set: (DD, zD) => {
                DD._orthoRight = zD
              }
            },
            metadata: KD
          }, ED, QD), (0, pD.i)(null, null, UD, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoTop" in DD,
              get: DD => DD._orthoTop,
              set: (DD, zD) => {
                DD._orthoTop = zD
              }
            },
            metadata: KD
          }, XD, VD), (0, pD.i)(null, null, fD, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoBottom" in DD,
              get: DD => DD._orthoBottom,
              set: (DD, zD) => {
                DD._orthoBottom = zD
              }
            },
            metadata: KD
          }, PD, CD), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      AD = !1;
    AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_1", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.DirectionalLight", RD))
  },
  41482: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => az
    });
    var pD = wD(38689),
      sD = wD(37119),
      KD = wD(37079),
      rD = wD(40066),
      LD = wD(41485),
      cD = wD(37110),
      gD = wD(40211),
      RD = wD(37273),
      AD = wD(38692),
      UD = wD(38658),
      fD = wD(37125);
    class ID {
      constructor() {
        this.direction1 = new KD.s(0, 1, 0), this.direction2 = new KD.s(0, 1, 0)
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = (0, fD.RandomRange)(this.direction1.x, this.direction2.x),
          rD = (0, fD.RandomRange)(this.direction1.y, this.direction2.y),
          LD = (0, fD.RandomRange)(this.direction1.z, this.direction2.z);
        pD ? zD.Z2(sD, rD, LD) : KD.s.TransformNormalFromFloatsToRef(sD, rD, LD, DD, zD)
      }
      startPositionFunction(DD, zD, wD, pD) {
        pD ? zD.Z2(0, 0, 0) : KD.s.TransformCoordinatesFromFloatsToRef(0, 0, 0, DD, zD)
      }
      clone() {
        const DD = new ID;
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(DD) {
        DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD
      }
      parse(DD) {
        KD.s.FromArrayToRef(DD.direction1, 0, this.direction1), KD.s.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
    class BD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = DD, this.radiusRange = zD, this.directionRandomizer = wD
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = wD.position.subtract(DD.getTranslation()).normalize(),
          rD = (0, fD.RandomRange)(0, this.directionRandomizer),
          LD = (0, fD.RandomRange)(0, this.directionRandomizer),
          cD = (0, fD.RandomRange)(0, this.directionRandomizer);
        sD.x += rD, sD.y += LD, sD.z += cD, sD.normalize(), pD ? zD.pC(sD) : KD.s.TransformNormalFromFloatsToRef(sD.x, sD.y, sD.z, DD, zD)
      }
      startPositionFunction(DD, zD, wD, pD) {
        const sD = this.radius - (0, fD.RandomRange)(0, this.radius * this.radiusRange),
          rD = (0, fD.RandomRange)(0, 1),
          LD = (0, fD.RandomRange)(0, 2 * Math.PI),
          cD = Math.acos(2 * rD - 1),
          gD = sD * Math.cos(LD) * Math.sin(cD),
          RD = sD * Math.cos(cD),
          AD = sD * Math.sin(LD) * Math.sin(cD);
        pD ? zD.Z2(gD, Math.abs(RD), AD) : KD.s.TransformCoordinatesFromFloatsToRef(gD, Math.abs(RD), AD, DD, zD)
      }
      clone() {
        const DD = new BD(this.radius, this.directionRandomizer);
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("radiusRange", this.radiusRange), DD.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("radiusRange", 1), DD.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.radius = this.radius, DD.radiusRange = this.radiusRange, DD.directionRandomizer = this.directionRandomizer, DD
      }
      parse(DD) {
        this.radius = DD.radius, this.radiusRange = DD.radiusRange, this.directionRandomizer = DD.directionRandomizer
      }
    }
    class GD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = DD, this.radiusRange = zD, this.directionRandomizer = wD
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = wD.position.subtract(DD.getTranslation()).normalize(),
          rD = (0, fD.RandomRange)(0, this.directionRandomizer),
          LD = (0, fD.RandomRange)(0, this.directionRandomizer),
          cD = (0, fD.RandomRange)(0, this.directionRandomizer);
        sD.x += rD, sD.y += LD, sD.z += cD, sD.normalize(), pD ? zD.pC(sD) : KD.s.TransformNormalFromFloatsToRef(sD.x, sD.y, sD.z, DD, zD)
      }
      startPositionFunction(DD, zD, wD, pD) {
        const sD = this.radius - (0, fD.RandomRange)(0, this.radius * this.radiusRange),
          rD = (0, fD.RandomRange)(0, 1),
          LD = (0, fD.RandomRange)(0, 2 * Math.PI),
          cD = Math.acos(2 * rD - 1),
          gD = sD * Math.cos(LD) * Math.sin(cD),
          RD = sD * Math.cos(cD),
          AD = sD * Math.sin(LD) * Math.sin(cD);
        pD ? zD.Z2(gD, RD, AD) : KD.s.TransformCoordinatesFromFloatsToRef(gD, RD, AD, DD, zD)
      }
      clone() {
        const DD = new GD(this.radius, this.directionRandomizer);
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("radiusRange", this.radiusRange), DD.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("radiusRange", 1), DD.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.radius = this.radius, DD.radiusRange = this.radiusRange, DD.directionRandomizer = this.directionRandomizer, DD
      }
      parse(DD) {
        this.radius = DD.radius, this.radiusRange = DD.radiusRange, this.directionRandomizer = DD.directionRandomizer
      }
    }
    class hD extends GD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KD.s(0, 1, 0),
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0);
        super(DD), this.direction1 = zD, this.direction2 = wD
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = (0, fD.RandomRange)(this.direction1.x, this.direction2.x),
          rD = (0, fD.RandomRange)(this.direction1.y, this.direction2.y),
          LD = (0, fD.RandomRange)(this.direction1.z, this.direction2.z);
        pD ? zD.Z2(sD, rD, LD) : KD.s.TransformNormalFromFloatsToRef(sD, rD, LD, DD, zD)
      }
      clone() {
        const DD = new hD(this.radius, this.direction1, this.direction2);
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("radiusRange", this.radiusRange), DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("radiusRange", 1), DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const DD = super.serialize();
        return DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD
      }
      parse(DD) {
        super.parse(DD), KD.s.FromArrayToRef(DD.direction1, 0, this.direction1), KD.s.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
    var nD = wD(38651);
    class MD {
      get radius() {
        return this._radius
      }
      set radius(DD) {
        this._radius = DD, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(DD) {
        this._angle = DD, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = wD, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = zD, this.radius = DD
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = wD.position.subtract(DD.getTranslation()).normalize(),
          rD = (0, fD.RandomRange)(0, this.directionRandomizer),
          LD = (0, fD.RandomRange)(0, this.directionRandomizer),
          cD = (0, fD.RandomRange)(0, this.directionRandomizer);
        sD.x += rD, sD.y += LD, sD.z += cD, sD.normalize(), pD ? zD.pC(sD) : KD.s.TransformNormalFromFloatsToRef(sD.x, sD.y, sD.z, DD, zD)
      }
      startPositionFunction(DD, zD, wD, pD) {
        const sD = (0, fD.RandomRange)(0, 2 * Math.PI);
        let rD;
        this.emitFromSpawnPointOnly ? rD = 1e-4 : (rD = (0, fD.RandomRange)(0, this.heightRange), rD = 1 - rD * rD);
        let LD = this._radius - (0, fD.RandomRange)(0, this._radius * this.radiusRange);
        LD *= rD;
        const cD = LD * Math.sin(sD),
          gD = LD * Math.cos(sD),
          RD = rD * this._height;
        if (pD) return zD.x = cD, zD.y = RD, void(zD.z = gD);
        KD.s.TransformCoordinatesFromFloatsToRef(cD, RD, gD, DD, zD)
      }
      clone() {
        const DD = new MD(this._radius, this._angle, this.directionRandomizer);
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat2("radius", this._radius, this.radiusRange), DD.setFloat("coneAngle", this._angle), DD.setFloat2("height", this._height, this.heightRange), DD.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 2), DD.addUniform("coneAngle", 1), DD.addUniform("height", 2), DD.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let DD = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (DD += "\n#define CONEEMITTERSPAWNPOINT"), DD
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.radius = this._radius, DD.angle = this._angle, DD.directionRandomizer = this.directionRandomizer, DD.radiusRange = this.radiusRange, DD.heightRange = this.heightRange, DD.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, DD
      }
      parse(DD) {
        this.radius = DD.radius, this.angle = DD.angle, this.directionRandomizer = DD.directionRandomizer, this.radiusRange = void 0 !== DD.radiusRange ? DD.radiusRange : 1, this.heightRange = void 0 !== DD.heightRange ? DD.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== DD.emitFromSpawnPointOnly && DD.emitFromSpawnPointOnly
      }
    }
    class OD extends MD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0),
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0);
        super(DD, zD), this.direction1 = wD, this.direction2 = pD
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = (0, fD.RandomRange)(this.direction1.x, this.direction2.x),
          rD = (0, fD.RandomRange)(this.direction1.y, this.direction2.y),
          LD = (0, fD.RandomRange)(this.direction1.z, this.direction2.z);
        pD ? zD.Z2(sD, rD, LD) : KD.s.TransformNormalFromFloatsToRef(sD, rD, LD, DD, zD)
      }
      clone() {
        const DD = new OD(this.radius, this.angle, this.direction1, this.direction2);
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        super.applyToShader(DD), DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(DD) {
        super.buildUniformLayout(DD), DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const DD = super.serialize();
        return DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD
      }
      parse(DD) {
        super.parse(DD), KD.s.FromArrayToRef(DD.direction1, 0, this.direction1), KD.s.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
    class JD {
      get mesh() {
        return this._mesh
      }
      set mesh(DD) {
        this._mesh !== DD && (this._mesh = DD, DD ? (this._indices = DD.XpD(), this._positions = DD.getVerticesData(rD.k.PositionKind), this._normals = DD.getVerticesData(rD.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = KD.s.Zero(), this._mesh = null, this.direction1 = new KD.s(0, 1, 0), this.direction2 = new KD.s(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = DD
      }
      startDirectionFunction(DD, zD, wD, pD) {
        if (this.useMeshNormalsForDirection && this._normals) return void KD.s.TransformNormalToRef(this._storedNormal, DD, zD);
        const sD = (0, fD.RandomRange)(this.direction1.x, this.direction2.x),
          rD = (0, fD.RandomRange)(this.direction1.y, this.direction2.y),
          LD = (0, fD.RandomRange)(this.direction1.z, this.direction2.z);
        pD ? zD.Z2(sD, rD, LD) : KD.s.TransformNormalFromFloatsToRef(sD, rD, LD, DD, zD)
      }
      startPositionFunction(DD, zD, wD, pD) {
        if (!this._indices || !this._positions) return;
        const sD = 3 * (Math.random() * (this._indices.length / 3) | 0),
          rD = Math.random(),
          LD = Math.random() * (1 - rD),
          cD = 1 - rD - LD,
          gD = this._indices[sD],
          RD = this._indices[sD + 1],
          AD = this._indices[sD + 2],
          UD = KD.n.WI[0],
          fD = KD.n.WI[1],
          ID = KD.n.WI[2],
          BD = KD.n.WI[3];
        KD.s.FromArrayToRef(this._positions, 3 * gD, UD), KD.s.FromArrayToRef(this._positions, 3 * RD, fD), KD.s.FromArrayToRef(this._positions, 3 * AD, ID), BD.x = rD * UD.x + LD * fD.x + cD * ID.x, BD.y = rD * UD.y + LD * fD.y + cD * ID.y, BD.z = rD * UD.z + LD * fD.z + cD * ID.z, pD ? zD.Z2(BD.x, BD.y, BD.z) : KD.s.TransformCoordinatesFromFloatsToRef(BD.x, BD.y, BD.z, DD, zD), this.useMeshNormalsForDirection && this._normals && (KD.s.FromArrayToRef(this._normals, 3 * gD, UD), KD.s.FromArrayToRef(this._normals, 3 * RD, fD), KD.s.FromArrayToRef(this._normals, 3 * AD, ID), this._storedNormal.x = rD * UD.x + LD * fD.x + cD * ID.x, this._storedNormal.y = rD * UD.y + LD * fD.y + cD * ID.y, this._storedNormal.z = rD * UD.z + LD * fD.z + cD * ID.z)
      }
      clone() {
        const DD = new JD(this.mesh);
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(DD) {
        DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD.meshId = this.mesh?.id, DD.useMeshNormalsForDirection = this.useMeshNormalsForDirection, DD
      }
      parse(DD, zD) {
        KD.s.FromArrayToRef(DD.direction1, 0, this.direction1), KD.s.FromArrayToRef(DD.direction2, 0, this.direction2), DD.meshId && zD && (this.mesh = zD.getLastMeshById(DD.meshId)), this.useMeshNormalsForDirection = DD.useMeshNormalsForDirection
      }
    }
    class ED {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(DD) {
        this._targetStopDuration !== DD && (this._targetStopDuration = DD)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(DD) {
        this._noiseTexture !== DD && (this._noiseTexture = DD, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(DD) {
        this._attractors.push(DD)
      }
      removeAttractor(DD) {
        const zD = this._attractors.indexOf(DD); - 1 !== zD && this._attractors.splice(zD, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(DD) {
        this._animationSheetEnabled !== DD && (this._animationSheetEnabled = DD)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(DD) {
        this._isAnimationSheetEnabled != DD && (this._isAnimationSheetEnabled = DD, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(DD) {
        this._useLogarithmicDepth = DD && this.Ul().iI().getCaps().fragmentDepthSupported
      }
      Ul() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(DD) {
        switch (DD) {
          case ED.BLENDMODE_MULTIPLYADD:
            return;
          case ED.BLENDMODE_ADD:
            DD = 1;
            break;
          case ED.BLENDMODE_ONEONE:
            DD = 6;
            break;
          case ED.BLENDMODE_STANDARD:
            DD = 2;
            break;
          case ED.BLENDMODE_MULTIPLY:
            DD = 4;
            break;
          case ED.BLENDMODE_SUBTRACT:
            DD = 3
        }
        this._engine.setAlphaMode(DD)
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
      addEmitRateGradient(DD, zD, wD) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, DD, zD, wD), this
      }
      removeEmitRateGradient(DD) {
        return this._removeFactorGradient(this._emitRateGradients, DD), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : KD.s.Zero()
      }
      set direction1(DD) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = DD)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : KD.s.Zero()
      }
      set direction2(DD) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = DD)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : KD.s.Zero()
      }
      set minEmitBox(DD) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = DD)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : KD.s.Zero()
      }
      set maxEmitBox(DD) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = DD)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(DD) {
        this._billboardMode !== DD && (this._billboardMode = DD, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(DD) {
        this._isBillboardBased !== DD && (this._isBillboardBased = DD, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(DD) {
        this._attachImageProcessingConfiguration(DD)
      }
      _attachImageProcessingConfiguration(DD) {
        DD !== this._imageProcessingConfiguration && (!DD && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = DD)
      }
      _reset() {}
      _addFactorGradient(DD, zD, wD, sD) {
        const KD = new pD.k(zD, wD, sD);
        DD.push(KD), DD.sort(((DD, zD) => DD.gradient < zD.gradient ? -1 : DD.gradient > zD.gradient ? 1 : 0))
      }
      _removeFactorGradient(DD, zD) {
        if (!DD) return;
        let wD = 0;
        for (const pD of DD) {
          if (pD.gradient === zD) {
            DD.splice(wD, 1);
            break
          }
          wD++
        }
      }
      _removeGradientAndTexture(DD, zD, wD) {
        if (!zD) return this;
        let pD = 0;
        for (const sD of zD) {
          if (sD.gradient === DD) {
            zD.splice(pD, 1);
            break
          }
          pD++
        }
        return wD && wD.dispose(), this
      }
      constructor(DD) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = KD.s.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new KD.s(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = ED.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new KD.r(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new KD.s(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = KD.s.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new RD.h(1, 1, 1, 1), this.color2 = new RD.h(1, 1, 1, 1), this.colorDead = new RD.h(0, 0, 0, 1), this.textureMask = new RD.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new gD.b, this.id = DD, this.name = DD
      }
      createPointEmitter(DD, zD) {
        const wD = function(DD, zD) {
          const wD = new ID;
          return wD.direction1 = DD, wD.direction2 = zD, wD
        }(DD, zD);
        return this.particleEmitterType = wD, wD
      }
      createHemisphericEmitter() {
        const DD = function() {
          return new BD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = DD, DD
      }
      createSphereEmitter() {
        const DD = function() {
          return new GD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = DD, DD
      }
      createDirectedSphereEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KD.s(0, 1, 0),
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0);
          return new hD(DD, zD, wD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KD.s(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0));
        return this.particleEmitterType = DD, DD
      }
      createCylinderEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new nD.f(DD, zD, wD, pD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = DD, DD
      }
      createDirectedCylinderEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0),
            sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new KD.s(0, 1, 0);
          return new nD.d(DD, zD, wD, pD, sD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new KD.s(0, 1, 0));
        return this.particleEmitterType = DD, DD
      }
      createConeEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new MD(DD, zD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = DD, DD
      }
      createDirectedConeEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0),
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0);
          return new OD(DD, zD, wD, pD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KD.s(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KD.s(0, 1, 0));
        return this.particleEmitterType = DD, DD
      }
      createBoxEmitter(DD, zD, wD, pD) {
        const sD = new AD.e;
        return this.particleEmitterType = sD, this.direction1 = DD, this.direction2 = zD, this.minEmitBox = wD, this.maxEmitBox = pD, sD
      }
      createMeshEmitter() {
        const DD = function() {
          return new JD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = DD, DD
      }
    }
    ED.BLENDMODE_ONEONE = 0, ED.BLENDMODE_STANDARD = 1, ED.BLENDMODE_ADD = 2, ED.BLENDMODE_MULTIPLY = 3, ED.BLENDMODE_MULTIPLYADD = 4, ED.BLENDMODE_SUBTRACT = -1;
    class QD {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new RD.h(0, 0, 0, 0), this.currentColor2 = new RD.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = KD.s.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class XD {
      constructor(DD) {
        this.particleSystem = DD, this.position = KD.s.Zero(), this.direction = KD.s.Zero(), this.color = new RD.h(0, 0, 0, 0), this.colorStep = new RD.h(0, 0, 0, 0), this.initialColor = new RD.h(0, 0, 0, 0), this.colorDead = new RD.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new KD.r(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new QD, this.id = XD._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let DD = this.age,
          zD = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === zD ? (zD = 1, DD = this._properties.randomCellOffset) : DD += this._properties.randomCellOffset);
        const wD = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let pD;
        pD = this._properties.initialSpriteCellLoop ? (0, fD.Clamp)(DD * zD % this.lifeTime / this.lifeTime) : (0, fD.Clamp)(DD * zD / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + pD * wD | 0
      }
      _inheritParticleInfoToSubEmitter(DD) {
        if (DD.particleSystem.emitter.position) {
          const zD = DD.particleSystem.emitter;
          if (zD.position.pC(this.position), DD.inheritDirection) {
            const DD = KD.n.WI[0];
            this.direction.normalizeToRef(DD), zD.setDirection(DD, 0, Math.PI / 2)
          }
        } else {
          DD.particleSystem.emitter.pC(this.position)
        }
        this.direction.scaleToRef(DD.inheritedVelocityAmount / 2, KD.n.WI[0]), DD.particleSystem._inheritedVelocityOffset.pC(KD.n.WI[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const DD of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(DD)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = XD._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(DD) {
        DD.position.pC(this.position), this._properties.initialDirection ? DD._properties.initialDirection ? DD._properties.initialDirection.pC(this._properties.initialDirection) : DD._properties.initialDirection = this._properties.initialDirection.clone() : DD._properties.initialDirection = null, DD.direction.pC(this.direction), this._properties.localPosition && (DD._properties.localPosition ? DD._properties.localPosition.pC(this._properties.localPosition) : DD._properties.localPosition = this._properties.localPosition.clone()), DD.color.pC(this.color), DD.colorStep.pC(this.colorStep), DD.initialColor.pC(this.initialColor), DD.colorDead.pC(this.colorDead), DD.lifeTime = this.lifeTime, DD.age = this.age, DD._properties.randomCellOffset = this._properties.randomCellOffset, DD.size = this.size, DD.scale.pC(this.scale), DD.angle = this.angle, DD.angularSpeed = this.angularSpeed, DD.particleSystem = this.particleSystem, DD.cellIndex = this.cellIndex, DD.id = this.id, DD._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (DD._properties.currentColorGradient = this._properties.currentColorGradient, DD._properties.currentColor1.pC(this._properties.currentColor1), DD._properties.currentColor2.pC(this._properties.currentColor2)), this._properties.currentSizeGradient && (DD._properties.currentSizeGradient = this._properties.currentSizeGradient, DD._properties.currentSize1 = this._properties.currentSize1, DD._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (DD._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, DD._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, DD._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (DD._properties.currentVelocityGradient = this._properties.currentVelocityGradient, DD._properties.currentVelocity1 = this._properties.currentVelocity1, DD._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (DD._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, DD._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, DD._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (DD._properties.currentDragGradient = this._properties.currentDragGradient, DD._properties.currentDrag1 = this._properties.currentDrag1, DD._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (DD._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, DD._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, DD._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (DD.remapData && this.remapData ? DD.remapData.pC(this.remapData) : DD.remapData = new KD.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (DD._properties.randomNoiseCoordinates1 && DD._properties.randomNoiseCoordinates2 ? (DD._properties.randomNoiseCoordinates1.pC(this._properties.randomNoiseCoordinates1), DD._properties.randomNoiseCoordinates2.pC(this._properties.randomNoiseCoordinates2)) : (DD._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), DD._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), DD.metadata = this.metadata
      }
    }
    XD._Count = 0;
    var VD = wD(41016);
    class PD {
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
      constructor(DD, zD, wD, pD) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = zD, this.bq = DD, this._scene = wD, this._host = pD, this._activeTargets = [], zD._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            MK: this._getCorrectLoopMode()
          }, this._animation.dataType === VD.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = KD.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const DD = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, DD)
        }
        if (this.bq instanceof Array) {
          let DD = 0;
          for (const zD of this.bq) this._preparePath(zD, DD), this._getOriginalValues(DD), DD++;
          this._targetIsArray = !0
        } else this._preparePath(this.bq), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const sD = zD.getEvents();
        if (sD && sD.length > 0)
          for (const KD of sD) this._events.push(KD._clone());
        this._enableBlending = DD && DD.animationPropertiesOverride ? DD.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = this._animation.targetPropertyPath;
        if (wD.length > 1) {
          let pD = DD;
          for (let DD = 0; DD < wD.length - 1; DD++) {
            const zD = wD[DD];
            if (pD = pD[zD], void 0 === pD) throw new Error(`Invalid property (${zD}) in property path (${wD.join(".")})`)
          }
          this._targetPath = wD[wD.length - 1], this._activeTargets[zD] = pD
        } else this._targetPath = wD[0], this._activeTargets[zD] = DD;
        if (void 0 === this._activeTargets[zD][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${wD.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.bq instanceof Array) {
            let DD = 0;
            for (const zD of this.bq) void 0 !== this._originalValue[DD] && this._setValue(zD, this._activeTargets[DD], this._originalValue[DD], -1, DD), DD++
          } else void 0 !== this._originalValue[0] && this._setValue(this.bq, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let DD = 0; DD < this._events.length; DD++) this._events[DD].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const DD = this._animation.runtimeAnimations.indexOf(this);
        DD > -1 && this._animation.runtimeAnimations.splice(DD, 1)
      }
      setValue(DD, zD) {
        if (this._targetIsArray)
          for (let wD = 0; wD < this.bq.length; wD++) {
            const pD = this.bq[wD];
            this._setValue(pD, this._activeTargets[wD], DD, zD, wD)
          } else this._setValue(this.bq, this._directTarget, DD, zD, 0)
      }
      _getOriginalValues() {
        let DD, zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const wD = this._activeTargets[zD];
        if (VD.d.InheritOriginalValueFromActiveAnimations) {
          const DD = this._scene._activeAnimatables;
          for (let pD = 0; pD < DD.length; pD++) {
            const sD = DD[pD]._runtimeAnimations;
            for (let DD = 0; DD < sD.length; DD++) {
              const pD = sD[DD];
              if (pD !== this && pD._targetPath === this._targetPath)
                for (let DD = 0; DD < pD._activeTargets.length; DD++)
                  if (pD._activeTargets[DD] === wD && void 0 !== pD._originalValue[DD]) return void(pD._originalValue[DD] && pD._originalValue[DD].clone ? this._originalValue[zD] = pD._originalValue[DD].clone() : this._originalValue[zD] = pD._originalValue[DD])
            }
          }
        }
        DD = wD.getLocalMatrix && "_matrix" === this._targetPath ? wD.getLocalMatrix() : wD[this._targetPath], DD && DD.clone ? this._originalValue[zD] = DD.clone() : this._originalValue[zD] = DD
      }
      _registerTargetForLateAnimationBinding(DD, zD) {
        const wD = DD.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(wD), wD._lateAnimationHolders || (wD._lateAnimationHolders = {}), wD._lateAnimationHolders[DD.targetPath] || (wD._lateAnimationHolders[DD.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: zD
        }), DD.isAdditive ? (wD._lateAnimationHolders[DD.targetPath].additiveAnimations.push(DD), wD._lateAnimationHolders[DD.targetPath].totalAdditiveWeight += DD.weight) : (wD._lateAnimationHolders[DD.targetPath].animations.push(DD), wD._lateAnimationHolders[DD.targetPath].totalWeight += DD.weight)
      }
      _setValue(DD, zD, wD, pD, sD) {
        const rD = this._scene._animationWrites,
          LD = this._scene._animationWriteCount++;
        let cD = rD[LD];
        if (cD || (cD = rD[LD] = {
            runtimeAnimation: this,
            target: DD,
            weight: pD,
            additive: !1,
            blendingFactor: 1,
            fG: !1
          }), cD.runtimeAnimation = this, cD.target = DD, cD.weight = pD, cD.additive = this.isAdditive, cD.fG = !1, this._currentActiveTarget = zD, this._weight = pD, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const DD = zD[this._targetPath];
            DD.clone ? this._originalBlendValue = DD.clone() : this._originalBlendValue = DD
          }
          this._originalBlendValue.m ? VD.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? KD.e.DecomposeLerpToRef(this._originalBlendValue, wD, this._blendingFactor, this._currentValue) : this._currentValue = KD.e.DecomposeLerp(this._originalBlendValue, wD, this._blendingFactor) : this._currentValue ? KD.e.LerpToRef(this._originalBlendValue, wD, this._blendingFactor, this._currentValue) : this._currentValue = KD.e.Lerp(this._originalBlendValue, wD, this._blendingFactor) : this._currentValue = VD.d._UniversalLerp(this._originalBlendValue, wD, this._blendingFactor);
          const pD = DD && DD.animationPropertiesOverride ? DD.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          cD.blendingFactor = this._blendingFactor, this._blendingFactor += pD
        } else cD.blendingFactor = 1, this._currentValue ? this._currentValue.pC ? this._currentValue.pC(wD) : this._currentValue = wD : this._currentValue = wD?.clone ? wD.clone() : wD; - 1 !== pD ? this._registerTargetForLateAnimationBinding(this, this._originalValue[sD]) : this._animationState.MK === VD.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[sD], zD[this._targetPath]) : zD[this._targetPath] = this._originalValue[sD] + this._currentValue : zD[this._targetPath] = this._currentValue, DD.vzD && DD.vzD(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.bq && this.bq.animationPropertiesOverride) {
          return "MorphTarget" === this.bq.getClassName?.() && null == this.bq._animationPropertiesOverride ? this._animation.MK : this.bq.animationPropertiesOverride.MK
        }
        return this._animation.MK
      }
      goToFrame(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const wD = this._animation.getKeys();
        DD < wD[0].frame ? DD = wD[0].frame : DD > wD[wD.length - 1].frame && (DD = wD[wD.length - 1].frame);
        const pD = this._events;
        if (pD.length)
          for (let KD = 0; KD < pD.length; KD++) pD[KD].onlyOnce || (pD[KD].isDone = pD[KD].frame < DD);
        this._currentFrame = DD;
        const sD = this._animation._interpolate(DD, this._animationState);
        this.setValue(sD, zD)
      }
      _prepareForSpeedRatioChange(DD) {
        const zD = this._previousElapsedTime * (this._animation.framePerSecond * DD) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - zD
      }
      animate(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const rD = this._animation,
          LD = rD.targetPropertyPath;
        if (!LD || LD.length < 1) return this._stopped = !0, !1;
        let cD, gD = !0;
        const RD = this._events;
        let AD;
        if (this._coreRuntimeAnimation) AD = wD - zD, cD = this._coreRuntimeAnimation.currentFrame, this._currentFrame = cD, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let KD;
          (zD < this._minFrame || zD > this._maxFrame) && (zD = this._minFrame), (wD < this._minFrame || wD > this._maxFrame) && (wD = this._maxFrame), AD = wD - zD;
          let LD = DD * (rD.framePerSecond * sD) / 1e3 + this._absoluteFrameOffset,
            UD = 0,
            fD = !1;
          const ID = pD && this._animationState.MK === VD.d.ANIMATIONLOOPMODE_YOYO;
          if (ID) {
            const DD = (LD - zD) / AD,
              wD = Math.sin(DD * Math.PI);
            LD = Math.abs(wD) * AD + zD;
            const pD = wD >= 0 ? 1 : -1;
            this._yoyoDirection !== pD && (fD = !0), this._yoyoDirection = pD
          }
          if (this._previousElapsedTime = DD, this._previousAbsoluteFrame = LD, !pD && wD >= zD && (LD >= AD && sD > 0 || LD <= 0 && sD < 0)) gD = !1, UD = rD.evaluate(wD);
          else if (!pD && zD >= wD && (LD <= AD && sD < 0 || LD >= 0 && sD > 0)) gD = !1, UD = rD.evaluate(zD);
          else if (this._animationState.MK !== VD.d.ANIMATIONLOOPMODE_CYCLE) {
            const DD = wD.toString() + zD.toString();
            if (!this._offsetsCache[DD]) {
              this._animationState.repeatCount = 0, this._animationState.MK = VD.d.ANIMATIONLOOPMODE_CYCLE;
              const pD = rD._interpolate(zD, this._animationState),
                sD = rD._interpolate(wD, this._animationState);
              switch (this._animationState.MK = this._getCorrectLoopMode(), rD.dataType) {
                case VD.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[DD] = sD - pD;
                  break;
                case VD.d.ANIMATIONTYPE_QUATERNION:
                case VD.d.ANIMATIONTYPE_VECTOR3:
                case VD.d.ANIMATIONTYPE_VECTOR2:
                case VD.d.ANIMATIONTYPE_SIZE:
                case VD.d.ANIMATIONTYPE_COLOR3:
                case VD.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[DD] = sD.subtract(pD)
              }
              this._highLimitsCache[DD] = sD
            }
            UD = this._highLimitsCache[DD], KD = this._offsetsCache[DD]
          }
          if (void 0 === KD) switch (rD.dataType) {
            case VD.d.ANIMATIONTYPE_FLOAT:
              KD = 0;
              break;
            case VD.d.ANIMATIONTYPE_QUATERNION:
              KD = VD.m;
              break;
            case VD.d.ANIMATIONTYPE_VECTOR3:
              KD = VD.v;
              break;
            case VD.d.ANIMATIONTYPE_VECTOR2:
              KD = VD.s;
              break;
            case VD.d.ANIMATIONTYPE_SIZE:
              KD = VD.o;
              break;
            case VD.d.ANIMATIONTYPE_COLOR3:
              KD = VD.h;
              break;
            case VD.d.ANIMATIONTYPE_COLOR4:
              KD = VD.k
          }
          const BD = this._host ? this._host.syncRoot : null;
          let GD, hD = this._playbackFrames,
            nD = !1;
          if (BD) {
            const DD = BD.toFrame - BD.fromFrame,
              wD = BD.masterFrame,
              pD = (wD - BD.fromFrame) / DD;
            cD = zD + AD * pD;
            const sD = BD.getAnimations()[0];
            if (sD && 0 !== DD) {
              const DD = AD * pD,
                zD = sD._playbackTo - sD._playbackFrom;
              if (0 !== zD && sD._playbackFrom <= BD.fromFrame && sD._playbackTo >= BD.toFrame) {
                hD = AD * Math.round((sD._playbackFrames - (sD._currentFrame - sD._playbackFrom)) / zD) + DD
              } else nD = (wD - this._playbackSyncMasterFrame) * (sD._playbackFrames - this._playbackSyncMasterPlayed) < 0, hD = DD;
              nD = nD || sD._playbackJumped, this._playbackSyncMasterPlayed = sD._playbackFrames, this._playbackSyncMasterFrame = wD
            }
          } else cD = LD > 0 && zD > wD || LD < 0 && zD < wD ? gD && 0 !== AD ? wD + LD % AD : zD : gD && 0 !== AD ? zD + LD % AD : wD;
          if (!ID && (sD > 0 && this.currentFrame > cD || sD < 0 && this.currentFrame < cD) || ID && fD) {
            this._onLoop();
            for (let DD = 0; DD < RD.length; DD++) RD[DD].onlyOnce || (RD[DD].isDone = !1);
            this._animationState.key = sD > 0 ? 0 : rD.getKeys().length - 1
          }
          if (this._currentFrame = cD, this._animationState.repeatCount = 0 === AD ? 0 : LD / AD | 0, this._animationState.highLimitValue = UD, this._animationState.offsetValue = KD, this._playbackFrom = zD, this._playbackTo = wD, this._playbackJumped = nD, this._playbackSyncRoot = BD, BD) GD = hD;
          else if (gD) GD = ID ? cD === zD && LD === wD ? AD : cD - zD : LD;
          else {
            const DD = 0 !== AD ? Math.floor(this._playbackFrames / AD) : 0;
            GD = (cD === wD ? DD + 1 : DD) * AD
          }
          this._playbackFrames = GD, this._playbackProgress = this._animationState.MK === VD.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? AD : GD
        }
        const UD = rD._interpolate(cD, this._animationState);
        if (this.setValue(UD, KD), RD.length)
          for (let fD = 0; fD < RD.length; fD++)
            if (AD >= 0 && cD >= RD[fD].frame && RD[fD].frame >= zD || AD < 0 && cD <= RD[fD].frame && RD[fD].frame <= zD) {
              const DD = RD[fD];
              DD.isDone || (DD.onlyOnce && (RD.splice(fD, 1), fD--), DD.isDone = !0, DD.action(cD))
            } return gD || (this._stopped = !0), gD
      }
    }
    var CD = wD(39832);
    class xD {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(DD) {
        this._weight = -1 !== DD ? Math.min(Math.max(DD, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(DD) {
        for (let zD = 0; zD < this._runtimeAnimations.length; zD++) {
          this._runtimeAnimations[zD]._prepareForSpeedRatioChange(DD)
        }
        this._speedRatio = DD, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          LD = arguments.length > 6 ? arguments[6] : void 0,
          cD = arguments.length > 7 ? arguments[7] : void 0,
          gD = arguments.length > 8 ? arguments[8] : void 0,
          RD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          AD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = zD, this.fromFrame = wD, this.toFrame = pD, this.loopAnimation = KD, this.onAnimationEnd = LD, this.onAnimationLoop = gD, this.isAdditive = RD, this.playOrder = AD, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.HJ = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new sD.b, this.onAnimationLoopObservable = new sD.b, this._scene = DD, cD && this.appendAnimations(zD, cD), this._speedRatio = rD, DD._activeAnimatables.push(this)
      }
      syncWith(DD) {
        if (this._syncRoot = DD, DD) {
          const DD = this._scene._activeAnimatables.indexOf(this);
          DD > -1 && (this._scene._activeAnimatables.splice(DD, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(DD, zD) {
        for (let wD = 0; wD < zD.length; wD++) {
          const pD = zD[wD],
            sD = new PD(DD, pD, this._scene, this);
          sD._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(sD)
        }
      }
      getAnimationByTargetProperty(DD) {
        const zD = this._runtimeAnimations;
        for (let wD = 0; wD < zD.length; wD++)
          if (zD[wD].animation.targetProperty === DD) return zD[wD].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(DD) {
        const zD = this._runtimeAnimations;
        for (let wD = 0; wD < zD.length; wD++)
          if (zD[wD].animation.targetProperty === DD) return zD[wD];
        return null
      }
      reset() {
        const DD = this._runtimeAnimations;
        for (let zD = 0; zD < DD.length; zD++) DD[zD].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(DD) {
        const zD = this._runtimeAnimations;
        for (let wD = 0; wD < zD.length; wD++) zD[wD].animation.enableBlending = !0, zD[wD].animation.blendingSpeed = DD
      }
      disableBlending() {
        const DD = this._runtimeAnimations;
        for (let zD = 0; zD < DD.length; zD++) DD[zD].animation.enableBlending = !1
      }
      goToFrame(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this._runtimeAnimations;
        if (wD[0]) {
          const zD = wD[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? wD[0].currentFrame;
          const pD = 0 === this.speedRatio ? 0 : (DD - this._frameToSyncFromJump) / zD * 1e3 / this.speedRatio;
          this._manualJumpDelay = -pD
        }
        for (let pD = 0; pD < wD.length; pD++) wD[pD].goToFrame(DD, zD ? this._weight : -1);
        this._goToFrame = DD
      }
      get paused() {
        return this.HJ
      }
      pause() {
        this.HJ || (this.HJ = !0)
      }
      restart() {
        this.HJ = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (DD || zD) {
          const sD = this._scene._activeAnimatables.indexOf(this);
          if (sD > -1) {
            const KD = this._runtimeAnimations;
            for (let wD = KD.length - 1; wD >= 0; wD--) {
              const pD = KD[wD];
              DD && pD.animation.name != DD || (zD && !zD(pD.target) || (pD.dispose(), KD.splice(wD, 1)))
            }
            0 == KD.length && (wD || this._scene._activeAnimatables.splice(sD, 1), pD || this._raiseOnAnimationEnd())
          }
        } else {
          const DD = this._scene._activeAnimatables.indexOf(this);
          if (DD > -1) {
            wD || this._scene._activeAnimatables.splice(DD, 1);
            const zD = this._runtimeAnimations;
            for (let DD = 0; DD < zD.length; DD++) zD[DD].dispose();
            this._runtimeAnimations.length = 0, pD || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((DD => {
          this.onAnimationEndObservable.add((() => {
            DD(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(DD) {
        if (this.HJ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = DD), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = DD, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += DD - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !xD.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let zD = !1;
        const wD = this._runtimeAnimations;
        let pD;
        for (pD = 0; pD < wD.length; pD++) {
          const sD = wD[pD].animate(DD - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          zD = zD || sD
        }
        if (this.animationStarted = zD, !zD) {
          if (this.disposeOnEnd)
            for (pD = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(pD, 1), pD = 0; pD < wD.length; pD++) wD[pD].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return zD
      }
    }

    function TD(DD) {
      if (0 === DD.totalWeight && 0 === DD.totalAdditiveWeight) return DD.originalValue;
      let zD = 1;
      const wD = KD.n.WI[0],
        pD = KD.n.WI[1],
        sD = KD.n.Quaternion[0];
      let rD = 0;
      const LD = DD.animations[0],
        cD = DD.originalValue;
      let gD, RD = !1;
      if (DD.totalWeight < 1) gD = 1 - DD.totalWeight, cD.decompose(pD, sD, wD);
      else {
        if (rD = 1, zD = DD.totalWeight, gD = LD.weight / zD, 1 == gD) {
          if (!DD.totalAdditiveWeight) return LD.currentValue;
          RD = !0
        }
        LD.currentValue.decompose(pD, sD, wD)
      }
      if (!RD) {
        pD.scaleInPlace(gD), wD.scaleInPlace(gD), sD.scaleInPlace(gD);
        for (let LD = rD; LD < DD.animations.length; LD++) {
          const rD = DD.animations[LD];
          if (0 === rD.weight) continue;
          gD = rD.weight / zD;
          const cD = KD.n.WI[2],
            RD = KD.n.WI[3],
            AD = KD.n.Quaternion[1];
          rD.currentValue.decompose(RD, AD, cD), RD.scaleAndAddToRef(gD, pD), AD.scaleAndAddToRef(KD.i.Dot(sD, AD) > 0 ? gD : -gD, sD), cD.scaleAndAddToRef(gD, wD)
        }
        sD.normalize()
      }
      for (let UD = 0; UD < DD.additiveAnimations.length; UD++) {
        const zD = DD.additiveAnimations[UD];
        if (0 === zD.weight) continue;
        const rD = KD.n.WI[2],
          LD = KD.n.WI[3],
          cD = KD.n.Quaternion[1];
        zD.currentValue.decompose(LD, cD, rD), LD.multiplyToRef(pD, LD), KD.s.LerpToRef(pD, LD, zD.weight, pD), sD.multiplyToRef(cD, cD), KD.i.SlerpToRef(sD, cD, zD.weight, sD), rD.scaleAndAddToRef(zD.weight, wD)
      }
      const AD = LD ? LD._animationState.workValue : KD.n.Matrix[0].clone();
      return KD.e.ComposeToRef(pD, sD, wD, AD), AD
    }

    function bD(DD, zD) {
      if (0 === DD.totalWeight && 0 === DD.totalAdditiveWeight) return zD;
      const wD = DD.animations[0],
        pD = DD.originalValue;
      let sD = zD;
      if (0 === DD.totalWeight && DD.totalAdditiveWeight > 0) sD.pC(pD);
      else if (1 === DD.animations.length) {
        if (KD.i.SlerpToRef(pD, wD.currentValue, Math.min(1, DD.totalWeight), sD), 0 === DD.totalAdditiveWeight) return sD
      } else if (DD.animations.length > 1) {
        let wD, rD, LD = 1;
        if (DD.totalWeight < 1) {
          const zD = 1 - DD.totalWeight;
          wD = [], rD = [], wD.push(pD), rD.push(zD)
        } else {
          if (2 === DD.animations.length && (KD.i.SlerpToRef(DD.animations[0].currentValue, DD.animations[1].currentValue, DD.animations[1].weight / DD.totalWeight, zD), 0 === DD.totalAdditiveWeight)) return zD;
          wD = [], rD = [], LD = DD.totalWeight
        }
        for (let zD = 0; zD < DD.animations.length; zD++) {
          const pD = DD.animations[zD];
          wD.push(pD.currentValue), rD.push(pD.weight / LD)
        }
        let cD = 0;
        for (let DD = 0; DD < wD.length;) DD ? (cD += rD[DD], KD.i.SlerpToRef(sD, wD[DD], rD[DD] / cD, sD), DD++) : (KD.i.SlerpToRef(wD[DD], wD[DD + 1], rD[DD + 1] / (rD[DD] + rD[DD + 1]), zD), sD = zD, cD = rD[DD] + rD[DD + 1], DD += 2)
      }
      for (let rD = 0; rD < DD.additiveAnimations.length; rD++) {
        const zD = DD.additiveAnimations[rD];
        0 !== zD.weight && (sD.multiplyToRef(zD.currentValue, KD.n.Quaternion[0]), KD.i.SlerpToRef(sD, KD.n.Quaternion[0], zD.weight, sD))
      }
      return sD
    }

    function jD(DD, zD) {
      zD && (zD.prototype.copyAnimationRange = function(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new VD.d(this.name, "_matrix", DD.animations[0].framePerSecond, VD.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const KD = DD.animations[0].getRange(zD);
        if (!KD) return !1;
        const rD = KD.from,
          LD = KD.to,
          cD = DD.animations[0].getKeys(),
          gD = DD.length,
          RD = DD.getParent(),
          AD = this.getParent(),
          UD = pD && RD && gD && this.length && gD !== this.length,
          fD = UD && AD && RD ? AD.length / RD.length : 1,
          ID = pD && !AD && sD && (1 !== sD.x || 1 !== sD.y || 1 !== sD.z),
          BD = this.animations[0].getKeys();
        let GD, hD, nD;
        for (let MD = 0, OD = cD.length; MD < OD; MD++) GD = cD[MD], GD.frame >= rD && GD.frame <= LD && (pD ? (nD = GD.value.clone(), UD ? (hD = nD.getTranslation(), nD.setTranslation(hD.scaleInPlace(fD))) : ID && sD ? (hD = nD.getTranslation(), nD.setTranslation(hD.multiplyInPlace(sD))) : nD = GD.value) : nD = GD.value, BD.push({
          frame: GD.frame + wD,
          value: nD
        }));
        return this.animations[0].createRange(zD, rD + wD, LD + wD), !0
      }), DD && (DD.prototype._animate = function(DD) {
        const zD = this._animationWrites,
          wD = this._animationWriteCount;
        let pD = 0;
        for (let KD = this._animationStepWriteCount; KD < wD; KD++) {
          const DD = zD[KD];
          DD.fG && -1 === DD.weight || (DD.fG = !0, zD[KD] = zD[pD], zD[pD] = DD, pD++)
        }
        for (let KD = pD; KD < wD; KD++) {
          const DD = zD[KD];
          DD.runtimeAnimation = null, DD.target = null
        }
        if (this._animationWriteCount = pD, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const sD = CD.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = sD
        }
        this.deltaTime = void 0 !== DD ? DD : this.useConstantAnimationDeltaTime ? 16 : (sD - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = sD;
        const rD = this._activeAnimatables;
        if (0 === rD.length) return;
        this._animationTime += this.deltaTime;
        const LD = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let KD = 0; KD < rD.length; KD++) {
          const DD = rD[KD];
          !DD._animate(LD) && DD.disposeOnEnd && KD--
        }! function(DD) {
          if (DD._registeredForLateAnimationBindings.length) {
            for (let zD = 0; zD < DD._registeredForLateAnimationBindings.length; zD++) {
              const wD = DD._registeredForLateAnimationBindings.data[zD];
              for (const DD in wD._lateAnimationHolders) {
                const zD = wD._lateAnimationHolders[DD],
                  pD = zD.animations[0],
                  sD = zD.originalValue;
                if (void 0 === sD || null === sD) continue;
                const rD = VD.d.AllowMatrixDecomposeForInterpolation && sD.m;
                let LD = wD[DD];
                if (rD) LD = TD(zD);
                else if (void 0 !== sD.w) LD = bD(zD, LD || KD.i.Identity());
                else {
                  let DD = 0,
                    wD = 1;
                  const KD = pD && pD._animationState.MK === VD.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (zD.totalWeight < 1) LD = KD ? sD.clone ? sD.clone() : sD : pD && sD.scale ? sD.scale(1 - zD.totalWeight) : pD ? sD * (1 - zD.totalWeight) : sD.clone ? sD.clone() : sD;
                  else if (pD) {
                    wD = zD.totalWeight;
                    const rD = pD.weight / wD;
                    LD = 1 !== rD ? pD.currentValue.scale ? pD.currentValue.scale(rD) : pD.currentValue * rD : (zD.animations.length > 1 || zD.additiveAnimations.length > 0) && pD.currentValue.clone ? pD.currentValue.clone() : pD.currentValue, KD && (LD.addToRef ? LD.addToRef(sD, LD) : LD += sD), DD = 1
                  }
                  for (let pD = DD; pD < zD.animations.length; pD++) {
                    const DD = zD.animations[pD],
                      sD = DD.weight / wD;
                    sD && (DD.currentValue.scaleAndAddToRef ? DD.currentValue.scaleAndAddToRef(sD, LD) : LD += DD.currentValue * sD)
                  }
                  for (let pD = 0; pD < zD.additiveAnimations.length; pD++) {
                    const DD = zD.additiveAnimations[pD],
                      wD = DD.weight;
                    wD && (DD.currentValue.scaleAndAddToRef ? DD.currentValue.scaleAndAddToRef(wD, LD) : LD += DD.currentValue * wD)
                  }
                }
                wD[DD] = LD
              }
              wD._lateAnimationHolders = {}
            }
            DD._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, DD.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((DD, zD) => DD.playOrder - zD.playOrder))
      }, DD.prototype.beginWeightedAnimation = function(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 ? arguments[7] : void 0,
          cD = arguments.length > 8 ? arguments[8] : void 0,
          gD = arguments.length > 9 ? arguments[9] : void 0,
          RD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const AD = this.beginAnimation(DD, zD, wD, sD, KD, rD, LD, !1, cD, gD, RD);
        return AD.weight = pD, AD
      }, DD.prototype.beginAnimation = function(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          KD = arguments.length > 5 ? arguments[5] : void 0,
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cD = arguments.length > 8 ? arguments[8] : void 0,
          gD = arguments.length > 9 ? arguments[9] : void 0,
          RD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (sD < 0) {
          const DD = zD;
          zD = wD, wD = DD, sD = -sD
        }
        zD > wD && (sD = -sD), LD && this.stopAnimation(DD, void 0, cD), rD || (rD = new xD(this, DD, zD, wD, pD, sD, KD, void 0, gD, RD));
        const AD = !cD || cD(DD);
        if (DD.animations && AD && rD.appendAnimations(DD, DD.animations), DD.getAnimatables) {
          const RD = DD.getAnimatables();
          for (let DD = 0; DD < RD.length; DD++) this.beginAnimation(RD[DD], zD, wD, pD, sD, KD, rD, LD, cD, gD)
        }
        return rD.reset(), rD
      }, DD.prototype.beginHierarchyAnimation = function(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 ? arguments[7] : void 0,
          cD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          gD = arguments.length > 9 ? arguments[9] : void 0,
          RD = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const AD = DD.getDescendants(zD),
          UD = [];
        UD.push(this.beginAnimation(DD, wD, pD, sD, KD, rD, LD, cD, gD, void 0, RD));
        for (const fD of AD) UD.push(this.beginAnimation(fD, wD, pD, sD, KD, rD, LD, cD, gD, void 0, RD));
        return UD
      }, DD.prototype.beginDirectAnimation = function(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (KD < 0) {
          const DD = wD;
          wD = pD, pD = DD, KD = -KD
        }
        wD > pD && (KD = -KD);
        return new xD(this, DD, wD, pD, sD, KD, arguments.length > 6 ? arguments[6] : void 0, zD, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, DD.prototype.beginDirectHierarchyAnimation = function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        let gD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const RD = DD.getDescendants(zD),
          AD = [];
        AD.push(this.beginDirectAnimation(DD, wD, pD, sD, KD, rD, LD, cD, gD));
        for (const UD of RD) AD.push(this.beginDirectAnimation(UD, wD, pD, sD, KD, rD, LD, cD, gD));
        return AD
      }, DD.prototype.getAnimatableByTarget = function(DD) {
        for (let zD = 0; zD < this._activeAnimatables.length; zD++)
          if (this._activeAnimatables[zD].target === DD) return this._activeAnimatables[zD];
        return null
      }, DD.prototype.getAllAnimatablesByTarget = function(DD) {
        const zD = [];
        for (let wD = 0; wD < this._activeAnimatables.length; wD++) this._activeAnimatables[wD].target === DD && zD.push(this._activeAnimatables[wD]);
        return zD
      }, DD.prototype.stopAnimation = function(DD, zD, wD) {
        const pD = this.getAllAnimatablesByTarget(DD);
        for (const sD of pD) sD.stop(zD, wD)
      }, DD.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let DD = 0; DD < this._activeAnimatables.length; DD++) this._activeAnimatables[DD].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const DD of this.animationGroups) DD.stop()
      })
    }
    xD.ProcessPausedAnimatables = !1;
    var dD, SD = wD(37094),
      iD = wD(40155),
      lD = wD(39808);
    class WD extends iD.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(DD) {
        (DD.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.pC(DD), this._markAsDirtyAndDecompose())
      }
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(DD, zD.Ul(), !1), this.name = DD, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = zD, this._localMatrix = pD?.clone() ?? KD.e.Identity(), this._restMatrix = sD ?? this._localMatrix.clone(), this._bindMatrix = rD ?? this._localMatrix.clone(), this._index = LD, this._absoluteMatrix = new KD.e, this._absoluteBindMatrix = new KD.e, this._absoluteInverseBindMatrix = new KD.e, this._finalMatrix = new KD.e, zD.bones.push(this), this.setParent(wD, !1), this._updateAbsoluteBindMatrices()
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
      set parent(DD) {
        this.setParent(DD)
      }
      setParent(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== DD) {
          if (this.parent) {
            const DD = this.parent.children.indexOf(this); - 1 !== DD && this.parent.children.splice(DD, 1)
          }
          this._parentNode = DD, this.parent && this.parent.children.push(this), zD && this._updateAbsoluteBindMatrices(), this.vzD()
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
      setRestMatrix(DD) {
        this._restMatrix.pC(DD)
      }
      setRestPose(DD) {
        this.setRestMatrix(DD)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(DD) {
        this.i5(DD)
      }
      setBindPose(DD) {
        this.setBindMatrix(DD)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const DD = KD.n.WI[0],
            zD = KD.n.Quaternion[0],
            wD = KD.n.WI[1];
          this.getRestMatrix().decompose(DD, zD, wD), this._linkedTransformNode.position.pC(wD), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? KD.i.Identity(), this._linkedTransformNode.rotationQuaternion.pC(zD), this._linkedTransformNode.rc.pC(DD)
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
      linkTransformNode(DD) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = DD, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.LzD
      }
      set position(DD) {
        this._decompose(), this.LzD.pC(DD), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(DD) {
        this.setRotation(DD)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(DD) {
        this.setRotationQuaternion(DD)
      }
      get rc() {
        return this.getScale()
      }
      set rc(DD) {
        this.setScale(DD)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = KD.s.Zero(), this._localRotation = KD.i.Zero(), this.LzD = KD.s.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.LzD))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, KD.e.ComposeToRef(this._localScaling, this._localRotation, this.LzD, this._localMatrix)) : this._needToCompose = !1)
      }
      i5(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.pC(DD), zD && this._updateAbsoluteBindMatrices(), wD ? this._matrix = DD : this.vzD()
      }
      _updateAbsoluteBindMatrices(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (DD || (DD = this._bindMatrix), this.parent ? DD.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.pC(DD), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), zD)
          for (let wD = 0; wD < this.children.length; wD++) this.children[wD]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      vzD() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.vzD(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.vzD(), this._needToDecompose = !0
      }
      _updatePosition(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const sD = this.getLocalMatrix();
        if (0 == zD) pD ? (sD.addAtIndex(12, DD.x), sD.addAtIndex(13, DD.y), sD.addAtIndex(14, DD.z)) : sD.setTranslationFromFloats(DD.x, DD.y, DD.z);
        else {
          const zD = WD._TmpMats[0],
            rD = WD._TmpVecs[0];
          this.parent ? (zD.pC(this.parent.getAbsoluteMatrix()), wD && zD.multiplyToRef(wD.getWorldMatrix(), zD)) : KD.e.IdentityToRef(zD), pD && zD.setTranslationFromFloats(0, 0, 0), zD.invert(), KD.s.TransformCoordinatesToRef(DD, zD, rD), pD ? (sD.addAtIndex(12, rD.x), sD.addAtIndex(13, rD.y), sD.addAtIndex(14, rD.z)) : sD.setTranslationFromFloats(rD.x, rD.y, rD.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(DD, zD, wD, !0)
      }
      setPosition(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(DD, zD, wD, !1)
      }
      setAbsolutePosition(DD, zD) {
        this.setPosition(DD, 1, zD)
      }
      scale(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const sD = this.getLocalMatrix(),
          rD = WD._TmpMats[0];
        KD.e.ScalingToRef(DD, zD, wD, rD), rD.multiplyToRef(sD, sD), rD.invert();
        for (const KD of this.children) {
          const pD = KD.getLocalMatrix();
          pD.multiplyToRef(rD, pD), pD.multiplyAtIndex(12, DD), pD.multiplyAtIndex(13, zD), pD.multiplyAtIndex(14, wD), KD._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), pD)
          for (const KD of this.children) KD.scale(DD, zD, wD, pD)
      }
      setScale(DD) {
        this._decompose(), this._localScaling.pC(DD), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(DD) {
        this._decompose(), DD.pC(this._localScaling)
      }
      setYawPitchRoll(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === pD) {
          const rD = WD._TmpQuat;
          return KD.i.RotationYawPitchRollToRef(DD, zD, wD, rD), void this.setRotationQuaternion(rD, pD, sD)
        }
        const rD = WD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(rD, sD)) return;
        const LD = WD._TmpMats[1];
        KD.e.RotationYawPitchRollToRef(DD, zD, wD, LD), rD.multiplyToRef(LD, LD), this._rotateWithMatrix(LD, pD, sD)
      }
      rotate(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        const sD = WD._TmpMats[0];
        sD.setTranslationFromFloats(0, 0, 0), KD.e.RotationAxisToRef(DD, zD, sD), this._rotateWithMatrix(sD, wD, pD)
      }
      setAxisAngle(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === wD) {
          const sD = WD._TmpQuat;
          return KD.i.RotationAxisToRef(DD, zD, sD), void this.setRotationQuaternion(sD, wD, pD)
        }
        const sD = WD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(sD, pD)) return;
        const rD = WD._TmpMats[1];
        KD.e.RotationAxisToRef(DD, zD, rD), sD.multiplyToRef(rD, rD), this._rotateWithMatrix(rD, wD, pD)
      }
      setRotation(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(DD.y, DD.x, DD.z, zD, wD)
      }
      setRotationQuaternion(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === zD) return this._decompose(), this._localRotation.pC(DD), void this._markAsDirtyAndCompose();
        const pD = WD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(pD, wD)) return;
        const sD = WD._TmpMats[1];
        KD.e.FromQuaternionToRef(DD, sD), pD.multiplyToRef(sD, sD), this._rotateWithMatrix(sD, zD, wD)
      }
      setRotationMatrix(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === zD) {
          const pD = WD._TmpQuat;
          return KD.i.FromRotationMatrixToRef(DD, pD), void this.setRotationQuaternion(pD, zD, wD)
        }
        const pD = WD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(pD, wD)) return;
        const sD = WD._TmpMats[1];
        sD.pC(DD), pD.multiplyToRef(DD, sD), this._rotateWithMatrix(sD, zD, wD)
      }
      _rotateWithMatrix(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = this.getLocalMatrix(),
          sD = pD.m[12],
          KD = pD.m[13],
          rD = pD.m[14],
          LD = this.getParent(),
          cD = WD._TmpMats[3],
          gD = WD._TmpMats[4];
        LD && 1 == zD ? (wD ? (cD.pC(wD.getWorldMatrix()), LD.getAbsoluteMatrix().multiplyToRef(cD, cD)) : cD.pC(LD.getAbsoluteMatrix()), gD.pC(cD), gD.invert(), pD.multiplyToRef(cD, pD), pD.multiplyToRef(DD, pD), pD.multiplyToRef(gD, pD)) : 1 == zD && wD ? (cD.pC(wD.getWorldMatrix()), gD.pC(cD), gD.invert(), pD.multiplyToRef(cD, pD), pD.multiplyToRef(DD, pD), pD.multiplyToRef(gD, pD)) : pD.multiplyToRef(DD, pD), pD.setTranslationFromFloats(sD, KD, rD), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(DD, zD) {
        const wD = WD._TmpMats[2];
        return DD.pC(this.getAbsoluteMatrix()), zD ? (DD.multiplyToRef(zD.getWorldMatrix(), DD), KD.e.ScalingToRef(zD.rc.x, zD.rc.y, zD.rc.z, wD)) : KD.e.IdentityToRef(wD), DD.invert(), !isNaN(DD.m[0]) && (wD.multiplyAtIndex(0, this._scalingDeterminant), DD.multiplyToRef(wD, DD), !0)
      }
      PJ() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = KD.s.Zero();
        return this.getPositionToRef(DD, zD, wD), wD
      }
      getPositionToRef() {
        let DD = arguments.length > 1 ? arguments[1] : void 0,
          zD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const DD = this.getLocalMatrix();
          zD.x = DD.m[12], zD.y = DD.m[13], zD.z = DD.m[14]
        } else {
          const wD = WD._TmpMats[0].pC(this.getAbsoluteMatrix());
          DD && wD.multiplyToRef(DD.getWorldMatrix(), wD), zD.x = wD.m[12], zD.y = wD.m[13], zD.z = wD.m[14]
        }
      }
      getAbsolutePosition() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const zD = KD.s.Zero();
        return this.getPositionToRef(1, DD, zD), zD
      }
      getAbsolutePositionToRef(DD, zD) {
        this.getPositionToRef(1, DD, zD)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.pC(this._localMatrix);
          const DD = this._skeleton.getPoseMatrix();
          DD && this._absoluteMatrix.multiplyToRef(DD, this._absoluteMatrix)
        }
        const DD = this.children,
          zD = DD.length;
        for (let wD = 0; wD < zD; wD++) DD[wD].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      WH(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = KD.s.Zero();
        return this.getDirectionToRef(DD, zD, wD), wD
      }
      getDirectionToRef(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = WD._TmpMats[0].pC(this.getAbsoluteMatrix());
        zD && pD.multiplyToRef(zD.getWorldMatrix(), pD), KD.s.TransformNormalToRef(DD, pD, wD), wD.normalize()
      }
      getRotation() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = KD.s.Zero();
        return this.getRotationToRef(DD, zD, wD), wD
      }
      getRotationToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = WD._TmpQuat;
        this.getRotationQuaternionToRef(DD, zD, pD), pD.toEulerAnglesToRef(wD)
      }
      getRotationQuaternion() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = KD.i.Identity();
        return this.getRotationQuaternionToRef(DD, zD, wD), wD
      }
      getRotationQuaternionToRef() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), zD.pC(this._localRotation);
        else {
          const wD = WD._TmpMats[0],
            pD = this.getAbsoluteMatrix();
          DD ? pD.multiplyToRef(DD.getWorldMatrix(), wD) : wD.pC(pD), wD.multiplyAtIndex(0, this._scalingDeterminant), wD.multiplyAtIndex(1, this._scalingDeterminant), wD.multiplyAtIndex(2, this._scalingDeterminant), wD.decompose(void 0, zD, void 0)
        }
      }
      getRotationMatrix() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 ? arguments[1] : void 0;
        const wD = KD.e.Identity();
        return this.getRotationMatrixToRef(DD, zD, wD), wD
      }
      getRotationMatrixToRef() {
        let DD = arguments.length > 1 ? arguments[1] : void 0,
          zD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(zD);
        else {
          const wD = WD._TmpMats[0],
            pD = this.getAbsoluteMatrix();
          DD ? pD.multiplyToRef(DD.getWorldMatrix(), wD) : wD.pC(pD), wD.multiplyAtIndex(0, this._scalingDeterminant), wD.multiplyAtIndex(1, this._scalingDeterminant), wD.multiplyAtIndex(2, this._scalingDeterminant), wD.getRotationMatrixToRef(zD)
        }
      }
      getAbsolutePositionFromLocal(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = KD.s.Zero();
        return this.getAbsolutePositionFromLocalToRef(DD, zD, wD), wD
      }
      getAbsolutePositionFromLocalToRef(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = WD._TmpMats[0].pC(this.getAbsoluteMatrix());
        zD && pD.multiplyToRef(zD.getWorldMatrix(), pD), KD.s.TransformCoordinatesToRef(DD, pD, wD)
      }
      getLocalPositionFromAbsolute(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wD = KD.s.Zero();
        return this.getLocalPositionFromAbsoluteToRef(DD, zD, wD), wD
      }
      getLocalPositionFromAbsoluteToRef(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = WD._TmpMats[0].pC(this.getAbsoluteMatrix());
        zD && pD.multiplyToRef(zD.getWorldMatrix(), pD), pD.invert(), KD.s.TransformCoordinatesToRef(DD, pD, wD)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const DD = this._skeleton.bones.indexOf(this);
        if (-1 !== DD && this._skeleton.bones.splice(DD, 1), this._parentNode && this._parentNode.children) {
          const DD = this._parentNode.children,
            zD = DD.indexOf(this); - 1 !== zD && DD.splice(zD, 1)
        }
        super.dispose()
      }
    }
    WD._TmpVecs = (0, SD.b)(2, KD.s.Zero), WD._TmpQuat = KD.i.Identity(), WD._TmpMats = (0, SD.b)(5, KD.e.Identity), (dD = WD.prototype).copyAnimationRange ?? (dD.copyAnimationRange = (0, lD.h)("Bone", "copyAnimationRange"));
    var ND = wD(40022);
    let ZD = !1;
    var yD = wD(39889),
      kD = wD(40249),
      mD = wD(40263),
      eD = wD(40254),
      oD = wD(40053);

    function aD(DD, zD) {
      const wD = (0, fD.RandomRange)(0, 1);
      RD.h.LerpToRef(zD.color1, zD.color2, wD, DD.color)
    }

    function uD(DD, zD) {
      zD.colorDead.subtractToRef(DD.color, zD._colorDiff), zD._colorDiff.scaleToRef(1 / DD.lifeTime, DD.colorStep)
    }

    function vD(DD, zD) {
      DD._properties.currentColorGradient = zD._colorGradients[0], DD._properties.currentColorGradient.getColorToRef(DD.color), DD._properties.currentColor1.pC(DD.color), zD._colorGradients.length > 1 ? zD._colorGradients[1].getColorToRef(DD._properties.currentColor2) : DD._properties.currentColor2.pC(DD.color)
    }

    function tD(DD, zD) {
      const wD = zD._colorGradients;
      pD.l.GetCurrentGradient(zD._ratio, wD, ((zD, wD, pD) => {
        zD !== DD._properties.currentColorGradient && (DD._properties.currentColor1.pC(DD._properties.currentColor2), wD.getColorToRef(DD._properties.currentColor2), DD._properties.currentColorGradient = zD), RD.h.LerpToRef(DD._properties.currentColor1, DD._properties.currentColor2, pD, DD.color), DD.color.a < 0 && (DD.color.a = 0)
      }))
    }

    function FD(DD, zD) {
      DD.colorStep.scaleToRef(zD._scaledUpdateSpeed, zD._scaledColorStep), DD.color.addInPlace(zD._scaledColorStep), DD.color.a < 0 && (DD.color.a = 0)
    }

    function YD(DD, zD) {
      pD.l.GetCurrentGradient(zD._ratio, zD._angularSpeedGradients, ((zD, wD, pD) => {
        zD !== DD._properties.currentAngularSpeedGradient && (DD._properties.currentAngularSpeed1 = DD._properties.currentAngularSpeed2, DD._properties.currentAngularSpeed2 = wD.getFactor(), DD._properties.currentAngularSpeedGradient = zD), DD.angularSpeed = (0, fD.Lerp)(DD._properties.currentAngularSpeed1, DD._properties.currentAngularSpeed2, pD)
      }))
    }

    function HD(DD, zD) {
      DD.angle += DD.angularSpeed * zD._scaledUpdateSpeed
    }

    function qD(DD, zD) {
      zD.particleEmitterType.startDirectionFunction(zD._emitterWorldMatrix, DD.direction, DD, zD.isLocal, zD._emitterInverseWorldMatrix)
    }

    function Dz(DD, zD) {
      zD.startDirectionFunction(zD._emitterWorldMatrix, DD.direction, DD, zD.isLocal)
    }

    function zz(DD, zD) {
      DD._properties.currentVelocityGradient = zD._velocityGradients[0], DD._properties.currentVelocity1 = DD._properties.currentVelocityGradient.getFactor(), zD._velocityGradients.length > 1 ? DD._properties.currentVelocity2 = zD._velocityGradients[1].getFactor() : DD._properties.currentVelocity2 = DD._properties.currentVelocity1
    }

    function wz(DD, zD) {
      DD._properties.currentLimitVelocityGradient = zD._limitVelocityGradients[0], DD._properties.currentLimitVelocity1 = DD._properties.currentLimitVelocityGradient.getFactor(), zD._limitVelocityGradients.length > 1 ? DD._properties.currentLimitVelocity2 = zD._limitVelocityGradients[1].getFactor() : DD._properties.currentLimitVelocity2 = DD._properties.currentLimitVelocity1
    }

    function pz(DD, zD) {
      pD.l.GetCurrentGradient(zD._ratio, zD._velocityGradients, ((zD, wD, pD) => {
        zD !== DD._properties.currentVelocityGradient && (DD._properties.currentVelocity1 = DD._properties.currentVelocity2, DD._properties.currentVelocity2 = wD.getFactor(), DD._properties.currentVelocityGradient = zD), DD._properties.directionScale *= (0, fD.Lerp)(DD._properties.currentVelocity1, DD._properties.currentVelocity2, pD)
      }))
    }

    function sz(DD, zD) {
      pD.l.GetCurrentGradient(zD._ratio, zD._limitVelocityGradients, ((wD, pD, sD) => {
        wD !== DD._properties.currentLimitVelocityGradient && (DD._properties.currentLimitVelocity1 = DD._properties.currentLimitVelocity2, DD._properties.currentLimitVelocity2 = pD.getFactor(), DD._properties.currentLimitVelocityGradient = wD);
        const KD = (0, fD.Lerp)(DD._properties.currentLimitVelocity1, DD._properties.currentLimitVelocity2, sD);
        DD.direction.length() > KD && DD.direction.scaleInPlace(zD.limitVelocityDamping)
      }))
    }

    function Kz(DD) {
      DD.direction.scaleToRef(DD._properties.directionScale, DD._properties.scaledDirection)
    }

    function rz(DD, zD) {
      zD.particleEmitterType.startPositionFunction(zD._emitterWorldMatrix, DD.position, DD, zD.isLocal)
    }

    function Lz(DD, zD) {
      zD.startPositionFunction(zD._emitterWorldMatrix, DD.position, DD, zD.isLocal)
    }

    function cz(DD, zD) {
      DD._properties.localPosition ? DD._properties.localPosition.pC(DD.position) : DD._properties.localPosition = DD.position.clone(), KD.s.TransformCoordinatesToRef(DD._properties.localPosition, zD._emitterWorldMatrix, DD.position)
    }

    function gz(DD, zD) {
      zD.isLocal && DD._properties.localPosition ? (DD._properties.localPosition.addInPlace(DD._properties.scaledDirection), KD.s.TransformCoordinatesToRef(DD._properties.localPosition, zD._emitterWorldMatrix, DD.position)) : DD.position.addInPlace(DD._properties.scaledDirection)
    }

    function Rz(DD, zD) {
      DD._properties.currentDragGradient = zD._dragGradients[0], DD._properties.currentDrag1 = DD._properties.currentDragGradient.getFactor(), zD._dragGradients.length > 1 ? DD._properties.currentDrag2 = zD._dragGradients[1].getFactor() : DD._properties.currentDrag2 = DD._properties.currentDrag1
    }

    function Az(DD, zD) {
      pD.l.GetCurrentGradient(zD._ratio, zD._dragGradients, ((zD, wD, pD) => {
        zD !== DD._properties.currentDragGradient && (DD._properties.currentDrag1 = DD._properties.currentDrag2, DD._properties.currentDrag2 = wD.getFactor(), DD._properties.currentDragGradient = zD);
        const sD = (0, fD.Lerp)(DD._properties.currentDrag1, DD._properties.currentDrag2, pD);
        DD._properties.scaledDirection.scaleInPlace(1 - sD)
      }))
    }

    function Uz(DD, zD) {
      DD._properties.randomNoiseCoordinates1 && DD._properties.randomNoiseCoordinates2 ? (DD._properties.randomNoiseCoordinates1.Z2(Math.random(), Math.random(), Math.random()), DD._properties.randomNoiseCoordinates2.Z2(Math.random(), Math.random(), Math.random())) : (DD._properties.randomNoiseCoordinates1 = new KD.s(Math.random(), Math.random(), Math.random()), DD._properties.randomNoiseCoordinates2 = new KD.s(Math.random(), Math.random(), Math.random()))
    }

    function fz(DD, zD) {
      const wD = zD._noiseTextureData,
        pD = zD._noiseTextureSize;
      if (wD && pD && DD._properties.randomNoiseCoordinates1 && DD._properties.randomNoiseCoordinates2) {
        const sD = zD._fetchR(DD._properties.randomNoiseCoordinates1.x, DD._properties.randomNoiseCoordinates1.y, pD.width, pD.height, wD),
          rD = zD._fetchR(DD._properties.randomNoiseCoordinates1.z, DD._properties.randomNoiseCoordinates2.x, pD.width, pD.height, wD),
          LD = zD._fetchR(DD._properties.randomNoiseCoordinates2.y, DD._properties.randomNoiseCoordinates2.z, pD.width, pD.height, wD),
          cD = KD.n.WI[0],
          gD = KD.n.WI[1];
        cD.Z2((2 * sD - 1) * zD.noiseStrength.x, (2 * rD - 1) * zD.noiseStrength.y, (2 * LD - 1) * zD.noiseStrength.z), cD.scaleToRef(zD._tempScaledUpdateSpeed, gD), DD.direction.addInPlace(gD)
      }
    }

    function Iz(DD, zD) {
      zD.gravity.scaleToRef(zD._tempScaledUpdateSpeed, zD._scaledGravity), DD.direction.addInPlace(zD._scaledGravity)
    }

    function Bz(DD, zD) {
      DD.size = (0, fD.RandomRange)(zD.minSize, zD.maxSize), DD.scale.Z2((0, fD.RandomRange)(zD.minScaleX, zD.maxScaleX), (0, fD.RandomRange)(zD.minScaleY, zD.maxScaleY))
    }

    function Gz(DD, zD) {
      DD._properties.currentSizeGradient = zD._sizeGradients[0], DD._properties.currentSize1 = DD._properties.currentSizeGradient.getFactor(), DD.size = DD._properties.currentSize1, zD._sizeGradients.length > 1 ? DD._properties.currentSize2 = zD._sizeGradients[1].getFactor() : DD._properties.currentSize2 = DD._properties.currentSize1, DD.scale.Z2((0, fD.RandomRange)(zD.minScaleX, zD.maxScaleX), (0, fD.RandomRange)(zD.minScaleY, zD.maxScaleY))
    }

    function hz(DD, zD) {
      const wD = zD._actualFrame / zD.targetStopDuration;
      pD.l.GetCurrentGradient(wD, zD._startSizeGradients, ((wD, pD, sD) => {
        wD !== zD._currentStartSizeGradient && (zD._currentStartSize1 = zD._currentStartSize2, zD._currentStartSize2 = pD.getFactor(), zD._currentStartSizeGradient = wD);
        const KD = (0, fD.Lerp)(zD._currentStartSize1, zD._currentStartSize2, sD);
        DD.scale.scaleInPlace(KD)
      }))
    }

    function nz(DD, zD) {
      pD.l.GetCurrentGradient(zD._ratio, zD._sizeGradients, ((zD, wD, pD) => {
        zD !== DD._properties.currentSizeGradient && (DD._properties.currentSize1 = DD._properties.currentSize2, DD._properties.currentSize2 = wD.getFactor(), DD._properties.currentSizeGradient = zD), DD.size = (0, fD.Lerp)(DD._properties.currentSize1, DD._properties.currentSize2, pD)
      }))
    }

    function Mz(DD, zD) {
      DD.remapData = new KD.t(0, 1, 0, 1)
    }

    function Oz(DD, zD) {
      zD._colorRemapGradients && zD._colorRemapGradients.length > 0 && pD.l.GetCurrentGradient(zD._ratio, zD._colorRemapGradients, ((zD, wD, pD) => {
        const sD = (0, fD.Lerp)(zD.factor1, wD.factor1, pD),
          KD = (0, fD.Lerp)(zD.factor2, wD.factor2, pD);
        DD.remapData.x = sD, DD.remapData.y = KD - sD
      })), zD._alphaRemapGradients && zD._alphaRemapGradients.length > 0 && pD.l.GetCurrentGradient(zD._ratio, zD._alphaRemapGradients, ((zD, wD, pD) => {
        const sD = (0, fD.Lerp)(zD.factor1, wD.factor1, pD),
          KD = (0, fD.Lerp)(zD.factor2, wD.factor2, pD);
        DD.remapData.z = sD, DD.remapData.w = KD - sD
      }))
    }

    function Jz(DD, zD) {
      const wD = (0, fD.Clamp)(zD._actualFrame / zD.targetStopDuration);
      pD.l.GetCurrentGradient(wD, zD._lifeTimeGradients, ((zD, pD) => {
        const sD = zD,
          KD = pD,
          rD = sD.getFactor(),
          LD = KD.getFactor(),
          cD = (wD - sD.gradient) / (KD.gradient - sD.gradient);
        DD.lifeTime = (0, fD.Lerp)(rD, LD, cD)
      })), zD._emitPower = (0, fD.RandomRange)(zD.minEmitPower, zD.maxEmitPower)
    }

    function Ez(DD, zD) {
      DD.lifeTime = (0, fD.RandomRange)(zD.minLifeTime, zD.maxLifeTime), zD._emitPower = (0, fD.RandomRange)(zD.minEmitPower, zD.maxEmitPower)
    }

    function Qz(DD, zD) {
      0 === zD._emitPower ? (DD._properties.initialDirection ? DD._properties.initialDirection.pC(DD.direction) : DD._properties.initialDirection = DD.direction.clone(), DD.direction.set(0, 0, 0)) : (DD._properties.initialDirection = null, DD.direction.scaleInPlace(zD._emitPower)), DD.direction.addInPlace(zD._inheritedVelocityOffset)
    }

    function Xz(DD, zD) {
      DD.angularSpeed = (0, fD.RandomRange)(zD.minAngularSpeed, zD.maxAngularSpeed), DD.angle = (0, fD.RandomRange)(zD.minInitialRotation, zD.maxInitialRotation)
    }

    function Vz(DD, zD) {
      DD._properties.currentAngularSpeedGradient = zD._angularSpeedGradients[0], DD.angularSpeed = DD._properties.currentAngularSpeedGradient.getFactor(), DD._properties.currentAngularSpeed1 = DD.angularSpeed, zD._angularSpeedGradients.length > 1 ? DD._properties.currentAngularSpeed2 = zD._angularSpeedGradients[1].getFactor() : DD._properties.currentAngularSpeed2 = DD._properties.currentAngularSpeed1, DD.angle = (0, fD.RandomRange)(zD.minInitialRotation, zD.maxInitialRotation)
    }

    function Pz(DD, zD) {
      DD._properties.initialStartSpriteCellId = zD.startSpriteCellID, DD._properties.initialEndSpriteCellId = zD.endSpriteCellID, DD._properties.initialSpriteCellLoop = zD.spriteCellLoop
    }

    function Cz(DD, zD) {
      DD.previousItem = zD.previousItem, DD.nextItem = zD, zD.previousItem && (zD.previousItem.nextItem = DD), zD.previousItem = DD
    }

    function xz(DD, zD) {
      DD.previousItem = zD, DD.nextItem = zD.nextItem, zD.nextItem && (zD.nextItem.previousItem = DD), zD.nextItem = DD
    }

    function Tz(DD) {
      DD.previousItem && (DD.previousItem.nextItem = DD.nextItem), DD.nextItem && (DD.nextItem.previousItem = DD.previousItem)
    }
    var bz = wD(40307);
    class jz extends ED {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(DD) {
        this._startDirectionFunction !== DD && (this._startDirectionFunction = DD, this._directionCreation.process = DD ? Dz : qD)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(DD) {
        this._startPositionFunction !== DD && (this._startPositionFunction = DD, this._positionCreation.process = DD ? Lz : rz)
      }
      set onDispose(DD) {
        this._onDisposeObserver && this.Bl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bl.add(DD)
      }
      get EX() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(DD) {
        this._useRampGradients !== DD && (this._useRampGradients = DD, this._resetEffect(), DD ? (this._rampCreation = {
          process: Mz,
          previousItem: null,
          nextItem: null
        }, xz(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Oz,
          previousItem: null,
          nextItem: null
        }, xz(this._remapGradientProcessing, this._gravityProcessing))) : (Tz(this._rampCreation), Tz(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(DD) {
        this._isLocal !== DD && (this._isLocal = DD, DD ? (this._isLocalCreation = {
          process: cz,
          previousItem: null,
          nextItem: null
        }, xz(this._isLocalCreation, this._positionCreation)) : Tz(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(DD) {
        this._animationSheetEnabled !== DD && (this._animationSheetEnabled = DD, DD ? (this._sheetCreation = {
          process: Pz,
          previousItem: null,
          nextItem: null
        }, xz(this._sheetCreation, this._colorDeadCreation)) : Tz(this._sheetCreation), this._reset())
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[DD]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[DD] ?? this._customWrappers[0]
      }
      setCustomEffect(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[zD] = new kD.e(this._engine), this._customWrappers[zD].effect = DD, this._customWrappers[zD].drawContext && (this._customWrappers[zD].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new sD.b), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(DD) {
        if (this.noiseTexture !== DD) {
          if (this._noiseTexture = DD, !DD) return Tz(this._noiseCreation), void Tz(this._noiseProcessing);
          this._noiseCreation = {
            process: Uz,
            previousItem: null,
            nextItem: null
          }, xz(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: fz,
            previousItem: null,
            nextItem: null
          }, xz(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          LD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          gD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        ZD || (ZD = !0, jD(ND.e, WD)), (0, yD.d)(), super(DD), this._emitterInverseWorldMatrix = KD.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new KD.s, this.Bl = new sD.b, this.onStoppedObservable = new sD.b, this.onStartedObservable = new sD.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new RD.h(0, 0, 0, 0), this._colorDiff = new RD.h(0, 0, 0, 0), this._scaledGravity = KD.s.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = DD => {}, this.recycleParticle = DD => {
          const zD = this._particles.pop();
          zD !== DD && zD.copyTo(DD), zD.metadata = null, this._stockParticles.push(zD)
        }, this._createParticle = () => {
          let DD;
          return 0 !== this._stockParticles.length ? (DD = this._stockParticles.pop(), DD._reset()) : DD = new XD(this), this._prepareParticle(DD), DD
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = zD, this._epsilon = LD, wD && "Scene" !== wD.getClassName() ? (this._engine = wD, this.defaultProjectionMatrix = KD.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = wD || cD.d.LastCreatedScene, this._engine = this._scene.iI(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.XE.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Ez,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: rz,
          previousItem: null,
          nextItem: null
        }, xz(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: qD,
          previousItem: null,
          nextItem: null
        }, xz(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Qz,
          previousItem: null,
          nextItem: null
        }, xz(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Bz,
          previousItem: null,
          nextItem: null
        }, xz(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Xz,
          previousItem: null,
          nextItem: null
        }, xz(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: aD,
          previousItem: null,
          nextItem: null
        }, xz(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: uD,
          previousItem: null,
          nextItem: null
        }, xz(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, gD || (this._colorProcessing = {
          process: FD,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: HD,
          previousItem: null,
          nextItem: null
        }, xz(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Kz,
          previousItem: null,
          nextItem: null
        }, xz(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: gz,
          previousItem: null,
          nextItem: null
        }, xz(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Iz,
          previousItem: null,
          nextItem: null
        }, xz(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = rD, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new kD.e(this._engine)
        }, this._customWrappers[0].effect = pD, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new AD.e, this.updateFunction = DD => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((DD => {
            this._noiseTextureData = DD
          })));
          const zD = DD === this._particles;
          for (let wD = 0; wD < DD.length; wD++) {
            const pD = DD[wD];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const sD = pD.age;
            if (pD.age += this._tempScaledUpdateSpeed, pD.age > pD.lifeTime) {
              const DD = pD.age - sD,
                zD = pD.lifeTime - sD;
              this._tempScaledUpdateSpeed = zD * this._tempScaledUpdateSpeed / DD, pD.age = pD.lifeTime
            }
            this._ratio = pD.age / pD.lifeTime, pD._properties.directionScale = this._tempScaledUpdateSpeed;
            let KD = this._updateQueueStart;
            for (; KD;) KD.process(pD, this), KD = KD.nextItem;
            if (this._isAnimationSheetEnabled && !gD && pD.updateCellIndex(), pD._inheritParticleInfoToSubEmitters(), pD.age >= pD.lifeTime) {
              if (this._emitFromParticle(pD), pD._properties.attachedSubEmitters) {
                for (const DD of pD._properties.attachedSubEmitters) DD.particleSystem.disposeOnStop = !0, DD.particleSystem.stop();
                pD._properties.attachedSubEmitters = null
              }
              this.recycleParticle(pD), zD && wD--
            } else;
          }
        }
      }
      serialize(DD) {
        throw new Error("Method not implemented.")
      }
      clone(DD, zD) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Jz : this._lifeTimeCreation.process = Ez
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: hz,
          previousItem: null,
          nextItem: null
        }, xz(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Tz(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(DD) {
        this.targetStopDuration !== DD && (this._targetStopDuration = DD, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(DD, zD, wD) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, DD, zD, wD), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(DD) {
        return this._removeFactorGradient(this._lifeTimeGradients, DD), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(DD, zD, wD) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Gz, this._sizeGradientProcessing = {
          process: nz,
          previousItem: null,
          nextItem: null
        }, Cz(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, DD, zD, wD), this
      }
      removeSizeGradient(DD) {
        return this._removeFactorGradient(this._sizeGradients, DD), 0 === this._sizeGradients?.length && (Tz(this._sizeGradientProcessing), this._sizeCreation.process = Bz), this
      }
      addColorRemapGradient(DD, zD, wD) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, DD, zD, wD), this
      }
      removeColorRemapGradient(DD) {
        return this._removeFactorGradient(this._colorRemapGradients, DD), this
      }
      addAlphaRemapGradient(DD, zD, wD) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, DD, zD, wD), this
      }
      removeAlphaRemapGradient(DD) {
        return this._removeFactorGradient(this._alphaRemapGradients, DD), this
      }
      addAngularSpeedGradient(DD, zD, wD) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Vz, this._angularSpeedGradientProcessing = {
          process: YD,
          previousItem: null,
          nextItem: null
        }, Cz(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, DD, zD, wD), this
      }
      removeAngularSpeedGradient(DD) {
        return this._removeFactorGradient(this._angularSpeedGradients, DD), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Xz, Tz(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(DD, zD, wD) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: zz,
          previousItem: null,
          nextItem: null
        }, xz(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: pz,
          previousItem: null,
          nextItem: null
        }, Cz(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, DD, zD, wD), this
      }
      removeVelocityGradient(DD) {
        return this._removeFactorGradient(this._velocityGradients, DD), 0 === this._velocityGradients?.length && (Tz(this._velocityCreation), Tz(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(DD, zD, wD) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: wz,
          previousItem: null,
          nextItem: null
        }, xz(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: sz,
          previousItem: null,
          nextItem: null
        }, xz(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, DD, zD, wD), this
      }
      removeLimitVelocityGradient(DD) {
        return this._removeFactorGradient(this._limitVelocityGradients, DD), 0 === this._limitVelocityGradients?.length && (Tz(this._limitVelocityCreation), Tz(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(DD, zD, wD) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Rz,
          previousItem: null,
          nextItem: null
        }, Cz(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Az,
          previousItem: null,
          nextItem: null
        }, Cz(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, DD, zD, wD), this
      }
      removeDragGradient(DD) {
        return this._removeFactorGradient(this._dragGradients, DD), 0 === this._dragGradients?.length && (Tz(this._dragCreation), Tz(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(DD, zD, wD) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, DD, zD, wD), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(DD) {
        return this._removeFactorGradient(this._startSizeGradients, DD), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const DD = new Uint8Array(4 * this._rawTextureWidth),
          zD = RD.l.Color3[0];
        for (let wD = 0; wD < this._rawTextureWidth; wD++) {
          const sD = wD / this._rawTextureWidth;
          pD.l.GetCurrentGradient(sD, this._rampGradients, ((pD, sD, KD) => {
            RD.d.LerpToRef(pD.color, sD.color, KD, zD), DD[4 * wD] = 255 * zD.r, DD[4 * wD + 1] = 255 * zD.g, DD[4 * wD + 2] = 255 * zD.b, DD[4 * wD + 3] = 255
          }))
        }
        this._rampGradientsTexture = LD.d.CreateRGBATexture(DD, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((DD, zD) => DD.gradient < zD.gradient ? -1 : DD.gradient > zD.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(DD, zD) {
        this._rampGradients || (this._rampGradients = []);
        const wD = new pD.h(DD, zD);
        return this._rampGradients.push(wD), this._syncRampGradientTexture(), this
      }
      removeRampGradient(DD) {
        return this._removeGradientAndTexture(DD, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(DD, zD, wD) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = vD, this._colorProcessing.process = tD);
        const sD = new pD.d(DD, zD, wD);
        return this._colorGradients.push(sD), this._colorGradients.sort(((DD, zD) => DD.gradient < zD.gradient ? -1 : DD.gradient > zD.gradient ? 1 : 0)), this
      }
      removeColorGradient(DD) {
        if (!this._colorGradients) return this;
        let zD = 0;
        for (const wD of this._colorGradients) {
          if (wD.gradient === DD) {
            this._colorGradients.splice(zD, 1);
            break
          }
          zD++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = aD, this._colorProcessing.process = FD), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const DD of this._drawWrappers)
            if (DD)
              for (const zD of DD) zD?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(DD, zD, wD, pD, sD) {
        return sD[4 * (((DD = .5 * Math.abs(DD) + .5) * wD % wD | 0) + ((zD = .5 * Math.abs(zD) + .5) * pD % pD | 0) * wD)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const DD = this._engine,
          zD = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * zD), this._vertexBuffer = new rD.b(DD, this._vertexData, !0, zD);
        let wD = 0;
        const pD = this._vertexBuffer.createVertexBuffer(rD.k.PositionKind, wD, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[rD.k.PositionKind] = pD, wD += 3;
        const sD = this._vertexBuffer.createVertexBuffer(rD.k.ColorKind, wD, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[rD.k.ColorKind] = sD, wD += 4;
        const KD = this._vertexBuffer.createVertexBuffer("angle", wD, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = KD, wD += 1;
        const LD = this._vertexBuffer.createVertexBuffer("size", wD, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = LD, wD += 2, this._isAnimationSheetEnabled) {
          const DD = this._vertexBuffer.createVertexBuffer("cellIndex", wD, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = DD, wD += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const DD = this._vertexBuffer.createVertexBuffer("direction", wD, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = DD, wD += 3
        }
        if (this._useRampGradients) {
          const DD = this._vertexBuffer.createVertexBuffer("remapData", wD, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = DD, wD += 4
        }
        let cD;
        if (this._useInstancing) {
          const zD = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new rD.b(DD, zD, !1, 2), cD = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else cD = this._vertexBuffer.createVertexBuffer("offset", wD, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = cD, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const DD = [],
          zD = [];
        let wD = 0;
        for (let pD = 0; pD < this._capacity; pD++) DD.push(wD), DD.push(wD + 1), DD.push(wD + 2), DD.push(wD), DD.push(wD + 2), DD.push(wD + 3), zD.push(wD, wD + 1, wD + 1, wD + 2, wD + 2, wD + 3, wD + 3, wD, wD, wD + 3), wD += 4;
        this._indexBuffer = this._engine.createIndexBuffer(DD), this._linesIndexBuffer = this._engine.createIndexBuffer(zD)
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (DD) return this.startDelay = DD, void setTimeout((() => {
          this.start(0)
        }), DD);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const DD = this.noiseTexture;
          if (DD && DD.onGeneratedObservable) DD.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let zD = 0; zD < this.preWarmCycles; zD++) this.animate(!0), DD.render()
            }))
          }));
          else
            for (let zD = 0; zD < this.preWarmCycles; zD++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(DD))
      }
      _postStop(DD) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(DD, zD, wD, pD) {
        let sD = DD * this._vertexBufferSize;
        const rD = KD.n.WI[0].pC(this._scene?.floatingOriginOffset || KD.s.ZeroReadOnly);
        if (this._vertexData[sD++] = zD.position.x + this.worldOffset.x - rD.x, this._vertexData[sD++] = zD.position.y + this.worldOffset.y - rD.y, this._vertexData[sD++] = zD.position.z + this.worldOffset.z - rD.z, this._vertexData[sD++] = zD.color.r, this._vertexData[sD++] = zD.color.g, this._vertexData[sD++] = zD.color.b, this._vertexData[sD++] = zD.color.a, this._vertexData[sD++] = zD.angle, this._vertexData[sD++] = zD.scale.x * zD.size, this._vertexData[sD++] = zD.scale.y * zD.size, this._isAnimationSheetEnabled && (this._vertexData[sD++] = zD.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[sD++] = zD.direction.x, this._vertexData[sD++] = zD.direction.y, this._vertexData[sD++] = zD.direction.z);
        else if (zD._properties.initialDirection) {
          let DD = zD._properties.initialDirection;
          this.isLocal && (KD.s.TransformNormalToRef(DD, this._emitterWorldMatrix, KD.n.WI[0]), DD = KD.n.WI[0]), 0 === DD.x && 0 === DD.z && (DD.x = .001), this._vertexData[sD++] = DD.x, this._vertexData[sD++] = DD.y, this._vertexData[sD++] = DD.z
        } else {
          let DD = zD.direction;
          this.isLocal && (KD.s.TransformNormalToRef(DD, this._emitterWorldMatrix, KD.n.WI[0]), DD = KD.n.WI[0]), 0 === DD.x && 0 === DD.z && (DD.x = .001), this._vertexData[sD++] = DD.x, this._vertexData[sD++] = DD.y, this._vertexData[sD++] = DD.z
        }
        this._useRampGradients && zD.remapData && (this._vertexData[sD++] = zD.remapData.x, this._vertexData[sD++] = zD.remapData.y, this._vertexData[sD++] = zD.remapData.z, this._vertexData[sD++] = zD.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === wD ? wD = this._epsilon : 1 === wD && (wD = 1 - this._epsilon), 0 === pD ? pD = this._epsilon : 1 === pD && (pD = 1 - this._epsilon)), this._vertexData[sD++] = wD, this._vertexData[sD] = pD)
      }
      _prepareParticle(DD) {}
      _createNewOnes(DD) {
        let zD;
        for (let wD = 0; wD < DD && this._particles.length !== this._capacity; wD++) {
          zD = this._createParticle(), this._particles.push(zD);
          let DD = this._createQueueStart;
          for (; DD;) DD.process(zD, this), DD = DD.nextItem;
          zD._inheritParticleInfoToSubEmitters()
        }
      }
      _update(DD) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const DD = this.emitter;
          this._emitterWorldMatrix = DD.getWorldMatrix()
        } else {
          const DD = this.emitter;
          this._emitterWorldMatrix = KD.e.Translation(DD.x, DD.y, DD.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(DD)
      }
      static _GetAttributeNamesOrOptions() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = [rD.k.PositionKind, rD.k.ColorKind, "angle", "offset", "size"];
        return DD && pD.push("cellIndex"), zD || pD.push("direction"), wD && pD.push("remapData"), pD
      }
      static _GetEffectCreationOptions() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, mD.e)(pD), DD && pD.push("particlesInfos"), zD && pD.push("logarithmicDepthConstant"), wD && (pD.push("vFogInfos"), pD.push("vFogColor")), pD
      }
      fillDefines(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, mD.n)(this, this._scene, DD), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && DD.push("#define FOG")), this._isAnimationSheetEnabled && DD.push("#define ANIMATESHEET"), this.useLogarithmicDepth && DD.push("#define LOGARITHMICDEPTH"), zD === ED.BLENDMODE_MULTIPLY && DD.push("#define BLENDMULTIPLYMODE"), this.isLocal && DD.push("#define LOCAL"), this._useRampGradients && DD.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (DD.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            DD.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            DD.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && DD.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            DD.push("#define BILLBOARDMODE_ALL")
        }
        wD && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), DD.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(DD, zD, wD) {
        zD.push(...jz._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), DD.push(...jz._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), wD.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, oD.c)(DD, this._imageProcessingConfigurationDefines), (0, oD.b)(wD, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(DD) {
        var zD;
        const wD = this._getCustomDrawWrapper(DD);
        if (wD?.effect) return wD;
        const pD = [];
        this.fillDefines(pD, DD);
        const KD = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          rD = bz.d._PrepareStringDefines(KD, pD),
          LD = rD ? bz.d.GetConfiguration(KD) : void 0;
        let cD = this._drawWrappers[KD];
        cD || (cD = this._drawWrappers[KD] = [], 0 === KD || this._renderPassObserver || (this._renderPassObserver = ((zD = this._engine)._onReleaseRenderPassObservable ?? (zD._onReleaseRenderPassObservable = new sD.b)).add((DD => {
          const zD = this._drawWrappers[DD];
          if (zD) {
            for (const DD of zD) DD?.dispose();
            delete this._drawWrappers[DD]
          }
        }))));
        let gD = cD[DD];
        gD || (gD = new kD.e(this._engine), gD.drawContext && (gD.drawContext.useInstancing = this._useInstancing), cD[DD] = gD);
        const RD = pD.join("\n");
        if (gD.defines !== RD) {
          const DD = [],
            zD = [],
            wD = [];
          this.fillUniformsAttributesAndSamplerNames(zD, DD, wD), rD && (zD.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== LD?.defines.PREPASS_LOCAL_POSITION_INDEX && zD.push("inverseEmitterWM", "geometryWorldOffset")), gD.setEffect(this._engine.createEffect("particles", {
            attributes: DD,
            uniformsNames: zD,
            samplers: wD,
            defines: RD,
            shaderLanguage: this._shaderLanguage,
            multiTarget: rD,
            indexParameters: rD ? {
              buffersCount: LD?._mrtCount ?? 0
            } : void 0
          }, this._engine), RD)
        }
        return gD
      }
      _bindGeometryRendering(DD) {
        const zD = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          wD = bz.d.GetConfiguration(zD);
        if (!wD?._defines) return;
        DD.setFloat("objectId", 0), DD.setInt("meshBlendTag", 0);
        const pD = this._scene?.activeCamera;
        if (DD.setFloat2("cameraInfo", pD?.minZ ?? 0, pD?.maxZ ?? 1), this.isLocal && void 0 !== wD.defines.PREPASS_LOCAL_POSITION_INDEX) {
          DD.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const zD = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || KD.s.ZeroReadOnly, KD.n.WI[0]);
          DD.setVector3("geometryWorldOffset", zD)
        }
      }
      animate() {
        let DD, zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!zD && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (zD ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) DD = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const zD = this._calculateEmitRate();
            DD = zD * this._scaledUpdateSpeed | 0, this._newPartsExcess += zD * this._scaledUpdateSpeed - DD
          }
          if (this._newPartsExcess > 1 && (DD += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? DD = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(DD), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !zD) {
            let DD = 0;
            for (let zD = 0; zD < this._particles.length; zD++) {
              const wD = this._particles[zD];
              this._appendParticleVertices(DD, wD), DD += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const DD = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  zD = this._particles.length;
                zD < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, zD * DD, this._fixedCapacityHighWaterMark * DD), this._fixedCapacityHighWaterMark = zD, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const DD = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * DD), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let DD = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const zD = this._actualFrame / this.targetStopDuration;
          pD.l.GetCurrentGradient(zD, this._emitRateGradients, ((zD, wD, pD) => {
            zD !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = wD.getFactor(), this._currentEmitRateGradient = zD), DD = (0, fD.Lerp)(this._currentEmitRate1, this._currentEmitRate2, pD)
          }))
        }
        return DD
      }
      _appendParticleVertices(DD, zD) {
        this._appendParticleVertex(DD++, zD, 0, 0), this._useInstancing || (this._appendParticleVertex(DD++, zD, 1, 0), this._appendParticleVertex(DD++, zD, 1, 1), this._appendParticleVertex(DD, zD, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !jz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([wD.e(346).then((() => wD(61063))), wD.e(340).then((() => wD(61072)))])) : await Promise.all([wD.e(329).then((() => wD(61076))), Promise.all([wD.e(322), wD.e(356)]).then((() => wD(61084)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== ED.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(ED.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(ED.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(DD) {
        const zD = this._getWrapper(DD),
          wD = zD.effect,
          pD = this._engine;
        pD.enableEffect(zD);
        const sD = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        wD.setTexture("diffuseSampler", this.particleTexture), wD.setMatrix("view", sD);
        const rD = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (wD.setMatrix("projection", rD), this._isAnimationSheetEnabled && this.particleTexture) {
          const DD = this.particleTexture.getBaseSize();
          wD.setFloat3("particlesInfos", this.spriteCellWidth / DD.width, this.spriteCellHeight / DD.height, this.spriteCellWidth / DD.width)
        }
        if (wD.setVector2("translationPivot", this.translationPivot), wD.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const DD = this._scene.activeCamera;
          wD.setVector3("eyePosition", DD.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), wD.setTexture("rampSampler", this._rampGradientsTexture));
        const LD = wD.defines;
        this._scene && ((0, mD.f)(wD, this, this._scene), this.applyFog && (0, eD.k)(this._scene, void 0, wD)), LD.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (sD.invertToRef(KD.n.Matrix[0]), wD.setMatrix("invView", KD.n.Matrix[0])), wD._multiTarget && this._bindGeometryRendering(wD), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? pD.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, wD) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, wD)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? pD.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, wD) : pD.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, wD), this.useLogarithmicDepth && this._scene && (0, eD.q)(LD, wD, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(wD), this._setEngineBasedOnBlendMode(DD), wD._multiTarget && bz.d._BindZeroAlphaDiscard(pD, wD);
        let cD = !1;
        try {
          bz.d._BindAttachmentsForEffect(pD, wD) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(wD), this._useInstancing ? this._scene?.forceWireframe ? pD.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : pD.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? pD.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : pD.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), cD = !0)
        } finally {
          bz.d._RestoreAttachments(pD)
        }
        return cD ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const DD = this._engine;
        let zD;
        return DD.setState && (DD.setState(!1), this.forceDepthWrite && DD.setDepthWrite(!0)), zD = this.blendMode === ED.BLENDMODE_MULTIPLYADD ? this._render(ED.BLENDMODE_MULTIPLY) + this._render(ED.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), zD
      }
      _onDispose() {}
      dispose() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), DD && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), DD && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(zD, wD), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const DD = this._scene.XE.indexOf(this);
          DD > -1 && this._scene.XE.splice(DD, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Bl.notifyObservers(this), this.Bl.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    jz.ForceGLSL = !1;
    var dz, Sz = wD(37134);
    ! function(DD) {
      DD[DD.ATTACHED = 0] = "ATTACHED", DD[DD.END = 1] = "END"
    }(dz || (dz = {}));
    class iz {
      constructor(DD) {
        if (this.particleSystem = DD, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !DD.emitter || !DD.emitter.dispose) {
          const zD = (0, Sz.e)("BABYLON.AbstractMesh");
          DD.emitter = new zD("SubemitterSystemEmitter", DD.Ul()), DD._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let DD = this.particleSystem.emitter;
        if (DD) {
          if (DD instanceof KD.s) DD = DD.clone();
          else if (-1 !== DD.getClassName().indexOf("Mesh")) {
            DD = new((0, Sz.e)("BABYLON.Mesh"))("", DD.Ul()), DD.isVisible = !1
          }
        } else DD = new KD.s;
        const zD = new iz(this.particleSystem.clone(this.particleSystem.name, DD));
        return zD.particleSystem.name += "Clone", zD.type = this.type, zD.inheritDirection = this.inheritDirection, zD.inheritedVelocityAmount = this.inheritedVelocityAmount, zD.particleSystem._disposeEmitterOnDispose = !0, zD.particleSystem.disposeOnStop = !0, zD
      }
      serialize() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = {};
        return zD.type = this.type, zD.inheritDirection = this.inheritDirection, zD.inheritedVelocityAmount = this.inheritedVelocityAmount, zD.particleSystem = this.particleSystem.serialize(DD), zD
      }
      static _ParseParticleSystem(DD, zD, wD) {
        throw (0, lD.j)("ParseParticle")
      }
      static Parse(DD, zD, wD) {
        const pD = DD.particleSystem,
          sD = new iz(iz._ParseParticleSystem(pD, zD, wD, !0));
        return sD.type = DD.type, sD.inheritDirection = DD.inheritDirection, sD.inheritedVelocityAmount = DD.inheritedVelocityAmount, sD.particleSystem._isSubEmitter = !0, sD
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var lz = wD(39826),
      Wz = wD(39939);
    const Nz = () => {};
    class Zz {
      constructor() {
        this.particlePositionGenerator = Nz, this.particleDestinationGenerator = Nz, this.particleDirectionGenerator = Nz
      }
      startDirectionFunction(DD, zD, wD, pD) {
        const sD = KD.n.WI[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Nz) this.particleDirectionGenerator(-1, wD, sD);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Nz) {
          this.particleDestinationGenerator(-1, wD, sD);
          const DD = KD.n.WI[1];
          sD.subtractToRef(wD.position, DD), DD.scaleToRef(1 / wD.lifeTime, sD)
        } else sD.set(0, 0, 0);
        pD ? zD.pC(sD) : KD.s.TransformNormalToRef(sD, DD, zD)
      }
      startPositionFunction(DD, zD, wD, pD) {
        const sD = KD.n.WI[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Nz ? this.particlePositionGenerator(-1, wD, sD) : sD.set(0, 0, 0), pD ? zD.pC(sD) : KD.s.TransformCoordinatesToRef(sD, DD, zD)
      }
      clone() {
        const DD = new Zz;
        return UD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {}
      buildUniformLayout(DD) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.particlePositionGenerator = this.particlePositionGenerator, DD.particleDestinationGenerator = this.particleDestinationGenerator, DD
      }
      parse(DD) {
        DD.particlePositionGenerator && (this.particlePositionGenerator = DD.particlePositionGenerator), DD.particleDestinationGenerator && (this.particleDestinationGenerator = DD.particleDestinationGenerator)
      }
    }
    const yz = KD.s.Zero(),
      kz = KD.s.Zero(),
      mz = KD.s.Zero();
    class ez {
      constructor() {
        this.strength = 0, this.position = KD.s.Zero()
      }
      _processParticle(DD, zD) {
        this.position.subtractToRef(DD.position, yz);
        const wD = yz.lengthSquared() + 1;
        yz.normalize().scaleToRef(this.strength / wD, kz), kz.scaleToRef(zD._tempScaledUpdateSpeed, mz), DD.direction.addInPlace(mz)
      }
      serialize() {
        return {
          position: this.position.QpD(),
          strength: this.strength
        }
      }
    }
    const oz = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class az extends jz {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = DD => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const zD = Math.floor(Math.random() * this._subEmitters.length);
          for (const wD of this._subEmitters[zD])
            if (1 === wD.type) {
              const zD = wD.clone();
              DD._inheritParticleInfoToSubEmitter(zD), zD.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(zD.particleSystem), zD.particleSystem.start()
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
      set flowMap(DD) {
        this._flowMap !== DD && (this._flowMap = DD, this._flowMapUpdate && (Tz(this._flowMapUpdate), this._flowMapUpdate = null), DD && (this._flowMapUpdate = {
          process: DD => {
            const zD = this.Ul()?.getTransformMatrix();
            this._flowMap._processParticle(DD, this.flowMapStrength * this._tempScaledUpdateSpeed, zD)
          },
          previousItem: null,
          nextItem: null
        }, xz(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(DD) {
        super.addAttractor(DD), 1 === this._attractors.length && (this._attractorUpdate = {
          process: DD => {
            for (const zD of this._attractors) zD._processParticle(DD, this)
          },
          previousItem: null,
          nextItem: null
        }, xz(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(DD) {
        super.removeAttractor(DD), 0 === this._attractors.length && this._attractorUpdate && Tz(this._attractorUpdate)
      }
      start() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(DD)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const DD of this.subEmitters) DD instanceof az ? this._subEmitters.push([new iz(DD)]) : DD instanceof iz ? this._subEmitters.push([DD]) : DD instanceof Array && this._subEmitters.push(DD)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const DD of this.activeSubSystems) DD.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const DD = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== DD && this._rootParticleSystem.activeSubSystems.splice(DD, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(DD) {
        DD && this._stopSubEmitters()
      }
      _prepareParticle(DD) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const zD = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          DD._properties.attachedSubEmitters = [];
          for (const wD of zD)
            if (0 === wD.type) {
              const zD = wD.clone();
              DD._properties.attachedSubEmitters.push(zD), zD.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), DD && this.particles)
          for (const wD of this.particles)
            if (wD._properties.attachedSubEmitters)
              for (let DD = wD._properties.attachedSubEmitters.length - 1; DD >= 0; DD -= 1) wD._properties.attachedSubEmitters[DD].dispose();
        if (zD && this.activeSubSystems)
          for (let wD = this.activeSubSystems.length - 1; wD >= 0; wD -= 1) this.activeSubSystems[wD].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let DD = 0; DD < this._subEmitters.length; DD++)
            for (const zD of this._subEmitters[DD]) zD.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(DD, zD, wD, pD) {
        let sD;
        sD = wD instanceof lz.c ? null : wD;
        const rD = (0, Sz.e)("BABYLON.Texture");
        if (rD && sD)
          if (DD.texture) zD.particleTexture = rD.Parse(DD.texture, sD, pD);
          else if (DD.textureName) {
          const wD = DD.textureSettings;
          if (zD.particleTexture = new rD(pD + DD.textureName, sD, !1, void 0 === DD.invertY || DD.invertY, wD ? wD.samplingMode : void 0), zD.particleTexture.name = DD.textureName, wD) {
            const DD = zD.particleTexture;
            for (const zD of oz) void 0 !== wD[zD] && (DD[zD] = wD[zD])
          }
        }
        if (DD.emitterId || 0 === DD.emitterId || void 0 !== DD.emitter ? (DD.emitterId || 0 === DD.emitterId) && sD ? (zD.emitter = sD.getLastMeshById(DD.emitterId), zD.emitter || (zD.emitter = KD.s.Zero())) : zD.emitter = KD.s.FromArray(DD.emitter) : zD.emitter = KD.s.Zero(), zD.isLocal = !!DD.isLocal, void 0 !== DD.renderingGroupId && (zD.renderingGroupId = DD.renderingGroupId), void 0 !== DD.isBillboardBased && (zD.isBillboardBased = DD.isBillboardBased), void 0 !== DD.billboardMode && (zD.billboardMode = DD.billboardMode), void 0 !== DD.useLogarithmicDepth && (zD.useLogarithmicDepth = DD.useLogarithmicDepth), DD.animations) {
          for (let wD = 0; wD < DD.animations.length; wD++) {
            const pD = DD.animations[wD],
              sD = (0, Sz.e)("BABYLON.Animation");
            sD && zD.animations.push(sD.Parse(pD))
          }
          zD.beginAnimationOnStart = DD.beginAnimationOnStart, zD.beginAnimationFrom = DD.beginAnimationFrom, zD.beginAnimationTo = DD.beginAnimationTo, zD.beginAnimationLoop = DD.beginAnimationLoop
        }
        if (DD.autoAnimate && sD && sD.beginAnimation(zD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), zD.startDelay = 0 | DD.startDelay, zD.minAngularSpeed = DD.minAngularSpeed, zD.maxAngularSpeed = DD.maxAngularSpeed, zD.minSize = DD.minSize, zD.maxSize = DD.maxSize, DD.minScaleX && (zD.minScaleX = DD.minScaleX, zD.maxScaleX = DD.maxScaleX, zD.minScaleY = DD.minScaleY, zD.maxScaleY = DD.maxScaleY), void 0 !== DD.preWarmCycles && (zD.preWarmCycles = DD.preWarmCycles, zD.preWarmStepOffset = DD.preWarmStepOffset), void 0 !== DD.minInitialRotation && (zD.minInitialRotation = DD.minInitialRotation, zD.maxInitialRotation = DD.maxInitialRotation), zD.minLifeTime = DD.minLifeTime, zD.maxLifeTime = DD.maxLifeTime, zD.minEmitPower = DD.minEmitPower, zD.maxEmitPower = DD.maxEmitPower, zD.emitRate = DD.emitRate, zD.gravity = KD.s.FromArray(DD.gravity), DD.noiseStrength && (zD.noiseStrength = KD.s.FromArray(DD.noiseStrength)), zD.color1 = RD.h.FromArray(DD.color1), zD.color2 = RD.h.FromArray(DD.color2), zD.colorDead = RD.h.FromArray(DD.colorDead), zD.updateSpeed = DD.updateSpeed, zD.targetStopDuration = DD.targetStopDuration, zD.blendMode = DD.blendMode, DD.colorGradients)
          for (const KD of DD.colorGradients) zD.addColorGradient(KD.gradient, RD.h.FromArray(KD.color1), KD.color2 ? RD.h.FromArray(KD.color2) : void 0);
        if (DD.rampGradients) {
          for (const wD of DD.rampGradients) zD.addRampGradient(wD.gradient, RD.d.FromArray(wD.color));
          zD.useRampGradients = DD.useRampGradients
        }
        if (DD.colorRemapGradients)
          for (const KD of DD.colorRemapGradients) zD.addColorRemapGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.alphaRemapGradients)
          for (const KD of DD.alphaRemapGradients) zD.addAlphaRemapGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.sizeGradients)
          for (const KD of DD.sizeGradients) zD.addSizeGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.angularSpeedGradients)
          for (const KD of DD.angularSpeedGradients) zD.addAngularSpeedGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.velocityGradients)
          for (const KD of DD.velocityGradients) zD.addVelocityGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.dragGradients)
          for (const KD of DD.dragGradients) zD.addDragGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.emitRateGradients)
          for (const KD of DD.emitRateGradients) zD.addEmitRateGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.startSizeGradients)
          for (const KD of DD.startSizeGradients) zD.addStartSizeGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.lifeTimeGradients)
          for (const KD of DD.lifeTimeGradients) zD.addLifeTimeGradient(KD.gradient, void 0 !== KD.factor1 ? KD.factor1 : KD.factor, KD.factor2);
        if (DD.limitVelocityGradients) {
          for (const wD of DD.limitVelocityGradients) zD.addLimitVelocityGradient(wD.gradient, void 0 !== wD.factor1 ? wD.factor1 : wD.factor, wD.factor2);
          zD.limitVelocityDamping = DD.limitVelocityDamping
        }
        if (DD.noiseTexture && sD) {
          const wD = (0, Sz.e)("BABYLON.ProceduralTexture");
          zD.noiseTexture = wD.Parse(DD.noiseTexture, sD, pD)
        }
        let LD;
        if (DD.particleEmitterType) {
          switch (DD.particleEmitterType.type) {
            case "SphereParticleEmitter":
              LD = new GD;
              break;
            case "SphereDirectedParticleEmitter":
              LD = new hD;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              LD = new MD;
              break;
            case "ConeDirectedParticleEmitter":
              LD = new OD;
              break;
            case "CylinderParticleEmitter":
              LD = new nD.f;
              break;
            case "CylinderDirectedParticleEmitter":
              LD = new nD.d;
              break;
            case "HemisphericParticleEmitter":
              LD = new BD;
              break;
            case "PointParticleEmitter":
              LD = new ID;
              break;
            case "MeshParticleEmitter":
              LD = new JD;
              break;
            case "CustomParticleEmitter":
              LD = new Zz;
              break;
            default:
              LD = new AD.e
          }
          LD.parse(DD.particleEmitterType, sD)
        } else LD = new AD.e, LD.parse(DD, sD);
        zD.particleEmitterType = LD, zD.startSpriteCellID = DD.startSpriteCellID, zD.endSpriteCellID = DD.endSpriteCellID, zD.spriteCellLoop = DD.spriteCellLoop ?? !0, zD.spriteCellWidth = DD.spriteCellWidth, zD.spriteCellHeight = DD.spriteCellHeight, zD.spriteCellChangeSpeed = DD.spriteCellChangeSpeed, zD.spriteRandomStartCell = DD.spriteRandomStartCell, zD.disposeOnStop = DD.disposeOnStop ?? !1, zD.manualEmitCount = DD.manualEmitCount ?? -1
      }
      static Parse(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          sD = arguments.length > 4 ? arguments[4] : void 0;
        const rD = DD.name;
        let LD, cD, gD = null,
          AD = null;
        if (zD instanceof lz.c ? LD = zD : (cD = zD, LD = cD.iI()), DD.customShader && (0, lD.d)(LD.createEffectForParticles)) {
          AD = DD.customShader;
          const zD = AD.shaderOptions.defines.length > 0 ? AD.shaderOptions.defines.join("\n") : "";
          gD = LD.createEffectForParticles(AD.shaderPath.fragmentElement, AD.shaderOptions.uniforms, AD.shaderOptions.samplers, zD)
        }
        const UD = new az(rD, sD || DD.bA, zD, gD, DD.isAnimationSheetEnabled);
        if (UD.customShader = AD, UD._rootUrl = wD, DD.id && (UD.id = DD.id), DD.subEmitters) {
          UD.subEmitters = [];
          for (const pD of DD.subEmitters) {
            const DD = [];
            for (const sD of pD) DD.push(iz.Parse(sD, zD, wD));
            UD.subEmitters.push(DD)
          }
        }
        if (DD.attractors)
          for (const RD of DD.attractors) {
            const DD = new ez;
            DD.position = KD.s.FromArray(RD.position), DD.strength = RD.strength, UD.addAttractor(DD)
          }
        return az._Parse(DD, UD, zD, wD), DD.textureMask && (UD.textureMask = RD.h.FromArray(DD.textureMask)), DD.worldOffset && (UD.worldOffset = KD.s.FromArray(DD.worldOffset)), DD.preventAutoStart && (UD.preventAutoStart = DD.preventAutoStart), DD.metadata && (UD.metadata = DD.metadata), pD || UD.preventAutoStart || UD.start(), UD
      }
      serialize() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = {};
        if (az._Serialize(zD, this, DD), zD.textureMask = this.textureMask.QpD(), zD.customShader = this.customShader, zD.preventAutoStart = this.preventAutoStart, zD.worldOffset = this.worldOffset.QpD(), this.metadata && (zD.metadata = this.metadata), this.subEmitters) {
          zD.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const wD of this._subEmitters) {
            const pD = [];
            for (const zD of wD) zD.particleSystem.doNotSerialize || pD.push(zD.serialize(DD));
            zD.subEmitters.push(pD)
          }
        }
        if (this._attractors && this._attractors.length) {
          zD.attractors = [];
          for (const DD of this._attractors) zD.attractors.push(DD.serialize())
        }
        return zD
      }
      static _Serialize(DD, zD, wD) {
        if (DD.name = zD.name, DD.id = zD.id, DD.bA = zD.getCapacity(), DD.disposeOnStop = zD.disposeOnStop, DD.manualEmitCount = zD.manualEmitCount, zD.emitter.position) {
          const wD = zD.emitter;
          DD.emitterId = wD.id
        } else {
          const wD = zD.emitter;
          DD.emitter = wD.QpD()
        }
        if (zD.particleEmitterType && (DD.particleEmitterType = zD.particleEmitterType.serialize()), zD.particleTexture)
          if (wD) DD.texture = zD.particleTexture.serialize();
          else {
            const wD = zD.particleTexture;
            DD.textureName = zD.particleTexture.name, DD.invertY = !!wD._invertY;
            const pD = {};
            for (const DD of oz) pD[DD] = wD[DD];
            pD.samplingMode = wD.samplingMode, DD.textureSettings = pD
          } DD.isLocal = zD.isLocal, Wz.d.AppendSerializedAnimations(zD, DD), DD.beginAnimationOnStart = zD.beginAnimationOnStart, DD.beginAnimationFrom = zD.beginAnimationFrom, DD.beginAnimationTo = zD.beginAnimationTo, DD.beginAnimationLoop = zD.beginAnimationLoop, DD.startDelay = zD.startDelay, DD.renderingGroupId = zD.renderingGroupId, DD.isBillboardBased = zD.isBillboardBased, DD.billboardMode = zD.billboardMode, DD.minAngularSpeed = zD.minAngularSpeed, DD.maxAngularSpeed = zD.maxAngularSpeed, DD.minSize = zD.minSize, DD.maxSize = zD.maxSize, DD.minScaleX = zD.minScaleX, DD.maxScaleX = zD.maxScaleX, DD.minScaleY = zD.minScaleY, DD.maxScaleY = zD.maxScaleY, DD.minEmitPower = zD.minEmitPower, DD.maxEmitPower = zD.maxEmitPower, DD.minLifeTime = zD.minLifeTime, DD.maxLifeTime = zD.maxLifeTime, DD.emitRate = zD.emitRate, DD.gravity = zD.gravity.QpD(), DD.noiseStrength = zD.noiseStrength.QpD(), DD.color1 = zD.color1.QpD(), DD.color2 = zD.color2.QpD(), DD.colorDead = zD.colorDead.QpD(), DD.updateSpeed = zD.updateSpeed, DD.targetStopDuration = zD.targetStopDuration, DD.blendMode = zD.blendMode, DD.preWarmCycles = zD.preWarmCycles, DD.preWarmStepOffset = zD.preWarmStepOffset, DD.minInitialRotation = zD.minInitialRotation, DD.maxInitialRotation = zD.maxInitialRotation, DD.startSpriteCellID = zD.startSpriteCellID, DD.spriteCellLoop = zD.spriteCellLoop, DD.endSpriteCellID = zD.endSpriteCellID, DD.spriteCellChangeSpeed = zD.spriteCellChangeSpeed, DD.spriteCellWidth = zD.spriteCellWidth, DD.spriteCellHeight = zD.spriteCellHeight, DD.spriteRandomStartCell = zD.spriteRandomStartCell, DD.isAnimationSheetEnabled = zD.isAnimationSheetEnabled, DD.useLogarithmicDepth = zD.useLogarithmicDepth;
        const pD = zD.getColorGradients();
        if (pD) {
          DD.colorGradients = [];
          for (const zD of pD) {
            const wD = {
              gradient: zD.gradient,
              color1: zD.color1.QpD()
            };
            zD.color2 ? wD.color2 = zD.color2.QpD() : wD.color2 = zD.color1.QpD(), DD.colorGradients.push(wD)
          }
        }
        const sD = zD.getRampGradients();
        if (sD) {
          DD.rampGradients = [];
          for (const zD of sD) {
            const wD = {
              gradient: zD.gradient,
              color: zD.color.QpD()
            };
            DD.rampGradients.push(wD)
          }
          DD.useRampGradients = zD.useRampGradients
        }
        const KD = zD.getColorRemapGradients();
        if (KD) {
          DD.colorRemapGradients = [];
          for (const zD of KD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.colorRemapGradients.push(wD)
          }
        }
        const rD = zD.getAlphaRemapGradients();
        if (rD) {
          DD.alphaRemapGradients = [];
          for (const zD of rD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.alphaRemapGradients.push(wD)
          }
        }
        const LD = zD.getSizeGradients();
        if (LD) {
          DD.sizeGradients = [];
          for (const zD of LD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.sizeGradients.push(wD)
          }
        }
        const cD = zD.getAngularSpeedGradients();
        if (cD) {
          DD.angularSpeedGradients = [];
          for (const zD of cD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.angularSpeedGradients.push(wD)
          }
        }
        const gD = zD.getVelocityGradients();
        if (gD) {
          DD.velocityGradients = [];
          for (const zD of gD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.velocityGradients.push(wD)
          }
        }
        const RD = zD.getDragGradients();
        if (RD) {
          DD.dragGradients = [];
          for (const zD of RD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.dragGradients.push(wD)
          }
        }
        const AD = zD.getEmitRateGradients();
        if (AD) {
          DD.emitRateGradients = [];
          for (const zD of AD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.emitRateGradients.push(wD)
          }
        }
        const UD = zD.getStartSizeGradients();
        if (UD) {
          DD.startSizeGradients = [];
          for (const zD of UD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.startSizeGradients.push(wD)
          }
        }
        const fD = zD.getLifeTimeGradients();
        if (fD) {
          DD.lifeTimeGradients = [];
          for (const zD of fD) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.lifeTimeGradients.push(wD)
          }
        }
        const ID = zD.getLimitVelocityGradients();
        if (ID) {
          DD.limitVelocityGradients = [];
          for (const zD of ID) {
            const wD = {
              gradient: zD.gradient,
              factor1: zD.factor1
            };
            void 0 !== zD.factor2 ? wD.factor2 = zD.factor2 : wD.factor2 = zD.factor1, DD.limitVelocityGradients.push(wD)
          }
          DD.limitVelocityDamping = zD.limitVelocityDamping
        }
        zD.noiseTexture && (DD.noiseTexture = zD.noiseTexture.serialize())
      }
      clone(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = {
          ...this._customWrappers
        };
        let sD = null;
        const KD = this._engine;
        if ((0, lD.d)(KD.createEffectForParticles) && null != this.customShader) {
          sD = this.customShader;
          const DD = sD.shaderOptions.defines.length > 0 ? sD.shaderOptions.defines.join("\n") : "",
            zD = KD.createEffectForParticles(sD.shaderPath.fragmentElement, sD.shaderOptions.uniforms, sD.shaderOptions.samplers, DD);
          pD[0] ? pD[0].effect = zD : this.setCustomEffect(zD, 0)
        }
        const rD = this.serialize(wD),
          LD = !1 === wD && this.particleTexture ? this.particleTexture.clone() : null;
        LD && (rD.textureName = void 0);
        const cD = az.Parse(rD, this._scene || this._engine, this._rootUrl);
        return cD.name = DD, cD.customShader = sD, cD._customWrappers = pD, LD && (cD.particleTexture = LD), void 0 === zD && (zD = this.emitter), this.noiseTexture && (cD.noiseTexture = this.noiseTexture.clone()), cD.emitter = zD, this.preventAutoStart || cD.start(), cD
      }
    }
    az.BILLBOARDMODE_Y = 2, az.BILLBOARDMODE_ALL = 7, az.BILLBOARDMODE_STRETCHED = 8, az.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let uz = !1;
    uz || (uz = !0, iz._ParseParticleSystem = az.Parse)
  },
  41531: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      SkyMaterial: () => MD,
      _MaxColorValueForRenderTarget: () => nD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(39939),
      rD = wD(37070),
      LD = wD(40217),
      cD = wD(40270),
      gD = wD(41491),
      RD = wD(41066),
      AD = wD(40015),
      UD = wD(37134),
      fD = wD(40302),
      ID = wD(40278),
      BD = wD(40263),
      GD = wD(40254);
    class hD extends LD.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function nD(DD) {
      switch (DD) {
        case gD.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case gD.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let MD = (() => {
      var DD;
      let zD, LD, gD, UD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD = cD.d,
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [],
        kD = [],
        mD = [],
        eD = [],
        oD = [],
        aD = [],
        uD = [],
        vD = [],
        tD = [],
        FD = [],
        YD = [],
        HD = [],
        qD = [],
        Dz = [],
        zz = [],
        wz = [],
        pz = [],
        sz = [],
        Kz = [],
        rz = [],
        Lz = [],
        cz = [];
      return DD = class extends bD {
        constructor(DD, zD) {
          super(DD, zD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, pD.m)(this, jD, 1), this.turbidity = ((0, pD.m)(this, dD), (0, pD.m)(this, SD, 10)), this.rayleigh = ((0, pD.m)(this, iD), (0, pD.m)(this, lD, 2)), this.mieCoefficient = ((0, pD.m)(this, WD), (0, pD.m)(this, ND, .005)), this.mieDirectionalG = ((0, pD.m)(this, ZD), (0, pD.m)(this, yD, .8)), this.distance = ((0, pD.m)(this, kD), (0, pD.m)(this, mD, 500)), this.inclination = ((0, pD.m)(this, eD), (0, pD.m)(this, oD, .49)), this.azimuth = ((0, pD.m)(this, aD), (0, pD.m)(this, uD, .25)), this.sunPosition = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, new rD.WI(0, 100, 0))), this.useSunPosition = ((0, pD.m)(this, FD), (0, pD.m)(this, YD, !1)), this.cameraOffset = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, rD.WI.Zero())), this.up = ((0, pD.m)(this, Dz), (0, pD.m)(this, zz, rD.WI.Up())), this.dithering = ((0, pD.m)(this, wz), (0, pD.m)(this, pz, !1)), this.rawHdrOutput = ((0, pD.m)(this, sz), (0, pD.m)(this, Kz, !1)), this.cloudiness = ((0, pD.m)(this, rz), (0, pD.m)(this, Lz, 0)), this._cameraPosition = ((0, pD.m)(this, cz), rD.WI.Zero()), this._skyOrientation = new rD.Quaternion
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
        isReadyForSubMesh(zD, wD) {
          const pD = wD._drawWrapper;
          if (this.isFrozen && pD.effect && pD._wasPreviouslyReady) return !0;
          wD.materialDefines || (wD.materialDefines = new hD);
          const sD = wD.materialDefines,
            KD = this.Ul();
          if (this._isReadyForSubMesh(wD)) return !0;
          if ((0, GD.hb)(zD, KD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, sD, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, GD.S)(zD, sD, !0, !1), sD.IMAGEPROCESSINGPOSTPROCESS !== KD.imageProcessingConfiguration.applyByPostProcess && sD.markAsMiscDirty(), sD.DITHER !== this.dithering && sD.markAsMiscDirty(), sD.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && sD.markAsMiscDirty(), sD.isDirty) {
            sD.markAsProcessed(), KD.resetCachedMaterial();
            const zD = new ID.b;
            sD.FOG && zD.addFallback(1, "FOG"), sD.IMAGEPROCESSINGPOSTPROCESS = KD.imageProcessingConfiguration.applyByPostProcess, sD.DITHER = this.dithering, sD.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const pD = [RD.f.PositionKind];
            sD.VERTEXCOLOR && pD.push(RD.f.ColorKind);
            const rD = "sky",
              LD = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, BD.e)(LD);
            const cD = sD.toString();
            wD.setEffect(KD.iI().createEffect(rD, {
              attributes: pD,
              uniformsNames: LD,
              uniformBuffersNames: [],
              samplers: [],
              defines: cD,
              fallbacks: zD,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, KD.iI()), sD, this._materialContext)
          }
          return !(!wD.effect || !wD.effect.isReady()) && (sD._renderId = KD.getRenderId(), pD._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(DD, zD, wD) {
          const pD = this.Ul(),
            sD = wD.materialDefines;
          if (!sD) return;
          const KD = wD.effect;
          if (!KD) return;
          this._activeEffect = KD, this.bindOnlyWorldMatrix(DD), this._activeEffect.setMatrix("viewProjection", pD.getTransformMatrix()), this._mustRebind(pD, KD, wD) && ((0, BD.f)(KD, this, pD), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, GD.q)(sD, KD, pD)), pD.fogEnabled && zD.applyFog && pD.fogMode !== AD.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", pD.getViewMatrix()), (0, GD.k)(pD, zD, this._activeEffect, this.rawHdrOutput);
          const LD = pD.activeCamera;
          if (LD) {
            const DD = LD.getWorldMatrix();
            this._cameraPosition.x = DD.m[12], this._cameraPosition.y = DD.m[13], this._cameraPosition.z = DD.m[14], this._activeEffect.setVector3("cameraPosition", rD.TmpVectors.WI[0].pC(this._cameraPosition).apD(pD.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const DD = pD.iI()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", nD(DD?.texture?.type))
          }
          if (!this.useSunPosition) {
            const DD = Math.PI * (this.inclination - .5),
              zD = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(zD) * Math.cos(DD), this.sunPosition.y = this.distance * Math.sin(-DD), this.sunPosition.z = this.distance * Math.sin(zD) * Math.cos(DD), rD.Quaternion.FromUnitVectorsToRef(rD.WI.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(zD, this._activeEffect, wD)
        }
        getAnimatables() {
          return []
        }
        dispose(DD) {
          super.dispose(DD)
        }
        clone(zD) {
          return KD.d.Clone((() => new DD(zD, this.Ul())), this)
        }
        serialize() {
          const DD = super.serialize();
          return DD.customType = "BABYLON.SkyMaterial", DD
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(zD, wD, pD) {
          return KD.d.Parse((() => new DD(zD.name, wD)), zD, wD, pD)
        }
      }, (() => {
        const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(bD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, sD.C)()], LD = [(0, sD.C)()], gD = [(0, sD.C)()], UD = [(0, sD.C)()], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.B)()], XD = [(0, sD.C)()], VD = [(0, sD.B)()], PD = [(0, sD.B)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], TD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: DD => "luminance" in DD,
            get: DD => DD.luminance,
            set: (DD, zD) => {
              DD.luminance = zD
            }
          },
          metadata: wD
        }, jD, dD), (0, pD.i)(null, null, LD, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: DD => "turbidity" in DD,
            get: DD => DD.turbidity,
            set: (DD, zD) => {
              DD.turbidity = zD
            }
          },
          metadata: wD
        }, SD, iD), (0, pD.i)(null, null, gD, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: DD => "rayleigh" in DD,
            get: DD => DD.rayleigh,
            set: (DD, zD) => {
              DD.rayleigh = zD
            }
          },
          metadata: wD
        }, lD, WD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: DD => "mieCoefficient" in DD,
            get: DD => DD.mieCoefficient,
            set: (DD, zD) => {
              DD.mieCoefficient = zD
            }
          },
          metadata: wD
        }, ND, ZD), (0, pD.i)(null, null, MD, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: DD => "mieDirectionalG" in DD,
            get: DD => DD.mieDirectionalG,
            set: (DD, zD) => {
              DD.mieDirectionalG = zD
            }
          },
          metadata: wD
        }, yD, kD), (0, pD.i)(null, null, OD, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: DD => "distance" in DD,
            get: DD => DD.distance,
            set: (DD, zD) => {
              DD.distance = zD
            }
          },
          metadata: wD
        }, mD, eD), (0, pD.i)(null, null, JD, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: DD => "inclination" in DD,
            get: DD => DD.inclination,
            set: (DD, zD) => {
              DD.inclination = zD
            }
          },
          metadata: wD
        }, oD, aD), (0, pD.i)(null, null, ED, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: DD => "azimuth" in DD,
            get: DD => DD.azimuth,
            set: (DD, zD) => {
              DD.azimuth = zD
            }
          },
          metadata: wD
        }, uD, vD), (0, pD.i)(null, null, QD, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: DD => "sunPosition" in DD,
            get: DD => DD.sunPosition,
            set: (DD, zD) => {
              DD.sunPosition = zD
            }
          },
          metadata: wD
        }, tD, FD), (0, pD.i)(null, null, XD, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSunPosition" in DD,
            get: DD => DD.useSunPosition,
            set: (DD, zD) => {
              DD.useSunPosition = zD
            }
          },
          metadata: wD
        }, YD, HD), (0, pD.i)(null, null, VD, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: DD => "cameraOffset" in DD,
            get: DD => DD.cameraOffset,
            set: (DD, zD) => {
              DD.cameraOffset = zD
            }
          },
          metadata: wD
        }, qD, Dz), (0, pD.i)(null, null, PD, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: DD => "up" in DD,
            get: DD => DD.up,
            set: (DD, zD) => {
              DD.up = zD
            }
          },
          metadata: wD
        }, zz, wz), (0, pD.i)(null, null, CD, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: DD => "dithering" in DD,
            get: DD => DD.dithering,
            set: (DD, zD) => {
              DD.dithering = zD
            }
          },
          metadata: wD
        }, pz, sz), (0, pD.i)(null, null, xD, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: DD => "rawHdrOutput" in DD,
            get: DD => DD.rawHdrOutput,
            set: (DD, zD) => {
              DD.rawHdrOutput = zD
            }
          },
          metadata: wD
        }, Kz, rz), (0, pD.i)(null, null, TD, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: DD => "cloudiness" in DD,
            get: DD => DD.cloudiness,
            set: (DD, zD) => {
              DD.cloudiness = zD
            }
          },
          metadata: wD
        }, Lz, cz), wD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wD
        })
      })(), DD._ShaderLoader = new fD.d((() => [wD.e(330).then((() => wD(61089))), wD.e(323).then((() => wD(61093)))]), (() => [wD.e(347).then((() => wD(61096))), wD.e(341).then((() => wD(61103)))])), DD
    })();
    (0, UD.i)("BABYLON.SkyMaterial", MD)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);