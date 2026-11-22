export const id = 258;
export const ids = [258];
export const modules = {
  39879: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik) {
        this.bu = kk, this.bv = ek, this.distance = ik, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39894: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(36707),
      fk = ik(36698),
      Sk = ik(36703);
    class bk {
      constructor(kk, ek, ik) {
        this.vectors = (0, Dk.c)(8, fk.o.Zero), this.center = fk.o.Zero(), this.centerWorld = fk.o.Zero(), this.extendSize = fk.o.Zero(), this.extendSizeWorld = fk.o.Zero(), this.directions = (0, Dk.c)(3, fk.o.Zero), this.vectorsWorld = (0, Dk.c)(8, fk.o.Zero), this.minimumWorld = fk.o.Zero(), this.maximumWorld = fk.o.Zero(), this.minimum = fk.o.Zero(), this.maximum = fk.o.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(kk, ek, ik)
      }
      reConstruct(kk, ek, ik) {
        const Dk = kk.x,
          Sk = kk.y,
          bk = kk.z,
          rk = ek.x,
          Pk = ek.y,
          mk = ek.z,
          Mk = this.vectors;
        this.minimum.Z6(Dk, Sk, bk), this.maximum.Z6(rk, Pk, mk), Mk[0].Z6(Dk, Sk, bk), Mk[1].Z6(rk, Pk, mk), Mk[2].Z6(rk, Sk, bk), Mk[3].Z6(Dk, Pk, bk), Mk[4].Z6(Dk, Sk, mk), Mk[5].Z6(rk, Pk, bk), Mk[6].Z6(Dk, Pk, mk), Mk[7].Z6(rk, Sk, mk), ek.addToRef(kk, this.center).scaleInPlace(.5), ek.subtractToRef(kk, this.extendSize).scaleInPlace(.5), this._worldMatrix = ik || fk.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(kk) {
        const ek = bk._TmpVector3,
          ik = this.maximum.subtractToRef(this.minimum, ek[0]),
          Dk = ik.length();
        ik.normalizeFromLength(Dk);
        const fk = Dk * kk,
          Sk = ik.scaleInPlace(.5 * fk),
          rk = this.center.subtractToRef(Sk, ek[1]),
          Pk = this.center.addToRef(Sk, ek[2]);
        return this.reConstruct(rk, Pk, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(kk) {
        const ek = this.minimumWorld,
          ik = this.maximumWorld,
          Dk = this.directions,
          Sk = this.vectorsWorld,
          bk = this.vectors;
        if (kk.isIdentity()) {
          ek.Fs(this.minimum), ik.Fs(this.maximum);
          for (let kk = 0; kk < 8; ++kk) Sk[kk].Fs(bk[kk]);
          this.extendSizeWorld.Fs(this.extendSize), this.centerWorld.Fs(this.center)
        } else {
          ek.A_(Number.MAX_VALUE), ik.A_(-Number.MAX_VALUE);
          for (let Dk = 0; Dk < 8; ++Dk) {
            const rk = Sk[Dk];
            fk.o.TransformCoordinatesToRef(bk[Dk], kk, rk), ek.minimizeInPlace(rk), ik.maximizeInPlace(rk)
          }
          ik.subtractToRef(ek, this.extendSizeWorld).scaleInPlace(.5), ik.addToRef(ek, this.centerWorld).scaleInPlace(.5)
        }
        fk.o.FromArrayToRef(kk.m, 0, Dk[0]), fk.o.FromArrayToRef(kk.m, 4, Dk[1]), fk.o.FromArrayToRef(kk.m, 8, Dk[2]), this._worldMatrix = kk
      }
      isInFrustum(kk) {
        return bk.IsInFrustum(this.vectorsWorld, kk)
      }
      isCompletelyInFrustum(kk) {
        return bk.IsCompletelyInFrustum(this.vectorsWorld, kk)
      }
      intersectsPoint(kk) {
        const ek = this.minimumWorld,
          ik = this.maximumWorld,
          Dk = ek.x,
          fk = ek.y,
          bk = ek.z,
          rk = ik.x,
          Pk = ik.y,
          mk = ik.z,
          Mk = kk.x,
          Kk = kk.y,
          xk = kk.z,
          nk = -Sk.d;
        return !(rk - Mk < nk || nk > Mk - Dk) && (!(Pk - Kk < nk || nk > Kk - fk) && !(mk - xk < nk || nk > xk - bk))
      }
      intersectsSphere(kk) {
        return bk.IntersectsSphere(this.minimumWorld, this.maximumWorld, kk.centerWorld, kk.radiusWorld)
      }
      intersectsMinMax(kk, ek) {
        const ik = this.minimumWorld,
          Dk = this.maximumWorld,
          fk = ik.x,
          Sk = ik.y,
          bk = ik.z,
          rk = Dk.x,
          Pk = Dk.y,
          mk = Dk.z,
          Mk = kk.x,
          Kk = kk.y,
          xk = kk.z,
          nk = ek.x,
          Uk = ek.y,
          Hk = ek.z;
        return !(rk < Mk || fk > nk) && (!(Pk < Kk || Sk > Uk) && !(mk < xk || bk > Hk))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(kk, ek) {
        return kk.intersectsMinMax(ek.minimumWorld, ek.maximumWorld)
      }
      static IntersectsSphere(kk, ek, ik, Dk) {
        const Sk = bk._TmpVector3[0];
        fk.o.ClampToRef(ik, kk, ek, Sk);
        return fk.o.DistanceSquared(ik, Sk) <= Dk * Dk
      }
      static IsCompletelyInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ++ik) {
          const Dk = ek[ik];
          for (let ek = 0; ek < 8; ++ek)
            if (Dk.dotCoordinate(kk[ek]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ++ik) {
          let Dk = !0;
          const fk = ek[ik];
          for (let ek = 0; ek < 8; ++ek)
            if (fk.dotCoordinate(kk[ek]) >= 0) {
              Dk = !1;
              break
            } if (Dk) return !1
        }
        return !0
      }
    }
    bk._TmpVector3 = (0, Dk.c)(3, fk.o.Zero)
  },
  39887: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk
    });
    var Dk = ik(36707),
      fk = ik(36698),
      Sk = ik(39894);
    class bk {
      constructor(kk, ek, ik) {
        this.center = fk.o.Zero(), this.centerWorld = fk.o.Zero(), this.minimum = fk.o.Zero(), this.maximum = fk.o.Zero(), this.reConstruct(kk, ek, ik)
      }
      reConstruct(kk, ek, ik) {
        this.minimum.Fs(kk), this.maximum.Fs(ek);
        const Dk = fk.o.Distance(kk, ek);
        ek.addToRef(kk, this.center).scaleInPlace(.5), this.radius = .5 * Dk, this._update(ik || fk.b.IdentityReadOnly)
      }
      scale(kk) {
        const ek = bk._TmpVector3,
          ik = this.maximum.subtractToRef(this.minimum, ek[0]),
          Dk = ik.length();
        ik.normalizeFromLength(Dk);
        const fk = Dk * kk,
          Sk = ik.scaleInPlace(.5 * fk),
          rk = this.center.subtractToRef(Sk, ek[1]),
          Pk = this.center.addToRef(Sk, ek[2]);
        return this.reConstruct(rk, Pk, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(kk) {
        if (kk.isIdentity()) this.centerWorld.Fs(this.center), this.radiusWorld = this.radius;
        else {
          fk.o.TransformCoordinatesToRef(this.center, kk, this.centerWorld);
          const ek = bk._TmpVector3[0];
          fk.o.TransformNormalFromFloatsToRef(1, 1, 1, kk, ek), this.radiusWorld = Math.max(Math.abs(ek.x), Math.abs(ek.y), Math.abs(ek.z)) * this.radius
        }
      }
      isInFrustum(kk) {
        const ek = this.centerWorld,
          ik = this.radiusWorld;
        for (let Dk = 0; Dk < 6; Dk++)
          if (kk[Dk].dotCoordinate(ek) <= -ik) return !1;
        return !0
      }
      isCenterInFrustum(kk) {
        const ek = this.centerWorld;
        for (let ik = 0; ik < 6; ik++)
          if (kk[ik].dotCoordinate(ek) < 0) return !1;
        return !0
      }
      intersectsPoint(kk) {
        const ek = fk.o.DistanceSquared(this.centerWorld, kk);
        return !(this.radiusWorld * this.radiusWorld < ek)
      }
      static Intersects(kk, ek) {
        const ik = fk.o.DistanceSquared(kk.centerWorld, ek.centerWorld),
          Dk = kk.radiusWorld + ek.radiusWorld;
        return !(Dk * Dk < ik)
      }
      static CreateFromCenterAndRadius(kk, ek, ik) {
        this._TmpVector3[0].Fs(kk), this._TmpVector3[1].Z6(0, 0, ek), this._TmpVector3[2].Fs(kk), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].KDk(this._TmpVector3[1]);
        const Dk = new bk(this._TmpVector3[0], this._TmpVector3[2]);
        return Dk._worldMatrix = ik || fk.b.Identity(), Dk
      }
    }
    bk._TmpVector3 = (0, Dk.c)(3, fk.o.Zero);
    const rk = {
        min: 0,
        max: 0
      },
      Pk = {
        min: 0,
        max: 0
      },
      mk = (kk, ek, ik) => {
        const Dk = fk.o.Dot(ek.centerWorld, kk),
          Sk = Math.abs(fk.o.Dot(ek.directions[0], kk)) * ek.extendSize.x + Math.abs(fk.o.Dot(ek.directions[1], kk)) * ek.extendSize.y + Math.abs(fk.o.Dot(ek.directions[2], kk)) * ek.extendSize.z;
        ik.min = Dk - Sk, ik.max = Dk + Sk
      },
      Mk = (kk, ek, ik) => (mk(kk, ek, rk), mk(kk, ik, Pk), !(rk.min > Pk.max || Pk.min > rk.max));
    class Kk {
      constructor(kk, ek, ik) {
        this._isLocked = !1, this.boundingBox = new Sk.e(kk, ek, ik), this.HDk = new bk(kk, ek, ik)
      }
      reConstruct(kk, ek, ik) {
        this.boundingBox.reConstruct(kk, ek, ik), this.HDk.reConstruct(kk, ek, ik)
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
      set isLocked(kk) {
        this._isLocked = kk
      }
      update(kk) {
        this._isLocked || (this.boundingBox._update(kk), this.HDk._update(kk))
      }
      centerOn(kk, ek) {
        const ik = Kk._TmpVector3[0].Fs(kk).KDk(ek),
          Dk = Kk._TmpVector3[1].Fs(kk).addInPlace(ek);
        return this.boundingBox.reConstruct(ik, Dk, this.boundingBox.getWorldMatrix()), this.HDk.reConstruct(ik, Dk, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(kk) {
        const ek = fk.o.Minimize(this.minimum, kk),
          ik = fk.o.Maximize(this.maximum, kk);
        return this.reConstruct(ek, ik, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(kk) {
        const ek = fk.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(ek);
        const ik = fk.j.eH[0];
        return fk.o.TransformCoordinatesToRef(kk.boundingBox.minimumWorld, ek, ik), this.encapsulate(ik), fk.o.TransformCoordinatesToRef(kk.boundingBox.maximumWorld, ek, ik), this.encapsulate(ik), this
      }
      scale(kk) {
        return this.boundingBox.scale(kk), this.HDk.scale(kk), this
      }
      isInFrustum(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === ek || 3 === ek) && this.HDk.isCenterInFrustum(kk)) return !0;
        if (!this.HDk.isInFrustum(kk)) return !1;
        return !(1 !== ek && 3 !== ek) || this.boundingBox.isInFrustum(kk)
      }
      get diagonalLength() {
        const kk = this.boundingBox;
        return kk.maximumWorld.subtractToRef(kk.minimumWorld, Kk._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(kk) {
        return this.boundingBox.isCompletelyInFrustum(kk)
      }
      _checkCollision(kk) {
        return kk._canDoCollision(this.HDk.centerWorld, this.HDk.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(kk) {
        return !!this.HDk.centerWorld && (!!this.HDk.intersectsPoint(kk) && !!this.boundingBox.intersectsPoint(kk))
      }
      intersects(kk, ek) {
        if (!bk.Intersects(this.HDk, kk.HDk)) return !1;
        if (!Sk.e.Intersects(this.boundingBox, kk.boundingBox)) return !1;
        if (!ek) return !0;
        const ik = this.boundingBox,
          Dk = kk.boundingBox;
        return !!Mk(ik.directions[0], ik, Dk) && (!!Mk(ik.directions[1], ik, Dk) && (!!Mk(ik.directions[2], ik, Dk) && (!!Mk(Dk.directions[0], ik, Dk) && (!!Mk(Dk.directions[1], ik, Dk) && (!!Mk(Dk.directions[2], ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[0], Dk.directions[0]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[0], Dk.directions[1]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[0], Dk.directions[2]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[1], Dk.directions[0]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[1], Dk.directions[1]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[1], Dk.directions[2]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[2], Dk.directions[0]), ik, Dk) && (!!Mk(fk.o.Cross(ik.directions[2], Dk.directions[1]), ik, Dk) && !!Mk(fk.o.Cross(ik.directions[2], Dk.directions[2]), ik, Dk))))))))))))))
      }
    }
    Kk._TmpVector3 = (0, Dk.c)(2, fk.o.Zero)
  },
  39919: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      g: () => Pk,
      k: () => rk,
      m: () => bk
    });
    var Dk = ik(39722),
      fk = ik(36698);

    function Sk(kk) {
      -1 === kk.indexOf("vClipPlane") && kk.push("vClipPlane"), -1 === kk.indexOf("vClipPlane2") && kk.push("vClipPlane2"), -1 === kk.indexOf("vClipPlane3") && kk.push("vClipPlane3"), -1 === kk.indexOf("vClipPlane4") && kk.push("vClipPlane4"), -1 === kk.indexOf("vClipPlane5") && kk.push("vClipPlane5"), -1 === kk.indexOf("vClipPlane6") && kk.push("vClipPlane6")
    }

    function bk(kk, ek, ik) {
      const Dk = !!(kk.clipPlane ?? ek.clipPlane),
        fk = !!(kk.clipPlane2 ?? ek.clipPlane2),
        Sk = !!(kk.clipPlane3 ?? ek.clipPlane3),
        bk = !!(kk.clipPlane4 ?? ek.clipPlane4),
        rk = !!(kk.clipPlane5 ?? ek.clipPlane5),
        Pk = !!(kk.clipPlane6 ?? ek.clipPlane6);
      Dk && ik.push("#define CLIPPLANE"), fk && ik.push("#define CLIPPLANE2"), Sk && ik.push("#define CLIPPLANE3"), bk && ik.push("#define CLIPPLANE4"), rk && ik.push("#define CLIPPLANE5"), Pk && ik.push("#define CLIPPLANE6")
    }

    function rk(kk, ek, ik) {
      let Dk = !1;
      const fk = !!(kk.clipPlane ?? ek.clipPlane),
        Sk = !!(kk.clipPlane2 ?? ek.clipPlane2),
        bk = !!(kk.clipPlane3 ?? ek.clipPlane3),
        rk = !!(kk.clipPlane4 ?? ek.clipPlane4),
        Pk = !!(kk.clipPlane5 ?? ek.clipPlane5),
        mk = !!(kk.clipPlane6 ?? ek.clipPlane6);
      return ik.CLIPPLANE !== fk && (ik.CLIPPLANE = fk, Dk = !0), ik.CLIPPLANE2 !== Sk && (ik.CLIPPLANE2 = Sk, Dk = !0), ik.CLIPPLANE3 !== bk && (ik.CLIPPLANE3 = bk, Dk = !0), ik.CLIPPLANE4 !== rk && (ik.CLIPPLANE4 = rk, Dk = !0), ik.CLIPPLANE5 !== Pk && (ik.CLIPPLANE5 = Pk, Dk = !0), ik.CLIPPLANE6 !== mk && (ik.CLIPPLANE6 = mk, Dk = !0), Dk
    }

    function Pk(kk, ek, ik) {
      let Dk = ek.clipPlane ?? ik.clipPlane;
      mk(kk, "vClipPlane", Dk), Dk = ek.clipPlane2 ?? ik.clipPlane2, mk(kk, "vClipPlane2", Dk), Dk = ek.clipPlane3 ?? ik.clipPlane3, mk(kk, "vClipPlane3", Dk), Dk = ek.clipPlane4 ?? ik.clipPlane4, mk(kk, "vClipPlane4", Dk), Dk = ek.clipPlane5 ?? ik.clipPlane5, mk(kk, "vClipPlane5", Dk), Dk = ek.clipPlane6 ?? ik.clipPlane6, mk(kk, "vClipPlane6", Dk)
    }

    function mk(kk, ek, ik) {
      if (ik) {
        const Sk = Dk.b.XF()?.floatingOriginOffset || fk.o.ZeroReadOnly;
        kk.setFloat4(ek, ik.normal.x, ik.normal.y, ik.normal.z, ik.d + fk.o.Dot(ik.normal, Sk))
      }
    }
  },
  39946: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(kk, ek) {
        this._defines[kk] || (kk < this._currentRank && (this._currentRank = kk), kk > this._maxRank && (this._maxRank = kk), this._defines[kk] = new Array), this._defines[kk].push(ek)
      }
      addCPUSkinningFallback(kk, ek) {
        this._mesh = ek, kk < this._currentRank && (this._currentRank = kk), kk > this._maxRank && (this._maxRank = kk)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(kk, ek) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, kk = kk.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), ek._bonesComputationForcedToCPU = !0;
          const ik = this._mesh.XF();
          for (let kk = 0; kk < ik.meshes.length; kk++) {
            const Dk = ik.meshes[kk];
            if (Dk.material) {
              if (Dk.computeBonesUsingShaders && 0 !== Dk.numBoneInfluencers)
                if (Dk.material.getEffect() === ek) Dk.computeBonesUsingShaders = !1;
                else if (Dk.TY)
                for (const kk of Dk.TY) {
                  if (kk.effect === ek) {
                    Dk.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Dk.computeBonesUsingShaders && Dk.numBoneInfluencers > 0 && (Dk.computeBonesUsingShaders = !1)
          }
        } else {
          const ek = this._defines[this._currentRank];
          if (ek)
            for (let ik = 0; ik < ek.length; ik++) kk = kk.replace("#define " + ek[ik], "");
          this._currentRank++
        }
        return kk
      }
    }
  },
  39861: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => pk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39662),
      bk = ik(36726),
      rk = ik(36722),
      Pk = ik(39870),
      mk = ik(39696),
      Mk = ik(38272),
      Kk = ik(37372),
      xk = ik(39906),
      nk = ik(39585);
    let Uk = (() => {
      var kk;
      let ek, ik, Sk, bk, rk, Pk, mk, Mk, Kk, xk, Uk, Hk, wk = [];
      return kk = class {
        constructor() {
          this._func = (0, Dk.e)(this, wk), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(kk) {
          this._func = kk
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(kk) {
          this._backFunc = kk
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(kk) {
          this._funcRef = kk
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(kk) {
          this._funcMask = kk
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(kk) {
          this._opStencilFail = kk
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(kk) {
          this._opDepthFail = kk
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(kk) {
          this._opStencilDepthPass = kk
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(kk) {
          this._backOpStencilFail = kk
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(kk) {
          this._backOpDepthFail = kk
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(kk) {
          this._backOpStencilDepthPass = kk
        }
        get mask() {
          return this._mask
        }
        set mask(kk) {
          this._mask = kk
        }
        get enabled() {
          return this._enabled
        }
        set enabled(kk) {
          this._enabled = kk
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(kk) {
          nk.b.Clone((() => kk), this)
        }
        serialize() {
          return nk.b.Serialize(this)
        }
        parse(kk, ek, ik) {
          nk.b.Parse((() => this), kk, ek, ik)
        }
      }, (() => {
        const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], (0, Dk.d)(kk, null, ek, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: kk => "func" in kk,
            get: kk => kk.func
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, ik, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: kk => "backFunc" in kk,
            get: kk => kk.backFunc
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, Sk, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: kk => "funcRef" in kk,
            get: kk => kk.funcRef
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, bk, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "funcMask" in kk,
            get: kk => kk.funcMask
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, rk, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "opStencilFail" in kk,
            get: kk => kk.opStencilFail
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, Pk, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "opDepthFail" in kk,
            get: kk => kk.opDepthFail
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, mk, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "opStencilDepthPass" in kk,
            get: kk => kk.opStencilDepthPass
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, Mk, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpStencilFail" in kk,
            get: kk => kk.backOpStencilFail
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, Kk, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpDepthFail" in kk,
            get: kk => kk.backOpDepthFail
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, xk, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpStencilDepthPass" in kk,
            get: kk => kk.backOpStencilDepthPass
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, Uk, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: kk => "mask" in kk,
            get: kk => kk.mask
          },
          metadata: nk
        }, null, wk), (0, Dk.d)(kk, null, Hk, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "enabled" in kk,
            get: kk => kk.enabled
          },
          metadata: nk
        }, null, wk), nk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nk
        })
      })(), kk
    })();
    var Hk = ik(39910),
      wk = ik(39483),
      lk = ik(39447);
    let pk = (() => {
      var kk;
      let ek, ik, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak, Wk, tk, Xk, Bk, ck, Tk, Zk = [],
        Ok = [],
        gk = [],
        Gk = [],
        Nk = [],
        Rk = [],
        Jk = [],
        ke = [],
        ee = [],
        ie = [],
        De = [],
        fe = [],
        Se = [],
        be = [],
        re = [],
        Pe = [],
        me = [],
        Me = [],
        Ke = [],
        xe = [],
        ne = [],
        Ue = [],
        He = [],
        we = [],
        le = [],
        pe = [],
        ye = [],
        Ye = [],
        Le = [],
        Ce = [],
        Ae = [],
        je = [],
        se = [],
        de = [],
        Ve = [],
        Fe = [],
        ue = [],
        qe = [],
        Ie = [],
        ze = [],
        Qe = [],
        ve = [],
        Ee = [],
        he = [],
        ae = [],
        We = [],
        te = [],
        Xe = [],
        Be = [],
        ce = [],
        Te = [];
      return kk = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(ek) {
          this._useVertexPulling !== ek && (this._useVertexPulling = ek, this.pek(kk.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(kk) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(ek) {
          if (this._alpha === ek) return;
          const ik = this._alpha;
          this._alpha = ek, 1 !== ik && 1 !== ek || this.pek(kk.MiscDirtyFlag + kk.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(ek) {
          this._backFaceCulling !== ek && (this._backFaceCulling = ek, this.pek(kk.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(ek) {
          const ik = Math.max(0, Math.min(0 | ek, 4));
          this._textureRepetitionMode !== ik && (this._textureRepetitionMode = ik, this.pek(kk.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(ek) {
          this._cullBackFaces !== ek && (this._cullBackFaces = ek, this.pek(kk.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(kk) {
          this._blockDirtyMechanism !== kk && (this._blockDirtyMechanism = kk, kk || this.markDirty())
        }
        atomicMaterialsUpdate(kk) {
          this.blockDirtyMechanism = !0;
          try {
            kk(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(kk) {
          this._onDisposeObserver && this.ZF.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZF.add(kk)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new bk.c), this._onBindObservable
        }
        set onBind(kk) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(kk)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new bk.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new bk.c), this._onEffectCreatedObservable
        }
        set alphaMode(kk) {
          this._alphaMode[0] = kk
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[ik] !== ek && (this._alphaMode[ik] = ek, this.pek(kk.TextureDirtyFlag))
        }
        set needDepthPrePass(kk) {
          this._needDepthPrePass !== kk && (this._needDepthPrePass = kk, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(ek) {
          this._fogEnabled !== ek && (this._fogEnabled = ek, this.pek(kk.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case kk.WireFrameFillMode:
            case kk.LineListDrawMode:
            case kk.LineLoopDrawMode:
            case kk.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(ek) {
          this.fillMode = ek ? kk.WireFrameFillMode : kk.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case kk.PointFillMode:
            case kk.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(ek) {
          this.fillMode = ek ? kk.PointFillMode : kk.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(ek) {
          this._fillMode !== ek && (this._fillMode = ek, this.pek(kk.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(kk) {
          const ek = this.XF().JU().getCaps().fragmentDepthSupported;
          kk && !ek && Mk.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = kk && ek, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(kk) {
          this._isVertexOutputInvariant !== kk && (this._isVertexOutputInvariant = kk, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(kk) {
          this._drawWrapper = kk
        }
        constructor(ek, ik, fk) {
          let Pk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Dk.e)(this, Zk), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Dk.e)(this, Ok, void 0), this.uniqueId = ((0, Dk.e)(this, gk), (0, Dk.e)(this, Gk, void 0)), this._loadedUniqueId = (0, Dk.e)(this, Nk), this.name = (0, Dk.e)(this, Rk, void 0), this.metadata = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, null)), this._internalMetadata = (0, Dk.e)(this, ee), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Dk.e)(this, ie, !1), this.checkReadyOnlyOnce = ((0, Dk.e)(this, De), (0, Dk.e)(this, fe, !1)), this.state = ((0, Dk.e)(this, Se), (0, Dk.e)(this, be, "")), this._alpha = ((0, Dk.e)(this, re), (0, Dk.e)(this, Pe, 1)), this.inspectableCustomProperties = (0, Dk.e)(this, me), this._backFaceCulling = (0, Dk.e)(this, Me, !0), this._textureRepetitionMode = ((0, Dk.e)(this, Ke), (0, Dk.e)(this, xe, 0)), this.textureRepetitionHexTilingParams = ((0, Dk.e)(this, ne), (0, Dk.e)(this, Ue, [1, .6, 7, .5])), this._cullBackFaces = ((0, Dk.e)(this, He), (0, Dk.e)(this, we, !0)), this._blockDirtyMechanism = ((0, Dk.e)(this, le), !1), this.sideOrientation = (0, Dk.e)(this, pe, null), this.onCompiled = ((0, Dk.e)(this, ye), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.ZF = new bk.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Dk.e)(this, Ye, [2]), this._needDepthPrePass = ((0, Dk.e)(this, Le), (0, Dk.e)(this, Ce, !1)), this.disableDepthWrite = ((0, Dk.e)(this, Ae), (0, Dk.e)(this, je, !1)), this.disableColorWrite = ((0, Dk.e)(this, se), (0, Dk.e)(this, de, !1)), this.forceDepthWrite = ((0, Dk.e)(this, Ve), (0, Dk.e)(this, Fe, !1)), this.depthFunction = ((0, Dk.e)(this, ue), (0, Dk.e)(this, qe, 0)), this.separateCullingPass = ((0, Dk.e)(this, Ie), (0, Dk.e)(this, ze, !1)), this._fogEnabled = ((0, Dk.e)(this, Qe), (0, Dk.e)(this, ve, !0)), this.pointSize = ((0, Dk.e)(this, Ee), (0, Dk.e)(this, he, 1)), this.zOffset = ((0, Dk.e)(this, ae), (0, Dk.e)(this, We, 0)), this.zOffsetUnits = ((0, Dk.e)(this, te), (0, Dk.e)(this, Xe, 0)), this.clipPlane = (0, Dk.e)(this, Be), this.stencil = new Uk, this._isVertexOutputInvariant = (0, Dk.e)(this, ce, kk.ForceVertexOutputInvariant), this._materialContext = (0, Dk.e)(this, Te), this._useUBO = !1, this._fillMode = kk.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = ek;
          const Mk = ik || rk.e.LastCreatedScene;
          Mk && (this._scene = Mk, this._dirtyCallbacks = {}, this._forceGLSL = Pk, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = ek || Sk.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.JU().createMaterialContext(), this._drawWrapper = new xk.e(this._scene.JU(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new mk.d(this._scene.JU(), void 0, void 0, ek), this._useUBO = this.XF().JU().supportsUniformBuffers, this._createUniformBuffer(), fk || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), kk.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const kk = this.XF().JU();
          this._uniformBuffer?.dispose(), kk.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new mk.d(kk, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new mk.d(this._scene.JU(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(kk) {
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
        isReady(kk, ek) {
          return !0
        }
        isReadyForSubMesh(kk, ek, ik) {
          const Dk = ek.materialDefines;
          return !!Dk && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Dk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        XF() {
          return this._scene
        }
        _getEffectiveOrientation(kk) {
          return null !== this.sideOrientation ? this.sideOrientation : kk.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(kk) {
          this._transparencyMode = kk
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === kk.MATERIAL_ALPHABLEND || this._transparencyMode === kk.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === kk.MATERIAL_ALPHATEST || this._transparencyMode === kk.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === kk.MATERIAL_OPAQUE || this._transparencyMode === kk.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(kk) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : kk.visibility < 1 || !this._disableAlphaBlending && (kk.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(kk) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(kk) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ik = this.XF().meshes;
          for (const kk of ik)
            if (kk.TY)
              for (const ik of kk.TY)
                if (ik.fH() === this)
                  for (const kk of ik._drawWrappers) kk && this._materialContext === kk.materialContext && (kk._wasPreviouslyReady = !1, kk._wasPreviouslyUsingInstances = null, kk._forceRebindOnNextCall = ek);
          ek && this.pek(kk.AllDirtyFlag)
        }
        _preBind(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Dk = this._scene.JU(),
            fk = (null == ik ? this.sideOrientation : ik) === kk.ClockWiseSideOrientation,
            Sk = ek || this._getDrawWrapper();
          return (0, wk.b)(Sk) && Sk.materialContext && (Sk.materialContext.useVertexPulling = this.useVertexPulling), Dk.enableEffect(Sk), Dk.setState(this.backFaceCulling, this.zOffset, !1, fk, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), fk
        }
        bind(kk, ek) {}
        buildUniformLayout() {
          const kk = this._uniformBuffer;
          this._eventInfo.ubo = kk, this._callbackPluginEventGeneric(8, this._eventInfo), kk.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(kk, ek, ik) {
          const Dk = ik._drawWrapper;
          this._eventInfo.subMesh = ik, this._callbackPluginEventBindForSubMesh(this._eventInfo), Dk._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(kk) {}
        bindView(kk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : kk.setMatrix("view", this.XF().getViewMatrix())
        }
        bindViewProjection(kk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (kk.setMatrix("viewProjection", this.XF().getTransformMatrix()), kk.setMatrix("projection", this.XF().getProjectionMatrix()), kk.setMatrix("inverseProjection", this.XF().getInverseProjectionMatrix()))
        }
        bindEyePosition(kk, ek) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(kk, ek)
        }
        _afterBind(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ek && (this._needToBindSceneUbo = !1, (0, Hk.C)(ek, this.XF().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = kk ? kk.visibility : 1, this._onBindObservable && kk && this._onBindObservable.notifyObservers(kk), this.disableDepthWrite) {
            const kk = this._scene.JU();
            this._cachedDepthWriteState = kk.getDepthWrite(), kk.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const kk = this._scene.JU();
            this._cachedColorWriteState = kk.getColorWrite(), kk.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const kk = this._scene.JU();
            this._cachedDepthFunctionState = kk.getDepthFunction() || 0, kk.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.JU().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.JU().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.JU().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(kk) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = kk, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(kk) {
          return null
        }
        _clonePlugins(ek, ik) {
          const Dk = {};
          if (this._serializePlugins(Dk), kk._ParsePlugins(Dk, ek, this._scene, ik), this.pluginManager)
            for (const kk of this.pluginManager._plugins) {
              const ik = ek.pluginManager.getPlugin(kk.name);
              ik && kk.copyTo(ik)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const kk = [];
            for (const ek in this.meshMap) {
              const ik = this.meshMap[ek];
              ik && kk.push(ik)
            }
            return kk
          }
          return this._scene.meshes.filter((kk => kk.material === this))
        }
        forceCompilation(kk, ek, ik, Dk) {
          const fk = {
              clipPlane: !1,
              useInstances: !1,
              ...ik
            },
            Sk = this.XF(),
            bk = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const rk = () => {
            if (!this._scene || !this._scene.JU()) return;
            const ik = Sk.clipPlane;
            if (fk.clipPlane && (Sk.clipPlane = new Kk.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let ik = !0,
                Sk = null;
              if (kk.TY) {
                const ek = new Pk.e(0, 0, 0, 0, 0, kk, void 0, !1, !1);
                ek.materialDefines && (ek.materialDefines._renderId = -1), this.isReadyForSubMesh(kk, ek, fk.useInstances) || (ek.effect && ek.effect.getCompilationError() && ek.effect.allFallbacksProcessed() ? Sk = ek.effect.getCompilationError() : (ik = !1, setTimeout(rk, 16)))
              }
              ik && (this.allowShaderHotSwapping = bk, Sk && Dk && Dk(Sk), ek && ek(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = bk, ek && ek(this)) : setTimeout(rk, 16);
            fk.clipPlane && (Sk.clipPlane = ik)
          };
          rk()
        }
        async forceCompilationAsync(kk, ek) {
          return await new Promise(((ik, Dk) => {
            this.forceCompilation(kk, (() => {
              ik()
            }), ek, (kk => {
              Dk(kk)
            }))
          }))
        }
        pek(ek) {
          this.XF().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (kk._DirtyCallbackArray.length = 0, ek & kk.ImageProcessingDirtyFlag && kk._DirtyCallbackArray.push(kk._ImageProcessingDirtyCallBack), ek & kk.TextureDirtyFlag && kk._DirtyCallbackArray.push(kk._TextureDirtyCallBack), ek & kk.LightDirtyFlag && kk._DirtyCallbackArray.push(kk._LightsDirtyCallBack), ek & kk.FresnelDirtyFlag && kk._DirtyCallbackArray.push(kk._FresnelDirtyCallBack), ek & kk.AttributesDirtyFlag && kk._DirtyCallbackArray.push(kk._AttributeDirtyCallBack), ek & kk.MiscDirtyFlag && kk._DirtyCallbackArray.push(kk._MiscDirtyCallBack), ek & kk.PrePassDirtyFlag && kk._DirtyCallbackArray.push(kk._PrePassDirtyCallBack), kk._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(kk._RunDirtyCallBacks), this.XF().resetCachedMaterial())
        }
        resetDrawCache() {
          const kk = this.XF().meshes;
          for (const ek of kk)
            if (ek.TY)
              for (const kk of ek.TY) kk.fH() === this && kk.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(kk) {
          const ek = this.XF();
          if (ek.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ik = ek.meshes;
          for (const Dk of ik)
            if (Dk.TY)
              for (const ik of Dk.TY) {
                if ((ik.fH() || (ek._hasDefaultMaterial ? ek.defaultMaterial : null)) === this)
                  for (const ek of ik._drawWrappers) ek && ek.defines && ek.defines.markAllAsDirty && this._materialContext === ek.materialContext && kk(ek.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.XF().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const kk = this.XF().enablePrePassRenderer();
          kk && kk.pek()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(kk._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(kk._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(kk._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(kk._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(kk._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(kk._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(kk._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(kk._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(kk._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(kk._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const kk = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.ZF.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(kk)
            }))
          }
        }
        setPrePassRenderer(kk) {
          return !1
        }
        dispose(kk, ek, ik) {
          const Dk = this.XF();
          if (Dk.stopAnimation(this), Dk.freeProcessedMaterials(), Dk.removeMaterial(this), this._eventInfo.forceDisposeTextures = ek, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const kk = this._parentContainer.materials.indexOf(this);
            kk > -1 && this._parentContainer.materials.splice(kk, 1), this._parentContainer = null
          }
          if (!0 !== ik)
            if (this.meshMap)
              for (const fk in this.meshMap) {
                const kk = this.meshMap[fk];
                this._disposeMeshResources(kk)
              } else {
                const kk = Dk.meshes;
                for (const ek of kk) this._disposeMeshResources(ek)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.ZF.notifyObservers(this), this.ZF.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(kk) {
          if (!kk) return;
          const ek = kk.geometry,
            ik = kk._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (kk.TY && ik)
              for (const Dk of kk.TY) {
                const kk = Dk._drawWrappers;
                for (let fk = 0; fk < kk.length; fk++) {
                  const Sk = kk[fk]?.effect;
                  if (!Sk) continue;
                  ik[fk] === this && (ek?._releaseVertexArrayObject(Sk), Dk._removeDrawWrapper(fk, !0, !0))
                }
              }
          } else ek?._releaseVertexArrayObject(this._drawWrapper.effect);
          kk.material !== this || kk.aDk || (kk.material = null)
        }
        serialize() {
          const kk = nk.b.Serialize(this);
          return kk.stencil = this.stencil.serialize(), kk.uniqueId = this.uniqueId, this._serializePlugins(kk), kk
        }
        _serializePlugins(kk) {
          if (kk.plugins = {}, this.pluginManager)
            for (const ek of this.pluginManager._plugins) ek.doNotSerialize || (kk.plugins[ek.getClassName()] = ek.serialize())
        }
        static ParseAlphaMode(kk, ek) {
          void 0 !== kk._alphaMode ? ek._alphaMode = Array.isArray(kk._alphaMode) ? [...kk._alphaMode] : [kk._alphaMode] : void 0 !== kk.alphaMode ? ek._alphaMode = Array.isArray(kk.alphaMode) ? [...kk.alphaMode] : [kk.alphaMode] : ek._alphaMode = [2]
        }
        static Parse(ek, ik, Dk) {
          if (ek.customType) {
            if ("BABYLON.PBRMaterial" === ek.customType && ek.overloadedAlbedo && (ek.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Mk.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else ek.customType = "BABYLON.StandardMaterial";
          const fk = Sk.i.Instantiate(ek.customType).Parse(ek, ik, Dk);
          return fk._loadedUniqueId = ek.uniqueId, kk.ParseAlphaMode(ek, fk), fk
        }
        static _ParsePlugins(kk, ek, ik, Dk) {
          if (kk.plugins)
            for (const fk in kk.plugins) {
              const bk = kk.plugins[fk];
              let rk = ek.pluginManager?.getPlugin(bk.name);
              if (!rk) {
                const kk = Sk.i.Instantiate("BABYLON." + fk);
                kk && (rk = new kk(ek))
              }
              rk?.parse(bk, ik, Dk)
            }
        }
      }, (() => {
        const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, fk.I)()], ik = [(0, fk.I)()], lk = [(0, fk.I)()], pk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)("alpha")], Ak = [(0, fk.I)("backFaceCulling")], jk = [(0, fk.I)("textureRepetitionMode")], sk = [(0, fk.I)("textureRepetitionHexTilingParams")], dk = [(0, fk.I)("cullBackFaces")], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], uk = [(0, fk.I)()], qk = [(0, fk.I)()], Ik = [(0, fk.I)()], zk = [(0, fk.I)()], Qk = [(0, fk.I)()], vk = [(0, fk.I)()], Ek = [(0, fk.I)("fogEnabled")], hk = [(0, fk.I)()], ak = [(0, fk.I)()], Wk = [(0, fk.I)()], tk = [(0, fk.I)()], Xk = [(0, fk.I)()], Bk = [(0, fk.I)()], ck = [(0, fk.I)()], Tk = [(0, fk.I)()], (0, Dk.d)(kk, null, tk, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: kk => "pointsCloud" in kk,
            get: kk => kk.pointsCloud
          },
          metadata: Sk
        }, null, Zk), (0, Dk.d)(kk, null, Xk, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "fillMode" in kk,
            get: kk => kk.fillMode
          },
          metadata: Sk
        }, null, Zk), (0, Dk.d)(kk, null, Bk, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLogarithmicDepth" in kk,
            get: kk => kk.useLogarithmicDepth
          },
          metadata: Sk
        }, null, Zk), (0, Dk.d)(kk, null, Tk, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "transparencyMode" in kk,
            get: kk => kk.transparencyMode
          },
          metadata: Sk
        }, null, Zk), (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, ek) => {
              kk.id = ek
            }
          },
          metadata: Sk
        }, Ok, gk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, ek) => {
              kk.uniqueId = ek
            }
          },
          metadata: Sk
        }, Gk, Nk), (0, Dk.d)(null, null, lk, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, ek) => {
              kk.name = ek
            }
          },
          metadata: Sk
        }, Rk, Jk), (0, Dk.d)(null, null, pk, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, ek) => {
              kk.metadata = ek
            }
          },
          metadata: Sk
        }, ke, ee), (0, Dk.d)(null, null, yk, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: kk => "checkReadyOnEveryCall" in kk,
            get: kk => kk.checkReadyOnEveryCall,
            set: (kk, ek) => {
              kk.checkReadyOnEveryCall = ek
            }
          },
          metadata: Sk
        }, ie, De), (0, Dk.d)(null, null, Yk, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: kk => "checkReadyOnlyOnce" in kk,
            get: kk => kk.checkReadyOnlyOnce,
            set: (kk, ek) => {
              kk.checkReadyOnlyOnce = ek
            }
          },
          metadata: Sk
        }, fe, Se), (0, Dk.d)(null, null, Lk, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: kk => "state" in kk,
            get: kk => kk.state,
            set: (kk, ek) => {
              kk.state = ek
            }
          },
          metadata: Sk
        }, be, re), (0, Dk.d)(null, null, Ck, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "_alpha" in kk,
            get: kk => kk._alpha,
            set: (kk, ek) => {
              kk._alpha = ek
            }
          },
          metadata: Sk
        }, Pe, me), (0, Dk.d)(null, null, Ak, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: kk => "_backFaceCulling" in kk,
            get: kk => kk._backFaceCulling,
            set: (kk, ek) => {
              kk._backFaceCulling = ek
            }
          },
          metadata: Sk
        }, Me, Ke), (0, Dk.d)(null, null, jk, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_textureRepetitionMode" in kk,
            get: kk => kk._textureRepetitionMode,
            set: (kk, ek) => {
              kk._textureRepetitionMode = ek
            }
          },
          metadata: Sk
        }, xe, ne), (0, Dk.d)(null, null, sk, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: kk => "textureRepetitionHexTilingParams" in kk,
            get: kk => kk.textureRepetitionHexTilingParams,
            set: (kk, ek) => {
              kk.textureRepetitionHexTilingParams = ek
            }
          },
          metadata: Sk
        }, Ue, He), (0, Dk.d)(null, null, dk, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: kk => "_cullBackFaces" in kk,
            get: kk => kk._cullBackFaces,
            set: (kk, ek) => {
              kk._cullBackFaces = ek
            }
          },
          metadata: Sk
        }, we, le), (0, Dk.d)(null, null, Vk, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: kk => "sideOrientation" in kk,
            get: kk => kk.sideOrientation,
            set: (kk, ek) => {
              kk.sideOrientation = ek
            }
          },
          metadata: Sk
        }, pe, ye), (0, Dk.d)(null, null, Fk, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_alphaMode" in kk,
            get: kk => kk._alphaMode,
            set: (kk, ek) => {
              kk._alphaMode = ek
            }
          },
          metadata: Sk
        }, Ye, Le), (0, Dk.d)(null, null, uk, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: kk => "_needDepthPrePass" in kk,
            get: kk => kk._needDepthPrePass,
            set: (kk, ek) => {
              kk._needDepthPrePass = ek
            }
          },
          metadata: Sk
        }, Ce, Ae), (0, Dk.d)(null, null, qk, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableDepthWrite" in kk,
            get: kk => kk.disableDepthWrite,
            set: (kk, ek) => {
              kk.disableDepthWrite = ek
            }
          },
          metadata: Sk
        }, je, se), (0, Dk.d)(null, null, Ik, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableColorWrite" in kk,
            get: kk => kk.disableColorWrite,
            set: (kk, ek) => {
              kk.disableColorWrite = ek
            }
          },
          metadata: Sk
        }, de, Ve), (0, Dk.d)(null, null, zk, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceDepthWrite" in kk,
            get: kk => kk.forceDepthWrite,
            set: (kk, ek) => {
              kk.forceDepthWrite = ek
            }
          },
          metadata: Sk
        }, Fe, ue), (0, Dk.d)(null, null, Qk, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: kk => "depthFunction" in kk,
            get: kk => kk.depthFunction,
            set: (kk, ek) => {
              kk.depthFunction = ek
            }
          },
          metadata: Sk
        }, qe, Ie), (0, Dk.d)(null, null, vk, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "separateCullingPass" in kk,
            get: kk => kk.separateCullingPass,
            set: (kk, ek) => {
              kk.separateCullingPass = ek
            }
          },
          metadata: Sk
        }, ze, Qe), (0, Dk.d)(null, null, Ek, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "_fogEnabled" in kk,
            get: kk => kk._fogEnabled,
            set: (kk, ek) => {
              kk._fogEnabled = ek
            }
          },
          metadata: Sk
        }, ve, Ee), (0, Dk.d)(null, null, hk, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: kk => "pointSize" in kk,
            get: kk => kk.pointSize,
            set: (kk, ek) => {
              kk.pointSize = ek
            }
          },
          metadata: Sk
        }, he, ae), (0, Dk.d)(null, null, ak, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "zOffset" in kk,
            get: kk => kk.zOffset,
            set: (kk, ek) => {
              kk.zOffset = ek
            }
          },
          metadata: Sk
        }, We, te), (0, Dk.d)(null, null, Wk, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: kk => "zOffsetUnits" in kk,
            get: kk => kk.zOffsetUnits,
            set: (kk, ek) => {
              kk.zOffsetUnits = ek
            }
          },
          metadata: Sk
        }, Xe, Be), (0, Dk.d)(null, null, ck, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: kk => "_isVertexOutputInvariant" in kk,
            get: kk => kk._isVertexOutputInvariant,
            set: (kk, ek) => {
              kk._isVertexOutputInvariant = ek
            }
          },
          metadata: Sk
        }, ce, Te), Sk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sk
        })
      })(), kk.TriangleFillMode = 0, kk.WireFrameFillMode = 1, kk.PointFillMode = 2, kk.PointListDrawMode = 3, kk.LineListDrawMode = 4, kk.LineLoopDrawMode = 5, kk.LineStripDrawMode = 6, kk.TriangleStripDrawMode = 7, kk.TriangleFanDrawMode = 8, kk.ClockWiseSideOrientation = 0, kk.CounterClockWiseSideOrientation = 1, kk.ImageProcessingDirtyFlag = 64, kk.TextureDirtyFlag = 1, kk.LightDirtyFlag = 2, kk.FresnelDirtyFlag = 4, kk.AttributesDirtyFlag = 8, kk.MiscDirtyFlag = 16, kk.PrePassDirtyFlag = 32, kk.AllDirtyFlag = 127, kk.MATERIAL_OPAQUE = 0, kk.MATERIAL_ALPHATEST = 1, kk.MATERIAL_ALPHABLEND = 2, kk.MATERIAL_ALPHATESTANDBLEND = 3, kk.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, kk.MATERIAL_NORMALBLENDMETHOD_RNM = 1, kk.LIGHTFALLOFF_PHYSICAL = 0, kk.LIGHTFALLOFF_GLTF = 1, kk.LIGHTFALLOFF_STANDARD = 2, kk.OnEventObservable = new bk.c, kk.ForceVertexOutputInvariant = !1, kk._AllDirtyCallBack = kk => kk.markAllAsDirty(), kk._ImageProcessingDirtyCallBack = kk => kk.markAsImageProcessingDirty(), kk._TextureDirtyCallBack = kk => kk.markAsTexturesDirty(), kk._FresnelDirtyCallBack = kk => kk.markAsFresnelDirty(), kk._MiscDirtyCallBack = kk => kk.markAsMiscDirty(), kk._PrePassDirtyCallBack = kk => kk.markAsPrePassDirty(), kk._LightsDirtyCallBack = kk => kk.markAsLightDirty(), kk._AttributeDirtyCallBack = kk => kk.markAsAttributesDirty(), kk._FresnelAndMiscDirtyCallBack = ek => {
        kk._FresnelDirtyCallBack(ek), kk._MiscDirtyCallBack(ek)
      }, kk._TextureAndMiscDirtyCallBack = ek => {
        kk._TextureDirtyCallBack(ek), kk._MiscDirtyCallBack(ek)
      }, kk._DirtyCallbackArray = [], kk._RunDirtyCallBacks = ek => {
        for (const ik of kk._DirtyCallbackArray) ik(ek)
      }, kk
    })();
    Object.getOwnPropertyDescriptor(pk.prototype, "pluginManager") || Object.defineProperty(pk.prototype, "pluginManager", (0, lk.h)("Material", "pluginManager"))
  },
  39928: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(39467);
    class fk {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(kk) {
        this._DiffuseTextureEnabled !== kk && (this._DiffuseTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(kk) {
        this._BaseWeightTextureEnabled !== kk && (this._BaseWeightTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(kk) {
        this._BaseDiffuseRoughnessTextureEnabled !== kk && (this._BaseDiffuseRoughnessTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(kk) {
        this._DetailTextureEnabled !== kk && (this._DetailTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(kk) {
        this._DecalMapEnabled !== kk && (this._DecalMapEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(kk) {
        this._AmbientTextureEnabled !== kk && (this._AmbientTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(kk) {
        this._OpacityTextureEnabled !== kk && (this._OpacityTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(kk) {
        this._ReflectionTextureEnabled !== kk && (this._ReflectionTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(kk) {
        this._EmissiveTextureEnabled !== kk && (this._EmissiveTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(kk) {
        this._SpecularTextureEnabled !== kk && (this._SpecularTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(kk) {
        this._BumpTextureEnabled !== kk && (this._BumpTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(kk) {
        this._LightmapTextureEnabled !== kk && (this._LightmapTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(kk) {
        this._RefractionTextureEnabled !== kk && (this._RefractionTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(kk) {
        this._ColorGradingTextureEnabled !== kk && (this._ColorGradingTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(kk) {
        this._FresnelEnabled !== kk && (this._FresnelEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(kk) {
        this._ClearCoatTextureEnabled !== kk && (this._ClearCoatTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(kk) {
        this._ClearCoatBumpTextureEnabled !== kk && (this._ClearCoatBumpTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(kk) {
        this._ClearCoatTintTextureEnabled !== kk && (this._ClearCoatTintTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(kk) {
        this._SheenTextureEnabled !== kk && (this._SheenTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(kk) {
        this._AnisotropicTextureEnabled !== kk && (this._AnisotropicTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(kk) {
        this._ThicknessTextureEnabled !== kk && (this._ThicknessTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(kk) {
        this._RefractionIntensityTextureEnabled !== kk && (this._RefractionIntensityTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(kk) {
        this._TranslucencyIntensityTextureEnabled !== kk && (this._TranslucencyIntensityTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(kk) {
        this._TranslucencyColorTextureEnabled !== kk && (this._TranslucencyColorTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(kk) {
        this._IridescenceTextureEnabled !== kk && (this._IridescenceTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
      }
    }
    fk._DiffuseTextureEnabled = !0, fk._BaseWeightTextureEnabled = !0, fk._BaseDiffuseRoughnessTextureEnabled = !0, fk._DetailTextureEnabled = !0, fk._DecalMapEnabled = !0, fk._AmbientTextureEnabled = !0, fk._OpacityTextureEnabled = !0, fk._ReflectionTextureEnabled = !0, fk._EmissiveTextureEnabled = !0, fk._SpecularTextureEnabled = !0, fk._BumpTextureEnabled = !0, fk._LightmapTextureEnabled = !0, fk._RefractionTextureEnabled = !0, fk._ColorGradingTextureEnabled = !0, fk._FresnelEnabled = !0, fk._ClearCoatTextureEnabled = !0, fk._ClearCoatBumpTextureEnabled = !0, fk._ClearCoatTintTextureEnabled = !0, fk._SheenTextureEnabled = !0, fk._AnisotropicTextureEnabled = !0, fk._ThicknessTextureEnabled = !0, fk._RefractionIntensityTextureEnabled = !0, fk._TranslucencyIntensityTextureEnabled = !0, fk._TranslucencyColorTextureEnabled = !0, fk._IridescenceTextureEnabled = !0
  },
  39910: (kk, ek, ik) => {
    ik.d(ek, {
      $: () => xk,
      Bb: () => Gk,
      C: () => wk,
      Cb: () => Ok,
      Db: () => gk,
      Eb: () => Uk,
      G: () => Yk,
      J: () => uk,
      L: () => Lk,
      P: () => Vk,
      T: () => Fk,
      X: () => nk,
      b: () => Ik,
      db: () => Xk,
      f: () => Ck,
      hb: () => Ek,
      i: () => Kk,
      jb: () => Qk,
      m: () => lk,
      mb: () => zk,
      q: () => pk,
      qb: () => yk,
      r: () => dk,
      tb: () => qk,
      u: () => Pk,
      vb: () => Bk,
      wb: () => ck,
      xb: () => Tk,
      y: () => Hk
    });
    var Dk = ik(38272),
      fk = ik(36722),
      Sk = ik(39769),
      bk = ik(39919),
      rk = ik(39928);

    function Pk(kk, ek, ik) {
      if (!kk || kk.LOGARITHMICDEPTH || kk.indexOf && kk.indexOf("LOGARITHMICDEPTH") >= 0) {
        const kk = ik.activeCamera;
        1 === kk.mode && Dk.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), ek.setFloat("logarithmicDepthConstant", 2 / (Math.log(kk.maxZ + 1) / Math.LN2))
      }
    }
    const mk = {
        r: 0,
        g: 0,
        b: 0
      },
      Mk = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Kk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ik && kk.fogEnabled && (!ek || ek.applyFog) && 0 !== kk.fogMode && (ik.setFloat4("vFogInfos", kk.fogMode, kk.fogStart, kk.fogEnd, kk.fogDensity), Dk ? (kk.fogColor.toLinearSpaceToRef(mk, kk.JU().useExactSrgbConversions), ik.setColor3("vFogColor", mk)) : ik.setColor3("vFogColor", kk.fogColor))
    }

    function xk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
      const Kk = kk.numMaxInfluencers || kk.numInfluencers;
      return Kk <= 0 ? 0 : (ek.push("#define MORPHTARGETS"), kk.hasPositions && ek.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), kk.hasNormals && ek.push("#define MORPHTARGETTEXTURE_HASNORMALS"), kk.hasTangents && ek.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), kk.hasUVs && ek.push("#define MORPHTARGETTEXTURE_HASUVS"), kk.hasUV2s && ek.push("#define MORPHTARGETTEXTURE_HASUV2S"), kk.hasColors && ek.push("#define MORPHTARGETTEXTURE_HASCOLORS"), kk.supportsPositions && fk && ek.push("#define MORPHTARGETS_POSITION"), kk.supportsNormals && Sk && ek.push("#define MORPHTARGETS_NORMAL"), kk.supportsTangents && bk && ek.push("#define MORPHTARGETS_TANGENT"), kk.supportsUVs && rk && ek.push("#define MORPHTARGETS_UV"), kk.supportsUV2s && Pk && ek.push("#define MORPHTARGETS_UV2"), kk.supportsColors && mk && ek.push("#define MORPHTARGETS_COLOR"), ek.push("#define NUM_MORPH_INFLUENCERS " + Kk), kk.isUsingTextureForTargets && ek.push("#define MORPHTARGETS_TEXTURE"), Mk.NUM_MORPH_INFLUENCERS = Kk, Mk.NORMAL = Sk, Mk.TANGENT = bk, Mk.UV = rk, Mk.UV2 = Pk, Mk.COLOR = mk, nk(ik, Dk, Mk, fk), Kk)
    }

    function nk(kk, ek, ik) {
      let Sk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const bk = ik.NUM_MORPH_INFLUENCERS;
      if (bk > 0 && fk.e.LastCreatedEngine) {
        const rk = fk.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          Pk = ek.morphTargetManager;
        if (Pk?.isUsingTextureForTargets) return;
        const mk = Pk && Pk.supportsPositions && Sk,
          Mk = Pk && Pk.supportsNormals && ik.NORMAL,
          Kk = Pk && Pk.supportsTangents && ik.TANGENT,
          xk = Pk && Pk.supportsUVs && ik.UV1,
          nk = Pk && Pk.supportsUV2s && ik.UV2,
          Uk = Pk && Pk.supportsColors && ik.VERTEXCOLOR;
        for (let ik = 0; ik < bk; ik++) mk && kk.push("position" + ik), Mk && kk.push("normal" + ik), Kk && kk.push("tangent" + ik), xk && kk.push("uv_" + ik), nk && kk.push("uv2_" + ik), Uk && kk.push("color" + ik), kk.length > rk && Dk.b.Error("Cannot add more vertex attributes for mesh " + ek.name)
      }
    }

    function Uk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      kk.push("world0"), kk.push("world1"), kk.push("world2"), kk.push("world3"), ek && (kk.push("previousWorld0"), kk.push("previousWorld1"), kk.push("previousWorld2"), kk.push("previousWorld3"))
    }

    function Hk(kk, ek) {
      const ik = kk.morphTargetManager;
      kk && ik && ek.setFloatArray("morphTargetInfluences", ik.influences)
    }

    function wk(kk, ek) {
      ek.bindToEffect(kk, "Scene")
    }

    function lk(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        mk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Kk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        xk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (kk.texturesEnabled && fk && rk.e.ReflectionTextureEnabled) {
        if (ik.N7("reflectionMatrix", fk.getReflectionTextureMatrix()), ik.updateFloat2("vReflectionInfos", fk.level * kk.iblIntensity, xk), Pk && fk.boundingBoxSize) {
          const kk = fk;
          ik.updateVector3("vReflectionPosition", kk.boundingBoxPosition), ik.updateVector3("vReflectionSize", kk.boundingBoxSize)
        }
        if (Sk) {
          const kk = fk.getSize().width;
          ik.updateFloat2("vReflectionFilteringInfo", kk, Math.log2(kk))
        }
        if (Mk && !ek.USEIRRADIANCEMAP) {
          const kk = fk.sphericalPolynomial;
          if (ek.USESPHERICALFROMREFLECTIONMAP && kk)
            if (ek.SPHERICAL_HARMONICS) {
              const ek = kk.preScaledHarmonics;
              ik.updateVector3("vSphericalL00", ek.l00), ik.updateVector3("vSphericalL1_1", ek.l1_1), ik.updateVector3("vSphericalL10", ek.l10), ik.updateVector3("vSphericalL11", ek.l11), ik.updateVector3("vSphericalL2_2", ek.l2_2), ik.updateVector3("vSphericalL2_1", ek.l2_1), ik.updateVector3("vSphericalL20", ek.l20), ik.updateVector3("vSphericalL21", ek.l21), ik.updateVector3("vSphericalL22", ek.l22)
            } else ik.updateFloat3("vSphericalX", kk.x.x, kk.x.y, kk.x.z), ik.updateFloat3("vSphericalY", kk.y.x, kk.y.y, kk.y.z), ik.updateFloat3("vSphericalZ", kk.z.x, kk.z.y, kk.z.z), ik.updateFloat3("vSphericalXX_ZZ", kk.xx.x - kk.zz.x, kk.xx.y - kk.zz.y, kk.xx.z - kk.zz.z), ik.updateFloat3("vSphericalYY_ZZ", kk.yy.x - kk.zz.x, kk.yy.y - kk.zz.y, kk.yy.z - kk.zz.z), ik.updateFloat3("vSphericalZZ", kk.zz.x, kk.zz.y, kk.zz.z), ik.updateFloat3("vSphericalXY", kk.xy.x, kk.xy.y, kk.xy.z), ik.updateFloat3("vSphericalYZ", kk.yz.x, kk.yz.y, kk.yz.z), ik.updateFloat3("vSphericalZX", kk.zx.x, kk.zx.y, kk.zx.z)
        } else mk && ek.USEIRRADIANCEMAP && ek.USE_IRRADIANCE_DOMINANT_DIRECTION && fk.irradianceTexture && ik.updateVector3("vReflectionDominantDirection", fk.irradianceTexture._dominantDirection);
        bk && ik.updateFloat3("vReflectionMicrosurfaceInfos", fk.getSize().width, fk.lodGenerationScale, fk.lodGenerationOffset)
      }
      Kk && ik.updateColor3("vReflectionColor", Dk)
    }

    function pk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Dk && rk.e.ReflectionTextureEnabled) {
        ek.LODBASEDMICROSFURACE ? ik.setTexture("reflectionSampler", Dk) : (ik.setTexture("reflectionSampler", Dk._lodTextureMid || Dk), ik.setTexture("reflectionSamplerLow", Dk._lodTextureLow || Dk), ik.setTexture("reflectionSamplerHigh", Dk._lodTextureHigh || Dk)), ek.USEIRRADIANCEMAP && ik.setTexture("irradianceSampler", Dk.irradianceTexture);
        const Sk = kk.iblCdfGenerator;
        fk && Sk && ik.setTexture("icdfSampler", Sk.getIcdfTexture())
      }
    }

    function yk(kk, ek, ik) {
      ek._needUVs = !0, ek[ik] = !0, kk.optimizeUVAllocation && kk.getTextureMatrix().isIdentityAs3x2() ? (ek[ik + "DIRECTUV"] = kk.coordinatesIndex + 1, ek["MAINUV" + (kk.coordinatesIndex + 1)] = !0) : ek[ik + "DIRECTUV"] = 0
    }

    function Yk(kk, ek, ik) {
      const Dk = kk.getTextureMatrix();
      ek.N7(ik + "Matrix", Dk)
    }

    function Lk(kk, ek, ik) {
      ik.BAKED_VERTEX_ANIMATION_TEXTURE && ik.INSTANCES && kk.push("bakedVertexAnimationSettingsInstanced")
    }

    function Ck(kk, ek, ik) {
      var Dk;
      if (ek && kk && (kk.computeBonesUsingShaders && ek._bonesComputationForcedToCPU && (kk.computeBonesUsingShaders = !1), kk.useBones && kk.computeBonesUsingShaders && kk.skeleton)) {
        const fk = kk.skeleton;
        if (fk.isUsingTextureForMatrices && ek.getUniformIndex("boneTextureInfo") > -1) {
          const ik = fk.getTransformMatrixTexture(kk);
          ek.setTexture("boneSampler", ik), ek.setFloat2("boneTextureInfo", fk._textureWidth, fk._textureHeight)
        } else {
          const Sk = fk.getTransformMatrices(kk);
          Sk && (ek.setMatrices("mBones", Sk), ik && kk.XF().prePassRenderer && kk.XF().prePassRenderer.getIndex(2) && (ik.previousBones[kk.uniqueId] || (ik.previousBones[kk.uniqueId] = Sk.slice()), ek.setMatrices("mPreviousBones", ik.previousBones[kk.uniqueId]), Dk = Sk, ik.previousBones[kk.uniqueId].set(Dk)))
        }
      }
    }

    function Ak(kk, ek, ik, Dk, fk) {
      let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      kk._bindLight(ek, ik, Dk, fk, Sk)
    }
    const jk = 4,
      sk = new WeakMap;

    function dk(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Sk = Math.min(ek.lightSources.length, fk);
      for (let bk = 0; bk < Sk; bk++) {
        Ak(ek.lightSources[bk], bk, kk, ik, "boolean" === typeof Dk ? Dk : Dk.SPECULARTERM, ek.receiveShadows)
      }
    }

    function Vk(kk, ek, ik, Dk) {
      ik.NUM_BONE_INFLUENCERS > 0 && (Dk.addCPUSkinningFallback(0, ek), kk.push("matricesIndices"), kk.push("matricesWeights"), ik.NUM_BONE_INFLUENCERS > 4 && (kk.push("matricesIndicesExtra"), kk.push("matricesWeightsExtra")))
    }

    function Fk(kk, ek) {
      (ek.INSTANCES || ek.THIN_INSTANCES) && Uk(kk, !!ek.PREPASS_VELOCITY), ek.INSTANCESCOLOR && kk.push("instanceColor")
    }

    function uk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fk = 0;
      for (let Sk = 0; Sk < ik && kk["LIGHT" + Sk]; Sk++) Sk > 0 && (fk = Dk + Sk, ek.addFallback(fk, "LIGHT" + Sk)), kk.SHADOWS || (kk["SHADOW" + Sk] && ek.addFallback(Dk, "SHADOW" + Sk), kk["SHADOWPCF" + Sk] && ek.addFallback(Dk, "SHADOWPCF" + Sk), kk["SHADOWPCSS" + Sk] && ek.addFallback(Dk, "SHADOWPCSS" + Sk), kk["SHADOWPOISSON" + Sk] && ek.addFallback(Dk, "SHADOWPOISSON" + Sk), kk["SHADOWESM" + Sk] && ek.addFallback(Dk, "SHADOWESM" + Sk), kk["SHADOWCLOSEESM" + Sk] && ek.addFallback(Dk, "SHADOWCLOSEESM" + Sk));
      return fk
    }

    function qk(kk, ek, ik, Dk, fk, Sk, bk) {
      let rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mk = arguments.length > 9 ? arguments[9] : void 0,
        Mk = arguments.length > 10 ? arguments[10] : void 0;
      if (bk._areMiscDirty) {
        bk.LOGARITHMICDEPTH = ik, bk.POINTSIZE = Dk, bk.FOG = fk && function(kk, ek) {
          return ek.fogEnabled && kk.applyFog && 0 !== ek.fogMode
        }(kk, ek), bk.NONUNIFORMSCALING = kk.nonUniformScaling, bk.ALPHATEST = Sk, bk.DECAL_AFTER_DETAIL = rk, bk.USE_VERTEX_PULLING = Pk, bk.RIGHT_HANDED = ek.useRightHandedSystem;
        const Kk = Pk ? mk?.geometry?.getIndexBuffer() : null,
          xk = !!mk && mk.isUnIndexed;
        bk.VERTEX_PULLING_USE_INDEX_BUFFER = !!Kk && !xk, bk.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Kk || xk) && Kk.is32Bits, bk.VERTEXOUTPUT_INVARIANT = !!Mk
      }
    }

    function Ik(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!kk.lightsEnabled || Dk) return !0;
      const fk = ek.lightSources,
        Sk = Math.min(fk.length, ik);
      for (let bk = 0; bk < Sk; bk++)
        if (!fk[bk].areLightTexturesReady()) return !1;
      return !0
    }

    function zk(kk, ek, ik, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ik._areLightsDirty) return ik._needNormals;
      const rk = Sk;
      Sk = function(kk, ek) {
        const ik = kk.JU().getCaps().maxUniformBuffersPerShaderStage;
        if (null == ik) return ek;
        const Dk = Math.max(ik - jk, 1);
        return Math.min(ek, Dk)
      }(kk, Sk);
      let Pk = 0;
      const mk = {
        needNormals: ik._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (kk.lightsEnabled && !bk) {
        ek.lightSources.length > Sk && Sk < rk && function(kk, ek, ik, fk) {
          let Sk = sk.get(kk);
          Sk || (Sk = new Set, sk.set(kk, Sk)), Sk.has(fk) || (Sk.add(fk), Dk.b.Warn(`maxSimultaneousLights is ${ek} but this engine supports at most ${ik} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${fk} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${fk+jk} uniform buffers, over the device limit of ${kk.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${ik}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${ik} or less to silence this warning.`))
        }(kk.JU(), rk, Sk, Math.min(ek.lightSources.length, rk));
        for (const Dk of ek.lightSources)
          if (vk(kk, ek, Dk, Pk, ik, fk, mk), Pk++, Pk === Sk) break
      }
      ik.SPECULARTERM = mk.specularEnabled, ik.SHADOWS = mk.shadowEnabled;
      const Mk = Math.max(Sk, ik.MAXLIGHTCOUNT || 0);
      for (let Dk = Pk; Dk < Mk; Dk++) void 0 !== ik["LIGHT" + Dk] && (ik["LIGHT" + Dk] = !1, ik["HEMILIGHT" + Dk] = !1, ik["POINTLIGHT" + Dk] = !1, ik["DIRLIGHT" + Dk] = !1, ik["SPOTLIGHT" + Dk] = !1, ik["AREALIGHT" + Dk] = !1, ik["CLUSTLIGHT" + Dk] = !1, ik["SHADOW" + Dk] = !1, ik["SHADOWCSM" + Dk] = !1, ik["SHADOWCSMDEBUG" + Dk] = !1, ik["SHADOWCSMNUM_CASCADES" + Dk] = !1, ik["SHADOWCSMUSESHADOWMAXZ" + Dk] = !1, ik["SHADOWCSMNOBLEND" + Dk] = !1, ik["SHADOWCSM_RIGHTHANDED" + Dk] = !1, ik["SHADOWPCF" + Dk] = !1, ik["SHADOWPCSS" + Dk] = !1, ik["SHADOWPOISSON" + Dk] = !1, ik["SHADOWESM" + Dk] = !1, ik["SHADOWCLOSEESM" + Dk] = !1, ik["SHADOWCUBE" + Dk] = !1, ik["SHADOWLOWQUALITY" + Dk] = !1, ik["SHADOWMEDIUMQUALITY" + Dk] = !1);
      ik.LIGHTCOUNT = Pk, ik.MAXLIGHTCOUNT = Sk;
      const Kk = kk.JU().getCaps();
      return void 0 === ik.SHADOWFLOAT && (mk.needRebuild = !0), ik.SHADOWFLOAT = mk.shadowEnabled && (Kk.textureFloatRender && Kk.textureFloatLinearFiltering || Kk.textureHalfFloatRender && Kk.textureHalfFloatLinearFiltering), ik.LIGHTMAPEXCLUDED = mk.lightmapMode, mk.needRebuild && ik.rebuild(), mk.needNormals
    }

    function Qk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (ek && rk.e.ReflectionTextureEnabled) {
        if (!ek.isReadyOrNotBlocking()) return !1;
        ik._needNormals = !0, ik.REFLECTION = !0, ik.GAMMAREFLECTION = ek.gammaSpace, ik.RGBDREFLECTION = ek.isRGBD, ik.LODINREFLECTIONALPHA = ek.lodLevelInAlpha, ik.LINEARSPECULARREFLECTION = ek.linearSpecularLOD, ik.USEIRRADIANCEMAP = !1, ik.LODBASEDMICROSFURACE = kk.JU().getCaps().textureLOD;
        const bk = kk.JU();
        switch (Dk && fk > 0 ? (ik.NUM_SAMPLES = "" + fk, bk._features.needTypeSuffixInShaderConstants && (ik.NUM_SAMPLES = ik.NUM_SAMPLES + "u"), ik.REALTIME_FILTERING = !0, kk.iblCdfGenerator && (ik.IBL_CDF_FILTERING = !0)) : ik.REALTIME_FILTERING = !1, ik.INVERTCUBICMAP = 6 === ek.coordinatesMode, ik.REFLECTIONMAP_3D = ek.isCube, ik.REFLECTIONMAP_OPPOSITEZ = ik.REFLECTIONMAP_3D && kk.useRightHandedSystem ? !ek.invertZ : ek.invertZ, ik.REFLECTIONMAP_CUBIC = !1, ik.REFLECTIONMAP_EXPLICIT = !1, ik.REFLECTIONMAP_PLANAR = !1, ik.REFLECTIONMAP_PROJECTION = !1, ik.REFLECTIONMAP_SKYBOX = !1, ik.REFLECTIONMAP_SPHERICAL = !1, ik.REFLECTIONMAP_EQUIRECTANGULAR = !1, ik.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ik.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ek.coordinatesMode) {
          case 0:
            ik.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            ik.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            ik.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            ik.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            ik.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            ik.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            ik.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            ik.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            ik.REFLECTIONMAP_CUBIC = !0, ik.USE_LOCAL_REFLECTIONMAP_CUBIC = !!ek.boundingBoxSize
        }
        5 !== ek.coordinatesMode && (ek.irradianceTexture ? (ik.USEIRRADIANCEMAP = !0, ik.USESPHERICALFROMREFLECTIONMAP = !1, ik.USESPHERICALINVERTEX = !1, ek.irradianceTexture._dominantDirection ? ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : ek.isCube && (ik.USESPHERICALFROMREFLECTIONMAP = !0, ik.USEIRRADIANCEMAP = !1, ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ik.USESPHERICALINVERTEX = Sk))
      } else ik.REFLECTION = !1, ik.REFLECTIONMAP_3D = !1, ik.REFLECTIONMAP_SPHERICAL = !1, ik.REFLECTIONMAP_PLANAR = !1, ik.REFLECTIONMAP_CUBIC = !1, ik.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, ik.REFLECTIONMAP_PROJECTION = !1, ik.REFLECTIONMAP_SKYBOX = !1, ik.REFLECTIONMAP_EXPLICIT = !1, ik.REFLECTIONMAP_EQUIRECTANGULAR = !1, ik.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ik.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ik.INVERTCUBICMAP = !1, ik.USESPHERICALFROMREFLECTIONMAP = !1, ik.USEIRRADIANCEMAP = !1, ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ik.USESPHERICALINVERTEX = !1, ik.REFLECTIONMAP_OPPOSITEZ = !1, ik.LODINREFLECTIONALPHA = !1, ik.GAMMAREFLECTION = !1, ik.RGBDREFLECTION = !1, ik.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function vk(kk, ek, ik, Dk, fk, bk, rk) {
      switch (rk.needNormals = !0, void 0 === fk["LIGHT" + Dk] && (rk.needRebuild = !0), fk["LIGHT" + Dk] = !0, fk["SPOTLIGHT" + Dk] = !1, fk["HEMILIGHT" + Dk] = !1, fk["POINTLIGHT" + Dk] = !1, fk["DIRLIGHT" + Dk] = !1, fk["AREALIGHT" + Dk] = !1, fk["CLUSTLIGHT" + Dk] = !1, ik.prepareLightSpecificDefines(fk, Dk), fk["LIGHT_FALLOFF_PHYSICAL" + Dk] = !1, fk["LIGHT_FALLOFF_GLTF" + Dk] = !1, fk["LIGHT_FALLOFF_STANDARD" + Dk] = !1, ik.falloffType) {
        case Sk.d.FALLOFF_GLTF:
          fk["LIGHT_FALLOFF_GLTF" + Dk] = !0;
          break;
        case Sk.d.FALLOFF_PHYSICAL:
          fk["LIGHT_FALLOFF_PHYSICAL" + Dk] = !0;
          break;
        case Sk.d.FALLOFF_STANDARD:
          fk["LIGHT_FALLOFF_STANDARD" + Dk] = !0
      }
      if (bk && !ik.specular.equalsFloats(0, 0, 0) && (rk.specularEnabled = !0), fk["SHADOW" + Dk] = !1, fk["SHADOWCSM" + Dk] = !1, fk["SHADOWCSMDEBUG" + Dk] = !1, fk["SHADOWCSMNUM_CASCADES" + Dk] = !1, fk["SHADOWCSMUSESHADOWMAXZ" + Dk] = !1, fk["SHADOWCSMNOBLEND" + Dk] = !1, fk["SHADOWCSM_RIGHTHANDED" + Dk] = !1, fk["SHADOWPCF" + Dk] = !1, fk["SHADOWPCSS" + Dk] = !1, fk["SHADOWPOISSON" + Dk] = !1, fk["SHADOWESM" + Dk] = !1, fk["SHADOWCLOSEESM" + Dk] = !1, fk["SHADOWCUBE" + Dk] = !1, fk["SHADOWLOWQUALITY" + Dk] = !1, fk["SHADOWMEDIUMQUALITY" + Dk] = !1, ek && ek.receiveShadows && kk.shadowsEnabled && ik.shadowEnabled) {
        const ek = ik.getShadowGenerator(kk.activeCamera) ?? ik.getShadowGenerator();
        if (ek) {
          const kk = ek.getShadowMap();
          kk && kk.renderList && kk.renderList.length > 0 && (rk.shadowEnabled = !0, ek.prepareDefines(fk, Dk))
        }
      }
      ik.lightmapMode != Sk.d.LIGHTMAP_DEFAULT ? (rk.lightmapMode = !0, fk["LIGHTMAPEXCLUDED" + Dk] = !0, fk["LIGHTMAPNOSPECULAR" + Dk] = ik.lightmapMode == Sk.d.LIGHTMAP_SHADOWSONLY) : (fk["LIGHTMAPEXCLUDED" + Dk] = !1, fk["LIGHTMAPNOSPECULAR" + Dk] = !1)
    }

    function Ek(kk, ek, ik, Dk, fk) {
      let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Pk = function(kk, ek) {
          let ik = !1;
          if (kk.activeCamera) {
            const Dk = ek.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              fk = ek.CAMERA_PERSPECTIVE ? 1 : 0,
              Sk = 1 === kk.activeCamera.mode ? 1 : 0,
              bk = 0 === kk.activeCamera.mode ? 1 : 0;
            (Dk ^ Sk || fk ^ bk) && (ek.CAMERA_ORTHOGRAPHIC = 1 === Sk, ek.CAMERA_PERSPECTIVE = 1 === bk, ik = !0)
          }
          return ik
        }(kk, Dk);
      !1 !== Sk && (Pk = (0, bk.k)(ik, kk, Dk)), Dk.DEPTHPREPASS !== !ek.getColorWrite() && (Dk.DEPTHPREPASS = !Dk.DEPTHPREPASS, Pk = !0), Dk.INSTANCES !== fk && (Dk.INSTANCES = fk, Pk = !0), Dk.THIN_INSTANCES !== rk && (Dk.THIN_INSTANCES = rk, Pk = !0), Pk && Dk.markAsUnprocessed()
    }
    const hk = 40,
      ak = 64,
      Wk = new WeakMap,
      tk = new WeakSet;

    function Xk(kk, ek, ik, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        rk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!ek._areAttributesDirty && ek._needNormals === ek._normals && ek._needUVs === ek._uvs) return !1;
      ek._normals = ek._needNormals, ek._uvs = ek._needUVs, ek.NORMAL = ek._needNormals && kk.isVerticesDataPresent("normal"), ek._needNormals && kk.isVerticesDataPresent("tangent") && (ek.TANGENT = !0);
      for (let Dk = 1; Dk <= 6; ++Dk) ek["UV" + Dk] = !!ek._needUVs && kk.isVerticesDataPresent(`uv${1===Dk?"":Dk}`);
      if (ik) {
        const ik = kk.useVertexColors && kk.isVerticesDataPresent("color");
        ek.VERTEXCOLOR = ik, ek.VERTEXALPHA = kk.hasVertexAlpha && ik && bk
      }
      return kk.isVerticesDataPresent("instanceColor") && (kk.hDk || kk.hasThinInstances) && (ek.INSTANCESCOLOR = !0), fk && function(kk, ek) {
        if (kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
          ek.NUM_BONE_INFLUENCERS = kk.numBoneInfluencers;
          const ik = void 0 !== ek.BONETEXTURE;
          if (kk.skeleton.isUsingTextureForMatrices && ik) ek.BONETEXTURE = !0;
          else {
            ek.BonesPerMesh = kk.skeleton.bones.length + 1, ek.BONETEXTURE = !ik && void 0;
            const fk = kk.XF(),
              Sk = fk.prePassRenderer;
            if (Sk && Sk.enabled) {
              const ik = -1 === Sk.excludedSkinnedMesh.indexOf(kk);
              ek.BONES_VELOCITY_ENABLED = ik
            }
            const bk = !0 === ek.MULTIVIEW,
              rk = 2 * ek.BonesPerMesh + (bk ? 1 : 0);
            if (Wk.get(kk.skeleton) !== rk) {
              Wk.set(kk.skeleton, rk);
              const ik = fk.JU().getCaps().maxVertexUniformVectors;
              if (ik && !tk.has(kk.skeleton)) {
                const fk = 4 * ek.BonesPerMesh,
                  Sk = bk ? ak : hk,
                  rk = Math.max(ik - Sk, 0);
                (fk > rk || bk && 3 * fk > ik) && (tk.add(kk.skeleton), Dk.b.Warn(`Skeleton "${kk.skeleton.name}": ${kk.skeleton.bones.length} bones stored as vertex uniforms use ${fk} of ~${rk} usable uniform vectors${bk?" (multiview)":""} on a device reporting ${ik}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else ek.NUM_BONE_INFLUENCERS = 0, ek.BonesPerMesh = 0, void 0 !== ek.BONETEXTURE && (ek.BONETEXTURE = !1)
      }(kk, ek), Sk && function(kk, ek) {
        const ik = kk.morphTargetManager;
        ik ? (ek.MORPHTARGETS_UV = ik.supportsUVs && ek.UV1, ek.MORPHTARGETS_UV2 = ik.supportsUV2s && ek.UV2, ek.MORPHTARGETS_TANGENT = ik.supportsTangents && ek.TANGENT, ek.MORPHTARGETS_NORMAL = ik.supportsNormals && ek.NORMAL, ek.MORPHTARGETS_POSITION = ik.supportsPositions, ek.MORPHTARGETS_COLOR = ik.supportsColors, ek.MORPHTARGETTEXTURE_HASUVS = ik.hasUVs, ek.MORPHTARGETTEXTURE_HASUV2S = ik.hasUV2s, ek.MORPHTARGETTEXTURE_HASTANGENTS = ik.hasTangents, ek.MORPHTARGETTEXTURE_HASNORMALS = ik.hasNormals, ek.MORPHTARGETTEXTURE_HASPOSITIONS = ik.hasPositions, ek.MORPHTARGETTEXTURE_HASCOLORS = ik.hasColors, ek.NUM_MORPH_INFLUENCERS = ik.numMaxInfluencers || ik.numInfluencers, ek.MORPHTARGETS = ek.NUM_MORPH_INFLUENCERS > 0, ek.MORPHTARGETS_TEXTURE = ik.isUsingTextureForTargets) : (ek.MORPHTARGETS_UV = !1, ek.MORPHTARGETS_UV2 = !1, ek.MORPHTARGETS_TANGENT = !1, ek.MORPHTARGETS_NORMAL = !1, ek.MORPHTARGETS_POSITION = !1, ek.MORPHTARGETS_COLOR = !1, ek.MORPHTARGETTEXTURE_HASUVS = !1, ek.MORPHTARGETTEXTURE_HASUV2S = !1, ek.MORPHTARGETTEXTURE_HASTANGENTS = !1, ek.MORPHTARGETTEXTURE_HASNORMALS = !1, ek.MORPHTARGETTEXTURE_HASPOSITIONS = !1, ek.MORPHTARGETTEXTURE_HAS_COLORS = !1, ek.MORPHTARGETS = !1, ek.NUM_MORPH_INFLUENCERS = 0)
      }(kk, ek), rk && function(kk, ek) {
        const ik = kk.bakedVertexAnimationManager;
        ek.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ik || !ik.isEnabled)
      }(kk, ek), !0
    }

    function Bk(kk, ek) {
      if (kk.activeCamera) {
        const ik = ek.MULTIVIEW;
        ek.MULTIVIEW = null !== kk.activeCamera.outputRenderTarget && kk.activeCamera.outputRenderTarget.getViewCount() > 1, ek.MULTIVIEW != ik && ek.markAsUnprocessed()
      }
    }

    function ck(kk, ek, ik) {
      const Dk = ek.ORDER_INDEPENDENT_TRANSPARENCY,
        fk = ek.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      ek.ORDER_INDEPENDENT_TRANSPARENCY = kk.useOrderIndependentTransparency && ik, ek.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !kk.JU().getCaps().textureFloatLinearFiltering, Dk === ek.ORDER_INDEPENDENT_TRANSPARENCY && fk === ek.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ek.markAsUnprocessed()
    }

    function Tk(kk, ek, ik) {
      const Dk = ek.PREPASS;
      if (!ek._arePrePassDirty) return;
      const fk = [{
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
      if (kk.prePassRenderer && kk.prePassRenderer.enabled && ik) {
        ek.PREPASS = !0, ek.SCENE_MRT_COUNT = kk.prePassRenderer.mrtCount, ek.PREPASS_NORMAL_WORLDSPACE = kk.prePassRenderer.generateNormalsInWorldSpace, ek.PREPASS_COLOR = !0, ek.PREPASS_COLOR_INDEX = 0;
        for (let ik = 0; ik < fk.length; ik++) {
          const Dk = kk.prePassRenderer.getIndex(fk[ik].type); - 1 !== Dk ? (ek[fk[ik].define] = !0, ek[fk[ik].index] = Dk) : ek[fk[ik].define] = !1
        }
      } else {
        ek.PREPASS = !1;
        for (let kk = 0; kk < fk.length; kk++) ek[fk[kk].define] = !1
      }
      ek.PREPASS != Dk && (ek.markAsUnprocessed(), ek.markAsImageProcessingDirty())
    }

    function Zk(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      fk && fk.push("Light" + kk), Sk || (ek.push("vLightData" + kk, "vLightDiffuse" + kk, "vLightSpecular" + kk, "vLightDirection" + kk, "vLightWidth" + kk, "vLightHeight" + kk, "vLightFalloff" + kk, "vLightGround" + kk, "vSliceData" + kk, "vSliceRanges" + kk, "lightMatrix" + kk, "shadowsInfo" + kk, "depthValues" + kk), ik.push("shadowTexture" + kk), ik.push("depthTexture" + kk), ek.push("viewFrustumZ" + kk, "cascadeBlendFactor" + kk, "lightSizeUVCorrection" + kk, "depthCorrection" + kk, "penumbraDarkness" + kk, "frustumLengths" + kk), Dk && (ik.push("projectionLightTexture" + kk), ek.push("textureProjectionMatrix" + kk)), bk && ik.push("iesLightTexture" + kk), Pk && ik.push("rectAreaLightEmissionTexture" + kk), rk && (ik.push("lightDataTexture" + kk), mk || ik.push("tileMaskTexture" + kk)))
    }

    function Ok(kk, ek, ik) {
      const Dk = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      ik && Dk.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), kk.push(...Dk);
      ek.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function gk(kk, ek, ik) {
      let Dk, fk, Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        bk = null;
      if (kk.uniformsNames) {
        const rk = kk;
        Dk = rk.uniformsNames, fk = rk.uniformBuffersNames, ek = rk.samplers, ik = rk.defines, Sk = rk.maxSimultaneousLights || 0, bk = rk.shaderLanguage ?? null
      } else Dk = kk, ek || (ek = []);
      for (let rk = 0; rk < Sk && ik["LIGHT" + rk]; rk++) Zk(rk, Dk, ek, ik["PROJECTEDLIGHTTEXTURE" + rk], fk, !1, ik["IESLIGHTTEXTURE" + rk], ik["CLUSTLIGHT" + rk], ik["RECTAREALIGHTEMISSIONTEXTURE" + rk], 1 === bk);
      ik.NUM_MORPH_INFLUENCERS && (Dk.push("morphTargetInfluences"), Dk.push("morphTargetCount")), ik.BAKED_VERTEX_ANIMATION_TEXTURE && (Dk.push("bakedVertexAnimationSettings"), Dk.push("bakedVertexAnimationTextureSizeInverted"), Dk.push("bakedVertexAnimationTime"), ek.push("bakedVertexAnimationTexture"))
    }

    function Gk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      kk.addUniform("vReflectionInfos", 2), kk.addUniform("reflectionMatrix", 16), ek && kk.addUniform("vReflectionMicrosurfaceInfos", 3), ik && (kk.addUniform("vReflectionPosition", 3), kk.addUniform("vReflectionSize", 3)), Dk && (kk.addUniform("vReflectionFilteringInfo", 2), kk.addUniform("vReflectionDominantDirection", 3)), Sk && kk.addUniform("vReflectionColor", 3), fk && (kk.addUniform("vSphericalL00", 3), kk.addUniform("vSphericalL1_1", 3), kk.addUniform("vSphericalL10", 3), kk.addUniform("vSphericalL11", 3), kk.addUniform("vSphericalL2_2", 3), kk.addUniform("vSphericalL2_1", 3), kk.addUniform("vSphericalL20", 3), kk.addUniform("vSphericalL21", 3), kk.addUniform("vSphericalL22", 3), kk.addUniform("vSphericalX", 3), kk.addUniform("vSphericalY", 3), kk.addUniform("vSphericalZ", 3), kk.addUniform("vSphericalXX_ZZ", 3), kk.addUniform("vSphericalYY_ZZ", 3), kk.addUniform("vSphericalZZ", 3), kk.addUniform("vSphericalXY", 3), kk.addUniform("vSphericalYZ", 3), kk.addUniform("vSphericalZX", 3))
    }
  },
  39937: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(36698),
      fk = ik(39861);
    class Sk extends fk.e {
      constructor(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(kk, ek, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Dk.b, this._storeEffectOnSubMeshes = ik
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(kk, ek) {
        return !!kk && (!this._storeEffectOnSubMeshes || (!kk.TY || 0 === kk.TY.length || this.isReadyForSubMesh(kk, kk.TY[0], ek)))
      }
      _isReadyForSubMesh(kk) {
        const ek = kk.materialDefines;
        return !(this.checkReadyOnEveryCall || !kk.effect || !ek || ek._renderId !== this.XF().getRenderId())
      }
      bindOnlyWorldMatrix(kk) {
        this._activeEffect.setMatrix("world", kk)
      }
      bindOnlyNormalMatrix(kk) {
        this._activeEffect.setMatrix("normalMatrix", kk)
      }
      bind(kk, ek) {
        ek && this.bindForSubMesh(kk, ek, ek.TY[0])
      }
      _afterBind(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(kk, ek, ik), this.XF()._cachedEffect = ek, ik ? ik._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return ik._drawWrapper._forceRebindOnNextCall || kk.isCachedMaterialInvalid(this, ek, Dk)
      }
      dispose(kk, ek, ik) {
        this._activeEffect = void 0, super.dispose(kk, ek, ik)
      }
    }
  },
  39964: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      f: () => fk
    });
    const Dk = new WeakMap;

    function fk(kk) {
      const ek = kk.getVertexBuffers();
      if (!ek) return null;
      let ik = Dk.get(kk);
      if (ik) {
        let kk = !1;
        for (const Dk in ek)
          if (!ik.has(Dk)) {
            kk = !0;
            break
          } if (!kk) return ik
      } else ik = new Map, Dk.set(kk, ik);
      for (const Dk in ek) {
        const kk = ek[Dk];
        if (kk) {
          const ek = kk.byteOffset,
            fk = kk.byteStride,
            Sk = kk.type,
            bk = kk.normalized;
          ik.set(Dk, {
            offset: ek,
            stride: fk,
            type: Sk,
            normalized: bk
          })
        }
      }
      return ik
    }

    function Sk(kk, ek) {
      ek.forEach(((ek, ik) => {
        const Dk = `vp_${ik}_info`;
        kk.setFloat4(Dk, ek.offset, ek.stride, ek.type, ek.normalized ? 1 : 0)
      }))
    }
  },
  39901: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      f: () => Pk
    });
    var Dk = ik(39566),
      fk = ik(36698),
      Sk = ik(39570);
    let bk = (() => {
      var kk;
      let ek, ik, fk = [];
      return kk = class {
        static extractMinAndMaxIndexed(kk, ek, ik, Dk, fk, Sk) {
          for (let bk = ik; bk < ik + Dk; bk++) {
            const ik = 3 * ek[bk],
              Dk = kk[ik],
              rk = kk[ik + 1],
              Pk = kk[ik + 2];
            fk.minimizeInPlaceFromFloats(Dk, rk, Pk), Sk.maximizeInPlaceFromFloats(Dk, rk, Pk)
          }
        }
        static extractMinAndMax(kk, ek, ik, Dk, fk, Sk) {
          for (let bk = ek, rk = ek * Dk; bk < ek + ik; bk++, rk += Dk) {
            const ek = kk[rk],
              ik = kk[rk + 1],
              Dk = kk[rk + 2];
            fk.minimizeInPlaceFromFloats(ek, ik, Dk), Sk.maximizeInPlaceFromFloats(ek, ik, Dk)
          }
        }
      }, (() => {
        const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [Sk.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], ik = [Sk.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Dk.d)(kk, null, ek, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: kk => "extractMinAndMaxIndexed" in kk,
            get: kk => kk.extractMinAndMaxIndexed
          },
          metadata: bk
        }, null, fk), (0, Dk.d)(kk, null, ik, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: kk => "extractMinAndMax" in kk,
            get: kk => kk.extractMinAndMax
          },
          metadata: bk
        }, null, fk), bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bk
        }), (0, Dk.e)(kk, fk)
      })(), kk
    })();

    function rk(kk, ek, ik, Dk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const rk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Pk = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return bk.extractMinAndMaxIndexed(kk, ek, ik, Dk, rk, Pk), Sk && (rk.x -= rk.x * Sk.x + Sk.y, rk.y -= rk.y * Sk.x + Sk.y, rk.z -= rk.z * Sk.x + Sk.y, Pk.x += Pk.x * Sk.x + Sk.y, Pk.y += Pk.y * Sk.x + Sk.y, Pk.z += Pk.z * Sk.x + Sk.y), {
        minimum: rk,
        maximum: Pk
      }
    }

    function Pk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Sk = arguments.length > 4 ? arguments[4] : void 0;
      const rk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Pk = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Sk || (Sk = 3), bk.extractMinAndMax(kk, ek, ik, Sk, rk, Pk), Dk && (rk.x -= rk.x * Dk.x + Dk.y, rk.y -= rk.y * Dk.x + Dk.y, rk.z -= rk.z * Dk.x + Dk.y, Pk.x += Pk.x * Dk.x + Dk.y, Pk.y += Pk.y * Dk.x + Dk.y, Pk.z += Pk.z * Dk.x + Dk.y), {
        minimum: rk,
        maximum: Pk
      }
    }
  },
  39870: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk
    });
    var Dk, fk = ik(39708),
      Sk = ik(39879),
      bk = ik(39887),
      rk = ik(39901),
      Pk = ik(39906),
      mk = ik(39447);
    class Mk {
      get materialDefines() {
        const kk = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof kk ? null : kk
      }
      set materialDefines(kk) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = kk
      }
      _getDrawWrapper(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        kk = kk ?? this._engine.currentRenderPassId;
        let ik = this._drawWrappers[kk];
        return !ik && ek && (this._drawWrappers[kk] = ik = new Pk.e(this._mesh.XF().JU())), ik
      }
      _removeDrawWrapper(kk) {
        let ek = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[kk]?.dispose(ek), this._drawWrappers[kk] = void 0
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
      _setMainDrawWrapperOverride(kk) {
        this._mainDrawWrapperOverride = kk
      }
      setEffect(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const fk = this._drawWrapper;
        fk.setEffect(kk, ek, Dk), void 0 !== ik && (fk.materialContext = ik), kk || (fk.defines = null, fk.materialContext = void 0)
      }
      resetDrawCache(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== kk) return void this._removeDrawWrapper(kk, !0, ek);
          for (const kk of this._drawWrappers) kk?.dispose(ek)
        }
        this._drawWrappers = []
      }
      static AddToMesh(kk, ek, ik, Dk, fk, Sk, bk) {
        return new Mk(kk, ek, ik, Dk, fk, Sk, bk, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(kk, ek, ik, Dk, fk, Sk, bk) {
        let rk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Pk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = kk, this.verticesStart = ek, this.verticesCount = ik, this.indexStart = Dk, this.indexCount = fk, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Sk, this._renderingMesh = bk || Sk, Pk && Sk.TY.push(this), this._engine = this._mesh.XF().JU(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Sk.TY.length - 1, rk && (this.refreshBoundingInfo(), Sk.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      hq() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.hq() : this._boundingInfo
      }
      setBoundingInfo(kk) {
        return this._boundingInfo = kk, this
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
        const kk = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return kk || this._renderingMesh
      }
      fH() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ek = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!ek) return kk && this._mesh.XF()._hasDefaultMaterial ? this._mesh.XF().defaultMaterial : null;
        if (this._isMultiMaterial(ek)) {
          const kk = ek.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== kk && (this._currentMaterial = kk, this.resetDrawCache()), kk
        }
        return ek
      }
      _isMultiMaterial(kk) {
        return void 0 !== kk.getSubMaterial
      }
      refreshBoundingInfo() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (kk || (kk = this._renderingMesh.getVerticesData(fk.e.PositionKind)), !kk) return this._boundingInfo = this._mesh.hq(), this;
        const ek = this._renderingMesh.oik();
        let ik;
        if (0 === this.indexStart && this.indexCount === ek.length) {
          const kk = this._renderingMesh.hq();
          ik = {
            minimum: kk.minimum.clone(),
            maximum: kk.maximum.clone()
          }
        } else ik = (0, rk.d)(kk, ek, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(ik.minimum, ik.maximum) : this._boundingInfo = new bk.b(ik.minimum, ik.maximum), this
      }
      _checkCollision(kk) {
        return this.hq()._checkCollision(kk)
      }
      updateBoundingInfo(kk) {
        let ek = this.hq();
        return ek || (this.refreshBoundingInfo(), ek = this.hq()), ek && ek.update(kk), this
      }
      isInFrustum(kk) {
        const ek = this.hq();
        return !!ek && ek.isInFrustum(kk, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(kk) {
        const ek = this.hq();
        return !!ek && ek.isCompletelyInFrustum(kk)
      }
      render(kk) {
        return this._renderingMesh.render(this, kk, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(kk, ek) {
        if (!this._linesIndexBuffer) {
          const ik = 6 * Math.floor(this.indexCount / 3),
            Dk = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ik) : new Uint16Array(ik);
          let fk = 0;
          if (0 === kk.length)
            for (let kk = this.indexStart; kk < this.indexStart + this.indexCount; kk += 3) Dk[fk++] = kk, Dk[fk++] = kk + 1, Dk[fk++] = kk + 1, Dk[fk++] = kk + 2, Dk[fk++] = kk + 2, Dk[fk++] = kk;
          else
            for (let ek = this.indexStart; ek < this.indexStart + this.indexCount; ek += 3) Dk[fk++] = kk[ek], Dk[fk++] = kk[ek + 1], Dk[fk++] = kk[ek + 1], Dk[fk++] = kk[ek + 2], Dk[fk++] = kk[ek + 2], Dk[fk++] = kk[ek];
          this._linesIndexBuffer = ek.createIndexBuffer(Dk), this._linesIndexCount = Dk.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(kk) {
        const ek = this.hq();
        return !!ek && kk.intersectsBox(ek.boundingBox)
      }
      intersects(kk, ek, ik, Dk, fk) {
        const Sk = this.fH();
        if (!Sk) return null;
        let bk = 3,
          rk = !1;
        switch (Sk.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            bk = 1, rk = !0
        }
        return 4 === Sk.fillMode ? ik.length ? this._intersectLines(kk, ek, ik, this._mesh.intersectionThreshold, Dk) : this._intersectUnIndexedLines(kk, ek, ik, this._mesh.intersectionThreshold, Dk) : !ik.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(kk, ek, ik, Dk, fk) : this._intersectTriangles(kk, ek, ik, bk, rk, Dk, fk)
      }
      _intersectLines(kk, ek, ik, Dk, fk) {
        let bk = null;
        for (let rk = this.indexStart; rk < this.indexStart + this.indexCount; rk += 2) {
          const Pk = ek[ik[rk]],
            mk = ek[ik[rk + 1]],
            Mk = kk.intersectionSegment(Pk, mk, Dk);
          if (!(Mk < 0) && ((fk || !bk || Mk < bk.distance) && (bk = new Sk.c(null, null, Mk), bk.faceId = rk / 2, fk))) break
        }
        return bk
      }
      _intersectUnIndexedLines(kk, ek, ik, Dk, fk) {
        let bk = null;
        for (let rk = this.verticesStart; rk < this.verticesStart + this.verticesCount; rk += 2) {
          const ik = ek[rk],
            Pk = ek[rk + 1],
            mk = kk.intersectionSegment(ik, Pk, Dk);
          if (!(mk < 0) && ((fk || !bk || mk < bk.distance) && (bk = new Sk.c(null, null, mk), bk.faceId = rk / 2, fk))) break
        }
        return bk
      }
      _intersectTriangles(kk, ek, ik, Dk, fk, Sk, bk) {
        let rk = null,
          Pk = -1;
        for (let mk = this.indexStart; mk < this.indexStart + this.indexCount - (3 - Dk); mk += Dk) {
          Pk++;
          const Dk = ik[mk],
            Mk = ik[mk + 1],
            Kk = ik[mk + 2];
          if (fk && 4294967295 === Kk) {
            mk += 2;
            continue
          }
          const xk = ek[Dk],
            nk = ek[Mk],
            Uk = ek[Kk];
          if (!xk || !nk || !Uk) continue;
          if (bk && !bk(xk, nk, Uk, kk, Dk, Mk, Kk)) continue;
          const Hk = kk.intersectsTriangle(xk, nk, Uk);
          if (Hk) {
            if (Hk.distance < 0) continue;
            if ((Sk || !rk || Hk.distance < rk.distance) && (rk = Hk, rk.faceId = Pk, Sk)) break
          }
        }
        return rk
      }
      _intersectUnIndexedTriangles(kk, ek, ik, Dk, fk) {
        let Sk = null;
        for (let bk = this.verticesStart; bk < this.verticesStart + this.verticesCount; bk += 3) {
          const ik = ek[bk],
            rk = ek[bk + 1],
            Pk = ek[bk + 2];
          if (fk && !fk(ik, rk, Pk, kk, -1, -1, -1)) continue;
          const mk = kk.intersectsTriangle(ik, rk, Pk);
          if (mk) {
            if (mk.distance < 0) continue;
            if ((Dk || !Sk || mk.distance < Sk.distance) && (Sk = mk, Sk.faceId = bk / 3, Dk)) break
          }
        }
        return Sk
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(kk, ek) {
        const ik = new Mk(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, kk, ek, !1);
        if (!this.IsGlobal) {
          const kk = this.hq();
          if (!kk) return ik;
          ik._boundingInfo = new bk.b(kk.minimum, kk.maximum)
        }
        return ik
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.XF().JU()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const ek = this._mesh.TY.indexOf(this);
        this._mesh.TY.splice(ek, 1), this.resetDrawCache(void 0, kk)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(kk, ek, ik, Dk, fk) {
        let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = Number.MAX_VALUE,
          rk = -Number.MAX_VALUE;
        const Pk = (fk || Dk).oik();
        for (let mk = ek; mk < ek + ik; mk++) {
          const kk = Pk[mk];
          kk < bk && (bk = kk), kk > rk && (rk = kk)
        }
        return new Mk(kk, bk, rk - bk + 1, ek, ik, Dk, fk, Sk)
      }
    }(Dk = Mk.prototype).projectToRef ?? (Dk.projectToRef = (0, mk.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);