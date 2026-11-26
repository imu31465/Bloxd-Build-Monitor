export const id = 264;
export const ids = [264];
export const modules = {
  44290: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(41210),
      yU = zU(44292);
    class QU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = zU, this.tyU = [], this._maxBlockCapacity = XU || 64, this._selectionContent = new cU.c(1024), this._creationFunc = UU
      }
      update(UU, XU, zU) {
        yU.c._CreateBlocks(UU, XU, zU, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      UyU(UU) {
        for (let XU = 0; XU < this.blocks.length; XU++) {
          this.blocks[XU].addEntry(UU)
        }
      }
      ZH(UU) {
        for (let XU = 0; XU < this.blocks.length; XU++) {
          this.blocks[XU].removeEntry(UU)
        }
      }
      select(UU, XU) {
        this._selectionContent.reset();
        for (let zU = 0; zU < this.blocks.length; zU++) {
          this.blocks[zU].select(UU, this._selectionContent, XU)
        }
        return XU ? this._selectionContent.concat(this.tyU) : this._selectionContent.concatWithNoDuplicate(this.tyU), this._selectionContent
      }
      intersects(UU, XU, zU) {
        this._selectionContent.reset();
        for (let cU = 0; cU < this.blocks.length; cU++) {
          this.blocks[cU].intersects(UU, XU, this._selectionContent, zU)
        }
        return zU ? this._selectionContent.concat(this.tyU) : this._selectionContent.concatWithNoDuplicate(this.tyU), this._selectionContent
      }
      intersectsRay(UU) {
        this._selectionContent.reset();
        for (let XU = 0; XU < this.blocks.length; XU++) {
          this.blocks[XU].intersectsRay(UU, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.tyU), this._selectionContent
      }
    }
    QU.CreationFuncForMeshes = (UU, XU) => {
      const zU = UU.gM();
      !UU.isBlocked && zU.boundingBox.intersectsMinMax(XU.DyU, XU.oyU) && XU.entries.push(UU)
    }, QU.CreationFuncForSubMeshes = (UU, XU) => {
      UU.gM().boundingBox.intersectsMinMax(XU.DyU, XU.oyU) && XU.entries.push(UU)
    }
  },
  44292: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(37819),
      yU = zU(41389);
    class QU {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.entries = [], this.gyU = new Array, this._capacity = zU, this._depth = cU, this._maxDepth = yU, this._creationFunc = QU, this._minPoint = UU, this._maxPoint = XU, this.gyU.push(UU.clone()), this.gyU.push(XU.clone()), this.gyU.push(UU.clone()), this.gyU[2].x = XU.x, this.gyU.push(UU.clone()), this.gyU[3].y = XU.y, this.gyU.push(UU.clone()), this.gyU[4].z = XU.z, this.gyU.push(XU.clone()), this.gyU[5].z = UU.z, this.gyU.push(XU.clone()), this.gyU[6].x = UU.x, this.gyU.push(XU.clone()), this.gyU[7].y = UU.y
      }
      get xY() {
        return this._capacity
      }
      get DyU() {
        return this._minPoint
      }
      get oyU() {
        return this._maxPoint
      }
      addEntry(UU) {
        if (this.blocks)
          for (let XU = 0; XU < this.blocks.length; XU++) {
            this.blocks[XU].addEntry(UU)
          } else this._creationFunc(UU, this), this.entries.length > this.xY && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(UU) {
        if (this.blocks) {
          for (let XU = 0; XU < this.blocks.length; XU++) {
            this.blocks[XU].removeEntry(UU)
          }
          return
        }
        const XU = this.entries.indexOf(UU);
        XU > -1 && this.entries.splice(XU, 1)
      }
      addEntries(UU) {
        for (let XU = 0; XU < UU.length; XU++) {
          const zU = UU[XU];
          this.addEntry(zU)
        }
      }
      select(UU, XU, zU) {
        if (yU.e.IsInFrustum(this.gyU, UU)) {
          if (this.blocks) {
            for (let cU = 0; cU < this.blocks.length; cU++) {
              this.blocks[cU].select(UU, XU, zU)
            }
            return
          }
          zU ? XU.concat(this.entries) : XU.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(UU, XU, zU, cU) {
        if (yU.e.IntersectsSphere(this._minPoint, this._maxPoint, UU, XU)) {
          if (this.blocks) {
            for (let yU = 0; yU < this.blocks.length; yU++) {
              this.blocks[yU].intersects(UU, XU, zU, cU)
            }
            return
          }
          cU ? zU.concat(this.entries) : zU.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(UU, XU) {
        if (UU.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let zU = 0; zU < this.blocks.length; zU++) {
              this.blocks[zU].intersectsRay(UU, XU)
            }
            return
          }
          XU.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        QU._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(UU, XU, zU, yU, AU, FU, oU, DU) {
        oU.blocks = new Array;
        const EU = new cU.q((XU.x - UU.x) / 2, (XU.y - UU.y) / 2, (XU.z - UU.z) / 2);
        for (let cU = 0; cU < 2; cU++)
          for (let XU = 0; XU < 2; XU++)
            for (let YU = 0; YU < 2; YU++) {
              const NU = UU.add(EU.multiplyByFloats(cU, XU, YU)),
                IU = UU.add(EU.multiplyByFloats(cU + 1, XU + 1, YU + 1)),
                pU = new QU(NU, IU, yU, AU + 1, FU, DU);
              pU.addEntries(zU), oU.blocks.push(pU)
            }
      }
    }
  },
  44300: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU
    });
    var cU = zU(41202),
      yU = zU(37819),
      QU = zU(41512),
      AU = zU(44235),
      FU = zU(41265),
      oU = zU(37841),
      DU = zU(44290);
    class EU {
      constructor(UU) {
        this.name = FU.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new AU.E(yU.q.Zero(), new yU.q(1, 1, 1)), (UU = UU || oU.b.LastCreatedScene) && (this.sa = UU, this.sa.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.sa.getActiveSubMeshCandidates = UU => this.getActiveSubMeshCandidates(UU), this.sa.getCollidingSubMeshCandidates = (UU, XU) => this.getCollidingSubMeshCandidates(UU, XU), this.sa.getIntersectingSubMeshCandidates = (UU, XU) => this.getIntersectingSubMeshCandidates(UU, XU))
      }
      register() {
        this.sa.onMeshRemovedObservable.add((UU => {
          const XU = this.sa.selectionOctree;
          if (void 0 !== XU && null !== XU) {
            const zU = XU.tyU.indexOf(UU); - 1 !== zU && XU.tyU.splice(zU, 1)
          }
        })), this.sa.onMeshImportedObservable.add((UU => {
          const XU = this.sa.selectionOctree;
          void 0 !== XU && null !== XU && XU.UyU(UU)
        }))
      }
      getActiveMeshCandidates() {
        return this.sa.PyU?.select(this.sa.frustumPlanes) || this.sa._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(UU) {
        if (UU._submeshesOctree && UU.useOctreeForRenderingSelection) {
          return UU._submeshesOctree.select(this.sa.frustumPlanes)
        }
        return this.sa._getDefaultSubMeshCandidates(UU)
      }
      getIntersectingSubMeshCandidates(UU, XU) {
        if (UU._submeshesOctree && UU.useOctreeForPicking) {
          AU.E.TransformToRef(XU, UU.getWorldMatrix(), this._tempRay);
          return UU._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.sa._getDefaultSubMeshCandidates(UU)
      }
      getCollidingSubMeshCandidates(UU, XU) {
        if (UU._submeshesOctree && UU.useOctreeForCollisions) {
          const zU = XU._velocityWorldLength + Math.max(XU._radius.x, XU._radius.y, XU._radius.z);
          return UU._submeshesOctree.intersects(XU._basePointWorld, zU)
        }
        return this.sa._getDefaultSubMeshCandidates(UU)
      }
      rebuild() {}
      dispose() {}
    }
    let YU = !1;
    YU || (YU = !0, cU.d.prototype.createOrUpdateSelectionOctree = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        zU = this._getComponent(FU.d.NAME_OCTREE);
      zU || (zU = new EU(this), this.ncU(zU)), this.PyU || (this.PyU = new DU.e(DU.e.CreationFuncForMeshes, UU, XU));
      const cU = this.getWorldExtends();
      return this.PyU.update(cU.min, cU.max, this.meshes), this.PyU
    }, Object.defineProperty(cU.d.prototype, "selectionOctree", {
      get: function() {
        return this.PyU
      },
      enumerable: !0,
      configurable: !0
    }), QU.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const zU = this.nS();
      let cU = zU._getComponent(FU.d.NAME_OCTREE);
      cU || (cU = new EU(zU), zU.ncU(cU)), this._submeshesOctree || (this._submeshesOctree = new DU.e(DU.e.CreationFuncForSubMeshes, UU, XU)), this.computeWorldMatrix(!0);
      const yU = this.gM().boundingBox;
      return this._submeshesOctree.update(yU.minimumWorld, yU.maximumWorld, this.uB), this._submeshesOctree
    })
  },
  44235: (UU, XU, zU) => {
    zU.d(XU, {
      B: () => WU,
      E: () => YU,
      d: () => wU,
      e: () => aU,
      i: () => pU,
      l: () => IU,
      o: () => eU,
      s: () => LU,
      t: () => PU,
      x: () => dU
    });
    var cU = zU(37825),
      yU = zU(37819),
      QU = zU(37827),
      AU = zU(41383),
      FU = zU(41235),
      oU = zU(37841),
      DU = zU(41289);
    const EU = {
      internalPickerForMesh: void 0
    };
    class YU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cU.c;
        this.origin = UU, this.direction = XU, this.length = zU, this.epsilon = yU
      }
      clone() {
        return new YU(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const cU = YU._TmpVector3[0].sUU(UU.x - zU, UU.y - zU, UU.z - zU),
          yU = YU._TmpVector3[1].sUU(XU.x + zU, XU.y + zU, XU.z + zU);
        let QU, AU, FU, oU, DU = 0,
          EU = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < cU.x || this.origin.x > yU.x) return !1
        } else if (QU = 1 / this.direction.x, AU = (cU.x - this.origin.x) * QU, FU = (yU.x - this.origin.x) * QU, FU === -1 / 0 && (FU = 1 / 0), AU > FU && (oU = AU, AU = FU, FU = oU), DU = Math.max(AU, DU), EU = Math.min(FU, EU), DU > EU) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < cU.y || this.origin.y > yU.y) return !1
        } else if (QU = 1 / this.direction.y, AU = (cU.y - this.origin.y) * QU, FU = (yU.y - this.origin.y) * QU, FU === -1 / 0 && (FU = 1 / 0), AU > FU && (oU = AU, AU = FU, FU = oU), DU = Math.max(AU, DU), EU = Math.min(FU, EU), DU > EU) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < cU.z || this.origin.z > yU.z) return !1
        } else if (QU = 1 / this.direction.z, AU = (cU.z - this.origin.z) * QU, FU = (yU.z - this.origin.z) * QU, FU === -1 / 0 && (FU = 1 / 0), AU > FU && (oU = AU, AU = FU, FU = oU), DU = Math.max(AU, DU), EU = Math.min(FU, EU), DU > EU) return !1;
        return !0
      }
      intersectsBox(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(UU.minimum, UU.maximum, XU)
      }
      intersectsSphere(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = UU.center.x - this.origin.x,
          cU = UU.center.y - this.origin.y,
          yU = UU.center.z - this.origin.z,
          QU = zU * zU + cU * cU + yU * yU,
          AU = UU.radius + XU,
          FU = AU * AU;
        if (QU <= FU) return !0;
        const oU = zU * this.direction.x + cU * this.direction.y + yU * this.direction.z;
        if (oU < 0) return !1;
        return QU - oU * oU <= FU
      }
      intersectsTriangle(UU, XU, zU) {
        const cU = YU._TmpVector3[0],
          QU = YU._TmpVector3[1],
          FU = YU._TmpVector3[2],
          oU = YU._TmpVector3[3],
          DU = YU._TmpVector3[4];
        XU.subtractToRef(UU, cU), zU.subtractToRef(UU, QU), yU.q.CrossToRef(this.direction, QU, FU);
        const EU = yU.q.Dot(cU, FU);
        if (0 === EU) return null;
        const NU = 1 / EU;
        this.origin.subtractToRef(UU, oU);
        const IU = yU.q.Dot(oU, FU) * NU;
        if (IU < -this.epsilon || IU > 1 + this.epsilon) return null;
        yU.q.CrossToRef(oU, cU, DU);
        const pU = yU.q.Dot(this.direction, DU) * NU;
        if (pU < -this.epsilon || IU + pU > 1 + this.epsilon) return null;
        const aU = yU.q.Dot(QU, DU) * NU;
        return aU > this.length || aU < 0 ? null : new AU.e(1 - IU - pU, IU, aU)
      }
      intersectsPlane(UU) {
        let XU;
        const zU = yU.q.Dot(UU.normal, this.direction);
        if (Math.abs(zU) < 9.99999997475243e-7) return null;
        {
          const cU = yU.q.Dot(UU.normal, this.origin);
          return XU = (-UU.d - cU) / zU, XU < 0 ? XU < -9.99999997475243e-7 ? null : 0 : XU
        }
      }
      intersectsAxis(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (UU) {
          case "y": {
            const UU = (this.origin.y - XU) / this.direction.y;
            return UU > 0 ? null : new yU.q(this.origin.x + this.direction.x * -UU, XU, this.origin.z + this.direction.z * -UU)
          }
          case "x": {
            const UU = (this.origin.x - XU) / this.direction.x;
            return UU > 0 ? null : new yU.q(XU, this.origin.y + this.direction.y * -UU, this.origin.z + this.direction.z * -UU)
          }
          case "z": {
            const UU = (this.origin.z - XU) / this.direction.z;
            return UU > 0 ? null : new yU.q(this.origin.x + this.direction.x * -UU, this.origin.y + this.direction.y * -UU, XU)
          }
          default:
            return null
        }
      }
      syU(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QU = arguments.length > 4 ? arguments[4] : void 0,
          AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const FU = yU.l.Matrix[0];
        return UU.getWorldMatrix().invertToRef(FU), this._tmpRay ? YU.TransformToRef(this, FU, this._tmpRay) : this._tmpRay = YU.Transform(this, FU), UU.intersects(this._tmpRay, XU, zU, cU, QU, AU)
      }
      intersectsMeshes(UU, XU, zU) {
        zU ? zU.length = 0 : zU = [];
        for (let cU = 0; cU < UU.length; cU++) {
          const yU = this.syU(UU[cU], XU);
          yU.hit && zU.push(yU)
        }
        return zU.sort(this._comparePickingInfo), zU
      }
      _comparePickingInfo(UU, XU) {
        return UU.distance < XU.distance ? -1 : UU.distance > XU.distance ? 1 : 0
      }
      intersectionSegment(UU, XU, zU) {
        const cU = this.origin,
          QU = yU.l.Sp[0],
          AU = yU.l.Sp[1],
          FU = yU.l.Sp[2],
          oU = yU.l.Sp[3];
        XU.subtractToRef(UU, QU), this.direction.scaleToRef(YU._Rayl, FU), cU.addToRef(FU, AU), UU.subtractToRef(cU, oU);
        const DU = yU.q.Dot(QU, QU),
          EU = yU.q.Dot(QU, FU),
          NU = yU.q.Dot(FU, FU),
          IU = yU.q.Dot(QU, oU),
          pU = yU.q.Dot(FU, oU),
          aU = DU * NU - EU * EU;
        let tU, gU, kU = aU,
          GU = aU;
        aU < YU._Smallnum ? (tU = 0, kU = 1, gU = pU, GU = NU) : (tU = EU * pU - NU * IU, gU = DU * pU - EU * IU, tU < 0 ? (tU = 0, gU = pU, GU = NU) : tU > kU && (tU = kU, gU = pU + EU, GU = NU)), gU < 0 ? (gU = 0, -IU < 0 ? tU = 0 : -IU > DU ? tU = kU : (tU = -IU, kU = DU)) : gU > GU && (gU = GU, -IU + EU < 0 ? tU = 0 : -IU + EU > DU ? tU = kU : (tU = -IU + EU, kU = DU));
        const BU = Math.abs(tU) < YU._Smallnum ? 0 : tU / kU,
          ZU = Math.abs(gU) < YU._Smallnum ? 0 : gU / GU,
          RU = yU.l.Sp[4];
        FU.scaleToRef(ZU, RU);
        const PU = yU.l.Sp[5];
        QU.scaleToRef(BU, PU), PU.addInPlace(oU);
        const WU = yU.l.Sp[6];
        PU.subtractToRef(RU, WU);
        return ZU > 0 && ZU <= this.length && WU.lengthSquared() < zU * zU ? PU.length() : -1
      }
      update(UU, XU, zU, cU, QU, AU, FU) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          YU._RayDistant || (YU._RayDistant = YU.Zero()), YU._RayDistant.unprojectRayToRef(UU, XU, zU, cU, yU.e.IdentityReadOnly, AU, FU);
          const oU = yU.l.Matrix[0];
          QU.invertToRef(oU), YU.TransformToRef(YU._RayDistant, oU, this)
        } else this.unprojectRayToRef(UU, XU, zU, cU, QU, AU, FU);
        return this
      }
      static Zero() {
        return new YU(yU.q.Zero(), yU.q.Zero())
      }
      static CreateNew(UU, XU, zU, cU, yU, QU, AU) {
        return YU.Zero().update(UU, XU, zU, cU, yU, QU, AU)
      }
      static CreateNewFromTo(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.e.IdentityReadOnly;
        const cU = new YU(new yU.q(0, 0, 0), new yU.q(0, 0, 0));
        return YU.CreateFromToToRef(UU, XU, cU, zU)
      }
      static CreateFromToToRef(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yU.e.IdentityReadOnly;
        zU.origin.YL(UU);
        const QU = XU.subtractToRef(UU, zU.direction),
          AU = Math.sqrt(QU.x * QU.x + QU.y * QU.y + QU.z * QU.z);
        return zU.length = AU, zU.direction.normalize(), YU.TransformToRef(zU, cU, zU)
      }
      static Transform(UU, XU) {
        const zU = new YU(new yU.q(0, 0, 0), new yU.q(0, 0, 0));
        return YU.TransformToRef(UU, XU, zU), zU
      }
      static TransformToRef(UU, XU, zU) {
        yU.q.TransformCoordinatesToRef(UU.origin, XU, zU.origin), yU.q.TransformNormalToRef(UU.direction, XU, zU.direction), zU.length = UU.length, zU.epsilon = UU.epsilon;
        const cU = zU.direction,
          QU = cU.length();
        if (0 !== QU && 1 !== QU) {
          const UU = 1 / QU;
          cU.x *= UU, cU.y *= UU, cU.z *= UU, zU.length *= QU
        }
        return zU
      }
      unprojectRayToRef(UU, XU, zU, cU, QU, AU, FU) {
        const DU = yU.l.Matrix[0];
        QU.multiplyToRef(AU, DU), DU.multiplyToRef(FU, DU), DU.invert();
        const EU = oU.b.LastCreatedEngine,
          YU = yU.l.Sp[0];
        YU.x = UU / zU * 2 - 1, YU.y = -(XU / cU * 2 - 1), YU.z = EU?.XyU ? 1 : EU?.isNDCHalfZRange ? 0 : -1;
        const NU = yU.l.Sp[1].sUU(YU.x, YU.y, 1 - 1e-8),
          IU = yU.l.Sp[2],
          pU = yU.l.Sp[3];
        yU.q.TransformCoordinatesToRef(YU, DU, IU), yU.q.TransformCoordinatesToRef(NU, DU, pU), this.origin.YL(IU), pU.subtractToRef(IU, this.direction), this.direction.normalize()
      }
    }

    function NU(UU, XU, zU, cU, yU) {
      let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const AU = YU.Zero();
      return IU(UU, XU, zU, cU, AU, yU, QU), AU
    }

    function IU(UU, XU, zU, cU, QU, AU) {
      let FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const DU = UU.qp();
      if (!AU && !(AU = UU.activeCamera) && !(AU = UU.cameraToUseForPointers)) return UU;
      const EU = AU.viewport,
        YU = DU.getRenderHeight(),
        {
          x: NU,
          y: IU,
          width: pU,
          height: aU
        } = EU.toGlobal(DU.getRenderWidth(), YU),
        tU = 1 / DU.getHardwareScalingLevel();
      return XU = XU * tU - NU, zU = zU * tU - (YU - IU - aU), QU.update(XU, zU, pU, aU, cU || yU.e.IdentityReadOnly, FU ? yU.e.IdentityReadOnly : AU.getViewMatrix(), AU.getProjectionMatrix(), oU), UU
    }

    function pU(UU, XU, zU, cU) {
      const yU = YU.Zero();
      return aU(UU, XU, zU, yU, cU), yU
    }

    function aU(UU, XU, zU, cU, QU) {
      if (!FU.c) return UU;
      const AU = UU.qp();
      if (!QU && !(QU = UU.activeCamera) && !(QU = UU.cameraToUseForPointers)) throw new Error("Active camera not set");
      const oU = QU.viewport,
        DU = AU.getRenderHeight(),
        {
          x: EU,
          y: YU,
          width: NU,
          height: IU
        } = oU.toGlobal(AU.getRenderWidth(), DU),
        pU = yU.e.Identity(),
        aU = 1 / AU.getHardwareScalingLevel();
      return XU = XU * aU - EU, zU = zU * aU - (DU - YU - IU), cU.update(XU, zU, NU, IU, pU, pU, QU.getProjectionMatrix()), UU
    }

    function tU(UU, XU, zU, cU, yU, QU, AU, FU) {
      return gU(UU, zU, cU, XU(cU, zU.enableDistantPicking), yU, QU, AU, FU)
    }

    function gU(UU, XU, zU, cU, yU, QU, AU, FU) {
      const oU = XU.intersects(cU, yU, AU, QU, zU, FU);
      return oU && oU.hit ? !yU && null != UU && oU.distance >= UU.distance ? null : oU : null
    }

    function kU(UU, XU) {
      return "InstancedLinesMesh" === UU || "LinesMesh" === UU ? XU.intersectionThreshold : 0
    }

    function GU(UU) {
      const XU = UU.getClassName();
      if ("GreasedLineMesh" === XU) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const zU = UU.rawBoundingInfo;
      return {
        rawBoundingInfo: zU,
        intersectionThreshold: zU ? kU(XU, UU) : 0
      }
    }

    function BU(UU, XU, zU, cU, yU) {
      const QU = UU(zU, XU.enableDistantPicking);
      return QU.intersectsSphere(cU.dyU, yU) && QU.intersectsBox(cU.boundingBox, yU) ? QU : null
    }

    function ZU(UU, XU, zU, cU, QU, AU) {
      let oU = null;
      const DU = !!(UU.activeCameras && UU.activeCameras.length > 1 && UU.cameraToUseForPointers !== UU.activeCamera),
        YU = UU.cameraToUseForPointers || UU.activeCamera,
        NU = EU.internalPickerForMesh || tU,
        IU = NU === tU;
      for (let FU = 0; FU < UU.meshes.length; FU++) {
        const EU = UU.meshes[FU];
        if (zU) {
          if (!zU(EU, -1)) continue
        } else if (!EU.isEnabled() || !EU.isVisible || !EU.ma) continue;
        const pU = DU && EU.isWorldMatrixCameraDependent(),
          aU = EU.computeWorldMatrix(pU, YU);
        if (EU.hasThinInstances && EU.RzU) {
          const UU = NU(oU, XU, EU, aU, !0, !0, AU);
          if (UU) {
            if (QU) return UU;
            const {
              rawBoundingInfo: FU,
              intersectionThreshold: DU
            } = GU(EU), YU = EU._thinInstanceDataStorage.matrixData;
            if (YU) {
              const UU = yU.l.Matrix[0],
                pU = yU.l.Matrix[1],
                tU = Math.min(EU.BUU, YU.length >> 4);
              for (let kU = 0; kU < tU; kU++) {
                if (zU && !zU(EU, kU)) continue;
                yU.e.FromArrayToRef(YU, kU << 4, UU), UU.multiplyToRef(aU, pU);
                const tU = IU && FU ? BU(XU, EU, pU, FU, DU) : null;
                if (IU && FU && !tU) continue;
                const GU = IU && tU ? gU(oU, EU, pU, tU, cU, QU, AU, !0) : NU(oU, XU, EU, pU, cU, QU, AU, !0);
                if (GU && (oU = GU, oU.thinInstanceIndex = kU, cU)) return oU
              }
            }
          }
        } else {
          const UU = NU(oU, XU, EU, aU, cU, QU, AU);
          if (UU && (oU = UU, cU)) return oU
        }
      }
      return oU || new FU.c
    }

    function RU(UU, XU, zU, cU) {
      if (!FU.c) return null;
      const QU = [],
        AU = !!(UU.activeCameras && UU.activeCameras.length > 1 && UU.cameraToUseForPointers !== UU.activeCamera),
        oU = UU.cameraToUseForPointers || UU.activeCamera,
        DU = EU.internalPickerForMesh || tU,
        YU = DU === tU;
      for (let FU = 0; FU < UU.meshes.length; FU++) {
        const EU = UU.meshes[FU];
        if (zU) {
          if (!zU(EU, -1)) continue
        } else if (!EU.isEnabled() || !EU.isVisible || !EU.ma) continue;
        const NU = AU && EU.isWorldMatrixCameraDependent(),
          IU = EU.computeWorldMatrix(NU, oU);
        if (EU.hasThinInstances && EU.RzU) {
          if (DU(null, XU, EU, IU, !0, !0, cU)) {
            const {
              rawBoundingInfo: UU,
              intersectionThreshold: AU
            } = GU(EU), FU = EU._thinInstanceDataStorage.matrixData;
            if (FU) {
              const oU = yU.l.Matrix[0],
                NU = yU.l.Matrix[1],
                pU = Math.min(EU.BUU, FU.length >> 4);
              for (let aU = 0; aU < pU; aU++) {
                if (zU && !zU(EU, aU)) continue;
                yU.e.FromArrayToRef(FU, aU << 4, oU), oU.multiplyToRef(IU, NU);
                const pU = YU && UU ? BU(XU, EU, NU, UU, AU) : null;
                if (YU && UU && !pU) continue;
                const tU = YU && pU ? gU(null, EU, NU, pU, !1, !1, cU, !0) : DU(null, XU, EU, NU, !1, !1, cU, !0);
                tU && (tU.thinInstanceIndex = aU, QU.push(tU))
              }
            }
          }
        } else {
          const UU = DU(null, XU, EU, IU, !1, !1, cU);
          UU && QU.push(UU)
        }
      }
      return QU
    }

    function PU(UU, XU, zU, cU, QU, AU) {
      if (!FU.c) return null;
      const oU = ZU(UU, (cU => (UU._tempPickingRay || (UU._tempPickingRay = YU.Zero()), IU(UU, XU, zU, cU, UU._tempPickingRay, AU || null), UU._tempPickingRay)), cU, QU, !0);
      return oU && (oU.ray = NU(UU, XU, zU, yU.e.Identity(), AU || null)), oU
    }

    function WU(UU, XU, zU, cU, QU, AU, FU) {
      const oU = ZU(UU, ((cU, yU) => (UU._tempPickingRay || (UU._tempPickingRay = YU.Zero()), IU(UU, XU, zU, cU, UU._tempPickingRay, AU || null, !1, yU), UU._tempPickingRay)), cU, QU, !1, FU);
      return oU && (oU.ray = NU(UU, XU, zU, yU.e.Identity(), AU || null)), oU
    }

    function dU(UU, XU, zU, cU, QU) {
      const AU = ZU(UU, (zU => (UU._pickWithRayInverseMatrix || (UU._pickWithRayInverseMatrix = yU.e.Identity()), zU.invertToRef(UU._pickWithRayInverseMatrix), UU._cachedRayForTransform || (UU._cachedRayForTransform = YU.Zero()), YU.TransformToRef(XU, UU._pickWithRayInverseMatrix, UU._cachedRayForTransform), UU._cachedRayForTransform)), zU, cU, !1, QU);
      return AU && (AU.ray = XU), AU
    }

    function LU(UU, XU, zU, cU, yU, QU) {
      return RU(UU, (cU => NU(UU, XU, zU, cU, yU || null)), cU, QU)
    }

    function eU(UU, XU, zU, cU) {
      return RU(UU, (zU => (UU._pickWithRayInverseMatrix || (UU._pickWithRayInverseMatrix = yU.e.Identity()), zU.invertToRef(UU._pickWithRayInverseMatrix), UU._cachedRayForTransform || (UU._cachedRayForTransform = YU.Zero()), YU.TransformToRef(XU, UU._pickWithRayInverseMatrix, UU._cachedRayForTransform), UU._cachedRayForTransform)), zU, cU)
    }

    function CU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        cU = arguments.length > 3 ? arguments[3] : void 0,
        QU = arguments.length > 4 ? arguments[4] : void 0;
      cU || (cU = UU.getWorldMatrix()), XU.length = zU, QU ? XU.origin.YL(QU) : XU.origin.YL(UU.position);
      const AU = yU.l.Sp[2];
      AU.set(0, 0, UU._scene.useRightHandedSystem ? -1 : 1);
      const FU = yU.l.Sp[3];
      return yU.q.TransformNormalToRef(AU, cU, FU), yU.q.NormalizeToRef(FU, XU.direction), XU
    }

    function wU(UU, XU) {
      XU && (XU.prototype.getForwardRay = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        return CU(this, new YU(yU.q.Zero(), yU.q.Zero(), UU), UU, XU, zU)
      }, XU.prototype.getForwardRayToRef = function(UU) {
        return CU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), UU && (DU.e._IsPickingAvailable = !0, UU.prototype.createPickingRay = function(UU, XU, zU, cU) {
        return NU(this, UU, XU, zU, cU, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    YU._TmpVector3 = (0, QU.d)(6, yU.q.Zero), YU._RayDistant = YU.Zero(), YU._Smallnum = 1e-8, YU._Rayl = 1e9
  },
  44227: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU.E
    });
    var cU = zU(41202),
      yU = zU(41309),
      QU = zU(44235);
    let AU = !1;
    AU || (AU = !0, (0, QU.d)(cU.d, yU.d), cU.d.prototype.createPickingRayToRef = function(UU, XU, zU, cU, yU) {
      let AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, QU.l)(this, UU, XU, zU, cU, yU, AU, FU)
    }, cU.d.prototype.createPickingRayInCameraSpace = function(UU, XU, zU) {
      return (0, QU.i)(this, UU, XU, zU)
    }, cU.d.prototype.createPickingRayInCameraSpaceToRef = function(UU, XU, zU, cU) {
      return (0, QU.e)(this, UU, XU, zU, cU)
    }, cU.d.prototype.pickWithBoundingInfo = function(UU, XU, zU, cU, yU) {
      return (0, QU.t)(this, UU, XU, zU, cU, yU)
    }, cU.d.prototype.DI = function(UU, XU, zU, cU, yU, AU) {
      let FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, QU.B)(this, UU, XU, zU, cU, yU, AU, FU)
    }, cU.d.prototype.pickWithRay = function(UU, XU, zU, cU) {
      return (0, QU.x)(this, UU, XU, zU, cU)
    }, cU.d.prototype.multiPick = function(UU, XU, zU, cU, yU) {
      return (0, QU.s)(this, UU, XU, zU, cU, yU)
    }, cU.d.prototype.multiPickWithRay = function(UU, XU, zU) {
      return (0, QU.o)(this, UU, XU, zU)
    })
  },
  44240: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(41346),
      FU = zU(44249),
      oU = zU(41314),
      DU = zU(37863);
    let EU = (() => {
        var UU;
        let XU, zU, oU, DU, EU, YU, NU, IU, pU = FU.e,
          aU = [],
          tU = [],
          gU = [],
          kU = [],
          GU = [],
          BU = [],
          ZU = [],
          RU = [],
          PU = [],
          WU = [],
          dU = [],
          LU = [],
          eU = [];
        return UU = class extends pU {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(UU) {
            this._shadowFrustumSize = UU, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(UU) {
            this._shadowOrthoScale = UU, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(UU) {
            this._orthoLeft = UU
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(UU) {
            this._orthoRight = UU
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(UU) {
            this._orthoTop = UU
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(UU) {
            this._orthoBottom = UU
          }
          constructor(UU, XU, zU, yU) {
            super(UU, zU, yU), this._shadowFrustumSize = ((0, cU.n)(this, aU), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, cU.n)(this, tU, !0), this.autoCalcShadowZBounds = ((0, cU.n)(this, gU), (0, cU.n)(this, kU, !1)), this._orthoLeft = ((0, cU.n)(this, GU), (0, cU.n)(this, BU, Number.MAX_VALUE)), this._orthoRight = ((0, cU.n)(this, ZU), (0, cU.n)(this, RU, Number.MIN_VALUE)), this._orthoTop = ((0, cU.n)(this, PU), (0, cU.n)(this, WU, Number.MIN_VALUE)), this._orthoBottom = ((0, cU.n)(this, dU), (0, cU.n)(this, LU, Number.MAX_VALUE)), (0, cU.n)(this, eU), this.position = XU.scale(-1), this.direction = XU
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return AU.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(UU, XU, zU) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(UU) : this._setDefaultAutoExtendShadowProjectionMatrix(UU, XU, zU)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(UU) {
            const XU = this.nS().activeCamera;
            QU.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : XU ? XU.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : XU ? XU.maxZ : 1e4, UU, this.nS().qp().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(UU, XU, zU) {
            const cU = this.nS().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const UU = QU.q.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let cU = Number.MAX_VALUE,
                yU = -Number.MAX_VALUE;
              for (let AU = 0; AU < zU.length; AU++) {
                const FU = zU[AU];
                if (!FU) continue;
                const oU = FU.gM().boundingBox;
                for (let zU = 0; zU < oU.vectorsWorld.length; zU++) QU.q.TransformCoordinatesToRef(oU.vectorsWorld[zU], XU, UU), UU.x < this._orthoLeft && (this._orthoLeft = UU.x), UU.y < this._orthoBottom && (this._orthoBottom = UU.y), UU.x > this._orthoRight && (this._orthoRight = UU.x), UU.y > this._orthoTop && (this._orthoTop = UU.y), this.autoCalcShadowZBounds && (UU.z < cU && (cU = UU.z), UU.z > yU && (yU = UU.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = cU, this._shadowMaxZ = yU)
            }
            const yU = this._orthoRight - this._orthoLeft,
              AU = this._orthoTop - this._orthoBottom,
              FU = void 0 !== this.shadowMinZ ? this.shadowMinZ : cU?.minZ || 0,
              oU = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : cU?.maxZ || 1e4,
              DU = this.nS().qp().XyU;
            QU.e.OrthoOffCenterLHToRef(this._orthoLeft - yU * this.shadowOrthoScale, this._orthoRight + yU * this.shadowOrthoScale, this._orthoBottom - AU * this.shadowOrthoScale, this._orthoTop + AU * this.shadowOrthoScale, DU ? oU : FU, DU ? FU : oU, UU, this.nS().qp().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(UU, XU) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, XU), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, XU), this)
          }
          transferToNodeMaterialEffect(UU, XU) {
            return this.computeTransformedInformation() ? (UU.setFloat3(XU, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (UU.setFloat3(XU, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(UU) {
            const XU = this._scene.qp();
            return !XU.XyU && XU.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(UU) {
            const XU = this._scene.qp();
            return XU.XyU && XU.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(UU, XU) {
            UU["DIRLIGHT" + XU] = !0
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(pU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)("orthoLeft")], YU = [(0, yU.I)("orthoRight")], NU = [(0, yU.I)("orthoTop")], IU = [(0, yU.I)("orthoBottom")], (0, cU.j)(UU, null, XU, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: UU => "shadowFrustumSize" in UU,
              get: UU => UU.shadowFrustumSize
            },
            metadata: QU
          }, null, aU), (0, cU.j)(UU, null, zU, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "shadowOrthoScale" in UU,
              get: UU => UU.shadowOrthoScale
            },
            metadata: QU
          }, null, aU), (0, cU.j)(null, null, oU, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: UU => "autoUpdateExtends" in UU,
              get: UU => UU.autoUpdateExtends,
              set: (UU, XU) => {
                UU.autoUpdateExtends = XU
              }
            },
            metadata: QU
          }, tU, gU), (0, cU.j)(null, null, DU, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: UU => "autoCalcShadowZBounds" in UU,
              get: UU => UU.autoCalcShadowZBounds,
              set: (UU, XU) => {
                UU.autoCalcShadowZBounds = XU
              }
            },
            metadata: QU
          }, kU, GU), (0, cU.j)(null, null, EU, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoLeft" in UU,
              get: UU => UU._orthoLeft,
              set: (UU, XU) => {
                UU._orthoLeft = XU
              }
            },
            metadata: QU
          }, BU, ZU), (0, cU.j)(null, null, YU, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoRight" in UU,
              get: UU => UU._orthoRight,
              set: (UU, XU) => {
                UU._orthoRight = XU
              }
            },
            metadata: QU
          }, RU, PU), (0, cU.j)(null, null, NU, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoTop" in UU,
              get: UU => UU._orthoTop,
              set: (UU, XU) => {
                UU._orthoTop = XU
              }
            },
            metadata: QU
          }, WU, dU), (0, cU.j)(null, null, IU, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoBottom" in UU,
              get: UU => UU._orthoBottom,
              set: (UU, XU) => {
                UU._orthoBottom = XU
              }
            },
            metadata: QU
          }, LU, eU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      YU = !1;
    YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_1", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.DirectionalLight", EU))
  },
  39519: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => QU,
      e: () => AU,
      g: () => FU
    });
    var cU = zU(37923);
    class yU {
      constructor(UU, XU, zU) {
        this.gradient = UU, this.color1 = XU, this.color2 = zU
      }
      getColorToRef(UU) {
        this.color2 ? cU.e.LerpToRef(this.color1, this.color2, Math.random(), UU) : UU.YL(this.color1)
      }
    }
    class QU {
      constructor(UU, XU) {
        this.gradient = UU, this.color = XU
      }
    }
    class AU {
      constructor(UU, XU, zU) {
        this.gradient = UU, this.factor1 = XU, this.factor2 = zU
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class FU {
      static GetCurrentGradient(UU, XU, zU) {
        if (XU[0].gradient > UU) return void zU(XU[0], XU[0], 1);
        for (let yU = 0; yU < XU.length - 1; yU++) {
          const cU = XU[yU],
            QU = XU[yU + 1];
          if (UU >= cU.gradient && UU <= QU.gradient) {
            return void zU(cU, QU, (UU - cU.gradient) / (QU.gradient - cU.gradient))
          }
        }
        const cU = XU.length - 1;
        zU(XU[cU], XU[cU], 1)
      }
    }
  },
  39525: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(39486);
    class AU {
      constructor() {
        this.direction1 = new cU.q(0, 1, 0), this.direction2 = new cU.q(0, 1, 0), this.minEmitBox = new cU.q(-.5, -.5, -.5), this.maxEmitBox = new cU.q(.5, .5, .5)
      }
      startDirectionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(this.direction1.x, this.direction2.x),
          FU = (0, yU.RandomRange)(this.direction1.y, this.direction2.y),
          oU = (0, yU.RandomRange)(this.direction1.z, this.direction2.z);
        if (QU) return XU.x = AU, XU.y = FU, void(XU.z = oU);
        cU.q.TransformNormalFromFloatsToRef(AU, FU, oU, UU, XU)
      }
      startPositionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          FU = (0, yU.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          oU = (0, yU.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (QU) return XU.x = AU, XU.y = FU, void(XU.z = oU);
        cU.q.TransformCoordinatesFromFloatsToRef(AU, FU, oU, UU, XU)
      }
      clone() {
        const UU = new AU;
        return QU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2), UU.setVector3("minEmitBox", this.minEmitBox), UU.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3), UU.addUniform("minEmitBox", 3), UU.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU.minEmitBox = this.minEmitBox.cyU(), UU.maxEmitBox = this.maxEmitBox.cyU(), UU
      }
      parse(UU) {
        cU.q.FromArrayToRef(UU.direction1, 0, this.direction1), cU.q.FromArrayToRef(UU.direction2, 0, this.direction2), cU.q.FromArrayToRef(UU.minEmitBox, 0, this.minEmitBox), cU.q.FromArrayToRef(UU.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39484: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      f: () => AU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(39486);
    class AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = UU, this.height = XU, this.radiusRange = zU, this.directionRandomizer = yU, this._tempVector = cU.q.Zero()
      }
      startDirectionFunction(UU, XU, zU, QU, AU) {
        zU.position.subtractToRef(UU.getTranslation(), this._tempVector), this._tempVector.normalize(), cU.q.TransformNormalToRef(this._tempVector, AU, this._tempVector);
        const FU = (0, yU.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let oU = Math.atan2(this._tempVector.x, this._tempVector.z);
        oU += (0, yU.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = FU, this._tempVector.x = Math.sin(oU), this._tempVector.z = Math.cos(oU), this._tempVector.normalize(), QU ? XU.YL(this._tempVector) : cU.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, UU, XU)
      }
      startPositionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(-this.height / 2, this.height / 2),
          FU = (0, yU.RandomRange)(0, 2 * Math.PI),
          oU = (0, yU.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          DU = Math.sqrt(oU) * this.radius,
          EU = DU * Math.cos(FU),
          YU = DU * Math.sin(FU);
        QU ? XU.sUU(EU, AU, YU) : cU.q.TransformCoordinatesFromFloatsToRef(EU, AU, YU, UU, XU)
      }
      clone() {
        const UU = new AU(this.radius, this.directionRandomizer);
        return QU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.height = this.height, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.height = UU.height, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class FU extends AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new cU.q(0, 1, 0),
          QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new cU.q(0, 1, 0);
        super(UU, XU, zU), this.direction1 = yU, this.direction2 = QU
      }
      startDirectionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(this.direction1.x, this.direction2.x),
          FU = (0, yU.RandomRange)(this.direction1.y, this.direction2.y),
          oU = (0, yU.RandomRange)(this.direction1.z, this.direction2.z);
        QU ? XU.sUU(AU, FU, oU) : cU.q.TransformNormalFromFloatsToRef(AU, FU, oU, UU, XU)
      }
      clone() {
        const UU = new FU(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return QU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU
      }
      parse(UU) {
        super.parse(UU), cU.q.FromArrayToRef(UU.direction1, 0, this.direction1), cU.q.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
  },
  44257: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => lX
    });
    var cU = zU(39519),
      yU = zU(37846),
      QU = zU(37819),
      AU = zU(41237),
      FU = zU(44262),
      oU = zU(37841),
      DU = zU(41358),
      EU = zU(37923),
      YU = zU(39525),
      NU = zU(39486),
      IU = zU(37855);
    class pU {
      constructor() {
        this.direction1 = new QU.q(0, 1, 0), this.direction2 = new QU.q(0, 1, 0)
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = (0, IU.RandomRange)(this.direction1.x, this.direction2.x),
          AU = (0, IU.RandomRange)(this.direction1.y, this.direction2.y),
          FU = (0, IU.RandomRange)(this.direction1.z, this.direction2.z);
        cU ? XU.sUU(yU, AU, FU) : QU.q.TransformNormalFromFloatsToRef(yU, AU, FU, UU, XU)
      }
      startPositionFunction(UU, XU, zU, cU) {
        cU ? XU.sUU(0, 0, 0) : QU.q.TransformCoordinatesFromFloatsToRef(0, 0, 0, UU, XU)
      }
      clone() {
        const UU = new pU;
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU
      }
      parse(UU) {
        QU.q.FromArrayToRef(UU.direction1, 0, this.direction1), QU.q.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
    class aU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = UU, this.radiusRange = XU, this.directionRandomizer = zU
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = zU.position.subtract(UU.getTranslation()).normalize(),
          AU = (0, IU.RandomRange)(0, this.directionRandomizer),
          FU = (0, IU.RandomRange)(0, this.directionRandomizer),
          oU = (0, IU.RandomRange)(0, this.directionRandomizer);
        yU.x += AU, yU.y += FU, yU.z += oU, yU.normalize(), cU ? XU.YL(yU) : QU.q.TransformNormalFromFloatsToRef(yU.x, yU.y, yU.z, UU, XU)
      }
      startPositionFunction(UU, XU, zU, cU) {
        const yU = this.radius - (0, IU.RandomRange)(0, this.radius * this.radiusRange),
          AU = (0, IU.RandomRange)(0, 1),
          FU = (0, IU.RandomRange)(0, 2 * Math.PI),
          oU = Math.acos(2 * AU - 1),
          DU = yU * Math.cos(FU) * Math.sin(oU),
          EU = yU * Math.cos(oU),
          YU = yU * Math.sin(FU) * Math.sin(oU);
        cU ? XU.sUU(DU, Math.abs(EU), YU) : QU.q.TransformCoordinatesFromFloatsToRef(DU, Math.abs(EU), YU, UU, XU)
      }
      clone() {
        const UU = new aU(this.radius, this.directionRandomizer);
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class tU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = UU, this.radiusRange = XU, this.directionRandomizer = zU
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = zU.position.subtract(UU.getTranslation()).normalize(),
          AU = (0, IU.RandomRange)(0, this.directionRandomizer),
          FU = (0, IU.RandomRange)(0, this.directionRandomizer),
          oU = (0, IU.RandomRange)(0, this.directionRandomizer);
        yU.x += AU, yU.y += FU, yU.z += oU, yU.normalize(), cU ? XU.YL(yU) : QU.q.TransformNormalFromFloatsToRef(yU.x, yU.y, yU.z, UU, XU)
      }
      startPositionFunction(UU, XU, zU, cU) {
        const yU = this.radius - (0, IU.RandomRange)(0, this.radius * this.radiusRange),
          AU = (0, IU.RandomRange)(0, 1),
          FU = (0, IU.RandomRange)(0, 2 * Math.PI),
          oU = Math.acos(2 * AU - 1),
          DU = yU * Math.cos(FU) * Math.sin(oU),
          EU = yU * Math.cos(oU),
          YU = yU * Math.sin(FU) * Math.sin(oU);
        cU ? XU.sUU(DU, EU, YU) : QU.q.TransformCoordinatesFromFloatsToRef(DU, EU, YU, UU, XU)
      }
      clone() {
        const UU = new tU(this.radius, this.directionRandomizer);
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class gU extends tU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new QU.q(0, 1, 0),
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QU.q(0, 1, 0);
        super(UU), this.direction1 = XU, this.direction2 = zU
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = (0, IU.RandomRange)(this.direction1.x, this.direction2.x),
          AU = (0, IU.RandomRange)(this.direction1.y, this.direction2.y),
          FU = (0, IU.RandomRange)(this.direction1.z, this.direction2.z);
        cU ? XU.sUU(yU, AU, FU) : QU.q.TransformNormalFromFloatsToRef(yU, AU, FU, UU, XU)
      }
      clone() {
        const UU = new gU(this.radius, this.direction1, this.direction2);
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("radiusRange", this.radiusRange), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("radiusRange", 1), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU
      }
      parse(UU) {
        super.parse(UU), QU.q.FromArrayToRef(UU.direction1, 0, this.direction1), QU.q.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
    var kU = zU(39484);
    class GU {
      get radius() {
        return this._radius
      }
      set radius(UU) {
        this._radius = UU, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(UU) {
        this._angle = UU, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = zU, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = XU, this.radius = UU
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = zU.position.subtract(UU.getTranslation()).normalize(),
          AU = (0, IU.RandomRange)(0, this.directionRandomizer),
          FU = (0, IU.RandomRange)(0, this.directionRandomizer),
          oU = (0, IU.RandomRange)(0, this.directionRandomizer);
        yU.x += AU, yU.y += FU, yU.z += oU, yU.normalize(), cU ? XU.YL(yU) : QU.q.TransformNormalFromFloatsToRef(yU.x, yU.y, yU.z, UU, XU)
      }
      startPositionFunction(UU, XU, zU, cU) {
        const yU = (0, IU.RandomRange)(0, 2 * Math.PI);
        let AU;
        this.emitFromSpawnPointOnly ? AU = 1e-4 : (AU = (0, IU.RandomRange)(0, this.heightRange), AU = 1 - AU * AU);
        let FU = this._radius - (0, IU.RandomRange)(0, this._radius * this.radiusRange);
        FU *= AU;
        const oU = FU * Math.sin(yU),
          DU = FU * Math.cos(yU),
          EU = AU * this._height;
        if (cU) return XU.x = oU, XU.y = EU, void(XU.z = DU);
        QU.q.TransformCoordinatesFromFloatsToRef(oU, EU, DU, UU, XU)
      }
      clone() {
        const UU = new GU(this._radius, this._angle, this.directionRandomizer);
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat2("radius", this._radius, this.radiusRange), UU.setFloat("coneAngle", this._angle), UU.setFloat2("height", this._height, this.heightRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 2), UU.addUniform("coneAngle", 1), UU.addUniform("height", 2), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let UU = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (UU += "\n#define CONEEMITTERSPAWNPOINT"), UU
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this._radius, UU.angle = this._angle, UU.directionRandomizer = this.directionRandomizer, UU.radiusRange = this.radiusRange, UU.heightRange = this.heightRange, UU.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.angle = UU.angle, this.directionRandomizer = UU.directionRandomizer, this.radiusRange = void 0 !== UU.radiusRange ? UU.radiusRange : 1, this.heightRange = void 0 !== UU.heightRange ? UU.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== UU.emitFromSpawnPointOnly && UU.emitFromSpawnPointOnly
      }
    }
    class BU extends GU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QU.q(0, 1, 0),
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QU.q(0, 1, 0);
        super(UU, XU), this.direction1 = zU, this.direction2 = cU
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = (0, IU.RandomRange)(this.direction1.x, this.direction2.x),
          AU = (0, IU.RandomRange)(this.direction1.y, this.direction2.y),
          FU = (0, IU.RandomRange)(this.direction1.z, this.direction2.z);
        cU ? XU.sUU(yU, AU, FU) : QU.q.TransformNormalFromFloatsToRef(yU, AU, FU, UU, XU)
      }
      clone() {
        const UU = new BU(this.radius, this.angle, this.direction1, this.direction2);
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        super.applyToShader(UU), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        super.buildUniformLayout(UU), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU
      }
      parse(UU) {
        super.parse(UU), QU.q.FromArrayToRef(UU.direction1, 0, this.direction1), QU.q.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
    class ZU {
      get mesh() {
        return this._mesh
      }
      set mesh(UU) {
        this._mesh !== UU && (this._mesh = UU, UU ? (this._indices = UU.yyU(), this._positions = UU.getVerticesData(AU.h.PositionKind), this._normals = UU.getVerticesData(AU.h.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = QU.q.Zero(), this._mesh = null, this.direction1 = new QU.q(0, 1, 0), this.direction2 = new QU.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = UU
      }
      startDirectionFunction(UU, XU, zU, cU) {
        if (this.useMeshNormalsForDirection && this._normals) return void QU.q.TransformNormalToRef(this._storedNormal, UU, XU);
        const yU = (0, IU.RandomRange)(this.direction1.x, this.direction2.x),
          AU = (0, IU.RandomRange)(this.direction1.y, this.direction2.y),
          FU = (0, IU.RandomRange)(this.direction1.z, this.direction2.z);
        cU ? XU.sUU(yU, AU, FU) : QU.q.TransformNormalFromFloatsToRef(yU, AU, FU, UU, XU)
      }
      startPositionFunction(UU, XU, zU, cU) {
        if (!this._indices || !this._positions) return;
        const yU = 3 * (Math.random() * (this._indices.length / 3) | 0),
          AU = Math.random(),
          FU = Math.random() * (1 - AU),
          oU = 1 - AU - FU,
          DU = this._indices[yU],
          EU = this._indices[yU + 1],
          YU = this._indices[yU + 2],
          NU = QU.l.Sp[0],
          IU = QU.l.Sp[1],
          pU = QU.l.Sp[2],
          aU = QU.l.Sp[3];
        QU.q.FromArrayToRef(this._positions, 3 * DU, NU), QU.q.FromArrayToRef(this._positions, 3 * EU, IU), QU.q.FromArrayToRef(this._positions, 3 * YU, pU), aU.x = AU * NU.x + FU * IU.x + oU * pU.x, aU.y = AU * NU.y + FU * IU.y + oU * pU.y, aU.z = AU * NU.z + FU * IU.z + oU * pU.z, cU ? XU.sUU(aU.x, aU.y, aU.z) : QU.q.TransformCoordinatesFromFloatsToRef(aU.x, aU.y, aU.z, UU, XU), this.useMeshNormalsForDirection && this._normals && (QU.q.FromArrayToRef(this._normals, 3 * DU, NU), QU.q.FromArrayToRef(this._normals, 3 * EU, IU), QU.q.FromArrayToRef(this._normals, 3 * YU, pU), this._storedNormal.x = AU * NU.x + FU * IU.x + oU * pU.x, this._storedNormal.y = AU * NU.y + FU * IU.y + oU * pU.y, this._storedNormal.z = AU * NU.z + FU * IU.z + oU * pU.z)
      }
      clone() {
        const UU = new ZU(this.mesh);
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU.meshId = this.mesh?.id, UU.useMeshNormalsForDirection = this.useMeshNormalsForDirection, UU
      }
      parse(UU, XU) {
        QU.q.FromArrayToRef(UU.direction1, 0, this.direction1), QU.q.FromArrayToRef(UU.direction2, 0, this.direction2), UU.meshId && XU && (this.mesh = XU.getLastMeshById(UU.meshId)), this.useMeshNormalsForDirection = UU.useMeshNormalsForDirection
      }
    }
    class RU {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(UU) {
        this._targetStopDuration !== UU && (this._targetStopDuration = UU)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(UU) {
        this._noiseTexture !== UU && (this._noiseTexture = UU, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(UU) {
        this._attractors.push(UU)
      }
      removeAttractor(UU) {
        const XU = this._attractors.indexOf(UU); - 1 !== XU && this._attractors.splice(XU, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(UU) {
        this._animationSheetEnabled !== UU && (this._animationSheetEnabled = UU)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(UU) {
        this._isAnimationSheetEnabled != UU && (this._isAnimationSheetEnabled = UU, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(UU) {
        this._useLogarithmicDepth = UU && this.nS().qp().getCaps().fragmentDepthSupported
      }
      nS() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(UU) {
        switch (UU) {
          case RU.BLENDMODE_MULTIPLYADD:
            return;
          case RU.BLENDMODE_ADD:
            UU = 1;
            break;
          case RU.BLENDMODE_ONEONE:
            UU = 6;
            break;
          case RU.BLENDMODE_STANDARD:
            UU = 2;
            break;
          case RU.BLENDMODE_MULTIPLY:
            UU = 4;
            break;
          case RU.BLENDMODE_SUBTRACT:
            UU = 3
        }
        this._engine.setAlphaMode(UU)
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
      addEmitRateGradient(UU, XU, zU) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, UU, XU, zU), this
      }
      removeEmitRateGradient(UU) {
        return this._removeFactorGradient(this._emitRateGradients, UU), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : QU.q.Zero()
      }
      set direction1(UU) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = UU)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : QU.q.Zero()
      }
      set direction2(UU) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = UU)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : QU.q.Zero()
      }
      set minEmitBox(UU) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = UU)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : QU.q.Zero()
      }
      set maxEmitBox(UU) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = UU)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(UU) {
        this._billboardMode !== UU && (this._billboardMode = UU, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(UU) {
        this._isBillboardBased !== UU && (this._isBillboardBased = UU, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(UU) {
        this._attachImageProcessingConfiguration(UU)
      }
      _attachImageProcessingConfiguration(UU) {
        UU !== this._imageProcessingConfiguration && (!UU && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = UU)
      }
      _reset() {}
      _addFactorGradient(UU, XU, zU, yU) {
        const QU = new cU.e(XU, zU, yU);
        UU.push(QU), UU.sort(((UU, XU) => UU.gradient < XU.gradient ? -1 : UU.gradient > XU.gradient ? 1 : 0))
      }
      _removeFactorGradient(UU, XU) {
        if (!UU) return;
        let zU = 0;
        for (const cU of UU) {
          if (cU.gradient === XU) {
            UU.splice(zU, 1);
            break
          }
          zU++
        }
      }
      _removeGradientAndTexture(UU, XU, zU) {
        if (!XU) return this;
        let cU = 0;
        for (const yU of XU) {
          if (yU.gradient === UU) {
            XU.splice(cU, 1);
            break
          }
          cU++
        }
        return zU && zU.dispose(), this
      }
      constructor(UU) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = QU.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new QU.q(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = RU.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new QU.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new QU.q(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = QU.q.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new EU.e(1, 1, 1, 1), this.color2 = new EU.e(1, 1, 1, 1), this.colorDead = new EU.e(0, 0, 0, 1), this.textureMask = new EU.e(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new DU.c, this.id = UU, this.name = UU
      }
      createPointEmitter(UU, XU) {
        const zU = function(UU, XU) {
          const zU = new pU;
          return zU.direction1 = UU, zU.direction2 = XU, zU
        }(UU, XU);
        return this.particleEmitterType = zU, zU
      }
      createHemisphericEmitter() {
        const UU = function() {
          return new aU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = UU, UU
      }
      createSphereEmitter() {
        const UU = function() {
          return new tU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = UU, UU
      }
      createDirectedSphereEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new QU.q(0, 1, 0),
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QU.q(0, 1, 0);
          return new gU(UU, XU, zU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new QU.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QU.q(0, 1, 0));
        return this.particleEmitterType = UU, UU
      }
      createCylinderEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new kU.f(UU, XU, zU, cU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = UU, UU
      }
      createDirectedCylinderEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QU.q(0, 1, 0),
            yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QU.q(0, 1, 0);
          return new kU.b(UU, XU, zU, cU, yU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QU.q(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QU.q(0, 1, 0));
        return this.particleEmitterType = UU, UU
      }
      createConeEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new GU(UU, XU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = UU, UU
      }
      createDirectedConeEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QU.q(0, 1, 0),
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QU.q(0, 1, 0);
          return new BU(UU, XU, zU, cU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new QU.q(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QU.q(0, 1, 0));
        return this.particleEmitterType = UU, UU
      }
      createBoxEmitter(UU, XU, zU, cU) {
        const yU = new YU.e;
        return this.particleEmitterType = yU, this.direction1 = UU, this.direction2 = XU, this.minEmitBox = zU, this.maxEmitBox = cU, yU
      }
      createMeshEmitter() {
        const UU = function() {
          return new ZU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = UU, UU
      }
    }
    RU.BLENDMODE_ONEONE = 0, RU.BLENDMODE_STANDARD = 1, RU.BLENDMODE_ADD = 2, RU.BLENDMODE_MULTIPLY = 3, RU.BLENDMODE_MULTIPLYADD = 4, RU.BLENDMODE_SUBTRACT = -1;
    class PU {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new EU.e(0, 0, 0, 0), this.currentColor2 = new EU.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = QU.q.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class WU {
      constructor(UU) {
        this.particleSystem = UU, this.position = QU.q.Zero(), this.direction = QU.q.Zero(), this.color = new EU.e(0, 0, 0, 0), this.colorStep = new EU.e(0, 0, 0, 0), this.initialColor = new EU.e(0, 0, 0, 0), this.colorDead = new EU.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new QU.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new PU, this.id = WU._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let UU = this.age,
          XU = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === XU ? (XU = 1, UU = this._properties.randomCellOffset) : UU += this._properties.randomCellOffset);
        const zU = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let cU;
        cU = this._properties.initialSpriteCellLoop ? (0, IU.Clamp)(UU * XU % this.lifeTime / this.lifeTime) : (0, IU.Clamp)(UU * XU / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + cU * zU | 0
      }
      _inheritParticleInfoToSubEmitter(UU) {
        if (UU.particleSystem.emitter.position) {
          const XU = UU.particleSystem.emitter;
          if (XU.position.YL(this.position), UU.inheritDirection) {
            const UU = QU.l.Sp[0];
            this.direction.normalizeToRef(UU), XU.setDirection(UU, 0, Math.PI / 2)
          }
        } else {
          UU.particleSystem.emitter.YL(this.position)
        }
        this.direction.scaleToRef(UU.inheritedVelocityAmount / 2, QU.l.Sp[0]), UU.particleSystem._inheritedVelocityOffset.YL(QU.l.Sp[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const UU of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(UU)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = WU._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(UU) {
        UU.position.YL(this.position), this._properties.initialDirection ? UU._properties.initialDirection ? UU._properties.initialDirection.YL(this._properties.initialDirection) : UU._properties.initialDirection = this._properties.initialDirection.clone() : UU._properties.initialDirection = null, UU.direction.YL(this.direction), this._properties.localPosition && (UU._properties.localPosition ? UU._properties.localPosition.YL(this._properties.localPosition) : UU._properties.localPosition = this._properties.localPosition.clone()), UU.color.YL(this.color), UU.colorStep.YL(this.colorStep), UU.initialColor.YL(this.initialColor), UU.colorDead.YL(this.colorDead), UU.lifeTime = this.lifeTime, UU.age = this.age, UU._properties.randomCellOffset = this._properties.randomCellOffset, UU.size = this.size, UU.scale.YL(this.scale), UU.angle = this.angle, UU.angularSpeed = this.angularSpeed, UU.particleSystem = this.particleSystem, UU.cellIndex = this.cellIndex, UU.id = this.id, UU._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (UU._properties.currentColorGradient = this._properties.currentColorGradient, UU._properties.currentColor1.YL(this._properties.currentColor1), UU._properties.currentColor2.YL(this._properties.currentColor2)), this._properties.currentSizeGradient && (UU._properties.currentSizeGradient = this._properties.currentSizeGradient, UU._properties.currentSize1 = this._properties.currentSize1, UU._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (UU._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, UU._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, UU._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (UU._properties.currentVelocityGradient = this._properties.currentVelocityGradient, UU._properties.currentVelocity1 = this._properties.currentVelocity1, UU._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (UU._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, UU._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, UU._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (UU._properties.currentDragGradient = this._properties.currentDragGradient, UU._properties.currentDrag1 = this._properties.currentDrag1, UU._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (UU._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, UU._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, UU._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (UU.remapData && this.remapData ? UU.remapData.YL(this.remapData) : UU.remapData = new QU.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (UU._properties.randomNoiseCoordinates1 && UU._properties.randomNoiseCoordinates2 ? (UU._properties.randomNoiseCoordinates1.YL(this._properties.randomNoiseCoordinates1), UU._properties.randomNoiseCoordinates2.YL(this._properties.randomNoiseCoordinates2)) : (UU._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), UU._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), UU.metadata = this.metadata
      }
    }
    WU._Count = 0;
    var dU = zU(42195);
    class LU {
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
      constructor(UU, XU, zU, cU) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = XU, this.eY = UU, this._scene = zU, this._host = cU, this._activeTargets = [], XU._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            aX: this._getCorrectLoopMode()
          }, this._animation.dataType === dU.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = QU.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const UU = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, UU)
        }
        if (this.eY instanceof Array) {
          let UU = 0;
          for (const XU of this.eY) this._preparePath(XU, UU), this._getOriginalValues(UU), UU++;
          this._targetIsArray = !0
        } else this._preparePath(this.eY), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const yU = XU.getEvents();
        if (yU && yU.length > 0)
          for (const QU of yU) this._events.push(QU._clone());
        this._enableBlending = UU && UU.animationPropertiesOverride ? UU.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = this._animation.targetPropertyPath;
        if (zU.length > 1) {
          let cU = UU;
          for (let UU = 0; UU < zU.length - 1; UU++) {
            const XU = zU[UU];
            if (cU = cU[XU], void 0 === cU) throw new Error(`Invalid property (${XU}) in property path (${zU.join(".")})`)
          }
          this._targetPath = zU[zU.length - 1], this._activeTargets[XU] = cU
        } else this._targetPath = zU[0], this._activeTargets[XU] = UU;
        if (void 0 === this._activeTargets[XU][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${zU.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.eY instanceof Array) {
            let UU = 0;
            for (const XU of this.eY) void 0 !== this._originalValue[UU] && this._setValue(XU, this._activeTargets[UU], this._originalValue[UU], -1, UU), UU++
          } else void 0 !== this._originalValue[0] && this._setValue(this.eY, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let UU = 0; UU < this._events.length; UU++) this._events[UU].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const UU = this._animation.runtimeAnimations.indexOf(this);
        UU > -1 && this._animation.runtimeAnimations.splice(UU, 1)
      }
      setValue(UU, XU) {
        if (this._targetIsArray)
          for (let zU = 0; zU < this.eY.length; zU++) {
            const cU = this.eY[zU];
            this._setValue(cU, this._activeTargets[zU], UU, XU, zU)
          } else this._setValue(this.eY, this._directTarget, UU, XU, 0)
      }
      _getOriginalValues() {
        let UU, XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const zU = this._activeTargets[XU];
        if (dU.b.InheritOriginalValueFromActiveAnimations) {
          const UU = this._scene._activeAnimatables;
          for (let cU = 0; cU < UU.length; cU++) {
            const yU = UU[cU]._runtimeAnimations;
            for (let UU = 0; UU < yU.length; UU++) {
              const cU = yU[UU];
              if (cU !== this && cU._targetPath === this._targetPath)
                for (let UU = 0; UU < cU._activeTargets.length; UU++)
                  if (cU._activeTargets[UU] === zU && void 0 !== cU._originalValue[UU]) return void(cU._originalValue[UU] && cU._originalValue[UU].clone ? this._originalValue[XU] = cU._originalValue[UU].clone() : this._originalValue[XU] = cU._originalValue[UU])
            }
          }
        }
        UU = zU.getLocalMatrix && "_matrix" === this._targetPath ? zU.getLocalMatrix() : zU[this._targetPath], UU && UU.clone ? this._originalValue[XU] = UU.clone() : this._originalValue[XU] = UU
      }
      _registerTargetForLateAnimationBinding(UU, XU) {
        const zU = UU.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(zU), zU._lateAnimationHolders || (zU._lateAnimationHolders = {}), zU._lateAnimationHolders[UU.targetPath] || (zU._lateAnimationHolders[UU.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: XU
        }), UU.isAdditive ? (zU._lateAnimationHolders[UU.targetPath].additiveAnimations.push(UU), zU._lateAnimationHolders[UU.targetPath].totalAdditiveWeight += UU.weight) : (zU._lateAnimationHolders[UU.targetPath].animations.push(UU), zU._lateAnimationHolders[UU.targetPath].totalWeight += UU.weight)
      }
      _setValue(UU, XU, zU, cU, yU) {
        const AU = this._scene._animationWrites,
          FU = this._scene._animationWriteCount++;
        let oU = AU[FU];
        if (oU || (oU = AU[FU] = {
            runtimeAnimation: this,
            target: UU,
            weight: cU,
            additive: !1,
            blendingFactor: 1,
            Yt: !1
          }), oU.runtimeAnimation = this, oU.target = UU, oU.weight = cU, oU.additive = this.isAdditive, oU.Yt = !1, this._currentActiveTarget = XU, this._weight = cU, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const UU = XU[this._targetPath];
            UU.clone ? this._originalBlendValue = UU.clone() : this._originalBlendValue = UU
          }
          this._originalBlendValue.m ? dU.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? QU.e.DecomposeLerpToRef(this._originalBlendValue, zU, this._blendingFactor, this._currentValue) : this._currentValue = QU.e.DecomposeLerp(this._originalBlendValue, zU, this._blendingFactor) : this._currentValue ? QU.e.LerpToRef(this._originalBlendValue, zU, this._blendingFactor, this._currentValue) : this._currentValue = QU.e.Lerp(this._originalBlendValue, zU, this._blendingFactor) : this._currentValue = dU.b._UniversalLerp(this._originalBlendValue, zU, this._blendingFactor);
          const cU = UU && UU.animationPropertiesOverride ? UU.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          oU.blendingFactor = this._blendingFactor, this._blendingFactor += cU
        } else oU.blendingFactor = 1, this._currentValue ? this._currentValue.YL ? this._currentValue.YL(zU) : this._currentValue = zU : this._currentValue = zU?.clone ? zU.clone() : zU; - 1 !== cU ? this._registerTargetForLateAnimationBinding(this, this._originalValue[yU]) : this._animationState.aX === dU.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[yU], XU[this._targetPath]) : XU[this._targetPath] = this._originalValue[yU] + this._currentValue : XU[this._targetPath] = this._currentValue, UU.OzU && UU.OzU(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.eY && this.eY.animationPropertiesOverride) {
          return "MorphTarget" === this.eY.getClassName?.() && null == this.eY._animationPropertiesOverride ? this._animation.aX : this.eY.animationPropertiesOverride.aX
        }
        return this._animation.aX
      }
      goToFrame(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const zU = this._animation.getKeys();
        UU < zU[0].frame ? UU = zU[0].frame : UU > zU[zU.length - 1].frame && (UU = zU[zU.length - 1].frame);
        const cU = this._events;
        if (cU.length)
          for (let QU = 0; QU < cU.length; QU++) cU[QU].onlyOnce || (cU[QU].isDone = cU[QU].frame < UU);
        this._currentFrame = UU;
        const yU = this._animation._interpolate(UU, this._animationState);
        this.setValue(yU, XU)
      }
      _prepareForSpeedRatioChange(UU) {
        const XU = this._previousElapsedTime * (this._animation.framePerSecond * UU) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - XU
      }
      animate(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const AU = this._animation,
          FU = AU.targetPropertyPath;
        if (!FU || FU.length < 1) return this._stopped = !0, !1;
        let oU, DU = !0;
        const EU = this._events;
        let YU;
        if (this._coreRuntimeAnimation) YU = zU - XU, oU = this._coreRuntimeAnimation.currentFrame, this._currentFrame = oU, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let QU;
          (XU < this._minFrame || XU > this._maxFrame) && (XU = this._minFrame), (zU < this._minFrame || zU > this._maxFrame) && (zU = this._maxFrame), YU = zU - XU;
          let FU = UU * (AU.framePerSecond * yU) / 1e3 + this._absoluteFrameOffset,
            NU = 0,
            IU = !1;
          const pU = cU && this._animationState.aX === dU.b.ANIMATIONLOOPMODE_YOYO;
          if (pU) {
            const UU = (FU - XU) / YU,
              zU = Math.sin(UU * Math.PI);
            FU = Math.abs(zU) * YU + XU;
            const cU = zU >= 0 ? 1 : -1;
            this._yoyoDirection !== cU && (IU = !0), this._yoyoDirection = cU
          }
          if (this._previousElapsedTime = UU, this._previousAbsoluteFrame = FU, !cU && zU >= XU && (FU >= YU && yU > 0 || FU <= 0 && yU < 0)) DU = !1, NU = AU.evaluate(zU);
          else if (!cU && XU >= zU && (FU <= YU && yU < 0 || FU >= 0 && yU > 0)) DU = !1, NU = AU.evaluate(XU);
          else if (this._animationState.aX !== dU.b.ANIMATIONLOOPMODE_CYCLE) {
            const UU = zU.toString() + XU.toString();
            if (!this._offsetsCache[UU]) {
              this._animationState.repeatCount = 0, this._animationState.aX = dU.b.ANIMATIONLOOPMODE_CYCLE;
              const cU = AU._interpolate(XU, this._animationState),
                yU = AU._interpolate(zU, this._animationState);
              switch (this._animationState.aX = this._getCorrectLoopMode(), AU.dataType) {
                case dU.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[UU] = yU - cU;
                  break;
                case dU.b.ANIMATIONTYPE_QUATERNION:
                case dU.b.ANIMATIONTYPE_VECTOR3:
                case dU.b.ANIMATIONTYPE_VECTOR2:
                case dU.b.ANIMATIONTYPE_SIZE:
                case dU.b.ANIMATIONTYPE_COLOR3:
                case dU.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[UU] = yU.subtract(cU)
              }
              this._highLimitsCache[UU] = yU
            }
            NU = this._highLimitsCache[UU], QU = this._offsetsCache[UU]
          }
          if (void 0 === QU) switch (AU.dataType) {
            case dU.b.ANIMATIONTYPE_FLOAT:
              QU = 0;
              break;
            case dU.b.ANIMATIONTYPE_QUATERNION:
              QU = dU.m;
              break;
            case dU.b.ANIMATIONTYPE_VECTOR3:
              QU = dU.r;
              break;
            case dU.b.ANIMATIONTYPE_VECTOR2:
              QU = dU.q;
              break;
            case dU.b.ANIMATIONTYPE_SIZE:
              QU = dU.n;
              break;
            case dU.b.ANIMATIONTYPE_COLOR3:
              QU = dU.j;
              break;
            case dU.b.ANIMATIONTYPE_COLOR4:
              QU = dU.l
          }
          const aU = this._host ? this._host.syncRoot : null;
          let tU, gU = this._playbackFrames,
            kU = !1;
          if (aU) {
            const UU = aU.toFrame - aU.fromFrame,
              zU = aU.masterFrame,
              cU = (zU - aU.fromFrame) / UU;
            oU = XU + YU * cU;
            const yU = aU.getAnimations()[0];
            if (yU && 0 !== UU) {
              const UU = YU * cU,
                XU = yU._playbackTo - yU._playbackFrom;
              if (0 !== XU && yU._playbackFrom <= aU.fromFrame && yU._playbackTo >= aU.toFrame) {
                gU = YU * Math.round((yU._playbackFrames - (yU._currentFrame - yU._playbackFrom)) / XU) + UU
              } else kU = (zU - this._playbackSyncMasterFrame) * (yU._playbackFrames - this._playbackSyncMasterPlayed) < 0, gU = UU;
              kU = kU || yU._playbackJumped, this._playbackSyncMasterPlayed = yU._playbackFrames, this._playbackSyncMasterFrame = zU
            }
          } else oU = FU > 0 && XU > zU || FU < 0 && XU < zU ? DU && 0 !== YU ? zU + FU % YU : XU : DU && 0 !== YU ? XU + FU % YU : zU;
          if (!pU && (yU > 0 && this.currentFrame > oU || yU < 0 && this.currentFrame < oU) || pU && IU) {
            this._onLoop();
            for (let UU = 0; UU < EU.length; UU++) EU[UU].onlyOnce || (EU[UU].isDone = !1);
            this._animationState.key = yU > 0 ? 0 : AU.getKeys().length - 1
          }
          if (this._currentFrame = oU, this._animationState.repeatCount = 0 === YU ? 0 : FU / YU | 0, this._animationState.highLimitValue = NU, this._animationState.offsetValue = QU, this._playbackFrom = XU, this._playbackTo = zU, this._playbackJumped = kU, this._playbackSyncRoot = aU, aU) tU = gU;
          else if (DU) tU = pU ? oU === XU && FU === zU ? YU : oU - XU : FU;
          else {
            const UU = 0 !== YU ? Math.floor(this._playbackFrames / YU) : 0;
            tU = (oU === zU ? UU + 1 : UU) * YU
          }
          this._playbackFrames = tU, this._playbackProgress = this._animationState.aX === dU.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? YU : tU
        }
        const NU = AU._interpolate(oU, this._animationState);
        if (this.setValue(NU, QU), EU.length)
          for (let IU = 0; IU < EU.length; IU++)
            if (YU >= 0 && oU >= EU[IU].frame && EU[IU].frame >= XU || YU < 0 && oU <= EU[IU].frame && EU[IU].frame <= XU) {
              const UU = EU[IU];
              UU.isDone || (UU.onlyOnce && (EU.splice(IU, 1), IU--), UU.isDone = !0, UU.action(oU))
            } return DU || (this._stopped = !0), DU
      }
    }
    var eU = zU(41010);
    class CU {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(UU) {
        this._weight = -1 !== UU ? Math.min(Math.max(UU, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(UU) {
        for (let XU = 0; XU < this._runtimeAnimations.length; XU++) {
          this._runtimeAnimations[XU]._prepareForSpeedRatioChange(UU)
        }
        this._speedRatio = UU, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          FU = arguments.length > 6 ? arguments[6] : void 0,
          oU = arguments.length > 7 ? arguments[7] : void 0,
          DU = arguments.length > 8 ? arguments[8] : void 0,
          EU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          YU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = XU, this.fromFrame = zU, this.toFrame = cU, this.loopAnimation = QU, this.onAnimationEnd = FU, this.onAnimationLoop = DU, this.isAdditive = EU, this.playOrder = YU, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.dY = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new yU.e, this.onAnimationLoopObservable = new yU.e, this._scene = UU, oU && this.appendAnimations(XU, oU), this._speedRatio = AU, UU._activeAnimatables.push(this)
      }
      syncWith(UU) {
        if (this._syncRoot = UU, UU) {
          const UU = this._scene._activeAnimatables.indexOf(this);
          UU > -1 && (this._scene._activeAnimatables.splice(UU, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(UU, XU) {
        for (let zU = 0; zU < XU.length; zU++) {
          const cU = XU[zU],
            yU = new LU(UU, cU, this._scene, this);
          yU._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(yU)
        }
      }
      getAnimationByTargetProperty(UU) {
        const XU = this._runtimeAnimations;
        for (let zU = 0; zU < XU.length; zU++)
          if (XU[zU].animation.targetProperty === UU) return XU[zU].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(UU) {
        const XU = this._runtimeAnimations;
        for (let zU = 0; zU < XU.length; zU++)
          if (XU[zU].animation.targetProperty === UU) return XU[zU];
        return null
      }
      reset() {
        const UU = this._runtimeAnimations;
        for (let XU = 0; XU < UU.length; XU++) UU[XU].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(UU) {
        const XU = this._runtimeAnimations;
        for (let zU = 0; zU < XU.length; zU++) XU[zU].animation.enableBlending = !0, XU[zU].animation.blendingSpeed = UU
      }
      disableBlending() {
        const UU = this._runtimeAnimations;
        for (let XU = 0; XU < UU.length; XU++) UU[XU].animation.enableBlending = !1
      }
      goToFrame(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this._runtimeAnimations;
        if (zU[0]) {
          const XU = zU[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? zU[0].currentFrame;
          const cU = 0 === this.speedRatio ? 0 : (UU - this._frameToSyncFromJump) / XU * 1e3 / this.speedRatio;
          this._manualJumpDelay = -cU
        }
        for (let cU = 0; cU < zU.length; cU++) zU[cU].goToFrame(UU, XU ? this._weight : -1);
        this._goToFrame = UU
      }
      get paused() {
        return this.dY
      }
      pause() {
        this.dY || (this.dY = !0)
      }
      restart() {
        this.dY = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (UU || XU) {
          const yU = this._scene._activeAnimatables.indexOf(this);
          if (yU > -1) {
            const QU = this._runtimeAnimations;
            for (let zU = QU.length - 1; zU >= 0; zU--) {
              const cU = QU[zU];
              UU && cU.animation.name != UU || (XU && !XU(cU.target) || (cU.dispose(), QU.splice(zU, 1)))
            }
            0 == QU.length && (zU || this._scene._activeAnimatables.splice(yU, 1), cU || this._raiseOnAnimationEnd())
          }
        } else {
          const UU = this._scene._activeAnimatables.indexOf(this);
          if (UU > -1) {
            zU || this._scene._activeAnimatables.splice(UU, 1);
            const XU = this._runtimeAnimations;
            for (let UU = 0; UU < XU.length; UU++) XU[UU].dispose();
            this._runtimeAnimations.length = 0, cU || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((UU => {
          this.onAnimationEndObservable.add((() => {
            UU(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(UU) {
        if (this.dY) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = UU), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = UU, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += UU - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !CU.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let XU = !1;
        const zU = this._runtimeAnimations;
        let cU;
        for (cU = 0; cU < zU.length; cU++) {
          const yU = zU[cU].animate(UU - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          XU = XU || yU
        }
        if (this.animationStarted = XU, !XU) {
          if (this.disposeOnEnd)
            for (cU = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(cU, 1), cU = 0; cU < zU.length; cU++) zU[cU].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return XU
      }
    }

    function wU(UU) {
      if (0 === UU.totalWeight && 0 === UU.totalAdditiveWeight) return UU.originalValue;
      let XU = 1;
      const zU = QU.l.Sp[0],
        cU = QU.l.Sp[1],
        yU = QU.l.Quaternion[0];
      let AU = 0;
      const FU = UU.animations[0],
        oU = UU.originalValue;
      let DU, EU = !1;
      if (UU.totalWeight < 1) DU = 1 - UU.totalWeight, oU.decompose(cU, yU, zU);
      else {
        if (AU = 1, XU = UU.totalWeight, DU = FU.weight / XU, 1 == DU) {
          if (!UU.totalAdditiveWeight) return FU.currentValue;
          EU = !0
        }
        FU.currentValue.decompose(cU, yU, zU)
      }
      if (!EU) {
        cU.scaleInPlace(DU), zU.scaleInPlace(DU), yU.scaleInPlace(DU);
        for (let FU = AU; FU < UU.animations.length; FU++) {
          const AU = UU.animations[FU];
          if (0 === AU.weight) continue;
          DU = AU.weight / XU;
          const oU = QU.l.Sp[2],
            EU = QU.l.Sp[3],
            YU = QU.l.Quaternion[1];
          AU.currentValue.decompose(EU, YU, oU), EU.scaleAndAddToRef(DU, cU), YU.scaleAndAddToRef(QU.f.Dot(yU, YU) > 0 ? DU : -DU, yU), oU.scaleAndAddToRef(DU, zU)
        }
        yU.normalize()
      }
      for (let NU = 0; NU < UU.additiveAnimations.length; NU++) {
        const XU = UU.additiveAnimations[NU];
        if (0 === XU.weight) continue;
        const AU = QU.l.Sp[2],
          FU = QU.l.Sp[3],
          oU = QU.l.Quaternion[1];
        XU.currentValue.decompose(FU, oU, AU), FU.multiplyToRef(cU, FU), QU.q.LerpToRef(cU, FU, XU.weight, cU), yU.multiplyToRef(oU, oU), QU.f.SlerpToRef(yU, oU, XU.weight, yU), AU.scaleAndAddToRef(XU.weight, zU)
      }
      const YU = FU ? FU._animationState.workValue : QU.l.Matrix[0].clone();
      return QU.e.ComposeToRef(cU, yU, zU, YU), YU
    }

    function qU(UU, XU) {
      if (0 === UU.totalWeight && 0 === UU.totalAdditiveWeight) return XU;
      const zU = UU.animations[0],
        cU = UU.originalValue;
      let yU = XU;
      if (0 === UU.totalWeight && UU.totalAdditiveWeight > 0) yU.YL(cU);
      else if (1 === UU.animations.length) {
        if (QU.f.SlerpToRef(cU, zU.currentValue, Math.min(1, UU.totalWeight), yU), 0 === UU.totalAdditiveWeight) return yU
      } else if (UU.animations.length > 1) {
        let zU, AU, FU = 1;
        if (UU.totalWeight < 1) {
          const XU = 1 - UU.totalWeight;
          zU = [], AU = [], zU.push(cU), AU.push(XU)
        } else {
          if (2 === UU.animations.length && (QU.f.SlerpToRef(UU.animations[0].currentValue, UU.animations[1].currentValue, UU.animations[1].weight / UU.totalWeight, XU), 0 === UU.totalAdditiveWeight)) return XU;
          zU = [], AU = [], FU = UU.totalWeight
        }
        for (let XU = 0; XU < UU.animations.length; XU++) {
          const cU = UU.animations[XU];
          zU.push(cU.currentValue), AU.push(cU.weight / FU)
        }
        let oU = 0;
        for (let UU = 0; UU < zU.length;) UU ? (oU += AU[UU], QU.f.SlerpToRef(yU, zU[UU], AU[UU] / oU, yU), UU++) : (QU.f.SlerpToRef(zU[UU], zU[UU + 1], AU[UU + 1] / (AU[UU] + AU[UU + 1]), XU), yU = XU, oU = AU[UU] + AU[UU + 1], UU += 2)
      }
      for (let AU = 0; AU < UU.additiveAnimations.length; AU++) {
        const XU = UU.additiveAnimations[AU];
        0 !== XU.weight && (yU.multiplyToRef(XU.currentValue, QU.l.Quaternion[0]), QU.f.SlerpToRef(yU, QU.l.Quaternion[0], XU.weight, yU))
      }
      return yU
    }

    function OU(UU, XU) {
      XU && (XU.prototype.copyAnimationRange = function(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new dU.b(this.name, "_matrix", UU.animations[0].framePerSecond, dU.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const QU = UU.animations[0].getRange(XU);
        if (!QU) return !1;
        const AU = QU.from,
          FU = QU.to,
          oU = UU.animations[0].getKeys(),
          DU = UU.length,
          EU = UU.getParent(),
          YU = this.getParent(),
          NU = cU && EU && DU && this.length && DU !== this.length,
          IU = NU && YU && EU ? YU.length / EU.length : 1,
          pU = cU && !YU && yU && (1 !== yU.x || 1 !== yU.y || 1 !== yU.z),
          aU = this.animations[0].getKeys();
        let tU, gU, kU;
        for (let GU = 0, BU = oU.length; GU < BU; GU++) tU = oU[GU], tU.frame >= AU && tU.frame <= FU && (cU ? (kU = tU.value.clone(), NU ? (gU = kU.getTranslation(), kU.setTranslation(gU.scaleInPlace(IU))) : pU && yU ? (gU = kU.getTranslation(), kU.setTranslation(gU.multiplyInPlace(yU))) : kU = tU.value) : kU = tU.value, aU.push({
          frame: tU.frame + zU,
          value: kU
        }));
        return this.animations[0].createRange(XU, AU + zU, FU + zU), !0
      }), UU && (UU.prototype._animate = function(UU) {
        const XU = this._animationWrites,
          zU = this._animationWriteCount;
        let cU = 0;
        for (let QU = this._animationStepWriteCount; QU < zU; QU++) {
          const UU = XU[QU];
          UU.Yt && -1 === UU.weight || (UU.Yt = !0, XU[QU] = XU[cU], XU[cU] = UU, cU++)
        }
        for (let QU = cU; QU < zU; QU++) {
          const UU = XU[QU];
          UU.runtimeAnimation = null, UU.target = null
        }
        if (this._animationWriteCount = cU, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const yU = eU.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = yU
        }
        this.deltaTime = void 0 !== UU ? UU : this.useConstantAnimationDeltaTime ? 16 : (yU - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = yU;
        const AU = this._activeAnimatables;
        if (0 === AU.length) return;
        this._animationTime += this.deltaTime;
        const FU = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let QU = 0; QU < AU.length; QU++) {
          const UU = AU[QU];
          !UU._animate(FU) && UU.disposeOnEnd && QU--
        }! function(UU) {
          if (UU._registeredForLateAnimationBindings.length) {
            for (let XU = 0; XU < UU._registeredForLateAnimationBindings.length; XU++) {
              const zU = UU._registeredForLateAnimationBindings.data[XU];
              for (const UU in zU._lateAnimationHolders) {
                const XU = zU._lateAnimationHolders[UU],
                  cU = XU.animations[0],
                  yU = XU.originalValue;
                if (void 0 === yU || null === yU) continue;
                const AU = dU.b.AllowMatrixDecomposeForInterpolation && yU.m;
                let FU = zU[UU];
                if (AU) FU = wU(XU);
                else if (void 0 !== yU.w) FU = qU(XU, FU || QU.f.Identity());
                else {
                  let UU = 0,
                    zU = 1;
                  const QU = cU && cU._animationState.aX === dU.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (XU.totalWeight < 1) FU = QU ? yU.clone ? yU.clone() : yU : cU && yU.scale ? yU.scale(1 - XU.totalWeight) : cU ? yU * (1 - XU.totalWeight) : yU.clone ? yU.clone() : yU;
                  else if (cU) {
                    zU = XU.totalWeight;
                    const AU = cU.weight / zU;
                    FU = 1 !== AU ? cU.currentValue.scale ? cU.currentValue.scale(AU) : cU.currentValue * AU : (XU.animations.length > 1 || XU.additiveAnimations.length > 0) && cU.currentValue.clone ? cU.currentValue.clone() : cU.currentValue, QU && (FU.addToRef ? FU.addToRef(yU, FU) : FU += yU), UU = 1
                  }
                  for (let cU = UU; cU < XU.animations.length; cU++) {
                    const UU = XU.animations[cU],
                      yU = UU.weight / zU;
                    yU && (UU.currentValue.scaleAndAddToRef ? UU.currentValue.scaleAndAddToRef(yU, FU) : FU += UU.currentValue * yU)
                  }
                  for (let cU = 0; cU < XU.additiveAnimations.length; cU++) {
                    const UU = XU.additiveAnimations[cU],
                      zU = UU.weight;
                    zU && (UU.currentValue.scaleAndAddToRef ? UU.currentValue.scaleAndAddToRef(zU, FU) : FU += UU.currentValue * zU)
                  }
                }
                zU[UU] = FU
              }
              zU._lateAnimationHolders = {}
            }
            UU._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, UU.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((UU, XU) => UU.playOrder - XU.playOrder))
      }, UU.prototype.beginWeightedAnimation = function(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 ? arguments[7] : void 0,
          oU = arguments.length > 8 ? arguments[8] : void 0,
          DU = arguments.length > 9 ? arguments[9] : void 0,
          EU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const YU = this.beginAnimation(UU, XU, zU, yU, QU, AU, FU, !1, oU, DU, EU);
        return YU.weight = cU, YU
      }, UU.prototype.beginAnimation = function(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          QU = arguments.length > 5 ? arguments[5] : void 0,
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oU = arguments.length > 8 ? arguments[8] : void 0,
          DU = arguments.length > 9 ? arguments[9] : void 0,
          EU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (yU < 0) {
          const UU = XU;
          XU = zU, zU = UU, yU = -yU
        }
        XU > zU && (yU = -yU), FU && this.stopAnimation(UU, void 0, oU), AU || (AU = new CU(this, UU, XU, zU, cU, yU, QU, void 0, DU, EU));
        const YU = !oU || oU(UU);
        if (UU.animations && YU && AU.appendAnimations(UU, UU.animations), UU.getAnimatables) {
          const EU = UU.getAnimatables();
          for (let UU = 0; UU < EU.length; UU++) this.beginAnimation(EU[UU], XU, zU, cU, yU, QU, AU, FU, oU, DU)
        }
        return AU.reset(), AU
      }, UU.prototype.beginHierarchyAnimation = function(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 ? arguments[7] : void 0,
          oU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          DU = arguments.length > 9 ? arguments[9] : void 0,
          EU = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const YU = UU.getDescendants(XU),
          NU = [];
        NU.push(this.beginAnimation(UU, zU, cU, yU, QU, AU, FU, oU, DU, void 0, EU));
        for (const IU of YU) NU.push(this.beginAnimation(IU, zU, cU, yU, QU, AU, FU, oU, DU, void 0, EU));
        return NU
      }, UU.prototype.beginDirectAnimation = function(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (QU < 0) {
          const UU = zU;
          zU = cU, cU = UU, QU = -QU
        }
        zU > cU && (QU = -QU);
        return new CU(this, UU, zU, cU, yU, QU, arguments.length > 6 ? arguments[6] : void 0, XU, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, UU.prototype.beginDirectHierarchyAnimation = function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        let DU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const EU = UU.getDescendants(XU),
          YU = [];
        YU.push(this.beginDirectAnimation(UU, zU, cU, yU, QU, AU, FU, oU, DU));
        for (const NU of EU) YU.push(this.beginDirectAnimation(NU, zU, cU, yU, QU, AU, FU, oU, DU));
        return YU
      }, UU.prototype.getAnimatableByTarget = function(UU) {
        for (let XU = 0; XU < this._activeAnimatables.length; XU++)
          if (this._activeAnimatables[XU].target === UU) return this._activeAnimatables[XU];
        return null
      }, UU.prototype.getAllAnimatablesByTarget = function(UU) {
        const XU = [];
        for (let zU = 0; zU < this._activeAnimatables.length; zU++) this._activeAnimatables[zU].target === UU && XU.push(this._activeAnimatables[zU]);
        return XU
      }, UU.prototype.stopAnimation = function(UU, XU, zU) {
        const cU = this.getAllAnimatablesByTarget(UU);
        for (const yU of cU) yU.stop(XU, zU)
      }, UU.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let UU = 0; UU < this._activeAnimatables.length; UU++) this._activeAnimatables[UU].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const UU of this.animationGroups) UU.stop()
      })
    }
    CU.ProcessPausedAnimatables = !1;
    var SU, rU = zU(37827),
      uU = zU(41314),
      fU = zU(40989);
    class iU extends uU.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(UU) {
        (UU.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.YL(UU), this._markAsDirtyAndDecompose())
      }
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(UU, XU.nS(), !1), this.name = UU, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = XU, this._localMatrix = cU?.clone() ?? QU.e.Identity(), this._restMatrix = yU ?? this._localMatrix.clone(), this._bindMatrix = AU ?? this._localMatrix.clone(), this._index = FU, this._absoluteMatrix = new QU.e, this._absoluteBindMatrix = new QU.e, this._absoluteInverseBindMatrix = new QU.e, this._finalMatrix = new QU.e, XU.bones.push(this), this.setParent(zU, !1), this._updateAbsoluteBindMatrices()
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
      set parent(UU) {
        this.setParent(UU)
      }
      setParent(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== UU) {
          if (this.parent) {
            const UU = this.parent.children.indexOf(this); - 1 !== UU && this.parent.children.splice(UU, 1)
          }
          this._parentNode = UU, this.parent && this.parent.children.push(this), XU && this._updateAbsoluteBindMatrices(), this.OzU()
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
      setRestMatrix(UU) {
        this._restMatrix.YL(UU)
      }
      setRestPose(UU) {
        this.setRestMatrix(UU)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(UU) {
        this.eUU(UU)
      }
      setBindPose(UU) {
        this.setBindMatrix(UU)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const UU = QU.l.Sp[0],
            XU = QU.l.Quaternion[0],
            zU = QU.l.Sp[1];
          this.getRestMatrix().decompose(UU, XU, zU), this._linkedTransformNode.position.YL(zU), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? QU.f.Identity(), this._linkedTransformNode.rotationQuaternion.YL(XU), this._linkedTransformNode.RY.YL(UU)
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
      linkTransformNode(UU) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = UU, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.JXU
      }
      set position(UU) {
        this._decompose(), this.JXU.YL(UU), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(UU) {
        this.setRotation(UU)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(UU) {
        this.setRotationQuaternion(UU)
      }
      get RY() {
        return this.getScale()
      }
      set RY(UU) {
        this.setScale(UU)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = QU.q.Zero(), this._localRotation = QU.f.Zero(), this.JXU = QU.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.JXU))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, QU.e.ComposeToRef(this._localScaling, this._localRotation, this.JXU, this._localMatrix)) : this._needToCompose = !1)
      }
      eUU(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.YL(UU), XU && this._updateAbsoluteBindMatrices(), zU ? this._matrix = UU : this.OzU()
      }
      _updateAbsoluteBindMatrices(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (UU || (UU = this._bindMatrix), this.parent ? UU.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.YL(UU), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), XU)
          for (let zU = 0; zU < this.children.length; zU++) this.children[zU]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      OzU() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.OzU(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.OzU(), this._needToDecompose = !0
      }
      _updatePosition(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yU = this.getLocalMatrix();
        if (0 == XU) cU ? (yU.addAtIndex(12, UU.x), yU.addAtIndex(13, UU.y), yU.addAtIndex(14, UU.z)) : yU.setTranslationFromFloats(UU.x, UU.y, UU.z);
        else {
          const XU = iU._TmpMats[0],
            AU = iU._TmpVecs[0];
          this.parent ? (XU.YL(this.parent.getAbsoluteMatrix()), zU && XU.multiplyToRef(zU.getWorldMatrix(), XU)) : QU.e.IdentityToRef(XU), cU && XU.setTranslationFromFloats(0, 0, 0), XU.invert(), QU.q.TransformCoordinatesToRef(UU, XU, AU), cU ? (yU.addAtIndex(12, AU.x), yU.addAtIndex(13, AU.y), yU.addAtIndex(14, AU.z)) : yU.setTranslationFromFloats(AU.x, AU.y, AU.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(UU, XU, zU, !0)
      }
      setPosition(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(UU, XU, zU, !1)
      }
      setAbsolutePosition(UU, XU) {
        this.setPosition(UU, 1, XU)
      }
      scale(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yU = this.getLocalMatrix(),
          AU = iU._TmpMats[0];
        QU.e.ScalingToRef(UU, XU, zU, AU), AU.multiplyToRef(yU, yU), AU.invert();
        for (const QU of this.children) {
          const cU = QU.getLocalMatrix();
          cU.multiplyToRef(AU, cU), cU.multiplyAtIndex(12, UU), cU.multiplyAtIndex(13, XU), cU.multiplyAtIndex(14, zU), QU._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), cU)
          for (const QU of this.children) QU.scale(UU, XU, zU, cU)
      }
      setScale(UU) {
        this._decompose(), this._localScaling.YL(UU), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(UU) {
        this._decompose(), UU.YL(this._localScaling)
      }
      setYawPitchRoll(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === cU) {
          const AU = iU._TmpQuat;
          return QU.f.RotationYawPitchRollToRef(UU, XU, zU, AU), void this.setRotationQuaternion(AU, cU, yU)
        }
        const AU = iU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(AU, yU)) return;
        const FU = iU._TmpMats[1];
        QU.e.RotationYawPitchRollToRef(UU, XU, zU, FU), AU.multiplyToRef(FU, FU), this._rotateWithMatrix(FU, cU, yU)
      }
      rotate(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        const yU = iU._TmpMats[0];
        yU.setTranslationFromFloats(0, 0, 0), QU.e.RotationAxisToRef(UU, XU, yU), this._rotateWithMatrix(yU, zU, cU)
      }
      setAxisAngle(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === zU) {
          const yU = iU._TmpQuat;
          return QU.f.RotationAxisToRef(UU, XU, yU), void this.setRotationQuaternion(yU, zU, cU)
        }
        const yU = iU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yU, cU)) return;
        const AU = iU._TmpMats[1];
        QU.e.RotationAxisToRef(UU, XU, AU), yU.multiplyToRef(AU, AU), this._rotateWithMatrix(AU, zU, cU)
      }
      setRotation(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(UU.y, UU.x, UU.z, XU, zU)
      }
      setRotationQuaternion(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === XU) return this._decompose(), this._localRotation.YL(UU), void this._markAsDirtyAndCompose();
        const cU = iU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(cU, zU)) return;
        const yU = iU._TmpMats[1];
        QU.e.FromQuaternionToRef(UU, yU), cU.multiplyToRef(yU, yU), this._rotateWithMatrix(yU, XU, zU)
      }
      setRotationMatrix(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === XU) {
          const cU = iU._TmpQuat;
          return QU.f.FromRotationMatrixToRef(UU, cU), void this.setRotationQuaternion(cU, XU, zU)
        }
        const cU = iU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(cU, zU)) return;
        const yU = iU._TmpMats[1];
        yU.YL(UU), cU.multiplyToRef(UU, yU), this._rotateWithMatrix(yU, XU, zU)
      }
      _rotateWithMatrix(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = this.getLocalMatrix(),
          yU = cU.m[12],
          QU = cU.m[13],
          AU = cU.m[14],
          FU = this.getParent(),
          oU = iU._TmpMats[3],
          DU = iU._TmpMats[4];
        FU && 1 == XU ? (zU ? (oU.YL(zU.getWorldMatrix()), FU.getAbsoluteMatrix().multiplyToRef(oU, oU)) : oU.YL(FU.getAbsoluteMatrix()), DU.YL(oU), DU.invert(), cU.multiplyToRef(oU, cU), cU.multiplyToRef(UU, cU), cU.multiplyToRef(DU, cU)) : 1 == XU && zU ? (oU.YL(zU.getWorldMatrix()), DU.YL(oU), DU.invert(), cU.multiplyToRef(oU, cU), cU.multiplyToRef(UU, cU), cU.multiplyToRef(DU, cU)) : cU.multiplyToRef(UU, cU), cU.setTranslationFromFloats(yU, QU, AU), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(UU, XU) {
        const zU = iU._TmpMats[2];
        return UU.YL(this.getAbsoluteMatrix()), XU ? (UU.multiplyToRef(XU.getWorldMatrix(), UU), QU.e.ScalingToRef(XU.RY.x, XU.RY.y, XU.RY.z, zU)) : QU.e.IdentityToRef(zU), UU.invert(), !isNaN(UU.m[0]) && (zU.multiplyAtIndex(0, this._scalingDeterminant), UU.multiplyToRef(zU, UU), !0)
      }
      wG() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = QU.q.Zero();
        return this.getPositionToRef(UU, XU, zU), zU
      }
      getPositionToRef() {
        let UU = arguments.length > 1 ? arguments[1] : void 0,
          XU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const UU = this.getLocalMatrix();
          XU.x = UU.m[12], XU.y = UU.m[13], XU.z = UU.m[14]
        } else {
          const zU = iU._TmpMats[0].YL(this.getAbsoluteMatrix());
          UU && zU.multiplyToRef(UU.getWorldMatrix(), zU), XU.x = zU.m[12], XU.y = zU.m[13], XU.z = zU.m[14]
        }
      }
      getAbsolutePosition() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const XU = QU.q.Zero();
        return this.getPositionToRef(1, UU, XU), XU
      }
      getAbsolutePositionToRef(UU, XU) {
        this.getPositionToRef(1, UU, XU)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.YL(this._localMatrix);
          const UU = this._skeleton.getPoseMatrix();
          UU && this._absoluteMatrix.multiplyToRef(UU, this._absoluteMatrix)
        }
        const UU = this.children,
          XU = UU.length;
        for (let zU = 0; zU < XU; zU++) UU[zU].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      R_(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = QU.q.Zero();
        return this.getDirectionToRef(UU, XU, zU), zU
      }
      getDirectionToRef(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = iU._TmpMats[0].YL(this.getAbsoluteMatrix());
        XU && cU.multiplyToRef(XU.getWorldMatrix(), cU), QU.q.TransformNormalToRef(UU, cU, zU), zU.normalize()
      }
      getRotation() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = QU.q.Zero();
        return this.getRotationToRef(UU, XU, zU), zU
      }
      getRotationToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = iU._TmpQuat;
        this.getRotationQuaternionToRef(UU, XU, cU), cU.toEulerAnglesToRef(zU)
      }
      getRotationQuaternion() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = QU.f.Identity();
        return this.getRotationQuaternionToRef(UU, XU, zU), zU
      }
      getRotationQuaternionToRef() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), XU.YL(this._localRotation);
        else {
          const zU = iU._TmpMats[0],
            cU = this.getAbsoluteMatrix();
          UU ? cU.multiplyToRef(UU.getWorldMatrix(), zU) : zU.YL(cU), zU.multiplyAtIndex(0, this._scalingDeterminant), zU.multiplyAtIndex(1, this._scalingDeterminant), zU.multiplyAtIndex(2, this._scalingDeterminant), zU.decompose(void 0, XU, void 0)
        }
      }
      getRotationMatrix() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 ? arguments[1] : void 0;
        const zU = QU.e.Identity();
        return this.getRotationMatrixToRef(UU, XU, zU), zU
      }
      getRotationMatrixToRef() {
        let UU = arguments.length > 1 ? arguments[1] : void 0,
          XU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(XU);
        else {
          const zU = iU._TmpMats[0],
            cU = this.getAbsoluteMatrix();
          UU ? cU.multiplyToRef(UU.getWorldMatrix(), zU) : zU.YL(cU), zU.multiplyAtIndex(0, this._scalingDeterminant), zU.multiplyAtIndex(1, this._scalingDeterminant), zU.multiplyAtIndex(2, this._scalingDeterminant), zU.getRotationMatrixToRef(XU)
        }
      }
      getAbsolutePositionFromLocal(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = QU.q.Zero();
        return this.getAbsolutePositionFromLocalToRef(UU, XU, zU), zU
      }
      getAbsolutePositionFromLocalToRef(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = iU._TmpMats[0].YL(this.getAbsoluteMatrix());
        XU && cU.multiplyToRef(XU.getWorldMatrix(), cU), QU.q.TransformCoordinatesToRef(UU, cU, zU)
      }
      getLocalPositionFromAbsolute(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const zU = QU.q.Zero();
        return this.getLocalPositionFromAbsoluteToRef(UU, XU, zU), zU
      }
      getLocalPositionFromAbsoluteToRef(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = iU._TmpMats[0].YL(this.getAbsoluteMatrix());
        XU && cU.multiplyToRef(XU.getWorldMatrix(), cU), cU.invert(), QU.q.TransformCoordinatesToRef(UU, cU, zU)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const UU = this._skeleton.bones.indexOf(this);
        if (-1 !== UU && this._skeleton.bones.splice(UU, 1), this._parentNode && this._parentNode.children) {
          const UU = this._parentNode.children,
            XU = UU.indexOf(this); - 1 !== XU && UU.splice(XU, 1)
        }
        super.dispose()
      }
    }
    iU._TmpVecs = (0, rU.d)(2, QU.q.Zero), iU._TmpQuat = QU.f.Identity(), iU._TmpMats = (0, rU.d)(5, QU.e.Identity), (SU = iU.prototype).copyAnimationRange ?? (SU.copyAnimationRange = (0, fU.k)("Bone", "copyAnimationRange"));
    var HU = zU(41202);
    let MU = !1;
    var vU = zU(41077),
      VU = zU(41395),
      sU = zU(41406),
      nU = zU(41400),
      mU = zU(41224);

    function lU(UU, XU) {
      const zU = (0, IU.RandomRange)(0, 1);
      EU.e.LerpToRef(XU.color1, XU.color2, zU, UU.color)
    }

    function xU(UU, XU) {
      XU.colorDead.subtractToRef(UU.color, XU._colorDiff), XU._colorDiff.scaleToRef(1 / UU.lifeTime, UU.colorStep)
    }

    function JU(UU, XU) {
      UU._properties.currentColorGradient = XU._colorGradients[0], UU._properties.currentColorGradient.getColorToRef(UU.color), UU._properties.currentColor1.YL(UU.color), XU._colorGradients.length > 1 ? XU._colorGradients[1].getColorToRef(UU._properties.currentColor2) : UU._properties.currentColor2.YL(UU.color)
    }

    function jU(UU, XU) {
      const zU = XU._colorGradients;
      cU.g.GetCurrentGradient(XU._ratio, zU, ((XU, zU, cU) => {
        XU !== UU._properties.currentColorGradient && (UU._properties.currentColor1.YL(UU._properties.currentColor2), zU.getColorToRef(UU._properties.currentColor2), UU._properties.currentColorGradient = XU), EU.e.LerpToRef(UU._properties.currentColor1, UU._properties.currentColor2, cU, UU.color), UU.color.a < 0 && (UU.color.a = 0)
      }))
    }

    function KU(UU, XU) {
      UU.colorStep.scaleToRef(XU._scaledUpdateSpeed, XU._scaledColorStep), UU.color.addInPlace(XU._scaledColorStep), UU.color.a < 0 && (UU.color.a = 0)
    }

    function bU(UU, XU) {
      cU.g.GetCurrentGradient(XU._ratio, XU._angularSpeedGradients, ((XU, zU, cU) => {
        XU !== UU._properties.currentAngularSpeedGradient && (UU._properties.currentAngularSpeed1 = UU._properties.currentAngularSpeed2, UU._properties.currentAngularSpeed2 = zU.getFactor(), UU._properties.currentAngularSpeedGradient = XU), UU.angularSpeed = (0, IU.Lerp)(UU._properties.currentAngularSpeed1, UU._properties.currentAngularSpeed2, cU)
      }))
    }

    function TU(UU, XU) {
      UU.angle += UU.angularSpeed * XU._scaledUpdateSpeed
    }

    function hU(UU, XU) {
      XU.particleEmitterType.startDirectionFunction(XU._emitterWorldMatrix, UU.direction, UU, XU.isLocal, XU._emitterInverseWorldMatrix)
    }

    function UX(UU, XU) {
      XU.startDirectionFunction(XU._emitterWorldMatrix, UU.direction, UU, XU.isLocal)
    }

    function XX(UU, XU) {
      UU._properties.currentVelocityGradient = XU._velocityGradients[0], UU._properties.currentVelocity1 = UU._properties.currentVelocityGradient.getFactor(), XU._velocityGradients.length > 1 ? UU._properties.currentVelocity2 = XU._velocityGradients[1].getFactor() : UU._properties.currentVelocity2 = UU._properties.currentVelocity1
    }

    function zX(UU, XU) {
      UU._properties.currentLimitVelocityGradient = XU._limitVelocityGradients[0], UU._properties.currentLimitVelocity1 = UU._properties.currentLimitVelocityGradient.getFactor(), XU._limitVelocityGradients.length > 1 ? UU._properties.currentLimitVelocity2 = XU._limitVelocityGradients[1].getFactor() : UU._properties.currentLimitVelocity2 = UU._properties.currentLimitVelocity1
    }

    function cX(UU, XU) {
      cU.g.GetCurrentGradient(XU._ratio, XU._velocityGradients, ((XU, zU, cU) => {
        XU !== UU._properties.currentVelocityGradient && (UU._properties.currentVelocity1 = UU._properties.currentVelocity2, UU._properties.currentVelocity2 = zU.getFactor(), UU._properties.currentVelocityGradient = XU), UU._properties.directionScale *= (0, IU.Lerp)(UU._properties.currentVelocity1, UU._properties.currentVelocity2, cU)
      }))
    }

    function yX(UU, XU) {
      cU.g.GetCurrentGradient(XU._ratio, XU._limitVelocityGradients, ((zU, cU, yU) => {
        zU !== UU._properties.currentLimitVelocityGradient && (UU._properties.currentLimitVelocity1 = UU._properties.currentLimitVelocity2, UU._properties.currentLimitVelocity2 = cU.getFactor(), UU._properties.currentLimitVelocityGradient = zU);
        const QU = (0, IU.Lerp)(UU._properties.currentLimitVelocity1, UU._properties.currentLimitVelocity2, yU);
        UU.direction.length() > QU && UU.direction.scaleInPlace(XU.limitVelocityDamping)
      }))
    }

    function QX(UU) {
      UU.direction.scaleToRef(UU._properties.directionScale, UU._properties.scaledDirection)
    }

    function AX(UU, XU) {
      XU.particleEmitterType.startPositionFunction(XU._emitterWorldMatrix, UU.position, UU, XU.isLocal)
    }

    function FX(UU, XU) {
      XU.startPositionFunction(XU._emitterWorldMatrix, UU.position, UU, XU.isLocal)
    }

    function oX(UU, XU) {
      UU._properties.localPosition ? UU._properties.localPosition.YL(UU.position) : UU._properties.localPosition = UU.position.clone(), QU.q.TransformCoordinatesToRef(UU._properties.localPosition, XU._emitterWorldMatrix, UU.position)
    }

    function DX(UU, XU) {
      XU.isLocal && UU._properties.localPosition ? (UU._properties.localPosition.addInPlace(UU._properties.scaledDirection), QU.q.TransformCoordinatesToRef(UU._properties.localPosition, XU._emitterWorldMatrix, UU.position)) : UU.position.addInPlace(UU._properties.scaledDirection)
    }

    function EX(UU, XU) {
      UU._properties.currentDragGradient = XU._dragGradients[0], UU._properties.currentDrag1 = UU._properties.currentDragGradient.getFactor(), XU._dragGradients.length > 1 ? UU._properties.currentDrag2 = XU._dragGradients[1].getFactor() : UU._properties.currentDrag2 = UU._properties.currentDrag1
    }

    function YX(UU, XU) {
      cU.g.GetCurrentGradient(XU._ratio, XU._dragGradients, ((XU, zU, cU) => {
        XU !== UU._properties.currentDragGradient && (UU._properties.currentDrag1 = UU._properties.currentDrag2, UU._properties.currentDrag2 = zU.getFactor(), UU._properties.currentDragGradient = XU);
        const yU = (0, IU.Lerp)(UU._properties.currentDrag1, UU._properties.currentDrag2, cU);
        UU._properties.scaledDirection.scaleInPlace(1 - yU)
      }))
    }

    function NX(UU, XU) {
      UU._properties.randomNoiseCoordinates1 && UU._properties.randomNoiseCoordinates2 ? (UU._properties.randomNoiseCoordinates1.sUU(Math.random(), Math.random(), Math.random()), UU._properties.randomNoiseCoordinates2.sUU(Math.random(), Math.random(), Math.random())) : (UU._properties.randomNoiseCoordinates1 = new QU.q(Math.random(), Math.random(), Math.random()), UU._properties.randomNoiseCoordinates2 = new QU.q(Math.random(), Math.random(), Math.random()))
    }

    function IX(UU, XU) {
      const zU = XU._noiseTextureData,
        cU = XU._noiseTextureSize;
      if (zU && cU && UU._properties.randomNoiseCoordinates1 && UU._properties.randomNoiseCoordinates2) {
        const yU = XU._fetchR(UU._properties.randomNoiseCoordinates1.x, UU._properties.randomNoiseCoordinates1.y, cU.width, cU.height, zU),
          AU = XU._fetchR(UU._properties.randomNoiseCoordinates1.z, UU._properties.randomNoiseCoordinates2.x, cU.width, cU.height, zU),
          FU = XU._fetchR(UU._properties.randomNoiseCoordinates2.y, UU._properties.randomNoiseCoordinates2.z, cU.width, cU.height, zU),
          oU = QU.l.Sp[0],
          DU = QU.l.Sp[1];
        oU.sUU((2 * yU - 1) * XU.noiseStrength.x, (2 * AU - 1) * XU.noiseStrength.y, (2 * FU - 1) * XU.noiseStrength.z), oU.scaleToRef(XU._tempScaledUpdateSpeed, DU), UU.direction.addInPlace(DU)
      }
    }

    function pX(UU, XU) {
      XU.gravity.scaleToRef(XU._tempScaledUpdateSpeed, XU._scaledGravity), UU.direction.addInPlace(XU._scaledGravity)
    }

    function aX(UU, XU) {
      UU.size = (0, IU.RandomRange)(XU.minSize, XU.maxSize), UU.scale.sUU((0, IU.RandomRange)(XU.minScaleX, XU.maxScaleX), (0, IU.RandomRange)(XU.minScaleY, XU.maxScaleY))
    }

    function tX(UU, XU) {
      UU._properties.currentSizeGradient = XU._sizeGradients[0], UU._properties.currentSize1 = UU._properties.currentSizeGradient.getFactor(), UU.size = UU._properties.currentSize1, XU._sizeGradients.length > 1 ? UU._properties.currentSize2 = XU._sizeGradients[1].getFactor() : UU._properties.currentSize2 = UU._properties.currentSize1, UU.scale.sUU((0, IU.RandomRange)(XU.minScaleX, XU.maxScaleX), (0, IU.RandomRange)(XU.minScaleY, XU.maxScaleY))
    }

    function gX(UU, XU) {
      const zU = XU._actualFrame / XU.targetStopDuration;
      cU.g.GetCurrentGradient(zU, XU._startSizeGradients, ((zU, cU, yU) => {
        zU !== XU._currentStartSizeGradient && (XU._currentStartSize1 = XU._currentStartSize2, XU._currentStartSize2 = cU.getFactor(), XU._currentStartSizeGradient = zU);
        const QU = (0, IU.Lerp)(XU._currentStartSize1, XU._currentStartSize2, yU);
        UU.scale.scaleInPlace(QU)
      }))
    }

    function kX(UU, XU) {
      cU.g.GetCurrentGradient(XU._ratio, XU._sizeGradients, ((XU, zU, cU) => {
        XU !== UU._properties.currentSizeGradient && (UU._properties.currentSize1 = UU._properties.currentSize2, UU._properties.currentSize2 = zU.getFactor(), UU._properties.currentSizeGradient = XU), UU.size = (0, IU.Lerp)(UU._properties.currentSize1, UU._properties.currentSize2, cU)
      }))
    }

    function GX(UU, XU) {
      UU.remapData = new QU.t(0, 1, 0, 1)
    }

    function BX(UU, XU) {
      XU._colorRemapGradients && XU._colorRemapGradients.length > 0 && cU.g.GetCurrentGradient(XU._ratio, XU._colorRemapGradients, ((XU, zU, cU) => {
        const yU = (0, IU.Lerp)(XU.factor1, zU.factor1, cU),
          QU = (0, IU.Lerp)(XU.factor2, zU.factor2, cU);
        UU.remapData.x = yU, UU.remapData.y = QU - yU
      })), XU._alphaRemapGradients && XU._alphaRemapGradients.length > 0 && cU.g.GetCurrentGradient(XU._ratio, XU._alphaRemapGradients, ((XU, zU, cU) => {
        const yU = (0, IU.Lerp)(XU.factor1, zU.factor1, cU),
          QU = (0, IU.Lerp)(XU.factor2, zU.factor2, cU);
        UU.remapData.z = yU, UU.remapData.w = QU - yU
      }))
    }

    function ZX(UU, XU) {
      const zU = (0, IU.Clamp)(XU._actualFrame / XU.targetStopDuration);
      cU.g.GetCurrentGradient(zU, XU._lifeTimeGradients, ((XU, cU) => {
        const yU = XU,
          QU = cU,
          AU = yU.getFactor(),
          FU = QU.getFactor(),
          oU = (zU - yU.gradient) / (QU.gradient - yU.gradient);
        UU.lifeTime = (0, IU.Lerp)(AU, FU, oU)
      })), XU._emitPower = (0, IU.RandomRange)(XU.minEmitPower, XU.maxEmitPower)
    }

    function RX(UU, XU) {
      UU.lifeTime = (0, IU.RandomRange)(XU.minLifeTime, XU.maxLifeTime), XU._emitPower = (0, IU.RandomRange)(XU.minEmitPower, XU.maxEmitPower)
    }

    function PX(UU, XU) {
      0 === XU._emitPower ? (UU._properties.initialDirection ? UU._properties.initialDirection.YL(UU.direction) : UU._properties.initialDirection = UU.direction.clone(), UU.direction.set(0, 0, 0)) : (UU._properties.initialDirection = null, UU.direction.scaleInPlace(XU._emitPower)), UU.direction.addInPlace(XU._inheritedVelocityOffset)
    }

    function WX(UU, XU) {
      UU.angularSpeed = (0, IU.RandomRange)(XU.minAngularSpeed, XU.maxAngularSpeed), UU.angle = (0, IU.RandomRange)(XU.minInitialRotation, XU.maxInitialRotation)
    }

    function dX(UU, XU) {
      UU._properties.currentAngularSpeedGradient = XU._angularSpeedGradients[0], UU.angularSpeed = UU._properties.currentAngularSpeedGradient.getFactor(), UU._properties.currentAngularSpeed1 = UU.angularSpeed, XU._angularSpeedGradients.length > 1 ? UU._properties.currentAngularSpeed2 = XU._angularSpeedGradients[1].getFactor() : UU._properties.currentAngularSpeed2 = UU._properties.currentAngularSpeed1, UU.angle = (0, IU.RandomRange)(XU.minInitialRotation, XU.maxInitialRotation)
    }

    function LX(UU, XU) {
      UU._properties.initialStartSpriteCellId = XU.startSpriteCellID, UU._properties.initialEndSpriteCellId = XU.endSpriteCellID, UU._properties.initialSpriteCellLoop = XU.spriteCellLoop
    }

    function eX(UU, XU) {
      UU.previousItem = XU.previousItem, UU.nextItem = XU, XU.previousItem && (XU.previousItem.nextItem = UU), XU.previousItem = UU
    }

    function CX(UU, XU) {
      UU.previousItem = XU, UU.nextItem = XU.nextItem, XU.nextItem && (XU.nextItem.previousItem = UU), XU.nextItem = UU
    }

    function wX(UU) {
      UU.previousItem && (UU.previousItem.nextItem = UU.nextItem), UU.nextItem && (UU.nextItem.previousItem = UU.previousItem)
    }
    var qX = zU(41446);
    class OX extends RU {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(UU) {
        this._startDirectionFunction !== UU && (this._startDirectionFunction = UU, this._directionCreation.process = UU ? UX : hU)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(UU) {
        this._startPositionFunction !== UU && (this._startPositionFunction = UU, this._positionCreation.process = UU ? FX : AX)
      }
      set onDispose(UU) {
        this._onDisposeObserver && this.bS.remove(this._onDisposeObserver), this._onDisposeObserver = this.bS.add(UU)
      }
      get oR() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(UU) {
        this._useRampGradients !== UU && (this._useRampGradients = UU, this._resetEffect(), UU ? (this._rampCreation = {
          process: GX,
          previousItem: null,
          nextItem: null
        }, CX(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: BX,
          previousItem: null,
          nextItem: null
        }, CX(this._remapGradientProcessing, this._gravityProcessing))) : (wX(this._rampCreation), wX(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(UU) {
        this._isLocal !== UU && (this._isLocal = UU, UU ? (this._isLocalCreation = {
          process: oX,
          previousItem: null,
          nextItem: null
        }, CX(this._isLocalCreation, this._positionCreation)) : wX(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(UU) {
        this._animationSheetEnabled !== UU && (this._animationSheetEnabled = UU, UU ? (this._sheetCreation = {
          process: LX,
          previousItem: null,
          nextItem: null
        }, CX(this._sheetCreation, this._colorDeadCreation)) : wX(this._sheetCreation), this._reset())
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[UU]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[UU] ?? this._customWrappers[0]
      }
      setCustomEffect(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[XU] = new VU.c(this._engine), this._customWrappers[XU].effect = UU, this._customWrappers[XU].drawContext && (this._customWrappers[XU].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new yU.e), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(UU) {
        if (this.noiseTexture !== UU) {
          if (this._noiseTexture = UU, !UU) return wX(this._noiseCreation), void wX(this._noiseProcessing);
          this._noiseCreation = {
            process: NX,
            previousItem: null,
            nextItem: null
          }, CX(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: IX,
            previousItem: null,
            nextItem: null
          }, CX(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          FU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          DU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        MU || (MU = !0, OU(HU.d, iU)), (0, vU.e)(), super(UU), this._emitterInverseWorldMatrix = QU.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new QU.q, this.bS = new yU.e, this.onStoppedObservable = new yU.e, this.onStartedObservable = new yU.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new EU.e(0, 0, 0, 0), this._colorDiff = new EU.e(0, 0, 0, 0), this._scaledGravity = QU.q.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = UU => {}, this.recycleParticle = UU => {
          const XU = this._particles.pop();
          XU !== UU && XU.copyTo(UU), XU.metadata = null, this._stockParticles.push(XU)
        }, this._createParticle = () => {
          let UU;
          return 0 !== this._stockParticles.length ? (UU = this._stockParticles.pop(), UU._reset()) : UU = new WU(this), this._prepareParticle(UU), UU
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = XU, this._epsilon = FU, zU && "Scene" !== zU.getClassName() ? (this._engine = zU, this.defaultProjectionMatrix = QU.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = zU || oU.b.LastCreatedScene, this._engine = this._scene.qp(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.nB.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: RX,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: AX,
          previousItem: null,
          nextItem: null
        }, CX(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: hU,
          previousItem: null,
          nextItem: null
        }, CX(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: PX,
          previousItem: null,
          nextItem: null
        }, CX(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: aX,
          previousItem: null,
          nextItem: null
        }, CX(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: WX,
          previousItem: null,
          nextItem: null
        }, CX(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: lU,
          previousItem: null,
          nextItem: null
        }, CX(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: xU,
          previousItem: null,
          nextItem: null
        }, CX(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, DU || (this._colorProcessing = {
          process: KU,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: TU,
          previousItem: null,
          nextItem: null
        }, CX(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: QX,
          previousItem: null,
          nextItem: null
        }, CX(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: DX,
          previousItem: null,
          nextItem: null
        }, CX(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: pX,
          previousItem: null,
          nextItem: null
        }, CX(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = AU, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new VU.c(this._engine)
        }, this._customWrappers[0].effect = cU, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new YU.e, this.updateFunction = UU => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((UU => {
            this._noiseTextureData = UU
          })));
          const XU = UU === this._particles;
          for (let zU = 0; zU < UU.length; zU++) {
            const cU = UU[zU];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const yU = cU.age;
            if (cU.age += this._tempScaledUpdateSpeed, cU.age > cU.lifeTime) {
              const UU = cU.age - yU,
                XU = cU.lifeTime - yU;
              this._tempScaledUpdateSpeed = XU * this._tempScaledUpdateSpeed / UU, cU.age = cU.lifeTime
            }
            this._ratio = cU.age / cU.lifeTime, cU._properties.directionScale = this._tempScaledUpdateSpeed;
            let QU = this._updateQueueStart;
            for (; QU;) QU.process(cU, this), QU = QU.nextItem;
            if (this._isAnimationSheetEnabled && !DU && cU.updateCellIndex(), cU._inheritParticleInfoToSubEmitters(), cU.age >= cU.lifeTime) {
              if (this._emitFromParticle(cU), cU._properties.attachedSubEmitters) {
                for (const UU of cU._properties.attachedSubEmitters) UU.particleSystem.disposeOnStop = !0, UU.particleSystem.stop();
                cU._properties.attachedSubEmitters = null
              }
              this.recycleParticle(cU), XU && zU--
            } else;
          }
        }
      }
      serialize(UU) {
        throw new Error("Method not implemented.")
      }
      clone(UU, XU) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = ZX : this._lifeTimeCreation.process = RX
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: gX,
          previousItem: null,
          nextItem: null
        }, CX(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (wX(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(UU) {
        this.targetStopDuration !== UU && (this._targetStopDuration = UU, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(UU, XU, zU) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, UU, XU, zU), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(UU) {
        return this._removeFactorGradient(this._lifeTimeGradients, UU), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(UU, XU, zU) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = tX, this._sizeGradientProcessing = {
          process: kX,
          previousItem: null,
          nextItem: null
        }, eX(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, UU, XU, zU), this
      }
      removeSizeGradient(UU) {
        return this._removeFactorGradient(this._sizeGradients, UU), 0 === this._sizeGradients?.length && (wX(this._sizeGradientProcessing), this._sizeCreation.process = aX), this
      }
      addColorRemapGradient(UU, XU, zU) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, UU, XU, zU), this
      }
      removeColorRemapGradient(UU) {
        return this._removeFactorGradient(this._colorRemapGradients, UU), this
      }
      addAlphaRemapGradient(UU, XU, zU) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, UU, XU, zU), this
      }
      removeAlphaRemapGradient(UU) {
        return this._removeFactorGradient(this._alphaRemapGradients, UU), this
      }
      addAngularSpeedGradient(UU, XU, zU) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = dX, this._angularSpeedGradientProcessing = {
          process: bU,
          previousItem: null,
          nextItem: null
        }, eX(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, UU, XU, zU), this
      }
      removeAngularSpeedGradient(UU) {
        return this._removeFactorGradient(this._angularSpeedGradients, UU), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = WX, wX(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(UU, XU, zU) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: XX,
          previousItem: null,
          nextItem: null
        }, CX(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: cX,
          previousItem: null,
          nextItem: null
        }, eX(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, UU, XU, zU), this
      }
      removeVelocityGradient(UU) {
        return this._removeFactorGradient(this._velocityGradients, UU), 0 === this._velocityGradients?.length && (wX(this._velocityCreation), wX(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(UU, XU, zU) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: zX,
          previousItem: null,
          nextItem: null
        }, CX(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: yX,
          previousItem: null,
          nextItem: null
        }, CX(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, UU, XU, zU), this
      }
      removeLimitVelocityGradient(UU) {
        return this._removeFactorGradient(this._limitVelocityGradients, UU), 0 === this._limitVelocityGradients?.length && (wX(this._limitVelocityCreation), wX(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(UU, XU, zU) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: EX,
          previousItem: null,
          nextItem: null
        }, eX(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: YX,
          previousItem: null,
          nextItem: null
        }, eX(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, UU, XU, zU), this
      }
      removeDragGradient(UU) {
        return this._removeFactorGradient(this._dragGradients, UU), 0 === this._dragGradients?.length && (wX(this._dragCreation), wX(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(UU, XU, zU) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, UU, XU, zU), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(UU) {
        return this._removeFactorGradient(this._startSizeGradients, UU), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const UU = new Uint8Array(4 * this._rawTextureWidth),
          XU = EU.i.Color3[0];
        for (let zU = 0; zU < this._rawTextureWidth; zU++) {
          const yU = zU / this._rawTextureWidth;
          cU.g.GetCurrentGradient(yU, this._rampGradients, ((cU, yU, QU) => {
            EU.b.LerpToRef(cU.color, yU.color, QU, XU), UU[4 * zU] = 255 * XU.r, UU[4 * zU + 1] = 255 * XU.g, UU[4 * zU + 2] = 255 * XU.b, UU[4 * zU + 3] = 255
          }))
        }
        this._rampGradientsTexture = FU.b.CreateRGBATexture(UU, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((UU, XU) => UU.gradient < XU.gradient ? -1 : UU.gradient > XU.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(UU, XU) {
        this._rampGradients || (this._rampGradients = []);
        const zU = new cU.d(UU, XU);
        return this._rampGradients.push(zU), this._syncRampGradientTexture(), this
      }
      removeRampGradient(UU) {
        return this._removeGradientAndTexture(UU, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(UU, XU, zU) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = JU, this._colorProcessing.process = jU);
        const yU = new cU.c(UU, XU, zU);
        return this._colorGradients.push(yU), this._colorGradients.sort(((UU, XU) => UU.gradient < XU.gradient ? -1 : UU.gradient > XU.gradient ? 1 : 0)), this
      }
      removeColorGradient(UU) {
        if (!this._colorGradients) return this;
        let XU = 0;
        for (const zU of this._colorGradients) {
          if (zU.gradient === UU) {
            this._colorGradients.splice(XU, 1);
            break
          }
          XU++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = lU, this._colorProcessing.process = KU), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const UU of this._drawWrappers)
            if (UU)
              for (const XU of UU) XU?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(UU, XU, zU, cU, yU) {
        return yU[4 * (((UU = .5 * Math.abs(UU) + .5) * zU % zU | 0) + ((XU = .5 * Math.abs(XU) + .5) * cU % cU | 0) * zU)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const UU = this._engine,
          XU = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * XU), this._vertexBuffer = new AU.d(UU, this._vertexData, !0, XU);
        let zU = 0;
        const cU = this._vertexBuffer.createVertexBuffer(AU.h.PositionKind, zU, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[AU.h.PositionKind] = cU, zU += 3;
        const yU = this._vertexBuffer.createVertexBuffer(AU.h.ColorKind, zU, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[AU.h.ColorKind] = yU, zU += 4;
        const QU = this._vertexBuffer.createVertexBuffer("angle", zU, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = QU, zU += 1;
        const FU = this._vertexBuffer.createVertexBuffer("size", zU, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = FU, zU += 2, this._isAnimationSheetEnabled) {
          const UU = this._vertexBuffer.createVertexBuffer("cellIndex", zU, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = UU, zU += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const UU = this._vertexBuffer.createVertexBuffer("direction", zU, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = UU, zU += 3
        }
        if (this._useRampGradients) {
          const UU = this._vertexBuffer.createVertexBuffer("remapData", zU, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = UU, zU += 4
        }
        let oU;
        if (this._useInstancing) {
          const XU = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new AU.d(UU, XU, !1, 2), oU = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else oU = this._vertexBuffer.createVertexBuffer("offset", zU, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = oU, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const UU = [],
          XU = [];
        let zU = 0;
        for (let cU = 0; cU < this._capacity; cU++) UU.push(zU), UU.push(zU + 1), UU.push(zU + 2), UU.push(zU), UU.push(zU + 2), UU.push(zU + 3), XU.push(zU, zU + 1, zU + 1, zU + 2, zU + 2, zU + 3, zU + 3, zU, zU, zU + 3), zU += 4;
        this._indexBuffer = this._engine.createIndexBuffer(UU), this._linesIndexBuffer = this._engine.createIndexBuffer(XU)
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (UU) return this.startDelay = UU, void setTimeout((() => {
          this.start(0)
        }), UU);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const UU = this.noiseTexture;
          if (UU && UU.onGeneratedObservable) UU.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let XU = 0; XU < this.preWarmCycles; XU++) this.animate(!0), UU.render()
            }))
          }));
          else
            for (let XU = 0; XU < this.preWarmCycles; XU++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(UU))
      }
      _postStop(UU) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(UU, XU, zU, cU) {
        let yU = UU * this._vertexBufferSize;
        const AU = QU.l.Sp[0].YL(this._scene?.floatingOriginOffset || QU.q.ZeroReadOnly);
        if (this._vertexData[yU++] = XU.position.x + this.worldOffset.x - AU.x, this._vertexData[yU++] = XU.position.y + this.worldOffset.y - AU.y, this._vertexData[yU++] = XU.position.z + this.worldOffset.z - AU.z, this._vertexData[yU++] = XU.color.r, this._vertexData[yU++] = XU.color.g, this._vertexData[yU++] = XU.color.b, this._vertexData[yU++] = XU.color.a, this._vertexData[yU++] = XU.angle, this._vertexData[yU++] = XU.scale.x * XU.size, this._vertexData[yU++] = XU.scale.y * XU.size, this._isAnimationSheetEnabled && (this._vertexData[yU++] = XU.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[yU++] = XU.direction.x, this._vertexData[yU++] = XU.direction.y, this._vertexData[yU++] = XU.direction.z);
        else if (XU._properties.initialDirection) {
          let UU = XU._properties.initialDirection;
          this.isLocal && (QU.q.TransformNormalToRef(UU, this._emitterWorldMatrix, QU.l.Sp[0]), UU = QU.l.Sp[0]), 0 === UU.x && 0 === UU.z && (UU.x = .001), this._vertexData[yU++] = UU.x, this._vertexData[yU++] = UU.y, this._vertexData[yU++] = UU.z
        } else {
          let UU = XU.direction;
          this.isLocal && (QU.q.TransformNormalToRef(UU, this._emitterWorldMatrix, QU.l.Sp[0]), UU = QU.l.Sp[0]), 0 === UU.x && 0 === UU.z && (UU.x = .001), this._vertexData[yU++] = UU.x, this._vertexData[yU++] = UU.y, this._vertexData[yU++] = UU.z
        }
        this._useRampGradients && XU.remapData && (this._vertexData[yU++] = XU.remapData.x, this._vertexData[yU++] = XU.remapData.y, this._vertexData[yU++] = XU.remapData.z, this._vertexData[yU++] = XU.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === zU ? zU = this._epsilon : 1 === zU && (zU = 1 - this._epsilon), 0 === cU ? cU = this._epsilon : 1 === cU && (cU = 1 - this._epsilon)), this._vertexData[yU++] = zU, this._vertexData[yU] = cU)
      }
      _prepareParticle(UU) {}
      _createNewOnes(UU) {
        let XU;
        for (let zU = 0; zU < UU && this._particles.length !== this._capacity; zU++) {
          XU = this._createParticle(), this._particles.push(XU);
          let UU = this._createQueueStart;
          for (; UU;) UU.process(XU, this), UU = UU.nextItem;
          XU._inheritParticleInfoToSubEmitters()
        }
      }
      _update(UU) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const UU = this.emitter;
          this._emitterWorldMatrix = UU.getWorldMatrix()
        } else {
          const UU = this.emitter;
          this._emitterWorldMatrix = QU.e.Translation(UU.x, UU.y, UU.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(UU)
      }
      static _GetAttributeNamesOrOptions() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = [AU.h.PositionKind, AU.h.ColorKind, "angle", "offset", "size"];
        return UU && cU.push("cellIndex"), XU || cU.push("direction"), zU && cU.push("remapData"), cU
      }
      static _GetEffectCreationOptions() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, sU.c)(cU), UU && cU.push("particlesInfos"), XU && cU.push("logarithmicDepthConstant"), zU && (cU.push("vFogInfos"), cU.push("vFogColor")), cU
      }
      fillDefines(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, sU.m)(this, this._scene, UU), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && UU.push("#define FOG")), this._isAnimationSheetEnabled && UU.push("#define ANIMATESHEET"), this.useLogarithmicDepth && UU.push("#define LOGARITHMICDEPTH"), XU === RU.BLENDMODE_MULTIPLY && UU.push("#define BLENDMULTIPLYMODE"), this.isLocal && UU.push("#define LOCAL"), this._useRampGradients && UU.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (UU.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            UU.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            UU.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && UU.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            UU.push("#define BILLBOARDMODE_ALL")
        }
        zU && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), UU.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(UU, XU, zU) {
        XU.push(...OX._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), UU.push(...OX._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), zU.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, mU.g)(UU, this._imageProcessingConfigurationDefines), (0, mU.d)(zU, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(UU) {
        var XU;
        const zU = this._getCustomDrawWrapper(UU);
        if (zU?.effect) return zU;
        const cU = [];
        this.fillDefines(cU, UU);
        const QU = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          AU = qX.c._PrepareStringDefines(QU, cU),
          FU = AU ? qX.c.GetConfiguration(QU) : void 0;
        let oU = this._drawWrappers[QU];
        oU || (oU = this._drawWrappers[QU] = [], 0 === QU || this._renderPassObserver || (this._renderPassObserver = ((XU = this._engine)._onReleaseRenderPassObservable ?? (XU._onReleaseRenderPassObservable = new yU.e)).add((UU => {
          const XU = this._drawWrappers[UU];
          if (XU) {
            for (const UU of XU) UU?.dispose();
            delete this._drawWrappers[UU]
          }
        }))));
        let DU = oU[UU];
        DU || (DU = new VU.c(this._engine), DU.drawContext && (DU.drawContext.useInstancing = this._useInstancing), oU[UU] = DU);
        const EU = cU.join("\n");
        if (DU.defines !== EU) {
          const UU = [],
            XU = [],
            zU = [];
          this.fillUniformsAttributesAndSamplerNames(XU, UU, zU), AU && (XU.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== FU?.defines.PREPASS_LOCAL_POSITION_INDEX && XU.push("inverseEmitterWM", "geometryWorldOffset")), DU.setEffect(this._engine.createEffect("particles", {
            attributes: UU,
            uniformsNames: XU,
            samplers: zU,
            defines: EU,
            shaderLanguage: this._shaderLanguage,
            multiTarget: AU,
            indexParameters: AU ? {
              buffersCount: FU?._mrtCount ?? 0
            } : void 0
          }, this._engine), EU)
        }
        return DU
      }
      _bindGeometryRendering(UU) {
        const XU = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          zU = qX.c.GetConfiguration(XU);
        if (!zU?._defines) return;
        UU.setFloat("objectId", 0), UU.setInt("meshBlendTag", 0);
        const cU = this._scene?.activeCamera;
        if (UU.setFloat2("cameraInfo", cU?.minZ ?? 0, cU?.maxZ ?? 1), this.isLocal && void 0 !== zU.defines.PREPASS_LOCAL_POSITION_INDEX) {
          UU.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const XU = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || QU.q.ZeroReadOnly, QU.l.Sp[0]);
          UU.setVector3("geometryWorldOffset", XU)
        }
      }
      animate() {
        let UU, XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!XU && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (XU ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) UU = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const XU = this._calculateEmitRate();
            UU = XU * this._scaledUpdateSpeed | 0, this._newPartsExcess += XU * this._scaledUpdateSpeed - UU
          }
          if (this._newPartsExcess > 1 && (UU += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? UU = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(UU), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !XU) {
            let UU = 0;
            for (let XU = 0; XU < this._particles.length; XU++) {
              const zU = this._particles[XU];
              this._appendParticleVertices(UU, zU), UU += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const UU = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  XU = this._particles.length;
                XU < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, XU * UU, this._fixedCapacityHighWaterMark * UU), this._fixedCapacityHighWaterMark = XU, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const UU = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * UU), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let UU = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const XU = this._actualFrame / this.targetStopDuration;
          cU.g.GetCurrentGradient(XU, this._emitRateGradients, ((XU, zU, cU) => {
            XU !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = zU.getFactor(), this._currentEmitRateGradient = XU), UU = (0, IU.Lerp)(this._currentEmitRate1, this._currentEmitRate2, cU)
          }))
        }
        return UU
      }
      _appendParticleVertices(UU, XU) {
        this._appendParticleVertex(UU++, XU, 0, 0), this._useInstancing || (this._appendParticleVertex(UU++, XU, 1, 0), this._appendParticleVertex(UU++, XU, 1, 1), this._appendParticleVertex(UU, XU, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !OX.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([zU.e(652).then((() => zU(63979))), zU.e(646).then((() => zU(63987)))])) : await Promise.all([zU.e(635).then((() => zU(63990))), Promise.all([zU.e(628), zU.e(661)]).then((() => zU(63994)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== RU.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(RU.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(RU.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(UU) {
        const XU = this._getWrapper(UU),
          zU = XU.effect,
          cU = this._engine;
        cU.enableEffect(XU);
        const yU = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        zU.setTexture("diffuseSampler", this.particleTexture), zU.setMatrix("view", yU);
        const AU = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (zU.setMatrix("projection", AU), this._isAnimationSheetEnabled && this.particleTexture) {
          const UU = this.particleTexture.getBaseSize();
          zU.setFloat3("particlesInfos", this.spriteCellWidth / UU.width, this.spriteCellHeight / UU.height, this.spriteCellWidth / UU.width)
        }
        if (zU.setVector2("translationPivot", this.translationPivot), zU.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const UU = this._scene.activeCamera;
          zU.setVector3("eyePosition", UU.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), zU.setTexture("rampSampler", this._rampGradientsTexture));
        const FU = zU.defines;
        this._scene && ((0, sU.e)(zU, this, this._scene), this.applyFog && (0, nU.i)(this._scene, void 0, zU)), FU.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (yU.invertToRef(QU.l.Matrix[0]), zU.setMatrix("invView", QU.l.Matrix[0])), zU._multiTarget && this._bindGeometryRendering(zU), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? cU.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, zU) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, zU)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? cU.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, zU) : cU.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, zU), this.useLogarithmicDepth && this._scene && (0, nU.t)(FU, zU, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(zU), this._setEngineBasedOnBlendMode(UU), zU._multiTarget && qX.c._BindZeroAlphaDiscard(cU, zU);
        let oU = !1;
        try {
          qX.c._BindAttachmentsForEffect(cU, zU) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(zU), this._useInstancing ? this._scene?.forceWireframe ? cU.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : cU.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? cU.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : cU.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), oU = !0)
        } finally {
          qX.c._RestoreAttachments(cU)
        }
        return oU ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const UU = this._engine;
        let XU;
        return UU.setState && (UU.setState(!1), this.forceDepthWrite && UU.setDepthWrite(!0)), XU = this.blendMode === RU.BLENDMODE_MULTIPLYADD ? this._render(RU.BLENDMODE_MULTIPLY) + this._render(RU.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), XU
      }
      _onDispose() {}
      dispose() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), UU && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), UU && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(XU, zU), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const UU = this._scene.nB.indexOf(this);
          UU > -1 && this._scene.nB.splice(UU, 1), this._scene._activeParticleSystems.dispose()
        }
        this.bS.notifyObservers(this), this.bS.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    OX.ForceGLSL = !1;
    var SX, rX = zU(37863);
    ! function(UU) {
      UU[UU.ATTACHED = 0] = "ATTACHED", UU[UU.END = 1] = "END"
    }(SX || (SX = {}));
    class uX {
      constructor(UU) {
        if (this.particleSystem = UU, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !UU.emitter || !UU.emitter.dispose) {
          const XU = (0, rX.e)("BABYLON.AbstractMesh");
          UU.emitter = new XU("SubemitterSystemEmitter", UU.nS()), UU._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let UU = this.particleSystem.emitter;
        if (UU) {
          if (UU instanceof QU.q) UU = UU.clone();
          else if (-1 !== UU.getClassName().indexOf("Mesh")) {
            UU = new((0, rX.e)("BABYLON.Mesh"))("", UU.nS()), UU.isVisible = !1
          }
        } else UU = new QU.q;
        const XU = new uX(this.particleSystem.clone(this.particleSystem.name, UU));
        return XU.particleSystem.name += "Clone", XU.type = this.type, XU.inheritDirection = this.inheritDirection, XU.inheritedVelocityAmount = this.inheritedVelocityAmount, XU.particleSystem._disposeEmitterOnDispose = !0, XU.particleSystem.disposeOnStop = !0, XU
      }
      serialize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = {};
        return XU.type = this.type, XU.inheritDirection = this.inheritDirection, XU.inheritedVelocityAmount = this.inheritedVelocityAmount, XU.particleSystem = this.particleSystem.serialize(UU), XU
      }
      static _ParseParticleSystem(UU, XU, zU) {
        throw (0, fU.m)("ParseParticle")
      }
      static Parse(UU, XU, zU) {
        const cU = UU.particleSystem,
          yU = new uX(uX._ParseParticleSystem(cU, XU, zU, !0));
        return yU.type = UU.type, yU.inheritDirection = UU.inheritDirection, yU.inheritedVelocityAmount = UU.inheritedVelocityAmount, yU.particleSystem._isSubEmitter = !0, yU
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var fX = zU(41003),
      iX = zU(41134);
    const HX = () => {};
    class MX {
      constructor() {
        this.particlePositionGenerator = HX, this.particleDestinationGenerator = HX, this.particleDirectionGenerator = HX
      }
      startDirectionFunction(UU, XU, zU, cU) {
        const yU = QU.l.Sp[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== HX) this.particleDirectionGenerator(-1, zU, yU);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== HX) {
          this.particleDestinationGenerator(-1, zU, yU);
          const UU = QU.l.Sp[1];
          yU.subtractToRef(zU.position, UU), UU.scaleToRef(1 / zU.lifeTime, yU)
        } else yU.set(0, 0, 0);
        cU ? XU.YL(yU) : QU.q.TransformNormalToRef(yU, UU, XU)
      }
      startPositionFunction(UU, XU, zU, cU) {
        const yU = QU.l.Sp[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== HX ? this.particlePositionGenerator(-1, zU, yU) : yU.set(0, 0, 0), cU ? XU.YL(yU) : QU.q.TransformCoordinatesToRef(yU, UU, XU)
      }
      clone() {
        const UU = new MX;
        return NU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {}
      buildUniformLayout(UU) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.particlePositionGenerator = this.particlePositionGenerator, UU.particleDestinationGenerator = this.particleDestinationGenerator, UU
      }
      parse(UU) {
        UU.particlePositionGenerator && (this.particlePositionGenerator = UU.particlePositionGenerator), UU.particleDestinationGenerator && (this.particleDestinationGenerator = UU.particleDestinationGenerator)
      }
    }
    const vX = QU.q.Zero(),
      VX = QU.q.Zero(),
      sX = QU.q.Zero();
    class nX {
      constructor() {
        this.strength = 0, this.position = QU.q.Zero()
      }
      _processParticle(UU, XU) {
        this.position.subtractToRef(UU.position, vX);
        const zU = vX.lengthSquared() + 1;
        vX.normalize().scaleToRef(this.strength / zU, VX), VX.scaleToRef(XU._tempScaledUpdateSpeed, sX), UU.direction.addInPlace(sX)
      }
      serialize() {
        return {
          position: this.position.cyU(),
          strength: this.strength
        }
      }
    }
    const mX = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class lX extends OX {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = UU => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const XU = Math.floor(Math.random() * this._subEmitters.length);
          for (const zU of this._subEmitters[XU])
            if (1 === zU.type) {
              const XU = zU.clone();
              UU._inheritParticleInfoToSubEmitter(XU), XU.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(XU.particleSystem), XU.particleSystem.start()
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
      set flowMap(UU) {
        this._flowMap !== UU && (this._flowMap = UU, this._flowMapUpdate && (wX(this._flowMapUpdate), this._flowMapUpdate = null), UU && (this._flowMapUpdate = {
          process: UU => {
            const XU = this.nS()?.getTransformMatrix();
            this._flowMap._processParticle(UU, this.flowMapStrength * this._tempScaledUpdateSpeed, XU)
          },
          previousItem: null,
          nextItem: null
        }, CX(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(UU) {
        super.addAttractor(UU), 1 === this._attractors.length && (this._attractorUpdate = {
          process: UU => {
            for (const XU of this._attractors) XU._processParticle(UU, this)
          },
          previousItem: null,
          nextItem: null
        }, CX(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(UU) {
        super.removeAttractor(UU), 0 === this._attractors.length && this._attractorUpdate && wX(this._attractorUpdate)
      }
      start() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(UU)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const UU of this.subEmitters) UU instanceof lX ? this._subEmitters.push([new uX(UU)]) : UU instanceof uX ? this._subEmitters.push([UU]) : UU instanceof Array && this._subEmitters.push(UU)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const UU of this.activeSubSystems) UU.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const UU = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== UU && this._rootParticleSystem.activeSubSystems.splice(UU, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(UU) {
        UU && this._stopSubEmitters()
      }
      _prepareParticle(UU) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const XU = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          UU._properties.attachedSubEmitters = [];
          for (const zU of XU)
            if (0 === zU.type) {
              const XU = zU.clone();
              UU._properties.attachedSubEmitters.push(XU), XU.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), UU && this.particles)
          for (const zU of this.particles)
            if (zU._properties.attachedSubEmitters)
              for (let UU = zU._properties.attachedSubEmitters.length - 1; UU >= 0; UU -= 1) zU._properties.attachedSubEmitters[UU].dispose();
        if (XU && this.activeSubSystems)
          for (let zU = this.activeSubSystems.length - 1; zU >= 0; zU -= 1) this.activeSubSystems[zU].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let UU = 0; UU < this._subEmitters.length; UU++)
            for (const XU of this._subEmitters[UU]) XU.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(UU, XU, zU, cU) {
        let yU;
        yU = zU instanceof fX.c ? null : zU;
        const AU = (0, rX.e)("BABYLON.Texture");
        if (AU && yU)
          if (UU.texture) XU.particleTexture = AU.Parse(UU.texture, yU, cU);
          else if (UU.textureName) {
          const zU = UU.textureSettings;
          if (XU.particleTexture = new AU(cU + UU.textureName, yU, !1, void 0 === UU.invertY || UU.invertY, zU ? zU.samplingMode : void 0), XU.particleTexture.name = UU.textureName, zU) {
            const UU = XU.particleTexture;
            for (const XU of mX) void 0 !== zU[XU] && (UU[XU] = zU[XU])
          }
        }
        if (UU.emitterId || 0 === UU.emitterId || void 0 !== UU.emitter ? (UU.emitterId || 0 === UU.emitterId) && yU ? (XU.emitter = yU.getLastMeshById(UU.emitterId), XU.emitter || (XU.emitter = QU.q.Zero())) : XU.emitter = QU.q.FromArray(UU.emitter) : XU.emitter = QU.q.Zero(), XU.isLocal = !!UU.isLocal, void 0 !== UU.renderingGroupId && (XU.renderingGroupId = UU.renderingGroupId), void 0 !== UU.isBillboardBased && (XU.isBillboardBased = UU.isBillboardBased), void 0 !== UU.billboardMode && (XU.billboardMode = UU.billboardMode), void 0 !== UU.useLogarithmicDepth && (XU.useLogarithmicDepth = UU.useLogarithmicDepth), UU.animations) {
          for (let zU = 0; zU < UU.animations.length; zU++) {
            const cU = UU.animations[zU],
              yU = (0, rX.e)("BABYLON.Animation");
            yU && XU.animations.push(yU.Parse(cU))
          }
          XU.beginAnimationOnStart = UU.beginAnimationOnStart, XU.beginAnimationFrom = UU.beginAnimationFrom, XU.beginAnimationTo = UU.beginAnimationTo, XU.beginAnimationLoop = UU.beginAnimationLoop
        }
        if (UU.autoAnimate && yU && yU.beginAnimation(XU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), XU.startDelay = 0 | UU.startDelay, XU.minAngularSpeed = UU.minAngularSpeed, XU.maxAngularSpeed = UU.maxAngularSpeed, XU.minSize = UU.minSize, XU.maxSize = UU.maxSize, UU.minScaleX && (XU.minScaleX = UU.minScaleX, XU.maxScaleX = UU.maxScaleX, XU.minScaleY = UU.minScaleY, XU.maxScaleY = UU.maxScaleY), void 0 !== UU.preWarmCycles && (XU.preWarmCycles = UU.preWarmCycles, XU.preWarmStepOffset = UU.preWarmStepOffset), void 0 !== UU.minInitialRotation && (XU.minInitialRotation = UU.minInitialRotation, XU.maxInitialRotation = UU.maxInitialRotation), XU.minLifeTime = UU.minLifeTime, XU.maxLifeTime = UU.maxLifeTime, XU.minEmitPower = UU.minEmitPower, XU.maxEmitPower = UU.maxEmitPower, XU.emitRate = UU.emitRate, XU.gravity = QU.q.FromArray(UU.gravity), UU.noiseStrength && (XU.noiseStrength = QU.q.FromArray(UU.noiseStrength)), XU.color1 = EU.e.FromArray(UU.color1), XU.color2 = EU.e.FromArray(UU.color2), XU.colorDead = EU.e.FromArray(UU.colorDead), XU.updateSpeed = UU.updateSpeed, XU.targetStopDuration = UU.targetStopDuration, XU.blendMode = UU.blendMode, UU.colorGradients)
          for (const QU of UU.colorGradients) XU.addColorGradient(QU.gradient, EU.e.FromArray(QU.color1), QU.color2 ? EU.e.FromArray(QU.color2) : void 0);
        if (UU.rampGradients) {
          for (const zU of UU.rampGradients) XU.addRampGradient(zU.gradient, EU.b.FromArray(zU.color));
          XU.useRampGradients = UU.useRampGradients
        }
        if (UU.colorRemapGradients)
          for (const QU of UU.colorRemapGradients) XU.addColorRemapGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.alphaRemapGradients)
          for (const QU of UU.alphaRemapGradients) XU.addAlphaRemapGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.sizeGradients)
          for (const QU of UU.sizeGradients) XU.addSizeGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.angularSpeedGradients)
          for (const QU of UU.angularSpeedGradients) XU.addAngularSpeedGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.velocityGradients)
          for (const QU of UU.velocityGradients) XU.addVelocityGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.dragGradients)
          for (const QU of UU.dragGradients) XU.addDragGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.emitRateGradients)
          for (const QU of UU.emitRateGradients) XU.addEmitRateGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.startSizeGradients)
          for (const QU of UU.startSizeGradients) XU.addStartSizeGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.lifeTimeGradients)
          for (const QU of UU.lifeTimeGradients) XU.addLifeTimeGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
        if (UU.limitVelocityGradients) {
          for (const zU of UU.limitVelocityGradients) XU.addLimitVelocityGradient(zU.gradient, void 0 !== zU.factor1 ? zU.factor1 : zU.factor, zU.factor2);
          XU.limitVelocityDamping = UU.limitVelocityDamping
        }
        if (UU.noiseTexture && yU) {
          const zU = (0, rX.e)("BABYLON.ProceduralTexture");
          XU.noiseTexture = zU.Parse(UU.noiseTexture, yU, cU)
        }
        let FU;
        if (UU.particleEmitterType) {
          switch (UU.particleEmitterType.type) {
            case "SphereParticleEmitter":
              FU = new tU;
              break;
            case "SphereDirectedParticleEmitter":
              FU = new gU;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              FU = new GU;
              break;
            case "ConeDirectedParticleEmitter":
              FU = new BU;
              break;
            case "CylinderParticleEmitter":
              FU = new kU.f;
              break;
            case "CylinderDirectedParticleEmitter":
              FU = new kU.b;
              break;
            case "HemisphericParticleEmitter":
              FU = new aU;
              break;
            case "PointParticleEmitter":
              FU = new pU;
              break;
            case "MeshParticleEmitter":
              FU = new ZU;
              break;
            case "CustomParticleEmitter":
              FU = new MX;
              break;
            default:
              FU = new YU.e
          }
          FU.parse(UU.particleEmitterType, yU)
        } else FU = new YU.e, FU.parse(UU, yU);
        XU.particleEmitterType = FU, XU.startSpriteCellID = UU.startSpriteCellID, XU.endSpriteCellID = UU.endSpriteCellID, XU.spriteCellLoop = UU.spriteCellLoop ?? !0, XU.spriteCellWidth = UU.spriteCellWidth, XU.spriteCellHeight = UU.spriteCellHeight, XU.spriteCellChangeSpeed = UU.spriteCellChangeSpeed, XU.spriteRandomStartCell = UU.spriteRandomStartCell, XU.disposeOnStop = UU.disposeOnStop ?? !1, XU.manualEmitCount = UU.manualEmitCount ?? -1
      }
      static Parse(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yU = arguments.length > 4 ? arguments[4] : void 0;
        const AU = UU.name;
        let FU, oU, DU = null,
          YU = null;
        if (XU instanceof fX.c ? FU = XU : (oU = XU, FU = oU.qp()), UU.customShader && (0, fU.e)(FU.createEffectForParticles)) {
          YU = UU.customShader;
          const XU = YU.shaderOptions.defines.length > 0 ? YU.shaderOptions.defines.join("\n") : "";
          DU = FU.createEffectForParticles(YU.shaderPath.fragmentElement, YU.shaderOptions.uniforms, YU.shaderOptions.samplers, XU)
        }
        const NU = new lX(AU, yU || UU.xY, XU, DU, UU.isAnimationSheetEnabled);
        if (NU.customShader = YU, NU._rootUrl = zU, UU.id && (NU.id = UU.id), UU.subEmitters) {
          NU.subEmitters = [];
          for (const cU of UU.subEmitters) {
            const UU = [];
            for (const yU of cU) UU.push(uX.Parse(yU, XU, zU));
            NU.subEmitters.push(UU)
          }
        }
        if (UU.attractors)
          for (const EU of UU.attractors) {
            const UU = new nX;
            UU.position = QU.q.FromArray(EU.position), UU.strength = EU.strength, NU.addAttractor(UU)
          }
        return lX._Parse(UU, NU, XU, zU), UU.textureMask && (NU.textureMask = EU.e.FromArray(UU.textureMask)), UU.worldOffset && (NU.worldOffset = QU.q.FromArray(UU.worldOffset)), UU.preventAutoStart && (NU.preventAutoStart = UU.preventAutoStart), UU.metadata && (NU.metadata = UU.metadata), cU || NU.preventAutoStart || NU.start(), NU
      }
      serialize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = {};
        if (lX._Serialize(XU, this, UU), XU.textureMask = this.textureMask.cyU(), XU.customShader = this.customShader, XU.preventAutoStart = this.preventAutoStart, XU.worldOffset = this.worldOffset.cyU(), this.metadata && (XU.metadata = this.metadata), this.subEmitters) {
          XU.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const zU of this._subEmitters) {
            const cU = [];
            for (const XU of zU) XU.particleSystem.doNotSerialize || cU.push(XU.serialize(UU));
            XU.subEmitters.push(cU)
          }
        }
        if (this._attractors && this._attractors.length) {
          XU.attractors = [];
          for (const UU of this._attractors) XU.attractors.push(UU.serialize())
        }
        return XU
      }
      static _Serialize(UU, XU, zU) {
        if (UU.name = XU.name, UU.id = XU.id, UU.xY = XU.getCapacity(), UU.disposeOnStop = XU.disposeOnStop, UU.manualEmitCount = XU.manualEmitCount, XU.emitter.position) {
          const zU = XU.emitter;
          UU.emitterId = zU.id
        } else {
          const zU = XU.emitter;
          UU.emitter = zU.cyU()
        }
        if (XU.particleEmitterType && (UU.particleEmitterType = XU.particleEmitterType.serialize()), XU.particleTexture)
          if (zU) UU.texture = XU.particleTexture.serialize();
          else {
            const zU = XU.particleTexture;
            UU.textureName = XU.particleTexture.name, UU.invertY = !!zU._invertY;
            const cU = {};
            for (const UU of mX) cU[UU] = zU[UU];
            cU.samplingMode = zU.samplingMode, UU.textureSettings = cU
          } UU.isLocal = XU.isLocal, iX.b.AppendSerializedAnimations(XU, UU), UU.beginAnimationOnStart = XU.beginAnimationOnStart, UU.beginAnimationFrom = XU.beginAnimationFrom, UU.beginAnimationTo = XU.beginAnimationTo, UU.beginAnimationLoop = XU.beginAnimationLoop, UU.startDelay = XU.startDelay, UU.renderingGroupId = XU.renderingGroupId, UU.isBillboardBased = XU.isBillboardBased, UU.billboardMode = XU.billboardMode, UU.minAngularSpeed = XU.minAngularSpeed, UU.maxAngularSpeed = XU.maxAngularSpeed, UU.minSize = XU.minSize, UU.maxSize = XU.maxSize, UU.minScaleX = XU.minScaleX, UU.maxScaleX = XU.maxScaleX, UU.minScaleY = XU.minScaleY, UU.maxScaleY = XU.maxScaleY, UU.minEmitPower = XU.minEmitPower, UU.maxEmitPower = XU.maxEmitPower, UU.minLifeTime = XU.minLifeTime, UU.maxLifeTime = XU.maxLifeTime, UU.emitRate = XU.emitRate, UU.gravity = XU.gravity.cyU(), UU.noiseStrength = XU.noiseStrength.cyU(), UU.color1 = XU.color1.cyU(), UU.color2 = XU.color2.cyU(), UU.colorDead = XU.colorDead.cyU(), UU.updateSpeed = XU.updateSpeed, UU.targetStopDuration = XU.targetStopDuration, UU.blendMode = XU.blendMode, UU.preWarmCycles = XU.preWarmCycles, UU.preWarmStepOffset = XU.preWarmStepOffset, UU.minInitialRotation = XU.minInitialRotation, UU.maxInitialRotation = XU.maxInitialRotation, UU.startSpriteCellID = XU.startSpriteCellID, UU.spriteCellLoop = XU.spriteCellLoop, UU.endSpriteCellID = XU.endSpriteCellID, UU.spriteCellChangeSpeed = XU.spriteCellChangeSpeed, UU.spriteCellWidth = XU.spriteCellWidth, UU.spriteCellHeight = XU.spriteCellHeight, UU.spriteRandomStartCell = XU.spriteRandomStartCell, UU.isAnimationSheetEnabled = XU.isAnimationSheetEnabled, UU.useLogarithmicDepth = XU.useLogarithmicDepth;
        const cU = XU.getColorGradients();
        if (cU) {
          UU.colorGradients = [];
          for (const XU of cU) {
            const zU = {
              gradient: XU.gradient,
              color1: XU.color1.cyU()
            };
            XU.color2 ? zU.color2 = XU.color2.cyU() : zU.color2 = XU.color1.cyU(), UU.colorGradients.push(zU)
          }
        }
        const yU = XU.getRampGradients();
        if (yU) {
          UU.rampGradients = [];
          for (const XU of yU) {
            const zU = {
              gradient: XU.gradient,
              color: XU.color.cyU()
            };
            UU.rampGradients.push(zU)
          }
          UU.useRampGradients = XU.useRampGradients
        }
        const QU = XU.getColorRemapGradients();
        if (QU) {
          UU.colorRemapGradients = [];
          for (const XU of QU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.colorRemapGradients.push(zU)
          }
        }
        const AU = XU.getAlphaRemapGradients();
        if (AU) {
          UU.alphaRemapGradients = [];
          for (const XU of AU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.alphaRemapGradients.push(zU)
          }
        }
        const FU = XU.getSizeGradients();
        if (FU) {
          UU.sizeGradients = [];
          for (const XU of FU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.sizeGradients.push(zU)
          }
        }
        const oU = XU.getAngularSpeedGradients();
        if (oU) {
          UU.angularSpeedGradients = [];
          for (const XU of oU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.angularSpeedGradients.push(zU)
          }
        }
        const DU = XU.getVelocityGradients();
        if (DU) {
          UU.velocityGradients = [];
          for (const XU of DU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.velocityGradients.push(zU)
          }
        }
        const EU = XU.getDragGradients();
        if (EU) {
          UU.dragGradients = [];
          for (const XU of EU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.dragGradients.push(zU)
          }
        }
        const YU = XU.getEmitRateGradients();
        if (YU) {
          UU.emitRateGradients = [];
          for (const XU of YU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.emitRateGradients.push(zU)
          }
        }
        const NU = XU.getStartSizeGradients();
        if (NU) {
          UU.startSizeGradients = [];
          for (const XU of NU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.startSizeGradients.push(zU)
          }
        }
        const IU = XU.getLifeTimeGradients();
        if (IU) {
          UU.lifeTimeGradients = [];
          for (const XU of IU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.lifeTimeGradients.push(zU)
          }
        }
        const pU = XU.getLimitVelocityGradients();
        if (pU) {
          UU.limitVelocityGradients = [];
          for (const XU of pU) {
            const zU = {
              gradient: XU.gradient,
              factor1: XU.factor1
            };
            void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.limitVelocityGradients.push(zU)
          }
          UU.limitVelocityDamping = XU.limitVelocityDamping
        }
        XU.noiseTexture && (UU.noiseTexture = XU.noiseTexture.serialize())
      }
      clone(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = {
          ...this._customWrappers
        };
        let yU = null;
        const QU = this._engine;
        if ((0, fU.e)(QU.createEffectForParticles) && null != this.customShader) {
          yU = this.customShader;
          const UU = yU.shaderOptions.defines.length > 0 ? yU.shaderOptions.defines.join("\n") : "",
            XU = QU.createEffectForParticles(yU.shaderPath.fragmentElement, yU.shaderOptions.uniforms, yU.shaderOptions.samplers, UU);
          cU[0] ? cU[0].effect = XU : this.setCustomEffect(XU, 0)
        }
        const AU = this.serialize(zU),
          FU = !1 === zU && this.particleTexture ? this.particleTexture.clone() : null;
        FU && (AU.textureName = void 0);
        const oU = lX.Parse(AU, this._scene || this._engine, this._rootUrl);
        return oU.name = UU, oU.customShader = yU, oU._customWrappers = cU, FU && (oU.particleTexture = FU), void 0 === XU && (XU = this.emitter), this.noiseTexture && (oU.noiseTexture = this.noiseTexture.clone()), oU.emitter = XU, this.preventAutoStart || oU.start(), oU
      }
    }
    lX.BILLBOARDMODE_Y = 2, lX.BILLBOARDMODE_ALL = 7, lX.BILLBOARDMODE_STRETCHED = 8, lX.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let xX = !1;
    xX || (xX = !0, uX._ParseParticleSystem = lX.Parse)
  },
  44318: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      SkyMaterial: () => GU,
      _MaxColorValueForRenderTarget: () => kU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(41134),
      AU = zU(37814),
      FU = zU(41366),
      oU = zU(41415),
      DU = zU(44270),
      EU = zU(42261),
      YU = zU(41199),
      NU = zU(37863),
      IU = zU(41444),
      pU = zU(41422),
      aU = zU(41406),
      tU = zU(41400);
    class gU extends FU.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function kU(UU) {
      switch (UU) {
        case DU.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case DU.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let GU = (() => {
      var UU;
      let XU, FU, DU, NU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU = oU.d,
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [],
        VU = [],
        sU = [],
        nU = [],
        mU = [],
        lU = [],
        xU = [],
        JU = [],
        jU = [],
        KU = [],
        bU = [],
        TU = [],
        hU = [],
        UX = [],
        XX = [],
        zX = [],
        cX = [],
        yX = [],
        QX = [],
        AX = [],
        FX = [],
        oX = [];
      return UU = class extends qU {
        constructor(UU, XU) {
          super(UU, XU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, cU.n)(this, OU, 1), this.turbidity = ((0, cU.n)(this, SU), (0, cU.n)(this, rU, 10)), this.rayleigh = ((0, cU.n)(this, uU), (0, cU.n)(this, fU, 2)), this.mieCoefficient = ((0, cU.n)(this, iU), (0, cU.n)(this, HU, .005)), this.mieDirectionalG = ((0, cU.n)(this, MU), (0, cU.n)(this, vU, .8)), this.distance = ((0, cU.n)(this, VU), (0, cU.n)(this, sU, 500)), this.inclination = ((0, cU.n)(this, nU), (0, cU.n)(this, mU, .49)), this.azimuth = ((0, cU.n)(this, lU), (0, cU.n)(this, xU, .25)), this.sunPosition = ((0, cU.n)(this, JU), (0, cU.n)(this, jU, new AU.Sp(0, 100, 0))), this.useSunPosition = ((0, cU.n)(this, KU), (0, cU.n)(this, bU, !1)), this.cameraOffset = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, AU.Sp.Zero())), this.up = ((0, cU.n)(this, UX), (0, cU.n)(this, XX, AU.Sp.Up())), this.dithering = ((0, cU.n)(this, zX), (0, cU.n)(this, cX, !1)), this.rawHdrOutput = ((0, cU.n)(this, yX), (0, cU.n)(this, QX, !1)), this.cloudiness = ((0, cU.n)(this, AX), (0, cU.n)(this, FX, 0)), this._cameraPosition = ((0, cU.n)(this, oX), AU.Sp.Zero()), this._skyOrientation = new AU.Quaternion
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
        isReadyForSubMesh(XU, zU) {
          const cU = zU._drawWrapper;
          if (this.isFrozen && cU.effect && cU._wasPreviouslyReady) return !0;
          zU.materialDefines || (zU.materialDefines = new gU);
          const yU = zU.materialDefines,
            QU = this.nS();
          if (this._isReadyForSubMesh(zU)) return !0;
          if ((0, tU._)(XU, QU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, yU, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, tU.Q)(XU, yU, !0, !1), yU.IMAGEPROCESSINGPOSTPROCESS !== QU.imageProcessingConfiguration.applyByPostProcess && yU.markAsMiscDirty(), yU.DITHER !== this.dithering && yU.markAsMiscDirty(), yU.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && yU.markAsMiscDirty(), yU.isDirty) {
            yU.markAsProcessed(), QU.resetCachedMaterial();
            const XU = new pU.d;
            yU.FOG && XU.addFallback(1, "FOG"), yU.IMAGEPROCESSINGPOSTPROCESS = QU.imageProcessingConfiguration.applyByPostProcess, yU.DITHER = this.dithering, yU.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const cU = [EU.e.PositionKind];
            yU.VERTEXCOLOR && cU.push(EU.e.ColorKind);
            const AU = "sky",
              FU = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, aU.c)(FU);
            const oU = yU.toString();
            zU.setEffect(QU.qp().createEffect(AU, {
              attributes: cU,
              uniformsNames: FU,
              uniformBuffersNames: [],
              samplers: [],
              defines: oU,
              fallbacks: XU,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, QU.qp()), yU, this._materialContext)
          }
          return !(!zU.effect || !zU.effect.isReady()) && (yU._renderId = QU.getRenderId(), cU._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(UU, XU, zU) {
          const cU = this.nS(),
            yU = zU.materialDefines;
          if (!yU) return;
          const QU = zU.effect;
          if (!QU) return;
          this._activeEffect = QU, this.bindOnlyWorldMatrix(UU), this._activeEffect.setMatrix("viewProjection", cU.getTransformMatrix()), this._mustRebind(cU, QU, zU) && ((0, aU.e)(QU, this, cU), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, tU.t)(yU, QU, cU)), cU.fogEnabled && XU.applyFog && cU.fogMode !== YU.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", cU.getViewMatrix()), (0, tU.i)(cU, XU, this._activeEffect, this.rawHdrOutput);
          const FU = cU.activeCamera;
          if (FU) {
            const UU = FU.getWorldMatrix();
            this._cameraPosition.x = UU.m[12], this._cameraPosition.y = UU.m[13], this._cameraPosition.z = UU.m[14], this._activeEffect.setVector3("cameraPosition", AU.TmpVectors.Sp[0].YL(this._cameraPosition).ZyU(cU.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const UU = cU.qp()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", kU(UU?.texture?.type))
          }
          if (!this.useSunPosition) {
            const UU = Math.PI * (this.inclination - .5),
              XU = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(XU) * Math.cos(UU), this.sunPosition.y = this.distance * Math.sin(-UU), this.sunPosition.z = this.distance * Math.sin(XU) * Math.cos(UU), AU.Quaternion.FromUnitVectorsToRef(AU.Sp.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(XU, this._activeEffect, zU)
        }
        getAnimatables() {
          return []
        }
        dispose(UU) {
          super.dispose(UU)
        }
        clone(XU) {
          return QU.b.Clone((() => new UU(XU, this.nS())), this)
        }
        serialize() {
          const UU = super.serialize();
          return UU.customType = "BABYLON.SkyMaterial", UU
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(XU, zU, cU) {
          return QU.b.Parse((() => new UU(XU.name, zU)), XU, zU, cU)
        }
      }, (() => {
        const zU = "function" === typeof Symbol && Symbol.metadata ? Object.create(qU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, yU.I)()], FU = [(0, yU.I)()], DU = [(0, yU.I)()], NU = [(0, yU.I)()], GU = [(0, yU.I)()], BU = [(0, yU.I)()], ZU = [(0, yU.I)()], RU = [(0, yU.I)()], PU = [(0, yU.F)()], WU = [(0, yU.I)()], dU = [(0, yU.F)()], LU = [(0, yU.F)()], eU = [(0, yU.I)()], CU = [(0, yU.I)()], wU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: UU => "luminance" in UU,
            get: UU => UU.luminance,
            set: (UU, XU) => {
              UU.luminance = XU
            }
          },
          metadata: zU
        }, OU, SU), (0, cU.j)(null, null, FU, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: UU => "turbidity" in UU,
            get: UU => UU.turbidity,
            set: (UU, XU) => {
              UU.turbidity = XU
            }
          },
          metadata: zU
        }, rU, uU), (0, cU.j)(null, null, DU, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: UU => "rayleigh" in UU,
            get: UU => UU.rayleigh,
            set: (UU, XU) => {
              UU.rayleigh = XU
            }
          },
          metadata: zU
        }, fU, iU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: UU => "mieCoefficient" in UU,
            get: UU => UU.mieCoefficient,
            set: (UU, XU) => {
              UU.mieCoefficient = XU
            }
          },
          metadata: zU
        }, HU, MU), (0, cU.j)(null, null, GU, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: UU => "mieDirectionalG" in UU,
            get: UU => UU.mieDirectionalG,
            set: (UU, XU) => {
              UU.mieDirectionalG = XU
            }
          },
          metadata: zU
        }, vU, VU), (0, cU.j)(null, null, BU, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: UU => "distance" in UU,
            get: UU => UU.distance,
            set: (UU, XU) => {
              UU.distance = XU
            }
          },
          metadata: zU
        }, sU, nU), (0, cU.j)(null, null, ZU, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: UU => "inclination" in UU,
            get: UU => UU.inclination,
            set: (UU, XU) => {
              UU.inclination = XU
            }
          },
          metadata: zU
        }, mU, lU), (0, cU.j)(null, null, RU, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: UU => "azimuth" in UU,
            get: UU => UU.azimuth,
            set: (UU, XU) => {
              UU.azimuth = XU
            }
          },
          metadata: zU
        }, xU, JU), (0, cU.j)(null, null, PU, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: UU => "sunPosition" in UU,
            get: UU => UU.sunPosition,
            set: (UU, XU) => {
              UU.sunPosition = XU
            }
          },
          metadata: zU
        }, jU, KU), (0, cU.j)(null, null, WU, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSunPosition" in UU,
            get: UU => UU.useSunPosition,
            set: (UU, XU) => {
              UU.useSunPosition = XU
            }
          },
          metadata: zU
        }, bU, TU), (0, cU.j)(null, null, dU, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: UU => "cameraOffset" in UU,
            get: UU => UU.cameraOffset,
            set: (UU, XU) => {
              UU.cameraOffset = XU
            }
          },
          metadata: zU
        }, hU, UX), (0, cU.j)(null, null, LU, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: UU => "up" in UU,
            get: UU => UU.up,
            set: (UU, XU) => {
              UU.up = XU
            }
          },
          metadata: zU
        }, XX, zX), (0, cU.j)(null, null, eU, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: UU => "dithering" in UU,
            get: UU => UU.dithering,
            set: (UU, XU) => {
              UU.dithering = XU
            }
          },
          metadata: zU
        }, cX, yX), (0, cU.j)(null, null, CU, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: UU => "rawHdrOutput" in UU,
            get: UU => UU.rawHdrOutput,
            set: (UU, XU) => {
              UU.rawHdrOutput = XU
            }
          },
          metadata: zU
        }, QX, AX), (0, cU.j)(null, null, wU, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: UU => "cloudiness" in UU,
            get: UU => UU.cloudiness,
            set: (UU, XU) => {
              UU.cloudiness = XU
            }
          },
          metadata: zU
        }, FX, oX), zU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zU
        })
      })(), UU._ShaderLoader = new IU.e((() => [zU.e(636).then((() => zU(63999))), zU.e(629).then((() => zU(64003)))]), (() => [zU.e(653).then((() => zU(64006))), zU.e(647).then((() => zU(64008)))])), UU
    })();
    (0, NU.h)("BABYLON.SkyMaterial", GU)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);