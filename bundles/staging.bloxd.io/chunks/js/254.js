export const id = 254;
export const ids = [254];
export const modules = {
  39744: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb) {
        this.bu = bb, this.bv = ub, this.distance = hb, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39758: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    var Bb = hb(36736),
      Ob = hb(36727),
      Gb = hb(36734);
    class Ub {
      constructor(bb, ub, hb) {
        this.vectors = (0, Bb.e)(8, Ob.q.Zero), this.center = Ob.q.Zero(), this.centerWorld = Ob.q.Zero(), this.extendSize = Ob.q.Zero(), this.extendSizeWorld = Ob.q.Zero(), this.directions = (0, Bb.e)(3, Ob.q.Zero), this.vectorsWorld = (0, Bb.e)(8, Ob.q.Zero), this.minimumWorld = Ob.q.Zero(), this.maximumWorld = Ob.q.Zero(), this.minimum = Ob.q.Zero(), this.maximum = Ob.q.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(bb, ub, hb)
      }
      reConstruct(bb, ub, hb) {
        const Bb = bb.x,
          Gb = bb.y,
          Ub = bb.z,
          Lb = ub.x,
          Yb = ub.y,
          Sb = ub.z,
          ab = this.vectors;
        this.minimum.M_(Bb, Gb, Ub), this.maximum.M_(Lb, Yb, Sb), ab[0].M_(Bb, Gb, Ub), ab[1].M_(Lb, Yb, Sb), ab[2].M_(Lb, Gb, Ub), ab[3].M_(Bb, Yb, Ub), ab[4].M_(Bb, Gb, Sb), ab[5].M_(Lb, Yb, Ub), ab[6].M_(Bb, Yb, Sb), ab[7].M_(Lb, Gb, Sb), ub.addToRef(bb, this.center).scaleInPlace(.5), ub.subtractToRef(bb, this.extendSize).scaleInPlace(.5), this._worldMatrix = hb || Ob.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(bb) {
        const ub = Ub._TmpVector3,
          hb = this.maximum.subtractToRef(this.minimum, ub[0]),
          Bb = hb.length();
        hb.normalizeFromLength(Bb);
        const Ob = Bb * bb,
          Gb = hb.scaleInPlace(.5 * Ob),
          Lb = this.center.subtractToRef(Gb, ub[1]),
          Yb = this.center.addToRef(Gb, ub[2]);
        return this.reConstruct(Lb, Yb, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        const ub = this.minimumWorld,
          hb = this.maximumWorld,
          Bb = this.directions,
          Gb = this.vectorsWorld,
          Ub = this.vectors;
        if (bb.isIdentity()) {
          ub.mD(this.minimum), hb.mD(this.maximum);
          for (let bb = 0; bb < 8; ++bb) Gb[bb].mD(Ub[bb]);
          this.extendSizeWorld.mD(this.extendSize), this.centerWorld.mD(this.center)
        } else {
          ub.N9(Number.MAX_VALUE), hb.N9(-Number.MAX_VALUE);
          for (let Bb = 0; Bb < 8; ++Bb) {
            const Lb = Gb[Bb];
            Ob.q.TransformCoordinatesToRef(Ub[Bb], bb, Lb), ub.minimizeInPlace(Lb), hb.maximizeInPlace(Lb)
          }
          hb.subtractToRef(ub, this.extendSizeWorld).scaleInPlace(.5), hb.addToRef(ub, this.centerWorld).scaleInPlace(.5)
        }
        Ob.q.FromArrayToRef(bb.m, 0, Bb[0]), Ob.q.FromArrayToRef(bb.m, 4, Bb[1]), Ob.q.FromArrayToRef(bb.m, 8, Bb[2]), this._worldMatrix = bb
      }
      isInFrustum(bb) {
        return Ub.IsInFrustum(this.vectorsWorld, bb)
      }
      isCompletelyInFrustum(bb) {
        return Ub.IsCompletelyInFrustum(this.vectorsWorld, bb)
      }
      intersectsPoint(bb) {
        const ub = this.minimumWorld,
          hb = this.maximumWorld,
          Bb = ub.x,
          Ob = ub.y,
          Ub = ub.z,
          Lb = hb.x,
          Yb = hb.y,
          Sb = hb.z,
          ab = bb.x,
          Hb = bb.y,
          wb = bb.z,
          Zb = -Gb.b;
        return !(Lb - ab < Zb || Zb > ab - Bb) && (!(Yb - Hb < Zb || Zb > Hb - Ob) && !(Sb - wb < Zb || Zb > wb - Ub))
      }
      intersectsSphere(bb) {
        return Ub.IntersectsSphere(this.minimumWorld, this.maximumWorld, bb.centerWorld, bb.radiusWorld)
      }
      intersectsMinMax(bb, ub) {
        const hb = this.minimumWorld,
          Bb = this.maximumWorld,
          Ob = hb.x,
          Gb = hb.y,
          Ub = hb.z,
          Lb = Bb.x,
          Yb = Bb.y,
          Sb = Bb.z,
          ab = bb.x,
          Hb = bb.y,
          wb = bb.z,
          Zb = ub.x,
          Xb = ub.y,
          pb = ub.z;
        return !(Lb < ab || Ob > Zb) && (!(Yb < Hb || Gb > Xb) && !(Sb < wb || Ub > pb))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(bb, ub) {
        return bb.intersectsMinMax(ub.minimumWorld, ub.maximumWorld)
      }
      static IntersectsSphere(bb, ub, hb, Bb) {
        const Gb = Ub._TmpVector3[0];
        Ob.q.ClampToRef(hb, bb, ub, Gb);
        return Ob.q.DistanceSquared(hb, Gb) <= Bb * Bb
      }
      static IsCompletelyInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; ++hb) {
          const Bb = ub[hb];
          for (let ub = 0; ub < 8; ++ub)
            if (Bb.dotCoordinate(bb[ub]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; ++hb) {
          let Bb = !0;
          const Ob = ub[hb];
          for (let ub = 0; ub < 8; ++ub)
            if (Ob.dotCoordinate(bb[ub]) >= 0) {
              Bb = !1;
              break
            } if (Bb) return !1
        }
        return !0
      }
    }
    Ub._TmpVector3 = (0, Bb.e)(3, Ob.q.Zero)
  },
  39752: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Hb
    });
    var Bb = hb(36736),
      Ob = hb(36727),
      Gb = hb(39758);
    class Ub {
      constructor(bb, ub, hb) {
        this.center = Ob.q.Zero(), this.centerWorld = Ob.q.Zero(), this.minimum = Ob.q.Zero(), this.maximum = Ob.q.Zero(), this.reConstruct(bb, ub, hb)
      }
      reConstruct(bb, ub, hb) {
        this.minimum.mD(bb), this.maximum.mD(ub);
        const Bb = Ob.q.Distance(bb, ub);
        ub.addToRef(bb, this.center).scaleInPlace(.5), this.radius = .5 * Bb, this._update(hb || Ob.d.IdentityReadOnly)
      }
      scale(bb) {
        const ub = Ub._TmpVector3,
          hb = this.maximum.subtractToRef(this.minimum, ub[0]),
          Bb = hb.length();
        hb.normalizeFromLength(Bb);
        const Ob = Bb * bb,
          Gb = hb.scaleInPlace(.5 * Ob),
          Lb = this.center.subtractToRef(Gb, ub[1]),
          Yb = this.center.addToRef(Gb, ub[2]);
        return this.reConstruct(Lb, Yb, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        if (bb.isIdentity()) this.centerWorld.mD(this.center), this.radiusWorld = this.radius;
        else {
          Ob.q.TransformCoordinatesToRef(this.center, bb, this.centerWorld);
          const ub = Ub._TmpVector3[0];
          Ob.q.TransformNormalFromFloatsToRef(1, 1, 1, bb, ub), this.radiusWorld = Math.max(Math.abs(ub.x), Math.abs(ub.y), Math.abs(ub.z)) * this.radius
        }
      }
      isInFrustum(bb) {
        const ub = this.centerWorld,
          hb = this.radiusWorld;
        for (let Bb = 0; Bb < 6; Bb++)
          if (bb[Bb].dotCoordinate(ub) <= -hb) return !1;
        return !0
      }
      isCenterInFrustum(bb) {
        const ub = this.centerWorld;
        for (let hb = 0; hb < 6; hb++)
          if (bb[hb].dotCoordinate(ub) < 0) return !1;
        return !0
      }
      intersectsPoint(bb) {
        const ub = Ob.q.DistanceSquared(this.centerWorld, bb);
        return !(this.radiusWorld * this.radiusWorld < ub)
      }
      static Intersects(bb, ub) {
        const hb = Ob.q.DistanceSquared(bb.centerWorld, ub.centerWorld),
          Bb = bb.radiusWorld + ub.radiusWorld;
        return !(Bb * Bb < hb)
      }
      static CreateFromCenterAndRadius(bb, ub, hb) {
        this._TmpVector3[0].mD(bb), this._TmpVector3[1].M_(0, 0, ub), this._TmpVector3[2].mD(bb), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].tBb(this._TmpVector3[1]);
        const Bb = new Ub(this._TmpVector3[0], this._TmpVector3[2]);
        return Bb._worldMatrix = hb || Ob.d.Identity(), Bb
      }
    }
    Ub._TmpVector3 = (0, Bb.e)(3, Ob.q.Zero);
    const Lb = {
        min: 0,
        max: 0
      },
      Yb = {
        min: 0,
        max: 0
      },
      Sb = (bb, ub, hb) => {
        const Bb = Ob.q.Dot(ub.centerWorld, bb),
          Gb = Math.abs(Ob.q.Dot(ub.directions[0], bb)) * ub.extendSize.x + Math.abs(Ob.q.Dot(ub.directions[1], bb)) * ub.extendSize.y + Math.abs(Ob.q.Dot(ub.directions[2], bb)) * ub.extendSize.z;
        hb.min = Bb - Gb, hb.max = Bb + Gb
      },
      ab = (bb, ub, hb) => (Sb(bb, ub, Lb), Sb(bb, hb, Yb), !(Lb.min > Yb.max || Yb.min > Lb.max));
    class Hb {
      constructor(bb, ub, hb) {
        this._isLocked = !1, this.boundingBox = new Gb.e(bb, ub, hb), this.sBb = new Ub(bb, ub, hb)
      }
      reConstruct(bb, ub, hb) {
        this.boundingBox.reConstruct(bb, ub, hb), this.sBb.reConstruct(bb, ub, hb)
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
      set isLocked(bb) {
        this._isLocked = bb
      }
      update(bb) {
        this._isLocked || (this.boundingBox._update(bb), this.sBb._update(bb))
      }
      centerOn(bb, ub) {
        const hb = Hb._TmpVector3[0].mD(bb).tBb(ub),
          Bb = Hb._TmpVector3[1].mD(bb).addInPlace(ub);
        return this.boundingBox.reConstruct(hb, Bb, this.boundingBox.getWorldMatrix()), this.sBb.reConstruct(hb, Bb, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(bb) {
        const ub = Ob.q.Minimize(this.minimum, bb),
          hb = Ob.q.Maximize(this.maximum, bb);
        return this.reConstruct(ub, hb, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(bb) {
        const ub = Ob.i.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(ub);
        const hb = Ob.i.YX[0];
        return Ob.q.TransformCoordinatesToRef(bb.boundingBox.minimumWorld, ub, hb), this.encapsulate(hb), Ob.q.TransformCoordinatesToRef(bb.boundingBox.maximumWorld, ub, hb), this.encapsulate(hb), this
      }
      scale(bb) {
        return this.boundingBox.scale(bb), this.sBb.scale(bb), this
      }
      isInFrustum(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === ub || 3 === ub) && this.sBb.isCenterInFrustum(bb)) return !0;
        if (!this.sBb.isInFrustum(bb)) return !1;
        return !(1 !== ub && 3 !== ub) || this.boundingBox.isInFrustum(bb)
      }
      get diagonalLength() {
        const bb = this.boundingBox;
        return bb.maximumWorld.subtractToRef(bb.minimumWorld, Hb._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(bb) {
        return this.boundingBox.isCompletelyInFrustum(bb)
      }
      _checkCollision(bb) {
        return bb._canDoCollision(this.sBb.centerWorld, this.sBb.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(bb) {
        return !!this.sBb.centerWorld && (!!this.sBb.intersectsPoint(bb) && !!this.boundingBox.intersectsPoint(bb))
      }
      intersects(bb, ub) {
        if (!Ub.Intersects(this.sBb, bb.sBb)) return !1;
        if (!Gb.e.Intersects(this.boundingBox, bb.boundingBox)) return !1;
        if (!ub) return !0;
        const hb = this.boundingBox,
          Bb = bb.boundingBox;
        return !!ab(hb.directions[0], hb, Bb) && (!!ab(hb.directions[1], hb, Bb) && (!!ab(hb.directions[2], hb, Bb) && (!!ab(Bb.directions[0], hb, Bb) && (!!ab(Bb.directions[1], hb, Bb) && (!!ab(Bb.directions[2], hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[0], Bb.directions[0]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[0], Bb.directions[1]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[0], Bb.directions[2]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[1], Bb.directions[0]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[1], Bb.directions[1]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[1], Bb.directions[2]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[2], Bb.directions[0]), hb, Bb) && (!!ab(Ob.q.Cross(hb.directions[2], Bb.directions[1]), hb, Bb) && !!ab(Ob.q.Cross(hb.directions[2], Bb.directions[2]), hb, Bb))))))))))))))
      }
    }
    Hb._TmpVector3 = (0, Bb.e)(2, Ob.q.Zero)
  },
  39782: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      g: () => Yb,
      i: () => Lb,
      k: () => Ub
    });
    var Bb = hb(39621),
      Ob = hb(36727);

    function Gb(bb) {
      -1 === bb.indexOf("vClipPlane") && bb.push("vClipPlane"), -1 === bb.indexOf("vClipPlane2") && bb.push("vClipPlane2"), -1 === bb.indexOf("vClipPlane3") && bb.push("vClipPlane3"), -1 === bb.indexOf("vClipPlane4") && bb.push("vClipPlane4"), -1 === bb.indexOf("vClipPlane5") && bb.push("vClipPlane5"), -1 === bb.indexOf("vClipPlane6") && bb.push("vClipPlane6")
    }

    function Ub(bb, ub, hb) {
      const Bb = !!(bb.clipPlane ?? ub.clipPlane),
        Ob = !!(bb.clipPlane2 ?? ub.clipPlane2),
        Gb = !!(bb.clipPlane3 ?? ub.clipPlane3),
        Ub = !!(bb.clipPlane4 ?? ub.clipPlane4),
        Lb = !!(bb.clipPlane5 ?? ub.clipPlane5),
        Yb = !!(bb.clipPlane6 ?? ub.clipPlane6);
      Bb && hb.push("#define CLIPPLANE"), Ob && hb.push("#define CLIPPLANE2"), Gb && hb.push("#define CLIPPLANE3"), Ub && hb.push("#define CLIPPLANE4"), Lb && hb.push("#define CLIPPLANE5"), Yb && hb.push("#define CLIPPLANE6")
    }

    function Lb(bb, ub, hb) {
      let Bb = !1;
      const Ob = !!(bb.clipPlane ?? ub.clipPlane),
        Gb = !!(bb.clipPlane2 ?? ub.clipPlane2),
        Ub = !!(bb.clipPlane3 ?? ub.clipPlane3),
        Lb = !!(bb.clipPlane4 ?? ub.clipPlane4),
        Yb = !!(bb.clipPlane5 ?? ub.clipPlane5),
        Sb = !!(bb.clipPlane6 ?? ub.clipPlane6);
      return hb.CLIPPLANE !== Ob && (hb.CLIPPLANE = Ob, Bb = !0), hb.CLIPPLANE2 !== Gb && (hb.CLIPPLANE2 = Gb, Bb = !0), hb.CLIPPLANE3 !== Ub && (hb.CLIPPLANE3 = Ub, Bb = !0), hb.CLIPPLANE4 !== Lb && (hb.CLIPPLANE4 = Lb, Bb = !0), hb.CLIPPLANE5 !== Yb && (hb.CLIPPLANE5 = Yb, Bb = !0), hb.CLIPPLANE6 !== Sb && (hb.CLIPPLANE6 = Sb, Bb = !0), Bb
    }

    function Yb(bb, ub, hb) {
      let Bb = ub.clipPlane ?? hb.clipPlane;
      Sb(bb, "vClipPlane", Bb), Bb = ub.clipPlane2 ?? hb.clipPlane2, Sb(bb, "vClipPlane2", Bb), Bb = ub.clipPlane3 ?? hb.clipPlane3, Sb(bb, "vClipPlane3", Bb), Bb = ub.clipPlane4 ?? hb.clipPlane4, Sb(bb, "vClipPlane4", Bb), Bb = ub.clipPlane5 ?? hb.clipPlane5, Sb(bb, "vClipPlane5", Bb), Bb = ub.clipPlane6 ?? hb.clipPlane6, Sb(bb, "vClipPlane6", Bb)
    }

    function Sb(bb, ub, hb) {
      if (hb) {
        const Gb = Bb.c.ZN()?.floatingOriginOffset || Ob.q.ZeroReadOnly;
        bb.setFloat4(ub, hb.normal.x, hb.normal.y, hb.normal.z, hb.d + Ob.q.Dot(hb.normal, Gb))
      }
    }
  },
  39797: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    class Bb {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(bb, ub) {
        this._defines[bb] || (bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb), this._defines[bb] = new Array), this._defines[bb].push(ub)
      }
      addCPUSkinningFallback(bb, ub) {
        this._mesh = ub, bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(bb, ub) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, bb = bb.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), ub._bonesComputationForcedToCPU = !0;
          const hb = this._mesh.ZN();
          for (let bb = 0; bb < hb.meshes.length; bb++) {
            const Bb = hb.meshes[bb];
            if (Bb.material) {
              if (Bb.computeBonesUsingShaders && 0 !== Bb.numBoneInfluencers)
                if (Bb.material.getEffect() === ub) Bb.computeBonesUsingShaders = !1;
                else if (Bb.FW)
                for (const bb of Bb.FW) {
                  if (bb.effect === ub) {
                    Bb.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Bb.computeBonesUsingShaders && Bb.numBoneInfluencers > 0 && (Bb.computeBonesUsingShaders = !1)
          }
        } else {
          const ub = this._defines[this._currentRank];
          if (ub)
            for (let hb = 0; hb < ub.length; hb++) bb = bb.replace("#define " + ub[hb], "");
          this._currentRank++
        }
        return bb
      }
    }
  },
  39728: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => lb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39559),
      Ub = hb(36753),
      Lb = hb(36748),
      Yb = hb(39736),
      Sb = hb(39598),
      ab = hb(38302),
      Hb = hb(37399),
      wb = hb(39765),
      Zb = hb(39488);
    let Xb = (() => {
      var bb;
      let ub, hb, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Xb, pb, ob = [];
      return bb = class {
        constructor() {
          this._func = (0, Bb.k)(this, ob), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(bb) {
          this._func = bb
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(bb) {
          this._backFunc = bb
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(bb) {
          this._funcRef = bb
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(bb) {
          this._funcMask = bb
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(bb) {
          this._opStencilFail = bb
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(bb) {
          this._opDepthFail = bb
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(bb) {
          this._opStencilDepthPass = bb
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(bb) {
          this._backOpStencilFail = bb
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(bb) {
          this._backOpDepthFail = bb
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(bb) {
          this._backOpStencilDepthPass = bb
        }
        get mask() {
          return this._mask
        }
        set mask(bb) {
          this._mask = bb
        }
        get enabled() {
          return this._enabled
        }
        set enabled(bb) {
          this._enabled = bb
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(bb) {
          Zb.c.Clone((() => bb), this)
        }
        serialize() {
          return Zb.c.Serialize(this)
        }
        parse(bb, ub, hb) {
          Zb.c.Parse((() => this), bb, ub, hb)
        }
      }, (() => {
        const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], Ub = [(0, Ob.K)()], Lb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], ab = [(0, Ob.K)()], Hb = [(0, Ob.K)()], wb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], pb = [(0, Ob.K)()], (0, Bb.h)(bb, null, ub, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: bb => "func" in bb,
            get: bb => bb.func
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, hb, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: bb => "backFunc" in bb,
            get: bb => bb.backFunc
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Gb, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcRef" in bb,
            get: bb => bb.funcRef
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Ub, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcMask" in bb,
            get: bb => bb.funcMask
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Lb, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilFail" in bb,
            get: bb => bb.opStencilFail
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Yb, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opDepthFail" in bb,
            get: bb => bb.opDepthFail
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Sb, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilDepthPass" in bb,
            get: bb => bb.opStencilDepthPass
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, ab, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilFail" in bb,
            get: bb => bb.backOpStencilFail
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Hb, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpDepthFail" in bb,
            get: bb => bb.backOpDepthFail
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, wb, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilDepthPass" in bb,
            get: bb => bb.backOpStencilDepthPass
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, Xb, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: bb => "mask" in bb,
            get: bb => bb.mask
          },
          metadata: Zb
        }, null, ob), (0, Bb.h)(bb, null, pb, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "enabled" in bb,
            get: bb => bb.enabled
          },
          metadata: Zb
        }, null, ob), Zb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zb
        })
      })(), bb
    })();
    var pb = hb(39773),
      ob = hb(39366),
      Ab = hb(39333);
    let lb = (() => {
      var bb;
      let ub, hb, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb, ib, vb, tb, Jb, eb, Nb, sb, Mb, mb, Ib, Pb, qb, Eb, yb, Vb = [],
        Fb = [],
        fb = [],
        kb = [],
        Tb = [],
        cb = [],
        Qb = [],
        Rb = [],
        bu = [],
        uu = [],
        hu = [],
        Bu = [],
        Ou = [],
        Gu = [],
        Uu = [],
        Lu = [],
        Yu = [],
        Su = [],
        au = [],
        Hu = [],
        wu = [],
        Zu = [],
        Xu = [],
        pu = [],
        ou = [],
        Au = [],
        lu = [],
        Ku = [],
        Wu = [],
        Cu = [],
        du = [],
        ru = [],
        ju = [],
        nu = [],
        Du = [],
        xu = [],
        zu = [],
        gu = [],
        iu = [],
        vu = [],
        tu = [],
        Ju = [],
        eu = [],
        Nu = [],
        su = [],
        Mu = [],
        mu = [],
        Iu = [],
        Pu = [],
        qu = [],
        Eu = [];
      return bb = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(ub) {
          this._useVertexPulling !== ub && (this._useVertexPulling = ub, this.yub(bb.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(bb) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(ub) {
          if (this._alpha === ub) return;
          const hb = this._alpha;
          this._alpha = ub, 1 !== hb && 1 !== ub || this.yub(bb.MiscDirtyFlag + bb.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(ub) {
          this._backFaceCulling !== ub && (this._backFaceCulling = ub, this.yub(bb.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(ub) {
          const hb = Math.max(0, Math.min(0 | ub, 4));
          this._textureRepetitionMode !== hb && (this._textureRepetitionMode = hb, this.yub(bb.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(ub) {
          this._cullBackFaces !== ub && (this._cullBackFaces = ub, this.yub(bb.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(bb) {
          this._blockDirtyMechanism !== bb && (this._blockDirtyMechanism = bb, bb || this.markDirty())
        }
        atomicMaterialsUpdate(bb) {
          this.blockDirtyMechanism = !0;
          try {
            bb(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(bb) {
          this._onDisposeObserver && this.XN.remove(this._onDisposeObserver), this._onDisposeObserver = this.XN.add(bb)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Ub.e), this._onBindObservable
        }
        set onBind(bb) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(bb)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Ub.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Ub.e), this._onEffectCreatedObservable
        }
        set alphaMode(bb) {
          this._alphaMode[0] = bb
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[hb] !== ub && (this._alphaMode[hb] = ub, this.yub(bb.TextureDirtyFlag))
        }
        set needDepthPrePass(bb) {
          this._needDepthPrePass !== bb && (this._needDepthPrePass = bb, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(ub) {
          this._fogEnabled !== ub && (this._fogEnabled = ub, this.yub(bb.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case bb.WireFrameFillMode:
            case bb.LineListDrawMode:
            case bb.LineLoopDrawMode:
            case bb.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(ub) {
          this.fillMode = ub ? bb.WireFrameFillMode : bb.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case bb.PointFillMode:
            case bb.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(ub) {
          this.fillMode = ub ? bb.PointFillMode : bb.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(ub) {
          this._fillMode !== ub && (this._fillMode = ub, this.yub(bb.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(bb) {
          const ub = this.ZN().UX().getCaps().fragmentDepthSupported;
          bb && !ub && ab.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = bb && ub, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(bb) {
          this._isVertexOutputInvariant !== bb && (this._isVertexOutputInvariant = bb, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(bb) {
          this._drawWrapper = bb
        }
        constructor(ub, hb, Ob) {
          let Yb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Bb.k)(this, Vb), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Bb.k)(this, Fb, void 0), this.uniqueId = ((0, Bb.k)(this, fb), (0, Bb.k)(this, kb, void 0)), this._loadedUniqueId = (0, Bb.k)(this, Tb), this.name = (0, Bb.k)(this, cb, void 0), this.metadata = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, null)), this._internalMetadata = (0, Bb.k)(this, bu), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Bb.k)(this, uu, !1), this.checkReadyOnlyOnce = ((0, Bb.k)(this, hu), (0, Bb.k)(this, Bu, !1)), this.state = ((0, Bb.k)(this, Ou), (0, Bb.k)(this, Gu, "")), this._alpha = ((0, Bb.k)(this, Uu), (0, Bb.k)(this, Lu, 1)), this.inspectableCustomProperties = (0, Bb.k)(this, Yu), this._backFaceCulling = (0, Bb.k)(this, Su, !0), this._textureRepetitionMode = ((0, Bb.k)(this, au), (0, Bb.k)(this, Hu, 0)), this.textureRepetitionHexTilingParams = ((0, Bb.k)(this, wu), (0, Bb.k)(this, Zu, [1, .6, 7, .5])), this._cullBackFaces = ((0, Bb.k)(this, Xu), (0, Bb.k)(this, pu, !0)), this._blockDirtyMechanism = ((0, Bb.k)(this, ou), !1), this.sideOrientation = (0, Bb.k)(this, Au, null), this.onCompiled = ((0, Bb.k)(this, lu), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.XN = new Ub.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Bb.k)(this, Ku, [2]), this._needDepthPrePass = ((0, Bb.k)(this, Wu), (0, Bb.k)(this, Cu, !1)), this.disableDepthWrite = ((0, Bb.k)(this, du), (0, Bb.k)(this, ru, !1)), this.disableColorWrite = ((0, Bb.k)(this, ju), (0, Bb.k)(this, nu, !1)), this.forceDepthWrite = ((0, Bb.k)(this, Du), (0, Bb.k)(this, xu, !1)), this.depthFunction = ((0, Bb.k)(this, zu), (0, Bb.k)(this, gu, 0)), this.separateCullingPass = ((0, Bb.k)(this, iu), (0, Bb.k)(this, vu, !1)), this._fogEnabled = ((0, Bb.k)(this, tu), (0, Bb.k)(this, Ju, !0)), this.pointSize = ((0, Bb.k)(this, eu), (0, Bb.k)(this, Nu, 1)), this.zOffset = ((0, Bb.k)(this, su), (0, Bb.k)(this, Mu, 0)), this.zOffsetUnits = ((0, Bb.k)(this, mu), (0, Bb.k)(this, Iu, 0)), this.clipPlane = (0, Bb.k)(this, Pu), this.stencil = new Xb, this._isVertexOutputInvariant = (0, Bb.k)(this, qu, bb.ForceVertexOutputInvariant), this._materialContext = (0, Bb.k)(this, Eu), this._useUBO = !1, this._fillMode = bb.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = ub;
          const ab = hb || Lb.b.LastCreatedScene;
          ab && (this._scene = ab, this._dirtyCallbacks = {}, this._forceGLSL = Yb, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = ub || Gb.k.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.UX().createMaterialContext(), this._drawWrapper = new wb.d(this._scene.UX(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Sb.c(this._scene.UX(), void 0, void 0, ub), this._useUBO = this.ZN().UX().supportsUniformBuffers, this._createUniformBuffer(), Ob || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), bb.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const bb = this.ZN().UX();
          this._uniformBuffer?.dispose(), bb.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Sb.c(bb, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Sb.c(this._scene.UX(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(bb) {
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
        isReady(bb, ub) {
          return !0
        }
        isReadyForSubMesh(bb, ub, hb) {
          const Bb = ub.materialDefines;
          return !!Bb && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Bb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        ZN() {
          return this._scene
        }
        _getEffectiveOrientation(bb) {
          return null !== this.sideOrientation ? this.sideOrientation : bb.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(bb) {
          this._transparencyMode = bb
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === bb.MATERIAL_ALPHABLEND || this._transparencyMode === bb.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === bb.MATERIAL_ALPHATEST || this._transparencyMode === bb.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === bb.MATERIAL_OPAQUE || this._transparencyMode === bb.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(bb) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : bb.visibility < 1 || !this._disableAlphaBlending && (bb.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(bb) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(bb) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const hb = this.ZN().meshes;
          for (const bb of hb)
            if (bb.FW)
              for (const hb of bb.FW)
                if (hb.HX() === this)
                  for (const bb of hb._drawWrappers) bb && this._materialContext === bb.materialContext && (bb._wasPreviouslyReady = !1, bb._wasPreviouslyUsingInstances = null, bb._forceRebindOnNextCall = ub);
          ub && this.yub(bb.AllDirtyFlag)
        }
        _preBind(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Bb = this._scene.UX(),
            Ob = (null == hb ? this.sideOrientation : hb) === bb.ClockWiseSideOrientation,
            Gb = ub || this._getDrawWrapper();
          return (0, ob.b)(Gb) && Gb.materialContext && (Gb.materialContext.useVertexPulling = this.useVertexPulling), Bb.enableEffect(Gb), Bb.setState(this.backFaceCulling, this.zOffset, !1, Ob, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Ob
        }
        bind(bb, ub) {}
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          this._eventInfo.ubo = bb, this._callbackPluginEventGeneric(8, this._eventInfo), bb.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(bb, ub, hb) {
          const Bb = hb._drawWrapper;
          this._eventInfo.subMesh = hb, this._callbackPluginEventBindForSubMesh(this._eventInfo), Bb._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(bb) {}
        bindView(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : bb.setMatrix("view", this.ZN().getViewMatrix())
        }
        bindViewProjection(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (bb.setMatrix("viewProjection", this.ZN().getTransformMatrix()), bb.setMatrix("projection", this.ZN().getProjectionMatrix()), bb.setMatrix("inverseProjection", this.ZN().getInverseProjectionMatrix()))
        }
        bindEyePosition(bb, ub) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(bb, ub)
        }
        _afterBind(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ub && (this._needToBindSceneUbo = !1, (0, pb.s)(ub, this.ZN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = bb ? bb.visibility : 1, this._onBindObservable && bb && this._onBindObservable.notifyObservers(bb), this.disableDepthWrite) {
            const bb = this._scene.UX();
            this._cachedDepthWriteState = bb.getDepthWrite(), bb.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const bb = this._scene.UX();
            this._cachedColorWriteState = bb.getColorWrite(), bb.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const bb = this._scene.UX();
            this._cachedDepthFunctionState = bb.getDepthFunction() || 0, bb.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.UX().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.UX().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.UX().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(bb) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = bb, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(bb) {
          return null
        }
        _clonePlugins(ub, hb) {
          const Bb = {};
          if (this._serializePlugins(Bb), bb._ParsePlugins(Bb, ub, this._scene, hb), this.pluginManager)
            for (const bb of this.pluginManager._plugins) {
              const hb = ub.pluginManager.getPlugin(bb.name);
              hb && bb.copyTo(hb)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const bb = [];
            for (const ub in this.meshMap) {
              const hb = this.meshMap[ub];
              hb && bb.push(hb)
            }
            return bb
          }
          return this._scene.meshes.filter((bb => bb.material === this))
        }
        forceCompilation(bb, ub, hb, Bb) {
          const Ob = {
              clipPlane: !1,
              useInstances: !1,
              ...hb
            },
            Gb = this.ZN(),
            Ub = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Lb = () => {
            if (!this._scene || !this._scene.UX()) return;
            const hb = Gb.clipPlane;
            if (Ob.clipPlane && (Gb.clipPlane = new Hb.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let hb = !0,
                Gb = null;
              if (bb.FW) {
                const ub = new Yb.c(0, 0, 0, 0, 0, bb, void 0, !1, !1);
                ub.materialDefines && (ub.materialDefines._renderId = -1), this.isReadyForSubMesh(bb, ub, Ob.useInstances) || (ub.effect && ub.effect.getCompilationError() && ub.effect.allFallbacksProcessed() ? Gb = ub.effect.getCompilationError() : (hb = !1, setTimeout(Lb, 16)))
              }
              hb && (this.allowShaderHotSwapping = Ub, Gb && Bb && Bb(Gb), ub && ub(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Ub, ub && ub(this)) : setTimeout(Lb, 16);
            Ob.clipPlane && (Gb.clipPlane = hb)
          };
          Lb()
        }
        async forceCompilationAsync(bb, ub) {
          return await new Promise(((hb, Bb) => {
            this.forceCompilation(bb, (() => {
              hb()
            }), ub, (bb => {
              Bb(bb)
            }))
          }))
        }
        yub(ub) {
          this.ZN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (bb._DirtyCallbackArray.length = 0, ub & bb.ImageProcessingDirtyFlag && bb._DirtyCallbackArray.push(bb._ImageProcessingDirtyCallBack), ub & bb.TextureDirtyFlag && bb._DirtyCallbackArray.push(bb._TextureDirtyCallBack), ub & bb.LightDirtyFlag && bb._DirtyCallbackArray.push(bb._LightsDirtyCallBack), ub & bb.FresnelDirtyFlag && bb._DirtyCallbackArray.push(bb._FresnelDirtyCallBack), ub & bb.AttributesDirtyFlag && bb._DirtyCallbackArray.push(bb._AttributeDirtyCallBack), ub & bb.MiscDirtyFlag && bb._DirtyCallbackArray.push(bb._MiscDirtyCallBack), ub & bb.PrePassDirtyFlag && bb._DirtyCallbackArray.push(bb._PrePassDirtyCallBack), bb._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(bb._RunDirtyCallBacks), this.ZN().resetCachedMaterial())
        }
        resetDrawCache() {
          const bb = this.ZN().meshes;
          for (const ub of bb)
            if (ub.FW)
              for (const bb of ub.FW) bb.HX() === this && bb.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(bb) {
          const ub = this.ZN();
          if (ub.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const hb = ub.meshes;
          for (const Bb of hb)
            if (Bb.FW)
              for (const hb of Bb.FW) {
                if ((hb.HX() || (ub._hasDefaultMaterial ? ub.defaultMaterial : null)) === this)
                  for (const ub of hb._drawWrappers) ub && ub.defines && ub.defines.markAllAsDirty && this._materialContext === ub.materialContext && bb(ub.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.ZN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const bb = this.ZN().enablePrePassRenderer();
          bb && bb.yub()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(bb._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(bb._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(bb._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(bb._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(bb._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(bb._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(bb._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(bb._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(bb._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(bb._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const bb = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.XN.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(bb)
            }))
          }
        }
        setPrePassRenderer(bb) {
          return !1
        }
        dispose(bb, ub, hb) {
          const Bb = this.ZN();
          if (Bb.stopAnimation(this), Bb.freeProcessedMaterials(), Bb.removeMaterial(this), this._eventInfo.forceDisposeTextures = ub, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const bb = this._parentContainer.materials.indexOf(this);
            bb > -1 && this._parentContainer.materials.splice(bb, 1), this._parentContainer = null
          }
          if (!0 !== hb)
            if (this.meshMap)
              for (const Ob in this.meshMap) {
                const bb = this.meshMap[Ob];
                this._disposeMeshResources(bb)
              } else {
                const bb = Bb.meshes;
                for (const ub of bb) this._disposeMeshResources(ub)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.XN.notifyObservers(this), this.XN.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(bb) {
          if (!bb) return;
          const ub = bb.geometry,
            hb = bb._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (bb.FW && hb)
              for (const Bb of bb.FW) {
                const bb = Bb._drawWrappers;
                for (let Ob = 0; Ob < bb.length; Ob++) {
                  const Gb = bb[Ob]?.effect;
                  if (!Gb) continue;
                  hb[Ob] === this && (ub?._releaseVertexArrayObject(Gb), Bb._removeDrawWrapper(Ob, !0, !0))
                }
              }
          } else ub?._releaseVertexArrayObject(this._drawWrapper.effect);
          bb.material !== this || bb.LOb || (bb.material = null)
        }
        serialize() {
          const bb = Zb.c.Serialize(this);
          return bb.stencil = this.stencil.serialize(), bb.uniqueId = this.uniqueId, this._serializePlugins(bb), bb
        }
        _serializePlugins(bb) {
          if (bb.plugins = {}, this.pluginManager)
            for (const ub of this.pluginManager._plugins) ub.doNotSerialize || (bb.plugins[ub.getClassName()] = ub.serialize())
        }
        static ParseAlphaMode(bb, ub) {
          void 0 !== bb._alphaMode ? ub._alphaMode = Array.isArray(bb._alphaMode) ? [...bb._alphaMode] : [bb._alphaMode] : void 0 !== bb.alphaMode ? ub._alphaMode = Array.isArray(bb.alphaMode) ? [...bb.alphaMode] : [bb.alphaMode] : ub._alphaMode = [2]
        }
        static Parse(ub, hb, Bb) {
          if (ub.customType) {
            if ("BABYLON.PBRMaterial" === ub.customType && ub.overloadedAlbedo && (ub.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return ab.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else ub.customType = "BABYLON.StandardMaterial";
          const Ob = Gb.k.Instantiate(ub.customType).Parse(ub, hb, Bb);
          return Ob._loadedUniqueId = ub.uniqueId, bb.ParseAlphaMode(ub, Ob), Ob
        }
        static _ParsePlugins(bb, ub, hb, Bb) {
          if (bb.plugins)
            for (const Ob in bb.plugins) {
              const Ub = bb.plugins[Ob];
              let Lb = ub.pluginManager?.getPlugin(Ub.name);
              if (!Lb) {
                const bb = Gb.k.Instantiate("BABYLON." + Ob);
                bb && (Lb = new bb(ub))
              }
              Lb?.parse(Ub, hb, Bb)
            }
        }
      }, (() => {
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Ab = [(0, Ob.K)()], lb = [(0, Ob.K)()], Kb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], Cb = [(0, Ob.K)()], db = [(0, Ob.K)("alpha")], rb = [(0, Ob.K)("backFaceCulling")], jb = [(0, Ob.K)("textureRepetitionMode")], nb = [(0, Ob.K)("textureRepetitionHexTilingParams")], Db = [(0, Ob.K)("cullBackFaces")], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], gb = [(0, Ob.K)()], ib = [(0, Ob.K)()], vb = [(0, Ob.K)()], tb = [(0, Ob.K)()], Jb = [(0, Ob.K)()], eb = [(0, Ob.K)()], Nb = [(0, Ob.K)("fogEnabled")], sb = [(0, Ob.K)()], Mb = [(0, Ob.K)()], mb = [(0, Ob.K)()], Ib = [(0, Ob.K)()], Pb = [(0, Ob.K)()], qb = [(0, Ob.K)()], Eb = [(0, Ob.K)()], yb = [(0, Ob.K)()], (0, Bb.h)(bb, null, Ib, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointsCloud" in bb,
            get: bb => bb.pointsCloud
          },
          metadata: Gb
        }, null, Vb), (0, Bb.h)(bb, null, Pb, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fillMode" in bb,
            get: bb => bb.fillMode
          },
          metadata: Gb
        }, null, Vb), (0, Bb.h)(bb, null, qb, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLogarithmicDepth" in bb,
            get: bb => bb.useLogarithmicDepth
          },
          metadata: Gb
        }, null, Vb), (0, Bb.h)(bb, null, yb, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "transparencyMode" in bb,
            get: bb => bb.transparencyMode
          },
          metadata: Gb
        }, null, Vb), (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, ub) => {
              bb.id = ub
            }
          },
          metadata: Gb
        }, Fb, fb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, ub) => {
              bb.uniqueId = ub
            }
          },
          metadata: Gb
        }, kb, Tb), (0, Bb.h)(null, null, Ab, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, ub) => {
              bb.name = ub
            }
          },
          metadata: Gb
        }, cb, Qb), (0, Bb.h)(null, null, lb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, ub) => {
              bb.metadata = ub
            }
          },
          metadata: Gb
        }, Rb, bu), (0, Bb.h)(null, null, Kb, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnEveryCall" in bb,
            get: bb => bb.checkReadyOnEveryCall,
            set: (bb, ub) => {
              bb.checkReadyOnEveryCall = ub
            }
          },
          metadata: Gb
        }, uu, hu), (0, Bb.h)(null, null, Wb, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnlyOnce" in bb,
            get: bb => bb.checkReadyOnlyOnce,
            set: (bb, ub) => {
              bb.checkReadyOnlyOnce = ub
            }
          },
          metadata: Gb
        }, Bu, Ou), (0, Bb.h)(null, null, Cb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, ub) => {
              bb.state = ub
            }
          },
          metadata: Gb
        }, Gu, Uu), (0, Bb.h)(null, null, db, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alpha" in bb,
            get: bb => bb._alpha,
            set: (bb, ub) => {
              bb._alpha = ub
            }
          },
          metadata: Gb
        }, Lu, Yu), (0, Bb.h)(null, null, rb, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_backFaceCulling" in bb,
            get: bb => bb._backFaceCulling,
            set: (bb, ub) => {
              bb._backFaceCulling = ub
            }
          },
          metadata: Gb
        }, Su, au), (0, Bb.h)(null, null, jb, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_textureRepetitionMode" in bb,
            get: bb => bb._textureRepetitionMode,
            set: (bb, ub) => {
              bb._textureRepetitionMode = ub
            }
          },
          metadata: Gb
        }, Hu, wu), (0, Bb.h)(null, null, nb, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRepetitionHexTilingParams" in bb,
            get: bb => bb.textureRepetitionHexTilingParams,
            set: (bb, ub) => {
              bb.textureRepetitionHexTilingParams = ub
            }
          },
          metadata: Gb
        }, Zu, Xu), (0, Bb.h)(null, null, Db, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: bb => "_cullBackFaces" in bb,
            get: bb => bb._cullBackFaces,
            set: (bb, ub) => {
              bb._cullBackFaces = ub
            }
          },
          metadata: Gb
        }, pu, ou), (0, Bb.h)(null, null, xb, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: bb => "sideOrientation" in bb,
            get: bb => bb.sideOrientation,
            set: (bb, ub) => {
              bb.sideOrientation = ub
            }
          },
          metadata: Gb
        }, Au, lu), (0, Bb.h)(null, null, zb, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alphaMode" in bb,
            get: bb => bb._alphaMode,
            set: (bb, ub) => {
              bb._alphaMode = ub
            }
          },
          metadata: Gb
        }, Ku, Wu), (0, Bb.h)(null, null, gb, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: bb => "_needDepthPrePass" in bb,
            get: bb => bb._needDepthPrePass,
            set: (bb, ub) => {
              bb._needDepthPrePass = ub
            }
          },
          metadata: Gb
        }, Cu, du), (0, Bb.h)(null, null, ib, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableDepthWrite" in bb,
            get: bb => bb.disableDepthWrite,
            set: (bb, ub) => {
              bb.disableDepthWrite = ub
            }
          },
          metadata: Gb
        }, ru, ju), (0, Bb.h)(null, null, vb, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableColorWrite" in bb,
            get: bb => bb.disableColorWrite,
            set: (bb, ub) => {
              bb.disableColorWrite = ub
            }
          },
          metadata: Gb
        }, nu, Du), (0, Bb.h)(null, null, tb, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceDepthWrite" in bb,
            get: bb => bb.forceDepthWrite,
            set: (bb, ub) => {
              bb.forceDepthWrite = ub
            }
          },
          metadata: Gb
        }, xu, zu), (0, Bb.h)(null, null, Jb, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: bb => "depthFunction" in bb,
            get: bb => bb.depthFunction,
            set: (bb, ub) => {
              bb.depthFunction = ub
            }
          },
          metadata: Gb
        }, gu, iu), (0, Bb.h)(null, null, eb, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "separateCullingPass" in bb,
            get: bb => bb.separateCullingPass,
            set: (bb, ub) => {
              bb.separateCullingPass = ub
            }
          },
          metadata: Gb
        }, vu, tu), (0, Bb.h)(null, null, Nb, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_fogEnabled" in bb,
            get: bb => bb._fogEnabled,
            set: (bb, ub) => {
              bb._fogEnabled = ub
            }
          },
          metadata: Gb
        }, Ju, eu), (0, Bb.h)(null, null, sb, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointSize" in bb,
            get: bb => bb.pointSize,
            set: (bb, ub) => {
              bb.pointSize = ub
            }
          },
          metadata: Gb
        }, Nu, su), (0, Bb.h)(null, null, Mb, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffset" in bb,
            get: bb => bb.zOffset,
            set: (bb, ub) => {
              bb.zOffset = ub
            }
          },
          metadata: Gb
        }, Mu, mu), (0, Bb.h)(null, null, mb, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffsetUnits" in bb,
            get: bb => bb.zOffsetUnits,
            set: (bb, ub) => {
              bb.zOffsetUnits = ub
            }
          },
          metadata: Gb
        }, Iu, Pu), (0, Bb.h)(null, null, Eb, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: bb => "_isVertexOutputInvariant" in bb,
            get: bb => bb._isVertexOutputInvariant,
            set: (bb, ub) => {
              bb._isVertexOutputInvariant = ub
            }
          },
          metadata: Gb
        }, qu, Eu), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb.TriangleFillMode = 0, bb.WireFrameFillMode = 1, bb.PointFillMode = 2, bb.PointListDrawMode = 3, bb.LineListDrawMode = 4, bb.LineLoopDrawMode = 5, bb.LineStripDrawMode = 6, bb.TriangleStripDrawMode = 7, bb.TriangleFanDrawMode = 8, bb.ClockWiseSideOrientation = 0, bb.CounterClockWiseSideOrientation = 1, bb.ImageProcessingDirtyFlag = 64, bb.TextureDirtyFlag = 1, bb.LightDirtyFlag = 2, bb.FresnelDirtyFlag = 4, bb.AttributesDirtyFlag = 8, bb.MiscDirtyFlag = 16, bb.PrePassDirtyFlag = 32, bb.AllDirtyFlag = 127, bb.MATERIAL_OPAQUE = 0, bb.MATERIAL_ALPHATEST = 1, bb.MATERIAL_ALPHABLEND = 2, bb.MATERIAL_ALPHATESTANDBLEND = 3, bb.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, bb.MATERIAL_NORMALBLENDMETHOD_RNM = 1, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.OnEventObservable = new Ub.e, bb.ForceVertexOutputInvariant = !1, bb._AllDirtyCallBack = bb => bb.markAllAsDirty(), bb._ImageProcessingDirtyCallBack = bb => bb.markAsImageProcessingDirty(), bb._TextureDirtyCallBack = bb => bb.markAsTexturesDirty(), bb._FresnelDirtyCallBack = bb => bb.markAsFresnelDirty(), bb._MiscDirtyCallBack = bb => bb.markAsMiscDirty(), bb._PrePassDirtyCallBack = bb => bb.markAsPrePassDirty(), bb._LightsDirtyCallBack = bb => bb.markAsLightDirty(), bb._AttributeDirtyCallBack = bb => bb.markAsAttributesDirty(), bb._FresnelAndMiscDirtyCallBack = ub => {
        bb._FresnelDirtyCallBack(ub), bb._MiscDirtyCallBack(ub)
      }, bb._TextureAndMiscDirtyCallBack = ub => {
        bb._TextureDirtyCallBack(ub), bb._MiscDirtyCallBack(ub)
      }, bb._DirtyCallbackArray = [], bb._RunDirtyCallBacks = ub => {
        for (const hb of bb._DirtyCallbackArray) hb(ub)
      }, bb
    })();
    Object.getOwnPropertyDescriptor(lb.prototype, "pluginManager") || Object.defineProperty(lb.prototype, "pluginManager", (0, Ab.f)("Material", "pluginManager"))
  },
  39788: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = hb(39350);
    class Ob {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(bb) {
        this._DiffuseTextureEnabled !== bb && (this._DiffuseTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(bb) {
        this._BaseWeightTextureEnabled !== bb && (this._BaseWeightTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(bb) {
        this._BaseDiffuseRoughnessTextureEnabled !== bb && (this._BaseDiffuseRoughnessTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(bb) {
        this._DetailTextureEnabled !== bb && (this._DetailTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(bb) {
        this._DecalMapEnabled !== bb && (this._DecalMapEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(bb) {
        this._AmbientTextureEnabled !== bb && (this._AmbientTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(bb) {
        this._OpacityTextureEnabled !== bb && (this._OpacityTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(bb) {
        this._ReflectionTextureEnabled !== bb && (this._ReflectionTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(bb) {
        this._EmissiveTextureEnabled !== bb && (this._EmissiveTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(bb) {
        this._SpecularTextureEnabled !== bb && (this._SpecularTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(bb) {
        this._BumpTextureEnabled !== bb && (this._BumpTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(bb) {
        this._LightmapTextureEnabled !== bb && (this._LightmapTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(bb) {
        this._RefractionTextureEnabled !== bb && (this._RefractionTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(bb) {
        this._ColorGradingTextureEnabled !== bb && (this._ColorGradingTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(bb) {
        this._FresnelEnabled !== bb && (this._FresnelEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(bb) {
        this._ClearCoatTextureEnabled !== bb && (this._ClearCoatTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(bb) {
        this._ClearCoatBumpTextureEnabled !== bb && (this._ClearCoatBumpTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(bb) {
        this._ClearCoatTintTextureEnabled !== bb && (this._ClearCoatTintTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(bb) {
        this._SheenTextureEnabled !== bb && (this._SheenTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(bb) {
        this._AnisotropicTextureEnabled !== bb && (this._AnisotropicTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(bb) {
        this._ThicknessTextureEnabled !== bb && (this._ThicknessTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(bb) {
        this._RefractionIntensityTextureEnabled !== bb && (this._RefractionIntensityTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(bb) {
        this._TranslucencyIntensityTextureEnabled !== bb && (this._TranslucencyIntensityTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(bb) {
        this._TranslucencyColorTextureEnabled !== bb && (this._TranslucencyColorTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(bb) {
        this._IridescenceTextureEnabled !== bb && (this._IridescenceTextureEnabled = bb, Bb.d.MarkAllMaterialsAsDirty(1))
      }
    }
    Ob._DiffuseTextureEnabled = !0, Ob._BaseWeightTextureEnabled = !0, Ob._BaseDiffuseRoughnessTextureEnabled = !0, Ob._DetailTextureEnabled = !0, Ob._DecalMapEnabled = !0, Ob._AmbientTextureEnabled = !0, Ob._OpacityTextureEnabled = !0, Ob._ReflectionTextureEnabled = !0, Ob._EmissiveTextureEnabled = !0, Ob._SpecularTextureEnabled = !0, Ob._BumpTextureEnabled = !0, Ob._LightmapTextureEnabled = !0, Ob._RefractionTextureEnabled = !0, Ob._ColorGradingTextureEnabled = !0, Ob._FresnelEnabled = !0, Ob._ClearCoatTextureEnabled = !0, Ob._ClearCoatBumpTextureEnabled = !0, Ob._ClearCoatTintTextureEnabled = !0, Ob._SheenTextureEnabled = !0, Ob._AnisotropicTextureEnabled = !0, Ob._ThicknessTextureEnabled = !0, Ob._RefractionIntensityTextureEnabled = !0, Ob._TranslucencyIntensityTextureEnabled = !0, Ob._TranslucencyColorTextureEnabled = !0, Ob._IridescenceTextureEnabled = !0
  },
  39773: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => xb,
      E: () => zb,
      F: () => Zb,
      H: () => wb,
      I: () => Pb,
      K: () => Nb,
      O: () => Jb,
      Q: () => tb,
      R: () => Kb,
      S: () => ib,
      U: () => qb,
      W: () => Eb,
      X: () => yb,
      Y: () => kb,
      Z: () => Fb,
      bb: () => fb,
      d: () => vb,
      e: () => db,
      f: () => Hb,
      fb: () => Xb,
      h: () => Ab,
      i: () => lb,
      j: () => Db,
      l: () => Yb,
      p: () => pb,
      s: () => ob,
      u: () => Wb,
      x: () => gb,
      y: () => Cb
    });
    var Bb = hb(38302),
      Ob = hb(36748),
      Gb = hb(39659),
      Ub = hb(39782),
      Lb = hb(39788);

    function Yb(bb, ub, hb) {
      if (!bb || bb.LOGARITHMICDEPTH || bb.indexOf && bb.indexOf("LOGARITHMICDEPTH") >= 0) {
        const bb = hb.activeCamera;
        1 === bb.mode && Bb.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), ub.setFloat("logarithmicDepthConstant", 2 / (Math.log(bb.maxZ + 1) / Math.LN2))
      }
    }
    const Sb = {
        r: 0,
        g: 0,
        b: 0
      },
      ab = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Hb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      hb && bb.fogEnabled && (!ub || ub.applyFog) && 0 !== bb.fogMode && (hb.setFloat4("vFogInfos", bb.fogMode, bb.fogStart, bb.fogEnd, bb.fogDensity), Bb ? (bb.fogColor.toLinearSpaceToRef(Sb, bb.UX().useExactSrgbConversions), hb.setColor3("vFogColor", Sb)) : hb.setColor3("vFogColor", bb.fogColor))
    }

    function wb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
      const Hb = bb.numMaxInfluencers || bb.numInfluencers;
      return Hb <= 0 ? 0 : (ub.push("#define MORPHTARGETS"), bb.hasPositions && ub.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), bb.hasNormals && ub.push("#define MORPHTARGETTEXTURE_HASNORMALS"), bb.hasTangents && ub.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), bb.hasUVs && ub.push("#define MORPHTARGETTEXTURE_HASUVS"), bb.hasUV2s && ub.push("#define MORPHTARGETTEXTURE_HASUV2S"), bb.hasColors && ub.push("#define MORPHTARGETTEXTURE_HASCOLORS"), bb.supportsPositions && Ob && ub.push("#define MORPHTARGETS_POSITION"), bb.supportsNormals && Gb && ub.push("#define MORPHTARGETS_NORMAL"), bb.supportsTangents && Ub && ub.push("#define MORPHTARGETS_TANGENT"), bb.supportsUVs && Lb && ub.push("#define MORPHTARGETS_UV"), bb.supportsUV2s && Yb && ub.push("#define MORPHTARGETS_UV2"), bb.supportsColors && Sb && ub.push("#define MORPHTARGETS_COLOR"), ub.push("#define NUM_MORPH_INFLUENCERS " + Hb), bb.isUsingTextureForTargets && ub.push("#define MORPHTARGETS_TEXTURE"), ab.NUM_MORPH_INFLUENCERS = Hb, ab.NORMAL = Gb, ab.TANGENT = Ub, ab.UV = Lb, ab.UV2 = Yb, ab.COLOR = Sb, Zb(hb, Bb, ab, Ob), Hb)
    }

    function Zb(bb, ub, hb) {
      let Gb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ub = hb.NUM_MORPH_INFLUENCERS;
      if (Ub > 0 && Ob.b.LastCreatedEngine) {
        const Lb = Ob.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          Yb = ub.morphTargetManager;
        if (Yb?.isUsingTextureForTargets) return;
        const Sb = Yb && Yb.supportsPositions && Gb,
          ab = Yb && Yb.supportsNormals && hb.NORMAL,
          Hb = Yb && Yb.supportsTangents && hb.TANGENT,
          wb = Yb && Yb.supportsUVs && hb.UV1,
          Zb = Yb && Yb.supportsUV2s && hb.UV2,
          Xb = Yb && Yb.supportsColors && hb.VERTEXCOLOR;
        for (let hb = 0; hb < Ub; hb++) Sb && bb.push("position" + hb), ab && bb.push("normal" + hb), Hb && bb.push("tangent" + hb), wb && bb.push("uv_" + hb), Zb && bb.push("uv2_" + hb), Xb && bb.push("color" + hb), bb.length > Lb && Bb.b.Error("Cannot add more vertex attributes for mesh " + ub.name)
      }
    }

    function Xb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      bb.push("world0"), bb.push("world1"), bb.push("world2"), bb.push("world3"), ub && (bb.push("previousWorld0"), bb.push("previousWorld1"), bb.push("previousWorld2"), bb.push("previousWorld3"))
    }

    function pb(bb, ub) {
      const hb = bb.morphTargetManager;
      bb && hb && ub.setFloatArray("morphTargetInfluences", hb.influences)
    }

    function ob(bb, ub) {
      ub.bindToEffect(bb, "Scene")
    }

    function Ab(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Sb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        ab = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Hb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        wb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (bb.texturesEnabled && Ob && Lb.e.ReflectionTextureEnabled) {
        if (hb.S_("reflectionMatrix", Ob.getReflectionTextureMatrix()), hb.updateFloat2("vReflectionInfos", Ob.level * bb.iblIntensity, wb), Yb && Ob.boundingBoxSize) {
          const bb = Ob;
          hb.updateVector3("vReflectionPosition", bb.boundingBoxPosition), hb.updateVector3("vReflectionSize", bb.boundingBoxSize)
        }
        if (Gb) {
          const bb = Ob.getSize().width;
          hb.updateFloat2("vReflectionFilteringInfo", bb, Math.log2(bb))
        }
        if (ab && !ub.USEIRRADIANCEMAP) {
          const bb = Ob.sphericalPolynomial;
          if (ub.USESPHERICALFROMREFLECTIONMAP && bb)
            if (ub.SPHERICAL_HARMONICS) {
              const ub = bb.preScaledHarmonics;
              hb.updateVector3("vSphericalL00", ub.l00), hb.updateVector3("vSphericalL1_1", ub.l1_1), hb.updateVector3("vSphericalL10", ub.l10), hb.updateVector3("vSphericalL11", ub.l11), hb.updateVector3("vSphericalL2_2", ub.l2_2), hb.updateVector3("vSphericalL2_1", ub.l2_1), hb.updateVector3("vSphericalL20", ub.l20), hb.updateVector3("vSphericalL21", ub.l21), hb.updateVector3("vSphericalL22", ub.l22)
            } else hb.updateFloat3("vSphericalX", bb.x.x, bb.x.y, bb.x.z), hb.updateFloat3("vSphericalY", bb.y.x, bb.y.y, bb.y.z), hb.updateFloat3("vSphericalZ", bb.z.x, bb.z.y, bb.z.z), hb.updateFloat3("vSphericalXX_ZZ", bb.xx.x - bb.zz.x, bb.xx.y - bb.zz.y, bb.xx.z - bb.zz.z), hb.updateFloat3("vSphericalYY_ZZ", bb.yy.x - bb.zz.x, bb.yy.y - bb.zz.y, bb.yy.z - bb.zz.z), hb.updateFloat3("vSphericalZZ", bb.zz.x, bb.zz.y, bb.zz.z), hb.updateFloat3("vSphericalXY", bb.xy.x, bb.xy.y, bb.xy.z), hb.updateFloat3("vSphericalYZ", bb.yz.x, bb.yz.y, bb.yz.z), hb.updateFloat3("vSphericalZX", bb.zx.x, bb.zx.y, bb.zx.z)
        } else Sb && ub.USEIRRADIANCEMAP && ub.USE_IRRADIANCE_DOMINANT_DIRECTION && Ob.irradianceTexture && hb.updateVector3("vReflectionDominantDirection", Ob.irradianceTexture._dominantDirection);
        Ub && hb.updateFloat3("vReflectionMicrosurfaceInfos", Ob.getSize().width, Ob.lodGenerationScale, Ob.lodGenerationOffset)
      }
      Hb && hb.updateColor3("vReflectionColor", Bb)
    }

    function lb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Bb && Lb.e.ReflectionTextureEnabled) {
        ub.LODBASEDMICROSFURACE ? hb.setTexture("reflectionSampler", Bb) : (hb.setTexture("reflectionSampler", Bb._lodTextureMid || Bb), hb.setTexture("reflectionSamplerLow", Bb._lodTextureLow || Bb), hb.setTexture("reflectionSamplerHigh", Bb._lodTextureHigh || Bb)), ub.USEIRRADIANCEMAP && hb.setTexture("irradianceSampler", Bb.irradianceTexture);
        const Gb = bb.iblCdfGenerator;
        Ob && Gb && hb.setTexture("icdfSampler", Gb.getIcdfTexture())
      }
    }

    function Kb(bb, ub, hb) {
      ub._needUVs = !0, ub[hb] = !0, bb.optimizeUVAllocation && bb.getTextureMatrix().isIdentityAs3x2() ? (ub[hb + "DIRECTUV"] = bb.coordinatesIndex + 1, ub["MAINUV" + (bb.coordinatesIndex + 1)] = !0) : ub[hb + "DIRECTUV"] = 0
    }

    function Wb(bb, ub, hb) {
      const Bb = bb.getTextureMatrix();
      ub.S_(hb + "Matrix", Bb)
    }

    function Cb(bb, ub, hb) {
      hb.BAKED_VERTEX_ANIMATION_TEXTURE && hb.INSTANCES && bb.push("bakedVertexAnimationSettingsInstanced")
    }

    function db(bb, ub, hb) {
      var Bb;
      if (ub && bb && (bb.computeBonesUsingShaders && ub._bonesComputationForcedToCPU && (bb.computeBonesUsingShaders = !1), bb.useBones && bb.computeBonesUsingShaders && bb.skeleton)) {
        const Ob = bb.skeleton;
        if (Ob.isUsingTextureForMatrices && ub.getUniformIndex("boneTextureInfo") > -1) {
          const hb = Ob.getTransformMatrixTexture(bb);
          ub.setTexture("boneSampler", hb), ub.setFloat2("boneTextureInfo", Ob._textureWidth, Ob._textureHeight)
        } else {
          const Gb = Ob.getTransformMatrices(bb);
          Gb && (ub.setMatrices("mBones", Gb), hb && bb.ZN().prePassRenderer && bb.ZN().prePassRenderer.getIndex(2) && (hb.previousBones[bb.uniqueId] || (hb.previousBones[bb.uniqueId] = Gb.slice()), ub.setMatrices("mPreviousBones", hb.previousBones[bb.uniqueId]), Bb = Gb, hb.previousBones[bb.uniqueId].set(Bb)))
        }
      }
    }

    function rb(bb, ub, hb, Bb, Ob) {
      let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      bb._bindLight(ub, hb, Bb, Ob, Gb)
    }
    const jb = 4,
      nb = new WeakMap;

    function Db(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Gb = Math.min(ub.lightSources.length, Ob);
      for (let Ub = 0; Ub < Gb; Ub++) {
        rb(ub.lightSources[Ub], Ub, bb, hb, "boolean" === typeof Bb ? Bb : Bb.SPECULARTERM, ub.receiveShadows)
      }
    }

    function xb(bb, ub, hb, Bb) {
      hb.NUM_BONE_INFLUENCERS > 0 && (Bb.addCPUSkinningFallback(0, ub), bb.push("matricesIndices"), bb.push("matricesWeights"), hb.NUM_BONE_INFLUENCERS > 4 && (bb.push("matricesIndicesExtra"), bb.push("matricesWeightsExtra")))
    }

    function zb(bb, ub) {
      (ub.INSTANCES || ub.THIN_INSTANCES) && Xb(bb, !!ub.PREPASS_VELOCITY), ub.INSTANCESCOLOR && bb.push("instanceColor")
    }

    function gb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ob = 0;
      for (let Gb = 0; Gb < hb && bb["LIGHT" + Gb]; Gb++) Gb > 0 && (Ob = Bb + Gb, ub.addFallback(Ob, "LIGHT" + Gb)), bb.SHADOWS || (bb["SHADOW" + Gb] && ub.addFallback(Bb, "SHADOW" + Gb), bb["SHADOWPCF" + Gb] && ub.addFallback(Bb, "SHADOWPCF" + Gb), bb["SHADOWPCSS" + Gb] && ub.addFallback(Bb, "SHADOWPCSS" + Gb), bb["SHADOWPOISSON" + Gb] && ub.addFallback(Bb, "SHADOWPOISSON" + Gb), bb["SHADOWESM" + Gb] && ub.addFallback(Bb, "SHADOWESM" + Gb), bb["SHADOWCLOSEESM" + Gb] && ub.addFallback(Bb, "SHADOWCLOSEESM" + Gb));
      return Ob
    }

    function ib(bb, ub, hb, Bb, Ob, Gb, Ub) {
      let Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Sb = arguments.length > 9 ? arguments[9] : void 0,
        ab = arguments.length > 10 ? arguments[10] : void 0;
      if (Ub._areMiscDirty) {
        Ub.LOGARITHMICDEPTH = hb, Ub.POINTSIZE = Bb, Ub.FOG = Ob && function(bb, ub) {
          return ub.fogEnabled && bb.applyFog && 0 !== ub.fogMode
        }(bb, ub), Ub.NONUNIFORMSCALING = bb.nonUniformScaling, Ub.ALPHATEST = Gb, Ub.DECAL_AFTER_DETAIL = Lb, Ub.USE_VERTEX_PULLING = Yb, Ub.RIGHT_HANDED = ub.useRightHandedSystem;
        const Hb = Yb ? Sb?.geometry?.getIndexBuffer() : null,
          wb = !!Sb && Sb.isUnIndexed;
        Ub.VERTEX_PULLING_USE_INDEX_BUFFER = !!Hb && !wb, Ub.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Hb || wb) && Hb.is32Bits, Ub.VERTEXOUTPUT_INVARIANT = !!ab
      }
    }

    function vb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!bb.lightsEnabled || Bb) return !0;
      const Ob = ub.lightSources,
        Gb = Math.min(Ob.length, hb);
      for (let Ub = 0; Ub < Gb; Ub++)
        if (!Ob[Ub].areLightTexturesReady()) return !1;
      return !0
    }

    function tb(bb, ub, hb, Ob) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!hb._areLightsDirty) return hb._needNormals;
      const Lb = Gb;
      Gb = function(bb, ub) {
        const hb = bb.UX().getCaps().maxUniformBuffersPerShaderStage;
        if (null == hb) return ub;
        const Bb = Math.max(hb - jb, 1);
        return Math.min(ub, Bb)
      }(bb, Gb);
      let Yb = 0;
      const Sb = {
        needNormals: hb._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (bb.lightsEnabled && !Ub) {
        ub.lightSources.length > Gb && Gb < Lb && function(bb, ub, hb, Ob) {
          let Gb = nb.get(bb);
          Gb || (Gb = new Set, nb.set(bb, Gb)), Gb.has(Ob) || (Gb.add(Ob), Bb.b.Warn(`maxSimultaneousLights is ${ub} but this engine supports at most ${hb} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Ob} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Ob+jb} uniform buffers, over the device limit of ${bb.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${hb}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${hb} or less to silence this warning.`))
        }(bb.UX(), Lb, Gb, Math.min(ub.lightSources.length, Lb));
        for (const Bb of ub.lightSources)
          if (eb(bb, ub, Bb, Yb, hb, Ob, Sb), Yb++, Yb === Gb) break
      }
      hb.SPECULARTERM = Sb.specularEnabled, hb.SHADOWS = Sb.shadowEnabled;
      const ab = Math.max(Gb, hb.MAXLIGHTCOUNT || 0);
      for (let Bb = Yb; Bb < ab; Bb++) void 0 !== hb["LIGHT" + Bb] && (hb["LIGHT" + Bb] = !1, hb["HEMILIGHT" + Bb] = !1, hb["POINTLIGHT" + Bb] = !1, hb["DIRLIGHT" + Bb] = !1, hb["SPOTLIGHT" + Bb] = !1, hb["AREALIGHT" + Bb] = !1, hb["CLUSTLIGHT" + Bb] = !1, hb["SHADOW" + Bb] = !1, hb["SHADOWCSM" + Bb] = !1, hb["SHADOWCSMDEBUG" + Bb] = !1, hb["SHADOWCSMNUM_CASCADES" + Bb] = !1, hb["SHADOWCSMUSESHADOWMAXZ" + Bb] = !1, hb["SHADOWCSMNOBLEND" + Bb] = !1, hb["SHADOWCSM_RIGHTHANDED" + Bb] = !1, hb["SHADOWPCF" + Bb] = !1, hb["SHADOWPCSS" + Bb] = !1, hb["SHADOWPOISSON" + Bb] = !1, hb["SHADOWESM" + Bb] = !1, hb["SHADOWCLOSEESM" + Bb] = !1, hb["SHADOWCUBE" + Bb] = !1, hb["SHADOWLOWQUALITY" + Bb] = !1, hb["SHADOWMEDIUMQUALITY" + Bb] = !1);
      hb.LIGHTCOUNT = Yb, hb.MAXLIGHTCOUNT = Gb;
      const Hb = bb.UX().getCaps();
      return void 0 === hb.SHADOWFLOAT && (Sb.needRebuild = !0), hb.SHADOWFLOAT = Sb.shadowEnabled && (Hb.textureFloatRender && Hb.textureFloatLinearFiltering || Hb.textureHalfFloatRender && Hb.textureHalfFloatLinearFiltering), hb.LIGHTMAPEXCLUDED = Sb.lightmapMode, Sb.needRebuild && hb.rebuild(), Sb.needNormals
    }

    function Jb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (ub && Lb.e.ReflectionTextureEnabled) {
        if (!ub.isReadyOrNotBlocking()) return !1;
        hb._needNormals = !0, hb.REFLECTION = !0, hb.GAMMAREFLECTION = ub.gammaSpace, hb.RGBDREFLECTION = ub.isRGBD, hb.LODINREFLECTIONALPHA = ub.lodLevelInAlpha, hb.LINEARSPECULARREFLECTION = ub.linearSpecularLOD, hb.USEIRRADIANCEMAP = !1, hb.LODBASEDMICROSFURACE = bb.UX().getCaps().textureLOD;
        const Ub = bb.UX();
        switch (Bb && Ob > 0 ? (hb.NUM_SAMPLES = "" + Ob, Ub._features.needTypeSuffixInShaderConstants && (hb.NUM_SAMPLES = hb.NUM_SAMPLES + "u"), hb.REALTIME_FILTERING = !0, bb.iblCdfGenerator && (hb.IBL_CDF_FILTERING = !0)) : hb.REALTIME_FILTERING = !1, hb.INVERTCUBICMAP = 6 === ub.coordinatesMode, hb.REFLECTIONMAP_3D = ub.isCube, hb.REFLECTIONMAP_OPPOSITEZ = hb.REFLECTIONMAP_3D && bb.useRightHandedSystem ? !ub.invertZ : ub.invertZ, hb.REFLECTIONMAP_CUBIC = !1, hb.REFLECTIONMAP_EXPLICIT = !1, hb.REFLECTIONMAP_PLANAR = !1, hb.REFLECTIONMAP_PROJECTION = !1, hb.REFLECTIONMAP_SKYBOX = !1, hb.REFLECTIONMAP_SPHERICAL = !1, hb.REFLECTIONMAP_EQUIRECTANGULAR = !1, hb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, hb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ub.coordinatesMode) {
          case 0:
            hb.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            hb.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            hb.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            hb.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            hb.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            hb.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            hb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            hb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            hb.REFLECTIONMAP_CUBIC = !0, hb.USE_LOCAL_REFLECTIONMAP_CUBIC = !!ub.boundingBoxSize
        }
        5 !== ub.coordinatesMode && (ub.irradianceTexture ? (hb.USEIRRADIANCEMAP = !0, hb.USESPHERICALFROMREFLECTIONMAP = !1, hb.USESPHERICALINVERTEX = !1, ub.irradianceTexture._dominantDirection ? hb.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : hb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : ub.isCube && (hb.USESPHERICALFROMREFLECTIONMAP = !0, hb.USEIRRADIANCEMAP = !1, hb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, hb.USESPHERICALINVERTEX = Gb))
      } else hb.REFLECTION = !1, hb.REFLECTIONMAP_3D = !1, hb.REFLECTIONMAP_SPHERICAL = !1, hb.REFLECTIONMAP_PLANAR = !1, hb.REFLECTIONMAP_CUBIC = !1, hb.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, hb.REFLECTIONMAP_PROJECTION = !1, hb.REFLECTIONMAP_SKYBOX = !1, hb.REFLECTIONMAP_EXPLICIT = !1, hb.REFLECTIONMAP_EQUIRECTANGULAR = !1, hb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, hb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, hb.INVERTCUBICMAP = !1, hb.USESPHERICALFROMREFLECTIONMAP = !1, hb.USEIRRADIANCEMAP = !1, hb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, hb.USESPHERICALINVERTEX = !1, hb.REFLECTIONMAP_OPPOSITEZ = !1, hb.LODINREFLECTIONALPHA = !1, hb.GAMMAREFLECTION = !1, hb.RGBDREFLECTION = !1, hb.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function eb(bb, ub, hb, Bb, Ob, Ub, Lb) {
      switch (Lb.needNormals = !0, void 0 === Ob["LIGHT" + Bb] && (Lb.needRebuild = !0), Ob["LIGHT" + Bb] = !0, Ob["SPOTLIGHT" + Bb] = !1, Ob["HEMILIGHT" + Bb] = !1, Ob["POINTLIGHT" + Bb] = !1, Ob["DIRLIGHT" + Bb] = !1, Ob["AREALIGHT" + Bb] = !1, Ob["CLUSTLIGHT" + Bb] = !1, hb.prepareLightSpecificDefines(Ob, Bb), Ob["LIGHT_FALLOFF_PHYSICAL" + Bb] = !1, Ob["LIGHT_FALLOFF_GLTF" + Bb] = !1, Ob["LIGHT_FALLOFF_STANDARD" + Bb] = !1, hb.falloffType) {
        case Gb.d.FALLOFF_GLTF:
          Ob["LIGHT_FALLOFF_GLTF" + Bb] = !0;
          break;
        case Gb.d.FALLOFF_PHYSICAL:
          Ob["LIGHT_FALLOFF_PHYSICAL" + Bb] = !0;
          break;
        case Gb.d.FALLOFF_STANDARD:
          Ob["LIGHT_FALLOFF_STANDARD" + Bb] = !0
      }
      if (Ub && !hb.specular.equalsFloats(0, 0, 0) && (Lb.specularEnabled = !0), Ob["SHADOW" + Bb] = !1, Ob["SHADOWCSM" + Bb] = !1, Ob["SHADOWCSMDEBUG" + Bb] = !1, Ob["SHADOWCSMNUM_CASCADES" + Bb] = !1, Ob["SHADOWCSMUSESHADOWMAXZ" + Bb] = !1, Ob["SHADOWCSMNOBLEND" + Bb] = !1, Ob["SHADOWCSM_RIGHTHANDED" + Bb] = !1, Ob["SHADOWPCF" + Bb] = !1, Ob["SHADOWPCSS" + Bb] = !1, Ob["SHADOWPOISSON" + Bb] = !1, Ob["SHADOWESM" + Bb] = !1, Ob["SHADOWCLOSEESM" + Bb] = !1, Ob["SHADOWCUBE" + Bb] = !1, Ob["SHADOWLOWQUALITY" + Bb] = !1, Ob["SHADOWMEDIUMQUALITY" + Bb] = !1, ub && ub.receiveShadows && bb.shadowsEnabled && hb.shadowEnabled) {
        const ub = hb.getShadowGenerator(bb.activeCamera) ?? hb.getShadowGenerator();
        if (ub) {
          const bb = ub.getShadowMap();
          bb && bb.renderList && bb.renderList.length > 0 && (Lb.shadowEnabled = !0, ub.prepareDefines(Ob, Bb))
        }
      }
      hb.lightmapMode != Gb.d.LIGHTMAP_DEFAULT ? (Lb.lightmapMode = !0, Ob["LIGHTMAPEXCLUDED" + Bb] = !0, Ob["LIGHTMAPNOSPECULAR" + Bb] = hb.lightmapMode == Gb.d.LIGHTMAP_SHADOWSONLY) : (Ob["LIGHTMAPEXCLUDED" + Bb] = !1, Ob["LIGHTMAPNOSPECULAR" + Bb] = !1)
    }

    function Nb(bb, ub, hb, Bb, Ob) {
      let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Yb = function(bb, ub) {
          let hb = !1;
          if (bb.activeCamera) {
            const Bb = ub.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Ob = ub.CAMERA_PERSPECTIVE ? 1 : 0,
              Gb = 1 === bb.activeCamera.mode ? 1 : 0,
              Ub = 0 === bb.activeCamera.mode ? 1 : 0;
            (Bb ^ Gb || Ob ^ Ub) && (ub.CAMERA_ORTHOGRAPHIC = 1 === Gb, ub.CAMERA_PERSPECTIVE = 1 === Ub, hb = !0)
          }
          return hb
        }(bb, Bb);
      !1 !== Gb && (Yb = (0, Ub.i)(hb, bb, Bb)), Bb.DEPTHPREPASS !== !ub.getColorWrite() && (Bb.DEPTHPREPASS = !Bb.DEPTHPREPASS, Yb = !0), Bb.INSTANCES !== Ob && (Bb.INSTANCES = Ob, Yb = !0), Bb.THIN_INSTANCES !== Lb && (Bb.THIN_INSTANCES = Lb, Yb = !0), Yb && Bb.markAsUnprocessed()
    }
    const sb = 40,
      Mb = 64,
      mb = new WeakMap,
      Ib = new WeakSet;

    function Pb(bb, ub, hb, Ob) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Lb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!ub._areAttributesDirty && ub._needNormals === ub._normals && ub._needUVs === ub._uvs) return !1;
      ub._normals = ub._needNormals, ub._uvs = ub._needUVs, ub.NORMAL = ub._needNormals && bb.isVerticesDataPresent("normal"), ub._needNormals && bb.isVerticesDataPresent("tangent") && (ub.TANGENT = !0);
      for (let Bb = 1; Bb <= 6; ++Bb) ub["UV" + Bb] = !!ub._needUVs && bb.isVerticesDataPresent(`uv${1===Bb?"":Bb}`);
      if (hb) {
        const hb = bb.useVertexColors && bb.isVerticesDataPresent("color");
        ub.VERTEXCOLOR = hb, ub.VERTEXALPHA = bb.hasVertexAlpha && hb && Ub
      }
      return bb.isVerticesDataPresent("instanceColor") && (bb.UOb || bb.hasThinInstances) && (ub.INSTANCESCOLOR = !0), Ob && function(bb, ub) {
        if (bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          ub.NUM_BONE_INFLUENCERS = bb.numBoneInfluencers;
          const hb = void 0 !== ub.BONETEXTURE;
          if (bb.skeleton.isUsingTextureForMatrices && hb) ub.BONETEXTURE = !0;
          else {
            ub.BonesPerMesh = bb.skeleton.bones.length + 1, ub.BONETEXTURE = !hb && void 0;
            const Ob = bb.ZN(),
              Gb = Ob.prePassRenderer;
            if (Gb && Gb.enabled) {
              const hb = -1 === Gb.excludedSkinnedMesh.indexOf(bb);
              ub.BONES_VELOCITY_ENABLED = hb
            }
            const Ub = !0 === ub.MULTIVIEW,
              Lb = 2 * ub.BonesPerMesh + (Ub ? 1 : 0);
            if (mb.get(bb.skeleton) !== Lb) {
              mb.set(bb.skeleton, Lb);
              const hb = Ob.UX().getCaps().maxVertexUniformVectors;
              if (hb && !Ib.has(bb.skeleton)) {
                const Ob = 4 * ub.BonesPerMesh,
                  Gb = Ub ? Mb : sb,
                  Lb = Math.max(hb - Gb, 0);
                (Ob > Lb || Ub && 3 * Ob > hb) && (Ib.add(bb.skeleton), Bb.b.Warn(`Skeleton "${bb.skeleton.name}": ${bb.skeleton.bones.length} bones stored as vertex uniforms use ${Ob} of ~${Lb} usable uniform vectors${Ub?" (multiview)":""} on a device reporting ${hb}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else ub.NUM_BONE_INFLUENCERS = 0, ub.BonesPerMesh = 0, void 0 !== ub.BONETEXTURE && (ub.BONETEXTURE = !1)
      }(bb, ub), Gb && function(bb, ub) {
        const hb = bb.morphTargetManager;
        hb ? (ub.MORPHTARGETS_UV = hb.supportsUVs && ub.UV1, ub.MORPHTARGETS_UV2 = hb.supportsUV2s && ub.UV2, ub.MORPHTARGETS_TANGENT = hb.supportsTangents && ub.TANGENT, ub.MORPHTARGETS_NORMAL = hb.supportsNormals && ub.NORMAL, ub.MORPHTARGETS_POSITION = hb.supportsPositions, ub.MORPHTARGETS_COLOR = hb.supportsColors, ub.MORPHTARGETTEXTURE_HASUVS = hb.hasUVs, ub.MORPHTARGETTEXTURE_HASUV2S = hb.hasUV2s, ub.MORPHTARGETTEXTURE_HASTANGENTS = hb.hasTangents, ub.MORPHTARGETTEXTURE_HASNORMALS = hb.hasNormals, ub.MORPHTARGETTEXTURE_HASPOSITIONS = hb.hasPositions, ub.MORPHTARGETTEXTURE_HASCOLORS = hb.hasColors, ub.NUM_MORPH_INFLUENCERS = hb.numMaxInfluencers || hb.numInfluencers, ub.MORPHTARGETS = ub.NUM_MORPH_INFLUENCERS > 0, ub.MORPHTARGETS_TEXTURE = hb.isUsingTextureForTargets) : (ub.MORPHTARGETS_UV = !1, ub.MORPHTARGETS_UV2 = !1, ub.MORPHTARGETS_TANGENT = !1, ub.MORPHTARGETS_NORMAL = !1, ub.MORPHTARGETS_POSITION = !1, ub.MORPHTARGETS_COLOR = !1, ub.MORPHTARGETTEXTURE_HASUVS = !1, ub.MORPHTARGETTEXTURE_HASUV2S = !1, ub.MORPHTARGETTEXTURE_HASTANGENTS = !1, ub.MORPHTARGETTEXTURE_HASNORMALS = !1, ub.MORPHTARGETTEXTURE_HASPOSITIONS = !1, ub.MORPHTARGETTEXTURE_HAS_COLORS = !1, ub.MORPHTARGETS = !1, ub.NUM_MORPH_INFLUENCERS = 0)
      }(bb, ub), Lb && function(bb, ub) {
        const hb = bb.bakedVertexAnimationManager;
        ub.BAKED_VERTEX_ANIMATION_TEXTURE = !(!hb || !hb.isEnabled)
      }(bb, ub), !0
    }

    function qb(bb, ub) {
      if (bb.activeCamera) {
        const hb = ub.MULTIVIEW;
        ub.MULTIVIEW = null !== bb.activeCamera.outputRenderTarget && bb.activeCamera.outputRenderTarget.getViewCount() > 1, ub.MULTIVIEW != hb && ub.markAsUnprocessed()
      }
    }

    function Eb(bb, ub, hb) {
      const Bb = ub.ORDER_INDEPENDENT_TRANSPARENCY,
        Ob = ub.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      ub.ORDER_INDEPENDENT_TRANSPARENCY = bb.useOrderIndependentTransparency && hb, ub.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !bb.UX().getCaps().textureFloatLinearFiltering, Bb === ub.ORDER_INDEPENDENT_TRANSPARENCY && Ob === ub.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ub.markAsUnprocessed()
    }

    function yb(bb, ub, hb) {
      const Bb = ub.PREPASS;
      if (!ub._arePrePassDirty) return;
      const Ob = [{
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
      if (bb.prePassRenderer && bb.prePassRenderer.enabled && hb) {
        ub.PREPASS = !0, ub.SCENE_MRT_COUNT = bb.prePassRenderer.mrtCount, ub.PREPASS_NORMAL_WORLDSPACE = bb.prePassRenderer.generateNormalsInWorldSpace, ub.PREPASS_COLOR = !0, ub.PREPASS_COLOR_INDEX = 0;
        for (let hb = 0; hb < Ob.length; hb++) {
          const Bb = bb.prePassRenderer.getIndex(Ob[hb].type); - 1 !== Bb ? (ub[Ob[hb].define] = !0, ub[Ob[hb].index] = Bb) : ub[Ob[hb].define] = !1
        }
      } else {
        ub.PREPASS = !1;
        for (let bb = 0; bb < Ob.length; bb++) ub[Ob[bb].define] = !1
      }
      ub.PREPASS != Bb && (ub.markAsUnprocessed(), ub.markAsImageProcessingDirty())
    }

    function Vb(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Sb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Ob && Ob.push("Light" + bb), Gb || (ub.push("vLightData" + bb, "vLightDiffuse" + bb, "vLightSpecular" + bb, "vLightDirection" + bb, "vLightWidth" + bb, "vLightHeight" + bb, "vLightFalloff" + bb, "vLightGround" + bb, "vSliceData" + bb, "vSliceRanges" + bb, "lightMatrix" + bb, "shadowsInfo" + bb, "depthValues" + bb), hb.push("shadowTexture" + bb), hb.push("depthTexture" + bb), ub.push("viewFrustumZ" + bb, "cascadeBlendFactor" + bb, "lightSizeUVCorrection" + bb, "depthCorrection" + bb, "penumbraDarkness" + bb, "frustumLengths" + bb), Bb && (hb.push("projectionLightTexture" + bb), ub.push("textureProjectionMatrix" + bb)), Ub && hb.push("iesLightTexture" + bb), Yb && hb.push("rectAreaLightEmissionTexture" + bb), Lb && (hb.push("lightDataTexture" + bb), Sb || hb.push("tileMaskTexture" + bb)))
    }

    function Fb(bb, ub, hb) {
      const Bb = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      hb && Bb.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), bb.push(...Bb);
      ub.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function fb(bb, ub, hb) {
      let Bb, Ob, Gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Ub = null;
      if (bb.uniformsNames) {
        const Lb = bb;
        Bb = Lb.uniformsNames, Ob = Lb.uniformBuffersNames, ub = Lb.samplers, hb = Lb.defines, Gb = Lb.maxSimultaneousLights || 0, Ub = Lb.shaderLanguage ?? null
      } else Bb = bb, ub || (ub = []);
      for (let Lb = 0; Lb < Gb && hb["LIGHT" + Lb]; Lb++) Vb(Lb, Bb, ub, hb["PROJECTEDLIGHTTEXTURE" + Lb], Ob, !1, hb["IESLIGHTTEXTURE" + Lb], hb["CLUSTLIGHT" + Lb], hb["RECTAREALIGHTEMISSIONTEXTURE" + Lb], 1 === Ub);
      hb.NUM_MORPH_INFLUENCERS && (Bb.push("morphTargetInfluences"), Bb.push("morphTargetCount")), hb.BAKED_VERTEX_ANIMATION_TEXTURE && (Bb.push("bakedVertexAnimationSettings"), Bb.push("bakedVertexAnimationTextureSizeInverted"), Bb.push("bakedVertexAnimationTime"), ub.push("bakedVertexAnimationTexture"))
    }

    function kb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      bb.addUniform("vReflectionInfos", 2), bb.addUniform("reflectionMatrix", 16), ub && bb.addUniform("vReflectionMicrosurfaceInfos", 3), hb && (bb.addUniform("vReflectionPosition", 3), bb.addUniform("vReflectionSize", 3)), Bb && (bb.addUniform("vReflectionFilteringInfo", 2), bb.addUniform("vReflectionDominantDirection", 3)), Gb && bb.addUniform("vReflectionColor", 3), Ob && (bb.addUniform("vSphericalL00", 3), bb.addUniform("vSphericalL1_1", 3), bb.addUniform("vSphericalL10", 3), bb.addUniform("vSphericalL11", 3), bb.addUniform("vSphericalL2_2", 3), bb.addUniform("vSphericalL2_1", 3), bb.addUniform("vSphericalL20", 3), bb.addUniform("vSphericalL21", 3), bb.addUniform("vSphericalL22", 3), bb.addUniform("vSphericalX", 3), bb.addUniform("vSphericalY", 3), bb.addUniform("vSphericalZ", 3), bb.addUniform("vSphericalXX_ZZ", 3), bb.addUniform("vSphericalYY_ZZ", 3), bb.addUniform("vSphericalZZ", 3), bb.addUniform("vSphericalXY", 3), bb.addUniform("vSphericalYZ", 3), bb.addUniform("vSphericalZX", 3))
    }
  },
  39795: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(36727),
      Ob = hb(39728);
    class Gb extends Ob.e {
      constructor(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(bb, ub, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Bb.d, this._storeEffectOnSubMeshes = hb
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(bb, ub) {
        return !!bb && (!this._storeEffectOnSubMeshes || (!bb.FW || 0 === bb.FW.length || this.isReadyForSubMesh(bb, bb.FW[0], ub)))
      }
      _isReadyForSubMesh(bb) {
        const ub = bb.materialDefines;
        return !(this.checkReadyOnEveryCall || !bb.effect || !ub || ub._renderId !== this.ZN().getRenderId())
      }
      bindOnlyWorldMatrix(bb) {
        this._activeEffect.setMatrix("world", bb)
      }
      bindOnlyNormalMatrix(bb) {
        this._activeEffect.setMatrix("normalMatrix", bb)
      }
      bind(bb, ub) {
        ub && this.bindForSubMesh(bb, ub, ub.FW[0])
      }
      _afterBind(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(bb, ub, hb), this.ZN()._cachedEffect = ub, hb ? hb._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return hb._drawWrapper._forceRebindOnNextCall || bb.isCachedMaterialInvalid(this, ub, Bb)
      }
      dispose(bb, ub, hb) {
        this._activeEffect = void 0, super.dispose(bb, ub, hb)
      }
    }
  },
  39809: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      h: () => Ob
    });
    const Bb = new WeakMap;

    function Ob(bb) {
      const ub = bb.getVertexBuffers();
      if (!ub) return null;
      let hb = Bb.get(bb);
      if (hb) {
        let bb = !1;
        for (const Bb in ub)
          if (!hb.has(Bb)) {
            bb = !0;
            break
          } if (!bb) return hb
      } else hb = new Map, Bb.set(bb, hb);
      for (const Bb in ub) {
        const bb = ub[Bb];
        if (bb) {
          const ub = bb.byteOffset,
            Ob = bb.byteStride,
            Gb = bb.type,
            Ub = bb.normalized;
          hb.set(Bb, {
            offset: ub,
            stride: Ob,
            type: Gb,
            normalized: Ub
          })
        }
      }
      return hb
    }

    function Gb(bb, ub) {
      ub.forEach(((ub, hb) => {
        const Bb = `vp_${hb}_info`;
        bb.setFloat4(Bb, ub.offset, ub.stride, ub.type, ub.normalized ? 1 : 0)
      }))
    }
  },
  39763: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      h: () => Yb
    });
    var Bb = hb(39463),
      Ob = hb(36727),
      Gb = hb(39467);
    let Ub = (() => {
      var bb;
      let ub, hb, Ob = [];
      return bb = class {
        static extractMinAndMaxIndexed(bb, ub, hb, Bb, Ob, Gb) {
          for (let Ub = hb; Ub < hb + Bb; Ub++) {
            const hb = 3 * ub[Ub],
              Bb = bb[hb],
              Lb = bb[hb + 1],
              Yb = bb[hb + 2];
            Ob.minimizeInPlaceFromFloats(Bb, Lb, Yb), Gb.maximizeInPlaceFromFloats(Bb, Lb, Yb)
          }
        }
        static extractMinAndMax(bb, ub, hb, Bb, Ob, Gb) {
          for (let Ub = ub, Lb = ub * Bb; Ub < ub + hb; Ub++, Lb += Bb) {
            const ub = bb[Lb],
              hb = bb[Lb + 1],
              Bb = bb[Lb + 2];
            Ob.minimizeInPlaceFromFloats(ub, hb, Bb), Gb.maximizeInPlaceFromFloats(ub, hb, Bb)
          }
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [Gb.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], hb = [Gb.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Bb.h)(bb, null, ub, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMaxIndexed" in bb,
            get: bb => bb.extractMinAndMaxIndexed
          },
          metadata: Ub
        }, null, Ob), (0, Bb.h)(bb, null, hb, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMax" in bb,
            get: bb => bb.extractMinAndMax
          },
          metadata: Ub
        }, null, Ob), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        }), (0, Bb.k)(bb, Ob)
      })(), bb
    })();

    function Lb(bb, ub, hb, Bb) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Lb = new Ob.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Yb = new Ob.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Ub.extractMinAndMaxIndexed(bb, ub, hb, Bb, Lb, Yb), Gb && (Lb.x -= Lb.x * Gb.x + Gb.y, Lb.y -= Lb.y * Gb.x + Gb.y, Lb.z -= Lb.z * Gb.x + Gb.y, Yb.x += Yb.x * Gb.x + Gb.y, Yb.y += Yb.y * Gb.x + Gb.y, Yb.z += Yb.z * Gb.x + Gb.y), {
        minimum: Lb,
        maximum: Yb
      }
    }

    function Yb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Gb = arguments.length > 4 ? arguments[4] : void 0;
      const Lb = new Ob.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Yb = new Ob.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Gb || (Gb = 3), Ub.extractMinAndMax(bb, ub, hb, Gb, Lb, Yb), Bb && (Lb.x -= Lb.x * Bb.x + Bb.y, Lb.y -= Lb.y * Bb.x + Bb.y, Lb.z -= Lb.z * Bb.x + Bb.y, Yb.x += Yb.x * Bb.x + Bb.y, Yb.y += Yb.y * Bb.x + Bb.y, Yb.z += Yb.z * Bb.x + Bb.y), {
        minimum: Lb,
        maximum: Yb
      }
    }
  },
  39736: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab
    });
    var Bb, Ob = hb(39609),
      Gb = hb(39744),
      Ub = hb(39752),
      Lb = hb(39763),
      Yb = hb(39765),
      Sb = hb(39333);
    class ab {
      get materialDefines() {
        const bb = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof bb ? null : bb
      }
      set materialDefines(bb) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = bb
      }
      _getDrawWrapper(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb = bb ?? this._engine.currentRenderPassId;
        let hb = this._drawWrappers[bb];
        return !hb && ub && (this._drawWrappers[bb] = hb = new Yb.d(this._mesh.ZN().UX())), hb
      }
      _removeDrawWrapper(bb) {
        let ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[bb]?.dispose(ub), this._drawWrappers[bb] = void 0
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
      _setMainDrawWrapperOverride(bb) {
        this._mainDrawWrapperOverride = bb
      }
      setEffect(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ob = this._drawWrapper;
        Ob.setEffect(bb, ub, Bb), void 0 !== hb && (Ob.materialContext = hb), bb || (Ob.defines = null, Ob.materialContext = void 0)
      }
      resetDrawCache(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== bb) return void this._removeDrawWrapper(bb, !0, ub);
          for (const bb of this._drawWrappers) bb?.dispose(ub)
        }
        this._drawWrappers = []
      }
      static AddToMesh(bb, ub, hb, Bb, Ob, Gb, Ub) {
        return new ab(bb, ub, hb, Bb, Ob, Gb, Ub, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(bb, ub, hb, Bb, Ob, Gb, Ub) {
        let Lb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Yb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = bb, this.verticesStart = ub, this.verticesCount = hb, this.indexStart = Bb, this.indexCount = Ob, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Gb, this._renderingMesh = Ub || Gb, Yb && Gb.FW.push(this), this._engine = this._mesh.ZN().UX(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Gb.FW.length - 1, Lb && (this.refreshBoundingInfo(), Gb.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      XM() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.XM() : this._boundingInfo
      }
      setBoundingInfo(bb) {
        return this._boundingInfo = bb, this
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
        const bb = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return bb || this._renderingMesh
      }
      HX() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ub = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!ub) return bb && this._mesh.ZN()._hasDefaultMaterial ? this._mesh.ZN().defaultMaterial : null;
        if (this._isMultiMaterial(ub)) {
          const bb = ub.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== bb && (this._currentMaterial = bb, this.resetDrawCache()), bb
        }
        return ub
      }
      _isMultiMaterial(bb) {
        return void 0 !== bb.getSubMaterial
      }
      refreshBoundingInfo() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (bb || (bb = this._renderingMesh.getVerticesData(Ob.i.PositionKind)), !bb) return this._boundingInfo = this._mesh.XM(), this;
        const ub = this._renderingMesh.XBb();
        let hb;
        if (0 === this.indexStart && this.indexCount === ub.length) {
          const bb = this._renderingMesh.XM();
          hb = {
            minimum: bb.minimum.clone(),
            maximum: bb.maximum.clone()
          }
        } else hb = (0, Lb.e)(bb, ub, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(hb.minimum, hb.maximum) : this._boundingInfo = new Ub.e(hb.minimum, hb.maximum), this
      }
      _checkCollision(bb) {
        return this.XM()._checkCollision(bb)
      }
      updateBoundingInfo(bb) {
        let ub = this.XM();
        return ub || (this.refreshBoundingInfo(), ub = this.XM()), ub && ub.update(bb), this
      }
      isInFrustum(bb) {
        const ub = this.XM();
        return !!ub && ub.isInFrustum(bb, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(bb) {
        const ub = this.XM();
        return !!ub && ub.isCompletelyInFrustum(bb)
      }
      render(bb) {
        return this._renderingMesh.render(this, bb, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(bb, ub) {
        if (!this._linesIndexBuffer) {
          const hb = 6 * Math.floor(this.indexCount / 3),
            Bb = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(hb) : new Uint16Array(hb);
          let Ob = 0;
          if (0 === bb.length)
            for (let bb = this.indexStart; bb < this.indexStart + this.indexCount; bb += 3) Bb[Ob++] = bb, Bb[Ob++] = bb + 1, Bb[Ob++] = bb + 1, Bb[Ob++] = bb + 2, Bb[Ob++] = bb + 2, Bb[Ob++] = bb;
          else
            for (let ub = this.indexStart; ub < this.indexStart + this.indexCount; ub += 3) Bb[Ob++] = bb[ub], Bb[Ob++] = bb[ub + 1], Bb[Ob++] = bb[ub + 1], Bb[Ob++] = bb[ub + 2], Bb[Ob++] = bb[ub + 2], Bb[Ob++] = bb[ub];
          this._linesIndexBuffer = ub.createIndexBuffer(Bb), this._linesIndexCount = Bb.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(bb) {
        const ub = this.XM();
        return !!ub && bb.intersectsBox(ub.boundingBox)
      }
      intersects(bb, ub, hb, Bb, Ob) {
        const Gb = this.HX();
        if (!Gb) return null;
        let Ub = 3,
          Lb = !1;
        switch (Gb.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Ub = 1, Lb = !0
        }
        return 4 === Gb.fillMode ? hb.length ? this._intersectLines(bb, ub, hb, this._mesh.intersectionThreshold, Bb) : this._intersectUnIndexedLines(bb, ub, hb, this._mesh.intersectionThreshold, Bb) : !hb.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(bb, ub, hb, Bb, Ob) : this._intersectTriangles(bb, ub, hb, Ub, Lb, Bb, Ob)
      }
      _intersectLines(bb, ub, hb, Bb, Ob) {
        let Ub = null;
        for (let Lb = this.indexStart; Lb < this.indexStart + this.indexCount; Lb += 2) {
          const Yb = ub[hb[Lb]],
            Sb = ub[hb[Lb + 1]],
            ab = bb.intersectionSegment(Yb, Sb, Bb);
          if (!(ab < 0) && ((Ob || !Ub || ab < Ub.distance) && (Ub = new Gb.d(null, null, ab), Ub.faceId = Lb / 2, Ob))) break
        }
        return Ub
      }
      _intersectUnIndexedLines(bb, ub, hb, Bb, Ob) {
        let Ub = null;
        for (let Lb = this.verticesStart; Lb < this.verticesStart + this.verticesCount; Lb += 2) {
          const hb = ub[Lb],
            Yb = ub[Lb + 1],
            Sb = bb.intersectionSegment(hb, Yb, Bb);
          if (!(Sb < 0) && ((Ob || !Ub || Sb < Ub.distance) && (Ub = new Gb.d(null, null, Sb), Ub.faceId = Lb / 2, Ob))) break
        }
        return Ub
      }
      _intersectTriangles(bb, ub, hb, Bb, Ob, Gb, Ub) {
        let Lb = null,
          Yb = -1;
        for (let Sb = this.indexStart; Sb < this.indexStart + this.indexCount - (3 - Bb); Sb += Bb) {
          Yb++;
          const Bb = hb[Sb],
            ab = hb[Sb + 1],
            Hb = hb[Sb + 2];
          if (Ob && 4294967295 === Hb) {
            Sb += 2;
            continue
          }
          const wb = ub[Bb],
            Zb = ub[ab],
            Xb = ub[Hb];
          if (!wb || !Zb || !Xb) continue;
          if (Ub && !Ub(wb, Zb, Xb, bb, Bb, ab, Hb)) continue;
          const pb = bb.intersectsTriangle(wb, Zb, Xb);
          if (pb) {
            if (pb.distance < 0) continue;
            if ((Gb || !Lb || pb.distance < Lb.distance) && (Lb = pb, Lb.faceId = Yb, Gb)) break
          }
        }
        return Lb
      }
      _intersectUnIndexedTriangles(bb, ub, hb, Bb, Ob) {
        let Gb = null;
        for (let Ub = this.verticesStart; Ub < this.verticesStart + this.verticesCount; Ub += 3) {
          const hb = ub[Ub],
            Lb = ub[Ub + 1],
            Yb = ub[Ub + 2];
          if (Ob && !Ob(hb, Lb, Yb, bb, -1, -1, -1)) continue;
          const Sb = bb.intersectsTriangle(hb, Lb, Yb);
          if (Sb) {
            if (Sb.distance < 0) continue;
            if ((Bb || !Gb || Sb.distance < Gb.distance) && (Gb = Sb, Gb.faceId = Ub / 3, Bb)) break
          }
        }
        return Gb
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(bb, ub) {
        const hb = new ab(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, bb, ub, !1);
        if (!this.IsGlobal) {
          const bb = this.XM();
          if (!bb) return hb;
          hb._boundingInfo = new Ub.e(bb.minimum, bb.maximum)
        }
        return hb
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.ZN().UX()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const ub = this._mesh.FW.indexOf(this);
        this._mesh.FW.splice(ub, 1), this.resetDrawCache(void 0, bb)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(bb, ub, hb, Bb, Ob) {
        let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = Number.MAX_VALUE,
          Lb = -Number.MAX_VALUE;
        const Yb = (Ob || Bb).XBb();
        for (let Sb = ub; Sb < ub + hb; Sb++) {
          const bb = Yb[Sb];
          bb < Ub && (Ub = bb), bb > Lb && (Lb = bb)
        }
        return new ab(bb, Ub, Lb - Ub + 1, ub, hb, Bb, Ob, Gb)
      }
    }(Bb = ab.prototype).projectToRef ?? (Bb.projectToRef = (0, Sb.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);