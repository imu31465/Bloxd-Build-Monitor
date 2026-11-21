export const id = 254;
export const ids = [254];
export const modules = {
  40285: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {
      constructor(dd, Jd, kd) {
        this.bu = dd, this.bv = Jd, this.distance = kd, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40294: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(37267),
      Nd = kd(37251),
      Wd = kd(37259);
    class Pd {
      constructor(dd, Jd, kd) {
        this.vectors = (0, pd.b)(8, Nd.n.Zero), this.center = Nd.n.Zero(), this.centerWorld = Nd.n.Zero(), this.extendSize = Nd.n.Zero(), this.extendSizeWorld = Nd.n.Zero(), this.directions = (0, pd.b)(3, Nd.n.Zero), this.vectorsWorld = (0, pd.b)(8, Nd.n.Zero), this.minimumWorld = Nd.n.Zero(), this.maximumWorld = Nd.n.Zero(), this.minimum = Nd.n.Zero(), this.maximum = Nd.n.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(dd, Jd, kd)
      }
      reConstruct(dd, Jd, kd) {
        const pd = dd.x,
          Wd = dd.y,
          Pd = dd.z,
          Zd = Jd.x,
          gd = Jd.y,
          Cd = Jd.z,
          Kd = this.vectors;
        this.minimum.kdd(pd, Wd, Pd), this.maximum.kdd(Zd, gd, Cd), Kd[0].kdd(pd, Wd, Pd), Kd[1].kdd(Zd, gd, Cd), Kd[2].kdd(Zd, Wd, Pd), Kd[3].kdd(pd, gd, Pd), Kd[4].kdd(pd, Wd, Cd), Kd[5].kdd(Zd, gd, Pd), Kd[6].kdd(pd, gd, Cd), Kd[7].kdd(Zd, Wd, Cd), Jd.addToRef(dd, this.center).scaleInPlace(.5), Jd.subtractToRef(dd, this.extendSize).scaleInPlace(.5), this._worldMatrix = kd || Nd.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(dd) {
        const Jd = Pd._TmpVector3,
          kd = this.maximum.subtractToRef(this.minimum, Jd[0]),
          pd = kd.length();
        kd.normalizeFromLength(pd);
        const Nd = pd * dd,
          Wd = kd.scaleInPlace(.5 * Nd),
          Zd = this.center.subtractToRef(Wd, Jd[1]),
          gd = this.center.addToRef(Wd, Jd[2]);
        return this.reConstruct(Zd, gd, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(dd) {
        const Jd = this.minimumWorld,
          kd = this.maximumWorld,
          pd = this.directions,
          Wd = this.vectorsWorld,
          Pd = this.vectors;
        if (dd.isIdentity()) {
          Jd.Fs(this.minimum), kd.Fs(this.maximum);
          for (let dd = 0; dd < 8; ++dd) Wd[dd].Fs(Pd[dd]);
          this.extendSizeWorld.Fs(this.extendSize), this.centerWorld.Fs(this.center)
        } else {
          Jd.o5(Number.MAX_VALUE), kd.o5(-Number.MAX_VALUE);
          for (let pd = 0; pd < 8; ++pd) {
            const Zd = Wd[pd];
            Nd.n.TransformCoordinatesToRef(Pd[pd], dd, Zd), Jd.minimizeInPlace(Zd), kd.maximizeInPlace(Zd)
          }
          kd.subtractToRef(Jd, this.extendSizeWorld).scaleInPlace(.5), kd.addToRef(Jd, this.centerWorld).scaleInPlace(.5)
        }
        Nd.n.FromArrayToRef(dd.m, 0, pd[0]), Nd.n.FromArrayToRef(dd.m, 4, pd[1]), Nd.n.FromArrayToRef(dd.m, 8, pd[2]), this._worldMatrix = dd
      }
      isInFrustum(dd) {
        return Pd.IsInFrustum(this.vectorsWorld, dd)
      }
      isCompletelyInFrustum(dd) {
        return Pd.IsCompletelyInFrustum(this.vectorsWorld, dd)
      }
      intersectsPoint(dd) {
        const Jd = this.minimumWorld,
          kd = this.maximumWorld,
          pd = Jd.x,
          Nd = Jd.y,
          Pd = Jd.z,
          Zd = kd.x,
          gd = kd.y,
          Cd = kd.z,
          Kd = dd.x,
          od = dd.y,
          ld = dd.z,
          Qd = -Wd.e;
        return !(Zd - Kd < Qd || Qd > Kd - pd) && (!(gd - od < Qd || Qd > od - Nd) && !(Cd - ld < Qd || Qd > ld - Pd))
      }
      intersectsSphere(dd) {
        return Pd.IntersectsSphere(this.minimumWorld, this.maximumWorld, dd.centerWorld, dd.radiusWorld)
      }
      intersectsMinMax(dd, Jd) {
        const kd = this.minimumWorld,
          pd = this.maximumWorld,
          Nd = kd.x,
          Wd = kd.y,
          Pd = kd.z,
          Zd = pd.x,
          gd = pd.y,
          Cd = pd.z,
          Kd = dd.x,
          od = dd.y,
          ld = dd.z,
          Qd = Jd.x,
          Ld = Jd.y,
          Od = Jd.z;
        return !(Zd < Kd || Nd > Qd) && (!(gd < od || Wd > Ld) && !(Cd < ld || Pd > Od))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(dd, Jd) {
        return dd.intersectsMinMax(Jd.minimumWorld, Jd.maximumWorld)
      }
      static IntersectsSphere(dd, Jd, kd, pd) {
        const Wd = Pd._TmpVector3[0];
        Nd.n.ClampToRef(kd, dd, Jd, Wd);
        return Nd.n.DistanceSquared(kd, Wd) <= pd * pd
      }
      static IsCompletelyInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; ++kd) {
          const pd = Jd[kd];
          for (let Jd = 0; Jd < 8; ++Jd)
            if (pd.dotCoordinate(dd[Jd]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; ++kd) {
          let pd = !0;
          const Nd = Jd[kd];
          for (let Jd = 0; Jd < 8; ++Jd)
            if (Nd.dotCoordinate(dd[Jd]) >= 0) {
              pd = !1;
              break
            } if (pd) return !1
        }
        return !0
      }
    }
    Pd._TmpVector3 = (0, pd.b)(3, Nd.n.Zero)
  },
  40292: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => od
    });
    var pd = kd(37267),
      Nd = kd(37251),
      Wd = kd(40294);
    class Pd {
      constructor(dd, Jd, kd) {
        this.center = Nd.n.Zero(), this.centerWorld = Nd.n.Zero(), this.minimum = Nd.n.Zero(), this.maximum = Nd.n.Zero(), this.reConstruct(dd, Jd, kd)
      }
      reConstruct(dd, Jd, kd) {
        this.minimum.Fs(dd), this.maximum.Fs(Jd);
        const pd = Nd.n.Distance(dd, Jd);
        Jd.addToRef(dd, this.center).scaleInPlace(.5), this.radius = .5 * pd, this._update(kd || Nd.b.IdentityReadOnly)
      }
      scale(dd) {
        const Jd = Pd._TmpVector3,
          kd = this.maximum.subtractToRef(this.minimum, Jd[0]),
          pd = kd.length();
        kd.normalizeFromLength(pd);
        const Nd = pd * dd,
          Wd = kd.scaleInPlace(.5 * Nd),
          Zd = this.center.subtractToRef(Wd, Jd[1]),
          gd = this.center.addToRef(Wd, Jd[2]);
        return this.reConstruct(Zd, gd, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(dd) {
        if (dd.isIdentity()) this.centerWorld.Fs(this.center), this.radiusWorld = this.radius;
        else {
          Nd.n.TransformCoordinatesToRef(this.center, dd, this.centerWorld);
          const Jd = Pd._TmpVector3[0];
          Nd.n.TransformNormalFromFloatsToRef(1, 1, 1, dd, Jd), this.radiusWorld = Math.max(Math.abs(Jd.x), Math.abs(Jd.y), Math.abs(Jd.z)) * this.radius
        }
      }
      isInFrustum(dd) {
        const Jd = this.centerWorld,
          kd = this.radiusWorld;
        for (let pd = 0; pd < 6; pd++)
          if (dd[pd].dotCoordinate(Jd) <= -kd) return !1;
        return !0
      }
      isCenterInFrustum(dd) {
        const Jd = this.centerWorld;
        for (let kd = 0; kd < 6; kd++)
          if (dd[kd].dotCoordinate(Jd) < 0) return !1;
        return !0
      }
      intersectsPoint(dd) {
        const Jd = Nd.n.DistanceSquared(this.centerWorld, dd);
        return !(this.radiusWorld * this.radiusWorld < Jd)
      }
      static Intersects(dd, Jd) {
        const kd = Nd.n.DistanceSquared(dd.centerWorld, Jd.centerWorld),
          pd = dd.radiusWorld + Jd.radiusWorld;
        return !(pd * pd < kd)
      }
      static CreateFromCenterAndRadius(dd, Jd, kd) {
        this._TmpVector3[0].Fs(dd), this._TmpVector3[1].kdd(0, 0, Jd), this._TmpVector3[2].Fs(dd), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].hpd(this._TmpVector3[1]);
        const pd = new Pd(this._TmpVector3[0], this._TmpVector3[2]);
        return pd._worldMatrix = kd || Nd.b.Identity(), pd
      }
    }
    Pd._TmpVector3 = (0, pd.b)(3, Nd.n.Zero);
    const Zd = {
        min: 0,
        max: 0
      },
      gd = {
        min: 0,
        max: 0
      },
      Cd = (dd, Jd, kd) => {
        const pd = Nd.n.Dot(Jd.centerWorld, dd),
          Wd = Math.abs(Nd.n.Dot(Jd.directions[0], dd)) * Jd.extendSize.x + Math.abs(Nd.n.Dot(Jd.directions[1], dd)) * Jd.extendSize.y + Math.abs(Nd.n.Dot(Jd.directions[2], dd)) * Jd.extendSize.z;
        kd.min = pd - Wd, kd.max = pd + Wd
      },
      Kd = (dd, Jd, kd) => (Cd(dd, Jd, Zd), Cd(dd, kd, gd), !(Zd.min > gd.max || gd.min > Zd.max));
    class od {
      constructor(dd, Jd, kd) {
        this._isLocked = !1, this.boundingBox = new Wd.b(dd, Jd, kd), this.zpd = new Pd(dd, Jd, kd)
      }
      reConstruct(dd, Jd, kd) {
        this.boundingBox.reConstruct(dd, Jd, kd), this.zpd.reConstruct(dd, Jd, kd)
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
      set isLocked(dd) {
        this._isLocked = dd
      }
      update(dd) {
        this._isLocked || (this.boundingBox._update(dd), this.zpd._update(dd))
      }
      centerOn(dd, Jd) {
        const kd = od._TmpVector3[0].Fs(dd).hpd(Jd),
          pd = od._TmpVector3[1].Fs(dd).addInPlace(Jd);
        return this.boundingBox.reConstruct(kd, pd, this.boundingBox.getWorldMatrix()), this.zpd.reConstruct(kd, pd, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(dd) {
        const Jd = Nd.n.Minimize(this.minimum, dd),
          kd = Nd.n.Maximize(this.maximum, dd);
        return this.reConstruct(Jd, kd, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(dd) {
        const Jd = Nd.h.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Jd);
        const kd = Nd.h.IL[0];
        return Nd.n.TransformCoordinatesToRef(dd.boundingBox.minimumWorld, Jd, kd), this.encapsulate(kd), Nd.n.TransformCoordinatesToRef(dd.boundingBox.maximumWorld, Jd, kd), this.encapsulate(kd), this
      }
      scale(dd) {
        return this.boundingBox.scale(dd), this.zpd.scale(dd), this
      }
      isInFrustum(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Jd || 3 === Jd) && this.zpd.isCenterInFrustum(dd)) return !0;
        if (!this.zpd.isInFrustum(dd)) return !1;
        return !(1 !== Jd && 3 !== Jd) || this.boundingBox.isInFrustum(dd)
      }
      get diagonalLength() {
        const dd = this.boundingBox;
        return dd.maximumWorld.subtractToRef(dd.minimumWorld, od._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(dd) {
        return this.boundingBox.isCompletelyInFrustum(dd)
      }
      _checkCollision(dd) {
        return dd._canDoCollision(this.zpd.centerWorld, this.zpd.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(dd) {
        return !!this.zpd.centerWorld && (!!this.zpd.intersectsPoint(dd) && !!this.boundingBox.intersectsPoint(dd))
      }
      intersects(dd, Jd) {
        if (!Pd.Intersects(this.zpd, dd.zpd)) return !1;
        if (!Wd.b.Intersects(this.boundingBox, dd.boundingBox)) return !1;
        if (!Jd) return !0;
        const kd = this.boundingBox,
          pd = dd.boundingBox;
        return !!Kd(kd.directions[0], kd, pd) && (!!Kd(kd.directions[1], kd, pd) && (!!Kd(kd.directions[2], kd, pd) && (!!Kd(pd.directions[0], kd, pd) && (!!Kd(pd.directions[1], kd, pd) && (!!Kd(pd.directions[2], kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[0], pd.directions[0]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[0], pd.directions[1]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[0], pd.directions[2]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[1], pd.directions[0]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[1], pd.directions[1]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[1], pd.directions[2]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[2], pd.directions[0]), kd, pd) && (!!Kd(Nd.n.Cross(kd.directions[2], pd.directions[1]), kd, pd) && !!Kd(Nd.n.Cross(kd.directions[2], pd.directions[2]), kd, pd))))))))))))))
      }
    }
    od._TmpVector3 = (0, pd.b)(2, Nd.n.Zero)
  },
  40317: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      i: () => gd,
      l: () => Zd,
      m: () => Pd
    });
    var pd = kd(40129),
      Nd = kd(37251);

    function Wd(dd) {
      -1 === dd.indexOf("vClipPlane") && dd.push("vClipPlane"), -1 === dd.indexOf("vClipPlane2") && dd.push("vClipPlane2"), -1 === dd.indexOf("vClipPlane3") && dd.push("vClipPlane3"), -1 === dd.indexOf("vClipPlane4") && dd.push("vClipPlane4"), -1 === dd.indexOf("vClipPlane5") && dd.push("vClipPlane5"), -1 === dd.indexOf("vClipPlane6") && dd.push("vClipPlane6")
    }

    function Pd(dd, Jd, kd) {
      const pd = !!(dd.clipPlane ?? Jd.clipPlane),
        Nd = !!(dd.clipPlane2 ?? Jd.clipPlane2),
        Wd = !!(dd.clipPlane3 ?? Jd.clipPlane3),
        Pd = !!(dd.clipPlane4 ?? Jd.clipPlane4),
        Zd = !!(dd.clipPlane5 ?? Jd.clipPlane5),
        gd = !!(dd.clipPlane6 ?? Jd.clipPlane6);
      pd && kd.push("#define CLIPPLANE"), Nd && kd.push("#define CLIPPLANE2"), Wd && kd.push("#define CLIPPLANE3"), Pd && kd.push("#define CLIPPLANE4"), Zd && kd.push("#define CLIPPLANE5"), gd && kd.push("#define CLIPPLANE6")
    }

    function Zd(dd, Jd, kd) {
      let pd = !1;
      const Nd = !!(dd.clipPlane ?? Jd.clipPlane),
        Wd = !!(dd.clipPlane2 ?? Jd.clipPlane2),
        Pd = !!(dd.clipPlane3 ?? Jd.clipPlane3),
        Zd = !!(dd.clipPlane4 ?? Jd.clipPlane4),
        gd = !!(dd.clipPlane5 ?? Jd.clipPlane5),
        Cd = !!(dd.clipPlane6 ?? Jd.clipPlane6);
      return kd.CLIPPLANE !== Nd && (kd.CLIPPLANE = Nd, pd = !0), kd.CLIPPLANE2 !== Wd && (kd.CLIPPLANE2 = Wd, pd = !0), kd.CLIPPLANE3 !== Pd && (kd.CLIPPLANE3 = Pd, pd = !0), kd.CLIPPLANE4 !== Zd && (kd.CLIPPLANE4 = Zd, pd = !0), kd.CLIPPLANE5 !== gd && (kd.CLIPPLANE5 = gd, pd = !0), kd.CLIPPLANE6 !== Cd && (kd.CLIPPLANE6 = Cd, pd = !0), pd
    }

    function gd(dd, Jd, kd) {
      let pd = Jd.clipPlane ?? kd.clipPlane;
      Cd(dd, "vClipPlane", pd), pd = Jd.clipPlane2 ?? kd.clipPlane2, Cd(dd, "vClipPlane2", pd), pd = Jd.clipPlane3 ?? kd.clipPlane3, Cd(dd, "vClipPlane3", pd), pd = Jd.clipPlane4 ?? kd.clipPlane4, Cd(dd, "vClipPlane4", pd), pd = Jd.clipPlane5 ?? kd.clipPlane5, Cd(dd, "vClipPlane5", pd), pd = Jd.clipPlane6 ?? kd.clipPlane6, Cd(dd, "vClipPlane6", pd)
    }

    function Cd(dd, Jd, kd) {
      if (kd) {
        const Wd = pd.e.Wm()?.floatingOriginOffset || Nd.n.ZeroReadOnly;
        dd.setFloat4(Jd, kd.normal.x, kd.normal.y, kd.normal.z, kd.d + Nd.n.Dot(kd.normal, Wd))
      }
    }
  },
  40339: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(dd, Jd) {
        this._defines[dd] || (dd < this._currentRank && (this._currentRank = dd), dd > this._maxRank && (this._maxRank = dd), this._defines[dd] = new Array), this._defines[dd].push(Jd)
      }
      addCPUSkinningFallback(dd, Jd) {
        this._mesh = Jd, dd < this._currentRank && (this._currentRank = dd), dd > this._maxRank && (this._maxRank = dd)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(dd, Jd) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, dd = dd.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Jd._bonesComputationForcedToCPU = !0;
          const kd = this._mesh.Wm();
          for (let dd = 0; dd < kd.meshes.length; dd++) {
            const pd = kd.meshes[dd];
            if (pd.material) {
              if (pd.computeBonesUsingShaders && 0 !== pd.numBoneInfluencers)
                if (pd.material.getEffect() === Jd) pd.computeBonesUsingShaders = !1;
                else if (pd.rG)
                for (const dd of pd.rG) {
                  if (dd.effect === Jd) {
                    pd.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && pd.computeBonesUsingShaders && pd.numBoneInfluencers > 0 && (pd.computeBonesUsingShaders = !1)
          }
        } else {
          const Jd = this._defines[this._currentRank];
          if (Jd)
            for (let kd = 0; kd < Jd.length; kd++) dd = dd.replace("#define " + Jd[kd], "");
          this._currentRank++
        }
        return dd
      }
    }
  },
  40278: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Id
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(40066),
      Pd = kd(37280),
      Zd = kd(37277),
      gd = kd(40282),
      Cd = kd(40101),
      Kd = kd(38812),
      od = kd(37969),
      ld = kd(40304),
      Qd = kd(39983);
    let Ld = (() => {
      var dd;
      let Jd, kd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Ld, Od, ed = [];
      return dd = class {
        constructor() {
          this._func = (0, pd.i)(this, ed), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(dd) {
          this._func = dd
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(dd) {
          this._backFunc = dd
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(dd) {
          this._funcRef = dd
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(dd) {
          this._funcMask = dd
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(dd) {
          this._opStencilFail = dd
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(dd) {
          this._opDepthFail = dd
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(dd) {
          this._opStencilDepthPass = dd
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(dd) {
          this._backOpStencilFail = dd
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(dd) {
          this._backOpDepthFail = dd
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(dd) {
          this._backOpStencilDepthPass = dd
        }
        get mask() {
          return this._mask
        }
        set mask(dd) {
          this._mask = dd
        }
        get enabled() {
          return this._enabled
        }
        set enabled(dd) {
          this._enabled = dd
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(dd) {
          Qd.c.Clone((() => dd), this)
        }
        serialize() {
          return Qd.c.Serialize(this)
        }
        parse(dd, Jd, kd) {
          Qd.c.Parse((() => this), dd, Jd, kd)
        }
      }, (() => {
        const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], Pd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], Kd = [(0, Nd.H)()], od = [(0, Nd.H)()], ld = [(0, Nd.H)()], Ld = [(0, Nd.H)()], Od = [(0, Nd.H)()], (0, pd.h)(dd, null, Jd, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: dd => "func" in dd,
            get: dd => dd.func
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, kd, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: dd => "backFunc" in dd,
            get: dd => dd.backFunc
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Wd, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: dd => "funcRef" in dd,
            get: dd => dd.funcRef
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Pd, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "funcMask" in dd,
            get: dd => dd.funcMask
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Zd, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "opStencilFail" in dd,
            get: dd => dd.opStencilFail
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, gd, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "opDepthFail" in dd,
            get: dd => dd.opDepthFail
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Cd, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: dd => "opStencilDepthPass" in dd,
            get: dd => dd.opStencilDepthPass
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Kd, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "backOpStencilFail" in dd,
            get: dd => dd.backOpStencilFail
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, od, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "backOpDepthFail" in dd,
            get: dd => dd.backOpDepthFail
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, ld, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: dd => "backOpStencilDepthPass" in dd,
            get: dd => dd.backOpStencilDepthPass
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Ld, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: dd => "mask" in dd,
            get: dd => dd.mask
          },
          metadata: Qd
        }, null, ed), (0, pd.h)(dd, null, Od, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "enabled" in dd,
            get: dd => dd.enabled
          },
          metadata: Qd
        }, null, ed), Qd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qd
        })
      })(), dd
    })();
    var Od = kd(40308),
      ed = kd(39885),
      Rd = kd(39860);
    let Id = (() => {
      var dd;
      let Jd, kd, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd, Sd, jd, Xd, fd, nd, Ud, yd, Dd, Td, Ed, cd, hd, rd, ud = [],
        td = [],
        Vd = [],
        zd = [],
        Hd = [],
        wd = [],
        Ad = [],
        dJ = [],
        JJ = [],
        kJ = [],
        pJ = [],
        NJ = [],
        WJ = [],
        PJ = [],
        ZJ = [],
        gJ = [],
        CJ = [],
        KJ = [],
        oJ = [],
        lJ = [],
        QJ = [],
        LJ = [],
        OJ = [],
        eJ = [],
        RJ = [],
        IJ = [],
        GJ = [],
        vJ = [],
        xJ = [],
        qJ = [],
        BJ = [],
        sJ = [],
        iJ = [],
        aJ = [],
        MJ = [],
        FJ = [],
        YJ = [],
        mJ = [],
        bJ = [],
        SJ = [],
        jJ = [],
        XJ = [],
        fJ = [],
        nJ = [],
        UJ = [],
        yJ = [],
        DJ = [],
        TJ = [],
        EJ = [],
        cJ = [],
        hJ = [];
      return dd = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Jd) {
          this._useVertexPulling !== Jd && (this._useVertexPulling = Jd, this.dkd(dd.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(dd) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(Jd) {
          if (this._alpha === Jd) return;
          const kd = this._alpha;
          this._alpha = Jd, 1 !== kd && 1 !== Jd || this.dkd(dd.MiscDirtyFlag + dd.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Jd) {
          this._backFaceCulling !== Jd && (this._backFaceCulling = Jd, this.dkd(dd.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Jd) {
          const kd = Math.max(0, Math.min(0 | Jd, 4));
          this._textureRepetitionMode !== kd && (this._textureRepetitionMode = kd, this.dkd(dd.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Jd) {
          this._cullBackFaces !== Jd && (this._cullBackFaces = Jd, this.dkd(dd.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(dd) {
          this._blockDirtyMechanism !== dd && (this._blockDirtyMechanism = dd, dd || this.markDirty())
        }
        atomicMaterialsUpdate(dd) {
          this.blockDirtyMechanism = !0;
          try {
            dd(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(dd) {
          this._onDisposeObserver && this.Zm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Zm.add(dd)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Pd.e), this._onBindObservable
        }
        set onBind(dd) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(dd)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Pd.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Pd.e), this._onEffectCreatedObservable
        }
        set alphaMode(dd) {
          this._alphaMode[0] = dd
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[kd] !== Jd && (this._alphaMode[kd] = Jd, this.dkd(dd.TextureDirtyFlag))
        }
        set needDepthPrePass(dd) {
          this._needDepthPrePass !== dd && (this._needDepthPrePass = dd, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(Jd) {
          this._fogEnabled !== Jd && (this._fogEnabled = Jd, this.dkd(dd.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case dd.WireFrameFillMode:
            case dd.LineListDrawMode:
            case dd.LineLoopDrawMode:
            case dd.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(Jd) {
          this.fillMode = Jd ? dd.WireFrameFillMode : dd.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case dd.PointFillMode:
            case dd.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Jd) {
          this.fillMode = Jd ? dd.PointFillMode : dd.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Jd) {
          this._fillMode !== Jd && (this._fillMode = Jd, this.dkd(dd.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(dd) {
          const Jd = this.Wm().eL().getCaps().fragmentDepthSupported;
          dd && !Jd && Kd.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = dd && Jd, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(dd) {
          this._isVertexOutputInvariant !== dd && (this._isVertexOutputInvariant = dd, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(dd) {
          this._drawWrapper = dd
        }
        constructor(Jd, kd, Nd) {
          let gd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, pd.i)(this, ud), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, pd.i)(this, td, void 0), this.uniqueId = ((0, pd.i)(this, Vd), (0, pd.i)(this, zd, void 0)), this._loadedUniqueId = (0, pd.i)(this, Hd), this.name = (0, pd.i)(this, wd, void 0), this.metadata = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, null)), this._internalMetadata = (0, pd.i)(this, JJ), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, pd.i)(this, kJ, !1), this.checkReadyOnlyOnce = ((0, pd.i)(this, pJ), (0, pd.i)(this, NJ, !1)), this.state = ((0, pd.i)(this, WJ), (0, pd.i)(this, PJ, "")), this._alpha = ((0, pd.i)(this, ZJ), (0, pd.i)(this, gJ, 1)), this.inspectableCustomProperties = (0, pd.i)(this, CJ), this._backFaceCulling = (0, pd.i)(this, KJ, !0), this._textureRepetitionMode = ((0, pd.i)(this, oJ), (0, pd.i)(this, lJ, 0)), this.textureRepetitionHexTilingParams = ((0, pd.i)(this, QJ), (0, pd.i)(this, LJ, [1, .6, 7, .5])), this._cullBackFaces = ((0, pd.i)(this, OJ), (0, pd.i)(this, eJ, !0)), this._blockDirtyMechanism = ((0, pd.i)(this, RJ), !1), this.sideOrientation = (0, pd.i)(this, IJ, null), this.onCompiled = ((0, pd.i)(this, GJ), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Zm = new Pd.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, pd.i)(this, vJ, [2]), this._needDepthPrePass = ((0, pd.i)(this, xJ), (0, pd.i)(this, qJ, !1)), this.disableDepthWrite = ((0, pd.i)(this, BJ), (0, pd.i)(this, sJ, !1)), this.disableColorWrite = ((0, pd.i)(this, iJ), (0, pd.i)(this, aJ, !1)), this.forceDepthWrite = ((0, pd.i)(this, MJ), (0, pd.i)(this, FJ, !1)), this.depthFunction = ((0, pd.i)(this, YJ), (0, pd.i)(this, mJ, 0)), this.separateCullingPass = ((0, pd.i)(this, bJ), (0, pd.i)(this, SJ, !1)), this._fogEnabled = ((0, pd.i)(this, jJ), (0, pd.i)(this, XJ, !0)), this.pointSize = ((0, pd.i)(this, fJ), (0, pd.i)(this, nJ, 1)), this.zOffset = ((0, pd.i)(this, UJ), (0, pd.i)(this, yJ, 0)), this.zOffsetUnits = ((0, pd.i)(this, DJ), (0, pd.i)(this, TJ, 0)), this.clipPlane = (0, pd.i)(this, EJ), this.stencil = new Ld, this._isVertexOutputInvariant = (0, pd.i)(this, cJ, dd.ForceVertexOutputInvariant), this._materialContext = (0, pd.i)(this, hJ), this._useUBO = !1, this._fillMode = dd.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Jd;
          const Kd = kd || Zd.d.LastCreatedScene;
          Kd && (this._scene = Kd, this._dirtyCallbacks = {}, this._forceGLSL = gd, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Jd || Wd.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.eL().createMaterialContext(), this._drawWrapper = new ld.d(this._scene.eL(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Cd.e(this._scene.eL(), void 0, void 0, Jd), this._useUBO = this.Wm().eL().supportsUniformBuffers, this._createUniformBuffer(), Nd || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), dd.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const dd = this.Wm().eL();
          this._uniformBuffer?.dispose(), dd.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Cd.e(dd, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Cd.e(this._scene.eL(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(dd) {
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
        isReady(dd, Jd) {
          return !0
        }
        isReadyForSubMesh(dd, Jd, kd) {
          const pd = Jd.materialDefines;
          return !!pd && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = pd, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Wm() {
          return this._scene
        }
        _getEffectiveOrientation(dd) {
          return null !== this.sideOrientation ? this.sideOrientation : dd.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(dd) {
          this._transparencyMode = dd
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === dd.MATERIAL_ALPHABLEND || this._transparencyMode === dd.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === dd.MATERIAL_ALPHATEST || this._transparencyMode === dd.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === dd.MATERIAL_OPAQUE || this._transparencyMode === dd.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(dd) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : dd.visibility < 1 || !this._disableAlphaBlending && (dd.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(dd) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(dd) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const kd = this.Wm().meshes;
          for (const dd of kd)
            if (dd.rG)
              for (const kd of dd.rG)
                if (kd.qL() === this)
                  for (const dd of kd._drawWrappers) dd && this._materialContext === dd.materialContext && (dd._wasPreviouslyReady = !1, dd._wasPreviouslyUsingInstances = null, dd._forceRebindOnNextCall = Jd);
          Jd && this.dkd(dd.AllDirtyFlag)
        }
        _preBind(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const pd = this._scene.eL(),
            Nd = (null == kd ? this.sideOrientation : kd) === dd.ClockWiseSideOrientation,
            Wd = Jd || this._getDrawWrapper();
          return (0, ed.c)(Wd) && Wd.materialContext && (Wd.materialContext.useVertexPulling = this.useVertexPulling), pd.enableEffect(Wd), pd.setState(this.backFaceCulling, this.zOffset, !1, Nd, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Nd
        }
        bind(dd, Jd) {}
        buildUniformLayout() {
          const dd = this._uniformBuffer;
          this._eventInfo.ubo = dd, this._callbackPluginEventGeneric(8, this._eventInfo), dd.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(dd, Jd, kd) {
          const pd = kd._drawWrapper;
          this._eventInfo.subMesh = kd, this._callbackPluginEventBindForSubMesh(this._eventInfo), pd._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(dd) {}
        bindView(dd) {
          this._useUBO ? this._needToBindSceneUbo = !0 : dd.setMatrix("view", this.Wm().getViewMatrix())
        }
        bindViewProjection(dd) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (dd.setMatrix("viewProjection", this.Wm().getTransformMatrix()), dd.setMatrix("projection", this.Wm().getProjectionMatrix()), dd.setMatrix("inverseProjection", this.Wm().getInverseProjectionMatrix()))
        }
        bindEyePosition(dd, Jd) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(dd, Jd)
        }
        _afterBind(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Jd && (this._needToBindSceneUbo = !1, (0, Od.z)(Jd, this.Wm().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = dd ? dd.visibility : 1, this._onBindObservable && dd && this._onBindObservable.notifyObservers(dd), this.disableDepthWrite) {
            const dd = this._scene.eL();
            this._cachedDepthWriteState = dd.getDepthWrite(), dd.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const dd = this._scene.eL();
            this._cachedColorWriteState = dd.getColorWrite(), dd.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const dd = this._scene.eL();
            this._cachedDepthFunctionState = dd.getDepthFunction() || 0, dd.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.eL().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.eL().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.eL().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(dd) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = dd, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(dd) {
          return null
        }
        _clonePlugins(Jd, kd) {
          const pd = {};
          if (this._serializePlugins(pd), dd._ParsePlugins(pd, Jd, this._scene, kd), this.pluginManager)
            for (const dd of this.pluginManager._plugins) {
              const kd = Jd.pluginManager.getPlugin(dd.name);
              kd && dd.copyTo(kd)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const dd = [];
            for (const Jd in this.meshMap) {
              const kd = this.meshMap[Jd];
              kd && dd.push(kd)
            }
            return dd
          }
          return this._scene.meshes.filter((dd => dd.material === this))
        }
        forceCompilation(dd, Jd, kd, pd) {
          const Nd = {
              clipPlane: !1,
              useInstances: !1,
              ...kd
            },
            Wd = this.Wm(),
            Pd = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Zd = () => {
            if (!this._scene || !this._scene.eL()) return;
            const kd = Wd.clipPlane;
            if (Nd.clipPlane && (Wd.clipPlane = new od.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let kd = !0,
                Wd = null;
              if (dd.rG) {
                const Jd = new gd.c(0, 0, 0, 0, 0, dd, void 0, !1, !1);
                Jd.materialDefines && (Jd.materialDefines._renderId = -1), this.isReadyForSubMesh(dd, Jd, Nd.useInstances) || (Jd.effect && Jd.effect.getCompilationError() && Jd.effect.allFallbacksProcessed() ? Wd = Jd.effect.getCompilationError() : (kd = !1, setTimeout(Zd, 16)))
              }
              kd && (this.allowShaderHotSwapping = Pd, Wd && pd && pd(Wd), Jd && Jd(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Pd, Jd && Jd(this)) : setTimeout(Zd, 16);
            Nd.clipPlane && (Wd.clipPlane = kd)
          };
          Zd()
        }
        async forceCompilationAsync(dd, Jd) {
          return await new Promise(((kd, pd) => {
            this.forceCompilation(dd, (() => {
              kd()
            }), Jd, (dd => {
              pd(dd)
            }))
          }))
        }
        dkd(Jd) {
          this.Wm().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (dd._DirtyCallbackArray.length = 0, Jd & dd.ImageProcessingDirtyFlag && dd._DirtyCallbackArray.push(dd._ImageProcessingDirtyCallBack), Jd & dd.TextureDirtyFlag && dd._DirtyCallbackArray.push(dd._TextureDirtyCallBack), Jd & dd.LightDirtyFlag && dd._DirtyCallbackArray.push(dd._LightsDirtyCallBack), Jd & dd.FresnelDirtyFlag && dd._DirtyCallbackArray.push(dd._FresnelDirtyCallBack), Jd & dd.AttributesDirtyFlag && dd._DirtyCallbackArray.push(dd._AttributeDirtyCallBack), Jd & dd.MiscDirtyFlag && dd._DirtyCallbackArray.push(dd._MiscDirtyCallBack), Jd & dd.PrePassDirtyFlag && dd._DirtyCallbackArray.push(dd._PrePassDirtyCallBack), dd._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(dd._RunDirtyCallBacks), this.Wm().resetCachedMaterial())
        }
        resetDrawCache() {
          const dd = this.Wm().meshes;
          for (const Jd of dd)
            if (Jd.rG)
              for (const dd of Jd.rG) dd.qL() === this && dd.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(dd) {
          const Jd = this.Wm();
          if (Jd.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const kd = Jd.meshes;
          for (const pd of kd)
            if (pd.rG)
              for (const kd of pd.rG) {
                if ((kd.qL() || (Jd._hasDefaultMaterial ? Jd.defaultMaterial : null)) === this)
                  for (const Jd of kd._drawWrappers) Jd && Jd.defines && Jd.defines.markAllAsDirty && this._materialContext === Jd.materialContext && dd(Jd.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Wm().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const dd = this.Wm().enablePrePassRenderer();
          dd && dd.dkd()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(dd._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(dd._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(dd._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(dd._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(dd._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(dd._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(dd._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(dd._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(dd._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(dd._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const dd = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Zm.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(dd)
            }))
          }
        }
        setPrePassRenderer(dd) {
          return !1
        }
        dispose(dd, Jd, kd) {
          const pd = this.Wm();
          if (pd.stopAnimation(this), pd.freeProcessedMaterials(), pd.removeMaterial(this), this._eventInfo.forceDisposeTextures = Jd, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const dd = this._parentContainer.materials.indexOf(this);
            dd > -1 && this._parentContainer.materials.splice(dd, 1), this._parentContainer = null
          }
          if (!0 !== kd)
            if (this.meshMap)
              for (const Nd in this.meshMap) {
                const dd = this.meshMap[Nd];
                this._disposeMeshResources(dd)
              } else {
                const dd = pd.meshes;
                for (const Jd of dd) this._disposeMeshResources(Jd)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Zm.notifyObservers(this), this.Zm.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(dd) {
          if (!dd) return;
          const Jd = dd.geometry,
            kd = dd._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (dd.rG && kd)
              for (const pd of dd.rG) {
                const dd = pd._drawWrappers;
                for (let Nd = 0; Nd < dd.length; Nd++) {
                  const Wd = dd[Nd]?.effect;
                  if (!Wd) continue;
                  kd[Nd] === this && (Jd?._releaseVertexArrayObject(Wd), pd._removeDrawWrapper(Nd, !0, !0))
                }
              }
          } else Jd?._releaseVertexArrayObject(this._drawWrapper.effect);
          dd.material !== this || dd.RNd || (dd.material = null)
        }
        serialize() {
          const dd = Qd.c.Serialize(this);
          return dd.stencil = this.stencil.serialize(), dd.uniqueId = this.uniqueId, this._serializePlugins(dd), dd
        }
        _serializePlugins(dd) {
          if (dd.plugins = {}, this.pluginManager)
            for (const Jd of this.pluginManager._plugins) Jd.doNotSerialize || (dd.plugins[Jd.getClassName()] = Jd.serialize())
        }
        static ParseAlphaMode(dd, Jd) {
          void 0 !== dd._alphaMode ? Jd._alphaMode = Array.isArray(dd._alphaMode) ? [...dd._alphaMode] : [dd._alphaMode] : void 0 !== dd.alphaMode ? Jd._alphaMode = Array.isArray(dd.alphaMode) ? [...dd.alphaMode] : [dd.alphaMode] : Jd._alphaMode = [2]
        }
        static Parse(Jd, kd, pd) {
          if (Jd.customType) {
            if ("BABYLON.PBRMaterial" === Jd.customType && Jd.overloadedAlbedo && (Jd.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Kd.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Jd.customType = "BABYLON.StandardMaterial";
          const Nd = Wd.h.Instantiate(Jd.customType).Parse(Jd, kd, pd);
          return Nd._loadedUniqueId = Jd.uniqueId, dd.ParseAlphaMode(Jd, Nd), Nd
        }
        static _ParsePlugins(dd, Jd, kd, pd) {
          if (dd.plugins)
            for (const Nd in dd.plugins) {
              const Pd = dd.plugins[Nd];
              let Zd = Jd.pluginManager?.getPlugin(Pd.name);
              if (!Zd) {
                const dd = Wd.h.Instantiate("BABYLON." + Nd);
                dd && (Zd = new dd(Jd))
              }
              Zd?.parse(Pd, kd, pd)
            }
        }
      }, (() => {
        const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Rd = [(0, Nd.H)()], Id = [(0, Nd.H)()], Gd = [(0, Nd.H)()], vd = [(0, Nd.H)()], xd = [(0, Nd.H)()], qd = [(0, Nd.H)("alpha")], Bd = [(0, Nd.H)("backFaceCulling")], sd = [(0, Nd.H)("textureRepetitionMode")], ad = [(0, Nd.H)("textureRepetitionHexTilingParams")], Md = [(0, Nd.H)("cullBackFaces")], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], md = [(0, Nd.H)()], bd = [(0, Nd.H)()], Sd = [(0, Nd.H)()], jd = [(0, Nd.H)()], Xd = [(0, Nd.H)()], fd = [(0, Nd.H)()], nd = [(0, Nd.H)("fogEnabled")], Ud = [(0, Nd.H)()], yd = [(0, Nd.H)()], Dd = [(0, Nd.H)()], Td = [(0, Nd.H)()], Ed = [(0, Nd.H)()], cd = [(0, Nd.H)()], hd = [(0, Nd.H)()], rd = [(0, Nd.H)()], (0, pd.h)(dd, null, Td, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: dd => "pointsCloud" in dd,
            get: dd => dd.pointsCloud
          },
          metadata: Wd
        }, null, ud), (0, pd.h)(dd, null, Ed, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "fillMode" in dd,
            get: dd => dd.fillMode
          },
          metadata: Wd
        }, null, ud), (0, pd.h)(dd, null, cd, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLogarithmicDepth" in dd,
            get: dd => dd.useLogarithmicDepth
          },
          metadata: Wd
        }, null, ud), (0, pd.h)(dd, null, rd, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "transparencyMode" in dd,
            get: dd => dd.transparencyMode
          },
          metadata: Wd
        }, null, ud), (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: dd => "id" in dd,
            get: dd => dd.id,
            set: (dd, Jd) => {
              dd.id = Jd
            }
          },
          metadata: Wd
        }, td, Vd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: dd => "uniqueId" in dd,
            get: dd => dd.uniqueId,
            set: (dd, Jd) => {
              dd.uniqueId = Jd
            }
          },
          metadata: Wd
        }, zd, Hd), (0, pd.h)(null, null, Rd, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: dd => "name" in dd,
            get: dd => dd.name,
            set: (dd, Jd) => {
              dd.name = Jd
            }
          },
          metadata: Wd
        }, wd, Ad), (0, pd.h)(null, null, Id, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: dd => "metadata" in dd,
            get: dd => dd.metadata,
            set: (dd, Jd) => {
              dd.metadata = Jd
            }
          },
          metadata: Wd
        }, dJ, JJ), (0, pd.h)(null, null, Gd, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: dd => "checkReadyOnEveryCall" in dd,
            get: dd => dd.checkReadyOnEveryCall,
            set: (dd, Jd) => {
              dd.checkReadyOnEveryCall = Jd
            }
          },
          metadata: Wd
        }, kJ, pJ), (0, pd.h)(null, null, vd, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: dd => "checkReadyOnlyOnce" in dd,
            get: dd => dd.checkReadyOnlyOnce,
            set: (dd, Jd) => {
              dd.checkReadyOnlyOnce = Jd
            }
          },
          metadata: Wd
        }, NJ, WJ), (0, pd.h)(null, null, xd, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: dd => "state" in dd,
            get: dd => dd.state,
            set: (dd, Jd) => {
              dd.state = Jd
            }
          },
          metadata: Wd
        }, PJ, ZJ), (0, pd.h)(null, null, qd, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "_alpha" in dd,
            get: dd => dd._alpha,
            set: (dd, Jd) => {
              dd._alpha = Jd
            }
          },
          metadata: Wd
        }, gJ, CJ), (0, pd.h)(null, null, Bd, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: dd => "_backFaceCulling" in dd,
            get: dd => dd._backFaceCulling,
            set: (dd, Jd) => {
              dd._backFaceCulling = Jd
            }
          },
          metadata: Wd
        }, KJ, oJ), (0, pd.h)(null, null, sd, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_textureRepetitionMode" in dd,
            get: dd => dd._textureRepetitionMode,
            set: (dd, Jd) => {
              dd._textureRepetitionMode = Jd
            }
          },
          metadata: Wd
        }, lJ, QJ), (0, pd.h)(null, null, ad, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: dd => "textureRepetitionHexTilingParams" in dd,
            get: dd => dd.textureRepetitionHexTilingParams,
            set: (dd, Jd) => {
              dd.textureRepetitionHexTilingParams = Jd
            }
          },
          metadata: Wd
        }, LJ, OJ), (0, pd.h)(null, null, Md, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: dd => "_cullBackFaces" in dd,
            get: dd => dd._cullBackFaces,
            set: (dd, Jd) => {
              dd._cullBackFaces = Jd
            }
          },
          metadata: Wd
        }, eJ, RJ), (0, pd.h)(null, null, Fd, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: dd => "sideOrientation" in dd,
            get: dd => dd.sideOrientation,
            set: (dd, Jd) => {
              dd.sideOrientation = Jd
            }
          },
          metadata: Wd
        }, IJ, GJ), (0, pd.h)(null, null, Yd, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_alphaMode" in dd,
            get: dd => dd._alphaMode,
            set: (dd, Jd) => {
              dd._alphaMode = Jd
            }
          },
          metadata: Wd
        }, vJ, xJ), (0, pd.h)(null, null, md, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: dd => "_needDepthPrePass" in dd,
            get: dd => dd._needDepthPrePass,
            set: (dd, Jd) => {
              dd._needDepthPrePass = Jd
            }
          },
          metadata: Wd
        }, qJ, BJ), (0, pd.h)(null, null, bd, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableDepthWrite" in dd,
            get: dd => dd.disableDepthWrite,
            set: (dd, Jd) => {
              dd.disableDepthWrite = Jd
            }
          },
          metadata: Wd
        }, sJ, iJ), (0, pd.h)(null, null, Sd, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableColorWrite" in dd,
            get: dd => dd.disableColorWrite,
            set: (dd, Jd) => {
              dd.disableColorWrite = Jd
            }
          },
          metadata: Wd
        }, aJ, MJ), (0, pd.h)(null, null, jd, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceDepthWrite" in dd,
            get: dd => dd.forceDepthWrite,
            set: (dd, Jd) => {
              dd.forceDepthWrite = Jd
            }
          },
          metadata: Wd
        }, FJ, YJ), (0, pd.h)(null, null, Xd, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: dd => "depthFunction" in dd,
            get: dd => dd.depthFunction,
            set: (dd, Jd) => {
              dd.depthFunction = Jd
            }
          },
          metadata: Wd
        }, mJ, bJ), (0, pd.h)(null, null, fd, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: dd => "separateCullingPass" in dd,
            get: dd => dd.separateCullingPass,
            set: (dd, Jd) => {
              dd.separateCullingPass = Jd
            }
          },
          metadata: Wd
        }, SJ, jJ), (0, pd.h)(null, null, nd, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "_fogEnabled" in dd,
            get: dd => dd._fogEnabled,
            set: (dd, Jd) => {
              dd._fogEnabled = Jd
            }
          },
          metadata: Wd
        }, XJ, fJ), (0, pd.h)(null, null, Ud, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: dd => "pointSize" in dd,
            get: dd => dd.pointSize,
            set: (dd, Jd) => {
              dd.pointSize = Jd
            }
          },
          metadata: Wd
        }, nJ, UJ), (0, pd.h)(null, null, yd, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: dd => "zOffset" in dd,
            get: dd => dd.zOffset,
            set: (dd, Jd) => {
              dd.zOffset = Jd
            }
          },
          metadata: Wd
        }, yJ, DJ), (0, pd.h)(null, null, Dd, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: dd => "zOffsetUnits" in dd,
            get: dd => dd.zOffsetUnits,
            set: (dd, Jd) => {
              dd.zOffsetUnits = Jd
            }
          },
          metadata: Wd
        }, TJ, EJ), (0, pd.h)(null, null, hd, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: dd => "_isVertexOutputInvariant" in dd,
            get: dd => dd._isVertexOutputInvariant,
            set: (dd, Jd) => {
              dd._isVertexOutputInvariant = Jd
            }
          },
          metadata: Wd
        }, cJ, hJ), Wd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wd
        })
      })(), dd.TriangleFillMode = 0, dd.WireFrameFillMode = 1, dd.PointFillMode = 2, dd.PointListDrawMode = 3, dd.LineListDrawMode = 4, dd.LineLoopDrawMode = 5, dd.LineStripDrawMode = 6, dd.TriangleStripDrawMode = 7, dd.TriangleFanDrawMode = 8, dd.ClockWiseSideOrientation = 0, dd.CounterClockWiseSideOrientation = 1, dd.ImageProcessingDirtyFlag = 64, dd.TextureDirtyFlag = 1, dd.LightDirtyFlag = 2, dd.FresnelDirtyFlag = 4, dd.AttributesDirtyFlag = 8, dd.MiscDirtyFlag = 16, dd.PrePassDirtyFlag = 32, dd.AllDirtyFlag = 127, dd.MATERIAL_OPAQUE = 0, dd.MATERIAL_ALPHATEST = 1, dd.MATERIAL_ALPHABLEND = 2, dd.MATERIAL_ALPHATESTANDBLEND = 3, dd.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, dd.MATERIAL_NORMALBLENDMETHOD_RNM = 1, dd.LIGHTFALLOFF_PHYSICAL = 0, dd.LIGHTFALLOFF_GLTF = 1, dd.LIGHTFALLOFF_STANDARD = 2, dd.OnEventObservable = new Pd.e, dd.ForceVertexOutputInvariant = !1, dd._AllDirtyCallBack = dd => dd.markAllAsDirty(), dd._ImageProcessingDirtyCallBack = dd => dd.markAsImageProcessingDirty(), dd._TextureDirtyCallBack = dd => dd.markAsTexturesDirty(), dd._FresnelDirtyCallBack = dd => dd.markAsFresnelDirty(), dd._MiscDirtyCallBack = dd => dd.markAsMiscDirty(), dd._PrePassDirtyCallBack = dd => dd.markAsPrePassDirty(), dd._LightsDirtyCallBack = dd => dd.markAsLightDirty(), dd._AttributeDirtyCallBack = dd => dd.markAsAttributesDirty(), dd._FresnelAndMiscDirtyCallBack = Jd => {
        dd._FresnelDirtyCallBack(Jd), dd._MiscDirtyCallBack(Jd)
      }, dd._TextureAndMiscDirtyCallBack = Jd => {
        dd._TextureDirtyCallBack(Jd), dd._MiscDirtyCallBack(Jd)
      }, dd._DirtyCallbackArray = [], dd._RunDirtyCallBacks = Jd => {
        for (const kd of dd._DirtyCallbackArray) kd(Jd)
      }, dd
    })();
    Object.getOwnPropertyDescriptor(Id.prototype, "pluginManager") || Object.defineProperty(Id.prototype, "pluginManager", (0, Rd.g)("Material", "pluginManager"))
  },
  40325: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    var pd = kd(39874);
    class Nd {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(dd) {
        this._DiffuseTextureEnabled !== dd && (this._DiffuseTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(dd) {
        this._BaseWeightTextureEnabled !== dd && (this._BaseWeightTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(dd) {
        this._BaseDiffuseRoughnessTextureEnabled !== dd && (this._BaseDiffuseRoughnessTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(dd) {
        this._DetailTextureEnabled !== dd && (this._DetailTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(dd) {
        this._DecalMapEnabled !== dd && (this._DecalMapEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(dd) {
        this._AmbientTextureEnabled !== dd && (this._AmbientTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(dd) {
        this._OpacityTextureEnabled !== dd && (this._OpacityTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(dd) {
        this._ReflectionTextureEnabled !== dd && (this._ReflectionTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(dd) {
        this._EmissiveTextureEnabled !== dd && (this._EmissiveTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(dd) {
        this._SpecularTextureEnabled !== dd && (this._SpecularTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(dd) {
        this._BumpTextureEnabled !== dd && (this._BumpTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(dd) {
        this._LightmapTextureEnabled !== dd && (this._LightmapTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(dd) {
        this._RefractionTextureEnabled !== dd && (this._RefractionTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(dd) {
        this._ColorGradingTextureEnabled !== dd && (this._ColorGradingTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(dd) {
        this._FresnelEnabled !== dd && (this._FresnelEnabled = dd, pd.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(dd) {
        this._ClearCoatTextureEnabled !== dd && (this._ClearCoatTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(dd) {
        this._ClearCoatBumpTextureEnabled !== dd && (this._ClearCoatBumpTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(dd) {
        this._ClearCoatTintTextureEnabled !== dd && (this._ClearCoatTintTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(dd) {
        this._SheenTextureEnabled !== dd && (this._SheenTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(dd) {
        this._AnisotropicTextureEnabled !== dd && (this._AnisotropicTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(dd) {
        this._ThicknessTextureEnabled !== dd && (this._ThicknessTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(dd) {
        this._RefractionIntensityTextureEnabled !== dd && (this._RefractionIntensityTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(dd) {
        this._TranslucencyIntensityTextureEnabled !== dd && (this._TranslucencyIntensityTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(dd) {
        this._TranslucencyColorTextureEnabled !== dd && (this._TranslucencyColorTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(dd) {
        this._IridescenceTextureEnabled !== dd && (this._IridescenceTextureEnabled = dd, pd.b.MarkAllMaterialsAsDirty(1))
      }
    }
    Nd._DiffuseTextureEnabled = !0, Nd._BaseWeightTextureEnabled = !0, Nd._BaseDiffuseRoughnessTextureEnabled = !0, Nd._DetailTextureEnabled = !0, Nd._DecalMapEnabled = !0, Nd._AmbientTextureEnabled = !0, Nd._OpacityTextureEnabled = !0, Nd._ReflectionTextureEnabled = !0, Nd._EmissiveTextureEnabled = !0, Nd._SpecularTextureEnabled = !0, Nd._BumpTextureEnabled = !0, Nd._LightmapTextureEnabled = !0, Nd._RefractionTextureEnabled = !0, Nd._ColorGradingTextureEnabled = !0, Nd._FresnelEnabled = !0, Nd._ClearCoatTextureEnabled = !0, Nd._ClearCoatBumpTextureEnabled = !0, Nd._ClearCoatTintTextureEnabled = !0, Nd._SheenTextureEnabled = !0, Nd._AnisotropicTextureEnabled = !0, Nd._ThicknessTextureEnabled = !0, Nd._RefractionIntensityTextureEnabled = !0, Nd._TranslucencyIntensityTextureEnabled = !0, Nd._TranslucencyColorTextureEnabled = !0, Nd._IridescenceTextureEnabled = !0
  },
  40308: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => vd,
      D: () => md,
      H: () => xd,
      I: () => Fd,
      K: () => Yd,
      O: () => Qd,
      P: () => ld,
      R: () => Ed,
      V: () => nd,
      Z: () => Xd,
      ab: () => jd,
      db: () => Gd,
      e: () => Sd,
      eb: () => bd,
      g: () => qd,
      gb: () => cd,
      hb: () => hd,
      ib: () => rd,
      jb: () => zd,
      k: () => od,
      lb: () => td,
      n: () => Rd,
      o: () => Id,
      pb: () => Vd,
      q: () => Md,
      qb: () => Ld,
      s: () => gd,
      v: () => Od,
      z: () => ed
    });
    var pd = kd(38812),
      Nd = kd(37277),
      Wd = kd(40186),
      Pd = kd(40317),
      Zd = kd(40325);

    function gd(dd, Jd, kd) {
      if (!dd || dd.LOGARITHMICDEPTH || dd.indexOf && dd.indexOf("LOGARITHMICDEPTH") >= 0) {
        const dd = kd.activeCamera;
        1 === dd.mode && pd.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Jd.setFloat("logarithmicDepthConstant", 2 / (Math.log(dd.maxZ + 1) / Math.LN2))
      }
    }
    const Cd = {
        r: 0,
        g: 0,
        b: 0
      },
      Kd = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function od(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      kd && dd.fogEnabled && (!Jd || Jd.applyFog) && 0 !== dd.fogMode && (kd.setFloat4("vFogInfos", dd.fogMode, dd.fogStart, dd.fogEnd, dd.fogDensity), pd ? (dd.fogColor.toLinearSpaceToRef(Cd, dd.eL().useExactSrgbConversions), kd.setColor3("vFogColor", Cd)) : kd.setColor3("vFogColor", dd.fogColor))
    }

    function ld(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
      const od = dd.numMaxInfluencers || dd.numInfluencers;
      return od <= 0 ? 0 : (Jd.push("#define MORPHTARGETS"), dd.hasPositions && Jd.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), dd.hasNormals && Jd.push("#define MORPHTARGETTEXTURE_HASNORMALS"), dd.hasTangents && Jd.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), dd.hasUVs && Jd.push("#define MORPHTARGETTEXTURE_HASUVS"), dd.hasUV2s && Jd.push("#define MORPHTARGETTEXTURE_HASUV2S"), dd.hasColors && Jd.push("#define MORPHTARGETTEXTURE_HASCOLORS"), dd.supportsPositions && Nd && Jd.push("#define MORPHTARGETS_POSITION"), dd.supportsNormals && Wd && Jd.push("#define MORPHTARGETS_NORMAL"), dd.supportsTangents && Pd && Jd.push("#define MORPHTARGETS_TANGENT"), dd.supportsUVs && Zd && Jd.push("#define MORPHTARGETS_UV"), dd.supportsUV2s && gd && Jd.push("#define MORPHTARGETS_UV2"), dd.supportsColors && Cd && Jd.push("#define MORPHTARGETS_COLOR"), Jd.push("#define NUM_MORPH_INFLUENCERS " + od), dd.isUsingTextureForTargets && Jd.push("#define MORPHTARGETS_TEXTURE"), Kd.NUM_MORPH_INFLUENCERS = od, Kd.NORMAL = Wd, Kd.TANGENT = Pd, Kd.UV = Zd, Kd.UV2 = gd, Kd.COLOR = Cd, Qd(kd, pd, Kd, Nd), od)
    }

    function Qd(dd, Jd, kd) {
      let Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Pd = kd.NUM_MORPH_INFLUENCERS;
      if (Pd > 0 && Nd.d.LastCreatedEngine) {
        const Zd = Nd.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          gd = Jd.morphTargetManager;
        if (gd?.isUsingTextureForTargets) return;
        const Cd = gd && gd.supportsPositions && Wd,
          Kd = gd && gd.supportsNormals && kd.NORMAL,
          od = gd && gd.supportsTangents && kd.TANGENT,
          ld = gd && gd.supportsUVs && kd.UV1,
          Qd = gd && gd.supportsUV2s && kd.UV2,
          Ld = gd && gd.supportsColors && kd.VERTEXCOLOR;
        for (let kd = 0; kd < Pd; kd++) Cd && dd.push("position" + kd), Kd && dd.push("normal" + kd), od && dd.push("tangent" + kd), ld && dd.push("uv_" + kd), Qd && dd.push("uv2_" + kd), Ld && dd.push("color" + kd), dd.length > Zd && pd.c.Error("Cannot add more vertex attributes for mesh " + Jd.name)
      }
    }

    function Ld(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      dd.push("world0"), dd.push("world1"), dd.push("world2"), dd.push("world3"), Jd && (dd.push("previousWorld0"), dd.push("previousWorld1"), dd.push("previousWorld2"), dd.push("previousWorld3"))
    }

    function Od(dd, Jd) {
      const kd = dd.morphTargetManager;
      dd && kd && Jd.setFloatArray("morphTargetInfluences", kd.influences)
    }

    function ed(dd, Jd) {
      Jd.bindToEffect(dd, "Scene")
    }

    function Rd(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Cd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Kd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        od = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        ld = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (dd.texturesEnabled && Nd && Zd.e.ReflectionTextureEnabled) {
        if (kd.o3("reflectionMatrix", Nd.getReflectionTextureMatrix()), kd.updateFloat2("vReflectionInfos", Nd.level * dd.iblIntensity, ld), gd && Nd.boundingBoxSize) {
          const dd = Nd;
          kd.updateVector3("vReflectionPosition", dd.boundingBoxPosition), kd.updateVector3("vReflectionSize", dd.boundingBoxSize)
        }
        if (Wd) {
          const dd = Nd.getSize().width;
          kd.updateFloat2("vReflectionFilteringInfo", dd, Math.log2(dd))
        }
        if (Kd && !Jd.USEIRRADIANCEMAP) {
          const dd = Nd.sphericalPolynomial;
          if (Jd.USESPHERICALFROMREFLECTIONMAP && dd)
            if (Jd.SPHERICAL_HARMONICS) {
              const Jd = dd.preScaledHarmonics;
              kd.updateVector3("vSphericalL00", Jd.l00), kd.updateVector3("vSphericalL1_1", Jd.l1_1), kd.updateVector3("vSphericalL10", Jd.l10), kd.updateVector3("vSphericalL11", Jd.l11), kd.updateVector3("vSphericalL2_2", Jd.l2_2), kd.updateVector3("vSphericalL2_1", Jd.l2_1), kd.updateVector3("vSphericalL20", Jd.l20), kd.updateVector3("vSphericalL21", Jd.l21), kd.updateVector3("vSphericalL22", Jd.l22)
            } else kd.updateFloat3("vSphericalX", dd.x.x, dd.x.y, dd.x.z), kd.updateFloat3("vSphericalY", dd.y.x, dd.y.y, dd.y.z), kd.updateFloat3("vSphericalZ", dd.z.x, dd.z.y, dd.z.z), kd.updateFloat3("vSphericalXX_ZZ", dd.xx.x - dd.zz.x, dd.xx.y - dd.zz.y, dd.xx.z - dd.zz.z), kd.updateFloat3("vSphericalYY_ZZ", dd.yy.x - dd.zz.x, dd.yy.y - dd.zz.y, dd.yy.z - dd.zz.z), kd.updateFloat3("vSphericalZZ", dd.zz.x, dd.zz.y, dd.zz.z), kd.updateFloat3("vSphericalXY", dd.xy.x, dd.xy.y, dd.xy.z), kd.updateFloat3("vSphericalYZ", dd.yz.x, dd.yz.y, dd.yz.z), kd.updateFloat3("vSphericalZX", dd.zx.x, dd.zx.y, dd.zx.z)
        } else Cd && Jd.USEIRRADIANCEMAP && Jd.USE_IRRADIANCE_DOMINANT_DIRECTION && Nd.irradianceTexture && kd.updateVector3("vReflectionDominantDirection", Nd.irradianceTexture._dominantDirection);
        Pd && kd.updateFloat3("vReflectionMicrosurfaceInfos", Nd.getSize().width, Nd.lodGenerationScale, Nd.lodGenerationOffset)
      }
      od && kd.updateColor3("vReflectionColor", pd)
    }

    function Id(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (pd && Zd.e.ReflectionTextureEnabled) {
        Jd.LODBASEDMICROSFURACE ? kd.setTexture("reflectionSampler", pd) : (kd.setTexture("reflectionSampler", pd._lodTextureMid || pd), kd.setTexture("reflectionSamplerLow", pd._lodTextureLow || pd), kd.setTexture("reflectionSamplerHigh", pd._lodTextureHigh || pd)), Jd.USEIRRADIANCEMAP && kd.setTexture("irradianceSampler", pd.irradianceTexture);
        const Wd = dd.iblCdfGenerator;
        Nd && Wd && kd.setTexture("icdfSampler", Wd.getIcdfTexture())
      }
    }

    function Gd(dd, Jd, kd) {
      Jd._needUVs = !0, Jd[kd] = !0, dd.optimizeUVAllocation && dd.getTextureMatrix().isIdentityAs3x2() ? (Jd[kd + "DIRECTUV"] = dd.coordinatesIndex + 1, Jd["MAINUV" + (dd.coordinatesIndex + 1)] = !0) : Jd[kd + "DIRECTUV"] = 0
    }

    function vd(dd, Jd, kd) {
      const pd = dd.getTextureMatrix();
      Jd.o3(kd + "Matrix", pd)
    }

    function xd(dd, Jd, kd) {
      kd.BAKED_VERTEX_ANIMATION_TEXTURE && kd.INSTANCES && dd.push("bakedVertexAnimationSettingsInstanced")
    }

    function qd(dd, Jd, kd) {
      var pd;
      if (Jd && dd && (dd.computeBonesUsingShaders && Jd._bonesComputationForcedToCPU && (dd.computeBonesUsingShaders = !1), dd.useBones && dd.computeBonesUsingShaders && dd.skeleton)) {
        const Nd = dd.skeleton;
        if (Nd.isUsingTextureForMatrices && Jd.getUniformIndex("boneTextureInfo") > -1) {
          const kd = Nd.getTransformMatrixTexture(dd);
          Jd.setTexture("boneSampler", kd), Jd.setFloat2("boneTextureInfo", Nd._textureWidth, Nd._textureHeight)
        } else {
          const Wd = Nd.getTransformMatrices(dd);
          Wd && (Jd.setMatrices("mBones", Wd), kd && dd.Wm().prePassRenderer && dd.Wm().prePassRenderer.getIndex(2) && (kd.previousBones[dd.uniqueId] || (kd.previousBones[dd.uniqueId] = Wd.slice()), Jd.setMatrices("mPreviousBones", kd.previousBones[dd.uniqueId]), pd = Wd, kd.previousBones[dd.uniqueId].set(pd)))
        }
      }
    }

    function Bd(dd, Jd, kd, pd, Nd) {
      let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      dd._bindLight(Jd, kd, pd, Nd, Wd)
    }
    const sd = 4,
      ad = new WeakMap;

    function Md(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Wd = Math.min(Jd.lightSources.length, Nd);
      for (let Pd = 0; Pd < Wd; Pd++) {
        Bd(Jd.lightSources[Pd], Pd, dd, kd, "boolean" === typeof pd ? pd : pd.SPECULARTERM, Jd.receiveShadows)
      }
    }

    function Fd(dd, Jd, kd, pd) {
      kd.NUM_BONE_INFLUENCERS > 0 && (pd.addCPUSkinningFallback(0, Jd), dd.push("matricesIndices"), dd.push("matricesWeights"), kd.NUM_BONE_INFLUENCERS > 4 && (dd.push("matricesIndicesExtra"), dd.push("matricesWeightsExtra")))
    }

    function Yd(dd, Jd) {
      (Jd.INSTANCES || Jd.THIN_INSTANCES) && Ld(dd, !!Jd.PREPASS_VELOCITY), Jd.INSTANCESCOLOR && dd.push("instanceColor")
    }

    function md(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Nd = 0;
      for (let Wd = 0; Wd < kd && dd["LIGHT" + Wd]; Wd++) Wd > 0 && (Nd = pd + Wd, Jd.addFallback(Nd, "LIGHT" + Wd)), dd.SHADOWS || (dd["SHADOW" + Wd] && Jd.addFallback(pd, "SHADOW" + Wd), dd["SHADOWPCF" + Wd] && Jd.addFallback(pd, "SHADOWPCF" + Wd), dd["SHADOWPCSS" + Wd] && Jd.addFallback(pd, "SHADOWPCSS" + Wd), dd["SHADOWPOISSON" + Wd] && Jd.addFallback(pd, "SHADOWPOISSON" + Wd), dd["SHADOWESM" + Wd] && Jd.addFallback(pd, "SHADOWESM" + Wd), dd["SHADOWCLOSEESM" + Wd] && Jd.addFallback(pd, "SHADOWCLOSEESM" + Wd));
      return Nd
    }

    function bd(dd, Jd, kd, pd, Nd, Wd, Pd) {
      let Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Cd = arguments.length > 9 ? arguments[9] : void 0,
        Kd = arguments.length > 10 ? arguments[10] : void 0;
      if (Pd._areMiscDirty) {
        Pd.LOGARITHMICDEPTH = kd, Pd.POINTSIZE = pd, Pd.FOG = Nd && function(dd, Jd) {
          return Jd.fogEnabled && dd.applyFog && 0 !== Jd.fogMode
        }(dd, Jd), Pd.NONUNIFORMSCALING = dd.nonUniformScaling, Pd.ALPHATEST = Wd, Pd.DECAL_AFTER_DETAIL = Zd, Pd.USE_VERTEX_PULLING = gd, Pd.RIGHT_HANDED = Jd.useRightHandedSystem;
        const od = gd ? Cd?.geometry?.getIndexBuffer() : null,
          ld = !!Cd && Cd.isUnIndexed;
        Pd.VERTEX_PULLING_USE_INDEX_BUFFER = !!od && !ld, Pd.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!od || ld) && od.is32Bits, Pd.VERTEXOUTPUT_INVARIANT = !!Kd
      }
    }

    function Sd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!dd.lightsEnabled || pd) return !0;
      const Nd = Jd.lightSources,
        Wd = Math.min(Nd.length, kd);
      for (let Pd = 0; Pd < Wd; Pd++)
        if (!Nd[Pd].areLightTexturesReady()) return !1;
      return !0
    }

    function jd(dd, Jd, kd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!kd._areLightsDirty) return kd._needNormals;
      const Zd = Wd;
      Wd = function(dd, Jd) {
        const kd = dd.eL().getCaps().maxUniformBuffersPerShaderStage;
        if (null == kd) return Jd;
        const pd = Math.max(kd - sd, 1);
        return Math.min(Jd, pd)
      }(dd, Wd);
      let gd = 0;
      const Cd = {
        needNormals: kd._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (dd.lightsEnabled && !Pd) {
        Jd.lightSources.length > Wd && Wd < Zd && function(dd, Jd, kd, Nd) {
          let Wd = ad.get(dd);
          Wd || (Wd = new Set, ad.set(dd, Wd)), Wd.has(Nd) || (Wd.add(Nd), pd.c.Warn(`maxSimultaneousLights is ${Jd} but this engine supports at most ${kd} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Nd} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Nd+sd} uniform buffers, over the device limit of ${dd.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${kd}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${kd} or less to silence this warning.`))
        }(dd.eL(), Zd, Wd, Math.min(Jd.lightSources.length, Zd));
        for (const pd of Jd.lightSources)
          if (fd(dd, Jd, pd, gd, kd, Nd, Cd), gd++, gd === Wd) break
      }
      kd.SPECULARTERM = Cd.specularEnabled, kd.SHADOWS = Cd.shadowEnabled;
      const Kd = Math.max(Wd, kd.MAXLIGHTCOUNT || 0);
      for (let pd = gd; pd < Kd; pd++) void 0 !== kd["LIGHT" + pd] && (kd["LIGHT" + pd] = !1, kd["HEMILIGHT" + pd] = !1, kd["POINTLIGHT" + pd] = !1, kd["DIRLIGHT" + pd] = !1, kd["SPOTLIGHT" + pd] = !1, kd["AREALIGHT" + pd] = !1, kd["CLUSTLIGHT" + pd] = !1, kd["SHADOW" + pd] = !1, kd["SHADOWCSM" + pd] = !1, kd["SHADOWCSMDEBUG" + pd] = !1, kd["SHADOWCSMNUM_CASCADES" + pd] = !1, kd["SHADOWCSMUSESHADOWMAXZ" + pd] = !1, kd["SHADOWCSMNOBLEND" + pd] = !1, kd["SHADOWCSM_RIGHTHANDED" + pd] = !1, kd["SHADOWPCF" + pd] = !1, kd["SHADOWPCSS" + pd] = !1, kd["SHADOWPOISSON" + pd] = !1, kd["SHADOWESM" + pd] = !1, kd["SHADOWCLOSEESM" + pd] = !1, kd["SHADOWCUBE" + pd] = !1, kd["SHADOWLOWQUALITY" + pd] = !1, kd["SHADOWMEDIUMQUALITY" + pd] = !1);
      kd.LIGHTCOUNT = gd, kd.MAXLIGHTCOUNT = Wd;
      const od = dd.eL().getCaps();
      return void 0 === kd.SHADOWFLOAT && (Cd.needRebuild = !0), kd.SHADOWFLOAT = Cd.shadowEnabled && (od.textureFloatRender && od.textureFloatLinearFiltering || od.textureHalfFloatRender && od.textureHalfFloatLinearFiltering), kd.LIGHTMAPEXCLUDED = Cd.lightmapMode, Cd.needRebuild && kd.rebuild(), Cd.needNormals
    }

    function Xd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Jd && Zd.e.ReflectionTextureEnabled) {
        if (!Jd.isReadyOrNotBlocking()) return !1;
        kd._needNormals = !0, kd.REFLECTION = !0, kd.GAMMAREFLECTION = Jd.gammaSpace, kd.RGBDREFLECTION = Jd.isRGBD, kd.LODINREFLECTIONALPHA = Jd.lodLevelInAlpha, kd.LINEARSPECULARREFLECTION = Jd.linearSpecularLOD, kd.USEIRRADIANCEMAP = !1, kd.LODBASEDMICROSFURACE = dd.eL().getCaps().textureLOD;
        const Pd = dd.eL();
        switch (pd && Nd > 0 ? (kd.NUM_SAMPLES = "" + Nd, Pd._features.needTypeSuffixInShaderConstants && (kd.NUM_SAMPLES = kd.NUM_SAMPLES + "u"), kd.REALTIME_FILTERING = !0, dd.iblCdfGenerator && (kd.IBL_CDF_FILTERING = !0)) : kd.REALTIME_FILTERING = !1, kd.INVERTCUBICMAP = 6 === Jd.coordinatesMode, kd.REFLECTIONMAP_3D = Jd.isCube, kd.REFLECTIONMAP_OPPOSITEZ = kd.REFLECTIONMAP_3D && dd.useRightHandedSystem ? !Jd.invertZ : Jd.invertZ, kd.REFLECTIONMAP_CUBIC = !1, kd.REFLECTIONMAP_EXPLICIT = !1, kd.REFLECTIONMAP_PLANAR = !1, kd.REFLECTIONMAP_PROJECTION = !1, kd.REFLECTIONMAP_SKYBOX = !1, kd.REFLECTIONMAP_SPHERICAL = !1, kd.REFLECTIONMAP_EQUIRECTANGULAR = !1, kd.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, kd.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Jd.coordinatesMode) {
          case 0:
            kd.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            kd.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            kd.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            kd.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            kd.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            kd.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            kd.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            kd.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            kd.REFLECTIONMAP_CUBIC = !0, kd.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Jd.boundingBoxSize
        }
        5 !== Jd.coordinatesMode && (Jd.irradianceTexture ? (kd.USEIRRADIANCEMAP = !0, kd.USESPHERICALFROMREFLECTIONMAP = !1, kd.USESPHERICALINVERTEX = !1, Jd.irradianceTexture._dominantDirection ? kd.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : kd.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Jd.isCube && (kd.USESPHERICALFROMREFLECTIONMAP = !0, kd.USEIRRADIANCEMAP = !1, kd.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, kd.USESPHERICALINVERTEX = Wd))
      } else kd.REFLECTION = !1, kd.REFLECTIONMAP_3D = !1, kd.REFLECTIONMAP_SPHERICAL = !1, kd.REFLECTIONMAP_PLANAR = !1, kd.REFLECTIONMAP_CUBIC = !1, kd.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, kd.REFLECTIONMAP_PROJECTION = !1, kd.REFLECTIONMAP_SKYBOX = !1, kd.REFLECTIONMAP_EXPLICIT = !1, kd.REFLECTIONMAP_EQUIRECTANGULAR = !1, kd.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, kd.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, kd.INVERTCUBICMAP = !1, kd.USESPHERICALFROMREFLECTIONMAP = !1, kd.USEIRRADIANCEMAP = !1, kd.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, kd.USESPHERICALINVERTEX = !1, kd.REFLECTIONMAP_OPPOSITEZ = !1, kd.LODINREFLECTIONALPHA = !1, kd.GAMMAREFLECTION = !1, kd.RGBDREFLECTION = !1, kd.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function fd(dd, Jd, kd, pd, Nd, Pd, Zd) {
      switch (Zd.needNormals = !0, void 0 === Nd["LIGHT" + pd] && (Zd.needRebuild = !0), Nd["LIGHT" + pd] = !0, Nd["SPOTLIGHT" + pd] = !1, Nd["HEMILIGHT" + pd] = !1, Nd["POINTLIGHT" + pd] = !1, Nd["DIRLIGHT" + pd] = !1, Nd["AREALIGHT" + pd] = !1, Nd["CLUSTLIGHT" + pd] = !1, kd.prepareLightSpecificDefines(Nd, pd), Nd["LIGHT_FALLOFF_PHYSICAL" + pd] = !1, Nd["LIGHT_FALLOFF_GLTF" + pd] = !1, Nd["LIGHT_FALLOFF_STANDARD" + pd] = !1, kd.falloffType) {
        case Wd.d.FALLOFF_GLTF:
          Nd["LIGHT_FALLOFF_GLTF" + pd] = !0;
          break;
        case Wd.d.FALLOFF_PHYSICAL:
          Nd["LIGHT_FALLOFF_PHYSICAL" + pd] = !0;
          break;
        case Wd.d.FALLOFF_STANDARD:
          Nd["LIGHT_FALLOFF_STANDARD" + pd] = !0
      }
      if (Pd && !kd.specular.equalsFloats(0, 0, 0) && (Zd.specularEnabled = !0), Nd["SHADOW" + pd] = !1, Nd["SHADOWCSM" + pd] = !1, Nd["SHADOWCSMDEBUG" + pd] = !1, Nd["SHADOWCSMNUM_CASCADES" + pd] = !1, Nd["SHADOWCSMUSESHADOWMAXZ" + pd] = !1, Nd["SHADOWCSMNOBLEND" + pd] = !1, Nd["SHADOWCSM_RIGHTHANDED" + pd] = !1, Nd["SHADOWPCF" + pd] = !1, Nd["SHADOWPCSS" + pd] = !1, Nd["SHADOWPOISSON" + pd] = !1, Nd["SHADOWESM" + pd] = !1, Nd["SHADOWCLOSEESM" + pd] = !1, Nd["SHADOWCUBE" + pd] = !1, Nd["SHADOWLOWQUALITY" + pd] = !1, Nd["SHADOWMEDIUMQUALITY" + pd] = !1, Jd && Jd.receiveShadows && dd.shadowsEnabled && kd.shadowEnabled) {
        const Jd = kd.getShadowGenerator(dd.activeCamera) ?? kd.getShadowGenerator();
        if (Jd) {
          const dd = Jd.getShadowMap();
          dd && dd.renderList && dd.renderList.length > 0 && (Zd.shadowEnabled = !0, Jd.prepareDefines(Nd, pd))
        }
      }
      kd.lightmapMode != Wd.d.LIGHTMAP_DEFAULT ? (Zd.lightmapMode = !0, Nd["LIGHTMAPEXCLUDED" + pd] = !0, Nd["LIGHTMAPNOSPECULAR" + pd] = kd.lightmapMode == Wd.d.LIGHTMAP_SHADOWSONLY) : (Nd["LIGHTMAPEXCLUDED" + pd] = !1, Nd["LIGHTMAPNOSPECULAR" + pd] = !1)
    }

    function nd(dd, Jd, kd, pd, Nd) {
      let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Zd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gd = function(dd, Jd) {
          let kd = !1;
          if (dd.activeCamera) {
            const pd = Jd.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Nd = Jd.CAMERA_PERSPECTIVE ? 1 : 0,
              Wd = 1 === dd.activeCamera.mode ? 1 : 0,
              Pd = 0 === dd.activeCamera.mode ? 1 : 0;
            (pd ^ Wd || Nd ^ Pd) && (Jd.CAMERA_ORTHOGRAPHIC = 1 === Wd, Jd.CAMERA_PERSPECTIVE = 1 === Pd, kd = !0)
          }
          return kd
        }(dd, pd);
      !1 !== Wd && (gd = (0, Pd.l)(kd, dd, pd)), pd.DEPTHPREPASS !== !Jd.getColorWrite() && (pd.DEPTHPREPASS = !pd.DEPTHPREPASS, gd = !0), pd.INSTANCES !== Nd && (pd.INSTANCES = Nd, gd = !0), pd.THIN_INSTANCES !== Zd && (pd.THIN_INSTANCES = Zd, gd = !0), gd && pd.markAsUnprocessed()
    }
    const Ud = 40,
      yd = 64,
      Dd = new WeakMap,
      Td = new WeakSet;

    function Ed(dd, Jd, kd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Zd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Jd._areAttributesDirty && Jd._needNormals === Jd._normals && Jd._needUVs === Jd._uvs) return !1;
      Jd._normals = Jd._needNormals, Jd._uvs = Jd._needUVs, Jd.NORMAL = Jd._needNormals && dd.isVerticesDataPresent("normal"), Jd._needNormals && dd.isVerticesDataPresent("tangent") && (Jd.TANGENT = !0);
      for (let pd = 1; pd <= 6; ++pd) Jd["UV" + pd] = !!Jd._needUVs && dd.isVerticesDataPresent(`uv${1===pd?"":pd}`);
      if (kd) {
        const kd = dd.useVertexColors && dd.isVerticesDataPresent("color");
        Jd.VERTEXCOLOR = kd, Jd.VERTEXALPHA = dd.hasVertexAlpha && kd && Pd
      }
      return dd.isVerticesDataPresent("instanceColor") && (dd.eNd || dd.hasThinInstances) && (Jd.INSTANCESCOLOR = !0), Nd && function(dd, Jd) {
        if (dd.useBones && dd.computeBonesUsingShaders && dd.skeleton) {
          Jd.NUM_BONE_INFLUENCERS = dd.numBoneInfluencers;
          const kd = void 0 !== Jd.BONETEXTURE;
          if (dd.skeleton.isUsingTextureForMatrices && kd) Jd.BONETEXTURE = !0;
          else {
            Jd.BonesPerMesh = dd.skeleton.bones.length + 1, Jd.BONETEXTURE = !kd && void 0;
            const Nd = dd.Wm(),
              Wd = Nd.prePassRenderer;
            if (Wd && Wd.enabled) {
              const kd = -1 === Wd.excludedSkinnedMesh.indexOf(dd);
              Jd.BONES_VELOCITY_ENABLED = kd
            }
            const Pd = !0 === Jd.MULTIVIEW,
              Zd = 2 * Jd.BonesPerMesh + (Pd ? 1 : 0);
            if (Dd.get(dd.skeleton) !== Zd) {
              Dd.set(dd.skeleton, Zd);
              const kd = Nd.eL().getCaps().maxVertexUniformVectors;
              if (kd && !Td.has(dd.skeleton)) {
                const Nd = 4 * Jd.BonesPerMesh,
                  Wd = Pd ? yd : Ud,
                  Zd = Math.max(kd - Wd, 0);
                (Nd > Zd || Pd && 3 * Nd > kd) && (Td.add(dd.skeleton), pd.c.Warn(`Skeleton "${dd.skeleton.name}": ${dd.skeleton.bones.length} bones stored as vertex uniforms use ${Nd} of ~${Zd} usable uniform vectors${Pd?" (multiview)":""} on a device reporting ${kd}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Jd.NUM_BONE_INFLUENCERS = 0, Jd.BonesPerMesh = 0, void 0 !== Jd.BONETEXTURE && (Jd.BONETEXTURE = !1)
      }(dd, Jd), Wd && function(dd, Jd) {
        const kd = dd.morphTargetManager;
        kd ? (Jd.MORPHTARGETS_UV = kd.supportsUVs && Jd.UV1, Jd.MORPHTARGETS_UV2 = kd.supportsUV2s && Jd.UV2, Jd.MORPHTARGETS_TANGENT = kd.supportsTangents && Jd.TANGENT, Jd.MORPHTARGETS_NORMAL = kd.supportsNormals && Jd.NORMAL, Jd.MORPHTARGETS_POSITION = kd.supportsPositions, Jd.MORPHTARGETS_COLOR = kd.supportsColors, Jd.MORPHTARGETTEXTURE_HASUVS = kd.hasUVs, Jd.MORPHTARGETTEXTURE_HASUV2S = kd.hasUV2s, Jd.MORPHTARGETTEXTURE_HASTANGENTS = kd.hasTangents, Jd.MORPHTARGETTEXTURE_HASNORMALS = kd.hasNormals, Jd.MORPHTARGETTEXTURE_HASPOSITIONS = kd.hasPositions, Jd.MORPHTARGETTEXTURE_HASCOLORS = kd.hasColors, Jd.NUM_MORPH_INFLUENCERS = kd.numMaxInfluencers || kd.numInfluencers, Jd.MORPHTARGETS = Jd.NUM_MORPH_INFLUENCERS > 0, Jd.MORPHTARGETS_TEXTURE = kd.isUsingTextureForTargets) : (Jd.MORPHTARGETS_UV = !1, Jd.MORPHTARGETS_UV2 = !1, Jd.MORPHTARGETS_TANGENT = !1, Jd.MORPHTARGETS_NORMAL = !1, Jd.MORPHTARGETS_POSITION = !1, Jd.MORPHTARGETS_COLOR = !1, Jd.MORPHTARGETTEXTURE_HASUVS = !1, Jd.MORPHTARGETTEXTURE_HASUV2S = !1, Jd.MORPHTARGETTEXTURE_HASTANGENTS = !1, Jd.MORPHTARGETTEXTURE_HASNORMALS = !1, Jd.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Jd.MORPHTARGETTEXTURE_HAS_COLORS = !1, Jd.MORPHTARGETS = !1, Jd.NUM_MORPH_INFLUENCERS = 0)
      }(dd, Jd), Zd && function(dd, Jd) {
        const kd = dd.bakedVertexAnimationManager;
        Jd.BAKED_VERTEX_ANIMATION_TEXTURE = !(!kd || !kd.isEnabled)
      }(dd, Jd), !0
    }

    function cd(dd, Jd) {
      if (dd.activeCamera) {
        const kd = Jd.MULTIVIEW;
        Jd.MULTIVIEW = null !== dd.activeCamera.outputRenderTarget && dd.activeCamera.outputRenderTarget.getViewCount() > 1, Jd.MULTIVIEW != kd && Jd.markAsUnprocessed()
      }
    }

    function hd(dd, Jd, kd) {
      const pd = Jd.ORDER_INDEPENDENT_TRANSPARENCY,
        Nd = Jd.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Jd.ORDER_INDEPENDENT_TRANSPARENCY = dd.useOrderIndependentTransparency && kd, Jd.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !dd.eL().getCaps().textureFloatLinearFiltering, pd === Jd.ORDER_INDEPENDENT_TRANSPARENCY && Nd === Jd.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Jd.markAsUnprocessed()
    }

    function rd(dd, Jd, kd) {
      const pd = Jd.PREPASS;
      if (!Jd._arePrePassDirty) return;
      const Nd = [{
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
      if (dd.prePassRenderer && dd.prePassRenderer.enabled && kd) {
        Jd.PREPASS = !0, Jd.SCENE_MRT_COUNT = dd.prePassRenderer.mrtCount, Jd.PREPASS_NORMAL_WORLDSPACE = dd.prePassRenderer.generateNormalsInWorldSpace, Jd.PREPASS_COLOR = !0, Jd.PREPASS_COLOR_INDEX = 0;
        for (let kd = 0; kd < Nd.length; kd++) {
          const pd = dd.prePassRenderer.getIndex(Nd[kd].type); - 1 !== pd ? (Jd[Nd[kd].define] = !0, Jd[Nd[kd].index] = pd) : Jd[Nd[kd].define] = !1
        }
      } else {
        Jd.PREPASS = !1;
        for (let dd = 0; dd < Nd.length; dd++) Jd[Nd[dd].define] = !1
      }
      Jd.PREPASS != pd && (Jd.markAsUnprocessed(), Jd.markAsImageProcessingDirty())
    }

    function ud(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Cd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Nd && Nd.push("Light" + dd), Wd || (Jd.push("vLightData" + dd, "vLightDiffuse" + dd, "vLightSpecular" + dd, "vLightDirection" + dd, "vLightWidth" + dd, "vLightHeight" + dd, "vLightFalloff" + dd, "vLightGround" + dd, "vSliceData" + dd, "vSliceRanges" + dd, "lightMatrix" + dd, "shadowsInfo" + dd, "depthValues" + dd), kd.push("shadowTexture" + dd), kd.push("depthTexture" + dd), Jd.push("viewFrustumZ" + dd, "cascadeBlendFactor" + dd, "lightSizeUVCorrection" + dd, "depthCorrection" + dd, "penumbraDarkness" + dd, "frustumLengths" + dd), pd && (kd.push("projectionLightTexture" + dd), Jd.push("textureProjectionMatrix" + dd)), Pd && kd.push("iesLightTexture" + dd), gd && kd.push("rectAreaLightEmissionTexture" + dd), Zd && (kd.push("lightDataTexture" + dd), Cd || kd.push("tileMaskTexture" + dd)))
    }

    function td(dd, Jd, kd) {
      const pd = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      kd && pd.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), dd.push(...pd);
      Jd.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Vd(dd, Jd, kd) {
      let pd, Nd, Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Pd = null;
      if (dd.uniformsNames) {
        const Zd = dd;
        pd = Zd.uniformsNames, Nd = Zd.uniformBuffersNames, Jd = Zd.samplers, kd = Zd.defines, Wd = Zd.maxSimultaneousLights || 0, Pd = Zd.shaderLanguage ?? null
      } else pd = dd, Jd || (Jd = []);
      for (let Zd = 0; Zd < Wd && kd["LIGHT" + Zd]; Zd++) ud(Zd, pd, Jd, kd["PROJECTEDLIGHTTEXTURE" + Zd], Nd, !1, kd["IESLIGHTTEXTURE" + Zd], kd["CLUSTLIGHT" + Zd], kd["RECTAREALIGHTEMISSIONTEXTURE" + Zd], 1 === Pd);
      kd.NUM_MORPH_INFLUENCERS && (pd.push("morphTargetInfluences"), pd.push("morphTargetCount")), kd.BAKED_VERTEX_ANIMATION_TEXTURE && (pd.push("bakedVertexAnimationSettings"), pd.push("bakedVertexAnimationTextureSizeInverted"), pd.push("bakedVertexAnimationTime"), Jd.push("bakedVertexAnimationTexture"))
    }

    function zd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      dd.addUniform("vReflectionInfos", 2), dd.addUniform("reflectionMatrix", 16), Jd && dd.addUniform("vReflectionMicrosurfaceInfos", 3), kd && (dd.addUniform("vReflectionPosition", 3), dd.addUniform("vReflectionSize", 3)), pd && (dd.addUniform("vReflectionFilteringInfo", 2), dd.addUniform("vReflectionDominantDirection", 3)), Wd && dd.addUniform("vReflectionColor", 3), Nd && (dd.addUniform("vSphericalL00", 3), dd.addUniform("vSphericalL1_1", 3), dd.addUniform("vSphericalL10", 3), dd.addUniform("vSphericalL11", 3), dd.addUniform("vSphericalL2_2", 3), dd.addUniform("vSphericalL2_1", 3), dd.addUniform("vSphericalL20", 3), dd.addUniform("vSphericalL21", 3), dd.addUniform("vSphericalL22", 3), dd.addUniform("vSphericalX", 3), dd.addUniform("vSphericalY", 3), dd.addUniform("vSphericalZ", 3), dd.addUniform("vSphericalXX_ZZ", 3), dd.addUniform("vSphericalYY_ZZ", 3), dd.addUniform("vSphericalZZ", 3), dd.addUniform("vSphericalXY", 3), dd.addUniform("vSphericalYZ", 3), dd.addUniform("vSphericalZX", 3))
    }
  },
  40333: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(37251),
      Nd = kd(40278);
    class Wd extends Nd.b {
      constructor(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(dd, Jd, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new pd.b, this._storeEffectOnSubMeshes = kd
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(dd, Jd) {
        return !!dd && (!this._storeEffectOnSubMeshes || (!dd.rG || 0 === dd.rG.length || this.isReadyForSubMesh(dd, dd.rG[0], Jd)))
      }
      _isReadyForSubMesh(dd) {
        const Jd = dd.materialDefines;
        return !(this.checkReadyOnEveryCall || !dd.effect || !Jd || Jd._renderId !== this.Wm().getRenderId())
      }
      bindOnlyWorldMatrix(dd) {
        this._activeEffect.setMatrix("world", dd)
      }
      bindOnlyNormalMatrix(dd) {
        this._activeEffect.setMatrix("normalMatrix", dd)
      }
      bind(dd, Jd) {
        Jd && this.bindForSubMesh(dd, Jd, Jd.rG[0])
      }
      _afterBind(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(dd, Jd, kd), this.Wm()._cachedEffect = Jd, kd ? kd._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return kd._drawWrapper._forceRebindOnNextCall || dd.isCachedMaterialInvalid(this, Jd, pd)
      }
      dispose(dd, Jd, kd) {
        this._activeEffect = void 0, super.dispose(dd, Jd, kd)
      }
    }
  },
  40353: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd
    });
    const pd = new WeakMap;

    function Nd(dd) {
      const Jd = dd.getVertexBuffers();
      if (!Jd) return null;
      let kd = pd.get(dd);
      if (kd) {
        let dd = !1;
        for (const pd in Jd)
          if (!kd.has(pd)) {
            dd = !0;
            break
          } if (!dd) return kd
      } else kd = new Map, pd.set(dd, kd);
      for (const pd in Jd) {
        const dd = Jd[pd];
        if (dd) {
          const Jd = dd.byteOffset,
            Nd = dd.byteStride,
            Wd = dd.type,
            Pd = dd.normalized;
          kd.set(pd, {
            offset: Jd,
            stride: Nd,
            type: Wd,
            normalized: Pd
          })
        }
      }
      return kd
    }

    function Wd(dd, Jd) {
      Jd.forEach(((Jd, kd) => {
        const pd = `vp_${kd}_info`;
        dd.setFloat4(pd, Jd.offset, Jd.stride, Jd.type, Jd.normalized ? 1 : 0)
      }))
    }
  },
  40299: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      d: () => gd
    });
    var pd = kd(39964),
      Nd = kd(37251),
      Wd = kd(39966);
    let Pd = (() => {
      var dd;
      let Jd, kd, Nd = [];
      return dd = class {
        static extractMinAndMaxIndexed(dd, Jd, kd, pd, Nd, Wd) {
          for (let Pd = kd; Pd < kd + pd; Pd++) {
            const kd = 3 * Jd[Pd],
              pd = dd[kd],
              Zd = dd[kd + 1],
              gd = dd[kd + 2];
            Nd.minimizeInPlaceFromFloats(pd, Zd, gd), Wd.maximizeInPlaceFromFloats(pd, Zd, gd)
          }
        }
        static extractMinAndMax(dd, Jd, kd, pd, Nd, Wd) {
          for (let Pd = Jd, Zd = Jd * pd; Pd < Jd + kd; Pd++, Zd += pd) {
            const Jd = dd[Zd],
              kd = dd[Zd + 1],
              pd = dd[Zd + 2];
            Nd.minimizeInPlaceFromFloats(Jd, kd, pd), Wd.maximizeInPlaceFromFloats(Jd, kd, pd)
          }
        }
      }, (() => {
        const Pd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [Wd.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], kd = [Wd.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, pd.h)(dd, null, Jd, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: dd => "extractMinAndMaxIndexed" in dd,
            get: dd => dd.extractMinAndMaxIndexed
          },
          metadata: Pd
        }, null, Nd), (0, pd.h)(dd, null, kd, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: dd => "extractMinAndMax" in dd,
            get: dd => dd.extractMinAndMax
          },
          metadata: Pd
        }, null, Nd), Pd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pd
        }), (0, pd.i)(dd, Nd)
      })(), dd
    })();

    function Zd(dd, Jd, kd, pd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Zd = new Nd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        gd = new Nd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Pd.extractMinAndMaxIndexed(dd, Jd, kd, pd, Zd, gd), Wd && (Zd.x -= Zd.x * Wd.x + Wd.y, Zd.y -= Zd.y * Wd.x + Wd.y, Zd.z -= Zd.z * Wd.x + Wd.y, gd.x += gd.x * Wd.x + Wd.y, gd.y += gd.y * Wd.x + Wd.y, gd.z += gd.z * Wd.x + Wd.y), {
        minimum: Zd,
        maximum: gd
      }
    }

    function gd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Wd = arguments.length > 4 ? arguments[4] : void 0;
      const Zd = new Nd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        gd = new Nd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Wd || (Wd = 3), Pd.extractMinAndMax(dd, Jd, kd, Wd, Zd, gd), pd && (Zd.x -= Zd.x * pd.x + pd.y, Zd.y -= Zd.y * pd.x + pd.y, Zd.z -= Zd.z * pd.x + pd.y, gd.x += gd.x * pd.x + pd.y, gd.y += gd.y * pd.x + pd.y, gd.z += gd.z * pd.x + pd.y), {
        minimum: Zd,
        maximum: gd
      }
    }
  },
  40282: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd
    });
    var pd, Nd = kd(40115),
      Wd = kd(40285),
      Pd = kd(40292),
      Zd = kd(40299),
      gd = kd(40304),
      Cd = kd(39860);
    class Kd {
      get materialDefines() {
        const dd = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof dd ? null : dd
      }
      set materialDefines(dd) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = dd
      }
      _getDrawWrapper(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        dd = dd ?? this._engine.currentRenderPassId;
        let kd = this._drawWrappers[dd];
        return !kd && Jd && (this._drawWrappers[dd] = kd = new gd.d(this._mesh.Wm().eL())), kd
      }
      _removeDrawWrapper(dd) {
        let Jd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[dd]?.dispose(Jd), this._drawWrappers[dd] = void 0
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
      _setMainDrawWrapperOverride(dd) {
        this._mainDrawWrapperOverride = dd
      }
      setEffect(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Nd = this._drawWrapper;
        Nd.setEffect(dd, Jd, pd), void 0 !== kd && (Nd.materialContext = kd), dd || (Nd.defines = null, Nd.materialContext = void 0)
      }
      resetDrawCache(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== dd) return void this._removeDrawWrapper(dd, !0, Jd);
          for (const dd of this._drawWrappers) dd?.dispose(Jd)
        }
        this._drawWrappers = []
      }
      static AddToMesh(dd, Jd, kd, pd, Nd, Wd, Pd) {
        return new Kd(dd, Jd, kd, pd, Nd, Wd, Pd, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(dd, Jd, kd, pd, Nd, Wd, Pd) {
        let Zd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = dd, this.verticesStart = Jd, this.verticesCount = kd, this.indexStart = pd, this.indexCount = Nd, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Wd, this._renderingMesh = Pd || Wd, gd && Wd.rG.push(this), this._engine = this._mesh.Wm().eL(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Wd.rG.length - 1, Zd && (this.refreshBoundingInfo(), Wd.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      pU() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.pU() : this._boundingInfo
      }
      setBoundingInfo(dd) {
        return this._boundingInfo = dd, this
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
        const dd = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return dd || this._renderingMesh
      }
      qL() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Jd = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Jd) return dd && this._mesh.Wm()._hasDefaultMaterial ? this._mesh.Wm().defaultMaterial : null;
        if (this._isMultiMaterial(Jd)) {
          const dd = Jd.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== dd && (this._currentMaterial = dd, this.resetDrawCache()), dd
        }
        return Jd
      }
      _isMultiMaterial(dd) {
        return void 0 !== dd.getSubMaterial
      }
      refreshBoundingInfo() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (dd || (dd = this._renderingMesh.getVerticesData(Nd.j.PositionKind)), !dd) return this._boundingInfo = this._mesh.pU(), this;
        const Jd = this._renderingMesh.ipd();
        let kd;
        if (0 === this.indexStart && this.indexCount === Jd.length) {
          const dd = this._renderingMesh.pU();
          kd = {
            minimum: dd.minimum.clone(),
            maximum: dd.maximum.clone()
          }
        } else kd = (0, Zd.b)(dd, Jd, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(kd.minimum, kd.maximum) : this._boundingInfo = new Pd.b(kd.minimum, kd.maximum), this
      }
      _checkCollision(dd) {
        return this.pU()._checkCollision(dd)
      }
      updateBoundingInfo(dd) {
        let Jd = this.pU();
        return Jd || (this.refreshBoundingInfo(), Jd = this.pU()), Jd && Jd.update(dd), this
      }
      isInFrustum(dd) {
        const Jd = this.pU();
        return !!Jd && Jd.isInFrustum(dd, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(dd) {
        const Jd = this.pU();
        return !!Jd && Jd.isCompletelyInFrustum(dd)
      }
      render(dd) {
        return this._renderingMesh.render(this, dd, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(dd, Jd) {
        if (!this._linesIndexBuffer) {
          const kd = 6 * Math.floor(this.indexCount / 3),
            pd = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(kd) : new Uint16Array(kd);
          let Nd = 0;
          if (0 === dd.length)
            for (let dd = this.indexStart; dd < this.indexStart + this.indexCount; dd += 3) pd[Nd++] = dd, pd[Nd++] = dd + 1, pd[Nd++] = dd + 1, pd[Nd++] = dd + 2, pd[Nd++] = dd + 2, pd[Nd++] = dd;
          else
            for (let Jd = this.indexStart; Jd < this.indexStart + this.indexCount; Jd += 3) pd[Nd++] = dd[Jd], pd[Nd++] = dd[Jd + 1], pd[Nd++] = dd[Jd + 1], pd[Nd++] = dd[Jd + 2], pd[Nd++] = dd[Jd + 2], pd[Nd++] = dd[Jd];
          this._linesIndexBuffer = Jd.createIndexBuffer(pd), this._linesIndexCount = pd.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(dd) {
        const Jd = this.pU();
        return !!Jd && dd.intersectsBox(Jd.boundingBox)
      }
      intersects(dd, Jd, kd, pd, Nd) {
        const Wd = this.qL();
        if (!Wd) return null;
        let Pd = 3,
          Zd = !1;
        switch (Wd.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Pd = 1, Zd = !0
        }
        return 4 === Wd.fillMode ? kd.length ? this._intersectLines(dd, Jd, kd, this._mesh.intersectionThreshold, pd) : this._intersectUnIndexedLines(dd, Jd, kd, this._mesh.intersectionThreshold, pd) : !kd.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(dd, Jd, kd, pd, Nd) : this._intersectTriangles(dd, Jd, kd, Pd, Zd, pd, Nd)
      }
      _intersectLines(dd, Jd, kd, pd, Nd) {
        let Pd = null;
        for (let Zd = this.indexStart; Zd < this.indexStart + this.indexCount; Zd += 2) {
          const gd = Jd[kd[Zd]],
            Cd = Jd[kd[Zd + 1]],
            Kd = dd.intersectionSegment(gd, Cd, pd);
          if (!(Kd < 0) && ((Nd || !Pd || Kd < Pd.distance) && (Pd = new Wd.e(null, null, Kd), Pd.faceId = Zd / 2, Nd))) break
        }
        return Pd
      }
      _intersectUnIndexedLines(dd, Jd, kd, pd, Nd) {
        let Pd = null;
        for (let Zd = this.verticesStart; Zd < this.verticesStart + this.verticesCount; Zd += 2) {
          const kd = Jd[Zd],
            gd = Jd[Zd + 1],
            Cd = dd.intersectionSegment(kd, gd, pd);
          if (!(Cd < 0) && ((Nd || !Pd || Cd < Pd.distance) && (Pd = new Wd.e(null, null, Cd), Pd.faceId = Zd / 2, Nd))) break
        }
        return Pd
      }
      _intersectTriangles(dd, Jd, kd, pd, Nd, Wd, Pd) {
        let Zd = null,
          gd = -1;
        for (let Cd = this.indexStart; Cd < this.indexStart + this.indexCount - (3 - pd); Cd += pd) {
          gd++;
          const pd = kd[Cd],
            Kd = kd[Cd + 1],
            od = kd[Cd + 2];
          if (Nd && 4294967295 === od) {
            Cd += 2;
            continue
          }
          const ld = Jd[pd],
            Qd = Jd[Kd],
            Ld = Jd[od];
          if (!ld || !Qd || !Ld) continue;
          if (Pd && !Pd(ld, Qd, Ld, dd, pd, Kd, od)) continue;
          const Od = dd.intersectsTriangle(ld, Qd, Ld);
          if (Od) {
            if (Od.distance < 0) continue;
            if ((Wd || !Zd || Od.distance < Zd.distance) && (Zd = Od, Zd.faceId = gd, Wd)) break
          }
        }
        return Zd
      }
      _intersectUnIndexedTriangles(dd, Jd, kd, pd, Nd) {
        let Wd = null;
        for (let Pd = this.verticesStart; Pd < this.verticesStart + this.verticesCount; Pd += 3) {
          const kd = Jd[Pd],
            Zd = Jd[Pd + 1],
            gd = Jd[Pd + 2];
          if (Nd && !Nd(kd, Zd, gd, dd, -1, -1, -1)) continue;
          const Cd = dd.intersectsTriangle(kd, Zd, gd);
          if (Cd) {
            if (Cd.distance < 0) continue;
            if ((pd || !Wd || Cd.distance < Wd.distance) && (Wd = Cd, Wd.faceId = Pd / 3, pd)) break
          }
        }
        return Wd
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(dd, Jd) {
        const kd = new Kd(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, dd, Jd, !1);
        if (!this.IsGlobal) {
          const dd = this.pU();
          if (!dd) return kd;
          kd._boundingInfo = new Pd.b(dd.minimum, dd.maximum)
        }
        return kd
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Wm().eL()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Jd = this._mesh.rG.indexOf(this);
        this._mesh.rG.splice(Jd, 1), this.resetDrawCache(void 0, dd)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(dd, Jd, kd, pd, Nd) {
        let Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = Number.MAX_VALUE,
          Zd = -Number.MAX_VALUE;
        const gd = (Nd || pd).ipd();
        for (let Cd = Jd; Cd < Jd + kd; Cd++) {
          const dd = gd[Cd];
          dd < Pd && (Pd = dd), dd > Zd && (Zd = dd)
        }
        return new Kd(dd, Pd, Zd - Pd + 1, Jd, kd, pd, Nd, Wd)
      }
    }(pd = Kd.prototype).projectToRef ?? (pd.projectToRef = (0, Cd.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);