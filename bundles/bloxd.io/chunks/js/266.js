export const id = 266;
export const ids = [266];
export const modules = {
  40482: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt) {
        this.bu = tt, this.bv = et, this.distance = Vt, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40497: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    var Ot = Vt(37350),
      qt = Vt(37336),
      Dt = Vt(37342);
    class mt {
      constructor(tt, et, Vt) {
        this.vectors = (0, Ot.c)(8, qt.n.Zero), this.center = qt.n.Zero(), this.centerWorld = qt.n.Zero(), this.extendSize = qt.n.Zero(), this.extendSizeWorld = qt.n.Zero(), this.directions = (0, Ot.c)(3, qt.n.Zero), this.vectorsWorld = (0, Ot.c)(8, qt.n.Zero), this.minimumWorld = qt.n.Zero(), this.maximumWorld = qt.n.Zero(), this.minimum = qt.n.Zero(), this.maximum = qt.n.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(tt, et, Vt)
      }
      reConstruct(tt, et, Vt) {
        const Ot = tt.x,
          Dt = tt.y,
          mt = tt.z,
          dt = et.x,
          jt = et.y,
          Ht = et.z,
          Xt = this.vectors;
        this.minimum.W9(Ot, Dt, mt), this.maximum.W9(dt, jt, Ht), Xt[0].W9(Ot, Dt, mt), Xt[1].W9(dt, jt, Ht), Xt[2].W9(dt, Dt, mt), Xt[3].W9(Ot, jt, mt), Xt[4].W9(Ot, Dt, Ht), Xt[5].W9(dt, jt, mt), Xt[6].W9(Ot, jt, Ht), Xt[7].W9(dt, Dt, Ht), et.addToRef(tt, this.center).scaleInPlace(.5), et.subtractToRef(tt, this.extendSize).scaleInPlace(.5), this._worldMatrix = Vt || qt.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(tt) {
        const et = mt._TmpVector3,
          Vt = this.maximum.subtractToRef(this.minimum, et[0]),
          Ot = Vt.length();
        Vt.normalizeFromLength(Ot);
        const qt = Ot * tt,
          Dt = Vt.scaleInPlace(.5 * qt),
          dt = this.center.subtractToRef(Dt, et[1]),
          jt = this.center.addToRef(Dt, et[2]);
        return this.reConstruct(dt, jt, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(tt) {
        const et = this.minimumWorld,
          Vt = this.maximumWorld,
          Ot = this.directions,
          Dt = this.vectorsWorld,
          mt = this.vectors;
        if (tt.isIdentity()) {
          et.rK(this.minimum), Vt.rK(this.maximum);
          for (let tt = 0; tt < 8; ++tt) Dt[tt].rK(mt[tt]);
          this.extendSizeWorld.rK(this.extendSize), this.centerWorld.rK(this.center)
        } else {
          et.S_(Number.MAX_VALUE), Vt.S_(-Number.MAX_VALUE);
          for (let Ot = 0; Ot < 8; ++Ot) {
            const dt = Dt[Ot];
            qt.n.TransformCoordinatesToRef(mt[Ot], tt, dt), et.minimizeInPlace(dt), Vt.maximizeInPlace(dt)
          }
          Vt.subtractToRef(et, this.extendSizeWorld).scaleInPlace(.5), Vt.addToRef(et, this.centerWorld).scaleInPlace(.5)
        }
        qt.n.FromArrayToRef(tt.m, 0, Ot[0]), qt.n.FromArrayToRef(tt.m, 4, Ot[1]), qt.n.FromArrayToRef(tt.m, 8, Ot[2]), this._worldMatrix = tt
      }
      isInFrustum(tt) {
        return mt.IsInFrustum(this.vectorsWorld, tt)
      }
      isCompletelyInFrustum(tt) {
        return mt.IsCompletelyInFrustum(this.vectorsWorld, tt)
      }
      intersectsPoint(tt) {
        const et = this.minimumWorld,
          Vt = this.maximumWorld,
          Ot = et.x,
          qt = et.y,
          mt = et.z,
          dt = Vt.x,
          jt = Vt.y,
          Ht = Vt.z,
          Xt = tt.x,
          Qt = tt.y,
          lt = tt.z,
          Et = -Dt.e;
        return !(dt - Xt < Et || Et > Xt - Ot) && (!(jt - Qt < Et || Et > Qt - qt) && !(Ht - lt < Et || Et > lt - mt))
      }
      intersectsSphere(tt) {
        return mt.IntersectsSphere(this.minimumWorld, this.maximumWorld, tt.centerWorld, tt.radiusWorld)
      }
      intersectsMinMax(tt, et) {
        const Vt = this.minimumWorld,
          Ot = this.maximumWorld,
          qt = Vt.x,
          Dt = Vt.y,
          mt = Vt.z,
          dt = Ot.x,
          jt = Ot.y,
          Ht = Ot.z,
          Xt = tt.x,
          Qt = tt.y,
          lt = tt.z,
          Et = et.x,
          ft = et.y,
          wt = et.z;
        return !(dt < Xt || qt > Et) && (!(jt < Qt || Dt > ft) && !(Ht < lt || mt > wt))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(tt, et) {
        return tt.intersectsMinMax(et.minimumWorld, et.maximumWorld)
      }
      static IntersectsSphere(tt, et, Vt, Ot) {
        const Dt = mt._TmpVector3[0];
        qt.n.ClampToRef(Vt, tt, et, Dt);
        return qt.n.DistanceSquared(Vt, Dt) <= Ot * Ot
      }
      static IsCompletelyInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; ++Vt) {
          const Ot = et[Vt];
          for (let et = 0; et < 8; ++et)
            if (Ot.dotCoordinate(tt[et]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; ++Vt) {
          let Ot = !0;
          const qt = et[Vt];
          for (let et = 0; et < 8; ++et)
            if (qt.dotCoordinate(tt[et]) >= 0) {
              Ot = !1;
              break
            } if (Ot) return !1
        }
        return !0
      }
    }
    mt._TmpVector3 = (0, Ot.c)(3, qt.n.Zero)
  },
  40490: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt
    });
    var Ot = Vt(37350),
      qt = Vt(37336),
      Dt = Vt(40497);
    class mt {
      constructor(tt, et, Vt) {
        this.center = qt.n.Zero(), this.centerWorld = qt.n.Zero(), this.minimum = qt.n.Zero(), this.maximum = qt.n.Zero(), this.reConstruct(tt, et, Vt)
      }
      reConstruct(tt, et, Vt) {
        this.minimum.rK(tt), this.maximum.rK(et);
        const Ot = qt.n.Distance(tt, et);
        et.addToRef(tt, this.center).scaleInPlace(.5), this.radius = .5 * Ot, this._update(Vt || qt.c.IdentityReadOnly)
      }
      scale(tt) {
        const et = mt._TmpVector3,
          Vt = this.maximum.subtractToRef(this.minimum, et[0]),
          Ot = Vt.length();
        Vt.normalizeFromLength(Ot);
        const qt = Ot * tt,
          Dt = Vt.scaleInPlace(.5 * qt),
          dt = this.center.subtractToRef(Dt, et[1]),
          jt = this.center.addToRef(Dt, et[2]);
        return this.reConstruct(dt, jt, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(tt) {
        if (tt.isIdentity()) this.centerWorld.rK(this.center), this.radiusWorld = this.radius;
        else {
          qt.n.TransformCoordinatesToRef(this.center, tt, this.centerWorld);
          const et = mt._TmpVector3[0];
          qt.n.TransformNormalFromFloatsToRef(1, 1, 1, tt, et), this.radiusWorld = Math.max(Math.abs(et.x), Math.abs(et.y), Math.abs(et.z)) * this.radius
        }
      }
      isInFrustum(tt) {
        const et = this.centerWorld,
          Vt = this.radiusWorld;
        for (let Ot = 0; Ot < 6; Ot++)
          if (tt[Ot].dotCoordinate(et) <= -Vt) return !1;
        return !0
      }
      isCenterInFrustum(tt) {
        const et = this.centerWorld;
        for (let Vt = 0; Vt < 6; Vt++)
          if (tt[Vt].dotCoordinate(et) < 0) return !1;
        return !0
      }
      intersectsPoint(tt) {
        const et = qt.n.DistanceSquared(this.centerWorld, tt);
        return !(this.radiusWorld * this.radiusWorld < et)
      }
      static Intersects(tt, et) {
        const Vt = qt.n.DistanceSquared(tt.centerWorld, et.centerWorld),
          Ot = tt.radiusWorld + et.radiusWorld;
        return !(Ot * Ot < Vt)
      }
      static CreateFromCenterAndRadius(tt, et, Vt) {
        this._TmpVector3[0].rK(tt), this._TmpVector3[1].W9(0, 0, et), this._TmpVector3[2].rK(tt), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].qqt(this._TmpVector3[1]);
        const Ot = new mt(this._TmpVector3[0], this._TmpVector3[2]);
        return Ot._worldMatrix = Vt || qt.c.Identity(), Ot
      }
    }
    mt._TmpVector3 = (0, Ot.c)(3, qt.n.Zero);
    const dt = {
        min: 0,
        max: 0
      },
      jt = {
        min: 0,
        max: 0
      },
      Ht = (tt, et, Vt) => {
        const Ot = qt.n.Dot(et.centerWorld, tt),
          Dt = Math.abs(qt.n.Dot(et.directions[0], tt)) * et.extendSize.x + Math.abs(qt.n.Dot(et.directions[1], tt)) * et.extendSize.y + Math.abs(qt.n.Dot(et.directions[2], tt)) * et.extendSize.z;
        Vt.min = Ot - Dt, Vt.max = Ot + Dt
      },
      Xt = (tt, et, Vt) => (Ht(tt, et, dt), Ht(tt, Vt, jt), !(dt.min > jt.max || jt.min > dt.max));
    class Qt {
      constructor(tt, et, Vt) {
        this._isLocked = !1, this.boundingBox = new Dt.e(tt, et, Vt), this.jqt = new mt(tt, et, Vt)
      }
      reConstruct(tt, et, Vt) {
        this.boundingBox.reConstruct(tt, et, Vt), this.jqt.reConstruct(tt, et, Vt)
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
      set isLocked(tt) {
        this._isLocked = tt
      }
      update(tt) {
        this._isLocked || (this.boundingBox._update(tt), this.jqt._update(tt))
      }
      centerOn(tt, et) {
        const Vt = Qt._TmpVector3[0].rK(tt).qqt(et),
          Ot = Qt._TmpVector3[1].rK(tt).addInPlace(et);
        return this.boundingBox.reConstruct(Vt, Ot, this.boundingBox.getWorldMatrix()), this.jqt.reConstruct(Vt, Ot, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(tt) {
        const et = qt.n.Minimize(this.minimum, tt),
          Vt = qt.n.Maximize(this.maximum, tt);
        return this.reConstruct(et, Vt, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(tt) {
        const et = qt.k.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(et);
        const Vt = qt.k.uf[0];
        return qt.n.TransformCoordinatesToRef(tt.boundingBox.minimumWorld, et, Vt), this.encapsulate(Vt), qt.n.TransformCoordinatesToRef(tt.boundingBox.maximumWorld, et, Vt), this.encapsulate(Vt), this
      }
      scale(tt) {
        return this.boundingBox.scale(tt), this.jqt.scale(tt), this
      }
      isInFrustum(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === et || 3 === et) && this.jqt.isCenterInFrustum(tt)) return !0;
        if (!this.jqt.isInFrustum(tt)) return !1;
        return !(1 !== et && 3 !== et) || this.boundingBox.isInFrustum(tt)
      }
      get diagonalLength() {
        const tt = this.boundingBox;
        return tt.maximumWorld.subtractToRef(tt.minimumWorld, Qt._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(tt) {
        return this.boundingBox.isCompletelyInFrustum(tt)
      }
      _checkCollision(tt) {
        return tt._canDoCollision(this.jqt.centerWorld, this.jqt.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(tt) {
        return !!this.jqt.centerWorld && (!!this.jqt.intersectsPoint(tt) && !!this.boundingBox.intersectsPoint(tt))
      }
      intersects(tt, et) {
        if (!mt.Intersects(this.jqt, tt.jqt)) return !1;
        if (!Dt.e.Intersects(this.boundingBox, tt.boundingBox)) return !1;
        if (!et) return !0;
        const Vt = this.boundingBox,
          Ot = tt.boundingBox;
        return !!Xt(Vt.directions[0], Vt, Ot) && (!!Xt(Vt.directions[1], Vt, Ot) && (!!Xt(Vt.directions[2], Vt, Ot) && (!!Xt(Ot.directions[0], Vt, Ot) && (!!Xt(Ot.directions[1], Vt, Ot) && (!!Xt(Ot.directions[2], Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[0], Ot.directions[0]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[0], Ot.directions[1]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[0], Ot.directions[2]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[1], Ot.directions[0]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[1], Ot.directions[1]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[1], Ot.directions[2]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[2], Ot.directions[0]), Vt, Ot) && (!!Xt(qt.n.Cross(Vt.directions[2], Ot.directions[1]), Vt, Ot) && !!Xt(qt.n.Cross(Vt.directions[2], Ot.directions[2]), Vt, Ot))))))))))))))
      }
    }
    Qt._TmpVector3 = (0, Ot.c)(2, qt.n.Zero)
  },
  40520: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      f: () => jt,
      i: () => dt,
      j: () => mt
    });
    var Ot = Vt(40354),
      qt = Vt(37336);

    function Dt(tt) {
      -1 === tt.indexOf("vClipPlane") && tt.push("vClipPlane"), -1 === tt.indexOf("vClipPlane2") && tt.push("vClipPlane2"), -1 === tt.indexOf("vClipPlane3") && tt.push("vClipPlane3"), -1 === tt.indexOf("vClipPlane4") && tt.push("vClipPlane4"), -1 === tt.indexOf("vClipPlane5") && tt.push("vClipPlane5"), -1 === tt.indexOf("vClipPlane6") && tt.push("vClipPlane6")
    }

    function mt(tt, et, Vt) {
      const Ot = !!(tt.clipPlane ?? et.clipPlane),
        qt = !!(tt.clipPlane2 ?? et.clipPlane2),
        Dt = !!(tt.clipPlane3 ?? et.clipPlane3),
        mt = !!(tt.clipPlane4 ?? et.clipPlane4),
        dt = !!(tt.clipPlane5 ?? et.clipPlane5),
        jt = !!(tt.clipPlane6 ?? et.clipPlane6);
      Ot && Vt.push("#define CLIPPLANE"), qt && Vt.push("#define CLIPPLANE2"), Dt && Vt.push("#define CLIPPLANE3"), mt && Vt.push("#define CLIPPLANE4"), dt && Vt.push("#define CLIPPLANE5"), jt && Vt.push("#define CLIPPLANE6")
    }

    function dt(tt, et, Vt) {
      let Ot = !1;
      const qt = !!(tt.clipPlane ?? et.clipPlane),
        Dt = !!(tt.clipPlane2 ?? et.clipPlane2),
        mt = !!(tt.clipPlane3 ?? et.clipPlane3),
        dt = !!(tt.clipPlane4 ?? et.clipPlane4),
        jt = !!(tt.clipPlane5 ?? et.clipPlane5),
        Ht = !!(tt.clipPlane6 ?? et.clipPlane6);
      return Vt.CLIPPLANE !== qt && (Vt.CLIPPLANE = qt, Ot = !0), Vt.CLIPPLANE2 !== Dt && (Vt.CLIPPLANE2 = Dt, Ot = !0), Vt.CLIPPLANE3 !== mt && (Vt.CLIPPLANE3 = mt, Ot = !0), Vt.CLIPPLANE4 !== dt && (Vt.CLIPPLANE4 = dt, Ot = !0), Vt.CLIPPLANE5 !== jt && (Vt.CLIPPLANE5 = jt, Ot = !0), Vt.CLIPPLANE6 !== Ht && (Vt.CLIPPLANE6 = Ht, Ot = !0), Ot
    }

    function jt(tt, et, Vt) {
      let Ot = et.clipPlane ?? Vt.clipPlane;
      Ht(tt, "vClipPlane", Ot), Ot = et.clipPlane2 ?? Vt.clipPlane2, Ht(tt, "vClipPlane2", Ot), Ot = et.clipPlane3 ?? Vt.clipPlane3, Ht(tt, "vClipPlane3", Ot), Ot = et.clipPlane4 ?? Vt.clipPlane4, Ht(tt, "vClipPlane4", Ot), Ot = et.clipPlane5 ?? Vt.clipPlane5, Ht(tt, "vClipPlane5", Ot), Ot = et.clipPlane6 ?? Vt.clipPlane6, Ht(tt, "vClipPlane6", Ot)
    }

    function Ht(tt, et, Vt) {
      if (Vt) {
        const Dt = Ot.b.vI()?.floatingOriginOffset || qt.n.ZeroReadOnly;
        tt.setFloat4(et, Vt.normal.x, Vt.normal.y, Vt.normal.z, Vt.d + qt.n.Dot(Vt.normal, Dt))
      }
    }
  },
  40540: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(tt, et) {
        this._defines[tt] || (tt < this._currentRank && (this._currentRank = tt), tt > this._maxRank && (this._maxRank = tt), this._defines[tt] = new Array), this._defines[tt].push(et)
      }
      addCPUSkinningFallback(tt, et) {
        this._mesh = et, tt < this._currentRank && (this._currentRank = tt), tt > this._maxRank && (this._maxRank = tt)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(tt, et) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, tt = tt.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), et._bonesComputationForcedToCPU = !0;
          const Vt = this._mesh.vI();
          for (let tt = 0; tt < Vt.meshes.length; tt++) {
            const Ot = Vt.meshes[tt];
            if (Ot.material) {
              if (Ot.computeBonesUsingShaders && 0 !== Ot.numBoneInfluencers)
                if (Ot.material.getEffect() === et) Ot.computeBonesUsingShaders = !1;
                else if (Ot.vJ)
                for (const tt of Ot.vJ) {
                  if (tt.effect === et) {
                    Ot.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Ot.computeBonesUsingShaders && Ot.numBoneInfluencers > 0 && (Ot.computeBonesUsingShaders = !1)
          }
        } else {
          const et = this._defines[this._currentRank];
          if (et)
            for (let Vt = 0; Vt < et.length; Vt++) tt = tt.replace("#define " + et[Vt], "");
          this._currentRank++
        }
        return tt
      }
    }
  },
  40474: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Mt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40300),
      mt = Vt(37367),
      dt = Vt(37359),
      jt = Vt(40476),
      Ht = Vt(40337),
      Xt = Vt(38899),
      Qt = Vt(38016),
      lt = Vt(40512),
      Et = Vt(40230);
    let ft = (() => {
      var tt;
      let et, Vt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, ft, wt, yt = [];
      return tt = class {
        constructor() {
          this._func = (0, Ot.m)(this, yt), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(tt) {
          this._func = tt
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(tt) {
          this._backFunc = tt
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(tt) {
          this._funcRef = tt
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(tt) {
          this._funcMask = tt
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(tt) {
          this._opStencilFail = tt
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(tt) {
          this._opDepthFail = tt
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(tt) {
          this._opStencilDepthPass = tt
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(tt) {
          this._backOpStencilFail = tt
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(tt) {
          this._backOpDepthFail = tt
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(tt) {
          this._backOpStencilDepthPass = tt
        }
        get mask() {
          return this._mask
        }
        set mask(tt) {
          this._mask = tt
        }
        get enabled() {
          return this._enabled
        }
        set enabled(tt) {
          this._enabled = tt
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(tt) {
          Et.d.Clone((() => tt), this)
        }
        serialize() {
          return Et.d.Serialize(this)
        }
        parse(tt, et, Vt) {
          Et.d.Parse((() => this), tt, et, Vt)
        }
      }, (() => {
        const Et = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], dt = [(0, qt.P)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], Xt = [(0, qt.P)()], Qt = [(0, qt.P)()], lt = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], (0, Ot.l)(tt, null, et, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: tt => "func" in tt,
            get: tt => tt.func
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, Vt, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: tt => "backFunc" in tt,
            get: tt => tt.backFunc
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, Dt, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: tt => "funcRef" in tt,
            get: tt => tt.funcRef
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, mt, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: tt => "funcMask" in tt,
            get: tt => tt.funcMask
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, dt, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: tt => "opStencilFail" in tt,
            get: tt => tt.opStencilFail
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, jt, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: tt => "opDepthFail" in tt,
            get: tt => tt.opDepthFail
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, Ht, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: tt => "opStencilDepthPass" in tt,
            get: tt => tt.opStencilDepthPass
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, Xt, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: tt => "backOpStencilFail" in tt,
            get: tt => tt.backOpStencilFail
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, Qt, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: tt => "backOpDepthFail" in tt,
            get: tt => tt.backOpDepthFail
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, lt, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: tt => "backOpStencilDepthPass" in tt,
            get: tt => tt.backOpStencilDepthPass
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, ft, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: tt => "mask" in tt,
            get: tt => tt.mask
          },
          metadata: Et
        }, null, yt), (0, Ot.l)(tt, null, wt, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "enabled" in tt,
            get: tt => tt.enabled
          },
          metadata: Et
        }, null, yt), Et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Et
        })
      })(), tt
    })();
    var wt = Vt(40514),
      yt = Vt(40112),
      Nt = Vt(40080);
    let Mt = (() => {
      var tt;
      let et, Vt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt = [],
        pt = [],
        xt = [],
        Tt = [],
        gt = [],
        st = [],
        nt = [],
        te = [],
        ee = [],
        Ve = [],
        Oe = [],
        qe = [],
        De = [],
        me = [],
        de = [],
        je = [],
        He = [],
        Xe = [],
        Qe = [],
        le = [],
        Ee = [],
        fe = [],
        we = [],
        ye = [],
        Ne = [],
        ae = [],
        Me = [],
        be = [],
        Je = [],
        Ce = [],
        ue = [],
        Ke = [],
        he = [],
        ve = [],
        We = [],
        Se = [],
        ce = [],
        Re = [],
        Ie = [],
        Pe = [],
        Ze = [],
        Le = [],
        Fe = [],
        ke = [],
        Ge = [],
        ze = [],
        oe = [],
        re = [],
        Ue = [],
        Ae = [],
        ie = [];
      return tt = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(et) {
          this._useVertexPulling !== et && (this._useVertexPulling = et, this.fVt(tt.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(tt) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(et) {
          if (this._alpha === et) return;
          const Vt = this._alpha;
          this._alpha = et, 1 !== Vt && 1 !== et || this.fVt(tt.MiscDirtyFlag + tt.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(et) {
          this._backFaceCulling !== et && (this._backFaceCulling = et, this.fVt(tt.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(et) {
          const Vt = Math.max(0, Math.min(0 | et, 4));
          this._textureRepetitionMode !== Vt && (this._textureRepetitionMode = Vt, this.fVt(tt.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(et) {
          this._cullBackFaces !== et && (this._cullBackFaces = et, this.fVt(tt.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(tt) {
          this._blockDirtyMechanism !== tt && (this._blockDirtyMechanism = tt, tt || this.markDirty())
        }
        atomicMaterialsUpdate(tt) {
          this.blockDirtyMechanism = !0;
          try {
            tt(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(tt) {
          this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new mt.c), this._onBindObservable
        }
        set onBind(tt) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(tt)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new mt.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new mt.c), this._onEffectCreatedObservable
        }
        set alphaMode(tt) {
          this._alphaMode[0] = tt
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Vt] !== et && (this._alphaMode[Vt] = et, this.fVt(tt.TextureDirtyFlag))
        }
        set needDepthPrePass(tt) {
          this._needDepthPrePass !== tt && (this._needDepthPrePass = tt, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(et) {
          this._fogEnabled !== et && (this._fogEnabled = et, this.fVt(tt.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case tt.WireFrameFillMode:
            case tt.LineListDrawMode:
            case tt.LineLoopDrawMode:
            case tt.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(et) {
          this.fillMode = et ? tt.WireFrameFillMode : tt.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case tt.PointFillMode:
            case tt.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(et) {
          this.fillMode = et ? tt.PointFillMode : tt.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(et) {
          this._fillMode !== et && (this._fillMode = et, this.fVt(tt.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(tt) {
          const et = this.vI().Jf().getCaps().fragmentDepthSupported;
          tt && !et && Xt.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = tt && et, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(tt) {
          this._isVertexOutputInvariant !== tt && (this._isVertexOutputInvariant = tt, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(tt) {
          this._drawWrapper = tt
        }
        constructor(et, Vt, qt) {
          let jt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Ot.m)(this, Bt), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Ot.m)(this, pt, void 0), this.uniqueId = ((0, Ot.m)(this, xt), (0, Ot.m)(this, Tt, void 0)), this._loadedUniqueId = (0, Ot.m)(this, gt), this.name = (0, Ot.m)(this, st, void 0), this.metadata = ((0, Ot.m)(this, nt), (0, Ot.m)(this, te, null)), this._internalMetadata = (0, Ot.m)(this, ee), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Ot.m)(this, Ve, !1), this.checkReadyOnlyOnce = ((0, Ot.m)(this, Oe), (0, Ot.m)(this, qe, !1)), this.state = ((0, Ot.m)(this, De), (0, Ot.m)(this, me, "")), this._alpha = ((0, Ot.m)(this, de), (0, Ot.m)(this, je, 1)), this.inspectableCustomProperties = (0, Ot.m)(this, He), this._backFaceCulling = (0, Ot.m)(this, Xe, !0), this._textureRepetitionMode = ((0, Ot.m)(this, Qe), (0, Ot.m)(this, le, 0)), this.textureRepetitionHexTilingParams = ((0, Ot.m)(this, Ee), (0, Ot.m)(this, fe, [1, .6, 7, .5])), this._cullBackFaces = ((0, Ot.m)(this, we), (0, Ot.m)(this, ye, !0)), this._blockDirtyMechanism = ((0, Ot.m)(this, Ne), !1), this.sideOrientation = (0, Ot.m)(this, ae, null), this.onCompiled = ((0, Ot.m)(this, Me), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.ZI = new mt.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Ot.m)(this, be, [2]), this._needDepthPrePass = ((0, Ot.m)(this, Je), (0, Ot.m)(this, Ce, !1)), this.disableDepthWrite = ((0, Ot.m)(this, ue), (0, Ot.m)(this, Ke, !1)), this.disableColorWrite = ((0, Ot.m)(this, he), (0, Ot.m)(this, ve, !1)), this.forceDepthWrite = ((0, Ot.m)(this, We), (0, Ot.m)(this, Se, !1)), this.depthFunction = ((0, Ot.m)(this, ce), (0, Ot.m)(this, Re, 0)), this.separateCullingPass = ((0, Ot.m)(this, Ie), (0, Ot.m)(this, Pe, !1)), this._fogEnabled = ((0, Ot.m)(this, Ze), (0, Ot.m)(this, Le, !0)), this.pointSize = ((0, Ot.m)(this, Fe), (0, Ot.m)(this, ke, 1)), this.zOffset = ((0, Ot.m)(this, Ge), (0, Ot.m)(this, ze, 0)), this.zOffsetUnits = ((0, Ot.m)(this, oe), (0, Ot.m)(this, re, 0)), this.clipPlane = (0, Ot.m)(this, Ue), this.stencil = new ft, this._isVertexOutputInvariant = (0, Ot.m)(this, Ae, tt.ForceVertexOutputInvariant), this._materialContext = (0, Ot.m)(this, ie), this._useUBO = !1, this._fillMode = tt.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = et;
          const Xt = Vt || dt.d.LastCreatedScene;
          Xt && (this._scene = Xt, this._dirtyCallbacks = {}, this._forceGLSL = jt, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = et || Dt.l.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Jf().createMaterialContext(), this._drawWrapper = new lt.c(this._scene.Jf(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Ht.c(this._scene.Jf(), void 0, void 0, et), this._useUBO = this.vI().Jf().supportsUniformBuffers, this._createUniformBuffer(), qt || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), tt.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const tt = this.vI().Jf();
          this._uniformBuffer?.dispose(), tt.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Ht.c(tt, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Ht.c(this._scene.Jf(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(tt) {
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
        isReady(tt, et) {
          return !0
        }
        isReadyForSubMesh(tt, et, Vt) {
          const Ot = et.materialDefines;
          return !!Ot && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ot, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        vI() {
          return this._scene
        }
        _getEffectiveOrientation(tt) {
          return null !== this.sideOrientation ? this.sideOrientation : tt.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(tt) {
          this._transparencyMode = tt
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === tt.MATERIAL_ALPHABLEND || this._transparencyMode === tt.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === tt.MATERIAL_ALPHATEST || this._transparencyMode === tt.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === tt.MATERIAL_OPAQUE || this._transparencyMode === tt.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(tt) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : tt.visibility < 1 || !this._disableAlphaBlending && (tt.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(tt) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(tt) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Vt = this.vI().meshes;
          for (const tt of Vt)
            if (tt.vJ)
              for (const Vt of tt.vJ)
                if (Vt.vf() === this)
                  for (const tt of Vt._drawWrappers) tt && this._materialContext === tt.materialContext && (tt._wasPreviouslyReady = !1, tt._wasPreviouslyUsingInstances = null, tt._forceRebindOnNextCall = et);
          et && this.fVt(tt.AllDirtyFlag)
        }
        _preBind(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ot = this._scene.Jf(),
            qt = (null == Vt ? this.sideOrientation : Vt) === tt.ClockWiseSideOrientation,
            Dt = et || this._getDrawWrapper();
          return (0, yt.c)(Dt) && Dt.materialContext && (Dt.materialContext.useVertexPulling = this.useVertexPulling), Ot.enableEffect(Dt), Ot.setState(this.backFaceCulling, this.zOffset, !1, qt, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), qt
        }
        bind(tt, et) {}
        buildUniformLayout() {
          const tt = this._uniformBuffer;
          this._eventInfo.ubo = tt, this._callbackPluginEventGeneric(8, this._eventInfo), tt.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(tt, et, Vt) {
          const Ot = Vt._drawWrapper;
          this._eventInfo.subMesh = Vt, this._callbackPluginEventBindForSubMesh(this._eventInfo), Ot._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(tt) {}
        bindView(tt) {
          this._useUBO ? this._needToBindSceneUbo = !0 : tt.setMatrix("view", this.vI().getViewMatrix())
        }
        bindViewProjection(tt) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (tt.setMatrix("viewProjection", this.vI().getTransformMatrix()), tt.setMatrix("projection", this.vI().getProjectionMatrix()), tt.setMatrix("inverseProjection", this.vI().getInverseProjectionMatrix()))
        }
        bindEyePosition(tt, et) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(tt, et)
        }
        _afterBind(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && et && (this._needToBindSceneUbo = !1, (0, wt.t)(et, this.vI().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = tt ? tt.visibility : 1, this._onBindObservable && tt && this._onBindObservable.notifyObservers(tt), this.disableDepthWrite) {
            const tt = this._scene.Jf();
            this._cachedDepthWriteState = tt.getDepthWrite(), tt.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const tt = this._scene.Jf();
            this._cachedColorWriteState = tt.getColorWrite(), tt.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const tt = this._scene.Jf();
            this._cachedDepthFunctionState = tt.getDepthFunction() || 0, tt.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Jf().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Jf().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Jf().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(tt) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = tt, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(tt) {
          return null
        }
        _clonePlugins(et, Vt) {
          const Ot = {};
          if (this._serializePlugins(Ot), tt._ParsePlugins(Ot, et, this._scene, Vt), this.pluginManager)
            for (const tt of this.pluginManager._plugins) {
              const Vt = et.pluginManager.getPlugin(tt.name);
              Vt && tt.copyTo(Vt)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const tt = [];
            for (const et in this.meshMap) {
              const Vt = this.meshMap[et];
              Vt && tt.push(Vt)
            }
            return tt
          }
          return this._scene.meshes.filter((tt => tt.material === this))
        }
        forceCompilation(tt, et, Vt, Ot) {
          const qt = {
              clipPlane: !1,
              useInstances: !1,
              ...Vt
            },
            Dt = this.vI(),
            mt = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const dt = () => {
            if (!this._scene || !this._scene.Jf()) return;
            const Vt = Dt.clipPlane;
            if (qt.clipPlane && (Dt.clipPlane = new Qt.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Vt = !0,
                Dt = null;
              if (tt.vJ) {
                const et = new jt.d(0, 0, 0, 0, 0, tt, void 0, !1, !1);
                et.materialDefines && (et.materialDefines._renderId = -1), this.isReadyForSubMesh(tt, et, qt.useInstances) || (et.effect && et.effect.getCompilationError() && et.effect.allFallbacksProcessed() ? Dt = et.effect.getCompilationError() : (Vt = !1, setTimeout(dt, 16)))
              }
              Vt && (this.allowShaderHotSwapping = mt, Dt && Ot && Ot(Dt), et && et(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = mt, et && et(this)) : setTimeout(dt, 16);
            qt.clipPlane && (Dt.clipPlane = Vt)
          };
          dt()
        }
        async forceCompilationAsync(tt, et) {
          return await new Promise(((Vt, Ot) => {
            this.forceCompilation(tt, (() => {
              Vt()
            }), et, (tt => {
              Ot(tt)
            }))
          }))
        }
        fVt(et) {
          this.vI().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (tt._DirtyCallbackArray.length = 0, et & tt.ImageProcessingDirtyFlag && tt._DirtyCallbackArray.push(tt._ImageProcessingDirtyCallBack), et & tt.TextureDirtyFlag && tt._DirtyCallbackArray.push(tt._TextureDirtyCallBack), et & tt.LightDirtyFlag && tt._DirtyCallbackArray.push(tt._LightsDirtyCallBack), et & tt.FresnelDirtyFlag && tt._DirtyCallbackArray.push(tt._FresnelDirtyCallBack), et & tt.AttributesDirtyFlag && tt._DirtyCallbackArray.push(tt._AttributeDirtyCallBack), et & tt.MiscDirtyFlag && tt._DirtyCallbackArray.push(tt._MiscDirtyCallBack), et & tt.PrePassDirtyFlag && tt._DirtyCallbackArray.push(tt._PrePassDirtyCallBack), tt._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(tt._RunDirtyCallBacks), this.vI().resetCachedMaterial())
        }
        resetDrawCache() {
          const tt = this.vI().meshes;
          for (const et of tt)
            if (et.vJ)
              for (const tt of et.vJ) tt.vf() === this && tt.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(tt) {
          const et = this.vI();
          if (et.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Vt = et.meshes;
          for (const Ot of Vt)
            if (Ot.vJ)
              for (const Vt of Ot.vJ) {
                if ((Vt.vf() || (et._hasDefaultMaterial ? et.defaultMaterial : null)) === this)
                  for (const et of Vt._drawWrappers) et && et.defines && et.defines.markAllAsDirty && this._materialContext === et.materialContext && tt(et.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.vI().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const tt = this.vI().enablePrePassRenderer();
          tt && tt.fVt()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(tt._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(tt._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(tt._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(tt._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(tt._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(tt._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(tt._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(tt._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(tt._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(tt._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const tt = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.ZI.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(tt)
            }))
          }
        }
        setPrePassRenderer(tt) {
          return !1
        }
        dispose(tt, et, Vt) {
          const Ot = this.vI();
          if (Ot.stopAnimation(this), Ot.freeProcessedMaterials(), Ot.removeMaterial(this), this._eventInfo.forceDisposeTextures = et, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const tt = this._parentContainer.materials.indexOf(this);
            tt > -1 && this._parentContainer.materials.splice(tt, 1), this._parentContainer = null
          }
          if (!0 !== Vt)
            if (this.meshMap)
              for (const qt in this.meshMap) {
                const tt = this.meshMap[qt];
                this._disposeMeshResources(tt)
              } else {
                const tt = Ot.meshes;
                for (const et of tt) this._disposeMeshResources(et)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.ZI.notifyObservers(this), this.ZI.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(tt) {
          if (!tt) return;
          const et = tt.geometry,
            Vt = tt._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (tt.vJ && Vt)
              for (const Ot of tt.vJ) {
                const tt = Ot._drawWrappers;
                for (let qt = 0; qt < tt.length; qt++) {
                  const Dt = tt[qt]?.effect;
                  if (!Dt) continue;
                  Vt[qt] === this && (et?._releaseVertexArrayObject(Dt), Ot._removeDrawWrapper(qt, !0, !0))
                }
              }
          } else et?._releaseVertexArrayObject(this._drawWrapper.effect);
          tt.material !== this || tt.Rqt || (tt.material = null)
        }
        serialize() {
          const tt = Et.d.Serialize(this);
          return tt.stencil = this.stencil.serialize(), tt.uniqueId = this.uniqueId, this._serializePlugins(tt), tt
        }
        _serializePlugins(tt) {
          if (tt.plugins = {}, this.pluginManager)
            for (const et of this.pluginManager._plugins) et.doNotSerialize || (tt.plugins[et.getClassName()] = et.serialize())
        }
        static ParseAlphaMode(tt, et) {
          void 0 !== tt._alphaMode ? et._alphaMode = Array.isArray(tt._alphaMode) ? [...tt._alphaMode] : [tt._alphaMode] : void 0 !== tt.alphaMode ? et._alphaMode = Array.isArray(tt.alphaMode) ? [...tt.alphaMode] : [tt.alphaMode] : et._alphaMode = [2]
        }
        static Parse(et, Vt, Ot) {
          if (et.customType) {
            if ("BABYLON.PBRMaterial" === et.customType && et.overloadedAlbedo && (et.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Xt.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else et.customType = "BABYLON.StandardMaterial";
          const qt = Dt.l.Instantiate(et.customType).Parse(et, Vt, Ot);
          return qt._loadedUniqueId = et.uniqueId, tt.ParseAlphaMode(et, qt), qt
        }
        static _ParsePlugins(tt, et, Vt, Ot) {
          if (tt.plugins)
            for (const qt in tt.plugins) {
              const mt = tt.plugins[qt];
              let dt = et.pluginManager?.getPlugin(mt.name);
              if (!dt) {
                const tt = Dt.l.Instantiate("BABYLON." + qt);
                tt && (dt = new tt(et))
              }
              dt?.parse(mt, Vt, Ot)
            }
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, qt.P)()], Vt = [(0, qt.P)()], Nt = [(0, qt.P)()], Mt = [(0, qt.P)()], bt = [(0, qt.P)()], Jt = [(0, qt.P)()], Ct = [(0, qt.P)()], ut = [(0, qt.P)("alpha")], Kt = [(0, qt.P)("backFaceCulling")], ht = [(0, qt.P)("textureRepetitionMode")], vt = [(0, qt.P)("textureRepetitionHexTilingParams")], Wt = [(0, qt.P)("cullBackFaces")], St = [(0, qt.P)()], ct = [(0, qt.P)()], Rt = [(0, qt.P)()], It = [(0, qt.P)()], Pt = [(0, qt.P)()], Zt = [(0, qt.P)()], Lt = [(0, qt.P)()], Ft = [(0, qt.P)()], kt = [(0, qt.P)("fogEnabled")], Gt = [(0, qt.P)()], zt = [(0, qt.P)()], ot = [(0, qt.P)()], rt = [(0, qt.P)()], Ut = [(0, qt.P)()], At = [(0, qt.P)()], it = [(0, qt.P)()], Yt = [(0, qt.P)()], (0, Ot.l)(tt, null, rt, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: tt => "pointsCloud" in tt,
            get: tt => tt.pointsCloud
          },
          metadata: Dt
        }, null, Bt), (0, Ot.l)(tt, null, Ut, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "fillMode" in tt,
            get: tt => tt.fillMode
          },
          metadata: Dt
        }, null, Bt), (0, Ot.l)(tt, null, At, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: tt => "useLogarithmicDepth" in tt,
            get: tt => tt.useLogarithmicDepth
          },
          metadata: Dt
        }, null, Bt), (0, Ot.l)(tt, null, Yt, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "transparencyMode" in tt,
            get: tt => tt.transparencyMode
          },
          metadata: Dt
        }, null, Bt), (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: tt => "id" in tt,
            get: tt => tt.id,
            set: (tt, et) => {
              tt.id = et
            }
          },
          metadata: Dt
        }, pt, xt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: tt => "uniqueId" in tt,
            get: tt => tt.uniqueId,
            set: (tt, et) => {
              tt.uniqueId = et
            }
          },
          metadata: Dt
        }, Tt, gt), (0, Ot.l)(null, null, Nt, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: tt => "name" in tt,
            get: tt => tt.name,
            set: (tt, et) => {
              tt.name = et
            }
          },
          metadata: Dt
        }, st, nt), (0, Ot.l)(null, null, Mt, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: tt => "metadata" in tt,
            get: tt => tt.metadata,
            set: (tt, et) => {
              tt.metadata = et
            }
          },
          metadata: Dt
        }, te, ee), (0, Ot.l)(null, null, bt, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: tt => "checkReadyOnEveryCall" in tt,
            get: tt => tt.checkReadyOnEveryCall,
            set: (tt, et) => {
              tt.checkReadyOnEveryCall = et
            }
          },
          metadata: Dt
        }, Ve, Oe), (0, Ot.l)(null, null, Jt, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: tt => "checkReadyOnlyOnce" in tt,
            get: tt => tt.checkReadyOnlyOnce,
            set: (tt, et) => {
              tt.checkReadyOnlyOnce = et
            }
          },
          metadata: Dt
        }, qe, De), (0, Ot.l)(null, null, Ct, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: tt => "state" in tt,
            get: tt => tt.state,
            set: (tt, et) => {
              tt.state = et
            }
          },
          metadata: Dt
        }, me, de), (0, Ot.l)(null, null, ut, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: tt => "_alpha" in tt,
            get: tt => tt._alpha,
            set: (tt, et) => {
              tt._alpha = et
            }
          },
          metadata: Dt
        }, je, He), (0, Ot.l)(null, null, Kt, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: tt => "_backFaceCulling" in tt,
            get: tt => tt._backFaceCulling,
            set: (tt, et) => {
              tt._backFaceCulling = et
            }
          },
          metadata: Dt
        }, Xe, Qe), (0, Ot.l)(null, null, ht, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "_textureRepetitionMode" in tt,
            get: tt => tt._textureRepetitionMode,
            set: (tt, et) => {
              tt._textureRepetitionMode = et
            }
          },
          metadata: Dt
        }, le, Ee), (0, Ot.l)(null, null, vt, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: tt => "textureRepetitionHexTilingParams" in tt,
            get: tt => tt.textureRepetitionHexTilingParams,
            set: (tt, et) => {
              tt.textureRepetitionHexTilingParams = et
            }
          },
          metadata: Dt
        }, fe, we), (0, Ot.l)(null, null, Wt, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: tt => "_cullBackFaces" in tt,
            get: tt => tt._cullBackFaces,
            set: (tt, et) => {
              tt._cullBackFaces = et
            }
          },
          metadata: Dt
        }, ye, Ne), (0, Ot.l)(null, null, St, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: tt => "sideOrientation" in tt,
            get: tt => tt.sideOrientation,
            set: (tt, et) => {
              tt.sideOrientation = et
            }
          },
          metadata: Dt
        }, ae, Me), (0, Ot.l)(null, null, ct, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "_alphaMode" in tt,
            get: tt => tt._alphaMode,
            set: (tt, et) => {
              tt._alphaMode = et
            }
          },
          metadata: Dt
        }, be, Je), (0, Ot.l)(null, null, Rt, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: tt => "_needDepthPrePass" in tt,
            get: tt => tt._needDepthPrePass,
            set: (tt, et) => {
              tt._needDepthPrePass = et
            }
          },
          metadata: Dt
        }, Ce, ue), (0, Ot.l)(null, null, It, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: tt => "disableDepthWrite" in tt,
            get: tt => tt.disableDepthWrite,
            set: (tt, et) => {
              tt.disableDepthWrite = et
            }
          },
          metadata: Dt
        }, Ke, he), (0, Ot.l)(null, null, Pt, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: tt => "disableColorWrite" in tt,
            get: tt => tt.disableColorWrite,
            set: (tt, et) => {
              tt.disableColorWrite = et
            }
          },
          metadata: Dt
        }, ve, We), (0, Ot.l)(null, null, Zt, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: tt => "forceDepthWrite" in tt,
            get: tt => tt.forceDepthWrite,
            set: (tt, et) => {
              tt.forceDepthWrite = et
            }
          },
          metadata: Dt
        }, Se, ce), (0, Ot.l)(null, null, Lt, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: tt => "depthFunction" in tt,
            get: tt => tt.depthFunction,
            set: (tt, et) => {
              tt.depthFunction = et
            }
          },
          metadata: Dt
        }, Re, Ie), (0, Ot.l)(null, null, Ft, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: tt => "separateCullingPass" in tt,
            get: tt => tt.separateCullingPass,
            set: (tt, et) => {
              tt.separateCullingPass = et
            }
          },
          metadata: Dt
        }, Pe, Ze), (0, Ot.l)(null, null, kt, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "_fogEnabled" in tt,
            get: tt => tt._fogEnabled,
            set: (tt, et) => {
              tt._fogEnabled = et
            }
          },
          metadata: Dt
        }, Le, Fe), (0, Ot.l)(null, null, Gt, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: tt => "pointSize" in tt,
            get: tt => tt.pointSize,
            set: (tt, et) => {
              tt.pointSize = et
            }
          },
          metadata: Dt
        }, ke, Ge), (0, Ot.l)(null, null, zt, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: tt => "zOffset" in tt,
            get: tt => tt.zOffset,
            set: (tt, et) => {
              tt.zOffset = et
            }
          },
          metadata: Dt
        }, ze, oe), (0, Ot.l)(null, null, ot, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: tt => "zOffsetUnits" in tt,
            get: tt => tt.zOffsetUnits,
            set: (tt, et) => {
              tt.zOffsetUnits = et
            }
          },
          metadata: Dt
        }, re, Ue), (0, Ot.l)(null, null, it, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: tt => "_isVertexOutputInvariant" in tt,
            get: tt => tt._isVertexOutputInvariant,
            set: (tt, et) => {
              tt._isVertexOutputInvariant = et
            }
          },
          metadata: Dt
        }, Ae, ie), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt.TriangleFillMode = 0, tt.WireFrameFillMode = 1, tt.PointFillMode = 2, tt.PointListDrawMode = 3, tt.LineListDrawMode = 4, tt.LineLoopDrawMode = 5, tt.LineStripDrawMode = 6, tt.TriangleStripDrawMode = 7, tt.TriangleFanDrawMode = 8, tt.ClockWiseSideOrientation = 0, tt.CounterClockWiseSideOrientation = 1, tt.ImageProcessingDirtyFlag = 64, tt.TextureDirtyFlag = 1, tt.LightDirtyFlag = 2, tt.FresnelDirtyFlag = 4, tt.AttributesDirtyFlag = 8, tt.MiscDirtyFlag = 16, tt.PrePassDirtyFlag = 32, tt.AllDirtyFlag = 127, tt.MATERIAL_OPAQUE = 0, tt.MATERIAL_ALPHATEST = 1, tt.MATERIAL_ALPHABLEND = 2, tt.MATERIAL_ALPHATESTANDBLEND = 3, tt.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, tt.MATERIAL_NORMALBLENDMETHOD_RNM = 1, tt.LIGHTFALLOFF_PHYSICAL = 0, tt.LIGHTFALLOFF_GLTF = 1, tt.LIGHTFALLOFF_STANDARD = 2, tt.OnEventObservable = new mt.c, tt.ForceVertexOutputInvariant = !1, tt._AllDirtyCallBack = tt => tt.markAllAsDirty(), tt._ImageProcessingDirtyCallBack = tt => tt.markAsImageProcessingDirty(), tt._TextureDirtyCallBack = tt => tt.markAsTexturesDirty(), tt._FresnelDirtyCallBack = tt => tt.markAsFresnelDirty(), tt._MiscDirtyCallBack = tt => tt.markAsMiscDirty(), tt._PrePassDirtyCallBack = tt => tt.markAsPrePassDirty(), tt._LightsDirtyCallBack = tt => tt.markAsLightDirty(), tt._AttributeDirtyCallBack = tt => tt.markAsAttributesDirty(), tt._FresnelAndMiscDirtyCallBack = et => {
        tt._FresnelDirtyCallBack(et), tt._MiscDirtyCallBack(et)
      }, tt._TextureAndMiscDirtyCallBack = et => {
        tt._TextureDirtyCallBack(et), tt._MiscDirtyCallBack(et)
      }, tt._DirtyCallbackArray = [], tt._RunDirtyCallBacks = et => {
        for (const Vt of tt._DirtyCallbackArray) Vt(et)
      }, tt
    })();
    Object.getOwnPropertyDescriptor(Mt.prototype, "pluginManager") || Object.defineProperty(Mt.prototype, "pluginManager", (0, Nt.c)("Material", "pluginManager"))
  },
  40525: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(40092);
    class qt {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(tt) {
        this._DiffuseTextureEnabled !== tt && (this._DiffuseTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(tt) {
        this._BaseWeightTextureEnabled !== tt && (this._BaseWeightTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(tt) {
        this._BaseDiffuseRoughnessTextureEnabled !== tt && (this._BaseDiffuseRoughnessTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(tt) {
        this._DetailTextureEnabled !== tt && (this._DetailTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(tt) {
        this._DecalMapEnabled !== tt && (this._DecalMapEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(tt) {
        this._AmbientTextureEnabled !== tt && (this._AmbientTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(tt) {
        this._OpacityTextureEnabled !== tt && (this._OpacityTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(tt) {
        this._ReflectionTextureEnabled !== tt && (this._ReflectionTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(tt) {
        this._EmissiveTextureEnabled !== tt && (this._EmissiveTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(tt) {
        this._SpecularTextureEnabled !== tt && (this._SpecularTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(tt) {
        this._BumpTextureEnabled !== tt && (this._BumpTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(tt) {
        this._LightmapTextureEnabled !== tt && (this._LightmapTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(tt) {
        this._RefractionTextureEnabled !== tt && (this._RefractionTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(tt) {
        this._ColorGradingTextureEnabled !== tt && (this._ColorGradingTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(tt) {
        this._FresnelEnabled !== tt && (this._FresnelEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(tt) {
        this._ClearCoatTextureEnabled !== tt && (this._ClearCoatTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(tt) {
        this._ClearCoatBumpTextureEnabled !== tt && (this._ClearCoatBumpTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(tt) {
        this._ClearCoatTintTextureEnabled !== tt && (this._ClearCoatTintTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(tt) {
        this._SheenTextureEnabled !== tt && (this._SheenTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(tt) {
        this._AnisotropicTextureEnabled !== tt && (this._AnisotropicTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(tt) {
        this._ThicknessTextureEnabled !== tt && (this._ThicknessTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(tt) {
        this._RefractionIntensityTextureEnabled !== tt && (this._RefractionIntensityTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(tt) {
        this._TranslucencyIntensityTextureEnabled !== tt && (this._TranslucencyIntensityTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(tt) {
        this._TranslucencyColorTextureEnabled !== tt && (this._TranslucencyColorTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(tt) {
        this._IridescenceTextureEnabled !== tt && (this._IridescenceTextureEnabled = tt, Ot.d.MarkAllMaterialsAsDirty(1))
      }
    }
    qt._DiffuseTextureEnabled = !0, qt._BaseWeightTextureEnabled = !0, qt._BaseDiffuseRoughnessTextureEnabled = !0, qt._DetailTextureEnabled = !0, qt._DecalMapEnabled = !0, qt._AmbientTextureEnabled = !0, qt._OpacityTextureEnabled = !0, qt._ReflectionTextureEnabled = !0, qt._EmissiveTextureEnabled = !0, qt._SpecularTextureEnabled = !0, qt._BumpTextureEnabled = !0, qt._LightmapTextureEnabled = !0, qt._RefractionTextureEnabled = !0, qt._ColorGradingTextureEnabled = !0, qt._FresnelEnabled = !0, qt._ClearCoatTextureEnabled = !0, qt._ClearCoatBumpTextureEnabled = !0, qt._ClearCoatTintTextureEnabled = !0, qt._SheenTextureEnabled = !0, qt._AnisotropicTextureEnabled = !0, qt._ThicknessTextureEnabled = !0, qt._RefractionIntensityTextureEnabled = !0, qt._TranslucencyIntensityTextureEnabled = !0, qt._TranslucencyColorTextureEnabled = !0, qt._IridescenceTextureEnabled = !0
  },
  40514: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => Rt,
      D: () => Ct,
      H: () => St,
      L: () => ct,
      M: () => Et,
      O: () => lt,
      R: () => Ut,
      V: () => kt,
      X: () => Lt,
      Y: () => Zt,
      ab: () => bt,
      e: () => Pt,
      eb: () => It,
      f: () => ut,
      gb: () => At,
      i: () => Qt,
      ib: () => it,
      jb: () => Yt,
      kb: () => Tt,
      l: () => Nt,
      lb: () => pt,
      n: () => Mt,
      o: () => Wt,
      ob: () => xt,
      pb: () => ft,
      q: () => jt,
      r: () => wt,
      t: () => yt,
      w: () => Jt
    });
    var Ot = Vt(38899),
      qt = Vt(37359),
      Dt = Vt(40395),
      mt = Vt(40520),
      dt = Vt(40525);

    function jt(tt, et, Vt) {
      if (!tt || tt.LOGARITHMICDEPTH || tt.indexOf && tt.indexOf("LOGARITHMICDEPTH") >= 0) {
        const tt = Vt.activeCamera;
        1 === tt.mode && Ot.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), et.setFloat("logarithmicDepthConstant", 2 / (Math.log(tt.maxZ + 1) / Math.LN2))
      }
    }
    const Ht = {
        r: 0,
        g: 0,
        b: 0
      },
      Xt = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Qt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Vt && tt.fogEnabled && (!et || et.applyFog) && 0 !== tt.fogMode && (Vt.setFloat4("vFogInfos", tt.fogMode, tt.fogStart, tt.fogEnd, tt.fogDensity), Ot ? (tt.fogColor.toLinearSpaceToRef(Ht, tt.Jf().useExactSrgbConversions), Vt.setColor3("vFogColor", Ht)) : Vt.setColor3("vFogColor", tt.fogColor))
    }

    function lt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
      const Qt = tt.numMaxInfluencers || tt.numInfluencers;
      return Qt <= 0 ? 0 : (et.push("#define MORPHTARGETS"), tt.hasPositions && et.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), tt.hasNormals && et.push("#define MORPHTARGETTEXTURE_HASNORMALS"), tt.hasTangents && et.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), tt.hasUVs && et.push("#define MORPHTARGETTEXTURE_HASUVS"), tt.hasUV2s && et.push("#define MORPHTARGETTEXTURE_HASUV2S"), tt.hasColors && et.push("#define MORPHTARGETTEXTURE_HASCOLORS"), tt.supportsPositions && qt && et.push("#define MORPHTARGETS_POSITION"), tt.supportsNormals && Dt && et.push("#define MORPHTARGETS_NORMAL"), tt.supportsTangents && mt && et.push("#define MORPHTARGETS_TANGENT"), tt.supportsUVs && dt && et.push("#define MORPHTARGETS_UV"), tt.supportsUV2s && jt && et.push("#define MORPHTARGETS_UV2"), tt.supportsColors && Ht && et.push("#define MORPHTARGETS_COLOR"), et.push("#define NUM_MORPH_INFLUENCERS " + Qt), tt.isUsingTextureForTargets && et.push("#define MORPHTARGETS_TEXTURE"), Xt.NUM_MORPH_INFLUENCERS = Qt, Xt.NORMAL = Dt, Xt.TANGENT = mt, Xt.UV = dt, Xt.UV2 = jt, Xt.COLOR = Ht, Et(Vt, Ot, Xt, qt), Qt)
    }

    function Et(tt, et, Vt) {
      let Dt = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const mt = Vt.NUM_MORPH_INFLUENCERS;
      if (mt > 0 && qt.d.LastCreatedEngine) {
        const dt = qt.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          jt = et.morphTargetManager;
        if (jt?.isUsingTextureForTargets) return;
        const Ht = jt && jt.supportsPositions && Dt,
          Xt = jt && jt.supportsNormals && Vt.NORMAL,
          Qt = jt && jt.supportsTangents && Vt.TANGENT,
          lt = jt && jt.supportsUVs && Vt.UV1,
          Et = jt && jt.supportsUV2s && Vt.UV2,
          ft = jt && jt.supportsColors && Vt.VERTEXCOLOR;
        for (let Vt = 0; Vt < mt; Vt++) Ht && tt.push("position" + Vt), Xt && tt.push("normal" + Vt), Qt && tt.push("tangent" + Vt), lt && tt.push("uv_" + Vt), Et && tt.push("uv2_" + Vt), ft && tt.push("color" + Vt), tt.length > dt && Ot.d.Error("Cannot add more vertex attributes for mesh " + et.name)
      }
    }

    function ft(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      tt.push("world0"), tt.push("world1"), tt.push("world2"), tt.push("world3"), et && (tt.push("previousWorld0"), tt.push("previousWorld1"), tt.push("previousWorld2"), tt.push("previousWorld3"))
    }

    function wt(tt, et) {
      const Vt = tt.morphTargetManager;
      tt && Vt && et.setFloatArray("morphTargetInfluences", Vt.influences)
    }

    function yt(tt, et) {
      et.bindToEffect(tt, "Scene")
    }

    function Nt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        jt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ht = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Xt = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Qt = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        lt = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (tt.texturesEnabled && qt && dt.e.ReflectionTextureEnabled) {
        if (Vt.x_("reflectionMatrix", qt.getReflectionTextureMatrix()), Vt.updateFloat2("vReflectionInfos", qt.level * tt.iblIntensity, lt), jt && qt.boundingBoxSize) {
          const tt = qt;
          Vt.updateVector3("vReflectionPosition", tt.boundingBoxPosition), Vt.updateVector3("vReflectionSize", tt.boundingBoxSize)
        }
        if (Dt) {
          const tt = qt.getSize().width;
          Vt.updateFloat2("vReflectionFilteringInfo", tt, Math.log2(tt))
        }
        if (Xt && !et.USEIRRADIANCEMAP) {
          const tt = qt.sphericalPolynomial;
          if (et.USESPHERICALFROMREFLECTIONMAP && tt)
            if (et.SPHERICAL_HARMONICS) {
              const et = tt.preScaledHarmonics;
              Vt.updateVector3("vSphericalL00", et.l00), Vt.updateVector3("vSphericalL1_1", et.l1_1), Vt.updateVector3("vSphericalL10", et.l10), Vt.updateVector3("vSphericalL11", et.l11), Vt.updateVector3("vSphericalL2_2", et.l2_2), Vt.updateVector3("vSphericalL2_1", et.l2_1), Vt.updateVector3("vSphericalL20", et.l20), Vt.updateVector3("vSphericalL21", et.l21), Vt.updateVector3("vSphericalL22", et.l22)
            } else Vt.updateFloat3("vSphericalX", tt.x.x, tt.x.y, tt.x.z), Vt.updateFloat3("vSphericalY", tt.y.x, tt.y.y, tt.y.z), Vt.updateFloat3("vSphericalZ", tt.z.x, tt.z.y, tt.z.z), Vt.updateFloat3("vSphericalXX_ZZ", tt.xx.x - tt.zz.x, tt.xx.y - tt.zz.y, tt.xx.z - tt.zz.z), Vt.updateFloat3("vSphericalYY_ZZ", tt.yy.x - tt.zz.x, tt.yy.y - tt.zz.y, tt.yy.z - tt.zz.z), Vt.updateFloat3("vSphericalZZ", tt.zz.x, tt.zz.y, tt.zz.z), Vt.updateFloat3("vSphericalXY", tt.xy.x, tt.xy.y, tt.xy.z), Vt.updateFloat3("vSphericalYZ", tt.yz.x, tt.yz.y, tt.yz.z), Vt.updateFloat3("vSphericalZX", tt.zx.x, tt.zx.y, tt.zx.z)
        } else Ht && et.USEIRRADIANCEMAP && et.USE_IRRADIANCE_DOMINANT_DIRECTION && qt.irradianceTexture && Vt.updateVector3("vReflectionDominantDirection", qt.irradianceTexture._dominantDirection);
        mt && Vt.updateFloat3("vReflectionMicrosurfaceInfos", qt.getSize().width, qt.lodGenerationScale, qt.lodGenerationOffset)
      }
      Qt && Vt.updateColor3("vReflectionColor", Ot)
    }

    function Mt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Ot && dt.e.ReflectionTextureEnabled) {
        et.LODBASEDMICROSFURACE ? Vt.setTexture("reflectionSampler", Ot) : (Vt.setTexture("reflectionSampler", Ot._lodTextureMid || Ot), Vt.setTexture("reflectionSamplerLow", Ot._lodTextureLow || Ot), Vt.setTexture("reflectionSamplerHigh", Ot._lodTextureHigh || Ot)), et.USEIRRADIANCEMAP && Vt.setTexture("irradianceSampler", Ot.irradianceTexture);
        const Dt = tt.iblCdfGenerator;
        qt && Dt && Vt.setTexture("icdfSampler", Dt.getIcdfTexture())
      }
    }

    function bt(tt, et, Vt) {
      et._needUVs = !0, et[Vt] = !0, tt.optimizeUVAllocation && tt.getTextureMatrix().isIdentityAs3x2() ? (et[Vt + "DIRECTUV"] = tt.coordinatesIndex + 1, et["MAINUV" + (tt.coordinatesIndex + 1)] = !0) : et[Vt + "DIRECTUV"] = 0
    }

    function Jt(tt, et, Vt) {
      const Ot = tt.getTextureMatrix();
      et.x_(Vt + "Matrix", Ot)
    }

    function Ct(tt, et, Vt) {
      Vt.BAKED_VERTEX_ANIMATION_TEXTURE && Vt.INSTANCES && tt.push("bakedVertexAnimationSettingsInstanced")
    }

    function ut(tt, et, Vt) {
      var Ot;
      if (et && tt && (tt.computeBonesUsingShaders && et._bonesComputationForcedToCPU && (tt.computeBonesUsingShaders = !1), tt.useBones && tt.computeBonesUsingShaders && tt.skeleton)) {
        const qt = tt.skeleton;
        if (qt.isUsingTextureForMatrices && et.getUniformIndex("boneTextureInfo") > -1) {
          const Vt = qt.getTransformMatrixTexture(tt);
          et.setTexture("boneSampler", Vt), et.setFloat2("boneTextureInfo", qt._textureWidth, qt._textureHeight)
        } else {
          const Dt = qt.getTransformMatrices(tt);
          Dt && (et.setMatrices("mBones", Dt), Vt && tt.vI().prePassRenderer && tt.vI().prePassRenderer.getIndex(2) && (Vt.previousBones[tt.uniqueId] || (Vt.previousBones[tt.uniqueId] = Dt.slice()), et.setMatrices("mPreviousBones", Vt.previousBones[tt.uniqueId]), Ot = Dt, Vt.previousBones[tt.uniqueId].set(Ot)))
        }
      }
    }

    function Kt(tt, et, Vt, Ot, qt) {
      let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      tt._bindLight(et, Vt, Ot, qt, Dt)
    }
    const ht = 4,
      vt = new WeakMap;

    function Wt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Dt = Math.min(et.lightSources.length, qt);
      for (let mt = 0; mt < Dt; mt++) {
        Kt(et.lightSources[mt], mt, tt, Vt, "boolean" === typeof Ot ? Ot : Ot.SPECULARTERM, et.receiveShadows)
      }
    }

    function St(tt, et, Vt, Ot) {
      Vt.NUM_BONE_INFLUENCERS > 0 && (Ot.addCPUSkinningFallback(0, et), tt.push("matricesIndices"), tt.push("matricesWeights"), Vt.NUM_BONE_INFLUENCERS > 4 && (tt.push("matricesIndicesExtra"), tt.push("matricesWeightsExtra")))
    }

    function ct(tt, et) {
      (et.INSTANCES || et.THIN_INSTANCES) && ft(tt, !!et.PREPASS_VELOCITY), et.INSTANCESCOLOR && tt.push("instanceColor")
    }

    function Rt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qt = 0;
      for (let Dt = 0; Dt < Vt && tt["LIGHT" + Dt]; Dt++) Dt > 0 && (qt = Ot + Dt, et.addFallback(qt, "LIGHT" + Dt)), tt.SHADOWS || (tt["SHADOW" + Dt] && et.addFallback(Ot, "SHADOW" + Dt), tt["SHADOWPCF" + Dt] && et.addFallback(Ot, "SHADOWPCF" + Dt), tt["SHADOWPCSS" + Dt] && et.addFallback(Ot, "SHADOWPCSS" + Dt), tt["SHADOWPOISSON" + Dt] && et.addFallback(Ot, "SHADOWPOISSON" + Dt), tt["SHADOWESM" + Dt] && et.addFallback(Ot, "SHADOWESM" + Dt), tt["SHADOWCLOSEESM" + Dt] && et.addFallback(Ot, "SHADOWCLOSEESM" + Dt));
      return qt
    }

    function It(tt, et, Vt, Ot, qt, Dt, mt) {
      let dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ht = arguments.length > 9 ? arguments[9] : void 0,
        Xt = arguments.length > 10 ? arguments[10] : void 0;
      if (mt._areMiscDirty) {
        mt.LOGARITHMICDEPTH = Vt, mt.POINTSIZE = Ot, mt.FOG = qt && function(tt, et) {
          return et.fogEnabled && tt.applyFog && 0 !== et.fogMode
        }(tt, et), mt.NONUNIFORMSCALING = tt.nonUniformScaling, mt.ALPHATEST = Dt, mt.DECAL_AFTER_DETAIL = dt, mt.USE_VERTEX_PULLING = jt, mt.RIGHT_HANDED = et.useRightHandedSystem;
        const Qt = jt ? Ht?.geometry?.getIndexBuffer() : null,
          lt = !!Ht && Ht.isUnIndexed;
        mt.VERTEX_PULLING_USE_INDEX_BUFFER = !!Qt && !lt, mt.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Qt || lt) && Qt.is32Bits, mt.VERTEXOUTPUT_INVARIANT = !!Xt
      }
    }

    function Pt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!tt.lightsEnabled || Ot) return !0;
      const qt = et.lightSources,
        Dt = Math.min(qt.length, Vt);
      for (let mt = 0; mt < Dt; mt++)
        if (!qt[mt].areLightTexturesReady()) return !1;
      return !0
    }

    function Zt(tt, et, Vt, qt) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Vt._areLightsDirty) return Vt._needNormals;
      const dt = Dt;
      Dt = function(tt, et) {
        const Vt = tt.Jf().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Vt) return et;
        const Ot = Math.max(Vt - ht, 1);
        return Math.min(et, Ot)
      }(tt, Dt);
      let jt = 0;
      const Ht = {
        needNormals: Vt._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (tt.lightsEnabled && !mt) {
        et.lightSources.length > Dt && Dt < dt && function(tt, et, Vt, qt) {
          let Dt = vt.get(tt);
          Dt || (Dt = new Set, vt.set(tt, Dt)), Dt.has(qt) || (Dt.add(qt), Ot.d.Warn(`maxSimultaneousLights is ${et} but this engine supports at most ${Vt} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${qt} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${qt+ht} uniform buffers, over the device limit of ${tt.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Vt}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Vt} or less to silence this warning.`))
        }(tt.Jf(), dt, Dt, Math.min(et.lightSources.length, dt));
        for (const Ot of et.lightSources)
          if (Ft(tt, et, Ot, jt, Vt, qt, Ht), jt++, jt === Dt) break
      }
      Vt.SPECULARTERM = Ht.specularEnabled, Vt.SHADOWS = Ht.shadowEnabled;
      const Xt = Math.max(Dt, Vt.MAXLIGHTCOUNT || 0);
      for (let Ot = jt; Ot < Xt; Ot++) void 0 !== Vt["LIGHT" + Ot] && (Vt["LIGHT" + Ot] = !1, Vt["HEMILIGHT" + Ot] = !1, Vt["POINTLIGHT" + Ot] = !1, Vt["DIRLIGHT" + Ot] = !1, Vt["SPOTLIGHT" + Ot] = !1, Vt["AREALIGHT" + Ot] = !1, Vt["CLUSTLIGHT" + Ot] = !1, Vt["SHADOW" + Ot] = !1, Vt["SHADOWCSM" + Ot] = !1, Vt["SHADOWCSMDEBUG" + Ot] = !1, Vt["SHADOWCSMNUM_CASCADES" + Ot] = !1, Vt["SHADOWCSMUSESHADOWMAXZ" + Ot] = !1, Vt["SHADOWCSMNOBLEND" + Ot] = !1, Vt["SHADOWCSM_RIGHTHANDED" + Ot] = !1, Vt["SHADOWPCF" + Ot] = !1, Vt["SHADOWPCSS" + Ot] = !1, Vt["SHADOWPOISSON" + Ot] = !1, Vt["SHADOWESM" + Ot] = !1, Vt["SHADOWCLOSEESM" + Ot] = !1, Vt["SHADOWCUBE" + Ot] = !1, Vt["SHADOWLOWQUALITY" + Ot] = !1, Vt["SHADOWMEDIUMQUALITY" + Ot] = !1);
      Vt.LIGHTCOUNT = jt, Vt.MAXLIGHTCOUNT = Dt;
      const Qt = tt.Jf().getCaps();
      return void 0 === Vt.SHADOWFLOAT && (Ht.needRebuild = !0), Vt.SHADOWFLOAT = Ht.shadowEnabled && (Qt.textureFloatRender && Qt.textureFloatLinearFiltering || Qt.textureHalfFloatRender && Qt.textureHalfFloatLinearFiltering), Vt.LIGHTMAPEXCLUDED = Ht.lightmapMode, Ht.needRebuild && Vt.rebuild(), Ht.needNormals
    }

    function Lt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (et && dt.e.ReflectionTextureEnabled) {
        if (!et.isReadyOrNotBlocking()) return !1;
        Vt._needNormals = !0, Vt.REFLECTION = !0, Vt.GAMMAREFLECTION = et.gammaSpace, Vt.RGBDREFLECTION = et.isRGBD, Vt.LODINREFLECTIONALPHA = et.lodLevelInAlpha, Vt.LINEARSPECULARREFLECTION = et.linearSpecularLOD, Vt.USEIRRADIANCEMAP = !1, Vt.LODBASEDMICROSFURACE = tt.Jf().getCaps().textureLOD;
        const mt = tt.Jf();
        switch (Ot && qt > 0 ? (Vt.NUM_SAMPLES = "" + qt, mt._features.needTypeSuffixInShaderConstants && (Vt.NUM_SAMPLES = Vt.NUM_SAMPLES + "u"), Vt.REALTIME_FILTERING = !0, tt.iblCdfGenerator && (Vt.IBL_CDF_FILTERING = !0)) : Vt.REALTIME_FILTERING = !1, Vt.INVERTCUBICMAP = 6 === et.coordinatesMode, Vt.REFLECTIONMAP_3D = et.isCube, Vt.REFLECTIONMAP_OPPOSITEZ = Vt.REFLECTIONMAP_3D && tt.useRightHandedSystem ? !et.invertZ : et.invertZ, Vt.REFLECTIONMAP_CUBIC = !1, Vt.REFLECTIONMAP_EXPLICIT = !1, Vt.REFLECTIONMAP_PLANAR = !1, Vt.REFLECTIONMAP_PROJECTION = !1, Vt.REFLECTIONMAP_SKYBOX = !1, Vt.REFLECTIONMAP_SPHERICAL = !1, Vt.REFLECTIONMAP_EQUIRECTANGULAR = !1, Vt.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Vt.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, et.coordinatesMode) {
          case 0:
            Vt.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Vt.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Vt.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Vt.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Vt.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Vt.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Vt.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Vt.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Vt.REFLECTIONMAP_CUBIC = !0, Vt.USE_LOCAL_REFLECTIONMAP_CUBIC = !!et.boundingBoxSize
        }
        5 !== et.coordinatesMode && (et.irradianceTexture ? (Vt.USEIRRADIANCEMAP = !0, Vt.USESPHERICALFROMREFLECTIONMAP = !1, Vt.USESPHERICALINVERTEX = !1, et.irradianceTexture._dominantDirection ? Vt.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Vt.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : et.isCube && (Vt.USESPHERICALFROMREFLECTIONMAP = !0, Vt.USEIRRADIANCEMAP = !1, Vt.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Vt.USESPHERICALINVERTEX = Dt))
      } else Vt.REFLECTION = !1, Vt.REFLECTIONMAP_3D = !1, Vt.REFLECTIONMAP_SPHERICAL = !1, Vt.REFLECTIONMAP_PLANAR = !1, Vt.REFLECTIONMAP_CUBIC = !1, Vt.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Vt.REFLECTIONMAP_PROJECTION = !1, Vt.REFLECTIONMAP_SKYBOX = !1, Vt.REFLECTIONMAP_EXPLICIT = !1, Vt.REFLECTIONMAP_EQUIRECTANGULAR = !1, Vt.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Vt.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Vt.INVERTCUBICMAP = !1, Vt.USESPHERICALFROMREFLECTIONMAP = !1, Vt.USEIRRADIANCEMAP = !1, Vt.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Vt.USESPHERICALINVERTEX = !1, Vt.REFLECTIONMAP_OPPOSITEZ = !1, Vt.LODINREFLECTIONALPHA = !1, Vt.GAMMAREFLECTION = !1, Vt.RGBDREFLECTION = !1, Vt.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Ft(tt, et, Vt, Ot, qt, mt, dt) {
      switch (dt.needNormals = !0, void 0 === qt["LIGHT" + Ot] && (dt.needRebuild = !0), qt["LIGHT" + Ot] = !0, qt["SPOTLIGHT" + Ot] = !1, qt["HEMILIGHT" + Ot] = !1, qt["POINTLIGHT" + Ot] = !1, qt["DIRLIGHT" + Ot] = !1, qt["AREALIGHT" + Ot] = !1, qt["CLUSTLIGHT" + Ot] = !1, Vt.prepareLightSpecificDefines(qt, Ot), qt["LIGHT_FALLOFF_PHYSICAL" + Ot] = !1, qt["LIGHT_FALLOFF_GLTF" + Ot] = !1, qt["LIGHT_FALLOFF_STANDARD" + Ot] = !1, Vt.falloffType) {
        case Dt.d.FALLOFF_GLTF:
          qt["LIGHT_FALLOFF_GLTF" + Ot] = !0;
          break;
        case Dt.d.FALLOFF_PHYSICAL:
          qt["LIGHT_FALLOFF_PHYSICAL" + Ot] = !0;
          break;
        case Dt.d.FALLOFF_STANDARD:
          qt["LIGHT_FALLOFF_STANDARD" + Ot] = !0
      }
      if (mt && !Vt.specular.equalsFloats(0, 0, 0) && (dt.specularEnabled = !0), qt["SHADOW" + Ot] = !1, qt["SHADOWCSM" + Ot] = !1, qt["SHADOWCSMDEBUG" + Ot] = !1, qt["SHADOWCSMNUM_CASCADES" + Ot] = !1, qt["SHADOWCSMUSESHADOWMAXZ" + Ot] = !1, qt["SHADOWCSMNOBLEND" + Ot] = !1, qt["SHADOWCSM_RIGHTHANDED" + Ot] = !1, qt["SHADOWPCF" + Ot] = !1, qt["SHADOWPCSS" + Ot] = !1, qt["SHADOWPOISSON" + Ot] = !1, qt["SHADOWESM" + Ot] = !1, qt["SHADOWCLOSEESM" + Ot] = !1, qt["SHADOWCUBE" + Ot] = !1, qt["SHADOWLOWQUALITY" + Ot] = !1, qt["SHADOWMEDIUMQUALITY" + Ot] = !1, et && et.receiveShadows && tt.shadowsEnabled && Vt.shadowEnabled) {
        const et = Vt.getShadowGenerator(tt.activeCamera) ?? Vt.getShadowGenerator();
        if (et) {
          const tt = et.getShadowMap();
          tt && tt.renderList && tt.renderList.length > 0 && (dt.shadowEnabled = !0, et.prepareDefines(qt, Ot))
        }
      }
      Vt.lightmapMode != Dt.d.LIGHTMAP_DEFAULT ? (dt.lightmapMode = !0, qt["LIGHTMAPEXCLUDED" + Ot] = !0, qt["LIGHTMAPNOSPECULAR" + Ot] = Vt.lightmapMode == Dt.d.LIGHTMAP_SHADOWSONLY) : (qt["LIGHTMAPEXCLUDED" + Ot] = !1, qt["LIGHTMAPNOSPECULAR" + Ot] = !1)
    }

    function kt(tt, et, Vt, Ot, qt) {
      let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        dt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        jt = function(tt, et) {
          let Vt = !1;
          if (tt.activeCamera) {
            const Ot = et.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              qt = et.CAMERA_PERSPECTIVE ? 1 : 0,
              Dt = 1 === tt.activeCamera.mode ? 1 : 0,
              mt = 0 === tt.activeCamera.mode ? 1 : 0;
            (Ot ^ Dt || qt ^ mt) && (et.CAMERA_ORTHOGRAPHIC = 1 === Dt, et.CAMERA_PERSPECTIVE = 1 === mt, Vt = !0)
          }
          return Vt
        }(tt, Ot);
      !1 !== Dt && (jt = (0, mt.i)(Vt, tt, Ot)), Ot.DEPTHPREPASS !== !et.getColorWrite() && (Ot.DEPTHPREPASS = !Ot.DEPTHPREPASS, jt = !0), Ot.INSTANCES !== qt && (Ot.INSTANCES = qt, jt = !0), Ot.THIN_INSTANCES !== dt && (Ot.THIN_INSTANCES = dt, jt = !0), jt && Ot.markAsUnprocessed()
    }
    const Gt = 40,
      zt = 64,
      ot = new WeakMap,
      rt = new WeakSet;

    function Ut(tt, et, Vt, qt) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        dt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!et._areAttributesDirty && et._needNormals === et._normals && et._needUVs === et._uvs) return !1;
      et._normals = et._needNormals, et._uvs = et._needUVs, et.NORMAL = et._needNormals && tt.isVerticesDataPresent("normal"), et._needNormals && tt.isVerticesDataPresent("tangent") && (et.TANGENT = !0);
      for (let Ot = 1; Ot <= 6; ++Ot) et["UV" + Ot] = !!et._needUVs && tt.isVerticesDataPresent(`uv${1===Ot?"":Ot}`);
      if (Vt) {
        const Vt = tt.useVertexColors && tt.isVerticesDataPresent("color");
        et.VERTEXCOLOR = Vt, et.VERTEXALPHA = tt.hasVertexAlpha && Vt && mt
      }
      return tt.isVerticesDataPresent("instanceColor") && (tt.cqt || tt.hasThinInstances) && (et.INSTANCESCOLOR = !0), qt && function(tt, et) {
        if (tt.useBones && tt.computeBonesUsingShaders && tt.skeleton) {
          et.NUM_BONE_INFLUENCERS = tt.numBoneInfluencers;
          const Vt = void 0 !== et.BONETEXTURE;
          if (tt.skeleton.isUsingTextureForMatrices && Vt) et.BONETEXTURE = !0;
          else {
            et.BonesPerMesh = tt.skeleton.bones.length + 1, et.BONETEXTURE = !Vt && void 0;
            const qt = tt.vI(),
              Dt = qt.prePassRenderer;
            if (Dt && Dt.enabled) {
              const Vt = -1 === Dt.excludedSkinnedMesh.indexOf(tt);
              et.BONES_VELOCITY_ENABLED = Vt
            }
            const mt = !0 === et.MULTIVIEW,
              dt = 2 * et.BonesPerMesh + (mt ? 1 : 0);
            if (ot.get(tt.skeleton) !== dt) {
              ot.set(tt.skeleton, dt);
              const Vt = qt.Jf().getCaps().maxVertexUniformVectors;
              if (Vt && !rt.has(tt.skeleton)) {
                const qt = 4 * et.BonesPerMesh,
                  Dt = mt ? zt : Gt,
                  dt = Math.max(Vt - Dt, 0);
                (qt > dt || mt && 3 * qt > Vt) && (rt.add(tt.skeleton), Ot.d.Warn(`Skeleton "${tt.skeleton.name}": ${tt.skeleton.bones.length} bones stored as vertex uniforms use ${qt} of ~${dt} usable uniform vectors${mt?" (multiview)":""} on a device reporting ${Vt}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else et.NUM_BONE_INFLUENCERS = 0, et.BonesPerMesh = 0, void 0 !== et.BONETEXTURE && (et.BONETEXTURE = !1)
      }(tt, et), Dt && function(tt, et) {
        const Vt = tt.morphTargetManager;
        Vt ? (et.MORPHTARGETS_UV = Vt.supportsUVs && et.UV1, et.MORPHTARGETS_UV2 = Vt.supportsUV2s && et.UV2, et.MORPHTARGETS_TANGENT = Vt.supportsTangents && et.TANGENT, et.MORPHTARGETS_NORMAL = Vt.supportsNormals && et.NORMAL, et.MORPHTARGETS_POSITION = Vt.supportsPositions, et.MORPHTARGETS_COLOR = Vt.supportsColors, et.MORPHTARGETTEXTURE_HASUVS = Vt.hasUVs, et.MORPHTARGETTEXTURE_HASUV2S = Vt.hasUV2s, et.MORPHTARGETTEXTURE_HASTANGENTS = Vt.hasTangents, et.MORPHTARGETTEXTURE_HASNORMALS = Vt.hasNormals, et.MORPHTARGETTEXTURE_HASPOSITIONS = Vt.hasPositions, et.MORPHTARGETTEXTURE_HASCOLORS = Vt.hasColors, et.NUM_MORPH_INFLUENCERS = Vt.numMaxInfluencers || Vt.numInfluencers, et.MORPHTARGETS = et.NUM_MORPH_INFLUENCERS > 0, et.MORPHTARGETS_TEXTURE = Vt.isUsingTextureForTargets) : (et.MORPHTARGETS_UV = !1, et.MORPHTARGETS_UV2 = !1, et.MORPHTARGETS_TANGENT = !1, et.MORPHTARGETS_NORMAL = !1, et.MORPHTARGETS_POSITION = !1, et.MORPHTARGETS_COLOR = !1, et.MORPHTARGETTEXTURE_HASUVS = !1, et.MORPHTARGETTEXTURE_HASUV2S = !1, et.MORPHTARGETTEXTURE_HASTANGENTS = !1, et.MORPHTARGETTEXTURE_HASNORMALS = !1, et.MORPHTARGETTEXTURE_HASPOSITIONS = !1, et.MORPHTARGETTEXTURE_HAS_COLORS = !1, et.MORPHTARGETS = !1, et.NUM_MORPH_INFLUENCERS = 0)
      }(tt, et), dt && function(tt, et) {
        const Vt = tt.bakedVertexAnimationManager;
        et.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Vt || !Vt.isEnabled)
      }(tt, et), !0
    }

    function At(tt, et) {
      if (tt.activeCamera) {
        const Vt = et.MULTIVIEW;
        et.MULTIVIEW = null !== tt.activeCamera.outputRenderTarget && tt.activeCamera.outputRenderTarget.getViewCount() > 1, et.MULTIVIEW != Vt && et.markAsUnprocessed()
      }
    }

    function it(tt, et, Vt) {
      const Ot = et.ORDER_INDEPENDENT_TRANSPARENCY,
        qt = et.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      et.ORDER_INDEPENDENT_TRANSPARENCY = tt.useOrderIndependentTransparency && Vt, et.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !tt.Jf().getCaps().textureFloatLinearFiltering, Ot === et.ORDER_INDEPENDENT_TRANSPARENCY && qt === et.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || et.markAsUnprocessed()
    }

    function Yt(tt, et, Vt) {
      const Ot = et.PREPASS;
      if (!et._arePrePassDirty) return;
      const qt = [{
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
      if (tt.prePassRenderer && tt.prePassRenderer.enabled && Vt) {
        et.PREPASS = !0, et.SCENE_MRT_COUNT = tt.prePassRenderer.mrtCount, et.PREPASS_NORMAL_WORLDSPACE = tt.prePassRenderer.generateNormalsInWorldSpace, et.PREPASS_COLOR = !0, et.PREPASS_COLOR_INDEX = 0;
        for (let Vt = 0; Vt < qt.length; Vt++) {
          const Ot = tt.prePassRenderer.getIndex(qt[Vt].type); - 1 !== Ot ? (et[qt[Vt].define] = !0, et[qt[Vt].index] = Ot) : et[qt[Vt].define] = !1
        }
      } else {
        et.PREPASS = !1;
        for (let tt = 0; tt < qt.length; tt++) et[qt[tt].define] = !1
      }
      et.PREPASS != Ot && (et.markAsUnprocessed(), et.markAsImageProcessingDirty())
    }

    function Bt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ht = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      qt && qt.push("Light" + tt), Dt || (et.push("vLightData" + tt, "vLightDiffuse" + tt, "vLightSpecular" + tt, "vLightDirection" + tt, "vLightWidth" + tt, "vLightHeight" + tt, "vLightFalloff" + tt, "vLightGround" + tt, "vSliceData" + tt, "vSliceRanges" + tt, "lightMatrix" + tt, "shadowsInfo" + tt, "depthValues" + tt), Vt.push("shadowTexture" + tt), Vt.push("depthTexture" + tt), et.push("viewFrustumZ" + tt, "cascadeBlendFactor" + tt, "lightSizeUVCorrection" + tt, "depthCorrection" + tt, "penumbraDarkness" + tt, "frustumLengths" + tt), Ot && (Vt.push("projectionLightTexture" + tt), et.push("textureProjectionMatrix" + tt)), mt && Vt.push("iesLightTexture" + tt), jt && Vt.push("rectAreaLightEmissionTexture" + tt), dt && (Vt.push("lightDataTexture" + tt), Ht || Vt.push("tileMaskTexture" + tt)))
    }

    function pt(tt, et, Vt) {
      const Ot = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Vt && Ot.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), tt.push(...Ot);
      et.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function xt(tt, et, Vt) {
      let Ot, qt, Dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        mt = null;
      if (tt.uniformsNames) {
        const dt = tt;
        Ot = dt.uniformsNames, qt = dt.uniformBuffersNames, et = dt.samplers, Vt = dt.defines, Dt = dt.maxSimultaneousLights || 0, mt = dt.shaderLanguage ?? null
      } else Ot = tt, et || (et = []);
      for (let dt = 0; dt < Dt && Vt["LIGHT" + dt]; dt++) Bt(dt, Ot, et, Vt["PROJECTEDLIGHTTEXTURE" + dt], qt, !1, Vt["IESLIGHTTEXTURE" + dt], Vt["CLUSTLIGHT" + dt], Vt["RECTAREALIGHTEMISSIONTEXTURE" + dt], 1 === mt);
      Vt.NUM_MORPH_INFLUENCERS && (Ot.push("morphTargetInfluences"), Ot.push("morphTargetCount")), Vt.BAKED_VERTEX_ANIMATION_TEXTURE && (Ot.push("bakedVertexAnimationSettings"), Ot.push("bakedVertexAnimationTextureSizeInverted"), Ot.push("bakedVertexAnimationTime"), et.push("bakedVertexAnimationTexture"))
    }

    function Tt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      tt.addUniform("vReflectionInfos", 2), tt.addUniform("reflectionMatrix", 16), et && tt.addUniform("vReflectionMicrosurfaceInfos", 3), Vt && (tt.addUniform("vReflectionPosition", 3), tt.addUniform("vReflectionSize", 3)), Ot && (tt.addUniform("vReflectionFilteringInfo", 2), tt.addUniform("vReflectionDominantDirection", 3)), Dt && tt.addUniform("vReflectionColor", 3), qt && (tt.addUniform("vSphericalL00", 3), tt.addUniform("vSphericalL1_1", 3), tt.addUniform("vSphericalL10", 3), tt.addUniform("vSphericalL11", 3), tt.addUniform("vSphericalL2_2", 3), tt.addUniform("vSphericalL2_1", 3), tt.addUniform("vSphericalL20", 3), tt.addUniform("vSphericalL21", 3), tt.addUniform("vSphericalL22", 3), tt.addUniform("vSphericalX", 3), tt.addUniform("vSphericalY", 3), tt.addUniform("vSphericalZ", 3), tt.addUniform("vSphericalXX_ZZ", 3), tt.addUniform("vSphericalYY_ZZ", 3), tt.addUniform("vSphericalZZ", 3), tt.addUniform("vSphericalXY", 3), tt.addUniform("vSphericalYZ", 3), tt.addUniform("vSphericalZX", 3))
    }
  },
  40531: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(37336),
      qt = Vt(40474);
    class Dt extends qt.c {
      constructor(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(tt, et, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Ot.c, this._storeEffectOnSubMeshes = Vt
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(tt, et) {
        return !!tt && (!this._storeEffectOnSubMeshes || (!tt.vJ || 0 === tt.vJ.length || this.isReadyForSubMesh(tt, tt.vJ[0], et)))
      }
      _isReadyForSubMesh(tt) {
        const et = tt.materialDefines;
        return !(this.checkReadyOnEveryCall || !tt.effect || !et || et._renderId !== this.vI().getRenderId())
      }
      bindOnlyWorldMatrix(tt) {
        this._activeEffect.setMatrix("world", tt)
      }
      bindOnlyNormalMatrix(tt) {
        this._activeEffect.setMatrix("normalMatrix", tt)
      }
      bind(tt, et) {
        et && this.bindForSubMesh(tt, et, et.vJ[0])
      }
      _afterBind(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(tt, et, Vt), this.vI()._cachedEffect = et, Vt ? Vt._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Vt._drawWrapper._forceRebindOnNextCall || tt.isCachedMaterialInvalid(this, et, Ot)
      }
      dispose(tt, et, Vt) {
        this._activeEffect = void 0, super.dispose(tt, et, Vt)
      }
    }
  },
  40558: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      h: () => qt
    });
    const Ot = new WeakMap;

    function qt(tt) {
      const et = tt.getVertexBuffers();
      if (!et) return null;
      let Vt = Ot.get(tt);
      if (Vt) {
        let tt = !1;
        for (const Ot in et)
          if (!Vt.has(Ot)) {
            tt = !0;
            break
          } if (!tt) return Vt
      } else Vt = new Map, Ot.set(tt, Vt);
      for (const Ot in et) {
        const tt = et[Ot];
        if (tt) {
          const et = tt.byteOffset,
            qt = tt.byteStride,
            Dt = tt.type,
            mt = tt.normalized;
          Vt.set(Ot, {
            offset: et,
            stride: qt,
            type: Dt,
            normalized: mt
          })
        }
      }
      return Vt
    }

    function Dt(tt, et) {
      et.forEach(((et, Vt) => {
        const Ot = `vp_${Vt}_info`;
        tt.setFloat4(Ot, et.offset, et.stride, et.type, et.normalized ? 1 : 0)
      }))
    }
  },
  40503: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      f: () => jt
    });
    var Ot = Vt(40211),
      qt = Vt(37336),
      Dt = Vt(40213);
    let mt = (() => {
      var tt;
      let et, Vt, qt = [];
      return tt = class {
        static extractMinAndMaxIndexed(tt, et, Vt, Ot, qt, Dt) {
          for (let mt = Vt; mt < Vt + Ot; mt++) {
            const Vt = 3 * et[mt],
              Ot = tt[Vt],
              dt = tt[Vt + 1],
              jt = tt[Vt + 2];
            qt.minimizeInPlaceFromFloats(Ot, dt, jt), Dt.maximizeInPlaceFromFloats(Ot, dt, jt)
          }
        }
        static extractMinAndMax(tt, et, Vt, Ot, qt, Dt) {
          for (let mt = et, dt = et * Ot; mt < et + Vt; mt++, dt += Ot) {
            const et = tt[dt],
              Vt = tt[dt + 1],
              Ot = tt[dt + 2];
            qt.minimizeInPlaceFromFloats(et, Vt, Ot), Dt.maximizeInPlaceFromFloats(et, Vt, Ot)
          }
        }
      }, (() => {
        const mt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [Dt.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Vt = [Dt.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Ot.l)(tt, null, et, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: tt => "extractMinAndMaxIndexed" in tt,
            get: tt => tt.extractMinAndMaxIndexed
          },
          metadata: mt
        }, null, qt), (0, Ot.l)(tt, null, Vt, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: tt => "extractMinAndMax" in tt,
            get: tt => tt.extractMinAndMax
          },
          metadata: mt
        }, null, qt), mt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mt
        }), (0, Ot.m)(tt, qt)
      })(), tt
    })();

    function dt(tt, et, Vt, Ot) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const dt = new qt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        jt = new qt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return mt.extractMinAndMaxIndexed(tt, et, Vt, Ot, dt, jt), Dt && (dt.x -= dt.x * Dt.x + Dt.y, dt.y -= dt.y * Dt.x + Dt.y, dt.z -= dt.z * Dt.x + Dt.y, jt.x += jt.x * Dt.x + Dt.y, jt.y += jt.y * Dt.x + Dt.y, jt.z += jt.z * Dt.x + Dt.y), {
        minimum: dt,
        maximum: jt
      }
    }

    function jt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Dt = arguments.length > 4 ? arguments[4] : void 0;
      const dt = new qt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        jt = new qt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Dt || (Dt = 3), mt.extractMinAndMax(tt, et, Vt, Dt, dt, jt), Ot && (dt.x -= dt.x * Ot.x + Ot.y, dt.y -= dt.y * Ot.x + Ot.y, dt.z -= dt.z * Ot.x + Ot.y, jt.x += jt.x * Ot.x + Ot.y, jt.y += jt.y * Ot.x + Ot.y, jt.z += jt.z * Ot.x + Ot.y), {
        minimum: dt,
        maximum: jt
      }
    }
  },
  40476: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt
    });
    var Ot, qt = Vt(40343),
      Dt = Vt(40482),
      mt = Vt(40490),
      dt = Vt(40503),
      jt = Vt(40512),
      Ht = Vt(40080);
    class Xt {
      get materialDefines() {
        const tt = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof tt ? null : tt
      }
      set materialDefines(tt) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = tt
      }
      _getDrawWrapper(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        tt = tt ?? this._engine.currentRenderPassId;
        let Vt = this._drawWrappers[tt];
        return !Vt && et && (this._drawWrappers[tt] = Vt = new jt.c(this._mesh.vI().Jf())), Vt
      }
      _removeDrawWrapper(tt) {
        let et = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[tt]?.dispose(et), this._drawWrappers[tt] = void 0
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
      _setMainDrawWrapperOverride(tt) {
        this._mainDrawWrapperOverride = tt
      }
      setEffect(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qt = this._drawWrapper;
        qt.setEffect(tt, et, Ot), void 0 !== Vt && (qt.materialContext = Vt), tt || (qt.defines = null, qt.materialContext = void 0)
      }
      resetDrawCache(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== tt) return void this._removeDrawWrapper(tt, !0, et);
          for (const tt of this._drawWrappers) tt?.dispose(et)
        }
        this._drawWrappers = []
      }
      static AddToMesh(tt, et, Vt, Ot, qt, Dt, mt) {
        return new Xt(tt, et, Vt, Ot, qt, Dt, mt, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(tt, et, Vt, Ot, qt, Dt, mt) {
        let dt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          jt = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = tt, this.verticesStart = et, this.verticesCount = Vt, this.indexStart = Ot, this.indexCount = qt, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Dt, this._renderingMesh = mt || Dt, jt && Dt.vJ.push(this), this._engine = this._mesh.vI().Jf(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Dt.vJ.length - 1, dt && (this.refreshBoundingInfo(), Dt.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      fL() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.fL() : this._boundingInfo
      }
      setBoundingInfo(tt) {
        return this._boundingInfo = tt, this
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
        const tt = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return tt || this._renderingMesh
      }
      vf() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const et = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!et) return tt && this._mesh.vI()._hasDefaultMaterial ? this._mesh.vI().defaultMaterial : null;
        if (this._isMultiMaterial(et)) {
          const tt = et.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== tt && (this._currentMaterial = tt, this.resetDrawCache()), tt
        }
        return et
      }
      _isMultiMaterial(tt) {
        return void 0 !== tt.getSubMaterial
      }
      refreshBoundingInfo() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (tt || (tt = this._renderingMesh.getVerticesData(qt.m.PositionKind)), !tt) return this._boundingInfo = this._mesh.fL(), this;
        const et = this._renderingMesh.zOt();
        let Vt;
        if (0 === this.indexStart && this.indexCount === et.length) {
          const tt = this._renderingMesh.fL();
          Vt = {
            minimum: tt.minimum.clone(),
            maximum: tt.maximum.clone()
          }
        } else Vt = (0, dt.e)(tt, et, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Vt.minimum, Vt.maximum) : this._boundingInfo = new mt.c(Vt.minimum, Vt.maximum), this
      }
      _checkCollision(tt) {
        return this.fL()._checkCollision(tt)
      }
      updateBoundingInfo(tt) {
        let et = this.fL();
        return et || (this.refreshBoundingInfo(), et = this.fL()), et && et.update(tt), this
      }
      isInFrustum(tt) {
        const et = this.fL();
        return !!et && et.isInFrustum(tt, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(tt) {
        const et = this.fL();
        return !!et && et.isCompletelyInFrustum(tt)
      }
      render(tt) {
        return this._renderingMesh.render(this, tt, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(tt, et) {
        if (!this._linesIndexBuffer) {
          const Vt = 6 * Math.floor(this.indexCount / 3),
            Ot = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Vt) : new Uint16Array(Vt);
          let qt = 0;
          if (0 === tt.length)
            for (let tt = this.indexStart; tt < this.indexStart + this.indexCount; tt += 3) Ot[qt++] = tt, Ot[qt++] = tt + 1, Ot[qt++] = tt + 1, Ot[qt++] = tt + 2, Ot[qt++] = tt + 2, Ot[qt++] = tt;
          else
            for (let et = this.indexStart; et < this.indexStart + this.indexCount; et += 3) Ot[qt++] = tt[et], Ot[qt++] = tt[et + 1], Ot[qt++] = tt[et + 1], Ot[qt++] = tt[et + 2], Ot[qt++] = tt[et + 2], Ot[qt++] = tt[et];
          this._linesIndexBuffer = et.createIndexBuffer(Ot), this._linesIndexCount = Ot.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(tt) {
        const et = this.fL();
        return !!et && tt.intersectsBox(et.boundingBox)
      }
      intersects(tt, et, Vt, Ot, qt) {
        const Dt = this.vf();
        if (!Dt) return null;
        let mt = 3,
          dt = !1;
        switch (Dt.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            mt = 1, dt = !0
        }
        return 4 === Dt.fillMode ? Vt.length ? this._intersectLines(tt, et, Vt, this._mesh.intersectionThreshold, Ot) : this._intersectUnIndexedLines(tt, et, Vt, this._mesh.intersectionThreshold, Ot) : !Vt.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(tt, et, Vt, Ot, qt) : this._intersectTriangles(tt, et, Vt, mt, dt, Ot, qt)
      }
      _intersectLines(tt, et, Vt, Ot, qt) {
        let mt = null;
        for (let dt = this.indexStart; dt < this.indexStart + this.indexCount; dt += 2) {
          const jt = et[Vt[dt]],
            Ht = et[Vt[dt + 1]],
            Xt = tt.intersectionSegment(jt, Ht, Ot);
          if (!(Xt < 0) && ((qt || !mt || Xt < mt.distance) && (mt = new Dt.d(null, null, Xt), mt.faceId = dt / 2, qt))) break
        }
        return mt
      }
      _intersectUnIndexedLines(tt, et, Vt, Ot, qt) {
        let mt = null;
        for (let dt = this.verticesStart; dt < this.verticesStart + this.verticesCount; dt += 2) {
          const Vt = et[dt],
            jt = et[dt + 1],
            Ht = tt.intersectionSegment(Vt, jt, Ot);
          if (!(Ht < 0) && ((qt || !mt || Ht < mt.distance) && (mt = new Dt.d(null, null, Ht), mt.faceId = dt / 2, qt))) break
        }
        return mt
      }
      _intersectTriangles(tt, et, Vt, Ot, qt, Dt, mt) {
        let dt = null,
          jt = -1;
        for (let Ht = this.indexStart; Ht < this.indexStart + this.indexCount - (3 - Ot); Ht += Ot) {
          jt++;
          const Ot = Vt[Ht],
            Xt = Vt[Ht + 1],
            Qt = Vt[Ht + 2];
          if (qt && 4294967295 === Qt) {
            Ht += 2;
            continue
          }
          const lt = et[Ot],
            Et = et[Xt],
            ft = et[Qt];
          if (!lt || !Et || !ft) continue;
          if (mt && !mt(lt, Et, ft, tt, Ot, Xt, Qt)) continue;
          const wt = tt.intersectsTriangle(lt, Et, ft);
          if (wt) {
            if (wt.distance < 0) continue;
            if ((Dt || !dt || wt.distance < dt.distance) && (dt = wt, dt.faceId = jt, Dt)) break
          }
        }
        return dt
      }
      _intersectUnIndexedTriangles(tt, et, Vt, Ot, qt) {
        let Dt = null;
        for (let mt = this.verticesStart; mt < this.verticesStart + this.verticesCount; mt += 3) {
          const Vt = et[mt],
            dt = et[mt + 1],
            jt = et[mt + 2];
          if (qt && !qt(Vt, dt, jt, tt, -1, -1, -1)) continue;
          const Ht = tt.intersectsTriangle(Vt, dt, jt);
          if (Ht) {
            if (Ht.distance < 0) continue;
            if ((Ot || !Dt || Ht.distance < Dt.distance) && (Dt = Ht, Dt.faceId = mt / 3, Ot)) break
          }
        }
        return Dt
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(tt, et) {
        const Vt = new Xt(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, tt, et, !1);
        if (!this.IsGlobal) {
          const tt = this.fL();
          if (!tt) return Vt;
          Vt._boundingInfo = new mt.c(tt.minimum, tt.maximum)
        }
        return Vt
      }
      dispose() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.vI().Jf()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const et = this._mesh.vJ.indexOf(this);
        this._mesh.vJ.splice(et, 1), this.resetDrawCache(void 0, tt)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(tt, et, Vt, Ot, qt) {
        let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = Number.MAX_VALUE,
          dt = -Number.MAX_VALUE;
        const jt = (qt || Ot).zOt();
        for (let Ht = et; Ht < et + Vt; Ht++) {
          const tt = jt[Ht];
          tt < mt && (mt = tt), tt > dt && (dt = tt)
        }
        return new Xt(tt, mt, dt - mt + 1, et, Vt, Ot, qt, Dt)
      }
    }(Ot = Xt.prototype).projectToRef ?? (Ot.projectToRef = (0, Ht.d)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);