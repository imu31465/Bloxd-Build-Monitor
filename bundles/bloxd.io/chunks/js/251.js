export const id = 251;
export const ids = [251];
export const modules = {
  39419: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor(YY, rY, DY) {
        this.bu = YY, this.bv = rY, this.distance = DY, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39424: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(36539),
      AY = DY(36524),
      IY = DY(36533);
    class RY {
      constructor(YY, rY, DY) {
        this.vectors = (0, FY.c)(8, AY.r.Zero), this.center = AY.r.Zero(), this.centerWorld = AY.r.Zero(), this.extendSize = AY.r.Zero(), this.extendSizeWorld = AY.r.Zero(), this.directions = (0, FY.c)(3, AY.r.Zero), this.vectorsWorld = (0, FY.c)(8, AY.r.Zero), this.minimumWorld = AY.r.Zero(), this.maximumWorld = AY.r.Zero(), this.minimum = AY.r.Zero(), this.maximum = AY.r.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(YY, rY, DY)
      }
      reConstruct(YY, rY, DY) {
        const FY = YY.x,
          IY = YY.y,
          RY = YY.z,
          OY = rY.x,
          gY = rY.y,
          aY = rY.z,
          vY = this.vectors;
        this.minimum.p_(FY, IY, RY), this.maximum.p_(OY, gY, aY), vY[0].p_(FY, IY, RY), vY[1].p_(OY, gY, aY), vY[2].p_(OY, IY, RY), vY[3].p_(FY, gY, RY), vY[4].p_(FY, IY, aY), vY[5].p_(OY, gY, RY), vY[6].p_(FY, gY, aY), vY[7].p_(OY, IY, aY), rY.addToRef(YY, this.center).scaleInPlace(.5), rY.subtractToRef(YY, this.extendSize).scaleInPlace(.5), this._worldMatrix = DY || AY.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(YY) {
        const rY = RY._TmpVector3,
          DY = this.maximum.subtractToRef(this.minimum, rY[0]),
          FY = DY.length();
        DY.normalizeFromLength(FY);
        const AY = FY * YY,
          IY = DY.scaleInPlace(.5 * AY),
          OY = this.center.subtractToRef(IY, rY[1]),
          gY = this.center.addToRef(IY, rY[2]);
        return this.reConstruct(OY, gY, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(YY) {
        const rY = this.minimumWorld,
          DY = this.maximumWorld,
          FY = this.directions,
          IY = this.vectorsWorld,
          RY = this.vectors;
        if (YY.isIdentity()) {
          rY.brY(this.minimum), DY.brY(this.maximum);
          for (let YY = 0; YY < 8; ++YY) IY[YY].brY(RY[YY]);
          this.extendSizeWorld.brY(this.extendSize), this.centerWorld.brY(this.center)
        } else {
          rY.o3(Number.MAX_VALUE), DY.o3(-Number.MAX_VALUE);
          for (let FY = 0; FY < 8; ++FY) {
            const OY = IY[FY];
            AY.r.TransformCoordinatesToRef(RY[FY], YY, OY), rY.minimizeInPlace(OY), DY.maximizeInPlace(OY)
          }
          DY.subtractToRef(rY, this.extendSizeWorld).scaleInPlace(.5), DY.addToRef(rY, this.centerWorld).scaleInPlace(.5)
        }
        AY.r.FromArrayToRef(YY.m, 0, FY[0]), AY.r.FromArrayToRef(YY.m, 4, FY[1]), AY.r.FromArrayToRef(YY.m, 8, FY[2]), this._worldMatrix = YY
      }
      isInFrustum(YY) {
        return RY.IsInFrustum(this.vectorsWorld, YY)
      }
      isCompletelyInFrustum(YY) {
        return RY.IsCompletelyInFrustum(this.vectorsWorld, YY)
      }
      intersectsPoint(YY) {
        const rY = this.minimumWorld,
          DY = this.maximumWorld,
          FY = rY.x,
          AY = rY.y,
          RY = rY.z,
          OY = DY.x,
          gY = DY.y,
          aY = DY.z,
          vY = YY.x,
          uY = YY.y,
          sY = YY.z,
          iY = -IY.c;
        return !(OY - vY < iY || iY > vY - FY) && (!(gY - uY < iY || iY > uY - AY) && !(aY - sY < iY || iY > sY - RY))
      }
      intersectsSphere(YY) {
        return RY.IntersectsSphere(this.minimumWorld, this.maximumWorld, YY.centerWorld, YY.radiusWorld)
      }
      intersectsMinMax(YY, rY) {
        const DY = this.minimumWorld,
          FY = this.maximumWorld,
          AY = DY.x,
          IY = DY.y,
          RY = DY.z,
          OY = FY.x,
          gY = FY.y,
          aY = FY.z,
          vY = YY.x,
          uY = YY.y,
          sY = YY.z,
          iY = rY.x,
          yY = rY.y,
          QY = rY.z;
        return !(OY < vY || AY > iY) && (!(gY < uY || IY > yY) && !(aY < sY || RY > QY))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(YY, rY) {
        return YY.intersectsMinMax(rY.minimumWorld, rY.maximumWorld)
      }
      static IntersectsSphere(YY, rY, DY, FY) {
        const IY = RY._TmpVector3[0];
        AY.r.ClampToRef(DY, YY, rY, IY);
        return AY.r.DistanceSquared(DY, IY) <= FY * FY
      }
      static IsCompletelyInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; ++DY) {
          const FY = rY[DY];
          for (let rY = 0; rY < 8; ++rY)
            if (FY.dotCoordinate(YY[rY]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; ++DY) {
          let FY = !0;
          const AY = rY[DY];
          for (let rY = 0; rY < 8; ++rY)
            if (AY.dotCoordinate(YY[rY]) >= 0) {
              FY = !1;
              break
            } if (FY) return !1
        }
        return !0
      }
    }
    RY._TmpVector3 = (0, FY.c)(3, AY.r.Zero)
  },
  39422: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY
    });
    var FY = DY(36539),
      AY = DY(36524),
      IY = DY(39424);
    class RY {
      constructor(YY, rY, DY) {
        this.center = AY.r.Zero(), this.centerWorld = AY.r.Zero(), this.minimum = AY.r.Zero(), this.maximum = AY.r.Zero(), this.reConstruct(YY, rY, DY)
      }
      reConstruct(YY, rY, DY) {
        this.minimum.brY(YY), this.maximum.brY(rY);
        const FY = AY.r.Distance(YY, rY);
        rY.addToRef(YY, this.center).scaleInPlace(.5), this.radius = .5 * FY, this._update(DY || AY.e.IdentityReadOnly)
      }
      scale(YY) {
        const rY = RY._TmpVector3,
          DY = this.maximum.subtractToRef(this.minimum, rY[0]),
          FY = DY.length();
        DY.normalizeFromLength(FY);
        const AY = FY * YY,
          IY = DY.scaleInPlace(.5 * AY),
          OY = this.center.subtractToRef(IY, rY[1]),
          gY = this.center.addToRef(IY, rY[2]);
        return this.reConstruct(OY, gY, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(YY) {
        if (YY.isIdentity()) this.centerWorld.brY(this.center), this.radiusWorld = this.radius;
        else {
          AY.r.TransformCoordinatesToRef(this.center, YY, this.centerWorld);
          const rY = RY._TmpVector3[0];
          AY.r.TransformNormalFromFloatsToRef(1, 1, 1, YY, rY), this.radiusWorld = Math.max(Math.abs(rY.x), Math.abs(rY.y), Math.abs(rY.z)) * this.radius
        }
      }
      isInFrustum(YY) {
        const rY = this.centerWorld,
          DY = this.radiusWorld;
        for (let FY = 0; FY < 6; FY++)
          if (YY[FY].dotCoordinate(rY) <= -DY) return !1;
        return !0
      }
      isCenterInFrustum(YY) {
        const rY = this.centerWorld;
        for (let DY = 0; DY < 6; DY++)
          if (YY[DY].dotCoordinate(rY) < 0) return !1;
        return !0
      }
      intersectsPoint(YY) {
        const rY = AY.r.DistanceSquared(this.centerWorld, YY);
        return !(this.radiusWorld * this.radiusWorld < rY)
      }
      static Intersects(YY, rY) {
        const DY = AY.r.DistanceSquared(YY.centerWorld, rY.centerWorld),
          FY = YY.radiusWorld + rY.radiusWorld;
        return !(FY * FY < DY)
      }
      static CreateFromCenterAndRadius(YY, rY, DY) {
        this._TmpVector3[0].brY(YY), this._TmpVector3[1].p_(0, 0, rY), this._TmpVector3[2].brY(YY), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].dDY(this._TmpVector3[1]);
        const FY = new RY(this._TmpVector3[0], this._TmpVector3[2]);
        return FY._worldMatrix = DY || AY.e.Identity(), FY
      }
    }
    RY._TmpVector3 = (0, FY.c)(3, AY.r.Zero);
    const OY = {
        min: 0,
        max: 0
      },
      gY = {
        min: 0,
        max: 0
      },
      aY = (YY, rY, DY) => {
        const FY = AY.r.Dot(rY.centerWorld, YY),
          IY = Math.abs(AY.r.Dot(rY.directions[0], YY)) * rY.extendSize.x + Math.abs(AY.r.Dot(rY.directions[1], YY)) * rY.extendSize.y + Math.abs(AY.r.Dot(rY.directions[2], YY)) * rY.extendSize.z;
        DY.min = FY - IY, DY.max = FY + IY
      },
      vY = (YY, rY, DY) => (aY(YY, rY, OY), aY(YY, DY, gY), !(OY.min > gY.max || gY.min > OY.max));
    class uY {
      constructor(YY, rY, DY) {
        this._isLocked = !1, this.boundingBox = new IY.e(YY, rY, DY), this.bDY = new RY(YY, rY, DY)
      }
      reConstruct(YY, rY, DY) {
        this.boundingBox.reConstruct(YY, rY, DY), this.bDY.reConstruct(YY, rY, DY)
      }
      get minimum() {
        return this.boundingBox.minimum
      }
      get maximum() {
        return this.boundingBox.maximum
      }
      get isLocked() {
        return this._isLocked
      }
      set isLocked(YY) {
        this._isLocked = YY
      }
      update(YY) {
        this._isLocked || (this.boundingBox._update(YY), this.bDY._update(YY))
      }
      centerOn(YY, rY) {
        const DY = uY._TmpVector3[0].brY(YY).dDY(rY),
          FY = uY._TmpVector3[1].brY(YY).addInPlace(rY);
        return this.boundingBox.reConstruct(DY, FY, this.boundingBox.getWorldMatrix()), this.bDY.reConstruct(DY, FY, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(YY) {
        const rY = AY.r.Minimize(this.minimum, YY),
          DY = AY.r.Maximize(this.maximum, YY);
        return this.reConstruct(rY, DY, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(YY) {
        const rY = AY.n.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(rY);
        const DY = AY.n.xy[0];
        return AY.r.TransformCoordinatesToRef(YY.boundingBox.minimumWorld, rY, DY), this.encapsulate(DY), AY.r.TransformCoordinatesToRef(YY.boundingBox.maximumWorld, rY, DY), this.encapsulate(DY), this
      }
      scale(YY) {
        return this.boundingBox.scale(YY), this.bDY.scale(YY), this
      }
      isInFrustum(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === rY || 3 === rY) && this.bDY.isCenterInFrustum(YY)) return !0;
        if (!this.bDY.isInFrustum(YY)) return !1;
        return !(1 !== rY && 3 !== rY) || this.boundingBox.isInFrustum(YY)
      }
      get diagonalLength() {
        const YY = this.boundingBox;
        return YY.maximumWorld.subtractToRef(YY.minimumWorld, uY._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(YY) {
        return this.boundingBox.isCompletelyInFrustum(YY)
      }
      _checkCollision(YY) {
        return YY._canDoCollision(this.bDY.centerWorld, this.bDY.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(YY) {
        return !!this.bDY.centerWorld && (!!this.bDY.intersectsPoint(YY) && !!this.boundingBox.intersectsPoint(YY))
      }
      intersects(YY, rY) {
        if (!RY.Intersects(this.bDY, YY.bDY)) return !1;
        if (!IY.e.Intersects(this.boundingBox, YY.boundingBox)) return !1;
        if (!rY) return !0;
        const DY = this.boundingBox,
          FY = YY.boundingBox;
        return !!vY(DY.directions[0], DY, FY) && (!!vY(DY.directions[1], DY, FY) && (!!vY(DY.directions[2], DY, FY) && (!!vY(FY.directions[0], DY, FY) && (!!vY(FY.directions[1], DY, FY) && (!!vY(FY.directions[2], DY, FY) && (!!vY(AY.r.Cross(DY.directions[0], FY.directions[0]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[0], FY.directions[1]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[0], FY.directions[2]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[1], FY.directions[0]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[1], FY.directions[1]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[1], FY.directions[2]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[2], FY.directions[0]), DY, FY) && (!!vY(AY.r.Cross(DY.directions[2], FY.directions[1]), DY, FY) && !!vY(AY.r.Cross(DY.directions[2], FY.directions[2]), DY, FY))))))))))))))
      }
    }
    uY._TmpVector3 = (0, FY.c)(2, AY.r.Zero)
  },
  39448: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      c: () => gY,
      d: () => OY,
      e: () => RY
    });
    var FY = DY(39286),
      AY = DY(36524);

    function IY(YY) {
      -1 === YY.indexOf("vClipPlane") && YY.push("vClipPlane"), -1 === YY.indexOf("vClipPlane2") && YY.push("vClipPlane2"), -1 === YY.indexOf("vClipPlane3") && YY.push("vClipPlane3"), -1 === YY.indexOf("vClipPlane4") && YY.push("vClipPlane4"), -1 === YY.indexOf("vClipPlane5") && YY.push("vClipPlane5"), -1 === YY.indexOf("vClipPlane6") && YY.push("vClipPlane6")
    }

    function RY(YY, rY, DY) {
      const FY = !!(YY.clipPlane ?? rY.clipPlane),
        AY = !!(YY.clipPlane2 ?? rY.clipPlane2),
        IY = !!(YY.clipPlane3 ?? rY.clipPlane3),
        RY = !!(YY.clipPlane4 ?? rY.clipPlane4),
        OY = !!(YY.clipPlane5 ?? rY.clipPlane5),
        gY = !!(YY.clipPlane6 ?? rY.clipPlane6);
      FY && DY.push("#define CLIPPLANE"), AY && DY.push("#define CLIPPLANE2"), IY && DY.push("#define CLIPPLANE3"), RY && DY.push("#define CLIPPLANE4"), OY && DY.push("#define CLIPPLANE5"), gY && DY.push("#define CLIPPLANE6")
    }

    function OY(YY, rY, DY) {
      let FY = !1;
      const AY = !!(YY.clipPlane ?? rY.clipPlane),
        IY = !!(YY.clipPlane2 ?? rY.clipPlane2),
        RY = !!(YY.clipPlane3 ?? rY.clipPlane3),
        OY = !!(YY.clipPlane4 ?? rY.clipPlane4),
        gY = !!(YY.clipPlane5 ?? rY.clipPlane5),
        aY = !!(YY.clipPlane6 ?? rY.clipPlane6);
      return DY.CLIPPLANE !== AY && (DY.CLIPPLANE = AY, FY = !0), DY.CLIPPLANE2 !== IY && (DY.CLIPPLANE2 = IY, FY = !0), DY.CLIPPLANE3 !== RY && (DY.CLIPPLANE3 = RY, FY = !0), DY.CLIPPLANE4 !== OY && (DY.CLIPPLANE4 = OY, FY = !0), DY.CLIPPLANE5 !== gY && (DY.CLIPPLANE5 = gY, FY = !0), DY.CLIPPLANE6 !== aY && (DY.CLIPPLANE6 = aY, FY = !0), FY
    }

    function gY(YY, rY, DY) {
      let FY = rY.clipPlane ?? DY.clipPlane;
      aY(YY, "vClipPlane", FY), FY = rY.clipPlane2 ?? DY.clipPlane2, aY(YY, "vClipPlane2", FY), FY = rY.clipPlane3 ?? DY.clipPlane3, aY(YY, "vClipPlane3", FY), FY = rY.clipPlane4 ?? DY.clipPlane4, aY(YY, "vClipPlane4", FY), FY = rY.clipPlane5 ?? DY.clipPlane5, aY(YY, "vClipPlane5", FY), FY = rY.clipPlane6 ?? DY.clipPlane6, aY(YY, "vClipPlane6", FY)
    }

    function aY(YY, rY, DY) {
      if (DY) {
        const IY = FY.c.hT()?.floatingOriginOffset || AY.r.ZeroReadOnly;
        YY.setFloat4(rY, DY.normal.x, DY.normal.y, DY.normal.z, DY.d + AY.r.Dot(DY.normal, IY))
      }
    }
  },
  39472: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(YY, rY) {
        this._defines[YY] || (YY < this._currentRank && (this._currentRank = YY), YY > this._maxRank && (this._maxRank = YY), this._defines[YY] = new Array), this._defines[YY].push(rY)
      }
      addCPUSkinningFallback(YY, rY) {
        this._mesh = rY, YY < this._currentRank && (this._currentRank = YY), YY > this._maxRank && (this._maxRank = YY)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(YY, rY) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, YY = YY.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), rY._bonesComputationForcedToCPU = !0;
          const DY = this._mesh.hT();
          for (let YY = 0; YY < DY.meshes.length; YY++) {
            const FY = DY.meshes[YY];
            if (FY.material) {
              if (FY.computeBonesUsingShaders && 0 !== FY.numBoneInfluencers)
                if (FY.material.getEffect() === rY) FY.computeBonesUsingShaders = !1;
                else if (FY.qm)
                for (const YY of FY.qm) {
                  if (YY.effect === rY) {
                    FY.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && FY.computeBonesUsingShaders && FY.numBoneInfluencers > 0 && (FY.computeBonesUsingShaders = !1)
          }
        } else {
          const rY = this._defines[this._currentRank];
          if (rY)
            for (let DY = 0; DY < rY.length; DY++) YY = YY.replace("#define " + rY[DY], "");
          this._currentRank++
        }
        return YY
      }
    }
  },
  39414: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => EY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39219),
      RY = DY(36552),
      OY = DY(36546),
      gY = DY(39416),
      aY = DY(39255),
      vY = DY(38040),
      uY = DY(37107),
      sY = DY(39437),
      iY = DY(39144);
    let yY = (() => {
      var YY;
      let rY, DY, IY, RY, OY, gY, aY, vY, uY, sY, yY, QY, oY = [];
      return YY = class {
        constructor() {
          this._func = (0, FY.j)(this, oY), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(YY) {
          this._func = YY
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(YY) {
          this._backFunc = YY
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(YY) {
          this._funcRef = YY
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(YY) {
          this._funcMask = YY
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(YY) {
          this._opStencilFail = YY
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(YY) {
          this._opDepthFail = YY
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(YY) {
          this._opStencilDepthPass = YY
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(YY) {
          this._backOpStencilFail = YY
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(YY) {
          this._backOpDepthFail = YY
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(YY) {
          this._backOpStencilDepthPass = YY
        }
        get mask() {
          return this._mask
        }
        set mask(YY) {
          this._mask = YY
        }
        get enabled() {
          return this._enabled
        }
        set enabled(YY) {
          this._enabled = YY
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(YY) {
          iY.b.Clone((() => YY), this)
        }
        serialize() {
          return iY.b.Serialize(this)
        }
        parse(YY, rY, DY) {
          iY.b.Parse((() => this), YY, rY, DY)
        }
      }, (() => {
        const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], RY = [(0, AY.M)()], OY = [(0, AY.M)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], vY = [(0, AY.M)()], uY = [(0, AY.M)()], sY = [(0, AY.M)()], yY = [(0, AY.M)()], QY = [(0, AY.M)()], (0, FY.i)(YY, null, rY, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: YY => "func" in YY,
            get: YY => YY.func
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, DY, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: YY => "backFunc" in YY,
            get: YY => YY.backFunc
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, IY, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: YY => "funcRef" in YY,
            get: YY => YY.funcRef
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, RY, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: YY => "funcMask" in YY,
            get: YY => YY.funcMask
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, OY, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: YY => "opStencilFail" in YY,
            get: YY => YY.opStencilFail
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, gY, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: YY => "opDepthFail" in YY,
            get: YY => YY.opDepthFail
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, aY, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: YY => "opStencilDepthPass" in YY,
            get: YY => YY.opStencilDepthPass
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, vY, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: YY => "backOpStencilFail" in YY,
            get: YY => YY.backOpStencilFail
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, uY, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: YY => "backOpDepthFail" in YY,
            get: YY => YY.backOpDepthFail
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, sY, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: YY => "backOpStencilDepthPass" in YY,
            get: YY => YY.backOpStencilDepthPass
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, yY, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: YY => "mask" in YY,
            get: YY => YY.mask
          },
          metadata: iY
        }, null, oY), (0, FY.i)(YY, null, QY, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "enabled" in YY,
            get: YY => YY.enabled
          },
          metadata: iY
        }, null, oY), iY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iY
        })
      })(), YY
    })();
    var QY = DY(39444),
      oY = DY(39049),
      WY = DY(39029);
    let EY = (() => {
      var YY;
      let rY, DY, WY, EY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY, zY, ZY, CY, fY, jY, hY, dY, JY, MY, wY, bY, XY, qY, pY, kY = [],
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
        gr = [],
        ar = [],
        vr = [],
        ur = [],
        sr = [],
        ir = [],
        yr = [],
        Qr = [],
        or = [],
        Wr = [],
        Er = [],
        mr = [],
        Vr = [],
        Sr = [],
        lr = [],
        Tr = [],
        er = [],
        Nr = [],
        Br = [],
        cr = [],
        Kr = [],
        Hr = [],
        zr = [],
        Zr = [],
        Cr = [],
        fr = [],
        jr = [],
        hr = [],
        dr = [],
        Jr = [],
        Mr = [],
        wr = [],
        br = [],
        Xr = [],
        qr = [];
      return YY = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(rY) {
          this._useVertexPulling !== rY && (this._useVertexPulling = rY, this.nYY(YY.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(YY) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(rY) {
          if (this._alpha === rY) return;
          const DY = this._alpha;
          this._alpha = rY, 1 !== DY && 1 !== rY || this.nYY(YY.MiscDirtyFlag + YY.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(rY) {
          this._backFaceCulling !== rY && (this._backFaceCulling = rY, this.nYY(YY.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(rY) {
          const DY = Math.max(0, Math.min(0 | rY, 4));
          this._textureRepetitionMode !== DY && (this._textureRepetitionMode = DY, this.nYY(YY.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(rY) {
          this._cullBackFaces !== rY && (this._cullBackFaces = rY, this.nYY(YY.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(YY) {
          this._blockDirtyMechanism !== YY && (this._blockDirtyMechanism = YY, YY || this.markDirty())
        }
        atomicMaterialsUpdate(YY) {
          this.blockDirtyMechanism = !0;
          try {
            YY(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(YY) {
          this._onDisposeObserver && this.wT.remove(this._onDisposeObserver), this._onDisposeObserver = this.wT.add(YY)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new RY.e), this._onBindObservable
        }
        set onBind(YY) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(YY)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new RY.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new RY.e), this._onEffectCreatedObservable
        }
        set alphaMode(YY) {
          this._alphaMode[0] = YY
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[DY] !== rY && (this._alphaMode[DY] = rY, this.nYY(YY.TextureDirtyFlag))
        }
        set needDepthPrePass(YY) {
          this._needDepthPrePass !== YY && (this._needDepthPrePass = YY, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(rY) {
          this._fogEnabled !== rY && (this._fogEnabled = rY, this.nYY(YY.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case YY.WireFrameFillMode:
            case YY.LineListDrawMode:
            case YY.LineLoopDrawMode:
            case YY.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(rY) {
          this.fillMode = rY ? YY.WireFrameFillMode : YY.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case YY.PointFillMode:
            case YY.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(rY) {
          this.fillMode = rY ? YY.PointFillMode : YY.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(rY) {
          this._fillMode !== rY && (this._fillMode = rY, this.nYY(YY.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(YY) {
          const rY = this.hT().ky().getCaps().fragmentDepthSupported;
          YY && !rY && vY.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = YY && rY, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(YY) {
          this._isVertexOutputInvariant !== YY && (this._isVertexOutputInvariant = YY, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(YY) {
          this._drawWrapper = YY
        }
        constructor(rY, DY, AY) {
          let gY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, FY.j)(this, kY), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, FY.j)(this, GY, void 0), this.uniqueId = ((0, FY.j)(this, xY), (0, FY.j)(this, nY, void 0)), this._loadedUniqueId = (0, FY.j)(this, PY), this.name = (0, FY.j)(this, UY, void 0), this.metadata = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, null)), this._internalMetadata = (0, FY.j)(this, Yr), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, FY.j)(this, rr, !1), this.checkReadyOnlyOnce = ((0, FY.j)(this, Dr), (0, FY.j)(this, Fr, !1)), this.state = ((0, FY.j)(this, Ar), (0, FY.j)(this, Ir, "")), this._alpha = ((0, FY.j)(this, Rr), (0, FY.j)(this, Or, 1)), this.inspectableCustomProperties = (0, FY.j)(this, gr), this._backFaceCulling = (0, FY.j)(this, ar, !0), this._textureRepetitionMode = ((0, FY.j)(this, vr), (0, FY.j)(this, ur, 0)), this.textureRepetitionHexTilingParams = ((0, FY.j)(this, sr), (0, FY.j)(this, ir, [1, .6, 7, .5])), this._cullBackFaces = ((0, FY.j)(this, yr), (0, FY.j)(this, Qr, !0)), this._blockDirtyMechanism = ((0, FY.j)(this, or), !1), this.sideOrientation = (0, FY.j)(this, Wr, null), this.onCompiled = ((0, FY.j)(this, Er), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.wT = new RY.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, FY.j)(this, mr, [2]), this._needDepthPrePass = ((0, FY.j)(this, Vr), (0, FY.j)(this, Sr, !1)), this.disableDepthWrite = ((0, FY.j)(this, lr), (0, FY.j)(this, Tr, !1)), this.disableColorWrite = ((0, FY.j)(this, er), (0, FY.j)(this, Nr, !1)), this.forceDepthWrite = ((0, FY.j)(this, Br), (0, FY.j)(this, cr, !1)), this.depthFunction = ((0, FY.j)(this, Kr), (0, FY.j)(this, Hr, 0)), this.separateCullingPass = ((0, FY.j)(this, zr), (0, FY.j)(this, Zr, !1)), this._fogEnabled = ((0, FY.j)(this, Cr), (0, FY.j)(this, fr, !0)), this.pointSize = ((0, FY.j)(this, jr), (0, FY.j)(this, hr, 1)), this.zOffset = ((0, FY.j)(this, dr), (0, FY.j)(this, Jr, 0)), this.zOffsetUnits = ((0, FY.j)(this, Mr), (0, FY.j)(this, wr, 0)), this.clipPlane = (0, FY.j)(this, br), this.stencil = new yY, this._isVertexOutputInvariant = (0, FY.j)(this, Xr, YY.ForceVertexOutputInvariant), this._materialContext = (0, FY.j)(this, qr), this._useUBO = !1, this._fillMode = YY.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = rY;
          const vY = DY || OY.d.LastCreatedScene;
          vY && (this._scene = vY, this._dirtyCallbacks = {}, this._forceGLSL = gY, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = rY || IY.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.ky().createMaterialContext(), this._drawWrapper = new sY.b(this._scene.ky(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new aY.b(this._scene.ky(), void 0, void 0, rY), this._useUBO = this.hT().ky().supportsUniformBuffers, this._createUniformBuffer(), AY || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), YY.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const YY = this.hT().ky();
          this._uniformBuffer?.dispose(), YY.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new aY.b(YY, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new aY.b(this._scene.ky(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(YY) {
          return "Name: " + this.name
        }
        getClassName() {
          return "Material"
        }
        get _isMaterial() {
          return !0
        }
        get isFrozen() {
          return this.checkReadyOnlyOnce
        }
        freeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !0
        }
        unfreeze() {
          this.markDirty(), this.checkReadyOnlyOnce = !1
        }
        isReady(YY, rY) {
          return !0
        }
        isReadyForSubMesh(YY, rY, DY) {
          const FY = rY.materialDefines;
          return !!FY && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = FY, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        hT() {
          return this._scene
        }
        _getEffectiveOrientation(YY) {
          return null !== this.sideOrientation ? this.sideOrientation : YY.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(YY) {
          this._transparencyMode = YY
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === YY.MATERIAL_ALPHABLEND || this._transparencyMode === YY.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === YY.MATERIAL_ALPHATEST || this._transparencyMode === YY.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === YY.MATERIAL_OPAQUE || this._transparencyMode === YY.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(YY) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : YY.visibility < 1 || !this._disableAlphaBlending && (YY.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(YY) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(YY) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const DY = this.hT().meshes;
          for (const YY of DY)
            if (YY.qm)
              for (const DY of YY.qm)
                if (DY.Uy() === this)
                  for (const YY of DY._drawWrappers) YY && this._materialContext === YY.materialContext && (YY._wasPreviouslyReady = !1, YY._wasPreviouslyUsingInstances = null, YY._forceRebindOnNextCall = rY);
          rY && this.nYY(YY.AllDirtyFlag)
        }
        _preBind(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const FY = this._scene.ky(),
            AY = (null == DY ? this.sideOrientation : DY) === YY.ClockWiseSideOrientation,
            IY = rY || this._getDrawWrapper();
          return (0, oY.c)(IY) && IY.materialContext && (IY.materialContext.useVertexPulling = this.useVertexPulling), FY.enableEffect(IY), FY.setState(this.backFaceCulling, this.zOffset, !1, AY, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), AY
        }
        bind(YY, rY) {}
        buildUniformLayout() {
          const YY = this._uniformBuffer;
          this._eventInfo.ubo = YY, this._callbackPluginEventGeneric(8, this._eventInfo), YY.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(YY, rY, DY) {
          const FY = DY._drawWrapper;
          this._eventInfo.subMesh = DY, this._callbackPluginEventBindForSubMesh(this._eventInfo), FY._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(YY) {}
        bindView(YY) {
          this._useUBO ? this._needToBindSceneUbo = !0 : YY.setMatrix("view", this.hT().getViewMatrix())
        }
        bindViewProjection(YY) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (YY.setMatrix("viewProjection", this.hT().getTransformMatrix()), YY.setMatrix("projection", this.hT().getProjectionMatrix()), YY.setMatrix("inverseProjection", this.hT().getInverseProjectionMatrix()))
        }
        bindEyePosition(YY, rY) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(YY, rY)
        }
        _afterBind(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && rY && (this._needToBindSceneUbo = !1, (0, QY.x)(rY, this.hT().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = YY ? YY.visibility : 1, this._onBindObservable && YY && this._onBindObservable.notifyObservers(YY), this.disableDepthWrite) {
            const YY = this._scene.ky();
            this._cachedDepthWriteState = YY.getDepthWrite(), YY.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const YY = this._scene.ky();
            this._cachedColorWriteState = YY.getColorWrite(), YY.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const YY = this._scene.ky();
            this._cachedDepthFunctionState = YY.getDepthFunction() || 0, YY.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.ky().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.ky().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.ky().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(YY) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = YY, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(YY) {
          return null
        }
        _clonePlugins(rY, DY) {
          const FY = {};
          if (this._serializePlugins(FY), YY._ParsePlugins(FY, rY, this._scene, DY), this.pluginManager)
            for (const YY of this.pluginManager._plugins) {
              const DY = rY.pluginManager.getPlugin(YY.name);
              DY && YY.copyTo(DY)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const YY = [];
            for (const rY in this.meshMap) {
              const DY = this.meshMap[rY];
              DY && YY.push(DY)
            }
            return YY
          }
          return this._scene.meshes.filter((YY => YY.material === this))
        }
        forceCompilation(YY, rY, DY, FY) {
          const AY = {
              clipPlane: !1,
              useInstances: !1,
              ...DY
            },
            IY = this.hT(),
            RY = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const OY = () => {
            if (!this._scene || !this._scene.ky()) return;
            const DY = IY.clipPlane;
            if (AY.clipPlane && (IY.clipPlane = new uY.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let DY = !0,
                IY = null;
              if (YY.qm) {
                const rY = new gY.d(0, 0, 0, 0, 0, YY, void 0, !1, !1);
                rY.materialDefines && (rY.materialDefines._renderId = -1), this.isReadyForSubMesh(YY, rY, AY.useInstances) || (rY.effect && rY.effect.getCompilationError() && rY.effect.allFallbacksProcessed() ? IY = rY.effect.getCompilationError() : (DY = !1, setTimeout(OY, 16)))
              }
              DY && (this.allowShaderHotSwapping = RY, IY && FY && FY(IY), rY && rY(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = RY, rY && rY(this)) : setTimeout(OY, 16);
            AY.clipPlane && (IY.clipPlane = DY)
          };
          OY()
        }
        async forceCompilationAsync(YY, rY) {
          return await new Promise(((DY, FY) => {
            this.forceCompilation(YY, (() => {
              DY()
            }), rY, (YY => {
              FY(YY)
            }))
          }))
        }
        nYY(rY) {
          this.hT().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (YY._DirtyCallbackArray.length = 0, rY & YY.ImageProcessingDirtyFlag && YY._DirtyCallbackArray.push(YY._ImageProcessingDirtyCallBack), rY & YY.TextureDirtyFlag && YY._DirtyCallbackArray.push(YY._TextureDirtyCallBack), rY & YY.LightDirtyFlag && YY._DirtyCallbackArray.push(YY._LightsDirtyCallBack), rY & YY.FresnelDirtyFlag && YY._DirtyCallbackArray.push(YY._FresnelDirtyCallBack), rY & YY.AttributesDirtyFlag && YY._DirtyCallbackArray.push(YY._AttributeDirtyCallBack), rY & YY.MiscDirtyFlag && YY._DirtyCallbackArray.push(YY._MiscDirtyCallBack), rY & YY.PrePassDirtyFlag && YY._DirtyCallbackArray.push(YY._PrePassDirtyCallBack), YY._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(YY._RunDirtyCallBacks), this.hT().resetCachedMaterial())
        }
        resetDrawCache() {
          const YY = this.hT().meshes;
          for (const rY of YY)
            if (rY.qm)
              for (const YY of rY.qm) YY.Uy() === this && YY.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(YY) {
          const rY = this.hT();
          if (rY.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const DY = rY.meshes;
          for (const FY of DY)
            if (FY.qm)
              for (const DY of FY.qm) {
                if ((DY.Uy() || (rY._hasDefaultMaterial ? rY.defaultMaterial : null)) === this)
                  for (const rY of DY._drawWrappers) rY && rY.defines && rY.defines.markAllAsDirty && this._materialContext === rY.materialContext && YY(rY.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.hT().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const YY = this.hT().enablePrePassRenderer();
          YY && YY.nYY()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(YY._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(YY._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(YY._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(YY._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(YY._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(YY._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(YY._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(YY._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(YY._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(YY._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const YY = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.wT.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(YY)
            }))
          }
        }
        setPrePassRenderer(YY) {
          return !1
        }
        dispose(YY, rY, DY) {
          const FY = this.hT();
          if (FY.stopAnimation(this), FY.freeProcessedMaterials(), FY.removeMaterial(this), this._eventInfo.forceDisposeTextures = rY, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const YY = this._parentContainer.materials.indexOf(this);
            YY > -1 && this._parentContainer.materials.splice(YY, 1), this._parentContainer = null
          }
          if (!0 !== DY)
            if (this.meshMap)
              for (const AY in this.meshMap) {
                const YY = this.meshMap[AY];
                this._disposeMeshResources(YY)
              } else {
                const YY = FY.meshes;
                for (const rY of YY) this._disposeMeshResources(rY)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.wT.notifyObservers(this), this.wT.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(YY) {
          if (!YY) return;
          const rY = YY.geometry,
            DY = YY._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (YY.qm && DY)
              for (const FY of YY.qm) {
                const YY = FY._drawWrappers;
                for (let AY = 0; AY < YY.length; AY++) {
                  const IY = YY[AY]?.effect;
                  if (!IY) continue;
                  DY[AY] === this && (rY?._releaseVertexArrayObject(IY), FY._removeDrawWrapper(AY, !0, !0))
                }
              }
          } else rY?._releaseVertexArrayObject(this._drawWrapper.effect);
          YY.material !== this || YY.vFY || (YY.material = null)
        }
        serialize() {
          const YY = iY.b.Serialize(this);
          return YY.stencil = this.stencil.serialize(), YY.uniqueId = this.uniqueId, this._serializePlugins(YY), YY
        }
        _serializePlugins(YY) {
          if (YY.plugins = {}, this.pluginManager)
            for (const rY of this.pluginManager._plugins) rY.doNotSerialize || (YY.plugins[rY.getClassName()] = rY.serialize())
        }
        static ParseAlphaMode(YY, rY) {
          void 0 !== YY._alphaMode ? rY._alphaMode = Array.isArray(YY._alphaMode) ? [...YY._alphaMode] : [YY._alphaMode] : void 0 !== YY.alphaMode ? rY._alphaMode = Array.isArray(YY.alphaMode) ? [...YY.alphaMode] : [YY.alphaMode] : rY._alphaMode = [2]
        }
        static Parse(rY, DY, FY) {
          if (rY.customType) {
            if ("BABYLON.PBRMaterial" === rY.customType && rY.overloadedAlbedo && (rY.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return vY.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else rY.customType = "BABYLON.StandardMaterial";
          const AY = IY.i.Instantiate(rY.customType).Parse(rY, DY, FY);
          return AY._loadedUniqueId = rY.uniqueId, YY.ParseAlphaMode(rY, AY), AY
        }
        static _ParsePlugins(YY, rY, DY, FY) {
          if (YY.plugins)
            for (const AY in YY.plugins) {
              const RY = YY.plugins[AY];
              let OY = rY.pluginManager?.getPlugin(RY.name);
              if (!OY) {
                const YY = IY.i.Instantiate("BABYLON." + AY);
                YY && (OY = new YY(rY))
              }
              OY?.parse(RY, DY, FY)
            }
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, AY.M)()], DY = [(0, AY.M)()], WY = [(0, AY.M)()], EY = [(0, AY.M)()], mY = [(0, AY.M)()], VY = [(0, AY.M)()], SY = [(0, AY.M)()], lY = [(0, AY.M)("alpha")], TY = [(0, AY.M)("backFaceCulling")], eY = [(0, AY.M)("textureRepetitionMode")], NY = [(0, AY.M)("textureRepetitionHexTilingParams")], BY = [(0, AY.M)("cullBackFaces")], cY = [(0, AY.M)()], KY = [(0, AY.M)()], HY = [(0, AY.M)()], zY = [(0, AY.M)()], ZY = [(0, AY.M)()], CY = [(0, AY.M)()], fY = [(0, AY.M)()], jY = [(0, AY.M)()], hY = [(0, AY.M)("fogEnabled")], dY = [(0, AY.M)()], JY = [(0, AY.M)()], MY = [(0, AY.M)()], wY = [(0, AY.M)()], bY = [(0, AY.M)()], XY = [(0, AY.M)()], qY = [(0, AY.M)()], pY = [(0, AY.M)()], (0, FY.i)(YY, null, wY, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: YY => "pointsCloud" in YY,
            get: YY => YY.pointsCloud
          },
          metadata: IY
        }, null, kY), (0, FY.i)(YY, null, bY, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "fillMode" in YY,
            get: YY => YY.fillMode
          },
          metadata: IY
        }, null, kY), (0, FY.i)(YY, null, XY, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: YY => "useLogarithmicDepth" in YY,
            get: YY => YY.useLogarithmicDepth
          },
          metadata: IY
        }, null, kY), (0, FY.i)(YY, null, pY, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "transparencyMode" in YY,
            get: YY => YY.transparencyMode
          },
          metadata: IY
        }, null, kY), (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: YY => "id" in YY,
            get: YY => YY.id,
            set: (YY, rY) => {
              YY.id = rY
            }
          },
          metadata: IY
        }, GY, xY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: YY => "uniqueId" in YY,
            get: YY => YY.uniqueId,
            set: (YY, rY) => {
              YY.uniqueId = rY
            }
          },
          metadata: IY
        }, nY, PY), (0, FY.i)(null, null, WY, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: YY => "name" in YY,
            get: YY => YY.name,
            set: (YY, rY) => {
              YY.name = rY
            }
          },
          metadata: IY
        }, UY, LY), (0, FY.i)(null, null, EY, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: YY => "metadata" in YY,
            get: YY => YY.metadata,
            set: (YY, rY) => {
              YY.metadata = rY
            }
          },
          metadata: IY
        }, tY, Yr), (0, FY.i)(null, null, mY, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: YY => "checkReadyOnEveryCall" in YY,
            get: YY => YY.checkReadyOnEveryCall,
            set: (YY, rY) => {
              YY.checkReadyOnEveryCall = rY
            }
          },
          metadata: IY
        }, rr, Dr), (0, FY.i)(null, null, VY, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: YY => "checkReadyOnlyOnce" in YY,
            get: YY => YY.checkReadyOnlyOnce,
            set: (YY, rY) => {
              YY.checkReadyOnlyOnce = rY
            }
          },
          metadata: IY
        }, Fr, Ar), (0, FY.i)(null, null, SY, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: YY => "state" in YY,
            get: YY => YY.state,
            set: (YY, rY) => {
              YY.state = rY
            }
          },
          metadata: IY
        }, Ir, Rr), (0, FY.i)(null, null, lY, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "_alpha" in YY,
            get: YY => YY._alpha,
            set: (YY, rY) => {
              YY._alpha = rY
            }
          },
          metadata: IY
        }, Or, gr), (0, FY.i)(null, null, TY, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: YY => "_backFaceCulling" in YY,
            get: YY => YY._backFaceCulling,
            set: (YY, rY) => {
              YY._backFaceCulling = rY
            }
          },
          metadata: IY
        }, ar, vr), (0, FY.i)(null, null, eY, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "_textureRepetitionMode" in YY,
            get: YY => YY._textureRepetitionMode,
            set: (YY, rY) => {
              YY._textureRepetitionMode = rY
            }
          },
          metadata: IY
        }, ur, sr), (0, FY.i)(null, null, NY, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: YY => "textureRepetitionHexTilingParams" in YY,
            get: YY => YY.textureRepetitionHexTilingParams,
            set: (YY, rY) => {
              YY.textureRepetitionHexTilingParams = rY
            }
          },
          metadata: IY
        }, ir, yr), (0, FY.i)(null, null, BY, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: YY => "_cullBackFaces" in YY,
            get: YY => YY._cullBackFaces,
            set: (YY, rY) => {
              YY._cullBackFaces = rY
            }
          },
          metadata: IY
        }, Qr, or), (0, FY.i)(null, null, cY, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: YY => "sideOrientation" in YY,
            get: YY => YY.sideOrientation,
            set: (YY, rY) => {
              YY.sideOrientation = rY
            }
          },
          metadata: IY
        }, Wr, Er), (0, FY.i)(null, null, KY, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "_alphaMode" in YY,
            get: YY => YY._alphaMode,
            set: (YY, rY) => {
              YY._alphaMode = rY
            }
          },
          metadata: IY
        }, mr, Vr), (0, FY.i)(null, null, HY, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: YY => "_needDepthPrePass" in YY,
            get: YY => YY._needDepthPrePass,
            set: (YY, rY) => {
              YY._needDepthPrePass = rY
            }
          },
          metadata: IY
        }, Sr, lr), (0, FY.i)(null, null, zY, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: YY => "disableDepthWrite" in YY,
            get: YY => YY.disableDepthWrite,
            set: (YY, rY) => {
              YY.disableDepthWrite = rY
            }
          },
          metadata: IY
        }, Tr, er), (0, FY.i)(null, null, ZY, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: YY => "disableColorWrite" in YY,
            get: YY => YY.disableColorWrite,
            set: (YY, rY) => {
              YY.disableColorWrite = rY
            }
          },
          metadata: IY
        }, Nr, Br), (0, FY.i)(null, null, CY, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: YY => "forceDepthWrite" in YY,
            get: YY => YY.forceDepthWrite,
            set: (YY, rY) => {
              YY.forceDepthWrite = rY
            }
          },
          metadata: IY
        }, cr, Kr), (0, FY.i)(null, null, fY, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: YY => "depthFunction" in YY,
            get: YY => YY.depthFunction,
            set: (YY, rY) => {
              YY.depthFunction = rY
            }
          },
          metadata: IY
        }, Hr, zr), (0, FY.i)(null, null, jY, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: YY => "separateCullingPass" in YY,
            get: YY => YY.separateCullingPass,
            set: (YY, rY) => {
              YY.separateCullingPass = rY
            }
          },
          metadata: IY
        }, Zr, Cr), (0, FY.i)(null, null, hY, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "_fogEnabled" in YY,
            get: YY => YY._fogEnabled,
            set: (YY, rY) => {
              YY._fogEnabled = rY
            }
          },
          metadata: IY
        }, fr, jr), (0, FY.i)(null, null, dY, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: YY => "pointSize" in YY,
            get: YY => YY.pointSize,
            set: (YY, rY) => {
              YY.pointSize = rY
            }
          },
          metadata: IY
        }, hr, dr), (0, FY.i)(null, null, JY, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: YY => "zOffset" in YY,
            get: YY => YY.zOffset,
            set: (YY, rY) => {
              YY.zOffset = rY
            }
          },
          metadata: IY
        }, Jr, Mr), (0, FY.i)(null, null, MY, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: YY => "zOffsetUnits" in YY,
            get: YY => YY.zOffsetUnits,
            set: (YY, rY) => {
              YY.zOffsetUnits = rY
            }
          },
          metadata: IY
        }, wr, br), (0, FY.i)(null, null, qY, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: YY => "_isVertexOutputInvariant" in YY,
            get: YY => YY._isVertexOutputInvariant,
            set: (YY, rY) => {
              YY._isVertexOutputInvariant = rY
            }
          },
          metadata: IY
        }, Xr, qr), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY.TriangleFillMode = 0, YY.WireFrameFillMode = 1, YY.PointFillMode = 2, YY.PointListDrawMode = 3, YY.LineListDrawMode = 4, YY.LineLoopDrawMode = 5, YY.LineStripDrawMode = 6, YY.TriangleStripDrawMode = 7, YY.TriangleFanDrawMode = 8, YY.ClockWiseSideOrientation = 0, YY.CounterClockWiseSideOrientation = 1, YY.ImageProcessingDirtyFlag = 64, YY.TextureDirtyFlag = 1, YY.LightDirtyFlag = 2, YY.FresnelDirtyFlag = 4, YY.AttributesDirtyFlag = 8, YY.MiscDirtyFlag = 16, YY.PrePassDirtyFlag = 32, YY.AllDirtyFlag = 127, YY.MATERIAL_OPAQUE = 0, YY.MATERIAL_ALPHATEST = 1, YY.MATERIAL_ALPHABLEND = 2, YY.MATERIAL_ALPHATESTANDBLEND = 3, YY.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, YY.MATERIAL_NORMALBLENDMETHOD_RNM = 1, YY.LIGHTFALLOFF_PHYSICAL = 0, YY.LIGHTFALLOFF_GLTF = 1, YY.LIGHTFALLOFF_STANDARD = 2, YY.OnEventObservable = new RY.e, YY.ForceVertexOutputInvariant = !1, YY._AllDirtyCallBack = YY => YY.markAllAsDirty(), YY._ImageProcessingDirtyCallBack = YY => YY.markAsImageProcessingDirty(), YY._TextureDirtyCallBack = YY => YY.markAsTexturesDirty(), YY._FresnelDirtyCallBack = YY => YY.markAsFresnelDirty(), YY._MiscDirtyCallBack = YY => YY.markAsMiscDirty(), YY._PrePassDirtyCallBack = YY => YY.markAsPrePassDirty(), YY._LightsDirtyCallBack = YY => YY.markAsLightDirty(), YY._AttributeDirtyCallBack = YY => YY.markAsAttributesDirty(), YY._FresnelAndMiscDirtyCallBack = rY => {
        YY._FresnelDirtyCallBack(rY), YY._MiscDirtyCallBack(rY)
      }, YY._TextureAndMiscDirtyCallBack = rY => {
        YY._TextureDirtyCallBack(rY), YY._MiscDirtyCallBack(rY)
      }, YY._DirtyCallbackArray = [], YY._RunDirtyCallBacks = rY => {
        for (const DY of YY._DirtyCallbackArray) DY(rY)
      }, YY
    })();
    Object.getOwnPropertyDescriptor(EY.prototype, "pluginManager") || Object.defineProperty(EY.prototype, "pluginManager", (0, WY.c)("Material", "pluginManager"))
  },
  39456: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(39041);
    class AY {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(YY) {
        this._DiffuseTextureEnabled !== YY && (this._DiffuseTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(YY) {
        this._BaseWeightTextureEnabled !== YY && (this._BaseWeightTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(YY) {
        this._BaseDiffuseRoughnessTextureEnabled !== YY && (this._BaseDiffuseRoughnessTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(YY) {
        this._DetailTextureEnabled !== YY && (this._DetailTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(YY) {
        this._DecalMapEnabled !== YY && (this._DecalMapEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(YY) {
        this._AmbientTextureEnabled !== YY && (this._AmbientTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(YY) {
        this._OpacityTextureEnabled !== YY && (this._OpacityTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(YY) {
        this._ReflectionTextureEnabled !== YY && (this._ReflectionTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(YY) {
        this._EmissiveTextureEnabled !== YY && (this._EmissiveTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(YY) {
        this._SpecularTextureEnabled !== YY && (this._SpecularTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(YY) {
        this._BumpTextureEnabled !== YY && (this._BumpTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(YY) {
        this._LightmapTextureEnabled !== YY && (this._LightmapTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(YY) {
        this._RefractionTextureEnabled !== YY && (this._RefractionTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(YY) {
        this._ColorGradingTextureEnabled !== YY && (this._ColorGradingTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(YY) {
        this._FresnelEnabled !== YY && (this._FresnelEnabled = YY, FY.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(YY) {
        this._ClearCoatTextureEnabled !== YY && (this._ClearCoatTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(YY) {
        this._ClearCoatBumpTextureEnabled !== YY && (this._ClearCoatBumpTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(YY) {
        this._ClearCoatTintTextureEnabled !== YY && (this._ClearCoatTintTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(YY) {
        this._SheenTextureEnabled !== YY && (this._SheenTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(YY) {
        this._AnisotropicTextureEnabled !== YY && (this._AnisotropicTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(YY) {
        this._ThicknessTextureEnabled !== YY && (this._ThicknessTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(YY) {
        this._RefractionIntensityTextureEnabled !== YY && (this._RefractionIntensityTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(YY) {
        this._TranslucencyIntensityTextureEnabled !== YY && (this._TranslucencyIntensityTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(YY) {
        this._TranslucencyColorTextureEnabled !== YY && (this._TranslucencyColorTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(YY) {
        this._IridescenceTextureEnabled !== YY && (this._IridescenceTextureEnabled = YY, FY.d.MarkAllMaterialsAsDirty(1))
      }
    }
    AY._DiffuseTextureEnabled = !0, AY._BaseWeightTextureEnabled = !0, AY._BaseDiffuseRoughnessTextureEnabled = !0, AY._DetailTextureEnabled = !0, AY._DecalMapEnabled = !0, AY._AmbientTextureEnabled = !0, AY._OpacityTextureEnabled = !0, AY._ReflectionTextureEnabled = !0, AY._EmissiveTextureEnabled = !0, AY._SpecularTextureEnabled = !0, AY._BumpTextureEnabled = !0, AY._LightmapTextureEnabled = !0, AY._RefractionTextureEnabled = !0, AY._ColorGradingTextureEnabled = !0, AY._FresnelEnabled = !0, AY._ClearCoatTextureEnabled = !0, AY._ClearCoatBumpTextureEnabled = !0, AY._ClearCoatTintTextureEnabled = !0, AY._SheenTextureEnabled = !0, AY._AnisotropicTextureEnabled = !0, AY._ThicknessTextureEnabled = !0, AY._RefractionIntensityTextureEnabled = !0, AY._TranslucencyIntensityTextureEnabled = !0, AY._TranslucencyColorTextureEnabled = !0, AY._IridescenceTextureEnabled = !0
  },
  39444: (YY, rY, DY) => {
    DY.d(rY, {
      $: () => fY,
      C: () => HY,
      F: () => SY,
      J: () => cY,
      N: () => KY,
      R: () => iY,
      U: () => sY,
      W: () => bY,
      _: () => hY,
      b: () => ZY,
      c: () => lY,
      cb: () => CY,
      eb: () => mY,
      f: () => uY,
      fb: () => zY,
      gb: () => XY,
      i: () => WY,
      ib: () => qY,
      kb: () => pY,
      m: () => EY,
      n: () => BY,
      nb: () => nY,
      ob: () => GY,
      r: () => gY,
      sb: () => xY,
      tb: () => yY,
      v: () => QY,
      x: () => oY,
      y: () => VY
    });
    var FY = DY(38040),
      AY = DY(36546),
      IY = DY(39319),
      RY = DY(39448),
      OY = DY(39456);

    function gY(YY, rY, DY) {
      if (!YY || YY.LOGARITHMICDEPTH || YY.indexOf && YY.indexOf("LOGARITHMICDEPTH") >= 0) {
        const YY = DY.activeCamera;
        1 === YY.mode && FY.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), rY.setFloat("logarithmicDepthConstant", 2 / (Math.log(YY.maxZ + 1) / Math.LN2))
      }
    }
    const aY = {
        r: 0,
        g: 0,
        b: 0
      },
      vY = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function uY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      DY && YY.fogEnabled && (!rY || rY.applyFog) && 0 !== YY.fogMode && (DY.setFloat4("vFogInfos", YY.fogMode, YY.fogStart, YY.fogEnd, YY.fogDensity), FY ? (YY.fogColor.toLinearSpaceToRef(aY, YY.ky().useExactSrgbConversions), DY.setColor3("vFogColor", aY)) : DY.setColor3("vFogColor", YY.fogColor))
    }

    function sY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
      const uY = YY.numMaxInfluencers || YY.numInfluencers;
      return uY <= 0 ? 0 : (rY.push("#define MORPHTARGETS"), YY.hasPositions && rY.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), YY.hasNormals && rY.push("#define MORPHTARGETTEXTURE_HASNORMALS"), YY.hasTangents && rY.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), YY.hasUVs && rY.push("#define MORPHTARGETTEXTURE_HASUVS"), YY.hasUV2s && rY.push("#define MORPHTARGETTEXTURE_HASUV2S"), YY.hasColors && rY.push("#define MORPHTARGETTEXTURE_HASCOLORS"), YY.supportsPositions && AY && rY.push("#define MORPHTARGETS_POSITION"), YY.supportsNormals && IY && rY.push("#define MORPHTARGETS_NORMAL"), YY.supportsTangents && RY && rY.push("#define MORPHTARGETS_TANGENT"), YY.supportsUVs && OY && rY.push("#define MORPHTARGETS_UV"), YY.supportsUV2s && gY && rY.push("#define MORPHTARGETS_UV2"), YY.supportsColors && aY && rY.push("#define MORPHTARGETS_COLOR"), rY.push("#define NUM_MORPH_INFLUENCERS " + uY), YY.isUsingTextureForTargets && rY.push("#define MORPHTARGETS_TEXTURE"), vY.NUM_MORPH_INFLUENCERS = uY, vY.NORMAL = IY, vY.TANGENT = RY, vY.UV = OY, vY.UV2 = gY, vY.COLOR = aY, iY(DY, FY, vY, AY), uY)
    }

    function iY(YY, rY, DY) {
      let IY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const RY = DY.NUM_MORPH_INFLUENCERS;
      if (RY > 0 && AY.d.LastCreatedEngine) {
        const OY = AY.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          gY = rY.morphTargetManager;
        if (gY?.isUsingTextureForTargets) return;
        const aY = gY && gY.supportsPositions && IY,
          vY = gY && gY.supportsNormals && DY.NORMAL,
          uY = gY && gY.supportsTangents && DY.TANGENT,
          sY = gY && gY.supportsUVs && DY.UV1,
          iY = gY && gY.supportsUV2s && DY.UV2,
          yY = gY && gY.supportsColors && DY.VERTEXCOLOR;
        for (let DY = 0; DY < RY; DY++) aY && YY.push("position" + DY), vY && YY.push("normal" + DY), uY && YY.push("tangent" + DY), sY && YY.push("uv_" + DY), iY && YY.push("uv2_" + DY), yY && YY.push("color" + DY), YY.length > OY && FY.d.Error("Cannot add more vertex attributes for mesh " + rY.name)
      }
    }

    function yY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      YY.push("world0"), YY.push("world1"), YY.push("world2"), YY.push("world3"), rY && (YY.push("previousWorld0"), YY.push("previousWorld1"), YY.push("previousWorld2"), YY.push("previousWorld3"))
    }

    function QY(YY, rY) {
      const DY = YY.morphTargetManager;
      YY && DY && rY.setFloatArray("morphTargetInfluences", DY.influences)
    }

    function oY(YY, rY) {
      rY.bindToEffect(YY, "Scene")
    }

    function WY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        aY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        uY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        sY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (YY.texturesEnabled && AY && OY.c.ReflectionTextureEnabled) {
        if (DY.m_("reflectionMatrix", AY.getReflectionTextureMatrix()), DY.updateFloat2("vReflectionInfos", AY.level * YY.iblIntensity, sY), gY && AY.boundingBoxSize) {
          const YY = AY;
          DY.updateVector3("vReflectionPosition", YY.boundingBoxPosition), DY.updateVector3("vReflectionSize", YY.boundingBoxSize)
        }
        if (IY) {
          const YY = AY.getSize().width;
          DY.updateFloat2("vReflectionFilteringInfo", YY, Math.log2(YY))
        }
        if (vY && !rY.USEIRRADIANCEMAP) {
          const YY = AY.sphericalPolynomial;
          if (rY.USESPHERICALFROMREFLECTIONMAP && YY)
            if (rY.SPHERICAL_HARMONICS) {
              const rY = YY.preScaledHarmonics;
              DY.updateVector3("vSphericalL00", rY.l00), DY.updateVector3("vSphericalL1_1", rY.l1_1), DY.updateVector3("vSphericalL10", rY.l10), DY.updateVector3("vSphericalL11", rY.l11), DY.updateVector3("vSphericalL2_2", rY.l2_2), DY.updateVector3("vSphericalL2_1", rY.l2_1), DY.updateVector3("vSphericalL20", rY.l20), DY.updateVector3("vSphericalL21", rY.l21), DY.updateVector3("vSphericalL22", rY.l22)
            } else DY.updateFloat3("vSphericalX", YY.x.x, YY.x.y, YY.x.z), DY.updateFloat3("vSphericalY", YY.y.x, YY.y.y, YY.y.z), DY.updateFloat3("vSphericalZ", YY.z.x, YY.z.y, YY.z.z), DY.updateFloat3("vSphericalXX_ZZ", YY.xx.x - YY.zz.x, YY.xx.y - YY.zz.y, YY.xx.z - YY.zz.z), DY.updateFloat3("vSphericalYY_ZZ", YY.yy.x - YY.zz.x, YY.yy.y - YY.zz.y, YY.yy.z - YY.zz.z), DY.updateFloat3("vSphericalZZ", YY.zz.x, YY.zz.y, YY.zz.z), DY.updateFloat3("vSphericalXY", YY.xy.x, YY.xy.y, YY.xy.z), DY.updateFloat3("vSphericalYZ", YY.yz.x, YY.yz.y, YY.yz.z), DY.updateFloat3("vSphericalZX", YY.zx.x, YY.zx.y, YY.zx.z)
        } else aY && rY.USEIRRADIANCEMAP && rY.USE_IRRADIANCE_DOMINANT_DIRECTION && AY.irradianceTexture && DY.updateVector3("vReflectionDominantDirection", AY.irradianceTexture._dominantDirection);
        RY && DY.updateFloat3("vReflectionMicrosurfaceInfos", AY.getSize().width, AY.lodGenerationScale, AY.lodGenerationOffset)
      }
      uY && DY.updateColor3("vReflectionColor", FY)
    }

    function EY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (FY && OY.c.ReflectionTextureEnabled) {
        rY.LODBASEDMICROSFURACE ? DY.setTexture("reflectionSampler", FY) : (DY.setTexture("reflectionSampler", FY._lodTextureMid || FY), DY.setTexture("reflectionSamplerLow", FY._lodTextureLow || FY), DY.setTexture("reflectionSamplerHigh", FY._lodTextureHigh || FY)), rY.USEIRRADIANCEMAP && DY.setTexture("irradianceSampler", FY.irradianceTexture);
        const IY = YY.iblCdfGenerator;
        AY && IY && DY.setTexture("icdfSampler", IY.getIcdfTexture())
      }
    }

    function mY(YY, rY, DY) {
      rY._needUVs = !0, rY[DY] = !0, YY.optimizeUVAllocation && YY.getTextureMatrix().isIdentityAs3x2() ? (rY[DY + "DIRECTUV"] = YY.coordinatesIndex + 1, rY["MAINUV" + (YY.coordinatesIndex + 1)] = !0) : rY[DY + "DIRECTUV"] = 0
    }

    function VY(YY, rY, DY) {
      const FY = YY.getTextureMatrix();
      rY.m_(DY + "Matrix", FY)
    }

    function SY(YY, rY, DY) {
      DY.BAKED_VERTEX_ANIMATION_TEXTURE && DY.INSTANCES && YY.push("bakedVertexAnimationSettingsInstanced")
    }

    function lY(YY, rY, DY) {
      var FY;
      if (rY && YY && (YY.computeBonesUsingShaders && rY._bonesComputationForcedToCPU && (YY.computeBonesUsingShaders = !1), YY.useBones && YY.computeBonesUsingShaders && YY.skeleton)) {
        const AY = YY.skeleton;
        if (AY.isUsingTextureForMatrices && rY.getUniformIndex("boneTextureInfo") > -1) {
          const DY = AY.getTransformMatrixTexture(YY);
          rY.setTexture("boneSampler", DY), rY.setFloat2("boneTextureInfo", AY._textureWidth, AY._textureHeight)
        } else {
          const IY = AY.getTransformMatrices(YY);
          IY && (rY.setMatrices("mBones", IY), DY && YY.hT().prePassRenderer && YY.hT().prePassRenderer.getIndex(2) && (DY.previousBones[YY.uniqueId] || (DY.previousBones[YY.uniqueId] = IY.slice()), rY.setMatrices("mPreviousBones", DY.previousBones[YY.uniqueId]), FY = IY, DY.previousBones[YY.uniqueId].set(FY)))
        }
      }
    }

    function TY(YY, rY, DY, FY, AY) {
      let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      YY._bindLight(rY, DY, FY, AY, IY)
    }
    const eY = 4,
      NY = new WeakMap;

    function BY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const IY = Math.min(rY.lightSources.length, AY);
      for (let RY = 0; RY < IY; RY++) {
        TY(rY.lightSources[RY], RY, YY, DY, "boolean" === typeof FY ? FY : FY.SPECULARTERM, rY.receiveShadows)
      }
    }

    function cY(YY, rY, DY, FY) {
      DY.NUM_BONE_INFLUENCERS > 0 && (FY.addCPUSkinningFallback(0, rY), YY.push("matricesIndices"), YY.push("matricesWeights"), DY.NUM_BONE_INFLUENCERS > 4 && (YY.push("matricesIndicesExtra"), YY.push("matricesWeightsExtra")))
    }

    function KY(YY, rY) {
      (rY.INSTANCES || rY.THIN_INSTANCES) && yY(YY, !!rY.PREPASS_VELOCITY), rY.INSTANCESCOLOR && YY.push("instanceColor")
    }

    function HY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AY = 0;
      for (let IY = 0; IY < DY && YY["LIGHT" + IY]; IY++) IY > 0 && (AY = FY + IY, rY.addFallback(AY, "LIGHT" + IY)), YY.SHADOWS || (YY["SHADOW" + IY] && rY.addFallback(FY, "SHADOW" + IY), YY["SHADOWPCF" + IY] && rY.addFallback(FY, "SHADOWPCF" + IY), YY["SHADOWPCSS" + IY] && rY.addFallback(FY, "SHADOWPCSS" + IY), YY["SHADOWPOISSON" + IY] && rY.addFallback(FY, "SHADOWPOISSON" + IY), YY["SHADOWESM" + IY] && rY.addFallback(FY, "SHADOWESM" + IY), YY["SHADOWCLOSEESM" + IY] && rY.addFallback(FY, "SHADOWCLOSEESM" + IY));
      return AY
    }

    function zY(YY, rY, DY, FY, AY, IY, RY) {
      let OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        aY = arguments.length > 9 ? arguments[9] : void 0,
        vY = arguments.length > 10 ? arguments[10] : void 0;
      if (RY._areMiscDirty) {
        RY.LOGARITHMICDEPTH = DY, RY.POINTSIZE = FY, RY.FOG = AY && function(YY, rY) {
          return rY.fogEnabled && YY.applyFog && 0 !== rY.fogMode
        }(YY, rY), RY.NONUNIFORMSCALING = YY.nonUniformScaling, RY.ALPHATEST = IY, RY.DECAL_AFTER_DETAIL = OY, RY.USE_VERTEX_PULLING = gY, RY.RIGHT_HANDED = rY.useRightHandedSystem;
        const uY = gY ? aY?.geometry?.getIndexBuffer() : null,
          sY = !!aY && aY.isUnIndexed;
        RY.VERTEX_PULLING_USE_INDEX_BUFFER = !!uY && !sY, RY.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!uY || sY) && uY.is32Bits, RY.VERTEXOUTPUT_INVARIANT = !!vY
      }
    }

    function ZY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!YY.lightsEnabled || FY) return !0;
      const AY = rY.lightSources,
        IY = Math.min(AY.length, DY);
      for (let RY = 0; RY < IY; RY++)
        if (!AY[RY].areLightTexturesReady()) return !1;
      return !0
    }

    function CY(YY, rY, DY, AY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!DY._areLightsDirty) return DY._needNormals;
      const OY = IY;
      IY = function(YY, rY) {
        const DY = YY.ky().getCaps().maxUniformBuffersPerShaderStage;
        if (null == DY) return rY;
        const FY = Math.max(DY - eY, 1);
        return Math.min(rY, FY)
      }(YY, IY);
      let gY = 0;
      const aY = {
        needNormals: DY._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (YY.lightsEnabled && !RY) {
        rY.lightSources.length > IY && IY < OY && function(YY, rY, DY, AY) {
          let IY = NY.get(YY);
          IY || (IY = new Set, NY.set(YY, IY)), IY.has(AY) || (IY.add(AY), FY.d.Warn(`maxSimultaneousLights is ${rY} but this engine supports at most ${DY} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${AY} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${AY+eY} uniform buffers, over the device limit of ${YY.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${DY}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${DY} or less to silence this warning.`))
        }(YY.ky(), OY, IY, Math.min(rY.lightSources.length, OY));
        for (const FY of rY.lightSources)
          if (jY(YY, rY, FY, gY, DY, AY, aY), gY++, gY === IY) break
      }
      DY.SPECULARTERM = aY.specularEnabled, DY.SHADOWS = aY.shadowEnabled;
      const vY = Math.max(IY, DY.MAXLIGHTCOUNT || 0);
      for (let FY = gY; FY < vY; FY++) void 0 !== DY["LIGHT" + FY] && (DY["LIGHT" + FY] = !1, DY["HEMILIGHT" + FY] = !1, DY["POINTLIGHT" + FY] = !1, DY["DIRLIGHT" + FY] = !1, DY["SPOTLIGHT" + FY] = !1, DY["AREALIGHT" + FY] = !1, DY["CLUSTLIGHT" + FY] = !1, DY["SHADOW" + FY] = !1, DY["SHADOWCSM" + FY] = !1, DY["SHADOWCSMDEBUG" + FY] = !1, DY["SHADOWCSMNUM_CASCADES" + FY] = !1, DY["SHADOWCSMUSESHADOWMAXZ" + FY] = !1, DY["SHADOWCSMNOBLEND" + FY] = !1, DY["SHADOWCSM_RIGHTHANDED" + FY] = !1, DY["SHADOWPCF" + FY] = !1, DY["SHADOWPCSS" + FY] = !1, DY["SHADOWPOISSON" + FY] = !1, DY["SHADOWESM" + FY] = !1, DY["SHADOWCLOSEESM" + FY] = !1, DY["SHADOWCUBE" + FY] = !1, DY["SHADOWLOWQUALITY" + FY] = !1, DY["SHADOWMEDIUMQUALITY" + FY] = !1);
      DY.LIGHTCOUNT = gY, DY.MAXLIGHTCOUNT = IY;
      const uY = YY.ky().getCaps();
      return void 0 === DY.SHADOWFLOAT && (aY.needRebuild = !0), DY.SHADOWFLOAT = aY.shadowEnabled && (uY.textureFloatRender && uY.textureFloatLinearFiltering || uY.textureHalfFloatRender && uY.textureHalfFloatLinearFiltering), DY.LIGHTMAPEXCLUDED = aY.lightmapMode, aY.needRebuild && DY.rebuild(), aY.needNormals
    }

    function fY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (rY && OY.c.ReflectionTextureEnabled) {
        if (!rY.isReadyOrNotBlocking()) return !1;
        DY._needNormals = !0, DY.REFLECTION = !0, DY.GAMMAREFLECTION = rY.gammaSpace, DY.RGBDREFLECTION = rY.isRGBD, DY.LODINREFLECTIONALPHA = rY.lodLevelInAlpha, DY.LINEARSPECULARREFLECTION = rY.linearSpecularLOD, DY.USEIRRADIANCEMAP = !1, DY.LODBASEDMICROSFURACE = YY.ky().getCaps().textureLOD;
        const RY = YY.ky();
        switch (FY && AY > 0 ? (DY.NUM_SAMPLES = "" + AY, RY._features.needTypeSuffixInShaderConstants && (DY.NUM_SAMPLES = DY.NUM_SAMPLES + "u"), DY.REALTIME_FILTERING = !0, YY.iblCdfGenerator && (DY.IBL_CDF_FILTERING = !0)) : DY.REALTIME_FILTERING = !1, DY.INVERTCUBICMAP = 6 === rY.coordinatesMode, DY.REFLECTIONMAP_3D = rY.isCube, DY.REFLECTIONMAP_OPPOSITEZ = DY.REFLECTIONMAP_3D && YY.useRightHandedSystem ? !rY.invertZ : rY.invertZ, DY.REFLECTIONMAP_CUBIC = !1, DY.REFLECTIONMAP_EXPLICIT = !1, DY.REFLECTIONMAP_PLANAR = !1, DY.REFLECTIONMAP_PROJECTION = !1, DY.REFLECTIONMAP_SKYBOX = !1, DY.REFLECTIONMAP_SPHERICAL = !1, DY.REFLECTIONMAP_EQUIRECTANGULAR = !1, DY.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, DY.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, rY.coordinatesMode) {
          case 0:
            DY.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            DY.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            DY.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            DY.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            DY.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            DY.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            DY.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            DY.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            DY.REFLECTIONMAP_CUBIC = !0, DY.USE_LOCAL_REFLECTIONMAP_CUBIC = !!rY.boundingBoxSize
        }
        5 !== rY.coordinatesMode && (rY.irradianceTexture ? (DY.USEIRRADIANCEMAP = !0, DY.USESPHERICALFROMREFLECTIONMAP = !1, DY.USESPHERICALINVERTEX = !1, rY.irradianceTexture._dominantDirection ? DY.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : DY.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : rY.isCube && (DY.USESPHERICALFROMREFLECTIONMAP = !0, DY.USEIRRADIANCEMAP = !1, DY.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, DY.USESPHERICALINVERTEX = IY))
      } else DY.REFLECTION = !1, DY.REFLECTIONMAP_3D = !1, DY.REFLECTIONMAP_SPHERICAL = !1, DY.REFLECTIONMAP_PLANAR = !1, DY.REFLECTIONMAP_CUBIC = !1, DY.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, DY.REFLECTIONMAP_PROJECTION = !1, DY.REFLECTIONMAP_SKYBOX = !1, DY.REFLECTIONMAP_EXPLICIT = !1, DY.REFLECTIONMAP_EQUIRECTANGULAR = !1, DY.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, DY.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, DY.INVERTCUBICMAP = !1, DY.USESPHERICALFROMREFLECTIONMAP = !1, DY.USEIRRADIANCEMAP = !1, DY.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, DY.USESPHERICALINVERTEX = !1, DY.REFLECTIONMAP_OPPOSITEZ = !1, DY.LODINREFLECTIONALPHA = !1, DY.GAMMAREFLECTION = !1, DY.RGBDREFLECTION = !1, DY.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function jY(YY, rY, DY, FY, AY, RY, OY) {
      switch (OY.needNormals = !0, void 0 === AY["LIGHT" + FY] && (OY.needRebuild = !0), AY["LIGHT" + FY] = !0, AY["SPOTLIGHT" + FY] = !1, AY["HEMILIGHT" + FY] = !1, AY["POINTLIGHT" + FY] = !1, AY["DIRLIGHT" + FY] = !1, AY["AREALIGHT" + FY] = !1, AY["CLUSTLIGHT" + FY] = !1, DY.prepareLightSpecificDefines(AY, FY), AY["LIGHT_FALLOFF_PHYSICAL" + FY] = !1, AY["LIGHT_FALLOFF_GLTF" + FY] = !1, AY["LIGHT_FALLOFF_STANDARD" + FY] = !1, DY.falloffType) {
        case IY.e.FALLOFF_GLTF:
          AY["LIGHT_FALLOFF_GLTF" + FY] = !0;
          break;
        case IY.e.FALLOFF_PHYSICAL:
          AY["LIGHT_FALLOFF_PHYSICAL" + FY] = !0;
          break;
        case IY.e.FALLOFF_STANDARD:
          AY["LIGHT_FALLOFF_STANDARD" + FY] = !0
      }
      if (RY && !DY.specular.equalsFloats(0, 0, 0) && (OY.specularEnabled = !0), AY["SHADOW" + FY] = !1, AY["SHADOWCSM" + FY] = !1, AY["SHADOWCSMDEBUG" + FY] = !1, AY["SHADOWCSMNUM_CASCADES" + FY] = !1, AY["SHADOWCSMUSESHADOWMAXZ" + FY] = !1, AY["SHADOWCSMNOBLEND" + FY] = !1, AY["SHADOWCSM_RIGHTHANDED" + FY] = !1, AY["SHADOWPCF" + FY] = !1, AY["SHADOWPCSS" + FY] = !1, AY["SHADOWPOISSON" + FY] = !1, AY["SHADOWESM" + FY] = !1, AY["SHADOWCLOSEESM" + FY] = !1, AY["SHADOWCUBE" + FY] = !1, AY["SHADOWLOWQUALITY" + FY] = !1, AY["SHADOWMEDIUMQUALITY" + FY] = !1, rY && rY.receiveShadows && YY.shadowsEnabled && DY.shadowEnabled) {
        const rY = DY.getShadowGenerator(YY.activeCamera) ?? DY.getShadowGenerator();
        if (rY) {
          const YY = rY.getShadowMap();
          YY && YY.renderList && YY.renderList.length > 0 && (OY.shadowEnabled = !0, rY.prepareDefines(AY, FY))
        }
      }
      DY.lightmapMode != IY.e.LIGHTMAP_DEFAULT ? (OY.lightmapMode = !0, AY["LIGHTMAPEXCLUDED" + FY] = !0, AY["LIGHTMAPNOSPECULAR" + FY] = DY.lightmapMode == IY.e.LIGHTMAP_SHADOWSONLY) : (AY["LIGHTMAPEXCLUDED" + FY] = !1, AY["LIGHTMAPNOSPECULAR" + FY] = !1)
    }

    function hY(YY, rY, DY, FY, AY) {
      let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        OY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gY = function(YY, rY) {
          let DY = !1;
          if (YY.activeCamera) {
            const FY = rY.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              AY = rY.CAMERA_PERSPECTIVE ? 1 : 0,
              IY = 1 === YY.activeCamera.mode ? 1 : 0,
              RY = 0 === YY.activeCamera.mode ? 1 : 0;
            (FY ^ IY || AY ^ RY) && (rY.CAMERA_ORTHOGRAPHIC = 1 === IY, rY.CAMERA_PERSPECTIVE = 1 === RY, DY = !0)
          }
          return DY
        }(YY, FY);
      !1 !== IY && (gY = (0, RY.d)(DY, YY, FY)), FY.DEPTHPREPASS !== !rY.getColorWrite() && (FY.DEPTHPREPASS = !FY.DEPTHPREPASS, gY = !0), FY.INSTANCES !== AY && (FY.INSTANCES = AY, gY = !0), FY.THIN_INSTANCES !== OY && (FY.THIN_INSTANCES = OY, gY = !0), gY && FY.markAsUnprocessed()
    }
    const dY = 40,
      JY = 64,
      MY = new WeakMap,
      wY = new WeakSet;

    function bY(YY, rY, DY, AY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        OY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!rY._areAttributesDirty && rY._needNormals === rY._normals && rY._needUVs === rY._uvs) return !1;
      rY._normals = rY._needNormals, rY._uvs = rY._needUVs, rY.NORMAL = rY._needNormals && YY.isVerticesDataPresent("normal"), rY._needNormals && YY.isVerticesDataPresent("tangent") && (rY.TANGENT = !0);
      for (let FY = 1; FY <= 6; ++FY) rY["UV" + FY] = !!rY._needUVs && YY.isVerticesDataPresent(`uv${1===FY?"":FY}`);
      if (DY) {
        const DY = YY.useVertexColors && YY.isVerticesDataPresent("color");
        rY.VERTEXCOLOR = DY, rY.VERTEXALPHA = YY.hasVertexAlpha && DY && RY
      }
      return YY.isVerticesDataPresent("instanceColor") && (YY.aFY || YY.hasThinInstances) && (rY.INSTANCESCOLOR = !0), AY && function(YY, rY) {
        if (YY.useBones && YY.computeBonesUsingShaders && YY.skeleton) {
          rY.NUM_BONE_INFLUENCERS = YY.numBoneInfluencers;
          const DY = void 0 !== rY.BONETEXTURE;
          if (YY.skeleton.isUsingTextureForMatrices && DY) rY.BONETEXTURE = !0;
          else {
            rY.BonesPerMesh = YY.skeleton.bones.length + 1, rY.BONETEXTURE = !DY && void 0;
            const AY = YY.hT(),
              IY = AY.prePassRenderer;
            if (IY && IY.enabled) {
              const DY = -1 === IY.excludedSkinnedMesh.indexOf(YY);
              rY.BONES_VELOCITY_ENABLED = DY
            }
            const RY = !0 === rY.MULTIVIEW,
              OY = 2 * rY.BonesPerMesh + (RY ? 1 : 0);
            if (MY.get(YY.skeleton) !== OY) {
              MY.set(YY.skeleton, OY);
              const DY = AY.ky().getCaps().maxVertexUniformVectors;
              if (DY && !wY.has(YY.skeleton)) {
                const AY = 4 * rY.BonesPerMesh,
                  IY = RY ? JY : dY,
                  OY = Math.max(DY - IY, 0);
                (AY > OY || RY && 3 * AY > DY) && (wY.add(YY.skeleton), FY.d.Warn(`Skeleton "${YY.skeleton.name}": ${YY.skeleton.bones.length} bones stored as vertex uniforms use ${AY} of ~${OY} usable uniform vectors${RY?" (multiview)":""} on a device reporting ${DY}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else rY.NUM_BONE_INFLUENCERS = 0, rY.BonesPerMesh = 0, void 0 !== rY.BONETEXTURE && (rY.BONETEXTURE = !1)
      }(YY, rY), IY && function(YY, rY) {
        const DY = YY.morphTargetManager;
        DY ? (rY.MORPHTARGETS_UV = DY.supportsUVs && rY.UV1, rY.MORPHTARGETS_UV2 = DY.supportsUV2s && rY.UV2, rY.MORPHTARGETS_TANGENT = DY.supportsTangents && rY.TANGENT, rY.MORPHTARGETS_NORMAL = DY.supportsNormals && rY.NORMAL, rY.MORPHTARGETS_POSITION = DY.supportsPositions, rY.MORPHTARGETS_COLOR = DY.supportsColors, rY.MORPHTARGETTEXTURE_HASUVS = DY.hasUVs, rY.MORPHTARGETTEXTURE_HASUV2S = DY.hasUV2s, rY.MORPHTARGETTEXTURE_HASTANGENTS = DY.hasTangents, rY.MORPHTARGETTEXTURE_HASNORMALS = DY.hasNormals, rY.MORPHTARGETTEXTURE_HASPOSITIONS = DY.hasPositions, rY.MORPHTARGETTEXTURE_HASCOLORS = DY.hasColors, rY.NUM_MORPH_INFLUENCERS = DY.numMaxInfluencers || DY.numInfluencers, rY.MORPHTARGETS = rY.NUM_MORPH_INFLUENCERS > 0, rY.MORPHTARGETS_TEXTURE = DY.isUsingTextureForTargets) : (rY.MORPHTARGETS_UV = !1, rY.MORPHTARGETS_UV2 = !1, rY.MORPHTARGETS_TANGENT = !1, rY.MORPHTARGETS_NORMAL = !1, rY.MORPHTARGETS_POSITION = !1, rY.MORPHTARGETS_COLOR = !1, rY.MORPHTARGETTEXTURE_HASUVS = !1, rY.MORPHTARGETTEXTURE_HASUV2S = !1, rY.MORPHTARGETTEXTURE_HASTANGENTS = !1, rY.MORPHTARGETTEXTURE_HASNORMALS = !1, rY.MORPHTARGETTEXTURE_HASPOSITIONS = !1, rY.MORPHTARGETTEXTURE_HAS_COLORS = !1, rY.MORPHTARGETS = !1, rY.NUM_MORPH_INFLUENCERS = 0)
      }(YY, rY), OY && function(YY, rY) {
        const DY = YY.bakedVertexAnimationManager;
        rY.BAKED_VERTEX_ANIMATION_TEXTURE = !(!DY || !DY.isEnabled)
      }(YY, rY), !0
    }

    function XY(YY, rY) {
      if (YY.activeCamera) {
        const DY = rY.MULTIVIEW;
        rY.MULTIVIEW = null !== YY.activeCamera.outputRenderTarget && YY.activeCamera.outputRenderTarget.getViewCount() > 1, rY.MULTIVIEW != DY && rY.markAsUnprocessed()
      }
    }

    function qY(YY, rY, DY) {
      const FY = rY.ORDER_INDEPENDENT_TRANSPARENCY,
        AY = rY.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      rY.ORDER_INDEPENDENT_TRANSPARENCY = YY.useOrderIndependentTransparency && DY, rY.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !YY.ky().getCaps().textureFloatLinearFiltering, FY === rY.ORDER_INDEPENDENT_TRANSPARENCY && AY === rY.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || rY.markAsUnprocessed()
    }

    function pY(YY, rY, DY) {
      const FY = rY.PREPASS;
      if (!rY._arePrePassDirty) return;
      const AY = [{
        type: 1,
        define: "PREPASS_POSITION",
        index: "PREPASS_POSITION_INDEX"
      }, {
        type: 9,
        define: "PREPASS_LOCAL_POSITION",
        index: "PREPASS_LOCAL_POSITION_INDEX"
      }, {
        type: 2,
        define: "PREPASS_VELOCITY",
        index: "PREPASS_VELOCITY_INDEX"
      }, {
        type: 11,
        define: "PREPASS_VELOCITY_LINEAR",
        index: "PREPASS_VELOCITY_LINEAR_INDEX"
      }, {
        type: 3,
        define: "PREPASS_REFLECTIVITY",
        index: "PREPASS_REFLECTIVITY_INDEX"
      }, {
        type: 0,
        define: "PREPASS_IRRADIANCE_LEGACY",
        index: "PREPASS_IRRADIANCE_LEGACY_INDEX"
      }, {
        type: 7,
        define: "PREPASS_ALBEDO_SQRT",
        index: "PREPASS_ALBEDO_SQRT_INDEX"
      }, {
        type: 5,
        define: "PREPASS_DEPTH",
        index: "PREPASS_DEPTH_INDEX"
      }, {
        type: 10,
        define: "PREPASS_SCREENSPACE_DEPTH",
        index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
      }, {
        type: 6,
        define: "PREPASS_NORMAL",
        index: "PREPASS_NORMAL_INDEX"
      }, {
        type: 8,
        define: "PREPASS_WORLD_NORMAL",
        index: "PREPASS_WORLD_NORMAL_INDEX"
      }, {
        type: 14,
        define: "PREPASS_IRRADIANCE",
        index: "PREPASS_IRRADIANCE_INDEX"
      }];
      if (YY.prePassRenderer && YY.prePassRenderer.enabled && DY) {
        rY.PREPASS = !0, rY.SCENE_MRT_COUNT = YY.prePassRenderer.mrtCount, rY.PREPASS_NORMAL_WORLDSPACE = YY.prePassRenderer.generateNormalsInWorldSpace, rY.PREPASS_COLOR = !0, rY.PREPASS_COLOR_INDEX = 0;
        for (let DY = 0; DY < AY.length; DY++) {
          const FY = YY.prePassRenderer.getIndex(AY[DY].type); - 1 !== FY ? (rY[AY[DY].define] = !0, rY[AY[DY].index] = FY) : rY[AY[DY].define] = !1
        }
      } else {
        rY.PREPASS = !1;
        for (let YY = 0; YY < AY.length; YY++) rY[AY[YY].define] = !1
      }
      rY.PREPASS != FY && (rY.markAsUnprocessed(), rY.markAsImageProcessingDirty())
    }

    function kY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        aY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      AY && AY.push("Light" + YY), IY || (rY.push("vLightData" + YY, "vLightDiffuse" + YY, "vLightSpecular" + YY, "vLightDirection" + YY, "vLightWidth" + YY, "vLightHeight" + YY, "vLightFalloff" + YY, "vLightGround" + YY, "vSliceData" + YY, "vSliceRanges" + YY, "lightMatrix" + YY, "shadowsInfo" + YY, "depthValues" + YY), DY.push("shadowTexture" + YY), DY.push("depthTexture" + YY), rY.push("viewFrustumZ" + YY, "cascadeBlendFactor" + YY, "lightSizeUVCorrection" + YY, "depthCorrection" + YY, "penumbraDarkness" + YY, "frustumLengths" + YY), FY && (DY.push("projectionLightTexture" + YY), rY.push("textureProjectionMatrix" + YY)), RY && DY.push("iesLightTexture" + YY), gY && DY.push("rectAreaLightEmissionTexture" + YY), OY && (DY.push("lightDataTexture" + YY), aY || DY.push("tileMaskTexture" + YY)))
    }

    function GY(YY, rY, DY) {
      const FY = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      DY && FY.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), YY.push(...FY);
      rY.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function xY(YY, rY, DY) {
      let FY, AY, IY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        RY = null;
      if (YY.uniformsNames) {
        const OY = YY;
        FY = OY.uniformsNames, AY = OY.uniformBuffersNames, rY = OY.samplers, DY = OY.defines, IY = OY.maxSimultaneousLights || 0, RY = OY.shaderLanguage ?? null
      } else FY = YY, rY || (rY = []);
      for (let OY = 0; OY < IY && DY["LIGHT" + OY]; OY++) kY(OY, FY, rY, DY["PROJECTEDLIGHTTEXTURE" + OY], AY, !1, DY["IESLIGHTTEXTURE" + OY], DY["CLUSTLIGHT" + OY], DY["RECTAREALIGHTEMISSIONTEXTURE" + OY], 1 === RY);
      DY.NUM_MORPH_INFLUENCERS && (FY.push("morphTargetInfluences"), FY.push("morphTargetCount")), DY.BAKED_VERTEX_ANIMATION_TEXTURE && (FY.push("bakedVertexAnimationSettings"), FY.push("bakedVertexAnimationTextureSizeInverted"), FY.push("bakedVertexAnimationTime"), rY.push("bakedVertexAnimationTexture"))
    }

    function nY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      YY.addUniform("vReflectionInfos", 2), YY.addUniform("reflectionMatrix", 16), rY && YY.addUniform("vReflectionMicrosurfaceInfos", 3), DY && (YY.addUniform("vReflectionPosition", 3), YY.addUniform("vReflectionSize", 3)), FY && (YY.addUniform("vReflectionFilteringInfo", 2), YY.addUniform("vReflectionDominantDirection", 3)), IY && YY.addUniform("vReflectionColor", 3), AY && (YY.addUniform("vSphericalL00", 3), YY.addUniform("vSphericalL1_1", 3), YY.addUniform("vSphericalL10", 3), YY.addUniform("vSphericalL11", 3), YY.addUniform("vSphericalL2_2", 3), YY.addUniform("vSphericalL2_1", 3), YY.addUniform("vSphericalL20", 3), YY.addUniform("vSphericalL21", 3), YY.addUniform("vSphericalL22", 3), YY.addUniform("vSphericalX", 3), YY.addUniform("vSphericalY", 3), YY.addUniform("vSphericalZ", 3), YY.addUniform("vSphericalXX_ZZ", 3), YY.addUniform("vSphericalYY_ZZ", 3), YY.addUniform("vSphericalZZ", 3), YY.addUniform("vSphericalXY", 3), YY.addUniform("vSphericalYZ", 3), YY.addUniform("vSphericalZX", 3))
    }
  },
  39465: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(36524),
      AY = DY(39414);
    class IY extends AY.c {
      constructor(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(YY, rY, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new FY.e, this._storeEffectOnSubMeshes = DY
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(YY, rY) {
        return !!YY && (!this._storeEffectOnSubMeshes || (!YY.qm || 0 === YY.qm.length || this.isReadyForSubMesh(YY, YY.qm[0], rY)))
      }
      _isReadyForSubMesh(YY) {
        const rY = YY.materialDefines;
        return !(this.checkReadyOnEveryCall || !YY.effect || !rY || rY._renderId !== this.hT().getRenderId())
      }
      bindOnlyWorldMatrix(YY) {
        this._activeEffect.setMatrix("world", YY)
      }
      bindOnlyNormalMatrix(YY) {
        this._activeEffect.setMatrix("normalMatrix", YY)
      }
      bind(YY, rY) {
        rY && this.bindForSubMesh(YY, rY, rY.qm[0])
      }
      _afterBind(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(YY, rY, DY), this.hT()._cachedEffect = rY, DY ? DY._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return DY._drawWrapper._forceRebindOnNextCall || YY.isCachedMaterialInvalid(this, rY, FY)
      }
      dispose(YY, rY, DY) {
        this._activeEffect = void 0, super.dispose(YY, rY, DY)
      }
    }
  },
  39486: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      c: () => AY
    });
    const FY = new WeakMap;

    function AY(YY) {
      const rY = YY.getVertexBuffers();
      if (!rY) return null;
      let DY = FY.get(YY);
      if (DY) {
        let YY = !1;
        for (const FY in rY)
          if (!DY.has(FY)) {
            YY = !0;
            break
          } if (!YY) return DY
      } else DY = new Map, FY.set(YY, DY);
      for (const FY in rY) {
        const YY = rY[FY];
        if (YY) {
          const rY = YY.byteOffset,
            AY = YY.byteStride,
            IY = YY.type,
            RY = YY.normalized;
          DY.set(FY, {
            offset: rY,
            stride: AY,
            type: IY,
            normalized: RY
          })
        }
      }
      return DY
    }

    function IY(YY, rY) {
      rY.forEach(((rY, DY) => {
        const FY = `vp_${DY}_info`;
        YY.setFloat4(FY, rY.offset, rY.stride, rY.type, rY.normalized ? 1 : 0)
      }))
    }
  },
  39429: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      h: () => gY
    });
    var FY = DY(39127),
      AY = DY(36524),
      IY = DY(39131);
    let RY = (() => {
      var YY;
      let rY, DY, AY = [];
      return YY = class {
        static extractMinAndMaxIndexed(YY, rY, DY, FY, AY, IY) {
          for (let RY = DY; RY < DY + FY; RY++) {
            const DY = 3 * rY[RY],
              FY = YY[DY],
              OY = YY[DY + 1],
              gY = YY[DY + 2];
            AY.minimizeInPlaceFromFloats(FY, OY, gY), IY.maximizeInPlaceFromFloats(FY, OY, gY)
          }
        }
        static extractMinAndMax(YY, rY, DY, FY, AY, IY) {
          for (let RY = rY, OY = rY * FY; RY < rY + DY; RY++, OY += FY) {
            const rY = YY[OY],
              DY = YY[OY + 1],
              FY = YY[OY + 2];
            AY.minimizeInPlaceFromFloats(rY, DY, FY), IY.maximizeInPlaceFromFloats(rY, DY, FY)
          }
        }
      }, (() => {
        const RY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [IY.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], DY = [IY.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, FY.i)(YY, null, rY, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: YY => "extractMinAndMaxIndexed" in YY,
            get: YY => YY.extractMinAndMaxIndexed
          },
          metadata: RY
        }, null, AY), (0, FY.i)(YY, null, DY, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: YY => "extractMinAndMax" in YY,
            get: YY => YY.extractMinAndMax
          },
          metadata: RY
        }, null, AY), RY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RY
        }), (0, FY.j)(YY, AY)
      })(), YY
    })();

    function OY(YY, rY, DY, FY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const OY = new AY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        gY = new AY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return RY.extractMinAndMaxIndexed(YY, rY, DY, FY, OY, gY), IY && (OY.x -= OY.x * IY.x + IY.y, OY.y -= OY.y * IY.x + IY.y, OY.z -= OY.z * IY.x + IY.y, gY.x += gY.x * IY.x + IY.y, gY.y += gY.y * IY.x + IY.y, gY.z += gY.z * IY.x + IY.y), {
        minimum: OY,
        maximum: gY
      }
    }

    function gY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        IY = arguments.length > 4 ? arguments[4] : void 0;
      const OY = new AY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        gY = new AY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return IY || (IY = 3), RY.extractMinAndMax(YY, rY, DY, IY, OY, gY), FY && (OY.x -= OY.x * FY.x + FY.y, OY.y -= OY.y * FY.x + FY.y, OY.z -= OY.z * FY.x + FY.y, gY.x += gY.x * FY.x + FY.y, gY.y += gY.y * FY.x + FY.y, gY.z += gY.z * FY.x + FY.y), {
        minimum: OY,
        maximum: gY
      }
    }
  },
  39416: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY
    });
    var FY, AY = DY(39270),
      IY = DY(39419),
      RY = DY(39422),
      OY = DY(39429),
      gY = DY(39437),
      aY = DY(39029);
    class vY {
      get materialDefines() {
        const YY = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof YY ? null : YY
      }
      set materialDefines(YY) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = YY
      }
      _getDrawWrapper(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        YY = YY ?? this._engine.currentRenderPassId;
        let DY = this._drawWrappers[YY];
        return !DY && rY && (this._drawWrappers[YY] = DY = new gY.b(this._mesh.hT().ky())), DY
      }
      _removeDrawWrapper(YY) {
        let rY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[YY]?.dispose(rY), this._drawWrappers[YY] = void 0
      }
      get effect() {
        return this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.effect : this._getDrawWrapper()?.effect ?? null
      }
      get _drawWrapper() {
        return this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)
      }
      get _drawWrapperOverride() {
        return this._mainDrawWrapperOverride
      }
      _setMainDrawWrapperOverride(YY) {
        this._mainDrawWrapperOverride = YY
      }
      setEffect(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AY = this._drawWrapper;
        AY.setEffect(YY, rY, FY), void 0 !== DY && (AY.materialContext = DY), YY || (AY.defines = null, AY.materialContext = void 0)
      }
      resetDrawCache(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== YY) return void this._removeDrawWrapper(YY, !0, rY);
          for (const YY of this._drawWrappers) YY?.dispose(rY)
        }
        this._drawWrappers = []
      }
      static AddToMesh(YY, rY, DY, FY, AY, IY, RY) {
        return new vY(YY, rY, DY, FY, AY, IY, RY, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(YY, rY, DY, FY, AY, IY, RY) {
        let OY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gY = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = YY, this.verticesStart = rY, this.verticesCount = DY, this.indexStart = FY, this.indexCount = AY, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = IY, this._renderingMesh = RY || IY, gY && IY.qm.push(this), this._engine = this._mesh.hT().ky(), this.resetDrawCache(), this._trianglePlanes = [], this._id = IY.qm.length - 1, OY && (this.refreshBoundingInfo(), IY.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      oB() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.oB() : this._boundingInfo
      }
      setBoundingInfo(YY) {
        return this._boundingInfo = YY, this
      }
      getMesh() {
        return this._mesh
      }
      getRenderingMesh() {
        return this._renderingMesh
      }
      getReplacementMesh() {
        return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
      }
      getEffectiveMesh() {
        const YY = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return YY || this._renderingMesh
      }
      Uy() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const rY = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!rY) return YY && this._mesh.hT()._hasDefaultMaterial ? this._mesh.hT().defaultMaterial : null;
        if (this._isMultiMaterial(rY)) {
          const YY = rY.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== YY && (this._currentMaterial = YY, this.resetDrawCache()), YY
        }
        return rY
      }
      _isMultiMaterial(YY) {
        return void 0 !== YY.getSubMaterial
      }
      refreshBoundingInfo() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (YY || (YY = this._renderingMesh.getVerticesData(AY.l.PositionKind)), !YY) return this._boundingInfo = this._mesh.oB(), this;
        const rY = this._renderingMesh.XIY();
        let DY;
        if (0 === this.indexStart && this.indexCount === rY.length) {
          const YY = this._renderingMesh.oB();
          DY = {
            minimum: YY.minimum.clone(),
            maximum: YY.maximum.clone()
          }
        } else DY = (0, OY.e)(YY, rY, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(DY.minimum, DY.maximum) : this._boundingInfo = new RY.d(DY.minimum, DY.maximum), this
      }
      _checkCollision(YY) {
        return this.oB()._checkCollision(YY)
      }
      updateBoundingInfo(YY) {
        let rY = this.oB();
        return rY || (this.refreshBoundingInfo(), rY = this.oB()), rY && rY.update(YY), this
      }
      isInFrustum(YY) {
        const rY = this.oB();
        return !!rY && rY.isInFrustum(YY, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(YY) {
        const rY = this.oB();
        return !!rY && rY.isCompletelyInFrustum(YY)
      }
      render(YY) {
        return this._renderingMesh.render(this, YY, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(YY, rY) {
        if (!this._linesIndexBuffer) {
          const DY = 6 * Math.floor(this.indexCount / 3),
            FY = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(DY) : new Uint16Array(DY);
          let AY = 0;
          if (0 === YY.length)
            for (let YY = this.indexStart; YY < this.indexStart + this.indexCount; YY += 3) FY[AY++] = YY, FY[AY++] = YY + 1, FY[AY++] = YY + 1, FY[AY++] = YY + 2, FY[AY++] = YY + 2, FY[AY++] = YY;
          else
            for (let rY = this.indexStart; rY < this.indexStart + this.indexCount; rY += 3) FY[AY++] = YY[rY], FY[AY++] = YY[rY + 1], FY[AY++] = YY[rY + 1], FY[AY++] = YY[rY + 2], FY[AY++] = YY[rY + 2], FY[AY++] = YY[rY];
          this._linesIndexBuffer = rY.createIndexBuffer(FY), this._linesIndexCount = FY.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(YY) {
        const rY = this.oB();
        return !!rY && YY.intersectsBox(rY.boundingBox)
      }
      intersects(YY, rY, DY, FY, AY) {
        const IY = this.Uy();
        if (!IY) return null;
        let RY = 3,
          OY = !1;
        switch (IY.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            RY = 1, OY = !0
        }
        return 4 === IY.fillMode ? DY.length ? this._intersectLines(YY, rY, DY, this._mesh.intersectionThreshold, FY) : this._intersectUnIndexedLines(YY, rY, DY, this._mesh.intersectionThreshold, FY) : !DY.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(YY, rY, DY, FY, AY) : this._intersectTriangles(YY, rY, DY, RY, OY, FY, AY)
      }
      _intersectLines(YY, rY, DY, FY, AY) {
        let RY = null;
        for (let OY = this.indexStart; OY < this.indexStart + this.indexCount; OY += 2) {
          const gY = rY[DY[OY]],
            aY = rY[DY[OY + 1]],
            vY = YY.intersectionSegment(gY, aY, FY);
          if (!(vY < 0) && ((AY || !RY || vY < RY.distance) && (RY = new IY.c(null, null, vY), RY.faceId = OY / 2, AY))) break
        }
        return RY
      }
      _intersectUnIndexedLines(YY, rY, DY, FY, AY) {
        let RY = null;
        for (let OY = this.verticesStart; OY < this.verticesStart + this.verticesCount; OY += 2) {
          const DY = rY[OY],
            gY = rY[OY + 1],
            aY = YY.intersectionSegment(DY, gY, FY);
          if (!(aY < 0) && ((AY || !RY || aY < RY.distance) && (RY = new IY.c(null, null, aY), RY.faceId = OY / 2, AY))) break
        }
        return RY
      }
      _intersectTriangles(YY, rY, DY, FY, AY, IY, RY) {
        let OY = null,
          gY = -1;
        for (let aY = this.indexStart; aY < this.indexStart + this.indexCount - (3 - FY); aY += FY) {
          gY++;
          const FY = DY[aY],
            vY = DY[aY + 1],
            uY = DY[aY + 2];
          if (AY && 4294967295 === uY) {
            aY += 2;
            continue
          }
          const sY = rY[FY],
            iY = rY[vY],
            yY = rY[uY];
          if (!sY || !iY || !yY) continue;
          if (RY && !RY(sY, iY, yY, YY, FY, vY, uY)) continue;
          const QY = YY.intersectsTriangle(sY, iY, yY);
          if (QY) {
            if (QY.distance < 0) continue;
            if ((IY || !OY || QY.distance < OY.distance) && (OY = QY, OY.faceId = gY, IY)) break
          }
        }
        return OY
      }
      _intersectUnIndexedTriangles(YY, rY, DY, FY, AY) {
        let IY = null;
        for (let RY = this.verticesStart; RY < this.verticesStart + this.verticesCount; RY += 3) {
          const DY = rY[RY],
            OY = rY[RY + 1],
            gY = rY[RY + 2];
          if (AY && !AY(DY, OY, gY, YY, -1, -1, -1)) continue;
          const aY = YY.intersectsTriangle(DY, OY, gY);
          if (aY) {
            if (aY.distance < 0) continue;
            if ((FY || !IY || aY.distance < IY.distance) && (IY = aY, IY.faceId = RY / 3, FY)) break
          }
        }
        return IY
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(YY, rY) {
        const DY = new vY(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, YY, rY, !1);
        if (!this.IsGlobal) {
          const YY = this.oB();
          if (!YY) return DY;
          DY._boundingInfo = new RY.d(YY.minimum, YY.maximum)
        }
        return DY
      }
      dispose() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.hT().ky()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const rY = this._mesh.qm.indexOf(this);
        this._mesh.qm.splice(rY, 1), this.resetDrawCache(void 0, YY)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(YY, rY, DY, FY, AY) {
        let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = Number.MAX_VALUE,
          OY = -Number.MAX_VALUE;
        const gY = (AY || FY).XIY();
        for (let aY = rY; aY < rY + DY; aY++) {
          const YY = gY[aY];
          YY < RY && (RY = YY), YY > OY && (OY = YY)
        }
        return new vY(YY, RY, OY - RY + 1, rY, DY, FY, AY, IY)
      }
    }(FY = vY.prototype).projectToRef ?? (FY.projectToRef = (0, aY.g)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);