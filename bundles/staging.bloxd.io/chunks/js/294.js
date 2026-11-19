export const id = 294;
export const ids = [294];
export const modules = {
  40677: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(39231),
      AY = DY(40686);
    class IY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = DY, this.zDY = [], this._maxBlockCapacity = rY || 64, this._selectionContent = new FY.e(1024), this._creationFunc = YY
      }
      update(YY, rY, DY) {
        AY.e._CreateBlocks(YY, rY, DY, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      WDY(YY) {
        for (let rY = 0; rY < this.blocks.length; rY++) {
          this.blocks[rY].addEntry(YY)
        }
      }
      iN(YY) {
        for (let rY = 0; rY < this.blocks.length; rY++) {
          this.blocks[rY].removeEntry(YY)
        }
      }
      select(YY, rY) {
        this._selectionContent.reset();
        for (let DY = 0; DY < this.blocks.length; DY++) {
          this.blocks[DY].select(YY, this._selectionContent, rY)
        }
        return rY ? this._selectionContent.concat(this.zDY) : this._selectionContent.concatWithNoDuplicate(this.zDY), this._selectionContent
      }
      intersects(YY, rY, DY) {
        this._selectionContent.reset();
        for (let FY = 0; FY < this.blocks.length; FY++) {
          this.blocks[FY].intersects(YY, rY, this._selectionContent, DY)
        }
        return DY ? this._selectionContent.concat(this.zDY) : this._selectionContent.concatWithNoDuplicate(this.zDY), this._selectionContent
      }
      intersectsRay(YY) {
        this._selectionContent.reset();
        for (let rY = 0; rY < this.blocks.length; rY++) {
          this.blocks[rY].intersectsRay(YY, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.zDY), this._selectionContent
      }
    }
    IY.CreationFuncForMeshes = (YY, rY) => {
      const DY = YY.oB();
      !YY.isBlocked && DY.boundingBox.intersectsMinMax(rY.lDY, rY.SDY) && rY.entries.push(YY)
    }, IY.CreationFuncForSubMeshes = (YY, rY) => {
      YY.oB().boundingBox.intersectsMinMax(rY.lDY, rY.SDY) && rY.entries.push(YY)
    }
  },
  40686: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(36524),
      AY = DY(39424);
    class IY {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.entries = [], this.ZDY = new Array, this._capacity = DY, this._depth = FY, this._maxDepth = AY, this._creationFunc = IY, this._minPoint = YY, this._maxPoint = rY, this.ZDY.push(YY.clone()), this.ZDY.push(rY.clone()), this.ZDY.push(YY.clone()), this.ZDY[2].x = rY.x, this.ZDY.push(YY.clone()), this.ZDY[3].y = rY.y, this.ZDY.push(YY.clone()), this.ZDY[4].z = rY.z, this.ZDY.push(rY.clone()), this.ZDY[5].z = YY.z, this.ZDY.push(rY.clone()), this.ZDY[6].x = YY.x, this.ZDY.push(rY.clone()), this.ZDY[7].y = YY.y
      }
      get gu() {
        return this._capacity
      }
      get lDY() {
        return this._minPoint
      }
      get SDY() {
        return this._maxPoint
      }
      addEntry(YY) {
        if (this.blocks)
          for (let rY = 0; rY < this.blocks.length; rY++) {
            this.blocks[rY].addEntry(YY)
          } else this._creationFunc(YY, this), this.entries.length > this.gu && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(YY) {
        if (this.blocks) {
          for (let rY = 0; rY < this.blocks.length; rY++) {
            this.blocks[rY].removeEntry(YY)
          }
          return
        }
        const rY = this.entries.indexOf(YY);
        rY > -1 && this.entries.splice(rY, 1)
      }
      addEntries(YY) {
        for (let rY = 0; rY < YY.length; rY++) {
          const DY = YY[rY];
          this.addEntry(DY)
        }
      }
      select(YY, rY, DY) {
        if (AY.e.IsInFrustum(this.ZDY, YY)) {
          if (this.blocks) {
            for (let FY = 0; FY < this.blocks.length; FY++) {
              this.blocks[FY].select(YY, rY, DY)
            }
            return
          }
          DY ? rY.concat(this.entries) : rY.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(YY, rY, DY, FY) {
        if (AY.e.IntersectsSphere(this._minPoint, this._maxPoint, YY, rY)) {
          if (this.blocks) {
            for (let AY = 0; AY < this.blocks.length; AY++) {
              this.blocks[AY].intersects(YY, rY, DY, FY)
            }
            return
          }
          FY ? DY.concat(this.entries) : DY.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(YY, rY) {
        if (YY.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let DY = 0; DY < this.blocks.length; DY++) {
              this.blocks[DY].intersectsRay(YY, rY)
            }
            return
          }
          rY.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        IY._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(YY, rY, DY, AY, RY, OY, gY, aY) {
        gY.blocks = new Array;
        const vY = new FY.r((rY.x - YY.x) / 2, (rY.y - YY.y) / 2, (rY.z - YY.z) / 2);
        for (let FY = 0; FY < 2; FY++)
          for (let rY = 0; rY < 2; rY++)
            for (let uY = 0; uY < 2; uY++) {
              const sY = YY.add(vY.multiplyByFloats(FY, rY, uY)),
                iY = YY.add(vY.multiplyByFloats(FY + 1, rY + 1, uY + 1)),
                yY = new IY(sY, iY, AY, RY + 1, OY, aY);
              yY.addEntries(DY), gY.blocks.push(yY)
            }
      }
    }
  },
  40693: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY
    });
    var FY = DY(39217),
      AY = DY(36524),
      IY = DY(39554),
      RY = DY(40624),
      OY = DY(39296),
      gY = DY(36546),
      aY = DY(40677);
    class vY {
      constructor(YY) {
        this.name = OY.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new RY.C(AY.r.Zero(), new AY.r(1, 1, 1)), (YY = YY || gY.d.LastCreatedScene) && (this.LQ = YY, this.LQ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.LQ.getActiveSubMeshCandidates = YY => this.getActiveSubMeshCandidates(YY), this.LQ.getCollidingSubMeshCandidates = (YY, rY) => this.getCollidingSubMeshCandidates(YY, rY), this.LQ.getIntersectingSubMeshCandidates = (YY, rY) => this.getIntersectingSubMeshCandidates(YY, rY))
      }
      register() {
        this.LQ.onMeshRemovedObservable.add((YY => {
          const rY = this.LQ.selectionOctree;
          if (void 0 !== rY && null !== rY) {
            const DY = rY.zDY.indexOf(YY); - 1 !== DY && rY.zDY.splice(DY, 1)
          }
        })), this.LQ.onMeshImportedObservable.add((YY => {
          const rY = this.LQ.selectionOctree;
          void 0 !== rY && null !== rY && rY.WDY(YY)
        }))
      }
      getActiveMeshCandidates() {
        return this.LQ.MDY?.select(this.LQ.frustumPlanes) || this.LQ._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(YY) {
        if (YY._submeshesOctree && YY.useOctreeForRenderingSelection) {
          return YY._submeshesOctree.select(this.LQ.frustumPlanes)
        }
        return this.LQ._getDefaultSubMeshCandidates(YY)
      }
      getIntersectingSubMeshCandidates(YY, rY) {
        if (YY._submeshesOctree && YY.useOctreeForPicking) {
          RY.C.TransformToRef(rY, YY.getWorldMatrix(), this._tempRay);
          return YY._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.LQ._getDefaultSubMeshCandidates(YY)
      }
      getCollidingSubMeshCandidates(YY, rY) {
        if (YY._submeshesOctree && YY.useOctreeForCollisions) {
          const DY = rY._velocityWorldLength + Math.max(rY._radius.x, rY._radius.y, rY._radius.z);
          return YY._submeshesOctree.intersects(rY._basePointWorld, DY)
        }
        return this.LQ._getDefaultSubMeshCandidates(YY)
      }
      rebuild() {}
      dispose() {}
    }
    let uY = !1;
    uY || (uY = !0, FY.g.prototype.createOrUpdateSelectionOctree = function() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        DY = this._getComponent(OY.c.NAME_OCTREE);
      DY || (DY = new vY(this), this.ADY(DY)), this.MDY || (this.MDY = new aY.e(aY.e.CreationFuncForMeshes, YY, rY));
      const FY = this.getWorldExtends();
      return this.MDY.update(FY.min, FY.max, this.meshes), this.MDY
    }, Object.defineProperty(FY.g.prototype, "selectionOctree", {
      get: function() {
        return this.MDY
      },
      enumerable: !0,
      configurable: !0
    }), IY.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const DY = this.hT();
      let FY = DY._getComponent(OY.c.NAME_OCTREE);
      FY || (FY = new vY(DY), DY.ADY(FY)), this._submeshesOctree || (this._submeshesOctree = new aY.e(aY.e.CreationFuncForSubMeshes, YY, rY)), this.computeWorldMatrix(!0);
      const AY = this.oB().boundingBox;
      return this._submeshesOctree.update(AY.minimumWorld, AY.maximumWorld, this.qm), this._submeshesOctree
    })
  },
  40624: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => eY,
      C: () => uY,
      e: () => HY,
      g: () => QY,
      j: () => yY,
      m: () => iY,
      p: () => cY,
      t: () => BY,
      v: () => TY,
      z: () => NY
    });
    var FY = DY(36533),
      AY = DY(36524),
      IY = DY(36539),
      RY = DY(39419),
      OY = DY(39261),
      gY = DY(36546),
      aY = DY(39316);
    const vY = {
      internalPickerForMesh: void 0
    };
    class uY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FY.c;
        this.origin = YY, this.direction = rY, this.length = DY, this.epsilon = AY
      }
      clone() {
        return new uY(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const FY = uY._TmpVector3[0].p_(YY.x - DY, YY.y - DY, YY.z - DY),
          AY = uY._TmpVector3[1].p_(rY.x + DY, rY.y + DY, rY.z + DY);
        let IY, RY, OY, gY, aY = 0,
          vY = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < FY.x || this.origin.x > AY.x) return !1
        } else if (IY = 1 / this.direction.x, RY = (FY.x - this.origin.x) * IY, OY = (AY.x - this.origin.x) * IY, OY === -1 / 0 && (OY = 1 / 0), RY > OY && (gY = RY, RY = OY, OY = gY), aY = Math.max(RY, aY), vY = Math.min(OY, vY), aY > vY) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < FY.y || this.origin.y > AY.y) return !1
        } else if (IY = 1 / this.direction.y, RY = (FY.y - this.origin.y) * IY, OY = (AY.y - this.origin.y) * IY, OY === -1 / 0 && (OY = 1 / 0), RY > OY && (gY = RY, RY = OY, OY = gY), aY = Math.max(RY, aY), vY = Math.min(OY, vY), aY > vY) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < FY.z || this.origin.z > AY.z) return !1
        } else if (IY = 1 / this.direction.z, RY = (FY.z - this.origin.z) * IY, OY = (AY.z - this.origin.z) * IY, OY === -1 / 0 && (OY = 1 / 0), RY > OY && (gY = RY, RY = OY, OY = gY), aY = Math.max(RY, aY), vY = Math.min(OY, vY), aY > vY) return !1;
        return !0
      }
      intersectsBox(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(YY.minimum, YY.maximum, rY)
      }
      intersectsSphere(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = YY.center.x - this.origin.x,
          FY = YY.center.y - this.origin.y,
          AY = YY.center.z - this.origin.z,
          IY = DY * DY + FY * FY + AY * AY,
          RY = YY.radius + rY,
          OY = RY * RY;
        if (IY <= OY) return !0;
        const gY = DY * this.direction.x + FY * this.direction.y + AY * this.direction.z;
        if (gY < 0) return !1;
        return IY - gY * gY <= OY
      }
      intersectsTriangle(YY, rY, DY) {
        const FY = uY._TmpVector3[0],
          IY = uY._TmpVector3[1],
          OY = uY._TmpVector3[2],
          gY = uY._TmpVector3[3],
          aY = uY._TmpVector3[4];
        rY.subtractToRef(YY, FY), DY.subtractToRef(YY, IY), AY.r.CrossToRef(this.direction, IY, OY);
        const vY = AY.r.Dot(FY, OY);
        if (0 === vY) return null;
        const sY = 1 / vY;
        this.origin.subtractToRef(YY, gY);
        const iY = AY.r.Dot(gY, OY) * sY;
        if (iY < -this.epsilon || iY > 1 + this.epsilon) return null;
        AY.r.CrossToRef(gY, FY, aY);
        const yY = AY.r.Dot(this.direction, aY) * sY;
        if (yY < -this.epsilon || iY + yY > 1 + this.epsilon) return null;
        const QY = AY.r.Dot(IY, aY) * sY;
        return QY > this.length || QY < 0 ? null : new RY.c(1 - iY - yY, iY, QY)
      }
      intersectsPlane(YY) {
        let rY;
        const DY = AY.r.Dot(YY.normal, this.direction);
        if (Math.abs(DY) < 9.99999997475243e-7) return null;
        {
          const FY = AY.r.Dot(YY.normal, this.origin);
          return rY = (-YY.d - FY) / DY, rY < 0 ? rY < -9.99999997475243e-7 ? null : 0 : rY
        }
      }
      intersectsAxis(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (YY) {
          case "y": {
            const YY = (this.origin.y - rY) / this.direction.y;
            return YY > 0 ? null : new AY.r(this.origin.x + this.direction.x * -YY, rY, this.origin.z + this.direction.z * -YY)
          }
          case "x": {
            const YY = (this.origin.x - rY) / this.direction.x;
            return YY > 0 ? null : new AY.r(rY, this.origin.y + this.direction.y * -YY, this.origin.z + this.direction.z * -YY)
          }
          case "z": {
            const YY = (this.origin.z - rY) / this.direction.z;
            return YY > 0 ? null : new AY.r(this.origin.x + this.direction.x * -YY, this.origin.y + this.direction.y * -YY, rY)
          }
          default:
            return null
        }
      }
      FFY(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          IY = arguments.length > 4 ? arguments[4] : void 0,
          RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const OY = AY.n.Matrix[0];
        return YY.getWorldMatrix().invertToRef(OY), this._tmpRay ? uY.TransformToRef(this, OY, this._tmpRay) : this._tmpRay = uY.Transform(this, OY), YY.intersects(this._tmpRay, rY, DY, FY, IY, RY)
      }
      intersectsMeshes(YY, rY, DY) {
        DY ? DY.length = 0 : DY = [];
        for (let FY = 0; FY < YY.length; FY++) {
          const AY = this.FFY(YY[FY], rY);
          AY.hit && DY.push(AY)
        }
        return DY.sort(this._comparePickingInfo), DY
      }
      _comparePickingInfo(YY, rY) {
        return YY.distance < rY.distance ? -1 : YY.distance > rY.distance ? 1 : 0
      }
      intersectionSegment(YY, rY, DY) {
        const FY = this.origin,
          IY = AY.n.xy[0],
          RY = AY.n.xy[1],
          OY = AY.n.xy[2],
          gY = AY.n.xy[3];
        rY.subtractToRef(YY, IY), this.direction.scaleToRef(uY._Rayl, OY), FY.addToRef(OY, RY), YY.subtractToRef(FY, gY);
        const aY = AY.r.Dot(IY, IY),
          vY = AY.r.Dot(IY, OY),
          sY = AY.r.Dot(OY, OY),
          iY = AY.r.Dot(IY, gY),
          yY = AY.r.Dot(OY, gY),
          QY = aY * sY - vY * vY;
        let oY, WY, EY = QY,
          mY = QY;
        QY < uY._Smallnum ? (oY = 0, EY = 1, WY = yY, mY = sY) : (oY = vY * yY - sY * iY, WY = aY * yY - vY * iY, oY < 0 ? (oY = 0, WY = yY, mY = sY) : oY > EY && (oY = EY, WY = yY + vY, mY = sY)), WY < 0 ? (WY = 0, -iY < 0 ? oY = 0 : -iY > aY ? oY = EY : (oY = -iY, EY = aY)) : WY > mY && (WY = mY, -iY + vY < 0 ? oY = 0 : -iY + vY > aY ? oY = EY : (oY = -iY + vY, EY = aY));
        const VY = Math.abs(oY) < uY._Smallnum ? 0 : oY / EY,
          SY = Math.abs(WY) < uY._Smallnum ? 0 : WY / mY,
          lY = AY.n.xy[4];
        OY.scaleToRef(SY, lY);
        const TY = AY.n.xy[5];
        IY.scaleToRef(VY, TY), TY.addInPlace(gY);
        const eY = AY.n.xy[6];
        TY.subtractToRef(lY, eY);
        return SY > 0 && SY <= this.length && eY.lengthSquared() < DY * DY ? TY.length() : -1
      }
      update(YY, rY, DY, FY, IY, RY, OY) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          uY._RayDistant || (uY._RayDistant = uY.Zero()), uY._RayDistant.unprojectRayToRef(YY, rY, DY, FY, AY.e.IdentityReadOnly, RY, OY);
          const gY = AY.n.Matrix[0];
          IY.invertToRef(gY), uY.TransformToRef(uY._RayDistant, gY, this)
        } else this.unprojectRayToRef(YY, rY, DY, FY, IY, RY, OY);
        return this
      }
      static Zero() {
        return new uY(AY.r.Zero(), AY.r.Zero())
      }
      static CreateNew(YY, rY, DY, FY, AY, IY, RY) {
        return uY.Zero().update(YY, rY, DY, FY, AY, IY, RY)
      }
      static CreateNewFromTo(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.e.IdentityReadOnly;
        const FY = new uY(new AY.r(0, 0, 0), new AY.r(0, 0, 0));
        return uY.CreateFromToToRef(YY, rY, FY, DY)
      }
      static CreateFromToToRef(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : AY.e.IdentityReadOnly;
        DY.origin.brY(YY);
        const IY = rY.subtractToRef(YY, DY.direction),
          RY = Math.sqrt(IY.x * IY.x + IY.y * IY.y + IY.z * IY.z);
        return DY.length = RY, DY.direction.normalize(), uY.TransformToRef(DY, FY, DY)
      }
      static Transform(YY, rY) {
        const DY = new uY(new AY.r(0, 0, 0), new AY.r(0, 0, 0));
        return uY.TransformToRef(YY, rY, DY), DY
      }
      static TransformToRef(YY, rY, DY) {
        AY.r.TransformCoordinatesToRef(YY.origin, rY, DY.origin), AY.r.TransformNormalToRef(YY.direction, rY, DY.direction), DY.length = YY.length, DY.epsilon = YY.epsilon;
        const FY = DY.direction,
          IY = FY.length();
        if (0 !== IY && 1 !== IY) {
          const YY = 1 / IY;
          FY.x *= YY, FY.y *= YY, FY.z *= YY, DY.length *= IY
        }
        return DY
      }
      unprojectRayToRef(YY, rY, DY, FY, IY, RY, OY) {
        const aY = AY.n.Matrix[0];
        IY.multiplyToRef(RY, aY), aY.multiplyToRef(OY, aY), aY.invert();
        const vY = gY.d.LastCreatedEngine,
          uY = AY.n.xy[0];
        uY.x = YY / DY * 2 - 1, uY.y = -(rY / FY * 2 - 1), uY.z = vY?.QDY ? 1 : vY?.isNDCHalfZRange ? 0 : -1;
        const sY = AY.n.xy[1].p_(uY.x, uY.y, 1 - 1e-8),
          iY = AY.n.xy[2],
          yY = AY.n.xy[3];
        AY.r.TransformCoordinatesToRef(uY, aY, iY), AY.r.TransformCoordinatesToRef(sY, aY, yY), this.origin.brY(iY), yY.subtractToRef(iY, this.direction), this.direction.normalize()
      }
    }

    function sY(YY, rY, DY, FY, AY) {
      let IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const RY = uY.Zero();
      return iY(YY, rY, DY, FY, RY, AY, IY), RY
    }

    function iY(YY, rY, DY, FY, IY, RY) {
      let OY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const aY = YY.ky();
      if (!RY && !(RY = YY.activeCamera) && !(RY = YY.cameraToUseForPointers)) return YY;
      const vY = RY.viewport,
        uY = aY.getRenderHeight(),
        {
          x: sY,
          y: iY,
          width: yY,
          height: QY
        } = vY.toGlobal(aY.getRenderWidth(), uY),
        oY = 1 / aY.getHardwareScalingLevel();
      return rY = rY * oY - sY, DY = DY * oY - (uY - iY - QY), IY.update(rY, DY, yY, QY, FY || AY.e.IdentityReadOnly, OY ? AY.e.IdentityReadOnly : RY.getViewMatrix(), RY.getProjectionMatrix(), gY), YY
    }

    function yY(YY, rY, DY, FY) {
      const AY = uY.Zero();
      return QY(YY, rY, DY, AY, FY), AY
    }

    function QY(YY, rY, DY, FY, IY) {
      if (!OY.c) return YY;
      const RY = YY.ky();
      if (!IY && !(IY = YY.activeCamera) && !(IY = YY.cameraToUseForPointers)) throw new Error("Active camera not set");
      const gY = IY.viewport,
        aY = RY.getRenderHeight(),
        {
          x: vY,
          y: uY,
          width: sY,
          height: iY
        } = gY.toGlobal(RY.getRenderWidth(), aY),
        yY = AY.e.Identity(),
        QY = 1 / RY.getHardwareScalingLevel();
      return rY = rY * QY - vY, DY = DY * QY - (aY - uY - iY), FY.update(rY, DY, sY, iY, yY, yY, IY.getProjectionMatrix()), YY
    }

    function oY(YY, rY, DY, FY, AY, IY, RY, OY) {
      return WY(YY, DY, FY, rY(FY, DY.enableDistantPicking), AY, IY, RY, OY)
    }

    function WY(YY, rY, DY, FY, AY, IY, RY, OY) {
      const gY = rY.intersects(FY, AY, RY, IY, DY, OY);
      return gY && gY.hit ? !AY && null != YY && gY.distance >= YY.distance ? null : gY : null
    }

    function EY(YY, rY) {
      return "InstancedLinesMesh" === YY || "LinesMesh" === YY ? rY.intersectionThreshold : 0
    }

    function mY(YY) {
      const rY = YY.getClassName();
      if ("GreasedLineMesh" === rY) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const DY = YY.rawBoundingInfo;
      return {
        rawBoundingInfo: DY,
        intersectionThreshold: DY ? EY(rY, YY) : 0
      }
    }

    function VY(YY, rY, DY, FY, AY) {
      const IY = YY(DY, rY.enableDistantPicking);
      return IY.intersectsSphere(FY.bDY, AY) && IY.intersectsBox(FY.boundingBox, AY) ? IY : null
    }

    function SY(YY, rY, DY, FY, IY, RY) {
      let gY = null;
      const aY = !!(YY.activeCameras && YY.activeCameras.length > 1 && YY.cameraToUseForPointers !== YY.activeCamera),
        uY = YY.cameraToUseForPointers || YY.activeCamera,
        sY = vY.internalPickerForMesh || oY,
        iY = sY === oY;
      for (let OY = 0; OY < YY.meshes.length; OY++) {
        const vY = YY.meshes[OY];
        if (DY) {
          if (!DY(vY, -1)) continue
        } else if (!vY.isEnabled() || !vY.isVisible || !vY.Yo) continue;
        const yY = aY && vY.isWorldMatrixCameraDependent(),
          QY = vY.computeWorldMatrix(yY, uY);
        if (vY.hasThinInstances && vY.MYY) {
          const YY = sY(gY, rY, vY, QY, !0, !0, RY);
          if (YY) {
            if (IY) return YY;
            const {
              rawBoundingInfo: OY,
              intersectionThreshold: aY
            } = mY(vY), uY = vY._thinInstanceDataStorage.matrixData;
            if (uY) {
              const YY = AY.n.Matrix[0],
                yY = AY.n.Matrix[1],
                oY = Math.min(vY.R_, uY.length >> 4);
              for (let EY = 0; EY < oY; EY++) {
                if (DY && !DY(vY, EY)) continue;
                AY.e.FromArrayToRef(uY, EY << 4, YY), YY.multiplyToRef(QY, yY);
                const oY = iY && OY ? VY(rY, vY, yY, OY, aY) : null;
                if (iY && OY && !oY) continue;
                const mY = iY && oY ? WY(gY, vY, yY, oY, FY, IY, RY, !0) : sY(gY, rY, vY, yY, FY, IY, RY, !0);
                if (mY && (gY = mY, gY.thinInstanceIndex = EY, FY)) return gY
              }
            }
          }
        } else {
          const YY = sY(gY, rY, vY, QY, FY, IY, RY);
          if (YY && (gY = YY, FY)) return gY
        }
      }
      return gY || new OY.c
    }

    function lY(YY, rY, DY, FY) {
      if (!OY.c) return null;
      const IY = [],
        RY = !!(YY.activeCameras && YY.activeCameras.length > 1 && YY.cameraToUseForPointers !== YY.activeCamera),
        gY = YY.cameraToUseForPointers || YY.activeCamera,
        aY = vY.internalPickerForMesh || oY,
        uY = aY === oY;
      for (let OY = 0; OY < YY.meshes.length; OY++) {
        const vY = YY.meshes[OY];
        if (DY) {
          if (!DY(vY, -1)) continue
        } else if (!vY.isEnabled() || !vY.isVisible || !vY.Yo) continue;
        const sY = RY && vY.isWorldMatrixCameraDependent(),
          iY = vY.computeWorldMatrix(sY, gY);
        if (vY.hasThinInstances && vY.MYY) {
          if (aY(null, rY, vY, iY, !0, !0, FY)) {
            const {
              rawBoundingInfo: YY,
              intersectionThreshold: RY
            } = mY(vY), OY = vY._thinInstanceDataStorage.matrixData;
            if (OY) {
              const gY = AY.n.Matrix[0],
                sY = AY.n.Matrix[1],
                yY = Math.min(vY.R_, OY.length >> 4);
              for (let QY = 0; QY < yY; QY++) {
                if (DY && !DY(vY, QY)) continue;
                AY.e.FromArrayToRef(OY, QY << 4, gY), gY.multiplyToRef(iY, sY);
                const yY = uY && YY ? VY(rY, vY, sY, YY, RY) : null;
                if (uY && YY && !yY) continue;
                const oY = uY && yY ? WY(null, vY, sY, yY, !1, !1, FY, !0) : aY(null, rY, vY, sY, !1, !1, FY, !0);
                oY && (oY.thinInstanceIndex = QY, IY.push(oY))
              }
            }
          }
        } else {
          const YY = aY(null, rY, vY, iY, !1, !1, FY);
          YY && IY.push(YY)
        }
      }
      return IY
    }

    function TY(YY, rY, DY, FY, IY, RY) {
      if (!OY.c) return null;
      const gY = SY(YY, (FY => (YY._tempPickingRay || (YY._tempPickingRay = uY.Zero()), iY(YY, rY, DY, FY, YY._tempPickingRay, RY || null), YY._tempPickingRay)), FY, IY, !0);
      return gY && (gY.ray = sY(YY, rY, DY, AY.e.Identity(), RY || null)), gY
    }

    function eY(YY, rY, DY, FY, IY, RY, OY) {
      const gY = SY(YY, ((FY, AY) => (YY._tempPickingRay || (YY._tempPickingRay = uY.Zero()), iY(YY, rY, DY, FY, YY._tempPickingRay, RY || null, !1, AY), YY._tempPickingRay)), FY, IY, !1, OY);
      return gY && (gY.ray = sY(YY, rY, DY, AY.e.Identity(), RY || null)), gY
    }

    function NY(YY, rY, DY, FY, IY) {
      const RY = SY(YY, (DY => (YY._pickWithRayInverseMatrix || (YY._pickWithRayInverseMatrix = AY.e.Identity()), DY.invertToRef(YY._pickWithRayInverseMatrix), YY._cachedRayForTransform || (YY._cachedRayForTransform = uY.Zero()), uY.TransformToRef(rY, YY._pickWithRayInverseMatrix, YY._cachedRayForTransform), YY._cachedRayForTransform)), DY, FY, !1, IY);
      return RY && (RY.ray = rY), RY
    }

    function BY(YY, rY, DY, FY, AY, IY) {
      return lY(YY, (FY => sY(YY, rY, DY, FY, AY || null)), FY, IY)
    }

    function cY(YY, rY, DY, FY) {
      return lY(YY, (DY => (YY._pickWithRayInverseMatrix || (YY._pickWithRayInverseMatrix = AY.e.Identity()), DY.invertToRef(YY._pickWithRayInverseMatrix), YY._cachedRayForTransform || (YY._cachedRayForTransform = uY.Zero()), uY.TransformToRef(rY, YY._pickWithRayInverseMatrix, YY._cachedRayForTransform), YY._cachedRayForTransform)), DY, FY)
    }

    function KY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        FY = arguments.length > 3 ? arguments[3] : void 0,
        IY = arguments.length > 4 ? arguments[4] : void 0;
      FY || (FY = YY.getWorldMatrix()), rY.length = DY, IY ? rY.origin.brY(IY) : rY.origin.brY(YY.position);
      const RY = AY.n.xy[2];
      RY.set(0, 0, YY._scene.useRightHandedSystem ? -1 : 1);
      const OY = AY.n.xy[3];
      return AY.r.TransformNormalToRef(RY, FY, OY), AY.r.NormalizeToRef(OY, rY.direction), rY
    }

    function HY(YY, rY) {
      rY && (rY.prototype.getForwardRay = function() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        return KY(this, new uY(AY.r.Zero(), AY.r.Zero(), YY), YY, rY, DY)
      }, rY.prototype.getForwardRayToRef = function(YY) {
        return KY(this, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), YY && (aY.b._IsPickingAvailable = !0, YY.prototype.createPickingRay = function(YY, rY, DY, FY) {
        return sY(this, YY, rY, DY, FY, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    uY._TmpVector3 = (0, IY.c)(6, AY.r.Zero), uY._RayDistant = uY.Zero(), uY._Smallnum = 1e-8, uY._Rayl = 1e9
  },
  40617: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY.C
    });
    var FY = DY(39217),
      AY = DY(39342),
      IY = DY(40624);
    let RY = !1;
    RY || (RY = !0, (0, IY.e)(FY.g, AY.e), FY.g.prototype.createPickingRayToRef = function(YY, rY, DY, FY, AY) {
      let RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, IY.m)(this, YY, rY, DY, FY, AY, RY, OY)
    }, FY.g.prototype.createPickingRayInCameraSpace = function(YY, rY, DY) {
      return (0, IY.j)(this, YY, rY, DY)
    }, FY.g.prototype.createPickingRayInCameraSpaceToRef = function(YY, rY, DY, FY) {
      return (0, IY.g)(this, YY, rY, DY, FY)
    }, FY.g.prototype.pickWithBoundingInfo = function(YY, rY, DY, FY, AY) {
      return (0, IY.v)(this, YY, rY, DY, FY, AY)
    }, FY.g.prototype.Ps = function(YY, rY, DY, FY, AY, RY) {
      let OY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, IY.B)(this, YY, rY, DY, FY, AY, RY, OY)
    }, FY.g.prototype.pickWithRay = function(YY, rY, DY, FY) {
      return (0, IY.z)(this, YY, rY, DY, FY)
    }, FY.g.prototype.multiPick = function(YY, rY, DY, FY, AY) {
      return (0, IY.t)(this, YY, rY, DY, FY, AY)
    }, FY.g.prototype.multiPickWithRay = function(YY, rY, DY) {
      return (0, IY.p)(this, YY, rY, DY)
    })
  },
  40633: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(39387),
      OY = DY(40636),
      gY = DY(39347),
      aY = DY(36569);
    let vY = (() => {
        var YY;
        let rY, DY, gY, aY, vY, uY, sY, iY, yY = OY.d,
          QY = [],
          oY = [],
          WY = [],
          EY = [],
          mY = [],
          VY = [],
          SY = [],
          lY = [],
          TY = [],
          eY = [],
          NY = [],
          BY = [],
          cY = [];
        return YY = class extends yY {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(YY) {
            this._shadowFrustumSize = YY, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(YY) {
            this._shadowOrthoScale = YY, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(YY) {
            this._orthoLeft = YY
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(YY) {
            this._orthoRight = YY
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(YY) {
            this._orthoTop = YY
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(YY) {
            this._orthoBottom = YY
          }
          constructor(YY, rY, DY, AY) {
            super(YY, DY, AY), this._shadowFrustumSize = ((0, FY.j)(this, QY), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, FY.j)(this, oY, !0), this.autoCalcShadowZBounds = ((0, FY.j)(this, WY), (0, FY.j)(this, EY, !1)), this._orthoLeft = ((0, FY.j)(this, mY), (0, FY.j)(this, VY, Number.MAX_VALUE)), this._orthoRight = ((0, FY.j)(this, SY), (0, FY.j)(this, lY, Number.MIN_VALUE)), this._orthoTop = ((0, FY.j)(this, TY), (0, FY.j)(this, eY, Number.MIN_VALUE)), this._orthoBottom = ((0, FY.j)(this, NY), (0, FY.j)(this, BY, Number.MAX_VALUE)), (0, FY.j)(this, cY), this.position = rY.scale(-1), this.direction = rY
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return RY.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(YY, rY, DY) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(YY) : this._setDefaultAutoExtendShadowProjectionMatrix(YY, rY, DY)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(YY) {
            const rY = this.hT().activeCamera;
            IY.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : rY ? rY.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : rY ? rY.maxZ : 1e4, YY, this.hT().ky().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(YY, rY, DY) {
            const FY = this.hT().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const YY = IY.r.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let FY = Number.MAX_VALUE,
                AY = -Number.MAX_VALUE;
              for (let RY = 0; RY < DY.length; RY++) {
                const OY = DY[RY];
                if (!OY) continue;
                const gY = OY.oB().boundingBox;
                for (let DY = 0; DY < gY.vectorsWorld.length; DY++) IY.r.TransformCoordinatesToRef(gY.vectorsWorld[DY], rY, YY), YY.x < this._orthoLeft && (this._orthoLeft = YY.x), YY.y < this._orthoBottom && (this._orthoBottom = YY.y), YY.x > this._orthoRight && (this._orthoRight = YY.x), YY.y > this._orthoTop && (this._orthoTop = YY.y), this.autoCalcShadowZBounds && (YY.z < FY && (FY = YY.z), YY.z > AY && (AY = YY.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = FY, this._shadowMaxZ = AY)
            }
            const AY = this._orthoRight - this._orthoLeft,
              RY = this._orthoTop - this._orthoBottom,
              OY = void 0 !== this.shadowMinZ ? this.shadowMinZ : FY?.minZ || 0,
              gY = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : FY?.maxZ || 1e4,
              aY = this.hT().ky().QDY;
            IY.e.OrthoOffCenterLHToRef(this._orthoLeft - AY * this.shadowOrthoScale, this._orthoRight + AY * this.shadowOrthoScale, this._orthoBottom - RY * this.shadowOrthoScale, this._orthoTop + RY * this.shadowOrthoScale, aY ? gY : OY, aY ? OY : gY, YY, this.hT().ky().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(YY, rY) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, rY), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, rY), this)
          }
          transferToNodeMaterialEffect(YY, rY) {
            return this.computeTransformedInformation() ? (YY.setFloat3(rY, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (YY.setFloat3(rY, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(YY) {
            const rY = this._scene.ky();
            return !rY.QDY && rY.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(YY) {
            const rY = this._scene.ky();
            return rY.QDY && rY.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(YY, rY) {
            YY["DIRLIGHT" + rY] = !0
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(yY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.M)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], vY = [(0, AY.M)("orthoLeft")], uY = [(0, AY.M)("orthoRight")], sY = [(0, AY.M)("orthoTop")], iY = [(0, AY.M)("orthoBottom")], (0, FY.i)(YY, null, rY, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: YY => "shadowFrustumSize" in YY,
              get: YY => YY.shadowFrustumSize
            },
            metadata: IY
          }, null, QY), (0, FY.i)(YY, null, DY, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: YY => "shadowOrthoScale" in YY,
              get: YY => YY.shadowOrthoScale
            },
            metadata: IY
          }, null, QY), (0, FY.i)(null, null, gY, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: YY => "autoUpdateExtends" in YY,
              get: YY => YY.autoUpdateExtends,
              set: (YY, rY) => {
                YY.autoUpdateExtends = rY
              }
            },
            metadata: IY
          }, oY, WY), (0, FY.i)(null, null, aY, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: YY => "autoCalcShadowZBounds" in YY,
              get: YY => YY.autoCalcShadowZBounds,
              set: (YY, rY) => {
                YY.autoCalcShadowZBounds = rY
              }
            },
            metadata: IY
          }, EY, mY), (0, FY.i)(null, null, vY, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: YY => "_orthoLeft" in YY,
              get: YY => YY._orthoLeft,
              set: (YY, rY) => {
                YY._orthoLeft = rY
              }
            },
            metadata: IY
          }, VY, SY), (0, FY.i)(null, null, uY, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: YY => "_orthoRight" in YY,
              get: YY => YY._orthoRight,
              set: (YY, rY) => {
                YY._orthoRight = rY
              }
            },
            metadata: IY
          }, lY, TY), (0, FY.i)(null, null, sY, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: YY => "_orthoTop" in YY,
              get: YY => YY._orthoTop,
              set: (YY, rY) => {
                YY._orthoTop = rY
              }
            },
            metadata: IY
          }, eY, NY), (0, FY.i)(null, null, iY, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: YY => "_orthoBottom" in YY,
              get: YY => YY._orthoBottom,
              set: (YY, rY) => {
                YY._orthoBottom = rY
              }
            },
            metadata: IY
          }, BY, cY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      uY = !1;
    uY || (uY = !0, gY.b.AddNodeConstructor("Light_Type_1", ((YY, rY) => () => new vY(YY, IY.r.Zero(), rY))), (0, aY.i)("BABYLON.DirectionalLight", vY))
  },
  40645: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => kr
    });
    var FY = DY(38066),
      AY = DY(36552),
      IY = DY(36524),
      RY = DY(39270),
      OY = DY(40654),
      gY = DY(36546),
      aY = DY(39403),
      vY = DY(36588),
      uY = DY(38068),
      sY = DY(38037),
      iY = DY(36559);
    class yY {
      constructor() {
        this.direction1 = new IY.r(0, 1, 0), this.direction2 = new IY.r(0, 1, 0)
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = (0, iY.RandomRange)(this.direction1.x, this.direction2.x),
          RY = (0, iY.RandomRange)(this.direction1.y, this.direction2.y),
          OY = (0, iY.RandomRange)(this.direction1.z, this.direction2.z);
        FY ? rY.p_(AY, RY, OY) : IY.r.TransformNormalFromFloatsToRef(AY, RY, OY, YY, rY)
      }
      startPositionFunction(YY, rY, DY, FY) {
        FY ? rY.p_(0, 0, 0) : IY.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, YY, rY)
      }
      clone() {
        const YY = new yY;
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setVector3("direction1", this.direction1), YY.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(YY) {
        YY.addUniform("direction1", 3), YY.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.direction1 = this.direction1.VDY(), YY.direction2 = this.direction2.VDY(), YY
      }
      parse(YY) {
        IY.r.FromArrayToRef(YY.direction1, 0, this.direction1), IY.r.FromArrayToRef(YY.direction2, 0, this.direction2)
      }
    }
    class QY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = YY, this.radiusRange = rY, this.directionRandomizer = DY
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = DY.position.subtract(YY.getTranslation()).normalize(),
          RY = (0, iY.RandomRange)(0, this.directionRandomizer),
          OY = (0, iY.RandomRange)(0, this.directionRandomizer),
          gY = (0, iY.RandomRange)(0, this.directionRandomizer);
        AY.x += RY, AY.y += OY, AY.z += gY, AY.normalize(), FY ? rY.brY(AY) : IY.r.TransformNormalFromFloatsToRef(AY.x, AY.y, AY.z, YY, rY)
      }
      startPositionFunction(YY, rY, DY, FY) {
        const AY = this.radius - (0, iY.RandomRange)(0, this.radius * this.radiusRange),
          RY = (0, iY.RandomRange)(0, 1),
          OY = (0, iY.RandomRange)(0, 2 * Math.PI),
          gY = Math.acos(2 * RY - 1),
          aY = AY * Math.cos(OY) * Math.sin(gY),
          vY = AY * Math.cos(gY),
          uY = AY * Math.sin(OY) * Math.sin(gY);
        FY ? rY.p_(aY, Math.abs(vY), uY) : IY.r.TransformCoordinatesFromFloatsToRef(aY, Math.abs(vY), uY, YY, rY)
      }
      clone() {
        const YY = new QY(this.radius, this.directionRandomizer);
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setFloat("radius", this.radius), YY.setFloat("radiusRange", this.radiusRange), YY.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(YY) {
        YY.addUniform("radius", 1), YY.addUniform("radiusRange", 1), YY.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.radius = this.radius, YY.radiusRange = this.radiusRange, YY.directionRandomizer = this.directionRandomizer, YY
      }
      parse(YY) {
        this.radius = YY.radius, this.radiusRange = YY.radiusRange, this.directionRandomizer = YY.directionRandomizer
      }
    }
    class oY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = YY, this.radiusRange = rY, this.directionRandomizer = DY
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = DY.position.subtract(YY.getTranslation()).normalize(),
          RY = (0, iY.RandomRange)(0, this.directionRandomizer),
          OY = (0, iY.RandomRange)(0, this.directionRandomizer),
          gY = (0, iY.RandomRange)(0, this.directionRandomizer);
        AY.x += RY, AY.y += OY, AY.z += gY, AY.normalize(), FY ? rY.brY(AY) : IY.r.TransformNormalFromFloatsToRef(AY.x, AY.y, AY.z, YY, rY)
      }
      startPositionFunction(YY, rY, DY, FY) {
        const AY = this.radius - (0, iY.RandomRange)(0, this.radius * this.radiusRange),
          RY = (0, iY.RandomRange)(0, 1),
          OY = (0, iY.RandomRange)(0, 2 * Math.PI),
          gY = Math.acos(2 * RY - 1),
          aY = AY * Math.cos(OY) * Math.sin(gY),
          vY = AY * Math.cos(gY),
          uY = AY * Math.sin(OY) * Math.sin(gY);
        FY ? rY.p_(aY, vY, uY) : IY.r.TransformCoordinatesFromFloatsToRef(aY, vY, uY, YY, rY)
      }
      clone() {
        const YY = new oY(this.radius, this.directionRandomizer);
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setFloat("radius", this.radius), YY.setFloat("radiusRange", this.radiusRange), YY.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(YY) {
        YY.addUniform("radius", 1), YY.addUniform("radiusRange", 1), YY.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.radius = this.radius, YY.radiusRange = this.radiusRange, YY.directionRandomizer = this.directionRandomizer, YY
      }
      parse(YY) {
        this.radius = YY.radius, this.radiusRange = YY.radiusRange, this.directionRandomizer = YY.directionRandomizer
      }
    }
    class WY extends oY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new IY.r(0, 1, 0),
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new IY.r(0, 1, 0);
        super(YY), this.direction1 = rY, this.direction2 = DY
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = (0, iY.RandomRange)(this.direction1.x, this.direction2.x),
          RY = (0, iY.RandomRange)(this.direction1.y, this.direction2.y),
          OY = (0, iY.RandomRange)(this.direction1.z, this.direction2.z);
        FY ? rY.p_(AY, RY, OY) : IY.r.TransformNormalFromFloatsToRef(AY, RY, OY, YY, rY)
      }
      clone() {
        const YY = new WY(this.radius, this.direction1, this.direction2);
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setFloat("radius", this.radius), YY.setFloat("radiusRange", this.radiusRange), YY.setVector3("direction1", this.direction1), YY.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(YY) {
        YY.addUniform("radius", 1), YY.addUniform("radiusRange", 1), YY.addUniform("direction1", 3), YY.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const YY = super.serialize();
        return YY.direction1 = this.direction1.VDY(), YY.direction2 = this.direction2.VDY(), YY
      }
      parse(YY) {
        super.parse(YY), IY.r.FromArrayToRef(YY.direction1, 0, this.direction1), IY.r.FromArrayToRef(YY.direction2, 0, this.direction2)
      }
    }
    var EY = DY(38034);
    class mY {
      get radius() {
        return this._radius
      }
      set radius(YY) {
        this._radius = YY, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(YY) {
        this._angle = YY, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = DY, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = rY, this.radius = YY
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = DY.position.subtract(YY.getTranslation()).normalize(),
          RY = (0, iY.RandomRange)(0, this.directionRandomizer),
          OY = (0, iY.RandomRange)(0, this.directionRandomizer),
          gY = (0, iY.RandomRange)(0, this.directionRandomizer);
        AY.x += RY, AY.y += OY, AY.z += gY, AY.normalize(), FY ? rY.brY(AY) : IY.r.TransformNormalFromFloatsToRef(AY.x, AY.y, AY.z, YY, rY)
      }
      startPositionFunction(YY, rY, DY, FY) {
        const AY = (0, iY.RandomRange)(0, 2 * Math.PI);
        let RY;
        this.emitFromSpawnPointOnly ? RY = 1e-4 : (RY = (0, iY.RandomRange)(0, this.heightRange), RY = 1 - RY * RY);
        let OY = this._radius - (0, iY.RandomRange)(0, this._radius * this.radiusRange);
        OY *= RY;
        const gY = OY * Math.sin(AY),
          aY = OY * Math.cos(AY),
          vY = RY * this._height;
        if (FY) return rY.x = gY, rY.y = vY, void(rY.z = aY);
        IY.r.TransformCoordinatesFromFloatsToRef(gY, vY, aY, YY, rY)
      }
      clone() {
        const YY = new mY(this._radius, this._angle, this.directionRandomizer);
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setFloat2("radius", this._radius, this.radiusRange), YY.setFloat("coneAngle", this._angle), YY.setFloat2("height", this._height, this.heightRange), YY.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(YY) {
        YY.addUniform("radius", 2), YY.addUniform("coneAngle", 1), YY.addUniform("height", 2), YY.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let YY = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (YY += "\n#define CONEEMITTERSPAWNPOINT"), YY
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.radius = this._radius, YY.angle = this._angle, YY.directionRandomizer = this.directionRandomizer, YY.radiusRange = this.radiusRange, YY.heightRange = this.heightRange, YY.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, YY
      }
      parse(YY) {
        this.radius = YY.radius, this.angle = YY.angle, this.directionRandomizer = YY.directionRandomizer, this.radiusRange = void 0 !== YY.radiusRange ? YY.radiusRange : 1, this.heightRange = void 0 !== YY.heightRange ? YY.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== YY.emitFromSpawnPointOnly && YY.emitFromSpawnPointOnly
      }
    }
    class VY extends mY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new IY.r(0, 1, 0),
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new IY.r(0, 1, 0);
        super(YY, rY), this.direction1 = DY, this.direction2 = FY
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = (0, iY.RandomRange)(this.direction1.x, this.direction2.x),
          RY = (0, iY.RandomRange)(this.direction1.y, this.direction2.y),
          OY = (0, iY.RandomRange)(this.direction1.z, this.direction2.z);
        FY ? rY.p_(AY, RY, OY) : IY.r.TransformNormalFromFloatsToRef(AY, RY, OY, YY, rY)
      }
      clone() {
        const YY = new VY(this.radius, this.angle, this.direction1, this.direction2);
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        super.applyToShader(YY), YY.setVector3("direction1", this.direction1), YY.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(YY) {
        super.buildUniformLayout(YY), YY.addUniform("direction1", 3), YY.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const YY = super.serialize();
        return YY.direction1 = this.direction1.VDY(), YY.direction2 = this.direction2.VDY(), YY
      }
      parse(YY) {
        super.parse(YY), IY.r.FromArrayToRef(YY.direction1, 0, this.direction1), IY.r.FromArrayToRef(YY.direction2, 0, this.direction2)
      }
    }
    class SY {
      get mesh() {
        return this._mesh
      }
      set mesh(YY) {
        this._mesh !== YY && (this._mesh = YY, YY ? (this._indices = YY.XIY(), this._positions = YY.getVerticesData(RY.l.PositionKind), this._normals = YY.getVerticesData(RY.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = IY.r.Zero(), this._mesh = null, this.direction1 = new IY.r(0, 1, 0), this.direction2 = new IY.r(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = YY
      }
      startDirectionFunction(YY, rY, DY, FY) {
        if (this.useMeshNormalsForDirection && this._normals) return void IY.r.TransformNormalToRef(this._storedNormal, YY, rY);
        const AY = (0, iY.RandomRange)(this.direction1.x, this.direction2.x),
          RY = (0, iY.RandomRange)(this.direction1.y, this.direction2.y),
          OY = (0, iY.RandomRange)(this.direction1.z, this.direction2.z);
        FY ? rY.p_(AY, RY, OY) : IY.r.TransformNormalFromFloatsToRef(AY, RY, OY, YY, rY)
      }
      startPositionFunction(YY, rY, DY, FY) {
        if (!this._indices || !this._positions) return;
        const AY = 3 * (Math.random() * (this._indices.length / 3) | 0),
          RY = Math.random(),
          OY = Math.random() * (1 - RY),
          gY = 1 - RY - OY,
          aY = this._indices[AY],
          vY = this._indices[AY + 1],
          uY = this._indices[AY + 2],
          sY = IY.n.xy[0],
          iY = IY.n.xy[1],
          yY = IY.n.xy[2],
          QY = IY.n.xy[3];
        IY.r.FromArrayToRef(this._positions, 3 * aY, sY), IY.r.FromArrayToRef(this._positions, 3 * vY, iY), IY.r.FromArrayToRef(this._positions, 3 * uY, yY), QY.x = RY * sY.x + OY * iY.x + gY * yY.x, QY.y = RY * sY.y + OY * iY.y + gY * yY.y, QY.z = RY * sY.z + OY * iY.z + gY * yY.z, FY ? rY.p_(QY.x, QY.y, QY.z) : IY.r.TransformCoordinatesFromFloatsToRef(QY.x, QY.y, QY.z, YY, rY), this.useMeshNormalsForDirection && this._normals && (IY.r.FromArrayToRef(this._normals, 3 * aY, sY), IY.r.FromArrayToRef(this._normals, 3 * vY, iY), IY.r.FromArrayToRef(this._normals, 3 * uY, yY), this._storedNormal.x = RY * sY.x + OY * iY.x + gY * yY.x, this._storedNormal.y = RY * sY.y + OY * iY.y + gY * yY.y, this._storedNormal.z = RY * sY.z + OY * iY.z + gY * yY.z)
      }
      clone() {
        const YY = new SY(this.mesh);
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setVector3("direction1", this.direction1), YY.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(YY) {
        YY.addUniform("direction1", 3), YY.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.direction1 = this.direction1.VDY(), YY.direction2 = this.direction2.VDY(), YY.meshId = this.mesh?.id, YY.useMeshNormalsForDirection = this.useMeshNormalsForDirection, YY
      }
      parse(YY, rY) {
        IY.r.FromArrayToRef(YY.direction1, 0, this.direction1), IY.r.FromArrayToRef(YY.direction2, 0, this.direction2), YY.meshId && rY && (this.mesh = rY.getLastMeshById(YY.meshId)), this.useMeshNormalsForDirection = YY.useMeshNormalsForDirection
      }
    }
    class lY {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(YY) {
        this._targetStopDuration !== YY && (this._targetStopDuration = YY)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(YY) {
        this._noiseTexture !== YY && (this._noiseTexture = YY, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(YY) {
        this._attractors.push(YY)
      }
      removeAttractor(YY) {
        const rY = this._attractors.indexOf(YY); - 1 !== rY && this._attractors.splice(rY, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(YY) {
        this._animationSheetEnabled !== YY && (this._animationSheetEnabled = YY)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(YY) {
        this._isAnimationSheetEnabled != YY && (this._isAnimationSheetEnabled = YY, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(YY) {
        this._useLogarithmicDepth = YY && this.hT().ky().getCaps().fragmentDepthSupported
      }
      hT() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(YY) {
        switch (YY) {
          case lY.BLENDMODE_MULTIPLYADD:
            return;
          case lY.BLENDMODE_ADD:
            YY = 1;
            break;
          case lY.BLENDMODE_ONEONE:
            YY = 6;
            break;
          case lY.BLENDMODE_STANDARD:
            YY = 2;
            break;
          case lY.BLENDMODE_MULTIPLY:
            YY = 4;
            break;
          case lY.BLENDMODE_SUBTRACT:
            YY = 3
        }
        this._engine.setAlphaMode(YY)
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
      addEmitRateGradient(YY, rY, DY) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, YY, rY, DY), this
      }
      removeEmitRateGradient(YY) {
        return this._removeFactorGradient(this._emitRateGradients, YY), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : IY.r.Zero()
      }
      set direction1(YY) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = YY)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : IY.r.Zero()
      }
      set direction2(YY) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = YY)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : IY.r.Zero()
      }
      set minEmitBox(YY) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = YY)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : IY.r.Zero()
      }
      set maxEmitBox(YY) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = YY)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(YY) {
        this._billboardMode !== YY && (this._billboardMode = YY, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(YY) {
        this._isBillboardBased !== YY && (this._isBillboardBased = YY, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(YY) {
        this._attachImageProcessingConfiguration(YY)
      }
      _attachImageProcessingConfiguration(YY) {
        YY !== this._imageProcessingConfiguration && (!YY && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = YY)
      }
      _reset() {}
      _addFactorGradient(YY, rY, DY, AY) {
        const IY = new FY.e(rY, DY, AY);
        YY.push(IY), YY.sort(((YY, rY) => YY.gradient < rY.gradient ? -1 : YY.gradient > rY.gradient ? 1 : 0))
      }
      _removeFactorGradient(YY, rY) {
        if (!YY) return;
        let DY = 0;
        for (const FY of YY) {
          if (FY.gradient === rY) {
            YY.splice(DY, 1);
            break
          }
          DY++
        }
      }
      _removeGradientAndTexture(YY, rY, DY) {
        if (!rY) return this;
        let FY = 0;
        for (const AY of rY) {
          if (AY.gradient === YY) {
            rY.splice(FY, 1);
            break
          }
          FY++
        }
        return DY && DY.dispose(), this
      }
      constructor(YY) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = IY.r.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new IY.r(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = lY.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new IY.q(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new IY.r(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = IY.r.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new vY.d(1, 1, 1, 1), this.color2 = new vY.d(1, 1, 1, 1), this.colorDead = new vY.d(0, 0, 0, 1), this.textureMask = new vY.d(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new aY.e, this.id = YY, this.name = YY
      }
      createPointEmitter(YY, rY) {
        const DY = function(YY, rY) {
          const DY = new yY;
          return DY.direction1 = YY, DY.direction2 = rY, DY
        }(YY, rY);
        return this.particleEmitterType = DY, DY
      }
      createHemisphericEmitter() {
        const YY = function() {
          return new QY(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = YY, YY
      }
      createSphereEmitter() {
        const YY = function() {
          return new oY(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = YY, YY
      }
      createDirectedSphereEmitter() {
        const YY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new IY.r(0, 1, 0),
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new IY.r(0, 1, 0);
          return new WY(YY, rY, DY)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new IY.r(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new IY.r(0, 1, 0));
        return this.particleEmitterType = YY, YY
      }
      createCylinderEmitter() {
        const YY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new EY.d(YY, rY, DY, FY)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = YY, YY
      }
      createDirectedCylinderEmitter() {
        const YY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new IY.r(0, 1, 0),
            AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new IY.r(0, 1, 0);
          return new EY.c(YY, rY, DY, FY, AY)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new IY.r(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new IY.r(0, 1, 0));
        return this.particleEmitterType = YY, YY
      }
      createConeEmitter() {
        const YY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new mY(YY, rY)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = YY, YY
      }
      createDirectedConeEmitter() {
        const YY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new IY.r(0, 1, 0),
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new IY.r(0, 1, 0);
          return new VY(YY, rY, DY, FY)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new IY.r(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new IY.r(0, 1, 0));
        return this.particleEmitterType = YY, YY
      }
      createBoxEmitter(YY, rY, DY, FY) {
        const AY = new uY.e;
        return this.particleEmitterType = AY, this.direction1 = YY, this.direction2 = rY, this.minEmitBox = DY, this.maxEmitBox = FY, AY
      }
      createMeshEmitter() {
        const YY = function() {
          return new SY(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = YY, YY
      }
    }
    lY.BLENDMODE_ONEONE = 0, lY.BLENDMODE_STANDARD = 1, lY.BLENDMODE_ADD = 2, lY.BLENDMODE_MULTIPLY = 3, lY.BLENDMODE_MULTIPLYADD = 4, lY.BLENDMODE_SUBTRACT = -1;
    class TY {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new vY.d(0, 0, 0, 0), this.currentColor2 = new vY.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = IY.r.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class eY {
      constructor(YY) {
        this.particleSystem = YY, this.position = IY.r.Zero(), this.direction = IY.r.Zero(), this.color = new vY.d(0, 0, 0, 0), this.colorStep = new vY.d(0, 0, 0, 0), this.initialColor = new vY.d(0, 0, 0, 0), this.colorDead = new vY.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new IY.q(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new TY, this.id = eY._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let YY = this.age,
          rY = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === rY ? (rY = 1, YY = this._properties.randomCellOffset) : YY += this._properties.randomCellOffset);
        const DY = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let FY;
        FY = this._properties.initialSpriteCellLoop ? (0, iY.Clamp)(YY * rY % this.lifeTime / this.lifeTime) : (0, iY.Clamp)(YY * rY / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + FY * DY | 0
      }
      _inheritParticleInfoToSubEmitter(YY) {
        if (YY.particleSystem.emitter.position) {
          const rY = YY.particleSystem.emitter;
          if (rY.position.brY(this.position), YY.inheritDirection) {
            const YY = IY.n.xy[0];
            this.direction.normalizeToRef(YY), rY.setDirection(YY, 0, Math.PI / 2)
          }
        } else {
          YY.particleSystem.emitter.brY(this.position)
        }
        this.direction.scaleToRef(YY.inheritedVelocityAmount / 2, IY.n.xy[0]), YY.particleSystem._inheritedVelocityOffset.brY(IY.n.xy[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const YY of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(YY)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = eY._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(YY) {
        YY.position.brY(this.position), this._properties.initialDirection ? YY._properties.initialDirection ? YY._properties.initialDirection.brY(this._properties.initialDirection) : YY._properties.initialDirection = this._properties.initialDirection.clone() : YY._properties.initialDirection = null, YY.direction.brY(this.direction), this._properties.localPosition && (YY._properties.localPosition ? YY._properties.localPosition.brY(this._properties.localPosition) : YY._properties.localPosition = this._properties.localPosition.clone()), YY.color.brY(this.color), YY.colorStep.brY(this.colorStep), YY.initialColor.brY(this.initialColor), YY.colorDead.brY(this.colorDead), YY.lifeTime = this.lifeTime, YY.age = this.age, YY._properties.randomCellOffset = this._properties.randomCellOffset, YY.size = this.size, YY.scale.brY(this.scale), YY.angle = this.angle, YY.angularSpeed = this.angularSpeed, YY.particleSystem = this.particleSystem, YY.cellIndex = this.cellIndex, YY.id = this.id, YY._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (YY._properties.currentColorGradient = this._properties.currentColorGradient, YY._properties.currentColor1.brY(this._properties.currentColor1), YY._properties.currentColor2.brY(this._properties.currentColor2)), this._properties.currentSizeGradient && (YY._properties.currentSizeGradient = this._properties.currentSizeGradient, YY._properties.currentSize1 = this._properties.currentSize1, YY._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (YY._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, YY._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, YY._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (YY._properties.currentVelocityGradient = this._properties.currentVelocityGradient, YY._properties.currentVelocity1 = this._properties.currentVelocity1, YY._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (YY._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, YY._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, YY._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (YY._properties.currentDragGradient = this._properties.currentDragGradient, YY._properties.currentDrag1 = this._properties.currentDrag1, YY._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (YY._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, YY._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, YY._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (YY.remapData && this.remapData ? YY.remapData.brY(this.remapData) : YY.remapData = new IY.v(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (YY._properties.randomNoiseCoordinates1 && YY._properties.randomNoiseCoordinates2 ? (YY._properties.randomNoiseCoordinates1.brY(this._properties.randomNoiseCoordinates1), YY._properties.randomNoiseCoordinates2.brY(this._properties.randomNoiseCoordinates2)) : (YY._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), YY._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), YY.metadata = this.metadata
      }
    }
    eY._Count = 0;
    var NY = DY(40303);
    class BY {
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
      constructor(YY, rY, DY, FY) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = rY, this.Fk = YY, this._scene = DY, this._host = FY, this._activeTargets = [], rY._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            YA: this._getCorrectLoopMode()
          }, this._animation.dataType === NY.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = IY.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const YY = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, YY)
        }
        if (this.Fk instanceof Array) {
          let YY = 0;
          for (const rY of this.Fk) this._preparePath(rY, YY), this._getOriginalValues(YY), YY++;
          this._targetIsArray = !0
        } else this._preparePath(this.Fk), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const AY = rY.getEvents();
        if (AY && AY.length > 0)
          for (const IY of AY) this._events.push(IY._clone());
        this._enableBlending = YY && YY.animationPropertiesOverride ? YY.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = this._animation.targetPropertyPath;
        if (DY.length > 1) {
          let FY = YY;
          for (let YY = 0; YY < DY.length - 1; YY++) {
            const rY = DY[YY];
            if (FY = FY[rY], void 0 === FY) throw new Error(`Invalid property (${rY}) in property path (${DY.join(".")})`)
          }
          this._targetPath = DY[DY.length - 1], this._activeTargets[rY] = FY
        } else this._targetPath = DY[0], this._activeTargets[rY] = YY;
        if (void 0 === this._activeTargets[rY][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${DY.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Fk instanceof Array) {
            let YY = 0;
            for (const rY of this.Fk) void 0 !== this._originalValue[YY] && this._setValue(rY, this._activeTargets[YY], this._originalValue[YY], -1, YY), YY++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Fk, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let YY = 0; YY < this._events.length; YY++) this._events[YY].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const YY = this._animation.runtimeAnimations.indexOf(this);
        YY > -1 && this._animation.runtimeAnimations.splice(YY, 1)
      }
      setValue(YY, rY) {
        if (this._targetIsArray)
          for (let DY = 0; DY < this.Fk.length; DY++) {
            const FY = this.Fk[DY];
            this._setValue(FY, this._activeTargets[DY], YY, rY, DY)
          } else this._setValue(this.Fk, this._directTarget, YY, rY, 0)
      }
      _getOriginalValues() {
        let YY, rY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const DY = this._activeTargets[rY];
        if (NY.d.InheritOriginalValueFromActiveAnimations) {
          const YY = this._scene._activeAnimatables;
          for (let FY = 0; FY < YY.length; FY++) {
            const AY = YY[FY]._runtimeAnimations;
            for (let YY = 0; YY < AY.length; YY++) {
              const FY = AY[YY];
              if (FY !== this && FY._targetPath === this._targetPath)
                for (let YY = 0; YY < FY._activeTargets.length; YY++)
                  if (FY._activeTargets[YY] === DY && void 0 !== FY._originalValue[YY]) return void(FY._originalValue[YY] && FY._originalValue[YY].clone ? this._originalValue[rY] = FY._originalValue[YY].clone() : this._originalValue[rY] = FY._originalValue[YY])
            }
          }
        }
        YY = DY.getLocalMatrix && "_matrix" === this._targetPath ? DY.getLocalMatrix() : DY[this._targetPath], YY && YY.clone ? this._originalValue[rY] = YY.clone() : this._originalValue[rY] = YY
      }
      _registerTargetForLateAnimationBinding(YY, rY) {
        const DY = YY.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(DY), DY._lateAnimationHolders || (DY._lateAnimationHolders = {}), DY._lateAnimationHolders[YY.targetPath] || (DY._lateAnimationHolders[YY.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: rY
        }), YY.isAdditive ? (DY._lateAnimationHolders[YY.targetPath].additiveAnimations.push(YY), DY._lateAnimationHolders[YY.targetPath].totalAdditiveWeight += YY.weight) : (DY._lateAnimationHolders[YY.targetPath].animations.push(YY), DY._lateAnimationHolders[YY.targetPath].totalWeight += YY.weight)
      }
      _setValue(YY, rY, DY, FY, AY) {
        const RY = this._scene._animationWrites,
          OY = this._scene._animationWriteCount++;
        let gY = RY[OY];
        if (gY || (gY = RY[OY] = {
            runtimeAnimation: this,
            target: YY,
            weight: FY,
            additive: !1,
            blendingFactor: 1,
            fi: !1
          }), gY.runtimeAnimation = this, gY.target = YY, gY.weight = FY, gY.additive = this.isAdditive, gY.fi = !1, this._currentActiveTarget = rY, this._weight = FY, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const YY = rY[this._targetPath];
            YY.clone ? this._originalBlendValue = YY.clone() : this._originalBlendValue = YY
          }
          this._originalBlendValue.m ? NY.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? IY.e.DecomposeLerpToRef(this._originalBlendValue, DY, this._blendingFactor, this._currentValue) : this._currentValue = IY.e.DecomposeLerp(this._originalBlendValue, DY, this._blendingFactor) : this._currentValue ? IY.e.LerpToRef(this._originalBlendValue, DY, this._blendingFactor, this._currentValue) : this._currentValue = IY.e.Lerp(this._originalBlendValue, DY, this._blendingFactor) : this._currentValue = NY.d._UniversalLerp(this._originalBlendValue, DY, this._blendingFactor);
          const FY = YY && YY.animationPropertiesOverride ? YY.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          gY.blendingFactor = this._blendingFactor, this._blendingFactor += FY
        } else gY.blendingFactor = 1, this._currentValue ? this._currentValue.brY ? this._currentValue.brY(DY) : this._currentValue = DY : this._currentValue = DY?.clone ? DY.clone() : DY; - 1 !== FY ? this._registerTargetForLateAnimationBinding(this, this._originalValue[AY]) : this._animationState.YA === NY.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[AY], rY[this._targetPath]) : rY[this._targetPath] = this._originalValue[AY] + this._currentValue : rY[this._targetPath] = this._currentValue, YY.nYY && YY.nYY(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Fk && this.Fk.animationPropertiesOverride) {
          return "MorphTarget" === this.Fk.getClassName?.() && null == this.Fk._animationPropertiesOverride ? this._animation.YA : this.Fk.animationPropertiesOverride.YA
        }
        return this._animation.YA
      }
      goToFrame(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const DY = this._animation.getKeys();
        YY < DY[0].frame ? YY = DY[0].frame : YY > DY[DY.length - 1].frame && (YY = DY[DY.length - 1].frame);
        const FY = this._events;
        if (FY.length)
          for (let IY = 0; IY < FY.length; IY++) FY[IY].onlyOnce || (FY[IY].isDone = FY[IY].frame < YY);
        this._currentFrame = YY;
        const AY = this._animation._interpolate(YY, this._animationState);
        this.setValue(AY, rY)
      }
      _prepareForSpeedRatioChange(YY) {
        const rY = this._previousElapsedTime * (this._animation.framePerSecond * YY) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - rY
      }
      animate(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const RY = this._animation,
          OY = RY.targetPropertyPath;
        if (!OY || OY.length < 1) return this._stopped = !0, !1;
        let gY, aY = !0;
        const vY = this._events;
        let uY;
        if (this._coreRuntimeAnimation) uY = DY - rY, gY = this._coreRuntimeAnimation.currentFrame, this._currentFrame = gY, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let IY;
          (rY < this._minFrame || rY > this._maxFrame) && (rY = this._minFrame), (DY < this._minFrame || DY > this._maxFrame) && (DY = this._maxFrame), uY = DY - rY;
          let OY = YY * (RY.framePerSecond * AY) / 1e3 + this._absoluteFrameOffset,
            sY = 0,
            iY = !1;
          const yY = FY && this._animationState.YA === NY.d.ANIMATIONLOOPMODE_YOYO;
          if (yY) {
            const YY = (OY - rY) / uY,
              DY = Math.sin(YY * Math.PI);
            OY = Math.abs(DY) * uY + rY;
            const FY = DY >= 0 ? 1 : -1;
            this._yoyoDirection !== FY && (iY = !0), this._yoyoDirection = FY
          }
          if (this._previousElapsedTime = YY, this._previousAbsoluteFrame = OY, !FY && DY >= rY && (OY >= uY && AY > 0 || OY <= 0 && AY < 0)) aY = !1, sY = RY.evaluate(DY);
          else if (!FY && rY >= DY && (OY <= uY && AY < 0 || OY >= 0 && AY > 0)) aY = !1, sY = RY.evaluate(rY);
          else if (this._animationState.YA !== NY.d.ANIMATIONLOOPMODE_CYCLE) {
            const YY = DY.toString() + rY.toString();
            if (!this._offsetsCache[YY]) {
              this._animationState.repeatCount = 0, this._animationState.YA = NY.d.ANIMATIONLOOPMODE_CYCLE;
              const FY = RY._interpolate(rY, this._animationState),
                AY = RY._interpolate(DY, this._animationState);
              switch (this._animationState.YA = this._getCorrectLoopMode(), RY.dataType) {
                case NY.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[YY] = AY - FY;
                  break;
                case NY.d.ANIMATIONTYPE_QUATERNION:
                case NY.d.ANIMATIONTYPE_VECTOR3:
                case NY.d.ANIMATIONTYPE_VECTOR2:
                case NY.d.ANIMATIONTYPE_SIZE:
                case NY.d.ANIMATIONTYPE_COLOR3:
                case NY.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[YY] = AY.subtract(FY)
              }
              this._highLimitsCache[YY] = AY
            }
            sY = this._highLimitsCache[YY], IY = this._offsetsCache[YY]
          }
          if (void 0 === IY) switch (RY.dataType) {
            case NY.d.ANIMATIONTYPE_FLOAT:
              IY = 0;
              break;
            case NY.d.ANIMATIONTYPE_QUATERNION:
              IY = NY.s;
              break;
            case NY.d.ANIMATIONTYPE_VECTOR3:
              IY = NY.y;
              break;
            case NY.d.ANIMATIONTYPE_VECTOR2:
              IY = NY.u;
              break;
            case NY.d.ANIMATIONTYPE_SIZE:
              IY = NY.t;
              break;
            case NY.d.ANIMATIONTYPE_COLOR3:
              IY = NY.l;
              break;
            case NY.d.ANIMATIONTYPE_COLOR4:
              IY = NY.o
          }
          const QY = this._host ? this._host.syncRoot : null;
          let oY, WY = this._playbackFrames,
            EY = !1;
          if (QY) {
            const YY = QY.toFrame - QY.fromFrame,
              DY = QY.masterFrame,
              FY = (DY - QY.fromFrame) / YY;
            gY = rY + uY * FY;
            const AY = QY.getAnimations()[0];
            if (AY && 0 !== YY) {
              const YY = uY * FY,
                rY = AY._playbackTo - AY._playbackFrom;
              if (0 !== rY && AY._playbackFrom <= QY.fromFrame && AY._playbackTo >= QY.toFrame) {
                WY = uY * Math.round((AY._playbackFrames - (AY._currentFrame - AY._playbackFrom)) / rY) + YY
              } else EY = (DY - this._playbackSyncMasterFrame) * (AY._playbackFrames - this._playbackSyncMasterPlayed) < 0, WY = YY;
              EY = EY || AY._playbackJumped, this._playbackSyncMasterPlayed = AY._playbackFrames, this._playbackSyncMasterFrame = DY
            }
          } else gY = OY > 0 && rY > DY || OY < 0 && rY < DY ? aY && 0 !== uY ? DY + OY % uY : rY : aY && 0 !== uY ? rY + OY % uY : DY;
          if (!yY && (AY > 0 && this.currentFrame > gY || AY < 0 && this.currentFrame < gY) || yY && iY) {
            this._onLoop();
            for (let YY = 0; YY < vY.length; YY++) vY[YY].onlyOnce || (vY[YY].isDone = !1);
            this._animationState.key = AY > 0 ? 0 : RY.getKeys().length - 1
          }
          if (this._currentFrame = gY, this._animationState.repeatCount = 0 === uY ? 0 : OY / uY | 0, this._animationState.highLimitValue = sY, this._animationState.offsetValue = IY, this._playbackFrom = rY, this._playbackTo = DY, this._playbackJumped = EY, this._playbackSyncRoot = QY, QY) oY = WY;
          else if (aY) oY = yY ? gY === rY && OY === DY ? uY : gY - rY : OY;
          else {
            const YY = 0 !== uY ? Math.floor(this._playbackFrames / uY) : 0;
            oY = (gY === DY ? YY + 1 : YY) * uY
          }
          this._playbackFrames = oY, this._playbackProgress = this._animationState.YA === NY.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? uY : oY
        }
        const sY = RY._interpolate(gY, this._animationState);
        if (this.setValue(sY, IY), vY.length)
          for (let iY = 0; iY < vY.length; iY++)
            if (uY >= 0 && gY >= vY[iY].frame && vY[iY].frame >= rY || uY < 0 && gY <= vY[iY].frame && vY[iY].frame <= rY) {
              const YY = vY[iY];
              YY.isDone || (YY.onlyOnce && (vY.splice(iY, 1), iY--), YY.isDone = !0, YY.action(gY))
            } return aY || (this._stopped = !0), aY
      }
    }
    var cY = DY(39044);
    class KY {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(YY) {
        this._weight = -1 !== YY ? Math.min(Math.max(YY, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(YY) {
        for (let rY = 0; rY < this._runtimeAnimations.length; rY++) {
          this._runtimeAnimations[rY]._prepareForSpeedRatioChange(YY)
        }
        this._speedRatio = YY, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          OY = arguments.length > 6 ? arguments[6] : void 0,
          gY = arguments.length > 7 ? arguments[7] : void 0,
          aY = arguments.length > 8 ? arguments[8] : void 0,
          vY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          uY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = rY, this.fromFrame = DY, this.toFrame = FY, this.loopAnimation = IY, this.onAnimationEnd = OY, this.onAnimationLoop = aY, this.isAdditive = vY, this.playOrder = uY, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Wm = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new AY.e, this.onAnimationLoopObservable = new AY.e, this._scene = YY, gY && this.appendAnimations(rY, gY), this._speedRatio = RY, YY._activeAnimatables.push(this)
      }
      syncWith(YY) {
        if (this._syncRoot = YY, YY) {
          const YY = this._scene._activeAnimatables.indexOf(this);
          YY > -1 && (this._scene._activeAnimatables.splice(YY, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(YY, rY) {
        for (let DY = 0; DY < rY.length; DY++) {
          const FY = rY[DY],
            AY = new BY(YY, FY, this._scene, this);
          AY._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(AY)
        }
      }
      getAnimationByTargetProperty(YY) {
        const rY = this._runtimeAnimations;
        for (let DY = 0; DY < rY.length; DY++)
          if (rY[DY].animation.targetProperty === YY) return rY[DY].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(YY) {
        const rY = this._runtimeAnimations;
        for (let DY = 0; DY < rY.length; DY++)
          if (rY[DY].animation.targetProperty === YY) return rY[DY];
        return null
      }
      reset() {
        const YY = this._runtimeAnimations;
        for (let rY = 0; rY < YY.length; rY++) YY[rY].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(YY) {
        const rY = this._runtimeAnimations;
        for (let DY = 0; DY < rY.length; DY++) rY[DY].animation.enableBlending = !0, rY[DY].animation.blendingSpeed = YY
      }
      disableBlending() {
        const YY = this._runtimeAnimations;
        for (let rY = 0; rY < YY.length; rY++) YY[rY].animation.enableBlending = !1
      }
      goToFrame(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this._runtimeAnimations;
        if (DY[0]) {
          const rY = DY[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? DY[0].currentFrame;
          const FY = 0 === this.speedRatio ? 0 : (YY - this._frameToSyncFromJump) / rY * 1e3 / this.speedRatio;
          this._manualJumpDelay = -FY
        }
        for (let FY = 0; FY < DY.length; FY++) DY[FY].goToFrame(YY, rY ? this._weight : -1);
        this._goToFrame = YY
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
      stop(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (YY || rY) {
          const AY = this._scene._activeAnimatables.indexOf(this);
          if (AY > -1) {
            const IY = this._runtimeAnimations;
            for (let DY = IY.length - 1; DY >= 0; DY--) {
              const FY = IY[DY];
              YY && FY.animation.name != YY || (rY && !rY(FY.target) || (FY.dispose(), IY.splice(DY, 1)))
            }
            0 == IY.length && (DY || this._scene._activeAnimatables.splice(AY, 1), FY || this._raiseOnAnimationEnd())
          }
        } else {
          const YY = this._scene._activeAnimatables.indexOf(this);
          if (YY > -1) {
            DY || this._scene._activeAnimatables.splice(YY, 1);
            const rY = this._runtimeAnimations;
            for (let YY = 0; YY < rY.length; YY++) rY[YY].dispose();
            this._runtimeAnimations.length = 0, FY || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((YY => {
          this.onAnimationEndObservable.add((() => {
            YY(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(YY) {
        if (this.Wm) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = YY), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = YY, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += YY - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !KY.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let rY = !1;
        const DY = this._runtimeAnimations;
        let FY;
        for (FY = 0; FY < DY.length; FY++) {
          const AY = DY[FY].animate(YY - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          rY = rY || AY
        }
        if (this.animationStarted = rY, !rY) {
          if (this.disposeOnEnd)
            for (FY = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(FY, 1), FY = 0; FY < DY.length; FY++) DY[FY].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return rY
      }
    }

    function HY(YY) {
      if (0 === YY.totalWeight && 0 === YY.totalAdditiveWeight) return YY.originalValue;
      let rY = 1;
      const DY = IY.n.xy[0],
        FY = IY.n.xy[1],
        AY = IY.n.Quaternion[0];
      let RY = 0;
      const OY = YY.animations[0],
        gY = YY.originalValue;
      let aY, vY = !1;
      if (YY.totalWeight < 1) aY = 1 - YY.totalWeight, gY.decompose(FY, AY, DY);
      else {
        if (RY = 1, rY = YY.totalWeight, aY = OY.weight / rY, 1 == aY) {
          if (!YY.totalAdditiveWeight) return OY.currentValue;
          vY = !0
        }
        OY.currentValue.decompose(FY, AY, DY)
      }
      if (!vY) {
        FY.scaleInPlace(aY), DY.scaleInPlace(aY), AY.scaleInPlace(aY);
        for (let OY = RY; OY < YY.animations.length; OY++) {
          const RY = YY.animations[OY];
          if (0 === RY.weight) continue;
          aY = RY.weight / rY;
          const gY = IY.n.xy[2],
            vY = IY.n.xy[3],
            uY = IY.n.Quaternion[1];
          RY.currentValue.decompose(vY, uY, gY), vY.scaleAndAddToRef(aY, FY), uY.scaleAndAddToRef(IY.g.Dot(AY, uY) > 0 ? aY : -aY, AY), gY.scaleAndAddToRef(aY, DY)
        }
        AY.normalize()
      }
      for (let sY = 0; sY < YY.additiveAnimations.length; sY++) {
        const rY = YY.additiveAnimations[sY];
        if (0 === rY.weight) continue;
        const RY = IY.n.xy[2],
          OY = IY.n.xy[3],
          gY = IY.n.Quaternion[1];
        rY.currentValue.decompose(OY, gY, RY), OY.multiplyToRef(FY, OY), IY.r.LerpToRef(FY, OY, rY.weight, FY), AY.multiplyToRef(gY, gY), IY.g.SlerpToRef(AY, gY, rY.weight, AY), RY.scaleAndAddToRef(rY.weight, DY)
      }
      const uY = OY ? OY._animationState.workValue : IY.n.Matrix[0].clone();
      return IY.e.ComposeToRef(FY, AY, DY, uY), uY
    }

    function zY(YY, rY) {
      if (0 === YY.totalWeight && 0 === YY.totalAdditiveWeight) return rY;
      const DY = YY.animations[0],
        FY = YY.originalValue;
      let AY = rY;
      if (0 === YY.totalWeight && YY.totalAdditiveWeight > 0) AY.brY(FY);
      else if (1 === YY.animations.length) {
        if (IY.g.SlerpToRef(FY, DY.currentValue, Math.min(1, YY.totalWeight), AY), 0 === YY.totalAdditiveWeight) return AY
      } else if (YY.animations.length > 1) {
        let DY, RY, OY = 1;
        if (YY.totalWeight < 1) {
          const rY = 1 - YY.totalWeight;
          DY = [], RY = [], DY.push(FY), RY.push(rY)
        } else {
          if (2 === YY.animations.length && (IY.g.SlerpToRef(YY.animations[0].currentValue, YY.animations[1].currentValue, YY.animations[1].weight / YY.totalWeight, rY), 0 === YY.totalAdditiveWeight)) return rY;
          DY = [], RY = [], OY = YY.totalWeight
        }
        for (let rY = 0; rY < YY.animations.length; rY++) {
          const FY = YY.animations[rY];
          DY.push(FY.currentValue), RY.push(FY.weight / OY)
        }
        let gY = 0;
        for (let YY = 0; YY < DY.length;) YY ? (gY += RY[YY], IY.g.SlerpToRef(AY, DY[YY], RY[YY] / gY, AY), YY++) : (IY.g.SlerpToRef(DY[YY], DY[YY + 1], RY[YY + 1] / (RY[YY] + RY[YY + 1]), rY), AY = rY, gY = RY[YY] + RY[YY + 1], YY += 2)
      }
      for (let RY = 0; RY < YY.additiveAnimations.length; RY++) {
        const rY = YY.additiveAnimations[RY];
        0 !== rY.weight && (AY.multiplyToRef(rY.currentValue, IY.n.Quaternion[0]), IY.g.SlerpToRef(AY, IY.n.Quaternion[0], rY.weight, AY))
      }
      return AY
    }

    function ZY(YY, rY) {
      rY && (rY.prototype.copyAnimationRange = function(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new NY.d(this.name, "_matrix", YY.animations[0].framePerSecond, NY.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const IY = YY.animations[0].getRange(rY);
        if (!IY) return !1;
        const RY = IY.from,
          OY = IY.to,
          gY = YY.animations[0].getKeys(),
          aY = YY.length,
          vY = YY.getParent(),
          uY = this.getParent(),
          sY = FY && vY && aY && this.length && aY !== this.length,
          iY = sY && uY && vY ? uY.length / vY.length : 1,
          yY = FY && !uY && AY && (1 !== AY.x || 1 !== AY.y || 1 !== AY.z),
          QY = this.animations[0].getKeys();
        let oY, WY, EY;
        for (let mY = 0, VY = gY.length; mY < VY; mY++) oY = gY[mY], oY.frame >= RY && oY.frame <= OY && (FY ? (EY = oY.value.clone(), sY ? (WY = EY.getTranslation(), EY.setTranslation(WY.scaleInPlace(iY))) : yY && AY ? (WY = EY.getTranslation(), EY.setTranslation(WY.multiplyInPlace(AY))) : EY = oY.value) : EY = oY.value, QY.push({
          frame: oY.frame + DY,
          value: EY
        }));
        return this.animations[0].createRange(rY, RY + DY, OY + DY), !0
      }), YY && (YY.prototype._animate = function(YY) {
        const rY = this._animationWrites,
          DY = this._animationWriteCount;
        let FY = 0;
        for (let IY = this._animationStepWriteCount; IY < DY; IY++) {
          const YY = rY[IY];
          YY.fi && -1 === YY.weight || (YY.fi = !0, rY[IY] = rY[FY], rY[FY] = YY, FY++)
        }
        for (let IY = FY; IY < DY; IY++) {
          const YY = rY[IY];
          YY.runtimeAnimation = null, YY.target = null
        }
        if (this._animationWriteCount = FY, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const AY = cY.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = AY
        }
        this.deltaTime = void 0 !== YY ? YY : this.useConstantAnimationDeltaTime ? 16 : (AY - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = AY;
        const RY = this._activeAnimatables;
        if (0 === RY.length) return;
        this._animationTime += this.deltaTime;
        const OY = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let IY = 0; IY < RY.length; IY++) {
          const YY = RY[IY];
          !YY._animate(OY) && YY.disposeOnEnd && IY--
        }! function(YY) {
          if (YY._registeredForLateAnimationBindings.length) {
            for (let rY = 0; rY < YY._registeredForLateAnimationBindings.length; rY++) {
              const DY = YY._registeredForLateAnimationBindings.data[rY];
              for (const YY in DY._lateAnimationHolders) {
                const rY = DY._lateAnimationHolders[YY],
                  FY = rY.animations[0],
                  AY = rY.originalValue;
                if (void 0 === AY || null === AY) continue;
                const RY = NY.d.AllowMatrixDecomposeForInterpolation && AY.m;
                let OY = DY[YY];
                if (RY) OY = HY(rY);
                else if (void 0 !== AY.w) OY = zY(rY, OY || IY.g.Identity());
                else {
                  let YY = 0,
                    DY = 1;
                  const IY = FY && FY._animationState.YA === NY.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (rY.totalWeight < 1) OY = IY ? AY.clone ? AY.clone() : AY : FY && AY.scale ? AY.scale(1 - rY.totalWeight) : FY ? AY * (1 - rY.totalWeight) : AY.clone ? AY.clone() : AY;
                  else if (FY) {
                    DY = rY.totalWeight;
                    const RY = FY.weight / DY;
                    OY = 1 !== RY ? FY.currentValue.scale ? FY.currentValue.scale(RY) : FY.currentValue * RY : (rY.animations.length > 1 || rY.additiveAnimations.length > 0) && FY.currentValue.clone ? FY.currentValue.clone() : FY.currentValue, IY && (OY.addToRef ? OY.addToRef(AY, OY) : OY += AY), YY = 1
                  }
                  for (let FY = YY; FY < rY.animations.length; FY++) {
                    const YY = rY.animations[FY],
                      AY = YY.weight / DY;
                    AY && (YY.currentValue.scaleAndAddToRef ? YY.currentValue.scaleAndAddToRef(AY, OY) : OY += YY.currentValue * AY)
                  }
                  for (let FY = 0; FY < rY.additiveAnimations.length; FY++) {
                    const YY = rY.additiveAnimations[FY],
                      DY = YY.weight;
                    DY && (YY.currentValue.scaleAndAddToRef ? YY.currentValue.scaleAndAddToRef(DY, OY) : OY += YY.currentValue * DY)
                  }
                }
                DY[YY] = OY
              }
              DY._lateAnimationHolders = {}
            }
            YY._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, YY.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((YY, rY) => YY.playOrder - rY.playOrder))
      }, YY.prototype.beginWeightedAnimation = function(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 ? arguments[7] : void 0,
          gY = arguments.length > 8 ? arguments[8] : void 0,
          aY = arguments.length > 9 ? arguments[9] : void 0,
          vY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const uY = this.beginAnimation(YY, rY, DY, AY, IY, RY, OY, !1, gY, aY, vY);
        return uY.weight = FY, uY
      }, YY.prototype.beginAnimation = function(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          IY = arguments.length > 5 ? arguments[5] : void 0,
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gY = arguments.length > 8 ? arguments[8] : void 0,
          aY = arguments.length > 9 ? arguments[9] : void 0,
          vY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (AY < 0) {
          const YY = rY;
          rY = DY, DY = YY, AY = -AY
        }
        rY > DY && (AY = -AY), OY && this.stopAnimation(YY, void 0, gY), RY || (RY = new KY(this, YY, rY, DY, FY, AY, IY, void 0, aY, vY));
        const uY = !gY || gY(YY);
        if (YY.animations && uY && RY.appendAnimations(YY, YY.animations), YY.getAnimatables) {
          const vY = YY.getAnimatables();
          for (let YY = 0; YY < vY.length; YY++) this.beginAnimation(vY[YY], rY, DY, FY, AY, IY, RY, OY, gY, aY)
        }
        return RY.reset(), RY
      }, YY.prototype.beginHierarchyAnimation = function(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 ? arguments[7] : void 0,
          gY = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          aY = arguments.length > 9 ? arguments[9] : void 0,
          vY = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const uY = YY.getDescendants(rY),
          sY = [];
        sY.push(this.beginAnimation(YY, DY, FY, AY, IY, RY, OY, gY, aY, void 0, vY));
        for (const iY of uY) sY.push(this.beginAnimation(iY, DY, FY, AY, IY, RY, OY, gY, aY, void 0, vY));
        return sY
      }, YY.prototype.beginDirectAnimation = function(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (IY < 0) {
          const YY = DY;
          DY = FY, FY = YY, IY = -IY
        }
        DY > FY && (IY = -IY);
        return new KY(this, YY, DY, FY, AY, IY, arguments.length > 6 ? arguments[6] : void 0, rY, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, YY.prototype.beginDirectHierarchyAnimation = function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        let aY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const vY = YY.getDescendants(rY),
          uY = [];
        uY.push(this.beginDirectAnimation(YY, DY, FY, AY, IY, RY, OY, gY, aY));
        for (const sY of vY) uY.push(this.beginDirectAnimation(sY, DY, FY, AY, IY, RY, OY, gY, aY));
        return uY
      }, YY.prototype.getAnimatableByTarget = function(YY) {
        for (let rY = 0; rY < this._activeAnimatables.length; rY++)
          if (this._activeAnimatables[rY].target === YY) return this._activeAnimatables[rY];
        return null
      }, YY.prototype.getAllAnimatablesByTarget = function(YY) {
        const rY = [];
        for (let DY = 0; DY < this._activeAnimatables.length; DY++) this._activeAnimatables[DY].target === YY && rY.push(this._activeAnimatables[DY]);
        return rY
      }, YY.prototype.stopAnimation = function(YY, rY, DY) {
        const FY = this.getAllAnimatablesByTarget(YY);
        for (const AY of FY) AY.stop(rY, DY)
      }, YY.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let YY = 0; YY < this._activeAnimatables.length; YY++) this._activeAnimatables[YY].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const YY of this.animationGroups) YY.stop()
      })
    }
    KY.ProcessPausedAnimatables = !1;
    var CY, fY = DY(36539),
      jY = DY(39347),
      hY = DY(39029);
    class dY extends jY.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(YY) {
        (YY.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.brY(YY), this._markAsDirtyAndDecompose())
      }
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(YY, rY.hT(), !1), this.name = YY, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = rY, this._localMatrix = FY?.clone() ?? IY.e.Identity(), this._restMatrix = AY ?? this._localMatrix.clone(), this._bindMatrix = RY ?? this._localMatrix.clone(), this._index = OY, this._absoluteMatrix = new IY.e, this._absoluteBindMatrix = new IY.e, this._absoluteInverseBindMatrix = new IY.e, this._finalMatrix = new IY.e, rY.bones.push(this), this.setParent(DY, !1), this._updateAbsoluteBindMatrices()
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
      set parent(YY) {
        this.setParent(YY)
      }
      setParent(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== YY) {
          if (this.parent) {
            const YY = this.parent.children.indexOf(this); - 1 !== YY && this.parent.children.splice(YY, 1)
          }
          this._parentNode = YY, this.parent && this.parent.children.push(this), rY && this._updateAbsoluteBindMatrices(), this.nYY()
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
      setRestMatrix(YY) {
        this._restMatrix.brY(YY)
      }
      setRestPose(YY) {
        this.setRestMatrix(YY)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(YY) {
        this.m_(YY)
      }
      setBindPose(YY) {
        this.setBindMatrix(YY)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const YY = IY.n.xy[0],
            rY = IY.n.Quaternion[0],
            DY = IY.n.xy[1];
          this.getRestMatrix().decompose(YY, rY, DY), this._linkedTransformNode.position.brY(DY), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? IY.g.Identity(), this._linkedTransformNode.rotationQuaternion.brY(rY), this._linkedTransformNode.pa.brY(YY)
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
      linkTransformNode(YY) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = YY, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.aYY
      }
      set position(YY) {
        this._decompose(), this.aYY.brY(YY), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(YY) {
        this.setRotation(YY)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(YY) {
        this.setRotationQuaternion(YY)
      }
      get pa() {
        return this.getScale()
      }
      set pa(YY) {
        this.setScale(YY)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = IY.r.Zero(), this._localRotation = IY.g.Zero(), this.aYY = IY.r.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.aYY))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, IY.e.ComposeToRef(this._localScaling, this._localRotation, this.aYY, this._localMatrix)) : this._needToCompose = !1)
      }
      m_(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.brY(YY), rY && this._updateAbsoluteBindMatrices(), DY ? this._matrix = YY : this.nYY()
      }
      _updateAbsoluteBindMatrices(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (YY || (YY = this._bindMatrix), this.parent ? YY.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.brY(YY), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), rY)
          for (let DY = 0; DY < this.children.length; DY++) this.children[DY]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      nYY() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.nYY(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.nYY(), this._needToDecompose = !0
      }
      _updatePosition(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AY = this.getLocalMatrix();
        if (0 == rY) FY ? (AY.addAtIndex(12, YY.x), AY.addAtIndex(13, YY.y), AY.addAtIndex(14, YY.z)) : AY.setTranslationFromFloats(YY.x, YY.y, YY.z);
        else {
          const rY = dY._TmpMats[0],
            RY = dY._TmpVecs[0];
          this.parent ? (rY.brY(this.parent.getAbsoluteMatrix()), DY && rY.multiplyToRef(DY.getWorldMatrix(), rY)) : IY.e.IdentityToRef(rY), FY && rY.setTranslationFromFloats(0, 0, 0), rY.invert(), IY.r.TransformCoordinatesToRef(YY, rY, RY), FY ? (AY.addAtIndex(12, RY.x), AY.addAtIndex(13, RY.y), AY.addAtIndex(14, RY.z)) : AY.setTranslationFromFloats(RY.x, RY.y, RY.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(YY, rY, DY, !0)
      }
      setPosition(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(YY, rY, DY, !1)
      }
      setAbsolutePosition(YY, rY) {
        this.setPosition(YY, 1, rY)
      }
      scale(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AY = this.getLocalMatrix(),
          RY = dY._TmpMats[0];
        IY.e.ScalingToRef(YY, rY, DY, RY), RY.multiplyToRef(AY, AY), RY.invert();
        for (const IY of this.children) {
          const FY = IY.getLocalMatrix();
          FY.multiplyToRef(RY, FY), FY.multiplyAtIndex(12, YY), FY.multiplyAtIndex(13, rY), FY.multiplyAtIndex(14, DY), IY._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), FY)
          for (const IY of this.children) IY.scale(YY, rY, DY, FY)
      }
      setScale(YY) {
        this._decompose(), this._localScaling.brY(YY), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(YY) {
        this._decompose(), YY.brY(this._localScaling)
      }
      setYawPitchRoll(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === FY) {
          const RY = dY._TmpQuat;
          return IY.g.RotationYawPitchRollToRef(YY, rY, DY, RY), void this.setRotationQuaternion(RY, FY, AY)
        }
        const RY = dY._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(RY, AY)) return;
        const OY = dY._TmpMats[1];
        IY.e.RotationYawPitchRollToRef(YY, rY, DY, OY), RY.multiplyToRef(OY, OY), this._rotateWithMatrix(OY, FY, AY)
      }
      rotate(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        const AY = dY._TmpMats[0];
        AY.setTranslationFromFloats(0, 0, 0), IY.e.RotationAxisToRef(YY, rY, AY), this._rotateWithMatrix(AY, DY, FY)
      }
      setAxisAngle(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === DY) {
          const AY = dY._TmpQuat;
          return IY.g.RotationAxisToRef(YY, rY, AY), void this.setRotationQuaternion(AY, DY, FY)
        }
        const AY = dY._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(AY, FY)) return;
        const RY = dY._TmpMats[1];
        IY.e.RotationAxisToRef(YY, rY, RY), AY.multiplyToRef(RY, RY), this._rotateWithMatrix(RY, DY, FY)
      }
      setRotation(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(YY.y, YY.x, YY.z, rY, DY)
      }
      setRotationQuaternion(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === rY) return this._decompose(), this._localRotation.brY(YY), void this._markAsDirtyAndCompose();
        const FY = dY._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(FY, DY)) return;
        const AY = dY._TmpMats[1];
        IY.e.FromQuaternionToRef(YY, AY), FY.multiplyToRef(AY, AY), this._rotateWithMatrix(AY, rY, DY)
      }
      setRotationMatrix(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === rY) {
          const FY = dY._TmpQuat;
          return IY.g.FromRotationMatrixToRef(YY, FY), void this.setRotationQuaternion(FY, rY, DY)
        }
        const FY = dY._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(FY, DY)) return;
        const AY = dY._TmpMats[1];
        AY.brY(YY), FY.multiplyToRef(YY, AY), this._rotateWithMatrix(AY, rY, DY)
      }
      _rotateWithMatrix(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = this.getLocalMatrix(),
          AY = FY.m[12],
          IY = FY.m[13],
          RY = FY.m[14],
          OY = this.getParent(),
          gY = dY._TmpMats[3],
          aY = dY._TmpMats[4];
        OY && 1 == rY ? (DY ? (gY.brY(DY.getWorldMatrix()), OY.getAbsoluteMatrix().multiplyToRef(gY, gY)) : gY.brY(OY.getAbsoluteMatrix()), aY.brY(gY), aY.invert(), FY.multiplyToRef(gY, FY), FY.multiplyToRef(YY, FY), FY.multiplyToRef(aY, FY)) : 1 == rY && DY ? (gY.brY(DY.getWorldMatrix()), aY.brY(gY), aY.invert(), FY.multiplyToRef(gY, FY), FY.multiplyToRef(YY, FY), FY.multiplyToRef(aY, FY)) : FY.multiplyToRef(YY, FY), FY.setTranslationFromFloats(AY, IY, RY), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(YY, rY) {
        const DY = dY._TmpMats[2];
        return YY.brY(this.getAbsoluteMatrix()), rY ? (YY.multiplyToRef(rY.getWorldMatrix(), YY), IY.e.ScalingToRef(rY.pa.x, rY.pa.y, rY.pa.z, DY)) : IY.e.IdentityToRef(DY), YY.invert(), !isNaN(YY.m[0]) && (DY.multiplyAtIndex(0, this._scalingDeterminant), YY.multiplyToRef(DY, YY), !0)
      }
      lE() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = IY.r.Zero();
        return this.getPositionToRef(YY, rY, DY), DY
      }
      getPositionToRef() {
        let YY = arguments.length > 1 ? arguments[1] : void 0,
          rY = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const YY = this.getLocalMatrix();
          rY.x = YY.m[12], rY.y = YY.m[13], rY.z = YY.m[14]
        } else {
          const DY = dY._TmpMats[0].brY(this.getAbsoluteMatrix());
          YY && DY.multiplyToRef(YY.getWorldMatrix(), DY), rY.x = DY.m[12], rY.y = DY.m[13], rY.z = DY.m[14]
        }
      }
      getAbsolutePosition() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const rY = IY.r.Zero();
        return this.getPositionToRef(1, YY, rY), rY
      }
      getAbsolutePositionToRef(YY, rY) {
        this.getPositionToRef(1, YY, rY)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.brY(this._localMatrix);
          const YY = this._skeleton.getPoseMatrix();
          YY && this._absoluteMatrix.multiplyToRef(YY, this._absoluteMatrix)
        }
        const YY = this.children,
          rY = YY.length;
        for (let DY = 0; DY < rY; DY++) YY[DY].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      zq(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = IY.r.Zero();
        return this.getDirectionToRef(YY, rY, DY), DY
      }
      getDirectionToRef(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = dY._TmpMats[0].brY(this.getAbsoluteMatrix());
        rY && FY.multiplyToRef(rY.getWorldMatrix(), FY), IY.r.TransformNormalToRef(YY, FY, DY), DY.normalize()
      }
      getRotation() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = IY.r.Zero();
        return this.getRotationToRef(YY, rY, DY), DY
      }
      getRotationToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = dY._TmpQuat;
        this.getRotationQuaternionToRef(YY, rY, FY), FY.toEulerAnglesToRef(DY)
      }
      getRotationQuaternion() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = IY.g.Identity();
        return this.getRotationQuaternionToRef(YY, rY, DY), DY
      }
      getRotationQuaternionToRef() {
        let YY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          rY = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), rY.brY(this._localRotation);
        else {
          const DY = dY._TmpMats[0],
            FY = this.getAbsoluteMatrix();
          YY ? FY.multiplyToRef(YY.getWorldMatrix(), DY) : DY.brY(FY), DY.multiplyAtIndex(0, this._scalingDeterminant), DY.multiplyAtIndex(1, this._scalingDeterminant), DY.multiplyAtIndex(2, this._scalingDeterminant), DY.decompose(void 0, rY, void 0)
        }
      }
      getRotationMatrix() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 ? arguments[1] : void 0;
        const DY = IY.e.Identity();
        return this.getRotationMatrixToRef(YY, rY, DY), DY
      }
      getRotationMatrixToRef() {
        let YY = arguments.length > 1 ? arguments[1] : void 0,
          rY = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(rY);
        else {
          const DY = dY._TmpMats[0],
            FY = this.getAbsoluteMatrix();
          YY ? FY.multiplyToRef(YY.getWorldMatrix(), DY) : DY.brY(FY), DY.multiplyAtIndex(0, this._scalingDeterminant), DY.multiplyAtIndex(1, this._scalingDeterminant), DY.multiplyAtIndex(2, this._scalingDeterminant), DY.getRotationMatrixToRef(rY)
        }
      }
      getAbsolutePositionFromLocal(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = IY.r.Zero();
        return this.getAbsolutePositionFromLocalToRef(YY, rY, DY), DY
      }
      getAbsolutePositionFromLocalToRef(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = dY._TmpMats[0].brY(this.getAbsoluteMatrix());
        rY && FY.multiplyToRef(rY.getWorldMatrix(), FY), IY.r.TransformCoordinatesToRef(YY, FY, DY)
      }
      getLocalPositionFromAbsolute(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const DY = IY.r.Zero();
        return this.getLocalPositionFromAbsoluteToRef(YY, rY, DY), DY
      }
      getLocalPositionFromAbsoluteToRef(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = dY._TmpMats[0].brY(this.getAbsoluteMatrix());
        rY && FY.multiplyToRef(rY.getWorldMatrix(), FY), FY.invert(), IY.r.TransformCoordinatesToRef(YY, FY, DY)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const YY = this._skeleton.bones.indexOf(this);
        if (-1 !== YY && this._skeleton.bones.splice(YY, 1), this._parentNode && this._parentNode.children) {
          const YY = this._parentNode.children,
            rY = YY.indexOf(this); - 1 !== rY && YY.splice(rY, 1)
        }
        super.dispose()
      }
    }
    dY._TmpVecs = (0, fY.c)(2, IY.r.Zero), dY._TmpQuat = IY.g.Identity(), dY._TmpMats = (0, fY.c)(5, IY.e.Identity), (CY = dY.prototype).copyAnimationRange ?? (CY.copyAnimationRange = (0, hY.g)("Bone", "copyAnimationRange"));
    var JY = DY(39217);
    let MY = !1;
    var wY = DY(39098),
      bY = DY(39437),
      XY = DY(39448),
      qY = DY(39444),
      pY = DY(39252);

    function kY(YY, rY) {
      const DY = (0, iY.RandomRange)(0, 1);
      vY.d.LerpToRef(rY.color1, rY.color2, DY, YY.color)
    }

    function GY(YY, rY) {
      rY.colorDead.subtractToRef(YY.color, rY._colorDiff), rY._colorDiff.scaleToRef(1 / YY.lifeTime, YY.colorStep)
    }

    function xY(YY, rY) {
      YY._properties.currentColorGradient = rY._colorGradients[0], YY._properties.currentColorGradient.getColorToRef(YY.color), YY._properties.currentColor1.brY(YY.color), rY._colorGradients.length > 1 ? rY._colorGradients[1].getColorToRef(YY._properties.currentColor2) : YY._properties.currentColor2.brY(YY.color)
    }

    function nY(YY, rY) {
      const DY = rY._colorGradients;
      FY.g.GetCurrentGradient(rY._ratio, DY, ((rY, DY, FY) => {
        rY !== YY._properties.currentColorGradient && (YY._properties.currentColor1.brY(YY._properties.currentColor2), DY.getColorToRef(YY._properties.currentColor2), YY._properties.currentColorGradient = rY), vY.d.LerpToRef(YY._properties.currentColor1, YY._properties.currentColor2, FY, YY.color), YY.color.a < 0 && (YY.color.a = 0)
      }))
    }

    function PY(YY, rY) {
      YY.colorStep.scaleToRef(rY._scaledUpdateSpeed, rY._scaledColorStep), YY.color.addInPlace(rY._scaledColorStep), YY.color.a < 0 && (YY.color.a = 0)
    }

    function UY(YY, rY) {
      FY.g.GetCurrentGradient(rY._ratio, rY._angularSpeedGradients, ((rY, DY, FY) => {
        rY !== YY._properties.currentAngularSpeedGradient && (YY._properties.currentAngularSpeed1 = YY._properties.currentAngularSpeed2, YY._properties.currentAngularSpeed2 = DY.getFactor(), YY._properties.currentAngularSpeedGradient = rY), YY.angularSpeed = (0, iY.Lerp)(YY._properties.currentAngularSpeed1, YY._properties.currentAngularSpeed2, FY)
      }))
    }

    function LY(YY, rY) {
      YY.angle += YY.angularSpeed * rY._scaledUpdateSpeed
    }

    function tY(YY, rY) {
      rY.particleEmitterType.startDirectionFunction(rY._emitterWorldMatrix, YY.direction, YY, rY.isLocal, rY._emitterInverseWorldMatrix)
    }

    function Yr(YY, rY) {
      rY.startDirectionFunction(rY._emitterWorldMatrix, YY.direction, YY, rY.isLocal)
    }

    function rr(YY, rY) {
      YY._properties.currentVelocityGradient = rY._velocityGradients[0], YY._properties.currentVelocity1 = YY._properties.currentVelocityGradient.getFactor(), rY._velocityGradients.length > 1 ? YY._properties.currentVelocity2 = rY._velocityGradients[1].getFactor() : YY._properties.currentVelocity2 = YY._properties.currentVelocity1
    }

    function Dr(YY, rY) {
      YY._properties.currentLimitVelocityGradient = rY._limitVelocityGradients[0], YY._properties.currentLimitVelocity1 = YY._properties.currentLimitVelocityGradient.getFactor(), rY._limitVelocityGradients.length > 1 ? YY._properties.currentLimitVelocity2 = rY._limitVelocityGradients[1].getFactor() : YY._properties.currentLimitVelocity2 = YY._properties.currentLimitVelocity1
    }

    function Fr(YY, rY) {
      FY.g.GetCurrentGradient(rY._ratio, rY._velocityGradients, ((rY, DY, FY) => {
        rY !== YY._properties.currentVelocityGradient && (YY._properties.currentVelocity1 = YY._properties.currentVelocity2, YY._properties.currentVelocity2 = DY.getFactor(), YY._properties.currentVelocityGradient = rY), YY._properties.directionScale *= (0, iY.Lerp)(YY._properties.currentVelocity1, YY._properties.currentVelocity2, FY)
      }))
    }

    function Ar(YY, rY) {
      FY.g.GetCurrentGradient(rY._ratio, rY._limitVelocityGradients, ((DY, FY, AY) => {
        DY !== YY._properties.currentLimitVelocityGradient && (YY._properties.currentLimitVelocity1 = YY._properties.currentLimitVelocity2, YY._properties.currentLimitVelocity2 = FY.getFactor(), YY._properties.currentLimitVelocityGradient = DY);
        const IY = (0, iY.Lerp)(YY._properties.currentLimitVelocity1, YY._properties.currentLimitVelocity2, AY);
        YY.direction.length() > IY && YY.direction.scaleInPlace(rY.limitVelocityDamping)
      }))
    }

    function Ir(YY) {
      YY.direction.scaleToRef(YY._properties.directionScale, YY._properties.scaledDirection)
    }

    function Rr(YY, rY) {
      rY.particleEmitterType.startPositionFunction(rY._emitterWorldMatrix, YY.position, YY, rY.isLocal)
    }

    function Or(YY, rY) {
      rY.startPositionFunction(rY._emitterWorldMatrix, YY.position, YY, rY.isLocal)
    }

    function gr(YY, rY) {
      YY._properties.localPosition ? YY._properties.localPosition.brY(YY.position) : YY._properties.localPosition = YY.position.clone(), IY.r.TransformCoordinatesToRef(YY._properties.localPosition, rY._emitterWorldMatrix, YY.position)
    }

    function ar(YY, rY) {
      rY.isLocal && YY._properties.localPosition ? (YY._properties.localPosition.addInPlace(YY._properties.scaledDirection), IY.r.TransformCoordinatesToRef(YY._properties.localPosition, rY._emitterWorldMatrix, YY.position)) : YY.position.addInPlace(YY._properties.scaledDirection)
    }

    function vr(YY, rY) {
      YY._properties.currentDragGradient = rY._dragGradients[0], YY._properties.currentDrag1 = YY._properties.currentDragGradient.getFactor(), rY._dragGradients.length > 1 ? YY._properties.currentDrag2 = rY._dragGradients[1].getFactor() : YY._properties.currentDrag2 = YY._properties.currentDrag1
    }

    function ur(YY, rY) {
      FY.g.GetCurrentGradient(rY._ratio, rY._dragGradients, ((rY, DY, FY) => {
        rY !== YY._properties.currentDragGradient && (YY._properties.currentDrag1 = YY._properties.currentDrag2, YY._properties.currentDrag2 = DY.getFactor(), YY._properties.currentDragGradient = rY);
        const AY = (0, iY.Lerp)(YY._properties.currentDrag1, YY._properties.currentDrag2, FY);
        YY._properties.scaledDirection.scaleInPlace(1 - AY)
      }))
    }

    function sr(YY, rY) {
      YY._properties.randomNoiseCoordinates1 && YY._properties.randomNoiseCoordinates2 ? (YY._properties.randomNoiseCoordinates1.p_(Math.random(), Math.random(), Math.random()), YY._properties.randomNoiseCoordinates2.p_(Math.random(), Math.random(), Math.random())) : (YY._properties.randomNoiseCoordinates1 = new IY.r(Math.random(), Math.random(), Math.random()), YY._properties.randomNoiseCoordinates2 = new IY.r(Math.random(), Math.random(), Math.random()))
    }

    function ir(YY, rY) {
      const DY = rY._noiseTextureData,
        FY = rY._noiseTextureSize;
      if (DY && FY && YY._properties.randomNoiseCoordinates1 && YY._properties.randomNoiseCoordinates2) {
        const AY = rY._fetchR(YY._properties.randomNoiseCoordinates1.x, YY._properties.randomNoiseCoordinates1.y, FY.width, FY.height, DY),
          RY = rY._fetchR(YY._properties.randomNoiseCoordinates1.z, YY._properties.randomNoiseCoordinates2.x, FY.width, FY.height, DY),
          OY = rY._fetchR(YY._properties.randomNoiseCoordinates2.y, YY._properties.randomNoiseCoordinates2.z, FY.width, FY.height, DY),
          gY = IY.n.xy[0],
          aY = IY.n.xy[1];
        gY.p_((2 * AY - 1) * rY.noiseStrength.x, (2 * RY - 1) * rY.noiseStrength.y, (2 * OY - 1) * rY.noiseStrength.z), gY.scaleToRef(rY._tempScaledUpdateSpeed, aY), YY.direction.addInPlace(aY)
      }
    }

    function yr(YY, rY) {
      rY.gravity.scaleToRef(rY._tempScaledUpdateSpeed, rY._scaledGravity), YY.direction.addInPlace(rY._scaledGravity)
    }

    function Qr(YY, rY) {
      YY.size = (0, iY.RandomRange)(rY.minSize, rY.maxSize), YY.scale.p_((0, iY.RandomRange)(rY.minScaleX, rY.maxScaleX), (0, iY.RandomRange)(rY.minScaleY, rY.maxScaleY))
    }

    function or(YY, rY) {
      YY._properties.currentSizeGradient = rY._sizeGradients[0], YY._properties.currentSize1 = YY._properties.currentSizeGradient.getFactor(), YY.size = YY._properties.currentSize1, rY._sizeGradients.length > 1 ? YY._properties.currentSize2 = rY._sizeGradients[1].getFactor() : YY._properties.currentSize2 = YY._properties.currentSize1, YY.scale.p_((0, iY.RandomRange)(rY.minScaleX, rY.maxScaleX), (0, iY.RandomRange)(rY.minScaleY, rY.maxScaleY))
    }

    function Wr(YY, rY) {
      const DY = rY._actualFrame / rY.targetStopDuration;
      FY.g.GetCurrentGradient(DY, rY._startSizeGradients, ((DY, FY, AY) => {
        DY !== rY._currentStartSizeGradient && (rY._currentStartSize1 = rY._currentStartSize2, rY._currentStartSize2 = FY.getFactor(), rY._currentStartSizeGradient = DY);
        const IY = (0, iY.Lerp)(rY._currentStartSize1, rY._currentStartSize2, AY);
        YY.scale.scaleInPlace(IY)
      }))
    }

    function Er(YY, rY) {
      FY.g.GetCurrentGradient(rY._ratio, rY._sizeGradients, ((rY, DY, FY) => {
        rY !== YY._properties.currentSizeGradient && (YY._properties.currentSize1 = YY._properties.currentSize2, YY._properties.currentSize2 = DY.getFactor(), YY._properties.currentSizeGradient = rY), YY.size = (0, iY.Lerp)(YY._properties.currentSize1, YY._properties.currentSize2, FY)
      }))
    }

    function mr(YY, rY) {
      YY.remapData = new IY.v(0, 1, 0, 1)
    }

    function Vr(YY, rY) {
      rY._colorRemapGradients && rY._colorRemapGradients.length > 0 && FY.g.GetCurrentGradient(rY._ratio, rY._colorRemapGradients, ((rY, DY, FY) => {
        const AY = (0, iY.Lerp)(rY.factor1, DY.factor1, FY),
          IY = (0, iY.Lerp)(rY.factor2, DY.factor2, FY);
        YY.remapData.x = AY, YY.remapData.y = IY - AY
      })), rY._alphaRemapGradients && rY._alphaRemapGradients.length > 0 && FY.g.GetCurrentGradient(rY._ratio, rY._alphaRemapGradients, ((rY, DY, FY) => {
        const AY = (0, iY.Lerp)(rY.factor1, DY.factor1, FY),
          IY = (0, iY.Lerp)(rY.factor2, DY.factor2, FY);
        YY.remapData.z = AY, YY.remapData.w = IY - AY
      }))
    }

    function Sr(YY, rY) {
      const DY = (0, iY.Clamp)(rY._actualFrame / rY.targetStopDuration);
      FY.g.GetCurrentGradient(DY, rY._lifeTimeGradients, ((rY, FY) => {
        const AY = rY,
          IY = FY,
          RY = AY.getFactor(),
          OY = IY.getFactor(),
          gY = (DY - AY.gradient) / (IY.gradient - AY.gradient);
        YY.lifeTime = (0, iY.Lerp)(RY, OY, gY)
      })), rY._emitPower = (0, iY.RandomRange)(rY.minEmitPower, rY.maxEmitPower)
    }

    function lr(YY, rY) {
      YY.lifeTime = (0, iY.RandomRange)(rY.minLifeTime, rY.maxLifeTime), rY._emitPower = (0, iY.RandomRange)(rY.minEmitPower, rY.maxEmitPower)
    }

    function Tr(YY, rY) {
      0 === rY._emitPower ? (YY._properties.initialDirection ? YY._properties.initialDirection.brY(YY.direction) : YY._properties.initialDirection = YY.direction.clone(), YY.direction.set(0, 0, 0)) : (YY._properties.initialDirection = null, YY.direction.scaleInPlace(rY._emitPower)), YY.direction.addInPlace(rY._inheritedVelocityOffset)
    }

    function er(YY, rY) {
      YY.angularSpeed = (0, iY.RandomRange)(rY.minAngularSpeed, rY.maxAngularSpeed), YY.angle = (0, iY.RandomRange)(rY.minInitialRotation, rY.maxInitialRotation)
    }

    function Nr(YY, rY) {
      YY._properties.currentAngularSpeedGradient = rY._angularSpeedGradients[0], YY.angularSpeed = YY._properties.currentAngularSpeedGradient.getFactor(), YY._properties.currentAngularSpeed1 = YY.angularSpeed, rY._angularSpeedGradients.length > 1 ? YY._properties.currentAngularSpeed2 = rY._angularSpeedGradients[1].getFactor() : YY._properties.currentAngularSpeed2 = YY._properties.currentAngularSpeed1, YY.angle = (0, iY.RandomRange)(rY.minInitialRotation, rY.maxInitialRotation)
    }

    function Br(YY, rY) {
      YY._properties.initialStartSpriteCellId = rY.startSpriteCellID, YY._properties.initialEndSpriteCellId = rY.endSpriteCellID, YY._properties.initialSpriteCellLoop = rY.spriteCellLoop
    }

    function cr(YY, rY) {
      YY.previousItem = rY.previousItem, YY.nextItem = rY, rY.previousItem && (rY.previousItem.nextItem = YY), rY.previousItem = YY
    }

    function Kr(YY, rY) {
      YY.previousItem = rY, YY.nextItem = rY.nextItem, rY.nextItem && (rY.nextItem.previousItem = YY), rY.nextItem = YY
    }

    function Hr(YY) {
      YY.previousItem && (YY.previousItem.nextItem = YY.nextItem), YY.nextItem && (YY.nextItem.previousItem = YY.previousItem)
    }
    var zr = DY(39499);
    class Zr extends lY {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(YY) {
        this._startDirectionFunction !== YY && (this._startDirectionFunction = YY, this._directionCreation.process = YY ? Yr : tY)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(YY) {
        this._startPositionFunction !== YY && (this._startPositionFunction = YY, this._positionCreation.process = YY ? Or : Rr)
      }
      set onDispose(YY) {
        this._onDisposeObserver && this.wT.remove(this._onDisposeObserver), this._onDisposeObserver = this.wT.add(YY)
      }
      get CrY() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(YY) {
        this._useRampGradients !== YY && (this._useRampGradients = YY, this._resetEffect(), YY ? (this._rampCreation = {
          process: mr,
          previousItem: null,
          nextItem: null
        }, Kr(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Vr,
          previousItem: null,
          nextItem: null
        }, Kr(this._remapGradientProcessing, this._gravityProcessing))) : (Hr(this._rampCreation), Hr(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(YY) {
        this._isLocal !== YY && (this._isLocal = YY, YY ? (this._isLocalCreation = {
          process: gr,
          previousItem: null,
          nextItem: null
        }, Kr(this._isLocalCreation, this._positionCreation)) : Hr(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(YY) {
        this._animationSheetEnabled !== YY && (this._animationSheetEnabled = YY, YY ? (this._sheetCreation = {
          process: Br,
          previousItem: null,
          nextItem: null
        }, Kr(this._sheetCreation, this._colorDeadCreation)) : Hr(this._sheetCreation), this._reset())
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[YY]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[YY] ?? this._customWrappers[0]
      }
      setCustomEffect(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[rY] = new bY.b(this._engine), this._customWrappers[rY].effect = YY, this._customWrappers[rY].drawContext && (this._customWrappers[rY].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new AY.e), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(YY) {
        if (this.noiseTexture !== YY) {
          if (this._noiseTexture = YY, !YY) return Hr(this._noiseCreation), void Hr(this._noiseProcessing);
          this._noiseCreation = {
            process: sr,
            previousItem: null,
            nextItem: null
          }, Kr(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: ir,
            previousItem: null,
            nextItem: null
          }, Kr(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          RY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          OY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          aY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        MY || (MY = !0, ZY(JY.g, dY)), (0, wY.c)(), super(YY), this._emitterInverseWorldMatrix = IY.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new IY.r, this.wT = new AY.e, this.onStoppedObservable = new AY.e, this.onStartedObservable = new AY.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new vY.d(0, 0, 0, 0), this._colorDiff = new vY.d(0, 0, 0, 0), this._scaledGravity = IY.r.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = YY => {}, this.recycleParticle = YY => {
          const rY = this._particles.pop();
          rY !== YY && rY.copyTo(YY), rY.metadata = null, this._stockParticles.push(rY)
        }, this._createParticle = () => {
          let YY;
          return 0 !== this._stockParticles.length ? (YY = this._stockParticles.pop(), YY._reset()) : YY = new eY(this), this._prepareParticle(YY), YY
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = rY, this._epsilon = OY, DY && "Scene" !== DY.getClassName() ? (this._engine = DY, this.defaultProjectionMatrix = IY.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = DY || gY.d.LastCreatedScene, this._engine = this._scene.ky(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.YV.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: lr,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Rr,
          previousItem: null,
          nextItem: null
        }, Kr(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: tY,
          previousItem: null,
          nextItem: null
        }, Kr(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Tr,
          previousItem: null,
          nextItem: null
        }, Kr(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Qr,
          previousItem: null,
          nextItem: null
        }, Kr(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: er,
          previousItem: null,
          nextItem: null
        }, Kr(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: kY,
          previousItem: null,
          nextItem: null
        }, Kr(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: GY,
          previousItem: null,
          nextItem: null
        }, Kr(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, aY || (this._colorProcessing = {
          process: PY,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: LY,
          previousItem: null,
          nextItem: null
        }, Kr(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Ir,
          previousItem: null,
          nextItem: null
        }, Kr(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: ar,
          previousItem: null,
          nextItem: null
        }, Kr(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: yr,
          previousItem: null,
          nextItem: null
        }, Kr(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = RY, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new bY.b(this._engine)
        }, this._customWrappers[0].effect = FY, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new uY.e, this.updateFunction = YY => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((YY => {
            this._noiseTextureData = YY
          })));
          const rY = YY === this._particles;
          for (let DY = 0; DY < YY.length; DY++) {
            const FY = YY[DY];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const AY = FY.age;
            if (FY.age += this._tempScaledUpdateSpeed, FY.age > FY.lifeTime) {
              const YY = FY.age - AY,
                rY = FY.lifeTime - AY;
              this._tempScaledUpdateSpeed = rY * this._tempScaledUpdateSpeed / YY, FY.age = FY.lifeTime
            }
            this._ratio = FY.age / FY.lifeTime, FY._properties.directionScale = this._tempScaledUpdateSpeed;
            let IY = this._updateQueueStart;
            for (; IY;) IY.process(FY, this), IY = IY.nextItem;
            if (this._isAnimationSheetEnabled && !aY && FY.updateCellIndex(), FY._inheritParticleInfoToSubEmitters(), FY.age >= FY.lifeTime) {
              if (this._emitFromParticle(FY), FY._properties.attachedSubEmitters) {
                for (const YY of FY._properties.attachedSubEmitters) YY.particleSystem.disposeOnStop = !0, YY.particleSystem.stop();
                FY._properties.attachedSubEmitters = null
              }
              this.recycleParticle(FY), rY && DY--
            } else;
          }
        }
      }
      serialize(YY) {
        throw new Error("Method not implemented.")
      }
      clone(YY, rY) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Sr : this._lifeTimeCreation.process = lr
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Wr,
          previousItem: null,
          nextItem: null
        }, Kr(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Hr(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(YY) {
        this.targetStopDuration !== YY && (this._targetStopDuration = YY, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(YY, rY, DY) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, YY, rY, DY), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(YY) {
        return this._removeFactorGradient(this._lifeTimeGradients, YY), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(YY, rY, DY) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = or, this._sizeGradientProcessing = {
          process: Er,
          previousItem: null,
          nextItem: null
        }, cr(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, YY, rY, DY), this
      }
      removeSizeGradient(YY) {
        return this._removeFactorGradient(this._sizeGradients, YY), 0 === this._sizeGradients?.length && (Hr(this._sizeGradientProcessing), this._sizeCreation.process = Qr), this
      }
      addColorRemapGradient(YY, rY, DY) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, YY, rY, DY), this
      }
      removeColorRemapGradient(YY) {
        return this._removeFactorGradient(this._colorRemapGradients, YY), this
      }
      addAlphaRemapGradient(YY, rY, DY) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, YY, rY, DY), this
      }
      removeAlphaRemapGradient(YY) {
        return this._removeFactorGradient(this._alphaRemapGradients, YY), this
      }
      addAngularSpeedGradient(YY, rY, DY) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Nr, this._angularSpeedGradientProcessing = {
          process: UY,
          previousItem: null,
          nextItem: null
        }, cr(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, YY, rY, DY), this
      }
      removeAngularSpeedGradient(YY) {
        return this._removeFactorGradient(this._angularSpeedGradients, YY), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = er, Hr(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(YY, rY, DY) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: rr,
          previousItem: null,
          nextItem: null
        }, Kr(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Fr,
          previousItem: null,
          nextItem: null
        }, cr(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, YY, rY, DY), this
      }
      removeVelocityGradient(YY) {
        return this._removeFactorGradient(this._velocityGradients, YY), 0 === this._velocityGradients?.length && (Hr(this._velocityCreation), Hr(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(YY, rY, DY) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Dr,
          previousItem: null,
          nextItem: null
        }, Kr(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Ar,
          previousItem: null,
          nextItem: null
        }, Kr(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, YY, rY, DY), this
      }
      removeLimitVelocityGradient(YY) {
        return this._removeFactorGradient(this._limitVelocityGradients, YY), 0 === this._limitVelocityGradients?.length && (Hr(this._limitVelocityCreation), Hr(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(YY, rY, DY) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: vr,
          previousItem: null,
          nextItem: null
        }, cr(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: ur,
          previousItem: null,
          nextItem: null
        }, cr(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, YY, rY, DY), this
      }
      removeDragGradient(YY) {
        return this._removeFactorGradient(this._dragGradients, YY), 0 === this._dragGradients?.length && (Hr(this._dragCreation), Hr(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(YY, rY, DY) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, YY, rY, DY), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(YY) {
        return this._removeFactorGradient(this._startSizeGradients, YY), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const YY = new Uint8Array(4 * this._rawTextureWidth),
          rY = vY.i.Color3[0];
        for (let DY = 0; DY < this._rawTextureWidth; DY++) {
          const AY = DY / this._rawTextureWidth;
          FY.g.GetCurrentGradient(AY, this._rampGradients, ((FY, AY, IY) => {
            vY.c.LerpToRef(FY.color, AY.color, IY, rY), YY[4 * DY] = 255 * rY.r, YY[4 * DY + 1] = 255 * rY.g, YY[4 * DY + 2] = 255 * rY.b, YY[4 * DY + 3] = 255
          }))
        }
        this._rampGradientsTexture = OY.c.CreateRGBATexture(YY, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((YY, rY) => YY.gradient < rY.gradient ? -1 : YY.gradient > rY.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(YY, rY) {
        this._rampGradients || (this._rampGradients = []);
        const DY = new FY.c(YY, rY);
        return this._rampGradients.push(DY), this._syncRampGradientTexture(), this
      }
      removeRampGradient(YY) {
        return this._removeGradientAndTexture(YY, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(YY, rY, DY) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = xY, this._colorProcessing.process = nY);
        const AY = new FY.b(YY, rY, DY);
        return this._colorGradients.push(AY), this._colorGradients.sort(((YY, rY) => YY.gradient < rY.gradient ? -1 : YY.gradient > rY.gradient ? 1 : 0)), this
      }
      removeColorGradient(YY) {
        if (!this._colorGradients) return this;
        let rY = 0;
        for (const DY of this._colorGradients) {
          if (DY.gradient === YY) {
            this._colorGradients.splice(rY, 1);
            break
          }
          rY++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = kY, this._colorProcessing.process = PY), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const YY of this._drawWrappers)
            if (YY)
              for (const rY of YY) rY?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(YY, rY, DY, FY, AY) {
        return AY[4 * (((YY = .5 * Math.abs(YY) + .5) * DY % DY | 0) + ((rY = .5 * Math.abs(rY) + .5) * FY % FY | 0) * DY)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const YY = this._engine,
          rY = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * rY), this._vertexBuffer = new RY.c(YY, this._vertexData, !0, rY);
        let DY = 0;
        const FY = this._vertexBuffer.createVertexBuffer(RY.l.PositionKind, DY, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[RY.l.PositionKind] = FY, DY += 3;
        const AY = this._vertexBuffer.createVertexBuffer(RY.l.ColorKind, DY, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[RY.l.ColorKind] = AY, DY += 4;
        const IY = this._vertexBuffer.createVertexBuffer("angle", DY, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = IY, DY += 1;
        const OY = this._vertexBuffer.createVertexBuffer("size", DY, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = OY, DY += 2, this._isAnimationSheetEnabled) {
          const YY = this._vertexBuffer.createVertexBuffer("cellIndex", DY, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = YY, DY += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const YY = this._vertexBuffer.createVertexBuffer("direction", DY, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = YY, DY += 3
        }
        if (this._useRampGradients) {
          const YY = this._vertexBuffer.createVertexBuffer("remapData", DY, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = YY, DY += 4
        }
        let gY;
        if (this._useInstancing) {
          const rY = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new RY.c(YY, rY, !1, 2), gY = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else gY = this._vertexBuffer.createVertexBuffer("offset", DY, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = gY, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const YY = [],
          rY = [];
        let DY = 0;
        for (let FY = 0; FY < this._capacity; FY++) YY.push(DY), YY.push(DY + 1), YY.push(DY + 2), YY.push(DY), YY.push(DY + 2), YY.push(DY + 3), rY.push(DY, DY + 1, DY + 1, DY + 2, DY + 2, DY + 3, DY + 3, DY, DY, DY + 3), DY += 4;
        this._indexBuffer = this._engine.createIndexBuffer(YY), this._linesIndexBuffer = this._engine.createIndexBuffer(rY)
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (YY) return this.startDelay = YY, void setTimeout((() => {
          this.start(0)
        }), YY);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const YY = this.noiseTexture;
          if (YY && YY.onGeneratedObservable) YY.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let rY = 0; rY < this.preWarmCycles; rY++) this.animate(!0), YY.render()
            }))
          }));
          else
            for (let rY = 0; rY < this.preWarmCycles; rY++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(YY))
      }
      _postStop(YY) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(YY, rY, DY, FY) {
        let AY = YY * this._vertexBufferSize;
        const RY = IY.n.xy[0].brY(this._scene?.floatingOriginOffset || IY.r.ZeroReadOnly);
        if (this._vertexData[AY++] = rY.position.x + this.worldOffset.x - RY.x, this._vertexData[AY++] = rY.position.y + this.worldOffset.y - RY.y, this._vertexData[AY++] = rY.position.z + this.worldOffset.z - RY.z, this._vertexData[AY++] = rY.color.r, this._vertexData[AY++] = rY.color.g, this._vertexData[AY++] = rY.color.b, this._vertexData[AY++] = rY.color.a, this._vertexData[AY++] = rY.angle, this._vertexData[AY++] = rY.scale.x * rY.size, this._vertexData[AY++] = rY.scale.y * rY.size, this._isAnimationSheetEnabled && (this._vertexData[AY++] = rY.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[AY++] = rY.direction.x, this._vertexData[AY++] = rY.direction.y, this._vertexData[AY++] = rY.direction.z);
        else if (rY._properties.initialDirection) {
          let YY = rY._properties.initialDirection;
          this.isLocal && (IY.r.TransformNormalToRef(YY, this._emitterWorldMatrix, IY.n.xy[0]), YY = IY.n.xy[0]), 0 === YY.x && 0 === YY.z && (YY.x = .001), this._vertexData[AY++] = YY.x, this._vertexData[AY++] = YY.y, this._vertexData[AY++] = YY.z
        } else {
          let YY = rY.direction;
          this.isLocal && (IY.r.TransformNormalToRef(YY, this._emitterWorldMatrix, IY.n.xy[0]), YY = IY.n.xy[0]), 0 === YY.x && 0 === YY.z && (YY.x = .001), this._vertexData[AY++] = YY.x, this._vertexData[AY++] = YY.y, this._vertexData[AY++] = YY.z
        }
        this._useRampGradients && rY.remapData && (this._vertexData[AY++] = rY.remapData.x, this._vertexData[AY++] = rY.remapData.y, this._vertexData[AY++] = rY.remapData.z, this._vertexData[AY++] = rY.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === DY ? DY = this._epsilon : 1 === DY && (DY = 1 - this._epsilon), 0 === FY ? FY = this._epsilon : 1 === FY && (FY = 1 - this._epsilon)), this._vertexData[AY++] = DY, this._vertexData[AY] = FY)
      }
      _prepareParticle(YY) {}
      _createNewOnes(YY) {
        let rY;
        for (let DY = 0; DY < YY && this._particles.length !== this._capacity; DY++) {
          rY = this._createParticle(), this._particles.push(rY);
          let YY = this._createQueueStart;
          for (; YY;) YY.process(rY, this), YY = YY.nextItem;
          rY._inheritParticleInfoToSubEmitters()
        }
      }
      _update(YY) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const YY = this.emitter;
          this._emitterWorldMatrix = YY.getWorldMatrix()
        } else {
          const YY = this.emitter;
          this._emitterWorldMatrix = IY.e.Translation(YY.x, YY.y, YY.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(YY)
      }
      static _GetAttributeNamesOrOptions() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = [RY.l.PositionKind, RY.l.ColorKind, "angle", "offset", "size"];
        return YY && FY.push("cellIndex"), rY || FY.push("direction"), DY && FY.push("remapData"), FY
      }
      static _GetEffectCreationOptions() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, XY.b)(FY), YY && FY.push("particlesInfos"), rY && FY.push("logarithmicDepthConstant"), DY && (FY.push("vFogInfos"), FY.push("vFogColor")), FY
      }
      fillDefines(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, XY.e)(this, this._scene, YY), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && YY.push("#define FOG")), this._isAnimationSheetEnabled && YY.push("#define ANIMATESHEET"), this.useLogarithmicDepth && YY.push("#define LOGARITHMICDEPTH"), rY === lY.BLENDMODE_MULTIPLY && YY.push("#define BLENDMULTIPLYMODE"), this.isLocal && YY.push("#define LOCAL"), this._useRampGradients && YY.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (YY.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            YY.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            YY.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && YY.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            YY.push("#define BILLBOARDMODE_ALL")
        }
        DY && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), YY.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(YY, rY, DY) {
        rY.push(...Zr._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), YY.push(...Zr._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), DY.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, pY.g)(YY, this._imageProcessingConfigurationDefines), (0, pY.c)(DY, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(YY) {
        var rY;
        const DY = this._getCustomDrawWrapper(YY);
        if (DY?.effect) return DY;
        const FY = [];
        this.fillDefines(FY, YY);
        const IY = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          RY = zr.d._PrepareStringDefines(IY, FY),
          OY = RY ? zr.d.GetConfiguration(IY) : void 0;
        let gY = this._drawWrappers[IY];
        gY || (gY = this._drawWrappers[IY] = [], 0 === IY || this._renderPassObserver || (this._renderPassObserver = ((rY = this._engine)._onReleaseRenderPassObservable ?? (rY._onReleaseRenderPassObservable = new AY.e)).add((YY => {
          const rY = this._drawWrappers[YY];
          if (rY) {
            for (const YY of rY) YY?.dispose();
            delete this._drawWrappers[YY]
          }
        }))));
        let aY = gY[YY];
        aY || (aY = new bY.b(this._engine), aY.drawContext && (aY.drawContext.useInstancing = this._useInstancing), gY[YY] = aY);
        const vY = FY.join("\n");
        if (aY.defines !== vY) {
          const YY = [],
            rY = [],
            DY = [];
          this.fillUniformsAttributesAndSamplerNames(rY, YY, DY), RY && (rY.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== OY?.defines.PREPASS_LOCAL_POSITION_INDEX && rY.push("inverseEmitterWM", "geometryWorldOffset")), aY.setEffect(this._engine.createEffect("particles", {
            attributes: YY,
            uniformsNames: rY,
            samplers: DY,
            defines: vY,
            shaderLanguage: this._shaderLanguage,
            multiTarget: RY,
            indexParameters: RY ? {
              buffersCount: OY?._mrtCount ?? 0
            } : void 0
          }, this._engine), vY)
        }
        return aY
      }
      _bindGeometryRendering(YY) {
        const rY = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          DY = zr.d.GetConfiguration(rY);
        if (!DY?._defines) return;
        YY.setFloat("objectId", 0), YY.setInt("meshBlendTag", 0);
        const FY = this._scene?.activeCamera;
        if (YY.setFloat2("cameraInfo", FY?.minZ ?? 0, FY?.maxZ ?? 1), this.isLocal && void 0 !== DY.defines.PREPASS_LOCAL_POSITION_INDEX) {
          YY.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const rY = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || IY.r.ZeroReadOnly, IY.n.xy[0]);
          YY.setVector3("geometryWorldOffset", rY)
        }
      }
      animate() {
        let YY, rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!rY && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (rY ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) YY = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const rY = this._calculateEmitRate();
            YY = rY * this._scaledUpdateSpeed | 0, this._newPartsExcess += rY * this._scaledUpdateSpeed - YY
          }
          if (this._newPartsExcess > 1 && (YY += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? YY = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(YY), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !rY) {
            let YY = 0;
            for (let rY = 0; rY < this._particles.length; rY++) {
              const DY = this._particles[rY];
              this._appendParticleVertices(YY, DY), YY += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const YY = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  rY = this._particles.length;
                rY < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, rY * YY, this._fixedCapacityHighWaterMark * YY), this._fixedCapacityHighWaterMark = rY, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const YY = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * YY), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let YY = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const rY = this._actualFrame / this.targetStopDuration;
          FY.g.GetCurrentGradient(rY, this._emitRateGradients, ((rY, DY, FY) => {
            rY !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = DY.getFactor(), this._currentEmitRateGradient = rY), YY = (0, iY.Lerp)(this._currentEmitRate1, this._currentEmitRate2, FY)
          }))
        }
        return YY
      }
      _appendParticleVertices(YY, rY) {
        this._appendParticleVertex(YY++, rY, 0, 0), this._useInstancing || (this._appendParticleVertex(YY++, rY, 1, 0), this._appendParticleVertex(YY++, rY, 1, 1), this._appendParticleVertex(YY, rY, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Zr.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([DY.e(336).then((() => DY(60242))), DY.e(330).then((() => DY(60247)))])) : await Promise.all([DY.e(319).then((() => DY(60254))), Promise.all([DY.e(312), DY.e(348)]).then((() => DY(60259)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== lY.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(lY.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(lY.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(YY) {
        const rY = this._getWrapper(YY),
          DY = rY.effect,
          FY = this._engine;
        FY.enableEffect(rY);
        const AY = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        DY.setTexture("diffuseSampler", this.particleTexture), DY.setMatrix("view", AY);
        const RY = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (DY.setMatrix("projection", RY), this._isAnimationSheetEnabled && this.particleTexture) {
          const YY = this.particleTexture.getBaseSize();
          DY.setFloat3("particlesInfos", this.spriteCellWidth / YY.width, this.spriteCellHeight / YY.height, this.spriteCellWidth / YY.width)
        }
        if (DY.setVector2("translationPivot", this.translationPivot), DY.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const YY = this._scene.activeCamera;
          DY.setVector3("eyePosition", YY.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), DY.setTexture("rampSampler", this._rampGradientsTexture));
        const OY = DY.defines;
        this._scene && ((0, XY.c)(DY, this, this._scene), this.applyFog && (0, qY.f)(this._scene, void 0, DY)), OY.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (AY.invertToRef(IY.n.Matrix[0]), DY.setMatrix("invView", IY.n.Matrix[0])), DY._multiTarget && this._bindGeometryRendering(DY), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? FY.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, DY) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, DY)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? FY.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, DY) : FY.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, DY), this.useLogarithmicDepth && this._scene && (0, qY.r)(OY, DY, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(DY), this._setEngineBasedOnBlendMode(YY), DY._multiTarget && zr.d._BindZeroAlphaDiscard(FY, DY);
        let gY = !1;
        try {
          zr.d._BindAttachmentsForEffect(FY, DY) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(DY), this._useInstancing ? this._scene?.forceWireframe ? FY.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : FY.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? FY.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : FY.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), gY = !0)
        } finally {
          zr.d._RestoreAttachments(FY)
        }
        return gY ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const YY = this._engine;
        let rY;
        return YY.setState && (YY.setState(!1), this.forceDepthWrite && YY.setDepthWrite(!0)), rY = this.blendMode === lY.BLENDMODE_MULTIPLYADD ? this._render(lY.BLENDMODE_MULTIPLY) + this._render(lY.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), rY
      }
      _onDispose() {}
      dispose() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), YY && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), YY && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(rY, DY), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const YY = this._scene.YV.indexOf(this);
          YY > -1 && this._scene.YV.splice(YY, 1), this._scene._activeParticleSystems.dispose()
        }
        this.wT.notifyObservers(this), this.wT.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Zr.ForceGLSL = !1;
    var Cr, fr = DY(36569);
    ! function(YY) {
      YY[YY.ATTACHED = 0] = "ATTACHED", YY[YY.END = 1] = "END"
    }(Cr || (Cr = {}));
    class jr {
      constructor(YY) {
        if (this.particleSystem = YY, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !YY.emitter || !YY.emitter.dispose) {
          const rY = (0, fr.e)("BABYLON.AbstractMesh");
          YY.emitter = new rY("SubemitterSystemEmitter", YY.hT()), YY._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let YY = this.particleSystem.emitter;
        if (YY) {
          if (YY instanceof IY.r) YY = YY.clone();
          else if (-1 !== YY.getClassName().indexOf("Mesh")) {
            YY = new((0, fr.e)("BABYLON.Mesh"))("", YY.hT()), YY.isVisible = !1
          }
        } else YY = new IY.r;
        const rY = new jr(this.particleSystem.clone(this.particleSystem.name, YY));
        return rY.particleSystem.name += "Clone", rY.type = this.type, rY.inheritDirection = this.inheritDirection, rY.inheritedVelocityAmount = this.inheritedVelocityAmount, rY.particleSystem._disposeEmitterOnDispose = !0, rY.particleSystem.disposeOnStop = !0, rY
      }
      serialize() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = {};
        return rY.type = this.type, rY.inheritDirection = this.inheritDirection, rY.inheritedVelocityAmount = this.inheritedVelocityAmount, rY.particleSystem = this.particleSystem.serialize(YY), rY
      }
      static _ParseParticleSystem(YY, rY, DY) {
        throw (0, hY.i)("ParseParticle")
      }
      static Parse(YY, rY, DY) {
        const FY = YY.particleSystem,
          AY = new jr(jr._ParseParticleSystem(FY, rY, DY, !0));
        return AY.type = YY.type, AY.inheritDirection = YY.inheritDirection, AY.inheritedVelocityAmount = YY.inheritedVelocityAmount, AY.particleSystem._isSubEmitter = !0, AY
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var hr = DY(39041),
      dr = DY(39144);
    const Jr = () => {};
    class Mr {
      constructor() {
        this.particlePositionGenerator = Jr, this.particleDestinationGenerator = Jr, this.particleDirectionGenerator = Jr
      }
      startDirectionFunction(YY, rY, DY, FY) {
        const AY = IY.n.xy[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Jr) this.particleDirectionGenerator(-1, DY, AY);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Jr) {
          this.particleDestinationGenerator(-1, DY, AY);
          const YY = IY.n.xy[1];
          AY.subtractToRef(DY.position, YY), YY.scaleToRef(1 / DY.lifeTime, AY)
        } else AY.set(0, 0, 0);
        FY ? rY.brY(AY) : IY.r.TransformNormalToRef(AY, YY, rY)
      }
      startPositionFunction(YY, rY, DY, FY) {
        const AY = IY.n.xy[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Jr ? this.particlePositionGenerator(-1, DY, AY) : AY.set(0, 0, 0), FY ? rY.brY(AY) : IY.r.TransformCoordinatesToRef(AY, YY, rY)
      }
      clone() {
        const YY = new Mr;
        return sY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {}
      buildUniformLayout(YY) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.particlePositionGenerator = this.particlePositionGenerator, YY.particleDestinationGenerator = this.particleDestinationGenerator, YY
      }
      parse(YY) {
        YY.particlePositionGenerator && (this.particlePositionGenerator = YY.particlePositionGenerator), YY.particleDestinationGenerator && (this.particleDestinationGenerator = YY.particleDestinationGenerator)
      }
    }
    const wr = IY.r.Zero(),
      br = IY.r.Zero(),
      Xr = IY.r.Zero();
    class qr {
      constructor() {
        this.strength = 0, this.position = IY.r.Zero()
      }
      _processParticle(YY, rY) {
        this.position.subtractToRef(YY.position, wr);
        const DY = wr.lengthSquared() + 1;
        wr.normalize().scaleToRef(this.strength / DY, br), br.scaleToRef(rY._tempScaledUpdateSpeed, Xr), YY.direction.addInPlace(Xr)
      }
      serialize() {
        return {
          position: this.position.VDY(),
          strength: this.strength
        }
      }
    }
    const pr = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class kr extends Zr {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = YY => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const rY = Math.floor(Math.random() * this._subEmitters.length);
          for (const DY of this._subEmitters[rY])
            if (1 === DY.type) {
              const rY = DY.clone();
              YY._inheritParticleInfoToSubEmitter(rY), rY.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(rY.particleSystem), rY.particleSystem.start()
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
      set flowMap(YY) {
        this._flowMap !== YY && (this._flowMap = YY, this._flowMapUpdate && (Hr(this._flowMapUpdate), this._flowMapUpdate = null), YY && (this._flowMapUpdate = {
          process: YY => {
            const rY = this.hT()?.getTransformMatrix();
            this._flowMap._processParticle(YY, this.flowMapStrength * this._tempScaledUpdateSpeed, rY)
          },
          previousItem: null,
          nextItem: null
        }, Kr(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(YY) {
        super.addAttractor(YY), 1 === this._attractors.length && (this._attractorUpdate = {
          process: YY => {
            for (const rY of this._attractors) rY._processParticle(YY, this)
          },
          previousItem: null,
          nextItem: null
        }, Kr(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(YY) {
        super.removeAttractor(YY), 0 === this._attractors.length && this._attractorUpdate && Hr(this._attractorUpdate)
      }
      start() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(YY)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const YY of this.subEmitters) YY instanceof kr ? this._subEmitters.push([new jr(YY)]) : YY instanceof jr ? this._subEmitters.push([YY]) : YY instanceof Array && this._subEmitters.push(YY)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const YY of this.activeSubSystems) YY.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const YY = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== YY && this._rootParticleSystem.activeSubSystems.splice(YY, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(YY) {
        YY && this._stopSubEmitters()
      }
      _prepareParticle(YY) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const rY = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          YY._properties.attachedSubEmitters = [];
          for (const DY of rY)
            if (0 === DY.type) {
              const rY = DY.clone();
              YY._properties.attachedSubEmitters.push(rY), rY.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), YY && this.particles)
          for (const DY of this.particles)
            if (DY._properties.attachedSubEmitters)
              for (let YY = DY._properties.attachedSubEmitters.length - 1; YY >= 0; YY -= 1) DY._properties.attachedSubEmitters[YY].dispose();
        if (rY && this.activeSubSystems)
          for (let DY = this.activeSubSystems.length - 1; DY >= 0; DY -= 1) this.activeSubSystems[DY].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let YY = 0; YY < this._subEmitters.length; YY++)
            for (const rY of this._subEmitters[YY]) rY.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(YY, rY, DY, FY) {
        let AY;
        AY = DY instanceof hr.d ? null : DY;
        const RY = (0, fr.e)("BABYLON.Texture");
        if (RY && AY)
          if (YY.texture) rY.particleTexture = RY.Parse(YY.texture, AY, FY);
          else if (YY.textureName) {
          const DY = YY.textureSettings;
          if (rY.particleTexture = new RY(FY + YY.textureName, AY, !1, void 0 === YY.invertY || YY.invertY, DY ? DY.samplingMode : void 0), rY.particleTexture.name = YY.textureName, DY) {
            const YY = rY.particleTexture;
            for (const rY of pr) void 0 !== DY[rY] && (YY[rY] = DY[rY])
          }
        }
        if (YY.emitterId || 0 === YY.emitterId || void 0 !== YY.emitter ? (YY.emitterId || 0 === YY.emitterId) && AY ? (rY.emitter = AY.getLastMeshById(YY.emitterId), rY.emitter || (rY.emitter = IY.r.Zero())) : rY.emitter = IY.r.FromArray(YY.emitter) : rY.emitter = IY.r.Zero(), rY.isLocal = !!YY.isLocal, void 0 !== YY.renderingGroupId && (rY.renderingGroupId = YY.renderingGroupId), void 0 !== YY.isBillboardBased && (rY.isBillboardBased = YY.isBillboardBased), void 0 !== YY.billboardMode && (rY.billboardMode = YY.billboardMode), void 0 !== YY.useLogarithmicDepth && (rY.useLogarithmicDepth = YY.useLogarithmicDepth), YY.animations) {
          for (let DY = 0; DY < YY.animations.length; DY++) {
            const FY = YY.animations[DY],
              AY = (0, fr.e)("BABYLON.Animation");
            AY && rY.animations.push(AY.Parse(FY))
          }
          rY.beginAnimationOnStart = YY.beginAnimationOnStart, rY.beginAnimationFrom = YY.beginAnimationFrom, rY.beginAnimationTo = YY.beginAnimationTo, rY.beginAnimationLoop = YY.beginAnimationLoop
        }
        if (YY.autoAnimate && AY && AY.beginAnimation(rY, YY.autoAnimateFrom, YY.autoAnimateTo, YY.autoAnimateLoop, YY.autoAnimateSpeed || 1), rY.startDelay = 0 | YY.startDelay, rY.minAngularSpeed = YY.minAngularSpeed, rY.maxAngularSpeed = YY.maxAngularSpeed, rY.minSize = YY.minSize, rY.maxSize = YY.maxSize, YY.minScaleX && (rY.minScaleX = YY.minScaleX, rY.maxScaleX = YY.maxScaleX, rY.minScaleY = YY.minScaleY, rY.maxScaleY = YY.maxScaleY), void 0 !== YY.preWarmCycles && (rY.preWarmCycles = YY.preWarmCycles, rY.preWarmStepOffset = YY.preWarmStepOffset), void 0 !== YY.minInitialRotation && (rY.minInitialRotation = YY.minInitialRotation, rY.maxInitialRotation = YY.maxInitialRotation), rY.minLifeTime = YY.minLifeTime, rY.maxLifeTime = YY.maxLifeTime, rY.minEmitPower = YY.minEmitPower, rY.maxEmitPower = YY.maxEmitPower, rY.emitRate = YY.emitRate, rY.gravity = IY.r.FromArray(YY.gravity), YY.noiseStrength && (rY.noiseStrength = IY.r.FromArray(YY.noiseStrength)), rY.color1 = vY.d.FromArray(YY.color1), rY.color2 = vY.d.FromArray(YY.color2), rY.colorDead = vY.d.FromArray(YY.colorDead), rY.updateSpeed = YY.updateSpeed, rY.targetStopDuration = YY.targetStopDuration, rY.blendMode = YY.blendMode, YY.colorGradients)
          for (const IY of YY.colorGradients) rY.addColorGradient(IY.gradient, vY.d.FromArray(IY.color1), IY.color2 ? vY.d.FromArray(IY.color2) : void 0);
        if (YY.rampGradients) {
          for (const DY of YY.rampGradients) rY.addRampGradient(DY.gradient, vY.c.FromArray(DY.color));
          rY.useRampGradients = YY.useRampGradients
        }
        if (YY.colorRemapGradients)
          for (const IY of YY.colorRemapGradients) rY.addColorRemapGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.alphaRemapGradients)
          for (const IY of YY.alphaRemapGradients) rY.addAlphaRemapGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.sizeGradients)
          for (const IY of YY.sizeGradients) rY.addSizeGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.angularSpeedGradients)
          for (const IY of YY.angularSpeedGradients) rY.addAngularSpeedGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.velocityGradients)
          for (const IY of YY.velocityGradients) rY.addVelocityGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.dragGradients)
          for (const IY of YY.dragGradients) rY.addDragGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.emitRateGradients)
          for (const IY of YY.emitRateGradients) rY.addEmitRateGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.startSizeGradients)
          for (const IY of YY.startSizeGradients) rY.addStartSizeGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.lifeTimeGradients)
          for (const IY of YY.lifeTimeGradients) rY.addLifeTimeGradient(IY.gradient, void 0 !== IY.factor1 ? IY.factor1 : IY.factor, IY.factor2);
        if (YY.limitVelocityGradients) {
          for (const DY of YY.limitVelocityGradients) rY.addLimitVelocityGradient(DY.gradient, void 0 !== DY.factor1 ? DY.factor1 : DY.factor, DY.factor2);
          rY.limitVelocityDamping = YY.limitVelocityDamping
        }
        if (YY.noiseTexture && AY) {
          const DY = (0, fr.e)("BABYLON.ProceduralTexture");
          rY.noiseTexture = DY.Parse(YY.noiseTexture, AY, FY)
        }
        let OY;
        if (YY.particleEmitterType) {
          switch (YY.particleEmitterType.type) {
            case "SphereParticleEmitter":
              OY = new oY;
              break;
            case "SphereDirectedParticleEmitter":
              OY = new WY;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              OY = new mY;
              break;
            case "ConeDirectedParticleEmitter":
              OY = new VY;
              break;
            case "CylinderParticleEmitter":
              OY = new EY.d;
              break;
            case "CylinderDirectedParticleEmitter":
              OY = new EY.c;
              break;
            case "HemisphericParticleEmitter":
              OY = new QY;
              break;
            case "PointParticleEmitter":
              OY = new yY;
              break;
            case "MeshParticleEmitter":
              OY = new SY;
              break;
            case "CustomParticleEmitter":
              OY = new Mr;
              break;
            default:
              OY = new uY.e
          }
          OY.parse(YY.particleEmitterType, AY)
        } else OY = new uY.e, OY.parse(YY, AY);
        rY.particleEmitterType = OY, rY.startSpriteCellID = YY.startSpriteCellID, rY.endSpriteCellID = YY.endSpriteCellID, rY.spriteCellLoop = YY.spriteCellLoop ?? !0, rY.spriteCellWidth = YY.spriteCellWidth, rY.spriteCellHeight = YY.spriteCellHeight, rY.spriteCellChangeSpeed = YY.spriteCellChangeSpeed, rY.spriteRandomStartCell = YY.spriteRandomStartCell, rY.disposeOnStop = YY.disposeOnStop ?? !1, rY.manualEmitCount = YY.manualEmitCount ?? -1
      }
      static Parse(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AY = arguments.length > 4 ? arguments[4] : void 0;
        const RY = YY.name;
        let OY, gY, aY = null,
          uY = null;
        if (rY instanceof hr.d ? OY = rY : (gY = rY, OY = gY.ky()), YY.customShader && (0, hY.b)(OY.createEffectForParticles)) {
          uY = YY.customShader;
          const rY = uY.shaderOptions.defines.length > 0 ? uY.shaderOptions.defines.join("\n") : "";
          aY = OY.createEffectForParticles(uY.shaderPath.fragmentElement, uY.shaderOptions.uniforms, uY.shaderOptions.samplers, rY)
        }
        const sY = new kr(RY, AY || YY.gu, rY, aY, YY.isAnimationSheetEnabled);
        if (sY.customShader = uY, sY._rootUrl = DY, YY.id && (sY.id = YY.id), YY.subEmitters) {
          sY.subEmitters = [];
          for (const FY of YY.subEmitters) {
            const YY = [];
            for (const AY of FY) YY.push(jr.Parse(AY, rY, DY));
            sY.subEmitters.push(YY)
          }
        }
        if (YY.attractors)
          for (const vY of YY.attractors) {
            const YY = new qr;
            YY.position = IY.r.FromArray(vY.position), YY.strength = vY.strength, sY.addAttractor(YY)
          }
        return kr._Parse(YY, sY, rY, DY), YY.textureMask && (sY.textureMask = vY.d.FromArray(YY.textureMask)), YY.worldOffset && (sY.worldOffset = IY.r.FromArray(YY.worldOffset)), YY.preventAutoStart && (sY.preventAutoStart = YY.preventAutoStart), YY.metadata && (sY.metadata = YY.metadata), FY || sY.preventAutoStart || sY.start(), sY
      }
      serialize() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = {};
        if (kr._Serialize(rY, this, YY), rY.textureMask = this.textureMask.VDY(), rY.customShader = this.customShader, rY.preventAutoStart = this.preventAutoStart, rY.worldOffset = this.worldOffset.VDY(), this.metadata && (rY.metadata = this.metadata), this.subEmitters) {
          rY.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const DY of this._subEmitters) {
            const FY = [];
            for (const rY of DY) rY.particleSystem.doNotSerialize || FY.push(rY.serialize(YY));
            rY.subEmitters.push(FY)
          }
        }
        if (this._attractors && this._attractors.length) {
          rY.attractors = [];
          for (const YY of this._attractors) rY.attractors.push(YY.serialize())
        }
        return rY
      }
      static _Serialize(YY, rY, DY) {
        if (YY.name = rY.name, YY.id = rY.id, YY.gu = rY.getCapacity(), YY.disposeOnStop = rY.disposeOnStop, YY.manualEmitCount = rY.manualEmitCount, rY.emitter.position) {
          const DY = rY.emitter;
          YY.emitterId = DY.id
        } else {
          const DY = rY.emitter;
          YY.emitter = DY.VDY()
        }
        if (rY.particleEmitterType && (YY.particleEmitterType = rY.particleEmitterType.serialize()), rY.particleTexture)
          if (DY) YY.texture = rY.particleTexture.serialize();
          else {
            const DY = rY.particleTexture;
            YY.textureName = rY.particleTexture.name, YY.invertY = !!DY._invertY;
            const FY = {};
            for (const YY of pr) FY[YY] = DY[YY];
            FY.samplingMode = DY.samplingMode, YY.textureSettings = FY
          } YY.isLocal = rY.isLocal, dr.b.AppendSerializedAnimations(rY, YY), YY.beginAnimationOnStart = rY.beginAnimationOnStart, YY.beginAnimationFrom = rY.beginAnimationFrom, YY.beginAnimationTo = rY.beginAnimationTo, YY.beginAnimationLoop = rY.beginAnimationLoop, YY.startDelay = rY.startDelay, YY.renderingGroupId = rY.renderingGroupId, YY.isBillboardBased = rY.isBillboardBased, YY.billboardMode = rY.billboardMode, YY.minAngularSpeed = rY.minAngularSpeed, YY.maxAngularSpeed = rY.maxAngularSpeed, YY.minSize = rY.minSize, YY.maxSize = rY.maxSize, YY.minScaleX = rY.minScaleX, YY.maxScaleX = rY.maxScaleX, YY.minScaleY = rY.minScaleY, YY.maxScaleY = rY.maxScaleY, YY.minEmitPower = rY.minEmitPower, YY.maxEmitPower = rY.maxEmitPower, YY.minLifeTime = rY.minLifeTime, YY.maxLifeTime = rY.maxLifeTime, YY.emitRate = rY.emitRate, YY.gravity = rY.gravity.VDY(), YY.noiseStrength = rY.noiseStrength.VDY(), YY.color1 = rY.color1.VDY(), YY.color2 = rY.color2.VDY(), YY.colorDead = rY.colorDead.VDY(), YY.updateSpeed = rY.updateSpeed, YY.targetStopDuration = rY.targetStopDuration, YY.blendMode = rY.blendMode, YY.preWarmCycles = rY.preWarmCycles, YY.preWarmStepOffset = rY.preWarmStepOffset, YY.minInitialRotation = rY.minInitialRotation, YY.maxInitialRotation = rY.maxInitialRotation, YY.startSpriteCellID = rY.startSpriteCellID, YY.spriteCellLoop = rY.spriteCellLoop, YY.endSpriteCellID = rY.endSpriteCellID, YY.spriteCellChangeSpeed = rY.spriteCellChangeSpeed, YY.spriteCellWidth = rY.spriteCellWidth, YY.spriteCellHeight = rY.spriteCellHeight, YY.spriteRandomStartCell = rY.spriteRandomStartCell, YY.isAnimationSheetEnabled = rY.isAnimationSheetEnabled, YY.useLogarithmicDepth = rY.useLogarithmicDepth;
        const FY = rY.getColorGradients();
        if (FY) {
          YY.colorGradients = [];
          for (const rY of FY) {
            const DY = {
              gradient: rY.gradient,
              color1: rY.color1.VDY()
            };
            rY.color2 ? DY.color2 = rY.color2.VDY() : DY.color2 = rY.color1.VDY(), YY.colorGradients.push(DY)
          }
        }
        const AY = rY.getRampGradients();
        if (AY) {
          YY.rampGradients = [];
          for (const rY of AY) {
            const DY = {
              gradient: rY.gradient,
              color: rY.color.VDY()
            };
            YY.rampGradients.push(DY)
          }
          YY.useRampGradients = rY.useRampGradients
        }
        const IY = rY.getColorRemapGradients();
        if (IY) {
          YY.colorRemapGradients = [];
          for (const rY of IY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.colorRemapGradients.push(DY)
          }
        }
        const RY = rY.getAlphaRemapGradients();
        if (RY) {
          YY.alphaRemapGradients = [];
          for (const rY of RY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.alphaRemapGradients.push(DY)
          }
        }
        const OY = rY.getSizeGradients();
        if (OY) {
          YY.sizeGradients = [];
          for (const rY of OY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.sizeGradients.push(DY)
          }
        }
        const gY = rY.getAngularSpeedGradients();
        if (gY) {
          YY.angularSpeedGradients = [];
          for (const rY of gY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.angularSpeedGradients.push(DY)
          }
        }
        const aY = rY.getVelocityGradients();
        if (aY) {
          YY.velocityGradients = [];
          for (const rY of aY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.velocityGradients.push(DY)
          }
        }
        const vY = rY.getDragGradients();
        if (vY) {
          YY.dragGradients = [];
          for (const rY of vY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.dragGradients.push(DY)
          }
        }
        const uY = rY.getEmitRateGradients();
        if (uY) {
          YY.emitRateGradients = [];
          for (const rY of uY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.emitRateGradients.push(DY)
          }
        }
        const sY = rY.getStartSizeGradients();
        if (sY) {
          YY.startSizeGradients = [];
          for (const rY of sY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.startSizeGradients.push(DY)
          }
        }
        const iY = rY.getLifeTimeGradients();
        if (iY) {
          YY.lifeTimeGradients = [];
          for (const rY of iY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.lifeTimeGradients.push(DY)
          }
        }
        const yY = rY.getLimitVelocityGradients();
        if (yY) {
          YY.limitVelocityGradients = [];
          for (const rY of yY) {
            const DY = {
              gradient: rY.gradient,
              factor1: rY.factor1
            };
            void 0 !== rY.factor2 ? DY.factor2 = rY.factor2 : DY.factor2 = rY.factor1, YY.limitVelocityGradients.push(DY)
          }
          YY.limitVelocityDamping = rY.limitVelocityDamping
        }
        rY.noiseTexture && (YY.noiseTexture = rY.noiseTexture.serialize())
      }
      clone(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = {
          ...this._customWrappers
        };
        let AY = null;
        const IY = this._engine;
        if ((0, hY.b)(IY.createEffectForParticles) && null != this.customShader) {
          AY = this.customShader;
          const YY = AY.shaderOptions.defines.length > 0 ? AY.shaderOptions.defines.join("\n") : "",
            rY = IY.createEffectForParticles(AY.shaderPath.fragmentElement, AY.shaderOptions.uniforms, AY.shaderOptions.samplers, YY);
          FY[0] ? FY[0].effect = rY : this.setCustomEffect(rY, 0)
        }
        const RY = this.serialize(DY),
          OY = !1 === DY && this.particleTexture ? this.particleTexture.clone() : null;
        OY && (RY.textureName = void 0);
        const gY = kr.Parse(RY, this._scene || this._engine, this._rootUrl);
        return gY.name = YY, gY.customShader = AY, gY._customWrappers = FY, OY && (gY.particleTexture = OY), void 0 === rY && (rY = this.emitter), this.noiseTexture && (gY.noiseTexture = this.noiseTexture.clone()), gY.emitter = rY, this.preventAutoStart || gY.start(), gY
      }
    }
    kr.BILLBOARDMODE_Y = 2, kr.BILLBOARDMODE_ALL = 7, kr.BILLBOARDMODE_STRETCHED = 8, kr.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Gr = !1;
    Gr || (Gr = !0, jr._ParseParticleSystem = kr.Parse)
  },
  40705: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      SkyMaterial: () => mY,
      _MaxColorValueForRenderTarget: () => EY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39144),
      RY = DY(36518),
      OY = DY(39408),
      gY = DY(39465),
      aY = DY(40663),
      vY = DY(40356),
      uY = DY(39209),
      sY = DY(36569),
      iY = DY(39491),
      yY = DY(39472),
      QY = DY(39448),
      oY = DY(39444);
    class WY extends OY.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function EY(YY) {
      switch (YY) {
        case aY.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case aY.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let mY = (() => {
      var YY;
      let rY, OY, aY, sY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY, zY = gY.e,
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [],
        bY = [],
        XY = [],
        qY = [],
        pY = [],
        kY = [],
        GY = [],
        xY = [],
        nY = [],
        PY = [],
        UY = [],
        LY = [],
        tY = [],
        Yr = [],
        rr = [],
        Dr = [],
        Fr = [],
        Ar = [],
        Ir = [],
        Rr = [],
        Or = [],
        gr = [];
      return YY = class extends zY {
        constructor(YY, rY) {
          super(YY, rY, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, FY.j)(this, ZY, 1), this.turbidity = ((0, FY.j)(this, CY), (0, FY.j)(this, fY, 10)), this.rayleigh = ((0, FY.j)(this, jY), (0, FY.j)(this, hY, 2)), this.mieCoefficient = ((0, FY.j)(this, dY), (0, FY.j)(this, JY, .005)), this.mieDirectionalG = ((0, FY.j)(this, MY), (0, FY.j)(this, wY, .8)), this.distance = ((0, FY.j)(this, bY), (0, FY.j)(this, XY, 500)), this.inclination = ((0, FY.j)(this, qY), (0, FY.j)(this, pY, .49)), this.azimuth = ((0, FY.j)(this, kY), (0, FY.j)(this, GY, .25)), this.sunPosition = ((0, FY.j)(this, xY), (0, FY.j)(this, nY, new RY.xy(0, 100, 0))), this.useSunPosition = ((0, FY.j)(this, PY), (0, FY.j)(this, UY, !1)), this.cameraOffset = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, RY.xy.Zero())), this.up = ((0, FY.j)(this, Yr), (0, FY.j)(this, rr, RY.xy.Up())), this.dithering = ((0, FY.j)(this, Dr), (0, FY.j)(this, Fr, !1)), this.rawHdrOutput = ((0, FY.j)(this, Ar), (0, FY.j)(this, Ir, !1)), this.cloudiness = ((0, FY.j)(this, Rr), (0, FY.j)(this, Or, 0)), this._cameraPosition = ((0, FY.j)(this, gr), RY.xy.Zero()), this._skyOrientation = new RY.Quaternion
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
        isReadyForSubMesh(rY, DY) {
          const FY = DY._drawWrapper;
          if (this.isFrozen && FY.effect && FY._wasPreviouslyReady) return !0;
          DY.materialDefines || (DY.materialDefines = new WY);
          const AY = DY.materialDefines,
            IY = this.hT();
          if (this._isReadyForSubMesh(DY)) return !0;
          if ((0, oY.fb)(rY, IY, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, AY, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, oY.W)(rY, AY, !0, !1), AY.IMAGEPROCESSINGPOSTPROCESS !== IY.imageProcessingConfiguration.applyByPostProcess && AY.markAsMiscDirty(), AY.DITHER !== this.dithering && AY.markAsMiscDirty(), AY.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && AY.markAsMiscDirty(), AY.isDirty) {
            AY.markAsProcessed(), IY.resetCachedMaterial();
            const rY = new yY.e;
            AY.FOG && rY.addFallback(1, "FOG"), AY.IMAGEPROCESSINGPOSTPROCESS = IY.imageProcessingConfiguration.applyByPostProcess, AY.DITHER = this.dithering, AY.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const FY = [vY.i.PositionKind];
            AY.VERTEXCOLOR && FY.push(vY.i.ColorKind);
            const RY = "sky",
              OY = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, QY.b)(OY);
            const gY = AY.toString();
            DY.setEffect(IY.ky().createEffect(RY, {
              attributes: FY,
              uniformsNames: OY,
              uniformBuffersNames: [],
              samplers: [],
              defines: gY,
              fallbacks: rY,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: YY._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, IY.ky()), AY, this._materialContext)
          }
          return !(!DY.effect || !DY.effect.isReady()) && (AY._renderId = IY.getRenderId(), FY._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(YY, rY, DY) {
          const FY = this.hT(),
            AY = DY.materialDefines;
          if (!AY) return;
          const IY = DY.effect;
          if (!IY) return;
          this._activeEffect = IY, this.bindOnlyWorldMatrix(YY), this._activeEffect.setMatrix("viewProjection", FY.getTransformMatrix()), this._mustRebind(FY, IY, DY) && ((0, QY.c)(IY, this, FY), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, oY.r)(AY, IY, FY)), FY.fogEnabled && rY.applyFog && FY.fogMode !== uY.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", FY.getViewMatrix()), (0, oY.f)(FY, rY, this._activeEffect, this.rawHdrOutput);
          const OY = FY.activeCamera;
          if (OY) {
            const YY = OY.getWorldMatrix();
            this._cameraPosition.x = YY.m[12], this._cameraPosition.y = YY.m[13], this._cameraPosition.z = YY.m[14], this._activeEffect.setVector3("cameraPosition", RY.TmpVectors.xy[0].brY(this._cameraPosition).dDY(FY.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const YY = FY.ky()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", EY(YY?.texture?.type))
          }
          if (!this.useSunPosition) {
            const YY = Math.PI * (this.inclination - .5),
              rY = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(rY) * Math.cos(YY), this.sunPosition.y = this.distance * Math.sin(-YY), this.sunPosition.z = this.distance * Math.sin(rY) * Math.cos(YY), RY.Quaternion.FromUnitVectorsToRef(RY.xy.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(rY, this._activeEffect, DY)
        }
        getAnimatables() {
          return []
        }
        dispose(YY) {
          super.dispose(YY)
        }
        clone(rY) {
          return IY.b.Clone((() => new YY(rY, this.hT())), this)
        }
        serialize() {
          const YY = super.serialize();
          return YY.customType = "BABYLON.SkyMaterial", YY
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(rY, DY, FY) {
          return IY.b.Parse((() => new YY(rY.name, DY)), rY, DY, FY)
        }
      }, (() => {
        const DY = "function" === typeof Symbol && Symbol.metadata ? Object.create(zY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, AY.M)()], OY = [(0, AY.M)()], aY = [(0, AY.M)()], sY = [(0, AY.M)()], mY = [(0, AY.M)()], VY = [(0, AY.M)()], SY = [(0, AY.M)()], lY = [(0, AY.M)()], TY = [(0, AY.J)()], eY = [(0, AY.M)()], NY = [(0, AY.J)()], BY = [(0, AY.J)()], cY = [(0, AY.M)()], KY = [(0, AY.M)()], HY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: YY => "luminance" in YY,
            get: YY => YY.luminance,
            set: (YY, rY) => {
              YY.luminance = rY
            }
          },
          metadata: DY
        }, ZY, CY), (0, FY.i)(null, null, OY, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: YY => "turbidity" in YY,
            get: YY => YY.turbidity,
            set: (YY, rY) => {
              YY.turbidity = rY
            }
          },
          metadata: DY
        }, fY, jY), (0, FY.i)(null, null, aY, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: YY => "rayleigh" in YY,
            get: YY => YY.rayleigh,
            set: (YY, rY) => {
              YY.rayleigh = rY
            }
          },
          metadata: DY
        }, hY, dY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: YY => "mieCoefficient" in YY,
            get: YY => YY.mieCoefficient,
            set: (YY, rY) => {
              YY.mieCoefficient = rY
            }
          },
          metadata: DY
        }, JY, MY), (0, FY.i)(null, null, mY, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: YY => "mieDirectionalG" in YY,
            get: YY => YY.mieDirectionalG,
            set: (YY, rY) => {
              YY.mieDirectionalG = rY
            }
          },
          metadata: DY
        }, wY, bY), (0, FY.i)(null, null, VY, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: YY => "distance" in YY,
            get: YY => YY.distance,
            set: (YY, rY) => {
              YY.distance = rY
            }
          },
          metadata: DY
        }, XY, qY), (0, FY.i)(null, null, SY, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: YY => "inclination" in YY,
            get: YY => YY.inclination,
            set: (YY, rY) => {
              YY.inclination = rY
            }
          },
          metadata: DY
        }, pY, kY), (0, FY.i)(null, null, lY, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: YY => "azimuth" in YY,
            get: YY => YY.azimuth,
            set: (YY, rY) => {
              YY.azimuth = rY
            }
          },
          metadata: DY
        }, GY, xY), (0, FY.i)(null, null, TY, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: YY => "sunPosition" in YY,
            get: YY => YY.sunPosition,
            set: (YY, rY) => {
              YY.sunPosition = rY
            }
          },
          metadata: DY
        }, nY, PY), (0, FY.i)(null, null, eY, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: YY => "useSunPosition" in YY,
            get: YY => YY.useSunPosition,
            set: (YY, rY) => {
              YY.useSunPosition = rY
            }
          },
          metadata: DY
        }, UY, LY), (0, FY.i)(null, null, NY, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: YY => "cameraOffset" in YY,
            get: YY => YY.cameraOffset,
            set: (YY, rY) => {
              YY.cameraOffset = rY
            }
          },
          metadata: DY
        }, tY, Yr), (0, FY.i)(null, null, BY, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: YY => "up" in YY,
            get: YY => YY.up,
            set: (YY, rY) => {
              YY.up = rY
            }
          },
          metadata: DY
        }, rr, Dr), (0, FY.i)(null, null, cY, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: YY => "dithering" in YY,
            get: YY => YY.dithering,
            set: (YY, rY) => {
              YY.dithering = rY
            }
          },
          metadata: DY
        }, Fr, Ar), (0, FY.i)(null, null, KY, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: YY => "rawHdrOutput" in YY,
            get: YY => YY.rawHdrOutput,
            set: (YY, rY) => {
              YY.rawHdrOutput = rY
            }
          },
          metadata: DY
        }, Ir, Rr), (0, FY.i)(null, null, HY, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: YY => "cloudiness" in YY,
            get: YY => YY.cloudiness,
            set: (YY, rY) => {
              YY.cloudiness = rY
            }
          },
          metadata: DY
        }, Or, gr), DY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DY
        })
      })(), YY._ShaderLoader = new iY.c((() => [DY.e(320).then((() => DY(60264))), DY.e(313).then((() => DY(60271)))]), (() => [DY.e(337).then((() => DY(60275))), DY.e(331).then((() => DY(60280)))])), YY
    })();
    (0, sY.i)("BABYLON.SkyMaterial", mY)
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);