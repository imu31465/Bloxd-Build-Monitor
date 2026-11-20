export const id = 252;
export const ids = [252];
export const modules = {
  39690: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      constructor(UU, RU, gU) {
        this.bu = UU, this.bv = RU, this.distance = gU, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39701: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(36610),
      pU = gU(36600),
      EU = gU(36602);
    class PU {
      constructor(UU, RU, gU) {
        this.vectors = (0, tU.e)(8, pU.n.Zero), this.center = pU.n.Zero(), this.centerWorld = pU.n.Zero(), this.extendSize = pU.n.Zero(), this.extendSizeWorld = pU.n.Zero(), this.directions = (0, tU.e)(3, pU.n.Zero), this.vectorsWorld = (0, tU.e)(8, pU.n.Zero), this.minimumWorld = pU.n.Zero(), this.maximumWorld = pU.n.Zero(), this.minimum = pU.n.Zero(), this.maximum = pU.n.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(UU, RU, gU)
      }
      reConstruct(UU, RU, gU) {
        const tU = UU.x,
          EU = UU.y,
          PU = UU.z,
          TU = RU.x,
          qU = RU.y,
          KU = RU.z,
          cU = this.vectors;
        this.minimum.b_(tU, EU, PU), this.maximum.b_(TU, qU, KU), cU[0].b_(tU, EU, PU), cU[1].b_(TU, qU, KU), cU[2].b_(TU, EU, PU), cU[3].b_(tU, qU, PU), cU[4].b_(tU, EU, KU), cU[5].b_(TU, qU, PU), cU[6].b_(tU, qU, KU), cU[7].b_(TU, EU, KU), RU.addToRef(UU, this.center).scaleInPlace(.5), RU.subtractToRef(UU, this.extendSize).scaleInPlace(.5), this._worldMatrix = gU || pU.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(UU) {
        const RU = PU._TmpVector3,
          gU = this.maximum.subtractToRef(this.minimum, RU[0]),
          tU = gU.length();
        gU.normalizeFromLength(tU);
        const pU = tU * UU,
          EU = gU.scaleInPlace(.5 * pU),
          TU = this.center.subtractToRef(EU, RU[1]),
          qU = this.center.addToRef(EU, RU[2]);
        return this.reConstruct(TU, qU, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(UU) {
        const RU = this.minimumWorld,
          gU = this.maximumWorld,
          tU = this.directions,
          EU = this.vectorsWorld,
          PU = this.vectors;
        if (UU.isIdentity()) {
          RU.PgU(this.minimum), gU.PgU(this.maximum);
          for (let UU = 0; UU < 8; ++UU) EU[UU].PgU(PU[UU]);
          this.extendSizeWorld.PgU(this.extendSize), this.centerWorld.PgU(this.center)
        } else {
          RU.Y5(Number.MAX_VALUE), gU.Y5(-Number.MAX_VALUE);
          for (let tU = 0; tU < 8; ++tU) {
            const TU = EU[tU];
            pU.n.TransformCoordinatesToRef(PU[tU], UU, TU), RU.minimizeInPlace(TU), gU.maximizeInPlace(TU)
          }
          gU.subtractToRef(RU, this.extendSizeWorld).scaleInPlace(.5), gU.addToRef(RU, this.centerWorld).scaleInPlace(.5)
        }
        pU.n.FromArrayToRef(UU.m, 0, tU[0]), pU.n.FromArrayToRef(UU.m, 4, tU[1]), pU.n.FromArrayToRef(UU.m, 8, tU[2]), this._worldMatrix = UU
      }
      isInFrustum(UU) {
        return PU.IsInFrustum(this.vectorsWorld, UU)
      }
      isCompletelyInFrustum(UU) {
        return PU.IsCompletelyInFrustum(this.vectorsWorld, UU)
      }
      intersectsPoint(UU) {
        const RU = this.minimumWorld,
          gU = this.maximumWorld,
          tU = RU.x,
          pU = RU.y,
          PU = RU.z,
          TU = gU.x,
          qU = gU.y,
          KU = gU.z,
          cU = UU.x,
          GU = UU.y,
          jU = UU.z,
          uU = -EU.e;
        return !(TU - cU < uU || uU > cU - tU) && (!(qU - GU < uU || uU > GU - pU) && !(KU - jU < uU || uU > jU - PU))
      }
      intersectsSphere(UU) {
        return PU.IntersectsSphere(this.minimumWorld, this.maximumWorld, UU.centerWorld, UU.radiusWorld)
      }
      intersectsMinMax(UU, RU) {
        const gU = this.minimumWorld,
          tU = this.maximumWorld,
          pU = gU.x,
          EU = gU.y,
          PU = gU.z,
          TU = tU.x,
          qU = tU.y,
          KU = tU.z,
          cU = UU.x,
          GU = UU.y,
          jU = UU.z,
          uU = RU.x,
          CU = RU.y,
          hU = RU.z;
        return !(TU < cU || pU > uU) && (!(qU < GU || EU > CU) && !(KU < jU || PU > hU))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(UU, RU) {
        return UU.intersectsMinMax(RU.minimumWorld, RU.maximumWorld)
      }
      static IntersectsSphere(UU, RU, gU, tU) {
        const EU = PU._TmpVector3[0];
        pU.n.ClampToRef(gU, UU, RU, EU);
        return pU.n.DistanceSquared(gU, EU) <= tU * tU
      }
      static IsCompletelyInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; ++gU) {
          const tU = RU[gU];
          for (let RU = 0; RU < 8; ++RU)
            if (tU.dotCoordinate(UU[RU]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; ++gU) {
          let tU = !0;
          const pU = RU[gU];
          for (let RU = 0; RU < 8; ++RU)
            if (pU.dotCoordinate(UU[RU]) >= 0) {
              tU = !1;
              break
            } if (tU) return !1
        }
        return !0
      }
    }
    PU._TmpVector3 = (0, tU.e)(3, pU.n.Zero)
  },
  39698: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU
    });
    var tU = gU(36610),
      pU = gU(36600),
      EU = gU(39701);
    class PU {
      constructor(UU, RU, gU) {
        this.center = pU.n.Zero(), this.centerWorld = pU.n.Zero(), this.minimum = pU.n.Zero(), this.maximum = pU.n.Zero(), this.reConstruct(UU, RU, gU)
      }
      reConstruct(UU, RU, gU) {
        this.minimum.PgU(UU), this.maximum.PgU(RU);
        const tU = pU.n.Distance(UU, RU);
        RU.addToRef(UU, this.center).scaleInPlace(.5), this.radius = .5 * tU, this._update(gU || pU.c.IdentityReadOnly)
      }
      scale(UU) {
        const RU = PU._TmpVector3,
          gU = this.maximum.subtractToRef(this.minimum, RU[0]),
          tU = gU.length();
        gU.normalizeFromLength(tU);
        const pU = tU * UU,
          EU = gU.scaleInPlace(.5 * pU),
          TU = this.center.subtractToRef(EU, RU[1]),
          qU = this.center.addToRef(EU, RU[2]);
        return this.reConstruct(TU, qU, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(UU) {
        if (UU.isIdentity()) this.centerWorld.PgU(this.center), this.radiusWorld = this.radius;
        else {
          pU.n.TransformCoordinatesToRef(this.center, UU, this.centerWorld);
          const RU = PU._TmpVector3[0];
          pU.n.TransformNormalFromFloatsToRef(1, 1, 1, UU, RU), this.radiusWorld = Math.max(Math.abs(RU.x), Math.abs(RU.y), Math.abs(RU.z)) * this.radius
        }
      }
      isInFrustum(UU) {
        const RU = this.centerWorld,
          gU = this.radiusWorld;
        for (let tU = 0; tU < 6; tU++)
          if (UU[tU].dotCoordinate(RU) <= -gU) return !1;
        return !0
      }
      isCenterInFrustum(UU) {
        const RU = this.centerWorld;
        for (let gU = 0; gU < 6; gU++)
          if (UU[gU].dotCoordinate(RU) < 0) return !1;
        return !0
      }
      intersectsPoint(UU) {
        const RU = pU.n.DistanceSquared(this.centerWorld, UU);
        return !(this.radiusWorld * this.radiusWorld < RU)
      }
      static Intersects(UU, RU) {
        const gU = pU.n.DistanceSquared(UU.centerWorld, RU.centerWorld),
          tU = UU.radiusWorld + RU.radiusWorld;
        return !(tU * tU < gU)
      }
      static CreateFromCenterAndRadius(UU, RU, gU) {
        this._TmpVector3[0].PgU(UU), this._TmpVector3[1].b_(0, 0, RU), this._TmpVector3[2].PgU(UU), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].ptU(this._TmpVector3[1]);
        const tU = new PU(this._TmpVector3[0], this._TmpVector3[2]);
        return tU._worldMatrix = gU || pU.c.Identity(), tU
      }
    }
    PU._TmpVector3 = (0, tU.e)(3, pU.n.Zero);
    const TU = {
        min: 0,
        max: 0
      },
      qU = {
        min: 0,
        max: 0
      },
      KU = (UU, RU, gU) => {
        const tU = pU.n.Dot(RU.centerWorld, UU),
          EU = Math.abs(pU.n.Dot(RU.directions[0], UU)) * RU.extendSize.x + Math.abs(pU.n.Dot(RU.directions[1], UU)) * RU.extendSize.y + Math.abs(pU.n.Dot(RU.directions[2], UU)) * RU.extendSize.z;
        gU.min = tU - EU, gU.max = tU + EU
      },
      cU = (UU, RU, gU) => (KU(UU, RU, TU), KU(UU, gU, qU), !(TU.min > qU.max || qU.min > TU.max));
    class GU {
      constructor(UU, RU, gU) {
        this._isLocked = !1, this.boundingBox = new EU.c(UU, RU, gU), this.qtU = new PU(UU, RU, gU)
      }
      reConstruct(UU, RU, gU) {
        this.boundingBox.reConstruct(UU, RU, gU), this.qtU.reConstruct(UU, RU, gU)
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
      set isLocked(UU) {
        this._isLocked = UU
      }
      update(UU) {
        this._isLocked || (this.boundingBox._update(UU), this.qtU._update(UU))
      }
      centerOn(UU, RU) {
        const gU = GU._TmpVector3[0].PgU(UU).ptU(RU),
          tU = GU._TmpVector3[1].PgU(UU).addInPlace(RU);
        return this.boundingBox.reConstruct(gU, tU, this.boundingBox.getWorldMatrix()), this.qtU.reConstruct(gU, tU, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(UU) {
        const RU = pU.n.Minimize(this.minimum, UU),
          gU = pU.n.Maximize(this.maximum, UU);
        return this.reConstruct(RU, gU, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(UU) {
        const RU = pU.h.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(RU);
        const gU = pU.h.xC[0];
        return pU.n.TransformCoordinatesToRef(UU.boundingBox.minimumWorld, RU, gU), this.encapsulate(gU), pU.n.TransformCoordinatesToRef(UU.boundingBox.maximumWorld, RU, gU), this.encapsulate(gU), this
      }
      scale(UU) {
        return this.boundingBox.scale(UU), this.qtU.scale(UU), this
      }
      isInFrustum(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === RU || 3 === RU) && this.qtU.isCenterInFrustum(UU)) return !0;
        if (!this.qtU.isInFrustum(UU)) return !1;
        return !(1 !== RU && 3 !== RU) || this.boundingBox.isInFrustum(UU)
      }
      get diagonalLength() {
        const UU = this.boundingBox;
        return UU.maximumWorld.subtractToRef(UU.minimumWorld, GU._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(UU) {
        return this.boundingBox.isCompletelyInFrustum(UU)
      }
      _checkCollision(UU) {
        return UU._canDoCollision(this.qtU.centerWorld, this.qtU.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(UU) {
        return !!this.qtU.centerWorld && (!!this.qtU.intersectsPoint(UU) && !!this.boundingBox.intersectsPoint(UU))
      }
      intersects(UU, RU) {
        if (!PU.Intersects(this.qtU, UU.qtU)) return !1;
        if (!EU.c.Intersects(this.boundingBox, UU.boundingBox)) return !1;
        if (!RU) return !0;
        const gU = this.boundingBox,
          tU = UU.boundingBox;
        return !!cU(gU.directions[0], gU, tU) && (!!cU(gU.directions[1], gU, tU) && (!!cU(gU.directions[2], gU, tU) && (!!cU(tU.directions[0], gU, tU) && (!!cU(tU.directions[1], gU, tU) && (!!cU(tU.directions[2], gU, tU) && (!!cU(pU.n.Cross(gU.directions[0], tU.directions[0]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[0], tU.directions[1]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[0], tU.directions[2]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[1], tU.directions[0]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[1], tU.directions[1]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[1], tU.directions[2]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[2], tU.directions[0]), gU, tU) && (!!cU(pU.n.Cross(gU.directions[2], tU.directions[1]), gU, tU) && !!cU(pU.n.Cross(gU.directions[2], tU.directions[2]), gU, tU))))))))))))))
      }
    }
    GU._TmpVector3 = (0, tU.e)(2, pU.n.Zero)
  },
  39720: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => qU,
      g: () => TU,
      h: () => PU
    });
    var tU = gU(39531),
      pU = gU(36600);

    function EU(UU) {
      -1 === UU.indexOf("vClipPlane") && UU.push("vClipPlane"), -1 === UU.indexOf("vClipPlane2") && UU.push("vClipPlane2"), -1 === UU.indexOf("vClipPlane3") && UU.push("vClipPlane3"), -1 === UU.indexOf("vClipPlane4") && UU.push("vClipPlane4"), -1 === UU.indexOf("vClipPlane5") && UU.push("vClipPlane5"), -1 === UU.indexOf("vClipPlane6") && UU.push("vClipPlane6")
    }

    function PU(UU, RU, gU) {
      const tU = !!(UU.clipPlane ?? RU.clipPlane),
        pU = !!(UU.clipPlane2 ?? RU.clipPlane2),
        EU = !!(UU.clipPlane3 ?? RU.clipPlane3),
        PU = !!(UU.clipPlane4 ?? RU.clipPlane4),
        TU = !!(UU.clipPlane5 ?? RU.clipPlane5),
        qU = !!(UU.clipPlane6 ?? RU.clipPlane6);
      tU && gU.push("#define CLIPPLANE"), pU && gU.push("#define CLIPPLANE2"), EU && gU.push("#define CLIPPLANE3"), PU && gU.push("#define CLIPPLANE4"), TU && gU.push("#define CLIPPLANE5"), qU && gU.push("#define CLIPPLANE6")
    }

    function TU(UU, RU, gU) {
      let tU = !1;
      const pU = !!(UU.clipPlane ?? RU.clipPlane),
        EU = !!(UU.clipPlane2 ?? RU.clipPlane2),
        PU = !!(UU.clipPlane3 ?? RU.clipPlane3),
        TU = !!(UU.clipPlane4 ?? RU.clipPlane4),
        qU = !!(UU.clipPlane5 ?? RU.clipPlane5),
        KU = !!(UU.clipPlane6 ?? RU.clipPlane6);
      return gU.CLIPPLANE !== pU && (gU.CLIPPLANE = pU, tU = !0), gU.CLIPPLANE2 !== EU && (gU.CLIPPLANE2 = EU, tU = !0), gU.CLIPPLANE3 !== PU && (gU.CLIPPLANE3 = PU, tU = !0), gU.CLIPPLANE4 !== TU && (gU.CLIPPLANE4 = TU, tU = !0), gU.CLIPPLANE5 !== qU && (gU.CLIPPLANE5 = qU, tU = !0), gU.CLIPPLANE6 !== KU && (gU.CLIPPLANE6 = KU, tU = !0), tU
    }

    function qU(UU, RU, gU) {
      let tU = RU.clipPlane ?? gU.clipPlane;
      KU(UU, "vClipPlane", tU), tU = RU.clipPlane2 ?? gU.clipPlane2, KU(UU, "vClipPlane2", tU), tU = RU.clipPlane3 ?? gU.clipPlane3, KU(UU, "vClipPlane3", tU), tU = RU.clipPlane4 ?? gU.clipPlane4, KU(UU, "vClipPlane4", tU), tU = RU.clipPlane5 ?? gU.clipPlane5, KU(UU, "vClipPlane5", tU), tU = RU.clipPlane6 ?? gU.clipPlane6, KU(UU, "vClipPlane6", tU)
    }

    function KU(UU, RU, gU) {
      if (gU) {
        const EU = tU.c.aZ()?.floatingOriginOffset || pU.n.ZeroReadOnly;
        UU.setFloat4(RU, gU.normal.x, gU.normal.y, gU.normal.z, gU.d + pU.n.Dot(gU.normal, EU))
      }
    }
  },
  39740: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(UU, RU) {
        this._defines[UU] || (UU < this._currentRank && (this._currentRank = UU), UU > this._maxRank && (this._maxRank = UU), this._defines[UU] = new Array), this._defines[UU].push(RU)
      }
      addCPUSkinningFallback(UU, RU) {
        this._mesh = RU, UU < this._currentRank && (this._currentRank = UU), UU > this._maxRank && (this._maxRank = UU)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(UU, RU) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, UU = UU.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), RU._bonesComputationForcedToCPU = !0;
          const gU = this._mesh.aZ();
          for (let UU = 0; UU < gU.meshes.length; UU++) {
            const tU = gU.meshes[UU];
            if (tU.material) {
              if (tU.computeBonesUsingShaders && 0 !== tU.numBoneInfluencers)
                if (tU.material.getEffect() === RU) tU.computeBonesUsingShaders = !1;
                else if (tU.ZI)
                for (const UU of tU.ZI) {
                  if (UU.effect === RU) {
                    tU.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && tU.computeBonesUsingShaders && tU.numBoneInfluencers > 0 && (tU.computeBonesUsingShaders = !1)
          }
        } else {
          const RU = this._defines[this._currentRank];
          if (RU)
            for (let gU = 0; gU < RU.length; gU++) UU = UU.replace("#define " + RU[gU], "");
          this._currentRank++
        }
        return UU
      }
    }
  },
  39676: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => WU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39473),
      PU = gU(36624),
      TU = gU(36622),
      qU = gU(39681),
      KU = gU(39504),
      cU = gU(38236),
      GU = gU(37308),
      jU = gU(39714),
      uU = gU(39395);
    let CU = (() => {
      var UU;
      let RU, gU, EU, PU, TU, qU, KU, cU, GU, jU, CU, hU, QU = [];
      return UU = class {
        constructor() {
          this._func = (0, tU.j)(this, QU), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(UU) {
          this._func = UU
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(UU) {
          this._backFunc = UU
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(UU) {
          this._funcRef = UU
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(UU) {
          this._funcMask = UU
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(UU) {
          this._opStencilFail = UU
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(UU) {
          this._opDepthFail = UU
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(UU) {
          this._opStencilDepthPass = UU
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(UU) {
          this._backOpStencilFail = UU
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(UU) {
          this._backOpDepthFail = UU
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(UU) {
          this._backOpStencilDepthPass = UU
        }
        get mask() {
          return this._mask
        }
        set mask(UU) {
          this._mask = UU
        }
        get enabled() {
          return this._enabled
        }
        set enabled(UU) {
          this._enabled = UU
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(UU) {
          uU.b.Clone((() => UU), this)
        }
        serialize() {
          return uU.b.Serialize(this)
        }
        parse(UU, RU, gU) {
          uU.b.Parse((() => this), UU, RU, gU)
        }
      }, (() => {
        const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], PU = [(0, pU.K)()], TU = [(0, pU.K)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], cU = [(0, pU.K)()], GU = [(0, pU.K)()], jU = [(0, pU.K)()], CU = [(0, pU.K)()], hU = [(0, pU.K)()], (0, tU.i)(UU, null, RU, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: UU => "func" in UU,
            get: UU => UU.func
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, gU, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: UU => "backFunc" in UU,
            get: UU => UU.backFunc
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, EU, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: UU => "funcRef" in UU,
            get: UU => UU.funcRef
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, PU, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "funcMask" in UU,
            get: UU => UU.funcMask
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, TU, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "opStencilFail" in UU,
            get: UU => UU.opStencilFail
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, qU, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "opDepthFail" in UU,
            get: UU => UU.opDepthFail
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, KU, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: UU => "opStencilDepthPass" in UU,
            get: UU => UU.opStencilDepthPass
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, cU, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "backOpStencilFail" in UU,
            get: UU => UU.backOpStencilFail
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, GU, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "backOpDepthFail" in UU,
            get: UU => UU.backOpDepthFail
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, jU, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: UU => "backOpStencilDepthPass" in UU,
            get: UU => UU.backOpStencilDepthPass
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, CU, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: UU => "mask" in UU,
            get: UU => UU.mask
          },
          metadata: uU
        }, null, QU), (0, tU.i)(UU, null, hU, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "enabled" in UU,
            get: UU => UU.enabled
          },
          metadata: uU
        }, null, QU), uU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uU
        })
      })(), UU
    })();
    var hU = gU(39716),
      QU = gU(39292),
      eU = gU(39256);
    let WU = (() => {
      var UU;
      let RU, gU, eU, WU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU, YU, BU, VU, rU, XU, vU, dU, HU, SU, sU, yU, kU, FU, iU, AU = [],
        zU = [],
        MU = [],
        DU = [],
        LU = [],
        NU = [],
        lU = [],
        OU = [],
        UR = [],
        RR = [],
        gR = [],
        tR = [],
        pR = [],
        ER = [],
        PR = [],
        TR = [],
        qR = [],
        KR = [],
        cR = [],
        GR = [],
        jR = [],
        uR = [],
        CR = [],
        hR = [],
        QR = [],
        eR = [],
        WR = [],
        fR = [],
        xR = [],
        mR = [],
        IR = [],
        JR = [],
        wR = [],
        nR = [],
        bR = [],
        oR = [],
        ZR = [],
        aR = [],
        YR = [],
        BR = [],
        VR = [],
        rR = [],
        XR = [],
        vR = [],
        dR = [],
        HR = [],
        SR = [],
        sR = [],
        yR = [],
        kR = [],
        FR = [];
      return UU = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(RU) {
          this._useVertexPulling !== RU && (this._useVertexPulling = RU, this.cRU(UU.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(UU) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(RU) {
          if (this._alpha === RU) return;
          const gU = this._alpha;
          this._alpha = RU, 1 !== gU && 1 !== RU || this.cRU(UU.MiscDirtyFlag + UU.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(RU) {
          this._backFaceCulling !== RU && (this._backFaceCulling = RU, this.cRU(UU.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(RU) {
          const gU = Math.max(0, Math.min(0 | RU, 4));
          this._textureRepetitionMode !== gU && (this._textureRepetitionMode = gU, this.cRU(UU.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(RU) {
          this._cullBackFaces !== RU && (this._cullBackFaces = RU, this.cRU(UU.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(UU) {
          this._blockDirtyMechanism !== UU && (this._blockDirtyMechanism = UU, UU || this.markDirty())
        }
        atomicMaterialsUpdate(UU) {
          this.blockDirtyMechanism = !0;
          try {
            UU(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(UU) {
          this._onDisposeObserver && this.HZ.remove(this._onDisposeObserver), this._onDisposeObserver = this.HZ.add(UU)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new PU.b), this._onBindObservable
        }
        set onBind(UU) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(UU)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new PU.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new PU.b), this._onEffectCreatedObservable
        }
        set alphaMode(UU) {
          this._alphaMode[0] = UU
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[gU] !== RU && (this._alphaMode[gU] = RU, this.cRU(UU.TextureDirtyFlag))
        }
        set needDepthPrePass(UU) {
          this._needDepthPrePass !== UU && (this._needDepthPrePass = UU, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(RU) {
          this._fogEnabled !== RU && (this._fogEnabled = RU, this.cRU(UU.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case UU.WireFrameFillMode:
            case UU.LineListDrawMode:
            case UU.LineLoopDrawMode:
            case UU.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(RU) {
          this.fillMode = RU ? UU.WireFrameFillMode : UU.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case UU.PointFillMode:
            case UU.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(RU) {
          this.fillMode = RU ? UU.PointFillMode : UU.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(RU) {
          this._fillMode !== RU && (this._fillMode = RU, this.cRU(UU.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(UU) {
          const RU = this.aZ().WC().getCaps().fragmentDepthSupported;
          UU && !RU && cU.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = UU && RU, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(UU) {
          this._isVertexOutputInvariant !== UU && (this._isVertexOutputInvariant = UU, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(UU) {
          this._drawWrapper = UU
        }
        constructor(RU, gU, pU) {
          let qU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, tU.j)(this, AU), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, tU.j)(this, zU, void 0), this.uniqueId = ((0, tU.j)(this, MU), (0, tU.j)(this, DU, void 0)), this._loadedUniqueId = (0, tU.j)(this, LU), this.name = (0, tU.j)(this, NU, void 0), this.metadata = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, null)), this._internalMetadata = (0, tU.j)(this, UR), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, tU.j)(this, RR, !1), this.checkReadyOnlyOnce = ((0, tU.j)(this, gR), (0, tU.j)(this, tR, !1)), this.state = ((0, tU.j)(this, pR), (0, tU.j)(this, ER, "")), this._alpha = ((0, tU.j)(this, PR), (0, tU.j)(this, TR, 1)), this.inspectableCustomProperties = (0, tU.j)(this, qR), this._backFaceCulling = (0, tU.j)(this, KR, !0), this._textureRepetitionMode = ((0, tU.j)(this, cR), (0, tU.j)(this, GR, 0)), this.textureRepetitionHexTilingParams = ((0, tU.j)(this, jR), (0, tU.j)(this, uR, [1, .6, 7, .5])), this._cullBackFaces = ((0, tU.j)(this, CR), (0, tU.j)(this, hR, !0)), this._blockDirtyMechanism = ((0, tU.j)(this, QR), !1), this.sideOrientation = (0, tU.j)(this, eR, null), this.onCompiled = ((0, tU.j)(this, WR), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.HZ = new PU.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, tU.j)(this, fR, [2]), this._needDepthPrePass = ((0, tU.j)(this, xR), (0, tU.j)(this, mR, !1)), this.disableDepthWrite = ((0, tU.j)(this, IR), (0, tU.j)(this, JR, !1)), this.disableColorWrite = ((0, tU.j)(this, wR), (0, tU.j)(this, nR, !1)), this.forceDepthWrite = ((0, tU.j)(this, bR), (0, tU.j)(this, oR, !1)), this.depthFunction = ((0, tU.j)(this, ZR), (0, tU.j)(this, aR, 0)), this.separateCullingPass = ((0, tU.j)(this, YR), (0, tU.j)(this, BR, !1)), this._fogEnabled = ((0, tU.j)(this, VR), (0, tU.j)(this, rR, !0)), this.pointSize = ((0, tU.j)(this, XR), (0, tU.j)(this, vR, 1)), this.zOffset = ((0, tU.j)(this, dR), (0, tU.j)(this, HR, 0)), this.zOffsetUnits = ((0, tU.j)(this, SR), (0, tU.j)(this, sR, 0)), this.clipPlane = (0, tU.j)(this, yR), this.stencil = new CU, this._isVertexOutputInvariant = (0, tU.j)(this, kR, UU.ForceVertexOutputInvariant), this._materialContext = (0, tU.j)(this, FR), this._useUBO = !1, this._fillMode = UU.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = RU;
          const cU = gU || TU.c.LastCreatedScene;
          cU && (this._scene = cU, this._dirtyCallbacks = {}, this._forceGLSL = qU, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = RU || EU.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.WC().createMaterialContext(), this._drawWrapper = new jU.c(this._scene.WC(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new KU.c(this._scene.WC(), void 0, void 0, RU), this._useUBO = this.aZ().WC().supportsUniformBuffers, this._createUniformBuffer(), pU || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), UU.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const UU = this.aZ().WC();
          this._uniformBuffer?.dispose(), UU.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new KU.c(UU, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new KU.c(this._scene.WC(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(UU) {
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
        isReady(UU, RU) {
          return !0
        }
        isReadyForSubMesh(UU, RU, gU) {
          const tU = RU.materialDefines;
          return !!tU && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = tU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        aZ() {
          return this._scene
        }
        _getEffectiveOrientation(UU) {
          return null !== this.sideOrientation ? this.sideOrientation : UU.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(UU) {
          this._transparencyMode = UU
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === UU.MATERIAL_ALPHABLEND || this._transparencyMode === UU.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === UU.MATERIAL_ALPHATEST || this._transparencyMode === UU.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === UU.MATERIAL_OPAQUE || this._transparencyMode === UU.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(UU) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : UU.visibility < 1 || !this._disableAlphaBlending && (UU.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(UU) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(UU) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const gU = this.aZ().meshes;
          for (const UU of gU)
            if (UU.ZI)
              for (const gU of UU.ZI)
                if (gU.JC() === this)
                  for (const UU of gU._drawWrappers) UU && this._materialContext === UU.materialContext && (UU._wasPreviouslyReady = !1, UU._wasPreviouslyUsingInstances = null, UU._forceRebindOnNextCall = RU);
          RU && this.cRU(UU.AllDirtyFlag)
        }
        _preBind(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const tU = this._scene.WC(),
            pU = (null == gU ? this.sideOrientation : gU) === UU.ClockWiseSideOrientation,
            EU = RU || this._getDrawWrapper();
          return (0, QU.c)(EU) && EU.materialContext && (EU.materialContext.useVertexPulling = this.useVertexPulling), tU.enableEffect(EU), tU.setState(this.backFaceCulling, this.zOffset, !1, pU, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), pU
        }
        bind(UU, RU) {}
        buildUniformLayout() {
          const UU = this._uniformBuffer;
          this._eventInfo.ubo = UU, this._callbackPluginEventGeneric(8, this._eventInfo), UU.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(UU, RU, gU) {
          const tU = gU._drawWrapper;
          this._eventInfo.subMesh = gU, this._callbackPluginEventBindForSubMesh(this._eventInfo), tU._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(UU) {}
        bindView(UU) {
          this._useUBO ? this._needToBindSceneUbo = !0 : UU.setMatrix("view", this.aZ().getViewMatrix())
        }
        bindViewProjection(UU) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (UU.setMatrix("viewProjection", this.aZ().getTransformMatrix()), UU.setMatrix("projection", this.aZ().getProjectionMatrix()), UU.setMatrix("inverseProjection", this.aZ().getInverseProjectionMatrix()))
        }
        bindEyePosition(UU, RU) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(UU, RU)
        }
        _afterBind(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && RU && (this._needToBindSceneUbo = !1, (0, hU.u)(RU, this.aZ().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = UU ? UU.visibility : 1, this._onBindObservable && UU && this._onBindObservable.notifyObservers(UU), this.disableDepthWrite) {
            const UU = this._scene.WC();
            this._cachedDepthWriteState = UU.getDepthWrite(), UU.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const UU = this._scene.WC();
            this._cachedColorWriteState = UU.getColorWrite(), UU.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const UU = this._scene.WC();
            this._cachedDepthFunctionState = UU.getDepthFunction() || 0, UU.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.WC().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.WC().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.WC().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(UU) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = UU, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(UU) {
          return null
        }
        _clonePlugins(RU, gU) {
          const tU = {};
          if (this._serializePlugins(tU), UU._ParsePlugins(tU, RU, this._scene, gU), this.pluginManager)
            for (const UU of this.pluginManager._plugins) {
              const gU = RU.pluginManager.getPlugin(UU.name);
              gU && UU.copyTo(gU)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const UU = [];
            for (const RU in this.meshMap) {
              const gU = this.meshMap[RU];
              gU && UU.push(gU)
            }
            return UU
          }
          return this._scene.meshes.filter((UU => UU.material === this))
        }
        forceCompilation(UU, RU, gU, tU) {
          const pU = {
              clipPlane: !1,
              useInstances: !1,
              ...gU
            },
            EU = this.aZ(),
            PU = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const TU = () => {
            if (!this._scene || !this._scene.WC()) return;
            const gU = EU.clipPlane;
            if (pU.clipPlane && (EU.clipPlane = new GU.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let gU = !0,
                EU = null;
              if (UU.ZI) {
                const RU = new qU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
                RU.materialDefines && (RU.materialDefines._renderId = -1), this.isReadyForSubMesh(UU, RU, pU.useInstances) || (RU.effect && RU.effect.getCompilationError() && RU.effect.allFallbacksProcessed() ? EU = RU.effect.getCompilationError() : (gU = !1, setTimeout(TU, 16)))
              }
              gU && (this.allowShaderHotSwapping = PU, EU && tU && tU(EU), RU && RU(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = PU, RU && RU(this)) : setTimeout(TU, 16);
            pU.clipPlane && (EU.clipPlane = gU)
          };
          TU()
        }
        async forceCompilationAsync(UU, RU) {
          return await new Promise(((gU, tU) => {
            this.forceCompilation(UU, (() => {
              gU()
            }), RU, (UU => {
              tU(UU)
            }))
          }))
        }
        cRU(RU) {
          this.aZ().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (UU._DirtyCallbackArray.length = 0, RU & UU.ImageProcessingDirtyFlag && UU._DirtyCallbackArray.push(UU._ImageProcessingDirtyCallBack), RU & UU.TextureDirtyFlag && UU._DirtyCallbackArray.push(UU._TextureDirtyCallBack), RU & UU.LightDirtyFlag && UU._DirtyCallbackArray.push(UU._LightsDirtyCallBack), RU & UU.FresnelDirtyFlag && UU._DirtyCallbackArray.push(UU._FresnelDirtyCallBack), RU & UU.AttributesDirtyFlag && UU._DirtyCallbackArray.push(UU._AttributeDirtyCallBack), RU & UU.MiscDirtyFlag && UU._DirtyCallbackArray.push(UU._MiscDirtyCallBack), RU & UU.PrePassDirtyFlag && UU._DirtyCallbackArray.push(UU._PrePassDirtyCallBack), UU._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(UU._RunDirtyCallBacks), this.aZ().resetCachedMaterial())
        }
        resetDrawCache() {
          const UU = this.aZ().meshes;
          for (const RU of UU)
            if (RU.ZI)
              for (const UU of RU.ZI) UU.JC() === this && UU.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(UU) {
          const RU = this.aZ();
          if (RU.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const gU = RU.meshes;
          for (const tU of gU)
            if (tU.ZI)
              for (const gU of tU.ZI) {
                if ((gU.JC() || (RU._hasDefaultMaterial ? RU.defaultMaterial : null)) === this)
                  for (const RU of gU._drawWrappers) RU && RU.defines && RU.defines.markAllAsDirty && this._materialContext === RU.materialContext && UU(RU.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.aZ().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const UU = this.aZ().enablePrePassRenderer();
          UU && UU.cRU()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(UU._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(UU._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(UU._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(UU._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(UU._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(UU._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(UU._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(UU._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(UU._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(UU._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const UU = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.HZ.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(UU)
            }))
          }
        }
        setPrePassRenderer(UU) {
          return !1
        }
        dispose(UU, RU, gU) {
          const tU = this.aZ();
          if (tU.stopAnimation(this), tU.freeProcessedMaterials(), tU.removeMaterial(this), this._eventInfo.forceDisposeTextures = RU, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const UU = this._parentContainer.materials.indexOf(this);
            UU > -1 && this._parentContainer.materials.splice(UU, 1), this._parentContainer = null
          }
          if (!0 !== gU)
            if (this.meshMap)
              for (const pU in this.meshMap) {
                const UU = this.meshMap[pU];
                this._disposeMeshResources(UU)
              } else {
                const UU = tU.meshes;
                for (const RU of UU) this._disposeMeshResources(RU)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.HZ.notifyObservers(this), this.HZ.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(UU) {
          if (!UU) return;
          const RU = UU.geometry,
            gU = UU._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (UU.ZI && gU)
              for (const tU of UU.ZI) {
                const UU = tU._drawWrappers;
                for (let pU = 0; pU < UU.length; pU++) {
                  const EU = UU[pU]?.effect;
                  if (!EU) continue;
                  gU[pU] === this && (RU?._releaseVertexArrayObject(EU), tU._removeDrawWrapper(pU, !0, !0))
                }
              }
          } else RU?._releaseVertexArrayObject(this._drawWrapper.effect);
          UU.material !== this || UU.VtU || (UU.material = null)
        }
        serialize() {
          const UU = uU.b.Serialize(this);
          return UU.stencil = this.stencil.serialize(), UU.uniqueId = this.uniqueId, this._serializePlugins(UU), UU
        }
        _serializePlugins(UU) {
          if (UU.plugins = {}, this.pluginManager)
            for (const RU of this.pluginManager._plugins) RU.doNotSerialize || (UU.plugins[RU.getClassName()] = RU.serialize())
        }
        static ParseAlphaMode(UU, RU) {
          void 0 !== UU._alphaMode ? RU._alphaMode = Array.isArray(UU._alphaMode) ? [...UU._alphaMode] : [UU._alphaMode] : void 0 !== UU.alphaMode ? RU._alphaMode = Array.isArray(UU.alphaMode) ? [...UU.alphaMode] : [UU.alphaMode] : RU._alphaMode = [2]
        }
        static Parse(RU, gU, tU) {
          if (RU.customType) {
            if ("BABYLON.PBRMaterial" === RU.customType && RU.overloadedAlbedo && (RU.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return cU.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else RU.customType = "BABYLON.StandardMaterial";
          const pU = EU.g.Instantiate(RU.customType).Parse(RU, gU, tU);
          return pU._loadedUniqueId = RU.uniqueId, UU.ParseAlphaMode(RU, pU), pU
        }
        static _ParsePlugins(UU, RU, gU, tU) {
          if (UU.plugins)
            for (const pU in UU.plugins) {
              const PU = UU.plugins[pU];
              let TU = RU.pluginManager?.getPlugin(PU.name);
              if (!TU) {
                const UU = EU.g.Instantiate("BABYLON." + pU);
                UU && (TU = new UU(RU))
              }
              TU?.parse(PU, gU, tU)
            }
        }
      }, (() => {
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], eU = [(0, pU.K)()], WU = [(0, pU.K)()], fU = [(0, pU.K)()], xU = [(0, pU.K)()], mU = [(0, pU.K)()], IU = [(0, pU.K)("alpha")], JU = [(0, pU.K)("backFaceCulling")], wU = [(0, pU.K)("textureRepetitionMode")], nU = [(0, pU.K)("textureRepetitionHexTilingParams")], bU = [(0, pU.K)("cullBackFaces")], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], aU = [(0, pU.K)()], YU = [(0, pU.K)()], BU = [(0, pU.K)()], VU = [(0, pU.K)()], rU = [(0, pU.K)()], XU = [(0, pU.K)()], vU = [(0, pU.K)("fogEnabled")], dU = [(0, pU.K)()], HU = [(0, pU.K)()], SU = [(0, pU.K)()], sU = [(0, pU.K)()], yU = [(0, pU.K)()], kU = [(0, pU.K)()], FU = [(0, pU.K)()], iU = [(0, pU.K)()], (0, tU.i)(UU, null, sU, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: UU => "pointsCloud" in UU,
            get: UU => UU.pointsCloud
          },
          metadata: EU
        }, null, AU), (0, tU.i)(UU, null, yU, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "fillMode" in UU,
            get: UU => UU.fillMode
          },
          metadata: EU
        }, null, AU), (0, tU.i)(UU, null, kU, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLogarithmicDepth" in UU,
            get: UU => UU.useLogarithmicDepth
          },
          metadata: EU
        }, null, AU), (0, tU.i)(UU, null, iU, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "transparencyMode" in UU,
            get: UU => UU.transparencyMode
          },
          metadata: EU
        }, null, AU), (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: UU => "id" in UU,
            get: UU => UU.id,
            set: (UU, RU) => {
              UU.id = RU
            }
          },
          metadata: EU
        }, zU, MU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: UU => "uniqueId" in UU,
            get: UU => UU.uniqueId,
            set: (UU, RU) => {
              UU.uniqueId = RU
            }
          },
          metadata: EU
        }, DU, LU), (0, tU.i)(null, null, eU, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: UU => "name" in UU,
            get: UU => UU.name,
            set: (UU, RU) => {
              UU.name = RU
            }
          },
          metadata: EU
        }, NU, lU), (0, tU.i)(null, null, WU, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: UU => "metadata" in UU,
            get: UU => UU.metadata,
            set: (UU, RU) => {
              UU.metadata = RU
            }
          },
          metadata: EU
        }, OU, UR), (0, tU.i)(null, null, fU, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: UU => "checkReadyOnEveryCall" in UU,
            get: UU => UU.checkReadyOnEveryCall,
            set: (UU, RU) => {
              UU.checkReadyOnEveryCall = RU
            }
          },
          metadata: EU
        }, RR, gR), (0, tU.i)(null, null, xU, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: UU => "checkReadyOnlyOnce" in UU,
            get: UU => UU.checkReadyOnlyOnce,
            set: (UU, RU) => {
              UU.checkReadyOnlyOnce = RU
            }
          },
          metadata: EU
        }, tR, pR), (0, tU.i)(null, null, mU, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: UU => "state" in UU,
            get: UU => UU.state,
            set: (UU, RU) => {
              UU.state = RU
            }
          },
          metadata: EU
        }, ER, PR), (0, tU.i)(null, null, IU, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "_alpha" in UU,
            get: UU => UU._alpha,
            set: (UU, RU) => {
              UU._alpha = RU
            }
          },
          metadata: EU
        }, TR, qR), (0, tU.i)(null, null, JU, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: UU => "_backFaceCulling" in UU,
            get: UU => UU._backFaceCulling,
            set: (UU, RU) => {
              UU._backFaceCulling = RU
            }
          },
          metadata: EU
        }, KR, cR), (0, tU.i)(null, null, wU, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_textureRepetitionMode" in UU,
            get: UU => UU._textureRepetitionMode,
            set: (UU, RU) => {
              UU._textureRepetitionMode = RU
            }
          },
          metadata: EU
        }, GR, jR), (0, tU.i)(null, null, nU, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: UU => "textureRepetitionHexTilingParams" in UU,
            get: UU => UU.textureRepetitionHexTilingParams,
            set: (UU, RU) => {
              UU.textureRepetitionHexTilingParams = RU
            }
          },
          metadata: EU
        }, uR, CR), (0, tU.i)(null, null, bU, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: UU => "_cullBackFaces" in UU,
            get: UU => UU._cullBackFaces,
            set: (UU, RU) => {
              UU._cullBackFaces = RU
            }
          },
          metadata: EU
        }, hR, QR), (0, tU.i)(null, null, oU, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: UU => "sideOrientation" in UU,
            get: UU => UU.sideOrientation,
            set: (UU, RU) => {
              UU.sideOrientation = RU
            }
          },
          metadata: EU
        }, eR, WR), (0, tU.i)(null, null, ZU, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_alphaMode" in UU,
            get: UU => UU._alphaMode,
            set: (UU, RU) => {
              UU._alphaMode = RU
            }
          },
          metadata: EU
        }, fR, xR), (0, tU.i)(null, null, aU, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: UU => "_needDepthPrePass" in UU,
            get: UU => UU._needDepthPrePass,
            set: (UU, RU) => {
              UU._needDepthPrePass = RU
            }
          },
          metadata: EU
        }, mR, IR), (0, tU.i)(null, null, YU, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableDepthWrite" in UU,
            get: UU => UU.disableDepthWrite,
            set: (UU, RU) => {
              UU.disableDepthWrite = RU
            }
          },
          metadata: EU
        }, JR, wR), (0, tU.i)(null, null, BU, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableColorWrite" in UU,
            get: UU => UU.disableColorWrite,
            set: (UU, RU) => {
              UU.disableColorWrite = RU
            }
          },
          metadata: EU
        }, nR, bR), (0, tU.i)(null, null, VU, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceDepthWrite" in UU,
            get: UU => UU.forceDepthWrite,
            set: (UU, RU) => {
              UU.forceDepthWrite = RU
            }
          },
          metadata: EU
        }, oR, ZR), (0, tU.i)(null, null, rU, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: UU => "depthFunction" in UU,
            get: UU => UU.depthFunction,
            set: (UU, RU) => {
              UU.depthFunction = RU
            }
          },
          metadata: EU
        }, aR, YR), (0, tU.i)(null, null, XU, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: UU => "separateCullingPass" in UU,
            get: UU => UU.separateCullingPass,
            set: (UU, RU) => {
              UU.separateCullingPass = RU
            }
          },
          metadata: EU
        }, BR, VR), (0, tU.i)(null, null, vU, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "_fogEnabled" in UU,
            get: UU => UU._fogEnabled,
            set: (UU, RU) => {
              UU._fogEnabled = RU
            }
          },
          metadata: EU
        }, rR, XR), (0, tU.i)(null, null, dU, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: UU => "pointSize" in UU,
            get: UU => UU.pointSize,
            set: (UU, RU) => {
              UU.pointSize = RU
            }
          },
          metadata: EU
        }, vR, dR), (0, tU.i)(null, null, HU, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: UU => "zOffset" in UU,
            get: UU => UU.zOffset,
            set: (UU, RU) => {
              UU.zOffset = RU
            }
          },
          metadata: EU
        }, HR, SR), (0, tU.i)(null, null, SU, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: UU => "zOffsetUnits" in UU,
            get: UU => UU.zOffsetUnits,
            set: (UU, RU) => {
              UU.zOffsetUnits = RU
            }
          },
          metadata: EU
        }, sR, yR), (0, tU.i)(null, null, FU, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: UU => "_isVertexOutputInvariant" in UU,
            get: UU => UU._isVertexOutputInvariant,
            set: (UU, RU) => {
              UU._isVertexOutputInvariant = RU
            }
          },
          metadata: EU
        }, kR, FR), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU.TriangleFillMode = 0, UU.WireFrameFillMode = 1, UU.PointFillMode = 2, UU.PointListDrawMode = 3, UU.LineListDrawMode = 4, UU.LineLoopDrawMode = 5, UU.LineStripDrawMode = 6, UU.TriangleStripDrawMode = 7, UU.TriangleFanDrawMode = 8, UU.ClockWiseSideOrientation = 0, UU.CounterClockWiseSideOrientation = 1, UU.ImageProcessingDirtyFlag = 64, UU.TextureDirtyFlag = 1, UU.LightDirtyFlag = 2, UU.FresnelDirtyFlag = 4, UU.AttributesDirtyFlag = 8, UU.MiscDirtyFlag = 16, UU.PrePassDirtyFlag = 32, UU.AllDirtyFlag = 127, UU.MATERIAL_OPAQUE = 0, UU.MATERIAL_ALPHATEST = 1, UU.MATERIAL_ALPHABLEND = 2, UU.MATERIAL_ALPHATESTANDBLEND = 3, UU.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, UU.MATERIAL_NORMALBLENDMETHOD_RNM = 1, UU.LIGHTFALLOFF_PHYSICAL = 0, UU.LIGHTFALLOFF_GLTF = 1, UU.LIGHTFALLOFF_STANDARD = 2, UU.OnEventObservable = new PU.b, UU.ForceVertexOutputInvariant = !1, UU._AllDirtyCallBack = UU => UU.markAllAsDirty(), UU._ImageProcessingDirtyCallBack = UU => UU.markAsImageProcessingDirty(), UU._TextureDirtyCallBack = UU => UU.markAsTexturesDirty(), UU._FresnelDirtyCallBack = UU => UU.markAsFresnelDirty(), UU._MiscDirtyCallBack = UU => UU.markAsMiscDirty(), UU._PrePassDirtyCallBack = UU => UU.markAsPrePassDirty(), UU._LightsDirtyCallBack = UU => UU.markAsLightDirty(), UU._AttributeDirtyCallBack = UU => UU.markAsAttributesDirty(), UU._FresnelAndMiscDirtyCallBack = RU => {
        UU._FresnelDirtyCallBack(RU), UU._MiscDirtyCallBack(RU)
      }, UU._TextureAndMiscDirtyCallBack = RU => {
        UU._TextureDirtyCallBack(RU), UU._MiscDirtyCallBack(RU)
      }, UU._DirtyCallbackArray = [], UU._RunDirtyCallBacks = RU => {
        for (const gU of UU._DirtyCallbackArray) gU(RU)
      }, UU
    })();
    Object.getOwnPropertyDescriptor(WU.prototype, "pluginManager") || Object.defineProperty(WU.prototype, "pluginManager", (0, eU.i)("Material", "pluginManager"))
  },
  39729: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU
    });
    var tU = gU(39272);
    class pU {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(UU) {
        this._DiffuseTextureEnabled !== UU && (this._DiffuseTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(UU) {
        this._BaseWeightTextureEnabled !== UU && (this._BaseWeightTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(UU) {
        this._BaseDiffuseRoughnessTextureEnabled !== UU && (this._BaseDiffuseRoughnessTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(UU) {
        this._DetailTextureEnabled !== UU && (this._DetailTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(UU) {
        this._DecalMapEnabled !== UU && (this._DecalMapEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(UU) {
        this._AmbientTextureEnabled !== UU && (this._AmbientTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(UU) {
        this._OpacityTextureEnabled !== UU && (this._OpacityTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(UU) {
        this._ReflectionTextureEnabled !== UU && (this._ReflectionTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(UU) {
        this._EmissiveTextureEnabled !== UU && (this._EmissiveTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(UU) {
        this._SpecularTextureEnabled !== UU && (this._SpecularTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(UU) {
        this._BumpTextureEnabled !== UU && (this._BumpTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(UU) {
        this._LightmapTextureEnabled !== UU && (this._LightmapTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(UU) {
        this._RefractionTextureEnabled !== UU && (this._RefractionTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(UU) {
        this._ColorGradingTextureEnabled !== UU && (this._ColorGradingTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(UU) {
        this._FresnelEnabled !== UU && (this._FresnelEnabled = UU, tU.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(UU) {
        this._ClearCoatTextureEnabled !== UU && (this._ClearCoatTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(UU) {
        this._ClearCoatBumpTextureEnabled !== UU && (this._ClearCoatBumpTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(UU) {
        this._ClearCoatTintTextureEnabled !== UU && (this._ClearCoatTintTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(UU) {
        this._SheenTextureEnabled !== UU && (this._SheenTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(UU) {
        this._AnisotropicTextureEnabled !== UU && (this._AnisotropicTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(UU) {
        this._ThicknessTextureEnabled !== UU && (this._ThicknessTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(UU) {
        this._RefractionIntensityTextureEnabled !== UU && (this._RefractionIntensityTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(UU) {
        this._TranslucencyIntensityTextureEnabled !== UU && (this._TranslucencyIntensityTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(UU) {
        this._TranslucencyColorTextureEnabled !== UU && (this._TranslucencyColorTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(UU) {
        this._IridescenceTextureEnabled !== UU && (this._IridescenceTextureEnabled = UU, tU.d.MarkAllMaterialsAsDirty(1))
      }
    }
    pU._DiffuseTextureEnabled = !0, pU._BaseWeightTextureEnabled = !0, pU._BaseDiffuseRoughnessTextureEnabled = !0, pU._DetailTextureEnabled = !0, pU._DecalMapEnabled = !0, pU._AmbientTextureEnabled = !0, pU._OpacityTextureEnabled = !0, pU._ReflectionTextureEnabled = !0, pU._EmissiveTextureEnabled = !0, pU._SpecularTextureEnabled = !0, pU._BumpTextureEnabled = !0, pU._LightmapTextureEnabled = !0, pU._RefractionTextureEnabled = !0, pU._ColorGradingTextureEnabled = !0, pU._FresnelEnabled = !0, pU._ClearCoatTextureEnabled = !0, pU._ClearCoatBumpTextureEnabled = !0, pU._ClearCoatTintTextureEnabled = !0, pU._SheenTextureEnabled = !0, pU._AnisotropicTextureEnabled = !0, pU._ThicknessTextureEnabled = !0, pU._RefractionIntensityTextureEnabled = !0, pU._TranslucencyIntensityTextureEnabled = !0, pU._TranslucencyColorTextureEnabled = !0, pU._IridescenceTextureEnabled = !0
  },
  39716: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => FU,
      A: () => mU,
      C: () => oU,
      F: () => ZU,
      G: () => uU,
      I: () => jU,
      K: () => yU,
      O: () => vU,
      P: () => rU,
      Q: () => VU,
      T: () => fU,
      X: () => YU,
      Y: () => kU,
      b: () => BU,
      c: () => IU,
      cb: () => iU,
      eb: () => DU,
      g: () => GU,
      gb: () => zU,
      h: () => eU,
      ib: () => MU,
      j: () => WU,
      jb: () => CU,
      n: () => bU,
      q: () => qU,
      s: () => hU,
      u: () => QU,
      x: () => xU,
      z: () => aU
    });
    var tU = gU(38236),
      pU = gU(36622),
      EU = gU(39581),
      PU = gU(39720),
      TU = gU(39729);

    function qU(UU, RU, gU) {
      if (!UU || UU.LOGARITHMICDEPTH || UU.indexOf && UU.indexOf("LOGARITHMICDEPTH") >= 0) {
        const UU = gU.activeCamera;
        1 === UU.mode && tU.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), RU.setFloat("logarithmicDepthConstant", 2 / (Math.log(UU.maxZ + 1) / Math.LN2))
      }
    }
    const KU = {
        r: 0,
        g: 0,
        b: 0
      },
      cU = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function GU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      gU && UU.fogEnabled && (!RU || RU.applyFog) && 0 !== UU.fogMode && (gU.setFloat4("vFogInfos", UU.fogMode, UU.fogStart, UU.fogEnd, UU.fogDensity), tU ? (UU.fogColor.toLinearSpaceToRef(KU, UU.WC().useExactSrgbConversions), gU.setColor3("vFogColor", KU)) : gU.setColor3("vFogColor", UU.fogColor))
    }

    function jU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
      const GU = UU.numMaxInfluencers || UU.numInfluencers;
      return GU <= 0 ? 0 : (RU.push("#define MORPHTARGETS"), UU.hasPositions && RU.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), UU.hasNormals && RU.push("#define MORPHTARGETTEXTURE_HASNORMALS"), UU.hasTangents && RU.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), UU.hasUVs && RU.push("#define MORPHTARGETTEXTURE_HASUVS"), UU.hasUV2s && RU.push("#define MORPHTARGETTEXTURE_HASUV2S"), UU.hasColors && RU.push("#define MORPHTARGETTEXTURE_HASCOLORS"), UU.supportsPositions && pU && RU.push("#define MORPHTARGETS_POSITION"), UU.supportsNormals && EU && RU.push("#define MORPHTARGETS_NORMAL"), UU.supportsTangents && PU && RU.push("#define MORPHTARGETS_TANGENT"), UU.supportsUVs && TU && RU.push("#define MORPHTARGETS_UV"), UU.supportsUV2s && qU && RU.push("#define MORPHTARGETS_UV2"), UU.supportsColors && KU && RU.push("#define MORPHTARGETS_COLOR"), RU.push("#define NUM_MORPH_INFLUENCERS " + GU), UU.isUsingTextureForTargets && RU.push("#define MORPHTARGETS_TEXTURE"), cU.NUM_MORPH_INFLUENCERS = GU, cU.NORMAL = EU, cU.TANGENT = PU, cU.UV = TU, cU.UV2 = qU, cU.COLOR = KU, uU(gU, tU, cU, pU), GU)
    }

    function uU(UU, RU, gU) {
      let EU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const PU = gU.NUM_MORPH_INFLUENCERS;
      if (PU > 0 && pU.c.LastCreatedEngine) {
        const TU = pU.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          qU = RU.morphTargetManager;
        if (qU?.isUsingTextureForTargets) return;
        const KU = qU && qU.supportsPositions && EU,
          cU = qU && qU.supportsNormals && gU.NORMAL,
          GU = qU && qU.supportsTangents && gU.TANGENT,
          jU = qU && qU.supportsUVs && gU.UV1,
          uU = qU && qU.supportsUV2s && gU.UV2,
          CU = qU && qU.supportsColors && gU.VERTEXCOLOR;
        for (let gU = 0; gU < PU; gU++) KU && UU.push("position" + gU), cU && UU.push("normal" + gU), GU && UU.push("tangent" + gU), jU && UU.push("uv_" + gU), uU && UU.push("uv2_" + gU), CU && UU.push("color" + gU), UU.length > TU && tU.e.Error("Cannot add more vertex attributes for mesh " + RU.name)
      }
    }

    function CU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      UU.push("world0"), UU.push("world1"), UU.push("world2"), UU.push("world3"), RU && (UU.push("previousWorld0"), UU.push("previousWorld1"), UU.push("previousWorld2"), UU.push("previousWorld3"))
    }

    function hU(UU, RU) {
      const gU = UU.morphTargetManager;
      UU && gU && RU.setFloatArray("morphTargetInfluences", gU.influences)
    }

    function QU(UU, RU) {
      RU.bindToEffect(UU, "Scene")
    }

    function eU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        KU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        GU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        jU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (UU.texturesEnabled && pU && TU.b.ReflectionTextureEnabled) {
        if (gU.p_("reflectionMatrix", pU.getReflectionTextureMatrix()), gU.updateFloat2("vReflectionInfos", pU.level * UU.iblIntensity, jU), qU && pU.boundingBoxSize) {
          const UU = pU;
          gU.updateVector3("vReflectionPosition", UU.boundingBoxPosition), gU.updateVector3("vReflectionSize", UU.boundingBoxSize)
        }
        if (EU) {
          const UU = pU.getSize().width;
          gU.updateFloat2("vReflectionFilteringInfo", UU, Math.log2(UU))
        }
        if (cU && !RU.USEIRRADIANCEMAP) {
          const UU = pU.sphericalPolynomial;
          if (RU.USESPHERICALFROMREFLECTIONMAP && UU)
            if (RU.SPHERICAL_HARMONICS) {
              const RU = UU.preScaledHarmonics;
              gU.updateVector3("vSphericalL00", RU.l00), gU.updateVector3("vSphericalL1_1", RU.l1_1), gU.updateVector3("vSphericalL10", RU.l10), gU.updateVector3("vSphericalL11", RU.l11), gU.updateVector3("vSphericalL2_2", RU.l2_2), gU.updateVector3("vSphericalL2_1", RU.l2_1), gU.updateVector3("vSphericalL20", RU.l20), gU.updateVector3("vSphericalL21", RU.l21), gU.updateVector3("vSphericalL22", RU.l22)
            } else gU.updateFloat3("vSphericalX", UU.x.x, UU.x.y, UU.x.z), gU.updateFloat3("vSphericalY", UU.y.x, UU.y.y, UU.y.z), gU.updateFloat3("vSphericalZ", UU.z.x, UU.z.y, UU.z.z), gU.updateFloat3("vSphericalXX_ZZ", UU.xx.x - UU.zz.x, UU.xx.y - UU.zz.y, UU.xx.z - UU.zz.z), gU.updateFloat3("vSphericalYY_ZZ", UU.yy.x - UU.zz.x, UU.yy.y - UU.zz.y, UU.yy.z - UU.zz.z), gU.updateFloat3("vSphericalZZ", UU.zz.x, UU.zz.y, UU.zz.z), gU.updateFloat3("vSphericalXY", UU.xy.x, UU.xy.y, UU.xy.z), gU.updateFloat3("vSphericalYZ", UU.yz.x, UU.yz.y, UU.yz.z), gU.updateFloat3("vSphericalZX", UU.zx.x, UU.zx.y, UU.zx.z)
        } else KU && RU.USEIRRADIANCEMAP && RU.USE_IRRADIANCE_DOMINANT_DIRECTION && pU.irradianceTexture && gU.updateVector3("vReflectionDominantDirection", pU.irradianceTexture._dominantDirection);
        PU && gU.updateFloat3("vReflectionMicrosurfaceInfos", pU.getSize().width, pU.lodGenerationScale, pU.lodGenerationOffset)
      }
      GU && gU.updateColor3("vReflectionColor", tU)
    }

    function WU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (tU && TU.b.ReflectionTextureEnabled) {
        RU.LODBASEDMICROSFURACE ? gU.setTexture("reflectionSampler", tU) : (gU.setTexture("reflectionSampler", tU._lodTextureMid || tU), gU.setTexture("reflectionSamplerLow", tU._lodTextureLow || tU), gU.setTexture("reflectionSamplerHigh", tU._lodTextureHigh || tU)), RU.USEIRRADIANCEMAP && gU.setTexture("irradianceSampler", tU.irradianceTexture);
        const EU = UU.iblCdfGenerator;
        pU && EU && gU.setTexture("icdfSampler", EU.getIcdfTexture())
      }
    }

    function fU(UU, RU, gU) {
      RU._needUVs = !0, RU[gU] = !0, UU.optimizeUVAllocation && UU.getTextureMatrix().isIdentityAs3x2() ? (RU[gU + "DIRECTUV"] = UU.coordinatesIndex + 1, RU["MAINUV" + (UU.coordinatesIndex + 1)] = !0) : RU[gU + "DIRECTUV"] = 0
    }

    function xU(UU, RU, gU) {
      const tU = UU.getTextureMatrix();
      RU.p_(gU + "Matrix", tU)
    }

    function mU(UU, RU, gU) {
      gU.BAKED_VERTEX_ANIMATION_TEXTURE && gU.INSTANCES && UU.push("bakedVertexAnimationSettingsInstanced")
    }

    function IU(UU, RU, gU) {
      var tU;
      if (RU && UU && (UU.computeBonesUsingShaders && RU._bonesComputationForcedToCPU && (UU.computeBonesUsingShaders = !1), UU.useBones && UU.computeBonesUsingShaders && UU.skeleton)) {
        const pU = UU.skeleton;
        if (pU.isUsingTextureForMatrices && RU.getUniformIndex("boneTextureInfo") > -1) {
          const gU = pU.getTransformMatrixTexture(UU);
          RU.setTexture("boneSampler", gU), RU.setFloat2("boneTextureInfo", pU._textureWidth, pU._textureHeight)
        } else {
          const EU = pU.getTransformMatrices(UU);
          EU && (RU.setMatrices("mBones", EU), gU && UU.aZ().prePassRenderer && UU.aZ().prePassRenderer.getIndex(2) && (gU.previousBones[UU.uniqueId] || (gU.previousBones[UU.uniqueId] = EU.slice()), RU.setMatrices("mPreviousBones", gU.previousBones[UU.uniqueId]), tU = EU, gU.previousBones[UU.uniqueId].set(tU)))
        }
      }
    }

    function JU(UU, RU, gU, tU, pU) {
      let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      UU._bindLight(RU, gU, tU, pU, EU)
    }
    const wU = 4,
      nU = new WeakMap;

    function bU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const EU = Math.min(RU.lightSources.length, pU);
      for (let PU = 0; PU < EU; PU++) {
        JU(RU.lightSources[PU], PU, UU, gU, "boolean" === typeof tU ? tU : tU.SPECULARTERM, RU.receiveShadows)
      }
    }

    function oU(UU, RU, gU, tU) {
      gU.NUM_BONE_INFLUENCERS > 0 && (tU.addCPUSkinningFallback(0, RU), UU.push("matricesIndices"), UU.push("matricesWeights"), gU.NUM_BONE_INFLUENCERS > 4 && (UU.push("matricesIndicesExtra"), UU.push("matricesWeightsExtra")))
    }

    function ZU(UU, RU) {
      (RU.INSTANCES || RU.THIN_INSTANCES) && CU(UU, !!RU.PREPASS_VELOCITY), RU.INSTANCESCOLOR && UU.push("instanceColor")
    }

    function aU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pU = 0;
      for (let EU = 0; EU < gU && UU["LIGHT" + EU]; EU++) EU > 0 && (pU = tU + EU, RU.addFallback(pU, "LIGHT" + EU)), UU.SHADOWS || (UU["SHADOW" + EU] && RU.addFallback(tU, "SHADOW" + EU), UU["SHADOWPCF" + EU] && RU.addFallback(tU, "SHADOWPCF" + EU), UU["SHADOWPCSS" + EU] && RU.addFallback(tU, "SHADOWPCSS" + EU), UU["SHADOWPOISSON" + EU] && RU.addFallback(tU, "SHADOWPOISSON" + EU), UU["SHADOWESM" + EU] && RU.addFallback(tU, "SHADOWESM" + EU), UU["SHADOWCLOSEESM" + EU] && RU.addFallback(tU, "SHADOWCLOSEESM" + EU));
      return pU
    }

    function YU(UU, RU, gU, tU, pU, EU, PU) {
      let TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        KU = arguments.length > 9 ? arguments[9] : void 0,
        cU = arguments.length > 10 ? arguments[10] : void 0;
      if (PU._areMiscDirty) {
        PU.LOGARITHMICDEPTH = gU, PU.POINTSIZE = tU, PU.FOG = pU && function(UU, RU) {
          return RU.fogEnabled && UU.applyFog && 0 !== RU.fogMode
        }(UU, RU), PU.NONUNIFORMSCALING = UU.nonUniformScaling, PU.ALPHATEST = EU, PU.DECAL_AFTER_DETAIL = TU, PU.USE_VERTEX_PULLING = qU, PU.RIGHT_HANDED = RU.useRightHandedSystem;
        const GU = qU ? KU?.geometry?.getIndexBuffer() : null,
          jU = !!KU && KU.isUnIndexed;
        PU.VERTEX_PULLING_USE_INDEX_BUFFER = !!GU && !jU, PU.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!GU || jU) && GU.is32Bits, PU.VERTEXOUTPUT_INVARIANT = !!cU
      }
    }

    function BU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!UU.lightsEnabled || tU) return !0;
      const pU = RU.lightSources,
        EU = Math.min(pU.length, gU);
      for (let PU = 0; PU < EU; PU++)
        if (!pU[PU].areLightTexturesReady()) return !1;
      return !0
    }

    function VU(UU, RU, gU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!gU._areLightsDirty) return gU._needNormals;
      const TU = EU;
      EU = function(UU, RU) {
        const gU = UU.WC().getCaps().maxUniformBuffersPerShaderStage;
        if (null == gU) return RU;
        const tU = Math.max(gU - wU, 1);
        return Math.min(RU, tU)
      }(UU, EU);
      let qU = 0;
      const KU = {
        needNormals: gU._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (UU.lightsEnabled && !PU) {
        RU.lightSources.length > EU && EU < TU && function(UU, RU, gU, pU) {
          let EU = nU.get(UU);
          EU || (EU = new Set, nU.set(UU, EU)), EU.has(pU) || (EU.add(pU), tU.e.Warn(`maxSimultaneousLights is ${RU} but this engine supports at most ${gU} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${pU} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${pU+wU} uniform buffers, over the device limit of ${UU.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${gU}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${gU} or less to silence this warning.`))
        }(UU.WC(), TU, EU, Math.min(RU.lightSources.length, TU));
        for (const tU of RU.lightSources)
          if (XU(UU, RU, tU, qU, gU, pU, KU), qU++, qU === EU) break
      }
      gU.SPECULARTERM = KU.specularEnabled, gU.SHADOWS = KU.shadowEnabled;
      const cU = Math.max(EU, gU.MAXLIGHTCOUNT || 0);
      for (let tU = qU; tU < cU; tU++) void 0 !== gU["LIGHT" + tU] && (gU["LIGHT" + tU] = !1, gU["HEMILIGHT" + tU] = !1, gU["POINTLIGHT" + tU] = !1, gU["DIRLIGHT" + tU] = !1, gU["SPOTLIGHT" + tU] = !1, gU["AREALIGHT" + tU] = !1, gU["CLUSTLIGHT" + tU] = !1, gU["SHADOW" + tU] = !1, gU["SHADOWCSM" + tU] = !1, gU["SHADOWCSMDEBUG" + tU] = !1, gU["SHADOWCSMNUM_CASCADES" + tU] = !1, gU["SHADOWCSMUSESHADOWMAXZ" + tU] = !1, gU["SHADOWCSMNOBLEND" + tU] = !1, gU["SHADOWCSM_RIGHTHANDED" + tU] = !1, gU["SHADOWPCF" + tU] = !1, gU["SHADOWPCSS" + tU] = !1, gU["SHADOWPOISSON" + tU] = !1, gU["SHADOWESM" + tU] = !1, gU["SHADOWCLOSEESM" + tU] = !1, gU["SHADOWCUBE" + tU] = !1, gU["SHADOWLOWQUALITY" + tU] = !1, gU["SHADOWMEDIUMQUALITY" + tU] = !1);
      gU.LIGHTCOUNT = qU, gU.MAXLIGHTCOUNT = EU;
      const GU = UU.WC().getCaps();
      return void 0 === gU.SHADOWFLOAT && (KU.needRebuild = !0), gU.SHADOWFLOAT = KU.shadowEnabled && (GU.textureFloatRender && GU.textureFloatLinearFiltering || GU.textureHalfFloatRender && GU.textureHalfFloatLinearFiltering), gU.LIGHTMAPEXCLUDED = KU.lightmapMode, KU.needRebuild && gU.rebuild(), KU.needNormals
    }

    function rU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (RU && TU.b.ReflectionTextureEnabled) {
        if (!RU.isReadyOrNotBlocking()) return !1;
        gU._needNormals = !0, gU.REFLECTION = !0, gU.GAMMAREFLECTION = RU.gammaSpace, gU.RGBDREFLECTION = RU.isRGBD, gU.LODINREFLECTIONALPHA = RU.lodLevelInAlpha, gU.LINEARSPECULARREFLECTION = RU.linearSpecularLOD, gU.USEIRRADIANCEMAP = !1, gU.LODBASEDMICROSFURACE = UU.WC().getCaps().textureLOD;
        const PU = UU.WC();
        switch (tU && pU > 0 ? (gU.NUM_SAMPLES = "" + pU, PU._features.needTypeSuffixInShaderConstants && (gU.NUM_SAMPLES = gU.NUM_SAMPLES + "u"), gU.REALTIME_FILTERING = !0, UU.iblCdfGenerator && (gU.IBL_CDF_FILTERING = !0)) : gU.REALTIME_FILTERING = !1, gU.INVERTCUBICMAP = 6 === RU.coordinatesMode, gU.REFLECTIONMAP_3D = RU.isCube, gU.REFLECTIONMAP_OPPOSITEZ = gU.REFLECTIONMAP_3D && UU.useRightHandedSystem ? !RU.invertZ : RU.invertZ, gU.REFLECTIONMAP_CUBIC = !1, gU.REFLECTIONMAP_EXPLICIT = !1, gU.REFLECTIONMAP_PLANAR = !1, gU.REFLECTIONMAP_PROJECTION = !1, gU.REFLECTIONMAP_SKYBOX = !1, gU.REFLECTIONMAP_SPHERICAL = !1, gU.REFLECTIONMAP_EQUIRECTANGULAR = !1, gU.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, gU.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, RU.coordinatesMode) {
          case 0:
            gU.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            gU.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            gU.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            gU.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            gU.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            gU.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            gU.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            gU.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            gU.REFLECTIONMAP_CUBIC = !0, gU.USE_LOCAL_REFLECTIONMAP_CUBIC = !!RU.boundingBoxSize
        }
        5 !== RU.coordinatesMode && (RU.irradianceTexture ? (gU.USEIRRADIANCEMAP = !0, gU.USESPHERICALFROMREFLECTIONMAP = !1, gU.USESPHERICALINVERTEX = !1, RU.irradianceTexture._dominantDirection ? gU.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : gU.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : RU.isCube && (gU.USESPHERICALFROMREFLECTIONMAP = !0, gU.USEIRRADIANCEMAP = !1, gU.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, gU.USESPHERICALINVERTEX = EU))
      } else gU.REFLECTION = !1, gU.REFLECTIONMAP_3D = !1, gU.REFLECTIONMAP_SPHERICAL = !1, gU.REFLECTIONMAP_PLANAR = !1, gU.REFLECTIONMAP_CUBIC = !1, gU.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, gU.REFLECTIONMAP_PROJECTION = !1, gU.REFLECTIONMAP_SKYBOX = !1, gU.REFLECTIONMAP_EXPLICIT = !1, gU.REFLECTIONMAP_EQUIRECTANGULAR = !1, gU.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, gU.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, gU.INVERTCUBICMAP = !1, gU.USESPHERICALFROMREFLECTIONMAP = !1, gU.USEIRRADIANCEMAP = !1, gU.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, gU.USESPHERICALINVERTEX = !1, gU.REFLECTIONMAP_OPPOSITEZ = !1, gU.LODINREFLECTIONALPHA = !1, gU.GAMMAREFLECTION = !1, gU.RGBDREFLECTION = !1, gU.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function XU(UU, RU, gU, tU, pU, PU, TU) {
      switch (TU.needNormals = !0, void 0 === pU["LIGHT" + tU] && (TU.needRebuild = !0), pU["LIGHT" + tU] = !0, pU["SPOTLIGHT" + tU] = !1, pU["HEMILIGHT" + tU] = !1, pU["POINTLIGHT" + tU] = !1, pU["DIRLIGHT" + tU] = !1, pU["AREALIGHT" + tU] = !1, pU["CLUSTLIGHT" + tU] = !1, gU.prepareLightSpecificDefines(pU, tU), pU["LIGHT_FALLOFF_PHYSICAL" + tU] = !1, pU["LIGHT_FALLOFF_GLTF" + tU] = !1, pU["LIGHT_FALLOFF_STANDARD" + tU] = !1, gU.falloffType) {
        case EU.c.FALLOFF_GLTF:
          pU["LIGHT_FALLOFF_GLTF" + tU] = !0;
          break;
        case EU.c.FALLOFF_PHYSICAL:
          pU["LIGHT_FALLOFF_PHYSICAL" + tU] = !0;
          break;
        case EU.c.FALLOFF_STANDARD:
          pU["LIGHT_FALLOFF_STANDARD" + tU] = !0
      }
      if (PU && !gU.specular.equalsFloats(0, 0, 0) && (TU.specularEnabled = !0), pU["SHADOW" + tU] = !1, pU["SHADOWCSM" + tU] = !1, pU["SHADOWCSMDEBUG" + tU] = !1, pU["SHADOWCSMNUM_CASCADES" + tU] = !1, pU["SHADOWCSMUSESHADOWMAXZ" + tU] = !1, pU["SHADOWCSMNOBLEND" + tU] = !1, pU["SHADOWCSM_RIGHTHANDED" + tU] = !1, pU["SHADOWPCF" + tU] = !1, pU["SHADOWPCSS" + tU] = !1, pU["SHADOWPOISSON" + tU] = !1, pU["SHADOWESM" + tU] = !1, pU["SHADOWCLOSEESM" + tU] = !1, pU["SHADOWCUBE" + tU] = !1, pU["SHADOWLOWQUALITY" + tU] = !1, pU["SHADOWMEDIUMQUALITY" + tU] = !1, RU && RU.receiveShadows && UU.shadowsEnabled && gU.shadowEnabled) {
        const RU = gU.getShadowGenerator(UU.activeCamera) ?? gU.getShadowGenerator();
        if (RU) {
          const UU = RU.getShadowMap();
          UU && UU.renderList && UU.renderList.length > 0 && (TU.shadowEnabled = !0, RU.prepareDefines(pU, tU))
        }
      }
      gU.lightmapMode != EU.c.LIGHTMAP_DEFAULT ? (TU.lightmapMode = !0, pU["LIGHTMAPEXCLUDED" + tU] = !0, pU["LIGHTMAPNOSPECULAR" + tU] = gU.lightmapMode == EU.c.LIGHTMAP_SHADOWSONLY) : (pU["LIGHTMAPEXCLUDED" + tU] = !1, pU["LIGHTMAPNOSPECULAR" + tU] = !1)
    }

    function vU(UU, RU, gU, tU, pU) {
      let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        TU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qU = function(UU, RU) {
          let gU = !1;
          if (UU.activeCamera) {
            const tU = RU.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              pU = RU.CAMERA_PERSPECTIVE ? 1 : 0,
              EU = 1 === UU.activeCamera.mode ? 1 : 0,
              PU = 0 === UU.activeCamera.mode ? 1 : 0;
            (tU ^ EU || pU ^ PU) && (RU.CAMERA_ORTHOGRAPHIC = 1 === EU, RU.CAMERA_PERSPECTIVE = 1 === PU, gU = !0)
          }
          return gU
        }(UU, tU);
      !1 !== EU && (qU = (0, PU.g)(gU, UU, tU)), tU.DEPTHPREPASS !== !RU.getColorWrite() && (tU.DEPTHPREPASS = !tU.DEPTHPREPASS, qU = !0), tU.INSTANCES !== pU && (tU.INSTANCES = pU, qU = !0), tU.THIN_INSTANCES !== TU && (tU.THIN_INSTANCES = TU, qU = !0), qU && tU.markAsUnprocessed()
    }
    const dU = 40,
      HU = 64,
      SU = new WeakMap,
      sU = new WeakSet;

    function yU(UU, RU, gU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        TU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!RU._areAttributesDirty && RU._needNormals === RU._normals && RU._needUVs === RU._uvs) return !1;
      RU._normals = RU._needNormals, RU._uvs = RU._needUVs, RU.NORMAL = RU._needNormals && UU.isVerticesDataPresent("normal"), RU._needNormals && UU.isVerticesDataPresent("tangent") && (RU.TANGENT = !0);
      for (let tU = 1; tU <= 6; ++tU) RU["UV" + tU] = !!RU._needUVs && UU.isVerticesDataPresent(`uv${1===tU?"":tU}`);
      if (gU) {
        const gU = UU.useVertexColors && UU.isVerticesDataPresent("color");
        RU.VERTEXCOLOR = gU, RU.VERTEXALPHA = UU.hasVertexAlpha && gU && PU
      }
      return UU.isVerticesDataPresent("instanceColor") && (UU.BtU || UU.hasThinInstances) && (RU.INSTANCESCOLOR = !0), pU && function(UU, RU) {
        if (UU.useBones && UU.computeBonesUsingShaders && UU.skeleton) {
          RU.NUM_BONE_INFLUENCERS = UU.numBoneInfluencers;
          const gU = void 0 !== RU.BONETEXTURE;
          if (UU.skeleton.isUsingTextureForMatrices && gU) RU.BONETEXTURE = !0;
          else {
            RU.BonesPerMesh = UU.skeleton.bones.length + 1, RU.BONETEXTURE = !gU && void 0;
            const pU = UU.aZ(),
              EU = pU.prePassRenderer;
            if (EU && EU.enabled) {
              const gU = -1 === EU.excludedSkinnedMesh.indexOf(UU);
              RU.BONES_VELOCITY_ENABLED = gU
            }
            const PU = !0 === RU.MULTIVIEW,
              TU = 2 * RU.BonesPerMesh + (PU ? 1 : 0);
            if (SU.get(UU.skeleton) !== TU) {
              SU.set(UU.skeleton, TU);
              const gU = pU.WC().getCaps().maxVertexUniformVectors;
              if (gU && !sU.has(UU.skeleton)) {
                const pU = 4 * RU.BonesPerMesh,
                  EU = PU ? HU : dU,
                  TU = Math.max(gU - EU, 0);
                (pU > TU || PU && 3 * pU > gU) && (sU.add(UU.skeleton), tU.e.Warn(`Skeleton "${UU.skeleton.name}": ${UU.skeleton.bones.length} bones stored as vertex uniforms use ${pU} of ~${TU} usable uniform vectors${PU?" (multiview)":""} on a device reporting ${gU}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else RU.NUM_BONE_INFLUENCERS = 0, RU.BonesPerMesh = 0, void 0 !== RU.BONETEXTURE && (RU.BONETEXTURE = !1)
      }(UU, RU), EU && function(UU, RU) {
        const gU = UU.morphTargetManager;
        gU ? (RU.MORPHTARGETS_UV = gU.supportsUVs && RU.UV1, RU.MORPHTARGETS_UV2 = gU.supportsUV2s && RU.UV2, RU.MORPHTARGETS_TANGENT = gU.supportsTangents && RU.TANGENT, RU.MORPHTARGETS_NORMAL = gU.supportsNormals && RU.NORMAL, RU.MORPHTARGETS_POSITION = gU.supportsPositions, RU.MORPHTARGETS_COLOR = gU.supportsColors, RU.MORPHTARGETTEXTURE_HASUVS = gU.hasUVs, RU.MORPHTARGETTEXTURE_HASUV2S = gU.hasUV2s, RU.MORPHTARGETTEXTURE_HASTANGENTS = gU.hasTangents, RU.MORPHTARGETTEXTURE_HASNORMALS = gU.hasNormals, RU.MORPHTARGETTEXTURE_HASPOSITIONS = gU.hasPositions, RU.MORPHTARGETTEXTURE_HASCOLORS = gU.hasColors, RU.NUM_MORPH_INFLUENCERS = gU.numMaxInfluencers || gU.numInfluencers, RU.MORPHTARGETS = RU.NUM_MORPH_INFLUENCERS > 0, RU.MORPHTARGETS_TEXTURE = gU.isUsingTextureForTargets) : (RU.MORPHTARGETS_UV = !1, RU.MORPHTARGETS_UV2 = !1, RU.MORPHTARGETS_TANGENT = !1, RU.MORPHTARGETS_NORMAL = !1, RU.MORPHTARGETS_POSITION = !1, RU.MORPHTARGETS_COLOR = !1, RU.MORPHTARGETTEXTURE_HASUVS = !1, RU.MORPHTARGETTEXTURE_HASUV2S = !1, RU.MORPHTARGETTEXTURE_HASTANGENTS = !1, RU.MORPHTARGETTEXTURE_HASNORMALS = !1, RU.MORPHTARGETTEXTURE_HASPOSITIONS = !1, RU.MORPHTARGETTEXTURE_HAS_COLORS = !1, RU.MORPHTARGETS = !1, RU.NUM_MORPH_INFLUENCERS = 0)
      }(UU, RU), TU && function(UU, RU) {
        const gU = UU.bakedVertexAnimationManager;
        RU.BAKED_VERTEX_ANIMATION_TEXTURE = !(!gU || !gU.isEnabled)
      }(UU, RU), !0
    }

    function kU(UU, RU) {
      if (UU.activeCamera) {
        const gU = RU.MULTIVIEW;
        RU.MULTIVIEW = null !== UU.activeCamera.outputRenderTarget && UU.activeCamera.outputRenderTarget.getViewCount() > 1, RU.MULTIVIEW != gU && RU.markAsUnprocessed()
      }
    }

    function FU(UU, RU, gU) {
      const tU = RU.ORDER_INDEPENDENT_TRANSPARENCY,
        pU = RU.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      RU.ORDER_INDEPENDENT_TRANSPARENCY = UU.useOrderIndependentTransparency && gU, RU.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !UU.WC().getCaps().textureFloatLinearFiltering, tU === RU.ORDER_INDEPENDENT_TRANSPARENCY && pU === RU.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || RU.markAsUnprocessed()
    }

    function iU(UU, RU, gU) {
      const tU = RU.PREPASS;
      if (!RU._arePrePassDirty) return;
      const pU = [{
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
      if (UU.prePassRenderer && UU.prePassRenderer.enabled && gU) {
        RU.PREPASS = !0, RU.SCENE_MRT_COUNT = UU.prePassRenderer.mrtCount, RU.PREPASS_NORMAL_WORLDSPACE = UU.prePassRenderer.generateNormalsInWorldSpace, RU.PREPASS_COLOR = !0, RU.PREPASS_COLOR_INDEX = 0;
        for (let gU = 0; gU < pU.length; gU++) {
          const tU = UU.prePassRenderer.getIndex(pU[gU].type); - 1 !== tU ? (RU[pU[gU].define] = !0, RU[pU[gU].index] = tU) : RU[pU[gU].define] = !1
        }
      } else {
        RU.PREPASS = !1;
        for (let UU = 0; UU < pU.length; UU++) RU[pU[UU].define] = !1
      }
      RU.PREPASS != tU && (RU.markAsUnprocessed(), RU.markAsImageProcessingDirty())
    }

    function AU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        KU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      pU && pU.push("Light" + UU), EU || (RU.push("vLightData" + UU, "vLightDiffuse" + UU, "vLightSpecular" + UU, "vLightDirection" + UU, "vLightWidth" + UU, "vLightHeight" + UU, "vLightFalloff" + UU, "vLightGround" + UU, "vSliceData" + UU, "vSliceRanges" + UU, "lightMatrix" + UU, "shadowsInfo" + UU, "depthValues" + UU), gU.push("shadowTexture" + UU), gU.push("depthTexture" + UU), RU.push("viewFrustumZ" + UU, "cascadeBlendFactor" + UU, "lightSizeUVCorrection" + UU, "depthCorrection" + UU, "penumbraDarkness" + UU, "frustumLengths" + UU), tU && (gU.push("projectionLightTexture" + UU), RU.push("textureProjectionMatrix" + UU)), PU && gU.push("iesLightTexture" + UU), qU && gU.push("rectAreaLightEmissionTexture" + UU), TU && (gU.push("lightDataTexture" + UU), KU || gU.push("tileMaskTexture" + UU)))
    }

    function zU(UU, RU, gU) {
      const tU = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      gU && tU.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), UU.push(...tU);
      RU.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function MU(UU, RU, gU) {
      let tU, pU, EU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        PU = null;
      if (UU.uniformsNames) {
        const TU = UU;
        tU = TU.uniformsNames, pU = TU.uniformBuffersNames, RU = TU.samplers, gU = TU.defines, EU = TU.maxSimultaneousLights || 0, PU = TU.shaderLanguage ?? null
      } else tU = UU, RU || (RU = []);
      for (let TU = 0; TU < EU && gU["LIGHT" + TU]; TU++) AU(TU, tU, RU, gU["PROJECTEDLIGHTTEXTURE" + TU], pU, !1, gU["IESLIGHTTEXTURE" + TU], gU["CLUSTLIGHT" + TU], gU["RECTAREALIGHTEMISSIONTEXTURE" + TU], 1 === PU);
      gU.NUM_MORPH_INFLUENCERS && (tU.push("morphTargetInfluences"), tU.push("morphTargetCount")), gU.BAKED_VERTEX_ANIMATION_TEXTURE && (tU.push("bakedVertexAnimationSettings"), tU.push("bakedVertexAnimationTextureSizeInverted"), tU.push("bakedVertexAnimationTime"), RU.push("bakedVertexAnimationTexture"))
    }

    function DU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      UU.addUniform("vReflectionInfos", 2), UU.addUniform("reflectionMatrix", 16), RU && UU.addUniform("vReflectionMicrosurfaceInfos", 3), gU && (UU.addUniform("vReflectionPosition", 3), UU.addUniform("vReflectionSize", 3)), tU && (UU.addUniform("vReflectionFilteringInfo", 2), UU.addUniform("vReflectionDominantDirection", 3)), EU && UU.addUniform("vReflectionColor", 3), pU && (UU.addUniform("vSphericalL00", 3), UU.addUniform("vSphericalL1_1", 3), UU.addUniform("vSphericalL10", 3), UU.addUniform("vSphericalL11", 3), UU.addUniform("vSphericalL2_2", 3), UU.addUniform("vSphericalL2_1", 3), UU.addUniform("vSphericalL20", 3), UU.addUniform("vSphericalL21", 3), UU.addUniform("vSphericalL22", 3), UU.addUniform("vSphericalX", 3), UU.addUniform("vSphericalY", 3), UU.addUniform("vSphericalZ", 3), UU.addUniform("vSphericalXX_ZZ", 3), UU.addUniform("vSphericalYY_ZZ", 3), UU.addUniform("vSphericalZZ", 3), UU.addUniform("vSphericalXY", 3), UU.addUniform("vSphericalYZ", 3), UU.addUniform("vSphericalZX", 3))
    }
  },
  39732: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(36600),
      pU = gU(39676);
    class EU extends pU.c {
      constructor(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(UU, RU, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new tU.c, this._storeEffectOnSubMeshes = gU
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(UU, RU) {
        return !!UU && (!this._storeEffectOnSubMeshes || (!UU.ZI || 0 === UU.ZI.length || this.isReadyForSubMesh(UU, UU.ZI[0], RU)))
      }
      _isReadyForSubMesh(UU) {
        const RU = UU.materialDefines;
        return !(this.checkReadyOnEveryCall || !UU.effect || !RU || RU._renderId !== this.aZ().getRenderId())
      }
      bindOnlyWorldMatrix(UU) {
        this._activeEffect.setMatrix("world", UU)
      }
      bindOnlyNormalMatrix(UU) {
        this._activeEffect.setMatrix("normalMatrix", UU)
      }
      bind(UU, RU) {
        RU && this.bindForSubMesh(UU, RU, RU.ZI[0])
      }
      _afterBind(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(UU, RU, gU), this.aZ()._cachedEffect = RU, gU ? gU._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return gU._drawWrapper._forceRebindOnNextCall || UU.isCachedMaterialInvalid(this, RU, tU)
      }
      dispose(UU, RU, gU) {
        this._activeEffect = void 0, super.dispose(UU, RU, gU)
      }
    }
  },
  39755: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => pU
    });
    const tU = new WeakMap;

    function pU(UU) {
      const RU = UU.getVertexBuffers();
      if (!RU) return null;
      let gU = tU.get(UU);
      if (gU) {
        let UU = !1;
        for (const tU in RU)
          if (!gU.has(tU)) {
            UU = !0;
            break
          } if (!UU) return gU
      } else gU = new Map, tU.set(UU, gU);
      for (const tU in RU) {
        const UU = RU[tU];
        if (UU) {
          const RU = UU.byteOffset,
            pU = UU.byteStride,
            EU = UU.type,
            PU = UU.normalized;
          gU.set(tU, {
            offset: RU,
            stride: pU,
            type: EU,
            normalized: PU
          })
        }
      }
      return gU
    }

    function EU(UU, RU) {
      RU.forEach(((RU, gU) => {
        const tU = `vp_${gU}_info`;
        UU.setFloat4(tU, RU.offset, RU.stride, RU.type, RU.normalized ? 1 : 0)
      }))
    }
  },
  39708: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      f: () => qU
    });
    var tU = gU(39377),
      pU = gU(36600),
      EU = gU(39380);
    let PU = (() => {
      var UU;
      let RU, gU, pU = [];
      return UU = class {
        static extractMinAndMaxIndexed(UU, RU, gU, tU, pU, EU) {
          for (let PU = gU; PU < gU + tU; PU++) {
            const gU = 3 * RU[PU],
              tU = UU[gU],
              TU = UU[gU + 1],
              qU = UU[gU + 2];
            pU.minimizeInPlaceFromFloats(tU, TU, qU), EU.maximizeInPlaceFromFloats(tU, TU, qU)
          }
        }
        static extractMinAndMax(UU, RU, gU, tU, pU, EU) {
          for (let PU = RU, TU = RU * tU; PU < RU + gU; PU++, TU += tU) {
            const RU = UU[TU],
              gU = UU[TU + 1],
              tU = UU[TU + 2];
            pU.minimizeInPlaceFromFloats(RU, gU, tU), EU.maximizeInPlaceFromFloats(RU, gU, tU)
          }
        }
      }, (() => {
        const PU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [EU.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], gU = [EU.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, tU.i)(UU, null, RU, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: UU => "extractMinAndMaxIndexed" in UU,
            get: UU => UU.extractMinAndMaxIndexed
          },
          metadata: PU
        }, null, pU), (0, tU.i)(UU, null, gU, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: UU => "extractMinAndMax" in UU,
            get: UU => UU.extractMinAndMax
          },
          metadata: PU
        }, null, pU), PU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PU
        }), (0, tU.j)(UU, pU)
      })(), UU
    })();

    function TU(UU, RU, gU, tU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const TU = new pU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qU = new pU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return PU.extractMinAndMaxIndexed(UU, RU, gU, tU, TU, qU), EU && (TU.x -= TU.x * EU.x + EU.y, TU.y -= TU.y * EU.x + EU.y, TU.z -= TU.z * EU.x + EU.y, qU.x += qU.x * EU.x + EU.y, qU.y += qU.y * EU.x + EU.y, qU.z += qU.z * EU.x + EU.y), {
        minimum: TU,
        maximum: qU
      }
    }

    function qU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        EU = arguments.length > 4 ? arguments[4] : void 0;
      const TU = new pU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qU = new pU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return EU || (EU = 3), PU.extractMinAndMax(UU, RU, gU, EU, TU, qU), tU && (TU.x -= TU.x * tU.x + tU.y, TU.y -= TU.y * tU.x + tU.y, TU.z -= TU.z * tU.x + tU.y, qU.x += qU.x * tU.x + tU.y, qU.y += qU.y * tU.x + tU.y, qU.z += qU.z * tU.x + tU.y), {
        minimum: TU,
        maximum: qU
      }
    }
  },
  39681: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU
    });
    var tU, pU = gU(39517),
      EU = gU(39690),
      PU = gU(39698),
      TU = gU(39708),
      qU = gU(39714),
      KU = gU(39256);
    class cU {
      get materialDefines() {
        const UU = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof UU ? null : UU
      }
      set materialDefines(UU) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = UU
      }
      _getDrawWrapper(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UU = UU ?? this._engine.currentRenderPassId;
        let gU = this._drawWrappers[UU];
        return !gU && RU && (this._drawWrappers[UU] = gU = new qU.c(this._mesh.aZ().WC())), gU
      }
      _removeDrawWrapper(UU) {
        let RU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[UU]?.dispose(RU), this._drawWrappers[UU] = void 0
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
      _setMainDrawWrapperOverride(UU) {
        this._mainDrawWrapperOverride = UU
      }
      setEffect(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pU = this._drawWrapper;
        pU.setEffect(UU, RU, tU), void 0 !== gU && (pU.materialContext = gU), UU || (pU.defines = null, pU.materialContext = void 0)
      }
      resetDrawCache(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== UU) return void this._removeDrawWrapper(UU, !0, RU);
          for (const UU of this._drawWrappers) UU?.dispose(RU)
        }
        this._drawWrappers = []
      }
      static AddToMesh(UU, RU, gU, tU, pU, EU, PU) {
        return new cU(UU, RU, gU, tU, pU, EU, PU, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(UU, RU, gU, tU, pU, EU, PU) {
        let TU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = UU, this.verticesStart = RU, this.verticesCount = gU, this.indexStart = tU, this.indexCount = pU, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = EU, this._renderingMesh = PU || EU, qU && EU.ZI.push(this), this._engine = this._mesh.aZ().WC(), this.resetDrawCache(), this._trianglePlanes = [], this._id = EU.ZI.length - 1, TU && (this.refreshBoundingInfo(), EU.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      lY() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.lY() : this._boundingInfo
      }
      setBoundingInfo(UU) {
        return this._boundingInfo = UU, this
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
        const UU = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return UU || this._renderingMesh
      }
      JC() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const RU = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!RU) return UU && this._mesh.aZ()._hasDefaultMaterial ? this._mesh.aZ().defaultMaterial : null;
        if (this._isMultiMaterial(RU)) {
          const UU = RU.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== UU && (this._currentMaterial = UU, this.resetDrawCache()), UU
        }
        return RU
      }
      _isMultiMaterial(UU) {
        return void 0 !== UU.getSubMaterial
      }
      refreshBoundingInfo() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (UU || (UU = this._renderingMesh.getVerticesData(pU.l.PositionKind)), !UU) return this._boundingInfo = this._mesh.lY(), this;
        const RU = this._renderingMesh.dgU();
        let gU;
        if (0 === this.indexStart && this.indexCount === RU.length) {
          const UU = this._renderingMesh.lY();
          gU = {
            minimum: UU.minimum.clone(),
            maximum: UU.maximum.clone()
          }
        } else gU = (0, TU.e)(UU, RU, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(gU.minimum, gU.maximum) : this._boundingInfo = new PU.d(gU.minimum, gU.maximum), this
      }
      _checkCollision(UU) {
        return this.lY()._checkCollision(UU)
      }
      updateBoundingInfo(UU) {
        let RU = this.lY();
        return RU || (this.refreshBoundingInfo(), RU = this.lY()), RU && RU.update(UU), this
      }
      isInFrustum(UU) {
        const RU = this.lY();
        return !!RU && RU.isInFrustum(UU, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(UU) {
        const RU = this.lY();
        return !!RU && RU.isCompletelyInFrustum(UU)
      }
      render(UU) {
        return this._renderingMesh.render(this, UU, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(UU, RU) {
        if (!this._linesIndexBuffer) {
          const gU = 6 * Math.floor(this.indexCount / 3),
            tU = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(gU) : new Uint16Array(gU);
          let pU = 0;
          if (0 === UU.length)
            for (let UU = this.indexStart; UU < this.indexStart + this.indexCount; UU += 3) tU[pU++] = UU, tU[pU++] = UU + 1, tU[pU++] = UU + 1, tU[pU++] = UU + 2, tU[pU++] = UU + 2, tU[pU++] = UU;
          else
            for (let RU = this.indexStart; RU < this.indexStart + this.indexCount; RU += 3) tU[pU++] = UU[RU], tU[pU++] = UU[RU + 1], tU[pU++] = UU[RU + 1], tU[pU++] = UU[RU + 2], tU[pU++] = UU[RU + 2], tU[pU++] = UU[RU];
          this._linesIndexBuffer = RU.createIndexBuffer(tU), this._linesIndexCount = tU.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(UU) {
        const RU = this.lY();
        return !!RU && UU.intersectsBox(RU.boundingBox)
      }
      intersects(UU, RU, gU, tU, pU) {
        const EU = this.JC();
        if (!EU) return null;
        let PU = 3,
          TU = !1;
        switch (EU.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            PU = 1, TU = !0
        }
        return 4 === EU.fillMode ? gU.length ? this._intersectLines(UU, RU, gU, this._mesh.intersectionThreshold, tU) : this._intersectUnIndexedLines(UU, RU, gU, this._mesh.intersectionThreshold, tU) : !gU.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(UU, RU, gU, tU, pU) : this._intersectTriangles(UU, RU, gU, PU, TU, tU, pU)
      }
      _intersectLines(UU, RU, gU, tU, pU) {
        let PU = null;
        for (let TU = this.indexStart; TU < this.indexStart + this.indexCount; TU += 2) {
          const qU = RU[gU[TU]],
            KU = RU[gU[TU + 1]],
            cU = UU.intersectionSegment(qU, KU, tU);
          if (!(cU < 0) && ((pU || !PU || cU < PU.distance) && (PU = new EU.c(null, null, cU), PU.faceId = TU / 2, pU))) break
        }
        return PU
      }
      _intersectUnIndexedLines(UU, RU, gU, tU, pU) {
        let PU = null;
        for (let TU = this.verticesStart; TU < this.verticesStart + this.verticesCount; TU += 2) {
          const gU = RU[TU],
            qU = RU[TU + 1],
            KU = UU.intersectionSegment(gU, qU, tU);
          if (!(KU < 0) && ((pU || !PU || KU < PU.distance) && (PU = new EU.c(null, null, KU), PU.faceId = TU / 2, pU))) break
        }
        return PU
      }
      _intersectTriangles(UU, RU, gU, tU, pU, EU, PU) {
        let TU = null,
          qU = -1;
        for (let KU = this.indexStart; KU < this.indexStart + this.indexCount - (3 - tU); KU += tU) {
          qU++;
          const tU = gU[KU],
            cU = gU[KU + 1],
            GU = gU[KU + 2];
          if (pU && 4294967295 === GU) {
            KU += 2;
            continue
          }
          const jU = RU[tU],
            uU = RU[cU],
            CU = RU[GU];
          if (!jU || !uU || !CU) continue;
          if (PU && !PU(jU, uU, CU, UU, tU, cU, GU)) continue;
          const hU = UU.intersectsTriangle(jU, uU, CU);
          if (hU) {
            if (hU.distance < 0) continue;
            if ((EU || !TU || hU.distance < TU.distance) && (TU = hU, TU.faceId = qU, EU)) break
          }
        }
        return TU
      }
      _intersectUnIndexedTriangles(UU, RU, gU, tU, pU) {
        let EU = null;
        for (let PU = this.verticesStart; PU < this.verticesStart + this.verticesCount; PU += 3) {
          const gU = RU[PU],
            TU = RU[PU + 1],
            qU = RU[PU + 2];
          if (pU && !pU(gU, TU, qU, UU, -1, -1, -1)) continue;
          const KU = UU.intersectsTriangle(gU, TU, qU);
          if (KU) {
            if (KU.distance < 0) continue;
            if ((tU || !EU || KU.distance < EU.distance) && (EU = KU, EU.faceId = PU / 3, tU)) break
          }
        }
        return EU
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(UU, RU) {
        const gU = new cU(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, UU, RU, !1);
        if (!this.IsGlobal) {
          const UU = this.lY();
          if (!UU) return gU;
          gU._boundingInfo = new PU.d(UU.minimum, UU.maximum)
        }
        return gU
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.aZ().WC()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const RU = this._mesh.ZI.indexOf(this);
        this._mesh.ZI.splice(RU, 1), this.resetDrawCache(void 0, UU)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(UU, RU, gU, tU, pU) {
        let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = Number.MAX_VALUE,
          TU = -Number.MAX_VALUE;
        const qU = (pU || tU).dgU();
        for (let KU = RU; KU < RU + gU; KU++) {
          const UU = qU[KU];
          UU < PU && (PU = UU), UU > TU && (TU = UU)
        }
        return new cU(UU, PU, TU - PU + 1, RU, gU, tU, pU, EU)
      }
    }(tU = cU.prototype).projectToRef ?? (tU.projectToRef = (0, KU.m)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);