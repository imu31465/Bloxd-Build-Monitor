export const id = 274;
export const ids = [274];
export const modules = {
  39088: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(37693),
      CW = MW(39093);
    class zR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = MW, this.XNW = [], this._maxBlockCapacity = RW || 64, this._selectionContent = new wW.e(1024), this._creationFunc = WW
      }
      update(WW, RW, MW) {
        CW.c._CreateBlocks(WW, RW, MW, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      TNW(WW) {
        for (let RW = 0; RW < this.blocks.length; RW++) {
          this.blocks[RW].addEntry(WW)
        }
      }
      dRW(WW) {
        for (let RW = 0; RW < this.blocks.length; RW++) {
          this.blocks[RW].removeEntry(WW)
        }
      }
      select(WW, RW) {
        this._selectionContent.reset();
        for (let MW = 0; MW < this.blocks.length; MW++) {
          this.blocks[MW].select(WW, this._selectionContent, RW)
        }
        return RW ? this._selectionContent.concat(this.XNW) : this._selectionContent.concatWithNoDuplicate(this.XNW), this._selectionContent
      }
      intersects(WW, RW, MW) {
        this._selectionContent.reset();
        for (let wW = 0; wW < this.blocks.length; wW++) {
          this.blocks[wW].intersects(WW, RW, this._selectionContent, MW)
        }
        return MW ? this._selectionContent.concat(this.XNW) : this._selectionContent.concatWithNoDuplicate(this.XNW), this._selectionContent
      }
      intersectsRay(WW) {
        this._selectionContent.reset();
        for (let RW = 0; RW < this.blocks.length; RW++) {
          this.blocks[RW].intersectsRay(WW, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.XNW), this._selectionContent
      }
    }
    zR.CreationFuncForMeshes = (WW, RW) => {
      const MW = WW.LRW();
      !WW.isBlocked && MW.boundingBox.intersectsMinMax(RW.INW, RW.PNW) && RW.entries.push(WW)
    }, zR.CreationFuncForSubMeshes = (WW, RW) => {
      WW.LRW().boundingBox.intersectsMinMax(RW.INW, RW.PNW) && RW.entries.push(WW)
    }
  },
  39093: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(35324),
      CW = MW(37888);
    class zR {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.entries = [], this.jeW = new Array, this._capacity = MW, this._depth = wW, this._maxDepth = CW, this._creationFunc = zR, this._minPoint = WW, this._maxPoint = RW, this.jeW.push(WW.clone()), this.jeW.push(RW.clone()), this.jeW.push(WW.clone()), this.jeW[2].x = RW.x, this.jeW.push(WW.clone()), this.jeW[3].y = RW.y, this.jeW.push(WW.clone()), this.jeW[4].z = RW.z, this.jeW.push(RW.clone()), this.jeW[5].z = WW.z, this.jeW.push(RW.clone()), this.jeW[6].x = WW.x, this.jeW.push(RW.clone()), this.jeW[7].y = WW.y
      }
      get aR() {
        return this._capacity
      }
      get INW() {
        return this._minPoint
      }
      get PNW() {
        return this._maxPoint
      }
      addEntry(WW) {
        if (this.blocks)
          for (let RW = 0; RW < this.blocks.length; RW++) {
            this.blocks[RW].addEntry(WW)
          } else this._creationFunc(WW, this), this.entries.length > this.aR && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(WW) {
        if (this.blocks) {
          for (let RW = 0; RW < this.blocks.length; RW++) {
            this.blocks[RW].removeEntry(WW)
          }
          return
        }
        const RW = this.entries.indexOf(WW);
        RW > -1 && this.entries.splice(RW, 1)
      }
      addEntries(WW) {
        for (let RW = 0; RW < WW.length; RW++) {
          const MW = WW[RW];
          this.addEntry(MW)
        }
      }
      select(WW, RW, MW) {
        if (CW.e.IsInFrustum(this.jeW, WW)) {
          if (this.blocks) {
            for (let wW = 0; wW < this.blocks.length; wW++) {
              this.blocks[wW].select(WW, RW, MW)
            }
            return
          }
          MW ? RW.concat(this.entries) : RW.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(WW, RW, MW, wW) {
        if (CW.e.IntersectsSphere(this._minPoint, this._maxPoint, WW, RW)) {
          if (this.blocks) {
            for (let CW = 0; CW < this.blocks.length; CW++) {
              this.blocks[CW].intersects(WW, RW, MW, wW)
            }
            return
          }
          wW ? MW.concat(this.entries) : MW.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(WW, RW) {
        if (WW.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let MW = 0; MW < this.blocks.length; MW++) {
              this.blocks[MW].intersectsRay(WW, RW)
            }
            return
          }
          RW.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        zR._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(WW, RW, MW, CW, AW, bR, yR, NW) {
        yR.blocks = new Array;
        const eW = new wW.q((RW.x - WW.x) / 2, (RW.y - WW.y) / 2, (RW.z - WW.z) / 2);
        for (let wW = 0; wW < 2; wW++)
          for (let RW = 0; RW < 2; RW++)
            for (let BW = 0; BW < 2; BW++) {
              const tR = WW.add(eW.multiplyByFloats(wW, RW, BW)),
                TW = WW.add(eW.multiplyByFloats(wW + 1, RW + 1, BW + 1)),
                gR = new zR(tR, TW, CW, AW + 1, bR, NW);
              gR.addEntries(MW), yR.blocks.push(gR)
            }
      }
    }
  },
  39100: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW
    });
    var wW = MW(37677),
      CW = MW(35324),
      zR = MW(38028),
      AW = MW(39041),
      bR = MW(37749),
      yR = MW(35344),
      NW = MW(39088);
    class eW {
      constructor(WW) {
        this.name = bR.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new AW.y(CW.q.Zero(), new CW.q(1, 1, 1)), (WW = WW || yR.d.LastCreatedScene) && (this.LC = WW, this.LC.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.LC.getActiveSubMeshCandidates = WW => this.getActiveSubMeshCandidates(WW), this.LC.getCollidingSubMeshCandidates = (WW, RW) => this.getCollidingSubMeshCandidates(WW, RW), this.LC.getIntersectingSubMeshCandidates = (WW, RW) => this.getIntersectingSubMeshCandidates(WW, RW))
      }
      register() {
        this.LC.onMeshRemovedObservable.add((WW => {
          const RW = this.LC.selectionOctree;
          if (void 0 !== RW && null !== RW) {
            const MW = RW.XNW.indexOf(WW); - 1 !== MW && RW.XNW.splice(MW, 1)
          }
        })), this.LC.onMeshImportedObservable.add((WW => {
          const RW = this.LC.selectionOctree;
          void 0 !== RW && null !== RW && RW.TNW(WW)
        }))
      }
      getActiveMeshCandidates() {
        return this.LC.UNW?.select(this.LC.frustumPlanes) || this.LC._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(WW) {
        if (WW._submeshesOctree && WW.useOctreeForRenderingSelection) {
          return WW._submeshesOctree.select(this.LC.frustumPlanes)
        }
        return this.LC._getDefaultSubMeshCandidates(WW)
      }
      getIntersectingSubMeshCandidates(WW, RW) {
        if (WW._submeshesOctree && WW.useOctreeForPicking) {
          AW.y.TransformToRef(RW, WW.getWorldMatrix(), this._tempRay);
          return WW._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.LC._getDefaultSubMeshCandidates(WW)
      }
      getCollidingSubMeshCandidates(WW, RW) {
        if (WW._submeshesOctree && WW.useOctreeForCollisions) {
          const MW = RW._velocityWorldLength + Math.max(RW._radius.x, RW._radius.y, RW._radius.z);
          return WW._submeshesOctree.intersects(RW._basePointWorld, MW)
        }
        return this.LC._getDefaultSubMeshCandidates(WW)
      }
      rebuild() {}
      dispose() {}
    }
    let BW = !1;
    BW || (BW = !0, wW.i.prototype.createOrUpdateSelectionOctree = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        MW = this._getComponent(bR.d.NAME_OCTREE);
      MW || (MW = new eW(this), this.SyW(MW)), this.UNW || (this.UNW = new NW.b(NW.b.CreationFuncForMeshes, WW, RW));
      const wW = this.getWorldExtends();
      return this.UNW.update(wW.min, wW.max, this.meshes), this.UNW
    }, Object.defineProperty(wW.i.prototype, "selectionOctree", {
      get: function() {
        return this.UNW
      },
      enumerable: !0,
      configurable: !0
    }), zR.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const MW = this.QRW();
      let wW = MW._getComponent(bR.d.NAME_OCTREE);
      wW || (wW = new eW(MW), MW.SyW(wW)), this._submeshesOctree || (this._submeshesOctree = new NW.b(NW.b.CreationFuncForSubMeshes, WW, RW)), this.computeWorldMatrix(!0);
      const CW = this.LRW().boundingBox;
      return this._submeshesOctree.update(CW.minimumWorld, CW.maximumWorld, this.Qs), this._submeshesOctree
    })
  },
  39041: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => kR,
      g: () => iR,
      i: () => gR,
      l: () => TW,
      m: () => XW,
      n: () => cR,
      o: () => fW,
      s: () => rR,
      v: () => QW,
      y: () => BW
    });
    var wW = MW(35328),
      CW = MW(35324),
      zR = MW(35330),
      AW = MW(37882),
      bR = MW(37716),
      yR = MW(35344),
      NW = MW(37768);
    const eW = {
      internalPickerForMesh: void 0
    };
    class BW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wW.c;
        this.origin = WW, this.direction = RW, this.length = MW, this.epsilon = CW
      }
      clone() {
        return new BW(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const wW = BW._TmpVector3[0].nzW(WW.x - MW, WW.y - MW, WW.z - MW),
          CW = BW._TmpVector3[1].nzW(RW.x + MW, RW.y + MW, RW.z + MW);
        let zR, AW, bR, yR, NW = 0,
          eW = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < wW.x || this.origin.x > CW.x) return !1
        } else if (zR = 1 / this.direction.x, AW = (wW.x - this.origin.x) * zR, bR = (CW.x - this.origin.x) * zR, bR === -1 / 0 && (bR = 1 / 0), AW > bR && (yR = AW, AW = bR, bR = yR), NW = Math.max(AW, NW), eW = Math.min(bR, eW), NW > eW) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < wW.y || this.origin.y > CW.y) return !1
        } else if (zR = 1 / this.direction.y, AW = (wW.y - this.origin.y) * zR, bR = (CW.y - this.origin.y) * zR, bR === -1 / 0 && (bR = 1 / 0), AW > bR && (yR = AW, AW = bR, bR = yR), NW = Math.max(AW, NW), eW = Math.min(bR, eW), NW > eW) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < wW.z || this.origin.z > CW.z) return !1
        } else if (zR = 1 / this.direction.z, AW = (wW.z - this.origin.z) * zR, bR = (CW.z - this.origin.z) * zR, bR === -1 / 0 && (bR = 1 / 0), AW > bR && (yR = AW, AW = bR, bR = yR), NW = Math.max(AW, NW), eW = Math.min(bR, eW), NW > eW) return !1;
        return !0
      }
      intersectsBox(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(WW.minimum, WW.maximum, RW)
      }
      intersectsSphere(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = WW.center.x - this.origin.x,
          wW = WW.center.y - this.origin.y,
          CW = WW.center.z - this.origin.z,
          zR = MW * MW + wW * wW + CW * CW,
          AW = WW.radius + RW,
          bR = AW * AW;
        if (zR <= bR) return !0;
        const yR = MW * this.direction.x + wW * this.direction.y + CW * this.direction.z;
        if (yR < 0) return !1;
        return zR - yR * yR <= bR
      }
      intersectsTriangle(WW, RW, MW) {
        const wW = BW._TmpVector3[0],
          zR = BW._TmpVector3[1],
          bR = BW._TmpVector3[2],
          yR = BW._TmpVector3[3],
          NW = BW._TmpVector3[4];
        RW.subtractToRef(WW, wW), MW.subtractToRef(WW, zR), CW.q.CrossToRef(this.direction, zR, bR);
        const eW = CW.q.Dot(wW, bR);
        if (0 === eW) return null;
        const tR = 1 / eW;
        this.origin.subtractToRef(WW, yR);
        const TW = CW.q.Dot(yR, bR) * tR;
        if (TW < -this.epsilon || TW > 1 + this.epsilon) return null;
        CW.q.CrossToRef(yR, wW, NW);
        const gR = CW.q.Dot(this.direction, NW) * tR;
        if (gR < -this.epsilon || TW + gR > 1 + this.epsilon) return null;
        const iR = CW.q.Dot(zR, NW) * tR;
        return iR > this.length || iR < 0 ? null : new AW.e(1 - TW - gR, TW, iR)
      }
      intersectsPlane(WW) {
        let RW;
        const MW = CW.q.Dot(WW.normal, this.direction);
        if (Math.abs(MW) < 9.99999997475243e-7) return null;
        {
          const wW = CW.q.Dot(WW.normal, this.origin);
          return RW = (-WW.d - wW) / MW, RW < 0 ? RW < -9.99999997475243e-7 ? null : 0 : RW
        }
      }
      intersectsAxis(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (WW) {
          case "y": {
            const WW = (this.origin.y - RW) / this.direction.y;
            return WW > 0 ? null : new CW.q(this.origin.x + this.direction.x * -WW, RW, this.origin.z + this.direction.z * -WW)
          }
          case "x": {
            const WW = (this.origin.x - RW) / this.direction.x;
            return WW > 0 ? null : new CW.q(RW, this.origin.y + this.direction.y * -WW, this.origin.z + this.direction.z * -WW)
          }
          case "z": {
            const WW = (this.origin.z - RW) / this.direction.z;
            return WW > 0 ? null : new CW.q(this.origin.x + this.direction.x * -WW, this.origin.y + this.direction.y * -WW, RW)
          }
          default:
            return null
        }
      }
      ReW(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zR = arguments.length > 4 ? arguments[4] : void 0,
          AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bR = CW.k.Matrix[0];
        return WW.getWorldMatrix().invertToRef(bR), this._tmpRay ? BW.TransformToRef(this, bR, this._tmpRay) : this._tmpRay = BW.Transform(this, bR), WW.intersects(this._tmpRay, RW, MW, wW, zR, AW)
      }
      intersectsMeshes(WW, RW, MW) {
        MW ? MW.length = 0 : MW = [];
        for (let wW = 0; wW < WW.length; wW++) {
          const CW = this.ReW(WW[wW], RW);
          CW.hit && MW.push(CW)
        }
        return MW.sort(this._comparePickingInfo), MW
      }
      _comparePickingInfo(WW, RW) {
        return WW.distance < RW.distance ? -1 : WW.distance > RW.distance ? 1 : 0
      }
      intersectionSegment(WW, RW, MW) {
        const wW = this.origin,
          zR = CW.k.vC[0],
          AW = CW.k.vC[1],
          bR = CW.k.vC[2],
          yR = CW.k.vC[3];
        RW.subtractToRef(WW, zR), this.direction.scaleToRef(BW._Rayl, bR), wW.addToRef(bR, AW), WW.subtractToRef(wW, yR);
        const NW = CW.q.Dot(zR, zR),
          eW = CW.q.Dot(zR, bR),
          tR = CW.q.Dot(bR, bR),
          TW = CW.q.Dot(zR, yR),
          gR = CW.q.Dot(bR, yR),
          iR = NW * tR - eW * eW;
        let YW, JW, PW = iR,
          IW = iR;
        iR < BW._Smallnum ? (YW = 0, PW = 1, JW = gR, IW = tR) : (YW = eW * gR - tR * TW, JW = NW * gR - eW * TW, YW < 0 ? (YW = 0, JW = gR, IW = tR) : YW > PW && (YW = PW, JW = gR + eW, IW = tR)), JW < 0 ? (JW = 0, -TW < 0 ? YW = 0 : -TW > NW ? YW = PW : (YW = -TW, PW = NW)) : JW > IW && (JW = IW, -TW + eW < 0 ? YW = 0 : -TW + eW > NW ? YW = PW : (YW = -TW + eW, PW = NW));
        const oW = Math.abs(YW) < BW._Smallnum ? 0 : YW / PW,
          lW = Math.abs(JW) < BW._Smallnum ? 0 : JW / IW,
          FW = CW.k.vC[4];
        bR.scaleToRef(lW, FW);
        const fW = CW.k.vC[5];
        zR.scaleToRef(oW, fW), fW.addInPlace(yR);
        const QW = CW.k.vC[6];
        fW.subtractToRef(FW, QW);
        return lW > 0 && lW <= this.length && QW.lengthSquared() < MW * MW ? fW.length() : -1
      }
      update(WW, RW, MW, wW, zR, AW, bR) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          BW._RayDistant || (BW._RayDistant = BW.Zero()), BW._RayDistant.unprojectRayToRef(WW, RW, MW, wW, CW.d.IdentityReadOnly, AW, bR);
          const yR = CW.k.Matrix[0];
          zR.invertToRef(yR), BW.TransformToRef(BW._RayDistant, yR, this)
        } else this.unprojectRayToRef(WW, RW, MW, wW, zR, AW, bR);
        return this
      }
      static Zero() {
        return new BW(CW.q.Zero(), CW.q.Zero())
      }
      static CreateNew(WW, RW, MW, wW, CW, zR, AW) {
        return BW.Zero().update(WW, RW, MW, wW, CW, zR, AW)
      }
      static CreateNewFromTo(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CW.d.IdentityReadOnly;
        const wW = new BW(new CW.q(0, 0, 0), new CW.q(0, 0, 0));
        return BW.CreateFromToToRef(WW, RW, wW, MW)
      }
      static CreateFromToToRef(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CW.d.IdentityReadOnly;
        MW.origin.hyW(WW);
        const zR = RW.subtractToRef(WW, MW.direction),
          AW = Math.sqrt(zR.x * zR.x + zR.y * zR.y + zR.z * zR.z);
        return MW.length = AW, MW.direction.normalize(), BW.TransformToRef(MW, wW, MW)
      }
      static Transform(WW, RW) {
        const MW = new BW(new CW.q(0, 0, 0), new CW.q(0, 0, 0));
        return BW.TransformToRef(WW, RW, MW), MW
      }
      static TransformToRef(WW, RW, MW) {
        CW.q.TransformCoordinatesToRef(WW.origin, RW, MW.origin), CW.q.TransformNormalToRef(WW.direction, RW, MW.direction), MW.length = WW.length, MW.epsilon = WW.epsilon;
        const wW = MW.direction,
          zR = wW.length();
        if (0 !== zR && 1 !== zR) {
          const WW = 1 / zR;
          wW.x *= WW, wW.y *= WW, wW.z *= WW, MW.length *= zR
        }
        return MW
      }
      unprojectRayToRef(WW, RW, MW, wW, zR, AW, bR) {
        const NW = CW.k.Matrix[0];
        zR.multiplyToRef(AW, NW), NW.multiplyToRef(bR, NW), NW.invert();
        const eW = yR.d.LastCreatedEngine,
          BW = CW.k.vC[0];
        BW.x = WW / MW * 2 - 1, BW.y = -(RW / wW * 2 - 1), BW.z = eW?.BNW ? 1 : eW?.isNDCHalfZRange ? 0 : -1;
        const tR = CW.k.vC[1].nzW(BW.x, BW.y, 1 - 1e-8),
          TW = CW.k.vC[2],
          gR = CW.k.vC[3];
        CW.q.TransformCoordinatesToRef(BW, NW, TW), CW.q.TransformCoordinatesToRef(tR, NW, gR), this.origin.hyW(TW), gR.subtractToRef(TW, this.direction), this.direction.normalize()
      }
    }

    function tR(WW, RW, MW, wW, CW) {
      let zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const AW = BW.Zero();
      return TW(WW, RW, MW, wW, AW, CW, zR), AW
    }

    function TW(WW, RW, MW, wW, zR, AW) {
      let bR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const NW = WW.mC();
      if (!AW && !(AW = WW.activeCamera) && !(AW = WW.cameraToUseForPointers)) return WW;
      const eW = AW.viewport,
        BW = NW.getRenderHeight(),
        {
          x: tR,
          y: TW,
          width: gR,
          height: iR
        } = eW.toGlobal(NW.getRenderWidth(), BW),
        YW = 1 / NW.getHardwareScalingLevel();
      return RW = RW * YW - tR, MW = MW * YW - (BW - TW - iR), zR.update(RW, MW, gR, iR, wW || CW.d.IdentityReadOnly, bR ? CW.d.IdentityReadOnly : AW.getViewMatrix(), AW.getProjectionMatrix(), yR), WW
    }

    function gR(WW, RW, MW, wW) {
      const CW = BW.Zero();
      return iR(WW, RW, MW, CW, wW), CW
    }

    function iR(WW, RW, MW, wW, zR) {
      if (!bR.d) return WW;
      const AW = WW.mC();
      if (!zR && !(zR = WW.activeCamera) && !(zR = WW.cameraToUseForPointers)) throw new Error("Active camera not set");
      const yR = zR.viewport,
        NW = AW.getRenderHeight(),
        {
          x: eW,
          y: BW,
          width: tR,
          height: TW
        } = yR.toGlobal(AW.getRenderWidth(), NW),
        gR = CW.d.Identity(),
        iR = 1 / AW.getHardwareScalingLevel();
      return RW = RW * iR - eW, MW = MW * iR - (NW - BW - TW), wW.update(RW, MW, tR, TW, gR, gR, zR.getProjectionMatrix()), WW
    }

    function YW(WW, RW, MW, wW, CW, zR, AW, bR) {
      return JW(WW, MW, wW, RW(wW, MW.enableDistantPicking), CW, zR, AW, bR)
    }

    function JW(WW, RW, MW, wW, CW, zR, AW, bR) {
      const yR = RW.intersects(wW, CW, AW, zR, MW, bR);
      return yR && yR.hit ? !CW && null != WW && yR.distance >= WW.distance ? null : yR : null
    }

    function PW(WW, RW) {
      return "InstancedLinesMesh" === WW || "LinesMesh" === WW ? RW.intersectionThreshold : 0
    }

    function IW(WW) {
      const RW = WW.getClassName();
      if ("GreasedLineMesh" === RW) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const MW = WW.rawBoundingInfo;
      return {
        rawBoundingInfo: MW,
        intersectionThreshold: MW ? PW(RW, WW) : 0
      }
    }

    function oW(WW, RW, MW, wW, CW) {
      const zR = WW(MW, RW.enableDistantPicking);
      return zR.intersectsSphere(wW.VNW, CW) && zR.intersectsBox(wW.boundingBox, CW) ? zR : null
    }

    function lW(WW, RW, MW, wW, zR, AW) {
      let yR = null;
      const NW = !!(WW.activeCameras && WW.activeCameras.length > 1 && WW.cameraToUseForPointers !== WW.activeCamera),
        BW = WW.cameraToUseForPointers || WW.activeCamera,
        tR = eW.internalPickerForMesh || YW,
        TW = tR === YW;
      for (let bR = 0; bR < WW.meshes.length; bR++) {
        const eW = WW.meshes[bR];
        if (MW) {
          if (!MW(eW, -1)) continue
        } else if (!eW.isEnabled() || !eW.isVisible || !eW.DC) continue;
        const gR = NW && eW.isWorldMatrixCameraDependent(),
          iR = eW.computeWorldMatrix(gR, BW);
        if (eW.hasThinInstances && eW.sbW) {
          const WW = tR(yR, RW, eW, iR, !0, !0, AW);
          if (WW) {
            if (zR) return WW;
            const {
              rawBoundingInfo: bR,
              intersectionThreshold: NW
            } = IW(eW), BW = eW._thinInstanceDataStorage.matrixData;
            if (BW) {
              const WW = CW.k.Matrix[0],
                gR = CW.k.Matrix[1],
                YW = Math.min(eW.fzW, BW.length >> 4);
              for (let PW = 0; PW < YW; PW++) {
                if (MW && !MW(eW, PW)) continue;
                CW.d.FromArrayToRef(BW, PW << 4, WW), WW.multiplyToRef(iR, gR);
                const YW = TW && bR ? oW(RW, eW, gR, bR, NW) : null;
                if (TW && bR && !YW) continue;
                const IW = TW && YW ? JW(yR, eW, gR, YW, wW, zR, AW, !0) : tR(yR, RW, eW, gR, wW, zR, AW, !0);
                if (IW && (yR = IW, yR.thinInstanceIndex = PW, wW)) return yR
              }
            }
          }
        } else {
          const WW = tR(yR, RW, eW, iR, wW, zR, AW);
          if (WW && (yR = WW, wW)) return yR
        }
      }
      return yR || new bR.d
    }

    function FW(WW, RW, MW, wW) {
      if (!bR.d) return null;
      const zR = [],
        AW = !!(WW.activeCameras && WW.activeCameras.length > 1 && WW.cameraToUseForPointers !== WW.activeCamera),
        yR = WW.cameraToUseForPointers || WW.activeCamera,
        NW = eW.internalPickerForMesh || YW,
        BW = NW === YW;
      for (let bR = 0; bR < WW.meshes.length; bR++) {
        const eW = WW.meshes[bR];
        if (MW) {
          if (!MW(eW, -1)) continue
        } else if (!eW.isEnabled() || !eW.isVisible || !eW.DC) continue;
        const tR = AW && eW.isWorldMatrixCameraDependent(),
          TW = eW.computeWorldMatrix(tR, yR);
        if (eW.hasThinInstances && eW.sbW) {
          if (NW(null, RW, eW, TW, !0, !0, wW)) {
            const {
              rawBoundingInfo: WW,
              intersectionThreshold: AW
            } = IW(eW), bR = eW._thinInstanceDataStorage.matrixData;
            if (bR) {
              const yR = CW.k.Matrix[0],
                tR = CW.k.Matrix[1],
                gR = Math.min(eW.fzW, bR.length >> 4);
              for (let iR = 0; iR < gR; iR++) {
                if (MW && !MW(eW, iR)) continue;
                CW.d.FromArrayToRef(bR, iR << 4, yR), yR.multiplyToRef(TW, tR);
                const gR = BW && WW ? oW(RW, eW, tR, WW, AW) : null;
                if (BW && WW && !gR) continue;
                const YW = BW && gR ? JW(null, eW, tR, gR, !1, !1, wW, !0) : NW(null, RW, eW, tR, !1, !1, wW, !0);
                YW && (YW.thinInstanceIndex = iR, zR.push(YW))
              }
            }
          }
        } else {
          const WW = NW(null, RW, eW, TW, !1, !1, wW);
          WW && zR.push(WW)
        }
      }
      return zR
    }

    function fW(WW, RW, MW, wW, zR, AW) {
      if (!bR.d) return null;
      const yR = lW(WW, (wW => (WW._tempPickingRay || (WW._tempPickingRay = BW.Zero()), TW(WW, RW, MW, wW, WW._tempPickingRay, AW || null), WW._tempPickingRay)), wW, zR, !0);
      return yR && (yR.ray = tR(WW, RW, MW, CW.d.Identity(), AW || null)), yR
    }

    function QW(WW, RW, MW, wW, zR, AW, bR) {
      const yR = lW(WW, ((wW, CW) => (WW._tempPickingRay || (WW._tempPickingRay = BW.Zero()), TW(WW, RW, MW, wW, WW._tempPickingRay, AW || null, !1, CW), WW._tempPickingRay)), wW, zR, !1, bR);
      return yR && (yR.ray = tR(WW, RW, MW, CW.d.Identity(), AW || null)), yR
    }

    function rR(WW, RW, MW, wW, zR) {
      const AW = lW(WW, (MW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = CW.d.Identity()), MW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = BW.Zero()), BW.TransformToRef(RW, WW._pickWithRayInverseMatrix, WW._cachedRayForTransform), WW._cachedRayForTransform)), MW, wW, !1, zR);
      return AW && (AW.ray = RW), AW
    }

    function cR(WW, RW, MW, wW, CW, zR) {
      return FW(WW, (wW => tR(WW, RW, MW, wW, CW || null)), wW, zR)
    }

    function XW(WW, RW, MW, wW) {
      return FW(WW, (MW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = CW.d.Identity()), MW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = BW.Zero()), BW.TransformToRef(RW, WW._pickWithRayInverseMatrix, WW._cachedRayForTransform), WW._cachedRayForTransform)), MW, wW)
    }

    function jR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        wW = arguments.length > 3 ? arguments[3] : void 0,
        zR = arguments.length > 4 ? arguments[4] : void 0;
      wW || (wW = WW.getWorldMatrix()), RW.length = MW, zR ? RW.origin.hyW(zR) : RW.origin.hyW(WW.position);
      const AW = CW.k.vC[2];
      AW.set(0, 0, WW._scene.useRightHandedSystem ? -1 : 1);
      const bR = CW.k.vC[3];
      return CW.q.TransformNormalToRef(AW, wW, bR), CW.q.NormalizeToRef(bR, RW.direction), RW
    }

    function kR(WW, RW) {
      RW && (RW.prototype.getForwardRay = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        return jR(this, new BW(CW.q.Zero(), CW.q.Zero(), WW), WW, RW, MW)
      }, RW.prototype.getForwardRayToRef = function(WW) {
        return jR(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), WW && (NW.e._IsPickingAvailable = !0, WW.prototype.createPickingRay = function(WW, RW, MW, wW) {
        return tR(this, WW, RW, MW, wW, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    BW._TmpVector3 = (0, zR.b)(6, CW.q.Zero), BW._RayDistant = BW.Zero(), BW._Smallnum = 1e-8, BW._Rayl = 1e9
  },
  39033: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR.y
    });
    var wW = MW(37677),
      CW = MW(37796),
      zR = MW(39041);
    let AW = !1;
    AW || (AW = !0, (0, zR.d)(wW.i, CW.e), wW.i.prototype.createPickingRayToRef = function(WW, RW, MW, wW, CW) {
      let AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, zR.l)(this, WW, RW, MW, wW, CW, AW, bR)
    }, wW.i.prototype.createPickingRayInCameraSpace = function(WW, RW, MW) {
      return (0, zR.i)(this, WW, RW, MW)
    }, wW.i.prototype.createPickingRayInCameraSpaceToRef = function(WW, RW, MW, wW) {
      return (0, zR.g)(this, WW, RW, MW, wW)
    }, wW.i.prototype.pickWithBoundingInfo = function(WW, RW, MW, wW, CW) {
      return (0, zR.o)(this, WW, RW, MW, wW, CW)
    }, wW.i.prototype.WM = function(WW, RW, MW, wW, CW, AW) {
      let bR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, zR.v)(this, WW, RW, MW, wW, CW, AW, bR)
    }, wW.i.prototype.pickWithRay = function(WW, RW, MW, wW) {
      return (0, zR.s)(this, WW, RW, MW, wW)
    }, wW.i.prototype.multiPick = function(WW, RW, MW, wW, CW) {
      return (0, zR.n)(this, WW, RW, MW, wW, CW)
    }, wW.i.prototype.multiPickWithRay = function(WW, RW, MW) {
      return (0, zR.m)(this, WW, RW, MW)
    })
  },
  39046: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35324),
      AW = MW(37836),
      bR = MW(39050),
      yR = MW(37800),
      NW = MW(35361);
    let eW = (() => {
        var WW;
        let RW, MW, yR, NW, eW, BW, tR, TW, gR = bR.d,
          iR = [],
          YW = [],
          JW = [],
          PW = [],
          IW = [],
          oW = [],
          lW = [],
          FW = [],
          fW = [],
          QW = [],
          rR = [],
          cR = [],
          XW = [];
        return WW = class extends gR {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(WW) {
            this._shadowFrustumSize = WW, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(WW) {
            this._shadowOrthoScale = WW, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(WW) {
            this._orthoLeft = WW
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(WW) {
            this._orthoRight = WW
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(WW) {
            this._orthoTop = WW
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(WW) {
            this._orthoBottom = WW
          }
          constructor(WW, RW, MW, CW) {
            super(WW, MW, CW), this._shadowFrustumSize = ((0, wW.i)(this, iR), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, wW.i)(this, YW, !0), this.autoCalcShadowZBounds = ((0, wW.i)(this, JW), (0, wW.i)(this, PW, !1)), this._orthoLeft = ((0, wW.i)(this, IW), (0, wW.i)(this, oW, Number.MAX_VALUE)), this._orthoRight = ((0, wW.i)(this, lW), (0, wW.i)(this, FW, Number.MIN_VALUE)), this._orthoTop = ((0, wW.i)(this, fW), (0, wW.i)(this, QW, Number.MIN_VALUE)), this._orthoBottom = ((0, wW.i)(this, rR), (0, wW.i)(this, cR, Number.MAX_VALUE)), (0, wW.i)(this, XW), this.position = RW.scale(-1), this.direction = RW
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return AW.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(WW, RW, MW) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(WW) : this._setDefaultAutoExtendShadowProjectionMatrix(WW, RW, MW)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(WW) {
            const RW = this.QRW().activeCamera;
            zR.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : RW ? RW.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : RW ? RW.maxZ : 1e4, WW, this.QRW().mC().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(WW, RW, MW) {
            const wW = this.QRW().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const WW = zR.q.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let wW = Number.MAX_VALUE,
                CW = -Number.MAX_VALUE;
              for (let AW = 0; AW < MW.length; AW++) {
                const bR = MW[AW];
                if (!bR) continue;
                const yR = bR.LRW().boundingBox;
                for (let MW = 0; MW < yR.vectorsWorld.length; MW++) zR.q.TransformCoordinatesToRef(yR.vectorsWorld[MW], RW, WW), WW.x < this._orthoLeft && (this._orthoLeft = WW.x), WW.y < this._orthoBottom && (this._orthoBottom = WW.y), WW.x > this._orthoRight && (this._orthoRight = WW.x), WW.y > this._orthoTop && (this._orthoTop = WW.y), this.autoCalcShadowZBounds && (WW.z < wW && (wW = WW.z), WW.z > CW && (CW = WW.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = wW, this._shadowMaxZ = CW)
            }
            const CW = this._orthoRight - this._orthoLeft,
              AW = this._orthoTop - this._orthoBottom,
              bR = void 0 !== this.shadowMinZ ? this.shadowMinZ : wW?.minZ || 0,
              yR = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : wW?.maxZ || 1e4,
              NW = this.QRW().mC().BNW;
            zR.d.OrthoOffCenterLHToRef(this._orthoLeft - CW * this.shadowOrthoScale, this._orthoRight + CW * this.shadowOrthoScale, this._orthoBottom - AW * this.shadowOrthoScale, this._orthoTop + AW * this.shadowOrthoScale, NW ? yR : bR, NW ? bR : yR, WW, this.QRW().mC().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(WW, RW) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, RW), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, RW), this)
          }
          transferToNodeMaterialEffect(WW, RW) {
            return this.computeTransformedInformation() ? (WW.setFloat3(RW, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (WW.setFloat3(RW, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(WW) {
            const RW = this._scene.mC();
            return !RW.BNW && RW.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(WW) {
            const RW = this._scene.mC();
            return RW.BNW && RW.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(WW, RW) {
            WW["DIRLIGHT" + RW] = !0
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(gR[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.D)()], yR = [(0, CW.D)()], NW = [(0, CW.D)()], eW = [(0, CW.D)("orthoLeft")], BW = [(0, CW.D)("orthoRight")], tR = [(0, CW.D)("orthoTop")], TW = [(0, CW.D)("orthoBottom")], (0, wW.e)(WW, null, RW, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: WW => "shadowFrustumSize" in WW,
              get: WW => WW.shadowFrustumSize
            },
            metadata: zR
          }, null, iR), (0, wW.e)(WW, null, MW, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "shadowOrthoScale" in WW,
              get: WW => WW.shadowOrthoScale
            },
            metadata: zR
          }, null, iR), (0, wW.e)(null, null, yR, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: WW => "autoUpdateExtends" in WW,
              get: WW => WW.autoUpdateExtends,
              set: (WW, RW) => {
                WW.autoUpdateExtends = RW
              }
            },
            metadata: zR
          }, YW, JW), (0, wW.e)(null, null, NW, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: WW => "autoCalcShadowZBounds" in WW,
              get: WW => WW.autoCalcShadowZBounds,
              set: (WW, RW) => {
                WW.autoCalcShadowZBounds = RW
              }
            },
            metadata: zR
          }, PW, IW), (0, wW.e)(null, null, eW, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoLeft" in WW,
              get: WW => WW._orthoLeft,
              set: (WW, RW) => {
                WW._orthoLeft = RW
              }
            },
            metadata: zR
          }, oW, lW), (0, wW.e)(null, null, BW, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoRight" in WW,
              get: WW => WW._orthoRight,
              set: (WW, RW) => {
                WW._orthoRight = RW
              }
            },
            metadata: zR
          }, FW, fW), (0, wW.e)(null, null, tR, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoTop" in WW,
              get: WW => WW._orthoTop,
              set: (WW, RW) => {
                WW._orthoTop = RW
              }
            },
            metadata: zR
          }, QW, rR), (0, wW.e)(null, null, TW, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoBottom" in WW,
              get: WW => WW._orthoBottom,
              set: (WW, RW) => {
                WW._orthoBottom = RW
              }
            },
            metadata: zR
          }, cR, XW), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      BW = !1;
    BW || (BW = !0, yR.b.AddNodeConstructor("Light_Type_1", ((WW, RW) => () => new eW(WW, zR.q.Zero(), RW))), (0, NW.e)("BABYLON.DirectionalLight", eW))
  },
  39063: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => nR
    });
    var wW = MW(36750),
      CW = MW(35346),
      zR = MW(35324),
      AW = MW(37722),
      bR = MW(39072),
      yR = MW(35344),
      NW = MW(37856),
      eW = MW(35376),
      BW = MW(36755),
      tR = MW(36716),
      TW = MW(35353);
    class gR {
      constructor() {
        this.direction1 = new zR.q(0, 1, 0), this.direction2 = new zR.q(0, 1, 0)
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = (0, TW.RandomRange)(this.direction1.x, this.direction2.x),
          AW = (0, TW.RandomRange)(this.direction1.y, this.direction2.y),
          bR = (0, TW.RandomRange)(this.direction1.z, this.direction2.z);
        wW ? RW.nzW(CW, AW, bR) : zR.q.TransformNormalFromFloatsToRef(CW, AW, bR, WW, RW)
      }
      startPositionFunction(WW, RW, MW, wW) {
        wW ? RW.nzW(0, 0, 0) : zR.q.TransformCoordinatesFromFloatsToRef(0, 0, 0, WW, RW)
      }
      clone() {
        const WW = new gR;
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.JNW(), WW.direction2 = this.direction2.JNW(), WW
      }
      parse(WW) {
        zR.q.FromArrayToRef(WW.direction1, 0, this.direction1), zR.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
    class iR {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = WW, this.radiusRange = RW, this.directionRandomizer = MW
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = MW.position.subtract(WW.getTranslation()).normalize(),
          AW = (0, TW.RandomRange)(0, this.directionRandomizer),
          bR = (0, TW.RandomRange)(0, this.directionRandomizer),
          yR = (0, TW.RandomRange)(0, this.directionRandomizer);
        CW.x += AW, CW.y += bR, CW.z += yR, CW.normalize(), wW ? RW.hyW(CW) : zR.q.TransformNormalFromFloatsToRef(CW.x, CW.y, CW.z, WW, RW)
      }
      startPositionFunction(WW, RW, MW, wW) {
        const CW = this.radius - (0, TW.RandomRange)(0, this.radius * this.radiusRange),
          AW = (0, TW.RandomRange)(0, 1),
          bR = (0, TW.RandomRange)(0, 2 * Math.PI),
          yR = Math.acos(2 * AW - 1),
          NW = CW * Math.cos(bR) * Math.sin(yR),
          eW = CW * Math.cos(yR),
          BW = CW * Math.sin(bR) * Math.sin(yR);
        wW ? RW.nzW(NW, Math.abs(eW), BW) : zR.q.TransformCoordinatesFromFloatsToRef(NW, Math.abs(eW), BW, WW, RW)
      }
      clone() {
        const WW = new iR(this.radius, this.directionRandomizer);
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("radiusRange", this.radiusRange), WW.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("radiusRange", 1), WW.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.radius = this.radius, WW.radiusRange = this.radiusRange, WW.directionRandomizer = this.directionRandomizer, WW
      }
      parse(WW) {
        this.radius = WW.radius, this.radiusRange = WW.radiusRange, this.directionRandomizer = WW.directionRandomizer
      }
    }
    class YW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = WW, this.radiusRange = RW, this.directionRandomizer = MW
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = MW.position.subtract(WW.getTranslation()).normalize(),
          AW = (0, TW.RandomRange)(0, this.directionRandomizer),
          bR = (0, TW.RandomRange)(0, this.directionRandomizer),
          yR = (0, TW.RandomRange)(0, this.directionRandomizer);
        CW.x += AW, CW.y += bR, CW.z += yR, CW.normalize(), wW ? RW.hyW(CW) : zR.q.TransformNormalFromFloatsToRef(CW.x, CW.y, CW.z, WW, RW)
      }
      startPositionFunction(WW, RW, MW, wW) {
        const CW = this.radius - (0, TW.RandomRange)(0, this.radius * this.radiusRange),
          AW = (0, TW.RandomRange)(0, 1),
          bR = (0, TW.RandomRange)(0, 2 * Math.PI),
          yR = Math.acos(2 * AW - 1),
          NW = CW * Math.cos(bR) * Math.sin(yR),
          eW = CW * Math.cos(yR),
          BW = CW * Math.sin(bR) * Math.sin(yR);
        wW ? RW.nzW(NW, eW, BW) : zR.q.TransformCoordinatesFromFloatsToRef(NW, eW, BW, WW, RW)
      }
      clone() {
        const WW = new YW(this.radius, this.directionRandomizer);
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("radiusRange", this.radiusRange), WW.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("radiusRange", 1), WW.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.radius = this.radius, WW.radiusRange = this.radiusRange, WW.directionRandomizer = this.directionRandomizer, WW
      }
      parse(WW) {
        this.radius = WW.radius, this.radiusRange = WW.radiusRange, this.directionRandomizer = WW.directionRandomizer
      }
    }
    class JW extends YW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new zR.q(0, 1, 0),
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zR.q(0, 1, 0);
        super(WW), this.direction1 = RW, this.direction2 = MW
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = (0, TW.RandomRange)(this.direction1.x, this.direction2.x),
          AW = (0, TW.RandomRange)(this.direction1.y, this.direction2.y),
          bR = (0, TW.RandomRange)(this.direction1.z, this.direction2.z);
        wW ? RW.nzW(CW, AW, bR) : zR.q.TransformNormalFromFloatsToRef(CW, AW, bR, WW, RW)
      }
      clone() {
        const WW = new JW(this.radius, this.direction1, this.direction2);
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("radiusRange", this.radiusRange), WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("radiusRange", 1), WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const WW = super.serialize();
        return WW.direction1 = this.direction1.JNW(), WW.direction2 = this.direction2.JNW(), WW
      }
      parse(WW) {
        super.parse(WW), zR.q.FromArrayToRef(WW.direction1, 0, this.direction1), zR.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
    var PW = MW(36707);
    class IW {
      get radius() {
        return this._radius
      }
      set radius(WW) {
        this._radius = WW, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(WW) {
        this._angle = WW, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = MW, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = RW, this.radius = WW
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = MW.position.subtract(WW.getTranslation()).normalize(),
          AW = (0, TW.RandomRange)(0, this.directionRandomizer),
          bR = (0, TW.RandomRange)(0, this.directionRandomizer),
          yR = (0, TW.RandomRange)(0, this.directionRandomizer);
        CW.x += AW, CW.y += bR, CW.z += yR, CW.normalize(), wW ? RW.hyW(CW) : zR.q.TransformNormalFromFloatsToRef(CW.x, CW.y, CW.z, WW, RW)
      }
      startPositionFunction(WW, RW, MW, wW) {
        const CW = (0, TW.RandomRange)(0, 2 * Math.PI);
        let AW;
        this.emitFromSpawnPointOnly ? AW = 1e-4 : (AW = (0, TW.RandomRange)(0, this.heightRange), AW = 1 - AW * AW);
        let bR = this._radius - (0, TW.RandomRange)(0, this._radius * this.radiusRange);
        bR *= AW;
        const yR = bR * Math.sin(CW),
          NW = bR * Math.cos(CW),
          eW = AW * this._height;
        if (wW) return RW.x = yR, RW.y = eW, void(RW.z = NW);
        zR.q.TransformCoordinatesFromFloatsToRef(yR, eW, NW, WW, RW)
      }
      clone() {
        const WW = new IW(this._radius, this._angle, this.directionRandomizer);
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat2("radius", this._radius, this.radiusRange), WW.setFloat("coneAngle", this._angle), WW.setFloat2("height", this._height, this.heightRange), WW.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 2), WW.addUniform("coneAngle", 1), WW.addUniform("height", 2), WW.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let WW = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (WW += "\n#define CONEEMITTERSPAWNPOINT"), WW
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.radius = this._radius, WW.angle = this._angle, WW.directionRandomizer = this.directionRandomizer, WW.radiusRange = this.radiusRange, WW.heightRange = this.heightRange, WW.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, WW
      }
      parse(WW) {
        this.radius = WW.radius, this.angle = WW.angle, this.directionRandomizer = WW.directionRandomizer, this.radiusRange = void 0 !== WW.radiusRange ? WW.radiusRange : 1, this.heightRange = void 0 !== WW.heightRange ? WW.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== WW.emitFromSpawnPointOnly && WW.emitFromSpawnPointOnly
      }
    }
    class oW extends IW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zR.q(0, 1, 0),
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zR.q(0, 1, 0);
        super(WW, RW), this.direction1 = MW, this.direction2 = wW
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = (0, TW.RandomRange)(this.direction1.x, this.direction2.x),
          AW = (0, TW.RandomRange)(this.direction1.y, this.direction2.y),
          bR = (0, TW.RandomRange)(this.direction1.z, this.direction2.z);
        wW ? RW.nzW(CW, AW, bR) : zR.q.TransformNormalFromFloatsToRef(CW, AW, bR, WW, RW)
      }
      clone() {
        const WW = new oW(this.radius, this.angle, this.direction1, this.direction2);
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        super.applyToShader(WW), WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        super.buildUniformLayout(WW), WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const WW = super.serialize();
        return WW.direction1 = this.direction1.JNW(), WW.direction2 = this.direction2.JNW(), WW
      }
      parse(WW) {
        super.parse(WW), zR.q.FromArrayToRef(WW.direction1, 0, this.direction1), zR.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
    class lW {
      get mesh() {
        return this._mesh
      }
      set mesh(WW) {
        this._mesh !== WW && (this._mesh = WW, WW ? (this._indices = WW.ptW(), this._positions = WW.getVerticesData(AW.j.PositionKind), this._normals = WW.getVerticesData(AW.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = zR.q.Zero(), this._mesh = null, this.direction1 = new zR.q(0, 1, 0), this.direction2 = new zR.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = WW
      }
      startDirectionFunction(WW, RW, MW, wW) {
        if (this.useMeshNormalsForDirection && this._normals) return void zR.q.TransformNormalToRef(this._storedNormal, WW, RW);
        const CW = (0, TW.RandomRange)(this.direction1.x, this.direction2.x),
          AW = (0, TW.RandomRange)(this.direction1.y, this.direction2.y),
          bR = (0, TW.RandomRange)(this.direction1.z, this.direction2.z);
        wW ? RW.nzW(CW, AW, bR) : zR.q.TransformNormalFromFloatsToRef(CW, AW, bR, WW, RW)
      }
      startPositionFunction(WW, RW, MW, wW) {
        if (!this._indices || !this._positions) return;
        const CW = 3 * (Math.random() * (this._indices.length / 3) | 0),
          AW = Math.random(),
          bR = Math.random() * (1 - AW),
          yR = 1 - AW - bR,
          NW = this._indices[CW],
          eW = this._indices[CW + 1],
          BW = this._indices[CW + 2],
          tR = zR.k.vC[0],
          TW = zR.k.vC[1],
          gR = zR.k.vC[2],
          iR = zR.k.vC[3];
        zR.q.FromArrayToRef(this._positions, 3 * NW, tR), zR.q.FromArrayToRef(this._positions, 3 * eW, TW), zR.q.FromArrayToRef(this._positions, 3 * BW, gR), iR.x = AW * tR.x + bR * TW.x + yR * gR.x, iR.y = AW * tR.y + bR * TW.y + yR * gR.y, iR.z = AW * tR.z + bR * TW.z + yR * gR.z, wW ? RW.nzW(iR.x, iR.y, iR.z) : zR.q.TransformCoordinatesFromFloatsToRef(iR.x, iR.y, iR.z, WW, RW), this.useMeshNormalsForDirection && this._normals && (zR.q.FromArrayToRef(this._normals, 3 * NW, tR), zR.q.FromArrayToRef(this._normals, 3 * eW, TW), zR.q.FromArrayToRef(this._normals, 3 * BW, gR), this._storedNormal.x = AW * tR.x + bR * TW.x + yR * gR.x, this._storedNormal.y = AW * tR.y + bR * TW.y + yR * gR.y, this._storedNormal.z = AW * tR.z + bR * TW.z + yR * gR.z)
      }
      clone() {
        const WW = new lW(this.mesh);
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.JNW(), WW.direction2 = this.direction2.JNW(), WW.meshId = this.mesh?.id, WW.useMeshNormalsForDirection = this.useMeshNormalsForDirection, WW
      }
      parse(WW, RW) {
        zR.q.FromArrayToRef(WW.direction1, 0, this.direction1), zR.q.FromArrayToRef(WW.direction2, 0, this.direction2), WW.meshId && RW && (this.mesh = RW.getLastMeshById(WW.meshId)), this.useMeshNormalsForDirection = WW.useMeshNormalsForDirection
      }
    }
    class FW {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(WW) {
        this._targetStopDuration !== WW && (this._targetStopDuration = WW)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(WW) {
        this._noiseTexture !== WW && (this._noiseTexture = WW, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(WW) {
        this._attractors.push(WW)
      }
      removeAttractor(WW) {
        const RW = this._attractors.indexOf(WW); - 1 !== RW && this._attractors.splice(RW, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(WW) {
        this._animationSheetEnabled !== WW && (this._animationSheetEnabled = WW)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(WW) {
        this._isAnimationSheetEnabled != WW && (this._isAnimationSheetEnabled = WW, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(WW) {
        this._useLogarithmicDepth = WW && this.QRW().mC().getCaps().fragmentDepthSupported
      }
      QRW() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(WW) {
        switch (WW) {
          case FW.BLENDMODE_MULTIPLYADD:
            return;
          case FW.BLENDMODE_ADD:
            WW = 1;
            break;
          case FW.BLENDMODE_ONEONE:
            WW = 6;
            break;
          case FW.BLENDMODE_STANDARD:
            WW = 2;
            break;
          case FW.BLENDMODE_MULTIPLY:
            WW = 4;
            break;
          case FW.BLENDMODE_SUBTRACT:
            WW = 3
        }
        this._engine.setAlphaMode(WW)
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
      addEmitRateGradient(WW, RW, MW) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, WW, RW, MW), this
      }
      removeEmitRateGradient(WW) {
        return this._removeFactorGradient(this._emitRateGradients, WW), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : zR.q.Zero()
      }
      set direction1(WW) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = WW)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : zR.q.Zero()
      }
      set direction2(WW) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = WW)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : zR.q.Zero()
      }
      set minEmitBox(WW) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = WW)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : zR.q.Zero()
      }
      set maxEmitBox(WW) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = WW)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(WW) {
        this._billboardMode !== WW && (this._billboardMode = WW, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(WW) {
        this._isBillboardBased !== WW && (this._isBillboardBased = WW, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(WW) {
        this._attachImageProcessingConfiguration(WW)
      }
      _attachImageProcessingConfiguration(WW) {
        WW !== this._imageProcessingConfiguration && (!WW && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = WW)
      }
      _reset() {}
      _addFactorGradient(WW, RW, MW, CW) {
        const zR = new wW.f(RW, MW, CW);
        WW.push(zR), WW.sort(((WW, RW) => WW.gradient < RW.gradient ? -1 : WW.gradient > RW.gradient ? 1 : 0))
      }
      _removeFactorGradient(WW, RW) {
        if (!WW) return;
        let MW = 0;
        for (const wW of WW) {
          if (wW.gradient === RW) {
            WW.splice(MW, 1);
            break
          }
          MW++
        }
      }
      _removeGradientAndTexture(WW, RW, MW) {
        if (!RW) return this;
        let wW = 0;
        for (const CW of RW) {
          if (CW.gradient === WW) {
            RW.splice(wW, 1);
            break
          }
          wW++
        }
        return MW && MW.dispose(), this
      }
      constructor(WW) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = zR.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new zR.q(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = FW.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new zR.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new zR.q(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = zR.q.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new eW.h(1, 1, 1, 1), this.color2 = new eW.h(1, 1, 1, 1), this.colorDead = new eW.h(0, 0, 0, 1), this.textureMask = new eW.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new NW.e, this.id = WW, this.name = WW
      }
      createPointEmitter(WW, RW) {
        const MW = function(WW, RW) {
          const MW = new gR;
          return MW.direction1 = WW, MW.direction2 = RW, MW
        }(WW, RW);
        return this.particleEmitterType = MW, MW
      }
      createHemisphericEmitter() {
        const WW = function() {
          return new iR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = WW, WW
      }
      createSphereEmitter() {
        const WW = function() {
          return new YW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = WW, WW
      }
      createDirectedSphereEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new zR.q(0, 1, 0),
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zR.q(0, 1, 0);
          return new JW(WW, RW, MW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new zR.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zR.q(0, 1, 0));
        return this.particleEmitterType = WW, WW
      }
      createCylinderEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new PW.e(WW, RW, MW, wW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = WW, WW
      }
      createDirectedCylinderEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zR.q(0, 1, 0),
            CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new zR.q(0, 1, 0);
          return new PW.b(WW, RW, MW, wW, CW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zR.q(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new zR.q(0, 1, 0));
        return this.particleEmitterType = WW, WW
      }
      createConeEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new IW(WW, RW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = WW, WW
      }
      createDirectedConeEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zR.q(0, 1, 0),
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zR.q(0, 1, 0);
          return new oW(WW, RW, MW, wW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zR.q(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zR.q(0, 1, 0));
        return this.particleEmitterType = WW, WW
      }
      createBoxEmitter(WW, RW, MW, wW) {
        const CW = new BW.c;
        return this.particleEmitterType = CW, this.direction1 = WW, this.direction2 = RW, this.minEmitBox = MW, this.maxEmitBox = wW, CW
      }
      createMeshEmitter() {
        const WW = function() {
          return new lW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = WW, WW
      }
    }
    FW.BLENDMODE_ONEONE = 0, FW.BLENDMODE_STANDARD = 1, FW.BLENDMODE_ADD = 2, FW.BLENDMODE_MULTIPLY = 3, FW.BLENDMODE_MULTIPLYADD = 4, FW.BLENDMODE_SUBTRACT = -1;
    class fW {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new eW.h(0, 0, 0, 0), this.currentColor2 = new eW.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = zR.q.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class QW {
      constructor(WW) {
        this.particleSystem = WW, this.position = zR.q.Zero(), this.direction = zR.q.Zero(), this.color = new eW.h(0, 0, 0, 0), this.colorStep = new eW.h(0, 0, 0, 0), this.initialColor = new eW.h(0, 0, 0, 0), this.colorDead = new eW.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new zR.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new fW, this.id = QW._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let WW = this.age,
          RW = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === RW ? (RW = 1, WW = this._properties.randomCellOffset) : WW += this._properties.randomCellOffset);
        const MW = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let wW;
        wW = this._properties.initialSpriteCellLoop ? (0, TW.Clamp)(WW * RW % this.lifeTime / this.lifeTime) : (0, TW.Clamp)(WW * RW / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + wW * MW | 0
      }
      _inheritParticleInfoToSubEmitter(WW) {
        if (WW.particleSystem.emitter.position) {
          const RW = WW.particleSystem.emitter;
          if (RW.position.hyW(this.position), WW.inheritDirection) {
            const WW = zR.k.vC[0];
            this.direction.normalizeToRef(WW), RW.setDirection(WW, 0, Math.PI / 2)
          }
        } else {
          WW.particleSystem.emitter.hyW(this.position)
        }
        this.direction.scaleToRef(WW.inheritedVelocityAmount / 2, zR.k.vC[0]), WW.particleSystem._inheritedVelocityOffset.hyW(zR.k.vC[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const WW of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(WW)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = QW._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(WW) {
        WW.position.hyW(this.position), this._properties.initialDirection ? WW._properties.initialDirection ? WW._properties.initialDirection.hyW(this._properties.initialDirection) : WW._properties.initialDirection = this._properties.initialDirection.clone() : WW._properties.initialDirection = null, WW.direction.hyW(this.direction), this._properties.localPosition && (WW._properties.localPosition ? WW._properties.localPosition.hyW(this._properties.localPosition) : WW._properties.localPosition = this._properties.localPosition.clone()), WW.color.hyW(this.color), WW.colorStep.hyW(this.colorStep), WW.initialColor.hyW(this.initialColor), WW.colorDead.hyW(this.colorDead), WW.lifeTime = this.lifeTime, WW.age = this.age, WW._properties.randomCellOffset = this._properties.randomCellOffset, WW.size = this.size, WW.scale.hyW(this.scale), WW.angle = this.angle, WW.angularSpeed = this.angularSpeed, WW.particleSystem = this.particleSystem, WW.cellIndex = this.cellIndex, WW.id = this.id, WW._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (WW._properties.currentColorGradient = this._properties.currentColorGradient, WW._properties.currentColor1.hyW(this._properties.currentColor1), WW._properties.currentColor2.hyW(this._properties.currentColor2)), this._properties.currentSizeGradient && (WW._properties.currentSizeGradient = this._properties.currentSizeGradient, WW._properties.currentSize1 = this._properties.currentSize1, WW._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (WW._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, WW._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, WW._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (WW._properties.currentVelocityGradient = this._properties.currentVelocityGradient, WW._properties.currentVelocity1 = this._properties.currentVelocity1, WW._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (WW._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, WW._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, WW._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (WW._properties.currentDragGradient = this._properties.currentDragGradient, WW._properties.currentDrag1 = this._properties.currentDrag1, WW._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (WW._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, WW._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, WW._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (WW.remapData && this.remapData ? WW.remapData.hyW(this.remapData) : WW.remapData = new zR.s(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2 ? (WW._properties.randomNoiseCoordinates1.hyW(this._properties.randomNoiseCoordinates1), WW._properties.randomNoiseCoordinates2.hyW(this._properties.randomNoiseCoordinates2)) : (WW._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), WW._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), WW.metadata = this.metadata
      }
    }
    QW._Count = 0;
    var rR = MW(38689);
    class cR {
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
      constructor(WW, RW, MW, wW) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = RW, this.NCW = WW, this._scene = MW, this._host = wW, this._activeTargets = [], RW._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            CWW: this._getCorrectLoopMode()
          }, this._animation.dataType === rR.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = zR.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const WW = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, WW)
        }
        if (this.NCW instanceof Array) {
          let WW = 0;
          for (const RW of this.NCW) this._preparePath(RW, WW), this._getOriginalValues(WW), WW++;
          this._targetIsArray = !0
        } else this._preparePath(this.NCW), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const CW = RW.getEvents();
        if (CW && CW.length > 0)
          for (const zR of CW) this._events.push(zR._clone());
        this._enableBlending = WW && WW.animationPropertiesOverride ? WW.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = this._animation.targetPropertyPath;
        if (MW.length > 1) {
          let wW = WW;
          for (let WW = 0; WW < MW.length - 1; WW++) {
            const RW = MW[WW];
            if (wW = wW[RW], void 0 === wW) throw new Error(`Invalid property (${RW}) in property path (${MW.join(".")})`)
          }
          this._targetPath = MW[MW.length - 1], this._activeTargets[RW] = wW
        } else this._targetPath = MW[0], this._activeTargets[RW] = WW;
        if (void 0 === this._activeTargets[RW][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${MW.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.NCW instanceof Array) {
            let WW = 0;
            for (const RW of this.NCW) void 0 !== this._originalValue[WW] && this._setValue(RW, this._activeTargets[WW], this._originalValue[WW], -1, WW), WW++
          } else void 0 !== this._originalValue[0] && this._setValue(this.NCW, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let WW = 0; WW < this._events.length; WW++) this._events[WW].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const WW = this._animation.runtimeAnimations.indexOf(this);
        WW > -1 && this._animation.runtimeAnimations.splice(WW, 1)
      }
      setValue(WW, RW) {
        if (this._targetIsArray)
          for (let MW = 0; MW < this.NCW.length; MW++) {
            const wW = this.NCW[MW];
            this._setValue(wW, this._activeTargets[MW], WW, RW, MW)
          } else this._setValue(this.NCW, this._directTarget, WW, RW, 0)
      }
      _getOriginalValues() {
        let WW, RW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const MW = this._activeTargets[RW];
        if (rR.e.InheritOriginalValueFromActiveAnimations) {
          const WW = this._scene._activeAnimatables;
          for (let wW = 0; wW < WW.length; wW++) {
            const CW = WW[wW]._runtimeAnimations;
            for (let WW = 0; WW < CW.length; WW++) {
              const wW = CW[WW];
              if (wW !== this && wW._targetPath === this._targetPath)
                for (let WW = 0; WW < wW._activeTargets.length; WW++)
                  if (wW._activeTargets[WW] === MW && void 0 !== wW._originalValue[WW]) return void(wW._originalValue[WW] && wW._originalValue[WW].clone ? this._originalValue[RW] = wW._originalValue[WW].clone() : this._originalValue[RW] = wW._originalValue[WW])
            }
          }
        }
        WW = MW.getLocalMatrix && "_matrix" === this._targetPath ? MW.getLocalMatrix() : MW[this._targetPath], WW && WW.clone ? this._originalValue[RW] = WW.clone() : this._originalValue[RW] = WW
      }
      _registerTargetForLateAnimationBinding(WW, RW) {
        const MW = WW.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(MW), MW._lateAnimationHolders || (MW._lateAnimationHolders = {}), MW._lateAnimationHolders[WW.targetPath] || (MW._lateAnimationHolders[WW.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: RW
        }), WW.isAdditive ? (MW._lateAnimationHolders[WW.targetPath].additiveAnimations.push(WW), MW._lateAnimationHolders[WW.targetPath].totalAdditiveWeight += WW.weight) : (MW._lateAnimationHolders[WW.targetPath].animations.push(WW), MW._lateAnimationHolders[WW.targetPath].totalWeight += WW.weight)
      }
      _setValue(WW, RW, MW, wW, CW) {
        const AW = this._scene._animationWrites,
          bR = this._scene._animationWriteCount++;
        let yR = AW[bR];
        if (yR || (yR = AW[bR] = {
            runtimeAnimation: this,
            target: WW,
            weight: wW,
            additive: !1,
            blendingFactor: 1,
            carried: !1
          }), yR.runtimeAnimation = this, yR.target = WW, yR.weight = wW, yR.additive = this.isAdditive, yR.carried = !1, this._currentActiveTarget = RW, this._weight = wW, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const WW = RW[this._targetPath];
            WW.clone ? this._originalBlendValue = WW.clone() : this._originalBlendValue = WW
          }
          this._originalBlendValue.m ? rR.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? zR.d.DecomposeLerpToRef(this._originalBlendValue, MW, this._blendingFactor, this._currentValue) : this._currentValue = zR.d.DecomposeLerp(this._originalBlendValue, MW, this._blendingFactor) : this._currentValue ? zR.d.LerpToRef(this._originalBlendValue, MW, this._blendingFactor, this._currentValue) : this._currentValue = zR.d.Lerp(this._originalBlendValue, MW, this._blendingFactor) : this._currentValue = rR.e._UniversalLerp(this._originalBlendValue, MW, this._blendingFactor);
          const wW = WW && WW.animationPropertiesOverride ? WW.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          yR.blendingFactor = this._blendingFactor, this._blendingFactor += wW
        } else yR.blendingFactor = 1, this._currentValue ? this._currentValue.hyW ? this._currentValue.hyW(MW) : this._currentValue = MW : this._currentValue = MW?.clone ? MW.clone() : MW; - 1 !== wW ? this._registerTargetForLateAnimationBinding(this, this._originalValue[CW]) : this._animationState.CWW === rR.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[CW], RW[this._targetPath]) : RW[this._targetPath] = this._originalValue[CW] + this._currentValue : RW[this._targetPath] = this._currentValue, WW.KbW && WW.KbW(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.NCW && this.NCW.animationPropertiesOverride) {
          return "MorphTarget" === this.NCW.getClassName?.() && null == this.NCW._animationPropertiesOverride ? this._animation.CWW : this.NCW.animationPropertiesOverride.CWW
        }
        return this._animation.CWW
      }
      goToFrame(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const MW = this._animation.getKeys();
        WW < MW[0].frame ? WW = MW[0].frame : WW > MW[MW.length - 1].frame && (WW = MW[MW.length - 1].frame);
        const wW = this._events;
        if (wW.length)
          for (let zR = 0; zR < wW.length; zR++) wW[zR].onlyOnce || (wW[zR].isDone = wW[zR].frame < WW);
        this._currentFrame = WW;
        const CW = this._animation._interpolate(WW, this._animationState);
        this.setValue(CW, RW)
      }
      _prepareForSpeedRatioChange(WW) {
        const RW = this._previousElapsedTime * (this._animation.framePerSecond * WW) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - RW
      }
      animate(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const AW = this._animation,
          bR = AW.targetPropertyPath;
        if (!bR || bR.length < 1) return this._stopped = !0, !1;
        let yR, NW = !0;
        const eW = this._events;
        let BW;
        if (this._coreRuntimeAnimation) BW = MW - RW, yR = this._coreRuntimeAnimation.currentFrame, this._currentFrame = yR, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let zR;
          (RW < this._minFrame || RW > this._maxFrame) && (RW = this._minFrame), (MW < this._minFrame || MW > this._maxFrame) && (MW = this._maxFrame), BW = MW - RW;
          let bR = WW * (AW.framePerSecond * CW) / 1e3 + this._absoluteFrameOffset,
            tR = 0,
            TW = !1;
          const gR = wW && this._animationState.CWW === rR.e.ANIMATIONLOOPMODE_YOYO;
          if (gR) {
            const WW = (bR - RW) / BW,
              MW = Math.sin(WW * Math.PI);
            bR = Math.abs(MW) * BW + RW;
            const wW = MW >= 0 ? 1 : -1;
            this._yoyoDirection !== wW && (TW = !0), this._yoyoDirection = wW
          }
          if (this._previousElapsedTime = WW, this._previousAbsoluteFrame = bR, !wW && MW >= RW && (bR >= BW && CW > 0 || bR <= 0 && CW < 0)) NW = !1, tR = AW.evaluate(MW);
          else if (!wW && RW >= MW && (bR <= BW && CW < 0 || bR >= 0 && CW > 0)) NW = !1, tR = AW.evaluate(RW);
          else if (this._animationState.CWW !== rR.e.ANIMATIONLOOPMODE_CYCLE) {
            const WW = MW.toString() + RW.toString();
            if (!this._offsetsCache[WW]) {
              this._animationState.repeatCount = 0, this._animationState.CWW = rR.e.ANIMATIONLOOPMODE_CYCLE;
              const wW = AW._interpolate(RW, this._animationState),
                CW = AW._interpolate(MW, this._animationState);
              switch (this._animationState.CWW = this._getCorrectLoopMode(), AW.dataType) {
                case rR.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[WW] = CW - wW;
                  break;
                case rR.e.ANIMATIONTYPE_QUATERNION:
                case rR.e.ANIMATIONTYPE_VECTOR3:
                case rR.e.ANIMATIONTYPE_VECTOR2:
                case rR.e.ANIMATIONTYPE_SIZE:
                case rR.e.ANIMATIONTYPE_COLOR3:
                case rR.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[WW] = CW.subtract(wW)
              }
              this._highLimitsCache[WW] = CW
            }
            tR = this._highLimitsCache[WW], zR = this._offsetsCache[WW]
          }
          if (void 0 === zR) switch (AW.dataType) {
            case rR.e.ANIMATIONTYPE_FLOAT:
              zR = 0;
              break;
            case rR.e.ANIMATIONTYPE_QUATERNION:
              zR = rR.n;
              break;
            case rR.e.ANIMATIONTYPE_VECTOR3:
              zR = rR.t;
              break;
            case rR.e.ANIMATIONTYPE_VECTOR2:
              zR = rR.s;
              break;
            case rR.e.ANIMATIONTYPE_SIZE:
              zR = rR.p;
              break;
            case rR.e.ANIMATIONTYPE_COLOR3:
              zR = rR.h;
              break;
            case rR.e.ANIMATIONTYPE_COLOR4:
              zR = rR.k
          }
          const iR = this._host ? this._host.syncRoot : null;
          let YW, JW = this._playbackFrames,
            PW = !1;
          if (iR) {
            const WW = iR.toFrame - iR.fromFrame,
              MW = iR.masterFrame,
              wW = (MW - iR.fromFrame) / WW;
            yR = RW + BW * wW;
            const CW = iR.getAnimations()[0];
            if (CW && 0 !== WW) {
              const WW = BW * wW,
                RW = CW._playbackTo - CW._playbackFrom;
              if (0 !== RW && CW._playbackFrom <= iR.fromFrame && CW._playbackTo >= iR.toFrame) {
                JW = BW * Math.round((CW._playbackFrames - (CW._currentFrame - CW._playbackFrom)) / RW) + WW
              } else PW = (MW - this._playbackSyncMasterFrame) * (CW._playbackFrames - this._playbackSyncMasterPlayed) < 0, JW = WW;
              PW = PW || CW._playbackJumped, this._playbackSyncMasterPlayed = CW._playbackFrames, this._playbackSyncMasterFrame = MW
            }
          } else yR = bR > 0 && RW > MW || bR < 0 && RW < MW ? NW && 0 !== BW ? MW + bR % BW : RW : NW && 0 !== BW ? RW + bR % BW : MW;
          if (!gR && (CW > 0 && this.currentFrame > yR || CW < 0 && this.currentFrame < yR) || gR && TW) {
            this._onLoop();
            for (let WW = 0; WW < eW.length; WW++) eW[WW].onlyOnce || (eW[WW].isDone = !1);
            this._animationState.key = CW > 0 ? 0 : AW.getKeys().length - 1
          }
          if (this._currentFrame = yR, this._animationState.repeatCount = 0 === BW ? 0 : bR / BW | 0, this._animationState.highLimitValue = tR, this._animationState.offsetValue = zR, this._playbackFrom = RW, this._playbackTo = MW, this._playbackJumped = PW, this._playbackSyncRoot = iR, iR) YW = JW;
          else if (NW) YW = gR ? yR === RW && bR === MW ? BW : yR - RW : bR;
          else {
            const WW = 0 !== BW ? Math.floor(this._playbackFrames / BW) : 0;
            YW = (yR === MW ? WW + 1 : WW) * BW
          }
          this._playbackFrames = YW, this._playbackProgress = this._animationState.CWW === rR.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? BW : YW
        }
        const tR = AW._interpolate(yR, this._animationState);
        if (this.setValue(tR, zR), eW.length)
          for (let TW = 0; TW < eW.length; TW++)
            if (BW >= 0 && yR >= eW[TW].frame && eW[TW].frame >= RW || BW < 0 && yR <= eW[TW].frame && eW[TW].frame <= RW) {
              const WW = eW[TW];
              WW.isDone || (WW.onlyOnce && (eW.splice(TW, 1), TW--), WW.isDone = !0, WW.action(yR))
            } return NW || (this._stopped = !0), NW
      }
    }
    var XW = MW(37488);
    class jR {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(WW) {
        this._weight = -1 !== WW ? Math.min(Math.max(WW, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(WW) {
        for (let RW = 0; RW < this._runtimeAnimations.length; RW++) {
          this._runtimeAnimations[RW]._prepareForSpeedRatioChange(WW)
        }
        this._speedRatio = WW, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          bR = arguments.length > 6 ? arguments[6] : void 0,
          yR = arguments.length > 7 ? arguments[7] : void 0,
          NW = arguments.length > 8 ? arguments[8] : void 0,
          eW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          BW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = RW, this.fromFrame = MW, this.toFrame = wW, this.loopAnimation = zR, this.onAnimationEnd = bR, this.onAnimationLoop = NW, this.isAdditive = eW, this.playOrder = BW, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Hk = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new CW.c, this.onAnimationLoopObservable = new CW.c, this._scene = WW, yR && this.appendAnimations(RW, yR), this._speedRatio = AW, WW._activeAnimatables.push(this)
      }
      syncWith(WW) {
        if (this._syncRoot = WW, WW) {
          const WW = this._scene._activeAnimatables.indexOf(this);
          WW > -1 && (this._scene._activeAnimatables.splice(WW, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(WW, RW) {
        for (let MW = 0; MW < RW.length; MW++) {
          const wW = RW[MW],
            CW = new cR(WW, wW, this._scene, this);
          CW._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(CW)
        }
      }
      getAnimationByTargetProperty(WW) {
        const RW = this._runtimeAnimations;
        for (let MW = 0; MW < RW.length; MW++)
          if (RW[MW].animation.targetProperty === WW) return RW[MW].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(WW) {
        const RW = this._runtimeAnimations;
        for (let MW = 0; MW < RW.length; MW++)
          if (RW[MW].animation.targetProperty === WW) return RW[MW];
        return null
      }
      reset() {
        const WW = this._runtimeAnimations;
        for (let RW = 0; RW < WW.length; RW++) WW[RW].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(WW) {
        const RW = this._runtimeAnimations;
        for (let MW = 0; MW < RW.length; MW++) RW[MW].animation.enableBlending = !0, RW[MW].animation.blendingSpeed = WW
      }
      disableBlending() {
        const WW = this._runtimeAnimations;
        for (let RW = 0; RW < WW.length; RW++) WW[RW].animation.enableBlending = !1
      }
      goToFrame(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this._runtimeAnimations;
        if (MW[0]) {
          const RW = MW[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? MW[0].currentFrame;
          const wW = 0 === this.speedRatio ? 0 : (WW - this._frameToSyncFromJump) / RW * 1e3 / this.speedRatio;
          this._manualJumpDelay = -wW
        }
        for (let wW = 0; wW < MW.length; wW++) MW[wW].goToFrame(WW, RW ? this._weight : -1);
        this._goToFrame = WW
      }
      get paused() {
        return this.Hk
      }
      pause() {
        this.Hk || (this.Hk = !0)
      }
      restart() {
        this.Hk = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (WW || RW) {
          const CW = this._scene._activeAnimatables.indexOf(this);
          if (CW > -1) {
            const zR = this._runtimeAnimations;
            for (let MW = zR.length - 1; MW >= 0; MW--) {
              const wW = zR[MW];
              WW && wW.animation.name != WW || (RW && !RW(wW.target) || (wW.dispose(), zR.splice(MW, 1)))
            }
            0 == zR.length && (MW || this._scene._activeAnimatables.splice(CW, 1), wW || this._raiseOnAnimationEnd())
          }
        } else {
          const WW = this._scene._activeAnimatables.indexOf(this);
          if (WW > -1) {
            MW || this._scene._activeAnimatables.splice(WW, 1);
            const RW = this._runtimeAnimations;
            for (let WW = 0; WW < RW.length; WW++) RW[WW].dispose();
            this._runtimeAnimations.length = 0, wW || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((WW => {
          this.onAnimationEndObservable.add((() => {
            WW(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(WW) {
        if (this.Hk) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = WW), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = WW, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += WW - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !jR.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let RW = !1;
        const MW = this._runtimeAnimations;
        let wW;
        for (wW = 0; wW < MW.length; wW++) {
          const CW = MW[wW].animate(WW - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          RW = RW || CW
        }
        if (this.animationStarted = RW, !RW) {
          if (this.disposeOnEnd)
            for (wW = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(wW, 1), wW = 0; wW < MW.length; wW++) MW[wW].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return RW
      }
    }

    function kR(WW) {
      if (0 === WW.totalWeight && 0 === WW.totalAdditiveWeight) return WW.originalValue;
      let RW = 1;
      const MW = zR.k.vC[0],
        wW = zR.k.vC[1],
        CW = zR.k.Quaternion[0];
      let AW = 0;
      const bR = WW.animations[0],
        yR = WW.originalValue;
      let NW, eW = !1;
      if (WW.totalWeight < 1) NW = 1 - WW.totalWeight, yR.decompose(wW, CW, MW);
      else {
        if (AW = 1, RW = WW.totalWeight, NW = bR.weight / RW, 1 == NW) {
          if (!WW.totalAdditiveWeight) return bR.currentValue;
          eW = !0
        }
        bR.currentValue.decompose(wW, CW, MW)
      }
      if (!eW) {
        wW.scaleInPlace(NW), MW.scaleInPlace(NW), CW.scaleInPlace(NW);
        for (let bR = AW; bR < WW.animations.length; bR++) {
          const AW = WW.animations[bR];
          if (0 === AW.weight) continue;
          NW = AW.weight / RW;
          const yR = zR.k.vC[2],
            eW = zR.k.vC[3],
            BW = zR.k.Quaternion[1];
          AW.currentValue.decompose(eW, BW, yR), eW.scaleAndAddToRef(NW, wW), BW.scaleAndAddToRef(zR.e.Dot(CW, BW) > 0 ? NW : -NW, CW), yR.scaleAndAddToRef(NW, MW)
        }
        CW.normalize()
      }
      for (let tR = 0; tR < WW.additiveAnimations.length; tR++) {
        const RW = WW.additiveAnimations[tR];
        if (0 === RW.weight) continue;
        const AW = zR.k.vC[2],
          bR = zR.k.vC[3],
          yR = zR.k.Quaternion[1];
        RW.currentValue.decompose(bR, yR, AW), bR.multiplyToRef(wW, bR), zR.q.LerpToRef(wW, bR, RW.weight, wW), CW.multiplyToRef(yR, yR), zR.e.SlerpToRef(CW, yR, RW.weight, CW), AW.scaleAndAddToRef(RW.weight, MW)
      }
      const BW = bR ? bR._animationState.workValue : zR.k.Matrix[0].clone();
      return zR.d.ComposeToRef(wW, CW, MW, BW), BW
    }

    function aR(WW, RW) {
      if (0 === WW.totalWeight && 0 === WW.totalAdditiveWeight) return RW;
      const MW = WW.animations[0],
        wW = WW.originalValue;
      let CW = RW;
      if (0 === WW.totalWeight && WW.totalAdditiveWeight > 0) CW.hyW(wW);
      else if (1 === WW.animations.length) {
        if (zR.e.SlerpToRef(wW, MW.currentValue, Math.min(1, WW.totalWeight), CW), 0 === WW.totalAdditiveWeight) return CW
      } else if (WW.animations.length > 1) {
        let MW, AW, bR = 1;
        if (WW.totalWeight < 1) {
          const RW = 1 - WW.totalWeight;
          MW = [], AW = [], MW.push(wW), AW.push(RW)
        } else {
          if (2 === WW.animations.length && (zR.e.SlerpToRef(WW.animations[0].currentValue, WW.animations[1].currentValue, WW.animations[1].weight / WW.totalWeight, RW), 0 === WW.totalAdditiveWeight)) return RW;
          MW = [], AW = [], bR = WW.totalWeight
        }
        for (let RW = 0; RW < WW.animations.length; RW++) {
          const wW = WW.animations[RW];
          MW.push(wW.currentValue), AW.push(wW.weight / bR)
        }
        let yR = 0;
        for (let WW = 0; WW < MW.length;) WW ? (yR += AW[WW], zR.e.SlerpToRef(CW, MW[WW], AW[WW] / yR, CW), WW++) : (zR.e.SlerpToRef(MW[WW], MW[WW + 1], AW[WW + 1] / (AW[WW] + AW[WW + 1]), RW), CW = RW, yR = AW[WW] + AW[WW + 1], WW += 2)
      }
      for (let AW = 0; AW < WW.additiveAnimations.length; AW++) {
        const RW = WW.additiveAnimations[AW];
        0 !== RW.weight && (CW.multiplyToRef(RW.currentValue, zR.k.Quaternion[0]), zR.e.SlerpToRef(CW, zR.k.Quaternion[0], RW.weight, CW))
      }
      return CW
    }

    function sW(WW, RW) {
      RW && (RW.prototype.copyAnimationRange = function(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new rR.e(this.name, "_matrix", WW.animations[0].framePerSecond, rR.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const zR = WW.animations[0].getRange(RW);
        if (!zR) return !1;
        const AW = zR.from,
          bR = zR.to,
          yR = WW.animations[0].getKeys(),
          NW = WW.length,
          eW = WW.getParent(),
          BW = this.getParent(),
          tR = wW && eW && NW && this.length && NW !== this.length,
          TW = tR && BW && eW ? BW.length / eW.length : 1,
          gR = wW && !BW && CW && (1 !== CW.x || 1 !== CW.y || 1 !== CW.z),
          iR = this.animations[0].getKeys();
        let YW, JW, PW;
        for (let IW = 0, oW = yR.length; IW < oW; IW++) YW = yR[IW], YW.frame >= AW && YW.frame <= bR && (wW ? (PW = YW.value.clone(), tR ? (JW = PW.getTranslation(), PW.setTranslation(JW.scaleInPlace(TW))) : gR && CW ? (JW = PW.getTranslation(), PW.setTranslation(JW.multiplyInPlace(CW))) : PW = YW.value) : PW = YW.value, iR.push({
          frame: YW.frame + MW,
          value: PW
        }));
        return this.animations[0].createRange(RW, AW + MW, bR + MW), !0
      }), WW && (WW.prototype._animate = function(WW) {
        const RW = this._animationWrites,
          MW = this._animationWriteCount;
        let wW = 0;
        for (let zR = this._animationStepWriteCount; zR < MW; zR++) {
          const WW = RW[zR];
          WW.carried && -1 === WW.weight || (WW.carried = !0, RW[zR] = RW[wW], RW[wW] = WW, wW++)
        }
        for (let zR = wW; zR < MW; zR++) {
          const WW = RW[zR];
          WW.runtimeAnimation = null, WW.target = null
        }
        if (this._animationWriteCount = wW, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const CW = XW.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = CW
        }
        this.deltaTime = void 0 !== WW ? WW : this.useConstantAnimationDeltaTime ? 16 : (CW - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = CW;
        const AW = this._activeAnimatables;
        if (0 === AW.length) return;
        this._animationTime += this.deltaTime;
        const bR = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let zR = 0; zR < AW.length; zR++) {
          const WW = AW[zR];
          !WW._animate(bR) && WW.disposeOnEnd && zR--
        }! function(WW) {
          if (WW._registeredForLateAnimationBindings.length) {
            for (let RW = 0; RW < WW._registeredForLateAnimationBindings.length; RW++) {
              const MW = WW._registeredForLateAnimationBindings.data[RW];
              for (const WW in MW._lateAnimationHolders) {
                const RW = MW._lateAnimationHolders[WW],
                  wW = RW.animations[0],
                  CW = RW.originalValue;
                if (void 0 === CW || null === CW) continue;
                const AW = rR.e.AllowMatrixDecomposeForInterpolation && CW.m;
                let bR = MW[WW];
                if (AW) bR = kR(RW);
                else if (void 0 !== CW.w) bR = aR(RW, bR || zR.e.Identity());
                else {
                  let WW = 0,
                    MW = 1;
                  const zR = wW && wW._animationState.CWW === rR.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (RW.totalWeight < 1) bR = zR ? CW.clone ? CW.clone() : CW : wW && CW.scale ? CW.scale(1 - RW.totalWeight) : wW ? CW * (1 - RW.totalWeight) : CW.clone ? CW.clone() : CW;
                  else if (wW) {
                    MW = RW.totalWeight;
                    const AW = wW.weight / MW;
                    bR = 1 !== AW ? wW.currentValue.scale ? wW.currentValue.scale(AW) : wW.currentValue * AW : (RW.animations.length > 1 || RW.additiveAnimations.length > 0) && wW.currentValue.clone ? wW.currentValue.clone() : wW.currentValue, zR && (bR.addToRef ? bR.addToRef(CW, bR) : bR += CW), WW = 1
                  }
                  for (let wW = WW; wW < RW.animations.length; wW++) {
                    const WW = RW.animations[wW],
                      CW = WW.weight / MW;
                    CW && (WW.currentValue.scaleAndAddToRef ? WW.currentValue.scaleAndAddToRef(CW, bR) : bR += WW.currentValue * CW)
                  }
                  for (let wW = 0; wW < RW.additiveAnimations.length; wW++) {
                    const WW = RW.additiveAnimations[wW],
                      MW = WW.weight;
                    MW && (WW.currentValue.scaleAndAddToRef ? WW.currentValue.scaleAndAddToRef(MW, bR) : bR += WW.currentValue * MW)
                  }
                }
                MW[WW] = bR
              }
              MW._lateAnimationHolders = {}
            }
            WW._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, WW.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((WW, RW) => WW.playOrder - RW.playOrder))
      }, WW.prototype.beginWeightedAnimation = function(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 ? arguments[7] : void 0,
          yR = arguments.length > 8 ? arguments[8] : void 0,
          NW = arguments.length > 9 ? arguments[9] : void 0,
          eW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const BW = this.beginAnimation(WW, RW, MW, CW, zR, AW, bR, !1, yR, NW, eW);
        return BW.weight = wW, BW
      }, WW.prototype.beginAnimation = function(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          zR = arguments.length > 5 ? arguments[5] : void 0,
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          yR = arguments.length > 8 ? arguments[8] : void 0,
          NW = arguments.length > 9 ? arguments[9] : void 0,
          eW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (CW < 0) {
          const WW = RW;
          RW = MW, MW = WW, CW = -CW
        }
        RW > MW && (CW = -CW), bR && this.stopAnimation(WW, void 0, yR), AW || (AW = new jR(this, WW, RW, MW, wW, CW, zR, void 0, NW, eW));
        const BW = !yR || yR(WW);
        if (WW.animations && BW && AW.appendAnimations(WW, WW.animations), WW.getAnimatables) {
          const eW = WW.getAnimatables();
          for (let WW = 0; WW < eW.length; WW++) this.beginAnimation(eW[WW], RW, MW, wW, CW, zR, AW, bR, yR, NW)
        }
        return AW.reset(), AW
      }, WW.prototype.beginHierarchyAnimation = function(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 ? arguments[7] : void 0,
          yR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          NW = arguments.length > 9 ? arguments[9] : void 0,
          eW = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const BW = WW.getDescendants(RW),
          tR = [];
        tR.push(this.beginAnimation(WW, MW, wW, CW, zR, AW, bR, yR, NW, void 0, eW));
        for (const TW of BW) tR.push(this.beginAnimation(TW, MW, wW, CW, zR, AW, bR, yR, NW, void 0, eW));
        return tR
      }, WW.prototype.beginDirectAnimation = function(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (zR < 0) {
          const WW = MW;
          MW = wW, wW = WW, zR = -zR
        }
        MW > wW && (zR = -zR);
        return new jR(this, WW, MW, wW, CW, zR, arguments.length > 6 ? arguments[6] : void 0, RW, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, WW.prototype.beginDirectHierarchyAnimation = function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        let NW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const eW = WW.getDescendants(RW),
          BW = [];
        BW.push(this.beginDirectAnimation(WW, MW, wW, CW, zR, AW, bR, yR, NW));
        for (const tR of eW) BW.push(this.beginDirectAnimation(tR, MW, wW, CW, zR, AW, bR, yR, NW));
        return BW
      }, WW.prototype.getAnimatableByTarget = function(WW) {
        for (let RW = 0; RW < this._activeAnimatables.length; RW++)
          if (this._activeAnimatables[RW].target === WW) return this._activeAnimatables[RW];
        return null
      }, WW.prototype.getAllAnimatablesByTarget = function(WW) {
        const RW = [];
        for (let MW = 0; MW < this._activeAnimatables.length; MW++) this._activeAnimatables[MW].target === WW && RW.push(this._activeAnimatables[MW]);
        return RW
      }, WW.prototype.stopAnimation = function(WW, RW, MW) {
        const wW = this.getAllAnimatablesByTarget(WW);
        for (const CW of wW) CW.stop(RW, MW)
      }, WW.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let WW = 0; WW < this._activeAnimatables.length; WW++) this._activeAnimatables[WW].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const WW of this.animationGroups) WW.stop()
      })
    }
    jR.ProcessPausedAnimatables = !1;
    var dW, pW = MW(35330),
      hW = MW(37800),
      UW = MW(37470);
    class EW extends hW.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(WW) {
        (WW.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.hyW(WW), this._markAsDirtyAndDecompose())
      }
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(WW, RW.QRW(), !1), this.name = WW, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = RW, this._localMatrix = wW?.clone() ?? zR.d.Identity(), this._restMatrix = CW ?? this._localMatrix.clone(), this._bindMatrix = AW ?? this._localMatrix.clone(), this._index = bR, this._absoluteMatrix = new zR.d, this._absoluteBindMatrix = new zR.d, this._absoluteInverseBindMatrix = new zR.d, this._finalMatrix = new zR.d, RW.bones.push(this), this.setParent(MW, !1), this._updateAbsoluteBindMatrices()
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
      set parent(WW) {
        this.setParent(WW)
      }
      setParent(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== WW) {
          if (this.parent) {
            const WW = this.parent.children.indexOf(this); - 1 !== WW && this.parent.children.splice(WW, 1)
          }
          this._parentNode = WW, this.parent && this.parent.children.push(this), RW && this._updateAbsoluteBindMatrices(), this.KbW()
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
      setRestMatrix(WW) {
        this._restMatrix.hyW(WW)
      }
      setRestPose(WW) {
        this.setRestMatrix(WW)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(WW) {
        this.aAW(WW)
      }
      setBindPose(WW) {
        this.setBindMatrix(WW)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const WW = zR.k.vC[0],
            RW = zR.k.Quaternion[0],
            MW = zR.k.vC[1];
          this.getRestMatrix().decompose(WW, RW, MW), this._linkedTransformNode.position.hyW(MW), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? zR.e.Identity(), this._linkedTransformNode.rotationQuaternion.hyW(RW), this._linkedTransformNode.NA.hyW(WW)
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
      linkTransformNode(WW) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = WW, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.WbW
      }
      set position(WW) {
        this._decompose(), this.WbW.hyW(WW), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(WW) {
        this.setRotation(WW)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(WW) {
        this.setRotationQuaternion(WW)
      }
      get NA() {
        return this.getScale()
      }
      set NA(WW) {
        this.setScale(WW)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = zR.q.Zero(), this._localRotation = zR.e.Zero(), this.WbW = zR.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.WbW))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, zR.d.ComposeToRef(this._localScaling, this._localRotation, this.WbW, this._localMatrix)) : this._needToCompose = !1)
      }
      aAW(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.hyW(WW), RW && this._updateAbsoluteBindMatrices(), MW ? this._matrix = WW : this.KbW()
      }
      _updateAbsoluteBindMatrices(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (WW || (WW = this._bindMatrix), this.parent ? WW.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.hyW(WW), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), RW)
          for (let MW = 0; MW < this.children.length; MW++) this.children[MW]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      KbW() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.KbW(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.KbW(), this._needToDecompose = !0
      }
      _updatePosition(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const CW = this.getLocalMatrix();
        if (0 == RW) wW ? (CW.addAtIndex(12, WW.x), CW.addAtIndex(13, WW.y), CW.addAtIndex(14, WW.z)) : CW.setTranslationFromFloats(WW.x, WW.y, WW.z);
        else {
          const RW = EW._TmpMats[0],
            AW = EW._TmpVecs[0];
          this.parent ? (RW.hyW(this.parent.getAbsoluteMatrix()), MW && RW.multiplyToRef(MW.getWorldMatrix(), RW)) : zR.d.IdentityToRef(RW), wW && RW.setTranslationFromFloats(0, 0, 0), RW.invert(), zR.q.TransformCoordinatesToRef(WW, RW, AW), wW ? (CW.addAtIndex(12, AW.x), CW.addAtIndex(13, AW.y), CW.addAtIndex(14, AW.z)) : CW.setTranslationFromFloats(AW.x, AW.y, AW.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(WW, RW, MW, !0)
      }
      setPosition(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(WW, RW, MW, !1)
      }
      setAbsolutePosition(WW, RW) {
        this.setPosition(WW, 1, RW)
      }
      scale(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const CW = this.getLocalMatrix(),
          AW = EW._TmpMats[0];
        zR.d.ScalingToRef(WW, RW, MW, AW), AW.multiplyToRef(CW, CW), AW.invert();
        for (const zR of this.children) {
          const wW = zR.getLocalMatrix();
          wW.multiplyToRef(AW, wW), wW.multiplyAtIndex(12, WW), wW.multiplyAtIndex(13, RW), wW.multiplyAtIndex(14, MW), zR._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), wW)
          for (const zR of this.children) zR.scale(WW, RW, MW, wW)
      }
      setScale(WW) {
        this._decompose(), this._localScaling.hyW(WW), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(WW) {
        this._decompose(), WW.hyW(this._localScaling)
      }
      setYawPitchRoll(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === wW) {
          const AW = EW._TmpQuat;
          return zR.e.RotationYawPitchRollToRef(WW, RW, MW, AW), void this.setRotationQuaternion(AW, wW, CW)
        }
        const AW = EW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(AW, CW)) return;
        const bR = EW._TmpMats[1];
        zR.d.RotationYawPitchRollToRef(WW, RW, MW, bR), AW.multiplyToRef(bR, bR), this._rotateWithMatrix(bR, wW, CW)
      }
      rotate(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        const CW = EW._TmpMats[0];
        CW.setTranslationFromFloats(0, 0, 0), zR.d.RotationAxisToRef(WW, RW, CW), this._rotateWithMatrix(CW, MW, wW)
      }
      setAxisAngle(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === MW) {
          const CW = EW._TmpQuat;
          return zR.e.RotationAxisToRef(WW, RW, CW), void this.setRotationQuaternion(CW, MW, wW)
        }
        const CW = EW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(CW, wW)) return;
        const AW = EW._TmpMats[1];
        zR.d.RotationAxisToRef(WW, RW, AW), CW.multiplyToRef(AW, AW), this._rotateWithMatrix(AW, MW, wW)
      }
      setRotation(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(WW.y, WW.x, WW.z, RW, MW)
      }
      setRotationQuaternion(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === RW) return this._decompose(), this._localRotation.hyW(WW), void this._markAsDirtyAndCompose();
        const wW = EW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wW, MW)) return;
        const CW = EW._TmpMats[1];
        zR.d.FromQuaternionToRef(WW, CW), wW.multiplyToRef(CW, CW), this._rotateWithMatrix(CW, RW, MW)
      }
      setRotationMatrix(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === RW) {
          const wW = EW._TmpQuat;
          return zR.e.FromRotationMatrixToRef(WW, wW), void this.setRotationQuaternion(wW, RW, MW)
        }
        const wW = EW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wW, MW)) return;
        const CW = EW._TmpMats[1];
        CW.hyW(WW), wW.multiplyToRef(WW, CW), this._rotateWithMatrix(CW, RW, MW)
      }
      _rotateWithMatrix(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = this.getLocalMatrix(),
          CW = wW.m[12],
          zR = wW.m[13],
          AW = wW.m[14],
          bR = this.getParent(),
          yR = EW._TmpMats[3],
          NW = EW._TmpMats[4];
        bR && 1 == RW ? (MW ? (yR.hyW(MW.getWorldMatrix()), bR.getAbsoluteMatrix().multiplyToRef(yR, yR)) : yR.hyW(bR.getAbsoluteMatrix()), NW.hyW(yR), NW.invert(), wW.multiplyToRef(yR, wW), wW.multiplyToRef(WW, wW), wW.multiplyToRef(NW, wW)) : 1 == RW && MW ? (yR.hyW(MW.getWorldMatrix()), NW.hyW(yR), NW.invert(), wW.multiplyToRef(yR, wW), wW.multiplyToRef(WW, wW), wW.multiplyToRef(NW, wW)) : wW.multiplyToRef(WW, wW), wW.setTranslationFromFloats(CW, zR, AW), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(WW, RW) {
        const MW = EW._TmpMats[2];
        return WW.hyW(this.getAbsoluteMatrix()), RW ? (WW.multiplyToRef(RW.getWorldMatrix(), WW), zR.d.ScalingToRef(RW.NA.x, RW.NA.y, RW.NA.z, MW)) : zR.d.IdentityToRef(MW), WW.invert(), !isNaN(WW.m[0]) && (MW.multiplyAtIndex(0, this._scalingDeterminant), WW.multiplyToRef(MW, WW), !0)
      }
      yX() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = zR.q.Zero();
        return this.getPositionToRef(WW, RW, MW), MW
      }
      getPositionToRef() {
        let WW = arguments.length > 1 ? arguments[1] : void 0,
          RW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const WW = this.getLocalMatrix();
          RW.x = WW.m[12], RW.y = WW.m[13], RW.z = WW.m[14]
        } else {
          const MW = EW._TmpMats[0].hyW(this.getAbsoluteMatrix());
          WW && MW.multiplyToRef(WW.getWorldMatrix(), MW), RW.x = MW.m[12], RW.y = MW.m[13], RW.z = MW.m[14]
        }
      }
      getAbsolutePosition() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const RW = zR.q.Zero();
        return this.getPositionToRef(1, WW, RW), RW
      }
      getAbsolutePositionToRef(WW, RW) {
        this.getPositionToRef(1, WW, RW)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.hyW(this._localMatrix);
          const WW = this._skeleton.getPoseMatrix();
          WW && this._absoluteMatrix.multiplyToRef(WW, this._absoluteMatrix)
        }
        const WW = this.children,
          RW = WW.length;
        for (let MW = 0; MW < RW; MW++) WW[MW].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      qCW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = zR.q.Zero();
        return this.getDirectionToRef(WW, RW, MW), MW
      }
      getDirectionToRef(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = EW._TmpMats[0].hyW(this.getAbsoluteMatrix());
        RW && wW.multiplyToRef(RW.getWorldMatrix(), wW), zR.q.TransformNormalToRef(WW, wW, MW), MW.normalize()
      }
      getRotation() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = zR.q.Zero();
        return this.getRotationToRef(WW, RW, MW), MW
      }
      getRotationToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = EW._TmpQuat;
        this.getRotationQuaternionToRef(WW, RW, wW), wW.toEulerAnglesToRef(MW)
      }
      getRotationQuaternion() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = zR.e.Identity();
        return this.getRotationQuaternionToRef(WW, RW, MW), MW
      }
      getRotationQuaternionToRef() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          RW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), RW.hyW(this._localRotation);
        else {
          const MW = EW._TmpMats[0],
            wW = this.getAbsoluteMatrix();
          WW ? wW.multiplyToRef(WW.getWorldMatrix(), MW) : MW.hyW(wW), MW.multiplyAtIndex(0, this._scalingDeterminant), MW.multiplyAtIndex(1, this._scalingDeterminant), MW.multiplyAtIndex(2, this._scalingDeterminant), MW.decompose(void 0, RW, void 0)
        }
      }
      getRotationMatrix() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 ? arguments[1] : void 0;
        const MW = zR.d.Identity();
        return this.getRotationMatrixToRef(WW, RW, MW), MW
      }
      getRotationMatrixToRef() {
        let WW = arguments.length > 1 ? arguments[1] : void 0,
          RW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(RW);
        else {
          const MW = EW._TmpMats[0],
            wW = this.getAbsoluteMatrix();
          WW ? wW.multiplyToRef(WW.getWorldMatrix(), MW) : MW.hyW(wW), MW.multiplyAtIndex(0, this._scalingDeterminant), MW.multiplyAtIndex(1, this._scalingDeterminant), MW.multiplyAtIndex(2, this._scalingDeterminant), MW.getRotationMatrixToRef(RW)
        }
      }
      getAbsolutePositionFromLocal(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = zR.q.Zero();
        return this.getAbsolutePositionFromLocalToRef(WW, RW, MW), MW
      }
      getAbsolutePositionFromLocalToRef(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = EW._TmpMats[0].hyW(this.getAbsoluteMatrix());
        RW && wW.multiplyToRef(RW.getWorldMatrix(), wW), zR.q.TransformCoordinatesToRef(WW, wW, MW)
      }
      getLocalPositionFromAbsolute(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const MW = zR.q.Zero();
        return this.getLocalPositionFromAbsoluteToRef(WW, RW, MW), MW
      }
      getLocalPositionFromAbsoluteToRef(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = EW._TmpMats[0].hyW(this.getAbsoluteMatrix());
        RW && wW.multiplyToRef(RW.getWorldMatrix(), wW), wW.invert(), zR.q.TransformCoordinatesToRef(WW, wW, MW)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const WW = this._skeleton.bones.indexOf(this);
        if (-1 !== WW && this._skeleton.bones.splice(WW, 1), this._parentNode && this._parentNode.children) {
          const WW = this._parentNode.children,
            RW = WW.indexOf(this); - 1 !== RW && WW.splice(RW, 1)
        }
        super.dispose()
      }
    }
    EW._TmpVecs = (0, pW.b)(2, zR.q.Zero), EW._TmpQuat = zR.e.Identity(), EW._TmpMats = (0, pW.b)(5, zR.d.Identity), (dW = EW.prototype).copyAnimationRange ?? (dW.copyAnimationRange = (0, UW.f)("Bone", "copyAnimationRange"));
    var VW = MW(37677);
    let mR = !1;
    var xR = MW(37555),
      vR = MW(37900),
      KW = MW(37910),
      uW = MW(37904),
      OW = MW(37704);

    function nW(WW, RW) {
      const MW = (0, TW.RandomRange)(0, 1);
      eW.h.LerpToRef(RW.color1, RW.color2, MW, WW.color)
    }

    function GW(WW, RW) {
      RW.colorDead.subtractToRef(WW.color, RW._colorDiff), RW._colorDiff.scaleToRef(1 / WW.lifeTime, WW.colorStep)
    }

    function LW(WW, RW) {
      WW._properties.currentColorGradient = RW._colorGradients[0], WW._properties.currentColorGradient.getColorToRef(WW.color), WW._properties.currentColor1.hyW(WW.color), RW._colorGradients.length > 1 ? RW._colorGradients[1].getColorToRef(WW._properties.currentColor2) : WW._properties.currentColor2.hyW(WW.color)
    }

    function HW(WW, RW) {
      const MW = RW._colorGradients;
      wW.g.GetCurrentGradient(RW._ratio, MW, ((RW, MW, wW) => {
        RW !== WW._properties.currentColorGradient && (WW._properties.currentColor1.hyW(WW._properties.currentColor2), MW.getColorToRef(WW._properties.currentColor2), WW._properties.currentColorGradient = RW), eW.h.LerpToRef(WW._properties.currentColor1, WW._properties.currentColor2, wW, WW.color), WW.color.a < 0 && (WW.color.a = 0)
      }))
    }

    function DW(WW, RW) {
      WW.colorStep.scaleToRef(RW._scaledUpdateSpeed, RW._scaledColorStep), WW.color.addInPlace(RW._scaledColorStep), WW.color.a < 0 && (WW.color.a = 0)
    }

    function qR(WW, RW) {
      wW.g.GetCurrentGradient(RW._ratio, RW._angularSpeedGradients, ((RW, MW, wW) => {
        RW !== WW._properties.currentAngularSpeedGradient && (WW._properties.currentAngularSpeed1 = WW._properties.currentAngularSpeed2, WW._properties.currentAngularSpeed2 = MW.getFactor(), WW._properties.currentAngularSpeedGradient = RW), WW.angularSpeed = (0, TW.Lerp)(WW._properties.currentAngularSpeed1, WW._properties.currentAngularSpeed2, wW)
      }))
    }

    function ZW(WW, RW) {
      WW.angle += WW.angularSpeed * RW._scaledUpdateSpeed
    }

    function SW(WW, RW) {
      RW.particleEmitterType.startDirectionFunction(RW._emitterWorldMatrix, WW.direction, WW, RW.isLocal, RW._emitterInverseWorldMatrix)
    }

    function WR(WW, RW) {
      RW.startDirectionFunction(RW._emitterWorldMatrix, WW.direction, WW, RW.isLocal)
    }

    function RR(WW, RW) {
      WW._properties.currentVelocityGradient = RW._velocityGradients[0], WW._properties.currentVelocity1 = WW._properties.currentVelocityGradient.getFactor(), RW._velocityGradients.length > 1 ? WW._properties.currentVelocity2 = RW._velocityGradients[1].getFactor() : WW._properties.currentVelocity2 = WW._properties.currentVelocity1
    }

    function MR(WW, RW) {
      WW._properties.currentLimitVelocityGradient = RW._limitVelocityGradients[0], WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocityGradient.getFactor(), RW._limitVelocityGradients.length > 1 ? WW._properties.currentLimitVelocity2 = RW._limitVelocityGradients[1].getFactor() : WW._properties.currentLimitVelocity2 = WW._properties.currentLimitVelocity1
    }

    function wR(WW, RW) {
      wW.g.GetCurrentGradient(RW._ratio, RW._velocityGradients, ((RW, MW, wW) => {
        RW !== WW._properties.currentVelocityGradient && (WW._properties.currentVelocity1 = WW._properties.currentVelocity2, WW._properties.currentVelocity2 = MW.getFactor(), WW._properties.currentVelocityGradient = RW), WW._properties.directionScale *= (0, TW.Lerp)(WW._properties.currentVelocity1, WW._properties.currentVelocity2, wW)
      }))
    }

    function CR(WW, RW) {
      wW.g.GetCurrentGradient(RW._ratio, RW._limitVelocityGradients, ((MW, wW, CW) => {
        MW !== WW._properties.currentLimitVelocityGradient && (WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocity2, WW._properties.currentLimitVelocity2 = wW.getFactor(), WW._properties.currentLimitVelocityGradient = MW);
        const zR = (0, TW.Lerp)(WW._properties.currentLimitVelocity1, WW._properties.currentLimitVelocity2, CW);
        WW.direction.length() > zR && WW.direction.scaleInPlace(RW.limitVelocityDamping)
      }))
    }

    function zM(WW) {
      WW.direction.scaleToRef(WW._properties.directionScale, WW._properties.scaledDirection)
    }

    function AR(WW, RW) {
      RW.particleEmitterType.startPositionFunction(RW._emitterWorldMatrix, WW.position, WW, RW.isLocal)
    }

    function bM(WW, RW) {
      RW.startPositionFunction(RW._emitterWorldMatrix, WW.position, WW, RW.isLocal)
    }

    function yM(WW, RW) {
      WW._properties.localPosition ? WW._properties.localPosition.hyW(WW.position) : WW._properties.localPosition = WW.position.clone(), zR.q.TransformCoordinatesToRef(WW._properties.localPosition, RW._emitterWorldMatrix, WW.position)
    }

    function NR(WW, RW) {
      RW.isLocal && WW._properties.localPosition ? (WW._properties.localPosition.addInPlace(WW._properties.scaledDirection), zR.q.TransformCoordinatesToRef(WW._properties.localPosition, RW._emitterWorldMatrix, WW.position)) : WW.position.addInPlace(WW._properties.scaledDirection)
    }

    function eR(WW, RW) {
      WW._properties.currentDragGradient = RW._dragGradients[0], WW._properties.currentDrag1 = WW._properties.currentDragGradient.getFactor(), RW._dragGradients.length > 1 ? WW._properties.currentDrag2 = RW._dragGradients[1].getFactor() : WW._properties.currentDrag2 = WW._properties.currentDrag1
    }

    function BR(WW, RW) {
      wW.g.GetCurrentGradient(RW._ratio, RW._dragGradients, ((RW, MW, wW) => {
        RW !== WW._properties.currentDragGradient && (WW._properties.currentDrag1 = WW._properties.currentDrag2, WW._properties.currentDrag2 = MW.getFactor(), WW._properties.currentDragGradient = RW);
        const CW = (0, TW.Lerp)(WW._properties.currentDrag1, WW._properties.currentDrag2, wW);
        WW._properties.scaledDirection.scaleInPlace(1 - CW)
      }))
    }

    function tM(WW, RW) {
      WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2 ? (WW._properties.randomNoiseCoordinates1.nzW(Math.random(), Math.random(), Math.random()), WW._properties.randomNoiseCoordinates2.nzW(Math.random(), Math.random(), Math.random())) : (WW._properties.randomNoiseCoordinates1 = new zR.q(Math.random(), Math.random(), Math.random()), WW._properties.randomNoiseCoordinates2 = new zR.q(Math.random(), Math.random(), Math.random()))
    }

    function TR(WW, RW) {
      const MW = RW._noiseTextureData,
        wW = RW._noiseTextureSize;
      if (MW && wW && WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2) {
        const CW = RW._fetchR(WW._properties.randomNoiseCoordinates1.x, WW._properties.randomNoiseCoordinates1.y, wW.width, wW.height, MW),
          AW = RW._fetchR(WW._properties.randomNoiseCoordinates1.z, WW._properties.randomNoiseCoordinates2.x, wW.width, wW.height, MW),
          bR = RW._fetchR(WW._properties.randomNoiseCoordinates2.y, WW._properties.randomNoiseCoordinates2.z, wW.width, wW.height, MW),
          yR = zR.k.vC[0],
          NW = zR.k.vC[1];
        yR.nzW((2 * CW - 1) * RW.noiseStrength.x, (2 * AW - 1) * RW.noiseStrength.y, (2 * bR - 1) * RW.noiseStrength.z), yR.scaleToRef(RW._tempScaledUpdateSpeed, NW), WW.direction.addInPlace(NW)
      }
    }

    function gM(WW, RW) {
      RW.gravity.scaleToRef(RW._tempScaledUpdateSpeed, RW._scaledGravity), WW.direction.addInPlace(RW._scaledGravity)
    }

    function iM(WW, RW) {
      WW.size = (0, TW.RandomRange)(RW.minSize, RW.maxSize), WW.scale.nzW((0, TW.RandomRange)(RW.minScaleX, RW.maxScaleX), (0, TW.RandomRange)(RW.minScaleY, RW.maxScaleY))
    }

    function YR(WW, RW) {
      WW._properties.currentSizeGradient = RW._sizeGradients[0], WW._properties.currentSize1 = WW._properties.currentSizeGradient.getFactor(), WW.size = WW._properties.currentSize1, RW._sizeGradients.length > 1 ? WW._properties.currentSize2 = RW._sizeGradients[1].getFactor() : WW._properties.currentSize2 = WW._properties.currentSize1, WW.scale.nzW((0, TW.RandomRange)(RW.minScaleX, RW.maxScaleX), (0, TW.RandomRange)(RW.minScaleY, RW.maxScaleY))
    }

    function JR(WW, RW) {
      const MW = RW._actualFrame / RW.targetStopDuration;
      wW.g.GetCurrentGradient(MW, RW._startSizeGradients, ((MW, wW, CW) => {
        MW !== RW._currentStartSizeGradient && (RW._currentStartSize1 = RW._currentStartSize2, RW._currentStartSize2 = wW.getFactor(), RW._currentStartSizeGradient = MW);
        const zR = (0, TW.Lerp)(RW._currentStartSize1, RW._currentStartSize2, CW);
        WW.scale.scaleInPlace(zR)
      }))
    }

    function PR(WW, RW) {
      wW.g.GetCurrentGradient(RW._ratio, RW._sizeGradients, ((RW, MW, wW) => {
        RW !== WW._properties.currentSizeGradient && (WW._properties.currentSize1 = WW._properties.currentSize2, WW._properties.currentSize2 = MW.getFactor(), WW._properties.currentSizeGradient = RW), WW.size = (0, TW.Lerp)(WW._properties.currentSize1, WW._properties.currentSize2, wW)
      }))
    }

    function IR(WW, RW) {
      WW.remapData = new zR.s(0, 1, 0, 1)
    }

    function oR(WW, RW) {
      RW._colorRemapGradients && RW._colorRemapGradients.length > 0 && wW.g.GetCurrentGradient(RW._ratio, RW._colorRemapGradients, ((RW, MW, wW) => {
        const CW = (0, TW.Lerp)(RW.factor1, MW.factor1, wW),
          zR = (0, TW.Lerp)(RW.factor2, MW.factor2, wW);
        WW.remapData.x = CW, WW.remapData.y = zR - CW
      })), RW._alphaRemapGradients && RW._alphaRemapGradients.length > 0 && wW.g.GetCurrentGradient(RW._ratio, RW._alphaRemapGradients, ((RW, MW, wW) => {
        const CW = (0, TW.Lerp)(RW.factor1, MW.factor1, wW),
          zR = (0, TW.Lerp)(RW.factor2, MW.factor2, wW);
        WW.remapData.z = CW, WW.remapData.w = zR - CW
      }))
    }

    function lR(WW, RW) {
      const MW = (0, TW.Clamp)(RW._actualFrame / RW.targetStopDuration);
      wW.g.GetCurrentGradient(MW, RW._lifeTimeGradients, ((RW, wW) => {
        const CW = RW,
          zR = wW,
          AW = CW.getFactor(),
          bR = zR.getFactor(),
          yR = (MW - CW.gradient) / (zR.gradient - CW.gradient);
        WW.lifeTime = (0, TW.Lerp)(AW, bR, yR)
      })), RW._emitPower = (0, TW.RandomRange)(RW.minEmitPower, RW.maxEmitPower)
    }

    function FR(WW, RW) {
      WW.lifeTime = (0, TW.RandomRange)(RW.minLifeTime, RW.maxLifeTime), RW._emitPower = (0, TW.RandomRange)(RW.minEmitPower, RW.maxEmitPower)
    }

    function fR(WW, RW) {
      0 === RW._emitPower ? (WW._properties.initialDirection ? WW._properties.initialDirection.hyW(WW.direction) : WW._properties.initialDirection = WW.direction.clone(), WW.direction.set(0, 0, 0)) : (WW._properties.initialDirection = null, WW.direction.scaleInPlace(RW._emitPower)), WW.direction.addInPlace(RW._inheritedVelocityOffset)
    }

    function QR(WW, RW) {
      WW.angularSpeed = (0, TW.RandomRange)(RW.minAngularSpeed, RW.maxAngularSpeed), WW.angle = (0, TW.RandomRange)(RW.minInitialRotation, RW.maxInitialRotation)
    }

    function rM(WW, RW) {
      WW._properties.currentAngularSpeedGradient = RW._angularSpeedGradients[0], WW.angularSpeed = WW._properties.currentAngularSpeedGradient.getFactor(), WW._properties.currentAngularSpeed1 = WW.angularSpeed, RW._angularSpeedGradients.length > 1 ? WW._properties.currentAngularSpeed2 = RW._angularSpeedGradients[1].getFactor() : WW._properties.currentAngularSpeed2 = WW._properties.currentAngularSpeed1, WW.angle = (0, TW.RandomRange)(RW.minInitialRotation, RW.maxInitialRotation)
    }

    function cM(WW, RW) {
      WW._properties.initialStartSpriteCellId = RW.startSpriteCellID, WW._properties.initialEndSpriteCellId = RW.endSpriteCellID, WW._properties.initialSpriteCellLoop = RW.spriteCellLoop
    }

    function XR(WW, RW) {
      WW.previousItem = RW.previousItem, WW.nextItem = RW, RW.previousItem && (RW.previousItem.nextItem = WW), RW.previousItem = WW
    }

    function jM(WW, RW) {
      WW.previousItem = RW, WW.nextItem = RW.nextItem, RW.nextItem && (RW.nextItem.previousItem = WW), RW.nextItem = WW
    }

    function kM(WW) {
      WW.previousItem && (WW.previousItem.nextItem = WW.nextItem), WW.nextItem && (WW.nextItem.previousItem = WW.previousItem)
    }
    var aM = MW(37956);
    class sR extends FW {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(WW) {
        this._startDirectionFunction !== WW && (this._startDirectionFunction = WW, this._directionCreation.process = WW ? WR : SW)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(WW) {
        this._startPositionFunction !== WW && (this._startPositionFunction = WW, this._positionCreation.process = WW ? bM : AR)
      }
      set onDispose(WW) {
        this._onDisposeObserver && this.rMW.remove(this._onDisposeObserver), this._onDisposeObserver = this.rMW.add(WW)
      }
      get cNW() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(WW) {
        this._useRampGradients !== WW && (this._useRampGradients = WW, this._resetEffect(), WW ? (this._rampCreation = {
          process: IR,
          previousItem: null,
          nextItem: null
        }, jM(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: oR,
          previousItem: null,
          nextItem: null
        }, jM(this._remapGradientProcessing, this._gravityProcessing))) : (kM(this._rampCreation), kM(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(WW) {
        this._isLocal !== WW && (this._isLocal = WW, WW ? (this._isLocalCreation = {
          process: yM,
          previousItem: null,
          nextItem: null
        }, jM(this._isLocalCreation, this._positionCreation)) : kM(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(WW) {
        this._animationSheetEnabled !== WW && (this._animationSheetEnabled = WW, WW ? (this._sheetCreation = {
          process: cM,
          previousItem: null,
          nextItem: null
        }, jM(this._sheetCreation, this._colorDeadCreation)) : kM(this._sheetCreation), this._reset())
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[WW]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[WW] ?? this._customWrappers[0]
      }
      setCustomEffect(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[RW] = new vR.d(this._engine), this._customWrappers[RW].effect = WW, this._customWrappers[RW].drawContext && (this._customWrappers[RW].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new CW.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(WW) {
        if (this.noiseTexture !== WW) {
          if (this._noiseTexture = WW, !WW) return kM(this._noiseCreation), void kM(this._noiseProcessing);
          this._noiseCreation = {
            process: tM,
            previousItem: null,
            nextItem: null
          }, jM(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: TR,
            previousItem: null,
            nextItem: null
          }, jM(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          NW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        mR || (mR = !0, sW(VW.i, EW)), (0, xR.e)(), super(WW), this._emitterInverseWorldMatrix = zR.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new zR.q, this.rMW = new CW.c, this.onStoppedObservable = new CW.c, this.onStartedObservable = new CW.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new eW.h(0, 0, 0, 0), this._colorDiff = new eW.h(0, 0, 0, 0), this._scaledGravity = zR.q.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = WW => {}, this.recycleParticle = WW => {
          const RW = this._particles.pop();
          RW !== WW && RW.copyTo(WW), RW.metadata = null, this._stockParticles.push(RW)
        }, this._createParticle = () => {
          let WW;
          return 0 !== this._stockParticles.length ? (WW = this._stockParticles.pop(), WW._reset()) : WW = new QW(this), this._prepareParticle(WW), WW
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = RW, this._epsilon = bR, MW && "Scene" !== MW.getClassName() ? (this._engine = MW, this.defaultProjectionMatrix = zR.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = MW || yR.d.LastCreatedScene, this._engine = this._scene.mC(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.Xs.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: FR,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: AR,
          previousItem: null,
          nextItem: null
        }, jM(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: SW,
          previousItem: null,
          nextItem: null
        }, jM(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: fR,
          previousItem: null,
          nextItem: null
        }, jM(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: iM,
          previousItem: null,
          nextItem: null
        }, jM(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: QR,
          previousItem: null,
          nextItem: null
        }, jM(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: nW,
          previousItem: null,
          nextItem: null
        }, jM(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: GW,
          previousItem: null,
          nextItem: null
        }, jM(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, NW || (this._colorProcessing = {
          process: DW,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: ZW,
          previousItem: null,
          nextItem: null
        }, jM(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: zM,
          previousItem: null,
          nextItem: null
        }, jM(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: NR,
          previousItem: null,
          nextItem: null
        }, jM(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: gM,
          previousItem: null,
          nextItem: null
        }, jM(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = AW, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new vR.d(this._engine)
        }, this._customWrappers[0].effect = wW, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new BW.c, this.updateFunction = WW => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((WW => {
            this._noiseTextureData = WW
          })));
          const RW = WW === this._particles;
          for (let MW = 0; MW < WW.length; MW++) {
            const wW = WW[MW];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const CW = wW.age;
            if (wW.age += this._tempScaledUpdateSpeed, wW.age > wW.lifeTime) {
              const WW = wW.age - CW,
                RW = wW.lifeTime - CW;
              this._tempScaledUpdateSpeed = RW * this._tempScaledUpdateSpeed / WW, wW.age = wW.lifeTime
            }
            this._ratio = wW.age / wW.lifeTime, wW._properties.directionScale = this._tempScaledUpdateSpeed;
            let zR = this._updateQueueStart;
            for (; zR;) zR.process(wW, this), zR = zR.nextItem;
            if (this._isAnimationSheetEnabled && !NW && wW.updateCellIndex(), wW._inheritParticleInfoToSubEmitters(), wW.age >= wW.lifeTime) {
              if (this._emitFromParticle(wW), wW._properties.attachedSubEmitters) {
                for (const WW of wW._properties.attachedSubEmitters) WW.particleSystem.disposeOnStop = !0, WW.particleSystem.stop();
                wW._properties.attachedSubEmitters = null
              }
              this.recycleParticle(wW), RW && MW--
            } else;
          }
        }
      }
      serialize(WW) {
        throw new Error("Method not implemented.")
      }
      clone(WW, RW) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = lR : this._lifeTimeCreation.process = FR
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: JR,
          previousItem: null,
          nextItem: null
        }, jM(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (kM(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(WW) {
        this.targetStopDuration !== WW && (this._targetStopDuration = WW, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(WW, RW, MW) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, WW, RW, MW), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(WW) {
        return this._removeFactorGradient(this._lifeTimeGradients, WW), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(WW, RW, MW) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = YR, this._sizeGradientProcessing = {
          process: PR,
          previousItem: null,
          nextItem: null
        }, XR(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, WW, RW, MW), this
      }
      removeSizeGradient(WW) {
        return this._removeFactorGradient(this._sizeGradients, WW), 0 === this._sizeGradients?.length && (kM(this._sizeGradientProcessing), this._sizeCreation.process = iM), this
      }
      addColorRemapGradient(WW, RW, MW) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, WW, RW, MW), this
      }
      removeColorRemapGradient(WW) {
        return this._removeFactorGradient(this._colorRemapGradients, WW), this
      }
      addAlphaRemapGradient(WW, RW, MW) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, WW, RW, MW), this
      }
      removeAlphaRemapGradient(WW) {
        return this._removeFactorGradient(this._alphaRemapGradients, WW), this
      }
      addAngularSpeedGradient(WW, RW, MW) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = rM, this._angularSpeedGradientProcessing = {
          process: qR,
          previousItem: null,
          nextItem: null
        }, XR(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, WW, RW, MW), this
      }
      removeAngularSpeedGradient(WW) {
        return this._removeFactorGradient(this._angularSpeedGradients, WW), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = QR, kM(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(WW, RW, MW) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: RR,
          previousItem: null,
          nextItem: null
        }, jM(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: wR,
          previousItem: null,
          nextItem: null
        }, XR(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, WW, RW, MW), this
      }
      removeVelocityGradient(WW) {
        return this._removeFactorGradient(this._velocityGradients, WW), 0 === this._velocityGradients?.length && (kM(this._velocityCreation), kM(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(WW, RW, MW) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: MR,
          previousItem: null,
          nextItem: null
        }, jM(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: CR,
          previousItem: null,
          nextItem: null
        }, jM(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, WW, RW, MW), this
      }
      removeLimitVelocityGradient(WW) {
        return this._removeFactorGradient(this._limitVelocityGradients, WW), 0 === this._limitVelocityGradients?.length && (kM(this._limitVelocityCreation), kM(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(WW, RW, MW) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: eR,
          previousItem: null,
          nextItem: null
        }, XR(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: BR,
          previousItem: null,
          nextItem: null
        }, XR(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, WW, RW, MW), this
      }
      removeDragGradient(WW) {
        return this._removeFactorGradient(this._dragGradients, WW), 0 === this._dragGradients?.length && (kM(this._dragCreation), kM(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(WW, RW, MW) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, WW, RW, MW), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(WW) {
        return this._removeFactorGradient(this._startSizeGradients, WW), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const WW = new Uint8Array(4 * this._rawTextureWidth),
          RW = eW.n.Color3[0];
        for (let MW = 0; MW < this._rawTextureWidth; MW++) {
          const CW = MW / this._rawTextureWidth;
          wW.g.GetCurrentGradient(CW, this._rampGradients, ((wW, CW, zR) => {
            eW.d.LerpToRef(wW.color, CW.color, zR, RW), WW[4 * MW] = 255 * RW.r, WW[4 * MW + 1] = 255 * RW.g, WW[4 * MW + 2] = 255 * RW.b, WW[4 * MW + 3] = 255
          }))
        }
        this._rampGradientsTexture = bR.b.CreateRGBATexture(WW, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((WW, RW) => WW.gradient < RW.gradient ? -1 : WW.gradient > RW.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(WW, RW) {
        this._rampGradients || (this._rampGradients = []);
        const MW = new wW.d(WW, RW);
        return this._rampGradients.push(MW), this._syncRampGradientTexture(), this
      }
      removeRampGradient(WW) {
        return this._removeGradientAndTexture(WW, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(WW, RW, MW) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = LW, this._colorProcessing.process = HW);
        const CW = new wW.c(WW, RW, MW);
        return this._colorGradients.push(CW), this._colorGradients.sort(((WW, RW) => WW.gradient < RW.gradient ? -1 : WW.gradient > RW.gradient ? 1 : 0)), this
      }
      removeColorGradient(WW) {
        if (!this._colorGradients) return this;
        let RW = 0;
        for (const MW of this._colorGradients) {
          if (MW.gradient === WW) {
            this._colorGradients.splice(RW, 1);
            break
          }
          RW++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = nW, this._colorProcessing.process = DW), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const WW of this._drawWrappers)
            if (WW)
              for (const RW of WW) RW?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(WW, RW, MW, wW, CW) {
        return CW[4 * (((WW = .5 * Math.abs(WW) + .5) * MW % MW | 0) + ((RW = .5 * Math.abs(RW) + .5) * wW % wW | 0) * MW)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const WW = this._engine,
          RW = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * RW), this._vertexBuffer = new AW.c(WW, this._vertexData, !0, RW);
        let MW = 0;
        const wW = this._vertexBuffer.createVertexBuffer(AW.j.PositionKind, MW, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[AW.j.PositionKind] = wW, MW += 3;
        const CW = this._vertexBuffer.createVertexBuffer(AW.j.ColorKind, MW, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[AW.j.ColorKind] = CW, MW += 4;
        const zR = this._vertexBuffer.createVertexBuffer("angle", MW, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = zR, MW += 1;
        const bR = this._vertexBuffer.createVertexBuffer("size", MW, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = bR, MW += 2, this._isAnimationSheetEnabled) {
          const WW = this._vertexBuffer.createVertexBuffer("cellIndex", MW, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = WW, MW += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const WW = this._vertexBuffer.createVertexBuffer("direction", MW, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = WW, MW += 3
        }
        if (this._useRampGradients) {
          const WW = this._vertexBuffer.createVertexBuffer("remapData", MW, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = WW, MW += 4
        }
        let yR;
        if (this._useInstancing) {
          const RW = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new AW.c(WW, RW, !1, 2), yR = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else yR = this._vertexBuffer.createVertexBuffer("offset", MW, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = yR, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const WW = [],
          RW = [];
        let MW = 0;
        for (let wW = 0; wW < this._capacity; wW++) WW.push(MW), WW.push(MW + 1), WW.push(MW + 2), WW.push(MW), WW.push(MW + 2), WW.push(MW + 3), RW.push(MW, MW + 1, MW + 1, MW + 2, MW + 2, MW + 3, MW + 3, MW, MW, MW + 3), MW += 4;
        this._indexBuffer = this._engine.createIndexBuffer(WW), this._linesIndexBuffer = this._engine.createIndexBuffer(RW)
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (WW) return this.startDelay = WW, void setTimeout((() => {
          this.start(0)
        }), WW);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const WW = this.noiseTexture;
          if (WW && WW.onGeneratedObservable) WW.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let RW = 0; RW < this.preWarmCycles; RW++) this.animate(!0), WW.render()
            }))
          }));
          else
            for (let RW = 0; RW < this.preWarmCycles; RW++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(WW))
      }
      _postStop(WW) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(WW, RW, MW, wW) {
        let CW = WW * this._vertexBufferSize;
        const AW = zR.k.vC[0].hyW(this._scene?.floatingOriginOffset || zR.q.ZeroReadOnly);
        if (this._vertexData[CW++] = RW.position.x + this.worldOffset.x - AW.x, this._vertexData[CW++] = RW.position.y + this.worldOffset.y - AW.y, this._vertexData[CW++] = RW.position.z + this.worldOffset.z - AW.z, this._vertexData[CW++] = RW.color.r, this._vertexData[CW++] = RW.color.g, this._vertexData[CW++] = RW.color.b, this._vertexData[CW++] = RW.color.a, this._vertexData[CW++] = RW.angle, this._vertexData[CW++] = RW.scale.x * RW.size, this._vertexData[CW++] = RW.scale.y * RW.size, this._isAnimationSheetEnabled && (this._vertexData[CW++] = RW.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[CW++] = RW.direction.x, this._vertexData[CW++] = RW.direction.y, this._vertexData[CW++] = RW.direction.z);
        else if (RW._properties.initialDirection) {
          let WW = RW._properties.initialDirection;
          this.isLocal && (zR.q.TransformNormalToRef(WW, this._emitterWorldMatrix, zR.k.vC[0]), WW = zR.k.vC[0]), 0 === WW.x && 0 === WW.z && (WW.x = .001), this._vertexData[CW++] = WW.x, this._vertexData[CW++] = WW.y, this._vertexData[CW++] = WW.z
        } else {
          let WW = RW.direction;
          this.isLocal && (zR.q.TransformNormalToRef(WW, this._emitterWorldMatrix, zR.k.vC[0]), WW = zR.k.vC[0]), 0 === WW.x && 0 === WW.z && (WW.x = .001), this._vertexData[CW++] = WW.x, this._vertexData[CW++] = WW.y, this._vertexData[CW++] = WW.z
        }
        this._useRampGradients && RW.remapData && (this._vertexData[CW++] = RW.remapData.x, this._vertexData[CW++] = RW.remapData.y, this._vertexData[CW++] = RW.remapData.z, this._vertexData[CW++] = RW.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === MW ? MW = this._epsilon : 1 === MW && (MW = 1 - this._epsilon), 0 === wW ? wW = this._epsilon : 1 === wW && (wW = 1 - this._epsilon)), this._vertexData[CW++] = MW, this._vertexData[CW] = wW)
      }
      _prepareParticle(WW) {}
      _createNewOnes(WW) {
        let RW;
        for (let MW = 0; MW < WW && this._particles.length !== this._capacity; MW++) {
          RW = this._createParticle(), this._particles.push(RW);
          let WW = this._createQueueStart;
          for (; WW;) WW.process(RW, this), WW = WW.nextItem;
          RW._inheritParticleInfoToSubEmitters()
        }
      }
      _update(WW) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const WW = this.emitter;
          this._emitterWorldMatrix = WW.getWorldMatrix()
        } else {
          const WW = this.emitter;
          this._emitterWorldMatrix = zR.d.Translation(WW.x, WW.y, WW.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(WW)
      }
      static _GetAttributeNamesOrOptions() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = [AW.j.PositionKind, AW.j.ColorKind, "angle", "offset", "size"];
        return WW && wW.push("cellIndex"), RW || wW.push("direction"), MW && wW.push("remapData"), wW
      }
      static _GetEffectCreationOptions() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, KW.c)(wW), WW && wW.push("particlesInfos"), RW && wW.push("logarithmicDepthConstant"), MW && (wW.push("vFogInfos"), wW.push("vFogColor")), wW
      }
      fillDefines(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, KW.g)(this, this._scene, WW), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && WW.push("#define FOG")), this._isAnimationSheetEnabled && WW.push("#define ANIMATESHEET"), this.useLogarithmicDepth && WW.push("#define LOGARITHMICDEPTH"), RW === FW.BLENDMODE_MULTIPLY && WW.push("#define BLENDMULTIPLYMODE"), this.isLocal && WW.push("#define LOCAL"), this._useRampGradients && WW.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (WW.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            WW.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            WW.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && WW.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            WW.push("#define BILLBOARDMODE_ALL")
        }
        MW && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), WW.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(WW, RW, MW) {
        RW.push(...sR._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), WW.push(...sR._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), MW.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, OW.f)(WW, this._imageProcessingConfigurationDefines), (0, OW.e)(MW, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(WW) {
        var RW;
        const MW = this._getCustomDrawWrapper(WW);
        if (MW?.effect) return MW;
        const wW = [];
        this.fillDefines(wW, WW);
        const zR = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          AW = aM.d._PrepareStringDefines(zR, wW),
          bR = AW ? aM.d.GetConfiguration(zR) : void 0;
        let yR = this._drawWrappers[zR];
        yR || (yR = this._drawWrappers[zR] = [], 0 === zR || this._renderPassObserver || (this._renderPassObserver = ((RW = this._engine)._onReleaseRenderPassObservable ?? (RW._onReleaseRenderPassObservable = new CW.c)).add((WW => {
          const RW = this._drawWrappers[WW];
          if (RW) {
            for (const WW of RW) WW?.dispose();
            delete this._drawWrappers[WW]
          }
        }))));
        let NW = yR[WW];
        NW || (NW = new vR.d(this._engine), NW.drawContext && (NW.drawContext.useInstancing = this._useInstancing), yR[WW] = NW);
        const eW = wW.join("\n");
        if (NW.defines !== eW) {
          const WW = [],
            RW = [],
            MW = [];
          this.fillUniformsAttributesAndSamplerNames(RW, WW, MW), AW && (RW.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== bR?.defines.PREPASS_LOCAL_POSITION_INDEX && RW.push("inverseEmitterWM", "geometryWorldOffset")), NW.setEffect(this._engine.createEffect("particles", {
            attributes: WW,
            uniformsNames: RW,
            samplers: MW,
            defines: eW,
            shaderLanguage: this._shaderLanguage,
            multiTarget: AW,
            indexParameters: AW ? {
              buffersCount: bR?._mrtCount ?? 0
            } : void 0
          }, this._engine), eW)
        }
        return NW
      }
      _bindGeometryRendering(WW) {
        const RW = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          MW = aM.d.GetConfiguration(RW);
        if (!MW?._defines) return;
        WW.setFloat("objectId", 0), WW.setInt("meshBlendTag", 0);
        const wW = this._scene?.activeCamera;
        if (WW.setFloat2("cameraInfo", wW?.minZ ?? 0, wW?.maxZ ?? 1), this.isLocal && void 0 !== MW.defines.PREPASS_LOCAL_POSITION_INDEX) {
          WW.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const RW = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || zR.q.ZeroReadOnly, zR.k.vC[0]);
          WW.setVector3("geometryWorldOffset", RW)
        }
      }
      animate() {
        let WW, RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!RW && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (RW ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) WW = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const RW = this._calculateEmitRate();
            WW = RW * this._scaledUpdateSpeed | 0, this._newPartsExcess += RW * this._scaledUpdateSpeed - WW
          }
          if (this._newPartsExcess > 1 && (WW += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? WW = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(WW), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !RW) {
            let WW = 0;
            for (let RW = 0; RW < this._particles.length; RW++) {
              const MW = this._particles[RW];
              this._appendParticleVertices(WW, MW), WW += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const WW = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  RW = this._particles.length;
                RW < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, RW * WW, this._fixedCapacityHighWaterMark * WW), this._fixedCapacityHighWaterMark = RW, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const WW = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * WW), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let WW = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const RW = this._actualFrame / this.targetStopDuration;
          wW.g.GetCurrentGradient(RW, this._emitRateGradients, ((RW, MW, wW) => {
            RW !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = MW.getFactor(), this._currentEmitRateGradient = RW), WW = (0, TW.Lerp)(this._currentEmitRate1, this._currentEmitRate2, wW)
          }))
        }
        return WW
      }
      _appendParticleVertices(WW, RW) {
        this._appendParticleVertex(WW++, RW, 0, 0), this._useInstancing || (this._appendParticleVertex(WW++, RW, 1, 0), this._appendParticleVertex(WW++, RW, 1, 1), this._appendParticleVertex(WW, RW, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !sR.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([MW.e(316).then((() => MW(58612))), MW.e(310).then((() => MW(58621)))])) : await Promise.all([MW.e(299).then((() => MW(58627))), Promise.all([MW.e(292), MW.e(328)]).then((() => MW(58636)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== FW.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(FW.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(FW.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(WW) {
        const RW = this._getWrapper(WW),
          MW = RW.effect,
          wW = this._engine;
        wW.enableEffect(RW);
        const CW = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        MW.setTexture("diffuseSampler", this.particleTexture), MW.setMatrix("view", CW);
        const AW = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (MW.setMatrix("projection", AW), this._isAnimationSheetEnabled && this.particleTexture) {
          const WW = this.particleTexture.getBaseSize();
          MW.setFloat3("particlesInfos", this.spriteCellWidth / WW.width, this.spriteCellHeight / WW.height, this.spriteCellWidth / WW.width)
        }
        if (MW.setVector2("translationPivot", this.translationPivot), MW.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const WW = this._scene.activeCamera;
          MW.setVector3("eyePosition", WW.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), MW.setTexture("rampSampler", this._rampGradientsTexture));
        const bR = MW.defines;
        this._scene && ((0, KW.d)(MW, this, this._scene), this.applyFog && (0, uW.i)(this._scene, void 0, MW)), bR.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (CW.invertToRef(zR.k.Matrix[0]), MW.setMatrix("invView", zR.k.Matrix[0])), MW._multiTarget && this._bindGeometryRendering(MW), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? wW.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, MW) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, MW)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? wW.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, MW) : wW.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, MW), this.useLogarithmicDepth && this._scene && (0, uW.t)(bR, MW, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(MW), this._setEngineBasedOnBlendMode(WW), MW._multiTarget && aM.d._BindZeroAlphaDiscard(wW, MW);
        let yR = !1;
        try {
          aM.d._BindAttachmentsForEffect(wW, MW) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(MW), this._useInstancing ? this._scene?.forceWireframe ? wW.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : wW.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? wW.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : wW.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), yR = !0)
        } finally {
          aM.d._RestoreAttachments(wW)
        }
        return yR ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const WW = this._engine;
        let RW;
        return WW.setState && (WW.setState(!1), this.forceDepthWrite && WW.setDepthWrite(!0)), RW = this.blendMode === FW.BLENDMODE_MULTIPLYADD ? this._render(FW.BLENDMODE_MULTIPLY) + this._render(FW.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), RW
      }
      _onDispose() {}
      dispose() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), WW && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), WW && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(RW, MW), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const WW = this._scene.Xs.indexOf(this);
          WW > -1 && this._scene.Xs.splice(WW, 1), this._scene._activeParticleSystems.dispose()
        }
        this.rMW.notifyObservers(this), this.rMW.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    sR.ForceGLSL = !1;
    var dR, pR = MW(35361);
    ! function(WW) {
      WW[WW.ATTACHED = 0] = "ATTACHED", WW[WW.END = 1] = "END"
    }(dR || (dR = {}));
    class hR {
      constructor(WW) {
        if (this.particleSystem = WW, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !WW.emitter || !WW.emitter.dispose) {
          const RW = (0, pR.c)("BABYLON.AbstractMesh");
          WW.emitter = new RW("SubemitterSystemEmitter", WW.QRW()), WW._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let WW = this.particleSystem.emitter;
        if (WW) {
          if (WW instanceof zR.q) WW = WW.clone();
          else if (-1 !== WW.getClassName().indexOf("Mesh")) {
            WW = new((0, pR.c)("BABYLON.Mesh"))("", WW.QRW()), WW.isVisible = !1
          }
        } else WW = new zR.q;
        const RW = new hR(this.particleSystem.clone(this.particleSystem.name, WW));
        return RW.particleSystem.name += "Clone", RW.type = this.type, RW.inheritDirection = this.inheritDirection, RW.inheritedVelocityAmount = this.inheritedVelocityAmount, RW.particleSystem._disposeEmitterOnDispose = !0, RW.particleSystem.disposeOnStop = !0, RW
      }
      serialize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = {};
        return RW.type = this.type, RW.inheritDirection = this.inheritDirection, RW.inheritedVelocityAmount = this.inheritedVelocityAmount, RW.particleSystem = this.particleSystem.serialize(WW), RW
      }
      static _ParseParticleSystem(WW, RW, MW) {
        throw (0, UW.g)("ParseParticle")
      }
      static Parse(WW, RW, MW) {
        const wW = WW.particleSystem,
          CW = new hR(hR._ParseParticleSystem(wW, RW, MW, !0));
        return CW.type = WW.type, CW.inheritDirection = WW.inheritDirection, CW.inheritedVelocityAmount = WW.inheritedVelocityAmount, CW.particleSystem._isSubEmitter = !0, CW
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var UR = MW(37485),
      ER = MW(37615);
    const VR = () => {};
    class mM {
      constructor() {
        this.particlePositionGenerator = VR, this.particleDestinationGenerator = VR, this.particleDirectionGenerator = VR
      }
      startDirectionFunction(WW, RW, MW, wW) {
        const CW = zR.k.vC[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== VR) this.particleDirectionGenerator(-1, MW, CW);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== VR) {
          this.particleDestinationGenerator(-1, MW, CW);
          const WW = zR.k.vC[1];
          CW.subtractToRef(MW.position, WW), WW.scaleToRef(1 / MW.lifeTime, CW)
        } else CW.set(0, 0, 0);
        wW ? RW.hyW(CW) : zR.q.TransformNormalToRef(CW, WW, RW)
      }
      startPositionFunction(WW, RW, MW, wW) {
        const CW = zR.k.vC[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== VR ? this.particlePositionGenerator(-1, MW, CW) : CW.set(0, 0, 0), wW ? RW.hyW(CW) : zR.q.TransformCoordinatesToRef(CW, WW, RW)
      }
      clone() {
        const WW = new mM;
        return tR.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {}
      buildUniformLayout(WW) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.particlePositionGenerator = this.particlePositionGenerator, WW.particleDestinationGenerator = this.particleDestinationGenerator, WW
      }
      parse(WW) {
        WW.particlePositionGenerator && (this.particlePositionGenerator = WW.particlePositionGenerator), WW.particleDestinationGenerator && (this.particleDestinationGenerator = WW.particleDestinationGenerator)
      }
    }
    const xM = zR.q.Zero(),
      vM = zR.q.Zero(),
      KR = zR.q.Zero();
    class uR {
      constructor() {
        this.strength = 0, this.position = zR.q.Zero()
      }
      _processParticle(WW, RW) {
        this.position.subtractToRef(WW.position, xM);
        const MW = xM.lengthSquared() + 1;
        xM.normalize().scaleToRef(this.strength / MW, vM), vM.scaleToRef(RW._tempScaledUpdateSpeed, KR), WW.direction.addInPlace(KR)
      }
      serialize() {
        return {
          position: this.position.JNW(),
          strength: this.strength
        }
      }
    }
    const OR = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class nR extends sR {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = WW => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const RW = Math.floor(Math.random() * this._subEmitters.length);
          for (const MW of this._subEmitters[RW])
            if (1 === MW.type) {
              const RW = MW.clone();
              WW._inheritParticleInfoToSubEmitter(RW), RW.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(RW.particleSystem), RW.particleSystem.start()
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
      set flowMap(WW) {
        this._flowMap !== WW && (this._flowMap = WW, this._flowMapUpdate && (kM(this._flowMapUpdate), this._flowMapUpdate = null), WW && (this._flowMapUpdate = {
          process: WW => {
            const RW = this.QRW()?.getTransformMatrix();
            this._flowMap._processParticle(WW, this.flowMapStrength * this._tempScaledUpdateSpeed, RW)
          },
          previousItem: null,
          nextItem: null
        }, jM(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(WW) {
        super.addAttractor(WW), 1 === this._attractors.length && (this._attractorUpdate = {
          process: WW => {
            for (const RW of this._attractors) RW._processParticle(WW, this)
          },
          previousItem: null,
          nextItem: null
        }, jM(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(WW) {
        super.removeAttractor(WW), 0 === this._attractors.length && this._attractorUpdate && kM(this._attractorUpdate)
      }
      start() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(WW)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const WW of this.subEmitters) WW instanceof nR ? this._subEmitters.push([new hR(WW)]) : WW instanceof hR ? this._subEmitters.push([WW]) : WW instanceof Array && this._subEmitters.push(WW)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const WW of this.activeSubSystems) WW.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const WW = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== WW && this._rootParticleSystem.activeSubSystems.splice(WW, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(WW) {
        WW && this._stopSubEmitters()
      }
      _prepareParticle(WW) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const RW = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          WW._properties.attachedSubEmitters = [];
          for (const MW of RW)
            if (0 === MW.type) {
              const RW = MW.clone();
              WW._properties.attachedSubEmitters.push(RW), RW.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), WW && this.particles)
          for (const MW of this.particles)
            if (MW._properties.attachedSubEmitters)
              for (let WW = MW._properties.attachedSubEmitters.length - 1; WW >= 0; WW -= 1) MW._properties.attachedSubEmitters[WW].dispose();
        if (RW && this.activeSubSystems)
          for (let MW = this.activeSubSystems.length - 1; MW >= 0; MW -= 1) this.activeSubSystems[MW].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let WW = 0; WW < this._subEmitters.length; WW++)
            for (const RW of this._subEmitters[WW]) RW.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(WW, RW, MW, wW) {
        let CW;
        CW = MW instanceof UR.b ? null : MW;
        const AW = (0, pR.c)("BABYLON.Texture");
        if (AW && CW)
          if (WW.texture) RW.particleTexture = AW.Parse(WW.texture, CW, wW);
          else if (WW.textureName) {
          const MW = WW.textureSettings;
          if (RW.particleTexture = new AW(wW + WW.textureName, CW, !1, void 0 === WW.invertY || WW.invertY, MW ? MW.samplingMode : void 0), RW.particleTexture.name = WW.textureName, MW) {
            const WW = RW.particleTexture;
            for (const RW of OR) void 0 !== MW[RW] && (WW[RW] = MW[RW])
          }
        }
        if (WW.emitterId || 0 === WW.emitterId || void 0 !== WW.emitter ? (WW.emitterId || 0 === WW.emitterId) && CW ? (RW.emitter = CW.getLastMeshById(WW.emitterId), RW.emitter || (RW.emitter = zR.q.Zero())) : RW.emitter = zR.q.FromArray(WW.emitter) : RW.emitter = zR.q.Zero(), RW.isLocal = !!WW.isLocal, void 0 !== WW.renderingGroupId && (RW.renderingGroupId = WW.renderingGroupId), void 0 !== WW.isBillboardBased && (RW.isBillboardBased = WW.isBillboardBased), void 0 !== WW.billboardMode && (RW.billboardMode = WW.billboardMode), void 0 !== WW.useLogarithmicDepth && (RW.useLogarithmicDepth = WW.useLogarithmicDepth), WW.animations) {
          for (let MW = 0; MW < WW.animations.length; MW++) {
            const wW = WW.animations[MW],
              CW = (0, pR.c)("BABYLON.Animation");
            CW && RW.animations.push(CW.Parse(wW))
          }
          RW.beginAnimationOnStart = WW.beginAnimationOnStart, RW.beginAnimationFrom = WW.beginAnimationFrom, RW.beginAnimationTo = WW.beginAnimationTo, RW.beginAnimationLoop = WW.beginAnimationLoop
        }
        if (WW.autoAnimate && CW && CW.beginAnimation(RW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), RW.startDelay = 0 | WW.startDelay, RW.minAngularSpeed = WW.minAngularSpeed, RW.maxAngularSpeed = WW.maxAngularSpeed, RW.minSize = WW.minSize, RW.maxSize = WW.maxSize, WW.minScaleX && (RW.minScaleX = WW.minScaleX, RW.maxScaleX = WW.maxScaleX, RW.minScaleY = WW.minScaleY, RW.maxScaleY = WW.maxScaleY), void 0 !== WW.preWarmCycles && (RW.preWarmCycles = WW.preWarmCycles, RW.preWarmStepOffset = WW.preWarmStepOffset), void 0 !== WW.minInitialRotation && (RW.minInitialRotation = WW.minInitialRotation, RW.maxInitialRotation = WW.maxInitialRotation), RW.minLifeTime = WW.minLifeTime, RW.maxLifeTime = WW.maxLifeTime, RW.minEmitPower = WW.minEmitPower, RW.maxEmitPower = WW.maxEmitPower, RW.emitRate = WW.emitRate, RW.gravity = zR.q.FromArray(WW.gravity), WW.noiseStrength && (RW.noiseStrength = zR.q.FromArray(WW.noiseStrength)), RW.color1 = eW.h.FromArray(WW.color1), RW.color2 = eW.h.FromArray(WW.color2), RW.colorDead = eW.h.FromArray(WW.colorDead), RW.updateSpeed = WW.updateSpeed, RW.targetStopDuration = WW.targetStopDuration, RW.blendMode = WW.blendMode, WW.colorGradients)
          for (const zR of WW.colorGradients) RW.addColorGradient(zR.gradient, eW.h.FromArray(zR.color1), zR.color2 ? eW.h.FromArray(zR.color2) : void 0);
        if (WW.rampGradients) {
          for (const MW of WW.rampGradients) RW.addRampGradient(MW.gradient, eW.d.FromArray(MW.color));
          RW.useRampGradients = WW.useRampGradients
        }
        if (WW.colorRemapGradients)
          for (const zR of WW.colorRemapGradients) RW.addColorRemapGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.alphaRemapGradients)
          for (const zR of WW.alphaRemapGradients) RW.addAlphaRemapGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.sizeGradients)
          for (const zR of WW.sizeGradients) RW.addSizeGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.angularSpeedGradients)
          for (const zR of WW.angularSpeedGradients) RW.addAngularSpeedGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.velocityGradients)
          for (const zR of WW.velocityGradients) RW.addVelocityGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.dragGradients)
          for (const zR of WW.dragGradients) RW.addDragGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.emitRateGradients)
          for (const zR of WW.emitRateGradients) RW.addEmitRateGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.startSizeGradients)
          for (const zR of WW.startSizeGradients) RW.addStartSizeGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.lifeTimeGradients)
          for (const zR of WW.lifeTimeGradients) RW.addLifeTimeGradient(zR.gradient, void 0 !== zR.factor1 ? zR.factor1 : zR.factor, zR.factor2);
        if (WW.limitVelocityGradients) {
          for (const MW of WW.limitVelocityGradients) RW.addLimitVelocityGradient(MW.gradient, void 0 !== MW.factor1 ? MW.factor1 : MW.factor, MW.factor2);
          RW.limitVelocityDamping = WW.limitVelocityDamping
        }
        if (WW.noiseTexture && CW) {
          const MW = (0, pR.c)("BABYLON.ProceduralTexture");
          RW.noiseTexture = MW.Parse(WW.noiseTexture, CW, wW)
        }
        let bR;
        if (WW.particleEmitterType) {
          switch (WW.particleEmitterType.type) {
            case "SphereParticleEmitter":
              bR = new YW;
              break;
            case "SphereDirectedParticleEmitter":
              bR = new JW;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              bR = new IW;
              break;
            case "ConeDirectedParticleEmitter":
              bR = new oW;
              break;
            case "CylinderParticleEmitter":
              bR = new PW.e;
              break;
            case "CylinderDirectedParticleEmitter":
              bR = new PW.b;
              break;
            case "HemisphericParticleEmitter":
              bR = new iR;
              break;
            case "PointParticleEmitter":
              bR = new gR;
              break;
            case "MeshParticleEmitter":
              bR = new lW;
              break;
            case "CustomParticleEmitter":
              bR = new mM;
              break;
            default:
              bR = new BW.c
          }
          bR.parse(WW.particleEmitterType, CW)
        } else bR = new BW.c, bR.parse(WW, CW);
        RW.particleEmitterType = bR, RW.startSpriteCellID = WW.startSpriteCellID, RW.endSpriteCellID = WW.endSpriteCellID, RW.spriteCellLoop = WW.spriteCellLoop ?? !0, RW.spriteCellWidth = WW.spriteCellWidth, RW.spriteCellHeight = WW.spriteCellHeight, RW.spriteCellChangeSpeed = WW.spriteCellChangeSpeed, RW.spriteRandomStartCell = WW.spriteRandomStartCell, RW.disposeOnStop = WW.disposeOnStop ?? !1, RW.manualEmitCount = WW.manualEmitCount ?? -1
      }
      static Parse(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          CW = arguments.length > 4 ? arguments[4] : void 0;
        const AW = WW.name;
        let bR, yR, NW = null,
          BW = null;
        if (RW instanceof UR.b ? bR = RW : (yR = RW, bR = yR.mC()), WW.customShader && (0, UW.b)(bR.createEffectForParticles)) {
          BW = WW.customShader;
          const RW = BW.shaderOptions.defines.length > 0 ? BW.shaderOptions.defines.join("\n") : "";
          NW = bR.createEffectForParticles(BW.shaderPath.fragmentElement, BW.shaderOptions.uniforms, BW.shaderOptions.samplers, RW)
        }
        const tR = new nR(AW, CW || WW.aR, RW, NW, WW.isAnimationSheetEnabled);
        if (tR.customShader = BW, tR._rootUrl = MW, WW.id && (tR.id = WW.id), WW.subEmitters) {
          tR.subEmitters = [];
          for (const wW of WW.subEmitters) {
            const WW = [];
            for (const CW of wW) WW.push(hR.Parse(CW, RW, MW));
            tR.subEmitters.push(WW)
          }
        }
        if (WW.attractors)
          for (const eW of WW.attractors) {
            const WW = new uR;
            WW.position = zR.q.FromArray(eW.position), WW.strength = eW.strength, tR.addAttractor(WW)
          }
        return nR._Parse(WW, tR, RW, MW), WW.textureMask && (tR.textureMask = eW.h.FromArray(WW.textureMask)), WW.worldOffset && (tR.worldOffset = zR.q.FromArray(WW.worldOffset)), WW.preventAutoStart && (tR.preventAutoStart = WW.preventAutoStart), WW.metadata && (tR.metadata = WW.metadata), wW || tR.preventAutoStart || tR.start(), tR
      }
      serialize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = {};
        if (nR._Serialize(RW, this, WW), RW.textureMask = this.textureMask.JNW(), RW.customShader = this.customShader, RW.preventAutoStart = this.preventAutoStart, RW.worldOffset = this.worldOffset.JNW(), this.metadata && (RW.metadata = this.metadata), this.subEmitters) {
          RW.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const MW of this._subEmitters) {
            const wW = [];
            for (const RW of MW) RW.particleSystem.doNotSerialize || wW.push(RW.serialize(WW));
            RW.subEmitters.push(wW)
          }
        }
        if (this._attractors && this._attractors.length) {
          RW.attractors = [];
          for (const WW of this._attractors) RW.attractors.push(WW.serialize())
        }
        return RW
      }
      static _Serialize(WW, RW, MW) {
        if (WW.name = RW.name, WW.id = RW.id, WW.aR = RW.getCapacity(), WW.disposeOnStop = RW.disposeOnStop, WW.manualEmitCount = RW.manualEmitCount, RW.emitter.position) {
          const MW = RW.emitter;
          WW.emitterId = MW.id
        } else {
          const MW = RW.emitter;
          WW.emitter = MW.JNW()
        }
        if (RW.particleEmitterType && (WW.particleEmitterType = RW.particleEmitterType.serialize()), RW.particleTexture)
          if (MW) WW.texture = RW.particleTexture.serialize();
          else {
            const MW = RW.particleTexture;
            WW.textureName = RW.particleTexture.name, WW.invertY = !!MW._invertY;
            const wW = {};
            for (const WW of OR) wW[WW] = MW[WW];
            wW.samplingMode = MW.samplingMode, WW.textureSettings = wW
          } WW.isLocal = RW.isLocal, ER.d.AppendSerializedAnimations(RW, WW), WW.beginAnimationOnStart = RW.beginAnimationOnStart, WW.beginAnimationFrom = RW.beginAnimationFrom, WW.beginAnimationTo = RW.beginAnimationTo, WW.beginAnimationLoop = RW.beginAnimationLoop, WW.startDelay = RW.startDelay, WW.renderingGroupId = RW.renderingGroupId, WW.isBillboardBased = RW.isBillboardBased, WW.billboardMode = RW.billboardMode, WW.minAngularSpeed = RW.minAngularSpeed, WW.maxAngularSpeed = RW.maxAngularSpeed, WW.minSize = RW.minSize, WW.maxSize = RW.maxSize, WW.minScaleX = RW.minScaleX, WW.maxScaleX = RW.maxScaleX, WW.minScaleY = RW.minScaleY, WW.maxScaleY = RW.maxScaleY, WW.minEmitPower = RW.minEmitPower, WW.maxEmitPower = RW.maxEmitPower, WW.minLifeTime = RW.minLifeTime, WW.maxLifeTime = RW.maxLifeTime, WW.emitRate = RW.emitRate, WW.gravity = RW.gravity.JNW(), WW.noiseStrength = RW.noiseStrength.JNW(), WW.color1 = RW.color1.JNW(), WW.color2 = RW.color2.JNW(), WW.colorDead = RW.colorDead.JNW(), WW.updateSpeed = RW.updateSpeed, WW.targetStopDuration = RW.targetStopDuration, WW.blendMode = RW.blendMode, WW.preWarmCycles = RW.preWarmCycles, WW.preWarmStepOffset = RW.preWarmStepOffset, WW.minInitialRotation = RW.minInitialRotation, WW.maxInitialRotation = RW.maxInitialRotation, WW.startSpriteCellID = RW.startSpriteCellID, WW.spriteCellLoop = RW.spriteCellLoop, WW.endSpriteCellID = RW.endSpriteCellID, WW.spriteCellChangeSpeed = RW.spriteCellChangeSpeed, WW.spriteCellWidth = RW.spriteCellWidth, WW.spriteCellHeight = RW.spriteCellHeight, WW.spriteRandomStartCell = RW.spriteRandomStartCell, WW.isAnimationSheetEnabled = RW.isAnimationSheetEnabled, WW.useLogarithmicDepth = RW.useLogarithmicDepth;
        const wW = RW.getColorGradients();
        if (wW) {
          WW.colorGradients = [];
          for (const RW of wW) {
            const MW = {
              gradient: RW.gradient,
              color1: RW.color1.JNW()
            };
            RW.color2 ? MW.color2 = RW.color2.JNW() : MW.color2 = RW.color1.JNW(), WW.colorGradients.push(MW)
          }
        }
        const CW = RW.getRampGradients();
        if (CW) {
          WW.rampGradients = [];
          for (const RW of CW) {
            const MW = {
              gradient: RW.gradient,
              color: RW.color.JNW()
            };
            WW.rampGradients.push(MW)
          }
          WW.useRampGradients = RW.useRampGradients
        }
        const zR = RW.getColorRemapGradients();
        if (zR) {
          WW.colorRemapGradients = [];
          for (const RW of zR) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.colorRemapGradients.push(MW)
          }
        }
        const AW = RW.getAlphaRemapGradients();
        if (AW) {
          WW.alphaRemapGradients = [];
          for (const RW of AW) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.alphaRemapGradients.push(MW)
          }
        }
        const bR = RW.getSizeGradients();
        if (bR) {
          WW.sizeGradients = [];
          for (const RW of bR) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.sizeGradients.push(MW)
          }
        }
        const yR = RW.getAngularSpeedGradients();
        if (yR) {
          WW.angularSpeedGradients = [];
          for (const RW of yR) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.angularSpeedGradients.push(MW)
          }
        }
        const NW = RW.getVelocityGradients();
        if (NW) {
          WW.velocityGradients = [];
          for (const RW of NW) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.velocityGradients.push(MW)
          }
        }
        const eW = RW.getDragGradients();
        if (eW) {
          WW.dragGradients = [];
          for (const RW of eW) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.dragGradients.push(MW)
          }
        }
        const BW = RW.getEmitRateGradients();
        if (BW) {
          WW.emitRateGradients = [];
          for (const RW of BW) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.emitRateGradients.push(MW)
          }
        }
        const tR = RW.getStartSizeGradients();
        if (tR) {
          WW.startSizeGradients = [];
          for (const RW of tR) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.startSizeGradients.push(MW)
          }
        }
        const TW = RW.getLifeTimeGradients();
        if (TW) {
          WW.lifeTimeGradients = [];
          for (const RW of TW) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.lifeTimeGradients.push(MW)
          }
        }
        const gR = RW.getLimitVelocityGradients();
        if (gR) {
          WW.limitVelocityGradients = [];
          for (const RW of gR) {
            const MW = {
              gradient: RW.gradient,
              factor1: RW.factor1
            };
            void 0 !== RW.factor2 ? MW.factor2 = RW.factor2 : MW.factor2 = RW.factor1, WW.limitVelocityGradients.push(MW)
          }
          WW.limitVelocityDamping = RW.limitVelocityDamping
        }
        RW.noiseTexture && (WW.noiseTexture = RW.noiseTexture.serialize())
      }
      clone(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = {
          ...this._customWrappers
        };
        let CW = null;
        const zR = this._engine;
        if ((0, UW.b)(zR.createEffectForParticles) && null != this.customShader) {
          CW = this.customShader;
          const WW = CW.shaderOptions.defines.length > 0 ? CW.shaderOptions.defines.join("\n") : "",
            RW = zR.createEffectForParticles(CW.shaderPath.fragmentElement, CW.shaderOptions.uniforms, CW.shaderOptions.samplers, WW);
          wW[0] ? wW[0].effect = RW : this.setCustomEffect(RW, 0)
        }
        const AW = this.serialize(MW),
          bR = !1 === MW && this.particleTexture ? this.particleTexture.clone() : null;
        bR && (AW.textureName = void 0);
        const yR = nR.Parse(AW, this._scene || this._engine, this._rootUrl);
        return yR.name = WW, yR.customShader = CW, yR._customWrappers = wW, bR && (yR.particleTexture = bR), void 0 === RW && (RW = this.emitter), this.noiseTexture && (yR.noiseTexture = this.noiseTexture.clone()), yR.emitter = RW, this.preventAutoStart || yR.start(), yR
      }
    }
    nR.BILLBOARDMODE_Y = 2, nR.BILLBOARDMODE_ALL = 7, nR.BILLBOARDMODE_STRETCHED = 8, nR.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let GR = !1;
    GR || (GR = !0, hR._ParseParticleSystem = nR.Parse)
  },
  39117: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      SkyMaterial: () => IW,
      _MaxColorValueForRenderTarget: () => PW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37615),
      AW = MW(35317),
      bR = MW(37858),
      yR = MW(37925),
      NW = MW(39074),
      eW = MW(38747),
      BW = MW(37670),
      tR = MW(35361),
      TW = MW(37952),
      gR = MW(37930),
      iR = MW(37910),
      YW = MW(37904);
    class JW extends bR.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function PW(WW) {
      switch (WW) {
        case NW.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case NW.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let IW = (() => {
      var WW;
      let RW, bR, NW, tR, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR, kR, aR = yR.c,
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [],
        vR = [],
        KW = [],
        uW = [],
        OW = [],
        nW = [],
        GW = [],
        LW = [],
        HW = [],
        DW = [],
        qR = [],
        ZW = [],
        SW = [],
        WR = [],
        RR = [],
        MR = [],
        wR = [],
        CR = [],
        zM = [],
        AR = [],
        bM = [],
        yM = [];
      return WW = class extends aR {
        constructor(WW, RW) {
          super(WW, RW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, wW.i)(this, sW, 1), this.turbidity = ((0, wW.i)(this, dW), (0, wW.i)(this, pW, 10)), this.rayleigh = ((0, wW.i)(this, hW), (0, wW.i)(this, UW, 2)), this.mieCoefficient = ((0, wW.i)(this, EW), (0, wW.i)(this, VW, .005)), this.mieDirectionalG = ((0, wW.i)(this, mR), (0, wW.i)(this, xR, .8)), this.distance = ((0, wW.i)(this, vR), (0, wW.i)(this, KW, 500)), this.inclination = ((0, wW.i)(this, uW), (0, wW.i)(this, OW, .49)), this.azimuth = ((0, wW.i)(this, nW), (0, wW.i)(this, GW, .25)), this.sunPosition = ((0, wW.i)(this, LW), (0, wW.i)(this, HW, new AW.vC(0, 100, 0))), this.useSunPosition = ((0, wW.i)(this, DW), (0, wW.i)(this, qR, !1)), this.cameraOffset = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, AW.vC.Zero())), this.up = ((0, wW.i)(this, WR), (0, wW.i)(this, RR, AW.vC.Up())), this.dithering = ((0, wW.i)(this, MR), (0, wW.i)(this, wR, !1)), this.rawHdrOutput = ((0, wW.i)(this, CR), (0, wW.i)(this, zM, !1)), this.cloudiness = ((0, wW.i)(this, AR), (0, wW.i)(this, bM, 0)), this._cameraPosition = ((0, wW.i)(this, yM), AW.vC.Zero()), this._skyOrientation = new AW.Quaternion
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
        isReadyForSubMesh(RW, MW) {
          const wW = MW._drawWrapper;
          if (this.isFrozen && wW.effect && wW._wasPreviouslyReady) return !0;
          MW.materialDefines || (MW.materialDefines = new JW);
          const CW = MW.materialDefines,
            zR = this.QRW();
          if (this._isReadyForSubMesh(MW)) return !0;
          if ((0, YW.eb)(RW, zR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, CW, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, YW.V)(RW, CW, !0, !1), CW.IMAGEPROCESSINGPOSTPROCESS !== zR.imageProcessingConfiguration.applyByPostProcess && CW.markAsMiscDirty(), CW.DITHER !== this.dithering && CW.markAsMiscDirty(), CW.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && CW.markAsMiscDirty(), CW.isDirty) {
            CW.markAsProcessed(), zR.resetCachedMaterial();
            const RW = new gR.c;
            CW.FOG && RW.addFallback(1, "FOG"), CW.IMAGEPROCESSINGPOSTPROCESS = zR.imageProcessingConfiguration.applyByPostProcess, CW.DITHER = this.dithering, CW.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const wW = [eW.h.PositionKind];
            CW.VERTEXCOLOR && wW.push(eW.h.ColorKind);
            const AW = "sky",
              bR = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, iR.c)(bR);
            const yR = CW.toString();
            MW.setEffect(zR.mC().createEffect(AW, {
              attributes: wW,
              uniformsNames: bR,
              uniformBuffersNames: [],
              samplers: [],
              defines: yR,
              fallbacks: RW,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, zR.mC()), CW, this._materialContext)
          }
          return !(!MW.effect || !MW.effect.isReady()) && (CW._renderId = zR.getRenderId(), wW._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(WW, RW, MW) {
          const wW = this.QRW(),
            CW = MW.materialDefines;
          if (!CW) return;
          const zR = MW.effect;
          if (!zR) return;
          this._activeEffect = zR, this.bindOnlyWorldMatrix(WW), this._activeEffect.setMatrix("viewProjection", wW.getTransformMatrix()), this._mustRebind(wW, zR, MW) && ((0, iR.d)(zR, this, wW), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, YW.t)(CW, zR, wW)), wW.fogEnabled && RW.applyFog && wW.fogMode !== BW.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", wW.getViewMatrix()), (0, YW.i)(wW, RW, this._activeEffect, this.rawHdrOutput);
          const bR = wW.activeCamera;
          if (bR) {
            const WW = bR.getWorldMatrix();
            this._cameraPosition.x = WW.m[12], this._cameraPosition.y = WW.m[13], this._cameraPosition.z = WW.m[14], this._activeEffect.setVector3("cameraPosition", AW.TmpVectors.vC[0].hyW(this._cameraPosition).pNW(wW.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const WW = wW.mC()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", PW(WW?.texture?.type))
          }
          if (!this.useSunPosition) {
            const WW = Math.PI * (this.inclination - .5),
              RW = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(RW) * Math.cos(WW), this.sunPosition.y = this.distance * Math.sin(-WW), this.sunPosition.z = this.distance * Math.sin(RW) * Math.cos(WW), AW.Quaternion.FromUnitVectorsToRef(AW.vC.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(RW, this._activeEffect, MW)
        }
        getAnimatables() {
          return []
        }
        dispose(WW) {
          super.dispose(WW)
        }
        clone(RW) {
          return zR.d.Clone((() => new WW(RW, this.QRW())), this)
        }
        serialize() {
          const WW = super.serialize();
          return WW.customType = "BABYLON.SkyMaterial", WW
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(RW, MW, wW) {
          return zR.d.Parse((() => new WW(RW.name, MW)), RW, MW, wW)
        }
      }, (() => {
        const MW = "function" === typeof Symbol && Symbol.metadata ? Object.create(aR[Symbol.metadata] ?? null) : void 0;
        RW = [(0, CW.D)()], bR = [(0, CW.D)()], NW = [(0, CW.D)()], tR = [(0, CW.D)()], IW = [(0, CW.D)()], oW = [(0, CW.D)()], lW = [(0, CW.D)()], FW = [(0, CW.D)()], fW = [(0, CW.B)()], QW = [(0, CW.D)()], rR = [(0, CW.B)()], cR = [(0, CW.B)()], XW = [(0, CW.D)()], jR = [(0, CW.D)()], kR = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: WW => "luminance" in WW,
            get: WW => WW.luminance,
            set: (WW, RW) => {
              WW.luminance = RW
            }
          },
          metadata: MW
        }, sW, dW), (0, wW.e)(null, null, bR, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: WW => "turbidity" in WW,
            get: WW => WW.turbidity,
            set: (WW, RW) => {
              WW.turbidity = RW
            }
          },
          metadata: MW
        }, pW, hW), (0, wW.e)(null, null, NW, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: WW => "rayleigh" in WW,
            get: WW => WW.rayleigh,
            set: (WW, RW) => {
              WW.rayleigh = RW
            }
          },
          metadata: MW
        }, UW, EW), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: WW => "mieCoefficient" in WW,
            get: WW => WW.mieCoefficient,
            set: (WW, RW) => {
              WW.mieCoefficient = RW
            }
          },
          metadata: MW
        }, VW, mR), (0, wW.e)(null, null, IW, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: WW => "mieDirectionalG" in WW,
            get: WW => WW.mieDirectionalG,
            set: (WW, RW) => {
              WW.mieDirectionalG = RW
            }
          },
          metadata: MW
        }, xR, vR), (0, wW.e)(null, null, oW, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: WW => "distance" in WW,
            get: WW => WW.distance,
            set: (WW, RW) => {
              WW.distance = RW
            }
          },
          metadata: MW
        }, KW, uW), (0, wW.e)(null, null, lW, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: WW => "inclination" in WW,
            get: WW => WW.inclination,
            set: (WW, RW) => {
              WW.inclination = RW
            }
          },
          metadata: MW
        }, OW, nW), (0, wW.e)(null, null, FW, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: WW => "azimuth" in WW,
            get: WW => WW.azimuth,
            set: (WW, RW) => {
              WW.azimuth = RW
            }
          },
          metadata: MW
        }, GW, LW), (0, wW.e)(null, null, fW, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: WW => "sunPosition" in WW,
            get: WW => WW.sunPosition,
            set: (WW, RW) => {
              WW.sunPosition = RW
            }
          },
          metadata: MW
        }, HW, DW), (0, wW.e)(null, null, QW, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSunPosition" in WW,
            get: WW => WW.useSunPosition,
            set: (WW, RW) => {
              WW.useSunPosition = RW
            }
          },
          metadata: MW
        }, qR, ZW), (0, wW.e)(null, null, rR, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: WW => "cameraOffset" in WW,
            get: WW => WW.cameraOffset,
            set: (WW, RW) => {
              WW.cameraOffset = RW
            }
          },
          metadata: MW
        }, SW, WR), (0, wW.e)(null, null, cR, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: WW => "up" in WW,
            get: WW => WW.up,
            set: (WW, RW) => {
              WW.up = RW
            }
          },
          metadata: MW
        }, RR, MR), (0, wW.e)(null, null, XW, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: WW => "dithering" in WW,
            get: WW => WW.dithering,
            set: (WW, RW) => {
              WW.dithering = RW
            }
          },
          metadata: MW
        }, wR, CR), (0, wW.e)(null, null, jR, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: WW => "rawHdrOutput" in WW,
            get: WW => WW.rawHdrOutput,
            set: (WW, RW) => {
              WW.rawHdrOutput = RW
            }
          },
          metadata: MW
        }, zM, AR), (0, wW.e)(null, null, kR, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: WW => "cloudiness" in WW,
            get: WW => WW.cloudiness,
            set: (WW, RW) => {
              WW.cloudiness = RW
            }
          },
          metadata: MW
        }, bM, yM), MW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MW
        })
      })(), WW._ShaderLoader = new TW.b((() => [MW.e(300).then((() => MW(58641))), MW.e(293).then((() => MW(58647)))]), (() => [MW.e(317).then((() => MW(58653))), MW.e(311).then((() => MW(58662)))])), WW
    })();
    (0, tR.e)("BABYLON.SkyMaterial", IW)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);