export const id = 297;
export const ids = [297];
export const modules = {
  41812: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW) {
        this.bu = WW, this.bv = iW, this.distance = OW, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41825: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(38253),
      EW = OW(38241),
      NW = OW(38249);
    class PW {
      constructor(WW, iW, OW) {
        this.vectors = (0, mW.c)(8, EW.q.Zero), this.center = EW.q.Zero(), this.centerWorld = EW.q.Zero(), this.extendSize = EW.q.Zero(), this.extendSizeWorld = EW.q.Zero(), this.directions = (0, mW.c)(3, EW.q.Zero), this.vectorsWorld = (0, mW.c)(8, EW.q.Zero), this.minimumWorld = EW.q.Zero(), this.maximumWorld = EW.q.Zero(), this.minimum = EW.q.Zero(), this.maximum = EW.q.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(WW, iW, OW)
      }
      reConstruct(WW, iW, OW) {
        const mW = WW.x,
          NW = WW.y,
          PW = WW.z,
          LW = iW.x,
          cW = iW.y,
          wW = iW.z,
          tW = this.vectors;
        this.minimum.yWW(mW, NW, PW), this.maximum.yWW(LW, cW, wW), tW[0].yWW(mW, NW, PW), tW[1].yWW(LW, cW, wW), tW[2].yWW(LW, NW, PW), tW[3].yWW(mW, cW, PW), tW[4].yWW(mW, NW, wW), tW[5].yWW(LW, cW, PW), tW[6].yWW(mW, cW, wW), tW[7].yWW(LW, NW, wW), iW.addToRef(WW, this.center).scaleInPlace(.5), iW.subtractToRef(WW, this.extendSize).scaleInPlace(.5), this._worldMatrix = OW || EW.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(WW) {
        const iW = PW._TmpVector3,
          OW = this.maximum.subtractToRef(this.minimum, iW[0]),
          mW = OW.length();
        OW.normalizeFromLength(mW);
        const EW = mW * WW,
          NW = OW.scaleInPlace(.5 * EW),
          LW = this.center.subtractToRef(NW, iW[1]),
          cW = this.center.addToRef(NW, iW[2]);
        return this.reConstruct(LW, cW, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(WW) {
        const iW = this.minimumWorld,
          OW = this.maximumWorld,
          mW = this.directions,
          NW = this.vectorsWorld,
          PW = this.vectors;
        if (WW.isIdentity()) {
          iW.HJ(this.minimum), OW.HJ(this.maximum);
          for (let WW = 0; WW < 8; ++WW) NW[WW].HJ(PW[WW]);
          this.extendSizeWorld.HJ(this.extendSize), this.centerWorld.HJ(this.center)
        } else {
          iW.Z5(Number.MAX_VALUE), OW.Z5(-Number.MAX_VALUE);
          for (let mW = 0; mW < 8; ++mW) {
            const LW = NW[mW];
            EW.q.TransformCoordinatesToRef(PW[mW], WW, LW), iW.minimizeInPlace(LW), OW.maximizeInPlace(LW)
          }
          OW.subtractToRef(iW, this.extendSizeWorld).scaleInPlace(.5), OW.addToRef(iW, this.centerWorld).scaleInPlace(.5)
        }
        EW.q.FromArrayToRef(WW.m, 0, mW[0]), EW.q.FromArrayToRef(WW.m, 4, mW[1]), EW.q.FromArrayToRef(WW.m, 8, mW[2]), this._worldMatrix = WW
      }
      isInFrustum(WW) {
        return PW.IsInFrustum(this.vectorsWorld, WW)
      }
      isCompletelyInFrustum(WW) {
        return PW.IsCompletelyInFrustum(this.vectorsWorld, WW)
      }
      intersectsPoint(WW) {
        const iW = this.minimumWorld,
          OW = this.maximumWorld,
          mW = iW.x,
          EW = iW.y,
          PW = iW.z,
          LW = OW.x,
          cW = OW.y,
          wW = OW.z,
          tW = WW.x,
          ZW = WW.y,
          xW = WW.z,
          lW = -NW.e;
        return !(LW - tW < lW || lW > tW - mW) && (!(cW - ZW < lW || lW > ZW - EW) && !(wW - xW < lW || lW > xW - PW))
      }
      intersectsSphere(WW) {
        return PW.IntersectsSphere(this.minimumWorld, this.maximumWorld, WW.centerWorld, WW.radiusWorld)
      }
      intersectsMinMax(WW, iW) {
        const OW = this.minimumWorld,
          mW = this.maximumWorld,
          EW = OW.x,
          NW = OW.y,
          PW = OW.z,
          LW = mW.x,
          cW = mW.y,
          wW = mW.z,
          tW = WW.x,
          ZW = WW.y,
          xW = WW.z,
          lW = iW.x,
          AW = iW.y,
          bW = iW.z;
        return !(LW < tW || EW > lW) && (!(cW < ZW || NW > AW) && !(wW < xW || PW > bW))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(WW, iW) {
        return WW.intersectsMinMax(iW.minimumWorld, iW.maximumWorld)
      }
      static IntersectsSphere(WW, iW, OW, mW) {
        const NW = PW._TmpVector3[0];
        EW.q.ClampToRef(OW, WW, iW, NW);
        return EW.q.DistanceSquared(OW, NW) <= mW * mW
      }
      static IsCompletelyInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; ++OW) {
          const mW = iW[OW];
          for (let iW = 0; iW < 8; ++iW)
            if (mW.dotCoordinate(WW[iW]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; ++OW) {
          let mW = !0;
          const EW = iW[OW];
          for (let iW = 0; iW < 8; ++iW)
            if (EW.dotCoordinate(WW[iW]) >= 0) {
              mW = !1;
              break
            } if (mW) return !1
        }
        return !0
      }
    }
    PW._TmpVector3 = (0, mW.c)(3, EW.q.Zero)
  },
  41818: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW
    });
    var mW = OW(38253),
      EW = OW(38241),
      NW = OW(41825);
    class PW {
      constructor(WW, iW, OW) {
        this.center = EW.q.Zero(), this.centerWorld = EW.q.Zero(), this.minimum = EW.q.Zero(), this.maximum = EW.q.Zero(), this.reConstruct(WW, iW, OW)
      }
      reConstruct(WW, iW, OW) {
        this.minimum.HJ(WW), this.maximum.HJ(iW);
        const mW = EW.q.Distance(WW, iW);
        iW.addToRef(WW, this.center).scaleInPlace(.5), this.radius = .5 * mW, this._update(OW || EW.d.IdentityReadOnly)
      }
      scale(WW) {
        const iW = PW._TmpVector3,
          OW = this.maximum.subtractToRef(this.minimum, iW[0]),
          mW = OW.length();
        OW.normalizeFromLength(mW);
        const EW = mW * WW,
          NW = OW.scaleInPlace(.5 * EW),
          LW = this.center.subtractToRef(NW, iW[1]),
          cW = this.center.addToRef(NW, iW[2]);
        return this.reConstruct(LW, cW, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(WW) {
        if (WW.isIdentity()) this.centerWorld.HJ(this.center), this.radiusWorld = this.radius;
        else {
          EW.q.TransformCoordinatesToRef(this.center, WW, this.centerWorld);
          const iW = PW._TmpVector3[0];
          EW.q.TransformNormalFromFloatsToRef(1, 1, 1, WW, iW), this.radiusWorld = Math.max(Math.abs(iW.x), Math.abs(iW.y), Math.abs(iW.z)) * this.radius
        }
      }
      isInFrustum(WW) {
        const iW = this.centerWorld,
          OW = this.radiusWorld;
        for (let mW = 0; mW < 6; mW++)
          if (WW[mW].dotCoordinate(iW) <= -OW) return !1;
        return !0
      }
      isCenterInFrustum(WW) {
        const iW = this.centerWorld;
        for (let OW = 0; OW < 6; OW++)
          if (WW[OW].dotCoordinate(iW) < 0) return !1;
        return !0
      }
      intersectsPoint(WW) {
        const iW = EW.q.DistanceSquared(this.centerWorld, WW);
        return !(this.radiusWorld * this.radiusWorld < iW)
      }
      static Intersects(WW, iW) {
        const OW = EW.q.DistanceSquared(WW.centerWorld, iW.centerWorld),
          mW = WW.radiusWorld + iW.radiusWorld;
        return !(mW * mW < OW)
      }
      static CreateFromCenterAndRadius(WW, iW, OW) {
        this._TmpVector3[0].HJ(WW), this._TmpVector3[1].yWW(0, 0, iW), this._TmpVector3[2].HJ(WW), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].yEW(this._TmpVector3[1]);
        const mW = new PW(this._TmpVector3[0], this._TmpVector3[2]);
        return mW._worldMatrix = OW || EW.d.Identity(), mW
      }
    }
    PW._TmpVector3 = (0, mW.c)(3, EW.q.Zero);
    const LW = {
        min: 0,
        max: 0
      },
      cW = {
        min: 0,
        max: 0
      },
      wW = (WW, iW, OW) => {
        const mW = EW.q.Dot(iW.centerWorld, WW),
          NW = Math.abs(EW.q.Dot(iW.directions[0], WW)) * iW.extendSize.x + Math.abs(EW.q.Dot(iW.directions[1], WW)) * iW.extendSize.y + Math.abs(EW.q.Dot(iW.directions[2], WW)) * iW.extendSize.z;
        OW.min = mW - NW, OW.max = mW + NW
      },
      tW = (WW, iW, OW) => (wW(WW, iW, LW), wW(WW, OW, cW), !(LW.min > cW.max || cW.min > LW.max));
    class ZW {
      constructor(WW, iW, OW) {
        this._isLocked = !1, this.boundingBox = new NW.b(WW, iW, OW), this.HEW = new PW(WW, iW, OW)
      }
      reConstruct(WW, iW, OW) {
        this.boundingBox.reConstruct(WW, iW, OW), this.HEW.reConstruct(WW, iW, OW)
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
      set isLocked(WW) {
        this._isLocked = WW
      }
      update(WW) {
        this._isLocked || (this.boundingBox._update(WW), this.HEW._update(WW))
      }
      centerOn(WW, iW) {
        const OW = ZW._TmpVector3[0].HJ(WW).yEW(iW),
          mW = ZW._TmpVector3[1].HJ(WW).addInPlace(iW);
        return this.boundingBox.reConstruct(OW, mW, this.boundingBox.getWorldMatrix()), this.HEW.reConstruct(OW, mW, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(WW) {
        const iW = EW.q.Minimize(this.minimum, WW),
          OW = EW.q.Maximize(this.maximum, WW);
        return this.reConstruct(iW, OW, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(WW) {
        const iW = EW.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(iW);
        const OW = EW.l.fA[0];
        return EW.q.TransformCoordinatesToRef(WW.boundingBox.minimumWorld, iW, OW), this.encapsulate(OW), EW.q.TransformCoordinatesToRef(WW.boundingBox.maximumWorld, iW, OW), this.encapsulate(OW), this
      }
      scale(WW) {
        return this.boundingBox.scale(WW), this.HEW.scale(WW), this
      }
      isInFrustum(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === iW || 3 === iW) && this.HEW.isCenterInFrustum(WW)) return !0;
        if (!this.HEW.isInFrustum(WW)) return !1;
        return !(1 !== iW && 3 !== iW) || this.boundingBox.isInFrustum(WW)
      }
      get diagonalLength() {
        const WW = this.boundingBox;
        return WW.maximumWorld.subtractToRef(WW.minimumWorld, ZW._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(WW) {
        return this.boundingBox.isCompletelyInFrustum(WW)
      }
      _checkCollision(WW) {
        return WW._canDoCollision(this.HEW.centerWorld, this.HEW.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(WW) {
        return !!this.HEW.centerWorld && (!!this.HEW.intersectsPoint(WW) && !!this.boundingBox.intersectsPoint(WW))
      }
      intersects(WW, iW) {
        if (!PW.Intersects(this.HEW, WW.HEW)) return !1;
        if (!NW.b.Intersects(this.boundingBox, WW.boundingBox)) return !1;
        if (!iW) return !0;
        const OW = this.boundingBox,
          mW = WW.boundingBox;
        return !!tW(OW.directions[0], OW, mW) && (!!tW(OW.directions[1], OW, mW) && (!!tW(OW.directions[2], OW, mW) && (!!tW(mW.directions[0], OW, mW) && (!!tW(mW.directions[1], OW, mW) && (!!tW(mW.directions[2], OW, mW) && (!!tW(EW.q.Cross(OW.directions[0], mW.directions[0]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[0], mW.directions[1]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[0], mW.directions[2]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[1], mW.directions[0]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[1], mW.directions[1]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[1], mW.directions[2]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[2], mW.directions[0]), OW, mW) && (!!tW(EW.q.Cross(OW.directions[2], mW.directions[1]), OW, mW) && !!tW(EW.q.Cross(OW.directions[2], mW.directions[2]), OW, mW))))))))))))))
      }
    }
    ZW._TmpVector3 = (0, mW.c)(2, EW.q.Zero)
  },
  41853: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      g: () => cW,
      j: () => LW,
      k: () => PW
    });
    var mW = OW(41670),
      EW = OW(38241);

    function NW(WW) {
      -1 === WW.indexOf("vClipPlane") && WW.push("vClipPlane"), -1 === WW.indexOf("vClipPlane2") && WW.push("vClipPlane2"), -1 === WW.indexOf("vClipPlane3") && WW.push("vClipPlane3"), -1 === WW.indexOf("vClipPlane4") && WW.push("vClipPlane4"), -1 === WW.indexOf("vClipPlane5") && WW.push("vClipPlane5"), -1 === WW.indexOf("vClipPlane6") && WW.push("vClipPlane6")
    }

    function PW(WW, iW, OW) {
      const mW = !!(WW.clipPlane ?? iW.clipPlane),
        EW = !!(WW.clipPlane2 ?? iW.clipPlane2),
        NW = !!(WW.clipPlane3 ?? iW.clipPlane3),
        PW = !!(WW.clipPlane4 ?? iW.clipPlane4),
        LW = !!(WW.clipPlane5 ?? iW.clipPlane5),
        cW = !!(WW.clipPlane6 ?? iW.clipPlane6);
      mW && OW.push("#define CLIPPLANE"), EW && OW.push("#define CLIPPLANE2"), NW && OW.push("#define CLIPPLANE3"), PW && OW.push("#define CLIPPLANE4"), LW && OW.push("#define CLIPPLANE5"), cW && OW.push("#define CLIPPLANE6")
    }

    function LW(WW, iW, OW) {
      let mW = !1;
      const EW = !!(WW.clipPlane ?? iW.clipPlane),
        NW = !!(WW.clipPlane2 ?? iW.clipPlane2),
        PW = !!(WW.clipPlane3 ?? iW.clipPlane3),
        LW = !!(WW.clipPlane4 ?? iW.clipPlane4),
        cW = !!(WW.clipPlane5 ?? iW.clipPlane5),
        wW = !!(WW.clipPlane6 ?? iW.clipPlane6);
      return OW.CLIPPLANE !== EW && (OW.CLIPPLANE = EW, mW = !0), OW.CLIPPLANE2 !== NW && (OW.CLIPPLANE2 = NW, mW = !0), OW.CLIPPLANE3 !== PW && (OW.CLIPPLANE3 = PW, mW = !0), OW.CLIPPLANE4 !== LW && (OW.CLIPPLANE4 = LW, mW = !0), OW.CLIPPLANE5 !== cW && (OW.CLIPPLANE5 = cW, mW = !0), OW.CLIPPLANE6 !== wW && (OW.CLIPPLANE6 = wW, mW = !0), mW
    }

    function cW(WW, iW, OW) {
      let mW = iW.clipPlane ?? OW.clipPlane;
      wW(WW, "vClipPlane", mW), mW = iW.clipPlane2 ?? OW.clipPlane2, wW(WW, "vClipPlane2", mW), mW = iW.clipPlane3 ?? OW.clipPlane3, wW(WW, "vClipPlane3", mW), mW = iW.clipPlane4 ?? OW.clipPlane4, wW(WW, "vClipPlane4", mW), mW = iW.clipPlane5 ?? OW.clipPlane5, wW(WW, "vClipPlane5", mW), mW = iW.clipPlane6 ?? OW.clipPlane6, wW(WW, "vClipPlane6", mW)
    }

    function wW(WW, iW, OW) {
      if (OW) {
        const NW = mW.c.bD()?.floatingOriginOffset || EW.q.ZeroReadOnly;
        WW.setFloat4(iW, OW.normal.x, OW.normal.y, OW.normal.z, OW.d + EW.q.Dot(OW.normal, NW))
      }
    }
  },
  41867: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(WW, iW) {
        this._defines[WW] || (WW < this._currentRank && (this._currentRank = WW), WW > this._maxRank && (this._maxRank = WW), this._defines[WW] = new Array), this._defines[WW].push(iW)
      }
      addCPUSkinningFallback(WW, iW) {
        this._mesh = iW, WW < this._currentRank && (this._currentRank = WW), WW > this._maxRank && (this._maxRank = WW)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(WW, iW) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, WW = WW.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), iW._bonesComputationForcedToCPU = !0;
          const OW = this._mesh.bD();
          for (let WW = 0; WW < OW.meshes.length; WW++) {
            const mW = OW.meshes[WW];
            if (mW.material) {
              if (mW.computeBonesUsingShaders && 0 !== mW.numBoneInfluencers)
                if (mW.material.getEffect() === iW) mW.computeBonesUsingShaders = !1;
                else if (mW.hY)
                for (const WW of mW.hY) {
                  if (WW.effect === iW) {
                    mW.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && mW.computeBonesUsingShaders && mW.numBoneInfluencers > 0 && (mW.computeBonesUsingShaders = !1)
          }
        } else {
          const iW = this._defines[this._currentRank];
          if (iW)
            for (let OW = 0; OW < iW.length; OW++) WW = WW.replace("#define " + iW[OW], "");
          this._currentRank++
        }
        return WW
      }
    }
  },
  41805: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => kW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41620),
      PW = OW(38276),
      LW = OW(38270),
      cW = OW(41808),
      wW = OW(41649),
      tW = OW(39911),
      ZW = OW(38939),
      xW = OW(41840),
      lW = OW(41538);
    let AW = (() => {
      var WW;
      let iW, OW, NW, PW, LW, cW, wW, tW, ZW, xW, AW, bW, jW = [];
      return WW = class {
        constructor() {
          this._func = (0, mW.g)(this, jW), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(WW) {
          this._func = WW
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(WW) {
          this._backFunc = WW
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(WW) {
          this._funcRef = WW
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(WW) {
          this._funcMask = WW
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(WW) {
          this._opStencilFail = WW
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(WW) {
          this._opDepthFail = WW
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(WW) {
          this._opStencilDepthPass = WW
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(WW) {
          this._backOpStencilFail = WW
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(WW) {
          this._backOpDepthFail = WW
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(WW) {
          this._backOpStencilDepthPass = WW
        }
        get mask() {
          return this._mask
        }
        set mask(WW) {
          this._mask = WW
        }
        get enabled() {
          return this._enabled
        }
        set enabled(WW) {
          this._enabled = WW
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(WW) {
          lW.d.Clone((() => WW), this)
        }
        serialize() {
          return lW.d.Serialize(this)
        }
        parse(WW, iW, OW) {
          lW.d.Parse((() => this), WW, iW, OW)
        }
      }, (() => {
        const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], PW = [(0, EW.M)()], LW = [(0, EW.M)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], tW = [(0, EW.M)()], ZW = [(0, EW.M)()], xW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], (0, mW.e)(WW, null, iW, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: WW => "func" in WW,
            get: WW => WW.func
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, OW, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: WW => "backFunc" in WW,
            get: WW => WW.backFunc
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, NW, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: WW => "funcRef" in WW,
            get: WW => WW.funcRef
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, PW, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "funcMask" in WW,
            get: WW => WW.funcMask
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, LW, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "opStencilFail" in WW,
            get: WW => WW.opStencilFail
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, cW, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "opDepthFail" in WW,
            get: WW => WW.opDepthFail
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, wW, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: WW => "opStencilDepthPass" in WW,
            get: WW => WW.opStencilDepthPass
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, tW, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "backOpStencilFail" in WW,
            get: WW => WW.backOpStencilFail
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, ZW, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "backOpDepthFail" in WW,
            get: WW => WW.backOpDepthFail
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, xW, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: WW => "backOpStencilDepthPass" in WW,
            get: WW => WW.backOpStencilDepthPass
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, AW, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: WW => "mask" in WW,
            get: WW => WW.mask
          },
          metadata: lW
        }, null, jW), (0, mW.e)(WW, null, bW, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "enabled" in WW,
            get: WW => WW.enabled
          },
          metadata: lW
        }, null, jW), lW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lW
        })
      })(), WW
    })();
    var bW = OW(41845),
      jW = OW(41439),
      UW = OW(41415);
    let kW = (() => {
      var WW;
      let iW, OW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW, CW, XW, BW, qW, RW = [],
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
        ci = [],
        wi = [],
        ti = [],
        Zi = [],
        xi = [],
        li = [],
        Ai = [],
        bi = [],
        ji = [],
        Ui = [],
        ki = [],
        si = [],
        Mi = [],
        Ki = [],
        Si = [],
        Yi = [],
        yi = [],
        Ti = [],
        Ji = [],
        Hi = [],
        ni = [],
        ui = [],
        oi = [],
        di = [],
        ei = [],
        vi = [],
        gi = [],
        Di = [],
        Vi = [],
        fi = [],
        Ci = [],
        Xi = [],
        Bi = [],
        qi = [],
        Ri = [];
      return WW = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(iW) {
          this._useVertexPulling !== iW && (this._useVertexPulling = iW, this.xOW(WW.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(WW) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(iW) {
          if (this._alpha === iW) return;
          const OW = this._alpha;
          this._alpha = iW, 1 !== OW && 1 !== iW || this.xOW(WW.MiscDirtyFlag + WW.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(iW) {
          this._backFaceCulling !== iW && (this._backFaceCulling = iW, this.xOW(WW.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(iW) {
          const OW = Math.max(0, Math.min(0 | iW, 4));
          this._textureRepetitionMode !== OW && (this._textureRepetitionMode = OW, this.xOW(WW.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(iW) {
          this._cullBackFaces !== iW && (this._cullBackFaces = iW, this.xOW(WW.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(WW) {
          this._blockDirtyMechanism !== WW && (this._blockDirtyMechanism = WW, WW || this.markDirty())
        }
        atomicMaterialsUpdate(WW) {
          this.blockDirtyMechanism = !0;
          try {
            WW(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(WW) {
          this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new PW.e), this._onBindObservable
        }
        set onBind(WW) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(WW)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new PW.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new PW.e), this._onEffectCreatedObservable
        }
        set alphaMode(WW) {
          this._alphaMode[0] = WW
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[OW] !== iW && (this._alphaMode[OW] = iW, this.xOW(WW.TextureDirtyFlag))
        }
        set needDepthPrePass(WW) {
          this._needDepthPrePass !== WW && (this._needDepthPrePass = WW, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(iW) {
          this._fogEnabled !== iW && (this._fogEnabled = iW, this.xOW(WW.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case WW.WireFrameFillMode:
            case WW.LineListDrawMode:
            case WW.LineLoopDrawMode:
            case WW.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(iW) {
          this.fillMode = iW ? WW.WireFrameFillMode : WW.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case WW.PointFillMode:
            case WW.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(iW) {
          this.fillMode = iW ? WW.PointFillMode : WW.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(iW) {
          this._fillMode !== iW && (this._fillMode = iW, this.xOW(WW.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(WW) {
          const iW = this.bD().VA().getCaps().fragmentDepthSupported;
          WW && !iW && tW.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = WW && iW, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(WW) {
          this._isVertexOutputInvariant !== WW && (this._isVertexOutputInvariant = WW, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(WW) {
          this._drawWrapper = WW
        }
        constructor(iW, OW, EW) {
          let cW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, mW.g)(this, RW), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, mW.g)(this, GW, void 0), this.uniqueId = ((0, mW.g)(this, IW), (0, mW.g)(this, aW, void 0)), this._loadedUniqueId = (0, mW.g)(this, rW), this.name = (0, mW.g)(this, zW, void 0), this.metadata = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, null)), this._internalMetadata = (0, mW.g)(this, Wi), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, mW.g)(this, ii, !1), this.checkReadyOnlyOnce = ((0, mW.g)(this, Oi), (0, mW.g)(this, mi, !1)), this.state = ((0, mW.g)(this, Ei), (0, mW.g)(this, Ni, "")), this._alpha = ((0, mW.g)(this, Pi), (0, mW.g)(this, Li, 1)), this.inspectableCustomProperties = (0, mW.g)(this, ci), this._backFaceCulling = (0, mW.g)(this, wi, !0), this._textureRepetitionMode = ((0, mW.g)(this, ti), (0, mW.g)(this, Zi, 0)), this.textureRepetitionHexTilingParams = ((0, mW.g)(this, xi), (0, mW.g)(this, li, [1, .6, 7, .5])), this._cullBackFaces = ((0, mW.g)(this, Ai), (0, mW.g)(this, bi, !0)), this._blockDirtyMechanism = ((0, mW.g)(this, ji), !1), this.sideOrientation = (0, mW.g)(this, Ui, null), this.onCompiled = ((0, mW.g)(this, ki), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.jD = new PW.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, mW.g)(this, si, [2]), this._needDepthPrePass = ((0, mW.g)(this, Mi), (0, mW.g)(this, Ki, !1)), this.disableDepthWrite = ((0, mW.g)(this, Si), (0, mW.g)(this, Yi, !1)), this.disableColorWrite = ((0, mW.g)(this, yi), (0, mW.g)(this, Ti, !1)), this.forceDepthWrite = ((0, mW.g)(this, Ji), (0, mW.g)(this, Hi, !1)), this.depthFunction = ((0, mW.g)(this, ni), (0, mW.g)(this, ui, 0)), this.separateCullingPass = ((0, mW.g)(this, oi), (0, mW.g)(this, di, !1)), this._fogEnabled = ((0, mW.g)(this, ei), (0, mW.g)(this, vi, !0)), this.pointSize = ((0, mW.g)(this, gi), (0, mW.g)(this, Di, 1)), this.zOffset = ((0, mW.g)(this, Vi), (0, mW.g)(this, fi, 0)), this.zOffsetUnits = ((0, mW.g)(this, Ci), (0, mW.g)(this, Xi, 0)), this.clipPlane = (0, mW.g)(this, Bi), this.stencil = new AW, this._isVertexOutputInvariant = (0, mW.g)(this, qi, WW.ForceVertexOutputInvariant), this._materialContext = (0, mW.g)(this, Ri), this._useUBO = !1, this._fillMode = WW.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = iW;
          const tW = OW || LW.d.LastCreatedScene;
          tW && (this._scene = tW, this._dirtyCallbacks = {}, this._forceGLSL = cW, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = iW || NW.f.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.VA().createMaterialContext(), this._drawWrapper = new xW.d(this._scene.VA(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new wW.c(this._scene.VA(), void 0, void 0, iW), this._useUBO = this.bD().VA().supportsUniformBuffers, this._createUniformBuffer(), EW || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), WW.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const WW = this.bD().VA();
          this._uniformBuffer?.dispose(), WW.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new wW.c(WW, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new wW.c(this._scene.VA(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(WW) {
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
        isReady(WW, iW) {
          return !0
        }
        isReadyForSubMesh(WW, iW, OW) {
          const mW = iW.materialDefines;
          return !!mW && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = mW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        bD() {
          return this._scene
        }
        _getEffectiveOrientation(WW) {
          return null !== this.sideOrientation ? this.sideOrientation : WW.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(WW) {
          this._transparencyMode = WW
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === WW.MATERIAL_ALPHABLEND || this._transparencyMode === WW.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === WW.MATERIAL_ALPHATEST || this._transparencyMode === WW.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === WW.MATERIAL_OPAQUE || this._transparencyMode === WW.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(WW) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : WW.visibility < 1 || !this._disableAlphaBlending && (WW.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(WW) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(WW) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const OW = this.bD().meshes;
          for (const WW of OW)
            if (WW.hY)
              for (const OW of WW.hY)
                if (OW.BA() === this)
                  for (const WW of OW._drawWrappers) WW && this._materialContext === WW.materialContext && (WW._wasPreviouslyReady = !1, WW._wasPreviouslyUsingInstances = null, WW._forceRebindOnNextCall = iW);
          iW && this.xOW(WW.AllDirtyFlag)
        }
        _preBind(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const mW = this._scene.VA(),
            EW = (null == OW ? this.sideOrientation : OW) === WW.ClockWiseSideOrientation,
            NW = iW || this._getDrawWrapper();
          return (0, jW.d)(NW) && NW.materialContext && (NW.materialContext.useVertexPulling = this.useVertexPulling), mW.enableEffect(NW), mW.setState(this.backFaceCulling, this.zOffset, !1, EW, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), EW
        }
        bind(WW, iW) {}
        buildUniformLayout() {
          const WW = this._uniformBuffer;
          this._eventInfo.ubo = WW, this._callbackPluginEventGeneric(8, this._eventInfo), WW.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(WW, iW, OW) {
          const mW = OW._drawWrapper;
          this._eventInfo.subMesh = OW, this._callbackPluginEventBindForSubMesh(this._eventInfo), mW._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(WW) {}
        bindView(WW) {
          this._useUBO ? this._needToBindSceneUbo = !0 : WW.setMatrix("view", this.bD().getViewMatrix())
        }
        bindViewProjection(WW) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (WW.setMatrix("viewProjection", this.bD().getTransformMatrix()), WW.setMatrix("projection", this.bD().getProjectionMatrix()), WW.setMatrix("inverseProjection", this.bD().getInverseProjectionMatrix()))
        }
        bindEyePosition(WW, iW) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(WW, iW)
        }
        _afterBind(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && iW && (this._needToBindSceneUbo = !1, (0, bW.s)(iW, this.bD().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = WW ? WW.visibility : 1, this._onBindObservable && WW && this._onBindObservable.notifyObservers(WW), this.disableDepthWrite) {
            const WW = this._scene.VA();
            this._cachedDepthWriteState = WW.getDepthWrite(), WW.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const WW = this._scene.VA();
            this._cachedColorWriteState = WW.getColorWrite(), WW.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const WW = this._scene.VA();
            this._cachedDepthFunctionState = WW.getDepthFunction() || 0, WW.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.VA().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.VA().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.VA().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(WW) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = WW, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(WW) {
          return null
        }
        _clonePlugins(iW, OW) {
          const mW = {};
          if (this._serializePlugins(mW), WW._ParsePlugins(mW, iW, this._scene, OW), this.pluginManager)
            for (const WW of this.pluginManager._plugins) {
              const OW = iW.pluginManager.getPlugin(WW.name);
              OW && WW.copyTo(OW)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const WW = [];
            for (const iW in this.meshMap) {
              const OW = this.meshMap[iW];
              OW && WW.push(OW)
            }
            return WW
          }
          return this._scene.meshes.filter((WW => WW.material === this))
        }
        forceCompilation(WW, iW, OW, mW) {
          const EW = {
              clipPlane: !1,
              useInstances: !1,
              ...OW
            },
            NW = this.bD(),
            PW = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const LW = () => {
            if (!this._scene || !this._scene.VA()) return;
            const OW = NW.clipPlane;
            if (EW.clipPlane && (NW.clipPlane = new ZW.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let OW = !0,
                NW = null;
              if (WW.hY) {
                const iW = new cW.d(0, 0, 0, 0, 0, WW, void 0, !1, !1);
                iW.materialDefines && (iW.materialDefines._renderId = -1), this.isReadyForSubMesh(WW, iW, EW.useInstances) || (iW.effect && iW.effect.getCompilationError() && iW.effect.allFallbacksProcessed() ? NW = iW.effect.getCompilationError() : (OW = !1, setTimeout(LW, 16)))
              }
              OW && (this.allowShaderHotSwapping = PW, NW && mW && mW(NW), iW && iW(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = PW, iW && iW(this)) : setTimeout(LW, 16);
            EW.clipPlane && (NW.clipPlane = OW)
          };
          LW()
        }
        async forceCompilationAsync(WW, iW) {
          return await new Promise(((OW, mW) => {
            this.forceCompilation(WW, (() => {
              OW()
            }), iW, (WW => {
              mW(WW)
            }))
          }))
        }
        xOW(iW) {
          this.bD().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (WW._DirtyCallbackArray.length = 0, iW & WW.ImageProcessingDirtyFlag && WW._DirtyCallbackArray.push(WW._ImageProcessingDirtyCallBack), iW & WW.TextureDirtyFlag && WW._DirtyCallbackArray.push(WW._TextureDirtyCallBack), iW & WW.LightDirtyFlag && WW._DirtyCallbackArray.push(WW._LightsDirtyCallBack), iW & WW.FresnelDirtyFlag && WW._DirtyCallbackArray.push(WW._FresnelDirtyCallBack), iW & WW.AttributesDirtyFlag && WW._DirtyCallbackArray.push(WW._AttributeDirtyCallBack), iW & WW.MiscDirtyFlag && WW._DirtyCallbackArray.push(WW._MiscDirtyCallBack), iW & WW.PrePassDirtyFlag && WW._DirtyCallbackArray.push(WW._PrePassDirtyCallBack), WW._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(WW._RunDirtyCallBacks), this.bD().resetCachedMaterial())
        }
        resetDrawCache() {
          const WW = this.bD().meshes;
          for (const iW of WW)
            if (iW.hY)
              for (const WW of iW.hY) WW.BA() === this && WW.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(WW) {
          const iW = this.bD();
          if (iW.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const OW = iW.meshes;
          for (const mW of OW)
            if (mW.hY)
              for (const OW of mW.hY) {
                if ((OW.BA() || (iW._hasDefaultMaterial ? iW.defaultMaterial : null)) === this)
                  for (const iW of OW._drawWrappers) iW && iW.defines && iW.defines.markAllAsDirty && this._materialContext === iW.materialContext && WW(iW.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.bD().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const WW = this.bD().enablePrePassRenderer();
          WW && WW.xOW()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(WW._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(WW._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(WW._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(WW._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(WW._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(WW._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(WW._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(WW._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(WW._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(WW._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const WW = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.jD.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(WW)
            }))
          }
        }
        setPrePassRenderer(WW) {
          return !1
        }
        dispose(WW, iW, OW) {
          const mW = this.bD();
          if (mW.stopAnimation(this), mW.freeProcessedMaterials(), mW.removeMaterial(this), this._eventInfo.forceDisposeTextures = iW, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const WW = this._parentContainer.materials.indexOf(this);
            WW > -1 && this._parentContainer.materials.splice(WW, 1), this._parentContainer = null
          }
          if (!0 !== OW)
            if (this.meshMap)
              for (const EW in this.meshMap) {
                const WW = this.meshMap[EW];
                this._disposeMeshResources(WW)
              } else {
                const WW = mW.meshes;
                for (const iW of WW) this._disposeMeshResources(iW)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.jD.notifyObservers(this), this.jD.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(WW) {
          if (!WW) return;
          const iW = WW.geometry,
            OW = WW._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (WW.hY && OW)
              for (const mW of WW.hY) {
                const WW = mW._drawWrappers;
                for (let EW = 0; EW < WW.length; EW++) {
                  const NW = WW[EW]?.effect;
                  if (!NW) continue;
                  OW[EW] === this && (iW?._releaseVertexArrayObject(NW), mW._removeDrawWrapper(EW, !0, !0))
                }
              }
          } else iW?._releaseVertexArrayObject(this._drawWrapper.effect);
          WW.material !== this || WW.WNW || (WW.material = null)
        }
        serialize() {
          const WW = lW.d.Serialize(this);
          return WW.stencil = this.stencil.serialize(), WW.uniqueId = this.uniqueId, this._serializePlugins(WW), WW
        }
        _serializePlugins(WW) {
          if (WW.plugins = {}, this.pluginManager)
            for (const iW of this.pluginManager._plugins) iW.doNotSerialize || (WW.plugins[iW.getClassName()] = iW.serialize())
        }
        static ParseAlphaMode(WW, iW) {
          void 0 !== WW._alphaMode ? iW._alphaMode = Array.isArray(WW._alphaMode) ? [...WW._alphaMode] : [WW._alphaMode] : void 0 !== WW.alphaMode ? iW._alphaMode = Array.isArray(WW.alphaMode) ? [...WW.alphaMode] : [WW.alphaMode] : iW._alphaMode = [2]
        }
        static Parse(iW, OW, mW) {
          if (iW.customType) {
            if ("BABYLON.PBRMaterial" === iW.customType && iW.overloadedAlbedo && (iW.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return tW.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else iW.customType = "BABYLON.StandardMaterial";
          const EW = NW.f.Instantiate(iW.customType).Parse(iW, OW, mW);
          return EW._loadedUniqueId = iW.uniqueId, WW.ParseAlphaMode(iW, EW), EW
        }
        static _ParsePlugins(WW, iW, OW, mW) {
          if (WW.plugins)
            for (const EW in WW.plugins) {
              const PW = WW.plugins[EW];
              let LW = iW.pluginManager?.getPlugin(PW.name);
              if (!LW) {
                const WW = NW.f.Instantiate("BABYLON." + EW);
                WW && (LW = new WW(iW))
              }
              LW?.parse(PW, OW, mW)
            }
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, EW.M)()], OW = [(0, EW.M)()], UW = [(0, EW.M)()], kW = [(0, EW.M)()], sW = [(0, EW.M)()], MW = [(0, EW.M)()], KW = [(0, EW.M)()], SW = [(0, EW.M)("alpha")], YW = [(0, EW.M)("backFaceCulling")], yW = [(0, EW.M)("textureRepetitionMode")], TW = [(0, EW.M)("textureRepetitionHexTilingParams")], JW = [(0, EW.M)("cullBackFaces")], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], uW = [(0, EW.M)()], oW = [(0, EW.M)()], dW = [(0, EW.M)()], eW = [(0, EW.M)()], vW = [(0, EW.M)()], gW = [(0, EW.M)("fogEnabled")], DW = [(0, EW.M)()], VW = [(0, EW.M)()], pW = [(0, EW.M)()], fW = [(0, EW.M)()], CW = [(0, EW.M)()], XW = [(0, EW.M)()], BW = [(0, EW.M)()], qW = [(0, EW.M)()], (0, mW.e)(WW, null, fW, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: WW => "pointsCloud" in WW,
            get: WW => WW.pointsCloud
          },
          metadata: NW
        }, null, RW), (0, mW.e)(WW, null, CW, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "fillMode" in WW,
            get: WW => WW.fillMode
          },
          metadata: NW
        }, null, RW), (0, mW.e)(WW, null, XW, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLogarithmicDepth" in WW,
            get: WW => WW.useLogarithmicDepth
          },
          metadata: NW
        }, null, RW), (0, mW.e)(WW, null, qW, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "transparencyMode" in WW,
            get: WW => WW.transparencyMode
          },
          metadata: NW
        }, null, RW), (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: WW => "id" in WW,
            get: WW => WW.id,
            set: (WW, iW) => {
              WW.id = iW
            }
          },
          metadata: NW
        }, GW, IW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: WW => "uniqueId" in WW,
            get: WW => WW.uniqueId,
            set: (WW, iW) => {
              WW.uniqueId = iW
            }
          },
          metadata: NW
        }, aW, rW), (0, mW.e)(null, null, UW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: WW => "name" in WW,
            get: WW => WW.name,
            set: (WW, iW) => {
              WW.name = iW
            }
          },
          metadata: NW
        }, zW, FW), (0, mW.e)(null, null, kW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: WW => "metadata" in WW,
            get: WW => WW.metadata,
            set: (WW, iW) => {
              WW.metadata = iW
            }
          },
          metadata: NW
        }, QW, Wi), (0, mW.e)(null, null, sW, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: WW => "checkReadyOnEveryCall" in WW,
            get: WW => WW.checkReadyOnEveryCall,
            set: (WW, iW) => {
              WW.checkReadyOnEveryCall = iW
            }
          },
          metadata: NW
        }, ii, Oi), (0, mW.e)(null, null, MW, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: WW => "checkReadyOnlyOnce" in WW,
            get: WW => WW.checkReadyOnlyOnce,
            set: (WW, iW) => {
              WW.checkReadyOnlyOnce = iW
            }
          },
          metadata: NW
        }, mi, Ei), (0, mW.e)(null, null, KW, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: WW => "state" in WW,
            get: WW => WW.state,
            set: (WW, iW) => {
              WW.state = iW
            }
          },
          metadata: NW
        }, Ni, Pi), (0, mW.e)(null, null, SW, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "_alpha" in WW,
            get: WW => WW._alpha,
            set: (WW, iW) => {
              WW._alpha = iW
            }
          },
          metadata: NW
        }, Li, ci), (0, mW.e)(null, null, YW, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: WW => "_backFaceCulling" in WW,
            get: WW => WW._backFaceCulling,
            set: (WW, iW) => {
              WW._backFaceCulling = iW
            }
          },
          metadata: NW
        }, wi, ti), (0, mW.e)(null, null, yW, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_textureRepetitionMode" in WW,
            get: WW => WW._textureRepetitionMode,
            set: (WW, iW) => {
              WW._textureRepetitionMode = iW
            }
          },
          metadata: NW
        }, Zi, xi), (0, mW.e)(null, null, TW, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: WW => "textureRepetitionHexTilingParams" in WW,
            get: WW => WW.textureRepetitionHexTilingParams,
            set: (WW, iW) => {
              WW.textureRepetitionHexTilingParams = iW
            }
          },
          metadata: NW
        }, li, Ai), (0, mW.e)(null, null, JW, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: WW => "_cullBackFaces" in WW,
            get: WW => WW._cullBackFaces,
            set: (WW, iW) => {
              WW._cullBackFaces = iW
            }
          },
          metadata: NW
        }, bi, ji), (0, mW.e)(null, null, hW, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: WW => "sideOrientation" in WW,
            get: WW => WW.sideOrientation,
            set: (WW, iW) => {
              WW.sideOrientation = iW
            }
          },
          metadata: NW
        }, Ui, ki), (0, mW.e)(null, null, HW, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_alphaMode" in WW,
            get: WW => WW._alphaMode,
            set: (WW, iW) => {
              WW._alphaMode = iW
            }
          },
          metadata: NW
        }, si, Mi), (0, mW.e)(null, null, nW, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: WW => "_needDepthPrePass" in WW,
            get: WW => WW._needDepthPrePass,
            set: (WW, iW) => {
              WW._needDepthPrePass = iW
            }
          },
          metadata: NW
        }, Ki, Si), (0, mW.e)(null, null, uW, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableDepthWrite" in WW,
            get: WW => WW.disableDepthWrite,
            set: (WW, iW) => {
              WW.disableDepthWrite = iW
            }
          },
          metadata: NW
        }, Yi, yi), (0, mW.e)(null, null, oW, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableColorWrite" in WW,
            get: WW => WW.disableColorWrite,
            set: (WW, iW) => {
              WW.disableColorWrite = iW
            }
          },
          metadata: NW
        }, Ti, Ji), (0, mW.e)(null, null, dW, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceDepthWrite" in WW,
            get: WW => WW.forceDepthWrite,
            set: (WW, iW) => {
              WW.forceDepthWrite = iW
            }
          },
          metadata: NW
        }, Hi, ni), (0, mW.e)(null, null, eW, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: WW => "depthFunction" in WW,
            get: WW => WW.depthFunction,
            set: (WW, iW) => {
              WW.depthFunction = iW
            }
          },
          metadata: NW
        }, ui, oi), (0, mW.e)(null, null, vW, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: WW => "separateCullingPass" in WW,
            get: WW => WW.separateCullingPass,
            set: (WW, iW) => {
              WW.separateCullingPass = iW
            }
          },
          metadata: NW
        }, di, ei), (0, mW.e)(null, null, gW, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "_fogEnabled" in WW,
            get: WW => WW._fogEnabled,
            set: (WW, iW) => {
              WW._fogEnabled = iW
            }
          },
          metadata: NW
        }, vi, gi), (0, mW.e)(null, null, DW, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: WW => "pointSize" in WW,
            get: WW => WW.pointSize,
            set: (WW, iW) => {
              WW.pointSize = iW
            }
          },
          metadata: NW
        }, Di, Vi), (0, mW.e)(null, null, VW, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: WW => "zOffset" in WW,
            get: WW => WW.zOffset,
            set: (WW, iW) => {
              WW.zOffset = iW
            }
          },
          metadata: NW
        }, fi, Ci), (0, mW.e)(null, null, pW, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: WW => "zOffsetUnits" in WW,
            get: WW => WW.zOffsetUnits,
            set: (WW, iW) => {
              WW.zOffsetUnits = iW
            }
          },
          metadata: NW
        }, Xi, Bi), (0, mW.e)(null, null, BW, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: WW => "_isVertexOutputInvariant" in WW,
            get: WW => WW._isVertexOutputInvariant,
            set: (WW, iW) => {
              WW._isVertexOutputInvariant = iW
            }
          },
          metadata: NW
        }, qi, Ri), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW.TriangleFillMode = 0, WW.WireFrameFillMode = 1, WW.PointFillMode = 2, WW.PointListDrawMode = 3, WW.LineListDrawMode = 4, WW.LineLoopDrawMode = 5, WW.LineStripDrawMode = 6, WW.TriangleStripDrawMode = 7, WW.TriangleFanDrawMode = 8, WW.ClockWiseSideOrientation = 0, WW.CounterClockWiseSideOrientation = 1, WW.ImageProcessingDirtyFlag = 64, WW.TextureDirtyFlag = 1, WW.LightDirtyFlag = 2, WW.FresnelDirtyFlag = 4, WW.AttributesDirtyFlag = 8, WW.MiscDirtyFlag = 16, WW.PrePassDirtyFlag = 32, WW.AllDirtyFlag = 127, WW.MATERIAL_OPAQUE = 0, WW.MATERIAL_ALPHATEST = 1, WW.MATERIAL_ALPHABLEND = 2, WW.MATERIAL_ALPHATESTANDBLEND = 3, WW.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, WW.MATERIAL_NORMALBLENDMETHOD_RNM = 1, WW.LIGHTFALLOFF_PHYSICAL = 0, WW.LIGHTFALLOFF_GLTF = 1, WW.LIGHTFALLOFF_STANDARD = 2, WW.OnEventObservable = new PW.e, WW.ForceVertexOutputInvariant = !1, WW._AllDirtyCallBack = WW => WW.markAllAsDirty(), WW._ImageProcessingDirtyCallBack = WW => WW.markAsImageProcessingDirty(), WW._TextureDirtyCallBack = WW => WW.markAsTexturesDirty(), WW._FresnelDirtyCallBack = WW => WW.markAsFresnelDirty(), WW._MiscDirtyCallBack = WW => WW.markAsMiscDirty(), WW._PrePassDirtyCallBack = WW => WW.markAsPrePassDirty(), WW._LightsDirtyCallBack = WW => WW.markAsLightDirty(), WW._AttributeDirtyCallBack = WW => WW.markAsAttributesDirty(), WW._FresnelAndMiscDirtyCallBack = iW => {
        WW._FresnelDirtyCallBack(iW), WW._MiscDirtyCallBack(iW)
      }, WW._TextureAndMiscDirtyCallBack = iW => {
        WW._TextureDirtyCallBack(iW), WW._MiscDirtyCallBack(iW)
      }, WW._DirtyCallbackArray = [], WW._RunDirtyCallBacks = iW => {
        for (const OW of WW._DirtyCallbackArray) OW(iW)
      }, WW
    })();
    Object.getOwnPropertyDescriptor(kW.prototype, "pluginManager") || Object.defineProperty(kW.prototype, "pluginManager", (0, UW.h)("Material", "pluginManager"))
  },
  41857: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(41423);
    class EW {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(WW) {
        this._DiffuseTextureEnabled !== WW && (this._DiffuseTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(WW) {
        this._BaseWeightTextureEnabled !== WW && (this._BaseWeightTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(WW) {
        this._BaseDiffuseRoughnessTextureEnabled !== WW && (this._BaseDiffuseRoughnessTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(WW) {
        this._DetailTextureEnabled !== WW && (this._DetailTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(WW) {
        this._DecalMapEnabled !== WW && (this._DecalMapEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(WW) {
        this._AmbientTextureEnabled !== WW && (this._AmbientTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(WW) {
        this._OpacityTextureEnabled !== WW && (this._OpacityTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(WW) {
        this._ReflectionTextureEnabled !== WW && (this._ReflectionTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(WW) {
        this._EmissiveTextureEnabled !== WW && (this._EmissiveTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(WW) {
        this._SpecularTextureEnabled !== WW && (this._SpecularTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(WW) {
        this._BumpTextureEnabled !== WW && (this._BumpTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(WW) {
        this._LightmapTextureEnabled !== WW && (this._LightmapTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(WW) {
        this._RefractionTextureEnabled !== WW && (this._RefractionTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(WW) {
        this._ColorGradingTextureEnabled !== WW && (this._ColorGradingTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(WW) {
        this._FresnelEnabled !== WW && (this._FresnelEnabled = WW, mW.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(WW) {
        this._ClearCoatTextureEnabled !== WW && (this._ClearCoatTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(WW) {
        this._ClearCoatBumpTextureEnabled !== WW && (this._ClearCoatBumpTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(WW) {
        this._ClearCoatTintTextureEnabled !== WW && (this._ClearCoatTintTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(WW) {
        this._SheenTextureEnabled !== WW && (this._SheenTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(WW) {
        this._AnisotropicTextureEnabled !== WW && (this._AnisotropicTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(WW) {
        this._ThicknessTextureEnabled !== WW && (this._ThicknessTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(WW) {
        this._RefractionIntensityTextureEnabled !== WW && (this._RefractionIntensityTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(WW) {
        this._TranslucencyIntensityTextureEnabled !== WW && (this._TranslucencyIntensityTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(WW) {
        this._TranslucencyColorTextureEnabled !== WW && (this._TranslucencyColorTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(WW) {
        this._IridescenceTextureEnabled !== WW && (this._IridescenceTextureEnabled = WW, mW.b.MarkAllMaterialsAsDirty(1))
      }
    }
    EW._DiffuseTextureEnabled = !0, EW._BaseWeightTextureEnabled = !0, EW._BaseDiffuseRoughnessTextureEnabled = !0, EW._DetailTextureEnabled = !0, EW._DecalMapEnabled = !0, EW._AmbientTextureEnabled = !0, EW._OpacityTextureEnabled = !0, EW._ReflectionTextureEnabled = !0, EW._EmissiveTextureEnabled = !0, EW._SpecularTextureEnabled = !0, EW._BumpTextureEnabled = !0, EW._LightmapTextureEnabled = !0, EW._RefractionTextureEnabled = !0, EW._ColorGradingTextureEnabled = !0, EW._FresnelEnabled = !0, EW._ClearCoatTextureEnabled = !0, EW._ClearCoatBumpTextureEnabled = !0, EW._ClearCoatTintTextureEnabled = !0, EW._SheenTextureEnabled = !0, EW._AnisotropicTextureEnabled = !0, EW._ThicknessTextureEnabled = !0, EW._RefractionIntensityTextureEnabled = !0, EW._TranslucencyIntensityTextureEnabled = !0, EW._TranslucencyColorTextureEnabled = !0, EW._IridescenceTextureEnabled = !0
  },
  41845: (WW, iW, OW) => {
    OW.d(iW, {
      $: () => XW,
      B: () => hW,
      F: () => HW,
      I: () => lW,
      K: () => xW,
      M: () => CW,
      O: () => gW,
      R: () => eW,
      U: () => dW,
      W: () => sW,
      Z: () => uW,
      c: () => oW,
      db: () => BW,
      f: () => SW,
      g: () => ZW,
      h: () => UW,
      hb: () => qW,
      i: () => kW,
      ib: () => aW,
      jb: () => GW,
      l: () => JW,
      mb: () => IW,
      p: () => cW,
      qb: () => AW,
      r: () => bW,
      s: () => jW,
      v: () => MW,
      w: () => nW,
      z: () => KW
    });
    var mW = OW(39911),
      EW = OW(38270),
      NW = OW(41710),
      PW = OW(41853),
      LW = OW(41857);

    function cW(WW, iW, OW) {
      if (!WW || WW.LOGARITHMICDEPTH || WW.indexOf && WW.indexOf("LOGARITHMICDEPTH") >= 0) {
        const WW = OW.activeCamera;
        1 === WW.mode && mW.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), iW.setFloat("logarithmicDepthConstant", 2 / (Math.log(WW.maxZ + 1) / Math.LN2))
      }
    }
    const wW = {
        r: 0,
        g: 0,
        b: 0
      },
      tW = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function ZW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      OW && WW.fogEnabled && (!iW || iW.applyFog) && 0 !== WW.fogMode && (OW.setFloat4("vFogInfos", WW.fogMode, WW.fogStart, WW.fogEnd, WW.fogDensity), mW ? (WW.fogColor.toLinearSpaceToRef(wW, WW.VA().useExactSrgbConversions), OW.setColor3("vFogColor", wW)) : OW.setColor3("vFogColor", WW.fogColor))
    }

    function xW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
      const ZW = WW.numMaxInfluencers || WW.numInfluencers;
      return ZW <= 0 ? 0 : (iW.push("#define MORPHTARGETS"), WW.hasPositions && iW.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), WW.hasNormals && iW.push("#define MORPHTARGETTEXTURE_HASNORMALS"), WW.hasTangents && iW.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), WW.hasUVs && iW.push("#define MORPHTARGETTEXTURE_HASUVS"), WW.hasUV2s && iW.push("#define MORPHTARGETTEXTURE_HASUV2S"), WW.hasColors && iW.push("#define MORPHTARGETTEXTURE_HASCOLORS"), WW.supportsPositions && EW && iW.push("#define MORPHTARGETS_POSITION"), WW.supportsNormals && NW && iW.push("#define MORPHTARGETS_NORMAL"), WW.supportsTangents && PW && iW.push("#define MORPHTARGETS_TANGENT"), WW.supportsUVs && LW && iW.push("#define MORPHTARGETS_UV"), WW.supportsUV2s && cW && iW.push("#define MORPHTARGETS_UV2"), WW.supportsColors && wW && iW.push("#define MORPHTARGETS_COLOR"), iW.push("#define NUM_MORPH_INFLUENCERS " + ZW), WW.isUsingTextureForTargets && iW.push("#define MORPHTARGETS_TEXTURE"), tW.NUM_MORPH_INFLUENCERS = ZW, tW.NORMAL = NW, tW.TANGENT = PW, tW.UV = LW, tW.UV2 = cW, tW.COLOR = wW, lW(OW, mW, tW, EW), ZW)
    }

    function lW(WW, iW, OW) {
      let NW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const PW = OW.NUM_MORPH_INFLUENCERS;
      if (PW > 0 && EW.d.LastCreatedEngine) {
        const LW = EW.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          cW = iW.morphTargetManager;
        if (cW?.isUsingTextureForTargets) return;
        const wW = cW && cW.supportsPositions && NW,
          tW = cW && cW.supportsNormals && OW.NORMAL,
          ZW = cW && cW.supportsTangents && OW.TANGENT,
          xW = cW && cW.supportsUVs && OW.UV1,
          lW = cW && cW.supportsUV2s && OW.UV2,
          AW = cW && cW.supportsColors && OW.VERTEXCOLOR;
        for (let OW = 0; OW < PW; OW++) wW && WW.push("position" + OW), tW && WW.push("normal" + OW), ZW && WW.push("tangent" + OW), xW && WW.push("uv_" + OW), lW && WW.push("uv2_" + OW), AW && WW.push("color" + OW), WW.length > LW && mW.b.Error("Cannot add more vertex attributes for mesh " + iW.name)
      }
    }

    function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      WW.push("world0"), WW.push("world1"), WW.push("world2"), WW.push("world3"), iW && (WW.push("previousWorld0"), WW.push("previousWorld1"), WW.push("previousWorld2"), WW.push("previousWorld3"))
    }

    function bW(WW, iW) {
      const OW = WW.morphTargetManager;
      WW && OW && iW.setFloatArray("morphTargetInfluences", OW.influences)
    }

    function jW(WW, iW) {
      iW.bindToEffect(WW, "Scene")
    }

    function UW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        tW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ZW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        xW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (WW.texturesEnabled && EW && LW.e.ReflectionTextureEnabled) {
        if (OW.tWW("reflectionMatrix", EW.getReflectionTextureMatrix()), OW.updateFloat2("vReflectionInfos", EW.level * WW.iblIntensity, xW), cW && EW.boundingBoxSize) {
          const WW = EW;
          OW.updateVector3("vReflectionPosition", WW.boundingBoxPosition), OW.updateVector3("vReflectionSize", WW.boundingBoxSize)
        }
        if (NW) {
          const WW = EW.getSize().width;
          OW.updateFloat2("vReflectionFilteringInfo", WW, Math.log2(WW))
        }
        if (tW && !iW.USEIRRADIANCEMAP) {
          const WW = EW.sphericalPolynomial;
          if (iW.USESPHERICALFROMREFLECTIONMAP && WW)
            if (iW.SPHERICAL_HARMONICS) {
              const iW = WW.preScaledHarmonics;
              OW.updateVector3("vSphericalL00", iW.l00), OW.updateVector3("vSphericalL1_1", iW.l1_1), OW.updateVector3("vSphericalL10", iW.l10), OW.updateVector3("vSphericalL11", iW.l11), OW.updateVector3("vSphericalL2_2", iW.l2_2), OW.updateVector3("vSphericalL2_1", iW.l2_1), OW.updateVector3("vSphericalL20", iW.l20), OW.updateVector3("vSphericalL21", iW.l21), OW.updateVector3("vSphericalL22", iW.l22)
            } else OW.updateFloat3("vSphericalX", WW.x.x, WW.x.y, WW.x.z), OW.updateFloat3("vSphericalY", WW.y.x, WW.y.y, WW.y.z), OW.updateFloat3("vSphericalZ", WW.z.x, WW.z.y, WW.z.z), OW.updateFloat3("vSphericalXX_ZZ", WW.xx.x - WW.zz.x, WW.xx.y - WW.zz.y, WW.xx.z - WW.zz.z), OW.updateFloat3("vSphericalYY_ZZ", WW.yy.x - WW.zz.x, WW.yy.y - WW.zz.y, WW.yy.z - WW.zz.z), OW.updateFloat3("vSphericalZZ", WW.zz.x, WW.zz.y, WW.zz.z), OW.updateFloat3("vSphericalXY", WW.xy.x, WW.xy.y, WW.xy.z), OW.updateFloat3("vSphericalYZ", WW.yz.x, WW.yz.y, WW.yz.z), OW.updateFloat3("vSphericalZX", WW.zx.x, WW.zx.y, WW.zx.z)
        } else wW && iW.USEIRRADIANCEMAP && iW.USE_IRRADIANCE_DOMINANT_DIRECTION && EW.irradianceTexture && OW.updateVector3("vReflectionDominantDirection", EW.irradianceTexture._dominantDirection);
        PW && OW.updateFloat3("vReflectionMicrosurfaceInfos", EW.getSize().width, EW.lodGenerationScale, EW.lodGenerationOffset)
      }
      ZW && OW.updateColor3("vReflectionColor", mW)
    }

    function kW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (mW && LW.e.ReflectionTextureEnabled) {
        iW.LODBASEDMICROSFURACE ? OW.setTexture("reflectionSampler", mW) : (OW.setTexture("reflectionSampler", mW._lodTextureMid || mW), OW.setTexture("reflectionSamplerLow", mW._lodTextureLow || mW), OW.setTexture("reflectionSamplerHigh", mW._lodTextureHigh || mW)), iW.USEIRRADIANCEMAP && OW.setTexture("irradianceSampler", mW.irradianceTexture);
        const NW = WW.iblCdfGenerator;
        EW && NW && OW.setTexture("icdfSampler", NW.getIcdfTexture())
      }
    }

    function sW(WW, iW, OW) {
      iW._needUVs = !0, iW[OW] = !0, WW.optimizeUVAllocation && WW.getTextureMatrix().isIdentityAs3x2() ? (iW[OW + "DIRECTUV"] = WW.coordinatesIndex + 1, iW["MAINUV" + (WW.coordinatesIndex + 1)] = !0) : iW[OW + "DIRECTUV"] = 0
    }

    function MW(WW, iW, OW) {
      const mW = WW.getTextureMatrix();
      iW.tWW(OW + "Matrix", mW)
    }

    function KW(WW, iW, OW) {
      OW.BAKED_VERTEX_ANIMATION_TEXTURE && OW.INSTANCES && WW.push("bakedVertexAnimationSettingsInstanced")
    }

    function SW(WW, iW, OW) {
      var mW;
      if (iW && WW && (WW.computeBonesUsingShaders && iW._bonesComputationForcedToCPU && (WW.computeBonesUsingShaders = !1), WW.useBones && WW.computeBonesUsingShaders && WW.skeleton)) {
        const EW = WW.skeleton;
        if (EW.isUsingTextureForMatrices && iW.getUniformIndex("boneTextureInfo") > -1) {
          const OW = EW.getTransformMatrixTexture(WW);
          iW.setTexture("boneSampler", OW), iW.setFloat2("boneTextureInfo", EW._textureWidth, EW._textureHeight)
        } else {
          const NW = EW.getTransformMatrices(WW);
          NW && (iW.setMatrices("mBones", NW), OW && WW.bD().prePassRenderer && WW.bD().prePassRenderer.getIndex(2) && (OW.previousBones[WW.uniqueId] || (OW.previousBones[WW.uniqueId] = NW.slice()), iW.setMatrices("mPreviousBones", OW.previousBones[WW.uniqueId]), mW = NW, OW.previousBones[WW.uniqueId].set(mW)))
        }
      }
    }

    function YW(WW, iW, OW, mW, EW) {
      let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      WW._bindLight(iW, OW, mW, EW, NW)
    }
    const yW = 4,
      TW = new WeakMap;

    function JW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const NW = Math.min(iW.lightSources.length, EW);
      for (let PW = 0; PW < NW; PW++) {
        YW(iW.lightSources[PW], PW, WW, OW, "boolean" === typeof mW ? mW : mW.SPECULARTERM, iW.receiveShadows)
      }
    }

    function hW(WW, iW, OW, mW) {
      OW.NUM_BONE_INFLUENCERS > 0 && (mW.addCPUSkinningFallback(0, iW), WW.push("matricesIndices"), WW.push("matricesWeights"), OW.NUM_BONE_INFLUENCERS > 4 && (WW.push("matricesIndicesExtra"), WW.push("matricesWeightsExtra")))
    }

    function HW(WW, iW) {
      (iW.INSTANCES || iW.THIN_INSTANCES) && AW(WW, !!iW.PREPASS_VELOCITY), iW.INSTANCESCOLOR && WW.push("instanceColor")
    }

    function nW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        EW = 0;
      for (let NW = 0; NW < OW && WW["LIGHT" + NW]; NW++) NW > 0 && (EW = mW + NW, iW.addFallback(EW, "LIGHT" + NW)), WW.SHADOWS || (WW["SHADOW" + NW] && iW.addFallback(mW, "SHADOW" + NW), WW["SHADOWPCF" + NW] && iW.addFallback(mW, "SHADOWPCF" + NW), WW["SHADOWPCSS" + NW] && iW.addFallback(mW, "SHADOWPCSS" + NW), WW["SHADOWPOISSON" + NW] && iW.addFallback(mW, "SHADOWPOISSON" + NW), WW["SHADOWESM" + NW] && iW.addFallback(mW, "SHADOWESM" + NW), WW["SHADOWCLOSEESM" + NW] && iW.addFallback(mW, "SHADOWCLOSEESM" + NW));
      return EW
    }

    function uW(WW, iW, OW, mW, EW, NW, PW) {
      let LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wW = arguments.length > 9 ? arguments[9] : void 0,
        tW = arguments.length > 10 ? arguments[10] : void 0;
      if (PW._areMiscDirty) {
        PW.LOGARITHMICDEPTH = OW, PW.POINTSIZE = mW, PW.FOG = EW && function(WW, iW) {
          return iW.fogEnabled && WW.applyFog && 0 !== iW.fogMode
        }(WW, iW), PW.NONUNIFORMSCALING = WW.nonUniformScaling, PW.ALPHATEST = NW, PW.DECAL_AFTER_DETAIL = LW, PW.USE_VERTEX_PULLING = cW, PW.RIGHT_HANDED = iW.useRightHandedSystem;
        const ZW = cW ? wW?.geometry?.getIndexBuffer() : null,
          xW = !!wW && wW.isUnIndexed;
        PW.VERTEX_PULLING_USE_INDEX_BUFFER = !!ZW && !xW, PW.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!ZW || xW) && ZW.is32Bits, PW.VERTEXOUTPUT_INVARIANT = !!tW
      }
    }

    function oW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!WW.lightsEnabled || mW) return !0;
      const EW = iW.lightSources,
        NW = Math.min(EW.length, OW);
      for (let PW = 0; PW < NW; PW++)
        if (!EW[PW].areLightTexturesReady()) return !1;
      return !0
    }

    function dW(WW, iW, OW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!OW._areLightsDirty) return OW._needNormals;
      const LW = NW;
      NW = function(WW, iW) {
        const OW = WW.VA().getCaps().maxUniformBuffersPerShaderStage;
        if (null == OW) return iW;
        const mW = Math.max(OW - yW, 1);
        return Math.min(iW, mW)
      }(WW, NW);
      let cW = 0;
      const wW = {
        needNormals: OW._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (WW.lightsEnabled && !PW) {
        iW.lightSources.length > NW && NW < LW && function(WW, iW, OW, EW) {
          let NW = TW.get(WW);
          NW || (NW = new Set, TW.set(WW, NW)), NW.has(EW) || (NW.add(EW), mW.b.Warn(`maxSimultaneousLights is ${iW} but this engine supports at most ${OW} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${EW} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${EW+yW} uniform buffers, over the device limit of ${WW.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${OW}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${OW} or less to silence this warning.`))
        }(WW.VA(), LW, NW, Math.min(iW.lightSources.length, LW));
        for (const mW of iW.lightSources)
          if (vW(WW, iW, mW, cW, OW, EW, wW), cW++, cW === NW) break
      }
      OW.SPECULARTERM = wW.specularEnabled, OW.SHADOWS = wW.shadowEnabled;
      const tW = Math.max(NW, OW.MAXLIGHTCOUNT || 0);
      for (let mW = cW; mW < tW; mW++) void 0 !== OW["LIGHT" + mW] && (OW["LIGHT" + mW] = !1, OW["HEMILIGHT" + mW] = !1, OW["POINTLIGHT" + mW] = !1, OW["DIRLIGHT" + mW] = !1, OW["SPOTLIGHT" + mW] = !1, OW["AREALIGHT" + mW] = !1, OW["CLUSTLIGHT" + mW] = !1, OW["SHADOW" + mW] = !1, OW["SHADOWCSM" + mW] = !1, OW["SHADOWCSMDEBUG" + mW] = !1, OW["SHADOWCSMNUM_CASCADES" + mW] = !1, OW["SHADOWCSMUSESHADOWMAXZ" + mW] = !1, OW["SHADOWCSMNOBLEND" + mW] = !1, OW["SHADOWCSM_RIGHTHANDED" + mW] = !1, OW["SHADOWPCF" + mW] = !1, OW["SHADOWPCSS" + mW] = !1, OW["SHADOWPOISSON" + mW] = !1, OW["SHADOWESM" + mW] = !1, OW["SHADOWCLOSEESM" + mW] = !1, OW["SHADOWCUBE" + mW] = !1, OW["SHADOWLOWQUALITY" + mW] = !1, OW["SHADOWMEDIUMQUALITY" + mW] = !1);
      OW.LIGHTCOUNT = cW, OW.MAXLIGHTCOUNT = NW;
      const ZW = WW.VA().getCaps();
      return void 0 === OW.SHADOWFLOAT && (wW.needRebuild = !0), OW.SHADOWFLOAT = wW.shadowEnabled && (ZW.textureFloatRender && ZW.textureFloatLinearFiltering || ZW.textureHalfFloatRender && ZW.textureHalfFloatLinearFiltering), OW.LIGHTMAPEXCLUDED = wW.lightmapMode, wW.needRebuild && OW.rebuild(), wW.needNormals
    }

    function eW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (iW && LW.e.ReflectionTextureEnabled) {
        if (!iW.isReadyOrNotBlocking()) return !1;
        OW._needNormals = !0, OW.REFLECTION = !0, OW.GAMMAREFLECTION = iW.gammaSpace, OW.RGBDREFLECTION = iW.isRGBD, OW.LODINREFLECTIONALPHA = iW.lodLevelInAlpha, OW.LINEARSPECULARREFLECTION = iW.linearSpecularLOD, OW.USEIRRADIANCEMAP = !1, OW.LODBASEDMICROSFURACE = WW.VA().getCaps().textureLOD;
        const PW = WW.VA();
        switch (mW && EW > 0 ? (OW.NUM_SAMPLES = "" + EW, PW._features.needTypeSuffixInShaderConstants && (OW.NUM_SAMPLES = OW.NUM_SAMPLES + "u"), OW.REALTIME_FILTERING = !0, WW.iblCdfGenerator && (OW.IBL_CDF_FILTERING = !0)) : OW.REALTIME_FILTERING = !1, OW.INVERTCUBICMAP = 6 === iW.coordinatesMode, OW.REFLECTIONMAP_3D = iW.isCube, OW.REFLECTIONMAP_OPPOSITEZ = OW.REFLECTIONMAP_3D && WW.useRightHandedSystem ? !iW.invertZ : iW.invertZ, OW.REFLECTIONMAP_CUBIC = !1, OW.REFLECTIONMAP_EXPLICIT = !1, OW.REFLECTIONMAP_PLANAR = !1, OW.REFLECTIONMAP_PROJECTION = !1, OW.REFLECTIONMAP_SKYBOX = !1, OW.REFLECTIONMAP_SPHERICAL = !1, OW.REFLECTIONMAP_EQUIRECTANGULAR = !1, OW.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, OW.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, iW.coordinatesMode) {
          case 0:
            OW.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            OW.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            OW.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            OW.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            OW.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            OW.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            OW.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            OW.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            OW.REFLECTIONMAP_CUBIC = !0, OW.USE_LOCAL_REFLECTIONMAP_CUBIC = !!iW.boundingBoxSize
        }
        5 !== iW.coordinatesMode && (iW.irradianceTexture ? (OW.USEIRRADIANCEMAP = !0, OW.USESPHERICALFROMREFLECTIONMAP = !1, OW.USESPHERICALINVERTEX = !1, iW.irradianceTexture._dominantDirection ? OW.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : OW.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : iW.isCube && (OW.USESPHERICALFROMREFLECTIONMAP = !0, OW.USEIRRADIANCEMAP = !1, OW.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, OW.USESPHERICALINVERTEX = NW))
      } else OW.REFLECTION = !1, OW.REFLECTIONMAP_3D = !1, OW.REFLECTIONMAP_SPHERICAL = !1, OW.REFLECTIONMAP_PLANAR = !1, OW.REFLECTIONMAP_CUBIC = !1, OW.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, OW.REFLECTIONMAP_PROJECTION = !1, OW.REFLECTIONMAP_SKYBOX = !1, OW.REFLECTIONMAP_EXPLICIT = !1, OW.REFLECTIONMAP_EQUIRECTANGULAR = !1, OW.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, OW.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, OW.INVERTCUBICMAP = !1, OW.USESPHERICALFROMREFLECTIONMAP = !1, OW.USEIRRADIANCEMAP = !1, OW.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, OW.USESPHERICALINVERTEX = !1, OW.REFLECTIONMAP_OPPOSITEZ = !1, OW.LODINREFLECTIONALPHA = !1, OW.GAMMAREFLECTION = !1, OW.RGBDREFLECTION = !1, OW.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function vW(WW, iW, OW, mW, EW, PW, LW) {
      switch (LW.needNormals = !0, void 0 === EW["LIGHT" + mW] && (LW.needRebuild = !0), EW["LIGHT" + mW] = !0, EW["SPOTLIGHT" + mW] = !1, EW["HEMILIGHT" + mW] = !1, EW["POINTLIGHT" + mW] = !1, EW["DIRLIGHT" + mW] = !1, EW["AREALIGHT" + mW] = !1, EW["CLUSTLIGHT" + mW] = !1, OW.prepareLightSpecificDefines(EW, mW), EW["LIGHT_FALLOFF_PHYSICAL" + mW] = !1, EW["LIGHT_FALLOFF_GLTF" + mW] = !1, EW["LIGHT_FALLOFF_STANDARD" + mW] = !1, OW.falloffType) {
        case NW.e.FALLOFF_GLTF:
          EW["LIGHT_FALLOFF_GLTF" + mW] = !0;
          break;
        case NW.e.FALLOFF_PHYSICAL:
          EW["LIGHT_FALLOFF_PHYSICAL" + mW] = !0;
          break;
        case NW.e.FALLOFF_STANDARD:
          EW["LIGHT_FALLOFF_STANDARD" + mW] = !0
      }
      if (PW && !OW.specular.equalsFloats(0, 0, 0) && (LW.specularEnabled = !0), EW["SHADOW" + mW] = !1, EW["SHADOWCSM" + mW] = !1, EW["SHADOWCSMDEBUG" + mW] = !1, EW["SHADOWCSMNUM_CASCADES" + mW] = !1, EW["SHADOWCSMUSESHADOWMAXZ" + mW] = !1, EW["SHADOWCSMNOBLEND" + mW] = !1, EW["SHADOWCSM_RIGHTHANDED" + mW] = !1, EW["SHADOWPCF" + mW] = !1, EW["SHADOWPCSS" + mW] = !1, EW["SHADOWPOISSON" + mW] = !1, EW["SHADOWESM" + mW] = !1, EW["SHADOWCLOSEESM" + mW] = !1, EW["SHADOWCUBE" + mW] = !1, EW["SHADOWLOWQUALITY" + mW] = !1, EW["SHADOWMEDIUMQUALITY" + mW] = !1, iW && iW.receiveShadows && WW.shadowsEnabled && OW.shadowEnabled) {
        const iW = OW.getShadowGenerator(WW.activeCamera) ?? OW.getShadowGenerator();
        if (iW) {
          const WW = iW.getShadowMap();
          WW && WW.renderList && WW.renderList.length > 0 && (LW.shadowEnabled = !0, iW.prepareDefines(EW, mW))
        }
      }
      OW.lightmapMode != NW.e.LIGHTMAP_DEFAULT ? (LW.lightmapMode = !0, EW["LIGHTMAPEXCLUDED" + mW] = !0, EW["LIGHTMAPNOSPECULAR" + mW] = OW.lightmapMode == NW.e.LIGHTMAP_SHADOWSONLY) : (EW["LIGHTMAPEXCLUDED" + mW] = !1, EW["LIGHTMAPNOSPECULAR" + mW] = !1)
    }

    function gW(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cW = function(WW, iW) {
          let OW = !1;
          if (WW.activeCamera) {
            const mW = iW.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              EW = iW.CAMERA_PERSPECTIVE ? 1 : 0,
              NW = 1 === WW.activeCamera.mode ? 1 : 0,
              PW = 0 === WW.activeCamera.mode ? 1 : 0;
            (mW ^ NW || EW ^ PW) && (iW.CAMERA_ORTHOGRAPHIC = 1 === NW, iW.CAMERA_PERSPECTIVE = 1 === PW, OW = !0)
          }
          return OW
        }(WW, mW);
      !1 !== NW && (cW = (0, PW.j)(OW, WW, mW)), mW.DEPTHPREPASS !== !iW.getColorWrite() && (mW.DEPTHPREPASS = !mW.DEPTHPREPASS, cW = !0), mW.INSTANCES !== EW && (mW.INSTANCES = EW, cW = !0), mW.THIN_INSTANCES !== LW && (mW.THIN_INSTANCES = LW, cW = !0), cW && mW.markAsUnprocessed()
    }
    const DW = 40,
      VW = 64,
      pW = new WeakMap,
      fW = new WeakSet;

    function CW(WW, iW, OW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        LW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!iW._areAttributesDirty && iW._needNormals === iW._normals && iW._needUVs === iW._uvs) return !1;
      iW._normals = iW._needNormals, iW._uvs = iW._needUVs, iW.NORMAL = iW._needNormals && WW.isVerticesDataPresent("normal"), iW._needNormals && WW.isVerticesDataPresent("tangent") && (iW.TANGENT = !0);
      for (let mW = 1; mW <= 6; ++mW) iW["UV" + mW] = !!iW._needUVs && WW.isVerticesDataPresent(`uv${1===mW?"":mW}`);
      if (OW) {
        const OW = WW.useVertexColors && WW.isVerticesDataPresent("color");
        iW.VERTEXCOLOR = OW, iW.VERTEXALPHA = WW.hasVertexAlpha && OW && PW
      }
      return WW.isVerticesDataPresent("instanceColor") && (WW.QEW || WW.hasThinInstances) && (iW.INSTANCESCOLOR = !0), EW && function(WW, iW) {
        if (WW.useBones && WW.computeBonesUsingShaders && WW.skeleton) {
          iW.NUM_BONE_INFLUENCERS = WW.numBoneInfluencers;
          const OW = void 0 !== iW.BONETEXTURE;
          if (WW.skeleton.isUsingTextureForMatrices && OW) iW.BONETEXTURE = !0;
          else {
            iW.BonesPerMesh = WW.skeleton.bones.length + 1, iW.BONETEXTURE = !OW && void 0;
            const EW = WW.bD(),
              NW = EW.prePassRenderer;
            if (NW && NW.enabled) {
              const OW = -1 === NW.excludedSkinnedMesh.indexOf(WW);
              iW.BONES_VELOCITY_ENABLED = OW
            }
            const PW = !0 === iW.MULTIVIEW,
              LW = 2 * iW.BonesPerMesh + (PW ? 1 : 0);
            if (pW.get(WW.skeleton) !== LW) {
              pW.set(WW.skeleton, LW);
              const OW = EW.VA().getCaps().maxVertexUniformVectors;
              if (OW && !fW.has(WW.skeleton)) {
                const EW = 4 * iW.BonesPerMesh,
                  NW = PW ? VW : DW,
                  LW = Math.max(OW - NW, 0);
                (EW > LW || PW && 3 * EW > OW) && (fW.add(WW.skeleton), mW.b.Warn(`Skeleton "${WW.skeleton.name}": ${WW.skeleton.bones.length} bones stored as vertex uniforms use ${EW} of ~${LW} usable uniform vectors${PW?" (multiview)":""} on a device reporting ${OW}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else iW.NUM_BONE_INFLUENCERS = 0, iW.BonesPerMesh = 0, void 0 !== iW.BONETEXTURE && (iW.BONETEXTURE = !1)
      }(WW, iW), NW && function(WW, iW) {
        const OW = WW.morphTargetManager;
        OW ? (iW.MORPHTARGETS_UV = OW.supportsUVs && iW.UV1, iW.MORPHTARGETS_UV2 = OW.supportsUV2s && iW.UV2, iW.MORPHTARGETS_TANGENT = OW.supportsTangents && iW.TANGENT, iW.MORPHTARGETS_NORMAL = OW.supportsNormals && iW.NORMAL, iW.MORPHTARGETS_POSITION = OW.supportsPositions, iW.MORPHTARGETS_COLOR = OW.supportsColors, iW.MORPHTARGETTEXTURE_HASUVS = OW.hasUVs, iW.MORPHTARGETTEXTURE_HASUV2S = OW.hasUV2s, iW.MORPHTARGETTEXTURE_HASTANGENTS = OW.hasTangents, iW.MORPHTARGETTEXTURE_HASNORMALS = OW.hasNormals, iW.MORPHTARGETTEXTURE_HASPOSITIONS = OW.hasPositions, iW.MORPHTARGETTEXTURE_HASCOLORS = OW.hasColors, iW.NUM_MORPH_INFLUENCERS = OW.numMaxInfluencers || OW.numInfluencers, iW.MORPHTARGETS = iW.NUM_MORPH_INFLUENCERS > 0, iW.MORPHTARGETS_TEXTURE = OW.isUsingTextureForTargets) : (iW.MORPHTARGETS_UV = !1, iW.MORPHTARGETS_UV2 = !1, iW.MORPHTARGETS_TANGENT = !1, iW.MORPHTARGETS_NORMAL = !1, iW.MORPHTARGETS_POSITION = !1, iW.MORPHTARGETS_COLOR = !1, iW.MORPHTARGETTEXTURE_HASUVS = !1, iW.MORPHTARGETTEXTURE_HASUV2S = !1, iW.MORPHTARGETTEXTURE_HASTANGENTS = !1, iW.MORPHTARGETTEXTURE_HASNORMALS = !1, iW.MORPHTARGETTEXTURE_HASPOSITIONS = !1, iW.MORPHTARGETTEXTURE_HAS_COLORS = !1, iW.MORPHTARGETS = !1, iW.NUM_MORPH_INFLUENCERS = 0)
      }(WW, iW), LW && function(WW, iW) {
        const OW = WW.bakedVertexAnimationManager;
        iW.BAKED_VERTEX_ANIMATION_TEXTURE = !(!OW || !OW.isEnabled)
      }(WW, iW), !0
    }

    function XW(WW, iW) {
      if (WW.activeCamera) {
        const OW = iW.MULTIVIEW;
        iW.MULTIVIEW = null !== WW.activeCamera.outputRenderTarget && WW.activeCamera.outputRenderTarget.getViewCount() > 1, iW.MULTIVIEW != OW && iW.markAsUnprocessed()
      }
    }

    function BW(WW, iW, OW) {
      const mW = iW.ORDER_INDEPENDENT_TRANSPARENCY,
        EW = iW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      iW.ORDER_INDEPENDENT_TRANSPARENCY = WW.useOrderIndependentTransparency && OW, iW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !WW.VA().getCaps().textureFloatLinearFiltering, mW === iW.ORDER_INDEPENDENT_TRANSPARENCY && EW === iW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || iW.markAsUnprocessed()
    }

    function qW(WW, iW, OW) {
      const mW = iW.PREPASS;
      if (!iW._arePrePassDirty) return;
      const EW = [{
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
      if (WW.prePassRenderer && WW.prePassRenderer.enabled && OW) {
        iW.PREPASS = !0, iW.SCENE_MRT_COUNT = WW.prePassRenderer.mrtCount, iW.PREPASS_NORMAL_WORLDSPACE = WW.prePassRenderer.generateNormalsInWorldSpace, iW.PREPASS_COLOR = !0, iW.PREPASS_COLOR_INDEX = 0;
        for (let OW = 0; OW < EW.length; OW++) {
          const mW = WW.prePassRenderer.getIndex(EW[OW].type); - 1 !== mW ? (iW[EW[OW].define] = !0, iW[EW[OW].index] = mW) : iW[EW[OW].define] = !1
        }
      } else {
        iW.PREPASS = !1;
        for (let WW = 0; WW < EW.length; WW++) iW[EW[WW].define] = !1
      }
      iW.PREPASS != mW && (iW.markAsUnprocessed(), iW.markAsImageProcessingDirty())
    }

    function RW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      EW && EW.push("Light" + WW), NW || (iW.push("vLightData" + WW, "vLightDiffuse" + WW, "vLightSpecular" + WW, "vLightDirection" + WW, "vLightWidth" + WW, "vLightHeight" + WW, "vLightFalloff" + WW, "vLightGround" + WW, "vSliceData" + WW, "vSliceRanges" + WW, "lightMatrix" + WW, "shadowsInfo" + WW, "depthValues" + WW), OW.push("shadowTexture" + WW), OW.push("depthTexture" + WW), iW.push("viewFrustumZ" + WW, "cascadeBlendFactor" + WW, "lightSizeUVCorrection" + WW, "depthCorrection" + WW, "penumbraDarkness" + WW, "frustumLengths" + WW), mW && (OW.push("projectionLightTexture" + WW), iW.push("textureProjectionMatrix" + WW)), PW && OW.push("iesLightTexture" + WW), cW && OW.push("rectAreaLightEmissionTexture" + WW), LW && (OW.push("lightDataTexture" + WW), wW || OW.push("tileMaskTexture" + WW)))
    }

    function GW(WW, iW, OW) {
      const mW = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      OW && mW.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), WW.push(...mW);
      iW.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function IW(WW, iW, OW) {
      let mW, EW, NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        PW = null;
      if (WW.uniformsNames) {
        const LW = WW;
        mW = LW.uniformsNames, EW = LW.uniformBuffersNames, iW = LW.samplers, OW = LW.defines, NW = LW.maxSimultaneousLights || 0, PW = LW.shaderLanguage ?? null
      } else mW = WW, iW || (iW = []);
      for (let LW = 0; LW < NW && OW["LIGHT" + LW]; LW++) RW(LW, mW, iW, OW["PROJECTEDLIGHTTEXTURE" + LW], EW, !1, OW["IESLIGHTTEXTURE" + LW], OW["CLUSTLIGHT" + LW], OW["RECTAREALIGHTEMISSIONTEXTURE" + LW], 1 === PW);
      OW.NUM_MORPH_INFLUENCERS && (mW.push("morphTargetInfluences"), mW.push("morphTargetCount")), OW.BAKED_VERTEX_ANIMATION_TEXTURE && (mW.push("bakedVertexAnimationSettings"), mW.push("bakedVertexAnimationTextureSizeInverted"), mW.push("bakedVertexAnimationTime"), iW.push("bakedVertexAnimationTexture"))
    }

    function aW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      WW.addUniform("vReflectionInfos", 2), WW.addUniform("reflectionMatrix", 16), iW && WW.addUniform("vReflectionMicrosurfaceInfos", 3), OW && (WW.addUniform("vReflectionPosition", 3), WW.addUniform("vReflectionSize", 3)), mW && (WW.addUniform("vReflectionFilteringInfo", 2), WW.addUniform("vReflectionDominantDirection", 3)), NW && WW.addUniform("vReflectionColor", 3), EW && (WW.addUniform("vSphericalL00", 3), WW.addUniform("vSphericalL1_1", 3), WW.addUniform("vSphericalL10", 3), WW.addUniform("vSphericalL11", 3), WW.addUniform("vSphericalL2_2", 3), WW.addUniform("vSphericalL2_1", 3), WW.addUniform("vSphericalL20", 3), WW.addUniform("vSphericalL21", 3), WW.addUniform("vSphericalL22", 3), WW.addUniform("vSphericalX", 3), WW.addUniform("vSphericalY", 3), WW.addUniform("vSphericalZ", 3), WW.addUniform("vSphericalXX_ZZ", 3), WW.addUniform("vSphericalYY_ZZ", 3), WW.addUniform("vSphericalZZ", 3), WW.addUniform("vSphericalXY", 3), WW.addUniform("vSphericalYZ", 3), WW.addUniform("vSphericalZX", 3))
    }
  },
  41861: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = OW(38241),
      EW = OW(41805);
    class NW extends EW.d {
      constructor(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(WW, iW, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new mW.d, this._storeEffectOnSubMeshes = OW
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(WW, iW) {
        return !!WW && (!this._storeEffectOnSubMeshes || (!WW.hY || 0 === WW.hY.length || this.isReadyForSubMesh(WW, WW.hY[0], iW)))
      }
      _isReadyForSubMesh(WW) {
        const iW = WW.materialDefines;
        return !(this.checkReadyOnEveryCall || !WW.effect || !iW || iW._renderId !== this.bD().getRenderId())
      }
      bindOnlyWorldMatrix(WW) {
        this._activeEffect.setMatrix("world", WW)
      }
      bindOnlyNormalMatrix(WW) {
        this._activeEffect.setMatrix("normalMatrix", WW)
      }
      bind(WW, iW) {
        iW && this.bindForSubMesh(WW, iW, iW.hY[0])
      }
      _afterBind(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(WW, iW, OW), this.bD()._cachedEffect = iW, OW ? OW._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return OW._drawWrapper._forceRebindOnNextCall || WW.isCachedMaterialInvalid(this, iW, mW)
      }
      dispose(WW, iW, OW) {
        this._activeEffect = void 0, super.dispose(WW, iW, OW)
      }
    }
  },
  41886: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      c: () => EW
    });
    const mW = new WeakMap;

    function EW(WW) {
      const iW = WW.getVertexBuffers();
      if (!iW) return null;
      let OW = mW.get(WW);
      if (OW) {
        let WW = !1;
        for (const mW in iW)
          if (!OW.has(mW)) {
            WW = !0;
            break
          } if (!WW) return OW
      } else OW = new Map, mW.set(WW, OW);
      for (const mW in iW) {
        const WW = iW[mW];
        if (WW) {
          const iW = WW.byteOffset,
            EW = WW.byteStride,
            NW = WW.type,
            PW = WW.normalized;
          OW.set(mW, {
            offset: iW,
            stride: EW,
            type: NW,
            normalized: PW
          })
        }
      }
      return OW
    }

    function NW(WW, iW) {
      iW.forEach(((iW, OW) => {
        const mW = `vp_${OW}_info`;
        WW.setFloat4(mW, iW.offset, iW.stride, iW.type, iW.normalized ? 1 : 0)
      }))
    }
  },
  41834: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      d: () => cW
    });
    var mW = OW(41516),
      EW = OW(38241),
      NW = OW(41519);
    let PW = (() => {
      var WW;
      let iW, OW, EW = [];
      return WW = class {
        static extractMinAndMaxIndexed(WW, iW, OW, mW, EW, NW) {
          for (let PW = OW; PW < OW + mW; PW++) {
            const OW = 3 * iW[PW],
              mW = WW[OW],
              LW = WW[OW + 1],
              cW = WW[OW + 2];
            EW.minimizeInPlaceFromFloats(mW, LW, cW), NW.maximizeInPlaceFromFloats(mW, LW, cW)
          }
        }
        static extractMinAndMax(WW, iW, OW, mW, EW, NW) {
          for (let PW = iW, LW = iW * mW; PW < iW + OW; PW++, LW += mW) {
            const iW = WW[LW],
              OW = WW[LW + 1],
              mW = WW[LW + 2];
            EW.minimizeInPlaceFromFloats(iW, OW, mW), NW.maximizeInPlaceFromFloats(iW, OW, mW)
          }
        }
      }, (() => {
        const PW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [NW.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], OW = [NW.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, mW.e)(WW, null, iW, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: WW => "extractMinAndMaxIndexed" in WW,
            get: WW => WW.extractMinAndMaxIndexed
          },
          metadata: PW
        }, null, EW), (0, mW.e)(WW, null, OW, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: WW => "extractMinAndMax" in WW,
            get: WW => WW.extractMinAndMax
          },
          metadata: PW
        }, null, EW), PW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PW
        }), (0, mW.g)(WW, EW)
      })(), WW
    })();

    function LW(WW, iW, OW, mW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const LW = new EW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        cW = new EW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return PW.extractMinAndMaxIndexed(WW, iW, OW, mW, LW, cW), NW && (LW.x -= LW.x * NW.x + NW.y, LW.y -= LW.y * NW.x + NW.y, LW.z -= LW.z * NW.x + NW.y, cW.x += cW.x * NW.x + NW.y, cW.y += cW.y * NW.x + NW.y, cW.z += cW.z * NW.x + NW.y), {
        minimum: LW,
        maximum: cW
      }
    }

    function cW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        NW = arguments.length > 4 ? arguments[4] : void 0;
      const LW = new EW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        cW = new EW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return NW || (NW = 3), PW.extractMinAndMax(WW, iW, OW, NW, LW, cW), mW && (LW.x -= LW.x * mW.x + mW.y, LW.y -= LW.y * mW.x + mW.y, LW.z -= LW.z * mW.x + mW.y, cW.x += cW.x * mW.x + mW.y, cW.y += cW.y * mW.x + mW.y, cW.z += cW.z * mW.x + mW.y), {
        minimum: LW,
        maximum: cW
      }
    }
  },
  41808: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW
    });
    var mW, EW = OW(41660),
      NW = OW(41812),
      PW = OW(41818),
      LW = OW(41834),
      cW = OW(41840),
      wW = OW(41415);
    class tW {
      get materialDefines() {
        const WW = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof WW ? null : WW
      }
      set materialDefines(WW) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = WW
      }
      _getDrawWrapper(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        WW = WW ?? this._engine.currentRenderPassId;
        let OW = this._drawWrappers[WW];
        return !OW && iW && (this._drawWrappers[WW] = OW = new cW.d(this._mesh.bD().VA())), OW
      }
      _removeDrawWrapper(WW) {
        let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[WW]?.dispose(iW), this._drawWrappers[WW] = void 0
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
      _setMainDrawWrapperOverride(WW) {
        this._mainDrawWrapperOverride = WW
      }
      setEffect(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const EW = this._drawWrapper;
        EW.setEffect(WW, iW, mW), void 0 !== OW && (EW.materialContext = OW), WW || (EW.defines = null, EW.materialContext = void 0)
      }
      resetDrawCache(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== WW) return void this._removeDrawWrapper(WW, !0, iW);
          for (const WW of this._drawWrappers) WW?.dispose(iW)
        }
        this._drawWrappers = []
      }
      static AddToMesh(WW, iW, OW, mW, EW, NW, PW) {
        return new tW(WW, iW, OW, mW, EW, NW, PW, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(WW, iW, OW, mW, EW, NW, PW) {
        let LW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = WW, this.verticesStart = iW, this.verticesCount = OW, this.indexStart = mW, this.indexCount = EW, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = NW, this._renderingMesh = PW || NW, cW && NW.hY.push(this), this._engine = this._mesh.bD().VA(), this.resetDrawCache(), this._trianglePlanes = [], this._id = NW.hY.length - 1, LW && (this.refreshBoundingInfo(), NW.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      KV() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.KV() : this._boundingInfo
      }
      setBoundingInfo(WW) {
        return this._boundingInfo = WW, this
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
        const WW = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return WW || this._renderingMesh
      }
      BA() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const iW = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!iW) return WW && this._mesh.bD()._hasDefaultMaterial ? this._mesh.bD().defaultMaterial : null;
        if (this._isMultiMaterial(iW)) {
          const WW = iW.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== WW && (this._currentMaterial = WW, this.resetDrawCache()), WW
        }
        return iW
      }
      _isMultiMaterial(WW) {
        return void 0 !== WW.getSubMaterial
      }
      refreshBoundingInfo() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (WW || (WW = this._renderingMesh.getVerticesData(EW.k.PositionKind)), !WW) return this._boundingInfo = this._mesh.KV(), this;
        const iW = this._renderingMesh.IEW();
        let OW;
        if (0 === this.indexStart && this.indexCount === iW.length) {
          const WW = this._renderingMesh.KV();
          OW = {
            minimum: WW.minimum.clone(),
            maximum: WW.maximum.clone()
          }
        } else OW = (0, LW.b)(WW, iW, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(OW.minimum, OW.maximum) : this._boundingInfo = new PW.b(OW.minimum, OW.maximum), this
      }
      _checkCollision(WW) {
        return this.KV()._checkCollision(WW)
      }
      updateBoundingInfo(WW) {
        let iW = this.KV();
        return iW || (this.refreshBoundingInfo(), iW = this.KV()), iW && iW.update(WW), this
      }
      isInFrustum(WW) {
        const iW = this.KV();
        return !!iW && iW.isInFrustum(WW, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(WW) {
        const iW = this.KV();
        return !!iW && iW.isCompletelyInFrustum(WW)
      }
      render(WW) {
        return this._renderingMesh.render(this, WW, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(WW, iW) {
        if (!this._linesIndexBuffer) {
          const OW = 6 * Math.floor(this.indexCount / 3),
            mW = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(OW) : new Uint16Array(OW);
          let EW = 0;
          if (0 === WW.length)
            for (let WW = this.indexStart; WW < this.indexStart + this.indexCount; WW += 3) mW[EW++] = WW, mW[EW++] = WW + 1, mW[EW++] = WW + 1, mW[EW++] = WW + 2, mW[EW++] = WW + 2, mW[EW++] = WW;
          else
            for (let iW = this.indexStart; iW < this.indexStart + this.indexCount; iW += 3) mW[EW++] = WW[iW], mW[EW++] = WW[iW + 1], mW[EW++] = WW[iW + 1], mW[EW++] = WW[iW + 2], mW[EW++] = WW[iW + 2], mW[EW++] = WW[iW];
          this._linesIndexBuffer = iW.createIndexBuffer(mW), this._linesIndexCount = mW.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(WW) {
        const iW = this.KV();
        return !!iW && WW.intersectsBox(iW.boundingBox)
      }
      intersects(WW, iW, OW, mW, EW) {
        const NW = this.BA();
        if (!NW) return null;
        let PW = 3,
          LW = !1;
        switch (NW.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            PW = 1, LW = !0
        }
        return 4 === NW.fillMode ? OW.length ? this._intersectLines(WW, iW, OW, this._mesh.intersectionThreshold, mW) : this._intersectUnIndexedLines(WW, iW, OW, this._mesh.intersectionThreshold, mW) : !OW.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(WW, iW, OW, mW, EW) : this._intersectTriangles(WW, iW, OW, PW, LW, mW, EW)
      }
      _intersectLines(WW, iW, OW, mW, EW) {
        let PW = null;
        for (let LW = this.indexStart; LW < this.indexStart + this.indexCount; LW += 2) {
          const cW = iW[OW[LW]],
            wW = iW[OW[LW + 1]],
            tW = WW.intersectionSegment(cW, wW, mW);
          if (!(tW < 0) && ((EW || !PW || tW < PW.distance) && (PW = new NW.e(null, null, tW), PW.faceId = LW / 2, EW))) break
        }
        return PW
      }
      _intersectUnIndexedLines(WW, iW, OW, mW, EW) {
        let PW = null;
        for (let LW = this.verticesStart; LW < this.verticesStart + this.verticesCount; LW += 2) {
          const OW = iW[LW],
            cW = iW[LW + 1],
            wW = WW.intersectionSegment(OW, cW, mW);
          if (!(wW < 0) && ((EW || !PW || wW < PW.distance) && (PW = new NW.e(null, null, wW), PW.faceId = LW / 2, EW))) break
        }
        return PW
      }
      _intersectTriangles(WW, iW, OW, mW, EW, NW, PW) {
        let LW = null,
          cW = -1;
        for (let wW = this.indexStart; wW < this.indexStart + this.indexCount - (3 - mW); wW += mW) {
          cW++;
          const mW = OW[wW],
            tW = OW[wW + 1],
            ZW = OW[wW + 2];
          if (EW && 4294967295 === ZW) {
            wW += 2;
            continue
          }
          const xW = iW[mW],
            lW = iW[tW],
            AW = iW[ZW];
          if (!xW || !lW || !AW) continue;
          if (PW && !PW(xW, lW, AW, WW, mW, tW, ZW)) continue;
          const bW = WW.intersectsTriangle(xW, lW, AW);
          if (bW) {
            if (bW.distance < 0) continue;
            if ((NW || !LW || bW.distance < LW.distance) && (LW = bW, LW.faceId = cW, NW)) break
          }
        }
        return LW
      }
      _intersectUnIndexedTriangles(WW, iW, OW, mW, EW) {
        let NW = null;
        for (let PW = this.verticesStart; PW < this.verticesStart + this.verticesCount; PW += 3) {
          const OW = iW[PW],
            LW = iW[PW + 1],
            cW = iW[PW + 2];
          if (EW && !EW(OW, LW, cW, WW, -1, -1, -1)) continue;
          const wW = WW.intersectsTriangle(OW, LW, cW);
          if (wW) {
            if (wW.distance < 0) continue;
            if ((mW || !NW || wW.distance < NW.distance) && (NW = wW, NW.faceId = PW / 3, mW)) break
          }
        }
        return NW
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(WW, iW) {
        const OW = new tW(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, WW, iW, !1);
        if (!this.IsGlobal) {
          const WW = this.KV();
          if (!WW) return OW;
          OW._boundingInfo = new PW.b(WW.minimum, WW.maximum)
        }
        return OW
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.bD().VA()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const iW = this._mesh.hY.indexOf(this);
        this._mesh.hY.splice(iW, 1), this.resetDrawCache(void 0, WW)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(WW, iW, OW, mW, EW) {
        let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = Number.MAX_VALUE,
          LW = -Number.MAX_VALUE;
        const cW = (EW || mW).IEW();
        for (let wW = iW; wW < iW + OW; wW++) {
          const WW = cW[wW];
          WW < PW && (PW = WW), WW > LW && (LW = WW)
        }
        return new tW(WW, PW, LW - PW + 1, iW, OW, mW, EW, NW)
      }
    }(mW = tW.prototype).projectToRef ?? (mW.projectToRef = (0, wW.k)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);