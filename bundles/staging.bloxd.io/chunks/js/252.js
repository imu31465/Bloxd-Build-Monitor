export const id = 252;
export const ids = [252];
export const modules = {
  39741: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      constructor(bb, cb, sb) {
        this.bu = bb, this.bv = cb, this.distance = sb, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39750: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    var kb = sb(36666),
      Wb = sb(36656),
      ab = sb(36661);
    class Tb {
      constructor(bb, cb, sb) {
        this.vectors = (0, kb.b)(8, Wb.p.Zero), this.center = Wb.p.Zero(), this.centerWorld = Wb.p.Zero(), this.extendSize = Wb.p.Zero(), this.extendSizeWorld = Wb.p.Zero(), this.directions = (0, kb.b)(3, Wb.p.Zero), this.vectorsWorld = (0, kb.b)(8, Wb.p.Zero), this.minimumWorld = Wb.p.Zero(), this.maximumWorld = Wb.p.Zero(), this.minimum = Wb.p.Zero(), this.maximum = Wb.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(bb, cb, sb)
      }
      reConstruct(bb, cb, sb) {
        const kb = bb.x,
          ab = bb.y,
          Tb = bb.z,
          Ub = cb.x,
          Ib = cb.y,
          Hb = cb.z,
          fb = this.vectors;
        this.minimum.I5(kb, ab, Tb), this.maximum.I5(Ub, Ib, Hb), fb[0].I5(kb, ab, Tb), fb[1].I5(Ub, Ib, Hb), fb[2].I5(Ub, ab, Tb), fb[3].I5(kb, Ib, Tb), fb[4].I5(kb, ab, Hb), fb[5].I5(Ub, Ib, Tb), fb[6].I5(kb, Ib, Hb), fb[7].I5(Ub, ab, Hb), cb.addToRef(bb, this.center).scaleInPlace(.5), cb.subtractToRef(bb, this.extendSize).scaleInPlace(.5), this._worldMatrix = sb || Wb.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(bb) {
        const cb = Tb._TmpVector3,
          sb = this.maximum.subtractToRef(this.minimum, cb[0]),
          kb = sb.length();
        sb.normalizeFromLength(kb);
        const Wb = kb * bb,
          ab = sb.scaleInPlace(.5 * Wb),
          Ub = this.center.subtractToRef(ab, cb[1]),
          Ib = this.center.addToRef(ab, cb[2]);
        return this.reConstruct(Ub, Ib, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        const cb = this.minimumWorld,
          sb = this.maximumWorld,
          kb = this.directions,
          ab = this.vectorsWorld,
          Tb = this.vectors;
        if (bb.isIdentity()) {
          cb.ssb(this.minimum), sb.ssb(this.maximum);
          for (let bb = 0; bb < 8; ++bb) ab[bb].ssb(Tb[bb]);
          this.extendSizeWorld.ssb(this.extendSize), this.centerWorld.ssb(this.center)
        } else {
          cb.I6(Number.MAX_VALUE), sb.I6(-Number.MAX_VALUE);
          for (let kb = 0; kb < 8; ++kb) {
            const Ub = ab[kb];
            Wb.p.TransformCoordinatesToRef(Tb[kb], bb, Ub), cb.minimizeInPlace(Ub), sb.maximizeInPlace(Ub)
          }
          sb.subtractToRef(cb, this.extendSizeWorld).scaleInPlace(.5), sb.addToRef(cb, this.centerWorld).scaleInPlace(.5)
        }
        Wb.p.FromArrayToRef(bb.m, 0, kb[0]), Wb.p.FromArrayToRef(bb.m, 4, kb[1]), Wb.p.FromArrayToRef(bb.m, 8, kb[2]), this._worldMatrix = bb
      }
      isInFrustum(bb) {
        return Tb.IsInFrustum(this.vectorsWorld, bb)
      }
      isCompletelyInFrustum(bb) {
        return Tb.IsCompletelyInFrustum(this.vectorsWorld, bb)
      }
      intersectsPoint(bb) {
        const cb = this.minimumWorld,
          sb = this.maximumWorld,
          kb = cb.x,
          Wb = cb.y,
          Tb = cb.z,
          Ub = sb.x,
          Ib = sb.y,
          Hb = sb.z,
          fb = bb.x,
          Mb = bb.y,
          Xb = bb.z,
          nb = -ab.d;
        return !(Ub - fb < nb || nb > fb - kb) && (!(Ib - Mb < nb || nb > Mb - Wb) && !(Hb - Xb < nb || nb > Xb - Tb))
      }
      intersectsSphere(bb) {
        return Tb.IntersectsSphere(this.minimumWorld, this.maximumWorld, bb.centerWorld, bb.radiusWorld)
      }
      intersectsMinMax(bb, cb) {
        const sb = this.minimumWorld,
          kb = this.maximumWorld,
          Wb = sb.x,
          ab = sb.y,
          Tb = sb.z,
          Ub = kb.x,
          Ib = kb.y,
          Hb = kb.z,
          fb = bb.x,
          Mb = bb.y,
          Xb = bb.z,
          nb = cb.x,
          mb = cb.y,
          lb = cb.z;
        return !(Ub < fb || Wb > nb) && (!(Ib < Mb || ab > mb) && !(Hb < Xb || Tb > lb))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(bb, cb) {
        return bb.intersectsMinMax(cb.minimumWorld, cb.maximumWorld)
      }
      static IntersectsSphere(bb, cb, sb, kb) {
        const ab = Tb._TmpVector3[0];
        Wb.p.ClampToRef(sb, bb, cb, ab);
        return Wb.p.DistanceSquared(sb, ab) <= kb * kb
      }
      static IsCompletelyInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; ++sb) {
          const kb = cb[sb];
          for (let cb = 0; cb < 8; ++cb)
            if (kb.dotCoordinate(bb[cb]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; ++sb) {
          let kb = !0;
          const Wb = cb[sb];
          for (let cb = 0; cb < 8; ++cb)
            if (Wb.dotCoordinate(bb[cb]) >= 0) {
              kb = !1;
              break
            } if (kb) return !1
        }
        return !0
      }
    }
    Tb._TmpVector3 = (0, kb.b)(3, Wb.p.Zero)
  },
  39745: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Mb
    });
    var kb = sb(36666),
      Wb = sb(36656),
      ab = sb(39750);
    class Tb {
      constructor(bb, cb, sb) {
        this.center = Wb.p.Zero(), this.centerWorld = Wb.p.Zero(), this.minimum = Wb.p.Zero(), this.maximum = Wb.p.Zero(), this.reConstruct(bb, cb, sb)
      }
      reConstruct(bb, cb, sb) {
        this.minimum.ssb(bb), this.maximum.ssb(cb);
        const kb = Wb.p.Distance(bb, cb);
        cb.addToRef(bb, this.center).scaleInPlace(.5), this.radius = .5 * kb, this._update(sb || Wb.e.IdentityReadOnly)
      }
      scale(bb) {
        const cb = Tb._TmpVector3,
          sb = this.maximum.subtractToRef(this.minimum, cb[0]),
          kb = sb.length();
        sb.normalizeFromLength(kb);
        const Wb = kb * bb,
          ab = sb.scaleInPlace(.5 * Wb),
          Ub = this.center.subtractToRef(ab, cb[1]),
          Ib = this.center.addToRef(ab, cb[2]);
        return this.reConstruct(Ub, Ib, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        if (bb.isIdentity()) this.centerWorld.ssb(this.center), this.radiusWorld = this.radius;
        else {
          Wb.p.TransformCoordinatesToRef(this.center, bb, this.centerWorld);
          const cb = Tb._TmpVector3[0];
          Wb.p.TransformNormalFromFloatsToRef(1, 1, 1, bb, cb), this.radiusWorld = Math.max(Math.abs(cb.x), Math.abs(cb.y), Math.abs(cb.z)) * this.radius
        }
      }
      isInFrustum(bb) {
        const cb = this.centerWorld,
          sb = this.radiusWorld;
        for (let kb = 0; kb < 6; kb++)
          if (bb[kb].dotCoordinate(cb) <= -sb) return !1;
        return !0
      }
      isCenterInFrustum(bb) {
        const cb = this.centerWorld;
        for (let sb = 0; sb < 6; sb++)
          if (bb[sb].dotCoordinate(cb) < 0) return !1;
        return !0
      }
      intersectsPoint(bb) {
        const cb = Wb.p.DistanceSquared(this.centerWorld, bb);
        return !(this.radiusWorld * this.radiusWorld < cb)
      }
      static Intersects(bb, cb) {
        const sb = Wb.p.DistanceSquared(bb.centerWorld, cb.centerWorld),
          kb = bb.radiusWorld + cb.radiusWorld;
        return !(kb * kb < sb)
      }
      static CreateFromCenterAndRadius(bb, cb, sb) {
        this._TmpVector3[0].ssb(bb), this._TmpVector3[1].I5(0, 0, cb), this._TmpVector3[2].ssb(bb), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Wkb(this._TmpVector3[1]);
        const kb = new Tb(this._TmpVector3[0], this._TmpVector3[2]);
        return kb._worldMatrix = sb || Wb.e.Identity(), kb
      }
    }
    Tb._TmpVector3 = (0, kb.b)(3, Wb.p.Zero);
    const Ub = {
        min: 0,
        max: 0
      },
      Ib = {
        min: 0,
        max: 0
      },
      Hb = (bb, cb, sb) => {
        const kb = Wb.p.Dot(cb.centerWorld, bb),
          ab = Math.abs(Wb.p.Dot(cb.directions[0], bb)) * cb.extendSize.x + Math.abs(Wb.p.Dot(cb.directions[1], bb)) * cb.extendSize.y + Math.abs(Wb.p.Dot(cb.directions[2], bb)) * cb.extendSize.z;
        sb.min = kb - ab, sb.max = kb + ab
      },
      fb = (bb, cb, sb) => (Hb(bb, cb, Ub), Hb(bb, sb, Ib), !(Ub.min > Ib.max || Ib.min > Ub.max));
    class Mb {
      constructor(bb, cb, sb) {
        this._isLocked = !1, this.boundingBox = new ab.c(bb, cb, sb), this.Ikb = new Tb(bb, cb, sb)
      }
      reConstruct(bb, cb, sb) {
        this.boundingBox.reConstruct(bb, cb, sb), this.Ikb.reConstruct(bb, cb, sb)
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
        this._isLocked || (this.boundingBox._update(bb), this.Ikb._update(bb))
      }
      centerOn(bb, cb) {
        const sb = Mb._TmpVector3[0].ssb(bb).Wkb(cb),
          kb = Mb._TmpVector3[1].ssb(bb).addInPlace(cb);
        return this.boundingBox.reConstruct(sb, kb, this.boundingBox.getWorldMatrix()), this.Ikb.reConstruct(sb, kb, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(bb) {
        const cb = Wb.p.Minimize(this.minimum, bb),
          sb = Wb.p.Maximize(this.maximum, bb);
        return this.reConstruct(cb, sb, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(bb) {
        const cb = Wb.m.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(cb);
        const sb = Wb.m.Fm[0];
        return Wb.p.TransformCoordinatesToRef(bb.boundingBox.minimumWorld, cb, sb), this.encapsulate(sb), Wb.p.TransformCoordinatesToRef(bb.boundingBox.maximumWorld, cb, sb), this.encapsulate(sb), this
      }
      scale(bb) {
        return this.boundingBox.scale(bb), this.Ikb.scale(bb), this
      }
      isInFrustum(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === cb || 3 === cb) && this.Ikb.isCenterInFrustum(bb)) return !0;
        if (!this.Ikb.isInFrustum(bb)) return !1;
        return !(1 !== cb && 3 !== cb) || this.boundingBox.isInFrustum(bb)
      }
      get diagonalLength() {
        const bb = this.boundingBox;
        return bb.maximumWorld.subtractToRef(bb.minimumWorld, Mb._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(bb) {
        return this.boundingBox.isCompletelyInFrustum(bb)
      }
      _checkCollision(bb) {
        return bb._canDoCollision(this.Ikb.centerWorld, this.Ikb.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(bb) {
        return !!this.Ikb.centerWorld && (!!this.Ikb.intersectsPoint(bb) && !!this.boundingBox.intersectsPoint(bb))
      }
      intersects(bb, cb) {
        if (!Tb.Intersects(this.Ikb, bb.Ikb)) return !1;
        if (!ab.c.Intersects(this.boundingBox, bb.boundingBox)) return !1;
        if (!cb) return !0;
        const sb = this.boundingBox,
          kb = bb.boundingBox;
        return !!fb(sb.directions[0], sb, kb) && (!!fb(sb.directions[1], sb, kb) && (!!fb(sb.directions[2], sb, kb) && (!!fb(kb.directions[0], sb, kb) && (!!fb(kb.directions[1], sb, kb) && (!!fb(kb.directions[2], sb, kb) && (!!fb(Wb.p.Cross(sb.directions[0], kb.directions[0]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[0], kb.directions[1]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[0], kb.directions[2]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[1], kb.directions[0]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[1], kb.directions[1]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[1], kb.directions[2]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[2], kb.directions[0]), sb, kb) && (!!fb(Wb.p.Cross(sb.directions[2], kb.directions[1]), sb, kb) && !!fb(Wb.p.Cross(sb.directions[2], kb.directions[2]), sb, kb))))))))))))))
      }
    }
    Mb._TmpVector3 = (0, kb.b)(2, Wb.p.Zero)
  },
  39767: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      f: () => Ib,
      i: () => Ub,
      j: () => Tb
    });
    var kb = sb(39586),
      Wb = sb(36656);

    function ab(bb) {
      -1 === bb.indexOf("vClipPlane") && bb.push("vClipPlane"), -1 === bb.indexOf("vClipPlane2") && bb.push("vClipPlane2"), -1 === bb.indexOf("vClipPlane3") && bb.push("vClipPlane3"), -1 === bb.indexOf("vClipPlane4") && bb.push("vClipPlane4"), -1 === bb.indexOf("vClipPlane5") && bb.push("vClipPlane5"), -1 === bb.indexOf("vClipPlane6") && bb.push("vClipPlane6")
    }

    function Tb(bb, cb, sb) {
      const kb = !!(bb.clipPlane ?? cb.clipPlane),
        Wb = !!(bb.clipPlane2 ?? cb.clipPlane2),
        ab = !!(bb.clipPlane3 ?? cb.clipPlane3),
        Tb = !!(bb.clipPlane4 ?? cb.clipPlane4),
        Ub = !!(bb.clipPlane5 ?? cb.clipPlane5),
        Ib = !!(bb.clipPlane6 ?? cb.clipPlane6);
      kb && sb.push("#define CLIPPLANE"), Wb && sb.push("#define CLIPPLANE2"), ab && sb.push("#define CLIPPLANE3"), Tb && sb.push("#define CLIPPLANE4"), Ub && sb.push("#define CLIPPLANE5"), Ib && sb.push("#define CLIPPLANE6")
    }

    function Ub(bb, cb, sb) {
      let kb = !1;
      const Wb = !!(bb.clipPlane ?? cb.clipPlane),
        ab = !!(bb.clipPlane2 ?? cb.clipPlane2),
        Tb = !!(bb.clipPlane3 ?? cb.clipPlane3),
        Ub = !!(bb.clipPlane4 ?? cb.clipPlane4),
        Ib = !!(bb.clipPlane5 ?? cb.clipPlane5),
        Hb = !!(bb.clipPlane6 ?? cb.clipPlane6);
      return sb.CLIPPLANE !== Wb && (sb.CLIPPLANE = Wb, kb = !0), sb.CLIPPLANE2 !== ab && (sb.CLIPPLANE2 = ab, kb = !0), sb.CLIPPLANE3 !== Tb && (sb.CLIPPLANE3 = Tb, kb = !0), sb.CLIPPLANE4 !== Ub && (sb.CLIPPLANE4 = Ub, kb = !0), sb.CLIPPLANE5 !== Ib && (sb.CLIPPLANE5 = Ib, kb = !0), sb.CLIPPLANE6 !== Hb && (sb.CLIPPLANE6 = Hb, kb = !0), kb
    }

    function Ib(bb, cb, sb) {
      let kb = cb.clipPlane ?? sb.clipPlane;
      Hb(bb, "vClipPlane", kb), kb = cb.clipPlane2 ?? sb.clipPlane2, Hb(bb, "vClipPlane2", kb), kb = cb.clipPlane3 ?? sb.clipPlane3, Hb(bb, "vClipPlane3", kb), kb = cb.clipPlane4 ?? sb.clipPlane4, Hb(bb, "vClipPlane4", kb), kb = cb.clipPlane5 ?? sb.clipPlane5, Hb(bb, "vClipPlane5", kb), kb = cb.clipPlane6 ?? sb.clipPlane6, Hb(bb, "vClipPlane6", kb)
    }

    function Hb(bb, cb, sb) {
      if (sb) {
        const ab = kb.b.EY()?.floatingOriginOffset || Wb.p.ZeroReadOnly;
        bb.setFloat4(cb, sb.normal.x, sb.normal.y, sb.normal.z, sb.d + Wb.p.Dot(sb.normal, ab))
      }
    }
  },
  39777: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(bb, cb) {
        this._defines[bb] || (bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb), this._defines[bb] = new Array), this._defines[bb].push(cb)
      }
      addCPUSkinningFallback(bb, cb) {
        this._mesh = cb, bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(bb, cb) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, bb = bb.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), cb._bonesComputationForcedToCPU = !0;
          const sb = this._mesh.EY();
          for (let bb = 0; bb < sb.meshes.length; bb++) {
            const kb = sb.meshes[bb];
            if (kb.material) {
              if (kb.computeBonesUsingShaders && 0 !== kb.numBoneInfluencers)
                if (kb.material.getEffect() === cb) kb.computeBonesUsingShaders = !1;
                else if (kb.XV)
                for (const bb of kb.XV) {
                  if (bb.effect === cb) {
                    kb.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && kb.computeBonesUsingShaders && kb.numBoneInfluencers > 0 && (kb.computeBonesUsingShaders = !1)
          }
        } else {
          const cb = this._defines[this._currentRank];
          if (cb)
            for (let sb = 0; sb < cb.length; sb++) bb = bb.replace("#define " + cb[sb], "");
          this._currentRank++
        }
        return bb
      }
    }
  },
  39730: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Cb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39531),
      Tb = sb(36683),
      Ub = sb(36677),
      Ib = sb(39737),
      Hb = sb(39563),
      fb = sb(38284),
      Mb = sb(37368),
      Xb = sb(39755),
      nb = sb(39441);
    let mb = (() => {
      var bb;
      let cb, sb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, mb, lb, Qb = [];
      return bb = class {
        constructor() {
          this._func = (0, kb.m)(this, Qb), this.reset()
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
          nb.d.Clone((() => bb), this)
        }
        serialize() {
          return nb.d.Serialize(this)
        }
        parse(bb, cb, sb) {
          nb.d.Parse((() => this), bb, cb, sb)
        }
      }, (() => {
        const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], Tb = [(0, Wb.E)()], Ub = [(0, Wb.E)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], fb = [(0, Wb.E)()], Mb = [(0, Wb.E)()], Xb = [(0, Wb.E)()], mb = [(0, Wb.E)()], lb = [(0, Wb.E)()], (0, kb.j)(bb, null, cb, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: bb => "func" in bb,
            get: bb => bb.func
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, sb, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: bb => "backFunc" in bb,
            get: bb => bb.backFunc
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, ab, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcRef" in bb,
            get: bb => bb.funcRef
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, Tb, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcMask" in bb,
            get: bb => bb.funcMask
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, Ub, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilFail" in bb,
            get: bb => bb.opStencilFail
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, Ib, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opDepthFail" in bb,
            get: bb => bb.opDepthFail
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, Hb, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilDepthPass" in bb,
            get: bb => bb.opStencilDepthPass
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, fb, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilFail" in bb,
            get: bb => bb.backOpStencilFail
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, Mb, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpDepthFail" in bb,
            get: bb => bb.backOpDepthFail
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, Xb, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilDepthPass" in bb,
            get: bb => bb.backOpStencilDepthPass
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, mb, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: bb => "mask" in bb,
            get: bb => bb.mask
          },
          metadata: nb
        }, null, Qb), (0, kb.j)(bb, null, lb, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "enabled" in bb,
            get: bb => bb.enabled
          },
          metadata: nb
        }, null, Qb), nb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nb
        })
      })(), bb
    })();
    var lb = sb(39761),
      Qb = sb(39328),
      eb = sb(39296);
    let Cb = (() => {
      var bb;
      let cb, sb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, Zb, zb, qb, db, Ab, wb, rb, ob = [],
        Sb = [],
        Rb = [],
        vb = [],
        Fb = [],
        xb = [],
        jb = [],
        pb = [],
        bc = [],
        cc = [],
        sc = [],
        kc = [],
        Wc = [],
        ac = [],
        Tc = [],
        Uc = [],
        Ic = [],
        Hc = [],
        fc = [],
        Mc = [],
        Xc = [],
        nc = [],
        mc = [],
        lc = [],
        Qc = [],
        ec = [],
        Cc = [],
        Nc = [],
        Vc = [],
        Lc = [],
        uc = [],
        Yc = [],
        hc = [],
        Jc = [],
        gc = [],
        Bc = [],
        tc = [],
        yc = [],
        Pc = [],
        Dc = [],
        Ec = [],
        ic = [],
        Oc = [],
        Gc = [],
        Kc = [],
        Zc = [],
        zc = [],
        qc = [],
        dc = [],
        Ac = [],
        wc = [];
      return bb = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(cb) {
          this._useVertexPulling !== cb && (this._useVertexPulling = cb, this.Tcb(bb.MiscDirtyFlag))
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
        set alpha(cb) {
          if (this._alpha === cb) return;
          const sb = this._alpha;
          this._alpha = cb, 1 !== sb && 1 !== cb || this.Tcb(bb.MiscDirtyFlag + bb.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(cb) {
          this._backFaceCulling !== cb && (this._backFaceCulling = cb, this.Tcb(bb.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(cb) {
          const sb = Math.max(0, Math.min(0 | cb, 4));
          this._textureRepetitionMode !== sb && (this._textureRepetitionMode = sb, this.Tcb(bb.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(cb) {
          this._cullBackFaces !== cb && (this._cullBackFaces = cb, this.Tcb(bb.TextureDirtyFlag))
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
          this._onDisposeObserver && this.ZY.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZY.add(bb)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Tb.c), this._onBindObservable
        }
        set onBind(bb) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(bb)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Tb.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Tb.c), this._onEffectCreatedObservable
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
        setAlphaMode(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[sb] !== cb && (this._alphaMode[sb] = cb, this.Tcb(bb.TextureDirtyFlag))
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
        set fogEnabled(cb) {
          this._fogEnabled !== cb && (this._fogEnabled = cb, this.Tcb(bb.MiscDirtyFlag))
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
        set wireframe(cb) {
          this.fillMode = cb ? bb.WireFrameFillMode : bb.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case bb.PointFillMode:
            case bb.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(cb) {
          this.fillMode = cb ? bb.PointFillMode : bb.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(cb) {
          this._fillMode !== cb && (this._fillMode = cb, this.Tcb(bb.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(bb) {
          const cb = this.EY().Sm().getCaps().fragmentDepthSupported;
          bb && !cb && fb.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = bb && cb, this._markAllSubMeshesAsMiscDirty()
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
        constructor(cb, sb, Wb) {
          let Ib = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, kb.m)(this, ob), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, kb.m)(this, Sb, void 0), this.uniqueId = ((0, kb.m)(this, Rb), (0, kb.m)(this, vb, void 0)), this._loadedUniqueId = (0, kb.m)(this, Fb), this.name = (0, kb.m)(this, xb, void 0), this.metadata = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, null)), this._internalMetadata = (0, kb.m)(this, bc), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, kb.m)(this, cc, !1), this.checkReadyOnlyOnce = ((0, kb.m)(this, sc), (0, kb.m)(this, kc, !1)), this.state = ((0, kb.m)(this, Wc), (0, kb.m)(this, ac, "")), this._alpha = ((0, kb.m)(this, Tc), (0, kb.m)(this, Uc, 1)), this.inspectableCustomProperties = (0, kb.m)(this, Ic), this._backFaceCulling = (0, kb.m)(this, Hc, !0), this._textureRepetitionMode = ((0, kb.m)(this, fc), (0, kb.m)(this, Mc, 0)), this.textureRepetitionHexTilingParams = ((0, kb.m)(this, Xc), (0, kb.m)(this, nc, [1, .6, 7, .5])), this._cullBackFaces = ((0, kb.m)(this, mc), (0, kb.m)(this, lc, !0)), this._blockDirtyMechanism = ((0, kb.m)(this, Qc), !1), this.sideOrientation = (0, kb.m)(this, ec, null), this.onCompiled = ((0, kb.m)(this, Cc), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.ZY = new Tb.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, kb.m)(this, Nc, [2]), this._needDepthPrePass = ((0, kb.m)(this, Vc), (0, kb.m)(this, Lc, !1)), this.disableDepthWrite = ((0, kb.m)(this, uc), (0, kb.m)(this, Yc, !1)), this.disableColorWrite = ((0, kb.m)(this, hc), (0, kb.m)(this, Jc, !1)), this.forceDepthWrite = ((0, kb.m)(this, gc), (0, kb.m)(this, Bc, !1)), this.depthFunction = ((0, kb.m)(this, tc), (0, kb.m)(this, yc, 0)), this.separateCullingPass = ((0, kb.m)(this, Pc), (0, kb.m)(this, Dc, !1)), this._fogEnabled = ((0, kb.m)(this, Ec), (0, kb.m)(this, ic, !0)), this.pointSize = ((0, kb.m)(this, Oc), (0, kb.m)(this, Gc, 1)), this.zOffset = ((0, kb.m)(this, Kc), (0, kb.m)(this, Zc, 0)), this.zOffsetUnits = ((0, kb.m)(this, zc), (0, kb.m)(this, qc, 0)), this.clipPlane = (0, kb.m)(this, dc), this.stencil = new mb, this._isVertexOutputInvariant = (0, kb.m)(this, Ac, bb.ForceVertexOutputInvariant), this._materialContext = (0, kb.m)(this, wc), this._useUBO = !1, this._fillMode = bb.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = cb;
          const fb = sb || Ub.d.LastCreatedScene;
          fb && (this._scene = fb, this._dirtyCallbacks = {}, this._forceGLSL = Ib, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = cb || ab.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Sm().createMaterialContext(), this._drawWrapper = new Xb.b(this._scene.Sm(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Hb.d(this._scene.Sm(), void 0, void 0, cb), this._useUBO = this.EY().Sm().supportsUniformBuffers, this._createUniformBuffer(), Wb || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), bb.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const bb = this.EY().Sm();
          this._uniformBuffer?.dispose(), bb.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Hb.d(bb, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Hb.d(this._scene.Sm(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(bb, cb) {
          return !0
        }
        isReadyForSubMesh(bb, cb, sb) {
          const kb = cb.materialDefines;
          return !!kb && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = kb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        EY() {
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
          let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const sb = this.EY().meshes;
          for (const bb of sb)
            if (bb.XV)
              for (const sb of bb.XV)
                if (sb.pm() === this)
                  for (const bb of sb._drawWrappers) bb && this._materialContext === bb.materialContext && (bb._wasPreviouslyReady = !1, bb._wasPreviouslyUsingInstances = null, bb._forceRebindOnNextCall = cb);
          cb && this.Tcb(bb.AllDirtyFlag)
        }
        _preBind(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const kb = this._scene.Sm(),
            Wb = (null == sb ? this.sideOrientation : sb) === bb.ClockWiseSideOrientation,
            ab = cb || this._getDrawWrapper();
          return (0, Qb.c)(ab) && ab.materialContext && (ab.materialContext.useVertexPulling = this.useVertexPulling), kb.enableEffect(ab), kb.setState(this.backFaceCulling, this.zOffset, !1, Wb, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Wb
        }
        bind(bb, cb) {}
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          this._eventInfo.ubo = bb, this._callbackPluginEventGeneric(8, this._eventInfo), bb.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(bb, cb, sb) {
          const kb = sb._drawWrapper;
          this._eventInfo.subMesh = sb, this._callbackPluginEventBindForSubMesh(this._eventInfo), kb._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(bb) {}
        bindView(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : bb.setMatrix("view", this.EY().getViewMatrix())
        }
        bindViewProjection(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (bb.setMatrix("viewProjection", this.EY().getTransformMatrix()), bb.setMatrix("projection", this.EY().getProjectionMatrix()), bb.setMatrix("inverseProjection", this.EY().getInverseProjectionMatrix()))
        }
        bindEyePosition(bb, cb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(bb, cb)
        }
        _afterBind(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && cb && (this._needToBindSceneUbo = !1, (0, lb.v)(cb, this.EY().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = bb ? bb.visibility : 1, this._onBindObservable && bb && this._onBindObservable.notifyObservers(bb), this.disableDepthWrite) {
            const bb = this._scene.Sm();
            this._cachedDepthWriteState = bb.getDepthWrite(), bb.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const bb = this._scene.Sm();
            this._cachedColorWriteState = bb.getColorWrite(), bb.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const bb = this._scene.Sm();
            this._cachedDepthFunctionState = bb.getDepthFunction() || 0, bb.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Sm().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Sm().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Sm().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(cb, sb) {
          const kb = {};
          if (this._serializePlugins(kb), bb._ParsePlugins(kb, cb, this._scene, sb), this.pluginManager)
            for (const bb of this.pluginManager._plugins) {
              const sb = cb.pluginManager.getPlugin(bb.name);
              sb && bb.copyTo(sb)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const bb = [];
            for (const cb in this.meshMap) {
              const sb = this.meshMap[cb];
              sb && bb.push(sb)
            }
            return bb
          }
          return this._scene.meshes.filter((bb => bb.material === this))
        }
        forceCompilation(bb, cb, sb, kb) {
          const Wb = {
              clipPlane: !1,
              useInstances: !1,
              ...sb
            },
            ab = this.EY(),
            Tb = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Ub = () => {
            if (!this._scene || !this._scene.Sm()) return;
            const sb = ab.clipPlane;
            if (Wb.clipPlane && (ab.clipPlane = new Mb.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let sb = !0,
                ab = null;
              if (bb.XV) {
                const cb = new Ib.b(0, 0, 0, 0, 0, bb, void 0, !1, !1);
                cb.materialDefines && (cb.materialDefines._renderId = -1), this.isReadyForSubMesh(bb, cb, Wb.useInstances) || (cb.effect && cb.effect.getCompilationError() && cb.effect.allFallbacksProcessed() ? ab = cb.effect.getCompilationError() : (sb = !1, setTimeout(Ub, 16)))
              }
              sb && (this.allowShaderHotSwapping = Tb, ab && kb && kb(ab), cb && cb(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Tb, cb && cb(this)) : setTimeout(Ub, 16);
            Wb.clipPlane && (ab.clipPlane = sb)
          };
          Ub()
        }
        async forceCompilationAsync(bb, cb) {
          return await new Promise(((sb, kb) => {
            this.forceCompilation(bb, (() => {
              sb()
            }), cb, (bb => {
              kb(bb)
            }))
          }))
        }
        Tcb(cb) {
          this.EY().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (bb._DirtyCallbackArray.length = 0, cb & bb.ImageProcessingDirtyFlag && bb._DirtyCallbackArray.push(bb._ImageProcessingDirtyCallBack), cb & bb.TextureDirtyFlag && bb._DirtyCallbackArray.push(bb._TextureDirtyCallBack), cb & bb.LightDirtyFlag && bb._DirtyCallbackArray.push(bb._LightsDirtyCallBack), cb & bb.FresnelDirtyFlag && bb._DirtyCallbackArray.push(bb._FresnelDirtyCallBack), cb & bb.AttributesDirtyFlag && bb._DirtyCallbackArray.push(bb._AttributeDirtyCallBack), cb & bb.MiscDirtyFlag && bb._DirtyCallbackArray.push(bb._MiscDirtyCallBack), cb & bb.PrePassDirtyFlag && bb._DirtyCallbackArray.push(bb._PrePassDirtyCallBack), bb._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(bb._RunDirtyCallBacks), this.EY().resetCachedMaterial())
        }
        resetDrawCache() {
          const bb = this.EY().meshes;
          for (const cb of bb)
            if (cb.XV)
              for (const bb of cb.XV) bb.pm() === this && bb.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(bb) {
          const cb = this.EY();
          if (cb.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const sb = cb.meshes;
          for (const kb of sb)
            if (kb.XV)
              for (const sb of kb.XV) {
                if ((sb.pm() || (cb._hasDefaultMaterial ? cb.defaultMaterial : null)) === this)
                  for (const cb of sb._drawWrappers) cb && cb.defines && cb.defines.markAllAsDirty && this._materialContext === cb.materialContext && bb(cb.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.EY().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const bb = this.EY().enablePrePassRenderer();
          bb && bb.Tcb()
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
            this.ZY.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(bb)
            }))
          }
        }
        setPrePassRenderer(bb) {
          return !1
        }
        dispose(bb, cb, sb) {
          const kb = this.EY();
          if (kb.stopAnimation(this), kb.freeProcessedMaterials(), kb.removeMaterial(this), this._eventInfo.forceDisposeTextures = cb, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const bb = this._parentContainer.materials.indexOf(this);
            bb > -1 && this._parentContainer.materials.splice(bb, 1), this._parentContainer = null
          }
          if (!0 !== sb)
            if (this.meshMap)
              for (const Wb in this.meshMap) {
                const bb = this.meshMap[Wb];
                this._disposeMeshResources(bb)
              } else {
                const bb = kb.meshes;
                for (const cb of bb) this._disposeMeshResources(cb)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.ZY.notifyObservers(this), this.ZY.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(bb) {
          if (!bb) return;
          const cb = bb.geometry,
            sb = bb._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (bb.XV && sb)
              for (const kb of bb.XV) {
                const bb = kb._drawWrappers;
                for (let Wb = 0; Wb < bb.length; Wb++) {
                  const ab = bb[Wb]?.effect;
                  if (!ab) continue;
                  sb[Wb] === this && (cb?._releaseVertexArrayObject(ab), kb._removeDrawWrapper(Wb, !0, !0))
                }
              }
          } else cb?._releaseVertexArrayObject(this._drawWrapper.effect);
          bb.material !== this || bb.Pkb || (bb.material = null)
        }
        serialize() {
          const bb = nb.d.Serialize(this);
          return bb.stencil = this.stencil.serialize(), bb.uniqueId = this.uniqueId, this._serializePlugins(bb), bb
        }
        _serializePlugins(bb) {
          if (bb.plugins = {}, this.pluginManager)
            for (const cb of this.pluginManager._plugins) cb.doNotSerialize || (bb.plugins[cb.getClassName()] = cb.serialize())
        }
        static ParseAlphaMode(bb, cb) {
          void 0 !== bb._alphaMode ? cb._alphaMode = Array.isArray(bb._alphaMode) ? [...bb._alphaMode] : [bb._alphaMode] : void 0 !== bb.alphaMode ? cb._alphaMode = Array.isArray(bb.alphaMode) ? [...bb.alphaMode] : [bb.alphaMode] : cb._alphaMode = [2]
        }
        static Parse(cb, sb, kb) {
          if (cb.customType) {
            if ("BABYLON.PBRMaterial" === cb.customType && cb.overloadedAlbedo && (cb.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return fb.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else cb.customType = "BABYLON.StandardMaterial";
          const Wb = ab.g.Instantiate(cb.customType).Parse(cb, sb, kb);
          return Wb._loadedUniqueId = cb.uniqueId, bb.ParseAlphaMode(cb, Wb), Wb
        }
        static _ParsePlugins(bb, cb, sb, kb) {
          if (bb.plugins)
            for (const Wb in bb.plugins) {
              const Tb = bb.plugins[Wb];
              let Ub = cb.pluginManager?.getPlugin(Tb.name);
              if (!Ub) {
                const bb = ab.g.Instantiate("BABYLON." + Wb);
                bb && (Ub = new bb(cb))
              }
              Ub?.parse(Tb, sb, kb)
            }
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], eb = [(0, Wb.E)()], Cb = [(0, Wb.E)()], Nb = [(0, Wb.E)()], Vb = [(0, Wb.E)()], Lb = [(0, Wb.E)()], ub = [(0, Wb.E)("alpha")], Yb = [(0, Wb.E)("backFaceCulling")], hb = [(0, Wb.E)("textureRepetitionMode")], Jb = [(0, Wb.E)("textureRepetitionHexTilingParams")], gb = [(0, Wb.E)("cullBackFaces")], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], yb = [(0, Wb.E)()], Pb = [(0, Wb.E)()], Db = [(0, Wb.E)()], Eb = [(0, Wb.E)()], ib = [(0, Wb.E)()], Ob = [(0, Wb.E)()], Gb = [(0, Wb.E)("fogEnabled")], Kb = [(0, Wb.E)()], Zb = [(0, Wb.E)()], zb = [(0, Wb.E)()], qb = [(0, Wb.E)()], db = [(0, Wb.E)()], Ab = [(0, Wb.E)()], wb = [(0, Wb.E)()], rb = [(0, Wb.E)()], (0, kb.j)(bb, null, qb, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointsCloud" in bb,
            get: bb => bb.pointsCloud
          },
          metadata: ab
        }, null, ob), (0, kb.j)(bb, null, db, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fillMode" in bb,
            get: bb => bb.fillMode
          },
          metadata: ab
        }, null, ob), (0, kb.j)(bb, null, Ab, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLogarithmicDepth" in bb,
            get: bb => bb.useLogarithmicDepth
          },
          metadata: ab
        }, null, ob), (0, kb.j)(bb, null, rb, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "transparencyMode" in bb,
            get: bb => bb.transparencyMode
          },
          metadata: ab
        }, null, ob), (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, cb) => {
              bb.id = cb
            }
          },
          metadata: ab
        }, Sb, Rb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, cb) => {
              bb.uniqueId = cb
            }
          },
          metadata: ab
        }, vb, Fb), (0, kb.j)(null, null, eb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, cb) => {
              bb.name = cb
            }
          },
          metadata: ab
        }, xb, jb), (0, kb.j)(null, null, Cb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, cb) => {
              bb.metadata = cb
            }
          },
          metadata: ab
        }, pb, bc), (0, kb.j)(null, null, Nb, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnEveryCall" in bb,
            get: bb => bb.checkReadyOnEveryCall,
            set: (bb, cb) => {
              bb.checkReadyOnEveryCall = cb
            }
          },
          metadata: ab
        }, cc, sc), (0, kb.j)(null, null, Vb, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnlyOnce" in bb,
            get: bb => bb.checkReadyOnlyOnce,
            set: (bb, cb) => {
              bb.checkReadyOnlyOnce = cb
            }
          },
          metadata: ab
        }, kc, Wc), (0, kb.j)(null, null, Lb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, cb) => {
              bb.state = cb
            }
          },
          metadata: ab
        }, ac, Tc), (0, kb.j)(null, null, ub, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alpha" in bb,
            get: bb => bb._alpha,
            set: (bb, cb) => {
              bb._alpha = cb
            }
          },
          metadata: ab
        }, Uc, Ic), (0, kb.j)(null, null, Yb, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_backFaceCulling" in bb,
            get: bb => bb._backFaceCulling,
            set: (bb, cb) => {
              bb._backFaceCulling = cb
            }
          },
          metadata: ab
        }, Hc, fc), (0, kb.j)(null, null, hb, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_textureRepetitionMode" in bb,
            get: bb => bb._textureRepetitionMode,
            set: (bb, cb) => {
              bb._textureRepetitionMode = cb
            }
          },
          metadata: ab
        }, Mc, Xc), (0, kb.j)(null, null, Jb, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRepetitionHexTilingParams" in bb,
            get: bb => bb.textureRepetitionHexTilingParams,
            set: (bb, cb) => {
              bb.textureRepetitionHexTilingParams = cb
            }
          },
          metadata: ab
        }, nc, mc), (0, kb.j)(null, null, gb, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: bb => "_cullBackFaces" in bb,
            get: bb => bb._cullBackFaces,
            set: (bb, cb) => {
              bb._cullBackFaces = cb
            }
          },
          metadata: ab
        }, lc, Qc), (0, kb.j)(null, null, Bb, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: bb => "sideOrientation" in bb,
            get: bb => bb.sideOrientation,
            set: (bb, cb) => {
              bb.sideOrientation = cb
            }
          },
          metadata: ab
        }, ec, Cc), (0, kb.j)(null, null, tb, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alphaMode" in bb,
            get: bb => bb._alphaMode,
            set: (bb, cb) => {
              bb._alphaMode = cb
            }
          },
          metadata: ab
        }, Nc, Vc), (0, kb.j)(null, null, yb, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: bb => "_needDepthPrePass" in bb,
            get: bb => bb._needDepthPrePass,
            set: (bb, cb) => {
              bb._needDepthPrePass = cb
            }
          },
          metadata: ab
        }, Lc, uc), (0, kb.j)(null, null, Pb, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableDepthWrite" in bb,
            get: bb => bb.disableDepthWrite,
            set: (bb, cb) => {
              bb.disableDepthWrite = cb
            }
          },
          metadata: ab
        }, Yc, hc), (0, kb.j)(null, null, Db, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableColorWrite" in bb,
            get: bb => bb.disableColorWrite,
            set: (bb, cb) => {
              bb.disableColorWrite = cb
            }
          },
          metadata: ab
        }, Jc, gc), (0, kb.j)(null, null, Eb, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceDepthWrite" in bb,
            get: bb => bb.forceDepthWrite,
            set: (bb, cb) => {
              bb.forceDepthWrite = cb
            }
          },
          metadata: ab
        }, Bc, tc), (0, kb.j)(null, null, ib, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: bb => "depthFunction" in bb,
            get: bb => bb.depthFunction,
            set: (bb, cb) => {
              bb.depthFunction = cb
            }
          },
          metadata: ab
        }, yc, Pc), (0, kb.j)(null, null, Ob, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "separateCullingPass" in bb,
            get: bb => bb.separateCullingPass,
            set: (bb, cb) => {
              bb.separateCullingPass = cb
            }
          },
          metadata: ab
        }, Dc, Ec), (0, kb.j)(null, null, Gb, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_fogEnabled" in bb,
            get: bb => bb._fogEnabled,
            set: (bb, cb) => {
              bb._fogEnabled = cb
            }
          },
          metadata: ab
        }, ic, Oc), (0, kb.j)(null, null, Kb, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointSize" in bb,
            get: bb => bb.pointSize,
            set: (bb, cb) => {
              bb.pointSize = cb
            }
          },
          metadata: ab
        }, Gc, Kc), (0, kb.j)(null, null, Zb, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffset" in bb,
            get: bb => bb.zOffset,
            set: (bb, cb) => {
              bb.zOffset = cb
            }
          },
          metadata: ab
        }, Zc, zc), (0, kb.j)(null, null, zb, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffsetUnits" in bb,
            get: bb => bb.zOffsetUnits,
            set: (bb, cb) => {
              bb.zOffsetUnits = cb
            }
          },
          metadata: ab
        }, qc, dc), (0, kb.j)(null, null, wb, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: bb => "_isVertexOutputInvariant" in bb,
            get: bb => bb._isVertexOutputInvariant,
            set: (bb, cb) => {
              bb._isVertexOutputInvariant = cb
            }
          },
          metadata: ab
        }, Ac, wc), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.TriangleFillMode = 0, bb.WireFrameFillMode = 1, bb.PointFillMode = 2, bb.PointListDrawMode = 3, bb.LineListDrawMode = 4, bb.LineLoopDrawMode = 5, bb.LineStripDrawMode = 6, bb.TriangleStripDrawMode = 7, bb.TriangleFanDrawMode = 8, bb.ClockWiseSideOrientation = 0, bb.CounterClockWiseSideOrientation = 1, bb.ImageProcessingDirtyFlag = 64, bb.TextureDirtyFlag = 1, bb.LightDirtyFlag = 2, bb.FresnelDirtyFlag = 4, bb.AttributesDirtyFlag = 8, bb.MiscDirtyFlag = 16, bb.PrePassDirtyFlag = 32, bb.AllDirtyFlag = 127, bb.MATERIAL_OPAQUE = 0, bb.MATERIAL_ALPHATEST = 1, bb.MATERIAL_ALPHABLEND = 2, bb.MATERIAL_ALPHATESTANDBLEND = 3, bb.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, bb.MATERIAL_NORMALBLENDMETHOD_RNM = 1, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.OnEventObservable = new Tb.c, bb.ForceVertexOutputInvariant = !1, bb._AllDirtyCallBack = bb => bb.markAllAsDirty(), bb._ImageProcessingDirtyCallBack = bb => bb.markAsImageProcessingDirty(), bb._TextureDirtyCallBack = bb => bb.markAsTexturesDirty(), bb._FresnelDirtyCallBack = bb => bb.markAsFresnelDirty(), bb._MiscDirtyCallBack = bb => bb.markAsMiscDirty(), bb._PrePassDirtyCallBack = bb => bb.markAsPrePassDirty(), bb._LightsDirtyCallBack = bb => bb.markAsLightDirty(), bb._AttributeDirtyCallBack = bb => bb.markAsAttributesDirty(), bb._FresnelAndMiscDirtyCallBack = cb => {
        bb._FresnelDirtyCallBack(cb), bb._MiscDirtyCallBack(cb)
      }, bb._TextureAndMiscDirtyCallBack = cb => {
        bb._TextureDirtyCallBack(cb), bb._MiscDirtyCallBack(cb)
      }, bb._DirtyCallbackArray = [], bb._RunDirtyCallBacks = cb => {
        for (const sb of bb._DirtyCallbackArray) sb(cb)
      }, bb
    })();
    Object.getOwnPropertyDescriptor(Cb.prototype, "pluginManager") || Object.defineProperty(Cb.prototype, "pluginManager", (0, eb.d)("Material", "pluginManager"))
  },
  39770: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(39311);
    class Wb {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(bb) {
        this._DiffuseTextureEnabled !== bb && (this._DiffuseTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(bb) {
        this._BaseWeightTextureEnabled !== bb && (this._BaseWeightTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(bb) {
        this._BaseDiffuseRoughnessTextureEnabled !== bb && (this._BaseDiffuseRoughnessTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(bb) {
        this._DetailTextureEnabled !== bb && (this._DetailTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(bb) {
        this._DecalMapEnabled !== bb && (this._DecalMapEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(bb) {
        this._AmbientTextureEnabled !== bb && (this._AmbientTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(bb) {
        this._OpacityTextureEnabled !== bb && (this._OpacityTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(bb) {
        this._ReflectionTextureEnabled !== bb && (this._ReflectionTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(bb) {
        this._EmissiveTextureEnabled !== bb && (this._EmissiveTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(bb) {
        this._SpecularTextureEnabled !== bb && (this._SpecularTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(bb) {
        this._BumpTextureEnabled !== bb && (this._BumpTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(bb) {
        this._LightmapTextureEnabled !== bb && (this._LightmapTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(bb) {
        this._RefractionTextureEnabled !== bb && (this._RefractionTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(bb) {
        this._ColorGradingTextureEnabled !== bb && (this._ColorGradingTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(bb) {
        this._FresnelEnabled !== bb && (this._FresnelEnabled = bb, kb.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(bb) {
        this._ClearCoatTextureEnabled !== bb && (this._ClearCoatTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(bb) {
        this._ClearCoatBumpTextureEnabled !== bb && (this._ClearCoatBumpTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(bb) {
        this._ClearCoatTintTextureEnabled !== bb && (this._ClearCoatTintTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(bb) {
        this._SheenTextureEnabled !== bb && (this._SheenTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(bb) {
        this._AnisotropicTextureEnabled !== bb && (this._AnisotropicTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(bb) {
        this._ThicknessTextureEnabled !== bb && (this._ThicknessTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(bb) {
        this._RefractionIntensityTextureEnabled !== bb && (this._RefractionIntensityTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(bb) {
        this._TranslucencyIntensityTextureEnabled !== bb && (this._TranslucencyIntensityTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(bb) {
        this._TranslucencyColorTextureEnabled !== bb && (this._TranslucencyColorTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(bb) {
        this._IridescenceTextureEnabled !== bb && (this._IridescenceTextureEnabled = bb, kb.b.MarkAllMaterialsAsDirty(1))
      }
    }
    Wb._DiffuseTextureEnabled = !0, Wb._BaseWeightTextureEnabled = !0, Wb._BaseDiffuseRoughnessTextureEnabled = !0, Wb._DetailTextureEnabled = !0, Wb._DecalMapEnabled = !0, Wb._AmbientTextureEnabled = !0, Wb._OpacityTextureEnabled = !0, Wb._ReflectionTextureEnabled = !0, Wb._EmissiveTextureEnabled = !0, Wb._SpecularTextureEnabled = !0, Wb._BumpTextureEnabled = !0, Wb._LightmapTextureEnabled = !0, Wb._RefractionTextureEnabled = !0, Wb._ColorGradingTextureEnabled = !0, Wb._FresnelEnabled = !0, Wb._ClearCoatTextureEnabled = !0, Wb._ClearCoatBumpTextureEnabled = !0, Wb._ClearCoatTintTextureEnabled = !0, Wb._SheenTextureEnabled = !0, Wb._AnisotropicTextureEnabled = !0, Wb._ThicknessTextureEnabled = !0, Wb._RefractionIntensityTextureEnabled = !0, Wb._TranslucencyIntensityTextureEnabled = !0, Wb._TranslucencyColorTextureEnabled = !0, Wb._IridescenceTextureEnabled = !0
  },
  39761: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => yb,
      Db: () => mb,
      F: () => Lb,
      I: () => Bb,
      L: () => tb,
      N: () => nb,
      R: () => Xb,
      V: () => db,
      Y: () => Gb,
      _: () => ib,
      bb: () => Eb,
      d: () => Db,
      e: () => ub,
      eb: () => Nb,
      g: () => Mb,
      hb: () => Pb,
      jb: () => Ab,
      k: () => eb,
      mb: () => wb,
      n: () => Cb,
      ob: () => rb,
      q: () => gb,
      s: () => Ib,
      sb: () => vb,
      t: () => lb,
      v: () => Qb,
      wb: () => Sb,
      x: () => Vb,
      zb: () => Rb
    });
    var kb = sb(38284),
      Wb = sb(36677),
      ab = sb(39647),
      Tb = sb(39767),
      Ub = sb(39770);

    function Ib(bb, cb, sb) {
      if (!bb || bb.LOGARITHMICDEPTH || bb.indexOf && bb.indexOf("LOGARITHMICDEPTH") >= 0) {
        const bb = sb.activeCamera;
        1 === bb.mode && kb.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), cb.setFloat("logarithmicDepthConstant", 2 / (Math.log(bb.maxZ + 1) / Math.LN2))
      }
    }
    const Hb = {
        r: 0,
        g: 0,
        b: 0
      },
      fb = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Mb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      sb && bb.fogEnabled && (!cb || cb.applyFog) && 0 !== bb.fogMode && (sb.setFloat4("vFogInfos", bb.fogMode, bb.fogStart, bb.fogEnd, bb.fogDensity), kb ? (bb.fogColor.toLinearSpaceToRef(Hb, bb.Sm().useExactSrgbConversions), sb.setColor3("vFogColor", Hb)) : sb.setColor3("vFogColor", bb.fogColor))
    }

    function Xb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
      const Mb = bb.numMaxInfluencers || bb.numInfluencers;
      return Mb <= 0 ? 0 : (cb.push("#define MORPHTARGETS"), bb.hasPositions && cb.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), bb.hasNormals && cb.push("#define MORPHTARGETTEXTURE_HASNORMALS"), bb.hasTangents && cb.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), bb.hasUVs && cb.push("#define MORPHTARGETTEXTURE_HASUVS"), bb.hasUV2s && cb.push("#define MORPHTARGETTEXTURE_HASUV2S"), bb.hasColors && cb.push("#define MORPHTARGETTEXTURE_HASCOLORS"), bb.supportsPositions && Wb && cb.push("#define MORPHTARGETS_POSITION"), bb.supportsNormals && ab && cb.push("#define MORPHTARGETS_NORMAL"), bb.supportsTangents && Tb && cb.push("#define MORPHTARGETS_TANGENT"), bb.supportsUVs && Ub && cb.push("#define MORPHTARGETS_UV"), bb.supportsUV2s && Ib && cb.push("#define MORPHTARGETS_UV2"), bb.supportsColors && Hb && cb.push("#define MORPHTARGETS_COLOR"), cb.push("#define NUM_MORPH_INFLUENCERS " + Mb), bb.isUsingTextureForTargets && cb.push("#define MORPHTARGETS_TEXTURE"), fb.NUM_MORPH_INFLUENCERS = Mb, fb.NORMAL = ab, fb.TANGENT = Tb, fb.UV = Ub, fb.UV2 = Ib, fb.COLOR = Hb, nb(sb, kb, fb, Wb), Mb)
    }

    function nb(bb, cb, sb) {
      let ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Tb = sb.NUM_MORPH_INFLUENCERS;
      if (Tb > 0 && Wb.d.LastCreatedEngine) {
        const Ub = Wb.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          Ib = cb.morphTargetManager;
        if (Ib?.isUsingTextureForTargets) return;
        const Hb = Ib && Ib.supportsPositions && ab,
          fb = Ib && Ib.supportsNormals && sb.NORMAL,
          Mb = Ib && Ib.supportsTangents && sb.TANGENT,
          Xb = Ib && Ib.supportsUVs && sb.UV1,
          nb = Ib && Ib.supportsUV2s && sb.UV2,
          mb = Ib && Ib.supportsColors && sb.VERTEXCOLOR;
        for (let sb = 0; sb < Tb; sb++) Hb && bb.push("position" + sb), fb && bb.push("normal" + sb), Mb && bb.push("tangent" + sb), Xb && bb.push("uv_" + sb), nb && bb.push("uv2_" + sb), mb && bb.push("color" + sb), bb.length > Ub && kb.c.Error("Cannot add more vertex attributes for mesh " + cb.name)
      }
    }

    function mb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      bb.push("world0"), bb.push("world1"), bb.push("world2"), bb.push("world3"), cb && (bb.push("previousWorld0"), bb.push("previousWorld1"), bb.push("previousWorld2"), bb.push("previousWorld3"))
    }

    function lb(bb, cb) {
      const sb = bb.morphTargetManager;
      bb && sb && cb.setFloatArray("morphTargetInfluences", sb.influences)
    }

    function Qb(bb, cb) {
      cb.bindToEffect(bb, "Scene")
    }

    function eb(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ib = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Hb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Mb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Xb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (bb.texturesEnabled && Wb && Ub.e.ReflectionTextureEnabled) {
        if (sb.O4("reflectionMatrix", Wb.getReflectionTextureMatrix()), sb.updateFloat2("vReflectionInfos", Wb.level * bb.iblIntensity, Xb), Ib && Wb.boundingBoxSize) {
          const bb = Wb;
          sb.updateVector3("vReflectionPosition", bb.boundingBoxPosition), sb.updateVector3("vReflectionSize", bb.boundingBoxSize)
        }
        if (ab) {
          const bb = Wb.getSize().width;
          sb.updateFloat2("vReflectionFilteringInfo", bb, Math.log2(bb))
        }
        if (fb && !cb.USEIRRADIANCEMAP) {
          const bb = Wb.sphericalPolynomial;
          if (cb.USESPHERICALFROMREFLECTIONMAP && bb)
            if (cb.SPHERICAL_HARMONICS) {
              const cb = bb.preScaledHarmonics;
              sb.updateVector3("vSphericalL00", cb.l00), sb.updateVector3("vSphericalL1_1", cb.l1_1), sb.updateVector3("vSphericalL10", cb.l10), sb.updateVector3("vSphericalL11", cb.l11), sb.updateVector3("vSphericalL2_2", cb.l2_2), sb.updateVector3("vSphericalL2_1", cb.l2_1), sb.updateVector3("vSphericalL20", cb.l20), sb.updateVector3("vSphericalL21", cb.l21), sb.updateVector3("vSphericalL22", cb.l22)
            } else sb.updateFloat3("vSphericalX", bb.x.x, bb.x.y, bb.x.z), sb.updateFloat3("vSphericalY", bb.y.x, bb.y.y, bb.y.z), sb.updateFloat3("vSphericalZ", bb.z.x, bb.z.y, bb.z.z), sb.updateFloat3("vSphericalXX_ZZ", bb.xx.x - bb.zz.x, bb.xx.y - bb.zz.y, bb.xx.z - bb.zz.z), sb.updateFloat3("vSphericalYY_ZZ", bb.yy.x - bb.zz.x, bb.yy.y - bb.zz.y, bb.yy.z - bb.zz.z), sb.updateFloat3("vSphericalZZ", bb.zz.x, bb.zz.y, bb.zz.z), sb.updateFloat3("vSphericalXY", bb.xy.x, bb.xy.y, bb.xy.z), sb.updateFloat3("vSphericalYZ", bb.yz.x, bb.yz.y, bb.yz.z), sb.updateFloat3("vSphericalZX", bb.zx.x, bb.zx.y, bb.zx.z)
        } else Hb && cb.USEIRRADIANCEMAP && cb.USE_IRRADIANCE_DOMINANT_DIRECTION && Wb.irradianceTexture && sb.updateVector3("vReflectionDominantDirection", Wb.irradianceTexture._dominantDirection);
        Tb && sb.updateFloat3("vReflectionMicrosurfaceInfos", Wb.getSize().width, Wb.lodGenerationScale, Wb.lodGenerationOffset)
      }
      Mb && sb.updateColor3("vReflectionColor", kb)
    }

    function Cb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (kb && Ub.e.ReflectionTextureEnabled) {
        cb.LODBASEDMICROSFURACE ? sb.setTexture("reflectionSampler", kb) : (sb.setTexture("reflectionSampler", kb._lodTextureMid || kb), sb.setTexture("reflectionSamplerLow", kb._lodTextureLow || kb), sb.setTexture("reflectionSamplerHigh", kb._lodTextureHigh || kb)), cb.USEIRRADIANCEMAP && sb.setTexture("irradianceSampler", kb.irradianceTexture);
        const ab = bb.iblCdfGenerator;
        Wb && ab && sb.setTexture("icdfSampler", ab.getIcdfTexture())
      }
    }

    function Nb(bb, cb, sb) {
      cb._needUVs = !0, cb[sb] = !0, bb.optimizeUVAllocation && bb.getTextureMatrix().isIdentityAs3x2() ? (cb[sb + "DIRECTUV"] = bb.coordinatesIndex + 1, cb["MAINUV" + (bb.coordinatesIndex + 1)] = !0) : cb[sb + "DIRECTUV"] = 0
    }

    function Vb(bb, cb, sb) {
      const kb = bb.getTextureMatrix();
      cb.O4(sb + "Matrix", kb)
    }

    function Lb(bb, cb, sb) {
      sb.BAKED_VERTEX_ANIMATION_TEXTURE && sb.INSTANCES && bb.push("bakedVertexAnimationSettingsInstanced")
    }

    function ub(bb, cb, sb) {
      var kb;
      if (cb && bb && (bb.computeBonesUsingShaders && cb._bonesComputationForcedToCPU && (bb.computeBonesUsingShaders = !1), bb.useBones && bb.computeBonesUsingShaders && bb.skeleton)) {
        const Wb = bb.skeleton;
        if (Wb.isUsingTextureForMatrices && cb.getUniformIndex("boneTextureInfo") > -1) {
          const sb = Wb.getTransformMatrixTexture(bb);
          cb.setTexture("boneSampler", sb), cb.setFloat2("boneTextureInfo", Wb._textureWidth, Wb._textureHeight)
        } else {
          const ab = Wb.getTransformMatrices(bb);
          ab && (cb.setMatrices("mBones", ab), sb && bb.EY().prePassRenderer && bb.EY().prePassRenderer.getIndex(2) && (sb.previousBones[bb.uniqueId] || (sb.previousBones[bb.uniqueId] = ab.slice()), cb.setMatrices("mPreviousBones", sb.previousBones[bb.uniqueId]), kb = ab, sb.previousBones[bb.uniqueId].set(kb)))
        }
      }
    }

    function Yb(bb, cb, sb, kb, Wb) {
      let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      bb._bindLight(cb, sb, kb, Wb, ab)
    }
    const hb = 4,
      Jb = new WeakMap;

    function gb(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const ab = Math.min(cb.lightSources.length, Wb);
      for (let Tb = 0; Tb < ab; Tb++) {
        Yb(cb.lightSources[Tb], Tb, bb, sb, "boolean" === typeof kb ? kb : kb.SPECULARTERM, cb.receiveShadows)
      }
    }

    function Bb(bb, cb, sb, kb) {
      sb.NUM_BONE_INFLUENCERS > 0 && (kb.addCPUSkinningFallback(0, cb), bb.push("matricesIndices"), bb.push("matricesWeights"), sb.NUM_BONE_INFLUENCERS > 4 && (bb.push("matricesIndicesExtra"), bb.push("matricesWeightsExtra")))
    }

    function tb(bb, cb) {
      (cb.INSTANCES || cb.THIN_INSTANCES) && mb(bb, !!cb.PREPASS_VELOCITY), cb.INSTANCESCOLOR && bb.push("instanceColor")
    }

    function yb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wb = 0;
      for (let ab = 0; ab < sb && bb["LIGHT" + ab]; ab++) ab > 0 && (Wb = kb + ab, cb.addFallback(Wb, "LIGHT" + ab)), bb.SHADOWS || (bb["SHADOW" + ab] && cb.addFallback(kb, "SHADOW" + ab), bb["SHADOWPCF" + ab] && cb.addFallback(kb, "SHADOWPCF" + ab), bb["SHADOWPCSS" + ab] && cb.addFallback(kb, "SHADOWPCSS" + ab), bb["SHADOWPOISSON" + ab] && cb.addFallback(kb, "SHADOWPOISSON" + ab), bb["SHADOWESM" + ab] && cb.addFallback(kb, "SHADOWESM" + ab), bb["SHADOWCLOSEESM" + ab] && cb.addFallback(kb, "SHADOWCLOSEESM" + ab));
      return Wb
    }

    function Pb(bb, cb, sb, kb, Wb, ab, Tb) {
      let Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hb = arguments.length > 9 ? arguments[9] : void 0,
        fb = arguments.length > 10 ? arguments[10] : void 0;
      if (Tb._areMiscDirty) {
        Tb.LOGARITHMICDEPTH = sb, Tb.POINTSIZE = kb, Tb.FOG = Wb && function(bb, cb) {
          return cb.fogEnabled && bb.applyFog && 0 !== cb.fogMode
        }(bb, cb), Tb.NONUNIFORMSCALING = bb.nonUniformScaling, Tb.ALPHATEST = ab, Tb.DECAL_AFTER_DETAIL = Ub, Tb.USE_VERTEX_PULLING = Ib, Tb.RIGHT_HANDED = cb.useRightHandedSystem;
        const Mb = Ib ? Hb?.geometry?.getIndexBuffer() : null,
          Xb = !!Hb && Hb.isUnIndexed;
        Tb.VERTEX_PULLING_USE_INDEX_BUFFER = !!Mb && !Xb, Tb.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Mb || Xb) && Mb.is32Bits, Tb.VERTEXOUTPUT_INVARIANT = !!fb
      }
    }

    function Db(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!bb.lightsEnabled || kb) return !0;
      const Wb = cb.lightSources,
        ab = Math.min(Wb.length, sb);
      for (let Tb = 0; Tb < ab; Tb++)
        if (!Wb[Tb].areLightTexturesReady()) return !1;
      return !0
    }

    function Eb(bb, cb, sb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!sb._areLightsDirty) return sb._needNormals;
      const Ub = ab;
      ab = function(bb, cb) {
        const sb = bb.Sm().getCaps().maxUniformBuffersPerShaderStage;
        if (null == sb) return cb;
        const kb = Math.max(sb - hb, 1);
        return Math.min(cb, kb)
      }(bb, ab);
      let Ib = 0;
      const Hb = {
        needNormals: sb._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (bb.lightsEnabled && !Tb) {
        cb.lightSources.length > ab && ab < Ub && function(bb, cb, sb, Wb) {
          let ab = Jb.get(bb);
          ab || (ab = new Set, Jb.set(bb, ab)), ab.has(Wb) || (ab.add(Wb), kb.c.Warn(`maxSimultaneousLights is ${cb} but this engine supports at most ${sb} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Wb} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Wb+hb} uniform buffers, over the device limit of ${bb.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${sb}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${sb} or less to silence this warning.`))
        }(bb.Sm(), Ub, ab, Math.min(cb.lightSources.length, Ub));
        for (const kb of cb.lightSources)
          if (Ob(bb, cb, kb, Ib, sb, Wb, Hb), Ib++, Ib === ab) break
      }
      sb.SPECULARTERM = Hb.specularEnabled, sb.SHADOWS = Hb.shadowEnabled;
      const fb = Math.max(ab, sb.MAXLIGHTCOUNT || 0);
      for (let kb = Ib; kb < fb; kb++) void 0 !== sb["LIGHT" + kb] && (sb["LIGHT" + kb] = !1, sb["HEMILIGHT" + kb] = !1, sb["POINTLIGHT" + kb] = !1, sb["DIRLIGHT" + kb] = !1, sb["SPOTLIGHT" + kb] = !1, sb["AREALIGHT" + kb] = !1, sb["CLUSTLIGHT" + kb] = !1, sb["SHADOW" + kb] = !1, sb["SHADOWCSM" + kb] = !1, sb["SHADOWCSMDEBUG" + kb] = !1, sb["SHADOWCSMNUM_CASCADES" + kb] = !1, sb["SHADOWCSMUSESHADOWMAXZ" + kb] = !1, sb["SHADOWCSMNOBLEND" + kb] = !1, sb["SHADOWCSM_RIGHTHANDED" + kb] = !1, sb["SHADOWPCF" + kb] = !1, sb["SHADOWPCSS" + kb] = !1, sb["SHADOWPOISSON" + kb] = !1, sb["SHADOWESM" + kb] = !1, sb["SHADOWCLOSEESM" + kb] = !1, sb["SHADOWCUBE" + kb] = !1, sb["SHADOWLOWQUALITY" + kb] = !1, sb["SHADOWMEDIUMQUALITY" + kb] = !1);
      sb.LIGHTCOUNT = Ib, sb.MAXLIGHTCOUNT = ab;
      const Mb = bb.Sm().getCaps();
      return void 0 === sb.SHADOWFLOAT && (Hb.needRebuild = !0), sb.SHADOWFLOAT = Hb.shadowEnabled && (Mb.textureFloatRender && Mb.textureFloatLinearFiltering || Mb.textureHalfFloatRender && Mb.textureHalfFloatLinearFiltering), sb.LIGHTMAPEXCLUDED = Hb.lightmapMode, Hb.needRebuild && sb.rebuild(), Hb.needNormals
    }

    function ib(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (cb && Ub.e.ReflectionTextureEnabled) {
        if (!cb.isReadyOrNotBlocking()) return !1;
        sb._needNormals = !0, sb.REFLECTION = !0, sb.GAMMAREFLECTION = cb.gammaSpace, sb.RGBDREFLECTION = cb.isRGBD, sb.LODINREFLECTIONALPHA = cb.lodLevelInAlpha, sb.LINEARSPECULARREFLECTION = cb.linearSpecularLOD, sb.USEIRRADIANCEMAP = !1, sb.LODBASEDMICROSFURACE = bb.Sm().getCaps().textureLOD;
        const Tb = bb.Sm();
        switch (kb && Wb > 0 ? (sb.NUM_SAMPLES = "" + Wb, Tb._features.needTypeSuffixInShaderConstants && (sb.NUM_SAMPLES = sb.NUM_SAMPLES + "u"), sb.REALTIME_FILTERING = !0, bb.iblCdfGenerator && (sb.IBL_CDF_FILTERING = !0)) : sb.REALTIME_FILTERING = !1, sb.INVERTCUBICMAP = 6 === cb.coordinatesMode, sb.REFLECTIONMAP_3D = cb.isCube, sb.REFLECTIONMAP_OPPOSITEZ = sb.REFLECTIONMAP_3D && bb.useRightHandedSystem ? !cb.invertZ : cb.invertZ, sb.REFLECTIONMAP_CUBIC = !1, sb.REFLECTIONMAP_EXPLICIT = !1, sb.REFLECTIONMAP_PLANAR = !1, sb.REFLECTIONMAP_PROJECTION = !1, sb.REFLECTIONMAP_SKYBOX = !1, sb.REFLECTIONMAP_SPHERICAL = !1, sb.REFLECTIONMAP_EQUIRECTANGULAR = !1, sb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, sb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, cb.coordinatesMode) {
          case 0:
            sb.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            sb.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            sb.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            sb.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            sb.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            sb.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            sb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            sb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            sb.REFLECTIONMAP_CUBIC = !0, sb.USE_LOCAL_REFLECTIONMAP_CUBIC = !!cb.boundingBoxSize
        }
        5 !== cb.coordinatesMode && (cb.irradianceTexture ? (sb.USEIRRADIANCEMAP = !0, sb.USESPHERICALFROMREFLECTIONMAP = !1, sb.USESPHERICALINVERTEX = !1, cb.irradianceTexture._dominantDirection ? sb.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : sb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : cb.isCube && (sb.USESPHERICALFROMREFLECTIONMAP = !0, sb.USEIRRADIANCEMAP = !1, sb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, sb.USESPHERICALINVERTEX = ab))
      } else sb.REFLECTION = !1, sb.REFLECTIONMAP_3D = !1, sb.REFLECTIONMAP_SPHERICAL = !1, sb.REFLECTIONMAP_PLANAR = !1, sb.REFLECTIONMAP_CUBIC = !1, sb.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, sb.REFLECTIONMAP_PROJECTION = !1, sb.REFLECTIONMAP_SKYBOX = !1, sb.REFLECTIONMAP_EXPLICIT = !1, sb.REFLECTIONMAP_EQUIRECTANGULAR = !1, sb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, sb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, sb.INVERTCUBICMAP = !1, sb.USESPHERICALFROMREFLECTIONMAP = !1, sb.USEIRRADIANCEMAP = !1, sb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, sb.USESPHERICALINVERTEX = !1, sb.REFLECTIONMAP_OPPOSITEZ = !1, sb.LODINREFLECTIONALPHA = !1, sb.GAMMAREFLECTION = !1, sb.RGBDREFLECTION = !1, sb.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Ob(bb, cb, sb, kb, Wb, Tb, Ub) {
      switch (Ub.needNormals = !0, void 0 === Wb["LIGHT" + kb] && (Ub.needRebuild = !0), Wb["LIGHT" + kb] = !0, Wb["SPOTLIGHT" + kb] = !1, Wb["HEMILIGHT" + kb] = !1, Wb["POINTLIGHT" + kb] = !1, Wb["DIRLIGHT" + kb] = !1, Wb["AREALIGHT" + kb] = !1, Wb["CLUSTLIGHT" + kb] = !1, sb.prepareLightSpecificDefines(Wb, kb), Wb["LIGHT_FALLOFF_PHYSICAL" + kb] = !1, Wb["LIGHT_FALLOFF_GLTF" + kb] = !1, Wb["LIGHT_FALLOFF_STANDARD" + kb] = !1, sb.falloffType) {
        case ab.b.FALLOFF_GLTF:
          Wb["LIGHT_FALLOFF_GLTF" + kb] = !0;
          break;
        case ab.b.FALLOFF_PHYSICAL:
          Wb["LIGHT_FALLOFF_PHYSICAL" + kb] = !0;
          break;
        case ab.b.FALLOFF_STANDARD:
          Wb["LIGHT_FALLOFF_STANDARD" + kb] = !0
      }
      if (Tb && !sb.specular.equalsFloats(0, 0, 0) && (Ub.specularEnabled = !0), Wb["SHADOW" + kb] = !1, Wb["SHADOWCSM" + kb] = !1, Wb["SHADOWCSMDEBUG" + kb] = !1, Wb["SHADOWCSMNUM_CASCADES" + kb] = !1, Wb["SHADOWCSMUSESHADOWMAXZ" + kb] = !1, Wb["SHADOWCSMNOBLEND" + kb] = !1, Wb["SHADOWCSM_RIGHTHANDED" + kb] = !1, Wb["SHADOWPCF" + kb] = !1, Wb["SHADOWPCSS" + kb] = !1, Wb["SHADOWPOISSON" + kb] = !1, Wb["SHADOWESM" + kb] = !1, Wb["SHADOWCLOSEESM" + kb] = !1, Wb["SHADOWCUBE" + kb] = !1, Wb["SHADOWLOWQUALITY" + kb] = !1, Wb["SHADOWMEDIUMQUALITY" + kb] = !1, cb && cb.receiveShadows && bb.shadowsEnabled && sb.shadowEnabled) {
        const cb = sb.getShadowGenerator(bb.activeCamera) ?? sb.getShadowGenerator();
        if (cb) {
          const bb = cb.getShadowMap();
          bb && bb.renderList && bb.renderList.length > 0 && (Ub.shadowEnabled = !0, cb.prepareDefines(Wb, kb))
        }
      }
      sb.lightmapMode != ab.b.LIGHTMAP_DEFAULT ? (Ub.lightmapMode = !0, Wb["LIGHTMAPEXCLUDED" + kb] = !0, Wb["LIGHTMAPNOSPECULAR" + kb] = sb.lightmapMode == ab.b.LIGHTMAP_SHADOWSONLY) : (Wb["LIGHTMAPEXCLUDED" + kb] = !1, Wb["LIGHTMAPNOSPECULAR" + kb] = !1)
    }

    function Gb(bb, cb, sb, kb, Wb) {
      let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ib = function(bb, cb) {
          let sb = !1;
          if (bb.activeCamera) {
            const kb = cb.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Wb = cb.CAMERA_PERSPECTIVE ? 1 : 0,
              ab = 1 === bb.activeCamera.mode ? 1 : 0,
              Tb = 0 === bb.activeCamera.mode ? 1 : 0;
            (kb ^ ab || Wb ^ Tb) && (cb.CAMERA_ORTHOGRAPHIC = 1 === ab, cb.CAMERA_PERSPECTIVE = 1 === Tb, sb = !0)
          }
          return sb
        }(bb, kb);
      !1 !== ab && (Ib = (0, Tb.i)(sb, bb, kb)), kb.DEPTHPREPASS !== !cb.getColorWrite() && (kb.DEPTHPREPASS = !kb.DEPTHPREPASS, Ib = !0), kb.INSTANCES !== Wb && (kb.INSTANCES = Wb, Ib = !0), kb.THIN_INSTANCES !== Ub && (kb.THIN_INSTANCES = Ub, Ib = !0), Ib && kb.markAsUnprocessed()
    }
    const Kb = 40,
      Zb = 64,
      zb = new WeakMap,
      qb = new WeakSet;

    function db(bb, cb, sb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!cb._areAttributesDirty && cb._needNormals === cb._normals && cb._needUVs === cb._uvs) return !1;
      cb._normals = cb._needNormals, cb._uvs = cb._needUVs, cb.NORMAL = cb._needNormals && bb.isVerticesDataPresent("normal"), cb._needNormals && bb.isVerticesDataPresent("tangent") && (cb.TANGENT = !0);
      for (let kb = 1; kb <= 6; ++kb) cb["UV" + kb] = !!cb._needUVs && bb.isVerticesDataPresent(`uv${1===kb?"":kb}`);
      if (sb) {
        const sb = bb.useVertexColors && bb.isVerticesDataPresent("color");
        cb.VERTEXCOLOR = sb, cb.VERTEXALPHA = bb.hasVertexAlpha && sb && Tb
      }
      return bb.isVerticesDataPresent("instanceColor") && (bb.ykb || bb.hasThinInstances) && (cb.INSTANCESCOLOR = !0), Wb && function(bb, cb) {
        if (bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          cb.NUM_BONE_INFLUENCERS = bb.numBoneInfluencers;
          const sb = void 0 !== cb.BONETEXTURE;
          if (bb.skeleton.isUsingTextureForMatrices && sb) cb.BONETEXTURE = !0;
          else {
            cb.BonesPerMesh = bb.skeleton.bones.length + 1, cb.BONETEXTURE = !sb && void 0;
            const Wb = bb.EY(),
              ab = Wb.prePassRenderer;
            if (ab && ab.enabled) {
              const sb = -1 === ab.excludedSkinnedMesh.indexOf(bb);
              cb.BONES_VELOCITY_ENABLED = sb
            }
            const Tb = !0 === cb.MULTIVIEW,
              Ub = 2 * cb.BonesPerMesh + (Tb ? 1 : 0);
            if (zb.get(bb.skeleton) !== Ub) {
              zb.set(bb.skeleton, Ub);
              const sb = Wb.Sm().getCaps().maxVertexUniformVectors;
              if (sb && !qb.has(bb.skeleton)) {
                const Wb = 4 * cb.BonesPerMesh,
                  ab = Tb ? Zb : Kb,
                  Ub = Math.max(sb - ab, 0);
                (Wb > Ub || Tb && 3 * Wb > sb) && (qb.add(bb.skeleton), kb.c.Warn(`Skeleton "${bb.skeleton.name}": ${bb.skeleton.bones.length} bones stored as vertex uniforms use ${Wb} of ~${Ub} usable uniform vectors${Tb?" (multiview)":""} on a device reporting ${sb}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else cb.NUM_BONE_INFLUENCERS = 0, cb.BonesPerMesh = 0, void 0 !== cb.BONETEXTURE && (cb.BONETEXTURE = !1)
      }(bb, cb), ab && function(bb, cb) {
        const sb = bb.morphTargetManager;
        sb ? (cb.MORPHTARGETS_UV = sb.supportsUVs && cb.UV1, cb.MORPHTARGETS_UV2 = sb.supportsUV2s && cb.UV2, cb.MORPHTARGETS_TANGENT = sb.supportsTangents && cb.TANGENT, cb.MORPHTARGETS_NORMAL = sb.supportsNormals && cb.NORMAL, cb.MORPHTARGETS_POSITION = sb.supportsPositions, cb.MORPHTARGETS_COLOR = sb.supportsColors, cb.MORPHTARGETTEXTURE_HASUVS = sb.hasUVs, cb.MORPHTARGETTEXTURE_HASUV2S = sb.hasUV2s, cb.MORPHTARGETTEXTURE_HASTANGENTS = sb.hasTangents, cb.MORPHTARGETTEXTURE_HASNORMALS = sb.hasNormals, cb.MORPHTARGETTEXTURE_HASPOSITIONS = sb.hasPositions, cb.MORPHTARGETTEXTURE_HASCOLORS = sb.hasColors, cb.NUM_MORPH_INFLUENCERS = sb.numMaxInfluencers || sb.numInfluencers, cb.MORPHTARGETS = cb.NUM_MORPH_INFLUENCERS > 0, cb.MORPHTARGETS_TEXTURE = sb.isUsingTextureForTargets) : (cb.MORPHTARGETS_UV = !1, cb.MORPHTARGETS_UV2 = !1, cb.MORPHTARGETS_TANGENT = !1, cb.MORPHTARGETS_NORMAL = !1, cb.MORPHTARGETS_POSITION = !1, cb.MORPHTARGETS_COLOR = !1, cb.MORPHTARGETTEXTURE_HASUVS = !1, cb.MORPHTARGETTEXTURE_HASUV2S = !1, cb.MORPHTARGETTEXTURE_HASTANGENTS = !1, cb.MORPHTARGETTEXTURE_HASNORMALS = !1, cb.MORPHTARGETTEXTURE_HASPOSITIONS = !1, cb.MORPHTARGETTEXTURE_HAS_COLORS = !1, cb.MORPHTARGETS = !1, cb.NUM_MORPH_INFLUENCERS = 0)
      }(bb, cb), Ub && function(bb, cb) {
        const sb = bb.bakedVertexAnimationManager;
        cb.BAKED_VERTEX_ANIMATION_TEXTURE = !(!sb || !sb.isEnabled)
      }(bb, cb), !0
    }

    function Ab(bb, cb) {
      if (bb.activeCamera) {
        const sb = cb.MULTIVIEW;
        cb.MULTIVIEW = null !== bb.activeCamera.outputRenderTarget && bb.activeCamera.outputRenderTarget.getViewCount() > 1, cb.MULTIVIEW != sb && cb.markAsUnprocessed()
      }
    }

    function wb(bb, cb, sb) {
      const kb = cb.ORDER_INDEPENDENT_TRANSPARENCY,
        Wb = cb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      cb.ORDER_INDEPENDENT_TRANSPARENCY = bb.useOrderIndependentTransparency && sb, cb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !bb.Sm().getCaps().textureFloatLinearFiltering, kb === cb.ORDER_INDEPENDENT_TRANSPARENCY && Wb === cb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || cb.markAsUnprocessed()
    }

    function rb(bb, cb, sb) {
      const kb = cb.PREPASS;
      if (!cb._arePrePassDirty) return;
      const Wb = [{
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
      if (bb.prePassRenderer && bb.prePassRenderer.enabled && sb) {
        cb.PREPASS = !0, cb.SCENE_MRT_COUNT = bb.prePassRenderer.mrtCount, cb.PREPASS_NORMAL_WORLDSPACE = bb.prePassRenderer.generateNormalsInWorldSpace, cb.PREPASS_COLOR = !0, cb.PREPASS_COLOR_INDEX = 0;
        for (let sb = 0; sb < Wb.length; sb++) {
          const kb = bb.prePassRenderer.getIndex(Wb[sb].type); - 1 !== kb ? (cb[Wb[sb].define] = !0, cb[Wb[sb].index] = kb) : cb[Wb[sb].define] = !1
        }
      } else {
        cb.PREPASS = !1;
        for (let bb = 0; bb < Wb.length; bb++) cb[Wb[bb].define] = !1
      }
      cb.PREPASS != kb && (cb.markAsUnprocessed(), cb.markAsImageProcessingDirty())
    }

    function ob(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Wb && Wb.push("Light" + bb), ab || (cb.push("vLightData" + bb, "vLightDiffuse" + bb, "vLightSpecular" + bb, "vLightDirection" + bb, "vLightWidth" + bb, "vLightHeight" + bb, "vLightFalloff" + bb, "vLightGround" + bb, "vSliceData" + bb, "vSliceRanges" + bb, "lightMatrix" + bb, "shadowsInfo" + bb, "depthValues" + bb), sb.push("shadowTexture" + bb), sb.push("depthTexture" + bb), cb.push("viewFrustumZ" + bb, "cascadeBlendFactor" + bb, "lightSizeUVCorrection" + bb, "depthCorrection" + bb, "penumbraDarkness" + bb, "frustumLengths" + bb), kb && (sb.push("projectionLightTexture" + bb), cb.push("textureProjectionMatrix" + bb)), Tb && sb.push("iesLightTexture" + bb), Ib && sb.push("rectAreaLightEmissionTexture" + bb), Ub && (sb.push("lightDataTexture" + bb), Hb || sb.push("tileMaskTexture" + bb)))
    }

    function Sb(bb, cb, sb) {
      const kb = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      sb && kb.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), bb.push(...kb);
      cb.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Rb(bb, cb, sb) {
      let kb, Wb, ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Tb = null;
      if (bb.uniformsNames) {
        const Ub = bb;
        kb = Ub.uniformsNames, Wb = Ub.uniformBuffersNames, cb = Ub.samplers, sb = Ub.defines, ab = Ub.maxSimultaneousLights || 0, Tb = Ub.shaderLanguage ?? null
      } else kb = bb, cb || (cb = []);
      for (let Ub = 0; Ub < ab && sb["LIGHT" + Ub]; Ub++) ob(Ub, kb, cb, sb["PROJECTEDLIGHTTEXTURE" + Ub], Wb, !1, sb["IESLIGHTTEXTURE" + Ub], sb["CLUSTLIGHT" + Ub], sb["RECTAREALIGHTEMISSIONTEXTURE" + Ub], 1 === Tb);
      sb.NUM_MORPH_INFLUENCERS && (kb.push("morphTargetInfluences"), kb.push("morphTargetCount")), sb.BAKED_VERTEX_ANIMATION_TEXTURE && (kb.push("bakedVertexAnimationSettings"), kb.push("bakedVertexAnimationTextureSizeInverted"), kb.push("bakedVertexAnimationTime"), cb.push("bakedVertexAnimationTexture"))
    }

    function vb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      bb.addUniform("vReflectionInfos", 2), bb.addUniform("reflectionMatrix", 16), cb && bb.addUniform("vReflectionMicrosurfaceInfos", 3), sb && (bb.addUniform("vReflectionPosition", 3), bb.addUniform("vReflectionSize", 3)), kb && (bb.addUniform("vReflectionFilteringInfo", 2), bb.addUniform("vReflectionDominantDirection", 3)), ab && bb.addUniform("vReflectionColor", 3), Wb && (bb.addUniform("vSphericalL00", 3), bb.addUniform("vSphericalL1_1", 3), bb.addUniform("vSphericalL10", 3), bb.addUniform("vSphericalL11", 3), bb.addUniform("vSphericalL2_2", 3), bb.addUniform("vSphericalL2_1", 3), bb.addUniform("vSphericalL20", 3), bb.addUniform("vSphericalL21", 3), bb.addUniform("vSphericalL22", 3), bb.addUniform("vSphericalX", 3), bb.addUniform("vSphericalY", 3), bb.addUniform("vSphericalZ", 3), bb.addUniform("vSphericalXX_ZZ", 3), bb.addUniform("vSphericalYY_ZZ", 3), bb.addUniform("vSphericalZZ", 3), bb.addUniform("vSphericalXY", 3), bb.addUniform("vSphericalYZ", 3), bb.addUniform("vSphericalZX", 3))
    }
  },
  39774: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(36656),
      Wb = sb(39730);
    class ab extends Wb.e {
      constructor(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(bb, cb, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new kb.e, this._storeEffectOnSubMeshes = sb
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(bb, cb) {
        return !!bb && (!this._storeEffectOnSubMeshes || (!bb.XV || 0 === bb.XV.length || this.isReadyForSubMesh(bb, bb.XV[0], cb)))
      }
      _isReadyForSubMesh(bb) {
        const cb = bb.materialDefines;
        return !(this.checkReadyOnEveryCall || !bb.effect || !cb || cb._renderId !== this.EY().getRenderId())
      }
      bindOnlyWorldMatrix(bb) {
        this._activeEffect.setMatrix("world", bb)
      }
      bindOnlyNormalMatrix(bb) {
        this._activeEffect.setMatrix("normalMatrix", bb)
      }
      bind(bb, cb) {
        cb && this.bindForSubMesh(bb, cb, cb.XV[0])
      }
      _afterBind(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(bb, cb, sb), this.EY()._cachedEffect = cb, sb ? sb._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return sb._drawWrapper._forceRebindOnNextCall || bb.isCachedMaterialInvalid(this, cb, kb)
      }
      dispose(bb, cb, sb) {
        this._activeEffect = void 0, super.dispose(bb, cb, sb)
      }
    }
  },
  39787: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      h: () => Wb
    });
    const kb = new WeakMap;

    function Wb(bb) {
      const cb = bb.getVertexBuffers();
      if (!cb) return null;
      let sb = kb.get(bb);
      if (sb) {
        let bb = !1;
        for (const kb in cb)
          if (!sb.has(kb)) {
            bb = !0;
            break
          } if (!bb) return sb
      } else sb = new Map, kb.set(bb, sb);
      for (const kb in cb) {
        const bb = cb[kb];
        if (bb) {
          const cb = bb.byteOffset,
            Wb = bb.byteStride,
            ab = bb.type,
            Tb = bb.normalized;
          sb.set(kb, {
            offset: cb,
            stride: Wb,
            type: ab,
            normalized: Tb
          })
        }
      }
      return sb
    }

    function ab(bb, cb) {
      cb.forEach(((cb, sb) => {
        const kb = `vp_${sb}_info`;
        bb.setFloat4(kb, cb.offset, cb.stride, cb.type, cb.normalized ? 1 : 0)
      }))
    }
  },
  39752: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      e: () => Ib
    });
    var kb = sb(39414),
      Wb = sb(36656),
      ab = sb(39418);
    let Tb = (() => {
      var bb;
      let cb, sb, Wb = [];
      return bb = class {
        static extractMinAndMaxIndexed(bb, cb, sb, kb, Wb, ab) {
          for (let Tb = sb; Tb < sb + kb; Tb++) {
            const sb = 3 * cb[Tb],
              kb = bb[sb],
              Ub = bb[sb + 1],
              Ib = bb[sb + 2];
            Wb.minimizeInPlaceFromFloats(kb, Ub, Ib), ab.maximizeInPlaceFromFloats(kb, Ub, Ib)
          }
        }
        static extractMinAndMax(bb, cb, sb, kb, Wb, ab) {
          for (let Tb = cb, Ub = cb * kb; Tb < cb + sb; Tb++, Ub += kb) {
            const cb = bb[Ub],
              sb = bb[Ub + 1],
              kb = bb[Ub + 2];
            Wb.minimizeInPlaceFromFloats(cb, sb, kb), ab.maximizeInPlaceFromFloats(cb, sb, kb)
          }
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [ab.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], sb = [ab.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, kb.j)(bb, null, cb, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMaxIndexed" in bb,
            get: bb => bb.extractMinAndMaxIndexed
          },
          metadata: Tb
        }, null, Wb), (0, kb.j)(bb, null, sb, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMax" in bb,
            get: bb => bb.extractMinAndMax
          },
          metadata: Tb
        }, null, Wb), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        }), (0, kb.m)(bb, Wb)
      })(), bb
    })();

    function Ub(bb, cb, sb, kb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Ub = new Wb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Ib = new Wb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Tb.extractMinAndMaxIndexed(bb, cb, sb, kb, Ub, Ib), ab && (Ub.x -= Ub.x * ab.x + ab.y, Ub.y -= Ub.y * ab.x + ab.y, Ub.z -= Ub.z * ab.x + ab.y, Ib.x += Ib.x * ab.x + ab.y, Ib.y += Ib.y * ab.x + ab.y, Ib.z += Ib.z * ab.x + ab.y), {
        minimum: Ub,
        maximum: Ib
      }
    }

    function Ib(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        ab = arguments.length > 4 ? arguments[4] : void 0;
      const Ub = new Wb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Ib = new Wb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return ab || (ab = 3), Tb.extractMinAndMax(bb, cb, sb, ab, Ub, Ib), kb && (Ub.x -= Ub.x * kb.x + kb.y, Ub.y -= Ub.y * kb.x + kb.y, Ub.z -= Ub.z * kb.x + kb.y, Ib.x += Ib.x * kb.x + kb.y, Ib.y += Ib.y * kb.x + kb.y, Ib.z += Ib.z * kb.x + kb.y), {
        minimum: Ub,
        maximum: Ib
      }
    }
  },
  39737: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb
    });
    var kb, Wb = sb(39576),
      ab = sb(39741),
      Tb = sb(39745),
      Ub = sb(39752),
      Ib = sb(39755),
      Hb = sb(39296);
    class fb {
      get materialDefines() {
        const bb = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof bb ? null : bb
      }
      set materialDefines(bb) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = bb
      }
      _getDrawWrapper(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb = bb ?? this._engine.currentRenderPassId;
        let sb = this._drawWrappers[bb];
        return !sb && cb && (this._drawWrappers[bb] = sb = new Ib.b(this._mesh.EY().Sm())), sb
      }
      _removeDrawWrapper(bb) {
        let cb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[bb]?.dispose(cb), this._drawWrappers[bb] = void 0
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wb = this._drawWrapper;
        Wb.setEffect(bb, cb, kb), void 0 !== sb && (Wb.materialContext = sb), bb || (Wb.defines = null, Wb.materialContext = void 0)
      }
      resetDrawCache(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== bb) return void this._removeDrawWrapper(bb, !0, cb);
          for (const bb of this._drawWrappers) bb?.dispose(cb)
        }
        this._drawWrappers = []
      }
      static AddToMesh(bb, cb, sb, kb, Wb, ab, Tb) {
        return new fb(bb, cb, sb, kb, Wb, ab, Tb, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(bb, cb, sb, kb, Wb, ab, Tb) {
        let Ub = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Ib = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = bb, this.verticesStart = cb, this.verticesCount = sb, this.indexStart = kb, this.indexCount = Wb, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = ab, this._renderingMesh = Tb || ab, Ib && ab.XV.push(this), this._engine = this._mesh.EY().Sm(), this.resetDrawCache(), this._trianglePlanes = [], this._id = ab.XV.length - 1, Ub && (this.refreshBoundingInfo(), ab.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      PJ() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.PJ() : this._boundingInfo
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
      pm() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const cb = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!cb) return bb && this._mesh.EY()._hasDefaultMaterial ? this._mesh.EY().defaultMaterial : null;
        if (this._isMultiMaterial(cb)) {
          const bb = cb.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== bb && (this._currentMaterial = bb, this.resetDrawCache()), bb
        }
        return cb
      }
      _isMultiMaterial(bb) {
        return void 0 !== bb.getSubMaterial
      }
      refreshBoundingInfo() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (bb || (bb = this._renderingMesh.getVerticesData(Wb.l.PositionKind)), !bb) return this._boundingInfo = this._mesh.PJ(), this;
        const cb = this._renderingMesh.Gsb();
        let sb;
        if (0 === this.indexStart && this.indexCount === cb.length) {
          const bb = this._renderingMesh.PJ();
          sb = {
            minimum: bb.minimum.clone(),
            maximum: bb.maximum.clone()
          }
        } else sb = (0, Ub.d)(bb, cb, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(sb.minimum, sb.maximum) : this._boundingInfo = new Tb.c(sb.minimum, sb.maximum), this
      }
      _checkCollision(bb) {
        return this.PJ()._checkCollision(bb)
      }
      updateBoundingInfo(bb) {
        let cb = this.PJ();
        return cb || (this.refreshBoundingInfo(), cb = this.PJ()), cb && cb.update(bb), this
      }
      isInFrustum(bb) {
        const cb = this.PJ();
        return !!cb && cb.isInFrustum(bb, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(bb) {
        const cb = this.PJ();
        return !!cb && cb.isCompletelyInFrustum(bb)
      }
      render(bb) {
        return this._renderingMesh.render(this, bb, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(bb, cb) {
        if (!this._linesIndexBuffer) {
          const sb = 6 * Math.floor(this.indexCount / 3),
            kb = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(sb) : new Uint16Array(sb);
          let Wb = 0;
          if (0 === bb.length)
            for (let bb = this.indexStart; bb < this.indexStart + this.indexCount; bb += 3) kb[Wb++] = bb, kb[Wb++] = bb + 1, kb[Wb++] = bb + 1, kb[Wb++] = bb + 2, kb[Wb++] = bb + 2, kb[Wb++] = bb;
          else
            for (let cb = this.indexStart; cb < this.indexStart + this.indexCount; cb += 3) kb[Wb++] = bb[cb], kb[Wb++] = bb[cb + 1], kb[Wb++] = bb[cb + 1], kb[Wb++] = bb[cb + 2], kb[Wb++] = bb[cb + 2], kb[Wb++] = bb[cb];
          this._linesIndexBuffer = cb.createIndexBuffer(kb), this._linesIndexCount = kb.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(bb) {
        const cb = this.PJ();
        return !!cb && bb.intersectsBox(cb.boundingBox)
      }
      intersects(bb, cb, sb, kb, Wb) {
        const ab = this.pm();
        if (!ab) return null;
        let Tb = 3,
          Ub = !1;
        switch (ab.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Tb = 1, Ub = !0
        }
        return 4 === ab.fillMode ? sb.length ? this._intersectLines(bb, cb, sb, this._mesh.intersectionThreshold, kb) : this._intersectUnIndexedLines(bb, cb, sb, this._mesh.intersectionThreshold, kb) : !sb.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(bb, cb, sb, kb, Wb) : this._intersectTriangles(bb, cb, sb, Tb, Ub, kb, Wb)
      }
      _intersectLines(bb, cb, sb, kb, Wb) {
        let Tb = null;
        for (let Ub = this.indexStart; Ub < this.indexStart + this.indexCount; Ub += 2) {
          const Ib = cb[sb[Ub]],
            Hb = cb[sb[Ub + 1]],
            fb = bb.intersectionSegment(Ib, Hb, kb);
          if (!(fb < 0) && ((Wb || !Tb || fb < Tb.distance) && (Tb = new ab.c(null, null, fb), Tb.faceId = Ub / 2, Wb))) break
        }
        return Tb
      }
      _intersectUnIndexedLines(bb, cb, sb, kb, Wb) {
        let Tb = null;
        for (let Ub = this.verticesStart; Ub < this.verticesStart + this.verticesCount; Ub += 2) {
          const sb = cb[Ub],
            Ib = cb[Ub + 1],
            Hb = bb.intersectionSegment(sb, Ib, kb);
          if (!(Hb < 0) && ((Wb || !Tb || Hb < Tb.distance) && (Tb = new ab.c(null, null, Hb), Tb.faceId = Ub / 2, Wb))) break
        }
        return Tb
      }
      _intersectTriangles(bb, cb, sb, kb, Wb, ab, Tb) {
        let Ub = null,
          Ib = -1;
        for (let Hb = this.indexStart; Hb < this.indexStart + this.indexCount - (3 - kb); Hb += kb) {
          Ib++;
          const kb = sb[Hb],
            fb = sb[Hb + 1],
            Mb = sb[Hb + 2];
          if (Wb && 4294967295 === Mb) {
            Hb += 2;
            continue
          }
          const Xb = cb[kb],
            nb = cb[fb],
            mb = cb[Mb];
          if (!Xb || !nb || !mb) continue;
          if (Tb && !Tb(Xb, nb, mb, bb, kb, fb, Mb)) continue;
          const lb = bb.intersectsTriangle(Xb, nb, mb);
          if (lb) {
            if (lb.distance < 0) continue;
            if ((ab || !Ub || lb.distance < Ub.distance) && (Ub = lb, Ub.faceId = Ib, ab)) break
          }
        }
        return Ub
      }
      _intersectUnIndexedTriangles(bb, cb, sb, kb, Wb) {
        let ab = null;
        for (let Tb = this.verticesStart; Tb < this.verticesStart + this.verticesCount; Tb += 3) {
          const sb = cb[Tb],
            Ub = cb[Tb + 1],
            Ib = cb[Tb + 2];
          if (Wb && !Wb(sb, Ub, Ib, bb, -1, -1, -1)) continue;
          const Hb = bb.intersectsTriangle(sb, Ub, Ib);
          if (Hb) {
            if (Hb.distance < 0) continue;
            if ((kb || !ab || Hb.distance < ab.distance) && (ab = Hb, ab.faceId = Tb / 3, kb)) break
          }
        }
        return ab
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(bb, cb) {
        const sb = new fb(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, bb, cb, !1);
        if (!this.IsGlobal) {
          const bb = this.PJ();
          if (!bb) return sb;
          sb._boundingInfo = new Tb.c(bb.minimum, bb.maximum)
        }
        return sb
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.EY().Sm()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const cb = this._mesh.XV.indexOf(this);
        this._mesh.XV.splice(cb, 1), this.resetDrawCache(void 0, bb)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(bb, cb, sb, kb, Wb) {
        let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = Number.MAX_VALUE,
          Ub = -Number.MAX_VALUE;
        const Ib = (Wb || kb).Gsb();
        for (let Hb = cb; Hb < cb + sb; Hb++) {
          const bb = Ib[Hb];
          bb < Tb && (Tb = bb), bb > Ub && (Ub = bb)
        }
        return new fb(bb, Tb, Ub - Tb + 1, cb, sb, kb, Wb, ab)
      }
    }(kb = fb.prototype).projectToRef ?? (kb.projectToRef = (0, Hb.e)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);