export const id = 298;
export const ids = [298];
export const modules = {
  42221: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor(dd, Od, md) {
        this.bu = dd, this.bv = Od, this.distance = md, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  42228: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd
    });
    var Wd = md(38647),
      Fd = md(38636),
      Rd = md(38644);
    class Xd {
      constructor(dd, Od, md) {
        this.vectors = (0, Wd.e)(8, Fd.j.Zero), this.center = Fd.j.Zero(), this.centerWorld = Fd.j.Zero(), this.extendSize = Fd.j.Zero(), this.extendSizeWorld = Fd.j.Zero(), this.directions = (0, Wd.e)(3, Fd.j.Zero), this.vectorsWorld = (0, Wd.e)(8, Fd.j.Zero), this.minimumWorld = Fd.j.Zero(), this.maximumWorld = Fd.j.Zero(), this.minimum = Fd.j.Zero(), this.maximum = Fd.j.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(dd, Od, md)
      }
      reConstruct(dd, Od, md) {
        const Wd = dd.x,
          Rd = dd.y,
          Xd = dd.z,
          Kd = Od.x,
          hd = Od.y,
          vd = Od.z,
          Qd = this.vectors;
        this.minimum.KOd(Wd, Rd, Xd), this.maximum.KOd(Kd, hd, vd), Qd[0].KOd(Wd, Rd, Xd), Qd[1].KOd(Kd, hd, vd), Qd[2].KOd(Kd, Rd, Xd), Qd[3].KOd(Wd, hd, Xd), Qd[4].KOd(Wd, Rd, vd), Qd[5].KOd(Kd, hd, Xd), Qd[6].KOd(Wd, hd, vd), Qd[7].KOd(Kd, Rd, vd), Od.addToRef(dd, this.center).scaleInPlace(.5), Od.subtractToRef(dd, this.extendSize).scaleInPlace(.5), this._worldMatrix = md || Fd.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(dd) {
        const Od = Xd._TmpVector3,
          md = this.maximum.subtractToRef(this.minimum, Od[0]),
          Wd = md.length();
        md.normalizeFromLength(Wd);
        const Fd = Wd * dd,
          Rd = md.scaleInPlace(.5 * Fd),
          Kd = this.center.subtractToRef(Rd, Od[1]),
          hd = this.center.addToRef(Rd, Od[2]);
        return this.reConstruct(Kd, hd, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(dd) {
        const Od = this.minimumWorld,
          md = this.maximumWorld,
          Wd = this.directions,
          Rd = this.vectorsWorld,
          Xd = this.vectors;
        if (dd.isIdentity()) {
          Od.Bx(this.minimum), md.Bx(this.maximum);
          for (let dd = 0; dd < 8; ++dd) Rd[dd].Bx(Xd[dd]);
          this.extendSizeWorld.Bx(this.extendSize), this.centerWorld.Bx(this.center)
        } else {
          Od.Bdd(Number.MAX_VALUE), md.Bdd(-Number.MAX_VALUE);
          for (let Wd = 0; Wd < 8; ++Wd) {
            const Kd = Rd[Wd];
            Fd.j.TransformCoordinatesToRef(Xd[Wd], dd, Kd), Od.minimizeInPlace(Kd), md.maximizeInPlace(Kd)
          }
          md.subtractToRef(Od, this.extendSizeWorld).scaleInPlace(.5), md.addToRef(Od, this.centerWorld).scaleInPlace(.5)
        }
        Fd.j.FromArrayToRef(dd.m, 0, Wd[0]), Fd.j.FromArrayToRef(dd.m, 4, Wd[1]), Fd.j.FromArrayToRef(dd.m, 8, Wd[2]), this._worldMatrix = dd
      }
      isInFrustum(dd) {
        return Xd.IsInFrustum(this.vectorsWorld, dd)
      }
      isCompletelyInFrustum(dd) {
        return Xd.IsCompletelyInFrustum(this.vectorsWorld, dd)
      }
      intersectsPoint(dd) {
        const Od = this.minimumWorld,
          md = this.maximumWorld,
          Wd = Od.x,
          Fd = Od.y,
          Xd = Od.z,
          Kd = md.x,
          hd = md.y,
          vd = md.z,
          Qd = dd.x,
          td = dd.y,
          od = dd.z,
          Nd = -Rd.b;
        return !(Kd - Qd < Nd || Nd > Qd - Wd) && (!(hd - td < Nd || Nd > td - Fd) && !(vd - od < Nd || Nd > od - Xd))
      }
      intersectsSphere(dd) {
        return Xd.IntersectsSphere(this.minimumWorld, this.maximumWorld, dd.centerWorld, dd.radiusWorld)
      }
      intersectsMinMax(dd, Od) {
        const md = this.minimumWorld,
          Wd = this.maximumWorld,
          Fd = md.x,
          Rd = md.y,
          Xd = md.z,
          Kd = Wd.x,
          hd = Wd.y,
          vd = Wd.z,
          Qd = dd.x,
          td = dd.y,
          od = dd.z,
          Nd = Od.x,
          qd = Od.y,
          Hd = Od.z;
        return !(Kd < Qd || Fd > Nd) && (!(hd < td || Rd > qd) && !(vd < od || Xd > Hd))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(dd, Od) {
        return dd.intersectsMinMax(Od.minimumWorld, Od.maximumWorld)
      }
      static IntersectsSphere(dd, Od, md, Wd) {
        const Rd = Xd._TmpVector3[0];
        Fd.j.ClampToRef(md, dd, Od, Rd);
        return Fd.j.DistanceSquared(md, Rd) <= Wd * Wd
      }
      static IsCompletelyInFrustum(dd, Od) {
        for (let md = 0; md < 6; ++md) {
          const Wd = Od[md];
          for (let Od = 0; Od < 8; ++Od)
            if (Wd.dotCoordinate(dd[Od]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(dd, Od) {
        for (let md = 0; md < 6; ++md) {
          let Wd = !0;
          const Fd = Od[md];
          for (let Od = 0; Od < 8; ++Od)
            if (Fd.dotCoordinate(dd[Od]) >= 0) {
              Wd = !1;
              break
            } if (Wd) return !1
        }
        return !0
      }
    }
    Xd._TmpVector3 = (0, Wd.e)(3, Fd.j.Zero)
  },
  42225: (dd, Od, md) => {
    md.d(Od, {
      c: () => td
    });
    var Wd = md(38647),
      Fd = md(38636),
      Rd = md(42228);
    class Xd {
      constructor(dd, Od, md) {
        this.center = Fd.j.Zero(), this.centerWorld = Fd.j.Zero(), this.minimum = Fd.j.Zero(), this.maximum = Fd.j.Zero(), this.reConstruct(dd, Od, md)
      }
      reConstruct(dd, Od, md) {
        this.minimum.Bx(dd), this.maximum.Bx(Od);
        const Wd = Fd.j.Distance(dd, Od);
        Od.addToRef(dd, this.center).scaleInPlace(.5), this.radius = .5 * Wd, this._update(md || Fd.d.IdentityReadOnly)
      }
      scale(dd) {
        const Od = Xd._TmpVector3,
          md = this.maximum.subtractToRef(this.minimum, Od[0]),
          Wd = md.length();
        md.normalizeFromLength(Wd);
        const Fd = Wd * dd,
          Rd = md.scaleInPlace(.5 * Fd),
          Kd = this.center.subtractToRef(Rd, Od[1]),
          hd = this.center.addToRef(Rd, Od[2]);
        return this.reConstruct(Kd, hd, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(dd) {
        if (dd.isIdentity()) this.centerWorld.Bx(this.center), this.radiusWorld = this.radius;
        else {
          Fd.j.TransformCoordinatesToRef(this.center, dd, this.centerWorld);
          const Od = Xd._TmpVector3[0];
          Fd.j.TransformNormalFromFloatsToRef(1, 1, 1, dd, Od), this.radiusWorld = Math.max(Math.abs(Od.x), Math.abs(Od.y), Math.abs(Od.z)) * this.radius
        }
      }
      isInFrustum(dd) {
        const Od = this.centerWorld,
          md = this.radiusWorld;
        for (let Wd = 0; Wd < 6; Wd++)
          if (dd[Wd].dotCoordinate(Od) <= -md) return !1;
        return !0
      }
      isCenterInFrustum(dd) {
        const Od = this.centerWorld;
        for (let md = 0; md < 6; md++)
          if (dd[md].dotCoordinate(Od) < 0) return !1;
        return !0
      }
      intersectsPoint(dd) {
        const Od = Fd.j.DistanceSquared(this.centerWorld, dd);
        return !(this.radiusWorld * this.radiusWorld < Od)
      }
      static Intersects(dd, Od) {
        const md = Fd.j.DistanceSquared(dd.centerWorld, Od.centerWorld),
          Wd = dd.radiusWorld + Od.radiusWorld;
        return !(Wd * Wd < md)
      }
      static CreateFromCenterAndRadius(dd, Od, md) {
        this._TmpVector3[0].Bx(dd), this._TmpVector3[1].KOd(0, 0, Od), this._TmpVector3[2].Bx(dd), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].YRd(this._TmpVector3[1]);
        const Wd = new Xd(this._TmpVector3[0], this._TmpVector3[2]);
        return Wd._worldMatrix = md || Fd.d.Identity(), Wd
      }
    }
    Xd._TmpVector3 = (0, Wd.e)(3, Fd.j.Zero);
    const Kd = {
        min: 0,
        max: 0
      },
      hd = {
        min: 0,
        max: 0
      },
      vd = (dd, Od, md) => {
        const Wd = Fd.j.Dot(Od.centerWorld, dd),
          Rd = Math.abs(Fd.j.Dot(Od.directions[0], dd)) * Od.extendSize.x + Math.abs(Fd.j.Dot(Od.directions[1], dd)) * Od.extendSize.y + Math.abs(Fd.j.Dot(Od.directions[2], dd)) * Od.extendSize.z;
        md.min = Wd - Rd, md.max = Wd + Rd
      },
      Qd = (dd, Od, md) => (vd(dd, Od, Kd), vd(dd, md, hd), !(Kd.min > hd.max || hd.min > Kd.max));
    class td {
      constructor(dd, Od, md) {
        this._isLocked = !1, this.boundingBox = new Rd.d(dd, Od, md), this.ERd = new Xd(dd, Od, md)
      }
      reConstruct(dd, Od, md) {
        this.boundingBox.reConstruct(dd, Od, md), this.ERd.reConstruct(dd, Od, md)
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
        this._isLocked || (this.boundingBox._update(dd), this.ERd._update(dd))
      }
      centerOn(dd, Od) {
        const md = td._TmpVector3[0].Bx(dd).YRd(Od),
          Wd = td._TmpVector3[1].Bx(dd).addInPlace(Od);
        return this.boundingBox.reConstruct(md, Wd, this.boundingBox.getWorldMatrix()), this.ERd.reConstruct(md, Wd, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(dd) {
        const Od = Fd.j.Minimize(this.minimum, dd),
          md = Fd.j.Maximize(this.maximum, dd);
        return this.reConstruct(Od, md, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(dd) {
        const Od = Fd.h.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Od);
        const md = Fd.h.Cq[0];
        return Fd.j.TransformCoordinatesToRef(dd.boundingBox.minimumWorld, Od, md), this.encapsulate(md), Fd.j.TransformCoordinatesToRef(dd.boundingBox.maximumWorld, Od, md), this.encapsulate(md), this
      }
      scale(dd) {
        return this.boundingBox.scale(dd), this.ERd.scale(dd), this
      }
      isInFrustum(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Od || 3 === Od) && this.ERd.isCenterInFrustum(dd)) return !0;
        if (!this.ERd.isInFrustum(dd)) return !1;
        return !(1 !== Od && 3 !== Od) || this.boundingBox.isInFrustum(dd)
      }
      get diagonalLength() {
        const dd = this.boundingBox;
        return dd.maximumWorld.subtractToRef(dd.minimumWorld, td._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(dd) {
        return this.boundingBox.isCompletelyInFrustum(dd)
      }
      _checkCollision(dd) {
        return dd._canDoCollision(this.ERd.centerWorld, this.ERd.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(dd) {
        return !!this.ERd.centerWorld && (!!this.ERd.intersectsPoint(dd) && !!this.boundingBox.intersectsPoint(dd))
      }
      intersects(dd, Od) {
        if (!Xd.Intersects(this.ERd, dd.ERd)) return !1;
        if (!Rd.d.Intersects(this.boundingBox, dd.boundingBox)) return !1;
        if (!Od) return !0;
        const md = this.boundingBox,
          Wd = dd.boundingBox;
        return !!Qd(md.directions[0], md, Wd) && (!!Qd(md.directions[1], md, Wd) && (!!Qd(md.directions[2], md, Wd) && (!!Qd(Wd.directions[0], md, Wd) && (!!Qd(Wd.directions[1], md, Wd) && (!!Qd(Wd.directions[2], md, Wd) && (!!Qd(Fd.j.Cross(md.directions[0], Wd.directions[0]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[0], Wd.directions[1]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[0], Wd.directions[2]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[1], Wd.directions[0]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[1], Wd.directions[1]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[1], Wd.directions[2]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[2], Wd.directions[0]), md, Wd) && (!!Qd(Fd.j.Cross(md.directions[2], Wd.directions[1]), md, Wd) && !!Qd(Fd.j.Cross(md.directions[2], Wd.directions[2]), md, Wd))))))))))))))
      }
    }
    td._TmpVector3 = (0, Wd.e)(2, Fd.j.Zero)
  },
  42248: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      e: () => hd,
      g: () => Kd,
      k: () => Xd
    });
    var Wd = md(42086),
      Fd = md(38636);

    function Rd(dd) {
      -1 === dd.indexOf("vClipPlane") && dd.push("vClipPlane"), -1 === dd.indexOf("vClipPlane2") && dd.push("vClipPlane2"), -1 === dd.indexOf("vClipPlane3") && dd.push("vClipPlane3"), -1 === dd.indexOf("vClipPlane4") && dd.push("vClipPlane4"), -1 === dd.indexOf("vClipPlane5") && dd.push("vClipPlane5"), -1 === dd.indexOf("vClipPlane6") && dd.push("vClipPlane6")
    }

    function Xd(dd, Od, md) {
      const Wd = !!(dd.clipPlane ?? Od.clipPlane),
        Fd = !!(dd.clipPlane2 ?? Od.clipPlane2),
        Rd = !!(dd.clipPlane3 ?? Od.clipPlane3),
        Xd = !!(dd.clipPlane4 ?? Od.clipPlane4),
        Kd = !!(dd.clipPlane5 ?? Od.clipPlane5),
        hd = !!(dd.clipPlane6 ?? Od.clipPlane6);
      Wd && md.push("#define CLIPPLANE"), Fd && md.push("#define CLIPPLANE2"), Rd && md.push("#define CLIPPLANE3"), Xd && md.push("#define CLIPPLANE4"), Kd && md.push("#define CLIPPLANE5"), hd && md.push("#define CLIPPLANE6")
    }

    function Kd(dd, Od, md) {
      let Wd = !1;
      const Fd = !!(dd.clipPlane ?? Od.clipPlane),
        Rd = !!(dd.clipPlane2 ?? Od.clipPlane2),
        Xd = !!(dd.clipPlane3 ?? Od.clipPlane3),
        Kd = !!(dd.clipPlane4 ?? Od.clipPlane4),
        hd = !!(dd.clipPlane5 ?? Od.clipPlane5),
        vd = !!(dd.clipPlane6 ?? Od.clipPlane6);
      return md.CLIPPLANE !== Fd && (md.CLIPPLANE = Fd, Wd = !0), md.CLIPPLANE2 !== Rd && (md.CLIPPLANE2 = Rd, Wd = !0), md.CLIPPLANE3 !== Xd && (md.CLIPPLANE3 = Xd, Wd = !0), md.CLIPPLANE4 !== Kd && (md.CLIPPLANE4 = Kd, Wd = !0), md.CLIPPLANE5 !== hd && (md.CLIPPLANE5 = hd, Wd = !0), md.CLIPPLANE6 !== vd && (md.CLIPPLANE6 = vd, Wd = !0), Wd
    }

    function hd(dd, Od, md) {
      let Wd = Od.clipPlane ?? md.clipPlane;
      vd(dd, "vClipPlane", Wd), Wd = Od.clipPlane2 ?? md.clipPlane2, vd(dd, "vClipPlane2", Wd), Wd = Od.clipPlane3 ?? md.clipPlane3, vd(dd, "vClipPlane3", Wd), Wd = Od.clipPlane4 ?? md.clipPlane4, vd(dd, "vClipPlane4", Wd), Wd = Od.clipPlane5 ?? md.clipPlane5, vd(dd, "vClipPlane5", Wd), Wd = Od.clipPlane6 ?? md.clipPlane6, vd(dd, "vClipPlane6", Wd)
    }

    function vd(dd, Od, md) {
      if (md) {
        const Rd = Wd.d.zV()?.floatingOriginOffset || Fd.j.ZeroReadOnly;
        dd.setFloat4(Od, md.normal.x, md.normal.y, md.normal.z, md.d + Fd.j.Dot(md.normal, Rd))
      }
    }
  },
  42271: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(dd, Od) {
        this._defines[dd] || (dd < this._currentRank && (this._currentRank = dd), dd > this._maxRank && (this._maxRank = dd), this._defines[dd] = new Array), this._defines[dd].push(Od)
      }
      addCPUSkinningFallback(dd, Od) {
        this._mesh = Od, dd < this._currentRank && (this._currentRank = dd), dd > this._maxRank && (this._maxRank = dd)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(dd, Od) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, dd = dd.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Od._bonesComputationForcedToCPU = !0;
          const md = this._mesh.zV();
          for (let dd = 0; dd < md.meshes.length; dd++) {
            const Wd = md.meshes[dd];
            if (Wd.material) {
              if (Wd.computeBonesUsingShaders && 0 !== Wd.numBoneInfluencers)
                if (Wd.material.getEffect() === Od) Wd.computeBonesUsingShaders = !1;
                else if (Wd.ZE)
                for (const dd of Wd.ZE) {
                  if (dd.effect === Od) {
                    Wd.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Wd.computeBonesUsingShaders && Wd.numBoneInfluencers > 0 && (Wd.computeBonesUsingShaders = !1)
          }
        } else {
          const Od = this._defines[this._currentRank];
          if (Od)
            for (let md = 0; md < Od.length; md++) dd = dd.replace("#define " + Od[md], "");
          this._currentRank++
        }
        return dd
      }
    }
  },
  42208: (dd, Od, md) => {
    md.d(Od, {
      b: () => Td
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(42029),
      Xd = md(38660),
      Kd = md(38651),
      hd = md(42217),
      vd = md(42065),
      Qd = md(40262),
      td = md(39306),
      od = md(42240),
      Nd = md(41948);
    let qd = (() => {
      var dd;
      let Od, md, Rd, Xd, Kd, hd, vd, Qd, td, od, qd, Hd, yd = [];
      return dd = class {
        constructor() {
          this._func = (0, Wd.k)(this, yd), this.reset()
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
          Nd.b.Clone((() => dd), this)
        }
        serialize() {
          return Nd.b.Serialize(this)
        }
        parse(dd, Od, md) {
          Nd.b.Parse((() => this), dd, Od, md)
        }
      }, (() => {
        const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], Xd = [(0, Fd.E)()], Kd = [(0, Fd.E)()], hd = [(0, Fd.E)()], vd = [(0, Fd.E)()], Qd = [(0, Fd.E)()], td = [(0, Fd.E)()], od = [(0, Fd.E)()], qd = [(0, Fd.E)()], Hd = [(0, Fd.E)()], (0, Wd.h)(dd, null, Od, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: dd => "func" in dd,
            get: dd => dd.func
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, md, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: dd => "backFunc" in dd,
            get: dd => dd.backFunc
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, Rd, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: dd => "funcRef" in dd,
            get: dd => dd.funcRef
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, Xd, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "funcMask" in dd,
            get: dd => dd.funcMask
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, Kd, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "opStencilFail" in dd,
            get: dd => dd.opStencilFail
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, hd, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "opDepthFail" in dd,
            get: dd => dd.opDepthFail
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, vd, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: dd => "opStencilDepthPass" in dd,
            get: dd => dd.opStencilDepthPass
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, Qd, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "backOpStencilFail" in dd,
            get: dd => dd.backOpStencilFail
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, td, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: dd => "backOpDepthFail" in dd,
            get: dd => dd.backOpDepthFail
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, od, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: dd => "backOpStencilDepthPass" in dd,
            get: dd => dd.backOpStencilDepthPass
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, qd, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: dd => "mask" in dd,
            get: dd => dd.mask
          },
          metadata: Nd
        }, null, yd), (0, Wd.h)(dd, null, Hd, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "enabled" in dd,
            get: dd => dd.enabled
          },
          metadata: Nd
        }, null, yd), Nd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nd
        })
      })(), dd
    })();
    var Hd = md(42242),
      yd = md(41852),
      bd = md(41817);
    let Td = (() => {
      var dd;
      let Od, md, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd, nd, Ld, Pd, zd, cd, jd, Dd, ed, Id, ld = [],
        Cd = [],
        Zd = [],
        kd = [],
        fd = [],
        Md = [],
        dO = [],
        OO = [],
        mO = [],
        WO = [],
        FO = [],
        RO = [],
        XO = [],
        KO = [],
        hO = [],
        vO = [],
        QO = [],
        tO = [],
        oO = [],
        NO = [],
        qO = [],
        HO = [],
        yO = [],
        bO = [],
        TO = [],
        pO = [],
        YO = [],
        gO = [],
        wO = [],
        aO = [],
        EO = [],
        JO = [],
        UO = [],
        xO = [],
        BO = [],
        SO = [],
        sO = [],
        uO = [],
        VO = [],
        iO = [],
        AO = [],
        rO = [],
        GO = [],
        nO = [],
        LO = [],
        PO = [],
        zO = [],
        cO = [],
        jO = [],
        DO = [],
        eO = [];
      return dd = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Od) {
          this._useVertexPulling !== Od && (this._useVertexPulling = Od, this.KWd(dd.MiscDirtyFlag))
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
        set alpha(Od) {
          if (this._alpha === Od) return;
          const md = this._alpha;
          this._alpha = Od, 1 !== md && 1 !== Od || this.KWd(dd.MiscDirtyFlag + dd.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Od) {
          this._backFaceCulling !== Od && (this._backFaceCulling = Od, this.KWd(dd.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Od) {
          const md = Math.max(0, Math.min(0 | Od, 4));
          this._textureRepetitionMode !== md && (this._textureRepetitionMode = md, this.KWd(dd.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Od) {
          this._cullBackFaces !== Od && (this._cullBackFaces = Od, this.KWd(dd.TextureDirtyFlag))
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
          this._onDisposeObserver && this.cV.remove(this._onDisposeObserver), this._onDisposeObserver = this.cV.add(dd)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Xd.c), this._onBindObservable
        }
        set onBind(dd) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(dd)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Xd.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Xd.c), this._onEffectCreatedObservable
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
        setAlphaMode(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[md] !== Od && (this._alphaMode[md] = Od, this.KWd(dd.TextureDirtyFlag))
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
        set fogEnabled(Od) {
          this._fogEnabled !== Od && (this._fogEnabled = Od, this.KWd(dd.MiscDirtyFlag))
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
        set wireframe(Od) {
          this.fillMode = Od ? dd.WireFrameFillMode : dd.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case dd.PointFillMode:
            case dd.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Od) {
          this.fillMode = Od ? dd.PointFillMode : dd.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Od) {
          this._fillMode !== Od && (this._fillMode = Od, this.KWd(dd.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(dd) {
          const Od = this.zV().Iq().getCaps().fragmentDepthSupported;
          dd && !Od && Qd.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = dd && Od, this._markAllSubMeshesAsMiscDirty()
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
        constructor(Od, md, Fd) {
          let hd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Wd.k)(this, ld), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Wd.k)(this, Cd, void 0), this.uniqueId = ((0, Wd.k)(this, Zd), (0, Wd.k)(this, kd, void 0)), this._loadedUniqueId = (0, Wd.k)(this, fd), this.name = (0, Wd.k)(this, Md, void 0), this.metadata = ((0, Wd.k)(this, dO), (0, Wd.k)(this, OO, null)), this._internalMetadata = (0, Wd.k)(this, mO), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Wd.k)(this, WO, !1), this.checkReadyOnlyOnce = ((0, Wd.k)(this, FO), (0, Wd.k)(this, RO, !1)), this.state = ((0, Wd.k)(this, XO), (0, Wd.k)(this, KO, "")), this._alpha = ((0, Wd.k)(this, hO), (0, Wd.k)(this, vO, 1)), this.inspectableCustomProperties = (0, Wd.k)(this, QO), this._backFaceCulling = (0, Wd.k)(this, tO, !0), this._textureRepetitionMode = ((0, Wd.k)(this, oO), (0, Wd.k)(this, NO, 0)), this.textureRepetitionHexTilingParams = ((0, Wd.k)(this, qO), (0, Wd.k)(this, HO, [1, .6, 7, .5])), this._cullBackFaces = ((0, Wd.k)(this, yO), (0, Wd.k)(this, bO, !0)), this._blockDirtyMechanism = ((0, Wd.k)(this, TO), !1), this.sideOrientation = (0, Wd.k)(this, pO, null), this.onCompiled = ((0, Wd.k)(this, YO), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.cV = new Xd.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Wd.k)(this, gO, [2]), this._needDepthPrePass = ((0, Wd.k)(this, wO), (0, Wd.k)(this, aO, !1)), this.disableDepthWrite = ((0, Wd.k)(this, EO), (0, Wd.k)(this, JO, !1)), this.disableColorWrite = ((0, Wd.k)(this, UO), (0, Wd.k)(this, xO, !1)), this.forceDepthWrite = ((0, Wd.k)(this, BO), (0, Wd.k)(this, SO, !1)), this.depthFunction = ((0, Wd.k)(this, sO), (0, Wd.k)(this, uO, 0)), this.separateCullingPass = ((0, Wd.k)(this, VO), (0, Wd.k)(this, iO, !1)), this._fogEnabled = ((0, Wd.k)(this, AO), (0, Wd.k)(this, rO, !0)), this.pointSize = ((0, Wd.k)(this, GO), (0, Wd.k)(this, nO, 1)), this.zOffset = ((0, Wd.k)(this, LO), (0, Wd.k)(this, PO, 0)), this.zOffsetUnits = ((0, Wd.k)(this, zO), (0, Wd.k)(this, cO, 0)), this.clipPlane = (0, Wd.k)(this, jO), this.stencil = new qd, this._isVertexOutputInvariant = (0, Wd.k)(this, DO, dd.ForceVertexOutputInvariant), this._materialContext = (0, Wd.k)(this, eO), this._useUBO = !1, this._fillMode = dd.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Od;
          const Qd = md || Kd.e.LastCreatedScene;
          Qd && (this._scene = Qd, this._dirtyCallbacks = {}, this._forceGLSL = hd, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Od || Rd.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Iq().createMaterialContext(), this._drawWrapper = new od.b(this._scene.Iq(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new vd.c(this._scene.Iq(), void 0, void 0, Od), this._useUBO = this.zV().Iq().supportsUniformBuffers, this._createUniformBuffer(), Fd || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), dd.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const dd = this.zV().Iq();
          this._uniformBuffer?.dispose(), dd.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new vd.c(dd, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new vd.c(this._scene.Iq(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(dd, Od) {
          return !0
        }
        isReadyForSubMesh(dd, Od, md) {
          const Wd = Od.materialDefines;
          return !!Wd && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Wd, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        zV() {
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
          let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const md = this.zV().meshes;
          for (const dd of md)
            if (dd.ZE)
              for (const md of dd.ZE)
                if (md.fq() === this)
                  for (const dd of md._drawWrappers) dd && this._materialContext === dd.materialContext && (dd._wasPreviouslyReady = !1, dd._wasPreviouslyUsingInstances = null, dd._forceRebindOnNextCall = Od);
          Od && this.KWd(dd.AllDirtyFlag)
        }
        _preBind(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Wd = this._scene.Iq(),
            Fd = (null == md ? this.sideOrientation : md) === dd.ClockWiseSideOrientation,
            Rd = Od || this._getDrawWrapper();
          return (0, yd.c)(Rd) && Rd.materialContext && (Rd.materialContext.useVertexPulling = this.useVertexPulling), Wd.enableEffect(Rd), Wd.setState(this.backFaceCulling, this.zOffset, !1, Fd, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Fd
        }
        bind(dd, Od) {}
        buildUniformLayout() {
          const dd = this._uniformBuffer;
          this._eventInfo.ubo = dd, this._callbackPluginEventGeneric(8, this._eventInfo), dd.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(dd, Od, md) {
          const Wd = md._drawWrapper;
          this._eventInfo.subMesh = md, this._callbackPluginEventBindForSubMesh(this._eventInfo), Wd._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(dd) {}
        bindView(dd) {
          this._useUBO ? this._needToBindSceneUbo = !0 : dd.setMatrix("view", this.zV().getViewMatrix())
        }
        bindViewProjection(dd) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (dd.setMatrix("viewProjection", this.zV().getTransformMatrix()), dd.setMatrix("projection", this.zV().getProjectionMatrix()), dd.setMatrix("inverseProjection", this.zV().getInverseProjectionMatrix()))
        }
        bindEyePosition(dd, Od) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(dd, Od)
        }
        _afterBind(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Od && (this._needToBindSceneUbo = !1, (0, Hd.p)(Od, this.zV().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = dd ? dd.visibility : 1, this._onBindObservable && dd && this._onBindObservable.notifyObservers(dd), this.disableDepthWrite) {
            const dd = this._scene.Iq();
            this._cachedDepthWriteState = dd.getDepthWrite(), dd.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const dd = this._scene.Iq();
            this._cachedColorWriteState = dd.getColorWrite(), dd.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const dd = this._scene.Iq();
            this._cachedDepthFunctionState = dd.getDepthFunction() || 0, dd.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Iq().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Iq().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Iq().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(Od, md) {
          const Wd = {};
          if (this._serializePlugins(Wd), dd._ParsePlugins(Wd, Od, this._scene, md), this.pluginManager)
            for (const dd of this.pluginManager._plugins) {
              const md = Od.pluginManager.getPlugin(dd.name);
              md && dd.copyTo(md)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const dd = [];
            for (const Od in this.meshMap) {
              const md = this.meshMap[Od];
              md && dd.push(md)
            }
            return dd
          }
          return this._scene.meshes.filter((dd => dd.material === this))
        }
        forceCompilation(dd, Od, md, Wd) {
          const Fd = {
              clipPlane: !1,
              useInstances: !1,
              ...md
            },
            Rd = this.zV(),
            Xd = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Kd = () => {
            if (!this._scene || !this._scene.Iq()) return;
            const md = Rd.clipPlane;
            if (Fd.clipPlane && (Rd.clipPlane = new td.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let md = !0,
                Rd = null;
              if (dd.ZE) {
                const Od = new hd.d(0, 0, 0, 0, 0, dd, void 0, !1, !1);
                Od.materialDefines && (Od.materialDefines._renderId = -1), this.isReadyForSubMesh(dd, Od, Fd.useInstances) || (Od.effect && Od.effect.getCompilationError() && Od.effect.allFallbacksProcessed() ? Rd = Od.effect.getCompilationError() : (md = !1, setTimeout(Kd, 16)))
              }
              md && (this.allowShaderHotSwapping = Xd, Rd && Wd && Wd(Rd), Od && Od(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Xd, Od && Od(this)) : setTimeout(Kd, 16);
            Fd.clipPlane && (Rd.clipPlane = md)
          };
          Kd()
        }
        async forceCompilationAsync(dd, Od) {
          return await new Promise(((md, Wd) => {
            this.forceCompilation(dd, (() => {
              md()
            }), Od, (dd => {
              Wd(dd)
            }))
          }))
        }
        KWd(Od) {
          this.zV().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (dd._DirtyCallbackArray.length = 0, Od & dd.ImageProcessingDirtyFlag && dd._DirtyCallbackArray.push(dd._ImageProcessingDirtyCallBack), Od & dd.TextureDirtyFlag && dd._DirtyCallbackArray.push(dd._TextureDirtyCallBack), Od & dd.LightDirtyFlag && dd._DirtyCallbackArray.push(dd._LightsDirtyCallBack), Od & dd.FresnelDirtyFlag && dd._DirtyCallbackArray.push(dd._FresnelDirtyCallBack), Od & dd.AttributesDirtyFlag && dd._DirtyCallbackArray.push(dd._AttributeDirtyCallBack), Od & dd.MiscDirtyFlag && dd._DirtyCallbackArray.push(dd._MiscDirtyCallBack), Od & dd.PrePassDirtyFlag && dd._DirtyCallbackArray.push(dd._PrePassDirtyCallBack), dd._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(dd._RunDirtyCallBacks), this.zV().resetCachedMaterial())
        }
        resetDrawCache() {
          const dd = this.zV().meshes;
          for (const Od of dd)
            if (Od.ZE)
              for (const dd of Od.ZE) dd.fq() === this && dd.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(dd) {
          const Od = this.zV();
          if (Od.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const md = Od.meshes;
          for (const Wd of md)
            if (Wd.ZE)
              for (const md of Wd.ZE) {
                if ((md.fq() || (Od._hasDefaultMaterial ? Od.defaultMaterial : null)) === this)
                  for (const Od of md._drawWrappers) Od && Od.defines && Od.defines.markAllAsDirty && this._materialContext === Od.materialContext && dd(Od.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.zV().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const dd = this.zV().enablePrePassRenderer();
          dd && dd.KWd()
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
            this.cV.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(dd)
            }))
          }
        }
        setPrePassRenderer(dd) {
          return !1
        }
        dispose(dd, Od, md) {
          const Wd = this.zV();
          if (Wd.stopAnimation(this), Wd.freeProcessedMaterials(), Wd.removeMaterial(this), this._eventInfo.forceDisposeTextures = Od, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const dd = this._parentContainer.materials.indexOf(this);
            dd > -1 && this._parentContainer.materials.splice(dd, 1), this._parentContainer = null
          }
          if (!0 !== md)
            if (this.meshMap)
              for (const Fd in this.meshMap) {
                const dd = this.meshMap[Fd];
                this._disposeMeshResources(dd)
              } else {
                const dd = Wd.meshes;
                for (const Od of dd) this._disposeMeshResources(Od)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.cV.notifyObservers(this), this.cV.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(dd) {
          if (!dd) return;
          const Od = dd.geometry,
            md = dd._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (dd.ZE && md)
              for (const Wd of dd.ZE) {
                const dd = Wd._drawWrappers;
                for (let Fd = 0; Fd < dd.length; Fd++) {
                  const Rd = dd[Fd]?.effect;
                  if (!Rd) continue;
                  md[Fd] === this && (Od?._releaseVertexArrayObject(Rd), Wd._removeDrawWrapper(Fd, !0, !0))
                }
              }
          } else Od?._releaseVertexArrayObject(this._drawWrapper.effect);
          dd.material !== this || dd.ZRd || (dd.material = null)
        }
        serialize() {
          const dd = Nd.b.Serialize(this);
          return dd.stencil = this.stencil.serialize(), dd.uniqueId = this.uniqueId, this._serializePlugins(dd), dd
        }
        _serializePlugins(dd) {
          if (dd.plugins = {}, this.pluginManager)
            for (const Od of this.pluginManager._plugins) Od.doNotSerialize || (dd.plugins[Od.getClassName()] = Od.serialize())
        }
        static ParseAlphaMode(dd, Od) {
          void 0 !== dd._alphaMode ? Od._alphaMode = Array.isArray(dd._alphaMode) ? [...dd._alphaMode] : [dd._alphaMode] : void 0 !== dd.alphaMode ? Od._alphaMode = Array.isArray(dd.alphaMode) ? [...dd.alphaMode] : [dd.alphaMode] : Od._alphaMode = [2]
        }
        static Parse(Od, md, Wd) {
          if (Od.customType) {
            if ("BABYLON.PBRMaterial" === Od.customType && Od.overloadedAlbedo && (Od.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Qd.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Od.customType = "BABYLON.StandardMaterial";
          const Fd = Rd.g.Instantiate(Od.customType).Parse(Od, md, Wd);
          return Fd._loadedUniqueId = Od.uniqueId, dd.ParseAlphaMode(Od, Fd), Fd
        }
        static _ParsePlugins(dd, Od, md, Wd) {
          if (dd.plugins)
            for (const Fd in dd.plugins) {
              const Xd = dd.plugins[Fd];
              let Kd = Od.pluginManager?.getPlugin(Xd.name);
              if (!Kd) {
                const dd = Rd.g.Instantiate("BABYLON." + Fd);
                dd && (Kd = new dd(Od))
              }
              Kd?.parse(Xd, md, Wd)
            }
        }
      }, (() => {
        const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Fd.E)()], md = [(0, Fd.E)()], bd = [(0, Fd.E)()], Td = [(0, Fd.E)()], pd = [(0, Fd.E)()], Yd = [(0, Fd.E)()], gd = [(0, Fd.E)()], wd = [(0, Fd.E)("alpha")], Ed = [(0, Fd.E)("backFaceCulling")], Jd = [(0, Fd.E)("textureRepetitionMode")], Ud = [(0, Fd.E)("textureRepetitionHexTilingParams")], xd = [(0, Fd.E)("cullBackFaces")], Bd = [(0, Fd.E)()], Sd = [(0, Fd.E)()], sd = [(0, Fd.E)()], ud = [(0, Fd.E)()], Vd = [(0, Fd.E)()], Ad = [(0, Fd.E)()], rd = [(0, Fd.E)()], Gd = [(0, Fd.E)()], nd = [(0, Fd.E)("fogEnabled")], Ld = [(0, Fd.E)()], Pd = [(0, Fd.E)()], zd = [(0, Fd.E)()], cd = [(0, Fd.E)()], jd = [(0, Fd.E)()], Dd = [(0, Fd.E)()], ed = [(0, Fd.E)()], Id = [(0, Fd.E)()], (0, Wd.h)(dd, null, cd, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: dd => "pointsCloud" in dd,
            get: dd => dd.pointsCloud
          },
          metadata: Rd
        }, null, ld), (0, Wd.h)(dd, null, jd, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "fillMode" in dd,
            get: dd => dd.fillMode
          },
          metadata: Rd
        }, null, ld), (0, Wd.h)(dd, null, Dd, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLogarithmicDepth" in dd,
            get: dd => dd.useLogarithmicDepth
          },
          metadata: Rd
        }, null, ld), (0, Wd.h)(dd, null, Id, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "transparencyMode" in dd,
            get: dd => dd.transparencyMode
          },
          metadata: Rd
        }, null, ld), (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: dd => "id" in dd,
            get: dd => dd.id,
            set: (dd, Od) => {
              dd.id = Od
            }
          },
          metadata: Rd
        }, Cd, Zd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: dd => "uniqueId" in dd,
            get: dd => dd.uniqueId,
            set: (dd, Od) => {
              dd.uniqueId = Od
            }
          },
          metadata: Rd
        }, kd, fd), (0, Wd.h)(null, null, bd, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: dd => "name" in dd,
            get: dd => dd.name,
            set: (dd, Od) => {
              dd.name = Od
            }
          },
          metadata: Rd
        }, Md, dO), (0, Wd.h)(null, null, Td, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: dd => "metadata" in dd,
            get: dd => dd.metadata,
            set: (dd, Od) => {
              dd.metadata = Od
            }
          },
          metadata: Rd
        }, OO, mO), (0, Wd.h)(null, null, pd, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: dd => "checkReadyOnEveryCall" in dd,
            get: dd => dd.checkReadyOnEveryCall,
            set: (dd, Od) => {
              dd.checkReadyOnEveryCall = Od
            }
          },
          metadata: Rd
        }, WO, FO), (0, Wd.h)(null, null, Yd, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: dd => "checkReadyOnlyOnce" in dd,
            get: dd => dd.checkReadyOnlyOnce,
            set: (dd, Od) => {
              dd.checkReadyOnlyOnce = Od
            }
          },
          metadata: Rd
        }, RO, XO), (0, Wd.h)(null, null, gd, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: dd => "state" in dd,
            get: dd => dd.state,
            set: (dd, Od) => {
              dd.state = Od
            }
          },
          metadata: Rd
        }, KO, hO), (0, Wd.h)(null, null, wd, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "_alpha" in dd,
            get: dd => dd._alpha,
            set: (dd, Od) => {
              dd._alpha = Od
            }
          },
          metadata: Rd
        }, vO, QO), (0, Wd.h)(null, null, Ed, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: dd => "_backFaceCulling" in dd,
            get: dd => dd._backFaceCulling,
            set: (dd, Od) => {
              dd._backFaceCulling = Od
            }
          },
          metadata: Rd
        }, tO, oO), (0, Wd.h)(null, null, Jd, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_textureRepetitionMode" in dd,
            get: dd => dd._textureRepetitionMode,
            set: (dd, Od) => {
              dd._textureRepetitionMode = Od
            }
          },
          metadata: Rd
        }, NO, qO), (0, Wd.h)(null, null, Ud, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: dd => "textureRepetitionHexTilingParams" in dd,
            get: dd => dd.textureRepetitionHexTilingParams,
            set: (dd, Od) => {
              dd.textureRepetitionHexTilingParams = Od
            }
          },
          metadata: Rd
        }, HO, yO), (0, Wd.h)(null, null, xd, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: dd => "_cullBackFaces" in dd,
            get: dd => dd._cullBackFaces,
            set: (dd, Od) => {
              dd._cullBackFaces = Od
            }
          },
          metadata: Rd
        }, bO, TO), (0, Wd.h)(null, null, Bd, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: dd => "sideOrientation" in dd,
            get: dd => dd.sideOrientation,
            set: (dd, Od) => {
              dd.sideOrientation = Od
            }
          },
          metadata: Rd
        }, pO, YO), (0, Wd.h)(null, null, Sd, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_alphaMode" in dd,
            get: dd => dd._alphaMode,
            set: (dd, Od) => {
              dd._alphaMode = Od
            }
          },
          metadata: Rd
        }, gO, wO), (0, Wd.h)(null, null, sd, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: dd => "_needDepthPrePass" in dd,
            get: dd => dd._needDepthPrePass,
            set: (dd, Od) => {
              dd._needDepthPrePass = Od
            }
          },
          metadata: Rd
        }, aO, EO), (0, Wd.h)(null, null, ud, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableDepthWrite" in dd,
            get: dd => dd.disableDepthWrite,
            set: (dd, Od) => {
              dd.disableDepthWrite = Od
            }
          },
          metadata: Rd
        }, JO, UO), (0, Wd.h)(null, null, Vd, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableColorWrite" in dd,
            get: dd => dd.disableColorWrite,
            set: (dd, Od) => {
              dd.disableColorWrite = Od
            }
          },
          metadata: Rd
        }, xO, BO), (0, Wd.h)(null, null, Ad, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceDepthWrite" in dd,
            get: dd => dd.forceDepthWrite,
            set: (dd, Od) => {
              dd.forceDepthWrite = Od
            }
          },
          metadata: Rd
        }, SO, sO), (0, Wd.h)(null, null, rd, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: dd => "depthFunction" in dd,
            get: dd => dd.depthFunction,
            set: (dd, Od) => {
              dd.depthFunction = Od
            }
          },
          metadata: Rd
        }, uO, VO), (0, Wd.h)(null, null, Gd, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: dd => "separateCullingPass" in dd,
            get: dd => dd.separateCullingPass,
            set: (dd, Od) => {
              dd.separateCullingPass = Od
            }
          },
          metadata: Rd
        }, iO, AO), (0, Wd.h)(null, null, nd, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "_fogEnabled" in dd,
            get: dd => dd._fogEnabled,
            set: (dd, Od) => {
              dd._fogEnabled = Od
            }
          },
          metadata: Rd
        }, rO, GO), (0, Wd.h)(null, null, Ld, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: dd => "pointSize" in dd,
            get: dd => dd.pointSize,
            set: (dd, Od) => {
              dd.pointSize = Od
            }
          },
          metadata: Rd
        }, nO, LO), (0, Wd.h)(null, null, Pd, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: dd => "zOffset" in dd,
            get: dd => dd.zOffset,
            set: (dd, Od) => {
              dd.zOffset = Od
            }
          },
          metadata: Rd
        }, PO, zO), (0, Wd.h)(null, null, zd, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: dd => "zOffsetUnits" in dd,
            get: dd => dd.zOffsetUnits,
            set: (dd, Od) => {
              dd.zOffsetUnits = Od
            }
          },
          metadata: Rd
        }, cO, jO), (0, Wd.h)(null, null, ed, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: dd => "_isVertexOutputInvariant" in dd,
            get: dd => dd._isVertexOutputInvariant,
            set: (dd, Od) => {
              dd._isVertexOutputInvariant = Od
            }
          },
          metadata: Rd
        }, DO, eO), Rd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Rd
        })
      })(), dd.TriangleFillMode = 0, dd.WireFrameFillMode = 1, dd.PointFillMode = 2, dd.PointListDrawMode = 3, dd.LineListDrawMode = 4, dd.LineLoopDrawMode = 5, dd.LineStripDrawMode = 6, dd.TriangleStripDrawMode = 7, dd.TriangleFanDrawMode = 8, dd.ClockWiseSideOrientation = 0, dd.CounterClockWiseSideOrientation = 1, dd.ImageProcessingDirtyFlag = 64, dd.TextureDirtyFlag = 1, dd.LightDirtyFlag = 2, dd.FresnelDirtyFlag = 4, dd.AttributesDirtyFlag = 8, dd.MiscDirtyFlag = 16, dd.PrePassDirtyFlag = 32, dd.AllDirtyFlag = 127, dd.MATERIAL_OPAQUE = 0, dd.MATERIAL_ALPHATEST = 1, dd.MATERIAL_ALPHABLEND = 2, dd.MATERIAL_ALPHATESTANDBLEND = 3, dd.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, dd.MATERIAL_NORMALBLENDMETHOD_RNM = 1, dd.LIGHTFALLOFF_PHYSICAL = 0, dd.LIGHTFALLOFF_GLTF = 1, dd.LIGHTFALLOFF_STANDARD = 2, dd.OnEventObservable = new Xd.c, dd.ForceVertexOutputInvariant = !1, dd._AllDirtyCallBack = dd => dd.markAllAsDirty(), dd._ImageProcessingDirtyCallBack = dd => dd.markAsImageProcessingDirty(), dd._TextureDirtyCallBack = dd => dd.markAsTexturesDirty(), dd._FresnelDirtyCallBack = dd => dd.markAsFresnelDirty(), dd._MiscDirtyCallBack = dd => dd.markAsMiscDirty(), dd._PrePassDirtyCallBack = dd => dd.markAsPrePassDirty(), dd._LightsDirtyCallBack = dd => dd.markAsLightDirty(), dd._AttributeDirtyCallBack = dd => dd.markAsAttributesDirty(), dd._FresnelAndMiscDirtyCallBack = Od => {
        dd._FresnelDirtyCallBack(Od), dd._MiscDirtyCallBack(Od)
      }, dd._TextureAndMiscDirtyCallBack = Od => {
        dd._TextureDirtyCallBack(Od), dd._MiscDirtyCallBack(Od)
      }, dd._DirtyCallbackArray = [], dd._RunDirtyCallBacks = Od => {
        for (const md of dd._DirtyCallbackArray) md(Od)
      }, dd
    })();
    Object.getOwnPropertyDescriptor(Td.prototype, "pluginManager") || Object.defineProperty(Td.prototype, "pluginManager", (0, bd.g)("Material", "pluginManager"))
  },
  42254: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(41838);
    class Fd {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(dd) {
        this._DiffuseTextureEnabled !== dd && (this._DiffuseTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(dd) {
        this._BaseWeightTextureEnabled !== dd && (this._BaseWeightTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(dd) {
        this._BaseDiffuseRoughnessTextureEnabled !== dd && (this._BaseDiffuseRoughnessTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(dd) {
        this._DetailTextureEnabled !== dd && (this._DetailTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(dd) {
        this._DecalMapEnabled !== dd && (this._DecalMapEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(dd) {
        this._AmbientTextureEnabled !== dd && (this._AmbientTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(dd) {
        this._OpacityTextureEnabled !== dd && (this._OpacityTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(dd) {
        this._ReflectionTextureEnabled !== dd && (this._ReflectionTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(dd) {
        this._EmissiveTextureEnabled !== dd && (this._EmissiveTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(dd) {
        this._SpecularTextureEnabled !== dd && (this._SpecularTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(dd) {
        this._BumpTextureEnabled !== dd && (this._BumpTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(dd) {
        this._LightmapTextureEnabled !== dd && (this._LightmapTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(dd) {
        this._RefractionTextureEnabled !== dd && (this._RefractionTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(dd) {
        this._ColorGradingTextureEnabled !== dd && (this._ColorGradingTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(dd) {
        this._FresnelEnabled !== dd && (this._FresnelEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(dd) {
        this._ClearCoatTextureEnabled !== dd && (this._ClearCoatTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(dd) {
        this._ClearCoatBumpTextureEnabled !== dd && (this._ClearCoatBumpTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(dd) {
        this._ClearCoatTintTextureEnabled !== dd && (this._ClearCoatTintTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(dd) {
        this._SheenTextureEnabled !== dd && (this._SheenTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(dd) {
        this._AnisotropicTextureEnabled !== dd && (this._AnisotropicTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(dd) {
        this._ThicknessTextureEnabled !== dd && (this._ThicknessTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(dd) {
        this._RefractionIntensityTextureEnabled !== dd && (this._RefractionIntensityTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(dd) {
        this._TranslucencyIntensityTextureEnabled !== dd && (this._TranslucencyIntensityTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(dd) {
        this._TranslucencyColorTextureEnabled !== dd && (this._TranslucencyColorTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(dd) {
        this._IridescenceTextureEnabled !== dd && (this._IridescenceTextureEnabled = dd, Wd.b.MarkAllMaterialsAsDirty(1))
      }
    }
    Fd._DiffuseTextureEnabled = !0, Fd._BaseWeightTextureEnabled = !0, Fd._BaseDiffuseRoughnessTextureEnabled = !0, Fd._DetailTextureEnabled = !0, Fd._DecalMapEnabled = !0, Fd._AmbientTextureEnabled = !0, Fd._OpacityTextureEnabled = !0, Fd._ReflectionTextureEnabled = !0, Fd._EmissiveTextureEnabled = !0, Fd._SpecularTextureEnabled = !0, Fd._BumpTextureEnabled = !0, Fd._LightmapTextureEnabled = !0, Fd._RefractionTextureEnabled = !0, Fd._ColorGradingTextureEnabled = !0, Fd._FresnelEnabled = !0, Fd._ClearCoatTextureEnabled = !0, Fd._ClearCoatBumpTextureEnabled = !0, Fd._ClearCoatTintTextureEnabled = !0, Fd._SheenTextureEnabled = !0, Fd._AnisotropicTextureEnabled = !0, Fd._ThicknessTextureEnabled = !0, Fd._RefractionIntensityTextureEnabled = !0, Fd._TranslucencyIntensityTextureEnabled = !0, Fd._TranslucencyColorTextureEnabled = !0, Fd._IridescenceTextureEnabled = !0
  },
  42242: (dd, Od, md) => {
    md.d(Od, {
      B: () => od,
      E: () => jd,
      F: () => nd,
      H: () => rd,
      L: () => Ad,
      M: () => pd,
      N: () => ud,
      R: () => Dd,
      T: () => ed,
      U: () => Id,
      W: () => kd,
      Y: () => Cd,
      Z: () => Zd,
      _: () => qd,
      b: () => Vd,
      d: () => wd,
      f: () => td,
      h: () => bd,
      j: () => Td,
      k: () => xd,
      m: () => hd,
      n: () => Hd,
      p: () => yd,
      q: () => Yd,
      s: () => sd,
      v: () => gd,
      w: () => Bd,
      y: () => Sd,
      z: () => Nd
    });
    var Wd = md(40262),
      Fd = md(38651),
      Rd = md(42118),
      Xd = md(42248),
      Kd = md(42254);

    function hd(dd, Od, md) {
      if (!dd || dd.LOGARITHMICDEPTH || dd.indexOf && dd.indexOf("LOGARITHMICDEPTH") >= 0) {
        const dd = md.activeCamera;
        1 === dd.mode && Wd.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Od.setFloat("logarithmicDepthConstant", 2 / (Math.log(dd.maxZ + 1) / Math.LN2))
      }
    }
    const vd = {
        r: 0,
        g: 0,
        b: 0
      },
      Qd = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function td(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      md && dd.fogEnabled && (!Od || Od.applyFog) && 0 !== dd.fogMode && (md.setFloat4("vFogInfos", dd.fogMode, dd.fogStart, dd.fogEnd, dd.fogDensity), Wd ? (dd.fogColor.toLinearSpaceToRef(vd, dd.Iq().useExactSrgbConversions), md.setColor3("vFogColor", vd)) : md.setColor3("vFogColor", dd.fogColor))
    }

    function od(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
      const td = dd.numMaxInfluencers || dd.numInfluencers;
      return td <= 0 ? 0 : (Od.push("#define MORPHTARGETS"), dd.hasPositions && Od.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), dd.hasNormals && Od.push("#define MORPHTARGETTEXTURE_HASNORMALS"), dd.hasTangents && Od.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), dd.hasUVs && Od.push("#define MORPHTARGETTEXTURE_HASUVS"), dd.hasUV2s && Od.push("#define MORPHTARGETTEXTURE_HASUV2S"), dd.hasColors && Od.push("#define MORPHTARGETTEXTURE_HASCOLORS"), dd.supportsPositions && Fd && Od.push("#define MORPHTARGETS_POSITION"), dd.supportsNormals && Rd && Od.push("#define MORPHTARGETS_NORMAL"), dd.supportsTangents && Xd && Od.push("#define MORPHTARGETS_TANGENT"), dd.supportsUVs && Kd && Od.push("#define MORPHTARGETS_UV"), dd.supportsUV2s && hd && Od.push("#define MORPHTARGETS_UV2"), dd.supportsColors && vd && Od.push("#define MORPHTARGETS_COLOR"), Od.push("#define NUM_MORPH_INFLUENCERS " + td), dd.isUsingTextureForTargets && Od.push("#define MORPHTARGETS_TEXTURE"), Qd.NUM_MORPH_INFLUENCERS = td, Qd.NORMAL = Rd, Qd.TANGENT = Xd, Qd.UV = Kd, Qd.UV2 = hd, Qd.COLOR = vd, Nd(md, Wd, Qd, Fd), td)
    }

    function Nd(dd, Od, md) {
      let Rd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Xd = md.NUM_MORPH_INFLUENCERS;
      if (Xd > 0 && Fd.e.LastCreatedEngine) {
        const Kd = Fd.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          hd = Od.morphTargetManager;
        if (hd?.isUsingTextureForTargets) return;
        const vd = hd && hd.supportsPositions && Rd,
          Qd = hd && hd.supportsNormals && md.NORMAL,
          td = hd && hd.supportsTangents && md.TANGENT,
          od = hd && hd.supportsUVs && md.UV1,
          Nd = hd && hd.supportsUV2s && md.UV2,
          qd = hd && hd.supportsColors && md.VERTEXCOLOR;
        for (let md = 0; md < Xd; md++) vd && dd.push("position" + md), Qd && dd.push("normal" + md), td && dd.push("tangent" + md), od && dd.push("uv_" + md), Nd && dd.push("uv2_" + md), qd && dd.push("color" + md), dd.length > Kd && Wd.c.Error("Cannot add more vertex attributes for mesh " + Od.name)
      }
    }

    function qd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      dd.push("world0"), dd.push("world1"), dd.push("world2"), dd.push("world3"), Od && (dd.push("previousWorld0"), dd.push("previousWorld1"), dd.push("previousWorld2"), dd.push("previousWorld3"))
    }

    function Hd(dd, Od) {
      const md = dd.morphTargetManager;
      dd && md && Od.setFloatArray("morphTargetInfluences", md.influences)
    }

    function yd(dd, Od) {
      Od.bindToEffect(dd, "Scene")
    }

    function bd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        hd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Qd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        td = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        od = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (dd.texturesEnabled && Fd && Kd.b.ReflectionTextureEnabled) {
        if (md.Idd("reflectionMatrix", Fd.getReflectionTextureMatrix()), md.updateFloat2("vReflectionInfos", Fd.level * dd.iblIntensity, od), hd && Fd.boundingBoxSize) {
          const dd = Fd;
          md.updateVector3("vReflectionPosition", dd.boundingBoxPosition), md.updateVector3("vReflectionSize", dd.boundingBoxSize)
        }
        if (Rd) {
          const dd = Fd.getSize().width;
          md.updateFloat2("vReflectionFilteringInfo", dd, Math.log2(dd))
        }
        if (Qd && !Od.USEIRRADIANCEMAP) {
          const dd = Fd.sphericalPolynomial;
          if (Od.USESPHERICALFROMREFLECTIONMAP && dd)
            if (Od.SPHERICAL_HARMONICS) {
              const Od = dd.preScaledHarmonics;
              md.updateVector3("vSphericalL00", Od.l00), md.updateVector3("vSphericalL1_1", Od.l1_1), md.updateVector3("vSphericalL10", Od.l10), md.updateVector3("vSphericalL11", Od.l11), md.updateVector3("vSphericalL2_2", Od.l2_2), md.updateVector3("vSphericalL2_1", Od.l2_1), md.updateVector3("vSphericalL20", Od.l20), md.updateVector3("vSphericalL21", Od.l21), md.updateVector3("vSphericalL22", Od.l22)
            } else md.updateFloat3("vSphericalX", dd.x.x, dd.x.y, dd.x.z), md.updateFloat3("vSphericalY", dd.y.x, dd.y.y, dd.y.z), md.updateFloat3("vSphericalZ", dd.z.x, dd.z.y, dd.z.z), md.updateFloat3("vSphericalXX_ZZ", dd.xx.x - dd.zz.x, dd.xx.y - dd.zz.y, dd.xx.z - dd.zz.z), md.updateFloat3("vSphericalYY_ZZ", dd.yy.x - dd.zz.x, dd.yy.y - dd.zz.y, dd.yy.z - dd.zz.z), md.updateFloat3("vSphericalZZ", dd.zz.x, dd.zz.y, dd.zz.z), md.updateFloat3("vSphericalXY", dd.xy.x, dd.xy.y, dd.xy.z), md.updateFloat3("vSphericalYZ", dd.yz.x, dd.yz.y, dd.yz.z), md.updateFloat3("vSphericalZX", dd.zx.x, dd.zx.y, dd.zx.z)
        } else vd && Od.USEIRRADIANCEMAP && Od.USE_IRRADIANCE_DOMINANT_DIRECTION && Fd.irradianceTexture && md.updateVector3("vReflectionDominantDirection", Fd.irradianceTexture._dominantDirection);
        Xd && md.updateFloat3("vReflectionMicrosurfaceInfos", Fd.getSize().width, Fd.lodGenerationScale, Fd.lodGenerationOffset)
      }
      td && md.updateColor3("vReflectionColor", Wd)
    }

    function Td(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Wd && Kd.b.ReflectionTextureEnabled) {
        Od.LODBASEDMICROSFURACE ? md.setTexture("reflectionSampler", Wd) : (md.setTexture("reflectionSampler", Wd._lodTextureMid || Wd), md.setTexture("reflectionSamplerLow", Wd._lodTextureLow || Wd), md.setTexture("reflectionSamplerHigh", Wd._lodTextureHigh || Wd)), Od.USEIRRADIANCEMAP && md.setTexture("irradianceSampler", Wd.irradianceTexture);
        const Rd = dd.iblCdfGenerator;
        Fd && Rd && md.setTexture("icdfSampler", Rd.getIcdfTexture())
      }
    }

    function pd(dd, Od, md) {
      Od._needUVs = !0, Od[md] = !0, dd.optimizeUVAllocation && dd.getTextureMatrix().isIdentityAs3x2() ? (Od[md + "DIRECTUV"] = dd.coordinatesIndex + 1, Od["MAINUV" + (dd.coordinatesIndex + 1)] = !0) : Od[md + "DIRECTUV"] = 0
    }

    function Yd(dd, Od, md) {
      const Wd = dd.getTextureMatrix();
      Od.Idd(md + "Matrix", Wd)
    }

    function gd(dd, Od, md) {
      md.BAKED_VERTEX_ANIMATION_TEXTURE && md.INSTANCES && dd.push("bakedVertexAnimationSettingsInstanced")
    }

    function wd(dd, Od, md) {
      var Wd;
      if (Od && dd && (dd.computeBonesUsingShaders && Od._bonesComputationForcedToCPU && (dd.computeBonesUsingShaders = !1), dd.useBones && dd.computeBonesUsingShaders && dd.skeleton)) {
        const Fd = dd.skeleton;
        if (Fd.isUsingTextureForMatrices && Od.getUniformIndex("boneTextureInfo") > -1) {
          const md = Fd.getTransformMatrixTexture(dd);
          Od.setTexture("boneSampler", md), Od.setFloat2("boneTextureInfo", Fd._textureWidth, Fd._textureHeight)
        } else {
          const Rd = Fd.getTransformMatrices(dd);
          Rd && (Od.setMatrices("mBones", Rd), md && dd.zV().prePassRenderer && dd.zV().prePassRenderer.getIndex(2) && (md.previousBones[dd.uniqueId] || (md.previousBones[dd.uniqueId] = Rd.slice()), Od.setMatrices("mPreviousBones", md.previousBones[dd.uniqueId]), Wd = Rd, md.previousBones[dd.uniqueId].set(Wd)))
        }
      }
    }

    function Ed(dd, Od, md, Wd, Fd) {
      let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      dd._bindLight(Od, md, Wd, Fd, Rd)
    }
    const Jd = 4,
      Ud = new WeakMap;

    function xd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Rd = Math.min(Od.lightSources.length, Fd);
      for (let Xd = 0; Xd < Rd; Xd++) {
        Ed(Od.lightSources[Xd], Xd, dd, md, "boolean" === typeof Wd ? Wd : Wd.SPECULARTERM, Od.receiveShadows)
      }
    }

    function Bd(dd, Od, md, Wd) {
      md.NUM_BONE_INFLUENCERS > 0 && (Wd.addCPUSkinningFallback(0, Od), dd.push("matricesIndices"), dd.push("matricesWeights"), md.NUM_BONE_INFLUENCERS > 4 && (dd.push("matricesIndicesExtra"), dd.push("matricesWeightsExtra")))
    }

    function Sd(dd, Od) {
      (Od.INSTANCES || Od.THIN_INSTANCES) && qd(dd, !!Od.PREPASS_VELOCITY), Od.INSTANCESCOLOR && dd.push("instanceColor")
    }

    function sd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Fd = 0;
      for (let Rd = 0; Rd < md && dd["LIGHT" + Rd]; Rd++) Rd > 0 && (Fd = Wd + Rd, Od.addFallback(Fd, "LIGHT" + Rd)), dd.SHADOWS || (dd["SHADOW" + Rd] && Od.addFallback(Wd, "SHADOW" + Rd), dd["SHADOWPCF" + Rd] && Od.addFallback(Wd, "SHADOWPCF" + Rd), dd["SHADOWPCSS" + Rd] && Od.addFallback(Wd, "SHADOWPCSS" + Rd), dd["SHADOWPOISSON" + Rd] && Od.addFallback(Wd, "SHADOWPOISSON" + Rd), dd["SHADOWESM" + Rd] && Od.addFallback(Wd, "SHADOWESM" + Rd), dd["SHADOWCLOSEESM" + Rd] && Od.addFallback(Wd, "SHADOWCLOSEESM" + Rd));
      return Fd
    }

    function ud(dd, Od, md, Wd, Fd, Rd, Xd) {
      let Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vd = arguments.length > 9 ? arguments[9] : void 0,
        Qd = arguments.length > 10 ? arguments[10] : void 0;
      if (Xd._areMiscDirty) {
        Xd.LOGARITHMICDEPTH = md, Xd.POINTSIZE = Wd, Xd.FOG = Fd && function(dd, Od) {
          return Od.fogEnabled && dd.applyFog && 0 !== Od.fogMode
        }(dd, Od), Xd.NONUNIFORMSCALING = dd.nonUniformScaling, Xd.ALPHATEST = Rd, Xd.DECAL_AFTER_DETAIL = Kd, Xd.USE_VERTEX_PULLING = hd, Xd.RIGHT_HANDED = Od.useRightHandedSystem;
        const td = hd ? vd?.geometry?.getIndexBuffer() : null,
          od = !!vd && vd.isUnIndexed;
        Xd.VERTEX_PULLING_USE_INDEX_BUFFER = !!td && !od, Xd.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!td || od) && td.is32Bits, Xd.VERTEXOUTPUT_INVARIANT = !!Qd
      }
    }

    function Vd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!dd.lightsEnabled || Wd) return !0;
      const Fd = Od.lightSources,
        Rd = Math.min(Fd.length, md);
      for (let Xd = 0; Xd < Rd; Xd++)
        if (!Fd[Xd].areLightTexturesReady()) return !1;
      return !0
    }

    function Ad(dd, Od, md, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!md._areLightsDirty) return md._needNormals;
      const Kd = Rd;
      Rd = function(dd, Od) {
        const md = dd.Iq().getCaps().maxUniformBuffersPerShaderStage;
        if (null == md) return Od;
        const Wd = Math.max(md - Jd, 1);
        return Math.min(Od, Wd)
      }(dd, Rd);
      let hd = 0;
      const vd = {
        needNormals: md._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (dd.lightsEnabled && !Xd) {
        Od.lightSources.length > Rd && Rd < Kd && function(dd, Od, md, Fd) {
          let Rd = Ud.get(dd);
          Rd || (Rd = new Set, Ud.set(dd, Rd)), Rd.has(Fd) || (Rd.add(Fd), Wd.c.Warn(`maxSimultaneousLights is ${Od} but this engine supports at most ${md} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Fd} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Fd+Jd} uniform buffers, over the device limit of ${dd.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${md}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${md} or less to silence this warning.`))
        }(dd.Iq(), Kd, Rd, Math.min(Od.lightSources.length, Kd));
        for (const Wd of Od.lightSources)
          if (Gd(dd, Od, Wd, hd, md, Fd, vd), hd++, hd === Rd) break
      }
      md.SPECULARTERM = vd.specularEnabled, md.SHADOWS = vd.shadowEnabled;
      const Qd = Math.max(Rd, md.MAXLIGHTCOUNT || 0);
      for (let Wd = hd; Wd < Qd; Wd++) void 0 !== md["LIGHT" + Wd] && (md["LIGHT" + Wd] = !1, md["HEMILIGHT" + Wd] = !1, md["POINTLIGHT" + Wd] = !1, md["DIRLIGHT" + Wd] = !1, md["SPOTLIGHT" + Wd] = !1, md["AREALIGHT" + Wd] = !1, md["CLUSTLIGHT" + Wd] = !1, md["SHADOW" + Wd] = !1, md["SHADOWCSM" + Wd] = !1, md["SHADOWCSMDEBUG" + Wd] = !1, md["SHADOWCSMNUM_CASCADES" + Wd] = !1, md["SHADOWCSMUSESHADOWMAXZ" + Wd] = !1, md["SHADOWCSMNOBLEND" + Wd] = !1, md["SHADOWCSM_RIGHTHANDED" + Wd] = !1, md["SHADOWPCF" + Wd] = !1, md["SHADOWPCSS" + Wd] = !1, md["SHADOWPOISSON" + Wd] = !1, md["SHADOWESM" + Wd] = !1, md["SHADOWCLOSEESM" + Wd] = !1, md["SHADOWCUBE" + Wd] = !1, md["SHADOWLOWQUALITY" + Wd] = !1, md["SHADOWMEDIUMQUALITY" + Wd] = !1);
      md.LIGHTCOUNT = hd, md.MAXLIGHTCOUNT = Rd;
      const td = dd.Iq().getCaps();
      return void 0 === md.SHADOWFLOAT && (vd.needRebuild = !0), md.SHADOWFLOAT = vd.shadowEnabled && (td.textureFloatRender && td.textureFloatLinearFiltering || td.textureHalfFloatRender && td.textureHalfFloatLinearFiltering), md.LIGHTMAPEXCLUDED = vd.lightmapMode, vd.needRebuild && md.rebuild(), vd.needNormals
    }

    function rd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Od && Kd.b.ReflectionTextureEnabled) {
        if (!Od.isReadyOrNotBlocking()) return !1;
        md._needNormals = !0, md.REFLECTION = !0, md.GAMMAREFLECTION = Od.gammaSpace, md.RGBDREFLECTION = Od.isRGBD, md.LODINREFLECTIONALPHA = Od.lodLevelInAlpha, md.LINEARSPECULARREFLECTION = Od.linearSpecularLOD, md.USEIRRADIANCEMAP = !1, md.LODBASEDMICROSFURACE = dd.Iq().getCaps().textureLOD;
        const Xd = dd.Iq();
        switch (Wd && Fd > 0 ? (md.NUM_SAMPLES = "" + Fd, Xd._features.needTypeSuffixInShaderConstants && (md.NUM_SAMPLES = md.NUM_SAMPLES + "u"), md.REALTIME_FILTERING = !0, dd.iblCdfGenerator && (md.IBL_CDF_FILTERING = !0)) : md.REALTIME_FILTERING = !1, md.INVERTCUBICMAP = 6 === Od.coordinatesMode, md.REFLECTIONMAP_3D = Od.isCube, md.REFLECTIONMAP_OPPOSITEZ = md.REFLECTIONMAP_3D && dd.useRightHandedSystem ? !Od.invertZ : Od.invertZ, md.REFLECTIONMAP_CUBIC = !1, md.REFLECTIONMAP_EXPLICIT = !1, md.REFLECTIONMAP_PLANAR = !1, md.REFLECTIONMAP_PROJECTION = !1, md.REFLECTIONMAP_SKYBOX = !1, md.REFLECTIONMAP_SPHERICAL = !1, md.REFLECTIONMAP_EQUIRECTANGULAR = !1, md.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, md.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Od.coordinatesMode) {
          case 0:
            md.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            md.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            md.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            md.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            md.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            md.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            md.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            md.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            md.REFLECTIONMAP_CUBIC = !0, md.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Od.boundingBoxSize
        }
        5 !== Od.coordinatesMode && (Od.irradianceTexture ? (md.USEIRRADIANCEMAP = !0, md.USESPHERICALFROMREFLECTIONMAP = !1, md.USESPHERICALINVERTEX = !1, Od.irradianceTexture._dominantDirection ? md.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : md.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Od.isCube && (md.USESPHERICALFROMREFLECTIONMAP = !0, md.USEIRRADIANCEMAP = !1, md.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, md.USESPHERICALINVERTEX = Rd))
      } else md.REFLECTION = !1, md.REFLECTIONMAP_3D = !1, md.REFLECTIONMAP_SPHERICAL = !1, md.REFLECTIONMAP_PLANAR = !1, md.REFLECTIONMAP_CUBIC = !1, md.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, md.REFLECTIONMAP_PROJECTION = !1, md.REFLECTIONMAP_SKYBOX = !1, md.REFLECTIONMAP_EXPLICIT = !1, md.REFLECTIONMAP_EQUIRECTANGULAR = !1, md.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, md.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, md.INVERTCUBICMAP = !1, md.USESPHERICALFROMREFLECTIONMAP = !1, md.USEIRRADIANCEMAP = !1, md.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, md.USESPHERICALINVERTEX = !1, md.REFLECTIONMAP_OPPOSITEZ = !1, md.LODINREFLECTIONALPHA = !1, md.GAMMAREFLECTION = !1, md.RGBDREFLECTION = !1, md.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Gd(dd, Od, md, Wd, Fd, Xd, Kd) {
      switch (Kd.needNormals = !0, void 0 === Fd["LIGHT" + Wd] && (Kd.needRebuild = !0), Fd["LIGHT" + Wd] = !0, Fd["SPOTLIGHT" + Wd] = !1, Fd["HEMILIGHT" + Wd] = !1, Fd["POINTLIGHT" + Wd] = !1, Fd["DIRLIGHT" + Wd] = !1, Fd["AREALIGHT" + Wd] = !1, Fd["CLUSTLIGHT" + Wd] = !1, md.prepareLightSpecificDefines(Fd, Wd), Fd["LIGHT_FALLOFF_PHYSICAL" + Wd] = !1, Fd["LIGHT_FALLOFF_GLTF" + Wd] = !1, Fd["LIGHT_FALLOFF_STANDARD" + Wd] = !1, md.falloffType) {
        case Rd.c.FALLOFF_GLTF:
          Fd["LIGHT_FALLOFF_GLTF" + Wd] = !0;
          break;
        case Rd.c.FALLOFF_PHYSICAL:
          Fd["LIGHT_FALLOFF_PHYSICAL" + Wd] = !0;
          break;
        case Rd.c.FALLOFF_STANDARD:
          Fd["LIGHT_FALLOFF_STANDARD" + Wd] = !0
      }
      if (Xd && !md.specular.equalsFloats(0, 0, 0) && (Kd.specularEnabled = !0), Fd["SHADOW" + Wd] = !1, Fd["SHADOWCSM" + Wd] = !1, Fd["SHADOWCSMDEBUG" + Wd] = !1, Fd["SHADOWCSMNUM_CASCADES" + Wd] = !1, Fd["SHADOWCSMUSESHADOWMAXZ" + Wd] = !1, Fd["SHADOWCSMNOBLEND" + Wd] = !1, Fd["SHADOWCSM_RIGHTHANDED" + Wd] = !1, Fd["SHADOWPCF" + Wd] = !1, Fd["SHADOWPCSS" + Wd] = !1, Fd["SHADOWPOISSON" + Wd] = !1, Fd["SHADOWESM" + Wd] = !1, Fd["SHADOWCLOSEESM" + Wd] = !1, Fd["SHADOWCUBE" + Wd] = !1, Fd["SHADOWLOWQUALITY" + Wd] = !1, Fd["SHADOWMEDIUMQUALITY" + Wd] = !1, Od && Od.receiveShadows && dd.shadowsEnabled && md.shadowEnabled) {
        const Od = md.getShadowGenerator(dd.activeCamera) ?? md.getShadowGenerator();
        if (Od) {
          const dd = Od.getShadowMap();
          dd && dd.renderList && dd.renderList.length > 0 && (Kd.shadowEnabled = !0, Od.prepareDefines(Fd, Wd))
        }
      }
      md.lightmapMode != Rd.c.LIGHTMAP_DEFAULT ? (Kd.lightmapMode = !0, Fd["LIGHTMAPEXCLUDED" + Wd] = !0, Fd["LIGHTMAPNOSPECULAR" + Wd] = md.lightmapMode == Rd.c.LIGHTMAP_SHADOWSONLY) : (Fd["LIGHTMAPEXCLUDED" + Wd] = !1, Fd["LIGHTMAPNOSPECULAR" + Wd] = !1)
    }

    function nd(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        hd = function(dd, Od) {
          let md = !1;
          if (dd.activeCamera) {
            const Wd = Od.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Fd = Od.CAMERA_PERSPECTIVE ? 1 : 0,
              Rd = 1 === dd.activeCamera.mode ? 1 : 0,
              Xd = 0 === dd.activeCamera.mode ? 1 : 0;
            (Wd ^ Rd || Fd ^ Xd) && (Od.CAMERA_ORTHOGRAPHIC = 1 === Rd, Od.CAMERA_PERSPECTIVE = 1 === Xd, md = !0)
          }
          return md
        }(dd, Wd);
      !1 !== Rd && (hd = (0, Xd.g)(md, dd, Wd)), Wd.DEPTHPREPASS !== !Od.getColorWrite() && (Wd.DEPTHPREPASS = !Wd.DEPTHPREPASS, hd = !0), Wd.INSTANCES !== Fd && (Wd.INSTANCES = Fd, hd = !0), Wd.THIN_INSTANCES !== Kd && (Wd.THIN_INSTANCES = Kd, hd = !0), hd && Wd.markAsUnprocessed()
    }
    const Ld = 40,
      Pd = 64,
      zd = new WeakMap,
      cd = new WeakSet;

    function jd(dd, Od, md, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Xd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Kd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Od._areAttributesDirty && Od._needNormals === Od._normals && Od._needUVs === Od._uvs) return !1;
      Od._normals = Od._needNormals, Od._uvs = Od._needUVs, Od.NORMAL = Od._needNormals && dd.isVerticesDataPresent("normal"), Od._needNormals && dd.isVerticesDataPresent("tangent") && (Od.TANGENT = !0);
      for (let Wd = 1; Wd <= 6; ++Wd) Od["UV" + Wd] = !!Od._needUVs && dd.isVerticesDataPresent(`uv${1===Wd?"":Wd}`);
      if (md) {
        const md = dd.useVertexColors && dd.isVerticesDataPresent("color");
        Od.VERTEXCOLOR = md, Od.VERTEXALPHA = dd.hasVertexAlpha && md && Xd
      }
      return dd.isVerticesDataPresent("instanceColor") && (dd.CRd || dd.hasThinInstances) && (Od.INSTANCESCOLOR = !0), Fd && function(dd, Od) {
        if (dd.useBones && dd.computeBonesUsingShaders && dd.skeleton) {
          Od.NUM_BONE_INFLUENCERS = dd.numBoneInfluencers;
          const md = void 0 !== Od.BONETEXTURE;
          if (dd.skeleton.isUsingTextureForMatrices && md) Od.BONETEXTURE = !0;
          else {
            Od.BonesPerMesh = dd.skeleton.bones.length + 1, Od.BONETEXTURE = !md && void 0;
            const Fd = dd.zV(),
              Rd = Fd.prePassRenderer;
            if (Rd && Rd.enabled) {
              const md = -1 === Rd.excludedSkinnedMesh.indexOf(dd);
              Od.BONES_VELOCITY_ENABLED = md
            }
            const Xd = !0 === Od.MULTIVIEW,
              Kd = 2 * Od.BonesPerMesh + (Xd ? 1 : 0);
            if (zd.get(dd.skeleton) !== Kd) {
              zd.set(dd.skeleton, Kd);
              const md = Fd.Iq().getCaps().maxVertexUniformVectors;
              if (md && !cd.has(dd.skeleton)) {
                const Fd = 4 * Od.BonesPerMesh,
                  Rd = Xd ? Pd : Ld,
                  Kd = Math.max(md - Rd, 0);
                (Fd > Kd || Xd && 3 * Fd > md) && (cd.add(dd.skeleton), Wd.c.Warn(`Skeleton "${dd.skeleton.name}": ${dd.skeleton.bones.length} bones stored as vertex uniforms use ${Fd} of ~${Kd} usable uniform vectors${Xd?" (multiview)":""} on a device reporting ${md}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Od.NUM_BONE_INFLUENCERS = 0, Od.BonesPerMesh = 0, void 0 !== Od.BONETEXTURE && (Od.BONETEXTURE = !1)
      }(dd, Od), Rd && function(dd, Od) {
        const md = dd.morphTargetManager;
        md ? (Od.MORPHTARGETS_UV = md.supportsUVs && Od.UV1, Od.MORPHTARGETS_UV2 = md.supportsUV2s && Od.UV2, Od.MORPHTARGETS_TANGENT = md.supportsTangents && Od.TANGENT, Od.MORPHTARGETS_NORMAL = md.supportsNormals && Od.NORMAL, Od.MORPHTARGETS_POSITION = md.supportsPositions, Od.MORPHTARGETS_COLOR = md.supportsColors, Od.MORPHTARGETTEXTURE_HASUVS = md.hasUVs, Od.MORPHTARGETTEXTURE_HASUV2S = md.hasUV2s, Od.MORPHTARGETTEXTURE_HASTANGENTS = md.hasTangents, Od.MORPHTARGETTEXTURE_HASNORMALS = md.hasNormals, Od.MORPHTARGETTEXTURE_HASPOSITIONS = md.hasPositions, Od.MORPHTARGETTEXTURE_HASCOLORS = md.hasColors, Od.NUM_MORPH_INFLUENCERS = md.numMaxInfluencers || md.numInfluencers, Od.MORPHTARGETS = Od.NUM_MORPH_INFLUENCERS > 0, Od.MORPHTARGETS_TEXTURE = md.isUsingTextureForTargets) : (Od.MORPHTARGETS_UV = !1, Od.MORPHTARGETS_UV2 = !1, Od.MORPHTARGETS_TANGENT = !1, Od.MORPHTARGETS_NORMAL = !1, Od.MORPHTARGETS_POSITION = !1, Od.MORPHTARGETS_COLOR = !1, Od.MORPHTARGETTEXTURE_HASUVS = !1, Od.MORPHTARGETTEXTURE_HASUV2S = !1, Od.MORPHTARGETTEXTURE_HASTANGENTS = !1, Od.MORPHTARGETTEXTURE_HASNORMALS = !1, Od.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Od.MORPHTARGETTEXTURE_HAS_COLORS = !1, Od.MORPHTARGETS = !1, Od.NUM_MORPH_INFLUENCERS = 0)
      }(dd, Od), Kd && function(dd, Od) {
        const md = dd.bakedVertexAnimationManager;
        Od.BAKED_VERTEX_ANIMATION_TEXTURE = !(!md || !md.isEnabled)
      }(dd, Od), !0
    }

    function Dd(dd, Od) {
      if (dd.activeCamera) {
        const md = Od.MULTIVIEW;
        Od.MULTIVIEW = null !== dd.activeCamera.outputRenderTarget && dd.activeCamera.outputRenderTarget.getViewCount() > 1, Od.MULTIVIEW != md && Od.markAsUnprocessed()
      }
    }

    function ed(dd, Od, md) {
      const Wd = Od.ORDER_INDEPENDENT_TRANSPARENCY,
        Fd = Od.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Od.ORDER_INDEPENDENT_TRANSPARENCY = dd.useOrderIndependentTransparency && md, Od.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !dd.Iq().getCaps().textureFloatLinearFiltering, Wd === Od.ORDER_INDEPENDENT_TRANSPARENCY && Fd === Od.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Od.markAsUnprocessed()
    }

    function Id(dd, Od, md) {
      const Wd = Od.PREPASS;
      if (!Od._arePrePassDirty) return;
      const Fd = [{
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
      if (dd.prePassRenderer && dd.prePassRenderer.enabled && md) {
        Od.PREPASS = !0, Od.SCENE_MRT_COUNT = dd.prePassRenderer.mrtCount, Od.PREPASS_NORMAL_WORLDSPACE = dd.prePassRenderer.generateNormalsInWorldSpace, Od.PREPASS_COLOR = !0, Od.PREPASS_COLOR_INDEX = 0;
        for (let md = 0; md < Fd.length; md++) {
          const Wd = dd.prePassRenderer.getIndex(Fd[md].type); - 1 !== Wd ? (Od[Fd[md].define] = !0, Od[Fd[md].index] = Wd) : Od[Fd[md].define] = !1
        }
      } else {
        Od.PREPASS = !1;
        for (let dd = 0; dd < Fd.length; dd++) Od[Fd[dd].define] = !1
      }
      Od.PREPASS != Wd && (Od.markAsUnprocessed(), Od.markAsImageProcessingDirty())
    }

    function ld(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Fd && Fd.push("Light" + dd), Rd || (Od.push("vLightData" + dd, "vLightDiffuse" + dd, "vLightSpecular" + dd, "vLightDirection" + dd, "vLightWidth" + dd, "vLightHeight" + dd, "vLightFalloff" + dd, "vLightGround" + dd, "vSliceData" + dd, "vSliceRanges" + dd, "lightMatrix" + dd, "shadowsInfo" + dd, "depthValues" + dd), md.push("shadowTexture" + dd), md.push("depthTexture" + dd), Od.push("viewFrustumZ" + dd, "cascadeBlendFactor" + dd, "lightSizeUVCorrection" + dd, "depthCorrection" + dd, "penumbraDarkness" + dd, "frustumLengths" + dd), Wd && (md.push("projectionLightTexture" + dd), Od.push("textureProjectionMatrix" + dd)), Xd && md.push("iesLightTexture" + dd), hd && md.push("rectAreaLightEmissionTexture" + dd), Kd && (md.push("lightDataTexture" + dd), vd || md.push("tileMaskTexture" + dd)))
    }

    function Cd(dd, Od, md) {
      const Wd = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      md && Wd.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), dd.push(...Wd);
      Od.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Zd(dd, Od, md) {
      let Wd, Fd, Rd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Xd = null;
      if (dd.uniformsNames) {
        const Kd = dd;
        Wd = Kd.uniformsNames, Fd = Kd.uniformBuffersNames, Od = Kd.samplers, md = Kd.defines, Rd = Kd.maxSimultaneousLights || 0, Xd = Kd.shaderLanguage ?? null
      } else Wd = dd, Od || (Od = []);
      for (let Kd = 0; Kd < Rd && md["LIGHT" + Kd]; Kd++) ld(Kd, Wd, Od, md["PROJECTEDLIGHTTEXTURE" + Kd], Fd, !1, md["IESLIGHTTEXTURE" + Kd], md["CLUSTLIGHT" + Kd], md["RECTAREALIGHTEMISSIONTEXTURE" + Kd], 1 === Xd);
      md.NUM_MORPH_INFLUENCERS && (Wd.push("morphTargetInfluences"), Wd.push("morphTargetCount")), md.BAKED_VERTEX_ANIMATION_TEXTURE && (Wd.push("bakedVertexAnimationSettings"), Wd.push("bakedVertexAnimationTextureSizeInverted"), Wd.push("bakedVertexAnimationTime"), Od.push("bakedVertexAnimationTexture"))
    }

    function kd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      dd.addUniform("vReflectionInfos", 2), dd.addUniform("reflectionMatrix", 16), Od && dd.addUniform("vReflectionMicrosurfaceInfos", 3), md && (dd.addUniform("vReflectionPosition", 3), dd.addUniform("vReflectionSize", 3)), Wd && (dd.addUniform("vReflectionFilteringInfo", 2), dd.addUniform("vReflectionDominantDirection", 3)), Rd && dd.addUniform("vReflectionColor", 3), Fd && (dd.addUniform("vSphericalL00", 3), dd.addUniform("vSphericalL1_1", 3), dd.addUniform("vSphericalL10", 3), dd.addUniform("vSphericalL11", 3), dd.addUniform("vSphericalL2_2", 3), dd.addUniform("vSphericalL2_1", 3), dd.addUniform("vSphericalL20", 3), dd.addUniform("vSphericalL21", 3), dd.addUniform("vSphericalL22", 3), dd.addUniform("vSphericalX", 3), dd.addUniform("vSphericalY", 3), dd.addUniform("vSphericalZ", 3), dd.addUniform("vSphericalXX_ZZ", 3), dd.addUniform("vSphericalYY_ZZ", 3), dd.addUniform("vSphericalZZ", 3), dd.addUniform("vSphericalXY", 3), dd.addUniform("vSphericalYZ", 3), dd.addUniform("vSphericalZX", 3))
    }
  },
  42262: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(38636),
      Fd = md(42208);
    class Rd extends Fd.b {
      constructor(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(dd, Od, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Wd.d, this._storeEffectOnSubMeshes = md
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(dd, Od) {
        return !!dd && (!this._storeEffectOnSubMeshes || (!dd.ZE || 0 === dd.ZE.length || this.isReadyForSubMesh(dd, dd.ZE[0], Od)))
      }
      _isReadyForSubMesh(dd) {
        const Od = dd.materialDefines;
        return !(this.checkReadyOnEveryCall || !dd.effect || !Od || Od._renderId !== this.zV().getRenderId())
      }
      bindOnlyWorldMatrix(dd) {
        this._activeEffect.setMatrix("world", dd)
      }
      bindOnlyNormalMatrix(dd) {
        this._activeEffect.setMatrix("normalMatrix", dd)
      }
      bind(dd, Od) {
        Od && this.bindForSubMesh(dd, Od, Od.ZE[0])
      }
      _afterBind(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(dd, Od, md), this.zV()._cachedEffect = Od, md ? md._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return md._drawWrapper._forceRebindOnNextCall || dd.isCachedMaterialInvalid(this, Od, Wd)
      }
      dispose(dd, Od, md) {
        this._activeEffect = void 0, super.dispose(dd, Od, md)
      }
    }
  },
  42285: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      f: () => Fd
    });
    const Wd = new WeakMap;

    function Fd(dd) {
      const Od = dd.getVertexBuffers();
      if (!Od) return null;
      let md = Wd.get(dd);
      if (md) {
        let dd = !1;
        for (const Wd in Od)
          if (!md.has(Wd)) {
            dd = !0;
            break
          } if (!dd) return md
      } else md = new Map, Wd.set(dd, md);
      for (const Wd in Od) {
        const dd = Od[Wd];
        if (dd) {
          const Od = dd.byteOffset,
            Fd = dd.byteStride,
            Rd = dd.type,
            Xd = dd.normalized;
          md.set(Wd, {
            offset: Od,
            stride: Fd,
            type: Rd,
            normalized: Xd
          })
        }
      }
      return md
    }

    function Rd(dd, Od) {
      Od.forEach(((Od, md) => {
        const Wd = `vp_${md}_info`;
        dd.setFloat4(Wd, Od.offset, Od.stride, Od.type, Od.normalized ? 1 : 0)
      }))
    }
  },
  42233: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => hd
    });
    var Wd = md(41922),
      Fd = md(38636),
      Rd = md(41931);
    let Xd = (() => {
      var dd;
      let Od, md, Fd = [];
      return dd = class {
        static extractMinAndMaxIndexed(dd, Od, md, Wd, Fd, Rd) {
          for (let Xd = md; Xd < md + Wd; Xd++) {
            const md = 3 * Od[Xd],
              Wd = dd[md],
              Kd = dd[md + 1],
              hd = dd[md + 2];
            Fd.minimizeInPlaceFromFloats(Wd, Kd, hd), Rd.maximizeInPlaceFromFloats(Wd, Kd, hd)
          }
        }
        static extractMinAndMax(dd, Od, md, Wd, Fd, Rd) {
          for (let Xd = Od, Kd = Od * Wd; Xd < Od + md; Xd++, Kd += Wd) {
            const Od = dd[Kd],
              md = dd[Kd + 1],
              Wd = dd[Kd + 2];
            Fd.minimizeInPlaceFromFloats(Od, md, Wd), Rd.maximizeInPlaceFromFloats(Od, md, Wd)
          }
        }
      }, (() => {
        const Xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [Rd.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], md = [Rd.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Wd.h)(dd, null, Od, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: dd => "extractMinAndMaxIndexed" in dd,
            get: dd => dd.extractMinAndMaxIndexed
          },
          metadata: Xd
        }, null, Fd), (0, Wd.h)(dd, null, md, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: dd => "extractMinAndMax" in dd,
            get: dd => dd.extractMinAndMax
          },
          metadata: Xd
        }, null, Fd), Xd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xd
        }), (0, Wd.k)(dd, Fd)
      })(), dd
    })();

    function Kd(dd, Od, md, Wd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Kd = new Fd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        hd = new Fd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Xd.extractMinAndMaxIndexed(dd, Od, md, Wd, Kd, hd), Rd && (Kd.x -= Kd.x * Rd.x + Rd.y, Kd.y -= Kd.y * Rd.x + Rd.y, Kd.z -= Kd.z * Rd.x + Rd.y, hd.x += hd.x * Rd.x + Rd.y, hd.y += hd.y * Rd.x + Rd.y, hd.z += hd.z * Rd.x + Rd.y), {
        minimum: Kd,
        maximum: hd
      }
    }

    function hd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Rd = arguments.length > 4 ? arguments[4] : void 0;
      const Kd = new Fd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        hd = new Fd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Rd || (Rd = 3), Xd.extractMinAndMax(dd, Od, md, Rd, Kd, hd), Wd && (Kd.x -= Kd.x * Wd.x + Wd.y, Kd.y -= Kd.y * Wd.x + Wd.y, Kd.z -= Kd.z * Wd.x + Wd.y, hd.x += hd.x * Wd.x + Wd.y, hd.y += hd.y * Wd.x + Wd.y, hd.z += hd.z * Wd.x + Wd.y), {
        minimum: Kd,
        maximum: hd
      }
    }
  },
  42217: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd
    });
    var Wd, Fd = md(42075),
      Rd = md(42221),
      Xd = md(42225),
      Kd = md(42233),
      hd = md(42240),
      vd = md(41817);
    class Qd {
      get materialDefines() {
        const dd = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof dd ? null : dd
      }
      set materialDefines(dd) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = dd
      }
      _getDrawWrapper(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        dd = dd ?? this._engine.currentRenderPassId;
        let md = this._drawWrappers[dd];
        return !md && Od && (this._drawWrappers[dd] = md = new hd.b(this._mesh.zV().Iq())), md
      }
      _removeDrawWrapper(dd) {
        let Od = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[dd]?.dispose(Od), this._drawWrappers[dd] = void 0
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
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Fd = this._drawWrapper;
        Fd.setEffect(dd, Od, Wd), void 0 !== md && (Fd.materialContext = md), dd || (Fd.defines = null, Fd.materialContext = void 0)
      }
      resetDrawCache(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== dd) return void this._removeDrawWrapper(dd, !0, Od);
          for (const dd of this._drawWrappers) dd?.dispose(Od)
        }
        this._drawWrappers = []
      }
      static AddToMesh(dd, Od, md, Wd, Fd, Rd, Xd) {
        return new Qd(dd, Od, md, Wd, Fd, Rd, Xd, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(dd, Od, md, Wd, Fd, Rd, Xd) {
        let Kd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          hd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = dd, this.verticesStart = Od, this.verticesCount = md, this.indexStart = Wd, this.indexCount = Fd, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Rd, this._renderingMesh = Xd || Rd, hd && Rd.ZE.push(this), this._engine = this._mesh.zV().Iq(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Rd.ZE.length - 1, Kd && (this.refreshBoundingInfo(), Rd.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      iG() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.iG() : this._boundingInfo
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
      fq() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Od = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Od) return dd && this._mesh.zV()._hasDefaultMaterial ? this._mesh.zV().defaultMaterial : null;
        if (this._isMultiMaterial(Od)) {
          const dd = Od.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== dd && (this._currentMaterial = dd, this.resetDrawCache()), dd
        }
        return Od
      }
      _isMultiMaterial(dd) {
        return void 0 !== dd.getSubMaterial
      }
      refreshBoundingInfo() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (dd || (dd = this._renderingMesh.getVerticesData(Fd.j.PositionKind)), !dd) return this._boundingInfo = this._mesh.iG(), this;
        const Od = this._renderingMesh.jRd();
        let md;
        if (0 === this.indexStart && this.indexCount === Od.length) {
          const dd = this._renderingMesh.iG();
          md = {
            minimum: dd.minimum.clone(),
            maximum: dd.maximum.clone()
          }
        } else md = (0, Kd.d)(dd, Od, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(md.minimum, md.maximum) : this._boundingInfo = new Xd.c(md.minimum, md.maximum), this
      }
      _checkCollision(dd) {
        return this.iG()._checkCollision(dd)
      }
      updateBoundingInfo(dd) {
        let Od = this.iG();
        return Od || (this.refreshBoundingInfo(), Od = this.iG()), Od && Od.update(dd), this
      }
      isInFrustum(dd) {
        const Od = this.iG();
        return !!Od && Od.isInFrustum(dd, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(dd) {
        const Od = this.iG();
        return !!Od && Od.isCompletelyInFrustum(dd)
      }
      render(dd) {
        return this._renderingMesh.render(this, dd, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(dd, Od) {
        if (!this._linesIndexBuffer) {
          const md = 6 * Math.floor(this.indexCount / 3),
            Wd = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(md) : new Uint16Array(md);
          let Fd = 0;
          if (0 === dd.length)
            for (let dd = this.indexStart; dd < this.indexStart + this.indexCount; dd += 3) Wd[Fd++] = dd, Wd[Fd++] = dd + 1, Wd[Fd++] = dd + 1, Wd[Fd++] = dd + 2, Wd[Fd++] = dd + 2, Wd[Fd++] = dd;
          else
            for (let Od = this.indexStart; Od < this.indexStart + this.indexCount; Od += 3) Wd[Fd++] = dd[Od], Wd[Fd++] = dd[Od + 1], Wd[Fd++] = dd[Od + 1], Wd[Fd++] = dd[Od + 2], Wd[Fd++] = dd[Od + 2], Wd[Fd++] = dd[Od];
          this._linesIndexBuffer = Od.createIndexBuffer(Wd), this._linesIndexCount = Wd.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(dd) {
        const Od = this.iG();
        return !!Od && dd.intersectsBox(Od.boundingBox)
      }
      intersects(dd, Od, md, Wd, Fd) {
        const Rd = this.fq();
        if (!Rd) return null;
        let Xd = 3,
          Kd = !1;
        switch (Rd.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Xd = 1, Kd = !0
        }
        return 4 === Rd.fillMode ? md.length ? this._intersectLines(dd, Od, md, this._mesh.intersectionThreshold, Wd) : this._intersectUnIndexedLines(dd, Od, md, this._mesh.intersectionThreshold, Wd) : !md.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(dd, Od, md, Wd, Fd) : this._intersectTriangles(dd, Od, md, Xd, Kd, Wd, Fd)
      }
      _intersectLines(dd, Od, md, Wd, Fd) {
        let Xd = null;
        for (let Kd = this.indexStart; Kd < this.indexStart + this.indexCount; Kd += 2) {
          const hd = Od[md[Kd]],
            vd = Od[md[Kd + 1]],
            Qd = dd.intersectionSegment(hd, vd, Wd);
          if (!(Qd < 0) && ((Fd || !Xd || Qd < Xd.distance) && (Xd = new Rd.d(null, null, Qd), Xd.faceId = Kd / 2, Fd))) break
        }
        return Xd
      }
      _intersectUnIndexedLines(dd, Od, md, Wd, Fd) {
        let Xd = null;
        for (let Kd = this.verticesStart; Kd < this.verticesStart + this.verticesCount; Kd += 2) {
          const md = Od[Kd],
            hd = Od[Kd + 1],
            vd = dd.intersectionSegment(md, hd, Wd);
          if (!(vd < 0) && ((Fd || !Xd || vd < Xd.distance) && (Xd = new Rd.d(null, null, vd), Xd.faceId = Kd / 2, Fd))) break
        }
        return Xd
      }
      _intersectTriangles(dd, Od, md, Wd, Fd, Rd, Xd) {
        let Kd = null,
          hd = -1;
        for (let vd = this.indexStart; vd < this.indexStart + this.indexCount - (3 - Wd); vd += Wd) {
          hd++;
          const Wd = md[vd],
            Qd = md[vd + 1],
            td = md[vd + 2];
          if (Fd && 4294967295 === td) {
            vd += 2;
            continue
          }
          const od = Od[Wd],
            Nd = Od[Qd],
            qd = Od[td];
          if (!od || !Nd || !qd) continue;
          if (Xd && !Xd(od, Nd, qd, dd, Wd, Qd, td)) continue;
          const Hd = dd.intersectsTriangle(od, Nd, qd);
          if (Hd) {
            if (Hd.distance < 0) continue;
            if ((Rd || !Kd || Hd.distance < Kd.distance) && (Kd = Hd, Kd.faceId = hd, Rd)) break
          }
        }
        return Kd
      }
      _intersectUnIndexedTriangles(dd, Od, md, Wd, Fd) {
        let Rd = null;
        for (let Xd = this.verticesStart; Xd < this.verticesStart + this.verticesCount; Xd += 3) {
          const md = Od[Xd],
            Kd = Od[Xd + 1],
            hd = Od[Xd + 2];
          if (Fd && !Fd(md, Kd, hd, dd, -1, -1, -1)) continue;
          const vd = dd.intersectsTriangle(md, Kd, hd);
          if (vd) {
            if (vd.distance < 0) continue;
            if ((Wd || !Rd || vd.distance < Rd.distance) && (Rd = vd, Rd.faceId = Xd / 3, Wd)) break
          }
        }
        return Rd
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(dd, Od) {
        const md = new Qd(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, dd, Od, !1);
        if (!this.IsGlobal) {
          const dd = this.iG();
          if (!dd) return md;
          md._boundingInfo = new Xd.c(dd.minimum, dd.maximum)
        }
        return md
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.zV().Iq()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Od = this._mesh.ZE.indexOf(this);
        this._mesh.ZE.splice(Od, 1), this.resetDrawCache(void 0, dd)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(dd, Od, md, Wd, Fd) {
        let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = Number.MAX_VALUE,
          Kd = -Number.MAX_VALUE;
        const hd = (Fd || Wd).jRd();
        for (let vd = Od; vd < Od + md; vd++) {
          const dd = hd[vd];
          dd < Xd && (Xd = dd), dd > Kd && (Kd = dd)
        }
        return new Qd(dd, Xd, Kd - Xd + 1, Od, md, Wd, Fd, Rd)
      }
    }(Wd = Qd.prototype).projectToRef ?? (Wd.projectToRef = (0, vd.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);