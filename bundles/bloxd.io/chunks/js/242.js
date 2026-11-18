export const id = 242;
export const ids = [242];
export const modules = {
  39062: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ) {
        this.bu = JJ, this.bv = cJ, this.distance = ZJ, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39072: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(36183),
      UJ = ZJ(36174),
      eJ = ZJ(36177);
    class XJ {
      constructor(JJ, cJ, ZJ) {
        this.vectors = (0, FJ.e)(8, UJ.j.Zero), this.center = UJ.j.Zero(), this.centerWorld = UJ.j.Zero(), this.extendSize = UJ.j.Zero(), this.extendSizeWorld = UJ.j.Zero(), this.directions = (0, FJ.e)(3, UJ.j.Zero), this.vectorsWorld = (0, FJ.e)(8, UJ.j.Zero), this.minimumWorld = UJ.j.Zero(), this.maximumWorld = UJ.j.Zero(), this.minimum = UJ.j.Zero(), this.maximum = UJ.j.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(JJ, cJ, ZJ)
      }
      reConstruct(JJ, cJ, ZJ) {
        const FJ = JJ.x,
          eJ = JJ.y,
          XJ = JJ.z,
          AJ = cJ.x,
          qJ = cJ.y,
          jJ = cJ.z,
          YJ = this.vectors;
        this.minimum.K9(FJ, eJ, XJ), this.maximum.K9(AJ, qJ, jJ), YJ[0].K9(FJ, eJ, XJ), YJ[1].K9(AJ, qJ, jJ), YJ[2].K9(AJ, eJ, XJ), YJ[3].K9(FJ, qJ, XJ), YJ[4].K9(FJ, eJ, jJ), YJ[5].K9(AJ, qJ, XJ), YJ[6].K9(FJ, qJ, jJ), YJ[7].K9(AJ, eJ, jJ), cJ.addToRef(JJ, this.center).scaleInPlace(.5), cJ.subtractToRef(JJ, this.extendSize).scaleInPlace(.5), this._worldMatrix = ZJ || UJ.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(JJ) {
        const cJ = XJ._TmpVector3,
          ZJ = this.maximum.subtractToRef(this.minimum, cJ[0]),
          FJ = ZJ.length();
        ZJ.normalizeFromLength(FJ);
        const UJ = FJ * JJ,
          eJ = ZJ.scaleInPlace(.5 * UJ),
          AJ = this.center.subtractToRef(eJ, cJ[1]),
          qJ = this.center.addToRef(eJ, cJ[2]);
        return this.reConstruct(AJ, qJ, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(JJ) {
        const cJ = this.minimumWorld,
          ZJ = this.maximumWorld,
          FJ = this.directions,
          eJ = this.vectorsWorld,
          XJ = this.vectors;
        if (JJ.isIdentity()) {
          cJ.rZJ(this.minimum), ZJ.rZJ(this.maximum);
          for (let JJ = 0; JJ < 8; ++JJ) eJ[JJ].rZJ(XJ[JJ]);
          this.extendSizeWorld.rZJ(this.extendSize), this.centerWorld.rZJ(this.center)
        } else {
          cJ.X3(Number.MAX_VALUE), ZJ.X3(-Number.MAX_VALUE);
          for (let FJ = 0; FJ < 8; ++FJ) {
            const AJ = eJ[FJ];
            UJ.j.TransformCoordinatesToRef(XJ[FJ], JJ, AJ), cJ.minimizeInPlace(AJ), ZJ.maximizeInPlace(AJ)
          }
          ZJ.subtractToRef(cJ, this.extendSizeWorld).scaleInPlace(.5), ZJ.addToRef(cJ, this.centerWorld).scaleInPlace(.5)
        }
        UJ.j.FromArrayToRef(JJ.m, 0, FJ[0]), UJ.j.FromArrayToRef(JJ.m, 4, FJ[1]), UJ.j.FromArrayToRef(JJ.m, 8, FJ[2]), this._worldMatrix = JJ
      }
      isInFrustum(JJ) {
        return XJ.IsInFrustum(this.vectorsWorld, JJ)
      }
      isCompletelyInFrustum(JJ) {
        return XJ.IsCompletelyInFrustum(this.vectorsWorld, JJ)
      }
      intersectsPoint(JJ) {
        const cJ = this.minimumWorld,
          ZJ = this.maximumWorld,
          FJ = cJ.x,
          UJ = cJ.y,
          XJ = cJ.z,
          AJ = ZJ.x,
          qJ = ZJ.y,
          jJ = ZJ.z,
          YJ = JJ.x,
          hJ = JJ.y,
          DJ = JJ.z,
          sJ = -eJ.e;
        return !(AJ - YJ < sJ || sJ > YJ - FJ) && (!(qJ - hJ < sJ || sJ > hJ - UJ) && !(jJ - DJ < sJ || sJ > DJ - XJ))
      }
      intersectsSphere(JJ) {
        return XJ.IntersectsSphere(this.minimumWorld, this.maximumWorld, JJ.centerWorld, JJ.radiusWorld)
      }
      intersectsMinMax(JJ, cJ) {
        const ZJ = this.minimumWorld,
          FJ = this.maximumWorld,
          UJ = ZJ.x,
          eJ = ZJ.y,
          XJ = ZJ.z,
          AJ = FJ.x,
          qJ = FJ.y,
          jJ = FJ.z,
          YJ = JJ.x,
          hJ = JJ.y,
          DJ = JJ.z,
          sJ = cJ.x,
          nJ = cJ.y,
          GJ = cJ.z;
        return !(AJ < YJ || UJ > sJ) && (!(qJ < hJ || eJ > nJ) && !(jJ < DJ || XJ > GJ))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(JJ, cJ) {
        return JJ.intersectsMinMax(cJ.minimumWorld, cJ.maximumWorld)
      }
      static IntersectsSphere(JJ, cJ, ZJ, FJ) {
        const eJ = XJ._TmpVector3[0];
        UJ.j.ClampToRef(ZJ, JJ, cJ, eJ);
        return UJ.j.DistanceSquared(ZJ, eJ) <= FJ * FJ
      }
      static IsCompletelyInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ++ZJ) {
          const FJ = cJ[ZJ];
          for (let cJ = 0; cJ < 8; ++cJ)
            if (FJ.dotCoordinate(JJ[cJ]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ++ZJ) {
          let FJ = !0;
          const UJ = cJ[ZJ];
          for (let cJ = 0; cJ < 8; ++cJ)
            if (UJ.dotCoordinate(JJ[cJ]) >= 0) {
              FJ = !1;
              break
            } if (FJ) return !1
        }
        return !0
      }
    }
    XJ._TmpVector3 = (0, FJ.e)(3, UJ.j.Zero)
  },
  39065: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => hJ
    });
    var FJ = ZJ(36183),
      UJ = ZJ(36174),
      eJ = ZJ(39072);
    class XJ {
      constructor(JJ, cJ, ZJ) {
        this.center = UJ.j.Zero(), this.centerWorld = UJ.j.Zero(), this.minimum = UJ.j.Zero(), this.maximum = UJ.j.Zero(), this.reConstruct(JJ, cJ, ZJ)
      }
      reConstruct(JJ, cJ, ZJ) {
        this.minimum.rZJ(JJ), this.maximum.rZJ(cJ);
        const FJ = UJ.j.Distance(JJ, cJ);
        cJ.addToRef(JJ, this.center).scaleInPlace(.5), this.radius = .5 * FJ, this._update(ZJ || UJ.b.IdentityReadOnly)
      }
      scale(JJ) {
        const cJ = XJ._TmpVector3,
          ZJ = this.maximum.subtractToRef(this.minimum, cJ[0]),
          FJ = ZJ.length();
        ZJ.normalizeFromLength(FJ);
        const UJ = FJ * JJ,
          eJ = ZJ.scaleInPlace(.5 * UJ),
          AJ = this.center.subtractToRef(eJ, cJ[1]),
          qJ = this.center.addToRef(eJ, cJ[2]);
        return this.reConstruct(AJ, qJ, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(JJ) {
        if (JJ.isIdentity()) this.centerWorld.rZJ(this.center), this.radiusWorld = this.radius;
        else {
          UJ.j.TransformCoordinatesToRef(this.center, JJ, this.centerWorld);
          const cJ = XJ._TmpVector3[0];
          UJ.j.TransformNormalFromFloatsToRef(1, 1, 1, JJ, cJ), this.radiusWorld = Math.max(Math.abs(cJ.x), Math.abs(cJ.y), Math.abs(cJ.z)) * this.radius
        }
      }
      isInFrustum(JJ) {
        const cJ = this.centerWorld,
          ZJ = this.radiusWorld;
        for (let FJ = 0; FJ < 6; FJ++)
          if (JJ[FJ].dotCoordinate(cJ) <= -ZJ) return !1;
        return !0
      }
      isCenterInFrustum(JJ) {
        const cJ = this.centerWorld;
        for (let ZJ = 0; ZJ < 6; ZJ++)
          if (JJ[ZJ].dotCoordinate(cJ) < 0) return !1;
        return !0
      }
      intersectsPoint(JJ) {
        const cJ = UJ.j.DistanceSquared(this.centerWorld, JJ);
        return !(this.radiusWorld * this.radiusWorld < cJ)
      }
      static Intersects(JJ, cJ) {
        const ZJ = UJ.j.DistanceSquared(JJ.centerWorld, cJ.centerWorld),
          FJ = JJ.radiusWorld + cJ.radiusWorld;
        return !(FJ * FJ < ZJ)
      }
      static CreateFromCenterAndRadius(JJ, cJ, ZJ) {
        this._TmpVector3[0].rZJ(JJ), this._TmpVector3[1].K9(0, 0, cJ), this._TmpVector3[2].rZJ(JJ), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].xFJ(this._TmpVector3[1]);
        const FJ = new XJ(this._TmpVector3[0], this._TmpVector3[2]);
        return FJ._worldMatrix = ZJ || UJ.b.Identity(), FJ
      }
    }
    XJ._TmpVector3 = (0, FJ.e)(3, UJ.j.Zero);
    const AJ = {
        min: 0,
        max: 0
      },
      qJ = {
        min: 0,
        max: 0
      },
      jJ = (JJ, cJ, ZJ) => {
        const FJ = UJ.j.Dot(cJ.centerWorld, JJ),
          eJ = Math.abs(UJ.j.Dot(cJ.directions[0], JJ)) * cJ.extendSize.x + Math.abs(UJ.j.Dot(cJ.directions[1], JJ)) * cJ.extendSize.y + Math.abs(UJ.j.Dot(cJ.directions[2], JJ)) * cJ.extendSize.z;
        ZJ.min = FJ - eJ, ZJ.max = FJ + eJ
      },
      YJ = (JJ, cJ, ZJ) => (jJ(JJ, cJ, AJ), jJ(JJ, ZJ, qJ), !(AJ.min > qJ.max || qJ.min > AJ.max));
    class hJ {
      constructor(JJ, cJ, ZJ) {
        this._isLocked = !1, this.boundingBox = new eJ.e(JJ, cJ, ZJ), this.QFJ = new XJ(JJ, cJ, ZJ)
      }
      reConstruct(JJ, cJ, ZJ) {
        this.boundingBox.reConstruct(JJ, cJ, ZJ), this.QFJ.reConstruct(JJ, cJ, ZJ)
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
      set isLocked(JJ) {
        this._isLocked = JJ
      }
      update(JJ) {
        this._isLocked || (this.boundingBox._update(JJ), this.QFJ._update(JJ))
      }
      centerOn(JJ, cJ) {
        const ZJ = hJ._TmpVector3[0].rZJ(JJ).xFJ(cJ),
          FJ = hJ._TmpVector3[1].rZJ(JJ).addInPlace(cJ);
        return this.boundingBox.reConstruct(ZJ, FJ, this.boundingBox.getWorldMatrix()), this.QFJ.reConstruct(ZJ, FJ, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(JJ) {
        const cJ = UJ.j.Minimize(this.minimum, JJ),
          ZJ = UJ.j.Maximize(this.maximum, JJ);
        return this.reConstruct(cJ, ZJ, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(JJ) {
        const cJ = UJ.h.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(cJ);
        const ZJ = UJ.h.Pn[0];
        return UJ.j.TransformCoordinatesToRef(JJ.boundingBox.minimumWorld, cJ, ZJ), this.encapsulate(ZJ), UJ.j.TransformCoordinatesToRef(JJ.boundingBox.maximumWorld, cJ, ZJ), this.encapsulate(ZJ), this
      }
      scale(JJ) {
        return this.boundingBox.scale(JJ), this.QFJ.scale(JJ), this
      }
      isInFrustum(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === cJ || 3 === cJ) && this.QFJ.isCenterInFrustum(JJ)) return !0;
        if (!this.QFJ.isInFrustum(JJ)) return !1;
        return !(1 !== cJ && 3 !== cJ) || this.boundingBox.isInFrustum(JJ)
      }
      get diagonalLength() {
        const JJ = this.boundingBox;
        return JJ.maximumWorld.subtractToRef(JJ.minimumWorld, hJ._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(JJ) {
        return this.boundingBox.isCompletelyInFrustum(JJ)
      }
      _checkCollision(JJ) {
        return JJ._canDoCollision(this.QFJ.centerWorld, this.QFJ.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(JJ) {
        return !!this.QFJ.centerWorld && (!!this.QFJ.intersectsPoint(JJ) && !!this.boundingBox.intersectsPoint(JJ))
      }
      intersects(JJ, cJ) {
        if (!XJ.Intersects(this.QFJ, JJ.QFJ)) return !1;
        if (!eJ.e.Intersects(this.boundingBox, JJ.boundingBox)) return !1;
        if (!cJ) return !0;
        const ZJ = this.boundingBox,
          FJ = JJ.boundingBox;
        return !!YJ(ZJ.directions[0], ZJ, FJ) && (!!YJ(ZJ.directions[1], ZJ, FJ) && (!!YJ(ZJ.directions[2], ZJ, FJ) && (!!YJ(FJ.directions[0], ZJ, FJ) && (!!YJ(FJ.directions[1], ZJ, FJ) && (!!YJ(FJ.directions[2], ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[0], FJ.directions[0]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[0], FJ.directions[1]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[0], FJ.directions[2]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[1], FJ.directions[0]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[1], FJ.directions[1]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[1], FJ.directions[2]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[2], FJ.directions[0]), ZJ, FJ) && (!!YJ(UJ.j.Cross(ZJ.directions[2], FJ.directions[1]), ZJ, FJ) && !!YJ(UJ.j.Cross(ZJ.directions[2], FJ.directions[2]), ZJ, FJ))))))))))))))
      }
    }
    hJ._TmpVector3 = (0, FJ.e)(2, UJ.j.Zero)
  },
  39091: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      e: () => qJ,
      h: () => AJ,
      l: () => XJ
    });
    var FJ = ZJ(38927),
      UJ = ZJ(36174);

    function eJ(JJ) {
      -1 === JJ.indexOf("vClipPlane") && JJ.push("vClipPlane"), -1 === JJ.indexOf("vClipPlane2") && JJ.push("vClipPlane2"), -1 === JJ.indexOf("vClipPlane3") && JJ.push("vClipPlane3"), -1 === JJ.indexOf("vClipPlane4") && JJ.push("vClipPlane4"), -1 === JJ.indexOf("vClipPlane5") && JJ.push("vClipPlane5"), -1 === JJ.indexOf("vClipPlane6") && JJ.push("vClipPlane6")
    }

    function XJ(JJ, cJ, ZJ) {
      const FJ = !!(JJ.clipPlane ?? cJ.clipPlane),
        UJ = !!(JJ.clipPlane2 ?? cJ.clipPlane2),
        eJ = !!(JJ.clipPlane3 ?? cJ.clipPlane3),
        XJ = !!(JJ.clipPlane4 ?? cJ.clipPlane4),
        AJ = !!(JJ.clipPlane5 ?? cJ.clipPlane5),
        qJ = !!(JJ.clipPlane6 ?? cJ.clipPlane6);
      FJ && ZJ.push("#define CLIPPLANE"), UJ && ZJ.push("#define CLIPPLANE2"), eJ && ZJ.push("#define CLIPPLANE3"), XJ && ZJ.push("#define CLIPPLANE4"), AJ && ZJ.push("#define CLIPPLANE5"), qJ && ZJ.push("#define CLIPPLANE6")
    }

    function AJ(JJ, cJ, ZJ) {
      let FJ = !1;
      const UJ = !!(JJ.clipPlane ?? cJ.clipPlane),
        eJ = !!(JJ.clipPlane2 ?? cJ.clipPlane2),
        XJ = !!(JJ.clipPlane3 ?? cJ.clipPlane3),
        AJ = !!(JJ.clipPlane4 ?? cJ.clipPlane4),
        qJ = !!(JJ.clipPlane5 ?? cJ.clipPlane5),
        jJ = !!(JJ.clipPlane6 ?? cJ.clipPlane6);
      return ZJ.CLIPPLANE !== UJ && (ZJ.CLIPPLANE = UJ, FJ = !0), ZJ.CLIPPLANE2 !== eJ && (ZJ.CLIPPLANE2 = eJ, FJ = !0), ZJ.CLIPPLANE3 !== XJ && (ZJ.CLIPPLANE3 = XJ, FJ = !0), ZJ.CLIPPLANE4 !== AJ && (ZJ.CLIPPLANE4 = AJ, FJ = !0), ZJ.CLIPPLANE5 !== qJ && (ZJ.CLIPPLANE5 = qJ, FJ = !0), ZJ.CLIPPLANE6 !== jJ && (ZJ.CLIPPLANE6 = jJ, FJ = !0), FJ
    }

    function qJ(JJ, cJ, ZJ) {
      let FJ = cJ.clipPlane ?? ZJ.clipPlane;
      jJ(JJ, "vClipPlane", FJ), FJ = cJ.clipPlane2 ?? ZJ.clipPlane2, jJ(JJ, "vClipPlane2", FJ), FJ = cJ.clipPlane3 ?? ZJ.clipPlane3, jJ(JJ, "vClipPlane3", FJ), FJ = cJ.clipPlane4 ?? ZJ.clipPlane4, jJ(JJ, "vClipPlane4", FJ), FJ = cJ.clipPlane5 ?? ZJ.clipPlane5, jJ(JJ, "vClipPlane5", FJ), FJ = cJ.clipPlane6 ?? ZJ.clipPlane6, jJ(JJ, "vClipPlane6", FJ)
    }

    function jJ(JJ, cJ, ZJ) {
      if (ZJ) {
        const eJ = FJ.c.Qy()?.floatingOriginOffset || UJ.j.ZeroReadOnly;
        JJ.setFloat4(cJ, ZJ.normal.x, ZJ.normal.y, ZJ.normal.z, ZJ.d + UJ.j.Dot(ZJ.normal, eJ))
      }
    }
  },
  39113: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(JJ, cJ) {
        this._defines[JJ] || (JJ < this._currentRank && (this._currentRank = JJ), JJ > this._maxRank && (this._maxRank = JJ), this._defines[JJ] = new Array), this._defines[JJ].push(cJ)
      }
      addCPUSkinningFallback(JJ, cJ) {
        this._mesh = cJ, JJ < this._currentRank && (this._currentRank = JJ), JJ > this._maxRank && (this._maxRank = JJ)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(JJ, cJ) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, JJ = JJ.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), cJ._bonesComputationForcedToCPU = !0;
          const ZJ = this._mesh.Qy();
          for (let JJ = 0; JJ < ZJ.meshes.length; JJ++) {
            const FJ = ZJ.meshes[JJ];
            if (FJ.material) {
              if (FJ.computeBonesUsingShaders && 0 !== FJ.numBoneInfluencers)
                if (FJ.material.getEffect() === cJ) FJ.computeBonesUsingShaders = !1;
                else if (FJ.aE)
                for (const JJ of FJ.aE) {
                  if (JJ.effect === cJ) {
                    FJ.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && FJ.computeBonesUsingShaders && FJ.numBoneInfluencers > 0 && (FJ.computeBonesUsingShaders = !1)
          }
        } else {
          const cJ = this._defines[this._currentRank];
          if (cJ)
            for (let ZJ = 0; ZJ < cJ.length; ZJ++) JJ = JJ.replace("#define " + cJ[ZJ], "");
          this._currentRank++
        }
        return JJ
      }
    }
  },
  39049: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => rJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38879),
      XJ = ZJ(36200),
      AJ = ZJ(36192),
      qJ = ZJ(39058),
      jJ = ZJ(38907),
      YJ = ZJ(37660),
      hJ = ZJ(36744),
      DJ = ZJ(39079),
      sJ = ZJ(38822);
    let nJ = (() => {
      var JJ;
      let cJ, ZJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, nJ, GJ, fJ = [];
      return JJ = class {
        constructor() {
          this._func = (0, FJ.e)(this, fJ), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(JJ) {
          this._func = JJ
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(JJ) {
          this._backFunc = JJ
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(JJ) {
          this._funcRef = JJ
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(JJ) {
          this._funcMask = JJ
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(JJ) {
          this._opStencilFail = JJ
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(JJ) {
          this._opDepthFail = JJ
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(JJ) {
          this._opStencilDepthPass = JJ
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(JJ) {
          this._backOpStencilFail = JJ
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(JJ) {
          this._backOpDepthFail = JJ
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(JJ) {
          this._backOpStencilDepthPass = JJ
        }
        get mask() {
          return this._mask
        }
        set mask(JJ) {
          this._mask = JJ
        }
        get enabled() {
          return this._enabled
        }
        set enabled(JJ) {
          this._enabled = JJ
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(JJ) {
          sJ.c.Clone((() => JJ), this)
        }
        serialize() {
          return sJ.c.Serialize(this)
        }
        parse(JJ, cJ, ZJ) {
          sJ.c.Parse((() => this), JJ, cJ, ZJ)
        }
      }, (() => {
        const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], XJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], YJ = [(0, UJ.F)()], hJ = [(0, UJ.F)()], DJ = [(0, UJ.F)()], nJ = [(0, UJ.F)()], GJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, cJ, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: JJ => "func" in JJ,
            get: JJ => JJ.func
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, ZJ, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: JJ => "backFunc" in JJ,
            get: JJ => JJ.backFunc
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, eJ, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: JJ => "funcRef" in JJ,
            get: JJ => JJ.funcRef
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, XJ, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: JJ => "funcMask" in JJ,
            get: JJ => JJ.funcMask
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, AJ, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: JJ => "opStencilFail" in JJ,
            get: JJ => JJ.opStencilFail
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, qJ, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: JJ => "opDepthFail" in JJ,
            get: JJ => JJ.opDepthFail
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, jJ, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: JJ => "opStencilDepthPass" in JJ,
            get: JJ => JJ.opStencilDepthPass
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, YJ, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: JJ => "backOpStencilFail" in JJ,
            get: JJ => JJ.backOpStencilFail
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, hJ, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: JJ => "backOpDepthFail" in JJ,
            get: JJ => JJ.backOpDepthFail
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, DJ, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: JJ => "backOpStencilDepthPass" in JJ,
            get: JJ => JJ.backOpStencilDepthPass
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, nJ, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: JJ => "mask" in JJ,
            get: JJ => JJ.mask
          },
          metadata: sJ
        }, null, fJ), (0, FJ.d)(JJ, null, GJ, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "enabled" in JJ,
            get: JJ => JJ.enabled
          },
          metadata: sJ
        }, null, fJ), sJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sJ
        })
      })(), JJ
    })();
    var GJ = ZJ(39087),
      fJ = ZJ(38712),
      xJ = ZJ(38677);
    let rJ = (() => {
      var JJ;
      let cJ, ZJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ, gJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ, TJ, CJ, uJ, iJ = [],
        RJ = [],
        LJ = [],
        aJ = [],
        BJ = [],
        tJ = [],
        oJ = [],
        lJ = [],
        Jc = [],
        cc = [],
        Zc = [],
        Fc = [],
        Uc = [],
        ec = [],
        Xc = [],
        Ac = [],
        qc = [],
        jc = [],
        Yc = [],
        hc = [],
        Dc = [],
        sc = [],
        nc = [],
        Gc = [],
        fc = [],
        xc = [],
        rc = [],
        vc = [],
        mc = [],
        Qc = [],
        Ec = [],
        Vc = [],
        Kc = [],
        yc = [],
        Sc = [],
        Ic = [],
        Mc = [],
        bc = [],
        wc = [],
        Wc = [],
        gc = [],
        Hc = [],
        Pc = [],
        kc = [],
        pc = [],
        dc = [],
        zc = [],
        Nc = [],
        Oc = [],
        Tc = [],
        Cc = [];
      return JJ = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(cJ) {
          this._useVertexPulling !== cJ && (this._useVertexPulling = cJ, this.ycJ(JJ.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(JJ) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(cJ) {
          if (this._alpha === cJ) return;
          const ZJ = this._alpha;
          this._alpha = cJ, 1 !== ZJ && 1 !== cJ || this.ycJ(JJ.MiscDirtyFlag + JJ.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(cJ) {
          this._backFaceCulling !== cJ && (this._backFaceCulling = cJ, this.ycJ(JJ.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(cJ) {
          const ZJ = Math.max(0, Math.min(0 | cJ, 4));
          this._textureRepetitionMode !== ZJ && (this._textureRepetitionMode = ZJ, this.ycJ(JJ.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(cJ) {
          this._cullBackFaces !== cJ && (this._cullBackFaces = cJ, this.ycJ(JJ.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(JJ) {
          this._blockDirtyMechanism !== JJ && (this._blockDirtyMechanism = JJ, JJ || this.markDirty())
        }
        atomicMaterialsUpdate(JJ) {
          this.blockDirtyMechanism = !0;
          try {
            JJ(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(JJ) {
          this._onDisposeObserver && this.Sy.remove(this._onDisposeObserver), this._onDisposeObserver = this.Sy.add(JJ)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new XJ.c), this._onBindObservable
        }
        set onBind(JJ) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(JJ)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new XJ.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new XJ.c), this._onEffectCreatedObservable
        }
        set alphaMode(JJ) {
          this._alphaMode[0] = JJ
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[ZJ] !== cJ && (this._alphaMode[ZJ] = cJ, this.ycJ(JJ.TextureDirtyFlag))
        }
        set needDepthPrePass(JJ) {
          this._needDepthPrePass !== JJ && (this._needDepthPrePass = JJ, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(cJ) {
          this._fogEnabled !== cJ && (this._fogEnabled = cJ, this.ycJ(JJ.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case JJ.WireFrameFillMode:
            case JJ.LineListDrawMode:
            case JJ.LineLoopDrawMode:
            case JJ.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(cJ) {
          this.fillMode = cJ ? JJ.WireFrameFillMode : JJ.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case JJ.PointFillMode:
            case JJ.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(cJ) {
          this.fillMode = cJ ? JJ.PointFillMode : JJ.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(cJ) {
          this._fillMode !== cJ && (this._fillMode = cJ, this.ycJ(JJ.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(JJ) {
          const cJ = this.Qy().gn().getCaps().fragmentDepthSupported;
          JJ && !cJ && YJ.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = JJ && cJ, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(JJ) {
          this._isVertexOutputInvariant !== JJ && (this._isVertexOutputInvariant = JJ, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(JJ) {
          this._drawWrapper = JJ
        }
        constructor(cJ, ZJ, UJ) {
          let qJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, FJ.e)(this, iJ), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, FJ.e)(this, RJ, void 0), this.uniqueId = ((0, FJ.e)(this, LJ), (0, FJ.e)(this, aJ, void 0)), this._loadedUniqueId = (0, FJ.e)(this, BJ), this.name = (0, FJ.e)(this, tJ, void 0), this.metadata = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, null)), this._internalMetadata = (0, FJ.e)(this, Jc), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, FJ.e)(this, cc, !1), this.checkReadyOnlyOnce = ((0, FJ.e)(this, Zc), (0, FJ.e)(this, Fc, !1)), this.state = ((0, FJ.e)(this, Uc), (0, FJ.e)(this, ec, "")), this._alpha = ((0, FJ.e)(this, Xc), (0, FJ.e)(this, Ac, 1)), this.inspectableCustomProperties = (0, FJ.e)(this, qc), this._backFaceCulling = (0, FJ.e)(this, jc, !0), this._textureRepetitionMode = ((0, FJ.e)(this, Yc), (0, FJ.e)(this, hc, 0)), this.textureRepetitionHexTilingParams = ((0, FJ.e)(this, Dc), (0, FJ.e)(this, sc, [1, .6, 7, .5])), this._cullBackFaces = ((0, FJ.e)(this, nc), (0, FJ.e)(this, Gc, !0)), this._blockDirtyMechanism = ((0, FJ.e)(this, fc), !1), this.sideOrientation = (0, FJ.e)(this, xc, null), this.onCompiled = ((0, FJ.e)(this, rc), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Sy = new XJ.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, FJ.e)(this, vc, [2]), this._needDepthPrePass = ((0, FJ.e)(this, mc), (0, FJ.e)(this, Qc, !1)), this.disableDepthWrite = ((0, FJ.e)(this, Ec), (0, FJ.e)(this, Vc, !1)), this.disableColorWrite = ((0, FJ.e)(this, Kc), (0, FJ.e)(this, yc, !1)), this.forceDepthWrite = ((0, FJ.e)(this, Sc), (0, FJ.e)(this, Ic, !1)), this.depthFunction = ((0, FJ.e)(this, Mc), (0, FJ.e)(this, bc, 0)), this.separateCullingPass = ((0, FJ.e)(this, wc), (0, FJ.e)(this, Wc, !1)), this._fogEnabled = ((0, FJ.e)(this, gc), (0, FJ.e)(this, Hc, !0)), this.pointSize = ((0, FJ.e)(this, Pc), (0, FJ.e)(this, kc, 1)), this.zOffset = ((0, FJ.e)(this, pc), (0, FJ.e)(this, dc, 0)), this.zOffsetUnits = ((0, FJ.e)(this, zc), (0, FJ.e)(this, Nc, 0)), this.clipPlane = (0, FJ.e)(this, Oc), this.stencil = new nJ, this._isVertexOutputInvariant = (0, FJ.e)(this, Tc, JJ.ForceVertexOutputInvariant), this._materialContext = (0, FJ.e)(this, Cc), this._useUBO = !1, this._fillMode = JJ.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = cJ;
          const YJ = ZJ || AJ.c.LastCreatedScene;
          YJ && (this._scene = YJ, this._dirtyCallbacks = {}, this._forceGLSL = qJ, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = cJ || eJ.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.gn().createMaterialContext(), this._drawWrapper = new DJ.d(this._scene.gn(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new jJ.e(this._scene.gn(), void 0, void 0, cJ), this._useUBO = this.Qy().gn().supportsUniformBuffers, this._createUniformBuffer(), UJ || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), JJ.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const JJ = this.Qy().gn();
          this._uniformBuffer?.dispose(), JJ.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new jJ.e(JJ, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new jJ.e(this._scene.gn(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(JJ) {
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
        isReady(JJ, cJ) {
          return !0
        }
        isReadyForSubMesh(JJ, cJ, ZJ) {
          const FJ = cJ.materialDefines;
          return !!FJ && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = FJ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Qy() {
          return this._scene
        }
        _getEffectiveOrientation(JJ) {
          return null !== this.sideOrientation ? this.sideOrientation : JJ.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(JJ) {
          this._transparencyMode = JJ
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === JJ.MATERIAL_ALPHABLEND || this._transparencyMode === JJ.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === JJ.MATERIAL_ALPHATEST || this._transparencyMode === JJ.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === JJ.MATERIAL_OPAQUE || this._transparencyMode === JJ.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(JJ) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : JJ.visibility < 1 || !this._disableAlphaBlending && (JJ.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(JJ) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(JJ) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ZJ = this.Qy().meshes;
          for (const JJ of ZJ)
            if (JJ.aE)
              for (const ZJ of JJ.aE)
                if (ZJ.dn() === this)
                  for (const JJ of ZJ._drawWrappers) JJ && this._materialContext === JJ.materialContext && (JJ._wasPreviouslyReady = !1, JJ._wasPreviouslyUsingInstances = null, JJ._forceRebindOnNextCall = cJ);
          cJ && this.ycJ(JJ.AllDirtyFlag)
        }
        _preBind(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const FJ = this._scene.gn(),
            UJ = (null == ZJ ? this.sideOrientation : ZJ) === JJ.ClockWiseSideOrientation,
            eJ = cJ || this._getDrawWrapper();
          return (0, fJ.d)(eJ) && eJ.materialContext && (eJ.materialContext.useVertexPulling = this.useVertexPulling), FJ.enableEffect(eJ), FJ.setState(this.backFaceCulling, this.zOffset, !1, UJ, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), UJ
        }
        bind(JJ, cJ) {}
        buildUniformLayout() {
          const JJ = this._uniformBuffer;
          this._eventInfo.ubo = JJ, this._callbackPluginEventGeneric(8, this._eventInfo), JJ.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(JJ, cJ, ZJ) {
          const FJ = ZJ._drawWrapper;
          this._eventInfo.subMesh = ZJ, this._callbackPluginEventBindForSubMesh(this._eventInfo), FJ._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(JJ) {}
        bindView(JJ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : JJ.setMatrix("view", this.Qy().getViewMatrix())
        }
        bindViewProjection(JJ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (JJ.setMatrix("viewProjection", this.Qy().getTransformMatrix()), JJ.setMatrix("projection", this.Qy().getProjectionMatrix()), JJ.setMatrix("inverseProjection", this.Qy().getInverseProjectionMatrix()))
        }
        bindEyePosition(JJ, cJ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(JJ, cJ)
        }
        _afterBind(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && cJ && (this._needToBindSceneUbo = !1, (0, GJ.o)(cJ, this.Qy().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = JJ ? JJ.visibility : 1, this._onBindObservable && JJ && this._onBindObservable.notifyObservers(JJ), this.disableDepthWrite) {
            const JJ = this._scene.gn();
            this._cachedDepthWriteState = JJ.getDepthWrite(), JJ.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const JJ = this._scene.gn();
            this._cachedColorWriteState = JJ.getColorWrite(), JJ.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const JJ = this._scene.gn();
            this._cachedDepthFunctionState = JJ.getDepthFunction() || 0, JJ.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.gn().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.gn().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.gn().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(JJ) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = JJ, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(JJ) {
          return null
        }
        _clonePlugins(cJ, ZJ) {
          const FJ = {};
          if (this._serializePlugins(FJ), JJ._ParsePlugins(FJ, cJ, this._scene, ZJ), this.pluginManager)
            for (const JJ of this.pluginManager._plugins) {
              const ZJ = cJ.pluginManager.getPlugin(JJ.name);
              ZJ && JJ.copyTo(ZJ)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const JJ = [];
            for (const cJ in this.meshMap) {
              const ZJ = this.meshMap[cJ];
              ZJ && JJ.push(ZJ)
            }
            return JJ
          }
          return this._scene.meshes.filter((JJ => JJ.material === this))
        }
        forceCompilation(JJ, cJ, ZJ, FJ) {
          const UJ = {
              clipPlane: !1,
              useInstances: !1,
              ...ZJ
            },
            eJ = this.Qy(),
            XJ = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const AJ = () => {
            if (!this._scene || !this._scene.gn()) return;
            const ZJ = eJ.clipPlane;
            if (UJ.clipPlane && (eJ.clipPlane = new hJ.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let ZJ = !0,
                eJ = null;
              if (JJ.aE) {
                const cJ = new qJ.e(0, 0, 0, 0, 0, JJ, void 0, !1, !1);
                cJ.materialDefines && (cJ.materialDefines._renderId = -1), this.isReadyForSubMesh(JJ, cJ, UJ.useInstances) || (cJ.effect && cJ.effect.getCompilationError() && cJ.effect.allFallbacksProcessed() ? eJ = cJ.effect.getCompilationError() : (ZJ = !1, setTimeout(AJ, 16)))
              }
              ZJ && (this.allowShaderHotSwapping = XJ, eJ && FJ && FJ(eJ), cJ && cJ(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = XJ, cJ && cJ(this)) : setTimeout(AJ, 16);
            UJ.clipPlane && (eJ.clipPlane = ZJ)
          };
          AJ()
        }
        async forceCompilationAsync(JJ, cJ) {
          return await new Promise(((ZJ, FJ) => {
            this.forceCompilation(JJ, (() => {
              ZJ()
            }), cJ, (JJ => {
              FJ(JJ)
            }))
          }))
        }
        ycJ(cJ) {
          this.Qy().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (JJ._DirtyCallbackArray.length = 0, cJ & JJ.ImageProcessingDirtyFlag && JJ._DirtyCallbackArray.push(JJ._ImageProcessingDirtyCallBack), cJ & JJ.TextureDirtyFlag && JJ._DirtyCallbackArray.push(JJ._TextureDirtyCallBack), cJ & JJ.LightDirtyFlag && JJ._DirtyCallbackArray.push(JJ._LightsDirtyCallBack), cJ & JJ.FresnelDirtyFlag && JJ._DirtyCallbackArray.push(JJ._FresnelDirtyCallBack), cJ & JJ.AttributesDirtyFlag && JJ._DirtyCallbackArray.push(JJ._AttributeDirtyCallBack), cJ & JJ.MiscDirtyFlag && JJ._DirtyCallbackArray.push(JJ._MiscDirtyCallBack), cJ & JJ.PrePassDirtyFlag && JJ._DirtyCallbackArray.push(JJ._PrePassDirtyCallBack), JJ._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(JJ._RunDirtyCallBacks), this.Qy().resetCachedMaterial())
        }
        resetDrawCache() {
          const JJ = this.Qy().meshes;
          for (const cJ of JJ)
            if (cJ.aE)
              for (const JJ of cJ.aE) JJ.dn() === this && JJ.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(JJ) {
          const cJ = this.Qy();
          if (cJ.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ZJ = cJ.meshes;
          for (const FJ of ZJ)
            if (FJ.aE)
              for (const ZJ of FJ.aE) {
                if ((ZJ.dn() || (cJ._hasDefaultMaterial ? cJ.defaultMaterial : null)) === this)
                  for (const cJ of ZJ._drawWrappers) cJ && cJ.defines && cJ.defines.markAllAsDirty && this._materialContext === cJ.materialContext && JJ(cJ.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Qy().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const JJ = this.Qy().enablePrePassRenderer();
          JJ && JJ.ycJ()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(JJ._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(JJ._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(JJ._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(JJ._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(JJ._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(JJ._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(JJ._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(JJ._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(JJ._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(JJ._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const JJ = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Sy.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(JJ)
            }))
          }
        }
        setPrePassRenderer(JJ) {
          return !1
        }
        dispose(JJ, cJ, ZJ) {
          const FJ = this.Qy();
          if (FJ.stopAnimation(this), FJ.freeProcessedMaterials(), FJ.removeMaterial(this), this._eventInfo.forceDisposeTextures = cJ, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const JJ = this._parentContainer.materials.indexOf(this);
            JJ > -1 && this._parentContainer.materials.splice(JJ, 1), this._parentContainer = null
          }
          if (!0 !== ZJ)
            if (this.meshMap)
              for (const UJ in this.meshMap) {
                const JJ = this.meshMap[UJ];
                this._disposeMeshResources(JJ)
              } else {
                const JJ = FJ.meshes;
                for (const cJ of JJ) this._disposeMeshResources(cJ)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Sy.notifyObservers(this), this.Sy.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(JJ) {
          if (!JJ) return;
          const cJ = JJ.geometry,
            ZJ = JJ._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (JJ.aE && ZJ)
              for (const FJ of JJ.aE) {
                const JJ = FJ._drawWrappers;
                for (let UJ = 0; UJ < JJ.length; UJ++) {
                  const eJ = JJ[UJ]?.effect;
                  if (!eJ) continue;
                  ZJ[UJ] === this && (cJ?._releaseVertexArrayObject(eJ), FJ._removeDrawWrapper(UJ, !0, !0))
                }
              }
          } else cJ?._releaseVertexArrayObject(this._drawWrapper.effect);
          JJ.material !== this || JJ.uFJ || (JJ.material = null)
        }
        serialize() {
          const JJ = sJ.c.Serialize(this);
          return JJ.stencil = this.stencil.serialize(), JJ.uniqueId = this.uniqueId, this._serializePlugins(JJ), JJ
        }
        _serializePlugins(JJ) {
          if (JJ.plugins = {}, this.pluginManager)
            for (const cJ of this.pluginManager._plugins) cJ.doNotSerialize || (JJ.plugins[cJ.getClassName()] = cJ.serialize())
        }
        static ParseAlphaMode(JJ, cJ) {
          void 0 !== JJ._alphaMode ? cJ._alphaMode = Array.isArray(JJ._alphaMode) ? [...JJ._alphaMode] : [JJ._alphaMode] : void 0 !== JJ.alphaMode ? cJ._alphaMode = Array.isArray(JJ.alphaMode) ? [...JJ.alphaMode] : [JJ.alphaMode] : cJ._alphaMode = [2]
        }
        static Parse(cJ, ZJ, FJ) {
          if (cJ.customType) {
            if ("BABYLON.PBRMaterial" === cJ.customType && cJ.overloadedAlbedo && (cJ.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return YJ.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else cJ.customType = "BABYLON.StandardMaterial";
          const UJ = eJ.j.Instantiate(cJ.customType).Parse(cJ, ZJ, FJ);
          return UJ._loadedUniqueId = cJ.uniqueId, JJ.ParseAlphaMode(cJ, UJ), UJ
        }
        static _ParsePlugins(JJ, cJ, ZJ, FJ) {
          if (JJ.plugins)
            for (const UJ in JJ.plugins) {
              const XJ = JJ.plugins[UJ];
              let AJ = cJ.pluginManager?.getPlugin(XJ.name);
              if (!AJ) {
                const JJ = eJ.j.Instantiate("BABYLON." + UJ);
                JJ && (AJ = new JJ(cJ))
              }
              AJ?.parse(XJ, ZJ, FJ)
            }
        }
      }, (() => {
        const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], xJ = [(0, UJ.F)()], rJ = [(0, UJ.F)()], vJ = [(0, UJ.F)()], mJ = [(0, UJ.F)()], QJ = [(0, UJ.F)()], EJ = [(0, UJ.F)("alpha")], VJ = [(0, UJ.F)("backFaceCulling")], KJ = [(0, UJ.F)("textureRepetitionMode")], yJ = [(0, UJ.F)("textureRepetitionHexTilingParams")], SJ = [(0, UJ.F)("cullBackFaces")], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], bJ = [(0, UJ.F)()], wJ = [(0, UJ.F)()], WJ = [(0, UJ.F)()], gJ = [(0, UJ.F)()], HJ = [(0, UJ.F)()], PJ = [(0, UJ.F)()], kJ = [(0, UJ.F)("fogEnabled")], pJ = [(0, UJ.F)()], dJ = [(0, UJ.F)()], zJ = [(0, UJ.F)()], NJ = [(0, UJ.F)()], OJ = [(0, UJ.F)()], TJ = [(0, UJ.F)()], CJ = [(0, UJ.F)()], uJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, NJ, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: JJ => "pointsCloud" in JJ,
            get: JJ => JJ.pointsCloud
          },
          metadata: eJ
        }, null, iJ), (0, FJ.d)(JJ, null, OJ, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "fillMode" in JJ,
            get: JJ => JJ.fillMode
          },
          metadata: eJ
        }, null, iJ), (0, FJ.d)(JJ, null, TJ, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useLogarithmicDepth" in JJ,
            get: JJ => JJ.useLogarithmicDepth
          },
          metadata: eJ
        }, null, iJ), (0, FJ.d)(JJ, null, uJ, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "transparencyMode" in JJ,
            get: JJ => JJ.transparencyMode
          },
          metadata: eJ
        }, null, iJ), (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: JJ => "id" in JJ,
            get: JJ => JJ.id,
            set: (JJ, cJ) => {
              JJ.id = cJ
            }
          },
          metadata: eJ
        }, RJ, LJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: JJ => "uniqueId" in JJ,
            get: JJ => JJ.uniqueId,
            set: (JJ, cJ) => {
              JJ.uniqueId = cJ
            }
          },
          metadata: eJ
        }, aJ, BJ), (0, FJ.d)(null, null, xJ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: JJ => "name" in JJ,
            get: JJ => JJ.name,
            set: (JJ, cJ) => {
              JJ.name = cJ
            }
          },
          metadata: eJ
        }, tJ, oJ), (0, FJ.d)(null, null, rJ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metadata" in JJ,
            get: JJ => JJ.metadata,
            set: (JJ, cJ) => {
              JJ.metadata = cJ
            }
          },
          metadata: eJ
        }, lJ, Jc), (0, FJ.d)(null, null, vJ, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: JJ => "checkReadyOnEveryCall" in JJ,
            get: JJ => JJ.checkReadyOnEveryCall,
            set: (JJ, cJ) => {
              JJ.checkReadyOnEveryCall = cJ
            }
          },
          metadata: eJ
        }, cc, Zc), (0, FJ.d)(null, null, mJ, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: JJ => "checkReadyOnlyOnce" in JJ,
            get: JJ => JJ.checkReadyOnlyOnce,
            set: (JJ, cJ) => {
              JJ.checkReadyOnlyOnce = cJ
            }
          },
          metadata: eJ
        }, Fc, Uc), (0, FJ.d)(null, null, QJ, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: JJ => "state" in JJ,
            get: JJ => JJ.state,
            set: (JJ, cJ) => {
              JJ.state = cJ
            }
          },
          metadata: eJ
        }, ec, Xc), (0, FJ.d)(null, null, EJ, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_alpha" in JJ,
            get: JJ => JJ._alpha,
            set: (JJ, cJ) => {
              JJ._alpha = cJ
            }
          },
          metadata: eJ
        }, Ac, qc), (0, FJ.d)(null, null, VJ, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_backFaceCulling" in JJ,
            get: JJ => JJ._backFaceCulling,
            set: (JJ, cJ) => {
              JJ._backFaceCulling = cJ
            }
          },
          metadata: eJ
        }, jc, Yc), (0, FJ.d)(null, null, KJ, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_textureRepetitionMode" in JJ,
            get: JJ => JJ._textureRepetitionMode,
            set: (JJ, cJ) => {
              JJ._textureRepetitionMode = cJ
            }
          },
          metadata: eJ
        }, hc, Dc), (0, FJ.d)(null, null, yJ, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: JJ => "textureRepetitionHexTilingParams" in JJ,
            get: JJ => JJ.textureRepetitionHexTilingParams,
            set: (JJ, cJ) => {
              JJ.textureRepetitionHexTilingParams = cJ
            }
          },
          metadata: eJ
        }, sc, nc), (0, FJ.d)(null, null, SJ, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_cullBackFaces" in JJ,
            get: JJ => JJ._cullBackFaces,
            set: (JJ, cJ) => {
              JJ._cullBackFaces = cJ
            }
          },
          metadata: eJ
        }, Gc, fc), (0, FJ.d)(null, null, IJ, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "sideOrientation" in JJ,
            get: JJ => JJ.sideOrientation,
            set: (JJ, cJ) => {
              JJ.sideOrientation = cJ
            }
          },
          metadata: eJ
        }, xc, rc), (0, FJ.d)(null, null, MJ, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_alphaMode" in JJ,
            get: JJ => JJ._alphaMode,
            set: (JJ, cJ) => {
              JJ._alphaMode = cJ
            }
          },
          metadata: eJ
        }, vc, mc), (0, FJ.d)(null, null, bJ, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_needDepthPrePass" in JJ,
            get: JJ => JJ._needDepthPrePass,
            set: (JJ, cJ) => {
              JJ._needDepthPrePass = cJ
            }
          },
          metadata: eJ
        }, Qc, Ec), (0, FJ.d)(null, null, wJ, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: JJ => "disableDepthWrite" in JJ,
            get: JJ => JJ.disableDepthWrite,
            set: (JJ, cJ) => {
              JJ.disableDepthWrite = cJ
            }
          },
          metadata: eJ
        }, Vc, Kc), (0, FJ.d)(null, null, WJ, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: JJ => "disableColorWrite" in JJ,
            get: JJ => JJ.disableColorWrite,
            set: (JJ, cJ) => {
              JJ.disableColorWrite = cJ
            }
          },
          metadata: eJ
        }, yc, Sc), (0, FJ.d)(null, null, gJ, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: JJ => "forceDepthWrite" in JJ,
            get: JJ => JJ.forceDepthWrite,
            set: (JJ, cJ) => {
              JJ.forceDepthWrite = cJ
            }
          },
          metadata: eJ
        }, Ic, Mc), (0, FJ.d)(null, null, HJ, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "depthFunction" in JJ,
            get: JJ => JJ.depthFunction,
            set: (JJ, cJ) => {
              JJ.depthFunction = cJ
            }
          },
          metadata: eJ
        }, bc, wc), (0, FJ.d)(null, null, PJ, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: JJ => "separateCullingPass" in JJ,
            get: JJ => JJ.separateCullingPass,
            set: (JJ, cJ) => {
              JJ.separateCullingPass = cJ
            }
          },
          metadata: eJ
        }, Wc, gc), (0, FJ.d)(null, null, kJ, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_fogEnabled" in JJ,
            get: JJ => JJ._fogEnabled,
            set: (JJ, cJ) => {
              JJ._fogEnabled = cJ
            }
          },
          metadata: eJ
        }, Hc, Pc), (0, FJ.d)(null, null, pJ, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: JJ => "pointSize" in JJ,
            get: JJ => JJ.pointSize,
            set: (JJ, cJ) => {
              JJ.pointSize = cJ
            }
          },
          metadata: eJ
        }, kc, pc), (0, FJ.d)(null, null, dJ, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: JJ => "zOffset" in JJ,
            get: JJ => JJ.zOffset,
            set: (JJ, cJ) => {
              JJ.zOffset = cJ
            }
          },
          metadata: eJ
        }, dc, zc), (0, FJ.d)(null, null, zJ, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: JJ => "zOffsetUnits" in JJ,
            get: JJ => JJ.zOffsetUnits,
            set: (JJ, cJ) => {
              JJ.zOffsetUnits = cJ
            }
          },
          metadata: eJ
        }, Nc, Oc), (0, FJ.d)(null, null, CJ, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_isVertexOutputInvariant" in JJ,
            get: JJ => JJ._isVertexOutputInvariant,
            set: (JJ, cJ) => {
              JJ._isVertexOutputInvariant = cJ
            }
          },
          metadata: eJ
        }, Tc, Cc), eJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eJ
        })
      })(), JJ.TriangleFillMode = 0, JJ.WireFrameFillMode = 1, JJ.PointFillMode = 2, JJ.PointListDrawMode = 3, JJ.LineListDrawMode = 4, JJ.LineLoopDrawMode = 5, JJ.LineStripDrawMode = 6, JJ.TriangleStripDrawMode = 7, JJ.TriangleFanDrawMode = 8, JJ.ClockWiseSideOrientation = 0, JJ.CounterClockWiseSideOrientation = 1, JJ.ImageProcessingDirtyFlag = 64, JJ.TextureDirtyFlag = 1, JJ.LightDirtyFlag = 2, JJ.FresnelDirtyFlag = 4, JJ.AttributesDirtyFlag = 8, JJ.MiscDirtyFlag = 16, JJ.PrePassDirtyFlag = 32, JJ.AllDirtyFlag = 127, JJ.MATERIAL_OPAQUE = 0, JJ.MATERIAL_ALPHATEST = 1, JJ.MATERIAL_ALPHABLEND = 2, JJ.MATERIAL_ALPHATESTANDBLEND = 3, JJ.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, JJ.MATERIAL_NORMALBLENDMETHOD_RNM = 1, JJ.LIGHTFALLOFF_PHYSICAL = 0, JJ.LIGHTFALLOFF_GLTF = 1, JJ.LIGHTFALLOFF_STANDARD = 2, JJ.OnEventObservable = new XJ.c, JJ.ForceVertexOutputInvariant = !1, JJ._AllDirtyCallBack = JJ => JJ.markAllAsDirty(), JJ._ImageProcessingDirtyCallBack = JJ => JJ.markAsImageProcessingDirty(), JJ._TextureDirtyCallBack = JJ => JJ.markAsTexturesDirty(), JJ._FresnelDirtyCallBack = JJ => JJ.markAsFresnelDirty(), JJ._MiscDirtyCallBack = JJ => JJ.markAsMiscDirty(), JJ._PrePassDirtyCallBack = JJ => JJ.markAsPrePassDirty(), JJ._LightsDirtyCallBack = JJ => JJ.markAsLightDirty(), JJ._AttributeDirtyCallBack = JJ => JJ.markAsAttributesDirty(), JJ._FresnelAndMiscDirtyCallBack = cJ => {
        JJ._FresnelDirtyCallBack(cJ), JJ._MiscDirtyCallBack(cJ)
      }, JJ._TextureAndMiscDirtyCallBack = cJ => {
        JJ._TextureDirtyCallBack(cJ), JJ._MiscDirtyCallBack(cJ)
      }, JJ._DirtyCallbackArray = [], JJ._RunDirtyCallBacks = cJ => {
        for (const ZJ of JJ._DirtyCallbackArray) ZJ(cJ)
      }, JJ
    })();
    Object.getOwnPropertyDescriptor(rJ.prototype, "pluginManager") || Object.defineProperty(rJ.prototype, "pluginManager", (0, xJ.h)("Material", "pluginManager"))
  },
  39100: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ
    });
    var FJ = ZJ(38698);
    class UJ {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(JJ) {
        this._DiffuseTextureEnabled !== JJ && (this._DiffuseTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(JJ) {
        this._BaseWeightTextureEnabled !== JJ && (this._BaseWeightTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(JJ) {
        this._BaseDiffuseRoughnessTextureEnabled !== JJ && (this._BaseDiffuseRoughnessTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(JJ) {
        this._DetailTextureEnabled !== JJ && (this._DetailTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(JJ) {
        this._DecalMapEnabled !== JJ && (this._DecalMapEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(JJ) {
        this._AmbientTextureEnabled !== JJ && (this._AmbientTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(JJ) {
        this._OpacityTextureEnabled !== JJ && (this._OpacityTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(JJ) {
        this._ReflectionTextureEnabled !== JJ && (this._ReflectionTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(JJ) {
        this._EmissiveTextureEnabled !== JJ && (this._EmissiveTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(JJ) {
        this._SpecularTextureEnabled !== JJ && (this._SpecularTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(JJ) {
        this._BumpTextureEnabled !== JJ && (this._BumpTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(JJ) {
        this._LightmapTextureEnabled !== JJ && (this._LightmapTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(JJ) {
        this._RefractionTextureEnabled !== JJ && (this._RefractionTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(JJ) {
        this._ColorGradingTextureEnabled !== JJ && (this._ColorGradingTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(JJ) {
        this._FresnelEnabled !== JJ && (this._FresnelEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(JJ) {
        this._ClearCoatTextureEnabled !== JJ && (this._ClearCoatTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(JJ) {
        this._ClearCoatBumpTextureEnabled !== JJ && (this._ClearCoatBumpTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(JJ) {
        this._ClearCoatTintTextureEnabled !== JJ && (this._ClearCoatTintTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(JJ) {
        this._SheenTextureEnabled !== JJ && (this._SheenTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(JJ) {
        this._AnisotropicTextureEnabled !== JJ && (this._AnisotropicTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(JJ) {
        this._ThicknessTextureEnabled !== JJ && (this._ThicknessTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(JJ) {
        this._RefractionIntensityTextureEnabled !== JJ && (this._RefractionIntensityTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(JJ) {
        this._TranslucencyIntensityTextureEnabled !== JJ && (this._TranslucencyIntensityTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(JJ) {
        this._TranslucencyColorTextureEnabled !== JJ && (this._TranslucencyColorTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(JJ) {
        this._IridescenceTextureEnabled !== JJ && (this._IridescenceTextureEnabled = JJ, FJ.e.MarkAllMaterialsAsDirty(1))
      }
    }
    UJ._DiffuseTextureEnabled = !0, UJ._BaseWeightTextureEnabled = !0, UJ._BaseDiffuseRoughnessTextureEnabled = !0, UJ._DetailTextureEnabled = !0, UJ._DecalMapEnabled = !0, UJ._AmbientTextureEnabled = !0, UJ._OpacityTextureEnabled = !0, UJ._ReflectionTextureEnabled = !0, UJ._EmissiveTextureEnabled = !0, UJ._SpecularTextureEnabled = !0, UJ._BumpTextureEnabled = !0, UJ._LightmapTextureEnabled = !0, UJ._RefractionTextureEnabled = !0, UJ._ColorGradingTextureEnabled = !0, UJ._FresnelEnabled = !0, UJ._ClearCoatTextureEnabled = !0, UJ._ClearCoatBumpTextureEnabled = !0, UJ._ClearCoatTintTextureEnabled = !0, UJ._SheenTextureEnabled = !0, UJ._AnisotropicTextureEnabled = !0, UJ._ThicknessTextureEnabled = !0, UJ._RefractionIntensityTextureEnabled = !0, UJ._TranslucencyIntensityTextureEnabled = !0, UJ._TranslucencyColorTextureEnabled = !0, UJ._IridescenceTextureEnabled = !0
  },
  39087: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      D: () => MJ,
      H: () => sJ,
      I: () => DJ,
      L: () => OJ,
      P: () => kJ,
      T: () => HJ,
      V: () => gJ,
      X: () => vJ,
      Y: () => wJ,
      _: () => TJ,
      cb: () => CJ,
      d: () => WJ,
      e: () => EJ,
      eb: () => uJ,
      gb: () => aJ,
      h: () => hJ,
      i: () => xJ,
      j: () => rJ,
      k: () => SJ,
      kb: () => RJ,
      l: () => qJ,
      m: () => GJ,
      mb: () => LJ,
      o: () => fJ,
      pb: () => nJ,
      q: () => mJ,
      t: () => bJ,
      w: () => QJ,
      z: () => IJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(36192),
      eJ = ZJ(38967),
      XJ = ZJ(39091),
      AJ = ZJ(39100);

    function qJ(JJ, cJ, ZJ) {
      if (!JJ || JJ.LOGARITHMICDEPTH || JJ.indexOf && JJ.indexOf("LOGARITHMICDEPTH") >= 0) {
        const JJ = ZJ.activeCamera;
        1 === JJ.mode && FJ.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), cJ.setFloat("logarithmicDepthConstant", 2 / (Math.log(JJ.maxZ + 1) / Math.LN2))
      }
    }
    const jJ = {
        r: 0,
        g: 0,
        b: 0
      },
      YJ = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function hJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ZJ && JJ.fogEnabled && (!cJ || cJ.applyFog) && 0 !== JJ.fogMode && (ZJ.setFloat4("vFogInfos", JJ.fogMode, JJ.fogStart, JJ.fogEnd, JJ.fogDensity), FJ ? (JJ.fogColor.toLinearSpaceToRef(jJ, JJ.gn().useExactSrgbConversions), ZJ.setColor3("vFogColor", jJ)) : ZJ.setColor3("vFogColor", JJ.fogColor))
    }

    function DJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
      const hJ = JJ.numMaxInfluencers || JJ.numInfluencers;
      return hJ <= 0 ? 0 : (cJ.push("#define MORPHTARGETS"), JJ.hasPositions && cJ.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), JJ.hasNormals && cJ.push("#define MORPHTARGETTEXTURE_HASNORMALS"), JJ.hasTangents && cJ.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), JJ.hasUVs && cJ.push("#define MORPHTARGETTEXTURE_HASUVS"), JJ.hasUV2s && cJ.push("#define MORPHTARGETTEXTURE_HASUV2S"), JJ.hasColors && cJ.push("#define MORPHTARGETTEXTURE_HASCOLORS"), JJ.supportsPositions && UJ && cJ.push("#define MORPHTARGETS_POSITION"), JJ.supportsNormals && eJ && cJ.push("#define MORPHTARGETS_NORMAL"), JJ.supportsTangents && XJ && cJ.push("#define MORPHTARGETS_TANGENT"), JJ.supportsUVs && AJ && cJ.push("#define MORPHTARGETS_UV"), JJ.supportsUV2s && qJ && cJ.push("#define MORPHTARGETS_UV2"), JJ.supportsColors && jJ && cJ.push("#define MORPHTARGETS_COLOR"), cJ.push("#define NUM_MORPH_INFLUENCERS " + hJ), JJ.isUsingTextureForTargets && cJ.push("#define MORPHTARGETS_TEXTURE"), YJ.NUM_MORPH_INFLUENCERS = hJ, YJ.NORMAL = eJ, YJ.TANGENT = XJ, YJ.UV = AJ, YJ.UV2 = qJ, YJ.COLOR = jJ, sJ(ZJ, FJ, YJ, UJ), hJ)
    }

    function sJ(JJ, cJ, ZJ) {
      let eJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const XJ = ZJ.NUM_MORPH_INFLUENCERS;
      if (XJ > 0 && UJ.c.LastCreatedEngine) {
        const AJ = UJ.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          qJ = cJ.morphTargetManager;
        if (qJ?.isUsingTextureForTargets) return;
        const jJ = qJ && qJ.supportsPositions && eJ,
          YJ = qJ && qJ.supportsNormals && ZJ.NORMAL,
          hJ = qJ && qJ.supportsTangents && ZJ.TANGENT,
          DJ = qJ && qJ.supportsUVs && ZJ.UV1,
          sJ = qJ && qJ.supportsUV2s && ZJ.UV2,
          nJ = qJ && qJ.supportsColors && ZJ.VERTEXCOLOR;
        for (let ZJ = 0; ZJ < XJ; ZJ++) jJ && JJ.push("position" + ZJ), YJ && JJ.push("normal" + ZJ), hJ && JJ.push("tangent" + ZJ), DJ && JJ.push("uv_" + ZJ), sJ && JJ.push("uv2_" + ZJ), nJ && JJ.push("color" + ZJ), JJ.length > AJ && FJ.c.Error("Cannot add more vertex attributes for mesh " + cJ.name)
      }
    }

    function nJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      JJ.push("world0"), JJ.push("world1"), JJ.push("world2"), JJ.push("world3"), cJ && (JJ.push("previousWorld0"), JJ.push("previousWorld1"), JJ.push("previousWorld2"), JJ.push("previousWorld3"))
    }

    function GJ(JJ, cJ) {
      const ZJ = JJ.morphTargetManager;
      JJ && ZJ && cJ.setFloatArray("morphTargetInfluences", ZJ.influences)
    }

    function fJ(JJ, cJ) {
      cJ.bindToEffect(JJ, "Scene")
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        YJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        hJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        DJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (JJ.texturesEnabled && UJ && AJ.d.ReflectionTextureEnabled) {
        if (ZJ.Y5("reflectionMatrix", UJ.getReflectionTextureMatrix()), ZJ.updateFloat2("vReflectionInfos", UJ.level * JJ.iblIntensity, DJ), qJ && UJ.boundingBoxSize) {
          const JJ = UJ;
          ZJ.updateVector3("vReflectionPosition", JJ.boundingBoxPosition), ZJ.updateVector3("vReflectionSize", JJ.boundingBoxSize)
        }
        if (eJ) {
          const JJ = UJ.getSize().width;
          ZJ.updateFloat2("vReflectionFilteringInfo", JJ, Math.log2(JJ))
        }
        if (YJ && !cJ.USEIRRADIANCEMAP) {
          const JJ = UJ.sphericalPolynomial;
          if (cJ.USESPHERICALFROMREFLECTIONMAP && JJ)
            if (cJ.SPHERICAL_HARMONICS) {
              const cJ = JJ.preScaledHarmonics;
              ZJ.updateVector3("vSphericalL00", cJ.l00), ZJ.updateVector3("vSphericalL1_1", cJ.l1_1), ZJ.updateVector3("vSphericalL10", cJ.l10), ZJ.updateVector3("vSphericalL11", cJ.l11), ZJ.updateVector3("vSphericalL2_2", cJ.l2_2), ZJ.updateVector3("vSphericalL2_1", cJ.l2_1), ZJ.updateVector3("vSphericalL20", cJ.l20), ZJ.updateVector3("vSphericalL21", cJ.l21), ZJ.updateVector3("vSphericalL22", cJ.l22)
            } else ZJ.updateFloat3("vSphericalX", JJ.x.x, JJ.x.y, JJ.x.z), ZJ.updateFloat3("vSphericalY", JJ.y.x, JJ.y.y, JJ.y.z), ZJ.updateFloat3("vSphericalZ", JJ.z.x, JJ.z.y, JJ.z.z), ZJ.updateFloat3("vSphericalXX_ZZ", JJ.xx.x - JJ.zz.x, JJ.xx.y - JJ.zz.y, JJ.xx.z - JJ.zz.z), ZJ.updateFloat3("vSphericalYY_ZZ", JJ.yy.x - JJ.zz.x, JJ.yy.y - JJ.zz.y, JJ.yy.z - JJ.zz.z), ZJ.updateFloat3("vSphericalZZ", JJ.zz.x, JJ.zz.y, JJ.zz.z), ZJ.updateFloat3("vSphericalXY", JJ.xy.x, JJ.xy.y, JJ.xy.z), ZJ.updateFloat3("vSphericalYZ", JJ.yz.x, JJ.yz.y, JJ.yz.z), ZJ.updateFloat3("vSphericalZX", JJ.zx.x, JJ.zx.y, JJ.zx.z)
        } else jJ && cJ.USEIRRADIANCEMAP && cJ.USE_IRRADIANCE_DOMINANT_DIRECTION && UJ.irradianceTexture && ZJ.updateVector3("vReflectionDominantDirection", UJ.irradianceTexture._dominantDirection);
        XJ && ZJ.updateFloat3("vReflectionMicrosurfaceInfos", UJ.getSize().width, UJ.lodGenerationScale, UJ.lodGenerationOffset)
      }
      hJ && ZJ.updateColor3("vReflectionColor", FJ)
    }

    function rJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (FJ && AJ.d.ReflectionTextureEnabled) {
        cJ.LODBASEDMICROSFURACE ? ZJ.setTexture("reflectionSampler", FJ) : (ZJ.setTexture("reflectionSampler", FJ._lodTextureMid || FJ), ZJ.setTexture("reflectionSamplerLow", FJ._lodTextureLow || FJ), ZJ.setTexture("reflectionSamplerHigh", FJ._lodTextureHigh || FJ)), cJ.USEIRRADIANCEMAP && ZJ.setTexture("irradianceSampler", FJ.irradianceTexture);
        const eJ = JJ.iblCdfGenerator;
        UJ && eJ && ZJ.setTexture("icdfSampler", eJ.getIcdfTexture())
      }
    }

    function vJ(JJ, cJ, ZJ) {
      cJ._needUVs = !0, cJ[ZJ] = !0, JJ.optimizeUVAllocation && JJ.getTextureMatrix().isIdentityAs3x2() ? (cJ[ZJ + "DIRECTUV"] = JJ.coordinatesIndex + 1, cJ["MAINUV" + (JJ.coordinatesIndex + 1)] = !0) : cJ[ZJ + "DIRECTUV"] = 0
    }

    function mJ(JJ, cJ, ZJ) {
      const FJ = JJ.getTextureMatrix();
      cJ.Y5(ZJ + "Matrix", FJ)
    }

    function QJ(JJ, cJ, ZJ) {
      ZJ.BAKED_VERTEX_ANIMATION_TEXTURE && ZJ.INSTANCES && JJ.push("bakedVertexAnimationSettingsInstanced")
    }

    function EJ(JJ, cJ, ZJ) {
      var FJ;
      if (cJ && JJ && (JJ.computeBonesUsingShaders && cJ._bonesComputationForcedToCPU && (JJ.computeBonesUsingShaders = !1), JJ.useBones && JJ.computeBonesUsingShaders && JJ.skeleton)) {
        const UJ = JJ.skeleton;
        if (UJ.isUsingTextureForMatrices && cJ.getUniformIndex("boneTextureInfo") > -1) {
          const ZJ = UJ.getTransformMatrixTexture(JJ);
          cJ.setTexture("boneSampler", ZJ), cJ.setFloat2("boneTextureInfo", UJ._textureWidth, UJ._textureHeight)
        } else {
          const eJ = UJ.getTransformMatrices(JJ);
          eJ && (cJ.setMatrices("mBones", eJ), ZJ && JJ.Qy().prePassRenderer && JJ.Qy().prePassRenderer.getIndex(2) && (ZJ.previousBones[JJ.uniqueId] || (ZJ.previousBones[JJ.uniqueId] = eJ.slice()), cJ.setMatrices("mPreviousBones", ZJ.previousBones[JJ.uniqueId]), FJ = eJ, ZJ.previousBones[JJ.uniqueId].set(FJ)))
        }
      }
    }

    function VJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      JJ._bindLight(cJ, ZJ, FJ, UJ, eJ)
    }
    const KJ = 4,
      yJ = new WeakMap;

    function SJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const eJ = Math.min(cJ.lightSources.length, UJ);
      for (let XJ = 0; XJ < eJ; XJ++) {
        VJ(cJ.lightSources[XJ], XJ, JJ, ZJ, "boolean" === typeof FJ ? FJ : FJ.SPECULARTERM, cJ.receiveShadows)
      }
    }

    function IJ(JJ, cJ, ZJ, FJ) {
      ZJ.NUM_BONE_INFLUENCERS > 0 && (FJ.addCPUSkinningFallback(0, cJ), JJ.push("matricesIndices"), JJ.push("matricesWeights"), ZJ.NUM_BONE_INFLUENCERS > 4 && (JJ.push("matricesIndicesExtra"), JJ.push("matricesWeightsExtra")))
    }

    function MJ(JJ, cJ) {
      (cJ.INSTANCES || cJ.THIN_INSTANCES) && nJ(JJ, !!cJ.PREPASS_VELOCITY), cJ.INSTANCESCOLOR && JJ.push("instanceColor")
    }

    function bJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        UJ = 0;
      for (let eJ = 0; eJ < ZJ && JJ["LIGHT" + eJ]; eJ++) eJ > 0 && (UJ = FJ + eJ, cJ.addFallback(UJ, "LIGHT" + eJ)), JJ.SHADOWS || (JJ["SHADOW" + eJ] && cJ.addFallback(FJ, "SHADOW" + eJ), JJ["SHADOWPCF" + eJ] && cJ.addFallback(FJ, "SHADOWPCF" + eJ), JJ["SHADOWPCSS" + eJ] && cJ.addFallback(FJ, "SHADOWPCSS" + eJ), JJ["SHADOWPOISSON" + eJ] && cJ.addFallback(FJ, "SHADOWPOISSON" + eJ), JJ["SHADOWESM" + eJ] && cJ.addFallback(FJ, "SHADOWESM" + eJ), JJ["SHADOWCLOSEESM" + eJ] && cJ.addFallback(FJ, "SHADOWCLOSEESM" + eJ));
      return UJ
    }

    function wJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      let AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        jJ = arguments.length > 9 ? arguments[9] : void 0,
        YJ = arguments.length > 10 ? arguments[10] : void 0;
      if (XJ._areMiscDirty) {
        XJ.LOGARITHMICDEPTH = ZJ, XJ.POINTSIZE = FJ, XJ.FOG = UJ && function(JJ, cJ) {
          return cJ.fogEnabled && JJ.applyFog && 0 !== cJ.fogMode
        }(JJ, cJ), XJ.NONUNIFORMSCALING = JJ.nonUniformScaling, XJ.ALPHATEST = eJ, XJ.DECAL_AFTER_DETAIL = AJ, XJ.USE_VERTEX_PULLING = qJ, XJ.RIGHT_HANDED = cJ.useRightHandedSystem;
        const hJ = qJ ? jJ?.geometry?.getIndexBuffer() : null,
          DJ = !!jJ && jJ.isUnIndexed;
        XJ.VERTEX_PULLING_USE_INDEX_BUFFER = !!hJ && !DJ, XJ.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!hJ || DJ) && hJ.is32Bits, XJ.VERTEXOUTPUT_INVARIANT = !!YJ
      }
    }

    function WJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!JJ.lightsEnabled || FJ) return !0;
      const UJ = cJ.lightSources,
        eJ = Math.min(UJ.length, ZJ);
      for (let XJ = 0; XJ < eJ; XJ++)
        if (!UJ[XJ].areLightTexturesReady()) return !1;
      return !0
    }

    function gJ(JJ, cJ, ZJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ZJ._areLightsDirty) return ZJ._needNormals;
      const AJ = eJ;
      eJ = function(JJ, cJ) {
        const ZJ = JJ.gn().getCaps().maxUniformBuffersPerShaderStage;
        if (null == ZJ) return cJ;
        const FJ = Math.max(ZJ - KJ, 1);
        return Math.min(cJ, FJ)
      }(JJ, eJ);
      let qJ = 0;
      const jJ = {
        needNormals: ZJ._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (JJ.lightsEnabled && !XJ) {
        cJ.lightSources.length > eJ && eJ < AJ && function(JJ, cJ, ZJ, UJ) {
          let eJ = yJ.get(JJ);
          eJ || (eJ = new Set, yJ.set(JJ, eJ)), eJ.has(UJ) || (eJ.add(UJ), FJ.c.Warn(`maxSimultaneousLights is ${cJ} but this engine supports at most ${ZJ} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${UJ} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${UJ+KJ} uniform buffers, over the device limit of ${JJ.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${ZJ}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${ZJ} or less to silence this warning.`))
        }(JJ.gn(), AJ, eJ, Math.min(cJ.lightSources.length, AJ));
        for (const FJ of cJ.lightSources)
          if (PJ(JJ, cJ, FJ, qJ, ZJ, UJ, jJ), qJ++, qJ === eJ) break
      }
      ZJ.SPECULARTERM = jJ.specularEnabled, ZJ.SHADOWS = jJ.shadowEnabled;
      const YJ = Math.max(eJ, ZJ.MAXLIGHTCOUNT || 0);
      for (let FJ = qJ; FJ < YJ; FJ++) void 0 !== ZJ["LIGHT" + FJ] && (ZJ["LIGHT" + FJ] = !1, ZJ["HEMILIGHT" + FJ] = !1, ZJ["POINTLIGHT" + FJ] = !1, ZJ["DIRLIGHT" + FJ] = !1, ZJ["SPOTLIGHT" + FJ] = !1, ZJ["AREALIGHT" + FJ] = !1, ZJ["CLUSTLIGHT" + FJ] = !1, ZJ["SHADOW" + FJ] = !1, ZJ["SHADOWCSM" + FJ] = !1, ZJ["SHADOWCSMDEBUG" + FJ] = !1, ZJ["SHADOWCSMNUM_CASCADES" + FJ] = !1, ZJ["SHADOWCSMUSESHADOWMAXZ" + FJ] = !1, ZJ["SHADOWCSMNOBLEND" + FJ] = !1, ZJ["SHADOWCSM_RIGHTHANDED" + FJ] = !1, ZJ["SHADOWPCF" + FJ] = !1, ZJ["SHADOWPCSS" + FJ] = !1, ZJ["SHADOWPOISSON" + FJ] = !1, ZJ["SHADOWESM" + FJ] = !1, ZJ["SHADOWCLOSEESM" + FJ] = !1, ZJ["SHADOWCUBE" + FJ] = !1, ZJ["SHADOWLOWQUALITY" + FJ] = !1, ZJ["SHADOWMEDIUMQUALITY" + FJ] = !1);
      ZJ.LIGHTCOUNT = qJ, ZJ.MAXLIGHTCOUNT = eJ;
      const hJ = JJ.gn().getCaps();
      return void 0 === ZJ.SHADOWFLOAT && (jJ.needRebuild = !0), ZJ.SHADOWFLOAT = jJ.shadowEnabled && (hJ.textureFloatRender && hJ.textureFloatLinearFiltering || hJ.textureHalfFloatRender && hJ.textureHalfFloatLinearFiltering), ZJ.LIGHTMAPEXCLUDED = jJ.lightmapMode, jJ.needRebuild && ZJ.rebuild(), jJ.needNormals
    }

    function HJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (cJ && AJ.d.ReflectionTextureEnabled) {
        if (!cJ.isReadyOrNotBlocking()) return !1;
        ZJ._needNormals = !0, ZJ.REFLECTION = !0, ZJ.GAMMAREFLECTION = cJ.gammaSpace, ZJ.RGBDREFLECTION = cJ.isRGBD, ZJ.LODINREFLECTIONALPHA = cJ.lodLevelInAlpha, ZJ.LINEARSPECULARREFLECTION = cJ.linearSpecularLOD, ZJ.USEIRRADIANCEMAP = !1, ZJ.LODBASEDMICROSFURACE = JJ.gn().getCaps().textureLOD;
        const XJ = JJ.gn();
        switch (FJ && UJ > 0 ? (ZJ.NUM_SAMPLES = "" + UJ, XJ._features.needTypeSuffixInShaderConstants && (ZJ.NUM_SAMPLES = ZJ.NUM_SAMPLES + "u"), ZJ.REALTIME_FILTERING = !0, JJ.iblCdfGenerator && (ZJ.IBL_CDF_FILTERING = !0)) : ZJ.REALTIME_FILTERING = !1, ZJ.INVERTCUBICMAP = 6 === cJ.coordinatesMode, ZJ.REFLECTIONMAP_3D = cJ.isCube, ZJ.REFLECTIONMAP_OPPOSITEZ = ZJ.REFLECTIONMAP_3D && JJ.useRightHandedSystem ? !cJ.invertZ : cJ.invertZ, ZJ.REFLECTIONMAP_CUBIC = !1, ZJ.REFLECTIONMAP_EXPLICIT = !1, ZJ.REFLECTIONMAP_PLANAR = !1, ZJ.REFLECTIONMAP_PROJECTION = !1, ZJ.REFLECTIONMAP_SKYBOX = !1, ZJ.REFLECTIONMAP_SPHERICAL = !1, ZJ.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZJ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZJ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, cJ.coordinatesMode) {
          case 0:
            ZJ.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            ZJ.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            ZJ.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            ZJ.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            ZJ.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            ZJ.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            ZJ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            ZJ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            ZJ.REFLECTIONMAP_CUBIC = !0, ZJ.USE_LOCAL_REFLECTIONMAP_CUBIC = !!cJ.boundingBoxSize
        }
        5 !== cJ.coordinatesMode && (cJ.irradianceTexture ? (ZJ.USEIRRADIANCEMAP = !0, ZJ.USESPHERICALFROMREFLECTIONMAP = !1, ZJ.USESPHERICALINVERTEX = !1, cJ.irradianceTexture._dominantDirection ? ZJ.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : ZJ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : cJ.isCube && (ZJ.USESPHERICALFROMREFLECTIONMAP = !0, ZJ.USEIRRADIANCEMAP = !1, ZJ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZJ.USESPHERICALINVERTEX = eJ))
      } else ZJ.REFLECTION = !1, ZJ.REFLECTIONMAP_3D = !1, ZJ.REFLECTIONMAP_SPHERICAL = !1, ZJ.REFLECTIONMAP_PLANAR = !1, ZJ.REFLECTIONMAP_CUBIC = !1, ZJ.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, ZJ.REFLECTIONMAP_PROJECTION = !1, ZJ.REFLECTIONMAP_SKYBOX = !1, ZJ.REFLECTIONMAP_EXPLICIT = !1, ZJ.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZJ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZJ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ZJ.INVERTCUBICMAP = !1, ZJ.USESPHERICALFROMREFLECTIONMAP = !1, ZJ.USEIRRADIANCEMAP = !1, ZJ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZJ.USESPHERICALINVERTEX = !1, ZJ.REFLECTIONMAP_OPPOSITEZ = !1, ZJ.LODINREFLECTIONALPHA = !1, ZJ.GAMMAREFLECTION = !1, ZJ.RGBDREFLECTION = !1, ZJ.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function PJ(JJ, cJ, ZJ, FJ, UJ, XJ, AJ) {
      switch (AJ.needNormals = !0, void 0 === UJ["LIGHT" + FJ] && (AJ.needRebuild = !0), UJ["LIGHT" + FJ] = !0, UJ["SPOTLIGHT" + FJ] = !1, UJ["HEMILIGHT" + FJ] = !1, UJ["POINTLIGHT" + FJ] = !1, UJ["DIRLIGHT" + FJ] = !1, UJ["AREALIGHT" + FJ] = !1, UJ["CLUSTLIGHT" + FJ] = !1, ZJ.prepareLightSpecificDefines(UJ, FJ), UJ["LIGHT_FALLOFF_PHYSICAL" + FJ] = !1, UJ["LIGHT_FALLOFF_GLTF" + FJ] = !1, UJ["LIGHT_FALLOFF_STANDARD" + FJ] = !1, ZJ.falloffType) {
        case eJ.d.FALLOFF_GLTF:
          UJ["LIGHT_FALLOFF_GLTF" + FJ] = !0;
          break;
        case eJ.d.FALLOFF_PHYSICAL:
          UJ["LIGHT_FALLOFF_PHYSICAL" + FJ] = !0;
          break;
        case eJ.d.FALLOFF_STANDARD:
          UJ["LIGHT_FALLOFF_STANDARD" + FJ] = !0
      }
      if (XJ && !ZJ.specular.equalsFloats(0, 0, 0) && (AJ.specularEnabled = !0), UJ["SHADOW" + FJ] = !1, UJ["SHADOWCSM" + FJ] = !1, UJ["SHADOWCSMDEBUG" + FJ] = !1, UJ["SHADOWCSMNUM_CASCADES" + FJ] = !1, UJ["SHADOWCSMUSESHADOWMAXZ" + FJ] = !1, UJ["SHADOWCSMNOBLEND" + FJ] = !1, UJ["SHADOWCSM_RIGHTHANDED" + FJ] = !1, UJ["SHADOWPCF" + FJ] = !1, UJ["SHADOWPCSS" + FJ] = !1, UJ["SHADOWPOISSON" + FJ] = !1, UJ["SHADOWESM" + FJ] = !1, UJ["SHADOWCLOSEESM" + FJ] = !1, UJ["SHADOWCUBE" + FJ] = !1, UJ["SHADOWLOWQUALITY" + FJ] = !1, UJ["SHADOWMEDIUMQUALITY" + FJ] = !1, cJ && cJ.receiveShadows && JJ.shadowsEnabled && ZJ.shadowEnabled) {
        const cJ = ZJ.getShadowGenerator(JJ.activeCamera) ?? ZJ.getShadowGenerator();
        if (cJ) {
          const JJ = cJ.getShadowMap();
          JJ && JJ.renderList && JJ.renderList.length > 0 && (AJ.shadowEnabled = !0, cJ.prepareDefines(UJ, FJ))
        }
      }
      ZJ.lightmapMode != eJ.d.LIGHTMAP_DEFAULT ? (AJ.lightmapMode = !0, UJ["LIGHTMAPEXCLUDED" + FJ] = !0, UJ["LIGHTMAPNOSPECULAR" + FJ] = ZJ.lightmapMode == eJ.d.LIGHTMAP_SHADOWSONLY) : (UJ["LIGHTMAPEXCLUDED" + FJ] = !1, UJ["LIGHTMAPNOSPECULAR" + FJ] = !1)
    }

    function kJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qJ = function(JJ, cJ) {
          let ZJ = !1;
          if (JJ.activeCamera) {
            const FJ = cJ.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              UJ = cJ.CAMERA_PERSPECTIVE ? 1 : 0,
              eJ = 1 === JJ.activeCamera.mode ? 1 : 0,
              XJ = 0 === JJ.activeCamera.mode ? 1 : 0;
            (FJ ^ eJ || UJ ^ XJ) && (cJ.CAMERA_ORTHOGRAPHIC = 1 === eJ, cJ.CAMERA_PERSPECTIVE = 1 === XJ, ZJ = !0)
          }
          return ZJ
        }(JJ, FJ);
      !1 !== eJ && (qJ = (0, XJ.h)(ZJ, JJ, FJ)), FJ.DEPTHPREPASS !== !cJ.getColorWrite() && (FJ.DEPTHPREPASS = !FJ.DEPTHPREPASS, qJ = !0), FJ.INSTANCES !== UJ && (FJ.INSTANCES = UJ, qJ = !0), FJ.THIN_INSTANCES !== AJ && (FJ.THIN_INSTANCES = AJ, qJ = !0), qJ && FJ.markAsUnprocessed()
    }
    const pJ = 40,
      dJ = 64,
      zJ = new WeakMap,
      NJ = new WeakSet;

    function OJ(JJ, cJ, ZJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        XJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        AJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!cJ._areAttributesDirty && cJ._needNormals === cJ._normals && cJ._needUVs === cJ._uvs) return !1;
      cJ._normals = cJ._needNormals, cJ._uvs = cJ._needUVs, cJ.NORMAL = cJ._needNormals && JJ.isVerticesDataPresent("normal"), cJ._needNormals && JJ.isVerticesDataPresent("tangent") && (cJ.TANGENT = !0);
      for (let FJ = 1; FJ <= 6; ++FJ) cJ["UV" + FJ] = !!cJ._needUVs && JJ.isVerticesDataPresent(`uv${1===FJ?"":FJ}`);
      if (ZJ) {
        const ZJ = JJ.useVertexColors && JJ.isVerticesDataPresent("color");
        cJ.VERTEXCOLOR = ZJ, cJ.VERTEXALPHA = JJ.hasVertexAlpha && ZJ && XJ
      }
      return JJ.isVerticesDataPresent("instanceColor") && (JJ.CFJ || JJ.hasThinInstances) && (cJ.INSTANCESCOLOR = !0), UJ && function(JJ, cJ) {
        if (JJ.useBones && JJ.computeBonesUsingShaders && JJ.skeleton) {
          cJ.NUM_BONE_INFLUENCERS = JJ.numBoneInfluencers;
          const ZJ = void 0 !== cJ.BONETEXTURE;
          if (JJ.skeleton.isUsingTextureForMatrices && ZJ) cJ.BONETEXTURE = !0;
          else {
            cJ.BonesPerMesh = JJ.skeleton.bones.length + 1, cJ.BONETEXTURE = !ZJ && void 0;
            const UJ = JJ.Qy(),
              eJ = UJ.prePassRenderer;
            if (eJ && eJ.enabled) {
              const ZJ = -1 === eJ.excludedSkinnedMesh.indexOf(JJ);
              cJ.BONES_VELOCITY_ENABLED = ZJ
            }
            const XJ = !0 === cJ.MULTIVIEW,
              AJ = 2 * cJ.BonesPerMesh + (XJ ? 1 : 0);
            if (zJ.get(JJ.skeleton) !== AJ) {
              zJ.set(JJ.skeleton, AJ);
              const ZJ = UJ.gn().getCaps().maxVertexUniformVectors;
              if (ZJ && !NJ.has(JJ.skeleton)) {
                const UJ = 4 * cJ.BonesPerMesh,
                  eJ = XJ ? dJ : pJ,
                  AJ = Math.max(ZJ - eJ, 0);
                (UJ > AJ || XJ && 3 * UJ > ZJ) && (NJ.add(JJ.skeleton), FJ.c.Warn(`Skeleton "${JJ.skeleton.name}": ${JJ.skeleton.bones.length} bones stored as vertex uniforms use ${UJ} of ~${AJ} usable uniform vectors${XJ?" (multiview)":""} on a device reporting ${ZJ}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else cJ.NUM_BONE_INFLUENCERS = 0, cJ.BonesPerMesh = 0, void 0 !== cJ.BONETEXTURE && (cJ.BONETEXTURE = !1)
      }(JJ, cJ), eJ && function(JJ, cJ) {
        const ZJ = JJ.morphTargetManager;
        ZJ ? (cJ.MORPHTARGETS_UV = ZJ.supportsUVs && cJ.UV1, cJ.MORPHTARGETS_UV2 = ZJ.supportsUV2s && cJ.UV2, cJ.MORPHTARGETS_TANGENT = ZJ.supportsTangents && cJ.TANGENT, cJ.MORPHTARGETS_NORMAL = ZJ.supportsNormals && cJ.NORMAL, cJ.MORPHTARGETS_POSITION = ZJ.supportsPositions, cJ.MORPHTARGETS_COLOR = ZJ.supportsColors, cJ.MORPHTARGETTEXTURE_HASUVS = ZJ.hasUVs, cJ.MORPHTARGETTEXTURE_HASUV2S = ZJ.hasUV2s, cJ.MORPHTARGETTEXTURE_HASTANGENTS = ZJ.hasTangents, cJ.MORPHTARGETTEXTURE_HASNORMALS = ZJ.hasNormals, cJ.MORPHTARGETTEXTURE_HASPOSITIONS = ZJ.hasPositions, cJ.MORPHTARGETTEXTURE_HASCOLORS = ZJ.hasColors, cJ.NUM_MORPH_INFLUENCERS = ZJ.numMaxInfluencers || ZJ.numInfluencers, cJ.MORPHTARGETS = cJ.NUM_MORPH_INFLUENCERS > 0, cJ.MORPHTARGETS_TEXTURE = ZJ.isUsingTextureForTargets) : (cJ.MORPHTARGETS_UV = !1, cJ.MORPHTARGETS_UV2 = !1, cJ.MORPHTARGETS_TANGENT = !1, cJ.MORPHTARGETS_NORMAL = !1, cJ.MORPHTARGETS_POSITION = !1, cJ.MORPHTARGETS_COLOR = !1, cJ.MORPHTARGETTEXTURE_HASUVS = !1, cJ.MORPHTARGETTEXTURE_HASUV2S = !1, cJ.MORPHTARGETTEXTURE_HASTANGENTS = !1, cJ.MORPHTARGETTEXTURE_HASNORMALS = !1, cJ.MORPHTARGETTEXTURE_HASPOSITIONS = !1, cJ.MORPHTARGETTEXTURE_HAS_COLORS = !1, cJ.MORPHTARGETS = !1, cJ.NUM_MORPH_INFLUENCERS = 0)
      }(JJ, cJ), AJ && function(JJ, cJ) {
        const ZJ = JJ.bakedVertexAnimationManager;
        cJ.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ZJ || !ZJ.isEnabled)
      }(JJ, cJ), !0
    }

    function TJ(JJ, cJ) {
      if (JJ.activeCamera) {
        const ZJ = cJ.MULTIVIEW;
        cJ.MULTIVIEW = null !== JJ.activeCamera.outputRenderTarget && JJ.activeCamera.outputRenderTarget.getViewCount() > 1, cJ.MULTIVIEW != ZJ && cJ.markAsUnprocessed()
      }
    }

    function CJ(JJ, cJ, ZJ) {
      const FJ = cJ.ORDER_INDEPENDENT_TRANSPARENCY,
        UJ = cJ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      cJ.ORDER_INDEPENDENT_TRANSPARENCY = JJ.useOrderIndependentTransparency && ZJ, cJ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !JJ.gn().getCaps().textureFloatLinearFiltering, FJ === cJ.ORDER_INDEPENDENT_TRANSPARENCY && UJ === cJ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || cJ.markAsUnprocessed()
    }

    function uJ(JJ, cJ, ZJ) {
      const FJ = cJ.PREPASS;
      if (!cJ._arePrePassDirty) return;
      const UJ = [{
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
      if (JJ.prePassRenderer && JJ.prePassRenderer.enabled && ZJ) {
        cJ.PREPASS = !0, cJ.SCENE_MRT_COUNT = JJ.prePassRenderer.mrtCount, cJ.PREPASS_NORMAL_WORLDSPACE = JJ.prePassRenderer.generateNormalsInWorldSpace, cJ.PREPASS_COLOR = !0, cJ.PREPASS_COLOR_INDEX = 0;
        for (let ZJ = 0; ZJ < UJ.length; ZJ++) {
          const FJ = JJ.prePassRenderer.getIndex(UJ[ZJ].type); - 1 !== FJ ? (cJ[UJ[ZJ].define] = !0, cJ[UJ[ZJ].index] = FJ) : cJ[UJ[ZJ].define] = !1
        }
      } else {
        cJ.PREPASS = !1;
        for (let JJ = 0; JJ < UJ.length; JJ++) cJ[UJ[JJ].define] = !1
      }
      cJ.PREPASS != FJ && (cJ.markAsUnprocessed(), cJ.markAsImageProcessingDirty())
    }

    function iJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        jJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      UJ && UJ.push("Light" + JJ), eJ || (cJ.push("vLightData" + JJ, "vLightDiffuse" + JJ, "vLightSpecular" + JJ, "vLightDirection" + JJ, "vLightWidth" + JJ, "vLightHeight" + JJ, "vLightFalloff" + JJ, "vLightGround" + JJ, "vSliceData" + JJ, "vSliceRanges" + JJ, "lightMatrix" + JJ, "shadowsInfo" + JJ, "depthValues" + JJ), ZJ.push("shadowTexture" + JJ), ZJ.push("depthTexture" + JJ), cJ.push("viewFrustumZ" + JJ, "cascadeBlendFactor" + JJ, "lightSizeUVCorrection" + JJ, "depthCorrection" + JJ, "penumbraDarkness" + JJ, "frustumLengths" + JJ), FJ && (ZJ.push("projectionLightTexture" + JJ), cJ.push("textureProjectionMatrix" + JJ)), XJ && ZJ.push("iesLightTexture" + JJ), qJ && ZJ.push("rectAreaLightEmissionTexture" + JJ), AJ && (ZJ.push("lightDataTexture" + JJ), jJ || ZJ.push("tileMaskTexture" + JJ)))
    }

    function RJ(JJ, cJ, ZJ) {
      const FJ = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      ZJ && FJ.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), JJ.push(...FJ);
      cJ.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function LJ(JJ, cJ, ZJ) {
      let FJ, UJ, eJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        XJ = null;
      if (JJ.uniformsNames) {
        const AJ = JJ;
        FJ = AJ.uniformsNames, UJ = AJ.uniformBuffersNames, cJ = AJ.samplers, ZJ = AJ.defines, eJ = AJ.maxSimultaneousLights || 0, XJ = AJ.shaderLanguage ?? null
      } else FJ = JJ, cJ || (cJ = []);
      for (let AJ = 0; AJ < eJ && ZJ["LIGHT" + AJ]; AJ++) iJ(AJ, FJ, cJ, ZJ["PROJECTEDLIGHTTEXTURE" + AJ], UJ, !1, ZJ["IESLIGHTTEXTURE" + AJ], ZJ["CLUSTLIGHT" + AJ], ZJ["RECTAREALIGHTEMISSIONTEXTURE" + AJ], 1 === XJ);
      ZJ.NUM_MORPH_INFLUENCERS && (FJ.push("morphTargetInfluences"), FJ.push("morphTargetCount")), ZJ.BAKED_VERTEX_ANIMATION_TEXTURE && (FJ.push("bakedVertexAnimationSettings"), FJ.push("bakedVertexAnimationTextureSizeInverted"), FJ.push("bakedVertexAnimationTime"), cJ.push("bakedVertexAnimationTexture"))
    }

    function aJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      JJ.addUniform("vReflectionInfos", 2), JJ.addUniform("reflectionMatrix", 16), cJ && JJ.addUniform("vReflectionMicrosurfaceInfos", 3), ZJ && (JJ.addUniform("vReflectionPosition", 3), JJ.addUniform("vReflectionSize", 3)), FJ && (JJ.addUniform("vReflectionFilteringInfo", 2), JJ.addUniform("vReflectionDominantDirection", 3)), eJ && JJ.addUniform("vReflectionColor", 3), UJ && (JJ.addUniform("vSphericalL00", 3), JJ.addUniform("vSphericalL1_1", 3), JJ.addUniform("vSphericalL10", 3), JJ.addUniform("vSphericalL11", 3), JJ.addUniform("vSphericalL2_2", 3), JJ.addUniform("vSphericalL2_1", 3), JJ.addUniform("vSphericalL20", 3), JJ.addUniform("vSphericalL21", 3), JJ.addUniform("vSphericalL22", 3), JJ.addUniform("vSphericalX", 3), JJ.addUniform("vSphericalY", 3), JJ.addUniform("vSphericalZ", 3), JJ.addUniform("vSphericalXX_ZZ", 3), JJ.addUniform("vSphericalYY_ZZ", 3), JJ.addUniform("vSphericalZZ", 3), JJ.addUniform("vSphericalXY", 3), JJ.addUniform("vSphericalYZ", 3), JJ.addUniform("vSphericalZX", 3))
    }
  },
  39106: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(39049);
    class eJ extends UJ.c {
      constructor(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(JJ, cJ, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new FJ.b, this._storeEffectOnSubMeshes = ZJ
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(JJ, cJ) {
        return !!JJ && (!this._storeEffectOnSubMeshes || (!JJ.aE || 0 === JJ.aE.length || this.isReadyForSubMesh(JJ, JJ.aE[0], cJ)))
      }
      _isReadyForSubMesh(JJ) {
        const cJ = JJ.materialDefines;
        return !(this.checkReadyOnEveryCall || !JJ.effect || !cJ || cJ._renderId !== this.Qy().getRenderId())
      }
      bindOnlyWorldMatrix(JJ) {
        this._activeEffect.setMatrix("world", JJ)
      }
      bindOnlyNormalMatrix(JJ) {
        this._activeEffect.setMatrix("normalMatrix", JJ)
      }
      bind(JJ, cJ) {
        cJ && this.bindForSubMesh(JJ, cJ, cJ.aE[0])
      }
      _afterBind(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(JJ, cJ, ZJ), this.Qy()._cachedEffect = cJ, ZJ ? ZJ._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return ZJ._drawWrapper._forceRebindOnNextCall || JJ.isCachedMaterialInvalid(this, cJ, FJ)
      }
      dispose(JJ, cJ, ZJ) {
        this._activeEffect = void 0, super.dispose(JJ, cJ, ZJ)
      }
    }
  },
  39128: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    const FJ = new WeakMap;

    function UJ(JJ) {
      const cJ = JJ.getVertexBuffers();
      if (!cJ) return null;
      let ZJ = FJ.get(JJ);
      if (ZJ) {
        let JJ = !1;
        for (const FJ in cJ)
          if (!ZJ.has(FJ)) {
            JJ = !0;
            break
          } if (!JJ) return ZJ
      } else ZJ = new Map, FJ.set(JJ, ZJ);
      for (const FJ in cJ) {
        const JJ = cJ[FJ];
        if (JJ) {
          const cJ = JJ.byteOffset,
            UJ = JJ.byteStride,
            eJ = JJ.type,
            XJ = JJ.normalized;
          ZJ.set(FJ, {
            offset: cJ,
            stride: UJ,
            type: eJ,
            normalized: XJ
          })
        }
      }
      return ZJ
    }

    function eJ(JJ, cJ) {
      cJ.forEach(((cJ, ZJ) => {
        const FJ = `vp_${ZJ}_info`;
        JJ.setFloat4(FJ, cJ.offset, cJ.stride, cJ.type, cJ.normalized ? 1 : 0)
      }))
    }
  },
  39076: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      f: () => qJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(36174),
      eJ = ZJ(38806);
    let XJ = (() => {
      var JJ;
      let cJ, ZJ, UJ = [];
      return JJ = class {
        static extractMinAndMaxIndexed(JJ, cJ, ZJ, FJ, UJ, eJ) {
          for (let XJ = ZJ; XJ < ZJ + FJ; XJ++) {
            const ZJ = 3 * cJ[XJ],
              FJ = JJ[ZJ],
              AJ = JJ[ZJ + 1],
              qJ = JJ[ZJ + 2];
            UJ.minimizeInPlaceFromFloats(FJ, AJ, qJ), eJ.maximizeInPlaceFromFloats(FJ, AJ, qJ)
          }
        }
        static extractMinAndMax(JJ, cJ, ZJ, FJ, UJ, eJ) {
          for (let XJ = cJ, AJ = cJ * FJ; XJ < cJ + ZJ; XJ++, AJ += FJ) {
            const cJ = JJ[AJ],
              ZJ = JJ[AJ + 1],
              FJ = JJ[AJ + 2];
            UJ.minimizeInPlaceFromFloats(cJ, ZJ, FJ), eJ.maximizeInPlaceFromFloats(cJ, ZJ, FJ)
          }
        }
      }, (() => {
        const XJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [eJ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], ZJ = [eJ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, FJ.d)(JJ, null, cJ, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: JJ => "extractMinAndMaxIndexed" in JJ,
            get: JJ => JJ.extractMinAndMaxIndexed
          },
          metadata: XJ
        }, null, UJ), (0, FJ.d)(JJ, null, ZJ, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: JJ => "extractMinAndMax" in JJ,
            get: JJ => JJ.extractMinAndMax
          },
          metadata: XJ
        }, null, UJ), XJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XJ
        }), (0, FJ.e)(JJ, UJ)
      })(), JJ
    })();

    function AJ(JJ, cJ, ZJ, FJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const AJ = new UJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qJ = new UJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return XJ.extractMinAndMaxIndexed(JJ, cJ, ZJ, FJ, AJ, qJ), eJ && (AJ.x -= AJ.x * eJ.x + eJ.y, AJ.y -= AJ.y * eJ.x + eJ.y, AJ.z -= AJ.z * eJ.x + eJ.y, qJ.x += qJ.x * eJ.x + eJ.y, qJ.y += qJ.y * eJ.x + eJ.y, qJ.z += qJ.z * eJ.x + eJ.y), {
        minimum: AJ,
        maximum: qJ
      }
    }

    function qJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        eJ = arguments.length > 4 ? arguments[4] : void 0;
      const AJ = new UJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qJ = new UJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return eJ || (eJ = 3), XJ.extractMinAndMax(JJ, cJ, ZJ, eJ, AJ, qJ), FJ && (AJ.x -= AJ.x * FJ.x + FJ.y, AJ.y -= AJ.y * FJ.x + FJ.y, AJ.z -= AJ.z * FJ.x + FJ.y, qJ.x += qJ.x * FJ.x + FJ.y, qJ.y += qJ.y * FJ.x + FJ.y, qJ.z += qJ.z * FJ.x + FJ.y), {
        minimum: AJ,
        maximum: qJ
      }
    }
  },
  39058: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ
    });
    var FJ, UJ = ZJ(38918),
      eJ = ZJ(39062),
      XJ = ZJ(39065),
      AJ = ZJ(39076),
      qJ = ZJ(39079),
      jJ = ZJ(38677);
    class YJ {
      get materialDefines() {
        const JJ = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof JJ ? null : JJ
      }
      set materialDefines(JJ) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = JJ
      }
      _getDrawWrapper(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        JJ = JJ ?? this._engine.currentRenderPassId;
        let ZJ = this._drawWrappers[JJ];
        return !ZJ && cJ && (this._drawWrappers[JJ] = ZJ = new qJ.d(this._mesh.Qy().gn())), ZJ
      }
      _removeDrawWrapper(JJ) {
        let cJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[JJ]?.dispose(cJ), this._drawWrappers[JJ] = void 0
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
      _setMainDrawWrapperOverride(JJ) {
        this._mainDrawWrapperOverride = JJ
      }
      setEffect(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const UJ = this._drawWrapper;
        UJ.setEffect(JJ, cJ, FJ), void 0 !== ZJ && (UJ.materialContext = ZJ), JJ || (UJ.defines = null, UJ.materialContext = void 0)
      }
      resetDrawCache(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== JJ) return void this._removeDrawWrapper(JJ, !0, cJ);
          for (const JJ of this._drawWrappers) JJ?.dispose(cJ)
        }
        this._drawWrappers = []
      }
      static AddToMesh(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        return new YJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        let AJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qJ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = JJ, this.verticesStart = cJ, this.verticesCount = ZJ, this.indexStart = FJ, this.indexCount = UJ, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = eJ, this._renderingMesh = XJ || eJ, qJ && eJ.aE.push(this), this._engine = this._mesh.Qy().gn(), this.resetDrawCache(), this._trianglePlanes = [], this._id = eJ.aE.length - 1, AJ && (this.refreshBoundingInfo(), eJ.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      rM() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.rM() : this._boundingInfo
      }
      setBoundingInfo(JJ) {
        return this._boundingInfo = JJ, this
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
        const JJ = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return JJ || this._renderingMesh
      }
      dn() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const cJ = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!cJ) return JJ && this._mesh.Qy()._hasDefaultMaterial ? this._mesh.Qy().defaultMaterial : null;
        if (this._isMultiMaterial(cJ)) {
          const JJ = cJ.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== JJ && (this._currentMaterial = JJ, this.resetDrawCache()), JJ
        }
        return cJ
      }
      _isMultiMaterial(JJ) {
        return void 0 !== JJ.getSubMaterial
      }
      refreshBoundingInfo() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (JJ || (JJ = this._renderingMesh.getVerticesData(UJ.n.PositionKind)), !JJ) return this._boundingInfo = this._mesh.rM(), this;
        const cJ = this._renderingMesh.QXJ();
        let ZJ;
        if (0 === this.indexStart && this.indexCount === cJ.length) {
          const JJ = this._renderingMesh.rM();
          ZJ = {
            minimum: JJ.minimum.clone(),
            maximum: JJ.maximum.clone()
          }
        } else ZJ = (0, AJ.e)(JJ, cJ, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(ZJ.minimum, ZJ.maximum) : this._boundingInfo = new XJ.b(ZJ.minimum, ZJ.maximum), this
      }
      _checkCollision(JJ) {
        return this.rM()._checkCollision(JJ)
      }
      updateBoundingInfo(JJ) {
        let cJ = this.rM();
        return cJ || (this.refreshBoundingInfo(), cJ = this.rM()), cJ && cJ.update(JJ), this
      }
      isInFrustum(JJ) {
        const cJ = this.rM();
        return !!cJ && cJ.isInFrustum(JJ, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(JJ) {
        const cJ = this.rM();
        return !!cJ && cJ.isCompletelyInFrustum(JJ)
      }
      render(JJ) {
        return this._renderingMesh.render(this, JJ, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(JJ, cJ) {
        if (!this._linesIndexBuffer) {
          const ZJ = 6 * Math.floor(this.indexCount / 3),
            FJ = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ZJ) : new Uint16Array(ZJ);
          let UJ = 0;
          if (0 === JJ.length)
            for (let JJ = this.indexStart; JJ < this.indexStart + this.indexCount; JJ += 3) FJ[UJ++] = JJ, FJ[UJ++] = JJ + 1, FJ[UJ++] = JJ + 1, FJ[UJ++] = JJ + 2, FJ[UJ++] = JJ + 2, FJ[UJ++] = JJ;
          else
            for (let cJ = this.indexStart; cJ < this.indexStart + this.indexCount; cJ += 3) FJ[UJ++] = JJ[cJ], FJ[UJ++] = JJ[cJ + 1], FJ[UJ++] = JJ[cJ + 1], FJ[UJ++] = JJ[cJ + 2], FJ[UJ++] = JJ[cJ + 2], FJ[UJ++] = JJ[cJ];
          this._linesIndexBuffer = cJ.createIndexBuffer(FJ), this._linesIndexCount = FJ.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(JJ) {
        const cJ = this.rM();
        return !!cJ && JJ.intersectsBox(cJ.boundingBox)
      }
      intersects(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = this.dn();
        if (!eJ) return null;
        let XJ = 3,
          AJ = !1;
        switch (eJ.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            XJ = 1, AJ = !0
        }
        return 4 === eJ.fillMode ? ZJ.length ? this._intersectLines(JJ, cJ, ZJ, this._mesh.intersectionThreshold, FJ) : this._intersectUnIndexedLines(JJ, cJ, ZJ, this._mesh.intersectionThreshold, FJ) : !ZJ.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(JJ, cJ, ZJ, FJ, UJ) : this._intersectTriangles(JJ, cJ, ZJ, XJ, AJ, FJ, UJ)
      }
      _intersectLines(JJ, cJ, ZJ, FJ, UJ) {
        let XJ = null;
        for (let AJ = this.indexStart; AJ < this.indexStart + this.indexCount; AJ += 2) {
          const qJ = cJ[ZJ[AJ]],
            jJ = cJ[ZJ[AJ + 1]],
            YJ = JJ.intersectionSegment(qJ, jJ, FJ);
          if (!(YJ < 0) && ((UJ || !XJ || YJ < XJ.distance) && (XJ = new eJ.b(null, null, YJ), XJ.faceId = AJ / 2, UJ))) break
        }
        return XJ
      }
      _intersectUnIndexedLines(JJ, cJ, ZJ, FJ, UJ) {
        let XJ = null;
        for (let AJ = this.verticesStart; AJ < this.verticesStart + this.verticesCount; AJ += 2) {
          const ZJ = cJ[AJ],
            qJ = cJ[AJ + 1],
            jJ = JJ.intersectionSegment(ZJ, qJ, FJ);
          if (!(jJ < 0) && ((UJ || !XJ || jJ < XJ.distance) && (XJ = new eJ.b(null, null, jJ), XJ.faceId = AJ / 2, UJ))) break
        }
        return XJ
      }
      _intersectTriangles(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        let AJ = null,
          qJ = -1;
        for (let jJ = this.indexStart; jJ < this.indexStart + this.indexCount - (3 - FJ); jJ += FJ) {
          qJ++;
          const FJ = ZJ[jJ],
            YJ = ZJ[jJ + 1],
            hJ = ZJ[jJ + 2];
          if (UJ && 4294967295 === hJ) {
            jJ += 2;
            continue
          }
          const DJ = cJ[FJ],
            sJ = cJ[YJ],
            nJ = cJ[hJ];
          if (!DJ || !sJ || !nJ) continue;
          if (XJ && !XJ(DJ, sJ, nJ, JJ, FJ, YJ, hJ)) continue;
          const GJ = JJ.intersectsTriangle(DJ, sJ, nJ);
          if (GJ) {
            if (GJ.distance < 0) continue;
            if ((eJ || !AJ || GJ.distance < AJ.distance) && (AJ = GJ, AJ.faceId = qJ, eJ)) break
          }
        }
        return AJ
      }
      _intersectUnIndexedTriangles(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = null;
        for (let XJ = this.verticesStart; XJ < this.verticesStart + this.verticesCount; XJ += 3) {
          const ZJ = cJ[XJ],
            AJ = cJ[XJ + 1],
            qJ = cJ[XJ + 2];
          if (UJ && !UJ(ZJ, AJ, qJ, JJ, -1, -1, -1)) continue;
          const jJ = JJ.intersectsTriangle(ZJ, AJ, qJ);
          if (jJ) {
            if (jJ.distance < 0) continue;
            if ((FJ || !eJ || jJ.distance < eJ.distance) && (eJ = jJ, eJ.faceId = XJ / 3, FJ)) break
          }
        }
        return eJ
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(JJ, cJ) {
        const ZJ = new YJ(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, JJ, cJ, !1);
        if (!this.IsGlobal) {
          const JJ = this.rM();
          if (!JJ) return ZJ;
          ZJ._boundingInfo = new XJ.b(JJ.minimum, JJ.maximum)
        }
        return ZJ
      }
      dispose() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Qy().gn()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const cJ = this._mesh.aE.indexOf(this);
        this._mesh.aE.splice(cJ, 1), this.resetDrawCache(void 0, JJ)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = Number.MAX_VALUE,
          AJ = -Number.MAX_VALUE;
        const qJ = (UJ || FJ).QXJ();
        for (let jJ = cJ; jJ < cJ + ZJ; jJ++) {
          const JJ = qJ[jJ];
          JJ < XJ && (XJ = JJ), JJ > AJ && (AJ = JJ)
        }
        return new YJ(JJ, XJ, AJ - XJ + 1, cJ, ZJ, FJ, UJ, eJ)
      }
    }(FJ = YJ.prototype).projectToRef ?? (FJ.projectToRef = (0, jJ.l)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);