export const id = 266;
export const ids = [266];
export const modules = {
  40343: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB, IB, ZB) {
        this.bu = BB, this.bv = IB, this.distance = ZB, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40354: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(37131),
      JB = ZB(37120),
      oB = ZB(37129);
    class GB {
      constructor(BB, IB, ZB) {
        this.vectors = (0, TB.b)(8, JB.s.Zero), this.center = JB.s.Zero(), this.centerWorld = JB.s.Zero(), this.extendSize = JB.s.Zero(), this.extendSizeWorld = JB.s.Zero(), this.directions = (0, TB.b)(3, JB.s.Zero), this.vectorsWorld = (0, TB.b)(8, JB.s.Zero), this.minimumWorld = JB.s.Zero(), this.maximumWorld = JB.s.Zero(), this.minimum = JB.s.Zero(), this.maximum = JB.s.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(BB, IB, ZB)
      }
      reConstruct(BB, IB, ZB) {
        const TB = BB.x,
          oB = BB.y,
          GB = BB.z,
          vB = IB.x,
          kB = IB.y,
          cB = IB.z,
          nB = this.vectors;
        this.minimum.cBB(TB, oB, GB), this.maximum.cBB(vB, kB, cB), nB[0].cBB(TB, oB, GB), nB[1].cBB(vB, kB, cB), nB[2].cBB(vB, oB, GB), nB[3].cBB(TB, kB, GB), nB[4].cBB(TB, oB, cB), nB[5].cBB(vB, kB, GB), nB[6].cBB(TB, kB, cB), nB[7].cBB(vB, oB, cB), IB.addToRef(BB, this.center).scaleInPlace(.5), IB.subtractToRef(BB, this.extendSize).scaleInPlace(.5), this._worldMatrix = ZB || JB.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(BB) {
        const IB = GB._TmpVector3,
          ZB = this.maximum.subtractToRef(this.minimum, IB[0]),
          TB = ZB.length();
        ZB.normalizeFromLength(TB);
        const JB = TB * BB,
          oB = ZB.scaleInPlace(.5 * JB),
          vB = this.center.subtractToRef(oB, IB[1]),
          kB = this.center.addToRef(oB, IB[2]);
        return this.reConstruct(vB, kB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        const IB = this.minimumWorld,
          ZB = this.maximumWorld,
          TB = this.directions,
          oB = this.vectorsWorld,
          GB = this.vectors;
        if (BB.isIdentity()) {
          IB.TY(this.minimum), ZB.TY(this.maximum);
          for (let BB = 0; BB < 8; ++BB) oB[BB].TY(GB[BB]);
          this.extendSizeWorld.TY(this.extendSize), this.centerWorld.TY(this.center)
        } else {
          IB.K9(Number.MAX_VALUE), ZB.K9(-Number.MAX_VALUE);
          for (let TB = 0; TB < 8; ++TB) {
            const vB = oB[TB];
            JB.s.TransformCoordinatesToRef(GB[TB], BB, vB), IB.minimizeInPlace(vB), ZB.maximizeInPlace(vB)
          }
          ZB.subtractToRef(IB, this.extendSizeWorld).scaleInPlace(.5), ZB.addToRef(IB, this.centerWorld).scaleInPlace(.5)
        }
        JB.s.FromArrayToRef(BB.m, 0, TB[0]), JB.s.FromArrayToRef(BB.m, 4, TB[1]), JB.s.FromArrayToRef(BB.m, 8, TB[2]), this._worldMatrix = BB
      }
      isInFrustum(BB) {
        return GB.IsInFrustum(this.vectorsWorld, BB)
      }
      isCompletelyInFrustum(BB) {
        return GB.IsCompletelyInFrustum(this.vectorsWorld, BB)
      }
      intersectsPoint(BB) {
        const IB = this.minimumWorld,
          ZB = this.maximumWorld,
          TB = IB.x,
          JB = IB.y,
          GB = IB.z,
          vB = ZB.x,
          kB = ZB.y,
          cB = ZB.z,
          nB = BB.x,
          hB = BB.y,
          zB = BB.z,
          FB = -oB.d;
        return !(vB - nB < FB || FB > nB - TB) && (!(kB - hB < FB || FB > hB - JB) && !(cB - zB < FB || FB > zB - GB))
      }
      intersectsSphere(BB) {
        return GB.IntersectsSphere(this.minimumWorld, this.maximumWorld, BB.centerWorld, BB.radiusWorld)
      }
      intersectsMinMax(BB, IB) {
        const ZB = this.minimumWorld,
          TB = this.maximumWorld,
          JB = ZB.x,
          oB = ZB.y,
          GB = ZB.z,
          vB = TB.x,
          kB = TB.y,
          cB = TB.z,
          nB = BB.x,
          hB = BB.y,
          zB = BB.z,
          FB = IB.x,
          NB = IB.y,
          gB = IB.z;
        return !(vB < nB || JB > FB) && (!(kB < hB || oB > NB) && !(cB < zB || GB > gB))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(BB, IB) {
        return BB.intersectsMinMax(IB.minimumWorld, IB.maximumWorld)
      }
      static IntersectsSphere(BB, IB, ZB, TB) {
        const oB = GB._TmpVector3[0];
        JB.s.ClampToRef(ZB, BB, IB, oB);
        return JB.s.DistanceSquared(ZB, oB) <= TB * TB
      }
      static IsCompletelyInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ++ZB) {
          const TB = IB[ZB];
          for (let IB = 0; IB < 8; ++IB)
            if (TB.dotCoordinate(BB[IB]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ++ZB) {
          let TB = !0;
          const JB = IB[ZB];
          for (let IB = 0; IB < 8; ++IB)
            if (JB.dotCoordinate(BB[IB]) >= 0) {
              TB = !1;
              break
            } if (TB) return !1
        }
        return !0
      }
    }
    GB._TmpVector3 = (0, TB.b)(3, JB.s.Zero)
  },
  40351: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB
    });
    var TB = ZB(37131),
      JB = ZB(37120),
      oB = ZB(40354);
    class GB {
      constructor(BB, IB, ZB) {
        this.center = JB.s.Zero(), this.centerWorld = JB.s.Zero(), this.minimum = JB.s.Zero(), this.maximum = JB.s.Zero(), this.reConstruct(BB, IB, ZB)
      }
      reConstruct(BB, IB, ZB) {
        this.minimum.TY(BB), this.maximum.TY(IB);
        const TB = JB.s.Distance(BB, IB);
        IB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * TB, this._update(ZB || JB.b.IdentityReadOnly)
      }
      scale(BB) {
        const IB = GB._TmpVector3,
          ZB = this.maximum.subtractToRef(this.minimum, IB[0]),
          TB = ZB.length();
        ZB.normalizeFromLength(TB);
        const JB = TB * BB,
          oB = ZB.scaleInPlace(.5 * JB),
          vB = this.center.subtractToRef(oB, IB[1]),
          kB = this.center.addToRef(oB, IB[2]);
        return this.reConstruct(vB, kB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        if (BB.isIdentity()) this.centerWorld.TY(this.center), this.radiusWorld = this.radius;
        else {
          JB.s.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
          const IB = GB._TmpVector3[0];
          JB.s.TransformNormalFromFloatsToRef(1, 1, 1, BB, IB), this.radiusWorld = Math.max(Math.abs(IB.x), Math.abs(IB.y), Math.abs(IB.z)) * this.radius
        }
      }
      isInFrustum(BB) {
        const IB = this.centerWorld,
          ZB = this.radiusWorld;
        for (let TB = 0; TB < 6; TB++)
          if (BB[TB].dotCoordinate(IB) <= -ZB) return !1;
        return !0
      }
      isCenterInFrustum(BB) {
        const IB = this.centerWorld;
        for (let ZB = 0; ZB < 6; ZB++)
          if (BB[ZB].dotCoordinate(IB) < 0) return !1;
        return !0
      }
      intersectsPoint(BB) {
        const IB = JB.s.DistanceSquared(this.centerWorld, BB);
        return !(this.radiusWorld * this.radiusWorld < IB)
      }
      static Intersects(BB, IB) {
        const ZB = JB.s.DistanceSquared(BB.centerWorld, IB.centerWorld),
          TB = BB.radiusWorld + IB.radiusWorld;
        return !(TB * TB < ZB)
      }
      static CreateFromCenterAndRadius(BB, IB, ZB) {
        this._TmpVector3[0].TY(BB), this._TmpVector3[1].cBB(0, 0, IB), this._TmpVector3[2].TY(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].VTB(this._TmpVector3[1]);
        const TB = new GB(this._TmpVector3[0], this._TmpVector3[2]);
        return TB._worldMatrix = ZB || JB.b.Identity(), TB
      }
    }
    GB._TmpVector3 = (0, TB.b)(3, JB.s.Zero);
    const vB = {
        min: 0,
        max: 0
      },
      kB = {
        min: 0,
        max: 0
      },
      cB = (BB, IB, ZB) => {
        const TB = JB.s.Dot(IB.centerWorld, BB),
          oB = Math.abs(JB.s.Dot(IB.directions[0], BB)) * IB.extendSize.x + Math.abs(JB.s.Dot(IB.directions[1], BB)) * IB.extendSize.y + Math.abs(JB.s.Dot(IB.directions[2], BB)) * IB.extendSize.z;
        ZB.min = TB - oB, ZB.max = TB + oB
      },
      nB = (BB, IB, ZB) => (cB(BB, IB, vB), cB(BB, ZB, kB), !(vB.min > kB.max || kB.min > vB.max));
    class hB {
      constructor(BB, IB, ZB) {
        this._isLocked = !1, this.boundingBox = new oB.d(BB, IB, ZB), this.ZJB = new GB(BB, IB, ZB)
      }
      reConstruct(BB, IB, ZB) {
        this.boundingBox.reConstruct(BB, IB, ZB), this.ZJB.reConstruct(BB, IB, ZB)
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
      set isLocked(BB) {
        this._isLocked = BB
      }
      update(BB) {
        this._isLocked || (this.boundingBox._update(BB), this.ZJB._update(BB))
      }
      centerOn(BB, IB) {
        const ZB = hB._TmpVector3[0].TY(BB).VTB(IB),
          TB = hB._TmpVector3[1].TY(BB).addInPlace(IB);
        return this.boundingBox.reConstruct(ZB, TB, this.boundingBox.getWorldMatrix()), this.ZJB.reConstruct(ZB, TB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(BB) {
        const IB = JB.s.Minimize(this.minimum, BB),
          ZB = JB.s.Maximize(this.maximum, BB);
        return this.reConstruct(IB, ZB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(BB) {
        const IB = JB.m.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(IB);
        const ZB = JB.m.rN[0];
        return JB.s.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, IB, ZB), this.encapsulate(ZB), JB.s.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, IB, ZB), this.encapsulate(ZB), this
      }
      scale(BB) {
        return this.boundingBox.scale(BB), this.ZJB.scale(BB), this
      }
      isInFrustum(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === IB || 3 === IB) && this.ZJB.isCenterInFrustum(BB)) return !0;
        if (!this.ZJB.isInFrustum(BB)) return !1;
        return !(1 !== IB && 3 !== IB) || this.boundingBox.isInFrustum(BB)
      }
      get diagonalLength() {
        const BB = this.boundingBox;
        return BB.maximumWorld.subtractToRef(BB.minimumWorld, hB._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(BB) {
        return this.boundingBox.isCompletelyInFrustum(BB)
      }
      _checkCollision(BB) {
        return BB._canDoCollision(this.ZJB.centerWorld, this.ZJB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(BB) {
        return !!this.ZJB.centerWorld && (!!this.ZJB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
      }
      intersects(BB, IB) {
        if (!GB.Intersects(this.ZJB, BB.ZJB)) return !1;
        if (!oB.d.Intersects(this.boundingBox, BB.boundingBox)) return !1;
        if (!IB) return !0;
        const ZB = this.boundingBox,
          TB = BB.boundingBox;
        return !!nB(ZB.directions[0], ZB, TB) && (!!nB(ZB.directions[1], ZB, TB) && (!!nB(ZB.directions[2], ZB, TB) && (!!nB(TB.directions[0], ZB, TB) && (!!nB(TB.directions[1], ZB, TB) && (!!nB(TB.directions[2], ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[0], TB.directions[0]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[0], TB.directions[1]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[0], TB.directions[2]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[1], TB.directions[0]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[1], TB.directions[1]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[1], TB.directions[2]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[2], TB.directions[0]), ZB, TB) && (!!nB(JB.s.Cross(ZB.directions[2], TB.directions[1]), ZB, TB) && !!nB(JB.s.Cross(ZB.directions[2], TB.directions[2]), ZB, TB))))))))))))))
      }
    }
    hB._TmpVector3 = (0, TB.b)(2, JB.s.Zero)
  },
  40380: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      d: () => kB,
      f: () => vB,
      i: () => GB
    });
    var TB = ZB(40193),
      JB = ZB(37120);

    function oB(BB) {
      -1 === BB.indexOf("vClipPlane") && BB.push("vClipPlane"), -1 === BB.indexOf("vClipPlane2") && BB.push("vClipPlane2"), -1 === BB.indexOf("vClipPlane3") && BB.push("vClipPlane3"), -1 === BB.indexOf("vClipPlane4") && BB.push("vClipPlane4"), -1 === BB.indexOf("vClipPlane5") && BB.push("vClipPlane5"), -1 === BB.indexOf("vClipPlane6") && BB.push("vClipPlane6")
    }

    function GB(BB, IB, ZB) {
      const TB = !!(BB.clipPlane ?? IB.clipPlane),
        JB = !!(BB.clipPlane2 ?? IB.clipPlane2),
        oB = !!(BB.clipPlane3 ?? IB.clipPlane3),
        GB = !!(BB.clipPlane4 ?? IB.clipPlane4),
        vB = !!(BB.clipPlane5 ?? IB.clipPlane5),
        kB = !!(BB.clipPlane6 ?? IB.clipPlane6);
      TB && ZB.push("#define CLIPPLANE"), JB && ZB.push("#define CLIPPLANE2"), oB && ZB.push("#define CLIPPLANE3"), GB && ZB.push("#define CLIPPLANE4"), vB && ZB.push("#define CLIPPLANE5"), kB && ZB.push("#define CLIPPLANE6")
    }

    function vB(BB, IB, ZB) {
      let TB = !1;
      const JB = !!(BB.clipPlane ?? IB.clipPlane),
        oB = !!(BB.clipPlane2 ?? IB.clipPlane2),
        GB = !!(BB.clipPlane3 ?? IB.clipPlane3),
        vB = !!(BB.clipPlane4 ?? IB.clipPlane4),
        kB = !!(BB.clipPlane5 ?? IB.clipPlane5),
        cB = !!(BB.clipPlane6 ?? IB.clipPlane6);
      return ZB.CLIPPLANE !== JB && (ZB.CLIPPLANE = JB, TB = !0), ZB.CLIPPLANE2 !== oB && (ZB.CLIPPLANE2 = oB, TB = !0), ZB.CLIPPLANE3 !== GB && (ZB.CLIPPLANE3 = GB, TB = !0), ZB.CLIPPLANE4 !== vB && (ZB.CLIPPLANE4 = vB, TB = !0), ZB.CLIPPLANE5 !== kB && (ZB.CLIPPLANE5 = kB, TB = !0), ZB.CLIPPLANE6 !== cB && (ZB.CLIPPLANE6 = cB, TB = !0), TB
    }

    function kB(BB, IB, ZB) {
      let TB = IB.clipPlane ?? ZB.clipPlane;
      cB(BB, "vClipPlane", TB), TB = IB.clipPlane2 ?? ZB.clipPlane2, cB(BB, "vClipPlane2", TB), TB = IB.clipPlane3 ?? ZB.clipPlane3, cB(BB, "vClipPlane3", TB), TB = IB.clipPlane4 ?? ZB.clipPlane4, cB(BB, "vClipPlane4", TB), TB = IB.clipPlane5 ?? ZB.clipPlane5, cB(BB, "vClipPlane5", TB), TB = IB.clipPlane6 ?? ZB.clipPlane6, cB(BB, "vClipPlane6", TB)
    }

    function cB(BB, IB, ZB) {
      if (ZB) {
        const oB = TB.c.JR()?.floatingOriginOffset || JB.s.ZeroReadOnly;
        BB.setFloat4(IB, ZB.normal.x, ZB.normal.y, ZB.normal.z, ZB.d + JB.s.Dot(ZB.normal, oB))
      }
    }
  },
  40395: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(BB, IB) {
        this._defines[BB] || (BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB), this._defines[BB] = new Array), this._defines[BB].push(IB)
      }
      addCPUSkinningFallback(BB, IB) {
        this._mesh = IB, BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(BB, IB) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, BB = BB.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), IB._bonesComputationForcedToCPU = !0;
          const ZB = this._mesh.JR();
          for (let BB = 0; BB < ZB.meshes.length; BB++) {
            const TB = ZB.meshes[BB];
            if (TB.material) {
              if (TB.computeBonesUsingShaders && 0 !== TB.numBoneInfluencers)
                if (TB.material.getEffect() === IB) TB.computeBonesUsingShaders = !1;
                else if (TB.EW)
                for (const BB of TB.EW) {
                  if (BB.effect === IB) {
                    TB.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && TB.computeBonesUsingShaders && TB.numBoneInfluencers > 0 && (TB.computeBonesUsingShaders = !1)
          }
        } else {
          const IB = this._defines[this._currentRank];
          if (IB)
            for (let ZB = 0; ZB < IB.length; ZB++) BB = BB.replace("#define " + IB[ZB], "");
          this._currentRank++
        }
        return BB
      }
    }
  },
  40339: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => UB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(40152),
      GB = ZB(37153),
      vB = ZB(37147),
      kB = ZB(40341),
      cB = ZB(40177),
      nB = ZB(38718),
      hB = ZB(37824),
      zB = ZB(40369),
      FB = ZB(40085);
    let NB = (() => {
      var BB;
      let IB, ZB, oB, GB, vB, kB, cB, nB, hB, zB, NB, gB, qB = [];
      return BB = class {
        constructor() {
          this._func = (0, TB.l)(this, qB), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(BB) {
          this._func = BB
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(BB) {
          this._backFunc = BB
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(BB) {
          this._funcRef = BB
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(BB) {
          this._funcMask = BB
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(BB) {
          this._opStencilFail = BB
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(BB) {
          this._opDepthFail = BB
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(BB) {
          this._opStencilDepthPass = BB
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(BB) {
          this._backOpStencilFail = BB
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(BB) {
          this._backOpDepthFail = BB
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(BB) {
          this._backOpStencilDepthPass = BB
        }
        get mask() {
          return this._mask
        }
        set mask(BB) {
          this._mask = BB
        }
        get enabled() {
          return this._enabled
        }
        set enabled(BB) {
          this._enabled = BB
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(BB) {
          FB.b.Clone((() => BB), this)
        }
        serialize() {
          return FB.b.Serialize(this)
        }
        parse(BB, IB, ZB) {
          FB.b.Parse((() => this), BB, IB, ZB)
        }
      }, (() => {
        const FB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], (0, TB.j)(BB, null, IB, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: BB => "func" in BB,
            get: BB => BB.func
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, ZB, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: BB => "backFunc" in BB,
            get: BB => BB.backFunc
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, oB, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcRef" in BB,
            get: BB => BB.funcRef
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, GB, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcMask" in BB,
            get: BB => BB.funcMask
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, vB, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilFail" in BB,
            get: BB => BB.opStencilFail
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, kB, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opDepthFail" in BB,
            get: BB => BB.opDepthFail
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, cB, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilDepthPass" in BB,
            get: BB => BB.opStencilDepthPass
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, nB, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilFail" in BB,
            get: BB => BB.backOpStencilFail
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, hB, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpDepthFail" in BB,
            get: BB => BB.backOpDepthFail
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, zB, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilDepthPass" in BB,
            get: BB => BB.backOpStencilDepthPass
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, NB, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: BB => "mask" in BB,
            get: BB => BB.mask
          },
          metadata: FB
        }, null, qB), (0, TB.j)(BB, null, gB, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "enabled" in BB,
            get: BB => BB.enabled
          },
          metadata: FB
        }, null, qB), FB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FB
        })
      })(), BB
    })();
    var gB = ZB(40371),
      qB = ZB(39973),
      yB = ZB(39931);
    let UB = (() => {
      var BB;
      let IB, ZB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB = [],
        bB = [],
        xB = [],
        EB = [],
        DB = [],
        KB = [],
        VB = [],
        SB = [],
        BI = [],
        II = [],
        ZI = [],
        TI = [],
        JI = [],
        oI = [],
        GI = [],
        vI = [],
        kI = [],
        cI = [],
        nI = [],
        hI = [],
        zI = [],
        FI = [],
        NI = [],
        gI = [],
        qI = [],
        yI = [],
        UI = [],
        WI = [],
        dI = [],
        CI = [],
        QI = [],
        sI = [],
        wI = [],
        OI = [],
        YI = [],
        iI = [],
        pI = [],
        aI = [],
        HI = [],
        MI = [],
        jI = [],
        PI = [],
        RI = [],
        rI = [],
        mI = [],
        XI = [],
        LI = [],
        eI = [],
        uI = [],
        fI = [],
        lI = [];
      return BB = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(IB) {
          this._useVertexPulling !== IB && (this._useVertexPulling = IB, this.GZB(BB.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(BB) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(IB) {
          if (this._alpha === IB) return;
          const ZB = this._alpha;
          this._alpha = IB, 1 !== ZB && 1 !== IB || this.GZB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(IB) {
          this._backFaceCulling !== IB && (this._backFaceCulling = IB, this.GZB(BB.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(IB) {
          const ZB = Math.max(0, Math.min(0 | IB, 4));
          this._textureRepetitionMode !== ZB && (this._textureRepetitionMode = ZB, this.GZB(BB.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(IB) {
          this._cullBackFaces !== IB && (this._cullBackFaces = IB, this.GZB(BB.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(BB) {
          this._blockDirtyMechanism !== BB && (this._blockDirtyMechanism = BB, BB || this.markDirty())
        }
        atomicMaterialsUpdate(BB) {
          this.blockDirtyMechanism = !0;
          try {
            BB(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(BB) {
          this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new GB.b), this._onBindObservable
        }
        set onBind(BB) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(BB)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new GB.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new GB.b), this._onEffectCreatedObservable
        }
        set alphaMode(BB) {
          this._alphaMode[0] = BB
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[ZB] !== IB && (this._alphaMode[ZB] = IB, this.GZB(BB.TextureDirtyFlag))
        }
        set needDepthPrePass(BB) {
          this._needDepthPrePass !== BB && (this._needDepthPrePass = BB, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(IB) {
          this._fogEnabled !== IB && (this._fogEnabled = IB, this.GZB(BB.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case BB.WireFrameFillMode:
            case BB.LineListDrawMode:
            case BB.LineLoopDrawMode:
            case BB.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(IB) {
          this.fillMode = IB ? BB.WireFrameFillMode : BB.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case BB.PointFillMode:
            case BB.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(IB) {
          this.fillMode = IB ? BB.PointFillMode : BB.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(IB) {
          this._fillMode !== IB && (this._fillMode = IB, this.GZB(BB.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(BB) {
          const IB = this.JR().PN().getCaps().fragmentDepthSupported;
          BB && !IB && nB.d.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && IB, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(BB) {
          this._isVertexOutputInvariant !== BB && (this._isVertexOutputInvariant = BB, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(BB) {
          this._drawWrapper = BB
        }
        constructor(IB, ZB, JB) {
          let kB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, TB.l)(this, tB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, TB.l)(this, bB, void 0), this.uniqueId = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, void 0)), this._loadedUniqueId = (0, TB.l)(this, DB), this.name = (0, TB.l)(this, KB, void 0), this.metadata = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, null)), this._internalMetadata = (0, TB.l)(this, BI), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, TB.l)(this, II, !1), this.checkReadyOnlyOnce = ((0, TB.l)(this, ZI), (0, TB.l)(this, TI, !1)), this.state = ((0, TB.l)(this, JI), (0, TB.l)(this, oI, "")), this._alpha = ((0, TB.l)(this, GI), (0, TB.l)(this, vI, 1)), this.inspectableCustomProperties = (0, TB.l)(this, kI), this._backFaceCulling = (0, TB.l)(this, cI, !0), this._textureRepetitionMode = ((0, TB.l)(this, nI), (0, TB.l)(this, hI, 0)), this.textureRepetitionHexTilingParams = ((0, TB.l)(this, zI), (0, TB.l)(this, FI, [1, .6, 7, .5])), this._cullBackFaces = ((0, TB.l)(this, NI), (0, TB.l)(this, gI, !0)), this._blockDirtyMechanism = ((0, TB.l)(this, qI), !1), this.sideOrientation = (0, TB.l)(this, yI, null), this.onCompiled = ((0, TB.l)(this, UI), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.oR = new GB.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, TB.l)(this, WI, [2]), this._needDepthPrePass = ((0, TB.l)(this, dI), (0, TB.l)(this, CI, !1)), this.disableDepthWrite = ((0, TB.l)(this, QI), (0, TB.l)(this, sI, !1)), this.disableColorWrite = ((0, TB.l)(this, wI), (0, TB.l)(this, OI, !1)), this.forceDepthWrite = ((0, TB.l)(this, YI), (0, TB.l)(this, iI, !1)), this.depthFunction = ((0, TB.l)(this, pI), (0, TB.l)(this, aI, 0)), this.separateCullingPass = ((0, TB.l)(this, HI), (0, TB.l)(this, MI, !1)), this._fogEnabled = ((0, TB.l)(this, jI), (0, TB.l)(this, PI, !0)), this.pointSize = ((0, TB.l)(this, RI), (0, TB.l)(this, rI, 1)), this.zOffset = ((0, TB.l)(this, mI), (0, TB.l)(this, XI, 0)), this.zOffsetUnits = ((0, TB.l)(this, LI), (0, TB.l)(this, eI, 0)), this.clipPlane = (0, TB.l)(this, uI), this.stencil = new NB, this._isVertexOutputInvariant = (0, TB.l)(this, fI, BB.ForceVertexOutputInvariant), this._materialContext = (0, TB.l)(this, lI), this._useUBO = !1, this._fillMode = BB.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = IB;
          const nB = ZB || vB.e.LastCreatedScene;
          nB && (this._scene = nB, this._dirtyCallbacks = {}, this._forceGLSL = kB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = IB || oB.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.PN().createMaterialContext(), this._drawWrapper = new zB.c(this._scene.PN(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new cB.d(this._scene.PN(), void 0, void 0, IB), this._useUBO = this.JR().PN().supportsUniformBuffers, this._createUniformBuffer(), JB || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), BB.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const BB = this.JR().PN();
          this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new cB.d(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new cB.d(this._scene.PN(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(BB) {
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
        isReady(BB, IB) {
          return !0
        }
        isReadyForSubMesh(BB, IB, ZB) {
          const TB = IB.materialDefines;
          return !!TB && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = TB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        JR() {
          return this._scene
        }
        _getEffectiveOrientation(BB) {
          return null !== this.sideOrientation ? this.sideOrientation : BB.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(BB) {
          this._transparencyMode = BB
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === BB.MATERIAL_ALPHABLEND || this._transparencyMode === BB.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === BB.MATERIAL_ALPHATEST || this._transparencyMode === BB.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === BB.MATERIAL_OPAQUE || this._transparencyMode === BB.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(BB) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : BB.visibility < 1 || !this._disableAlphaBlending && (BB.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(BB) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(BB) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ZB = this.JR().meshes;
          for (const BB of ZB)
            if (BB.EW)
              for (const ZB of BB.EW)
                if (ZB.LN() === this)
                  for (const BB of ZB._drawWrappers) BB && this._materialContext === BB.materialContext && (BB._wasPreviouslyReady = !1, BB._wasPreviouslyUsingInstances = null, BB._forceRebindOnNextCall = IB);
          IB && this.GZB(BB.AllDirtyFlag)
        }
        _preBind(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const TB = this._scene.PN(),
            JB = (null == ZB ? this.sideOrientation : ZB) === BB.ClockWiseSideOrientation,
            oB = IB || this._getDrawWrapper();
          return (0, qB.b)(oB) && oB.materialContext && (oB.materialContext.useVertexPulling = this.useVertexPulling), TB.enableEffect(oB), TB.setState(this.backFaceCulling, this.zOffset, !1, JB, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), JB
        }
        bind(BB, IB) {}
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          this._eventInfo.ubo = BB, this._callbackPluginEventGeneric(8, this._eventInfo), BB.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(BB, IB, ZB) {
          const TB = ZB._drawWrapper;
          this._eventInfo.subMesh = ZB, this._callbackPluginEventBindForSubMesh(this._eventInfo), TB._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(BB) {}
        bindView(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.JR().getViewMatrix())
        }
        bindViewProjection(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.JR().getTransformMatrix()), BB.setMatrix("projection", this.JR().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.JR().getInverseProjectionMatrix()))
        }
        bindEyePosition(BB, IB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(BB, IB)
        }
        _afterBind(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && IB && (this._needToBindSceneUbo = !1, (0, gB.v)(IB, this.JR().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && BB && this._onBindObservable.notifyObservers(BB), this.disableDepthWrite) {
            const BB = this._scene.PN();
            this._cachedDepthWriteState = BB.getDepthWrite(), BB.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const BB = this._scene.PN();
            this._cachedColorWriteState = BB.getColorWrite(), BB.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const BB = this._scene.PN();
            this._cachedDepthFunctionState = BB.getDepthFunction() || 0, BB.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.PN().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.PN().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.PN().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(BB) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = BB, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(BB) {
          return null
        }
        _clonePlugins(IB, ZB) {
          const TB = {};
          if (this._serializePlugins(TB), BB._ParsePlugins(TB, IB, this._scene, ZB), this.pluginManager)
            for (const BB of this.pluginManager._plugins) {
              const ZB = IB.pluginManager.getPlugin(BB.name);
              ZB && BB.copyTo(ZB)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const BB = [];
            for (const IB in this.meshMap) {
              const ZB = this.meshMap[IB];
              ZB && BB.push(ZB)
            }
            return BB
          }
          return this._scene.meshes.filter((BB => BB.material === this))
        }
        forceCompilation(BB, IB, ZB, TB) {
          const JB = {
              clipPlane: !1,
              useInstances: !1,
              ...ZB
            },
            oB = this.JR(),
            GB = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const vB = () => {
            if (!this._scene || !this._scene.PN()) return;
            const ZB = oB.clipPlane;
            if (JB.clipPlane && (oB.clipPlane = new hB.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let ZB = !0,
                oB = null;
              if (BB.EW) {
                const IB = new kB.e(0, 0, 0, 0, 0, BB, void 0, !1, !1);
                IB.materialDefines && (IB.materialDefines._renderId = -1), this.isReadyForSubMesh(BB, IB, JB.useInstances) || (IB.effect && IB.effect.getCompilationError() && IB.effect.allFallbacksProcessed() ? oB = IB.effect.getCompilationError() : (ZB = !1, setTimeout(vB, 16)))
              }
              ZB && (this.allowShaderHotSwapping = GB, oB && TB && TB(oB), IB && IB(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = GB, IB && IB(this)) : setTimeout(vB, 16);
            JB.clipPlane && (oB.clipPlane = ZB)
          };
          vB()
        }
        async forceCompilationAsync(BB, IB) {
          return await new Promise(((ZB, TB) => {
            this.forceCompilation(BB, (() => {
              ZB()
            }), IB, (BB => {
              TB(BB)
            }))
          }))
        }
        GZB(IB) {
          this.JR().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, IB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), IB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._TextureDirtyCallBack), IB & BB.LightDirtyFlag && BB._DirtyCallbackArray.push(BB._LightsDirtyCallBack), IB & BB.FresnelDirtyFlag && BB._DirtyCallbackArray.push(BB._FresnelDirtyCallBack), IB & BB.AttributesDirtyFlag && BB._DirtyCallbackArray.push(BB._AttributeDirtyCallBack), IB & BB.MiscDirtyFlag && BB._DirtyCallbackArray.push(BB._MiscDirtyCallBack), IB & BB.PrePassDirtyFlag && BB._DirtyCallbackArray.push(BB._PrePassDirtyCallBack), BB._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(BB._RunDirtyCallBacks), this.JR().resetCachedMaterial())
        }
        resetDrawCache() {
          const BB = this.JR().meshes;
          for (const IB of BB)
            if (IB.EW)
              for (const BB of IB.EW) BB.LN() === this && BB.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(BB) {
          const IB = this.JR();
          if (IB.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ZB = IB.meshes;
          for (const TB of ZB)
            if (TB.EW)
              for (const ZB of TB.EW) {
                if ((ZB.LN() || (IB._hasDefaultMaterial ? IB.defaultMaterial : null)) === this)
                  for (const IB of ZB._drawWrappers) IB && IB.defines && IB.defines.markAllAsDirty && this._materialContext === IB.materialContext && BB(IB.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.JR().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const BB = this.JR().enablePrePassRenderer();
          BB && BB.GZB()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(BB._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(BB._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(BB._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(BB._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(BB._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(BB._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(BB._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(BB._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(BB._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(BB._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const BB = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.oR.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(BB)
            }))
          }
        }
        setPrePassRenderer(BB) {
          return !1
        }
        dispose(BB, IB, ZB) {
          const TB = this.JR();
          if (TB.stopAnimation(this), TB.freeProcessedMaterials(), TB.removeMaterial(this), this._eventInfo.forceDisposeTextures = IB, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const BB = this._parentContainer.materials.indexOf(this);
            BB > -1 && this._parentContainer.materials.splice(BB, 1), this._parentContainer = null
          }
          if (!0 !== ZB)
            if (this.meshMap)
              for (const JB in this.meshMap) {
                const BB = this.meshMap[JB];
                this._disposeMeshResources(BB)
              } else {
                const BB = TB.meshes;
                for (const IB of BB) this._disposeMeshResources(IB)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.oR.notifyObservers(this), this.oR.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(BB) {
          if (!BB) return;
          const IB = BB.geometry,
            ZB = BB._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (BB.EW && ZB)
              for (const TB of BB.EW) {
                const BB = TB._drawWrappers;
                for (let JB = 0; JB < BB.length; JB++) {
                  const oB = BB[JB]?.effect;
                  if (!oB) continue;
                  ZB[JB] === this && (IB?._releaseVertexArrayObject(oB), TB._removeDrawWrapper(JB, !0, !0))
                }
              }
          } else IB?._releaseVertexArrayObject(this._drawWrapper.effect);
          BB.material !== this || BB.wJB || (BB.material = null)
        }
        serialize() {
          const BB = FB.b.Serialize(this);
          return BB.stencil = this.stencil.serialize(), BB.uniqueId = this.uniqueId, this._serializePlugins(BB), BB
        }
        _serializePlugins(BB) {
          if (BB.plugins = {}, this.pluginManager)
            for (const IB of this.pluginManager._plugins) IB.doNotSerialize || (BB.plugins[IB.getClassName()] = IB.serialize())
        }
        static ParseAlphaMode(BB, IB) {
          void 0 !== BB._alphaMode ? IB._alphaMode = Array.isArray(BB._alphaMode) ? [...BB._alphaMode] : [BB._alphaMode] : void 0 !== BB.alphaMode ? IB._alphaMode = Array.isArray(BB.alphaMode) ? [...BB.alphaMode] : [BB.alphaMode] : IB._alphaMode = [2]
        }
        static Parse(IB, ZB, TB) {
          if (IB.customType) {
            if ("BABYLON.PBRMaterial" === IB.customType && IB.overloadedAlbedo && (IB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return nB.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else IB.customType = "BABYLON.StandardMaterial";
          const JB = oB.j.Instantiate(IB.customType).Parse(IB, ZB, TB);
          return JB._loadedUniqueId = IB.uniqueId, BB.ParseAlphaMode(IB, JB), JB
        }
        static _ParsePlugins(BB, IB, ZB, TB) {
          if (BB.plugins)
            for (const JB in BB.plugins) {
              const GB = BB.plugins[JB];
              let vB = IB.pluginManager?.getPlugin(GB.name);
              if (!vB) {
                const BB = oB.j.Instantiate("BABYLON." + JB);
                BB && (vB = new BB(IB))
              }
              vB?.parse(GB, ZB, TB)
            }
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], yB = [(0, JB.C)()], UB = [(0, JB.C)()], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)("alpha")], sB = [(0, JB.C)("backFaceCulling")], wB = [(0, JB.C)("textureRepetitionMode")], OB = [(0, JB.C)("textureRepetitionHexTilingParams")], YB = [(0, JB.C)("cullBackFaces")], iB = [(0, JB.C)()], pB = [(0, JB.C)()], aB = [(0, JB.C)()], HB = [(0, JB.C)()], MB = [(0, JB.C)()], jB = [(0, JB.C)()], PB = [(0, JB.C)()], RB = [(0, JB.C)()], rB = [(0, JB.C)("fogEnabled")], mB = [(0, JB.C)()], XB = [(0, JB.C)()], LB = [(0, JB.C)()], eB = [(0, JB.C)()], uB = [(0, JB.C)()], fB = [(0, JB.C)()], lB = [(0, JB.C)()], AB = [(0, JB.C)()], (0, TB.j)(BB, null, eB, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointsCloud" in BB,
            get: BB => BB.pointsCloud
          },
          metadata: oB
        }, null, tB), (0, TB.j)(BB, null, uB, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fillMode" in BB,
            get: BB => BB.fillMode
          },
          metadata: oB
        }, null, tB), (0, TB.j)(BB, null, fB, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLogarithmicDepth" in BB,
            get: BB => BB.useLogarithmicDepth
          },
          metadata: oB
        }, null, tB), (0, TB.j)(BB, null, AB, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "transparencyMode" in BB,
            get: BB => BB.transparencyMode
          },
          metadata: oB
        }, null, tB), (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, IB) => {
              BB.id = IB
            }
          },
          metadata: oB
        }, bB, xB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, IB) => {
              BB.uniqueId = IB
            }
          },
          metadata: oB
        }, EB, DB), (0, TB.j)(null, null, yB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, IB) => {
              BB.name = IB
            }
          },
          metadata: oB
        }, KB, VB), (0, TB.j)(null, null, UB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, IB) => {
              BB.metadata = IB
            }
          },
          metadata: oB
        }, SB, BI), (0, TB.j)(null, null, WB, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnEveryCall" in BB,
            get: BB => BB.checkReadyOnEveryCall,
            set: (BB, IB) => {
              BB.checkReadyOnEveryCall = IB
            }
          },
          metadata: oB
        }, II, ZI), (0, TB.j)(null, null, dB, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnlyOnce" in BB,
            get: BB => BB.checkReadyOnlyOnce,
            set: (BB, IB) => {
              BB.checkReadyOnlyOnce = IB
            }
          },
          metadata: oB
        }, TI, JI), (0, TB.j)(null, null, CB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, IB) => {
              BB.state = IB
            }
          },
          metadata: oB
        }, oI, GI), (0, TB.j)(null, null, QB, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alpha" in BB,
            get: BB => BB._alpha,
            set: (BB, IB) => {
              BB._alpha = IB
            }
          },
          metadata: oB
        }, vI, kI), (0, TB.j)(null, null, sB, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_backFaceCulling" in BB,
            get: BB => BB._backFaceCulling,
            set: (BB, IB) => {
              BB._backFaceCulling = IB
            }
          },
          metadata: oB
        }, cI, nI), (0, TB.j)(null, null, wB, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_textureRepetitionMode" in BB,
            get: BB => BB._textureRepetitionMode,
            set: (BB, IB) => {
              BB._textureRepetitionMode = IB
            }
          },
          metadata: oB
        }, hI, zI), (0, TB.j)(null, null, OB, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRepetitionHexTilingParams" in BB,
            get: BB => BB.textureRepetitionHexTilingParams,
            set: (BB, IB) => {
              BB.textureRepetitionHexTilingParams = IB
            }
          },
          metadata: oB
        }, FI, NI), (0, TB.j)(null, null, YB, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: BB => "_cullBackFaces" in BB,
            get: BB => BB._cullBackFaces,
            set: (BB, IB) => {
              BB._cullBackFaces = IB
            }
          },
          metadata: oB
        }, gI, qI), (0, TB.j)(null, null, iB, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: BB => "sideOrientation" in BB,
            get: BB => BB.sideOrientation,
            set: (BB, IB) => {
              BB.sideOrientation = IB
            }
          },
          metadata: oB
        }, yI, UI), (0, TB.j)(null, null, pB, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alphaMode" in BB,
            get: BB => BB._alphaMode,
            set: (BB, IB) => {
              BB._alphaMode = IB
            }
          },
          metadata: oB
        }, WI, dI), (0, TB.j)(null, null, aB, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: BB => "_needDepthPrePass" in BB,
            get: BB => BB._needDepthPrePass,
            set: (BB, IB) => {
              BB._needDepthPrePass = IB
            }
          },
          metadata: oB
        }, CI, QI), (0, TB.j)(null, null, HB, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableDepthWrite" in BB,
            get: BB => BB.disableDepthWrite,
            set: (BB, IB) => {
              BB.disableDepthWrite = IB
            }
          },
          metadata: oB
        }, sI, wI), (0, TB.j)(null, null, MB, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableColorWrite" in BB,
            get: BB => BB.disableColorWrite,
            set: (BB, IB) => {
              BB.disableColorWrite = IB
            }
          },
          metadata: oB
        }, OI, YI), (0, TB.j)(null, null, jB, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceDepthWrite" in BB,
            get: BB => BB.forceDepthWrite,
            set: (BB, IB) => {
              BB.forceDepthWrite = IB
            }
          },
          metadata: oB
        }, iI, pI), (0, TB.j)(null, null, PB, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: BB => "depthFunction" in BB,
            get: BB => BB.depthFunction,
            set: (BB, IB) => {
              BB.depthFunction = IB
            }
          },
          metadata: oB
        }, aI, HI), (0, TB.j)(null, null, RB, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "separateCullingPass" in BB,
            get: BB => BB.separateCullingPass,
            set: (BB, IB) => {
              BB.separateCullingPass = IB
            }
          },
          metadata: oB
        }, MI, jI), (0, TB.j)(null, null, rB, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_fogEnabled" in BB,
            get: BB => BB._fogEnabled,
            set: (BB, IB) => {
              BB._fogEnabled = IB
            }
          },
          metadata: oB
        }, PI, RI), (0, TB.j)(null, null, mB, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointSize" in BB,
            get: BB => BB.pointSize,
            set: (BB, IB) => {
              BB.pointSize = IB
            }
          },
          metadata: oB
        }, rI, mI), (0, TB.j)(null, null, XB, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffset" in BB,
            get: BB => BB.zOffset,
            set: (BB, IB) => {
              BB.zOffset = IB
            }
          },
          metadata: oB
        }, XI, LI), (0, TB.j)(null, null, LB, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffsetUnits" in BB,
            get: BB => BB.zOffsetUnits,
            set: (BB, IB) => {
              BB.zOffsetUnits = IB
            }
          },
          metadata: oB
        }, eI, uI), (0, TB.j)(null, null, lB, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: BB => "_isVertexOutputInvariant" in BB,
            get: BB => BB._isVertexOutputInvariant,
            set: (BB, IB) => {
              BB._isVertexOutputInvariant = IB
            }
          },
          metadata: oB
        }, fI, lI), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB.CounterClockWiseSideOrientation = 1, BB.ImageProcessingDirtyFlag = 64, BB.TextureDirtyFlag = 1, BB.LightDirtyFlag = 2, BB.FresnelDirtyFlag = 4, BB.AttributesDirtyFlag = 8, BB.MiscDirtyFlag = 16, BB.PrePassDirtyFlag = 32, BB.AllDirtyFlag = 127, BB.MATERIAL_OPAQUE = 0, BB.MATERIAL_ALPHATEST = 1, BB.MATERIAL_ALPHABLEND = 2, BB.MATERIAL_ALPHATESTANDBLEND = 3, BB.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, BB.MATERIAL_NORMALBLENDMETHOD_RNM = 1, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.OnEventObservable = new GB.b, BB.ForceVertexOutputInvariant = !1, BB._AllDirtyCallBack = BB => BB.markAllAsDirty(), BB._ImageProcessingDirtyCallBack = BB => BB.markAsImageProcessingDirty(), BB._TextureDirtyCallBack = BB => BB.markAsTexturesDirty(), BB._FresnelDirtyCallBack = BB => BB.markAsFresnelDirty(), BB._MiscDirtyCallBack = BB => BB.markAsMiscDirty(), BB._PrePassDirtyCallBack = BB => BB.markAsPrePassDirty(), BB._LightsDirtyCallBack = BB => BB.markAsLightDirty(), BB._AttributeDirtyCallBack = BB => BB.markAsAttributesDirty(), BB._FresnelAndMiscDirtyCallBack = IB => {
        BB._FresnelDirtyCallBack(IB), BB._MiscDirtyCallBack(IB)
      }, BB._TextureAndMiscDirtyCallBack = IB => {
        BB._TextureDirtyCallBack(IB), BB._MiscDirtyCallBack(IB)
      }, BB._DirtyCallbackArray = [], BB._RunDirtyCallBacks = IB => {
        for (const ZB of BB._DirtyCallbackArray) ZB(IB)
      }, BB
    })();
    Object.getOwnPropertyDescriptor(UB.prototype, "pluginManager") || Object.defineProperty(UB.prototype, "pluginManager", (0, yB.g)("Material", "pluginManager"))
  },
  40383: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(39951);
    class JB {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(BB) {
        this._DiffuseTextureEnabled !== BB && (this._DiffuseTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(BB) {
        this._BaseWeightTextureEnabled !== BB && (this._BaseWeightTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(BB) {
        this._BaseDiffuseRoughnessTextureEnabled !== BB && (this._BaseDiffuseRoughnessTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(BB) {
        this._DetailTextureEnabled !== BB && (this._DetailTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(BB) {
        this._DecalMapEnabled !== BB && (this._DecalMapEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(BB) {
        this._AmbientTextureEnabled !== BB && (this._AmbientTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(BB) {
        this._OpacityTextureEnabled !== BB && (this._OpacityTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(BB) {
        this._ReflectionTextureEnabled !== BB && (this._ReflectionTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(BB) {
        this._EmissiveTextureEnabled !== BB && (this._EmissiveTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(BB) {
        this._SpecularTextureEnabled !== BB && (this._SpecularTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(BB) {
        this._BumpTextureEnabled !== BB && (this._BumpTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(BB) {
        this._LightmapTextureEnabled !== BB && (this._LightmapTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(BB) {
        this._RefractionTextureEnabled !== BB && (this._RefractionTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(BB) {
        this._ColorGradingTextureEnabled !== BB && (this._ColorGradingTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(BB) {
        this._FresnelEnabled !== BB && (this._FresnelEnabled = BB, TB.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(BB) {
        this._ClearCoatTextureEnabled !== BB && (this._ClearCoatTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(BB) {
        this._ClearCoatBumpTextureEnabled !== BB && (this._ClearCoatBumpTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(BB) {
        this._ClearCoatTintTextureEnabled !== BB && (this._ClearCoatTintTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(BB) {
        this._SheenTextureEnabled !== BB && (this._SheenTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(BB) {
        this._AnisotropicTextureEnabled !== BB && (this._AnisotropicTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(BB) {
        this._ThicknessTextureEnabled !== BB && (this._ThicknessTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(BB) {
        this._RefractionIntensityTextureEnabled !== BB && (this._RefractionIntensityTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(BB) {
        this._TranslucencyIntensityTextureEnabled !== BB && (this._TranslucencyIntensityTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(BB) {
        this._TranslucencyColorTextureEnabled !== BB && (this._TranslucencyColorTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(BB) {
        this._IridescenceTextureEnabled !== BB && (this._IridescenceTextureEnabled = BB, TB.c.MarkAllMaterialsAsDirty(1))
      }
    }
    JB._DiffuseTextureEnabled = !0, JB._BaseWeightTextureEnabled = !0, JB._BaseDiffuseRoughnessTextureEnabled = !0, JB._DetailTextureEnabled = !0, JB._DecalMapEnabled = !0, JB._AmbientTextureEnabled = !0, JB._OpacityTextureEnabled = !0, JB._ReflectionTextureEnabled = !0, JB._EmissiveTextureEnabled = !0, JB._SpecularTextureEnabled = !0, JB._BumpTextureEnabled = !0, JB._LightmapTextureEnabled = !0, JB._RefractionTextureEnabled = !0, JB._ColorGradingTextureEnabled = !0, JB._FresnelEnabled = !0, JB._ClearCoatTextureEnabled = !0, JB._ClearCoatBumpTextureEnabled = !0, JB._ClearCoatTintTextureEnabled = !0, JB._SheenTextureEnabled = !0, JB._AnisotropicTextureEnabled = !0, JB._ThicknessTextureEnabled = !0, JB._RefractionIntensityTextureEnabled = !0, JB._TranslucencyIntensityTextureEnabled = !0, JB._TranslucencyColorTextureEnabled = !0, JB._IridescenceTextureEnabled = !0
  },
  40371: (BB, IB, ZB) => {
    ZB.d(IB, {
      C: () => aB,
      F: () => CB,
      I: () => iB,
      L: () => pB,
      M: () => FB,
      Q: () => zB,
      R: () => uB,
      V: () => rB,
      W: () => PB,
      Y: () => jB,
      ab: () => WB,
      c: () => MB,
      e: () => QB,
      eb: () => HB,
      fb: () => fB,
      gb: () => lB,
      h: () => hB,
      j: () => yB,
      kb: () => AB,
      n: () => UB,
      ob: () => EB,
      p: () => YB,
      rb: () => bB,
      s: () => kB,
      t: () => gB,
      v: () => qB,
      vb: () => xB,
      wb: () => NB,
      y: () => dB
    });
    var TB = ZB(38718),
      JB = ZB(37147),
      oB = ZB(40245),
      GB = ZB(40380),
      vB = ZB(40383);

    function kB(BB, IB, ZB) {
      if (!BB || BB.LOGARITHMICDEPTH || BB.indexOf && BB.indexOf("LOGARITHMICDEPTH") >= 0) {
        const BB = ZB.activeCamera;
        1 === BB.mode && TB.d.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), IB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
      }
    }
    const cB = {
        r: 0,
        g: 0,
        b: 0
      },
      nB = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function hB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ZB && BB.fogEnabled && (!IB || IB.applyFog) && 0 !== BB.fogMode && (ZB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), TB ? (BB.fogColor.toLinearSpaceToRef(cB, BB.PN().useExactSrgbConversions), ZB.setColor3("vFogColor", cB)) : ZB.setColor3("vFogColor", BB.fogColor))
    }

    function zB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
      const hB = BB.numMaxInfluencers || BB.numInfluencers;
      return hB <= 0 ? 0 : (IB.push("#define MORPHTARGETS"), BB.hasPositions && IB.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), BB.hasNormals && IB.push("#define MORPHTARGETTEXTURE_HASNORMALS"), BB.hasTangents && IB.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), BB.hasUVs && IB.push("#define MORPHTARGETTEXTURE_HASUVS"), BB.hasUV2s && IB.push("#define MORPHTARGETTEXTURE_HASUV2S"), BB.hasColors && IB.push("#define MORPHTARGETTEXTURE_HASCOLORS"), BB.supportsPositions && JB && IB.push("#define MORPHTARGETS_POSITION"), BB.supportsNormals && oB && IB.push("#define MORPHTARGETS_NORMAL"), BB.supportsTangents && GB && IB.push("#define MORPHTARGETS_TANGENT"), BB.supportsUVs && vB && IB.push("#define MORPHTARGETS_UV"), BB.supportsUV2s && kB && IB.push("#define MORPHTARGETS_UV2"), BB.supportsColors && cB && IB.push("#define MORPHTARGETS_COLOR"), IB.push("#define NUM_MORPH_INFLUENCERS " + hB), BB.isUsingTextureForTargets && IB.push("#define MORPHTARGETS_TEXTURE"), nB.NUM_MORPH_INFLUENCERS = hB, nB.NORMAL = oB, nB.TANGENT = GB, nB.UV = vB, nB.UV2 = kB, nB.COLOR = cB, FB(ZB, TB, nB, JB), hB)
    }

    function FB(BB, IB, ZB) {
      let oB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const GB = ZB.NUM_MORPH_INFLUENCERS;
      if (GB > 0 && JB.e.LastCreatedEngine) {
        const vB = JB.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          kB = IB.morphTargetManager;
        if (kB?.isUsingTextureForTargets) return;
        const cB = kB && kB.supportsPositions && oB,
          nB = kB && kB.supportsNormals && ZB.NORMAL,
          hB = kB && kB.supportsTangents && ZB.TANGENT,
          zB = kB && kB.supportsUVs && ZB.UV1,
          FB = kB && kB.supportsUV2s && ZB.UV2,
          NB = kB && kB.supportsColors && ZB.VERTEXCOLOR;
        for (let ZB = 0; ZB < GB; ZB++) cB && BB.push("position" + ZB), nB && BB.push("normal" + ZB), hB && BB.push("tangent" + ZB), zB && BB.push("uv_" + ZB), FB && BB.push("uv2_" + ZB), NB && BB.push("color" + ZB), BB.length > vB && TB.d.Error("Cannot add more vertex attributes for mesh " + IB.name)
      }
    }

    function NB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      BB.push("world0"), BB.push("world1"), BB.push("world2"), BB.push("world3"), IB && (BB.push("previousWorld0"), BB.push("previousWorld1"), BB.push("previousWorld2"), BB.push("previousWorld3"))
    }

    function gB(BB, IB) {
      const ZB = BB.morphTargetManager;
      BB && ZB && IB.setFloatArray("morphTargetInfluences", ZB.influences)
    }

    function qB(BB, IB) {
      IB.bindToEffect(BB, "Scene")
    }

    function yB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        nB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        hB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        zB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (BB.texturesEnabled && JB && vB.e.ReflectionTextureEnabled) {
        if (ZB.T6("reflectionMatrix", JB.getReflectionTextureMatrix()), ZB.updateFloat2("vReflectionInfos", JB.level * BB.iblIntensity, zB), kB && JB.boundingBoxSize) {
          const BB = JB;
          ZB.updateVector3("vReflectionPosition", BB.boundingBoxPosition), ZB.updateVector3("vReflectionSize", BB.boundingBoxSize)
        }
        if (oB) {
          const BB = JB.getSize().width;
          ZB.updateFloat2("vReflectionFilteringInfo", BB, Math.log2(BB))
        }
        if (nB && !IB.USEIRRADIANCEMAP) {
          const BB = JB.sphericalPolynomial;
          if (IB.USESPHERICALFROMREFLECTIONMAP && BB)
            if (IB.SPHERICAL_HARMONICS) {
              const IB = BB.preScaledHarmonics;
              ZB.updateVector3("vSphericalL00", IB.l00), ZB.updateVector3("vSphericalL1_1", IB.l1_1), ZB.updateVector3("vSphericalL10", IB.l10), ZB.updateVector3("vSphericalL11", IB.l11), ZB.updateVector3("vSphericalL2_2", IB.l2_2), ZB.updateVector3("vSphericalL2_1", IB.l2_1), ZB.updateVector3("vSphericalL20", IB.l20), ZB.updateVector3("vSphericalL21", IB.l21), ZB.updateVector3("vSphericalL22", IB.l22)
            } else ZB.updateFloat3("vSphericalX", BB.x.x, BB.x.y, BB.x.z), ZB.updateFloat3("vSphericalY", BB.y.x, BB.y.y, BB.y.z), ZB.updateFloat3("vSphericalZ", BB.z.x, BB.z.y, BB.z.z), ZB.updateFloat3("vSphericalXX_ZZ", BB.xx.x - BB.zz.x, BB.xx.y - BB.zz.y, BB.xx.z - BB.zz.z), ZB.updateFloat3("vSphericalYY_ZZ", BB.yy.x - BB.zz.x, BB.yy.y - BB.zz.y, BB.yy.z - BB.zz.z), ZB.updateFloat3("vSphericalZZ", BB.zz.x, BB.zz.y, BB.zz.z), ZB.updateFloat3("vSphericalXY", BB.xy.x, BB.xy.y, BB.xy.z), ZB.updateFloat3("vSphericalYZ", BB.yz.x, BB.yz.y, BB.yz.z), ZB.updateFloat3("vSphericalZX", BB.zx.x, BB.zx.y, BB.zx.z)
        } else cB && IB.USEIRRADIANCEMAP && IB.USE_IRRADIANCE_DOMINANT_DIRECTION && JB.irradianceTexture && ZB.updateVector3("vReflectionDominantDirection", JB.irradianceTexture._dominantDirection);
        GB && ZB.updateFloat3("vReflectionMicrosurfaceInfos", JB.getSize().width, JB.lodGenerationScale, JB.lodGenerationOffset)
      }
      hB && ZB.updateColor3("vReflectionColor", TB)
    }

    function UB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (TB && vB.e.ReflectionTextureEnabled) {
        IB.LODBASEDMICROSFURACE ? ZB.setTexture("reflectionSampler", TB) : (ZB.setTexture("reflectionSampler", TB._lodTextureMid || TB), ZB.setTexture("reflectionSamplerLow", TB._lodTextureLow || TB), ZB.setTexture("reflectionSamplerHigh", TB._lodTextureHigh || TB)), IB.USEIRRADIANCEMAP && ZB.setTexture("irradianceSampler", TB.irradianceTexture);
        const oB = BB.iblCdfGenerator;
        JB && oB && ZB.setTexture("icdfSampler", oB.getIcdfTexture())
      }
    }

    function WB(BB, IB, ZB) {
      IB._needUVs = !0, IB[ZB] = !0, BB.optimizeUVAllocation && BB.getTextureMatrix().isIdentityAs3x2() ? (IB[ZB + "DIRECTUV"] = BB.coordinatesIndex + 1, IB["MAINUV" + (BB.coordinatesIndex + 1)] = !0) : IB[ZB + "DIRECTUV"] = 0
    }

    function dB(BB, IB, ZB) {
      const TB = BB.getTextureMatrix();
      IB.T6(ZB + "Matrix", TB)
    }

    function CB(BB, IB, ZB) {
      ZB.BAKED_VERTEX_ANIMATION_TEXTURE && ZB.INSTANCES && BB.push("bakedVertexAnimationSettingsInstanced")
    }

    function QB(BB, IB, ZB) {
      var TB;
      if (IB && BB && (BB.computeBonesUsingShaders && IB._bonesComputationForcedToCPU && (BB.computeBonesUsingShaders = !1), BB.useBones && BB.computeBonesUsingShaders && BB.skeleton)) {
        const JB = BB.skeleton;
        if (JB.isUsingTextureForMatrices && IB.getUniformIndex("boneTextureInfo") > -1) {
          const ZB = JB.getTransformMatrixTexture(BB);
          IB.setTexture("boneSampler", ZB), IB.setFloat2("boneTextureInfo", JB._textureWidth, JB._textureHeight)
        } else {
          const oB = JB.getTransformMatrices(BB);
          oB && (IB.setMatrices("mBones", oB), ZB && BB.JR().prePassRenderer && BB.JR().prePassRenderer.getIndex(2) && (ZB.previousBones[BB.uniqueId] || (ZB.previousBones[BB.uniqueId] = oB.slice()), IB.setMatrices("mPreviousBones", ZB.previousBones[BB.uniqueId]), TB = oB, ZB.previousBones[BB.uniqueId].set(TB)))
        }
      }
    }

    function sB(BB, IB, ZB, TB, JB) {
      let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      BB._bindLight(IB, ZB, TB, JB, oB)
    }
    const wB = 4,
      OB = new WeakMap;

    function YB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const oB = Math.min(IB.lightSources.length, JB);
      for (let GB = 0; GB < oB; GB++) {
        sB(IB.lightSources[GB], GB, BB, ZB, "boolean" === typeof TB ? TB : TB.SPECULARTERM, IB.receiveShadows)
      }
    }

    function iB(BB, IB, ZB, TB) {
      ZB.NUM_BONE_INFLUENCERS > 0 && (TB.addCPUSkinningFallback(0, IB), BB.push("matricesIndices"), BB.push("matricesWeights"), ZB.NUM_BONE_INFLUENCERS > 4 && (BB.push("matricesIndicesExtra"), BB.push("matricesWeightsExtra")))
    }

    function pB(BB, IB) {
      (IB.INSTANCES || IB.THIN_INSTANCES) && NB(BB, !!IB.PREPASS_VELOCITY), IB.INSTANCESCOLOR && BB.push("instanceColor")
    }

    function aB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        JB = 0;
      for (let oB = 0; oB < ZB && BB["LIGHT" + oB]; oB++) oB > 0 && (JB = TB + oB, IB.addFallback(JB, "LIGHT" + oB)), BB.SHADOWS || (BB["SHADOW" + oB] && IB.addFallback(TB, "SHADOW" + oB), BB["SHADOWPCF" + oB] && IB.addFallback(TB, "SHADOWPCF" + oB), BB["SHADOWPCSS" + oB] && IB.addFallback(TB, "SHADOWPCSS" + oB), BB["SHADOWPOISSON" + oB] && IB.addFallback(TB, "SHADOWPOISSON" + oB), BB["SHADOWESM" + oB] && IB.addFallback(TB, "SHADOWESM" + oB), BB["SHADOWCLOSEESM" + oB] && IB.addFallback(TB, "SHADOWCLOSEESM" + oB));
      return JB
    }

    function HB(BB, IB, ZB, TB, JB, oB, GB) {
      let vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cB = arguments.length > 9 ? arguments[9] : void 0,
        nB = arguments.length > 10 ? arguments[10] : void 0;
      if (GB._areMiscDirty) {
        GB.LOGARITHMICDEPTH = ZB, GB.POINTSIZE = TB, GB.FOG = JB && function(BB, IB) {
          return IB.fogEnabled && BB.applyFog && 0 !== IB.fogMode
        }(BB, IB), GB.NONUNIFORMSCALING = BB.nonUniformScaling, GB.ALPHATEST = oB, GB.DECAL_AFTER_DETAIL = vB, GB.USE_VERTEX_PULLING = kB, GB.RIGHT_HANDED = IB.useRightHandedSystem;
        const hB = kB ? cB?.geometry?.getIndexBuffer() : null,
          zB = !!cB && cB.isUnIndexed;
        GB.VERTEX_PULLING_USE_INDEX_BUFFER = !!hB && !zB, GB.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!hB || zB) && hB.is32Bits, GB.VERTEXOUTPUT_INVARIANT = !!nB
      }
    }

    function MB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!BB.lightsEnabled || TB) return !0;
      const JB = IB.lightSources,
        oB = Math.min(JB.length, ZB);
      for (let GB = 0; GB < oB; GB++)
        if (!JB[GB].areLightTexturesReady()) return !1;
      return !0
    }

    function jB(BB, IB, ZB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ZB._areLightsDirty) return ZB._needNormals;
      const vB = oB;
      oB = function(BB, IB) {
        const ZB = BB.PN().getCaps().maxUniformBuffersPerShaderStage;
        if (null == ZB) return IB;
        const TB = Math.max(ZB - wB, 1);
        return Math.min(IB, TB)
      }(BB, oB);
      let kB = 0;
      const cB = {
        needNormals: ZB._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (BB.lightsEnabled && !GB) {
        IB.lightSources.length > oB && oB < vB && function(BB, IB, ZB, JB) {
          let oB = OB.get(BB);
          oB || (oB = new Set, OB.set(BB, oB)), oB.has(JB) || (oB.add(JB), TB.d.Warn(`maxSimultaneousLights is ${IB} but this engine supports at most ${ZB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${JB} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${JB+wB} uniform buffers, over the device limit of ${BB.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${ZB}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${ZB} or less to silence this warning.`))
        }(BB.PN(), vB, oB, Math.min(IB.lightSources.length, vB));
        for (const TB of IB.lightSources)
          if (RB(BB, IB, TB, kB, ZB, JB, cB), kB++, kB === oB) break
      }
      ZB.SPECULARTERM = cB.specularEnabled, ZB.SHADOWS = cB.shadowEnabled;
      const nB = Math.max(oB, ZB.MAXLIGHTCOUNT || 0);
      for (let TB = kB; TB < nB; TB++) void 0 !== ZB["LIGHT" + TB] && (ZB["LIGHT" + TB] = !1, ZB["HEMILIGHT" + TB] = !1, ZB["POINTLIGHT" + TB] = !1, ZB["DIRLIGHT" + TB] = !1, ZB["SPOTLIGHT" + TB] = !1, ZB["AREALIGHT" + TB] = !1, ZB["CLUSTLIGHT" + TB] = !1, ZB["SHADOW" + TB] = !1, ZB["SHADOWCSM" + TB] = !1, ZB["SHADOWCSMDEBUG" + TB] = !1, ZB["SHADOWCSMNUM_CASCADES" + TB] = !1, ZB["SHADOWCSMUSESHADOWMAXZ" + TB] = !1, ZB["SHADOWCSMNOBLEND" + TB] = !1, ZB["SHADOWCSM_RIGHTHANDED" + TB] = !1, ZB["SHADOWPCF" + TB] = !1, ZB["SHADOWPCSS" + TB] = !1, ZB["SHADOWPOISSON" + TB] = !1, ZB["SHADOWESM" + TB] = !1, ZB["SHADOWCLOSEESM" + TB] = !1, ZB["SHADOWCUBE" + TB] = !1, ZB["SHADOWLOWQUALITY" + TB] = !1, ZB["SHADOWMEDIUMQUALITY" + TB] = !1);
      ZB.LIGHTCOUNT = kB, ZB.MAXLIGHTCOUNT = oB;
      const hB = BB.PN().getCaps();
      return void 0 === ZB.SHADOWFLOAT && (cB.needRebuild = !0), ZB.SHADOWFLOAT = cB.shadowEnabled && (hB.textureFloatRender && hB.textureFloatLinearFiltering || hB.textureHalfFloatRender && hB.textureHalfFloatLinearFiltering), ZB.LIGHTMAPEXCLUDED = cB.lightmapMode, cB.needRebuild && ZB.rebuild(), cB.needNormals
    }

    function PB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (IB && vB.e.ReflectionTextureEnabled) {
        if (!IB.isReadyOrNotBlocking()) return !1;
        ZB._needNormals = !0, ZB.REFLECTION = !0, ZB.GAMMAREFLECTION = IB.gammaSpace, ZB.RGBDREFLECTION = IB.isRGBD, ZB.LODINREFLECTIONALPHA = IB.lodLevelInAlpha, ZB.LINEARSPECULARREFLECTION = IB.linearSpecularLOD, ZB.USEIRRADIANCEMAP = !1, ZB.LODBASEDMICROSFURACE = BB.PN().getCaps().textureLOD;
        const GB = BB.PN();
        switch (TB && JB > 0 ? (ZB.NUM_SAMPLES = "" + JB, GB._features.needTypeSuffixInShaderConstants && (ZB.NUM_SAMPLES = ZB.NUM_SAMPLES + "u"), ZB.REALTIME_FILTERING = !0, BB.iblCdfGenerator && (ZB.IBL_CDF_FILTERING = !0)) : ZB.REALTIME_FILTERING = !1, ZB.INVERTCUBICMAP = 6 === IB.coordinatesMode, ZB.REFLECTIONMAP_3D = IB.isCube, ZB.REFLECTIONMAP_OPPOSITEZ = ZB.REFLECTIONMAP_3D && BB.useRightHandedSystem ? !IB.invertZ : IB.invertZ, ZB.REFLECTIONMAP_CUBIC = !1, ZB.REFLECTIONMAP_EXPLICIT = !1, ZB.REFLECTIONMAP_PLANAR = !1, ZB.REFLECTIONMAP_PROJECTION = !1, ZB.REFLECTIONMAP_SKYBOX = !1, ZB.REFLECTIONMAP_SPHERICAL = !1, ZB.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, IB.coordinatesMode) {
          case 0:
            ZB.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            ZB.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            ZB.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            ZB.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            ZB.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            ZB.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            ZB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            ZB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            ZB.REFLECTIONMAP_CUBIC = !0, ZB.USE_LOCAL_REFLECTIONMAP_CUBIC = !!IB.boundingBoxSize
        }
        5 !== IB.coordinatesMode && (IB.irradianceTexture ? (ZB.USEIRRADIANCEMAP = !0, ZB.USESPHERICALFROMREFLECTIONMAP = !1, ZB.USESPHERICALINVERTEX = !1, IB.irradianceTexture._dominantDirection ? ZB.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : ZB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : IB.isCube && (ZB.USESPHERICALFROMREFLECTIONMAP = !0, ZB.USEIRRADIANCEMAP = !1, ZB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZB.USESPHERICALINVERTEX = oB))
      } else ZB.REFLECTION = !1, ZB.REFLECTIONMAP_3D = !1, ZB.REFLECTIONMAP_SPHERICAL = !1, ZB.REFLECTIONMAP_PLANAR = !1, ZB.REFLECTIONMAP_CUBIC = !1, ZB.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, ZB.REFLECTIONMAP_PROJECTION = !1, ZB.REFLECTIONMAP_SKYBOX = !1, ZB.REFLECTIONMAP_EXPLICIT = !1, ZB.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ZB.INVERTCUBICMAP = !1, ZB.USESPHERICALFROMREFLECTIONMAP = !1, ZB.USEIRRADIANCEMAP = !1, ZB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZB.USESPHERICALINVERTEX = !1, ZB.REFLECTIONMAP_OPPOSITEZ = !1, ZB.LODINREFLECTIONALPHA = !1, ZB.GAMMAREFLECTION = !1, ZB.RGBDREFLECTION = !1, ZB.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function RB(BB, IB, ZB, TB, JB, GB, vB) {
      switch (vB.needNormals = !0, void 0 === JB["LIGHT" + TB] && (vB.needRebuild = !0), JB["LIGHT" + TB] = !0, JB["SPOTLIGHT" + TB] = !1, JB["HEMILIGHT" + TB] = !1, JB["POINTLIGHT" + TB] = !1, JB["DIRLIGHT" + TB] = !1, JB["AREALIGHT" + TB] = !1, JB["CLUSTLIGHT" + TB] = !1, ZB.prepareLightSpecificDefines(JB, TB), JB["LIGHT_FALLOFF_PHYSICAL" + TB] = !1, JB["LIGHT_FALLOFF_GLTF" + TB] = !1, JB["LIGHT_FALLOFF_STANDARD" + TB] = !1, ZB.falloffType) {
        case oB.d.FALLOFF_GLTF:
          JB["LIGHT_FALLOFF_GLTF" + TB] = !0;
          break;
        case oB.d.FALLOFF_PHYSICAL:
          JB["LIGHT_FALLOFF_PHYSICAL" + TB] = !0;
          break;
        case oB.d.FALLOFF_STANDARD:
          JB["LIGHT_FALLOFF_STANDARD" + TB] = !0
      }
      if (GB && !ZB.specular.equalsFloats(0, 0, 0) && (vB.specularEnabled = !0), JB["SHADOW" + TB] = !1, JB["SHADOWCSM" + TB] = !1, JB["SHADOWCSMDEBUG" + TB] = !1, JB["SHADOWCSMNUM_CASCADES" + TB] = !1, JB["SHADOWCSMUSESHADOWMAXZ" + TB] = !1, JB["SHADOWCSMNOBLEND" + TB] = !1, JB["SHADOWCSM_RIGHTHANDED" + TB] = !1, JB["SHADOWPCF" + TB] = !1, JB["SHADOWPCSS" + TB] = !1, JB["SHADOWPOISSON" + TB] = !1, JB["SHADOWESM" + TB] = !1, JB["SHADOWCLOSEESM" + TB] = !1, JB["SHADOWCUBE" + TB] = !1, JB["SHADOWLOWQUALITY" + TB] = !1, JB["SHADOWMEDIUMQUALITY" + TB] = !1, IB && IB.receiveShadows && BB.shadowsEnabled && ZB.shadowEnabled) {
        const IB = ZB.getShadowGenerator(BB.activeCamera) ?? ZB.getShadowGenerator();
        if (IB) {
          const BB = IB.getShadowMap();
          BB && BB.renderList && BB.renderList.length > 0 && (vB.shadowEnabled = !0, IB.prepareDefines(JB, TB))
        }
      }
      ZB.lightmapMode != oB.d.LIGHTMAP_DEFAULT ? (vB.lightmapMode = !0, JB["LIGHTMAPEXCLUDED" + TB] = !0, JB["LIGHTMAPNOSPECULAR" + TB] = ZB.lightmapMode == oB.d.LIGHTMAP_SHADOWSONLY) : (JB["LIGHTMAPEXCLUDED" + TB] = !1, JB["LIGHTMAPNOSPECULAR" + TB] = !1)
    }

    function rB(BB, IB, ZB, TB, JB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        vB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kB = function(BB, IB) {
          let ZB = !1;
          if (BB.activeCamera) {
            const TB = IB.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              JB = IB.CAMERA_PERSPECTIVE ? 1 : 0,
              oB = 1 === BB.activeCamera.mode ? 1 : 0,
              GB = 0 === BB.activeCamera.mode ? 1 : 0;
            (TB ^ oB || JB ^ GB) && (IB.CAMERA_ORTHOGRAPHIC = 1 === oB, IB.CAMERA_PERSPECTIVE = 1 === GB, ZB = !0)
          }
          return ZB
        }(BB, TB);
      !1 !== oB && (kB = (0, GB.f)(ZB, BB, TB)), TB.DEPTHPREPASS !== !IB.getColorWrite() && (TB.DEPTHPREPASS = !TB.DEPTHPREPASS, kB = !0), TB.INSTANCES !== JB && (TB.INSTANCES = JB, kB = !0), TB.THIN_INSTANCES !== vB && (TB.THIN_INSTANCES = vB, kB = !0), kB && TB.markAsUnprocessed()
    }
    const mB = 40,
      XB = 64,
      LB = new WeakMap,
      eB = new WeakSet;

    function uB(BB, IB, ZB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        vB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!IB._areAttributesDirty && IB._needNormals === IB._normals && IB._needUVs === IB._uvs) return !1;
      IB._normals = IB._needNormals, IB._uvs = IB._needUVs, IB.NORMAL = IB._needNormals && BB.isVerticesDataPresent("normal"), IB._needNormals && BB.isVerticesDataPresent("tangent") && (IB.TANGENT = !0);
      for (let TB = 1; TB <= 6; ++TB) IB["UV" + TB] = !!IB._needUVs && BB.isVerticesDataPresent(`uv${1===TB?"":TB}`);
      if (ZB) {
        const ZB = BB.useVertexColors && BB.isVerticesDataPresent("color");
        IB.VERTEXCOLOR = ZB, IB.VERTEXALPHA = BB.hasVertexAlpha && ZB && GB
      }
      return BB.isVerticesDataPresent("instanceColor") && (BB.sJB || BB.hasThinInstances) && (IB.INSTANCESCOLOR = !0), JB && function(BB, IB) {
        if (BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          IB.NUM_BONE_INFLUENCERS = BB.numBoneInfluencers;
          const ZB = void 0 !== IB.BONETEXTURE;
          if (BB.skeleton.isUsingTextureForMatrices && ZB) IB.BONETEXTURE = !0;
          else {
            IB.BonesPerMesh = BB.skeleton.bones.length + 1, IB.BONETEXTURE = !ZB && void 0;
            const JB = BB.JR(),
              oB = JB.prePassRenderer;
            if (oB && oB.enabled) {
              const ZB = -1 === oB.excludedSkinnedMesh.indexOf(BB);
              IB.BONES_VELOCITY_ENABLED = ZB
            }
            const GB = !0 === IB.MULTIVIEW,
              vB = 2 * IB.BonesPerMesh + (GB ? 1 : 0);
            if (LB.get(BB.skeleton) !== vB) {
              LB.set(BB.skeleton, vB);
              const ZB = JB.PN().getCaps().maxVertexUniformVectors;
              if (ZB && !eB.has(BB.skeleton)) {
                const JB = 4 * IB.BonesPerMesh,
                  oB = GB ? XB : mB,
                  vB = Math.max(ZB - oB, 0);
                (JB > vB || GB && 3 * JB > ZB) && (eB.add(BB.skeleton), TB.d.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${JB} of ~${vB} usable uniform vectors${GB?" (multiview)":""} on a device reporting ${ZB}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else IB.NUM_BONE_INFLUENCERS = 0, IB.BonesPerMesh = 0, void 0 !== IB.BONETEXTURE && (IB.BONETEXTURE = !1)
      }(BB, IB), oB && function(BB, IB) {
        const ZB = BB.morphTargetManager;
        ZB ? (IB.MORPHTARGETS_UV = ZB.supportsUVs && IB.UV1, IB.MORPHTARGETS_UV2 = ZB.supportsUV2s && IB.UV2, IB.MORPHTARGETS_TANGENT = ZB.supportsTangents && IB.TANGENT, IB.MORPHTARGETS_NORMAL = ZB.supportsNormals && IB.NORMAL, IB.MORPHTARGETS_POSITION = ZB.supportsPositions, IB.MORPHTARGETS_COLOR = ZB.supportsColors, IB.MORPHTARGETTEXTURE_HASUVS = ZB.hasUVs, IB.MORPHTARGETTEXTURE_HASUV2S = ZB.hasUV2s, IB.MORPHTARGETTEXTURE_HASTANGENTS = ZB.hasTangents, IB.MORPHTARGETTEXTURE_HASNORMALS = ZB.hasNormals, IB.MORPHTARGETTEXTURE_HASPOSITIONS = ZB.hasPositions, IB.MORPHTARGETTEXTURE_HASCOLORS = ZB.hasColors, IB.NUM_MORPH_INFLUENCERS = ZB.numMaxInfluencers || ZB.numInfluencers, IB.MORPHTARGETS = IB.NUM_MORPH_INFLUENCERS > 0, IB.MORPHTARGETS_TEXTURE = ZB.isUsingTextureForTargets) : (IB.MORPHTARGETS_UV = !1, IB.MORPHTARGETS_UV2 = !1, IB.MORPHTARGETS_TANGENT = !1, IB.MORPHTARGETS_NORMAL = !1, IB.MORPHTARGETS_POSITION = !1, IB.MORPHTARGETS_COLOR = !1, IB.MORPHTARGETTEXTURE_HASUVS = !1, IB.MORPHTARGETTEXTURE_HASUV2S = !1, IB.MORPHTARGETTEXTURE_HASTANGENTS = !1, IB.MORPHTARGETTEXTURE_HASNORMALS = !1, IB.MORPHTARGETTEXTURE_HASPOSITIONS = !1, IB.MORPHTARGETTEXTURE_HAS_COLORS = !1, IB.MORPHTARGETS = !1, IB.NUM_MORPH_INFLUENCERS = 0)
      }(BB, IB), vB && function(BB, IB) {
        const ZB = BB.bakedVertexAnimationManager;
        IB.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ZB || !ZB.isEnabled)
      }(BB, IB), !0
    }

    function fB(BB, IB) {
      if (BB.activeCamera) {
        const ZB = IB.MULTIVIEW;
        IB.MULTIVIEW = null !== BB.activeCamera.outputRenderTarget && BB.activeCamera.outputRenderTarget.getViewCount() > 1, IB.MULTIVIEW != ZB && IB.markAsUnprocessed()
      }
    }

    function lB(BB, IB, ZB) {
      const TB = IB.ORDER_INDEPENDENT_TRANSPARENCY,
        JB = IB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      IB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && ZB, IB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.PN().getCaps().textureFloatLinearFiltering, TB === IB.ORDER_INDEPENDENT_TRANSPARENCY && JB === IB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || IB.markAsUnprocessed()
    }

    function AB(BB, IB, ZB) {
      const TB = IB.PREPASS;
      if (!IB._arePrePassDirty) return;
      const JB = [{
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
      if (BB.prePassRenderer && BB.prePassRenderer.enabled && ZB) {
        IB.PREPASS = !0, IB.SCENE_MRT_COUNT = BB.prePassRenderer.mrtCount, IB.PREPASS_NORMAL_WORLDSPACE = BB.prePassRenderer.generateNormalsInWorldSpace, IB.PREPASS_COLOR = !0, IB.PREPASS_COLOR_INDEX = 0;
        for (let ZB = 0; ZB < JB.length; ZB++) {
          const TB = BB.prePassRenderer.getIndex(JB[ZB].type); - 1 !== TB ? (IB[JB[ZB].define] = !0, IB[JB[ZB].index] = TB) : IB[JB[ZB].define] = !1
        }
      } else {
        IB.PREPASS = !1;
        for (let BB = 0; BB < JB.length; BB++) IB[JB[BB].define] = !1
      }
      IB.PREPASS != TB && (IB.markAsUnprocessed(), IB.markAsImageProcessingDirty())
    }

    function tB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      JB && JB.push("Light" + BB), oB || (IB.push("vLightData" + BB, "vLightDiffuse" + BB, "vLightSpecular" + BB, "vLightDirection" + BB, "vLightWidth" + BB, "vLightHeight" + BB, "vLightFalloff" + BB, "vLightGround" + BB, "vSliceData" + BB, "vSliceRanges" + BB, "lightMatrix" + BB, "shadowsInfo" + BB, "depthValues" + BB), ZB.push("shadowTexture" + BB), ZB.push("depthTexture" + BB), IB.push("viewFrustumZ" + BB, "cascadeBlendFactor" + BB, "lightSizeUVCorrection" + BB, "depthCorrection" + BB, "penumbraDarkness" + BB, "frustumLengths" + BB), TB && (ZB.push("projectionLightTexture" + BB), IB.push("textureProjectionMatrix" + BB)), GB && ZB.push("iesLightTexture" + BB), kB && ZB.push("rectAreaLightEmissionTexture" + BB), vB && (ZB.push("lightDataTexture" + BB), cB || ZB.push("tileMaskTexture" + BB)))
    }

    function bB(BB, IB, ZB) {
      const TB = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      ZB && TB.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), BB.push(...TB);
      IB.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function xB(BB, IB, ZB) {
      let TB, JB, oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        GB = null;
      if (BB.uniformsNames) {
        const vB = BB;
        TB = vB.uniformsNames, JB = vB.uniformBuffersNames, IB = vB.samplers, ZB = vB.defines, oB = vB.maxSimultaneousLights || 0, GB = vB.shaderLanguage ?? null
      } else TB = BB, IB || (IB = []);
      for (let vB = 0; vB < oB && ZB["LIGHT" + vB]; vB++) tB(vB, TB, IB, ZB["PROJECTEDLIGHTTEXTURE" + vB], JB, !1, ZB["IESLIGHTTEXTURE" + vB], ZB["CLUSTLIGHT" + vB], ZB["RECTAREALIGHTEMISSIONTEXTURE" + vB], 1 === GB);
      ZB.NUM_MORPH_INFLUENCERS && (TB.push("morphTargetInfluences"), TB.push("morphTargetCount")), ZB.BAKED_VERTEX_ANIMATION_TEXTURE && (TB.push("bakedVertexAnimationSettings"), TB.push("bakedVertexAnimationTextureSizeInverted"), TB.push("bakedVertexAnimationTime"), IB.push("bakedVertexAnimationTexture"))
    }

    function EB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      BB.addUniform("vReflectionInfos", 2), BB.addUniform("reflectionMatrix", 16), IB && BB.addUniform("vReflectionMicrosurfaceInfos", 3), ZB && (BB.addUniform("vReflectionPosition", 3), BB.addUniform("vReflectionSize", 3)), TB && (BB.addUniform("vReflectionFilteringInfo", 2), BB.addUniform("vReflectionDominantDirection", 3)), oB && BB.addUniform("vReflectionColor", 3), JB && (BB.addUniform("vSphericalL00", 3), BB.addUniform("vSphericalL1_1", 3), BB.addUniform("vSphericalL10", 3), BB.addUniform("vSphericalL11", 3), BB.addUniform("vSphericalL2_2", 3), BB.addUniform("vSphericalL2_1", 3), BB.addUniform("vSphericalL20", 3), BB.addUniform("vSphericalL21", 3), BB.addUniform("vSphericalL22", 3), BB.addUniform("vSphericalX", 3), BB.addUniform("vSphericalY", 3), BB.addUniform("vSphericalZ", 3), BB.addUniform("vSphericalXX_ZZ", 3), BB.addUniform("vSphericalYY_ZZ", 3), BB.addUniform("vSphericalZZ", 3), BB.addUniform("vSphericalXY", 3), BB.addUniform("vSphericalYZ", 3), BB.addUniform("vSphericalZX", 3))
    }
  },
  40390: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(37120),
      JB = ZB(40339);
    class oB extends JB.e {
      constructor(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(BB, IB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new TB.b, this._storeEffectOnSubMeshes = ZB
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(BB, IB) {
        return !!BB && (!this._storeEffectOnSubMeshes || (!BB.EW || 0 === BB.EW.length || this.isReadyForSubMesh(BB, BB.EW[0], IB)))
      }
      _isReadyForSubMesh(BB) {
        const IB = BB.materialDefines;
        return !(this.checkReadyOnEveryCall || !BB.effect || !IB || IB._renderId !== this.JR().getRenderId())
      }
      bindOnlyWorldMatrix(BB) {
        this._activeEffect.setMatrix("world", BB)
      }
      bindOnlyNormalMatrix(BB) {
        this._activeEffect.setMatrix("normalMatrix", BB)
      }
      bind(BB, IB) {
        IB && this.bindForSubMesh(BB, IB, IB.EW[0])
      }
      _afterBind(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(BB, IB, ZB), this.JR()._cachedEffect = IB, ZB ? ZB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return ZB._drawWrapper._forceRebindOnNextCall || BB.isCachedMaterialInvalid(this, IB, TB)
      }
      dispose(BB, IB, ZB) {
        this._activeEffect = void 0, super.dispose(BB, IB, ZB)
      }
    }
  },
  40416: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      d: () => JB
    });
    const TB = new WeakMap;

    function JB(BB) {
      const IB = BB.getVertexBuffers();
      if (!IB) return null;
      let ZB = TB.get(BB);
      if (ZB) {
        let BB = !1;
        for (const TB in IB)
          if (!ZB.has(TB)) {
            BB = !0;
            break
          } if (!BB) return ZB
      } else ZB = new Map, TB.set(BB, ZB);
      for (const TB in IB) {
        const BB = IB[TB];
        if (BB) {
          const IB = BB.byteOffset,
            JB = BB.byteStride,
            oB = BB.type,
            GB = BB.normalized;
          ZB.set(TB, {
            offset: IB,
            stride: JB,
            type: oB,
            normalized: GB
          })
        }
      }
      return ZB
    }

    function oB(BB, IB) {
      IB.forEach(((IB, ZB) => {
        const TB = `vp_${ZB}_info`;
        BB.setFloat4(TB, IB.offset, IB.stride, IB.type, IB.normalized ? 1 : 0)
      }))
    }
  },
  40361: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      e: () => kB
    });
    var TB = ZB(40061),
      JB = ZB(37120),
      oB = ZB(40065);
    let GB = (() => {
      var BB;
      let IB, ZB, JB = [];
      return BB = class {
        static extractMinAndMaxIndexed(BB, IB, ZB, TB, JB, oB) {
          for (let GB = ZB; GB < ZB + TB; GB++) {
            const ZB = 3 * IB[GB],
              TB = BB[ZB],
              vB = BB[ZB + 1],
              kB = BB[ZB + 2];
            JB.minimizeInPlaceFromFloats(TB, vB, kB), oB.maximizeInPlaceFromFloats(TB, vB, kB)
          }
        }
        static extractMinAndMax(BB, IB, ZB, TB, JB, oB) {
          for (let GB = IB, vB = IB * TB; GB < IB + ZB; GB++, vB += TB) {
            const IB = BB[vB],
              ZB = BB[vB + 1],
              TB = BB[vB + 2];
            JB.minimizeInPlaceFromFloats(IB, ZB, TB), oB.maximizeInPlaceFromFloats(IB, ZB, TB)
          }
        }
      }, (() => {
        const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [oB.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], ZB = [oB.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, TB.j)(BB, null, IB, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMaxIndexed" in BB,
            get: BB => BB.extractMinAndMaxIndexed
          },
          metadata: GB
        }, null, JB), (0, TB.j)(BB, null, ZB, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMax" in BB,
            get: BB => BB.extractMinAndMax
          },
          metadata: GB
        }, null, JB), GB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GB
        }), (0, TB.l)(BB, JB)
      })(), BB
    })();

    function vB(BB, IB, ZB, TB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const vB = new JB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        kB = new JB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return GB.extractMinAndMaxIndexed(BB, IB, ZB, TB, vB, kB), oB && (vB.x -= vB.x * oB.x + oB.y, vB.y -= vB.y * oB.x + oB.y, vB.z -= vB.z * oB.x + oB.y, kB.x += kB.x * oB.x + oB.y, kB.y += kB.y * oB.x + oB.y, kB.z += kB.z * oB.x + oB.y), {
        minimum: vB,
        maximum: kB
      }
    }

    function kB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        oB = arguments.length > 4 ? arguments[4] : void 0;
      const vB = new JB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        kB = new JB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return oB || (oB = 3), GB.extractMinAndMax(BB, IB, ZB, oB, vB, kB), TB && (vB.x -= vB.x * TB.x + TB.y, vB.y -= vB.y * TB.x + TB.y, vB.z -= vB.z * TB.x + TB.y, kB.x += kB.x * TB.x + TB.y, kB.y += kB.y * TB.x + TB.y, kB.z += kB.z * TB.x + TB.y), {
        minimum: vB,
        maximum: kB
      }
    }
  },
  40341: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB
    });
    var TB, JB = ZB(40188),
      oB = ZB(40343),
      GB = ZB(40351),
      vB = ZB(40361),
      kB = ZB(40369),
      cB = ZB(39931);
    class nB {
      get materialDefines() {
        const BB = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof BB ? null : BB
      }
      set materialDefines(BB) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = BB
      }
      _getDrawWrapper(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB = BB ?? this._engine.currentRenderPassId;
        let ZB = this._drawWrappers[BB];
        return !ZB && IB && (this._drawWrappers[BB] = ZB = new kB.c(this._mesh.JR().PN())), ZB
      }
      _removeDrawWrapper(BB) {
        let IB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[BB]?.dispose(IB), this._drawWrappers[BB] = void 0
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
      _setMainDrawWrapperOverride(BB) {
        this._mainDrawWrapperOverride = BB
      }
      setEffect(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const JB = this._drawWrapper;
        JB.setEffect(BB, IB, TB), void 0 !== ZB && (JB.materialContext = ZB), BB || (JB.defines = null, JB.materialContext = void 0)
      }
      resetDrawCache(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== BB) return void this._removeDrawWrapper(BB, !0, IB);
          for (const BB of this._drawWrappers) BB?.dispose(IB)
        }
        this._drawWrappers = []
      }
      static AddToMesh(BB, IB, ZB, TB, JB, oB, GB) {
        return new nB(BB, IB, ZB, TB, JB, oB, GB, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(BB, IB, ZB, TB, JB, oB, GB) {
        let vB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          kB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = BB, this.verticesStart = IB, this.verticesCount = ZB, this.indexStart = TB, this.indexCount = JB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = oB, this._renderingMesh = GB || oB, kB && oB.EW.push(this), this._engine = this._mesh.JR().PN(), this.resetDrawCache(), this._trianglePlanes = [], this._id = oB.EW.length - 1, vB && (this.refreshBoundingInfo(), oB.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      qm() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.qm() : this._boundingInfo
      }
      setBoundingInfo(BB) {
        return this._boundingInfo = BB, this
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
        const BB = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return BB || this._renderingMesh
      }
      LN() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const IB = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!IB) return BB && this._mesh.JR()._hasDefaultMaterial ? this._mesh.JR().defaultMaterial : null;
        if (this._isMultiMaterial(IB)) {
          const BB = IB.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== BB && (this._currentMaterial = BB, this.resetDrawCache()), BB
        }
        return IB
      }
      _isMultiMaterial(BB) {
        return void 0 !== BB.getSubMaterial
      }
      refreshBoundingInfo() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (BB || (BB = this._renderingMesh.getVerticesData(JB.i.PositionKind)), !BB) return this._boundingInfo = this._mesh.qm(), this;
        const IB = this._renderingMesh.MTB();
        let ZB;
        if (0 === this.indexStart && this.indexCount === IB.length) {
          const BB = this._renderingMesh.qm();
          ZB = {
            minimum: BB.minimum.clone(),
            maximum: BB.maximum.clone()
          }
        } else ZB = (0, vB.c)(BB, IB, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(ZB.minimum, ZB.maximum) : this._boundingInfo = new GB.d(ZB.minimum, ZB.maximum), this
      }
      _checkCollision(BB) {
        return this.qm()._checkCollision(BB)
      }
      updateBoundingInfo(BB) {
        let IB = this.qm();
        return IB || (this.refreshBoundingInfo(), IB = this.qm()), IB && IB.update(BB), this
      }
      isInFrustum(BB) {
        const IB = this.qm();
        return !!IB && IB.isInFrustum(BB, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(BB) {
        const IB = this.qm();
        return !!IB && IB.isCompletelyInFrustum(BB)
      }
      render(BB) {
        return this._renderingMesh.render(this, BB, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(BB, IB) {
        if (!this._linesIndexBuffer) {
          const ZB = 6 * Math.floor(this.indexCount / 3),
            TB = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ZB) : new Uint16Array(ZB);
          let JB = 0;
          if (0 === BB.length)
            for (let BB = this.indexStart; BB < this.indexStart + this.indexCount; BB += 3) TB[JB++] = BB, TB[JB++] = BB + 1, TB[JB++] = BB + 1, TB[JB++] = BB + 2, TB[JB++] = BB + 2, TB[JB++] = BB;
          else
            for (let IB = this.indexStart; IB < this.indexStart + this.indexCount; IB += 3) TB[JB++] = BB[IB], TB[JB++] = BB[IB + 1], TB[JB++] = BB[IB + 1], TB[JB++] = BB[IB + 2], TB[JB++] = BB[IB + 2], TB[JB++] = BB[IB];
          this._linesIndexBuffer = IB.createIndexBuffer(TB), this._linesIndexCount = TB.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(BB) {
        const IB = this.qm();
        return !!IB && BB.intersectsBox(IB.boundingBox)
      }
      intersects(BB, IB, ZB, TB, JB) {
        const oB = this.LN();
        if (!oB) return null;
        let GB = 3,
          vB = !1;
        switch (oB.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            GB = 1, vB = !0
        }
        return 4 === oB.fillMode ? ZB.length ? this._intersectLines(BB, IB, ZB, this._mesh.intersectionThreshold, TB) : this._intersectUnIndexedLines(BB, IB, ZB, this._mesh.intersectionThreshold, TB) : !ZB.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(BB, IB, ZB, TB, JB) : this._intersectTriangles(BB, IB, ZB, GB, vB, TB, JB)
      }
      _intersectLines(BB, IB, ZB, TB, JB) {
        let GB = null;
        for (let vB = this.indexStart; vB < this.indexStart + this.indexCount; vB += 2) {
          const kB = IB[ZB[vB]],
            cB = IB[ZB[vB + 1]],
            nB = BB.intersectionSegment(kB, cB, TB);
          if (!(nB < 0) && ((JB || !GB || nB < GB.distance) && (GB = new oB.c(null, null, nB), GB.faceId = vB / 2, JB))) break
        }
        return GB
      }
      _intersectUnIndexedLines(BB, IB, ZB, TB, JB) {
        let GB = null;
        for (let vB = this.verticesStart; vB < this.verticesStart + this.verticesCount; vB += 2) {
          const ZB = IB[vB],
            kB = IB[vB + 1],
            cB = BB.intersectionSegment(ZB, kB, TB);
          if (!(cB < 0) && ((JB || !GB || cB < GB.distance) && (GB = new oB.c(null, null, cB), GB.faceId = vB / 2, JB))) break
        }
        return GB
      }
      _intersectTriangles(BB, IB, ZB, TB, JB, oB, GB) {
        let vB = null,
          kB = -1;
        for (let cB = this.indexStart; cB < this.indexStart + this.indexCount - (3 - TB); cB += TB) {
          kB++;
          const TB = ZB[cB],
            nB = ZB[cB + 1],
            hB = ZB[cB + 2];
          if (JB && 4294967295 === hB) {
            cB += 2;
            continue
          }
          const zB = IB[TB],
            FB = IB[nB],
            NB = IB[hB];
          if (!zB || !FB || !NB) continue;
          if (GB && !GB(zB, FB, NB, BB, TB, nB, hB)) continue;
          const gB = BB.intersectsTriangle(zB, FB, NB);
          if (gB) {
            if (gB.distance < 0) continue;
            if ((oB || !vB || gB.distance < vB.distance) && (vB = gB, vB.faceId = kB, oB)) break
          }
        }
        return vB
      }
      _intersectUnIndexedTriangles(BB, IB, ZB, TB, JB) {
        let oB = null;
        for (let GB = this.verticesStart; GB < this.verticesStart + this.verticesCount; GB += 3) {
          const ZB = IB[GB],
            vB = IB[GB + 1],
            kB = IB[GB + 2];
          if (JB && !JB(ZB, vB, kB, BB, -1, -1, -1)) continue;
          const cB = BB.intersectsTriangle(ZB, vB, kB);
          if (cB) {
            if (cB.distance < 0) continue;
            if ((TB || !oB || cB.distance < oB.distance) && (oB = cB, oB.faceId = GB / 3, TB)) break
          }
        }
        return oB
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(BB, IB) {
        const ZB = new nB(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, BB, IB, !1);
        if (!this.IsGlobal) {
          const BB = this.qm();
          if (!BB) return ZB;
          ZB._boundingInfo = new GB.d(BB.minimum, BB.maximum)
        }
        return ZB
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.JR().PN()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const IB = this._mesh.EW.indexOf(this);
        this._mesh.EW.splice(IB, 1), this.resetDrawCache(void 0, BB)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(BB, IB, ZB, TB, JB) {
        let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = Number.MAX_VALUE,
          vB = -Number.MAX_VALUE;
        const kB = (JB || TB).MTB();
        for (let cB = IB; cB < IB + ZB; cB++) {
          const BB = kB[cB];
          BB < GB && (GB = BB), BB > vB && (vB = BB)
        }
        return new nB(BB, GB, vB - GB + 1, IB, ZB, TB, JB, oB)
      }
    }(TB = nB.prototype).projectToRef ?? (TB.projectToRef = (0, cB.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);