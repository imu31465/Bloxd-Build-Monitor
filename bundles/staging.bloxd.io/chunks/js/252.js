export const id = 252;
export const ids = [252];
export const modules = {
  39404: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub) {
        this.bu = bb, this.bv = ab, this.distance = Ub, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39420: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(36410),
      Mb = Ub(36401),
      Tb = Ub(36405);
    class Eb {
      constructor(bb, ab, Ub) {
        this.vectors = (0, Ab.b)(8, Mb.m.Zero), this.center = Mb.m.Zero(), this.centerWorld = Mb.m.Zero(), this.extendSize = Mb.m.Zero(), this.extendSizeWorld = Mb.m.Zero(), this.directions = (0, Ab.b)(3, Mb.m.Zero), this.vectorsWorld = (0, Ab.b)(8, Mb.m.Zero), this.minimumWorld = Mb.m.Zero(), this.maximumWorld = Mb.m.Zero(), this.minimum = Mb.m.Zero(), this.maximum = Mb.m.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(bb, ab, Ub)
      }
      reConstruct(bb, ab, Ub) {
        const Ab = bb.x,
          Tb = bb.y,
          Eb = bb.z,
          Yb = ab.x,
          Bb = ab.y,
          eb = ab.z,
          vb = this.vectors;
        this.minimum.K9(Ab, Tb, Eb), this.maximum.K9(Yb, Bb, eb), vb[0].K9(Ab, Tb, Eb), vb[1].K9(Yb, Bb, eb), vb[2].K9(Yb, Tb, Eb), vb[3].K9(Ab, Bb, Eb), vb[4].K9(Ab, Tb, eb), vb[5].K9(Yb, Bb, Eb), vb[6].K9(Ab, Bb, eb), vb[7].K9(Yb, Tb, eb), ab.addToRef(bb, this.center).scaleInPlace(.5), ab.subtractToRef(bb, this.extendSize).scaleInPlace(.5), this._worldMatrix = Ub || Mb.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(bb) {
        const ab = Eb._TmpVector3,
          Ub = this.maximum.subtractToRef(this.minimum, ab[0]),
          Ab = Ub.length();
        Ub.normalizeFromLength(Ab);
        const Mb = Ab * bb,
          Tb = Ub.scaleInPlace(.5 * Mb),
          Yb = this.center.subtractToRef(Tb, ab[1]),
          Bb = this.center.addToRef(Tb, ab[2]);
        return this.reConstruct(Yb, Bb, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        const ab = this.minimumWorld,
          Ub = this.maximumWorld,
          Ab = this.directions,
          Tb = this.vectorsWorld,
          Eb = this.vectors;
        if (bb.isIdentity()) {
          ab.EUb(this.minimum), Ub.EUb(this.maximum);
          for (let bb = 0; bb < 8; ++bb) Tb[bb].EUb(Eb[bb]);
          this.extendSizeWorld.EUb(this.extendSize), this.centerWorld.EUb(this.center)
        } else {
          ab.B3(Number.MAX_VALUE), Ub.B3(-Number.MAX_VALUE);
          for (let Ab = 0; Ab < 8; ++Ab) {
            const Yb = Tb[Ab];
            Mb.m.TransformCoordinatesToRef(Eb[Ab], bb, Yb), ab.minimizeInPlace(Yb), Ub.maximizeInPlace(Yb)
          }
          Ub.subtractToRef(ab, this.extendSizeWorld).scaleInPlace(.5), Ub.addToRef(ab, this.centerWorld).scaleInPlace(.5)
        }
        Mb.m.FromArrayToRef(bb.m, 0, Ab[0]), Mb.m.FromArrayToRef(bb.m, 4, Ab[1]), Mb.m.FromArrayToRef(bb.m, 8, Ab[2]), this._worldMatrix = bb
      }
      isInFrustum(bb) {
        return Eb.IsInFrustum(this.vectorsWorld, bb)
      }
      isCompletelyInFrustum(bb) {
        return Eb.IsCompletelyInFrustum(this.vectorsWorld, bb)
      }
      intersectsPoint(bb) {
        const ab = this.minimumWorld,
          Ub = this.maximumWorld,
          Ab = ab.x,
          Mb = ab.y,
          Eb = ab.z,
          Yb = Ub.x,
          Bb = Ub.y,
          eb = Ub.z,
          vb = bb.x,
          Lb = bb.y,
          Pb = bb.z,
          Xb = -Tb.e;
        return !(Yb - vb < Xb || Xb > vb - Ab) && (!(Bb - Lb < Xb || Xb > Lb - Mb) && !(eb - Pb < Xb || Xb > Pb - Eb))
      }
      intersectsSphere(bb) {
        return Eb.IntersectsSphere(this.minimumWorld, this.maximumWorld, bb.centerWorld, bb.radiusWorld)
      }
      intersectsMinMax(bb, ab) {
        const Ub = this.minimumWorld,
          Ab = this.maximumWorld,
          Mb = Ub.x,
          Tb = Ub.y,
          Eb = Ub.z,
          Yb = Ab.x,
          Bb = Ab.y,
          eb = Ab.z,
          vb = bb.x,
          Lb = bb.y,
          Pb = bb.z,
          Xb = ab.x,
          jb = ab.y,
          Rb = ab.z;
        return !(Yb < vb || Mb > Xb) && (!(Bb < Lb || Tb > jb) && !(eb < Pb || Eb > Rb))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(bb, ab) {
        return bb.intersectsMinMax(ab.minimumWorld, ab.maximumWorld)
      }
      static IntersectsSphere(bb, ab, Ub, Ab) {
        const Tb = Eb._TmpVector3[0];
        Mb.m.ClampToRef(Ub, bb, ab, Tb);
        return Mb.m.DistanceSquared(Ub, Tb) <= Ab * Ab
      }
      static IsCompletelyInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; ++Ub) {
          const Ab = ab[Ub];
          for (let ab = 0; ab < 8; ++ab)
            if (Ab.dotCoordinate(bb[ab]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; ++Ub) {
          let Ab = !0;
          const Mb = ab[Ub];
          for (let ab = 0; ab < 8; ++ab)
            if (Mb.dotCoordinate(bb[ab]) >= 0) {
              Ab = !1;
              break
            } if (Ab) return !1
        }
        return !0
      }
    }
    Eb._TmpVector3 = (0, Ab.b)(3, Mb.m.Zero)
  },
  39413: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Lb
    });
    var Ab = Ub(36410),
      Mb = Ub(36401),
      Tb = Ub(39420);
    class Eb {
      constructor(bb, ab, Ub) {
        this.center = Mb.m.Zero(), this.centerWorld = Mb.m.Zero(), this.minimum = Mb.m.Zero(), this.maximum = Mb.m.Zero(), this.reConstruct(bb, ab, Ub)
      }
      reConstruct(bb, ab, Ub) {
        this.minimum.EUb(bb), this.maximum.EUb(ab);
        const Ab = Mb.m.Distance(bb, ab);
        ab.addToRef(bb, this.center).scaleInPlace(.5), this.radius = .5 * Ab, this._update(Ub || Mb.b.IdentityReadOnly)
      }
      scale(bb) {
        const ab = Eb._TmpVector3,
          Ub = this.maximum.subtractToRef(this.minimum, ab[0]),
          Ab = Ub.length();
        Ub.normalizeFromLength(Ab);
        const Mb = Ab * bb,
          Tb = Ub.scaleInPlace(.5 * Mb),
          Yb = this.center.subtractToRef(Tb, ab[1]),
          Bb = this.center.addToRef(Tb, ab[2]);
        return this.reConstruct(Yb, Bb, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        if (bb.isIdentity()) this.centerWorld.EUb(this.center), this.radiusWorld = this.radius;
        else {
          Mb.m.TransformCoordinatesToRef(this.center, bb, this.centerWorld);
          const ab = Eb._TmpVector3[0];
          Mb.m.TransformNormalFromFloatsToRef(1, 1, 1, bb, ab), this.radiusWorld = Math.max(Math.abs(ab.x), Math.abs(ab.y), Math.abs(ab.z)) * this.radius
        }
      }
      isInFrustum(bb) {
        const ab = this.centerWorld,
          Ub = this.radiusWorld;
        for (let Ab = 0; Ab < 6; Ab++)
          if (bb[Ab].dotCoordinate(ab) <= -Ub) return !1;
        return !0
      }
      isCenterInFrustum(bb) {
        const ab = this.centerWorld;
        for (let Ub = 0; Ub < 6; Ub++)
          if (bb[Ub].dotCoordinate(ab) < 0) return !1;
        return !0
      }
      intersectsPoint(bb) {
        const ab = Mb.m.DistanceSquared(this.centerWorld, bb);
        return !(this.radiusWorld * this.radiusWorld < ab)
      }
      static Intersects(bb, ab) {
        const Ub = Mb.m.DistanceSquared(bb.centerWorld, ab.centerWorld),
          Ab = bb.radiusWorld + ab.radiusWorld;
        return !(Ab * Ab < Ub)
      }
      static CreateFromCenterAndRadius(bb, ab, Ub) {
        this._TmpVector3[0].EUb(bb), this._TmpVector3[1].K9(0, 0, ab), this._TmpVector3[2].EUb(bb), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].MAb(this._TmpVector3[1]);
        const Ab = new Eb(this._TmpVector3[0], this._TmpVector3[2]);
        return Ab._worldMatrix = Ub || Mb.b.Identity(), Ab
      }
    }
    Eb._TmpVector3 = (0, Ab.b)(3, Mb.m.Zero);
    const Yb = {
        min: 0,
        max: 0
      },
      Bb = {
        min: 0,
        max: 0
      },
      eb = (bb, ab, Ub) => {
        const Ab = Mb.m.Dot(ab.centerWorld, bb),
          Tb = Math.abs(Mb.m.Dot(ab.directions[0], bb)) * ab.extendSize.x + Math.abs(Mb.m.Dot(ab.directions[1], bb)) * ab.extendSize.y + Math.abs(Mb.m.Dot(ab.directions[2], bb)) * ab.extendSize.z;
        Ub.min = Ab - Tb, Ub.max = Ab + Tb
      },
      vb = (bb, ab, Ub) => (eb(bb, ab, Yb), eb(bb, Ub, Bb), !(Yb.min > Bb.max || Bb.min > Yb.max));
    class Lb {
      constructor(bb, ab, Ub) {
        this._isLocked = !1, this.boundingBox = new Tb.e(bb, ab, Ub), this.BAb = new Eb(bb, ab, Ub)
      }
      reConstruct(bb, ab, Ub) {
        this.boundingBox.reConstruct(bb, ab, Ub), this.BAb.reConstruct(bb, ab, Ub)
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
        this._isLocked || (this.boundingBox._update(bb), this.BAb._update(bb))
      }
      centerOn(bb, ab) {
        const Ub = Lb._TmpVector3[0].EUb(bb).MAb(ab),
          Ab = Lb._TmpVector3[1].EUb(bb).addInPlace(ab);
        return this.boundingBox.reConstruct(Ub, Ab, this.boundingBox.getWorldMatrix()), this.BAb.reConstruct(Ub, Ab, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(bb) {
        const ab = Mb.m.Minimize(this.minimum, bb),
          Ub = Mb.m.Maximize(this.maximum, bb);
        return this.reConstruct(ab, Ub, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(bb) {
        const ab = Mb.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(ab);
        const Ub = Mb.j.Pj[0];
        return Mb.m.TransformCoordinatesToRef(bb.boundingBox.minimumWorld, ab, Ub), this.encapsulate(Ub), Mb.m.TransformCoordinatesToRef(bb.boundingBox.maximumWorld, ab, Ub), this.encapsulate(Ub), this
      }
      scale(bb) {
        return this.boundingBox.scale(bb), this.BAb.scale(bb), this
      }
      isInFrustum(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === ab || 3 === ab) && this.BAb.isCenterInFrustum(bb)) return !0;
        if (!this.BAb.isInFrustum(bb)) return !1;
        return !(1 !== ab && 3 !== ab) || this.boundingBox.isInFrustum(bb)
      }
      get diagonalLength() {
        const bb = this.boundingBox;
        return bb.maximumWorld.subtractToRef(bb.minimumWorld, Lb._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(bb) {
        return this.boundingBox.isCompletelyInFrustum(bb)
      }
      _checkCollision(bb) {
        return bb._canDoCollision(this.BAb.centerWorld, this.BAb.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(bb) {
        return !!this.BAb.centerWorld && (!!this.BAb.intersectsPoint(bb) && !!this.boundingBox.intersectsPoint(bb))
      }
      intersects(bb, ab) {
        if (!Eb.Intersects(this.BAb, bb.BAb)) return !1;
        if (!Tb.e.Intersects(this.boundingBox, bb.boundingBox)) return !1;
        if (!ab) return !0;
        const Ub = this.boundingBox,
          Ab = bb.boundingBox;
        return !!vb(Ub.directions[0], Ub, Ab) && (!!vb(Ub.directions[1], Ub, Ab) && (!!vb(Ub.directions[2], Ub, Ab) && (!!vb(Ab.directions[0], Ub, Ab) && (!!vb(Ab.directions[1], Ub, Ab) && (!!vb(Ab.directions[2], Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[0], Ab.directions[0]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[0], Ab.directions[1]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[0], Ab.directions[2]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[1], Ab.directions[0]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[1], Ab.directions[1]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[1], Ab.directions[2]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[2], Ab.directions[0]), Ub, Ab) && (!!vb(Mb.m.Cross(Ub.directions[2], Ab.directions[1]), Ub, Ab) && !!vb(Mb.m.Cross(Ub.directions[2], Ab.directions[2]), Ub, Ab))))))))))))))
      }
    }
    Lb._TmpVector3 = (0, Ab.b)(2, Mb.m.Zero)
  },
  39440: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      f: () => Bb,
      g: () => Yb,
      k: () => Eb
    });
    var Ab = Ub(39250),
      Mb = Ub(36401);

    function Tb(bb) {
      -1 === bb.indexOf("vClipPlane") && bb.push("vClipPlane"), -1 === bb.indexOf("vClipPlane2") && bb.push("vClipPlane2"), -1 === bb.indexOf("vClipPlane3") && bb.push("vClipPlane3"), -1 === bb.indexOf("vClipPlane4") && bb.push("vClipPlane4"), -1 === bb.indexOf("vClipPlane5") && bb.push("vClipPlane5"), -1 === bb.indexOf("vClipPlane6") && bb.push("vClipPlane6")
    }

    function Eb(bb, ab, Ub) {
      const Ab = !!(bb.clipPlane ?? ab.clipPlane),
        Mb = !!(bb.clipPlane2 ?? ab.clipPlane2),
        Tb = !!(bb.clipPlane3 ?? ab.clipPlane3),
        Eb = !!(bb.clipPlane4 ?? ab.clipPlane4),
        Yb = !!(bb.clipPlane5 ?? ab.clipPlane5),
        Bb = !!(bb.clipPlane6 ?? ab.clipPlane6);
      Ab && Ub.push("#define CLIPPLANE"), Mb && Ub.push("#define CLIPPLANE2"), Tb && Ub.push("#define CLIPPLANE3"), Eb && Ub.push("#define CLIPPLANE4"), Yb && Ub.push("#define CLIPPLANE5"), Bb && Ub.push("#define CLIPPLANE6")
    }

    function Yb(bb, ab, Ub) {
      let Ab = !1;
      const Mb = !!(bb.clipPlane ?? ab.clipPlane),
        Tb = !!(bb.clipPlane2 ?? ab.clipPlane2),
        Eb = !!(bb.clipPlane3 ?? ab.clipPlane3),
        Yb = !!(bb.clipPlane4 ?? ab.clipPlane4),
        Bb = !!(bb.clipPlane5 ?? ab.clipPlane5),
        eb = !!(bb.clipPlane6 ?? ab.clipPlane6);
      return Ub.CLIPPLANE !== Mb && (Ub.CLIPPLANE = Mb, Ab = !0), Ub.CLIPPLANE2 !== Tb && (Ub.CLIPPLANE2 = Tb, Ab = !0), Ub.CLIPPLANE3 !== Eb && (Ub.CLIPPLANE3 = Eb, Ab = !0), Ub.CLIPPLANE4 !== Yb && (Ub.CLIPPLANE4 = Yb, Ab = !0), Ub.CLIPPLANE5 !== Bb && (Ub.CLIPPLANE5 = Bb, Ab = !0), Ub.CLIPPLANE6 !== eb && (Ub.CLIPPLANE6 = eb, Ab = !0), Ab
    }

    function Bb(bb, ab, Ub) {
      let Ab = ab.clipPlane ?? Ub.clipPlane;
      eb(bb, "vClipPlane", Ab), Ab = ab.clipPlane2 ?? Ub.clipPlane2, eb(bb, "vClipPlane2", Ab), Ab = ab.clipPlane3 ?? Ub.clipPlane3, eb(bb, "vClipPlane3", Ab), Ab = ab.clipPlane4 ?? Ub.clipPlane4, eb(bb, "vClipPlane4", Ab), Ab = ab.clipPlane5 ?? Ub.clipPlane5, eb(bb, "vClipPlane5", Ab), Ab = ab.clipPlane6 ?? Ub.clipPlane6, eb(bb, "vClipPlane6", Ab)
    }

    function eb(bb, ab, Ub) {
      if (Ub) {
        const Tb = Ab.d.oN()?.floatingOriginOffset || Mb.m.ZeroReadOnly;
        bb.setFloat4(ab, Ub.normal.x, Ub.normal.y, Ub.normal.z, Ub.d + Mb.m.Dot(Ub.normal, Tb))
      }
    }
  },
  39460: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(bb, ab) {
        this._defines[bb] || (bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb), this._defines[bb] = new Array), this._defines[bb].push(ab)
      }
      addCPUSkinningFallback(bb, ab) {
        this._mesh = ab, bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(bb, ab) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, bb = bb.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), ab._bonesComputationForcedToCPU = !0;
          const Ub = this._mesh.oN();
          for (let bb = 0; bb < Ub.meshes.length; bb++) {
            const Ab = Ub.meshes[bb];
            if (Ab.material) {
              if (Ab.computeBonesUsingShaders && 0 !== Ab.numBoneInfluencers)
                if (Ab.material.getEffect() === ab) Ab.computeBonesUsingShaders = !1;
                else if (Ab.mD)
                for (const bb of Ab.mD) {
                  if (bb.effect === ab) {
                    Ab.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Ab.computeBonesUsingShaders && Ab.numBoneInfluencers > 0 && (Ab.computeBonesUsingShaders = !1)
          }
        } else {
          const ab = this._defines[this._currentRank];
          if (ab)
            for (let Ub = 0; Ub < ab.length; Ub++) bb = bb.replace("#define " + ab[Ub], "");
          this._currentRank++
        }
        return bb
      }
    }
  },
  39394: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Zb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(39195),
      Eb = Ub(36431),
      Yb = Ub(36425),
      Bb = Ub(39400),
      eb = Ub(39231),
      vb = Ub(37989),
      Lb = Ub(37122),
      Pb = Ub(39425),
      Xb = Ub(39124);
    let jb = (() => {
      var bb;
      let ab, Ub, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, jb, Rb, kb = [];
      return bb = class {
        constructor() {
          this._func = (0, Ab.k)(this, kb), this.reset()
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
          Xb.b.Clone((() => bb), this)
        }
        serialize() {
          return Xb.b.Serialize(this)
        }
        parse(bb, ab, Ub) {
          Xb.b.Parse((() => this), bb, ab, Ub)
        }
      }, (() => {
        const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], Eb = [(0, Mb.K)()], Yb = [(0, Mb.K)()], Bb = [(0, Mb.K)()], eb = [(0, Mb.K)()], vb = [(0, Mb.K)()], Lb = [(0, Mb.K)()], Pb = [(0, Mb.K)()], jb = [(0, Mb.K)()], Rb = [(0, Mb.K)()], (0, Ab.h)(bb, null, ab, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: bb => "func" in bb,
            get: bb => bb.func
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Ub, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: bb => "backFunc" in bb,
            get: bb => bb.backFunc
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Tb, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcRef" in bb,
            get: bb => bb.funcRef
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Eb, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcMask" in bb,
            get: bb => bb.funcMask
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Yb, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilFail" in bb,
            get: bb => bb.opStencilFail
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Bb, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opDepthFail" in bb,
            get: bb => bb.opDepthFail
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, eb, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilDepthPass" in bb,
            get: bb => bb.opStencilDepthPass
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, vb, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilFail" in bb,
            get: bb => bb.backOpStencilFail
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Lb, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpDepthFail" in bb,
            get: bb => bb.backOpDepthFail
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Pb, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilDepthPass" in bb,
            get: bb => bb.backOpStencilDepthPass
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, jb, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: bb => "mask" in bb,
            get: bb => bb.mask
          },
          metadata: Xb
        }, null, kb), (0, Ab.h)(bb, null, Rb, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "enabled" in bb,
            get: bb => bb.enabled
          },
          metadata: Xb
        }, null, kb), Xb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xb
        })
      })(), bb
    })();
    var Rb = Ub(39432),
      kb = Ub(39021),
      yb = Ub(38982);
    let Zb = (() => {
      var bb;
      let ab, Ub, yb, Zb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db, Fb, hb, Gb, Qb, qb, ub, rb, Kb, ob, lb, tb, wb, sb, gb = [],
        Cb = [],
        Vb = [],
        Ob = [],
        cb = [],
        Jb = [],
        nb = [],
        Sb = [],
        ba = [],
        aa = [],
        Ua = [],
        Aa = [],
        Ma = [],
        Ta = [],
        Ea = [],
        Ya = [],
        Ba = [],
        ea = [],
        va = [],
        La = [],
        Pa = [],
        Xa = [],
        ja = [],
        Ra = [],
        ka = [],
        ya = [],
        Za = [],
        Da = [],
        za = [],
        xa = [],
        ia = [],
        fa = [],
        ma = [],
        pa = [],
        Na = [],
        Wa = [],
        Ha = [],
        Ia = [],
        da = [],
        Fa = [],
        ha = [],
        Ga = [],
        Qa = [],
        qa = [],
        ua = [],
        ra = [],
        Ka = [],
        oa = [],
        la = [],
        ta = [],
        wa = [];
      return bb = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(ab) {
          this._useVertexPulling !== ab && (this._useVertexPulling = ab, this.Aab(bb.MiscDirtyFlag))
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
        set alpha(ab) {
          if (this._alpha === ab) return;
          const Ub = this._alpha;
          this._alpha = ab, 1 !== Ub && 1 !== ab || this.Aab(bb.MiscDirtyFlag + bb.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(ab) {
          this._backFaceCulling !== ab && (this._backFaceCulling = ab, this.Aab(bb.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(ab) {
          const Ub = Math.max(0, Math.min(0 | ab, 4));
          this._textureRepetitionMode !== Ub && (this._textureRepetitionMode = Ub, this.Aab(bb.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(ab) {
          this._cullBackFaces !== ab && (this._cullBackFaces = ab, this.Aab(bb.TextureDirtyFlag))
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
          this._onDisposeObserver && this.UW.remove(this._onDisposeObserver), this._onDisposeObserver = this.UW.add(bb)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Eb.b), this._onBindObservable
        }
        set onBind(bb) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(bb)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Eb.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Eb.b), this._onEffectCreatedObservable
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
        setAlphaMode(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Ub] !== ab && (this._alphaMode[Ub] = ab, this.Aab(bb.TextureDirtyFlag))
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
        set fogEnabled(ab) {
          this._fogEnabled !== ab && (this._fogEnabled = ab, this.Aab(bb.MiscDirtyFlag))
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
        set wireframe(ab) {
          this.fillMode = ab ? bb.WireFrameFillMode : bb.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case bb.PointFillMode:
            case bb.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(ab) {
          this.fillMode = ab ? bb.PointFillMode : bb.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(ab) {
          this._fillMode !== ab && (this._fillMode = ab, this.Aab(bb.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(bb) {
          const ab = this.oN().vj().getCaps().fragmentDepthSupported;
          bb && !ab && vb.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = bb && ab, this._markAllSubMeshesAsMiscDirty()
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
        constructor(ab, Ub, Mb) {
          let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Ab.k)(this, gb), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Ab.k)(this, Cb, void 0), this.uniqueId = ((0, Ab.k)(this, Vb), (0, Ab.k)(this, Ob, void 0)), this._loadedUniqueId = (0, Ab.k)(this, cb), this.name = (0, Ab.k)(this, Jb, void 0), this.metadata = ((0, Ab.k)(this, nb), (0, Ab.k)(this, Sb, null)), this._internalMetadata = (0, Ab.k)(this, ba), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Ab.k)(this, aa, !1), this.checkReadyOnlyOnce = ((0, Ab.k)(this, Ua), (0, Ab.k)(this, Aa, !1)), this.state = ((0, Ab.k)(this, Ma), (0, Ab.k)(this, Ta, "")), this._alpha = ((0, Ab.k)(this, Ea), (0, Ab.k)(this, Ya, 1)), this.inspectableCustomProperties = (0, Ab.k)(this, Ba), this._backFaceCulling = (0, Ab.k)(this, ea, !0), this._textureRepetitionMode = ((0, Ab.k)(this, va), (0, Ab.k)(this, La, 0)), this.textureRepetitionHexTilingParams = ((0, Ab.k)(this, Pa), (0, Ab.k)(this, Xa, [1, .6, 7, .5])), this._cullBackFaces = ((0, Ab.k)(this, ja), (0, Ab.k)(this, Ra, !0)), this._blockDirtyMechanism = ((0, Ab.k)(this, ka), !1), this.sideOrientation = (0, Ab.k)(this, ya, null), this.onCompiled = ((0, Ab.k)(this, Za), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.UW = new Eb.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Ab.k)(this, Da, [2]), this._needDepthPrePass = ((0, Ab.k)(this, za), (0, Ab.k)(this, xa, !1)), this.disableDepthWrite = ((0, Ab.k)(this, ia), (0, Ab.k)(this, fa, !1)), this.disableColorWrite = ((0, Ab.k)(this, ma), (0, Ab.k)(this, pa, !1)), this.forceDepthWrite = ((0, Ab.k)(this, Na), (0, Ab.k)(this, Wa, !1)), this.depthFunction = ((0, Ab.k)(this, Ha), (0, Ab.k)(this, Ia, 0)), this.separateCullingPass = ((0, Ab.k)(this, da), (0, Ab.k)(this, Fa, !1)), this._fogEnabled = ((0, Ab.k)(this, ha), (0, Ab.k)(this, Ga, !0)), this.pointSize = ((0, Ab.k)(this, Qa), (0, Ab.k)(this, qa, 1)), this.zOffset = ((0, Ab.k)(this, ua), (0, Ab.k)(this, ra, 0)), this.zOffsetUnits = ((0, Ab.k)(this, Ka), (0, Ab.k)(this, oa, 0)), this.clipPlane = (0, Ab.k)(this, la), this.stencil = new jb, this._isVertexOutputInvariant = (0, Ab.k)(this, ta, bb.ForceVertexOutputInvariant), this._materialContext = (0, Ab.k)(this, wa), this._useUBO = !1, this._fillMode = bb.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = ab;
          const vb = Ub || Yb.d.LastCreatedScene;
          vb && (this._scene = vb, this._dirtyCallbacks = {}, this._forceGLSL = Bb, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = ab || Tb.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.vj().createMaterialContext(), this._drawWrapper = new Pb.b(this._scene.vj(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new eb.b(this._scene.vj(), void 0, void 0, ab), this._useUBO = this.oN().vj().supportsUniformBuffers, this._createUniformBuffer(), Mb || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), bb.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const bb = this.oN().vj();
          this._uniformBuffer?.dispose(), bb.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new eb.b(bb, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new eb.b(this._scene.vj(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(bb, ab) {
          return !0
        }
        isReadyForSubMesh(bb, ab, Ub) {
          const Ab = ab.materialDefines;
          return !!Ab && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ab, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        oN() {
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
          let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Ub = this.oN().meshes;
          for (const bb of Ub)
            if (bb.mD)
              for (const Ub of bb.mD)
                if (Ub.Rj() === this)
                  for (const bb of Ub._drawWrappers) bb && this._materialContext === bb.materialContext && (bb._wasPreviouslyReady = !1, bb._wasPreviouslyUsingInstances = null, bb._forceRebindOnNextCall = ab);
          ab && this.Aab(bb.AllDirtyFlag)
        }
        _preBind(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ab = this._scene.vj(),
            Mb = (null == Ub ? this.sideOrientation : Ub) === bb.ClockWiseSideOrientation,
            Tb = ab || this._getDrawWrapper();
          return (0, kb.c)(Tb) && Tb.materialContext && (Tb.materialContext.useVertexPulling = this.useVertexPulling), Ab.enableEffect(Tb), Ab.setState(this.backFaceCulling, this.zOffset, !1, Mb, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Mb
        }
        bind(bb, ab) {}
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          this._eventInfo.ubo = bb, this._callbackPluginEventGeneric(8, this._eventInfo), bb.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(bb, ab, Ub) {
          const Ab = Ub._drawWrapper;
          this._eventInfo.subMesh = Ub, this._callbackPluginEventBindForSubMesh(this._eventInfo), Ab._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(bb) {}
        bindView(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : bb.setMatrix("view", this.oN().getViewMatrix())
        }
        bindViewProjection(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (bb.setMatrix("viewProjection", this.oN().getTransformMatrix()), bb.setMatrix("projection", this.oN().getProjectionMatrix()), bb.setMatrix("inverseProjection", this.oN().getInverseProjectionMatrix()))
        }
        bindEyePosition(bb, ab) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(bb, ab)
        }
        _afterBind(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ab && (this._needToBindSceneUbo = !1, (0, Rb.w)(ab, this.oN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = bb ? bb.visibility : 1, this._onBindObservable && bb && this._onBindObservable.notifyObservers(bb), this.disableDepthWrite) {
            const bb = this._scene.vj();
            this._cachedDepthWriteState = bb.getDepthWrite(), bb.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const bb = this._scene.vj();
            this._cachedColorWriteState = bb.getColorWrite(), bb.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const bb = this._scene.vj();
            this._cachedDepthFunctionState = bb.getDepthFunction() || 0, bb.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.vj().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.vj().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.vj().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(ab, Ub) {
          const Ab = {};
          if (this._serializePlugins(Ab), bb._ParsePlugins(Ab, ab, this._scene, Ub), this.pluginManager)
            for (const bb of this.pluginManager._plugins) {
              const Ub = ab.pluginManager.getPlugin(bb.name);
              Ub && bb.copyTo(Ub)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const bb = [];
            for (const ab in this.meshMap) {
              const Ub = this.meshMap[ab];
              Ub && bb.push(Ub)
            }
            return bb
          }
          return this._scene.meshes.filter((bb => bb.material === this))
        }
        forceCompilation(bb, ab, Ub, Ab) {
          const Mb = {
              clipPlane: !1,
              useInstances: !1,
              ...Ub
            },
            Tb = this.oN(),
            Eb = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Yb = () => {
            if (!this._scene || !this._scene.vj()) return;
            const Ub = Tb.clipPlane;
            if (Mb.clipPlane && (Tb.clipPlane = new Lb.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Ub = !0,
                Tb = null;
              if (bb.mD) {
                const ab = new Bb.e(0, 0, 0, 0, 0, bb, void 0, !1, !1);
                ab.materialDefines && (ab.materialDefines._renderId = -1), this.isReadyForSubMesh(bb, ab, Mb.useInstances) || (ab.effect && ab.effect.getCompilationError() && ab.effect.allFallbacksProcessed() ? Tb = ab.effect.getCompilationError() : (Ub = !1, setTimeout(Yb, 16)))
              }
              Ub && (this.allowShaderHotSwapping = Eb, Tb && Ab && Ab(Tb), ab && ab(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Eb, ab && ab(this)) : setTimeout(Yb, 16);
            Mb.clipPlane && (Tb.clipPlane = Ub)
          };
          Yb()
        }
        async forceCompilationAsync(bb, ab) {
          return await new Promise(((Ub, Ab) => {
            this.forceCompilation(bb, (() => {
              Ub()
            }), ab, (bb => {
              Ab(bb)
            }))
          }))
        }
        Aab(ab) {
          this.oN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (bb._DirtyCallbackArray.length = 0, ab & bb.ImageProcessingDirtyFlag && bb._DirtyCallbackArray.push(bb._ImageProcessingDirtyCallBack), ab & bb.TextureDirtyFlag && bb._DirtyCallbackArray.push(bb._TextureDirtyCallBack), ab & bb.LightDirtyFlag && bb._DirtyCallbackArray.push(bb._LightsDirtyCallBack), ab & bb.FresnelDirtyFlag && bb._DirtyCallbackArray.push(bb._FresnelDirtyCallBack), ab & bb.AttributesDirtyFlag && bb._DirtyCallbackArray.push(bb._AttributeDirtyCallBack), ab & bb.MiscDirtyFlag && bb._DirtyCallbackArray.push(bb._MiscDirtyCallBack), ab & bb.PrePassDirtyFlag && bb._DirtyCallbackArray.push(bb._PrePassDirtyCallBack), bb._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(bb._RunDirtyCallBacks), this.oN().resetCachedMaterial())
        }
        resetDrawCache() {
          const bb = this.oN().meshes;
          for (const ab of bb)
            if (ab.mD)
              for (const bb of ab.mD) bb.Rj() === this && bb.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(bb) {
          const ab = this.oN();
          if (ab.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Ub = ab.meshes;
          for (const Ab of Ub)
            if (Ab.mD)
              for (const Ub of Ab.mD) {
                if ((Ub.Rj() || (ab._hasDefaultMaterial ? ab.defaultMaterial : null)) === this)
                  for (const ab of Ub._drawWrappers) ab && ab.defines && ab.defines.markAllAsDirty && this._materialContext === ab.materialContext && bb(ab.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.oN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const bb = this.oN().enablePrePassRenderer();
          bb && bb.Aab()
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
            this.UW.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(bb)
            }))
          }
        }
        setPrePassRenderer(bb) {
          return !1
        }
        dispose(bb, ab, Ub) {
          const Ab = this.oN();
          if (Ab.stopAnimation(this), Ab.freeProcessedMaterials(), Ab.removeMaterial(this), this._eventInfo.forceDisposeTextures = ab, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const bb = this._parentContainer.materials.indexOf(this);
            bb > -1 && this._parentContainer.materials.splice(bb, 1), this._parentContainer = null
          }
          if (!0 !== Ub)
            if (this.meshMap)
              for (const Mb in this.meshMap) {
                const bb = this.meshMap[Mb];
                this._disposeMeshResources(bb)
              } else {
                const bb = Ab.meshes;
                for (const ab of bb) this._disposeMeshResources(ab)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.UW.notifyObservers(this), this.UW.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(bb) {
          if (!bb) return;
          const ab = bb.geometry,
            Ub = bb._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (bb.mD && Ub)
              for (const Ab of bb.mD) {
                const bb = Ab._drawWrappers;
                for (let Mb = 0; Mb < bb.length; Mb++) {
                  const Tb = bb[Mb]?.effect;
                  if (!Tb) continue;
                  Ub[Mb] === this && (ab?._releaseVertexArrayObject(Tb), Ab._removeDrawWrapper(Mb, !0, !0))
                }
              }
          } else ab?._releaseVertexArrayObject(this._drawWrapper.effect);
          bb.material !== this || bb.dAb || (bb.material = null)
        }
        serialize() {
          const bb = Xb.b.Serialize(this);
          return bb.stencil = this.stencil.serialize(), bb.uniqueId = this.uniqueId, this._serializePlugins(bb), bb
        }
        _serializePlugins(bb) {
          if (bb.plugins = {}, this.pluginManager)
            for (const ab of this.pluginManager._plugins) ab.doNotSerialize || (bb.plugins[ab.getClassName()] = ab.serialize())
        }
        static ParseAlphaMode(bb, ab) {
          void 0 !== bb._alphaMode ? ab._alphaMode = Array.isArray(bb._alphaMode) ? [...bb._alphaMode] : [bb._alphaMode] : void 0 !== bb.alphaMode ? ab._alphaMode = Array.isArray(bb.alphaMode) ? [...bb.alphaMode] : [bb.alphaMode] : ab._alphaMode = [2]
        }
        static Parse(ab, Ub, Ab) {
          if (ab.customType) {
            if ("BABYLON.PBRMaterial" === ab.customType && ab.overloadedAlbedo && (ab.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return vb.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else ab.customType = "BABYLON.StandardMaterial";
          const Mb = Tb.h.Instantiate(ab.customType).Parse(ab, Ub, Ab);
          return Mb._loadedUniqueId = ab.uniqueId, bb.ParseAlphaMode(ab, Mb), Mb
        }
        static _ParsePlugins(bb, ab, Ub, Ab) {
          if (bb.plugins)
            for (const Mb in bb.plugins) {
              const Eb = bb.plugins[Mb];
              let Yb = ab.pluginManager?.getPlugin(Eb.name);
              if (!Yb) {
                const bb = Tb.h.Instantiate("BABYLON." + Mb);
                bb && (Yb = new bb(ab))
              }
              Yb?.parse(Eb, Ub, Ab)
            }
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], yb = [(0, Mb.K)()], Zb = [(0, Mb.K)()], Db = [(0, Mb.K)()], zb = [(0, Mb.K)()], xb = [(0, Mb.K)()], ib = [(0, Mb.K)("alpha")], fb = [(0, Mb.K)("backFaceCulling")], mb = [(0, Mb.K)("textureRepetitionMode")], pb = [(0, Mb.K)("textureRepetitionHexTilingParams")], Nb = [(0, Mb.K)("cullBackFaces")], Wb = [(0, Mb.K)()], Hb = [(0, Mb.K)()], Ib = [(0, Mb.K)()], db = [(0, Mb.K)()], Fb = [(0, Mb.K)()], hb = [(0, Mb.K)()], Gb = [(0, Mb.K)()], Qb = [(0, Mb.K)()], qb = [(0, Mb.K)("fogEnabled")], ub = [(0, Mb.K)()], rb = [(0, Mb.K)()], Kb = [(0, Mb.K)()], ob = [(0, Mb.K)()], lb = [(0, Mb.K)()], tb = [(0, Mb.K)()], wb = [(0, Mb.K)()], sb = [(0, Mb.K)()], (0, Ab.h)(bb, null, ob, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointsCloud" in bb,
            get: bb => bb.pointsCloud
          },
          metadata: Tb
        }, null, gb), (0, Ab.h)(bb, null, lb, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fillMode" in bb,
            get: bb => bb.fillMode
          },
          metadata: Tb
        }, null, gb), (0, Ab.h)(bb, null, tb, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLogarithmicDepth" in bb,
            get: bb => bb.useLogarithmicDepth
          },
          metadata: Tb
        }, null, gb), (0, Ab.h)(bb, null, sb, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "transparencyMode" in bb,
            get: bb => bb.transparencyMode
          },
          metadata: Tb
        }, null, gb), (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, ab) => {
              bb.id = ab
            }
          },
          metadata: Tb
        }, Cb, Vb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, ab) => {
              bb.uniqueId = ab
            }
          },
          metadata: Tb
        }, Ob, cb), (0, Ab.h)(null, null, yb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, ab) => {
              bb.name = ab
            }
          },
          metadata: Tb
        }, Jb, nb), (0, Ab.h)(null, null, Zb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, ab) => {
              bb.metadata = ab
            }
          },
          metadata: Tb
        }, Sb, ba), (0, Ab.h)(null, null, Db, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnEveryCall" in bb,
            get: bb => bb.checkReadyOnEveryCall,
            set: (bb, ab) => {
              bb.checkReadyOnEveryCall = ab
            }
          },
          metadata: Tb
        }, aa, Ua), (0, Ab.h)(null, null, zb, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnlyOnce" in bb,
            get: bb => bb.checkReadyOnlyOnce,
            set: (bb, ab) => {
              bb.checkReadyOnlyOnce = ab
            }
          },
          metadata: Tb
        }, Aa, Ma), (0, Ab.h)(null, null, xb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, ab) => {
              bb.state = ab
            }
          },
          metadata: Tb
        }, Ta, Ea), (0, Ab.h)(null, null, ib, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alpha" in bb,
            get: bb => bb._alpha,
            set: (bb, ab) => {
              bb._alpha = ab
            }
          },
          metadata: Tb
        }, Ya, Ba), (0, Ab.h)(null, null, fb, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_backFaceCulling" in bb,
            get: bb => bb._backFaceCulling,
            set: (bb, ab) => {
              bb._backFaceCulling = ab
            }
          },
          metadata: Tb
        }, ea, va), (0, Ab.h)(null, null, mb, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_textureRepetitionMode" in bb,
            get: bb => bb._textureRepetitionMode,
            set: (bb, ab) => {
              bb._textureRepetitionMode = ab
            }
          },
          metadata: Tb
        }, La, Pa), (0, Ab.h)(null, null, pb, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRepetitionHexTilingParams" in bb,
            get: bb => bb.textureRepetitionHexTilingParams,
            set: (bb, ab) => {
              bb.textureRepetitionHexTilingParams = ab
            }
          },
          metadata: Tb
        }, Xa, ja), (0, Ab.h)(null, null, Nb, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: bb => "_cullBackFaces" in bb,
            get: bb => bb._cullBackFaces,
            set: (bb, ab) => {
              bb._cullBackFaces = ab
            }
          },
          metadata: Tb
        }, Ra, ka), (0, Ab.h)(null, null, Wb, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: bb => "sideOrientation" in bb,
            get: bb => bb.sideOrientation,
            set: (bb, ab) => {
              bb.sideOrientation = ab
            }
          },
          metadata: Tb
        }, ya, Za), (0, Ab.h)(null, null, Hb, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alphaMode" in bb,
            get: bb => bb._alphaMode,
            set: (bb, ab) => {
              bb._alphaMode = ab
            }
          },
          metadata: Tb
        }, Da, za), (0, Ab.h)(null, null, Ib, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: bb => "_needDepthPrePass" in bb,
            get: bb => bb._needDepthPrePass,
            set: (bb, ab) => {
              bb._needDepthPrePass = ab
            }
          },
          metadata: Tb
        }, xa, ia), (0, Ab.h)(null, null, db, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableDepthWrite" in bb,
            get: bb => bb.disableDepthWrite,
            set: (bb, ab) => {
              bb.disableDepthWrite = ab
            }
          },
          metadata: Tb
        }, fa, ma), (0, Ab.h)(null, null, Fb, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableColorWrite" in bb,
            get: bb => bb.disableColorWrite,
            set: (bb, ab) => {
              bb.disableColorWrite = ab
            }
          },
          metadata: Tb
        }, pa, Na), (0, Ab.h)(null, null, hb, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceDepthWrite" in bb,
            get: bb => bb.forceDepthWrite,
            set: (bb, ab) => {
              bb.forceDepthWrite = ab
            }
          },
          metadata: Tb
        }, Wa, Ha), (0, Ab.h)(null, null, Gb, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: bb => "depthFunction" in bb,
            get: bb => bb.depthFunction,
            set: (bb, ab) => {
              bb.depthFunction = ab
            }
          },
          metadata: Tb
        }, Ia, da), (0, Ab.h)(null, null, Qb, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "separateCullingPass" in bb,
            get: bb => bb.separateCullingPass,
            set: (bb, ab) => {
              bb.separateCullingPass = ab
            }
          },
          metadata: Tb
        }, Fa, ha), (0, Ab.h)(null, null, qb, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_fogEnabled" in bb,
            get: bb => bb._fogEnabled,
            set: (bb, ab) => {
              bb._fogEnabled = ab
            }
          },
          metadata: Tb
        }, Ga, Qa), (0, Ab.h)(null, null, ub, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointSize" in bb,
            get: bb => bb.pointSize,
            set: (bb, ab) => {
              bb.pointSize = ab
            }
          },
          metadata: Tb
        }, qa, ua), (0, Ab.h)(null, null, rb, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffset" in bb,
            get: bb => bb.zOffset,
            set: (bb, ab) => {
              bb.zOffset = ab
            }
          },
          metadata: Tb
        }, ra, Ka), (0, Ab.h)(null, null, Kb, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffsetUnits" in bb,
            get: bb => bb.zOffsetUnits,
            set: (bb, ab) => {
              bb.zOffsetUnits = ab
            }
          },
          metadata: Tb
        }, oa, la), (0, Ab.h)(null, null, wb, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: bb => "_isVertexOutputInvariant" in bb,
            get: bb => bb._isVertexOutputInvariant,
            set: (bb, ab) => {
              bb._isVertexOutputInvariant = ab
            }
          },
          metadata: Tb
        }, ta, wa), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb.TriangleFillMode = 0, bb.WireFrameFillMode = 1, bb.PointFillMode = 2, bb.PointListDrawMode = 3, bb.LineListDrawMode = 4, bb.LineLoopDrawMode = 5, bb.LineStripDrawMode = 6, bb.TriangleStripDrawMode = 7, bb.TriangleFanDrawMode = 8, bb.ClockWiseSideOrientation = 0, bb.CounterClockWiseSideOrientation = 1, bb.ImageProcessingDirtyFlag = 64, bb.TextureDirtyFlag = 1, bb.LightDirtyFlag = 2, bb.FresnelDirtyFlag = 4, bb.AttributesDirtyFlag = 8, bb.MiscDirtyFlag = 16, bb.PrePassDirtyFlag = 32, bb.AllDirtyFlag = 127, bb.MATERIAL_OPAQUE = 0, bb.MATERIAL_ALPHATEST = 1, bb.MATERIAL_ALPHABLEND = 2, bb.MATERIAL_ALPHATESTANDBLEND = 3, bb.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, bb.MATERIAL_NORMALBLENDMETHOD_RNM = 1, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.OnEventObservable = new Eb.b, bb.ForceVertexOutputInvariant = !1, bb._AllDirtyCallBack = bb => bb.markAllAsDirty(), bb._ImageProcessingDirtyCallBack = bb => bb.markAsImageProcessingDirty(), bb._TextureDirtyCallBack = bb => bb.markAsTexturesDirty(), bb._FresnelDirtyCallBack = bb => bb.markAsFresnelDirty(), bb._MiscDirtyCallBack = bb => bb.markAsMiscDirty(), bb._PrePassDirtyCallBack = bb => bb.markAsPrePassDirty(), bb._LightsDirtyCallBack = bb => bb.markAsLightDirty(), bb._AttributeDirtyCallBack = bb => bb.markAsAttributesDirty(), bb._FresnelAndMiscDirtyCallBack = ab => {
        bb._FresnelDirtyCallBack(ab), bb._MiscDirtyCallBack(ab)
      }, bb._TextureAndMiscDirtyCallBack = ab => {
        bb._TextureDirtyCallBack(ab), bb._MiscDirtyCallBack(ab)
      }, bb._DirtyCallbackArray = [], bb._RunDirtyCallBacks = ab => {
        for (const Ub of bb._DirtyCallbackArray) Ub(ab)
      }, bb
    })();
    Object.getOwnPropertyDescriptor(Zb.prototype, "pluginManager") || Object.defineProperty(Zb.prototype, "pluginManager", (0, yb.g)("Material", "pluginManager"))
  },
  39447: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    var Ab = Ub(39002);
    class Mb {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(bb) {
        this._DiffuseTextureEnabled !== bb && (this._DiffuseTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(bb) {
        this._BaseWeightTextureEnabled !== bb && (this._BaseWeightTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(bb) {
        this._BaseDiffuseRoughnessTextureEnabled !== bb && (this._BaseDiffuseRoughnessTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(bb) {
        this._DetailTextureEnabled !== bb && (this._DetailTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(bb) {
        this._DecalMapEnabled !== bb && (this._DecalMapEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(bb) {
        this._AmbientTextureEnabled !== bb && (this._AmbientTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(bb) {
        this._OpacityTextureEnabled !== bb && (this._OpacityTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(bb) {
        this._ReflectionTextureEnabled !== bb && (this._ReflectionTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(bb) {
        this._EmissiveTextureEnabled !== bb && (this._EmissiveTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(bb) {
        this._SpecularTextureEnabled !== bb && (this._SpecularTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(bb) {
        this._BumpTextureEnabled !== bb && (this._BumpTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(bb) {
        this._LightmapTextureEnabled !== bb && (this._LightmapTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(bb) {
        this._RefractionTextureEnabled !== bb && (this._RefractionTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(bb) {
        this._ColorGradingTextureEnabled !== bb && (this._ColorGradingTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(bb) {
        this._FresnelEnabled !== bb && (this._FresnelEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(bb) {
        this._ClearCoatTextureEnabled !== bb && (this._ClearCoatTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(bb) {
        this._ClearCoatBumpTextureEnabled !== bb && (this._ClearCoatBumpTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(bb) {
        this._ClearCoatTintTextureEnabled !== bb && (this._ClearCoatTintTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(bb) {
        this._SheenTextureEnabled !== bb && (this._SheenTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(bb) {
        this._AnisotropicTextureEnabled !== bb && (this._AnisotropicTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(bb) {
        this._ThicknessTextureEnabled !== bb && (this._ThicknessTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(bb) {
        this._RefractionIntensityTextureEnabled !== bb && (this._RefractionIntensityTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(bb) {
        this._TranslucencyIntensityTextureEnabled !== bb && (this._TranslucencyIntensityTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(bb) {
        this._TranslucencyColorTextureEnabled !== bb && (this._TranslucencyColorTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(bb) {
        this._IridescenceTextureEnabled !== bb && (this._IridescenceTextureEnabled = bb, Ab.d.MarkAllMaterialsAsDirty(1))
      }
    }
    Mb._DiffuseTextureEnabled = !0, Mb._BaseWeightTextureEnabled = !0, Mb._BaseDiffuseRoughnessTextureEnabled = !0, Mb._DetailTextureEnabled = !0, Mb._DecalMapEnabled = !0, Mb._AmbientTextureEnabled = !0, Mb._OpacityTextureEnabled = !0, Mb._ReflectionTextureEnabled = !0, Mb._EmissiveTextureEnabled = !0, Mb._SpecularTextureEnabled = !0, Mb._BumpTextureEnabled = !0, Mb._LightmapTextureEnabled = !0, Mb._RefractionTextureEnabled = !0, Mb._ColorGradingTextureEnabled = !0, Mb._FresnelEnabled = !0, Mb._ClearCoatTextureEnabled = !0, Mb._ClearCoatBumpTextureEnabled = !0, Mb._ClearCoatTintTextureEnabled = !0, Mb._SheenTextureEnabled = !0, Mb._AnisotropicTextureEnabled = !0, Mb._ThicknessTextureEnabled = !0, Mb._RefractionIntensityTextureEnabled = !0, Mb._TranslucencyIntensityTextureEnabled = !0, Mb._TranslucencyColorTextureEnabled = !0, Mb._IridescenceTextureEnabled = !0
  },
  39432: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => Db,
      B: () => xb,
      F: () => Wb,
      H: () => Hb,
      J: () => Xb,
      N: () => Pb,
      R: () => lb,
      S: () => qb,
      W: () => Gb,
      _: () => hb,
      bb: () => db,
      d: () => Fb,
      db: () => tb,
      fb: () => wb,
      gb: () => sb,
      h: () => ib,
      kb: () => Ob,
      l: () => Lb,
      m: () => yb,
      o: () => Zb,
      ob: () => Cb,
      rb: () => Vb,
      s: () => Nb,
      sb: () => jb,
      u: () => Bb,
      v: () => Rb,
      w: () => kb,
      x: () => zb,
      y: () => Ib
    });
    var Ab = Ub(37989),
      Mb = Ub(36425),
      Tb = Ub(39294),
      Eb = Ub(39440),
      Yb = Ub(39447);

    function Bb(bb, ab, Ub) {
      if (!bb || bb.LOGARITHMICDEPTH || bb.indexOf && bb.indexOf("LOGARITHMICDEPTH") >= 0) {
        const bb = Ub.activeCamera;
        1 === bb.mode && Ab.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), ab.setFloat("logarithmicDepthConstant", 2 / (Math.log(bb.maxZ + 1) / Math.LN2))
      }
    }
    const eb = {
        r: 0,
        g: 0,
        b: 0
      },
      vb = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Lb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Ub && bb.fogEnabled && (!ab || ab.applyFog) && 0 !== bb.fogMode && (Ub.setFloat4("vFogInfos", bb.fogMode, bb.fogStart, bb.fogEnd, bb.fogDensity), Ab ? (bb.fogColor.toLinearSpaceToRef(eb, bb.vj().useExactSrgbConversions), Ub.setColor3("vFogColor", eb)) : Ub.setColor3("vFogColor", bb.fogColor))
    }

    function Pb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
      const Lb = bb.numMaxInfluencers || bb.numInfluencers;
      return Lb <= 0 ? 0 : (ab.push("#define MORPHTARGETS"), bb.hasPositions && ab.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), bb.hasNormals && ab.push("#define MORPHTARGETTEXTURE_HASNORMALS"), bb.hasTangents && ab.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), bb.hasUVs && ab.push("#define MORPHTARGETTEXTURE_HASUVS"), bb.hasUV2s && ab.push("#define MORPHTARGETTEXTURE_HASUV2S"), bb.hasColors && ab.push("#define MORPHTARGETTEXTURE_HASCOLORS"), bb.supportsPositions && Mb && ab.push("#define MORPHTARGETS_POSITION"), bb.supportsNormals && Tb && ab.push("#define MORPHTARGETS_NORMAL"), bb.supportsTangents && Eb && ab.push("#define MORPHTARGETS_TANGENT"), bb.supportsUVs && Yb && ab.push("#define MORPHTARGETS_UV"), bb.supportsUV2s && Bb && ab.push("#define MORPHTARGETS_UV2"), bb.supportsColors && eb && ab.push("#define MORPHTARGETS_COLOR"), ab.push("#define NUM_MORPH_INFLUENCERS " + Lb), bb.isUsingTextureForTargets && ab.push("#define MORPHTARGETS_TEXTURE"), vb.NUM_MORPH_INFLUENCERS = Lb, vb.NORMAL = Tb, vb.TANGENT = Eb, vb.UV = Yb, vb.UV2 = Bb, vb.COLOR = eb, Xb(Ub, Ab, vb, Mb), Lb)
    }

    function Xb(bb, ab, Ub) {
      let Tb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Eb = Ub.NUM_MORPH_INFLUENCERS;
      if (Eb > 0 && Mb.d.LastCreatedEngine) {
        const Yb = Mb.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          Bb = ab.morphTargetManager;
        if (Bb?.isUsingTextureForTargets) return;
        const eb = Bb && Bb.supportsPositions && Tb,
          vb = Bb && Bb.supportsNormals && Ub.NORMAL,
          Lb = Bb && Bb.supportsTangents && Ub.TANGENT,
          Pb = Bb && Bb.supportsUVs && Ub.UV1,
          Xb = Bb && Bb.supportsUV2s && Ub.UV2,
          jb = Bb && Bb.supportsColors && Ub.VERTEXCOLOR;
        for (let Ub = 0; Ub < Eb; Ub++) eb && bb.push("position" + Ub), vb && bb.push("normal" + Ub), Lb && bb.push("tangent" + Ub), Pb && bb.push("uv_" + Ub), Xb && bb.push("uv2_" + Ub), jb && bb.push("color" + Ub), bb.length > Yb && Ab.e.Error("Cannot add more vertex attributes for mesh " + ab.name)
      }
    }

    function jb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      bb.push("world0"), bb.push("world1"), bb.push("world2"), bb.push("world3"), ab && (bb.push("previousWorld0"), bb.push("previousWorld1"), bb.push("previousWorld2"), bb.push("previousWorld3"))
    }

    function Rb(bb, ab) {
      const Ub = bb.morphTargetManager;
      bb && Ub && ab.setFloatArray("morphTargetInfluences", Ub.influences)
    }

    function kb(bb, ab) {
      ab.bindToEffect(bb, "Scene")
    }

    function yb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Bb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        eb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Lb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Pb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (bb.texturesEnabled && Mb && Yb.c.ReflectionTextureEnabled) {
        if (Ub.i5("reflectionMatrix", Mb.getReflectionTextureMatrix()), Ub.updateFloat2("vReflectionInfos", Mb.level * bb.iblIntensity, Pb), Bb && Mb.boundingBoxSize) {
          const bb = Mb;
          Ub.updateVector3("vReflectionPosition", bb.boundingBoxPosition), Ub.updateVector3("vReflectionSize", bb.boundingBoxSize)
        }
        if (Tb) {
          const bb = Mb.getSize().width;
          Ub.updateFloat2("vReflectionFilteringInfo", bb, Math.log2(bb))
        }
        if (vb && !ab.USEIRRADIANCEMAP) {
          const bb = Mb.sphericalPolynomial;
          if (ab.USESPHERICALFROMREFLECTIONMAP && bb)
            if (ab.SPHERICAL_HARMONICS) {
              const ab = bb.preScaledHarmonics;
              Ub.updateVector3("vSphericalL00", ab.l00), Ub.updateVector3("vSphericalL1_1", ab.l1_1), Ub.updateVector3("vSphericalL10", ab.l10), Ub.updateVector3("vSphericalL11", ab.l11), Ub.updateVector3("vSphericalL2_2", ab.l2_2), Ub.updateVector3("vSphericalL2_1", ab.l2_1), Ub.updateVector3("vSphericalL20", ab.l20), Ub.updateVector3("vSphericalL21", ab.l21), Ub.updateVector3("vSphericalL22", ab.l22)
            } else Ub.updateFloat3("vSphericalX", bb.x.x, bb.x.y, bb.x.z), Ub.updateFloat3("vSphericalY", bb.y.x, bb.y.y, bb.y.z), Ub.updateFloat3("vSphericalZ", bb.z.x, bb.z.y, bb.z.z), Ub.updateFloat3("vSphericalXX_ZZ", bb.xx.x - bb.zz.x, bb.xx.y - bb.zz.y, bb.xx.z - bb.zz.z), Ub.updateFloat3("vSphericalYY_ZZ", bb.yy.x - bb.zz.x, bb.yy.y - bb.zz.y, bb.yy.z - bb.zz.z), Ub.updateFloat3("vSphericalZZ", bb.zz.x, bb.zz.y, bb.zz.z), Ub.updateFloat3("vSphericalXY", bb.xy.x, bb.xy.y, bb.xy.z), Ub.updateFloat3("vSphericalYZ", bb.yz.x, bb.yz.y, bb.yz.z), Ub.updateFloat3("vSphericalZX", bb.zx.x, bb.zx.y, bb.zx.z)
        } else eb && ab.USEIRRADIANCEMAP && ab.USE_IRRADIANCE_DOMINANT_DIRECTION && Mb.irradianceTexture && Ub.updateVector3("vReflectionDominantDirection", Mb.irradianceTexture._dominantDirection);
        Eb && Ub.updateFloat3("vReflectionMicrosurfaceInfos", Mb.getSize().width, Mb.lodGenerationScale, Mb.lodGenerationOffset)
      }
      Lb && Ub.updateColor3("vReflectionColor", Ab)
    }

    function Zb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Ab && Yb.c.ReflectionTextureEnabled) {
        ab.LODBASEDMICROSFURACE ? Ub.setTexture("reflectionSampler", Ab) : (Ub.setTexture("reflectionSampler", Ab._lodTextureMid || Ab), Ub.setTexture("reflectionSamplerLow", Ab._lodTextureLow || Ab), Ub.setTexture("reflectionSamplerHigh", Ab._lodTextureHigh || Ab)), ab.USEIRRADIANCEMAP && Ub.setTexture("irradianceSampler", Ab.irradianceTexture);
        const Tb = bb.iblCdfGenerator;
        Mb && Tb && Ub.setTexture("icdfSampler", Tb.getIcdfTexture())
      }
    }

    function Db(bb, ab, Ub) {
      ab._needUVs = !0, ab[Ub] = !0, bb.optimizeUVAllocation && bb.getTextureMatrix().isIdentityAs3x2() ? (ab[Ub + "DIRECTUV"] = bb.coordinatesIndex + 1, ab["MAINUV" + (bb.coordinatesIndex + 1)] = !0) : ab[Ub + "DIRECTUV"] = 0
    }

    function zb(bb, ab, Ub) {
      const Ab = bb.getTextureMatrix();
      ab.i5(Ub + "Matrix", Ab)
    }

    function xb(bb, ab, Ub) {
      Ub.BAKED_VERTEX_ANIMATION_TEXTURE && Ub.INSTANCES && bb.push("bakedVertexAnimationSettingsInstanced")
    }

    function ib(bb, ab, Ub) {
      var Ab;
      if (ab && bb && (bb.computeBonesUsingShaders && ab._bonesComputationForcedToCPU && (bb.computeBonesUsingShaders = !1), bb.useBones && bb.computeBonesUsingShaders && bb.skeleton)) {
        const Mb = bb.skeleton;
        if (Mb.isUsingTextureForMatrices && ab.getUniformIndex("boneTextureInfo") > -1) {
          const Ub = Mb.getTransformMatrixTexture(bb);
          ab.setTexture("boneSampler", Ub), ab.setFloat2("boneTextureInfo", Mb._textureWidth, Mb._textureHeight)
        } else {
          const Tb = Mb.getTransformMatrices(bb);
          Tb && (ab.setMatrices("mBones", Tb), Ub && bb.oN().prePassRenderer && bb.oN().prePassRenderer.getIndex(2) && (Ub.previousBones[bb.uniqueId] || (Ub.previousBones[bb.uniqueId] = Tb.slice()), ab.setMatrices("mPreviousBones", Ub.previousBones[bb.uniqueId]), Ab = Tb, Ub.previousBones[bb.uniqueId].set(Ab)))
        }
      }
    }

    function fb(bb, ab, Ub, Ab, Mb) {
      let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      bb._bindLight(ab, Ub, Ab, Mb, Tb)
    }
    const mb = 4,
      pb = new WeakMap;

    function Nb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Tb = Math.min(ab.lightSources.length, Mb);
      for (let Eb = 0; Eb < Tb; Eb++) {
        fb(ab.lightSources[Eb], Eb, bb, Ub, "boolean" === typeof Ab ? Ab : Ab.SPECULARTERM, ab.receiveShadows)
      }
    }

    function Wb(bb, ab, Ub, Ab) {
      Ub.NUM_BONE_INFLUENCERS > 0 && (Ab.addCPUSkinningFallback(0, ab), bb.push("matricesIndices"), bb.push("matricesWeights"), Ub.NUM_BONE_INFLUENCERS > 4 && (bb.push("matricesIndicesExtra"), bb.push("matricesWeightsExtra")))
    }

    function Hb(bb, ab) {
      (ab.INSTANCES || ab.THIN_INSTANCES) && jb(bb, !!ab.PREPASS_VELOCITY), ab.INSTANCESCOLOR && bb.push("instanceColor")
    }

    function Ib(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Mb = 0;
      for (let Tb = 0; Tb < Ub && bb["LIGHT" + Tb]; Tb++) Tb > 0 && (Mb = Ab + Tb, ab.addFallback(Mb, "LIGHT" + Tb)), bb.SHADOWS || (bb["SHADOW" + Tb] && ab.addFallback(Ab, "SHADOW" + Tb), bb["SHADOWPCF" + Tb] && ab.addFallback(Ab, "SHADOWPCF" + Tb), bb["SHADOWPCSS" + Tb] && ab.addFallback(Ab, "SHADOWPCSS" + Tb), bb["SHADOWPOISSON" + Tb] && ab.addFallback(Ab, "SHADOWPOISSON" + Tb), bb["SHADOWESM" + Tb] && ab.addFallback(Ab, "SHADOWESM" + Tb), bb["SHADOWCLOSEESM" + Tb] && ab.addFallback(Ab, "SHADOWCLOSEESM" + Tb));
      return Mb
    }

    function db(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      let Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eb = arguments.length > 9 ? arguments[9] : void 0,
        vb = arguments.length > 10 ? arguments[10] : void 0;
      if (Eb._areMiscDirty) {
        Eb.LOGARITHMICDEPTH = Ub, Eb.POINTSIZE = Ab, Eb.FOG = Mb && function(bb, ab) {
          return ab.fogEnabled && bb.applyFog && 0 !== ab.fogMode
        }(bb, ab), Eb.NONUNIFORMSCALING = bb.nonUniformScaling, Eb.ALPHATEST = Tb, Eb.DECAL_AFTER_DETAIL = Yb, Eb.USE_VERTEX_PULLING = Bb, Eb.RIGHT_HANDED = ab.useRightHandedSystem;
        const Lb = Bb ? eb?.geometry?.getIndexBuffer() : null,
          Pb = !!eb && eb.isUnIndexed;
        Eb.VERTEX_PULLING_USE_INDEX_BUFFER = !!Lb && !Pb, Eb.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Lb || Pb) && Lb.is32Bits, Eb.VERTEXOUTPUT_INVARIANT = !!vb
      }
    }

    function Fb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!bb.lightsEnabled || Ab) return !0;
      const Mb = ab.lightSources,
        Tb = Math.min(Mb.length, Ub);
      for (let Eb = 0; Eb < Tb; Eb++)
        if (!Mb[Eb].areLightTexturesReady()) return !1;
      return !0
    }

    function hb(bb, ab, Ub, Mb) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Ub._areLightsDirty) return Ub._needNormals;
      const Yb = Tb;
      Tb = function(bb, ab) {
        const Ub = bb.vj().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Ub) return ab;
        const Ab = Math.max(Ub - mb, 1);
        return Math.min(ab, Ab)
      }(bb, Tb);
      let Bb = 0;
      const eb = {
        needNormals: Ub._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (bb.lightsEnabled && !Eb) {
        ab.lightSources.length > Tb && Tb < Yb && function(bb, ab, Ub, Mb) {
          let Tb = pb.get(bb);
          Tb || (Tb = new Set, pb.set(bb, Tb)), Tb.has(Mb) || (Tb.add(Mb), Ab.e.Warn(`maxSimultaneousLights is ${ab} but this engine supports at most ${Ub} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Mb} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Mb+mb} uniform buffers, over the device limit of ${bb.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Ub}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Ub} or less to silence this warning.`))
        }(bb.vj(), Yb, Tb, Math.min(ab.lightSources.length, Yb));
        for (const Ab of ab.lightSources)
          if (Qb(bb, ab, Ab, Bb, Ub, Mb, eb), Bb++, Bb === Tb) break
      }
      Ub.SPECULARTERM = eb.specularEnabled, Ub.SHADOWS = eb.shadowEnabled;
      const vb = Math.max(Tb, Ub.MAXLIGHTCOUNT || 0);
      for (let Ab = Bb; Ab < vb; Ab++) void 0 !== Ub["LIGHT" + Ab] && (Ub["LIGHT" + Ab] = !1, Ub["HEMILIGHT" + Ab] = !1, Ub["POINTLIGHT" + Ab] = !1, Ub["DIRLIGHT" + Ab] = !1, Ub["SPOTLIGHT" + Ab] = !1, Ub["AREALIGHT" + Ab] = !1, Ub["CLUSTLIGHT" + Ab] = !1, Ub["SHADOW" + Ab] = !1, Ub["SHADOWCSM" + Ab] = !1, Ub["SHADOWCSMDEBUG" + Ab] = !1, Ub["SHADOWCSMNUM_CASCADES" + Ab] = !1, Ub["SHADOWCSMUSESHADOWMAXZ" + Ab] = !1, Ub["SHADOWCSMNOBLEND" + Ab] = !1, Ub["SHADOWCSM_RIGHTHANDED" + Ab] = !1, Ub["SHADOWPCF" + Ab] = !1, Ub["SHADOWPCSS" + Ab] = !1, Ub["SHADOWPOISSON" + Ab] = !1, Ub["SHADOWESM" + Ab] = !1, Ub["SHADOWCLOSEESM" + Ab] = !1, Ub["SHADOWCUBE" + Ab] = !1, Ub["SHADOWLOWQUALITY" + Ab] = !1, Ub["SHADOWMEDIUMQUALITY" + Ab] = !1);
      Ub.LIGHTCOUNT = Bb, Ub.MAXLIGHTCOUNT = Tb;
      const Lb = bb.vj().getCaps();
      return void 0 === Ub.SHADOWFLOAT && (eb.needRebuild = !0), Ub.SHADOWFLOAT = eb.shadowEnabled && (Lb.textureFloatRender && Lb.textureFloatLinearFiltering || Lb.textureHalfFloatRender && Lb.textureHalfFloatLinearFiltering), Ub.LIGHTMAPEXCLUDED = eb.lightmapMode, eb.needRebuild && Ub.rebuild(), eb.needNormals
    }

    function Gb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (ab && Yb.c.ReflectionTextureEnabled) {
        if (!ab.isReadyOrNotBlocking()) return !1;
        Ub._needNormals = !0, Ub.REFLECTION = !0, Ub.GAMMAREFLECTION = ab.gammaSpace, Ub.RGBDREFLECTION = ab.isRGBD, Ub.LODINREFLECTIONALPHA = ab.lodLevelInAlpha, Ub.LINEARSPECULARREFLECTION = ab.linearSpecularLOD, Ub.USEIRRADIANCEMAP = !1, Ub.LODBASEDMICROSFURACE = bb.vj().getCaps().textureLOD;
        const Eb = bb.vj();
        switch (Ab && Mb > 0 ? (Ub.NUM_SAMPLES = "" + Mb, Eb._features.needTypeSuffixInShaderConstants && (Ub.NUM_SAMPLES = Ub.NUM_SAMPLES + "u"), Ub.REALTIME_FILTERING = !0, bb.iblCdfGenerator && (Ub.IBL_CDF_FILTERING = !0)) : Ub.REALTIME_FILTERING = !1, Ub.INVERTCUBICMAP = 6 === ab.coordinatesMode, Ub.REFLECTIONMAP_3D = ab.isCube, Ub.REFLECTIONMAP_OPPOSITEZ = Ub.REFLECTIONMAP_3D && bb.useRightHandedSystem ? !ab.invertZ : ab.invertZ, Ub.REFLECTIONMAP_CUBIC = !1, Ub.REFLECTIONMAP_EXPLICIT = !1, Ub.REFLECTIONMAP_PLANAR = !1, Ub.REFLECTIONMAP_PROJECTION = !1, Ub.REFLECTIONMAP_SKYBOX = !1, Ub.REFLECTIONMAP_SPHERICAL = !1, Ub.REFLECTIONMAP_EQUIRECTANGULAR = !1, Ub.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Ub.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ab.coordinatesMode) {
          case 0:
            Ub.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Ub.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Ub.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Ub.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Ub.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Ub.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Ub.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Ub.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Ub.REFLECTIONMAP_CUBIC = !0, Ub.USE_LOCAL_REFLECTIONMAP_CUBIC = !!ab.boundingBoxSize
        }
        5 !== ab.coordinatesMode && (ab.irradianceTexture ? (Ub.USEIRRADIANCEMAP = !0, Ub.USESPHERICALFROMREFLECTIONMAP = !1, Ub.USESPHERICALINVERTEX = !1, ab.irradianceTexture._dominantDirection ? Ub.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Ub.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : ab.isCube && (Ub.USESPHERICALFROMREFLECTIONMAP = !0, Ub.USEIRRADIANCEMAP = !1, Ub.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Ub.USESPHERICALINVERTEX = Tb))
      } else Ub.REFLECTION = !1, Ub.REFLECTIONMAP_3D = !1, Ub.REFLECTIONMAP_SPHERICAL = !1, Ub.REFLECTIONMAP_PLANAR = !1, Ub.REFLECTIONMAP_CUBIC = !1, Ub.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Ub.REFLECTIONMAP_PROJECTION = !1, Ub.REFLECTIONMAP_SKYBOX = !1, Ub.REFLECTIONMAP_EXPLICIT = !1, Ub.REFLECTIONMAP_EQUIRECTANGULAR = !1, Ub.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Ub.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Ub.INVERTCUBICMAP = !1, Ub.USESPHERICALFROMREFLECTIONMAP = !1, Ub.USEIRRADIANCEMAP = !1, Ub.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Ub.USESPHERICALINVERTEX = !1, Ub.REFLECTIONMAP_OPPOSITEZ = !1, Ub.LODINREFLECTIONALPHA = !1, Ub.GAMMAREFLECTION = !1, Ub.RGBDREFLECTION = !1, Ub.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Qb(bb, ab, Ub, Ab, Mb, Eb, Yb) {
      switch (Yb.needNormals = !0, void 0 === Mb["LIGHT" + Ab] && (Yb.needRebuild = !0), Mb["LIGHT" + Ab] = !0, Mb["SPOTLIGHT" + Ab] = !1, Mb["HEMILIGHT" + Ab] = !1, Mb["POINTLIGHT" + Ab] = !1, Mb["DIRLIGHT" + Ab] = !1, Mb["AREALIGHT" + Ab] = !1, Mb["CLUSTLIGHT" + Ab] = !1, Ub.prepareLightSpecificDefines(Mb, Ab), Mb["LIGHT_FALLOFF_PHYSICAL" + Ab] = !1, Mb["LIGHT_FALLOFF_GLTF" + Ab] = !1, Mb["LIGHT_FALLOFF_STANDARD" + Ab] = !1, Ub.falloffType) {
        case Tb.d.FALLOFF_GLTF:
          Mb["LIGHT_FALLOFF_GLTF" + Ab] = !0;
          break;
        case Tb.d.FALLOFF_PHYSICAL:
          Mb["LIGHT_FALLOFF_PHYSICAL" + Ab] = !0;
          break;
        case Tb.d.FALLOFF_STANDARD:
          Mb["LIGHT_FALLOFF_STANDARD" + Ab] = !0
      }
      if (Eb && !Ub.specular.equalsFloats(0, 0, 0) && (Yb.specularEnabled = !0), Mb["SHADOW" + Ab] = !1, Mb["SHADOWCSM" + Ab] = !1, Mb["SHADOWCSMDEBUG" + Ab] = !1, Mb["SHADOWCSMNUM_CASCADES" + Ab] = !1, Mb["SHADOWCSMUSESHADOWMAXZ" + Ab] = !1, Mb["SHADOWCSMNOBLEND" + Ab] = !1, Mb["SHADOWCSM_RIGHTHANDED" + Ab] = !1, Mb["SHADOWPCF" + Ab] = !1, Mb["SHADOWPCSS" + Ab] = !1, Mb["SHADOWPOISSON" + Ab] = !1, Mb["SHADOWESM" + Ab] = !1, Mb["SHADOWCLOSEESM" + Ab] = !1, Mb["SHADOWCUBE" + Ab] = !1, Mb["SHADOWLOWQUALITY" + Ab] = !1, Mb["SHADOWMEDIUMQUALITY" + Ab] = !1, ab && ab.receiveShadows && bb.shadowsEnabled && Ub.shadowEnabled) {
        const ab = Ub.getShadowGenerator(bb.activeCamera) ?? Ub.getShadowGenerator();
        if (ab) {
          const bb = ab.getShadowMap();
          bb && bb.renderList && bb.renderList.length > 0 && (Yb.shadowEnabled = !0, ab.prepareDefines(Mb, Ab))
        }
      }
      Ub.lightmapMode != Tb.d.LIGHTMAP_DEFAULT ? (Yb.lightmapMode = !0, Mb["LIGHTMAPEXCLUDED" + Ab] = !0, Mb["LIGHTMAPNOSPECULAR" + Ab] = Ub.lightmapMode == Tb.d.LIGHTMAP_SHADOWSONLY) : (Mb["LIGHTMAPEXCLUDED" + Ab] = !1, Mb["LIGHTMAPNOSPECULAR" + Ab] = !1)
    }

    function qb(bb, ab, Ub, Ab, Mb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Bb = function(bb, ab) {
          let Ub = !1;
          if (bb.activeCamera) {
            const Ab = ab.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Mb = ab.CAMERA_PERSPECTIVE ? 1 : 0,
              Tb = 1 === bb.activeCamera.mode ? 1 : 0,
              Eb = 0 === bb.activeCamera.mode ? 1 : 0;
            (Ab ^ Tb || Mb ^ Eb) && (ab.CAMERA_ORTHOGRAPHIC = 1 === Tb, ab.CAMERA_PERSPECTIVE = 1 === Eb, Ub = !0)
          }
          return Ub
        }(bb, Ab);
      !1 !== Tb && (Bb = (0, Eb.g)(Ub, bb, Ab)), Ab.DEPTHPREPASS !== !ab.getColorWrite() && (Ab.DEPTHPREPASS = !Ab.DEPTHPREPASS, Bb = !0), Ab.INSTANCES !== Mb && (Ab.INSTANCES = Mb, Bb = !0), Ab.THIN_INSTANCES !== Yb && (Ab.THIN_INSTANCES = Yb, Bb = !0), Bb && Ab.markAsUnprocessed()
    }
    const ub = 40,
      rb = 64,
      Kb = new WeakMap,
      ob = new WeakSet;

    function lb(bb, ab, Ub, Mb) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Yb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!ab._areAttributesDirty && ab._needNormals === ab._normals && ab._needUVs === ab._uvs) return !1;
      ab._normals = ab._needNormals, ab._uvs = ab._needUVs, ab.NORMAL = ab._needNormals && bb.isVerticesDataPresent("normal"), ab._needNormals && bb.isVerticesDataPresent("tangent") && (ab.TANGENT = !0);
      for (let Ab = 1; Ab <= 6; ++Ab) ab["UV" + Ab] = !!ab._needUVs && bb.isVerticesDataPresent(`uv${1===Ab?"":Ab}`);
      if (Ub) {
        const Ub = bb.useVertexColors && bb.isVerticesDataPresent("color");
        ab.VERTEXCOLOR = Ub, ab.VERTEXALPHA = bb.hasVertexAlpha && Ub && Eb
      }
      return bb.isVerticesDataPresent("instanceColor") && (bb.IAb || bb.hasThinInstances) && (ab.INSTANCESCOLOR = !0), Mb && function(bb, ab) {
        if (bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          ab.NUM_BONE_INFLUENCERS = bb.numBoneInfluencers;
          const Ub = void 0 !== ab.BONETEXTURE;
          if (bb.skeleton.isUsingTextureForMatrices && Ub) ab.BONETEXTURE = !0;
          else {
            ab.BonesPerMesh = bb.skeleton.bones.length + 1, ab.BONETEXTURE = !Ub && void 0;
            const Mb = bb.oN(),
              Tb = Mb.prePassRenderer;
            if (Tb && Tb.enabled) {
              const Ub = -1 === Tb.excludedSkinnedMesh.indexOf(bb);
              ab.BONES_VELOCITY_ENABLED = Ub
            }
            const Eb = !0 === ab.MULTIVIEW,
              Yb = 2 * ab.BonesPerMesh + (Eb ? 1 : 0);
            if (Kb.get(bb.skeleton) !== Yb) {
              Kb.set(bb.skeleton, Yb);
              const Ub = Mb.vj().getCaps().maxVertexUniformVectors;
              if (Ub && !ob.has(bb.skeleton)) {
                const Mb = 4 * ab.BonesPerMesh,
                  Tb = Eb ? rb : ub,
                  Yb = Math.max(Ub - Tb, 0);
                (Mb > Yb || Eb && 3 * Mb > Ub) && (ob.add(bb.skeleton), Ab.e.Warn(`Skeleton "${bb.skeleton.name}": ${bb.skeleton.bones.length} bones stored as vertex uniforms use ${Mb} of ~${Yb} usable uniform vectors${Eb?" (multiview)":""} on a device reporting ${Ub}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else ab.NUM_BONE_INFLUENCERS = 0, ab.BonesPerMesh = 0, void 0 !== ab.BONETEXTURE && (ab.BONETEXTURE = !1)
      }(bb, ab), Tb && function(bb, ab) {
        const Ub = bb.morphTargetManager;
        Ub ? (ab.MORPHTARGETS_UV = Ub.supportsUVs && ab.UV1, ab.MORPHTARGETS_UV2 = Ub.supportsUV2s && ab.UV2, ab.MORPHTARGETS_TANGENT = Ub.supportsTangents && ab.TANGENT, ab.MORPHTARGETS_NORMAL = Ub.supportsNormals && ab.NORMAL, ab.MORPHTARGETS_POSITION = Ub.supportsPositions, ab.MORPHTARGETS_COLOR = Ub.supportsColors, ab.MORPHTARGETTEXTURE_HASUVS = Ub.hasUVs, ab.MORPHTARGETTEXTURE_HASUV2S = Ub.hasUV2s, ab.MORPHTARGETTEXTURE_HASTANGENTS = Ub.hasTangents, ab.MORPHTARGETTEXTURE_HASNORMALS = Ub.hasNormals, ab.MORPHTARGETTEXTURE_HASPOSITIONS = Ub.hasPositions, ab.MORPHTARGETTEXTURE_HASCOLORS = Ub.hasColors, ab.NUM_MORPH_INFLUENCERS = Ub.numMaxInfluencers || Ub.numInfluencers, ab.MORPHTARGETS = ab.NUM_MORPH_INFLUENCERS > 0, ab.MORPHTARGETS_TEXTURE = Ub.isUsingTextureForTargets) : (ab.MORPHTARGETS_UV = !1, ab.MORPHTARGETS_UV2 = !1, ab.MORPHTARGETS_TANGENT = !1, ab.MORPHTARGETS_NORMAL = !1, ab.MORPHTARGETS_POSITION = !1, ab.MORPHTARGETS_COLOR = !1, ab.MORPHTARGETTEXTURE_HASUVS = !1, ab.MORPHTARGETTEXTURE_HASUV2S = !1, ab.MORPHTARGETTEXTURE_HASTANGENTS = !1, ab.MORPHTARGETTEXTURE_HASNORMALS = !1, ab.MORPHTARGETTEXTURE_HASPOSITIONS = !1, ab.MORPHTARGETTEXTURE_HAS_COLORS = !1, ab.MORPHTARGETS = !1, ab.NUM_MORPH_INFLUENCERS = 0)
      }(bb, ab), Yb && function(bb, ab) {
        const Ub = bb.bakedVertexAnimationManager;
        ab.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Ub || !Ub.isEnabled)
      }(bb, ab), !0
    }

    function tb(bb, ab) {
      if (bb.activeCamera) {
        const Ub = ab.MULTIVIEW;
        ab.MULTIVIEW = null !== bb.activeCamera.outputRenderTarget && bb.activeCamera.outputRenderTarget.getViewCount() > 1, ab.MULTIVIEW != Ub && ab.markAsUnprocessed()
      }
    }

    function wb(bb, ab, Ub) {
      const Ab = ab.ORDER_INDEPENDENT_TRANSPARENCY,
        Mb = ab.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      ab.ORDER_INDEPENDENT_TRANSPARENCY = bb.useOrderIndependentTransparency && Ub, ab.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !bb.vj().getCaps().textureFloatLinearFiltering, Ab === ab.ORDER_INDEPENDENT_TRANSPARENCY && Mb === ab.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ab.markAsUnprocessed()
    }

    function sb(bb, ab, Ub) {
      const Ab = ab.PREPASS;
      if (!ab._arePrePassDirty) return;
      const Mb = [{
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
      if (bb.prePassRenderer && bb.prePassRenderer.enabled && Ub) {
        ab.PREPASS = !0, ab.SCENE_MRT_COUNT = bb.prePassRenderer.mrtCount, ab.PREPASS_NORMAL_WORLDSPACE = bb.prePassRenderer.generateNormalsInWorldSpace, ab.PREPASS_COLOR = !0, ab.PREPASS_COLOR_INDEX = 0;
        for (let Ub = 0; Ub < Mb.length; Ub++) {
          const Ab = bb.prePassRenderer.getIndex(Mb[Ub].type); - 1 !== Ab ? (ab[Mb[Ub].define] = !0, ab[Mb[Ub].index] = Ab) : ab[Mb[Ub].define] = !1
        }
      } else {
        ab.PREPASS = !1;
        for (let bb = 0; bb < Mb.length; bb++) ab[Mb[bb].define] = !1
      }
      ab.PREPASS != Ab && (ab.markAsUnprocessed(), ab.markAsImageProcessingDirty())
    }

    function gb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Mb && Mb.push("Light" + bb), Tb || (ab.push("vLightData" + bb, "vLightDiffuse" + bb, "vLightSpecular" + bb, "vLightDirection" + bb, "vLightWidth" + bb, "vLightHeight" + bb, "vLightFalloff" + bb, "vLightGround" + bb, "vSliceData" + bb, "vSliceRanges" + bb, "lightMatrix" + bb, "shadowsInfo" + bb, "depthValues" + bb), Ub.push("shadowTexture" + bb), Ub.push("depthTexture" + bb), ab.push("viewFrustumZ" + bb, "cascadeBlendFactor" + bb, "lightSizeUVCorrection" + bb, "depthCorrection" + bb, "penumbraDarkness" + bb, "frustumLengths" + bb), Ab && (Ub.push("projectionLightTexture" + bb), ab.push("textureProjectionMatrix" + bb)), Eb && Ub.push("iesLightTexture" + bb), Bb && Ub.push("rectAreaLightEmissionTexture" + bb), Yb && (Ub.push("lightDataTexture" + bb), eb || Ub.push("tileMaskTexture" + bb)))
    }

    function Cb(bb, ab, Ub) {
      const Ab = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Ub && Ab.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), bb.push(...Ab);
      ab.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Vb(bb, ab, Ub) {
      let Ab, Mb, Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Eb = null;
      if (bb.uniformsNames) {
        const Yb = bb;
        Ab = Yb.uniformsNames, Mb = Yb.uniformBuffersNames, ab = Yb.samplers, Ub = Yb.defines, Tb = Yb.maxSimultaneousLights || 0, Eb = Yb.shaderLanguage ?? null
      } else Ab = bb, ab || (ab = []);
      for (let Yb = 0; Yb < Tb && Ub["LIGHT" + Yb]; Yb++) gb(Yb, Ab, ab, Ub["PROJECTEDLIGHTTEXTURE" + Yb], Mb, !1, Ub["IESLIGHTTEXTURE" + Yb], Ub["CLUSTLIGHT" + Yb], Ub["RECTAREALIGHTEMISSIONTEXTURE" + Yb], 1 === Eb);
      Ub.NUM_MORPH_INFLUENCERS && (Ab.push("morphTargetInfluences"), Ab.push("morphTargetCount")), Ub.BAKED_VERTEX_ANIMATION_TEXTURE && (Ab.push("bakedVertexAnimationSettings"), Ab.push("bakedVertexAnimationTextureSizeInverted"), Ab.push("bakedVertexAnimationTime"), ab.push("bakedVertexAnimationTexture"))
    }

    function Ob(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      bb.addUniform("vReflectionInfos", 2), bb.addUniform("reflectionMatrix", 16), ab && bb.addUniform("vReflectionMicrosurfaceInfos", 3), Ub && (bb.addUniform("vReflectionPosition", 3), bb.addUniform("vReflectionSize", 3)), Ab && (bb.addUniform("vReflectionFilteringInfo", 2), bb.addUniform("vReflectionDominantDirection", 3)), Tb && bb.addUniform("vReflectionColor", 3), Mb && (bb.addUniform("vSphericalL00", 3), bb.addUniform("vSphericalL1_1", 3), bb.addUniform("vSphericalL10", 3), bb.addUniform("vSphericalL11", 3), bb.addUniform("vSphericalL2_2", 3), bb.addUniform("vSphericalL2_1", 3), bb.addUniform("vSphericalL20", 3), bb.addUniform("vSphericalL21", 3), bb.addUniform("vSphericalL22", 3), bb.addUniform("vSphericalX", 3), bb.addUniform("vSphericalY", 3), bb.addUniform("vSphericalZ", 3), bb.addUniform("vSphericalXX_ZZ", 3), bb.addUniform("vSphericalYY_ZZ", 3), bb.addUniform("vSphericalZZ", 3), bb.addUniform("vSphericalXY", 3), bb.addUniform("vSphericalYZ", 3), bb.addUniform("vSphericalZX", 3))
    }
  },
  39454: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(36401),
      Mb = Ub(39394);
    class Tb extends Mb.d {
      constructor(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(bb, ab, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Ab.b, this._storeEffectOnSubMeshes = Ub
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(bb, ab) {
        return !!bb && (!this._storeEffectOnSubMeshes || (!bb.mD || 0 === bb.mD.length || this.isReadyForSubMesh(bb, bb.mD[0], ab)))
      }
      _isReadyForSubMesh(bb) {
        const ab = bb.materialDefines;
        return !(this.checkReadyOnEveryCall || !bb.effect || !ab || ab._renderId !== this.oN().getRenderId())
      }
      bindOnlyWorldMatrix(bb) {
        this._activeEffect.setMatrix("world", bb)
      }
      bindOnlyNormalMatrix(bb) {
        this._activeEffect.setMatrix("normalMatrix", bb)
      }
      bind(bb, ab) {
        ab && this.bindForSubMesh(bb, ab, ab.mD[0])
      }
      _afterBind(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(bb, ab, Ub), this.oN()._cachedEffect = ab, Ub ? Ub._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Ub._drawWrapper._forceRebindOnNextCall || bb.isCachedMaterialInvalid(this, ab, Ab)
      }
      dispose(bb, ab, Ub) {
        this._activeEffect = void 0, super.dispose(bb, ab, Ub)
      }
    }
  },
  39478: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Mb
    });
    const Ab = new WeakMap;

    function Mb(bb) {
      const ab = bb.getVertexBuffers();
      if (!ab) return null;
      let Ub = Ab.get(bb);
      if (Ub) {
        let bb = !1;
        for (const Ab in ab)
          if (!Ub.has(Ab)) {
            bb = !0;
            break
          } if (!bb) return Ub
      } else Ub = new Map, Ab.set(bb, Ub);
      for (const Ab in ab) {
        const bb = ab[Ab];
        if (bb) {
          const ab = bb.byteOffset,
            Mb = bb.byteStride,
            Tb = bb.type,
            Eb = bb.normalized;
          Ub.set(Ab, {
            offset: ab,
            stride: Mb,
            type: Tb,
            normalized: Eb
          })
        }
      }
      return Ub
    }

    function Tb(bb, ab) {
      ab.forEach(((ab, Ub) => {
        const Ab = `vp_${Ub}_info`;
        bb.setFloat4(Ab, ab.offset, ab.stride, ab.type, ab.normalized ? 1 : 0)
      }))
    }
  },
  39422: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      g: () => Bb
    });
    var Ab = Ub(39104),
      Mb = Ub(36401),
      Tb = Ub(39110);
    let Eb = (() => {
      var bb;
      let ab, Ub, Mb = [];
      return bb = class {
        static extractMinAndMaxIndexed(bb, ab, Ub, Ab, Mb, Tb) {
          for (let Eb = Ub; Eb < Ub + Ab; Eb++) {
            const Ub = 3 * ab[Eb],
              Ab = bb[Ub],
              Yb = bb[Ub + 1],
              Bb = bb[Ub + 2];
            Mb.minimizeInPlaceFromFloats(Ab, Yb, Bb), Tb.maximizeInPlaceFromFloats(Ab, Yb, Bb)
          }
        }
        static extractMinAndMax(bb, ab, Ub, Ab, Mb, Tb) {
          for (let Eb = ab, Yb = ab * Ab; Eb < ab + Ub; Eb++, Yb += Ab) {
            const ab = bb[Yb],
              Ub = bb[Yb + 1],
              Ab = bb[Yb + 2];
            Mb.minimizeInPlaceFromFloats(ab, Ub, Ab), Tb.maximizeInPlaceFromFloats(ab, Ub, Ab)
          }
        }
      }, (() => {
        const Eb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [Tb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Ub = [Tb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Ab.h)(bb, null, ab, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMaxIndexed" in bb,
            get: bb => bb.extractMinAndMaxIndexed
          },
          metadata: Eb
        }, null, Mb), (0, Ab.h)(bb, null, Ub, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMax" in bb,
            get: bb => bb.extractMinAndMax
          },
          metadata: Eb
        }, null, Mb), Eb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eb
        }), (0, Ab.k)(bb, Mb)
      })(), bb
    })();

    function Yb(bb, ab, Ub, Ab) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Yb = new Mb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Bb = new Mb.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Eb.extractMinAndMaxIndexed(bb, ab, Ub, Ab, Yb, Bb), Tb && (Yb.x -= Yb.x * Tb.x + Tb.y, Yb.y -= Yb.y * Tb.x + Tb.y, Yb.z -= Yb.z * Tb.x + Tb.y, Bb.x += Bb.x * Tb.x + Tb.y, Bb.y += Bb.y * Tb.x + Tb.y, Bb.z += Bb.z * Tb.x + Tb.y), {
        minimum: Yb,
        maximum: Bb
      }
    }

    function Bb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Tb = arguments.length > 4 ? arguments[4] : void 0;
      const Yb = new Mb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Bb = new Mb.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Tb || (Tb = 3), Eb.extractMinAndMax(bb, ab, Ub, Tb, Yb, Bb), Ab && (Yb.x -= Yb.x * Ab.x + Ab.y, Yb.y -= Yb.y * Ab.x + Ab.y, Yb.z -= Yb.z * Ab.x + Ab.y, Bb.x += Bb.x * Ab.x + Ab.y, Bb.y += Bb.y * Ab.x + Ab.y, Bb.z += Bb.z * Ab.x + Ab.y), {
        minimum: Yb,
        maximum: Bb
      }
    }
  },
  39400: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb
    });
    var Ab, Mb = Ub(39244),
      Tb = Ub(39404),
      Eb = Ub(39413),
      Yb = Ub(39422),
      Bb = Ub(39425),
      eb = Ub(38982);
    class vb {
      get materialDefines() {
        const bb = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof bb ? null : bb
      }
      set materialDefines(bb) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = bb
      }
      _getDrawWrapper(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb = bb ?? this._engine.currentRenderPassId;
        let Ub = this._drawWrappers[bb];
        return !Ub && ab && (this._drawWrappers[bb] = Ub = new Bb.b(this._mesh.oN().vj())), Ub
      }
      _removeDrawWrapper(bb) {
        let ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[bb]?.dispose(ab), this._drawWrappers[bb] = void 0
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Mb = this._drawWrapper;
        Mb.setEffect(bb, ab, Ab), void 0 !== Ub && (Mb.materialContext = Ub), bb || (Mb.defines = null, Mb.materialContext = void 0)
      }
      resetDrawCache(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== bb) return void this._removeDrawWrapper(bb, !0, ab);
          for (const bb of this._drawWrappers) bb?.dispose(ab)
        }
        this._drawWrappers = []
      }
      static AddToMesh(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        return new vb(bb, ab, Ub, Ab, Mb, Tb, Eb, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        let Yb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Bb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = bb, this.verticesStart = ab, this.verticesCount = Ub, this.indexStart = Ab, this.indexCount = Mb, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Tb, this._renderingMesh = Eb || Tb, Bb && Tb.mD.push(this), this._engine = this._mesh.oN().vj(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Tb.mD.length - 1, Yb && (this.refreshBoundingInfo(), Tb.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      DH() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.DH() : this._boundingInfo
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
      Rj() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ab = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!ab) return bb && this._mesh.oN()._hasDefaultMaterial ? this._mesh.oN().defaultMaterial : null;
        if (this._isMultiMaterial(ab)) {
          const bb = ab.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== bb && (this._currentMaterial = bb, this.resetDrawCache()), bb
        }
        return ab
      }
      _isMultiMaterial(bb) {
        return void 0 !== bb.getSubMaterial
      }
      refreshBoundingInfo() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (bb || (bb = this._renderingMesh.getVerticesData(Mb.m.PositionKind)), !bb) return this._boundingInfo = this._mesh.DH(), this;
        const ab = this._renderingMesh.uUb();
        let Ub;
        if (0 === this.indexStart && this.indexCount === ab.length) {
          const bb = this._renderingMesh.DH();
          Ub = {
            minimum: bb.minimum.clone(),
            maximum: bb.maximum.clone()
          }
        } else Ub = (0, Yb.e)(bb, ab, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Ub.minimum, Ub.maximum) : this._boundingInfo = new Eb.b(Ub.minimum, Ub.maximum), this
      }
      _checkCollision(bb) {
        return this.DH()._checkCollision(bb)
      }
      updateBoundingInfo(bb) {
        let ab = this.DH();
        return ab || (this.refreshBoundingInfo(), ab = this.DH()), ab && ab.update(bb), this
      }
      isInFrustum(bb) {
        const ab = this.DH();
        return !!ab && ab.isInFrustum(bb, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(bb) {
        const ab = this.DH();
        return !!ab && ab.isCompletelyInFrustum(bb)
      }
      render(bb) {
        return this._renderingMesh.render(this, bb, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(bb, ab) {
        if (!this._linesIndexBuffer) {
          const Ub = 6 * Math.floor(this.indexCount / 3),
            Ab = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Ub) : new Uint16Array(Ub);
          let Mb = 0;
          if (0 === bb.length)
            for (let bb = this.indexStart; bb < this.indexStart + this.indexCount; bb += 3) Ab[Mb++] = bb, Ab[Mb++] = bb + 1, Ab[Mb++] = bb + 1, Ab[Mb++] = bb + 2, Ab[Mb++] = bb + 2, Ab[Mb++] = bb;
          else
            for (let ab = this.indexStart; ab < this.indexStart + this.indexCount; ab += 3) Ab[Mb++] = bb[ab], Ab[Mb++] = bb[ab + 1], Ab[Mb++] = bb[ab + 1], Ab[Mb++] = bb[ab + 2], Ab[Mb++] = bb[ab + 2], Ab[Mb++] = bb[ab];
          this._linesIndexBuffer = ab.createIndexBuffer(Ab), this._linesIndexCount = Ab.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(bb) {
        const ab = this.DH();
        return !!ab && bb.intersectsBox(ab.boundingBox)
      }
      intersects(bb, ab, Ub, Ab, Mb) {
        const Tb = this.Rj();
        if (!Tb) return null;
        let Eb = 3,
          Yb = !1;
        switch (Tb.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Eb = 1, Yb = !0
        }
        return 4 === Tb.fillMode ? Ub.length ? this._intersectLines(bb, ab, Ub, this._mesh.intersectionThreshold, Ab) : this._intersectUnIndexedLines(bb, ab, Ub, this._mesh.intersectionThreshold, Ab) : !Ub.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(bb, ab, Ub, Ab, Mb) : this._intersectTriangles(bb, ab, Ub, Eb, Yb, Ab, Mb)
      }
      _intersectLines(bb, ab, Ub, Ab, Mb) {
        let Eb = null;
        for (let Yb = this.indexStart; Yb < this.indexStart + this.indexCount; Yb += 2) {
          const Bb = ab[Ub[Yb]],
            eb = ab[Ub[Yb + 1]],
            vb = bb.intersectionSegment(Bb, eb, Ab);
          if (!(vb < 0) && ((Mb || !Eb || vb < Eb.distance) && (Eb = new Tb.d(null, null, vb), Eb.faceId = Yb / 2, Mb))) break
        }
        return Eb
      }
      _intersectUnIndexedLines(bb, ab, Ub, Ab, Mb) {
        let Eb = null;
        for (let Yb = this.verticesStart; Yb < this.verticesStart + this.verticesCount; Yb += 2) {
          const Ub = ab[Yb],
            Bb = ab[Yb + 1],
            eb = bb.intersectionSegment(Ub, Bb, Ab);
          if (!(eb < 0) && ((Mb || !Eb || eb < Eb.distance) && (Eb = new Tb.d(null, null, eb), Eb.faceId = Yb / 2, Mb))) break
        }
        return Eb
      }
      _intersectTriangles(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        let Yb = null,
          Bb = -1;
        for (let eb = this.indexStart; eb < this.indexStart + this.indexCount - (3 - Ab); eb += Ab) {
          Bb++;
          const Ab = Ub[eb],
            vb = Ub[eb + 1],
            Lb = Ub[eb + 2];
          if (Mb && 4294967295 === Lb) {
            eb += 2;
            continue
          }
          const Pb = ab[Ab],
            Xb = ab[vb],
            jb = ab[Lb];
          if (!Pb || !Xb || !jb) continue;
          if (Eb && !Eb(Pb, Xb, jb, bb, Ab, vb, Lb)) continue;
          const Rb = bb.intersectsTriangle(Pb, Xb, jb);
          if (Rb) {
            if (Rb.distance < 0) continue;
            if ((Tb || !Yb || Rb.distance < Yb.distance) && (Yb = Rb, Yb.faceId = Bb, Tb)) break
          }
        }
        return Yb
      }
      _intersectUnIndexedTriangles(bb, ab, Ub, Ab, Mb) {
        let Tb = null;
        for (let Eb = this.verticesStart; Eb < this.verticesStart + this.verticesCount; Eb += 3) {
          const Ub = ab[Eb],
            Yb = ab[Eb + 1],
            Bb = ab[Eb + 2];
          if (Mb && !Mb(Ub, Yb, Bb, bb, -1, -1, -1)) continue;
          const eb = bb.intersectsTriangle(Ub, Yb, Bb);
          if (eb) {
            if (eb.distance < 0) continue;
            if ((Ab || !Tb || eb.distance < Tb.distance) && (Tb = eb, Tb.faceId = Eb / 3, Ab)) break
          }
        }
        return Tb
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(bb, ab) {
        const Ub = new vb(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, bb, ab, !1);
        if (!this.IsGlobal) {
          const bb = this.DH();
          if (!bb) return Ub;
          Ub._boundingInfo = new Eb.b(bb.minimum, bb.maximum)
        }
        return Ub
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.oN().vj()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const ab = this._mesh.mD.indexOf(this);
        this._mesh.mD.splice(ab, 1), this.resetDrawCache(void 0, bb)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(bb, ab, Ub, Ab, Mb) {
        let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = Number.MAX_VALUE,
          Yb = -Number.MAX_VALUE;
        const Bb = (Mb || Ab).uUb();
        for (let eb = ab; eb < ab + Ub; eb++) {
          const bb = Bb[eb];
          bb < Eb && (Eb = bb), bb > Yb && (Yb = bb)
        }
        return new vb(bb, Eb, Yb - Eb + 1, ab, Ub, Ab, Mb, Tb)
      }
    }(Ab = vb.prototype).projectToRef ?? (Ab.projectToRef = (0, eb.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);