export const id = 262;
export const ids = [262];
export const modules = {
  40304: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik) {
        this.bu = kk, this.bv = Fk, this.distance = Ik, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40312: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(37166),
      Tk = Ik(37153),
      ik = Ik(37158);
    class yk {
      constructor(kk, Fk, Ik) {
        this.vectors = (0, Xk.b)(8, Tk.t.Zero), this.center = Tk.t.Zero(), this.centerWorld = Tk.t.Zero(), this.extendSize = Tk.t.Zero(), this.extendSizeWorld = Tk.t.Zero(), this.directions = (0, Xk.b)(3, Tk.t.Zero), this.vectorsWorld = (0, Xk.b)(8, Tk.t.Zero), this.minimumWorld = Tk.t.Zero(), this.maximumWorld = Tk.t.Zero(), this.minimum = Tk.t.Zero(), this.maximum = Tk.t.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(kk, Fk, Ik)
      }
      reConstruct(kk, Fk, Ik) {
        const Xk = kk.x,
          ik = kk.y,
          yk = kk.z,
          lk = Fk.x,
          ak = Fk.y,
          qk = Fk.z,
          Lk = this.vectors;
        this.minimum.t5(Xk, ik, yk), this.maximum.t5(lk, ak, qk), Lk[0].t5(Xk, ik, yk), Lk[1].t5(lk, ak, qk), Lk[2].t5(lk, ik, yk), Lk[3].t5(Xk, ak, yk), Lk[4].t5(Xk, ik, qk), Lk[5].t5(lk, ak, yk), Lk[6].t5(Xk, ak, qk), Lk[7].t5(lk, ik, qk), Fk.addToRef(kk, this.center).scaleInPlace(.5), Fk.subtractToRef(kk, this.extendSize).scaleInPlace(.5), this._worldMatrix = Ik || Tk.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(kk) {
        const Fk = yk._TmpVector3,
          Ik = this.maximum.subtractToRef(this.minimum, Fk[0]),
          Xk = Ik.length();
        Ik.normalizeFromLength(Xk);
        const Tk = Xk * kk,
          ik = Ik.scaleInPlace(.5 * Tk),
          lk = this.center.subtractToRef(ik, Fk[1]),
          ak = this.center.addToRef(ik, Fk[2]);
        return this.reConstruct(lk, ak, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(kk) {
        const Fk = this.minimumWorld,
          Ik = this.maximumWorld,
          Xk = this.directions,
          ik = this.vectorsWorld,
          yk = this.vectors;
        if (kk.isIdentity()) {
          Fk.kS(this.minimum), Ik.kS(this.maximum);
          for (let kk = 0; kk < 8; ++kk) ik[kk].kS(yk[kk]);
          this.extendSizeWorld.kS(this.extendSize), this.centerWorld.kS(this.center)
        } else {
          Fk.I6(Number.MAX_VALUE), Ik.I6(-Number.MAX_VALUE);
          for (let Xk = 0; Xk < 8; ++Xk) {
            const lk = ik[Xk];
            Tk.t.TransformCoordinatesToRef(yk[Xk], kk, lk), Fk.minimizeInPlace(lk), Ik.maximizeInPlace(lk)
          }
          Ik.subtractToRef(Fk, this.extendSizeWorld).scaleInPlace(.5), Ik.addToRef(Fk, this.centerWorld).scaleInPlace(.5)
        }
        Tk.t.FromArrayToRef(kk.m, 0, Xk[0]), Tk.t.FromArrayToRef(kk.m, 4, Xk[1]), Tk.t.FromArrayToRef(kk.m, 8, Xk[2]), this._worldMatrix = kk
      }
      isInFrustum(kk) {
        return yk.IsInFrustum(this.vectorsWorld, kk)
      }
      isCompletelyInFrustum(kk) {
        return yk.IsCompletelyInFrustum(this.vectorsWorld, kk)
      }
      intersectsPoint(kk) {
        const Fk = this.minimumWorld,
          Ik = this.maximumWorld,
          Xk = Fk.x,
          Tk = Fk.y,
          yk = Fk.z,
          lk = Ik.x,
          ak = Ik.y,
          qk = Ik.z,
          Lk = kk.x,
          tk = kk.y,
          Zk = kk.z,
          jk = -ik.b;
        return !(lk - Lk < jk || jk > Lk - Xk) && (!(ak - tk < jk || jk > tk - Tk) && !(qk - Zk < jk || jk > Zk - yk))
      }
      intersectsSphere(kk) {
        return yk.IntersectsSphere(this.minimumWorld, this.maximumWorld, kk.centerWorld, kk.radiusWorld)
      }
      intersectsMinMax(kk, Fk) {
        const Ik = this.minimumWorld,
          Xk = this.maximumWorld,
          Tk = Ik.x,
          ik = Ik.y,
          yk = Ik.z,
          lk = Xk.x,
          ak = Xk.y,
          qk = Xk.z,
          Lk = kk.x,
          tk = kk.y,
          Zk = kk.z,
          jk = Fk.x,
          ek = Fk.y,
          wk = Fk.z;
        return !(lk < Lk || Tk > jk) && (!(ak < tk || ik > ek) && !(qk < Zk || yk > wk))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(kk, Fk) {
        return kk.intersectsMinMax(Fk.minimumWorld, Fk.maximumWorld)
      }
      static IntersectsSphere(kk, Fk, Ik, Xk) {
        const ik = yk._TmpVector3[0];
        Tk.t.ClampToRef(Ik, kk, Fk, ik);
        return Tk.t.DistanceSquared(Ik, ik) <= Xk * Xk
      }
      static IsCompletelyInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; ++Ik) {
          const Xk = Fk[Ik];
          for (let Fk = 0; Fk < 8; ++Fk)
            if (Xk.dotCoordinate(kk[Fk]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; ++Ik) {
          let Xk = !0;
          const Tk = Fk[Ik];
          for (let Fk = 0; Fk < 8; ++Fk)
            if (Tk.dotCoordinate(kk[Fk]) >= 0) {
              Xk = !1;
              break
            } if (Xk) return !1
        }
        return !0
      }
    }
    yk._TmpVector3 = (0, Xk.b)(3, Tk.t.Zero)
  },
  40308: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk
    });
    var Xk = Ik(37166),
      Tk = Ik(37153),
      ik = Ik(40312);
    class yk {
      constructor(kk, Fk, Ik) {
        this.center = Tk.t.Zero(), this.centerWorld = Tk.t.Zero(), this.minimum = Tk.t.Zero(), this.maximum = Tk.t.Zero(), this.reConstruct(kk, Fk, Ik)
      }
      reConstruct(kk, Fk, Ik) {
        this.minimum.kS(kk), this.maximum.kS(Fk);
        const Xk = Tk.t.Distance(kk, Fk);
        Fk.addToRef(kk, this.center).scaleInPlace(.5), this.radius = .5 * Xk, this._update(Ik || Tk.c.IdentityReadOnly)
      }
      scale(kk) {
        const Fk = yk._TmpVector3,
          Ik = this.maximum.subtractToRef(this.minimum, Fk[0]),
          Xk = Ik.length();
        Ik.normalizeFromLength(Xk);
        const Tk = Xk * kk,
          ik = Ik.scaleInPlace(.5 * Tk),
          lk = this.center.subtractToRef(ik, Fk[1]),
          ak = this.center.addToRef(ik, Fk[2]);
        return this.reConstruct(lk, ak, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(kk) {
        if (kk.isIdentity()) this.centerWorld.kS(this.center), this.radiusWorld = this.radius;
        else {
          Tk.t.TransformCoordinatesToRef(this.center, kk, this.centerWorld);
          const Fk = yk._TmpVector3[0];
          Tk.t.TransformNormalFromFloatsToRef(1, 1, 1, kk, Fk), this.radiusWorld = Math.max(Math.abs(Fk.x), Math.abs(Fk.y), Math.abs(Fk.z)) * this.radius
        }
      }
      isInFrustum(kk) {
        const Fk = this.centerWorld,
          Ik = this.radiusWorld;
        for (let Xk = 0; Xk < 6; Xk++)
          if (kk[Xk].dotCoordinate(Fk) <= -Ik) return !1;
        return !0
      }
      isCenterInFrustum(kk) {
        const Fk = this.centerWorld;
        for (let Ik = 0; Ik < 6; Ik++)
          if (kk[Ik].dotCoordinate(Fk) < 0) return !1;
        return !0
      }
      intersectsPoint(kk) {
        const Fk = Tk.t.DistanceSquared(this.centerWorld, kk);
        return !(this.radiusWorld * this.radiusWorld < Fk)
      }
      static Intersects(kk, Fk) {
        const Ik = Tk.t.DistanceSquared(kk.centerWorld, Fk.centerWorld),
          Xk = kk.radiusWorld + Fk.radiusWorld;
        return !(Xk * Xk < Ik)
      }
      static CreateFromCenterAndRadius(kk, Fk, Ik) {
        this._TmpVector3[0].kS(kk), this._TmpVector3[1].t5(0, 0, Fk), this._TmpVector3[2].kS(kk), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].zXk(this._TmpVector3[1]);
        const Xk = new yk(this._TmpVector3[0], this._TmpVector3[2]);
        return Xk._worldMatrix = Ik || Tk.c.Identity(), Xk
      }
    }
    yk._TmpVector3 = (0, Xk.b)(3, Tk.t.Zero);
    const lk = {
        min: 0,
        max: 0
      },
      ak = {
        min: 0,
        max: 0
      },
      qk = (kk, Fk, Ik) => {
        const Xk = Tk.t.Dot(Fk.centerWorld, kk),
          ik = Math.abs(Tk.t.Dot(Fk.directions[0], kk)) * Fk.extendSize.x + Math.abs(Tk.t.Dot(Fk.directions[1], kk)) * Fk.extendSize.y + Math.abs(Tk.t.Dot(Fk.directions[2], kk)) * Fk.extendSize.z;
        Ik.min = Xk - ik, Ik.max = Xk + ik
      },
      Lk = (kk, Fk, Ik) => (qk(kk, Fk, lk), qk(kk, Ik, ak), !(lk.min > ak.max || ak.min > lk.max));
    class tk {
      constructor(kk, Fk, Ik) {
        this._isLocked = !1, this.boundingBox = new ik.d(kk, Fk, Ik), this.EXk = new yk(kk, Fk, Ik)
      }
      reConstruct(kk, Fk, Ik) {
        this.boundingBox.reConstruct(kk, Fk, Ik), this.EXk.reConstruct(kk, Fk, Ik)
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
        this._isLocked || (this.boundingBox._update(kk), this.EXk._update(kk))
      }
      centerOn(kk, Fk) {
        const Ik = tk._TmpVector3[0].kS(kk).zXk(Fk),
          Xk = tk._TmpVector3[1].kS(kk).addInPlace(Fk);
        return this.boundingBox.reConstruct(Ik, Xk, this.boundingBox.getWorldMatrix()), this.EXk.reConstruct(Ik, Xk, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(kk) {
        const Fk = Tk.t.Minimize(this.minimum, kk),
          Ik = Tk.t.Maximize(this.maximum, kk);
        return this.reConstruct(Fk, Ik, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(kk) {
        const Fk = Tk.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Fk);
        const Ik = Tk.l.Ge[0];
        return Tk.t.TransformCoordinatesToRef(kk.boundingBox.minimumWorld, Fk, Ik), this.encapsulate(Ik), Tk.t.TransformCoordinatesToRef(kk.boundingBox.maximumWorld, Fk, Ik), this.encapsulate(Ik), this
      }
      scale(kk) {
        return this.boundingBox.scale(kk), this.EXk.scale(kk), this
      }
      isInFrustum(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Fk || 3 === Fk) && this.EXk.isCenterInFrustum(kk)) return !0;
        if (!this.EXk.isInFrustum(kk)) return !1;
        return !(1 !== Fk && 3 !== Fk) || this.boundingBox.isInFrustum(kk)
      }
      get diagonalLength() {
        const kk = this.boundingBox;
        return kk.maximumWorld.subtractToRef(kk.minimumWorld, tk._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(kk) {
        return this.boundingBox.isCompletelyInFrustum(kk)
      }
      _checkCollision(kk) {
        return kk._canDoCollision(this.EXk.centerWorld, this.EXk.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(kk) {
        return !!this.EXk.centerWorld && (!!this.EXk.intersectsPoint(kk) && !!this.boundingBox.intersectsPoint(kk))
      }
      intersects(kk, Fk) {
        if (!yk.Intersects(this.EXk, kk.EXk)) return !1;
        if (!ik.d.Intersects(this.boundingBox, kk.boundingBox)) return !1;
        if (!Fk) return !0;
        const Ik = this.boundingBox,
          Xk = kk.boundingBox;
        return !!Lk(Ik.directions[0], Ik, Xk) && (!!Lk(Ik.directions[1], Ik, Xk) && (!!Lk(Ik.directions[2], Ik, Xk) && (!!Lk(Xk.directions[0], Ik, Xk) && (!!Lk(Xk.directions[1], Ik, Xk) && (!!Lk(Xk.directions[2], Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[0], Xk.directions[0]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[0], Xk.directions[1]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[0], Xk.directions[2]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[1], Xk.directions[0]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[1], Xk.directions[1]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[1], Xk.directions[2]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[2], Xk.directions[0]), Ik, Xk) && (!!Lk(Tk.t.Cross(Ik.directions[2], Xk.directions[1]), Ik, Xk) && !!Lk(Tk.t.Cross(Ik.directions[2], Xk.directions[2]), Ik, Xk))))))))))))))
      }
    }
    tk._TmpVector3 = (0, Xk.b)(2, Tk.t.Zero)
  },
  40333: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      e: () => ak,
      g: () => lk,
      h: () => yk
    });
    var Xk = Ik(40152),
      Tk = Ik(37153);

    function ik(kk) {
      -1 === kk.indexOf("vClipPlane") && kk.push("vClipPlane"), -1 === kk.indexOf("vClipPlane2") && kk.push("vClipPlane2"), -1 === kk.indexOf("vClipPlane3") && kk.push("vClipPlane3"), -1 === kk.indexOf("vClipPlane4") && kk.push("vClipPlane4"), -1 === kk.indexOf("vClipPlane5") && kk.push("vClipPlane5"), -1 === kk.indexOf("vClipPlane6") && kk.push("vClipPlane6")
    }

    function yk(kk, Fk, Ik) {
      const Xk = !!(kk.clipPlane ?? Fk.clipPlane),
        Tk = !!(kk.clipPlane2 ?? Fk.clipPlane2),
        ik = !!(kk.clipPlane3 ?? Fk.clipPlane3),
        yk = !!(kk.clipPlane4 ?? Fk.clipPlane4),
        lk = !!(kk.clipPlane5 ?? Fk.clipPlane5),
        ak = !!(kk.clipPlane6 ?? Fk.clipPlane6);
      Xk && Ik.push("#define CLIPPLANE"), Tk && Ik.push("#define CLIPPLANE2"), ik && Ik.push("#define CLIPPLANE3"), yk && Ik.push("#define CLIPPLANE4"), lk && Ik.push("#define CLIPPLANE5"), ak && Ik.push("#define CLIPPLANE6")
    }

    function lk(kk, Fk, Ik) {
      let Xk = !1;
      const Tk = !!(kk.clipPlane ?? Fk.clipPlane),
        ik = !!(kk.clipPlane2 ?? Fk.clipPlane2),
        yk = !!(kk.clipPlane3 ?? Fk.clipPlane3),
        lk = !!(kk.clipPlane4 ?? Fk.clipPlane4),
        ak = !!(kk.clipPlane5 ?? Fk.clipPlane5),
        qk = !!(kk.clipPlane6 ?? Fk.clipPlane6);
      return Ik.CLIPPLANE !== Tk && (Ik.CLIPPLANE = Tk, Xk = !0), Ik.CLIPPLANE2 !== ik && (Ik.CLIPPLANE2 = ik, Xk = !0), Ik.CLIPPLANE3 !== yk && (Ik.CLIPPLANE3 = yk, Xk = !0), Ik.CLIPPLANE4 !== lk && (Ik.CLIPPLANE4 = lk, Xk = !0), Ik.CLIPPLANE5 !== ak && (Ik.CLIPPLANE5 = ak, Xk = !0), Ik.CLIPPLANE6 !== qk && (Ik.CLIPPLANE6 = qk, Xk = !0), Xk
    }

    function ak(kk, Fk, Ik) {
      let Xk = Fk.clipPlane ?? Ik.clipPlane;
      qk(kk, "vClipPlane", Xk), Xk = Fk.clipPlane2 ?? Ik.clipPlane2, qk(kk, "vClipPlane2", Xk), Xk = Fk.clipPlane3 ?? Ik.clipPlane3, qk(kk, "vClipPlane3", Xk), Xk = Fk.clipPlane4 ?? Ik.clipPlane4, qk(kk, "vClipPlane4", Xk), Xk = Fk.clipPlane5 ?? Ik.clipPlane5, qk(kk, "vClipPlane5", Xk), Xk = Fk.clipPlane6 ?? Ik.clipPlane6, qk(kk, "vClipPlane6", Xk)
    }

    function qk(kk, Fk, Ik) {
      if (Ik) {
        const ik = Xk.d.mG()?.floatingOriginOffset || Tk.t.ZeroReadOnly;
        kk.setFloat4(Fk, Ik.normal.x, Ik.normal.y, Ik.normal.z, Ik.d + Tk.t.Dot(Ik.normal, ik))
      }
    }
  },
  40349: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
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
          const Ik = this._mesh.mG();
          for (let kk = 0; kk < Ik.meshes.length; kk++) {
            const Xk = Ik.meshes[kk];
            if (Xk.material) {
              if (Xk.computeBonesUsingShaders && 0 !== Xk.numBoneInfluencers)
                if (Xk.material.getEffect() === Fk) Xk.computeBonesUsingShaders = !1;
                else if (Xk.lK)
                for (const kk of Xk.lK) {
                  if (kk.effect === Fk) {
                    Xk.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Xk.computeBonesUsingShaders && Xk.numBoneInfluencers > 0 && (Xk.computeBonesUsingShaders = !1)
          }
        } else {
          const Fk = this._defines[this._currentRank];
          if (Fk)
            for (let Ik = 0; Ik < Fk.length; Ik++) kk = kk.replace("#define " + Fk[Ik], "");
          this._currentRank++
        }
        return kk
      }
    }
  },
  40295: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => xk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(40097),
      yk = Ik(37187),
      lk = Ik(37178),
      ak = Ik(40297),
      qk = Ik(40134),
      Lk = Ik(38674),
      tk = Ik(37785),
      Zk = Ik(40324),
      jk = Ik(40021);
    let ek = (() => {
      var kk;
      let Fk, Ik, ik, yk, lk, ak, qk, Lk, tk, Zk, ek, wk, Hk = [];
      return kk = class {
        constructor() {
          this._func = (0, Xk.n)(this, Hk), this.reset()
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
          jk.b.Clone((() => kk), this)
        }
        serialize() {
          return jk.b.Serialize(this)
        }
        parse(kk, Fk, Ik) {
          jk.b.Parse((() => this), kk, Fk, Ik)
        }
      }, (() => {
        const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], lk = [(0, Tk.J)()], ak = [(0, Tk.J)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.J)()], tk = [(0, Tk.J)()], Zk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Fk, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: kk => "func" in kk,
            get: kk => kk.func
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, Ik, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: kk => "backFunc" in kk,
            get: kk => kk.backFunc
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, ik, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: kk => "funcRef" in kk,
            get: kk => kk.funcRef
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, yk, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "funcMask" in kk,
            get: kk => kk.funcMask
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, lk, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "opStencilFail" in kk,
            get: kk => kk.opStencilFail
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, ak, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "opDepthFail" in kk,
            get: kk => kk.opDepthFail
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, qk, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "opStencilDepthPass" in kk,
            get: kk => kk.opStencilDepthPass
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, Lk, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpStencilFail" in kk,
            get: kk => kk.backOpStencilFail
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, tk, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpDepthFail" in kk,
            get: kk => kk.backOpDepthFail
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, Zk, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: kk => "backOpStencilDepthPass" in kk,
            get: kk => kk.backOpStencilDepthPass
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, ek, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: kk => "mask" in kk,
            get: kk => kk.mask
          },
          metadata: jk
        }, null, Hk), (0, Xk.j)(kk, null, wk, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "enabled" in kk,
            get: kk => kk.enabled
          },
          metadata: jk
        }, null, Hk), jk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jk
        })
      })(), kk
    })();
    var wk = Ik(40329),
      Hk = Ik(39902),
      Jk = Ik(39863);
    let xk = (() => {
      var kk;
      let Fk, Ik, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, Nk, ck, Wk, fk, Bk, dk, Yk, Ak = [],
        gk = [],
        mk = [],
        hk = [],
        rk = [],
        Dk = [],
        Mk = [],
        kF = [],
        FF = [],
        IF = [],
        XF = [],
        TF = [],
        iF = [],
        yF = [],
        lF = [],
        aF = [],
        qF = [],
        LF = [],
        tF = [],
        ZF = [],
        jF = [],
        eF = [],
        wF = [],
        HF = [],
        JF = [],
        xF = [],
        PF = [],
        KF = [],
        QF = [],
        sF = [],
        VF = [],
        zF = [],
        SF = [],
        oF = [],
        vF = [],
        EF = [],
        OF = [],
        nF = [],
        GF = [],
        pF = [],
        uF = [],
        bF = [],
        RF = [],
        UF = [],
        CF = [],
        NF = [],
        cF = [],
        WF = [],
        fF = [],
        BF = [],
        dF = [];
      return kk = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Fk) {
          this._useVertexPulling !== Fk && (this._useVertexPulling = Fk, this.UFk(kk.MiscDirtyFlag))
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
          const Ik = this._alpha;
          this._alpha = Fk, 1 !== Ik && 1 !== Fk || this.UFk(kk.MiscDirtyFlag + kk.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Fk) {
          this._backFaceCulling !== Fk && (this._backFaceCulling = Fk, this.UFk(kk.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Fk) {
          const Ik = Math.max(0, Math.min(0 | Fk, 4));
          this._textureRepetitionMode !== Ik && (this._textureRepetitionMode = Ik, this.UFk(kk.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Fk) {
          this._cullBackFaces !== Fk && (this._cullBackFaces = Fk, this.UFk(kk.TextureDirtyFlag))
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
          this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new yk.e), this._onBindObservable
        }
        set onBind(kk) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(kk)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new yk.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new yk.e), this._onEffectCreatedObservable
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
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Ik] !== Fk && (this._alphaMode[Ik] = Fk, this.UFk(kk.TextureDirtyFlag))
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
          this._fogEnabled !== Fk && (this._fogEnabled = Fk, this.UFk(kk.MiscDirtyFlag))
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
          this._fillMode !== Fk && (this._fillMode = Fk, this.UFk(kk.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(kk) {
          const Fk = this.mG().Oe().getCaps().fragmentDepthSupported;
          kk && !Fk && Lk.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = kk && Fk, this._markAllSubMeshesAsMiscDirty()
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
        constructor(Fk, Ik, Tk) {
          let ak = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Xk.n)(this, Ak), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Xk.n)(this, gk, void 0), this.uniqueId = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, void 0)), this._loadedUniqueId = (0, Xk.n)(this, rk), this.name = (0, Xk.n)(this, Dk, void 0), this.metadata = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, null)), this._internalMetadata = (0, Xk.n)(this, FF), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Xk.n)(this, IF, !1), this.checkReadyOnlyOnce = ((0, Xk.n)(this, XF), (0, Xk.n)(this, TF, !1)), this.state = ((0, Xk.n)(this, iF), (0, Xk.n)(this, yF, "")), this._alpha = ((0, Xk.n)(this, lF), (0, Xk.n)(this, aF, 1)), this.inspectableCustomProperties = (0, Xk.n)(this, qF), this._backFaceCulling = (0, Xk.n)(this, LF, !0), this._textureRepetitionMode = ((0, Xk.n)(this, tF), (0, Xk.n)(this, ZF, 0)), this.textureRepetitionHexTilingParams = ((0, Xk.n)(this, jF), (0, Xk.n)(this, eF, [1, .6, 7, .5])), this._cullBackFaces = ((0, Xk.n)(this, wF), (0, Xk.n)(this, HF, !0)), this._blockDirtyMechanism = ((0, Xk.n)(this, JF), !1), this.sideOrientation = (0, Xk.n)(this, xF, null), this.onCompiled = ((0, Xk.n)(this, PF), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.hG = new yk.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Xk.n)(this, KF, [2]), this._needDepthPrePass = ((0, Xk.n)(this, QF), (0, Xk.n)(this, sF, !1)), this.disableDepthWrite = ((0, Xk.n)(this, VF), (0, Xk.n)(this, zF, !1)), this.disableColorWrite = ((0, Xk.n)(this, SF), (0, Xk.n)(this, oF, !1)), this.forceDepthWrite = ((0, Xk.n)(this, vF), (0, Xk.n)(this, EF, !1)), this.depthFunction = ((0, Xk.n)(this, OF), (0, Xk.n)(this, nF, 0)), this.separateCullingPass = ((0, Xk.n)(this, GF), (0, Xk.n)(this, pF, !1)), this._fogEnabled = ((0, Xk.n)(this, uF), (0, Xk.n)(this, bF, !0)), this.pointSize = ((0, Xk.n)(this, RF), (0, Xk.n)(this, UF, 1)), this.zOffset = ((0, Xk.n)(this, CF), (0, Xk.n)(this, NF, 0)), this.zOffsetUnits = ((0, Xk.n)(this, cF), (0, Xk.n)(this, WF, 0)), this.clipPlane = (0, Xk.n)(this, fF), this.stencil = new ek, this._isVertexOutputInvariant = (0, Xk.n)(this, BF, kk.ForceVertexOutputInvariant), this._materialContext = (0, Xk.n)(this, dF), this._useUBO = !1, this._fillMode = kk.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Fk;
          const Lk = Ik || lk.e.LastCreatedScene;
          Lk && (this._scene = Lk, this._dirtyCallbacks = {}, this._forceGLSL = ak, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Fk || ik.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Oe().createMaterialContext(), this._drawWrapper = new Zk.e(this._scene.Oe(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new qk.c(this._scene.Oe(), void 0, void 0, Fk), this._useUBO = this.mG().Oe().supportsUniformBuffers, this._createUniformBuffer(), Tk || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), kk.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const kk = this.mG().Oe();
          this._uniformBuffer?.dispose(), kk.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new qk.c(kk, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new qk.c(this._scene.Oe(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReadyForSubMesh(kk, Fk, Ik) {
          const Xk = Fk.materialDefines;
          return !!Xk && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Xk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        mG() {
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
          const Ik = this.mG().meshes;
          for (const kk of Ik)
            if (kk.lK)
              for (const Ik of kk.lK)
                if (Ik.Ue() === this)
                  for (const kk of Ik._drawWrappers) kk && this._materialContext === kk.materialContext && (kk._wasPreviouslyReady = !1, kk._wasPreviouslyUsingInstances = null, kk._forceRebindOnNextCall = Fk);
          Fk && this.UFk(kk.AllDirtyFlag)
        }
        _preBind(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Xk = this._scene.Oe(),
            Tk = (null == Ik ? this.sideOrientation : Ik) === kk.ClockWiseSideOrientation,
            ik = Fk || this._getDrawWrapper();
          return (0, Hk.e)(ik) && ik.materialContext && (ik.materialContext.useVertexPulling = this.useVertexPulling), Xk.enableEffect(ik), Xk.setState(this.backFaceCulling, this.zOffset, !1, Tk, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Tk
        }
        bind(kk, Fk) {}
        buildUniformLayout() {
          const kk = this._uniformBuffer;
          this._eventInfo.ubo = kk, this._callbackPluginEventGeneric(8, this._eventInfo), kk.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(kk, Fk, Ik) {
          const Xk = Ik._drawWrapper;
          this._eventInfo.subMesh = Ik, this._callbackPluginEventBindForSubMesh(this._eventInfo), Xk._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(kk) {}
        bindView(kk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : kk.setMatrix("view", this.mG().getViewMatrix())
        }
        bindViewProjection(kk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (kk.setMatrix("viewProjection", this.mG().getTransformMatrix()), kk.setMatrix("projection", this.mG().getProjectionMatrix()), kk.setMatrix("inverseProjection", this.mG().getInverseProjectionMatrix()))
        }
        bindEyePosition(kk, Fk) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(kk, Fk)
        }
        _afterBind(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Fk && (this._needToBindSceneUbo = !1, (0, wk.u)(Fk, this.mG().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = kk ? kk.visibility : 1, this._onBindObservable && kk && this._onBindObservable.notifyObservers(kk), this.disableDepthWrite) {
            const kk = this._scene.Oe();
            this._cachedDepthWriteState = kk.getDepthWrite(), kk.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const kk = this._scene.Oe();
            this._cachedColorWriteState = kk.getColorWrite(), kk.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const kk = this._scene.Oe();
            this._cachedDepthFunctionState = kk.getDepthFunction() || 0, kk.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Oe().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Oe().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Oe().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(Fk, Ik) {
          const Xk = {};
          if (this._serializePlugins(Xk), kk._ParsePlugins(Xk, Fk, this._scene, Ik), this.pluginManager)
            for (const kk of this.pluginManager._plugins) {
              const Ik = Fk.pluginManager.getPlugin(kk.name);
              Ik && kk.copyTo(Ik)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const kk = [];
            for (const Fk in this.meshMap) {
              const Ik = this.meshMap[Fk];
              Ik && kk.push(Ik)
            }
            return kk
          }
          return this._scene.meshes.filter((kk => kk.material === this))
        }
        forceCompilation(kk, Fk, Ik, Xk) {
          const Tk = {
              clipPlane: !1,
              useInstances: !1,
              ...Ik
            },
            ik = this.mG(),
            yk = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const lk = () => {
            if (!this._scene || !this._scene.Oe()) return;
            const Ik = ik.clipPlane;
            if (Tk.clipPlane && (ik.clipPlane = new tk.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Ik = !0,
                ik = null;
              if (kk.lK) {
                const Fk = new ak.b(0, 0, 0, 0, 0, kk, void 0, !1, !1);
                Fk.materialDefines && (Fk.materialDefines._renderId = -1), this.isReadyForSubMesh(kk, Fk, Tk.useInstances) || (Fk.effect && Fk.effect.getCompilationError() && Fk.effect.allFallbacksProcessed() ? ik = Fk.effect.getCompilationError() : (Ik = !1, setTimeout(lk, 16)))
              }
              Ik && (this.allowShaderHotSwapping = yk, ik && Xk && Xk(ik), Fk && Fk(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = yk, Fk && Fk(this)) : setTimeout(lk, 16);
            Tk.clipPlane && (ik.clipPlane = Ik)
          };
          lk()
        }
        async forceCompilationAsync(kk, Fk) {
          return await new Promise(((Ik, Xk) => {
            this.forceCompilation(kk, (() => {
              Ik()
            }), Fk, (kk => {
              Xk(kk)
            }))
          }))
        }
        UFk(Fk) {
          this.mG().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (kk._DirtyCallbackArray.length = 0, Fk & kk.ImageProcessingDirtyFlag && kk._DirtyCallbackArray.push(kk._ImageProcessingDirtyCallBack), Fk & kk.TextureDirtyFlag && kk._DirtyCallbackArray.push(kk._TextureDirtyCallBack), Fk & kk.LightDirtyFlag && kk._DirtyCallbackArray.push(kk._LightsDirtyCallBack), Fk & kk.FresnelDirtyFlag && kk._DirtyCallbackArray.push(kk._FresnelDirtyCallBack), Fk & kk.AttributesDirtyFlag && kk._DirtyCallbackArray.push(kk._AttributeDirtyCallBack), Fk & kk.MiscDirtyFlag && kk._DirtyCallbackArray.push(kk._MiscDirtyCallBack), Fk & kk.PrePassDirtyFlag && kk._DirtyCallbackArray.push(kk._PrePassDirtyCallBack), kk._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(kk._RunDirtyCallBacks), this.mG().resetCachedMaterial())
        }
        resetDrawCache() {
          const kk = this.mG().meshes;
          for (const Fk of kk)
            if (Fk.lK)
              for (const kk of Fk.lK) kk.Ue() === this && kk.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(kk) {
          const Fk = this.mG();
          if (Fk.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Ik = Fk.meshes;
          for (const Xk of Ik)
            if (Xk.lK)
              for (const Ik of Xk.lK) {
                if ((Ik.Ue() || (Fk._hasDefaultMaterial ? Fk.defaultMaterial : null)) === this)
                  for (const Fk of Ik._drawWrappers) Fk && Fk.defines && Fk.defines.markAllAsDirty && this._materialContext === Fk.materialContext && kk(Fk.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.mG().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const kk = this.mG().enablePrePassRenderer();
          kk && kk.UFk()
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
            this.hG.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(kk)
            }))
          }
        }
        setPrePassRenderer(kk) {
          return !1
        }
        dispose(kk, Fk, Ik) {
          const Xk = this.mG();
          if (Xk.stopAnimation(this), Xk.freeProcessedMaterials(), Xk.removeMaterial(this), this._eventInfo.forceDisposeTextures = Fk, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const kk = this._parentContainer.materials.indexOf(this);
            kk > -1 && this._parentContainer.materials.splice(kk, 1), this._parentContainer = null
          }
          if (!0 !== Ik)
            if (this.meshMap)
              for (const Tk in this.meshMap) {
                const kk = this.meshMap[Tk];
                this._disposeMeshResources(kk)
              } else {
                const kk = Xk.meshes;
                for (const Fk of kk) this._disposeMeshResources(Fk)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.hG.notifyObservers(this), this.hG.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(kk) {
          if (!kk) return;
          const Fk = kk.geometry,
            Ik = kk._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (kk.lK && Ik)
              for (const Xk of kk.lK) {
                const kk = Xk._drawWrappers;
                for (let Tk = 0; Tk < kk.length; Tk++) {
                  const ik = kk[Tk]?.effect;
                  if (!ik) continue;
                  Ik[Tk] === this && (Fk?._releaseVertexArrayObject(ik), Xk._removeDrawWrapper(Tk, !0, !0))
                }
              }
          } else Fk?._releaseVertexArrayObject(this._drawWrapper.effect);
          kk.material !== this || kk.DXk || (kk.material = null)
        }
        serialize() {
          const kk = jk.b.Serialize(this);
          return kk.stencil = this.stencil.serialize(), kk.uniqueId = this.uniqueId, this._serializePlugins(kk), kk
        }
        _serializePlugins(kk) {
          if (kk.plugins = {}, this.pluginManager)
            for (const Fk of this.pluginManager._plugins) Fk.doNotSerialize || (kk.plugins[Fk.getClassName()] = Fk.serialize())
        }
        static ParseAlphaMode(kk, Fk) {
          void 0 !== kk._alphaMode ? Fk._alphaMode = Array.isArray(kk._alphaMode) ? [...kk._alphaMode] : [kk._alphaMode] : void 0 !== kk.alphaMode ? Fk._alphaMode = Array.isArray(kk.alphaMode) ? [...kk.alphaMode] : [kk.alphaMode] : Fk._alphaMode = [2]
        }
        static Parse(Fk, Ik, Xk) {
          if (Fk.customType) {
            if ("BABYLON.PBRMaterial" === Fk.customType && Fk.overloadedAlbedo && (Fk.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Lk.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Fk.customType = "BABYLON.StandardMaterial";
          const Tk = ik.h.Instantiate(Fk.customType).Parse(Fk, Ik, Xk);
          return Tk._loadedUniqueId = Fk.uniqueId, kk.ParseAlphaMode(Fk, Tk), Tk
        }
        static _ParsePlugins(kk, Fk, Ik, Xk) {
          if (kk.plugins)
            for (const Tk in kk.plugins) {
              const yk = kk.plugins[Tk];
              let lk = Fk.pluginManager?.getPlugin(yk.name);
              if (!lk) {
                const kk = ik.h.Instantiate("BABYLON." + Tk);
                kk && (lk = new kk(Fk))
              }
              lk?.parse(yk, Ik, Xk)
            }
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], Jk = [(0, Tk.J)()], xk = [(0, Tk.J)()], Pk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], Qk = [(0, Tk.J)()], sk = [(0, Tk.J)("alpha")], Vk = [(0, Tk.J)("backFaceCulling")], zk = [(0, Tk.J)("textureRepetitionMode")], Sk = [(0, Tk.J)("textureRepetitionHexTilingParams")], vk = [(0, Tk.J)("cullBackFaces")], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], pk = [(0, Tk.J)()], uk = [(0, Tk.J)()], bk = [(0, Tk.J)()], Rk = [(0, Tk.J)()], Uk = [(0, Tk.J)("fogEnabled")], Ck = [(0, Tk.J)()], Nk = [(0, Tk.J)()], ck = [(0, Tk.J)()], Wk = [(0, Tk.J)()], fk = [(0, Tk.J)()], Bk = [(0, Tk.J)()], dk = [(0, Tk.J)()], Yk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Wk, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: kk => "pointsCloud" in kk,
            get: kk => kk.pointsCloud
          },
          metadata: ik
        }, null, Ak), (0, Xk.j)(kk, null, fk, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "fillMode" in kk,
            get: kk => kk.fillMode
          },
          metadata: ik
        }, null, Ak), (0, Xk.j)(kk, null, Bk, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLogarithmicDepth" in kk,
            get: kk => kk.useLogarithmicDepth
          },
          metadata: ik
        }, null, Ak), (0, Xk.j)(kk, null, Yk, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "transparencyMode" in kk,
            get: kk => kk.transparencyMode
          },
          metadata: ik
        }, null, Ak), (0, Xk.j)(null, null, Fk, {
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
          metadata: ik
        }, gk, mk), (0, Xk.j)(null, null, Ik, {
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
          metadata: ik
        }, hk, rk), (0, Xk.j)(null, null, Jk, {
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
          metadata: ik
        }, Dk, Mk), (0, Xk.j)(null, null, xk, {
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
          metadata: ik
        }, kF, FF), (0, Xk.j)(null, null, Pk, {
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
          metadata: ik
        }, IF, XF), (0, Xk.j)(null, null, Kk, {
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
          metadata: ik
        }, TF, iF), (0, Xk.j)(null, null, Qk, {
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
          metadata: ik
        }, yF, lF), (0, Xk.j)(null, null, sk, {
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
          metadata: ik
        }, aF, qF), (0, Xk.j)(null, null, Vk, {
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
          metadata: ik
        }, LF, tF), (0, Xk.j)(null, null, zk, {
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
          metadata: ik
        }, ZF, jF), (0, Xk.j)(null, null, Sk, {
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
          metadata: ik
        }, eF, wF), (0, Xk.j)(null, null, vk, {
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
          metadata: ik
        }, HF, JF), (0, Xk.j)(null, null, Ek, {
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
          metadata: ik
        }, xF, PF), (0, Xk.j)(null, null, Ok, {
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
          metadata: ik
        }, KF, QF), (0, Xk.j)(null, null, nk, {
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
          metadata: ik
        }, sF, VF), (0, Xk.j)(null, null, Gk, {
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
          metadata: ik
        }, zF, SF), (0, Xk.j)(null, null, pk, {
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
          metadata: ik
        }, oF, vF), (0, Xk.j)(null, null, uk, {
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
          metadata: ik
        }, EF, OF), (0, Xk.j)(null, null, bk, {
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
          metadata: ik
        }, nF, GF), (0, Xk.j)(null, null, Rk, {
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
          metadata: ik
        }, pF, uF), (0, Xk.j)(null, null, Uk, {
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
          metadata: ik
        }, bF, RF), (0, Xk.j)(null, null, Ck, {
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
          metadata: ik
        }, UF, CF), (0, Xk.j)(null, null, Nk, {
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
          metadata: ik
        }, NF, cF), (0, Xk.j)(null, null, ck, {
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
          metadata: ik
        }, WF, fF), (0, Xk.j)(null, null, dk, {
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
          metadata: ik
        }, BF, dF), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk.TriangleFillMode = 0, kk.WireFrameFillMode = 1, kk.PointFillMode = 2, kk.PointListDrawMode = 3, kk.LineListDrawMode = 4, kk.LineLoopDrawMode = 5, kk.LineStripDrawMode = 6, kk.TriangleStripDrawMode = 7, kk.TriangleFanDrawMode = 8, kk.ClockWiseSideOrientation = 0, kk.CounterClockWiseSideOrientation = 1, kk.ImageProcessingDirtyFlag = 64, kk.TextureDirtyFlag = 1, kk.LightDirtyFlag = 2, kk.FresnelDirtyFlag = 4, kk.AttributesDirtyFlag = 8, kk.MiscDirtyFlag = 16, kk.PrePassDirtyFlag = 32, kk.AllDirtyFlag = 127, kk.MATERIAL_OPAQUE = 0, kk.MATERIAL_ALPHATEST = 1, kk.MATERIAL_ALPHABLEND = 2, kk.MATERIAL_ALPHATESTANDBLEND = 3, kk.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, kk.MATERIAL_NORMALBLENDMETHOD_RNM = 1, kk.LIGHTFALLOFF_PHYSICAL = 0, kk.LIGHTFALLOFF_GLTF = 1, kk.LIGHTFALLOFF_STANDARD = 2, kk.OnEventObservable = new yk.e, kk.ForceVertexOutputInvariant = !1, kk._AllDirtyCallBack = kk => kk.markAllAsDirty(), kk._ImageProcessingDirtyCallBack = kk => kk.markAsImageProcessingDirty(), kk._TextureDirtyCallBack = kk => kk.markAsTexturesDirty(), kk._FresnelDirtyCallBack = kk => kk.markAsFresnelDirty(), kk._MiscDirtyCallBack = kk => kk.markAsMiscDirty(), kk._PrePassDirtyCallBack = kk => kk.markAsPrePassDirty(), kk._LightsDirtyCallBack = kk => kk.markAsLightDirty(), kk._AttributeDirtyCallBack = kk => kk.markAsAttributesDirty(), kk._FresnelAndMiscDirtyCallBack = Fk => {
        kk._FresnelDirtyCallBack(Fk), kk._MiscDirtyCallBack(Fk)
      }, kk._TextureAndMiscDirtyCallBack = Fk => {
        kk._TextureDirtyCallBack(Fk), kk._MiscDirtyCallBack(Fk)
      }, kk._DirtyCallbackArray = [], kk._RunDirtyCallBacks = Fk => {
        for (const Ik of kk._DirtyCallbackArray) Ik(Fk)
      }, kk
    })();
    Object.getOwnPropertyDescriptor(xk.prototype, "pluginManager") || Object.defineProperty(xk.prototype, "pluginManager", (0, Jk.g)("Material", "pluginManager"))
  },
  40338: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    var Xk = Ik(39885);
    class Tk {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(kk) {
        this._DiffuseTextureEnabled !== kk && (this._DiffuseTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(kk) {
        this._BaseWeightTextureEnabled !== kk && (this._BaseWeightTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(kk) {
        this._BaseDiffuseRoughnessTextureEnabled !== kk && (this._BaseDiffuseRoughnessTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(kk) {
        this._DetailTextureEnabled !== kk && (this._DetailTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(kk) {
        this._DecalMapEnabled !== kk && (this._DecalMapEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(kk) {
        this._AmbientTextureEnabled !== kk && (this._AmbientTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(kk) {
        this._OpacityTextureEnabled !== kk && (this._OpacityTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(kk) {
        this._ReflectionTextureEnabled !== kk && (this._ReflectionTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(kk) {
        this._EmissiveTextureEnabled !== kk && (this._EmissiveTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(kk) {
        this._SpecularTextureEnabled !== kk && (this._SpecularTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(kk) {
        this._BumpTextureEnabled !== kk && (this._BumpTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(kk) {
        this._LightmapTextureEnabled !== kk && (this._LightmapTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(kk) {
        this._RefractionTextureEnabled !== kk && (this._RefractionTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(kk) {
        this._ColorGradingTextureEnabled !== kk && (this._ColorGradingTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(kk) {
        this._FresnelEnabled !== kk && (this._FresnelEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(kk) {
        this._ClearCoatTextureEnabled !== kk && (this._ClearCoatTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(kk) {
        this._ClearCoatBumpTextureEnabled !== kk && (this._ClearCoatBumpTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(kk) {
        this._ClearCoatTintTextureEnabled !== kk && (this._ClearCoatTintTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(kk) {
        this._SheenTextureEnabled !== kk && (this._SheenTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(kk) {
        this._AnisotropicTextureEnabled !== kk && (this._AnisotropicTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(kk) {
        this._ThicknessTextureEnabled !== kk && (this._ThicknessTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(kk) {
        this._RefractionIntensityTextureEnabled !== kk && (this._RefractionIntensityTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(kk) {
        this._TranslucencyIntensityTextureEnabled !== kk && (this._TranslucencyIntensityTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(kk) {
        this._TranslucencyColorTextureEnabled !== kk && (this._TranslucencyColorTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(kk) {
        this._IridescenceTextureEnabled !== kk && (this._IridescenceTextureEnabled = kk, Xk.c.MarkAllMaterialsAsDirty(1))
      }
    }
    Tk._DiffuseTextureEnabled = !0, Tk._BaseWeightTextureEnabled = !0, Tk._BaseDiffuseRoughnessTextureEnabled = !0, Tk._DetailTextureEnabled = !0, Tk._DecalMapEnabled = !0, Tk._AmbientTextureEnabled = !0, Tk._OpacityTextureEnabled = !0, Tk._ReflectionTextureEnabled = !0, Tk._EmissiveTextureEnabled = !0, Tk._SpecularTextureEnabled = !0, Tk._BumpTextureEnabled = !0, Tk._LightmapTextureEnabled = !0, Tk._RefractionTextureEnabled = !0, Tk._ColorGradingTextureEnabled = !0, Tk._FresnelEnabled = !0, Tk._ClearCoatTextureEnabled = !0, Tk._ClearCoatBumpTextureEnabled = !0, Tk._ClearCoatTintTextureEnabled = !0, Tk._SheenTextureEnabled = !0, Tk._AnisotropicTextureEnabled = !0, Tk._ThicknessTextureEnabled = !0, Tk._RefractionIntensityTextureEnabled = !0, Tk._TranslucencyIntensityTextureEnabled = !0, Tk._TranslucencyColorTextureEnabled = !0, Tk._IridescenceTextureEnabled = !0
  },
  40329: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      $: () => hk,
      A: () => Ok,
      C: () => jk,
      D: () => Zk,
      E: () => fk,
      F: () => Uk,
      I: () => bk,
      M: () => uk,
      P: () => Pk,
      R: () => Gk,
      T: () => Bk,
      W: () => dk,
      _: () => Yk,
      b: () => pk,
      cb: () => gk,
      db: () => mk,
      e: () => sk,
      f: () => tk,
      fb: () => ek,
      i: () => Jk,
      j: () => xk,
      n: () => vk,
      p: () => ak,
      s: () => wk,
      u: () => Hk,
      v: () => Kk,
      w: () => nk,
      x: () => Qk,
      y: () => Ek
    });
    var Xk = Ik(38674),
      Tk = Ik(37178),
      ik = Ik(40195),
      yk = Ik(40333),
      lk = Ik(40338);

    function ak(kk, Fk, Ik) {
      if (!kk || kk.LOGARITHMICDEPTH || kk.indexOf && kk.indexOf("LOGARITHMICDEPTH") >= 0) {
        const kk = Ik.activeCamera;
        1 === kk.mode && Xk.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Fk.setFloat("logarithmicDepthConstant", 2 / (Math.log(kk.maxZ + 1) / Math.LN2))
      }
    }
    const qk = {
        r: 0,
        g: 0,
        b: 0
      },
      Lk = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function tk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Ik && kk.fogEnabled && (!Fk || Fk.applyFog) && 0 !== kk.fogMode && (Ik.setFloat4("vFogInfos", kk.fogMode, kk.fogStart, kk.fogEnd, kk.fogDensity), Xk ? (kk.fogColor.toLinearSpaceToRef(qk, kk.Oe().useExactSrgbConversions), Ik.setColor3("vFogColor", qk)) : Ik.setColor3("vFogColor", kk.fogColor))
    }

    function Zk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
      const tk = kk.numMaxInfluencers || kk.numInfluencers;
      return tk <= 0 ? 0 : (Fk.push("#define MORPHTARGETS"), kk.hasPositions && Fk.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), kk.hasNormals && Fk.push("#define MORPHTARGETTEXTURE_HASNORMALS"), kk.hasTangents && Fk.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), kk.hasUVs && Fk.push("#define MORPHTARGETTEXTURE_HASUVS"), kk.hasUV2s && Fk.push("#define MORPHTARGETTEXTURE_HASUV2S"), kk.hasColors && Fk.push("#define MORPHTARGETTEXTURE_HASCOLORS"), kk.supportsPositions && Tk && Fk.push("#define MORPHTARGETS_POSITION"), kk.supportsNormals && ik && Fk.push("#define MORPHTARGETS_NORMAL"), kk.supportsTangents && yk && Fk.push("#define MORPHTARGETS_TANGENT"), kk.supportsUVs && lk && Fk.push("#define MORPHTARGETS_UV"), kk.supportsUV2s && ak && Fk.push("#define MORPHTARGETS_UV2"), kk.supportsColors && qk && Fk.push("#define MORPHTARGETS_COLOR"), Fk.push("#define NUM_MORPH_INFLUENCERS " + tk), kk.isUsingTextureForTargets && Fk.push("#define MORPHTARGETS_TEXTURE"), Lk.NUM_MORPH_INFLUENCERS = tk, Lk.NORMAL = ik, Lk.TANGENT = yk, Lk.UV = lk, Lk.UV2 = ak, Lk.COLOR = qk, jk(Ik, Xk, Lk, Tk), tk)
    }

    function jk(kk, Fk, Ik) {
      let ik = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const yk = Ik.NUM_MORPH_INFLUENCERS;
      if (yk > 0 && Tk.e.LastCreatedEngine) {
        const lk = Tk.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          ak = Fk.morphTargetManager;
        if (ak?.isUsingTextureForTargets) return;
        const qk = ak && ak.supportsPositions && ik,
          Lk = ak && ak.supportsNormals && Ik.NORMAL,
          tk = ak && ak.supportsTangents && Ik.TANGENT,
          Zk = ak && ak.supportsUVs && Ik.UV1,
          jk = ak && ak.supportsUV2s && Ik.UV2,
          ek = ak && ak.supportsColors && Ik.VERTEXCOLOR;
        for (let Ik = 0; Ik < yk; Ik++) qk && kk.push("position" + Ik), Lk && kk.push("normal" + Ik), tk && kk.push("tangent" + Ik), Zk && kk.push("uv_" + Ik), jk && kk.push("uv2_" + Ik), ek && kk.push("color" + Ik), kk.length > lk && Xk.e.Error("Cannot add more vertex attributes for mesh " + Fk.name)
      }
    }

    function ek(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      kk.push("world0"), kk.push("world1"), kk.push("world2"), kk.push("world3"), Fk && (kk.push("previousWorld0"), kk.push("previousWorld1"), kk.push("previousWorld2"), kk.push("previousWorld3"))
    }

    function wk(kk, Fk) {
      const Ik = kk.morphTargetManager;
      kk && Ik && Fk.setFloatArray("morphTargetInfluences", Ik.influences)
    }

    function Hk(kk, Fk) {
      Fk.bindToEffect(kk, "Scene")
    }

    function Jk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ak = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Lk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        tk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Zk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (kk.texturesEnabled && Tk && lk.d.ReflectionTextureEnabled) {
        if (Ik.I9("reflectionMatrix", Tk.getReflectionTextureMatrix()), Ik.updateFloat2("vReflectionInfos", Tk.level * kk.iblIntensity, Zk), ak && Tk.boundingBoxSize) {
          const kk = Tk;
          Ik.updateVector3("vReflectionPosition", kk.boundingBoxPosition), Ik.updateVector3("vReflectionSize", kk.boundingBoxSize)
        }
        if (ik) {
          const kk = Tk.getSize().width;
          Ik.updateFloat2("vReflectionFilteringInfo", kk, Math.log2(kk))
        }
        if (Lk && !Fk.USEIRRADIANCEMAP) {
          const kk = Tk.sphericalPolynomial;
          if (Fk.USESPHERICALFROMREFLECTIONMAP && kk)
            if (Fk.SPHERICAL_HARMONICS) {
              const Fk = kk.preScaledHarmonics;
              Ik.updateVector3("vSphericalL00", Fk.l00), Ik.updateVector3("vSphericalL1_1", Fk.l1_1), Ik.updateVector3("vSphericalL10", Fk.l10), Ik.updateVector3("vSphericalL11", Fk.l11), Ik.updateVector3("vSphericalL2_2", Fk.l2_2), Ik.updateVector3("vSphericalL2_1", Fk.l2_1), Ik.updateVector3("vSphericalL20", Fk.l20), Ik.updateVector3("vSphericalL21", Fk.l21), Ik.updateVector3("vSphericalL22", Fk.l22)
            } else Ik.updateFloat3("vSphericalX", kk.x.x, kk.x.y, kk.x.z), Ik.updateFloat3("vSphericalY", kk.y.x, kk.y.y, kk.y.z), Ik.updateFloat3("vSphericalZ", kk.z.x, kk.z.y, kk.z.z), Ik.updateFloat3("vSphericalXX_ZZ", kk.xx.x - kk.zz.x, kk.xx.y - kk.zz.y, kk.xx.z - kk.zz.z), Ik.updateFloat3("vSphericalYY_ZZ", kk.yy.x - kk.zz.x, kk.yy.y - kk.zz.y, kk.yy.z - kk.zz.z), Ik.updateFloat3("vSphericalZZ", kk.zz.x, kk.zz.y, kk.zz.z), Ik.updateFloat3("vSphericalXY", kk.xy.x, kk.xy.y, kk.xy.z), Ik.updateFloat3("vSphericalYZ", kk.yz.x, kk.yz.y, kk.yz.z), Ik.updateFloat3("vSphericalZX", kk.zx.x, kk.zx.y, kk.zx.z)
        } else qk && Fk.USEIRRADIANCEMAP && Fk.USE_IRRADIANCE_DOMINANT_DIRECTION && Tk.irradianceTexture && Ik.updateVector3("vReflectionDominantDirection", Tk.irradianceTexture._dominantDirection);
        yk && Ik.updateFloat3("vReflectionMicrosurfaceInfos", Tk.getSize().width, Tk.lodGenerationScale, Tk.lodGenerationOffset)
      }
      tk && Ik.updateColor3("vReflectionColor", Xk)
    }

    function xk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Xk && lk.d.ReflectionTextureEnabled) {
        Fk.LODBASEDMICROSFURACE ? Ik.setTexture("reflectionSampler", Xk) : (Ik.setTexture("reflectionSampler", Xk._lodTextureMid || Xk), Ik.setTexture("reflectionSamplerLow", Xk._lodTextureLow || Xk), Ik.setTexture("reflectionSamplerHigh", Xk._lodTextureHigh || Xk)), Fk.USEIRRADIANCEMAP && Ik.setTexture("irradianceSampler", Xk.irradianceTexture);
        const ik = kk.iblCdfGenerator;
        Tk && ik && Ik.setTexture("icdfSampler", ik.getIcdfTexture())
      }
    }

    function Pk(kk, Fk, Ik) {
      Fk._needUVs = !0, Fk[Ik] = !0, kk.optimizeUVAllocation && kk.getTextureMatrix().isIdentityAs3x2() ? (Fk[Ik + "DIRECTUV"] = kk.coordinatesIndex + 1, Fk["MAINUV" + (kk.coordinatesIndex + 1)] = !0) : Fk[Ik + "DIRECTUV"] = 0
    }

    function Kk(kk, Fk, Ik) {
      const Xk = kk.getTextureMatrix();
      Fk.I9(Ik + "Matrix", Xk)
    }

    function Qk(kk, Fk, Ik) {
      Ik.BAKED_VERTEX_ANIMATION_TEXTURE && Ik.INSTANCES && kk.push("bakedVertexAnimationSettingsInstanced")
    }

    function sk(kk, Fk, Ik) {
      var Xk;
      if (Fk && kk && (kk.computeBonesUsingShaders && Fk._bonesComputationForcedToCPU && (kk.computeBonesUsingShaders = !1), kk.useBones && kk.computeBonesUsingShaders && kk.skeleton)) {
        const Tk = kk.skeleton;
        if (Tk.isUsingTextureForMatrices && Fk.getUniformIndex("boneTextureInfo") > -1) {
          const Ik = Tk.getTransformMatrixTexture(kk);
          Fk.setTexture("boneSampler", Ik), Fk.setFloat2("boneTextureInfo", Tk._textureWidth, Tk._textureHeight)
        } else {
          const ik = Tk.getTransformMatrices(kk);
          ik && (Fk.setMatrices("mBones", ik), Ik && kk.mG().prePassRenderer && kk.mG().prePassRenderer.getIndex(2) && (Ik.previousBones[kk.uniqueId] || (Ik.previousBones[kk.uniqueId] = ik.slice()), Fk.setMatrices("mPreviousBones", Ik.previousBones[kk.uniqueId]), Xk = ik, Ik.previousBones[kk.uniqueId].set(Xk)))
        }
      }
    }

    function Vk(kk, Fk, Ik, Xk, Tk) {
      let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      kk._bindLight(Fk, Ik, Xk, Tk, ik)
    }
    const zk = 4,
      Sk = new WeakMap;

    function vk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const ik = Math.min(Fk.lightSources.length, Tk);
      for (let yk = 0; yk < ik; yk++) {
        Vk(Fk.lightSources[yk], yk, kk, Ik, "boolean" === typeof Xk ? Xk : Xk.SPECULARTERM, Fk.receiveShadows)
      }
    }

    function Ek(kk, Fk, Ik, Xk) {
      Ik.NUM_BONE_INFLUENCERS > 0 && (Xk.addCPUSkinningFallback(0, Fk), kk.push("matricesIndices"), kk.push("matricesWeights"), Ik.NUM_BONE_INFLUENCERS > 4 && (kk.push("matricesIndicesExtra"), kk.push("matricesWeightsExtra")))
    }

    function Ok(kk, Fk) {
      (Fk.INSTANCES || Fk.THIN_INSTANCES) && ek(kk, !!Fk.PREPASS_VELOCITY), Fk.INSTANCESCOLOR && kk.push("instanceColor")
    }

    function nk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Tk = 0;
      for (let ik = 0; ik < Ik && kk["LIGHT" + ik]; ik++) ik > 0 && (Tk = Xk + ik, Fk.addFallback(Tk, "LIGHT" + ik)), kk.SHADOWS || (kk["SHADOW" + ik] && Fk.addFallback(Xk, "SHADOW" + ik), kk["SHADOWPCF" + ik] && Fk.addFallback(Xk, "SHADOWPCF" + ik), kk["SHADOWPCSS" + ik] && Fk.addFallback(Xk, "SHADOWPCSS" + ik), kk["SHADOWPOISSON" + ik] && Fk.addFallback(Xk, "SHADOWPOISSON" + ik), kk["SHADOWESM" + ik] && Fk.addFallback(Xk, "SHADOWESM" + ik), kk["SHADOWCLOSEESM" + ik] && Fk.addFallback(Xk, "SHADOWCLOSEESM" + ik));
      return Tk
    }

    function Gk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      let lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qk = arguments.length > 9 ? arguments[9] : void 0,
        Lk = arguments.length > 10 ? arguments[10] : void 0;
      if (yk._areMiscDirty) {
        yk.LOGARITHMICDEPTH = Ik, yk.POINTSIZE = Xk, yk.FOG = Tk && function(kk, Fk) {
          return Fk.fogEnabled && kk.applyFog && 0 !== Fk.fogMode
        }(kk, Fk), yk.NONUNIFORMSCALING = kk.nonUniformScaling, yk.ALPHATEST = ik, yk.DECAL_AFTER_DETAIL = lk, yk.USE_VERTEX_PULLING = ak, yk.RIGHT_HANDED = Fk.useRightHandedSystem;
        const tk = ak ? qk?.geometry?.getIndexBuffer() : null,
          Zk = !!qk && qk.isUnIndexed;
        yk.VERTEX_PULLING_USE_INDEX_BUFFER = !!tk && !Zk, yk.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!tk || Zk) && tk.is32Bits, yk.VERTEXOUTPUT_INVARIANT = !!Lk
      }
    }

    function pk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!kk.lightsEnabled || Xk) return !0;
      const Tk = Fk.lightSources,
        ik = Math.min(Tk.length, Ik);
      for (let yk = 0; yk < ik; yk++)
        if (!Tk[yk].areLightTexturesReady()) return !1;
      return !0
    }

    function uk(kk, Fk, Ik, Tk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Ik._areLightsDirty) return Ik._needNormals;
      const lk = ik;
      ik = function(kk, Fk) {
        const Ik = kk.Oe().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Ik) return Fk;
        const Xk = Math.max(Ik - zk, 1);
        return Math.min(Fk, Xk)
      }(kk, ik);
      let ak = 0;
      const qk = {
        needNormals: Ik._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (kk.lightsEnabled && !yk) {
        Fk.lightSources.length > ik && ik < lk && function(kk, Fk, Ik, Tk) {
          let ik = Sk.get(kk);
          ik || (ik = new Set, Sk.set(kk, ik)), ik.has(Tk) || (ik.add(Tk), Xk.e.Warn(`maxSimultaneousLights is ${Fk} but this engine supports at most ${Ik} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Tk} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Tk+zk} uniform buffers, over the device limit of ${kk.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Ik}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Ik} or less to silence this warning.`))
        }(kk.Oe(), lk, ik, Math.min(Fk.lightSources.length, lk));
        for (const Xk of Fk.lightSources)
          if (Rk(kk, Fk, Xk, ak, Ik, Tk, qk), ak++, ak === ik) break
      }
      Ik.SPECULARTERM = qk.specularEnabled, Ik.SHADOWS = qk.shadowEnabled;
      const Lk = Math.max(ik, Ik.MAXLIGHTCOUNT || 0);
      for (let Xk = ak; Xk < Lk; Xk++) void 0 !== Ik["LIGHT" + Xk] && (Ik["LIGHT" + Xk] = !1, Ik["HEMILIGHT" + Xk] = !1, Ik["POINTLIGHT" + Xk] = !1, Ik["DIRLIGHT" + Xk] = !1, Ik["SPOTLIGHT" + Xk] = !1, Ik["AREALIGHT" + Xk] = !1, Ik["CLUSTLIGHT" + Xk] = !1, Ik["SHADOW" + Xk] = !1, Ik["SHADOWCSM" + Xk] = !1, Ik["SHADOWCSMDEBUG" + Xk] = !1, Ik["SHADOWCSMNUM_CASCADES" + Xk] = !1, Ik["SHADOWCSMUSESHADOWMAXZ" + Xk] = !1, Ik["SHADOWCSMNOBLEND" + Xk] = !1, Ik["SHADOWCSM_RIGHTHANDED" + Xk] = !1, Ik["SHADOWPCF" + Xk] = !1, Ik["SHADOWPCSS" + Xk] = !1, Ik["SHADOWPOISSON" + Xk] = !1, Ik["SHADOWESM" + Xk] = !1, Ik["SHADOWCLOSEESM" + Xk] = !1, Ik["SHADOWCUBE" + Xk] = !1, Ik["SHADOWLOWQUALITY" + Xk] = !1, Ik["SHADOWMEDIUMQUALITY" + Xk] = !1);
      Ik.LIGHTCOUNT = ak, Ik.MAXLIGHTCOUNT = ik;
      const tk = kk.Oe().getCaps();
      return void 0 === Ik.SHADOWFLOAT && (qk.needRebuild = !0), Ik.SHADOWFLOAT = qk.shadowEnabled && (tk.textureFloatRender && tk.textureFloatLinearFiltering || tk.textureHalfFloatRender && tk.textureHalfFloatLinearFiltering), Ik.LIGHTMAPEXCLUDED = qk.lightmapMode, qk.needRebuild && Ik.rebuild(), qk.needNormals
    }

    function bk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Fk && lk.d.ReflectionTextureEnabled) {
        if (!Fk.isReadyOrNotBlocking()) return !1;
        Ik._needNormals = !0, Ik.REFLECTION = !0, Ik.GAMMAREFLECTION = Fk.gammaSpace, Ik.RGBDREFLECTION = Fk.isRGBD, Ik.LODINREFLECTIONALPHA = Fk.lodLevelInAlpha, Ik.LINEARSPECULARREFLECTION = Fk.linearSpecularLOD, Ik.USEIRRADIANCEMAP = !1, Ik.LODBASEDMICROSFURACE = kk.Oe().getCaps().textureLOD;
        const yk = kk.Oe();
        switch (Xk && Tk > 0 ? (Ik.NUM_SAMPLES = "" + Tk, yk._features.needTypeSuffixInShaderConstants && (Ik.NUM_SAMPLES = Ik.NUM_SAMPLES + "u"), Ik.REALTIME_FILTERING = !0, kk.iblCdfGenerator && (Ik.IBL_CDF_FILTERING = !0)) : Ik.REALTIME_FILTERING = !1, Ik.INVERTCUBICMAP = 6 === Fk.coordinatesMode, Ik.REFLECTIONMAP_3D = Fk.isCube, Ik.REFLECTIONMAP_OPPOSITEZ = Ik.REFLECTIONMAP_3D && kk.useRightHandedSystem ? !Fk.invertZ : Fk.invertZ, Ik.REFLECTIONMAP_CUBIC = !1, Ik.REFLECTIONMAP_EXPLICIT = !1, Ik.REFLECTIONMAP_PLANAR = !1, Ik.REFLECTIONMAP_PROJECTION = !1, Ik.REFLECTIONMAP_SKYBOX = !1, Ik.REFLECTIONMAP_SPHERICAL = !1, Ik.REFLECTIONMAP_EQUIRECTANGULAR = !1, Ik.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Ik.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Fk.coordinatesMode) {
          case 0:
            Ik.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Ik.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Ik.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Ik.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Ik.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Ik.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Ik.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Ik.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Ik.REFLECTIONMAP_CUBIC = !0, Ik.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Fk.boundingBoxSize
        }
        5 !== Fk.coordinatesMode && (Fk.irradianceTexture ? (Ik.USEIRRADIANCEMAP = !0, Ik.USESPHERICALFROMREFLECTIONMAP = !1, Ik.USESPHERICALINVERTEX = !1, Fk.irradianceTexture._dominantDirection ? Ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Fk.isCube && (Ik.USESPHERICALFROMREFLECTIONMAP = !0, Ik.USEIRRADIANCEMAP = !1, Ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Ik.USESPHERICALINVERTEX = ik))
      } else Ik.REFLECTION = !1, Ik.REFLECTIONMAP_3D = !1, Ik.REFLECTIONMAP_SPHERICAL = !1, Ik.REFLECTIONMAP_PLANAR = !1, Ik.REFLECTIONMAP_CUBIC = !1, Ik.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Ik.REFLECTIONMAP_PROJECTION = !1, Ik.REFLECTIONMAP_SKYBOX = !1, Ik.REFLECTIONMAP_EXPLICIT = !1, Ik.REFLECTIONMAP_EQUIRECTANGULAR = !1, Ik.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Ik.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Ik.INVERTCUBICMAP = !1, Ik.USESPHERICALFROMREFLECTIONMAP = !1, Ik.USEIRRADIANCEMAP = !1, Ik.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Ik.USESPHERICALINVERTEX = !1, Ik.REFLECTIONMAP_OPPOSITEZ = !1, Ik.LODINREFLECTIONALPHA = !1, Ik.GAMMAREFLECTION = !1, Ik.RGBDREFLECTION = !1, Ik.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Rk(kk, Fk, Ik, Xk, Tk, yk, lk) {
      switch (lk.needNormals = !0, void 0 === Tk["LIGHT" + Xk] && (lk.needRebuild = !0), Tk["LIGHT" + Xk] = !0, Tk["SPOTLIGHT" + Xk] = !1, Tk["HEMILIGHT" + Xk] = !1, Tk["POINTLIGHT" + Xk] = !1, Tk["DIRLIGHT" + Xk] = !1, Tk["AREALIGHT" + Xk] = !1, Tk["CLUSTLIGHT" + Xk] = !1, Ik.prepareLightSpecificDefines(Tk, Xk), Tk["LIGHT_FALLOFF_PHYSICAL" + Xk] = !1, Tk["LIGHT_FALLOFF_GLTF" + Xk] = !1, Tk["LIGHT_FALLOFF_STANDARD" + Xk] = !1, Ik.falloffType) {
        case ik.b.FALLOFF_GLTF:
          Tk["LIGHT_FALLOFF_GLTF" + Xk] = !0;
          break;
        case ik.b.FALLOFF_PHYSICAL:
          Tk["LIGHT_FALLOFF_PHYSICAL" + Xk] = !0;
          break;
        case ik.b.FALLOFF_STANDARD:
          Tk["LIGHT_FALLOFF_STANDARD" + Xk] = !0
      }
      if (yk && !Ik.specular.equalsFloats(0, 0, 0) && (lk.specularEnabled = !0), Tk["SHADOW" + Xk] = !1, Tk["SHADOWCSM" + Xk] = !1, Tk["SHADOWCSMDEBUG" + Xk] = !1, Tk["SHADOWCSMNUM_CASCADES" + Xk] = !1, Tk["SHADOWCSMUSESHADOWMAXZ" + Xk] = !1, Tk["SHADOWCSMNOBLEND" + Xk] = !1, Tk["SHADOWCSM_RIGHTHANDED" + Xk] = !1, Tk["SHADOWPCF" + Xk] = !1, Tk["SHADOWPCSS" + Xk] = !1, Tk["SHADOWPOISSON" + Xk] = !1, Tk["SHADOWESM" + Xk] = !1, Tk["SHADOWCLOSEESM" + Xk] = !1, Tk["SHADOWCUBE" + Xk] = !1, Tk["SHADOWLOWQUALITY" + Xk] = !1, Tk["SHADOWMEDIUMQUALITY" + Xk] = !1, Fk && Fk.receiveShadows && kk.shadowsEnabled && Ik.shadowEnabled) {
        const Fk = Ik.getShadowGenerator(kk.activeCamera) ?? Ik.getShadowGenerator();
        if (Fk) {
          const kk = Fk.getShadowMap();
          kk && kk.renderList && kk.renderList.length > 0 && (lk.shadowEnabled = !0, Fk.prepareDefines(Tk, Xk))
        }
      }
      Ik.lightmapMode != ik.b.LIGHTMAP_DEFAULT ? (lk.lightmapMode = !0, Tk["LIGHTMAPEXCLUDED" + Xk] = !0, Tk["LIGHTMAPNOSPECULAR" + Xk] = Ik.lightmapMode == ik.b.LIGHTMAP_SHADOWSONLY) : (Tk["LIGHTMAPEXCLUDED" + Xk] = !1, Tk["LIGHTMAPNOSPECULAR" + Xk] = !1)
    }

    function Uk(kk, Fk, Ik, Xk, Tk) {
      let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ak = function(kk, Fk) {
          let Ik = !1;
          if (kk.activeCamera) {
            const Xk = Fk.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Tk = Fk.CAMERA_PERSPECTIVE ? 1 : 0,
              ik = 1 === kk.activeCamera.mode ? 1 : 0,
              yk = 0 === kk.activeCamera.mode ? 1 : 0;
            (Xk ^ ik || Tk ^ yk) && (Fk.CAMERA_ORTHOGRAPHIC = 1 === ik, Fk.CAMERA_PERSPECTIVE = 1 === yk, Ik = !0)
          }
          return Ik
        }(kk, Xk);
      !1 !== ik && (ak = (0, yk.g)(Ik, kk, Xk)), Xk.DEPTHPREPASS !== !Fk.getColorWrite() && (Xk.DEPTHPREPASS = !Xk.DEPTHPREPASS, ak = !0), Xk.INSTANCES !== Tk && (Xk.INSTANCES = Tk, ak = !0), Xk.THIN_INSTANCES !== lk && (Xk.THIN_INSTANCES = lk, ak = !0), ak && Xk.markAsUnprocessed()
    }
    const Ck = 40,
      Nk = 64,
      ck = new WeakMap,
      Wk = new WeakSet;

    function fk(kk, Fk, Ik, Tk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        yk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        lk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Fk._areAttributesDirty && Fk._needNormals === Fk._normals && Fk._needUVs === Fk._uvs) return !1;
      Fk._normals = Fk._needNormals, Fk._uvs = Fk._needUVs, Fk.NORMAL = Fk._needNormals && kk.isVerticesDataPresent("normal"), Fk._needNormals && kk.isVerticesDataPresent("tangent") && (Fk.TANGENT = !0);
      for (let Xk = 1; Xk <= 6; ++Xk) Fk["UV" + Xk] = !!Fk._needUVs && kk.isVerticesDataPresent(`uv${1===Xk?"":Xk}`);
      if (Ik) {
        const Ik = kk.useVertexColors && kk.isVerticesDataPresent("color");
        Fk.VERTEXCOLOR = Ik, Fk.VERTEXALPHA = kk.hasVertexAlpha && Ik && yk
      }
      return kk.isVerticesDataPresent("instanceColor") && (kk.rXk || kk.hasThinInstances) && (Fk.INSTANCESCOLOR = !0), Tk && function(kk, Fk) {
        if (kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
          Fk.NUM_BONE_INFLUENCERS = kk.numBoneInfluencers;
          const Ik = void 0 !== Fk.BONETEXTURE;
          if (kk.skeleton.isUsingTextureForMatrices && Ik) Fk.BONETEXTURE = !0;
          else {
            Fk.BonesPerMesh = kk.skeleton.bones.length + 1, Fk.BONETEXTURE = !Ik && void 0;
            const Tk = kk.mG(),
              ik = Tk.prePassRenderer;
            if (ik && ik.enabled) {
              const Ik = -1 === ik.excludedSkinnedMesh.indexOf(kk);
              Fk.BONES_VELOCITY_ENABLED = Ik
            }
            const yk = !0 === Fk.MULTIVIEW,
              lk = 2 * Fk.BonesPerMesh + (yk ? 1 : 0);
            if (ck.get(kk.skeleton) !== lk) {
              ck.set(kk.skeleton, lk);
              const Ik = Tk.Oe().getCaps().maxVertexUniformVectors;
              if (Ik && !Wk.has(kk.skeleton)) {
                const Tk = 4 * Fk.BonesPerMesh,
                  ik = yk ? Nk : Ck,
                  lk = Math.max(Ik - ik, 0);
                (Tk > lk || yk && 3 * Tk > Ik) && (Wk.add(kk.skeleton), Xk.e.Warn(`Skeleton "${kk.skeleton.name}": ${kk.skeleton.bones.length} bones stored as vertex uniforms use ${Tk} of ~${lk} usable uniform vectors${yk?" (multiview)":""} on a device reporting ${Ik}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Fk.NUM_BONE_INFLUENCERS = 0, Fk.BonesPerMesh = 0, void 0 !== Fk.BONETEXTURE && (Fk.BONETEXTURE = !1)
      }(kk, Fk), ik && function(kk, Fk) {
        const Ik = kk.morphTargetManager;
        Ik ? (Fk.MORPHTARGETS_UV = Ik.supportsUVs && Fk.UV1, Fk.MORPHTARGETS_UV2 = Ik.supportsUV2s && Fk.UV2, Fk.MORPHTARGETS_TANGENT = Ik.supportsTangents && Fk.TANGENT, Fk.MORPHTARGETS_NORMAL = Ik.supportsNormals && Fk.NORMAL, Fk.MORPHTARGETS_POSITION = Ik.supportsPositions, Fk.MORPHTARGETS_COLOR = Ik.supportsColors, Fk.MORPHTARGETTEXTURE_HASUVS = Ik.hasUVs, Fk.MORPHTARGETTEXTURE_HASUV2S = Ik.hasUV2s, Fk.MORPHTARGETTEXTURE_HASTANGENTS = Ik.hasTangents, Fk.MORPHTARGETTEXTURE_HASNORMALS = Ik.hasNormals, Fk.MORPHTARGETTEXTURE_HASPOSITIONS = Ik.hasPositions, Fk.MORPHTARGETTEXTURE_HASCOLORS = Ik.hasColors, Fk.NUM_MORPH_INFLUENCERS = Ik.numMaxInfluencers || Ik.numInfluencers, Fk.MORPHTARGETS = Fk.NUM_MORPH_INFLUENCERS > 0, Fk.MORPHTARGETS_TEXTURE = Ik.isUsingTextureForTargets) : (Fk.MORPHTARGETS_UV = !1, Fk.MORPHTARGETS_UV2 = !1, Fk.MORPHTARGETS_TANGENT = !1, Fk.MORPHTARGETS_NORMAL = !1, Fk.MORPHTARGETS_POSITION = !1, Fk.MORPHTARGETS_COLOR = !1, Fk.MORPHTARGETTEXTURE_HASUVS = !1, Fk.MORPHTARGETTEXTURE_HASUV2S = !1, Fk.MORPHTARGETTEXTURE_HASTANGENTS = !1, Fk.MORPHTARGETTEXTURE_HASNORMALS = !1, Fk.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Fk.MORPHTARGETTEXTURE_HAS_COLORS = !1, Fk.MORPHTARGETS = !1, Fk.NUM_MORPH_INFLUENCERS = 0)
      }(kk, Fk), lk && function(kk, Fk) {
        const Ik = kk.bakedVertexAnimationManager;
        Fk.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Ik || !Ik.isEnabled)
      }(kk, Fk), !0
    }

    function Bk(kk, Fk) {
      if (kk.activeCamera) {
        const Ik = Fk.MULTIVIEW;
        Fk.MULTIVIEW = null !== kk.activeCamera.outputRenderTarget && kk.activeCamera.outputRenderTarget.getViewCount() > 1, Fk.MULTIVIEW != Ik && Fk.markAsUnprocessed()
      }
    }

    function dk(kk, Fk, Ik) {
      const Xk = Fk.ORDER_INDEPENDENT_TRANSPARENCY,
        Tk = Fk.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Fk.ORDER_INDEPENDENT_TRANSPARENCY = kk.useOrderIndependentTransparency && Ik, Fk.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !kk.Oe().getCaps().textureFloatLinearFiltering, Xk === Fk.ORDER_INDEPENDENT_TRANSPARENCY && Tk === Fk.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Fk.markAsUnprocessed()
    }

    function Yk(kk, Fk, Ik) {
      const Xk = Fk.PREPASS;
      if (!Fk._arePrePassDirty) return;
      const Tk = [{
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
      if (kk.prePassRenderer && kk.prePassRenderer.enabled && Ik) {
        Fk.PREPASS = !0, Fk.SCENE_MRT_COUNT = kk.prePassRenderer.mrtCount, Fk.PREPASS_NORMAL_WORLDSPACE = kk.prePassRenderer.generateNormalsInWorldSpace, Fk.PREPASS_COLOR = !0, Fk.PREPASS_COLOR_INDEX = 0;
        for (let Ik = 0; Ik < Tk.length; Ik++) {
          const Xk = kk.prePassRenderer.getIndex(Tk[Ik].type); - 1 !== Xk ? (Fk[Tk[Ik].define] = !0, Fk[Tk[Ik].index] = Xk) : Fk[Tk[Ik].define] = !1
        }
      } else {
        Fk.PREPASS = !1;
        for (let kk = 0; kk < Tk.length; kk++) Fk[Tk[kk].define] = !1
      }
      Fk.PREPASS != Xk && (Fk.markAsUnprocessed(), Fk.markAsImageProcessingDirty())
    }

    function Ak(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Tk && Tk.push("Light" + kk), ik || (Fk.push("vLightData" + kk, "vLightDiffuse" + kk, "vLightSpecular" + kk, "vLightDirection" + kk, "vLightWidth" + kk, "vLightHeight" + kk, "vLightFalloff" + kk, "vLightGround" + kk, "vSliceData" + kk, "vSliceRanges" + kk, "lightMatrix" + kk, "shadowsInfo" + kk, "depthValues" + kk), Ik.push("shadowTexture" + kk), Ik.push("depthTexture" + kk), Fk.push("viewFrustumZ" + kk, "cascadeBlendFactor" + kk, "lightSizeUVCorrection" + kk, "depthCorrection" + kk, "penumbraDarkness" + kk, "frustumLengths" + kk), Xk && (Ik.push("projectionLightTexture" + kk), Fk.push("textureProjectionMatrix" + kk)), yk && Ik.push("iesLightTexture" + kk), ak && Ik.push("rectAreaLightEmissionTexture" + kk), lk && (Ik.push("lightDataTexture" + kk), qk || Ik.push("tileMaskTexture" + kk)))
    }

    function gk(kk, Fk, Ik) {
      const Xk = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Ik && Xk.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), kk.push(...Xk);
      Fk.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function mk(kk, Fk, Ik) {
      let Xk, Tk, ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        yk = null;
      if (kk.uniformsNames) {
        const lk = kk;
        Xk = lk.uniformsNames, Tk = lk.uniformBuffersNames, Fk = lk.samplers, Ik = lk.defines, ik = lk.maxSimultaneousLights || 0, yk = lk.shaderLanguage ?? null
      } else Xk = kk, Fk || (Fk = []);
      for (let lk = 0; lk < ik && Ik["LIGHT" + lk]; lk++) Ak(lk, Xk, Fk, Ik["PROJECTEDLIGHTTEXTURE" + lk], Tk, !1, Ik["IESLIGHTTEXTURE" + lk], Ik["CLUSTLIGHT" + lk], Ik["RECTAREALIGHTEMISSIONTEXTURE" + lk], 1 === yk);
      Ik.NUM_MORPH_INFLUENCERS && (Xk.push("morphTargetInfluences"), Xk.push("morphTargetCount")), Ik.BAKED_VERTEX_ANIMATION_TEXTURE && (Xk.push("bakedVertexAnimationSettings"), Xk.push("bakedVertexAnimationTextureSizeInverted"), Xk.push("bakedVertexAnimationTime"), Fk.push("bakedVertexAnimationTexture"))
    }

    function hk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      kk.addUniform("vReflectionInfos", 2), kk.addUniform("reflectionMatrix", 16), Fk && kk.addUniform("vReflectionMicrosurfaceInfos", 3), Ik && (kk.addUniform("vReflectionPosition", 3), kk.addUniform("vReflectionSize", 3)), Xk && (kk.addUniform("vReflectionFilteringInfo", 2), kk.addUniform("vReflectionDominantDirection", 3)), ik && kk.addUniform("vReflectionColor", 3), Tk && (kk.addUniform("vSphericalL00", 3), kk.addUniform("vSphericalL1_1", 3), kk.addUniform("vSphericalL10", 3), kk.addUniform("vSphericalL11", 3), kk.addUniform("vSphericalL2_2", 3), kk.addUniform("vSphericalL2_1", 3), kk.addUniform("vSphericalL20", 3), kk.addUniform("vSphericalL21", 3), kk.addUniform("vSphericalL22", 3), kk.addUniform("vSphericalX", 3), kk.addUniform("vSphericalY", 3), kk.addUniform("vSphericalZ", 3), kk.addUniform("vSphericalXX_ZZ", 3), kk.addUniform("vSphericalYY_ZZ", 3), kk.addUniform("vSphericalZZ", 3), kk.addUniform("vSphericalXY", 3), kk.addUniform("vSphericalYZ", 3), kk.addUniform("vSphericalZX", 3))
    }
  },
  40345: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(37153),
      Tk = Ik(40295);
    class ik extends Tk.c {
      constructor(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(kk, Fk, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Xk.c, this._storeEffectOnSubMeshes = Ik
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(kk, Fk) {
        return !!kk && (!this._storeEffectOnSubMeshes || (!kk.lK || 0 === kk.lK.length || this.isReadyForSubMesh(kk, kk.lK[0], Fk)))
      }
      _isReadyForSubMesh(kk) {
        const Fk = kk.materialDefines;
        return !(this.checkReadyOnEveryCall || !kk.effect || !Fk || Fk._renderId !== this.mG().getRenderId())
      }
      bindOnlyWorldMatrix(kk) {
        this._activeEffect.setMatrix("world", kk)
      }
      bindOnlyNormalMatrix(kk) {
        this._activeEffect.setMatrix("normalMatrix", kk)
      }
      bind(kk, Fk) {
        Fk && this.bindForSubMesh(kk, Fk, Fk.lK[0])
      }
      _afterBind(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(kk, Fk, Ik), this.mG()._cachedEffect = Fk, Ik ? Ik._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Ik._drawWrapper._forceRebindOnNextCall || kk.isCachedMaterialInvalid(this, Fk, Xk)
      }
      dispose(kk, Fk, Ik) {
        this._activeEffect = void 0, super.dispose(kk, Fk, Ik)
      }
    }
  },
  40368: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      f: () => Tk
    });
    const Xk = new WeakMap;

    function Tk(kk) {
      const Fk = kk.getVertexBuffers();
      if (!Fk) return null;
      let Ik = Xk.get(kk);
      if (Ik) {
        let kk = !1;
        for (const Xk in Fk)
          if (!Ik.has(Xk)) {
            kk = !0;
            break
          } if (!kk) return Ik
      } else Ik = new Map, Xk.set(kk, Ik);
      for (const Xk in Fk) {
        const kk = Fk[Xk];
        if (kk) {
          const Fk = kk.byteOffset,
            Tk = kk.byteStride,
            ik = kk.type,
            yk = kk.normalized;
          Ik.set(Xk, {
            offset: Fk,
            stride: Tk,
            type: ik,
            normalized: yk
          })
        }
      }
      return Ik
    }

    function ik(kk, Fk) {
      Fk.forEach(((Fk, Ik) => {
        const Xk = `vp_${Ik}_info`;
        kk.setFloat4(Xk, Fk.offset, Fk.stride, Fk.type, Fk.normalized ? 1 : 0)
      }))
    }
  },
  40319: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      g: () => ak
    });
    var Xk = Ik(40003),
      Tk = Ik(37153),
      ik = Ik(40011);
    let yk = (() => {
      var kk;
      let Fk, Ik, Tk = [];
      return kk = class {
        static extractMinAndMaxIndexed(kk, Fk, Ik, Xk, Tk, ik) {
          for (let yk = Ik; yk < Ik + Xk; yk++) {
            const Ik = 3 * Fk[yk],
              Xk = kk[Ik],
              lk = kk[Ik + 1],
              ak = kk[Ik + 2];
            Tk.minimizeInPlaceFromFloats(Xk, lk, ak), ik.maximizeInPlaceFromFloats(Xk, lk, ak)
          }
        }
        static extractMinAndMax(kk, Fk, Ik, Xk, Tk, ik) {
          for (let yk = Fk, lk = Fk * Xk; yk < Fk + Ik; yk++, lk += Xk) {
            const Fk = kk[lk],
              Ik = kk[lk + 1],
              Xk = kk[lk + 2];
            Tk.minimizeInPlaceFromFloats(Fk, Ik, Xk), ik.maximizeInPlaceFromFloats(Fk, Ik, Xk)
          }
        }
      }, (() => {
        const yk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [ik.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Ik = [ik.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Xk.j)(kk, null, Fk, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: kk => "extractMinAndMaxIndexed" in kk,
            get: kk => kk.extractMinAndMaxIndexed
          },
          metadata: yk
        }, null, Tk), (0, Xk.j)(kk, null, Ik, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: kk => "extractMinAndMax" in kk,
            get: kk => kk.extractMinAndMax
          },
          metadata: yk
        }, null, Tk), yk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yk
        }), (0, Xk.n)(kk, Tk)
      })(), kk
    })();

    function lk(kk, Fk, Ik, Xk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const lk = new Tk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        ak = new Tk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return yk.extractMinAndMaxIndexed(kk, Fk, Ik, Xk, lk, ak), ik && (lk.x -= lk.x * ik.x + ik.y, lk.y -= lk.y * ik.x + ik.y, lk.z -= lk.z * ik.x + ik.y, ak.x += ak.x * ik.x + ik.y, ak.y += ak.y * ik.x + ik.y, ak.z += ak.z * ik.x + ik.y), {
        minimum: lk,
        maximum: ak
      }
    }

    function ak(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        ik = arguments.length > 4 ? arguments[4] : void 0;
      const lk = new Tk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        ak = new Tk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return ik || (ik = 3), yk.extractMinAndMax(kk, Fk, Ik, ik, lk, ak), Xk && (lk.x -= lk.x * Xk.x + Xk.y, lk.y -= lk.y * Xk.x + Xk.y, lk.z -= lk.z * Xk.x + Xk.y, ak.x += ak.x * Xk.x + Xk.y, ak.y += ak.y * Xk.x + Xk.y, ak.z += ak.z * Xk.x + Xk.y), {
        minimum: lk,
        maximum: ak
      }
    }
  },
  40297: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk
    });
    var Xk, Tk = Ik(40141),
      ik = Ik(40304),
      yk = Ik(40308),
      lk = Ik(40319),
      ak = Ik(40324),
      qk = Ik(39863);
    class Lk {
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
        let Ik = this._drawWrappers[kk];
        return !Ik && Fk && (this._drawWrappers[kk] = Ik = new ak.e(this._mesh.mG().Oe())), Ik
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
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Tk = this._drawWrapper;
        Tk.setEffect(kk, Fk, Xk), void 0 !== Ik && (Tk.materialContext = Ik), kk || (Tk.defines = null, Tk.materialContext = void 0)
      }
      resetDrawCache(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== kk) return void this._removeDrawWrapper(kk, !0, Fk);
          for (const kk of this._drawWrappers) kk?.dispose(Fk)
        }
        this._drawWrappers = []
      }
      static AddToMesh(kk, Fk, Ik, Xk, Tk, ik, yk) {
        return new Lk(kk, Fk, Ik, Xk, Tk, ik, yk, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(kk, Fk, Ik, Xk, Tk, ik, yk) {
        let lk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          ak = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = kk, this.verticesStart = Fk, this.verticesCount = Ik, this.indexStart = Xk, this.indexCount = Tk, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = ik, this._renderingMesh = yk || ik, ak && ik.lK.push(this), this._engine = this._mesh.mG().Oe(), this.resetDrawCache(), this._trianglePlanes = [], this._id = ik.lK.length - 1, lk && (this.refreshBoundingInfo(), ik.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      vR() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.vR() : this._boundingInfo
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
      Ue() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Fk = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Fk) return kk && this._mesh.mG()._hasDefaultMaterial ? this._mesh.mG().defaultMaterial : null;
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
        if (kk || (kk = this._renderingMesh.getVerticesData(Tk.l.PositionKind)), !kk) return this._boundingInfo = this._mesh.vR(), this;
        const Fk = this._renderingMesh.yXk();
        let Ik;
        if (0 === this.indexStart && this.indexCount === Fk.length) {
          const kk = this._renderingMesh.vR();
          Ik = {
            minimum: kk.minimum.clone(),
            maximum: kk.maximum.clone()
          }
        } else Ik = (0, lk.c)(kk, Fk, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Ik.minimum, Ik.maximum) : this._boundingInfo = new yk.d(Ik.minimum, Ik.maximum), this
      }
      _checkCollision(kk) {
        return this.vR()._checkCollision(kk)
      }
      updateBoundingInfo(kk) {
        let Fk = this.vR();
        return Fk || (this.refreshBoundingInfo(), Fk = this.vR()), Fk && Fk.update(kk), this
      }
      isInFrustum(kk) {
        const Fk = this.vR();
        return !!Fk && Fk.isInFrustum(kk, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(kk) {
        const Fk = this.vR();
        return !!Fk && Fk.isCompletelyInFrustum(kk)
      }
      render(kk) {
        return this._renderingMesh.render(this, kk, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(kk, Fk) {
        if (!this._linesIndexBuffer) {
          const Ik = 6 * Math.floor(this.indexCount / 3),
            Xk = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Ik) : new Uint16Array(Ik);
          let Tk = 0;
          if (0 === kk.length)
            for (let kk = this.indexStart; kk < this.indexStart + this.indexCount; kk += 3) Xk[Tk++] = kk, Xk[Tk++] = kk + 1, Xk[Tk++] = kk + 1, Xk[Tk++] = kk + 2, Xk[Tk++] = kk + 2, Xk[Tk++] = kk;
          else
            for (let Fk = this.indexStart; Fk < this.indexStart + this.indexCount; Fk += 3) Xk[Tk++] = kk[Fk], Xk[Tk++] = kk[Fk + 1], Xk[Tk++] = kk[Fk + 1], Xk[Tk++] = kk[Fk + 2], Xk[Tk++] = kk[Fk + 2], Xk[Tk++] = kk[Fk];
          this._linesIndexBuffer = Fk.createIndexBuffer(Xk), this._linesIndexCount = Xk.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(kk) {
        const Fk = this.vR();
        return !!Fk && kk.intersectsBox(Fk.boundingBox)
      }
      intersects(kk, Fk, Ik, Xk, Tk) {
        const ik = this.Ue();
        if (!ik) return null;
        let yk = 3,
          lk = !1;
        switch (ik.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            yk = 1, lk = !0
        }
        return 4 === ik.fillMode ? Ik.length ? this._intersectLines(kk, Fk, Ik, this._mesh.intersectionThreshold, Xk) : this._intersectUnIndexedLines(kk, Fk, Ik, this._mesh.intersectionThreshold, Xk) : !Ik.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(kk, Fk, Ik, Xk, Tk) : this._intersectTriangles(kk, Fk, Ik, yk, lk, Xk, Tk)
      }
      _intersectLines(kk, Fk, Ik, Xk, Tk) {
        let yk = null;
        for (let lk = this.indexStart; lk < this.indexStart + this.indexCount; lk += 2) {
          const ak = Fk[Ik[lk]],
            qk = Fk[Ik[lk + 1]],
            Lk = kk.intersectionSegment(ak, qk, Xk);
          if (!(Lk < 0) && ((Tk || !yk || Lk < yk.distance) && (yk = new ik.d(null, null, Lk), yk.faceId = lk / 2, Tk))) break
        }
        return yk
      }
      _intersectUnIndexedLines(kk, Fk, Ik, Xk, Tk) {
        let yk = null;
        for (let lk = this.verticesStart; lk < this.verticesStart + this.verticesCount; lk += 2) {
          const Ik = Fk[lk],
            ak = Fk[lk + 1],
            qk = kk.intersectionSegment(Ik, ak, Xk);
          if (!(qk < 0) && ((Tk || !yk || qk < yk.distance) && (yk = new ik.d(null, null, qk), yk.faceId = lk / 2, Tk))) break
        }
        return yk
      }
      _intersectTriangles(kk, Fk, Ik, Xk, Tk, ik, yk) {
        let lk = null,
          ak = -1;
        for (let qk = this.indexStart; qk < this.indexStart + this.indexCount - (3 - Xk); qk += Xk) {
          ak++;
          const Xk = Ik[qk],
            Lk = Ik[qk + 1],
            tk = Ik[qk + 2];
          if (Tk && 4294967295 === tk) {
            qk += 2;
            continue
          }
          const Zk = Fk[Xk],
            jk = Fk[Lk],
            ek = Fk[tk];
          if (!Zk || !jk || !ek) continue;
          if (yk && !yk(Zk, jk, ek, kk, Xk, Lk, tk)) continue;
          const wk = kk.intersectsTriangle(Zk, jk, ek);
          if (wk) {
            if (wk.distance < 0) continue;
            if ((ik || !lk || wk.distance < lk.distance) && (lk = wk, lk.faceId = ak, ik)) break
          }
        }
        return lk
      }
      _intersectUnIndexedTriangles(kk, Fk, Ik, Xk, Tk) {
        let ik = null;
        for (let yk = this.verticesStart; yk < this.verticesStart + this.verticesCount; yk += 3) {
          const Ik = Fk[yk],
            lk = Fk[yk + 1],
            ak = Fk[yk + 2];
          if (Tk && !Tk(Ik, lk, ak, kk, -1, -1, -1)) continue;
          const qk = kk.intersectsTriangle(Ik, lk, ak);
          if (qk) {
            if (qk.distance < 0) continue;
            if ((Xk || !ik || qk.distance < ik.distance) && (ik = qk, ik.faceId = yk / 3, Xk)) break
          }
        }
        return ik
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(kk, Fk) {
        const Ik = new Lk(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, kk, Fk, !1);
        if (!this.IsGlobal) {
          const kk = this.vR();
          if (!kk) return Ik;
          Ik._boundingInfo = new yk.d(kk.minimum, kk.maximum)
        }
        return Ik
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.mG().Oe()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Fk = this._mesh.lK.indexOf(this);
        this._mesh.lK.splice(Fk, 1), this.resetDrawCache(void 0, kk)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(kk, Fk, Ik, Xk, Tk) {
        let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = Number.MAX_VALUE,
          lk = -Number.MAX_VALUE;
        const ak = (Tk || Xk).yXk();
        for (let qk = Fk; qk < Fk + Ik; qk++) {
          const kk = ak[qk];
          kk < yk && (yk = kk), kk > lk && (lk = kk)
        }
        return new Lk(kk, yk, lk - yk + 1, Fk, Ik, Xk, Tk, ik)
      }
    }(Xk = Lk.prototype).projectToRef ?? (Xk.projectToRef = (0, qk.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);