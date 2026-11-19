export const id = 294;
export const ids = [294];
export const modules = {
  40683: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(39257),
      pD = cD(40689);
    class iD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = cD, this.RcD = [], this._maxBlockCapacity = CD || 64, this._selectionContent = new ID.e(1024), this._creationFunc = DD
      }
      update(DD, CD, cD) {
        pD.c._CreateBlocks(DD, CD, cD, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      HcD(DD) {
        for (let CD = 0; CD < this.blocks.length; CD++) {
          this.blocks[CD].addEntry(DD)
        }
      }
      MJ(DD) {
        for (let CD = 0; CD < this.blocks.length; CD++) {
          this.blocks[CD].removeEntry(DD)
        }
      }
      select(DD, CD) {
        this._selectionContent.reset();
        for (let cD = 0; cD < this.blocks.length; cD++) {
          this.blocks[cD].select(DD, this._selectionContent, CD)
        }
        return CD ? this._selectionContent.concat(this.RcD) : this._selectionContent.concatWithNoDuplicate(this.RcD), this._selectionContent
      }
      intersects(DD, CD, cD) {
        this._selectionContent.reset();
        for (let ID = 0; ID < this.blocks.length; ID++) {
          this.blocks[ID].intersects(DD, CD, this._selectionContent, cD)
        }
        return cD ? this._selectionContent.concat(this.RcD) : this._selectionContent.concatWithNoDuplicate(this.RcD), this._selectionContent
      }
      intersectsRay(DD) {
        this._selectionContent.reset();
        for (let CD = 0; CD < this.blocks.length; CD++) {
          this.blocks[CD].intersectsRay(DD, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.RcD), this._selectionContent
      }
    }
    iD.CreationFuncForMeshes = (DD, CD) => {
      const cD = DD.VJ();
      !DD.isBlocked && cD.boundingBox.intersectsMinMax(CD.KcD, CD.JcD) && CD.entries.push(DD)
    }, iD.CreationFuncForSubMeshes = (DD, CD) => {
      DD.VJ().boundingBox.intersectsMinMax(CD.KcD, CD.JcD) && CD.entries.push(DD)
    }
  },
  40689: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(36446),
      pD = cD(39447);
    class iD {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.entries = [], this.kcD = new Array, this._capacity = cD, this._depth = ID, this._maxDepth = pD, this._creationFunc = iD, this._minPoint = DD, this._maxPoint = CD, this.kcD.push(DD.clone()), this.kcD.push(CD.clone()), this.kcD.push(DD.clone()), this.kcD[2].x = CD.x, this.kcD.push(DD.clone()), this.kcD[3].y = CD.y, this.kcD.push(DD.clone()), this.kcD[4].z = CD.z, this.kcD.push(CD.clone()), this.kcD[5].z = DD.z, this.kcD.push(CD.clone()), this.kcD[6].x = DD.x, this.kcD.push(CD.clone()), this.kcD[7].y = DD.y
      }
      get LB() {
        return this._capacity
      }
      get KcD() {
        return this._minPoint
      }
      get JcD() {
        return this._maxPoint
      }
      addEntry(DD) {
        if (this.blocks)
          for (let CD = 0; CD < this.blocks.length; CD++) {
            this.blocks[CD].addEntry(DD)
          } else this._creationFunc(DD, this), this.entries.length > this.LB && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(DD) {
        if (this.blocks) {
          for (let CD = 0; CD < this.blocks.length; CD++) {
            this.blocks[CD].removeEntry(DD)
          }
          return
        }
        const CD = this.entries.indexOf(DD);
        CD > -1 && this.entries.splice(CD, 1)
      }
      addEntries(DD) {
        for (let CD = 0; CD < DD.length; CD++) {
          const cD = DD[CD];
          this.addEntry(cD)
        }
      }
      select(DD, CD, cD) {
        if (pD.c.IsInFrustum(this.kcD, DD)) {
          if (this.blocks) {
            for (let ID = 0; ID < this.blocks.length; ID++) {
              this.blocks[ID].select(DD, CD, cD)
            }
            return
          }
          cD ? CD.concat(this.entries) : CD.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(DD, CD, cD, ID) {
        if (pD.c.IntersectsSphere(this._minPoint, this._maxPoint, DD, CD)) {
          if (this.blocks) {
            for (let pD = 0; pD < this.blocks.length; pD++) {
              this.blocks[pD].intersects(DD, CD, cD, ID)
            }
            return
          }
          ID ? cD.concat(this.entries) : cD.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(DD, CD) {
        if (DD.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let cD = 0; cD < this.blocks.length; cD++) {
              this.blocks[cD].intersectsRay(DD, CD)
            }
            return
          }
          CD.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        iD._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(DD, CD, cD, pD, fD, bD, QD, wD) {
        QD.blocks = new Array;
        const SD = new ID.p((CD.x - DD.x) / 2, (CD.y - DD.y) / 2, (CD.z - DD.z) / 2);
        for (let ID = 0; ID < 2; ID++)
          for (let CD = 0; CD < 2; CD++)
            for (let BD = 0; BD < 2; BD++) {
              const yD = DD.add(SD.multiplyByFloats(ID, CD, BD)),
                MD = DD.add(SD.multiplyByFloats(ID + 1, CD + 1, BD + 1)),
                tD = new iD(yD, MD, pD, fD + 1, bD, wD);
              tD.addEntries(cD), QD.blocks.push(tD)
            }
      }
    }
  },
  40694: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD
    });
    var ID = cD(39239),
      pD = cD(36446),
      iD = cD(39567),
      fD = cD(40625),
      bD = cD(39315),
      QD = cD(36464),
      wD = cD(40683);
    class SD {
      constructor(DD) {
        this.name = bD.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new fD.z(pD.p.Zero(), new pD.p(1, 1, 1)), (DD = DD || QD.b.LastCreatedScene) && (this.wo = DD, this.wo.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.wo.getActiveSubMeshCandidates = DD => this.getActiveSubMeshCandidates(DD), this.wo.getCollidingSubMeshCandidates = (DD, CD) => this.getCollidingSubMeshCandidates(DD, CD), this.wo.getIntersectingSubMeshCandidates = (DD, CD) => this.getIntersectingSubMeshCandidates(DD, CD))
      }
      register() {
        this.wo.onMeshRemovedObservable.add((DD => {
          const CD = this.wo.selectionOctree;
          if (void 0 !== CD && null !== CD) {
            const cD = CD.RcD.indexOf(DD); - 1 !== cD && CD.RcD.splice(cD, 1)
          }
        })), this.wo.onMeshImportedObservable.add((DD => {
          const CD = this.wo.selectionOctree;
          void 0 !== CD && null !== CD && CD.HcD(DD)
        }))
      }
      getActiveMeshCandidates() {
        return this.wo.ucD?.select(this.wo.frustumPlanes) || this.wo._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(DD) {
        if (DD._submeshesOctree && DD.useOctreeForRenderingSelection) {
          return DD._submeshesOctree.select(this.wo.frustumPlanes)
        }
        return this.wo._getDefaultSubMeshCandidates(DD)
      }
      getIntersectingSubMeshCandidates(DD, CD) {
        if (DD._submeshesOctree && DD.useOctreeForPicking) {
          fD.z.TransformToRef(CD, DD.getWorldMatrix(), this._tempRay);
          return DD._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.wo._getDefaultSubMeshCandidates(DD)
      }
      getCollidingSubMeshCandidates(DD, CD) {
        if (DD._submeshesOctree && DD.useOctreeForCollisions) {
          const cD = CD._velocityWorldLength + Math.max(CD._radius.x, CD._radius.y, CD._radius.z);
          return DD._submeshesOctree.intersects(CD._basePointWorld, cD)
        }
        return this.wo._getDefaultSubMeshCandidates(DD)
      }
      rebuild() {}
      dispose() {}
    }
    let BD = !1;
    BD || (BD = !0, ID.e.prototype.createOrUpdateSelectionOctree = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        cD = this._getComponent(bD.c.NAME_OCTREE);
      cD || (cD = new SD(this), this.fcD(cD)), this.ucD || (this.ucD = new wD.c(wD.c.CreationFuncForMeshes, DD, CD));
      const ID = this.getWorldExtends();
      return this.ucD.update(ID.min, ID.max, this.meshes), this.ucD
    }, Object.defineProperty(ID.e.prototype, "selectionOctree", {
      get: function() {
        return this.ucD
      },
      enumerable: !0,
      configurable: !0
    }), iD.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const cD = this.hq();
      let ID = cD._getComponent(bD.c.NAME_OCTREE);
      ID || (ID = new SD(cD), cD.fcD(ID)), this._submeshesOctree || (this._submeshesOctree = new wD.c(wD.c.CreationFuncForSubMeshes, DD, CD)), this.computeWorldMatrix(!0);
      const pD = this.VJ().boundingBox;
      return this._submeshesOctree.update(pD.minimumWorld, pD.maximumWorld, this.IH), this._submeshesOctree
    })
  },
  40625: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => JD,
      h: () => ZD,
      j: () => tD,
      k: () => MD,
      l: () => xD,
      o: () => UD,
      p: () => OD,
      t: () => HD,
      x: () => PD,
      z: () => BD
    });
    var ID = cD(36449),
      pD = cD(36446),
      iD = cD(36452),
      fD = cD(39433),
      bD = cD(39284),
      QD = cD(36464),
      wD = cD(39339);
    const SD = {
      internalPickerForMesh: void 0
    };
    class BD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ID.c;
        this.origin = DD, this.direction = CD, this.length = cD, this.epsilon = pD
      }
      clone() {
        return new BD(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const ID = BD._TmpVector3[0].K4(DD.x - cD, DD.y - cD, DD.z - cD),
          pD = BD._TmpVector3[1].K4(CD.x + cD, CD.y + cD, CD.z + cD);
        let iD, fD, bD, QD, wD = 0,
          SD = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < ID.x || this.origin.x > pD.x) return !1
        } else if (iD = 1 / this.direction.x, fD = (ID.x - this.origin.x) * iD, bD = (pD.x - this.origin.x) * iD, bD === -1 / 0 && (bD = 1 / 0), fD > bD && (QD = fD, fD = bD, bD = QD), wD = Math.max(fD, wD), SD = Math.min(bD, SD), wD > SD) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < ID.y || this.origin.y > pD.y) return !1
        } else if (iD = 1 / this.direction.y, fD = (ID.y - this.origin.y) * iD, bD = (pD.y - this.origin.y) * iD, bD === -1 / 0 && (bD = 1 / 0), fD > bD && (QD = fD, fD = bD, bD = QD), wD = Math.max(fD, wD), SD = Math.min(bD, SD), wD > SD) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < ID.z || this.origin.z > pD.z) return !1
        } else if (iD = 1 / this.direction.z, fD = (ID.z - this.origin.z) * iD, bD = (pD.z - this.origin.z) * iD, bD === -1 / 0 && (bD = 1 / 0), fD > bD && (QD = fD, fD = bD, bD = QD), wD = Math.max(fD, wD), SD = Math.min(bD, SD), wD > SD) return !1;
        return !0
      }
      intersectsBox(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(DD.minimum, DD.maximum, CD)
      }
      intersectsSphere(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = DD.center.x - this.origin.x,
          ID = DD.center.y - this.origin.y,
          pD = DD.center.z - this.origin.z,
          iD = cD * cD + ID * ID + pD * pD,
          fD = DD.radius + CD,
          bD = fD * fD;
        if (iD <= bD) return !0;
        const QD = cD * this.direction.x + ID * this.direction.y + pD * this.direction.z;
        if (QD < 0) return !1;
        return iD - QD * QD <= bD
      }
      intersectsTriangle(DD, CD, cD) {
        const ID = BD._TmpVector3[0],
          iD = BD._TmpVector3[1],
          bD = BD._TmpVector3[2],
          QD = BD._TmpVector3[3],
          wD = BD._TmpVector3[4];
        CD.subtractToRef(DD, ID), cD.subtractToRef(DD, iD), pD.p.CrossToRef(this.direction, iD, bD);
        const SD = pD.p.Dot(ID, bD);
        if (0 === SD) return null;
        const yD = 1 / SD;
        this.origin.subtractToRef(DD, QD);
        const MD = pD.p.Dot(QD, bD) * yD;
        if (MD < -this.epsilon || MD > 1 + this.epsilon) return null;
        pD.p.CrossToRef(QD, ID, wD);
        const tD = pD.p.Dot(this.direction, wD) * yD;
        if (tD < -this.epsilon || MD + tD > 1 + this.epsilon) return null;
        const ZD = pD.p.Dot(iD, wD) * yD;
        return ZD > this.length || ZD < 0 ? null : new fD.c(1 - MD - tD, MD, ZD)
      }
      intersectsPlane(DD) {
        let CD;
        const cD = pD.p.Dot(DD.normal, this.direction);
        if (Math.abs(cD) < 9.99999997475243e-7) return null;
        {
          const ID = pD.p.Dot(DD.normal, this.origin);
          return CD = (-DD.d - ID) / cD, CD < 0 ? CD < -9.99999997475243e-7 ? null : 0 : CD
        }
      }
      intersectsAxis(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (DD) {
          case "y": {
            const DD = (this.origin.y - CD) / this.direction.y;
            return DD > 0 ? null : new pD.p(this.origin.x + this.direction.x * -DD, CD, this.origin.z + this.direction.z * -DD)
          }
          case "x": {
            const DD = (this.origin.x - CD) / this.direction.x;
            return DD > 0 ? null : new pD.p(CD, this.origin.y + this.direction.y * -DD, this.origin.z + this.direction.z * -DD)
          }
          case "z": {
            const DD = (this.origin.z - CD) / this.direction.z;
            return DD > 0 ? null : new pD.p(this.origin.x + this.direction.x * -DD, this.origin.y + this.direction.y * -DD, CD)
          }
          default:
            return null
        }
      }
      ZID(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          iD = arguments.length > 4 ? arguments[4] : void 0,
          fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bD = pD.l.Matrix[0];
        return DD.getWorldMatrix().invertToRef(bD), this._tmpRay ? BD.TransformToRef(this, bD, this._tmpRay) : this._tmpRay = BD.Transform(this, bD), DD.intersects(this._tmpRay, CD, cD, ID, iD, fD)
      }
      intersectsMeshes(DD, CD, cD) {
        cD ? cD.length = 0 : cD = [];
        for (let ID = 0; ID < DD.length; ID++) {
          const pD = this.ZID(DD[ID], CD);
          pD.hit && cD.push(pD)
        }
        return cD.sort(this._comparePickingInfo), cD
      }
      _comparePickingInfo(DD, CD) {
        return DD.distance < CD.distance ? -1 : DD.distance > CD.distance ? 1 : 0
      }
      intersectionSegment(DD, CD, cD) {
        const ID = this.origin,
          iD = pD.l.cZ[0],
          fD = pD.l.cZ[1],
          bD = pD.l.cZ[2],
          QD = pD.l.cZ[3];
        CD.subtractToRef(DD, iD), this.direction.scaleToRef(BD._Rayl, bD), ID.addToRef(bD, fD), DD.subtractToRef(ID, QD);
        const wD = pD.p.Dot(iD, iD),
          SD = pD.p.Dot(iD, bD),
          yD = pD.p.Dot(bD, bD),
          MD = pD.p.Dot(iD, QD),
          tD = pD.p.Dot(bD, QD),
          ZD = wD * yD - SD * SD;
        let oD, vD, ND = ZD,
          gD = ZD;
        ZD < BD._Smallnum ? (oD = 0, ND = 1, vD = tD, gD = yD) : (oD = SD * tD - yD * MD, vD = wD * tD - SD * MD, oD < 0 ? (oD = 0, vD = tD, gD = yD) : oD > ND && (oD = ND, vD = tD + SD, gD = yD)), vD < 0 ? (vD = 0, -MD < 0 ? oD = 0 : -MD > wD ? oD = ND : (oD = -MD, ND = wD)) : vD > gD && (vD = gD, -MD + SD < 0 ? oD = 0 : -MD + SD > wD ? oD = ND : (oD = -MD + SD, ND = wD));
        const XD = Math.abs(oD) < BD._Smallnum ? 0 : oD / ND,
          mD = Math.abs(vD) < BD._Smallnum ? 0 : vD / gD,
          nD = pD.l.cZ[4];
        bD.scaleToRef(mD, nD);
        const OD = pD.l.cZ[5];
        iD.scaleToRef(XD, OD), OD.addInPlace(QD);
        const PD = pD.l.cZ[6];
        OD.subtractToRef(nD, PD);
        return mD > 0 && mD <= this.length && PD.lengthSquared() < cD * cD ? OD.length() : -1
      }
      update(DD, CD, cD, ID, iD, fD, bD) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          BD._RayDistant || (BD._RayDistant = BD.Zero()), BD._RayDistant.unprojectRayToRef(DD, CD, cD, ID, pD.d.IdentityReadOnly, fD, bD);
          const QD = pD.l.Matrix[0];
          iD.invertToRef(QD), BD.TransformToRef(BD._RayDistant, QD, this)
        } else this.unprojectRayToRef(DD, CD, cD, ID, iD, fD, bD);
        return this
      }
      static Zero() {
        return new BD(pD.p.Zero(), pD.p.Zero())
      }
      static CreateNew(DD, CD, cD, ID, pD, iD, fD) {
        return BD.Zero().update(DD, CD, cD, ID, pD, iD, fD)
      }
      static CreateNewFromTo(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.d.IdentityReadOnly;
        const ID = new BD(new pD.p(0, 0, 0), new pD.p(0, 0, 0));
        return BD.CreateFromToToRef(DD, CD, ID, cD)
      }
      static CreateFromToToRef(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pD.d.IdentityReadOnly;
        cD.origin.YCD(DD);
        const iD = CD.subtractToRef(DD, cD.direction),
          fD = Math.sqrt(iD.x * iD.x + iD.y * iD.y + iD.z * iD.z);
        return cD.length = fD, cD.direction.normalize(), BD.TransformToRef(cD, ID, cD)
      }
      static Transform(DD, CD) {
        const cD = new BD(new pD.p(0, 0, 0), new pD.p(0, 0, 0));
        return BD.TransformToRef(DD, CD, cD), cD
      }
      static TransformToRef(DD, CD, cD) {
        pD.p.TransformCoordinatesToRef(DD.origin, CD, cD.origin), pD.p.TransformNormalToRef(DD.direction, CD, cD.direction), cD.length = DD.length, cD.epsilon = DD.epsilon;
        const ID = cD.direction,
          iD = ID.length();
        if (0 !== iD && 1 !== iD) {
          const DD = 1 / iD;
          ID.x *= DD, ID.y *= DD, ID.z *= DD, cD.length *= iD
        }
        return cD
      }
      unprojectRayToRef(DD, CD, cD, ID, iD, fD, bD) {
        const wD = pD.l.Matrix[0];
        iD.multiplyToRef(fD, wD), wD.multiplyToRef(bD, wD), wD.invert();
        const SD = QD.b.LastCreatedEngine,
          BD = pD.l.cZ[0];
        BD.x = DD / cD * 2 - 1, BD.y = -(CD / ID * 2 - 1), BD.z = SD?.vcD ? 1 : SD?.isNDCHalfZRange ? 0 : -1;
        const yD = pD.l.cZ[1].K4(BD.x, BD.y, 1 - 1e-8),
          MD = pD.l.cZ[2],
          tD = pD.l.cZ[3];
        pD.p.TransformCoordinatesToRef(BD, wD, MD), pD.p.TransformCoordinatesToRef(yD, wD, tD), this.origin.YCD(MD), tD.subtractToRef(MD, this.direction), this.direction.normalize()
      }
    }

    function yD(DD, CD, cD, ID, pD) {
      let iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const fD = BD.Zero();
      return MD(DD, CD, cD, ID, fD, pD, iD), fD
    }

    function MD(DD, CD, cD, ID, iD, fD) {
      let bD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        QD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const wD = DD.DZ();
      if (!fD && !(fD = DD.activeCamera) && !(fD = DD.cameraToUseForPointers)) return DD;
      const SD = fD.viewport,
        BD = wD.getRenderHeight(),
        {
          x: yD,
          y: MD,
          width: tD,
          height: ZD
        } = SD.toGlobal(wD.getRenderWidth(), BD),
        oD = 1 / wD.getHardwareScalingLevel();
      return CD = CD * oD - yD, cD = cD * oD - (BD - MD - ZD), iD.update(CD, cD, tD, ZD, ID || pD.d.IdentityReadOnly, bD ? pD.d.IdentityReadOnly : fD.getViewMatrix(), fD.getProjectionMatrix(), QD), DD
    }

    function tD(DD, CD, cD, ID) {
      const pD = BD.Zero();
      return ZD(DD, CD, cD, pD, ID), pD
    }

    function ZD(DD, CD, cD, ID, iD) {
      if (!bD.c) return DD;
      const fD = DD.DZ();
      if (!iD && !(iD = DD.activeCamera) && !(iD = DD.cameraToUseForPointers)) throw new Error("Active camera not set");
      const QD = iD.viewport,
        wD = fD.getRenderHeight(),
        {
          x: SD,
          y: BD,
          width: yD,
          height: MD
        } = QD.toGlobal(fD.getRenderWidth(), wD),
        tD = pD.d.Identity(),
        ZD = 1 / fD.getHardwareScalingLevel();
      return CD = CD * ZD - SD, cD = cD * ZD - (wD - BD - MD), ID.update(CD, cD, yD, MD, tD, tD, iD.getProjectionMatrix()), DD
    }

    function oD(DD, CD, cD, ID, pD, iD, fD, bD) {
      return vD(DD, cD, ID, CD(ID, cD.enableDistantPicking), pD, iD, fD, bD)
    }

    function vD(DD, CD, cD, ID, pD, iD, fD, bD) {
      const QD = CD.intersects(ID, pD, fD, iD, cD, bD);
      return QD && QD.hit ? !pD && null != DD && QD.distance >= DD.distance ? null : QD : null
    }

    function ND(DD, CD) {
      return "InstancedLinesMesh" === DD || "LinesMesh" === DD ? CD.intersectionThreshold : 0
    }

    function gD(DD) {
      const CD = DD.getClassName();
      if ("GreasedLineMesh" === CD) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const cD = DD.rawBoundingInfo;
      return {
        rawBoundingInfo: cD,
        intersectionThreshold: cD ? ND(CD, DD) : 0
      }
    }

    function XD(DD, CD, cD, ID, pD) {
      const iD = DD(cD, CD.enableDistantPicking);
      return iD.intersectsSphere(ID.rcD, pD) && iD.intersectsBox(ID.boundingBox, pD) ? iD : null
    }

    function mD(DD, CD, cD, ID, iD, fD) {
      let QD = null;
      const wD = !!(DD.activeCameras && DD.activeCameras.length > 1 && DD.cameraToUseForPointers !== DD.activeCamera),
        BD = DD.cameraToUseForPointers || DD.activeCamera,
        yD = SD.internalPickerForMesh || oD,
        MD = yD === oD;
      for (let bD = 0; bD < DD.meshes.length; bD++) {
        const SD = DD.meshes[bD];
        if (cD) {
          if (!cD(SD, -1)) continue
        } else if (!SD.isEnabled() || !SD.isVisible || !SD.yo) continue;
        const tD = wD && SD.isWorldMatrixCameraDependent(),
          ZD = SD.computeWorldMatrix(tD, BD);
        if (SD.hasThinInstances && SD.lDD) {
          const DD = yD(QD, CD, SD, ZD, !0, !0, fD);
          if (DD) {
            if (iD) return DD;
            const {
              rawBoundingInfo: bD,
              intersectionThreshold: wD
            } = gD(SD), BD = SD._thinInstanceDataStorage.matrixData;
            if (BD) {
              const DD = pD.l.Matrix[0],
                tD = pD.l.Matrix[1],
                oD = Math.min(SD.Q0, BD.length >> 4);
              for (let ND = 0; ND < oD; ND++) {
                if (cD && !cD(SD, ND)) continue;
                pD.d.FromArrayToRef(BD, ND << 4, DD), DD.multiplyToRef(ZD, tD);
                const oD = MD && bD ? XD(CD, SD, tD, bD, wD) : null;
                if (MD && bD && !oD) continue;
                const gD = MD && oD ? vD(QD, SD, tD, oD, ID, iD, fD, !0) : yD(QD, CD, SD, tD, ID, iD, fD, !0);
                if (gD && (QD = gD, QD.thinInstanceIndex = ND, ID)) return QD
              }
            }
          }
        } else {
          const DD = yD(QD, CD, SD, ZD, ID, iD, fD);
          if (DD && (QD = DD, ID)) return QD
        }
      }
      return QD || new bD.c
    }

    function nD(DD, CD, cD, ID) {
      if (!bD.c) return null;
      const iD = [],
        fD = !!(DD.activeCameras && DD.activeCameras.length > 1 && DD.cameraToUseForPointers !== DD.activeCamera),
        QD = DD.cameraToUseForPointers || DD.activeCamera,
        wD = SD.internalPickerForMesh || oD,
        BD = wD === oD;
      for (let bD = 0; bD < DD.meshes.length; bD++) {
        const SD = DD.meshes[bD];
        if (cD) {
          if (!cD(SD, -1)) continue
        } else if (!SD.isEnabled() || !SD.isVisible || !SD.yo) continue;
        const yD = fD && SD.isWorldMatrixCameraDependent(),
          MD = SD.computeWorldMatrix(yD, QD);
        if (SD.hasThinInstances && SD.lDD) {
          if (wD(null, CD, SD, MD, !0, !0, ID)) {
            const {
              rawBoundingInfo: DD,
              intersectionThreshold: fD
            } = gD(SD), bD = SD._thinInstanceDataStorage.matrixData;
            if (bD) {
              const QD = pD.l.Matrix[0],
                yD = pD.l.Matrix[1],
                tD = Math.min(SD.Q0, bD.length >> 4);
              for (let ZD = 0; ZD < tD; ZD++) {
                if (cD && !cD(SD, ZD)) continue;
                pD.d.FromArrayToRef(bD, ZD << 4, QD), QD.multiplyToRef(MD, yD);
                const tD = BD && DD ? XD(CD, SD, yD, DD, fD) : null;
                if (BD && DD && !tD) continue;
                const oD = BD && tD ? vD(null, SD, yD, tD, !1, !1, ID, !0) : wD(null, CD, SD, yD, !1, !1, ID, !0);
                oD && (oD.thinInstanceIndex = ZD, iD.push(oD))
              }
            }
          }
        } else {
          const DD = wD(null, CD, SD, MD, !1, !1, ID);
          DD && iD.push(DD)
        }
      }
      return iD
    }

    function OD(DD, CD, cD, ID, iD, fD) {
      if (!bD.c) return null;
      const QD = mD(DD, (ID => (DD._tempPickingRay || (DD._tempPickingRay = BD.Zero()), MD(DD, CD, cD, ID, DD._tempPickingRay, fD || null), DD._tempPickingRay)), ID, iD, !0);
      return QD && (QD.ray = yD(DD, CD, cD, pD.d.Identity(), fD || null)), QD
    }

    function PD(DD, CD, cD, ID, iD, fD, bD) {
      const QD = mD(DD, ((ID, pD) => (DD._tempPickingRay || (DD._tempPickingRay = BD.Zero()), MD(DD, CD, cD, ID, DD._tempPickingRay, fD || null, !1, pD), DD._tempPickingRay)), ID, iD, !1, bD);
      return QD && (QD.ray = yD(DD, CD, cD, pD.d.Identity(), fD || null)), QD
    }

    function HD(DD, CD, cD, ID, iD) {
      const fD = mD(DD, (cD => (DD._pickWithRayInverseMatrix || (DD._pickWithRayInverseMatrix = pD.d.Identity()), cD.invertToRef(DD._pickWithRayInverseMatrix), DD._cachedRayForTransform || (DD._cachedRayForTransform = BD.Zero()), BD.TransformToRef(CD, DD._pickWithRayInverseMatrix, DD._cachedRayForTransform), DD._cachedRayForTransform)), cD, ID, !1, iD);
      return fD && (fD.ray = CD), fD
    }

    function UD(DD, CD, cD, ID, pD, iD) {
      return nD(DD, (ID => yD(DD, CD, cD, ID, pD || null)), ID, iD)
    }

    function xD(DD, CD, cD, ID) {
      return nD(DD, (cD => (DD._pickWithRayInverseMatrix || (DD._pickWithRayInverseMatrix = pD.d.Identity()), cD.invertToRef(DD._pickWithRayInverseMatrix), DD._cachedRayForTransform || (DD._cachedRayForTransform = BD.Zero()), BD.TransformToRef(CD, DD._pickWithRayInverseMatrix, DD._cachedRayForTransform), DD._cachedRayForTransform)), cD, ID)
    }

    function qD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        ID = arguments.length > 3 ? arguments[3] : void 0,
        iD = arguments.length > 4 ? arguments[4] : void 0;
      ID || (ID = DD.getWorldMatrix()), CD.length = cD, iD ? CD.origin.YCD(iD) : CD.origin.YCD(DD.position);
      const fD = pD.l.cZ[2];
      fD.set(0, 0, DD._scene.useRightHandedSystem ? -1 : 1);
      const bD = pD.l.cZ[3];
      return pD.p.TransformNormalToRef(fD, ID, bD), pD.p.NormalizeToRef(bD, CD.direction), CD
    }

    function JD(DD, CD) {
      CD && (CD.prototype.getForwardRay = function() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        return qD(this, new BD(pD.p.Zero(), pD.p.Zero(), DD), DD, CD, cD)
      }, CD.prototype.getForwardRayToRef = function(DD) {
        return qD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), DD && (wD.d._IsPickingAvailable = !0, DD.prototype.createPickingRay = function(DD, CD, cD, ID) {
        return yD(this, DD, CD, cD, ID, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    BD._TmpVector3 = (0, iD.b)(6, pD.p.Zero), BD._RayDistant = BD.Zero(), BD._Smallnum = 1e-8, BD._Rayl = 1e9
  },
  40618: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD.z
    });
    var ID = cD(39239),
      pD = cD(39351),
      iD = cD(40625);
    let fD = !1;
    fD || (fD = !0, (0, iD.d)(ID.e, pD.c), ID.e.prototype.createPickingRayToRef = function(DD, CD, cD, ID, pD) {
      let fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, iD.k)(this, DD, CD, cD, ID, pD, fD, bD)
    }, ID.e.prototype.createPickingRayInCameraSpace = function(DD, CD, cD) {
      return (0, iD.j)(this, DD, CD, cD)
    }, ID.e.prototype.createPickingRayInCameraSpaceToRef = function(DD, CD, cD, ID) {
      return (0, iD.h)(this, DD, CD, cD, ID)
    }, ID.e.prototype.pickWithBoundingInfo = function(DD, CD, cD, ID, pD) {
      return (0, iD.p)(this, DD, CD, cD, ID, pD)
    }, ID.e.prototype.MM = function(DD, CD, cD, ID, pD, fD) {
      let bD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, iD.x)(this, DD, CD, cD, ID, pD, fD, bD)
    }, ID.e.prototype.pickWithRay = function(DD, CD, cD, ID) {
      return (0, iD.t)(this, DD, CD, cD, ID)
    }, ID.e.prototype.multiPick = function(DD, CD, cD, ID, pD) {
      return (0, iD.o)(this, DD, CD, cD, ID, pD)
    }, ID.e.prototype.multiPickWithRay = function(DD, CD, cD) {
      return (0, iD.l)(this, DD, CD, cD)
    })
  },
  40627: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36446),
      fD = cD(39392),
      bD = cD(40636),
      QD = cD(39356),
      wD = cD(36488);
    let SD = (() => {
        var DD;
        let CD, cD, QD, wD, SD, BD, yD, MD, tD = bD.b,
          ZD = [],
          oD = [],
          vD = [],
          ND = [],
          gD = [],
          XD = [],
          mD = [],
          nD = [],
          OD = [],
          PD = [],
          HD = [],
          UD = [],
          xD = [];
        return DD = class extends tD {
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
          constructor(DD, CD, cD, pD) {
            super(DD, cD, pD), this._shadowFrustumSize = ((0, ID.m)(this, ZD), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, ID.m)(this, oD, !0), this.autoCalcShadowZBounds = ((0, ID.m)(this, vD), (0, ID.m)(this, ND, !1)), this._orthoLeft = ((0, ID.m)(this, gD), (0, ID.m)(this, XD, Number.MAX_VALUE)), this._orthoRight = ((0, ID.m)(this, mD), (0, ID.m)(this, nD, Number.MIN_VALUE)), this._orthoTop = ((0, ID.m)(this, OD), (0, ID.m)(this, PD, Number.MIN_VALUE)), this._orthoBottom = ((0, ID.m)(this, HD), (0, ID.m)(this, UD, Number.MAX_VALUE)), (0, ID.m)(this, xD), this.position = CD.scale(-1), this.direction = CD
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return fD.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(DD, CD, cD) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(DD) : this._setDefaultAutoExtendShadowProjectionMatrix(DD, CD, cD)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(DD) {
            const CD = this.hq().activeCamera;
            iD.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : CD ? CD.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : CD ? CD.maxZ : 1e4, DD, this.hq().DZ().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(DD, CD, cD) {
            const ID = this.hq().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const DD = iD.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let ID = Number.MAX_VALUE,
                pD = -Number.MAX_VALUE;
              for (let fD = 0; fD < cD.length; fD++) {
                const bD = cD[fD];
                if (!bD) continue;
                const QD = bD.VJ().boundingBox;
                for (let cD = 0; cD < QD.vectorsWorld.length; cD++) iD.p.TransformCoordinatesToRef(QD.vectorsWorld[cD], CD, DD), DD.x < this._orthoLeft && (this._orthoLeft = DD.x), DD.y < this._orthoBottom && (this._orthoBottom = DD.y), DD.x > this._orthoRight && (this._orthoRight = DD.x), DD.y > this._orthoTop && (this._orthoTop = DD.y), this.autoCalcShadowZBounds && (DD.z < ID && (ID = DD.z), DD.z > pD && (pD = DD.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = ID, this._shadowMaxZ = pD)
            }
            const pD = this._orthoRight - this._orthoLeft,
              fD = this._orthoTop - this._orthoBottom,
              bD = void 0 !== this.shadowMinZ ? this.shadowMinZ : ID?.minZ || 0,
              QD = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ID?.maxZ || 1e4,
              wD = this.hq().DZ().vcD;
            iD.d.OrthoOffCenterLHToRef(this._orthoLeft - pD * this.shadowOrthoScale, this._orthoRight + pD * this.shadowOrthoScale, this._orthoBottom - fD * this.shadowOrthoScale, this._orthoTop + fD * this.shadowOrthoScale, wD ? QD : bD, wD ? bD : QD, DD, this.hq().DZ().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(DD, CD) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, CD), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, CD), this)
          }
          transferToNodeMaterialEffect(DD, CD) {
            return this.computeTransformedInformation() ? (DD.setFloat3(CD, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (DD.setFloat3(CD, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(DD) {
            const CD = this._scene.DZ();
            return !CD.vcD && CD.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(DD) {
            const CD = this._scene.DZ();
            return CD.vcD && CD.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(DD, CD) {
            DD["DIRLIGHT" + CD] = !0
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(tD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.G)()], QD = [(0, pD.G)()], wD = [(0, pD.G)()], SD = [(0, pD.G)("orthoLeft")], BD = [(0, pD.G)("orthoRight")], yD = [(0, pD.G)("orthoTop")], MD = [(0, pD.G)("orthoBottom")], (0, ID.k)(DD, null, CD, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: DD => "shadowFrustumSize" in DD,
              get: DD => DD.shadowFrustumSize
            },
            metadata: iD
          }, null, ZD), (0, ID.k)(DD, null, cD, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "shadowOrthoScale" in DD,
              get: DD => DD.shadowOrthoScale
            },
            metadata: iD
          }, null, ZD), (0, ID.k)(null, null, QD, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: DD => "autoUpdateExtends" in DD,
              get: DD => DD.autoUpdateExtends,
              set: (DD, CD) => {
                DD.autoUpdateExtends = CD
              }
            },
            metadata: iD
          }, oD, vD), (0, ID.k)(null, null, wD, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: DD => "autoCalcShadowZBounds" in DD,
              get: DD => DD.autoCalcShadowZBounds,
              set: (DD, CD) => {
                DD.autoCalcShadowZBounds = CD
              }
            },
            metadata: iD
          }, ND, gD), (0, ID.k)(null, null, SD, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoLeft" in DD,
              get: DD => DD._orthoLeft,
              set: (DD, CD) => {
                DD._orthoLeft = CD
              }
            },
            metadata: iD
          }, XD, mD), (0, ID.k)(null, null, BD, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoRight" in DD,
              get: DD => DD._orthoRight,
              set: (DD, CD) => {
                DD._orthoRight = CD
              }
            },
            metadata: iD
          }, nD, OD), (0, ID.k)(null, null, yD, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoTop" in DD,
              get: DD => DD._orthoTop,
              set: (DD, CD) => {
                DD._orthoTop = CD
              }
            },
            metadata: iD
          }, PD, HD), (0, ID.k)(null, null, MD, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: DD => "_orthoBottom" in DD,
              get: DD => DD._orthoBottom,
              set: (DD, CD) => {
                DD._orthoBottom = CD
              }
            },
            metadata: iD
          }, UD, xD), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      BD = !1;
    BD || (BD = !0, QD.b.AddNodeConstructor("Light_Type_1", ((DD, CD) => () => new SD(DD, iD.p.Zero(), CD))), (0, wD.d)("BABYLON.DirectionalLight", SD))
  },
  40646: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => sC
    });
    var ID = cD(38084),
      pD = cD(36473),
      iD = cD(36446),
      fD = cD(39286),
      bD = cD(40654),
      QD = cD(36464),
      wD = cD(39404),
      SD = cD(36622),
      BD = cD(38089),
      yD = cD(38045),
      MD = cD(36479);
    class tD {
      constructor() {
        this.direction1 = new iD.p(0, 1, 0), this.direction2 = new iD.p(0, 1, 0)
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = (0, MD.RandomRange)(this.direction1.x, this.direction2.x),
          fD = (0, MD.RandomRange)(this.direction1.y, this.direction2.y),
          bD = (0, MD.RandomRange)(this.direction1.z, this.direction2.z);
        ID ? CD.K4(pD, fD, bD) : iD.p.TransformNormalFromFloatsToRef(pD, fD, bD, DD, CD)
      }
      startPositionFunction(DD, CD, cD, ID) {
        ID ? CD.K4(0, 0, 0) : iD.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, DD, CD)
      }
      clone() {
        const DD = new tD;
        return yD.e.DeepCopy(this, DD), DD
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
        return DD.type = this.getClassName(), DD.direction1 = this.direction1.XcD(), DD.direction2 = this.direction2.XcD(), DD
      }
      parse(DD) {
        iD.p.FromArrayToRef(DD.direction1, 0, this.direction1), iD.p.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
    class ZD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = DD, this.radiusRange = CD, this.directionRandomizer = cD
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = cD.position.subtract(DD.getTranslation()).normalize(),
          fD = (0, MD.RandomRange)(0, this.directionRandomizer),
          bD = (0, MD.RandomRange)(0, this.directionRandomizer),
          QD = (0, MD.RandomRange)(0, this.directionRandomizer);
        pD.x += fD, pD.y += bD, pD.z += QD, pD.normalize(), ID ? CD.YCD(pD) : iD.p.TransformNormalFromFloatsToRef(pD.x, pD.y, pD.z, DD, CD)
      }
      startPositionFunction(DD, CD, cD, ID) {
        const pD = this.radius - (0, MD.RandomRange)(0, this.radius * this.radiusRange),
          fD = (0, MD.RandomRange)(0, 1),
          bD = (0, MD.RandomRange)(0, 2 * Math.PI),
          QD = Math.acos(2 * fD - 1),
          wD = pD * Math.cos(bD) * Math.sin(QD),
          SD = pD * Math.cos(QD),
          BD = pD * Math.sin(bD) * Math.sin(QD);
        ID ? CD.K4(wD, Math.abs(SD), BD) : iD.p.TransformCoordinatesFromFloatsToRef(wD, Math.abs(SD), BD, DD, CD)
      }
      clone() {
        const DD = new ZD(this.radius, this.directionRandomizer);
        return yD.e.DeepCopy(this, DD), DD
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
    class oD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = DD, this.radiusRange = CD, this.directionRandomizer = cD
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = cD.position.subtract(DD.getTranslation()).normalize(),
          fD = (0, MD.RandomRange)(0, this.directionRandomizer),
          bD = (0, MD.RandomRange)(0, this.directionRandomizer),
          QD = (0, MD.RandomRange)(0, this.directionRandomizer);
        pD.x += fD, pD.y += bD, pD.z += QD, pD.normalize(), ID ? CD.YCD(pD) : iD.p.TransformNormalFromFloatsToRef(pD.x, pD.y, pD.z, DD, CD)
      }
      startPositionFunction(DD, CD, cD, ID) {
        const pD = this.radius - (0, MD.RandomRange)(0, this.radius * this.radiusRange),
          fD = (0, MD.RandomRange)(0, 1),
          bD = (0, MD.RandomRange)(0, 2 * Math.PI),
          QD = Math.acos(2 * fD - 1),
          wD = pD * Math.cos(bD) * Math.sin(QD),
          SD = pD * Math.cos(QD),
          BD = pD * Math.sin(bD) * Math.sin(QD);
        ID ? CD.K4(wD, SD, BD) : iD.p.TransformCoordinatesFromFloatsToRef(wD, SD, BD, DD, CD)
      }
      clone() {
        const DD = new oD(this.radius, this.directionRandomizer);
        return yD.e.DeepCopy(this, DD), DD
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
    class vD extends oD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new iD.p(0, 1, 0),
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iD.p(0, 1, 0);
        super(DD), this.direction1 = CD, this.direction2 = cD
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = (0, MD.RandomRange)(this.direction1.x, this.direction2.x),
          fD = (0, MD.RandomRange)(this.direction1.y, this.direction2.y),
          bD = (0, MD.RandomRange)(this.direction1.z, this.direction2.z);
        ID ? CD.K4(pD, fD, bD) : iD.p.TransformNormalFromFloatsToRef(pD, fD, bD, DD, CD)
      }
      clone() {
        const DD = new vD(this.radius, this.direction1, this.direction2);
        return yD.e.DeepCopy(this, DD), DD
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
        return DD.direction1 = this.direction1.XcD(), DD.direction2 = this.direction2.XcD(), DD
      }
      parse(DD) {
        super.parse(DD), iD.p.FromArrayToRef(DD.direction1, 0, this.direction1), iD.p.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
    var ND = cD(38041);
    class gD {
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
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = cD, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = CD, this.radius = DD
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = cD.position.subtract(DD.getTranslation()).normalize(),
          fD = (0, MD.RandomRange)(0, this.directionRandomizer),
          bD = (0, MD.RandomRange)(0, this.directionRandomizer),
          QD = (0, MD.RandomRange)(0, this.directionRandomizer);
        pD.x += fD, pD.y += bD, pD.z += QD, pD.normalize(), ID ? CD.YCD(pD) : iD.p.TransformNormalFromFloatsToRef(pD.x, pD.y, pD.z, DD, CD)
      }
      startPositionFunction(DD, CD, cD, ID) {
        const pD = (0, MD.RandomRange)(0, 2 * Math.PI);
        let fD;
        this.emitFromSpawnPointOnly ? fD = 1e-4 : (fD = (0, MD.RandomRange)(0, this.heightRange), fD = 1 - fD * fD);
        let bD = this._radius - (0, MD.RandomRange)(0, this._radius * this.radiusRange);
        bD *= fD;
        const QD = bD * Math.sin(pD),
          wD = bD * Math.cos(pD),
          SD = fD * this._height;
        if (ID) return CD.x = QD, CD.y = SD, void(CD.z = wD);
        iD.p.TransformCoordinatesFromFloatsToRef(QD, SD, wD, DD, CD)
      }
      clone() {
        const DD = new gD(this._radius, this._angle, this.directionRandomizer);
        return yD.e.DeepCopy(this, DD), DD
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
    class XD extends gD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iD.p(0, 1, 0),
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iD.p(0, 1, 0);
        super(DD, CD), this.direction1 = cD, this.direction2 = ID
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = (0, MD.RandomRange)(this.direction1.x, this.direction2.x),
          fD = (0, MD.RandomRange)(this.direction1.y, this.direction2.y),
          bD = (0, MD.RandomRange)(this.direction1.z, this.direction2.z);
        ID ? CD.K4(pD, fD, bD) : iD.p.TransformNormalFromFloatsToRef(pD, fD, bD, DD, CD)
      }
      clone() {
        const DD = new XD(this.radius, this.angle, this.direction1, this.direction2);
        return yD.e.DeepCopy(this, DD), DD
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
        return DD.direction1 = this.direction1.XcD(), DD.direction2 = this.direction2.XcD(), DD
      }
      parse(DD) {
        super.parse(DD), iD.p.FromArrayToRef(DD.direction1, 0, this.direction1), iD.p.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
    class mD {
      get mesh() {
        return this._mesh
      }
      set mesh(DD) {
        this._mesh !== DD && (this._mesh = DD, DD ? (this._indices = DD.ncD(), this._positions = DD.getVerticesData(fD.k.PositionKind), this._normals = DD.getVerticesData(fD.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = iD.p.Zero(), this._mesh = null, this.direction1 = new iD.p(0, 1, 0), this.direction2 = new iD.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = DD
      }
      startDirectionFunction(DD, CD, cD, ID) {
        if (this.useMeshNormalsForDirection && this._normals) return void iD.p.TransformNormalToRef(this._storedNormal, DD, CD);
        const pD = (0, MD.RandomRange)(this.direction1.x, this.direction2.x),
          fD = (0, MD.RandomRange)(this.direction1.y, this.direction2.y),
          bD = (0, MD.RandomRange)(this.direction1.z, this.direction2.z);
        ID ? CD.K4(pD, fD, bD) : iD.p.TransformNormalFromFloatsToRef(pD, fD, bD, DD, CD)
      }
      startPositionFunction(DD, CD, cD, ID) {
        if (!this._indices || !this._positions) return;
        const pD = 3 * (Math.random() * (this._indices.length / 3) | 0),
          fD = Math.random(),
          bD = Math.random() * (1 - fD),
          QD = 1 - fD - bD,
          wD = this._indices[pD],
          SD = this._indices[pD + 1],
          BD = this._indices[pD + 2],
          yD = iD.l.cZ[0],
          MD = iD.l.cZ[1],
          tD = iD.l.cZ[2],
          ZD = iD.l.cZ[3];
        iD.p.FromArrayToRef(this._positions, 3 * wD, yD), iD.p.FromArrayToRef(this._positions, 3 * SD, MD), iD.p.FromArrayToRef(this._positions, 3 * BD, tD), ZD.x = fD * yD.x + bD * MD.x + QD * tD.x, ZD.y = fD * yD.y + bD * MD.y + QD * tD.y, ZD.z = fD * yD.z + bD * MD.z + QD * tD.z, ID ? CD.K4(ZD.x, ZD.y, ZD.z) : iD.p.TransformCoordinatesFromFloatsToRef(ZD.x, ZD.y, ZD.z, DD, CD), this.useMeshNormalsForDirection && this._normals && (iD.p.FromArrayToRef(this._normals, 3 * wD, yD), iD.p.FromArrayToRef(this._normals, 3 * SD, MD), iD.p.FromArrayToRef(this._normals, 3 * BD, tD), this._storedNormal.x = fD * yD.x + bD * MD.x + QD * tD.x, this._storedNormal.y = fD * yD.y + bD * MD.y + QD * tD.y, this._storedNormal.z = fD * yD.z + bD * MD.z + QD * tD.z)
      }
      clone() {
        const DD = new mD(this.mesh);
        return yD.e.DeepCopy(this, DD), DD
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
        return DD.type = this.getClassName(), DD.direction1 = this.direction1.XcD(), DD.direction2 = this.direction2.XcD(), DD.meshId = this.mesh?.id, DD.useMeshNormalsForDirection = this.useMeshNormalsForDirection, DD
      }
      parse(DD, CD) {
        iD.p.FromArrayToRef(DD.direction1, 0, this.direction1), iD.p.FromArrayToRef(DD.direction2, 0, this.direction2), DD.meshId && CD && (this.mesh = CD.getLastMeshById(DD.meshId)), this.useMeshNormalsForDirection = DD.useMeshNormalsForDirection
      }
    }
    class nD {
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
        const CD = this._attractors.indexOf(DD); - 1 !== CD && this._attractors.splice(CD, 1)
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
        this._useLogarithmicDepth = DD && this.hq().DZ().getCaps().fragmentDepthSupported
      }
      hq() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(DD) {
        switch (DD) {
          case nD.BLENDMODE_MULTIPLYADD:
            return;
          case nD.BLENDMODE_ADD:
            DD = 1;
            break;
          case nD.BLENDMODE_ONEONE:
            DD = 6;
            break;
          case nD.BLENDMODE_STANDARD:
            DD = 2;
            break;
          case nD.BLENDMODE_MULTIPLY:
            DD = 4;
            break;
          case nD.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(DD, CD, cD) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, DD, CD, cD), this
      }
      removeEmitRateGradient(DD) {
        return this._removeFactorGradient(this._emitRateGradients, DD), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : iD.p.Zero()
      }
      set direction1(DD) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = DD)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : iD.p.Zero()
      }
      set direction2(DD) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = DD)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : iD.p.Zero()
      }
      set minEmitBox(DD) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = DD)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : iD.p.Zero()
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
      _addFactorGradient(DD, CD, cD, pD) {
        const iD = new ID.h(CD, cD, pD);
        DD.push(iD), DD.sort(((DD, CD) => DD.gradient < CD.gradient ? -1 : DD.gradient > CD.gradient ? 1 : 0))
      }
      _removeFactorGradient(DD, CD) {
        if (!DD) return;
        let cD = 0;
        for (const ID of DD) {
          if (ID.gradient === CD) {
            DD.splice(cD, 1);
            break
          }
          cD++
        }
      }
      _removeGradientAndTexture(DD, CD, cD) {
        if (!CD) return this;
        let ID = 0;
        for (const pD of CD) {
          if (pD.gradient === DD) {
            CD.splice(ID, 1);
            break
          }
          ID++
        }
        return cD && cD.dispose(), this
      }
      constructor(DD) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = iD.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new iD.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = nD.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new iD.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new iD.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = iD.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new SD.e(1, 1, 1, 1), this.color2 = new SD.e(1, 1, 1, 1), this.colorDead = new SD.e(0, 0, 0, 1), this.textureMask = new SD.e(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new wD.c, this.id = DD, this.name = DD
      }
      createPointEmitter(DD, CD) {
        const cD = function(DD, CD) {
          const cD = new tD;
          return cD.direction1 = DD, cD.direction2 = CD, cD
        }(DD, CD);
        return this.particleEmitterType = cD, cD
      }
      createHemisphericEmitter() {
        const DD = function() {
          return new ZD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = DD, DD
      }
      createSphereEmitter() {
        const DD = function() {
          return new oD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = DD, DD
      }
      createDirectedSphereEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new iD.p(0, 1, 0),
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iD.p(0, 1, 0);
          return new vD(DD, CD, cD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new iD.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iD.p(0, 1, 0));
        return this.particleEmitterType = DD, DD
      }
      createCylinderEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new ND.g(DD, CD, cD, ID)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = DD, DD
      }
      createDirectedCylinderEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iD.p(0, 1, 0),
            pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new iD.p(0, 1, 0);
          return new ND.e(DD, CD, cD, ID, pD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iD.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new iD.p(0, 1, 0));
        return this.particleEmitterType = DD, DD
      }
      createConeEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new gD(DD, CD)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = DD, DD
      }
      createDirectedConeEmitter() {
        const DD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iD.p(0, 1, 0),
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iD.p(0, 1, 0);
          return new XD(DD, CD, cD, ID)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new iD.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new iD.p(0, 1, 0));
        return this.particleEmitterType = DD, DD
      }
      createBoxEmitter(DD, CD, cD, ID) {
        const pD = new BD.e;
        return this.particleEmitterType = pD, this.direction1 = DD, this.direction2 = CD, this.minEmitBox = cD, this.maxEmitBox = ID, pD
      }
      createMeshEmitter() {
        const DD = function() {
          return new mD(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = DD, DD
      }
    }
    nD.BLENDMODE_ONEONE = 0, nD.BLENDMODE_STANDARD = 1, nD.BLENDMODE_ADD = 2, nD.BLENDMODE_MULTIPLY = 3, nD.BLENDMODE_MULTIPLYADD = 4, nD.BLENDMODE_SUBTRACT = -1;
    class OD {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new SD.e(0, 0, 0, 0), this.currentColor2 = new SD.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = iD.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class PD {
      constructor(DD) {
        this.particleSystem = DD, this.position = iD.p.Zero(), this.direction = iD.p.Zero(), this.color = new SD.e(0, 0, 0, 0), this.colorStep = new SD.e(0, 0, 0, 0), this.initialColor = new SD.e(0, 0, 0, 0), this.colorDead = new SD.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new iD.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new OD, this.id = PD._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let DD = this.age,
          CD = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === CD ? (CD = 1, DD = this._properties.randomCellOffset) : DD += this._properties.randomCellOffset);
        const cD = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let ID;
        ID = this._properties.initialSpriteCellLoop ? (0, MD.Clamp)(DD * CD % this.lifeTime / this.lifeTime) : (0, MD.Clamp)(DD * CD / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + ID * cD | 0
      }
      _inheritParticleInfoToSubEmitter(DD) {
        if (DD.particleSystem.emitter.position) {
          const CD = DD.particleSystem.emitter;
          if (CD.position.YCD(this.position), DD.inheritDirection) {
            const DD = iD.l.cZ[0];
            this.direction.normalizeToRef(DD), CD.setDirection(DD, 0, Math.PI / 2)
          }
        } else {
          DD.particleSystem.emitter.YCD(this.position)
        }
        this.direction.scaleToRef(DD.inheritedVelocityAmount / 2, iD.l.cZ[0]), DD.particleSystem._inheritedVelocityOffset.YCD(iD.l.cZ[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const DD of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(DD)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = PD._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(DD) {
        DD.position.YCD(this.position), this._properties.initialDirection ? DD._properties.initialDirection ? DD._properties.initialDirection.YCD(this._properties.initialDirection) : DD._properties.initialDirection = this._properties.initialDirection.clone() : DD._properties.initialDirection = null, DD.direction.YCD(this.direction), this._properties.localPosition && (DD._properties.localPosition ? DD._properties.localPosition.YCD(this._properties.localPosition) : DD._properties.localPosition = this._properties.localPosition.clone()), DD.color.YCD(this.color), DD.colorStep.YCD(this.colorStep), DD.initialColor.YCD(this.initialColor), DD.colorDead.YCD(this.colorDead), DD.lifeTime = this.lifeTime, DD.age = this.age, DD._properties.randomCellOffset = this._properties.randomCellOffset, DD.size = this.size, DD.scale.YCD(this.scale), DD.angle = this.angle, DD.angularSpeed = this.angularSpeed, DD.particleSystem = this.particleSystem, DD.cellIndex = this.cellIndex, DD.id = this.id, DD._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (DD._properties.currentColorGradient = this._properties.currentColorGradient, DD._properties.currentColor1.YCD(this._properties.currentColor1), DD._properties.currentColor2.YCD(this._properties.currentColor2)), this._properties.currentSizeGradient && (DD._properties.currentSizeGradient = this._properties.currentSizeGradient, DD._properties.currentSize1 = this._properties.currentSize1, DD._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (DD._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, DD._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, DD._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (DD._properties.currentVelocityGradient = this._properties.currentVelocityGradient, DD._properties.currentVelocity1 = this._properties.currentVelocity1, DD._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (DD._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, DD._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, DD._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (DD._properties.currentDragGradient = this._properties.currentDragGradient, DD._properties.currentDrag1 = this._properties.currentDrag1, DD._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (DD._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, DD._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, DD._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (DD.remapData && this.remapData ? DD.remapData.YCD(this.remapData) : DD.remapData = new iD.s(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (DD._properties.randomNoiseCoordinates1 && DD._properties.randomNoiseCoordinates2 ? (DD._properties.randomNoiseCoordinates1.YCD(this._properties.randomNoiseCoordinates1), DD._properties.randomNoiseCoordinates2.YCD(this._properties.randomNoiseCoordinates2)) : (DD._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), DD._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), DD.metadata = this.metadata
      }
    }
    PD._Count = 0;
    var HD = cD(40171);
    class UD {
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
      constructor(DD, CD, cD, ID) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = CD, this.DW = DD, this._scene = cD, this._host = ID, this._activeTargets = [], CD._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            ni: this._getCorrectLoopMode()
          }, this._animation.dataType === HD.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = iD.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const DD = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, DD)
        }
        if (this.DW instanceof Array) {
          let DD = 0;
          for (const CD of this.DW) this._preparePath(CD, DD), this._getOriginalValues(DD), DD++;
          this._targetIsArray = !0
        } else this._preparePath(this.DW), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const pD = CD.getEvents();
        if (pD && pD.length > 0)
          for (const iD of pD) this._events.push(iD._clone());
        this._enableBlending = DD && DD.animationPropertiesOverride ? DD.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = this._animation.targetPropertyPath;
        if (cD.length > 1) {
          let ID = DD;
          for (let DD = 0; DD < cD.length - 1; DD++) {
            const CD = cD[DD];
            if (ID = ID[CD], void 0 === ID) throw new Error(`Invalid property (${CD}) in property path (${cD.join(".")})`)
          }
          this._targetPath = cD[cD.length - 1], this._activeTargets[CD] = ID
        } else this._targetPath = cD[0], this._activeTargets[CD] = DD;
        if (void 0 === this._activeTargets[CD][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${cD.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.DW instanceof Array) {
            let DD = 0;
            for (const CD of this.DW) void 0 !== this._originalValue[DD] && this._setValue(CD, this._activeTargets[DD], this._originalValue[DD], -1, DD), DD++
          } else void 0 !== this._originalValue[0] && this._setValue(this.DW, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(DD, CD) {
        if (this._targetIsArray)
          for (let cD = 0; cD < this.DW.length; cD++) {
            const ID = this.DW[cD];
            this._setValue(ID, this._activeTargets[cD], DD, CD, cD)
          } else this._setValue(this.DW, this._directTarget, DD, CD, 0)
      }
      _getOriginalValues() {
        let DD, CD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const cD = this._activeTargets[CD];
        if (HD.d.InheritOriginalValueFromActiveAnimations) {
          const DD = this._scene._activeAnimatables;
          for (let ID = 0; ID < DD.length; ID++) {
            const pD = DD[ID]._runtimeAnimations;
            for (let DD = 0; DD < pD.length; DD++) {
              const ID = pD[DD];
              if (ID !== this && ID._targetPath === this._targetPath)
                for (let DD = 0; DD < ID._activeTargets.length; DD++)
                  if (ID._activeTargets[DD] === cD && void 0 !== ID._originalValue[DD]) return void(ID._originalValue[DD] && ID._originalValue[DD].clone ? this._originalValue[CD] = ID._originalValue[DD].clone() : this._originalValue[CD] = ID._originalValue[DD])
            }
          }
        }
        DD = cD.getLocalMatrix && "_matrix" === this._targetPath ? cD.getLocalMatrix() : cD[this._targetPath], DD && DD.clone ? this._originalValue[CD] = DD.clone() : this._originalValue[CD] = DD
      }
      _registerTargetForLateAnimationBinding(DD, CD) {
        const cD = DD.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(cD), cD._lateAnimationHolders || (cD._lateAnimationHolders = {}), cD._lateAnimationHolders[DD.targetPath] || (cD._lateAnimationHolders[DD.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: CD
        }), DD.isAdditive ? (cD._lateAnimationHolders[DD.targetPath].additiveAnimations.push(DD), cD._lateAnimationHolders[DD.targetPath].totalAdditiveWeight += DD.weight) : (cD._lateAnimationHolders[DD.targetPath].animations.push(DD), cD._lateAnimationHolders[DD.targetPath].totalWeight += DD.weight)
      }
      _setValue(DD, CD, cD, ID, pD) {
        const fD = this._scene._animationWrites,
          bD = this._scene._animationWriteCount++;
        let QD = fD[bD];
        if (QD || (QD = fD[bD] = {
            runtimeAnimation: this,
            target: DD,
            weight: ID,
            additive: !1,
            blendingFactor: 1,
            eb: !1
          }), QD.runtimeAnimation = this, QD.target = DD, QD.weight = ID, QD.additive = this.isAdditive, QD.eb = !1, this._currentActiveTarget = CD, this._weight = ID, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const DD = CD[this._targetPath];
            DD.clone ? this._originalBlendValue = DD.clone() : this._originalBlendValue = DD
          }
          this._originalBlendValue.m ? HD.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? iD.d.DecomposeLerpToRef(this._originalBlendValue, cD, this._blendingFactor, this._currentValue) : this._currentValue = iD.d.DecomposeLerp(this._originalBlendValue, cD, this._blendingFactor) : this._currentValue ? iD.d.LerpToRef(this._originalBlendValue, cD, this._blendingFactor, this._currentValue) : this._currentValue = iD.d.Lerp(this._originalBlendValue, cD, this._blendingFactor) : this._currentValue = HD.d._UniversalLerp(this._originalBlendValue, cD, this._blendingFactor);
          const ID = DD && DD.animationPropertiesOverride ? DD.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          QD.blendingFactor = this._blendingFactor, this._blendingFactor += ID
        } else QD.blendingFactor = 1, this._currentValue ? this._currentValue.YCD ? this._currentValue.YCD(cD) : this._currentValue = cD : this._currentValue = cD?.clone ? cD.clone() : cD; - 1 !== ID ? this._registerTargetForLateAnimationBinding(this, this._originalValue[pD]) : this._animationState.ni === HD.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[pD], CD[this._targetPath]) : CD[this._targetPath] = this._originalValue[pD] + this._currentValue : CD[this._targetPath] = this._currentValue, DD.sDD && DD.sDD(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.DW && this.DW.animationPropertiesOverride) {
          return "MorphTarget" === this.DW.getClassName?.() && null == this.DW._animationPropertiesOverride ? this._animation.ni : this.DW.animationPropertiesOverride.ni
        }
        return this._animation.ni
      }
      goToFrame(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const cD = this._animation.getKeys();
        DD < cD[0].frame ? DD = cD[0].frame : DD > cD[cD.length - 1].frame && (DD = cD[cD.length - 1].frame);
        const ID = this._events;
        if (ID.length)
          for (let iD = 0; iD < ID.length; iD++) ID[iD].onlyOnce || (ID[iD].isDone = ID[iD].frame < DD);
        this._currentFrame = DD;
        const pD = this._animation._interpolate(DD, this._animationState);
        this.setValue(pD, CD)
      }
      _prepareForSpeedRatioChange(DD) {
        const CD = this._previousElapsedTime * (this._animation.framePerSecond * DD) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - CD
      }
      animate(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const fD = this._animation,
          bD = fD.targetPropertyPath;
        if (!bD || bD.length < 1) return this._stopped = !0, !1;
        let QD, wD = !0;
        const SD = this._events;
        let BD;
        if (this._coreRuntimeAnimation) BD = cD - CD, QD = this._coreRuntimeAnimation.currentFrame, this._currentFrame = QD, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let iD;
          (CD < this._minFrame || CD > this._maxFrame) && (CD = this._minFrame), (cD < this._minFrame || cD > this._maxFrame) && (cD = this._maxFrame), BD = cD - CD;
          let bD = DD * (fD.framePerSecond * pD) / 1e3 + this._absoluteFrameOffset,
            yD = 0,
            MD = !1;
          const tD = ID && this._animationState.ni === HD.d.ANIMATIONLOOPMODE_YOYO;
          if (tD) {
            const DD = (bD - CD) / BD,
              cD = Math.sin(DD * Math.PI);
            bD = Math.abs(cD) * BD + CD;
            const ID = cD >= 0 ? 1 : -1;
            this._yoyoDirection !== ID && (MD = !0), this._yoyoDirection = ID
          }
          if (this._previousElapsedTime = DD, this._previousAbsoluteFrame = bD, !ID && cD >= CD && (bD >= BD && pD > 0 || bD <= 0 && pD < 0)) wD = !1, yD = fD.evaluate(cD);
          else if (!ID && CD >= cD && (bD <= BD && pD < 0 || bD >= 0 && pD > 0)) wD = !1, yD = fD.evaluate(CD);
          else if (this._animationState.ni !== HD.d.ANIMATIONLOOPMODE_CYCLE) {
            const DD = cD.toString() + CD.toString();
            if (!this._offsetsCache[DD]) {
              this._animationState.repeatCount = 0, this._animationState.ni = HD.d.ANIMATIONLOOPMODE_CYCLE;
              const ID = fD._interpolate(CD, this._animationState),
                pD = fD._interpolate(cD, this._animationState);
              switch (this._animationState.ni = this._getCorrectLoopMode(), fD.dataType) {
                case HD.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[DD] = pD - ID;
                  break;
                case HD.d.ANIMATIONTYPE_QUATERNION:
                case HD.d.ANIMATIONTYPE_VECTOR3:
                case HD.d.ANIMATIONTYPE_VECTOR2:
                case HD.d.ANIMATIONTYPE_SIZE:
                case HD.d.ANIMATIONTYPE_COLOR3:
                case HD.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[DD] = pD.subtract(ID)
              }
              this._highLimitsCache[DD] = pD
            }
            yD = this._highLimitsCache[DD], iD = this._offsetsCache[DD]
          }
          if (void 0 === iD) switch (fD.dataType) {
            case HD.d.ANIMATIONTYPE_FLOAT:
              iD = 0;
              break;
            case HD.d.ANIMATIONTYPE_QUATERNION:
              iD = HD.j;
              break;
            case HD.d.ANIMATIONTYPE_VECTOR3:
              iD = HD.s;
              break;
            case HD.d.ANIMATIONTYPE_VECTOR2:
              iD = HD.r;
              break;
            case HD.d.ANIMATIONTYPE_SIZE:
              iD = HD.n;
              break;
            case HD.d.ANIMATIONTYPE_COLOR3:
              iD = HD.g;
              break;
            case HD.d.ANIMATIONTYPE_COLOR4:
              iD = HD.i
          }
          const ZD = this._host ? this._host.syncRoot : null;
          let oD, vD = this._playbackFrames,
            ND = !1;
          if (ZD) {
            const DD = ZD.toFrame - ZD.fromFrame,
              cD = ZD.masterFrame,
              ID = (cD - ZD.fromFrame) / DD;
            QD = CD + BD * ID;
            const pD = ZD.getAnimations()[0];
            if (pD && 0 !== DD) {
              const DD = BD * ID,
                CD = pD._playbackTo - pD._playbackFrom;
              if (0 !== CD && pD._playbackFrom <= ZD.fromFrame && pD._playbackTo >= ZD.toFrame) {
                vD = BD * Math.round((pD._playbackFrames - (pD._currentFrame - pD._playbackFrom)) / CD) + DD
              } else ND = (cD - this._playbackSyncMasterFrame) * (pD._playbackFrames - this._playbackSyncMasterPlayed) < 0, vD = DD;
              ND = ND || pD._playbackJumped, this._playbackSyncMasterPlayed = pD._playbackFrames, this._playbackSyncMasterFrame = cD
            }
          } else QD = bD > 0 && CD > cD || bD < 0 && CD < cD ? wD && 0 !== BD ? cD + bD % BD : CD : wD && 0 !== BD ? CD + bD % BD : cD;
          if (!tD && (pD > 0 && this.currentFrame > QD || pD < 0 && this.currentFrame < QD) || tD && MD) {
            this._onLoop();
            for (let DD = 0; DD < SD.length; DD++) SD[DD].onlyOnce || (SD[DD].isDone = !1);
            this._animationState.key = pD > 0 ? 0 : fD.getKeys().length - 1
          }
          if (this._currentFrame = QD, this._animationState.repeatCount = 0 === BD ? 0 : bD / BD | 0, this._animationState.highLimitValue = yD, this._animationState.offsetValue = iD, this._playbackFrom = CD, this._playbackTo = cD, this._playbackJumped = ND, this._playbackSyncRoot = ZD, ZD) oD = vD;
          else if (wD) oD = tD ? QD === CD && bD === cD ? BD : QD - CD : bD;
          else {
            const DD = 0 !== BD ? Math.floor(this._playbackFrames / BD) : 0;
            oD = (QD === cD ? DD + 1 : DD) * BD
          }
          this._playbackFrames = oD, this._playbackProgress = this._animationState.ni === HD.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? BD : oD
        }
        const yD = fD._interpolate(QD, this._animationState);
        if (this.setValue(yD, iD), SD.length)
          for (let MD = 0; MD < SD.length; MD++)
            if (BD >= 0 && QD >= SD[MD].frame && SD[MD].frame >= CD || BD < 0 && QD <= SD[MD].frame && SD[MD].frame <= CD) {
              const DD = SD[MD];
              DD.isDone || (DD.onlyOnce && (SD.splice(MD, 1), MD--), DD.isDone = !0, DD.action(QD))
            } return wD || (this._stopped = !0), wD
      }
    }
    var xD = cD(39054);
    class qD {
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
        for (let CD = 0; CD < this._runtimeAnimations.length; CD++) {
          this._runtimeAnimations[CD]._prepareForSpeedRatioChange(DD)
        }
        this._speedRatio = DD, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          bD = arguments.length > 6 ? arguments[6] : void 0,
          QD = arguments.length > 7 ? arguments[7] : void 0,
          wD = arguments.length > 8 ? arguments[8] : void 0,
          SD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          BD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = CD, this.fromFrame = cD, this.toFrame = ID, this.loopAnimation = iD, this.onAnimationEnd = bD, this.onAnimationLoop = wD, this.isAdditive = SD, this.playOrder = BD, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.fn = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new pD.c, this.onAnimationLoopObservable = new pD.c, this._scene = DD, QD && this.appendAnimations(CD, QD), this._speedRatio = fD, DD._activeAnimatables.push(this)
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
      appendAnimations(DD, CD) {
        for (let cD = 0; cD < CD.length; cD++) {
          const ID = CD[cD],
            pD = new UD(DD, ID, this._scene, this);
          pD._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(pD)
        }
      }
      getAnimationByTargetProperty(DD) {
        const CD = this._runtimeAnimations;
        for (let cD = 0; cD < CD.length; cD++)
          if (CD[cD].animation.targetProperty === DD) return CD[cD].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(DD) {
        const CD = this._runtimeAnimations;
        for (let cD = 0; cD < CD.length; cD++)
          if (CD[cD].animation.targetProperty === DD) return CD[cD];
        return null
      }
      reset() {
        const DD = this._runtimeAnimations;
        for (let CD = 0; CD < DD.length; CD++) DD[CD].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(DD) {
        const CD = this._runtimeAnimations;
        for (let cD = 0; cD < CD.length; cD++) CD[cD].animation.enableBlending = !0, CD[cD].animation.blendingSpeed = DD
      }
      disableBlending() {
        const DD = this._runtimeAnimations;
        for (let CD = 0; CD < DD.length; CD++) DD[CD].animation.enableBlending = !1
      }
      goToFrame(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this._runtimeAnimations;
        if (cD[0]) {
          const CD = cD[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? cD[0].currentFrame;
          const ID = 0 === this.speedRatio ? 0 : (DD - this._frameToSyncFromJump) / CD * 1e3 / this.speedRatio;
          this._manualJumpDelay = -ID
        }
        for (let ID = 0; ID < cD.length; ID++) cD[ID].goToFrame(DD, CD ? this._weight : -1);
        this._goToFrame = DD
      }
      get paused() {
        return this.fn
      }
      pause() {
        this.fn || (this.fn = !0)
      }
      restart() {
        this.fn = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (DD || CD) {
          const pD = this._scene._activeAnimatables.indexOf(this);
          if (pD > -1) {
            const iD = this._runtimeAnimations;
            for (let cD = iD.length - 1; cD >= 0; cD--) {
              const ID = iD[cD];
              DD && ID.animation.name != DD || (CD && !CD(ID.target) || (ID.dispose(), iD.splice(cD, 1)))
            }
            0 == iD.length && (cD || this._scene._activeAnimatables.splice(pD, 1), ID || this._raiseOnAnimationEnd())
          }
        } else {
          const DD = this._scene._activeAnimatables.indexOf(this);
          if (DD > -1) {
            cD || this._scene._activeAnimatables.splice(DD, 1);
            const CD = this._runtimeAnimations;
            for (let DD = 0; DD < CD.length; DD++) CD[DD].dispose();
            this._runtimeAnimations.length = 0, ID || this._raiseOnAnimationEnd()
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
        if (this.fn) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = DD), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = DD, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += DD - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !qD.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let CD = !1;
        const cD = this._runtimeAnimations;
        let ID;
        for (ID = 0; ID < cD.length; ID++) {
          const pD = cD[ID].animate(DD - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          CD = CD || pD
        }
        if (this.animationStarted = CD, !CD) {
          if (this.disposeOnEnd)
            for (ID = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(ID, 1), ID = 0; ID < cD.length; ID++) cD[ID].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return CD
      }
    }

    function JD(DD) {
      if (0 === DD.totalWeight && 0 === DD.totalAdditiveWeight) return DD.originalValue;
      let CD = 1;
      const cD = iD.l.cZ[0],
        ID = iD.l.cZ[1],
        pD = iD.l.Quaternion[0];
      let fD = 0;
      const bD = DD.animations[0],
        QD = DD.originalValue;
      let wD, SD = !1;
      if (DD.totalWeight < 1) wD = 1 - DD.totalWeight, QD.decompose(ID, pD, cD);
      else {
        if (fD = 1, CD = DD.totalWeight, wD = bD.weight / CD, 1 == wD) {
          if (!DD.totalAdditiveWeight) return bD.currentValue;
          SD = !0
        }
        bD.currentValue.decompose(ID, pD, cD)
      }
      if (!SD) {
        ID.scaleInPlace(wD), cD.scaleInPlace(wD), pD.scaleInPlace(wD);
        for (let bD = fD; bD < DD.animations.length; bD++) {
          const fD = DD.animations[bD];
          if (0 === fD.weight) continue;
          wD = fD.weight / CD;
          const QD = iD.l.cZ[2],
            SD = iD.l.cZ[3],
            BD = iD.l.Quaternion[1];
          fD.currentValue.decompose(SD, BD, QD), SD.scaleAndAddToRef(wD, ID), BD.scaleAndAddToRef(iD.h.Dot(pD, BD) > 0 ? wD : -wD, pD), QD.scaleAndAddToRef(wD, cD)
        }
        pD.normalize()
      }
      for (let yD = 0; yD < DD.additiveAnimations.length; yD++) {
        const CD = DD.additiveAnimations[yD];
        if (0 === CD.weight) continue;
        const fD = iD.l.cZ[2],
          bD = iD.l.cZ[3],
          QD = iD.l.Quaternion[1];
        CD.currentValue.decompose(bD, QD, fD), bD.multiplyToRef(ID, bD), iD.p.LerpToRef(ID, bD, CD.weight, ID), pD.multiplyToRef(QD, QD), iD.h.SlerpToRef(pD, QD, CD.weight, pD), fD.scaleAndAddToRef(CD.weight, cD)
      }
      const BD = bD ? bD._animationState.workValue : iD.l.Matrix[0].clone();
      return iD.d.ComposeToRef(ID, pD, cD, BD), BD
    }

    function KD(DD, CD) {
      if (0 === DD.totalWeight && 0 === DD.totalAdditiveWeight) return CD;
      const cD = DD.animations[0],
        ID = DD.originalValue;
      let pD = CD;
      if (0 === DD.totalWeight && DD.totalAdditiveWeight > 0) pD.YCD(ID);
      else if (1 === DD.animations.length) {
        if (iD.h.SlerpToRef(ID, cD.currentValue, Math.min(1, DD.totalWeight), pD), 0 === DD.totalAdditiveWeight) return pD
      } else if (DD.animations.length > 1) {
        let cD, fD, bD = 1;
        if (DD.totalWeight < 1) {
          const CD = 1 - DD.totalWeight;
          cD = [], fD = [], cD.push(ID), fD.push(CD)
        } else {
          if (2 === DD.animations.length && (iD.h.SlerpToRef(DD.animations[0].currentValue, DD.animations[1].currentValue, DD.animations[1].weight / DD.totalWeight, CD), 0 === DD.totalAdditiveWeight)) return CD;
          cD = [], fD = [], bD = DD.totalWeight
        }
        for (let CD = 0; CD < DD.animations.length; CD++) {
          const ID = DD.animations[CD];
          cD.push(ID.currentValue), fD.push(ID.weight / bD)
        }
        let QD = 0;
        for (let DD = 0; DD < cD.length;) DD ? (QD += fD[DD], iD.h.SlerpToRef(pD, cD[DD], fD[DD] / QD, pD), DD++) : (iD.h.SlerpToRef(cD[DD], cD[DD + 1], fD[DD + 1] / (fD[DD] + fD[DD + 1]), CD), pD = CD, QD = fD[DD] + fD[DD + 1], DD += 2)
      }
      for (let fD = 0; fD < DD.additiveAnimations.length; fD++) {
        const CD = DD.additiveAnimations[fD];
        0 !== CD.weight && (pD.multiplyToRef(CD.currentValue, iD.l.Quaternion[0]), iD.h.SlerpToRef(pD, iD.l.Quaternion[0], CD.weight, pD))
      }
      return pD
    }

    function aD(DD, CD) {
      CD && (CD.prototype.copyAnimationRange = function(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new HD.d(this.name, "_matrix", DD.animations[0].framePerSecond, HD.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const iD = DD.animations[0].getRange(CD);
        if (!iD) return !1;
        const fD = iD.from,
          bD = iD.to,
          QD = DD.animations[0].getKeys(),
          wD = DD.length,
          SD = DD.getParent(),
          BD = this.getParent(),
          yD = ID && SD && wD && this.length && wD !== this.length,
          MD = yD && BD && SD ? BD.length / SD.length : 1,
          tD = ID && !BD && pD && (1 !== pD.x || 1 !== pD.y || 1 !== pD.z),
          ZD = this.animations[0].getKeys();
        let oD, vD, ND;
        for (let gD = 0, XD = QD.length; gD < XD; gD++) oD = QD[gD], oD.frame >= fD && oD.frame <= bD && (ID ? (ND = oD.value.clone(), yD ? (vD = ND.getTranslation(), ND.setTranslation(vD.scaleInPlace(MD))) : tD && pD ? (vD = ND.getTranslation(), ND.setTranslation(vD.multiplyInPlace(pD))) : ND = oD.value) : ND = oD.value, ZD.push({
          frame: oD.frame + cD,
          value: ND
        }));
        return this.animations[0].createRange(CD, fD + cD, bD + cD), !0
      }), DD && (DD.prototype._animate = function(DD) {
        const CD = this._animationWrites,
          cD = this._animationWriteCount;
        let ID = 0;
        for (let iD = this._animationStepWriteCount; iD < cD; iD++) {
          const DD = CD[iD];
          DD.eb && -1 === DD.weight || (DD.eb = !0, CD[iD] = CD[ID], CD[ID] = DD, ID++)
        }
        for (let iD = ID; iD < cD; iD++) {
          const DD = CD[iD];
          DD.runtimeAnimation = null, DD.target = null
        }
        if (this._animationWriteCount = ID, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const pD = xD.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = pD
        }
        this.deltaTime = void 0 !== DD ? DD : this.useConstantAnimationDeltaTime ? 16 : (pD - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = pD;
        const fD = this._activeAnimatables;
        if (0 === fD.length) return;
        this._animationTime += this.deltaTime;
        const bD = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let iD = 0; iD < fD.length; iD++) {
          const DD = fD[iD];
          !DD._animate(bD) && DD.disposeOnEnd && iD--
        }! function(DD) {
          if (DD._registeredForLateAnimationBindings.length) {
            for (let CD = 0; CD < DD._registeredForLateAnimationBindings.length; CD++) {
              const cD = DD._registeredForLateAnimationBindings.data[CD];
              for (const DD in cD._lateAnimationHolders) {
                const CD = cD._lateAnimationHolders[DD],
                  ID = CD.animations[0],
                  pD = CD.originalValue;
                if (void 0 === pD || null === pD) continue;
                const fD = HD.d.AllowMatrixDecomposeForInterpolation && pD.m;
                let bD = cD[DD];
                if (fD) bD = JD(CD);
                else if (void 0 !== pD.w) bD = KD(CD, bD || iD.h.Identity());
                else {
                  let DD = 0,
                    cD = 1;
                  const iD = ID && ID._animationState.ni === HD.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (CD.totalWeight < 1) bD = iD ? pD.clone ? pD.clone() : pD : ID && pD.scale ? pD.scale(1 - CD.totalWeight) : ID ? pD * (1 - CD.totalWeight) : pD.clone ? pD.clone() : pD;
                  else if (ID) {
                    cD = CD.totalWeight;
                    const fD = ID.weight / cD;
                    bD = 1 !== fD ? ID.currentValue.scale ? ID.currentValue.scale(fD) : ID.currentValue * fD : (CD.animations.length > 1 || CD.additiveAnimations.length > 0) && ID.currentValue.clone ? ID.currentValue.clone() : ID.currentValue, iD && (bD.addToRef ? bD.addToRef(pD, bD) : bD += pD), DD = 1
                  }
                  for (let ID = DD; ID < CD.animations.length; ID++) {
                    const DD = CD.animations[ID],
                      pD = DD.weight / cD;
                    pD && (DD.currentValue.scaleAndAddToRef ? DD.currentValue.scaleAndAddToRef(pD, bD) : bD += DD.currentValue * pD)
                  }
                  for (let ID = 0; ID < CD.additiveAnimations.length; ID++) {
                    const DD = CD.additiveAnimations[ID],
                      cD = DD.weight;
                    cD && (DD.currentValue.scaleAndAddToRef ? DD.currentValue.scaleAndAddToRef(cD, bD) : bD += DD.currentValue * cD)
                  }
                }
                cD[DD] = bD
              }
              cD._lateAnimationHolders = {}
            }
            DD._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, DD.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((DD, CD) => DD.playOrder - CD.playOrder))
      }, DD.prototype.beginWeightedAnimation = function(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 ? arguments[7] : void 0,
          QD = arguments.length > 8 ? arguments[8] : void 0,
          wD = arguments.length > 9 ? arguments[9] : void 0,
          SD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const BD = this.beginAnimation(DD, CD, cD, pD, iD, fD, bD, !1, QD, wD, SD);
        return BD.weight = ID, BD
      }, DD.prototype.beginAnimation = function(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          iD = arguments.length > 5 ? arguments[5] : void 0,
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QD = arguments.length > 8 ? arguments[8] : void 0,
          wD = arguments.length > 9 ? arguments[9] : void 0,
          SD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (pD < 0) {
          const DD = CD;
          CD = cD, cD = DD, pD = -pD
        }
        CD > cD && (pD = -pD), bD && this.stopAnimation(DD, void 0, QD), fD || (fD = new qD(this, DD, CD, cD, ID, pD, iD, void 0, wD, SD));
        const BD = !QD || QD(DD);
        if (DD.animations && BD && fD.appendAnimations(DD, DD.animations), DD.getAnimatables) {
          const SD = DD.getAnimatables();
          for (let DD = 0; DD < SD.length; DD++) this.beginAnimation(SD[DD], CD, cD, ID, pD, iD, fD, bD, QD, wD)
        }
        return fD.reset(), fD
      }, DD.prototype.beginHierarchyAnimation = function(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 ? arguments[7] : void 0,
          QD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          wD = arguments.length > 9 ? arguments[9] : void 0,
          SD = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const BD = DD.getDescendants(CD),
          yD = [];
        yD.push(this.beginAnimation(DD, cD, ID, pD, iD, fD, bD, QD, wD, void 0, SD));
        for (const MD of BD) yD.push(this.beginAnimation(MD, cD, ID, pD, iD, fD, bD, QD, wD, void 0, SD));
        return yD
      }, DD.prototype.beginDirectAnimation = function(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (iD < 0) {
          const DD = cD;
          cD = ID, ID = DD, iD = -iD
        }
        cD > ID && (iD = -iD);
        return new qD(this, DD, cD, ID, pD, iD, arguments.length > 6 ? arguments[6] : void 0, CD, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, DD.prototype.beginDirectHierarchyAnimation = function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        let wD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const SD = DD.getDescendants(CD),
          BD = [];
        BD.push(this.beginDirectAnimation(DD, cD, ID, pD, iD, fD, bD, QD, wD));
        for (const yD of SD) BD.push(this.beginDirectAnimation(yD, cD, ID, pD, iD, fD, bD, QD, wD));
        return BD
      }, DD.prototype.getAnimatableByTarget = function(DD) {
        for (let CD = 0; CD < this._activeAnimatables.length; CD++)
          if (this._activeAnimatables[CD].target === DD) return this._activeAnimatables[CD];
        return null
      }, DD.prototype.getAllAnimatablesByTarget = function(DD) {
        const CD = [];
        for (let cD = 0; cD < this._activeAnimatables.length; cD++) this._activeAnimatables[cD].target === DD && CD.push(this._activeAnimatables[cD]);
        return CD
      }, DD.prototype.stopAnimation = function(DD, CD, cD) {
        const ID = this.getAllAnimatablesByTarget(DD);
        for (const pD of ID) pD.stop(CD, cD)
      }, DD.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let DD = 0; DD < this._activeAnimatables.length; DD++) this._activeAnimatables[DD].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const DD of this.animationGroups) DD.stop()
      })
    }
    qD.ProcessPausedAnimatables = !1;
    var VD, zD = cD(36452),
      jD = cD(39356),
      lD = cD(39027);
    class LD extends jD.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(DD) {
        (DD.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.YCD(DD), this._markAsDirtyAndDecompose())
      }
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(DD, CD.hq(), !1), this.name = DD, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = CD, this._localMatrix = ID?.clone() ?? iD.d.Identity(), this._restMatrix = pD ?? this._localMatrix.clone(), this._bindMatrix = fD ?? this._localMatrix.clone(), this._index = bD, this._absoluteMatrix = new iD.d, this._absoluteBindMatrix = new iD.d, this._absoluteInverseBindMatrix = new iD.d, this._finalMatrix = new iD.d, CD.bones.push(this), this.setParent(cD, !1), this._updateAbsoluteBindMatrices()
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
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== DD) {
          if (this.parent) {
            const DD = this.parent.children.indexOf(this); - 1 !== DD && this.parent.children.splice(DD, 1)
          }
          this._parentNode = DD, this.parent && this.parent.children.push(this), CD && this._updateAbsoluteBindMatrices(), this.sDD()
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
        this._restMatrix.YCD(DD)
      }
      setRestPose(DD) {
        this.setRestMatrix(DD)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(DD) {
        this.o5(DD)
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
          const DD = iD.l.cZ[0],
            CD = iD.l.Quaternion[0],
            cD = iD.l.cZ[1];
          this.getRestMatrix().decompose(DD, CD, cD), this._linkedTransformNode.position.YCD(cD), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? iD.h.Identity(), this._linkedTransformNode.rotationQuaternion.YCD(CD), this._linkedTransformNode.ci.YCD(DD)
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
        return this._decompose(), this.fDD
      }
      set position(DD) {
        this._decompose(), this.fDD.YCD(DD), this._markAsDirtyAndCompose()
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
      get ci() {
        return this.getScale()
      }
      set ci(DD) {
        this.setScale(DD)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = iD.p.Zero(), this._localRotation = iD.h.Zero(), this.fDD = iD.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.fDD))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, iD.d.ComposeToRef(this._localScaling, this._localRotation, this.fDD, this._localMatrix)) : this._needToCompose = !1)
      }
      o5(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.YCD(DD), CD && this._updateAbsoluteBindMatrices(), cD ? this._matrix = DD : this.sDD()
      }
      _updateAbsoluteBindMatrices(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (DD || (DD = this._bindMatrix), this.parent ? DD.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.YCD(DD), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), CD)
          for (let cD = 0; cD < this.children.length; cD++) this.children[cD]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      sDD() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.sDD(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.sDD(), this._needToDecompose = !0
      }
      _updatePosition(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pD = this.getLocalMatrix();
        if (0 == CD) ID ? (pD.addAtIndex(12, DD.x), pD.addAtIndex(13, DD.y), pD.addAtIndex(14, DD.z)) : pD.setTranslationFromFloats(DD.x, DD.y, DD.z);
        else {
          const CD = LD._TmpMats[0],
            fD = LD._TmpVecs[0];
          this.parent ? (CD.YCD(this.parent.getAbsoluteMatrix()), cD && CD.multiplyToRef(cD.getWorldMatrix(), CD)) : iD.d.IdentityToRef(CD), ID && CD.setTranslationFromFloats(0, 0, 0), CD.invert(), iD.p.TransformCoordinatesToRef(DD, CD, fD), ID ? (pD.addAtIndex(12, fD.x), pD.addAtIndex(13, fD.y), pD.addAtIndex(14, fD.z)) : pD.setTranslationFromFloats(fD.x, fD.y, fD.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(DD, CD, cD, !0)
      }
      setPosition(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(DD, CD, cD, !1)
      }
      setAbsolutePosition(DD, CD) {
        this.setPosition(DD, 1, CD)
      }
      scale(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pD = this.getLocalMatrix(),
          fD = LD._TmpMats[0];
        iD.d.ScalingToRef(DD, CD, cD, fD), fD.multiplyToRef(pD, pD), fD.invert();
        for (const iD of this.children) {
          const ID = iD.getLocalMatrix();
          ID.multiplyToRef(fD, ID), ID.multiplyAtIndex(12, DD), ID.multiplyAtIndex(13, CD), ID.multiplyAtIndex(14, cD), iD._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), ID)
          for (const iD of this.children) iD.scale(DD, CD, cD, ID)
      }
      setScale(DD) {
        this._decompose(), this._localScaling.YCD(DD), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(DD) {
        this._decompose(), DD.YCD(this._localScaling)
      }
      setYawPitchRoll(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === ID) {
          const fD = LD._TmpQuat;
          return iD.h.RotationYawPitchRollToRef(DD, CD, cD, fD), void this.setRotationQuaternion(fD, ID, pD)
        }
        const fD = LD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(fD, pD)) return;
        const bD = LD._TmpMats[1];
        iD.d.RotationYawPitchRollToRef(DD, CD, cD, bD), fD.multiplyToRef(bD, bD), this._rotateWithMatrix(bD, ID, pD)
      }
      rotate(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        const pD = LD._TmpMats[0];
        pD.setTranslationFromFloats(0, 0, 0), iD.d.RotationAxisToRef(DD, CD, pD), this._rotateWithMatrix(pD, cD, ID)
      }
      setAxisAngle(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === cD) {
          const pD = LD._TmpQuat;
          return iD.h.RotationAxisToRef(DD, CD, pD), void this.setRotationQuaternion(pD, cD, ID)
        }
        const pD = LD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(pD, ID)) return;
        const fD = LD._TmpMats[1];
        iD.d.RotationAxisToRef(DD, CD, fD), pD.multiplyToRef(fD, fD), this._rotateWithMatrix(fD, cD, ID)
      }
      setRotation(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(DD.y, DD.x, DD.z, CD, cD)
      }
      setRotationQuaternion(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === CD) return this._decompose(), this._localRotation.YCD(DD), void this._markAsDirtyAndCompose();
        const ID = LD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(ID, cD)) return;
        const pD = LD._TmpMats[1];
        iD.d.FromQuaternionToRef(DD, pD), ID.multiplyToRef(pD, pD), this._rotateWithMatrix(pD, CD, cD)
      }
      setRotationMatrix(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === CD) {
          const ID = LD._TmpQuat;
          return iD.h.FromRotationMatrixToRef(DD, ID), void this.setRotationQuaternion(ID, CD, cD)
        }
        const ID = LD._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(ID, cD)) return;
        const pD = LD._TmpMats[1];
        pD.YCD(DD), ID.multiplyToRef(DD, pD), this._rotateWithMatrix(pD, CD, cD)
      }
      _rotateWithMatrix(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = this.getLocalMatrix(),
          pD = ID.m[12],
          iD = ID.m[13],
          fD = ID.m[14],
          bD = this.getParent(),
          QD = LD._TmpMats[3],
          wD = LD._TmpMats[4];
        bD && 1 == CD ? (cD ? (QD.YCD(cD.getWorldMatrix()), bD.getAbsoluteMatrix().multiplyToRef(QD, QD)) : QD.YCD(bD.getAbsoluteMatrix()), wD.YCD(QD), wD.invert(), ID.multiplyToRef(QD, ID), ID.multiplyToRef(DD, ID), ID.multiplyToRef(wD, ID)) : 1 == CD && cD ? (QD.YCD(cD.getWorldMatrix()), wD.YCD(QD), wD.invert(), ID.multiplyToRef(QD, ID), ID.multiplyToRef(DD, ID), ID.multiplyToRef(wD, ID)) : ID.multiplyToRef(DD, ID), ID.setTranslationFromFloats(pD, iD, fD), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(DD, CD) {
        const cD = LD._TmpMats[2];
        return DD.YCD(this.getAbsoluteMatrix()), CD ? (DD.multiplyToRef(CD.getWorldMatrix(), DD), iD.d.ScalingToRef(CD.ci.x, CD.ci.y, CD.ci.z, cD)) : iD.d.IdentityToRef(cD), DD.invert(), !isNaN(DD.m[0]) && (cD.multiplyAtIndex(0, this._scalingDeterminant), DD.multiplyToRef(cD, DD), !0)
      }
      FX() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = iD.p.Zero();
        return this.getPositionToRef(DD, CD, cD), cD
      }
      getPositionToRef() {
        let DD = arguments.length > 1 ? arguments[1] : void 0,
          CD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const DD = this.getLocalMatrix();
          CD.x = DD.m[12], CD.y = DD.m[13], CD.z = DD.m[14]
        } else {
          const cD = LD._TmpMats[0].YCD(this.getAbsoluteMatrix());
          DD && cD.multiplyToRef(DD.getWorldMatrix(), cD), CD.x = cD.m[12], CD.y = cD.m[13], CD.z = cD.m[14]
        }
      }
      getAbsolutePosition() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const CD = iD.p.Zero();
        return this.getPositionToRef(1, DD, CD), CD
      }
      getAbsolutePositionToRef(DD, CD) {
        this.getPositionToRef(1, DD, CD)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.YCD(this._localMatrix);
          const DD = this._skeleton.getPoseMatrix();
          DD && this._absoluteMatrix.multiplyToRef(DD, this._absoluteMatrix)
        }
        const DD = this.children,
          CD = DD.length;
        for (let cD = 0; cD < CD; cD++) DD[cD].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      qY(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = iD.p.Zero();
        return this.getDirectionToRef(DD, CD, cD), cD
      }
      getDirectionToRef(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = LD._TmpMats[0].YCD(this.getAbsoluteMatrix());
        CD && ID.multiplyToRef(CD.getWorldMatrix(), ID), iD.p.TransformNormalToRef(DD, ID, cD), cD.normalize()
      }
      getRotation() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = iD.p.Zero();
        return this.getRotationToRef(DD, CD, cD), cD
      }
      getRotationToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = LD._TmpQuat;
        this.getRotationQuaternionToRef(DD, CD, ID), ID.toEulerAnglesToRef(cD)
      }
      getRotationQuaternion() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = iD.h.Identity();
        return this.getRotationQuaternionToRef(DD, CD, cD), cD
      }
      getRotationQuaternionToRef() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          CD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), CD.YCD(this._localRotation);
        else {
          const cD = LD._TmpMats[0],
            ID = this.getAbsoluteMatrix();
          DD ? ID.multiplyToRef(DD.getWorldMatrix(), cD) : cD.YCD(ID), cD.multiplyAtIndex(0, this._scalingDeterminant), cD.multiplyAtIndex(1, this._scalingDeterminant), cD.multiplyAtIndex(2, this._scalingDeterminant), cD.decompose(void 0, CD, void 0)
        }
      }
      getRotationMatrix() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 ? arguments[1] : void 0;
        const cD = iD.d.Identity();
        return this.getRotationMatrixToRef(DD, CD, cD), cD
      }
      getRotationMatrixToRef() {
        let DD = arguments.length > 1 ? arguments[1] : void 0,
          CD = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(CD);
        else {
          const cD = LD._TmpMats[0],
            ID = this.getAbsoluteMatrix();
          DD ? ID.multiplyToRef(DD.getWorldMatrix(), cD) : cD.YCD(ID), cD.multiplyAtIndex(0, this._scalingDeterminant), cD.multiplyAtIndex(1, this._scalingDeterminant), cD.multiplyAtIndex(2, this._scalingDeterminant), cD.getRotationMatrixToRef(CD)
        }
      }
      getAbsolutePositionFromLocal(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = iD.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(DD, CD, cD), cD
      }
      getAbsolutePositionFromLocalToRef(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = LD._TmpMats[0].YCD(this.getAbsoluteMatrix());
        CD && ID.multiplyToRef(CD.getWorldMatrix(), ID), iD.p.TransformCoordinatesToRef(DD, ID, cD)
      }
      getLocalPositionFromAbsolute(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = iD.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(DD, CD, cD), cD
      }
      getLocalPositionFromAbsoluteToRef(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = LD._TmpMats[0].YCD(this.getAbsoluteMatrix());
        CD && ID.multiplyToRef(CD.getWorldMatrix(), ID), ID.invert(), iD.p.TransformCoordinatesToRef(DD, ID, cD)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const DD = this._skeleton.bones.indexOf(this);
        if (-1 !== DD && this._skeleton.bones.splice(DD, 1), this._parentNode && this._parentNode.children) {
          const DD = this._parentNode.children,
            CD = DD.indexOf(this); - 1 !== CD && DD.splice(CD, 1)
        }
        super.dispose()
      }
    }
    LD._TmpVecs = (0, zD.b)(2, iD.p.Zero), LD._TmpQuat = iD.h.Identity(), LD._TmpMats = (0, zD.b)(5, iD.d.Identity), (VD = LD.prototype).copyAnimationRange ?? (VD.copyAnimationRange = (0, lD.j)("Bone", "copyAnimationRange"));
    var TD = cD(39239);
    let GD = !1;
    var RD = cD(39124),
      kD = cD(39456),
      dD = cD(39460),
      YD = cD(39458),
      WD = cD(39272);

    function sD(DD, CD) {
      const cD = (0, MD.RandomRange)(0, 1);
      SD.e.LerpToRef(CD.color1, CD.color2, cD, DD.color)
    }

    function ED(DD, CD) {
      CD.colorDead.subtractToRef(DD.color, CD._colorDiff), CD._colorDiff.scaleToRef(1 / DD.lifeTime, DD.colorStep)
    }

    function eD(DD, CD) {
      DD._properties.currentColorGradient = CD._colorGradients[0], DD._properties.currentColorGradient.getColorToRef(DD.color), DD._properties.currentColor1.YCD(DD.color), CD._colorGradients.length > 1 ? CD._colorGradients[1].getColorToRef(DD._properties.currentColor2) : DD._properties.currentColor2.YCD(DD.color)
    }

    function uD(DD, CD) {
      const cD = CD._colorGradients;
      ID.k.GetCurrentGradient(CD._ratio, cD, ((CD, cD, ID) => {
        CD !== DD._properties.currentColorGradient && (DD._properties.currentColor1.YCD(DD._properties.currentColor2), cD.getColorToRef(DD._properties.currentColor2), DD._properties.currentColorGradient = CD), SD.e.LerpToRef(DD._properties.currentColor1, DD._properties.currentColor2, ID, DD.color), DD.color.a < 0 && (DD.color.a = 0)
      }))
    }

    function hD(DD, CD) {
      DD.colorStep.scaleToRef(CD._scaledUpdateSpeed, CD._scaledColorStep), DD.color.addInPlace(CD._scaledColorStep), DD.color.a < 0 && (DD.color.a = 0)
    }

    function rD(DD, CD) {
      ID.k.GetCurrentGradient(CD._ratio, CD._angularSpeedGradients, ((CD, cD, ID) => {
        CD !== DD._properties.currentAngularSpeedGradient && (DD._properties.currentAngularSpeed1 = DD._properties.currentAngularSpeed2, DD._properties.currentAngularSpeed2 = cD.getFactor(), DD._properties.currentAngularSpeedGradient = CD), DD.angularSpeed = (0, MD.Lerp)(DD._properties.currentAngularSpeed1, DD._properties.currentAngularSpeed2, ID)
      }))
    }

    function AD(DD, CD) {
      DD.angle += DD.angularSpeed * CD._scaledUpdateSpeed
    }

    function FD(DD, CD) {
      CD.particleEmitterType.startDirectionFunction(CD._emitterWorldMatrix, DD.direction, DD, CD.isLocal, CD._emitterInverseWorldMatrix)
    }

    function DC(DD, CD) {
      CD.startDirectionFunction(CD._emitterWorldMatrix, DD.direction, DD, CD.isLocal)
    }

    function CC(DD, CD) {
      DD._properties.currentVelocityGradient = CD._velocityGradients[0], DD._properties.currentVelocity1 = DD._properties.currentVelocityGradient.getFactor(), CD._velocityGradients.length > 1 ? DD._properties.currentVelocity2 = CD._velocityGradients[1].getFactor() : DD._properties.currentVelocity2 = DD._properties.currentVelocity1
    }

    function cC(DD, CD) {
      DD._properties.currentLimitVelocityGradient = CD._limitVelocityGradients[0], DD._properties.currentLimitVelocity1 = DD._properties.currentLimitVelocityGradient.getFactor(), CD._limitVelocityGradients.length > 1 ? DD._properties.currentLimitVelocity2 = CD._limitVelocityGradients[1].getFactor() : DD._properties.currentLimitVelocity2 = DD._properties.currentLimitVelocity1
    }

    function IC(DD, CD) {
      ID.k.GetCurrentGradient(CD._ratio, CD._velocityGradients, ((CD, cD, ID) => {
        CD !== DD._properties.currentVelocityGradient && (DD._properties.currentVelocity1 = DD._properties.currentVelocity2, DD._properties.currentVelocity2 = cD.getFactor(), DD._properties.currentVelocityGradient = CD), DD._properties.directionScale *= (0, MD.Lerp)(DD._properties.currentVelocity1, DD._properties.currentVelocity2, ID)
      }))
    }

    function pC(DD, CD) {
      ID.k.GetCurrentGradient(CD._ratio, CD._limitVelocityGradients, ((cD, ID, pD) => {
        cD !== DD._properties.currentLimitVelocityGradient && (DD._properties.currentLimitVelocity1 = DD._properties.currentLimitVelocity2, DD._properties.currentLimitVelocity2 = ID.getFactor(), DD._properties.currentLimitVelocityGradient = cD);
        const iD = (0, MD.Lerp)(DD._properties.currentLimitVelocity1, DD._properties.currentLimitVelocity2, pD);
        DD.direction.length() > iD && DD.direction.scaleInPlace(CD.limitVelocityDamping)
      }))
    }

    function iC(DD) {
      DD.direction.scaleToRef(DD._properties.directionScale, DD._properties.scaledDirection)
    }

    function fC(DD, CD) {
      CD.particleEmitterType.startPositionFunction(CD._emitterWorldMatrix, DD.position, DD, CD.isLocal)
    }

    function bC(DD, CD) {
      CD.startPositionFunction(CD._emitterWorldMatrix, DD.position, DD, CD.isLocal)
    }

    function QC(DD, CD) {
      DD._properties.localPosition ? DD._properties.localPosition.YCD(DD.position) : DD._properties.localPosition = DD.position.clone(), iD.p.TransformCoordinatesToRef(DD._properties.localPosition, CD._emitterWorldMatrix, DD.position)
    }

    function wC(DD, CD) {
      CD.isLocal && DD._properties.localPosition ? (DD._properties.localPosition.addInPlace(DD._properties.scaledDirection), iD.p.TransformCoordinatesToRef(DD._properties.localPosition, CD._emitterWorldMatrix, DD.position)) : DD.position.addInPlace(DD._properties.scaledDirection)
    }

    function SC(DD, CD) {
      DD._properties.currentDragGradient = CD._dragGradients[0], DD._properties.currentDrag1 = DD._properties.currentDragGradient.getFactor(), CD._dragGradients.length > 1 ? DD._properties.currentDrag2 = CD._dragGradients[1].getFactor() : DD._properties.currentDrag2 = DD._properties.currentDrag1
    }

    function BC(DD, CD) {
      ID.k.GetCurrentGradient(CD._ratio, CD._dragGradients, ((CD, cD, ID) => {
        CD !== DD._properties.currentDragGradient && (DD._properties.currentDrag1 = DD._properties.currentDrag2, DD._properties.currentDrag2 = cD.getFactor(), DD._properties.currentDragGradient = CD);
        const pD = (0, MD.Lerp)(DD._properties.currentDrag1, DD._properties.currentDrag2, ID);
        DD._properties.scaledDirection.scaleInPlace(1 - pD)
      }))
    }

    function yC(DD, CD) {
      DD._properties.randomNoiseCoordinates1 && DD._properties.randomNoiseCoordinates2 ? (DD._properties.randomNoiseCoordinates1.K4(Math.random(), Math.random(), Math.random()), DD._properties.randomNoiseCoordinates2.K4(Math.random(), Math.random(), Math.random())) : (DD._properties.randomNoiseCoordinates1 = new iD.p(Math.random(), Math.random(), Math.random()), DD._properties.randomNoiseCoordinates2 = new iD.p(Math.random(), Math.random(), Math.random()))
    }

    function MC(DD, CD) {
      const cD = CD._noiseTextureData,
        ID = CD._noiseTextureSize;
      if (cD && ID && DD._properties.randomNoiseCoordinates1 && DD._properties.randomNoiseCoordinates2) {
        const pD = CD._fetchR(DD._properties.randomNoiseCoordinates1.x, DD._properties.randomNoiseCoordinates1.y, ID.width, ID.height, cD),
          fD = CD._fetchR(DD._properties.randomNoiseCoordinates1.z, DD._properties.randomNoiseCoordinates2.x, ID.width, ID.height, cD),
          bD = CD._fetchR(DD._properties.randomNoiseCoordinates2.y, DD._properties.randomNoiseCoordinates2.z, ID.width, ID.height, cD),
          QD = iD.l.cZ[0],
          wD = iD.l.cZ[1];
        QD.K4((2 * pD - 1) * CD.noiseStrength.x, (2 * fD - 1) * CD.noiseStrength.y, (2 * bD - 1) * CD.noiseStrength.z), QD.scaleToRef(CD._tempScaledUpdateSpeed, wD), DD.direction.addInPlace(wD)
      }
    }

    function tC(DD, CD) {
      CD.gravity.scaleToRef(CD._tempScaledUpdateSpeed, CD._scaledGravity), DD.direction.addInPlace(CD._scaledGravity)
    }

    function ZC(DD, CD) {
      DD.size = (0, MD.RandomRange)(CD.minSize, CD.maxSize), DD.scale.K4((0, MD.RandomRange)(CD.minScaleX, CD.maxScaleX), (0, MD.RandomRange)(CD.minScaleY, CD.maxScaleY))
    }

    function oC(DD, CD) {
      DD._properties.currentSizeGradient = CD._sizeGradients[0], DD._properties.currentSize1 = DD._properties.currentSizeGradient.getFactor(), DD.size = DD._properties.currentSize1, CD._sizeGradients.length > 1 ? DD._properties.currentSize2 = CD._sizeGradients[1].getFactor() : DD._properties.currentSize2 = DD._properties.currentSize1, DD.scale.K4((0, MD.RandomRange)(CD.minScaleX, CD.maxScaleX), (0, MD.RandomRange)(CD.minScaleY, CD.maxScaleY))
    }

    function vC(DD, CD) {
      const cD = CD._actualFrame / CD.targetStopDuration;
      ID.k.GetCurrentGradient(cD, CD._startSizeGradients, ((cD, ID, pD) => {
        cD !== CD._currentStartSizeGradient && (CD._currentStartSize1 = CD._currentStartSize2, CD._currentStartSize2 = ID.getFactor(), CD._currentStartSizeGradient = cD);
        const iD = (0, MD.Lerp)(CD._currentStartSize1, CD._currentStartSize2, pD);
        DD.scale.scaleInPlace(iD)
      }))
    }

    function NC(DD, CD) {
      ID.k.GetCurrentGradient(CD._ratio, CD._sizeGradients, ((CD, cD, ID) => {
        CD !== DD._properties.currentSizeGradient && (DD._properties.currentSize1 = DD._properties.currentSize2, DD._properties.currentSize2 = cD.getFactor(), DD._properties.currentSizeGradient = CD), DD.size = (0, MD.Lerp)(DD._properties.currentSize1, DD._properties.currentSize2, ID)
      }))
    }

    function gC(DD, CD) {
      DD.remapData = new iD.s(0, 1, 0, 1)
    }

    function XC(DD, CD) {
      CD._colorRemapGradients && CD._colorRemapGradients.length > 0 && ID.k.GetCurrentGradient(CD._ratio, CD._colorRemapGradients, ((CD, cD, ID) => {
        const pD = (0, MD.Lerp)(CD.factor1, cD.factor1, ID),
          iD = (0, MD.Lerp)(CD.factor2, cD.factor2, ID);
        DD.remapData.x = pD, DD.remapData.y = iD - pD
      })), CD._alphaRemapGradients && CD._alphaRemapGradients.length > 0 && ID.k.GetCurrentGradient(CD._ratio, CD._alphaRemapGradients, ((CD, cD, ID) => {
        const pD = (0, MD.Lerp)(CD.factor1, cD.factor1, ID),
          iD = (0, MD.Lerp)(CD.factor2, cD.factor2, ID);
        DD.remapData.z = pD, DD.remapData.w = iD - pD
      }))
    }

    function mC(DD, CD) {
      const cD = (0, MD.Clamp)(CD._actualFrame / CD.targetStopDuration);
      ID.k.GetCurrentGradient(cD, CD._lifeTimeGradients, ((CD, ID) => {
        const pD = CD,
          iD = ID,
          fD = pD.getFactor(),
          bD = iD.getFactor(),
          QD = (cD - pD.gradient) / (iD.gradient - pD.gradient);
        DD.lifeTime = (0, MD.Lerp)(fD, bD, QD)
      })), CD._emitPower = (0, MD.RandomRange)(CD.minEmitPower, CD.maxEmitPower)
    }

    function nC(DD, CD) {
      DD.lifeTime = (0, MD.RandomRange)(CD.minLifeTime, CD.maxLifeTime), CD._emitPower = (0, MD.RandomRange)(CD.minEmitPower, CD.maxEmitPower)
    }

    function OC(DD, CD) {
      0 === CD._emitPower ? (DD._properties.initialDirection ? DD._properties.initialDirection.YCD(DD.direction) : DD._properties.initialDirection = DD.direction.clone(), DD.direction.set(0, 0, 0)) : (DD._properties.initialDirection = null, DD.direction.scaleInPlace(CD._emitPower)), DD.direction.addInPlace(CD._inheritedVelocityOffset)
    }

    function PC(DD, CD) {
      DD.angularSpeed = (0, MD.RandomRange)(CD.minAngularSpeed, CD.maxAngularSpeed), DD.angle = (0, MD.RandomRange)(CD.minInitialRotation, CD.maxInitialRotation)
    }

    function HC(DD, CD) {
      DD._properties.currentAngularSpeedGradient = CD._angularSpeedGradients[0], DD.angularSpeed = DD._properties.currentAngularSpeedGradient.getFactor(), DD._properties.currentAngularSpeed1 = DD.angularSpeed, CD._angularSpeedGradients.length > 1 ? DD._properties.currentAngularSpeed2 = CD._angularSpeedGradients[1].getFactor() : DD._properties.currentAngularSpeed2 = DD._properties.currentAngularSpeed1, DD.angle = (0, MD.RandomRange)(CD.minInitialRotation, CD.maxInitialRotation)
    }

    function UC(DD, CD) {
      DD._properties.initialStartSpriteCellId = CD.startSpriteCellID, DD._properties.initialEndSpriteCellId = CD.endSpriteCellID, DD._properties.initialSpriteCellLoop = CD.spriteCellLoop
    }

    function xC(DD, CD) {
      DD.previousItem = CD.previousItem, DD.nextItem = CD, CD.previousItem && (CD.previousItem.nextItem = DD), CD.previousItem = DD
    }

    function qC(DD, CD) {
      DD.previousItem = CD, DD.nextItem = CD.nextItem, CD.nextItem && (CD.nextItem.previousItem = DD), CD.nextItem = DD
    }

    function JC(DD) {
      DD.previousItem && (DD.previousItem.nextItem = DD.nextItem), DD.nextItem && (DD.nextItem.previousItem = DD.previousItem)
    }
    var KC = cD(39508);
    class aC extends nD {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(DD) {
        this._startDirectionFunction !== DD && (this._startDirectionFunction = DD, this._directionCreation.process = DD ? DC : FD)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(DD) {
        this._startPositionFunction !== DD && (this._startPositionFunction = DD, this._positionCreation.process = DD ? bC : fC)
      }
      set onDispose(DD) {
        this._onDisposeObserver && this.Aq.remove(this._onDisposeObserver), this._onDisposeObserver = this.Aq.add(DD)
      }
      get jCD() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(DD) {
        this._useRampGradients !== DD && (this._useRampGradients = DD, this._resetEffect(), DD ? (this._rampCreation = {
          process: gC,
          previousItem: null,
          nextItem: null
        }, qC(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: XC,
          previousItem: null,
          nextItem: null
        }, qC(this._remapGradientProcessing, this._gravityProcessing))) : (JC(this._rampCreation), JC(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(DD) {
        this._isLocal !== DD && (this._isLocal = DD, DD ? (this._isLocalCreation = {
          process: QC,
          previousItem: null,
          nextItem: null
        }, qC(this._isLocalCreation, this._positionCreation)) : JC(this._isLocalCreation))
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
          process: UC,
          previousItem: null,
          nextItem: null
        }, qC(this._sheetCreation, this._colorDeadCreation)) : JC(this._sheetCreation), this._reset())
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
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[CD] = new kD.c(this._engine), this._customWrappers[CD].effect = DD, this._customWrappers[CD].drawContext && (this._customWrappers[CD].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new pD.c), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = DD, !DD) return JC(this._noiseCreation), void JC(this._noiseProcessing);
          this._noiseCreation = {
            process: yC,
            previousItem: null,
            nextItem: null
          }, qC(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: MC,
            previousItem: null,
            nextItem: null
          }, qC(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          wD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        GD || (GD = !0, aD(TD.e, LD)), (0, RD.d)(), super(DD), this._emitterInverseWorldMatrix = iD.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new iD.p, this.Aq = new pD.c, this.onStoppedObservable = new pD.c, this.onStartedObservable = new pD.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new SD.e(0, 0, 0, 0), this._colorDiff = new SD.e(0, 0, 0, 0), this._scaledGravity = iD.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = DD => {}, this.recycleParticle = DD => {
          const CD = this._particles.pop();
          CD !== DD && CD.copyTo(DD), CD.metadata = null, this._stockParticles.push(CD)
        }, this._createParticle = () => {
          let DD;
          return 0 !== this._stockParticles.length ? (DD = this._stockParticles.pop(), DD._reset()) : DD = new PD(this), this._prepareParticle(DD), DD
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = CD, this._epsilon = bD, cD && "Scene" !== cD.getClassName() ? (this._engine = cD, this.defaultProjectionMatrix = iD.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = cD || QD.b.LastCreatedScene, this._engine = this._scene.DZ(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.iH.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: nC,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: fC,
          previousItem: null,
          nextItem: null
        }, qC(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: FD,
          previousItem: null,
          nextItem: null
        }, qC(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: OC,
          previousItem: null,
          nextItem: null
        }, qC(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: ZC,
          previousItem: null,
          nextItem: null
        }, qC(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: PC,
          previousItem: null,
          nextItem: null
        }, qC(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: sD,
          previousItem: null,
          nextItem: null
        }, qC(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: ED,
          previousItem: null,
          nextItem: null
        }, qC(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, wD || (this._colorProcessing = {
          process: hD,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: AD,
          previousItem: null,
          nextItem: null
        }, qC(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: iC,
          previousItem: null,
          nextItem: null
        }, qC(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: wC,
          previousItem: null,
          nextItem: null
        }, qC(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: tC,
          previousItem: null,
          nextItem: null
        }, qC(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = fD, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new kD.c(this._engine)
        }, this._customWrappers[0].effect = ID, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new BD.e, this.updateFunction = DD => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((DD => {
            this._noiseTextureData = DD
          })));
          const CD = DD === this._particles;
          for (let cD = 0; cD < DD.length; cD++) {
            const ID = DD[cD];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const pD = ID.age;
            if (ID.age += this._tempScaledUpdateSpeed, ID.age > ID.lifeTime) {
              const DD = ID.age - pD,
                CD = ID.lifeTime - pD;
              this._tempScaledUpdateSpeed = CD * this._tempScaledUpdateSpeed / DD, ID.age = ID.lifeTime
            }
            this._ratio = ID.age / ID.lifeTime, ID._properties.directionScale = this._tempScaledUpdateSpeed;
            let iD = this._updateQueueStart;
            for (; iD;) iD.process(ID, this), iD = iD.nextItem;
            if (this._isAnimationSheetEnabled && !wD && ID.updateCellIndex(), ID._inheritParticleInfoToSubEmitters(), ID.age >= ID.lifeTime) {
              if (this._emitFromParticle(ID), ID._properties.attachedSubEmitters) {
                for (const DD of ID._properties.attachedSubEmitters) DD.particleSystem.disposeOnStop = !0, DD.particleSystem.stop();
                ID._properties.attachedSubEmitters = null
              }
              this.recycleParticle(ID), CD && cD--
            } else;
          }
        }
      }
      serialize(DD) {
        throw new Error("Method not implemented.")
      }
      clone(DD, CD) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = mC : this._lifeTimeCreation.process = nC
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: vC,
          previousItem: null,
          nextItem: null
        }, qC(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (JC(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(DD) {
        this.targetStopDuration !== DD && (this._targetStopDuration = DD, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(DD, CD, cD) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, DD, CD, cD), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(DD) {
        return this._removeFactorGradient(this._lifeTimeGradients, DD), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(DD, CD, cD) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = oC, this._sizeGradientProcessing = {
          process: NC,
          previousItem: null,
          nextItem: null
        }, xC(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, DD, CD, cD), this
      }
      removeSizeGradient(DD) {
        return this._removeFactorGradient(this._sizeGradients, DD), 0 === this._sizeGradients?.length && (JC(this._sizeGradientProcessing), this._sizeCreation.process = ZC), this
      }
      addColorRemapGradient(DD, CD, cD) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, DD, CD, cD), this
      }
      removeColorRemapGradient(DD) {
        return this._removeFactorGradient(this._colorRemapGradients, DD), this
      }
      addAlphaRemapGradient(DD, CD, cD) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, DD, CD, cD), this
      }
      removeAlphaRemapGradient(DD) {
        return this._removeFactorGradient(this._alphaRemapGradients, DD), this
      }
      addAngularSpeedGradient(DD, CD, cD) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = HC, this._angularSpeedGradientProcessing = {
          process: rD,
          previousItem: null,
          nextItem: null
        }, xC(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, DD, CD, cD), this
      }
      removeAngularSpeedGradient(DD) {
        return this._removeFactorGradient(this._angularSpeedGradients, DD), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = PC, JC(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(DD, CD, cD) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: CC,
          previousItem: null,
          nextItem: null
        }, qC(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: IC,
          previousItem: null,
          nextItem: null
        }, xC(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, DD, CD, cD), this
      }
      removeVelocityGradient(DD) {
        return this._removeFactorGradient(this._velocityGradients, DD), 0 === this._velocityGradients?.length && (JC(this._velocityCreation), JC(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(DD, CD, cD) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: cC,
          previousItem: null,
          nextItem: null
        }, qC(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: pC,
          previousItem: null,
          nextItem: null
        }, qC(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, DD, CD, cD), this
      }
      removeLimitVelocityGradient(DD) {
        return this._removeFactorGradient(this._limitVelocityGradients, DD), 0 === this._limitVelocityGradients?.length && (JC(this._limitVelocityCreation), JC(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(DD, CD, cD) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: SC,
          previousItem: null,
          nextItem: null
        }, xC(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: BC,
          previousItem: null,
          nextItem: null
        }, xC(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, DD, CD, cD), this
      }
      removeDragGradient(DD) {
        return this._removeFactorGradient(this._dragGradients, DD), 0 === this._dragGradients?.length && (JC(this._dragCreation), JC(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(DD, CD, cD) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, DD, CD, cD), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(DD) {
        return this._removeFactorGradient(this._startSizeGradients, DD), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const DD = new Uint8Array(4 * this._rawTextureWidth),
          CD = SD.j.Color3[0];
        for (let cD = 0; cD < this._rawTextureWidth; cD++) {
          const pD = cD / this._rawTextureWidth;
          ID.k.GetCurrentGradient(pD, this._rampGradients, ((ID, pD, iD) => {
            SD.d.LerpToRef(ID.color, pD.color, iD, CD), DD[4 * cD] = 255 * CD.r, DD[4 * cD + 1] = 255 * CD.g, DD[4 * cD + 2] = 255 * CD.b, DD[4 * cD + 3] = 255
          }))
        }
        this._rampGradientsTexture = bD.e.CreateRGBATexture(DD, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((DD, CD) => DD.gradient < CD.gradient ? -1 : DD.gradient > CD.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(DD, CD) {
        this._rampGradients || (this._rampGradients = []);
        const cD = new ID.g(DD, CD);
        return this._rampGradients.push(cD), this._syncRampGradientTexture(), this
      }
      removeRampGradient(DD) {
        return this._removeGradientAndTexture(DD, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(DD, CD, cD) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = eD, this._colorProcessing.process = uD);
        const pD = new ID.e(DD, CD, cD);
        return this._colorGradients.push(pD), this._colorGradients.sort(((DD, CD) => DD.gradient < CD.gradient ? -1 : DD.gradient > CD.gradient ? 1 : 0)), this
      }
      removeColorGradient(DD) {
        if (!this._colorGradients) return this;
        let CD = 0;
        for (const cD of this._colorGradients) {
          if (cD.gradient === DD) {
            this._colorGradients.splice(CD, 1);
            break
          }
          CD++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = sD, this._colorProcessing.process = hD), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const DD of this._drawWrappers)
            if (DD)
              for (const CD of DD) CD?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(DD, CD, cD, ID, pD) {
        return pD[4 * (((DD = .5 * Math.abs(DD) + .5) * cD % cD | 0) + ((CD = .5 * Math.abs(CD) + .5) * ID % ID | 0) * cD)] / 255
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
          CD = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * CD), this._vertexBuffer = new fD.c(DD, this._vertexData, !0, CD);
        let cD = 0;
        const ID = this._vertexBuffer.createVertexBuffer(fD.k.PositionKind, cD, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[fD.k.PositionKind] = ID, cD += 3;
        const pD = this._vertexBuffer.createVertexBuffer(fD.k.ColorKind, cD, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[fD.k.ColorKind] = pD, cD += 4;
        const iD = this._vertexBuffer.createVertexBuffer("angle", cD, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = iD, cD += 1;
        const bD = this._vertexBuffer.createVertexBuffer("size", cD, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = bD, cD += 2, this._isAnimationSheetEnabled) {
          const DD = this._vertexBuffer.createVertexBuffer("cellIndex", cD, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = DD, cD += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const DD = this._vertexBuffer.createVertexBuffer("direction", cD, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = DD, cD += 3
        }
        if (this._useRampGradients) {
          const DD = this._vertexBuffer.createVertexBuffer("remapData", cD, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = DD, cD += 4
        }
        let QD;
        if (this._useInstancing) {
          const CD = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new fD.c(DD, CD, !1, 2), QD = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else QD = this._vertexBuffer.createVertexBuffer("offset", cD, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = QD, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const DD = [],
          CD = [];
        let cD = 0;
        for (let ID = 0; ID < this._capacity; ID++) DD.push(cD), DD.push(cD + 1), DD.push(cD + 2), DD.push(cD), DD.push(cD + 2), DD.push(cD + 3), CD.push(cD, cD + 1, cD + 1, cD + 2, cD + 2, cD + 3, cD + 3, cD, cD, cD + 3), cD += 4;
        this._indexBuffer = this._engine.createIndexBuffer(DD), this._linesIndexBuffer = this._engine.createIndexBuffer(CD)
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
              for (let CD = 0; CD < this.preWarmCycles; CD++) this.animate(!0), DD.render()
            }))
          }));
          else
            for (let CD = 0; CD < this.preWarmCycles; CD++) this.animate(!0)
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
      _appendParticleVertex(DD, CD, cD, ID) {
        let pD = DD * this._vertexBufferSize;
        const fD = iD.l.cZ[0].YCD(this._scene?.floatingOriginOffset || iD.p.ZeroReadOnly);
        if (this._vertexData[pD++] = CD.position.x + this.worldOffset.x - fD.x, this._vertexData[pD++] = CD.position.y + this.worldOffset.y - fD.y, this._vertexData[pD++] = CD.position.z + this.worldOffset.z - fD.z, this._vertexData[pD++] = CD.color.r, this._vertexData[pD++] = CD.color.g, this._vertexData[pD++] = CD.color.b, this._vertexData[pD++] = CD.color.a, this._vertexData[pD++] = CD.angle, this._vertexData[pD++] = CD.scale.x * CD.size, this._vertexData[pD++] = CD.scale.y * CD.size, this._isAnimationSheetEnabled && (this._vertexData[pD++] = CD.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[pD++] = CD.direction.x, this._vertexData[pD++] = CD.direction.y, this._vertexData[pD++] = CD.direction.z);
        else if (CD._properties.initialDirection) {
          let DD = CD._properties.initialDirection;
          this.isLocal && (iD.p.TransformNormalToRef(DD, this._emitterWorldMatrix, iD.l.cZ[0]), DD = iD.l.cZ[0]), 0 === DD.x && 0 === DD.z && (DD.x = .001), this._vertexData[pD++] = DD.x, this._vertexData[pD++] = DD.y, this._vertexData[pD++] = DD.z
        } else {
          let DD = CD.direction;
          this.isLocal && (iD.p.TransformNormalToRef(DD, this._emitterWorldMatrix, iD.l.cZ[0]), DD = iD.l.cZ[0]), 0 === DD.x && 0 === DD.z && (DD.x = .001), this._vertexData[pD++] = DD.x, this._vertexData[pD++] = DD.y, this._vertexData[pD++] = DD.z
        }
        this._useRampGradients && CD.remapData && (this._vertexData[pD++] = CD.remapData.x, this._vertexData[pD++] = CD.remapData.y, this._vertexData[pD++] = CD.remapData.z, this._vertexData[pD++] = CD.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === cD ? cD = this._epsilon : 1 === cD && (cD = 1 - this._epsilon), 0 === ID ? ID = this._epsilon : 1 === ID && (ID = 1 - this._epsilon)), this._vertexData[pD++] = cD, this._vertexData[pD] = ID)
      }
      _prepareParticle(DD) {}
      _createNewOnes(DD) {
        let CD;
        for (let cD = 0; cD < DD && this._particles.length !== this._capacity; cD++) {
          CD = this._createParticle(), this._particles.push(CD);
          let DD = this._createQueueStart;
          for (; DD;) DD.process(CD, this), DD = DD.nextItem;
          CD._inheritParticleInfoToSubEmitters()
        }
      }
      _update(DD) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const DD = this.emitter;
          this._emitterWorldMatrix = DD.getWorldMatrix()
        } else {
          const DD = this.emitter;
          this._emitterWorldMatrix = iD.d.Translation(DD.x, DD.y, DD.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(DD)
      }
      static _GetAttributeNamesOrOptions() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = [fD.k.PositionKind, fD.k.ColorKind, "angle", "offset", "size"];
        return DD && ID.push("cellIndex"), CD || ID.push("direction"), cD && ID.push("remapData"), ID
      }
      static _GetEffectCreationOptions() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, dD.e)(ID), DD && ID.push("particlesInfos"), CD && ID.push("logarithmicDepthConstant"), cD && (ID.push("vFogInfos"), ID.push("vFogColor")), ID
      }
      fillDefines(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, dD.o)(this, this._scene, DD), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && DD.push("#define FOG")), this._isAnimationSheetEnabled && DD.push("#define ANIMATESHEET"), this.useLogarithmicDepth && DD.push("#define LOGARITHMICDEPTH"), CD === nD.BLENDMODE_MULTIPLY && DD.push("#define BLENDMULTIPLYMODE"), this.isLocal && DD.push("#define LOCAL"), this._useRampGradients && DD.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (DD.push("#define BILLBOARD"), this.billboardMode) {
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
        cD && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), DD.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(DD, CD, cD) {
        CD.push(...aC._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), DD.push(...aC._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), cD.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, WD.f)(DD, this._imageProcessingConfigurationDefines), (0, WD.c)(cD, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(DD) {
        var CD;
        const cD = this._getCustomDrawWrapper(DD);
        if (cD?.effect) return cD;
        const ID = [];
        this.fillDefines(ID, DD);
        const iD = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          fD = KC.d._PrepareStringDefines(iD, ID),
          bD = fD ? KC.d.GetConfiguration(iD) : void 0;
        let QD = this._drawWrappers[iD];
        QD || (QD = this._drawWrappers[iD] = [], 0 === iD || this._renderPassObserver || (this._renderPassObserver = ((CD = this._engine)._onReleaseRenderPassObservable ?? (CD._onReleaseRenderPassObservable = new pD.c)).add((DD => {
          const CD = this._drawWrappers[DD];
          if (CD) {
            for (const DD of CD) DD?.dispose();
            delete this._drawWrappers[DD]
          }
        }))));
        let wD = QD[DD];
        wD || (wD = new kD.c(this._engine), wD.drawContext && (wD.drawContext.useInstancing = this._useInstancing), QD[DD] = wD);
        const SD = ID.join("\n");
        if (wD.defines !== SD) {
          const DD = [],
            CD = [],
            cD = [];
          this.fillUniformsAttributesAndSamplerNames(CD, DD, cD), fD && (CD.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== bD?.defines.PREPASS_LOCAL_POSITION_INDEX && CD.push("inverseEmitterWM", "geometryWorldOffset")), wD.setEffect(this._engine.createEffect("particles", {
            attributes: DD,
            uniformsNames: CD,
            samplers: cD,
            defines: SD,
            shaderLanguage: this._shaderLanguage,
            multiTarget: fD,
            indexParameters: fD ? {
              buffersCount: bD?._mrtCount ?? 0
            } : void 0
          }, this._engine), SD)
        }
        return wD
      }
      _bindGeometryRendering(DD) {
        const CD = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          cD = KC.d.GetConfiguration(CD);
        if (!cD?._defines) return;
        DD.setFloat("objectId", 0), DD.setInt("meshBlendTag", 0);
        const ID = this._scene?.activeCamera;
        if (DD.setFloat2("cameraInfo", ID?.minZ ?? 0, ID?.maxZ ?? 1), this.isLocal && void 0 !== cD.defines.PREPASS_LOCAL_POSITION_INDEX) {
          DD.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const CD = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || iD.p.ZeroReadOnly, iD.l.cZ[0]);
          DD.setVector3("geometryWorldOffset", CD)
        }
      }
      animate() {
        let DD, CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!CD && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (CD ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) DD = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const CD = this._calculateEmitRate();
            DD = CD * this._scaledUpdateSpeed | 0, this._newPartsExcess += CD * this._scaledUpdateSpeed - DD
          }
          if (this._newPartsExcess > 1 && (DD += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? DD = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(DD), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !CD) {
            let DD = 0;
            for (let CD = 0; CD < this._particles.length; CD++) {
              const cD = this._particles[CD];
              this._appendParticleVertices(DD, cD), DD += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const DD = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  CD = this._particles.length;
                CD < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, CD * DD, this._fixedCapacityHighWaterMark * DD), this._fixedCapacityHighWaterMark = CD, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const CD = this._actualFrame / this.targetStopDuration;
          ID.k.GetCurrentGradient(CD, this._emitRateGradients, ((CD, cD, ID) => {
            CD !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = cD.getFactor(), this._currentEmitRateGradient = CD), DD = (0, MD.Lerp)(this._currentEmitRate1, this._currentEmitRate2, ID)
          }))
        }
        return DD
      }
      _appendParticleVertices(DD, CD) {
        this._appendParticleVertex(DD++, CD, 0, 0), this._useInstancing || (this._appendParticleVertex(DD++, CD, 1, 0), this._appendParticleVertex(DD++, CD, 1, 1), this._appendParticleVertex(DD, CD, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !aC.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([cD.e(336).then((() => cD(60426))), cD.e(330).then((() => cD(60431)))])) : await Promise.all([cD.e(319).then((() => cD(60438))), Promise.all([cD.e(312), cD.e(348)]).then((() => cD(60442)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== nD.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(nD.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(nD.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(DD) {
        const CD = this._getWrapper(DD),
          cD = CD.effect,
          ID = this._engine;
        ID.enableEffect(CD);
        const pD = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        cD.setTexture("diffuseSampler", this.particleTexture), cD.setMatrix("view", pD);
        const fD = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (cD.setMatrix("projection", fD), this._isAnimationSheetEnabled && this.particleTexture) {
          const DD = this.particleTexture.getBaseSize();
          cD.setFloat3("particlesInfos", this.spriteCellWidth / DD.width, this.spriteCellHeight / DD.height, this.spriteCellWidth / DD.width)
        }
        if (cD.setVector2("translationPivot", this.translationPivot), cD.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const DD = this._scene.activeCamera;
          cD.setVector3("eyePosition", DD.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), cD.setTexture("rampSampler", this._rampGradientsTexture));
        const bD = cD.defines;
        this._scene && ((0, dD.i)(cD, this, this._scene), this.applyFog && (0, YD.h)(this._scene, void 0, cD)), bD.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (pD.invertToRef(iD.l.Matrix[0]), cD.setMatrix("invView", iD.l.Matrix[0])), cD._multiTarget && this._bindGeometryRendering(cD), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? ID.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, cD) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, cD)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? ID.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, cD) : ID.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, cD), this.useLogarithmicDepth && this._scene && (0, YD.u)(bD, cD, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(cD), this._setEngineBasedOnBlendMode(DD), cD._multiTarget && KC.d._BindZeroAlphaDiscard(ID, cD);
        let QD = !1;
        try {
          KC.d._BindAttachmentsForEffect(ID, cD) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(cD), this._useInstancing ? this._scene?.forceWireframe ? ID.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : ID.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? ID.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : ID.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), QD = !0)
        } finally {
          KC.d._RestoreAttachments(ID)
        }
        return QD ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const DD = this._engine;
        let CD;
        return DD.setState && (DD.setState(!1), this.forceDepthWrite && DD.setDepthWrite(!0)), CD = this.blendMode === nD.BLENDMODE_MULTIPLYADD ? this._render(nD.BLENDMODE_MULTIPLY) + this._render(nD.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), CD
      }
      _onDispose() {}
      dispose() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), DD && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), DD && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(CD, cD), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const DD = this._scene.iH.indexOf(this);
          DD > -1 && this._scene.iH.splice(DD, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Aq.notifyObservers(this), this.Aq.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    aC.ForceGLSL = !1;
    var VC, zC = cD(36488);
    ! function(DD) {
      DD[DD.ATTACHED = 0] = "ATTACHED", DD[DD.END = 1] = "END"
    }(VC || (VC = {}));
    class jC {
      constructor(DD) {
        if (this.particleSystem = DD, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !DD.emitter || !DD.emitter.dispose) {
          const CD = (0, zC.b)("BABYLON.AbstractMesh");
          DD.emitter = new CD("SubemitterSystemEmitter", DD.hq()), DD._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let DD = this.particleSystem.emitter;
        if (DD) {
          if (DD instanceof iD.p) DD = DD.clone();
          else if (-1 !== DD.getClassName().indexOf("Mesh")) {
            DD = new((0, zC.b)("BABYLON.Mesh"))("", DD.hq()), DD.isVisible = !1
          }
        } else DD = new iD.p;
        const CD = new jC(this.particleSystem.clone(this.particleSystem.name, DD));
        return CD.particleSystem.name += "Clone", CD.type = this.type, CD.inheritDirection = this.inheritDirection, CD.inheritedVelocityAmount = this.inheritedVelocityAmount, CD.particleSystem._disposeEmitterOnDispose = !0, CD.particleSystem.disposeOnStop = !0, CD
      }
      serialize() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = {};
        return CD.type = this.type, CD.inheritDirection = this.inheritDirection, CD.inheritedVelocityAmount = this.inheritedVelocityAmount, CD.particleSystem = this.particleSystem.serialize(DD), CD
      }
      static _ParseParticleSystem(DD, CD, cD) {
        throw (0, lD.m)("ParseParticle")
      }
      static Parse(DD, CD, cD) {
        const ID = DD.particleSystem,
          pD = new jC(jC._ParseParticleSystem(ID, CD, cD, !0));
        return pD.type = DD.type, pD.inheritDirection = DD.inheritDirection, pD.inheritedVelocityAmount = DD.inheritedVelocityAmount, pD.particleSystem._isSubEmitter = !0, pD
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var lC = cD(39046),
      LC = cD(39174);
    const TC = () => {};
    class GC {
      constructor() {
        this.particlePositionGenerator = TC, this.particleDestinationGenerator = TC, this.particleDirectionGenerator = TC
      }
      startDirectionFunction(DD, CD, cD, ID) {
        const pD = iD.l.cZ[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== TC) this.particleDirectionGenerator(-1, cD, pD);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== TC) {
          this.particleDestinationGenerator(-1, cD, pD);
          const DD = iD.l.cZ[1];
          pD.subtractToRef(cD.position, DD), DD.scaleToRef(1 / cD.lifeTime, pD)
        } else pD.set(0, 0, 0);
        ID ? CD.YCD(pD) : iD.p.TransformNormalToRef(pD, DD, CD)
      }
      startPositionFunction(DD, CD, cD, ID) {
        const pD = iD.l.cZ[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== TC ? this.particlePositionGenerator(-1, cD, pD) : pD.set(0, 0, 0), ID ? CD.YCD(pD) : iD.p.TransformCoordinatesToRef(pD, DD, CD)
      }
      clone() {
        const DD = new GC;
        return yD.e.DeepCopy(this, DD), DD
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
    const RC = iD.p.Zero(),
      kC = iD.p.Zero(),
      dC = iD.p.Zero();
    class YC {
      constructor() {
        this.strength = 0, this.position = iD.p.Zero()
      }
      _processParticle(DD, CD) {
        this.position.subtractToRef(DD.position, RC);
        const cD = RC.lengthSquared() + 1;
        RC.normalize().scaleToRef(this.strength / cD, kC), kC.scaleToRef(CD._tempScaledUpdateSpeed, dC), DD.direction.addInPlace(dC)
      }
      serialize() {
        return {
          position: this.position.XcD(),
          strength: this.strength
        }
      }
    }
    const WC = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class sC extends aC {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = DD => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const CD = Math.floor(Math.random() * this._subEmitters.length);
          for (const cD of this._subEmitters[CD])
            if (1 === cD.type) {
              const CD = cD.clone();
              DD._inheritParticleInfoToSubEmitter(CD), CD.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(CD.particleSystem), CD.particleSystem.start()
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
        this._flowMap !== DD && (this._flowMap = DD, this._flowMapUpdate && (JC(this._flowMapUpdate), this._flowMapUpdate = null), DD && (this._flowMapUpdate = {
          process: DD => {
            const CD = this.hq()?.getTransformMatrix();
            this._flowMap._processParticle(DD, this.flowMapStrength * this._tempScaledUpdateSpeed, CD)
          },
          previousItem: null,
          nextItem: null
        }, qC(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(DD) {
        super.addAttractor(DD), 1 === this._attractors.length && (this._attractorUpdate = {
          process: DD => {
            for (const CD of this._attractors) CD._processParticle(DD, this)
          },
          previousItem: null,
          nextItem: null
        }, qC(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(DD) {
        super.removeAttractor(DD), 0 === this._attractors.length && this._attractorUpdate && JC(this._attractorUpdate)
      }
      start() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(DD)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const DD of this.subEmitters) DD instanceof sC ? this._subEmitters.push([new jC(DD)]) : DD instanceof jC ? this._subEmitters.push([DD]) : DD instanceof Array && this._subEmitters.push(DD)
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
          const CD = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          DD._properties.attachedSubEmitters = [];
          for (const cD of CD)
            if (0 === cD.type) {
              const CD = cD.clone();
              DD._properties.attachedSubEmitters.push(CD), CD.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), DD && this.particles)
          for (const cD of this.particles)
            if (cD._properties.attachedSubEmitters)
              for (let DD = cD._properties.attachedSubEmitters.length - 1; DD >= 0; DD -= 1) cD._properties.attachedSubEmitters[DD].dispose();
        if (CD && this.activeSubSystems)
          for (let cD = this.activeSubSystems.length - 1; cD >= 0; cD -= 1) this.activeSubSystems[cD].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let DD = 0; DD < this._subEmitters.length; DD++)
            for (const CD of this._subEmitters[DD]) CD.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(DD, CD, cD, ID) {
        let pD;
        pD = cD instanceof lC.e ? null : cD;
        const fD = (0, zC.b)("BABYLON.Texture");
        if (fD && pD)
          if (DD.texture) CD.particleTexture = fD.Parse(DD.texture, pD, ID);
          else if (DD.textureName) {
          const cD = DD.textureSettings;
          if (CD.particleTexture = new fD(ID + DD.textureName, pD, !1, void 0 === DD.invertY || DD.invertY, cD ? cD.samplingMode : void 0), CD.particleTexture.name = DD.textureName, cD) {
            const DD = CD.particleTexture;
            for (const CD of WC) void 0 !== cD[CD] && (DD[CD] = cD[CD])
          }
        }
        if (DD.emitterId || 0 === DD.emitterId || void 0 !== DD.emitter ? (DD.emitterId || 0 === DD.emitterId) && pD ? (CD.emitter = pD.getLastMeshById(DD.emitterId), CD.emitter || (CD.emitter = iD.p.Zero())) : CD.emitter = iD.p.FromArray(DD.emitter) : CD.emitter = iD.p.Zero(), CD.isLocal = !!DD.isLocal, void 0 !== DD.renderingGroupId && (CD.renderingGroupId = DD.renderingGroupId), void 0 !== DD.isBillboardBased && (CD.isBillboardBased = DD.isBillboardBased), void 0 !== DD.billboardMode && (CD.billboardMode = DD.billboardMode), void 0 !== DD.useLogarithmicDepth && (CD.useLogarithmicDepth = DD.useLogarithmicDepth), DD.animations) {
          for (let cD = 0; cD < DD.animations.length; cD++) {
            const ID = DD.animations[cD],
              pD = (0, zC.b)("BABYLON.Animation");
            pD && CD.animations.push(pD.Parse(ID))
          }
          CD.beginAnimationOnStart = DD.beginAnimationOnStart, CD.beginAnimationFrom = DD.beginAnimationFrom, CD.beginAnimationTo = DD.beginAnimationTo, CD.beginAnimationLoop = DD.beginAnimationLoop
        }
        if (DD.autoAnimate && pD && pD.beginAnimation(CD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), CD.startDelay = 0 | DD.startDelay, CD.minAngularSpeed = DD.minAngularSpeed, CD.maxAngularSpeed = DD.maxAngularSpeed, CD.minSize = DD.minSize, CD.maxSize = DD.maxSize, DD.minScaleX && (CD.minScaleX = DD.minScaleX, CD.maxScaleX = DD.maxScaleX, CD.minScaleY = DD.minScaleY, CD.maxScaleY = DD.maxScaleY), void 0 !== DD.preWarmCycles && (CD.preWarmCycles = DD.preWarmCycles, CD.preWarmStepOffset = DD.preWarmStepOffset), void 0 !== DD.minInitialRotation && (CD.minInitialRotation = DD.minInitialRotation, CD.maxInitialRotation = DD.maxInitialRotation), CD.minLifeTime = DD.minLifeTime, CD.maxLifeTime = DD.maxLifeTime, CD.minEmitPower = DD.minEmitPower, CD.maxEmitPower = DD.maxEmitPower, CD.emitRate = DD.emitRate, CD.gravity = iD.p.FromArray(DD.gravity), DD.noiseStrength && (CD.noiseStrength = iD.p.FromArray(DD.noiseStrength)), CD.color1 = SD.e.FromArray(DD.color1), CD.color2 = SD.e.FromArray(DD.color2), CD.colorDead = SD.e.FromArray(DD.colorDead), CD.updateSpeed = DD.updateSpeed, CD.targetStopDuration = DD.targetStopDuration, CD.blendMode = DD.blendMode, DD.colorGradients)
          for (const iD of DD.colorGradients) CD.addColorGradient(iD.gradient, SD.e.FromArray(iD.color1), iD.color2 ? SD.e.FromArray(iD.color2) : void 0);
        if (DD.rampGradients) {
          for (const cD of DD.rampGradients) CD.addRampGradient(cD.gradient, SD.d.FromArray(cD.color));
          CD.useRampGradients = DD.useRampGradients
        }
        if (DD.colorRemapGradients)
          for (const iD of DD.colorRemapGradients) CD.addColorRemapGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.alphaRemapGradients)
          for (const iD of DD.alphaRemapGradients) CD.addAlphaRemapGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.sizeGradients)
          for (const iD of DD.sizeGradients) CD.addSizeGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.angularSpeedGradients)
          for (const iD of DD.angularSpeedGradients) CD.addAngularSpeedGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.velocityGradients)
          for (const iD of DD.velocityGradients) CD.addVelocityGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.dragGradients)
          for (const iD of DD.dragGradients) CD.addDragGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.emitRateGradients)
          for (const iD of DD.emitRateGradients) CD.addEmitRateGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.startSizeGradients)
          for (const iD of DD.startSizeGradients) CD.addStartSizeGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.lifeTimeGradients)
          for (const iD of DD.lifeTimeGradients) CD.addLifeTimeGradient(iD.gradient, void 0 !== iD.factor1 ? iD.factor1 : iD.factor, iD.factor2);
        if (DD.limitVelocityGradients) {
          for (const cD of DD.limitVelocityGradients) CD.addLimitVelocityGradient(cD.gradient, void 0 !== cD.factor1 ? cD.factor1 : cD.factor, cD.factor2);
          CD.limitVelocityDamping = DD.limitVelocityDamping
        }
        if (DD.noiseTexture && pD) {
          const cD = (0, zC.b)("BABYLON.ProceduralTexture");
          CD.noiseTexture = cD.Parse(DD.noiseTexture, pD, ID)
        }
        let bD;
        if (DD.particleEmitterType) {
          switch (DD.particleEmitterType.type) {
            case "SphereParticleEmitter":
              bD = new oD;
              break;
            case "SphereDirectedParticleEmitter":
              bD = new vD;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              bD = new gD;
              break;
            case "ConeDirectedParticleEmitter":
              bD = new XD;
              break;
            case "CylinderParticleEmitter":
              bD = new ND.g;
              break;
            case "CylinderDirectedParticleEmitter":
              bD = new ND.e;
              break;
            case "HemisphericParticleEmitter":
              bD = new ZD;
              break;
            case "PointParticleEmitter":
              bD = new tD;
              break;
            case "MeshParticleEmitter":
              bD = new mD;
              break;
            case "CustomParticleEmitter":
              bD = new GC;
              break;
            default:
              bD = new BD.e
          }
          bD.parse(DD.particleEmitterType, pD)
        } else bD = new BD.e, bD.parse(DD, pD);
        CD.particleEmitterType = bD, CD.startSpriteCellID = DD.startSpriteCellID, CD.endSpriteCellID = DD.endSpriteCellID, CD.spriteCellLoop = DD.spriteCellLoop ?? !0, CD.spriteCellWidth = DD.spriteCellWidth, CD.spriteCellHeight = DD.spriteCellHeight, CD.spriteCellChangeSpeed = DD.spriteCellChangeSpeed, CD.spriteRandomStartCell = DD.spriteRandomStartCell, CD.disposeOnStop = DD.disposeOnStop ?? !1, CD.manualEmitCount = DD.manualEmitCount ?? -1
      }
      static Parse(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pD = arguments.length > 4 ? arguments[4] : void 0;
        const fD = DD.name;
        let bD, QD, wD = null,
          BD = null;
        if (CD instanceof lC.e ? bD = CD : (QD = CD, bD = QD.DZ()), DD.customShader && (0, lD.d)(bD.createEffectForParticles)) {
          BD = DD.customShader;
          const CD = BD.shaderOptions.defines.length > 0 ? BD.shaderOptions.defines.join("\n") : "";
          wD = bD.createEffectForParticles(BD.shaderPath.fragmentElement, BD.shaderOptions.uniforms, BD.shaderOptions.samplers, CD)
        }
        const yD = new sC(fD, pD || DD.LB, CD, wD, DD.isAnimationSheetEnabled);
        if (yD.customShader = BD, yD._rootUrl = cD, DD.id && (yD.id = DD.id), DD.subEmitters) {
          yD.subEmitters = [];
          for (const ID of DD.subEmitters) {
            const DD = [];
            for (const pD of ID) DD.push(jC.Parse(pD, CD, cD));
            yD.subEmitters.push(DD)
          }
        }
        if (DD.attractors)
          for (const SD of DD.attractors) {
            const DD = new YC;
            DD.position = iD.p.FromArray(SD.position), DD.strength = SD.strength, yD.addAttractor(DD)
          }
        return sC._Parse(DD, yD, CD, cD), DD.textureMask && (yD.textureMask = SD.e.FromArray(DD.textureMask)), DD.worldOffset && (yD.worldOffset = iD.p.FromArray(DD.worldOffset)), DD.preventAutoStart && (yD.preventAutoStart = DD.preventAutoStart), DD.metadata && (yD.metadata = DD.metadata), ID || yD.preventAutoStart || yD.start(), yD
      }
      serialize() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = {};
        if (sC._Serialize(CD, this, DD), CD.textureMask = this.textureMask.XcD(), CD.customShader = this.customShader, CD.preventAutoStart = this.preventAutoStart, CD.worldOffset = this.worldOffset.XcD(), this.metadata && (CD.metadata = this.metadata), this.subEmitters) {
          CD.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const cD of this._subEmitters) {
            const ID = [];
            for (const CD of cD) CD.particleSystem.doNotSerialize || ID.push(CD.serialize(DD));
            CD.subEmitters.push(ID)
          }
        }
        if (this._attractors && this._attractors.length) {
          CD.attractors = [];
          for (const DD of this._attractors) CD.attractors.push(DD.serialize())
        }
        return CD
      }
      static _Serialize(DD, CD, cD) {
        if (DD.name = CD.name, DD.id = CD.id, DD.LB = CD.getCapacity(), DD.disposeOnStop = CD.disposeOnStop, DD.manualEmitCount = CD.manualEmitCount, CD.emitter.position) {
          const cD = CD.emitter;
          DD.emitterId = cD.id
        } else {
          const cD = CD.emitter;
          DD.emitter = cD.XcD()
        }
        if (CD.particleEmitterType && (DD.particleEmitterType = CD.particleEmitterType.serialize()), CD.particleTexture)
          if (cD) DD.texture = CD.particleTexture.serialize();
          else {
            const cD = CD.particleTexture;
            DD.textureName = CD.particleTexture.name, DD.invertY = !!cD._invertY;
            const ID = {};
            for (const DD of WC) ID[DD] = cD[DD];
            ID.samplingMode = cD.samplingMode, DD.textureSettings = ID
          } DD.isLocal = CD.isLocal, LC.d.AppendSerializedAnimations(CD, DD), DD.beginAnimationOnStart = CD.beginAnimationOnStart, DD.beginAnimationFrom = CD.beginAnimationFrom, DD.beginAnimationTo = CD.beginAnimationTo, DD.beginAnimationLoop = CD.beginAnimationLoop, DD.startDelay = CD.startDelay, DD.renderingGroupId = CD.renderingGroupId, DD.isBillboardBased = CD.isBillboardBased, DD.billboardMode = CD.billboardMode, DD.minAngularSpeed = CD.minAngularSpeed, DD.maxAngularSpeed = CD.maxAngularSpeed, DD.minSize = CD.minSize, DD.maxSize = CD.maxSize, DD.minScaleX = CD.minScaleX, DD.maxScaleX = CD.maxScaleX, DD.minScaleY = CD.minScaleY, DD.maxScaleY = CD.maxScaleY, DD.minEmitPower = CD.minEmitPower, DD.maxEmitPower = CD.maxEmitPower, DD.minLifeTime = CD.minLifeTime, DD.maxLifeTime = CD.maxLifeTime, DD.emitRate = CD.emitRate, DD.gravity = CD.gravity.XcD(), DD.noiseStrength = CD.noiseStrength.XcD(), DD.color1 = CD.color1.XcD(), DD.color2 = CD.color2.XcD(), DD.colorDead = CD.colorDead.XcD(), DD.updateSpeed = CD.updateSpeed, DD.targetStopDuration = CD.targetStopDuration, DD.blendMode = CD.blendMode, DD.preWarmCycles = CD.preWarmCycles, DD.preWarmStepOffset = CD.preWarmStepOffset, DD.minInitialRotation = CD.minInitialRotation, DD.maxInitialRotation = CD.maxInitialRotation, DD.startSpriteCellID = CD.startSpriteCellID, DD.spriteCellLoop = CD.spriteCellLoop, DD.endSpriteCellID = CD.endSpriteCellID, DD.spriteCellChangeSpeed = CD.spriteCellChangeSpeed, DD.spriteCellWidth = CD.spriteCellWidth, DD.spriteCellHeight = CD.spriteCellHeight, DD.spriteRandomStartCell = CD.spriteRandomStartCell, DD.isAnimationSheetEnabled = CD.isAnimationSheetEnabled, DD.useLogarithmicDepth = CD.useLogarithmicDepth;
        const ID = CD.getColorGradients();
        if (ID) {
          DD.colorGradients = [];
          for (const CD of ID) {
            const cD = {
              gradient: CD.gradient,
              color1: CD.color1.XcD()
            };
            CD.color2 ? cD.color2 = CD.color2.XcD() : cD.color2 = CD.color1.XcD(), DD.colorGradients.push(cD)
          }
        }
        const pD = CD.getRampGradients();
        if (pD) {
          DD.rampGradients = [];
          for (const CD of pD) {
            const cD = {
              gradient: CD.gradient,
              color: CD.color.XcD()
            };
            DD.rampGradients.push(cD)
          }
          DD.useRampGradients = CD.useRampGradients
        }
        const iD = CD.getColorRemapGradients();
        if (iD) {
          DD.colorRemapGradients = [];
          for (const CD of iD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.colorRemapGradients.push(cD)
          }
        }
        const fD = CD.getAlphaRemapGradients();
        if (fD) {
          DD.alphaRemapGradients = [];
          for (const CD of fD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.alphaRemapGradients.push(cD)
          }
        }
        const bD = CD.getSizeGradients();
        if (bD) {
          DD.sizeGradients = [];
          for (const CD of bD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.sizeGradients.push(cD)
          }
        }
        const QD = CD.getAngularSpeedGradients();
        if (QD) {
          DD.angularSpeedGradients = [];
          for (const CD of QD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.angularSpeedGradients.push(cD)
          }
        }
        const wD = CD.getVelocityGradients();
        if (wD) {
          DD.velocityGradients = [];
          for (const CD of wD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.velocityGradients.push(cD)
          }
        }
        const SD = CD.getDragGradients();
        if (SD) {
          DD.dragGradients = [];
          for (const CD of SD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.dragGradients.push(cD)
          }
        }
        const BD = CD.getEmitRateGradients();
        if (BD) {
          DD.emitRateGradients = [];
          for (const CD of BD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.emitRateGradients.push(cD)
          }
        }
        const yD = CD.getStartSizeGradients();
        if (yD) {
          DD.startSizeGradients = [];
          for (const CD of yD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.startSizeGradients.push(cD)
          }
        }
        const MD = CD.getLifeTimeGradients();
        if (MD) {
          DD.lifeTimeGradients = [];
          for (const CD of MD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.lifeTimeGradients.push(cD)
          }
        }
        const tD = CD.getLimitVelocityGradients();
        if (tD) {
          DD.limitVelocityGradients = [];
          for (const CD of tD) {
            const cD = {
              gradient: CD.gradient,
              factor1: CD.factor1
            };
            void 0 !== CD.factor2 ? cD.factor2 = CD.factor2 : cD.factor2 = CD.factor1, DD.limitVelocityGradients.push(cD)
          }
          DD.limitVelocityDamping = CD.limitVelocityDamping
        }
        CD.noiseTexture && (DD.noiseTexture = CD.noiseTexture.serialize())
      }
      clone(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = {
          ...this._customWrappers
        };
        let pD = null;
        const iD = this._engine;
        if ((0, lD.d)(iD.createEffectForParticles) && null != this.customShader) {
          pD = this.customShader;
          const DD = pD.shaderOptions.defines.length > 0 ? pD.shaderOptions.defines.join("\n") : "",
            CD = iD.createEffectForParticles(pD.shaderPath.fragmentElement, pD.shaderOptions.uniforms, pD.shaderOptions.samplers, DD);
          ID[0] ? ID[0].effect = CD : this.setCustomEffect(CD, 0)
        }
        const fD = this.serialize(cD),
          bD = !1 === cD && this.particleTexture ? this.particleTexture.clone() : null;
        bD && (fD.textureName = void 0);
        const QD = sC.Parse(fD, this._scene || this._engine, this._rootUrl);
        return QD.name = DD, QD.customShader = pD, QD._customWrappers = ID, bD && (QD.particleTexture = bD), void 0 === CD && (CD = this.emitter), this.noiseTexture && (QD.noiseTexture = this.noiseTexture.clone()), QD.emitter = CD, this.preventAutoStart || QD.start(), QD
      }
    }
    sC.BILLBOARDMODE_Y = 2, sC.BILLBOARDMODE_ALL = 7, sC.BILLBOARDMODE_STRETCHED = 8, sC.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let EC = !1;
    EC || (EC = !0, jC._ParseParticleSystem = sC.Parse)
  },
  40712: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      SkyMaterial: () => gD,
      _MaxColorValueForRenderTarget: () => ND
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39174),
      fD = cD(36440),
      bD = cD(39412),
      QD = cD(39470),
      wD = cD(40662),
      SD = cD(40207),
      BD = cD(39231),
      yD = cD(36488),
      MD = cD(39503),
      tD = cD(39474),
      ZD = cD(39460),
      oD = cD(39458);
    class vD extends bD.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function ND(DD) {
      switch (DD) {
        case wD.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case wD.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let gD = (() => {
      var DD;
      let CD, bD, wD, yD, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD, KD = QD.b,
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [],
        kD = [],
        dD = [],
        YD = [],
        WD = [],
        sD = [],
        ED = [],
        eD = [],
        uD = [],
        hD = [],
        rD = [],
        AD = [],
        FD = [],
        DC = [],
        CC = [],
        cC = [],
        IC = [],
        pC = [],
        iC = [],
        fC = [],
        bC = [],
        QC = [];
      return DD = class extends KD {
        constructor(DD, CD) {
          super(DD, CD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, ID.m)(this, aD, 1), this.turbidity = ((0, ID.m)(this, VD), (0, ID.m)(this, zD, 10)), this.rayleigh = ((0, ID.m)(this, jD), (0, ID.m)(this, lD, 2)), this.mieCoefficient = ((0, ID.m)(this, LD), (0, ID.m)(this, TD, .005)), this.mieDirectionalG = ((0, ID.m)(this, GD), (0, ID.m)(this, RD, .8)), this.distance = ((0, ID.m)(this, kD), (0, ID.m)(this, dD, 500)), this.inclination = ((0, ID.m)(this, YD), (0, ID.m)(this, WD, .49)), this.azimuth = ((0, ID.m)(this, sD), (0, ID.m)(this, ED, .25)), this.sunPosition = ((0, ID.m)(this, eD), (0, ID.m)(this, uD, new fD.cZ(0, 100, 0))), this.useSunPosition = ((0, ID.m)(this, hD), (0, ID.m)(this, rD, !1)), this.cameraOffset = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, fD.cZ.Zero())), this.up = ((0, ID.m)(this, DC), (0, ID.m)(this, CC, fD.cZ.Up())), this.dithering = ((0, ID.m)(this, cC), (0, ID.m)(this, IC, !1)), this.rawHdrOutput = ((0, ID.m)(this, pC), (0, ID.m)(this, iC, !1)), this.cloudiness = ((0, ID.m)(this, fC), (0, ID.m)(this, bC, 0)), this._cameraPosition = ((0, ID.m)(this, QC), fD.cZ.Zero()), this._skyOrientation = new fD.Quaternion
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
        isReadyForSubMesh(CD, cD) {
          const ID = cD._drawWrapper;
          if (this.isFrozen && ID.effect && ID._wasPreviouslyReady) return !0;
          cD.materialDefines || (cD.materialDefines = new vD);
          const pD = cD.materialDefines,
            iD = this.hq();
          if (this._isReadyForSubMesh(cD)) return !0;
          if ((0, oD.gb)(CD, iD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, pD, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, oD.V)(CD, pD, !0, !1), pD.IMAGEPROCESSINGPOSTPROCESS !== iD.imageProcessingConfiguration.applyByPostProcess && pD.markAsMiscDirty(), pD.DITHER !== this.dithering && pD.markAsMiscDirty(), pD.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && pD.markAsMiscDirty(), pD.isDirty) {
            pD.markAsProcessed(), iD.resetCachedMaterial();
            const CD = new tD.b;
            pD.FOG && CD.addFallback(1, "FOG"), pD.IMAGEPROCESSINGPOSTPROCESS = iD.imageProcessingConfiguration.applyByPostProcess, pD.DITHER = this.dithering, pD.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const ID = [SD.e.PositionKind];
            pD.VERTEXCOLOR && ID.push(SD.e.ColorKind);
            const fD = "sky",
              bD = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, ZD.e)(bD);
            const QD = pD.toString();
            cD.setEffect(iD.DZ().createEffect(fD, {
              attributes: ID,
              uniformsNames: bD,
              uniformBuffersNames: [],
              samplers: [],
              defines: QD,
              fallbacks: CD,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, iD.DZ()), pD, this._materialContext)
          }
          return !(!cD.effect || !cD.effect.isReady()) && (pD._renderId = iD.getRenderId(), ID._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(DD, CD, cD) {
          const ID = this.hq(),
            pD = cD.materialDefines;
          if (!pD) return;
          const iD = cD.effect;
          if (!iD) return;
          this._activeEffect = iD, this.bindOnlyWorldMatrix(DD), this._activeEffect.setMatrix("viewProjection", ID.getTransformMatrix()), this._mustRebind(ID, iD, cD) && ((0, ZD.i)(iD, this, ID), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, oD.u)(pD, iD, ID)), ID.fogEnabled && CD.applyFog && ID.fogMode !== BD.d.FOGMODE_NONE && this._activeEffect.setMatrix("view", ID.getViewMatrix()), (0, oD.h)(ID, CD, this._activeEffect, this.rawHdrOutput);
          const bD = ID.activeCamera;
          if (bD) {
            const DD = bD.getWorldMatrix();
            this._cameraPosition.x = DD.m[12], this._cameraPosition.y = DD.m[13], this._cameraPosition.z = DD.m[14], this._activeEffect.setVector3("cameraPosition", fD.TmpVectors.cZ[0].YCD(this._cameraPosition).EcD(ID.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const DD = ID.DZ()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", ND(DD?.texture?.type))
          }
          if (!this.useSunPosition) {
            const DD = Math.PI * (this.inclination - .5),
              CD = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(CD) * Math.cos(DD), this.sunPosition.y = this.distance * Math.sin(-DD), this.sunPosition.z = this.distance * Math.sin(CD) * Math.cos(DD), fD.Quaternion.FromUnitVectorsToRef(fD.cZ.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(CD, this._activeEffect, cD)
        }
        getAnimatables() {
          return []
        }
        dispose(DD) {
          super.dispose(DD)
        }
        clone(CD) {
          return iD.d.Clone((() => new DD(CD, this.hq())), this)
        }
        serialize() {
          const DD = super.serialize();
          return DD.customType = "BABYLON.SkyMaterial", DD
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(CD, cD, ID) {
          return iD.d.Parse((() => new DD(CD.name, cD)), CD, cD, ID)
        }
      }, (() => {
        const cD = "function" === typeof Symbol && Symbol.metadata ? Object.create(KD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, pD.G)()], bD = [(0, pD.G)()], wD = [(0, pD.G)()], yD = [(0, pD.G)()], gD = [(0, pD.G)()], XD = [(0, pD.G)()], mD = [(0, pD.G)()], nD = [(0, pD.G)()], OD = [(0, pD.C)()], PD = [(0, pD.G)()], HD = [(0, pD.C)()], UD = [(0, pD.C)()], xD = [(0, pD.G)()], qD = [(0, pD.G)()], JD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: DD => "luminance" in DD,
            get: DD => DD.luminance,
            set: (DD, CD) => {
              DD.luminance = CD
            }
          },
          metadata: cD
        }, aD, VD), (0, ID.k)(null, null, bD, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: DD => "turbidity" in DD,
            get: DD => DD.turbidity,
            set: (DD, CD) => {
              DD.turbidity = CD
            }
          },
          metadata: cD
        }, zD, jD), (0, ID.k)(null, null, wD, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: DD => "rayleigh" in DD,
            get: DD => DD.rayleigh,
            set: (DD, CD) => {
              DD.rayleigh = CD
            }
          },
          metadata: cD
        }, lD, LD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: DD => "mieCoefficient" in DD,
            get: DD => DD.mieCoefficient,
            set: (DD, CD) => {
              DD.mieCoefficient = CD
            }
          },
          metadata: cD
        }, TD, GD), (0, ID.k)(null, null, gD, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: DD => "mieDirectionalG" in DD,
            get: DD => DD.mieDirectionalG,
            set: (DD, CD) => {
              DD.mieDirectionalG = CD
            }
          },
          metadata: cD
        }, RD, kD), (0, ID.k)(null, null, XD, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: DD => "distance" in DD,
            get: DD => DD.distance,
            set: (DD, CD) => {
              DD.distance = CD
            }
          },
          metadata: cD
        }, dD, YD), (0, ID.k)(null, null, mD, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: DD => "inclination" in DD,
            get: DD => DD.inclination,
            set: (DD, CD) => {
              DD.inclination = CD
            }
          },
          metadata: cD
        }, WD, sD), (0, ID.k)(null, null, nD, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: DD => "azimuth" in DD,
            get: DD => DD.azimuth,
            set: (DD, CD) => {
              DD.azimuth = CD
            }
          },
          metadata: cD
        }, ED, eD), (0, ID.k)(null, null, OD, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: DD => "sunPosition" in DD,
            get: DD => DD.sunPosition,
            set: (DD, CD) => {
              DD.sunPosition = CD
            }
          },
          metadata: cD
        }, uD, hD), (0, ID.k)(null, null, PD, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSunPosition" in DD,
            get: DD => DD.useSunPosition,
            set: (DD, CD) => {
              DD.useSunPosition = CD
            }
          },
          metadata: cD
        }, rD, AD), (0, ID.k)(null, null, HD, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: DD => "cameraOffset" in DD,
            get: DD => DD.cameraOffset,
            set: (DD, CD) => {
              DD.cameraOffset = CD
            }
          },
          metadata: cD
        }, FD, DC), (0, ID.k)(null, null, UD, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: DD => "up" in DD,
            get: DD => DD.up,
            set: (DD, CD) => {
              DD.up = CD
            }
          },
          metadata: cD
        }, CC, cC), (0, ID.k)(null, null, xD, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: DD => "dithering" in DD,
            get: DD => DD.dithering,
            set: (DD, CD) => {
              DD.dithering = CD
            }
          },
          metadata: cD
        }, IC, pC), (0, ID.k)(null, null, qD, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: DD => "rawHdrOutput" in DD,
            get: DD => DD.rawHdrOutput,
            set: (DD, CD) => {
              DD.rawHdrOutput = CD
            }
          },
          metadata: cD
        }, iC, fC), (0, ID.k)(null, null, JD, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: DD => "cloudiness" in DD,
            get: DD => DD.cloudiness,
            set: (DD, CD) => {
              DD.cloudiness = CD
            }
          },
          metadata: cD
        }, bC, QC), cD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cD
        })
      })(), DD._ShaderLoader = new MD.e((() => [cD.e(320).then((() => cD(60450))), cD.e(313).then((() => cD(60458)))]), (() => [cD.e(337).then((() => cD(60460))), cD.e(331).then((() => cD(60467)))])), DD
    })();
    (0, yD.d)("BABYLON.SkyMaterial", gD)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);