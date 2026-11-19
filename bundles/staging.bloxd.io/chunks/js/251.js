export const id = 251;
export const ids = [251];
export const modules = {
  39082: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor(TT, oT, IT) {
        this.bu = TT, this.bv = oT, this.distance = IT, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39093: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    var iT = IT(36134),
      zT = IT(36118),
      kT = IT(36125);
    class WT {
      constructor(TT, oT, IT) {
        this.vectors = (0, iT.d)(8, zT.m.Zero), this.center = zT.m.Zero(), this.centerWorld = zT.m.Zero(), this.extendSize = zT.m.Zero(), this.extendSizeWorld = zT.m.Zero(), this.directions = (0, iT.d)(3, zT.m.Zero), this.vectorsWorld = (0, iT.d)(8, zT.m.Zero), this.minimumWorld = zT.m.Zero(), this.maximumWorld = zT.m.Zero(), this.minimum = zT.m.Zero(), this.maximum = zT.m.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(TT, oT, IT)
      }
      reConstruct(TT, oT, IT) {
        const iT = TT.x,
          kT = TT.y,
          WT = TT.z,
          XT = oT.x,
          BT = oT.y,
          FT = oT.z,
          ST = this.vectors;
        this.minimum.S_(iT, kT, WT), this.maximum.S_(XT, BT, FT), ST[0].S_(iT, kT, WT), ST[1].S_(XT, BT, FT), ST[2].S_(XT, kT, WT), ST[3].S_(iT, BT, WT), ST[4].S_(iT, kT, FT), ST[5].S_(XT, BT, WT), ST[6].S_(iT, BT, FT), ST[7].S_(XT, kT, FT), oT.addToRef(TT, this.center).scaleInPlace(.5), oT.subtractToRef(TT, this.extendSize).scaleInPlace(.5), this._worldMatrix = IT || zT.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(TT) {
        const oT = WT._TmpVector3,
          IT = this.maximum.subtractToRef(this.minimum, oT[0]),
          iT = IT.length();
        IT.normalizeFromLength(iT);
        const zT = iT * TT,
          kT = IT.scaleInPlace(.5 * zT),
          XT = this.center.subtractToRef(kT, oT[1]),
          BT = this.center.addToRef(kT, oT[2]);
        return this.reConstruct(XT, BT, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(TT) {
        const oT = this.minimumWorld,
          IT = this.maximumWorld,
          iT = this.directions,
          kT = this.vectorsWorld,
          WT = this.vectors;
        if (TT.isIdentity()) {
          oT.SIT(this.minimum), IT.SIT(this.maximum);
          for (let TT = 0; TT < 8; ++TT) kT[TT].SIT(WT[TT]);
          this.extendSizeWorld.SIT(this.extendSize), this.centerWorld.SIT(this.center)
        } else {
          oT.W8(Number.MAX_VALUE), IT.W8(-Number.MAX_VALUE);
          for (let iT = 0; iT < 8; ++iT) {
            const XT = kT[iT];
            zT.m.TransformCoordinatesToRef(WT[iT], TT, XT), oT.minimizeInPlace(XT), IT.maximizeInPlace(XT)
          }
          IT.subtractToRef(oT, this.extendSizeWorld).scaleInPlace(.5), IT.addToRef(oT, this.centerWorld).scaleInPlace(.5)
        }
        zT.m.FromArrayToRef(TT.m, 0, iT[0]), zT.m.FromArrayToRef(TT.m, 4, iT[1]), zT.m.FromArrayToRef(TT.m, 8, iT[2]), this._worldMatrix = TT
      }
      isInFrustum(TT) {
        return WT.IsInFrustum(this.vectorsWorld, TT)
      }
      isCompletelyInFrustum(TT) {
        return WT.IsCompletelyInFrustum(this.vectorsWorld, TT)
      }
      intersectsPoint(TT) {
        const oT = this.minimumWorld,
          IT = this.maximumWorld,
          iT = oT.x,
          zT = oT.y,
          WT = oT.z,
          XT = IT.x,
          BT = IT.y,
          FT = IT.z,
          ST = TT.x,
          DT = TT.y,
          LT = TT.z,
          xT = -kT.d;
        return !(XT - ST < xT || xT > ST - iT) && (!(BT - DT < xT || xT > DT - zT) && !(FT - LT < xT || xT > LT - WT))
      }
      intersectsSphere(TT) {
        return WT.IntersectsSphere(this.minimumWorld, this.maximumWorld, TT.centerWorld, TT.radiusWorld)
      }
      intersectsMinMax(TT, oT) {
        const IT = this.minimumWorld,
          iT = this.maximumWorld,
          zT = IT.x,
          kT = IT.y,
          WT = IT.z,
          XT = iT.x,
          BT = iT.y,
          FT = iT.z,
          ST = TT.x,
          DT = TT.y,
          LT = TT.z,
          xT = oT.x,
          cT = oT.y,
          KT = oT.z;
        return !(XT < ST || zT > xT) && (!(BT < DT || kT > cT) && !(FT < LT || WT > KT))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(TT, oT) {
        return TT.intersectsMinMax(oT.minimumWorld, oT.maximumWorld)
      }
      static IntersectsSphere(TT, oT, IT, iT) {
        const kT = WT._TmpVector3[0];
        zT.m.ClampToRef(IT, TT, oT, kT);
        return zT.m.DistanceSquared(IT, kT) <= iT * iT
      }
      static IsCompletelyInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; ++IT) {
          const iT = oT[IT];
          for (let oT = 0; oT < 8; ++oT)
            if (iT.dotCoordinate(TT[oT]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; ++IT) {
          let iT = !0;
          const zT = oT[IT];
          for (let oT = 0; oT < 8; ++oT)
            if (zT.dotCoordinate(TT[oT]) >= 0) {
              iT = !1;
              break
            } if (iT) return !1
        }
        return !0
      }
    }
    WT._TmpVector3 = (0, iT.d)(3, zT.m.Zero)
  },
  39091: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT
    });
    var iT = IT(36134),
      zT = IT(36118),
      kT = IT(39093);
    class WT {
      constructor(TT, oT, IT) {
        this.center = zT.m.Zero(), this.centerWorld = zT.m.Zero(), this.minimum = zT.m.Zero(), this.maximum = zT.m.Zero(), this.reConstruct(TT, oT, IT)
      }
      reConstruct(TT, oT, IT) {
        this.minimum.SIT(TT), this.maximum.SIT(oT);
        const iT = zT.m.Distance(TT, oT);
        oT.addToRef(TT, this.center).scaleInPlace(.5), this.radius = .5 * iT, this._update(IT || zT.b.IdentityReadOnly)
      }
      scale(TT) {
        const oT = WT._TmpVector3,
          IT = this.maximum.subtractToRef(this.minimum, oT[0]),
          iT = IT.length();
        IT.normalizeFromLength(iT);
        const zT = iT * TT,
          kT = IT.scaleInPlace(.5 * zT),
          XT = this.center.subtractToRef(kT, oT[1]),
          BT = this.center.addToRef(kT, oT[2]);
        return this.reConstruct(XT, BT, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(TT) {
        if (TT.isIdentity()) this.centerWorld.SIT(this.center), this.radiusWorld = this.radius;
        else {
          zT.m.TransformCoordinatesToRef(this.center, TT, this.centerWorld);
          const oT = WT._TmpVector3[0];
          zT.m.TransformNormalFromFloatsToRef(1, 1, 1, TT, oT), this.radiusWorld = Math.max(Math.abs(oT.x), Math.abs(oT.y), Math.abs(oT.z)) * this.radius
        }
      }
      isInFrustum(TT) {
        const oT = this.centerWorld,
          IT = this.radiusWorld;
        for (let iT = 0; iT < 6; iT++)
          if (TT[iT].dotCoordinate(oT) <= -IT) return !1;
        return !0
      }
      isCenterInFrustum(TT) {
        const oT = this.centerWorld;
        for (let IT = 0; IT < 6; IT++)
          if (TT[IT].dotCoordinate(oT) < 0) return !1;
        return !0
      }
      intersectsPoint(TT) {
        const oT = zT.m.DistanceSquared(this.centerWorld, TT);
        return !(this.radiusWorld * this.radiusWorld < oT)
      }
      static Intersects(TT, oT) {
        const IT = zT.m.DistanceSquared(TT.centerWorld, oT.centerWorld),
          iT = TT.radiusWorld + oT.radiusWorld;
        return !(iT * iT < IT)
      }
      static CreateFromCenterAndRadius(TT, oT, IT) {
        this._TmpVector3[0].SIT(TT), this._TmpVector3[1].S_(0, 0, oT), this._TmpVector3[2].SIT(TT), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].SiT(this._TmpVector3[1]);
        const iT = new WT(this._TmpVector3[0], this._TmpVector3[2]);
        return iT._worldMatrix = IT || zT.b.Identity(), iT
      }
    }
    WT._TmpVector3 = (0, iT.d)(3, zT.m.Zero);
    const XT = {
        min: 0,
        max: 0
      },
      BT = {
        min: 0,
        max: 0
      },
      FT = (TT, oT, IT) => {
        const iT = zT.m.Dot(oT.centerWorld, TT),
          kT = Math.abs(zT.m.Dot(oT.directions[0], TT)) * oT.extendSize.x + Math.abs(zT.m.Dot(oT.directions[1], TT)) * oT.extendSize.y + Math.abs(zT.m.Dot(oT.directions[2], TT)) * oT.extendSize.z;
        IT.min = iT - kT, IT.max = iT + kT
      },
      ST = (TT, oT, IT) => (FT(TT, oT, XT), FT(TT, IT, BT), !(XT.min > BT.max || BT.min > XT.max));
    class DT {
      constructor(TT, oT, IT) {
        this._isLocked = !1, this.boundingBox = new kT.b(TT, oT, IT), this.KiT = new WT(TT, oT, IT)
      }
      reConstruct(TT, oT, IT) {
        this.boundingBox.reConstruct(TT, oT, IT), this.KiT.reConstruct(TT, oT, IT)
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
        this._isLocked || (this.boundingBox._update(TT), this.KiT._update(TT))
      }
      centerOn(TT, oT) {
        const IT = DT._TmpVector3[0].SIT(TT).SiT(oT),
          iT = DT._TmpVector3[1].SIT(TT).addInPlace(oT);
        return this.boundingBox.reConstruct(IT, iT, this.boundingBox.getWorldMatrix()), this.KiT.reConstruct(IT, iT, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(TT) {
        const oT = zT.m.Minimize(this.minimum, TT),
          IT = zT.m.Maximize(this.maximum, TT);
        return this.reConstruct(oT, IT, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(TT) {
        const oT = zT.i.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(oT);
        const IT = zT.i.sc[0];
        return zT.m.TransformCoordinatesToRef(TT.boundingBox.minimumWorld, oT, IT), this.encapsulate(IT), zT.m.TransformCoordinatesToRef(TT.boundingBox.maximumWorld, oT, IT), this.encapsulate(IT), this
      }
      scale(TT) {
        return this.boundingBox.scale(TT), this.KiT.scale(TT), this
      }
      isInFrustum(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === oT || 3 === oT) && this.KiT.isCenterInFrustum(TT)) return !0;
        if (!this.KiT.isInFrustum(TT)) return !1;
        return !(1 !== oT && 3 !== oT) || this.boundingBox.isInFrustum(TT)
      }
      get diagonalLength() {
        const TT = this.boundingBox;
        return TT.maximumWorld.subtractToRef(TT.minimumWorld, DT._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(TT) {
        return this.boundingBox.isCompletelyInFrustum(TT)
      }
      _checkCollision(TT) {
        return TT._canDoCollision(this.KiT.centerWorld, this.KiT.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(TT) {
        return !!this.KiT.centerWorld && (!!this.KiT.intersectsPoint(TT) && !!this.boundingBox.intersectsPoint(TT))
      }
      intersects(TT, oT) {
        if (!WT.Intersects(this.KiT, TT.KiT)) return !1;
        if (!kT.b.Intersects(this.boundingBox, TT.boundingBox)) return !1;
        if (!oT) return !0;
        const IT = this.boundingBox,
          iT = TT.boundingBox;
        return !!ST(IT.directions[0], IT, iT) && (!!ST(IT.directions[1], IT, iT) && (!!ST(IT.directions[2], IT, iT) && (!!ST(iT.directions[0], IT, iT) && (!!ST(iT.directions[1], IT, iT) && (!!ST(iT.directions[2], IT, iT) && (!!ST(zT.m.Cross(IT.directions[0], iT.directions[0]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[0], iT.directions[1]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[0], iT.directions[2]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[1], iT.directions[0]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[1], iT.directions[1]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[1], iT.directions[2]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[2], iT.directions[0]), IT, iT) && (!!ST(zT.m.Cross(IT.directions[2], iT.directions[1]), IT, iT) && !!ST(zT.m.Cross(IT.directions[2], iT.directions[2]), IT, iT))))))))))))))
      }
    }
    DT._TmpVector3 = (0, iT.d)(2, zT.m.Zero)
  },
  39117: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT,
      d: () => BT,
      f: () => XT,
      g: () => WT
    });
    var iT = IT(38936),
      zT = IT(36118);

    function kT(TT) {
      -1 === TT.indexOf("vClipPlane") && TT.push("vClipPlane"), -1 === TT.indexOf("vClipPlane2") && TT.push("vClipPlane2"), -1 === TT.indexOf("vClipPlane3") && TT.push("vClipPlane3"), -1 === TT.indexOf("vClipPlane4") && TT.push("vClipPlane4"), -1 === TT.indexOf("vClipPlane5") && TT.push("vClipPlane5"), -1 === TT.indexOf("vClipPlane6") && TT.push("vClipPlane6")
    }

    function WT(TT, oT, IT) {
      const iT = !!(TT.clipPlane ?? oT.clipPlane),
        zT = !!(TT.clipPlane2 ?? oT.clipPlane2),
        kT = !!(TT.clipPlane3 ?? oT.clipPlane3),
        WT = !!(TT.clipPlane4 ?? oT.clipPlane4),
        XT = !!(TT.clipPlane5 ?? oT.clipPlane5),
        BT = !!(TT.clipPlane6 ?? oT.clipPlane6);
      iT && IT.push("#define CLIPPLANE"), zT && IT.push("#define CLIPPLANE2"), kT && IT.push("#define CLIPPLANE3"), WT && IT.push("#define CLIPPLANE4"), XT && IT.push("#define CLIPPLANE5"), BT && IT.push("#define CLIPPLANE6")
    }

    function XT(TT, oT, IT) {
      let iT = !1;
      const zT = !!(TT.clipPlane ?? oT.clipPlane),
        kT = !!(TT.clipPlane2 ?? oT.clipPlane2),
        WT = !!(TT.clipPlane3 ?? oT.clipPlane3),
        XT = !!(TT.clipPlane4 ?? oT.clipPlane4),
        BT = !!(TT.clipPlane5 ?? oT.clipPlane5),
        FT = !!(TT.clipPlane6 ?? oT.clipPlane6);
      return IT.CLIPPLANE !== zT && (IT.CLIPPLANE = zT, iT = !0), IT.CLIPPLANE2 !== kT && (IT.CLIPPLANE2 = kT, iT = !0), IT.CLIPPLANE3 !== WT && (IT.CLIPPLANE3 = WT, iT = !0), IT.CLIPPLANE4 !== XT && (IT.CLIPPLANE4 = XT, iT = !0), IT.CLIPPLANE5 !== BT && (IT.CLIPPLANE5 = BT, iT = !0), IT.CLIPPLANE6 !== FT && (IT.CLIPPLANE6 = FT, iT = !0), iT
    }

    function BT(TT, oT, IT) {
      let iT = oT.clipPlane ?? IT.clipPlane;
      FT(TT, "vClipPlane", iT), iT = oT.clipPlane2 ?? IT.clipPlane2, FT(TT, "vClipPlane2", iT), iT = oT.clipPlane3 ?? IT.clipPlane3, FT(TT, "vClipPlane3", iT), iT = oT.clipPlane4 ?? IT.clipPlane4, FT(TT, "vClipPlane4", iT), iT = oT.clipPlane5 ?? IT.clipPlane5, FT(TT, "vClipPlane5", iT), iT = oT.clipPlane6 ?? IT.clipPlane6, FT(TT, "vClipPlane6", iT)
    }

    function FT(TT, oT, IT) {
      if (IT) {
        const kT = iT.b.pC()?.floatingOriginOffset || zT.m.ZeroReadOnly;
        TT.setFloat4(oT, IT.normal.x, IT.normal.y, IT.normal.z, IT.d + zT.m.Dot(IT.normal, kT))
      }
    }
  },
  39135: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    class iT {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(TT, oT) {
        this._defines[TT] || (TT < this._currentRank && (this._currentRank = TT), TT > this._maxRank && (this._maxRank = TT), this._defines[TT] = new Array), this._defines[TT].push(oT)
      }
      addCPUSkinningFallback(TT, oT) {
        this._mesh = oT, TT < this._currentRank && (this._currentRank = TT), TT > this._maxRank && (this._maxRank = TT)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(TT, oT) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, TT = TT.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), oT._bonesComputationForcedToCPU = !0;
          const IT = this._mesh.pC();
          for (let TT = 0; TT < IT.meshes.length; TT++) {
            const iT = IT.meshes[TT];
            if (iT.material) {
              if (iT.computeBonesUsingShaders && 0 !== iT.numBoneInfluencers)
                if (iT.material.getEffect() === oT) iT.computeBonesUsingShaders = !1;
                else if (iT.pR)
                for (const TT of iT.pR) {
                  if (TT.effect === oT) {
                    iT.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && iT.computeBonesUsingShaders && iT.numBoneInfluencers > 0 && (iT.computeBonesUsingShaders = !1)
          }
        } else {
          const oT = this._defines[this._currentRank];
          if (oT)
            for (let IT = 0; IT < oT.length; IT++) TT = TT.replace("#define " + oT[IT], "");
          this._currentRank++
        }
        return TT
      }
    }
  },
  39068: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => AT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38886),
      WT = IT(36149),
      XT = IT(36146),
      BT = IT(39076),
      FT = IT(38911),
      ST = IT(37660),
      DT = IT(36717),
      LT = IT(39105),
      xT = IT(38799);
    let cT = (() => {
      var TT;
      let oT, IT, kT, WT, XT, BT, FT, ST, DT, LT, cT, KT, MT = [];
      return TT = class {
        constructor() {
          this._func = (0, iT.j)(this, MT), this.reset()
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
          xT.c.Clone((() => TT), this)
        }
        serialize() {
          return xT.c.Serialize(this)
        }
        parse(TT, oT, IT) {
          xT.c.Parse((() => this), TT, oT, IT)
        }
      }, (() => {
        const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], WT = [(0, zT.P)()], XT = [(0, zT.P)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], ST = [(0, zT.P)()], DT = [(0, zT.P)()], LT = [(0, zT.P)()], cT = [(0, zT.P)()], KT = [(0, zT.P)()], (0, iT.h)(TT, null, oT, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: TT => "func" in TT,
            get: TT => TT.func
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, IT, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: TT => "backFunc" in TT,
            get: TT => TT.backFunc
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, kT, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: TT => "funcRef" in TT,
            get: TT => TT.funcRef
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, WT, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "funcMask" in TT,
            get: TT => TT.funcMask
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, XT, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "opStencilFail" in TT,
            get: TT => TT.opStencilFail
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, BT, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "opDepthFail" in TT,
            get: TT => TT.opDepthFail
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, FT, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "opStencilDepthPass" in TT,
            get: TT => TT.opStencilDepthPass
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, ST, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpStencilFail" in TT,
            get: TT => TT.backOpStencilFail
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, DT, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpDepthFail" in TT,
            get: TT => TT.backOpDepthFail
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, LT, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpStencilDepthPass" in TT,
            get: TT => TT.backOpStencilDepthPass
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, cT, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: TT => "mask" in TT,
            get: TT => TT.mask
          },
          metadata: xT
        }, null, MT), (0, iT.h)(TT, null, KT, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "enabled" in TT,
            get: TT => TT.enabled
          },
          metadata: xT
        }, null, MT), xT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xT
        })
      })(), TT
    })();
    var KT = IT(39113),
      MT = IT(38679),
      rT = IT(38643);
    let AT = (() => {
      var TT;
      let oT, IT, rT, AT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT, CT, jT, JT, UT, aT, YT, QT, OT, HT, nT, qT, ZT, lT, sT, tT, GT = [],
        pT = [],
        bT = [],
        yT = [],
        NT = [],
        PT = [],
        dT = [],
        VT = [],
        To = [],
        oo = [],
        Io = [],
        io = [],
        zo = [],
        ko = [],
        Wo = [],
        Xo = [],
        Bo = [],
        Fo = [],
        So = [],
        Do = [],
        Lo = [],
        xo = [],
        co = [],
        Ko = [],
        Mo = [],
        ro = [],
        Ao = [],
        go = [],
        ho = [],
        wo = [],
        mo = [],
        eo = [],
        Ro = [],
        uo = [],
        vo = [],
        Eo = [],
        fo = [],
        Co = [],
        jo = [],
        Jo = [],
        Uo = [],
        ao = [],
        Yo = [],
        Qo = [],
        Oo = [],
        Ho = [],
        no = [],
        qo = [],
        Zo = [],
        so = [],
        to = [];
      return TT = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(oT) {
          this._useVertexPulling !== oT && (this._useVertexPulling = oT, this.roT(TT.MiscDirtyFlag))
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
        set alpha(oT) {
          if (this._alpha === oT) return;
          const IT = this._alpha;
          this._alpha = oT, 1 !== IT && 1 !== oT || this.roT(TT.MiscDirtyFlag + TT.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(oT) {
          this._backFaceCulling !== oT && (this._backFaceCulling = oT, this.roT(TT.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(oT) {
          const IT = Math.max(0, Math.min(0 | oT, 4));
          this._textureRepetitionMode !== IT && (this._textureRepetitionMode = IT, this.roT(TT.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(oT) {
          this._cullBackFaces !== oT && (this._cullBackFaces = oT, this.roT(TT.TextureDirtyFlag))
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
          this._onDisposeObserver && this.bC.remove(this._onDisposeObserver), this._onDisposeObserver = this.bC.add(TT)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new WT.d), this._onBindObservable
        }
        set onBind(TT) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(TT)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new WT.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new WT.d), this._onEffectCreatedObservable
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
        setAlphaMode(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[IT] !== oT && (this._alphaMode[IT] = oT, this.roT(TT.TextureDirtyFlag))
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
        set fogEnabled(oT) {
          this._fogEnabled !== oT && (this._fogEnabled = oT, this.roT(TT.MiscDirtyFlag))
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
        set wireframe(oT) {
          this.fillMode = oT ? TT.WireFrameFillMode : TT.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case TT.PointFillMode:
            case TT.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(oT) {
          this.fillMode = oT ? TT.PointFillMode : TT.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(oT) {
          this._fillMode !== oT && (this._fillMode = oT, this.roT(TT.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(TT) {
          const oT = this.pC().Zc().getCaps().fragmentDepthSupported;
          TT && !oT && ST.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = TT && oT, this._markAllSubMeshesAsMiscDirty()
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
        constructor(oT, IT, zT) {
          let BT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, iT.j)(this, GT), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, iT.j)(this, pT, void 0), this.uniqueId = ((0, iT.j)(this, bT), (0, iT.j)(this, yT, void 0)), this._loadedUniqueId = (0, iT.j)(this, NT), this.name = (0, iT.j)(this, PT, void 0), this.metadata = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, null)), this._internalMetadata = (0, iT.j)(this, To), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, iT.j)(this, oo, !1), this.checkReadyOnlyOnce = ((0, iT.j)(this, Io), (0, iT.j)(this, io, !1)), this.state = ((0, iT.j)(this, zo), (0, iT.j)(this, ko, "")), this._alpha = ((0, iT.j)(this, Wo), (0, iT.j)(this, Xo, 1)), this.inspectableCustomProperties = (0, iT.j)(this, Bo), this._backFaceCulling = (0, iT.j)(this, Fo, !0), this._textureRepetitionMode = ((0, iT.j)(this, So), (0, iT.j)(this, Do, 0)), this.textureRepetitionHexTilingParams = ((0, iT.j)(this, Lo), (0, iT.j)(this, xo, [1, .6, 7, .5])), this._cullBackFaces = ((0, iT.j)(this, co), (0, iT.j)(this, Ko, !0)), this._blockDirtyMechanism = ((0, iT.j)(this, Mo), !1), this.sideOrientation = (0, iT.j)(this, ro, null), this.onCompiled = ((0, iT.j)(this, Ao), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.bC = new WT.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, iT.j)(this, go, [2]), this._needDepthPrePass = ((0, iT.j)(this, ho), (0, iT.j)(this, wo, !1)), this.disableDepthWrite = ((0, iT.j)(this, mo), (0, iT.j)(this, eo, !1)), this.disableColorWrite = ((0, iT.j)(this, Ro), (0, iT.j)(this, uo, !1)), this.forceDepthWrite = ((0, iT.j)(this, vo), (0, iT.j)(this, Eo, !1)), this.depthFunction = ((0, iT.j)(this, fo), (0, iT.j)(this, Co, 0)), this.separateCullingPass = ((0, iT.j)(this, jo), (0, iT.j)(this, Jo, !1)), this._fogEnabled = ((0, iT.j)(this, Uo), (0, iT.j)(this, ao, !0)), this.pointSize = ((0, iT.j)(this, Yo), (0, iT.j)(this, Qo, 1)), this.zOffset = ((0, iT.j)(this, Oo), (0, iT.j)(this, Ho, 0)), this.zOffsetUnits = ((0, iT.j)(this, no), (0, iT.j)(this, qo, 0)), this.clipPlane = (0, iT.j)(this, Zo), this.stencil = new cT, this._isVertexOutputInvariant = (0, iT.j)(this, so, TT.ForceVertexOutputInvariant), this._materialContext = (0, iT.j)(this, to), this._useUBO = !1, this._fillMode = TT.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = oT;
          const ST = IT || XT.d.LastCreatedScene;
          ST && (this._scene = ST, this._dirtyCallbacks = {}, this._forceGLSL = BT, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = oT || kT.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Zc().createMaterialContext(), this._drawWrapper = new LT.c(this._scene.Zc(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new FT.e(this._scene.Zc(), void 0, void 0, oT), this._useUBO = this.pC().Zc().supportsUniformBuffers, this._createUniformBuffer(), zT || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), TT.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const TT = this.pC().Zc();
          this._uniformBuffer?.dispose(), TT.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new FT.e(TT, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new FT.e(this._scene.Zc(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(TT, oT) {
          return !0
        }
        isReadyForSubMesh(TT, oT, IT) {
          const iT = oT.materialDefines;
          return !!iT && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = iT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        pC() {
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
          let oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const IT = this.pC().meshes;
          for (const TT of IT)
            if (TT.pR)
              for (const IT of TT.pR)
                if (IT.bc() === this)
                  for (const TT of IT._drawWrappers) TT && this._materialContext === TT.materialContext && (TT._wasPreviouslyReady = !1, TT._wasPreviouslyUsingInstances = null, TT._forceRebindOnNextCall = oT);
          oT && this.roT(TT.AllDirtyFlag)
        }
        _preBind(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const iT = this._scene.Zc(),
            zT = (null == IT ? this.sideOrientation : IT) === TT.ClockWiseSideOrientation,
            kT = oT || this._getDrawWrapper();
          return (0, MT.d)(kT) && kT.materialContext && (kT.materialContext.useVertexPulling = this.useVertexPulling), iT.enableEffect(kT), iT.setState(this.backFaceCulling, this.zOffset, !1, zT, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), zT
        }
        bind(TT, oT) {}
        buildUniformLayout() {
          const TT = this._uniformBuffer;
          this._eventInfo.ubo = TT, this._callbackPluginEventGeneric(8, this._eventInfo), TT.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(TT, oT, IT) {
          const iT = IT._drawWrapper;
          this._eventInfo.subMesh = IT, this._callbackPluginEventBindForSubMesh(this._eventInfo), iT._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(TT) {}
        bindView(TT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : TT.setMatrix("view", this.pC().getViewMatrix())
        }
        bindViewProjection(TT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (TT.setMatrix("viewProjection", this.pC().getTransformMatrix()), TT.setMatrix("projection", this.pC().getProjectionMatrix()), TT.setMatrix("inverseProjection", this.pC().getInverseProjectionMatrix()))
        }
        bindEyePosition(TT, oT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(TT, oT)
        }
        _afterBind(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && oT && (this._needToBindSceneUbo = !1, (0, KT.t)(oT, this.pC().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = TT ? TT.visibility : 1, this._onBindObservable && TT && this._onBindObservable.notifyObservers(TT), this.disableDepthWrite) {
            const TT = this._scene.Zc();
            this._cachedDepthWriteState = TT.getDepthWrite(), TT.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const TT = this._scene.Zc();
            this._cachedColorWriteState = TT.getColorWrite(), TT.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const TT = this._scene.Zc();
            this._cachedDepthFunctionState = TT.getDepthFunction() || 0, TT.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Zc().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Zc().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Zc().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(oT, IT) {
          const iT = {};
          if (this._serializePlugins(iT), TT._ParsePlugins(iT, oT, this._scene, IT), this.pluginManager)
            for (const TT of this.pluginManager._plugins) {
              const IT = oT.pluginManager.getPlugin(TT.name);
              IT && TT.copyTo(IT)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const TT = [];
            for (const oT in this.meshMap) {
              const IT = this.meshMap[oT];
              IT && TT.push(IT)
            }
            return TT
          }
          return this._scene.meshes.filter((TT => TT.material === this))
        }
        forceCompilation(TT, oT, IT, iT) {
          const zT = {
              clipPlane: !1,
              useInstances: !1,
              ...IT
            },
            kT = this.pC(),
            WT = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const XT = () => {
            if (!this._scene || !this._scene.Zc()) return;
            const IT = kT.clipPlane;
            if (zT.clipPlane && (kT.clipPlane = new DT.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let IT = !0,
                kT = null;
              if (TT.pR) {
                const oT = new BT.c(0, 0, 0, 0, 0, TT, void 0, !1, !1);
                oT.materialDefines && (oT.materialDefines._renderId = -1), this.isReadyForSubMesh(TT, oT, zT.useInstances) || (oT.effect && oT.effect.getCompilationError() && oT.effect.allFallbacksProcessed() ? kT = oT.effect.getCompilationError() : (IT = !1, setTimeout(XT, 16)))
              }
              IT && (this.allowShaderHotSwapping = WT, kT && iT && iT(kT), oT && oT(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = WT, oT && oT(this)) : setTimeout(XT, 16);
            zT.clipPlane && (kT.clipPlane = IT)
          };
          XT()
        }
        async forceCompilationAsync(TT, oT) {
          return await new Promise(((IT, iT) => {
            this.forceCompilation(TT, (() => {
              IT()
            }), oT, (TT => {
              iT(TT)
            }))
          }))
        }
        roT(oT) {
          this.pC().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (TT._DirtyCallbackArray.length = 0, oT & TT.ImageProcessingDirtyFlag && TT._DirtyCallbackArray.push(TT._ImageProcessingDirtyCallBack), oT & TT.TextureDirtyFlag && TT._DirtyCallbackArray.push(TT._TextureDirtyCallBack), oT & TT.LightDirtyFlag && TT._DirtyCallbackArray.push(TT._LightsDirtyCallBack), oT & TT.FresnelDirtyFlag && TT._DirtyCallbackArray.push(TT._FresnelDirtyCallBack), oT & TT.AttributesDirtyFlag && TT._DirtyCallbackArray.push(TT._AttributeDirtyCallBack), oT & TT.MiscDirtyFlag && TT._DirtyCallbackArray.push(TT._MiscDirtyCallBack), oT & TT.PrePassDirtyFlag && TT._DirtyCallbackArray.push(TT._PrePassDirtyCallBack), TT._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(TT._RunDirtyCallBacks), this.pC().resetCachedMaterial())
        }
        resetDrawCache() {
          const TT = this.pC().meshes;
          for (const oT of TT)
            if (oT.pR)
              for (const TT of oT.pR) TT.bc() === this && TT.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(TT) {
          const oT = this.pC();
          if (oT.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const IT = oT.meshes;
          for (const iT of IT)
            if (iT.pR)
              for (const IT of iT.pR) {
                if ((IT.bc() || (oT._hasDefaultMaterial ? oT.defaultMaterial : null)) === this)
                  for (const oT of IT._drawWrappers) oT && oT.defines && oT.defines.markAllAsDirty && this._materialContext === oT.materialContext && TT(oT.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.pC().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const TT = this.pC().enablePrePassRenderer();
          TT && TT.roT()
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
            this.bC.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(TT)
            }))
          }
        }
        setPrePassRenderer(TT) {
          return !1
        }
        dispose(TT, oT, IT) {
          const iT = this.pC();
          if (iT.stopAnimation(this), iT.freeProcessedMaterials(), iT.removeMaterial(this), this._eventInfo.forceDisposeTextures = oT, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const TT = this._parentContainer.materials.indexOf(this);
            TT > -1 && this._parentContainer.materials.splice(TT, 1), this._parentContainer = null
          }
          if (!0 !== IT)
            if (this.meshMap)
              for (const zT in this.meshMap) {
                const TT = this.meshMap[zT];
                this._disposeMeshResources(TT)
              } else {
                const TT = iT.meshes;
                for (const oT of TT) this._disposeMeshResources(oT)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.bC.notifyObservers(this), this.bC.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(TT) {
          if (!TT) return;
          const oT = TT.geometry,
            IT = TT._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (TT.pR && IT)
              for (const iT of TT.pR) {
                const TT = iT._drawWrappers;
                for (let zT = 0; zT < TT.length; zT++) {
                  const kT = TT[zT]?.effect;
                  if (!kT) continue;
                  IT[zT] === this && (oT?._releaseVertexArrayObject(kT), iT._removeDrawWrapper(zT, !0, !0))
                }
              }
          } else oT?._releaseVertexArrayObject(this._drawWrapper.effect);
          TT.material !== this || TT.HiT || (TT.material = null)
        }
        serialize() {
          const TT = xT.c.Serialize(this);
          return TT.stencil = this.stencil.serialize(), TT.uniqueId = this.uniqueId, this._serializePlugins(TT), TT
        }
        _serializePlugins(TT) {
          if (TT.plugins = {}, this.pluginManager)
            for (const oT of this.pluginManager._plugins) oT.doNotSerialize || (TT.plugins[oT.getClassName()] = oT.serialize())
        }
        static ParseAlphaMode(TT, oT) {
          void 0 !== TT._alphaMode ? oT._alphaMode = Array.isArray(TT._alphaMode) ? [...TT._alphaMode] : [TT._alphaMode] : void 0 !== TT.alphaMode ? oT._alphaMode = Array.isArray(TT.alphaMode) ? [...TT.alphaMode] : [TT.alphaMode] : oT._alphaMode = [2]
        }
        static Parse(oT, IT, iT) {
          if (oT.customType) {
            if ("BABYLON.PBRMaterial" === oT.customType && oT.overloadedAlbedo && (oT.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return ST.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else oT.customType = "BABYLON.StandardMaterial";
          const zT = kT.i.Instantiate(oT.customType).Parse(oT, IT, iT);
          return zT._loadedUniqueId = oT.uniqueId, TT.ParseAlphaMode(oT, zT), zT
        }
        static _ParsePlugins(TT, oT, IT, iT) {
          if (TT.plugins)
            for (const zT in TT.plugins) {
              const WT = TT.plugins[zT];
              let XT = oT.pluginManager?.getPlugin(WT.name);
              if (!XT) {
                const TT = kT.i.Instantiate("BABYLON." + zT);
                TT && (XT = new TT(oT))
              }
              XT?.parse(WT, IT, iT)
            }
        }
      }, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, zT.P)()], IT = [(0, zT.P)()], rT = [(0, zT.P)()], AT = [(0, zT.P)()], gT = [(0, zT.P)()], hT = [(0, zT.P)()], wT = [(0, zT.P)()], mT = [(0, zT.P)("alpha")], eT = [(0, zT.P)("backFaceCulling")], RT = [(0, zT.P)("textureRepetitionMode")], uT = [(0, zT.P)("textureRepetitionHexTilingParams")], vT = [(0, zT.P)("cullBackFaces")], ET = [(0, zT.P)()], fT = [(0, zT.P)()], CT = [(0, zT.P)()], jT = [(0, zT.P)()], JT = [(0, zT.P)()], UT = [(0, zT.P)()], aT = [(0, zT.P)()], YT = [(0, zT.P)()], QT = [(0, zT.P)("fogEnabled")], OT = [(0, zT.P)()], HT = [(0, zT.P)()], nT = [(0, zT.P)()], qT = [(0, zT.P)()], ZT = [(0, zT.P)()], lT = [(0, zT.P)()], sT = [(0, zT.P)()], tT = [(0, zT.P)()], (0, iT.h)(TT, null, qT, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: TT => "pointsCloud" in TT,
            get: TT => TT.pointsCloud
          },
          metadata: kT
        }, null, GT), (0, iT.h)(TT, null, ZT, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "fillMode" in TT,
            get: TT => TT.fillMode
          },
          metadata: kT
        }, null, GT), (0, iT.h)(TT, null, lT, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLogarithmicDepth" in TT,
            get: TT => TT.useLogarithmicDepth
          },
          metadata: kT
        }, null, GT), (0, iT.h)(TT, null, tT, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "transparencyMode" in TT,
            get: TT => TT.transparencyMode
          },
          metadata: kT
        }, null, GT), (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, oT) => {
              TT.id = oT
            }
          },
          metadata: kT
        }, pT, bT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, oT) => {
              TT.uniqueId = oT
            }
          },
          metadata: kT
        }, yT, NT), (0, iT.h)(null, null, rT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, oT) => {
              TT.name = oT
            }
          },
          metadata: kT
        }, PT, dT), (0, iT.h)(null, null, AT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, oT) => {
              TT.metadata = oT
            }
          },
          metadata: kT
        }, VT, To), (0, iT.h)(null, null, gT, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: TT => "checkReadyOnEveryCall" in TT,
            get: TT => TT.checkReadyOnEveryCall,
            set: (TT, oT) => {
              TT.checkReadyOnEveryCall = oT
            }
          },
          metadata: kT
        }, oo, Io), (0, iT.h)(null, null, hT, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: TT => "checkReadyOnlyOnce" in TT,
            get: TT => TT.checkReadyOnlyOnce,
            set: (TT, oT) => {
              TT.checkReadyOnlyOnce = oT
            }
          },
          metadata: kT
        }, io, zo), (0, iT.h)(null, null, wT, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: TT => "state" in TT,
            get: TT => TT.state,
            set: (TT, oT) => {
              TT.state = oT
            }
          },
          metadata: kT
        }, ko, Wo), (0, iT.h)(null, null, mT, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "_alpha" in TT,
            get: TT => TT._alpha,
            set: (TT, oT) => {
              TT._alpha = oT
            }
          },
          metadata: kT
        }, Xo, Bo), (0, iT.h)(null, null, eT, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: TT => "_backFaceCulling" in TT,
            get: TT => TT._backFaceCulling,
            set: (TT, oT) => {
              TT._backFaceCulling = oT
            }
          },
          metadata: kT
        }, Fo, So), (0, iT.h)(null, null, RT, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_textureRepetitionMode" in TT,
            get: TT => TT._textureRepetitionMode,
            set: (TT, oT) => {
              TT._textureRepetitionMode = oT
            }
          },
          metadata: kT
        }, Do, Lo), (0, iT.h)(null, null, uT, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRepetitionHexTilingParams" in TT,
            get: TT => TT.textureRepetitionHexTilingParams,
            set: (TT, oT) => {
              TT.textureRepetitionHexTilingParams = oT
            }
          },
          metadata: kT
        }, xo, co), (0, iT.h)(null, null, vT, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: TT => "_cullBackFaces" in TT,
            get: TT => TT._cullBackFaces,
            set: (TT, oT) => {
              TT._cullBackFaces = oT
            }
          },
          metadata: kT
        }, Ko, Mo), (0, iT.h)(null, null, ET, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: TT => "sideOrientation" in TT,
            get: TT => TT.sideOrientation,
            set: (TT, oT) => {
              TT.sideOrientation = oT
            }
          },
          metadata: kT
        }, ro, Ao), (0, iT.h)(null, null, fT, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_alphaMode" in TT,
            get: TT => TT._alphaMode,
            set: (TT, oT) => {
              TT._alphaMode = oT
            }
          },
          metadata: kT
        }, go, ho), (0, iT.h)(null, null, CT, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: TT => "_needDepthPrePass" in TT,
            get: TT => TT._needDepthPrePass,
            set: (TT, oT) => {
              TT._needDepthPrePass = oT
            }
          },
          metadata: kT
        }, wo, mo), (0, iT.h)(null, null, jT, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableDepthWrite" in TT,
            get: TT => TT.disableDepthWrite,
            set: (TT, oT) => {
              TT.disableDepthWrite = oT
            }
          },
          metadata: kT
        }, eo, Ro), (0, iT.h)(null, null, JT, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableColorWrite" in TT,
            get: TT => TT.disableColorWrite,
            set: (TT, oT) => {
              TT.disableColorWrite = oT
            }
          },
          metadata: kT
        }, uo, vo), (0, iT.h)(null, null, UT, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceDepthWrite" in TT,
            get: TT => TT.forceDepthWrite,
            set: (TT, oT) => {
              TT.forceDepthWrite = oT
            }
          },
          metadata: kT
        }, Eo, fo), (0, iT.h)(null, null, aT, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: TT => "depthFunction" in TT,
            get: TT => TT.depthFunction,
            set: (TT, oT) => {
              TT.depthFunction = oT
            }
          },
          metadata: kT
        }, Co, jo), (0, iT.h)(null, null, YT, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "separateCullingPass" in TT,
            get: TT => TT.separateCullingPass,
            set: (TT, oT) => {
              TT.separateCullingPass = oT
            }
          },
          metadata: kT
        }, Jo, Uo), (0, iT.h)(null, null, QT, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "_fogEnabled" in TT,
            get: TT => TT._fogEnabled,
            set: (TT, oT) => {
              TT._fogEnabled = oT
            }
          },
          metadata: kT
        }, ao, Yo), (0, iT.h)(null, null, OT, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: TT => "pointSize" in TT,
            get: TT => TT.pointSize,
            set: (TT, oT) => {
              TT.pointSize = oT
            }
          },
          metadata: kT
        }, Qo, Oo), (0, iT.h)(null, null, HT, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "zOffset" in TT,
            get: TT => TT.zOffset,
            set: (TT, oT) => {
              TT.zOffset = oT
            }
          },
          metadata: kT
        }, Ho, no), (0, iT.h)(null, null, nT, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: TT => "zOffsetUnits" in TT,
            get: TT => TT.zOffsetUnits,
            set: (TT, oT) => {
              TT.zOffsetUnits = oT
            }
          },
          metadata: kT
        }, qo, Zo), (0, iT.h)(null, null, sT, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: TT => "_isVertexOutputInvariant" in TT,
            get: TT => TT._isVertexOutputInvariant,
            set: (TT, oT) => {
              TT._isVertexOutputInvariant = oT
            }
          },
          metadata: kT
        }, so, to), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.TriangleFillMode = 0, TT.WireFrameFillMode = 1, TT.PointFillMode = 2, TT.PointListDrawMode = 3, TT.LineListDrawMode = 4, TT.LineLoopDrawMode = 5, TT.LineStripDrawMode = 6, TT.TriangleStripDrawMode = 7, TT.TriangleFanDrawMode = 8, TT.ClockWiseSideOrientation = 0, TT.CounterClockWiseSideOrientation = 1, TT.ImageProcessingDirtyFlag = 64, TT.TextureDirtyFlag = 1, TT.LightDirtyFlag = 2, TT.FresnelDirtyFlag = 4, TT.AttributesDirtyFlag = 8, TT.MiscDirtyFlag = 16, TT.PrePassDirtyFlag = 32, TT.AllDirtyFlag = 127, TT.MATERIAL_OPAQUE = 0, TT.MATERIAL_ALPHATEST = 1, TT.MATERIAL_ALPHABLEND = 2, TT.MATERIAL_ALPHATESTANDBLEND = 3, TT.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, TT.MATERIAL_NORMALBLENDMETHOD_RNM = 1, TT.LIGHTFALLOFF_PHYSICAL = 0, TT.LIGHTFALLOFF_GLTF = 1, TT.LIGHTFALLOFF_STANDARD = 2, TT.OnEventObservable = new WT.d, TT.ForceVertexOutputInvariant = !1, TT._AllDirtyCallBack = TT => TT.markAllAsDirty(), TT._ImageProcessingDirtyCallBack = TT => TT.markAsImageProcessingDirty(), TT._TextureDirtyCallBack = TT => TT.markAsTexturesDirty(), TT._FresnelDirtyCallBack = TT => TT.markAsFresnelDirty(), TT._MiscDirtyCallBack = TT => TT.markAsMiscDirty(), TT._PrePassDirtyCallBack = TT => TT.markAsPrePassDirty(), TT._LightsDirtyCallBack = TT => TT.markAsLightDirty(), TT._AttributeDirtyCallBack = TT => TT.markAsAttributesDirty(), TT._FresnelAndMiscDirtyCallBack = oT => {
        TT._FresnelDirtyCallBack(oT), TT._MiscDirtyCallBack(oT)
      }, TT._TextureAndMiscDirtyCallBack = oT => {
        TT._TextureDirtyCallBack(oT), TT._MiscDirtyCallBack(oT)
      }, TT._DirtyCallbackArray = [], TT._RunDirtyCallBacks = oT => {
        for (const IT of TT._DirtyCallbackArray) IT(oT)
      }, TT
    })();
    Object.getOwnPropertyDescriptor(AT.prototype, "pluginManager") || Object.defineProperty(AT.prototype, "pluginManager", (0, rT.f)("Material", "pluginManager"))
  },
  39125: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(38659);
    class zT {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(TT) {
        this._DiffuseTextureEnabled !== TT && (this._DiffuseTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(TT) {
        this._BaseWeightTextureEnabled !== TT && (this._BaseWeightTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(TT) {
        this._BaseDiffuseRoughnessTextureEnabled !== TT && (this._BaseDiffuseRoughnessTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(TT) {
        this._DetailTextureEnabled !== TT && (this._DetailTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(TT) {
        this._DecalMapEnabled !== TT && (this._DecalMapEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(TT) {
        this._AmbientTextureEnabled !== TT && (this._AmbientTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(TT) {
        this._OpacityTextureEnabled !== TT && (this._OpacityTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(TT) {
        this._ReflectionTextureEnabled !== TT && (this._ReflectionTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(TT) {
        this._EmissiveTextureEnabled !== TT && (this._EmissiveTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(TT) {
        this._SpecularTextureEnabled !== TT && (this._SpecularTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(TT) {
        this._BumpTextureEnabled !== TT && (this._BumpTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(TT) {
        this._LightmapTextureEnabled !== TT && (this._LightmapTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(TT) {
        this._RefractionTextureEnabled !== TT && (this._RefractionTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(TT) {
        this._ColorGradingTextureEnabled !== TT && (this._ColorGradingTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(TT) {
        this._FresnelEnabled !== TT && (this._FresnelEnabled = TT, iT.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(TT) {
        this._ClearCoatTextureEnabled !== TT && (this._ClearCoatTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(TT) {
        this._ClearCoatBumpTextureEnabled !== TT && (this._ClearCoatBumpTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(TT) {
        this._ClearCoatTintTextureEnabled !== TT && (this._ClearCoatTintTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(TT) {
        this._SheenTextureEnabled !== TT && (this._SheenTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(TT) {
        this._AnisotropicTextureEnabled !== TT && (this._AnisotropicTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(TT) {
        this._ThicknessTextureEnabled !== TT && (this._ThicknessTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(TT) {
        this._RefractionIntensityTextureEnabled !== TT && (this._RefractionIntensityTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(TT) {
        this._TranslucencyIntensityTextureEnabled !== TT && (this._TranslucencyIntensityTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(TT) {
        this._TranslucencyColorTextureEnabled !== TT && (this._TranslucencyColorTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(TT) {
        this._IridescenceTextureEnabled !== TT && (this._IridescenceTextureEnabled = TT, iT.b.MarkAllMaterialsAsDirty(1))
      }
    }
    zT._DiffuseTextureEnabled = !0, zT._BaseWeightTextureEnabled = !0, zT._BaseDiffuseRoughnessTextureEnabled = !0, zT._DetailTextureEnabled = !0, zT._DecalMapEnabled = !0, zT._AmbientTextureEnabled = !0, zT._OpacityTextureEnabled = !0, zT._ReflectionTextureEnabled = !0, zT._EmissiveTextureEnabled = !0, zT._SpecularTextureEnabled = !0, zT._BumpTextureEnabled = !0, zT._LightmapTextureEnabled = !0, zT._RefractionTextureEnabled = !0, zT._ColorGradingTextureEnabled = !0, zT._FresnelEnabled = !0, zT._ClearCoatTextureEnabled = !0, zT._ClearCoatBumpTextureEnabled = !0, zT._ClearCoatTintTextureEnabled = !0, zT._SheenTextureEnabled = !0, zT._AnisotropicTextureEnabled = !0, zT._ThicknessTextureEnabled = !0, zT._RefractionIntensityTextureEnabled = !0, zT._TranslucencyIntensityTextureEnabled = !0, zT._TranslucencyColorTextureEnabled = !0, zT._IridescenceTextureEnabled = !0
  },
  39113: (TT, oT, IT) => {
    IT.d(oT, {
      $: () => pT,
      C: () => ET,
      D: () => fT,
      F: () => xT,
      G: () => LT,
      H: () => ZT,
      I: () => QT,
      J: () => aT,
      M: () => UT,
      Q: () => gT,
      U: () => jT,
      V: () => lT,
      W: () => sT,
      X: () => tT,
      Y: () => yT,
      ab: () => bT,
      c: () => JT,
      d: () => mT,
      e: () => DT,
      eb: () => cT,
      g: () => rT,
      j: () => AT,
      m: () => vT,
      q: () => BT,
      r: () => KT,
      t: () => MT,
      v: () => hT,
      x: () => CT,
      y: () => wT
    });
    var iT = IT(37660),
      zT = IT(36146),
      kT = IT(38976),
      WT = IT(39117),
      XT = IT(39125);

    function BT(TT, oT, IT) {
      if (!TT || TT.LOGARITHMICDEPTH || TT.indexOf && TT.indexOf("LOGARITHMICDEPTH") >= 0) {
        const TT = IT.activeCamera;
        1 === TT.mode && iT.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), oT.setFloat("logarithmicDepthConstant", 2 / (Math.log(TT.maxZ + 1) / Math.LN2))
      }
    }
    const FT = {
        r: 0,
        g: 0,
        b: 0
      },
      ST = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function DT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      IT && TT.fogEnabled && (!oT || oT.applyFog) && 0 !== TT.fogMode && (IT.setFloat4("vFogInfos", TT.fogMode, TT.fogStart, TT.fogEnd, TT.fogDensity), iT ? (TT.fogColor.toLinearSpaceToRef(FT, TT.Zc().useExactSrgbConversions), IT.setColor3("vFogColor", FT)) : IT.setColor3("vFogColor", TT.fogColor))
    }

    function LT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
      const DT = TT.numMaxInfluencers || TT.numInfluencers;
      return DT <= 0 ? 0 : (oT.push("#define MORPHTARGETS"), TT.hasPositions && oT.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), TT.hasNormals && oT.push("#define MORPHTARGETTEXTURE_HASNORMALS"), TT.hasTangents && oT.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), TT.hasUVs && oT.push("#define MORPHTARGETTEXTURE_HASUVS"), TT.hasUV2s && oT.push("#define MORPHTARGETTEXTURE_HASUV2S"), TT.hasColors && oT.push("#define MORPHTARGETTEXTURE_HASCOLORS"), TT.supportsPositions && zT && oT.push("#define MORPHTARGETS_POSITION"), TT.supportsNormals && kT && oT.push("#define MORPHTARGETS_NORMAL"), TT.supportsTangents && WT && oT.push("#define MORPHTARGETS_TANGENT"), TT.supportsUVs && XT && oT.push("#define MORPHTARGETS_UV"), TT.supportsUV2s && BT && oT.push("#define MORPHTARGETS_UV2"), TT.supportsColors && FT && oT.push("#define MORPHTARGETS_COLOR"), oT.push("#define NUM_MORPH_INFLUENCERS " + DT), TT.isUsingTextureForTargets && oT.push("#define MORPHTARGETS_TEXTURE"), ST.NUM_MORPH_INFLUENCERS = DT, ST.NORMAL = kT, ST.TANGENT = WT, ST.UV = XT, ST.UV2 = BT, ST.COLOR = FT, xT(IT, iT, ST, zT), DT)
    }

    function xT(TT, oT, IT) {
      let kT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const WT = IT.NUM_MORPH_INFLUENCERS;
      if (WT > 0 && zT.d.LastCreatedEngine) {
        const XT = zT.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          BT = oT.morphTargetManager;
        if (BT?.isUsingTextureForTargets) return;
        const FT = BT && BT.supportsPositions && kT,
          ST = BT && BT.supportsNormals && IT.NORMAL,
          DT = BT && BT.supportsTangents && IT.TANGENT,
          LT = BT && BT.supportsUVs && IT.UV1,
          xT = BT && BT.supportsUV2s && IT.UV2,
          cT = BT && BT.supportsColors && IT.VERTEXCOLOR;
        for (let IT = 0; IT < WT; IT++) FT && TT.push("position" + IT), ST && TT.push("normal" + IT), DT && TT.push("tangent" + IT), LT && TT.push("uv_" + IT), xT && TT.push("uv2_" + IT), cT && TT.push("color" + IT), TT.length > XT && iT.d.Error("Cannot add more vertex attributes for mesh " + oT.name)
      }
    }

    function cT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      TT.push("world0"), TT.push("world1"), TT.push("world2"), TT.push("world3"), oT && (TT.push("previousWorld0"), TT.push("previousWorld1"), TT.push("previousWorld2"), TT.push("previousWorld3"))
    }

    function KT(TT, oT) {
      const IT = TT.morphTargetManager;
      TT && IT && oT.setFloatArray("morphTargetInfluences", IT.influences)
    }

    function MT(TT, oT) {
      oT.bindToEffect(TT, "Scene")
    }

    function rT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        BT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        ST = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        DT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        LT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (TT.texturesEnabled && zT && XT.c.ReflectionTextureEnabled) {
        if (IT.Y1("reflectionMatrix", zT.getReflectionTextureMatrix()), IT.updateFloat2("vReflectionInfos", zT.level * TT.iblIntensity, LT), BT && zT.boundingBoxSize) {
          const TT = zT;
          IT.updateVector3("vReflectionPosition", TT.boundingBoxPosition), IT.updateVector3("vReflectionSize", TT.boundingBoxSize)
        }
        if (kT) {
          const TT = zT.getSize().width;
          IT.updateFloat2("vReflectionFilteringInfo", TT, Math.log2(TT))
        }
        if (ST && !oT.USEIRRADIANCEMAP) {
          const TT = zT.sphericalPolynomial;
          if (oT.USESPHERICALFROMREFLECTIONMAP && TT)
            if (oT.SPHERICAL_HARMONICS) {
              const oT = TT.preScaledHarmonics;
              IT.updateVector3("vSphericalL00", oT.l00), IT.updateVector3("vSphericalL1_1", oT.l1_1), IT.updateVector3("vSphericalL10", oT.l10), IT.updateVector3("vSphericalL11", oT.l11), IT.updateVector3("vSphericalL2_2", oT.l2_2), IT.updateVector3("vSphericalL2_1", oT.l2_1), IT.updateVector3("vSphericalL20", oT.l20), IT.updateVector3("vSphericalL21", oT.l21), IT.updateVector3("vSphericalL22", oT.l22)
            } else IT.updateFloat3("vSphericalX", TT.x.x, TT.x.y, TT.x.z), IT.updateFloat3("vSphericalY", TT.y.x, TT.y.y, TT.y.z), IT.updateFloat3("vSphericalZ", TT.z.x, TT.z.y, TT.z.z), IT.updateFloat3("vSphericalXX_ZZ", TT.xx.x - TT.zz.x, TT.xx.y - TT.zz.y, TT.xx.z - TT.zz.z), IT.updateFloat3("vSphericalYY_ZZ", TT.yy.x - TT.zz.x, TT.yy.y - TT.zz.y, TT.yy.z - TT.zz.z), IT.updateFloat3("vSphericalZZ", TT.zz.x, TT.zz.y, TT.zz.z), IT.updateFloat3("vSphericalXY", TT.xy.x, TT.xy.y, TT.xy.z), IT.updateFloat3("vSphericalYZ", TT.yz.x, TT.yz.y, TT.yz.z), IT.updateFloat3("vSphericalZX", TT.zx.x, TT.zx.y, TT.zx.z)
        } else FT && oT.USEIRRADIANCEMAP && oT.USE_IRRADIANCE_DOMINANT_DIRECTION && zT.irradianceTexture && IT.updateVector3("vReflectionDominantDirection", zT.irradianceTexture._dominantDirection);
        WT && IT.updateFloat3("vReflectionMicrosurfaceInfos", zT.getSize().width, zT.lodGenerationScale, zT.lodGenerationOffset)
      }
      DT && IT.updateColor3("vReflectionColor", iT)
    }

    function AT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (iT && XT.c.ReflectionTextureEnabled) {
        oT.LODBASEDMICROSFURACE ? IT.setTexture("reflectionSampler", iT) : (IT.setTexture("reflectionSampler", iT._lodTextureMid || iT), IT.setTexture("reflectionSamplerLow", iT._lodTextureLow || iT), IT.setTexture("reflectionSamplerHigh", iT._lodTextureHigh || iT)), oT.USEIRRADIANCEMAP && IT.setTexture("irradianceSampler", iT.irradianceTexture);
        const kT = TT.iblCdfGenerator;
        zT && kT && IT.setTexture("icdfSampler", kT.getIcdfTexture())
      }
    }

    function gT(TT, oT, IT) {
      oT._needUVs = !0, oT[IT] = !0, TT.optimizeUVAllocation && TT.getTextureMatrix().isIdentityAs3x2() ? (oT[IT + "DIRECTUV"] = TT.coordinatesIndex + 1, oT["MAINUV" + (TT.coordinatesIndex + 1)] = !0) : oT[IT + "DIRECTUV"] = 0
    }

    function hT(TT, oT, IT) {
      const iT = TT.getTextureMatrix();
      oT.Y1(IT + "Matrix", iT)
    }

    function wT(TT, oT, IT) {
      IT.BAKED_VERTEX_ANIMATION_TEXTURE && IT.INSTANCES && TT.push("bakedVertexAnimationSettingsInstanced")
    }

    function mT(TT, oT, IT) {
      var iT;
      if (oT && TT && (TT.computeBonesUsingShaders && oT._bonesComputationForcedToCPU && (TT.computeBonesUsingShaders = !1), TT.useBones && TT.computeBonesUsingShaders && TT.skeleton)) {
        const zT = TT.skeleton;
        if (zT.isUsingTextureForMatrices && oT.getUniformIndex("boneTextureInfo") > -1) {
          const IT = zT.getTransformMatrixTexture(TT);
          oT.setTexture("boneSampler", IT), oT.setFloat2("boneTextureInfo", zT._textureWidth, zT._textureHeight)
        } else {
          const kT = zT.getTransformMatrices(TT);
          kT && (oT.setMatrices("mBones", kT), IT && TT.pC().prePassRenderer && TT.pC().prePassRenderer.getIndex(2) && (IT.previousBones[TT.uniqueId] || (IT.previousBones[TT.uniqueId] = kT.slice()), oT.setMatrices("mPreviousBones", IT.previousBones[TT.uniqueId]), iT = kT, IT.previousBones[TT.uniqueId].set(iT)))
        }
      }
    }

    function eT(TT, oT, IT, iT, zT) {
      let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      TT._bindLight(oT, IT, iT, zT, kT)
    }
    const RT = 4,
      uT = new WeakMap;

    function vT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const kT = Math.min(oT.lightSources.length, zT);
      for (let WT = 0; WT < kT; WT++) {
        eT(oT.lightSources[WT], WT, TT, IT, "boolean" === typeof iT ? iT : iT.SPECULARTERM, oT.receiveShadows)
      }
    }

    function ET(TT, oT, IT, iT) {
      IT.NUM_BONE_INFLUENCERS > 0 && (iT.addCPUSkinningFallback(0, oT), TT.push("matricesIndices"), TT.push("matricesWeights"), IT.NUM_BONE_INFLUENCERS > 4 && (TT.push("matricesIndicesExtra"), TT.push("matricesWeightsExtra")))
    }

    function fT(TT, oT) {
      (oT.INSTANCES || oT.THIN_INSTANCES) && cT(TT, !!oT.PREPASS_VELOCITY), oT.INSTANCESCOLOR && TT.push("instanceColor")
    }

    function CT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = 0;
      for (let kT = 0; kT < IT && TT["LIGHT" + kT]; kT++) kT > 0 && (zT = iT + kT, oT.addFallback(zT, "LIGHT" + kT)), TT.SHADOWS || (TT["SHADOW" + kT] && oT.addFallback(iT, "SHADOW" + kT), TT["SHADOWPCF" + kT] && oT.addFallback(iT, "SHADOWPCF" + kT), TT["SHADOWPCSS" + kT] && oT.addFallback(iT, "SHADOWPCSS" + kT), TT["SHADOWPOISSON" + kT] && oT.addFallback(iT, "SHADOWPOISSON" + kT), TT["SHADOWESM" + kT] && oT.addFallback(iT, "SHADOWESM" + kT), TT["SHADOWCLOSEESM" + kT] && oT.addFallback(iT, "SHADOWCLOSEESM" + kT));
      return zT
    }

    function jT(TT, oT, IT, iT, zT, kT, WT) {
      let XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        FT = arguments.length > 9 ? arguments[9] : void 0,
        ST = arguments.length > 10 ? arguments[10] : void 0;
      if (WT._areMiscDirty) {
        WT.LOGARITHMICDEPTH = IT, WT.POINTSIZE = iT, WT.FOG = zT && function(TT, oT) {
          return oT.fogEnabled && TT.applyFog && 0 !== oT.fogMode
        }(TT, oT), WT.NONUNIFORMSCALING = TT.nonUniformScaling, WT.ALPHATEST = kT, WT.DECAL_AFTER_DETAIL = XT, WT.USE_VERTEX_PULLING = BT, WT.RIGHT_HANDED = oT.useRightHandedSystem;
        const DT = BT ? FT?.geometry?.getIndexBuffer() : null,
          LT = !!FT && FT.isUnIndexed;
        WT.VERTEX_PULLING_USE_INDEX_BUFFER = !!DT && !LT, WT.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!DT || LT) && DT.is32Bits, WT.VERTEXOUTPUT_INVARIANT = !!ST
      }
    }

    function JT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!TT.lightsEnabled || iT) return !0;
      const zT = oT.lightSources,
        kT = Math.min(zT.length, IT);
      for (let WT = 0; WT < kT; WT++)
        if (!zT[WT].areLightTexturesReady()) return !1;
      return !0
    }

    function UT(TT, oT, IT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!IT._areLightsDirty) return IT._needNormals;
      const XT = kT;
      kT = function(TT, oT) {
        const IT = TT.Zc().getCaps().maxUniformBuffersPerShaderStage;
        if (null == IT) return oT;
        const iT = Math.max(IT - RT, 1);
        return Math.min(oT, iT)
      }(TT, kT);
      let BT = 0;
      const FT = {
        needNormals: IT._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (TT.lightsEnabled && !WT) {
        oT.lightSources.length > kT && kT < XT && function(TT, oT, IT, zT) {
          let kT = uT.get(TT);
          kT || (kT = new Set, uT.set(TT, kT)), kT.has(zT) || (kT.add(zT), iT.d.Warn(`maxSimultaneousLights is ${oT} but this engine supports at most ${IT} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${zT} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${zT+RT} uniform buffers, over the device limit of ${TT.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${IT}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${IT} or less to silence this warning.`))
        }(TT.Zc(), XT, kT, Math.min(oT.lightSources.length, XT));
        for (const iT of oT.lightSources)
          if (YT(TT, oT, iT, BT, IT, zT, FT), BT++, BT === kT) break
      }
      IT.SPECULARTERM = FT.specularEnabled, IT.SHADOWS = FT.shadowEnabled;
      const ST = Math.max(kT, IT.MAXLIGHTCOUNT || 0);
      for (let iT = BT; iT < ST; iT++) void 0 !== IT["LIGHT" + iT] && (IT["LIGHT" + iT] = !1, IT["HEMILIGHT" + iT] = !1, IT["POINTLIGHT" + iT] = !1, IT["DIRLIGHT" + iT] = !1, IT["SPOTLIGHT" + iT] = !1, IT["AREALIGHT" + iT] = !1, IT["CLUSTLIGHT" + iT] = !1, IT["SHADOW" + iT] = !1, IT["SHADOWCSM" + iT] = !1, IT["SHADOWCSMDEBUG" + iT] = !1, IT["SHADOWCSMNUM_CASCADES" + iT] = !1, IT["SHADOWCSMUSESHADOWMAXZ" + iT] = !1, IT["SHADOWCSMNOBLEND" + iT] = !1, IT["SHADOWCSM_RIGHTHANDED" + iT] = !1, IT["SHADOWPCF" + iT] = !1, IT["SHADOWPCSS" + iT] = !1, IT["SHADOWPOISSON" + iT] = !1, IT["SHADOWESM" + iT] = !1, IT["SHADOWCLOSEESM" + iT] = !1, IT["SHADOWCUBE" + iT] = !1, IT["SHADOWLOWQUALITY" + iT] = !1, IT["SHADOWMEDIUMQUALITY" + iT] = !1);
      IT.LIGHTCOUNT = BT, IT.MAXLIGHTCOUNT = kT;
      const DT = TT.Zc().getCaps();
      return void 0 === IT.SHADOWFLOAT && (FT.needRebuild = !0), IT.SHADOWFLOAT = FT.shadowEnabled && (DT.textureFloatRender && DT.textureFloatLinearFiltering || DT.textureHalfFloatRender && DT.textureHalfFloatLinearFiltering), IT.LIGHTMAPEXCLUDED = FT.lightmapMode, FT.needRebuild && IT.rebuild(), FT.needNormals
    }

    function aT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (oT && XT.c.ReflectionTextureEnabled) {
        if (!oT.isReadyOrNotBlocking()) return !1;
        IT._needNormals = !0, IT.REFLECTION = !0, IT.GAMMAREFLECTION = oT.gammaSpace, IT.RGBDREFLECTION = oT.isRGBD, IT.LODINREFLECTIONALPHA = oT.lodLevelInAlpha, IT.LINEARSPECULARREFLECTION = oT.linearSpecularLOD, IT.USEIRRADIANCEMAP = !1, IT.LODBASEDMICROSFURACE = TT.Zc().getCaps().textureLOD;
        const WT = TT.Zc();
        switch (iT && zT > 0 ? (IT.NUM_SAMPLES = "" + zT, WT._features.needTypeSuffixInShaderConstants && (IT.NUM_SAMPLES = IT.NUM_SAMPLES + "u"), IT.REALTIME_FILTERING = !0, TT.iblCdfGenerator && (IT.IBL_CDF_FILTERING = !0)) : IT.REALTIME_FILTERING = !1, IT.INVERTCUBICMAP = 6 === oT.coordinatesMode, IT.REFLECTIONMAP_3D = oT.isCube, IT.REFLECTIONMAP_OPPOSITEZ = IT.REFLECTIONMAP_3D && TT.useRightHandedSystem ? !oT.invertZ : oT.invertZ, IT.REFLECTIONMAP_CUBIC = !1, IT.REFLECTIONMAP_EXPLICIT = !1, IT.REFLECTIONMAP_PLANAR = !1, IT.REFLECTIONMAP_PROJECTION = !1, IT.REFLECTIONMAP_SKYBOX = !1, IT.REFLECTIONMAP_SPHERICAL = !1, IT.REFLECTIONMAP_EQUIRECTANGULAR = !1, IT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, IT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, oT.coordinatesMode) {
          case 0:
            IT.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            IT.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            IT.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            IT.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            IT.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            IT.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            IT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            IT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            IT.REFLECTIONMAP_CUBIC = !0, IT.USE_LOCAL_REFLECTIONMAP_CUBIC = !!oT.boundingBoxSize
        }
        5 !== oT.coordinatesMode && (oT.irradianceTexture ? (IT.USEIRRADIANCEMAP = !0, IT.USESPHERICALFROMREFLECTIONMAP = !1, IT.USESPHERICALINVERTEX = !1, oT.irradianceTexture._dominantDirection ? IT.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : IT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : oT.isCube && (IT.USESPHERICALFROMREFLECTIONMAP = !0, IT.USEIRRADIANCEMAP = !1, IT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, IT.USESPHERICALINVERTEX = kT))
      } else IT.REFLECTION = !1, IT.REFLECTIONMAP_3D = !1, IT.REFLECTIONMAP_SPHERICAL = !1, IT.REFLECTIONMAP_PLANAR = !1, IT.REFLECTIONMAP_CUBIC = !1, IT.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, IT.REFLECTIONMAP_PROJECTION = !1, IT.REFLECTIONMAP_SKYBOX = !1, IT.REFLECTIONMAP_EXPLICIT = !1, IT.REFLECTIONMAP_EQUIRECTANGULAR = !1, IT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, IT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, IT.INVERTCUBICMAP = !1, IT.USESPHERICALFROMREFLECTIONMAP = !1, IT.USEIRRADIANCEMAP = !1, IT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, IT.USESPHERICALINVERTEX = !1, IT.REFLECTIONMAP_OPPOSITEZ = !1, IT.LODINREFLECTIONALPHA = !1, IT.GAMMAREFLECTION = !1, IT.RGBDREFLECTION = !1, IT.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function YT(TT, oT, IT, iT, zT, WT, XT) {
      switch (XT.needNormals = !0, void 0 === zT["LIGHT" + iT] && (XT.needRebuild = !0), zT["LIGHT" + iT] = !0, zT["SPOTLIGHT" + iT] = !1, zT["HEMILIGHT" + iT] = !1, zT["POINTLIGHT" + iT] = !1, zT["DIRLIGHT" + iT] = !1, zT["AREALIGHT" + iT] = !1, zT["CLUSTLIGHT" + iT] = !1, IT.prepareLightSpecificDefines(zT, iT), zT["LIGHT_FALLOFF_PHYSICAL" + iT] = !1, zT["LIGHT_FALLOFF_GLTF" + iT] = !1, zT["LIGHT_FALLOFF_STANDARD" + iT] = !1, IT.falloffType) {
        case kT.c.FALLOFF_GLTF:
          zT["LIGHT_FALLOFF_GLTF" + iT] = !0;
          break;
        case kT.c.FALLOFF_PHYSICAL:
          zT["LIGHT_FALLOFF_PHYSICAL" + iT] = !0;
          break;
        case kT.c.FALLOFF_STANDARD:
          zT["LIGHT_FALLOFF_STANDARD" + iT] = !0
      }
      if (WT && !IT.specular.equalsFloats(0, 0, 0) && (XT.specularEnabled = !0), zT["SHADOW" + iT] = !1, zT["SHADOWCSM" + iT] = !1, zT["SHADOWCSMDEBUG" + iT] = !1, zT["SHADOWCSMNUM_CASCADES" + iT] = !1, zT["SHADOWCSMUSESHADOWMAXZ" + iT] = !1, zT["SHADOWCSMNOBLEND" + iT] = !1, zT["SHADOWCSM_RIGHTHANDED" + iT] = !1, zT["SHADOWPCF" + iT] = !1, zT["SHADOWPCSS" + iT] = !1, zT["SHADOWPOISSON" + iT] = !1, zT["SHADOWESM" + iT] = !1, zT["SHADOWCLOSEESM" + iT] = !1, zT["SHADOWCUBE" + iT] = !1, zT["SHADOWLOWQUALITY" + iT] = !1, zT["SHADOWMEDIUMQUALITY" + iT] = !1, oT && oT.receiveShadows && TT.shadowsEnabled && IT.shadowEnabled) {
        const oT = IT.getShadowGenerator(TT.activeCamera) ?? IT.getShadowGenerator();
        if (oT) {
          const TT = oT.getShadowMap();
          TT && TT.renderList && TT.renderList.length > 0 && (XT.shadowEnabled = !0, oT.prepareDefines(zT, iT))
        }
      }
      IT.lightmapMode != kT.c.LIGHTMAP_DEFAULT ? (XT.lightmapMode = !0, zT["LIGHTMAPEXCLUDED" + iT] = !0, zT["LIGHTMAPNOSPECULAR" + iT] = IT.lightmapMode == kT.c.LIGHTMAP_SHADOWSONLY) : (zT["LIGHTMAPEXCLUDED" + iT] = !1, zT["LIGHTMAPNOSPECULAR" + iT] = !1)
    }

    function QT(TT, oT, IT, iT, zT) {
      let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        XT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        BT = function(TT, oT) {
          let IT = !1;
          if (TT.activeCamera) {
            const iT = oT.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              zT = oT.CAMERA_PERSPECTIVE ? 1 : 0,
              kT = 1 === TT.activeCamera.mode ? 1 : 0,
              WT = 0 === TT.activeCamera.mode ? 1 : 0;
            (iT ^ kT || zT ^ WT) && (oT.CAMERA_ORTHOGRAPHIC = 1 === kT, oT.CAMERA_PERSPECTIVE = 1 === WT, IT = !0)
          }
          return IT
        }(TT, iT);
      !1 !== kT && (BT = (0, WT.f)(IT, TT, iT)), iT.DEPTHPREPASS !== !oT.getColorWrite() && (iT.DEPTHPREPASS = !iT.DEPTHPREPASS, BT = !0), iT.INSTANCES !== zT && (iT.INSTANCES = zT, BT = !0), iT.THIN_INSTANCES !== XT && (iT.THIN_INSTANCES = XT, BT = !0), BT && iT.markAsUnprocessed()
    }
    const OT = 40,
      HT = 64,
      nT = new WeakMap,
      qT = new WeakSet;

    function ZT(TT, oT, IT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        XT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!oT._areAttributesDirty && oT._needNormals === oT._normals && oT._needUVs === oT._uvs) return !1;
      oT._normals = oT._needNormals, oT._uvs = oT._needUVs, oT.NORMAL = oT._needNormals && TT.isVerticesDataPresent("normal"), oT._needNormals && TT.isVerticesDataPresent("tangent") && (oT.TANGENT = !0);
      for (let iT = 1; iT <= 6; ++iT) oT["UV" + iT] = !!oT._needUVs && TT.isVerticesDataPresent(`uv${1===iT?"":iT}`);
      if (IT) {
        const IT = TT.useVertexColors && TT.isVerticesDataPresent("color");
        oT.VERTEXCOLOR = IT, oT.VERTEXALPHA = TT.hasVertexAlpha && IT && WT
      }
      return TT.isVerticesDataPresent("instanceColor") && (TT.OiT || TT.hasThinInstances) && (oT.INSTANCESCOLOR = !0), zT && function(TT, oT) {
        if (TT.useBones && TT.computeBonesUsingShaders && TT.skeleton) {
          oT.NUM_BONE_INFLUENCERS = TT.numBoneInfluencers;
          const IT = void 0 !== oT.BONETEXTURE;
          if (TT.skeleton.isUsingTextureForMatrices && IT) oT.BONETEXTURE = !0;
          else {
            oT.BonesPerMesh = TT.skeleton.bones.length + 1, oT.BONETEXTURE = !IT && void 0;
            const zT = TT.pC(),
              kT = zT.prePassRenderer;
            if (kT && kT.enabled) {
              const IT = -1 === kT.excludedSkinnedMesh.indexOf(TT);
              oT.BONES_VELOCITY_ENABLED = IT
            }
            const WT = !0 === oT.MULTIVIEW,
              XT = 2 * oT.BonesPerMesh + (WT ? 1 : 0);
            if (nT.get(TT.skeleton) !== XT) {
              nT.set(TT.skeleton, XT);
              const IT = zT.Zc().getCaps().maxVertexUniformVectors;
              if (IT && !qT.has(TT.skeleton)) {
                const zT = 4 * oT.BonesPerMesh,
                  kT = WT ? HT : OT,
                  XT = Math.max(IT - kT, 0);
                (zT > XT || WT && 3 * zT > IT) && (qT.add(TT.skeleton), iT.d.Warn(`Skeleton "${TT.skeleton.name}": ${TT.skeleton.bones.length} bones stored as vertex uniforms use ${zT} of ~${XT} usable uniform vectors${WT?" (multiview)":""} on a device reporting ${IT}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else oT.NUM_BONE_INFLUENCERS = 0, oT.BonesPerMesh = 0, void 0 !== oT.BONETEXTURE && (oT.BONETEXTURE = !1)
      }(TT, oT), kT && function(TT, oT) {
        const IT = TT.morphTargetManager;
        IT ? (oT.MORPHTARGETS_UV = IT.supportsUVs && oT.UV1, oT.MORPHTARGETS_UV2 = IT.supportsUV2s && oT.UV2, oT.MORPHTARGETS_TANGENT = IT.supportsTangents && oT.TANGENT, oT.MORPHTARGETS_NORMAL = IT.supportsNormals && oT.NORMAL, oT.MORPHTARGETS_POSITION = IT.supportsPositions, oT.MORPHTARGETS_COLOR = IT.supportsColors, oT.MORPHTARGETTEXTURE_HASUVS = IT.hasUVs, oT.MORPHTARGETTEXTURE_HASUV2S = IT.hasUV2s, oT.MORPHTARGETTEXTURE_HASTANGENTS = IT.hasTangents, oT.MORPHTARGETTEXTURE_HASNORMALS = IT.hasNormals, oT.MORPHTARGETTEXTURE_HASPOSITIONS = IT.hasPositions, oT.MORPHTARGETTEXTURE_HASCOLORS = IT.hasColors, oT.NUM_MORPH_INFLUENCERS = IT.numMaxInfluencers || IT.numInfluencers, oT.MORPHTARGETS = oT.NUM_MORPH_INFLUENCERS > 0, oT.MORPHTARGETS_TEXTURE = IT.isUsingTextureForTargets) : (oT.MORPHTARGETS_UV = !1, oT.MORPHTARGETS_UV2 = !1, oT.MORPHTARGETS_TANGENT = !1, oT.MORPHTARGETS_NORMAL = !1, oT.MORPHTARGETS_POSITION = !1, oT.MORPHTARGETS_COLOR = !1, oT.MORPHTARGETTEXTURE_HASUVS = !1, oT.MORPHTARGETTEXTURE_HASUV2S = !1, oT.MORPHTARGETTEXTURE_HASTANGENTS = !1, oT.MORPHTARGETTEXTURE_HASNORMALS = !1, oT.MORPHTARGETTEXTURE_HASPOSITIONS = !1, oT.MORPHTARGETTEXTURE_HAS_COLORS = !1, oT.MORPHTARGETS = !1, oT.NUM_MORPH_INFLUENCERS = 0)
      }(TT, oT), XT && function(TT, oT) {
        const IT = TT.bakedVertexAnimationManager;
        oT.BAKED_VERTEX_ANIMATION_TEXTURE = !(!IT || !IT.isEnabled)
      }(TT, oT), !0
    }

    function lT(TT, oT) {
      if (TT.activeCamera) {
        const IT = oT.MULTIVIEW;
        oT.MULTIVIEW = null !== TT.activeCamera.outputRenderTarget && TT.activeCamera.outputRenderTarget.getViewCount() > 1, oT.MULTIVIEW != IT && oT.markAsUnprocessed()
      }
    }

    function sT(TT, oT, IT) {
      const iT = oT.ORDER_INDEPENDENT_TRANSPARENCY,
        zT = oT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      oT.ORDER_INDEPENDENT_TRANSPARENCY = TT.useOrderIndependentTransparency && IT, oT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !TT.Zc().getCaps().textureFloatLinearFiltering, iT === oT.ORDER_INDEPENDENT_TRANSPARENCY && zT === oT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || oT.markAsUnprocessed()
    }

    function tT(TT, oT, IT) {
      const iT = oT.PREPASS;
      if (!oT._arePrePassDirty) return;
      const zT = [{
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
      if (TT.prePassRenderer && TT.prePassRenderer.enabled && IT) {
        oT.PREPASS = !0, oT.SCENE_MRT_COUNT = TT.prePassRenderer.mrtCount, oT.PREPASS_NORMAL_WORLDSPACE = TT.prePassRenderer.generateNormalsInWorldSpace, oT.PREPASS_COLOR = !0, oT.PREPASS_COLOR_INDEX = 0;
        for (let IT = 0; IT < zT.length; IT++) {
          const iT = TT.prePassRenderer.getIndex(zT[IT].type); - 1 !== iT ? (oT[zT[IT].define] = !0, oT[zT[IT].index] = iT) : oT[zT[IT].define] = !1
        }
      } else {
        oT.PREPASS = !1;
        for (let TT = 0; TT < zT.length; TT++) oT[zT[TT].define] = !1
      }
      oT.PREPASS != iT && (oT.markAsUnprocessed(), oT.markAsImageProcessingDirty())
    }

    function GT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        FT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      zT && zT.push("Light" + TT), kT || (oT.push("vLightData" + TT, "vLightDiffuse" + TT, "vLightSpecular" + TT, "vLightDirection" + TT, "vLightWidth" + TT, "vLightHeight" + TT, "vLightFalloff" + TT, "vLightGround" + TT, "vSliceData" + TT, "vSliceRanges" + TT, "lightMatrix" + TT, "shadowsInfo" + TT, "depthValues" + TT), IT.push("shadowTexture" + TT), IT.push("depthTexture" + TT), oT.push("viewFrustumZ" + TT, "cascadeBlendFactor" + TT, "lightSizeUVCorrection" + TT, "depthCorrection" + TT, "penumbraDarkness" + TT, "frustumLengths" + TT), iT && (IT.push("projectionLightTexture" + TT), oT.push("textureProjectionMatrix" + TT)), WT && IT.push("iesLightTexture" + TT), BT && IT.push("rectAreaLightEmissionTexture" + TT), XT && (IT.push("lightDataTexture" + TT), FT || IT.push("tileMaskTexture" + TT)))
    }

    function pT(TT, oT, IT) {
      const iT = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      IT && iT.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), TT.push(...iT);
      oT.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function bT(TT, oT, IT) {
      let iT, zT, kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        WT = null;
      if (TT.uniformsNames) {
        const XT = TT;
        iT = XT.uniformsNames, zT = XT.uniformBuffersNames, oT = XT.samplers, IT = XT.defines, kT = XT.maxSimultaneousLights || 0, WT = XT.shaderLanguage ?? null
      } else iT = TT, oT || (oT = []);
      for (let XT = 0; XT < kT && IT["LIGHT" + XT]; XT++) GT(XT, iT, oT, IT["PROJECTEDLIGHTTEXTURE" + XT], zT, !1, IT["IESLIGHTTEXTURE" + XT], IT["CLUSTLIGHT" + XT], IT["RECTAREALIGHTEMISSIONTEXTURE" + XT], 1 === WT);
      IT.NUM_MORPH_INFLUENCERS && (iT.push("morphTargetInfluences"), iT.push("morphTargetCount")), IT.BAKED_VERTEX_ANIMATION_TEXTURE && (iT.push("bakedVertexAnimationSettings"), iT.push("bakedVertexAnimationTextureSizeInverted"), iT.push("bakedVertexAnimationTime"), oT.push("bakedVertexAnimationTexture"))
    }

    function yT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      TT.addUniform("vReflectionInfos", 2), TT.addUniform("reflectionMatrix", 16), oT && TT.addUniform("vReflectionMicrosurfaceInfos", 3), IT && (TT.addUniform("vReflectionPosition", 3), TT.addUniform("vReflectionSize", 3)), iT && (TT.addUniform("vReflectionFilteringInfo", 2), TT.addUniform("vReflectionDominantDirection", 3)), kT && TT.addUniform("vReflectionColor", 3), zT && (TT.addUniform("vSphericalL00", 3), TT.addUniform("vSphericalL1_1", 3), TT.addUniform("vSphericalL10", 3), TT.addUniform("vSphericalL11", 3), TT.addUniform("vSphericalL2_2", 3), TT.addUniform("vSphericalL2_1", 3), TT.addUniform("vSphericalL20", 3), TT.addUniform("vSphericalL21", 3), TT.addUniform("vSphericalL22", 3), TT.addUniform("vSphericalX", 3), TT.addUniform("vSphericalY", 3), TT.addUniform("vSphericalZ", 3), TT.addUniform("vSphericalXX_ZZ", 3), TT.addUniform("vSphericalYY_ZZ", 3), TT.addUniform("vSphericalZZ", 3), TT.addUniform("vSphericalXY", 3), TT.addUniform("vSphericalYZ", 3), TT.addUniform("vSphericalZX", 3))
    }
  },
  39131: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(36118),
      zT = IT(39068);
    class kT extends zT.c {
      constructor(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(TT, oT, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new iT.b, this._storeEffectOnSubMeshes = IT
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(TT, oT) {
        return !!TT && (!this._storeEffectOnSubMeshes || (!TT.pR || 0 === TT.pR.length || this.isReadyForSubMesh(TT, TT.pR[0], oT)))
      }
      _isReadyForSubMesh(TT) {
        const oT = TT.materialDefines;
        return !(this.checkReadyOnEveryCall || !TT.effect || !oT || oT._renderId !== this.pC().getRenderId())
      }
      bindOnlyWorldMatrix(TT) {
        this._activeEffect.setMatrix("world", TT)
      }
      bindOnlyNormalMatrix(TT) {
        this._activeEffect.setMatrix("normalMatrix", TT)
      }
      bind(TT, oT) {
        oT && this.bindForSubMesh(TT, oT, oT.pR[0])
      }
      _afterBind(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(TT, oT, IT), this.pC()._cachedEffect = oT, IT ? IT._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return IT._drawWrapper._forceRebindOnNextCall || TT.isCachedMaterialInvalid(this, oT, iT)
      }
      dispose(TT, oT, IT) {
        this._activeEffect = void 0, super.dispose(TT, oT, IT)
      }
    }
  },
  39152: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT,
      d: () => zT
    });
    const iT = new WeakMap;

    function zT(TT) {
      const oT = TT.getVertexBuffers();
      if (!oT) return null;
      let IT = iT.get(TT);
      if (IT) {
        let TT = !1;
        for (const iT in oT)
          if (!IT.has(iT)) {
            TT = !0;
            break
          } if (!TT) return IT
      } else IT = new Map, iT.set(TT, IT);
      for (const iT in oT) {
        const TT = oT[iT];
        if (TT) {
          const oT = TT.byteOffset,
            zT = TT.byteStride,
            kT = TT.type,
            WT = TT.normalized;
          IT.set(iT, {
            offset: oT,
            stride: zT,
            type: kT,
            normalized: WT
          })
        }
      }
      return IT
    }

    function kT(TT, oT) {
      oT.forEach(((oT, IT) => {
        const iT = `vp_${IT}_info`;
        TT.setFloat4(iT, oT.offset, oT.stride, oT.type, oT.normalized ? 1 : 0)
      }))
    }
  },
  39102: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => BT
    });
    var iT = IT(38764),
      zT = IT(36118),
      kT = IT(38773);
    let WT = (() => {
      var TT;
      let oT, IT, zT = [];
      return TT = class {
        static extractMinAndMaxIndexed(TT, oT, IT, iT, zT, kT) {
          for (let WT = IT; WT < IT + iT; WT++) {
            const IT = 3 * oT[WT],
              iT = TT[IT],
              XT = TT[IT + 1],
              BT = TT[IT + 2];
            zT.minimizeInPlaceFromFloats(iT, XT, BT), kT.maximizeInPlaceFromFloats(iT, XT, BT)
          }
        }
        static extractMinAndMax(TT, oT, IT, iT, zT, kT) {
          for (let WT = oT, XT = oT * iT; WT < oT + IT; WT++, XT += iT) {
            const oT = TT[XT],
              IT = TT[XT + 1],
              iT = TT[XT + 2];
            zT.minimizeInPlaceFromFloats(oT, IT, iT), kT.maximizeInPlaceFromFloats(oT, IT, iT)
          }
        }
      }, (() => {
        const WT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [kT.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], IT = [kT.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, iT.h)(TT, null, oT, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: TT => "extractMinAndMaxIndexed" in TT,
            get: TT => TT.extractMinAndMaxIndexed
          },
          metadata: WT
        }, null, zT), (0, iT.h)(TT, null, IT, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: TT => "extractMinAndMax" in TT,
            get: TT => TT.extractMinAndMax
          },
          metadata: WT
        }, null, zT), WT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WT
        }), (0, iT.j)(TT, zT)
      })(), TT
    })();

    function XT(TT, oT, IT, iT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const XT = new zT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        BT = new zT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return WT.extractMinAndMaxIndexed(TT, oT, IT, iT, XT, BT), kT && (XT.x -= XT.x * kT.x + kT.y, XT.y -= XT.y * kT.x + kT.y, XT.z -= XT.z * kT.x + kT.y, BT.x += BT.x * kT.x + kT.y, BT.y += BT.y * kT.x + kT.y, BT.z += BT.z * kT.x + kT.y), {
        minimum: XT,
        maximum: BT
      }
    }

    function BT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        kT = arguments.length > 4 ? arguments[4] : void 0;
      const XT = new zT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        BT = new zT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return kT || (kT = 3), WT.extractMinAndMax(TT, oT, IT, kT, XT, BT), iT && (XT.x -= XT.x * iT.x + iT.y, XT.y -= XT.y * iT.x + iT.y, XT.z -= XT.z * iT.x + iT.y, BT.x += BT.x * iT.x + iT.y, BT.y += BT.y * iT.x + iT.y, BT.z += BT.z * iT.x + iT.y), {
        minimum: XT,
        maximum: BT
      }
    }
  },
  39076: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST
    });
    var iT, zT = IT(38923),
      kT = IT(39082),
      WT = IT(39091),
      XT = IT(39102),
      BT = IT(39105),
      FT = IT(38643);
    class ST {
      get materialDefines() {
        const TT = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof TT ? null : TT
      }
      set materialDefines(TT) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = TT
      }
      _getDrawWrapper(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT = TT ?? this._engine.currentRenderPassId;
        let IT = this._drawWrappers[TT];
        return !IT && oT && (this._drawWrappers[TT] = IT = new BT.c(this._mesh.pC().Zc())), IT
      }
      _removeDrawWrapper(TT) {
        let oT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[TT]?.dispose(oT), this._drawWrappers[TT] = void 0
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zT = this._drawWrapper;
        zT.setEffect(TT, oT, iT), void 0 !== IT && (zT.materialContext = IT), TT || (zT.defines = null, zT.materialContext = void 0)
      }
      resetDrawCache(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== TT) return void this._removeDrawWrapper(TT, !0, oT);
          for (const TT of this._drawWrappers) TT?.dispose(oT)
        }
        this._drawWrappers = []
      }
      static AddToMesh(TT, oT, IT, iT, zT, kT, WT) {
        return new ST(TT, oT, IT, iT, zT, kT, WT, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(TT, oT, IT, iT, zT, kT, WT) {
        let XT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          BT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = TT, this.verticesStart = oT, this.verticesCount = IT, this.indexStart = iT, this.indexCount = zT, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = kT, this._renderingMesh = WT || kT, BT && kT.pR.push(this), this._engine = this._mesh.pC().Zc(), this.resetDrawCache(), this._trianglePlanes = [], this._id = kT.pR.length - 1, XT && (this.refreshBoundingInfo(), kT.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      GJ() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.GJ() : this._boundingInfo
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
      bc() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const oT = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!oT) return TT && this._mesh.pC()._hasDefaultMaterial ? this._mesh.pC().defaultMaterial : null;
        if (this._isMultiMaterial(oT)) {
          const TT = oT.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== TT && (this._currentMaterial = TT, this.resetDrawCache()), TT
        }
        return oT
      }
      _isMultiMaterial(TT) {
        return void 0 !== TT.getSubMaterial
      }
      refreshBoundingInfo() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (TT || (TT = this._renderingMesh.getVerticesData(zT.i.PositionKind)), !TT) return this._boundingInfo = this._mesh.GJ(), this;
        const oT = this._renderingMesh.hWT();
        let IT;
        if (0 === this.indexStart && this.indexCount === oT.length) {
          const TT = this._renderingMesh.GJ();
          IT = {
            minimum: TT.minimum.clone(),
            maximum: TT.maximum.clone()
          }
        } else IT = (0, XT.c)(TT, oT, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(IT.minimum, IT.maximum) : this._boundingInfo = new WT.d(IT.minimum, IT.maximum), this
      }
      _checkCollision(TT) {
        return this.GJ()._checkCollision(TT)
      }
      updateBoundingInfo(TT) {
        let oT = this.GJ();
        return oT || (this.refreshBoundingInfo(), oT = this.GJ()), oT && oT.update(TT), this
      }
      isInFrustum(TT) {
        const oT = this.GJ();
        return !!oT && oT.isInFrustum(TT, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(TT) {
        const oT = this.GJ();
        return !!oT && oT.isCompletelyInFrustum(TT)
      }
      render(TT) {
        return this._renderingMesh.render(this, TT, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(TT, oT) {
        if (!this._linesIndexBuffer) {
          const IT = 6 * Math.floor(this.indexCount / 3),
            iT = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(IT) : new Uint16Array(IT);
          let zT = 0;
          if (0 === TT.length)
            for (let TT = this.indexStart; TT < this.indexStart + this.indexCount; TT += 3) iT[zT++] = TT, iT[zT++] = TT + 1, iT[zT++] = TT + 1, iT[zT++] = TT + 2, iT[zT++] = TT + 2, iT[zT++] = TT;
          else
            for (let oT = this.indexStart; oT < this.indexStart + this.indexCount; oT += 3) iT[zT++] = TT[oT], iT[zT++] = TT[oT + 1], iT[zT++] = TT[oT + 1], iT[zT++] = TT[oT + 2], iT[zT++] = TT[oT + 2], iT[zT++] = TT[oT];
          this._linesIndexBuffer = oT.createIndexBuffer(iT), this._linesIndexCount = iT.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(TT) {
        const oT = this.GJ();
        return !!oT && TT.intersectsBox(oT.boundingBox)
      }
      intersects(TT, oT, IT, iT, zT) {
        const kT = this.bc();
        if (!kT) return null;
        let WT = 3,
          XT = !1;
        switch (kT.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            WT = 1, XT = !0
        }
        return 4 === kT.fillMode ? IT.length ? this._intersectLines(TT, oT, IT, this._mesh.intersectionThreshold, iT) : this._intersectUnIndexedLines(TT, oT, IT, this._mesh.intersectionThreshold, iT) : !IT.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(TT, oT, IT, iT, zT) : this._intersectTriangles(TT, oT, IT, WT, XT, iT, zT)
      }
      _intersectLines(TT, oT, IT, iT, zT) {
        let WT = null;
        for (let XT = this.indexStart; XT < this.indexStart + this.indexCount; XT += 2) {
          const BT = oT[IT[XT]],
            FT = oT[IT[XT + 1]],
            ST = TT.intersectionSegment(BT, FT, iT);
          if (!(ST < 0) && ((zT || !WT || ST < WT.distance) && (WT = new kT.b(null, null, ST), WT.faceId = XT / 2, zT))) break
        }
        return WT
      }
      _intersectUnIndexedLines(TT, oT, IT, iT, zT) {
        let WT = null;
        for (let XT = this.verticesStart; XT < this.verticesStart + this.verticesCount; XT += 2) {
          const IT = oT[XT],
            BT = oT[XT + 1],
            FT = TT.intersectionSegment(IT, BT, iT);
          if (!(FT < 0) && ((zT || !WT || FT < WT.distance) && (WT = new kT.b(null, null, FT), WT.faceId = XT / 2, zT))) break
        }
        return WT
      }
      _intersectTriangles(TT, oT, IT, iT, zT, kT, WT) {
        let XT = null,
          BT = -1;
        for (let FT = this.indexStart; FT < this.indexStart + this.indexCount - (3 - iT); FT += iT) {
          BT++;
          const iT = IT[FT],
            ST = IT[FT + 1],
            DT = IT[FT + 2];
          if (zT && 4294967295 === DT) {
            FT += 2;
            continue
          }
          const LT = oT[iT],
            xT = oT[ST],
            cT = oT[DT];
          if (!LT || !xT || !cT) continue;
          if (WT && !WT(LT, xT, cT, TT, iT, ST, DT)) continue;
          const KT = TT.intersectsTriangle(LT, xT, cT);
          if (KT) {
            if (KT.distance < 0) continue;
            if ((kT || !XT || KT.distance < XT.distance) && (XT = KT, XT.faceId = BT, kT)) break
          }
        }
        return XT
      }
      _intersectUnIndexedTriangles(TT, oT, IT, iT, zT) {
        let kT = null;
        for (let WT = this.verticesStart; WT < this.verticesStart + this.verticesCount; WT += 3) {
          const IT = oT[WT],
            XT = oT[WT + 1],
            BT = oT[WT + 2];
          if (zT && !zT(IT, XT, BT, TT, -1, -1, -1)) continue;
          const FT = TT.intersectsTriangle(IT, XT, BT);
          if (FT) {
            if (FT.distance < 0) continue;
            if ((iT || !kT || FT.distance < kT.distance) && (kT = FT, kT.faceId = WT / 3, iT)) break
          }
        }
        return kT
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(TT, oT) {
        const IT = new ST(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, TT, oT, !1);
        if (!this.IsGlobal) {
          const TT = this.GJ();
          if (!TT) return IT;
          IT._boundingInfo = new WT.d(TT.minimum, TT.maximum)
        }
        return IT
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.pC().Zc()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const oT = this._mesh.pR.indexOf(this);
        this._mesh.pR.splice(oT, 1), this.resetDrawCache(void 0, TT)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(TT, oT, IT, iT, zT) {
        let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = Number.MAX_VALUE,
          XT = -Number.MAX_VALUE;
        const BT = (zT || iT).hWT();
        for (let FT = oT; FT < oT + IT; FT++) {
          const TT = BT[FT];
          TT < WT && (WT = TT), TT > XT && (XT = TT)
        }
        return new ST(TT, WT, XT - WT + 1, oT, IT, iT, zT, kT)
      }
    }(iT = ST.prototype).projectToRef ?? (iT.projectToRef = (0, FT.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);