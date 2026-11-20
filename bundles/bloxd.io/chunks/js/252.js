export const id = 252;
export const ids = [252];
export const modules = {
  39709: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk) {
        this.bu = kk, this.bv = Fk, this.distance = Bk, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39721: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(36768),
      tk = Bk(36758),
      ak = Bk(36764);
    class Xk {
      constructor(kk, Fk, Bk) {
        this.vectors = (0, Rk.c)(8, tk.s.Zero), this.center = tk.s.Zero(), this.centerWorld = tk.s.Zero(), this.extendSize = tk.s.Zero(), this.extendSizeWorld = tk.s.Zero(), this.directions = (0, Rk.c)(3, tk.s.Zero), this.vectorsWorld = (0, Rk.c)(8, tk.s.Zero), this.minimumWorld = tk.s.Zero(), this.maximumWorld = tk.s.Zero(), this.minimum = tk.s.Zero(), this.maximum = tk.s.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(kk, Fk, Bk)
      }
      reConstruct(kk, Fk, Bk) {
        const Rk = kk.x,
          ak = kk.y,
          Xk = kk.z,
          bk = Fk.x,
          wk = Fk.y,
          dk = Fk.z,
          sk = this.vectors;
        this.minimum.E1(Rk, ak, Xk), this.maximum.E1(bk, wk, dk), sk[0].E1(Rk, ak, Xk), sk[1].E1(bk, wk, dk), sk[2].E1(bk, ak, Xk), sk[3].E1(Rk, wk, Xk), sk[4].E1(Rk, ak, dk), sk[5].E1(bk, wk, Xk), sk[6].E1(Rk, wk, dk), sk[7].E1(bk, ak, dk), Fk.addToRef(kk, this.center).scaleInPlace(.5), Fk.subtractToRef(kk, this.extendSize).scaleInPlace(.5), this._worldMatrix = Bk || tk.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(kk) {
        const Fk = Xk._TmpVector3,
          Bk = this.maximum.subtractToRef(this.minimum, Fk[0]),
          Rk = Bk.length();
        Bk.normalizeFromLength(Rk);
        const tk = Rk * kk,
          ak = Bk.scaleInPlace(.5 * tk),
          bk = this.center.subtractToRef(ak, Fk[1]),
          wk = this.center.addToRef(ak, Fk[2]);
        return this.reConstruct(bk, wk, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(kk) {
        const Fk = this.minimumWorld,
          Bk = this.maximumWorld,
          Rk = this.directions,
          ak = this.vectorsWorld,
          Xk = this.vectors;
        if (kk.isIdentity()) {
          Fk.sBk(this.minimum), Bk.sBk(this.maximum);
          for (let kk = 0; kk < 8; ++kk) ak[kk].sBk(Xk[kk]);
          this.extendSizeWorld.sBk(this.extendSize), this.centerWorld.sBk(this.center)
        } else {
          Fk.J_(Number.MAX_VALUE), Bk.J_(-Number.MAX_VALUE);
          for (let Rk = 0; Rk < 8; ++Rk) {
            const bk = ak[Rk];
            tk.s.TransformCoordinatesToRef(Xk[Rk], kk, bk), Fk.minimizeInPlace(bk), Bk.maximizeInPlace(bk)
          }
          Bk.subtractToRef(Fk, this.extendSizeWorld).scaleInPlace(.5), Bk.addToRef(Fk, this.centerWorld).scaleInPlace(.5)
        }
        tk.s.FromArrayToRef(kk.m, 0, Rk[0]), tk.s.FromArrayToRef(kk.m, 4, Rk[1]), tk.s.FromArrayToRef(kk.m, 8, Rk[2]), this._worldMatrix = kk
      }
      isInFrustum(kk) {
        return Xk.IsInFrustum(this.vectorsWorld, kk)
      }
      isCompletelyInFrustum(kk) {
        return Xk.IsCompletelyInFrustum(this.vectorsWorld, kk)
      }
      intersectsPoint(kk) {
        const Fk = this.minimumWorld,
          Bk = this.maximumWorld,
          Rk = Fk.x,
          tk = Fk.y,
          Xk = Fk.z,
          bk = Bk.x,
          wk = Bk.y,
          dk = Bk.z,
          sk = kk.x,
          Vk = kk.y,
          Jk = kk.z,
          Ak = -ak.c;
        return !(bk - sk < Ak || Ak > sk - Rk) && (!(wk - Vk < Ak || Ak > Vk - tk) && !(dk - Jk < Ak || Ak > Jk - Xk))
      }
      intersectsSphere(kk) {
        return Xk.IntersectsSphere(this.minimumWorld, this.maximumWorld, kk.centerWorld, kk.radiusWorld)
      }
      intersectsMinMax(kk, Fk) {
        const Bk = this.minimumWorld,
          Rk = this.maximumWorld,
          tk = Bk.x,
          ak = Bk.y,
          Xk = Bk.z,
          bk = Rk.x,
          wk = Rk.y,
          dk = Rk.z,
          sk = kk.x,
          Vk = kk.y,
          Jk = kk.z,
          Ak = Fk.x,
          ek = Fk.y,
          yk = Fk.z;
        return !(bk < sk || tk > Ak) && (!(wk < Vk || ak > ek) && !(dk < Jk || Xk > yk))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(kk, Fk) {
        return kk.intersectsMinMax(Fk.minimumWorld, Fk.maximumWorld)
      }
      static IntersectsSphere(kk, Fk, Bk, Rk) {
        const ak = Xk._TmpVector3[0];
        tk.s.ClampToRef(Bk, kk, Fk, ak);
        return tk.s.DistanceSquared(Bk, ak) <= Rk * Rk
      }
      static IsCompletelyInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; ++Bk) {
          const Rk = Fk[Bk];
          for (let Fk = 0; Fk < 8; ++Fk)
            if (Rk.dotCoordinate(kk[Fk]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; ++Bk) {
          let Rk = !0;
          const tk = Fk[Bk];
          for (let Fk = 0; Fk < 8; ++Fk)
            if (tk.dotCoordinate(kk[Fk]) >= 0) {
              Rk = !1;
              break
            } if (Rk) return !1
        }
        return !0
      }
    }
    Xk._TmpVector3 = (0, Rk.c)(3, tk.s.Zero)
  },
  39716: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk
    });
    var Rk = Bk(36768),
      tk = Bk(36758),
      ak = Bk(39721);
    class Xk {
      constructor(kk, Fk, Bk) {
        this.center = tk.s.Zero(), this.centerWorld = tk.s.Zero(), this.minimum = tk.s.Zero(), this.maximum = tk.s.Zero(), this.reConstruct(kk, Fk, Bk)
      }
      reConstruct(kk, Fk, Bk) {
        this.minimum.sBk(kk), this.maximum.sBk(Fk);
        const Rk = tk.s.Distance(kk, Fk);
        Fk.addToRef(kk, this.center).scaleInPlace(.5), this.radius = .5 * Rk, this._update(Bk || tk.c.IdentityReadOnly)
      }
      scale(kk) {
        const Fk = Xk._TmpVector3,
          Bk = this.maximum.subtractToRef(this.minimum, Fk[0]),
          Rk = Bk.length();
        Bk.normalizeFromLength(Rk);
        const tk = Rk * kk,
          ak = Bk.scaleInPlace(.5 * tk),
          bk = this.center.subtractToRef(ak, Fk[1]),
          wk = this.center.addToRef(ak, Fk[2]);
        return this.reConstruct(bk, wk, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(kk) {
        if (kk.isIdentity()) this.centerWorld.sBk(this.center), this.radiusWorld = this.radius;
        else {
          tk.s.TransformCoordinatesToRef(this.center, kk, this.centerWorld);
          const Fk = Xk._TmpVector3[0];
          tk.s.TransformNormalFromFloatsToRef(1, 1, 1, kk, Fk), this.radiusWorld = Math.max(Math.abs(Fk.x), Math.abs(Fk.y), Math.abs(Fk.z)) * this.radius
        }
      }
      isInFrustum(kk) {
        const Fk = this.centerWorld,
          Bk = this.radiusWorld;
        for (let Rk = 0; Rk < 6; Rk++)
          if (kk[Rk].dotCoordinate(Fk) <= -Bk) return !1;
        return !0
      }
      isCenterInFrustum(kk) {
        const Fk = this.centerWorld;
        for (let Bk = 0; Bk < 6; Bk++)
          if (kk[Bk].dotCoordinate(Fk) < 0) return !1;
        return !0
      }
      intersectsPoint(kk) {
        const Fk = tk.s.DistanceSquared(this.centerWorld, kk);
        return !(this.radiusWorld * this.radiusWorld < Fk)
      }
      static Intersects(kk, Fk) {
        const Bk = tk.s.DistanceSquared(kk.centerWorld, Fk.centerWorld),
          Rk = kk.radiusWorld + Fk.radiusWorld;
        return !(Rk * Rk < Bk)
      }
      static CreateFromCenterAndRadius(kk, Fk, Bk) {
        this._TmpVector3[0].sBk(kk), this._TmpVector3[1].E1(0, 0, Fk), this._TmpVector3[2].sBk(kk), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].wRk(this._TmpVector3[1]);
        const Rk = new Xk(this._TmpVector3[0], this._TmpVector3[2]);
        return Rk._worldMatrix = Bk || tk.c.Identity(), Rk
      }
    }
    Xk._TmpVector3 = (0, Rk.c)(3, tk.s.Zero);
    const bk = {
        min: 0,
        max: 0
      },
      wk = {
        min: 0,
        max: 0
      },
      dk = (kk, Fk, Bk) => {
        const Rk = tk.s.Dot(Fk.centerWorld, kk),
          ak = Math.abs(tk.s.Dot(Fk.directions[0], kk)) * Fk.extendSize.x + Math.abs(tk.s.Dot(Fk.directions[1], kk)) * Fk.extendSize.y + Math.abs(tk.s.Dot(Fk.directions[2], kk)) * Fk.extendSize.z;
        Bk.min = Rk - ak, Bk.max = Rk + ak
      },
      sk = (kk, Fk, Bk) => (dk(kk, Fk, bk), dk(kk, Bk, wk), !(bk.min > wk.max || wk.min > bk.max));
    class Vk {
      constructor(kk, Fk, Bk) {
        this._isLocked = !1, this.boundingBox = new ak.d(kk, Fk, Bk), this.JRk = new Xk(kk, Fk, Bk)
      }
      reConstruct(kk, Fk, Bk) {
        this.boundingBox.reConstruct(kk, Fk, Bk), this.JRk.reConstruct(kk, Fk, Bk)
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
        this._isLocked || (this.boundingBox._update(kk), this.JRk._update(kk))
      }
      centerOn(kk, Fk) {
        const Bk = Vk._TmpVector3[0].sBk(kk).wRk(Fk),
          Rk = Vk._TmpVector3[1].sBk(kk).addInPlace(Fk);
        return this.boundingBox.reConstruct(Bk, Rk, this.boundingBox.getWorldMatrix()), this.JRk.reConstruct(Bk, Rk, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(kk) {
        const Fk = tk.s.Minimize(this.minimum, kk),
          Bk = tk.s.Maximize(this.maximum, kk);
        return this.reConstruct(Fk, Bk, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(kk) {
        const Fk = tk.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Fk);
        const Bk = tk.l.Qe[0];
        return tk.s.TransformCoordinatesToRef(kk.boundingBox.minimumWorld, Fk, Bk), this.encapsulate(Bk), tk.s.TransformCoordinatesToRef(kk.boundingBox.maximumWorld, Fk, Bk), this.encapsulate(Bk), this
      }
      scale(kk) {
        return this.boundingBox.scale(kk), this.JRk.scale(kk), this
      }
      isInFrustum(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Fk || 3 === Fk) && this.JRk.isCenterInFrustum(kk)) return !0;
        if (!this.JRk.isInFrustum(kk)) return !1;
        return !(1 !== Fk && 3 !== Fk) || this.boundingBox.isInFrustum(kk)
      }
      get diagonalLength() {
        const kk = this.boundingBox;
        return kk.maximumWorld.subtractToRef(kk.minimumWorld, Vk._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(kk) {
        return this.boundingBox.isCompletelyInFrustum(kk)
      }
      _checkCollision(kk) {
        return kk._canDoCollision(this.JRk.centerWorld, this.JRk.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(kk) {
        return !!this.JRk.centerWorld && (!!this.JRk.intersectsPoint(kk) && !!this.boundingBox.intersectsPoint(kk))
      }
      intersects(kk, Fk) {
        if (!Xk.Intersects(this.JRk, kk.JRk)) return !1;
        if (!ak.d.Intersects(this.boundingBox, kk.boundingBox)) return !1;
        if (!Fk) return !0;
        const Bk = this.boundingBox,
          Rk = kk.boundingBox;
        return !!sk(Bk.directions[0], Bk, Rk) && (!!sk(Bk.directions[1], Bk, Rk) && (!!sk(Bk.directions[2], Bk, Rk) && (!!sk(Rk.directions[0], Bk, Rk) && (!!sk(Rk.directions[1], Bk, Rk) && (!!sk(Rk.directions[2], Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[0], Rk.directions[0]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[0], Rk.directions[1]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[0], Rk.directions[2]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[1], Rk.directions[0]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[1], Rk.directions[1]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[1], Rk.directions[2]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[2], Rk.directions[0]), Bk, Rk) && (!!sk(tk.s.Cross(Bk.directions[2], Rk.directions[1]), Bk, Rk) && !!sk(tk.s.Cross(Bk.directions[2], Rk.directions[2]), Bk, Rk))))))))))))))
      }
    }
    Vk._TmpVector3 = (0, Rk.c)(2, tk.s.Zero)
  },
  39741: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      e: () => wk,
      g: () => bk,
      i: () => Xk
    });
    var Rk = Bk(39553),
      tk = Bk(36758);

    function ak(kk) {
      -1 === kk.indexOf("vClipPlane") && kk.push("vClipPlane"), -1 === kk.indexOf("vClipPlane2") && kk.push("vClipPlane2"), -1 === kk.indexOf("vClipPlane3") && kk.push("vClipPlane3"), -1 === kk.indexOf("vClipPlane4") && kk.push("vClipPlane4"), -1 === kk.indexOf("vClipPlane5") && kk.push("vClipPlane5"), -1 === kk.indexOf("vClipPlane6") && kk.push("vClipPlane6")
    }

    function Xk(kk, Fk, Bk) {
      const Rk = !!(kk.clipPlane ?? Fk.clipPlane),
        tk = !!(kk.clipPlane2 ?? Fk.clipPlane2),
        ak = !!(kk.clipPlane3 ?? Fk.clipPlane3),
        Xk = !!(kk.clipPlane4 ?? Fk.clipPlane4),
        bk = !!(kk.clipPlane5 ?? Fk.clipPlane5),
        wk = !!(kk.clipPlane6 ?? Fk.clipPlane6);
      Rk && Bk.push("#define CLIPPLANE"), tk && Bk.push("#define CLIPPLANE2"), ak && Bk.push("#define CLIPPLANE3"), Xk && Bk.push("#define CLIPPLANE4"), bk && Bk.push("#define CLIPPLANE5"), wk && Bk.push("#define CLIPPLANE6")
    }

    function bk(kk, Fk, Bk) {
      let Rk = !1;
      const tk = !!(kk.clipPlane ?? Fk.clipPlane),
        ak = !!(kk.clipPlane2 ?? Fk.clipPlane2),
        Xk = !!(kk.clipPlane3 ?? Fk.clipPlane3),
        bk = !!(kk.clipPlane4 ?? Fk.clipPlane4),
        wk = !!(kk.clipPlane5 ?? Fk.clipPlane5),
        dk = !!(kk.clipPlane6 ?? Fk.clipPlane6);
      return Bk.CLIPPLANE !== tk && (Bk.CLIPPLANE = tk, Rk = !0), Bk.CLIPPLANE2 !== ak && (Bk.CLIPPLANE2 = ak, Rk = !0), Bk.CLIPPLANE3 !== Xk && (Bk.CLIPPLANE3 = Xk, Rk = !0), Bk.CLIPPLANE4 !== bk && (Bk.CLIPPLANE4 = bk, Rk = !0), Bk.CLIPPLANE5 !== wk && (Bk.CLIPPLANE5 = wk, Rk = !0), Bk.CLIPPLANE6 !== dk && (Bk.CLIPPLANE6 = dk, Rk = !0), Rk
    }

    function wk(kk, Fk, Bk) {
      let Rk = Fk.clipPlane ?? Bk.clipPlane;
      dk(kk, "vClipPlane", Rk), Rk = Fk.clipPlane2 ?? Bk.clipPlane2, dk(kk, "vClipPlane2", Rk), Rk = Fk.clipPlane3 ?? Bk.clipPlane3, dk(kk, "vClipPlane3", Rk), Rk = Fk.clipPlane4 ?? Bk.clipPlane4, dk(kk, "vClipPlane4", Rk), Rk = Fk.clipPlane5 ?? Bk.clipPlane5, dk(kk, "vClipPlane5", Rk), Rk = Fk.clipPlane6 ?? Bk.clipPlane6, dk(kk, "vClipPlane6", Rk)
    }

    function dk(kk, Fk, Bk) {
      if (Bk) {
        const ak = Rk.e.XN()?.floatingOriginOffset || tk.s.ZeroReadOnly;
        kk.setFloat4(Fk, Bk.normal.x, Bk.normal.y, Bk.normal.z, Bk.d + tk.s.Dot(Bk.normal, ak))
      }
    }
  },
  39762: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    class Rk {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(kk, Fk) {
        this._defines[kk] || (kk < this._currentRank && (this._currentRank = kk), kk > this._maxRank && (this._maxRank = kk), this._defines[kk] = new Array), this._defines[kk].push(Fk)
      }
      addCPUSkinningFallback(kk, Fk) {
        this._mesh = Fk, kk < this._currentRank && (this._currentRank = kk), kk > this._maxRank && (this._maxRank = kk)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(kk, Fk) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, kk = kk.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Fk._bonesComputationForcedToCPU = !0;
          const Bk = this._mesh.XN();
          for (let kk = 0; kk < Bk.meshes.length; kk++) {
            const Rk = Bk.meshes[kk];
            if (Rk.material) {
              if (Rk.computeBonesUsingShaders && 0 !== Rk.numBoneInfluencers)
                if (Rk.material.getEffect() === Fk) Rk.computeBonesUsingShaders = !1;
                else if (Rk.AY)
                for (const kk of Rk.AY) {
                  if (kk.effect === Fk) {
                    Rk.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Rk.computeBonesUsingShaders && Rk.numBoneInfluencers > 0 && (Rk.computeBonesUsingShaders = !1)
          }
        } else {
          const Fk = this._defines[this._currentRank];
          if (Fk)
            for (let Bk = 0; Bk < Fk.length; Bk++) kk = kk.replace("#define " + Fk[Bk], "");
          this._currentRank++
        }
        return kk
      }
    }
  },
  39695: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Wk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39492),
      Xk = Bk(36781),
      bk = Bk(36772),
      wk = Bk(39703),
      dk = Bk(39530),
      sk = Bk(38320),
      Vk = Bk(37467),
      Jk = Bk(39733),
      Ak = Bk(39414);
    let ek = (() => {
      var kk;
      let Fk, Bk, ak, Xk, bk, wk, dk, sk, Vk, Jk, ek, yk, fk = [];
      return kk = class {
        constructor() {
          this._func = (0, Rk.l)(this, fk), this.reset()
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
          Ak.c.Clone((() => kk), this)
        }
        serialize() {
          return Ak.c.Serialize(this)
        }
        parse(kk, Fk, Bk) {
          Ak.c.Parse((() => this), kk, Fk, Bk)
        }
      }, (() => {
        const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], Xk = [(0, tk.M)()], bk = [(0, tk.M)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], sk = [(0, tk.M)()], Vk = [(0, tk.M)()], Jk = [(0, tk.M)()], ek = [(0, tk.M)()], yk = [(0, tk.M)()], (0, Rk.j)(kk, null, Fk, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: kk => "func" in kk,
            get: kk => kk.func
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, Bk, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: kk => "backFunc" in kk,
            get: kk => kk.backFunc
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, ak, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: kk => "funcRef" in kk,
            get: kk => kk.funcRef
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, Xk, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "funcMask" in kk,
            get: kk => kk.funcMask
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, bk, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "opStencilFail" in kk,
            get: kk => kk.opStencilFail
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, wk, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "opDepthFail" in kk,
            get: kk => kk.opDepthFail
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, dk, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "opStencilDepthPass" in kk,
            get: kk => kk.opStencilDepthPass
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, sk, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpStencilFail" in kk,
            get: kk => kk.backOpStencilFail
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, Vk, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpDepthFail" in kk,
            get: kk => kk.backOpDepthFail
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, Jk, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpStencilDepthPass" in kk,
            get: kk => kk.backOpStencilDepthPass
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, ek, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: kk => "mask" in kk,
            get: kk => kk.mask
          },
          metadata: Ak
        }, null, fk), (0, Rk.j)(kk, null, yk, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "enabled" in kk,
            get: kk => kk.enabled
          },
          metadata: Ak
        }, null, fk), Ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ak
        })
      })(), kk
    })();
    var yk = Bk(39735),
      fk = Bk(39313),
      mk = Bk(39296);
    let Wk = (() => {
      var kk;
      let Fk, Bk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk, Uk, ck, Gk, Tk, rk, Dk, zk, Pk, hk, qk, Ck, Zk, pk, Kk = [],
        xk = [],
        jk = [],
        lk = [],
        nk = [],
        Ik = [],
        Qk = [],
        kF = [],
        FF = [],
        BF = [],
        RF = [],
        tF = [],
        aF = [],
        XF = [],
        bF = [],
        wF = [],
        dF = [],
        sF = [],
        VF = [],
        JF = [],
        AF = [],
        eF = [],
        yF = [],
        fF = [],
        mF = [],
        WF = [],
        vF = [],
        iF = [],
        YF = [],
        oF = [],
        LF = [],
        OF = [],
        EF = [],
        SF = [],
        NF = [],
        HF = [],
        uF = [],
        MF = [],
        gF = [],
        UF = [],
        cF = [],
        GF = [],
        TF = [],
        rF = [],
        DF = [],
        zF = [],
        PF = [],
        hF = [],
        qF = [],
        CF = [],
        ZF = [];
      return kk = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Fk) {
          this._useVertexPulling !== Fk && (this._useVertexPulling = Fk, this.mFk(kk.MiscDirtyFlag))
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
        set alpha(Fk) {
          if (this._alpha === Fk) return;
          const Bk = this._alpha;
          this._alpha = Fk, 1 !== Bk && 1 !== Fk || this.mFk(kk.MiscDirtyFlag + kk.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Fk) {
          this._backFaceCulling !== Fk && (this._backFaceCulling = Fk, this.mFk(kk.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Fk) {
          const Bk = Math.max(0, Math.min(0 | Fk, 4));
          this._textureRepetitionMode !== Bk && (this._textureRepetitionMode = Bk, this.mFk(kk.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Fk) {
          this._cullBackFaces !== Fk && (this._cullBackFaces = Fk, this.mFk(kk.TextureDirtyFlag))
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
          this._onDisposeObserver && this.yN.remove(this._onDisposeObserver), this._onDisposeObserver = this.yN.add(kk)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Xk.e), this._onBindObservable
        }
        set onBind(kk) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(kk)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Xk.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Xk.e), this._onEffectCreatedObservable
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
        setAlphaMode(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Bk] !== Fk && (this._alphaMode[Bk] = Fk, this.mFk(kk.TextureDirtyFlag))
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
        set fogEnabled(Fk) {
          this._fogEnabled !== Fk && (this._fogEnabled = Fk, this.mFk(kk.MiscDirtyFlag))
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
        set wireframe(Fk) {
          this.fillMode = Fk ? kk.WireFrameFillMode : kk.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case kk.PointFillMode:
            case kk.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Fk) {
          this.fillMode = Fk ? kk.PointFillMode : kk.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Fk) {
          this._fillMode !== Fk && (this._fillMode = Fk, this.mFk(kk.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(kk) {
          const Fk = this.XN().ne().getCaps().fragmentDepthSupported;
          kk && !Fk && sk.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = kk && Fk, this._markAllSubMeshesAsMiscDirty()
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
        constructor(Fk, Bk, tk) {
          let wk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Rk.l)(this, Kk), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Rk.l)(this, xk, void 0), this.uniqueId = ((0, Rk.l)(this, jk), (0, Rk.l)(this, lk, void 0)), this._loadedUniqueId = (0, Rk.l)(this, nk), this.name = (0, Rk.l)(this, Ik, void 0), this.metadata = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, null)), this._internalMetadata = (0, Rk.l)(this, FF), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Rk.l)(this, BF, !1), this.checkReadyOnlyOnce = ((0, Rk.l)(this, RF), (0, Rk.l)(this, tF, !1)), this.state = ((0, Rk.l)(this, aF), (0, Rk.l)(this, XF, "")), this._alpha = ((0, Rk.l)(this, bF), (0, Rk.l)(this, wF, 1)), this.inspectableCustomProperties = (0, Rk.l)(this, dF), this._backFaceCulling = (0, Rk.l)(this, sF, !0), this._textureRepetitionMode = ((0, Rk.l)(this, VF), (0, Rk.l)(this, JF, 0)), this.textureRepetitionHexTilingParams = ((0, Rk.l)(this, AF), (0, Rk.l)(this, eF, [1, .6, 7, .5])), this._cullBackFaces = ((0, Rk.l)(this, yF), (0, Rk.l)(this, fF, !0)), this._blockDirtyMechanism = ((0, Rk.l)(this, mF), !1), this.sideOrientation = (0, Rk.l)(this, WF, null), this.onCompiled = ((0, Rk.l)(this, vF), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.yN = new Xk.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Rk.l)(this, iF, [2]), this._needDepthPrePass = ((0, Rk.l)(this, YF), (0, Rk.l)(this, oF, !1)), this.disableDepthWrite = ((0, Rk.l)(this, LF), (0, Rk.l)(this, OF, !1)), this.disableColorWrite = ((0, Rk.l)(this, EF), (0, Rk.l)(this, SF, !1)), this.forceDepthWrite = ((0, Rk.l)(this, NF), (0, Rk.l)(this, HF, !1)), this.depthFunction = ((0, Rk.l)(this, uF), (0, Rk.l)(this, MF, 0)), this.separateCullingPass = ((0, Rk.l)(this, gF), (0, Rk.l)(this, UF, !1)), this._fogEnabled = ((0, Rk.l)(this, cF), (0, Rk.l)(this, GF, !0)), this.pointSize = ((0, Rk.l)(this, TF), (0, Rk.l)(this, rF, 1)), this.zOffset = ((0, Rk.l)(this, DF), (0, Rk.l)(this, zF, 0)), this.zOffsetUnits = ((0, Rk.l)(this, PF), (0, Rk.l)(this, hF, 0)), this.clipPlane = (0, Rk.l)(this, qF), this.stencil = new ek, this._isVertexOutputInvariant = (0, Rk.l)(this, CF, kk.ForceVertexOutputInvariant), this._materialContext = (0, Rk.l)(this, ZF), this._useUBO = !1, this._fillMode = kk.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Fk;
          const sk = Bk || bk.c.LastCreatedScene;
          sk && (this._scene = sk, this._dirtyCallbacks = {}, this._forceGLSL = wk, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Fk || ak.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.ne().createMaterialContext(), this._drawWrapper = new Jk.c(this._scene.ne(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new dk.e(this._scene.ne(), void 0, void 0, Fk), this._useUBO = this.XN().ne().supportsUniformBuffers, this._createUniformBuffer(), tk || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), kk.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const kk = this.XN().ne();
          this._uniformBuffer?.dispose(), kk.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new dk.e(kk, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new dk.e(this._scene.ne(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(kk, Fk) {
          return !0
        }
        isReadyForSubMesh(kk, Fk, Bk) {
          const Rk = Fk.materialDefines;
          return !!Rk && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Rk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        XN() {
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
          let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Bk = this.XN().meshes;
          for (const kk of Bk)
            if (kk.AY)
              for (const Bk of kk.AY)
                if (Bk.Ry() === this)
                  for (const kk of Bk._drawWrappers) kk && this._materialContext === kk.materialContext && (kk._wasPreviouslyReady = !1, kk._wasPreviouslyUsingInstances = null, kk._forceRebindOnNextCall = Fk);
          Fk && this.mFk(kk.AllDirtyFlag)
        }
        _preBind(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Rk = this._scene.ne(),
            tk = (null == Bk ? this.sideOrientation : Bk) === kk.ClockWiseSideOrientation,
            ak = Fk || this._getDrawWrapper();
          return (0, fk.c)(ak) && ak.materialContext && (ak.materialContext.useVertexPulling = this.useVertexPulling), Rk.enableEffect(ak), Rk.setState(this.backFaceCulling, this.zOffset, !1, tk, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), tk
        }
        bind(kk, Fk) {}
        buildUniformLayout() {
          const kk = this._uniformBuffer;
          this._eventInfo.ubo = kk, this._callbackPluginEventGeneric(8, this._eventInfo), kk.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(kk, Fk, Bk) {
          const Rk = Bk._drawWrapper;
          this._eventInfo.subMesh = Bk, this._callbackPluginEventBindForSubMesh(this._eventInfo), Rk._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(kk) {}
        bindView(kk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : kk.setMatrix("view", this.XN().getViewMatrix())
        }
        bindViewProjection(kk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (kk.setMatrix("viewProjection", this.XN().getTransformMatrix()), kk.setMatrix("projection", this.XN().getProjectionMatrix()), kk.setMatrix("inverseProjection", this.XN().getInverseProjectionMatrix()))
        }
        bindEyePosition(kk, Fk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(kk, Fk)
        }
        _afterBind(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Fk && (this._needToBindSceneUbo = !1, (0, yk.B)(Fk, this.XN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = kk ? kk.visibility : 1, this._onBindObservable && kk && this._onBindObservable.notifyObservers(kk), this.disableDepthWrite) {
            const kk = this._scene.ne();
            this._cachedDepthWriteState = kk.getDepthWrite(), kk.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const kk = this._scene.ne();
            this._cachedColorWriteState = kk.getColorWrite(), kk.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const kk = this._scene.ne();
            this._cachedDepthFunctionState = kk.getDepthFunction() || 0, kk.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.ne().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.ne().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.ne().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(Fk, Bk) {
          const Rk = {};
          if (this._serializePlugins(Rk), kk._ParsePlugins(Rk, Fk, this._scene, Bk), this.pluginManager)
            for (const kk of this.pluginManager._plugins) {
              const Bk = Fk.pluginManager.getPlugin(kk.name);
              Bk && kk.copyTo(Bk)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const kk = [];
            for (const Fk in this.meshMap) {
              const Bk = this.meshMap[Fk];
              Bk && kk.push(Bk)
            }
            return kk
          }
          return this._scene.meshes.filter((kk => kk.material === this))
        }
        forceCompilation(kk, Fk, Bk, Rk) {
          const tk = {
              clipPlane: !1,
              useInstances: !1,
              ...Bk
            },
            ak = this.XN(),
            Xk = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const bk = () => {
            if (!this._scene || !this._scene.ne()) return;
            const Bk = ak.clipPlane;
            if (tk.clipPlane && (ak.clipPlane = new Vk.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Bk = !0,
                ak = null;
              if (kk.AY) {
                const Fk = new wk.d(0, 0, 0, 0, 0, kk, void 0, !1, !1);
                Fk.materialDefines && (Fk.materialDefines._renderId = -1), this.isReadyForSubMesh(kk, Fk, tk.useInstances) || (Fk.effect && Fk.effect.getCompilationError() && Fk.effect.allFallbacksProcessed() ? ak = Fk.effect.getCompilationError() : (Bk = !1, setTimeout(bk, 16)))
              }
              Bk && (this.allowShaderHotSwapping = Xk, ak && Rk && Rk(ak), Fk && Fk(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Xk, Fk && Fk(this)) : setTimeout(bk, 16);
            tk.clipPlane && (ak.clipPlane = Bk)
          };
          bk()
        }
        async forceCompilationAsync(kk, Fk) {
          return await new Promise(((Bk, Rk) => {
            this.forceCompilation(kk, (() => {
              Bk()
            }), Fk, (kk => {
              Rk(kk)
            }))
          }))
        }
        mFk(Fk) {
          this.XN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (kk._DirtyCallbackArray.length = 0, Fk & kk.ImageProcessingDirtyFlag && kk._DirtyCallbackArray.push(kk._ImageProcessingDirtyCallBack), Fk & kk.TextureDirtyFlag && kk._DirtyCallbackArray.push(kk._TextureDirtyCallBack), Fk & kk.LightDirtyFlag && kk._DirtyCallbackArray.push(kk._LightsDirtyCallBack), Fk & kk.FresnelDirtyFlag && kk._DirtyCallbackArray.push(kk._FresnelDirtyCallBack), Fk & kk.AttributesDirtyFlag && kk._DirtyCallbackArray.push(kk._AttributeDirtyCallBack), Fk & kk.MiscDirtyFlag && kk._DirtyCallbackArray.push(kk._MiscDirtyCallBack), Fk & kk.PrePassDirtyFlag && kk._DirtyCallbackArray.push(kk._PrePassDirtyCallBack), kk._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(kk._RunDirtyCallBacks), this.XN().resetCachedMaterial())
        }
        resetDrawCache() {
          const kk = this.XN().meshes;
          for (const Fk of kk)
            if (Fk.AY)
              for (const kk of Fk.AY) kk.Ry() === this && kk.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(kk) {
          const Fk = this.XN();
          if (Fk.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Bk = Fk.meshes;
          for (const Rk of Bk)
            if (Rk.AY)
              for (const Bk of Rk.AY) {
                if ((Bk.Ry() || (Fk._hasDefaultMaterial ? Fk.defaultMaterial : null)) === this)
                  for (const Fk of Bk._drawWrappers) Fk && Fk.defines && Fk.defines.markAllAsDirty && this._materialContext === Fk.materialContext && kk(Fk.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.XN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const kk = this.XN().enablePrePassRenderer();
          kk && kk.mFk()
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
            this.yN.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(kk)
            }))
          }
        }
        setPrePassRenderer(kk) {
          return !1
        }
        dispose(kk, Fk, Bk) {
          const Rk = this.XN();
          if (Rk.stopAnimation(this), Rk.freeProcessedMaterials(), Rk.removeMaterial(this), this._eventInfo.forceDisposeTextures = Fk, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const kk = this._parentContainer.materials.indexOf(this);
            kk > -1 && this._parentContainer.materials.splice(kk, 1), this._parentContainer = null
          }
          if (!0 !== Bk)
            if (this.meshMap)
              for (const tk in this.meshMap) {
                const kk = this.meshMap[tk];
                this._disposeMeshResources(kk)
              } else {
                const kk = Rk.meshes;
                for (const Fk of kk) this._disposeMeshResources(Fk)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.yN.notifyObservers(this), this.yN.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(kk) {
          if (!kk) return;
          const Fk = kk.geometry,
            Bk = kk._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (kk.AY && Bk)
              for (const Rk of kk.AY) {
                const kk = Rk._drawWrappers;
                for (let tk = 0; tk < kk.length; tk++) {
                  const ak = kk[tk]?.effect;
                  if (!ak) continue;
                  Bk[tk] === this && (Fk?._releaseVertexArrayObject(ak), Rk._removeDrawWrapper(tk, !0, !0))
                }
              }
          } else Fk?._releaseVertexArrayObject(this._drawWrapper.effect);
          kk.material !== this || kk.rRk || (kk.material = null)
        }
        serialize() {
          const kk = Ak.c.Serialize(this);
          return kk.stencil = this.stencil.serialize(), kk.uniqueId = this.uniqueId, this._serializePlugins(kk), kk
        }
        _serializePlugins(kk) {
          if (kk.plugins = {}, this.pluginManager)
            for (const Fk of this.pluginManager._plugins) Fk.doNotSerialize || (kk.plugins[Fk.getClassName()] = Fk.serialize())
        }
        static ParseAlphaMode(kk, Fk) {
          void 0 !== kk._alphaMode ? Fk._alphaMode = Array.isArray(kk._alphaMode) ? [...kk._alphaMode] : [kk._alphaMode] : void 0 !== kk.alphaMode ? Fk._alphaMode = Array.isArray(kk.alphaMode) ? [...kk.alphaMode] : [kk.alphaMode] : Fk._alphaMode = [2]
        }
        static Parse(Fk, Bk, Rk) {
          if (Fk.customType) {
            if ("BABYLON.PBRMaterial" === Fk.customType && Fk.overloadedAlbedo && (Fk.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return sk.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Fk.customType = "BABYLON.StandardMaterial";
          const tk = ak.h.Instantiate(Fk.customType).Parse(Fk, Bk, Rk);
          return tk._loadedUniqueId = Fk.uniqueId, kk.ParseAlphaMode(Fk, tk), tk
        }
        static _ParsePlugins(kk, Fk, Bk, Rk) {
          if (kk.plugins)
            for (const tk in kk.plugins) {
              const Xk = kk.plugins[tk];
              let bk = Fk.pluginManager?.getPlugin(Xk.name);
              if (!bk) {
                const kk = ak.h.Instantiate("BABYLON." + tk);
                kk && (bk = new kk(Fk))
              }
              bk?.parse(Xk, Bk, Rk)
            }
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], mk = [(0, tk.M)()], Wk = [(0, tk.M)()], vk = [(0, tk.M)()], ik = [(0, tk.M)()], Yk = [(0, tk.M)()], Lk = [(0, tk.M)("alpha")], Ok = [(0, tk.M)("backFaceCulling")], Ek = [(0, tk.M)("textureRepetitionMode")], Sk = [(0, tk.M)("textureRepetitionHexTilingParams")], Nk = [(0, tk.M)("cullBackFaces")], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], Mk = [(0, tk.M)()], gk = [(0, tk.M)()], Uk = [(0, tk.M)()], ck = [(0, tk.M)()], Gk = [(0, tk.M)()], Tk = [(0, tk.M)()], rk = [(0, tk.M)("fogEnabled")], Dk = [(0, tk.M)()], zk = [(0, tk.M)()], Pk = [(0, tk.M)()], hk = [(0, tk.M)()], qk = [(0, tk.M)()], Ck = [(0, tk.M)()], Zk = [(0, tk.M)()], pk = [(0, tk.M)()], (0, Rk.j)(kk, null, hk, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: kk => "pointsCloud" in kk,
            get: kk => kk.pointsCloud
          },
          metadata: ak
        }, null, Kk), (0, Rk.j)(kk, null, qk, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "fillMode" in kk,
            get: kk => kk.fillMode
          },
          metadata: ak
        }, null, Kk), (0, Rk.j)(kk, null, Ck, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLogarithmicDepth" in kk,
            get: kk => kk.useLogarithmicDepth
          },
          metadata: ak
        }, null, Kk), (0, Rk.j)(kk, null, pk, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "transparencyMode" in kk,
            get: kk => kk.transparencyMode
          },
          metadata: ak
        }, null, Kk), (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, Fk) => {
              kk.id = Fk
            }
          },
          metadata: ak
        }, xk, jk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, Fk) => {
              kk.uniqueId = Fk
            }
          },
          metadata: ak
        }, lk, nk), (0, Rk.j)(null, null, mk, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, Fk) => {
              kk.name = Fk
            }
          },
          metadata: ak
        }, Ik, Qk), (0, Rk.j)(null, null, Wk, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, Fk) => {
              kk.metadata = Fk
            }
          },
          metadata: ak
        }, kF, FF), (0, Rk.j)(null, null, vk, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: kk => "checkReadyOnEveryCall" in kk,
            get: kk => kk.checkReadyOnEveryCall,
            set: (kk, Fk) => {
              kk.checkReadyOnEveryCall = Fk
            }
          },
          metadata: ak
        }, BF, RF), (0, Rk.j)(null, null, ik, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: kk => "checkReadyOnlyOnce" in kk,
            get: kk => kk.checkReadyOnlyOnce,
            set: (kk, Fk) => {
              kk.checkReadyOnlyOnce = Fk
            }
          },
          metadata: ak
        }, tF, aF), (0, Rk.j)(null, null, Yk, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: kk => "state" in kk,
            get: kk => kk.state,
            set: (kk, Fk) => {
              kk.state = Fk
            }
          },
          metadata: ak
        }, XF, bF), (0, Rk.j)(null, null, Lk, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "_alpha" in kk,
            get: kk => kk._alpha,
            set: (kk, Fk) => {
              kk._alpha = Fk
            }
          },
          metadata: ak
        }, wF, dF), (0, Rk.j)(null, null, Ok, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: kk => "_backFaceCulling" in kk,
            get: kk => kk._backFaceCulling,
            set: (kk, Fk) => {
              kk._backFaceCulling = Fk
            }
          },
          metadata: ak
        }, sF, VF), (0, Rk.j)(null, null, Ek, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_textureRepetitionMode" in kk,
            get: kk => kk._textureRepetitionMode,
            set: (kk, Fk) => {
              kk._textureRepetitionMode = Fk
            }
          },
          metadata: ak
        }, JF, AF), (0, Rk.j)(null, null, Sk, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: kk => "textureRepetitionHexTilingParams" in kk,
            get: kk => kk.textureRepetitionHexTilingParams,
            set: (kk, Fk) => {
              kk.textureRepetitionHexTilingParams = Fk
            }
          },
          metadata: ak
        }, eF, yF), (0, Rk.j)(null, null, Nk, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: kk => "_cullBackFaces" in kk,
            get: kk => kk._cullBackFaces,
            set: (kk, Fk) => {
              kk._cullBackFaces = Fk
            }
          },
          metadata: ak
        }, fF, mF), (0, Rk.j)(null, null, Hk, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: kk => "sideOrientation" in kk,
            get: kk => kk.sideOrientation,
            set: (kk, Fk) => {
              kk.sideOrientation = Fk
            }
          },
          metadata: ak
        }, WF, vF), (0, Rk.j)(null, null, uk, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_alphaMode" in kk,
            get: kk => kk._alphaMode,
            set: (kk, Fk) => {
              kk._alphaMode = Fk
            }
          },
          metadata: ak
        }, iF, YF), (0, Rk.j)(null, null, Mk, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: kk => "_needDepthPrePass" in kk,
            get: kk => kk._needDepthPrePass,
            set: (kk, Fk) => {
              kk._needDepthPrePass = Fk
            }
          },
          metadata: ak
        }, oF, LF), (0, Rk.j)(null, null, gk, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableDepthWrite" in kk,
            get: kk => kk.disableDepthWrite,
            set: (kk, Fk) => {
              kk.disableDepthWrite = Fk
            }
          },
          metadata: ak
        }, OF, EF), (0, Rk.j)(null, null, Uk, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableColorWrite" in kk,
            get: kk => kk.disableColorWrite,
            set: (kk, Fk) => {
              kk.disableColorWrite = Fk
            }
          },
          metadata: ak
        }, SF, NF), (0, Rk.j)(null, null, ck, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceDepthWrite" in kk,
            get: kk => kk.forceDepthWrite,
            set: (kk, Fk) => {
              kk.forceDepthWrite = Fk
            }
          },
          metadata: ak
        }, HF, uF), (0, Rk.j)(null, null, Gk, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: kk => "depthFunction" in kk,
            get: kk => kk.depthFunction,
            set: (kk, Fk) => {
              kk.depthFunction = Fk
            }
          },
          metadata: ak
        }, MF, gF), (0, Rk.j)(null, null, Tk, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "separateCullingPass" in kk,
            get: kk => kk.separateCullingPass,
            set: (kk, Fk) => {
              kk.separateCullingPass = Fk
            }
          },
          metadata: ak
        }, UF, cF), (0, Rk.j)(null, null, rk, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "_fogEnabled" in kk,
            get: kk => kk._fogEnabled,
            set: (kk, Fk) => {
              kk._fogEnabled = Fk
            }
          },
          metadata: ak
        }, GF, TF), (0, Rk.j)(null, null, Dk, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: kk => "pointSize" in kk,
            get: kk => kk.pointSize,
            set: (kk, Fk) => {
              kk.pointSize = Fk
            }
          },
          metadata: ak
        }, rF, DF), (0, Rk.j)(null, null, zk, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: kk => "zOffset" in kk,
            get: kk => kk.zOffset,
            set: (kk, Fk) => {
              kk.zOffset = Fk
            }
          },
          metadata: ak
        }, zF, PF), (0, Rk.j)(null, null, Pk, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: kk => "zOffsetUnits" in kk,
            get: kk => kk.zOffsetUnits,
            set: (kk, Fk) => {
              kk.zOffsetUnits = Fk
            }
          },
          metadata: ak
        }, hF, qF), (0, Rk.j)(null, null, Zk, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: kk => "_isVertexOutputInvariant" in kk,
            get: kk => kk._isVertexOutputInvariant,
            set: (kk, Fk) => {
              kk._isVertexOutputInvariant = Fk
            }
          },
          metadata: ak
        }, CF, ZF), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk.TriangleFillMode = 0, kk.WireFrameFillMode = 1, kk.PointFillMode = 2, kk.PointListDrawMode = 3, kk.LineListDrawMode = 4, kk.LineLoopDrawMode = 5, kk.LineStripDrawMode = 6, kk.TriangleStripDrawMode = 7, kk.TriangleFanDrawMode = 8, kk.ClockWiseSideOrientation = 0, kk.CounterClockWiseSideOrientation = 1, kk.ImageProcessingDirtyFlag = 64, kk.TextureDirtyFlag = 1, kk.LightDirtyFlag = 2, kk.FresnelDirtyFlag = 4, kk.AttributesDirtyFlag = 8, kk.MiscDirtyFlag = 16, kk.PrePassDirtyFlag = 32, kk.AllDirtyFlag = 127, kk.MATERIAL_OPAQUE = 0, kk.MATERIAL_ALPHATEST = 1, kk.MATERIAL_ALPHABLEND = 2, kk.MATERIAL_ALPHATESTANDBLEND = 3, kk.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, kk.MATERIAL_NORMALBLENDMETHOD_RNM = 1, kk.LIGHTFALLOFF_PHYSICAL = 0, kk.LIGHTFALLOFF_GLTF = 1, kk.LIGHTFALLOFF_STANDARD = 2, kk.OnEventObservable = new Xk.e, kk.ForceVertexOutputInvariant = !1, kk._AllDirtyCallBack = kk => kk.markAllAsDirty(), kk._ImageProcessingDirtyCallBack = kk => kk.markAsImageProcessingDirty(), kk._TextureDirtyCallBack = kk => kk.markAsTexturesDirty(), kk._FresnelDirtyCallBack = kk => kk.markAsFresnelDirty(), kk._MiscDirtyCallBack = kk => kk.markAsMiscDirty(), kk._PrePassDirtyCallBack = kk => kk.markAsPrePassDirty(), kk._LightsDirtyCallBack = kk => kk.markAsLightDirty(), kk._AttributeDirtyCallBack = kk => kk.markAsAttributesDirty(), kk._FresnelAndMiscDirtyCallBack = Fk => {
        kk._FresnelDirtyCallBack(Fk), kk._MiscDirtyCallBack(Fk)
      }, kk._TextureAndMiscDirtyCallBack = Fk => {
        kk._TextureDirtyCallBack(Fk), kk._MiscDirtyCallBack(Fk)
      }, kk._DirtyCallbackArray = [], kk._RunDirtyCallBacks = Fk => {
        for (const Bk of kk._DirtyCallbackArray) Bk(Fk)
      }, kk
    })();
    Object.getOwnPropertyDescriptor(Wk.prototype, "pluginManager") || Object.defineProperty(Wk.prototype, "pluginManager", (0, mk.f)("Material", "pluginManager"))
  },
  39749: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(39305);
    class tk {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(kk) {
        this._DiffuseTextureEnabled !== kk && (this._DiffuseTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(kk) {
        this._BaseWeightTextureEnabled !== kk && (this._BaseWeightTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(kk) {
        this._BaseDiffuseRoughnessTextureEnabled !== kk && (this._BaseDiffuseRoughnessTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(kk) {
        this._DetailTextureEnabled !== kk && (this._DetailTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(kk) {
        this._DecalMapEnabled !== kk && (this._DecalMapEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(kk) {
        this._AmbientTextureEnabled !== kk && (this._AmbientTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(kk) {
        this._OpacityTextureEnabled !== kk && (this._OpacityTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(kk) {
        this._ReflectionTextureEnabled !== kk && (this._ReflectionTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(kk) {
        this._EmissiveTextureEnabled !== kk && (this._EmissiveTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(kk) {
        this._SpecularTextureEnabled !== kk && (this._SpecularTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(kk) {
        this._BumpTextureEnabled !== kk && (this._BumpTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(kk) {
        this._LightmapTextureEnabled !== kk && (this._LightmapTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(kk) {
        this._RefractionTextureEnabled !== kk && (this._RefractionTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(kk) {
        this._ColorGradingTextureEnabled !== kk && (this._ColorGradingTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(kk) {
        this._FresnelEnabled !== kk && (this._FresnelEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(kk) {
        this._ClearCoatTextureEnabled !== kk && (this._ClearCoatTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(kk) {
        this._ClearCoatBumpTextureEnabled !== kk && (this._ClearCoatBumpTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(kk) {
        this._ClearCoatTintTextureEnabled !== kk && (this._ClearCoatTintTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(kk) {
        this._SheenTextureEnabled !== kk && (this._SheenTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(kk) {
        this._AnisotropicTextureEnabled !== kk && (this._AnisotropicTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(kk) {
        this._ThicknessTextureEnabled !== kk && (this._ThicknessTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(kk) {
        this._RefractionIntensityTextureEnabled !== kk && (this._RefractionIntensityTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(kk) {
        this._TranslucencyIntensityTextureEnabled !== kk && (this._TranslucencyIntensityTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(kk) {
        this._TranslucencyColorTextureEnabled !== kk && (this._TranslucencyColorTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(kk) {
        this._IridescenceTextureEnabled !== kk && (this._IridescenceTextureEnabled = kk, Rk.c.MarkAllMaterialsAsDirty(1))
      }
    }
    tk._DiffuseTextureEnabled = !0, tk._BaseWeightTextureEnabled = !0, tk._BaseDiffuseRoughnessTextureEnabled = !0, tk._DetailTextureEnabled = !0, tk._DecalMapEnabled = !0, tk._AmbientTextureEnabled = !0, tk._OpacityTextureEnabled = !0, tk._ReflectionTextureEnabled = !0, tk._EmissiveTextureEnabled = !0, tk._SpecularTextureEnabled = !0, tk._BumpTextureEnabled = !0, tk._LightmapTextureEnabled = !0, tk._RefractionTextureEnabled = !0, tk._ColorGradingTextureEnabled = !0, tk._FresnelEnabled = !0, tk._ClearCoatTextureEnabled = !0, tk._ClearCoatBumpTextureEnabled = !0, tk._ClearCoatTintTextureEnabled = !0, tk._SheenTextureEnabled = !0, tk._AnisotropicTextureEnabled = !0, tk._ThicknessTextureEnabled = !0, tk._RefractionIntensityTextureEnabled = !0, tk._TranslucencyIntensityTextureEnabled = !0, tk._TranslucencyColorTextureEnabled = !0, tk._IridescenceTextureEnabled = !0
  },
  39735: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => fk,
      E: () => ik,
      I: () => Mk,
      L: () => Yk,
      M: () => Hk,
      O: () => uk,
      Q: () => Ak,
      R: () => Jk,
      T: () => qk,
      V: () => rk,
      X: () => Gk,
      Z: () => ck,
      _: () => vk,
      ab: () => gk,
      c: () => Uk,
      cb: () => Ck,
      eb: () => Zk,
      g: () => Lk,
      hb: () => pk,
      i: () => Vk,
      ib: () => lk,
      j: () => mk,
      kb: () => xk,
      n: () => Wk,
      ob: () => jk,
      pb: () => ek,
      r: () => Nk,
      u: () => wk,
      x: () => yk
    });
    var Rk = Bk(38320),
      tk = Bk(36772),
      ak = Bk(39606),
      Xk = Bk(39741),
      bk = Bk(39749);

    function wk(kk, Fk, Bk) {
      if (!kk || kk.LOGARITHMICDEPTH || kk.indexOf && kk.indexOf("LOGARITHMICDEPTH") >= 0) {
        const kk = Bk.activeCamera;
        1 === kk.mode && Rk.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Fk.setFloat("logarithmicDepthConstant", 2 / (Math.log(kk.maxZ + 1) / Math.LN2))
      }
    }
    const dk = {
        r: 0,
        g: 0,
        b: 0
      },
      sk = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Vk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Bk && kk.fogEnabled && (!Fk || Fk.applyFog) && 0 !== kk.fogMode && (Bk.setFloat4("vFogInfos", kk.fogMode, kk.fogStart, kk.fogEnd, kk.fogDensity), Rk ? (kk.fogColor.toLinearSpaceToRef(dk, kk.ne().useExactSrgbConversions), Bk.setColor3("vFogColor", dk)) : Bk.setColor3("vFogColor", kk.fogColor))
    }

    function Jk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
      const Vk = kk.numMaxInfluencers || kk.numInfluencers;
      return Vk <= 0 ? 0 : (Fk.push("#define MORPHTARGETS"), kk.hasPositions && Fk.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), kk.hasNormals && Fk.push("#define MORPHTARGETTEXTURE_HASNORMALS"), kk.hasTangents && Fk.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), kk.hasUVs && Fk.push("#define MORPHTARGETTEXTURE_HASUVS"), kk.hasUV2s && Fk.push("#define MORPHTARGETTEXTURE_HASUV2S"), kk.hasColors && Fk.push("#define MORPHTARGETTEXTURE_HASCOLORS"), kk.supportsPositions && tk && Fk.push("#define MORPHTARGETS_POSITION"), kk.supportsNormals && ak && Fk.push("#define MORPHTARGETS_NORMAL"), kk.supportsTangents && Xk && Fk.push("#define MORPHTARGETS_TANGENT"), kk.supportsUVs && bk && Fk.push("#define MORPHTARGETS_UV"), kk.supportsUV2s && wk && Fk.push("#define MORPHTARGETS_UV2"), kk.supportsColors && dk && Fk.push("#define MORPHTARGETS_COLOR"), Fk.push("#define NUM_MORPH_INFLUENCERS " + Vk), kk.isUsingTextureForTargets && Fk.push("#define MORPHTARGETS_TEXTURE"), sk.NUM_MORPH_INFLUENCERS = Vk, sk.NORMAL = ak, sk.TANGENT = Xk, sk.UV = bk, sk.UV2 = wk, sk.COLOR = dk, Ak(Bk, Rk, sk, tk), Vk)
    }

    function Ak(kk, Fk, Bk) {
      let ak = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Xk = Bk.NUM_MORPH_INFLUENCERS;
      if (Xk > 0 && tk.c.LastCreatedEngine) {
        const bk = tk.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          wk = Fk.morphTargetManager;
        if (wk?.isUsingTextureForTargets) return;
        const dk = wk && wk.supportsPositions && ak,
          sk = wk && wk.supportsNormals && Bk.NORMAL,
          Vk = wk && wk.supportsTangents && Bk.TANGENT,
          Jk = wk && wk.supportsUVs && Bk.UV1,
          Ak = wk && wk.supportsUV2s && Bk.UV2,
          ek = wk && wk.supportsColors && Bk.VERTEXCOLOR;
        for (let Bk = 0; Bk < Xk; Bk++) dk && kk.push("position" + Bk), sk && kk.push("normal" + Bk), Vk && kk.push("tangent" + Bk), Jk && kk.push("uv_" + Bk), Ak && kk.push("uv2_" + Bk), ek && kk.push("color" + Bk), kk.length > bk && Rk.b.Error("Cannot add more vertex attributes for mesh " + Fk.name)
      }
    }

    function ek(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      kk.push("world0"), kk.push("world1"), kk.push("world2"), kk.push("world3"), Fk && (kk.push("previousWorld0"), kk.push("previousWorld1"), kk.push("previousWorld2"), kk.push("previousWorld3"))
    }

    function yk(kk, Fk) {
      const Bk = kk.morphTargetManager;
      kk && Bk && Fk.setFloatArray("morphTargetInfluences", Bk.influences)
    }

    function fk(kk, Fk) {
      Fk.bindToEffect(kk, "Scene")
    }

    function mk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        wk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        sk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Vk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Jk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (kk.texturesEnabled && tk && bk.b.ReflectionTextureEnabled) {
        if (Bk.M_("reflectionMatrix", tk.getReflectionTextureMatrix()), Bk.updateFloat2("vReflectionInfos", tk.level * kk.iblIntensity, Jk), wk && tk.boundingBoxSize) {
          const kk = tk;
          Bk.updateVector3("vReflectionPosition", kk.boundingBoxPosition), Bk.updateVector3("vReflectionSize", kk.boundingBoxSize)
        }
        if (ak) {
          const kk = tk.getSize().width;
          Bk.updateFloat2("vReflectionFilteringInfo", kk, Math.log2(kk))
        }
        if (sk && !Fk.USEIRRADIANCEMAP) {
          const kk = tk.sphericalPolynomial;
          if (Fk.USESPHERICALFROMREFLECTIONMAP && kk)
            if (Fk.SPHERICAL_HARMONICS) {
              const Fk = kk.preScaledHarmonics;
              Bk.updateVector3("vSphericalL00", Fk.l00), Bk.updateVector3("vSphericalL1_1", Fk.l1_1), Bk.updateVector3("vSphericalL10", Fk.l10), Bk.updateVector3("vSphericalL11", Fk.l11), Bk.updateVector3("vSphericalL2_2", Fk.l2_2), Bk.updateVector3("vSphericalL2_1", Fk.l2_1), Bk.updateVector3("vSphericalL20", Fk.l20), Bk.updateVector3("vSphericalL21", Fk.l21), Bk.updateVector3("vSphericalL22", Fk.l22)
            } else Bk.updateFloat3("vSphericalX", kk.x.x, kk.x.y, kk.x.z), Bk.updateFloat3("vSphericalY", kk.y.x, kk.y.y, kk.y.z), Bk.updateFloat3("vSphericalZ", kk.z.x, kk.z.y, kk.z.z), Bk.updateFloat3("vSphericalXX_ZZ", kk.xx.x - kk.zz.x, kk.xx.y - kk.zz.y, kk.xx.z - kk.zz.z), Bk.updateFloat3("vSphericalYY_ZZ", kk.yy.x - kk.zz.x, kk.yy.y - kk.zz.y, kk.yy.z - kk.zz.z), Bk.updateFloat3("vSphericalZZ", kk.zz.x, kk.zz.y, kk.zz.z), Bk.updateFloat3("vSphericalXY", kk.xy.x, kk.xy.y, kk.xy.z), Bk.updateFloat3("vSphericalYZ", kk.yz.x, kk.yz.y, kk.yz.z), Bk.updateFloat3("vSphericalZX", kk.zx.x, kk.zx.y, kk.zx.z)
        } else dk && Fk.USEIRRADIANCEMAP && Fk.USE_IRRADIANCE_DOMINANT_DIRECTION && tk.irradianceTexture && Bk.updateVector3("vReflectionDominantDirection", tk.irradianceTexture._dominantDirection);
        Xk && Bk.updateFloat3("vReflectionMicrosurfaceInfos", tk.getSize().width, tk.lodGenerationScale, tk.lodGenerationOffset)
      }
      Vk && Bk.updateColor3("vReflectionColor", Rk)
    }

    function Wk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Rk && bk.b.ReflectionTextureEnabled) {
        Fk.LODBASEDMICROSFURACE ? Bk.setTexture("reflectionSampler", Rk) : (Bk.setTexture("reflectionSampler", Rk._lodTextureMid || Rk), Bk.setTexture("reflectionSamplerLow", Rk._lodTextureLow || Rk), Bk.setTexture("reflectionSamplerHigh", Rk._lodTextureHigh || Rk)), Fk.USEIRRADIANCEMAP && Bk.setTexture("irradianceSampler", Rk.irradianceTexture);
        const ak = kk.iblCdfGenerator;
        tk && ak && Bk.setTexture("icdfSampler", ak.getIcdfTexture())
      }
    }

    function vk(kk, Fk, Bk) {
      Fk._needUVs = !0, Fk[Bk] = !0, kk.optimizeUVAllocation && kk.getTextureMatrix().isIdentityAs3x2() ? (Fk[Bk + "DIRECTUV"] = kk.coordinatesIndex + 1, Fk["MAINUV" + (kk.coordinatesIndex + 1)] = !0) : Fk[Bk + "DIRECTUV"] = 0
    }

    function ik(kk, Fk, Bk) {
      const Rk = kk.getTextureMatrix();
      Fk.M_(Bk + "Matrix", Rk)
    }

    function Yk(kk, Fk, Bk) {
      Bk.BAKED_VERTEX_ANIMATION_TEXTURE && Bk.INSTANCES && kk.push("bakedVertexAnimationSettingsInstanced")
    }

    function Lk(kk, Fk, Bk) {
      var Rk;
      if (Fk && kk && (kk.computeBonesUsingShaders && Fk._bonesComputationForcedToCPU && (kk.computeBonesUsingShaders = !1), kk.useBones && kk.computeBonesUsingShaders && kk.skeleton)) {
        const tk = kk.skeleton;
        if (tk.isUsingTextureForMatrices && Fk.getUniformIndex("boneTextureInfo") > -1) {
          const Bk = tk.getTransformMatrixTexture(kk);
          Fk.setTexture("boneSampler", Bk), Fk.setFloat2("boneTextureInfo", tk._textureWidth, tk._textureHeight)
        } else {
          const ak = tk.getTransformMatrices(kk);
          ak && (Fk.setMatrices("mBones", ak), Bk && kk.XN().prePassRenderer && kk.XN().prePassRenderer.getIndex(2) && (Bk.previousBones[kk.uniqueId] || (Bk.previousBones[kk.uniqueId] = ak.slice()), Fk.setMatrices("mPreviousBones", Bk.previousBones[kk.uniqueId]), Rk = ak, Bk.previousBones[kk.uniqueId].set(Rk)))
        }
      }
    }

    function Ok(kk, Fk, Bk, Rk, tk) {
      let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      kk._bindLight(Fk, Bk, Rk, tk, ak)
    }
    const Ek = 4,
      Sk = new WeakMap;

    function Nk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const ak = Math.min(Fk.lightSources.length, tk);
      for (let Xk = 0; Xk < ak; Xk++) {
        Ok(Fk.lightSources[Xk], Xk, kk, Bk, "boolean" === typeof Rk ? Rk : Rk.SPECULARTERM, Fk.receiveShadows)
      }
    }

    function Hk(kk, Fk, Bk, Rk) {
      Bk.NUM_BONE_INFLUENCERS > 0 && (Rk.addCPUSkinningFallback(0, Fk), kk.push("matricesIndices"), kk.push("matricesWeights"), Bk.NUM_BONE_INFLUENCERS > 4 && (kk.push("matricesIndicesExtra"), kk.push("matricesWeightsExtra")))
    }

    function uk(kk, Fk) {
      (Fk.INSTANCES || Fk.THIN_INSTANCES) && ek(kk, !!Fk.PREPASS_VELOCITY), Fk.INSTANCESCOLOR && kk.push("instanceColor")
    }

    function Mk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tk = 0;
      for (let ak = 0; ak < Bk && kk["LIGHT" + ak]; ak++) ak > 0 && (tk = Rk + ak, Fk.addFallback(tk, "LIGHT" + ak)), kk.SHADOWS || (kk["SHADOW" + ak] && Fk.addFallback(Rk, "SHADOW" + ak), kk["SHADOWPCF" + ak] && Fk.addFallback(Rk, "SHADOWPCF" + ak), kk["SHADOWPCSS" + ak] && Fk.addFallback(Rk, "SHADOWPCSS" + ak), kk["SHADOWPOISSON" + ak] && Fk.addFallback(Rk, "SHADOWPOISSON" + ak), kk["SHADOWESM" + ak] && Fk.addFallback(Rk, "SHADOWESM" + ak), kk["SHADOWCLOSEESM" + ak] && Fk.addFallback(Rk, "SHADOWCLOSEESM" + ak));
      return tk
    }

    function gk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      let bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        dk = arguments.length > 9 ? arguments[9] : void 0,
        sk = arguments.length > 10 ? arguments[10] : void 0;
      if (Xk._areMiscDirty) {
        Xk.LOGARITHMICDEPTH = Bk, Xk.POINTSIZE = Rk, Xk.FOG = tk && function(kk, Fk) {
          return Fk.fogEnabled && kk.applyFog && 0 !== Fk.fogMode
        }(kk, Fk), Xk.NONUNIFORMSCALING = kk.nonUniformScaling, Xk.ALPHATEST = ak, Xk.DECAL_AFTER_DETAIL = bk, Xk.USE_VERTEX_PULLING = wk, Xk.RIGHT_HANDED = Fk.useRightHandedSystem;
        const Vk = wk ? dk?.geometry?.getIndexBuffer() : null,
          Jk = !!dk && dk.isUnIndexed;
        Xk.VERTEX_PULLING_USE_INDEX_BUFFER = !!Vk && !Jk, Xk.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Vk || Jk) && Vk.is32Bits, Xk.VERTEXOUTPUT_INVARIANT = !!sk
      }
    }

    function Uk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!kk.lightsEnabled || Rk) return !0;
      const tk = Fk.lightSources,
        ak = Math.min(tk.length, Bk);
      for (let Xk = 0; Xk < ak; Xk++)
        if (!tk[Xk].areLightTexturesReady()) return !1;
      return !0
    }

    function ck(kk, Fk, Bk, tk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Bk._areLightsDirty) return Bk._needNormals;
      const bk = ak;
      ak = function(kk, Fk) {
        const Bk = kk.ne().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Bk) return Fk;
        const Rk = Math.max(Bk - Ek, 1);
        return Math.min(Fk, Rk)
      }(kk, ak);
      let wk = 0;
      const dk = {
        needNormals: Bk._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (kk.lightsEnabled && !Xk) {
        Fk.lightSources.length > ak && ak < bk && function(kk, Fk, Bk, tk) {
          let ak = Sk.get(kk);
          ak || (ak = new Set, Sk.set(kk, ak)), ak.has(tk) || (ak.add(tk), Rk.b.Warn(`maxSimultaneousLights is ${Fk} but this engine supports at most ${Bk} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${tk} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${tk+Ek} uniform buffers, over the device limit of ${kk.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Bk}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Bk} or less to silence this warning.`))
        }(kk.ne(), bk, ak, Math.min(Fk.lightSources.length, bk));
        for (const Rk of Fk.lightSources)
          if (Tk(kk, Fk, Rk, wk, Bk, tk, dk), wk++, wk === ak) break
      }
      Bk.SPECULARTERM = dk.specularEnabled, Bk.SHADOWS = dk.shadowEnabled;
      const sk = Math.max(ak, Bk.MAXLIGHTCOUNT || 0);
      for (let Rk = wk; Rk < sk; Rk++) void 0 !== Bk["LIGHT" + Rk] && (Bk["LIGHT" + Rk] = !1, Bk["HEMILIGHT" + Rk] = !1, Bk["POINTLIGHT" + Rk] = !1, Bk["DIRLIGHT" + Rk] = !1, Bk["SPOTLIGHT" + Rk] = !1, Bk["AREALIGHT" + Rk] = !1, Bk["CLUSTLIGHT" + Rk] = !1, Bk["SHADOW" + Rk] = !1, Bk["SHADOWCSM" + Rk] = !1, Bk["SHADOWCSMDEBUG" + Rk] = !1, Bk["SHADOWCSMNUM_CASCADES" + Rk] = !1, Bk["SHADOWCSMUSESHADOWMAXZ" + Rk] = !1, Bk["SHADOWCSMNOBLEND" + Rk] = !1, Bk["SHADOWCSM_RIGHTHANDED" + Rk] = !1, Bk["SHADOWPCF" + Rk] = !1, Bk["SHADOWPCSS" + Rk] = !1, Bk["SHADOWPOISSON" + Rk] = !1, Bk["SHADOWESM" + Rk] = !1, Bk["SHADOWCLOSEESM" + Rk] = !1, Bk["SHADOWCUBE" + Rk] = !1, Bk["SHADOWLOWQUALITY" + Rk] = !1, Bk["SHADOWMEDIUMQUALITY" + Rk] = !1);
      Bk.LIGHTCOUNT = wk, Bk.MAXLIGHTCOUNT = ak;
      const Vk = kk.ne().getCaps();
      return void 0 === Bk.SHADOWFLOAT && (dk.needRebuild = !0), Bk.SHADOWFLOAT = dk.shadowEnabled && (Vk.textureFloatRender && Vk.textureFloatLinearFiltering || Vk.textureHalfFloatRender && Vk.textureHalfFloatLinearFiltering), Bk.LIGHTMAPEXCLUDED = dk.lightmapMode, dk.needRebuild && Bk.rebuild(), dk.needNormals
    }

    function Gk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Fk && bk.b.ReflectionTextureEnabled) {
        if (!Fk.isReadyOrNotBlocking()) return !1;
        Bk._needNormals = !0, Bk.REFLECTION = !0, Bk.GAMMAREFLECTION = Fk.gammaSpace, Bk.RGBDREFLECTION = Fk.isRGBD, Bk.LODINREFLECTIONALPHA = Fk.lodLevelInAlpha, Bk.LINEARSPECULARREFLECTION = Fk.linearSpecularLOD, Bk.USEIRRADIANCEMAP = !1, Bk.LODBASEDMICROSFURACE = kk.ne().getCaps().textureLOD;
        const Xk = kk.ne();
        switch (Rk && tk > 0 ? (Bk.NUM_SAMPLES = "" + tk, Xk._features.needTypeSuffixInShaderConstants && (Bk.NUM_SAMPLES = Bk.NUM_SAMPLES + "u"), Bk.REALTIME_FILTERING = !0, kk.iblCdfGenerator && (Bk.IBL_CDF_FILTERING = !0)) : Bk.REALTIME_FILTERING = !1, Bk.INVERTCUBICMAP = 6 === Fk.coordinatesMode, Bk.REFLECTIONMAP_3D = Fk.isCube, Bk.REFLECTIONMAP_OPPOSITEZ = Bk.REFLECTIONMAP_3D && kk.useRightHandedSystem ? !Fk.invertZ : Fk.invertZ, Bk.REFLECTIONMAP_CUBIC = !1, Bk.REFLECTIONMAP_EXPLICIT = !1, Bk.REFLECTIONMAP_PLANAR = !1, Bk.REFLECTIONMAP_PROJECTION = !1, Bk.REFLECTIONMAP_SKYBOX = !1, Bk.REFLECTIONMAP_SPHERICAL = !1, Bk.REFLECTIONMAP_EQUIRECTANGULAR = !1, Bk.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Bk.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Fk.coordinatesMode) {
          case 0:
            Bk.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Bk.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Bk.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Bk.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Bk.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Bk.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Bk.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Bk.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Bk.REFLECTIONMAP_CUBIC = !0, Bk.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Fk.boundingBoxSize
        }
        5 !== Fk.coordinatesMode && (Fk.irradianceTexture ? (Bk.USEIRRADIANCEMAP = !0, Bk.USESPHERICALFROMREFLECTIONMAP = !1, Bk.USESPHERICALINVERTEX = !1, Fk.irradianceTexture._dominantDirection ? Bk.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Bk.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Fk.isCube && (Bk.USESPHERICALFROMREFLECTIONMAP = !0, Bk.USEIRRADIANCEMAP = !1, Bk.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Bk.USESPHERICALINVERTEX = ak))
      } else Bk.REFLECTION = !1, Bk.REFLECTIONMAP_3D = !1, Bk.REFLECTIONMAP_SPHERICAL = !1, Bk.REFLECTIONMAP_PLANAR = !1, Bk.REFLECTIONMAP_CUBIC = !1, Bk.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Bk.REFLECTIONMAP_PROJECTION = !1, Bk.REFLECTIONMAP_SKYBOX = !1, Bk.REFLECTIONMAP_EXPLICIT = !1, Bk.REFLECTIONMAP_EQUIRECTANGULAR = !1, Bk.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Bk.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Bk.INVERTCUBICMAP = !1, Bk.USESPHERICALFROMREFLECTIONMAP = !1, Bk.USEIRRADIANCEMAP = !1, Bk.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Bk.USESPHERICALINVERTEX = !1, Bk.REFLECTIONMAP_OPPOSITEZ = !1, Bk.LODINREFLECTIONALPHA = !1, Bk.GAMMAREFLECTION = !1, Bk.RGBDREFLECTION = !1, Bk.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Tk(kk, Fk, Bk, Rk, tk, Xk, bk) {
      switch (bk.needNormals = !0, void 0 === tk["LIGHT" + Rk] && (bk.needRebuild = !0), tk["LIGHT" + Rk] = !0, tk["SPOTLIGHT" + Rk] = !1, tk["HEMILIGHT" + Rk] = !1, tk["POINTLIGHT" + Rk] = !1, tk["DIRLIGHT" + Rk] = !1, tk["AREALIGHT" + Rk] = !1, tk["CLUSTLIGHT" + Rk] = !1, Bk.prepareLightSpecificDefines(tk, Rk), tk["LIGHT_FALLOFF_PHYSICAL" + Rk] = !1, tk["LIGHT_FALLOFF_GLTF" + Rk] = !1, tk["LIGHT_FALLOFF_STANDARD" + Rk] = !1, Bk.falloffType) {
        case ak.e.FALLOFF_GLTF:
          tk["LIGHT_FALLOFF_GLTF" + Rk] = !0;
          break;
        case ak.e.FALLOFF_PHYSICAL:
          tk["LIGHT_FALLOFF_PHYSICAL" + Rk] = !0;
          break;
        case ak.e.FALLOFF_STANDARD:
          tk["LIGHT_FALLOFF_STANDARD" + Rk] = !0
      }
      if (Xk && !Bk.specular.equalsFloats(0, 0, 0) && (bk.specularEnabled = !0), tk["SHADOW" + Rk] = !1, tk["SHADOWCSM" + Rk] = !1, tk["SHADOWCSMDEBUG" + Rk] = !1, tk["SHADOWCSMNUM_CASCADES" + Rk] = !1, tk["SHADOWCSMUSESHADOWMAXZ" + Rk] = !1, tk["SHADOWCSMNOBLEND" + Rk] = !1, tk["SHADOWCSM_RIGHTHANDED" + Rk] = !1, tk["SHADOWPCF" + Rk] = !1, tk["SHADOWPCSS" + Rk] = !1, tk["SHADOWPOISSON" + Rk] = !1, tk["SHADOWESM" + Rk] = !1, tk["SHADOWCLOSEESM" + Rk] = !1, tk["SHADOWCUBE" + Rk] = !1, tk["SHADOWLOWQUALITY" + Rk] = !1, tk["SHADOWMEDIUMQUALITY" + Rk] = !1, Fk && Fk.receiveShadows && kk.shadowsEnabled && Bk.shadowEnabled) {
        const Fk = Bk.getShadowGenerator(kk.activeCamera) ?? Bk.getShadowGenerator();
        if (Fk) {
          const kk = Fk.getShadowMap();
          kk && kk.renderList && kk.renderList.length > 0 && (bk.shadowEnabled = !0, Fk.prepareDefines(tk, Rk))
        }
      }
      Bk.lightmapMode != ak.e.LIGHTMAP_DEFAULT ? (bk.lightmapMode = !0, tk["LIGHTMAPEXCLUDED" + Rk] = !0, tk["LIGHTMAPNOSPECULAR" + Rk] = Bk.lightmapMode == ak.e.LIGHTMAP_SHADOWSONLY) : (tk["LIGHTMAPEXCLUDED" + Rk] = !1, tk["LIGHTMAPNOSPECULAR" + Rk] = !1)
    }

    function rk(kk, Fk, Bk, Rk, tk) {
      let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        wk = function(kk, Fk) {
          let Bk = !1;
          if (kk.activeCamera) {
            const Rk = Fk.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              tk = Fk.CAMERA_PERSPECTIVE ? 1 : 0,
              ak = 1 === kk.activeCamera.mode ? 1 : 0,
              Xk = 0 === kk.activeCamera.mode ? 1 : 0;
            (Rk ^ ak || tk ^ Xk) && (Fk.CAMERA_ORTHOGRAPHIC = 1 === ak, Fk.CAMERA_PERSPECTIVE = 1 === Xk, Bk = !0)
          }
          return Bk
        }(kk, Rk);
      !1 !== ak && (wk = (0, Xk.g)(Bk, kk, Rk)), Rk.DEPTHPREPASS !== !Fk.getColorWrite() && (Rk.DEPTHPREPASS = !Rk.DEPTHPREPASS, wk = !0), Rk.INSTANCES !== tk && (Rk.INSTANCES = tk, wk = !0), Rk.THIN_INSTANCES !== bk && (Rk.THIN_INSTANCES = bk, wk = !0), wk && Rk.markAsUnprocessed()
    }
    const Dk = 40,
      zk = 64,
      Pk = new WeakMap,
      hk = new WeakSet;

    function qk(kk, Fk, Bk, tk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Fk._areAttributesDirty && Fk._needNormals === Fk._normals && Fk._needUVs === Fk._uvs) return !1;
      Fk._normals = Fk._needNormals, Fk._uvs = Fk._needUVs, Fk.NORMAL = Fk._needNormals && kk.isVerticesDataPresent("normal"), Fk._needNormals && kk.isVerticesDataPresent("tangent") && (Fk.TANGENT = !0);
      for (let Rk = 1; Rk <= 6; ++Rk) Fk["UV" + Rk] = !!Fk._needUVs && kk.isVerticesDataPresent(`uv${1===Rk?"":Rk}`);
      if (Bk) {
        const Bk = kk.useVertexColors && kk.isVerticesDataPresent("color");
        Fk.VERTEXCOLOR = Bk, Fk.VERTEXALPHA = kk.hasVertexAlpha && Bk && Xk
      }
      return kk.isVerticesDataPresent("instanceColor") && (kk.GRk || kk.hasThinInstances) && (Fk.INSTANCESCOLOR = !0), tk && function(kk, Fk) {
        if (kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
          Fk.NUM_BONE_INFLUENCERS = kk.numBoneInfluencers;
          const Bk = void 0 !== Fk.BONETEXTURE;
          if (kk.skeleton.isUsingTextureForMatrices && Bk) Fk.BONETEXTURE = !0;
          else {
            Fk.BonesPerMesh = kk.skeleton.bones.length + 1, Fk.BONETEXTURE = !Bk && void 0;
            const tk = kk.XN(),
              ak = tk.prePassRenderer;
            if (ak && ak.enabled) {
              const Bk = -1 === ak.excludedSkinnedMesh.indexOf(kk);
              Fk.BONES_VELOCITY_ENABLED = Bk
            }
            const Xk = !0 === Fk.MULTIVIEW,
              bk = 2 * Fk.BonesPerMesh + (Xk ? 1 : 0);
            if (Pk.get(kk.skeleton) !== bk) {
              Pk.set(kk.skeleton, bk);
              const Bk = tk.ne().getCaps().maxVertexUniformVectors;
              if (Bk && !hk.has(kk.skeleton)) {
                const tk = 4 * Fk.BonesPerMesh,
                  ak = Xk ? zk : Dk,
                  bk = Math.max(Bk - ak, 0);
                (tk > bk || Xk && 3 * tk > Bk) && (hk.add(kk.skeleton), Rk.b.Warn(`Skeleton "${kk.skeleton.name}": ${kk.skeleton.bones.length} bones stored as vertex uniforms use ${tk} of ~${bk} usable uniform vectors${Xk?" (multiview)":""} on a device reporting ${Bk}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Fk.NUM_BONE_INFLUENCERS = 0, Fk.BonesPerMesh = 0, void 0 !== Fk.BONETEXTURE && (Fk.BONETEXTURE = !1)
      }(kk, Fk), ak && function(kk, Fk) {
        const Bk = kk.morphTargetManager;
        Bk ? (Fk.MORPHTARGETS_UV = Bk.supportsUVs && Fk.UV1, Fk.MORPHTARGETS_UV2 = Bk.supportsUV2s && Fk.UV2, Fk.MORPHTARGETS_TANGENT = Bk.supportsTangents && Fk.TANGENT, Fk.MORPHTARGETS_NORMAL = Bk.supportsNormals && Fk.NORMAL, Fk.MORPHTARGETS_POSITION = Bk.supportsPositions, Fk.MORPHTARGETS_COLOR = Bk.supportsColors, Fk.MORPHTARGETTEXTURE_HASUVS = Bk.hasUVs, Fk.MORPHTARGETTEXTURE_HASUV2S = Bk.hasUV2s, Fk.MORPHTARGETTEXTURE_HASTANGENTS = Bk.hasTangents, Fk.MORPHTARGETTEXTURE_HASNORMALS = Bk.hasNormals, Fk.MORPHTARGETTEXTURE_HASPOSITIONS = Bk.hasPositions, Fk.MORPHTARGETTEXTURE_HASCOLORS = Bk.hasColors, Fk.NUM_MORPH_INFLUENCERS = Bk.numMaxInfluencers || Bk.numInfluencers, Fk.MORPHTARGETS = Fk.NUM_MORPH_INFLUENCERS > 0, Fk.MORPHTARGETS_TEXTURE = Bk.isUsingTextureForTargets) : (Fk.MORPHTARGETS_UV = !1, Fk.MORPHTARGETS_UV2 = !1, Fk.MORPHTARGETS_TANGENT = !1, Fk.MORPHTARGETS_NORMAL = !1, Fk.MORPHTARGETS_POSITION = !1, Fk.MORPHTARGETS_COLOR = !1, Fk.MORPHTARGETTEXTURE_HASUVS = !1, Fk.MORPHTARGETTEXTURE_HASUV2S = !1, Fk.MORPHTARGETTEXTURE_HASTANGENTS = !1, Fk.MORPHTARGETTEXTURE_HASNORMALS = !1, Fk.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Fk.MORPHTARGETTEXTURE_HAS_COLORS = !1, Fk.MORPHTARGETS = !1, Fk.NUM_MORPH_INFLUENCERS = 0)
      }(kk, Fk), bk && function(kk, Fk) {
        const Bk = kk.bakedVertexAnimationManager;
        Fk.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Bk || !Bk.isEnabled)
      }(kk, Fk), !0
    }

    function Ck(kk, Fk) {
      if (kk.activeCamera) {
        const Bk = Fk.MULTIVIEW;
        Fk.MULTIVIEW = null !== kk.activeCamera.outputRenderTarget && kk.activeCamera.outputRenderTarget.getViewCount() > 1, Fk.MULTIVIEW != Bk && Fk.markAsUnprocessed()
      }
    }

    function Zk(kk, Fk, Bk) {
      const Rk = Fk.ORDER_INDEPENDENT_TRANSPARENCY,
        tk = Fk.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Fk.ORDER_INDEPENDENT_TRANSPARENCY = kk.useOrderIndependentTransparency && Bk, Fk.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !kk.ne().getCaps().textureFloatLinearFiltering, Rk === Fk.ORDER_INDEPENDENT_TRANSPARENCY && tk === Fk.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Fk.markAsUnprocessed()
    }

    function pk(kk, Fk, Bk) {
      const Rk = Fk.PREPASS;
      if (!Fk._arePrePassDirty) return;
      const tk = [{
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
      if (kk.prePassRenderer && kk.prePassRenderer.enabled && Bk) {
        Fk.PREPASS = !0, Fk.SCENE_MRT_COUNT = kk.prePassRenderer.mrtCount, Fk.PREPASS_NORMAL_WORLDSPACE = kk.prePassRenderer.generateNormalsInWorldSpace, Fk.PREPASS_COLOR = !0, Fk.PREPASS_COLOR_INDEX = 0;
        for (let Bk = 0; Bk < tk.length; Bk++) {
          const Rk = kk.prePassRenderer.getIndex(tk[Bk].type); - 1 !== Rk ? (Fk[tk[Bk].define] = !0, Fk[tk[Bk].index] = Rk) : Fk[tk[Bk].define] = !1
        }
      } else {
        Fk.PREPASS = !1;
        for (let kk = 0; kk < tk.length; kk++) Fk[tk[kk].define] = !1
      }
      Fk.PREPASS != Rk && (Fk.markAsUnprocessed(), Fk.markAsImageProcessingDirty())
    }

    function Kk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        dk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      tk && tk.push("Light" + kk), ak || (Fk.push("vLightData" + kk, "vLightDiffuse" + kk, "vLightSpecular" + kk, "vLightDirection" + kk, "vLightWidth" + kk, "vLightHeight" + kk, "vLightFalloff" + kk, "vLightGround" + kk, "vSliceData" + kk, "vSliceRanges" + kk, "lightMatrix" + kk, "shadowsInfo" + kk, "depthValues" + kk), Bk.push("shadowTexture" + kk), Bk.push("depthTexture" + kk), Fk.push("viewFrustumZ" + kk, "cascadeBlendFactor" + kk, "lightSizeUVCorrection" + kk, "depthCorrection" + kk, "penumbraDarkness" + kk, "frustumLengths" + kk), Rk && (Bk.push("projectionLightTexture" + kk), Fk.push("textureProjectionMatrix" + kk)), Xk && Bk.push("iesLightTexture" + kk), wk && Bk.push("rectAreaLightEmissionTexture" + kk), bk && (Bk.push("lightDataTexture" + kk), dk || Bk.push("tileMaskTexture" + kk)))
    }

    function xk(kk, Fk, Bk) {
      const Rk = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Bk && Rk.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), kk.push(...Rk);
      Fk.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function jk(kk, Fk, Bk) {
      let Rk, tk, ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Xk = null;
      if (kk.uniformsNames) {
        const bk = kk;
        Rk = bk.uniformsNames, tk = bk.uniformBuffersNames, Fk = bk.samplers, Bk = bk.defines, ak = bk.maxSimultaneousLights || 0, Xk = bk.shaderLanguage ?? null
      } else Rk = kk, Fk || (Fk = []);
      for (let bk = 0; bk < ak && Bk["LIGHT" + bk]; bk++) Kk(bk, Rk, Fk, Bk["PROJECTEDLIGHTTEXTURE" + bk], tk, !1, Bk["IESLIGHTTEXTURE" + bk], Bk["CLUSTLIGHT" + bk], Bk["RECTAREALIGHTEMISSIONTEXTURE" + bk], 1 === Xk);
      Bk.NUM_MORPH_INFLUENCERS && (Rk.push("morphTargetInfluences"), Rk.push("morphTargetCount")), Bk.BAKED_VERTEX_ANIMATION_TEXTURE && (Rk.push("bakedVertexAnimationSettings"), Rk.push("bakedVertexAnimationTextureSizeInverted"), Rk.push("bakedVertexAnimationTime"), Fk.push("bakedVertexAnimationTexture"))
    }

    function lk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      kk.addUniform("vReflectionInfos", 2), kk.addUniform("reflectionMatrix", 16), Fk && kk.addUniform("vReflectionMicrosurfaceInfos", 3), Bk && (kk.addUniform("vReflectionPosition", 3), kk.addUniform("vReflectionSize", 3)), Rk && (kk.addUniform("vReflectionFilteringInfo", 2), kk.addUniform("vReflectionDominantDirection", 3)), ak && kk.addUniform("vReflectionColor", 3), tk && (kk.addUniform("vSphericalL00", 3), kk.addUniform("vSphericalL1_1", 3), kk.addUniform("vSphericalL10", 3), kk.addUniform("vSphericalL11", 3), kk.addUniform("vSphericalL2_2", 3), kk.addUniform("vSphericalL2_1", 3), kk.addUniform("vSphericalL20", 3), kk.addUniform("vSphericalL21", 3), kk.addUniform("vSphericalL22", 3), kk.addUniform("vSphericalX", 3), kk.addUniform("vSphericalY", 3), kk.addUniform("vSphericalZ", 3), kk.addUniform("vSphericalXX_ZZ", 3), kk.addUniform("vSphericalYY_ZZ", 3), kk.addUniform("vSphericalZZ", 3), kk.addUniform("vSphericalXY", 3), kk.addUniform("vSphericalYZ", 3), kk.addUniform("vSphericalZX", 3))
    }
  },
  39753: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(36758),
      tk = Bk(39695);
    class ak extends tk.c {
      constructor(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(kk, Fk, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Rk.c, this._storeEffectOnSubMeshes = Bk
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(kk, Fk) {
        return !!kk && (!this._storeEffectOnSubMeshes || (!kk.AY || 0 === kk.AY.length || this.isReadyForSubMesh(kk, kk.AY[0], Fk)))
      }
      _isReadyForSubMesh(kk) {
        const Fk = kk.materialDefines;
        return !(this.checkReadyOnEveryCall || !kk.effect || !Fk || Fk._renderId !== this.XN().getRenderId())
      }
      bindOnlyWorldMatrix(kk) {
        this._activeEffect.setMatrix("world", kk)
      }
      bindOnlyNormalMatrix(kk) {
        this._activeEffect.setMatrix("normalMatrix", kk)
      }
      bind(kk, Fk) {
        Fk && this.bindForSubMesh(kk, Fk, Fk.AY[0])
      }
      _afterBind(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(kk, Fk, Bk), this.XN()._cachedEffect = Fk, Bk ? Bk._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Bk._drawWrapper._forceRebindOnNextCall || kk.isCachedMaterialInvalid(this, Fk, Rk)
      }
      dispose(kk, Fk, Bk) {
        this._activeEffect = void 0, super.dispose(kk, Fk, Bk)
      }
    }
  },
  39774: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      f: () => tk
    });
    const Rk = new WeakMap;

    function tk(kk) {
      const Fk = kk.getVertexBuffers();
      if (!Fk) return null;
      let Bk = Rk.get(kk);
      if (Bk) {
        let kk = !1;
        for (const Rk in Fk)
          if (!Bk.has(Rk)) {
            kk = !0;
            break
          } if (!kk) return Bk
      } else Bk = new Map, Rk.set(kk, Bk);
      for (const Rk in Fk) {
        const kk = Fk[Rk];
        if (kk) {
          const Fk = kk.byteOffset,
            tk = kk.byteStride,
            ak = kk.type,
            Xk = kk.normalized;
          Bk.set(Rk, {
            offset: Fk,
            stride: tk,
            type: ak,
            normalized: Xk
          })
        }
      }
      return Bk
    }

    function ak(kk, Fk) {
      Fk.forEach(((Fk, Bk) => {
        const Rk = `vp_${Bk}_info`;
        kk.setFloat4(Rk, Fk.offset, Fk.stride, Fk.type, Fk.normalized ? 1 : 0)
      }))
    }
  },
  39729: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      e: () => wk
    });
    var Rk = Bk(39397),
      tk = Bk(36758),
      ak = Bk(39404);
    let Xk = (() => {
      var kk;
      let Fk, Bk, tk = [];
      return kk = class {
        static extractMinAndMaxIndexed(kk, Fk, Bk, Rk, tk, ak) {
          for (let Xk = Bk; Xk < Bk + Rk; Xk++) {
            const Bk = 3 * Fk[Xk],
              Rk = kk[Bk],
              bk = kk[Bk + 1],
              wk = kk[Bk + 2];
            tk.minimizeInPlaceFromFloats(Rk, bk, wk), ak.maximizeInPlaceFromFloats(Rk, bk, wk)
          }
        }
        static extractMinAndMax(kk, Fk, Bk, Rk, tk, ak) {
          for (let Xk = Fk, bk = Fk * Rk; Xk < Fk + Bk; Xk++, bk += Rk) {
            const Fk = kk[bk],
              Bk = kk[bk + 1],
              Rk = kk[bk + 2];
            tk.minimizeInPlaceFromFloats(Fk, Bk, Rk), ak.maximizeInPlaceFromFloats(Fk, Bk, Rk)
          }
        }
      }, (() => {
        const Xk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [ak.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Bk = [ak.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Rk.j)(kk, null, Fk, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: kk => "extractMinAndMaxIndexed" in kk,
            get: kk => kk.extractMinAndMaxIndexed
          },
          metadata: Xk
        }, null, tk), (0, Rk.j)(kk, null, Bk, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: kk => "extractMinAndMax" in kk,
            get: kk => kk.extractMinAndMax
          },
          metadata: Xk
        }, null, tk), Xk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xk
        }), (0, Rk.l)(kk, tk)
      })(), kk
    })();

    function bk(kk, Fk, Bk, Rk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const bk = new tk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        wk = new tk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Xk.extractMinAndMaxIndexed(kk, Fk, Bk, Rk, bk, wk), ak && (bk.x -= bk.x * ak.x + ak.y, bk.y -= bk.y * ak.x + ak.y, bk.z -= bk.z * ak.x + ak.y, wk.x += wk.x * ak.x + ak.y, wk.y += wk.y * ak.x + ak.y, wk.z += wk.z * ak.x + ak.y), {
        minimum: bk,
        maximum: wk
      }
    }

    function wk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        ak = arguments.length > 4 ? arguments[4] : void 0;
      const bk = new tk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        wk = new tk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return ak || (ak = 3), Xk.extractMinAndMax(kk, Fk, Bk, ak, bk, wk), Rk && (bk.x -= bk.x * Rk.x + Rk.y, bk.y -= bk.y * Rk.x + Rk.y, bk.z -= bk.z * Rk.x + Rk.y, wk.x += wk.x * Rk.x + Rk.y, wk.y += wk.y * Rk.x + Rk.y, wk.z += wk.z * Rk.x + Rk.y), {
        minimum: bk,
        maximum: wk
      }
    }
  },
  39703: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => sk
    });
    var Rk, tk = Bk(39541),
      ak = Bk(39709),
      Xk = Bk(39716),
      bk = Bk(39729),
      wk = Bk(39733),
      dk = Bk(39296);
    class sk {
      get materialDefines() {
        const kk = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof kk ? null : kk
      }
      set materialDefines(kk) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = kk
      }
      _getDrawWrapper(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        kk = kk ?? this._engine.currentRenderPassId;
        let Bk = this._drawWrappers[kk];
        return !Bk && Fk && (this._drawWrappers[kk] = Bk = new wk.c(this._mesh.XN().ne())), Bk
      }
      _removeDrawWrapper(kk) {
        let Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[kk]?.dispose(Fk), this._drawWrappers[kk] = void 0
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const tk = this._drawWrapper;
        tk.setEffect(kk, Fk, Rk), void 0 !== Bk && (tk.materialContext = Bk), kk || (tk.defines = null, tk.materialContext = void 0)
      }
      resetDrawCache(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== kk) return void this._removeDrawWrapper(kk, !0, Fk);
          for (const kk of this._drawWrappers) kk?.dispose(Fk)
        }
        this._drawWrappers = []
      }
      static AddToMesh(kk, Fk, Bk, Rk, tk, ak, Xk) {
        return new sk(kk, Fk, Bk, Rk, tk, ak, Xk, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(kk, Fk, Bk, Rk, tk, ak, Xk) {
        let bk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          wk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = kk, this.verticesStart = Fk, this.verticesCount = Bk, this.indexStart = Rk, this.indexCount = tk, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = ak, this._renderingMesh = Xk || ak, wk && ak.AY.push(this), this._engine = this._mesh.XN().ne(), this.resetDrawCache(), this._trianglePlanes = [], this._id = ak.AY.length - 1, bk && (this.refreshBoundingInfo(), ak.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      ZH() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.ZH() : this._boundingInfo
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
      Ry() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Fk = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Fk) return kk && this._mesh.XN()._hasDefaultMaterial ? this._mesh.XN().defaultMaterial : null;
        if (this._isMultiMaterial(Fk)) {
          const kk = Fk.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== kk && (this._currentMaterial = kk, this.resetDrawCache()), kk
        }
        return Fk
      }
      _isMultiMaterial(kk) {
        return void 0 !== kk.getSubMaterial
      }
      refreshBoundingInfo() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (kk || (kk = this._renderingMesh.getVerticesData(tk.n.PositionKind)), !kk) return this._boundingInfo = this._mesh.ZH(), this;
        const Fk = this._renderingMesh.hBk();
        let Bk;
        if (0 === this.indexStart && this.indexCount === Fk.length) {
          const kk = this._renderingMesh.ZH();
          Bk = {
            minimum: kk.minimum.clone(),
            maximum: kk.maximum.clone()
          }
        } else Bk = (0, bk.d)(kk, Fk, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Bk.minimum, Bk.maximum) : this._boundingInfo = new Xk.b(Bk.minimum, Bk.maximum), this
      }
      _checkCollision(kk) {
        return this.ZH()._checkCollision(kk)
      }
      updateBoundingInfo(kk) {
        let Fk = this.ZH();
        return Fk || (this.refreshBoundingInfo(), Fk = this.ZH()), Fk && Fk.update(kk), this
      }
      isInFrustum(kk) {
        const Fk = this.ZH();
        return !!Fk && Fk.isInFrustum(kk, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(kk) {
        const Fk = this.ZH();
        return !!Fk && Fk.isCompletelyInFrustum(kk)
      }
      render(kk) {
        return this._renderingMesh.render(this, kk, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(kk, Fk) {
        if (!this._linesIndexBuffer) {
          const Bk = 6 * Math.floor(this.indexCount / 3),
            Rk = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Bk) : new Uint16Array(Bk);
          let tk = 0;
          if (0 === kk.length)
            for (let kk = this.indexStart; kk < this.indexStart + this.indexCount; kk += 3) Rk[tk++] = kk, Rk[tk++] = kk + 1, Rk[tk++] = kk + 1, Rk[tk++] = kk + 2, Rk[tk++] = kk + 2, Rk[tk++] = kk;
          else
            for (let Fk = this.indexStart; Fk < this.indexStart + this.indexCount; Fk += 3) Rk[tk++] = kk[Fk], Rk[tk++] = kk[Fk + 1], Rk[tk++] = kk[Fk + 1], Rk[tk++] = kk[Fk + 2], Rk[tk++] = kk[Fk + 2], Rk[tk++] = kk[Fk];
          this._linesIndexBuffer = Fk.createIndexBuffer(Rk), this._linesIndexCount = Rk.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(kk) {
        const Fk = this.ZH();
        return !!Fk && kk.intersectsBox(Fk.boundingBox)
      }
      intersects(kk, Fk, Bk, Rk, tk) {
        const ak = this.Ry();
        if (!ak) return null;
        let Xk = 3,
          bk = !1;
        switch (ak.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Xk = 1, bk = !0
        }
        return 4 === ak.fillMode ? Bk.length ? this._intersectLines(kk, Fk, Bk, this._mesh.intersectionThreshold, Rk) : this._intersectUnIndexedLines(kk, Fk, Bk, this._mesh.intersectionThreshold, Rk) : !Bk.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(kk, Fk, Bk, Rk, tk) : this._intersectTriangles(kk, Fk, Bk, Xk, bk, Rk, tk)
      }
      _intersectLines(kk, Fk, Bk, Rk, tk) {
        let Xk = null;
        for (let bk = this.indexStart; bk < this.indexStart + this.indexCount; bk += 2) {
          const wk = Fk[Bk[bk]],
            dk = Fk[Bk[bk + 1]],
            sk = kk.intersectionSegment(wk, dk, Rk);
          if (!(sk < 0) && ((tk || !Xk || sk < Xk.distance) && (Xk = new ak.c(null, null, sk), Xk.faceId = bk / 2, tk))) break
        }
        return Xk
      }
      _intersectUnIndexedLines(kk, Fk, Bk, Rk, tk) {
        let Xk = null;
        for (let bk = this.verticesStart; bk < this.verticesStart + this.verticesCount; bk += 2) {
          const Bk = Fk[bk],
            wk = Fk[bk + 1],
            dk = kk.intersectionSegment(Bk, wk, Rk);
          if (!(dk < 0) && ((tk || !Xk || dk < Xk.distance) && (Xk = new ak.c(null, null, dk), Xk.faceId = bk / 2, tk))) break
        }
        return Xk
      }
      _intersectTriangles(kk, Fk, Bk, Rk, tk, ak, Xk) {
        let bk = null,
          wk = -1;
        for (let dk = this.indexStart; dk < this.indexStart + this.indexCount - (3 - Rk); dk += Rk) {
          wk++;
          const Rk = Bk[dk],
            sk = Bk[dk + 1],
            Vk = Bk[dk + 2];
          if (tk && 4294967295 === Vk) {
            dk += 2;
            continue
          }
          const Jk = Fk[Rk],
            Ak = Fk[sk],
            ek = Fk[Vk];
          if (!Jk || !Ak || !ek) continue;
          if (Xk && !Xk(Jk, Ak, ek, kk, Rk, sk, Vk)) continue;
          const yk = kk.intersectsTriangle(Jk, Ak, ek);
          if (yk) {
            if (yk.distance < 0) continue;
            if ((ak || !bk || yk.distance < bk.distance) && (bk = yk, bk.faceId = wk, ak)) break
          }
        }
        return bk
      }
      _intersectUnIndexedTriangles(kk, Fk, Bk, Rk, tk) {
        let ak = null;
        for (let Xk = this.verticesStart; Xk < this.verticesStart + this.verticesCount; Xk += 3) {
          const Bk = Fk[Xk],
            bk = Fk[Xk + 1],
            wk = Fk[Xk + 2];
          if (tk && !tk(Bk, bk, wk, kk, -1, -1, -1)) continue;
          const dk = kk.intersectsTriangle(Bk, bk, wk);
          if (dk) {
            if (dk.distance < 0) continue;
            if ((Rk || !ak || dk.distance < ak.distance) && (ak = dk, ak.faceId = Xk / 3, Rk)) break
          }
        }
        return ak
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(kk, Fk) {
        const Bk = new sk(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, kk, Fk, !1);
        if (!this.IsGlobal) {
          const kk = this.ZH();
          if (!kk) return Bk;
          Bk._boundingInfo = new Xk.b(kk.minimum, kk.maximum)
        }
        return Bk
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.XN().ne()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Fk = this._mesh.AY.indexOf(this);
        this._mesh.AY.splice(Fk, 1), this.resetDrawCache(void 0, kk)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(kk, Fk, Bk, Rk, tk) {
        let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = Number.MAX_VALUE,
          bk = -Number.MAX_VALUE;
        const wk = (tk || Rk).hBk();
        for (let dk = Fk; dk < Fk + Bk; dk++) {
          const kk = wk[dk];
          kk < Xk && (Xk = kk), kk > bk && (bk = kk)
        }
        return new sk(kk, Xk, bk - Xk + 1, Fk, Bk, Rk, tk, ak)
      }
    }(Rk = sk.prototype).projectToRef ?? (Rk.projectToRef = (0, dk.g)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);