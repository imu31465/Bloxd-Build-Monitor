export const id = 298;
export const ids = [298];
export const modules = {
  41981: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor(bb, wb, Mb) {
        this.bu = bb, this.bv = wb, this.distance = Mb, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41988: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    var eb = Mb(38299),
      Hb = Mb(38285),
      pb = Mb(38294);
    class Vb {
      constructor(bb, wb, Mb) {
        this.vectors = (0, eb.d)(8, Hb.o.Zero), this.center = Hb.o.Zero(), this.centerWorld = Hb.o.Zero(), this.extendSize = Hb.o.Zero(), this.extendSizeWorld = Hb.o.Zero(), this.directions = (0, eb.d)(3, Hb.o.Zero), this.vectorsWorld = (0, eb.d)(8, Hb.o.Zero), this.minimumWorld = Hb.o.Zero(), this.maximumWorld = Hb.o.Zero(), this.minimum = Hb.o.Zero(), this.maximum = Hb.o.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(bb, wb, Mb)
      }
      reConstruct(bb, wb, Mb) {
        const eb = bb.x,
          pb = bb.y,
          Vb = bb.z,
          gb = wb.x,
          lb = wb.y,
          Lb = wb.z,
          Ib = this.vectors;
        this.minimum.twb(eb, pb, Vb), this.maximum.twb(gb, lb, Lb), Ib[0].twb(eb, pb, Vb), Ib[1].twb(gb, lb, Lb), Ib[2].twb(gb, pb, Vb), Ib[3].twb(eb, lb, Vb), Ib[4].twb(eb, pb, Lb), Ib[5].twb(gb, lb, Vb), Ib[6].twb(eb, lb, Lb), Ib[7].twb(gb, pb, Lb), wb.addToRef(bb, this.center).scaleInPlace(.5), wb.subtractToRef(bb, this.extendSize).scaleInPlace(.5), this._worldMatrix = Mb || Hb.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(bb) {
        const wb = Vb._TmpVector3,
          Mb = this.maximum.subtractToRef(this.minimum, wb[0]),
          eb = Mb.length();
        Mb.normalizeFromLength(eb);
        const Hb = eb * bb,
          pb = Mb.scaleInPlace(.5 * Hb),
          gb = this.center.subtractToRef(pb, wb[1]),
          lb = this.center.addToRef(pb, wb[2]);
        return this.reConstruct(gb, lb, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        const wb = this.minimumWorld,
          Mb = this.maximumWorld,
          eb = this.directions,
          pb = this.vectorsWorld,
          Vb = this.vectors;
        if (bb.isIdentity()) {
          wb.eZ(this.minimum), Mb.eZ(this.maximum);
          for (let bb = 0; bb < 8; ++bb) pb[bb].eZ(Vb[bb]);
          this.extendSizeWorld.eZ(this.extendSize), this.centerWorld.eZ(this.center)
        } else {
          wb.Jbb(Number.MAX_VALUE), Mb.Jbb(-Number.MAX_VALUE);
          for (let eb = 0; eb < 8; ++eb) {
            const gb = pb[eb];
            Hb.o.TransformCoordinatesToRef(Vb[eb], bb, gb), wb.minimizeInPlace(gb), Mb.maximizeInPlace(gb)
          }
          Mb.subtractToRef(wb, this.extendSizeWorld).scaleInPlace(.5), Mb.addToRef(wb, this.centerWorld).scaleInPlace(.5)
        }
        Hb.o.FromArrayToRef(bb.m, 0, eb[0]), Hb.o.FromArrayToRef(bb.m, 4, eb[1]), Hb.o.FromArrayToRef(bb.m, 8, eb[2]), this._worldMatrix = bb
      }
      isInFrustum(bb) {
        return Vb.IsInFrustum(this.vectorsWorld, bb)
      }
      isCompletelyInFrustum(bb) {
        return Vb.IsCompletelyInFrustum(this.vectorsWorld, bb)
      }
      intersectsPoint(bb) {
        const wb = this.minimumWorld,
          Mb = this.maximumWorld,
          eb = wb.x,
          Hb = wb.y,
          Vb = wb.z,
          gb = Mb.x,
          lb = Mb.y,
          Lb = Mb.z,
          Ib = bb.x,
          Ob = bb.y,
          Ub = bb.z,
          tb = -pb.e;
        return !(gb - Ib < tb || tb > Ib - eb) && (!(lb - Ob < tb || tb > Ob - Hb) && !(Lb - Ub < tb || tb > Ub - Vb))
      }
      intersectsSphere(bb) {
        return Vb.IntersectsSphere(this.minimumWorld, this.maximumWorld, bb.centerWorld, bb.radiusWorld)
      }
      intersectsMinMax(bb, wb) {
        const Mb = this.minimumWorld,
          eb = this.maximumWorld,
          Hb = Mb.x,
          pb = Mb.y,
          Vb = Mb.z,
          gb = eb.x,
          lb = eb.y,
          Lb = eb.z,
          Ib = bb.x,
          Ob = bb.y,
          Ub = bb.z,
          tb = wb.x,
          Cb = wb.y,
          Eb = wb.z;
        return !(gb < Ib || Hb > tb) && (!(lb < Ob || pb > Cb) && !(Lb < Ub || Vb > Eb))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(bb, wb) {
        return bb.intersectsMinMax(wb.minimumWorld, wb.maximumWorld)
      }
      static IntersectsSphere(bb, wb, Mb, eb) {
        const pb = Vb._TmpVector3[0];
        Hb.o.ClampToRef(Mb, bb, wb, pb);
        return Hb.o.DistanceSquared(Mb, pb) <= eb * eb
      }
      static IsCompletelyInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; ++Mb) {
          const eb = wb[Mb];
          for (let wb = 0; wb < 8; ++wb)
            if (eb.dotCoordinate(bb[wb]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; ++Mb) {
          let eb = !0;
          const Hb = wb[Mb];
          for (let wb = 0; wb < 8; ++wb)
            if (Hb.dotCoordinate(bb[wb]) >= 0) {
              eb = !1;
              break
            } if (eb) return !1
        }
        return !0
      }
    }
    Vb._TmpVector3 = (0, eb.d)(3, Hb.o.Zero)
  },
  41984: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ob
    });
    var eb = Mb(38299),
      Hb = Mb(38285),
      pb = Mb(41988);
    class Vb {
      constructor(bb, wb, Mb) {
        this.center = Hb.o.Zero(), this.centerWorld = Hb.o.Zero(), this.minimum = Hb.o.Zero(), this.maximum = Hb.o.Zero(), this.reConstruct(bb, wb, Mb)
      }
      reConstruct(bb, wb, Mb) {
        this.minimum.eZ(bb), this.maximum.eZ(wb);
        const eb = Hb.o.Distance(bb, wb);
        wb.addToRef(bb, this.center).scaleInPlace(.5), this.radius = .5 * eb, this._update(Mb || Hb.b.IdentityReadOnly)
      }
      scale(bb) {
        const wb = Vb._TmpVector3,
          Mb = this.maximum.subtractToRef(this.minimum, wb[0]),
          eb = Mb.length();
        Mb.normalizeFromLength(eb);
        const Hb = eb * bb,
          pb = Mb.scaleInPlace(.5 * Hb),
          gb = this.center.subtractToRef(pb, wb[1]),
          lb = this.center.addToRef(pb, wb[2]);
        return this.reConstruct(gb, lb, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(bb) {
        if (bb.isIdentity()) this.centerWorld.eZ(this.center), this.radiusWorld = this.radius;
        else {
          Hb.o.TransformCoordinatesToRef(this.center, bb, this.centerWorld);
          const wb = Vb._TmpVector3[0];
          Hb.o.TransformNormalFromFloatsToRef(1, 1, 1, bb, wb), this.radiusWorld = Math.max(Math.abs(wb.x), Math.abs(wb.y), Math.abs(wb.z)) * this.radius
        }
      }
      isInFrustum(bb) {
        const wb = this.centerWorld,
          Mb = this.radiusWorld;
        for (let eb = 0; eb < 6; eb++)
          if (bb[eb].dotCoordinate(wb) <= -Mb) return !1;
        return !0
      }
      isCenterInFrustum(bb) {
        const wb = this.centerWorld;
        for (let Mb = 0; Mb < 6; Mb++)
          if (bb[Mb].dotCoordinate(wb) < 0) return !1;
        return !0
      }
      intersectsPoint(bb) {
        const wb = Hb.o.DistanceSquared(this.centerWorld, bb);
        return !(this.radiusWorld * this.radiusWorld < wb)
      }
      static Intersects(bb, wb) {
        const Mb = Hb.o.DistanceSquared(bb.centerWorld, wb.centerWorld),
          eb = bb.radiusWorld + wb.radiusWorld;
        return !(eb * eb < Mb)
      }
      static CreateFromCenterAndRadius(bb, wb, Mb) {
        this._TmpVector3[0].eZ(bb), this._TmpVector3[1].twb(0, 0, wb), this._TmpVector3[2].eZ(bb), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].zpb(this._TmpVector3[1]);
        const eb = new Vb(this._TmpVector3[0], this._TmpVector3[2]);
        return eb._worldMatrix = Mb || Hb.b.Identity(), eb
      }
    }
    Vb._TmpVector3 = (0, eb.d)(3, Hb.o.Zero);
    const gb = {
        min: 0,
        max: 0
      },
      lb = {
        min: 0,
        max: 0
      },
      Lb = (bb, wb, Mb) => {
        const eb = Hb.o.Dot(wb.centerWorld, bb),
          pb = Math.abs(Hb.o.Dot(wb.directions[0], bb)) * wb.extendSize.x + Math.abs(Hb.o.Dot(wb.directions[1], bb)) * wb.extendSize.y + Math.abs(Hb.o.Dot(wb.directions[2], bb)) * wb.extendSize.z;
        Mb.min = eb - pb, Mb.max = eb + pb
      },
      Ib = (bb, wb, Mb) => (Lb(bb, wb, gb), Lb(bb, Mb, lb), !(gb.min > lb.max || lb.min > gb.max));
    class Ob {
      constructor(bb, wb, Mb) {
        this._isLocked = !1, this.boundingBox = new pb.b(bb, wb, Mb), this.Kpb = new Vb(bb, wb, Mb)
      }
      reConstruct(bb, wb, Mb) {
        this.boundingBox.reConstruct(bb, wb, Mb), this.Kpb.reConstruct(bb, wb, Mb)
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
        this._isLocked || (this.boundingBox._update(bb), this.Kpb._update(bb))
      }
      centerOn(bb, wb) {
        const Mb = Ob._TmpVector3[0].eZ(bb).zpb(wb),
          eb = Ob._TmpVector3[1].eZ(bb).addInPlace(wb);
        return this.boundingBox.reConstruct(Mb, eb, this.boundingBox.getWorldMatrix()), this.Kpb.reConstruct(Mb, eb, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(bb) {
        const wb = Hb.o.Minimize(this.minimum, bb),
          Mb = Hb.o.Maximize(this.maximum, bb);
        return this.reConstruct(wb, Mb, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(bb) {
        const wb = Hb.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(wb);
        const Mb = Hb.j.YC[0];
        return Hb.o.TransformCoordinatesToRef(bb.boundingBox.minimumWorld, wb, Mb), this.encapsulate(Mb), Hb.o.TransformCoordinatesToRef(bb.boundingBox.maximumWorld, wb, Mb), this.encapsulate(Mb), this
      }
      scale(bb) {
        return this.boundingBox.scale(bb), this.Kpb.scale(bb), this
      }
      isInFrustum(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === wb || 3 === wb) && this.Kpb.isCenterInFrustum(bb)) return !0;
        if (!this.Kpb.isInFrustum(bb)) return !1;
        return !(1 !== wb && 3 !== wb) || this.boundingBox.isInFrustum(bb)
      }
      get diagonalLength() {
        const bb = this.boundingBox;
        return bb.maximumWorld.subtractToRef(bb.minimumWorld, Ob._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(bb) {
        return this.boundingBox.isCompletelyInFrustum(bb)
      }
      _checkCollision(bb) {
        return bb._canDoCollision(this.Kpb.centerWorld, this.Kpb.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(bb) {
        return !!this.Kpb.centerWorld && (!!this.Kpb.intersectsPoint(bb) && !!this.boundingBox.intersectsPoint(bb))
      }
      intersects(bb, wb) {
        if (!Vb.Intersects(this.Kpb, bb.Kpb)) return !1;
        if (!pb.b.Intersects(this.boundingBox, bb.boundingBox)) return !1;
        if (!wb) return !0;
        const Mb = this.boundingBox,
          eb = bb.boundingBox;
        return !!Ib(Mb.directions[0], Mb, eb) && (!!Ib(Mb.directions[1], Mb, eb) && (!!Ib(Mb.directions[2], Mb, eb) && (!!Ib(eb.directions[0], Mb, eb) && (!!Ib(eb.directions[1], Mb, eb) && (!!Ib(eb.directions[2], Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[0], eb.directions[0]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[0], eb.directions[1]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[0], eb.directions[2]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[1], eb.directions[0]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[1], eb.directions[1]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[1], eb.directions[2]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[2], eb.directions[0]), Mb, eb) && (!!Ib(Hb.o.Cross(Mb.directions[2], eb.directions[1]), Mb, eb) && !!Ib(Hb.o.Cross(Mb.directions[2], eb.directions[2]), Mb, eb))))))))))))))
      }
    }
    Ob._TmpVector3 = (0, eb.d)(2, Hb.o.Zero)
  },
  42004: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      f: () => lb,
      h: () => gb,
      j: () => Vb
    });
    var eb = Mb(41825),
      Hb = Mb(38285);

    function pb(bb) {
      -1 === bb.indexOf("vClipPlane") && bb.push("vClipPlane"), -1 === bb.indexOf("vClipPlane2") && bb.push("vClipPlane2"), -1 === bb.indexOf("vClipPlane3") && bb.push("vClipPlane3"), -1 === bb.indexOf("vClipPlane4") && bb.push("vClipPlane4"), -1 === bb.indexOf("vClipPlane5") && bb.push("vClipPlane5"), -1 === bb.indexOf("vClipPlane6") && bb.push("vClipPlane6")
    }

    function Vb(bb, wb, Mb) {
      const eb = !!(bb.clipPlane ?? wb.clipPlane),
        Hb = !!(bb.clipPlane2 ?? wb.clipPlane2),
        pb = !!(bb.clipPlane3 ?? wb.clipPlane3),
        Vb = !!(bb.clipPlane4 ?? wb.clipPlane4),
        gb = !!(bb.clipPlane5 ?? wb.clipPlane5),
        lb = !!(bb.clipPlane6 ?? wb.clipPlane6);
      eb && Mb.push("#define CLIPPLANE"), Hb && Mb.push("#define CLIPPLANE2"), pb && Mb.push("#define CLIPPLANE3"), Vb && Mb.push("#define CLIPPLANE4"), gb && Mb.push("#define CLIPPLANE5"), lb && Mb.push("#define CLIPPLANE6")
    }

    function gb(bb, wb, Mb) {
      let eb = !1;
      const Hb = !!(bb.clipPlane ?? wb.clipPlane),
        pb = !!(bb.clipPlane2 ?? wb.clipPlane2),
        Vb = !!(bb.clipPlane3 ?? wb.clipPlane3),
        gb = !!(bb.clipPlane4 ?? wb.clipPlane4),
        lb = !!(bb.clipPlane5 ?? wb.clipPlane5),
        Lb = !!(bb.clipPlane6 ?? wb.clipPlane6);
      return Mb.CLIPPLANE !== Hb && (Mb.CLIPPLANE = Hb, eb = !0), Mb.CLIPPLANE2 !== pb && (Mb.CLIPPLANE2 = pb, eb = !0), Mb.CLIPPLANE3 !== Vb && (Mb.CLIPPLANE3 = Vb, eb = !0), Mb.CLIPPLANE4 !== gb && (Mb.CLIPPLANE4 = gb, eb = !0), Mb.CLIPPLANE5 !== lb && (Mb.CLIPPLANE5 = lb, eb = !0), Mb.CLIPPLANE6 !== Lb && (Mb.CLIPPLANE6 = Lb, eb = !0), eb
    }

    function lb(bb, wb, Mb) {
      let eb = wb.clipPlane ?? Mb.clipPlane;
      Lb(bb, "vClipPlane", eb), eb = wb.clipPlane2 ?? Mb.clipPlane2, Lb(bb, "vClipPlane2", eb), eb = wb.clipPlane3 ?? Mb.clipPlane3, Lb(bb, "vClipPlane3", eb), eb = wb.clipPlane4 ?? Mb.clipPlane4, Lb(bb, "vClipPlane4", eb), eb = wb.clipPlane5 ?? Mb.clipPlane5, Lb(bb, "vClipPlane5", eb), eb = wb.clipPlane6 ?? Mb.clipPlane6, Lb(bb, "vClipPlane6", eb)
    }

    function Lb(bb, wb, Mb) {
      if (Mb) {
        const pb = eb.b.RJ()?.floatingOriginOffset || Hb.o.ZeroReadOnly;
        bb.setFloat4(wb, Mb.normal.x, Mb.normal.y, Mb.normal.z, Mb.d + Hb.o.Dot(Mb.normal, pb))
      }
    }
  },
  42026: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(bb, wb) {
        this._defines[bb] || (bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb), this._defines[bb] = new Array), this._defines[bb].push(wb)
      }
      addCPUSkinningFallback(bb, wb) {
        this._mesh = wb, bb < this._currentRank && (this._currentRank = bb), bb > this._maxRank && (this._maxRank = bb)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(bb, wb) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, bb = bb.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), wb._bonesComputationForcedToCPU = !0;
          const Mb = this._mesh.RJ();
          for (let bb = 0; bb < Mb.meshes.length; bb++) {
            const eb = Mb.meshes[bb];
            if (eb.material) {
              if (eb.computeBonesUsingShaders && 0 !== eb.numBoneInfluencers)
                if (eb.material.getEffect() === wb) eb.computeBonesUsingShaders = !1;
                else if (eb.oR)
                for (const bb of eb.oR) {
                  if (bb.effect === wb) {
                    eb.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && eb.computeBonesUsingShaders && eb.numBoneInfluencers > 0 && (eb.computeBonesUsingShaders = !1)
          }
        } else {
          const wb = this._defines[this._currentRank];
          if (wb)
            for (let Mb = 0; Mb < wb.length; Mb++) bb = bb.replace("#define " + wb[Mb], "");
          this._currentRank++
        }
        return bb
      }
    }
  },
  41963: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => sb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41771),
      Vb = Mb(38318),
      gb = Mb(38313),
      lb = Mb(41972),
      Lb = Mb(41806),
      Ib = Mb(39971),
      Ob = Mb(39001),
      Ub = Mb(41997),
      tb = Mb(41697);
    let Cb = (() => {
      var bb;
      let wb, Mb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, Cb, Eb, Fb = [];
      return bb = class {
        constructor() {
          this._func = (0, eb.m)(this, Fb), this.reset()
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
          tb.d.Clone((() => bb), this)
        }
        serialize() {
          return tb.d.Serialize(this)
        }
        parse(bb, wb, Mb) {
          tb.d.Parse((() => this), bb, wb, Mb)
        }
      }, (() => {
        const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], Vb = [(0, Hb.E)()], gb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ib = [(0, Hb.E)()], Ob = [(0, Hb.E)()], Ub = [(0, Hb.E)()], Cb = [(0, Hb.E)()], Eb = [(0, Hb.E)()], (0, eb.i)(bb, null, wb, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: bb => "func" in bb,
            get: bb => bb.func
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Mb, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: bb => "backFunc" in bb,
            get: bb => bb.backFunc
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, pb, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcRef" in bb,
            get: bb => bb.funcRef
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Vb, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "funcMask" in bb,
            get: bb => bb.funcMask
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, gb, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilFail" in bb,
            get: bb => bb.opStencilFail
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, lb, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "opDepthFail" in bb,
            get: bb => bb.opDepthFail
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Lb, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "opStencilDepthPass" in bb,
            get: bb => bb.opStencilDepthPass
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Ib, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilFail" in bb,
            get: bb => bb.backOpStencilFail
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Ob, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpDepthFail" in bb,
            get: bb => bb.backOpDepthFail
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Ub, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "backOpStencilDepthPass" in bb,
            get: bb => bb.backOpStencilDepthPass
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Cb, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: bb => "mask" in bb,
            get: bb => bb.mask
          },
          metadata: tb
        }, null, Fb), (0, eb.i)(bb, null, Eb, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "enabled" in bb,
            get: bb => bb.enabled
          },
          metadata: tb
        }, null, Fb), tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tb
        })
      })(), bb
    })();
    var Eb = Mb(41999),
      Fb = Mb(41592),
      Bb = Mb(41554);
    let sb = (() => {
      var bb;
      let wb, Mb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb, Jb, Sb, Nb, vb, Qb, Gb, qb, ab, ib, ub = [],
        db = [],
        Pb = [],
        nb = [],
        yb = [],
        ob = [],
        Tb = [],
        kb = [],
        bw = [],
        ww = [],
        Mw = [],
        ew = [],
        Hw = [],
        pw = [],
        Vw = [],
        gw = [],
        lw = [],
        Lw = [],
        Iw = [],
        Ow = [],
        Uw = [],
        tw = [],
        Cw = [],
        Ew = [],
        Fw = [],
        Bw = [],
        sw = [],
        mw = [],
        hw = [],
        zw = [],
        Xw = [],
        xw = [],
        jw = [],
        Kw = [],
        rw = [],
        Rw = [],
        Dw = [],
        Yw = [],
        Zw = [],
        fw = [],
        Aw = [],
        Ww = [],
        Jw = [],
        Sw = [],
        Nw = [],
        vw = [],
        Qw = [],
        Gw = [],
        qw = [],
        aw = [],
        iw = [];
      return bb = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(wb) {
          this._useVertexPulling !== wb && (this._useVertexPulling = wb, this.eeb(bb.MiscDirtyFlag))
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
        set alpha(wb) {
          if (this._alpha === wb) return;
          const Mb = this._alpha;
          this._alpha = wb, 1 !== Mb && 1 !== wb || this.eeb(bb.MiscDirtyFlag + bb.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(wb) {
          this._backFaceCulling !== wb && (this._backFaceCulling = wb, this.eeb(bb.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(wb) {
          const Mb = Math.max(0, Math.min(0 | wb, 4));
          this._textureRepetitionMode !== Mb && (this._textureRepetitionMode = Mb, this.eeb(bb.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(wb) {
          this._cullBackFaces !== wb && (this._cullBackFaces = wb, this.eeb(bb.TextureDirtyFlag))
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
          this._onDisposeObserver && this.vJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.vJ.add(bb)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Vb.b), this._onBindObservable
        }
        set onBind(bb) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(bb)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Vb.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Vb.b), this._onEffectCreatedObservable
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
        setAlphaMode(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[Mb] !== wb && (this._alphaMode[Mb] = wb, this.eeb(bb.TextureDirtyFlag))
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
        set fogEnabled(wb) {
          this._fogEnabled !== wb && (this._fogEnabled = wb, this.eeb(bb.MiscDirtyFlag))
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
        set wireframe(wb) {
          this.fillMode = wb ? bb.WireFrameFillMode : bb.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case bb.PointFillMode:
            case bb.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(wb) {
          this.fillMode = wb ? bb.PointFillMode : bb.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(wb) {
          this._fillMode !== wb && (this._fillMode = wb, this.eeb(bb.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(bb) {
          const wb = this.RJ().DC().getCaps().fragmentDepthSupported;
          bb && !wb && Ib.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = bb && wb, this._markAllSubMeshesAsMiscDirty()
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
        constructor(wb, Mb, Hb) {
          let lb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, eb.m)(this, ub), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, eb.m)(this, db, void 0), this.uniqueId = ((0, eb.m)(this, Pb), (0, eb.m)(this, nb, void 0)), this._loadedUniqueId = (0, eb.m)(this, yb), this.name = (0, eb.m)(this, ob, void 0), this.metadata = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, null)), this._internalMetadata = (0, eb.m)(this, bw), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, eb.m)(this, ww, !1), this.checkReadyOnlyOnce = ((0, eb.m)(this, Mw), (0, eb.m)(this, ew, !1)), this.state = ((0, eb.m)(this, Hw), (0, eb.m)(this, pw, "")), this._alpha = ((0, eb.m)(this, Vw), (0, eb.m)(this, gw, 1)), this.inspectableCustomProperties = (0, eb.m)(this, lw), this._backFaceCulling = (0, eb.m)(this, Lw, !0), this._textureRepetitionMode = ((0, eb.m)(this, Iw), (0, eb.m)(this, Ow, 0)), this.textureRepetitionHexTilingParams = ((0, eb.m)(this, Uw), (0, eb.m)(this, tw, [1, .6, 7, .5])), this._cullBackFaces = ((0, eb.m)(this, Cw), (0, eb.m)(this, Ew, !0)), this._blockDirtyMechanism = ((0, eb.m)(this, Fw), !1), this.sideOrientation = (0, eb.m)(this, Bw, null), this.onCompiled = ((0, eb.m)(this, sw), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.vJ = new Vb.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, eb.m)(this, mw, [2]), this._needDepthPrePass = ((0, eb.m)(this, hw), (0, eb.m)(this, zw, !1)), this.disableDepthWrite = ((0, eb.m)(this, Xw), (0, eb.m)(this, xw, !1)), this.disableColorWrite = ((0, eb.m)(this, jw), (0, eb.m)(this, Kw, !1)), this.forceDepthWrite = ((0, eb.m)(this, rw), (0, eb.m)(this, Rw, !1)), this.depthFunction = ((0, eb.m)(this, Dw), (0, eb.m)(this, Yw, 0)), this.separateCullingPass = ((0, eb.m)(this, Zw), (0, eb.m)(this, fw, !1)), this._fogEnabled = ((0, eb.m)(this, Aw), (0, eb.m)(this, Ww, !0)), this.pointSize = ((0, eb.m)(this, Jw), (0, eb.m)(this, Sw, 1)), this.zOffset = ((0, eb.m)(this, Nw), (0, eb.m)(this, vw, 0)), this.zOffsetUnits = ((0, eb.m)(this, Qw), (0, eb.m)(this, Gw, 0)), this.clipPlane = (0, eb.m)(this, qw), this.stencil = new Cb, this._isVertexOutputInvariant = (0, eb.m)(this, aw, bb.ForceVertexOutputInvariant), this._materialContext = (0, eb.m)(this, iw), this._useUBO = !1, this._fillMode = bb.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = wb;
          const Ib = Mb || gb.e.LastCreatedScene;
          Ib && (this._scene = Ib, this._dirtyCallbacks = {}, this._forceGLSL = lb, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = wb || pb.e.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.DC().createMaterialContext(), this._drawWrapper = new Ub.c(this._scene.DC(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Lb.c(this._scene.DC(), void 0, void 0, wb), this._useUBO = this.RJ().DC().supportsUniformBuffers, this._createUniformBuffer(), Hb || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), bb.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const bb = this.RJ().DC();
          this._uniformBuffer?.dispose(), bb.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Lb.c(bb, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Lb.c(this._scene.DC(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(bb, wb) {
          return !0
        }
        isReadyForSubMesh(bb, wb, Mb) {
          const eb = wb.materialDefines;
          return !!eb && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = eb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        RJ() {
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
          let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Mb = this.RJ().meshes;
          for (const bb of Mb)
            if (bb.oR)
              for (const Mb of bb.oR)
                if (Mb.AC() === this)
                  for (const bb of Mb._drawWrappers) bb && this._materialContext === bb.materialContext && (bb._wasPreviouslyReady = !1, bb._wasPreviouslyUsingInstances = null, bb._forceRebindOnNextCall = wb);
          wb && this.eeb(bb.AllDirtyFlag)
        }
        _preBind(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const eb = this._scene.DC(),
            Hb = (null == Mb ? this.sideOrientation : Mb) === bb.ClockWiseSideOrientation,
            pb = wb || this._getDrawWrapper();
          return (0, Fb.d)(pb) && pb.materialContext && (pb.materialContext.useVertexPulling = this.useVertexPulling), eb.enableEffect(pb), eb.setState(this.backFaceCulling, this.zOffset, !1, Hb, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Hb
        }
        bind(bb, wb) {}
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          this._eventInfo.ubo = bb, this._callbackPluginEventGeneric(8, this._eventInfo), bb.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(bb, wb, Mb) {
          const eb = Mb._drawWrapper;
          this._eventInfo.subMesh = Mb, this._callbackPluginEventBindForSubMesh(this._eventInfo), eb._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(bb) {}
        bindView(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : bb.setMatrix("view", this.RJ().getViewMatrix())
        }
        bindViewProjection(bb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (bb.setMatrix("viewProjection", this.RJ().getTransformMatrix()), bb.setMatrix("projection", this.RJ().getProjectionMatrix()), bb.setMatrix("inverseProjection", this.RJ().getInverseProjectionMatrix()))
        }
        bindEyePosition(bb, wb) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(bb, wb)
        }
        _afterBind(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && wb && (this._needToBindSceneUbo = !1, (0, Eb.y)(wb, this.RJ().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = bb ? bb.visibility : 1, this._onBindObservable && bb && this._onBindObservable.notifyObservers(bb), this.disableDepthWrite) {
            const bb = this._scene.DC();
            this._cachedDepthWriteState = bb.getDepthWrite(), bb.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const bb = this._scene.DC();
            this._cachedColorWriteState = bb.getColorWrite(), bb.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const bb = this._scene.DC();
            this._cachedDepthFunctionState = bb.getDepthFunction() || 0, bb.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.DC().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.DC().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.DC().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(wb, Mb) {
          const eb = {};
          if (this._serializePlugins(eb), bb._ParsePlugins(eb, wb, this._scene, Mb), this.pluginManager)
            for (const bb of this.pluginManager._plugins) {
              const Mb = wb.pluginManager.getPlugin(bb.name);
              Mb && bb.copyTo(Mb)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const bb = [];
            for (const wb in this.meshMap) {
              const Mb = this.meshMap[wb];
              Mb && bb.push(Mb)
            }
            return bb
          }
          return this._scene.meshes.filter((bb => bb.material === this))
        }
        forceCompilation(bb, wb, Mb, eb) {
          const Hb = {
              clipPlane: !1,
              useInstances: !1,
              ...Mb
            },
            pb = this.RJ(),
            Vb = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const gb = () => {
            if (!this._scene || !this._scene.DC()) return;
            const Mb = pb.clipPlane;
            if (Hb.clipPlane && (pb.clipPlane = new Ob.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let Mb = !0,
                pb = null;
              if (bb.oR) {
                const wb = new lb.d(0, 0, 0, 0, 0, bb, void 0, !1, !1);
                wb.materialDefines && (wb.materialDefines._renderId = -1), this.isReadyForSubMesh(bb, wb, Hb.useInstances) || (wb.effect && wb.effect.getCompilationError() && wb.effect.allFallbacksProcessed() ? pb = wb.effect.getCompilationError() : (Mb = !1, setTimeout(gb, 16)))
              }
              Mb && (this.allowShaderHotSwapping = Vb, pb && eb && eb(pb), wb && wb(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Vb, wb && wb(this)) : setTimeout(gb, 16);
            Hb.clipPlane && (pb.clipPlane = Mb)
          };
          gb()
        }
        async forceCompilationAsync(bb, wb) {
          return await new Promise(((Mb, eb) => {
            this.forceCompilation(bb, (() => {
              Mb()
            }), wb, (bb => {
              eb(bb)
            }))
          }))
        }
        eeb(wb) {
          this.RJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (bb._DirtyCallbackArray.length = 0, wb & bb.ImageProcessingDirtyFlag && bb._DirtyCallbackArray.push(bb._ImageProcessingDirtyCallBack), wb & bb.TextureDirtyFlag && bb._DirtyCallbackArray.push(bb._TextureDirtyCallBack), wb & bb.LightDirtyFlag && bb._DirtyCallbackArray.push(bb._LightsDirtyCallBack), wb & bb.FresnelDirtyFlag && bb._DirtyCallbackArray.push(bb._FresnelDirtyCallBack), wb & bb.AttributesDirtyFlag && bb._DirtyCallbackArray.push(bb._AttributeDirtyCallBack), wb & bb.MiscDirtyFlag && bb._DirtyCallbackArray.push(bb._MiscDirtyCallBack), wb & bb.PrePassDirtyFlag && bb._DirtyCallbackArray.push(bb._PrePassDirtyCallBack), bb._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(bb._RunDirtyCallBacks), this.RJ().resetCachedMaterial())
        }
        resetDrawCache() {
          const bb = this.RJ().meshes;
          for (const wb of bb)
            if (wb.oR)
              for (const bb of wb.oR) bb.AC() === this && bb.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(bb) {
          const wb = this.RJ();
          if (wb.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const Mb = wb.meshes;
          for (const eb of Mb)
            if (eb.oR)
              for (const Mb of eb.oR) {
                if ((Mb.AC() || (wb._hasDefaultMaterial ? wb.defaultMaterial : null)) === this)
                  for (const wb of Mb._drawWrappers) wb && wb.defines && wb.defines.markAllAsDirty && this._materialContext === wb.materialContext && bb(wb.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.RJ().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const bb = this.RJ().enablePrePassRenderer();
          bb && bb.eeb()
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
            this.vJ.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(bb)
            }))
          }
        }
        setPrePassRenderer(bb) {
          return !1
        }
        dispose(bb, wb, Mb) {
          const eb = this.RJ();
          if (eb.stopAnimation(this), eb.freeProcessedMaterials(), eb.removeMaterial(this), this._eventInfo.forceDisposeTextures = wb, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const bb = this._parentContainer.materials.indexOf(this);
            bb > -1 && this._parentContainer.materials.splice(bb, 1), this._parentContainer = null
          }
          if (!0 !== Mb)
            if (this.meshMap)
              for (const Hb in this.meshMap) {
                const bb = this.meshMap[Hb];
                this._disposeMeshResources(bb)
              } else {
                const bb = eb.meshes;
                for (const wb of bb) this._disposeMeshResources(wb)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.vJ.notifyObservers(this), this.vJ.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(bb) {
          if (!bb) return;
          const wb = bb.geometry,
            Mb = bb._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (bb.oR && Mb)
              for (const eb of bb.oR) {
                const bb = eb._drawWrappers;
                for (let Hb = 0; Hb < bb.length; Hb++) {
                  const pb = bb[Hb]?.effect;
                  if (!pb) continue;
                  Mb[Hb] === this && (wb?._releaseVertexArrayObject(pb), eb._removeDrawWrapper(Hb, !0, !0))
                }
              }
          } else wb?._releaseVertexArrayObject(this._drawWrapper.effect);
          bb.material !== this || bb.opb || (bb.material = null)
        }
        serialize() {
          const bb = tb.d.Serialize(this);
          return bb.stencil = this.stencil.serialize(), bb.uniqueId = this.uniqueId, this._serializePlugins(bb), bb
        }
        _serializePlugins(bb) {
          if (bb.plugins = {}, this.pluginManager)
            for (const wb of this.pluginManager._plugins) wb.doNotSerialize || (bb.plugins[wb.getClassName()] = wb.serialize())
        }
        static ParseAlphaMode(bb, wb) {
          void 0 !== bb._alphaMode ? wb._alphaMode = Array.isArray(bb._alphaMode) ? [...bb._alphaMode] : [bb._alphaMode] : void 0 !== bb.alphaMode ? wb._alphaMode = Array.isArray(bb.alphaMode) ? [...bb.alphaMode] : [bb.alphaMode] : wb._alphaMode = [2]
        }
        static Parse(wb, Mb, eb) {
          if (wb.customType) {
            if ("BABYLON.PBRMaterial" === wb.customType && wb.overloadedAlbedo && (wb.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Ib.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else wb.customType = "BABYLON.StandardMaterial";
          const Hb = pb.e.Instantiate(wb.customType).Parse(wb, Mb, eb);
          return Hb._loadedUniqueId = wb.uniqueId, bb.ParseAlphaMode(wb, Hb), Hb
        }
        static _ParsePlugins(bb, wb, Mb, eb) {
          if (bb.plugins)
            for (const Hb in bb.plugins) {
              const Vb = bb.plugins[Hb];
              let gb = wb.pluginManager?.getPlugin(Vb.name);
              if (!gb) {
                const bb = pb.e.Instantiate("BABYLON." + Hb);
                bb && (gb = new bb(wb))
              }
              gb?.parse(Vb, Mb, eb)
            }
        }
      }, (() => {
        const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], Bb = [(0, Hb.E)()], sb = [(0, Hb.E)()], mb = [(0, Hb.E)()], hb = [(0, Hb.E)()], zb = [(0, Hb.E)()], Xb = [(0, Hb.E)("alpha")], xb = [(0, Hb.E)("backFaceCulling")], jb = [(0, Hb.E)("textureRepetitionMode")], Kb = [(0, Hb.E)("textureRepetitionHexTilingParams")], rb = [(0, Hb.E)("cullBackFaces")], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], cb = [(0, Hb.E)()], Yb = [(0, Hb.E)()], Zb = [(0, Hb.E)()], fb = [(0, Hb.E)()], Ab = [(0, Hb.E)()], Wb = [(0, Hb.E)()], Jb = [(0, Hb.E)("fogEnabled")], Sb = [(0, Hb.E)()], Nb = [(0, Hb.E)()], vb = [(0, Hb.E)()], Qb = [(0, Hb.E)()], Gb = [(0, Hb.E)()], qb = [(0, Hb.E)()], ab = [(0, Hb.E)()], ib = [(0, Hb.E)()], (0, eb.i)(bb, null, Qb, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointsCloud" in bb,
            get: bb => bb.pointsCloud
          },
          metadata: pb
        }, null, ub), (0, eb.i)(bb, null, Gb, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "fillMode" in bb,
            get: bb => bb.fillMode
          },
          metadata: pb
        }, null, ub), (0, eb.i)(bb, null, qb, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLogarithmicDepth" in bb,
            get: bb => bb.useLogarithmicDepth
          },
          metadata: pb
        }, null, ub), (0, eb.i)(bb, null, ib, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "transparencyMode" in bb,
            get: bb => bb.transparencyMode
          },
          metadata: pb
        }, null, ub), (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, wb) => {
              bb.id = wb
            }
          },
          metadata: pb
        }, db, Pb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, wb) => {
              bb.uniqueId = wb
            }
          },
          metadata: pb
        }, nb, yb), (0, eb.i)(null, null, Bb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, wb) => {
              bb.name = wb
            }
          },
          metadata: pb
        }, ob, Tb), (0, eb.i)(null, null, sb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, wb) => {
              bb.metadata = wb
            }
          },
          metadata: pb
        }, kb, bw), (0, eb.i)(null, null, mb, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnEveryCall" in bb,
            get: bb => bb.checkReadyOnEveryCall,
            set: (bb, wb) => {
              bb.checkReadyOnEveryCall = wb
            }
          },
          metadata: pb
        }, ww, Mw), (0, eb.i)(null, null, hb, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: bb => "checkReadyOnlyOnce" in bb,
            get: bb => bb.checkReadyOnlyOnce,
            set: (bb, wb) => {
              bb.checkReadyOnlyOnce = wb
            }
          },
          metadata: pb
        }, ew, Hw), (0, eb.i)(null, null, zb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, wb) => {
              bb.state = wb
            }
          },
          metadata: pb
        }, pw, Vw), (0, eb.i)(null, null, Xb, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alpha" in bb,
            get: bb => bb._alpha,
            set: (bb, wb) => {
              bb._alpha = wb
            }
          },
          metadata: pb
        }, gw, lw), (0, eb.i)(null, null, xb, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: bb => "_backFaceCulling" in bb,
            get: bb => bb._backFaceCulling,
            set: (bb, wb) => {
              bb._backFaceCulling = wb
            }
          },
          metadata: pb
        }, Lw, Iw), (0, eb.i)(null, null, jb, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_textureRepetitionMode" in bb,
            get: bb => bb._textureRepetitionMode,
            set: (bb, wb) => {
              bb._textureRepetitionMode = wb
            }
          },
          metadata: pb
        }, Ow, Uw), (0, eb.i)(null, null, Kb, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRepetitionHexTilingParams" in bb,
            get: bb => bb.textureRepetitionHexTilingParams,
            set: (bb, wb) => {
              bb.textureRepetitionHexTilingParams = wb
            }
          },
          metadata: pb
        }, tw, Cw), (0, eb.i)(null, null, rb, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: bb => "_cullBackFaces" in bb,
            get: bb => bb._cullBackFaces,
            set: (bb, wb) => {
              bb._cullBackFaces = wb
            }
          },
          metadata: pb
        }, Ew, Fw), (0, eb.i)(null, null, Rb, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: bb => "sideOrientation" in bb,
            get: bb => bb.sideOrientation,
            set: (bb, wb) => {
              bb.sideOrientation = wb
            }
          },
          metadata: pb
        }, Bw, sw), (0, eb.i)(null, null, Db, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_alphaMode" in bb,
            get: bb => bb._alphaMode,
            set: (bb, wb) => {
              bb._alphaMode = wb
            }
          },
          metadata: pb
        }, mw, hw), (0, eb.i)(null, null, cb, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: bb => "_needDepthPrePass" in bb,
            get: bb => bb._needDepthPrePass,
            set: (bb, wb) => {
              bb._needDepthPrePass = wb
            }
          },
          metadata: pb
        }, zw, Xw), (0, eb.i)(null, null, Yb, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableDepthWrite" in bb,
            get: bb => bb.disableDepthWrite,
            set: (bb, wb) => {
              bb.disableDepthWrite = wb
            }
          },
          metadata: pb
        }, xw, jw), (0, eb.i)(null, null, Zb, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableColorWrite" in bb,
            get: bb => bb.disableColorWrite,
            set: (bb, wb) => {
              bb.disableColorWrite = wb
            }
          },
          metadata: pb
        }, Kw, rw), (0, eb.i)(null, null, fb, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceDepthWrite" in bb,
            get: bb => bb.forceDepthWrite,
            set: (bb, wb) => {
              bb.forceDepthWrite = wb
            }
          },
          metadata: pb
        }, Rw, Dw), (0, eb.i)(null, null, Ab, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: bb => "depthFunction" in bb,
            get: bb => bb.depthFunction,
            set: (bb, wb) => {
              bb.depthFunction = wb
            }
          },
          metadata: pb
        }, Yw, Zw), (0, eb.i)(null, null, Wb, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: bb => "separateCullingPass" in bb,
            get: bb => bb.separateCullingPass,
            set: (bb, wb) => {
              bb.separateCullingPass = wb
            }
          },
          metadata: pb
        }, fw, Aw), (0, eb.i)(null, null, Jb, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_fogEnabled" in bb,
            get: bb => bb._fogEnabled,
            set: (bb, wb) => {
              bb._fogEnabled = wb
            }
          },
          metadata: pb
        }, Ww, Jw), (0, eb.i)(null, null, Sb, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: bb => "pointSize" in bb,
            get: bb => bb.pointSize,
            set: (bb, wb) => {
              bb.pointSize = wb
            }
          },
          metadata: pb
        }, Sw, Nw), (0, eb.i)(null, null, Nb, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffset" in bb,
            get: bb => bb.zOffset,
            set: (bb, wb) => {
              bb.zOffset = wb
            }
          },
          metadata: pb
        }, vw, Qw), (0, eb.i)(null, null, vb, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: bb => "zOffsetUnits" in bb,
            get: bb => bb.zOffsetUnits,
            set: (bb, wb) => {
              bb.zOffsetUnits = wb
            }
          },
          metadata: pb
        }, Gw, qw), (0, eb.i)(null, null, ab, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: bb => "_isVertexOutputInvariant" in bb,
            get: bb => bb._isVertexOutputInvariant,
            set: (bb, wb) => {
              bb._isVertexOutputInvariant = wb
            }
          },
          metadata: pb
        }, aw, iw), pb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pb
        })
      })(), bb.TriangleFillMode = 0, bb.WireFrameFillMode = 1, bb.PointFillMode = 2, bb.PointListDrawMode = 3, bb.LineListDrawMode = 4, bb.LineLoopDrawMode = 5, bb.LineStripDrawMode = 6, bb.TriangleStripDrawMode = 7, bb.TriangleFanDrawMode = 8, bb.ClockWiseSideOrientation = 0, bb.CounterClockWiseSideOrientation = 1, bb.ImageProcessingDirtyFlag = 64, bb.TextureDirtyFlag = 1, bb.LightDirtyFlag = 2, bb.FresnelDirtyFlag = 4, bb.AttributesDirtyFlag = 8, bb.MiscDirtyFlag = 16, bb.PrePassDirtyFlag = 32, bb.AllDirtyFlag = 127, bb.MATERIAL_OPAQUE = 0, bb.MATERIAL_ALPHATEST = 1, bb.MATERIAL_ALPHABLEND = 2, bb.MATERIAL_ALPHATESTANDBLEND = 3, bb.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, bb.MATERIAL_NORMALBLENDMETHOD_RNM = 1, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.OnEventObservable = new Vb.b, bb.ForceVertexOutputInvariant = !1, bb._AllDirtyCallBack = bb => bb.markAllAsDirty(), bb._ImageProcessingDirtyCallBack = bb => bb.markAsImageProcessingDirty(), bb._TextureDirtyCallBack = bb => bb.markAsTexturesDirty(), bb._FresnelDirtyCallBack = bb => bb.markAsFresnelDirty(), bb._MiscDirtyCallBack = bb => bb.markAsMiscDirty(), bb._PrePassDirtyCallBack = bb => bb.markAsPrePassDirty(), bb._LightsDirtyCallBack = bb => bb.markAsLightDirty(), bb._AttributeDirtyCallBack = bb => bb.markAsAttributesDirty(), bb._FresnelAndMiscDirtyCallBack = wb => {
        bb._FresnelDirtyCallBack(wb), bb._MiscDirtyCallBack(wb)
      }, bb._TextureAndMiscDirtyCallBack = wb => {
        bb._TextureDirtyCallBack(wb), bb._MiscDirtyCallBack(wb)
      }, bb._DirtyCallbackArray = [], bb._RunDirtyCallBacks = wb => {
        for (const Mb of bb._DirtyCallbackArray) Mb(wb)
      }, bb
    })();
    Object.getOwnPropertyDescriptor(sb.prototype, "pluginManager") || Object.defineProperty(sb.prototype, "pluginManager", (0, Bb.g)("Material", "pluginManager"))
  },
  42010: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(41572);
    class Hb {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(bb) {
        this._DiffuseTextureEnabled !== bb && (this._DiffuseTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(bb) {
        this._BaseWeightTextureEnabled !== bb && (this._BaseWeightTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(bb) {
        this._BaseDiffuseRoughnessTextureEnabled !== bb && (this._BaseDiffuseRoughnessTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(bb) {
        this._DetailTextureEnabled !== bb && (this._DetailTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(bb) {
        this._DecalMapEnabled !== bb && (this._DecalMapEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(bb) {
        this._AmbientTextureEnabled !== bb && (this._AmbientTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(bb) {
        this._OpacityTextureEnabled !== bb && (this._OpacityTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(bb) {
        this._ReflectionTextureEnabled !== bb && (this._ReflectionTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(bb) {
        this._EmissiveTextureEnabled !== bb && (this._EmissiveTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(bb) {
        this._SpecularTextureEnabled !== bb && (this._SpecularTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(bb) {
        this._BumpTextureEnabled !== bb && (this._BumpTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(bb) {
        this._LightmapTextureEnabled !== bb && (this._LightmapTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(bb) {
        this._RefractionTextureEnabled !== bb && (this._RefractionTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(bb) {
        this._ColorGradingTextureEnabled !== bb && (this._ColorGradingTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(bb) {
        this._FresnelEnabled !== bb && (this._FresnelEnabled = bb, eb.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(bb) {
        this._ClearCoatTextureEnabled !== bb && (this._ClearCoatTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(bb) {
        this._ClearCoatBumpTextureEnabled !== bb && (this._ClearCoatBumpTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(bb) {
        this._ClearCoatTintTextureEnabled !== bb && (this._ClearCoatTintTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(bb) {
        this._SheenTextureEnabled !== bb && (this._SheenTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(bb) {
        this._AnisotropicTextureEnabled !== bb && (this._AnisotropicTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(bb) {
        this._ThicknessTextureEnabled !== bb && (this._ThicknessTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(bb) {
        this._RefractionIntensityTextureEnabled !== bb && (this._RefractionIntensityTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(bb) {
        this._TranslucencyIntensityTextureEnabled !== bb && (this._TranslucencyIntensityTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(bb) {
        this._TranslucencyColorTextureEnabled !== bb && (this._TranslucencyColorTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(bb) {
        this._IridescenceTextureEnabled !== bb && (this._IridescenceTextureEnabled = bb, eb.d.MarkAllMaterialsAsDirty(1))
      }
    }
    Hb._DiffuseTextureEnabled = !0, Hb._BaseWeightTextureEnabled = !0, Hb._BaseDiffuseRoughnessTextureEnabled = !0, Hb._DetailTextureEnabled = !0, Hb._DecalMapEnabled = !0, Hb._AmbientTextureEnabled = !0, Hb._OpacityTextureEnabled = !0, Hb._ReflectionTextureEnabled = !0, Hb._EmissiveTextureEnabled = !0, Hb._SpecularTextureEnabled = !0, Hb._BumpTextureEnabled = !0, Hb._LightmapTextureEnabled = !0, Hb._RefractionTextureEnabled = !0, Hb._ColorGradingTextureEnabled = !0, Hb._FresnelEnabled = !0, Hb._ClearCoatTextureEnabled = !0, Hb._ClearCoatBumpTextureEnabled = !0, Hb._ClearCoatTintTextureEnabled = !0, Hb._SheenTextureEnabled = !0, Hb._AnisotropicTextureEnabled = !0, Hb._ThicknessTextureEnabled = !0, Hb._RefractionIntensityTextureEnabled = !0, Hb._TranslucencyIntensityTextureEnabled = !0, Hb._TranslucencyColorTextureEnabled = !0, Hb._IridescenceTextureEnabled = !0
  },
  41999: (bb, wb, Mb) => {
    Mb.d(wb, {
      $: () => mb,
      C: () => hb,
      G: () => cb,
      H: () => zb,
      I: () => Rb,
      J: () => Db,
      N: () => tb,
      P: () => Ub,
      Q: () => Gb,
      U: () => Jb,
      V: () => Ab,
      Z: () => fb,
      bb: () => Yb,
      c: () => Zb,
      eb: () => qb,
      g: () => Xb,
      ib: () => ab,
      j: () => Ob,
      jb: () => ib,
      mb: () => nb,
      n: () => Bb,
      nb: () => db,
      ob: () => Pb,
      q: () => sb,
      s: () => rb,
      sb: () => Cb,
      v: () => lb,
      x: () => Eb,
      y: () => Fb
    });
    var eb = Mb(39971),
      Hb = Mb(38313),
      pb = Mb(41858),
      Vb = Mb(42004),
      gb = Mb(42010);

    function lb(bb, wb, Mb) {
      if (!bb || bb.LOGARITHMICDEPTH || bb.indexOf && bb.indexOf("LOGARITHMICDEPTH") >= 0) {
        const bb = Mb.activeCamera;
        1 === bb.mode && eb.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), wb.setFloat("logarithmicDepthConstant", 2 / (Math.log(bb.maxZ + 1) / Math.LN2))
      }
    }
    const Lb = {
        r: 0,
        g: 0,
        b: 0
      },
      Ib = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Ob(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      Mb && bb.fogEnabled && (!wb || wb.applyFog) && 0 !== bb.fogMode && (Mb.setFloat4("vFogInfos", bb.fogMode, bb.fogStart, bb.fogEnd, bb.fogDensity), eb ? (bb.fogColor.toLinearSpaceToRef(Lb, bb.DC().useExactSrgbConversions), Mb.setColor3("vFogColor", Lb)) : Mb.setColor3("vFogColor", bb.fogColor))
    }

    function Ub(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
      const Ob = bb.numMaxInfluencers || bb.numInfluencers;
      return Ob <= 0 ? 0 : (wb.push("#define MORPHTARGETS"), bb.hasPositions && wb.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), bb.hasNormals && wb.push("#define MORPHTARGETTEXTURE_HASNORMALS"), bb.hasTangents && wb.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), bb.hasUVs && wb.push("#define MORPHTARGETTEXTURE_HASUVS"), bb.hasUV2s && wb.push("#define MORPHTARGETTEXTURE_HASUV2S"), bb.hasColors && wb.push("#define MORPHTARGETTEXTURE_HASCOLORS"), bb.supportsPositions && Hb && wb.push("#define MORPHTARGETS_POSITION"), bb.supportsNormals && pb && wb.push("#define MORPHTARGETS_NORMAL"), bb.supportsTangents && Vb && wb.push("#define MORPHTARGETS_TANGENT"), bb.supportsUVs && gb && wb.push("#define MORPHTARGETS_UV"), bb.supportsUV2s && lb && wb.push("#define MORPHTARGETS_UV2"), bb.supportsColors && Lb && wb.push("#define MORPHTARGETS_COLOR"), wb.push("#define NUM_MORPH_INFLUENCERS " + Ob), bb.isUsingTextureForTargets && wb.push("#define MORPHTARGETS_TEXTURE"), Ib.NUM_MORPH_INFLUENCERS = Ob, Ib.NORMAL = pb, Ib.TANGENT = Vb, Ib.UV = gb, Ib.UV2 = lb, Ib.COLOR = Lb, tb(Mb, eb, Ib, Hb), Ob)
    }

    function tb(bb, wb, Mb) {
      let pb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Vb = Mb.NUM_MORPH_INFLUENCERS;
      if (Vb > 0 && Hb.e.LastCreatedEngine) {
        const gb = Hb.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          lb = wb.morphTargetManager;
        if (lb?.isUsingTextureForTargets) return;
        const Lb = lb && lb.supportsPositions && pb,
          Ib = lb && lb.supportsNormals && Mb.NORMAL,
          Ob = lb && lb.supportsTangents && Mb.TANGENT,
          Ub = lb && lb.supportsUVs && Mb.UV1,
          tb = lb && lb.supportsUV2s && Mb.UV2,
          Cb = lb && lb.supportsColors && Mb.VERTEXCOLOR;
        for (let Mb = 0; Mb < Vb; Mb++) Lb && bb.push("position" + Mb), Ib && bb.push("normal" + Mb), Ob && bb.push("tangent" + Mb), Ub && bb.push("uv_" + Mb), tb && bb.push("uv2_" + Mb), Cb && bb.push("color" + Mb), bb.length > gb && eb.b.Error("Cannot add more vertex attributes for mesh " + wb.name)
      }
    }

    function Cb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      bb.push("world0"), bb.push("world1"), bb.push("world2"), bb.push("world3"), wb && (bb.push("previousWorld0"), bb.push("previousWorld1"), bb.push("previousWorld2"), bb.push("previousWorld3"))
    }

    function Eb(bb, wb) {
      const Mb = bb.morphTargetManager;
      bb && Mb && wb.setFloatArray("morphTargetInfluences", Mb.influences)
    }

    function Fb(bb, wb) {
      wb.bindToEffect(bb, "Scene")
    }

    function Bb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ib = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Ob = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Ub = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (bb.texturesEnabled && Hb && gb.e.ReflectionTextureEnabled) {
        if (Mb.kbb("reflectionMatrix", Hb.getReflectionTextureMatrix()), Mb.updateFloat2("vReflectionInfos", Hb.level * bb.iblIntensity, Ub), lb && Hb.boundingBoxSize) {
          const bb = Hb;
          Mb.updateVector3("vReflectionPosition", bb.boundingBoxPosition), Mb.updateVector3("vReflectionSize", bb.boundingBoxSize)
        }
        if (pb) {
          const bb = Hb.getSize().width;
          Mb.updateFloat2("vReflectionFilteringInfo", bb, Math.log2(bb))
        }
        if (Ib && !wb.USEIRRADIANCEMAP) {
          const bb = Hb.sphericalPolynomial;
          if (wb.USESPHERICALFROMREFLECTIONMAP && bb)
            if (wb.SPHERICAL_HARMONICS) {
              const wb = bb.preScaledHarmonics;
              Mb.updateVector3("vSphericalL00", wb.l00), Mb.updateVector3("vSphericalL1_1", wb.l1_1), Mb.updateVector3("vSphericalL10", wb.l10), Mb.updateVector3("vSphericalL11", wb.l11), Mb.updateVector3("vSphericalL2_2", wb.l2_2), Mb.updateVector3("vSphericalL2_1", wb.l2_1), Mb.updateVector3("vSphericalL20", wb.l20), Mb.updateVector3("vSphericalL21", wb.l21), Mb.updateVector3("vSphericalL22", wb.l22)
            } else Mb.updateFloat3("vSphericalX", bb.x.x, bb.x.y, bb.x.z), Mb.updateFloat3("vSphericalY", bb.y.x, bb.y.y, bb.y.z), Mb.updateFloat3("vSphericalZ", bb.z.x, bb.z.y, bb.z.z), Mb.updateFloat3("vSphericalXX_ZZ", bb.xx.x - bb.zz.x, bb.xx.y - bb.zz.y, bb.xx.z - bb.zz.z), Mb.updateFloat3("vSphericalYY_ZZ", bb.yy.x - bb.zz.x, bb.yy.y - bb.zz.y, bb.yy.z - bb.zz.z), Mb.updateFloat3("vSphericalZZ", bb.zz.x, bb.zz.y, bb.zz.z), Mb.updateFloat3("vSphericalXY", bb.xy.x, bb.xy.y, bb.xy.z), Mb.updateFloat3("vSphericalYZ", bb.yz.x, bb.yz.y, bb.yz.z), Mb.updateFloat3("vSphericalZX", bb.zx.x, bb.zx.y, bb.zx.z)
        } else Lb && wb.USEIRRADIANCEMAP && wb.USE_IRRADIANCE_DOMINANT_DIRECTION && Hb.irradianceTexture && Mb.updateVector3("vReflectionDominantDirection", Hb.irradianceTexture._dominantDirection);
        Vb && Mb.updateFloat3("vReflectionMicrosurfaceInfos", Hb.getSize().width, Hb.lodGenerationScale, Hb.lodGenerationOffset)
      }
      Ob && Mb.updateColor3("vReflectionColor", eb)
    }

    function sb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (eb && gb.e.ReflectionTextureEnabled) {
        wb.LODBASEDMICROSFURACE ? Mb.setTexture("reflectionSampler", eb) : (Mb.setTexture("reflectionSampler", eb._lodTextureMid || eb), Mb.setTexture("reflectionSamplerLow", eb._lodTextureLow || eb), Mb.setTexture("reflectionSamplerHigh", eb._lodTextureHigh || eb)), wb.USEIRRADIANCEMAP && Mb.setTexture("irradianceSampler", eb.irradianceTexture);
        const pb = bb.iblCdfGenerator;
        Hb && pb && Mb.setTexture("icdfSampler", pb.getIcdfTexture())
      }
    }

    function mb(bb, wb, Mb) {
      wb._needUVs = !0, wb[Mb] = !0, bb.optimizeUVAllocation && bb.getTextureMatrix().isIdentityAs3x2() ? (wb[Mb + "DIRECTUV"] = bb.coordinatesIndex + 1, wb["MAINUV" + (bb.coordinatesIndex + 1)] = !0) : wb[Mb + "DIRECTUV"] = 0
    }

    function hb(bb, wb, Mb) {
      const eb = bb.getTextureMatrix();
      wb.kbb(Mb + "Matrix", eb)
    }

    function zb(bb, wb, Mb) {
      Mb.BAKED_VERTEX_ANIMATION_TEXTURE && Mb.INSTANCES && bb.push("bakedVertexAnimationSettingsInstanced")
    }

    function Xb(bb, wb, Mb) {
      var eb;
      if (wb && bb && (bb.computeBonesUsingShaders && wb._bonesComputationForcedToCPU && (bb.computeBonesUsingShaders = !1), bb.useBones && bb.computeBonesUsingShaders && bb.skeleton)) {
        const Hb = bb.skeleton;
        if (Hb.isUsingTextureForMatrices && wb.getUniformIndex("boneTextureInfo") > -1) {
          const Mb = Hb.getTransformMatrixTexture(bb);
          wb.setTexture("boneSampler", Mb), wb.setFloat2("boneTextureInfo", Hb._textureWidth, Hb._textureHeight)
        } else {
          const pb = Hb.getTransformMatrices(bb);
          pb && (wb.setMatrices("mBones", pb), Mb && bb.RJ().prePassRenderer && bb.RJ().prePassRenderer.getIndex(2) && (Mb.previousBones[bb.uniqueId] || (Mb.previousBones[bb.uniqueId] = pb.slice()), wb.setMatrices("mPreviousBones", Mb.previousBones[bb.uniqueId]), eb = pb, Mb.previousBones[bb.uniqueId].set(eb)))
        }
      }
    }

    function xb(bb, wb, Mb, eb, Hb) {
      let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      bb._bindLight(wb, Mb, eb, Hb, pb)
    }
    const jb = 4,
      Kb = new WeakMap;

    function rb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const pb = Math.min(wb.lightSources.length, Hb);
      for (let Vb = 0; Vb < pb; Vb++) {
        xb(wb.lightSources[Vb], Vb, bb, Mb, "boolean" === typeof eb ? eb : eb.SPECULARTERM, wb.receiveShadows)
      }
    }

    function Rb(bb, wb, Mb, eb) {
      Mb.NUM_BONE_INFLUENCERS > 0 && (eb.addCPUSkinningFallback(0, wb), bb.push("matricesIndices"), bb.push("matricesWeights"), Mb.NUM_BONE_INFLUENCERS > 4 && (bb.push("matricesIndicesExtra"), bb.push("matricesWeightsExtra")))
    }

    function Db(bb, wb) {
      (wb.INSTANCES || wb.THIN_INSTANCES) && Cb(bb, !!wb.PREPASS_VELOCITY), wb.INSTANCESCOLOR && bb.push("instanceColor")
    }

    function cb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Hb = 0;
      for (let pb = 0; pb < Mb && bb["LIGHT" + pb]; pb++) pb > 0 && (Hb = eb + pb, wb.addFallback(Hb, "LIGHT" + pb)), bb.SHADOWS || (bb["SHADOW" + pb] && wb.addFallback(eb, "SHADOW" + pb), bb["SHADOWPCF" + pb] && wb.addFallback(eb, "SHADOWPCF" + pb), bb["SHADOWPCSS" + pb] && wb.addFallback(eb, "SHADOWPCSS" + pb), bb["SHADOWPOISSON" + pb] && wb.addFallback(eb, "SHADOWPOISSON" + pb), bb["SHADOWESM" + pb] && wb.addFallback(eb, "SHADOWESM" + pb), bb["SHADOWCLOSEESM" + pb] && wb.addFallback(eb, "SHADOWCLOSEESM" + pb));
      return Hb
    }

    function Yb(bb, wb, Mb, eb, Hb, pb, Vb) {
      let gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Lb = arguments.length > 9 ? arguments[9] : void 0,
        Ib = arguments.length > 10 ? arguments[10] : void 0;
      if (Vb._areMiscDirty) {
        Vb.LOGARITHMICDEPTH = Mb, Vb.POINTSIZE = eb, Vb.FOG = Hb && function(bb, wb) {
          return wb.fogEnabled && bb.applyFog && 0 !== wb.fogMode
        }(bb, wb), Vb.NONUNIFORMSCALING = bb.nonUniformScaling, Vb.ALPHATEST = pb, Vb.DECAL_AFTER_DETAIL = gb, Vb.USE_VERTEX_PULLING = lb, Vb.RIGHT_HANDED = wb.useRightHandedSystem;
        const Ob = lb ? Lb?.geometry?.getIndexBuffer() : null,
          Ub = !!Lb && Lb.isUnIndexed;
        Vb.VERTEX_PULLING_USE_INDEX_BUFFER = !!Ob && !Ub, Vb.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Ob || Ub) && Ob.is32Bits, Vb.VERTEXOUTPUT_INVARIANT = !!Ib
      }
    }

    function Zb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!bb.lightsEnabled || eb) return !0;
      const Hb = wb.lightSources,
        pb = Math.min(Hb.length, Mb);
      for (let Vb = 0; Vb < pb; Vb++)
        if (!Hb[Vb].areLightTexturesReady()) return !1;
      return !0
    }

    function fb(bb, wb, Mb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!Mb._areLightsDirty) return Mb._needNormals;
      const gb = pb;
      pb = function(bb, wb) {
        const Mb = bb.DC().getCaps().maxUniformBuffersPerShaderStage;
        if (null == Mb) return wb;
        const eb = Math.max(Mb - jb, 1);
        return Math.min(wb, eb)
      }(bb, pb);
      let lb = 0;
      const Lb = {
        needNormals: Mb._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (bb.lightsEnabled && !Vb) {
        wb.lightSources.length > pb && pb < gb && function(bb, wb, Mb, Hb) {
          let pb = Kb.get(bb);
          pb || (pb = new Set, Kb.set(bb, pb)), pb.has(Hb) || (pb.add(Hb), eb.b.Warn(`maxSimultaneousLights is ${wb} but this engine supports at most ${Mb} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Hb} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Hb+jb} uniform buffers, over the device limit of ${bb.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${Mb}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${Mb} or less to silence this warning.`))
        }(bb.DC(), gb, pb, Math.min(wb.lightSources.length, gb));
        for (const eb of wb.lightSources)
          if (Wb(bb, wb, eb, lb, Mb, Hb, Lb), lb++, lb === pb) break
      }
      Mb.SPECULARTERM = Lb.specularEnabled, Mb.SHADOWS = Lb.shadowEnabled;
      const Ib = Math.max(pb, Mb.MAXLIGHTCOUNT || 0);
      for (let eb = lb; eb < Ib; eb++) void 0 !== Mb["LIGHT" + eb] && (Mb["LIGHT" + eb] = !1, Mb["HEMILIGHT" + eb] = !1, Mb["POINTLIGHT" + eb] = !1, Mb["DIRLIGHT" + eb] = !1, Mb["SPOTLIGHT" + eb] = !1, Mb["AREALIGHT" + eb] = !1, Mb["CLUSTLIGHT" + eb] = !1, Mb["SHADOW" + eb] = !1, Mb["SHADOWCSM" + eb] = !1, Mb["SHADOWCSMDEBUG" + eb] = !1, Mb["SHADOWCSMNUM_CASCADES" + eb] = !1, Mb["SHADOWCSMUSESHADOWMAXZ" + eb] = !1, Mb["SHADOWCSMNOBLEND" + eb] = !1, Mb["SHADOWCSM_RIGHTHANDED" + eb] = !1, Mb["SHADOWPCF" + eb] = !1, Mb["SHADOWPCSS" + eb] = !1, Mb["SHADOWPOISSON" + eb] = !1, Mb["SHADOWESM" + eb] = !1, Mb["SHADOWCLOSEESM" + eb] = !1, Mb["SHADOWCUBE" + eb] = !1, Mb["SHADOWLOWQUALITY" + eb] = !1, Mb["SHADOWMEDIUMQUALITY" + eb] = !1);
      Mb.LIGHTCOUNT = lb, Mb.MAXLIGHTCOUNT = pb;
      const Ob = bb.DC().getCaps();
      return void 0 === Mb.SHADOWFLOAT && (Lb.needRebuild = !0), Mb.SHADOWFLOAT = Lb.shadowEnabled && (Ob.textureFloatRender && Ob.textureFloatLinearFiltering || Ob.textureHalfFloatRender && Ob.textureHalfFloatLinearFiltering), Mb.LIGHTMAPEXCLUDED = Lb.lightmapMode, Lb.needRebuild && Mb.rebuild(), Lb.needNormals
    }

    function Ab(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (wb && gb.e.ReflectionTextureEnabled) {
        if (!wb.isReadyOrNotBlocking()) return !1;
        Mb._needNormals = !0, Mb.REFLECTION = !0, Mb.GAMMAREFLECTION = wb.gammaSpace, Mb.RGBDREFLECTION = wb.isRGBD, Mb.LODINREFLECTIONALPHA = wb.lodLevelInAlpha, Mb.LINEARSPECULARREFLECTION = wb.linearSpecularLOD, Mb.USEIRRADIANCEMAP = !1, Mb.LODBASEDMICROSFURACE = bb.DC().getCaps().textureLOD;
        const Vb = bb.DC();
        switch (eb && Hb > 0 ? (Mb.NUM_SAMPLES = "" + Hb, Vb._features.needTypeSuffixInShaderConstants && (Mb.NUM_SAMPLES = Mb.NUM_SAMPLES + "u"), Mb.REALTIME_FILTERING = !0, bb.iblCdfGenerator && (Mb.IBL_CDF_FILTERING = !0)) : Mb.REALTIME_FILTERING = !1, Mb.INVERTCUBICMAP = 6 === wb.coordinatesMode, Mb.REFLECTIONMAP_3D = wb.isCube, Mb.REFLECTIONMAP_OPPOSITEZ = Mb.REFLECTIONMAP_3D && bb.useRightHandedSystem ? !wb.invertZ : wb.invertZ, Mb.REFLECTIONMAP_CUBIC = !1, Mb.REFLECTIONMAP_EXPLICIT = !1, Mb.REFLECTIONMAP_PLANAR = !1, Mb.REFLECTIONMAP_PROJECTION = !1, Mb.REFLECTIONMAP_SKYBOX = !1, Mb.REFLECTIONMAP_SPHERICAL = !1, Mb.REFLECTIONMAP_EQUIRECTANGULAR = !1, Mb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Mb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, wb.coordinatesMode) {
          case 0:
            Mb.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            Mb.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            Mb.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            Mb.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            Mb.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            Mb.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            Mb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            Mb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            Mb.REFLECTIONMAP_CUBIC = !0, Mb.USE_LOCAL_REFLECTIONMAP_CUBIC = !!wb.boundingBoxSize
        }
        5 !== wb.coordinatesMode && (wb.irradianceTexture ? (Mb.USEIRRADIANCEMAP = !0, Mb.USESPHERICALFROMREFLECTIONMAP = !1, Mb.USESPHERICALINVERTEX = !1, wb.irradianceTexture._dominantDirection ? Mb.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : Mb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : wb.isCube && (Mb.USESPHERICALFROMREFLECTIONMAP = !0, Mb.USEIRRADIANCEMAP = !1, Mb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Mb.USESPHERICALINVERTEX = pb))
      } else Mb.REFLECTION = !1, Mb.REFLECTIONMAP_3D = !1, Mb.REFLECTIONMAP_SPHERICAL = !1, Mb.REFLECTIONMAP_PLANAR = !1, Mb.REFLECTIONMAP_CUBIC = !1, Mb.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, Mb.REFLECTIONMAP_PROJECTION = !1, Mb.REFLECTIONMAP_SKYBOX = !1, Mb.REFLECTIONMAP_EXPLICIT = !1, Mb.REFLECTIONMAP_EQUIRECTANGULAR = !1, Mb.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, Mb.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Mb.INVERTCUBICMAP = !1, Mb.USESPHERICALFROMREFLECTIONMAP = !1, Mb.USEIRRADIANCEMAP = !1, Mb.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, Mb.USESPHERICALINVERTEX = !1, Mb.REFLECTIONMAP_OPPOSITEZ = !1, Mb.LODINREFLECTIONALPHA = !1, Mb.GAMMAREFLECTION = !1, Mb.RGBDREFLECTION = !1, Mb.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function Wb(bb, wb, Mb, eb, Hb, Vb, gb) {
      switch (gb.needNormals = !0, void 0 === Hb["LIGHT" + eb] && (gb.needRebuild = !0), Hb["LIGHT" + eb] = !0, Hb["SPOTLIGHT" + eb] = !1, Hb["HEMILIGHT" + eb] = !1, Hb["POINTLIGHT" + eb] = !1, Hb["DIRLIGHT" + eb] = !1, Hb["AREALIGHT" + eb] = !1, Hb["CLUSTLIGHT" + eb] = !1, Mb.prepareLightSpecificDefines(Hb, eb), Hb["LIGHT_FALLOFF_PHYSICAL" + eb] = !1, Hb["LIGHT_FALLOFF_GLTF" + eb] = !1, Hb["LIGHT_FALLOFF_STANDARD" + eb] = !1, Mb.falloffType) {
        case pb.c.FALLOFF_GLTF:
          Hb["LIGHT_FALLOFF_GLTF" + eb] = !0;
          break;
        case pb.c.FALLOFF_PHYSICAL:
          Hb["LIGHT_FALLOFF_PHYSICAL" + eb] = !0;
          break;
        case pb.c.FALLOFF_STANDARD:
          Hb["LIGHT_FALLOFF_STANDARD" + eb] = !0
      }
      if (Vb && !Mb.specular.equalsFloats(0, 0, 0) && (gb.specularEnabled = !0), Hb["SHADOW" + eb] = !1, Hb["SHADOWCSM" + eb] = !1, Hb["SHADOWCSMDEBUG" + eb] = !1, Hb["SHADOWCSMNUM_CASCADES" + eb] = !1, Hb["SHADOWCSMUSESHADOWMAXZ" + eb] = !1, Hb["SHADOWCSMNOBLEND" + eb] = !1, Hb["SHADOWCSM_RIGHTHANDED" + eb] = !1, Hb["SHADOWPCF" + eb] = !1, Hb["SHADOWPCSS" + eb] = !1, Hb["SHADOWPOISSON" + eb] = !1, Hb["SHADOWESM" + eb] = !1, Hb["SHADOWCLOSEESM" + eb] = !1, Hb["SHADOWCUBE" + eb] = !1, Hb["SHADOWLOWQUALITY" + eb] = !1, Hb["SHADOWMEDIUMQUALITY" + eb] = !1, wb && wb.receiveShadows && bb.shadowsEnabled && Mb.shadowEnabled) {
        const wb = Mb.getShadowGenerator(bb.activeCamera) ?? Mb.getShadowGenerator();
        if (wb) {
          const bb = wb.getShadowMap();
          bb && bb.renderList && bb.renderList.length > 0 && (gb.shadowEnabled = !0, wb.prepareDefines(Hb, eb))
        }
      }
      Mb.lightmapMode != pb.c.LIGHTMAP_DEFAULT ? (gb.lightmapMode = !0, Hb["LIGHTMAPEXCLUDED" + eb] = !0, Hb["LIGHTMAPNOSPECULAR" + eb] = Mb.lightmapMode == pb.c.LIGHTMAP_SHADOWSONLY) : (Hb["LIGHTMAPEXCLUDED" + eb] = !1, Hb["LIGHTMAPNOSPECULAR" + eb] = !1)
    }

    function Jb(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lb = function(bb, wb) {
          let Mb = !1;
          if (bb.activeCamera) {
            const eb = wb.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Hb = wb.CAMERA_PERSPECTIVE ? 1 : 0,
              pb = 1 === bb.activeCamera.mode ? 1 : 0,
              Vb = 0 === bb.activeCamera.mode ? 1 : 0;
            (eb ^ pb || Hb ^ Vb) && (wb.CAMERA_ORTHOGRAPHIC = 1 === pb, wb.CAMERA_PERSPECTIVE = 1 === Vb, Mb = !0)
          }
          return Mb
        }(bb, eb);
      !1 !== pb && (lb = (0, Vb.h)(Mb, bb, eb)), eb.DEPTHPREPASS !== !wb.getColorWrite() && (eb.DEPTHPREPASS = !eb.DEPTHPREPASS, lb = !0), eb.INSTANCES !== Hb && (eb.INSTANCES = Hb, lb = !0), eb.THIN_INSTANCES !== gb && (eb.THIN_INSTANCES = gb, lb = !0), lb && eb.markAsUnprocessed()
    }
    const Sb = 40,
      Nb = 64,
      vb = new WeakMap,
      Qb = new WeakSet;

    function Gb(bb, wb, Mb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Vb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        gb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!wb._areAttributesDirty && wb._needNormals === wb._normals && wb._needUVs === wb._uvs) return !1;
      wb._normals = wb._needNormals, wb._uvs = wb._needUVs, wb.NORMAL = wb._needNormals && bb.isVerticesDataPresent("normal"), wb._needNormals && bb.isVerticesDataPresent("tangent") && (wb.TANGENT = !0);
      for (let eb = 1; eb <= 6; ++eb) wb["UV" + eb] = !!wb._needUVs && bb.isVerticesDataPresent(`uv${1===eb?"":eb}`);
      if (Mb) {
        const Mb = bb.useVertexColors && bb.isVerticesDataPresent("color");
        wb.VERTEXCOLOR = Mb, wb.VERTEXALPHA = bb.hasVertexAlpha && Mb && Vb
      }
      return bb.isVerticesDataPresent("instanceColor") && (bb.ypb || bb.hasThinInstances) && (wb.INSTANCESCOLOR = !0), Hb && function(bb, wb) {
        if (bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          wb.NUM_BONE_INFLUENCERS = bb.numBoneInfluencers;
          const Mb = void 0 !== wb.BONETEXTURE;
          if (bb.skeleton.isUsingTextureForMatrices && Mb) wb.BONETEXTURE = !0;
          else {
            wb.BonesPerMesh = bb.skeleton.bones.length + 1, wb.BONETEXTURE = !Mb && void 0;
            const Hb = bb.RJ(),
              pb = Hb.prePassRenderer;
            if (pb && pb.enabled) {
              const Mb = -1 === pb.excludedSkinnedMesh.indexOf(bb);
              wb.BONES_VELOCITY_ENABLED = Mb
            }
            const Vb = !0 === wb.MULTIVIEW,
              gb = 2 * wb.BonesPerMesh + (Vb ? 1 : 0);
            if (vb.get(bb.skeleton) !== gb) {
              vb.set(bb.skeleton, gb);
              const Mb = Hb.DC().getCaps().maxVertexUniformVectors;
              if (Mb && !Qb.has(bb.skeleton)) {
                const Hb = 4 * wb.BonesPerMesh,
                  pb = Vb ? Nb : Sb,
                  gb = Math.max(Mb - pb, 0);
                (Hb > gb || Vb && 3 * Hb > Mb) && (Qb.add(bb.skeleton), eb.b.Warn(`Skeleton "${bb.skeleton.name}": ${bb.skeleton.bones.length} bones stored as vertex uniforms use ${Hb} of ~${gb} usable uniform vectors${Vb?" (multiview)":""} on a device reporting ${Mb}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else wb.NUM_BONE_INFLUENCERS = 0, wb.BonesPerMesh = 0, void 0 !== wb.BONETEXTURE && (wb.BONETEXTURE = !1)
      }(bb, wb), pb && function(bb, wb) {
        const Mb = bb.morphTargetManager;
        Mb ? (wb.MORPHTARGETS_UV = Mb.supportsUVs && wb.UV1, wb.MORPHTARGETS_UV2 = Mb.supportsUV2s && wb.UV2, wb.MORPHTARGETS_TANGENT = Mb.supportsTangents && wb.TANGENT, wb.MORPHTARGETS_NORMAL = Mb.supportsNormals && wb.NORMAL, wb.MORPHTARGETS_POSITION = Mb.supportsPositions, wb.MORPHTARGETS_COLOR = Mb.supportsColors, wb.MORPHTARGETTEXTURE_HASUVS = Mb.hasUVs, wb.MORPHTARGETTEXTURE_HASUV2S = Mb.hasUV2s, wb.MORPHTARGETTEXTURE_HASTANGENTS = Mb.hasTangents, wb.MORPHTARGETTEXTURE_HASNORMALS = Mb.hasNormals, wb.MORPHTARGETTEXTURE_HASPOSITIONS = Mb.hasPositions, wb.MORPHTARGETTEXTURE_HASCOLORS = Mb.hasColors, wb.NUM_MORPH_INFLUENCERS = Mb.numMaxInfluencers || Mb.numInfluencers, wb.MORPHTARGETS = wb.NUM_MORPH_INFLUENCERS > 0, wb.MORPHTARGETS_TEXTURE = Mb.isUsingTextureForTargets) : (wb.MORPHTARGETS_UV = !1, wb.MORPHTARGETS_UV2 = !1, wb.MORPHTARGETS_TANGENT = !1, wb.MORPHTARGETS_NORMAL = !1, wb.MORPHTARGETS_POSITION = !1, wb.MORPHTARGETS_COLOR = !1, wb.MORPHTARGETTEXTURE_HASUVS = !1, wb.MORPHTARGETTEXTURE_HASUV2S = !1, wb.MORPHTARGETTEXTURE_HASTANGENTS = !1, wb.MORPHTARGETTEXTURE_HASNORMALS = !1, wb.MORPHTARGETTEXTURE_HASPOSITIONS = !1, wb.MORPHTARGETTEXTURE_HAS_COLORS = !1, wb.MORPHTARGETS = !1, wb.NUM_MORPH_INFLUENCERS = 0)
      }(bb, wb), gb && function(bb, wb) {
        const Mb = bb.bakedVertexAnimationManager;
        wb.BAKED_VERTEX_ANIMATION_TEXTURE = !(!Mb || !Mb.isEnabled)
      }(bb, wb), !0
    }

    function qb(bb, wb) {
      if (bb.activeCamera) {
        const Mb = wb.MULTIVIEW;
        wb.MULTIVIEW = null !== bb.activeCamera.outputRenderTarget && bb.activeCamera.outputRenderTarget.getViewCount() > 1, wb.MULTIVIEW != Mb && wb.markAsUnprocessed()
      }
    }

    function ab(bb, wb, Mb) {
      const eb = wb.ORDER_INDEPENDENT_TRANSPARENCY,
        Hb = wb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      wb.ORDER_INDEPENDENT_TRANSPARENCY = bb.useOrderIndependentTransparency && Mb, wb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !bb.DC().getCaps().textureFloatLinearFiltering, eb === wb.ORDER_INDEPENDENT_TRANSPARENCY && Hb === wb.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || wb.markAsUnprocessed()
    }

    function ib(bb, wb, Mb) {
      const eb = wb.PREPASS;
      if (!wb._arePrePassDirty) return;
      const Hb = [{
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
      if (bb.prePassRenderer && bb.prePassRenderer.enabled && Mb) {
        wb.PREPASS = !0, wb.SCENE_MRT_COUNT = bb.prePassRenderer.mrtCount, wb.PREPASS_NORMAL_WORLDSPACE = bb.prePassRenderer.generateNormalsInWorldSpace, wb.PREPASS_COLOR = !0, wb.PREPASS_COLOR_INDEX = 0;
        for (let Mb = 0; Mb < Hb.length; Mb++) {
          const eb = bb.prePassRenderer.getIndex(Hb[Mb].type); - 1 !== eb ? (wb[Hb[Mb].define] = !0, wb[Hb[Mb].index] = eb) : wb[Hb[Mb].define] = !1
        }
      } else {
        wb.PREPASS = !1;
        for (let bb = 0; bb < Hb.length; bb++) wb[Hb[bb].define] = !1
      }
      wb.PREPASS != eb && (wb.markAsUnprocessed(), wb.markAsImageProcessingDirty())
    }

    function ub(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Lb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Hb && Hb.push("Light" + bb), pb || (wb.push("vLightData" + bb, "vLightDiffuse" + bb, "vLightSpecular" + bb, "vLightDirection" + bb, "vLightWidth" + bb, "vLightHeight" + bb, "vLightFalloff" + bb, "vLightGround" + bb, "vSliceData" + bb, "vSliceRanges" + bb, "lightMatrix" + bb, "shadowsInfo" + bb, "depthValues" + bb), Mb.push("shadowTexture" + bb), Mb.push("depthTexture" + bb), wb.push("viewFrustumZ" + bb, "cascadeBlendFactor" + bb, "lightSizeUVCorrection" + bb, "depthCorrection" + bb, "penumbraDarkness" + bb, "frustumLengths" + bb), eb && (Mb.push("projectionLightTexture" + bb), wb.push("textureProjectionMatrix" + bb)), Vb && Mb.push("iesLightTexture" + bb), lb && Mb.push("rectAreaLightEmissionTexture" + bb), gb && (Mb.push("lightDataTexture" + bb), Lb || Mb.push("tileMaskTexture" + bb)))
    }

    function db(bb, wb, Mb) {
      const eb = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      Mb && eb.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), bb.push(...eb);
      wb.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Pb(bb, wb, Mb) {
      let eb, Hb, pb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Vb = null;
      if (bb.uniformsNames) {
        const gb = bb;
        eb = gb.uniformsNames, Hb = gb.uniformBuffersNames, wb = gb.samplers, Mb = gb.defines, pb = gb.maxSimultaneousLights || 0, Vb = gb.shaderLanguage ?? null
      } else eb = bb, wb || (wb = []);
      for (let gb = 0; gb < pb && Mb["LIGHT" + gb]; gb++) ub(gb, eb, wb, Mb["PROJECTEDLIGHTTEXTURE" + gb], Hb, !1, Mb["IESLIGHTTEXTURE" + gb], Mb["CLUSTLIGHT" + gb], Mb["RECTAREALIGHTEMISSIONTEXTURE" + gb], 1 === Vb);
      Mb.NUM_MORPH_INFLUENCERS && (eb.push("morphTargetInfluences"), eb.push("morphTargetCount")), Mb.BAKED_VERTEX_ANIMATION_TEXTURE && (eb.push("bakedVertexAnimationSettings"), eb.push("bakedVertexAnimationTextureSizeInverted"), eb.push("bakedVertexAnimationTime"), wb.push("bakedVertexAnimationTexture"))
    }

    function nb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      bb.addUniform("vReflectionInfos", 2), bb.addUniform("reflectionMatrix", 16), wb && bb.addUniform("vReflectionMicrosurfaceInfos", 3), Mb && (bb.addUniform("vReflectionPosition", 3), bb.addUniform("vReflectionSize", 3)), eb && (bb.addUniform("vReflectionFilteringInfo", 2), bb.addUniform("vReflectionDominantDirection", 3)), pb && bb.addUniform("vReflectionColor", 3), Hb && (bb.addUniform("vSphericalL00", 3), bb.addUniform("vSphericalL1_1", 3), bb.addUniform("vSphericalL10", 3), bb.addUniform("vSphericalL11", 3), bb.addUniform("vSphericalL2_2", 3), bb.addUniform("vSphericalL2_1", 3), bb.addUniform("vSphericalL20", 3), bb.addUniform("vSphericalL21", 3), bb.addUniform("vSphericalL22", 3), bb.addUniform("vSphericalX", 3), bb.addUniform("vSphericalY", 3), bb.addUniform("vSphericalZ", 3), bb.addUniform("vSphericalXX_ZZ", 3), bb.addUniform("vSphericalYY_ZZ", 3), bb.addUniform("vSphericalZZ", 3), bb.addUniform("vSphericalXY", 3), bb.addUniform("vSphericalYZ", 3), bb.addUniform("vSphericalZX", 3))
    }
  },
  42017: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb
    });
    var eb = Mb(38285),
      Hb = Mb(41963);
    class pb extends Hb.b {
      constructor(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(bb, wb, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new eb.b, this._storeEffectOnSubMeshes = Mb
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(bb, wb) {
        return !!bb && (!this._storeEffectOnSubMeshes || (!bb.oR || 0 === bb.oR.length || this.isReadyForSubMesh(bb, bb.oR[0], wb)))
      }
      _isReadyForSubMesh(bb) {
        const wb = bb.materialDefines;
        return !(this.checkReadyOnEveryCall || !bb.effect || !wb || wb._renderId !== this.RJ().getRenderId())
      }
      bindOnlyWorldMatrix(bb) {
        this._activeEffect.setMatrix("world", bb)
      }
      bindOnlyNormalMatrix(bb) {
        this._activeEffect.setMatrix("normalMatrix", bb)
      }
      bind(bb, wb) {
        wb && this.bindForSubMesh(bb, wb, wb.oR[0])
      }
      _afterBind(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(bb, wb, Mb), this.RJ()._cachedEffect = wb, Mb ? Mb._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return Mb._drawWrapper._forceRebindOnNextCall || bb.isCachedMaterialInvalid(this, wb, eb)
      }
      dispose(bb, wb, Mb) {
        this._activeEffect = void 0, super.dispose(bb, wb, Mb)
      }
    }
  },
  42050: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    const eb = new WeakMap;

    function Hb(bb) {
      const wb = bb.getVertexBuffers();
      if (!wb) return null;
      let Mb = eb.get(bb);
      if (Mb) {
        let bb = !1;
        for (const eb in wb)
          if (!Mb.has(eb)) {
            bb = !0;
            break
          } if (!bb) return Mb
      } else Mb = new Map, eb.set(bb, Mb);
      for (const eb in wb) {
        const bb = wb[eb];
        if (bb) {
          const wb = bb.byteOffset,
            Hb = bb.byteStride,
            pb = bb.type,
            Vb = bb.normalized;
          Mb.set(eb, {
            offset: wb,
            stride: Hb,
            type: pb,
            normalized: Vb
          })
        }
      }
      return Mb
    }

    function pb(bb, wb) {
      wb.forEach(((wb, Mb) => {
        const eb = `vp_${Mb}_info`;
        bb.setFloat4(eb, wb.offset, wb.stride, wb.type, wb.normalized ? 1 : 0)
      }))
    }
  },
  41993: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      g: () => lb
    });
    var eb = Mb(41675),
      Hb = Mb(38285),
      pb = Mb(41679);
    let Vb = (() => {
      var bb;
      let wb, Mb, Hb = [];
      return bb = class {
        static extractMinAndMaxIndexed(bb, wb, Mb, eb, Hb, pb) {
          for (let Vb = Mb; Vb < Mb + eb; Vb++) {
            const Mb = 3 * wb[Vb],
              eb = bb[Mb],
              gb = bb[Mb + 1],
              lb = bb[Mb + 2];
            Hb.minimizeInPlaceFromFloats(eb, gb, lb), pb.maximizeInPlaceFromFloats(eb, gb, lb)
          }
        }
        static extractMinAndMax(bb, wb, Mb, eb, Hb, pb) {
          for (let Vb = wb, gb = wb * eb; Vb < wb + Mb; Vb++, gb += eb) {
            const wb = bb[gb],
              Mb = bb[gb + 1],
              eb = bb[gb + 2];
            Hb.minimizeInPlaceFromFloats(wb, Mb, eb), pb.maximizeInPlaceFromFloats(wb, Mb, eb)
          }
        }
      }, (() => {
        const Vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [pb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], Mb = [pb.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, eb.i)(bb, null, wb, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMaxIndexed" in bb,
            get: bb => bb.extractMinAndMaxIndexed
          },
          metadata: Vb
        }, null, Hb), (0, eb.i)(bb, null, Mb, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: bb => "extractMinAndMax" in bb,
            get: bb => bb.extractMinAndMax
          },
          metadata: Vb
        }, null, Hb), Vb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Vb
        }), (0, eb.m)(bb, Hb)
      })(), bb
    })();

    function gb(bb, wb, Mb, eb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const gb = new Hb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        lb = new Hb.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Vb.extractMinAndMaxIndexed(bb, wb, Mb, eb, gb, lb), pb && (gb.x -= gb.x * pb.x + pb.y, gb.y -= gb.y * pb.x + pb.y, gb.z -= gb.z * pb.x + pb.y, lb.x += lb.x * pb.x + pb.y, lb.y += lb.y * pb.x + pb.y, lb.z += lb.z * pb.x + pb.y), {
        minimum: gb,
        maximum: lb
      }
    }

    function lb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        pb = arguments.length > 4 ? arguments[4] : void 0;
      const gb = new Hb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        lb = new Hb.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return pb || (pb = 3), Vb.extractMinAndMax(bb, wb, Mb, pb, gb, lb), eb && (gb.x -= gb.x * eb.x + eb.y, gb.y -= gb.y * eb.x + eb.y, gb.z -= gb.z * eb.x + eb.y, lb.x += lb.x * eb.x + eb.y, lb.y += lb.y * eb.x + eb.y, lb.z += lb.z * eb.x + eb.y), {
        minimum: gb,
        maximum: lb
      }
    }
  },
  41972: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib
    });
    var eb, Hb = Mb(41816),
      pb = Mb(41981),
      Vb = Mb(41984),
      gb = Mb(41993),
      lb = Mb(41997),
      Lb = Mb(41554);
    class Ib {
      get materialDefines() {
        const bb = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof bb ? null : bb
      }
      set materialDefines(bb) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = bb
      }
      _getDrawWrapper(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb = bb ?? this._engine.currentRenderPassId;
        let Mb = this._drawWrappers[bb];
        return !Mb && wb && (this._drawWrappers[bb] = Mb = new lb.c(this._mesh.RJ().DC())), Mb
      }
      _removeDrawWrapper(bb) {
        let wb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[bb]?.dispose(wb), this._drawWrappers[bb] = void 0
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Hb = this._drawWrapper;
        Hb.setEffect(bb, wb, eb), void 0 !== Mb && (Hb.materialContext = Mb), bb || (Hb.defines = null, Hb.materialContext = void 0)
      }
      resetDrawCache(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== bb) return void this._removeDrawWrapper(bb, !0, wb);
          for (const bb of this._drawWrappers) bb?.dispose(wb)
        }
        this._drawWrappers = []
      }
      static AddToMesh(bb, wb, Mb, eb, Hb, pb, Vb) {
        return new Ib(bb, wb, Mb, eb, Hb, pb, Vb, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(bb, wb, Mb, eb, Hb, pb, Vb) {
        let gb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          lb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = bb, this.verticesStart = wb, this.verticesCount = Mb, this.indexStart = eb, this.indexCount = Hb, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = pb, this._renderingMesh = Vb || pb, lb && pb.oR.push(this), this._engine = this._mesh.RJ().DC(), this.resetDrawCache(), this._trianglePlanes = [], this._id = pb.oR.length - 1, gb && (this.refreshBoundingInfo(), pb.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      XN() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.XN() : this._boundingInfo
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
      AC() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const wb = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!wb) return bb && this._mesh.RJ()._hasDefaultMaterial ? this._mesh.RJ().defaultMaterial : null;
        if (this._isMultiMaterial(wb)) {
          const bb = wb.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== bb && (this._currentMaterial = bb, this.resetDrawCache()), bb
        }
        return wb
      }
      _isMultiMaterial(bb) {
        return void 0 !== bb.getSubMaterial
      }
      refreshBoundingInfo() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (bb || (bb = this._renderingMesh.getVerticesData(Hb.i.PositionKind)), !bb) return this._boundingInfo = this._mesh.XN(), this;
        const wb = this._renderingMesh.ipb();
        let Mb;
        if (0 === this.indexStart && this.indexCount === wb.length) {
          const bb = this._renderingMesh.XN();
          Mb = {
            minimum: bb.minimum.clone(),
            maximum: bb.maximum.clone()
          }
        } else Mb = (0, gb.c)(bb, wb, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(Mb.minimum, Mb.maximum) : this._boundingInfo = new Vb.e(Mb.minimum, Mb.maximum), this
      }
      _checkCollision(bb) {
        return this.XN()._checkCollision(bb)
      }
      updateBoundingInfo(bb) {
        let wb = this.XN();
        return wb || (this.refreshBoundingInfo(), wb = this.XN()), wb && wb.update(bb), this
      }
      isInFrustum(bb) {
        const wb = this.XN();
        return !!wb && wb.isInFrustum(bb, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(bb) {
        const wb = this.XN();
        return !!wb && wb.isCompletelyInFrustum(bb)
      }
      render(bb) {
        return this._renderingMesh.render(this, bb, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(bb, wb) {
        if (!this._linesIndexBuffer) {
          const Mb = 6 * Math.floor(this.indexCount / 3),
            eb = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(Mb) : new Uint16Array(Mb);
          let Hb = 0;
          if (0 === bb.length)
            for (let bb = this.indexStart; bb < this.indexStart + this.indexCount; bb += 3) eb[Hb++] = bb, eb[Hb++] = bb + 1, eb[Hb++] = bb + 1, eb[Hb++] = bb + 2, eb[Hb++] = bb + 2, eb[Hb++] = bb;
          else
            for (let wb = this.indexStart; wb < this.indexStart + this.indexCount; wb += 3) eb[Hb++] = bb[wb], eb[Hb++] = bb[wb + 1], eb[Hb++] = bb[wb + 1], eb[Hb++] = bb[wb + 2], eb[Hb++] = bb[wb + 2], eb[Hb++] = bb[wb];
          this._linesIndexBuffer = wb.createIndexBuffer(eb), this._linesIndexCount = eb.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(bb) {
        const wb = this.XN();
        return !!wb && bb.intersectsBox(wb.boundingBox)
      }
      intersects(bb, wb, Mb, eb, Hb) {
        const pb = this.AC();
        if (!pb) return null;
        let Vb = 3,
          gb = !1;
        switch (pb.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Vb = 1, gb = !0
        }
        return 4 === pb.fillMode ? Mb.length ? this._intersectLines(bb, wb, Mb, this._mesh.intersectionThreshold, eb) : this._intersectUnIndexedLines(bb, wb, Mb, this._mesh.intersectionThreshold, eb) : !Mb.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(bb, wb, Mb, eb, Hb) : this._intersectTriangles(bb, wb, Mb, Vb, gb, eb, Hb)
      }
      _intersectLines(bb, wb, Mb, eb, Hb) {
        let Vb = null;
        for (let gb = this.indexStart; gb < this.indexStart + this.indexCount; gb += 2) {
          const lb = wb[Mb[gb]],
            Lb = wb[Mb[gb + 1]],
            Ib = bb.intersectionSegment(lb, Lb, eb);
          if (!(Ib < 0) && ((Hb || !Vb || Ib < Vb.distance) && (Vb = new pb.c(null, null, Ib), Vb.faceId = gb / 2, Hb))) break
        }
        return Vb
      }
      _intersectUnIndexedLines(bb, wb, Mb, eb, Hb) {
        let Vb = null;
        for (let gb = this.verticesStart; gb < this.verticesStart + this.verticesCount; gb += 2) {
          const Mb = wb[gb],
            lb = wb[gb + 1],
            Lb = bb.intersectionSegment(Mb, lb, eb);
          if (!(Lb < 0) && ((Hb || !Vb || Lb < Vb.distance) && (Vb = new pb.c(null, null, Lb), Vb.faceId = gb / 2, Hb))) break
        }
        return Vb
      }
      _intersectTriangles(bb, wb, Mb, eb, Hb, pb, Vb) {
        let gb = null,
          lb = -1;
        for (let Lb = this.indexStart; Lb < this.indexStart + this.indexCount - (3 - eb); Lb += eb) {
          lb++;
          const eb = Mb[Lb],
            Ib = Mb[Lb + 1],
            Ob = Mb[Lb + 2];
          if (Hb && 4294967295 === Ob) {
            Lb += 2;
            continue
          }
          const Ub = wb[eb],
            tb = wb[Ib],
            Cb = wb[Ob];
          if (!Ub || !tb || !Cb) continue;
          if (Vb && !Vb(Ub, tb, Cb, bb, eb, Ib, Ob)) continue;
          const Eb = bb.intersectsTriangle(Ub, tb, Cb);
          if (Eb) {
            if (Eb.distance < 0) continue;
            if ((pb || !gb || Eb.distance < gb.distance) && (gb = Eb, gb.faceId = lb, pb)) break
          }
        }
        return gb
      }
      _intersectUnIndexedTriangles(bb, wb, Mb, eb, Hb) {
        let pb = null;
        for (let Vb = this.verticesStart; Vb < this.verticesStart + this.verticesCount; Vb += 3) {
          const Mb = wb[Vb],
            gb = wb[Vb + 1],
            lb = wb[Vb + 2];
          if (Hb && !Hb(Mb, gb, lb, bb, -1, -1, -1)) continue;
          const Lb = bb.intersectsTriangle(Mb, gb, lb);
          if (Lb) {
            if (Lb.distance < 0) continue;
            if ((eb || !pb || Lb.distance < pb.distance) && (pb = Lb, pb.faceId = Vb / 3, eb)) break
          }
        }
        return pb
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(bb, wb) {
        const Mb = new Ib(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, bb, wb, !1);
        if (!this.IsGlobal) {
          const bb = this.XN();
          if (!bb) return Mb;
          Mb._boundingInfo = new Vb.e(bb.minimum, bb.maximum)
        }
        return Mb
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.RJ().DC()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const wb = this._mesh.oR.indexOf(this);
        this._mesh.oR.splice(wb, 1), this.resetDrawCache(void 0, bb)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(bb, wb, Mb, eb, Hb) {
        let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = Number.MAX_VALUE,
          gb = -Number.MAX_VALUE;
        const lb = (Hb || eb).ipb();
        for (let Lb = wb; Lb < wb + Mb; Lb++) {
          const bb = lb[Lb];
          bb < Vb && (Vb = bb), bb > gb && (gb = bb)
        }
        return new Ib(bb, Vb, gb - Vb + 1, wb, Mb, eb, Hb, pb)
      }
    }(eb = Ib.prototype).projectToRef ?? (eb.projectToRef = (0, Lb.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);