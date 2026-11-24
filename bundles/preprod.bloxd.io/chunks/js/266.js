export const id = 266;
export const ids = [266];
export const modules = {
  40489: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      constructor(pp, ip, cp) {
        this.bu = pp, this.bv = ip, this.distance = cp, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40504: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(37329),
      op = cp(37320),
      Ip = cp(37324);
    class Sp {
      constructor(pp, ip, cp) {
        this.vectors = (0, Op.d)(8, op.o.Zero), this.center = op.o.Zero(), this.centerWorld = op.o.Zero(), this.extendSize = op.o.Zero(), this.extendSizeWorld = op.o.Zero(), this.directions = (0, Op.d)(3, op.o.Zero), this.vectorsWorld = (0, Op.d)(8, op.o.Zero), this.minimumWorld = op.o.Zero(), this.maximumWorld = op.o.Zero(), this.minimum = op.o.Zero(), this.maximum = op.o.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(pp, ip, cp)
      }
      reConstruct(pp, ip, cp) {
        const Op = pp.x,
          Ip = pp.y,
          Sp = pp.z,
          xp = ip.x,
          Lp = ip.y,
          Yp = ip.z,
          Dp = this.vectors;
        this.minimum.i5(Op, Ip, Sp), this.maximum.i5(xp, Lp, Yp), Dp[0].i5(Op, Ip, Sp), Dp[1].i5(xp, Lp, Yp), Dp[2].i5(xp, Ip, Sp), Dp[3].i5(Op, Lp, Sp), Dp[4].i5(Op, Ip, Yp), Dp[5].i5(xp, Lp, Sp), Dp[6].i5(Op, Lp, Yp), Dp[7].i5(xp, Ip, Yp), ip.addToRef(pp, this.center).scaleInPlace(.5), ip.subtractToRef(pp, this.extendSize).scaleInPlace(.5), this._worldMatrix = cp || op.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(pp) {
        const ip = Sp._TmpVector3,
          cp = this.maximum.subtractToRef(this.minimum, ip[0]),
          Op = cp.length();
        cp.normalizeFromLength(Op);
        const op = Op * pp,
          Ip = cp.scaleInPlace(.5 * op),
          xp = this.center.subtractToRef(Ip, ip[1]),
          Lp = this.center.addToRef(Ip, ip[2]);
        return this.reConstruct(xp, Lp, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(pp) {
        const ip = this.minimumWorld,
          cp = this.maximumWorld,
          Op = this.directions,
          Ip = this.vectorsWorld,
          Sp = this.vectors;
        if (pp.isIdentity()) {
          ip.rM(this.minimum), cp.rM(this.maximum);
          for (let pp = 0; pp < 8; ++pp) Ip[pp].rM(Sp[pp]);
          this.extendSizeWorld.rM(this.extendSize), this.centerWorld.rM(this.center)
        } else {
          ip.E_(Number.MAX_VALUE), cp.E_(-Number.MAX_VALUE);
          for (let Op = 0; Op < 8; ++Op) {
            const xp = Ip[Op];
            op.o.TransformCoordinatesToRef(Sp[Op], pp, xp), ip.minimizeInPlace(xp), cp.maximizeInPlace(xp)
          }
          cp.subtractToRef(ip, this.extendSizeWorld).scaleInPlace(.5), cp.addToRef(ip, this.centerWorld).scaleInPlace(.5)
        }
        op.o.FromArrayToRef(pp.m, 0, Op[0]), op.o.FromArrayToRef(pp.m, 4, Op[1]), op.o.FromArrayToRef(pp.m, 8, Op[2]), this._worldMatrix = pp
      }
      isInFrustum(pp) {
        return Sp.IsInFrustum(this.vectorsWorld, pp)
      }
      isCompletelyInFrustum(pp) {
        return Sp.IsCompletelyInFrustum(this.vectorsWorld, pp)
      }
      intersectsPoint(pp) {
        const ip = this.minimumWorld,
          cp = this.maximumWorld,
          Op = ip.x,
          op = ip.y,
          Sp = ip.z,
          xp = cp.x,
          Lp = cp.y,
          Yp = cp.z,
          Dp = pp.x,
          Ap = pp.y,
          Pp = pp.z,
          Wp = -Ip.b;
        return !(xp - Dp < Wp || Wp > Dp - Op) && (!(Lp - Ap < Wp || Wp > Ap - op) && !(Yp - Pp < Wp || Wp > Pp - Sp))
      }
      intersectsSphere(pp) {
        return Sp.IntersectsSphere(this.minimumWorld, this.maximumWorld, pp.centerWorld, pp.radiusWorld)
      }
      intersectsMinMax(pp, ip) {
        const cp = this.minimumWorld,
          Op = this.maximumWorld,
          op = cp.x,
          Ip = cp.y,
          Sp = cp.z,
          xp = Op.x,
          Lp = Op.y,
          Yp = Op.z,
          Dp = pp.x,
          Ap = pp.y,
          Pp = pp.z,
          Wp = ip.x,
          yp = ip.y,
          Up = ip.z;
        return !(xp < Dp || op > Wp) && (!(Lp < Ap || Ip > yp) && !(Yp < Pp || Sp > Up))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(pp, ip) {
        return pp.intersectsMinMax(ip.minimumWorld, ip.maximumWorld)
      }
      static IntersectsSphere(pp, ip, cp, Op) {
        const Ip = Sp._TmpVector3[0];
        op.o.ClampToRef(cp, pp, ip, Ip);
        return op.o.DistanceSquared(cp, Ip) <= Op * Op
      }
      static IsCompletelyInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; ++cp) {
          const Op = ip[cp];
          for (let ip = 0; ip < 8; ++ip)
            if (Op.dotCoordinate(pp[ip]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; ++cp) {
          let Op = !0;
          const op = ip[cp];
          for (let ip = 0; ip < 8; ++ip)
            if (op.dotCoordinate(pp[ip]) >= 0) {
              Op = !1;
              break
            } if (Op) return !1
        }
        return !0
      }
    }
    Sp._TmpVector3 = (0, Op.d)(3, op.o.Zero)
  },
  40498: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap
    });
    var Op = cp(37329),
      op = cp(37320),
      Ip = cp(40504);
    class Sp {
      constructor(pp, ip, cp) {
        this.center = op.o.Zero(), this.centerWorld = op.o.Zero(), this.minimum = op.o.Zero(), this.maximum = op.o.Zero(), this.reConstruct(pp, ip, cp)
      }
      reConstruct(pp, ip, cp) {
        this.minimum.rM(pp), this.maximum.rM(ip);
        const Op = op.o.Distance(pp, ip);
        ip.addToRef(pp, this.center).scaleInPlace(.5), this.radius = .5 * Op, this._update(cp || op.b.IdentityReadOnly)
      }
      scale(pp) {
        const ip = Sp._TmpVector3,
          cp = this.maximum.subtractToRef(this.minimum, ip[0]),
          Op = cp.length();
        cp.normalizeFromLength(Op);
        const op = Op * pp,
          Ip = cp.scaleInPlace(.5 * op),
          xp = this.center.subtractToRef(Ip, ip[1]),
          Lp = this.center.addToRef(Ip, ip[2]);
        return this.reConstruct(xp, Lp, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(pp) {
        if (pp.isIdentity()) this.centerWorld.rM(this.center), this.radiusWorld = this.radius;
        else {
          op.o.TransformCoordinatesToRef(this.center, pp, this.centerWorld);
          const ip = Sp._TmpVector3[0];
          op.o.TransformNormalFromFloatsToRef(1, 1, 1, pp, ip), this.radiusWorld = Math.max(Math.abs(ip.x), Math.abs(ip.y), Math.abs(ip.z)) * this.radius
        }
      }
      isInFrustum(pp) {
        const ip = this.centerWorld,
          cp = this.radiusWorld;
        for (let Op = 0; Op < 6; Op++)
          if (pp[Op].dotCoordinate(ip) <= -cp) return !1;
        return !0
      }
      isCenterInFrustum(pp) {
        const ip = this.centerWorld;
        for (let cp = 0; cp < 6; cp++)
          if (pp[cp].dotCoordinate(ip) < 0) return !1;
        return !0
      }
      intersectsPoint(pp) {
        const ip = op.o.DistanceSquared(this.centerWorld, pp);
        return !(this.radiusWorld * this.radiusWorld < ip)
      }
      static Intersects(pp, ip) {
        const cp = op.o.DistanceSquared(pp.centerWorld, ip.centerWorld),
          Op = pp.radiusWorld + ip.radiusWorld;
        return !(Op * Op < cp)
      }
      static CreateFromCenterAndRadius(pp, ip, cp) {
        this._TmpVector3[0].rM(pp), this._TmpVector3[1].i5(0, 0, ip), this._TmpVector3[2].rM(pp), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Iop(this._TmpVector3[1]);
        const Op = new Sp(this._TmpVector3[0], this._TmpVector3[2]);
        return Op._worldMatrix = cp || op.b.Identity(), Op
      }
    }
    Sp._TmpVector3 = (0, Op.d)(3, op.o.Zero);
    const xp = {
        min: 0,
        max: 0
      },
      Lp = {
        min: 0,
        max: 0
      },
      Yp = (pp, ip, cp) => {
        const Op = op.o.Dot(ip.centerWorld, pp),
          Ip = Math.abs(op.o.Dot(ip.directions[0], pp)) * ip.extendSize.x + Math.abs(op.o.Dot(ip.directions[1], pp)) * ip.extendSize.y + Math.abs(op.o.Dot(ip.directions[2], pp)) * ip.extendSize.z;
        cp.min = Op - Ip, cp.max = Op + Ip
      },
      Dp = (pp, ip, cp) => (Yp(pp, ip, xp), Yp(pp, cp, Lp), !(xp.min > Lp.max || Lp.min > xp.max));
    class Ap {
      constructor(pp, ip, cp) {
        this._isLocked = !1, this.boundingBox = new Ip.d(pp, ip, cp), this.Yop = new Sp(pp, ip, cp)
      }
      reConstruct(pp, ip, cp) {
        this.boundingBox.reConstruct(pp, ip, cp), this.Yop.reConstruct(pp, ip, cp)
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
      set isLocked(pp) {
        this._isLocked = pp
      }
      update(pp) {
        this._isLocked || (this.boundingBox._update(pp), this.Yop._update(pp))
      }
      centerOn(pp, ip) {
        const cp = Ap._TmpVector3[0].rM(pp).Iop(ip),
          Op = Ap._TmpVector3[1].rM(pp).addInPlace(ip);
        return this.boundingBox.reConstruct(cp, Op, this.boundingBox.getWorldMatrix()), this.Yop.reConstruct(cp, Op, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(pp) {
        const ip = op.o.Minimize(this.minimum, pp),
          cp = op.o.Maximize(this.maximum, pp);
        return this.reConstruct(ip, cp, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(pp) {
        const ip = op.i.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(ip);
        const cp = op.i.Zy[0];
        return op.o.TransformCoordinatesToRef(pp.boundingBox.minimumWorld, ip, cp), this.encapsulate(cp), op.o.TransformCoordinatesToRef(pp.boundingBox.maximumWorld, ip, cp), this.encapsulate(cp), this
      }
      scale(pp) {
        return this.boundingBox.scale(pp), this.Yop.scale(pp), this
      }
      isInFrustum(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === ip || 3 === ip) && this.Yop.isCenterInFrustum(pp)) return !0;
        if (!this.Yop.isInFrustum(pp)) return !1;
        return !(1 !== ip && 3 !== ip) || this.boundingBox.isInFrustum(pp)
      }
      get diagonalLength() {
        const pp = this.boundingBox;
        return pp.maximumWorld.subtractToRef(pp.minimumWorld, Ap._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(pp) {
        return this.boundingBox.isCompletelyInFrustum(pp)
      }
      _checkCollision(pp) {
        return pp._canDoCollision(this.Yop.centerWorld, this.Yop.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(pp) {
        return !!this.Yop.centerWorld && (!!this.Yop.intersectsPoint(pp) && !!this.boundingBox.intersectsPoint(pp))
      }
      intersects(pp, ip) {
        if (!Sp.Intersects(this.Yop, pp.Yop)) return !1;
        if (!Ip.d.Intersects(this.boundingBox, pp.boundingBox)) return !1;
        if (!ip) return !0;
        const cp = this.boundingBox,
          Op = pp.boundingBox;
        return !!Dp(cp.directions[0], cp, Op) && (!!Dp(cp.directions[1], cp, Op) && (!!Dp(cp.directions[2], cp, Op) && (!!Dp(Op.directions[0], cp, Op) && (!!Dp(Op.directions[1], cp, Op) && (!!Dp(Op.directions[2], cp, Op) && (!!Dp(op.o.Cross(cp.directions[0], Op.directions[0]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[0], Op.directions[1]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[0], Op.directions[2]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[1], Op.directions[0]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[1], Op.directions[1]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[1], Op.directions[2]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[2], Op.directions[0]), cp, Op) && (!!Dp(op.o.Cross(cp.directions[2], Op.directions[1]), cp, Op) && !!Dp(op.o.Cross(cp.directions[2], Op.directions[2]), cp, Op))))))))))))))
      }
    }
    Ap._TmpVector3 = (0, Op.d)(2, op.o.Zero)
  },
  40516: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => Lp,
      i: () => xp,
      k: () => Sp
    });
    var Op = cp(40352),
      op = cp(37320);

    function Ip(pp) {
      -1 === pp.indexOf("vClipPlane") && pp.push("vClipPlane"), -1 === pp.indexOf("vClipPlane2") && pp.push("vClipPlane2"), -1 === pp.indexOf("vClipPlane3") && pp.push("vClipPlane3"), -1 === pp.indexOf("vClipPlane4") && pp.push("vClipPlane4"), -1 === pp.indexOf("vClipPlane5") && pp.push("vClipPlane5"), -1 === pp.indexOf("vClipPlane6") && pp.push("vClipPlane6")
    }

    function Sp(pp, ip, cp) {
      const Op = !!(pp.clipPlane ?? ip.clipPlane),
        op = !!(pp.clipPlane2 ?? ip.clipPlane2),
        Ip = !!(pp.clipPlane3 ?? ip.clipPlane3),
        Sp = !!(pp.clipPlane4 ?? ip.clipPlane4),
        xp = !!(pp.clipPlane5 ?? ip.clipPlane5),
        Lp = !!(pp.clipPlane6 ?? ip.clipPlane6);
      Op && cp.push("#define CLIPPLANE"), op && cp.push("#define CLIPPLANE2"), Ip && cp.push("#define CLIPPLANE3"), Sp && cp.push("#define CLIPPLANE4"), xp && cp.push("#define CLIPPLANE5"), Lp && cp.push("#define CLIPPLANE6")
    }

    function xp(pp, ip, cp) {
      let Op = !1;
      const op = !!(pp.clipPlane ?? ip.clipPlane),
        Ip = !!(pp.clipPlane2 ?? ip.clipPlane2),
        Sp = !!(pp.clipPlane3 ?? ip.clipPlane3),
        xp = !!(pp.clipPlane4 ?? ip.clipPlane4),
        Lp = !!(pp.clipPlane5 ?? ip.clipPlane5),
        Yp = !!(pp.clipPlane6 ?? ip.clipPlane6);
      return cp.CLIPPLANE !== op && (cp.CLIPPLANE = op, Op = !0), cp.CLIPPLANE2 !== Ip && (cp.CLIPPLANE2 = Ip, Op = !0), cp.CLIPPLANE3 !== Sp && (cp.CLIPPLANE3 = Sp, Op = !0), cp.CLIPPLANE4 !== xp && (cp.CLIPPLANE4 = xp, Op = !0), cp.CLIPPLANE5 !== Lp && (cp.CLIPPLANE5 = Lp, Op = !0), cp.CLIPPLANE6 !== Yp && (cp.CLIPPLANE6 = Yp, Op = !0), Op
    }

    function Lp(pp, ip, cp) {
      let Op = ip.clipPlane ?? cp.clipPlane;
      Yp(pp, "vClipPlane", Op), Op = ip.clipPlane2 ?? cp.clipPlane2, Yp(pp, "vClipPlane2", Op), Op = ip.clipPlane3 ?? cp.clipPlane3, Yp(pp, "vClipPlane3", Op), Op = ip.clipPlane4 ?? cp.clipPlane4, Yp(pp, "vClipPlane4", Op), Op = ip.clipPlane5 ?? cp.clipPlane5, Yp(pp, "vClipPlane5", Op), Op = ip.clipPlane6 ?? cp.clipPlane6, Yp(pp, "vClipPlane6", Op)
    }

    function Yp(pp, ip, cp) {
      if (cp) {
        const Ip = Op.c.Gl()?.floatingOriginOffset || op.o.ZeroReadOnly;
        pp.setFloat4(ip, cp.normal.x, cp.normal.y, cp.normal.z, cp.d + op.o.Dot(cp.normal, Ip))
      }
    }
  },
  40530: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(pp, ip) {
        this._defines[pp] || (pp < this._currentRank && (this._currentRank = pp), pp > this._maxRank && (this._maxRank = pp), this._defines[pp] = new Array), this._defines[pp].push(ip)
      }
      addCPUSkinningFallback(pp, ip) {
        this._mesh = ip, pp < this._currentRank && (this._currentRank = pp), pp > this._maxRank && (this._maxRank = pp)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(pp, ip) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, pp = pp.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), ip._bonesComputationForcedToCPU = !0;
          const cp = this._mesh.Gl();
          for (let pp = 0; pp < cp.meshes.length; pp++) {
            const Op = cp.meshes[pp];
            if (Op.material) {
              if (Op.computeBonesUsingShaders && 0 !== Op.numBoneInfluencers)
                if (Op.material.getEffect() === ip) Op.computeBonesUsingShaders = !1;
                else if (Op.Am)
                for (const pp of Op.Am) {
                  if (pp.effect === ip) {
                    Op.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Op.computeBonesUsingShaders && Op.numBoneInfluencers > 0 && (Op.computeBonesUsingShaders = !1)
          }
        } else {
          const ip = this._defines[this._currentRank];
          if (ip)
            for (let cp = 0; cp < ip.length; cp++) pp = pp.replace("#define " + ip[cp], "");
          this._currentRank++
        }
        return pp
      }
    }
  },
  40476: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => tp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40304),
      Sp = cp(37349),
      xp = cp(37345),
      Lp = cp(40481),
      Yp = cp(40332),
      Dp = cp(38905),
      Ap = cp(37989),
      Pp = cp(40509),
      Wp = cp(40233);
    let yp = (() => {
      var pp;
      let ip, cp, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, yp, Up, wp = [];
      return pp = class {
        constructor() {
          this._func = (0, Op.l)(this, wp), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(pp) {
          this._func = pp
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(pp) {
          this._backFunc = pp
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(pp) {
          this._funcRef = pp
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(pp) {
          this._funcMask = pp
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(pp) {
          this._opStencilFail = pp
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(pp) {
          this._opDepthFail = pp
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(pp) {
          this._opStencilDepthPass = pp
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(pp) {
          this._backOpStencilFail = pp
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(pp) {
          this._backOpDepthFail = pp
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(pp) {
          this._backOpStencilDepthPass = pp
        }
        get mask() {
          return this._mask
        }
        set mask(pp) {
          this._mask = pp
        }
        get enabled() {
          return this._enabled
        }
        set enabled(pp) {
          this._enabled = pp
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(pp) {
          Wp.c.Clone((() => pp), this)
        }
        serialize() {
          return Wp.c.Serialize(this)
        }
        parse(pp, ip, cp) {
          Wp.c.Parse((() => this), pp, ip, cp)
        }
      }, (() => {
        const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], (0, Op.j)(pp, null, ip, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: pp => "func" in pp,
            get: pp => pp.func
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, cp, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: pp => "backFunc" in pp,
            get: pp => pp.backFunc
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Ip, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: pp => "funcRef" in pp,
            get: pp => pp.funcRef
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Sp, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: pp => "funcMask" in pp,
            get: pp => pp.funcMask
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, xp, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: pp => "opStencilFail" in pp,
            get: pp => pp.opStencilFail
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Lp, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: pp => "opDepthFail" in pp,
            get: pp => pp.opDepthFail
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Yp, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: pp => "opStencilDepthPass" in pp,
            get: pp => pp.opStencilDepthPass
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Dp, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: pp => "backOpStencilFail" in pp,
            get: pp => pp.backOpStencilFail
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Ap, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: pp => "backOpDepthFail" in pp,
            get: pp => pp.backOpDepthFail
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Pp, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: pp => "backOpStencilDepthPass" in pp,
            get: pp => pp.backOpStencilDepthPass
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, yp, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: pp => "mask" in pp,
            get: pp => pp.mask
          },
          metadata: Wp
        }, null, wp), (0, Op.j)(pp, null, Up, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "enabled" in pp,
            get: pp => pp.enabled
          },
          metadata: Wp
        }, null, wp), Wp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wp
        })
      })(), pp
    })();
    var Up = cp(40512),
      wp = cp(40127),
      vp = cp(40096);
    let tp = (() => {
      var pp;
      let ip, cp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp = [],
        rp = [],
        Zp = [],
        zp = [],
        sp = [],
        Kp = [],
        Vp = [],
        ii = [],
        ci = [],
        Oi = [],
        oi = [],
        Ii = [],
        Si = [],
        xi = [],
        Li = [],
        Yi = [],
        Di = [],
        Ai = [],
        Pi = [],
        Wi = [],
        yi = [],
        Ui = [],
        wi = [],
        vi = [],
        ti = [],
        Hi = [],
        di = [],
        ei = [],
        ui = [],
        ji = [],
        ki = [],
        mi = [],
        Ri = [],
        qi = [],
        Mi = [],
        Ci = [],
        Ei = [],
        Xi = [],
        li = [],
        Qi = [],
        Ji = [],
        Bi = [],
        Ni = [],
        Ti = [],
        fi = [],
        bi = [],
        ai = [],
        ni = [],
        Fi = [],
        gi = [],
        Gi = [];
      return pp = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(ip) {
          this._useVertexPulling !== ip && (this._useVertexPulling = ip, this.ocp(pp.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(pp) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(ip) {
          if (this._alpha === ip) return;
          const cp = this._alpha;
          this._alpha = ip, 1 !== cp && 1 !== ip || this.ocp(pp.MiscDirtyFlag + pp.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(ip) {
          this._backFaceCulling !== ip && (this._backFaceCulling = ip, this.ocp(pp.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(ip) {
          const cp = Math.max(0, Math.min(0 | ip, 4));
          this._textureRepetitionMode !== cp && (this._textureRepetitionMode = cp, this.ocp(pp.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(ip) {
          this._cullBackFaces !== ip && (this._cullBackFaces = ip, this.ocp(pp.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(pp) {
          this._blockDirtyMechanism !== pp && (this._blockDirtyMechanism = pp, pp || this.markDirty())
        }
        atomicMaterialsUpdate(pp) {
          this.blockDirtyMechanism = !0;
          try {
            pp(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(pp) {
          this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Sp.d), this._onBindObservable
        }
        set onBind(pp) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(pp)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Sp.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Sp.d), this._onEffectCreatedObservable
        }
        set alphaMode(pp) {
          this._alphaMode[0] = pp
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[cp] !== ip && (this._alphaMode[cp] = ip, this.ocp(pp.TextureDirtyFlag))
        }
        set needDepthPrePass(pp) {
          this._needDepthPrePass !== pp && (this._needDepthPrePass = pp, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(ip) {
          this._fogEnabled !== ip && (this._fogEnabled = ip, this.ocp(pp.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case pp.WireFrameFillMode:
            case pp.LineListDrawMode:
            case pp.LineLoopDrawMode:
            case pp.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(ip) {
          this.fillMode = ip ? pp.WireFrameFillMode : pp.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case pp.PointFillMode:
            case pp.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(ip) {
          this.fillMode = ip ? pp.PointFillMode : pp.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(ip) {
          this._fillMode !== ip && (this._fillMode = ip, this.ocp(pp.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(pp) {
          const ip = this.Gl().gy().getCaps().fragmentDepthSupported;
          pp && !ip && Dp.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = pp && ip, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(pp) {
          this._isVertexOutputInvariant !== pp && (this._isVertexOutputInvariant = pp, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(pp) {
          this._drawWrapper = pp
        }
        constructor(ip, cp, op) {
          let Lp = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Op.l)(this, Gp), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Op.l)(this, rp, void 0), this.uniqueId = ((0, Op.l)(this, Zp), (0, Op.l)(this, zp, void 0)), this._loadedUniqueId = (0, Op.l)(this, sp), this.name = (0, Op.l)(this, Kp, void 0), this.metadata = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, null)), this._internalMetadata = (0, Op.l)(this, ci), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Op.l)(this, Oi, !1), this.checkReadyOnlyOnce = ((0, Op.l)(this, oi), (0, Op.l)(this, Ii, !1)), this.state = ((0, Op.l)(this, Si), (0, Op.l)(this, xi, "")), this._alpha = ((0, Op.l)(this, Li), (0, Op.l)(this, Yi, 1)), this.inspectableCustomProperties = (0, Op.l)(this, Di), this._backFaceCulling = (0, Op.l)(this, Ai, !0), this._textureRepetitionMode = ((0, Op.l)(this, Pi), (0, Op.l)(this, Wi, 0)), this.textureRepetitionHexTilingParams = ((0, Op.l)(this, yi), (0, Op.l)(this, Ui, [1, .6, 7, .5])), this._cullBackFaces = ((0, Op.l)(this, wi), (0, Op.l)(this, vi, !0)), this._blockDirtyMechanism = ((0, Op.l)(this, ti), !1), this.sideOrientation = (0, Op.l)(this, Hi, null), this.onCompiled = ((0, Op.l)(this, di), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Kl = new Sp.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Op.l)(this, ei, [2]), this._needDepthPrePass = ((0, Op.l)(this, ui), (0, Op.l)(this, ji, !1)), this.disableDepthWrite = ((0, Op.l)(this, ki), (0, Op.l)(this, mi, !1)), this.disableColorWrite = ((0, Op.l)(this, Ri), (0, Op.l)(this, qi, !1)), this.forceDepthWrite = ((0, Op.l)(this, Mi), (0, Op.l)(this, Ci, !1)), this.depthFunction = ((0, Op.l)(this, Ei), (0, Op.l)(this, Xi, 0)), this.separateCullingPass = ((0, Op.l)(this, li), (0, Op.l)(this, Qi, !1)), this._fogEnabled = ((0, Op.l)(this, Ji), (0, Op.l)(this, Bi, !0)), this.pointSize = ((0, Op.l)(this, Ni), (0, Op.l)(this, Ti, 1)), this.zOffset = ((0, Op.l)(this, fi), (0, Op.l)(this, bi, 0)), this.zOffsetUnits = ((0, Op.l)(this, ai), (0, Op.l)(this, ni, 0)), this.clipPlane = (0, Op.l)(this, Fi), this.stencil = new yp, this._isVertexOutputInvariant = (0, Op.l)(this, gi, pp.ForceVertexOutputInvariant), this._materialContext = (0, Op.l)(this, Gi), this._useUBO = !1, this._fillMode = pp.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = ip;
          const Dp = cp || xp.e.LastCreatedScene;
          Dp && (this._scene = Dp, this._dirtyCallbacks = {}, this._forceGLSL = Lp, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = ip || Ip.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.gy().createMaterialContext(), this._drawWrapper = new Pp.e(this._scene.gy(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Yp.b(this._scene.gy(), void 0, void 0, ip), this._useUBO = this.Gl().gy().supportsUniformBuffers, this._createUniformBuffer(), op || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), pp.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const pp = this.Gl().gy();
          this._uniformBuffer?.dispose(), pp.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Yp.b(pp, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Yp.b(this._scene.gy(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(pp) {
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
        isReady(pp, ip) {
          return !0
        }
        isReadyForSubMesh(pp, ip, cp) {
          const Op = ip.materialDefines;
          return !!Op && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Op, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Gl() {
          return this._scene
        }
        _getEffectiveOrientation(pp) {
          return null !== this.sideOrientation ? this.sideOrientation : pp.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(pp) {
          this._transparencyMode = pp
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === pp.MATERIAL_ALPHABLEND || this._transparencyMode === pp.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === pp.MATERIAL_ALPHATEST || this._transparencyMode === pp.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === pp.MATERIAL_OPAQUE || this._transparencyMode === pp.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(pp) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : pp.visibility < 1 || !this._disableAlphaBlending && (pp.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(pp) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(pp) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cp = this.Gl().meshes;
          for (const pp of cp)
            if (pp.Am)
              for (const cp of pp.Am)
                if (cp.Ky() === this)
                  for (const pp of cp._drawWrappers) pp && this._materialContext === pp.materialContext && (pp._wasPreviouslyReady = !1, pp._wasPreviouslyUsingInstances = null, pp._forceRebindOnNextCall = ip);
          ip && this.ocp(pp.AllDirtyFlag)
        }
        _preBind(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Op = this._scene.gy(),
            op = (null == cp ? this.sideOrientation : cp) === pp.ClockWiseSideOrientation,
            Ip = ip || this._getDrawWrapper();
          return (0, wp.e)(Ip) && Ip.materialContext && (Ip.materialContext.useVertexPulling = this.useVertexPulling), Op.enableEffect(Ip), Op.setState(this.backFaceCulling, this.zOffset, !1, op, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), op
        }
        bind(pp, ip) {}
        buildUniformLayout() {
          const pp = this._uniformBuffer;
          this._eventInfo.ubo = pp, this._callbackPluginEventGeneric(8, this._eventInfo), pp.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(pp, ip, cp) {
          const Op = cp._drawWrapper;
          this._eventInfo.subMesh = cp, this._callbackPluginEventBindForSubMesh(this._eventInfo), Op._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(pp) {}
        bindView(pp) {
          this._useUBO ? this._needToBindSceneUbo = !0 : pp.setMatrix("view", this.Gl().getViewMatrix())
        }
        bindViewProjection(pp) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (pp.setMatrix("viewProjection", this.Gl().getTransformMatrix()), pp.setMatrix("projection", this.Gl().getProjectionMatrix()), pp.setMatrix("inverseProjection", this.Gl().getInverseProjectionMatrix()))
        }
        bindEyePosition(pp, ip) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(pp, ip)
        }
        _afterBind(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ip && (this._needToBindSceneUbo = !1, (0, Up.y)(ip, this.Gl().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = pp ? pp.visibility : 1, this._onBindObservable && pp && this._onBindObservable.notifyObservers(pp), this.disableDepthWrite) {
            const pp = this._scene.gy();
            this._cachedDepthWriteState = pp.getDepthWrite(), pp.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const pp = this._scene.gy();
            this._cachedColorWriteState = pp.getColorWrite(), pp.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const pp = this._scene.gy();
            this._cachedDepthFunctionState = pp.getDepthFunction() || 0, pp.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.gy().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.gy().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.gy().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(pp) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = pp, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(pp) {
          return null
        }
        _clonePlugins(ip, cp) {
          const Op = {};
          if (this._serializePlugins(Op), pp._ParsePlugins(Op, ip, this._scene, cp), this.pluginManager)
            for (const pp of this.pluginManager._plugins) {
              const cp = ip.pluginManager.getPlugin(pp.name);
              cp && pp.copyTo(cp)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const pp = [];
            for (const ip in this.meshMap) {
              const cp = this.meshMap[ip];
              cp && pp.push(cp)
            }
            return pp
          }
          return this._scene.meshes.filter((pp => pp.material === this))
        }
        forceCompilation(pp, ip, cp, Op) {
          const op = {
              clipPlane: !1,
              useInstances: !1,
              ...cp
            },
            Ip = this.Gl(),
            Sp = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const xp = () => {
            if (!this._scene || !this._scene.gy()) return;
            const cp = Ip.clipPlane;
            if (op.clipPlane && (Ip.clipPlane = new Ap.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let cp = !0,
                Ip = null;
              if (pp.Am) {
                const ip = new Lp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
                ip.materialDefines && (ip.materialDefines._renderId = -1), this.isReadyForSubMesh(pp, ip, op.useInstances) || (ip.effect && ip.effect.getCompilationError() && ip.effect.allFallbacksProcessed() ? Ip = ip.effect.getCompilationError() : (cp = !1, setTimeout(xp, 16)))
              }
              cp && (this.allowShaderHotSwapping = Sp, Ip && Op && Op(Ip), ip && ip(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Sp, ip && ip(this)) : setTimeout(xp, 16);
            op.clipPlane && (Ip.clipPlane = cp)
          };
          xp()
        }
        async forceCompilationAsync(pp, ip) {
          return await new Promise(((cp, Op) => {
            this.forceCompilation(pp, (() => {
              cp()
            }), ip, (pp => {
              Op(pp)
            }))
          }))
        }
        ocp(ip) {
          this.Gl().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (pp._DirtyCallbackArray.length = 0, ip & pp.ImageProcessingDirtyFlag && pp._DirtyCallbackArray.push(pp._ImageProcessingDirtyCallBack), ip & pp.TextureDirtyFlag && pp._DirtyCallbackArray.push(pp._TextureDirtyCallBack), ip & pp.LightDirtyFlag && pp._DirtyCallbackArray.push(pp._LightsDirtyCallBack), ip & pp.FresnelDirtyFlag && pp._DirtyCallbackArray.push(pp._FresnelDirtyCallBack), ip & pp.AttributesDirtyFlag && pp._DirtyCallbackArray.push(pp._AttributeDirtyCallBack), ip & pp.MiscDirtyFlag && pp._DirtyCallbackArray.push(pp._MiscDirtyCallBack), ip & pp.PrePassDirtyFlag && pp._DirtyCallbackArray.push(pp._PrePassDirtyCallBack), pp._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(pp._RunDirtyCallBacks), this.Gl().resetCachedMaterial())
        }
        resetDrawCache() {
          const pp = this.Gl().meshes;
          for (const ip of pp)
            if (ip.Am)
              for (const pp of ip.Am) pp.Ky() === this && pp.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(pp) {
          const ip = this.Gl();
          if (ip.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const cp = ip.meshes;
          for (const Op of cp)
            if (Op.Am)
              for (const cp of Op.Am) {
                if ((cp.Ky() || (ip._hasDefaultMaterial ? ip.defaultMaterial : null)) === this)
                  for (const ip of cp._drawWrappers) ip && ip.defines && ip.defines.markAllAsDirty && this._materialContext === ip.materialContext && pp(ip.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Gl().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const pp = this.Gl().enablePrePassRenderer();
          pp && pp.ocp()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(pp._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(pp._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(pp._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(pp._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(pp._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(pp._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(pp._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(pp._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(pp._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(pp._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const pp = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Kl.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(pp)
            }))
          }
        }
        setPrePassRenderer(pp) {
          return !1
        }
        dispose(pp, ip, cp) {
          const Op = this.Gl();
          if (Op.stopAnimation(this), Op.freeProcessedMaterials(), Op.removeMaterial(this), this._eventInfo.forceDisposeTextures = ip, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const pp = this._parentContainer.materials.indexOf(this);
            pp > -1 && this._parentContainer.materials.splice(pp, 1), this._parentContainer = null
          }
          if (!0 !== cp)
            if (this.meshMap)
              for (const op in this.meshMap) {
                const pp = this.meshMap[op];
                this._disposeMeshResources(pp)
              } else {
                const pp = Op.meshes;
                for (const ip of pp) this._disposeMeshResources(ip)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Kl.notifyObservers(this), this.Kl.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(pp) {
          if (!pp) return;
          const ip = pp.geometry,
            cp = pp._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (pp.Am && cp)
              for (const Op of pp.Am) {
                const pp = Op._drawWrappers;
                for (let op = 0; op < pp.length; op++) {
                  const Ip = pp[op]?.effect;
                  if (!Ip) continue;
                  cp[op] === this && (ip?._releaseVertexArrayObject(Ip), Op._removeDrawWrapper(op, !0, !0))
                }
              }
          } else ip?._releaseVertexArrayObject(this._drawWrapper.effect);
          pp.material !== this || pp.aop || (pp.material = null)
        }
        serialize() {
          const pp = Wp.c.Serialize(this);
          return pp.stencil = this.stencil.serialize(), pp.uniqueId = this.uniqueId, this._serializePlugins(pp), pp
        }
        _serializePlugins(pp) {
          if (pp.plugins = {}, this.pluginManager)
            for (const ip of this.pluginManager._plugins) ip.doNotSerialize || (pp.plugins[ip.getClassName()] = ip.serialize())
        }
        static ParseAlphaMode(pp, ip) {
          void 0 !== pp._alphaMode ? ip._alphaMode = Array.isArray(pp._alphaMode) ? [...pp._alphaMode] : [pp._alphaMode] : void 0 !== pp.alphaMode ? ip._alphaMode = Array.isArray(pp.alphaMode) ? [...pp.alphaMode] : [pp.alphaMode] : ip._alphaMode = [2]
        }
        static Parse(ip, cp, Op) {
          if (ip.customType) {
            if ("BABYLON.PBRMaterial" === ip.customType && ip.overloadedAlbedo && (ip.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Dp.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else ip.customType = "BABYLON.StandardMaterial";
          const op = Ip.i.Instantiate(ip.customType).Parse(ip, cp, Op);
          return op._loadedUniqueId = ip.uniqueId, pp.ParseAlphaMode(ip, op), op
        }
        static _ParsePlugins(pp, ip, cp, Op) {
          if (pp.plugins)
            for (const op in pp.plugins) {
              const Sp = pp.plugins[op];
              let xp = ip.pluginManager?.getPlugin(Sp.name);
              if (!xp) {
                const pp = Ip.i.Instantiate("BABYLON." + op);
                pp && (xp = new pp(ip))
              }
              xp?.parse(Sp, cp, Op)
            }
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, op.K)()], cp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)("alpha")], kp = [(0, op.K)("backFaceCulling")], mp = [(0, op.K)("textureRepetitionMode")], Rp = [(0, op.K)("textureRepetitionHexTilingParams")], qp = [(0, op.K)("cullBackFaces")], Mp = [(0, op.K)()], Cp = [(0, op.K)()], Ep = [(0, op.K)()], Xp = [(0, op.K)()], lp = [(0, op.K)()], Qp = [(0, op.K)()], Jp = [(0, op.K)()], Bp = [(0, op.K)()], Np = [(0, op.K)("fogEnabled")], Tp = [(0, op.K)()], fp = [(0, op.K)()], bp = [(0, op.K)()], hp = [(0, op.K)()], ap = [(0, op.K)()], np = [(0, op.K)()], Fp = [(0, op.K)()], gp = [(0, op.K)()], (0, Op.j)(pp, null, hp, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: pp => "pointsCloud" in pp,
            get: pp => pp.pointsCloud
          },
          metadata: Ip
        }, null, Gp), (0, Op.j)(pp, null, ap, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "fillMode" in pp,
            get: pp => pp.fillMode
          },
          metadata: Ip
        }, null, Gp), (0, Op.j)(pp, null, np, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: pp => "useLogarithmicDepth" in pp,
            get: pp => pp.useLogarithmicDepth
          },
          metadata: Ip
        }, null, Gp), (0, Op.j)(pp, null, gp, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "transparencyMode" in pp,
            get: pp => pp.transparencyMode
          },
          metadata: Ip
        }, null, Gp), (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: pp => "id" in pp,
            get: pp => pp.id,
            set: (pp, ip) => {
              pp.id = ip
            }
          },
          metadata: Ip
        }, rp, Zp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: pp => "uniqueId" in pp,
            get: pp => pp.uniqueId,
            set: (pp, ip) => {
              pp.uniqueId = ip
            }
          },
          metadata: Ip
        }, zp, sp), (0, Op.j)(null, null, vp, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: pp => "name" in pp,
            get: pp => pp.name,
            set: (pp, ip) => {
              pp.name = ip
            }
          },
          metadata: Ip
        }, Kp, Vp), (0, Op.j)(null, null, tp, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: pp => "metadata" in pp,
            get: pp => pp.metadata,
            set: (pp, ip) => {
              pp.metadata = ip
            }
          },
          metadata: Ip
        }, ii, ci), (0, Op.j)(null, null, Hp, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: pp => "checkReadyOnEveryCall" in pp,
            get: pp => pp.checkReadyOnEveryCall,
            set: (pp, ip) => {
              pp.checkReadyOnEveryCall = ip
            }
          },
          metadata: Ip
        }, Oi, oi), (0, Op.j)(null, null, dp, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: pp => "checkReadyOnlyOnce" in pp,
            get: pp => pp.checkReadyOnlyOnce,
            set: (pp, ip) => {
              pp.checkReadyOnlyOnce = ip
            }
          },
          metadata: Ip
        }, Ii, Si), (0, Op.j)(null, null, ep, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: pp => "state" in pp,
            get: pp => pp.state,
            set: (pp, ip) => {
              pp.state = ip
            }
          },
          metadata: Ip
        }, xi, Li), (0, Op.j)(null, null, jp, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "_alpha" in pp,
            get: pp => pp._alpha,
            set: (pp, ip) => {
              pp._alpha = ip
            }
          },
          metadata: Ip
        }, Yi, Di), (0, Op.j)(null, null, kp, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: pp => "_backFaceCulling" in pp,
            get: pp => pp._backFaceCulling,
            set: (pp, ip) => {
              pp._backFaceCulling = ip
            }
          },
          metadata: Ip
        }, Ai, Pi), (0, Op.j)(null, null, mp, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "_textureRepetitionMode" in pp,
            get: pp => pp._textureRepetitionMode,
            set: (pp, ip) => {
              pp._textureRepetitionMode = ip
            }
          },
          metadata: Ip
        }, Wi, yi), (0, Op.j)(null, null, Rp, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: pp => "textureRepetitionHexTilingParams" in pp,
            get: pp => pp.textureRepetitionHexTilingParams,
            set: (pp, ip) => {
              pp.textureRepetitionHexTilingParams = ip
            }
          },
          metadata: Ip
        }, Ui, wi), (0, Op.j)(null, null, qp, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: pp => "_cullBackFaces" in pp,
            get: pp => pp._cullBackFaces,
            set: (pp, ip) => {
              pp._cullBackFaces = ip
            }
          },
          metadata: Ip
        }, vi, ti), (0, Op.j)(null, null, Mp, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: pp => "sideOrientation" in pp,
            get: pp => pp.sideOrientation,
            set: (pp, ip) => {
              pp.sideOrientation = ip
            }
          },
          metadata: Ip
        }, Hi, di), (0, Op.j)(null, null, Cp, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "_alphaMode" in pp,
            get: pp => pp._alphaMode,
            set: (pp, ip) => {
              pp._alphaMode = ip
            }
          },
          metadata: Ip
        }, ei, ui), (0, Op.j)(null, null, Ep, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: pp => "_needDepthPrePass" in pp,
            get: pp => pp._needDepthPrePass,
            set: (pp, ip) => {
              pp._needDepthPrePass = ip
            }
          },
          metadata: Ip
        }, ji, ki), (0, Op.j)(null, null, Xp, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: pp => "disableDepthWrite" in pp,
            get: pp => pp.disableDepthWrite,
            set: (pp, ip) => {
              pp.disableDepthWrite = ip
            }
          },
          metadata: Ip
        }, mi, Ri), (0, Op.j)(null, null, lp, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: pp => "disableColorWrite" in pp,
            get: pp => pp.disableColorWrite,
            set: (pp, ip) => {
              pp.disableColorWrite = ip
            }
          },
          metadata: Ip
        }, qi, Mi), (0, Op.j)(null, null, Qp, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: pp => "forceDepthWrite" in pp,
            get: pp => pp.forceDepthWrite,
            set: (pp, ip) => {
              pp.forceDepthWrite = ip
            }
          },
          metadata: Ip
        }, Ci, Ei), (0, Op.j)(null, null, Jp, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: pp => "depthFunction" in pp,
            get: pp => pp.depthFunction,
            set: (pp, ip) => {
              pp.depthFunction = ip
            }
          },
          metadata: Ip
        }, Xi, li), (0, Op.j)(null, null, Bp, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: pp => "separateCullingPass" in pp,
            get: pp => pp.separateCullingPass,
            set: (pp, ip) => {
              pp.separateCullingPass = ip
            }
          },
          metadata: Ip
        }, Qi, Ji), (0, Op.j)(null, null, Np, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "_fogEnabled" in pp,
            get: pp => pp._fogEnabled,
            set: (pp, ip) => {
              pp._fogEnabled = ip
            }
          },
          metadata: Ip
        }, Bi, Ni), (0, Op.j)(null, null, Tp, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: pp => "pointSize" in pp,
            get: pp => pp.pointSize,
            set: (pp, ip) => {
              pp.pointSize = ip
            }
          },
          metadata: Ip
        }, Ti, fi), (0, Op.j)(null, null, fp, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: pp => "zOffset" in pp,
            get: pp => pp.zOffset,
            set: (pp, ip) => {
              pp.zOffset = ip
            }
          },
          metadata: Ip
        }, bi, ai), (0, Op.j)(null, null, bp, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: pp => "zOffsetUnits" in pp,
            get: pp => pp.zOffsetUnits,
            set: (pp, ip) => {
              pp.zOffsetUnits = ip
            }
          },
          metadata: Ip
        }, ni, Fi), (0, Op.j)(null, null, Fp, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: pp => "_isVertexOutputInvariant" in pp,
            get: pp => pp._isVertexOutputInvariant,
            set: (pp, ip) => {
              pp._isVertexOutputInvariant = ip
            }
          },
          metadata: Ip
        }, gi, Gi), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp.TriangleFillMode = 0, pp.WireFrameFillMode = 1, pp.PointFillMode = 2, pp.PointListDrawMode = 3, pp.LineListDrawMode = 4, pp.LineLoopDrawMode = 5, pp.LineStripDrawMode = 6, pp.TriangleStripDrawMode = 7, pp.TriangleFanDrawMode = 8, pp.ClockWiseSideOrientation = 0, pp.CounterClockWiseSideOrientation = 1, pp.ImageProcessingDirtyFlag = 64, pp.TextureDirtyFlag = 1, pp.LightDirtyFlag = 2, pp.FresnelDirtyFlag = 4, pp.AttributesDirtyFlag = 8, pp.MiscDirtyFlag = 16, pp.PrePassDirtyFlag = 32, pp.AllDirtyFlag = 127, pp.MATERIAL_OPAQUE = 0, pp.MATERIAL_ALPHATEST = 1, pp.MATERIAL_ALPHABLEND = 2, pp.MATERIAL_ALPHATESTANDBLEND = 3, pp.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, pp.MATERIAL_NORMALBLENDMETHOD_RNM = 1, pp.LIGHTFALLOFF_PHYSICAL = 0, pp.LIGHTFALLOFF_GLTF = 1, pp.LIGHTFALLOFF_STANDARD = 2, pp.OnEventObservable = new Sp.d, pp.ForceVertexOutputInvariant = !1, pp._AllDirtyCallBack = pp => pp.markAllAsDirty(), pp._ImageProcessingDirtyCallBack = pp => pp.markAsImageProcessingDirty(), pp._TextureDirtyCallBack = pp => pp.markAsTexturesDirty(), pp._FresnelDirtyCallBack = pp => pp.markAsFresnelDirty(), pp._MiscDirtyCallBack = pp => pp.markAsMiscDirty(), pp._PrePassDirtyCallBack = pp => pp.markAsPrePassDirty(), pp._LightsDirtyCallBack = pp => pp.markAsLightDirty(), pp._AttributeDirtyCallBack = pp => pp.markAsAttributesDirty(), pp._FresnelAndMiscDirtyCallBack = ip => {
        pp._FresnelDirtyCallBack(ip), pp._MiscDirtyCallBack(ip)
      }, pp._TextureAndMiscDirtyCallBack = ip => {
        pp._TextureDirtyCallBack(ip), pp._MiscDirtyCallBack(ip)
      }, pp._DirtyCallbackArray = [], pp._RunDirtyCallBacks = ip => {
        for (const cp of pp._DirtyCallbackArray) cp(ip)
      }, pp
    })();
    Object.getOwnPropertyDescriptor(tp.prototype, "pluginManager") || Object.defineProperty(tp.prototype, "pluginManager", (0, vp.h)("Material", "pluginManager"))
  },
  40519: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(40113);
    class op {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(pp) {
        this._DiffuseTextureEnabled !== pp && (this._DiffuseTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(pp) {
        this._BaseWeightTextureEnabled !== pp && (this._BaseWeightTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(pp) {
        this._BaseDiffuseRoughnessTextureEnabled !== pp && (this._BaseDiffuseRoughnessTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(pp) {
        this._DetailTextureEnabled !== pp && (this._DetailTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(pp) {
        this._DecalMapEnabled !== pp && (this._DecalMapEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(pp) {
        this._AmbientTextureEnabled !== pp && (this._AmbientTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(pp) {
        this._OpacityTextureEnabled !== pp && (this._OpacityTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(pp) {
        this._ReflectionTextureEnabled !== pp && (this._ReflectionTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(pp) {
        this._EmissiveTextureEnabled !== pp && (this._EmissiveTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(pp) {
        this._SpecularTextureEnabled !== pp && (this._SpecularTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(pp) {
        this._BumpTextureEnabled !== pp && (this._BumpTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(pp) {
        this._LightmapTextureEnabled !== pp && (this._LightmapTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(pp) {
        this._RefractionTextureEnabled !== pp && (this._RefractionTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(pp) {
        this._ColorGradingTextureEnabled !== pp && (this._ColorGradingTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(pp) {
        this._FresnelEnabled !== pp && (this._FresnelEnabled = pp, Op.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(pp) {
        this._ClearCoatTextureEnabled !== pp && (this._ClearCoatTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(pp) {
        this._ClearCoatBumpTextureEnabled !== pp && (this._ClearCoatBumpTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(pp) {
        this._ClearCoatTintTextureEnabled !== pp && (this._ClearCoatTintTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(pp) {
        this._SheenTextureEnabled !== pp && (this._SheenTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(pp) {
        this._AnisotropicTextureEnabled !== pp && (this._AnisotropicTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(pp) {
        this._ThicknessTextureEnabled !== pp && (this._ThicknessTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(pp) {
        this._RefractionIntensityTextureEnabled !== pp && (this._RefractionIntensityTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(pp) {
        this._TranslucencyIntensityTextureEnabled !== pp && (this._TranslucencyIntensityTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(pp) {
        this._TranslucencyColorTextureEnabled !== pp && (this._TranslucencyColorTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(pp) {
        this._IridescenceTextureEnabled !== pp && (this._IridescenceTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
      }
    }
    op._DiffuseTextureEnabled = !0, op._BaseWeightTextureEnabled = !0, op._BaseDiffuseRoughnessTextureEnabled = !0, op._DetailTextureEnabled = !0, op._DecalMapEnabled = !0, op._AmbientTextureEnabled = !0, op._OpacityTextureEnabled = !0, op._ReflectionTextureEnabled = !0, op._EmissiveTextureEnabled = !0, op._SpecularTextureEnabled = !0, op._BumpTextureEnabled = !0, op._LightmapTextureEnabled = !0, op._RefractionTextureEnabled = !0, op._ColorGradingTextureEnabled = !0, op._FresnelEnabled = !0, op._ClearCoatTextureEnabled = !0, op._ClearCoatBumpTextureEnabled = !0, op._ClearCoatTintTextureEnabled = !0, op._SheenTextureEnabled = !0, op._AnisotropicTextureEnabled = !0, op._ThicknessTextureEnabled = !0, op._RefractionIntensityTextureEnabled = !0, op._TranslucencyIntensityTextureEnabled = !0, op._TranslucencyColorTextureEnabled = !0, op._IridescenceTextureEnabled = !0
  },
  40512: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => dp,
      Ab: () => yp,
      E: () => Ep,
      G: () => ep,
      K: () => Mp,
      L: () => Cp,
      P: () => Wp,
      Q: () => Pp,
      T: () => ap,
      X: () => Np,
      Y: () => Jp,
      ab: () => Qp,
      c: () => lp,
      eb: () => Hp,
      g: () => jp,
      hb: () => Xp,
      i: () => Ap,
      ib: () => np,
      k: () => vp,
      lb: () => Fp,
      m: () => tp,
      nb: () => gp,
      p: () => qp,
      qb: () => zp,
      r: () => Lp,
      ub: () => rp,
      v: () => Up,
      xb: () => Zp,
      y: () => wp
    });
    var Op = cp(38905),
      op = cp(37345),
      Ip = cp(40398),
      Sp = cp(40516),
      xp = cp(40519);

    function Lp(pp, ip, cp) {
      if (!pp || pp.LOGARITHMICDEPTH || pp.indexOf && pp.indexOf("LOGARITHMICDEPTH") >= 0) {
        const pp = cp.activeCamera;
        1 === pp.mode && Op.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), ip.setFloat("logarithmicDepthConstant", 2 / (Math.log(pp.maxZ + 1) / Math.LN2))
      }
    }
    const Yp = {
        r: 0,
        g: 0,
        b: 0
      },
      Dp = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Ap(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      cp && pp.fogEnabled && (!ip || ip.applyFog) && 0 !== pp.fogMode && (cp.setFloat4("vFogInfos", pp.fogMode, pp.fogStart, pp.fogEnd, pp.fogDensity), Op ? (pp.fogColor.toLinearSpaceToRef(Yp, pp.gy().useExactSrgbConversions), cp.setColor3("vFogColor", Yp)) : cp.setColor3("vFogColor", pp.fogColor))
    }

    function Pp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
      const Ap = pp.numMaxInfluencers || pp.numInfluencers;
      return Ap <= 0 ? 0 : (ip.push("#define MORPHTARGETS"), pp.hasPositions && ip.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), pp.hasNormals && ip.push("#define MORPHTARGETTEXTURE_HASNORMALS"), pp.hasTangents && ip.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), pp.hasUVs && ip.push("#define MORPHTARGETTEXTURE_HASUVS"), pp.hasUV2s && ip.push("#define MORPHTARGETTEXTURE_HASUV2S"), pp.hasColors && ip.push("#define MORPHTARGETTEXTURE_HASCOLORS"), pp.supportsPositions && op && ip.push("#define MORPHTARGETS_POSITION"), pp.supportsNormals && Ip && ip.push("#define MORPHTARGETS_NORMAL"), pp.supportsTangents && Sp && ip.push("#define MORPHTARGETS_TANGENT"), pp.supportsUVs && xp && ip.push("#define MORPHTARGETS_UV"), pp.supportsUV2s && Lp && ip.push("#define MORPHTARGETS_UV2"), pp.supportsColors && Yp && ip.push("#define MORPHTARGETS_COLOR"), ip.push("#define NUM_MORPH_INFLUENCERS " + Ap), pp.isUsingTextureForTargets && ip.push("#define MORPHTARGETS_TEXTURE"), Dp.NUM_MORPH_INFLUENCERS = Ap, Dp.NORMAL = Ip, Dp.TANGENT = Sp, Dp.UV = xp, Dp.UV2 = Lp, Dp.COLOR = Yp, Wp(cp, Op, Dp, op), Ap)
    }

    function Wp(pp, ip, cp) {
      let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Sp = cp.NUM_MORPH_INFLUENCERS;
      if (Sp > 0 && op.e.LastCreatedEngine) {
        const xp = op.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          Lp = ip.morphTargetManager;
        if (Lp?.isUsingTextureForTargets) return;
        const Yp = Lp && Lp.supportsPositions && Ip,
          Dp = Lp && Lp.supportsNormals && cp.NORMAL,
          Ap = Lp && Lp.supportsTangents && cp.TANGENT,
          Pp = Lp && Lp.supportsUVs && cp.UV1,
          Wp = Lp && Lp.supportsUV2s && cp.UV2,
          yp = Lp && Lp.supportsColors && cp.VERTEXCOLOR;
        for (let cp = 0; cp < Sp; cp++) Yp && pp.push("position" + cp), Dp && pp.push("normal" + cp), Ap && pp.push("tangent" + cp), Pp && pp.push("uv_" + cp), Wp && pp.push("uv2_" + cp), yp && pp.push("color" + cp), pp.length > xp && Op.e.Error("Cannot add more vertex attributes for mesh " + ip.name)
      }
    }

    function yp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      pp.push("world0"), pp.push("world1"), pp.push("world2"), pp.push("world3"), ip && (pp.push("previousWorld0"), pp.push("previousWorld1"), pp.push("previousWorld2"), pp.push("previousWorld3"))
    }

    function Up(pp, ip) {
      const cp = pp.morphTargetManager;
      pp && cp && ip.setFloatArray("morphTargetInfluences", cp.influences)
    }

    function wp(pp, ip) {
      ip.bindToEffect(pp, "Scene")
    }

    function vp(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Dp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Ap = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Pp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (pp.texturesEnabled && op && xp.c.ReflectionTextureEnabled) {
        if (cp.I3("reflectionMatrix", op.getReflectionTextureMatrix()), cp.updateFloat2("vReflectionInfos", op.level * pp.iblIntensity, Pp), Lp && op.boundingBoxSize) {
          const pp = op;
          cp.updateVector3("vReflectionPosition", pp.boundingBoxPosition), cp.updateVector3("vReflectionSize", pp.boundingBoxSize)
        }
        if (Ip) {
          const pp = op.getSize().width;
          cp.updateFloat2("vReflectionFilteringInfo", pp, Math.log2(pp))
        }
        if (Dp && !ip.USEIRRADIANCEMAP) {
          const pp = op.sphericalPolynomial;
          if (ip.USESPHERICALFROMREFLECTIONMAP && pp)
            if (ip.SPHERICAL_HARMONICS) {
              const ip = pp.preScaledHarmonics;
              cp.updateVector3("vSphericalL00", ip.l00), cp.updateVector3("vSphericalL1_1", ip.l1_1), cp.updateVector3("vSphericalL10", ip.l10), cp.updateVector3("vSphericalL11", ip.l11), cp.updateVector3("vSphericalL2_2", ip.l2_2), cp.updateVector3("vSphericalL2_1", ip.l2_1), cp.updateVector3("vSphericalL20", ip.l20), cp.updateVector3("vSphericalL21", ip.l21), cp.updateVector3("vSphericalL22", ip.l22)
            } else cp.updateFloat3("vSphericalX", pp.x.x, pp.x.y, pp.x.z), cp.updateFloat3("vSphericalY", pp.y.x, pp.y.y, pp.y.z), cp.updateFloat3("vSphericalZ", pp.z.x, pp.z.y, pp.z.z), cp.updateFloat3("vSphericalXX_ZZ", pp.xx.x - pp.zz.x, pp.xx.y - pp.zz.y, pp.xx.z - pp.zz.z), cp.updateFloat3("vSphericalYY_ZZ", pp.yy.x - pp.zz.x, pp.yy.y - pp.zz.y, pp.yy.z - pp.zz.z), cp.updateFloat3("vSphericalZZ", pp.zz.x, pp.zz.y, pp.zz.z), cp.updateFloat3("vSphericalXY", pp.xy.x, pp.xy.y, pp.xy.z), cp.updateFloat3("vSphericalYZ", pp.yz.x, pp.yz.y, pp.yz.z), cp.updateFloat3("vSphericalZX", pp.zx.x, pp.zx.y, pp.zx.z)
        } else Yp && ip.USEIRRADIANCEMAP && ip.USE_IRRADIANCE_DOMINANT_DIRECTION && op.irradianceTexture && cp.updateVector3("vReflectionDominantDirection", op.irradianceTexture._dominantDirection);
        Sp && cp.updateFloat3("vReflectionMicrosurfaceInfos", op.getSize().width, op.lodGenerationScale, op.lodGenerationOffset)
      }
      Ap && cp.updateColor3("vReflectionColor", Op)
    }

    function tp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Op && xp.c.ReflectionTextureEnabled) {
        ip.LODBASEDMICROSFURACE ? cp.setTexture("reflectionSampler", Op) : (cp.setTexture("reflectionSampler", Op._lodTextureMid || Op), cp.setTexture("reflectionSamplerLow", Op._lodTextureLow || Op), cp.setTexture("reflectionSamplerHigh", Op._lodTextureHigh || Op)), ip.USEIRRADIANCEMAP && cp.setTexture("irradianceSampler", Op.irradianceTexture);
        const Ip = pp.iblCdfGenerator;
        op && Ip && cp.setTexture("icdfSampler", Ip.getIcdfTexture())
      }
    }

    function Hp(pp, ip, cp) {
      ip._needUVs = !0, ip[cp] = !0, pp.optimizeUVAllocation && pp.getTextureMatrix().isIdentityAs3x2() ? (ip[cp + "DIRECTUV"] = pp.coordinatesIndex + 1, ip["MAINUV" + (pp.coordinatesIndex + 1)] = !0) : ip[cp + "DIRECTUV"] = 0
    }

    function dp(pp, ip, cp) {
      const Op = pp.getTextureMatrix();
      ip.I3(cp + "Matrix", Op)
    }

    function ep(pp, ip, cp) {
      cp.BAKED_VERTEX_ANIMATION_TEXTURE && cp.INSTANCES && pp.push("bakedVertexAnimationSettingsInstanced")
    }

    function jp(pp, ip, cp) {
      var Op;
      if (ip && pp && (pp.computeBonesUsingShaders && ip._bonesComputationForcedToCPU && (pp.computeBonesUsingShaders = !1), pp.useBones && pp.computeBonesUsingShaders && pp.skeleton)) {
        const op = pp.skeleton;
        if (op.isUsingTextureForMatrices && ip.getUniformIndex("boneTextureInfo") > -1) {
          const cp = op.getTransformMatrixTexture(pp);
          ip.setTexture("boneSampler", cp), ip.setFloat2("boneTextureInfo", op._textureWidth, op._textureHeight)
        } else {
          const Ip = op.getTransformMatrices(pp);
          Ip && (ip.setMatrices("mBones", Ip), cp && pp.Gl().prePassRenderer && pp.Gl().prePassRenderer.getIndex(2) && (cp.previousBones[pp.uniqueId] || (cp.previousBones[pp.uniqueId] = Ip.slice()), ip.setMatrices("mPreviousBones", cp.previousBones[pp.uniqueId]), Op = Ip, cp.previousBones[pp.uniqueId].set(Op)))
        }
      }
    }

    function kp(pp, ip, cp, Op, op) {
      let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      pp._bindLight(ip, cp, Op, op, Ip)
    }
    const mp = 4,
      Rp = new WeakMap;

    function qp(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Ip = Math.min(ip.lightSources.length, op);
      for (let Sp = 0; Sp < Ip; Sp++) {
        kp(ip.lightSources[Sp], Sp, pp, cp, "boolean" === typeof Op ? Op : Op.SPECULARTERM, ip.receiveShadows)
      }
    }

    function Mp(pp, ip, cp, Op) {
      cp.NUM_BONE_INFLUENCERS > 0 && (Op.addCPUSkinningFallback(0, ip), pp.push("matricesIndices"), pp.push("matricesWeights"), cp.NUM_BONE_INFLUENCERS > 4 && (pp.push("matricesIndicesExtra"), pp.push("matricesWeightsExtra")))
    }

    function Cp(pp, ip) {
      (ip.INSTANCES || ip.THIN_INSTANCES) && yp(pp, !!ip.PREPASS_VELOCITY), ip.INSTANCESCOLOR && pp.push("instanceColor")
    }

    function Ep(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        op = 0;
      for (let Ip = 0; Ip < cp && pp["LIGHT" + Ip]; Ip++) Ip > 0 && (op = Op + Ip, ip.addFallback(op, "LIGHT" + Ip)), pp.SHADOWS || (pp["SHADOW" + Ip] && ip.addFallback(Op, "SHADOW" + Ip), pp["SHADOWPCF" + Ip] && ip.addFallback(Op, "SHADOWPCF" + Ip), pp["SHADOWPCSS" + Ip] && ip.addFallback(Op, "SHADOWPCSS" + Ip), pp["SHADOWPOISSON" + Ip] && ip.addFallback(Op, "SHADOWPOISSON" + Ip), pp["SHADOWESM" + Ip] && ip.addFallback(Op, "SHADOWESM" + Ip), pp["SHADOWCLOSEESM" + Ip] && ip.addFallback(Op, "SHADOWCLOSEESM" + Ip));
      return op
    }

    function Xp(pp, ip, cp, Op, op, Ip, Sp) {
      let xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Yp = arguments.length > 9 ? arguments[9] : void 0,
        Dp = arguments.length > 10 ? arguments[10] : void 0;
      if (Sp._areMiscDirty) {
        Sp.LOGARITHMICDEPTH = cp, Sp.POINTSIZE = Op, Sp.FOG = op && function(pp, ip) {
          return ip.fogEnabled && pp.applyFog && 0 !== ip.fogMode
        }(pp, ip), Sp.NONUNIFORMSCALING = pp.nonUniformScaling, Sp.ALPHATEST = Ip, Sp.DECAL_AFTER_DETAIL = xp, Sp.USE_VERTEX_PULLING = Lp, Sp.RIGHT_HANDED = ip.useRightHandedSystem;
        const Ap = Lp ? Yp?.geometry?.getIndexBuffer() : null,
          Pp = !!Yp && Yp.isUnIndexed;
        Sp.VERTEX_PULLING_USE_INDEX_BUFFER = !!Ap && !Pp, Sp.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Ap || Pp) && Ap.is32Bits, Sp.VERTEXOUTPUT_INVARIANT = !!Dp
      }
    }

    function lp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!pp.lightsEnabled || Op) return !0;
      const op = ip.lightSources,
        Ip = Math.min(op.length, cp);
      for (let Sp = 0; Sp < Ip; Sp++)
        if (!op[Sp].areLightTexturesReady()) return !1;
      return !0
    }

    function Qp(pp, ip, cp, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!cp._areLightsDirty) return cp._needNormals;
      const xp = Ip;
      Ip = function(pp, ip) {
        const cp = pp.gy().getCaps().maxUniformBuffersPerShaderStage;
        if (null == cp) return ip;
        const Op = Math.max(cp - mp, 1);
        return Math.min(ip, Op)
      }(pp, Ip);
      let Lp = 0;
      const Yp = {
        needNormals: cp._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (pp.lightsEnabled && !Sp) {
        ip.lightSources.length > Ip && Ip < xp && function(pp, ip, cp, op) {
          let Ip = Rp.get(pp);
          Ip || (Ip = new Set, Rp.set(pp, Ip)), Ip.has(op) || (Ip.add(op), Op.e.Warn(`maxSimultaneousLights is ${ip} but this engine supports at most ${cp} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${op} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${op+mp} uniform buffers, over the device limit of ${pp.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${cp}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${cp} or less to silence this warning.`))
        }(pp.gy(), xp, Ip, Math.min(ip.lightSources.length, xp));
        for (const Op of ip.lightSources)
          if (Bp(pp, ip, Op, Lp, cp, op, Yp), Lp++, Lp === Ip) break
      }
      cp.SPECULARTERM = Yp.specularEnabled, cp.SHADOWS = Yp.shadowEnabled;
      const Dp = Math.max(Ip, cp.MAXLIGHTCOUNT || 0);
      for (let Op = Lp; Op < Dp; Op++) void 0 !== cp["LIGHT" + Op] && (cp["LIGHT" + Op] = !1, cp["HEMILIGHT" + Op] = !1, cp["POINTLIGHT" + Op] = !1, cp["DIRLIGHT" + Op] = !1, cp["SPOTLIGHT" + Op] = !1, cp["AREALIGHT" + Op] = !1, cp["CLUSTLIGHT" + Op] = !1, cp["SHADOW" + Op] = !1, cp["SHADOWCSM" + Op] = !1, cp["SHADOWCSMDEBUG" + Op] = !1, cp["SHADOWCSMNUM_CASCADES" + Op] = !1, cp["SHADOWCSMUSESHADOWMAXZ" + Op] = !1, cp["SHADOWCSMNOBLEND" + Op] = !1, cp["SHADOWCSM_RIGHTHANDED" + Op] = !1, cp["SHADOWPCF" + Op] = !1, cp["SHADOWPCSS" + Op] = !1, cp["SHADOWPOISSON" + Op] = !1, cp["SHADOWESM" + Op] = !1, cp["SHADOWCLOSEESM" + Op] = !1, cp["SHADOWCUBE" + Op] = !1, cp["SHADOWLOWQUALITY" + Op] = !1, cp["SHADOWMEDIUMQUALITY" + Op] = !1);
      cp.LIGHTCOUNT = Lp, cp.MAXLIGHTCOUNT = Ip;
      const Ap = pp.gy().getCaps();
      return void 0 === cp.SHADOWFLOAT && (Yp.needRebuild = !0), cp.SHADOWFLOAT = Yp.shadowEnabled && (Ap.textureFloatRender && Ap.textureFloatLinearFiltering || Ap.textureHalfFloatRender && Ap.textureHalfFloatLinearFiltering), cp.LIGHTMAPEXCLUDED = Yp.lightmapMode, Yp.needRebuild && cp.rebuild(), Yp.needNormals
    }

    function Jp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (ip && xp.c.ReflectionTextureEnabled) {
        if (!ip.isReadyOrNotBlocking()) return !1;
        cp._needNormals = !0, cp.REFLECTION = !0, cp.GAMMAREFLECTION = ip.gammaSpace, cp.RGBDREFLECTION = ip.isRGBD, cp.LODINREFLECTIONALPHA = ip.lodLevelInAlpha, cp.LINEARSPECULARREFLECTION = ip.linearSpecularLOD, cp.USEIRRADIANCEMAP = !1, cp.LODBASEDMICROSFURACE = pp.gy().getCaps().textureLOD;
        const Sp = pp.gy();
        switch (Op && op > 0 ? (cp.NUM_SAMPLES = "" + op, Sp._features.needTypeSuffixInShaderConstants && (cp.NUM_SAMPLES = cp.NUM_SAMPLES + "u"), cp.REALTIME_FILTERING = !0, pp.iblCdfGenerator && (cp.IBL_CDF_FILTERING = !0)) : cp.REALTIME_FILTERING = !1, cp.INVERTCUBICMAP = 6 === ip.coordinatesMode, cp.REFLECTIONMAP_3D = ip.isCube, cp.REFLECTIONMAP_OPPOSITEZ = cp.REFLECTIONMAP_3D && pp.useRightHandedSystem ? !ip.invertZ : ip.invertZ, cp.REFLECTIONMAP_CUBIC = !1, cp.REFLECTIONMAP_EXPLICIT = !1, cp.REFLECTIONMAP_PLANAR = !1, cp.REFLECTIONMAP_PROJECTION = !1, cp.REFLECTIONMAP_SKYBOX = !1, cp.REFLECTIONMAP_SPHERICAL = !1, cp.REFLECTIONMAP_EQUIRECTANGULAR = !1, cp.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, cp.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ip.coordinatesMode) {
          case 0:
            cp.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            cp.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            cp.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            cp.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            cp.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            cp.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            cp.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            cp.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            cp.REFLECTIONMAP_CUBIC = !0, cp.USE_LOCAL_REFLECTIONMAP_CUBIC = !!ip.boundingBoxSize
        }
        5 !== ip.coordinatesMode && (ip.irradianceTexture ? (cp.USEIRRADIANCEMAP = !0, cp.USESPHERICALFROMREFLECTIONMAP = !1, cp.USESPHERICALINVERTEX = !1, ip.irradianceTexture._dominantDirection ? cp.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : cp.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : ip.isCube && (cp.USESPHERICALFROMREFLECTIONMAP = !0, cp.USEIRRADIANCEMAP = !1, cp.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, cp.USESPHERICALINVERTEX = Ip))
      } else cp.REFLECTION = !1, cp.REFLECTIONMAP_3D = !1, cp.REFLECTIONMAP_SPHERICAL = !1, cp.REFLECTIONMAP_PLANAR = !1, cp.REFLECTIONMAP_CUBIC = !1, cp.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, cp.REFLECTIONMAP_PROJECTION = !1, cp.REFLECTIONMAP_SKYBOX = !1, cp.REFLECTIONMAP_EXPLICIT = !1, cp.REFLECTIONMAP_EQUIRECTANGULAR = !1, cp.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, cp.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, cp.INVERTCUBICMAP = !1, cp.USESPHERICALFROMREFLECTIONMAP = !1, cp.USEIRRADIANCEMAP = !1, cp.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, cp.USESPHERICALINVERTEX = !1, cp.REFLECTIONMAP_OPPOSITEZ = !1, cp.LODINREFLECTIONALPHA = !1, cp.GAMMAREFLECTION = !1, cp.RGBDREFLECTION = !1, cp.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Bp(pp, ip, cp, Op, op, Sp, xp) {
      switch (xp.needNormals = !0, void 0 === op["LIGHT" + Op] && (xp.needRebuild = !0), op["LIGHT" + Op] = !0, op["SPOTLIGHT" + Op] = !1, op["HEMILIGHT" + Op] = !1, op["POINTLIGHT" + Op] = !1, op["DIRLIGHT" + Op] = !1, op["AREALIGHT" + Op] = !1, op["CLUSTLIGHT" + Op] = !1, cp.prepareLightSpecificDefines(op, Op), op["LIGHT_FALLOFF_PHYSICAL" + Op] = !1, op["LIGHT_FALLOFF_GLTF" + Op] = !1, op["LIGHT_FALLOFF_STANDARD" + Op] = !1, cp.falloffType) {
        case Ip.b.FALLOFF_GLTF:
          op["LIGHT_FALLOFF_GLTF" + Op] = !0;
          break;
        case Ip.b.FALLOFF_PHYSICAL:
          op["LIGHT_FALLOFF_PHYSICAL" + Op] = !0;
          break;
        case Ip.b.FALLOFF_STANDARD:
          op["LIGHT_FALLOFF_STANDARD" + Op] = !0
      }
      if (Sp && !cp.specular.equalsFloats(0, 0, 0) && (xp.specularEnabled = !0), op["SHADOW" + Op] = !1, op["SHADOWCSM" + Op] = !1, op["SHADOWCSMDEBUG" + Op] = !1, op["SHADOWCSMNUM_CASCADES" + Op] = !1, op["SHADOWCSMUSESHADOWMAXZ" + Op] = !1, op["SHADOWCSMNOBLEND" + Op] = !1, op["SHADOWCSM_RIGHTHANDED" + Op] = !1, op["SHADOWPCF" + Op] = !1, op["SHADOWPCSS" + Op] = !1, op["SHADOWPOISSON" + Op] = !1, op["SHADOWESM" + Op] = !1, op["SHADOWCLOSEESM" + Op] = !1, op["SHADOWCUBE" + Op] = !1, op["SHADOWLOWQUALITY" + Op] = !1, op["SHADOWMEDIUMQUALITY" + Op] = !1, ip && ip.receiveShadows && pp.shadowsEnabled && cp.shadowEnabled) {
        const ip = cp.getShadowGenerator(pp.activeCamera) ?? cp.getShadowGenerator();
        if (ip) {
          const pp = ip.getShadowMap();
          pp && pp.renderList && pp.renderList.length > 0 && (xp.shadowEnabled = !0, ip.prepareDefines(op, Op))
        }
      }
      cp.lightmapMode != Ip.b.LIGHTMAP_DEFAULT ? (xp.lightmapMode = !0, op["LIGHTMAPEXCLUDED" + Op] = !0, op["LIGHTMAPNOSPECULAR" + Op] = cp.lightmapMode == Ip.b.LIGHTMAP_SHADOWSONLY) : (op["LIGHTMAPEXCLUDED" + Op] = !1, op["LIGHTMAPNOSPECULAR" + Op] = !1)
    }

    function Np(pp, ip, cp, Op, op) {
      let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lp = function(pp, ip) {
          let cp = !1;
          if (pp.activeCamera) {
            const Op = ip.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              op = ip.CAMERA_PERSPECTIVE ? 1 : 0,
              Ip = 1 === pp.activeCamera.mode ? 1 : 0,
              Sp = 0 === pp.activeCamera.mode ? 1 : 0;
            (Op ^ Ip || op ^ Sp) && (ip.CAMERA_ORTHOGRAPHIC = 1 === Ip, ip.CAMERA_PERSPECTIVE = 1 === Sp, cp = !0)
          }
          return cp
        }(pp, Op);
      !1 !== Ip && (Lp = (0, Sp.i)(cp, pp, Op)), Op.DEPTHPREPASS !== !ip.getColorWrite() && (Op.DEPTHPREPASS = !Op.DEPTHPREPASS, Lp = !0), Op.INSTANCES !== op && (Op.INSTANCES = op, Lp = !0), Op.THIN_INSTANCES !== xp && (Op.THIN_INSTANCES = xp, Lp = !0), Lp && Op.markAsUnprocessed()
    }
    const Tp = 40,
      fp = 64,
      bp = new WeakMap,
      hp = new WeakSet;

    function ap(pp, ip, cp, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!ip._areAttributesDirty && ip._needNormals === ip._normals && ip._needUVs === ip._uvs) return !1;
      ip._normals = ip._needNormals, ip._uvs = ip._needUVs, ip.NORMAL = ip._needNormals && pp.isVerticesDataPresent("normal"), ip._needNormals && pp.isVerticesDataPresent("tangent") && (ip.TANGENT = !0);
      for (let Op = 1; Op <= 6; ++Op) ip["UV" + Op] = !!ip._needUVs && pp.isVerticesDataPresent(`uv${1===Op?"":Op}`);
      if (cp) {
        const cp = pp.useVertexColors && pp.isVerticesDataPresent("color");
        ip.VERTEXCOLOR = cp, ip.VERTEXALPHA = pp.hasVertexAlpha && cp && Sp
      }
      return pp.isVerticesDataPresent("instanceColor") && (pp.fop || pp.hasThinInstances) && (ip.INSTANCESCOLOR = !0), op && function(pp, ip) {
        if (pp.useBones && pp.computeBonesUsingShaders && pp.skeleton) {
          ip.NUM_BONE_INFLUENCERS = pp.numBoneInfluencers;
          const cp = void 0 !== ip.BONETEXTURE;
          if (pp.skeleton.isUsingTextureForMatrices && cp) ip.BONETEXTURE = !0;
          else {
            ip.BonesPerMesh = pp.skeleton.bones.length + 1, ip.BONETEXTURE = !cp && void 0;
            const op = pp.Gl(),
              Ip = op.prePassRenderer;
            if (Ip && Ip.enabled) {
              const cp = -1 === Ip.excludedSkinnedMesh.indexOf(pp);
              ip.BONES_VELOCITY_ENABLED = cp
            }
            const Sp = !0 === ip.MULTIVIEW,
              xp = 2 * ip.BonesPerMesh + (Sp ? 1 : 0);
            if (bp.get(pp.skeleton) !== xp) {
              bp.set(pp.skeleton, xp);
              const cp = op.gy().getCaps().maxVertexUniformVectors;
              if (cp && !hp.has(pp.skeleton)) {
                const op = 4 * ip.BonesPerMesh,
                  Ip = Sp ? fp : Tp,
                  xp = Math.max(cp - Ip, 0);
                (op > xp || Sp && 3 * op > cp) && (hp.add(pp.skeleton), Op.e.Warn(`Skeleton "${pp.skeleton.name}": ${pp.skeleton.bones.length} bones stored as vertex uniforms use ${op} of ~${xp} usable uniform vectors${Sp?" (multiview)":""} on a device reporting ${cp}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else ip.NUM_BONE_INFLUENCERS = 0, ip.BonesPerMesh = 0, void 0 !== ip.BONETEXTURE && (ip.BONETEXTURE = !1)
      }(pp, ip), Ip && function(pp, ip) {
        const cp = pp.morphTargetManager;
        cp ? (ip.MORPHTARGETS_UV = cp.supportsUVs && ip.UV1, ip.MORPHTARGETS_UV2 = cp.supportsUV2s && ip.UV2, ip.MORPHTARGETS_TANGENT = cp.supportsTangents && ip.TANGENT, ip.MORPHTARGETS_NORMAL = cp.supportsNormals && ip.NORMAL, ip.MORPHTARGETS_POSITION = cp.supportsPositions, ip.MORPHTARGETS_COLOR = cp.supportsColors, ip.MORPHTARGETTEXTURE_HASUVS = cp.hasUVs, ip.MORPHTARGETTEXTURE_HASUV2S = cp.hasUV2s, ip.MORPHTARGETTEXTURE_HASTANGENTS = cp.hasTangents, ip.MORPHTARGETTEXTURE_HASNORMALS = cp.hasNormals, ip.MORPHTARGETTEXTURE_HASPOSITIONS = cp.hasPositions, ip.MORPHTARGETTEXTURE_HASCOLORS = cp.hasColors, ip.NUM_MORPH_INFLUENCERS = cp.numMaxInfluencers || cp.numInfluencers, ip.MORPHTARGETS = ip.NUM_MORPH_INFLUENCERS > 0, ip.MORPHTARGETS_TEXTURE = cp.isUsingTextureForTargets) : (ip.MORPHTARGETS_UV = !1, ip.MORPHTARGETS_UV2 = !1, ip.MORPHTARGETS_TANGENT = !1, ip.MORPHTARGETS_NORMAL = !1, ip.MORPHTARGETS_POSITION = !1, ip.MORPHTARGETS_COLOR = !1, ip.MORPHTARGETTEXTURE_HASUVS = !1, ip.MORPHTARGETTEXTURE_HASUV2S = !1, ip.MORPHTARGETTEXTURE_HASTANGENTS = !1, ip.MORPHTARGETTEXTURE_HASNORMALS = !1, ip.MORPHTARGETTEXTURE_HASPOSITIONS = !1, ip.MORPHTARGETTEXTURE_HAS_COLORS = !1, ip.MORPHTARGETS = !1, ip.NUM_MORPH_INFLUENCERS = 0)
      }(pp, ip), xp && function(pp, ip) {
        const cp = pp.bakedVertexAnimationManager;
        ip.BAKED_VERTEX_ANIMATION_TEXTURE = !(!cp || !cp.isEnabled)
      }(pp, ip), !0
    }

    function np(pp, ip) {
      if (pp.activeCamera) {
        const cp = ip.MULTIVIEW;
        ip.MULTIVIEW = null !== pp.activeCamera.outputRenderTarget && pp.activeCamera.outputRenderTarget.getViewCount() > 1, ip.MULTIVIEW != cp && ip.markAsUnprocessed()
      }
    }

    function Fp(pp, ip, cp) {
      const Op = ip.ORDER_INDEPENDENT_TRANSPARENCY,
        op = ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      ip.ORDER_INDEPENDENT_TRANSPARENCY = pp.useOrderIndependentTransparency && cp, ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !pp.gy().getCaps().textureFloatLinearFiltering, Op === ip.ORDER_INDEPENDENT_TRANSPARENCY && op === ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ip.markAsUnprocessed()
    }

    function gp(pp, ip, cp) {
      const Op = ip.PREPASS;
      if (!ip._arePrePassDirty) return;
      const op = [{
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
      if (pp.prePassRenderer && pp.prePassRenderer.enabled && cp) {
        ip.PREPASS = !0, ip.SCENE_MRT_COUNT = pp.prePassRenderer.mrtCount, ip.PREPASS_NORMAL_WORLDSPACE = pp.prePassRenderer.generateNormalsInWorldSpace, ip.PREPASS_COLOR = !0, ip.PREPASS_COLOR_INDEX = 0;
        for (let cp = 0; cp < op.length; cp++) {
          const Op = pp.prePassRenderer.getIndex(op[cp].type); - 1 !== Op ? (ip[op[cp].define] = !0, ip[op[cp].index] = Op) : ip[op[cp].define] = !1
        }
      } else {
        ip.PREPASS = !1;
        for (let pp = 0; pp < op.length; pp++) ip[op[pp].define] = !1
      }
      ip.PREPASS != Op && (ip.markAsUnprocessed(), ip.markAsImageProcessingDirty())
    }

    function Gp(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Yp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      op && op.push("Light" + pp), Ip || (ip.push("vLightData" + pp, "vLightDiffuse" + pp, "vLightSpecular" + pp, "vLightDirection" + pp, "vLightWidth" + pp, "vLightHeight" + pp, "vLightFalloff" + pp, "vLightGround" + pp, "vSliceData" + pp, "vSliceRanges" + pp, "lightMatrix" + pp, "shadowsInfo" + pp, "depthValues" + pp), cp.push("shadowTexture" + pp), cp.push("depthTexture" + pp), ip.push("viewFrustumZ" + pp, "cascadeBlendFactor" + pp, "lightSizeUVCorrection" + pp, "depthCorrection" + pp, "penumbraDarkness" + pp, "frustumLengths" + pp), Op && (cp.push("projectionLightTexture" + pp), ip.push("textureProjectionMatrix" + pp)), Sp && cp.push("iesLightTexture" + pp), Lp && cp.push("rectAreaLightEmissionTexture" + pp), xp && (cp.push("lightDataTexture" + pp), Yp || cp.push("tileMaskTexture" + pp)))
    }

    function rp(pp, ip, cp) {
      const Op = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      cp && Op.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), pp.push(...Op);
      ip.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Zp(pp, ip, cp) {
      let Op, op, Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Sp = null;
      if (pp.uniformsNames) {
        const xp = pp;
        Op = xp.uniformsNames, op = xp.uniformBuffersNames, ip = xp.samplers, cp = xp.defines, Ip = xp.maxSimultaneousLights || 0, Sp = xp.shaderLanguage ?? null
      } else Op = pp, ip || (ip = []);
      for (let xp = 0; xp < Ip && cp["LIGHT" + xp]; xp++) Gp(xp, Op, ip, cp["PROJECTEDLIGHTTEXTURE" + xp], op, !1, cp["IESLIGHTTEXTURE" + xp], cp["CLUSTLIGHT" + xp], cp["RECTAREALIGHTEMISSIONTEXTURE" + xp], 1 === Sp);
      cp.NUM_MORPH_INFLUENCERS && (Op.push("morphTargetInfluences"), Op.push("morphTargetCount")), cp.BAKED_VERTEX_ANIMATION_TEXTURE && (Op.push("bakedVertexAnimationSettings"), Op.push("bakedVertexAnimationTextureSizeInverted"), Op.push("bakedVertexAnimationTime"), ip.push("bakedVertexAnimationTexture"))
    }

    function zp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      pp.addUniform("vReflectionInfos", 2), pp.addUniform("reflectionMatrix", 16), ip && pp.addUniform("vReflectionMicrosurfaceInfos", 3), cp && (pp.addUniform("vReflectionPosition", 3), pp.addUniform("vReflectionSize", 3)), Op && (pp.addUniform("vReflectionFilteringInfo", 2), pp.addUniform("vReflectionDominantDirection", 3)), Ip && pp.addUniform("vReflectionColor", 3), op && (pp.addUniform("vSphericalL00", 3), pp.addUniform("vSphericalL1_1", 3), pp.addUniform("vSphericalL10", 3), pp.addUniform("vSphericalL11", 3), pp.addUniform("vSphericalL2_2", 3), pp.addUniform("vSphericalL2_1", 3), pp.addUniform("vSphericalL20", 3), pp.addUniform("vSphericalL21", 3), pp.addUniform("vSphericalL22", 3), pp.addUniform("vSphericalX", 3), pp.addUniform("vSphericalY", 3), pp.addUniform("vSphericalZ", 3), pp.addUniform("vSphericalXX_ZZ", 3), pp.addUniform("vSphericalYY_ZZ", 3), pp.addUniform("vSphericalZZ", 3), pp.addUniform("vSphericalXY", 3), pp.addUniform("vSphericalYZ", 3), pp.addUniform("vSphericalZX", 3))
    }
  },
  40523: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(37320),
      op = cp(40476);
    class Ip extends op.b {
      constructor(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(pp, ip, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Op.b, this._storeEffectOnSubMeshes = cp
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(pp, ip) {
        return !!pp && (!this._storeEffectOnSubMeshes || (!pp.Am || 0 === pp.Am.length || this.isReadyForSubMesh(pp, pp.Am[0], ip)))
      }
      _isReadyForSubMesh(pp) {
        const ip = pp.materialDefines;
        return !(this.checkReadyOnEveryCall || !pp.effect || !ip || ip._renderId !== this.Gl().getRenderId())
      }
      bindOnlyWorldMatrix(pp) {
        this._activeEffect.setMatrix("world", pp)
      }
      bindOnlyNormalMatrix(pp) {
        this._activeEffect.setMatrix("normalMatrix", pp)
      }
      bind(pp, ip) {
        ip && this.bindForSubMesh(pp, ip, ip.Am[0])
      }
      _afterBind(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(pp, ip, cp), this.Gl()._cachedEffect = ip, cp ? cp._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return cp._drawWrapper._forceRebindOnNextCall || pp.isCachedMaterialInvalid(this, ip, Op)
      }
      dispose(pp, ip, cp) {
        this._activeEffect = void 0, super.dispose(pp, ip, cp)
      }
    }
  },
  40544: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      i: () => op
    });
    const Op = new WeakMap;

    function op(pp) {
      const ip = pp.getVertexBuffers();
      if (!ip) return null;
      let cp = Op.get(pp);
      if (cp) {
        let pp = !1;
        for (const Op in ip)
          if (!cp.has(Op)) {
            pp = !0;
            break
          } if (!pp) return cp
      } else cp = new Map, Op.set(pp, cp);
      for (const Op in ip) {
        const pp = ip[Op];
        if (pp) {
          const ip = pp.byteOffset,
            op = pp.byteStride,
            Ip = pp.type,
            Sp = pp.normalized;
          cp.set(Op, {
            offset: ip,
            stride: op,
            type: Ip,
            normalized: Sp
          })
        }
      }
      return cp
    }

    function Ip(pp, ip) {
      ip.forEach(((ip, cp) => {
        const Op = `vp_${cp}_info`;
        pp.setFloat4(Op, ip.offset, ip.stride, ip.type, ip.normalized ? 1 : 0)
      }))
    }
  },
  40506: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      f: () => Lp
    });
    var Op = cp(40203),
      op = cp(37320),
      Ip = cp(40210);
    let Sp = (() => {
      var pp;
      let ip, cp, op = [];
      return pp = class {
        static extractMinAndMaxIndexed(pp, ip, cp, Op, op, Ip) {
          for (let Sp = cp; Sp < cp + Op; Sp++) {
            const cp = 3 * ip[Sp],
              Op = pp[cp],
              xp = pp[cp + 1],
              Lp = pp[cp + 2];
            op.minimizeInPlaceFromFloats(Op, xp, Lp), Ip.maximizeInPlaceFromFloats(Op, xp, Lp)
          }
        }
        static extractMinAndMax(pp, ip, cp, Op, op, Ip) {
          for (let Sp = ip, xp = ip * Op; Sp < ip + cp; Sp++, xp += Op) {
            const ip = pp[xp],
              cp = pp[xp + 1],
              Op = pp[xp + 2];
            op.minimizeInPlaceFromFloats(ip, cp, Op), Ip.maximizeInPlaceFromFloats(ip, cp, Op)
          }
        }
      }, (() => {
        const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [Ip.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], cp = [Ip.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Op.j)(pp, null, ip, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: pp => "extractMinAndMaxIndexed" in pp,
            get: pp => pp.extractMinAndMaxIndexed
          },
          metadata: Sp
        }, null, op), (0, Op.j)(pp, null, cp, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: pp => "extractMinAndMax" in pp,
            get: pp => pp.extractMinAndMax
          },
          metadata: Sp
        }, null, op), Sp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sp
        }), (0, Op.l)(pp, op)
      })(), pp
    })();

    function xp(pp, ip, cp, Op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const xp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Lp = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Sp.extractMinAndMaxIndexed(pp, ip, cp, Op, xp, Lp), Ip && (xp.x -= xp.x * Ip.x + Ip.y, xp.y -= xp.y * Ip.x + Ip.y, xp.z -= xp.z * Ip.x + Ip.y, Lp.x += Lp.x * Ip.x + Ip.y, Lp.y += Lp.y * Ip.x + Ip.y, Lp.z += Lp.z * Ip.x + Ip.y), {
        minimum: xp,
        maximum: Lp
      }
    }

    function Lp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Ip = arguments.length > 4 ? arguments[4] : void 0;
      const xp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Lp = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Ip || (Ip = 3), Sp.extractMinAndMax(pp, ip, cp, Ip, xp, Lp), Op && (xp.x -= xp.x * Op.x + Op.y, xp.y -= xp.y * Op.x + Op.y, xp.z -= xp.z * Op.x + Op.y, Lp.x += Lp.x * Op.x + Op.y, Lp.y += Lp.y * Op.x + Op.y, Lp.z += Lp.z * Op.x + Op.y), {
        minimum: xp,
        maximum: Lp
      }
    }
  },
  40481: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp
    });
    var Op, op = cp(40342),
      Ip = cp(40489),
      Sp = cp(40498),
      xp = cp(40506),
      Lp = cp(40509),
      Yp = cp(40096);
    class Dp {
      get materialDefines() {
        const pp = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof pp ? null : pp
      }
      set materialDefines(pp) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = pp
      }
      _getDrawWrapper(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        pp = pp ?? this._engine.currentRenderPassId;
        let cp = this._drawWrappers[pp];
        return !cp && ip && (this._drawWrappers[pp] = cp = new Lp.e(this._mesh.Gl().gy())), cp
      }
      _removeDrawWrapper(pp) {
        let ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[pp]?.dispose(ip), this._drawWrappers[pp] = void 0
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
      _setMainDrawWrapperOverride(pp) {
        this._mainDrawWrapperOverride = pp
      }
      setEffect(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const op = this._drawWrapper;
        op.setEffect(pp, ip, Op), void 0 !== cp && (op.materialContext = cp), pp || (op.defines = null, op.materialContext = void 0)
      }
      resetDrawCache(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== pp) return void this._removeDrawWrapper(pp, !0, ip);
          for (const pp of this._drawWrappers) pp?.dispose(ip)
        }
        this._drawWrappers = []
      }
      static AddToMesh(pp, ip, cp, Op, op, Ip, Sp) {
        return new Dp(pp, ip, cp, Op, op, Ip, Sp, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(pp, ip, cp, Op, op, Ip, Sp) {
        let xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Lp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = pp, this.verticesStart = ip, this.verticesCount = cp, this.indexStart = Op, this.indexCount = op, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Ip, this._renderingMesh = Sp || Ip, Lp && Ip.Am.push(this), this._engine = this._mesh.Gl().gy(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Ip.Am.length - 1, xp && (this.refreshBoundingInfo(), Ip.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      bJ() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.bJ() : this._boundingInfo
      }
      setBoundingInfo(pp) {
        return this._boundingInfo = pp, this
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
        const pp = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return pp || this._renderingMesh
      }
      Ky() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ip = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!ip) return pp && this._mesh.Gl()._hasDefaultMaterial ? this._mesh.Gl().defaultMaterial : null;
        if (this._isMultiMaterial(ip)) {
          const pp = ip.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== pp && (this._currentMaterial = pp, this.resetDrawCache()), pp
        }
        return ip
      }
      _isMultiMaterial(pp) {
        return void 0 !== pp.getSubMaterial
      }
      refreshBoundingInfo() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (pp || (pp = this._renderingMesh.getVerticesData(op.j.PositionKind)), !pp) return this._boundingInfo = this._mesh.bJ(), this;
        const ip = this._renderingMesh.NOp();
        let cp;
        if (0 === this.indexStart && this.indexCount === ip.length) {
          const pp = this._renderingMesh.bJ();
          cp = {
            minimum: pp.minimum.clone(),
            maximum: pp.maximum.clone()
          }
        } else cp = (0, xp.e)(pp, ip, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(cp.minimum, cp.maximum) : this._boundingInfo = new Sp.d(cp.minimum, cp.maximum), this
      }
      _checkCollision(pp) {
        return this.bJ()._checkCollision(pp)
      }
      updateBoundingInfo(pp) {
        let ip = this.bJ();
        return ip || (this.refreshBoundingInfo(), ip = this.bJ()), ip && ip.update(pp), this
      }
      isInFrustum(pp) {
        const ip = this.bJ();
        return !!ip && ip.isInFrustum(pp, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(pp) {
        const ip = this.bJ();
        return !!ip && ip.isCompletelyInFrustum(pp)
      }
      render(pp) {
        return this._renderingMesh.render(this, pp, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(pp, ip) {
        if (!this._linesIndexBuffer) {
          const cp = 6 * Math.floor(this.indexCount / 3),
            Op = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(cp) : new Uint16Array(cp);
          let op = 0;
          if (0 === pp.length)
            for (let pp = this.indexStart; pp < this.indexStart + this.indexCount; pp += 3) Op[op++] = pp, Op[op++] = pp + 1, Op[op++] = pp + 1, Op[op++] = pp + 2, Op[op++] = pp + 2, Op[op++] = pp;
          else
            for (let ip = this.indexStart; ip < this.indexStart + this.indexCount; ip += 3) Op[op++] = pp[ip], Op[op++] = pp[ip + 1], Op[op++] = pp[ip + 1], Op[op++] = pp[ip + 2], Op[op++] = pp[ip + 2], Op[op++] = pp[ip];
          this._linesIndexBuffer = ip.createIndexBuffer(Op), this._linesIndexCount = Op.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(pp) {
        const ip = this.bJ();
        return !!ip && pp.intersectsBox(ip.boundingBox)
      }
      intersects(pp, ip, cp, Op, op) {
        const Ip = this.Ky();
        if (!Ip) return null;
        let Sp = 3,
          xp = !1;
        switch (Ip.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Sp = 1, xp = !0
        }
        return 4 === Ip.fillMode ? cp.length ? this._intersectLines(pp, ip, cp, this._mesh.intersectionThreshold, Op) : this._intersectUnIndexedLines(pp, ip, cp, this._mesh.intersectionThreshold, Op) : !cp.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(pp, ip, cp, Op, op) : this._intersectTriangles(pp, ip, cp, Sp, xp, Op, op)
      }
      _intersectLines(pp, ip, cp, Op, op) {
        let Sp = null;
        for (let xp = this.indexStart; xp < this.indexStart + this.indexCount; xp += 2) {
          const Lp = ip[cp[xp]],
            Yp = ip[cp[xp + 1]],
            Dp = pp.intersectionSegment(Lp, Yp, Op);
          if (!(Dp < 0) && ((op || !Sp || Dp < Sp.distance) && (Sp = new Ip.e(null, null, Dp), Sp.faceId = xp / 2, op))) break
        }
        return Sp
      }
      _intersectUnIndexedLines(pp, ip, cp, Op, op) {
        let Sp = null;
        for (let xp = this.verticesStart; xp < this.verticesStart + this.verticesCount; xp += 2) {
          const cp = ip[xp],
            Lp = ip[xp + 1],
            Yp = pp.intersectionSegment(cp, Lp, Op);
          if (!(Yp < 0) && ((op || !Sp || Yp < Sp.distance) && (Sp = new Ip.e(null, null, Yp), Sp.faceId = xp / 2, op))) break
        }
        return Sp
      }
      _intersectTriangles(pp, ip, cp, Op, op, Ip, Sp) {
        let xp = null,
          Lp = -1;
        for (let Yp = this.indexStart; Yp < this.indexStart + this.indexCount - (3 - Op); Yp += Op) {
          Lp++;
          const Op = cp[Yp],
            Dp = cp[Yp + 1],
            Ap = cp[Yp + 2];
          if (op && 4294967295 === Ap) {
            Yp += 2;
            continue
          }
          const Pp = ip[Op],
            Wp = ip[Dp],
            yp = ip[Ap];
          if (!Pp || !Wp || !yp) continue;
          if (Sp && !Sp(Pp, Wp, yp, pp, Op, Dp, Ap)) continue;
          const Up = pp.intersectsTriangle(Pp, Wp, yp);
          if (Up) {
            if (Up.distance < 0) continue;
            if ((Ip || !xp || Up.distance < xp.distance) && (xp = Up, xp.faceId = Lp, Ip)) break
          }
        }
        return xp
      }
      _intersectUnIndexedTriangles(pp, ip, cp, Op, op) {
        let Ip = null;
        for (let Sp = this.verticesStart; Sp < this.verticesStart + this.verticesCount; Sp += 3) {
          const cp = ip[Sp],
            xp = ip[Sp + 1],
            Lp = ip[Sp + 2];
          if (op && !op(cp, xp, Lp, pp, -1, -1, -1)) continue;
          const Yp = pp.intersectsTriangle(cp, xp, Lp);
          if (Yp) {
            if (Yp.distance < 0) continue;
            if ((Op || !Ip || Yp.distance < Ip.distance) && (Ip = Yp, Ip.faceId = Sp / 3, Op)) break
          }
        }
        return Ip
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(pp, ip) {
        const cp = new Dp(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, pp, ip, !1);
        if (!this.IsGlobal) {
          const pp = this.bJ();
          if (!pp) return cp;
          cp._boundingInfo = new Sp.d(pp.minimum, pp.maximum)
        }
        return cp
      }
      dispose() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Gl().gy()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const ip = this._mesh.Am.indexOf(this);
        this._mesh.Am.splice(ip, 1), this.resetDrawCache(void 0, pp)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(pp, ip, cp, Op, op) {
        let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = Number.MAX_VALUE,
          xp = -Number.MAX_VALUE;
        const Lp = (op || Op).NOp();
        for (let Yp = ip; Yp < ip + cp; Yp++) {
          const pp = Lp[Yp];
          pp < Sp && (Sp = pp), pp > xp && (xp = pp)
        }
        return new Dp(pp, Sp, xp - Sp + 1, ip, cp, Op, op, Ip)
      }
    }(Op = Dp.prototype).projectToRef ?? (Op.projectToRef = (0, Yp.k)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);