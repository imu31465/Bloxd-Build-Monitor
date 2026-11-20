export const id = 254;
export const ids = [254];
export const modules = {
  39921: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor(TT, kT, cT) {
        this.bu = TT, this.bv = kT, this.distance = cT, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39929: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(36910),
      MT = cT(36892),
      KT = cT(36901);
    class OT {
      constructor(TT, kT, cT) {
        this.vectors = (0, lT.e)(8, MT.m.Zero), this.center = MT.m.Zero(), this.centerWorld = MT.m.Zero(), this.extendSize = MT.m.Zero(), this.extendSizeWorld = MT.m.Zero(), this.directions = (0, lT.e)(3, MT.m.Zero), this.vectorsWorld = (0, lT.e)(8, MT.m.Zero), this.minimumWorld = MT.m.Zero(), this.maximumWorld = MT.m.Zero(), this.minimum = MT.m.Zero(), this.maximum = MT.m.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(TT, kT, cT)
      }
      reConstruct(TT, kT, cT) {
        const lT = TT.x,
          KT = TT.y,
          OT = TT.z,
          yT = kT.x,
          fT = kT.y,
          xT = kT.z,
          IT = this.vectors;
        this.minimum.I5(lT, KT, OT), this.maximum.I5(yT, fT, xT), IT[0].I5(lT, KT, OT), IT[1].I5(yT, fT, xT), IT[2].I5(yT, KT, OT), IT[3].I5(lT, fT, OT), IT[4].I5(lT, KT, xT), IT[5].I5(yT, fT, OT), IT[6].I5(lT, fT, xT), IT[7].I5(yT, KT, xT), kT.addToRef(TT, this.center).scaleInPlace(.5), kT.subtractToRef(TT, this.extendSize).scaleInPlace(.5), this._worldMatrix = cT || MT.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(TT) {
        const kT = OT._TmpVector3,
          cT = this.maximum.subtractToRef(this.minimum, kT[0]),
          lT = cT.length();
        cT.normalizeFromLength(lT);
        const MT = lT * TT,
          KT = cT.scaleInPlace(.5 * MT),
          yT = this.center.subtractToRef(KT, kT[1]),
          fT = this.center.addToRef(KT, kT[2]);
        return this.reConstruct(yT, fT, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(TT) {
        const kT = this.minimumWorld,
          cT = this.maximumWorld,
          lT = this.directions,
          KT = this.vectorsWorld,
          OT = this.vectors;
        if (TT.isIdentity()) {
          kT.UkT(this.minimum), cT.UkT(this.maximum);
          for (let TT = 0; TT < 8; ++TT) KT[TT].UkT(OT[TT]);
          this.extendSizeWorld.UkT(this.extendSize), this.centerWorld.UkT(this.center)
        } else {
          kT.Xs(Number.MAX_VALUE), cT.Xs(-Number.MAX_VALUE);
          for (let lT = 0; lT < 8; ++lT) {
            const yT = KT[lT];
            MT.m.TransformCoordinatesToRef(OT[lT], TT, yT), kT.minimizeInPlace(yT), cT.maximizeInPlace(yT)
          }
          cT.subtractToRef(kT, this.extendSizeWorld).scaleInPlace(.5), cT.addToRef(kT, this.centerWorld).scaleInPlace(.5)
        }
        MT.m.FromArrayToRef(TT.m, 0, lT[0]), MT.m.FromArrayToRef(TT.m, 4, lT[1]), MT.m.FromArrayToRef(TT.m, 8, lT[2]), this._worldMatrix = TT
      }
      isInFrustum(TT) {
        return OT.IsInFrustum(this.vectorsWorld, TT)
      }
      isCompletelyInFrustum(TT) {
        return OT.IsCompletelyInFrustum(this.vectorsWorld, TT)
      }
      intersectsPoint(TT) {
        const kT = this.minimumWorld,
          cT = this.maximumWorld,
          lT = kT.x,
          MT = kT.y,
          OT = kT.z,
          yT = cT.x,
          fT = cT.y,
          xT = cT.z,
          IT = TT.x,
          AT = TT.y,
          CT = TT.z,
          jT = -KT.b;
        return !(yT - IT < jT || jT > IT - lT) && (!(fT - AT < jT || jT > AT - MT) && !(xT - CT < jT || jT > CT - OT))
      }
      intersectsSphere(TT) {
        return OT.IntersectsSphere(this.minimumWorld, this.maximumWorld, TT.centerWorld, TT.radiusWorld)
      }
      intersectsMinMax(TT, kT) {
        const cT = this.minimumWorld,
          lT = this.maximumWorld,
          MT = cT.x,
          KT = cT.y,
          OT = cT.z,
          yT = lT.x,
          fT = lT.y,
          xT = lT.z,
          IT = TT.x,
          AT = TT.y,
          CT = TT.z,
          jT = kT.x,
          vT = kT.y,
          tT = kT.z;
        return !(yT < IT || MT > jT) && (!(fT < AT || KT > vT) && !(xT < CT || OT > tT))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(TT, kT) {
        return TT.intersectsMinMax(kT.minimumWorld, kT.maximumWorld)
      }
      static IntersectsSphere(TT, kT, cT, lT) {
        const KT = OT._TmpVector3[0];
        MT.m.ClampToRef(cT, TT, kT, KT);
        return MT.m.DistanceSquared(cT, KT) <= lT * lT
      }
      static IsCompletelyInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; ++cT) {
          const lT = kT[cT];
          for (let kT = 0; kT < 8; ++kT)
            if (lT.dotCoordinate(TT[kT]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; ++cT) {
          let lT = !0;
          const MT = kT[cT];
          for (let kT = 0; kT < 8; ++kT)
            if (MT.dotCoordinate(TT[kT]) >= 0) {
              lT = !1;
              break
            } if (lT) return !1
        }
        return !0
      }
    }
    OT._TmpVector3 = (0, lT.e)(3, MT.m.Zero)
  },
  39926: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => AT
    });
    var lT = cT(36910),
      MT = cT(36892),
      KT = cT(39929);
    class OT {
      constructor(TT, kT, cT) {
        this.center = MT.m.Zero(), this.centerWorld = MT.m.Zero(), this.minimum = MT.m.Zero(), this.maximum = MT.m.Zero(), this.reConstruct(TT, kT, cT)
      }
      reConstruct(TT, kT, cT) {
        this.minimum.UkT(TT), this.maximum.UkT(kT);
        const lT = MT.m.Distance(TT, kT);
        kT.addToRef(TT, this.center).scaleInPlace(.5), this.radius = .5 * lT, this._update(cT || MT.d.IdentityReadOnly)
      }
      scale(TT) {
        const kT = OT._TmpVector3,
          cT = this.maximum.subtractToRef(this.minimum, kT[0]),
          lT = cT.length();
        cT.normalizeFromLength(lT);
        const MT = lT * TT,
          KT = cT.scaleInPlace(.5 * MT),
          yT = this.center.subtractToRef(KT, kT[1]),
          fT = this.center.addToRef(KT, kT[2]);
        return this.reConstruct(yT, fT, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(TT) {
        if (TT.isIdentity()) this.centerWorld.UkT(this.center), this.radiusWorld = this.radius;
        else {
          MT.m.TransformCoordinatesToRef(this.center, TT, this.centerWorld);
          const kT = OT._TmpVector3[0];
          MT.m.TransformNormalFromFloatsToRef(1, 1, 1, TT, kT), this.radiusWorld = Math.max(Math.abs(kT.x), Math.abs(kT.y), Math.abs(kT.z)) * this.radius
        }
      }
      isInFrustum(TT) {
        const kT = this.centerWorld,
          cT = this.radiusWorld;
        for (let lT = 0; lT < 6; lT++)
          if (TT[lT].dotCoordinate(kT) <= -cT) return !1;
        return !0
      }
      isCenterInFrustum(TT) {
        const kT = this.centerWorld;
        for (let cT = 0; cT < 6; cT++)
          if (TT[cT].dotCoordinate(kT) < 0) return !1;
        return !0
      }
      intersectsPoint(TT) {
        const kT = MT.m.DistanceSquared(this.centerWorld, TT);
        return !(this.radiusWorld * this.radiusWorld < kT)
      }
      static Intersects(TT, kT) {
        const cT = MT.m.DistanceSquared(TT.centerWorld, kT.centerWorld),
          lT = TT.radiusWorld + kT.radiusWorld;
        return !(lT * lT < cT)
      }
      static CreateFromCenterAndRadius(TT, kT, cT) {
        this._TmpVector3[0].UkT(TT), this._TmpVector3[1].I5(0, 0, kT), this._TmpVector3[2].UkT(TT), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].gcT(this._TmpVector3[1]);
        const lT = new OT(this._TmpVector3[0], this._TmpVector3[2]);
        return lT._worldMatrix = cT || MT.d.Identity(), lT
      }
    }
    OT._TmpVector3 = (0, lT.e)(3, MT.m.Zero);
    const yT = {
        min: 0,
        max: 0
      },
      fT = {
        min: 0,
        max: 0
      },
      xT = (TT, kT, cT) => {
        const lT = MT.m.Dot(kT.centerWorld, TT),
          KT = Math.abs(MT.m.Dot(kT.directions[0], TT)) * kT.extendSize.x + Math.abs(MT.m.Dot(kT.directions[1], TT)) * kT.extendSize.y + Math.abs(MT.m.Dot(kT.directions[2], TT)) * kT.extendSize.z;
        cT.min = lT - KT, cT.max = lT + KT
      },
      IT = (TT, kT, cT) => (xT(TT, kT, yT), xT(TT, cT, fT), !(yT.min > fT.max || fT.min > yT.max));
    class AT {
      constructor(TT, kT, cT) {
        this._isLocked = !1, this.boundingBox = new KT.d(TT, kT, cT), this.WcT = new OT(TT, kT, cT)
      }
      reConstruct(TT, kT, cT) {
        this.boundingBox.reConstruct(TT, kT, cT), this.WcT.reConstruct(TT, kT, cT)
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
      set isLocked(TT) {
        this._isLocked = TT
      }
      update(TT) {
        this._isLocked || (this.boundingBox._update(TT), this.WcT._update(TT))
      }
      centerOn(TT, kT) {
        const cT = AT._TmpVector3[0].UkT(TT).gcT(kT),
          lT = AT._TmpVector3[1].UkT(TT).addInPlace(kT);
        return this.boundingBox.reConstruct(cT, lT, this.boundingBox.getWorldMatrix()), this.WcT.reConstruct(cT, lT, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(TT) {
        const kT = MT.m.Minimize(this.minimum, TT),
          cT = MT.m.Maximize(this.maximum, TT);
        return this.reConstruct(kT, cT, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(TT) {
        const kT = MT.h.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(kT);
        const cT = MT.h.Fv[0];
        return MT.m.TransformCoordinatesToRef(TT.boundingBox.minimumWorld, kT, cT), this.encapsulate(cT), MT.m.TransformCoordinatesToRef(TT.boundingBox.maximumWorld, kT, cT), this.encapsulate(cT), this
      }
      scale(TT) {
        return this.boundingBox.scale(TT), this.WcT.scale(TT), this
      }
      isInFrustum(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === kT || 3 === kT) && this.WcT.isCenterInFrustum(TT)) return !0;
        if (!this.WcT.isInFrustum(TT)) return !1;
        return !(1 !== kT && 3 !== kT) || this.boundingBox.isInFrustum(TT)
      }
      get diagonalLength() {
        const TT = this.boundingBox;
        return TT.maximumWorld.subtractToRef(TT.minimumWorld, AT._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(TT) {
        return this.boundingBox.isCompletelyInFrustum(TT)
      }
      _checkCollision(TT) {
        return TT._canDoCollision(this.WcT.centerWorld, this.WcT.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(TT) {
        return !!this.WcT.centerWorld && (!!this.WcT.intersectsPoint(TT) && !!this.boundingBox.intersectsPoint(TT))
      }
      intersects(TT, kT) {
        if (!OT.Intersects(this.WcT, TT.WcT)) return !1;
        if (!KT.d.Intersects(this.boundingBox, TT.boundingBox)) return !1;
        if (!kT) return !0;
        const cT = this.boundingBox,
          lT = TT.boundingBox;
        return !!IT(cT.directions[0], cT, lT) && (!!IT(cT.directions[1], cT, lT) && (!!IT(cT.directions[2], cT, lT) && (!!IT(lT.directions[0], cT, lT) && (!!IT(lT.directions[1], cT, lT) && (!!IT(lT.directions[2], cT, lT) && (!!IT(MT.m.Cross(cT.directions[0], lT.directions[0]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[0], lT.directions[1]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[0], lT.directions[2]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[1], lT.directions[0]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[1], lT.directions[1]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[1], lT.directions[2]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[2], lT.directions[0]), cT, lT) && (!!IT(MT.m.Cross(cT.directions[2], lT.directions[1]), cT, lT) && !!IT(MT.m.Cross(cT.directions[2], lT.directions[2]), cT, lT))))))))))))))
      }
    }
    AT._TmpVector3 = (0, lT.e)(2, MT.m.Zero)
  },
  39951: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      g: () => fT,
      j: () => yT,
      n: () => OT
    });
    var lT = cT(39796),
      MT = cT(36892);

    function KT(TT) {
      -1 === TT.indexOf("vClipPlane") && TT.push("vClipPlane"), -1 === TT.indexOf("vClipPlane2") && TT.push("vClipPlane2"), -1 === TT.indexOf("vClipPlane3") && TT.push("vClipPlane3"), -1 === TT.indexOf("vClipPlane4") && TT.push("vClipPlane4"), -1 === TT.indexOf("vClipPlane5") && TT.push("vClipPlane5"), -1 === TT.indexOf("vClipPlane6") && TT.push("vClipPlane6")
    }

    function OT(TT, kT, cT) {
      const lT = !!(TT.clipPlane ?? kT.clipPlane),
        MT = !!(TT.clipPlane2 ?? kT.clipPlane2),
        KT = !!(TT.clipPlane3 ?? kT.clipPlane3),
        OT = !!(TT.clipPlane4 ?? kT.clipPlane4),
        yT = !!(TT.clipPlane5 ?? kT.clipPlane5),
        fT = !!(TT.clipPlane6 ?? kT.clipPlane6);
      lT && cT.push("#define CLIPPLANE"), MT && cT.push("#define CLIPPLANE2"), KT && cT.push("#define CLIPPLANE3"), OT && cT.push("#define CLIPPLANE4"), yT && cT.push("#define CLIPPLANE5"), fT && cT.push("#define CLIPPLANE6")
    }

    function yT(TT, kT, cT) {
      let lT = !1;
      const MT = !!(TT.clipPlane ?? kT.clipPlane),
        KT = !!(TT.clipPlane2 ?? kT.clipPlane2),
        OT = !!(TT.clipPlane3 ?? kT.clipPlane3),
        yT = !!(TT.clipPlane4 ?? kT.clipPlane4),
        fT = !!(TT.clipPlane5 ?? kT.clipPlane5),
        xT = !!(TT.clipPlane6 ?? kT.clipPlane6);
      return cT.CLIPPLANE !== MT && (cT.CLIPPLANE = MT, lT = !0), cT.CLIPPLANE2 !== KT && (cT.CLIPPLANE2 = KT, lT = !0), cT.CLIPPLANE3 !== OT && (cT.CLIPPLANE3 = OT, lT = !0), cT.CLIPPLANE4 !== yT && (cT.CLIPPLANE4 = yT, lT = !0), cT.CLIPPLANE5 !== fT && (cT.CLIPPLANE5 = fT, lT = !0), cT.CLIPPLANE6 !== xT && (cT.CLIPPLANE6 = xT, lT = !0), lT
    }

    function fT(TT, kT, cT) {
      let lT = kT.clipPlane ?? cT.clipPlane;
      xT(TT, "vClipPlane", lT), lT = kT.clipPlane2 ?? cT.clipPlane2, xT(TT, "vClipPlane2", lT), lT = kT.clipPlane3 ?? cT.clipPlane3, xT(TT, "vClipPlane3", lT), lT = kT.clipPlane4 ?? cT.clipPlane4, xT(TT, "vClipPlane4", lT), lT = kT.clipPlane5 ?? cT.clipPlane5, xT(TT, "vClipPlane5", lT), lT = kT.clipPlane6 ?? cT.clipPlane6, xT(TT, "vClipPlane6", lT)
    }

    function xT(TT, kT, cT) {
      if (cT) {
        const KT = lT.d.NJ()?.floatingOriginOffset || MT.m.ZeroReadOnly;
        TT.setFloat4(kT, cT.normal.x, cT.normal.y, cT.normal.z, cT.d + MT.m.Dot(cT.normal, KT))
      }
    }
  },
  39970: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(TT, kT) {
        this._defines[TT] || (TT < this._currentRank && (this._currentRank = TT), TT > this._maxRank && (this._maxRank = TT), this._defines[TT] = new Array), this._defines[TT].push(kT)
      }
      addCPUSkinningFallback(TT, kT) {
        this._mesh = kT, TT < this._currentRank && (this._currentRank = TT), TT > this._maxRank && (this._maxRank = TT)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(TT, kT) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, TT = TT.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), kT._bonesComputationForcedToCPU = !0;
          const cT = this._mesh.NJ();
          for (let TT = 0; TT < cT.meshes.length; TT++) {
            const lT = cT.meshes[TT];
            if (lT.material) {
              if (lT.computeBonesUsingShaders && 0 !== lT.numBoneInfluencers)
                if (lT.material.getEffect() === kT) lT.computeBonesUsingShaders = !1;
                else if (lT.kF)
                for (const TT of lT.kF) {
                  if (TT.effect === kT) {
                    lT.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && lT.computeBonesUsingShaders && lT.numBoneInfluencers > 0 && (lT.computeBonesUsingShaders = !1)
          }
        } else {
          const kT = this._defines[this._currentRank];
          if (kT)
            for (let cT = 0; cT < kT.length; cT++) TT = TT.replace("#define " + kT[cT], "");
          this._currentRank++
        }
        return TT
      }
    }
  },
  39908: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => QT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39727),
      OT = cT(36932),
      yT = cT(36925),
      fT = cT(39917),
      xT = cT(39770),
      IT = cT(38512),
      AT = cT(37637),
      CT = cT(39936),
      jT = cT(39645);
    let vT = (() => {
      var TT;
      let kT, cT, KT, OT, yT, fT, xT, IT, AT, CT, vT, tT, hT = [];
      return TT = class {
        constructor() {
          this._func = (0, lT.h)(this, hT), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(TT) {
          this._func = TT
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(TT) {
          this._backFunc = TT
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(TT) {
          this._funcRef = TT
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(TT) {
          this._funcMask = TT
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(TT) {
          this._opStencilFail = TT
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(TT) {
          this._opDepthFail = TT
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(TT) {
          this._opStencilDepthPass = TT
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(TT) {
          this._backOpStencilFail = TT
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(TT) {
          this._backOpDepthFail = TT
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(TT) {
          this._backOpStencilDepthPass = TT
        }
        get mask() {
          return this._mask
        }
        set mask(TT) {
          this._mask = TT
        }
        get enabled() {
          return this._enabled
        }
        set enabled(TT) {
          this._enabled = TT
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(TT) {
          jT.d.Clone((() => TT), this)
        }
        serialize() {
          return jT.d.Serialize(this)
        }
        parse(TT, kT, cT) {
          jT.d.Parse((() => this), TT, kT, cT)
        }
      }, (() => {
        const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], OT = [(0, MT.J)()], yT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], IT = [(0, MT.J)()], AT = [(0, MT.J)()], CT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], (0, lT.e)(TT, null, kT, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: TT => "func" in TT,
            get: TT => TT.func
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, cT, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: TT => "backFunc" in TT,
            get: TT => TT.backFunc
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, KT, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: TT => "funcRef" in TT,
            get: TT => TT.funcRef
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, OT, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "funcMask" in TT,
            get: TT => TT.funcMask
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, yT, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "opStencilFail" in TT,
            get: TT => TT.opStencilFail
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, fT, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "opDepthFail" in TT,
            get: TT => TT.opDepthFail
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, xT, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "opStencilDepthPass" in TT,
            get: TT => TT.opStencilDepthPass
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, IT, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpStencilFail" in TT,
            get: TT => TT.backOpStencilFail
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, AT, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpDepthFail" in TT,
            get: TT => TT.backOpDepthFail
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, CT, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpStencilDepthPass" in TT,
            get: TT => TT.backOpStencilDepthPass
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, vT, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: TT => "mask" in TT,
            get: TT => TT.mask
          },
          metadata: jT
        }, null, hT), (0, lT.e)(TT, null, tT, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "enabled" in TT,
            get: TT => TT.enabled
          },
          metadata: jT
        }, null, hT), jT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jT
        })
      })(), TT
    })();
    var tT = cT(39943),
      hT = cT(39533),
      NT = cT(39500);
    let QT = (() => {
      var TT;
      let kT, cT, NT, QT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT, JT, oT, HT, eT, GT, VT, ET, ZT, uT, XT, dT, LT, RT, gT, UT, YT = [],
        BT = [],
        WT = [],
        nT = [],
        pT = [],
        iT = [],
        qT = [],
        sT = [],
        Tk = [],
        kk = [],
        ck = [],
        lk = [],
        Mk = [],
        Kk = [],
        Ok = [],
        yk = [],
        fk = [],
        xk = [],
        Ik = [],
        Ak = [],
        Ck = [],
        jk = [],
        vk = [],
        tk = [],
        hk = [],
        Nk = [],
        Qk = [],
        Sk = [],
        Dk = [],
        ak = [],
        Fk = [],
        rk = [],
        Pk = [],
        wk = [],
        mk = [],
        bk = [],
        zk = [],
        Jk = [],
        Hk = [],
        ek = [],
        Gk = [],
        Vk = [],
        Ek = [],
        Zk = [],
        uk = [],
        Xk = [],
        dk = [],
        Lk = [],
        Rk = [],
        gk = [],
        Uk = [];
      return TT = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(kT) {
          this._useVertexPulling !== kT && (this._useVertexPulling = kT, this.pTT(TT.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(TT) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(kT) {
          if (this._alpha === kT) return;
          const cT = this._alpha;
          this._alpha = kT, 1 !== cT && 1 !== kT || this.pTT(TT.MiscDirtyFlag + TT.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(kT) {
          this._backFaceCulling !== kT && (this._backFaceCulling = kT, this.pTT(TT.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(kT) {
          const cT = Math.max(0, Math.min(0 | kT, 4));
          this._textureRepetitionMode !== cT && (this._textureRepetitionMode = cT, this.pTT(TT.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(kT) {
          this._cullBackFaces !== kT && (this._cullBackFaces = kT, this.pTT(TT.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(TT) {
          this._blockDirtyMechanism !== TT && (this._blockDirtyMechanism = TT, TT || this.markDirty())
        }
        atomicMaterialsUpdate(TT) {
          this.blockDirtyMechanism = !0;
          try {
            TT(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(TT) {
          this._onDisposeObserver && this.QJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.QJ.add(TT)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new OT.b), this._onBindObservable
        }
        set onBind(TT) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(TT)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new OT.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new OT.b), this._onEffectCreatedObservable
        }
        set alphaMode(TT) {
          this._alphaMode[0] = TT
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[cT] !== kT && (this._alphaMode[cT] = kT, this.pTT(TT.TextureDirtyFlag))
        }
        set needDepthPrePass(TT) {
          this._needDepthPrePass !== TT && (this._needDepthPrePass = TT, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(kT) {
          this._fogEnabled !== kT && (this._fogEnabled = kT, this.pTT(TT.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case TT.WireFrameFillMode:
            case TT.LineListDrawMode:
            case TT.LineLoopDrawMode:
            case TT.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(kT) {
          this.fillMode = kT ? TT.WireFrameFillMode : TT.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case TT.PointFillMode:
            case TT.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(kT) {
          this.fillMode = kT ? TT.PointFillMode : TT.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(kT) {
          this._fillMode !== kT && (this._fillMode = kT, this.pTT(TT.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(TT) {
          const kT = this.NJ().Dv().getCaps().fragmentDepthSupported;
          TT && !kT && IT.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = TT && kT, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(TT) {
          this._isVertexOutputInvariant !== TT && (this._isVertexOutputInvariant = TT, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(TT) {
          this._drawWrapper = TT
        }
        constructor(kT, cT, MT) {
          let fT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, lT.h)(this, YT), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, lT.h)(this, BT, void 0), this.uniqueId = ((0, lT.h)(this, WT), (0, lT.h)(this, nT, void 0)), this._loadedUniqueId = (0, lT.h)(this, pT), this.name = (0, lT.h)(this, iT, void 0), this.metadata = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, null)), this._internalMetadata = (0, lT.h)(this, Tk), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, lT.h)(this, kk, !1), this.checkReadyOnlyOnce = ((0, lT.h)(this, ck), (0, lT.h)(this, lk, !1)), this.state = ((0, lT.h)(this, Mk), (0, lT.h)(this, Kk, "")), this._alpha = ((0, lT.h)(this, Ok), (0, lT.h)(this, yk, 1)), this.inspectableCustomProperties = (0, lT.h)(this, fk), this._backFaceCulling = (0, lT.h)(this, xk, !0), this._textureRepetitionMode = ((0, lT.h)(this, Ik), (0, lT.h)(this, Ak, 0)), this.textureRepetitionHexTilingParams = ((0, lT.h)(this, Ck), (0, lT.h)(this, jk, [1, .6, 7, .5])), this._cullBackFaces = ((0, lT.h)(this, vk), (0, lT.h)(this, tk, !0)), this._blockDirtyMechanism = ((0, lT.h)(this, hk), !1), this.sideOrientation = (0, lT.h)(this, Nk, null), this.onCompiled = ((0, lT.h)(this, Qk), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.QJ = new OT.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, lT.h)(this, Sk, [2]), this._needDepthPrePass = ((0, lT.h)(this, Dk), (0, lT.h)(this, ak, !1)), this.disableDepthWrite = ((0, lT.h)(this, Fk), (0, lT.h)(this, rk, !1)), this.disableColorWrite = ((0, lT.h)(this, Pk), (0, lT.h)(this, wk, !1)), this.forceDepthWrite = ((0, lT.h)(this, mk), (0, lT.h)(this, bk, !1)), this.depthFunction = ((0, lT.h)(this, zk), (0, lT.h)(this, Jk, 0)), this.separateCullingPass = ((0, lT.h)(this, Hk), (0, lT.h)(this, ek, !1)), this._fogEnabled = ((0, lT.h)(this, Gk), (0, lT.h)(this, Vk, !0)), this.pointSize = ((0, lT.h)(this, Ek), (0, lT.h)(this, Zk, 1)), this.zOffset = ((0, lT.h)(this, uk), (0, lT.h)(this, Xk, 0)), this.zOffsetUnits = ((0, lT.h)(this, dk), (0, lT.h)(this, Lk, 0)), this.clipPlane = (0, lT.h)(this, Rk), this.stencil = new vT, this._isVertexOutputInvariant = (0, lT.h)(this, gk, TT.ForceVertexOutputInvariant), this._materialContext = (0, lT.h)(this, Uk), this._useUBO = !1, this._fillMode = TT.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = kT;
          const IT = cT || yT.d.LastCreatedScene;
          IT && (this._scene = IT, this._dirtyCallbacks = {}, this._forceGLSL = fT, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = kT || KT.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Dv().createMaterialContext(), this._drawWrapper = new CT.b(this._scene.Dv(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new xT.b(this._scene.Dv(), void 0, void 0, kT), this._useUBO = this.NJ().Dv().supportsUniformBuffers, this._createUniformBuffer(), MT || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), TT.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const TT = this.NJ().Dv();
          this._uniformBuffer?.dispose(), TT.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new xT.b(TT, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new xT.b(this._scene.Dv(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(TT) {
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
        isReady(TT, kT) {
          return !0
        }
        isReadyForSubMesh(TT, kT, cT) {
          const lT = kT.materialDefines;
          return !!lT && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = lT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        NJ() {
          return this._scene
        }
        _getEffectiveOrientation(TT) {
          return null !== this.sideOrientation ? this.sideOrientation : TT.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(TT) {
          this._transparencyMode = TT
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === TT.MATERIAL_ALPHABLEND || this._transparencyMode === TT.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === TT.MATERIAL_ALPHATEST || this._transparencyMode === TT.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === TT.MATERIAL_OPAQUE || this._transparencyMode === TT.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(TT) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : TT.visibility < 1 || !this._disableAlphaBlending && (TT.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(TT) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(TT) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cT = this.NJ().meshes;
          for (const TT of cT)
            if (TT.kF)
              for (const cT of TT.kF)
                if (cT.wv() === this)
                  for (const TT of cT._drawWrappers) TT && this._materialContext === TT.materialContext && (TT._wasPreviouslyReady = !1, TT._wasPreviouslyUsingInstances = null, TT._forceRebindOnNextCall = kT);
          kT && this.pTT(TT.AllDirtyFlag)
        }
        _preBind(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const lT = this._scene.Dv(),
            MT = (null == cT ? this.sideOrientation : cT) === TT.ClockWiseSideOrientation,
            KT = kT || this._getDrawWrapper();
          return (0, hT.d)(KT) && KT.materialContext && (KT.materialContext.useVertexPulling = this.useVertexPulling), lT.enableEffect(KT), lT.setState(this.backFaceCulling, this.zOffset, !1, MT, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), MT
        }
        bind(TT, kT) {}
        buildUniformLayout() {
          const TT = this._uniformBuffer;
          this._eventInfo.ubo = TT, this._callbackPluginEventGeneric(8, this._eventInfo), TT.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(TT, kT, cT) {
          const lT = cT._drawWrapper;
          this._eventInfo.subMesh = cT, this._callbackPluginEventBindForSubMesh(this._eventInfo), lT._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(TT) {}
        bindView(TT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : TT.setMatrix("view", this.NJ().getViewMatrix())
        }
        bindViewProjection(TT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (TT.setMatrix("viewProjection", this.NJ().getTransformMatrix()), TT.setMatrix("projection", this.NJ().getProjectionMatrix()), TT.setMatrix("inverseProjection", this.NJ().getInverseProjectionMatrix()))
        }
        bindEyePosition(TT, kT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(TT, kT)
        }
        _afterBind(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && kT && (this._needToBindSceneUbo = !1, (0, tT.r)(kT, this.NJ().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = TT ? TT.visibility : 1, this._onBindObservable && TT && this._onBindObservable.notifyObservers(TT), this.disableDepthWrite) {
            const TT = this._scene.Dv();
            this._cachedDepthWriteState = TT.getDepthWrite(), TT.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const TT = this._scene.Dv();
            this._cachedColorWriteState = TT.getColorWrite(), TT.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const TT = this._scene.Dv();
            this._cachedDepthFunctionState = TT.getDepthFunction() || 0, TT.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Dv().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Dv().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Dv().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(TT) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = TT, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(TT) {
          return null
        }
        _clonePlugins(kT, cT) {
          const lT = {};
          if (this._serializePlugins(lT), TT._ParsePlugins(lT, kT, this._scene, cT), this.pluginManager)
            for (const TT of this.pluginManager._plugins) {
              const cT = kT.pluginManager.getPlugin(TT.name);
              cT && TT.copyTo(cT)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const TT = [];
            for (const kT in this.meshMap) {
              const cT = this.meshMap[kT];
              cT && TT.push(cT)
            }
            return TT
          }
          return this._scene.meshes.filter((TT => TT.material === this))
        }
        forceCompilation(TT, kT, cT, lT) {
          const MT = {
              clipPlane: !1,
              useInstances: !1,
              ...cT
            },
            KT = this.NJ(),
            OT = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const yT = () => {
            if (!this._scene || !this._scene.Dv()) return;
            const cT = KT.clipPlane;
            if (MT.clipPlane && (KT.clipPlane = new AT.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let cT = !0,
                KT = null;
              if (TT.kF) {
                const kT = new fT.c(0, 0, 0, 0, 0, TT, void 0, !1, !1);
                kT.materialDefines && (kT.materialDefines._renderId = -1), this.isReadyForSubMesh(TT, kT, MT.useInstances) || (kT.effect && kT.effect.getCompilationError() && kT.effect.allFallbacksProcessed() ? KT = kT.effect.getCompilationError() : (cT = !1, setTimeout(yT, 16)))
              }
              cT && (this.allowShaderHotSwapping = OT, KT && lT && lT(KT), kT && kT(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = OT, kT && kT(this)) : setTimeout(yT, 16);
            MT.clipPlane && (KT.clipPlane = cT)
          };
          yT()
        }
        async forceCompilationAsync(TT, kT) {
          return await new Promise(((cT, lT) => {
            this.forceCompilation(TT, (() => {
              cT()
            }), kT, (TT => {
              lT(TT)
            }))
          }))
        }
        pTT(kT) {
          this.NJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (TT._DirtyCallbackArray.length = 0, kT & TT.ImageProcessingDirtyFlag && TT._DirtyCallbackArray.push(TT._ImageProcessingDirtyCallBack), kT & TT.TextureDirtyFlag && TT._DirtyCallbackArray.push(TT._TextureDirtyCallBack), kT & TT.LightDirtyFlag && TT._DirtyCallbackArray.push(TT._LightsDirtyCallBack), kT & TT.FresnelDirtyFlag && TT._DirtyCallbackArray.push(TT._FresnelDirtyCallBack), kT & TT.AttributesDirtyFlag && TT._DirtyCallbackArray.push(TT._AttributeDirtyCallBack), kT & TT.MiscDirtyFlag && TT._DirtyCallbackArray.push(TT._MiscDirtyCallBack), kT & TT.PrePassDirtyFlag && TT._DirtyCallbackArray.push(TT._PrePassDirtyCallBack), TT._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(TT._RunDirtyCallBacks), this.NJ().resetCachedMaterial())
        }
        resetDrawCache() {
          const TT = this.NJ().meshes;
          for (const kT of TT)
            if (kT.kF)
              for (const TT of kT.kF) TT.wv() === this && TT.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(TT) {
          const kT = this.NJ();
          if (kT.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const cT = kT.meshes;
          for (const lT of cT)
            if (lT.kF)
              for (const cT of lT.kF) {
                if ((cT.wv() || (kT._hasDefaultMaterial ? kT.defaultMaterial : null)) === this)
                  for (const kT of cT._drawWrappers) kT && kT.defines && kT.defines.markAllAsDirty && this._materialContext === kT.materialContext && TT(kT.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.NJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const TT = this.NJ().enablePrePassRenderer();
          TT && TT.pTT()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(TT._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(TT._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(TT._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(TT._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(TT._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(TT._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(TT._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(TT._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(TT._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(TT._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const TT = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.QJ.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(TT)
            }))
          }
        }
        setPrePassRenderer(TT) {
          return !1
        }
        dispose(TT, kT, cT) {
          const lT = this.NJ();
          if (lT.stopAnimation(this), lT.freeProcessedMaterials(), lT.removeMaterial(this), this._eventInfo.forceDisposeTextures = kT, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const TT = this._parentContainer.materials.indexOf(this);
            TT > -1 && this._parentContainer.materials.splice(TT, 1), this._parentContainer = null
          }
          if (!0 !== cT)
            if (this.meshMap)
              for (const MT in this.meshMap) {
                const TT = this.meshMap[MT];
                this._disposeMeshResources(TT)
              } else {
                const TT = lT.meshes;
                for (const kT of TT) this._disposeMeshResources(kT)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.QJ.notifyObservers(this), this.QJ.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(TT) {
          if (!TT) return;
          const kT = TT.geometry,
            cT = TT._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (TT.kF && cT)
              for (const lT of TT.kF) {
                const TT = lT._drawWrappers;
                for (let MT = 0; MT < TT.length; MT++) {
                  const KT = TT[MT]?.effect;
                  if (!KT) continue;
                  cT[MT] === this && (kT?._releaseVertexArrayObject(KT), lT._removeDrawWrapper(MT, !0, !0))
                }
              }
          } else kT?._releaseVertexArrayObject(this._drawWrapper.effect);
          TT.material !== this || TT.hlT || (TT.material = null)
        }
        serialize() {
          const TT = jT.d.Serialize(this);
          return TT.stencil = this.stencil.serialize(), TT.uniqueId = this.uniqueId, this._serializePlugins(TT), TT
        }
        _serializePlugins(TT) {
          if (TT.plugins = {}, this.pluginManager)
            for (const kT of this.pluginManager._plugins) kT.doNotSerialize || (TT.plugins[kT.getClassName()] = kT.serialize())
        }
        static ParseAlphaMode(TT, kT) {
          void 0 !== TT._alphaMode ? kT._alphaMode = Array.isArray(TT._alphaMode) ? [...TT._alphaMode] : [TT._alphaMode] : void 0 !== TT.alphaMode ? kT._alphaMode = Array.isArray(TT.alphaMode) ? [...TT.alphaMode] : [TT.alphaMode] : kT._alphaMode = [2]
        }
        static Parse(kT, cT, lT) {
          if (kT.customType) {
            if ("BABYLON.PBRMaterial" === kT.customType && kT.overloadedAlbedo && (kT.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return IT.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else kT.customType = "BABYLON.StandardMaterial";
          const MT = KT.h.Instantiate(kT.customType).Parse(kT, cT, lT);
          return MT._loadedUniqueId = kT.uniqueId, TT.ParseAlphaMode(kT, MT), MT
        }
        static _ParsePlugins(TT, kT, cT, lT) {
          if (TT.plugins)
            for (const MT in TT.plugins) {
              const OT = TT.plugins[MT];
              let yT = kT.pluginManager?.getPlugin(OT.name);
              if (!yT) {
                const TT = KT.h.Instantiate("BABYLON." + MT);
                TT && (yT = new TT(kT))
              }
              yT?.parse(OT, cT, lT)
            }
        }
      }, (() => {
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, MT.J)()], cT = [(0, MT.J)()], NT = [(0, MT.J)()], QT = [(0, MT.J)()], ST = [(0, MT.J)()], DT = [(0, MT.J)()], aT = [(0, MT.J)()], FT = [(0, MT.J)("alpha")], rT = [(0, MT.J)("backFaceCulling")], PT = [(0, MT.J)("textureRepetitionMode")], wT = [(0, MT.J)("textureRepetitionHexTilingParams")], mT = [(0, MT.J)("cullBackFaces")], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], oT = [(0, MT.J)()], HT = [(0, MT.J)()], eT = [(0, MT.J)()], GT = [(0, MT.J)()], VT = [(0, MT.J)()], ET = [(0, MT.J)("fogEnabled")], ZT = [(0, MT.J)()], uT = [(0, MT.J)()], XT = [(0, MT.J)()], dT = [(0, MT.J)()], LT = [(0, MT.J)()], RT = [(0, MT.J)()], gT = [(0, MT.J)()], UT = [(0, MT.J)()], (0, lT.e)(TT, null, dT, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: TT => "pointsCloud" in TT,
            get: TT => TT.pointsCloud
          },
          metadata: KT
        }, null, YT), (0, lT.e)(TT, null, LT, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "fillMode" in TT,
            get: TT => TT.fillMode
          },
          metadata: KT
        }, null, YT), (0, lT.e)(TT, null, RT, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLogarithmicDepth" in TT,
            get: TT => TT.useLogarithmicDepth
          },
          metadata: KT
        }, null, YT), (0, lT.e)(TT, null, UT, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "transparencyMode" in TT,
            get: TT => TT.transparencyMode
          },
          metadata: KT
        }, null, YT), (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, kT) => {
              TT.id = kT
            }
          },
          metadata: KT
        }, BT, WT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, kT) => {
              TT.uniqueId = kT
            }
          },
          metadata: KT
        }, nT, pT), (0, lT.e)(null, null, NT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, kT) => {
              TT.name = kT
            }
          },
          metadata: KT
        }, iT, qT), (0, lT.e)(null, null, QT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, kT) => {
              TT.metadata = kT
            }
          },
          metadata: KT
        }, sT, Tk), (0, lT.e)(null, null, ST, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: TT => "checkReadyOnEveryCall" in TT,
            get: TT => TT.checkReadyOnEveryCall,
            set: (TT, kT) => {
              TT.checkReadyOnEveryCall = kT
            }
          },
          metadata: KT
        }, kk, ck), (0, lT.e)(null, null, DT, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: TT => "checkReadyOnlyOnce" in TT,
            get: TT => TT.checkReadyOnlyOnce,
            set: (TT, kT) => {
              TT.checkReadyOnlyOnce = kT
            }
          },
          metadata: KT
        }, lk, Mk), (0, lT.e)(null, null, aT, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: TT => "state" in TT,
            get: TT => TT.state,
            set: (TT, kT) => {
              TT.state = kT
            }
          },
          metadata: KT
        }, Kk, Ok), (0, lT.e)(null, null, FT, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "_alpha" in TT,
            get: TT => TT._alpha,
            set: (TT, kT) => {
              TT._alpha = kT
            }
          },
          metadata: KT
        }, yk, fk), (0, lT.e)(null, null, rT, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: TT => "_backFaceCulling" in TT,
            get: TT => TT._backFaceCulling,
            set: (TT, kT) => {
              TT._backFaceCulling = kT
            }
          },
          metadata: KT
        }, xk, Ik), (0, lT.e)(null, null, PT, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_textureRepetitionMode" in TT,
            get: TT => TT._textureRepetitionMode,
            set: (TT, kT) => {
              TT._textureRepetitionMode = kT
            }
          },
          metadata: KT
        }, Ak, Ck), (0, lT.e)(null, null, wT, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRepetitionHexTilingParams" in TT,
            get: TT => TT.textureRepetitionHexTilingParams,
            set: (TT, kT) => {
              TT.textureRepetitionHexTilingParams = kT
            }
          },
          metadata: KT
        }, jk, vk), (0, lT.e)(null, null, mT, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: TT => "_cullBackFaces" in TT,
            get: TT => TT._cullBackFaces,
            set: (TT, kT) => {
              TT._cullBackFaces = kT
            }
          },
          metadata: KT
        }, tk, hk), (0, lT.e)(null, null, bT, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: TT => "sideOrientation" in TT,
            get: TT => TT.sideOrientation,
            set: (TT, kT) => {
              TT.sideOrientation = kT
            }
          },
          metadata: KT
        }, Nk, Qk), (0, lT.e)(null, null, zT, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_alphaMode" in TT,
            get: TT => TT._alphaMode,
            set: (TT, kT) => {
              TT._alphaMode = kT
            }
          },
          metadata: KT
        }, Sk, Dk), (0, lT.e)(null, null, JT, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: TT => "_needDepthPrePass" in TT,
            get: TT => TT._needDepthPrePass,
            set: (TT, kT) => {
              TT._needDepthPrePass = kT
            }
          },
          metadata: KT
        }, ak, Fk), (0, lT.e)(null, null, oT, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableDepthWrite" in TT,
            get: TT => TT.disableDepthWrite,
            set: (TT, kT) => {
              TT.disableDepthWrite = kT
            }
          },
          metadata: KT
        }, rk, Pk), (0, lT.e)(null, null, HT, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableColorWrite" in TT,
            get: TT => TT.disableColorWrite,
            set: (TT, kT) => {
              TT.disableColorWrite = kT
            }
          },
          metadata: KT
        }, wk, mk), (0, lT.e)(null, null, eT, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceDepthWrite" in TT,
            get: TT => TT.forceDepthWrite,
            set: (TT, kT) => {
              TT.forceDepthWrite = kT
            }
          },
          metadata: KT
        }, bk, zk), (0, lT.e)(null, null, GT, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: TT => "depthFunction" in TT,
            get: TT => TT.depthFunction,
            set: (TT, kT) => {
              TT.depthFunction = kT
            }
          },
          metadata: KT
        }, Jk, Hk), (0, lT.e)(null, null, VT, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "separateCullingPass" in TT,
            get: TT => TT.separateCullingPass,
            set: (TT, kT) => {
              TT.separateCullingPass = kT
            }
          },
          metadata: KT
        }, ek, Gk), (0, lT.e)(null, null, ET, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "_fogEnabled" in TT,
            get: TT => TT._fogEnabled,
            set: (TT, kT) => {
              TT._fogEnabled = kT
            }
          },
          metadata: KT
        }, Vk, Ek), (0, lT.e)(null, null, ZT, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: TT => "pointSize" in TT,
            get: TT => TT.pointSize,
            set: (TT, kT) => {
              TT.pointSize = kT
            }
          },
          metadata: KT
        }, Zk, uk), (0, lT.e)(null, null, uT, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "zOffset" in TT,
            get: TT => TT.zOffset,
            set: (TT, kT) => {
              TT.zOffset = kT
            }
          },
          metadata: KT
        }, Xk, dk), (0, lT.e)(null, null, XT, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: TT => "zOffsetUnits" in TT,
            get: TT => TT.zOffsetUnits,
            set: (TT, kT) => {
              TT.zOffsetUnits = kT
            }
          },
          metadata: KT
        }, Lk, Rk), (0, lT.e)(null, null, gT, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: TT => "_isVertexOutputInvariant" in TT,
            get: TT => TT._isVertexOutputInvariant,
            set: (TT, kT) => {
              TT._isVertexOutputInvariant = kT
            }
          },
          metadata: KT
        }, gk, Uk), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT.TriangleFillMode = 0, TT.WireFrameFillMode = 1, TT.PointFillMode = 2, TT.PointListDrawMode = 3, TT.LineListDrawMode = 4, TT.LineLoopDrawMode = 5, TT.LineStripDrawMode = 6, TT.TriangleStripDrawMode = 7, TT.TriangleFanDrawMode = 8, TT.ClockWiseSideOrientation = 0, TT.CounterClockWiseSideOrientation = 1, TT.ImageProcessingDirtyFlag = 64, TT.TextureDirtyFlag = 1, TT.LightDirtyFlag = 2, TT.FresnelDirtyFlag = 4, TT.AttributesDirtyFlag = 8, TT.MiscDirtyFlag = 16, TT.PrePassDirtyFlag = 32, TT.AllDirtyFlag = 127, TT.MATERIAL_OPAQUE = 0, TT.MATERIAL_ALPHATEST = 1, TT.MATERIAL_ALPHABLEND = 2, TT.MATERIAL_ALPHATESTANDBLEND = 3, TT.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, TT.MATERIAL_NORMALBLENDMETHOD_RNM = 1, TT.LIGHTFALLOFF_PHYSICAL = 0, TT.LIGHTFALLOFF_GLTF = 1, TT.LIGHTFALLOFF_STANDARD = 2, TT.OnEventObservable = new OT.b, TT.ForceVertexOutputInvariant = !1, TT._AllDirtyCallBack = TT => TT.markAllAsDirty(), TT._ImageProcessingDirtyCallBack = TT => TT.markAsImageProcessingDirty(), TT._TextureDirtyCallBack = TT => TT.markAsTexturesDirty(), TT._FresnelDirtyCallBack = TT => TT.markAsFresnelDirty(), TT._MiscDirtyCallBack = TT => TT.markAsMiscDirty(), TT._PrePassDirtyCallBack = TT => TT.markAsPrePassDirty(), TT._LightsDirtyCallBack = TT => TT.markAsLightDirty(), TT._AttributeDirtyCallBack = TT => TT.markAsAttributesDirty(), TT._FresnelAndMiscDirtyCallBack = kT => {
        TT._FresnelDirtyCallBack(kT), TT._MiscDirtyCallBack(kT)
      }, TT._TextureAndMiscDirtyCallBack = kT => {
        TT._TextureDirtyCallBack(kT), TT._MiscDirtyCallBack(kT)
      }, TT._DirtyCallbackArray = [], TT._RunDirtyCallBacks = kT => {
        for (const cT of TT._DirtyCallbackArray) cT(kT)
      }, TT
    })();
    Object.getOwnPropertyDescriptor(QT.prototype, "pluginManager") || Object.defineProperty(QT.prototype, "pluginManager", (0, NT.d)("Material", "pluginManager"))
  },
  39959: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(39516);
    class MT {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(TT) {
        this._DiffuseTextureEnabled !== TT && (this._DiffuseTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(TT) {
        this._BaseWeightTextureEnabled !== TT && (this._BaseWeightTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(TT) {
        this._BaseDiffuseRoughnessTextureEnabled !== TT && (this._BaseDiffuseRoughnessTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(TT) {
        this._DetailTextureEnabled !== TT && (this._DetailTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(TT) {
        this._DecalMapEnabled !== TT && (this._DecalMapEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(TT) {
        this._AmbientTextureEnabled !== TT && (this._AmbientTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(TT) {
        this._OpacityTextureEnabled !== TT && (this._OpacityTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(TT) {
        this._ReflectionTextureEnabled !== TT && (this._ReflectionTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(TT) {
        this._EmissiveTextureEnabled !== TT && (this._EmissiveTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(TT) {
        this._SpecularTextureEnabled !== TT && (this._SpecularTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(TT) {
        this._BumpTextureEnabled !== TT && (this._BumpTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(TT) {
        this._LightmapTextureEnabled !== TT && (this._LightmapTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(TT) {
        this._RefractionTextureEnabled !== TT && (this._RefractionTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(TT) {
        this._ColorGradingTextureEnabled !== TT && (this._ColorGradingTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(TT) {
        this._FresnelEnabled !== TT && (this._FresnelEnabled = TT, lT.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(TT) {
        this._ClearCoatTextureEnabled !== TT && (this._ClearCoatTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(TT) {
        this._ClearCoatBumpTextureEnabled !== TT && (this._ClearCoatBumpTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(TT) {
        this._ClearCoatTintTextureEnabled !== TT && (this._ClearCoatTintTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(TT) {
        this._SheenTextureEnabled !== TT && (this._SheenTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(TT) {
        this._AnisotropicTextureEnabled !== TT && (this._AnisotropicTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(TT) {
        this._ThicknessTextureEnabled !== TT && (this._ThicknessTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(TT) {
        this._RefractionIntensityTextureEnabled !== TT && (this._RefractionIntensityTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(TT) {
        this._TranslucencyIntensityTextureEnabled !== TT && (this._TranslucencyIntensityTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(TT) {
        this._TranslucencyColorTextureEnabled !== TT && (this._TranslucencyColorTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(TT) {
        this._IridescenceTextureEnabled !== TT && (this._IridescenceTextureEnabled = TT, lT.d.MarkAllMaterialsAsDirty(1))
      }
    }
    MT._DiffuseTextureEnabled = !0, MT._BaseWeightTextureEnabled = !0, MT._BaseDiffuseRoughnessTextureEnabled = !0, MT._DetailTextureEnabled = !0, MT._DecalMapEnabled = !0, MT._AmbientTextureEnabled = !0, MT._OpacityTextureEnabled = !0, MT._ReflectionTextureEnabled = !0, MT._EmissiveTextureEnabled = !0, MT._SpecularTextureEnabled = !0, MT._BumpTextureEnabled = !0, MT._LightmapTextureEnabled = !0, MT._RefractionTextureEnabled = !0, MT._ColorGradingTextureEnabled = !0, MT._FresnelEnabled = !0, MT._ClearCoatTextureEnabled = !0, MT._ClearCoatBumpTextureEnabled = !0, MT._ClearCoatTintTextureEnabled = !0, MT._SheenTextureEnabled = !0, MT._AnisotropicTextureEnabled = !0, MT._ThicknessTextureEnabled = !0, MT._RefractionIntensityTextureEnabled = !0, MT._TranslucencyIntensityTextureEnabled = !0, MT._TranslucencyColorTextureEnabled = !0, MT._IridescenceTextureEnabled = !0
  },
  39943: (TT, kT, cT) => {
    cT.d(kT, {
      D: () => aT,
      F: () => bT,
      G: () => zT,
      I: () => jT,
      J: () => CT,
      N: () => LT,
      O: () => ET,
      Q: () => GT,
      U: () => eT,
      V: () => ST,
      X: () => oT,
      _: () => RT,
      bb: () => gT,
      d: () => HT,
      e: () => FT,
      f: () => AT,
      fb: () => UT,
      j: () => NT,
      jb: () => nT,
      l: () => QT,
      m: () => mT,
      nb: () => BT,
      p: () => fT,
      q: () => tT,
      qb: () => WT,
      r: () => hT,
      ub: () => vT,
      v: () => DT,
      z: () => JT
    });
    var lT = cT(38512),
      MT = cT(36925),
      KT = cT(39829),
      OT = cT(39951),
      yT = cT(39959);

    function fT(TT, kT, cT) {
      if (!TT || TT.LOGARITHMICDEPTH || TT.indexOf && TT.indexOf("LOGARITHMICDEPTH") >= 0) {
        const TT = cT.activeCamera;
        1 === TT.mode && lT.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), kT.setFloat("logarithmicDepthConstant", 2 / (Math.log(TT.maxZ + 1) / Math.LN2))
      }
    }
    const xT = {
        r: 0,
        g: 0,
        b: 0
      },
      IT = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function AT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      cT && TT.fogEnabled && (!kT || kT.applyFog) && 0 !== TT.fogMode && (cT.setFloat4("vFogInfos", TT.fogMode, TT.fogStart, TT.fogEnd, TT.fogDensity), lT ? (TT.fogColor.toLinearSpaceToRef(xT, TT.Dv().useExactSrgbConversions), cT.setColor3("vFogColor", xT)) : cT.setColor3("vFogColor", TT.fogColor))
    }

    function CT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
      const AT = TT.numMaxInfluencers || TT.numInfluencers;
      return AT <= 0 ? 0 : (kT.push("#define MORPHTARGETS"), TT.hasPositions && kT.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), TT.hasNormals && kT.push("#define MORPHTARGETTEXTURE_HASNORMALS"), TT.hasTangents && kT.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), TT.hasUVs && kT.push("#define MORPHTARGETTEXTURE_HASUVS"), TT.hasUV2s && kT.push("#define MORPHTARGETTEXTURE_HASUV2S"), TT.hasColors && kT.push("#define MORPHTARGETTEXTURE_HASCOLORS"), TT.supportsPositions && MT && kT.push("#define MORPHTARGETS_POSITION"), TT.supportsNormals && KT && kT.push("#define MORPHTARGETS_NORMAL"), TT.supportsTangents && OT && kT.push("#define MORPHTARGETS_TANGENT"), TT.supportsUVs && yT && kT.push("#define MORPHTARGETS_UV"), TT.supportsUV2s && fT && kT.push("#define MORPHTARGETS_UV2"), TT.supportsColors && xT && kT.push("#define MORPHTARGETS_COLOR"), kT.push("#define NUM_MORPH_INFLUENCERS " + AT), TT.isUsingTextureForTargets && kT.push("#define MORPHTARGETS_TEXTURE"), IT.NUM_MORPH_INFLUENCERS = AT, IT.NORMAL = KT, IT.TANGENT = OT, IT.UV = yT, IT.UV2 = fT, IT.COLOR = xT, jT(cT, lT, IT, MT), AT)
    }

    function jT(TT, kT, cT) {
      let KT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const OT = cT.NUM_MORPH_INFLUENCERS;
      if (OT > 0 && MT.d.LastCreatedEngine) {
        const yT = MT.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          fT = kT.morphTargetManager;
        if (fT?.isUsingTextureForTargets) return;
        const xT = fT && fT.supportsPositions && KT,
          IT = fT && fT.supportsNormals && cT.NORMAL,
          AT = fT && fT.supportsTangents && cT.TANGENT,
          CT = fT && fT.supportsUVs && cT.UV1,
          jT = fT && fT.supportsUV2s && cT.UV2,
          vT = fT && fT.supportsColors && cT.VERTEXCOLOR;
        for (let cT = 0; cT < OT; cT++) xT && TT.push("position" + cT), IT && TT.push("normal" + cT), AT && TT.push("tangent" + cT), CT && TT.push("uv_" + cT), jT && TT.push("uv2_" + cT), vT && TT.push("color" + cT), TT.length > yT && lT.e.Error("Cannot add more vertex attributes for mesh " + kT.name)
      }
    }

    function vT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      TT.push("world0"), TT.push("world1"), TT.push("world2"), TT.push("world3"), kT && (TT.push("previousWorld0"), TT.push("previousWorld1"), TT.push("previousWorld2"), TT.push("previousWorld3"))
    }

    function tT(TT, kT) {
      const cT = TT.morphTargetManager;
      TT && cT && kT.setFloatArray("morphTargetInfluences", cT.influences)
    }

    function hT(TT, kT) {
      kT.bindToEffect(TT, "Scene")
    }

    function NT(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        xT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        IT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        AT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        CT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (TT.texturesEnabled && MT && yT.b.ReflectionTextureEnabled) {
        if (cT.X3("reflectionMatrix", MT.getReflectionTextureMatrix()), cT.updateFloat2("vReflectionInfos", MT.level * TT.iblIntensity, CT), fT && MT.boundingBoxSize) {
          const TT = MT;
          cT.updateVector3("vReflectionPosition", TT.boundingBoxPosition), cT.updateVector3("vReflectionSize", TT.boundingBoxSize)
        }
        if (KT) {
          const TT = MT.getSize().width;
          cT.updateFloat2("vReflectionFilteringInfo", TT, Math.log2(TT))
        }
        if (IT && !kT.USEIRRADIANCEMAP) {
          const TT = MT.sphericalPolynomial;
          if (kT.USESPHERICALFROMREFLECTIONMAP && TT)
            if (kT.SPHERICAL_HARMONICS) {
              const kT = TT.preScaledHarmonics;
              cT.updateVector3("vSphericalL00", kT.l00), cT.updateVector3("vSphericalL1_1", kT.l1_1), cT.updateVector3("vSphericalL10", kT.l10), cT.updateVector3("vSphericalL11", kT.l11), cT.updateVector3("vSphericalL2_2", kT.l2_2), cT.updateVector3("vSphericalL2_1", kT.l2_1), cT.updateVector3("vSphericalL20", kT.l20), cT.updateVector3("vSphericalL21", kT.l21), cT.updateVector3("vSphericalL22", kT.l22)
            } else cT.updateFloat3("vSphericalX", TT.x.x, TT.x.y, TT.x.z), cT.updateFloat3("vSphericalY", TT.y.x, TT.y.y, TT.y.z), cT.updateFloat3("vSphericalZ", TT.z.x, TT.z.y, TT.z.z), cT.updateFloat3("vSphericalXX_ZZ", TT.xx.x - TT.zz.x, TT.xx.y - TT.zz.y, TT.xx.z - TT.zz.z), cT.updateFloat3("vSphericalYY_ZZ", TT.yy.x - TT.zz.x, TT.yy.y - TT.zz.y, TT.yy.z - TT.zz.z), cT.updateFloat3("vSphericalZZ", TT.zz.x, TT.zz.y, TT.zz.z), cT.updateFloat3("vSphericalXY", TT.xy.x, TT.xy.y, TT.xy.z), cT.updateFloat3("vSphericalYZ", TT.yz.x, TT.yz.y, TT.yz.z), cT.updateFloat3("vSphericalZX", TT.zx.x, TT.zx.y, TT.zx.z)
        } else xT && kT.USEIRRADIANCEMAP && kT.USE_IRRADIANCE_DOMINANT_DIRECTION && MT.irradianceTexture && cT.updateVector3("vReflectionDominantDirection", MT.irradianceTexture._dominantDirection);
        OT && cT.updateFloat3("vReflectionMicrosurfaceInfos", MT.getSize().width, MT.lodGenerationScale, MT.lodGenerationOffset)
      }
      AT && cT.updateColor3("vReflectionColor", lT)
    }

    function QT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (lT && yT.b.ReflectionTextureEnabled) {
        kT.LODBASEDMICROSFURACE ? cT.setTexture("reflectionSampler", lT) : (cT.setTexture("reflectionSampler", lT._lodTextureMid || lT), cT.setTexture("reflectionSamplerLow", lT._lodTextureLow || lT), cT.setTexture("reflectionSamplerHigh", lT._lodTextureHigh || lT)), kT.USEIRRADIANCEMAP && cT.setTexture("irradianceSampler", lT.irradianceTexture);
        const KT = TT.iblCdfGenerator;
        MT && KT && cT.setTexture("icdfSampler", KT.getIcdfTexture())
      }
    }

    function ST(TT, kT, cT) {
      kT._needUVs = !0, kT[cT] = !0, TT.optimizeUVAllocation && TT.getTextureMatrix().isIdentityAs3x2() ? (kT[cT + "DIRECTUV"] = TT.coordinatesIndex + 1, kT["MAINUV" + (TT.coordinatesIndex + 1)] = !0) : kT[cT + "DIRECTUV"] = 0
    }

    function DT(TT, kT, cT) {
      const lT = TT.getTextureMatrix();
      kT.X3(cT + "Matrix", lT)
    }

    function aT(TT, kT, cT) {
      cT.BAKED_VERTEX_ANIMATION_TEXTURE && cT.INSTANCES && TT.push("bakedVertexAnimationSettingsInstanced")
    }

    function FT(TT, kT, cT) {
      var lT;
      if (kT && TT && (TT.computeBonesUsingShaders && kT._bonesComputationForcedToCPU && (TT.computeBonesUsingShaders = !1), TT.useBones && TT.computeBonesUsingShaders && TT.skeleton)) {
        const MT = TT.skeleton;
        if (MT.isUsingTextureForMatrices && kT.getUniformIndex("boneTextureInfo") > -1) {
          const cT = MT.getTransformMatrixTexture(TT);
          kT.setTexture("boneSampler", cT), kT.setFloat2("boneTextureInfo", MT._textureWidth, MT._textureHeight)
        } else {
          const KT = MT.getTransformMatrices(TT);
          KT && (kT.setMatrices("mBones", KT), cT && TT.NJ().prePassRenderer && TT.NJ().prePassRenderer.getIndex(2) && (cT.previousBones[TT.uniqueId] || (cT.previousBones[TT.uniqueId] = KT.slice()), kT.setMatrices("mPreviousBones", cT.previousBones[TT.uniqueId]), lT = KT, cT.previousBones[TT.uniqueId].set(lT)))
        }
      }
    }

    function rT(TT, kT, cT, lT, MT) {
      let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      TT._bindLight(kT, cT, lT, MT, KT)
    }
    const PT = 4,
      wT = new WeakMap;

    function mT(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const KT = Math.min(kT.lightSources.length, MT);
      for (let OT = 0; OT < KT; OT++) {
        rT(kT.lightSources[OT], OT, TT, cT, "boolean" === typeof lT ? lT : lT.SPECULARTERM, kT.receiveShadows)
      }
    }

    function bT(TT, kT, cT, lT) {
      cT.NUM_BONE_INFLUENCERS > 0 && (lT.addCPUSkinningFallback(0, kT), TT.push("matricesIndices"), TT.push("matricesWeights"), cT.NUM_BONE_INFLUENCERS > 4 && (TT.push("matricesIndicesExtra"), TT.push("matricesWeightsExtra")))
    }

    function zT(TT, kT) {
      (kT.INSTANCES || kT.THIN_INSTANCES) && vT(TT, !!kT.PREPASS_VELOCITY), kT.INSTANCESCOLOR && TT.push("instanceColor")
    }

    function JT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        MT = 0;
      for (let KT = 0; KT < cT && TT["LIGHT" + KT]; KT++) KT > 0 && (MT = lT + KT, kT.addFallback(MT, "LIGHT" + KT)), TT.SHADOWS || (TT["SHADOW" + KT] && kT.addFallback(lT, "SHADOW" + KT), TT["SHADOWPCF" + KT] && kT.addFallback(lT, "SHADOWPCF" + KT), TT["SHADOWPCSS" + KT] && kT.addFallback(lT, "SHADOWPCSS" + KT), TT["SHADOWPOISSON" + KT] && kT.addFallback(lT, "SHADOWPOISSON" + KT), TT["SHADOWESM" + KT] && kT.addFallback(lT, "SHADOWESM" + KT), TT["SHADOWCLOSEESM" + KT] && kT.addFallback(lT, "SHADOWCLOSEESM" + KT));
      return MT
    }

    function oT(TT, kT, cT, lT, MT, KT, OT) {
      let yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        xT = arguments.length > 9 ? arguments[9] : void 0,
        IT = arguments.length > 10 ? arguments[10] : void 0;
      if (OT._areMiscDirty) {
        OT.LOGARITHMICDEPTH = cT, OT.POINTSIZE = lT, OT.FOG = MT && function(TT, kT) {
          return kT.fogEnabled && TT.applyFog && 0 !== kT.fogMode
        }(TT, kT), OT.NONUNIFORMSCALING = TT.nonUniformScaling, OT.ALPHATEST = KT, OT.DECAL_AFTER_DETAIL = yT, OT.USE_VERTEX_PULLING = fT, OT.RIGHT_HANDED = kT.useRightHandedSystem;
        const AT = fT ? xT?.geometry?.getIndexBuffer() : null,
          CT = !!xT && xT.isUnIndexed;
        OT.VERTEX_PULLING_USE_INDEX_BUFFER = !!AT && !CT, OT.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!AT || CT) && AT.is32Bits, OT.VERTEXOUTPUT_INVARIANT = !!IT
      }
    }

    function HT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!TT.lightsEnabled || lT) return !0;
      const MT = kT.lightSources,
        KT = Math.min(MT.length, cT);
      for (let OT = 0; OT < KT; OT++)
        if (!MT[OT].areLightTexturesReady()) return !1;
      return !0
    }

    function eT(TT, kT, cT, MT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!cT._areLightsDirty) return cT._needNormals;
      const yT = KT;
      KT = function(TT, kT) {
        const cT = TT.Dv().getCaps().maxUniformBuffersPerShaderStage;
        if (null == cT) return kT;
        const lT = Math.max(cT - PT, 1);
        return Math.min(kT, lT)
      }(TT, KT);
      let fT = 0;
      const xT = {
        needNormals: cT._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (TT.lightsEnabled && !OT) {
        kT.lightSources.length > KT && KT < yT && function(TT, kT, cT, MT) {
          let KT = wT.get(TT);
          KT || (KT = new Set, wT.set(TT, KT)), KT.has(MT) || (KT.add(MT), lT.e.Warn(`maxSimultaneousLights is ${kT} but this engine supports at most ${cT} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${MT} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${MT+PT} uniform buffers, over the device limit of ${TT.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${cT}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${cT} or less to silence this warning.`))
        }(TT.Dv(), yT, KT, Math.min(kT.lightSources.length, yT));
        for (const lT of kT.lightSources)
          if (VT(TT, kT, lT, fT, cT, MT, xT), fT++, fT === KT) break
      }
      cT.SPECULARTERM = xT.specularEnabled, cT.SHADOWS = xT.shadowEnabled;
      const IT = Math.max(KT, cT.MAXLIGHTCOUNT || 0);
      for (let lT = fT; lT < IT; lT++) void 0 !== cT["LIGHT" + lT] && (cT["LIGHT" + lT] = !1, cT["HEMILIGHT" + lT] = !1, cT["POINTLIGHT" + lT] = !1, cT["DIRLIGHT" + lT] = !1, cT["SPOTLIGHT" + lT] = !1, cT["AREALIGHT" + lT] = !1, cT["CLUSTLIGHT" + lT] = !1, cT["SHADOW" + lT] = !1, cT["SHADOWCSM" + lT] = !1, cT["SHADOWCSMDEBUG" + lT] = !1, cT["SHADOWCSMNUM_CASCADES" + lT] = !1, cT["SHADOWCSMUSESHADOWMAXZ" + lT] = !1, cT["SHADOWCSMNOBLEND" + lT] = !1, cT["SHADOWCSM_RIGHTHANDED" + lT] = !1, cT["SHADOWPCF" + lT] = !1, cT["SHADOWPCSS" + lT] = !1, cT["SHADOWPOISSON" + lT] = !1, cT["SHADOWESM" + lT] = !1, cT["SHADOWCLOSEESM" + lT] = !1, cT["SHADOWCUBE" + lT] = !1, cT["SHADOWLOWQUALITY" + lT] = !1, cT["SHADOWMEDIUMQUALITY" + lT] = !1);
      cT.LIGHTCOUNT = fT, cT.MAXLIGHTCOUNT = KT;
      const AT = TT.Dv().getCaps();
      return void 0 === cT.SHADOWFLOAT && (xT.needRebuild = !0), cT.SHADOWFLOAT = xT.shadowEnabled && (AT.textureFloatRender && AT.textureFloatLinearFiltering || AT.textureHalfFloatRender && AT.textureHalfFloatLinearFiltering), cT.LIGHTMAPEXCLUDED = xT.lightmapMode, xT.needRebuild && cT.rebuild(), xT.needNormals
    }

    function GT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (kT && yT.b.ReflectionTextureEnabled) {
        if (!kT.isReadyOrNotBlocking()) return !1;
        cT._needNormals = !0, cT.REFLECTION = !0, cT.GAMMAREFLECTION = kT.gammaSpace, cT.RGBDREFLECTION = kT.isRGBD, cT.LODINREFLECTIONALPHA = kT.lodLevelInAlpha, cT.LINEARSPECULARREFLECTION = kT.linearSpecularLOD, cT.USEIRRADIANCEMAP = !1, cT.LODBASEDMICROSFURACE = TT.Dv().getCaps().textureLOD;
        const OT = TT.Dv();
        switch (lT && MT > 0 ? (cT.NUM_SAMPLES = "" + MT, OT._features.needTypeSuffixInShaderConstants && (cT.NUM_SAMPLES = cT.NUM_SAMPLES + "u"), cT.REALTIME_FILTERING = !0, TT.iblCdfGenerator && (cT.IBL_CDF_FILTERING = !0)) : cT.REALTIME_FILTERING = !1, cT.INVERTCUBICMAP = 6 === kT.coordinatesMode, cT.REFLECTIONMAP_3D = kT.isCube, cT.REFLECTIONMAP_OPPOSITEZ = cT.REFLECTIONMAP_3D && TT.useRightHandedSystem ? !kT.invertZ : kT.invertZ, cT.REFLECTIONMAP_CUBIC = !1, cT.REFLECTIONMAP_EXPLICIT = !1, cT.REFLECTIONMAP_PLANAR = !1, cT.REFLECTIONMAP_PROJECTION = !1, cT.REFLECTIONMAP_SKYBOX = !1, cT.REFLECTIONMAP_SPHERICAL = !1, cT.REFLECTIONMAP_EQUIRECTANGULAR = !1, cT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, cT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, kT.coordinatesMode) {
          case 0:
            cT.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            cT.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            cT.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            cT.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            cT.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            cT.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            cT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            cT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            cT.REFLECTIONMAP_CUBIC = !0, cT.USE_LOCAL_REFLECTIONMAP_CUBIC = !!kT.boundingBoxSize
        }
        5 !== kT.coordinatesMode && (kT.irradianceTexture ? (cT.USEIRRADIANCEMAP = !0, cT.USESPHERICALFROMREFLECTIONMAP = !1, cT.USESPHERICALINVERTEX = !1, kT.irradianceTexture._dominantDirection ? cT.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : cT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : kT.isCube && (cT.USESPHERICALFROMREFLECTIONMAP = !0, cT.USEIRRADIANCEMAP = !1, cT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, cT.USESPHERICALINVERTEX = KT))
      } else cT.REFLECTION = !1, cT.REFLECTIONMAP_3D = !1, cT.REFLECTIONMAP_SPHERICAL = !1, cT.REFLECTIONMAP_PLANAR = !1, cT.REFLECTIONMAP_CUBIC = !1, cT.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, cT.REFLECTIONMAP_PROJECTION = !1, cT.REFLECTIONMAP_SKYBOX = !1, cT.REFLECTIONMAP_EXPLICIT = !1, cT.REFLECTIONMAP_EQUIRECTANGULAR = !1, cT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, cT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, cT.INVERTCUBICMAP = !1, cT.USESPHERICALFROMREFLECTIONMAP = !1, cT.USEIRRADIANCEMAP = !1, cT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, cT.USESPHERICALINVERTEX = !1, cT.REFLECTIONMAP_OPPOSITEZ = !1, cT.LODINREFLECTIONALPHA = !1, cT.GAMMAREFLECTION = !1, cT.RGBDREFLECTION = !1, cT.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function VT(TT, kT, cT, lT, MT, OT, yT) {
      switch (yT.needNormals = !0, void 0 === MT["LIGHT" + lT] && (yT.needRebuild = !0), MT["LIGHT" + lT] = !0, MT["SPOTLIGHT" + lT] = !1, MT["HEMILIGHT" + lT] = !1, MT["POINTLIGHT" + lT] = !1, MT["DIRLIGHT" + lT] = !1, MT["AREALIGHT" + lT] = !1, MT["CLUSTLIGHT" + lT] = !1, cT.prepareLightSpecificDefines(MT, lT), MT["LIGHT_FALLOFF_PHYSICAL" + lT] = !1, MT["LIGHT_FALLOFF_GLTF" + lT] = !1, MT["LIGHT_FALLOFF_STANDARD" + lT] = !1, cT.falloffType) {
        case KT.b.FALLOFF_GLTF:
          MT["LIGHT_FALLOFF_GLTF" + lT] = !0;
          break;
        case KT.b.FALLOFF_PHYSICAL:
          MT["LIGHT_FALLOFF_PHYSICAL" + lT] = !0;
          break;
        case KT.b.FALLOFF_STANDARD:
          MT["LIGHT_FALLOFF_STANDARD" + lT] = !0
      }
      if (OT && !cT.specular.equalsFloats(0, 0, 0) && (yT.specularEnabled = !0), MT["SHADOW" + lT] = !1, MT["SHADOWCSM" + lT] = !1, MT["SHADOWCSMDEBUG" + lT] = !1, MT["SHADOWCSMNUM_CASCADES" + lT] = !1, MT["SHADOWCSMUSESHADOWMAXZ" + lT] = !1, MT["SHADOWCSMNOBLEND" + lT] = !1, MT["SHADOWCSM_RIGHTHANDED" + lT] = !1, MT["SHADOWPCF" + lT] = !1, MT["SHADOWPCSS" + lT] = !1, MT["SHADOWPOISSON" + lT] = !1, MT["SHADOWESM" + lT] = !1, MT["SHADOWCLOSEESM" + lT] = !1, MT["SHADOWCUBE" + lT] = !1, MT["SHADOWLOWQUALITY" + lT] = !1, MT["SHADOWMEDIUMQUALITY" + lT] = !1, kT && kT.receiveShadows && TT.shadowsEnabled && cT.shadowEnabled) {
        const kT = cT.getShadowGenerator(TT.activeCamera) ?? cT.getShadowGenerator();
        if (kT) {
          const TT = kT.getShadowMap();
          TT && TT.renderList && TT.renderList.length > 0 && (yT.shadowEnabled = !0, kT.prepareDefines(MT, lT))
        }
      }
      cT.lightmapMode != KT.b.LIGHTMAP_DEFAULT ? (yT.lightmapMode = !0, MT["LIGHTMAPEXCLUDED" + lT] = !0, MT["LIGHTMAPNOSPECULAR" + lT] = cT.lightmapMode == KT.b.LIGHTMAP_SHADOWSONLY) : (MT["LIGHTMAPEXCLUDED" + lT] = !1, MT["LIGHTMAPNOSPECULAR" + lT] = !1)
    }

    function ET(TT, kT, cT, lT, MT) {
      let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fT = function(TT, kT) {
          let cT = !1;
          if (TT.activeCamera) {
            const lT = kT.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              MT = kT.CAMERA_PERSPECTIVE ? 1 : 0,
              KT = 1 === TT.activeCamera.mode ? 1 : 0,
              OT = 0 === TT.activeCamera.mode ? 1 : 0;
            (lT ^ KT || MT ^ OT) && (kT.CAMERA_ORTHOGRAPHIC = 1 === KT, kT.CAMERA_PERSPECTIVE = 1 === OT, cT = !0)
          }
          return cT
        }(TT, lT);
      !1 !== KT && (fT = (0, OT.j)(cT, TT, lT)), lT.DEPTHPREPASS !== !kT.getColorWrite() && (lT.DEPTHPREPASS = !lT.DEPTHPREPASS, fT = !0), lT.INSTANCES !== MT && (lT.INSTANCES = MT, fT = !0), lT.THIN_INSTANCES !== yT && (lT.THIN_INSTANCES = yT, fT = !0), fT && lT.markAsUnprocessed()
    }
    const ZT = 40,
      uT = 64,
      XT = new WeakMap,
      dT = new WeakSet;

    function LT(TT, kT, cT, MT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        yT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!kT._areAttributesDirty && kT._needNormals === kT._normals && kT._needUVs === kT._uvs) return !1;
      kT._normals = kT._needNormals, kT._uvs = kT._needUVs, kT.NORMAL = kT._needNormals && TT.isVerticesDataPresent("normal"), kT._needNormals && TT.isVerticesDataPresent("tangent") && (kT.TANGENT = !0);
      for (let lT = 1; lT <= 6; ++lT) kT["UV" + lT] = !!kT._needUVs && TT.isVerticesDataPresent(`uv${1===lT?"":lT}`);
      if (cT) {
        const cT = TT.useVertexColors && TT.isVerticesDataPresent("color");
        kT.VERTEXCOLOR = cT, kT.VERTEXALPHA = TT.hasVertexAlpha && cT && OT
      }
      return TT.isVerticesDataPresent("instanceColor") && (TT.tlT || TT.hasThinInstances) && (kT.INSTANCESCOLOR = !0), MT && function(TT, kT) {
        if (TT.useBones && TT.computeBonesUsingShaders && TT.skeleton) {
          kT.NUM_BONE_INFLUENCERS = TT.numBoneInfluencers;
          const cT = void 0 !== kT.BONETEXTURE;
          if (TT.skeleton.isUsingTextureForMatrices && cT) kT.BONETEXTURE = !0;
          else {
            kT.BonesPerMesh = TT.skeleton.bones.length + 1, kT.BONETEXTURE = !cT && void 0;
            const MT = TT.NJ(),
              KT = MT.prePassRenderer;
            if (KT && KT.enabled) {
              const cT = -1 === KT.excludedSkinnedMesh.indexOf(TT);
              kT.BONES_VELOCITY_ENABLED = cT
            }
            const OT = !0 === kT.MULTIVIEW,
              yT = 2 * kT.BonesPerMesh + (OT ? 1 : 0);
            if (XT.get(TT.skeleton) !== yT) {
              XT.set(TT.skeleton, yT);
              const cT = MT.Dv().getCaps().maxVertexUniformVectors;
              if (cT && !dT.has(TT.skeleton)) {
                const MT = 4 * kT.BonesPerMesh,
                  KT = OT ? uT : ZT,
                  yT = Math.max(cT - KT, 0);
                (MT > yT || OT && 3 * MT > cT) && (dT.add(TT.skeleton), lT.e.Warn(`Skeleton "${TT.skeleton.name}": ${TT.skeleton.bones.length} bones stored as vertex uniforms use ${MT} of ~${yT} usable uniform vectors${OT?" (multiview)":""} on a device reporting ${cT}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else kT.NUM_BONE_INFLUENCERS = 0, kT.BonesPerMesh = 0, void 0 !== kT.BONETEXTURE && (kT.BONETEXTURE = !1)
      }(TT, kT), KT && function(TT, kT) {
        const cT = TT.morphTargetManager;
        cT ? (kT.MORPHTARGETS_UV = cT.supportsUVs && kT.UV1, kT.MORPHTARGETS_UV2 = cT.supportsUV2s && kT.UV2, kT.MORPHTARGETS_TANGENT = cT.supportsTangents && kT.TANGENT, kT.MORPHTARGETS_NORMAL = cT.supportsNormals && kT.NORMAL, kT.MORPHTARGETS_POSITION = cT.supportsPositions, kT.MORPHTARGETS_COLOR = cT.supportsColors, kT.MORPHTARGETTEXTURE_HASUVS = cT.hasUVs, kT.MORPHTARGETTEXTURE_HASUV2S = cT.hasUV2s, kT.MORPHTARGETTEXTURE_HASTANGENTS = cT.hasTangents, kT.MORPHTARGETTEXTURE_HASNORMALS = cT.hasNormals, kT.MORPHTARGETTEXTURE_HASPOSITIONS = cT.hasPositions, kT.MORPHTARGETTEXTURE_HASCOLORS = cT.hasColors, kT.NUM_MORPH_INFLUENCERS = cT.numMaxInfluencers || cT.numInfluencers, kT.MORPHTARGETS = kT.NUM_MORPH_INFLUENCERS > 0, kT.MORPHTARGETS_TEXTURE = cT.isUsingTextureForTargets) : (kT.MORPHTARGETS_UV = !1, kT.MORPHTARGETS_UV2 = !1, kT.MORPHTARGETS_TANGENT = !1, kT.MORPHTARGETS_NORMAL = !1, kT.MORPHTARGETS_POSITION = !1, kT.MORPHTARGETS_COLOR = !1, kT.MORPHTARGETTEXTURE_HASUVS = !1, kT.MORPHTARGETTEXTURE_HASUV2S = !1, kT.MORPHTARGETTEXTURE_HASTANGENTS = !1, kT.MORPHTARGETTEXTURE_HASNORMALS = !1, kT.MORPHTARGETTEXTURE_HASPOSITIONS = !1, kT.MORPHTARGETTEXTURE_HAS_COLORS = !1, kT.MORPHTARGETS = !1, kT.NUM_MORPH_INFLUENCERS = 0)
      }(TT, kT), yT && function(TT, kT) {
        const cT = TT.bakedVertexAnimationManager;
        kT.BAKED_VERTEX_ANIMATION_TEXTURE = !(!cT || !cT.isEnabled)
      }(TT, kT), !0
    }

    function RT(TT, kT) {
      if (TT.activeCamera) {
        const cT = kT.MULTIVIEW;
        kT.MULTIVIEW = null !== TT.activeCamera.outputRenderTarget && TT.activeCamera.outputRenderTarget.getViewCount() > 1, kT.MULTIVIEW != cT && kT.markAsUnprocessed()
      }
    }

    function gT(TT, kT, cT) {
      const lT = kT.ORDER_INDEPENDENT_TRANSPARENCY,
        MT = kT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      kT.ORDER_INDEPENDENT_TRANSPARENCY = TT.useOrderIndependentTransparency && cT, kT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !TT.Dv().getCaps().textureFloatLinearFiltering, lT === kT.ORDER_INDEPENDENT_TRANSPARENCY && MT === kT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || kT.markAsUnprocessed()
    }

    function UT(TT, kT, cT) {
      const lT = kT.PREPASS;
      if (!kT._arePrePassDirty) return;
      const MT = [{
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
      if (TT.prePassRenderer && TT.prePassRenderer.enabled && cT) {
        kT.PREPASS = !0, kT.SCENE_MRT_COUNT = TT.prePassRenderer.mrtCount, kT.PREPASS_NORMAL_WORLDSPACE = TT.prePassRenderer.generateNormalsInWorldSpace, kT.PREPASS_COLOR = !0, kT.PREPASS_COLOR_INDEX = 0;
        for (let cT = 0; cT < MT.length; cT++) {
          const lT = TT.prePassRenderer.getIndex(MT[cT].type); - 1 !== lT ? (kT[MT[cT].define] = !0, kT[MT[cT].index] = lT) : kT[MT[cT].define] = !1
        }
      } else {
        kT.PREPASS = !1;
        for (let TT = 0; TT < MT.length; TT++) kT[MT[TT].define] = !1
      }
      kT.PREPASS != lT && (kT.markAsUnprocessed(), kT.markAsImageProcessingDirty())
    }

    function YT(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        xT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      MT && MT.push("Light" + TT), KT || (kT.push("vLightData" + TT, "vLightDiffuse" + TT, "vLightSpecular" + TT, "vLightDirection" + TT, "vLightWidth" + TT, "vLightHeight" + TT, "vLightFalloff" + TT, "vLightGround" + TT, "vSliceData" + TT, "vSliceRanges" + TT, "lightMatrix" + TT, "shadowsInfo" + TT, "depthValues" + TT), cT.push("shadowTexture" + TT), cT.push("depthTexture" + TT), kT.push("viewFrustumZ" + TT, "cascadeBlendFactor" + TT, "lightSizeUVCorrection" + TT, "depthCorrection" + TT, "penumbraDarkness" + TT, "frustumLengths" + TT), lT && (cT.push("projectionLightTexture" + TT), kT.push("textureProjectionMatrix" + TT)), OT && cT.push("iesLightTexture" + TT), fT && cT.push("rectAreaLightEmissionTexture" + TT), yT && (cT.push("lightDataTexture" + TT), xT || cT.push("tileMaskTexture" + TT)))
    }

    function BT(TT, kT, cT) {
      const lT = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      cT && lT.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), TT.push(...lT);
      kT.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function WT(TT, kT, cT) {
      let lT, MT, KT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        OT = null;
      if (TT.uniformsNames) {
        const yT = TT;
        lT = yT.uniformsNames, MT = yT.uniformBuffersNames, kT = yT.samplers, cT = yT.defines, KT = yT.maxSimultaneousLights || 0, OT = yT.shaderLanguage ?? null
      } else lT = TT, kT || (kT = []);
      for (let yT = 0; yT < KT && cT["LIGHT" + yT]; yT++) YT(yT, lT, kT, cT["PROJECTEDLIGHTTEXTURE" + yT], MT, !1, cT["IESLIGHTTEXTURE" + yT], cT["CLUSTLIGHT" + yT], cT["RECTAREALIGHTEMISSIONTEXTURE" + yT], 1 === OT);
      cT.NUM_MORPH_INFLUENCERS && (lT.push("morphTargetInfluences"), lT.push("morphTargetCount")), cT.BAKED_VERTEX_ANIMATION_TEXTURE && (lT.push("bakedVertexAnimationSettings"), lT.push("bakedVertexAnimationTextureSizeInverted"), lT.push("bakedVertexAnimationTime"), kT.push("bakedVertexAnimationTexture"))
    }

    function nT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      TT.addUniform("vReflectionInfos", 2), TT.addUniform("reflectionMatrix", 16), kT && TT.addUniform("vReflectionMicrosurfaceInfos", 3), cT && (TT.addUniform("vReflectionPosition", 3), TT.addUniform("vReflectionSize", 3)), lT && (TT.addUniform("vReflectionFilteringInfo", 2), TT.addUniform("vReflectionDominantDirection", 3)), KT && TT.addUniform("vReflectionColor", 3), MT && (TT.addUniform("vSphericalL00", 3), TT.addUniform("vSphericalL1_1", 3), TT.addUniform("vSphericalL10", 3), TT.addUniform("vSphericalL11", 3), TT.addUniform("vSphericalL2_2", 3), TT.addUniform("vSphericalL2_1", 3), TT.addUniform("vSphericalL20", 3), TT.addUniform("vSphericalL21", 3), TT.addUniform("vSphericalL22", 3), TT.addUniform("vSphericalX", 3), TT.addUniform("vSphericalY", 3), TT.addUniform("vSphericalZ", 3), TT.addUniform("vSphericalXX_ZZ", 3), TT.addUniform("vSphericalYY_ZZ", 3), TT.addUniform("vSphericalZZ", 3), TT.addUniform("vSphericalXY", 3), TT.addUniform("vSphericalYZ", 3), TT.addUniform("vSphericalZX", 3))
    }
  },
  39967: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(36892),
      MT = cT(39908);
    class KT extends MT.e {
      constructor(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(TT, kT, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new lT.d, this._storeEffectOnSubMeshes = cT
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(TT, kT) {
        return !!TT && (!this._storeEffectOnSubMeshes || (!TT.kF || 0 === TT.kF.length || this.isReadyForSubMesh(TT, TT.kF[0], kT)))
      }
      _isReadyForSubMesh(TT) {
        const kT = TT.materialDefines;
        return !(this.checkReadyOnEveryCall || !TT.effect || !kT || kT._renderId !== this.NJ().getRenderId())
      }
      bindOnlyWorldMatrix(TT) {
        this._activeEffect.setMatrix("world", TT)
      }
      bindOnlyNormalMatrix(TT) {
        this._activeEffect.setMatrix("normalMatrix", TT)
      }
      bind(TT, kT) {
        kT && this.bindForSubMesh(TT, kT, kT.kF[0])
      }
      _afterBind(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(TT, kT, cT), this.NJ()._cachedEffect = kT, cT ? cT._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return cT._drawWrapper._forceRebindOnNextCall || TT.isCachedMaterialInvalid(this, kT, lT)
      }
      dispose(TT, kT, cT) {
        this._activeEffect = void 0, super.dispose(TT, kT, cT)
      }
    }
  },
  39985: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      f: () => MT
    });
    const lT = new WeakMap;

    function MT(TT) {
      const kT = TT.getVertexBuffers();
      if (!kT) return null;
      let cT = lT.get(TT);
      if (cT) {
        let TT = !1;
        for (const lT in kT)
          if (!cT.has(lT)) {
            TT = !0;
            break
          } if (!TT) return cT
      } else cT = new Map, lT.set(TT, cT);
      for (const lT in kT) {
        const TT = kT[lT];
        if (TT) {
          const kT = TT.byteOffset,
            MT = TT.byteStride,
            KT = TT.type,
            OT = TT.normalized;
          cT.set(lT, {
            offset: kT,
            stride: MT,
            type: KT,
            normalized: OT
          })
        }
      }
      return cT
    }

    function KT(TT, kT) {
      kT.forEach(((kT, cT) => {
        const lT = `vp_${cT}_info`;
        TT.setFloat4(lT, kT.offset, kT.stride, kT.type, kT.normalized ? 1 : 0)
      }))
    }
  },
  39932: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      g: () => fT
    });
    var lT = cT(39620),
      MT = cT(36892),
      KT = cT(39624);
    let OT = (() => {
      var TT;
      let kT, cT, MT = [];
      return TT = class {
        static extractMinAndMaxIndexed(TT, kT, cT, lT, MT, KT) {
          for (let OT = cT; OT < cT + lT; OT++) {
            const cT = 3 * kT[OT],
              lT = TT[cT],
              yT = TT[cT + 1],
              fT = TT[cT + 2];
            MT.minimizeInPlaceFromFloats(lT, yT, fT), KT.maximizeInPlaceFromFloats(lT, yT, fT)
          }
        }
        static extractMinAndMax(TT, kT, cT, lT, MT, KT) {
          for (let OT = kT, yT = kT * lT; OT < kT + cT; OT++, yT += lT) {
            const kT = TT[yT],
              cT = TT[yT + 1],
              lT = TT[yT + 2];
            MT.minimizeInPlaceFromFloats(kT, cT, lT), KT.maximizeInPlaceFromFloats(kT, cT, lT)
          }
        }
      }, (() => {
        const OT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [KT.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], cT = [KT.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, lT.e)(TT, null, kT, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: TT => "extractMinAndMaxIndexed" in TT,
            get: TT => TT.extractMinAndMaxIndexed
          },
          metadata: OT
        }, null, MT), (0, lT.e)(TT, null, cT, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: TT => "extractMinAndMax" in TT,
            get: TT => TT.extractMinAndMax
          },
          metadata: OT
        }, null, MT), OT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OT
        }), (0, lT.h)(TT, MT)
      })(), TT
    })();

    function yT(TT, kT, cT, lT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const yT = new MT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        fT = new MT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return OT.extractMinAndMaxIndexed(TT, kT, cT, lT, yT, fT), KT && (yT.x -= yT.x * KT.x + KT.y, yT.y -= yT.y * KT.x + KT.y, yT.z -= yT.z * KT.x + KT.y, fT.x += fT.x * KT.x + KT.y, fT.y += fT.y * KT.x + KT.y, fT.z += fT.z * KT.x + KT.y), {
        minimum: yT,
        maximum: fT
      }
    }

    function fT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        KT = arguments.length > 4 ? arguments[4] : void 0;
      const yT = new MT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        fT = new MT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return KT || (KT = 3), OT.extractMinAndMax(TT, kT, cT, KT, yT, fT), lT && (yT.x -= yT.x * lT.x + lT.y, yT.y -= yT.y * lT.x + lT.y, yT.z -= yT.z * lT.x + lT.y, fT.x += fT.x * lT.x + lT.y, fT.y += fT.y * lT.x + lT.y, fT.z += fT.z * lT.x + lT.y), {
        minimum: yT,
        maximum: fT
      }
    }
  },
  39917: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => IT
    });
    var lT, MT = cT(39782),
      KT = cT(39921),
      OT = cT(39926),
      yT = cT(39932),
      fT = cT(39936),
      xT = cT(39500);
    class IT {
      get materialDefines() {
        const TT = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof TT ? null : TT
      }
      set materialDefines(TT) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = TT
      }
      _getDrawWrapper(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT = TT ?? this._engine.currentRenderPassId;
        let cT = this._drawWrappers[TT];
        return !cT && kT && (this._drawWrappers[TT] = cT = new fT.b(this._mesh.NJ().Dv())), cT
      }
      _removeDrawWrapper(TT) {
        let kT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[TT]?.dispose(kT), this._drawWrappers[TT] = void 0
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
      _setMainDrawWrapperOverride(TT) {
        this._mainDrawWrapperOverride = TT
      }
      setEffect(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const MT = this._drawWrapper;
        MT.setEffect(TT, kT, lT), void 0 !== cT && (MT.materialContext = cT), TT || (MT.defines = null, MT.materialContext = void 0)
      }
      resetDrawCache(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== TT) return void this._removeDrawWrapper(TT, !0, kT);
          for (const TT of this._drawWrappers) TT?.dispose(kT)
        }
        this._drawWrappers = []
      }
      static AddToMesh(TT, kT, cT, lT, MT, KT, OT) {
        return new IT(TT, kT, cT, lT, MT, KT, OT, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(TT, kT, cT, lT, MT, KT, OT) {
        let yT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = TT, this.verticesStart = kT, this.verticesCount = cT, this.indexStart = lT, this.indexCount = MT, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = KT, this._renderingMesh = OT || KT, fT && KT.kF.push(this), this._engine = this._mesh.NJ().Dv(), this.resetDrawCache(), this._trianglePlanes = [], this._id = KT.kF.length - 1, yT && (this.refreshBoundingInfo(), KT.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      DH() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.DH() : this._boundingInfo
      }
      setBoundingInfo(TT) {
        return this._boundingInfo = TT, this
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
        const TT = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return TT || this._renderingMesh
      }
      wv() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const kT = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!kT) return TT && this._mesh.NJ()._hasDefaultMaterial ? this._mesh.NJ().defaultMaterial : null;
        if (this._isMultiMaterial(kT)) {
          const TT = kT.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== TT && (this._currentMaterial = TT, this.resetDrawCache()), TT
        }
        return kT
      }
      _isMultiMaterial(TT) {
        return void 0 !== TT.getSubMaterial
      }
      refreshBoundingInfo() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (TT || (TT = this._renderingMesh.getVerticesData(MT.l.PositionKind)), !TT) return this._boundingInfo = this._mesh.DH(), this;
        const kT = this._renderingMesh.FcT();
        let cT;
        if (0 === this.indexStart && this.indexCount === kT.length) {
          const TT = this._renderingMesh.DH();
          cT = {
            minimum: TT.minimum.clone(),
            maximum: TT.maximum.clone()
          }
        } else cT = (0, yT.d)(TT, kT, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(cT.minimum, cT.maximum) : this._boundingInfo = new OT.e(cT.minimum, cT.maximum), this
      }
      _checkCollision(TT) {
        return this.DH()._checkCollision(TT)
      }
      updateBoundingInfo(TT) {
        let kT = this.DH();
        return kT || (this.refreshBoundingInfo(), kT = this.DH()), kT && kT.update(TT), this
      }
      isInFrustum(TT) {
        const kT = this.DH();
        return !!kT && kT.isInFrustum(TT, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(TT) {
        const kT = this.DH();
        return !!kT && kT.isCompletelyInFrustum(TT)
      }
      render(TT) {
        return this._renderingMesh.render(this, TT, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(TT, kT) {
        if (!this._linesIndexBuffer) {
          const cT = 6 * Math.floor(this.indexCount / 3),
            lT = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(cT) : new Uint16Array(cT);
          let MT = 0;
          if (0 === TT.length)
            for (let TT = this.indexStart; TT < this.indexStart + this.indexCount; TT += 3) lT[MT++] = TT, lT[MT++] = TT + 1, lT[MT++] = TT + 1, lT[MT++] = TT + 2, lT[MT++] = TT + 2, lT[MT++] = TT;
          else
            for (let kT = this.indexStart; kT < this.indexStart + this.indexCount; kT += 3) lT[MT++] = TT[kT], lT[MT++] = TT[kT + 1], lT[MT++] = TT[kT + 1], lT[MT++] = TT[kT + 2], lT[MT++] = TT[kT + 2], lT[MT++] = TT[kT];
          this._linesIndexBuffer = kT.createIndexBuffer(lT), this._linesIndexCount = lT.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(TT) {
        const kT = this.DH();
        return !!kT && TT.intersectsBox(kT.boundingBox)
      }
      intersects(TT, kT, cT, lT, MT) {
        const KT = this.wv();
        if (!KT) return null;
        let OT = 3,
          yT = !1;
        switch (KT.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            OT = 1, yT = !0
        }
        return 4 === KT.fillMode ? cT.length ? this._intersectLines(TT, kT, cT, this._mesh.intersectionThreshold, lT) : this._intersectUnIndexedLines(TT, kT, cT, this._mesh.intersectionThreshold, lT) : !cT.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(TT, kT, cT, lT, MT) : this._intersectTriangles(TT, kT, cT, OT, yT, lT, MT)
      }
      _intersectLines(TT, kT, cT, lT, MT) {
        let OT = null;
        for (let yT = this.indexStart; yT < this.indexStart + this.indexCount; yT += 2) {
          const fT = kT[cT[yT]],
            xT = kT[cT[yT + 1]],
            IT = TT.intersectionSegment(fT, xT, lT);
          if (!(IT < 0) && ((MT || !OT || IT < OT.distance) && (OT = new KT.c(null, null, IT), OT.faceId = yT / 2, MT))) break
        }
        return OT
      }
      _intersectUnIndexedLines(TT, kT, cT, lT, MT) {
        let OT = null;
        for (let yT = this.verticesStart; yT < this.verticesStart + this.verticesCount; yT += 2) {
          const cT = kT[yT],
            fT = kT[yT + 1],
            xT = TT.intersectionSegment(cT, fT, lT);
          if (!(xT < 0) && ((MT || !OT || xT < OT.distance) && (OT = new KT.c(null, null, xT), OT.faceId = yT / 2, MT))) break
        }
        return OT
      }
      _intersectTriangles(TT, kT, cT, lT, MT, KT, OT) {
        let yT = null,
          fT = -1;
        for (let xT = this.indexStart; xT < this.indexStart + this.indexCount - (3 - lT); xT += lT) {
          fT++;
          const lT = cT[xT],
            IT = cT[xT + 1],
            AT = cT[xT + 2];
          if (MT && 4294967295 === AT) {
            xT += 2;
            continue
          }
          const CT = kT[lT],
            jT = kT[IT],
            vT = kT[AT];
          if (!CT || !jT || !vT) continue;
          if (OT && !OT(CT, jT, vT, TT, lT, IT, AT)) continue;
          const tT = TT.intersectsTriangle(CT, jT, vT);
          if (tT) {
            if (tT.distance < 0) continue;
            if ((KT || !yT || tT.distance < yT.distance) && (yT = tT, yT.faceId = fT, KT)) break
          }
        }
        return yT
      }
      _intersectUnIndexedTriangles(TT, kT, cT, lT, MT) {
        let KT = null;
        for (let OT = this.verticesStart; OT < this.verticesStart + this.verticesCount; OT += 3) {
          const cT = kT[OT],
            yT = kT[OT + 1],
            fT = kT[OT + 2];
          if (MT && !MT(cT, yT, fT, TT, -1, -1, -1)) continue;
          const xT = TT.intersectsTriangle(cT, yT, fT);
          if (xT) {
            if (xT.distance < 0) continue;
            if ((lT || !KT || xT.distance < KT.distance) && (KT = xT, KT.faceId = OT / 3, lT)) break
          }
        }
        return KT
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(TT, kT) {
        const cT = new IT(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, TT, kT, !1);
        if (!this.IsGlobal) {
          const TT = this.DH();
          if (!TT) return cT;
          cT._boundingInfo = new OT.e(TT.minimum, TT.maximum)
        }
        return cT
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.NJ().Dv()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const kT = this._mesh.kF.indexOf(this);
        this._mesh.kF.splice(kT, 1), this.resetDrawCache(void 0, TT)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(TT, kT, cT, lT, MT) {
        let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = Number.MAX_VALUE,
          yT = -Number.MAX_VALUE;
        const fT = (MT || lT).FcT();
        for (let xT = kT; xT < kT + cT; xT++) {
          const TT = fT[xT];
          TT < OT && (OT = TT), TT > yT && (yT = TT)
        }
        return new IT(TT, OT, yT - OT + 1, kT, cT, lT, MT, KT)
      }
    }(lT = IT.prototype).projectToRef ?? (lT.projectToRef = (0, xT.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);