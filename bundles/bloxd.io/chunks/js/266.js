export const id = 266;
export const ids = [266];
export const modules = {
  40426: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT, mT) {
        this.bu = TT, this.bv = UT, this.distance = mT, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40440: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT
    });
    var WT = mT(37205),
      zT = mT(37188),
      MT = mT(37196);
    class gT {
      constructor(TT, UT, mT) {
        this.vectors = (0, WT.c)(8, zT.p.Zero), this.center = zT.p.Zero(), this.centerWorld = zT.p.Zero(), this.extendSize = zT.p.Zero(), this.extendSizeWorld = zT.p.Zero(), this.directions = (0, WT.c)(3, zT.p.Zero), this.vectorsWorld = (0, WT.c)(8, zT.p.Zero), this.minimumWorld = zT.p.Zero(), this.maximumWorld = zT.p.Zero(), this.minimum = zT.p.Zero(), this.maximum = zT.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(TT, UT, mT)
      }
      reConstruct(TT, UT, mT) {
        const WT = TT.x,
          MT = TT.y,
          gT = TT.z,
          nT = UT.x,
          HT = UT.y,
          kT = UT.z,
          jT = this.vectors;
        this.minimum.J9(WT, MT, gT), this.maximum.J9(nT, HT, kT), jT[0].J9(WT, MT, gT), jT[1].J9(nT, HT, kT), jT[2].J9(nT, MT, gT), jT[3].J9(WT, HT, gT), jT[4].J9(WT, MT, kT), jT[5].J9(nT, HT, gT), jT[6].J9(WT, HT, kT), jT[7].J9(nT, MT, kT), UT.addToRef(TT, this.center).scaleInPlace(.5), UT.subtractToRef(TT, this.extendSize).scaleInPlace(.5), this._worldMatrix = mT || zT.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(TT) {
        const UT = gT._TmpVector3,
          mT = this.maximum.subtractToRef(this.minimum, UT[0]),
          WT = mT.length();
        mT.normalizeFromLength(WT);
        const zT = WT * TT,
          MT = mT.scaleInPlace(.5 * zT),
          nT = this.center.subtractToRef(MT, UT[1]),
          HT = this.center.addToRef(MT, UT[2]);
        return this.reConstruct(nT, HT, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(TT) {
        const UT = this.minimumWorld,
          mT = this.maximumWorld,
          WT = this.directions,
          MT = this.vectorsWorld,
          gT = this.vectors;
        if (TT.isIdentity()) {
          UT.Gw(this.minimum), mT.Gw(this.maximum);
          for (let TT = 0; TT < 8; ++TT) MT[TT].Gw(gT[TT]);
          this.extendSizeWorld.Gw(this.extendSize), this.centerWorld.Gw(this.center)
        } else {
          UT.B3(Number.MAX_VALUE), mT.B3(-Number.MAX_VALUE);
          for (let WT = 0; WT < 8; ++WT) {
            const nT = MT[WT];
            zT.p.TransformCoordinatesToRef(gT[WT], TT, nT), UT.minimizeInPlace(nT), mT.maximizeInPlace(nT)
          }
          mT.subtractToRef(UT, this.extendSizeWorld).scaleInPlace(.5), mT.addToRef(UT, this.centerWorld).scaleInPlace(.5)
        }
        zT.p.FromArrayToRef(TT.m, 0, WT[0]), zT.p.FromArrayToRef(TT.m, 4, WT[1]), zT.p.FromArrayToRef(TT.m, 8, WT[2]), this._worldMatrix = TT
      }
      isInFrustum(TT) {
        return gT.IsInFrustum(this.vectorsWorld, TT)
      }
      isCompletelyInFrustum(TT) {
        return gT.IsCompletelyInFrustum(this.vectorsWorld, TT)
      }
      intersectsPoint(TT) {
        const UT = this.minimumWorld,
          mT = this.maximumWorld,
          WT = UT.x,
          zT = UT.y,
          gT = UT.z,
          nT = mT.x,
          HT = mT.y,
          kT = mT.z,
          jT = TT.x,
          lT = TT.y,
          LT = TT.z,
          pT = -MT.c;
        return !(nT - jT < pT || pT > jT - WT) && (!(HT - lT < pT || pT > lT - zT) && !(kT - LT < pT || pT > LT - gT))
      }
      intersectsSphere(TT) {
        return gT.IntersectsSphere(this.minimumWorld, this.maximumWorld, TT.centerWorld, TT.radiusWorld)
      }
      intersectsMinMax(TT, UT) {
        const mT = this.minimumWorld,
          WT = this.maximumWorld,
          zT = mT.x,
          MT = mT.y,
          gT = mT.z,
          nT = WT.x,
          HT = WT.y,
          kT = WT.z,
          jT = TT.x,
          lT = TT.y,
          LT = TT.z,
          pT = UT.x,
          BT = UT.y,
          ZT = UT.z;
        return !(nT < jT || zT > pT) && (!(HT < lT || MT > BT) && !(kT < LT || gT > ZT))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(TT, UT) {
        return TT.intersectsMinMax(UT.minimumWorld, UT.maximumWorld)
      }
      static IntersectsSphere(TT, UT, mT, WT) {
        const MT = gT._TmpVector3[0];
        zT.p.ClampToRef(mT, TT, UT, MT);
        return zT.p.DistanceSquared(mT, MT) <= WT * WT
      }
      static IsCompletelyInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; ++mT) {
          const WT = UT[mT];
          for (let UT = 0; UT < 8; ++UT)
            if (WT.dotCoordinate(TT[UT]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; ++mT) {
          let WT = !0;
          const zT = UT[mT];
          for (let UT = 0; UT < 8; ++UT)
            if (zT.dotCoordinate(TT[UT]) >= 0) {
              WT = !1;
              break
            } if (WT) return !1
        }
        return !0
      }
    }
    gT._TmpVector3 = (0, WT.c)(3, zT.p.Zero)
  },
  40432: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => lT
    });
    var WT = mT(37205),
      zT = mT(37188),
      MT = mT(40440);
    class gT {
      constructor(TT, UT, mT) {
        this.center = zT.p.Zero(), this.centerWorld = zT.p.Zero(), this.minimum = zT.p.Zero(), this.maximum = zT.p.Zero(), this.reConstruct(TT, UT, mT)
      }
      reConstruct(TT, UT, mT) {
        this.minimum.Gw(TT), this.maximum.Gw(UT);
        const WT = zT.p.Distance(TT, UT);
        UT.addToRef(TT, this.center).scaleInPlace(.5), this.radius = .5 * WT, this._update(mT || zT.e.IdentityReadOnly)
      }
      scale(TT) {
        const UT = gT._TmpVector3,
          mT = this.maximum.subtractToRef(this.minimum, UT[0]),
          WT = mT.length();
        mT.normalizeFromLength(WT);
        const zT = WT * TT,
          MT = mT.scaleInPlace(.5 * zT),
          nT = this.center.subtractToRef(MT, UT[1]),
          HT = this.center.addToRef(MT, UT[2]);
        return this.reConstruct(nT, HT, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(TT) {
        if (TT.isIdentity()) this.centerWorld.Gw(this.center), this.radiusWorld = this.radius;
        else {
          zT.p.TransformCoordinatesToRef(this.center, TT, this.centerWorld);
          const UT = gT._TmpVector3[0];
          zT.p.TransformNormalFromFloatsToRef(1, 1, 1, TT, UT), this.radiusWorld = Math.max(Math.abs(UT.x), Math.abs(UT.y), Math.abs(UT.z)) * this.radius
        }
      }
      isInFrustum(TT) {
        const UT = this.centerWorld,
          mT = this.radiusWorld;
        for (let WT = 0; WT < 6; WT++)
          if (TT[WT].dotCoordinate(UT) <= -mT) return !1;
        return !0
      }
      isCenterInFrustum(TT) {
        const UT = this.centerWorld;
        for (let mT = 0; mT < 6; mT++)
          if (TT[mT].dotCoordinate(UT) < 0) return !1;
        return !0
      }
      intersectsPoint(TT) {
        const UT = zT.p.DistanceSquared(this.centerWorld, TT);
        return !(this.radiusWorld * this.radiusWorld < UT)
      }
      static Intersects(TT, UT) {
        const mT = zT.p.DistanceSquared(TT.centerWorld, UT.centerWorld),
          WT = TT.radiusWorld + UT.radiusWorld;
        return !(WT * WT < mT)
      }
      static CreateFromCenterAndRadius(TT, UT, mT) {
        this._TmpVector3[0].Gw(TT), this._TmpVector3[1].J9(0, 0, UT), this._TmpVector3[2].Gw(TT), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].FWT(this._TmpVector3[1]);
        const WT = new gT(this._TmpVector3[0], this._TmpVector3[2]);
        return WT._worldMatrix = mT || zT.e.Identity(), WT
      }
    }
    gT._TmpVector3 = (0, WT.c)(3, zT.p.Zero);
    const nT = {
        min: 0,
        max: 0
      },
      HT = {
        min: 0,
        max: 0
      },
      kT = (TT, UT, mT) => {
        const WT = zT.p.Dot(UT.centerWorld, TT),
          MT = Math.abs(zT.p.Dot(UT.directions[0], TT)) * UT.extendSize.x + Math.abs(zT.p.Dot(UT.directions[1], TT)) * UT.extendSize.y + Math.abs(zT.p.Dot(UT.directions[2], TT)) * UT.extendSize.z;
        mT.min = WT - MT, mT.max = WT + MT
      },
      jT = (TT, UT, mT) => (kT(TT, UT, nT), kT(TT, mT, HT), !(nT.min > HT.max || HT.min > nT.max));
    class lT {
      constructor(TT, UT, mT) {
        this._isLocked = !1, this.boundingBox = new MT.e(TT, UT, mT), this.rWT = new gT(TT, UT, mT)
      }
      reConstruct(TT, UT, mT) {
        this.boundingBox.reConstruct(TT, UT, mT), this.rWT.reConstruct(TT, UT, mT)
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
        this._isLocked || (this.boundingBox._update(TT), this.rWT._update(TT))
      }
      centerOn(TT, UT) {
        const mT = lT._TmpVector3[0].Gw(TT).FWT(UT),
          WT = lT._TmpVector3[1].Gw(TT).addInPlace(UT);
        return this.boundingBox.reConstruct(mT, WT, this.boundingBox.getWorldMatrix()), this.rWT.reConstruct(mT, WT, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(TT) {
        const UT = zT.p.Minimize(this.minimum, TT),
          mT = zT.p.Maximize(this.maximum, TT);
        return this.reConstruct(UT, mT, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(TT) {
        const UT = zT.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(UT);
        const mT = zT.l.JB[0];
        return zT.p.TransformCoordinatesToRef(TT.boundingBox.minimumWorld, UT, mT), this.encapsulate(mT), zT.p.TransformCoordinatesToRef(TT.boundingBox.maximumWorld, UT, mT), this.encapsulate(mT), this
      }
      scale(TT) {
        return this.boundingBox.scale(TT), this.rWT.scale(TT), this
      }
      isInFrustum(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === UT || 3 === UT) && this.rWT.isCenterInFrustum(TT)) return !0;
        if (!this.rWT.isInFrustum(TT)) return !1;
        return !(1 !== UT && 3 !== UT) || this.boundingBox.isInFrustum(TT)
      }
      get diagonalLength() {
        const TT = this.boundingBox;
        return TT.maximumWorld.subtractToRef(TT.minimumWorld, lT._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(TT) {
        return this.boundingBox.isCompletelyInFrustum(TT)
      }
      _checkCollision(TT) {
        return TT._canDoCollision(this.rWT.centerWorld, this.rWT.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(TT) {
        return !!this.rWT.centerWorld && (!!this.rWT.intersectsPoint(TT) && !!this.boundingBox.intersectsPoint(TT))
      }
      intersects(TT, UT) {
        if (!gT.Intersects(this.rWT, TT.rWT)) return !1;
        if (!MT.e.Intersects(this.boundingBox, TT.boundingBox)) return !1;
        if (!UT) return !0;
        const mT = this.boundingBox,
          WT = TT.boundingBox;
        return !!jT(mT.directions[0], mT, WT) && (!!jT(mT.directions[1], mT, WT) && (!!jT(mT.directions[2], mT, WT) && (!!jT(WT.directions[0], mT, WT) && (!!jT(WT.directions[1], mT, WT) && (!!jT(WT.directions[2], mT, WT) && (!!jT(zT.p.Cross(mT.directions[0], WT.directions[0]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[0], WT.directions[1]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[0], WT.directions[2]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[1], WT.directions[0]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[1], WT.directions[1]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[1], WT.directions[2]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[2], WT.directions[0]), mT, WT) && (!!jT(zT.p.Cross(mT.directions[2], WT.directions[1]), mT, WT) && !!jT(zT.p.Cross(mT.directions[2], WT.directions[2]), mT, WT))))))))))))))
      }
    }
    lT._TmpVector3 = (0, WT.c)(2, zT.p.Zero)
  },
  40463: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      c: () => HT,
      g: () => nT,
      k: () => gT
    });
    var WT = mT(40263),
      zT = mT(37188);

    function MT(TT) {
      -1 === TT.indexOf("vClipPlane") && TT.push("vClipPlane"), -1 === TT.indexOf("vClipPlane2") && TT.push("vClipPlane2"), -1 === TT.indexOf("vClipPlane3") && TT.push("vClipPlane3"), -1 === TT.indexOf("vClipPlane4") && TT.push("vClipPlane4"), -1 === TT.indexOf("vClipPlane5") && TT.push("vClipPlane5"), -1 === TT.indexOf("vClipPlane6") && TT.push("vClipPlane6")
    }

    function gT(TT, UT, mT) {
      const WT = !!(TT.clipPlane ?? UT.clipPlane),
        zT = !!(TT.clipPlane2 ?? UT.clipPlane2),
        MT = !!(TT.clipPlane3 ?? UT.clipPlane3),
        gT = !!(TT.clipPlane4 ?? UT.clipPlane4),
        nT = !!(TT.clipPlane5 ?? UT.clipPlane5),
        HT = !!(TT.clipPlane6 ?? UT.clipPlane6);
      WT && mT.push("#define CLIPPLANE"), zT && mT.push("#define CLIPPLANE2"), MT && mT.push("#define CLIPPLANE3"), gT && mT.push("#define CLIPPLANE4"), nT && mT.push("#define CLIPPLANE5"), HT && mT.push("#define CLIPPLANE6")
    }

    function nT(TT, UT, mT) {
      let WT = !1;
      const zT = !!(TT.clipPlane ?? UT.clipPlane),
        MT = !!(TT.clipPlane2 ?? UT.clipPlane2),
        gT = !!(TT.clipPlane3 ?? UT.clipPlane3),
        nT = !!(TT.clipPlane4 ?? UT.clipPlane4),
        HT = !!(TT.clipPlane5 ?? UT.clipPlane5),
        kT = !!(TT.clipPlane6 ?? UT.clipPlane6);
      return mT.CLIPPLANE !== zT && (mT.CLIPPLANE = zT, WT = !0), mT.CLIPPLANE2 !== MT && (mT.CLIPPLANE2 = MT, WT = !0), mT.CLIPPLANE3 !== gT && (mT.CLIPPLANE3 = gT, WT = !0), mT.CLIPPLANE4 !== nT && (mT.CLIPPLANE4 = nT, WT = !0), mT.CLIPPLANE5 !== HT && (mT.CLIPPLANE5 = HT, WT = !0), mT.CLIPPLANE6 !== kT && (mT.CLIPPLANE6 = kT, WT = !0), WT
    }

    function HT(TT, UT, mT) {
      let WT = UT.clipPlane ?? mT.clipPlane;
      kT(TT, "vClipPlane", WT), WT = UT.clipPlane2 ?? mT.clipPlane2, kT(TT, "vClipPlane2", WT), WT = UT.clipPlane3 ?? mT.clipPlane3, kT(TT, "vClipPlane3", WT), WT = UT.clipPlane4 ?? mT.clipPlane4, kT(TT, "vClipPlane4", WT), WT = UT.clipPlane5 ?? mT.clipPlane5, kT(TT, "vClipPlane5", WT), WT = UT.clipPlane6 ?? mT.clipPlane6, kT(TT, "vClipPlane6", WT)
    }

    function kT(TT, UT, mT) {
      if (mT) {
        const MT = WT.b.KF()?.floatingOriginOffset || zT.p.ZeroReadOnly;
        TT.setFloat4(UT, mT.normal.x, mT.normal.y, mT.normal.z, mT.d + zT.p.Dot(mT.normal, MT))
      }
    }
  },
  40479: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    class WT {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(TT, UT) {
        this._defines[TT] || (TT < this._currentRank && (this._currentRank = TT), TT > this._maxRank && (this._maxRank = TT), this._defines[TT] = new Array), this._defines[TT].push(UT)
      }
      addCPUSkinningFallback(TT, UT) {
        this._mesh = UT, TT < this._currentRank && (this._currentRank = TT), TT > this._maxRank && (this._maxRank = TT)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(TT, UT) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, TT = TT.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), UT._bonesComputationForcedToCPU = !0;
          const mT = this._mesh.KF();
          for (let TT = 0; TT < mT.meshes.length; TT++) {
            const WT = mT.meshes[TT];
            if (WT.material) {
              if (WT.computeBonesUsingShaders && 0 !== WT.numBoneInfluencers)
                if (WT.material.getEffect() === UT) WT.computeBonesUsingShaders = !1;
                else if (WT.rY)
                for (const TT of WT.rY) {
                  if (TT.effect === UT) {
                    WT.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && WT.computeBonesUsingShaders && WT.numBoneInfluencers > 0 && (WT.computeBonesUsingShaders = !1)
          }
        } else {
          const UT = this._defines[this._currentRank];
          if (UT)
            for (let mT = 0; mT < UT.length; mT++) TT = TT.replace("#define " + UT[mT], "");
          this._currentRank++
        }
        return TT
      }
    }
  },
  40413: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => fT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(40201),
      gT = mT(37219),
      nT = mT(37216),
      HT = mT(40418),
      kT = mT(40242),
      jT = mT(38800),
      lT = mT(37889),
      LT = mT(40449),
      pT = mT(40122);
    let BT = (() => {
      var TT;
      let UT, mT, MT, gT, nT, HT, kT, jT, lT, LT, BT, ZT, cT = [];
      return TT = class {
        constructor() {
          this._func = (0, WT.k)(this, cT), this.reset()
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
          pT.e.Clone((() => TT), this)
        }
        serialize() {
          return pT.e.Serialize(this)
        }
        parse(TT, UT, mT) {
          pT.e.Parse((() => this), TT, UT, mT)
        }
      }, (() => {
        const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], gT = [(0, zT.L)()], nT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)()], lT = [(0, zT.L)()], LT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], (0, WT.h)(TT, null, UT, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: TT => "func" in TT,
            get: TT => TT.func
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, mT, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: TT => "backFunc" in TT,
            get: TT => TT.backFunc
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, MT, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: TT => "funcRef" in TT,
            get: TT => TT.funcRef
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, gT, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "funcMask" in TT,
            get: TT => TT.funcMask
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, nT, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "opStencilFail" in TT,
            get: TT => TT.opStencilFail
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, HT, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "opDepthFail" in TT,
            get: TT => TT.opDepthFail
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, kT, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "opStencilDepthPass" in TT,
            get: TT => TT.opStencilDepthPass
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, jT, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpStencilFail" in TT,
            get: TT => TT.backOpStencilFail
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, lT, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpDepthFail" in TT,
            get: TT => TT.backOpDepthFail
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, LT, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "backOpStencilDepthPass" in TT,
            get: TT => TT.backOpStencilDepthPass
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, BT, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: TT => "mask" in TT,
            get: TT => TT.mask
          },
          metadata: pT
        }, null, cT), (0, WT.h)(TT, null, ZT, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "enabled" in TT,
            get: TT => TT.enabled
          },
          metadata: pT
        }, null, cT), pT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pT
        })
      })(), TT
    })();
    var ZT = mT(40456),
      cT = mT(40001),
      vT = mT(39965);
    let fT = (() => {
      var TT;
      let UT, mT, vT, fT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT, XT, IT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, GT = [],
        NT = [],
        ET = [],
        hT = [],
        DT = [],
        oT = [],
        AT = [],
        RT = [],
        TU = [],
        UU = [],
        mU = [],
        WU = [],
        zU = [],
        MU = [],
        gU = [],
        nU = [],
        HU = [],
        kU = [],
        jU = [],
        lU = [],
        LU = [],
        pU = [],
        BU = [],
        ZU = [],
        cU = [],
        vU = [],
        fU = [],
        qU = [],
        iU = [],
        bU = [],
        OU = [],
        eU = [],
        YU = [],
        JU = [],
        xU = [],
        dU = [],
        wU = [],
        tU = [],
        aU = [],
        yU = [],
        XU = [],
        IU = [],
        QU = [],
        sU = [],
        FU = [],
        PU = [],
        VU = [],
        uU = [],
        CU = [],
        rU = [],
        KU = [];
      return TT = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(UT) {
          this._useVertexPulling !== UT && (this._useVertexPulling = UT, this.NUT(TT.MiscDirtyFlag))
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
        set alpha(UT) {
          if (this._alpha === UT) return;
          const mT = this._alpha;
          this._alpha = UT, 1 !== mT && 1 !== UT || this.NUT(TT.MiscDirtyFlag + TT.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(UT) {
          this._backFaceCulling !== UT && (this._backFaceCulling = UT, this.NUT(TT.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(UT) {
          const mT = Math.max(0, Math.min(0 | UT, 4));
          this._textureRepetitionMode !== mT && (this._textureRepetitionMode = mT, this.NUT(TT.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(UT) {
          this._cullBackFaces !== UT && (this._cullBackFaces = UT, this.NUT(TT.TextureDirtyFlag))
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
          this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new gT.d), this._onBindObservable
        }
        set onBind(TT) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(TT)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new gT.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new gT.d), this._onEffectCreatedObservable
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
        setAlphaMode(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[mT] !== UT && (this._alphaMode[mT] = UT, this.NUT(TT.TextureDirtyFlag))
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
        set fogEnabled(UT) {
          this._fogEnabled !== UT && (this._fogEnabled = UT, this.NUT(TT.MiscDirtyFlag))
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
        set wireframe(UT) {
          this.fillMode = UT ? TT.WireFrameFillMode : TT.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case TT.PointFillMode:
            case TT.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(UT) {
          this.fillMode = UT ? TT.PointFillMode : TT.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(UT) {
          this._fillMode !== UT && (this._fillMode = UT, this.NUT(TT.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(TT) {
          const UT = this.KF().eB().getCaps().fragmentDepthSupported;
          TT && !UT && jT.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = TT && UT, this._markAllSubMeshesAsMiscDirty()
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
        constructor(UT, mT, zT) {
          let HT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, WT.k)(this, GT), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, WT.k)(this, NT, void 0), this.uniqueId = ((0, WT.k)(this, ET), (0, WT.k)(this, hT, void 0)), this._loadedUniqueId = (0, WT.k)(this, DT), this.name = (0, WT.k)(this, oT, void 0), this.metadata = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, null)), this._internalMetadata = (0, WT.k)(this, TU), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, WT.k)(this, UU, !1), this.checkReadyOnlyOnce = ((0, WT.k)(this, mU), (0, WT.k)(this, WU, !1)), this.state = ((0, WT.k)(this, zU), (0, WT.k)(this, MU, "")), this._alpha = ((0, WT.k)(this, gU), (0, WT.k)(this, nU, 1)), this.inspectableCustomProperties = (0, WT.k)(this, HU), this._backFaceCulling = (0, WT.k)(this, kU, !0), this._textureRepetitionMode = ((0, WT.k)(this, jU), (0, WT.k)(this, lU, 0)), this.textureRepetitionHexTilingParams = ((0, WT.k)(this, LU), (0, WT.k)(this, pU, [1, .6, 7, .5])), this._cullBackFaces = ((0, WT.k)(this, BU), (0, WT.k)(this, ZU, !0)), this._blockDirtyMechanism = ((0, WT.k)(this, cU), !1), this.sideOrientation = (0, WT.k)(this, vU, null), this.onCompiled = ((0, WT.k)(this, fU), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.SF = new gT.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, WT.k)(this, qU, [2]), this._needDepthPrePass = ((0, WT.k)(this, iU), (0, WT.k)(this, bU, !1)), this.disableDepthWrite = ((0, WT.k)(this, OU), (0, WT.k)(this, eU, !1)), this.disableColorWrite = ((0, WT.k)(this, YU), (0, WT.k)(this, JU, !1)), this.forceDepthWrite = ((0, WT.k)(this, xU), (0, WT.k)(this, dU, !1)), this.depthFunction = ((0, WT.k)(this, wU), (0, WT.k)(this, tU, 0)), this.separateCullingPass = ((0, WT.k)(this, aU), (0, WT.k)(this, yU, !1)), this._fogEnabled = ((0, WT.k)(this, XU), (0, WT.k)(this, IU, !0)), this.pointSize = ((0, WT.k)(this, QU), (0, WT.k)(this, sU, 1)), this.zOffset = ((0, WT.k)(this, FU), (0, WT.k)(this, PU, 0)), this.zOffsetUnits = ((0, WT.k)(this, VU), (0, WT.k)(this, uU, 0)), this.clipPlane = (0, WT.k)(this, CU), this.stencil = new BT, this._isVertexOutputInvariant = (0, WT.k)(this, rU, TT.ForceVertexOutputInvariant), this._materialContext = (0, WT.k)(this, KU), this._useUBO = !1, this._fillMode = TT.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = UT;
          const jT = mT || nT.c.LastCreatedScene;
          jT && (this._scene = jT, this._dirtyCallbacks = {}, this._forceGLSL = HT, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = UT || MT.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.eB().createMaterialContext(), this._drawWrapper = new LT.b(this._scene.eB(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new kT.c(this._scene.eB(), void 0, void 0, UT), this._useUBO = this.KF().eB().supportsUniformBuffers, this._createUniformBuffer(), zT || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), TT.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const TT = this.KF().eB();
          this._uniformBuffer?.dispose(), TT.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new kT.c(TT, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new kT.c(this._scene.eB(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(TT, UT) {
          return !0
        }
        isReadyForSubMesh(TT, UT, mT) {
          const WT = UT.materialDefines;
          return !!WT && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = WT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        KF() {
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
          let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const mT = this.KF().meshes;
          for (const TT of mT)
            if (TT.rY)
              for (const mT of TT.rY)
                if (mT.wB() === this)
                  for (const TT of mT._drawWrappers) TT && this._materialContext === TT.materialContext && (TT._wasPreviouslyReady = !1, TT._wasPreviouslyUsingInstances = null, TT._forceRebindOnNextCall = UT);
          UT && this.NUT(TT.AllDirtyFlag)
        }
        _preBind(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const WT = this._scene.eB(),
            zT = (null == mT ? this.sideOrientation : mT) === TT.ClockWiseSideOrientation,
            MT = UT || this._getDrawWrapper();
          return (0, cT.b)(MT) && MT.materialContext && (MT.materialContext.useVertexPulling = this.useVertexPulling), WT.enableEffect(MT), WT.setState(this.backFaceCulling, this.zOffset, !1, zT, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), zT
        }
        bind(TT, UT) {}
        buildUniformLayout() {
          const TT = this._uniformBuffer;
          this._eventInfo.ubo = TT, this._callbackPluginEventGeneric(8, this._eventInfo), TT.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(TT, UT, mT) {
          const WT = mT._drawWrapper;
          this._eventInfo.subMesh = mT, this._callbackPluginEventBindForSubMesh(this._eventInfo), WT._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(TT) {}
        bindView(TT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : TT.setMatrix("view", this.KF().getViewMatrix())
        }
        bindViewProjection(TT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (TT.setMatrix("viewProjection", this.KF().getTransformMatrix()), TT.setMatrix("projection", this.KF().getProjectionMatrix()), TT.setMatrix("inverseProjection", this.KF().getInverseProjectionMatrix()))
        }
        bindEyePosition(TT, UT) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(TT, UT)
        }
        _afterBind(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && UT && (this._needToBindSceneUbo = !1, (0, ZT.v)(UT, this.KF().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = TT ? TT.visibility : 1, this._onBindObservable && TT && this._onBindObservable.notifyObservers(TT), this.disableDepthWrite) {
            const TT = this._scene.eB();
            this._cachedDepthWriteState = TT.getDepthWrite(), TT.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const TT = this._scene.eB();
            this._cachedColorWriteState = TT.getColorWrite(), TT.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const TT = this._scene.eB();
            this._cachedDepthFunctionState = TT.getDepthFunction() || 0, TT.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.eB().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.eB().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.eB().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(UT, mT) {
          const WT = {};
          if (this._serializePlugins(WT), TT._ParsePlugins(WT, UT, this._scene, mT), this.pluginManager)
            for (const TT of this.pluginManager._plugins) {
              const mT = UT.pluginManager.getPlugin(TT.name);
              mT && TT.copyTo(mT)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const TT = [];
            for (const UT in this.meshMap) {
              const mT = this.meshMap[UT];
              mT && TT.push(mT)
            }
            return TT
          }
          return this._scene.meshes.filter((TT => TT.material === this))
        }
        forceCompilation(TT, UT, mT, WT) {
          const zT = {
              clipPlane: !1,
              useInstances: !1,
              ...mT
            },
            MT = this.KF(),
            gT = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const nT = () => {
            if (!this._scene || !this._scene.eB()) return;
            const mT = MT.clipPlane;
            if (zT.clipPlane && (MT.clipPlane = new lT.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let mT = !0,
                MT = null;
              if (TT.rY) {
                const UT = new HT.e(0, 0, 0, 0, 0, TT, void 0, !1, !1);
                UT.materialDefines && (UT.materialDefines._renderId = -1), this.isReadyForSubMesh(TT, UT, zT.useInstances) || (UT.effect && UT.effect.getCompilationError() && UT.effect.allFallbacksProcessed() ? MT = UT.effect.getCompilationError() : (mT = !1, setTimeout(nT, 16)))
              }
              mT && (this.allowShaderHotSwapping = gT, MT && WT && WT(MT), UT && UT(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = gT, UT && UT(this)) : setTimeout(nT, 16);
            zT.clipPlane && (MT.clipPlane = mT)
          };
          nT()
        }
        async forceCompilationAsync(TT, UT) {
          return await new Promise(((mT, WT) => {
            this.forceCompilation(TT, (() => {
              mT()
            }), UT, (TT => {
              WT(TT)
            }))
          }))
        }
        NUT(UT) {
          this.KF().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (TT._DirtyCallbackArray.length = 0, UT & TT.ImageProcessingDirtyFlag && TT._DirtyCallbackArray.push(TT._ImageProcessingDirtyCallBack), UT & TT.TextureDirtyFlag && TT._DirtyCallbackArray.push(TT._TextureDirtyCallBack), UT & TT.LightDirtyFlag && TT._DirtyCallbackArray.push(TT._LightsDirtyCallBack), UT & TT.FresnelDirtyFlag && TT._DirtyCallbackArray.push(TT._FresnelDirtyCallBack), UT & TT.AttributesDirtyFlag && TT._DirtyCallbackArray.push(TT._AttributeDirtyCallBack), UT & TT.MiscDirtyFlag && TT._DirtyCallbackArray.push(TT._MiscDirtyCallBack), UT & TT.PrePassDirtyFlag && TT._DirtyCallbackArray.push(TT._PrePassDirtyCallBack), TT._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(TT._RunDirtyCallBacks), this.KF().resetCachedMaterial())
        }
        resetDrawCache() {
          const TT = this.KF().meshes;
          for (const UT of TT)
            if (UT.rY)
              for (const TT of UT.rY) TT.wB() === this && TT.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(TT) {
          const UT = this.KF();
          if (UT.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const mT = UT.meshes;
          for (const WT of mT)
            if (WT.rY)
              for (const mT of WT.rY) {
                if ((mT.wB() || (UT._hasDefaultMaterial ? UT.defaultMaterial : null)) === this)
                  for (const UT of mT._drawWrappers) UT && UT.defines && UT.defines.markAllAsDirty && this._materialContext === UT.materialContext && TT(UT.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.KF().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const TT = this.KF().enablePrePassRenderer();
          TT && TT.NUT()
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
            this.SF.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(TT)
            }))
          }
        }
        setPrePassRenderer(TT) {
          return !1
        }
        dispose(TT, UT, mT) {
          const WT = this.KF();
          if (WT.stopAnimation(this), WT.freeProcessedMaterials(), WT.removeMaterial(this), this._eventInfo.forceDisposeTextures = UT, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const TT = this._parentContainer.materials.indexOf(this);
            TT > -1 && this._parentContainer.materials.splice(TT, 1), this._parentContainer = null
          }
          if (!0 !== mT)
            if (this.meshMap)
              for (const zT in this.meshMap) {
                const TT = this.meshMap[zT];
                this._disposeMeshResources(TT)
              } else {
                const TT = WT.meshes;
                for (const UT of TT) this._disposeMeshResources(UT)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.SF.notifyObservers(this), this.SF.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(TT) {
          if (!TT) return;
          const UT = TT.geometry,
            mT = TT._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (TT.rY && mT)
              for (const WT of TT.rY) {
                const TT = WT._drawWrappers;
                for (let zT = 0; zT < TT.length; zT++) {
                  const MT = TT[zT]?.effect;
                  if (!MT) continue;
                  mT[zT] === this && (UT?._releaseVertexArrayObject(MT), WT._removeDrawWrapper(zT, !0, !0))
                }
              }
          } else UT?._releaseVertexArrayObject(this._drawWrapper.effect);
          TT.material !== this || TT.czT || (TT.material = null)
        }
        serialize() {
          const TT = pT.e.Serialize(this);
          return TT.stencil = this.stencil.serialize(), TT.uniqueId = this.uniqueId, this._serializePlugins(TT), TT
        }
        _serializePlugins(TT) {
          if (TT.plugins = {}, this.pluginManager)
            for (const UT of this.pluginManager._plugins) UT.doNotSerialize || (TT.plugins[UT.getClassName()] = UT.serialize())
        }
        static ParseAlphaMode(TT, UT) {
          void 0 !== TT._alphaMode ? UT._alphaMode = Array.isArray(TT._alphaMode) ? [...TT._alphaMode] : [TT._alphaMode] : void 0 !== TT.alphaMode ? UT._alphaMode = Array.isArray(TT.alphaMode) ? [...TT.alphaMode] : [TT.alphaMode] : UT._alphaMode = [2]
        }
        static Parse(UT, mT, WT) {
          if (UT.customType) {
            if ("BABYLON.PBRMaterial" === UT.customType && UT.overloadedAlbedo && (UT.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return jT.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else UT.customType = "BABYLON.StandardMaterial";
          const zT = MT.j.Instantiate(UT.customType).Parse(UT, mT, WT);
          return zT._loadedUniqueId = UT.uniqueId, TT.ParseAlphaMode(UT, zT), zT
        }
        static _ParsePlugins(TT, UT, mT, WT) {
          if (TT.plugins)
            for (const zT in TT.plugins) {
              const gT = TT.plugins[zT];
              let nT = UT.pluginManager?.getPlugin(gT.name);
              if (!nT) {
                const TT = MT.j.Instantiate("BABYLON." + zT);
                TT && (nT = new TT(UT))
              }
              nT?.parse(gT, mT, WT)
            }
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, zT.L)()], mT = [(0, zT.L)()], vT = [(0, zT.L)()], fT = [(0, zT.L)()], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)("alpha")], eT = [(0, zT.L)("backFaceCulling")], YT = [(0, zT.L)("textureRepetitionMode")], JT = [(0, zT.L)("textureRepetitionHexTilingParams")], xT = [(0, zT.L)("cullBackFaces")], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], aT = [(0, zT.L)()], yT = [(0, zT.L)()], XT = [(0, zT.L)()], IT = [(0, zT.L)()], QT = [(0, zT.L)()], sT = [(0, zT.L)("fogEnabled")], FT = [(0, zT.L)()], PT = [(0, zT.L)()], VT = [(0, zT.L)()], uT = [(0, zT.L)()], CT = [(0, zT.L)()], rT = [(0, zT.L)()], KT = [(0, zT.L)()], ST = [(0, zT.L)()], (0, WT.h)(TT, null, uT, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: TT => "pointsCloud" in TT,
            get: TT => TT.pointsCloud
          },
          metadata: MT
        }, null, GT), (0, WT.h)(TT, null, CT, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "fillMode" in TT,
            get: TT => TT.fillMode
          },
          metadata: MT
        }, null, GT), (0, WT.h)(TT, null, rT, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLogarithmicDepth" in TT,
            get: TT => TT.useLogarithmicDepth
          },
          metadata: MT
        }, null, GT), (0, WT.h)(TT, null, ST, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "transparencyMode" in TT,
            get: TT => TT.transparencyMode
          },
          metadata: MT
        }, null, GT), (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, UT) => {
              TT.id = UT
            }
          },
          metadata: MT
        }, NT, ET), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, UT) => {
              TT.uniqueId = UT
            }
          },
          metadata: MT
        }, hT, DT), (0, WT.h)(null, null, vT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, UT) => {
              TT.name = UT
            }
          },
          metadata: MT
        }, oT, AT), (0, WT.h)(null, null, fT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, UT) => {
              TT.metadata = UT
            }
          },
          metadata: MT
        }, RT, TU), (0, WT.h)(null, null, qT, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: TT => "checkReadyOnEveryCall" in TT,
            get: TT => TT.checkReadyOnEveryCall,
            set: (TT, UT) => {
              TT.checkReadyOnEveryCall = UT
            }
          },
          metadata: MT
        }, UU, mU), (0, WT.h)(null, null, iT, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: TT => "checkReadyOnlyOnce" in TT,
            get: TT => TT.checkReadyOnlyOnce,
            set: (TT, UT) => {
              TT.checkReadyOnlyOnce = UT
            }
          },
          metadata: MT
        }, WU, zU), (0, WT.h)(null, null, bT, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: TT => "state" in TT,
            get: TT => TT.state,
            set: (TT, UT) => {
              TT.state = UT
            }
          },
          metadata: MT
        }, MU, gU), (0, WT.h)(null, null, OT, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "_alpha" in TT,
            get: TT => TT._alpha,
            set: (TT, UT) => {
              TT._alpha = UT
            }
          },
          metadata: MT
        }, nU, HU), (0, WT.h)(null, null, eT, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: TT => "_backFaceCulling" in TT,
            get: TT => TT._backFaceCulling,
            set: (TT, UT) => {
              TT._backFaceCulling = UT
            }
          },
          metadata: MT
        }, kU, jU), (0, WT.h)(null, null, YT, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_textureRepetitionMode" in TT,
            get: TT => TT._textureRepetitionMode,
            set: (TT, UT) => {
              TT._textureRepetitionMode = UT
            }
          },
          metadata: MT
        }, lU, LU), (0, WT.h)(null, null, JT, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRepetitionHexTilingParams" in TT,
            get: TT => TT.textureRepetitionHexTilingParams,
            set: (TT, UT) => {
              TT.textureRepetitionHexTilingParams = UT
            }
          },
          metadata: MT
        }, pU, BU), (0, WT.h)(null, null, xT, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: TT => "_cullBackFaces" in TT,
            get: TT => TT._cullBackFaces,
            set: (TT, UT) => {
              TT._cullBackFaces = UT
            }
          },
          metadata: MT
        }, ZU, cU), (0, WT.h)(null, null, dT, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: TT => "sideOrientation" in TT,
            get: TT => TT.sideOrientation,
            set: (TT, UT) => {
              TT.sideOrientation = UT
            }
          },
          metadata: MT
        }, vU, fU), (0, WT.h)(null, null, wT, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_alphaMode" in TT,
            get: TT => TT._alphaMode,
            set: (TT, UT) => {
              TT._alphaMode = UT
            }
          },
          metadata: MT
        }, qU, iU), (0, WT.h)(null, null, tT, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: TT => "_needDepthPrePass" in TT,
            get: TT => TT._needDepthPrePass,
            set: (TT, UT) => {
              TT._needDepthPrePass = UT
            }
          },
          metadata: MT
        }, bU, OU), (0, WT.h)(null, null, aT, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableDepthWrite" in TT,
            get: TT => TT.disableDepthWrite,
            set: (TT, UT) => {
              TT.disableDepthWrite = UT
            }
          },
          metadata: MT
        }, eU, YU), (0, WT.h)(null, null, yT, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableColorWrite" in TT,
            get: TT => TT.disableColorWrite,
            set: (TT, UT) => {
              TT.disableColorWrite = UT
            }
          },
          metadata: MT
        }, JU, xU), (0, WT.h)(null, null, XT, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceDepthWrite" in TT,
            get: TT => TT.forceDepthWrite,
            set: (TT, UT) => {
              TT.forceDepthWrite = UT
            }
          },
          metadata: MT
        }, dU, wU), (0, WT.h)(null, null, IT, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: TT => "depthFunction" in TT,
            get: TT => TT.depthFunction,
            set: (TT, UT) => {
              TT.depthFunction = UT
            }
          },
          metadata: MT
        }, tU, aU), (0, WT.h)(null, null, QT, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: TT => "separateCullingPass" in TT,
            get: TT => TT.separateCullingPass,
            set: (TT, UT) => {
              TT.separateCullingPass = UT
            }
          },
          metadata: MT
        }, yU, XU), (0, WT.h)(null, null, sT, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "_fogEnabled" in TT,
            get: TT => TT._fogEnabled,
            set: (TT, UT) => {
              TT._fogEnabled = UT
            }
          },
          metadata: MT
        }, IU, QU), (0, WT.h)(null, null, FT, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: TT => "pointSize" in TT,
            get: TT => TT.pointSize,
            set: (TT, UT) => {
              TT.pointSize = UT
            }
          },
          metadata: MT
        }, sU, FU), (0, WT.h)(null, null, PT, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "zOffset" in TT,
            get: TT => TT.zOffset,
            set: (TT, UT) => {
              TT.zOffset = UT
            }
          },
          metadata: MT
        }, PU, VU), (0, WT.h)(null, null, VT, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: TT => "zOffsetUnits" in TT,
            get: TT => TT.zOffsetUnits,
            set: (TT, UT) => {
              TT.zOffsetUnits = UT
            }
          },
          metadata: MT
        }, uU, CU), (0, WT.h)(null, null, KT, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: TT => "_isVertexOutputInvariant" in TT,
            get: TT => TT._isVertexOutputInvariant,
            set: (TT, UT) => {
              TT._isVertexOutputInvariant = UT
            }
          },
          metadata: MT
        }, rU, KU), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT.TriangleFillMode = 0, TT.WireFrameFillMode = 1, TT.PointFillMode = 2, TT.PointListDrawMode = 3, TT.LineListDrawMode = 4, TT.LineLoopDrawMode = 5, TT.LineStripDrawMode = 6, TT.TriangleStripDrawMode = 7, TT.TriangleFanDrawMode = 8, TT.ClockWiseSideOrientation = 0, TT.CounterClockWiseSideOrientation = 1, TT.ImageProcessingDirtyFlag = 64, TT.TextureDirtyFlag = 1, TT.LightDirtyFlag = 2, TT.FresnelDirtyFlag = 4, TT.AttributesDirtyFlag = 8, TT.MiscDirtyFlag = 16, TT.PrePassDirtyFlag = 32, TT.AllDirtyFlag = 127, TT.MATERIAL_OPAQUE = 0, TT.MATERIAL_ALPHATEST = 1, TT.MATERIAL_ALPHABLEND = 2, TT.MATERIAL_ALPHATESTANDBLEND = 3, TT.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, TT.MATERIAL_NORMALBLENDMETHOD_RNM = 1, TT.LIGHTFALLOFF_PHYSICAL = 0, TT.LIGHTFALLOFF_GLTF = 1, TT.LIGHTFALLOFF_STANDARD = 2, TT.OnEventObservable = new gT.d, TT.ForceVertexOutputInvariant = !1, TT._AllDirtyCallBack = TT => TT.markAllAsDirty(), TT._ImageProcessingDirtyCallBack = TT => TT.markAsImageProcessingDirty(), TT._TextureDirtyCallBack = TT => TT.markAsTexturesDirty(), TT._FresnelDirtyCallBack = TT => TT.markAsFresnelDirty(), TT._MiscDirtyCallBack = TT => TT.markAsMiscDirty(), TT._PrePassDirtyCallBack = TT => TT.markAsPrePassDirty(), TT._LightsDirtyCallBack = TT => TT.markAsLightDirty(), TT._AttributeDirtyCallBack = TT => TT.markAsAttributesDirty(), TT._FresnelAndMiscDirtyCallBack = UT => {
        TT._FresnelDirtyCallBack(UT), TT._MiscDirtyCallBack(UT)
      }, TT._TextureAndMiscDirtyCallBack = UT => {
        TT._TextureDirtyCallBack(UT), TT._MiscDirtyCallBack(UT)
      }, TT._DirtyCallbackArray = [], TT._RunDirtyCallBacks = UT => {
        for (const mT of TT._DirtyCallbackArray) mT(UT)
      }, TT
    })();
    Object.getOwnPropertyDescriptor(fT.prototype, "pluginManager") || Object.defineProperty(fT.prototype, "pluginManager", (0, vT.h)("Material", "pluginManager"))
  },
  40465: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(39982);
    class zT {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(TT) {
        this._DiffuseTextureEnabled !== TT && (this._DiffuseTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(TT) {
        this._BaseWeightTextureEnabled !== TT && (this._BaseWeightTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(TT) {
        this._BaseDiffuseRoughnessTextureEnabled !== TT && (this._BaseDiffuseRoughnessTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(TT) {
        this._DetailTextureEnabled !== TT && (this._DetailTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(TT) {
        this._DecalMapEnabled !== TT && (this._DecalMapEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(TT) {
        this._AmbientTextureEnabled !== TT && (this._AmbientTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(TT) {
        this._OpacityTextureEnabled !== TT && (this._OpacityTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(TT) {
        this._ReflectionTextureEnabled !== TT && (this._ReflectionTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(TT) {
        this._EmissiveTextureEnabled !== TT && (this._EmissiveTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(TT) {
        this._SpecularTextureEnabled !== TT && (this._SpecularTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(TT) {
        this._BumpTextureEnabled !== TT && (this._BumpTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(TT) {
        this._LightmapTextureEnabled !== TT && (this._LightmapTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(TT) {
        this._RefractionTextureEnabled !== TT && (this._RefractionTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(TT) {
        this._ColorGradingTextureEnabled !== TT && (this._ColorGradingTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(TT) {
        this._FresnelEnabled !== TT && (this._FresnelEnabled = TT, WT.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(TT) {
        this._ClearCoatTextureEnabled !== TT && (this._ClearCoatTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(TT) {
        this._ClearCoatBumpTextureEnabled !== TT && (this._ClearCoatBumpTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(TT) {
        this._ClearCoatTintTextureEnabled !== TT && (this._ClearCoatTintTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(TT) {
        this._SheenTextureEnabled !== TT && (this._SheenTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(TT) {
        this._AnisotropicTextureEnabled !== TT && (this._AnisotropicTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(TT) {
        this._ThicknessTextureEnabled !== TT && (this._ThicknessTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(TT) {
        this._RefractionIntensityTextureEnabled !== TT && (this._RefractionIntensityTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(TT) {
        this._TranslucencyIntensityTextureEnabled !== TT && (this._TranslucencyIntensityTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(TT) {
        this._TranslucencyColorTextureEnabled !== TT && (this._TranslucencyColorTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(TT) {
        this._IridescenceTextureEnabled !== TT && (this._IridescenceTextureEnabled = TT, WT.c.MarkAllMaterialsAsDirty(1))
      }
    }
    zT._DiffuseTextureEnabled = !0, zT._BaseWeightTextureEnabled = !0, zT._BaseDiffuseRoughnessTextureEnabled = !0, zT._DetailTextureEnabled = !0, zT._DecalMapEnabled = !0, zT._AmbientTextureEnabled = !0, zT._OpacityTextureEnabled = !0, zT._ReflectionTextureEnabled = !0, zT._EmissiveTextureEnabled = !0, zT._SpecularTextureEnabled = !0, zT._BumpTextureEnabled = !0, zT._LightmapTextureEnabled = !0, zT._RefractionTextureEnabled = !0, zT._ColorGradingTextureEnabled = !0, zT._FresnelEnabled = !0, zT._ClearCoatTextureEnabled = !0, zT._ClearCoatBumpTextureEnabled = !0, zT._ClearCoatTintTextureEnabled = !0, zT._SheenTextureEnabled = !0, zT._AnisotropicTextureEnabled = !0, zT._ThicknessTextureEnabled = !0, zT._RefractionIntensityTextureEnabled = !0, zT._TranslucencyIntensityTextureEnabled = !0, zT._TranslucencyColorTextureEnabled = !0, zT._IridescenceTextureEnabled = !0
  },
  40456: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => aT,
      C: () => bT,
      E: () => dT,
      G: () => wT,
      J: () => pT,
      L: () => LT,
      O: () => CT,
      R: () => sT,
      S: () => IT,
      W: () => XT,
      X: () => qT,
      c: () => yT,
      d: () => OT,
      db: () => rT,
      f: () => lT,
      gb: () => KT,
      i: () => vT,
      ib: () => ST,
      j: () => fT,
      kb: () => hT,
      l: () => xT,
      ob: () => NT,
      p: () => HT,
      rb: () => ET,
      s: () => ZT,
      sb: () => BT,
      v: () => cT,
      x: () => iT,
      y: () => tT
    });
    var WT = mT(38800),
      zT = mT(37216),
      MT = mT(40310),
      gT = mT(40463),
      nT = mT(40465);

    function HT(TT, UT, mT) {
      if (!TT || TT.LOGARITHMICDEPTH || TT.indexOf && TT.indexOf("LOGARITHMICDEPTH") >= 0) {
        const TT = mT.activeCamera;
        1 === TT.mode && WT.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), UT.setFloat("logarithmicDepthConstant", 2 / (Math.log(TT.maxZ + 1) / Math.LN2))
      }
    }
    const kT = {
        r: 0,
        g: 0,
        b: 0
      },
      jT = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function lT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      mT && TT.fogEnabled && (!UT || UT.applyFog) && 0 !== TT.fogMode && (mT.setFloat4("vFogInfos", TT.fogMode, TT.fogStart, TT.fogEnd, TT.fogDensity), WT ? (TT.fogColor.toLinearSpaceToRef(kT, TT.eB().useExactSrgbConversions), mT.setColor3("vFogColor", kT)) : mT.setColor3("vFogColor", TT.fogColor))
    }

    function LT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
      const lT = TT.numMaxInfluencers || TT.numInfluencers;
      return lT <= 0 ? 0 : (UT.push("#define MORPHTARGETS"), TT.hasPositions && UT.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), TT.hasNormals && UT.push("#define MORPHTARGETTEXTURE_HASNORMALS"), TT.hasTangents && UT.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), TT.hasUVs && UT.push("#define MORPHTARGETTEXTURE_HASUVS"), TT.hasUV2s && UT.push("#define MORPHTARGETTEXTURE_HASUV2S"), TT.hasColors && UT.push("#define MORPHTARGETTEXTURE_HASCOLORS"), TT.supportsPositions && zT && UT.push("#define MORPHTARGETS_POSITION"), TT.supportsNormals && MT && UT.push("#define MORPHTARGETS_NORMAL"), TT.supportsTangents && gT && UT.push("#define MORPHTARGETS_TANGENT"), TT.supportsUVs && nT && UT.push("#define MORPHTARGETS_UV"), TT.supportsUV2s && HT && UT.push("#define MORPHTARGETS_UV2"), TT.supportsColors && kT && UT.push("#define MORPHTARGETS_COLOR"), UT.push("#define NUM_MORPH_INFLUENCERS " + lT), TT.isUsingTextureForTargets && UT.push("#define MORPHTARGETS_TEXTURE"), jT.NUM_MORPH_INFLUENCERS = lT, jT.NORMAL = MT, jT.TANGENT = gT, jT.UV = nT, jT.UV2 = HT, jT.COLOR = kT, pT(mT, WT, jT, zT), lT)
    }

    function pT(TT, UT, mT) {
      let MT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const gT = mT.NUM_MORPH_INFLUENCERS;
      if (gT > 0 && zT.c.LastCreatedEngine) {
        const nT = zT.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          HT = UT.morphTargetManager;
        if (HT?.isUsingTextureForTargets) return;
        const kT = HT && HT.supportsPositions && MT,
          jT = HT && HT.supportsNormals && mT.NORMAL,
          lT = HT && HT.supportsTangents && mT.TANGENT,
          LT = HT && HT.supportsUVs && mT.UV1,
          pT = HT && HT.supportsUV2s && mT.UV2,
          BT = HT && HT.supportsColors && mT.VERTEXCOLOR;
        for (let mT = 0; mT < gT; mT++) kT && TT.push("position" + mT), jT && TT.push("normal" + mT), lT && TT.push("tangent" + mT), LT && TT.push("uv_" + mT), pT && TT.push("uv2_" + mT), BT && TT.push("color" + mT), TT.length > nT && WT.b.Error("Cannot add more vertex attributes for mesh " + UT.name)
      }
    }

    function BT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      TT.push("world0"), TT.push("world1"), TT.push("world2"), TT.push("world3"), UT && (TT.push("previousWorld0"), TT.push("previousWorld1"), TT.push("previousWorld2"), TT.push("previousWorld3"))
    }

    function ZT(TT, UT) {
      const mT = TT.morphTargetManager;
      TT && mT && UT.setFloatArray("morphTargetInfluences", mT.influences)
    }

    function cT(TT, UT) {
      UT.bindToEffect(TT, "Scene")
    }

    function vT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        HT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        jT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        lT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        LT = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (TT.texturesEnabled && zT && nT.e.ReflectionTextureEnabled) {
        if (mT.R7("reflectionMatrix", zT.getReflectionTextureMatrix()), mT.updateFloat2("vReflectionInfos", zT.level * TT.iblIntensity, LT), HT && zT.boundingBoxSize) {
          const TT = zT;
          mT.updateVector3("vReflectionPosition", TT.boundingBoxPosition), mT.updateVector3("vReflectionSize", TT.boundingBoxSize)
        }
        if (MT) {
          const TT = zT.getSize().width;
          mT.updateFloat2("vReflectionFilteringInfo", TT, Math.log2(TT))
        }
        if (jT && !UT.USEIRRADIANCEMAP) {
          const TT = zT.sphericalPolynomial;
          if (UT.USESPHERICALFROMREFLECTIONMAP && TT)
            if (UT.SPHERICAL_HARMONICS) {
              const UT = TT.preScaledHarmonics;
              mT.updateVector3("vSphericalL00", UT.l00), mT.updateVector3("vSphericalL1_1", UT.l1_1), mT.updateVector3("vSphericalL10", UT.l10), mT.updateVector3("vSphericalL11", UT.l11), mT.updateVector3("vSphericalL2_2", UT.l2_2), mT.updateVector3("vSphericalL2_1", UT.l2_1), mT.updateVector3("vSphericalL20", UT.l20), mT.updateVector3("vSphericalL21", UT.l21), mT.updateVector3("vSphericalL22", UT.l22)
            } else mT.updateFloat3("vSphericalX", TT.x.x, TT.x.y, TT.x.z), mT.updateFloat3("vSphericalY", TT.y.x, TT.y.y, TT.y.z), mT.updateFloat3("vSphericalZ", TT.z.x, TT.z.y, TT.z.z), mT.updateFloat3("vSphericalXX_ZZ", TT.xx.x - TT.zz.x, TT.xx.y - TT.zz.y, TT.xx.z - TT.zz.z), mT.updateFloat3("vSphericalYY_ZZ", TT.yy.x - TT.zz.x, TT.yy.y - TT.zz.y, TT.yy.z - TT.zz.z), mT.updateFloat3("vSphericalZZ", TT.zz.x, TT.zz.y, TT.zz.z), mT.updateFloat3("vSphericalXY", TT.xy.x, TT.xy.y, TT.xy.z), mT.updateFloat3("vSphericalYZ", TT.yz.x, TT.yz.y, TT.yz.z), mT.updateFloat3("vSphericalZX", TT.zx.x, TT.zx.y, TT.zx.z)
        } else kT && UT.USEIRRADIANCEMAP && UT.USE_IRRADIANCE_DOMINANT_DIRECTION && zT.irradianceTexture && mT.updateVector3("vReflectionDominantDirection", zT.irradianceTexture._dominantDirection);
        gT && mT.updateFloat3("vReflectionMicrosurfaceInfos", zT.getSize().width, zT.lodGenerationScale, zT.lodGenerationOffset)
      }
      lT && mT.updateColor3("vReflectionColor", WT)
    }

    function fT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (WT && nT.e.ReflectionTextureEnabled) {
        UT.LODBASEDMICROSFURACE ? mT.setTexture("reflectionSampler", WT) : (mT.setTexture("reflectionSampler", WT._lodTextureMid || WT), mT.setTexture("reflectionSamplerLow", WT._lodTextureLow || WT), mT.setTexture("reflectionSamplerHigh", WT._lodTextureHigh || WT)), UT.USEIRRADIANCEMAP && mT.setTexture("irradianceSampler", WT.irradianceTexture);
        const MT = TT.iblCdfGenerator;
        zT && MT && mT.setTexture("icdfSampler", MT.getIcdfTexture())
      }
    }

    function qT(TT, UT, mT) {
      UT._needUVs = !0, UT[mT] = !0, TT.optimizeUVAllocation && TT.getTextureMatrix().isIdentityAs3x2() ? (UT[mT + "DIRECTUV"] = TT.coordinatesIndex + 1, UT["MAINUV" + (TT.coordinatesIndex + 1)] = !0) : UT[mT + "DIRECTUV"] = 0
    }

    function iT(TT, UT, mT) {
      const WT = TT.getTextureMatrix();
      UT.R7(mT + "Matrix", WT)
    }

    function bT(TT, UT, mT) {
      mT.BAKED_VERTEX_ANIMATION_TEXTURE && mT.INSTANCES && TT.push("bakedVertexAnimationSettingsInstanced")
    }

    function OT(TT, UT, mT) {
      var WT;
      if (UT && TT && (TT.computeBonesUsingShaders && UT._bonesComputationForcedToCPU && (TT.computeBonesUsingShaders = !1), TT.useBones && TT.computeBonesUsingShaders && TT.skeleton)) {
        const zT = TT.skeleton;
        if (zT.isUsingTextureForMatrices && UT.getUniformIndex("boneTextureInfo") > -1) {
          const mT = zT.getTransformMatrixTexture(TT);
          UT.setTexture("boneSampler", mT), UT.setFloat2("boneTextureInfo", zT._textureWidth, zT._textureHeight)
        } else {
          const MT = zT.getTransformMatrices(TT);
          MT && (UT.setMatrices("mBones", MT), mT && TT.KF().prePassRenderer && TT.KF().prePassRenderer.getIndex(2) && (mT.previousBones[TT.uniqueId] || (mT.previousBones[TT.uniqueId] = MT.slice()), UT.setMatrices("mPreviousBones", mT.previousBones[TT.uniqueId]), WT = MT, mT.previousBones[TT.uniqueId].set(WT)))
        }
      }
    }

    function eT(TT, UT, mT, WT, zT) {
      let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      TT._bindLight(UT, mT, WT, zT, MT)
    }
    const YT = 4,
      JT = new WeakMap;

    function xT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const MT = Math.min(UT.lightSources.length, zT);
      for (let gT = 0; gT < MT; gT++) {
        eT(UT.lightSources[gT], gT, TT, mT, "boolean" === typeof WT ? WT : WT.SPECULARTERM, UT.receiveShadows)
      }
    }

    function dT(TT, UT, mT, WT) {
      mT.NUM_BONE_INFLUENCERS > 0 && (WT.addCPUSkinningFallback(0, UT), TT.push("matricesIndices"), TT.push("matricesWeights"), mT.NUM_BONE_INFLUENCERS > 4 && (TT.push("matricesIndicesExtra"), TT.push("matricesWeightsExtra")))
    }

    function wT(TT, UT) {
      (UT.INSTANCES || UT.THIN_INSTANCES) && BT(TT, !!UT.PREPASS_VELOCITY), UT.INSTANCESCOLOR && TT.push("instanceColor")
    }

    function tT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = 0;
      for (let MT = 0; MT < mT && TT["LIGHT" + MT]; MT++) MT > 0 && (zT = WT + MT, UT.addFallback(zT, "LIGHT" + MT)), TT.SHADOWS || (TT["SHADOW" + MT] && UT.addFallback(WT, "SHADOW" + MT), TT["SHADOWPCF" + MT] && UT.addFallback(WT, "SHADOWPCF" + MT), TT["SHADOWPCSS" + MT] && UT.addFallback(WT, "SHADOWPCSS" + MT), TT["SHADOWPOISSON" + MT] && UT.addFallback(WT, "SHADOWPOISSON" + MT), TT["SHADOWESM" + MT] && UT.addFallback(WT, "SHADOWESM" + MT), TT["SHADOWCLOSEESM" + MT] && UT.addFallback(WT, "SHADOWCLOSEESM" + MT));
      return zT
    }

    function aT(TT, UT, mT, WT, zT, MT, gT) {
      let nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        kT = arguments.length > 9 ? arguments[9] : void 0,
        jT = arguments.length > 10 ? arguments[10] : void 0;
      if (gT._areMiscDirty) {
        gT.LOGARITHMICDEPTH = mT, gT.POINTSIZE = WT, gT.FOG = zT && function(TT, UT) {
          return UT.fogEnabled && TT.applyFog && 0 !== UT.fogMode
        }(TT, UT), gT.NONUNIFORMSCALING = TT.nonUniformScaling, gT.ALPHATEST = MT, gT.DECAL_AFTER_DETAIL = nT, gT.USE_VERTEX_PULLING = HT, gT.RIGHT_HANDED = UT.useRightHandedSystem;
        const lT = HT ? kT?.geometry?.getIndexBuffer() : null,
          LT = !!kT && kT.isUnIndexed;
        gT.VERTEX_PULLING_USE_INDEX_BUFFER = !!lT && !LT, gT.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!lT || LT) && lT.is32Bits, gT.VERTEXOUTPUT_INVARIANT = !!jT
      }
    }

    function yT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!TT.lightsEnabled || WT) return !0;
      const zT = UT.lightSources,
        MT = Math.min(zT.length, mT);
      for (let gT = 0; gT < MT; gT++)
        if (!zT[gT].areLightTexturesReady()) return !1;
      return !0
    }

    function XT(TT, UT, mT, zT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!mT._areLightsDirty) return mT._needNormals;
      const nT = MT;
      MT = function(TT, UT) {
        const mT = TT.eB().getCaps().maxUniformBuffersPerShaderStage;
        if (null == mT) return UT;
        const WT = Math.max(mT - YT, 1);
        return Math.min(UT, WT)
      }(TT, MT);
      let HT = 0;
      const kT = {
        needNormals: mT._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (TT.lightsEnabled && !gT) {
        UT.lightSources.length > MT && MT < nT && function(TT, UT, mT, zT) {
          let MT = JT.get(TT);
          MT || (MT = new Set, JT.set(TT, MT)), MT.has(zT) || (MT.add(zT), WT.b.Warn(`maxSimultaneousLights is ${UT} but this engine supports at most ${mT} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${zT} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${zT+YT} uniform buffers, over the device limit of ${TT.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${mT}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${mT} or less to silence this warning.`))
        }(TT.eB(), nT, MT, Math.min(UT.lightSources.length, nT));
        for (const WT of UT.lightSources)
          if (QT(TT, UT, WT, HT, mT, zT, kT), HT++, HT === MT) break
      }
      mT.SPECULARTERM = kT.specularEnabled, mT.SHADOWS = kT.shadowEnabled;
      const jT = Math.max(MT, mT.MAXLIGHTCOUNT || 0);
      for (let WT = HT; WT < jT; WT++) void 0 !== mT["LIGHT" + WT] && (mT["LIGHT" + WT] = !1, mT["HEMILIGHT" + WT] = !1, mT["POINTLIGHT" + WT] = !1, mT["DIRLIGHT" + WT] = !1, mT["SPOTLIGHT" + WT] = !1, mT["AREALIGHT" + WT] = !1, mT["CLUSTLIGHT" + WT] = !1, mT["SHADOW" + WT] = !1, mT["SHADOWCSM" + WT] = !1, mT["SHADOWCSMDEBUG" + WT] = !1, mT["SHADOWCSMNUM_CASCADES" + WT] = !1, mT["SHADOWCSMUSESHADOWMAXZ" + WT] = !1, mT["SHADOWCSMNOBLEND" + WT] = !1, mT["SHADOWCSM_RIGHTHANDED" + WT] = !1, mT["SHADOWPCF" + WT] = !1, mT["SHADOWPCSS" + WT] = !1, mT["SHADOWPOISSON" + WT] = !1, mT["SHADOWESM" + WT] = !1, mT["SHADOWCLOSEESM" + WT] = !1, mT["SHADOWCUBE" + WT] = !1, mT["SHADOWLOWQUALITY" + WT] = !1, mT["SHADOWMEDIUMQUALITY" + WT] = !1);
      mT.LIGHTCOUNT = HT, mT.MAXLIGHTCOUNT = MT;
      const lT = TT.eB().getCaps();
      return void 0 === mT.SHADOWFLOAT && (kT.needRebuild = !0), mT.SHADOWFLOAT = kT.shadowEnabled && (lT.textureFloatRender && lT.textureFloatLinearFiltering || lT.textureHalfFloatRender && lT.textureHalfFloatLinearFiltering), mT.LIGHTMAPEXCLUDED = kT.lightmapMode, kT.needRebuild && mT.rebuild(), kT.needNormals
    }

    function IT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (UT && nT.e.ReflectionTextureEnabled) {
        if (!UT.isReadyOrNotBlocking()) return !1;
        mT._needNormals = !0, mT.REFLECTION = !0, mT.GAMMAREFLECTION = UT.gammaSpace, mT.RGBDREFLECTION = UT.isRGBD, mT.LODINREFLECTIONALPHA = UT.lodLevelInAlpha, mT.LINEARSPECULARREFLECTION = UT.linearSpecularLOD, mT.USEIRRADIANCEMAP = !1, mT.LODBASEDMICROSFURACE = TT.eB().getCaps().textureLOD;
        const gT = TT.eB();
        switch (WT && zT > 0 ? (mT.NUM_SAMPLES = "" + zT, gT._features.needTypeSuffixInShaderConstants && (mT.NUM_SAMPLES = mT.NUM_SAMPLES + "u"), mT.REALTIME_FILTERING = !0, TT.iblCdfGenerator && (mT.IBL_CDF_FILTERING = !0)) : mT.REALTIME_FILTERING = !1, mT.INVERTCUBICMAP = 6 === UT.coordinatesMode, mT.REFLECTIONMAP_3D = UT.isCube, mT.REFLECTIONMAP_OPPOSITEZ = mT.REFLECTIONMAP_3D && TT.useRightHandedSystem ? !UT.invertZ : UT.invertZ, mT.REFLECTIONMAP_CUBIC = !1, mT.REFLECTIONMAP_EXPLICIT = !1, mT.REFLECTIONMAP_PLANAR = !1, mT.REFLECTIONMAP_PROJECTION = !1, mT.REFLECTIONMAP_SKYBOX = !1, mT.REFLECTIONMAP_SPHERICAL = !1, mT.REFLECTIONMAP_EQUIRECTANGULAR = !1, mT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, mT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, UT.coordinatesMode) {
          case 0:
            mT.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            mT.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            mT.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            mT.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            mT.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            mT.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            mT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            mT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            mT.REFLECTIONMAP_CUBIC = !0, mT.USE_LOCAL_REFLECTIONMAP_CUBIC = !!UT.boundingBoxSize
        }
        5 !== UT.coordinatesMode && (UT.irradianceTexture ? (mT.USEIRRADIANCEMAP = !0, mT.USESPHERICALFROMREFLECTIONMAP = !1, mT.USESPHERICALINVERTEX = !1, UT.irradianceTexture._dominantDirection ? mT.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : mT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : UT.isCube && (mT.USESPHERICALFROMREFLECTIONMAP = !0, mT.USEIRRADIANCEMAP = !1, mT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, mT.USESPHERICALINVERTEX = MT))
      } else mT.REFLECTION = !1, mT.REFLECTIONMAP_3D = !1, mT.REFLECTIONMAP_SPHERICAL = !1, mT.REFLECTIONMAP_PLANAR = !1, mT.REFLECTIONMAP_CUBIC = !1, mT.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, mT.REFLECTIONMAP_PROJECTION = !1, mT.REFLECTIONMAP_SKYBOX = !1, mT.REFLECTIONMAP_EXPLICIT = !1, mT.REFLECTIONMAP_EQUIRECTANGULAR = !1, mT.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, mT.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, mT.INVERTCUBICMAP = !1, mT.USESPHERICALFROMREFLECTIONMAP = !1, mT.USEIRRADIANCEMAP = !1, mT.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, mT.USESPHERICALINVERTEX = !1, mT.REFLECTIONMAP_OPPOSITEZ = !1, mT.LODINREFLECTIONALPHA = !1, mT.GAMMAREFLECTION = !1, mT.RGBDREFLECTION = !1, mT.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function QT(TT, UT, mT, WT, zT, gT, nT) {
      switch (nT.needNormals = !0, void 0 === zT["LIGHT" + WT] && (nT.needRebuild = !0), zT["LIGHT" + WT] = !0, zT["SPOTLIGHT" + WT] = !1, zT["HEMILIGHT" + WT] = !1, zT["POINTLIGHT" + WT] = !1, zT["DIRLIGHT" + WT] = !1, zT["AREALIGHT" + WT] = !1, zT["CLUSTLIGHT" + WT] = !1, mT.prepareLightSpecificDefines(zT, WT), zT["LIGHT_FALLOFF_PHYSICAL" + WT] = !1, zT["LIGHT_FALLOFF_GLTF" + WT] = !1, zT["LIGHT_FALLOFF_STANDARD" + WT] = !1, mT.falloffType) {
        case MT.b.FALLOFF_GLTF:
          zT["LIGHT_FALLOFF_GLTF" + WT] = !0;
          break;
        case MT.b.FALLOFF_PHYSICAL:
          zT["LIGHT_FALLOFF_PHYSICAL" + WT] = !0;
          break;
        case MT.b.FALLOFF_STANDARD:
          zT["LIGHT_FALLOFF_STANDARD" + WT] = !0
      }
      if (gT && !mT.specular.equalsFloats(0, 0, 0) && (nT.specularEnabled = !0), zT["SHADOW" + WT] = !1, zT["SHADOWCSM" + WT] = !1, zT["SHADOWCSMDEBUG" + WT] = !1, zT["SHADOWCSMNUM_CASCADES" + WT] = !1, zT["SHADOWCSMUSESHADOWMAXZ" + WT] = !1, zT["SHADOWCSMNOBLEND" + WT] = !1, zT["SHADOWCSM_RIGHTHANDED" + WT] = !1, zT["SHADOWPCF" + WT] = !1, zT["SHADOWPCSS" + WT] = !1, zT["SHADOWPOISSON" + WT] = !1, zT["SHADOWESM" + WT] = !1, zT["SHADOWCLOSEESM" + WT] = !1, zT["SHADOWCUBE" + WT] = !1, zT["SHADOWLOWQUALITY" + WT] = !1, zT["SHADOWMEDIUMQUALITY" + WT] = !1, UT && UT.receiveShadows && TT.shadowsEnabled && mT.shadowEnabled) {
        const UT = mT.getShadowGenerator(TT.activeCamera) ?? mT.getShadowGenerator();
        if (UT) {
          const TT = UT.getShadowMap();
          TT && TT.renderList && TT.renderList.length > 0 && (nT.shadowEnabled = !0, UT.prepareDefines(zT, WT))
        }
      }
      mT.lightmapMode != MT.b.LIGHTMAP_DEFAULT ? (nT.lightmapMode = !0, zT["LIGHTMAPEXCLUDED" + WT] = !0, zT["LIGHTMAPNOSPECULAR" + WT] = mT.lightmapMode == MT.b.LIGHTMAP_SHADOWSONLY) : (zT["LIGHTMAPEXCLUDED" + WT] = !1, zT["LIGHTMAPNOSPECULAR" + WT] = !1)
    }

    function sT(TT, UT, mT, WT, zT) {
      let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        nT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        HT = function(TT, UT) {
          let mT = !1;
          if (TT.activeCamera) {
            const WT = UT.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              zT = UT.CAMERA_PERSPECTIVE ? 1 : 0,
              MT = 1 === TT.activeCamera.mode ? 1 : 0,
              gT = 0 === TT.activeCamera.mode ? 1 : 0;
            (WT ^ MT || zT ^ gT) && (UT.CAMERA_ORTHOGRAPHIC = 1 === MT, UT.CAMERA_PERSPECTIVE = 1 === gT, mT = !0)
          }
          return mT
        }(TT, WT);
      !1 !== MT && (HT = (0, gT.g)(mT, TT, WT)), WT.DEPTHPREPASS !== !UT.getColorWrite() && (WT.DEPTHPREPASS = !WT.DEPTHPREPASS, HT = !0), WT.INSTANCES !== zT && (WT.INSTANCES = zT, HT = !0), WT.THIN_INSTANCES !== nT && (WT.THIN_INSTANCES = nT, HT = !0), HT && WT.markAsUnprocessed()
    }
    const FT = 40,
      PT = 64,
      VT = new WeakMap,
      uT = new WeakSet;

    function CT(TT, UT, mT, zT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        gT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        nT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!UT._areAttributesDirty && UT._needNormals === UT._normals && UT._needUVs === UT._uvs) return !1;
      UT._normals = UT._needNormals, UT._uvs = UT._needUVs, UT.NORMAL = UT._needNormals && TT.isVerticesDataPresent("normal"), UT._needNormals && TT.isVerticesDataPresent("tangent") && (UT.TANGENT = !0);
      for (let WT = 1; WT <= 6; ++WT) UT["UV" + WT] = !!UT._needUVs && TT.isVerticesDataPresent(`uv${1===WT?"":WT}`);
      if (mT) {
        const mT = TT.useVertexColors && TT.isVerticesDataPresent("color");
        UT.VERTEXCOLOR = mT, UT.VERTEXALPHA = TT.hasVertexAlpha && mT && gT
      }
      return TT.isVerticesDataPresent("instanceColor") && (TT.ZzT || TT.hasThinInstances) && (UT.INSTANCESCOLOR = !0), zT && function(TT, UT) {
        if (TT.useBones && TT.computeBonesUsingShaders && TT.skeleton) {
          UT.NUM_BONE_INFLUENCERS = TT.numBoneInfluencers;
          const mT = void 0 !== UT.BONETEXTURE;
          if (TT.skeleton.isUsingTextureForMatrices && mT) UT.BONETEXTURE = !0;
          else {
            UT.BonesPerMesh = TT.skeleton.bones.length + 1, UT.BONETEXTURE = !mT && void 0;
            const zT = TT.KF(),
              MT = zT.prePassRenderer;
            if (MT && MT.enabled) {
              const mT = -1 === MT.excludedSkinnedMesh.indexOf(TT);
              UT.BONES_VELOCITY_ENABLED = mT
            }
            const gT = !0 === UT.MULTIVIEW,
              nT = 2 * UT.BonesPerMesh + (gT ? 1 : 0);
            if (VT.get(TT.skeleton) !== nT) {
              VT.set(TT.skeleton, nT);
              const mT = zT.eB().getCaps().maxVertexUniformVectors;
              if (mT && !uT.has(TT.skeleton)) {
                const zT = 4 * UT.BonesPerMesh,
                  MT = gT ? PT : FT,
                  nT = Math.max(mT - MT, 0);
                (zT > nT || gT && 3 * zT > mT) && (uT.add(TT.skeleton), WT.b.Warn(`Skeleton "${TT.skeleton.name}": ${TT.skeleton.bones.length} bones stored as vertex uniforms use ${zT} of ~${nT} usable uniform vectors${gT?" (multiview)":""} on a device reporting ${mT}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else UT.NUM_BONE_INFLUENCERS = 0, UT.BonesPerMesh = 0, void 0 !== UT.BONETEXTURE && (UT.BONETEXTURE = !1)
      }(TT, UT), MT && function(TT, UT) {
        const mT = TT.morphTargetManager;
        mT ? (UT.MORPHTARGETS_UV = mT.supportsUVs && UT.UV1, UT.MORPHTARGETS_UV2 = mT.supportsUV2s && UT.UV2, UT.MORPHTARGETS_TANGENT = mT.supportsTangents && UT.TANGENT, UT.MORPHTARGETS_NORMAL = mT.supportsNormals && UT.NORMAL, UT.MORPHTARGETS_POSITION = mT.supportsPositions, UT.MORPHTARGETS_COLOR = mT.supportsColors, UT.MORPHTARGETTEXTURE_HASUVS = mT.hasUVs, UT.MORPHTARGETTEXTURE_HASUV2S = mT.hasUV2s, UT.MORPHTARGETTEXTURE_HASTANGENTS = mT.hasTangents, UT.MORPHTARGETTEXTURE_HASNORMALS = mT.hasNormals, UT.MORPHTARGETTEXTURE_HASPOSITIONS = mT.hasPositions, UT.MORPHTARGETTEXTURE_HASCOLORS = mT.hasColors, UT.NUM_MORPH_INFLUENCERS = mT.numMaxInfluencers || mT.numInfluencers, UT.MORPHTARGETS = UT.NUM_MORPH_INFLUENCERS > 0, UT.MORPHTARGETS_TEXTURE = mT.isUsingTextureForTargets) : (UT.MORPHTARGETS_UV = !1, UT.MORPHTARGETS_UV2 = !1, UT.MORPHTARGETS_TANGENT = !1, UT.MORPHTARGETS_NORMAL = !1, UT.MORPHTARGETS_POSITION = !1, UT.MORPHTARGETS_COLOR = !1, UT.MORPHTARGETTEXTURE_HASUVS = !1, UT.MORPHTARGETTEXTURE_HASUV2S = !1, UT.MORPHTARGETTEXTURE_HASTANGENTS = !1, UT.MORPHTARGETTEXTURE_HASNORMALS = !1, UT.MORPHTARGETTEXTURE_HASPOSITIONS = !1, UT.MORPHTARGETTEXTURE_HAS_COLORS = !1, UT.MORPHTARGETS = !1, UT.NUM_MORPH_INFLUENCERS = 0)
      }(TT, UT), nT && function(TT, UT) {
        const mT = TT.bakedVertexAnimationManager;
        UT.BAKED_VERTEX_ANIMATION_TEXTURE = !(!mT || !mT.isEnabled)
      }(TT, UT), !0
    }

    function rT(TT, UT) {
      if (TT.activeCamera) {
        const mT = UT.MULTIVIEW;
        UT.MULTIVIEW = null !== TT.activeCamera.outputRenderTarget && TT.activeCamera.outputRenderTarget.getViewCount() > 1, UT.MULTIVIEW != mT && UT.markAsUnprocessed()
      }
    }

    function KT(TT, UT, mT) {
      const WT = UT.ORDER_INDEPENDENT_TRANSPARENCY,
        zT = UT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      UT.ORDER_INDEPENDENT_TRANSPARENCY = TT.useOrderIndependentTransparency && mT, UT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !TT.eB().getCaps().textureFloatLinearFiltering, WT === UT.ORDER_INDEPENDENT_TRANSPARENCY && zT === UT.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || UT.markAsUnprocessed()
    }

    function ST(TT, UT, mT) {
      const WT = UT.PREPASS;
      if (!UT._arePrePassDirty) return;
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
      if (TT.prePassRenderer && TT.prePassRenderer.enabled && mT) {
        UT.PREPASS = !0, UT.SCENE_MRT_COUNT = TT.prePassRenderer.mrtCount, UT.PREPASS_NORMAL_WORLDSPACE = TT.prePassRenderer.generateNormalsInWorldSpace, UT.PREPASS_COLOR = !0, UT.PREPASS_COLOR_INDEX = 0;
        for (let mT = 0; mT < zT.length; mT++) {
          const WT = TT.prePassRenderer.getIndex(zT[mT].type); - 1 !== WT ? (UT[zT[mT].define] = !0, UT[zT[mT].index] = WT) : UT[zT[mT].define] = !1
        }
      } else {
        UT.PREPASS = !1;
        for (let TT = 0; TT < zT.length; TT++) UT[zT[TT].define] = !1
      }
      UT.PREPASS != WT && (UT.markAsUnprocessed(), UT.markAsImageProcessingDirty())
    }

    function GT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        kT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      zT && zT.push("Light" + TT), MT || (UT.push("vLightData" + TT, "vLightDiffuse" + TT, "vLightSpecular" + TT, "vLightDirection" + TT, "vLightWidth" + TT, "vLightHeight" + TT, "vLightFalloff" + TT, "vLightGround" + TT, "vSliceData" + TT, "vSliceRanges" + TT, "lightMatrix" + TT, "shadowsInfo" + TT, "depthValues" + TT), mT.push("shadowTexture" + TT), mT.push("depthTexture" + TT), UT.push("viewFrustumZ" + TT, "cascadeBlendFactor" + TT, "lightSizeUVCorrection" + TT, "depthCorrection" + TT, "penumbraDarkness" + TT, "frustumLengths" + TT), WT && (mT.push("projectionLightTexture" + TT), UT.push("textureProjectionMatrix" + TT)), gT && mT.push("iesLightTexture" + TT), HT && mT.push("rectAreaLightEmissionTexture" + TT), nT && (mT.push("lightDataTexture" + TT), kT || mT.push("tileMaskTexture" + TT)))
    }

    function NT(TT, UT, mT) {
      const WT = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      mT && WT.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), TT.push(...WT);
      UT.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function ET(TT, UT, mT) {
      let WT, zT, MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        gT = null;
      if (TT.uniformsNames) {
        const nT = TT;
        WT = nT.uniformsNames, zT = nT.uniformBuffersNames, UT = nT.samplers, mT = nT.defines, MT = nT.maxSimultaneousLights || 0, gT = nT.shaderLanguage ?? null
      } else WT = TT, UT || (UT = []);
      for (let nT = 0; nT < MT && mT["LIGHT" + nT]; nT++) GT(nT, WT, UT, mT["PROJECTEDLIGHTTEXTURE" + nT], zT, !1, mT["IESLIGHTTEXTURE" + nT], mT["CLUSTLIGHT" + nT], mT["RECTAREALIGHTEMISSIONTEXTURE" + nT], 1 === gT);
      mT.NUM_MORPH_INFLUENCERS && (WT.push("morphTargetInfluences"), WT.push("morphTargetCount")), mT.BAKED_VERTEX_ANIMATION_TEXTURE && (WT.push("bakedVertexAnimationSettings"), WT.push("bakedVertexAnimationTextureSizeInverted"), WT.push("bakedVertexAnimationTime"), UT.push("bakedVertexAnimationTexture"))
    }

    function hT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      TT.addUniform("vReflectionInfos", 2), TT.addUniform("reflectionMatrix", 16), UT && TT.addUniform("vReflectionMicrosurfaceInfos", 3), mT && (TT.addUniform("vReflectionPosition", 3), TT.addUniform("vReflectionSize", 3)), WT && (TT.addUniform("vReflectionFilteringInfo", 2), TT.addUniform("vReflectionDominantDirection", 3)), MT && TT.addUniform("vReflectionColor", 3), zT && (TT.addUniform("vSphericalL00", 3), TT.addUniform("vSphericalL1_1", 3), TT.addUniform("vSphericalL10", 3), TT.addUniform("vSphericalL11", 3), TT.addUniform("vSphericalL2_2", 3), TT.addUniform("vSphericalL2_1", 3), TT.addUniform("vSphericalL20", 3), TT.addUniform("vSphericalL21", 3), TT.addUniform("vSphericalL22", 3), TT.addUniform("vSphericalX", 3), TT.addUniform("vSphericalY", 3), TT.addUniform("vSphericalZ", 3), TT.addUniform("vSphericalXX_ZZ", 3), TT.addUniform("vSphericalYY_ZZ", 3), TT.addUniform("vSphericalZZ", 3), TT.addUniform("vSphericalXY", 3), TT.addUniform("vSphericalYZ", 3), TT.addUniform("vSphericalZX", 3))
    }
  },
  40474: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(37188),
      zT = mT(40413);
    class MT extends zT.b {
      constructor(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(TT, UT, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new WT.e, this._storeEffectOnSubMeshes = mT
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(TT, UT) {
        return !!TT && (!this._storeEffectOnSubMeshes || (!TT.rY || 0 === TT.rY.length || this.isReadyForSubMesh(TT, TT.rY[0], UT)))
      }
      _isReadyForSubMesh(TT) {
        const UT = TT.materialDefines;
        return !(this.checkReadyOnEveryCall || !TT.effect || !UT || UT._renderId !== this.KF().getRenderId())
      }
      bindOnlyWorldMatrix(TT) {
        this._activeEffect.setMatrix("world", TT)
      }
      bindOnlyNormalMatrix(TT) {
        this._activeEffect.setMatrix("normalMatrix", TT)
      }
      bind(TT, UT) {
        UT && this.bindForSubMesh(TT, UT, UT.rY[0])
      }
      _afterBind(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(TT, UT, mT), this.KF()._cachedEffect = UT, mT ? mT._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return mT._drawWrapper._forceRebindOnNextCall || TT.isCachedMaterialInvalid(this, UT, WT)
      }
      dispose(TT, UT, mT) {
        this._activeEffect = void 0, super.dispose(TT, UT, mT)
      }
    }
  },
  40495: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      f: () => zT
    });
    const WT = new WeakMap;

    function zT(TT) {
      const UT = TT.getVertexBuffers();
      if (!UT) return null;
      let mT = WT.get(TT);
      if (mT) {
        let TT = !1;
        for (const WT in UT)
          if (!mT.has(WT)) {
            TT = !0;
            break
          } if (!TT) return mT
      } else mT = new Map, WT.set(TT, mT);
      for (const WT in UT) {
        const TT = UT[WT];
        if (TT) {
          const UT = TT.byteOffset,
            zT = TT.byteStride,
            MT = TT.type,
            gT = TT.normalized;
          mT.set(WT, {
            offset: UT,
            stride: zT,
            type: MT,
            normalized: gT
          })
        }
      }
      return mT
    }

    function MT(TT, UT) {
      UT.forEach(((UT, mT) => {
        const WT = `vp_${mT}_info`;
        TT.setFloat4(WT, UT.offset, UT.stride, UT.type, UT.normalized ? 1 : 0)
      }))
    }
  },
  40444: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      f: () => HT
    });
    var WT = mT(40095),
      zT = mT(37188),
      MT = mT(40102);
    let gT = (() => {
      var TT;
      let UT, mT, zT = [];
      return TT = class {
        static extractMinAndMaxIndexed(TT, UT, mT, WT, zT, MT) {
          for (let gT = mT; gT < mT + WT; gT++) {
            const mT = 3 * UT[gT],
              WT = TT[mT],
              nT = TT[mT + 1],
              HT = TT[mT + 2];
            zT.minimizeInPlaceFromFloats(WT, nT, HT), MT.maximizeInPlaceFromFloats(WT, nT, HT)
          }
        }
        static extractMinAndMax(TT, UT, mT, WT, zT, MT) {
          for (let gT = UT, nT = UT * WT; gT < UT + mT; gT++, nT += WT) {
            const UT = TT[nT],
              mT = TT[nT + 1],
              WT = TT[nT + 2];
            zT.minimizeInPlaceFromFloats(UT, mT, WT), MT.maximizeInPlaceFromFloats(UT, mT, WT)
          }
        }
      }, (() => {
        const gT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [MT.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], mT = [MT.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, WT.h)(TT, null, UT, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: TT => "extractMinAndMaxIndexed" in TT,
            get: TT => TT.extractMinAndMaxIndexed
          },
          metadata: gT
        }, null, zT), (0, WT.h)(TT, null, mT, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: TT => "extractMinAndMax" in TT,
            get: TT => TT.extractMinAndMax
          },
          metadata: gT
        }, null, zT), gT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gT
        }), (0, WT.k)(TT, zT)
      })(), TT
    })();

    function nT(TT, UT, mT, WT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const nT = new zT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        HT = new zT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return gT.extractMinAndMaxIndexed(TT, UT, mT, WT, nT, HT), MT && (nT.x -= nT.x * MT.x + MT.y, nT.y -= nT.y * MT.x + MT.y, nT.z -= nT.z * MT.x + MT.y, HT.x += HT.x * MT.x + MT.y, HT.y += HT.y * MT.x + MT.y, HT.z += HT.z * MT.x + MT.y), {
        minimum: nT,
        maximum: HT
      }
    }

    function HT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        MT = arguments.length > 4 ? arguments[4] : void 0;
      const nT = new zT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        HT = new zT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return MT || (MT = 3), gT.extractMinAndMax(TT, UT, mT, MT, nT, HT), WT && (nT.x -= nT.x * WT.x + WT.y, nT.y -= nT.y * WT.x + WT.y, nT.z -= nT.z * WT.x + WT.y, HT.x += HT.x * WT.x + WT.y, HT.y += HT.y * WT.x + WT.y, HT.z += HT.z * WT.x + WT.y), {
        minimum: nT,
        maximum: HT
      }
    }
  },
  40418: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT
    });
    var WT, zT = mT(40257),
      MT = mT(40426),
      gT = mT(40432),
      nT = mT(40444),
      HT = mT(40449),
      kT = mT(39965);
    class jT {
      get materialDefines() {
        const TT = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof TT ? null : TT
      }
      set materialDefines(TT) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = TT
      }
      _getDrawWrapper(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        TT = TT ?? this._engine.currentRenderPassId;
        let mT = this._drawWrappers[TT];
        return !mT && UT && (this._drawWrappers[TT] = mT = new HT.b(this._mesh.KF().eB())), mT
      }
      _removeDrawWrapper(TT) {
        let UT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[TT]?.dispose(UT), this._drawWrappers[TT] = void 0
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zT = this._drawWrapper;
        zT.setEffect(TT, UT, WT), void 0 !== mT && (zT.materialContext = mT), TT || (zT.defines = null, zT.materialContext = void 0)
      }
      resetDrawCache(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== TT) return void this._removeDrawWrapper(TT, !0, UT);
          for (const TT of this._drawWrappers) TT?.dispose(UT)
        }
        this._drawWrappers = []
      }
      static AddToMesh(TT, UT, mT, WT, zT, MT, gT) {
        return new jT(TT, UT, mT, WT, zT, MT, gT, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(TT, UT, mT, WT, zT, MT, gT) {
        let nT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          HT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = TT, this.verticesStart = UT, this.verticesCount = mT, this.indexStart = WT, this.indexCount = zT, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = MT, this._renderingMesh = gT || MT, HT && MT.rY.push(this), this._engine = this._mesh.KF().eB(), this.resetDrawCache(), this._trianglePlanes = [], this._id = MT.rY.length - 1, nT && (this.refreshBoundingInfo(), MT.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      rV() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.rV() : this._boundingInfo
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
      wB() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const UT = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!UT) return TT && this._mesh.KF()._hasDefaultMaterial ? this._mesh.KF().defaultMaterial : null;
        if (this._isMultiMaterial(UT)) {
          const TT = UT.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== TT && (this._currentMaterial = TT, this.resetDrawCache()), TT
        }
        return UT
      }
      _isMultiMaterial(TT) {
        return void 0 !== TT.getSubMaterial
      }
      refreshBoundingInfo() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (TT || (TT = this._renderingMesh.getVerticesData(zT.i.PositionKind)), !TT) return this._boundingInfo = this._mesh.rV(), this;
        const UT = this._renderingMesh.vWT();
        let mT;
        if (0 === this.indexStart && this.indexCount === UT.length) {
          const TT = this._renderingMesh.rV();
          mT = {
            minimum: TT.minimum.clone(),
            maximum: TT.maximum.clone()
          }
        } else mT = (0, nT.c)(TT, UT, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(mT.minimum, mT.maximum) : this._boundingInfo = new gT.e(mT.minimum, mT.maximum), this
      }
      _checkCollision(TT) {
        return this.rV()._checkCollision(TT)
      }
      updateBoundingInfo(TT) {
        let UT = this.rV();
        return UT || (this.refreshBoundingInfo(), UT = this.rV()), UT && UT.update(TT), this
      }
      isInFrustum(TT) {
        const UT = this.rV();
        return !!UT && UT.isInFrustum(TT, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(TT) {
        const UT = this.rV();
        return !!UT && UT.isCompletelyInFrustum(TT)
      }
      render(TT) {
        return this._renderingMesh.render(this, TT, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(TT, UT) {
        if (!this._linesIndexBuffer) {
          const mT = 6 * Math.floor(this.indexCount / 3),
            WT = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(mT) : new Uint16Array(mT);
          let zT = 0;
          if (0 === TT.length)
            for (let TT = this.indexStart; TT < this.indexStart + this.indexCount; TT += 3) WT[zT++] = TT, WT[zT++] = TT + 1, WT[zT++] = TT + 1, WT[zT++] = TT + 2, WT[zT++] = TT + 2, WT[zT++] = TT;
          else
            for (let UT = this.indexStart; UT < this.indexStart + this.indexCount; UT += 3) WT[zT++] = TT[UT], WT[zT++] = TT[UT + 1], WT[zT++] = TT[UT + 1], WT[zT++] = TT[UT + 2], WT[zT++] = TT[UT + 2], WT[zT++] = TT[UT];
          this._linesIndexBuffer = UT.createIndexBuffer(WT), this._linesIndexCount = WT.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(TT) {
        const UT = this.rV();
        return !!UT && TT.intersectsBox(UT.boundingBox)
      }
      intersects(TT, UT, mT, WT, zT) {
        const MT = this.wB();
        if (!MT) return null;
        let gT = 3,
          nT = !1;
        switch (MT.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            gT = 1, nT = !0
        }
        return 4 === MT.fillMode ? mT.length ? this._intersectLines(TT, UT, mT, this._mesh.intersectionThreshold, WT) : this._intersectUnIndexedLines(TT, UT, mT, this._mesh.intersectionThreshold, WT) : !mT.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(TT, UT, mT, WT, zT) : this._intersectTriangles(TT, UT, mT, gT, nT, WT, zT)
      }
      _intersectLines(TT, UT, mT, WT, zT) {
        let gT = null;
        for (let nT = this.indexStart; nT < this.indexStart + this.indexCount; nT += 2) {
          const HT = UT[mT[nT]],
            kT = UT[mT[nT + 1]],
            jT = TT.intersectionSegment(HT, kT, WT);
          if (!(jT < 0) && ((zT || !gT || jT < gT.distance) && (gT = new MT.d(null, null, jT), gT.faceId = nT / 2, zT))) break
        }
        return gT
      }
      _intersectUnIndexedLines(TT, UT, mT, WT, zT) {
        let gT = null;
        for (let nT = this.verticesStart; nT < this.verticesStart + this.verticesCount; nT += 2) {
          const mT = UT[nT],
            HT = UT[nT + 1],
            kT = TT.intersectionSegment(mT, HT, WT);
          if (!(kT < 0) && ((zT || !gT || kT < gT.distance) && (gT = new MT.d(null, null, kT), gT.faceId = nT / 2, zT))) break
        }
        return gT
      }
      _intersectTriangles(TT, UT, mT, WT, zT, MT, gT) {
        let nT = null,
          HT = -1;
        for (let kT = this.indexStart; kT < this.indexStart + this.indexCount - (3 - WT); kT += WT) {
          HT++;
          const WT = mT[kT],
            jT = mT[kT + 1],
            lT = mT[kT + 2];
          if (zT && 4294967295 === lT) {
            kT += 2;
            continue
          }
          const LT = UT[WT],
            pT = UT[jT],
            BT = UT[lT];
          if (!LT || !pT || !BT) continue;
          if (gT && !gT(LT, pT, BT, TT, WT, jT, lT)) continue;
          const ZT = TT.intersectsTriangle(LT, pT, BT);
          if (ZT) {
            if (ZT.distance < 0) continue;
            if ((MT || !nT || ZT.distance < nT.distance) && (nT = ZT, nT.faceId = HT, MT)) break
          }
        }
        return nT
      }
      _intersectUnIndexedTriangles(TT, UT, mT, WT, zT) {
        let MT = null;
        for (let gT = this.verticesStart; gT < this.verticesStart + this.verticesCount; gT += 3) {
          const mT = UT[gT],
            nT = UT[gT + 1],
            HT = UT[gT + 2];
          if (zT && !zT(mT, nT, HT, TT, -1, -1, -1)) continue;
          const kT = TT.intersectsTriangle(mT, nT, HT);
          if (kT) {
            if (kT.distance < 0) continue;
            if ((WT || !MT || kT.distance < MT.distance) && (MT = kT, MT.faceId = gT / 3, WT)) break
          }
        }
        return MT
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(TT, UT) {
        const mT = new jT(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, TT, UT, !1);
        if (!this.IsGlobal) {
          const TT = this.rV();
          if (!TT) return mT;
          mT._boundingInfo = new gT.e(TT.minimum, TT.maximum)
        }
        return mT
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.KF().eB()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const UT = this._mesh.rY.indexOf(this);
        this._mesh.rY.splice(UT, 1), this.resetDrawCache(void 0, TT)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(TT, UT, mT, WT, zT) {
        let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = Number.MAX_VALUE,
          nT = -Number.MAX_VALUE;
        const HT = (zT || WT).vWT();
        for (let kT = UT; kT < UT + mT; kT++) {
          const TT = HT[kT];
          TT < gT && (gT = TT), TT > nT && (nT = TT)
        }
        return new jT(TT, gT, nT - gT + 1, UT, mT, WT, zT, MT)
      }
    }(WT = jT.prototype).projectToRef ?? (WT.projectToRef = (0, kT.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);