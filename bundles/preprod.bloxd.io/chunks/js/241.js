export const id = 241;
export const ids = [241];
export const modules = {
  38789: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy) {
        this.bu = yb, this.bv = bb, this.distance = Wy, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  38805: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(35869),
      hy = Wy(35861),
      fy = Wy(35864);
    class Zy {
      constructor(yb, bb, Wy) {
        this.vectors = (0, Uy.c)(8, hy.n.Zero), this.center = hy.n.Zero(), this.centerWorld = hy.n.Zero(), this.extendSize = hy.n.Zero(), this.extendSizeWorld = hy.n.Zero(), this.directions = (0, Uy.c)(3, hy.n.Zero), this.vectorsWorld = (0, Uy.c)(8, hy.n.Zero), this.minimumWorld = hy.n.Zero(), this.maximumWorld = hy.n.Zero(), this.minimum = hy.n.Zero(), this.maximum = hy.n.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(yb, bb, Wy)
      }
      reConstruct(yb, bb, Wy) {
        const Uy = yb.x,
          fy = yb.y,
          Zy = yb.z,
          cb = bb.x,
          Py = bb.y,
          oy = bb.z,
          By = this.vectors;
        this.minimum.vcy(Uy, fy, Zy), this.maximum.vcy(cb, Py, oy), By[0].vcy(Uy, fy, Zy), By[1].vcy(cb, Py, oy), By[2].vcy(cb, fy, Zy), By[3].vcy(Uy, Py, Zy), By[4].vcy(Uy, fy, oy), By[5].vcy(cb, Py, Zy), By[6].vcy(Uy, Py, oy), By[7].vcy(cb, fy, oy), bb.addToRef(yb, this.center).scaleInPlace(.5), bb.subtractToRef(yb, this.extendSize).scaleInPlace(.5), this._worldMatrix = Wy || hy.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(yb) {
        const bb = Zy._TmpVector3,
          Wy = this.maximum.subtractToRef(this.minimum, bb[0]),
          Uy = Wy.length();
        Wy.normalizeFromLength(Uy);
        const hy = Uy * yb,
          fy = Wy.scaleInPlace(.5 * hy),
          cb = this.center.subtractToRef(fy, bb[1]),
          Py = this.center.addToRef(fy, bb[2]);
        return this.reConstruct(cb, Py, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(yb) {
        const bb = this.minimumWorld,
          Wy = this.maximumWorld,
          Uy = this.directions,
          fy = this.vectorsWorld,
          Zy = this.vectors;
        if (yb.isIdentity()) {
          bb.Coy(this.minimum), Wy.Coy(this.maximum);
          for (let yb = 0; yb < 8; ++yb) fy[yb].Coy(Zy[yb]);
          this.extendSizeWorld.Coy(this.extendSize), this.centerWorld.Coy(this.center)
        } else {
          bb.dfy(Number.MAX_VALUE), Wy.dfy(-Number.MAX_VALUE);
          for (let Uy = 0; Uy < 8; ++Uy) {
            const cb = fy[Uy];
            hy.n.TransformCoordinatesToRef(Zy[Uy], yb, cb), bb.minimizeInPlace(cb), Wy.maximizeInPlace(cb)
          }
          Wy.subtractToRef(bb, this.extendSizeWorld).scaleInPlace(.5), Wy.addToRef(bb, this.centerWorld).scaleInPlace(.5)
        }
        hy.n.FromArrayToRef(yb.m, 0, Uy[0]), hy.n.FromArrayToRef(yb.m, 4, Uy[1]), hy.n.FromArrayToRef(yb.m, 8, Uy[2]), this._worldMatrix = yb
      }
      isInFrustum(yb) {
        return Zy.IsInFrustum(this.vectorsWorld, yb)
      }
      isCompletelyInFrustum(yb) {
        return Zy.IsCompletelyInFrustum(this.vectorsWorld, yb)
      }
      intersectsPoint(yb) {
        const bb = this.minimumWorld,
          Wy = this.maximumWorld,
          Uy = bb.x,
          hy = bb.y,
          Zy = bb.z,
          cb = Wy.x,
          Py = Wy.y,
          oy = Wy.z,
          By = yb.x,
          Ky = yb.y,
          ey = yb.z,
          qb = -fy.e;
        return !(cb - By < qb || qb > By - Uy) && (!(Py - Ky < qb || qb > Ky - hy) && !(oy - ey < qb || qb > ey - Zy))
      }
      intersectsSphere(yb) {
        return Zy.IntersectsSphere(this.minimumWorld, this.maximumWorld, yb.centerWorld, yb.radiusWorld)
      }
      intersectsMinMax(yb, bb) {
        const Wy = this.minimumWorld,
          Uy = this.maximumWorld,
          hy = Wy.x,
          fy = Wy.y,
          Zy = Wy.z,
          cb = Uy.x,
          Py = Uy.y,
          oy = Uy.z,
          By = yb.x,
          Ky = yb.y,
          ey = yb.z,
          qb = bb.x,
          sy = bb.y,
          Sy = bb.z;
        return !(cb < By || hy > qb) && (!(Py < Ky || fy > sy) && !(oy < ey || Zy > Sy))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(yb, bb) {
        return yb.intersectsMinMax(bb.minimumWorld, bb.maximumWorld)
      }
      static IntersectsSphere(yb, bb, Wy, Uy) {
        const fy = Zy._TmpVector3[0];
        hy.n.ClampToRef(Wy, yb, bb, fy);
        return hy.n.DistanceSquared(Wy, fy) <= Uy * Uy
      }
      static IsCompletelyInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; ++Wy) {
          const Uy = bb[Wy];
          for (let bb = 0; bb < 8; ++bb)
            if (Uy.dotCoordinate(yb[bb]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; ++Wy) {
          let Uy = !0;
          const hy = bb[Wy];
          for (let bb = 0; bb < 8; ++bb)
            if (hy.dotCoordinate(yb[bb]) >= 0) {
              Uy = !1;
              break
            } if (Uy) return !1
        }
        return !0
      }
    }
    Zy._TmpVector3 = (0, Uy.c)(3, hy.n.Zero)
  },
  38797: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky
    });
    var Uy = Wy(35869),
      hy = Wy(35861),
      fy = Wy(38805);
    class Zy {
      constructor(yb, bb, Wy) {
        this.center = hy.n.Zero(), this.centerWorld = hy.n.Zero(), this.minimum = hy.n.Zero(), this.maximum = hy.n.Zero(), this.reConstruct(yb, bb, Wy)
      }
      reConstruct(yb, bb, Wy) {
        this.minimum.Coy(yb), this.maximum.Coy(bb);
        const Uy = hy.n.Distance(yb, bb);
        bb.addToRef(yb, this.center).scaleInPlace(.5), this.radius = .5 * Uy, this._update(Wy || hy.c.IdentityReadOnly)
      }
      scale(yb) {
        const bb = Zy._TmpVector3,
          Wy = this.maximum.subtractToRef(this.minimum, bb[0]),
          Uy = Wy.length();
        Wy.normalizeFromLength(Uy);
        const hy = Uy * yb,
          fy = Wy.scaleInPlace(.5 * hy),
          cb = this.center.subtractToRef(fy, bb[1]),
          Py = this.center.addToRef(fy, bb[2]);
        return this.reConstruct(cb, Py, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(yb) {
        if (yb.isIdentity()) this.centerWorld.Coy(this.center), this.radiusWorld = this.radius;
        else {
          hy.n.TransformCoordinatesToRef(this.center, yb, this.centerWorld);
          const bb = Zy._TmpVector3[0];
          hy.n.TransformNormalFromFloatsToRef(1, 1, 1, yb, bb), this.radiusWorld = Math.max(Math.abs(bb.x), Math.abs(bb.y), Math.abs(bb.z)) * this.radius
        }
      }
      isInFrustum(yb) {
        const bb = this.centerWorld,
          Wy = this.radiusWorld;
        for (let Uy = 0; Uy < 6; Uy++)
          if (yb[Uy].dotCoordinate(bb) <= -Wy) return !1;
        return !0
      }
      isCenterInFrustum(yb) {
        const bb = this.centerWorld;
        for (let Wy = 0; Wy < 6; Wy++)
          if (yb[Wy].dotCoordinate(bb) < 0) return !1;
        return !0
      }
      intersectsPoint(yb) {
        const bb = hy.n.DistanceSquared(this.centerWorld, yb);
        return !(this.radiusWorld * this.radiusWorld < bb)
      }
      static Intersects(yb, bb) {
        const Wy = hy.n.DistanceSquared(yb.centerWorld, bb.centerWorld),
          Uy = yb.radiusWorld + bb.radiusWorld;
        return !(Uy * Uy < Wy)
      }
      static CreateFromCenterAndRadius(yb, bb, Wy) {
        this._TmpVector3[0].Coy(yb), this._TmpVector3[1].vcy(0, 0, bb), this._TmpVector3[2].Coy(yb), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].TBy(this._TmpVector3[1]);
        const Uy = new Zy(this._TmpVector3[0], this._TmpVector3[2]);
        return Uy._worldMatrix = Wy || hy.c.Identity(), Uy
      }
    }
    Zy._TmpVector3 = (0, Uy.c)(3, hy.n.Zero);
    const cb = {
        min: 0,
        max: 0
      },
      Py = {
        min: 0,
        max: 0
      },
      oy = (yb, bb, Wy) => {
        const Uy = hy.n.Dot(bb.centerWorld, yb),
          fy = Math.abs(hy.n.Dot(bb.directions[0], yb)) * bb.extendSize.x + Math.abs(hy.n.Dot(bb.directions[1], yb)) * bb.extendSize.y + Math.abs(hy.n.Dot(bb.directions[2], yb)) * bb.extendSize.z;
        Wy.min = Uy - fy, Wy.max = Uy + fy
      },
      By = (yb, bb, Wy) => (oy(yb, bb, cb), oy(yb, Wy, Py), !(cb.min > Py.max || Py.min > cb.max));
    class Ky {
      constructor(yb, bb, Wy) {
        this._isLocked = !1, this.boundingBox = new fy.e(yb, bb, Wy), this.GBy = new Zy(yb, bb, Wy)
      }
      reConstruct(yb, bb, Wy) {
        this.boundingBox.reConstruct(yb, bb, Wy), this.GBy.reConstruct(yb, bb, Wy)
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
      set isLocked(yb) {
        this._isLocked = yb
      }
      update(yb) {
        this._isLocked || (this.boundingBox._update(yb), this.GBy._update(yb))
      }
      centerOn(yb, bb) {
        const Wy = Ky._TmpVector3[0].Coy(yb).TBy(bb),
          Uy = Ky._TmpVector3[1].Coy(yb).addInPlace(bb);
        return this.boundingBox.reConstruct(Wy, Uy, this.boundingBox.getWorldMatrix()), this.GBy.reConstruct(Wy, Uy, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(yb) {
        const bb = hy.n.Minimize(this.minimum, yb),
          Wy = hy.n.Maximize(this.maximum, yb);
        return this.reConstruct(bb, Wy, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(yb) {
        const bb = hy.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(bb);
        const Wy = hy.j.dU[0];
        return hy.n.TransformCoordinatesToRef(yb.boundingBox.minimumWorld, bb, Wy), this.encapsulate(Wy), hy.n.TransformCoordinatesToRef(yb.boundingBox.maximumWorld, bb, Wy), this.encapsulate(Wy), this
      }
      scale(yb) {
        return this.boundingBox.scale(yb), this.GBy.scale(yb), this
      }
      isInFrustum(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === bb || 3 === bb) && this.GBy.isCenterInFrustum(yb)) return !0;
        if (!this.GBy.isInFrustum(yb)) return !1;
        return !(1 !== bb && 3 !== bb) || this.boundingBox.isInFrustum(yb)
      }
      get diagonalLength() {
        const yb = this.boundingBox;
        return yb.maximumWorld.subtractToRef(yb.minimumWorld, Ky._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(yb) {
        return this.boundingBox.isCompletelyInFrustum(yb)
      }
      _checkCollision(yb) {
        return yb._canDoCollision(this.GBy.centerWorld, this.GBy.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(yb) {
        return !!this.GBy.centerWorld && (!!this.GBy.intersectsPoint(yb) && !!this.boundingBox.intersectsPoint(yb))
      }
      intersects(yb, bb) {
        if (!Zy.Intersects(this.GBy, yb.GBy)) return !1;
        if (!fy.e.Intersects(this.boundingBox, yb.boundingBox)) return !1;
        if (!bb) return !0;
        const Wy = this.boundingBox,
          Uy = yb.boundingBox;
        return !!By(Wy.directions[0], Wy, Uy) && (!!By(Wy.directions[1], Wy, Uy) && (!!By(Wy.directions[2], Wy, Uy) && (!!By(Uy.directions[0], Wy, Uy) && (!!By(Uy.directions[1], Wy, Uy) && (!!By(Uy.directions[2], Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[0], Uy.directions[0]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[0], Uy.directions[1]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[0], Uy.directions[2]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[1], Uy.directions[0]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[1], Uy.directions[1]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[1], Uy.directions[2]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[2], Uy.directions[0]), Wy, Uy) && (!!By(hy.n.Cross(Wy.directions[2], Uy.directions[1]), Wy, Uy) && !!By(hy.n.Cross(Wy.directions[2], Uy.directions[2]), Wy, Uy))))))))))))))
      }
    }
    Ky._TmpVector3 = (0, Uy.c)(2, hy.n.Zero)
  },
  38830: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      g: () => Py,
      h: () => cb,
      k: () => Zy
    });
    var Uy = Wy(38633),
      hy = Wy(35861);

    function fy(yb) {
      -1 === yb.indexOf("vClipPlane") && yb.push("vClipPlane"), -1 === yb.indexOf("vClipPlane2") && yb.push("vClipPlane2"), -1 === yb.indexOf("vClipPlane3") && yb.push("vClipPlane3"), -1 === yb.indexOf("vClipPlane4") && yb.push("vClipPlane4"), -1 === yb.indexOf("vClipPlane5") && yb.push("vClipPlane5"), -1 === yb.indexOf("vClipPlane6") && yb.push("vClipPlane6")
    }

    function Zy(yb, bb, Wy) {
      const Uy = !!(yb.clipPlane ?? bb.clipPlane),
        hy = !!(yb.clipPlane2 ?? bb.clipPlane2),
        fy = !!(yb.clipPlane3 ?? bb.clipPlane3),
        Zy = !!(yb.clipPlane4 ?? bb.clipPlane4),
        cb = !!(yb.clipPlane5 ?? bb.clipPlane5),
        Py = !!(yb.clipPlane6 ?? bb.clipPlane6);
      Uy && Wy.push("#define CLIPPLANE"), hy && Wy.push("#define CLIPPLANE2"), fy && Wy.push("#define CLIPPLANE3"), Zy && Wy.push("#define CLIPPLANE4"), cb && Wy.push("#define CLIPPLANE5"), Py && Wy.push("#define CLIPPLANE6")
    }

    function cb(yb, bb, Wy) {
      let Uy = !1;
      const hy = !!(yb.clipPlane ?? bb.clipPlane),
        fy = !!(yb.clipPlane2 ?? bb.clipPlane2),
        Zy = !!(yb.clipPlane3 ?? bb.clipPlane3),
        cb = !!(yb.clipPlane4 ?? bb.clipPlane4),
        Py = !!(yb.clipPlane5 ?? bb.clipPlane5),
        oy = !!(yb.clipPlane6 ?? bb.clipPlane6);
      return Wy.CLIPPLANE !== hy && (Wy.CLIPPLANE = hy, Uy = !0), Wy.CLIPPLANE2 !== fy && (Wy.CLIPPLANE2 = fy, Uy = !0), Wy.CLIPPLANE3 !== Zy && (Wy.CLIPPLANE3 = Zy, Uy = !0), Wy.CLIPPLANE4 !== cb && (Wy.CLIPPLANE4 = cb, Uy = !0), Wy.CLIPPLANE5 !== Py && (Wy.CLIPPLANE5 = Py, Uy = !0), Wy.CLIPPLANE6 !== oy && (Wy.CLIPPLANE6 = oy, Uy = !0), Uy
    }

    function Py(yb, bb, Wy) {
      let Uy = bb.clipPlane ?? Wy.clipPlane;
      oy(yb, "vClipPlane", Uy), Uy = bb.clipPlane2 ?? Wy.clipPlane2, oy(yb, "vClipPlane2", Uy), Uy = bb.clipPlane3 ?? Wy.clipPlane3, oy(yb, "vClipPlane3", Uy), Uy = bb.clipPlane4 ?? Wy.clipPlane4, oy(yb, "vClipPlane4", Uy), Uy = bb.clipPlane5 ?? Wy.clipPlane5, oy(yb, "vClipPlane5", Uy), Uy = bb.clipPlane6 ?? Wy.clipPlane6, oy(yb, "vClipPlane6", Uy)
    }

    function oy(yb, bb, Wy) {
      if (Wy) {
        const fy = Uy.c.kWy()?.floatingOriginOffset || hy.n.ZeroReadOnly;
        yb.setFloat4(bb, Wy.normal.x, Wy.normal.y, Wy.normal.z, Wy.d + hy.n.Dot(Wy.normal, fy))
      }
    }
  },
  38846: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(yb, bb) {
        this._defines[yb] || (yb < this._currentRank && (this._currentRank = yb), yb > this._maxRank && (this._maxRank = yb), this._defines[yb] = new Array), this._defines[yb].push(bb)
      }
      addCPUSkinningFallback(yb, bb) {
        this._mesh = bb, yb < this._currentRank && (this._currentRank = yb), yb > this._maxRank && (this._maxRank = yb)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(yb, bb) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, yb = yb.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), bb._bonesComputationForcedToCPU = !0;
          const Wy = this._mesh.kWy();
          for (let yb = 0; yb < Wy.meshes.length; yb++) {
            const Uy = Wy.meshes[yb];
            if (Uy.material) {
              if (Uy.computeBonesUsingShaders && 0 !== Uy.numBoneInfluencers)
                if (Uy.material.getEffect() === bb) Uy.computeBonesUsingShaders = !1;
                else if (Uy.vJ)
                for (const yb of Uy.vJ) {
                  if (yb.effect === bb) {
                    Uy.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Uy.computeBonesUsingShaders && Uy.numBoneInfluencers > 0 && (Uy.computeBonesUsingShaders = !1)
          }
        } else {
          const bb = this._defines[this._currentRank];
          if (bb)
            for (let Wy = 0; Wy < bb.length; Wy++) yb = yb.replace("#define " + bb[Wy], "");
          this._currentRank++
        }
        return yb
      }
    }
  },
  38782: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => mb
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38576),
      Zy = Wy(35893),
      cb = Wy(35886),
      Py = Wy(38784),
      oy = Wy(38607),
      By = Wy(37350),
      Ky = Wy(36434),
      ey = Wy(38822),
      qb = Wy(38485);
    let sy = (() => {
      var yb;
      let bb, Wy, fy, Zy, cb, Py, oy, By, Ky, ey, sy, Sy, Ey = [];
      return yb = class {
        constructor() {
          this._func = (0, Uy.l)(this, Ey), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(yb) {
          this._func = yb
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(yb) {
          this._backFunc = yb
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(yb) {
          this._funcRef = yb
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(yb) {
          this._funcMask = yb
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(yb) {
          this._opStencilFail = yb
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(yb) {
          this._opDepthFail = yb
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(yb) {
          this._opStencilDepthPass = yb
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(yb) {
          this._backOpStencilFail = yb
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(yb) {
          this._backOpDepthFail = yb
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(yb) {
          this._backOpStencilDepthPass = yb
        }
        get mask() {
          return this._mask
        }
        set mask(yb) {
          this._mask = yb
        }
        get enabled() {
          return this._enabled
        }
        set enabled(yb) {
          this._enabled = yb
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(yb) {
          qb.c.Clone((() => yb), this)
        }
        serialize() {
          return qb.c.Serialize(this)
        }
        parse(yb, bb, Wy) {
          qb.c.Parse((() => this), yb, bb, Wy)
        }
      }, (() => {
        const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], Zy = [(0, hy.T)()], cb = [(0, hy.T)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], By = [(0, hy.T)()], Ky = [(0, hy.T)()], ey = [(0, hy.T)()], sy = [(0, hy.T)()], Sy = [(0, hy.T)()], (0, Uy.j)(yb, null, bb, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: yb => "func" in yb,
            get: yb => yb.func
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, Wy, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: yb => "backFunc" in yb,
            get: yb => yb.backFunc
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, fy, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: yb => "funcRef" in yb,
            get: yb => yb.funcRef
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, Zy, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: yb => "funcMask" in yb,
            get: yb => yb.funcMask
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, cb, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: yb => "opStencilFail" in yb,
            get: yb => yb.opStencilFail
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, Py, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: yb => "opDepthFail" in yb,
            get: yb => yb.opDepthFail
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, oy, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: yb => "opStencilDepthPass" in yb,
            get: yb => yb.opStencilDepthPass
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, By, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: yb => "backOpStencilFail" in yb,
            get: yb => yb.backOpStencilFail
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, Ky, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: yb => "backOpDepthFail" in yb,
            get: yb => yb.backOpDepthFail
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, ey, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: yb => "backOpStencilDepthPass" in yb,
            get: yb => yb.backOpStencilDepthPass
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, sy, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: yb => "mask" in yb,
            get: yb => yb.mask
          },
          metadata: qb
        }, null, Ey), (0, Uy.j)(yb, null, Sy, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "enabled" in yb,
            get: yb => yb.enabled
          },
          metadata: qb
        }, null, Ey), qb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qb
        })
      })(), yb
    })();
    var Sy = Wy(38824),
      Ey = Wy(38383),
      ly = Wy(38347);
    let mb = (() => {
      var yb;
      let bb, Wy, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy, Xy, ny, uy, rb, Hy, ab, Fy, py, Ly, Qy, jb, Dy, tb, wy = [],
        kb = [],
        Ny = [],
        zb = [],
        Iy = [],
        xb = [],
        Ay = [],
        dy = [],
        yW = [],
        bW = [],
        Wb = [],
        Ub = [],
        hb = [],
        fb = [],
        Zb = [],
        cW = [],
        Pb = [],
        ob = [],
        Bb = [],
        Kb = [],
        eb = [],
        qW = [],
        sb = [],
        Sb = [],
        Eb = [],
        lb = [],
        mW = [],
        Cb = [],
        Tb = [],
        Vb = [],
        Jb = [],
        gW = [],
        Gb = [],
        Ob = [],
        Rb = [],
        vW = [],
        iW = [],
        Mb = [],
        Yb = [],
        Xb = [],
        nb = [],
        ub = [],
        rW = [],
        Hb = [],
        aW = [],
        Fb = [],
        pb = [],
        Lb = [],
        Qb = [],
        jW = [],
        Db = [];
      return yb = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(bb) {
          this._useVertexPulling !== bb && (this._useVertexPulling = bb, this.goy(yb.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(yb) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(bb) {
          if (this._alpha === bb) return;
          const Wy = this._alpha;
          this._alpha = bb, 1 !== Wy && 1 !== bb || this.goy(yb.MiscDirtyFlag + yb.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(bb) {
          this._backFaceCulling !== bb && (this._backFaceCulling = bb, this.goy(yb.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(bb) {
          const Wy = Math.max(0, Math.min(0 | bb, 4));
          this._textureRepetitionMode !== Wy && (this._textureRepetitionMode = Wy, this.goy(yb.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(bb) {
          this._cullBackFaces !== bb && (this._cullBackFaces = bb, this.goy(yb.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(yb) {
          this._blockDirtyMechanism !== yb && (this._blockDirtyMechanism = yb, yb || this.markDirty())
        }
        atomicMaterialsUpdate(yb) {
          this.blockDirtyMechanism = !0;
          try {
            yb(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(yb) {
          this._onDisposeObserver && this.Nby.remove(this._onDisposeObserver), this._onDisposeObserver = this.Nby.add(yb)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Zy.c), this._onBindObservable
        }
        set onBind(yb) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(yb)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Zy.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Zy.c), this._onEffectCreatedObservable
        }
        set alphaMode(yb) {
          this._alphaMode[0] = yb
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Wy] !== bb && (this._alphaMode[Wy] = bb, this.goy(yb.TextureDirtyFlag))
        }
        set needDepthPrePass(yb) {
          this._needDepthPrePass !== yb && (this._needDepthPrePass = yb, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(bb) {
          this._fogEnabled !== bb && (this._fogEnabled = bb, this.goy(yb.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case yb.WireFrameFillMode:
            case yb.LineListDrawMode:
            case yb.LineLoopDrawMode:
            case yb.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(bb) {
          this.fillMode = bb ? yb.WireFrameFillMode : yb.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case yb.PointFillMode:
            case yb.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(bb) {
          this.fillMode = bb ? yb.PointFillMode : yb.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(bb) {
          this._fillMode !== bb && (this._fillMode = bb, this.goy(yb.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(yb) {
          const bb = this.kWy().xh().getCaps().fragmentDepthSupported;
          yb && !bb && By.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = yb && bb, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(yb) {
          this._isVertexOutputInvariant !== yb && (this._isVertexOutputInvariant = yb, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(yb) {
          this._drawWrapper = yb
        }
        constructor(bb, Wy, hy) {
          let Py = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Uy.l)(this, wy), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Uy.l)(this, kb, void 0), this.uniqueId = ((0, Uy.l)(this, Ny), (0, Uy.l)(this, zb, void 0)), this._loadedUniqueId = (0, Uy.l)(this, Iy), this.name = (0, Uy.l)(this, xb, void 0), this.metadata = ((0, Uy.l)(this, Ay), (0, Uy.l)(this, dy, null)), this._internalMetadata = (0, Uy.l)(this, yW), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Uy.l)(this, bW, !1), this.checkReadyOnlyOnce = ((0, Uy.l)(this, Wb), (0, Uy.l)(this, Ub, !1)), this.state = ((0, Uy.l)(this, hb), (0, Uy.l)(this, fb, "")), this._alpha = ((0, Uy.l)(this, Zb), (0, Uy.l)(this, cW, 1)), this.inspectableCustomProperties = (0, Uy.l)(this, Pb), this._backFaceCulling = (0, Uy.l)(this, ob, !0), this._textureRepetitionMode = ((0, Uy.l)(this, Bb), (0, Uy.l)(this, Kb, 0)), this.textureRepetitionHexTilingParams = ((0, Uy.l)(this, eb), (0, Uy.l)(this, qW, [1, .6, 7, .5])), this._cullBackFaces = ((0, Uy.l)(this, sb), (0, Uy.l)(this, Sb, !0)), this._blockDirtyMechanism = ((0, Uy.l)(this, Eb), !1), this.sideOrientation = (0, Uy.l)(this, lb, null), this.onCompiled = ((0, Uy.l)(this, mW), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Nby = new Zy.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Uy.l)(this, Cb, [2]), this._needDepthPrePass = ((0, Uy.l)(this, Tb), (0, Uy.l)(this, Vb, !1)), this.disableDepthWrite = ((0, Uy.l)(this, Jb), (0, Uy.l)(this, gW, !1)), this.disableColorWrite = ((0, Uy.l)(this, Gb), (0, Uy.l)(this, Ob, !1)), this.forceDepthWrite = ((0, Uy.l)(this, Rb), (0, Uy.l)(this, vW, !1)), this.depthFunction = ((0, Uy.l)(this, iW), (0, Uy.l)(this, Mb, 0)), this.separateCullingPass = ((0, Uy.l)(this, Yb), (0, Uy.l)(this, Xb, !1)), this._fogEnabled = ((0, Uy.l)(this, nb), (0, Uy.l)(this, ub, !0)), this.pointSize = ((0, Uy.l)(this, rW), (0, Uy.l)(this, Hb, 1)), this.zOffset = ((0, Uy.l)(this, aW), (0, Uy.l)(this, Fb, 0)), this.zOffsetUnits = ((0, Uy.l)(this, pb), (0, Uy.l)(this, Lb, 0)), this.clipPlane = (0, Uy.l)(this, Qb), this.stencil = new sy, this._isVertexOutputInvariant = (0, Uy.l)(this, jW, yb.ForceVertexOutputInvariant), this._materialContext = (0, Uy.l)(this, Db), this._useUBO = !1, this._fillMode = yb.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = bb;
          const By = Wy || cb.c.LastCreatedScene;
          By && (this._scene = By, this._dirtyCallbacks = {}, this._forceGLSL = Py, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = bb || fy.k.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.xh().createMaterialContext(), this._drawWrapper = new ey.c(this._scene.xh(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new oy.b(this._scene.xh(), void 0, void 0, bb), this._useUBO = this.kWy().xh().supportsUniformBuffers, this._createUniformBuffer(), hy || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), yb.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const yb = this.kWy().xh();
          this._uniformBuffer?.dispose(), yb.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new oy.b(yb, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new oy.b(this._scene.xh(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(yb) {
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
        isReady(yb, bb) {
          return !0
        }
        isReadyForSubMesh(yb, bb, Wy) {
          const Uy = bb.materialDefines;
          return !!Uy && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Uy, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        kWy() {
          return this._scene
        }
        _getEffectiveOrientation(yb) {
          return null !== this.sideOrientation ? this.sideOrientation : yb.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(yb) {
          this._transparencyMode = yb
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === yb.MATERIAL_ALPHABLEND || this._transparencyMode === yb.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === yb.MATERIAL_ALPHATEST || this._transparencyMode === yb.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === yb.MATERIAL_OPAQUE || this._transparencyMode === yb.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(yb) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : yb.visibility < 1 || !this._disableAlphaBlending && (yb.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(yb) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(yb) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Wy = this.kWy().meshes;
          for (const yb of Wy)
            if (yb.vJ)
              for (const Wy of yb.vJ)
                if (Wy.Wh() === this)
                  for (const yb of Wy._drawWrappers) yb && this._materialContext === yb.materialContext && (yb._wasPreviouslyReady = !1, yb._wasPreviouslyUsingInstances = null, yb._forceRebindOnNextCall = bb);
          bb && this.goy(yb.AllDirtyFlag)
        }
        _preBind(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Uy = this._scene.xh(),
            hy = (null == Wy ? this.sideOrientation : Wy) === yb.ClockWiseSideOrientation,
            fy = bb || this._getDrawWrapper();
          return (0, Ey.d)(fy) && fy.materialContext && (fy.materialContext.useVertexPulling = this.useVertexPulling), Uy.enableEffect(fy), Uy.setState(this.backFaceCulling, this.zOffset, !1, hy, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), hy
        }
        bind(yb, bb) {}
        buildUniformLayout() {
          const yb = this._uniformBuffer;
          this._eventInfo.ubo = yb, this._callbackPluginEventGeneric(8, this._eventInfo), yb.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(yb, bb, Wy) {
          const Uy = Wy._drawWrapper;
          this._eventInfo.subMesh = Wy, this._callbackPluginEventBindForSubMesh(this._eventInfo), Uy._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(yb) {}
        bindView(yb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : yb.setMatrix("view", this.kWy().getViewMatrix())
        }
        bindViewProjection(yb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (yb.setMatrix("viewProjection", this.kWy().getTransformMatrix()), yb.setMatrix("projection", this.kWy().getProjectionMatrix()), yb.setMatrix("inverseProjection", this.kWy().getInverseProjectionMatrix()))
        }
        bindEyePosition(yb, bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(yb, bb)
        }
        _afterBind(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && bb && (this._needToBindSceneUbo = !1, (0, Sy.v)(bb, this.kWy().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = yb ? yb.visibility : 1, this._onBindObservable && yb && this._onBindObservable.notifyObservers(yb), this.disableDepthWrite) {
            const yb = this._scene.xh();
            this._cachedDepthWriteState = yb.getDepthWrite(), yb.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const yb = this._scene.xh();
            this._cachedColorWriteState = yb.getColorWrite(), yb.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const yb = this._scene.xh();
            this._cachedDepthFunctionState = yb.getDepthFunction() || 0, yb.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.xh().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.xh().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.xh().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(yb) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = yb, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(yb) {
          return null
        }
        _clonePlugins(bb, Wy) {
          const Uy = {};
          if (this._serializePlugins(Uy), yb._ParsePlugins(Uy, bb, this._scene, Wy), this.pluginManager)
            for (const yb of this.pluginManager._plugins) {
              const Wy = bb.pluginManager.getPlugin(yb.name);
              Wy && yb.copyTo(Wy)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const yb = [];
            for (const bb in this.meshMap) {
              const Wy = this.meshMap[bb];
              Wy && yb.push(Wy)
            }
            return yb
          }
          return this._scene.meshes.filter((yb => yb.material === this))
        }
        forceCompilation(yb, bb, Wy, Uy) {
          const hy = {
              clipPlane: !1,
              useInstances: !1,
              ...Wy
            },
            fy = this.kWy(),
            Zy = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const cb = () => {
            if (!this._scene || !this._scene.xh()) return;
            const Wy = fy.clipPlane;
            if (hy.clipPlane && (fy.clipPlane = new Ky.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Wy = !0,
                fy = null;
              if (yb.vJ) {
                const bb = new Py.d(0, 0, 0, 0, 0, yb, void 0, !1, !1);
                bb.materialDefines && (bb.materialDefines._renderId = -1), this.isReadyForSubMesh(yb, bb, hy.useInstances) || (bb.effect && bb.effect.getCompilationError() && bb.effect.allFallbacksProcessed() ? fy = bb.effect.getCompilationError() : (Wy = !1, setTimeout(cb, 16)))
              }
              Wy && (this.allowShaderHotSwapping = Zy, fy && Uy && Uy(fy), bb && bb(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Zy, bb && bb(this)) : setTimeout(cb, 16);
            hy.clipPlane && (fy.clipPlane = Wy)
          };
          cb()
        }
        async forceCompilationAsync(yb, bb) {
          return await new Promise(((Wy, Uy) => {
            this.forceCompilation(yb, (() => {
              Wy()
            }), bb, (yb => {
              Uy(yb)
            }))
          }))
        }
        goy(bb) {
          this.kWy().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (yb._DirtyCallbackArray.length = 0, bb & yb.ImageProcessingDirtyFlag && yb._DirtyCallbackArray.push(yb._ImageProcessingDirtyCallBack), bb & yb.TextureDirtyFlag && yb._DirtyCallbackArray.push(yb._TextureDirtyCallBack), bb & yb.LightDirtyFlag && yb._DirtyCallbackArray.push(yb._LightsDirtyCallBack), bb & yb.FresnelDirtyFlag && yb._DirtyCallbackArray.push(yb._FresnelDirtyCallBack), bb & yb.AttributesDirtyFlag && yb._DirtyCallbackArray.push(yb._AttributeDirtyCallBack), bb & yb.MiscDirtyFlag && yb._DirtyCallbackArray.push(yb._MiscDirtyCallBack), bb & yb.PrePassDirtyFlag && yb._DirtyCallbackArray.push(yb._PrePassDirtyCallBack), yb._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(yb._RunDirtyCallBacks), this.kWy().resetCachedMaterial())
        }
        resetDrawCache() {
          const yb = this.kWy().meshes;
          for (const bb of yb)
            if (bb.vJ)
              for (const yb of bb.vJ) yb.Wh() === this && yb.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(yb) {
          const bb = this.kWy();
          if (bb.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Wy = bb.meshes;
          for (const Uy of Wy)
            if (Uy.vJ)
              for (const Wy of Uy.vJ) {
                if ((Wy.Wh() || (bb._hasDefaultMaterial ? bb.defaultMaterial : null)) === this)
                  for (const bb of Wy._drawWrappers) bb && bb.defines && bb.defines.markAllAsDirty && this._materialContext === bb.materialContext && yb(bb.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.kWy().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const yb = this.kWy().enablePrePassRenderer();
          yb && yb.goy()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(yb._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(yb._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(yb._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(yb._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(yb._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(yb._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(yb._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(yb._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(yb._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(yb._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const yb = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Nby.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(yb)
            }))
          }
        }
        setPrePassRenderer(yb) {
          return !1
        }
        dispose(yb, bb, Wy) {
          const Uy = this.kWy();
          if (Uy.stopAnimation(this), Uy.freeProcessedMaterials(), Uy.removeMaterial(this), this._eventInfo.forceDisposeTextures = bb, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const yb = this._parentContainer.materials.indexOf(this);
            yb > -1 && this._parentContainer.materials.splice(yb, 1), this._parentContainer = null
          }
          if (!0 !== Wy)
            if (this.meshMap)
              for (const hy in this.meshMap) {
                const yb = this.meshMap[hy];
                this._disposeMeshResources(yb)
              } else {
                const yb = Uy.meshes;
                for (const bb of yb) this._disposeMeshResources(bb)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Nby.notifyObservers(this), this.Nby.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(yb) {
          if (!yb) return;
          const bb = yb.geometry,
            Wy = yb._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (yb.vJ && Wy)
              for (const Uy of yb.vJ) {
                const yb = Uy._drawWrappers;
                for (let hy = 0; hy < yb.length; hy++) {
                  const fy = yb[hy]?.effect;
                  if (!fy) continue;
                  Wy[hy] === this && (bb?._releaseVertexArrayObject(fy), Uy._removeDrawWrapper(hy, !0, !0))
                }
              }
          } else bb?._releaseVertexArrayObject(this._drawWrapper.effect);
          yb.material !== this || yb.zKy || (yb.material = null)
        }
        serialize() {
          const yb = qb.c.Serialize(this);
          return yb.stencil = this.stencil.serialize(), yb.uniqueId = this.uniqueId, this._serializePlugins(yb), yb
        }
        _serializePlugins(yb) {
          if (yb.plugins = {}, this.pluginManager)
            for (const bb of this.pluginManager._plugins) bb.doNotSerialize || (yb.plugins[bb.getClassName()] = bb.serialize())
        }
        static ParseAlphaMode(yb, bb) {
          void 0 !== yb._alphaMode ? bb._alphaMode = Array.isArray(yb._alphaMode) ? [...yb._alphaMode] : [yb._alphaMode] : void 0 !== yb.alphaMode ? bb._alphaMode = Array.isArray(yb.alphaMode) ? [...yb.alphaMode] : [yb.alphaMode] : bb._alphaMode = [2]
        }
        static Parse(bb, Wy, Uy) {
          if (bb.customType) {
            if ("BABYLON.PBRMaterial" === bb.customType && bb.overloadedAlbedo && (bb.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return By.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else bb.customType = "BABYLON.StandardMaterial";
          const hy = fy.k.Instantiate(bb.customType).Parse(bb, Wy, Uy);
          return hy._loadedUniqueId = bb.uniqueId, yb.ParseAlphaMode(bb, hy), hy
        }
        static _ParsePlugins(yb, bb, Wy, Uy) {
          if (yb.plugins)
            for (const hy in yb.plugins) {
              const Zy = yb.plugins[hy];
              let cb = bb.pluginManager?.getPlugin(Zy.name);
              if (!cb) {
                const yb = fy.k.Instantiate("BABYLON." + hy);
                yb && (cb = new yb(bb))
              }
              cb?.parse(Zy, Wy, Uy)
            }
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, hy.T)()], Wy = [(0, hy.T)()], ly = [(0, hy.T)()], mb = [(0, hy.T)()], Cy = [(0, hy.T)()], Ty = [(0, hy.T)()], Vy = [(0, hy.T)()], Jy = [(0, hy.T)("alpha")], gb = [(0, hy.T)("backFaceCulling")], Gy = [(0, hy.T)("textureRepetitionMode")], Oy = [(0, hy.T)("textureRepetitionHexTilingParams")], Ry = [(0, hy.T)("cullBackFaces")], vb = [(0, hy.T)()], ib = [(0, hy.T)()], My = [(0, hy.T)()], Yy = [(0, hy.T)()], Xy = [(0, hy.T)()], ny = [(0, hy.T)()], uy = [(0, hy.T)()], rb = [(0, hy.T)()], Hy = [(0, hy.T)("fogEnabled")], ab = [(0, hy.T)()], Fy = [(0, hy.T)()], py = [(0, hy.T)()], Ly = [(0, hy.T)()], Qy = [(0, hy.T)()], jb = [(0, hy.T)()], Dy = [(0, hy.T)()], tb = [(0, hy.T)()], (0, Uy.j)(yb, null, Ly, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: yb => "pointsCloud" in yb,
            get: yb => yb.pointsCloud
          },
          metadata: fy
        }, null, wy), (0, Uy.j)(yb, null, Qy, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "fillMode" in yb,
            get: yb => yb.fillMode
          },
          metadata: fy
        }, null, wy), (0, Uy.j)(yb, null, jb, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: yb => "useLogarithmicDepth" in yb,
            get: yb => yb.useLogarithmicDepth
          },
          metadata: fy
        }, null, wy), (0, Uy.j)(yb, null, tb, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "transparencyMode" in yb,
            get: yb => yb.transparencyMode
          },
          metadata: fy
        }, null, wy), (0, Uy.j)(null, null, bb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: yb => "id" in yb,
            get: yb => yb.id,
            set: (yb, bb) => {
              yb.id = bb
            }
          },
          metadata: fy
        }, kb, Ny), (0, Uy.j)(null, null, Wy, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: yb => "uniqueId" in yb,
            get: yb => yb.uniqueId,
            set: (yb, bb) => {
              yb.uniqueId = bb
            }
          },
          metadata: fy
        }, zb, Iy), (0, Uy.j)(null, null, ly, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: yb => "name" in yb,
            get: yb => yb.name,
            set: (yb, bb) => {
              yb.name = bb
            }
          },
          metadata: fy
        }, xb, Ay), (0, Uy.j)(null, null, mb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: yb => "metadata" in yb,
            get: yb => yb.metadata,
            set: (yb, bb) => {
              yb.metadata = bb
            }
          },
          metadata: fy
        }, dy, yW), (0, Uy.j)(null, null, Cy, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: yb => "checkReadyOnEveryCall" in yb,
            get: yb => yb.checkReadyOnEveryCall,
            set: (yb, bb) => {
              yb.checkReadyOnEveryCall = bb
            }
          },
          metadata: fy
        }, bW, Wb), (0, Uy.j)(null, null, Ty, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: yb => "checkReadyOnlyOnce" in yb,
            get: yb => yb.checkReadyOnlyOnce,
            set: (yb, bb) => {
              yb.checkReadyOnlyOnce = bb
            }
          },
          metadata: fy
        }, Ub, hb), (0, Uy.j)(null, null, Vy, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: yb => "state" in yb,
            get: yb => yb.state,
            set: (yb, bb) => {
              yb.state = bb
            }
          },
          metadata: fy
        }, fb, Zb), (0, Uy.j)(null, null, Jy, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "_alpha" in yb,
            get: yb => yb._alpha,
            set: (yb, bb) => {
              yb._alpha = bb
            }
          },
          metadata: fy
        }, cW, Pb), (0, Uy.j)(null, null, gb, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: yb => "_backFaceCulling" in yb,
            get: yb => yb._backFaceCulling,
            set: (yb, bb) => {
              yb._backFaceCulling = bb
            }
          },
          metadata: fy
        }, ob, Bb), (0, Uy.j)(null, null, Gy, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "_textureRepetitionMode" in yb,
            get: yb => yb._textureRepetitionMode,
            set: (yb, bb) => {
              yb._textureRepetitionMode = bb
            }
          },
          metadata: fy
        }, Kb, eb), (0, Uy.j)(null, null, Oy, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: yb => "textureRepetitionHexTilingParams" in yb,
            get: yb => yb.textureRepetitionHexTilingParams,
            set: (yb, bb) => {
              yb.textureRepetitionHexTilingParams = bb
            }
          },
          metadata: fy
        }, qW, sb), (0, Uy.j)(null, null, Ry, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: yb => "_cullBackFaces" in yb,
            get: yb => yb._cullBackFaces,
            set: (yb, bb) => {
              yb._cullBackFaces = bb
            }
          },
          metadata: fy
        }, Sb, Eb), (0, Uy.j)(null, null, vb, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: yb => "sideOrientation" in yb,
            get: yb => yb.sideOrientation,
            set: (yb, bb) => {
              yb.sideOrientation = bb
            }
          },
          metadata: fy
        }, lb, mW), (0, Uy.j)(null, null, ib, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "_alphaMode" in yb,
            get: yb => yb._alphaMode,
            set: (yb, bb) => {
              yb._alphaMode = bb
            }
          },
          metadata: fy
        }, Cb, Tb), (0, Uy.j)(null, null, My, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: yb => "_needDepthPrePass" in yb,
            get: yb => yb._needDepthPrePass,
            set: (yb, bb) => {
              yb._needDepthPrePass = bb
            }
          },
          metadata: fy
        }, Vb, Jb), (0, Uy.j)(null, null, Yy, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: yb => "disableDepthWrite" in yb,
            get: yb => yb.disableDepthWrite,
            set: (yb, bb) => {
              yb.disableDepthWrite = bb
            }
          },
          metadata: fy
        }, gW, Gb), (0, Uy.j)(null, null, Xy, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: yb => "disableColorWrite" in yb,
            get: yb => yb.disableColorWrite,
            set: (yb, bb) => {
              yb.disableColorWrite = bb
            }
          },
          metadata: fy
        }, Ob, Rb), (0, Uy.j)(null, null, ny, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: yb => "forceDepthWrite" in yb,
            get: yb => yb.forceDepthWrite,
            set: (yb, bb) => {
              yb.forceDepthWrite = bb
            }
          },
          metadata: fy
        }, vW, iW), (0, Uy.j)(null, null, uy, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: yb => "depthFunction" in yb,
            get: yb => yb.depthFunction,
            set: (yb, bb) => {
              yb.depthFunction = bb
            }
          },
          metadata: fy
        }, Mb, Yb), (0, Uy.j)(null, null, rb, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: yb => "separateCullingPass" in yb,
            get: yb => yb.separateCullingPass,
            set: (yb, bb) => {
              yb.separateCullingPass = bb
            }
          },
          metadata: fy
        }, Xb, nb), (0, Uy.j)(null, null, Hy, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "_fogEnabled" in yb,
            get: yb => yb._fogEnabled,
            set: (yb, bb) => {
              yb._fogEnabled = bb
            }
          },
          metadata: fy
        }, ub, rW), (0, Uy.j)(null, null, ab, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: yb => "pointSize" in yb,
            get: yb => yb.pointSize,
            set: (yb, bb) => {
              yb.pointSize = bb
            }
          },
          metadata: fy
        }, Hb, aW), (0, Uy.j)(null, null, Fy, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: yb => "zOffset" in yb,
            get: yb => yb.zOffset,
            set: (yb, bb) => {
              yb.zOffset = bb
            }
          },
          metadata: fy
        }, Fb, pb), (0, Uy.j)(null, null, py, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: yb => "zOffsetUnits" in yb,
            get: yb => yb.zOffsetUnits,
            set: (yb, bb) => {
              yb.zOffsetUnits = bb
            }
          },
          metadata: fy
        }, Lb, Qb), (0, Uy.j)(null, null, Dy, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: yb => "_isVertexOutputInvariant" in yb,
            get: yb => yb._isVertexOutputInvariant,
            set: (yb, bb) => {
              yb._isVertexOutputInvariant = bb
            }
          },
          metadata: fy
        }, jW, Db), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb.TriangleFillMode = 0, yb.WireFrameFillMode = 1, yb.PointFillMode = 2, yb.PointListDrawMode = 3, yb.LineListDrawMode = 4, yb.LineLoopDrawMode = 5, yb.LineStripDrawMode = 6, yb.TriangleStripDrawMode = 7, yb.TriangleFanDrawMode = 8, yb.ClockWiseSideOrientation = 0, yb.CounterClockWiseSideOrientation = 1, yb.ImageProcessingDirtyFlag = 64, yb.TextureDirtyFlag = 1, yb.LightDirtyFlag = 2, yb.FresnelDirtyFlag = 4, yb.AttributesDirtyFlag = 8, yb.MiscDirtyFlag = 16, yb.PrePassDirtyFlag = 32, yb.AllDirtyFlag = 127, yb.MATERIAL_OPAQUE = 0, yb.MATERIAL_ALPHATEST = 1, yb.MATERIAL_ALPHABLEND = 2, yb.MATERIAL_ALPHATESTANDBLEND = 3, yb.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, yb.MATERIAL_NORMALBLENDMETHOD_RNM = 1, yb.LIGHTFALLOFF_PHYSICAL = 0, yb.LIGHTFALLOFF_GLTF = 1, yb.LIGHTFALLOFF_STANDARD = 2, yb.OnEventObservable = new Zy.c, yb.ForceVertexOutputInvariant = !1, yb._AllDirtyCallBack = yb => yb.markAllAsDirty(), yb._ImageProcessingDirtyCallBack = yb => yb.markAsImageProcessingDirty(), yb._TextureDirtyCallBack = yb => yb.markAsTexturesDirty(), yb._FresnelDirtyCallBack = yb => yb.markAsFresnelDirty(), yb._MiscDirtyCallBack = yb => yb.markAsMiscDirty(), yb._PrePassDirtyCallBack = yb => yb.markAsPrePassDirty(), yb._LightsDirtyCallBack = yb => yb.markAsLightDirty(), yb._AttributeDirtyCallBack = yb => yb.markAsAttributesDirty(), yb._FresnelAndMiscDirtyCallBack = bb => {
        yb._FresnelDirtyCallBack(bb), yb._MiscDirtyCallBack(bb)
      }, yb._TextureAndMiscDirtyCallBack = bb => {
        yb._TextureDirtyCallBack(bb), yb._MiscDirtyCallBack(bb)
      }, yb._DirtyCallbackArray = [], yb._RunDirtyCallBacks = bb => {
        for (const Wy of yb._DirtyCallbackArray) Wy(bb)
      }, yb
    })();
    Object.getOwnPropertyDescriptor(mb.prototype, "pluginManager") || Object.defineProperty(mb.prototype, "pluginManager", (0, ly.e)("Material", "pluginManager"))
  },
  38836: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(38362);
    class hy {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(yb) {
        this._DiffuseTextureEnabled !== yb && (this._DiffuseTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(yb) {
        this._BaseWeightTextureEnabled !== yb && (this._BaseWeightTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(yb) {
        this._BaseDiffuseRoughnessTextureEnabled !== yb && (this._BaseDiffuseRoughnessTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(yb) {
        this._DetailTextureEnabled !== yb && (this._DetailTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(yb) {
        this._DecalMapEnabled !== yb && (this._DecalMapEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(yb) {
        this._AmbientTextureEnabled !== yb && (this._AmbientTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(yb) {
        this._OpacityTextureEnabled !== yb && (this._OpacityTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(yb) {
        this._ReflectionTextureEnabled !== yb && (this._ReflectionTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(yb) {
        this._EmissiveTextureEnabled !== yb && (this._EmissiveTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(yb) {
        this._SpecularTextureEnabled !== yb && (this._SpecularTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(yb) {
        this._BumpTextureEnabled !== yb && (this._BumpTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(yb) {
        this._LightmapTextureEnabled !== yb && (this._LightmapTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(yb) {
        this._RefractionTextureEnabled !== yb && (this._RefractionTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(yb) {
        this._ColorGradingTextureEnabled !== yb && (this._ColorGradingTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(yb) {
        this._FresnelEnabled !== yb && (this._FresnelEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(yb) {
        this._ClearCoatTextureEnabled !== yb && (this._ClearCoatTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(yb) {
        this._ClearCoatBumpTextureEnabled !== yb && (this._ClearCoatBumpTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(yb) {
        this._ClearCoatTintTextureEnabled !== yb && (this._ClearCoatTintTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(yb) {
        this._SheenTextureEnabled !== yb && (this._SheenTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(yb) {
        this._AnisotropicTextureEnabled !== yb && (this._AnisotropicTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(yb) {
        this._ThicknessTextureEnabled !== yb && (this._ThicknessTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(yb) {
        this._RefractionIntensityTextureEnabled !== yb && (this._RefractionIntensityTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(yb) {
        this._TranslucencyIntensityTextureEnabled !== yb && (this._TranslucencyIntensityTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(yb) {
        this._TranslucencyColorTextureEnabled !== yb && (this._TranslucencyColorTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(yb) {
        this._IridescenceTextureEnabled !== yb && (this._IridescenceTextureEnabled = yb, Uy.d.MarkAllMaterialsAsDirty(1))
      }
    }
    hy._DiffuseTextureEnabled = !0, hy._BaseWeightTextureEnabled = !0, hy._BaseDiffuseRoughnessTextureEnabled = !0, hy._DetailTextureEnabled = !0, hy._DecalMapEnabled = !0, hy._AmbientTextureEnabled = !0, hy._OpacityTextureEnabled = !0, hy._ReflectionTextureEnabled = !0, hy._EmissiveTextureEnabled = !0, hy._SpecularTextureEnabled = !0, hy._BumpTextureEnabled = !0, hy._LightmapTextureEnabled = !0, hy._RefractionTextureEnabled = !0, hy._ColorGradingTextureEnabled = !0, hy._FresnelEnabled = !0, hy._ClearCoatTextureEnabled = !0, hy._ClearCoatBumpTextureEnabled = !0, hy._ClearCoatTintTextureEnabled = !0, hy._SheenTextureEnabled = !0, hy._AnisotropicTextureEnabled = !0, hy._ThicknessTextureEnabled = !0, hy._RefractionIntensityTextureEnabled = !0, hy._TranslucencyIntensityTextureEnabled = !0, hy._TranslucencyColorTextureEnabled = !0, hy._IridescenceTextureEnabled = !0
  },
  38824: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => Cy,
      D: () => My,
      H: () => Vy,
      K: () => vb,
      N: () => ib,
      O: () => qb,
      P: () => ey,
      R: () => Qy,
      U: () => Hy,
      X: () => uy,
      Y: () => ny,
      b: () => Xy,
      c: () => Jy,
      cb: () => Yy,
      d: () => Ky,
      db: () => jb,
      e: () => ly,
      gb: () => Dy,
      i: () => mb,
      ib: () => tb,
      jb: () => zb,
      m: () => Ry,
      mb: () => kb,
      pb: () => Ny,
      q: () => Py,
      r: () => Sy,
      tb: () => sy,
      v: () => Ey,
      z: () => Ty
    });
    var Uy = Wy(37350),
      hy = Wy(35886),
      fy = Wy(38675),
      Zy = Wy(38830),
      cb = Wy(38836);

    function Py(yb, bb, Wy) {
      if (!yb || yb.LOGARITHMICDEPTH || yb.indexOf && yb.indexOf("LOGARITHMICDEPTH") >= 0) {
        const yb = Wy.activeCamera;
        1 === yb.mode && Uy.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), bb.setFloat("logarithmicDepthConstant", 2 / (Math.log(yb.maxZ + 1) / Math.LN2))
      }
    }
    const oy = {
        r: 0,
        g: 0,
        b: 0
      },
      By = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Ky(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Wy && yb.fogEnabled && (!bb || bb.applyFog) && 0 !== yb.fogMode && (Wy.setFloat4("vFogInfos", yb.fogMode, yb.fogStart, yb.fogEnd, yb.fogDensity), Uy ? (yb.fogColor.toLinearSpaceToRef(oy, yb.xh().useExactSrgbConversions), Wy.setColor3("vFogColor", oy)) : Wy.setColor3("vFogColor", yb.fogColor))
    }

    function ey(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
      const Ky = yb.numMaxInfluencers || yb.numInfluencers;
      return Ky <= 0 ? 0 : (bb.push("#define MORPHTARGETS"), yb.hasPositions && bb.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), yb.hasNormals && bb.push("#define MORPHTARGETTEXTURE_HASNORMALS"), yb.hasTangents && bb.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), yb.hasUVs && bb.push("#define MORPHTARGETTEXTURE_HASUVS"), yb.hasUV2s && bb.push("#define MORPHTARGETTEXTURE_HASUV2S"), yb.hasColors && bb.push("#define MORPHTARGETTEXTURE_HASCOLORS"), yb.supportsPositions && hy && bb.push("#define MORPHTARGETS_POSITION"), yb.supportsNormals && fy && bb.push("#define MORPHTARGETS_NORMAL"), yb.supportsTangents && Zy && bb.push("#define MORPHTARGETS_TANGENT"), yb.supportsUVs && cb && bb.push("#define MORPHTARGETS_UV"), yb.supportsUV2s && Py && bb.push("#define MORPHTARGETS_UV2"), yb.supportsColors && oy && bb.push("#define MORPHTARGETS_COLOR"), bb.push("#define NUM_MORPH_INFLUENCERS " + Ky), yb.isUsingTextureForTargets && bb.push("#define MORPHTARGETS_TEXTURE"), By.NUM_MORPH_INFLUENCERS = Ky, By.NORMAL = fy, By.TANGENT = Zy, By.UV = cb, By.UV2 = Py, By.COLOR = oy, qb(Wy, Uy, By, hy), Ky)
    }

    function qb(yb, bb, Wy) {
      let fy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Zy = Wy.NUM_MORPH_INFLUENCERS;
      if (Zy > 0 && hy.c.LastCreatedEngine) {
        const cb = hy.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          Py = bb.morphTargetManager;
        if (Py?.isUsingTextureForTargets) return;
        const oy = Py && Py.supportsPositions && fy,
          By = Py && Py.supportsNormals && Wy.NORMAL,
          Ky = Py && Py.supportsTangents && Wy.TANGENT,
          ey = Py && Py.supportsUVs && Wy.UV1,
          qb = Py && Py.supportsUV2s && Wy.UV2,
          sy = Py && Py.supportsColors && Wy.VERTEXCOLOR;
        for (let Wy = 0; Wy < Zy; Wy++) oy && yb.push("position" + Wy), By && yb.push("normal" + Wy), Ky && yb.push("tangent" + Wy), ey && yb.push("uv_" + Wy), qb && yb.push("uv2_" + Wy), sy && yb.push("color" + Wy), yb.length > cb && Uy.b.Error("Cannot add more vertex attributes for mesh " + bb.name)
      }
    }

    function sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      yb.push("world0"), yb.push("world1"), yb.push("world2"), yb.push("world3"), bb && (yb.push("previousWorld0"), yb.push("previousWorld1"), yb.push("previousWorld2"), yb.push("previousWorld3"))
    }

    function Sy(yb, bb) {
      const Wy = yb.morphTargetManager;
      yb && Wy && bb.setFloatArray("morphTargetInfluences", Wy.influences)
    }

    function Ey(yb, bb) {
      bb.bindToEffect(yb, "Scene")
    }

    function ly(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Py = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oy = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        By = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Ky = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        ey = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (yb.texturesEnabled && hy && cb.d.ReflectionTextureEnabled) {
        if (Wy.qcy("reflectionMatrix", hy.getReflectionTextureMatrix()), Wy.updateFloat2("vReflectionInfos", hy.level * yb.iblIntensity, ey), Py && hy.boundingBoxSize) {
          const yb = hy;
          Wy.updateVector3("vReflectionPosition", yb.boundingBoxPosition), Wy.updateVector3("vReflectionSize", yb.boundingBoxSize)
        }
        if (fy) {
          const yb = hy.getSize().width;
          Wy.updateFloat2("vReflectionFilteringInfo", yb, Math.log2(yb))
        }
        if (By && !bb.USEIRRADIANCEMAP) {
          const yb = hy.sphericalPolynomial;
          if (bb.USESPHERICALFROMREFLECTIONMAP && yb)
            if (bb.SPHERICAL_HARMONICS) {
              const bb = yb.preScaledHarmonics;
              Wy.updateVector3("vSphericalL00", bb.l00), Wy.updateVector3("vSphericalL1_1", bb.l1_1), Wy.updateVector3("vSphericalL10", bb.l10), Wy.updateVector3("vSphericalL11", bb.l11), Wy.updateVector3("vSphericalL2_2", bb.l2_2), Wy.updateVector3("vSphericalL2_1", bb.l2_1), Wy.updateVector3("vSphericalL20", bb.l20), Wy.updateVector3("vSphericalL21", bb.l21), Wy.updateVector3("vSphericalL22", bb.l22)
            } else Wy.updateFloat3("vSphericalX", yb.x.x, yb.x.y, yb.x.z), Wy.updateFloat3("vSphericalY", yb.y.x, yb.y.y, yb.y.z), Wy.updateFloat3("vSphericalZ", yb.z.x, yb.z.y, yb.z.z), Wy.updateFloat3("vSphericalXX_ZZ", yb.xx.x - yb.zz.x, yb.xx.y - yb.zz.y, yb.xx.z - yb.zz.z), Wy.updateFloat3("vSphericalYY_ZZ", yb.yy.x - yb.zz.x, yb.yy.y - yb.zz.y, yb.yy.z - yb.zz.z), Wy.updateFloat3("vSphericalZZ", yb.zz.x, yb.zz.y, yb.zz.z), Wy.updateFloat3("vSphericalXY", yb.xy.x, yb.xy.y, yb.xy.z), Wy.updateFloat3("vSphericalYZ", yb.yz.x, yb.yz.y, yb.yz.z), Wy.updateFloat3("vSphericalZX", yb.zx.x, yb.zx.y, yb.zx.z)
        } else oy && bb.USEIRRADIANCEMAP && bb.USE_IRRADIANCE_DOMINANT_DIRECTION && hy.irradianceTexture && Wy.updateVector3("vReflectionDominantDirection", hy.irradianceTexture._dominantDirection);
        Zy && Wy.updateFloat3("vReflectionMicrosurfaceInfos", hy.getSize().width, hy.lodGenerationScale, hy.lodGenerationOffset)
      }
      Ky && Wy.updateColor3("vReflectionColor", Uy)
    }

    function mb(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Uy && cb.d.ReflectionTextureEnabled) {
        bb.LODBASEDMICROSFURACE ? Wy.setTexture("reflectionSampler", Uy) : (Wy.setTexture("reflectionSampler", Uy._lodTextureMid || Uy), Wy.setTexture("reflectionSamplerLow", Uy._lodTextureLow || Uy), Wy.setTexture("reflectionSamplerHigh", Uy._lodTextureHigh || Uy)), bb.USEIRRADIANCEMAP && Wy.setTexture("irradianceSampler", Uy.irradianceTexture);
        const fy = yb.iblCdfGenerator;
        hy && fy && Wy.setTexture("icdfSampler", fy.getIcdfTexture())
      }
    }

    function Cy(yb, bb, Wy) {
      bb._needUVs = !0, bb[Wy] = !0, yb.optimizeUVAllocation && yb.getTextureMatrix().isIdentityAs3x2() ? (bb[Wy + "DIRECTUV"] = yb.coordinatesIndex + 1, bb["MAINUV" + (yb.coordinatesIndex + 1)] = !0) : bb[Wy + "DIRECTUV"] = 0
    }

    function Ty(yb, bb, Wy) {
      const Uy = yb.getTextureMatrix();
      bb.qcy(Wy + "Matrix", Uy)
    }

    function Vy(yb, bb, Wy) {
      Wy.BAKED_VERTEX_ANIMATION_TEXTURE && Wy.INSTANCES && yb.push("bakedVertexAnimationSettingsInstanced")
    }

    function Jy(yb, bb, Wy) {
      var Uy;
      if (bb && yb && (yb.computeBonesUsingShaders && bb._bonesComputationForcedToCPU && (yb.computeBonesUsingShaders = !1), yb.useBones && yb.computeBonesUsingShaders && yb.skeleton)) {
        const hy = yb.skeleton;
        if (hy.isUsingTextureForMatrices && bb.getUniformIndex("boneTextureInfo") > -1) {
          const Wy = hy.getTransformMatrixTexture(yb);
          bb.setTexture("boneSampler", Wy), bb.setFloat2("boneTextureInfo", hy._textureWidth, hy._textureHeight)
        } else {
          const fy = hy.getTransformMatrices(yb);
          fy && (bb.setMatrices("mBones", fy), Wy && yb.kWy().prePassRenderer && yb.kWy().prePassRenderer.getIndex(2) && (Wy.previousBones[yb.uniqueId] || (Wy.previousBones[yb.uniqueId] = fy.slice()), bb.setMatrices("mPreviousBones", Wy.previousBones[yb.uniqueId]), Uy = fy, Wy.previousBones[yb.uniqueId].set(Uy)))
        }
      }
    }

    function gb(yb, bb, Wy, Uy, hy) {
      let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      yb._bindLight(bb, Wy, Uy, hy, fy)
    }
    const Gy = 4,
      Oy = new WeakMap;

    function Ry(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const fy = Math.min(bb.lightSources.length, hy);
      for (let Zy = 0; Zy < fy; Zy++) {
        gb(bb.lightSources[Zy], Zy, yb, Wy, "boolean" === typeof Uy ? Uy : Uy.SPECULARTERM, bb.receiveShadows)
      }
    }

    function vb(yb, bb, Wy, Uy) {
      Wy.NUM_BONE_INFLUENCERS > 0 && (Uy.addCPUSkinningFallback(0, bb), yb.push("matricesIndices"), yb.push("matricesWeights"), Wy.NUM_BONE_INFLUENCERS > 4 && (yb.push("matricesIndicesExtra"), yb.push("matricesWeightsExtra")))
    }

    function ib(yb, bb) {
      (bb.INSTANCES || bb.THIN_INSTANCES) && sy(yb, !!bb.PREPASS_VELOCITY), bb.INSTANCESCOLOR && yb.push("instanceColor")
    }

    function My(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hy = 0;
      for (let fy = 0; fy < Wy && yb["LIGHT" + fy]; fy++) fy > 0 && (hy = Uy + fy, bb.addFallback(hy, "LIGHT" + fy)), yb.SHADOWS || (yb["SHADOW" + fy] && bb.addFallback(Uy, "SHADOW" + fy), yb["SHADOWPCF" + fy] && bb.addFallback(Uy, "SHADOWPCF" + fy), yb["SHADOWPCSS" + fy] && bb.addFallback(Uy, "SHADOWPCSS" + fy), yb["SHADOWPOISSON" + fy] && bb.addFallback(Uy, "SHADOWPOISSON" + fy), yb["SHADOWESM" + fy] && bb.addFallback(Uy, "SHADOWESM" + fy), yb["SHADOWCLOSEESM" + fy] && bb.addFallback(Uy, "SHADOWCLOSEESM" + fy));
      return hy
    }

    function Yy(yb, bb, Wy, Uy, hy, fy, Zy) {
      let cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        oy = arguments.length > 9 ? arguments[9] : void 0,
        By = arguments.length > 10 ? arguments[10] : void 0;
      if (Zy._areMiscDirty) {
        Zy.LOGARITHMICDEPTH = Wy, Zy.POINTSIZE = Uy, Zy.FOG = hy && function(yb, bb) {
          return bb.fogEnabled && yb.applyFog && 0 !== bb.fogMode
        }(yb, bb), Zy.NONUNIFORMSCALING = yb.nonUniformScaling, Zy.ALPHATEST = fy, Zy.DECAL_AFTER_DETAIL = cb, Zy.USE_VERTEX_PULLING = Py, Zy.RIGHT_HANDED = bb.useRightHandedSystem;
        const Ky = Py ? oy?.geometry?.getIndexBuffer() : null,
          ey = !!oy && oy.isUnIndexed;
        Zy.VERTEX_PULLING_USE_INDEX_BUFFER = !!Ky && !ey, Zy.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Ky || ey) && Ky.is32Bits, Zy.VERTEXOUTPUT_INVARIANT = !!By
      }
    }

    function Xy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!yb.lightsEnabled || Uy) return !0;
      const hy = bb.lightSources,
        fy = Math.min(hy.length, Wy);
      for (let Zy = 0; Zy < fy; Zy++)
        if (!hy[Zy].areLightTexturesReady()) return !1;
      return !0
    }

    function ny(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Wy._areLightsDirty) return Wy._needNormals;
      const cb = fy;
      fy = function(yb, bb) {
        const Wy = yb.xh().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Wy) return bb;
        const Uy = Math.max(Wy - Gy, 1);
        return Math.min(bb, Uy)
      }(yb, fy);
      let Py = 0;
      const oy = {
        needNormals: Wy._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (yb.lightsEnabled && !Zy) {
        bb.lightSources.length > fy && fy < cb && function(yb, bb, Wy, hy) {
          let fy = Oy.get(yb);
          fy || (fy = new Set, Oy.set(yb, fy)), fy.has(hy) || (fy.add(hy), Uy.b.Warn(`maxSimultaneousLights is ${bb} but this engine supports at most ${Wy} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${hy} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${hy+Gy} uniform buffers, over the device limit of ${yb.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Wy}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Wy} or less to silence this warning.`))
        }(yb.xh(), cb, fy, Math.min(bb.lightSources.length, cb));
        for (const Uy of bb.lightSources)
          if (rb(yb, bb, Uy, Py, Wy, hy, oy), Py++, Py === fy) break
      }
      Wy.SPECULARTERM = oy.specularEnabled, Wy.SHADOWS = oy.shadowEnabled;
      const By = Math.max(fy, Wy.MAXLIGHTCOUNT || 0);
      for (let Uy = Py; Uy < By; Uy++) void 0 !== Wy["LIGHT" + Uy] && (Wy["LIGHT" + Uy] = !1, Wy["HEMILIGHT" + Uy] = !1, Wy["POINTLIGHT" + Uy] = !1, Wy["DIRLIGHT" + Uy] = !1, Wy["SPOTLIGHT" + Uy] = !1, Wy["AREALIGHT" + Uy] = !1, Wy["CLUSTLIGHT" + Uy] = !1, Wy["SHADOW" + Uy] = !1, Wy["SHADOWCSM" + Uy] = !1, Wy["SHADOWCSMDEBUG" + Uy] = !1, Wy["SHADOWCSMNUM_CASCADES" + Uy] = !1, Wy["SHADOWCSMUSESHADOWMAXZ" + Uy] = !1, Wy["SHADOWCSMNOBLEND" + Uy] = !1, Wy["SHADOWCSM_RIGHTHANDED" + Uy] = !1, Wy["SHADOWPCF" + Uy] = !1, Wy["SHADOWPCSS" + Uy] = !1, Wy["SHADOWPOISSON" + Uy] = !1, Wy["SHADOWESM" + Uy] = !1, Wy["SHADOWCLOSEESM" + Uy] = !1, Wy["SHADOWCUBE" + Uy] = !1, Wy["SHADOWLOWQUALITY" + Uy] = !1, Wy["SHADOWMEDIUMQUALITY" + Uy] = !1);
      Wy.LIGHTCOUNT = Py, Wy.MAXLIGHTCOUNT = fy;
      const Ky = yb.xh().getCaps();
      return void 0 === Wy.SHADOWFLOAT && (oy.needRebuild = !0), Wy.SHADOWFLOAT = oy.shadowEnabled && (Ky.textureFloatRender && Ky.textureFloatLinearFiltering || Ky.textureHalfFloatRender && Ky.textureHalfFloatLinearFiltering), Wy.LIGHTMAPEXCLUDED = oy.lightmapMode, oy.needRebuild && Wy.rebuild(), oy.needNormals
    }

    function uy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (bb && cb.d.ReflectionTextureEnabled) {
        if (!bb.isReadyOrNotBlocking()) return !1;
        Wy._needNormals = !0, Wy.REFLECTION = !0, Wy.GAMMAREFLECTION = bb.gammaSpace, Wy.RGBDREFLECTION = bb.isRGBD, Wy.LODINREFLECTIONALPHA = bb.lodLevelInAlpha, Wy.LINEARSPECULARREFLECTION = bb.linearSpecularLOD, Wy.USEIRRADIANCEMAP = !1, Wy.LODBASEDMICROSFURACE = yb.xh().getCaps().textureLOD;
        const Zy = yb.xh();
        switch (Uy && hy > 0 ? (Wy.NUM_SAMPLES = "" + hy, Zy._features.needTypeSuffixInShaderConstants && (Wy.NUM_SAMPLES = Wy.NUM_SAMPLES + "u"), Wy.REALTIME_FILTERING = !0, yb.iblCdfGenerator && (Wy.IBL_CDF_FILTERING = !0)) : Wy.REALTIME_FILTERING = !1, Wy.INVERTCUBICMAP = 6 === bb.coordinatesMode, Wy.REFLECTIONMAP_3D = bb.isCube, Wy.REFLECTIONMAP_OPPOSITEZ = Wy.REFLECTIONMAP_3D && yb.useRightHandedSystem ? !bb.invertZ : bb.invertZ, Wy.REFLECTIONMAP_CUBIC = !1, Wy.REFLECTIONMAP_EXPLICIT = !1, Wy.REFLECTIONMAP_PLANAR = !1, Wy.REFLECTIONMAP_PROJECTION = !1, Wy.REFLECTIONMAP_SKYBOX = !1, Wy.REFLECTIONMAP_SPHERICAL = !1, Wy.REFLECTIONMAP_EQUIRECTANGULAR = !1, Wy.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Wy.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, bb.coordinatesMode) {
          case 0:
            Wy.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Wy.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Wy.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Wy.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Wy.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Wy.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Wy.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Wy.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Wy.REFLECTIONMAP_CUBIC = !0, Wy.USE_LOCAL_REFLECTIONMAP_CUBIC = !!bb.boundingBoxSize
        }
        5 !== bb.coordinatesMode && (bb.irradianceTexture ? (Wy.USEIRRADIANCEMAP = !0, Wy.USESPHERICALFROMREFLECTIONMAP = !1, Wy.USESPHERICALINVERTEX = !1, bb.irradianceTexture._dominantDirection ? Wy.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Wy.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : bb.isCube && (Wy.USESPHERICALFROMREFLECTIONMAP = !0, Wy.USEIRRADIANCEMAP = !1, Wy.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Wy.USESPHERICALINVERTEX = fy))
      } else Wy.REFLECTION = !1, Wy.REFLECTIONMAP_3D = !1, Wy.REFLECTIONMAP_SPHERICAL = !1, Wy.REFLECTIONMAP_PLANAR = !1, Wy.REFLECTIONMAP_CUBIC = !1, Wy.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Wy.REFLECTIONMAP_PROJECTION = !1, Wy.REFLECTIONMAP_SKYBOX = !1, Wy.REFLECTIONMAP_EXPLICIT = !1, Wy.REFLECTIONMAP_EQUIRECTANGULAR = !1, Wy.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Wy.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Wy.INVERTCUBICMAP = !1, Wy.USESPHERICALFROMREFLECTIONMAP = !1, Wy.USEIRRADIANCEMAP = !1, Wy.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Wy.USESPHERICALINVERTEX = !1, Wy.REFLECTIONMAP_OPPOSITEZ = !1, Wy.LODINREFLECTIONALPHA = !1, Wy.GAMMAREFLECTION = !1, Wy.RGBDREFLECTION = !1, Wy.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function rb(yb, bb, Wy, Uy, hy, Zy, cb) {
      switch (cb.needNormals = !0, void 0 === hy["LIGHT" + Uy] && (cb.needRebuild = !0), hy["LIGHT" + Uy] = !0, hy["SPOTLIGHT" + Uy] = !1, hy["HEMILIGHT" + Uy] = !1, hy["POINTLIGHT" + Uy] = !1, hy["DIRLIGHT" + Uy] = !1, hy["AREALIGHT" + Uy] = !1, hy["CLUSTLIGHT" + Uy] = !1, Wy.prepareLightSpecificDefines(hy, Uy), hy["LIGHT_FALLOFF_PHYSICAL" + Uy] = !1, hy["LIGHT_FALLOFF_GLTF" + Uy] = !1, hy["LIGHT_FALLOFF_STANDARD" + Uy] = !1, Wy.falloffType) {
        case fy.d.FALLOFF_GLTF:
          hy["LIGHT_FALLOFF_GLTF" + Uy] = !0;
          break;
        case fy.d.FALLOFF_PHYSICAL:
          hy["LIGHT_FALLOFF_PHYSICAL" + Uy] = !0;
          break;
        case fy.d.FALLOFF_STANDARD:
          hy["LIGHT_FALLOFF_STANDARD" + Uy] = !0
      }
      if (Zy && !Wy.specular.equalsFloats(0, 0, 0) && (cb.specularEnabled = !0), hy["SHADOW" + Uy] = !1, hy["SHADOWCSM" + Uy] = !1, hy["SHADOWCSMDEBUG" + Uy] = !1, hy["SHADOWCSMNUM_CASCADES" + Uy] = !1, hy["SHADOWCSMUSESHADOWMAXZ" + Uy] = !1, hy["SHADOWCSMNOBLEND" + Uy] = !1, hy["SHADOWCSM_RIGHTHANDED" + Uy] = !1, hy["SHADOWPCF" + Uy] = !1, hy["SHADOWPCSS" + Uy] = !1, hy["SHADOWPOISSON" + Uy] = !1, hy["SHADOWESM" + Uy] = !1, hy["SHADOWCLOSEESM" + Uy] = !1, hy["SHADOWCUBE" + Uy] = !1, hy["SHADOWLOWQUALITY" + Uy] = !1, hy["SHADOWMEDIUMQUALITY" + Uy] = !1, bb && bb.receiveShadows && yb.shadowsEnabled && Wy.shadowEnabled) {
        const bb = Wy.getShadowGenerator(yb.activeCamera) ?? Wy.getShadowGenerator();
        if (bb) {
          const yb = bb.getShadowMap();
          yb && yb.renderList && yb.renderList.length > 0 && (cb.shadowEnabled = !0, bb.prepareDefines(hy, Uy))
        }
      }
      Wy.lightmapMode != fy.d.LIGHTMAP_DEFAULT ? (cb.lightmapMode = !0, hy["LIGHTMAPEXCLUDED" + Uy] = !0, hy["LIGHTMAPNOSPECULAR" + Uy] = Wy.lightmapMode == fy.d.LIGHTMAP_SHADOWSONLY) : (hy["LIGHTMAPEXCLUDED" + Uy] = !1, hy["LIGHTMAPNOSPECULAR" + Uy] = !1)
    }

    function Hy(yb, bb, Wy, Uy, hy) {
      let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        cb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Py = function(yb, bb) {
          let Wy = !1;
          if (yb.activeCamera) {
            const Uy = bb.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              hy = bb.CAMERA_PERSPECTIVE ? 1 : 0,
              fy = 1 === yb.activeCamera.mode ? 1 : 0,
              Zy = 0 === yb.activeCamera.mode ? 1 : 0;
            (Uy ^ fy || hy ^ Zy) && (bb.CAMERA_ORTHOGRAPHIC = 1 === fy, bb.CAMERA_PERSPECTIVE = 1 === Zy, Wy = !0)
          }
          return Wy
        }(yb, Uy);
      !1 !== fy && (Py = (0, Zy.h)(Wy, yb, Uy)), Uy.DEPTHPREPASS !== !bb.getColorWrite() && (Uy.DEPTHPREPASS = !Uy.DEPTHPREPASS, Py = !0), Uy.INSTANCES !== hy && (Uy.INSTANCES = hy, Py = !0), Uy.THIN_INSTANCES !== cb && (Uy.THIN_INSTANCES = cb, Py = !0), Py && Uy.markAsUnprocessed()
    }
    const ab = 40,
      Fy = 64,
      py = new WeakMap,
      Ly = new WeakSet;

    function Qy(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        cb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!bb._areAttributesDirty && bb._needNormals === bb._normals && bb._needUVs === bb._uvs) return !1;
      bb._normals = bb._needNormals, bb._uvs = bb._needUVs, bb.NORMAL = bb._needNormals && yb.isVerticesDataPresent("normal"), bb._needNormals && yb.isVerticesDataPresent("tangent") && (bb.TANGENT = !0);
      for (let Uy = 1; Uy <= 6; ++Uy) bb["UV" + Uy] = !!bb._needUVs && yb.isVerticesDataPresent(`uv${1===Uy?"":Uy}`);
      if (Wy) {
        const Wy = yb.useVertexColors && yb.isVerticesDataPresent("color");
        bb.VERTEXCOLOR = Wy, bb.VERTEXALPHA = yb.hasVertexAlpha && Wy && Zy
      }
      return yb.isVerticesDataPresent("instanceColor") && (yb.NBy || yb.hasThinInstances) && (bb.INSTANCESCOLOR = !0), hy && function(yb, bb) {
        if (yb.useBones && yb.computeBonesUsingShaders && yb.skeleton) {
          bb.NUM_BONE_INFLUENCERS = yb.numBoneInfluencers;
          const Wy = void 0 !== bb.BONETEXTURE;
          if (yb.skeleton.isUsingTextureForMatrices && Wy) bb.BONETEXTURE = !0;
          else {
            bb.BonesPerMesh = yb.skeleton.bones.length + 1, bb.BONETEXTURE = !Wy && void 0;
            const hy = yb.kWy(),
              fy = hy.prePassRenderer;
            if (fy && fy.enabled) {
              const Wy = -1 === fy.excludedSkinnedMesh.indexOf(yb);
              bb.BONES_VELOCITY_ENABLED = Wy
            }
            const Zy = !0 === bb.MULTIVIEW,
              cb = 2 * bb.BonesPerMesh + (Zy ? 1 : 0);
            if (py.get(yb.skeleton) !== cb) {
              py.set(yb.skeleton, cb);
              const Wy = hy.xh().getCaps().maxVertexUniformVectors;
              if (Wy && !Ly.has(yb.skeleton)) {
                const hy = 4 * bb.BonesPerMesh,
                  fy = Zy ? Fy : ab,
                  cb = Math.max(Wy - fy, 0);
                (hy > cb || Zy && 3 * hy > Wy) && (Ly.add(yb.skeleton), Uy.b.Warn(`Skeleton "${yb.skeleton.name}": ${yb.skeleton.bones.length} bones stored as vertex uniforms use ${hy} of ~${cb} usable uniform vectors${Zy?" (multiview)":""} on a device reporting ${Wy}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else bb.NUM_BONE_INFLUENCERS = 0, bb.BonesPerMesh = 0, void 0 !== bb.BONETEXTURE && (bb.BONETEXTURE = !1)
      }(yb, bb), fy && function(yb, bb) {
        const Wy = yb.morphTargetManager;
        Wy ? (bb.MORPHTARGETS_UV = Wy.supportsUVs && bb.UV1, bb.MORPHTARGETS_UV2 = Wy.supportsUV2s && bb.UV2, bb.MORPHTARGETS_TANGENT = Wy.supportsTangents && bb.TANGENT, bb.MORPHTARGETS_NORMAL = Wy.supportsNormals && bb.NORMAL, bb.MORPHTARGETS_POSITION = Wy.supportsPositions, bb.MORPHTARGETS_COLOR = Wy.supportsColors, bb.MORPHTARGETTEXTURE_HASUVS = Wy.hasUVs, bb.MORPHTARGETTEXTURE_HASUV2S = Wy.hasUV2s, bb.MORPHTARGETTEXTURE_HASTANGENTS = Wy.hasTangents, bb.MORPHTARGETTEXTURE_HASNORMALS = Wy.hasNormals, bb.MORPHTARGETTEXTURE_HASPOSITIONS = Wy.hasPositions, bb.MORPHTARGETTEXTURE_HASCOLORS = Wy.hasColors, bb.NUM_MORPH_INFLUENCERS = Wy.numMaxInfluencers || Wy.numInfluencers, bb.MORPHTARGETS = bb.NUM_MORPH_INFLUENCERS > 0, bb.MORPHTARGETS_TEXTURE = Wy.isUsingTextureForTargets) : (bb.MORPHTARGETS_UV = !1, bb.MORPHTARGETS_UV2 = !1, bb.MORPHTARGETS_TANGENT = !1, bb.MORPHTARGETS_NORMAL = !1, bb.MORPHTARGETS_POSITION = !1, bb.MORPHTARGETS_COLOR = !1, bb.MORPHTARGETTEXTURE_HASUVS = !1, bb.MORPHTARGETTEXTURE_HASUV2S = !1, bb.MORPHTARGETTEXTURE_HASTANGENTS = !1, bb.MORPHTARGETTEXTURE_HASNORMALS = !1, bb.MORPHTARGETTEXTURE_HASPOSITIONS = !1, bb.MORPHTARGETTEXTURE_HAS_COLORS = !1, bb.MORPHTARGETS = !1, bb.NUM_MORPH_INFLUENCERS = 0)
      }(yb, bb), cb && function(yb, bb) {
        const Wy = yb.bakedVertexAnimationManager;
        bb.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Wy || !Wy.isEnabled)
      }(yb, bb), !0
    }

    function jb(yb, bb) {
      if (yb.activeCamera) {
        const Wy = bb.MULTIVIEW;
        bb.MULTIVIEW = null !== yb.activeCamera.outputRenderTarget && yb.activeCamera.outputRenderTarget.getViewCount() > 1, bb.MULTIVIEW != Wy && bb.markAsUnprocessed()
      }
    }

    function Dy(yb, bb, Wy) {
      const Uy = bb.ORDER_INDEPENDENT_TRANSPARENCY,
        hy = bb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      bb.ORDER_INDEPENDENT_TRANSPARENCY = yb.useOrderIndependentTransparency && Wy, bb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !yb.xh().getCaps().textureFloatLinearFiltering, Uy === bb.ORDER_INDEPENDENT_TRANSPARENCY && hy === bb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || bb.markAsUnprocessed()
    }

    function tb(yb, bb, Wy) {
      const Uy = bb.PREPASS;
      if (!bb._arePrePassDirty) return;
      const hy = [{
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
      if (yb.prePassRenderer && yb.prePassRenderer.enabled && Wy) {
        bb.PREPASS = !0, bb.SCENE_MRT_COUNT = yb.prePassRenderer.mrtCount, bb.PREPASS_NORMAL_WORLDSPACE = yb.prePassRenderer.generateNormalsInWorldSpace, bb.PREPASS_COLOR = !0, bb.PREPASS_COLOR_INDEX = 0;
        for (let Wy = 0; Wy < hy.length; Wy++) {
          const Uy = yb.prePassRenderer.getIndex(hy[Wy].type); - 1 !== Uy ? (bb[hy[Wy].define] = !0, bb[hy[Wy].index] = Uy) : bb[hy[Wy].define] = !1
        }
      } else {
        bb.PREPASS = !1;
        for (let yb = 0; yb < hy.length; yb++) bb[hy[yb].define] = !1
      }
      bb.PREPASS != Uy && (bb.markAsUnprocessed(), bb.markAsImageProcessingDirty())
    }

    function wy(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        oy = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      hy && hy.push("Light" + yb), fy || (bb.push("vLightData" + yb, "vLightDiffuse" + yb, "vLightSpecular" + yb, "vLightDirection" + yb, "vLightWidth" + yb, "vLightHeight" + yb, "vLightFalloff" + yb, "vLightGround" + yb, "vSliceData" + yb, "vSliceRanges" + yb, "lightMatrix" + yb, "shadowsInfo" + yb, "depthValues" + yb), Wy.push("shadowTexture" + yb), Wy.push("depthTexture" + yb), bb.push("viewFrustumZ" + yb, "cascadeBlendFactor" + yb, "lightSizeUVCorrection" + yb, "depthCorrection" + yb, "penumbraDarkness" + yb, "frustumLengths" + yb), Uy && (Wy.push("projectionLightTexture" + yb), bb.push("textureProjectionMatrix" + yb)), Zy && Wy.push("iesLightTexture" + yb), Py && Wy.push("rectAreaLightEmissionTexture" + yb), cb && (Wy.push("lightDataTexture" + yb), oy || Wy.push("tileMaskTexture" + yb)))
    }

    function kb(yb, bb, Wy) {
      const Uy = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Wy && Uy.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), yb.push(...Uy);
      bb.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Ny(yb, bb, Wy) {
      let Uy, hy, fy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Zy = null;
      if (yb.uniformsNames) {
        const cb = yb;
        Uy = cb.uniformsNames, hy = cb.uniformBuffersNames, bb = cb.samplers, Wy = cb.defines, fy = cb.maxSimultaneousLights || 0, Zy = cb.shaderLanguage ?? null
      } else Uy = yb, bb || (bb = []);
      for (let cb = 0; cb < fy && Wy["LIGHT" + cb]; cb++) wy(cb, Uy, bb, Wy["PROJECTEDLIGHTTEXTURE" + cb], hy, !1, Wy["IESLIGHTTEXTURE" + cb], Wy["CLUSTLIGHT" + cb], Wy["RECTAREALIGHTEMISSIONTEXTURE" + cb], 1 === Zy);
      Wy.NUM_MORPH_INFLUENCERS && (Uy.push("morphTargetInfluences"), Uy.push("morphTargetCount")), Wy.BAKED_VERTEX_ANIMATION_TEXTURE && (Uy.push("bakedVertexAnimationSettings"), Uy.push("bakedVertexAnimationTextureSizeInverted"), Uy.push("bakedVertexAnimationTime"), bb.push("bakedVertexAnimationTexture"))
    }

    function zb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      yb.addUniform("vReflectionInfos", 2), yb.addUniform("reflectionMatrix", 16), bb && yb.addUniform("vReflectionMicrosurfaceInfos", 3), Wy && (yb.addUniform("vReflectionPosition", 3), yb.addUniform("vReflectionSize", 3)), Uy && (yb.addUniform("vReflectionFilteringInfo", 2), yb.addUniform("vReflectionDominantDirection", 3)), fy && yb.addUniform("vReflectionColor", 3), hy && (yb.addUniform("vSphericalL00", 3), yb.addUniform("vSphericalL1_1", 3), yb.addUniform("vSphericalL10", 3), yb.addUniform("vSphericalL11", 3), yb.addUniform("vSphericalL2_2", 3), yb.addUniform("vSphericalL2_1", 3), yb.addUniform("vSphericalL20", 3), yb.addUniform("vSphericalL21", 3), yb.addUniform("vSphericalL22", 3), yb.addUniform("vSphericalX", 3), yb.addUniform("vSphericalY", 3), yb.addUniform("vSphericalZ", 3), yb.addUniform("vSphericalXX_ZZ", 3), yb.addUniform("vSphericalYY_ZZ", 3), yb.addUniform("vSphericalZZ", 3), yb.addUniform("vSphericalXY", 3), yb.addUniform("vSphericalYZ", 3), yb.addUniform("vSphericalZX", 3))
    }
  },
  38841: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(35861),
      hy = Wy(38782);
    class fy extends hy.e {
      constructor(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(yb, bb, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Uy.c, this._storeEffectOnSubMeshes = Wy
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(yb, bb) {
        return !!yb && (!this._storeEffectOnSubMeshes || (!yb.vJ || 0 === yb.vJ.length || this.isReadyForSubMesh(yb, yb.vJ[0], bb)))
      }
      _isReadyForSubMesh(yb) {
        const bb = yb.materialDefines;
        return !(this.checkReadyOnEveryCall || !yb.effect || !bb || bb._renderId !== this.kWy().getRenderId())
      }
      bindOnlyWorldMatrix(yb) {
        this._activeEffect.setMatrix("world", yb)
      }
      bindOnlyNormalMatrix(yb) {
        this._activeEffect.setMatrix("normalMatrix", yb)
      }
      bind(yb, bb) {
        bb && this.bindForSubMesh(yb, bb, bb.vJ[0])
      }
      _afterBind(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(yb, bb, Wy), this.kWy()._cachedEffect = bb, Wy ? Wy._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Wy._drawWrapper._forceRebindOnNextCall || yb.isCachedMaterialInvalid(this, bb, Uy)
      }
      dispose(yb, bb, Wy) {
        this._activeEffect = void 0, super.dispose(yb, bb, Wy)
      }
    }
  },
  38865: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      c: () => hy
    });
    const Uy = new WeakMap;

    function hy(yb) {
      const bb = yb.getVertexBuffers();
      if (!bb) return null;
      let Wy = Uy.get(yb);
      if (Wy) {
        let yb = !1;
        for (const Uy in bb)
          if (!Wy.has(Uy)) {
            yb = !0;
            break
          } if (!yb) return Wy
      } else Wy = new Map, Uy.set(yb, Wy);
      for (const Uy in bb) {
        const yb = bb[Uy];
        if (yb) {
          const bb = yb.byteOffset,
            hy = yb.byteStride,
            fy = yb.type,
            Zy = yb.normalized;
          Wy.set(Uy, {
            offset: bb,
            stride: hy,
            type: fy,
            normalized: Zy
          })
        }
      }
      return Wy
    }

    function fy(yb, bb) {
      bb.forEach(((bb, Wy) => {
        const Uy = `vp_${Wy}_info`;
        yb.setFloat4(Uy, bb.offset, bb.stride, bb.type, bb.normalized ? 1 : 0)
      }))
    }
  },
  38813: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      g: () => Py
    });
    var Uy = Wy(38464),
      hy = Wy(35861),
      fy = Wy(38466);
    let Zy = (() => {
      var yb;
      let bb, Wy, hy = [];
      return yb = class {
        static extractMinAndMaxIndexed(yb, bb, Wy, Uy, hy, fy) {
          for (let Zy = Wy; Zy < Wy + Uy; Zy++) {
            const Wy = 3 * bb[Zy],
              Uy = yb[Wy],
              cb = yb[Wy + 1],
              Py = yb[Wy + 2];
            hy.minimizeInPlaceFromFloats(Uy, cb, Py), fy.maximizeInPlaceFromFloats(Uy, cb, Py)
          }
        }
        static extractMinAndMax(yb, bb, Wy, Uy, hy, fy) {
          for (let Zy = bb, cb = bb * Uy; Zy < bb + Wy; Zy++, cb += Uy) {
            const bb = yb[cb],
              Wy = yb[cb + 1],
              Uy = yb[cb + 2];
            hy.minimizeInPlaceFromFloats(bb, Wy, Uy), fy.maximizeInPlaceFromFloats(bb, Wy, Uy)
          }
        }
      }, (() => {
        const Zy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [fy.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Wy = [fy.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Uy.j)(yb, null, bb, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: yb => "extractMinAndMaxIndexed" in yb,
            get: yb => yb.extractMinAndMaxIndexed
          },
          metadata: Zy
        }, null, hy), (0, Uy.j)(yb, null, Wy, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: yb => "extractMinAndMax" in yb,
            get: yb => yb.extractMinAndMax
          },
          metadata: Zy
        }, null, hy), Zy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zy
        }), (0, Uy.l)(yb, hy)
      })(), yb
    })();

    function cb(yb, bb, Wy, Uy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const cb = new hy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Py = new hy.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Zy.extractMinAndMaxIndexed(yb, bb, Wy, Uy, cb, Py), fy && (cb.x -= cb.x * fy.x + fy.y, cb.y -= cb.y * fy.x + fy.y, cb.z -= cb.z * fy.x + fy.y, Py.x += Py.x * fy.x + fy.y, Py.y += Py.y * fy.x + fy.y, Py.z += Py.z * fy.x + fy.y), {
        minimum: cb,
        maximum: Py
      }
    }

    function Py(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        fy = arguments.length > 4 ? arguments[4] : void 0;
      const cb = new hy.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Py = new hy.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return fy || (fy = 3), Zy.extractMinAndMax(yb, bb, Wy, fy, cb, Py), Uy && (cb.x -= cb.x * Uy.x + Uy.y, cb.y -= cb.y * Uy.x + Uy.y, cb.z -= cb.z * Uy.x + Uy.y, Py.x += Py.x * Uy.x + Uy.y, Py.y += Py.y * Uy.x + Uy.y, Py.z += Py.z * Uy.x + Uy.y), {
        minimum: cb,
        maximum: Py
      }
    }
  },
  38784: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By
    });
    var Uy, hy = Wy(38620),
      fy = Wy(38789),
      Zy = Wy(38797),
      cb = Wy(38813),
      Py = Wy(38822),
      oy = Wy(38347);
    class By {
      get materialDefines() {
        const yb = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof yb ? null : yb
      }
      set materialDefines(yb) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = yb
      }
      _getDrawWrapper(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        yb = yb ?? this._engine.currentRenderPassId;
        let Wy = this._drawWrappers[yb];
        return !Wy && bb && (this._drawWrappers[yb] = Wy = new Py.c(this._mesh.kWy().xh())), Wy
      }
      _removeDrawWrapper(yb) {
        let bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[yb]?.dispose(bb), this._drawWrappers[yb] = void 0
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
      _setMainDrawWrapperOverride(yb) {
        this._mainDrawWrapperOverride = yb
      }
      setEffect(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const hy = this._drawWrapper;
        hy.setEffect(yb, bb, Uy), void 0 !== Wy && (hy.materialContext = Wy), yb || (hy.defines = null, hy.materialContext = void 0)
      }
      resetDrawCache(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== yb) return void this._removeDrawWrapper(yb, !0, bb);
          for (const yb of this._drawWrappers) yb?.dispose(bb)
        }
        this._drawWrappers = []
      }
      static AddToMesh(yb, bb, Wy, Uy, hy, fy, Zy) {
        return new By(yb, bb, Wy, Uy, hy, fy, Zy, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(yb, bb, Wy, Uy, hy, fy, Zy) {
        let cb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Py = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = yb, this.verticesStart = bb, this.verticesCount = Wy, this.indexStart = Uy, this.indexCount = hy, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = fy, this._renderingMesh = Zy || fy, Py && fy.vJ.push(this), this._engine = this._mesh.kWy().xh(), this.resetDrawCache(), this._trianglePlanes = [], this._id = fy.vJ.length - 1, cb && (this.refreshBoundingInfo(), fy.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      qUy() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.qUy() : this._boundingInfo
      }
      setBoundingInfo(yb) {
        return this._boundingInfo = yb, this
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
        const yb = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return yb || this._renderingMesh
      }
      Wh() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const bb = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!bb) return yb && this._mesh.kWy()._hasDefaultMaterial ? this._mesh.kWy().defaultMaterial : null;
        if (this._isMultiMaterial(bb)) {
          const yb = bb.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== yb && (this._currentMaterial = yb, this.resetDrawCache()), yb
        }
        return bb
      }
      _isMultiMaterial(yb) {
        return void 0 !== yb.getSubMaterial
      }
      refreshBoundingInfo() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (yb || (yb = this._renderingMesh.getVerticesData(hy.k.PositionKind)), !yb) return this._boundingInfo = this._mesh.qUy(), this;
        const bb = this._renderingMesh.Mqy();
        let Wy;
        if (0 === this.indexStart && this.indexCount === bb.length) {
          const yb = this._renderingMesh.qUy();
          Wy = {
            minimum: yb.minimum.clone(),
            maximum: yb.maximum.clone()
          }
        } else Wy = (0, cb.c)(yb, bb, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Wy.minimum, Wy.maximum) : this._boundingInfo = new Zy.b(Wy.minimum, Wy.maximum), this
      }
      _checkCollision(yb) {
        return this.qUy()._checkCollision(yb)
      }
      updateBoundingInfo(yb) {
        let bb = this.qUy();
        return bb || (this.refreshBoundingInfo(), bb = this.qUy()), bb && bb.update(yb), this
      }
      isInFrustum(yb) {
        const bb = this.qUy();
        return !!bb && bb.isInFrustum(yb, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(yb) {
        const bb = this.qUy();
        return !!bb && bb.isCompletelyInFrustum(yb)
      }
      render(yb) {
        return this._renderingMesh.render(this, yb, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(yb, bb) {
        if (!this._linesIndexBuffer) {
          const Wy = 6 * Math.floor(this.indexCount / 3),
            Uy = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Wy) : new Uint16Array(Wy);
          let hy = 0;
          if (0 === yb.length)
            for (let yb = this.indexStart; yb < this.indexStart + this.indexCount; yb += 3) Uy[hy++] = yb, Uy[hy++] = yb + 1, Uy[hy++] = yb + 1, Uy[hy++] = yb + 2, Uy[hy++] = yb + 2, Uy[hy++] = yb;
          else
            for (let bb = this.indexStart; bb < this.indexStart + this.indexCount; bb += 3) Uy[hy++] = yb[bb], Uy[hy++] = yb[bb + 1], Uy[hy++] = yb[bb + 1], Uy[hy++] = yb[bb + 2], Uy[hy++] = yb[bb + 2], Uy[hy++] = yb[bb];
          this._linesIndexBuffer = bb.createIndexBuffer(Uy), this._linesIndexCount = Uy.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(yb) {
        const bb = this.qUy();
        return !!bb && yb.intersectsBox(bb.boundingBox)
      }
      intersects(yb, bb, Wy, Uy, hy) {
        const fy = this.Wh();
        if (!fy) return null;
        let Zy = 3,
          cb = !1;
        switch (fy.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Zy = 1, cb = !0
        }
        return 4 === fy.fillMode ? Wy.length ? this._intersectLines(yb, bb, Wy, this._mesh.intersectionThreshold, Uy) : this._intersectUnIndexedLines(yb, bb, Wy, this._mesh.intersectionThreshold, Uy) : !Wy.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(yb, bb, Wy, Uy, hy) : this._intersectTriangles(yb, bb, Wy, Zy, cb, Uy, hy)
      }
      _intersectLines(yb, bb, Wy, Uy, hy) {
        let Zy = null;
        for (let cb = this.indexStart; cb < this.indexStart + this.indexCount; cb += 2) {
          const Py = bb[Wy[cb]],
            oy = bb[Wy[cb + 1]],
            By = yb.intersectionSegment(Py, oy, Uy);
          if (!(By < 0) && ((hy || !Zy || By < Zy.distance) && (Zy = new fy.d(null, null, By), Zy.faceId = cb / 2, hy))) break
        }
        return Zy
      }
      _intersectUnIndexedLines(yb, bb, Wy, Uy, hy) {
        let Zy = null;
        for (let cb = this.verticesStart; cb < this.verticesStart + this.verticesCount; cb += 2) {
          const Wy = bb[cb],
            Py = bb[cb + 1],
            oy = yb.intersectionSegment(Wy, Py, Uy);
          if (!(oy < 0) && ((hy || !Zy || oy < Zy.distance) && (Zy = new fy.d(null, null, oy), Zy.faceId = cb / 2, hy))) break
        }
        return Zy
      }
      _intersectTriangles(yb, bb, Wy, Uy, hy, fy, Zy) {
        let cb = null,
          Py = -1;
        for (let oy = this.indexStart; oy < this.indexStart + this.indexCount - (3 - Uy); oy += Uy) {
          Py++;
          const Uy = Wy[oy],
            By = Wy[oy + 1],
            Ky = Wy[oy + 2];
          if (hy && 4294967295 === Ky) {
            oy += 2;
            continue
          }
          const ey = bb[Uy],
            qb = bb[By],
            sy = bb[Ky];
          if (!ey || !qb || !sy) continue;
          if (Zy && !Zy(ey, qb, sy, yb, Uy, By, Ky)) continue;
          const Sy = yb.intersectsTriangle(ey, qb, sy);
          if (Sy) {
            if (Sy.distance < 0) continue;
            if ((fy || !cb || Sy.distance < cb.distance) && (cb = Sy, cb.faceId = Py, fy)) break
          }
        }
        return cb
      }
      _intersectUnIndexedTriangles(yb, bb, Wy, Uy, hy) {
        let fy = null;
        for (let Zy = this.verticesStart; Zy < this.verticesStart + this.verticesCount; Zy += 3) {
          const Wy = bb[Zy],
            cb = bb[Zy + 1],
            Py = bb[Zy + 2];
          if (hy && !hy(Wy, cb, Py, yb, -1, -1, -1)) continue;
          const oy = yb.intersectsTriangle(Wy, cb, Py);
          if (oy) {
            if (oy.distance < 0) continue;
            if ((Uy || !fy || oy.distance < fy.distance) && (fy = oy, fy.faceId = Zy / 3, Uy)) break
          }
        }
        return fy
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(yb, bb) {
        const Wy = new By(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, yb, bb, !1);
        if (!this.IsGlobal) {
          const yb = this.qUy();
          if (!yb) return Wy;
          Wy._boundingInfo = new Zy.b(yb.minimum, yb.maximum)
        }
        return Wy
      }
      dispose() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.kWy().xh()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const bb = this._mesh.vJ.indexOf(this);
        this._mesh.vJ.splice(bb, 1), this.resetDrawCache(void 0, yb)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(yb, bb, Wy, Uy, hy) {
        let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = Number.MAX_VALUE,
          cb = -Number.MAX_VALUE;
        const Py = (hy || Uy).Mqy();
        for (let oy = bb; oy < bb + Wy; oy++) {
          const yb = Py[oy];
          yb < Zy && (Zy = yb), yb > cb && (cb = yb)
        }
        return new By(yb, Zy, cb - Zy + 1, bb, Wy, Uy, hy, fy)
      }
    }(Uy = By.prototype).projectToRef ?? (Uy.projectToRef = (0, oy.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);