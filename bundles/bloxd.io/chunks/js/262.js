export const id = 262;
export const ids = [262];
export const modules = {
  40231: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      constructor(DD, zD, wD) {
        this.bu = DD, this.bv = zD, this.distance = wD, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40239: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(37094),
      sD = wD(37079),
      KD = wD(37088);
    class rD {
      constructor(DD, zD, wD) {
        this.vectors = (0, pD.b)(8, sD.s.Zero), this.center = sD.s.Zero(), this.centerWorld = sD.s.Zero(), this.extendSize = sD.s.Zero(), this.extendSizeWorld = sD.s.Zero(), this.directions = (0, pD.b)(3, sD.s.Zero), this.vectorsWorld = (0, pD.b)(8, sD.s.Zero), this.minimumWorld = sD.s.Zero(), this.maximumWorld = sD.s.Zero(), this.minimum = sD.s.Zero(), this.maximum = sD.s.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(DD, zD, wD)
      }
      reConstruct(DD, zD, wD) {
        const pD = DD.x,
          KD = DD.y,
          rD = DD.z,
          LD = zD.x,
          cD = zD.y,
          gD = zD.z,
          RD = this.vectors;
        this.minimum.Z2(pD, KD, rD), this.maximum.Z2(LD, cD, gD), RD[0].Z2(pD, KD, rD), RD[1].Z2(LD, cD, gD), RD[2].Z2(LD, KD, rD), RD[3].Z2(pD, cD, rD), RD[4].Z2(pD, KD, gD), RD[5].Z2(LD, cD, rD), RD[6].Z2(pD, cD, gD), RD[7].Z2(LD, KD, gD), zD.addToRef(DD, this.center).scaleInPlace(.5), zD.subtractToRef(DD, this.extendSize).scaleInPlace(.5), this._worldMatrix = wD || sD.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(DD) {
        const zD = rD._TmpVector3,
          wD = this.maximum.subtractToRef(this.minimum, zD[0]),
          pD = wD.length();
        wD.normalizeFromLength(pD);
        const sD = pD * DD,
          KD = wD.scaleInPlace(.5 * sD),
          LD = this.center.subtractToRef(KD, zD[1]),
          cD = this.center.addToRef(KD, zD[2]);
        return this.reConstruct(LD, cD, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(DD) {
        const zD = this.minimumWorld,
          wD = this.maximumWorld,
          pD = this.directions,
          KD = this.vectorsWorld,
          rD = this.vectors;
        if (DD.isIdentity()) {
          zD.pC(this.minimum), wD.pC(this.maximum);
          for (let DD = 0; DD < 8; ++DD) KD[DD].pC(rD[DD]);
          this.extendSizeWorld.pC(this.extendSize), this.centerWorld.pC(this.center)
        } else {
          zD.I9(Number.MAX_VALUE), wD.I9(-Number.MAX_VALUE);
          for (let pD = 0; pD < 8; ++pD) {
            const LD = KD[pD];
            sD.s.TransformCoordinatesToRef(rD[pD], DD, LD), zD.minimizeInPlace(LD), wD.maximizeInPlace(LD)
          }
          wD.subtractToRef(zD, this.extendSizeWorld).scaleInPlace(.5), wD.addToRef(zD, this.centerWorld).scaleInPlace(.5)
        }
        sD.s.FromArrayToRef(DD.m, 0, pD[0]), sD.s.FromArrayToRef(DD.m, 4, pD[1]), sD.s.FromArrayToRef(DD.m, 8, pD[2]), this._worldMatrix = DD
      }
      isInFrustum(DD) {
        return rD.IsInFrustum(this.vectorsWorld, DD)
      }
      isCompletelyInFrustum(DD) {
        return rD.IsCompletelyInFrustum(this.vectorsWorld, DD)
      }
      intersectsPoint(DD) {
        const zD = this.minimumWorld,
          wD = this.maximumWorld,
          pD = zD.x,
          sD = zD.y,
          rD = zD.z,
          LD = wD.x,
          cD = wD.y,
          gD = wD.z,
          RD = DD.x,
          AD = DD.y,
          UD = DD.z,
          fD = -KD.b;
        return !(LD - RD < fD || fD > RD - pD) && (!(cD - AD < fD || fD > AD - sD) && !(gD - UD < fD || fD > UD - rD))
      }
      intersectsSphere(DD) {
        return rD.IntersectsSphere(this.minimumWorld, this.maximumWorld, DD.centerWorld, DD.radiusWorld)
      }
      intersectsMinMax(DD, zD) {
        const wD = this.minimumWorld,
          pD = this.maximumWorld,
          sD = wD.x,
          KD = wD.y,
          rD = wD.z,
          LD = pD.x,
          cD = pD.y,
          gD = pD.z,
          RD = DD.x,
          AD = DD.y,
          UD = DD.z,
          fD = zD.x,
          ID = zD.y,
          BD = zD.z;
        return !(LD < RD || sD > fD) && (!(cD < AD || KD > ID) && !(gD < UD || rD > BD))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(DD, zD) {
        return DD.intersectsMinMax(zD.minimumWorld, zD.maximumWorld)
      }
      static IntersectsSphere(DD, zD, wD, pD) {
        const KD = rD._TmpVector3[0];
        sD.s.ClampToRef(wD, DD, zD, KD);
        return sD.s.DistanceSquared(wD, KD) <= pD * pD
      }
      static IsCompletelyInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; ++wD) {
          const pD = zD[wD];
          for (let zD = 0; zD < 8; ++zD)
            if (pD.dotCoordinate(DD[zD]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; ++wD) {
          let pD = !0;
          const sD = zD[wD];
          for (let zD = 0; zD < 8; ++zD)
            if (sD.dotCoordinate(DD[zD]) >= 0) {
              pD = !1;
              break
            } if (pD) return !1
        }
        return !0
      }
    }
    rD._TmpVector3 = (0, pD.b)(3, sD.s.Zero)
  },
  40234: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => AD
    });
    var pD = wD(37094),
      sD = wD(37079),
      KD = wD(40239);
    class rD {
      constructor(DD, zD, wD) {
        this.center = sD.s.Zero(), this.centerWorld = sD.s.Zero(), this.minimum = sD.s.Zero(), this.maximum = sD.s.Zero(), this.reConstruct(DD, zD, wD)
      }
      reConstruct(DD, zD, wD) {
        this.minimum.pC(DD), this.maximum.pC(zD);
        const pD = sD.s.Distance(DD, zD);
        zD.addToRef(DD, this.center).scaleInPlace(.5), this.radius = .5 * pD, this._update(wD || sD.e.IdentityReadOnly)
      }
      scale(DD) {
        const zD = rD._TmpVector3,
          wD = this.maximum.subtractToRef(this.minimum, zD[0]),
          pD = wD.length();
        wD.normalizeFromLength(pD);
        const sD = pD * DD,
          KD = wD.scaleInPlace(.5 * sD),
          LD = this.center.subtractToRef(KD, zD[1]),
          cD = this.center.addToRef(KD, zD[2]);
        return this.reConstruct(LD, cD, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(DD) {
        if (DD.isIdentity()) this.centerWorld.pC(this.center), this.radiusWorld = this.radius;
        else {
          sD.s.TransformCoordinatesToRef(this.center, DD, this.centerWorld);
          const zD = rD._TmpVector3[0];
          sD.s.TransformNormalFromFloatsToRef(1, 1, 1, DD, zD), this.radiusWorld = Math.max(Math.abs(zD.x), Math.abs(zD.y), Math.abs(zD.z)) * this.radius
        }
      }
      isInFrustum(DD) {
        const zD = this.centerWorld,
          wD = this.radiusWorld;
        for (let pD = 0; pD < 6; pD++)
          if (DD[pD].dotCoordinate(zD) <= -wD) return !1;
        return !0
      }
      isCenterInFrustum(DD) {
        const zD = this.centerWorld;
        for (let wD = 0; wD < 6; wD++)
          if (DD[wD].dotCoordinate(zD) < 0) return !1;
        return !0
      }
      intersectsPoint(DD) {
        const zD = sD.s.DistanceSquared(this.centerWorld, DD);
        return !(this.radiusWorld * this.radiusWorld < zD)
      }
      static Intersects(DD, zD) {
        const wD = sD.s.DistanceSquared(DD.centerWorld, zD.centerWorld),
          pD = DD.radiusWorld + zD.radiusWorld;
        return !(pD * pD < wD)
      }
      static CreateFromCenterAndRadius(DD, zD, wD) {
        this._TmpVector3[0].pC(DD), this._TmpVector3[1].Z2(0, 0, zD), this._TmpVector3[2].pC(DD), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].apD(this._TmpVector3[1]);
        const pD = new rD(this._TmpVector3[0], this._TmpVector3[2]);
        return pD._worldMatrix = wD || sD.e.Identity(), pD
      }
    }
    rD._TmpVector3 = (0, pD.b)(3, sD.s.Zero);
    const LD = {
        min: 0,
        max: 0
      },
      cD = {
        min: 0,
        max: 0
      },
      gD = (DD, zD, wD) => {
        const pD = sD.s.Dot(zD.centerWorld, DD),
          KD = Math.abs(sD.s.Dot(zD.directions[0], DD)) * zD.extendSize.x + Math.abs(sD.s.Dot(zD.directions[1], DD)) * zD.extendSize.y + Math.abs(sD.s.Dot(zD.directions[2], DD)) * zD.extendSize.z;
        wD.min = pD - KD, wD.max = pD + KD
      },
      RD = (DD, zD, wD) => (gD(DD, zD, LD), gD(DD, wD, cD), !(LD.min > cD.max || cD.min > LD.max));
    class AD {
      constructor(DD, zD, wD) {
        this._isLocked = !1, this.boundingBox = new KD.b(DD, zD, wD), this.FpD = new rD(DD, zD, wD)
      }
      reConstruct(DD, zD, wD) {
        this.boundingBox.reConstruct(DD, zD, wD), this.FpD.reConstruct(DD, zD, wD)
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
      set isLocked(DD) {
        this._isLocked = DD
      }
      update(DD) {
        this._isLocked || (this.boundingBox._update(DD), this.FpD._update(DD))
      }
      centerOn(DD, zD) {
        const wD = AD._TmpVector3[0].pC(DD).apD(zD),
          pD = AD._TmpVector3[1].pC(DD).addInPlace(zD);
        return this.boundingBox.reConstruct(wD, pD, this.boundingBox.getWorldMatrix()), this.FpD.reConstruct(wD, pD, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(DD) {
        const zD = sD.s.Minimize(this.minimum, DD),
          wD = sD.s.Maximize(this.maximum, DD);
        return this.reConstruct(zD, wD, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(DD) {
        const zD = sD.n.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(zD);
        const wD = sD.n.WI[0];
        return sD.s.TransformCoordinatesToRef(DD.boundingBox.minimumWorld, zD, wD), this.encapsulate(wD), sD.s.TransformCoordinatesToRef(DD.boundingBox.maximumWorld, zD, wD), this.encapsulate(wD), this
      }
      scale(DD) {
        return this.boundingBox.scale(DD), this.FpD.scale(DD), this
      }
      isInFrustum(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === zD || 3 === zD) && this.FpD.isCenterInFrustum(DD)) return !0;
        if (!this.FpD.isInFrustum(DD)) return !1;
        return !(1 !== zD && 3 !== zD) || this.boundingBox.isInFrustum(DD)
      }
      get diagonalLength() {
        const DD = this.boundingBox;
        return DD.maximumWorld.subtractToRef(DD.minimumWorld, AD._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(DD) {
        return this.boundingBox.isCompletelyInFrustum(DD)
      }
      _checkCollision(DD) {
        return DD._canDoCollision(this.FpD.centerWorld, this.FpD.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(DD) {
        return !!this.FpD.centerWorld && (!!this.FpD.intersectsPoint(DD) && !!this.boundingBox.intersectsPoint(DD))
      }
      intersects(DD, zD) {
        if (!rD.Intersects(this.FpD, DD.FpD)) return !1;
        if (!KD.b.Intersects(this.boundingBox, DD.boundingBox)) return !1;
        if (!zD) return !0;
        const wD = this.boundingBox,
          pD = DD.boundingBox;
        return !!RD(wD.directions[0], wD, pD) && (!!RD(wD.directions[1], wD, pD) && (!!RD(wD.directions[2], wD, pD) && (!!RD(pD.directions[0], wD, pD) && (!!RD(pD.directions[1], wD, pD) && (!!RD(pD.directions[2], wD, pD) && (!!RD(sD.s.Cross(wD.directions[0], pD.directions[0]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[0], pD.directions[1]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[0], pD.directions[2]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[1], pD.directions[0]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[1], pD.directions[1]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[1], pD.directions[2]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[2], pD.directions[0]), wD, pD) && (!!RD(sD.s.Cross(wD.directions[2], pD.directions[1]), wD, pD) && !!RD(sD.s.Cross(wD.directions[2], pD.directions[2]), wD, pD))))))))))))))
      }
    }
    AD._TmpVector3 = (0, pD.b)(2, sD.s.Zero)
  },
  40263: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      f: () => cD,
      j: () => LD,
      n: () => rD
    });
    var pD = wD(40082),
      sD = wD(37079);

    function KD(DD) {
      -1 === DD.indexOf("vClipPlane") && DD.push("vClipPlane"), -1 === DD.indexOf("vClipPlane2") && DD.push("vClipPlane2"), -1 === DD.indexOf("vClipPlane3") && DD.push("vClipPlane3"), -1 === DD.indexOf("vClipPlane4") && DD.push("vClipPlane4"), -1 === DD.indexOf("vClipPlane5") && DD.push("vClipPlane5"), -1 === DD.indexOf("vClipPlane6") && DD.push("vClipPlane6")
    }

    function rD(DD, zD, wD) {
      const pD = !!(DD.clipPlane ?? zD.clipPlane),
        sD = !!(DD.clipPlane2 ?? zD.clipPlane2),
        KD = !!(DD.clipPlane3 ?? zD.clipPlane3),
        rD = !!(DD.clipPlane4 ?? zD.clipPlane4),
        LD = !!(DD.clipPlane5 ?? zD.clipPlane5),
        cD = !!(DD.clipPlane6 ?? zD.clipPlane6);
      pD && wD.push("#define CLIPPLANE"), sD && wD.push("#define CLIPPLANE2"), KD && wD.push("#define CLIPPLANE3"), rD && wD.push("#define CLIPPLANE4"), LD && wD.push("#define CLIPPLANE5"), cD && wD.push("#define CLIPPLANE6")
    }

    function LD(DD, zD, wD) {
      let pD = !1;
      const sD = !!(DD.clipPlane ?? zD.clipPlane),
        KD = !!(DD.clipPlane2 ?? zD.clipPlane2),
        rD = !!(DD.clipPlane3 ?? zD.clipPlane3),
        LD = !!(DD.clipPlane4 ?? zD.clipPlane4),
        cD = !!(DD.clipPlane5 ?? zD.clipPlane5),
        gD = !!(DD.clipPlane6 ?? zD.clipPlane6);
      return wD.CLIPPLANE !== sD && (wD.CLIPPLANE = sD, pD = !0), wD.CLIPPLANE2 !== KD && (wD.CLIPPLANE2 = KD, pD = !0), wD.CLIPPLANE3 !== rD && (wD.CLIPPLANE3 = rD, pD = !0), wD.CLIPPLANE4 !== LD && (wD.CLIPPLANE4 = LD, pD = !0), wD.CLIPPLANE5 !== cD && (wD.CLIPPLANE5 = cD, pD = !0), wD.CLIPPLANE6 !== gD && (wD.CLIPPLANE6 = gD, pD = !0), pD
    }

    function cD(DD, zD, wD) {
      let pD = zD.clipPlane ?? wD.clipPlane;
      gD(DD, "vClipPlane", pD), pD = zD.clipPlane2 ?? wD.clipPlane2, gD(DD, "vClipPlane2", pD), pD = zD.clipPlane3 ?? wD.clipPlane3, gD(DD, "vClipPlane3", pD), pD = zD.clipPlane4 ?? wD.clipPlane4, gD(DD, "vClipPlane4", pD), pD = zD.clipPlane5 ?? wD.clipPlane5, gD(DD, "vClipPlane5", pD), pD = zD.clipPlane6 ?? wD.clipPlane6, gD(DD, "vClipPlane6", pD)
    }

    function gD(DD, zD, wD) {
      if (wD) {
        const KD = pD.e.Ul()?.floatingOriginOffset || sD.s.ZeroReadOnly;
        DD.setFloat4(zD, wD.normal.x, wD.normal.y, wD.normal.z, wD.d + sD.s.Dot(wD.normal, KD))
      }
    }
  },
  40278: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    class pD {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(DD, zD) {
        this._defines[DD] || (DD < this._currentRank && (this._currentRank = DD), DD > this._maxRank && (this._maxRank = DD), this._defines[DD] = new Array), this._defines[DD].push(zD)
      }
      addCPUSkinningFallback(DD, zD) {
        this._mesh = zD, DD < this._currentRank && (this._currentRank = DD), DD > this._maxRank && (this._maxRank = DD)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(DD, zD) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, DD = DD.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), zD._bonesComputationForcedToCPU = !0;
          const wD = this._mesh.Ul();
          for (let DD = 0; DD < wD.meshes.length; DD++) {
            const pD = wD.meshes[DD];
            if (pD.material) {
              if (pD.computeBonesUsingShaders && 0 !== pD.numBoneInfluencers)
                if (pD.material.getEffect() === zD) pD.computeBonesUsingShaders = !1;
                else if (pD.QE)
                for (const DD of pD.QE) {
                  if (DD.effect === zD) {
                    pD.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && pD.computeBonesUsingShaders && pD.numBoneInfluencers > 0 && (pD.computeBonesUsingShaders = !1)
          }
        } else {
          const zD = this._defines[this._currentRank];
          if (zD)
            for (let wD = 0; wD < zD.length; wD++) DD = DD.replace("#define " + zD[wD], "");
          this._currentRank++
        }
        return DD
      }
    }
  },
  40220: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => nD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(40027),
      rD = wD(37119),
      LD = wD(37110),
      cD = wD(40224),
      gD = wD(40055),
      RD = wD(38662),
      AD = wD(37754),
      UD = wD(40249),
      fD = wD(39939);
    let ID = (() => {
      var DD;
      let zD, wD, KD, rD, LD, cD, gD, RD, AD, UD, ID, BD, GD = [];
      return DD = class {
        constructor() {
          this._func = (0, pD.m)(this, GD), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(DD) {
          this._func = DD
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(DD) {
          this._backFunc = DD
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(DD) {
          this._funcRef = DD
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(DD) {
          this._funcMask = DD
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(DD) {
          this._opStencilFail = DD
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(DD) {
          this._opDepthFail = DD
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(DD) {
          this._opStencilDepthPass = DD
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(DD) {
          this._backOpStencilFail = DD
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(DD) {
          this._backOpDepthFail = DD
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(DD) {
          this._backOpStencilDepthPass = DD
        }
        get mask() {
          return this._mask
        }
        set mask(DD) {
          this._mask = DD
        }
        get enabled() {
          return this._enabled
        }
        set enabled(DD) {
          this._enabled = DD
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(DD) {
          fD.d.Clone((() => DD), this)
        }
        serialize() {
          return fD.d.Serialize(this)
        }
        parse(DD, zD, wD) {
          fD.d.Parse((() => this), DD, zD, wD)
        }
      }, (() => {
        const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], rD = [(0, sD.C)()], LD = [(0, sD.C)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], RD = [(0, sD.C)()], AD = [(0, sD.C)()], UD = [(0, sD.C)()], ID = [(0, sD.C)()], BD = [(0, sD.C)()], (0, pD.i)(DD, null, zD, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: DD => "func" in DD,
            get: DD => DD.func
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, wD, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: DD => "backFunc" in DD,
            get: DD => DD.backFunc
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, KD, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: DD => "funcRef" in DD,
            get: DD => DD.funcRef
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, rD, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "funcMask" in DD,
            get: DD => DD.funcMask
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, LD, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "opStencilFail" in DD,
            get: DD => DD.opStencilFail
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, cD, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "opDepthFail" in DD,
            get: DD => DD.opDepthFail
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, gD, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: DD => "opStencilDepthPass" in DD,
            get: DD => DD.opStencilDepthPass
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, RD, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "backOpStencilFail" in DD,
            get: DD => DD.backOpStencilFail
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, AD, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "backOpDepthFail" in DD,
            get: DD => DD.backOpDepthFail
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, UD, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: DD => "backOpStencilDepthPass" in DD,
            get: DD => DD.backOpStencilDepthPass
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, ID, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: DD => "mask" in DD,
            get: DD => DD.mask
          },
          metadata: fD
        }, null, GD), (0, pD.i)(DD, null, BD, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "enabled" in DD,
            get: DD => DD.enabled
          },
          metadata: fD
        }, null, GD), fD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fD
        })
      })(), DD
    })();
    var BD = wD(40254),
      GD = wD(39843),
      hD = wD(39808);
    let nD = (() => {
      var DD;
      let zD, wD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, SD, iD, lD, WD, ND, ZD, yD, kD, mD, eD, oD, aD = [],
        uD = [],
        vD = [],
        tD = [],
        FD = [],
        YD = [],
        HD = [],
        qD = [],
        Dz = [],
        zz = [],
        wz = [],
        pz = [],
        sz = [],
        Kz = [],
        rz = [],
        Lz = [],
        cz = [],
        gz = [],
        Rz = [],
        Az = [],
        Uz = [],
        fz = [],
        Iz = [],
        Bz = [],
        Gz = [],
        hz = [],
        nz = [],
        Mz = [],
        Oz = [],
        Jz = [],
        Ez = [],
        Qz = [],
        Xz = [],
        Vz = [],
        Pz = [],
        Cz = [],
        xz = [],
        Tz = [],
        bz = [],
        jz = [],
        dz = [],
        Sz = [],
        iz = [],
        lz = [],
        Wz = [],
        Nz = [],
        Zz = [],
        yz = [],
        kz = [],
        mz = [],
        ez = [];
      return DD = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(zD) {
          this._useVertexPulling !== zD && (this._useVertexPulling = zD, this.vzD(DD.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(DD) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(zD) {
          if (this._alpha === zD) return;
          const wD = this._alpha;
          this._alpha = zD, 1 !== wD && 1 !== zD || this.vzD(DD.MiscDirtyFlag + DD.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(zD) {
          this._backFaceCulling !== zD && (this._backFaceCulling = zD, this.vzD(DD.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(zD) {
          const wD = Math.max(0, Math.min(0 | zD, 4));
          this._textureRepetitionMode !== wD && (this._textureRepetitionMode = wD, this.vzD(DD.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(zD) {
          this._cullBackFaces !== zD && (this._cullBackFaces = zD, this.vzD(DD.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(DD) {
          this._blockDirtyMechanism !== DD && (this._blockDirtyMechanism = DD, DD || this.markDirty())
        }
        atomicMaterialsUpdate(DD) {
          this.blockDirtyMechanism = !0;
          try {
            DD(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(DD) {
          this._onDisposeObserver && this.Bl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bl.add(DD)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new rD.b), this._onBindObservable
        }
        set onBind(DD) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(DD)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new rD.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new rD.b), this._onEffectCreatedObservable
        }
        set alphaMode(DD) {
          this._alphaMode[0] = DD
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[wD] !== zD && (this._alphaMode[wD] = zD, this.vzD(DD.TextureDirtyFlag))
        }
        set needDepthPrePass(DD) {
          this._needDepthPrePass !== DD && (this._needDepthPrePass = DD, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(zD) {
          this._fogEnabled !== zD && (this._fogEnabled = zD, this.vzD(DD.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case DD.WireFrameFillMode:
            case DD.LineListDrawMode:
            case DD.LineLoopDrawMode:
            case DD.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(zD) {
          this.fillMode = zD ? DD.WireFrameFillMode : DD.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case DD.PointFillMode:
            case DD.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(zD) {
          this.fillMode = zD ? DD.PointFillMode : DD.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(zD) {
          this._fillMode !== zD && (this._fillMode = zD, this.vzD(DD.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(DD) {
          const zD = this.Ul().iI().getCaps().fragmentDepthSupported;
          DD && !zD && RD.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = DD && zD, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(DD) {
          this._isVertexOutputInvariant !== DD && (this._isVertexOutputInvariant = DD, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(DD) {
          this._drawWrapper = DD
        }
        constructor(zD, wD, sD) {
          let cD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, pD.m)(this, aD), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, pD.m)(this, uD, void 0), this.uniqueId = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, void 0)), this._loadedUniqueId = (0, pD.m)(this, FD), this.name = (0, pD.m)(this, YD, void 0), this.metadata = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, null)), this._internalMetadata = (0, pD.m)(this, Dz), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, pD.m)(this, zz, !1), this.checkReadyOnlyOnce = ((0, pD.m)(this, wz), (0, pD.m)(this, pz, !1)), this.state = ((0, pD.m)(this, sz), (0, pD.m)(this, Kz, "")), this._alpha = ((0, pD.m)(this, rz), (0, pD.m)(this, Lz, 1)), this.inspectableCustomProperties = (0, pD.m)(this, cz), this._backFaceCulling = (0, pD.m)(this, gz, !0), this._textureRepetitionMode = ((0, pD.m)(this, Rz), (0, pD.m)(this, Az, 0)), this.textureRepetitionHexTilingParams = ((0, pD.m)(this, Uz), (0, pD.m)(this, fz, [1, .6, 7, .5])), this._cullBackFaces = ((0, pD.m)(this, Iz), (0, pD.m)(this, Bz, !0)), this._blockDirtyMechanism = ((0, pD.m)(this, Gz), !1), this.sideOrientation = (0, pD.m)(this, hz, null), this.onCompiled = ((0, pD.m)(this, nz), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Bl = new rD.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, pD.m)(this, Mz, [2]), this._needDepthPrePass = ((0, pD.m)(this, Oz), (0, pD.m)(this, Jz, !1)), this.disableDepthWrite = ((0, pD.m)(this, Ez), (0, pD.m)(this, Qz, !1)), this.disableColorWrite = ((0, pD.m)(this, Xz), (0, pD.m)(this, Vz, !1)), this.forceDepthWrite = ((0, pD.m)(this, Pz), (0, pD.m)(this, Cz, !1)), this.depthFunction = ((0, pD.m)(this, xz), (0, pD.m)(this, Tz, 0)), this.separateCullingPass = ((0, pD.m)(this, bz), (0, pD.m)(this, jz, !1)), this._fogEnabled = ((0, pD.m)(this, dz), (0, pD.m)(this, Sz, !0)), this.pointSize = ((0, pD.m)(this, iz), (0, pD.m)(this, lz, 1)), this.zOffset = ((0, pD.m)(this, Wz), (0, pD.m)(this, Nz, 0)), this.zOffsetUnits = ((0, pD.m)(this, Zz), (0, pD.m)(this, yz, 0)), this.clipPlane = (0, pD.m)(this, kz), this.stencil = new ID, this._isVertexOutputInvariant = (0, pD.m)(this, mz, DD.ForceVertexOutputInvariant), this._materialContext = (0, pD.m)(this, ez), this._useUBO = !1, this._fillMode = DD.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = zD;
          const RD = wD || LD.d.LastCreatedScene;
          RD && (this._scene = RD, this._dirtyCallbacks = {}, this._forceGLSL = cD, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = zD || KD.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.iI().createMaterialContext(), this._drawWrapper = new UD.e(this._scene.iI(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new gD.e(this._scene.iI(), void 0, void 0, zD), this._useUBO = this.Ul().iI().supportsUniformBuffers, this._createUniformBuffer(), sD || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), DD.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const DD = this.Ul().iI();
          this._uniformBuffer?.dispose(), DD.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new gD.e(DD, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new gD.e(this._scene.iI(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(DD) {
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
        isReady(DD, zD) {
          return !0
        }
        isReadyForSubMesh(DD, zD, wD) {
          const pD = zD.materialDefines;
          return !!pD && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = pD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Ul() {
          return this._scene
        }
        _getEffectiveOrientation(DD) {
          return null !== this.sideOrientation ? this.sideOrientation : DD.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(DD) {
          this._transparencyMode = DD
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === DD.MATERIAL_ALPHABLEND || this._transparencyMode === DD.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === DD.MATERIAL_ALPHATEST || this._transparencyMode === DD.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === DD.MATERIAL_OPAQUE || this._transparencyMode === DD.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(DD) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : DD.visibility < 1 || !this._disableAlphaBlending && (DD.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(DD) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(DD) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const wD = this.Ul().meshes;
          for (const DD of wD)
            if (DD.QE)
              for (const wD of DD.QE)
                if (wD.yI() === this)
                  for (const DD of wD._drawWrappers) DD && this._materialContext === DD.materialContext && (DD._wasPreviouslyReady = !1, DD._wasPreviouslyUsingInstances = null, DD._forceRebindOnNextCall = zD);
          zD && this.vzD(DD.AllDirtyFlag)
        }
        _preBind(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const pD = this._scene.iI(),
            sD = (null == wD ? this.sideOrientation : wD) === DD.ClockWiseSideOrientation,
            KD = zD || this._getDrawWrapper();
          return (0, GD.b)(KD) && KD.materialContext && (KD.materialContext.useVertexPulling = this.useVertexPulling), pD.enableEffect(KD), pD.setState(this.backFaceCulling, this.zOffset, !1, sD, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), sD
        }
        bind(DD, zD) {}
        buildUniformLayout() {
          const DD = this._uniformBuffer;
          this._eventInfo.ubo = DD, this._callbackPluginEventGeneric(8, this._eventInfo), DD.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(DD, zD, wD) {
          const pD = wD._drawWrapper;
          this._eventInfo.subMesh = wD, this._callbackPluginEventBindForSubMesh(this._eventInfo), pD._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(DD) {}
        bindView(DD) {
          this._useUBO ? this._needToBindSceneUbo = !0 : DD.setMatrix("view", this.Ul().getViewMatrix())
        }
        bindViewProjection(DD) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (DD.setMatrix("viewProjection", this.Ul().getTransformMatrix()), DD.setMatrix("projection", this.Ul().getProjectionMatrix()), DD.setMatrix("inverseProjection", this.Ul().getInverseProjectionMatrix()))
        }
        bindEyePosition(DD, zD) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(DD, zD)
        }
        _afterBind(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && zD && (this._needToBindSceneUbo = !1, (0, BD.v)(zD, this.Ul().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = DD ? DD.visibility : 1, this._onBindObservable && DD && this._onBindObservable.notifyObservers(DD), this.disableDepthWrite) {
            const DD = this._scene.iI();
            this._cachedDepthWriteState = DD.getDepthWrite(), DD.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const DD = this._scene.iI();
            this._cachedColorWriteState = DD.getColorWrite(), DD.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const DD = this._scene.iI();
            this._cachedDepthFunctionState = DD.getDepthFunction() || 0, DD.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.iI().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.iI().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.iI().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(DD) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = DD, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(DD) {
          return null
        }
        _clonePlugins(zD, wD) {
          const pD = {};
          if (this._serializePlugins(pD), DD._ParsePlugins(pD, zD, this._scene, wD), this.pluginManager)
            for (const DD of this.pluginManager._plugins) {
              const wD = zD.pluginManager.getPlugin(DD.name);
              wD && DD.copyTo(wD)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const DD = [];
            for (const zD in this.meshMap) {
              const wD = this.meshMap[zD];
              wD && DD.push(wD)
            }
            return DD
          }
          return this._scene.meshes.filter((DD => DD.material === this))
        }
        forceCompilation(DD, zD, wD, pD) {
          const sD = {
              clipPlane: !1,
              useInstances: !1,
              ...wD
            },
            KD = this.Ul(),
            rD = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const LD = () => {
            if (!this._scene || !this._scene.iI()) return;
            const wD = KD.clipPlane;
            if (sD.clipPlane && (KD.clipPlane = new AD.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let wD = !0,
                KD = null;
              if (DD.QE) {
                const zD = new cD.b(0, 0, 0, 0, 0, DD, void 0, !1, !1);
                zD.materialDefines && (zD.materialDefines._renderId = -1), this.isReadyForSubMesh(DD, zD, sD.useInstances) || (zD.effect && zD.effect.getCompilationError() && zD.effect.allFallbacksProcessed() ? KD = zD.effect.getCompilationError() : (wD = !1, setTimeout(LD, 16)))
              }
              wD && (this.allowShaderHotSwapping = rD, KD && pD && pD(KD), zD && zD(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = rD, zD && zD(this)) : setTimeout(LD, 16);
            sD.clipPlane && (KD.clipPlane = wD)
          };
          LD()
        }
        async forceCompilationAsync(DD, zD) {
          return await new Promise(((wD, pD) => {
            this.forceCompilation(DD, (() => {
              wD()
            }), zD, (DD => {
              pD(DD)
            }))
          }))
        }
        vzD(zD) {
          this.Ul().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (DD._DirtyCallbackArray.length = 0, zD & DD.ImageProcessingDirtyFlag && DD._DirtyCallbackArray.push(DD._ImageProcessingDirtyCallBack), zD & DD.TextureDirtyFlag && DD._DirtyCallbackArray.push(DD._TextureDirtyCallBack), zD & DD.LightDirtyFlag && DD._DirtyCallbackArray.push(DD._LightsDirtyCallBack), zD & DD.FresnelDirtyFlag && DD._DirtyCallbackArray.push(DD._FresnelDirtyCallBack), zD & DD.AttributesDirtyFlag && DD._DirtyCallbackArray.push(DD._AttributeDirtyCallBack), zD & DD.MiscDirtyFlag && DD._DirtyCallbackArray.push(DD._MiscDirtyCallBack), zD & DD.PrePassDirtyFlag && DD._DirtyCallbackArray.push(DD._PrePassDirtyCallBack), DD._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(DD._RunDirtyCallBacks), this.Ul().resetCachedMaterial())
        }
        resetDrawCache() {
          const DD = this.Ul().meshes;
          for (const zD of DD)
            if (zD.QE)
              for (const DD of zD.QE) DD.yI() === this && DD.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(DD) {
          const zD = this.Ul();
          if (zD.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const wD = zD.meshes;
          for (const pD of wD)
            if (pD.QE)
              for (const wD of pD.QE) {
                if ((wD.yI() || (zD._hasDefaultMaterial ? zD.defaultMaterial : null)) === this)
                  for (const zD of wD._drawWrappers) zD && zD.defines && zD.defines.markAllAsDirty && this._materialContext === zD.materialContext && DD(zD.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Ul().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const DD = this.Ul().enablePrePassRenderer();
          DD && DD.vzD()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(DD._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(DD._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(DD._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(DD._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(DD._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(DD._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(DD._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(DD._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(DD._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(DD._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const DD = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Bl.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(DD)
            }))
          }
        }
        setPrePassRenderer(DD) {
          return !1
        }
        dispose(DD, zD, wD) {
          const pD = this.Ul();
          if (pD.stopAnimation(this), pD.freeProcessedMaterials(), pD.removeMaterial(this), this._eventInfo.forceDisposeTextures = zD, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const DD = this._parentContainer.materials.indexOf(this);
            DD > -1 && this._parentContainer.materials.splice(DD, 1), this._parentContainer = null
          }
          if (!0 !== wD)
            if (this.meshMap)
              for (const sD in this.meshMap) {
                const DD = this.meshMap[sD];
                this._disposeMeshResources(DD)
              } else {
                const DD = pD.meshes;
                for (const zD of DD) this._disposeMeshResources(zD)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Bl.notifyObservers(this), this.Bl.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(DD) {
          if (!DD) return;
          const zD = DD.geometry,
            wD = DD._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (DD.QE && wD)
              for (const pD of DD.QE) {
                const DD = pD._drawWrappers;
                for (let sD = 0; sD < DD.length; sD++) {
                  const KD = DD[sD]?.effect;
                  if (!KD) continue;
                  wD[sD] === this && (zD?._releaseVertexArrayObject(KD), pD._removeDrawWrapper(sD, !0, !0))
                }
              }
          } else zD?._releaseVertexArrayObject(this._drawWrapper.effect);
          DD.material !== this || DD.nsD || (DD.material = null)
        }
        serialize() {
          const DD = fD.d.Serialize(this);
          return DD.stencil = this.stencil.serialize(), DD.uniqueId = this.uniqueId, this._serializePlugins(DD), DD
        }
        _serializePlugins(DD) {
          if (DD.plugins = {}, this.pluginManager)
            for (const zD of this.pluginManager._plugins) zD.doNotSerialize || (DD.plugins[zD.getClassName()] = zD.serialize())
        }
        static ParseAlphaMode(DD, zD) {
          void 0 !== DD._alphaMode ? zD._alphaMode = Array.isArray(DD._alphaMode) ? [...DD._alphaMode] : [DD._alphaMode] : void 0 !== DD.alphaMode ? zD._alphaMode = Array.isArray(DD.alphaMode) ? [...DD.alphaMode] : [DD.alphaMode] : zD._alphaMode = [2]
        }
        static Parse(zD, wD, pD) {
          if (zD.customType) {
            if ("BABYLON.PBRMaterial" === zD.customType && zD.overloadedAlbedo && (zD.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return RD.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else zD.customType = "BABYLON.StandardMaterial";
          const sD = KD.h.Instantiate(zD.customType).Parse(zD, wD, pD);
          return sD._loadedUniqueId = zD.uniqueId, DD.ParseAlphaMode(zD, sD), sD
        }
        static _ParsePlugins(DD, zD, wD, pD) {
          if (DD.plugins)
            for (const sD in DD.plugins) {
              const rD = DD.plugins[sD];
              let LD = zD.pluginManager?.getPlugin(rD.name);
              if (!LD) {
                const DD = KD.h.Instantiate("BABYLON." + sD);
                DD && (LD = new DD(zD))
              }
              LD?.parse(rD, wD, pD)
            }
        }
      }, (() => {
        const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, sD.C)()], wD = [(0, sD.C)()], hD = [(0, sD.C)()], nD = [(0, sD.C)()], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)("alpha")], QD = [(0, sD.C)("backFaceCulling")], XD = [(0, sD.C)("textureRepetitionMode")], VD = [(0, sD.C)("textureRepetitionHexTilingParams")], PD = [(0, sD.C)("cullBackFaces")], CD = [(0, sD.C)()], xD = [(0, sD.C)()], TD = [(0, sD.C)()], bD = [(0, sD.C)()], jD = [(0, sD.C)()], dD = [(0, sD.C)()], SD = [(0, sD.C)()], iD = [(0, sD.C)()], lD = [(0, sD.C)("fogEnabled")], WD = [(0, sD.C)()], ND = [(0, sD.C)()], ZD = [(0, sD.C)()], yD = [(0, sD.C)()], kD = [(0, sD.C)()], mD = [(0, sD.C)()], eD = [(0, sD.C)()], oD = [(0, sD.C)()], (0, pD.i)(DD, null, yD, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: DD => "pointsCloud" in DD,
            get: DD => DD.pointsCloud
          },
          metadata: KD
        }, null, aD), (0, pD.i)(DD, null, kD, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "fillMode" in DD,
            get: DD => DD.fillMode
          },
          metadata: KD
        }, null, aD), (0, pD.i)(DD, null, mD, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLogarithmicDepth" in DD,
            get: DD => DD.useLogarithmicDepth
          },
          metadata: KD
        }, null, aD), (0, pD.i)(DD, null, oD, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "transparencyMode" in DD,
            get: DD => DD.transparencyMode
          },
          metadata: KD
        }, null, aD), (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: DD => "id" in DD,
            get: DD => DD.id,
            set: (DD, zD) => {
              DD.id = zD
            }
          },
          metadata: KD
        }, uD, vD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: DD => "uniqueId" in DD,
            get: DD => DD.uniqueId,
            set: (DD, zD) => {
              DD.uniqueId = zD
            }
          },
          metadata: KD
        }, tD, FD), (0, pD.i)(null, null, hD, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: DD => "name" in DD,
            get: DD => DD.name,
            set: (DD, zD) => {
              DD.name = zD
            }
          },
          metadata: KD
        }, YD, HD), (0, pD.i)(null, null, nD, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: DD => "metadata" in DD,
            get: DD => DD.metadata,
            set: (DD, zD) => {
              DD.metadata = zD
            }
          },
          metadata: KD
        }, qD, Dz), (0, pD.i)(null, null, MD, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: DD => "checkReadyOnEveryCall" in DD,
            get: DD => DD.checkReadyOnEveryCall,
            set: (DD, zD) => {
              DD.checkReadyOnEveryCall = zD
            }
          },
          metadata: KD
        }, zz, wz), (0, pD.i)(null, null, OD, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: DD => "checkReadyOnlyOnce" in DD,
            get: DD => DD.checkReadyOnlyOnce,
            set: (DD, zD) => {
              DD.checkReadyOnlyOnce = zD
            }
          },
          metadata: KD
        }, pz, sz), (0, pD.i)(null, null, JD, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: DD => "state" in DD,
            get: DD => DD.state,
            set: (DD, zD) => {
              DD.state = zD
            }
          },
          metadata: KD
        }, Kz, rz), (0, pD.i)(null, null, ED, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "_alpha" in DD,
            get: DD => DD._alpha,
            set: (DD, zD) => {
              DD._alpha = zD
            }
          },
          metadata: KD
        }, Lz, cz), (0, pD.i)(null, null, QD, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: DD => "_backFaceCulling" in DD,
            get: DD => DD._backFaceCulling,
            set: (DD, zD) => {
              DD._backFaceCulling = zD
            }
          },
          metadata: KD
        }, gz, Rz), (0, pD.i)(null, null, XD, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_textureRepetitionMode" in DD,
            get: DD => DD._textureRepetitionMode,
            set: (DD, zD) => {
              DD._textureRepetitionMode = zD
            }
          },
          metadata: KD
        }, Az, Uz), (0, pD.i)(null, null, VD, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: DD => "textureRepetitionHexTilingParams" in DD,
            get: DD => DD.textureRepetitionHexTilingParams,
            set: (DD, zD) => {
              DD.textureRepetitionHexTilingParams = zD
            }
          },
          metadata: KD
        }, fz, Iz), (0, pD.i)(null, null, PD, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: DD => "_cullBackFaces" in DD,
            get: DD => DD._cullBackFaces,
            set: (DD, zD) => {
              DD._cullBackFaces = zD
            }
          },
          metadata: KD
        }, Bz, Gz), (0, pD.i)(null, null, CD, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: DD => "sideOrientation" in DD,
            get: DD => DD.sideOrientation,
            set: (DD, zD) => {
              DD.sideOrientation = zD
            }
          },
          metadata: KD
        }, hz, nz), (0, pD.i)(null, null, xD, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_alphaMode" in DD,
            get: DD => DD._alphaMode,
            set: (DD, zD) => {
              DD._alphaMode = zD
            }
          },
          metadata: KD
        }, Mz, Oz), (0, pD.i)(null, null, TD, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: DD => "_needDepthPrePass" in DD,
            get: DD => DD._needDepthPrePass,
            set: (DD, zD) => {
              DD._needDepthPrePass = zD
            }
          },
          metadata: KD
        }, Jz, Ez), (0, pD.i)(null, null, bD, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableDepthWrite" in DD,
            get: DD => DD.disableDepthWrite,
            set: (DD, zD) => {
              DD.disableDepthWrite = zD
            }
          },
          metadata: KD
        }, Qz, Xz), (0, pD.i)(null, null, jD, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableColorWrite" in DD,
            get: DD => DD.disableColorWrite,
            set: (DD, zD) => {
              DD.disableColorWrite = zD
            }
          },
          metadata: KD
        }, Vz, Pz), (0, pD.i)(null, null, dD, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceDepthWrite" in DD,
            get: DD => DD.forceDepthWrite,
            set: (DD, zD) => {
              DD.forceDepthWrite = zD
            }
          },
          metadata: KD
        }, Cz, xz), (0, pD.i)(null, null, SD, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: DD => "depthFunction" in DD,
            get: DD => DD.depthFunction,
            set: (DD, zD) => {
              DD.depthFunction = zD
            }
          },
          metadata: KD
        }, Tz, bz), (0, pD.i)(null, null, iD, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: DD => "separateCullingPass" in DD,
            get: DD => DD.separateCullingPass,
            set: (DD, zD) => {
              DD.separateCullingPass = zD
            }
          },
          metadata: KD
        }, jz, dz), (0, pD.i)(null, null, lD, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "_fogEnabled" in DD,
            get: DD => DD._fogEnabled,
            set: (DD, zD) => {
              DD._fogEnabled = zD
            }
          },
          metadata: KD
        }, Sz, iz), (0, pD.i)(null, null, WD, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: DD => "pointSize" in DD,
            get: DD => DD.pointSize,
            set: (DD, zD) => {
              DD.pointSize = zD
            }
          },
          metadata: KD
        }, lz, Wz), (0, pD.i)(null, null, ND, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: DD => "zOffset" in DD,
            get: DD => DD.zOffset,
            set: (DD, zD) => {
              DD.zOffset = zD
            }
          },
          metadata: KD
        }, Nz, Zz), (0, pD.i)(null, null, ZD, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: DD => "zOffsetUnits" in DD,
            get: DD => DD.zOffsetUnits,
            set: (DD, zD) => {
              DD.zOffsetUnits = zD
            }
          },
          metadata: KD
        }, yz, kz), (0, pD.i)(null, null, eD, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: DD => "_isVertexOutputInvariant" in DD,
            get: DD => DD._isVertexOutputInvariant,
            set: (DD, zD) => {
              DD._isVertexOutputInvariant = zD
            }
          },
          metadata: KD
        }, mz, ez), KD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KD
        })
      })(), DD.TriangleFillMode = 0, DD.WireFrameFillMode = 1, DD.PointFillMode = 2, DD.PointListDrawMode = 3, DD.LineListDrawMode = 4, DD.LineLoopDrawMode = 5, DD.LineStripDrawMode = 6, DD.TriangleStripDrawMode = 7, DD.TriangleFanDrawMode = 8, DD.ClockWiseSideOrientation = 0, DD.CounterClockWiseSideOrientation = 1, DD.ImageProcessingDirtyFlag = 64, DD.TextureDirtyFlag = 1, DD.LightDirtyFlag = 2, DD.FresnelDirtyFlag = 4, DD.AttributesDirtyFlag = 8, DD.MiscDirtyFlag = 16, DD.PrePassDirtyFlag = 32, DD.AllDirtyFlag = 127, DD.MATERIAL_OPAQUE = 0, DD.MATERIAL_ALPHATEST = 1, DD.MATERIAL_ALPHABLEND = 2, DD.MATERIAL_ALPHATESTANDBLEND = 3, DD.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, DD.MATERIAL_NORMALBLENDMETHOD_RNM = 1, DD.LIGHTFALLOFF_PHYSICAL = 0, DD.LIGHTFALLOFF_GLTF = 1, DD.LIGHTFALLOFF_STANDARD = 2, DD.OnEventObservable = new rD.b, DD.ForceVertexOutputInvariant = !1, DD._AllDirtyCallBack = DD => DD.markAllAsDirty(), DD._ImageProcessingDirtyCallBack = DD => DD.markAsImageProcessingDirty(), DD._TextureDirtyCallBack = DD => DD.markAsTexturesDirty(), DD._FresnelDirtyCallBack = DD => DD.markAsFresnelDirty(), DD._MiscDirtyCallBack = DD => DD.markAsMiscDirty(), DD._PrePassDirtyCallBack = DD => DD.markAsPrePassDirty(), DD._LightsDirtyCallBack = DD => DD.markAsLightDirty(), DD._AttributeDirtyCallBack = DD => DD.markAsAttributesDirty(), DD._FresnelAndMiscDirtyCallBack = zD => {
        DD._FresnelDirtyCallBack(zD), DD._MiscDirtyCallBack(zD)
      }, DD._TextureAndMiscDirtyCallBack = zD => {
        DD._TextureDirtyCallBack(zD), DD._MiscDirtyCallBack(zD)
      }, DD._DirtyCallbackArray = [], DD._RunDirtyCallBacks = zD => {
        for (const wD of DD._DirtyCallbackArray) wD(zD)
      }, DD
    })();
    Object.getOwnPropertyDescriptor(nD.prototype, "pluginManager") || Object.defineProperty(nD.prototype, "pluginManager", (0, hD.g)("Material", "pluginManager"))
  },
  40266: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    var pD = wD(39826);
    class sD {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(DD) {
        this._DiffuseTextureEnabled !== DD && (this._DiffuseTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(DD) {
        this._BaseWeightTextureEnabled !== DD && (this._BaseWeightTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(DD) {
        this._BaseDiffuseRoughnessTextureEnabled !== DD && (this._BaseDiffuseRoughnessTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(DD) {
        this._DetailTextureEnabled !== DD && (this._DetailTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(DD) {
        this._DecalMapEnabled !== DD && (this._DecalMapEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(DD) {
        this._AmbientTextureEnabled !== DD && (this._AmbientTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(DD) {
        this._OpacityTextureEnabled !== DD && (this._OpacityTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(DD) {
        this._ReflectionTextureEnabled !== DD && (this._ReflectionTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(DD) {
        this._EmissiveTextureEnabled !== DD && (this._EmissiveTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(DD) {
        this._SpecularTextureEnabled !== DD && (this._SpecularTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(DD) {
        this._BumpTextureEnabled !== DD && (this._BumpTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(DD) {
        this._LightmapTextureEnabled !== DD && (this._LightmapTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(DD) {
        this._RefractionTextureEnabled !== DD && (this._RefractionTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(DD) {
        this._ColorGradingTextureEnabled !== DD && (this._ColorGradingTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(DD) {
        this._FresnelEnabled !== DD && (this._FresnelEnabled = DD, pD.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(DD) {
        this._ClearCoatTextureEnabled !== DD && (this._ClearCoatTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(DD) {
        this._ClearCoatBumpTextureEnabled !== DD && (this._ClearCoatBumpTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(DD) {
        this._ClearCoatTintTextureEnabled !== DD && (this._ClearCoatTintTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(DD) {
        this._SheenTextureEnabled !== DD && (this._SheenTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(DD) {
        this._AnisotropicTextureEnabled !== DD && (this._AnisotropicTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(DD) {
        this._ThicknessTextureEnabled !== DD && (this._ThicknessTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(DD) {
        this._RefractionIntensityTextureEnabled !== DD && (this._RefractionIntensityTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(DD) {
        this._TranslucencyIntensityTextureEnabled !== DD && (this._TranslucencyIntensityTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(DD) {
        this._TranslucencyColorTextureEnabled !== DD && (this._TranslucencyColorTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(DD) {
        this._IridescenceTextureEnabled !== DD && (this._IridescenceTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
      }
    }
    sD._DiffuseTextureEnabled = !0, sD._BaseWeightTextureEnabled = !0, sD._BaseDiffuseRoughnessTextureEnabled = !0, sD._DetailTextureEnabled = !0, sD._DecalMapEnabled = !0, sD._AmbientTextureEnabled = !0, sD._OpacityTextureEnabled = !0, sD._ReflectionTextureEnabled = !0, sD._EmissiveTextureEnabled = !0, sD._SpecularTextureEnabled = !0, sD._BumpTextureEnabled = !0, sD._LightmapTextureEnabled = !0, sD._RefractionTextureEnabled = !0, sD._ColorGradingTextureEnabled = !0, sD._FresnelEnabled = !0, sD._ClearCoatTextureEnabled = !0, sD._ClearCoatBumpTextureEnabled = !0, sD._ClearCoatTintTextureEnabled = !0, sD._SheenTextureEnabled = !0, sD._AnisotropicTextureEnabled = !0, sD._ThicknessTextureEnabled = !0, sD._RefractionIntensityTextureEnabled = !0, sD._TranslucencyIntensityTextureEnabled = !0, sD._TranslucencyColorTextureEnabled = !0, sD._IridescenceTextureEnabled = !0
  },
  40254: (DD, zD, wD) => {
    wD.d(zD, {
      Ab: () => vD,
      D: () => TD,
      Eb: () => ID,
      G: () => JD,
      H: () => CD,
      K: () => xD,
      L: () => fD,
      O: () => UD,
      S: () => kD,
      V: () => lD,
      Z: () => SD,
      bb: () => dD,
      e: () => jD,
      eb: () => MD,
      h: () => ED,
      hb: () => bD,
      k: () => AD,
      kb: () => mD,
      m: () => hD,
      n: () => nD,
      nb: () => eD,
      p: () => PD,
      q: () => cD,
      qb: () => oD,
      s: () => BD,
      tb: () => tD,
      v: () => GD,
      xb: () => uD,
      z: () => OD
    });
    var pD = wD(38662),
      sD = wD(37110),
      KD = wD(40128),
      rD = wD(40263),
      LD = wD(40266);

    function cD(DD, zD, wD) {
      if (!DD || DD.LOGARITHMICDEPTH || DD.indexOf && DD.indexOf("LOGARITHMICDEPTH") >= 0) {
        const DD = wD.activeCamera;
        1 === DD.mode && pD.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), zD.setFloat("logarithmicDepthConstant", 2 / (Math.log(DD.maxZ + 1) / Math.LN2))
      }
    }
    const gD = {
        r: 0,
        g: 0,
        b: 0
      },
      RD = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function AD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      wD && DD.fogEnabled && (!zD || zD.applyFog) && 0 !== DD.fogMode && (wD.setFloat4("vFogInfos", DD.fogMode, DD.fogStart, DD.fogEnd, DD.fogDensity), pD ? (DD.fogColor.toLinearSpaceToRef(gD, DD.iI().useExactSrgbConversions), wD.setColor3("vFogColor", gD)) : wD.setColor3("vFogColor", DD.fogColor))
    }

    function UD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
      const AD = DD.numMaxInfluencers || DD.numInfluencers;
      return AD <= 0 ? 0 : (zD.push("#define MORPHTARGETS"), DD.hasPositions && zD.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), DD.hasNormals && zD.push("#define MORPHTARGETTEXTURE_HASNORMALS"), DD.hasTangents && zD.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), DD.hasUVs && zD.push("#define MORPHTARGETTEXTURE_HASUVS"), DD.hasUV2s && zD.push("#define MORPHTARGETTEXTURE_HASUV2S"), DD.hasColors && zD.push("#define MORPHTARGETTEXTURE_HASCOLORS"), DD.supportsPositions && sD && zD.push("#define MORPHTARGETS_POSITION"), DD.supportsNormals && KD && zD.push("#define MORPHTARGETS_NORMAL"), DD.supportsTangents && rD && zD.push("#define MORPHTARGETS_TANGENT"), DD.supportsUVs && LD && zD.push("#define MORPHTARGETS_UV"), DD.supportsUV2s && cD && zD.push("#define MORPHTARGETS_UV2"), DD.supportsColors && gD && zD.push("#define MORPHTARGETS_COLOR"), zD.push("#define NUM_MORPH_INFLUENCERS " + AD), DD.isUsingTextureForTargets && zD.push("#define MORPHTARGETS_TEXTURE"), RD.NUM_MORPH_INFLUENCERS = AD, RD.NORMAL = KD, RD.TANGENT = rD, RD.UV = LD, RD.UV2 = cD, RD.COLOR = gD, fD(wD, pD, RD, sD), AD)
    }

    function fD(DD, zD, wD) {
      let KD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const rD = wD.NUM_MORPH_INFLUENCERS;
      if (rD > 0 && sD.d.LastCreatedEngine) {
        const LD = sD.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          cD = zD.morphTargetManager;
        if (cD?.isUsingTextureForTargets) return;
        const gD = cD && cD.supportsPositions && KD,
          RD = cD && cD.supportsNormals && wD.NORMAL,
          AD = cD && cD.supportsTangents && wD.TANGENT,
          UD = cD && cD.supportsUVs && wD.UV1,
          fD = cD && cD.supportsUV2s && wD.UV2,
          ID = cD && cD.supportsColors && wD.VERTEXCOLOR;
        for (let wD = 0; wD < rD; wD++) gD && DD.push("position" + wD), RD && DD.push("normal" + wD), AD && DD.push("tangent" + wD), UD && DD.push("uv_" + wD), fD && DD.push("uv2_" + wD), ID && DD.push("color" + wD), DD.length > LD && pD.d.Error("Cannot add more vertex attributes for mesh " + zD.name)
      }
    }

    function ID(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      DD.push("world0"), DD.push("world1"), DD.push("world2"), DD.push("world3"), zD && (DD.push("previousWorld0"), DD.push("previousWorld1"), DD.push("previousWorld2"), DD.push("previousWorld3"))
    }

    function BD(DD, zD) {
      const wD = DD.morphTargetManager;
      DD && wD && zD.setFloatArray("morphTargetInfluences", wD.influences)
    }

    function GD(DD, zD) {
      zD.bindToEffect(DD, "Scene")
    }

    function hD(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        RD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        AD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        UD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (DD.texturesEnabled && sD && LD.d.ReflectionTextureEnabled) {
        if (wD.i5("reflectionMatrix", sD.getReflectionTextureMatrix()), wD.updateFloat2("vReflectionInfos", sD.level * DD.iblIntensity, UD), cD && sD.boundingBoxSize) {
          const DD = sD;
          wD.updateVector3("vReflectionPosition", DD.boundingBoxPosition), wD.updateVector3("vReflectionSize", DD.boundingBoxSize)
        }
        if (KD) {
          const DD = sD.getSize().width;
          wD.updateFloat2("vReflectionFilteringInfo", DD, Math.log2(DD))
        }
        if (RD && !zD.USEIRRADIANCEMAP) {
          const DD = sD.sphericalPolynomial;
          if (zD.USESPHERICALFROMREFLECTIONMAP && DD)
            if (zD.SPHERICAL_HARMONICS) {
              const zD = DD.preScaledHarmonics;
              wD.updateVector3("vSphericalL00", zD.l00), wD.updateVector3("vSphericalL1_1", zD.l1_1), wD.updateVector3("vSphericalL10", zD.l10), wD.updateVector3("vSphericalL11", zD.l11), wD.updateVector3("vSphericalL2_2", zD.l2_2), wD.updateVector3("vSphericalL2_1", zD.l2_1), wD.updateVector3("vSphericalL20", zD.l20), wD.updateVector3("vSphericalL21", zD.l21), wD.updateVector3("vSphericalL22", zD.l22)
            } else wD.updateFloat3("vSphericalX", DD.x.x, DD.x.y, DD.x.z), wD.updateFloat3("vSphericalY", DD.y.x, DD.y.y, DD.y.z), wD.updateFloat3("vSphericalZ", DD.z.x, DD.z.y, DD.z.z), wD.updateFloat3("vSphericalXX_ZZ", DD.xx.x - DD.zz.x, DD.xx.y - DD.zz.y, DD.xx.z - DD.zz.z), wD.updateFloat3("vSphericalYY_ZZ", DD.yy.x - DD.zz.x, DD.yy.y - DD.zz.y, DD.yy.z - DD.zz.z), wD.updateFloat3("vSphericalZZ", DD.zz.x, DD.zz.y, DD.zz.z), wD.updateFloat3("vSphericalXY", DD.xy.x, DD.xy.y, DD.xy.z), wD.updateFloat3("vSphericalYZ", DD.yz.x, DD.yz.y, DD.yz.z), wD.updateFloat3("vSphericalZX", DD.zx.x, DD.zx.y, DD.zx.z)
        } else gD && zD.USEIRRADIANCEMAP && zD.USE_IRRADIANCE_DOMINANT_DIRECTION && sD.irradianceTexture && wD.updateVector3("vReflectionDominantDirection", sD.irradianceTexture._dominantDirection);
        rD && wD.updateFloat3("vReflectionMicrosurfaceInfos", sD.getSize().width, sD.lodGenerationScale, sD.lodGenerationOffset)
      }
      AD && wD.updateColor3("vReflectionColor", pD)
    }

    function nD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (pD && LD.d.ReflectionTextureEnabled) {
        zD.LODBASEDMICROSFURACE ? wD.setTexture("reflectionSampler", pD) : (wD.setTexture("reflectionSampler", pD._lodTextureMid || pD), wD.setTexture("reflectionSamplerLow", pD._lodTextureLow || pD), wD.setTexture("reflectionSamplerHigh", pD._lodTextureHigh || pD)), zD.USEIRRADIANCEMAP && wD.setTexture("irradianceSampler", pD.irradianceTexture);
        const KD = DD.iblCdfGenerator;
        sD && KD && wD.setTexture("icdfSampler", KD.getIcdfTexture())
      }
    }

    function MD(DD, zD, wD) {
      zD._needUVs = !0, zD[wD] = !0, DD.optimizeUVAllocation && DD.getTextureMatrix().isIdentityAs3x2() ? (zD[wD + "DIRECTUV"] = DD.coordinatesIndex + 1, zD["MAINUV" + (DD.coordinatesIndex + 1)] = !0) : zD[wD + "DIRECTUV"] = 0
    }

    function OD(DD, zD, wD) {
      const pD = DD.getTextureMatrix();
      zD.i5(wD + "Matrix", pD)
    }

    function JD(DD, zD, wD) {
      wD.BAKED_VERTEX_ANIMATION_TEXTURE && wD.INSTANCES && DD.push("bakedVertexAnimationSettingsInstanced")
    }

    function ED(DD, zD, wD) {
      var pD;
      if (zD && DD && (DD.computeBonesUsingShaders && zD._bonesComputationForcedToCPU && (DD.computeBonesUsingShaders = !1), DD.useBones && DD.computeBonesUsingShaders && DD.skeleton)) {
        const sD = DD.skeleton;
        if (sD.isUsingTextureForMatrices && zD.getUniformIndex("boneTextureInfo") > -1) {
          const wD = sD.getTransformMatrixTexture(DD);
          zD.setTexture("boneSampler", wD), zD.setFloat2("boneTextureInfo", sD._textureWidth, sD._textureHeight)
        } else {
          const KD = sD.getTransformMatrices(DD);
          KD && (zD.setMatrices("mBones", KD), wD && DD.Ul().prePassRenderer && DD.Ul().prePassRenderer.getIndex(2) && (wD.previousBones[DD.uniqueId] || (wD.previousBones[DD.uniqueId] = KD.slice()), zD.setMatrices("mPreviousBones", wD.previousBones[DD.uniqueId]), pD = KD, wD.previousBones[DD.uniqueId].set(pD)))
        }
      }
    }

    function QD(DD, zD, wD, pD, sD) {
      let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      DD._bindLight(zD, wD, pD, sD, KD)
    }
    const XD = 4,
      VD = new WeakMap;

    function PD(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const KD = Math.min(zD.lightSources.length, sD);
      for (let rD = 0; rD < KD; rD++) {
        QD(zD.lightSources[rD], rD, DD, wD, "boolean" === typeof pD ? pD : pD.SPECULARTERM, zD.receiveShadows)
      }
    }

    function CD(DD, zD, wD, pD) {
      wD.NUM_BONE_INFLUENCERS > 0 && (pD.addCPUSkinningFallback(0, zD), DD.push("matricesIndices"), DD.push("matricesWeights"), wD.NUM_BONE_INFLUENCERS > 4 && (DD.push("matricesIndicesExtra"), DD.push("matricesWeightsExtra")))
    }

    function xD(DD, zD) {
      (zD.INSTANCES || zD.THIN_INSTANCES) && ID(DD, !!zD.PREPASS_VELOCITY), zD.INSTANCESCOLOR && DD.push("instanceColor")
    }

    function TD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        sD = 0;
      for (let KD = 0; KD < wD && DD["LIGHT" + KD]; KD++) KD > 0 && (sD = pD + KD, zD.addFallback(sD, "LIGHT" + KD)), DD.SHADOWS || (DD["SHADOW" + KD] && zD.addFallback(pD, "SHADOW" + KD), DD["SHADOWPCF" + KD] && zD.addFallback(pD, "SHADOWPCF" + KD), DD["SHADOWPCSS" + KD] && zD.addFallback(pD, "SHADOWPCSS" + KD), DD["SHADOWPOISSON" + KD] && zD.addFallback(pD, "SHADOWPOISSON" + KD), DD["SHADOWESM" + KD] && zD.addFallback(pD, "SHADOWESM" + KD), DD["SHADOWCLOSEESM" + KD] && zD.addFallback(pD, "SHADOWCLOSEESM" + KD));
      return sD
    }

    function bD(DD, zD, wD, pD, sD, KD, rD) {
      let LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gD = arguments.length > 9 ? arguments[9] : void 0,
        RD = arguments.length > 10 ? arguments[10] : void 0;
      if (rD._areMiscDirty) {
        rD.LOGARITHMICDEPTH = wD, rD.POINTSIZE = pD, rD.FOG = sD && function(DD, zD) {
          return zD.fogEnabled && DD.applyFog && 0 !== zD.fogMode
        }(DD, zD), rD.NONUNIFORMSCALING = DD.nonUniformScaling, rD.ALPHATEST = KD, rD.DECAL_AFTER_DETAIL = LD, rD.USE_VERTEX_PULLING = cD, rD.RIGHT_HANDED = zD.useRightHandedSystem;
        const AD = cD ? gD?.geometry?.getIndexBuffer() : null,
          UD = !!gD && gD.isUnIndexed;
        rD.VERTEX_PULLING_USE_INDEX_BUFFER = !!AD && !UD, rD.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!AD || UD) && AD.is32Bits, rD.VERTEXOUTPUT_INVARIANT = !!RD
      }
    }

    function jD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!DD.lightsEnabled || pD) return !0;
      const sD = zD.lightSources,
        KD = Math.min(sD.length, wD);
      for (let rD = 0; rD < KD; rD++)
        if (!sD[rD].areLightTexturesReady()) return !1;
      return !0
    }

    function dD(DD, zD, wD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!wD._areLightsDirty) return wD._needNormals;
      const LD = KD;
      KD = function(DD, zD) {
        const wD = DD.iI().getCaps().maxUniformBuffersPerShaderStage;
        if (null == wD) return zD;
        const pD = Math.max(wD - XD, 1);
        return Math.min(zD, pD)
      }(DD, KD);
      let cD = 0;
      const gD = {
        needNormals: wD._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (DD.lightsEnabled && !rD) {
        zD.lightSources.length > KD && KD < LD && function(DD, zD, wD, sD) {
          let KD = VD.get(DD);
          KD || (KD = new Set, VD.set(DD, KD)), KD.has(sD) || (KD.add(sD), pD.d.Warn(`maxSimultaneousLights is ${zD} but this engine supports at most ${wD} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${sD} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${sD+XD} uniform buffers, over the device limit of ${DD.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${wD}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${wD} or less to silence this warning.`))
        }(DD.iI(), LD, KD, Math.min(zD.lightSources.length, LD));
        for (const pD of zD.lightSources)
          if (iD(DD, zD, pD, cD, wD, sD, gD), cD++, cD === KD) break
      }
      wD.SPECULARTERM = gD.specularEnabled, wD.SHADOWS = gD.shadowEnabled;
      const RD = Math.max(KD, wD.MAXLIGHTCOUNT || 0);
      for (let pD = cD; pD < RD; pD++) void 0 !== wD["LIGHT" + pD] && (wD["LIGHT" + pD] = !1, wD["HEMILIGHT" + pD] = !1, wD["POINTLIGHT" + pD] = !1, wD["DIRLIGHT" + pD] = !1, wD["SPOTLIGHT" + pD] = !1, wD["AREALIGHT" + pD] = !1, wD["CLUSTLIGHT" + pD] = !1, wD["SHADOW" + pD] = !1, wD["SHADOWCSM" + pD] = !1, wD["SHADOWCSMDEBUG" + pD] = !1, wD["SHADOWCSMNUM_CASCADES" + pD] = !1, wD["SHADOWCSMUSESHADOWMAXZ" + pD] = !1, wD["SHADOWCSMNOBLEND" + pD] = !1, wD["SHADOWCSM_RIGHTHANDED" + pD] = !1, wD["SHADOWPCF" + pD] = !1, wD["SHADOWPCSS" + pD] = !1, wD["SHADOWPOISSON" + pD] = !1, wD["SHADOWESM" + pD] = !1, wD["SHADOWCLOSEESM" + pD] = !1, wD["SHADOWCUBE" + pD] = !1, wD["SHADOWLOWQUALITY" + pD] = !1, wD["SHADOWMEDIUMQUALITY" + pD] = !1);
      wD.LIGHTCOUNT = cD, wD.MAXLIGHTCOUNT = KD;
      const AD = DD.iI().getCaps();
      return void 0 === wD.SHADOWFLOAT && (gD.needRebuild = !0), wD.SHADOWFLOAT = gD.shadowEnabled && (AD.textureFloatRender && AD.textureFloatLinearFiltering || AD.textureHalfFloatRender && AD.textureHalfFloatLinearFiltering), wD.LIGHTMAPEXCLUDED = gD.lightmapMode, gD.needRebuild && wD.rebuild(), gD.needNormals
    }

    function SD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (zD && LD.d.ReflectionTextureEnabled) {
        if (!zD.isReadyOrNotBlocking()) return !1;
        wD._needNormals = !0, wD.REFLECTION = !0, wD.GAMMAREFLECTION = zD.gammaSpace, wD.RGBDREFLECTION = zD.isRGBD, wD.LODINREFLECTIONALPHA = zD.lodLevelInAlpha, wD.LINEARSPECULARREFLECTION = zD.linearSpecularLOD, wD.USEIRRADIANCEMAP = !1, wD.LODBASEDMICROSFURACE = DD.iI().getCaps().textureLOD;
        const rD = DD.iI();
        switch (pD && sD > 0 ? (wD.NUM_SAMPLES = "" + sD, rD._features.needTypeSuffixInShaderConstants && (wD.NUM_SAMPLES = wD.NUM_SAMPLES + "u"), wD.REALTIME_FILTERING = !0, DD.iblCdfGenerator && (wD.IBL_CDF_FILTERING = !0)) : wD.REALTIME_FILTERING = !1, wD.INVERTCUBICMAP = 6 === zD.coordinatesMode, wD.REFLECTIONMAP_3D = zD.isCube, wD.REFLECTIONMAP_OPPOSITEZ = wD.REFLECTIONMAP_3D && DD.useRightHandedSystem ? !zD.invertZ : zD.invertZ, wD.REFLECTIONMAP_CUBIC = !1, wD.REFLECTIONMAP_EXPLICIT = !1, wD.REFLECTIONMAP_PLANAR = !1, wD.REFLECTIONMAP_PROJECTION = !1, wD.REFLECTIONMAP_SKYBOX = !1, wD.REFLECTIONMAP_SPHERICAL = !1, wD.REFLECTIONMAP_EQUIRECTANGULAR = !1, wD.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, wD.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, zD.coordinatesMode) {
          case 0:
            wD.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            wD.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            wD.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            wD.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            wD.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            wD.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            wD.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            wD.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            wD.REFLECTIONMAP_CUBIC = !0, wD.USE_LOCAL_REFLECTIONMAP_CUBIC = !!zD.boundingBoxSize
        }
        5 !== zD.coordinatesMode && (zD.irradianceTexture ? (wD.USEIRRADIANCEMAP = !0, wD.USESPHERICALFROMREFLECTIONMAP = !1, wD.USESPHERICALINVERTEX = !1, zD.irradianceTexture._dominantDirection ? wD.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : wD.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : zD.isCube && (wD.USESPHERICALFROMREFLECTIONMAP = !0, wD.USEIRRADIANCEMAP = !1, wD.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, wD.USESPHERICALINVERTEX = KD))
      } else wD.REFLECTION = !1, wD.REFLECTIONMAP_3D = !1, wD.REFLECTIONMAP_SPHERICAL = !1, wD.REFLECTIONMAP_PLANAR = !1, wD.REFLECTIONMAP_CUBIC = !1, wD.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, wD.REFLECTIONMAP_PROJECTION = !1, wD.REFLECTIONMAP_SKYBOX = !1, wD.REFLECTIONMAP_EXPLICIT = !1, wD.REFLECTIONMAP_EQUIRECTANGULAR = !1, wD.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, wD.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, wD.INVERTCUBICMAP = !1, wD.USESPHERICALFROMREFLECTIONMAP = !1, wD.USEIRRADIANCEMAP = !1, wD.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, wD.USESPHERICALINVERTEX = !1, wD.REFLECTIONMAP_OPPOSITEZ = !1, wD.LODINREFLECTIONALPHA = !1, wD.GAMMAREFLECTION = !1, wD.RGBDREFLECTION = !1, wD.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function iD(DD, zD, wD, pD, sD, rD, LD) {
      switch (LD.needNormals = !0, void 0 === sD["LIGHT" + pD] && (LD.needRebuild = !0), sD["LIGHT" + pD] = !0, sD["SPOTLIGHT" + pD] = !1, sD["HEMILIGHT" + pD] = !1, sD["POINTLIGHT" + pD] = !1, sD["DIRLIGHT" + pD] = !1, sD["AREALIGHT" + pD] = !1, sD["CLUSTLIGHT" + pD] = !1, wD.prepareLightSpecificDefines(sD, pD), sD["LIGHT_FALLOFF_PHYSICAL" + pD] = !1, sD["LIGHT_FALLOFF_GLTF" + pD] = !1, sD["LIGHT_FALLOFF_STANDARD" + pD] = !1, wD.falloffType) {
        case KD.e.FALLOFF_GLTF:
          sD["LIGHT_FALLOFF_GLTF" + pD] = !0;
          break;
        case KD.e.FALLOFF_PHYSICAL:
          sD["LIGHT_FALLOFF_PHYSICAL" + pD] = !0;
          break;
        case KD.e.FALLOFF_STANDARD:
          sD["LIGHT_FALLOFF_STANDARD" + pD] = !0
      }
      if (rD && !wD.specular.equalsFloats(0, 0, 0) && (LD.specularEnabled = !0), sD["SHADOW" + pD] = !1, sD["SHADOWCSM" + pD] = !1, sD["SHADOWCSMDEBUG" + pD] = !1, sD["SHADOWCSMNUM_CASCADES" + pD] = !1, sD["SHADOWCSMUSESHADOWMAXZ" + pD] = !1, sD["SHADOWCSMNOBLEND" + pD] = !1, sD["SHADOWCSM_RIGHTHANDED" + pD] = !1, sD["SHADOWPCF" + pD] = !1, sD["SHADOWPCSS" + pD] = !1, sD["SHADOWPOISSON" + pD] = !1, sD["SHADOWESM" + pD] = !1, sD["SHADOWCLOSEESM" + pD] = !1, sD["SHADOWCUBE" + pD] = !1, sD["SHADOWLOWQUALITY" + pD] = !1, sD["SHADOWMEDIUMQUALITY" + pD] = !1, zD && zD.receiveShadows && DD.shadowsEnabled && wD.shadowEnabled) {
        const zD = wD.getShadowGenerator(DD.activeCamera) ?? wD.getShadowGenerator();
        if (zD) {
          const DD = zD.getShadowMap();
          DD && DD.renderList && DD.renderList.length > 0 && (LD.shadowEnabled = !0, zD.prepareDefines(sD, pD))
        }
      }
      wD.lightmapMode != KD.e.LIGHTMAP_DEFAULT ? (LD.lightmapMode = !0, sD["LIGHTMAPEXCLUDED" + pD] = !0, sD["LIGHTMAPNOSPECULAR" + pD] = wD.lightmapMode == KD.e.LIGHTMAP_SHADOWSONLY) : (sD["LIGHTMAPEXCLUDED" + pD] = !1, sD["LIGHTMAPNOSPECULAR" + pD] = !1)
    }

    function lD(DD, zD, wD, pD, sD) {
      let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        LD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cD = function(DD, zD) {
          let wD = !1;
          if (DD.activeCamera) {
            const pD = zD.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              sD = zD.CAMERA_PERSPECTIVE ? 1 : 0,
              KD = 1 === DD.activeCamera.mode ? 1 : 0,
              rD = 0 === DD.activeCamera.mode ? 1 : 0;
            (pD ^ KD || sD ^ rD) && (zD.CAMERA_ORTHOGRAPHIC = 1 === KD, zD.CAMERA_PERSPECTIVE = 1 === rD, wD = !0)
          }
          return wD
        }(DD, pD);
      !1 !== KD && (cD = (0, rD.j)(wD, DD, pD)), pD.DEPTHPREPASS !== !zD.getColorWrite() && (pD.DEPTHPREPASS = !pD.DEPTHPREPASS, cD = !0), pD.INSTANCES !== sD && (pD.INSTANCES = sD, cD = !0), pD.THIN_INSTANCES !== LD && (pD.THIN_INSTANCES = LD, cD = !0), cD && pD.markAsUnprocessed()
    }
    const WD = 40,
      ND = 64,
      ZD = new WeakMap,
      yD = new WeakSet;

    function kD(DD, zD, wD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        LD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!zD._areAttributesDirty && zD._needNormals === zD._normals && zD._needUVs === zD._uvs) return !1;
      zD._normals = zD._needNormals, zD._uvs = zD._needUVs, zD.NORMAL = zD._needNormals && DD.isVerticesDataPresent("normal"), zD._needNormals && DD.isVerticesDataPresent("tangent") && (zD.TANGENT = !0);
      for (let pD = 1; pD <= 6; ++pD) zD["UV" + pD] = !!zD._needUVs && DD.isVerticesDataPresent(`uv${1===pD?"":pD}`);
      if (wD) {
        const wD = DD.useVertexColors && DD.isVerticesDataPresent("color");
        zD.VERTEXCOLOR = wD, zD.VERTEXALPHA = DD.hasVertexAlpha && wD && rD
      }
      return DD.isVerticesDataPresent("instanceColor") && (DD.hsD || DD.hasThinInstances) && (zD.INSTANCESCOLOR = !0), sD && function(DD, zD) {
        if (DD.useBones && DD.computeBonesUsingShaders && DD.skeleton) {
          zD.NUM_BONE_INFLUENCERS = DD.numBoneInfluencers;
          const wD = void 0 !== zD.BONETEXTURE;
          if (DD.skeleton.isUsingTextureForMatrices && wD) zD.BONETEXTURE = !0;
          else {
            zD.BonesPerMesh = DD.skeleton.bones.length + 1, zD.BONETEXTURE = !wD && void 0;
            const sD = DD.Ul(),
              KD = sD.prePassRenderer;
            if (KD && KD.enabled) {
              const wD = -1 === KD.excludedSkinnedMesh.indexOf(DD);
              zD.BONES_VELOCITY_ENABLED = wD
            }
            const rD = !0 === zD.MULTIVIEW,
              LD = 2 * zD.BonesPerMesh + (rD ? 1 : 0);
            if (ZD.get(DD.skeleton) !== LD) {
              ZD.set(DD.skeleton, LD);
              const wD = sD.iI().getCaps().maxVertexUniformVectors;
              if (wD && !yD.has(DD.skeleton)) {
                const sD = 4 * zD.BonesPerMesh,
                  KD = rD ? ND : WD,
                  LD = Math.max(wD - KD, 0);
                (sD > LD || rD && 3 * sD > wD) && (yD.add(DD.skeleton), pD.d.Warn(`Skeleton "${DD.skeleton.name}": ${DD.skeleton.bones.length} bones stored as vertex uniforms use ${sD} of ~${LD} usable uniform vectors${rD?" (multiview)":""} on a device reporting ${wD}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else zD.NUM_BONE_INFLUENCERS = 0, zD.BonesPerMesh = 0, void 0 !== zD.BONETEXTURE && (zD.BONETEXTURE = !1)
      }(DD, zD), KD && function(DD, zD) {
        const wD = DD.morphTargetManager;
        wD ? (zD.MORPHTARGETS_UV = wD.supportsUVs && zD.UV1, zD.MORPHTARGETS_UV2 = wD.supportsUV2s && zD.UV2, zD.MORPHTARGETS_TANGENT = wD.supportsTangents && zD.TANGENT, zD.MORPHTARGETS_NORMAL = wD.supportsNormals && zD.NORMAL, zD.MORPHTARGETS_POSITION = wD.supportsPositions, zD.MORPHTARGETS_COLOR = wD.supportsColors, zD.MORPHTARGETTEXTURE_HASUVS = wD.hasUVs, zD.MORPHTARGETTEXTURE_HASUV2S = wD.hasUV2s, zD.MORPHTARGETTEXTURE_HASTANGENTS = wD.hasTangents, zD.MORPHTARGETTEXTURE_HASNORMALS = wD.hasNormals, zD.MORPHTARGETTEXTURE_HASPOSITIONS = wD.hasPositions, zD.MORPHTARGETTEXTURE_HASCOLORS = wD.hasColors, zD.NUM_MORPH_INFLUENCERS = wD.numMaxInfluencers || wD.numInfluencers, zD.MORPHTARGETS = zD.NUM_MORPH_INFLUENCERS > 0, zD.MORPHTARGETS_TEXTURE = wD.isUsingTextureForTargets) : (zD.MORPHTARGETS_UV = !1, zD.MORPHTARGETS_UV2 = !1, zD.MORPHTARGETS_TANGENT = !1, zD.MORPHTARGETS_NORMAL = !1, zD.MORPHTARGETS_POSITION = !1, zD.MORPHTARGETS_COLOR = !1, zD.MORPHTARGETTEXTURE_HASUVS = !1, zD.MORPHTARGETTEXTURE_HASUV2S = !1, zD.MORPHTARGETTEXTURE_HASTANGENTS = !1, zD.MORPHTARGETTEXTURE_HASNORMALS = !1, zD.MORPHTARGETTEXTURE_HASPOSITIONS = !1, zD.MORPHTARGETTEXTURE_HAS_COLORS = !1, zD.MORPHTARGETS = !1, zD.NUM_MORPH_INFLUENCERS = 0)
      }(DD, zD), LD && function(DD, zD) {
        const wD = DD.bakedVertexAnimationManager;
        zD.BAKED_VERTEX_ANIMATION_TEXTURE = !(!wD || !wD.isEnabled)
      }(DD, zD), !0
    }

    function mD(DD, zD) {
      if (DD.activeCamera) {
        const wD = zD.MULTIVIEW;
        zD.MULTIVIEW = null !== DD.activeCamera.outputRenderTarget && DD.activeCamera.outputRenderTarget.getViewCount() > 1, zD.MULTIVIEW != wD && zD.markAsUnprocessed()
      }
    }

    function eD(DD, zD, wD) {
      const pD = zD.ORDER_INDEPENDENT_TRANSPARENCY,
        sD = zD.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      zD.ORDER_INDEPENDENT_TRANSPARENCY = DD.useOrderIndependentTransparency && wD, zD.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !DD.iI().getCaps().textureFloatLinearFiltering, pD === zD.ORDER_INDEPENDENT_TRANSPARENCY && sD === zD.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || zD.markAsUnprocessed()
    }

    function oD(DD, zD, wD) {
      const pD = zD.PREPASS;
      if (!zD._arePrePassDirty) return;
      const sD = [{
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
      if (DD.prePassRenderer && DD.prePassRenderer.enabled && wD) {
        zD.PREPASS = !0, zD.SCENE_MRT_COUNT = DD.prePassRenderer.mrtCount, zD.PREPASS_NORMAL_WORLDSPACE = DD.prePassRenderer.generateNormalsInWorldSpace, zD.PREPASS_COLOR = !0, zD.PREPASS_COLOR_INDEX = 0;
        for (let wD = 0; wD < sD.length; wD++) {
          const pD = DD.prePassRenderer.getIndex(sD[wD].type); - 1 !== pD ? (zD[sD[wD].define] = !0, zD[sD[wD].index] = pD) : zD[sD[wD].define] = !1
        }
      } else {
        zD.PREPASS = !1;
        for (let DD = 0; DD < sD.length; DD++) zD[sD[DD].define] = !1
      }
      zD.PREPASS != pD && (zD.markAsUnprocessed(), zD.markAsImageProcessingDirty())
    }

    function aD(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      sD && sD.push("Light" + DD), KD || (zD.push("vLightData" + DD, "vLightDiffuse" + DD, "vLightSpecular" + DD, "vLightDirection" + DD, "vLightWidth" + DD, "vLightHeight" + DD, "vLightFalloff" + DD, "vLightGround" + DD, "vSliceData" + DD, "vSliceRanges" + DD, "lightMatrix" + DD, "shadowsInfo" + DD, "depthValues" + DD), wD.push("shadowTexture" + DD), wD.push("depthTexture" + DD), zD.push("viewFrustumZ" + DD, "cascadeBlendFactor" + DD, "lightSizeUVCorrection" + DD, "depthCorrection" + DD, "penumbraDarkness" + DD, "frustumLengths" + DD), pD && (wD.push("projectionLightTexture" + DD), zD.push("textureProjectionMatrix" + DD)), rD && wD.push("iesLightTexture" + DD), cD && wD.push("rectAreaLightEmissionTexture" + DD), LD && (wD.push("lightDataTexture" + DD), gD || wD.push("tileMaskTexture" + DD)))
    }

    function uD(DD, zD, wD) {
      const pD = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      wD && pD.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), DD.push(...pD);
      zD.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function vD(DD, zD, wD) {
      let pD, sD, KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        rD = null;
      if (DD.uniformsNames) {
        const LD = DD;
        pD = LD.uniformsNames, sD = LD.uniformBuffersNames, zD = LD.samplers, wD = LD.defines, KD = LD.maxSimultaneousLights || 0, rD = LD.shaderLanguage ?? null
      } else pD = DD, zD || (zD = []);
      for (let LD = 0; LD < KD && wD["LIGHT" + LD]; LD++) aD(LD, pD, zD, wD["PROJECTEDLIGHTTEXTURE" + LD], sD, !1, wD["IESLIGHTTEXTURE" + LD], wD["CLUSTLIGHT" + LD], wD["RECTAREALIGHTEMISSIONTEXTURE" + LD], 1 === rD);
      wD.NUM_MORPH_INFLUENCERS && (pD.push("morphTargetInfluences"), pD.push("morphTargetCount")), wD.BAKED_VERTEX_ANIMATION_TEXTURE && (pD.push("bakedVertexAnimationSettings"), pD.push("bakedVertexAnimationTextureSizeInverted"), pD.push("bakedVertexAnimationTime"), zD.push("bakedVertexAnimationTexture"))
    }

    function tD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      DD.addUniform("vReflectionInfos", 2), DD.addUniform("reflectionMatrix", 16), zD && DD.addUniform("vReflectionMicrosurfaceInfos", 3), wD && (DD.addUniform("vReflectionPosition", 3), DD.addUniform("vReflectionSize", 3)), pD && (DD.addUniform("vReflectionFilteringInfo", 2), DD.addUniform("vReflectionDominantDirection", 3)), KD && DD.addUniform("vReflectionColor", 3), sD && (DD.addUniform("vSphericalL00", 3), DD.addUniform("vSphericalL1_1", 3), DD.addUniform("vSphericalL10", 3), DD.addUniform("vSphericalL11", 3), DD.addUniform("vSphericalL2_2", 3), DD.addUniform("vSphericalL2_1", 3), DD.addUniform("vSphericalL20", 3), DD.addUniform("vSphericalL21", 3), DD.addUniform("vSphericalL22", 3), DD.addUniform("vSphericalX", 3), DD.addUniform("vSphericalY", 3), DD.addUniform("vSphericalZ", 3), DD.addUniform("vSphericalXX_ZZ", 3), DD.addUniform("vSphericalYY_ZZ", 3), DD.addUniform("vSphericalZZ", 3), DD.addUniform("vSphericalXY", 3), DD.addUniform("vSphericalYZ", 3), DD.addUniform("vSphericalZX", 3))
    }
  },
  40270: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(37079),
      sD = wD(40220);
    class KD extends sD.b {
      constructor(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(DD, zD, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new pD.e, this._storeEffectOnSubMeshes = wD
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(DD, zD) {
        return !!DD && (!this._storeEffectOnSubMeshes || (!DD.QE || 0 === DD.QE.length || this.isReadyForSubMesh(DD, DD.QE[0], zD)))
      }
      _isReadyForSubMesh(DD) {
        const zD = DD.materialDefines;
        return !(this.checkReadyOnEveryCall || !DD.effect || !zD || zD._renderId !== this.Ul().getRenderId())
      }
      bindOnlyWorldMatrix(DD) {
        this._activeEffect.setMatrix("world", DD)
      }
      bindOnlyNormalMatrix(DD) {
        this._activeEffect.setMatrix("normalMatrix", DD)
      }
      bind(DD, zD) {
        zD && this.bindForSubMesh(DD, zD, zD.QE[0])
      }
      _afterBind(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(DD, zD, wD), this.Ul()._cachedEffect = zD, wD ? wD._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return wD._drawWrapper._forceRebindOnNextCall || DD.isCachedMaterialInvalid(this, zD, pD)
      }
      dispose(DD, zD, wD) {
        this._activeEffect = void 0, super.dispose(DD, zD, wD)
      }
    }
  },
  40299: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD,
      e: () => sD
    });
    const pD = new WeakMap;

    function sD(DD) {
      const zD = DD.getVertexBuffers();
      if (!zD) return null;
      let wD = pD.get(DD);
      if (wD) {
        let DD = !1;
        for (const pD in zD)
          if (!wD.has(pD)) {
            DD = !0;
            break
          } if (!DD) return wD
      } else wD = new Map, pD.set(DD, wD);
      for (const pD in zD) {
        const DD = zD[pD];
        if (DD) {
          const zD = DD.byteOffset,
            sD = DD.byteStride,
            KD = DD.type,
            rD = DD.normalized;
          wD.set(pD, {
            offset: zD,
            stride: sD,
            type: KD,
            normalized: rD
          })
        }
      }
      return wD
    }

    function KD(DD, zD) {
      zD.forEach(((zD, wD) => {
        const pD = `vp_${wD}_info`;
        DD.setFloat4(pD, zD.offset, zD.stride, zD.type, zD.normalized ? 1 : 0)
      }))
    }
  },
  40246: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => cD
    });
    var pD = wD(39921),
      sD = wD(37079),
      KD = wD(39927);
    let rD = (() => {
      var DD;
      let zD, wD, sD = [];
      return DD = class {
        static extractMinAndMaxIndexed(DD, zD, wD, pD, sD, KD) {
          for (let rD = wD; rD < wD + pD; rD++) {
            const wD = 3 * zD[rD],
              pD = DD[wD],
              LD = DD[wD + 1],
              cD = DD[wD + 2];
            sD.minimizeInPlaceFromFloats(pD, LD, cD), KD.maximizeInPlaceFromFloats(pD, LD, cD)
          }
        }
        static extractMinAndMax(DD, zD, wD, pD, sD, KD) {
          for (let rD = zD, LD = zD * pD; rD < zD + wD; rD++, LD += pD) {
            const zD = DD[LD],
              wD = DD[LD + 1],
              pD = DD[LD + 2];
            sD.minimizeInPlaceFromFloats(zD, wD, pD), KD.maximizeInPlaceFromFloats(zD, wD, pD)
          }
        }
      }, (() => {
        const rD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [KD.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], wD = [KD.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, pD.i)(DD, null, zD, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: DD => "extractMinAndMaxIndexed" in DD,
            get: DD => DD.extractMinAndMaxIndexed
          },
          metadata: rD
        }, null, sD), (0, pD.i)(DD, null, wD, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: DD => "extractMinAndMax" in DD,
            get: DD => DD.extractMinAndMax
          },
          metadata: rD
        }, null, sD), rD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rD
        }), (0, pD.m)(DD, sD)
      })(), DD
    })();

    function LD(DD, zD, wD, pD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const LD = new sD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        cD = new sD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return rD.extractMinAndMaxIndexed(DD, zD, wD, pD, LD, cD), KD && (LD.x -= LD.x * KD.x + KD.y, LD.y -= LD.y * KD.x + KD.y, LD.z -= LD.z * KD.x + KD.y, cD.x += cD.x * KD.x + KD.y, cD.y += cD.y * KD.x + KD.y, cD.z += cD.z * KD.x + KD.y), {
        minimum: LD,
        maximum: cD
      }
    }

    function cD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        KD = arguments.length > 4 ? arguments[4] : void 0;
      const LD = new sD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        cD = new sD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return KD || (KD = 3), rD.extractMinAndMax(DD, zD, wD, KD, LD, cD), pD && (LD.x -= LD.x * pD.x + pD.y, LD.y -= LD.y * pD.x + pD.y, LD.z -= LD.z * pD.x + pD.y, cD.x += cD.x * pD.x + pD.y, cD.y += cD.y * pD.x + pD.y, cD.z += cD.z * pD.x + pD.y), {
        minimum: LD,
        maximum: cD
      }
    }
  },
  40224: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => RD
    });
    var pD, sD = wD(40066),
      KD = wD(40231),
      rD = wD(40234),
      LD = wD(40246),
      cD = wD(40249),
      gD = wD(39808);
    class RD {
      get materialDefines() {
        const DD = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof DD ? null : DD
      }
      set materialDefines(DD) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = DD
      }
      _getDrawWrapper(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        DD = DD ?? this._engine.currentRenderPassId;
        let wD = this._drawWrappers[DD];
        return !wD && zD && (this._drawWrappers[DD] = wD = new cD.e(this._mesh.Ul().iI())), wD
      }
      _removeDrawWrapper(DD) {
        let zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[DD]?.dispose(zD), this._drawWrappers[DD] = void 0
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
      _setMainDrawWrapperOverride(DD) {
        this._mainDrawWrapperOverride = DD
      }
      setEffect(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const sD = this._drawWrapper;
        sD.setEffect(DD, zD, pD), void 0 !== wD && (sD.materialContext = wD), DD || (sD.defines = null, sD.materialContext = void 0)
      }
      resetDrawCache(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== DD) return void this._removeDrawWrapper(DD, !0, zD);
          for (const DD of this._drawWrappers) DD?.dispose(zD)
        }
        this._drawWrappers = []
      }
      static AddToMesh(DD, zD, wD, pD, sD, KD, rD) {
        return new RD(DD, zD, wD, pD, sD, KD, rD, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(DD, zD, wD, pD, sD, KD, rD) {
        let LD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = DD, this.verticesStart = zD, this.verticesCount = wD, this.indexStart = pD, this.indexCount = sD, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = KD, this._renderingMesh = rD || KD, cD && KD.QE.push(this), this._engine = this._mesh.Ul().iI(), this.resetDrawCache(), this._trianglePlanes = [], this._id = KD.QE.length - 1, LD && (this.refreshBoundingInfo(), KD.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      FW() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.FW() : this._boundingInfo
      }
      setBoundingInfo(DD) {
        return this._boundingInfo = DD, this
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
        const DD = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return DD || this._renderingMesh
      }
      yI() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const zD = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!zD) return DD && this._mesh.Ul()._hasDefaultMaterial ? this._mesh.Ul().defaultMaterial : null;
        if (this._isMultiMaterial(zD)) {
          const DD = zD.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== DD && (this._currentMaterial = DD, this.resetDrawCache()), DD
        }
        return zD
      }
      _isMultiMaterial(DD) {
        return void 0 !== DD.getSubMaterial
      }
      refreshBoundingInfo() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (DD || (DD = this._renderingMesh.getVerticesData(sD.k.PositionKind)), !DD) return this._boundingInfo = this._mesh.FW(), this;
        const zD = this._renderingMesh.XpD();
        let wD;
        if (0 === this.indexStart && this.indexCount === zD.length) {
          const DD = this._renderingMesh.FW();
          wD = {
            minimum: DD.minimum.clone(),
            maximum: DD.maximum.clone()
          }
        } else wD = (0, LD.c)(DD, zD, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(wD.minimum, wD.maximum) : this._boundingInfo = new rD.b(wD.minimum, wD.maximum), this
      }
      _checkCollision(DD) {
        return this.FW()._checkCollision(DD)
      }
      updateBoundingInfo(DD) {
        let zD = this.FW();
        return zD || (this.refreshBoundingInfo(), zD = this.FW()), zD && zD.update(DD), this
      }
      isInFrustum(DD) {
        const zD = this.FW();
        return !!zD && zD.isInFrustum(DD, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(DD) {
        const zD = this.FW();
        return !!zD && zD.isCompletelyInFrustum(DD)
      }
      render(DD) {
        return this._renderingMesh.render(this, DD, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(DD, zD) {
        if (!this._linesIndexBuffer) {
          const wD = 6 * Math.floor(this.indexCount / 3),
            pD = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(wD) : new Uint16Array(wD);
          let sD = 0;
          if (0 === DD.length)
            for (let DD = this.indexStart; DD < this.indexStart + this.indexCount; DD += 3) pD[sD++] = DD, pD[sD++] = DD + 1, pD[sD++] = DD + 1, pD[sD++] = DD + 2, pD[sD++] = DD + 2, pD[sD++] = DD;
          else
            for (let zD = this.indexStart; zD < this.indexStart + this.indexCount; zD += 3) pD[sD++] = DD[zD], pD[sD++] = DD[zD + 1], pD[sD++] = DD[zD + 1], pD[sD++] = DD[zD + 2], pD[sD++] = DD[zD + 2], pD[sD++] = DD[zD];
          this._linesIndexBuffer = zD.createIndexBuffer(pD), this._linesIndexCount = pD.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(DD) {
        const zD = this.FW();
        return !!zD && DD.intersectsBox(zD.boundingBox)
      }
      intersects(DD, zD, wD, pD, sD) {
        const KD = this.yI();
        if (!KD) return null;
        let rD = 3,
          LD = !1;
        switch (KD.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            rD = 1, LD = !0
        }
        return 4 === KD.fillMode ? wD.length ? this._intersectLines(DD, zD, wD, this._mesh.intersectionThreshold, pD) : this._intersectUnIndexedLines(DD, zD, wD, this._mesh.intersectionThreshold, pD) : !wD.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(DD, zD, wD, pD, sD) : this._intersectTriangles(DD, zD, wD, rD, LD, pD, sD)
      }
      _intersectLines(DD, zD, wD, pD, sD) {
        let rD = null;
        for (let LD = this.indexStart; LD < this.indexStart + this.indexCount; LD += 2) {
          const cD = zD[wD[LD]],
            gD = zD[wD[LD + 1]],
            RD = DD.intersectionSegment(cD, gD, pD);
          if (!(RD < 0) && ((sD || !rD || RD < rD.distance) && (rD = new KD.d(null, null, RD), rD.faceId = LD / 2, sD))) break
        }
        return rD
      }
      _intersectUnIndexedLines(DD, zD, wD, pD, sD) {
        let rD = null;
        for (let LD = this.verticesStart; LD < this.verticesStart + this.verticesCount; LD += 2) {
          const wD = zD[LD],
            cD = zD[LD + 1],
            gD = DD.intersectionSegment(wD, cD, pD);
          if (!(gD < 0) && ((sD || !rD || gD < rD.distance) && (rD = new KD.d(null, null, gD), rD.faceId = LD / 2, sD))) break
        }
        return rD
      }
      _intersectTriangles(DD, zD, wD, pD, sD, KD, rD) {
        let LD = null,
          cD = -1;
        for (let gD = this.indexStart; gD < this.indexStart + this.indexCount - (3 - pD); gD += pD) {
          cD++;
          const pD = wD[gD],
            RD = wD[gD + 1],
            AD = wD[gD + 2];
          if (sD && 4294967295 === AD) {
            gD += 2;
            continue
          }
          const UD = zD[pD],
            fD = zD[RD],
            ID = zD[AD];
          if (!UD || !fD || !ID) continue;
          if (rD && !rD(UD, fD, ID, DD, pD, RD, AD)) continue;
          const BD = DD.intersectsTriangle(UD, fD, ID);
          if (BD) {
            if (BD.distance < 0) continue;
            if ((KD || !LD || BD.distance < LD.distance) && (LD = BD, LD.faceId = cD, KD)) break
          }
        }
        return LD
      }
      _intersectUnIndexedTriangles(DD, zD, wD, pD, sD) {
        let KD = null;
        for (let rD = this.verticesStart; rD < this.verticesStart + this.verticesCount; rD += 3) {
          const wD = zD[rD],
            LD = zD[rD + 1],
            cD = zD[rD + 2];
          if (sD && !sD(wD, LD, cD, DD, -1, -1, -1)) continue;
          const gD = DD.intersectsTriangle(wD, LD, cD);
          if (gD) {
            if (gD.distance < 0) continue;
            if ((pD || !KD || gD.distance < KD.distance) && (KD = gD, KD.faceId = rD / 3, pD)) break
          }
        }
        return KD
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(DD, zD) {
        const wD = new RD(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, DD, zD, !1);
        if (!this.IsGlobal) {
          const DD = this.FW();
          if (!DD) return wD;
          wD._boundingInfo = new rD.b(DD.minimum, DD.maximum)
        }
        return wD
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Ul().iI()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const zD = this._mesh.QE.indexOf(this);
        this._mesh.QE.splice(zD, 1), this.resetDrawCache(void 0, DD)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(DD, zD, wD, pD, sD) {
        let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = Number.MAX_VALUE,
          LD = -Number.MAX_VALUE;
        const cD = (sD || pD).XpD();
        for (let gD = zD; gD < zD + wD; gD++) {
          const DD = cD[gD];
          DD < rD && (rD = DD), DD > LD && (LD = DD)
        }
        return new RD(DD, rD, LD - rD + 1, zD, wD, pD, sD, KD)
      }
    }(pD = RD.prototype).projectToRef ?? (pD.projectToRef = (0, gD.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);