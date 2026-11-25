export const id = 266;
export const ids = [266];
export const modules = {
  40678: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG
    });
    class wG {
      constructor(GG, bG, ZG) {
        this.bu = GG, this.bv = bG, this.distance = ZG, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40683: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(37448),
      SG = ZG(37439),
      LG = ZG(37443);
    class yG {
      constructor(GG, bG, ZG) {
        this.vectors = (0, wG.d)(8, SG.p.Zero), this.center = SG.p.Zero(), this.centerWorld = SG.p.Zero(), this.extendSize = SG.p.Zero(), this.extendSizeWorld = SG.p.Zero(), this.directions = (0, wG.d)(3, SG.p.Zero), this.vectorsWorld = (0, wG.d)(8, SG.p.Zero), this.minimumWorld = SG.p.Zero(), this.maximumWorld = SG.p.Zero(), this.minimum = SG.p.Zero(), this.maximum = SG.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(GG, bG, ZG)
      }
      reConstruct(GG, bG, ZG) {
        const wG = GG.x,
          LG = GG.y,
          yG = GG.z,
          kG = bG.x,
          UG = bG.y,
          YG = bG.z,
          VG = this.vectors;
        this.minimum.fGG(wG, LG, yG), this.maximum.fGG(kG, UG, YG), VG[0].fGG(wG, LG, yG), VG[1].fGG(kG, UG, YG), VG[2].fGG(kG, LG, yG), VG[3].fGG(wG, UG, yG), VG[4].fGG(wG, LG, YG), VG[5].fGG(kG, UG, yG), VG[6].fGG(wG, UG, YG), VG[7].fGG(kG, LG, YG), bG.addToRef(GG, this.center).scaleInPlace(.5), bG.subtractToRef(GG, this.extendSize).scaleInPlace(.5), this._worldMatrix = ZG || SG.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(GG) {
        const bG = yG._TmpVector3,
          ZG = this.maximum.subtractToRef(this.minimum, bG[0]),
          wG = ZG.length();
        ZG.normalizeFromLength(wG);
        const SG = wG * GG,
          LG = ZG.scaleInPlace(.5 * SG),
          kG = this.center.subtractToRef(LG, bG[1]),
          UG = this.center.addToRef(LG, bG[2]);
        return this.reConstruct(kG, UG, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(GG) {
        const bG = this.minimumWorld,
          ZG = this.maximumWorld,
          wG = this.directions,
          LG = this.vectorsWorld,
          yG = this.vectors;
        if (GG.isIdentity()) {
          bG.oW(this.minimum), ZG.oW(this.maximum);
          for (let GG = 0; GG < 8; ++GG) LG[GG].oW(yG[GG]);
          this.extendSizeWorld.oW(this.extendSize), this.centerWorld.oW(this.center)
        } else {
          bG.N7(Number.MAX_VALUE), ZG.N7(-Number.MAX_VALUE);
          for (let wG = 0; wG < 8; ++wG) {
            const kG = LG[wG];
            SG.p.TransformCoordinatesToRef(yG[wG], GG, kG), bG.minimizeInPlace(kG), ZG.maximizeInPlace(kG)
          }
          ZG.subtractToRef(bG, this.extendSizeWorld).scaleInPlace(.5), ZG.addToRef(bG, this.centerWorld).scaleInPlace(.5)
        }
        SG.p.FromArrayToRef(GG.m, 0, wG[0]), SG.p.FromArrayToRef(GG.m, 4, wG[1]), SG.p.FromArrayToRef(GG.m, 8, wG[2]), this._worldMatrix = GG
      }
      isInFrustum(GG) {
        return yG.IsInFrustum(this.vectorsWorld, GG)
      }
      isCompletelyInFrustum(GG) {
        return yG.IsCompletelyInFrustum(this.vectorsWorld, GG)
      }
      intersectsPoint(GG) {
        const bG = this.minimumWorld,
          ZG = this.maximumWorld,
          wG = bG.x,
          SG = bG.y,
          yG = bG.z,
          kG = ZG.x,
          UG = ZG.y,
          YG = ZG.z,
          VG = GG.x,
          pG = GG.y,
          fG = GG.z,
          QG = -LG.d;
        return !(kG - VG < QG || QG > VG - wG) && (!(UG - pG < QG || QG > pG - SG) && !(YG - fG < QG || QG > fG - yG))
      }
      intersectsSphere(GG) {
        return yG.IntersectsSphere(this.minimumWorld, this.maximumWorld, GG.centerWorld, GG.radiusWorld)
      }
      intersectsMinMax(GG, bG) {
        const ZG = this.minimumWorld,
          wG = this.maximumWorld,
          SG = ZG.x,
          LG = ZG.y,
          yG = ZG.z,
          kG = wG.x,
          UG = wG.y,
          YG = wG.z,
          VG = GG.x,
          pG = GG.y,
          fG = GG.z,
          QG = bG.x,
          KG = bG.y,
          hG = bG.z;
        return !(kG < VG || SG > QG) && (!(UG < pG || LG > KG) && !(YG < fG || yG > hG))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(GG, bG) {
        return GG.intersectsMinMax(bG.minimumWorld, bG.maximumWorld)
      }
      static IntersectsSphere(GG, bG, ZG, wG) {
        const LG = yG._TmpVector3[0];
        SG.p.ClampToRef(ZG, GG, bG, LG);
        return SG.p.DistanceSquared(ZG, LG) <= wG * wG
      }
      static IsCompletelyInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ++ZG) {
          const wG = bG[ZG];
          for (let bG = 0; bG < 8; ++bG)
            if (wG.dotCoordinate(GG[bG]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ++ZG) {
          let wG = !0;
          const SG = bG[ZG];
          for (let bG = 0; bG < 8; ++bG)
            if (SG.dotCoordinate(GG[bG]) >= 0) {
              wG = !1;
              break
            } if (wG) return !1
        }
        return !0
      }
    }
    yG._TmpVector3 = (0, wG.d)(3, SG.p.Zero)
  },
  40681: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG
    });
    var wG = ZG(37448),
      SG = ZG(37439),
      LG = ZG(40683);
    class yG {
      constructor(GG, bG, ZG) {
        this.center = SG.p.Zero(), this.centerWorld = SG.p.Zero(), this.minimum = SG.p.Zero(), this.maximum = SG.p.Zero(), this.reConstruct(GG, bG, ZG)
      }
      reConstruct(GG, bG, ZG) {
        this.minimum.oW(GG), this.maximum.oW(bG);
        const wG = SG.p.Distance(GG, bG);
        bG.addToRef(GG, this.center).scaleInPlace(.5), this.radius = .5 * wG, this._update(ZG || SG.e.IdentityReadOnly)
      }
      scale(GG) {
        const bG = yG._TmpVector3,
          ZG = this.maximum.subtractToRef(this.minimum, bG[0]),
          wG = ZG.length();
        ZG.normalizeFromLength(wG);
        const SG = wG * GG,
          LG = ZG.scaleInPlace(.5 * SG),
          kG = this.center.subtractToRef(LG, bG[1]),
          UG = this.center.addToRef(LG, bG[2]);
        return this.reConstruct(kG, UG, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(GG) {
        if (GG.isIdentity()) this.centerWorld.oW(this.center), this.radiusWorld = this.radius;
        else {
          SG.p.TransformCoordinatesToRef(this.center, GG, this.centerWorld);
          const bG = yG._TmpVector3[0];
          SG.p.TransformNormalFromFloatsToRef(1, 1, 1, GG, bG), this.radiusWorld = Math.max(Math.abs(bG.x), Math.abs(bG.y), Math.abs(bG.z)) * this.radius
        }
      }
      isInFrustum(GG) {
        const bG = this.centerWorld,
          ZG = this.radiusWorld;
        for (let wG = 0; wG < 6; wG++)
          if (GG[wG].dotCoordinate(bG) <= -ZG) return !1;
        return !0
      }
      isCenterInFrustum(GG) {
        const bG = this.centerWorld;
        for (let ZG = 0; ZG < 6; ZG++)
          if (GG[ZG].dotCoordinate(bG) < 0) return !1;
        return !0
      }
      intersectsPoint(GG) {
        const bG = SG.p.DistanceSquared(this.centerWorld, GG);
        return !(this.radiusWorld * this.radiusWorld < bG)
      }
      static Intersects(GG, bG) {
        const ZG = SG.p.DistanceSquared(GG.centerWorld, bG.centerWorld),
          wG = GG.radiusWorld + bG.radiusWorld;
        return !(wG * wG < ZG)
      }
      static CreateFromCenterAndRadius(GG, bG, ZG) {
        this._TmpVector3[0].oW(GG), this._TmpVector3[1].fGG(0, 0, bG), this._TmpVector3[2].oW(GG), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].twG(this._TmpVector3[1]);
        const wG = new yG(this._TmpVector3[0], this._TmpVector3[2]);
        return wG._worldMatrix = ZG || SG.e.Identity(), wG
      }
    }
    yG._TmpVector3 = (0, wG.d)(3, SG.p.Zero);
    const kG = {
        min: 0,
        max: 0
      },
      UG = {
        min: 0,
        max: 0
      },
      YG = (GG, bG, ZG) => {
        const wG = SG.p.Dot(bG.centerWorld, GG),
          LG = Math.abs(SG.p.Dot(bG.directions[0], GG)) * bG.extendSize.x + Math.abs(SG.p.Dot(bG.directions[1], GG)) * bG.extendSize.y + Math.abs(SG.p.Dot(bG.directions[2], GG)) * bG.extendSize.z;
        ZG.min = wG - LG, ZG.max = wG + LG
      },
      VG = (GG, bG, ZG) => (YG(GG, bG, kG), YG(GG, ZG, UG), !(kG.min > UG.max || UG.min > kG.max));
    class pG {
      constructor(GG, bG, ZG) {
        this._isLocked = !1, this.boundingBox = new LG.c(GG, bG, ZG), this.xwG = new yG(GG, bG, ZG)
      }
      reConstruct(GG, bG, ZG) {
        this.boundingBox.reConstruct(GG, bG, ZG), this.xwG.reConstruct(GG, bG, ZG)
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
      set isLocked(GG) {
        this._isLocked = GG
      }
      update(GG) {
        this._isLocked || (this.boundingBox._update(GG), this.xwG._update(GG))
      }
      centerOn(GG, bG) {
        const ZG = pG._TmpVector3[0].oW(GG).twG(bG),
          wG = pG._TmpVector3[1].oW(GG).addInPlace(bG);
        return this.boundingBox.reConstruct(ZG, wG, this.boundingBox.getWorldMatrix()), this.xwG.reConstruct(ZG, wG, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(GG) {
        const bG = SG.p.Minimize(this.minimum, GG),
          ZG = SG.p.Maximize(this.maximum, GG);
        return this.reConstruct(bG, ZG, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(GG) {
        const bG = SG.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(bG);
        const ZG = SG.j.mK[0];
        return SG.p.TransformCoordinatesToRef(GG.boundingBox.minimumWorld, bG, ZG), this.encapsulate(ZG), SG.p.TransformCoordinatesToRef(GG.boundingBox.maximumWorld, bG, ZG), this.encapsulate(ZG), this
      }
      scale(GG) {
        return this.boundingBox.scale(GG), this.xwG.scale(GG), this
      }
      isInFrustum(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === bG || 3 === bG) && this.xwG.isCenterInFrustum(GG)) return !0;
        if (!this.xwG.isInFrustum(GG)) return !1;
        return !(1 !== bG && 3 !== bG) || this.boundingBox.isInFrustum(GG)
      }
      get diagonalLength() {
        const GG = this.boundingBox;
        return GG.maximumWorld.subtractToRef(GG.minimumWorld, pG._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(GG) {
        return this.boundingBox.isCompletelyInFrustum(GG)
      }
      _checkCollision(GG) {
        return GG._canDoCollision(this.xwG.centerWorld, this.xwG.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(GG) {
        return !!this.xwG.centerWorld && (!!this.xwG.intersectsPoint(GG) && !!this.boundingBox.intersectsPoint(GG))
      }
      intersects(GG, bG) {
        if (!yG.Intersects(this.xwG, GG.xwG)) return !1;
        if (!LG.c.Intersects(this.boundingBox, GG.boundingBox)) return !1;
        if (!bG) return !0;
        const ZG = this.boundingBox,
          wG = GG.boundingBox;
        return !!VG(ZG.directions[0], ZG, wG) && (!!VG(ZG.directions[1], ZG, wG) && (!!VG(ZG.directions[2], ZG, wG) && (!!VG(wG.directions[0], ZG, wG) && (!!VG(wG.directions[1], ZG, wG) && (!!VG(wG.directions[2], ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[0], wG.directions[0]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[0], wG.directions[1]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[0], wG.directions[2]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[1], wG.directions[0]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[1], wG.directions[1]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[1], wG.directions[2]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[2], wG.directions[0]), ZG, wG) && (!!VG(SG.p.Cross(ZG.directions[2], wG.directions[1]), ZG, wG) && !!VG(SG.p.Cross(ZG.directions[2], wG.directions[2]), ZG, wG))))))))))))))
      }
    }
    pG._TmpVector3 = (0, wG.d)(2, SG.p.Zero)
  },
  40709: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      e: () => UG,
      i: () => kG,
      k: () => yG
    });
    var wG = ZG(40532),
      SG = ZG(37439);

    function LG(GG) {
      -1 === GG.indexOf("vClipPlane") && GG.push("vClipPlane"), -1 === GG.indexOf("vClipPlane2") && GG.push("vClipPlane2"), -1 === GG.indexOf("vClipPlane3") && GG.push("vClipPlane3"), -1 === GG.indexOf("vClipPlane4") && GG.push("vClipPlane4"), -1 === GG.indexOf("vClipPlane5") && GG.push("vClipPlane5"), -1 === GG.indexOf("vClipPlane6") && GG.push("vClipPlane6")
    }

    function yG(GG, bG, ZG) {
      const wG = !!(GG.clipPlane ?? bG.clipPlane),
        SG = !!(GG.clipPlane2 ?? bG.clipPlane2),
        LG = !!(GG.clipPlane3 ?? bG.clipPlane3),
        yG = !!(GG.clipPlane4 ?? bG.clipPlane4),
        kG = !!(GG.clipPlane5 ?? bG.clipPlane5),
        UG = !!(GG.clipPlane6 ?? bG.clipPlane6);
      wG && ZG.push("#define CLIPPLANE"), SG && ZG.push("#define CLIPPLANE2"), LG && ZG.push("#define CLIPPLANE3"), yG && ZG.push("#define CLIPPLANE4"), kG && ZG.push("#define CLIPPLANE5"), UG && ZG.push("#define CLIPPLANE6")
    }

    function kG(GG, bG, ZG) {
      let wG = !1;
      const SG = !!(GG.clipPlane ?? bG.clipPlane),
        LG = !!(GG.clipPlane2 ?? bG.clipPlane2),
        yG = !!(GG.clipPlane3 ?? bG.clipPlane3),
        kG = !!(GG.clipPlane4 ?? bG.clipPlane4),
        UG = !!(GG.clipPlane5 ?? bG.clipPlane5),
        YG = !!(GG.clipPlane6 ?? bG.clipPlane6);
      return ZG.CLIPPLANE !== SG && (ZG.CLIPPLANE = SG, wG = !0), ZG.CLIPPLANE2 !== LG && (ZG.CLIPPLANE2 = LG, wG = !0), ZG.CLIPPLANE3 !== yG && (ZG.CLIPPLANE3 = yG, wG = !0), ZG.CLIPPLANE4 !== kG && (ZG.CLIPPLANE4 = kG, wG = !0), ZG.CLIPPLANE5 !== UG && (ZG.CLIPPLANE5 = UG, wG = !0), ZG.CLIPPLANE6 !== YG && (ZG.CLIPPLANE6 = YG, wG = !0), wG
    }

    function UG(GG, bG, ZG) {
      let wG = bG.clipPlane ?? ZG.clipPlane;
      YG(GG, "vClipPlane", wG), wG = bG.clipPlane2 ?? ZG.clipPlane2, YG(GG, "vClipPlane2", wG), wG = bG.clipPlane3 ?? ZG.clipPlane3, YG(GG, "vClipPlane3", wG), wG = bG.clipPlane4 ?? ZG.clipPlane4, YG(GG, "vClipPlane4", wG), wG = bG.clipPlane5 ?? ZG.clipPlane5, YG(GG, "vClipPlane5", wG), wG = bG.clipPlane6 ?? ZG.clipPlane6, YG(GG, "vClipPlane6", wG)
    }

    function YG(GG, bG, ZG) {
      if (ZG) {
        const LG = wG.e.Dv()?.floatingOriginOffset || SG.p.ZeroReadOnly;
        GG.setFloat4(bG, ZG.normal.x, ZG.normal.y, ZG.normal.z, ZG.d + SG.p.Dot(ZG.normal, LG))
      }
    }
  },
  40725: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(GG, bG) {
        this._defines[GG] || (GG < this._currentRank && (this._currentRank = GG), GG > this._maxRank && (this._maxRank = GG), this._defines[GG] = new Array), this._defines[GG].push(bG)
      }
      addCPUSkinningFallback(GG, bG) {
        this._mesh = bG, GG < this._currentRank && (this._currentRank = GG), GG > this._maxRank && (this._maxRank = GG)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(GG, bG) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, GG = GG.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), bG._bonesComputationForcedToCPU = !0;
          const ZG = this._mesh.Dv();
          for (let GG = 0; GG < ZG.meshes.length; GG++) {
            const wG = ZG.meshes[GG];
            if (wG.material) {
              if (wG.computeBonesUsingShaders && 0 !== wG.numBoneInfluencers)
                if (wG.material.getEffect() === bG) wG.computeBonesUsingShaders = !1;
                else if (wG.aE)
                for (const GG of wG.aE) {
                  if (GG.effect === bG) {
                    wG.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && wG.computeBonesUsingShaders && wG.numBoneInfluencers > 0 && (wG.computeBonesUsingShaders = !1)
          }
        } else {
          const bG = this._defines[this._currentRank];
          if (bG)
            for (let ZG = 0; ZG < bG.length; ZG++) GG = GG.replace("#define " + bG[ZG], "");
          this._currentRank++
        }
        return GG
      }
    }
  },
  40664: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => rG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40477),
      yG = ZG(37465),
      kG = ZG(37463),
      UG = ZG(40673),
      YG = ZG(40508),
      VG = ZG(39093),
      pG = ZG(38175),
      fG = ZG(40697),
      QG = ZG(40416);
    let KG = (() => {
      var GG;
      let bG, ZG, LG, yG, kG, UG, YG, VG, pG, fG, KG, hG, dG = [];
      return GG = class {
        constructor() {
          this._func = (0, wG.n)(this, dG), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(GG) {
          this._func = GG
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(GG) {
          this._backFunc = GG
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(GG) {
          this._funcRef = GG
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(GG) {
          this._funcMask = GG
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(GG) {
          this._opStencilFail = GG
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(GG) {
          this._opDepthFail = GG
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(GG) {
          this._opStencilDepthPass = GG
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(GG) {
          this._backOpStencilFail = GG
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(GG) {
          this._backOpDepthFail = GG
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(GG) {
          this._backOpStencilDepthPass = GG
        }
        get mask() {
          return this._mask
        }
        set mask(GG) {
          this._mask = GG
        }
        get enabled() {
          return this._enabled
        }
        set enabled(GG) {
          this._enabled = GG
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(GG) {
          QG.b.Clone((() => GG), this)
        }
        serialize() {
          return QG.b.Serialize(this)
        }
        parse(GG, bG, ZG) {
          QG.b.Parse((() => this), GG, bG, ZG)
        }
      }, (() => {
        const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], (0, wG.k)(GG, null, bG, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: GG => "func" in GG,
            get: GG => GG.func
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, ZG, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: GG => "backFunc" in GG,
            get: GG => GG.backFunc
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, LG, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: GG => "funcRef" in GG,
            get: GG => GG.funcRef
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, yG, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: GG => "funcMask" in GG,
            get: GG => GG.funcMask
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, kG, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: GG => "opStencilFail" in GG,
            get: GG => GG.opStencilFail
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, UG, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: GG => "opDepthFail" in GG,
            get: GG => GG.opDepthFail
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, YG, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: GG => "opStencilDepthPass" in GG,
            get: GG => GG.opStencilDepthPass
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, VG, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: GG => "backOpStencilFail" in GG,
            get: GG => GG.backOpStencilFail
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, pG, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: GG => "backOpDepthFail" in GG,
            get: GG => GG.backOpDepthFail
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, fG, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: GG => "backOpStencilDepthPass" in GG,
            get: GG => GG.backOpStencilDepthPass
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, KG, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: GG => "mask" in GG,
            get: GG => GG.mask
          },
          metadata: QG
        }, null, dG), (0, wG.k)(GG, null, hG, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "enabled" in GG,
            get: GG => GG.enabled
          },
          metadata: QG
        }, null, dG), QG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QG
        })
      })(), GG
    })();
    var hG = ZG(40705),
      dG = ZG(40296),
      JG = ZG(40258);
    let rG = (() => {
      var GG;
      let bG, ZG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, TG = [],
        HG = [],
        tG = [],
        DG = [],
        NG = [],
        OG = [],
        xG = [],
        BG = [],
        Gb = [],
        bb = [],
        Zb = [],
        wb = [],
        Sb = [],
        Lb = [],
        yb = [],
        kb = [],
        Ub = [],
        Yb = [],
        Vb = [],
        pb = [],
        fb = [],
        Qb = [],
        Kb = [],
        hb = [],
        db = [],
        Jb = [],
        rb = [],
        zb = [],
        Eb = [],
        ob = [],
        Xb = [],
        ub = [],
        ib = [],
        Cb = [],
        Wb = [],
        mb = [],
        Ib = [],
        Fb = [],
        vb = [],
        ab = [],
        cb = [],
        lb = [],
        jb = [],
        Pb = [],
        Mb = [],
        Ab = [],
        sb = [],
        qb = [],
        nb = [],
        gb = [],
        eb = [];
      return GG = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(bG) {
          this._useVertexPulling !== bG && (this._useVertexPulling = bG, this.wZG(GG.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(GG) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(bG) {
          if (this._alpha === bG) return;
          const ZG = this._alpha;
          this._alpha = bG, 1 !== ZG && 1 !== bG || this.wZG(GG.MiscDirtyFlag + GG.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(bG) {
          this._backFaceCulling !== bG && (this._backFaceCulling = bG, this.wZG(GG.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(bG) {
          const ZG = Math.max(0, Math.min(0 | bG, 4));
          this._textureRepetitionMode !== ZG && (this._textureRepetitionMode = ZG, this.wZG(GG.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(bG) {
          this._cullBackFaces !== bG && (this._cullBackFaces = bG, this.wZG(GG.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(GG) {
          this._blockDirtyMechanism !== GG && (this._blockDirtyMechanism = GG, GG || this.markDirty())
        }
        atomicMaterialsUpdate(GG) {
          this.blockDirtyMechanism = !0;
          try {
            GG(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(GG) {
          this._onDisposeObserver && this.Gl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Gl.add(GG)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new yG.c), this._onBindObservable
        }
        set onBind(GG) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(GG)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new yG.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new yG.c), this._onEffectCreatedObservable
        }
        set alphaMode(GG) {
          this._alphaMode[0] = GG
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[ZG] !== bG && (this._alphaMode[ZG] = bG, this.wZG(GG.TextureDirtyFlag))
        }
        set needDepthPrePass(GG) {
          this._needDepthPrePass !== GG && (this._needDepthPrePass = GG, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(bG) {
          this._fogEnabled !== bG && (this._fogEnabled = bG, this.wZG(GG.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case GG.WireFrameFillMode:
            case GG.LineListDrawMode:
            case GG.LineLoopDrawMode:
            case GG.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(bG) {
          this.fillMode = bG ? GG.WireFrameFillMode : GG.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case GG.PointFillMode:
            case GG.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(bG) {
          this.fillMode = bG ? GG.PointFillMode : GG.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(bG) {
          this._fillMode !== bG && (this._fillMode = bG, this.wZG(GG.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(GG) {
          const bG = this.Dv().CK().getCaps().fragmentDepthSupported;
          GG && !bG && VG.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = GG && bG, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(GG) {
          this._isVertexOutputInvariant !== GG && (this._isVertexOutputInvariant = GG, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(GG) {
          this._drawWrapper = GG
        }
        constructor(bG, ZG, SG) {
          let UG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, wG.n)(this, TG), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, wG.n)(this, HG, void 0), this.uniqueId = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, void 0)), this._loadedUniqueId = (0, wG.n)(this, NG), this.name = (0, wG.n)(this, OG, void 0), this.metadata = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, null)), this._internalMetadata = (0, wG.n)(this, Gb), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, wG.n)(this, bb, !1), this.checkReadyOnlyOnce = ((0, wG.n)(this, Zb), (0, wG.n)(this, wb, !1)), this.state = ((0, wG.n)(this, Sb), (0, wG.n)(this, Lb, "")), this._alpha = ((0, wG.n)(this, yb), (0, wG.n)(this, kb, 1)), this.inspectableCustomProperties = (0, wG.n)(this, Ub), this._backFaceCulling = (0, wG.n)(this, Yb, !0), this._textureRepetitionMode = ((0, wG.n)(this, Vb), (0, wG.n)(this, pb, 0)), this.textureRepetitionHexTilingParams = ((0, wG.n)(this, fb), (0, wG.n)(this, Qb, [1, .6, 7, .5])), this._cullBackFaces = ((0, wG.n)(this, Kb), (0, wG.n)(this, hb, !0)), this._blockDirtyMechanism = ((0, wG.n)(this, db), !1), this.sideOrientation = (0, wG.n)(this, Jb, null), this.onCompiled = ((0, wG.n)(this, rb), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Gl = new yG.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, wG.n)(this, zb, [2]), this._needDepthPrePass = ((0, wG.n)(this, Eb), (0, wG.n)(this, ob, !1)), this.disableDepthWrite = ((0, wG.n)(this, Xb), (0, wG.n)(this, ub, !1)), this.disableColorWrite = ((0, wG.n)(this, ib), (0, wG.n)(this, Cb, !1)), this.forceDepthWrite = ((0, wG.n)(this, Wb), (0, wG.n)(this, mb, !1)), this.depthFunction = ((0, wG.n)(this, Ib), (0, wG.n)(this, Fb, 0)), this.separateCullingPass = ((0, wG.n)(this, vb), (0, wG.n)(this, ab, !1)), this._fogEnabled = ((0, wG.n)(this, cb), (0, wG.n)(this, lb, !0)), this.pointSize = ((0, wG.n)(this, jb), (0, wG.n)(this, Pb, 1)), this.zOffset = ((0, wG.n)(this, Mb), (0, wG.n)(this, Ab, 0)), this.zOffsetUnits = ((0, wG.n)(this, sb), (0, wG.n)(this, qb, 0)), this.clipPlane = (0, wG.n)(this, nb), this.stencil = new KG, this._isVertexOutputInvariant = (0, wG.n)(this, gb, GG.ForceVertexOutputInvariant), this._materialContext = (0, wG.n)(this, eb), this._useUBO = !1, this._fillMode = GG.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = bG;
          const VG = ZG || kG.c.LastCreatedScene;
          VG && (this._scene = VG, this._dirtyCallbacks = {}, this._forceGLSL = UG, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = bG || LG.f.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.CK().createMaterialContext(), this._drawWrapper = new fG.c(this._scene.CK(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new YG.d(this._scene.CK(), void 0, void 0, bG), this._useUBO = this.Dv().CK().supportsUniformBuffers, this._createUniformBuffer(), SG || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), GG.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const GG = this.Dv().CK();
          this._uniformBuffer?.dispose(), GG.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new YG.d(GG, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new YG.d(this._scene.CK(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(GG) {
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
        isReady(GG, bG) {
          return !0
        }
        isReadyForSubMesh(GG, bG, ZG) {
          const wG = bG.materialDefines;
          return !!wG && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = wG, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Dv() {
          return this._scene
        }
        _getEffectiveOrientation(GG) {
          return null !== this.sideOrientation ? this.sideOrientation : GG.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(GG) {
          this._transparencyMode = GG
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === GG.MATERIAL_ALPHABLEND || this._transparencyMode === GG.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === GG.MATERIAL_ALPHATEST || this._transparencyMode === GG.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === GG.MATERIAL_OPAQUE || this._transparencyMode === GG.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(GG) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : GG.visibility < 1 || !this._disableAlphaBlending && (GG.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(GG) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(GG) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ZG = this.Dv().meshes;
          for (const GG of ZG)
            if (GG.aE)
              for (const ZG of GG.aE)
                if (ZG.vK() === this)
                  for (const GG of ZG._drawWrappers) GG && this._materialContext === GG.materialContext && (GG._wasPreviouslyReady = !1, GG._wasPreviouslyUsingInstances = null, GG._forceRebindOnNextCall = bG);
          bG && this.wZG(GG.AllDirtyFlag)
        }
        _preBind(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wG = this._scene.CK(),
            SG = (null == ZG ? this.sideOrientation : ZG) === GG.ClockWiseSideOrientation,
            LG = bG || this._getDrawWrapper();
          return (0, dG.e)(LG) && LG.materialContext && (LG.materialContext.useVertexPulling = this.useVertexPulling), wG.enableEffect(LG), wG.setState(this.backFaceCulling, this.zOffset, !1, SG, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), SG
        }
        bind(GG, bG) {}
        buildUniformLayout() {
          const GG = this._uniformBuffer;
          this._eventInfo.ubo = GG, this._callbackPluginEventGeneric(8, this._eventInfo), GG.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(GG, bG, ZG) {
          const wG = ZG._drawWrapper;
          this._eventInfo.subMesh = ZG, this._callbackPluginEventBindForSubMesh(this._eventInfo), wG._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(GG) {}
        bindView(GG) {
          this._useUBO ? this._needToBindSceneUbo = !0 : GG.setMatrix("view", this.Dv().getViewMatrix())
        }
        bindViewProjection(GG) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (GG.setMatrix("viewProjection", this.Dv().getTransformMatrix()), GG.setMatrix("projection", this.Dv().getProjectionMatrix()), GG.setMatrix("inverseProjection", this.Dv().getInverseProjectionMatrix()))
        }
        bindEyePosition(GG, bG) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(GG, bG)
        }
        _afterBind(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && bG && (this._needToBindSceneUbo = !1, (0, hG.z)(bG, this.Dv().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = GG ? GG.visibility : 1, this._onBindObservable && GG && this._onBindObservable.notifyObservers(GG), this.disableDepthWrite) {
            const GG = this._scene.CK();
            this._cachedDepthWriteState = GG.getDepthWrite(), GG.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const GG = this._scene.CK();
            this._cachedColorWriteState = GG.getColorWrite(), GG.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const GG = this._scene.CK();
            this._cachedDepthFunctionState = GG.getDepthFunction() || 0, GG.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.CK().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.CK().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.CK().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(GG) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = GG, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(GG) {
          return null
        }
        _clonePlugins(bG, ZG) {
          const wG = {};
          if (this._serializePlugins(wG), GG._ParsePlugins(wG, bG, this._scene, ZG), this.pluginManager)
            for (const GG of this.pluginManager._plugins) {
              const ZG = bG.pluginManager.getPlugin(GG.name);
              ZG && GG.copyTo(ZG)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const GG = [];
            for (const bG in this.meshMap) {
              const ZG = this.meshMap[bG];
              ZG && GG.push(ZG)
            }
            return GG
          }
          return this._scene.meshes.filter((GG => GG.material === this))
        }
        forceCompilation(GG, bG, ZG, wG) {
          const SG = {
              clipPlane: !1,
              useInstances: !1,
              ...ZG
            },
            LG = this.Dv(),
            yG = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const kG = () => {
            if (!this._scene || !this._scene.CK()) return;
            const ZG = LG.clipPlane;
            if (SG.clipPlane && (LG.clipPlane = new pG.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let ZG = !0,
                LG = null;
              if (GG.aE) {
                const bG = new UG.c(0, 0, 0, 0, 0, GG, void 0, !1, !1);
                bG.materialDefines && (bG.materialDefines._renderId = -1), this.isReadyForSubMesh(GG, bG, SG.useInstances) || (bG.effect && bG.effect.getCompilationError() && bG.effect.allFallbacksProcessed() ? LG = bG.effect.getCompilationError() : (ZG = !1, setTimeout(kG, 16)))
              }
              ZG && (this.allowShaderHotSwapping = yG, LG && wG && wG(LG), bG && bG(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = yG, bG && bG(this)) : setTimeout(kG, 16);
            SG.clipPlane && (LG.clipPlane = ZG)
          };
          kG()
        }
        async forceCompilationAsync(GG, bG) {
          return await new Promise(((ZG, wG) => {
            this.forceCompilation(GG, (() => {
              ZG()
            }), bG, (GG => {
              wG(GG)
            }))
          }))
        }
        wZG(bG) {
          this.Dv().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (GG._DirtyCallbackArray.length = 0, bG & GG.ImageProcessingDirtyFlag && GG._DirtyCallbackArray.push(GG._ImageProcessingDirtyCallBack), bG & GG.TextureDirtyFlag && GG._DirtyCallbackArray.push(GG._TextureDirtyCallBack), bG & GG.LightDirtyFlag && GG._DirtyCallbackArray.push(GG._LightsDirtyCallBack), bG & GG.FresnelDirtyFlag && GG._DirtyCallbackArray.push(GG._FresnelDirtyCallBack), bG & GG.AttributesDirtyFlag && GG._DirtyCallbackArray.push(GG._AttributeDirtyCallBack), bG & GG.MiscDirtyFlag && GG._DirtyCallbackArray.push(GG._MiscDirtyCallBack), bG & GG.PrePassDirtyFlag && GG._DirtyCallbackArray.push(GG._PrePassDirtyCallBack), GG._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(GG._RunDirtyCallBacks), this.Dv().resetCachedMaterial())
        }
        resetDrawCache() {
          const GG = this.Dv().meshes;
          for (const bG of GG)
            if (bG.aE)
              for (const GG of bG.aE) GG.vK() === this && GG.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(GG) {
          const bG = this.Dv();
          if (bG.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ZG = bG.meshes;
          for (const wG of ZG)
            if (wG.aE)
              for (const ZG of wG.aE) {
                if ((ZG.vK() || (bG._hasDefaultMaterial ? bG.defaultMaterial : null)) === this)
                  for (const bG of ZG._drawWrappers) bG && bG.defines && bG.defines.markAllAsDirty && this._materialContext === bG.materialContext && GG(bG.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Dv().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const GG = this.Dv().enablePrePassRenderer();
          GG && GG.wZG()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(GG._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(GG._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(GG._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(GG._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(GG._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(GG._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(GG._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(GG._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(GG._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(GG._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const GG = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Gl.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(GG)
            }))
          }
        }
        setPrePassRenderer(GG) {
          return !1
        }
        dispose(GG, bG, ZG) {
          const wG = this.Dv();
          if (wG.stopAnimation(this), wG.freeProcessedMaterials(), wG.removeMaterial(this), this._eventInfo.forceDisposeTextures = bG, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const GG = this._parentContainer.materials.indexOf(this);
            GG > -1 && this._parentContainer.materials.splice(GG, 1), this._parentContainer = null
          }
          if (!0 !== ZG)
            if (this.meshMap)
              for (const SG in this.meshMap) {
                const GG = this.meshMap[SG];
                this._disposeMeshResources(GG)
              } else {
                const GG = wG.meshes;
                for (const bG of GG) this._disposeMeshResources(bG)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Gl.notifyObservers(this), this.Gl.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(GG) {
          if (!GG) return;
          const bG = GG.geometry,
            ZG = GG._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (GG.aE && ZG)
              for (const wG of GG.aE) {
                const GG = wG._drawWrappers;
                for (let SG = 0; SG < GG.length; SG++) {
                  const LG = GG[SG]?.effect;
                  if (!LG) continue;
                  ZG[SG] === this && (bG?._releaseVertexArrayObject(LG), wG._removeDrawWrapper(SG, !0, !0))
                }
              }
          } else bG?._releaseVertexArrayObject(this._drawWrapper.effect);
          GG.material !== this || GG.ESG || (GG.material = null)
        }
        serialize() {
          const GG = QG.b.Serialize(this);
          return GG.stencil = this.stencil.serialize(), GG.uniqueId = this.uniqueId, this._serializePlugins(GG), GG
        }
        _serializePlugins(GG) {
          if (GG.plugins = {}, this.pluginManager)
            for (const bG of this.pluginManager._plugins) bG.doNotSerialize || (GG.plugins[bG.getClassName()] = bG.serialize())
        }
        static ParseAlphaMode(GG, bG) {
          void 0 !== GG._alphaMode ? bG._alphaMode = Array.isArray(GG._alphaMode) ? [...GG._alphaMode] : [GG._alphaMode] : void 0 !== GG.alphaMode ? bG._alphaMode = Array.isArray(GG.alphaMode) ? [...GG.alphaMode] : [GG.alphaMode] : bG._alphaMode = [2]
        }
        static Parse(bG, ZG, wG) {
          if (bG.customType) {
            if ("BABYLON.PBRMaterial" === bG.customType && bG.overloadedAlbedo && (bG.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return VG.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else bG.customType = "BABYLON.StandardMaterial";
          const SG = LG.f.Instantiate(bG.customType).Parse(bG, ZG, wG);
          return SG._loadedUniqueId = bG.uniqueId, GG.ParseAlphaMode(bG, SG), SG
        }
        static _ParsePlugins(GG, bG, ZG, wG) {
          if (GG.plugins)
            for (const SG in GG.plugins) {
              const yG = GG.plugins[SG];
              let kG = bG.pluginManager?.getPlugin(yG.name);
              if (!kG) {
                const GG = LG.f.Instantiate("BABYLON." + SG);
                GG && (kG = new GG(bG))
              }
              kG?.parse(yG, ZG, wG)
            }
        }
      }, (() => {
        const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], JG = [(0, SG.Q)()], rG = [(0, SG.Q)()], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)("alpha")], uG = [(0, SG.Q)("backFaceCulling")], iG = [(0, SG.Q)("textureRepetitionMode")], CG = [(0, SG.Q)("textureRepetitionHexTilingParams")], WG = [(0, SG.Q)("cullBackFaces")], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], FG = [(0, SG.Q)()], vG = [(0, SG.Q)()], aG = [(0, SG.Q)()], cG = [(0, SG.Q)()], lG = [(0, SG.Q)()], jG = [(0, SG.Q)()], PG = [(0, SG.Q)("fogEnabled")], MG = [(0, SG.Q)()], AG = [(0, SG.Q)()], sG = [(0, SG.Q)()], qG = [(0, SG.Q)()], nG = [(0, SG.Q)()], gG = [(0, SG.Q)()], eG = [(0, SG.Q)()], RG = [(0, SG.Q)()], (0, wG.k)(GG, null, qG, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: GG => "pointsCloud" in GG,
            get: GG => GG.pointsCloud
          },
          metadata: LG
        }, null, TG), (0, wG.k)(GG, null, nG, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "fillMode" in GG,
            get: GG => GG.fillMode
          },
          metadata: LG
        }, null, TG), (0, wG.k)(GG, null, gG, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: GG => "useLogarithmicDepth" in GG,
            get: GG => GG.useLogarithmicDepth
          },
          metadata: LG
        }, null, TG), (0, wG.k)(GG, null, RG, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "transparencyMode" in GG,
            get: GG => GG.transparencyMode
          },
          metadata: LG
        }, null, TG), (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: GG => "id" in GG,
            get: GG => GG.id,
            set: (GG, bG) => {
              GG.id = bG
            }
          },
          metadata: LG
        }, HG, tG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: GG => "uniqueId" in GG,
            get: GG => GG.uniqueId,
            set: (GG, bG) => {
              GG.uniqueId = bG
            }
          },
          metadata: LG
        }, DG, NG), (0, wG.k)(null, null, JG, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: GG => "name" in GG,
            get: GG => GG.name,
            set: (GG, bG) => {
              GG.name = bG
            }
          },
          metadata: LG
        }, OG, xG), (0, wG.k)(null, null, rG, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: GG => "metadata" in GG,
            get: GG => GG.metadata,
            set: (GG, bG) => {
              GG.metadata = bG
            }
          },
          metadata: LG
        }, BG, Gb), (0, wG.k)(null, null, zG, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: GG => "checkReadyOnEveryCall" in GG,
            get: GG => GG.checkReadyOnEveryCall,
            set: (GG, bG) => {
              GG.checkReadyOnEveryCall = bG
            }
          },
          metadata: LG
        }, bb, Zb), (0, wG.k)(null, null, EG, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: GG => "checkReadyOnlyOnce" in GG,
            get: GG => GG.checkReadyOnlyOnce,
            set: (GG, bG) => {
              GG.checkReadyOnlyOnce = bG
            }
          },
          metadata: LG
        }, wb, Sb), (0, wG.k)(null, null, oG, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: GG => "state" in GG,
            get: GG => GG.state,
            set: (GG, bG) => {
              GG.state = bG
            }
          },
          metadata: LG
        }, Lb, yb), (0, wG.k)(null, null, XG, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "_alpha" in GG,
            get: GG => GG._alpha,
            set: (GG, bG) => {
              GG._alpha = bG
            }
          },
          metadata: LG
        }, kb, Ub), (0, wG.k)(null, null, uG, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: GG => "_backFaceCulling" in GG,
            get: GG => GG._backFaceCulling,
            set: (GG, bG) => {
              GG._backFaceCulling = bG
            }
          },
          metadata: LG
        }, Yb, Vb), (0, wG.k)(null, null, iG, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "_textureRepetitionMode" in GG,
            get: GG => GG._textureRepetitionMode,
            set: (GG, bG) => {
              GG._textureRepetitionMode = bG
            }
          },
          metadata: LG
        }, pb, fb), (0, wG.k)(null, null, CG, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: GG => "textureRepetitionHexTilingParams" in GG,
            get: GG => GG.textureRepetitionHexTilingParams,
            set: (GG, bG) => {
              GG.textureRepetitionHexTilingParams = bG
            }
          },
          metadata: LG
        }, Qb, Kb), (0, wG.k)(null, null, WG, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: GG => "_cullBackFaces" in GG,
            get: GG => GG._cullBackFaces,
            set: (GG, bG) => {
              GG._cullBackFaces = bG
            }
          },
          metadata: LG
        }, hb, db), (0, wG.k)(null, null, mG, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: GG => "sideOrientation" in GG,
            get: GG => GG.sideOrientation,
            set: (GG, bG) => {
              GG.sideOrientation = bG
            }
          },
          metadata: LG
        }, Jb, rb), (0, wG.k)(null, null, IG, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "_alphaMode" in GG,
            get: GG => GG._alphaMode,
            set: (GG, bG) => {
              GG._alphaMode = bG
            }
          },
          metadata: LG
        }, zb, Eb), (0, wG.k)(null, null, FG, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: GG => "_needDepthPrePass" in GG,
            get: GG => GG._needDepthPrePass,
            set: (GG, bG) => {
              GG._needDepthPrePass = bG
            }
          },
          metadata: LG
        }, ob, Xb), (0, wG.k)(null, null, vG, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: GG => "disableDepthWrite" in GG,
            get: GG => GG.disableDepthWrite,
            set: (GG, bG) => {
              GG.disableDepthWrite = bG
            }
          },
          metadata: LG
        }, ub, ib), (0, wG.k)(null, null, aG, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: GG => "disableColorWrite" in GG,
            get: GG => GG.disableColorWrite,
            set: (GG, bG) => {
              GG.disableColorWrite = bG
            }
          },
          metadata: LG
        }, Cb, Wb), (0, wG.k)(null, null, cG, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: GG => "forceDepthWrite" in GG,
            get: GG => GG.forceDepthWrite,
            set: (GG, bG) => {
              GG.forceDepthWrite = bG
            }
          },
          metadata: LG
        }, mb, Ib), (0, wG.k)(null, null, lG, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: GG => "depthFunction" in GG,
            get: GG => GG.depthFunction,
            set: (GG, bG) => {
              GG.depthFunction = bG
            }
          },
          metadata: LG
        }, Fb, vb), (0, wG.k)(null, null, jG, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: GG => "separateCullingPass" in GG,
            get: GG => GG.separateCullingPass,
            set: (GG, bG) => {
              GG.separateCullingPass = bG
            }
          },
          metadata: LG
        }, ab, cb), (0, wG.k)(null, null, PG, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "_fogEnabled" in GG,
            get: GG => GG._fogEnabled,
            set: (GG, bG) => {
              GG._fogEnabled = bG
            }
          },
          metadata: LG
        }, lb, jb), (0, wG.k)(null, null, MG, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: GG => "pointSize" in GG,
            get: GG => GG.pointSize,
            set: (GG, bG) => {
              GG.pointSize = bG
            }
          },
          metadata: LG
        }, Pb, Mb), (0, wG.k)(null, null, AG, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: GG => "zOffset" in GG,
            get: GG => GG.zOffset,
            set: (GG, bG) => {
              GG.zOffset = bG
            }
          },
          metadata: LG
        }, Ab, sb), (0, wG.k)(null, null, sG, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: GG => "zOffsetUnits" in GG,
            get: GG => GG.zOffsetUnits,
            set: (GG, bG) => {
              GG.zOffsetUnits = bG
            }
          },
          metadata: LG
        }, qb, nb), (0, wG.k)(null, null, eG, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: GG => "_isVertexOutputInvariant" in GG,
            get: GG => GG._isVertexOutputInvariant,
            set: (GG, bG) => {
              GG._isVertexOutputInvariant = bG
            }
          },
          metadata: LG
        }, gb, eb), LG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LG
        })
      })(), GG.TriangleFillMode = 0, GG.WireFrameFillMode = 1, GG.PointFillMode = 2, GG.PointListDrawMode = 3, GG.LineListDrawMode = 4, GG.LineLoopDrawMode = 5, GG.LineStripDrawMode = 6, GG.TriangleStripDrawMode = 7, GG.TriangleFanDrawMode = 8, GG.ClockWiseSideOrientation = 0, GG.CounterClockWiseSideOrientation = 1, GG.ImageProcessingDirtyFlag = 64, GG.TextureDirtyFlag = 1, GG.LightDirtyFlag = 2, GG.FresnelDirtyFlag = 4, GG.AttributesDirtyFlag = 8, GG.MiscDirtyFlag = 16, GG.PrePassDirtyFlag = 32, GG.AllDirtyFlag = 127, GG.MATERIAL_OPAQUE = 0, GG.MATERIAL_ALPHATEST = 1, GG.MATERIAL_ALPHABLEND = 2, GG.MATERIAL_ALPHATESTANDBLEND = 3, GG.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, GG.MATERIAL_NORMALBLENDMETHOD_RNM = 1, GG.LIGHTFALLOFF_PHYSICAL = 0, GG.LIGHTFALLOFF_GLTF = 1, GG.LIGHTFALLOFF_STANDARD = 2, GG.OnEventObservable = new yG.c, GG.ForceVertexOutputInvariant = !1, GG._AllDirtyCallBack = GG => GG.markAllAsDirty(), GG._ImageProcessingDirtyCallBack = GG => GG.markAsImageProcessingDirty(), GG._TextureDirtyCallBack = GG => GG.markAsTexturesDirty(), GG._FresnelDirtyCallBack = GG => GG.markAsFresnelDirty(), GG._MiscDirtyCallBack = GG => GG.markAsMiscDirty(), GG._PrePassDirtyCallBack = GG => GG.markAsPrePassDirty(), GG._LightsDirtyCallBack = GG => GG.markAsLightDirty(), GG._AttributeDirtyCallBack = GG => GG.markAsAttributesDirty(), GG._FresnelAndMiscDirtyCallBack = bG => {
        GG._FresnelDirtyCallBack(bG), GG._MiscDirtyCallBack(bG)
      }, GG._TextureAndMiscDirtyCallBack = bG => {
        GG._TextureDirtyCallBack(bG), GG._MiscDirtyCallBack(bG)
      }, GG._DirtyCallbackArray = [], GG._RunDirtyCallBacks = bG => {
        for (const ZG of GG._DirtyCallbackArray) ZG(bG)
      }, GG
    })();
    Object.getOwnPropertyDescriptor(rG.prototype, "pluginManager") || Object.defineProperty(rG.prototype, "pluginManager", (0, JG.d)("Material", "pluginManager"))
  },
  40717: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(40280);
    class SG {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(GG) {
        this._DiffuseTextureEnabled !== GG && (this._DiffuseTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(GG) {
        this._BaseWeightTextureEnabled !== GG && (this._BaseWeightTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(GG) {
        this._BaseDiffuseRoughnessTextureEnabled !== GG && (this._BaseDiffuseRoughnessTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(GG) {
        this._DetailTextureEnabled !== GG && (this._DetailTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(GG) {
        this._DecalMapEnabled !== GG && (this._DecalMapEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(GG) {
        this._AmbientTextureEnabled !== GG && (this._AmbientTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(GG) {
        this._OpacityTextureEnabled !== GG && (this._OpacityTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(GG) {
        this._ReflectionTextureEnabled !== GG && (this._ReflectionTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(GG) {
        this._EmissiveTextureEnabled !== GG && (this._EmissiveTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(GG) {
        this._SpecularTextureEnabled !== GG && (this._SpecularTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(GG) {
        this._BumpTextureEnabled !== GG && (this._BumpTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(GG) {
        this._LightmapTextureEnabled !== GG && (this._LightmapTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(GG) {
        this._RefractionTextureEnabled !== GG && (this._RefractionTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(GG) {
        this._ColorGradingTextureEnabled !== GG && (this._ColorGradingTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(GG) {
        this._FresnelEnabled !== GG && (this._FresnelEnabled = GG, wG.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(GG) {
        this._ClearCoatTextureEnabled !== GG && (this._ClearCoatTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(GG) {
        this._ClearCoatBumpTextureEnabled !== GG && (this._ClearCoatBumpTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(GG) {
        this._ClearCoatTintTextureEnabled !== GG && (this._ClearCoatTintTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(GG) {
        this._SheenTextureEnabled !== GG && (this._SheenTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(GG) {
        this._AnisotropicTextureEnabled !== GG && (this._AnisotropicTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(GG) {
        this._ThicknessTextureEnabled !== GG && (this._ThicknessTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(GG) {
        this._RefractionIntensityTextureEnabled !== GG && (this._RefractionIntensityTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(GG) {
        this._TranslucencyIntensityTextureEnabled !== GG && (this._TranslucencyIntensityTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(GG) {
        this._TranslucencyColorTextureEnabled !== GG && (this._TranslucencyColorTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(GG) {
        this._IridescenceTextureEnabled !== GG && (this._IridescenceTextureEnabled = GG, wG.c.MarkAllMaterialsAsDirty(1))
      }
    }
    SG._DiffuseTextureEnabled = !0, SG._BaseWeightTextureEnabled = !0, SG._BaseDiffuseRoughnessTextureEnabled = !0, SG._DetailTextureEnabled = !0, SG._DecalMapEnabled = !0, SG._AmbientTextureEnabled = !0, SG._OpacityTextureEnabled = !0, SG._ReflectionTextureEnabled = !0, SG._EmissiveTextureEnabled = !0, SG._SpecularTextureEnabled = !0, SG._BumpTextureEnabled = !0, SG._LightmapTextureEnabled = !0, SG._RefractionTextureEnabled = !0, SG._ColorGradingTextureEnabled = !0, SG._FresnelEnabled = !0, SG._ClearCoatTextureEnabled = !0, SG._ClearCoatBumpTextureEnabled = !0, SG._ClearCoatTintTextureEnabled = !0, SG._SheenTextureEnabled = !0, SG._AnisotropicTextureEnabled = !0, SG._ThicknessTextureEnabled = !0, SG._RefractionIntensityTextureEnabled = !0, SG._TranslucencyIntensityTextureEnabled = !0, SG._TranslucencyColorTextureEnabled = !0, SG._IridescenceTextureEnabled = !0
  },
  40705: (GG, bG, ZG) => {
    ZG.d(bG, {
      C: () => EG,
      G: () => FG,
      K: () => oG,
      M: () => mG,
      P: () => IG,
      R: () => QG,
      T: () => fG,
      U: () => nG,
      V: () => PG,
      W: () => lG,
      Z: () => cG,
      bb: () => zG,
      cb: () => vG,
      e: () => aG,
      eb: () => gG,
      i: () => XG,
      ib: () => eG,
      l: () => pG,
      lb: () => RG,
      mb: () => DG,
      o: () => JG,
      pb: () => HG,
      r: () => rG,
      tb: () => tG,
      u: () => WG,
      vb: () => KG,
      w: () => UG,
      y: () => hG,
      z: () => dG
    });
    var wG = ZG(39093),
      SG = ZG(37463),
      LG = ZG(40573),
      yG = ZG(40709),
      kG = ZG(40717);

    function UG(GG, bG, ZG) {
      if (!GG || GG.LOGARITHMICDEPTH || GG.indexOf && GG.indexOf("LOGARITHMICDEPTH") >= 0) {
        const GG = ZG.activeCamera;
        1 === GG.mode && wG.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), bG.setFloat("logarithmicDepthConstant", 2 / (Math.log(GG.maxZ + 1) / Math.LN2))
      }
    }
    const YG = {
        r: 0,
        g: 0,
        b: 0
      },
      VG = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function pG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ZG && GG.fogEnabled && (!bG || bG.applyFog) && 0 !== GG.fogMode && (ZG.setFloat4("vFogInfos", GG.fogMode, GG.fogStart, GG.fogEnd, GG.fogDensity), wG ? (GG.fogColor.toLinearSpaceToRef(YG, GG.CK().useExactSrgbConversions), ZG.setColor3("vFogColor", YG)) : ZG.setColor3("vFogColor", GG.fogColor))
    }

    function fG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
      const pG = GG.numMaxInfluencers || GG.numInfluencers;
      return pG <= 0 ? 0 : (bG.push("#define MORPHTARGETS"), GG.hasPositions && bG.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), GG.hasNormals && bG.push("#define MORPHTARGETTEXTURE_HASNORMALS"), GG.hasTangents && bG.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), GG.hasUVs && bG.push("#define MORPHTARGETTEXTURE_HASUVS"), GG.hasUV2s && bG.push("#define MORPHTARGETTEXTURE_HASUV2S"), GG.hasColors && bG.push("#define MORPHTARGETTEXTURE_HASCOLORS"), GG.supportsPositions && SG && bG.push("#define MORPHTARGETS_POSITION"), GG.supportsNormals && LG && bG.push("#define MORPHTARGETS_NORMAL"), GG.supportsTangents && yG && bG.push("#define MORPHTARGETS_TANGENT"), GG.supportsUVs && kG && bG.push("#define MORPHTARGETS_UV"), GG.supportsUV2s && UG && bG.push("#define MORPHTARGETS_UV2"), GG.supportsColors && YG && bG.push("#define MORPHTARGETS_COLOR"), bG.push("#define NUM_MORPH_INFLUENCERS " + pG), GG.isUsingTextureForTargets && bG.push("#define MORPHTARGETS_TEXTURE"), VG.NUM_MORPH_INFLUENCERS = pG, VG.NORMAL = LG, VG.TANGENT = yG, VG.UV = kG, VG.UV2 = UG, VG.COLOR = YG, QG(ZG, wG, VG, SG), pG)
    }

    function QG(GG, bG, ZG) {
      let LG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const yG = ZG.NUM_MORPH_INFLUENCERS;
      if (yG > 0 && SG.c.LastCreatedEngine) {
        const kG = SG.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          UG = bG.morphTargetManager;
        if (UG?.isUsingTextureForTargets) return;
        const YG = UG && UG.supportsPositions && LG,
          VG = UG && UG.supportsNormals && ZG.NORMAL,
          pG = UG && UG.supportsTangents && ZG.TANGENT,
          fG = UG && UG.supportsUVs && ZG.UV1,
          QG = UG && UG.supportsUV2s && ZG.UV2,
          KG = UG && UG.supportsColors && ZG.VERTEXCOLOR;
        for (let ZG = 0; ZG < yG; ZG++) YG && GG.push("position" + ZG), VG && GG.push("normal" + ZG), pG && GG.push("tangent" + ZG), fG && GG.push("uv_" + ZG), QG && GG.push("uv2_" + ZG), KG && GG.push("color" + ZG), GG.length > kG && wG.c.Error("Cannot add more vertex attributes for mesh " + bG.name)
      }
    }

    function KG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      GG.push("world0"), GG.push("world1"), GG.push("world2"), GG.push("world3"), bG && (GG.push("previousWorld0"), GG.push("previousWorld1"), GG.push("previousWorld2"), GG.push("previousWorld3"))
    }

    function hG(GG, bG) {
      const ZG = GG.morphTargetManager;
      GG && ZG && bG.setFloatArray("morphTargetInfluences", ZG.influences)
    }

    function dG(GG, bG) {
      bG.bindToEffect(GG, "Scene")
    }

    function JG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        VG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        pG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        fG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (GG.texturesEnabled && SG && kG.d.ReflectionTextureEnabled) {
        if (ZG.R6("reflectionMatrix", SG.getReflectionTextureMatrix()), ZG.updateFloat2("vReflectionInfos", SG.level * GG.iblIntensity, fG), UG && SG.boundingBoxSize) {
          const GG = SG;
          ZG.updateVector3("vReflectionPosition", GG.boundingBoxPosition), ZG.updateVector3("vReflectionSize", GG.boundingBoxSize)
        }
        if (LG) {
          const GG = SG.getSize().width;
          ZG.updateFloat2("vReflectionFilteringInfo", GG, Math.log2(GG))
        }
        if (VG && !bG.USEIRRADIANCEMAP) {
          const GG = SG.sphericalPolynomial;
          if (bG.USESPHERICALFROMREFLECTIONMAP && GG)
            if (bG.SPHERICAL_HARMONICS) {
              const bG = GG.preScaledHarmonics;
              ZG.updateVector3("vSphericalL00", bG.l00), ZG.updateVector3("vSphericalL1_1", bG.l1_1), ZG.updateVector3("vSphericalL10", bG.l10), ZG.updateVector3("vSphericalL11", bG.l11), ZG.updateVector3("vSphericalL2_2", bG.l2_2), ZG.updateVector3("vSphericalL2_1", bG.l2_1), ZG.updateVector3("vSphericalL20", bG.l20), ZG.updateVector3("vSphericalL21", bG.l21), ZG.updateVector3("vSphericalL22", bG.l22)
            } else ZG.updateFloat3("vSphericalX", GG.x.x, GG.x.y, GG.x.z), ZG.updateFloat3("vSphericalY", GG.y.x, GG.y.y, GG.y.z), ZG.updateFloat3("vSphericalZ", GG.z.x, GG.z.y, GG.z.z), ZG.updateFloat3("vSphericalXX_ZZ", GG.xx.x - GG.zz.x, GG.xx.y - GG.zz.y, GG.xx.z - GG.zz.z), ZG.updateFloat3("vSphericalYY_ZZ", GG.yy.x - GG.zz.x, GG.yy.y - GG.zz.y, GG.yy.z - GG.zz.z), ZG.updateFloat3("vSphericalZZ", GG.zz.x, GG.zz.y, GG.zz.z), ZG.updateFloat3("vSphericalXY", GG.xy.x, GG.xy.y, GG.xy.z), ZG.updateFloat3("vSphericalYZ", GG.yz.x, GG.yz.y, GG.yz.z), ZG.updateFloat3("vSphericalZX", GG.zx.x, GG.zx.y, GG.zx.z)
        } else YG && bG.USEIRRADIANCEMAP && bG.USE_IRRADIANCE_DOMINANT_DIRECTION && SG.irradianceTexture && ZG.updateVector3("vReflectionDominantDirection", SG.irradianceTexture._dominantDirection);
        yG && ZG.updateFloat3("vReflectionMicrosurfaceInfos", SG.getSize().width, SG.lodGenerationScale, SG.lodGenerationOffset)
      }
      pG && ZG.updateColor3("vReflectionColor", wG)
    }

    function rG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (wG && kG.d.ReflectionTextureEnabled) {
        bG.LODBASEDMICROSFURACE ? ZG.setTexture("reflectionSampler", wG) : (ZG.setTexture("reflectionSampler", wG._lodTextureMid || wG), ZG.setTexture("reflectionSamplerLow", wG._lodTextureLow || wG), ZG.setTexture("reflectionSamplerHigh", wG._lodTextureHigh || wG)), bG.USEIRRADIANCEMAP && ZG.setTexture("irradianceSampler", wG.irradianceTexture);
        const LG = GG.iblCdfGenerator;
        SG && LG && ZG.setTexture("icdfSampler", LG.getIcdfTexture())
      }
    }

    function zG(GG, bG, ZG) {
      bG._needUVs = !0, bG[ZG] = !0, GG.optimizeUVAllocation && GG.getTextureMatrix().isIdentityAs3x2() ? (bG[ZG + "DIRECTUV"] = GG.coordinatesIndex + 1, bG["MAINUV" + (GG.coordinatesIndex + 1)] = !0) : bG[ZG + "DIRECTUV"] = 0
    }

    function EG(GG, bG, ZG) {
      const wG = GG.getTextureMatrix();
      bG.R6(ZG + "Matrix", wG)
    }

    function oG(GG, bG, ZG) {
      ZG.BAKED_VERTEX_ANIMATION_TEXTURE && ZG.INSTANCES && GG.push("bakedVertexAnimationSettingsInstanced")
    }

    function XG(GG, bG, ZG) {
      var wG;
      if (bG && GG && (GG.computeBonesUsingShaders && bG._bonesComputationForcedToCPU && (GG.computeBonesUsingShaders = !1), GG.useBones && GG.computeBonesUsingShaders && GG.skeleton)) {
        const SG = GG.skeleton;
        if (SG.isUsingTextureForMatrices && bG.getUniformIndex("boneTextureInfo") > -1) {
          const ZG = SG.getTransformMatrixTexture(GG);
          bG.setTexture("boneSampler", ZG), bG.setFloat2("boneTextureInfo", SG._textureWidth, SG._textureHeight)
        } else {
          const LG = SG.getTransformMatrices(GG);
          LG && (bG.setMatrices("mBones", LG), ZG && GG.Dv().prePassRenderer && GG.Dv().prePassRenderer.getIndex(2) && (ZG.previousBones[GG.uniqueId] || (ZG.previousBones[GG.uniqueId] = LG.slice()), bG.setMatrices("mPreviousBones", ZG.previousBones[GG.uniqueId]), wG = LG, ZG.previousBones[GG.uniqueId].set(wG)))
        }
      }
    }

    function uG(GG, bG, ZG, wG, SG) {
      let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      GG._bindLight(bG, ZG, wG, SG, LG)
    }
    const iG = 4,
      CG = new WeakMap;

    function WG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const LG = Math.min(bG.lightSources.length, SG);
      for (let yG = 0; yG < LG; yG++) {
        uG(bG.lightSources[yG], yG, GG, ZG, "boolean" === typeof wG ? wG : wG.SPECULARTERM, bG.receiveShadows)
      }
    }

    function mG(GG, bG, ZG, wG) {
      ZG.NUM_BONE_INFLUENCERS > 0 && (wG.addCPUSkinningFallback(0, bG), GG.push("matricesIndices"), GG.push("matricesWeights"), ZG.NUM_BONE_INFLUENCERS > 4 && (GG.push("matricesIndicesExtra"), GG.push("matricesWeightsExtra")))
    }

    function IG(GG, bG) {
      (bG.INSTANCES || bG.THIN_INSTANCES) && KG(GG, !!bG.PREPASS_VELOCITY), bG.INSTANCESCOLOR && GG.push("instanceColor")
    }

    function FG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SG = 0;
      for (let LG = 0; LG < ZG && GG["LIGHT" + LG]; LG++) LG > 0 && (SG = wG + LG, bG.addFallback(SG, "LIGHT" + LG)), GG.SHADOWS || (GG["SHADOW" + LG] && bG.addFallback(wG, "SHADOW" + LG), GG["SHADOWPCF" + LG] && bG.addFallback(wG, "SHADOWPCF" + LG), GG["SHADOWPCSS" + LG] && bG.addFallback(wG, "SHADOWPCSS" + LG), GG["SHADOWPOISSON" + LG] && bG.addFallback(wG, "SHADOWPOISSON" + LG), GG["SHADOWESM" + LG] && bG.addFallback(wG, "SHADOWESM" + LG), GG["SHADOWCLOSEESM" + LG] && bG.addFallback(wG, "SHADOWCLOSEESM" + LG));
      return SG
    }

    function vG(GG, bG, ZG, wG, SG, LG, yG) {
      let kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        YG = arguments.length > 9 ? arguments[9] : void 0,
        VG = arguments.length > 10 ? arguments[10] : void 0;
      if (yG._areMiscDirty) {
        yG.LOGARITHMICDEPTH = ZG, yG.POINTSIZE = wG, yG.FOG = SG && function(GG, bG) {
          return bG.fogEnabled && GG.applyFog && 0 !== bG.fogMode
        }(GG, bG), yG.NONUNIFORMSCALING = GG.nonUniformScaling, yG.ALPHATEST = LG, yG.DECAL_AFTER_DETAIL = kG, yG.USE_VERTEX_PULLING = UG, yG.RIGHT_HANDED = bG.useRightHandedSystem;
        const pG = UG ? YG?.geometry?.getIndexBuffer() : null,
          fG = !!YG && YG.isUnIndexed;
        yG.VERTEX_PULLING_USE_INDEX_BUFFER = !!pG && !fG, yG.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!pG || fG) && pG.is32Bits, yG.VERTEXOUTPUT_INVARIANT = !!VG
      }
    }

    function aG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!GG.lightsEnabled || wG) return !0;
      const SG = bG.lightSources,
        LG = Math.min(SG.length, ZG);
      for (let yG = 0; yG < LG; yG++)
        if (!SG[yG].areLightTexturesReady()) return !1;
      return !0
    }

    function cG(GG, bG, ZG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ZG._areLightsDirty) return ZG._needNormals;
      const kG = LG;
      LG = function(GG, bG) {
        const ZG = GG.CK().getCaps().maxUniformBuffersPerShaderStage;
        if (null == ZG) return bG;
        const wG = Math.max(ZG - iG, 1);
        return Math.min(bG, wG)
      }(GG, LG);
      let UG = 0;
      const YG = {
        needNormals: ZG._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (GG.lightsEnabled && !yG) {
        bG.lightSources.length > LG && LG < kG && function(GG, bG, ZG, SG) {
          let LG = CG.get(GG);
          LG || (LG = new Set, CG.set(GG, LG)), LG.has(SG) || (LG.add(SG), wG.c.Warn(`maxSimultaneousLights is ${bG} but this engine supports at most ${ZG} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${SG} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${SG+iG} uniform buffers, over the device limit of ${GG.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${ZG}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${ZG} or less to silence this warning.`))
        }(GG.CK(), kG, LG, Math.min(bG.lightSources.length, kG));
        for (const wG of bG.lightSources)
          if (jG(GG, bG, wG, UG, ZG, SG, YG), UG++, UG === LG) break
      }
      ZG.SPECULARTERM = YG.specularEnabled, ZG.SHADOWS = YG.shadowEnabled;
      const VG = Math.max(LG, ZG.MAXLIGHTCOUNT || 0);
      for (let wG = UG; wG < VG; wG++) void 0 !== ZG["LIGHT" + wG] && (ZG["LIGHT" + wG] = !1, ZG["HEMILIGHT" + wG] = !1, ZG["POINTLIGHT" + wG] = !1, ZG["DIRLIGHT" + wG] = !1, ZG["SPOTLIGHT" + wG] = !1, ZG["AREALIGHT" + wG] = !1, ZG["CLUSTLIGHT" + wG] = !1, ZG["SHADOW" + wG] = !1, ZG["SHADOWCSM" + wG] = !1, ZG["SHADOWCSMDEBUG" + wG] = !1, ZG["SHADOWCSMNUM_CASCADES" + wG] = !1, ZG["SHADOWCSMUSESHADOWMAXZ" + wG] = !1, ZG["SHADOWCSMNOBLEND" + wG] = !1, ZG["SHADOWCSM_RIGHTHANDED" + wG] = !1, ZG["SHADOWPCF" + wG] = !1, ZG["SHADOWPCSS" + wG] = !1, ZG["SHADOWPOISSON" + wG] = !1, ZG["SHADOWESM" + wG] = !1, ZG["SHADOWCLOSEESM" + wG] = !1, ZG["SHADOWCUBE" + wG] = !1, ZG["SHADOWLOWQUALITY" + wG] = !1, ZG["SHADOWMEDIUMQUALITY" + wG] = !1);
      ZG.LIGHTCOUNT = UG, ZG.MAXLIGHTCOUNT = LG;
      const pG = GG.CK().getCaps();
      return void 0 === ZG.SHADOWFLOAT && (YG.needRebuild = !0), ZG.SHADOWFLOAT = YG.shadowEnabled && (pG.textureFloatRender && pG.textureFloatLinearFiltering || pG.textureHalfFloatRender && pG.textureHalfFloatLinearFiltering), ZG.LIGHTMAPEXCLUDED = YG.lightmapMode, YG.needRebuild && ZG.rebuild(), YG.needNormals
    }

    function lG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (bG && kG.d.ReflectionTextureEnabled) {
        if (!bG.isReadyOrNotBlocking()) return !1;
        ZG._needNormals = !0, ZG.REFLECTION = !0, ZG.GAMMAREFLECTION = bG.gammaSpace, ZG.RGBDREFLECTION = bG.isRGBD, ZG.LODINREFLECTIONALPHA = bG.lodLevelInAlpha, ZG.LINEARSPECULARREFLECTION = bG.linearSpecularLOD, ZG.USEIRRADIANCEMAP = !1, ZG.LODBASEDMICROSFURACE = GG.CK().getCaps().textureLOD;
        const yG = GG.CK();
        switch (wG && SG > 0 ? (ZG.NUM_SAMPLES = "" + SG, yG._features.needTypeSuffixInShaderConstants && (ZG.NUM_SAMPLES = ZG.NUM_SAMPLES + "u"), ZG.REALTIME_FILTERING = !0, GG.iblCdfGenerator && (ZG.IBL_CDF_FILTERING = !0)) : ZG.REALTIME_FILTERING = !1, ZG.INVERTCUBICMAP = 6 === bG.coordinatesMode, ZG.REFLECTIONMAP_3D = bG.isCube, ZG.REFLECTIONMAP_OPPOSITEZ = ZG.REFLECTIONMAP_3D && GG.useRightHandedSystem ? !bG.invertZ : bG.invertZ, ZG.REFLECTIONMAP_CUBIC = !1, ZG.REFLECTIONMAP_EXPLICIT = !1, ZG.REFLECTIONMAP_PLANAR = !1, ZG.REFLECTIONMAP_PROJECTION = !1, ZG.REFLECTIONMAP_SKYBOX = !1, ZG.REFLECTIONMAP_SPHERICAL = !1, ZG.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZG.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZG.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, bG.coordinatesMode) {
          case 0:
            ZG.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            ZG.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            ZG.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            ZG.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            ZG.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            ZG.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            ZG.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            ZG.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            ZG.REFLECTIONMAP_CUBIC = !0, ZG.USE_LOCAL_REFLECTIONMAP_CUBIC = !!bG.boundingBoxSize
        }
        5 !== bG.coordinatesMode && (bG.irradianceTexture ? (ZG.USEIRRADIANCEMAP = !0, ZG.USESPHERICALFROMREFLECTIONMAP = !1, ZG.USESPHERICALINVERTEX = !1, bG.irradianceTexture._dominantDirection ? ZG.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : ZG.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : bG.isCube && (ZG.USESPHERICALFROMREFLECTIONMAP = !0, ZG.USEIRRADIANCEMAP = !1, ZG.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZG.USESPHERICALINVERTEX = LG))
      } else ZG.REFLECTION = !1, ZG.REFLECTIONMAP_3D = !1, ZG.REFLECTIONMAP_SPHERICAL = !1, ZG.REFLECTIONMAP_PLANAR = !1, ZG.REFLECTIONMAP_CUBIC = !1, ZG.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, ZG.REFLECTIONMAP_PROJECTION = !1, ZG.REFLECTIONMAP_SKYBOX = !1, ZG.REFLECTIONMAP_EXPLICIT = !1, ZG.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZG.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZG.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ZG.INVERTCUBICMAP = !1, ZG.USESPHERICALFROMREFLECTIONMAP = !1, ZG.USEIRRADIANCEMAP = !1, ZG.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZG.USESPHERICALINVERTEX = !1, ZG.REFLECTIONMAP_OPPOSITEZ = !1, ZG.LODINREFLECTIONALPHA = !1, ZG.GAMMAREFLECTION = !1, ZG.RGBDREFLECTION = !1, ZG.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function jG(GG, bG, ZG, wG, SG, yG, kG) {
      switch (kG.needNormals = !0, void 0 === SG["LIGHT" + wG] && (kG.needRebuild = !0), SG["LIGHT" + wG] = !0, SG["SPOTLIGHT" + wG] = !1, SG["HEMILIGHT" + wG] = !1, SG["POINTLIGHT" + wG] = !1, SG["DIRLIGHT" + wG] = !1, SG["AREALIGHT" + wG] = !1, SG["CLUSTLIGHT" + wG] = !1, ZG.prepareLightSpecificDefines(SG, wG), SG["LIGHT_FALLOFF_PHYSICAL" + wG] = !1, SG["LIGHT_FALLOFF_GLTF" + wG] = !1, SG["LIGHT_FALLOFF_STANDARD" + wG] = !1, ZG.falloffType) {
        case LG.b.FALLOFF_GLTF:
          SG["LIGHT_FALLOFF_GLTF" + wG] = !0;
          break;
        case LG.b.FALLOFF_PHYSICAL:
          SG["LIGHT_FALLOFF_PHYSICAL" + wG] = !0;
          break;
        case LG.b.FALLOFF_STANDARD:
          SG["LIGHT_FALLOFF_STANDARD" + wG] = !0
      }
      if (yG && !ZG.specular.equalsFloats(0, 0, 0) && (kG.specularEnabled = !0), SG["SHADOW" + wG] = !1, SG["SHADOWCSM" + wG] = !1, SG["SHADOWCSMDEBUG" + wG] = !1, SG["SHADOWCSMNUM_CASCADES" + wG] = !1, SG["SHADOWCSMUSESHADOWMAXZ" + wG] = !1, SG["SHADOWCSMNOBLEND" + wG] = !1, SG["SHADOWCSM_RIGHTHANDED" + wG] = !1, SG["SHADOWPCF" + wG] = !1, SG["SHADOWPCSS" + wG] = !1, SG["SHADOWPOISSON" + wG] = !1, SG["SHADOWESM" + wG] = !1, SG["SHADOWCLOSEESM" + wG] = !1, SG["SHADOWCUBE" + wG] = !1, SG["SHADOWLOWQUALITY" + wG] = !1, SG["SHADOWMEDIUMQUALITY" + wG] = !1, bG && bG.receiveShadows && GG.shadowsEnabled && ZG.shadowEnabled) {
        const bG = ZG.getShadowGenerator(GG.activeCamera) ?? ZG.getShadowGenerator();
        if (bG) {
          const GG = bG.getShadowMap();
          GG && GG.renderList && GG.renderList.length > 0 && (kG.shadowEnabled = !0, bG.prepareDefines(SG, wG))
        }
      }
      ZG.lightmapMode != LG.b.LIGHTMAP_DEFAULT ? (kG.lightmapMode = !0, SG["LIGHTMAPEXCLUDED" + wG] = !0, SG["LIGHTMAPNOSPECULAR" + wG] = ZG.lightmapMode == LG.b.LIGHTMAP_SHADOWSONLY) : (SG["LIGHTMAPEXCLUDED" + wG] = !1, SG["LIGHTMAPNOSPECULAR" + wG] = !1)
    }

    function PG(GG, bG, ZG, wG, SG) {
      let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        kG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        UG = function(GG, bG) {
          let ZG = !1;
          if (GG.activeCamera) {
            const wG = bG.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              SG = bG.CAMERA_PERSPECTIVE ? 1 : 0,
              LG = 1 === GG.activeCamera.mode ? 1 : 0,
              yG = 0 === GG.activeCamera.mode ? 1 : 0;
            (wG ^ LG || SG ^ yG) && (bG.CAMERA_ORTHOGRAPHIC = 1 === LG, bG.CAMERA_PERSPECTIVE = 1 === yG, ZG = !0)
          }
          return ZG
        }(GG, wG);
      !1 !== LG && (UG = (0, yG.i)(ZG, GG, wG)), wG.DEPTHPREPASS !== !bG.getColorWrite() && (wG.DEPTHPREPASS = !wG.DEPTHPREPASS, UG = !0), wG.INSTANCES !== SG && (wG.INSTANCES = SG, UG = !0), wG.THIN_INSTANCES !== kG && (wG.THIN_INSTANCES = kG, UG = !0), UG && wG.markAsUnprocessed()
    }
    const MG = 40,
      AG = 64,
      sG = new WeakMap,
      qG = new WeakSet;

    function nG(GG, bG, ZG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        kG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!bG._areAttributesDirty && bG._needNormals === bG._normals && bG._needUVs === bG._uvs) return !1;
      bG._normals = bG._needNormals, bG._uvs = bG._needUVs, bG.NORMAL = bG._needNormals && GG.isVerticesDataPresent("normal"), bG._needNormals && GG.isVerticesDataPresent("tangent") && (bG.TANGENT = !0);
      for (let wG = 1; wG <= 6; ++wG) bG["UV" + wG] = !!bG._needUVs && GG.isVerticesDataPresent(`uv${1===wG?"":wG}`);
      if (ZG) {
        const ZG = GG.useVertexColors && GG.isVerticesDataPresent("color");
        bG.VERTEXCOLOR = ZG, bG.VERTEXALPHA = GG.hasVertexAlpha && ZG && yG
      }
      return GG.isVerticesDataPresent("instanceColor") && (GG.zSG || GG.hasThinInstances) && (bG.INSTANCESCOLOR = !0), SG && function(GG, bG) {
        if (GG.useBones && GG.computeBonesUsingShaders && GG.skeleton) {
          bG.NUM_BONE_INFLUENCERS = GG.numBoneInfluencers;
          const ZG = void 0 !== bG.BONETEXTURE;
          if (GG.skeleton.isUsingTextureForMatrices && ZG) bG.BONETEXTURE = !0;
          else {
            bG.BonesPerMesh = GG.skeleton.bones.length + 1, bG.BONETEXTURE = !ZG && void 0;
            const SG = GG.Dv(),
              LG = SG.prePassRenderer;
            if (LG && LG.enabled) {
              const ZG = -1 === LG.excludedSkinnedMesh.indexOf(GG);
              bG.BONES_VELOCITY_ENABLED = ZG
            }
            const yG = !0 === bG.MULTIVIEW,
              kG = 2 * bG.BonesPerMesh + (yG ? 1 : 0);
            if (sG.get(GG.skeleton) !== kG) {
              sG.set(GG.skeleton, kG);
              const ZG = SG.CK().getCaps().maxVertexUniformVectors;
              if (ZG && !qG.has(GG.skeleton)) {
                const SG = 4 * bG.BonesPerMesh,
                  LG = yG ? AG : MG,
                  kG = Math.max(ZG - LG, 0);
                (SG > kG || yG && 3 * SG > ZG) && (qG.add(GG.skeleton), wG.c.Warn(`Skeleton "${GG.skeleton.name}": ${GG.skeleton.bones.length} bones stored as vertex uniforms use ${SG} of ~${kG} usable uniform vectors${yG?" (multiview)":""} on a device reporting ${ZG}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else bG.NUM_BONE_INFLUENCERS = 0, bG.BonesPerMesh = 0, void 0 !== bG.BONETEXTURE && (bG.BONETEXTURE = !1)
      }(GG, bG), LG && function(GG, bG) {
        const ZG = GG.morphTargetManager;
        ZG ? (bG.MORPHTARGETS_UV = ZG.supportsUVs && bG.UV1, bG.MORPHTARGETS_UV2 = ZG.supportsUV2s && bG.UV2, bG.MORPHTARGETS_TANGENT = ZG.supportsTangents && bG.TANGENT, bG.MORPHTARGETS_NORMAL = ZG.supportsNormals && bG.NORMAL, bG.MORPHTARGETS_POSITION = ZG.supportsPositions, bG.MORPHTARGETS_COLOR = ZG.supportsColors, bG.MORPHTARGETTEXTURE_HASUVS = ZG.hasUVs, bG.MORPHTARGETTEXTURE_HASUV2S = ZG.hasUV2s, bG.MORPHTARGETTEXTURE_HASTANGENTS = ZG.hasTangents, bG.MORPHTARGETTEXTURE_HASNORMALS = ZG.hasNormals, bG.MORPHTARGETTEXTURE_HASPOSITIONS = ZG.hasPositions, bG.MORPHTARGETTEXTURE_HASCOLORS = ZG.hasColors, bG.NUM_MORPH_INFLUENCERS = ZG.numMaxInfluencers || ZG.numInfluencers, bG.MORPHTARGETS = bG.NUM_MORPH_INFLUENCERS > 0, bG.MORPHTARGETS_TEXTURE = ZG.isUsingTextureForTargets) : (bG.MORPHTARGETS_UV = !1, bG.MORPHTARGETS_UV2 = !1, bG.MORPHTARGETS_TANGENT = !1, bG.MORPHTARGETS_NORMAL = !1, bG.MORPHTARGETS_POSITION = !1, bG.MORPHTARGETS_COLOR = !1, bG.MORPHTARGETTEXTURE_HASUVS = !1, bG.MORPHTARGETTEXTURE_HASUV2S = !1, bG.MORPHTARGETTEXTURE_HASTANGENTS = !1, bG.MORPHTARGETTEXTURE_HASNORMALS = !1, bG.MORPHTARGETTEXTURE_HASPOSITIONS = !1, bG.MORPHTARGETTEXTURE_HAS_COLORS = !1, bG.MORPHTARGETS = !1, bG.NUM_MORPH_INFLUENCERS = 0)
      }(GG, bG), kG && function(GG, bG) {
        const ZG = GG.bakedVertexAnimationManager;
        bG.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ZG || !ZG.isEnabled)
      }(GG, bG), !0
    }

    function gG(GG, bG) {
      if (GG.activeCamera) {
        const ZG = bG.MULTIVIEW;
        bG.MULTIVIEW = null !== GG.activeCamera.outputRenderTarget && GG.activeCamera.outputRenderTarget.getViewCount() > 1, bG.MULTIVIEW != ZG && bG.markAsUnprocessed()
      }
    }

    function eG(GG, bG, ZG) {
      const wG = bG.ORDER_INDEPENDENT_TRANSPARENCY,
        SG = bG.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      bG.ORDER_INDEPENDENT_TRANSPARENCY = GG.useOrderIndependentTransparency && ZG, bG.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !GG.CK().getCaps().textureFloatLinearFiltering, wG === bG.ORDER_INDEPENDENT_TRANSPARENCY && SG === bG.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || bG.markAsUnprocessed()
    }

    function RG(GG, bG, ZG) {
      const wG = bG.PREPASS;
      if (!bG._arePrePassDirty) return;
      const SG = [{
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
      if (GG.prePassRenderer && GG.prePassRenderer.enabled && ZG) {
        bG.PREPASS = !0, bG.SCENE_MRT_COUNT = GG.prePassRenderer.mrtCount, bG.PREPASS_NORMAL_WORLDSPACE = GG.prePassRenderer.generateNormalsInWorldSpace, bG.PREPASS_COLOR = !0, bG.PREPASS_COLOR_INDEX = 0;
        for (let ZG = 0; ZG < SG.length; ZG++) {
          const wG = GG.prePassRenderer.getIndex(SG[ZG].type); - 1 !== wG ? (bG[SG[ZG].define] = !0, bG[SG[ZG].index] = wG) : bG[SG[ZG].define] = !1
        }
      } else {
        bG.PREPASS = !1;
        for (let GG = 0; GG < SG.length; GG++) bG[SG[GG].define] = !1
      }
      bG.PREPASS != wG && (bG.markAsUnprocessed(), bG.markAsImageProcessingDirty())
    }

    function TG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        YG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      SG && SG.push("Light" + GG), LG || (bG.push("vLightData" + GG, "vLightDiffuse" + GG, "vLightSpecular" + GG, "vLightDirection" + GG, "vLightWidth" + GG, "vLightHeight" + GG, "vLightFalloff" + GG, "vLightGround" + GG, "vSliceData" + GG, "vSliceRanges" + GG, "lightMatrix" + GG, "shadowsInfo" + GG, "depthValues" + GG), ZG.push("shadowTexture" + GG), ZG.push("depthTexture" + GG), bG.push("viewFrustumZ" + GG, "cascadeBlendFactor" + GG, "lightSizeUVCorrection" + GG, "depthCorrection" + GG, "penumbraDarkness" + GG, "frustumLengths" + GG), wG && (ZG.push("projectionLightTexture" + GG), bG.push("textureProjectionMatrix" + GG)), yG && ZG.push("iesLightTexture" + GG), UG && ZG.push("rectAreaLightEmissionTexture" + GG), kG && (ZG.push("lightDataTexture" + GG), YG || ZG.push("tileMaskTexture" + GG)))
    }

    function HG(GG, bG, ZG) {
      const wG = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      ZG && wG.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), GG.push(...wG);
      bG.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function tG(GG, bG, ZG) {
      let wG, SG, LG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        yG = null;
      if (GG.uniformsNames) {
        const kG = GG;
        wG = kG.uniformsNames, SG = kG.uniformBuffersNames, bG = kG.samplers, ZG = kG.defines, LG = kG.maxSimultaneousLights || 0, yG = kG.shaderLanguage ?? null
      } else wG = GG, bG || (bG = []);
      for (let kG = 0; kG < LG && ZG["LIGHT" + kG]; kG++) TG(kG, wG, bG, ZG["PROJECTEDLIGHTTEXTURE" + kG], SG, !1, ZG["IESLIGHTTEXTURE" + kG], ZG["CLUSTLIGHT" + kG], ZG["RECTAREALIGHTEMISSIONTEXTURE" + kG], 1 === yG);
      ZG.NUM_MORPH_INFLUENCERS && (wG.push("morphTargetInfluences"), wG.push("morphTargetCount")), ZG.BAKED_VERTEX_ANIMATION_TEXTURE && (wG.push("bakedVertexAnimationSettings"), wG.push("bakedVertexAnimationTextureSizeInverted"), wG.push("bakedVertexAnimationTime"), bG.push("bakedVertexAnimationTexture"))
    }

    function DG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      GG.addUniform("vReflectionInfos", 2), GG.addUniform("reflectionMatrix", 16), bG && GG.addUniform("vReflectionMicrosurfaceInfos", 3), ZG && (GG.addUniform("vReflectionPosition", 3), GG.addUniform("vReflectionSize", 3)), wG && (GG.addUniform("vReflectionFilteringInfo", 2), GG.addUniform("vReflectionDominantDirection", 3)), LG && GG.addUniform("vReflectionColor", 3), SG && (GG.addUniform("vSphericalL00", 3), GG.addUniform("vSphericalL1_1", 3), GG.addUniform("vSphericalL10", 3), GG.addUniform("vSphericalL11", 3), GG.addUniform("vSphericalL2_2", 3), GG.addUniform("vSphericalL2_1", 3), GG.addUniform("vSphericalL20", 3), GG.addUniform("vSphericalL21", 3), GG.addUniform("vSphericalL22", 3), GG.addUniform("vSphericalX", 3), GG.addUniform("vSphericalY", 3), GG.addUniform("vSphericalZ", 3), GG.addUniform("vSphericalXX_ZZ", 3), GG.addUniform("vSphericalYY_ZZ", 3), GG.addUniform("vSphericalZZ", 3), GG.addUniform("vSphericalXY", 3), GG.addUniform("vSphericalYZ", 3), GG.addUniform("vSphericalZX", 3))
    }
  },
  40720: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(37439),
      SG = ZG(40664);
    class LG extends SG.e {
      constructor(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(GG, bG, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new wG.e, this._storeEffectOnSubMeshes = ZG
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(GG, bG) {
        return !!GG && (!this._storeEffectOnSubMeshes || (!GG.aE || 0 === GG.aE.length || this.isReadyForSubMesh(GG, GG.aE[0], bG)))
      }
      _isReadyForSubMesh(GG) {
        const bG = GG.materialDefines;
        return !(this.checkReadyOnEveryCall || !GG.effect || !bG || bG._renderId !== this.Dv().getRenderId())
      }
      bindOnlyWorldMatrix(GG) {
        this._activeEffect.setMatrix("world", GG)
      }
      bindOnlyNormalMatrix(GG) {
        this._activeEffect.setMatrix("normalMatrix", GG)
      }
      bind(GG, bG) {
        bG && this.bindForSubMesh(GG, bG, bG.aE[0])
      }
      _afterBind(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(GG, bG, ZG), this.Dv()._cachedEffect = bG, ZG ? ZG._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return ZG._drawWrapper._forceRebindOnNextCall || GG.isCachedMaterialInvalid(this, bG, wG)
      }
      dispose(GG, bG, ZG) {
        this._activeEffect = void 0, super.dispose(GG, bG, ZG)
      }
    }
  },
  40742: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      g: () => SG
    });
    const wG = new WeakMap;

    function SG(GG) {
      const bG = GG.getVertexBuffers();
      if (!bG) return null;
      let ZG = wG.get(GG);
      if (ZG) {
        let GG = !1;
        for (const wG in bG)
          if (!ZG.has(wG)) {
            GG = !0;
            break
          } if (!GG) return ZG
      } else ZG = new Map, wG.set(GG, ZG);
      for (const wG in bG) {
        const GG = bG[wG];
        if (GG) {
          const bG = GG.byteOffset,
            SG = GG.byteStride,
            LG = GG.type,
            yG = GG.normalized;
          ZG.set(wG, {
            offset: bG,
            stride: SG,
            type: LG,
            normalized: yG
          })
        }
      }
      return ZG
    }

    function LG(GG, bG) {
      bG.forEach(((bG, ZG) => {
        const wG = `vp_${ZG}_info`;
        GG.setFloat4(wG, bG.offset, bG.stride, bG.type, bG.normalized ? 1 : 0)
      }))
    }
  },
  40688: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      g: () => UG
    });
    var wG = ZG(40393),
      SG = ZG(37439),
      LG = ZG(40398);
    let yG = (() => {
      var GG;
      let bG, ZG, SG = [];
      return GG = class {
        static extractMinAndMaxIndexed(GG, bG, ZG, wG, SG, LG) {
          for (let yG = ZG; yG < ZG + wG; yG++) {
            const ZG = 3 * bG[yG],
              wG = GG[ZG],
              kG = GG[ZG + 1],
              UG = GG[ZG + 2];
            SG.minimizeInPlaceFromFloats(wG, kG, UG), LG.maximizeInPlaceFromFloats(wG, kG, UG)
          }
        }
        static extractMinAndMax(GG, bG, ZG, wG, SG, LG) {
          for (let yG = bG, kG = bG * wG; yG < bG + ZG; yG++, kG += wG) {
            const bG = GG[kG],
              ZG = GG[kG + 1],
              wG = GG[kG + 2];
            SG.minimizeInPlaceFromFloats(bG, ZG, wG), LG.maximizeInPlaceFromFloats(bG, ZG, wG)
          }
        }
      }, (() => {
        const yG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [LG.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], ZG = [LG.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, wG.k)(GG, null, bG, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: GG => "extractMinAndMaxIndexed" in GG,
            get: GG => GG.extractMinAndMaxIndexed
          },
          metadata: yG
        }, null, SG), (0, wG.k)(GG, null, ZG, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: GG => "extractMinAndMax" in GG,
            get: GG => GG.extractMinAndMax
          },
          metadata: yG
        }, null, SG), yG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yG
        }), (0, wG.n)(GG, SG)
      })(), GG
    })();

    function kG(GG, bG, ZG, wG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const kG = new SG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        UG = new SG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return yG.extractMinAndMaxIndexed(GG, bG, ZG, wG, kG, UG), LG && (kG.x -= kG.x * LG.x + LG.y, kG.y -= kG.y * LG.x + LG.y, kG.z -= kG.z * LG.x + LG.y, UG.x += UG.x * LG.x + LG.y, UG.y += UG.y * LG.x + LG.y, UG.z += UG.z * LG.x + LG.y), {
        minimum: kG,
        maximum: UG
      }
    }

    function UG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        LG = arguments.length > 4 ? arguments[4] : void 0;
      const kG = new SG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        UG = new SG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return LG || (LG = 3), yG.extractMinAndMax(GG, bG, ZG, LG, kG, UG), wG && (kG.x -= kG.x * wG.x + wG.y, kG.y -= kG.y * wG.x + wG.y, kG.z -= kG.z * wG.x + wG.y, UG.x += UG.x * wG.x + wG.y, UG.y += UG.y * wG.x + wG.y, UG.z += UG.z * wG.x + wG.y), {
        minimum: kG,
        maximum: UG
      }
    }
  },
  40673: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG
    });
    var wG, SG = ZG(40524),
      LG = ZG(40678),
      yG = ZG(40681),
      kG = ZG(40688),
      UG = ZG(40697),
      YG = ZG(40258);
    class VG {
      get materialDefines() {
        const GG = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof GG ? null : GG
      }
      set materialDefines(GG) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = GG
      }
      _getDrawWrapper(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        GG = GG ?? this._engine.currentRenderPassId;
        let ZG = this._drawWrappers[GG];
        return !ZG && bG && (this._drawWrappers[GG] = ZG = new UG.c(this._mesh.Dv().CK())), ZG
      }
      _removeDrawWrapper(GG) {
        let bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[GG]?.dispose(bG), this._drawWrappers[GG] = void 0
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
      _setMainDrawWrapperOverride(GG) {
        this._mainDrawWrapperOverride = GG
      }
      setEffect(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SG = this._drawWrapper;
        SG.setEffect(GG, bG, wG), void 0 !== ZG && (SG.materialContext = ZG), GG || (SG.defines = null, SG.materialContext = void 0)
      }
      resetDrawCache(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== GG) return void this._removeDrawWrapper(GG, !0, bG);
          for (const GG of this._drawWrappers) GG?.dispose(bG)
        }
        this._drawWrappers = []
      }
      static AddToMesh(GG, bG, ZG, wG, SG, LG, yG) {
        return new VG(GG, bG, ZG, wG, SG, LG, yG, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(GG, bG, ZG, wG, SG, LG, yG) {
        let kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          UG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = GG, this.verticesStart = bG, this.verticesCount = ZG, this.indexStart = wG, this.indexCount = SG, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = LG, this._renderingMesh = yG || LG, UG && LG.aE.push(this), this._engine = this._mesh.Dv().CK(), this.resetDrawCache(), this._trianglePlanes = [], this._id = LG.aE.length - 1, kG && (this.refreshBoundingInfo(), LG.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      HA() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.HA() : this._boundingInfo
      }
      setBoundingInfo(GG) {
        return this._boundingInfo = GG, this
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
        const GG = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return GG || this._renderingMesh
      }
      vK() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const bG = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!bG) return GG && this._mesh.Dv()._hasDefaultMaterial ? this._mesh.Dv().defaultMaterial : null;
        if (this._isMultiMaterial(bG)) {
          const GG = bG.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== GG && (this._currentMaterial = GG, this.resetDrawCache()), GG
        }
        return bG
      }
      _isMultiMaterial(GG) {
        return void 0 !== GG.getSubMaterial
      }
      refreshBoundingInfo() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (GG || (GG = this._renderingMesh.getVerticesData(SG.l.PositionKind)), !GG) return this._boundingInfo = this._mesh.HA(), this;
        const bG = this._renderingMesh.IwG();
        let ZG;
        if (0 === this.indexStart && this.indexCount === bG.length) {
          const GG = this._renderingMesh.HA();
          ZG = {
            minimum: GG.minimum.clone(),
            maximum: GG.maximum.clone()
          }
        } else ZG = (0, kG.d)(GG, bG, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(ZG.minimum, ZG.maximum) : this._boundingInfo = new yG.c(ZG.minimum, ZG.maximum), this
      }
      _checkCollision(GG) {
        return this.HA()._checkCollision(GG)
      }
      updateBoundingInfo(GG) {
        let bG = this.HA();
        return bG || (this.refreshBoundingInfo(), bG = this.HA()), bG && bG.update(GG), this
      }
      isInFrustum(GG) {
        const bG = this.HA();
        return !!bG && bG.isInFrustum(GG, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(GG) {
        const bG = this.HA();
        return !!bG && bG.isCompletelyInFrustum(GG)
      }
      render(GG) {
        return this._renderingMesh.render(this, GG, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(GG, bG) {
        if (!this._linesIndexBuffer) {
          const ZG = 6 * Math.floor(this.indexCount / 3),
            wG = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ZG) : new Uint16Array(ZG);
          let SG = 0;
          if (0 === GG.length)
            for (let GG = this.indexStart; GG < this.indexStart + this.indexCount; GG += 3) wG[SG++] = GG, wG[SG++] = GG + 1, wG[SG++] = GG + 1, wG[SG++] = GG + 2, wG[SG++] = GG + 2, wG[SG++] = GG;
          else
            for (let bG = this.indexStart; bG < this.indexStart + this.indexCount; bG += 3) wG[SG++] = GG[bG], wG[SG++] = GG[bG + 1], wG[SG++] = GG[bG + 1], wG[SG++] = GG[bG + 2], wG[SG++] = GG[bG + 2], wG[SG++] = GG[bG];
          this._linesIndexBuffer = bG.createIndexBuffer(wG), this._linesIndexCount = wG.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(GG) {
        const bG = this.HA();
        return !!bG && GG.intersectsBox(bG.boundingBox)
      }
      intersects(GG, bG, ZG, wG, SG) {
        const LG = this.vK();
        if (!LG) return null;
        let yG = 3,
          kG = !1;
        switch (LG.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            yG = 1, kG = !0
        }
        return 4 === LG.fillMode ? ZG.length ? this._intersectLines(GG, bG, ZG, this._mesh.intersectionThreshold, wG) : this._intersectUnIndexedLines(GG, bG, ZG, this._mesh.intersectionThreshold, wG) : !ZG.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(GG, bG, ZG, wG, SG) : this._intersectTriangles(GG, bG, ZG, yG, kG, wG, SG)
      }
      _intersectLines(GG, bG, ZG, wG, SG) {
        let yG = null;
        for (let kG = this.indexStart; kG < this.indexStart + this.indexCount; kG += 2) {
          const UG = bG[ZG[kG]],
            YG = bG[ZG[kG + 1]],
            VG = GG.intersectionSegment(UG, YG, wG);
          if (!(VG < 0) && ((SG || !yG || VG < yG.distance) && (yG = new LG.b(null, null, VG), yG.faceId = kG / 2, SG))) break
        }
        return yG
      }
      _intersectUnIndexedLines(GG, bG, ZG, wG, SG) {
        let yG = null;
        for (let kG = this.verticesStart; kG < this.verticesStart + this.verticesCount; kG += 2) {
          const ZG = bG[kG],
            UG = bG[kG + 1],
            YG = GG.intersectionSegment(ZG, UG, wG);
          if (!(YG < 0) && ((SG || !yG || YG < yG.distance) && (yG = new LG.b(null, null, YG), yG.faceId = kG / 2, SG))) break
        }
        return yG
      }
      _intersectTriangles(GG, bG, ZG, wG, SG, LG, yG) {
        let kG = null,
          UG = -1;
        for (let YG = this.indexStart; YG < this.indexStart + this.indexCount - (3 - wG); YG += wG) {
          UG++;
          const wG = ZG[YG],
            VG = ZG[YG + 1],
            pG = ZG[YG + 2];
          if (SG && 4294967295 === pG) {
            YG += 2;
            continue
          }
          const fG = bG[wG],
            QG = bG[VG],
            KG = bG[pG];
          if (!fG || !QG || !KG) continue;
          if (yG && !yG(fG, QG, KG, GG, wG, VG, pG)) continue;
          const hG = GG.intersectsTriangle(fG, QG, KG);
          if (hG) {
            if (hG.distance < 0) continue;
            if ((LG || !kG || hG.distance < kG.distance) && (kG = hG, kG.faceId = UG, LG)) break
          }
        }
        return kG
      }
      _intersectUnIndexedTriangles(GG, bG, ZG, wG, SG) {
        let LG = null;
        for (let yG = this.verticesStart; yG < this.verticesStart + this.verticesCount; yG += 3) {
          const ZG = bG[yG],
            kG = bG[yG + 1],
            UG = bG[yG + 2];
          if (SG && !SG(ZG, kG, UG, GG, -1, -1, -1)) continue;
          const YG = GG.intersectsTriangle(ZG, kG, UG);
          if (YG) {
            if (YG.distance < 0) continue;
            if ((wG || !LG || YG.distance < LG.distance) && (LG = YG, LG.faceId = yG / 3, wG)) break
          }
        }
        return LG
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(GG, bG) {
        const ZG = new VG(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, GG, bG, !1);
        if (!this.IsGlobal) {
          const GG = this.HA();
          if (!GG) return ZG;
          ZG._boundingInfo = new yG.c(GG.minimum, GG.maximum)
        }
        return ZG
      }
      dispose() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Dv().CK()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const bG = this._mesh.aE.indexOf(this);
        this._mesh.aE.splice(bG, 1), this.resetDrawCache(void 0, GG)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(GG, bG, ZG, wG, SG) {
        let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = Number.MAX_VALUE,
          kG = -Number.MAX_VALUE;
        const UG = (SG || wG).IwG();
        for (let YG = bG; YG < bG + ZG; YG++) {
          const GG = UG[YG];
          GG < yG && (yG = GG), GG > kG && (kG = GG)
        }
        return new VG(GG, yG, kG - yG + 1, bG, ZG, wG, SG, LG)
      }
    }(wG = VG.prototype).projectToRef ?? (wG.projectToRef = (0, YG.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);