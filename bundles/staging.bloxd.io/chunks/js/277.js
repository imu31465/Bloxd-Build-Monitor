export const id = 277;
export const ids = [277];
export const modules = {
  53781: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(41628),
      EW = OW(53788);
    class NW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = OW, this.sEW = [], this._maxBlockCapacity = iW || 64, this._selectionContent = new mW.d(1024), this._creationFunc = WW
      }
      update(WW, iW, OW) {
        EW.e._CreateBlocks(WW, iW, OW, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      xEW(WW) {
        for (let iW = 0; iW < this.blocks.length; iW++) {
          this.blocks[iW].addEntry(WW)
        }
      }
      pD(WW) {
        for (let iW = 0; iW < this.blocks.length; iW++) {
          this.blocks[iW].removeEntry(WW)
        }
      }
      select(WW, iW) {
        this._selectionContent.reset();
        for (let OW = 0; OW < this.blocks.length; OW++) {
          this.blocks[OW].select(WW, this._selectionContent, iW)
        }
        return iW ? this._selectionContent.concat(this.sEW) : this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
      }
      intersects(WW, iW, OW) {
        this._selectionContent.reset();
        for (let mW = 0; mW < this.blocks.length; mW++) {
          this.blocks[mW].intersects(WW, iW, this._selectionContent, OW)
        }
        return OW ? this._selectionContent.concat(this.sEW) : this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
      }
      intersectsRay(WW) {
        this._selectionContent.reset();
        for (let iW = 0; iW < this.blocks.length; iW++) {
          this.blocks[iW].intersectsRay(WW, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.sEW), this._selectionContent
      }
    }
    NW.CreationFuncForMeshes = (WW, iW) => {
      const OW = WW.KV();
      !WW.isBlocked && OW.boundingBox.intersectsMinMax(iW.ZEW, iW.tEW) && iW.entries.push(WW)
    }, NW.CreationFuncForSubMeshes = (WW, iW) => {
      WW.KV().boundingBox.intersectsMinMax(iW.ZEW, iW.tEW) && iW.entries.push(WW)
    }
  },
  53788: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = OW(38241),
      EW = OW(41825);
    class NW {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.entries = [], this.MEW = new Array, this._capacity = OW, this._depth = mW, this._maxDepth = EW, this._creationFunc = NW, this._minPoint = WW, this._maxPoint = iW, this.MEW.push(WW.clone()), this.MEW.push(iW.clone()), this.MEW.push(WW.clone()), this.MEW[2].x = iW.x, this.MEW.push(WW.clone()), this.MEW[3].y = iW.y, this.MEW.push(WW.clone()), this.MEW[4].z = iW.z, this.MEW.push(iW.clone()), this.MEW[5].z = WW.z, this.MEW.push(iW.clone()), this.MEW[6].x = WW.x, this.MEW.push(iW.clone()), this.MEW[7].y = WW.y
      }
      get aZ() {
        return this._capacity
      }
      get ZEW() {
        return this._minPoint
      }
      get tEW() {
        return this._maxPoint
      }
      addEntry(WW) {
        if (this.blocks)
          for (let iW = 0; iW < this.blocks.length; iW++) {
            this.blocks[iW].addEntry(WW)
          } else this._creationFunc(WW, this), this.entries.length > this.aZ && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(WW) {
        if (this.blocks) {
          for (let iW = 0; iW < this.blocks.length; iW++) {
            this.blocks[iW].removeEntry(WW)
          }
          return
        }
        const iW = this.entries.indexOf(WW);
        iW > -1 && this.entries.splice(iW, 1)
      }
      addEntries(WW) {
        for (let iW = 0; iW < WW.length; iW++) {
          const OW = WW[iW];
          this.addEntry(OW)
        }
      }
      select(WW, iW, OW) {
        if (EW.b.IsInFrustum(this.MEW, WW)) {
          if (this.blocks) {
            for (let mW = 0; mW < this.blocks.length; mW++) {
              this.blocks[mW].select(WW, iW, OW)
            }
            return
          }
          OW ? iW.concat(this.entries) : iW.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(WW, iW, OW, mW) {
        if (EW.b.IntersectsSphere(this._minPoint, this._maxPoint, WW, iW)) {
          if (this.blocks) {
            for (let EW = 0; EW < this.blocks.length; EW++) {
              this.blocks[EW].intersects(WW, iW, OW, mW)
            }
            return
          }
          mW ? OW.concat(this.entries) : OW.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(WW, iW) {
        if (WW.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let OW = 0; OW < this.blocks.length; OW++) {
              this.blocks[OW].intersectsRay(WW, iW)
            }
            return
          }
          iW.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        NW._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(WW, iW, OW, EW, PW, LW, cW, wW) {
        cW.blocks = new Array;
        const tW = new mW.q((iW.x - WW.x) / 2, (iW.y - WW.y) / 2, (iW.z - WW.z) / 2);
        for (let mW = 0; mW < 2; mW++)
          for (let iW = 0; iW < 2; iW++)
            for (let ZW = 0; ZW < 2; ZW++) {
              const xW = WW.add(tW.multiplyByFloats(mW, iW, ZW)),
                lW = WW.add(tW.multiplyByFloats(mW + 1, iW + 1, ZW + 1)),
                AW = new NW(xW, lW, EW, PW + 1, LW, wW);
              AW.addEntries(OW), cW.blocks.push(AW)
            }
      }
    }
  },
  53797: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW
    });
    var mW = OW(41612),
      EW = OW(38241),
      NW = OW(41942),
      PW = OW(53729),
      LW = OW(41689),
      cW = OW(38270),
      wW = OW(53781);
    class tW {
      constructor(WW) {
        this.name = LW.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new PW.t(EW.q.Zero(), new EW.q(1, 1, 1)), (WW = WW || cW.d.LastCreatedScene) && (this.rb = WW, this.rb.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.rb.getActiveSubMeshCandidates = WW => this.getActiveSubMeshCandidates(WW), this.rb.getCollidingSubMeshCandidates = (WW, iW) => this.getCollidingSubMeshCandidates(WW, iW), this.rb.getIntersectingSubMeshCandidates = (WW, iW) => this.getIntersectingSubMeshCandidates(WW, iW))
      }
      register() {
        this.rb.onMeshRemovedObservable.add((WW => {
          const iW = this.rb.selectionOctree;
          if (void 0 !== iW && null !== iW) {
            const OW = iW.sEW.indexOf(WW); - 1 !== OW && iW.sEW.splice(OW, 1)
          }
        })), this.rb.onMeshImportedObservable.add((WW => {
          const iW = this.rb.selectionOctree;
          void 0 !== iW && null !== iW && iW.xEW(WW)
        }))
      }
      getActiveMeshCandidates() {
        return this.rb.JEW?.select(this.rb.frustumPlanes) || this.rb._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(WW) {
        if (WW._submeshesOctree && WW.useOctreeForRenderingSelection) {
          return WW._submeshesOctree.select(this.rb.frustumPlanes)
        }
        return this.rb._getDefaultSubMeshCandidates(WW)
      }
      getIntersectingSubMeshCandidates(WW, iW) {
        if (WW._submeshesOctree && WW.useOctreeForPicking) {
          PW.t.TransformToRef(iW, WW.getWorldMatrix(), this._tempRay);
          return WW._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.rb._getDefaultSubMeshCandidates(WW)
      }
      getCollidingSubMeshCandidates(WW, iW) {
        if (WW._submeshesOctree && WW.useOctreeForCollisions) {
          const OW = iW._velocityWorldLength + Math.max(iW._radius.x, iW._radius.y, iW._radius.z);
          return WW._submeshesOctree.intersects(iW._basePointWorld, OW)
        }
        return this.rb._getDefaultSubMeshCandidates(WW)
      }
      rebuild() {}
      dispose() {}
    }
    let ZW = !1;
    ZW || (ZW = !0, mW.i.prototype.createOrUpdateSelectionOctree = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        OW = this._getComponent(LW.b.NAME_OCTREE);
      OW || (OW = new tW(this), this.MmW(OW)), this.JEW || (this.JEW = new wW.d(wW.d.CreationFuncForMeshes, WW, iW));
      const mW = this.getWorldExtends();
      return this.JEW.update(mW.min, mW.max, this.meshes), this.JEW
    }, Object.defineProperty(mW.i.prototype, "selectionOctree", {
      get: function() {
        return this.JEW
      },
      enumerable: !0,
      configurable: !0
    }), NW.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const OW = this.bD();
      let mW = OW._getComponent(LW.b.NAME_OCTREE);
      mW || (mW = new tW(OW), OW.MmW(mW)), this._submeshesOctree || (this._submeshesOctree = new wW.d(wW.d.CreationFuncForSubMeshes, WW, iW)), this.computeWorldMatrix(!0);
      const EW = this.KV().boundingBox;
      return this._submeshesOctree.update(EW.minimumWorld, EW.maximumWorld, this.hY), this._submeshesOctree
    })
  },
  53729: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => nW,
      f: () => bW,
      h: () => AW,
      i: () => lW,
      m: () => hW,
      n: () => JW,
      o: () => YW,
      q: () => TW,
      s: () => yW,
      t: () => ZW
    });
    var mW = OW(38249),
      EW = OW(38241),
      NW = OW(38253),
      PW = OW(41812),
      LW = OW(41653),
      cW = OW(38270),
      wW = OW(41706);
    const tW = {
      internalPickerForMesh: void 0
    };
    class ZW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mW.e;
        this.origin = WW, this.direction = iW, this.length = OW, this.epsilon = EW
      }
      clone() {
        return new ZW(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const mW = ZW._TmpVector3[0].yWW(WW.x - OW, WW.y - OW, WW.z - OW),
          EW = ZW._TmpVector3[1].yWW(iW.x + OW, iW.y + OW, iW.z + OW);
        let NW, PW, LW, cW, wW = 0,
          tW = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < mW.x || this.origin.x > EW.x) return !1
        } else if (NW = 1 / this.direction.x, PW = (mW.x - this.origin.x) * NW, LW = (EW.x - this.origin.x) * NW, LW === -1 / 0 && (LW = 1 / 0), PW > LW && (cW = PW, PW = LW, LW = cW), wW = Math.max(PW, wW), tW = Math.min(LW, tW), wW > tW) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < mW.y || this.origin.y > EW.y) return !1
        } else if (NW = 1 / this.direction.y, PW = (mW.y - this.origin.y) * NW, LW = (EW.y - this.origin.y) * NW, LW === -1 / 0 && (LW = 1 / 0), PW > LW && (cW = PW, PW = LW, LW = cW), wW = Math.max(PW, wW), tW = Math.min(LW, tW), wW > tW) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < mW.z || this.origin.z > EW.z) return !1
        } else if (NW = 1 / this.direction.z, PW = (mW.z - this.origin.z) * NW, LW = (EW.z - this.origin.z) * NW, LW === -1 / 0 && (LW = 1 / 0), PW > LW && (cW = PW, PW = LW, LW = cW), wW = Math.max(PW, wW), tW = Math.min(LW, tW), wW > tW) return !1;
        return !0
      }
      intersectsBox(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(WW.minimum, WW.maximum, iW)
      }
      intersectsSphere(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = WW.center.x - this.origin.x,
          mW = WW.center.y - this.origin.y,
          EW = WW.center.z - this.origin.z,
          NW = OW * OW + mW * mW + EW * EW,
          PW = WW.radius + iW,
          LW = PW * PW;
        if (NW <= LW) return !0;
        const cW = OW * this.direction.x + mW * this.direction.y + EW * this.direction.z;
        if (cW < 0) return !1;
        return NW - cW * cW <= LW
      }
      intersectsTriangle(WW, iW, OW) {
        const mW = ZW._TmpVector3[0],
          NW = ZW._TmpVector3[1],
          LW = ZW._TmpVector3[2],
          cW = ZW._TmpVector3[3],
          wW = ZW._TmpVector3[4];
        iW.subtractToRef(WW, mW), OW.subtractToRef(WW, NW), EW.q.CrossToRef(this.direction, NW, LW);
        const tW = EW.q.Dot(mW, LW);
        if (0 === tW) return null;
        const xW = 1 / tW;
        this.origin.subtractToRef(WW, cW);
        const lW = EW.q.Dot(cW, LW) * xW;
        if (lW < -this.epsilon || lW > 1 + this.epsilon) return null;
        EW.q.CrossToRef(cW, mW, wW);
        const AW = EW.q.Dot(this.direction, wW) * xW;
        if (AW < -this.epsilon || lW + AW > 1 + this.epsilon) return null;
        const bW = EW.q.Dot(NW, wW) * xW;
        return bW > this.length || bW < 0 ? null : new PW.e(1 - lW - AW, lW, bW)
      }
      intersectsPlane(WW) {
        let iW;
        const OW = EW.q.Dot(WW.normal, this.direction);
        if (Math.abs(OW) < 9.99999997475243e-7) return null;
        {
          const mW = EW.q.Dot(WW.normal, this.origin);
          return iW = (-WW.d - mW) / OW, iW < 0 ? iW < -9.99999997475243e-7 ? null : 0 : iW
        }
      }
      intersectsAxis(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (WW) {
          case "y": {
            const WW = (this.origin.y - iW) / this.direction.y;
            return WW > 0 ? null : new EW.q(this.origin.x + this.direction.x * -WW, iW, this.origin.z + this.direction.z * -WW)
          }
          case "x": {
            const WW = (this.origin.x - iW) / this.direction.x;
            return WW > 0 ? null : new EW.q(iW, this.origin.y + this.direction.y * -WW, this.origin.z + this.direction.z * -WW)
          }
          case "z": {
            const WW = (this.origin.z - iW) / this.direction.z;
            return WW > 0 ? null : new EW.q(this.origin.x + this.direction.x * -WW, this.origin.y + this.direction.y * -WW, iW)
          }
          default:
            return null
        }
      }
      qEW(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          NW = arguments.length > 4 ? arguments[4] : void 0,
          PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const LW = EW.l.Matrix[0];
        return WW.getWorldMatrix().invertToRef(LW), this._tmpRay ? ZW.TransformToRef(this, LW, this._tmpRay) : this._tmpRay = ZW.Transform(this, LW), WW.intersects(this._tmpRay, iW, OW, mW, NW, PW)
      }
      intersectsMeshes(WW, iW, OW) {
        OW ? OW.length = 0 : OW = [];
        for (let mW = 0; mW < WW.length; mW++) {
          const EW = this.qEW(WW[mW], iW);
          EW.hit && OW.push(EW)
        }
        return OW.sort(this._comparePickingInfo), OW
      }
      _comparePickingInfo(WW, iW) {
        return WW.distance < iW.distance ? -1 : WW.distance > iW.distance ? 1 : 0
      }
      intersectionSegment(WW, iW, OW) {
        const mW = this.origin,
          NW = EW.l.fA[0],
          PW = EW.l.fA[1],
          LW = EW.l.fA[2],
          cW = EW.l.fA[3];
        iW.subtractToRef(WW, NW), this.direction.scaleToRef(ZW._Rayl, LW), mW.addToRef(LW, PW), WW.subtractToRef(mW, cW);
        const wW = EW.q.Dot(NW, NW),
          tW = EW.q.Dot(NW, LW),
          xW = EW.q.Dot(LW, LW),
          lW = EW.q.Dot(NW, cW),
          AW = EW.q.Dot(LW, cW),
          bW = wW * xW - tW * tW;
        let jW, UW, kW = bW,
          sW = bW;
        bW < ZW._Smallnum ? (jW = 0, kW = 1, UW = AW, sW = xW) : (jW = tW * AW - xW * lW, UW = wW * AW - tW * lW, jW < 0 ? (jW = 0, UW = AW, sW = xW) : jW > kW && (jW = kW, UW = AW + tW, sW = xW)), UW < 0 ? (UW = 0, -lW < 0 ? jW = 0 : -lW > wW ? jW = kW : (jW = -lW, kW = wW)) : UW > sW && (UW = sW, -lW + tW < 0 ? jW = 0 : -lW + tW > wW ? jW = kW : (jW = -lW + tW, kW = wW));
        const MW = Math.abs(jW) < ZW._Smallnum ? 0 : jW / kW,
          KW = Math.abs(UW) < ZW._Smallnum ? 0 : UW / sW,
          SW = EW.l.fA[4];
        LW.scaleToRef(KW, SW);
        const YW = EW.l.fA[5];
        NW.scaleToRef(MW, YW), YW.addInPlace(cW);
        const yW = EW.l.fA[6];
        YW.subtractToRef(SW, yW);
        return KW > 0 && KW <= this.length && yW.lengthSquared() < OW * OW ? YW.length() : -1
      }
      update(WW, iW, OW, mW, NW, PW, LW) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          ZW._RayDistant || (ZW._RayDistant = ZW.Zero()), ZW._RayDistant.unprojectRayToRef(WW, iW, OW, mW, EW.d.IdentityReadOnly, PW, LW);
          const cW = EW.l.Matrix[0];
          NW.invertToRef(cW), ZW.TransformToRef(ZW._RayDistant, cW, this)
        } else this.unprojectRayToRef(WW, iW, OW, mW, NW, PW, LW);
        return this
      }
      static Zero() {
        return new ZW(EW.q.Zero(), EW.q.Zero())
      }
      static CreateNew(WW, iW, OW, mW, EW, NW, PW) {
        return ZW.Zero().update(WW, iW, OW, mW, EW, NW, PW)
      }
      static CreateNewFromTo(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW.d.IdentityReadOnly;
        const mW = new ZW(new EW.q(0, 0, 0), new EW.q(0, 0, 0));
        return ZW.CreateFromToToRef(WW, iW, mW, OW)
      }
      static CreateFromToToRef(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW.d.IdentityReadOnly;
        OW.origin.HJ(WW);
        const NW = iW.subtractToRef(WW, OW.direction),
          PW = Math.sqrt(NW.x * NW.x + NW.y * NW.y + NW.z * NW.z);
        return OW.length = PW, OW.direction.normalize(), ZW.TransformToRef(OW, mW, OW)
      }
      static Transform(WW, iW) {
        const OW = new ZW(new EW.q(0, 0, 0), new EW.q(0, 0, 0));
        return ZW.TransformToRef(WW, iW, OW), OW
      }
      static TransformToRef(WW, iW, OW) {
        EW.q.TransformCoordinatesToRef(WW.origin, iW, OW.origin), EW.q.TransformNormalToRef(WW.direction, iW, OW.direction), OW.length = WW.length, OW.epsilon = WW.epsilon;
        const mW = OW.direction,
          NW = mW.length();
        if (0 !== NW && 1 !== NW) {
          const WW = 1 / NW;
          mW.x *= WW, mW.y *= WW, mW.z *= WW, OW.length *= NW
        }
        return OW
      }
      unprojectRayToRef(WW, iW, OW, mW, NW, PW, LW) {
        const wW = EW.l.Matrix[0];
        NW.multiplyToRef(PW, wW), wW.multiplyToRef(LW, wW), wW.invert();
        const tW = cW.d.LastCreatedEngine,
          ZW = EW.l.fA[0];
        ZW.x = WW / OW * 2 - 1, ZW.y = -(iW / mW * 2 - 1), ZW.z = tW?.nmW ? 1 : tW?.isNDCHalfZRange ? 0 : -1;
        const xW = EW.l.fA[1].yWW(ZW.x, ZW.y, 1 - 1e-8),
          lW = EW.l.fA[2],
          AW = EW.l.fA[3];
        EW.q.TransformCoordinatesToRef(ZW, wW, lW), EW.q.TransformCoordinatesToRef(xW, wW, AW), this.origin.HJ(lW), AW.subtractToRef(lW, this.direction), this.direction.normalize()
      }
    }

    function xW(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const PW = ZW.Zero();
      return lW(WW, iW, OW, mW, PW, EW, NW), PW
    }

    function lW(WW, iW, OW, mW, NW, PW) {
      let LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const wW = WW.VA();
      if (!PW && !(PW = WW.activeCamera) && !(PW = WW.cameraToUseForPointers)) return WW;
      const tW = PW.viewport,
        ZW = wW.getRenderHeight(),
        {
          x: xW,
          y: lW,
          width: AW,
          height: bW
        } = tW.toGlobal(wW.getRenderWidth(), ZW),
        jW = 1 / wW.getHardwareScalingLevel();
      return iW = iW * jW - xW, OW = OW * jW - (ZW - lW - bW), NW.update(iW, OW, AW, bW, mW || EW.d.IdentityReadOnly, LW ? EW.d.IdentityReadOnly : PW.getViewMatrix(), PW.getProjectionMatrix(), cW), WW
    }

    function AW(WW, iW, OW, mW) {
      const EW = ZW.Zero();
      return bW(WW, iW, OW, EW, mW), EW
    }

    function bW(WW, iW, OW, mW, NW) {
      if (!LW.b) return WW;
      const PW = WW.VA();
      if (!NW && !(NW = WW.activeCamera) && !(NW = WW.cameraToUseForPointers)) throw new Error("Active camera not set");
      const cW = NW.viewport,
        wW = PW.getRenderHeight(),
        {
          x: tW,
          y: ZW,
          width: xW,
          height: lW
        } = cW.toGlobal(PW.getRenderWidth(), wW),
        AW = EW.d.Identity(),
        bW = 1 / PW.getHardwareScalingLevel();
      return iW = iW * bW - tW, OW = OW * bW - (wW - ZW - lW), mW.update(iW, OW, xW, lW, AW, AW, NW.getProjectionMatrix()), WW
    }

    function jW(WW, iW, OW, mW, EW, NW, PW, LW) {
      return UW(WW, OW, mW, iW(mW, OW.enableDistantPicking), EW, NW, PW, LW)
    }

    function UW(WW, iW, OW, mW, EW, NW, PW, LW) {
      const cW = iW.intersects(mW, EW, PW, NW, OW, LW);
      return cW && cW.hit ? !EW && null != WW && cW.distance >= WW.distance ? null : cW : null
    }

    function kW(WW, iW) {
      return "InstancedLinesMesh" === WW || "LinesMesh" === WW ? iW.intersectionThreshold : 0
    }

    function sW(WW) {
      const iW = WW.getClassName();
      if ("GreasedLineMesh" === iW) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const OW = WW.rawBoundingInfo;
      return {
        rawBoundingInfo: OW,
        intersectionThreshold: OW ? kW(iW, WW) : 0
      }
    }

    function MW(WW, iW, OW, mW, EW) {
      const NW = WW(OW, iW.enableDistantPicking);
      return NW.intersectsSphere(mW.HEW, EW) && NW.intersectsBox(mW.boundingBox, EW) ? NW : null
    }

    function KW(WW, iW, OW, mW, NW, PW) {
      let cW = null;
      const wW = !!(WW.activeCameras && WW.activeCameras.length > 1 && WW.cameraToUseForPointers !== WW.activeCamera),
        ZW = WW.cameraToUseForPointers || WW.activeCamera,
        xW = tW.internalPickerForMesh || jW,
        lW = xW === jW;
      for (let LW = 0; LW < WW.meshes.length; LW++) {
        const tW = WW.meshes[LW];
        if (OW) {
          if (!OW(tW, -1)) continue
        } else if (!tW.isEnabled() || !tW.isVisible || !tW.Fb) continue;
        const AW = wW && tW.isWorldMatrixCameraDependent(),
          bW = tW.computeWorldMatrix(AW, ZW);
        if (tW.hasThinInstances && tW.OOW) {
          const WW = xW(cW, iW, tW, bW, !0, !0, PW);
          if (WW) {
            if (NW) return WW;
            const {
              rawBoundingInfo: LW,
              intersectionThreshold: wW
            } = sW(tW), ZW = tW._thinInstanceDataStorage.matrixData;
            if (ZW) {
              const WW = EW.l.Matrix[0],
                AW = EW.l.Matrix[1],
                jW = Math.min(tW.OWW, ZW.length >> 4);
              for (let kW = 0; kW < jW; kW++) {
                if (OW && !OW(tW, kW)) continue;
                EW.d.FromArrayToRef(ZW, kW << 4, WW), WW.multiplyToRef(bW, AW);
                const jW = lW && LW ? MW(iW, tW, AW, LW, wW) : null;
                if (lW && LW && !jW) continue;
                const sW = lW && jW ? UW(cW, tW, AW, jW, mW, NW, PW, !0) : xW(cW, iW, tW, AW, mW, NW, PW, !0);
                if (sW && (cW = sW, cW.thinInstanceIndex = kW, mW)) return cW
              }
            }
          }
        } else {
          const WW = xW(cW, iW, tW, bW, mW, NW, PW);
          if (WW && (cW = WW, mW)) return cW
        }
      }
      return cW || new LW.b
    }

    function SW(WW, iW, OW, mW) {
      if (!LW.b) return null;
      const NW = [],
        PW = !!(WW.activeCameras && WW.activeCameras.length > 1 && WW.cameraToUseForPointers !== WW.activeCamera),
        cW = WW.cameraToUseForPointers || WW.activeCamera,
        wW = tW.internalPickerForMesh || jW,
        ZW = wW === jW;
      for (let LW = 0; LW < WW.meshes.length; LW++) {
        const tW = WW.meshes[LW];
        if (OW) {
          if (!OW(tW, -1)) continue
        } else if (!tW.isEnabled() || !tW.isVisible || !tW.Fb) continue;
        const xW = PW && tW.isWorldMatrixCameraDependent(),
          lW = tW.computeWorldMatrix(xW, cW);
        if (tW.hasThinInstances && tW.OOW) {
          if (wW(null, iW, tW, lW, !0, !0, mW)) {
            const {
              rawBoundingInfo: WW,
              intersectionThreshold: PW
            } = sW(tW), LW = tW._thinInstanceDataStorage.matrixData;
            if (LW) {
              const cW = EW.l.Matrix[0],
                xW = EW.l.Matrix[1],
                AW = Math.min(tW.OWW, LW.length >> 4);
              for (let bW = 0; bW < AW; bW++) {
                if (OW && !OW(tW, bW)) continue;
                EW.d.FromArrayToRef(LW, bW << 4, cW), cW.multiplyToRef(lW, xW);
                const AW = ZW && WW ? MW(iW, tW, xW, WW, PW) : null;
                if (ZW && WW && !AW) continue;
                const jW = ZW && AW ? UW(null, tW, xW, AW, !1, !1, mW, !0) : wW(null, iW, tW, xW, !1, !1, mW, !0);
                jW && (jW.thinInstanceIndex = bW, NW.push(jW))
              }
            }
          }
        } else {
          const WW = wW(null, iW, tW, lW, !1, !1, mW);
          WW && NW.push(WW)
        }
      }
      return NW
    }

    function YW(WW, iW, OW, mW, NW, PW) {
      if (!LW.b) return null;
      const cW = KW(WW, (mW => (WW._tempPickingRay || (WW._tempPickingRay = ZW.Zero()), lW(WW, iW, OW, mW, WW._tempPickingRay, PW || null), WW._tempPickingRay)), mW, NW, !0);
      return cW && (cW.ray = xW(WW, iW, OW, EW.d.Identity(), PW || null)), cW
    }

    function yW(WW, iW, OW, mW, NW, PW, LW) {
      const cW = KW(WW, ((mW, EW) => (WW._tempPickingRay || (WW._tempPickingRay = ZW.Zero()), lW(WW, iW, OW, mW, WW._tempPickingRay, PW || null, !1, EW), WW._tempPickingRay)), mW, NW, !1, LW);
      return cW && (cW.ray = xW(WW, iW, OW, EW.d.Identity(), PW || null)), cW
    }

    function TW(WW, iW, OW, mW, NW) {
      const PW = KW(WW, (OW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = EW.d.Identity()), OW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = ZW.Zero()), ZW.TransformToRef(iW, WW._pickWithRayInverseMatrix, WW._cachedRayForTransform), WW._cachedRayForTransform)), OW, mW, !1, NW);
      return PW && (PW.ray = iW), PW
    }

    function JW(WW, iW, OW, mW, EW, NW) {
      return SW(WW, (mW => xW(WW, iW, OW, mW, EW || null)), mW, NW)
    }

    function hW(WW, iW, OW, mW) {
      return SW(WW, (OW => (WW._pickWithRayInverseMatrix || (WW._pickWithRayInverseMatrix = EW.d.Identity()), OW.invertToRef(WW._pickWithRayInverseMatrix), WW._cachedRayForTransform || (WW._cachedRayForTransform = ZW.Zero()), ZW.TransformToRef(iW, WW._pickWithRayInverseMatrix, WW._cachedRayForTransform), WW._cachedRayForTransform)), OW, mW)
    }

    function HW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        mW = arguments.length > 3 ? arguments[3] : void 0,
        NW = arguments.length > 4 ? arguments[4] : void 0;
      mW || (mW = WW.getWorldMatrix()), iW.length = OW, NW ? iW.origin.HJ(NW) : iW.origin.HJ(WW.position);
      const PW = EW.l.fA[2];
      PW.set(0, 0, WW._scene.useRightHandedSystem ? -1 : 1);
      const LW = EW.l.fA[3];
      return EW.q.TransformNormalToRef(PW, mW, LW), EW.q.NormalizeToRef(LW, iW.direction), iW
    }

    function nW(WW, iW) {
      iW && (iW.prototype.getForwardRay = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        return HW(this, new ZW(EW.q.Zero(), EW.q.Zero(), WW), WW, iW, OW)
      }, iW.prototype.getForwardRayToRef = function(WW) {
        return HW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), WW && (wW.b._IsPickingAvailable = !0, WW.prototype.createPickingRay = function(WW, iW, OW, mW) {
        return xW(this, WW, iW, OW, mW, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    ZW._TmpVector3 = (0, NW.c)(6, EW.q.Zero), ZW._RayDistant = ZW.Zero(), ZW._Smallnum = 1e-8, ZW._Rayl = 1e9
  },
  53720: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW.t
    });
    var mW = OW(41612),
      EW = OW(41723),
      NW = OW(53729);
    let PW = !1;
    PW || (PW = !0, (0, NW.b)(mW.i, EW.e), mW.i.prototype.createPickingRayToRef = function(WW, iW, OW, mW, EW) {
      let PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, NW.i)(this, WW, iW, OW, mW, EW, PW, LW)
    }, mW.i.prototype.createPickingRayInCameraSpace = function(WW, iW, OW) {
      return (0, NW.h)(this, WW, iW, OW)
    }, mW.i.prototype.createPickingRayInCameraSpaceToRef = function(WW, iW, OW, mW) {
      return (0, NW.f)(this, WW, iW, OW, mW)
    }, mW.i.prototype.pickWithBoundingInfo = function(WW, iW, OW, mW, EW) {
      return (0, NW.o)(this, WW, iW, OW, mW, EW)
    }, mW.i.prototype.Kl = function(WW, iW, OW, mW, EW, PW) {
      let LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, NW.s)(this, WW, iW, OW, mW, EW, PW, LW)
    }, mW.i.prototype.pickWithRay = function(WW, iW, OW, mW) {
      return (0, NW.q)(this, WW, iW, OW, mW)
    }, mW.i.prototype.multiPick = function(WW, iW, OW, mW, EW) {
      return (0, NW.n)(this, WW, iW, OW, mW, EW)
    }, mW.i.prototype.multiPickWithRay = function(WW, iW, OW) {
      return (0, NW.m)(this, WW, iW, OW)
    })
  },
  53738: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(41773),
      LW = OW(53745),
      cW = OW(41732),
      wW = OW(38299);
    let tW = (() => {
        var WW;
        let iW, OW, cW, wW, tW, ZW, xW, lW, AW = LW.e,
          bW = [],
          jW = [],
          UW = [],
          kW = [],
          sW = [],
          MW = [],
          KW = [],
          SW = [],
          YW = [],
          yW = [],
          TW = [],
          JW = [],
          hW = [];
        return WW = class extends AW {
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
          constructor(WW, iW, OW, EW) {
            super(WW, OW, EW), this._shadowFrustumSize = ((0, mW.g)(this, bW), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, mW.g)(this, jW, !0), this.autoCalcShadowZBounds = ((0, mW.g)(this, UW), (0, mW.g)(this, kW, !1)), this._orthoLeft = ((0, mW.g)(this, sW), (0, mW.g)(this, MW, Number.MAX_VALUE)), this._orthoRight = ((0, mW.g)(this, KW), (0, mW.g)(this, SW, Number.MIN_VALUE)), this._orthoTop = ((0, mW.g)(this, YW), (0, mW.g)(this, yW, Number.MIN_VALUE)), this._orthoBottom = ((0, mW.g)(this, TW), (0, mW.g)(this, JW, Number.MAX_VALUE)), (0, mW.g)(this, hW), this.position = iW.scale(-1), this.direction = iW
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return PW.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(WW, iW, OW) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(WW) : this._setDefaultAutoExtendShadowProjectionMatrix(WW, iW, OW)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(WW) {
            const iW = this.bD().activeCamera;
            NW.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : iW ? iW.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : iW ? iW.maxZ : 1e4, WW, this.bD().VA().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(WW, iW, OW) {
            const mW = this.bD().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const WW = NW.q.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let mW = Number.MAX_VALUE,
                EW = -Number.MAX_VALUE;
              for (let PW = 0; PW < OW.length; PW++) {
                const LW = OW[PW];
                if (!LW) continue;
                const cW = LW.KV().boundingBox;
                for (let OW = 0; OW < cW.vectorsWorld.length; OW++) NW.q.TransformCoordinatesToRef(cW.vectorsWorld[OW], iW, WW), WW.x < this._orthoLeft && (this._orthoLeft = WW.x), WW.y < this._orthoBottom && (this._orthoBottom = WW.y), WW.x > this._orthoRight && (this._orthoRight = WW.x), WW.y > this._orthoTop && (this._orthoTop = WW.y), this.autoCalcShadowZBounds && (WW.z < mW && (mW = WW.z), WW.z > EW && (EW = WW.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = mW, this._shadowMaxZ = EW)
            }
            const EW = this._orthoRight - this._orthoLeft,
              PW = this._orthoTop - this._orthoBottom,
              LW = void 0 !== this.shadowMinZ ? this.shadowMinZ : mW?.minZ || 0,
              cW = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : mW?.maxZ || 1e4,
              wW = this.bD().VA().nmW;
            NW.d.OrthoOffCenterLHToRef(this._orthoLeft - EW * this.shadowOrthoScale, this._orthoRight + EW * this.shadowOrthoScale, this._orthoBottom - PW * this.shadowOrthoScale, this._orthoTop + PW * this.shadowOrthoScale, wW ? cW : LW, wW ? LW : cW, WW, this.bD().VA().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(WW, iW) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, iW), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, iW), this)
          }
          transferToNodeMaterialEffect(WW, iW) {
            return this.computeTransformedInformation() ? (WW.setFloat3(iW, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (WW.setFloat3(iW, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(WW) {
            const iW = this._scene.VA();
            return !iW.nmW && iW.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(WW) {
            const iW = this._scene.VA();
            return iW.nmW && iW.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(WW, iW) {
            WW["DIRLIGHT" + iW] = !0
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(AW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], tW = [(0, EW.M)("orthoLeft")], ZW = [(0, EW.M)("orthoRight")], xW = [(0, EW.M)("orthoTop")], lW = [(0, EW.M)("orthoBottom")], (0, mW.e)(WW, null, iW, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: WW => "shadowFrustumSize" in WW,
              get: WW => WW.shadowFrustumSize
            },
            metadata: NW
          }, null, bW), (0, mW.e)(WW, null, OW, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "shadowOrthoScale" in WW,
              get: WW => WW.shadowOrthoScale
            },
            metadata: NW
          }, null, bW), (0, mW.e)(null, null, cW, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: WW => "autoUpdateExtends" in WW,
              get: WW => WW.autoUpdateExtends,
              set: (WW, iW) => {
                WW.autoUpdateExtends = iW
              }
            },
            metadata: NW
          }, jW, UW), (0, mW.e)(null, null, wW, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: WW => "autoCalcShadowZBounds" in WW,
              get: WW => WW.autoCalcShadowZBounds,
              set: (WW, iW) => {
                WW.autoCalcShadowZBounds = iW
              }
            },
            metadata: NW
          }, kW, sW), (0, mW.e)(null, null, tW, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoLeft" in WW,
              get: WW => WW._orthoLeft,
              set: (WW, iW) => {
                WW._orthoLeft = iW
              }
            },
            metadata: NW
          }, MW, KW), (0, mW.e)(null, null, ZW, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoRight" in WW,
              get: WW => WW._orthoRight,
              set: (WW, iW) => {
                WW._orthoRight = iW
              }
            },
            metadata: NW
          }, SW, YW), (0, mW.e)(null, null, xW, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoTop" in WW,
              get: WW => WW._orthoTop,
              set: (WW, iW) => {
                WW._orthoTop = iW
              }
            },
            metadata: NW
          }, yW, TW), (0, mW.e)(null, null, lW, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: WW => "_orthoBottom" in WW,
              get: WW => WW._orthoBottom,
              set: (WW, iW) => {
                WW._orthoBottom = iW
              }
            },
            metadata: NW
          }, JW, hW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      ZW = !1;
    ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_1", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.DirectionalLight", tW))
  },
  39938: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      g: () => NW,
      i: () => PW,
      m: () => LW
    });
    var mW = OW(38372);
    class EW {
      constructor(WW, iW, OW) {
        this.gradient = WW, this.color1 = iW, this.color2 = OW
      }
      getColorToRef(WW) {
        this.color2 ? mW.d.LerpToRef(this.color1, this.color2, Math.random(), WW) : WW.HJ(this.color1)
      }
    }
    class NW {
      constructor(WW, iW) {
        this.gradient = WW, this.color = iW
      }
    }
    class PW {
      constructor(WW, iW, OW) {
        this.gradient = WW, this.factor1 = iW, this.factor2 = OW
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class LW {
      static GetCurrentGradient(WW, iW, OW) {
        if (iW[0].gradient > WW) return void OW(iW[0], iW[0], 1);
        for (let EW = 0; EW < iW.length - 1; EW++) {
          const mW = iW[EW],
            NW = iW[EW + 1];
          if (WW >= mW.gradient && WW <= NW.gradient) {
            return void OW(mW, NW, (WW - mW.gradient) / (NW.gradient - mW.gradient))
          }
        }
        const mW = iW.length - 1;
        OW(iW[mW], iW[mW], 1)
      }
    }
  },
  39940: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(39908);
    class PW {
      constructor() {
        this.direction1 = new mW.q(0, 1, 0), this.direction2 = new mW.q(0, 1, 0), this.minEmitBox = new mW.q(-.5, -.5, -.5), this.maxEmitBox = new mW.q(.5, .5, .5)
      }
      startDirectionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
          LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
          cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
        if (NW) return iW.x = PW, iW.y = LW, void(iW.z = cW);
        mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
      }
      startPositionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          LW = (0, EW.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          cW = (0, EW.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (NW) return iW.x = PW, iW.y = LW, void(iW.z = cW);
        mW.q.TransformCoordinatesFromFloatsToRef(PW, LW, cW, WW, iW)
      }
      clone() {
        const WW = new PW;
        return NW.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2), WW.setVector3("minEmitBox", this.minEmitBox), WW.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(WW) {
        WW.addUniform("direction1", 3), WW.addUniform("direction2", 3), WW.addUniform("minEmitBox", 3), WW.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW.minEmitBox = this.minEmitBox.wEW(), WW.maxEmitBox = this.maxEmitBox.wEW(), WW
      }
      parse(WW) {
        mW.q.FromArrayToRef(WW.direction1, 0, this.direction1), mW.q.FromArrayToRef(WW.direction2, 0, this.direction2), mW.q.FromArrayToRef(WW.minEmitBox, 0, this.minEmitBox), mW.q.FromArrayToRef(WW.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39906: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      i: () => PW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(39908);
    class PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = WW, this.height = iW, this.radiusRange = OW, this.directionRandomizer = EW, this._tempVector = mW.q.Zero()
      }
      startDirectionFunction(WW, iW, OW, NW, PW) {
        OW.position.subtractToRef(WW.getTranslation(), this._tempVector), this._tempVector.normalize(), mW.q.TransformNormalToRef(this._tempVector, PW, this._tempVector);
        const LW = (0, EW.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let cW = Math.atan2(this._tempVector.x, this._tempVector.z);
        cW += (0, EW.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = LW, this._tempVector.x = Math.sin(cW), this._tempVector.z = Math.cos(cW), this._tempVector.normalize(), NW ? iW.HJ(this._tempVector) : mW.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, WW, iW)
      }
      startPositionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(-this.height / 2, this.height / 2),
          LW = (0, EW.RandomRange)(0, 2 * Math.PI),
          cW = (0, EW.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          wW = Math.sqrt(cW) * this.radius,
          tW = wW * Math.cos(LW),
          ZW = wW * Math.sin(LW);
        NW ? iW.yWW(tW, PW, ZW) : mW.q.TransformCoordinatesFromFloatsToRef(tW, PW, ZW, WW, iW)
      }
      clone() {
        const WW = new PW(this.radius, this.directionRandomizer);
        return NW.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.radius = this.radius, WW.height = this.height, WW.radiusRange = this.radiusRange, WW.directionRandomizer = this.directionRandomizer, WW
      }
      parse(WW) {
        this.radius = WW.radius, this.height = WW.height, this.radiusRange = WW.radiusRange, this.directionRandomizer = WW.directionRandomizer
      }
    }
    class LW extends PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new mW.q(0, 1, 0),
          NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new mW.q(0, 1, 0);
        super(WW, iW, OW), this.direction1 = EW, this.direction2 = NW
      }
      startDirectionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
          LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
          cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
        NW ? iW.yWW(PW, LW, cW) : mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
      }
      clone() {
        const WW = new LW(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return NW.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const WW = super.serialize();
        return WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW
      }
      parse(WW) {
        super.parse(WW), mW.q.FromArrayToRef(WW.direction1, 0, this.direction1), mW.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
  },
  53756: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => Ii
    });
    var mW = OW(39938),
      EW = OW(38276),
      NW = OW(38241),
      PW = OW(41660),
      LW = OW(53763),
      cW = OW(38270),
      wW = OW(41795),
      tW = OW(38372),
      ZW = OW(39940),
      xW = OW(39908),
      lW = OW(38285);
    class AW {
      constructor() {
        this.direction1 = new NW.q(0, 1, 0), this.direction2 = new NW.q(0, 1, 0)
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
          PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
          LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
        mW ? iW.yWW(EW, PW, LW) : NW.q.TransformNormalFromFloatsToRef(EW, PW, LW, WW, iW)
      }
      startPositionFunction(WW, iW, OW, mW) {
        mW ? iW.yWW(0, 0, 0) : NW.q.TransformCoordinatesFromFloatsToRef(0, 0, 0, WW, iW)
      }
      clone() {
        const WW = new AW;
        return xW.c.DeepCopy(this, WW), WW
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
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW
      }
      parse(WW) {
        NW.q.FromArrayToRef(WW.direction1, 0, this.direction1), NW.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
    class bW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = WW, this.radiusRange = iW, this.directionRandomizer = OW
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = OW.position.subtract(WW.getTranslation()).normalize(),
          PW = (0, lW.RandomRange)(0, this.directionRandomizer),
          LW = (0, lW.RandomRange)(0, this.directionRandomizer),
          cW = (0, lW.RandomRange)(0, this.directionRandomizer);
        EW.x += PW, EW.y += LW, EW.z += cW, EW.normalize(), mW ? iW.HJ(EW) : NW.q.TransformNormalFromFloatsToRef(EW.x, EW.y, EW.z, WW, iW)
      }
      startPositionFunction(WW, iW, OW, mW) {
        const EW = this.radius - (0, lW.RandomRange)(0, this.radius * this.radiusRange),
          PW = (0, lW.RandomRange)(0, 1),
          LW = (0, lW.RandomRange)(0, 2 * Math.PI),
          cW = Math.acos(2 * PW - 1),
          wW = EW * Math.cos(LW) * Math.sin(cW),
          tW = EW * Math.cos(cW),
          ZW = EW * Math.sin(LW) * Math.sin(cW);
        mW ? iW.yWW(wW, Math.abs(tW), ZW) : NW.q.TransformCoordinatesFromFloatsToRef(wW, Math.abs(tW), ZW, WW, iW)
      }
      clone() {
        const WW = new bW(this.radius, this.directionRandomizer);
        return xW.c.DeepCopy(this, WW), WW
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
    class jW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = WW, this.radiusRange = iW, this.directionRandomizer = OW
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = OW.position.subtract(WW.getTranslation()).normalize(),
          PW = (0, lW.RandomRange)(0, this.directionRandomizer),
          LW = (0, lW.RandomRange)(0, this.directionRandomizer),
          cW = (0, lW.RandomRange)(0, this.directionRandomizer);
        EW.x += PW, EW.y += LW, EW.z += cW, EW.normalize(), mW ? iW.HJ(EW) : NW.q.TransformNormalFromFloatsToRef(EW.x, EW.y, EW.z, WW, iW)
      }
      startPositionFunction(WW, iW, OW, mW) {
        const EW = this.radius - (0, lW.RandomRange)(0, this.radius * this.radiusRange),
          PW = (0, lW.RandomRange)(0, 1),
          LW = (0, lW.RandomRange)(0, 2 * Math.PI),
          cW = Math.acos(2 * PW - 1),
          wW = EW * Math.cos(LW) * Math.sin(cW),
          tW = EW * Math.cos(cW),
          ZW = EW * Math.sin(LW) * Math.sin(cW);
        mW ? iW.yWW(wW, tW, ZW) : NW.q.TransformCoordinatesFromFloatsToRef(wW, tW, ZW, WW, iW)
      }
      clone() {
        const WW = new jW(this.radius, this.directionRandomizer);
        return xW.c.DeepCopy(this, WW), WW
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
    class UW extends jW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NW.q(0, 1, 0),
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0);
        super(WW), this.direction1 = iW, this.direction2 = OW
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
          PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
          LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
        mW ? iW.yWW(EW, PW, LW) : NW.q.TransformNormalFromFloatsToRef(EW, PW, LW, WW, iW)
      }
      clone() {
        const WW = new UW(this.radius, this.direction1, this.direction2);
        return xW.c.DeepCopy(this, WW), WW
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
        return WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW
      }
      parse(WW) {
        super.parse(WW), NW.q.FromArrayToRef(WW.direction1, 0, this.direction1), NW.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
    var kW = OW(39906);
    class sW {
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
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = OW, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = iW, this.radius = WW
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = OW.position.subtract(WW.getTranslation()).normalize(),
          PW = (0, lW.RandomRange)(0, this.directionRandomizer),
          LW = (0, lW.RandomRange)(0, this.directionRandomizer),
          cW = (0, lW.RandomRange)(0, this.directionRandomizer);
        EW.x += PW, EW.y += LW, EW.z += cW, EW.normalize(), mW ? iW.HJ(EW) : NW.q.TransformNormalFromFloatsToRef(EW.x, EW.y, EW.z, WW, iW)
      }
      startPositionFunction(WW, iW, OW, mW) {
        const EW = (0, lW.RandomRange)(0, 2 * Math.PI);
        let PW;
        this.emitFromSpawnPointOnly ? PW = 1e-4 : (PW = (0, lW.RandomRange)(0, this.heightRange), PW = 1 - PW * PW);
        let LW = this._radius - (0, lW.RandomRange)(0, this._radius * this.radiusRange);
        LW *= PW;
        const cW = LW * Math.sin(EW),
          wW = LW * Math.cos(EW),
          tW = PW * this._height;
        if (mW) return iW.x = cW, iW.y = tW, void(iW.z = wW);
        NW.q.TransformCoordinatesFromFloatsToRef(cW, tW, wW, WW, iW)
      }
      clone() {
        const WW = new sW(this._radius, this._angle, this.directionRandomizer);
        return xW.c.DeepCopy(this, WW), WW
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
    class MW extends sW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0),
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0);
        super(WW, iW), this.direction1 = OW, this.direction2 = mW
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
          PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
          LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
        mW ? iW.yWW(EW, PW, LW) : NW.q.TransformNormalFromFloatsToRef(EW, PW, LW, WW, iW)
      }
      clone() {
        const WW = new MW(this.radius, this.angle, this.direction1, this.direction2);
        return xW.c.DeepCopy(this, WW), WW
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
        return WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW
      }
      parse(WW) {
        super.parse(WW), NW.q.FromArrayToRef(WW.direction1, 0, this.direction1), NW.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
    class KW {
      get mesh() {
        return this._mesh
      }
      set mesh(WW) {
        this._mesh !== WW && (this._mesh = WW, WW ? (this._indices = WW.IEW(), this._positions = WW.getVerticesData(PW.k.PositionKind), this._normals = WW.getVerticesData(PW.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = NW.q.Zero(), this._mesh = null, this.direction1 = new NW.q(0, 1, 0), this.direction2 = new NW.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = WW
      }
      startDirectionFunction(WW, iW, OW, mW) {
        if (this.useMeshNormalsForDirection && this._normals) return void NW.q.TransformNormalToRef(this._storedNormal, WW, iW);
        const EW = (0, lW.RandomRange)(this.direction1.x, this.direction2.x),
          PW = (0, lW.RandomRange)(this.direction1.y, this.direction2.y),
          LW = (0, lW.RandomRange)(this.direction1.z, this.direction2.z);
        mW ? iW.yWW(EW, PW, LW) : NW.q.TransformNormalFromFloatsToRef(EW, PW, LW, WW, iW)
      }
      startPositionFunction(WW, iW, OW, mW) {
        if (!this._indices || !this._positions) return;
        const EW = 3 * (Math.random() * (this._indices.length / 3) | 0),
          PW = Math.random(),
          LW = Math.random() * (1 - PW),
          cW = 1 - PW - LW,
          wW = this._indices[EW],
          tW = this._indices[EW + 1],
          ZW = this._indices[EW + 2],
          xW = NW.l.fA[0],
          lW = NW.l.fA[1],
          AW = NW.l.fA[2],
          bW = NW.l.fA[3];
        NW.q.FromArrayToRef(this._positions, 3 * wW, xW), NW.q.FromArrayToRef(this._positions, 3 * tW, lW), NW.q.FromArrayToRef(this._positions, 3 * ZW, AW), bW.x = PW * xW.x + LW * lW.x + cW * AW.x, bW.y = PW * xW.y + LW * lW.y + cW * AW.y, bW.z = PW * xW.z + LW * lW.z + cW * AW.z, mW ? iW.yWW(bW.x, bW.y, bW.z) : NW.q.TransformCoordinatesFromFloatsToRef(bW.x, bW.y, bW.z, WW, iW), this.useMeshNormalsForDirection && this._normals && (NW.q.FromArrayToRef(this._normals, 3 * wW, xW), NW.q.FromArrayToRef(this._normals, 3 * tW, lW), NW.q.FromArrayToRef(this._normals, 3 * ZW, AW), this._storedNormal.x = PW * xW.x + LW * lW.x + cW * AW.x, this._storedNormal.y = PW * xW.y + LW * lW.y + cW * AW.y, this._storedNormal.z = PW * xW.z + LW * lW.z + cW * AW.z)
      }
      clone() {
        const WW = new KW(this.mesh);
        return xW.c.DeepCopy(this, WW), WW
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
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW.meshId = this.mesh?.id, WW.useMeshNormalsForDirection = this.useMeshNormalsForDirection, WW
      }
      parse(WW, iW) {
        NW.q.FromArrayToRef(WW.direction1, 0, this.direction1), NW.q.FromArrayToRef(WW.direction2, 0, this.direction2), WW.meshId && iW && (this.mesh = iW.getLastMeshById(WW.meshId)), this.useMeshNormalsForDirection = WW.useMeshNormalsForDirection
      }
    }
    class SW {
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
        const iW = this._attractors.indexOf(WW); - 1 !== iW && this._attractors.splice(iW, 1)
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
        this._useLogarithmicDepth = WW && this.bD().VA().getCaps().fragmentDepthSupported
      }
      bD() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(WW) {
        switch (WW) {
          case SW.BLENDMODE_MULTIPLYADD:
            return;
          case SW.BLENDMODE_ADD:
            WW = 1;
            break;
          case SW.BLENDMODE_ONEONE:
            WW = 6;
            break;
          case SW.BLENDMODE_STANDARD:
            WW = 2;
            break;
          case SW.BLENDMODE_MULTIPLY:
            WW = 4;
            break;
          case SW.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(WW, iW, OW) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, WW, iW, OW), this
      }
      removeEmitRateGradient(WW) {
        return this._removeFactorGradient(this._emitRateGradients, WW), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : NW.q.Zero()
      }
      set direction1(WW) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = WW)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : NW.q.Zero()
      }
      set direction2(WW) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = WW)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : NW.q.Zero()
      }
      set minEmitBox(WW) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = WW)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : NW.q.Zero()
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
      _addFactorGradient(WW, iW, OW, EW) {
        const NW = new mW.i(iW, OW, EW);
        WW.push(NW), WW.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0))
      }
      _removeFactorGradient(WW, iW) {
        if (!WW) return;
        let OW = 0;
        for (const mW of WW) {
          if (mW.gradient === iW) {
            WW.splice(OW, 1);
            break
          }
          OW++
        }
      }
      _removeGradientAndTexture(WW, iW, OW) {
        if (!iW) return this;
        let mW = 0;
        for (const EW of iW) {
          if (EW.gradient === WW) {
            iW.splice(mW, 1);
            break
          }
          mW++
        }
        return OW && OW.dispose(), this
      }
      constructor(WW) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = NW.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new NW.q(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = SW.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new NW.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new NW.q(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = NW.q.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new tW.d(1, 1, 1, 1), this.color2 = new tW.d(1, 1, 1, 1), this.colorDead = new tW.d(0, 0, 0, 1), this.textureMask = new tW.d(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new wW.c, this.id = WW, this.name = WW
      }
      createPointEmitter(WW, iW) {
        const OW = function(WW, iW) {
          const OW = new AW;
          return OW.direction1 = WW, OW.direction2 = iW, OW
        }(WW, iW);
        return this.particleEmitterType = OW, OW
      }
      createHemisphericEmitter() {
        const WW = function() {
          return new bW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = WW, WW
      }
      createSphereEmitter() {
        const WW = function() {
          return new jW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = WW, WW
      }
      createDirectedSphereEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NW.q(0, 1, 0),
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0);
          return new UW(WW, iW, OW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NW.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0));
        return this.particleEmitterType = WW, WW
      }
      createCylinderEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new kW.i(WW, iW, OW, mW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = WW, WW
      }
      createDirectedCylinderEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0),
            EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new NW.q(0, 1, 0);
          return new kW.e(WW, iW, OW, mW, EW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new NW.q(0, 1, 0));
        return this.particleEmitterType = WW, WW
      }
      createConeEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new sW(WW, iW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = WW, WW
      }
      createDirectedConeEmitter() {
        const WW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0),
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0);
          return new MW(WW, iW, OW, mW)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NW.q(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NW.q(0, 1, 0));
        return this.particleEmitterType = WW, WW
      }
      createBoxEmitter(WW, iW, OW, mW) {
        const EW = new ZW.d;
        return this.particleEmitterType = EW, this.direction1 = WW, this.direction2 = iW, this.minEmitBox = OW, this.maxEmitBox = mW, EW
      }
      createMeshEmitter() {
        const WW = function() {
          return new KW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = WW, WW
      }
    }
    SW.BLENDMODE_ONEONE = 0, SW.BLENDMODE_STANDARD = 1, SW.BLENDMODE_ADD = 2, SW.BLENDMODE_MULTIPLY = 3, SW.BLENDMODE_MULTIPLYADD = 4, SW.BLENDMODE_SUBTRACT = -1;
    class YW {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new tW.d(0, 0, 0, 0), this.currentColor2 = new tW.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = NW.q.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class yW {
      constructor(WW) {
        this.particleSystem = WW, this.position = NW.q.Zero(), this.direction = NW.q.Zero(), this.color = new tW.d(0, 0, 0, 0), this.colorStep = new tW.d(0, 0, 0, 0), this.initialColor = new tW.d(0, 0, 0, 0), this.colorDead = new tW.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new NW.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new YW, this.id = yW._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let WW = this.age,
          iW = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === iW ? (iW = 1, WW = this._properties.randomCellOffset) : WW += this._properties.randomCellOffset);
        const OW = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let mW;
        mW = this._properties.initialSpriteCellLoop ? (0, lW.Clamp)(WW * iW % this.lifeTime / this.lifeTime) : (0, lW.Clamp)(WW * iW / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + mW * OW | 0
      }
      _inheritParticleInfoToSubEmitter(WW) {
        if (WW.particleSystem.emitter.position) {
          const iW = WW.particleSystem.emitter;
          if (iW.position.HJ(this.position), WW.inheritDirection) {
            const WW = NW.l.fA[0];
            this.direction.normalizeToRef(WW), iW.setDirection(WW, 0, Math.PI / 2)
          }
        } else {
          WW.particleSystem.emitter.HJ(this.position)
        }
        this.direction.scaleToRef(WW.inheritedVelocityAmount / 2, NW.l.fA[0]), WW.particleSystem._inheritedVelocityOffset.HJ(NW.l.fA[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const WW of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(WW)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = yW._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(WW) {
        WW.position.HJ(this.position), this._properties.initialDirection ? WW._properties.initialDirection ? WW._properties.initialDirection.HJ(this._properties.initialDirection) : WW._properties.initialDirection = this._properties.initialDirection.clone() : WW._properties.initialDirection = null, WW.direction.HJ(this.direction), this._properties.localPosition && (WW._properties.localPosition ? WW._properties.localPosition.HJ(this._properties.localPosition) : WW._properties.localPosition = this._properties.localPosition.clone()), WW.color.HJ(this.color), WW.colorStep.HJ(this.colorStep), WW.initialColor.HJ(this.initialColor), WW.colorDead.HJ(this.colorDead), WW.lifeTime = this.lifeTime, WW.age = this.age, WW._properties.randomCellOffset = this._properties.randomCellOffset, WW.size = this.size, WW.scale.HJ(this.scale), WW.angle = this.angle, WW.angularSpeed = this.angularSpeed, WW.particleSystem = this.particleSystem, WW.cellIndex = this.cellIndex, WW.id = this.id, WW._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (WW._properties.currentColorGradient = this._properties.currentColorGradient, WW._properties.currentColor1.HJ(this._properties.currentColor1), WW._properties.currentColor2.HJ(this._properties.currentColor2)), this._properties.currentSizeGradient && (WW._properties.currentSizeGradient = this._properties.currentSizeGradient, WW._properties.currentSize1 = this._properties.currentSize1, WW._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (WW._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, WW._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, WW._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (WW._properties.currentVelocityGradient = this._properties.currentVelocityGradient, WW._properties.currentVelocity1 = this._properties.currentVelocity1, WW._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (WW._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, WW._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, WW._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (WW._properties.currentDragGradient = this._properties.currentDragGradient, WW._properties.currentDrag1 = this._properties.currentDrag1, WW._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (WW._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, WW._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, WW._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (WW.remapData && this.remapData ? WW.remapData.HJ(this.remapData) : WW.remapData = new NW.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2 ? (WW._properties.randomNoiseCoordinates1.HJ(this._properties.randomNoiseCoordinates1), WW._properties.randomNoiseCoordinates2.HJ(this._properties.randomNoiseCoordinates2)) : (WW._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), WW._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), WW.metadata = this.metadata
      }
    }
    yW._Count = 0;
    var TW = OW(42580);
    class JW {
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
      constructor(WW, iW, OW, mW) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = iW, this.HZ = WW, this._scene = OW, this._host = mW, this._activeTargets = [], iW._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            sO: this._getCorrectLoopMode()
          }, this._animation.dataType === TW.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = NW.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const WW = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, WW)
        }
        if (this.HZ instanceof Array) {
          let WW = 0;
          for (const iW of this.HZ) this._preparePath(iW, WW), this._getOriginalValues(WW), WW++;
          this._targetIsArray = !0
        } else this._preparePath(this.HZ), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const EW = iW.getEvents();
        if (EW && EW.length > 0)
          for (const NW of EW) this._events.push(NW._clone());
        this._enableBlending = WW && WW.animationPropertiesOverride ? WW.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = this._animation.targetPropertyPath;
        if (OW.length > 1) {
          let mW = WW;
          for (let WW = 0; WW < OW.length - 1; WW++) {
            const iW = OW[WW];
            if (mW = mW[iW], void 0 === mW) throw new Error(`Invalid property (${iW}) in property path (${OW.join(".")})`)
          }
          this._targetPath = OW[OW.length - 1], this._activeTargets[iW] = mW
        } else this._targetPath = OW[0], this._activeTargets[iW] = WW;
        if (void 0 === this._activeTargets[iW][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${OW.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.HZ instanceof Array) {
            let WW = 0;
            for (const iW of this.HZ) void 0 !== this._originalValue[WW] && this._setValue(iW, this._activeTargets[WW], this._originalValue[WW], -1, WW), WW++
          } else void 0 !== this._originalValue[0] && this._setValue(this.HZ, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(WW, iW) {
        if (this._targetIsArray)
          for (let OW = 0; OW < this.HZ.length; OW++) {
            const mW = this.HZ[OW];
            this._setValue(mW, this._activeTargets[OW], WW, iW, OW)
          } else this._setValue(this.HZ, this._directTarget, WW, iW, 0)
      }
      _getOriginalValues() {
        let WW, iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const OW = this._activeTargets[iW];
        if (TW.d.InheritOriginalValueFromActiveAnimations) {
          const WW = this._scene._activeAnimatables;
          for (let mW = 0; mW < WW.length; mW++) {
            const EW = WW[mW]._runtimeAnimations;
            for (let WW = 0; WW < EW.length; WW++) {
              const mW = EW[WW];
              if (mW !== this && mW._targetPath === this._targetPath)
                for (let WW = 0; WW < mW._activeTargets.length; WW++)
                  if (mW._activeTargets[WW] === OW && void 0 !== mW._originalValue[WW]) return void(mW._originalValue[WW] && mW._originalValue[WW].clone ? this._originalValue[iW] = mW._originalValue[WW].clone() : this._originalValue[iW] = mW._originalValue[WW])
            }
          }
        }
        WW = OW.getLocalMatrix && "_matrix" === this._targetPath ? OW.getLocalMatrix() : OW[this._targetPath], WW && WW.clone ? this._originalValue[iW] = WW.clone() : this._originalValue[iW] = WW
      }
      _registerTargetForLateAnimationBinding(WW, iW) {
        const OW = WW.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(OW), OW._lateAnimationHolders || (OW._lateAnimationHolders = {}), OW._lateAnimationHolders[WW.targetPath] || (OW._lateAnimationHolders[WW.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: iW
        }), WW.isAdditive ? (OW._lateAnimationHolders[WW.targetPath].additiveAnimations.push(WW), OW._lateAnimationHolders[WW.targetPath].totalAdditiveWeight += WW.weight) : (OW._lateAnimationHolders[WW.targetPath].animations.push(WW), OW._lateAnimationHolders[WW.targetPath].totalWeight += WW.weight)
      }
      _setValue(WW, iW, OW, mW, EW) {
        const PW = this._scene._animationWrites,
          LW = this._scene._animationWriteCount++;
        let cW = PW[LW];
        if (cW || (cW = PW[LW] = {
            runtimeAnimation: this,
            target: WW,
            weight: mW,
            additive: !1,
            blendingFactor: 1,
            Yj: !1
          }), cW.runtimeAnimation = this, cW.target = WW, cW.weight = mW, cW.additive = this.isAdditive, cW.Yj = !1, this._currentActiveTarget = iW, this._weight = mW, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const WW = iW[this._targetPath];
            WW.clone ? this._originalBlendValue = WW.clone() : this._originalBlendValue = WW
          }
          this._originalBlendValue.m ? TW.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? NW.d.DecomposeLerpToRef(this._originalBlendValue, OW, this._blendingFactor, this._currentValue) : this._currentValue = NW.d.DecomposeLerp(this._originalBlendValue, OW, this._blendingFactor) : this._currentValue ? NW.d.LerpToRef(this._originalBlendValue, OW, this._blendingFactor, this._currentValue) : this._currentValue = NW.d.Lerp(this._originalBlendValue, OW, this._blendingFactor) : this._currentValue = TW.d._UniversalLerp(this._originalBlendValue, OW, this._blendingFactor);
          const mW = WW && WW.animationPropertiesOverride ? WW.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          cW.blendingFactor = this._blendingFactor, this._blendingFactor += mW
        } else cW.blendingFactor = 1, this._currentValue ? this._currentValue.HJ ? this._currentValue.HJ(OW) : this._currentValue = OW : this._currentValue = OW?.clone ? OW.clone() : OW; - 1 !== mW ? this._registerTargetForLateAnimationBinding(this, this._originalValue[EW]) : this._animationState.sO === TW.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[EW], iW[this._targetPath]) : iW[this._targetPath] = this._originalValue[EW] + this._currentValue : iW[this._targetPath] = this._currentValue, WW.xOW && WW.xOW(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.HZ && this.HZ.animationPropertiesOverride) {
          return "MorphTarget" === this.HZ.getClassName?.() && null == this.HZ._animationPropertiesOverride ? this._animation.sO : this.HZ.animationPropertiesOverride.sO
        }
        return this._animation.sO
      }
      goToFrame(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const OW = this._animation.getKeys();
        WW < OW[0].frame ? WW = OW[0].frame : WW > OW[OW.length - 1].frame && (WW = OW[OW.length - 1].frame);
        const mW = this._events;
        if (mW.length)
          for (let NW = 0; NW < mW.length; NW++) mW[NW].onlyOnce || (mW[NW].isDone = mW[NW].frame < WW);
        this._currentFrame = WW;
        const EW = this._animation._interpolate(WW, this._animationState);
        this.setValue(EW, iW)
      }
      _prepareForSpeedRatioChange(WW) {
        const iW = this._previousElapsedTime * (this._animation.framePerSecond * WW) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - iW
      }
      animate(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const PW = this._animation,
          LW = PW.targetPropertyPath;
        if (!LW || LW.length < 1) return this._stopped = !0, !1;
        let cW, wW = !0;
        const tW = this._events;
        let ZW;
        if (this._coreRuntimeAnimation) ZW = OW - iW, cW = this._coreRuntimeAnimation.currentFrame, this._currentFrame = cW, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let NW;
          (iW < this._minFrame || iW > this._maxFrame) && (iW = this._minFrame), (OW < this._minFrame || OW > this._maxFrame) && (OW = this._maxFrame), ZW = OW - iW;
          let LW = WW * (PW.framePerSecond * EW) / 1e3 + this._absoluteFrameOffset,
            xW = 0,
            lW = !1;
          const AW = mW && this._animationState.sO === TW.d.ANIMATIONLOOPMODE_YOYO;
          if (AW) {
            const WW = (LW - iW) / ZW,
              OW = Math.sin(WW * Math.PI);
            LW = Math.abs(OW) * ZW + iW;
            const mW = OW >= 0 ? 1 : -1;
            this._yoyoDirection !== mW && (lW = !0), this._yoyoDirection = mW
          }
          if (this._previousElapsedTime = WW, this._previousAbsoluteFrame = LW, !mW && OW >= iW && (LW >= ZW && EW > 0 || LW <= 0 && EW < 0)) wW = !1, xW = PW.evaluate(OW);
          else if (!mW && iW >= OW && (LW <= ZW && EW < 0 || LW >= 0 && EW > 0)) wW = !1, xW = PW.evaluate(iW);
          else if (this._animationState.sO !== TW.d.ANIMATIONLOOPMODE_CYCLE) {
            const WW = OW.toString() + iW.toString();
            if (!this._offsetsCache[WW]) {
              this._animationState.repeatCount = 0, this._animationState.sO = TW.d.ANIMATIONLOOPMODE_CYCLE;
              const mW = PW._interpolate(iW, this._animationState),
                EW = PW._interpolate(OW, this._animationState);
              switch (this._animationState.sO = this._getCorrectLoopMode(), PW.dataType) {
                case TW.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[WW] = EW - mW;
                  break;
                case TW.d.ANIMATIONTYPE_QUATERNION:
                case TW.d.ANIMATIONTYPE_VECTOR3:
                case TW.d.ANIMATIONTYPE_VECTOR2:
                case TW.d.ANIMATIONTYPE_SIZE:
                case TW.d.ANIMATIONTYPE_COLOR3:
                case TW.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[WW] = EW.subtract(mW)
              }
              this._highLimitsCache[WW] = EW
            }
            xW = this._highLimitsCache[WW], NW = this._offsetsCache[WW]
          }
          if (void 0 === NW) switch (PW.dataType) {
            case TW.d.ANIMATIONTYPE_FLOAT:
              NW = 0;
              break;
            case TW.d.ANIMATIONTYPE_QUATERNION:
              NW = TW.o;
              break;
            case TW.d.ANIMATIONTYPE_VECTOR3:
              NW = TW.y;
              break;
            case TW.d.ANIMATIONTYPE_VECTOR2:
              NW = TW.v;
              break;
            case TW.d.ANIMATIONTYPE_SIZE:
              NW = TW.r;
              break;
            case TW.d.ANIMATIONTYPE_COLOR3:
              NW = TW.i;
              break;
            case TW.d.ANIMATIONTYPE_COLOR4:
              NW = TW.l
          }
          const bW = this._host ? this._host.syncRoot : null;
          let jW, UW = this._playbackFrames,
            kW = !1;
          if (bW) {
            const WW = bW.toFrame - bW.fromFrame,
              OW = bW.masterFrame,
              mW = (OW - bW.fromFrame) / WW;
            cW = iW + ZW * mW;
            const EW = bW.getAnimations()[0];
            if (EW && 0 !== WW) {
              const WW = ZW * mW,
                iW = EW._playbackTo - EW._playbackFrom;
              if (0 !== iW && EW._playbackFrom <= bW.fromFrame && EW._playbackTo >= bW.toFrame) {
                UW = ZW * Math.round((EW._playbackFrames - (EW._currentFrame - EW._playbackFrom)) / iW) + WW
              } else kW = (OW - this._playbackSyncMasterFrame) * (EW._playbackFrames - this._playbackSyncMasterPlayed) < 0, UW = WW;
              kW = kW || EW._playbackJumped, this._playbackSyncMasterPlayed = EW._playbackFrames, this._playbackSyncMasterFrame = OW
            }
          } else cW = LW > 0 && iW > OW || LW < 0 && iW < OW ? wW && 0 !== ZW ? OW + LW % ZW : iW : wW && 0 !== ZW ? iW + LW % ZW : OW;
          if (!AW && (EW > 0 && this.currentFrame > cW || EW < 0 && this.currentFrame < cW) || AW && lW) {
            this._onLoop();
            for (let WW = 0; WW < tW.length; WW++) tW[WW].onlyOnce || (tW[WW].isDone = !1);
            this._animationState.key = EW > 0 ? 0 : PW.getKeys().length - 1
          }
          if (this._currentFrame = cW, this._animationState.repeatCount = 0 === ZW ? 0 : LW / ZW | 0, this._animationState.highLimitValue = xW, this._animationState.offsetValue = NW, this._playbackFrom = iW, this._playbackTo = OW, this._playbackJumped = kW, this._playbackSyncRoot = bW, bW) jW = UW;
          else if (wW) jW = AW ? cW === iW && LW === OW ? ZW : cW - iW : LW;
          else {
            const WW = 0 !== ZW ? Math.floor(this._playbackFrames / ZW) : 0;
            jW = (cW === OW ? WW + 1 : WW) * ZW
          }
          this._playbackFrames = jW, this._playbackProgress = this._animationState.sO === TW.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? ZW : jW
        }
        const xW = PW._interpolate(cW, this._animationState);
        if (this.setValue(xW, NW), tW.length)
          for (let lW = 0; lW < tW.length; lW++)
            if (ZW >= 0 && cW >= tW[lW].frame && tW[lW].frame >= iW || ZW < 0 && cW <= tW[lW].frame && tW[lW].frame <= iW) {
              const WW = tW[lW];
              WW.isDone || (WW.onlyOnce && (tW.splice(lW, 1), lW--), WW.isDone = !0, WW.action(cW))
            } return wW || (this._stopped = !0), wW
      }
    }
    var hW = OW(41431);
    class HW {
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
        for (let iW = 0; iW < this._runtimeAnimations.length; iW++) {
          this._runtimeAnimations[iW]._prepareForSpeedRatioChange(WW)
        }
        this._speedRatio = WW, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          LW = arguments.length > 6 ? arguments[6] : void 0,
          cW = arguments.length > 7 ? arguments[7] : void 0,
          wW = arguments.length > 8 ? arguments[8] : void 0,
          tW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          ZW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = iW, this.fromFrame = OW, this.toFrame = mW, this.loopAnimation = NW, this.onAnimationEnd = LW, this.onAnimationLoop = wW, this.isAdditive = tW, this.playOrder = ZW, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.JZ = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new EW.e, this.onAnimationLoopObservable = new EW.e, this._scene = WW, cW && this.appendAnimations(iW, cW), this._speedRatio = PW, WW._activeAnimatables.push(this)
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
      appendAnimations(WW, iW) {
        for (let OW = 0; OW < iW.length; OW++) {
          const mW = iW[OW],
            EW = new JW(WW, mW, this._scene, this);
          EW._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(EW)
        }
      }
      getAnimationByTargetProperty(WW) {
        const iW = this._runtimeAnimations;
        for (let OW = 0; OW < iW.length; OW++)
          if (iW[OW].animation.targetProperty === WW) return iW[OW].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(WW) {
        const iW = this._runtimeAnimations;
        for (let OW = 0; OW < iW.length; OW++)
          if (iW[OW].animation.targetProperty === WW) return iW[OW];
        return null
      }
      reset() {
        const WW = this._runtimeAnimations;
        for (let iW = 0; iW < WW.length; iW++) WW[iW].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(WW) {
        const iW = this._runtimeAnimations;
        for (let OW = 0; OW < iW.length; OW++) iW[OW].animation.enableBlending = !0, iW[OW].animation.blendingSpeed = WW
      }
      disableBlending() {
        const WW = this._runtimeAnimations;
        for (let iW = 0; iW < WW.length; iW++) WW[iW].animation.enableBlending = !1
      }
      goToFrame(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this._runtimeAnimations;
        if (OW[0]) {
          const iW = OW[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? OW[0].currentFrame;
          const mW = 0 === this.speedRatio ? 0 : (WW - this._frameToSyncFromJump) / iW * 1e3 / this.speedRatio;
          this._manualJumpDelay = -mW
        }
        for (let mW = 0; mW < OW.length; mW++) OW[mW].goToFrame(WW, iW ? this._weight : -1);
        this._goToFrame = WW
      }
      get paused() {
        return this.JZ
      }
      pause() {
        this.JZ || (this.JZ = !0)
      }
      restart() {
        this.JZ = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (WW || iW) {
          const EW = this._scene._activeAnimatables.indexOf(this);
          if (EW > -1) {
            const NW = this._runtimeAnimations;
            for (let OW = NW.length - 1; OW >= 0; OW--) {
              const mW = NW[OW];
              WW && mW.animation.name != WW || (iW && !iW(mW.target) || (mW.dispose(), NW.splice(OW, 1)))
            }
            0 == NW.length && (OW || this._scene._activeAnimatables.splice(EW, 1), mW || this._raiseOnAnimationEnd())
          }
        } else {
          const WW = this._scene._activeAnimatables.indexOf(this);
          if (WW > -1) {
            OW || this._scene._activeAnimatables.splice(WW, 1);
            const iW = this._runtimeAnimations;
            for (let WW = 0; WW < iW.length; WW++) iW[WW].dispose();
            this._runtimeAnimations.length = 0, mW || this._raiseOnAnimationEnd()
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
        if (this.JZ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = WW), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = WW, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += WW - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !HW.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let iW = !1;
        const OW = this._runtimeAnimations;
        let mW;
        for (mW = 0; mW < OW.length; mW++) {
          const EW = OW[mW].animate(WW - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          iW = iW || EW
        }
        if (this.animationStarted = iW, !iW) {
          if (this.disposeOnEnd)
            for (mW = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(mW, 1), mW = 0; mW < OW.length; mW++) OW[mW].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return iW
      }
    }

    function nW(WW) {
      if (0 === WW.totalWeight && 0 === WW.totalAdditiveWeight) return WW.originalValue;
      let iW = 1;
      const OW = NW.l.fA[0],
        mW = NW.l.fA[1],
        EW = NW.l.Quaternion[0];
      let PW = 0;
      const LW = WW.animations[0],
        cW = WW.originalValue;
      let wW, tW = !1;
      if (WW.totalWeight < 1) wW = 1 - WW.totalWeight, cW.decompose(mW, EW, OW);
      else {
        if (PW = 1, iW = WW.totalWeight, wW = LW.weight / iW, 1 == wW) {
          if (!WW.totalAdditiveWeight) return LW.currentValue;
          tW = !0
        }
        LW.currentValue.decompose(mW, EW, OW)
      }
      if (!tW) {
        mW.scaleInPlace(wW), OW.scaleInPlace(wW), EW.scaleInPlace(wW);
        for (let LW = PW; LW < WW.animations.length; LW++) {
          const PW = WW.animations[LW];
          if (0 === PW.weight) continue;
          wW = PW.weight / iW;
          const cW = NW.l.fA[2],
            tW = NW.l.fA[3],
            ZW = NW.l.Quaternion[1];
          PW.currentValue.decompose(tW, ZW, cW), tW.scaleAndAddToRef(wW, mW), ZW.scaleAndAddToRef(NW.g.Dot(EW, ZW) > 0 ? wW : -wW, EW), cW.scaleAndAddToRef(wW, OW)
        }
        EW.normalize()
      }
      for (let xW = 0; xW < WW.additiveAnimations.length; xW++) {
        const iW = WW.additiveAnimations[xW];
        if (0 === iW.weight) continue;
        const PW = NW.l.fA[2],
          LW = NW.l.fA[3],
          cW = NW.l.Quaternion[1];
        iW.currentValue.decompose(LW, cW, PW), LW.multiplyToRef(mW, LW), NW.q.LerpToRef(mW, LW, iW.weight, mW), EW.multiplyToRef(cW, cW), NW.g.SlerpToRef(EW, cW, iW.weight, EW), PW.scaleAndAddToRef(iW.weight, OW)
      }
      const ZW = LW ? LW._animationState.workValue : NW.l.Matrix[0].clone();
      return NW.d.ComposeToRef(mW, EW, OW, ZW), ZW
    }

    function uW(WW, iW) {
      if (0 === WW.totalWeight && 0 === WW.totalAdditiveWeight) return iW;
      const OW = WW.animations[0],
        mW = WW.originalValue;
      let EW = iW;
      if (0 === WW.totalWeight && WW.totalAdditiveWeight > 0) EW.HJ(mW);
      else if (1 === WW.animations.length) {
        if (NW.g.SlerpToRef(mW, OW.currentValue, Math.min(1, WW.totalWeight), EW), 0 === WW.totalAdditiveWeight) return EW
      } else if (WW.animations.length > 1) {
        let OW, PW, LW = 1;
        if (WW.totalWeight < 1) {
          const iW = 1 - WW.totalWeight;
          OW = [], PW = [], OW.push(mW), PW.push(iW)
        } else {
          if (2 === WW.animations.length && (NW.g.SlerpToRef(WW.animations[0].currentValue, WW.animations[1].currentValue, WW.animations[1].weight / WW.totalWeight, iW), 0 === WW.totalAdditiveWeight)) return iW;
          OW = [], PW = [], LW = WW.totalWeight
        }
        for (let iW = 0; iW < WW.animations.length; iW++) {
          const mW = WW.animations[iW];
          OW.push(mW.currentValue), PW.push(mW.weight / LW)
        }
        let cW = 0;
        for (let WW = 0; WW < OW.length;) WW ? (cW += PW[WW], NW.g.SlerpToRef(EW, OW[WW], PW[WW] / cW, EW), WW++) : (NW.g.SlerpToRef(OW[WW], OW[WW + 1], PW[WW + 1] / (PW[WW] + PW[WW + 1]), iW), EW = iW, cW = PW[WW] + PW[WW + 1], WW += 2)
      }
      for (let PW = 0; PW < WW.additiveAnimations.length; PW++) {
        const iW = WW.additiveAnimations[PW];
        0 !== iW.weight && (EW.multiplyToRef(iW.currentValue, NW.l.Quaternion[0]), NW.g.SlerpToRef(EW, NW.l.Quaternion[0], iW.weight, EW))
      }
      return EW
    }

    function oW(WW, iW) {
      iW && (iW.prototype.copyAnimationRange = function(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new TW.d(this.name, "_matrix", WW.animations[0].framePerSecond, TW.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const NW = WW.animations[0].getRange(iW);
        if (!NW) return !1;
        const PW = NW.from,
          LW = NW.to,
          cW = WW.animations[0].getKeys(),
          wW = WW.length,
          tW = WW.getParent(),
          ZW = this.getParent(),
          xW = mW && tW && wW && this.length && wW !== this.length,
          lW = xW && ZW && tW ? ZW.length / tW.length : 1,
          AW = mW && !ZW && EW && (1 !== EW.x || 1 !== EW.y || 1 !== EW.z),
          bW = this.animations[0].getKeys();
        let jW, UW, kW;
        for (let sW = 0, MW = cW.length; sW < MW; sW++) jW = cW[sW], jW.frame >= PW && jW.frame <= LW && (mW ? (kW = jW.value.clone(), xW ? (UW = kW.getTranslation(), kW.setTranslation(UW.scaleInPlace(lW))) : AW && EW ? (UW = kW.getTranslation(), kW.setTranslation(UW.multiplyInPlace(EW))) : kW = jW.value) : kW = jW.value, bW.push({
          frame: jW.frame + OW,
          value: kW
        }));
        return this.animations[0].createRange(iW, PW + OW, LW + OW), !0
      }), WW && (WW.prototype._animate = function(WW) {
        const iW = this._animationWrites,
          OW = this._animationWriteCount;
        let mW = 0;
        for (let NW = this._animationStepWriteCount; NW < OW; NW++) {
          const WW = iW[NW];
          WW.Yj && -1 === WW.weight || (WW.Yj = !0, iW[NW] = iW[mW], iW[mW] = WW, mW++)
        }
        for (let NW = mW; NW < OW; NW++) {
          const WW = iW[NW];
          WW.runtimeAnimation = null, WW.target = null
        }
        if (this._animationWriteCount = mW, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const EW = hW.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = EW
        }
        this.deltaTime = void 0 !== WW ? WW : this.useConstantAnimationDeltaTime ? 16 : (EW - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = EW;
        const PW = this._activeAnimatables;
        if (0 === PW.length) return;
        this._animationTime += this.deltaTime;
        const LW = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let NW = 0; NW < PW.length; NW++) {
          const WW = PW[NW];
          !WW._animate(LW) && WW.disposeOnEnd && NW--
        }! function(WW) {
          if (WW._registeredForLateAnimationBindings.length) {
            for (let iW = 0; iW < WW._registeredForLateAnimationBindings.length; iW++) {
              const OW = WW._registeredForLateAnimationBindings.data[iW];
              for (const WW in OW._lateAnimationHolders) {
                const iW = OW._lateAnimationHolders[WW],
                  mW = iW.animations[0],
                  EW = iW.originalValue;
                if (void 0 === EW || null === EW) continue;
                const PW = TW.d.AllowMatrixDecomposeForInterpolation && EW.m;
                let LW = OW[WW];
                if (PW) LW = nW(iW);
                else if (void 0 !== EW.w) LW = uW(iW, LW || NW.g.Identity());
                else {
                  let WW = 0,
                    OW = 1;
                  const NW = mW && mW._animationState.sO === TW.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (iW.totalWeight < 1) LW = NW ? EW.clone ? EW.clone() : EW : mW && EW.scale ? EW.scale(1 - iW.totalWeight) : mW ? EW * (1 - iW.totalWeight) : EW.clone ? EW.clone() : EW;
                  else if (mW) {
                    OW = iW.totalWeight;
                    const PW = mW.weight / OW;
                    LW = 1 !== PW ? mW.currentValue.scale ? mW.currentValue.scale(PW) : mW.currentValue * PW : (iW.animations.length > 1 || iW.additiveAnimations.length > 0) && mW.currentValue.clone ? mW.currentValue.clone() : mW.currentValue, NW && (LW.addToRef ? LW.addToRef(EW, LW) : LW += EW), WW = 1
                  }
                  for (let mW = WW; mW < iW.animations.length; mW++) {
                    const WW = iW.animations[mW],
                      EW = WW.weight / OW;
                    EW && (WW.currentValue.scaleAndAddToRef ? WW.currentValue.scaleAndAddToRef(EW, LW) : LW += WW.currentValue * EW)
                  }
                  for (let mW = 0; mW < iW.additiveAnimations.length; mW++) {
                    const WW = iW.additiveAnimations[mW],
                      OW = WW.weight;
                    OW && (WW.currentValue.scaleAndAddToRef ? WW.currentValue.scaleAndAddToRef(OW, LW) : LW += WW.currentValue * OW)
                  }
                }
                OW[WW] = LW
              }
              OW._lateAnimationHolders = {}
            }
            WW._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, WW.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((WW, iW) => WW.playOrder - iW.playOrder))
      }, WW.prototype.beginWeightedAnimation = function(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 ? arguments[7] : void 0,
          cW = arguments.length > 8 ? arguments[8] : void 0,
          wW = arguments.length > 9 ? arguments[9] : void 0,
          tW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ZW = this.beginAnimation(WW, iW, OW, EW, NW, PW, LW, !1, cW, wW, tW);
        return ZW.weight = mW, ZW
      }, WW.prototype.beginAnimation = function(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          NW = arguments.length > 5 ? arguments[5] : void 0,
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cW = arguments.length > 8 ? arguments[8] : void 0,
          wW = arguments.length > 9 ? arguments[9] : void 0,
          tW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (EW < 0) {
          const WW = iW;
          iW = OW, OW = WW, EW = -EW
        }
        iW > OW && (EW = -EW), LW && this.stopAnimation(WW, void 0, cW), PW || (PW = new HW(this, WW, iW, OW, mW, EW, NW, void 0, wW, tW));
        const ZW = !cW || cW(WW);
        if (WW.animations && ZW && PW.appendAnimations(WW, WW.animations), WW.getAnimatables) {
          const tW = WW.getAnimatables();
          for (let WW = 0; WW < tW.length; WW++) this.beginAnimation(tW[WW], iW, OW, mW, EW, NW, PW, LW, cW, wW)
        }
        return PW.reset(), PW
      }, WW.prototype.beginHierarchyAnimation = function(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 ? arguments[7] : void 0,
          cW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          wW = arguments.length > 9 ? arguments[9] : void 0,
          tW = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const ZW = WW.getDescendants(iW),
          xW = [];
        xW.push(this.beginAnimation(WW, OW, mW, EW, NW, PW, LW, cW, wW, void 0, tW));
        for (const lW of ZW) xW.push(this.beginAnimation(lW, OW, mW, EW, NW, PW, LW, cW, wW, void 0, tW));
        return xW
      }, WW.prototype.beginDirectAnimation = function(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (NW < 0) {
          const WW = OW;
          OW = mW, mW = WW, NW = -NW
        }
        OW > mW && (NW = -NW);
        return new HW(this, WW, OW, mW, EW, NW, arguments.length > 6 ? arguments[6] : void 0, iW, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, WW.prototype.beginDirectHierarchyAnimation = function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        let wW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const tW = WW.getDescendants(iW),
          ZW = [];
        ZW.push(this.beginDirectAnimation(WW, OW, mW, EW, NW, PW, LW, cW, wW));
        for (const xW of tW) ZW.push(this.beginDirectAnimation(xW, OW, mW, EW, NW, PW, LW, cW, wW));
        return ZW
      }, WW.prototype.getAnimatableByTarget = function(WW) {
        for (let iW = 0; iW < this._activeAnimatables.length; iW++)
          if (this._activeAnimatables[iW].target === WW) return this._activeAnimatables[iW];
        return null
      }, WW.prototype.getAllAnimatablesByTarget = function(WW) {
        const iW = [];
        for (let OW = 0; OW < this._activeAnimatables.length; OW++) this._activeAnimatables[OW].target === WW && iW.push(this._activeAnimatables[OW]);
        return iW
      }, WW.prototype.stopAnimation = function(WW, iW, OW) {
        const mW = this.getAllAnimatablesByTarget(WW);
        for (const EW of mW) EW.stop(iW, OW)
      }, WW.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let WW = 0; WW < this._activeAnimatables.length; WW++) this._activeAnimatables[WW].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const WW of this.animationGroups) WW.stop()
      })
    }
    HW.ProcessPausedAnimatables = !1;
    var dW, eW = OW(38253),
      vW = OW(41732),
      gW = OW(41415);
    class DW extends vW.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(WW) {
        (WW.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.HJ(WW), this._markAsDirtyAndDecompose())
      }
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(WW, iW.bD(), !1), this.name = WW, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = iW, this._localMatrix = mW?.clone() ?? NW.d.Identity(), this._restMatrix = EW ?? this._localMatrix.clone(), this._bindMatrix = PW ?? this._localMatrix.clone(), this._index = LW, this._absoluteMatrix = new NW.d, this._absoluteBindMatrix = new NW.d, this._absoluteInverseBindMatrix = new NW.d, this._finalMatrix = new NW.d, iW.bones.push(this), this.setParent(OW, !1), this._updateAbsoluteBindMatrices()
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
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== WW) {
          if (this.parent) {
            const WW = this.parent.children.indexOf(this); - 1 !== WW && this.parent.children.splice(WW, 1)
          }
          this._parentNode = WW, this.parent && this.parent.children.push(this), iW && this._updateAbsoluteBindMatrices(), this.xOW()
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
        this._restMatrix.HJ(WW)
      }
      setRestPose(WW) {
        this.setRestMatrix(WW)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(WW) {
        this.tWW(WW)
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
          const WW = NW.l.fA[0],
            iW = NW.l.Quaternion[0],
            OW = NW.l.fA[1];
          this.getRestMatrix().decompose(WW, iW, OW), this._linkedTransformNode.position.HJ(OW), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? NW.g.Identity(), this._linkedTransformNode.rotationQuaternion.HJ(iW), this._linkedTransformNode.YZ.HJ(WW)
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
        return this._decompose(), this.JiW
      }
      set position(WW) {
        this._decompose(), this.JiW.HJ(WW), this._markAsDirtyAndCompose()
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
      get YZ() {
        return this.getScale()
      }
      set YZ(WW) {
        this.setScale(WW)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = NW.q.Zero(), this._localRotation = NW.g.Zero(), this.JiW = NW.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.JiW))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, NW.d.ComposeToRef(this._localScaling, this._localRotation, this.JiW, this._localMatrix)) : this._needToCompose = !1)
      }
      tWW(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.HJ(WW), iW && this._updateAbsoluteBindMatrices(), OW ? this._matrix = WW : this.xOW()
      }
      _updateAbsoluteBindMatrices(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (WW || (WW = this._bindMatrix), this.parent ? WW.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.HJ(WW), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), iW)
          for (let OW = 0; OW < this.children.length; OW++) this.children[OW]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      xOW() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.xOW(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.xOW(), this._needToDecompose = !0
      }
      _updatePosition(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const EW = this.getLocalMatrix();
        if (0 == iW) mW ? (EW.addAtIndex(12, WW.x), EW.addAtIndex(13, WW.y), EW.addAtIndex(14, WW.z)) : EW.setTranslationFromFloats(WW.x, WW.y, WW.z);
        else {
          const iW = DW._TmpMats[0],
            PW = DW._TmpVecs[0];
          this.parent ? (iW.HJ(this.parent.getAbsoluteMatrix()), OW && iW.multiplyToRef(OW.getWorldMatrix(), iW)) : NW.d.IdentityToRef(iW), mW && iW.setTranslationFromFloats(0, 0, 0), iW.invert(), NW.q.TransformCoordinatesToRef(WW, iW, PW), mW ? (EW.addAtIndex(12, PW.x), EW.addAtIndex(13, PW.y), EW.addAtIndex(14, PW.z)) : EW.setTranslationFromFloats(PW.x, PW.y, PW.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(WW, iW, OW, !0)
      }
      setPosition(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(WW, iW, OW, !1)
      }
      setAbsolutePosition(WW, iW) {
        this.setPosition(WW, 1, iW)
      }
      scale(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const EW = this.getLocalMatrix(),
          PW = DW._TmpMats[0];
        NW.d.ScalingToRef(WW, iW, OW, PW), PW.multiplyToRef(EW, EW), PW.invert();
        for (const NW of this.children) {
          const mW = NW.getLocalMatrix();
          mW.multiplyToRef(PW, mW), mW.multiplyAtIndex(12, WW), mW.multiplyAtIndex(13, iW), mW.multiplyAtIndex(14, OW), NW._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), mW)
          for (const NW of this.children) NW.scale(WW, iW, OW, mW)
      }
      setScale(WW) {
        this._decompose(), this._localScaling.HJ(WW), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(WW) {
        this._decompose(), WW.HJ(this._localScaling)
      }
      setYawPitchRoll(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === mW) {
          const PW = DW._TmpQuat;
          return NW.g.RotationYawPitchRollToRef(WW, iW, OW, PW), void this.setRotationQuaternion(PW, mW, EW)
        }
        const PW = DW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(PW, EW)) return;
        const LW = DW._TmpMats[1];
        NW.d.RotationYawPitchRollToRef(WW, iW, OW, LW), PW.multiplyToRef(LW, LW), this._rotateWithMatrix(LW, mW, EW)
      }
      rotate(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        const EW = DW._TmpMats[0];
        EW.setTranslationFromFloats(0, 0, 0), NW.d.RotationAxisToRef(WW, iW, EW), this._rotateWithMatrix(EW, OW, mW)
      }
      setAxisAngle(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === OW) {
          const EW = DW._TmpQuat;
          return NW.g.RotationAxisToRef(WW, iW, EW), void this.setRotationQuaternion(EW, OW, mW)
        }
        const EW = DW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(EW, mW)) return;
        const PW = DW._TmpMats[1];
        NW.d.RotationAxisToRef(WW, iW, PW), EW.multiplyToRef(PW, PW), this._rotateWithMatrix(PW, OW, mW)
      }
      setRotation(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(WW.y, WW.x, WW.z, iW, OW)
      }
      setRotationQuaternion(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === iW) return this._decompose(), this._localRotation.HJ(WW), void this._markAsDirtyAndCompose();
        const mW = DW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(mW, OW)) return;
        const EW = DW._TmpMats[1];
        NW.d.FromQuaternionToRef(WW, EW), mW.multiplyToRef(EW, EW), this._rotateWithMatrix(EW, iW, OW)
      }
      setRotationMatrix(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === iW) {
          const mW = DW._TmpQuat;
          return NW.g.FromRotationMatrixToRef(WW, mW), void this.setRotationQuaternion(mW, iW, OW)
        }
        const mW = DW._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(mW, OW)) return;
        const EW = DW._TmpMats[1];
        EW.HJ(WW), mW.multiplyToRef(WW, EW), this._rotateWithMatrix(EW, iW, OW)
      }
      _rotateWithMatrix(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = this.getLocalMatrix(),
          EW = mW.m[12],
          NW = mW.m[13],
          PW = mW.m[14],
          LW = this.getParent(),
          cW = DW._TmpMats[3],
          wW = DW._TmpMats[4];
        LW && 1 == iW ? (OW ? (cW.HJ(OW.getWorldMatrix()), LW.getAbsoluteMatrix().multiplyToRef(cW, cW)) : cW.HJ(LW.getAbsoluteMatrix()), wW.HJ(cW), wW.invert(), mW.multiplyToRef(cW, mW), mW.multiplyToRef(WW, mW), mW.multiplyToRef(wW, mW)) : 1 == iW && OW ? (cW.HJ(OW.getWorldMatrix()), wW.HJ(cW), wW.invert(), mW.multiplyToRef(cW, mW), mW.multiplyToRef(WW, mW), mW.multiplyToRef(wW, mW)) : mW.multiplyToRef(WW, mW), mW.setTranslationFromFloats(EW, NW, PW), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(WW, iW) {
        const OW = DW._TmpMats[2];
        return WW.HJ(this.getAbsoluteMatrix()), iW ? (WW.multiplyToRef(iW.getWorldMatrix(), WW), NW.d.ScalingToRef(iW.YZ.x, iW.YZ.y, iW.YZ.z, OW)) : NW.d.IdentityToRef(OW), WW.invert(), !isNaN(WW.m[0]) && (OW.multiplyAtIndex(0, this._scalingDeterminant), WW.multiplyToRef(OW, WW), !0)
      }
      Vk() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = NW.q.Zero();
        return this.getPositionToRef(WW, iW, OW), OW
      }
      getPositionToRef() {
        let WW = arguments.length > 1 ? arguments[1] : void 0,
          iW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const WW = this.getLocalMatrix();
          iW.x = WW.m[12], iW.y = WW.m[13], iW.z = WW.m[14]
        } else {
          const OW = DW._TmpMats[0].HJ(this.getAbsoluteMatrix());
          WW && OW.multiplyToRef(WW.getWorldMatrix(), OW), iW.x = OW.m[12], iW.y = OW.m[13], iW.z = OW.m[14]
        }
      }
      getAbsolutePosition() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const iW = NW.q.Zero();
        return this.getPositionToRef(1, WW, iW), iW
      }
      getAbsolutePositionToRef(WW, iW) {
        this.getPositionToRef(1, WW, iW)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.HJ(this._localMatrix);
          const WW = this._skeleton.getPoseMatrix();
          WW && this._absoluteMatrix.multiplyToRef(WW, this._absoluteMatrix)
        }
        const WW = this.children,
          iW = WW.length;
        for (let OW = 0; OW < iW; OW++) WW[OW].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      uF(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = NW.q.Zero();
        return this.getDirectionToRef(WW, iW, OW), OW
      }
      getDirectionToRef(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = DW._TmpMats[0].HJ(this.getAbsoluteMatrix());
        iW && mW.multiplyToRef(iW.getWorldMatrix(), mW), NW.q.TransformNormalToRef(WW, mW, OW), OW.normalize()
      }
      getRotation() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = NW.q.Zero();
        return this.getRotationToRef(WW, iW, OW), OW
      }
      getRotationToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = DW._TmpQuat;
        this.getRotationQuaternionToRef(WW, iW, mW), mW.toEulerAnglesToRef(OW)
      }
      getRotationQuaternion() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = NW.g.Identity();
        return this.getRotationQuaternionToRef(WW, iW, OW), OW
      }
      getRotationQuaternionToRef() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), iW.HJ(this._localRotation);
        else {
          const OW = DW._TmpMats[0],
            mW = this.getAbsoluteMatrix();
          WW ? mW.multiplyToRef(WW.getWorldMatrix(), OW) : OW.HJ(mW), OW.multiplyAtIndex(0, this._scalingDeterminant), OW.multiplyAtIndex(1, this._scalingDeterminant), OW.multiplyAtIndex(2, this._scalingDeterminant), OW.decompose(void 0, iW, void 0)
        }
      }
      getRotationMatrix() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 ? arguments[1] : void 0;
        const OW = NW.d.Identity();
        return this.getRotationMatrixToRef(WW, iW, OW), OW
      }
      getRotationMatrixToRef() {
        let WW = arguments.length > 1 ? arguments[1] : void 0,
          iW = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(iW);
        else {
          const OW = DW._TmpMats[0],
            mW = this.getAbsoluteMatrix();
          WW ? mW.multiplyToRef(WW.getWorldMatrix(), OW) : OW.HJ(mW), OW.multiplyAtIndex(0, this._scalingDeterminant), OW.multiplyAtIndex(1, this._scalingDeterminant), OW.multiplyAtIndex(2, this._scalingDeterminant), OW.getRotationMatrixToRef(iW)
        }
      }
      getAbsolutePositionFromLocal(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = NW.q.Zero();
        return this.getAbsolutePositionFromLocalToRef(WW, iW, OW), OW
      }
      getAbsolutePositionFromLocalToRef(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = DW._TmpMats[0].HJ(this.getAbsoluteMatrix());
        iW && mW.multiplyToRef(iW.getWorldMatrix(), mW), NW.q.TransformCoordinatesToRef(WW, mW, OW)
      }
      getLocalPositionFromAbsolute(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const OW = NW.q.Zero();
        return this.getLocalPositionFromAbsoluteToRef(WW, iW, OW), OW
      }
      getLocalPositionFromAbsoluteToRef(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = DW._TmpMats[0].HJ(this.getAbsoluteMatrix());
        iW && mW.multiplyToRef(iW.getWorldMatrix(), mW), mW.invert(), NW.q.TransformCoordinatesToRef(WW, mW, OW)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const WW = this._skeleton.bones.indexOf(this);
        if (-1 !== WW && this._skeleton.bones.splice(WW, 1), this._parentNode && this._parentNode.children) {
          const WW = this._parentNode.children,
            iW = WW.indexOf(this); - 1 !== iW && WW.splice(iW, 1)
        }
        super.dispose()
      }
    }
    DW._TmpVecs = (0, eW.c)(2, NW.q.Zero), DW._TmpQuat = NW.g.Identity(), DW._TmpMats = (0, eW.c)(5, NW.d.Identity), (dW = DW.prototype).copyAnimationRange ?? (dW.copyAnimationRange = (0, gW.k)("Bone", "copyAnimationRange"));
    var VW = OW(41612);
    let pW = !1;
    var fW = OW(41481),
      CW = OW(41840),
      XW = OW(41853),
      BW = OW(41845),
      qW = OW(41644);

    function RW(WW, iW) {
      const OW = (0, lW.RandomRange)(0, 1);
      tW.d.LerpToRef(iW.color1, iW.color2, OW, WW.color)
    }

    function GW(WW, iW) {
      iW.colorDead.subtractToRef(WW.color, iW._colorDiff), iW._colorDiff.scaleToRef(1 / WW.lifeTime, WW.colorStep)
    }

    function IW(WW, iW) {
      WW._properties.currentColorGradient = iW._colorGradients[0], WW._properties.currentColorGradient.getColorToRef(WW.color), WW._properties.currentColor1.HJ(WW.color), iW._colorGradients.length > 1 ? iW._colorGradients[1].getColorToRef(WW._properties.currentColor2) : WW._properties.currentColor2.HJ(WW.color)
    }

    function aW(WW, iW) {
      const OW = iW._colorGradients;
      mW.m.GetCurrentGradient(iW._ratio, OW, ((iW, OW, mW) => {
        iW !== WW._properties.currentColorGradient && (WW._properties.currentColor1.HJ(WW._properties.currentColor2), OW.getColorToRef(WW._properties.currentColor2), WW._properties.currentColorGradient = iW), tW.d.LerpToRef(WW._properties.currentColor1, WW._properties.currentColor2, mW, WW.color), WW.color.a < 0 && (WW.color.a = 0)
      }))
    }

    function rW(WW, iW) {
      WW.colorStep.scaleToRef(iW._scaledUpdateSpeed, iW._scaledColorStep), WW.color.addInPlace(iW._scaledColorStep), WW.color.a < 0 && (WW.color.a = 0)
    }

    function zW(WW, iW) {
      mW.m.GetCurrentGradient(iW._ratio, iW._angularSpeedGradients, ((iW, OW, mW) => {
        iW !== WW._properties.currentAngularSpeedGradient && (WW._properties.currentAngularSpeed1 = WW._properties.currentAngularSpeed2, WW._properties.currentAngularSpeed2 = OW.getFactor(), WW._properties.currentAngularSpeedGradient = iW), WW.angularSpeed = (0, lW.Lerp)(WW._properties.currentAngularSpeed1, WW._properties.currentAngularSpeed2, mW)
      }))
    }

    function FW(WW, iW) {
      WW.angle += WW.angularSpeed * iW._scaledUpdateSpeed
    }

    function QW(WW, iW) {
      iW.particleEmitterType.startDirectionFunction(iW._emitterWorldMatrix, WW.direction, WW, iW.isLocal, iW._emitterInverseWorldMatrix)
    }

    function Wi(WW, iW) {
      iW.startDirectionFunction(iW._emitterWorldMatrix, WW.direction, WW, iW.isLocal)
    }

    function ii(WW, iW) {
      WW._properties.currentVelocityGradient = iW._velocityGradients[0], WW._properties.currentVelocity1 = WW._properties.currentVelocityGradient.getFactor(), iW._velocityGradients.length > 1 ? WW._properties.currentVelocity2 = iW._velocityGradients[1].getFactor() : WW._properties.currentVelocity2 = WW._properties.currentVelocity1
    }

    function Oi(WW, iW) {
      WW._properties.currentLimitVelocityGradient = iW._limitVelocityGradients[0], WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocityGradient.getFactor(), iW._limitVelocityGradients.length > 1 ? WW._properties.currentLimitVelocity2 = iW._limitVelocityGradients[1].getFactor() : WW._properties.currentLimitVelocity2 = WW._properties.currentLimitVelocity1
    }

    function mi(WW, iW) {
      mW.m.GetCurrentGradient(iW._ratio, iW._velocityGradients, ((iW, OW, mW) => {
        iW !== WW._properties.currentVelocityGradient && (WW._properties.currentVelocity1 = WW._properties.currentVelocity2, WW._properties.currentVelocity2 = OW.getFactor(), WW._properties.currentVelocityGradient = iW), WW._properties.directionScale *= (0, lW.Lerp)(WW._properties.currentVelocity1, WW._properties.currentVelocity2, mW)
      }))
    }

    function Ei(WW, iW) {
      mW.m.GetCurrentGradient(iW._ratio, iW._limitVelocityGradients, ((OW, mW, EW) => {
        OW !== WW._properties.currentLimitVelocityGradient && (WW._properties.currentLimitVelocity1 = WW._properties.currentLimitVelocity2, WW._properties.currentLimitVelocity2 = mW.getFactor(), WW._properties.currentLimitVelocityGradient = OW);
        const NW = (0, lW.Lerp)(WW._properties.currentLimitVelocity1, WW._properties.currentLimitVelocity2, EW);
        WW.direction.length() > NW && WW.direction.scaleInPlace(iW.limitVelocityDamping)
      }))
    }

    function Ni(WW) {
      WW.direction.scaleToRef(WW._properties.directionScale, WW._properties.scaledDirection)
    }

    function Pi(WW, iW) {
      iW.particleEmitterType.startPositionFunction(iW._emitterWorldMatrix, WW.position, WW, iW.isLocal)
    }

    function Li(WW, iW) {
      iW.startPositionFunction(iW._emitterWorldMatrix, WW.position, WW, iW.isLocal)
    }

    function ci(WW, iW) {
      WW._properties.localPosition ? WW._properties.localPosition.HJ(WW.position) : WW._properties.localPosition = WW.position.clone(), NW.q.TransformCoordinatesToRef(WW._properties.localPosition, iW._emitterWorldMatrix, WW.position)
    }

    function wi(WW, iW) {
      iW.isLocal && WW._properties.localPosition ? (WW._properties.localPosition.addInPlace(WW._properties.scaledDirection), NW.q.TransformCoordinatesToRef(WW._properties.localPosition, iW._emitterWorldMatrix, WW.position)) : WW.position.addInPlace(WW._properties.scaledDirection)
    }

    function ti(WW, iW) {
      WW._properties.currentDragGradient = iW._dragGradients[0], WW._properties.currentDrag1 = WW._properties.currentDragGradient.getFactor(), iW._dragGradients.length > 1 ? WW._properties.currentDrag2 = iW._dragGradients[1].getFactor() : WW._properties.currentDrag2 = WW._properties.currentDrag1
    }

    function Zi(WW, iW) {
      mW.m.GetCurrentGradient(iW._ratio, iW._dragGradients, ((iW, OW, mW) => {
        iW !== WW._properties.currentDragGradient && (WW._properties.currentDrag1 = WW._properties.currentDrag2, WW._properties.currentDrag2 = OW.getFactor(), WW._properties.currentDragGradient = iW);
        const EW = (0, lW.Lerp)(WW._properties.currentDrag1, WW._properties.currentDrag2, mW);
        WW._properties.scaledDirection.scaleInPlace(1 - EW)
      }))
    }

    function xi(WW, iW) {
      WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2 ? (WW._properties.randomNoiseCoordinates1.yWW(Math.random(), Math.random(), Math.random()), WW._properties.randomNoiseCoordinates2.yWW(Math.random(), Math.random(), Math.random())) : (WW._properties.randomNoiseCoordinates1 = new NW.q(Math.random(), Math.random(), Math.random()), WW._properties.randomNoiseCoordinates2 = new NW.q(Math.random(), Math.random(), Math.random()))
    }

    function li(WW, iW) {
      const OW = iW._noiseTextureData,
        mW = iW._noiseTextureSize;
      if (OW && mW && WW._properties.randomNoiseCoordinates1 && WW._properties.randomNoiseCoordinates2) {
        const EW = iW._fetchR(WW._properties.randomNoiseCoordinates1.x, WW._properties.randomNoiseCoordinates1.y, mW.width, mW.height, OW),
          PW = iW._fetchR(WW._properties.randomNoiseCoordinates1.z, WW._properties.randomNoiseCoordinates2.x, mW.width, mW.height, OW),
          LW = iW._fetchR(WW._properties.randomNoiseCoordinates2.y, WW._properties.randomNoiseCoordinates2.z, mW.width, mW.height, OW),
          cW = NW.l.fA[0],
          wW = NW.l.fA[1];
        cW.yWW((2 * EW - 1) * iW.noiseStrength.x, (2 * PW - 1) * iW.noiseStrength.y, (2 * LW - 1) * iW.noiseStrength.z), cW.scaleToRef(iW._tempScaledUpdateSpeed, wW), WW.direction.addInPlace(wW)
      }
    }

    function Ai(WW, iW) {
      iW.gravity.scaleToRef(iW._tempScaledUpdateSpeed, iW._scaledGravity), WW.direction.addInPlace(iW._scaledGravity)
    }

    function bi(WW, iW) {
      WW.size = (0, lW.RandomRange)(iW.minSize, iW.maxSize), WW.scale.yWW((0, lW.RandomRange)(iW.minScaleX, iW.maxScaleX), (0, lW.RandomRange)(iW.minScaleY, iW.maxScaleY))
    }

    function ji(WW, iW) {
      WW._properties.currentSizeGradient = iW._sizeGradients[0], WW._properties.currentSize1 = WW._properties.currentSizeGradient.getFactor(), WW.size = WW._properties.currentSize1, iW._sizeGradients.length > 1 ? WW._properties.currentSize2 = iW._sizeGradients[1].getFactor() : WW._properties.currentSize2 = WW._properties.currentSize1, WW.scale.yWW((0, lW.RandomRange)(iW.minScaleX, iW.maxScaleX), (0, lW.RandomRange)(iW.minScaleY, iW.maxScaleY))
    }

    function Ui(WW, iW) {
      const OW = iW._actualFrame / iW.targetStopDuration;
      mW.m.GetCurrentGradient(OW, iW._startSizeGradients, ((OW, mW, EW) => {
        OW !== iW._currentStartSizeGradient && (iW._currentStartSize1 = iW._currentStartSize2, iW._currentStartSize2 = mW.getFactor(), iW._currentStartSizeGradient = OW);
        const NW = (0, lW.Lerp)(iW._currentStartSize1, iW._currentStartSize2, EW);
        WW.scale.scaleInPlace(NW)
      }))
    }

    function ki(WW, iW) {
      mW.m.GetCurrentGradient(iW._ratio, iW._sizeGradients, ((iW, OW, mW) => {
        iW !== WW._properties.currentSizeGradient && (WW._properties.currentSize1 = WW._properties.currentSize2, WW._properties.currentSize2 = OW.getFactor(), WW._properties.currentSizeGradient = iW), WW.size = (0, lW.Lerp)(WW._properties.currentSize1, WW._properties.currentSize2, mW)
      }))
    }

    function si(WW, iW) {
      WW.remapData = new NW.r(0, 1, 0, 1)
    }

    function Mi(WW, iW) {
      iW._colorRemapGradients && iW._colorRemapGradients.length > 0 && mW.m.GetCurrentGradient(iW._ratio, iW._colorRemapGradients, ((iW, OW, mW) => {
        const EW = (0, lW.Lerp)(iW.factor1, OW.factor1, mW),
          NW = (0, lW.Lerp)(iW.factor2, OW.factor2, mW);
        WW.remapData.x = EW, WW.remapData.y = NW - EW
      })), iW._alphaRemapGradients && iW._alphaRemapGradients.length > 0 && mW.m.GetCurrentGradient(iW._ratio, iW._alphaRemapGradients, ((iW, OW, mW) => {
        const EW = (0, lW.Lerp)(iW.factor1, OW.factor1, mW),
          NW = (0, lW.Lerp)(iW.factor2, OW.factor2, mW);
        WW.remapData.z = EW, WW.remapData.w = NW - EW
      }))
    }

    function Ki(WW, iW) {
      const OW = (0, lW.Clamp)(iW._actualFrame / iW.targetStopDuration);
      mW.m.GetCurrentGradient(OW, iW._lifeTimeGradients, ((iW, mW) => {
        const EW = iW,
          NW = mW,
          PW = EW.getFactor(),
          LW = NW.getFactor(),
          cW = (OW - EW.gradient) / (NW.gradient - EW.gradient);
        WW.lifeTime = (0, lW.Lerp)(PW, LW, cW)
      })), iW._emitPower = (0, lW.RandomRange)(iW.minEmitPower, iW.maxEmitPower)
    }

    function Si(WW, iW) {
      WW.lifeTime = (0, lW.RandomRange)(iW.minLifeTime, iW.maxLifeTime), iW._emitPower = (0, lW.RandomRange)(iW.minEmitPower, iW.maxEmitPower)
    }

    function Yi(WW, iW) {
      0 === iW._emitPower ? (WW._properties.initialDirection ? WW._properties.initialDirection.HJ(WW.direction) : WW._properties.initialDirection = WW.direction.clone(), WW.direction.set(0, 0, 0)) : (WW._properties.initialDirection = null, WW.direction.scaleInPlace(iW._emitPower)), WW.direction.addInPlace(iW._inheritedVelocityOffset)
    }

    function yi(WW, iW) {
      WW.angularSpeed = (0, lW.RandomRange)(iW.minAngularSpeed, iW.maxAngularSpeed), WW.angle = (0, lW.RandomRange)(iW.minInitialRotation, iW.maxInitialRotation)
    }

    function Ti(WW, iW) {
      WW._properties.currentAngularSpeedGradient = iW._angularSpeedGradients[0], WW.angularSpeed = WW._properties.currentAngularSpeedGradient.getFactor(), WW._properties.currentAngularSpeed1 = WW.angularSpeed, iW._angularSpeedGradients.length > 1 ? WW._properties.currentAngularSpeed2 = iW._angularSpeedGradients[1].getFactor() : WW._properties.currentAngularSpeed2 = WW._properties.currentAngularSpeed1, WW.angle = (0, lW.RandomRange)(iW.minInitialRotation, iW.maxInitialRotation)
    }

    function Ji(WW, iW) {
      WW._properties.initialStartSpriteCellId = iW.startSpriteCellID, WW._properties.initialEndSpriteCellId = iW.endSpriteCellID, WW._properties.initialSpriteCellLoop = iW.spriteCellLoop
    }

    function Hi(WW, iW) {
      WW.previousItem = iW.previousItem, WW.nextItem = iW, iW.previousItem && (iW.previousItem.nextItem = WW), iW.previousItem = WW
    }

    function ni(WW, iW) {
      WW.previousItem = iW, WW.nextItem = iW.nextItem, iW.nextItem && (iW.nextItem.previousItem = WW), iW.nextItem = WW
    }

    function ui(WW) {
      WW.previousItem && (WW.previousItem.nextItem = WW.nextItem), WW.nextItem && (WW.nextItem.previousItem = WW.previousItem)
    }
    var oi = OW(41892);
    class di extends SW {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(WW) {
        this._startDirectionFunction !== WW && (this._startDirectionFunction = WW, this._directionCreation.process = WW ? Wi : QW)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(WW) {
        this._startPositionFunction !== WW && (this._startPositionFunction = WW, this._positionCreation.process = WW ? Li : Pi)
      }
      set onDispose(WW) {
        this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
      }
      get Ay() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(WW) {
        this._useRampGradients !== WW && (this._useRampGradients = WW, this._resetEffect(), WW ? (this._rampCreation = {
          process: si,
          previousItem: null,
          nextItem: null
        }, ni(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Mi,
          previousItem: null,
          nextItem: null
        }, ni(this._remapGradientProcessing, this._gravityProcessing))) : (ui(this._rampCreation), ui(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(WW) {
        this._isLocal !== WW && (this._isLocal = WW, WW ? (this._isLocalCreation = {
          process: ci,
          previousItem: null,
          nextItem: null
        }, ni(this._isLocalCreation, this._positionCreation)) : ui(this._isLocalCreation))
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
          process: Ji,
          previousItem: null,
          nextItem: null
        }, ni(this._sheetCreation, this._colorDeadCreation)) : ui(this._sheetCreation), this._reset())
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
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[iW] = new CW.d(this._engine), this._customWrappers[iW].effect = WW, this._customWrappers[iW].drawContext && (this._customWrappers[iW].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new EW.e), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = WW, !WW) return ui(this._noiseCreation), void ui(this._noiseProcessing);
          this._noiseCreation = {
            process: xi,
            previousItem: null,
            nextItem: null
          }, ni(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: li,
            previousItem: null,
            nextItem: null
          }, ni(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          wW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        pW || (pW = !0, oW(VW.i, DW)), (0, fW.d)(), super(WW), this._emitterInverseWorldMatrix = NW.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new NW.q, this.jD = new EW.e, this.onStoppedObservable = new EW.e, this.onStartedObservable = new EW.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new tW.d(0, 0, 0, 0), this._colorDiff = new tW.d(0, 0, 0, 0), this._scaledGravity = NW.q.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = WW => {}, this.recycleParticle = WW => {
          const iW = this._particles.pop();
          iW !== WW && iW.copyTo(WW), iW.metadata = null, this._stockParticles.push(iW)
        }, this._createParticle = () => {
          let WW;
          return 0 !== this._stockParticles.length ? (WW = this._stockParticles.pop(), WW._reset()) : WW = new yW(this), this._prepareParticle(WW), WW
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = iW, this._epsilon = LW, OW && "Scene" !== OW.getClassName() ? (this._engine = OW, this.defaultProjectionMatrix = NW.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = OW || cW.d.LastCreatedScene, this._engine = this._scene.VA(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.vY.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Si,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Pi,
          previousItem: null,
          nextItem: null
        }, ni(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: QW,
          previousItem: null,
          nextItem: null
        }, ni(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Yi,
          previousItem: null,
          nextItem: null
        }, ni(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: bi,
          previousItem: null,
          nextItem: null
        }, ni(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: yi,
          previousItem: null,
          nextItem: null
        }, ni(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: RW,
          previousItem: null,
          nextItem: null
        }, ni(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: GW,
          previousItem: null,
          nextItem: null
        }, ni(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, wW || (this._colorProcessing = {
          process: rW,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: FW,
          previousItem: null,
          nextItem: null
        }, ni(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Ni,
          previousItem: null,
          nextItem: null
        }, ni(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: wi,
          previousItem: null,
          nextItem: null
        }, ni(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Ai,
          previousItem: null,
          nextItem: null
        }, ni(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = PW, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new CW.d(this._engine)
        }, this._customWrappers[0].effect = mW, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new ZW.d, this.updateFunction = WW => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((WW => {
            this._noiseTextureData = WW
          })));
          const iW = WW === this._particles;
          for (let OW = 0; OW < WW.length; OW++) {
            const mW = WW[OW];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const EW = mW.age;
            if (mW.age += this._tempScaledUpdateSpeed, mW.age > mW.lifeTime) {
              const WW = mW.age - EW,
                iW = mW.lifeTime - EW;
              this._tempScaledUpdateSpeed = iW * this._tempScaledUpdateSpeed / WW, mW.age = mW.lifeTime
            }
            this._ratio = mW.age / mW.lifeTime, mW._properties.directionScale = this._tempScaledUpdateSpeed;
            let NW = this._updateQueueStart;
            for (; NW;) NW.process(mW, this), NW = NW.nextItem;
            if (this._isAnimationSheetEnabled && !wW && mW.updateCellIndex(), mW._inheritParticleInfoToSubEmitters(), mW.age >= mW.lifeTime) {
              if (this._emitFromParticle(mW), mW._properties.attachedSubEmitters) {
                for (const WW of mW._properties.attachedSubEmitters) WW.particleSystem.disposeOnStop = !0, WW.particleSystem.stop();
                mW._properties.attachedSubEmitters = null
              }
              this.recycleParticle(mW), iW && OW--
            } else;
          }
        }
      }
      serialize(WW) {
        throw new Error("Method not implemented.")
      }
      clone(WW, iW) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Ki : this._lifeTimeCreation.process = Si
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Ui,
          previousItem: null,
          nextItem: null
        }, ni(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (ui(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(WW) {
        this.targetStopDuration !== WW && (this._targetStopDuration = WW, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(WW, iW, OW) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, WW, iW, OW), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(WW) {
        return this._removeFactorGradient(this._lifeTimeGradients, WW), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(WW, iW, OW) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = ji, this._sizeGradientProcessing = {
          process: ki,
          previousItem: null,
          nextItem: null
        }, Hi(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, WW, iW, OW), this
      }
      removeSizeGradient(WW) {
        return this._removeFactorGradient(this._sizeGradients, WW), 0 === this._sizeGradients?.length && (ui(this._sizeGradientProcessing), this._sizeCreation.process = bi), this
      }
      addColorRemapGradient(WW, iW, OW) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, WW, iW, OW), this
      }
      removeColorRemapGradient(WW) {
        return this._removeFactorGradient(this._colorRemapGradients, WW), this
      }
      addAlphaRemapGradient(WW, iW, OW) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, WW, iW, OW), this
      }
      removeAlphaRemapGradient(WW) {
        return this._removeFactorGradient(this._alphaRemapGradients, WW), this
      }
      addAngularSpeedGradient(WW, iW, OW) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Ti, this._angularSpeedGradientProcessing = {
          process: zW,
          previousItem: null,
          nextItem: null
        }, Hi(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, WW, iW, OW), this
      }
      removeAngularSpeedGradient(WW) {
        return this._removeFactorGradient(this._angularSpeedGradients, WW), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = yi, ui(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(WW, iW, OW) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: ii,
          previousItem: null,
          nextItem: null
        }, ni(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: mi,
          previousItem: null,
          nextItem: null
        }, Hi(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, WW, iW, OW), this
      }
      removeVelocityGradient(WW) {
        return this._removeFactorGradient(this._velocityGradients, WW), 0 === this._velocityGradients?.length && (ui(this._velocityCreation), ui(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(WW, iW, OW) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Oi,
          previousItem: null,
          nextItem: null
        }, ni(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Ei,
          previousItem: null,
          nextItem: null
        }, ni(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, WW, iW, OW), this
      }
      removeLimitVelocityGradient(WW) {
        return this._removeFactorGradient(this._limitVelocityGradients, WW), 0 === this._limitVelocityGradients?.length && (ui(this._limitVelocityCreation), ui(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(WW, iW, OW) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: ti,
          previousItem: null,
          nextItem: null
        }, Hi(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Zi,
          previousItem: null,
          nextItem: null
        }, Hi(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, WW, iW, OW), this
      }
      removeDragGradient(WW) {
        return this._removeFactorGradient(this._dragGradients, WW), 0 === this._dragGradients?.length && (ui(this._dragCreation), ui(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(WW, iW, OW) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, WW, iW, OW), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(WW) {
        return this._removeFactorGradient(this._startSizeGradients, WW), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const WW = new Uint8Array(4 * this._rawTextureWidth),
          iW = tW.j.Color3[0];
        for (let OW = 0; OW < this._rawTextureWidth; OW++) {
          const EW = OW / this._rawTextureWidth;
          mW.m.GetCurrentGradient(EW, this._rampGradients, ((mW, EW, NW) => {
            tW.b.LerpToRef(mW.color, EW.color, NW, iW), WW[4 * OW] = 255 * iW.r, WW[4 * OW + 1] = 255 * iW.g, WW[4 * OW + 2] = 255 * iW.b, WW[4 * OW + 3] = 255
          }))
        }
        this._rampGradientsTexture = LW.b.CreateRGBATexture(WW, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(WW, iW) {
        this._rampGradients || (this._rampGradients = []);
        const OW = new mW.g(WW, iW);
        return this._rampGradients.push(OW), this._syncRampGradientTexture(), this
      }
      removeRampGradient(WW) {
        return this._removeGradientAndTexture(WW, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(WW, iW, OW) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = IW, this._colorProcessing.process = aW);
        const EW = new mW.d(WW, iW, OW);
        return this._colorGradients.push(EW), this._colorGradients.sort(((WW, iW) => WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0)), this
      }
      removeColorGradient(WW) {
        if (!this._colorGradients) return this;
        let iW = 0;
        for (const OW of this._colorGradients) {
          if (OW.gradient === WW) {
            this._colorGradients.splice(iW, 1);
            break
          }
          iW++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = RW, this._colorProcessing.process = rW), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const WW of this._drawWrappers)
            if (WW)
              for (const iW of WW) iW?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(WW, iW, OW, mW, EW) {
        return EW[4 * (((WW = .5 * Math.abs(WW) + .5) * OW % OW | 0) + ((iW = .5 * Math.abs(iW) + .5) * mW % mW | 0) * OW)] / 255
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
          iW = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * iW), this._vertexBuffer = new PW.b(WW, this._vertexData, !0, iW);
        let OW = 0;
        const mW = this._vertexBuffer.createVertexBuffer(PW.k.PositionKind, OW, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[PW.k.PositionKind] = mW, OW += 3;
        const EW = this._vertexBuffer.createVertexBuffer(PW.k.ColorKind, OW, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[PW.k.ColorKind] = EW, OW += 4;
        const NW = this._vertexBuffer.createVertexBuffer("angle", OW, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = NW, OW += 1;
        const LW = this._vertexBuffer.createVertexBuffer("size", OW, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = LW, OW += 2, this._isAnimationSheetEnabled) {
          const WW = this._vertexBuffer.createVertexBuffer("cellIndex", OW, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = WW, OW += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const WW = this._vertexBuffer.createVertexBuffer("direction", OW, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = WW, OW += 3
        }
        if (this._useRampGradients) {
          const WW = this._vertexBuffer.createVertexBuffer("remapData", OW, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = WW, OW += 4
        }
        let cW;
        if (this._useInstancing) {
          const iW = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new PW.b(WW, iW, !1, 2), cW = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else cW = this._vertexBuffer.createVertexBuffer("offset", OW, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = cW, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const WW = [],
          iW = [];
        let OW = 0;
        for (let mW = 0; mW < this._capacity; mW++) WW.push(OW), WW.push(OW + 1), WW.push(OW + 2), WW.push(OW), WW.push(OW + 2), WW.push(OW + 3), iW.push(OW, OW + 1, OW + 1, OW + 2, OW + 2, OW + 3, OW + 3, OW, OW, OW + 3), OW += 4;
        this._indexBuffer = this._engine.createIndexBuffer(WW), this._linesIndexBuffer = this._engine.createIndexBuffer(iW)
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
              for (let iW = 0; iW < this.preWarmCycles; iW++) this.animate(!0), WW.render()
            }))
          }));
          else
            for (let iW = 0; iW < this.preWarmCycles; iW++) this.animate(!0)
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
      _appendParticleVertex(WW, iW, OW, mW) {
        let EW = WW * this._vertexBufferSize;
        const PW = NW.l.fA[0].HJ(this._scene?.floatingOriginOffset || NW.q.ZeroReadOnly);
        if (this._vertexData[EW++] = iW.position.x + this.worldOffset.x - PW.x, this._vertexData[EW++] = iW.position.y + this.worldOffset.y - PW.y, this._vertexData[EW++] = iW.position.z + this.worldOffset.z - PW.z, this._vertexData[EW++] = iW.color.r, this._vertexData[EW++] = iW.color.g, this._vertexData[EW++] = iW.color.b, this._vertexData[EW++] = iW.color.a, this._vertexData[EW++] = iW.angle, this._vertexData[EW++] = iW.scale.x * iW.size, this._vertexData[EW++] = iW.scale.y * iW.size, this._isAnimationSheetEnabled && (this._vertexData[EW++] = iW.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[EW++] = iW.direction.x, this._vertexData[EW++] = iW.direction.y, this._vertexData[EW++] = iW.direction.z);
        else if (iW._properties.initialDirection) {
          let WW = iW._properties.initialDirection;
          this.isLocal && (NW.q.TransformNormalToRef(WW, this._emitterWorldMatrix, NW.l.fA[0]), WW = NW.l.fA[0]), 0 === WW.x && 0 === WW.z && (WW.x = .001), this._vertexData[EW++] = WW.x, this._vertexData[EW++] = WW.y, this._vertexData[EW++] = WW.z
        } else {
          let WW = iW.direction;
          this.isLocal && (NW.q.TransformNormalToRef(WW, this._emitterWorldMatrix, NW.l.fA[0]), WW = NW.l.fA[0]), 0 === WW.x && 0 === WW.z && (WW.x = .001), this._vertexData[EW++] = WW.x, this._vertexData[EW++] = WW.y, this._vertexData[EW++] = WW.z
        }
        this._useRampGradients && iW.remapData && (this._vertexData[EW++] = iW.remapData.x, this._vertexData[EW++] = iW.remapData.y, this._vertexData[EW++] = iW.remapData.z, this._vertexData[EW++] = iW.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === OW ? OW = this._epsilon : 1 === OW && (OW = 1 - this._epsilon), 0 === mW ? mW = this._epsilon : 1 === mW && (mW = 1 - this._epsilon)), this._vertexData[EW++] = OW, this._vertexData[EW] = mW)
      }
      _prepareParticle(WW) {}
      _createNewOnes(WW) {
        let iW;
        for (let OW = 0; OW < WW && this._particles.length !== this._capacity; OW++) {
          iW = this._createParticle(), this._particles.push(iW);
          let WW = this._createQueueStart;
          for (; WW;) WW.process(iW, this), WW = WW.nextItem;
          iW._inheritParticleInfoToSubEmitters()
        }
      }
      _update(WW) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const WW = this.emitter;
          this._emitterWorldMatrix = WW.getWorldMatrix()
        } else {
          const WW = this.emitter;
          this._emitterWorldMatrix = NW.d.Translation(WW.x, WW.y, WW.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(WW)
      }
      static _GetAttributeNamesOrOptions() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = [PW.k.PositionKind, PW.k.ColorKind, "angle", "offset", "size"];
        return WW && mW.push("cellIndex"), iW || mW.push("direction"), OW && mW.push("remapData"), mW
      }
      static _GetEffectCreationOptions() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, XW.d)(mW), WW && mW.push("particlesInfos"), iW && mW.push("logarithmicDepthConstant"), OW && (mW.push("vFogInfos"), mW.push("vFogColor")), mW
      }
      fillDefines(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, XW.k)(this, this._scene, WW), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && WW.push("#define FOG")), this._isAnimationSheetEnabled && WW.push("#define ANIMATESHEET"), this.useLogarithmicDepth && WW.push("#define LOGARITHMICDEPTH"), iW === SW.BLENDMODE_MULTIPLY && WW.push("#define BLENDMULTIPLYMODE"), this.isLocal && WW.push("#define LOCAL"), this._useRampGradients && WW.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (WW.push("#define BILLBOARD"), this.billboardMode) {
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
        OW && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), WW.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(WW, iW, OW) {
        iW.push(...di._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), WW.push(...di._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), OW.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, qW.h)(WW, this._imageProcessingConfigurationDefines), (0, qW.e)(OW, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(WW) {
        var iW;
        const OW = this._getCustomDrawWrapper(WW);
        if (OW?.effect) return OW;
        const mW = [];
        this.fillDefines(mW, WW);
        const NW = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          PW = oi.d._PrepareStringDefines(NW, mW),
          LW = PW ? oi.d.GetConfiguration(NW) : void 0;
        let cW = this._drawWrappers[NW];
        cW || (cW = this._drawWrappers[NW] = [], 0 === NW || this._renderPassObserver || (this._renderPassObserver = ((iW = this._engine)._onReleaseRenderPassObservable ?? (iW._onReleaseRenderPassObservable = new EW.e)).add((WW => {
          const iW = this._drawWrappers[WW];
          if (iW) {
            for (const WW of iW) WW?.dispose();
            delete this._drawWrappers[WW]
          }
        }))));
        let wW = cW[WW];
        wW || (wW = new CW.d(this._engine), wW.drawContext && (wW.drawContext.useInstancing = this._useInstancing), cW[WW] = wW);
        const tW = mW.join("\n");
        if (wW.defines !== tW) {
          const WW = [],
            iW = [],
            OW = [];
          this.fillUniformsAttributesAndSamplerNames(iW, WW, OW), PW && (iW.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== LW?.defines.PREPASS_LOCAL_POSITION_INDEX && iW.push("inverseEmitterWM", "geometryWorldOffset")), wW.setEffect(this._engine.createEffect("particles", {
            attributes: WW,
            uniformsNames: iW,
            samplers: OW,
            defines: tW,
            shaderLanguage: this._shaderLanguage,
            multiTarget: PW,
            indexParameters: PW ? {
              buffersCount: LW?._mrtCount ?? 0
            } : void 0
          }, this._engine), tW)
        }
        return wW
      }
      _bindGeometryRendering(WW) {
        const iW = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          OW = oi.d.GetConfiguration(iW);
        if (!OW?._defines) return;
        WW.setFloat("objectId", 0), WW.setInt("meshBlendTag", 0);
        const mW = this._scene?.activeCamera;
        if (WW.setFloat2("cameraInfo", mW?.minZ ?? 0, mW?.maxZ ?? 1), this.isLocal && void 0 !== OW.defines.PREPASS_LOCAL_POSITION_INDEX) {
          WW.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const iW = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || NW.q.ZeroReadOnly, NW.l.fA[0]);
          WW.setVector3("geometryWorldOffset", iW)
        }
      }
      animate() {
        let WW, iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!iW && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (iW ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) WW = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const iW = this._calculateEmitRate();
            WW = iW * this._scaledUpdateSpeed | 0, this._newPartsExcess += iW * this._scaledUpdateSpeed - WW
          }
          if (this._newPartsExcess > 1 && (WW += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? WW = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(WW), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !iW) {
            let WW = 0;
            for (let iW = 0; iW < this._particles.length; iW++) {
              const OW = this._particles[iW];
              this._appendParticleVertices(WW, OW), WW += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const WW = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  iW = this._particles.length;
                iW < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, iW * WW, this._fixedCapacityHighWaterMark * WW), this._fixedCapacityHighWaterMark = iW, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const iW = this._actualFrame / this.targetStopDuration;
          mW.m.GetCurrentGradient(iW, this._emitRateGradients, ((iW, OW, mW) => {
            iW !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = OW.getFactor(), this._currentEmitRateGradient = iW), WW = (0, lW.Lerp)(this._currentEmitRate1, this._currentEmitRate2, mW)
          }))
        }
        return WW
      }
      _appendParticleVertices(WW, iW) {
        this._appendParticleVertex(WW++, iW, 0, 0), this._useInstancing || (this._appendParticleVertex(WW++, iW, 1, 0), this._appendParticleVertex(WW++, iW, 1, 1), this._appendParticleVertex(WW, iW, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !di.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([OW.e(664).then((() => OW(64427))), OW.e(658).then((() => OW(64432)))])) : await Promise.all([OW.e(647).then((() => OW(64436))), Promise.all([OW.e(640), OW.e(673)]).then((() => OW(64439)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== SW.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(SW.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(SW.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(WW) {
        const iW = this._getWrapper(WW),
          OW = iW.effect,
          mW = this._engine;
        mW.enableEffect(iW);
        const EW = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        OW.setTexture("diffuseSampler", this.particleTexture), OW.setMatrix("view", EW);
        const PW = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (OW.setMatrix("projection", PW), this._isAnimationSheetEnabled && this.particleTexture) {
          const WW = this.particleTexture.getBaseSize();
          OW.setFloat3("particlesInfos", this.spriteCellWidth / WW.width, this.spriteCellHeight / WW.height, this.spriteCellWidth / WW.width)
        }
        if (OW.setVector2("translationPivot", this.translationPivot), OW.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const WW = this._scene.activeCamera;
          OW.setVector3("eyePosition", WW.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), OW.setTexture("rampSampler", this._rampGradientsTexture));
        const LW = OW.defines;
        this._scene && ((0, XW.g)(OW, this, this._scene), this.applyFog && (0, BW.g)(this._scene, void 0, OW)), LW.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (EW.invertToRef(NW.l.Matrix[0]), OW.setMatrix("invView", NW.l.Matrix[0])), OW._multiTarget && this._bindGeometryRendering(OW), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? mW.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, OW) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, OW)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? mW.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, OW) : mW.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, OW), this.useLogarithmicDepth && this._scene && (0, BW.p)(LW, OW, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(OW), this._setEngineBasedOnBlendMode(WW), OW._multiTarget && oi.d._BindZeroAlphaDiscard(mW, OW);
        let cW = !1;
        try {
          oi.d._BindAttachmentsForEffect(mW, OW) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(OW), this._useInstancing ? this._scene?.forceWireframe ? mW.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : mW.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? mW.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : mW.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), cW = !0)
        } finally {
          oi.d._RestoreAttachments(mW)
        }
        return cW ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const WW = this._engine;
        let iW;
        return WW.setState && (WW.setState(!1), this.forceDepthWrite && WW.setDepthWrite(!0)), iW = this.blendMode === SW.BLENDMODE_MULTIPLYADD ? this._render(SW.BLENDMODE_MULTIPLY) + this._render(SW.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), iW
      }
      _onDispose() {}
      dispose() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), WW && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), WW && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(iW, OW), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const WW = this._scene.vY.indexOf(this);
          WW > -1 && this._scene.vY.splice(WW, 1), this._scene._activeParticleSystems.dispose()
        }
        this.jD.notifyObservers(this), this.jD.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    di.ForceGLSL = !1;
    var ei, vi = OW(38299);
    ! function(WW) {
      WW[WW.ATTACHED = 0] = "ATTACHED", WW[WW.END = 1] = "END"
    }(ei || (ei = {}));
    class gi {
      constructor(WW) {
        if (this.particleSystem = WW, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !WW.emitter || !WW.emitter.dispose) {
          const iW = (0, vi.d)("BABYLON.AbstractMesh");
          WW.emitter = new iW("SubemitterSystemEmitter", WW.bD()), WW._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let WW = this.particleSystem.emitter;
        if (WW) {
          if (WW instanceof NW.q) WW = WW.clone();
          else if (-1 !== WW.getClassName().indexOf("Mesh")) {
            WW = new((0, vi.d)("BABYLON.Mesh"))("", WW.bD()), WW.isVisible = !1
          }
        } else WW = new NW.q;
        const iW = new gi(this.particleSystem.clone(this.particleSystem.name, WW));
        return iW.particleSystem.name += "Clone", iW.type = this.type, iW.inheritDirection = this.inheritDirection, iW.inheritedVelocityAmount = this.inheritedVelocityAmount, iW.particleSystem._disposeEmitterOnDispose = !0, iW.particleSystem.disposeOnStop = !0, iW
      }
      serialize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = {};
        return iW.type = this.type, iW.inheritDirection = this.inheritDirection, iW.inheritedVelocityAmount = this.inheritedVelocityAmount, iW.particleSystem = this.particleSystem.serialize(WW), iW
      }
      static _ParseParticleSystem(WW, iW, OW) {
        throw (0, gW.o)("ParseParticle")
      }
      static Parse(WW, iW, OW) {
        const mW = WW.particleSystem,
          EW = new gi(gi._ParseParticleSystem(mW, iW, OW, !0));
        return EW.type = WW.type, EW.inheritDirection = WW.inheritDirection, EW.inheritedVelocityAmount = WW.inheritedVelocityAmount, EW.particleSystem._isSubEmitter = !0, EW
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Di = OW(41423),
      Vi = OW(41538);
    const fi = () => {};
    class Ci {
      constructor() {
        this.particlePositionGenerator = fi, this.particleDestinationGenerator = fi, this.particleDirectionGenerator = fi
      }
      startDirectionFunction(WW, iW, OW, mW) {
        const EW = NW.l.fA[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== fi) this.particleDirectionGenerator(-1, OW, EW);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== fi) {
          this.particleDestinationGenerator(-1, OW, EW);
          const WW = NW.l.fA[1];
          EW.subtractToRef(OW.position, WW), WW.scaleToRef(1 / OW.lifeTime, EW)
        } else EW.set(0, 0, 0);
        mW ? iW.HJ(EW) : NW.q.TransformNormalToRef(EW, WW, iW)
      }
      startPositionFunction(WW, iW, OW, mW) {
        const EW = NW.l.fA[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== fi ? this.particlePositionGenerator(-1, OW, EW) : EW.set(0, 0, 0), mW ? iW.HJ(EW) : NW.q.TransformCoordinatesToRef(EW, WW, iW)
      }
      clone() {
        const WW = new Ci;
        return xW.c.DeepCopy(this, WW), WW
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
    const Xi = NW.q.Zero(),
      Bi = NW.q.Zero(),
      qi = NW.q.Zero();
    class Ri {
      constructor() {
        this.strength = 0, this.position = NW.q.Zero()
      }
      _processParticle(WW, iW) {
        this.position.subtractToRef(WW.position, Xi);
        const OW = Xi.lengthSquared() + 1;
        Xi.normalize().scaleToRef(this.strength / OW, Bi), Bi.scaleToRef(iW._tempScaledUpdateSpeed, qi), WW.direction.addInPlace(qi)
      }
      serialize() {
        return {
          position: this.position.wEW(),
          strength: this.strength
        }
      }
    }
    const Gi = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Ii extends di {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = WW => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const iW = Math.floor(Math.random() * this._subEmitters.length);
          for (const OW of this._subEmitters[iW])
            if (1 === OW.type) {
              const iW = OW.clone();
              WW._inheritParticleInfoToSubEmitter(iW), iW.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(iW.particleSystem), iW.particleSystem.start()
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
        this._flowMap !== WW && (this._flowMap = WW, this._flowMapUpdate && (ui(this._flowMapUpdate), this._flowMapUpdate = null), WW && (this._flowMapUpdate = {
          process: WW => {
            const iW = this.bD()?.getTransformMatrix();
            this._flowMap._processParticle(WW, this.flowMapStrength * this._tempScaledUpdateSpeed, iW)
          },
          previousItem: null,
          nextItem: null
        }, ni(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(WW) {
        super.addAttractor(WW), 1 === this._attractors.length && (this._attractorUpdate = {
          process: WW => {
            for (const iW of this._attractors) iW._processParticle(WW, this)
          },
          previousItem: null,
          nextItem: null
        }, ni(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(WW) {
        super.removeAttractor(WW), 0 === this._attractors.length && this._attractorUpdate && ui(this._attractorUpdate)
      }
      start() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(WW)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const WW of this.subEmitters) WW instanceof Ii ? this._subEmitters.push([new gi(WW)]) : WW instanceof gi ? this._subEmitters.push([WW]) : WW instanceof Array && this._subEmitters.push(WW)
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
          const iW = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          WW._properties.attachedSubEmitters = [];
          for (const OW of iW)
            if (0 === OW.type) {
              const iW = OW.clone();
              WW._properties.attachedSubEmitters.push(iW), iW.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), WW && this.particles)
          for (const OW of this.particles)
            if (OW._properties.attachedSubEmitters)
              for (let WW = OW._properties.attachedSubEmitters.length - 1; WW >= 0; WW -= 1) OW._properties.attachedSubEmitters[WW].dispose();
        if (iW && this.activeSubSystems)
          for (let OW = this.activeSubSystems.length - 1; OW >= 0; OW -= 1) this.activeSubSystems[OW].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let WW = 0; WW < this._subEmitters.length; WW++)
            for (const iW of this._subEmitters[WW]) iW.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(WW, iW, OW, mW) {
        let EW;
        EW = OW instanceof Di.b ? null : OW;
        const PW = (0, vi.d)("BABYLON.Texture");
        if (PW && EW)
          if (WW.texture) iW.particleTexture = PW.Parse(WW.texture, EW, mW);
          else if (WW.textureName) {
          const OW = WW.textureSettings;
          if (iW.particleTexture = new PW(mW + WW.textureName, EW, !1, void 0 === WW.invertY || WW.invertY, OW ? OW.samplingMode : void 0), iW.particleTexture.name = WW.textureName, OW) {
            const WW = iW.particleTexture;
            for (const iW of Gi) void 0 !== OW[iW] && (WW[iW] = OW[iW])
          }
        }
        if (WW.emitterId || 0 === WW.emitterId || void 0 !== WW.emitter ? (WW.emitterId || 0 === WW.emitterId) && EW ? (iW.emitter = EW.getLastMeshById(WW.emitterId), iW.emitter || (iW.emitter = NW.q.Zero())) : iW.emitter = NW.q.FromArray(WW.emitter) : iW.emitter = NW.q.Zero(), iW.isLocal = !!WW.isLocal, void 0 !== WW.renderingGroupId && (iW.renderingGroupId = WW.renderingGroupId), void 0 !== WW.isBillboardBased && (iW.isBillboardBased = WW.isBillboardBased), void 0 !== WW.billboardMode && (iW.billboardMode = WW.billboardMode), void 0 !== WW.useLogarithmicDepth && (iW.useLogarithmicDepth = WW.useLogarithmicDepth), WW.animations) {
          for (let OW = 0; OW < WW.animations.length; OW++) {
            const mW = WW.animations[OW],
              EW = (0, vi.d)("BABYLON.Animation");
            EW && iW.animations.push(EW.Parse(mW))
          }
          iW.beginAnimationOnStart = WW.beginAnimationOnStart, iW.beginAnimationFrom = WW.beginAnimationFrom, iW.beginAnimationTo = WW.beginAnimationTo, iW.beginAnimationLoop = WW.beginAnimationLoop
        }
        if (WW.autoAnimate && EW && EW.beginAnimation(iW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), iW.startDelay = 0 | WW.startDelay, iW.minAngularSpeed = WW.minAngularSpeed, iW.maxAngularSpeed = WW.maxAngularSpeed, iW.minSize = WW.minSize, iW.maxSize = WW.maxSize, WW.minScaleX && (iW.minScaleX = WW.minScaleX, iW.maxScaleX = WW.maxScaleX, iW.minScaleY = WW.minScaleY, iW.maxScaleY = WW.maxScaleY), void 0 !== WW.preWarmCycles && (iW.preWarmCycles = WW.preWarmCycles, iW.preWarmStepOffset = WW.preWarmStepOffset), void 0 !== WW.minInitialRotation && (iW.minInitialRotation = WW.minInitialRotation, iW.maxInitialRotation = WW.maxInitialRotation), iW.minLifeTime = WW.minLifeTime, iW.maxLifeTime = WW.maxLifeTime, iW.minEmitPower = WW.minEmitPower, iW.maxEmitPower = WW.maxEmitPower, iW.emitRate = WW.emitRate, iW.gravity = NW.q.FromArray(WW.gravity), WW.noiseStrength && (iW.noiseStrength = NW.q.FromArray(WW.noiseStrength)), iW.color1 = tW.d.FromArray(WW.color1), iW.color2 = tW.d.FromArray(WW.color2), iW.colorDead = tW.d.FromArray(WW.colorDead), iW.updateSpeed = WW.updateSpeed, iW.targetStopDuration = WW.targetStopDuration, iW.blendMode = WW.blendMode, WW.colorGradients)
          for (const NW of WW.colorGradients) iW.addColorGradient(NW.gradient, tW.d.FromArray(NW.color1), NW.color2 ? tW.d.FromArray(NW.color2) : void 0);
        if (WW.rampGradients) {
          for (const OW of WW.rampGradients) iW.addRampGradient(OW.gradient, tW.b.FromArray(OW.color));
          iW.useRampGradients = WW.useRampGradients
        }
        if (WW.colorRemapGradients)
          for (const NW of WW.colorRemapGradients) iW.addColorRemapGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.alphaRemapGradients)
          for (const NW of WW.alphaRemapGradients) iW.addAlphaRemapGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.sizeGradients)
          for (const NW of WW.sizeGradients) iW.addSizeGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.angularSpeedGradients)
          for (const NW of WW.angularSpeedGradients) iW.addAngularSpeedGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.velocityGradients)
          for (const NW of WW.velocityGradients) iW.addVelocityGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.dragGradients)
          for (const NW of WW.dragGradients) iW.addDragGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.emitRateGradients)
          for (const NW of WW.emitRateGradients) iW.addEmitRateGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.startSizeGradients)
          for (const NW of WW.startSizeGradients) iW.addStartSizeGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.lifeTimeGradients)
          for (const NW of WW.lifeTimeGradients) iW.addLifeTimeGradient(NW.gradient, void 0 !== NW.factor1 ? NW.factor1 : NW.factor, NW.factor2);
        if (WW.limitVelocityGradients) {
          for (const OW of WW.limitVelocityGradients) iW.addLimitVelocityGradient(OW.gradient, void 0 !== OW.factor1 ? OW.factor1 : OW.factor, OW.factor2);
          iW.limitVelocityDamping = WW.limitVelocityDamping
        }
        if (WW.noiseTexture && EW) {
          const OW = (0, vi.d)("BABYLON.ProceduralTexture");
          iW.noiseTexture = OW.Parse(WW.noiseTexture, EW, mW)
        }
        let LW;
        if (WW.particleEmitterType) {
          switch (WW.particleEmitterType.type) {
            case "SphereParticleEmitter":
              LW = new jW;
              break;
            case "SphereDirectedParticleEmitter":
              LW = new UW;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              LW = new sW;
              break;
            case "ConeDirectedParticleEmitter":
              LW = new MW;
              break;
            case "CylinderParticleEmitter":
              LW = new kW.i;
              break;
            case "CylinderDirectedParticleEmitter":
              LW = new kW.e;
              break;
            case "HemisphericParticleEmitter":
              LW = new bW;
              break;
            case "PointParticleEmitter":
              LW = new AW;
              break;
            case "MeshParticleEmitter":
              LW = new KW;
              break;
            case "CustomParticleEmitter":
              LW = new Ci;
              break;
            default:
              LW = new ZW.d
          }
          LW.parse(WW.particleEmitterType, EW)
        } else LW = new ZW.d, LW.parse(WW, EW);
        iW.particleEmitterType = LW, iW.startSpriteCellID = WW.startSpriteCellID, iW.endSpriteCellID = WW.endSpriteCellID, iW.spriteCellLoop = WW.spriteCellLoop ?? !0, iW.spriteCellWidth = WW.spriteCellWidth, iW.spriteCellHeight = WW.spriteCellHeight, iW.spriteCellChangeSpeed = WW.spriteCellChangeSpeed, iW.spriteRandomStartCell = WW.spriteRandomStartCell, iW.disposeOnStop = WW.disposeOnStop ?? !1, iW.manualEmitCount = WW.manualEmitCount ?? -1
      }
      static Parse(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EW = arguments.length > 4 ? arguments[4] : void 0;
        const PW = WW.name;
        let LW, cW, wW = null,
          ZW = null;
        if (iW instanceof Di.b ? LW = iW : (cW = iW, LW = cW.VA()), WW.customShader && (0, gW.e)(LW.createEffectForParticles)) {
          ZW = WW.customShader;
          const iW = ZW.shaderOptions.defines.length > 0 ? ZW.shaderOptions.defines.join("\n") : "";
          wW = LW.createEffectForParticles(ZW.shaderPath.fragmentElement, ZW.shaderOptions.uniforms, ZW.shaderOptions.samplers, iW)
        }
        const xW = new Ii(PW, EW || WW.aZ, iW, wW, WW.isAnimationSheetEnabled);
        if (xW.customShader = ZW, xW._rootUrl = OW, WW.id && (xW.id = WW.id), WW.subEmitters) {
          xW.subEmitters = [];
          for (const mW of WW.subEmitters) {
            const WW = [];
            for (const EW of mW) WW.push(gi.Parse(EW, iW, OW));
            xW.subEmitters.push(WW)
          }
        }
        if (WW.attractors)
          for (const tW of WW.attractors) {
            const WW = new Ri;
            WW.position = NW.q.FromArray(tW.position), WW.strength = tW.strength, xW.addAttractor(WW)
          }
        return Ii._Parse(WW, xW, iW, OW), WW.textureMask && (xW.textureMask = tW.d.FromArray(WW.textureMask)), WW.worldOffset && (xW.worldOffset = NW.q.FromArray(WW.worldOffset)), WW.preventAutoStart && (xW.preventAutoStart = WW.preventAutoStart), WW.metadata && (xW.metadata = WW.metadata), mW || xW.preventAutoStart || xW.start(), xW
      }
      serialize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = {};
        if (Ii._Serialize(iW, this, WW), iW.textureMask = this.textureMask.wEW(), iW.customShader = this.customShader, iW.preventAutoStart = this.preventAutoStart, iW.worldOffset = this.worldOffset.wEW(), this.metadata && (iW.metadata = this.metadata), this.subEmitters) {
          iW.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const OW of this._subEmitters) {
            const mW = [];
            for (const iW of OW) iW.particleSystem.doNotSerialize || mW.push(iW.serialize(WW));
            iW.subEmitters.push(mW)
          }
        }
        if (this._attractors && this._attractors.length) {
          iW.attractors = [];
          for (const WW of this._attractors) iW.attractors.push(WW.serialize())
        }
        return iW
      }
      static _Serialize(WW, iW, OW) {
        if (WW.name = iW.name, WW.id = iW.id, WW.aZ = iW.getCapacity(), WW.disposeOnStop = iW.disposeOnStop, WW.manualEmitCount = iW.manualEmitCount, iW.emitter.position) {
          const OW = iW.emitter;
          WW.emitterId = OW.id
        } else {
          const OW = iW.emitter;
          WW.emitter = OW.wEW()
        }
        if (iW.particleEmitterType && (WW.particleEmitterType = iW.particleEmitterType.serialize()), iW.particleTexture)
          if (OW) WW.texture = iW.particleTexture.serialize();
          else {
            const OW = iW.particleTexture;
            WW.textureName = iW.particleTexture.name, WW.invertY = !!OW._invertY;
            const mW = {};
            for (const WW of Gi) mW[WW] = OW[WW];
            mW.samplingMode = OW.samplingMode, WW.textureSettings = mW
          } WW.isLocal = iW.isLocal, Vi.d.AppendSerializedAnimations(iW, WW), WW.beginAnimationOnStart = iW.beginAnimationOnStart, WW.beginAnimationFrom = iW.beginAnimationFrom, WW.beginAnimationTo = iW.beginAnimationTo, WW.beginAnimationLoop = iW.beginAnimationLoop, WW.startDelay = iW.startDelay, WW.renderingGroupId = iW.renderingGroupId, WW.isBillboardBased = iW.isBillboardBased, WW.billboardMode = iW.billboardMode, WW.minAngularSpeed = iW.minAngularSpeed, WW.maxAngularSpeed = iW.maxAngularSpeed, WW.minSize = iW.minSize, WW.maxSize = iW.maxSize, WW.minScaleX = iW.minScaleX, WW.maxScaleX = iW.maxScaleX, WW.minScaleY = iW.minScaleY, WW.maxScaleY = iW.maxScaleY, WW.minEmitPower = iW.minEmitPower, WW.maxEmitPower = iW.maxEmitPower, WW.minLifeTime = iW.minLifeTime, WW.maxLifeTime = iW.maxLifeTime, WW.emitRate = iW.emitRate, WW.gravity = iW.gravity.wEW(), WW.noiseStrength = iW.noiseStrength.wEW(), WW.color1 = iW.color1.wEW(), WW.color2 = iW.color2.wEW(), WW.colorDead = iW.colorDead.wEW(), WW.updateSpeed = iW.updateSpeed, WW.targetStopDuration = iW.targetStopDuration, WW.blendMode = iW.blendMode, WW.preWarmCycles = iW.preWarmCycles, WW.preWarmStepOffset = iW.preWarmStepOffset, WW.minInitialRotation = iW.minInitialRotation, WW.maxInitialRotation = iW.maxInitialRotation, WW.startSpriteCellID = iW.startSpriteCellID, WW.spriteCellLoop = iW.spriteCellLoop, WW.endSpriteCellID = iW.endSpriteCellID, WW.spriteCellChangeSpeed = iW.spriteCellChangeSpeed, WW.spriteCellWidth = iW.spriteCellWidth, WW.spriteCellHeight = iW.spriteCellHeight, WW.spriteRandomStartCell = iW.spriteRandomStartCell, WW.isAnimationSheetEnabled = iW.isAnimationSheetEnabled, WW.useLogarithmicDepth = iW.useLogarithmicDepth;
        const mW = iW.getColorGradients();
        if (mW) {
          WW.colorGradients = [];
          for (const iW of mW) {
            const OW = {
              gradient: iW.gradient,
              color1: iW.color1.wEW()
            };
            iW.color2 ? OW.color2 = iW.color2.wEW() : OW.color2 = iW.color1.wEW(), WW.colorGradients.push(OW)
          }
        }
        const EW = iW.getRampGradients();
        if (EW) {
          WW.rampGradients = [];
          for (const iW of EW) {
            const OW = {
              gradient: iW.gradient,
              color: iW.color.wEW()
            };
            WW.rampGradients.push(OW)
          }
          WW.useRampGradients = iW.useRampGradients
        }
        const NW = iW.getColorRemapGradients();
        if (NW) {
          WW.colorRemapGradients = [];
          for (const iW of NW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.colorRemapGradients.push(OW)
          }
        }
        const PW = iW.getAlphaRemapGradients();
        if (PW) {
          WW.alphaRemapGradients = [];
          for (const iW of PW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.alphaRemapGradients.push(OW)
          }
        }
        const LW = iW.getSizeGradients();
        if (LW) {
          WW.sizeGradients = [];
          for (const iW of LW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.sizeGradients.push(OW)
          }
        }
        const cW = iW.getAngularSpeedGradients();
        if (cW) {
          WW.angularSpeedGradients = [];
          for (const iW of cW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.angularSpeedGradients.push(OW)
          }
        }
        const wW = iW.getVelocityGradients();
        if (wW) {
          WW.velocityGradients = [];
          for (const iW of wW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.velocityGradients.push(OW)
          }
        }
        const tW = iW.getDragGradients();
        if (tW) {
          WW.dragGradients = [];
          for (const iW of tW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.dragGradients.push(OW)
          }
        }
        const ZW = iW.getEmitRateGradients();
        if (ZW) {
          WW.emitRateGradients = [];
          for (const iW of ZW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.emitRateGradients.push(OW)
          }
        }
        const xW = iW.getStartSizeGradients();
        if (xW) {
          WW.startSizeGradients = [];
          for (const iW of xW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.startSizeGradients.push(OW)
          }
        }
        const lW = iW.getLifeTimeGradients();
        if (lW) {
          WW.lifeTimeGradients = [];
          for (const iW of lW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.lifeTimeGradients.push(OW)
          }
        }
        const AW = iW.getLimitVelocityGradients();
        if (AW) {
          WW.limitVelocityGradients = [];
          for (const iW of AW) {
            const OW = {
              gradient: iW.gradient,
              factor1: iW.factor1
            };
            void 0 !== iW.factor2 ? OW.factor2 = iW.factor2 : OW.factor2 = iW.factor1, WW.limitVelocityGradients.push(OW)
          }
          WW.limitVelocityDamping = iW.limitVelocityDamping
        }
        iW.noiseTexture && (WW.noiseTexture = iW.noiseTexture.serialize())
      }
      clone(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = {
          ...this._customWrappers
        };
        let EW = null;
        const NW = this._engine;
        if ((0, gW.e)(NW.createEffectForParticles) && null != this.customShader) {
          EW = this.customShader;
          const WW = EW.shaderOptions.defines.length > 0 ? EW.shaderOptions.defines.join("\n") : "",
            iW = NW.createEffectForParticles(EW.shaderPath.fragmentElement, EW.shaderOptions.uniforms, EW.shaderOptions.samplers, WW);
          mW[0] ? mW[0].effect = iW : this.setCustomEffect(iW, 0)
        }
        const PW = this.serialize(OW),
          LW = !1 === OW && this.particleTexture ? this.particleTexture.clone() : null;
        LW && (PW.textureName = void 0);
        const cW = Ii.Parse(PW, this._scene || this._engine, this._rootUrl);
        return cW.name = WW, cW.customShader = EW, cW._customWrappers = mW, LW && (cW.particleTexture = LW), void 0 === iW && (iW = this.emitter), this.noiseTexture && (cW.noiseTexture = this.noiseTexture.clone()), cW.emitter = iW, this.preventAutoStart || cW.start(), cW
      }
    }
    Ii.BILLBOARDMODE_Y = 2, Ii.BILLBOARDMODE_ALL = 7, Ii.BILLBOARDMODE_STRETCHED = 8, Ii.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let ai = !1;
    ai || (ai = !0, gi._ParseParticleSystem = Ii.Parse)
  },
  53815: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      SkyMaterial: () => sW,
      _MaxColorValueForRenderTarget: () => kW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41538),
      PW = OW(38235),
      LW = OW(41801),
      cW = OW(41861),
      wW = OW(53769),
      tW = OW(42635),
      ZW = OW(41604),
      xW = OW(38299),
      lW = OW(41889),
      AW = OW(41867),
      bW = OW(41853),
      jW = OW(41845);
    class UW extends LW.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function kW(WW) {
      switch (WW) {
        case wW.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case wW.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let sW = (() => {
      var WW;
      let iW, LW, wW, xW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW = cW.e,
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [],
        CW = [],
        XW = [],
        BW = [],
        qW = [],
        RW = [],
        GW = [],
        IW = [],
        aW = [],
        rW = [],
        zW = [],
        FW = [],
        QW = [],
        Wi = [],
        ii = [],
        Oi = [],
        mi = [],
        Ei = [],
        Ni = [],
        Pi = [],
        Li = [],
        ci = [];
      return WW = class extends uW {
        constructor(WW, iW) {
          super(WW, iW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, mW.g)(this, oW, 1), this.turbidity = ((0, mW.g)(this, dW), (0, mW.g)(this, eW, 10)), this.rayleigh = ((0, mW.g)(this, vW), (0, mW.g)(this, gW, 2)), this.mieCoefficient = ((0, mW.g)(this, DW), (0, mW.g)(this, VW, .005)), this.mieDirectionalG = ((0, mW.g)(this, pW), (0, mW.g)(this, fW, .8)), this.distance = ((0, mW.g)(this, CW), (0, mW.g)(this, XW, 500)), this.inclination = ((0, mW.g)(this, BW), (0, mW.g)(this, qW, .49)), this.azimuth = ((0, mW.g)(this, RW), (0, mW.g)(this, GW, .25)), this.sunPosition = ((0, mW.g)(this, IW), (0, mW.g)(this, aW, new PW.fA(0, 100, 0))), this.useSunPosition = ((0, mW.g)(this, rW), (0, mW.g)(this, zW, !1)), this.cameraOffset = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, PW.fA.Zero())), this.up = ((0, mW.g)(this, Wi), (0, mW.g)(this, ii, PW.fA.Up())), this.dithering = ((0, mW.g)(this, Oi), (0, mW.g)(this, mi, !1)), this.rawHdrOutput = ((0, mW.g)(this, Ei), (0, mW.g)(this, Ni, !1)), this.cloudiness = ((0, mW.g)(this, Pi), (0, mW.g)(this, Li, 0)), this._cameraPosition = ((0, mW.g)(this, ci), PW.fA.Zero()), this._skyOrientation = new PW.Quaternion
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
        isReadyForSubMesh(iW, OW) {
          const mW = OW._drawWrapper;
          if (this.isFrozen && mW.effect && mW._wasPreviouslyReady) return !0;
          OW.materialDefines || (OW.materialDefines = new UW);
          const EW = OW.materialDefines,
            NW = this.bD();
          if (this._isReadyForSubMesh(OW)) return !0;
          if ((0, jW.Z)(iW, NW, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, EW, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, jW.M)(iW, EW, !0, !1), EW.IMAGEPROCESSINGPOSTPROCESS !== NW.imageProcessingConfiguration.applyByPostProcess && EW.markAsMiscDirty(), EW.DITHER !== this.dithering && EW.markAsMiscDirty(), EW.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && EW.markAsMiscDirty(), EW.isDirty) {
            EW.markAsProcessed(), NW.resetCachedMaterial();
            const iW = new AW.e;
            EW.FOG && iW.addFallback(1, "FOG"), EW.IMAGEPROCESSINGPOSTPROCESS = NW.imageProcessingConfiguration.applyByPostProcess, EW.DITHER = this.dithering, EW.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const mW = [tW.g.PositionKind];
            EW.VERTEXCOLOR && mW.push(tW.g.ColorKind);
            const PW = "sky",
              LW = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, bW.d)(LW);
            const cW = EW.toString();
            OW.setEffect(NW.VA().createEffect(PW, {
              attributes: mW,
              uniformsNames: LW,
              uniformBuffersNames: [],
              samplers: [],
              defines: cW,
              fallbacks: iW,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, NW.VA()), EW, this._materialContext)
          }
          return !(!OW.effect || !OW.effect.isReady()) && (EW._renderId = NW.getRenderId(), mW._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(WW, iW, OW) {
          const mW = this.bD(),
            EW = OW.materialDefines;
          if (!EW) return;
          const NW = OW.effect;
          if (!NW) return;
          this._activeEffect = NW, this.bindOnlyWorldMatrix(WW), this._activeEffect.setMatrix("viewProjection", mW.getTransformMatrix()), this._mustRebind(mW, NW, OW) && ((0, bW.g)(NW, this, mW), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, jW.p)(EW, NW, mW)), mW.fogEnabled && iW.applyFog && mW.fogMode !== ZW.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", mW.getViewMatrix()), (0, jW.g)(mW, iW, this._activeEffect, this.rawHdrOutput);
          const LW = mW.activeCamera;
          if (LW) {
            const WW = LW.getWorldMatrix();
            this._cameraPosition.x = WW.m[12], this._cameraPosition.y = WW.m[13], this._cameraPosition.z = WW.m[14], this._activeEffect.setVector3("cameraPosition", PW.TmpVectors.fA[0].HJ(this._cameraPosition).yEW(mW.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const WW = mW.VA()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", kW(WW?.texture?.type))
          }
          if (!this.useSunPosition) {
            const WW = Math.PI * (this.inclination - .5),
              iW = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(iW) * Math.cos(WW), this.sunPosition.y = this.distance * Math.sin(-WW), this.sunPosition.z = this.distance * Math.sin(iW) * Math.cos(WW), PW.Quaternion.FromUnitVectorsToRef(PW.fA.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(iW, this._activeEffect, OW)
        }
        getAnimatables() {
          return []
        }
        dispose(WW) {
          super.dispose(WW)
        }
        clone(iW) {
          return NW.d.Clone((() => new WW(iW, this.bD())), this)
        }
        serialize() {
          const WW = super.serialize();
          return WW.customType = "BABYLON.SkyMaterial", WW
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(iW, OW, mW) {
          return NW.d.Parse((() => new WW(iW.name, OW)), iW, OW, mW)
        }
      }, (() => {
        const OW = "function" === typeof Symbol && Symbol.metadata ? Object.create(uW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, EW.M)()], LW = [(0, EW.M)()], wW = [(0, EW.M)()], xW = [(0, EW.M)()], sW = [(0, EW.M)()], MW = [(0, EW.M)()], KW = [(0, EW.M)()], SW = [(0, EW.M)()], YW = [(0, EW.K)()], yW = [(0, EW.M)()], TW = [(0, EW.K)()], JW = [(0, EW.K)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: WW => "luminance" in WW,
            get: WW => WW.luminance,
            set: (WW, iW) => {
              WW.luminance = iW
            }
          },
          metadata: OW
        }, oW, dW), (0, mW.e)(null, null, LW, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: WW => "turbidity" in WW,
            get: WW => WW.turbidity,
            set: (WW, iW) => {
              WW.turbidity = iW
            }
          },
          metadata: OW
        }, eW, vW), (0, mW.e)(null, null, wW, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: WW => "rayleigh" in WW,
            get: WW => WW.rayleigh,
            set: (WW, iW) => {
              WW.rayleigh = iW
            }
          },
          metadata: OW
        }, gW, DW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: WW => "mieCoefficient" in WW,
            get: WW => WW.mieCoefficient,
            set: (WW, iW) => {
              WW.mieCoefficient = iW
            }
          },
          metadata: OW
        }, VW, pW), (0, mW.e)(null, null, sW, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: WW => "mieDirectionalG" in WW,
            get: WW => WW.mieDirectionalG,
            set: (WW, iW) => {
              WW.mieDirectionalG = iW
            }
          },
          metadata: OW
        }, fW, CW), (0, mW.e)(null, null, MW, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: WW => "distance" in WW,
            get: WW => WW.distance,
            set: (WW, iW) => {
              WW.distance = iW
            }
          },
          metadata: OW
        }, XW, BW), (0, mW.e)(null, null, KW, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: WW => "inclination" in WW,
            get: WW => WW.inclination,
            set: (WW, iW) => {
              WW.inclination = iW
            }
          },
          metadata: OW
        }, qW, RW), (0, mW.e)(null, null, SW, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: WW => "azimuth" in WW,
            get: WW => WW.azimuth,
            set: (WW, iW) => {
              WW.azimuth = iW
            }
          },
          metadata: OW
        }, GW, IW), (0, mW.e)(null, null, YW, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: WW => "sunPosition" in WW,
            get: WW => WW.sunPosition,
            set: (WW, iW) => {
              WW.sunPosition = iW
            }
          },
          metadata: OW
        }, aW, rW), (0, mW.e)(null, null, yW, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSunPosition" in WW,
            get: WW => WW.useSunPosition,
            set: (WW, iW) => {
              WW.useSunPosition = iW
            }
          },
          metadata: OW
        }, zW, FW), (0, mW.e)(null, null, TW, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: WW => "cameraOffset" in WW,
            get: WW => WW.cameraOffset,
            set: (WW, iW) => {
              WW.cameraOffset = iW
            }
          },
          metadata: OW
        }, QW, Wi), (0, mW.e)(null, null, JW, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: WW => "up" in WW,
            get: WW => WW.up,
            set: (WW, iW) => {
              WW.up = iW
            }
          },
          metadata: OW
        }, ii, Oi), (0, mW.e)(null, null, hW, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: WW => "dithering" in WW,
            get: WW => WW.dithering,
            set: (WW, iW) => {
              WW.dithering = iW
            }
          },
          metadata: OW
        }, mi, Ei), (0, mW.e)(null, null, HW, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: WW => "rawHdrOutput" in WW,
            get: WW => WW.rawHdrOutput,
            set: (WW, iW) => {
              WW.rawHdrOutput = iW
            }
          },
          metadata: OW
        }, Ni, Pi), (0, mW.e)(null, null, nW, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: WW => "cloudiness" in WW,
            get: WW => WW.cloudiness,
            set: (WW, iW) => {
              WW.cloudiness = iW
            }
          },
          metadata: OW
        }, Li, ci), OW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OW
        })
      })(), WW._ShaderLoader = new lW.d((() => [OW.e(648).then((() => OW(64447))), OW.e(641).then((() => OW(64455)))]), (() => [OW.e(665).then((() => OW(64460))), OW.e(659).then((() => OW(64467)))])), WW
    })();
    (0, xW.h)("BABYLON.SkyMaterial", sW)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);