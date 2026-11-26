export const id = 291;
export const ids = [291];
export const modules = {
  41585: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor(HH, BH, LH) {
        this.bu = HH, this.bv = BH, this.distance = LH, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41595: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(37974),
      rH = LH(37963),
      SH = LH(37972);
    class hH {
      constructor(HH, BH, LH) {
        this.vectors = (0, AH.d)(8, rH.o.Zero), this.center = rH.o.Zero(), this.centerWorld = rH.o.Zero(), this.extendSize = rH.o.Zero(), this.extendSizeWorld = rH.o.Zero(), this.directions = (0, AH.d)(3, rH.o.Zero), this.vectorsWorld = (0, AH.d)(8, rH.o.Zero), this.minimumWorld = rH.o.Zero(), this.maximumWorld = rH.o.Zero(), this.minimum = rH.o.Zero(), this.maximum = rH.o.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(HH, BH, LH)
      }
      reConstruct(HH, BH, LH) {
        const AH = HH.x,
          SH = HH.y,
          hH = HH.z,
          tH = BH.x,
          zH = BH.y,
          CH = BH.z,
          EH = this.vectors;
        this.minimum.SBH(AH, SH, hH), this.maximum.SBH(tH, zH, CH), EH[0].SBH(AH, SH, hH), EH[1].SBH(tH, zH, CH), EH[2].SBH(tH, SH, hH), EH[3].SBH(AH, zH, hH), EH[4].SBH(AH, SH, CH), EH[5].SBH(tH, zH, hH), EH[6].SBH(AH, zH, CH), EH[7].SBH(tH, SH, CH), BH.addToRef(HH, this.center).scaleInPlace(.5), BH.subtractToRef(HH, this.extendSize).scaleInPlace(.5), this._worldMatrix = LH || rH.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(HH) {
        const BH = hH._TmpVector3,
          LH = this.maximum.subtractToRef(this.minimum, BH[0]),
          AH = LH.length();
        LH.normalizeFromLength(AH);
        const rH = AH * HH,
          SH = LH.scaleInPlace(.5 * rH),
          tH = this.center.subtractToRef(SH, BH[1]),
          zH = this.center.addToRef(SH, BH[2]);
        return this.reConstruct(tH, zH, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(HH) {
        const BH = this.minimumWorld,
          LH = this.maximumWorld,
          AH = this.directions,
          SH = this.vectorsWorld,
          hH = this.vectors;
        if (HH.isIdentity()) {
          BH.Tm(this.minimum), LH.Tm(this.maximum);
          for (let HH = 0; HH < 8; ++HH) SH[HH].Tm(hH[HH]);
          this.extendSizeWorld.Tm(this.extendSize), this.centerWorld.Tm(this.center)
        } else {
          BH.IHH(Number.MAX_VALUE), LH.IHH(-Number.MAX_VALUE);
          for (let AH = 0; AH < 8; ++AH) {
            const tH = SH[AH];
            rH.o.TransformCoordinatesToRef(hH[AH], HH, tH), BH.minimizeInPlace(tH), LH.maximizeInPlace(tH)
          }
          LH.subtractToRef(BH, this.extendSizeWorld).scaleInPlace(.5), LH.addToRef(BH, this.centerWorld).scaleInPlace(.5)
        }
        rH.o.FromArrayToRef(HH.m, 0, AH[0]), rH.o.FromArrayToRef(HH.m, 4, AH[1]), rH.o.FromArrayToRef(HH.m, 8, AH[2]), this._worldMatrix = HH
      }
      isInFrustum(HH) {
        return hH.IsInFrustum(this.vectorsWorld, HH)
      }
      isCompletelyInFrustum(HH) {
        return hH.IsCompletelyInFrustum(this.vectorsWorld, HH)
      }
      intersectsPoint(HH) {
        const BH = this.minimumWorld,
          LH = this.maximumWorld,
          AH = BH.x,
          rH = BH.y,
          hH = BH.z,
          tH = LH.x,
          zH = LH.y,
          CH = LH.z,
          EH = HH.x,
          XH = HH.y,
          GH = HH.z,
          YH = -SH.d;
        return !(tH - EH < YH || YH > EH - AH) && (!(zH - XH < YH || YH > XH - rH) && !(CH - GH < YH || YH > GH - hH))
      }
      intersectsSphere(HH) {
        return hH.IntersectsSphere(this.minimumWorld, this.maximumWorld, HH.centerWorld, HH.radiusWorld)
      }
      intersectsMinMax(HH, BH) {
        const LH = this.minimumWorld,
          AH = this.maximumWorld,
          rH = LH.x,
          SH = LH.y,
          hH = LH.z,
          tH = AH.x,
          zH = AH.y,
          CH = AH.z,
          EH = HH.x,
          XH = HH.y,
          GH = HH.z,
          YH = BH.x,
          uH = BH.y,
          QH = BH.z;
        return !(tH < EH || rH > YH) && (!(zH < XH || SH > uH) && !(CH < GH || hH > QH))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(HH, BH) {
        return HH.intersectsMinMax(BH.minimumWorld, BH.maximumWorld)
      }
      static IntersectsSphere(HH, BH, LH, AH) {
        const SH = hH._TmpVector3[0];
        rH.o.ClampToRef(LH, HH, BH, SH);
        return rH.o.DistanceSquared(LH, SH) <= AH * AH
      }
      static IsCompletelyInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; ++LH) {
          const AH = BH[LH];
          for (let BH = 0; BH < 8; ++BH)
            if (AH.dotCoordinate(HH[BH]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; ++LH) {
          let AH = !0;
          const rH = BH[LH];
          for (let BH = 0; BH < 8; ++BH)
            if (rH.dotCoordinate(HH[BH]) >= 0) {
              AH = !1;
              break
            } if (AH) return !1
        }
        return !0
      }
    }
    hH._TmpVector3 = (0, AH.d)(3, rH.o.Zero)
  },
  41588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH
    });
    var AH = LH(37974),
      rH = LH(37963),
      SH = LH(41595);
    class hH {
      constructor(HH, BH, LH) {
        this.center = rH.o.Zero(), this.centerWorld = rH.o.Zero(), this.minimum = rH.o.Zero(), this.maximum = rH.o.Zero(), this.reConstruct(HH, BH, LH)
      }
      reConstruct(HH, BH, LH) {
        this.minimum.Tm(HH), this.maximum.Tm(BH);
        const AH = rH.o.Distance(HH, BH);
        BH.addToRef(HH, this.center).scaleInPlace(.5), this.radius = .5 * AH, this._update(LH || rH.e.IdentityReadOnly)
      }
      scale(HH) {
        const BH = hH._TmpVector3,
          LH = this.maximum.subtractToRef(this.minimum, BH[0]),
          AH = LH.length();
        LH.normalizeFromLength(AH);
        const rH = AH * HH,
          SH = LH.scaleInPlace(.5 * rH),
          tH = this.center.subtractToRef(SH, BH[1]),
          zH = this.center.addToRef(SH, BH[2]);
        return this.reConstruct(tH, zH, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(HH) {
        if (HH.isIdentity()) this.centerWorld.Tm(this.center), this.radiusWorld = this.radius;
        else {
          rH.o.TransformCoordinatesToRef(this.center, HH, this.centerWorld);
          const BH = hH._TmpVector3[0];
          rH.o.TransformNormalFromFloatsToRef(1, 1, 1, HH, BH), this.radiusWorld = Math.max(Math.abs(BH.x), Math.abs(BH.y), Math.abs(BH.z)) * this.radius
        }
      }
      isInFrustum(HH) {
        const BH = this.centerWorld,
          LH = this.radiusWorld;
        for (let AH = 0; AH < 6; AH++)
          if (HH[AH].dotCoordinate(BH) <= -LH) return !1;
        return !0
      }
      isCenterInFrustum(HH) {
        const BH = this.centerWorld;
        for (let LH = 0; LH < 6; LH++)
          if (HH[LH].dotCoordinate(BH) < 0) return !1;
        return !0
      }
      intersectsPoint(HH) {
        const BH = rH.o.DistanceSquared(this.centerWorld, HH);
        return !(this.radiusWorld * this.radiusWorld < BH)
      }
      static Intersects(HH, BH) {
        const LH = rH.o.DistanceSquared(HH.centerWorld, BH.centerWorld),
          AH = HH.radiusWorld + BH.radiusWorld;
        return !(AH * AH < LH)
      }
      static CreateFromCenterAndRadius(HH, BH, LH) {
        this._TmpVector3[0].Tm(HH), this._TmpVector3[1].SBH(0, 0, BH), this._TmpVector3[2].Tm(HH), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].grH(this._TmpVector3[1]);
        const AH = new hH(this._TmpVector3[0], this._TmpVector3[2]);
        return AH._worldMatrix = LH || rH.e.Identity(), AH
      }
    }
    hH._TmpVector3 = (0, AH.d)(3, rH.o.Zero);
    const tH = {
        min: 0,
        max: 0
      },
      zH = {
        min: 0,
        max: 0
      },
      CH = (HH, BH, LH) => {
        const AH = rH.o.Dot(BH.centerWorld, HH),
          SH = Math.abs(rH.o.Dot(BH.directions[0], HH)) * BH.extendSize.x + Math.abs(rH.o.Dot(BH.directions[1], HH)) * BH.extendSize.y + Math.abs(rH.o.Dot(BH.directions[2], HH)) * BH.extendSize.z;
        LH.min = AH - SH, LH.max = AH + SH
      },
      EH = (HH, BH, LH) => (CH(HH, BH, tH), CH(HH, LH, zH), !(tH.min > zH.max || zH.min > tH.max));
    class XH {
      constructor(HH, BH, LH) {
        this._isLocked = !1, this.boundingBox = new SH.b(HH, BH, LH), this.nrH = new hH(HH, BH, LH)
      }
      reConstruct(HH, BH, LH) {
        this.boundingBox.reConstruct(HH, BH, LH), this.nrH.reConstruct(HH, BH, LH)
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
      set isLocked(HH) {
        this._isLocked = HH
      }
      update(HH) {
        this._isLocked || (this.boundingBox._update(HH), this.nrH._update(HH))
      }
      centerOn(HH, BH) {
        const LH = XH._TmpVector3[0].Tm(HH).grH(BH),
          AH = XH._TmpVector3[1].Tm(HH).addInPlace(BH);
        return this.boundingBox.reConstruct(LH, AH, this.boundingBox.getWorldMatrix()), this.nrH.reConstruct(LH, AH, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(HH) {
        const BH = rH.o.Minimize(this.minimum, HH),
          LH = rH.o.Maximize(this.maximum, HH);
        return this.reConstruct(BH, LH, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(HH) {
        const BH = rH.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(BH);
        const LH = rH.l.lu[0];
        return rH.o.TransformCoordinatesToRef(HH.boundingBox.minimumWorld, BH, LH), this.encapsulate(LH), rH.o.TransformCoordinatesToRef(HH.boundingBox.maximumWorld, BH, LH), this.encapsulate(LH), this
      }
      scale(HH) {
        return this.boundingBox.scale(HH), this.nrH.scale(HH), this
      }
      isInFrustum(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === BH || 3 === BH) && this.nrH.isCenterInFrustum(HH)) return !0;
        if (!this.nrH.isInFrustum(HH)) return !1;
        return !(1 !== BH && 3 !== BH) || this.boundingBox.isInFrustum(HH)
      }
      get diagonalLength() {
        const HH = this.boundingBox;
        return HH.maximumWorld.subtractToRef(HH.minimumWorld, XH._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(HH) {
        return this.boundingBox.isCompletelyInFrustum(HH)
      }
      _checkCollision(HH) {
        return HH._canDoCollision(this.nrH.centerWorld, this.nrH.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(HH) {
        return !!this.nrH.centerWorld && (!!this.nrH.intersectsPoint(HH) && !!this.boundingBox.intersectsPoint(HH))
      }
      intersects(HH, BH) {
        if (!hH.Intersects(this.nrH, HH.nrH)) return !1;
        if (!SH.b.Intersects(this.boundingBox, HH.boundingBox)) return !1;
        if (!BH) return !0;
        const LH = this.boundingBox,
          AH = HH.boundingBox;
        return !!EH(LH.directions[0], LH, AH) && (!!EH(LH.directions[1], LH, AH) && (!!EH(LH.directions[2], LH, AH) && (!!EH(AH.directions[0], LH, AH) && (!!EH(AH.directions[1], LH, AH) && (!!EH(AH.directions[2], LH, AH) && (!!EH(rH.o.Cross(LH.directions[0], AH.directions[0]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[0], AH.directions[1]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[0], AH.directions[2]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[1], AH.directions[0]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[1], AH.directions[1]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[1], AH.directions[2]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[2], AH.directions[0]), LH, AH) && (!!EH(rH.o.Cross(LH.directions[2], AH.directions[1]), LH, AH) && !!EH(rH.o.Cross(LH.directions[2], AH.directions[2]), LH, AH))))))))))))))
      }
    }
    XH._TmpVector3 = (0, AH.d)(2, rH.o.Zero)
  },
  41623: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      d: () => zH,
      h: () => tH,
      i: () => hH
    });
    var AH = LH(41439),
      rH = LH(37963);

    function SH(HH) {
      -1 === HH.indexOf("vClipPlane") && HH.push("vClipPlane"), -1 === HH.indexOf("vClipPlane2") && HH.push("vClipPlane2"), -1 === HH.indexOf("vClipPlane3") && HH.push("vClipPlane3"), -1 === HH.indexOf("vClipPlane4") && HH.push("vClipPlane4"), -1 === HH.indexOf("vClipPlane5") && HH.push("vClipPlane5"), -1 === HH.indexOf("vClipPlane6") && HH.push("vClipPlane6")
    }

    function hH(HH, BH, LH) {
      const AH = !!(HH.clipPlane ?? BH.clipPlane),
        rH = !!(HH.clipPlane2 ?? BH.clipPlane2),
        SH = !!(HH.clipPlane3 ?? BH.clipPlane3),
        hH = !!(HH.clipPlane4 ?? BH.clipPlane4),
        tH = !!(HH.clipPlane5 ?? BH.clipPlane5),
        zH = !!(HH.clipPlane6 ?? BH.clipPlane6);
      AH && LH.push("#define CLIPPLANE"), rH && LH.push("#define CLIPPLANE2"), SH && LH.push("#define CLIPPLANE3"), hH && LH.push("#define CLIPPLANE4"), tH && LH.push("#define CLIPPLANE5"), zH && LH.push("#define CLIPPLANE6")
    }

    function tH(HH, BH, LH) {
      let AH = !1;
      const rH = !!(HH.clipPlane ?? BH.clipPlane),
        SH = !!(HH.clipPlane2 ?? BH.clipPlane2),
        hH = !!(HH.clipPlane3 ?? BH.clipPlane3),
        tH = !!(HH.clipPlane4 ?? BH.clipPlane4),
        zH = !!(HH.clipPlane5 ?? BH.clipPlane5),
        CH = !!(HH.clipPlane6 ?? BH.clipPlane6);
      return LH.CLIPPLANE !== rH && (LH.CLIPPLANE = rH, AH = !0), LH.CLIPPLANE2 !== SH && (LH.CLIPPLANE2 = SH, AH = !0), LH.CLIPPLANE3 !== hH && (LH.CLIPPLANE3 = hH, AH = !0), LH.CLIPPLANE4 !== tH && (LH.CLIPPLANE4 = tH, AH = !0), LH.CLIPPLANE5 !== zH && (LH.CLIPPLANE5 = zH, AH = !0), LH.CLIPPLANE6 !== CH && (LH.CLIPPLANE6 = CH, AH = !0), AH
    }

    function zH(HH, BH, LH) {
      let AH = BH.clipPlane ?? LH.clipPlane;
      CH(HH, "vClipPlane", AH), AH = BH.clipPlane2 ?? LH.clipPlane2, CH(HH, "vClipPlane2", AH), AH = BH.clipPlane3 ?? LH.clipPlane3, CH(HH, "vClipPlane3", AH), AH = BH.clipPlane4 ?? LH.clipPlane4, CH(HH, "vClipPlane4", AH), AH = BH.clipPlane5 ?? LH.clipPlane5, CH(HH, "vClipPlane5", AH), AH = BH.clipPlane6 ?? LH.clipPlane6, CH(HH, "vClipPlane6", AH)
    }

    function CH(HH, BH, LH) {
      if (LH) {
        const SH = AH.d.yN()?.floatingOriginOffset || rH.o.ZeroReadOnly;
        HH.setFloat4(BH, LH.normal.x, LH.normal.y, LH.normal.z, LH.d + rH.o.Dot(LH.normal, SH))
      }
    }
  },
  41636: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(HH, BH) {
        this._defines[HH] || (HH < this._currentRank && (this._currentRank = HH), HH > this._maxRank && (this._maxRank = HH), this._defines[HH] = new Array), this._defines[HH].push(BH)
      }
      addCPUSkinningFallback(HH, BH) {
        this._mesh = BH, HH < this._currentRank && (this._currentRank = HH), HH > this._maxRank && (this._maxRank = HH)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(HH, BH) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, HH = HH.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), BH._bonesComputationForcedToCPU = !0;
          const LH = this._mesh.yN();
          for (let HH = 0; HH < LH.meshes.length; HH++) {
            const AH = LH.meshes[HH];
            if (AH.material) {
              if (AH.computeBonesUsingShaders && 0 !== AH.numBoneInfluencers)
                if (AH.material.getEffect() === BH) AH.computeBonesUsingShaders = !1;
                else if (AH.jU)
                for (const HH of AH.jU) {
                  if (HH.effect === BH) {
                    AH.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && AH.computeBonesUsingShaders && AH.numBoneInfluencers > 0 && (AH.computeBonesUsingShaders = !1)
          }
        } else {
          const BH = this._defines[this._currentRank];
          if (BH)
            for (let LH = 0; LH < BH.length; LH++) HH = HH.replace("#define " + BH[LH], "");
          this._currentRank++
        }
        return HH
      }
    }
  },
  41573: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => xH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41387),
      hH = LH(37997),
      tH = LH(37989),
      zH = LH(41578),
      CH = LH(41416),
      EH = LH(39595),
      XH = LH(38619),
      GH = LH(41609),
      YH = LH(41319);
    let uH = (() => {
      var HH;
      let BH, LH, SH, hH, tH, zH, CH, EH, XH, GH, uH, QH, WH = [];
      return HH = class {
        constructor() {
          this._func = (0, AH.k)(this, WH), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(HH) {
          this._func = HH
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(HH) {
          this._backFunc = HH
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(HH) {
          this._funcRef = HH
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(HH) {
          this._funcMask = HH
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(HH) {
          this._opStencilFail = HH
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(HH) {
          this._opDepthFail = HH
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(HH) {
          this._opStencilDepthPass = HH
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(HH) {
          this._backOpStencilFail = HH
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(HH) {
          this._backOpDepthFail = HH
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(HH) {
          this._backOpStencilDepthPass = HH
        }
        get mask() {
          return this._mask
        }
        set mask(HH) {
          this._mask = HH
        }
        get enabled() {
          return this._enabled
        }
        set enabled(HH) {
          this._enabled = HH
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(HH) {
          YH.c.Clone((() => HH), this)
        }
        serialize() {
          return YH.c.Serialize(this)
        }
        parse(HH, BH, LH) {
          YH.c.Parse((() => this), HH, BH, LH)
        }
      }, (() => {
        const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: HH => "func" in HH,
            get: HH => HH.func
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, LH, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: HH => "backFunc" in HH,
            get: HH => HH.backFunc
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, SH, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: HH => "funcRef" in HH,
            get: HH => HH.funcRef
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, hH, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "funcMask" in HH,
            get: HH => HH.funcMask
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, tH, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "opStencilFail" in HH,
            get: HH => HH.opStencilFail
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, zH, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "opDepthFail" in HH,
            get: HH => HH.opDepthFail
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, CH, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: HH => "opStencilDepthPass" in HH,
            get: HH => HH.opStencilDepthPass
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, EH, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "backOpStencilFail" in HH,
            get: HH => HH.backOpStencilFail
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, XH, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "backOpDepthFail" in HH,
            get: HH => HH.backOpDepthFail
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, GH, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: HH => "backOpStencilDepthPass" in HH,
            get: HH => HH.backOpStencilDepthPass
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, uH, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: HH => "mask" in HH,
            get: HH => HH.mask
          },
          metadata: YH
        }, null, WH), (0, AH.g)(HH, null, QH, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "enabled" in HH,
            get: HH => HH.enabled
          },
          metadata: YH
        }, null, WH), YH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YH
        })
      })(), HH
    })();
    var QH = LH(41618),
      WH = LH(41202),
      MH = LH(41169);
    let xH = (() => {
      var HH;
      let BH, LH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH, qH, gH, NH, RH, jH, nH, FH, DH, wH, ZH = [],
        dH = [],
        aH = [],
        sH = [],
        JH = [],
        iH = [],
        pH = [],
        yH = [],
        HB = [],
        BB = [],
        LB = [],
        AB = [],
        rB = [],
        SB = [],
        hB = [],
        tB = [],
        zB = [],
        CB = [],
        EB = [],
        XB = [],
        GB = [],
        YB = [],
        uB = [],
        QB = [],
        WB = [],
        MB = [],
        xB = [],
        vB = [],
        PB = [],
        TB = [],
        UB = [],
        VB = [],
        OB = [],
        bB = [],
        kB = [],
        mB = [],
        oB = [],
        IB = [],
        fB = [],
        lB = [],
        KB = [],
        cB = [],
        eB = [],
        qB = [],
        gB = [],
        NB = [],
        RB = [],
        jB = [],
        nB = [],
        FB = [],
        DB = [];
      return HH = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(BH) {
          this._useVertexPulling !== BH && (this._useVertexPulling = BH, this.dLH(HH.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(HH) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(BH) {
          if (this._alpha === BH) return;
          const LH = this._alpha;
          this._alpha = BH, 1 !== LH && 1 !== BH || this.dLH(HH.MiscDirtyFlag + HH.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(BH) {
          this._backFaceCulling !== BH && (this._backFaceCulling = BH, this.dLH(HH.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(BH) {
          const LH = Math.max(0, Math.min(0 | BH, 4));
          this._textureRepetitionMode !== LH && (this._textureRepetitionMode = LH, this.dLH(HH.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(BH) {
          this._cullBackFaces !== BH && (this._cullBackFaces = BH, this.dLH(HH.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(HH) {
          this._blockDirtyMechanism !== HH && (this._blockDirtyMechanism = HH, HH || this.markDirty())
        }
        atomicMaterialsUpdate(HH) {
          this.blockDirtyMechanism = !0;
          try {
            HH(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(HH) {
          this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new hH.d), this._onBindObservable
        }
        set onBind(HH) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(HH)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new hH.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new hH.d), this._onEffectCreatedObservable
        }
        set alphaMode(HH) {
          this._alphaMode[0] = HH
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[LH] !== BH && (this._alphaMode[LH] = BH, this.dLH(HH.TextureDirtyFlag))
        }
        set needDepthPrePass(HH) {
          this._needDepthPrePass !== HH && (this._needDepthPrePass = HH, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(BH) {
          this._fogEnabled !== BH && (this._fogEnabled = BH, this.dLH(HH.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case HH.WireFrameFillMode:
            case HH.LineListDrawMode:
            case HH.LineLoopDrawMode:
            case HH.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(BH) {
          this.fillMode = BH ? HH.WireFrameFillMode : HH.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case HH.PointFillMode:
            case HH.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(BH) {
          this.fillMode = BH ? HH.PointFillMode : HH.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(BH) {
          this._fillMode !== BH && (this._fillMode = BH, this.dLH(HH.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(HH) {
          const BH = this.yN().Iu().getCaps().fragmentDepthSupported;
          HH && !BH && EH.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = HH && BH, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(HH) {
          this._isVertexOutputInvariant !== HH && (this._isVertexOutputInvariant = HH, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(HH) {
          this._drawWrapper = HH
        }
        constructor(BH, LH, rH) {
          let zH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, AH.k)(this, ZH), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, AH.k)(this, dH, void 0), this.uniqueId = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, void 0)), this._loadedUniqueId = (0, AH.k)(this, JH), this.name = (0, AH.k)(this, iH, void 0), this.metadata = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, null)), this._internalMetadata = (0, AH.k)(this, HB), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, AH.k)(this, BB, !1), this.checkReadyOnlyOnce = ((0, AH.k)(this, LB), (0, AH.k)(this, AB, !1)), this.state = ((0, AH.k)(this, rB), (0, AH.k)(this, SB, "")), this._alpha = ((0, AH.k)(this, hB), (0, AH.k)(this, tB, 1)), this.inspectableCustomProperties = (0, AH.k)(this, zB), this._backFaceCulling = (0, AH.k)(this, CB, !0), this._textureRepetitionMode = ((0, AH.k)(this, EB), (0, AH.k)(this, XB, 0)), this.textureRepetitionHexTilingParams = ((0, AH.k)(this, GB), (0, AH.k)(this, YB, [1, .6, 7, .5])), this._cullBackFaces = ((0, AH.k)(this, uB), (0, AH.k)(this, QB, !0)), this._blockDirtyMechanism = ((0, AH.k)(this, WB), !1), this.sideOrientation = (0, AH.k)(this, MB, null), this.onCompiled = ((0, AH.k)(this, xB), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.uR = new hH.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, AH.k)(this, vB, [2]), this._needDepthPrePass = ((0, AH.k)(this, PB), (0, AH.k)(this, TB, !1)), this.disableDepthWrite = ((0, AH.k)(this, UB), (0, AH.k)(this, VB, !1)), this.disableColorWrite = ((0, AH.k)(this, OB), (0, AH.k)(this, bB, !1)), this.forceDepthWrite = ((0, AH.k)(this, kB), (0, AH.k)(this, mB, !1)), this.depthFunction = ((0, AH.k)(this, oB), (0, AH.k)(this, IB, 0)), this.separateCullingPass = ((0, AH.k)(this, fB), (0, AH.k)(this, lB, !1)), this._fogEnabled = ((0, AH.k)(this, KB), (0, AH.k)(this, cB, !0)), this.pointSize = ((0, AH.k)(this, eB), (0, AH.k)(this, qB, 1)), this.zOffset = ((0, AH.k)(this, gB), (0, AH.k)(this, NB, 0)), this.zOffsetUnits = ((0, AH.k)(this, RB), (0, AH.k)(this, jB, 0)), this.clipPlane = (0, AH.k)(this, nB), this.stencil = new uH, this._isVertexOutputInvariant = (0, AH.k)(this, FB, HH.ForceVertexOutputInvariant), this._materialContext = (0, AH.k)(this, DB), this._useUBO = !1, this._fillMode = HH.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = BH;
          const EH = LH || tH.d.LastCreatedScene;
          EH && (this._scene = EH, this._dirtyCallbacks = {}, this._forceGLSL = zH, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = BH || SH.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Iu().createMaterialContext(), this._drawWrapper = new GH.e(this._scene.Iu(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new CH.c(this._scene.Iu(), void 0, void 0, BH), this._useUBO = this.yN().Iu().supportsUniformBuffers, this._createUniformBuffer(), rH || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), HH.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const HH = this.yN().Iu();
          this._uniformBuffer?.dispose(), HH.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new CH.c(HH, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new CH.c(this._scene.Iu(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(HH) {
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
        isReady(HH, BH) {
          return !0
        }
        isReadyForSubMesh(HH, BH, LH) {
          const AH = BH.materialDefines;
          return !!AH && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = AH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        yN() {
          return this._scene
        }
        _getEffectiveOrientation(HH) {
          return null !== this.sideOrientation ? this.sideOrientation : HH.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(HH) {
          this._transparencyMode = HH
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === HH.MATERIAL_ALPHABLEND || this._transparencyMode === HH.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === HH.MATERIAL_ALPHATEST || this._transparencyMode === HH.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === HH.MATERIAL_OPAQUE || this._transparencyMode === HH.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(HH) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : HH.visibility < 1 || !this._disableAlphaBlending && (HH.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(HH) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(HH) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const LH = this.yN().meshes;
          for (const HH of LH)
            if (HH.jU)
              for (const LH of HH.jU)
                if (LH.eu() === this)
                  for (const HH of LH._drawWrappers) HH && this._materialContext === HH.materialContext && (HH._wasPreviouslyReady = !1, HH._wasPreviouslyUsingInstances = null, HH._forceRebindOnNextCall = BH);
          BH && this.dLH(HH.AllDirtyFlag)
        }
        _preBind(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const AH = this._scene.Iu(),
            rH = (null == LH ? this.sideOrientation : LH) === HH.ClockWiseSideOrientation,
            SH = BH || this._getDrawWrapper();
          return (0, WH.b)(SH) && SH.materialContext && (SH.materialContext.useVertexPulling = this.useVertexPulling), AH.enableEffect(SH), AH.setState(this.backFaceCulling, this.zOffset, !1, rH, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), rH
        }
        bind(HH, BH) {}
        buildUniformLayout() {
          const HH = this._uniformBuffer;
          this._eventInfo.ubo = HH, this._callbackPluginEventGeneric(8, this._eventInfo), HH.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(HH, BH, LH) {
          const AH = LH._drawWrapper;
          this._eventInfo.subMesh = LH, this._callbackPluginEventBindForSubMesh(this._eventInfo), AH._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(HH) {}
        bindView(HH) {
          this._useUBO ? this._needToBindSceneUbo = !0 : HH.setMatrix("view", this.yN().getViewMatrix())
        }
        bindViewProjection(HH) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (HH.setMatrix("viewProjection", this.yN().getTransformMatrix()), HH.setMatrix("projection", this.yN().getProjectionMatrix()), HH.setMatrix("inverseProjection", this.yN().getInverseProjectionMatrix()))
        }
        bindEyePosition(HH, BH) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(HH, BH)
        }
        _afterBind(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && BH && (this._needToBindSceneUbo = !1, (0, QH.t)(BH, this.yN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = HH ? HH.visibility : 1, this._onBindObservable && HH && this._onBindObservable.notifyObservers(HH), this.disableDepthWrite) {
            const HH = this._scene.Iu();
            this._cachedDepthWriteState = HH.getDepthWrite(), HH.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const HH = this._scene.Iu();
            this._cachedColorWriteState = HH.getColorWrite(), HH.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const HH = this._scene.Iu();
            this._cachedDepthFunctionState = HH.getDepthFunction() || 0, HH.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Iu().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Iu().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Iu().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(HH) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = HH, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(HH) {
          return null
        }
        _clonePlugins(BH, LH) {
          const AH = {};
          if (this._serializePlugins(AH), HH._ParsePlugins(AH, BH, this._scene, LH), this.pluginManager)
            for (const HH of this.pluginManager._plugins) {
              const LH = BH.pluginManager.getPlugin(HH.name);
              LH && HH.copyTo(LH)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const HH = [];
            for (const BH in this.meshMap) {
              const LH = this.meshMap[BH];
              LH && HH.push(LH)
            }
            return HH
          }
          return this._scene.meshes.filter((HH => HH.material === this))
        }
        forceCompilation(HH, BH, LH, AH) {
          const rH = {
              clipPlane: !1,
              useInstances: !1,
              ...LH
            },
            SH = this.yN(),
            hH = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const tH = () => {
            if (!this._scene || !this._scene.Iu()) return;
            const LH = SH.clipPlane;
            if (rH.clipPlane && (SH.clipPlane = new XH.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let LH = !0,
                SH = null;
              if (HH.jU) {
                const BH = new zH.d(0, 0, 0, 0, 0, HH, void 0, !1, !1);
                BH.materialDefines && (BH.materialDefines._renderId = -1), this.isReadyForSubMesh(HH, BH, rH.useInstances) || (BH.effect && BH.effect.getCompilationError() && BH.effect.allFallbacksProcessed() ? SH = BH.effect.getCompilationError() : (LH = !1, setTimeout(tH, 16)))
              }
              LH && (this.allowShaderHotSwapping = hH, SH && AH && AH(SH), BH && BH(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = hH, BH && BH(this)) : setTimeout(tH, 16);
            rH.clipPlane && (SH.clipPlane = LH)
          };
          tH()
        }
        async forceCompilationAsync(HH, BH) {
          return await new Promise(((LH, AH) => {
            this.forceCompilation(HH, (() => {
              LH()
            }), BH, (HH => {
              AH(HH)
            }))
          }))
        }
        dLH(BH) {
          this.yN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (HH._DirtyCallbackArray.length = 0, BH & HH.ImageProcessingDirtyFlag && HH._DirtyCallbackArray.push(HH._ImageProcessingDirtyCallBack), BH & HH.TextureDirtyFlag && HH._DirtyCallbackArray.push(HH._TextureDirtyCallBack), BH & HH.LightDirtyFlag && HH._DirtyCallbackArray.push(HH._LightsDirtyCallBack), BH & HH.FresnelDirtyFlag && HH._DirtyCallbackArray.push(HH._FresnelDirtyCallBack), BH & HH.AttributesDirtyFlag && HH._DirtyCallbackArray.push(HH._AttributeDirtyCallBack), BH & HH.MiscDirtyFlag && HH._DirtyCallbackArray.push(HH._MiscDirtyCallBack), BH & HH.PrePassDirtyFlag && HH._DirtyCallbackArray.push(HH._PrePassDirtyCallBack), HH._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(HH._RunDirtyCallBacks), this.yN().resetCachedMaterial())
        }
        resetDrawCache() {
          const HH = this.yN().meshes;
          for (const BH of HH)
            if (BH.jU)
              for (const HH of BH.jU) HH.eu() === this && HH.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(HH) {
          const BH = this.yN();
          if (BH.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const LH = BH.meshes;
          for (const AH of LH)
            if (AH.jU)
              for (const LH of AH.jU) {
                if ((LH.eu() || (BH._hasDefaultMaterial ? BH.defaultMaterial : null)) === this)
                  for (const BH of LH._drawWrappers) BH && BH.defines && BH.defines.markAllAsDirty && this._materialContext === BH.materialContext && HH(BH.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.yN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const HH = this.yN().enablePrePassRenderer();
          HH && HH.dLH()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(HH._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(HH._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(HH._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(HH._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(HH._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(HH._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(HH._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(HH._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(HH._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(HH._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const HH = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.uR.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(HH)
            }))
          }
        }
        setPrePassRenderer(HH) {
          return !1
        }
        dispose(HH, BH, LH) {
          const AH = this.yN();
          if (AH.stopAnimation(this), AH.freeProcessedMaterials(), AH.removeMaterial(this), this._eventInfo.forceDisposeTextures = BH, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const HH = this._parentContainer.materials.indexOf(this);
            HH > -1 && this._parentContainer.materials.splice(HH, 1), this._parentContainer = null
          }
          if (!0 !== LH)
            if (this.meshMap)
              for (const rH in this.meshMap) {
                const HH = this.meshMap[rH];
                this._disposeMeshResources(HH)
              } else {
                const HH = AH.meshes;
                for (const BH of HH) this._disposeMeshResources(BH)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.uR.notifyObservers(this), this.uR.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(HH) {
          if (!HH) return;
          const BH = HH.geometry,
            LH = HH._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (HH.jU && LH)
              for (const AH of HH.jU) {
                const HH = AH._drawWrappers;
                for (let rH = 0; rH < HH.length; rH++) {
                  const SH = HH[rH]?.effect;
                  if (!SH) continue;
                  LH[rH] === this && (BH?._releaseVertexArrayObject(SH), AH._removeDrawWrapper(rH, !0, !0))
                }
              }
          } else BH?._releaseVertexArrayObject(this._drawWrapper.effect);
          HH.material !== this || HH.XSH || (HH.material = null)
        }
        serialize() {
          const HH = YH.c.Serialize(this);
          return HH.stencil = this.stencil.serialize(), HH.uniqueId = this.uniqueId, this._serializePlugins(HH), HH
        }
        _serializePlugins(HH) {
          if (HH.plugins = {}, this.pluginManager)
            for (const BH of this.pluginManager._plugins) BH.doNotSerialize || (HH.plugins[BH.getClassName()] = BH.serialize())
        }
        static ParseAlphaMode(HH, BH) {
          void 0 !== HH._alphaMode ? BH._alphaMode = Array.isArray(HH._alphaMode) ? [...HH._alphaMode] : [HH._alphaMode] : void 0 !== HH.alphaMode ? BH._alphaMode = Array.isArray(HH.alphaMode) ? [...HH.alphaMode] : [HH.alphaMode] : BH._alphaMode = [2]
        }
        static Parse(BH, LH, AH) {
          if (BH.customType) {
            if ("BABYLON.PBRMaterial" === BH.customType && BH.overloadedAlbedo && (BH.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return EH.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else BH.customType = "BABYLON.StandardMaterial";
          const rH = SH.i.Instantiate(BH.customType).Parse(BH, LH, AH);
          return rH._loadedUniqueId = BH.uniqueId, HH.ParseAlphaMode(BH, rH), rH
        }
        static _ParsePlugins(HH, BH, LH, AH) {
          if (HH.plugins)
            for (const rH in HH.plugins) {
              const hH = HH.plugins[rH];
              let tH = BH.pluginManager?.getPlugin(hH.name);
              if (!tH) {
                const HH = SH.i.Instantiate("BABYLON." + rH);
                HH && (tH = new HH(BH))
              }
              tH?.parse(hH, LH, AH)
            }
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, rH.H)()], LH = [(0, rH.H)()], MH = [(0, rH.H)()], xH = [(0, rH.H)()], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)("alpha")], VH = [(0, rH.H)("backFaceCulling")], OH = [(0, rH.H)("textureRepetitionMode")], bH = [(0, rH.H)("textureRepetitionHexTilingParams")], kH = [(0, rH.H)("cullBackFaces")], mH = [(0, rH.H)()], oH = [(0, rH.H)()], IH = [(0, rH.H)()], fH = [(0, rH.H)()], lH = [(0, rH.H)()], KH = [(0, rH.H)()], cH = [(0, rH.H)()], eH = [(0, rH.H)()], qH = [(0, rH.H)("fogEnabled")], gH = [(0, rH.H)()], NH = [(0, rH.H)()], RH = [(0, rH.H)()], jH = [(0, rH.H)()], nH = [(0, rH.H)()], FH = [(0, rH.H)()], DH = [(0, rH.H)()], wH = [(0, rH.H)()], (0, AH.g)(HH, null, jH, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: HH => "pointsCloud" in HH,
            get: HH => HH.pointsCloud
          },
          metadata: SH
        }, null, ZH), (0, AH.g)(HH, null, nH, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "fillMode" in HH,
            get: HH => HH.fillMode
          },
          metadata: SH
        }, null, ZH), (0, AH.g)(HH, null, FH, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: HH => "useLogarithmicDepth" in HH,
            get: HH => HH.useLogarithmicDepth
          },
          metadata: SH
        }, null, ZH), (0, AH.g)(HH, null, wH, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "transparencyMode" in HH,
            get: HH => HH.transparencyMode
          },
          metadata: SH
        }, null, ZH), (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: HH => "id" in HH,
            get: HH => HH.id,
            set: (HH, BH) => {
              HH.id = BH
            }
          },
          metadata: SH
        }, dH, aH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: HH => "uniqueId" in HH,
            get: HH => HH.uniqueId,
            set: (HH, BH) => {
              HH.uniqueId = BH
            }
          },
          metadata: SH
        }, sH, JH), (0, AH.g)(null, null, MH, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: HH => "name" in HH,
            get: HH => HH.name,
            set: (HH, BH) => {
              HH.name = BH
            }
          },
          metadata: SH
        }, iH, pH), (0, AH.g)(null, null, xH, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: HH => "metadata" in HH,
            get: HH => HH.metadata,
            set: (HH, BH) => {
              HH.metadata = BH
            }
          },
          metadata: SH
        }, yH, HB), (0, AH.g)(null, null, vH, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: HH => "checkReadyOnEveryCall" in HH,
            get: HH => HH.checkReadyOnEveryCall,
            set: (HH, BH) => {
              HH.checkReadyOnEveryCall = BH
            }
          },
          metadata: SH
        }, BB, LB), (0, AH.g)(null, null, PH, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: HH => "checkReadyOnlyOnce" in HH,
            get: HH => HH.checkReadyOnlyOnce,
            set: (HH, BH) => {
              HH.checkReadyOnlyOnce = BH
            }
          },
          metadata: SH
        }, AB, rB), (0, AH.g)(null, null, TH, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: HH => "state" in HH,
            get: HH => HH.state,
            set: (HH, BH) => {
              HH.state = BH
            }
          },
          metadata: SH
        }, SB, hB), (0, AH.g)(null, null, UH, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "_alpha" in HH,
            get: HH => HH._alpha,
            set: (HH, BH) => {
              HH._alpha = BH
            }
          },
          metadata: SH
        }, tB, zB), (0, AH.g)(null, null, VH, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: HH => "_backFaceCulling" in HH,
            get: HH => HH._backFaceCulling,
            set: (HH, BH) => {
              HH._backFaceCulling = BH
            }
          },
          metadata: SH
        }, CB, EB), (0, AH.g)(null, null, OH, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_textureRepetitionMode" in HH,
            get: HH => HH._textureRepetitionMode,
            set: (HH, BH) => {
              HH._textureRepetitionMode = BH
            }
          },
          metadata: SH
        }, XB, GB), (0, AH.g)(null, null, bH, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: HH => "textureRepetitionHexTilingParams" in HH,
            get: HH => HH.textureRepetitionHexTilingParams,
            set: (HH, BH) => {
              HH.textureRepetitionHexTilingParams = BH
            }
          },
          metadata: SH
        }, YB, uB), (0, AH.g)(null, null, kH, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: HH => "_cullBackFaces" in HH,
            get: HH => HH._cullBackFaces,
            set: (HH, BH) => {
              HH._cullBackFaces = BH
            }
          },
          metadata: SH
        }, QB, WB), (0, AH.g)(null, null, mH, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: HH => "sideOrientation" in HH,
            get: HH => HH.sideOrientation,
            set: (HH, BH) => {
              HH.sideOrientation = BH
            }
          },
          metadata: SH
        }, MB, xB), (0, AH.g)(null, null, oH, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_alphaMode" in HH,
            get: HH => HH._alphaMode,
            set: (HH, BH) => {
              HH._alphaMode = BH
            }
          },
          metadata: SH
        }, vB, PB), (0, AH.g)(null, null, IH, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: HH => "_needDepthPrePass" in HH,
            get: HH => HH._needDepthPrePass,
            set: (HH, BH) => {
              HH._needDepthPrePass = BH
            }
          },
          metadata: SH
        }, TB, UB), (0, AH.g)(null, null, fH, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: HH => "disableDepthWrite" in HH,
            get: HH => HH.disableDepthWrite,
            set: (HH, BH) => {
              HH.disableDepthWrite = BH
            }
          },
          metadata: SH
        }, VB, OB), (0, AH.g)(null, null, lH, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: HH => "disableColorWrite" in HH,
            get: HH => HH.disableColorWrite,
            set: (HH, BH) => {
              HH.disableColorWrite = BH
            }
          },
          metadata: SH
        }, bB, kB), (0, AH.g)(null, null, KH, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: HH => "forceDepthWrite" in HH,
            get: HH => HH.forceDepthWrite,
            set: (HH, BH) => {
              HH.forceDepthWrite = BH
            }
          },
          metadata: SH
        }, mB, oB), (0, AH.g)(null, null, cH, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: HH => "depthFunction" in HH,
            get: HH => HH.depthFunction,
            set: (HH, BH) => {
              HH.depthFunction = BH
            }
          },
          metadata: SH
        }, IB, fB), (0, AH.g)(null, null, eH, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: HH => "separateCullingPass" in HH,
            get: HH => HH.separateCullingPass,
            set: (HH, BH) => {
              HH.separateCullingPass = BH
            }
          },
          metadata: SH
        }, lB, KB), (0, AH.g)(null, null, qH, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "_fogEnabled" in HH,
            get: HH => HH._fogEnabled,
            set: (HH, BH) => {
              HH._fogEnabled = BH
            }
          },
          metadata: SH
        }, cB, eB), (0, AH.g)(null, null, gH, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: HH => "pointSize" in HH,
            get: HH => HH.pointSize,
            set: (HH, BH) => {
              HH.pointSize = BH
            }
          },
          metadata: SH
        }, qB, gB), (0, AH.g)(null, null, NH, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: HH => "zOffset" in HH,
            get: HH => HH.zOffset,
            set: (HH, BH) => {
              HH.zOffset = BH
            }
          },
          metadata: SH
        }, NB, RB), (0, AH.g)(null, null, RH, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: HH => "zOffsetUnits" in HH,
            get: HH => HH.zOffsetUnits,
            set: (HH, BH) => {
              HH.zOffsetUnits = BH
            }
          },
          metadata: SH
        }, jB, nB), (0, AH.g)(null, null, DH, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: HH => "_isVertexOutputInvariant" in HH,
            get: HH => HH._isVertexOutputInvariant,
            set: (HH, BH) => {
              HH._isVertexOutputInvariant = BH
            }
          },
          metadata: SH
        }, FB, DB), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH.TriangleFillMode = 0, HH.WireFrameFillMode = 1, HH.PointFillMode = 2, HH.PointListDrawMode = 3, HH.LineListDrawMode = 4, HH.LineLoopDrawMode = 5, HH.LineStripDrawMode = 6, HH.TriangleStripDrawMode = 7, HH.TriangleFanDrawMode = 8, HH.ClockWiseSideOrientation = 0, HH.CounterClockWiseSideOrientation = 1, HH.ImageProcessingDirtyFlag = 64, HH.TextureDirtyFlag = 1, HH.LightDirtyFlag = 2, HH.FresnelDirtyFlag = 4, HH.AttributesDirtyFlag = 8, HH.MiscDirtyFlag = 16, HH.PrePassDirtyFlag = 32, HH.AllDirtyFlag = 127, HH.MATERIAL_OPAQUE = 0, HH.MATERIAL_ALPHATEST = 1, HH.MATERIAL_ALPHABLEND = 2, HH.MATERIAL_ALPHATESTANDBLEND = 3, HH.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, HH.MATERIAL_NORMALBLENDMETHOD_RNM = 1, HH.LIGHTFALLOFF_PHYSICAL = 0, HH.LIGHTFALLOFF_GLTF = 1, HH.LIGHTFALLOFF_STANDARD = 2, HH.OnEventObservable = new hH.d, HH.ForceVertexOutputInvariant = !1, HH._AllDirtyCallBack = HH => HH.markAllAsDirty(), HH._ImageProcessingDirtyCallBack = HH => HH.markAsImageProcessingDirty(), HH._TextureDirtyCallBack = HH => HH.markAsTexturesDirty(), HH._FresnelDirtyCallBack = HH => HH.markAsFresnelDirty(), HH._MiscDirtyCallBack = HH => HH.markAsMiscDirty(), HH._PrePassDirtyCallBack = HH => HH.markAsPrePassDirty(), HH._LightsDirtyCallBack = HH => HH.markAsLightDirty(), HH._AttributeDirtyCallBack = HH => HH.markAsAttributesDirty(), HH._FresnelAndMiscDirtyCallBack = BH => {
        HH._FresnelDirtyCallBack(BH), HH._MiscDirtyCallBack(BH)
      }, HH._TextureAndMiscDirtyCallBack = BH => {
        HH._TextureDirtyCallBack(BH), HH._MiscDirtyCallBack(BH)
      }, HH._DirtyCallbackArray = [], HH._RunDirtyCallBacks = BH => {
        for (const LH of HH._DirtyCallbackArray) LH(BH)
      }, HH
    })();
    Object.getOwnPropertyDescriptor(xH.prototype, "pluginManager") || Object.defineProperty(xH.prototype, "pluginManager", (0, MH.e)("Material", "pluginManager"))
  },
  41632: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(41184);
    class rH {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(HH) {
        this._DiffuseTextureEnabled !== HH && (this._DiffuseTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(HH) {
        this._BaseWeightTextureEnabled !== HH && (this._BaseWeightTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(HH) {
        this._BaseDiffuseRoughnessTextureEnabled !== HH && (this._BaseDiffuseRoughnessTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(HH) {
        this._DetailTextureEnabled !== HH && (this._DetailTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(HH) {
        this._DecalMapEnabled !== HH && (this._DecalMapEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(HH) {
        this._AmbientTextureEnabled !== HH && (this._AmbientTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(HH) {
        this._OpacityTextureEnabled !== HH && (this._OpacityTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(HH) {
        this._ReflectionTextureEnabled !== HH && (this._ReflectionTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(HH) {
        this._EmissiveTextureEnabled !== HH && (this._EmissiveTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(HH) {
        this._SpecularTextureEnabled !== HH && (this._SpecularTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(HH) {
        this._BumpTextureEnabled !== HH && (this._BumpTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(HH) {
        this._LightmapTextureEnabled !== HH && (this._LightmapTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(HH) {
        this._RefractionTextureEnabled !== HH && (this._RefractionTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(HH) {
        this._ColorGradingTextureEnabled !== HH && (this._ColorGradingTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(HH) {
        this._FresnelEnabled !== HH && (this._FresnelEnabled = HH, AH.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(HH) {
        this._ClearCoatTextureEnabled !== HH && (this._ClearCoatTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(HH) {
        this._ClearCoatBumpTextureEnabled !== HH && (this._ClearCoatBumpTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(HH) {
        this._ClearCoatTintTextureEnabled !== HH && (this._ClearCoatTintTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(HH) {
        this._SheenTextureEnabled !== HH && (this._SheenTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(HH) {
        this._AnisotropicTextureEnabled !== HH && (this._AnisotropicTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(HH) {
        this._ThicknessTextureEnabled !== HH && (this._ThicknessTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(HH) {
        this._RefractionIntensityTextureEnabled !== HH && (this._RefractionIntensityTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(HH) {
        this._TranslucencyIntensityTextureEnabled !== HH && (this._TranslucencyIntensityTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(HH) {
        this._TranslucencyColorTextureEnabled !== HH && (this._TranslucencyColorTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(HH) {
        this._IridescenceTextureEnabled !== HH && (this._IridescenceTextureEnabled = HH, AH.c.MarkAllMaterialsAsDirty(1))
      }
    }
    rH._DiffuseTextureEnabled = !0, rH._BaseWeightTextureEnabled = !0, rH._BaseDiffuseRoughnessTextureEnabled = !0, rH._DetailTextureEnabled = !0, rH._DecalMapEnabled = !0, rH._AmbientTextureEnabled = !0, rH._OpacityTextureEnabled = !0, rH._ReflectionTextureEnabled = !0, rH._EmissiveTextureEnabled = !0, rH._SpecularTextureEnabled = !0, rH._BumpTextureEnabled = !0, rH._LightmapTextureEnabled = !0, rH._RefractionTextureEnabled = !0, rH._ColorGradingTextureEnabled = !0, rH._FresnelEnabled = !0, rH._ClearCoatTextureEnabled = !0, rH._ClearCoatBumpTextureEnabled = !0, rH._ClearCoatTintTextureEnabled = !0, rH._SheenTextureEnabled = !0, rH._AnisotropicTextureEnabled = !0, rH._ThicknessTextureEnabled = !0, rH._RefractionIntensityTextureEnabled = !0, rH._TranslucencyIntensityTextureEnabled = !0, rH._TranslucencyColorTextureEnabled = !0, rH._IridescenceTextureEnabled = !0
  },
  41618: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => DH,
      C: () => TH,
      E: () => mH,
      F: () => oH,
      G: () => YH,
      H: () => GH,
      L: () => nH,
      P: () => qH,
      R: () => cH,
      U: () => KH,
      X: () => vH,
      Z: () => fH,
      _: () => FH,
      ab: () => wH,
      c: () => lH,
      d: () => UH,
      db: () => sH,
      f: () => XH,
      fb: () => dH,
      j: () => MH,
      jb: () => aH,
      kb: () => uH,
      n: () => xH,
      p: () => kH,
      q: () => zH,
      r: () => QH,
      t: () => WH,
      u: () => PH,
      y: () => IH
    });
    var AH = LH(39595),
      rH = LH(37989),
      SH = LH(41472),
      hH = LH(41623),
      tH = LH(41632);

    function zH(HH, BH, LH) {
      if (!HH || HH.LOGARITHMICDEPTH || HH.indexOf && HH.indexOf("LOGARITHMICDEPTH") >= 0) {
        const HH = LH.activeCamera;
        1 === HH.mode && AH.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), BH.setFloat("logarithmicDepthConstant", 2 / (Math.log(HH.maxZ + 1) / Math.LN2))
      }
    }
    const CH = {
        r: 0,
        g: 0,
        b: 0
      },
      EH = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function XH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      LH && HH.fogEnabled && (!BH || BH.applyFog) && 0 !== HH.fogMode && (LH.setFloat4("vFogInfos", HH.fogMode, HH.fogStart, HH.fogEnd, HH.fogDensity), AH ? (HH.fogColor.toLinearSpaceToRef(CH, HH.Iu().useExactSrgbConversions), LH.setColor3("vFogColor", CH)) : LH.setColor3("vFogColor", HH.fogColor))
    }

    function GH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
      const XH = HH.numMaxInfluencers || HH.numInfluencers;
      return XH <= 0 ? 0 : (BH.push("#define MORPHTARGETS"), HH.hasPositions && BH.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), HH.hasNormals && BH.push("#define MORPHTARGETTEXTURE_HASNORMALS"), HH.hasTangents && BH.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), HH.hasUVs && BH.push("#define MORPHTARGETTEXTURE_HASUVS"), HH.hasUV2s && BH.push("#define MORPHTARGETTEXTURE_HASUV2S"), HH.hasColors && BH.push("#define MORPHTARGETTEXTURE_HASCOLORS"), HH.supportsPositions && rH && BH.push("#define MORPHTARGETS_POSITION"), HH.supportsNormals && SH && BH.push("#define MORPHTARGETS_NORMAL"), HH.supportsTangents && hH && BH.push("#define MORPHTARGETS_TANGENT"), HH.supportsUVs && tH && BH.push("#define MORPHTARGETS_UV"), HH.supportsUV2s && zH && BH.push("#define MORPHTARGETS_UV2"), HH.supportsColors && CH && BH.push("#define MORPHTARGETS_COLOR"), BH.push("#define NUM_MORPH_INFLUENCERS " + XH), HH.isUsingTextureForTargets && BH.push("#define MORPHTARGETS_TEXTURE"), EH.NUM_MORPH_INFLUENCERS = XH, EH.NORMAL = SH, EH.TANGENT = hH, EH.UV = tH, EH.UV2 = zH, EH.COLOR = CH, YH(LH, AH, EH, rH), XH)
    }

    function YH(HH, BH, LH) {
      let SH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const hH = LH.NUM_MORPH_INFLUENCERS;
      if (hH > 0 && rH.d.LastCreatedEngine) {
        const tH = rH.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          zH = BH.morphTargetManager;
        if (zH?.isUsingTextureForTargets) return;
        const CH = zH && zH.supportsPositions && SH,
          EH = zH && zH.supportsNormals && LH.NORMAL,
          XH = zH && zH.supportsTangents && LH.TANGENT,
          GH = zH && zH.supportsUVs && LH.UV1,
          YH = zH && zH.supportsUV2s && LH.UV2,
          uH = zH && zH.supportsColors && LH.VERTEXCOLOR;
        for (let LH = 0; LH < hH; LH++) CH && HH.push("position" + LH), EH && HH.push("normal" + LH), XH && HH.push("tangent" + LH), GH && HH.push("uv_" + LH), YH && HH.push("uv2_" + LH), uH && HH.push("color" + LH), HH.length > tH && AH.e.Error("Cannot add more vertex attributes for mesh " + BH.name)
      }
    }

    function uH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      HH.push("world0"), HH.push("world1"), HH.push("world2"), HH.push("world3"), BH && (HH.push("previousWorld0"), HH.push("previousWorld1"), HH.push("previousWorld2"), HH.push("previousWorld3"))
    }

    function QH(HH, BH) {
      const LH = HH.morphTargetManager;
      HH && LH && BH.setFloatArray("morphTargetInfluences", LH.influences)
    }

    function WH(HH, BH) {
      BH.bindToEffect(HH, "Scene")
    }

    function MH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        CH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        EH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        XH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        GH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (HH.texturesEnabled && rH && tH.e.ReflectionTextureEnabled) {
        if (LH.wHH("reflectionMatrix", rH.getReflectionTextureMatrix()), LH.updateFloat2("vReflectionInfos", rH.level * HH.iblIntensity, GH), zH && rH.boundingBoxSize) {
          const HH = rH;
          LH.updateVector3("vReflectionPosition", HH.boundingBoxPosition), LH.updateVector3("vReflectionSize", HH.boundingBoxSize)
        }
        if (SH) {
          const HH = rH.getSize().width;
          LH.updateFloat2("vReflectionFilteringInfo", HH, Math.log2(HH))
        }
        if (EH && !BH.USEIRRADIANCEMAP) {
          const HH = rH.sphericalPolynomial;
          if (BH.USESPHERICALFROMREFLECTIONMAP && HH)
            if (BH.SPHERICAL_HARMONICS) {
              const BH = HH.preScaledHarmonics;
              LH.updateVector3("vSphericalL00", BH.l00), LH.updateVector3("vSphericalL1_1", BH.l1_1), LH.updateVector3("vSphericalL10", BH.l10), LH.updateVector3("vSphericalL11", BH.l11), LH.updateVector3("vSphericalL2_2", BH.l2_2), LH.updateVector3("vSphericalL2_1", BH.l2_1), LH.updateVector3("vSphericalL20", BH.l20), LH.updateVector3("vSphericalL21", BH.l21), LH.updateVector3("vSphericalL22", BH.l22)
            } else LH.updateFloat3("vSphericalX", HH.x.x, HH.x.y, HH.x.z), LH.updateFloat3("vSphericalY", HH.y.x, HH.y.y, HH.y.z), LH.updateFloat3("vSphericalZ", HH.z.x, HH.z.y, HH.z.z), LH.updateFloat3("vSphericalXX_ZZ", HH.xx.x - HH.zz.x, HH.xx.y - HH.zz.y, HH.xx.z - HH.zz.z), LH.updateFloat3("vSphericalYY_ZZ", HH.yy.x - HH.zz.x, HH.yy.y - HH.zz.y, HH.yy.z - HH.zz.z), LH.updateFloat3("vSphericalZZ", HH.zz.x, HH.zz.y, HH.zz.z), LH.updateFloat3("vSphericalXY", HH.xy.x, HH.xy.y, HH.xy.z), LH.updateFloat3("vSphericalYZ", HH.yz.x, HH.yz.y, HH.yz.z), LH.updateFloat3("vSphericalZX", HH.zx.x, HH.zx.y, HH.zx.z)
        } else CH && BH.USEIRRADIANCEMAP && BH.USE_IRRADIANCE_DOMINANT_DIRECTION && rH.irradianceTexture && LH.updateVector3("vReflectionDominantDirection", rH.irradianceTexture._dominantDirection);
        hH && LH.updateFloat3("vReflectionMicrosurfaceInfos", rH.getSize().width, rH.lodGenerationScale, rH.lodGenerationOffset)
      }
      XH && LH.updateColor3("vReflectionColor", AH)
    }

    function xH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (AH && tH.e.ReflectionTextureEnabled) {
        BH.LODBASEDMICROSFURACE ? LH.setTexture("reflectionSampler", AH) : (LH.setTexture("reflectionSampler", AH._lodTextureMid || AH), LH.setTexture("reflectionSamplerLow", AH._lodTextureLow || AH), LH.setTexture("reflectionSamplerHigh", AH._lodTextureHigh || AH)), BH.USEIRRADIANCEMAP && LH.setTexture("irradianceSampler", AH.irradianceTexture);
        const SH = HH.iblCdfGenerator;
        rH && SH && LH.setTexture("icdfSampler", SH.getIcdfTexture())
      }
    }

    function vH(HH, BH, LH) {
      BH._needUVs = !0, BH[LH] = !0, HH.optimizeUVAllocation && HH.getTextureMatrix().isIdentityAs3x2() ? (BH[LH + "DIRECTUV"] = HH.coordinatesIndex + 1, BH["MAINUV" + (HH.coordinatesIndex + 1)] = !0) : BH[LH + "DIRECTUV"] = 0
    }

    function PH(HH, BH, LH) {
      const AH = HH.getTextureMatrix();
      BH.wHH(LH + "Matrix", AH)
    }

    function TH(HH, BH, LH) {
      LH.BAKED_VERTEX_ANIMATION_TEXTURE && LH.INSTANCES && HH.push("bakedVertexAnimationSettingsInstanced")
    }

    function UH(HH, BH, LH) {
      var AH;
      if (BH && HH && (HH.computeBonesUsingShaders && BH._bonesComputationForcedToCPU && (HH.computeBonesUsingShaders = !1), HH.useBones && HH.computeBonesUsingShaders && HH.skeleton)) {
        const rH = HH.skeleton;
        if (rH.isUsingTextureForMatrices && BH.getUniformIndex("boneTextureInfo") > -1) {
          const LH = rH.getTransformMatrixTexture(HH);
          BH.setTexture("boneSampler", LH), BH.setFloat2("boneTextureInfo", rH._textureWidth, rH._textureHeight)
        } else {
          const SH = rH.getTransformMatrices(HH);
          SH && (BH.setMatrices("mBones", SH), LH && HH.yN().prePassRenderer && HH.yN().prePassRenderer.getIndex(2) && (LH.previousBones[HH.uniqueId] || (LH.previousBones[HH.uniqueId] = SH.slice()), BH.setMatrices("mPreviousBones", LH.previousBones[HH.uniqueId]), AH = SH, LH.previousBones[HH.uniqueId].set(AH)))
        }
      }
    }

    function VH(HH, BH, LH, AH, rH) {
      let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      HH._bindLight(BH, LH, AH, rH, SH)
    }
    const OH = 4,
      bH = new WeakMap;

    function kH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const SH = Math.min(BH.lightSources.length, rH);
      for (let hH = 0; hH < SH; hH++) {
        VH(BH.lightSources[hH], hH, HH, LH, "boolean" === typeof AH ? AH : AH.SPECULARTERM, BH.receiveShadows)
      }
    }

    function mH(HH, BH, LH, AH) {
      LH.NUM_BONE_INFLUENCERS > 0 && (AH.addCPUSkinningFallback(0, BH), HH.push("matricesIndices"), HH.push("matricesWeights"), LH.NUM_BONE_INFLUENCERS > 4 && (HH.push("matricesIndicesExtra"), HH.push("matricesWeightsExtra")))
    }

    function oH(HH, BH) {
      (BH.INSTANCES || BH.THIN_INSTANCES) && uH(HH, !!BH.PREPASS_VELOCITY), BH.INSTANCESCOLOR && HH.push("instanceColor")
    }

    function IH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        rH = 0;
      for (let SH = 0; SH < LH && HH["LIGHT" + SH]; SH++) SH > 0 && (rH = AH + SH, BH.addFallback(rH, "LIGHT" + SH)), HH.SHADOWS || (HH["SHADOW" + SH] && BH.addFallback(AH, "SHADOW" + SH), HH["SHADOWPCF" + SH] && BH.addFallback(AH, "SHADOWPCF" + SH), HH["SHADOWPCSS" + SH] && BH.addFallback(AH, "SHADOWPCSS" + SH), HH["SHADOWPOISSON" + SH] && BH.addFallback(AH, "SHADOWPOISSON" + SH), HH["SHADOWESM" + SH] && BH.addFallback(AH, "SHADOWESM" + SH), HH["SHADOWCLOSEESM" + SH] && BH.addFallback(AH, "SHADOWCLOSEESM" + SH));
      return rH
    }

    function fH(HH, BH, LH, AH, rH, SH, hH) {
      let tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        CH = arguments.length > 9 ? arguments[9] : void 0,
        EH = arguments.length > 10 ? arguments[10] : void 0;
      if (hH._areMiscDirty) {
        hH.LOGARITHMICDEPTH = LH, hH.POINTSIZE = AH, hH.FOG = rH && function(HH, BH) {
          return BH.fogEnabled && HH.applyFog && 0 !== BH.fogMode
        }(HH, BH), hH.NONUNIFORMSCALING = HH.nonUniformScaling, hH.ALPHATEST = SH, hH.DECAL_AFTER_DETAIL = tH, hH.USE_VERTEX_PULLING = zH, hH.RIGHT_HANDED = BH.useRightHandedSystem;
        const XH = zH ? CH?.geometry?.getIndexBuffer() : null,
          GH = !!CH && CH.isUnIndexed;
        hH.VERTEX_PULLING_USE_INDEX_BUFFER = !!XH && !GH, hH.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!XH || GH) && XH.is32Bits, hH.VERTEXOUTPUT_INVARIANT = !!EH
      }
    }

    function lH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!HH.lightsEnabled || AH) return !0;
      const rH = BH.lightSources,
        SH = Math.min(rH.length, LH);
      for (let hH = 0; hH < SH; hH++)
        if (!rH[hH].areLightTexturesReady()) return !1;
      return !0
    }

    function KH(HH, BH, LH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!LH._areLightsDirty) return LH._needNormals;
      const tH = SH;
      SH = function(HH, BH) {
        const LH = HH.Iu().getCaps().maxUniformBuffersPerShaderStage;
        if (null == LH) return BH;
        const AH = Math.max(LH - OH, 1);
        return Math.min(BH, AH)
      }(HH, SH);
      let zH = 0;
      const CH = {
        needNormals: LH._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (HH.lightsEnabled && !hH) {
        BH.lightSources.length > SH && SH < tH && function(HH, BH, LH, rH) {
          let SH = bH.get(HH);
          SH || (SH = new Set, bH.set(HH, SH)), SH.has(rH) || (SH.add(rH), AH.e.Warn(`maxSimultaneousLights is ${BH} but this engine supports at most ${LH} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${rH} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${rH+OH} uniform buffers, over the device limit of ${HH.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${LH}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${LH} or less to silence this warning.`))
        }(HH.Iu(), tH, SH, Math.min(BH.lightSources.length, tH));
        for (const AH of BH.lightSources)
          if (eH(HH, BH, AH, zH, LH, rH, CH), zH++, zH === SH) break
      }
      LH.SPECULARTERM = CH.specularEnabled, LH.SHADOWS = CH.shadowEnabled;
      const EH = Math.max(SH, LH.MAXLIGHTCOUNT || 0);
      for (let AH = zH; AH < EH; AH++) void 0 !== LH["LIGHT" + AH] && (LH["LIGHT" + AH] = !1, LH["HEMILIGHT" + AH] = !1, LH["POINTLIGHT" + AH] = !1, LH["DIRLIGHT" + AH] = !1, LH["SPOTLIGHT" + AH] = !1, LH["AREALIGHT" + AH] = !1, LH["CLUSTLIGHT" + AH] = !1, LH["SHADOW" + AH] = !1, LH["SHADOWCSM" + AH] = !1, LH["SHADOWCSMDEBUG" + AH] = !1, LH["SHADOWCSMNUM_CASCADES" + AH] = !1, LH["SHADOWCSMUSESHADOWMAXZ" + AH] = !1, LH["SHADOWCSMNOBLEND" + AH] = !1, LH["SHADOWCSM_RIGHTHANDED" + AH] = !1, LH["SHADOWPCF" + AH] = !1, LH["SHADOWPCSS" + AH] = !1, LH["SHADOWPOISSON" + AH] = !1, LH["SHADOWESM" + AH] = !1, LH["SHADOWCLOSEESM" + AH] = !1, LH["SHADOWCUBE" + AH] = !1, LH["SHADOWLOWQUALITY" + AH] = !1, LH["SHADOWMEDIUMQUALITY" + AH] = !1);
      LH.LIGHTCOUNT = zH, LH.MAXLIGHTCOUNT = SH;
      const XH = HH.Iu().getCaps();
      return void 0 === LH.SHADOWFLOAT && (CH.needRebuild = !0), LH.SHADOWFLOAT = CH.shadowEnabled && (XH.textureFloatRender && XH.textureFloatLinearFiltering || XH.textureHalfFloatRender && XH.textureHalfFloatLinearFiltering), LH.LIGHTMAPEXCLUDED = CH.lightmapMode, CH.needRebuild && LH.rebuild(), CH.needNormals
    }

    function cH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (BH && tH.e.ReflectionTextureEnabled) {
        if (!BH.isReadyOrNotBlocking()) return !1;
        LH._needNormals = !0, LH.REFLECTION = !0, LH.GAMMAREFLECTION = BH.gammaSpace, LH.RGBDREFLECTION = BH.isRGBD, LH.LODINREFLECTIONALPHA = BH.lodLevelInAlpha, LH.LINEARSPECULARREFLECTION = BH.linearSpecularLOD, LH.USEIRRADIANCEMAP = !1, LH.LODBASEDMICROSFURACE = HH.Iu().getCaps().textureLOD;
        const hH = HH.Iu();
        switch (AH && rH > 0 ? (LH.NUM_SAMPLES = "" + rH, hH._features.needTypeSuffixInShaderConstants && (LH.NUM_SAMPLES = LH.NUM_SAMPLES + "u"), LH.REALTIME_FILTERING = !0, HH.iblCdfGenerator && (LH.IBL_CDF_FILTERING = !0)) : LH.REALTIME_FILTERING = !1, LH.INVERTCUBICMAP = 6 === BH.coordinatesMode, LH.REFLECTIONMAP_3D = BH.isCube, LH.REFLECTIONMAP_OPPOSITEZ = LH.REFLECTIONMAP_3D && HH.useRightHandedSystem ? !BH.invertZ : BH.invertZ, LH.REFLECTIONMAP_CUBIC = !1, LH.REFLECTIONMAP_EXPLICIT = !1, LH.REFLECTIONMAP_PLANAR = !1, LH.REFLECTIONMAP_PROJECTION = !1, LH.REFLECTIONMAP_SKYBOX = !1, LH.REFLECTIONMAP_SPHERICAL = !1, LH.REFLECTIONMAP_EQUIRECTANGULAR = !1, LH.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, LH.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, BH.coordinatesMode) {
          case 0:
            LH.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            LH.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            LH.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            LH.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            LH.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            LH.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            LH.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            LH.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            LH.REFLECTIONMAP_CUBIC = !0, LH.USE_LOCAL_REFLECTIONMAP_CUBIC = !!BH.boundingBoxSize
        }
        5 !== BH.coordinatesMode && (BH.irradianceTexture ? (LH.USEIRRADIANCEMAP = !0, LH.USESPHERICALFROMREFLECTIONMAP = !1, LH.USESPHERICALINVERTEX = !1, BH.irradianceTexture._dominantDirection ? LH.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : LH.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : BH.isCube && (LH.USESPHERICALFROMREFLECTIONMAP = !0, LH.USEIRRADIANCEMAP = !1, LH.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, LH.USESPHERICALINVERTEX = SH))
      } else LH.REFLECTION = !1, LH.REFLECTIONMAP_3D = !1, LH.REFLECTIONMAP_SPHERICAL = !1, LH.REFLECTIONMAP_PLANAR = !1, LH.REFLECTIONMAP_CUBIC = !1, LH.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, LH.REFLECTIONMAP_PROJECTION = !1, LH.REFLECTIONMAP_SKYBOX = !1, LH.REFLECTIONMAP_EXPLICIT = !1, LH.REFLECTIONMAP_EQUIRECTANGULAR = !1, LH.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, LH.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, LH.INVERTCUBICMAP = !1, LH.USESPHERICALFROMREFLECTIONMAP = !1, LH.USEIRRADIANCEMAP = !1, LH.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, LH.USESPHERICALINVERTEX = !1, LH.REFLECTIONMAP_OPPOSITEZ = !1, LH.LODINREFLECTIONALPHA = !1, LH.GAMMAREFLECTION = !1, LH.RGBDREFLECTION = !1, LH.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function eH(HH, BH, LH, AH, rH, hH, tH) {
      switch (tH.needNormals = !0, void 0 === rH["LIGHT" + AH] && (tH.needRebuild = !0), rH["LIGHT" + AH] = !0, rH["SPOTLIGHT" + AH] = !1, rH["HEMILIGHT" + AH] = !1, rH["POINTLIGHT" + AH] = !1, rH["DIRLIGHT" + AH] = !1, rH["AREALIGHT" + AH] = !1, rH["CLUSTLIGHT" + AH] = !1, LH.prepareLightSpecificDefines(rH, AH), rH["LIGHT_FALLOFF_PHYSICAL" + AH] = !1, rH["LIGHT_FALLOFF_GLTF" + AH] = !1, rH["LIGHT_FALLOFF_STANDARD" + AH] = !1, LH.falloffType) {
        case SH.e.FALLOFF_GLTF:
          rH["LIGHT_FALLOFF_GLTF" + AH] = !0;
          break;
        case SH.e.FALLOFF_PHYSICAL:
          rH["LIGHT_FALLOFF_PHYSICAL" + AH] = !0;
          break;
        case SH.e.FALLOFF_STANDARD:
          rH["LIGHT_FALLOFF_STANDARD" + AH] = !0
      }
      if (hH && !LH.specular.equalsFloats(0, 0, 0) && (tH.specularEnabled = !0), rH["SHADOW" + AH] = !1, rH["SHADOWCSM" + AH] = !1, rH["SHADOWCSMDEBUG" + AH] = !1, rH["SHADOWCSMNUM_CASCADES" + AH] = !1, rH["SHADOWCSMUSESHADOWMAXZ" + AH] = !1, rH["SHADOWCSMNOBLEND" + AH] = !1, rH["SHADOWCSM_RIGHTHANDED" + AH] = !1, rH["SHADOWPCF" + AH] = !1, rH["SHADOWPCSS" + AH] = !1, rH["SHADOWPOISSON" + AH] = !1, rH["SHADOWESM" + AH] = !1, rH["SHADOWCLOSEESM" + AH] = !1, rH["SHADOWCUBE" + AH] = !1, rH["SHADOWLOWQUALITY" + AH] = !1, rH["SHADOWMEDIUMQUALITY" + AH] = !1, BH && BH.receiveShadows && HH.shadowsEnabled && LH.shadowEnabled) {
        const BH = LH.getShadowGenerator(HH.activeCamera) ?? LH.getShadowGenerator();
        if (BH) {
          const HH = BH.getShadowMap();
          HH && HH.renderList && HH.renderList.length > 0 && (tH.shadowEnabled = !0, BH.prepareDefines(rH, AH))
        }
      }
      LH.lightmapMode != SH.e.LIGHTMAP_DEFAULT ? (tH.lightmapMode = !0, rH["LIGHTMAPEXCLUDED" + AH] = !0, rH["LIGHTMAPNOSPECULAR" + AH] = LH.lightmapMode == SH.e.LIGHTMAP_SHADOWSONLY) : (rH["LIGHTMAPEXCLUDED" + AH] = !1, rH["LIGHTMAPNOSPECULAR" + AH] = !1)
    }

    function qH(HH, BH, LH, AH, rH) {
      let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        zH = function(HH, BH) {
          let LH = !1;
          if (HH.activeCamera) {
            const AH = BH.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              rH = BH.CAMERA_PERSPECTIVE ? 1 : 0,
              SH = 1 === HH.activeCamera.mode ? 1 : 0,
              hH = 0 === HH.activeCamera.mode ? 1 : 0;
            (AH ^ SH || rH ^ hH) && (BH.CAMERA_ORTHOGRAPHIC = 1 === SH, BH.CAMERA_PERSPECTIVE = 1 === hH, LH = !0)
          }
          return LH
        }(HH, AH);
      !1 !== SH && (zH = (0, hH.h)(LH, HH, AH)), AH.DEPTHPREPASS !== !BH.getColorWrite() && (AH.DEPTHPREPASS = !AH.DEPTHPREPASS, zH = !0), AH.INSTANCES !== rH && (AH.INSTANCES = rH, zH = !0), AH.THIN_INSTANCES !== tH && (AH.THIN_INSTANCES = tH, zH = !0), zH && AH.markAsUnprocessed()
    }
    const gH = 40,
      NH = 64,
      RH = new WeakMap,
      jH = new WeakSet;

    function nH(HH, BH, LH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        tH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!BH._areAttributesDirty && BH._needNormals === BH._normals && BH._needUVs === BH._uvs) return !1;
      BH._normals = BH._needNormals, BH._uvs = BH._needUVs, BH.NORMAL = BH._needNormals && HH.isVerticesDataPresent("normal"), BH._needNormals && HH.isVerticesDataPresent("tangent") && (BH.TANGENT = !0);
      for (let AH = 1; AH <= 6; ++AH) BH["UV" + AH] = !!BH._needUVs && HH.isVerticesDataPresent(`uv${1===AH?"":AH}`);
      if (LH) {
        const LH = HH.useVertexColors && HH.isVerticesDataPresent("color");
        BH.VERTEXCOLOR = LH, BH.VERTEXALPHA = HH.hasVertexAlpha && LH && hH
      }
      return HH.isVerticesDataPresent("instanceColor") && (HH.ESH || HH.hasThinInstances) && (BH.INSTANCESCOLOR = !0), rH && function(HH, BH) {
        if (HH.useBones && HH.computeBonesUsingShaders && HH.skeleton) {
          BH.NUM_BONE_INFLUENCERS = HH.numBoneInfluencers;
          const LH = void 0 !== BH.BONETEXTURE;
          if (HH.skeleton.isUsingTextureForMatrices && LH) BH.BONETEXTURE = !0;
          else {
            BH.BonesPerMesh = HH.skeleton.bones.length + 1, BH.BONETEXTURE = !LH && void 0;
            const rH = HH.yN(),
              SH = rH.prePassRenderer;
            if (SH && SH.enabled) {
              const LH = -1 === SH.excludedSkinnedMesh.indexOf(HH);
              BH.BONES_VELOCITY_ENABLED = LH
            }
            const hH = !0 === BH.MULTIVIEW,
              tH = 2 * BH.BonesPerMesh + (hH ? 1 : 0);
            if (RH.get(HH.skeleton) !== tH) {
              RH.set(HH.skeleton, tH);
              const LH = rH.Iu().getCaps().maxVertexUniformVectors;
              if (LH && !jH.has(HH.skeleton)) {
                const rH = 4 * BH.BonesPerMesh,
                  SH = hH ? NH : gH,
                  tH = Math.max(LH - SH, 0);
                (rH > tH || hH && 3 * rH > LH) && (jH.add(HH.skeleton), AH.e.Warn(`Skeleton "${HH.skeleton.name}": ${HH.skeleton.bones.length} bones stored as vertex uniforms use ${rH} of ~${tH} usable uniform vectors${hH?" (multiview)":""} on a device reporting ${LH}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else BH.NUM_BONE_INFLUENCERS = 0, BH.BonesPerMesh = 0, void 0 !== BH.BONETEXTURE && (BH.BONETEXTURE = !1)
      }(HH, BH), SH && function(HH, BH) {
        const LH = HH.morphTargetManager;
        LH ? (BH.MORPHTARGETS_UV = LH.supportsUVs && BH.UV1, BH.MORPHTARGETS_UV2 = LH.supportsUV2s && BH.UV2, BH.MORPHTARGETS_TANGENT = LH.supportsTangents && BH.TANGENT, BH.MORPHTARGETS_NORMAL = LH.supportsNormals && BH.NORMAL, BH.MORPHTARGETS_POSITION = LH.supportsPositions, BH.MORPHTARGETS_COLOR = LH.supportsColors, BH.MORPHTARGETTEXTURE_HASUVS = LH.hasUVs, BH.MORPHTARGETTEXTURE_HASUV2S = LH.hasUV2s, BH.MORPHTARGETTEXTURE_HASTANGENTS = LH.hasTangents, BH.MORPHTARGETTEXTURE_HASNORMALS = LH.hasNormals, BH.MORPHTARGETTEXTURE_HASPOSITIONS = LH.hasPositions, BH.MORPHTARGETTEXTURE_HASCOLORS = LH.hasColors, BH.NUM_MORPH_INFLUENCERS = LH.numMaxInfluencers || LH.numInfluencers, BH.MORPHTARGETS = BH.NUM_MORPH_INFLUENCERS > 0, BH.MORPHTARGETS_TEXTURE = LH.isUsingTextureForTargets) : (BH.MORPHTARGETS_UV = !1, BH.MORPHTARGETS_UV2 = !1, BH.MORPHTARGETS_TANGENT = !1, BH.MORPHTARGETS_NORMAL = !1, BH.MORPHTARGETS_POSITION = !1, BH.MORPHTARGETS_COLOR = !1, BH.MORPHTARGETTEXTURE_HASUVS = !1, BH.MORPHTARGETTEXTURE_HASUV2S = !1, BH.MORPHTARGETTEXTURE_HASTANGENTS = !1, BH.MORPHTARGETTEXTURE_HASNORMALS = !1, BH.MORPHTARGETTEXTURE_HASPOSITIONS = !1, BH.MORPHTARGETTEXTURE_HAS_COLORS = !1, BH.MORPHTARGETS = !1, BH.NUM_MORPH_INFLUENCERS = 0)
      }(HH, BH), tH && function(HH, BH) {
        const LH = HH.bakedVertexAnimationManager;
        BH.BAKED_VERTEX_ANIMATION_TEXTURE = !(!LH || !LH.isEnabled)
      }(HH, BH), !0
    }

    function FH(HH, BH) {
      if (HH.activeCamera) {
        const LH = BH.MULTIVIEW;
        BH.MULTIVIEW = null !== HH.activeCamera.outputRenderTarget && HH.activeCamera.outputRenderTarget.getViewCount() > 1, BH.MULTIVIEW != LH && BH.markAsUnprocessed()
      }
    }

    function DH(HH, BH, LH) {
      const AH = BH.ORDER_INDEPENDENT_TRANSPARENCY,
        rH = BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      BH.ORDER_INDEPENDENT_TRANSPARENCY = HH.useOrderIndependentTransparency && LH, BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !HH.Iu().getCaps().textureFloatLinearFiltering, AH === BH.ORDER_INDEPENDENT_TRANSPARENCY && rH === BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || BH.markAsUnprocessed()
    }

    function wH(HH, BH, LH) {
      const AH = BH.PREPASS;
      if (!BH._arePrePassDirty) return;
      const rH = [{
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
      if (HH.prePassRenderer && HH.prePassRenderer.enabled && LH) {
        BH.PREPASS = !0, BH.SCENE_MRT_COUNT = HH.prePassRenderer.mrtCount, BH.PREPASS_NORMAL_WORLDSPACE = HH.prePassRenderer.generateNormalsInWorldSpace, BH.PREPASS_COLOR = !0, BH.PREPASS_COLOR_INDEX = 0;
        for (let LH = 0; LH < rH.length; LH++) {
          const AH = HH.prePassRenderer.getIndex(rH[LH].type); - 1 !== AH ? (BH[rH[LH].define] = !0, BH[rH[LH].index] = AH) : BH[rH[LH].define] = !1
        }
      } else {
        BH.PREPASS = !1;
        for (let HH = 0; HH < rH.length; HH++) BH[rH[HH].define] = !1
      }
      BH.PREPASS != AH && (BH.markAsUnprocessed(), BH.markAsImageProcessingDirty())
    }

    function ZH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        CH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      rH && rH.push("Light" + HH), SH || (BH.push("vLightData" + HH, "vLightDiffuse" + HH, "vLightSpecular" + HH, "vLightDirection" + HH, "vLightWidth" + HH, "vLightHeight" + HH, "vLightFalloff" + HH, "vLightGround" + HH, "vSliceData" + HH, "vSliceRanges" + HH, "lightMatrix" + HH, "shadowsInfo" + HH, "depthValues" + HH), LH.push("shadowTexture" + HH), LH.push("depthTexture" + HH), BH.push("viewFrustumZ" + HH, "cascadeBlendFactor" + HH, "lightSizeUVCorrection" + HH, "depthCorrection" + HH, "penumbraDarkness" + HH, "frustumLengths" + HH), AH && (LH.push("projectionLightTexture" + HH), BH.push("textureProjectionMatrix" + HH)), hH && LH.push("iesLightTexture" + HH), zH && LH.push("rectAreaLightEmissionTexture" + HH), tH && (LH.push("lightDataTexture" + HH), CH || LH.push("tileMaskTexture" + HH)))
    }

    function dH(HH, BH, LH) {
      const AH = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      LH && AH.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), HH.push(...AH);
      BH.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function aH(HH, BH, LH) {
      let AH, rH, SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        hH = null;
      if (HH.uniformsNames) {
        const tH = HH;
        AH = tH.uniformsNames, rH = tH.uniformBuffersNames, BH = tH.samplers, LH = tH.defines, SH = tH.maxSimultaneousLights || 0, hH = tH.shaderLanguage ?? null
      } else AH = HH, BH || (BH = []);
      for (let tH = 0; tH < SH && LH["LIGHT" + tH]; tH++) ZH(tH, AH, BH, LH["PROJECTEDLIGHTTEXTURE" + tH], rH, !1, LH["IESLIGHTTEXTURE" + tH], LH["CLUSTLIGHT" + tH], LH["RECTAREALIGHTEMISSIONTEXTURE" + tH], 1 === hH);
      LH.NUM_MORPH_INFLUENCERS && (AH.push("morphTargetInfluences"), AH.push("morphTargetCount")), LH.BAKED_VERTEX_ANIMATION_TEXTURE && (AH.push("bakedVertexAnimationSettings"), AH.push("bakedVertexAnimationTextureSizeInverted"), AH.push("bakedVertexAnimationTime"), BH.push("bakedVertexAnimationTexture"))
    }

    function sH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      HH.addUniform("vReflectionInfos", 2), HH.addUniform("reflectionMatrix", 16), BH && HH.addUniform("vReflectionMicrosurfaceInfos", 3), LH && (HH.addUniform("vReflectionPosition", 3), HH.addUniform("vReflectionSize", 3)), AH && (HH.addUniform("vReflectionFilteringInfo", 2), HH.addUniform("vReflectionDominantDirection", 3)), SH && HH.addUniform("vReflectionColor", 3), rH && (HH.addUniform("vSphericalL00", 3), HH.addUniform("vSphericalL1_1", 3), HH.addUniform("vSphericalL10", 3), HH.addUniform("vSphericalL11", 3), HH.addUniform("vSphericalL2_2", 3), HH.addUniform("vSphericalL2_1", 3), HH.addUniform("vSphericalL20", 3), HH.addUniform("vSphericalL21", 3), HH.addUniform("vSphericalL22", 3), HH.addUniform("vSphericalX", 3), HH.addUniform("vSphericalY", 3), HH.addUniform("vSphericalZ", 3), HH.addUniform("vSphericalXX_ZZ", 3), HH.addUniform("vSphericalYY_ZZ", 3), HH.addUniform("vSphericalZZ", 3), HH.addUniform("vSphericalXY", 3), HH.addUniform("vSphericalYZ", 3), HH.addUniform("vSphericalZX", 3))
    }
  },
  41634: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(37963),
      rH = LH(41573);
    class SH extends rH.c {
      constructor(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(HH, BH, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new AH.e, this._storeEffectOnSubMeshes = LH
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(HH, BH) {
        return !!HH && (!this._storeEffectOnSubMeshes || (!HH.jU || 0 === HH.jU.length || this.isReadyForSubMesh(HH, HH.jU[0], BH)))
      }
      _isReadyForSubMesh(HH) {
        const BH = HH.materialDefines;
        return !(this.checkReadyOnEveryCall || !HH.effect || !BH || BH._renderId !== this.yN().getRenderId())
      }
      bindOnlyWorldMatrix(HH) {
        this._activeEffect.setMatrix("world", HH)
      }
      bindOnlyNormalMatrix(HH) {
        this._activeEffect.setMatrix("normalMatrix", HH)
      }
      bind(HH, BH) {
        BH && this.bindForSubMesh(HH, BH, BH.jU[0])
      }
      _afterBind(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(HH, BH, LH), this.yN()._cachedEffect = BH, LH ? LH._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return LH._drawWrapper._forceRebindOnNextCall || HH.isCachedMaterialInvalid(this, BH, AH)
      }
      dispose(HH, BH, LH) {
        this._activeEffect = void 0, super.dispose(HH, BH, LH)
      }
    }
  },
  41653: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      f: () => rH
    });
    const AH = new WeakMap;

    function rH(HH) {
      const BH = HH.getVertexBuffers();
      if (!BH) return null;
      let LH = AH.get(HH);
      if (LH) {
        let HH = !1;
        for (const AH in BH)
          if (!LH.has(AH)) {
            HH = !0;
            break
          } if (!HH) return LH
      } else LH = new Map, AH.set(HH, LH);
      for (const AH in BH) {
        const HH = BH[AH];
        if (HH) {
          const BH = HH.byteOffset,
            rH = HH.byteStride,
            SH = HH.type,
            hH = HH.normalized;
          LH.set(AH, {
            offset: BH,
            stride: rH,
            type: SH,
            normalized: hH
          })
        }
      }
      return LH
    }

    function SH(HH, BH) {
      BH.forEach(((BH, LH) => {
        const AH = `vp_${LH}_info`;
        HH.setFloat4(AH, BH.offset, BH.stride, BH.type, BH.normalized ? 1 : 0)
      }))
    }
  },
  41602: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => zH
    });
    var AH = LH(41290),
      rH = LH(37963),
      SH = LH(41297);
    let hH = (() => {
      var HH;
      let BH, LH, rH = [];
      return HH = class {
        static extractMinAndMaxIndexed(HH, BH, LH, AH, rH, SH) {
          for (let hH = LH; hH < LH + AH; hH++) {
            const LH = 3 * BH[hH],
              AH = HH[LH],
              tH = HH[LH + 1],
              zH = HH[LH + 2];
            rH.minimizeInPlaceFromFloats(AH, tH, zH), SH.maximizeInPlaceFromFloats(AH, tH, zH)
          }
        }
        static extractMinAndMax(HH, BH, LH, AH, rH, SH) {
          for (let hH = BH, tH = BH * AH; hH < BH + LH; hH++, tH += AH) {
            const BH = HH[tH],
              LH = HH[tH + 1],
              AH = HH[tH + 2];
            rH.minimizeInPlaceFromFloats(BH, LH, AH), SH.maximizeInPlaceFromFloats(BH, LH, AH)
          }
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [SH.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], LH = [SH.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, AH.g)(HH, null, BH, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: HH => "extractMinAndMaxIndexed" in HH,
            get: HH => HH.extractMinAndMaxIndexed
          },
          metadata: hH
        }, null, rH), (0, AH.g)(HH, null, LH, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: HH => "extractMinAndMax" in HH,
            get: HH => HH.extractMinAndMax
          },
          metadata: hH
        }, null, rH), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        }), (0, AH.k)(HH, rH)
      })(), HH
    })();

    function tH(HH, BH, LH, AH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const tH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        zH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return hH.extractMinAndMaxIndexed(HH, BH, LH, AH, tH, zH), SH && (tH.x -= tH.x * SH.x + SH.y, tH.y -= tH.y * SH.x + SH.y, tH.z -= tH.z * SH.x + SH.y, zH.x += zH.x * SH.x + SH.y, zH.y += zH.y * SH.x + SH.y, zH.z += zH.z * SH.x + SH.y), {
        minimum: tH,
        maximum: zH
      }
    }

    function zH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        SH = arguments.length > 4 ? arguments[4] : void 0;
      const tH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        zH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return SH || (SH = 3), hH.extractMinAndMax(HH, BH, LH, SH, tH, zH), AH && (tH.x -= tH.x * AH.x + AH.y, tH.y -= tH.y * AH.x + AH.y, tH.z -= tH.z * AH.x + AH.y, zH.x += zH.x * AH.x + AH.y, zH.y += zH.y * AH.x + AH.y, zH.z += zH.z * AH.x + AH.y), {
        minimum: tH,
        maximum: zH
      }
    }
  },
  41578: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH
    });
    var AH, rH = LH(41427),
      SH = LH(41585),
      hH = LH(41588),
      tH = LH(41602),
      zH = LH(41609),
      CH = LH(41169);
    class EH {
      get materialDefines() {
        const HH = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof HH ? null : HH
      }
      set materialDefines(HH) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = HH
      }
      _getDrawWrapper(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        HH = HH ?? this._engine.currentRenderPassId;
        let LH = this._drawWrappers[HH];
        return !LH && BH && (this._drawWrappers[HH] = LH = new zH.e(this._mesh.yN().Iu())), LH
      }
      _removeDrawWrapper(HH) {
        let BH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[HH]?.dispose(BH), this._drawWrappers[HH] = void 0
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
      _setMainDrawWrapperOverride(HH) {
        this._mainDrawWrapperOverride = HH
      }
      setEffect(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const rH = this._drawWrapper;
        rH.setEffect(HH, BH, AH), void 0 !== LH && (rH.materialContext = LH), HH || (rH.defines = null, rH.materialContext = void 0)
      }
      resetDrawCache(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== HH) return void this._removeDrawWrapper(HH, !0, BH);
          for (const HH of this._drawWrappers) HH?.dispose(BH)
        }
        this._drawWrappers = []
      }
      static AddToMesh(HH, BH, LH, AH, rH, SH, hH) {
        return new EH(HH, BH, LH, AH, rH, SH, hH, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(HH, BH, LH, AH, rH, SH, hH) {
        let tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          zH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = HH, this.verticesStart = BH, this.verticesCount = LH, this.indexStart = AH, this.indexCount = rH, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = SH, this._renderingMesh = hH || SH, zH && SH.jU.push(this), this._engine = this._mesh.yN().Iu(), this.resetDrawCache(), this._trianglePlanes = [], this._id = SH.jU.length - 1, tH && (this.refreshBoundingInfo(), SH.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      jF() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.jF() : this._boundingInfo
      }
      setBoundingInfo(HH) {
        return this._boundingInfo = HH, this
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
        const HH = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return HH || this._renderingMesh
      }
      eu() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const BH = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!BH) return HH && this._mesh.yN()._hasDefaultMaterial ? this._mesh.yN().defaultMaterial : null;
        if (this._isMultiMaterial(BH)) {
          const HH = BH.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== HH && (this._currentMaterial = HH, this.resetDrawCache()), HH
        }
        return BH
      }
      _isMultiMaterial(HH) {
        return void 0 !== HH.getSubMaterial
      }
      refreshBoundingInfo() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (HH || (HH = this._renderingMesh.getVerticesData(rH.i.PositionKind)), !HH) return this._boundingInfo = this._mesh.jF(), this;
        const BH = this._renderingMesh.vrH();
        let LH;
        if (0 === this.indexStart && this.indexCount === BH.length) {
          const HH = this._renderingMesh.jF();
          LH = {
            minimum: HH.minimum.clone(),
            maximum: HH.maximum.clone()
          }
        } else LH = (0, tH.c)(HH, BH, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(LH.minimum, LH.maximum) : this._boundingInfo = new hH.d(LH.minimum, LH.maximum), this
      }
      _checkCollision(HH) {
        return this.jF()._checkCollision(HH)
      }
      updateBoundingInfo(HH) {
        let BH = this.jF();
        return BH || (this.refreshBoundingInfo(), BH = this.jF()), BH && BH.update(HH), this
      }
      isInFrustum(HH) {
        const BH = this.jF();
        return !!BH && BH.isInFrustum(HH, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(HH) {
        const BH = this.jF();
        return !!BH && BH.isCompletelyInFrustum(HH)
      }
      render(HH) {
        return this._renderingMesh.render(this, HH, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(HH, BH) {
        if (!this._linesIndexBuffer) {
          const LH = 6 * Math.floor(this.indexCount / 3),
            AH = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(LH) : new Uint16Array(LH);
          let rH = 0;
          if (0 === HH.length)
            for (let HH = this.indexStart; HH < this.indexStart + this.indexCount; HH += 3) AH[rH++] = HH, AH[rH++] = HH + 1, AH[rH++] = HH + 1, AH[rH++] = HH + 2, AH[rH++] = HH + 2, AH[rH++] = HH;
          else
            for (let BH = this.indexStart; BH < this.indexStart + this.indexCount; BH += 3) AH[rH++] = HH[BH], AH[rH++] = HH[BH + 1], AH[rH++] = HH[BH + 1], AH[rH++] = HH[BH + 2], AH[rH++] = HH[BH + 2], AH[rH++] = HH[BH];
          this._linesIndexBuffer = BH.createIndexBuffer(AH), this._linesIndexCount = AH.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(HH) {
        const BH = this.jF();
        return !!BH && HH.intersectsBox(BH.boundingBox)
      }
      intersects(HH, BH, LH, AH, rH) {
        const SH = this.eu();
        if (!SH) return null;
        let hH = 3,
          tH = !1;
        switch (SH.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            hH = 1, tH = !0
        }
        return 4 === SH.fillMode ? LH.length ? this._intersectLines(HH, BH, LH, this._mesh.intersectionThreshold, AH) : this._intersectUnIndexedLines(HH, BH, LH, this._mesh.intersectionThreshold, AH) : !LH.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(HH, BH, LH, AH, rH) : this._intersectTriangles(HH, BH, LH, hH, tH, AH, rH)
      }
      _intersectLines(HH, BH, LH, AH, rH) {
        let hH = null;
        for (let tH = this.indexStart; tH < this.indexStart + this.indexCount; tH += 2) {
          const zH = BH[LH[tH]],
            CH = BH[LH[tH + 1]],
            EH = HH.intersectionSegment(zH, CH, AH);
          if (!(EH < 0) && ((rH || !hH || EH < hH.distance) && (hH = new SH.b(null, null, EH), hH.faceId = tH / 2, rH))) break
        }
        return hH
      }
      _intersectUnIndexedLines(HH, BH, LH, AH, rH) {
        let hH = null;
        for (let tH = this.verticesStart; tH < this.verticesStart + this.verticesCount; tH += 2) {
          const LH = BH[tH],
            zH = BH[tH + 1],
            CH = HH.intersectionSegment(LH, zH, AH);
          if (!(CH < 0) && ((rH || !hH || CH < hH.distance) && (hH = new SH.b(null, null, CH), hH.faceId = tH / 2, rH))) break
        }
        return hH
      }
      _intersectTriangles(HH, BH, LH, AH, rH, SH, hH) {
        let tH = null,
          zH = -1;
        for (let CH = this.indexStart; CH < this.indexStart + this.indexCount - (3 - AH); CH += AH) {
          zH++;
          const AH = LH[CH],
            EH = LH[CH + 1],
            XH = LH[CH + 2];
          if (rH && 4294967295 === XH) {
            CH += 2;
            continue
          }
          const GH = BH[AH],
            YH = BH[EH],
            uH = BH[XH];
          if (!GH || !YH || !uH) continue;
          if (hH && !hH(GH, YH, uH, HH, AH, EH, XH)) continue;
          const QH = HH.intersectsTriangle(GH, YH, uH);
          if (QH) {
            if (QH.distance < 0) continue;
            if ((SH || !tH || QH.distance < tH.distance) && (tH = QH, tH.faceId = zH, SH)) break
          }
        }
        return tH
      }
      _intersectUnIndexedTriangles(HH, BH, LH, AH, rH) {
        let SH = null;
        for (let hH = this.verticesStart; hH < this.verticesStart + this.verticesCount; hH += 3) {
          const LH = BH[hH],
            tH = BH[hH + 1],
            zH = BH[hH + 2];
          if (rH && !rH(LH, tH, zH, HH, -1, -1, -1)) continue;
          const CH = HH.intersectsTriangle(LH, tH, zH);
          if (CH) {
            if (CH.distance < 0) continue;
            if ((AH || !SH || CH.distance < SH.distance) && (SH = CH, SH.faceId = hH / 3, AH)) break
          }
        }
        return SH
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(HH, BH) {
        const LH = new EH(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, HH, BH, !1);
        if (!this.IsGlobal) {
          const HH = this.jF();
          if (!HH) return LH;
          LH._boundingInfo = new hH.d(HH.minimum, HH.maximum)
        }
        return LH
      }
      dispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.yN().Iu()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const BH = this._mesh.jU.indexOf(this);
        this._mesh.jU.splice(BH, 1), this.resetDrawCache(void 0, HH)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(HH, BH, LH, AH, rH) {
        let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = Number.MAX_VALUE,
          tH = -Number.MAX_VALUE;
        const zH = (rH || AH).vrH();
        for (let CH = BH; CH < BH + LH; CH++) {
          const HH = zH[CH];
          HH < hH && (hH = HH), HH > tH && (tH = HH)
        }
        return new EH(HH, hH, tH - hH + 1, BH, LH, AH, rH, SH)
      }
    }(AH = EH.prototype).projectToRef ?? (AH.projectToRef = (0, CH.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);