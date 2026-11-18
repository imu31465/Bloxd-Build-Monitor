export const id = 242;
export const ids = [242];
export const modules = {
  39051: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    class VB {
      constructor(BB, TB, dB) {
        this.bu = BB, this.bv = TB, this.distance = dB, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39060: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(36137),
      yB = dB(36126),
      pB = dB(36132);
    class lB {
      constructor(BB, TB, dB) {
        this.vectors = (0, VB.b)(8, yB.p.Zero), this.center = yB.p.Zero(), this.centerWorld = yB.p.Zero(), this.extendSize = yB.p.Zero(), this.extendSizeWorld = yB.p.Zero(), this.directions = (0, VB.b)(3, yB.p.Zero), this.vectorsWorld = (0, VB.b)(8, yB.p.Zero), this.minimumWorld = yB.p.Zero(), this.maximumWorld = yB.p.Zero(), this.minimum = yB.p.Zero(), this.maximum = yB.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(BB, TB, dB)
      }
      reConstruct(BB, TB, dB) {
        const VB = BB.x,
          pB = BB.y,
          lB = BB.z,
          JB = TB.x,
          YB = TB.y,
          gB = TB.z,
          oB = this.vectors;
        this.minimum.YBB(VB, pB, lB), this.maximum.YBB(JB, YB, gB), oB[0].YBB(VB, pB, lB), oB[1].YBB(JB, YB, gB), oB[2].YBB(JB, pB, lB), oB[3].YBB(VB, YB, lB), oB[4].YBB(VB, pB, gB), oB[5].YBB(JB, YB, lB), oB[6].YBB(VB, YB, gB), oB[7].YBB(JB, pB, gB), TB.addToRef(BB, this.center).scaleInPlace(.5), TB.subtractToRef(BB, this.extendSize).scaleInPlace(.5), this._worldMatrix = dB || yB.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(BB) {
        const TB = lB._TmpVector3,
          dB = this.maximum.subtractToRef(this.minimum, TB[0]),
          VB = dB.length();
        dB.normalizeFromLength(VB);
        const yB = VB * BB,
          pB = dB.scaleInPlace(.5 * yB),
          JB = this.center.subtractToRef(pB, TB[1]),
          YB = this.center.addToRef(pB, TB[2]);
        return this.reConstruct(JB, YB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        const TB = this.minimumWorld,
          dB = this.maximumWorld,
          VB = this.directions,
          pB = this.vectorsWorld,
          lB = this.vectors;
        if (BB.isIdentity()) {
          TB.bdB(this.minimum), dB.bdB(this.maximum);
          for (let BB = 0; BB < 8; ++BB) pB[BB].bdB(lB[BB]);
          this.extendSizeWorld.bdB(this.extendSize), this.centerWorld.bdB(this.center)
        } else {
          TB.A4(Number.MAX_VALUE), dB.A4(-Number.MAX_VALUE);
          for (let VB = 0; VB < 8; ++VB) {
            const JB = pB[VB];
            yB.p.TransformCoordinatesToRef(lB[VB], BB, JB), TB.minimizeInPlace(JB), dB.maximizeInPlace(JB)
          }
          dB.subtractToRef(TB, this.extendSizeWorld).scaleInPlace(.5), dB.addToRef(TB, this.centerWorld).scaleInPlace(.5)
        }
        yB.p.FromArrayToRef(BB.m, 0, VB[0]), yB.p.FromArrayToRef(BB.m, 4, VB[1]), yB.p.FromArrayToRef(BB.m, 8, VB[2]), this._worldMatrix = BB
      }
      isInFrustum(BB) {
        return lB.IsInFrustum(this.vectorsWorld, BB)
      }
      isCompletelyInFrustum(BB) {
        return lB.IsCompletelyInFrustum(this.vectorsWorld, BB)
      }
      intersectsPoint(BB) {
        const TB = this.minimumWorld,
          dB = this.maximumWorld,
          VB = TB.x,
          yB = TB.y,
          lB = TB.z,
          JB = dB.x,
          YB = dB.y,
          gB = dB.z,
          oB = BB.x,
          kB = BB.y,
          LB = BB.z,
          OB = -pB.b;
        return !(JB - oB < OB || OB > oB - VB) && (!(YB - kB < OB || OB > kB - yB) && !(gB - LB < OB || OB > LB - lB))
      }
      intersectsSphere(BB) {
        return lB.IntersectsSphere(this.minimumWorld, this.maximumWorld, BB.centerWorld, BB.radiusWorld)
      }
      intersectsMinMax(BB, TB) {
        const dB = this.minimumWorld,
          VB = this.maximumWorld,
          yB = dB.x,
          pB = dB.y,
          lB = dB.z,
          JB = VB.x,
          YB = VB.y,
          gB = VB.z,
          oB = BB.x,
          kB = BB.y,
          LB = BB.z,
          OB = TB.x,
          DB = TB.y,
          uB = TB.z;
        return !(JB < oB || yB > OB) && (!(YB < kB || pB > DB) && !(gB < LB || lB > uB))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(BB, TB) {
        return BB.intersectsMinMax(TB.minimumWorld, TB.maximumWorld)
      }
      static IntersectsSphere(BB, TB, dB, VB) {
        const pB = lB._TmpVector3[0];
        yB.p.ClampToRef(dB, BB, TB, pB);
        return yB.p.DistanceSquared(dB, pB) <= VB * VB
      }
      static IsCompletelyInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; ++dB) {
          const VB = TB[dB];
          for (let TB = 0; TB < 8; ++TB)
            if (VB.dotCoordinate(BB[TB]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; ++dB) {
          let VB = !0;
          const yB = TB[dB];
          for (let TB = 0; TB < 8; ++TB)
            if (yB.dotCoordinate(BB[TB]) >= 0) {
              VB = !1;
              break
            } if (VB) return !1
        }
        return !0
      }
    }
    lB._TmpVector3 = (0, VB.b)(3, yB.p.Zero)
  },
  39058: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => kB
    });
    var VB = dB(36137),
      yB = dB(36126),
      pB = dB(39060);
    class lB {
      constructor(BB, TB, dB) {
        this.center = yB.p.Zero(), this.centerWorld = yB.p.Zero(), this.minimum = yB.p.Zero(), this.maximum = yB.p.Zero(), this.reConstruct(BB, TB, dB)
      }
      reConstruct(BB, TB, dB) {
        this.minimum.bdB(BB), this.maximum.bdB(TB);
        const VB = yB.p.Distance(BB, TB);
        TB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * VB, this._update(dB || yB.b.IdentityReadOnly)
      }
      scale(BB) {
        const TB = lB._TmpVector3,
          dB = this.maximum.subtractToRef(this.minimum, TB[0]),
          VB = dB.length();
        dB.normalizeFromLength(VB);
        const yB = VB * BB,
          pB = dB.scaleInPlace(.5 * yB),
          JB = this.center.subtractToRef(pB, TB[1]),
          YB = this.center.addToRef(pB, TB[2]);
        return this.reConstruct(JB, YB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        if (BB.isIdentity()) this.centerWorld.bdB(this.center), this.radiusWorld = this.radius;
        else {
          yB.p.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
          const TB = lB._TmpVector3[0];
          yB.p.TransformNormalFromFloatsToRef(1, 1, 1, BB, TB), this.radiusWorld = Math.max(Math.abs(TB.x), Math.abs(TB.y), Math.abs(TB.z)) * this.radius
        }
      }
      isInFrustum(BB) {
        const TB = this.centerWorld,
          dB = this.radiusWorld;
        for (let VB = 0; VB < 6; VB++)
          if (BB[VB].dotCoordinate(TB) <= -dB) return !1;
        return !0
      }
      isCenterInFrustum(BB) {
        const TB = this.centerWorld;
        for (let dB = 0; dB < 6; dB++)
          if (BB[dB].dotCoordinate(TB) < 0) return !1;
        return !0
      }
      intersectsPoint(BB) {
        const TB = yB.p.DistanceSquared(this.centerWorld, BB);
        return !(this.radiusWorld * this.radiusWorld < TB)
      }
      static Intersects(BB, TB) {
        const dB = yB.p.DistanceSquared(BB.centerWorld, TB.centerWorld),
          VB = BB.radiusWorld + TB.radiusWorld;
        return !(VB * VB < dB)
      }
      static CreateFromCenterAndRadius(BB, TB, dB) {
        this._TmpVector3[0].bdB(BB), this._TmpVector3[1].YBB(0, 0, TB), this._TmpVector3[2].bdB(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].qVB(this._TmpVector3[1]);
        const VB = new lB(this._TmpVector3[0], this._TmpVector3[2]);
        return VB._worldMatrix = dB || yB.b.Identity(), VB
      }
    }
    lB._TmpVector3 = (0, VB.b)(3, yB.p.Zero);
    const JB = {
        min: 0,
        max: 0
      },
      YB = {
        min: 0,
        max: 0
      },
      gB = (BB, TB, dB) => {
        const VB = yB.p.Dot(TB.centerWorld, BB),
          pB = Math.abs(yB.p.Dot(TB.directions[0], BB)) * TB.extendSize.x + Math.abs(yB.p.Dot(TB.directions[1], BB)) * TB.extendSize.y + Math.abs(yB.p.Dot(TB.directions[2], BB)) * TB.extendSize.z;
        dB.min = VB - pB, dB.max = VB + pB
      },
      oB = (BB, TB, dB) => (gB(BB, TB, JB), gB(BB, dB, YB), !(JB.min > YB.max || YB.min > JB.max));
    class kB {
      constructor(BB, TB, dB) {
        this._isLocked = !1, this.boundingBox = new pB.d(BB, TB, dB), this.bVB = new lB(BB, TB, dB)
      }
      reConstruct(BB, TB, dB) {
        this.boundingBox.reConstruct(BB, TB, dB), this.bVB.reConstruct(BB, TB, dB)
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
        this._isLocked || (this.boundingBox._update(BB), this.bVB._update(BB))
      }
      centerOn(BB, TB) {
        const dB = kB._TmpVector3[0].bdB(BB).qVB(TB),
          VB = kB._TmpVector3[1].bdB(BB).addInPlace(TB);
        return this.boundingBox.reConstruct(dB, VB, this.boundingBox.getWorldMatrix()), this.bVB.reConstruct(dB, VB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(BB) {
        const TB = yB.p.Minimize(this.minimum, BB),
          dB = yB.p.Maximize(this.maximum, BB);
        return this.reConstruct(TB, dB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(BB) {
        const TB = yB.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(TB);
        const dB = yB.j.RD[0];
        return yB.p.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, TB, dB), this.encapsulate(dB), yB.p.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, TB, dB), this.encapsulate(dB), this
      }
      scale(BB) {
        return this.boundingBox.scale(BB), this.bVB.scale(BB), this
      }
      isInFrustum(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === TB || 3 === TB) && this.bVB.isCenterInFrustum(BB)) return !0;
        if (!this.bVB.isInFrustum(BB)) return !1;
        return !(1 !== TB && 3 !== TB) || this.boundingBox.isInFrustum(BB)
      }
      get diagonalLength() {
        const BB = this.boundingBox;
        return BB.maximumWorld.subtractToRef(BB.minimumWorld, kB._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(BB) {
        return this.boundingBox.isCompletelyInFrustum(BB)
      }
      _checkCollision(BB) {
        return BB._canDoCollision(this.bVB.centerWorld, this.bVB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(BB) {
        return !!this.bVB.centerWorld && (!!this.bVB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
      }
      intersects(BB, TB) {
        if (!lB.Intersects(this.bVB, BB.bVB)) return !1;
        if (!pB.d.Intersects(this.boundingBox, BB.boundingBox)) return !1;
        if (!TB) return !0;
        const dB = this.boundingBox,
          VB = BB.boundingBox;
        return !!oB(dB.directions[0], dB, VB) && (!!oB(dB.directions[1], dB, VB) && (!!oB(dB.directions[2], dB, VB) && (!!oB(VB.directions[0], dB, VB) && (!!oB(VB.directions[1], dB, VB) && (!!oB(VB.directions[2], dB, VB) && (!!oB(yB.p.Cross(dB.directions[0], VB.directions[0]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[0], VB.directions[1]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[0], VB.directions[2]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[1], VB.directions[0]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[1], VB.directions[1]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[1], VB.directions[2]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[2], VB.directions[0]), dB, VB) && (!!oB(yB.p.Cross(dB.directions[2], VB.directions[1]), dB, VB) && !!oB(yB.p.Cross(dB.directions[2], VB.directions[2]), dB, VB))))))))))))))
      }
    }
    kB._TmpVector3 = (0, VB.b)(2, yB.p.Zero)
  },
  39075: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      d: () => YB,
      f: () => JB,
      g: () => lB
    });
    var VB = dB(38908),
      yB = dB(36126);

    function pB(BB) {
      -1 === BB.indexOf("vClipPlane") && BB.push("vClipPlane"), -1 === BB.indexOf("vClipPlane2") && BB.push("vClipPlane2"), -1 === BB.indexOf("vClipPlane3") && BB.push("vClipPlane3"), -1 === BB.indexOf("vClipPlane4") && BB.push("vClipPlane4"), -1 === BB.indexOf("vClipPlane5") && BB.push("vClipPlane5"), -1 === BB.indexOf("vClipPlane6") && BB.push("vClipPlane6")
    }

    function lB(BB, TB, dB) {
      const VB = !!(BB.clipPlane ?? TB.clipPlane),
        yB = !!(BB.clipPlane2 ?? TB.clipPlane2),
        pB = !!(BB.clipPlane3 ?? TB.clipPlane3),
        lB = !!(BB.clipPlane4 ?? TB.clipPlane4),
        JB = !!(BB.clipPlane5 ?? TB.clipPlane5),
        YB = !!(BB.clipPlane6 ?? TB.clipPlane6);
      VB && dB.push("#define CLIPPLANE"), yB && dB.push("#define CLIPPLANE2"), pB && dB.push("#define CLIPPLANE3"), lB && dB.push("#define CLIPPLANE4"), JB && dB.push("#define CLIPPLANE5"), YB && dB.push("#define CLIPPLANE6")
    }

    function JB(BB, TB, dB) {
      let VB = !1;
      const yB = !!(BB.clipPlane ?? TB.clipPlane),
        pB = !!(BB.clipPlane2 ?? TB.clipPlane2),
        lB = !!(BB.clipPlane3 ?? TB.clipPlane3),
        JB = !!(BB.clipPlane4 ?? TB.clipPlane4),
        YB = !!(BB.clipPlane5 ?? TB.clipPlane5),
        gB = !!(BB.clipPlane6 ?? TB.clipPlane6);
      return dB.CLIPPLANE !== yB && (dB.CLIPPLANE = yB, VB = !0), dB.CLIPPLANE2 !== pB && (dB.CLIPPLANE2 = pB, VB = !0), dB.CLIPPLANE3 !== lB && (dB.CLIPPLANE3 = lB, VB = !0), dB.CLIPPLANE4 !== JB && (dB.CLIPPLANE4 = JB, VB = !0), dB.CLIPPLANE5 !== YB && (dB.CLIPPLANE5 = YB, VB = !0), dB.CLIPPLANE6 !== gB && (dB.CLIPPLANE6 = gB, VB = !0), VB
    }

    function YB(BB, TB, dB) {
      let VB = TB.clipPlane ?? dB.clipPlane;
      gB(BB, "vClipPlane", VB), VB = TB.clipPlane2 ?? dB.clipPlane2, gB(BB, "vClipPlane2", VB), VB = TB.clipPlane3 ?? dB.clipPlane3, gB(BB, "vClipPlane3", VB), VB = TB.clipPlane4 ?? dB.clipPlane4, gB(BB, "vClipPlane4", VB), VB = TB.clipPlane5 ?? dB.clipPlane5, gB(BB, "vClipPlane5", VB), VB = TB.clipPlane6 ?? dB.clipPlane6, gB(BB, "vClipPlane6", VB)
    }

    function gB(BB, TB, dB) {
      if (dB) {
        const pB = VB.c.jU()?.floatingOriginOffset || yB.p.ZeroReadOnly;
        BB.setFloat4(TB, dB.normal.x, dB.normal.y, dB.normal.z, dB.d + yB.p.Dot(dB.normal, pB))
      }
    }
  },
  39088: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    class VB {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(BB, TB) {
        this._defines[BB] || (BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB), this._defines[BB] = new Array), this._defines[BB].push(TB)
      }
      addCPUSkinningFallback(BB, TB) {
        this._mesh = TB, BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(BB, TB) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, BB = BB.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), TB._bonesComputationForcedToCPU = !0;
          const dB = this._mesh.jU();
          for (let BB = 0; BB < dB.meshes.length; BB++) {
            const VB = dB.meshes[BB];
            if (VB.material) {
              if (VB.computeBonesUsingShaders && 0 !== VB.numBoneInfluencers)
                if (VB.material.getEffect() === TB) VB.computeBonesUsingShaders = !1;
                else if (VB.oN)
                for (const BB of VB.oN) {
                  if (BB.effect === TB) {
                    VB.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && VB.computeBonesUsingShaders && VB.numBoneInfluencers > 0 && (VB.computeBonesUsingShaders = !1)
          }
        } else {
          const TB = this._defines[this._currentRank];
          if (TB)
            for (let dB = 0; dB < TB.length; dB++) BB = BB.replace("#define " + TB[dB], "");
          this._currentRank++
        }
        return BB
      }
    }
  },
  39040: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => vB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38848),
      lB = dB(36150),
      JB = dB(36148),
      YB = dB(39045),
      gB = dB(38880),
      oB = dB(37651),
      kB = dB(36690),
      LB = dB(39069),
      OB = dB(38772);
    let DB = (() => {
      var BB;
      let TB, dB, pB, lB, JB, YB, gB, oB, kB, LB, DB, uB, HB = [];
      return BB = class {
        constructor() {
          this._func = (0, VB.h)(this, HB), this.reset()
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
          OB.c.Clone((() => BB), this)
        }
        serialize() {
          return OB.c.Serialize(this)
        }
        parse(BB, TB, dB) {
          OB.c.Parse((() => this), BB, TB, dB)
        }
      }, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], lB = [(0, yB.W)()], JB = [(0, yB.W)()], YB = [(0, yB.W)()], gB = [(0, yB.W)()], oB = [(0, yB.W)()], kB = [(0, yB.W)()], LB = [(0, yB.W)()], DB = [(0, yB.W)()], uB = [(0, yB.W)()], (0, VB.g)(BB, null, TB, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: BB => "func" in BB,
            get: BB => BB.func
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, dB, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: BB => "backFunc" in BB,
            get: BB => BB.backFunc
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, pB, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcRef" in BB,
            get: BB => BB.funcRef
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, lB, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcMask" in BB,
            get: BB => BB.funcMask
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, JB, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilFail" in BB,
            get: BB => BB.opStencilFail
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, YB, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opDepthFail" in BB,
            get: BB => BB.opDepthFail
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, gB, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilDepthPass" in BB,
            get: BB => BB.opStencilDepthPass
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, oB, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilFail" in BB,
            get: BB => BB.backOpStencilFail
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, kB, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpDepthFail" in BB,
            get: BB => BB.backOpDepthFail
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, LB, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilDepthPass" in BB,
            get: BB => BB.backOpStencilDepthPass
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, DB, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: BB => "mask" in BB,
            get: BB => BB.mask
          },
          metadata: OB
        }, null, HB), (0, VB.g)(BB, null, uB, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "enabled" in BB,
            get: BB => BB.enabled
          },
          metadata: OB
        }, null, HB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB
    })();
    var uB = dB(39073),
      HB = dB(38671),
      EB = dB(38629);
    let vB = (() => {
      var BB;
      let TB, dB, EB, vB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB, FB, KB, rB, IB, cB, SB, PB, QB, RB, aB, ZB, XB, WB, hB, CB, GB = [],
        qB = [],
        xB = [],
        jB = [],
        AB = [],
        bB = [],
        nB = [],
        eB = [],
        BT = [],
        TT = [],
        dT = [],
        VT = [],
        yT = [],
        pT = [],
        lT = [],
        JT = [],
        YT = [],
        gT = [],
        oT = [],
        kT = [],
        LT = [],
        OT = [],
        DT = [],
        uT = [],
        HT = [],
        ET = [],
        vT = [],
        mT = [],
        iT = [],
        NT = [],
        tT = [],
        fT = [],
        sT = [],
        MT = [],
        zT = [],
        wT = [],
        UT = [],
        FT = [],
        KT = [],
        rT = [],
        IT = [],
        cT = [],
        ST = [],
        PT = [],
        QT = [],
        RT = [],
        aT = [],
        ZT = [],
        XT = [],
        WT = [],
        hT = [];
      return BB = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(TB) {
          this._useVertexPulling !== TB && (this._useVertexPulling = TB, this.VdB(BB.MiscDirtyFlag))
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
        set alpha(TB) {
          if (this._alpha === TB) return;
          const dB = this._alpha;
          this._alpha = TB, 1 !== dB && 1 !== TB || this.VdB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(TB) {
          this._backFaceCulling !== TB && (this._backFaceCulling = TB, this.VdB(BB.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(TB) {
          const dB = Math.max(0, Math.min(0 | TB, 4));
          this._textureRepetitionMode !== dB && (this._textureRepetitionMode = dB, this.VdB(BB.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(TB) {
          this._cullBackFaces !== TB && (this._cullBackFaces = TB, this.VdB(BB.TextureDirtyFlag))
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
          this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new lB.e), this._onBindObservable
        }
        set onBind(BB) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(BB)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new lB.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new lB.e), this._onEffectCreatedObservable
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
        setAlphaMode(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[dB] !== TB && (this._alphaMode[dB] = TB, this.VdB(BB.TextureDirtyFlag))
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
        set fogEnabled(TB) {
          this._fogEnabled !== TB && (this._fogEnabled = TB, this.VdB(BB.MiscDirtyFlag))
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
        set wireframe(TB) {
          this.fillMode = TB ? BB.WireFrameFillMode : BB.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case BB.PointFillMode:
            case BB.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(TB) {
          this.fillMode = TB ? BB.PointFillMode : BB.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(TB) {
          this._fillMode !== TB && (this._fillMode = TB, this.VdB(BB.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(BB) {
          const TB = this.jU().PD().getCaps().fragmentDepthSupported;
          BB && !TB && oB.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && TB, this._markAllSubMeshesAsMiscDirty()
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
        constructor(TB, dB, yB) {
          let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, VB.h)(this, GB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, VB.h)(this, qB, void 0), this.uniqueId = ((0, VB.h)(this, xB), (0, VB.h)(this, jB, void 0)), this._loadedUniqueId = (0, VB.h)(this, AB), this.name = (0, VB.h)(this, bB, void 0), this.metadata = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, null)), this._internalMetadata = (0, VB.h)(this, BT), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, VB.h)(this, TT, !1), this.checkReadyOnlyOnce = ((0, VB.h)(this, dT), (0, VB.h)(this, VT, !1)), this.state = ((0, VB.h)(this, yT), (0, VB.h)(this, pT, "")), this._alpha = ((0, VB.h)(this, lT), (0, VB.h)(this, JT, 1)), this.inspectableCustomProperties = (0, VB.h)(this, YT), this._backFaceCulling = (0, VB.h)(this, gT, !0), this._textureRepetitionMode = ((0, VB.h)(this, oT), (0, VB.h)(this, kT, 0)), this.textureRepetitionHexTilingParams = ((0, VB.h)(this, LT), (0, VB.h)(this, OT, [1, .6, 7, .5])), this._cullBackFaces = ((0, VB.h)(this, DT), (0, VB.h)(this, uT, !0)), this._blockDirtyMechanism = ((0, VB.h)(this, HT), !1), this.sideOrientation = (0, VB.h)(this, ET, null), this.onCompiled = ((0, VB.h)(this, vT), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.lF = new lB.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, VB.h)(this, mT, [2]), this._needDepthPrePass = ((0, VB.h)(this, iT), (0, VB.h)(this, NT, !1)), this.disableDepthWrite = ((0, VB.h)(this, tT), (0, VB.h)(this, fT, !1)), this.disableColorWrite = ((0, VB.h)(this, sT), (0, VB.h)(this, MT, !1)), this.forceDepthWrite = ((0, VB.h)(this, zT), (0, VB.h)(this, wT, !1)), this.depthFunction = ((0, VB.h)(this, UT), (0, VB.h)(this, FT, 0)), this.separateCullingPass = ((0, VB.h)(this, KT), (0, VB.h)(this, rT, !1)), this._fogEnabled = ((0, VB.h)(this, IT), (0, VB.h)(this, cT, !0)), this.pointSize = ((0, VB.h)(this, ST), (0, VB.h)(this, PT, 1)), this.zOffset = ((0, VB.h)(this, QT), (0, VB.h)(this, RT, 0)), this.zOffsetUnits = ((0, VB.h)(this, aT), (0, VB.h)(this, ZT, 0)), this.clipPlane = (0, VB.h)(this, XT), this.stencil = new DB, this._isVertexOutputInvariant = (0, VB.h)(this, WT, BB.ForceVertexOutputInvariant), this._materialContext = (0, VB.h)(this, hT), this._useUBO = !1, this._fillMode = BB.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = TB;
          const oB = dB || JB.c.LastCreatedScene;
          oB && (this._scene = oB, this._dirtyCallbacks = {}, this._forceGLSL = YB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = TB || pB.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.PD().createMaterialContext(), this._drawWrapper = new LB.b(this._scene.PD(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new gB.c(this._scene.PD(), void 0, void 0, TB), this._useUBO = this.jU().PD().supportsUniformBuffers, this._createUniformBuffer(), yB || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), BB.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const BB = this.jU().PD();
          this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new gB.c(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new gB.c(this._scene.PD(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(BB, TB) {
          return !0
        }
        isReadyForSubMesh(BB, TB, dB) {
          const VB = TB.materialDefines;
          return !!VB && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = VB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        jU() {
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
          let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const dB = this.jU().meshes;
          for (const BB of dB)
            if (BB.oN)
              for (const dB of BB.oN)
                if (dB.XD() === this)
                  for (const BB of dB._drawWrappers) BB && this._materialContext === BB.materialContext && (BB._wasPreviouslyReady = !1, BB._wasPreviouslyUsingInstances = null, BB._forceRebindOnNextCall = TB);
          TB && this.VdB(BB.AllDirtyFlag)
        }
        _preBind(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const VB = this._scene.PD(),
            yB = (null == dB ? this.sideOrientation : dB) === BB.ClockWiseSideOrientation,
            pB = TB || this._getDrawWrapper();
          return (0, HB.d)(pB) && pB.materialContext && (pB.materialContext.useVertexPulling = this.useVertexPulling), VB.enableEffect(pB), VB.setState(this.backFaceCulling, this.zOffset, !1, yB, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), yB
        }
        bind(BB, TB) {}
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          this._eventInfo.ubo = BB, this._callbackPluginEventGeneric(8, this._eventInfo), BB.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(BB, TB, dB) {
          const VB = dB._drawWrapper;
          this._eventInfo.subMesh = dB, this._callbackPluginEventBindForSubMesh(this._eventInfo), VB._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(BB) {}
        bindView(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.jU().getViewMatrix())
        }
        bindViewProjection(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.jU().getTransformMatrix()), BB.setMatrix("projection", this.jU().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.jU().getInverseProjectionMatrix()))
        }
        bindEyePosition(BB, TB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(BB, TB)
        }
        _afterBind(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && TB && (this._needToBindSceneUbo = !1, (0, uB.r)(TB, this.jU().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && BB && this._onBindObservable.notifyObservers(BB), this.disableDepthWrite) {
            const BB = this._scene.PD();
            this._cachedDepthWriteState = BB.getDepthWrite(), BB.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const BB = this._scene.PD();
            this._cachedColorWriteState = BB.getColorWrite(), BB.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const BB = this._scene.PD();
            this._cachedDepthFunctionState = BB.getDepthFunction() || 0, BB.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.PD().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.PD().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.PD().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(TB, dB) {
          const VB = {};
          if (this._serializePlugins(VB), BB._ParsePlugins(VB, TB, this._scene, dB), this.pluginManager)
            for (const BB of this.pluginManager._plugins) {
              const dB = TB.pluginManager.getPlugin(BB.name);
              dB && BB.copyTo(dB)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const BB = [];
            for (const TB in this.meshMap) {
              const dB = this.meshMap[TB];
              dB && BB.push(dB)
            }
            return BB
          }
          return this._scene.meshes.filter((BB => BB.material === this))
        }
        forceCompilation(BB, TB, dB, VB) {
          const yB = {
              clipPlane: !1,
              useInstances: !1,
              ...dB
            },
            pB = this.jU(),
            lB = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const JB = () => {
            if (!this._scene || !this._scene.PD()) return;
            const dB = pB.clipPlane;
            if (yB.clipPlane && (pB.clipPlane = new kB.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let dB = !0,
                pB = null;
              if (BB.oN) {
                const TB = new YB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
                TB.materialDefines && (TB.materialDefines._renderId = -1), this.isReadyForSubMesh(BB, TB, yB.useInstances) || (TB.effect && TB.effect.getCompilationError() && TB.effect.allFallbacksProcessed() ? pB = TB.effect.getCompilationError() : (dB = !1, setTimeout(JB, 16)))
              }
              dB && (this.allowShaderHotSwapping = lB, pB && VB && VB(pB), TB && TB(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = lB, TB && TB(this)) : setTimeout(JB, 16);
            yB.clipPlane && (pB.clipPlane = dB)
          };
          JB()
        }
        async forceCompilationAsync(BB, TB) {
          return await new Promise(((dB, VB) => {
            this.forceCompilation(BB, (() => {
              dB()
            }), TB, (BB => {
              VB(BB)
            }))
          }))
        }
        VdB(TB) {
          this.jU().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, TB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), TB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._TextureDirtyCallBack), TB & BB.LightDirtyFlag && BB._DirtyCallbackArray.push(BB._LightsDirtyCallBack), TB & BB.FresnelDirtyFlag && BB._DirtyCallbackArray.push(BB._FresnelDirtyCallBack), TB & BB.AttributesDirtyFlag && BB._DirtyCallbackArray.push(BB._AttributeDirtyCallBack), TB & BB.MiscDirtyFlag && BB._DirtyCallbackArray.push(BB._MiscDirtyCallBack), TB & BB.PrePassDirtyFlag && BB._DirtyCallbackArray.push(BB._PrePassDirtyCallBack), BB._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(BB._RunDirtyCallBacks), this.jU().resetCachedMaterial())
        }
        resetDrawCache() {
          const BB = this.jU().meshes;
          for (const TB of BB)
            if (TB.oN)
              for (const BB of TB.oN) BB.XD() === this && BB.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(BB) {
          const TB = this.jU();
          if (TB.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const dB = TB.meshes;
          for (const VB of dB)
            if (VB.oN)
              for (const dB of VB.oN) {
                if ((dB.XD() || (TB._hasDefaultMaterial ? TB.defaultMaterial : null)) === this)
                  for (const TB of dB._drawWrappers) TB && TB.defines && TB.defines.markAllAsDirty && this._materialContext === TB.materialContext && BB(TB.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.jU().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const BB = this.jU().enablePrePassRenderer();
          BB && BB.VdB()
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
            this.lF.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(BB)
            }))
          }
        }
        setPrePassRenderer(BB) {
          return !1
        }
        dispose(BB, TB, dB) {
          const VB = this.jU();
          if (VB.stopAnimation(this), VB.freeProcessedMaterials(), VB.removeMaterial(this), this._eventInfo.forceDisposeTextures = TB, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const BB = this._parentContainer.materials.indexOf(this);
            BB > -1 && this._parentContainer.materials.splice(BB, 1), this._parentContainer = null
          }
          if (!0 !== dB)
            if (this.meshMap)
              for (const yB in this.meshMap) {
                const BB = this.meshMap[yB];
                this._disposeMeshResources(BB)
              } else {
                const BB = VB.meshes;
                for (const TB of BB) this._disposeMeshResources(TB)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.lF.notifyObservers(this), this.lF.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(BB) {
          if (!BB) return;
          const TB = BB.geometry,
            dB = BB._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (BB.oN && dB)
              for (const VB of BB.oN) {
                const BB = VB._drawWrappers;
                for (let yB = 0; yB < BB.length; yB++) {
                  const pB = BB[yB]?.effect;
                  if (!pB) continue;
                  dB[yB] === this && (TB?._releaseVertexArrayObject(pB), VB._removeDrawWrapper(yB, !0, !0))
                }
              }
          } else TB?._releaseVertexArrayObject(this._drawWrapper.effect);
          BB.material !== this || BB.myB || (BB.material = null)
        }
        serialize() {
          const BB = OB.c.Serialize(this);
          return BB.stencil = this.stencil.serialize(), BB.uniqueId = this.uniqueId, this._serializePlugins(BB), BB
        }
        _serializePlugins(BB) {
          if (BB.plugins = {}, this.pluginManager)
            for (const TB of this.pluginManager._plugins) TB.doNotSerialize || (BB.plugins[TB.getClassName()] = TB.serialize())
        }
        static ParseAlphaMode(BB, TB) {
          void 0 !== BB._alphaMode ? TB._alphaMode = Array.isArray(BB._alphaMode) ? [...BB._alphaMode] : [BB._alphaMode] : void 0 !== BB.alphaMode ? TB._alphaMode = Array.isArray(BB.alphaMode) ? [...BB.alphaMode] : [BB.alphaMode] : TB._alphaMode = [2]
        }
        static Parse(TB, dB, VB) {
          if (TB.customType) {
            if ("BABYLON.PBRMaterial" === TB.customType && TB.overloadedAlbedo && (TB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return oB.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else TB.customType = "BABYLON.StandardMaterial";
          const yB = pB.h.Instantiate(TB.customType).Parse(TB, dB, VB);
          return yB._loadedUniqueId = TB.uniqueId, BB.ParseAlphaMode(TB, yB), yB
        }
        static _ParsePlugins(BB, TB, dB, VB) {
          if (BB.plugins)
            for (const yB in BB.plugins) {
              const lB = BB.plugins[yB];
              let JB = TB.pluginManager?.getPlugin(lB.name);
              if (!JB) {
                const BB = pB.h.Instantiate("BABYLON." + yB);
                BB && (JB = new BB(TB))
              }
              JB?.parse(lB, dB, VB)
            }
        }
      }, (() => {
        const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], EB = [(0, yB.W)()], vB = [(0, yB.W)()], mB = [(0, yB.W)()], iB = [(0, yB.W)()], NB = [(0, yB.W)()], tB = [(0, yB.W)("alpha")], fB = [(0, yB.W)("backFaceCulling")], sB = [(0, yB.W)("textureRepetitionMode")], MB = [(0, yB.W)("textureRepetitionHexTilingParams")], zB = [(0, yB.W)("cullBackFaces")], wB = [(0, yB.W)()], UB = [(0, yB.W)()], FB = [(0, yB.W)()], KB = [(0, yB.W)()], rB = [(0, yB.W)()], IB = [(0, yB.W)()], cB = [(0, yB.W)()], SB = [(0, yB.W)()], PB = [(0, yB.W)("fogEnabled")], QB = [(0, yB.W)()], RB = [(0, yB.W)()], aB = [(0, yB.W)()], ZB = [(0, yB.W)()], XB = [(0, yB.W)()], WB = [(0, yB.W)()], hB = [(0, yB.W)()], CB = [(0, yB.W)()], (0, VB.g)(BB, null, ZB, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointsCloud" in BB,
            get: BB => BB.pointsCloud
          },
          metadata: pB
        }, null, GB), (0, VB.g)(BB, null, XB, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fillMode" in BB,
            get: BB => BB.fillMode
          },
          metadata: pB
        }, null, GB), (0, VB.g)(BB, null, WB, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLogarithmicDepth" in BB,
            get: BB => BB.useLogarithmicDepth
          },
          metadata: pB
        }, null, GB), (0, VB.g)(BB, null, CB, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "transparencyMode" in BB,
            get: BB => BB.transparencyMode
          },
          metadata: pB
        }, null, GB), (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, TB) => {
              BB.id = TB
            }
          },
          metadata: pB
        }, qB, xB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, TB) => {
              BB.uniqueId = TB
            }
          },
          metadata: pB
        }, jB, AB), (0, VB.g)(null, null, EB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, TB) => {
              BB.name = TB
            }
          },
          metadata: pB
        }, bB, nB), (0, VB.g)(null, null, vB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, TB) => {
              BB.metadata = TB
            }
          },
          metadata: pB
        }, eB, BT), (0, VB.g)(null, null, mB, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnEveryCall" in BB,
            get: BB => BB.checkReadyOnEveryCall,
            set: (BB, TB) => {
              BB.checkReadyOnEveryCall = TB
            }
          },
          metadata: pB
        }, TT, dT), (0, VB.g)(null, null, iB, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnlyOnce" in BB,
            get: BB => BB.checkReadyOnlyOnce,
            set: (BB, TB) => {
              BB.checkReadyOnlyOnce = TB
            }
          },
          metadata: pB
        }, VT, yT), (0, VB.g)(null, null, NB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, TB) => {
              BB.state = TB
            }
          },
          metadata: pB
        }, pT, lT), (0, VB.g)(null, null, tB, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alpha" in BB,
            get: BB => BB._alpha,
            set: (BB, TB) => {
              BB._alpha = TB
            }
          },
          metadata: pB
        }, JT, YT), (0, VB.g)(null, null, fB, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_backFaceCulling" in BB,
            get: BB => BB._backFaceCulling,
            set: (BB, TB) => {
              BB._backFaceCulling = TB
            }
          },
          metadata: pB
        }, gT, oT), (0, VB.g)(null, null, sB, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_textureRepetitionMode" in BB,
            get: BB => BB._textureRepetitionMode,
            set: (BB, TB) => {
              BB._textureRepetitionMode = TB
            }
          },
          metadata: pB
        }, kT, LT), (0, VB.g)(null, null, MB, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRepetitionHexTilingParams" in BB,
            get: BB => BB.textureRepetitionHexTilingParams,
            set: (BB, TB) => {
              BB.textureRepetitionHexTilingParams = TB
            }
          },
          metadata: pB
        }, OT, DT), (0, VB.g)(null, null, zB, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: BB => "_cullBackFaces" in BB,
            get: BB => BB._cullBackFaces,
            set: (BB, TB) => {
              BB._cullBackFaces = TB
            }
          },
          metadata: pB
        }, uT, HT), (0, VB.g)(null, null, wB, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: BB => "sideOrientation" in BB,
            get: BB => BB.sideOrientation,
            set: (BB, TB) => {
              BB.sideOrientation = TB
            }
          },
          metadata: pB
        }, ET, vT), (0, VB.g)(null, null, UB, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alphaMode" in BB,
            get: BB => BB._alphaMode,
            set: (BB, TB) => {
              BB._alphaMode = TB
            }
          },
          metadata: pB
        }, mT, iT), (0, VB.g)(null, null, FB, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: BB => "_needDepthPrePass" in BB,
            get: BB => BB._needDepthPrePass,
            set: (BB, TB) => {
              BB._needDepthPrePass = TB
            }
          },
          metadata: pB
        }, NT, tT), (0, VB.g)(null, null, KB, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableDepthWrite" in BB,
            get: BB => BB.disableDepthWrite,
            set: (BB, TB) => {
              BB.disableDepthWrite = TB
            }
          },
          metadata: pB
        }, fT, sT), (0, VB.g)(null, null, rB, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableColorWrite" in BB,
            get: BB => BB.disableColorWrite,
            set: (BB, TB) => {
              BB.disableColorWrite = TB
            }
          },
          metadata: pB
        }, MT, zT), (0, VB.g)(null, null, IB, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceDepthWrite" in BB,
            get: BB => BB.forceDepthWrite,
            set: (BB, TB) => {
              BB.forceDepthWrite = TB
            }
          },
          metadata: pB
        }, wT, UT), (0, VB.g)(null, null, cB, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: BB => "depthFunction" in BB,
            get: BB => BB.depthFunction,
            set: (BB, TB) => {
              BB.depthFunction = TB
            }
          },
          metadata: pB
        }, FT, KT), (0, VB.g)(null, null, SB, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "separateCullingPass" in BB,
            get: BB => BB.separateCullingPass,
            set: (BB, TB) => {
              BB.separateCullingPass = TB
            }
          },
          metadata: pB
        }, rT, IT), (0, VB.g)(null, null, PB, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_fogEnabled" in BB,
            get: BB => BB._fogEnabled,
            set: (BB, TB) => {
              BB._fogEnabled = TB
            }
          },
          metadata: pB
        }, cT, ST), (0, VB.g)(null, null, QB, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointSize" in BB,
            get: BB => BB.pointSize,
            set: (BB, TB) => {
              BB.pointSize = TB
            }
          },
          metadata: pB
        }, PT, QT), (0, VB.g)(null, null, RB, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffset" in BB,
            get: BB => BB.zOffset,
            set: (BB, TB) => {
              BB.zOffset = TB
            }
          },
          metadata: pB
        }, RT, aT), (0, VB.g)(null, null, aB, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffsetUnits" in BB,
            get: BB => BB.zOffsetUnits,
            set: (BB, TB) => {
              BB.zOffsetUnits = TB
            }
          },
          metadata: pB
        }, ZT, XT), (0, VB.g)(null, null, hB, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: BB => "_isVertexOutputInvariant" in BB,
            get: BB => BB._isVertexOutputInvariant,
            set: (BB, TB) => {
              BB._isVertexOutputInvariant = TB
            }
          },
          metadata: pB
        }, WT, hT), pB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pB
        })
      })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB.CounterClockWiseSideOrientation = 1, BB.ImageProcessingDirtyFlag = 64, BB.TextureDirtyFlag = 1, BB.LightDirtyFlag = 2, BB.FresnelDirtyFlag = 4, BB.AttributesDirtyFlag = 8, BB.MiscDirtyFlag = 16, BB.PrePassDirtyFlag = 32, BB.AllDirtyFlag = 127, BB.MATERIAL_OPAQUE = 0, BB.MATERIAL_ALPHATEST = 1, BB.MATERIAL_ALPHABLEND = 2, BB.MATERIAL_ALPHATESTANDBLEND = 3, BB.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, BB.MATERIAL_NORMALBLENDMETHOD_RNM = 1, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.OnEventObservable = new lB.e, BB.ForceVertexOutputInvariant = !1, BB._AllDirtyCallBack = BB => BB.markAllAsDirty(), BB._ImageProcessingDirtyCallBack = BB => BB.markAsImageProcessingDirty(), BB._TextureDirtyCallBack = BB => BB.markAsTexturesDirty(), BB._FresnelDirtyCallBack = BB => BB.markAsFresnelDirty(), BB._MiscDirtyCallBack = BB => BB.markAsMiscDirty(), BB._PrePassDirtyCallBack = BB => BB.markAsPrePassDirty(), BB._LightsDirtyCallBack = BB => BB.markAsLightDirty(), BB._AttributeDirtyCallBack = BB => BB.markAsAttributesDirty(), BB._FresnelAndMiscDirtyCallBack = TB => {
        BB._FresnelDirtyCallBack(TB), BB._MiscDirtyCallBack(TB)
      }, BB._TextureAndMiscDirtyCallBack = TB => {
        BB._TextureDirtyCallBack(TB), BB._MiscDirtyCallBack(TB)
      }, BB._DirtyCallbackArray = [], BB._RunDirtyCallBacks = TB => {
        for (const dB of BB._DirtyCallbackArray) dB(TB)
      }, BB
    })();
    Object.getOwnPropertyDescriptor(vB.prototype, "pluginManager") || Object.defineProperty(vB.prototype, "pluginManager", (0, EB.d)("Material", "pluginManager"))
  },
  39078: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(38652);
    class yB {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(BB) {
        this._DiffuseTextureEnabled !== BB && (this._DiffuseTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(BB) {
        this._BaseWeightTextureEnabled !== BB && (this._BaseWeightTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(BB) {
        this._BaseDiffuseRoughnessTextureEnabled !== BB && (this._BaseDiffuseRoughnessTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(BB) {
        this._DetailTextureEnabled !== BB && (this._DetailTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(BB) {
        this._DecalMapEnabled !== BB && (this._DecalMapEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(BB) {
        this._AmbientTextureEnabled !== BB && (this._AmbientTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(BB) {
        this._OpacityTextureEnabled !== BB && (this._OpacityTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(BB) {
        this._ReflectionTextureEnabled !== BB && (this._ReflectionTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(BB) {
        this._EmissiveTextureEnabled !== BB && (this._EmissiveTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(BB) {
        this._SpecularTextureEnabled !== BB && (this._SpecularTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(BB) {
        this._BumpTextureEnabled !== BB && (this._BumpTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(BB) {
        this._LightmapTextureEnabled !== BB && (this._LightmapTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(BB) {
        this._RefractionTextureEnabled !== BB && (this._RefractionTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(BB) {
        this._ColorGradingTextureEnabled !== BB && (this._ColorGradingTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(BB) {
        this._FresnelEnabled !== BB && (this._FresnelEnabled = BB, VB.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(BB) {
        this._ClearCoatTextureEnabled !== BB && (this._ClearCoatTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(BB) {
        this._ClearCoatBumpTextureEnabled !== BB && (this._ClearCoatBumpTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(BB) {
        this._ClearCoatTintTextureEnabled !== BB && (this._ClearCoatTintTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(BB) {
        this._SheenTextureEnabled !== BB && (this._SheenTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(BB) {
        this._AnisotropicTextureEnabled !== BB && (this._AnisotropicTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(BB) {
        this._ThicknessTextureEnabled !== BB && (this._ThicknessTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(BB) {
        this._RefractionIntensityTextureEnabled !== BB && (this._RefractionIntensityTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(BB) {
        this._TranslucencyIntensityTextureEnabled !== BB && (this._TranslucencyIntensityTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(BB) {
        this._TranslucencyColorTextureEnabled !== BB && (this._TranslucencyColorTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(BB) {
        this._IridescenceTextureEnabled !== BB && (this._IridescenceTextureEnabled = BB, VB.c.MarkAllMaterialsAsDirty(1))
      }
    }
    yB._DiffuseTextureEnabled = !0, yB._BaseWeightTextureEnabled = !0, yB._BaseDiffuseRoughnessTextureEnabled = !0, yB._DetailTextureEnabled = !0, yB._DecalMapEnabled = !0, yB._AmbientTextureEnabled = !0, yB._OpacityTextureEnabled = !0, yB._ReflectionTextureEnabled = !0, yB._EmissiveTextureEnabled = !0, yB._SpecularTextureEnabled = !0, yB._BumpTextureEnabled = !0, yB._LightmapTextureEnabled = !0, yB._RefractionTextureEnabled = !0, yB._ColorGradingTextureEnabled = !0, yB._FresnelEnabled = !0, yB._ClearCoatTextureEnabled = !0, yB._ClearCoatBumpTextureEnabled = !0, yB._ClearCoatTintTextureEnabled = !0, yB._SheenTextureEnabled = !0, yB._AnisotropicTextureEnabled = !0, yB._ThicknessTextureEnabled = !0, yB._RefractionIntensityTextureEnabled = !0, yB._TranslucencyIntensityTextureEnabled = !0, yB._TranslucencyColorTextureEnabled = !0, yB._IridescenceTextureEnabled = !0
  },
  39073: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => NB,
      D: () => wB,
      F: () => UB,
      G: () => OB,
      H: () => LB,
      I: () => XB,
      L: () => PB,
      P: () => cB,
      Q: () => IB,
      S: () => mB,
      W: () => KB,
      Z: () => WB,
      _: () => hB,
      bb: () => CB,
      d: () => rB,
      f: () => tB,
      fb: () => jB,
      h: () => kB,
      j: () => EB,
      jb: () => qB,
      m: () => vB,
      n: () => zB,
      nb: () => xB,
      p: () => YB,
      q: () => uB,
      qb: () => DB,
      r: () => HB,
      u: () => iB,
      x: () => FB
    });
    var VB = dB(37651),
      yB = dB(36148),
      pB = dB(38960),
      lB = dB(39075),
      JB = dB(39078);

    function YB(BB, TB, dB) {
      if (!BB || BB.LOGARITHMICDEPTH || BB.indexOf && BB.indexOf("LOGARITHMICDEPTH") >= 0) {
        const BB = dB.activeCamera;
        1 === BB.mode && VB.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), TB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
      }
    }
    const gB = {
        r: 0,
        g: 0,
        b: 0
      },
      oB = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function kB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      dB && BB.fogEnabled && (!TB || TB.applyFog) && 0 !== BB.fogMode && (dB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), VB ? (BB.fogColor.toLinearSpaceToRef(gB, BB.PD().useExactSrgbConversions), dB.setColor3("vFogColor", gB)) : dB.setColor3("vFogColor", BB.fogColor))
    }

    function LB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
      const kB = BB.numMaxInfluencers || BB.numInfluencers;
      return kB <= 0 ? 0 : (TB.push("#define MORPHTARGETS"), BB.hasPositions && TB.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), BB.hasNormals && TB.push("#define MORPHTARGETTEXTURE_HASNORMALS"), BB.hasTangents && TB.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), BB.hasUVs && TB.push("#define MORPHTARGETTEXTURE_HASUVS"), BB.hasUV2s && TB.push("#define MORPHTARGETTEXTURE_HASUV2S"), BB.hasColors && TB.push("#define MORPHTARGETTEXTURE_HASCOLORS"), BB.supportsPositions && yB && TB.push("#define MORPHTARGETS_POSITION"), BB.supportsNormals && pB && TB.push("#define MORPHTARGETS_NORMAL"), BB.supportsTangents && lB && TB.push("#define MORPHTARGETS_TANGENT"), BB.supportsUVs && JB && TB.push("#define MORPHTARGETS_UV"), BB.supportsUV2s && YB && TB.push("#define MORPHTARGETS_UV2"), BB.supportsColors && gB && TB.push("#define MORPHTARGETS_COLOR"), TB.push("#define NUM_MORPH_INFLUENCERS " + kB), BB.isUsingTextureForTargets && TB.push("#define MORPHTARGETS_TEXTURE"), oB.NUM_MORPH_INFLUENCERS = kB, oB.NORMAL = pB, oB.TANGENT = lB, oB.UV = JB, oB.UV2 = YB, oB.COLOR = gB, OB(dB, VB, oB, yB), kB)
    }

    function OB(BB, TB, dB) {
      let pB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const lB = dB.NUM_MORPH_INFLUENCERS;
      if (lB > 0 && yB.c.LastCreatedEngine) {
        const JB = yB.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          YB = TB.morphTargetManager;
        if (YB?.isUsingTextureForTargets) return;
        const gB = YB && YB.supportsPositions && pB,
          oB = YB && YB.supportsNormals && dB.NORMAL,
          kB = YB && YB.supportsTangents && dB.TANGENT,
          LB = YB && YB.supportsUVs && dB.UV1,
          OB = YB && YB.supportsUV2s && dB.UV2,
          DB = YB && YB.supportsColors && dB.VERTEXCOLOR;
        for (let dB = 0; dB < lB; dB++) gB && BB.push("position" + dB), oB && BB.push("normal" + dB), kB && BB.push("tangent" + dB), LB && BB.push("uv_" + dB), OB && BB.push("uv2_" + dB), DB && BB.push("color" + dB), BB.length > JB && VB.b.Error("Cannot add more vertex attributes for mesh " + TB.name)
      }
    }

    function DB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      BB.push("world0"), BB.push("world1"), BB.push("world2"), BB.push("world3"), TB && (BB.push("previousWorld0"), BB.push("previousWorld1"), BB.push("previousWorld2"), BB.push("previousWorld3"))
    }

    function uB(BB, TB) {
      const dB = BB.morphTargetManager;
      BB && dB && TB.setFloatArray("morphTargetInfluences", dB.influences)
    }

    function HB(BB, TB) {
      TB.bindToEffect(BB, "Scene")
    }

    function EB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        YB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        oB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        kB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        LB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (BB.texturesEnabled && yB && JB.d.ReflectionTextureEnabled) {
        if (dB.i6("reflectionMatrix", yB.getReflectionTextureMatrix()), dB.updateFloat2("vReflectionInfos", yB.level * BB.iblIntensity, LB), YB && yB.boundingBoxSize) {
          const BB = yB;
          dB.updateVector3("vReflectionPosition", BB.boundingBoxPosition), dB.updateVector3("vReflectionSize", BB.boundingBoxSize)
        }
        if (pB) {
          const BB = yB.getSize().width;
          dB.updateFloat2("vReflectionFilteringInfo", BB, Math.log2(BB))
        }
        if (oB && !TB.USEIRRADIANCEMAP) {
          const BB = yB.sphericalPolynomial;
          if (TB.USESPHERICALFROMREFLECTIONMAP && BB)
            if (TB.SPHERICAL_HARMONICS) {
              const TB = BB.preScaledHarmonics;
              dB.updateVector3("vSphericalL00", TB.l00), dB.updateVector3("vSphericalL1_1", TB.l1_1), dB.updateVector3("vSphericalL10", TB.l10), dB.updateVector3("vSphericalL11", TB.l11), dB.updateVector3("vSphericalL2_2", TB.l2_2), dB.updateVector3("vSphericalL2_1", TB.l2_1), dB.updateVector3("vSphericalL20", TB.l20), dB.updateVector3("vSphericalL21", TB.l21), dB.updateVector3("vSphericalL22", TB.l22)
            } else dB.updateFloat3("vSphericalX", BB.x.x, BB.x.y, BB.x.z), dB.updateFloat3("vSphericalY", BB.y.x, BB.y.y, BB.y.z), dB.updateFloat3("vSphericalZ", BB.z.x, BB.z.y, BB.z.z), dB.updateFloat3("vSphericalXX_ZZ", BB.xx.x - BB.zz.x, BB.xx.y - BB.zz.y, BB.xx.z - BB.zz.z), dB.updateFloat3("vSphericalYY_ZZ", BB.yy.x - BB.zz.x, BB.yy.y - BB.zz.y, BB.yy.z - BB.zz.z), dB.updateFloat3("vSphericalZZ", BB.zz.x, BB.zz.y, BB.zz.z), dB.updateFloat3("vSphericalXY", BB.xy.x, BB.xy.y, BB.xy.z), dB.updateFloat3("vSphericalYZ", BB.yz.x, BB.yz.y, BB.yz.z), dB.updateFloat3("vSphericalZX", BB.zx.x, BB.zx.y, BB.zx.z)
        } else gB && TB.USEIRRADIANCEMAP && TB.USE_IRRADIANCE_DOMINANT_DIRECTION && yB.irradianceTexture && dB.updateVector3("vReflectionDominantDirection", yB.irradianceTexture._dominantDirection);
        lB && dB.updateFloat3("vReflectionMicrosurfaceInfos", yB.getSize().width, yB.lodGenerationScale, yB.lodGenerationOffset)
      }
      kB && dB.updateColor3("vReflectionColor", VB)
    }

    function vB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (VB && JB.d.ReflectionTextureEnabled) {
        TB.LODBASEDMICROSFURACE ? dB.setTexture("reflectionSampler", VB) : (dB.setTexture("reflectionSampler", VB._lodTextureMid || VB), dB.setTexture("reflectionSamplerLow", VB._lodTextureLow || VB), dB.setTexture("reflectionSamplerHigh", VB._lodTextureHigh || VB)), TB.USEIRRADIANCEMAP && dB.setTexture("irradianceSampler", VB.irradianceTexture);
        const pB = BB.iblCdfGenerator;
        yB && pB && dB.setTexture("icdfSampler", pB.getIcdfTexture())
      }
    }

    function mB(BB, TB, dB) {
      TB._needUVs = !0, TB[dB] = !0, BB.optimizeUVAllocation && BB.getTextureMatrix().isIdentityAs3x2() ? (TB[dB + "DIRECTUV"] = BB.coordinatesIndex + 1, TB["MAINUV" + (BB.coordinatesIndex + 1)] = !0) : TB[dB + "DIRECTUV"] = 0
    }

    function iB(BB, TB, dB) {
      const VB = BB.getTextureMatrix();
      TB.i6(dB + "Matrix", VB)
    }

    function NB(BB, TB, dB) {
      dB.BAKED_VERTEX_ANIMATION_TEXTURE && dB.INSTANCES && BB.push("bakedVertexAnimationSettingsInstanced")
    }

    function tB(BB, TB, dB) {
      var VB;
      if (TB && BB && (BB.computeBonesUsingShaders && TB._bonesComputationForcedToCPU && (BB.computeBonesUsingShaders = !1), BB.useBones && BB.computeBonesUsingShaders && BB.skeleton)) {
        const yB = BB.skeleton;
        if (yB.isUsingTextureForMatrices && TB.getUniformIndex("boneTextureInfo") > -1) {
          const dB = yB.getTransformMatrixTexture(BB);
          TB.setTexture("boneSampler", dB), TB.setFloat2("boneTextureInfo", yB._textureWidth, yB._textureHeight)
        } else {
          const pB = yB.getTransformMatrices(BB);
          pB && (TB.setMatrices("mBones", pB), dB && BB.jU().prePassRenderer && BB.jU().prePassRenderer.getIndex(2) && (dB.previousBones[BB.uniqueId] || (dB.previousBones[BB.uniqueId] = pB.slice()), TB.setMatrices("mPreviousBones", dB.previousBones[BB.uniqueId]), VB = pB, dB.previousBones[BB.uniqueId].set(VB)))
        }
      }
    }

    function fB(BB, TB, dB, VB, yB) {
      let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      BB._bindLight(TB, dB, VB, yB, pB)
    }
    const sB = 4,
      MB = new WeakMap;

    function zB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const pB = Math.min(TB.lightSources.length, yB);
      for (let lB = 0; lB < pB; lB++) {
        fB(TB.lightSources[lB], lB, BB, dB, "boolean" === typeof VB ? VB : VB.SPECULARTERM, TB.receiveShadows)
      }
    }

    function wB(BB, TB, dB, VB) {
      dB.NUM_BONE_INFLUENCERS > 0 && (VB.addCPUSkinningFallback(0, TB), BB.push("matricesIndices"), BB.push("matricesWeights"), dB.NUM_BONE_INFLUENCERS > 4 && (BB.push("matricesIndicesExtra"), BB.push("matricesWeightsExtra")))
    }

    function UB(BB, TB) {
      (TB.INSTANCES || TB.THIN_INSTANCES) && DB(BB, !!TB.PREPASS_VELOCITY), TB.INSTANCESCOLOR && BB.push("instanceColor")
    }

    function FB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yB = 0;
      for (let pB = 0; pB < dB && BB["LIGHT" + pB]; pB++) pB > 0 && (yB = VB + pB, TB.addFallback(yB, "LIGHT" + pB)), BB.SHADOWS || (BB["SHADOW" + pB] && TB.addFallback(VB, "SHADOW" + pB), BB["SHADOWPCF" + pB] && TB.addFallback(VB, "SHADOWPCF" + pB), BB["SHADOWPCSS" + pB] && TB.addFallback(VB, "SHADOWPCSS" + pB), BB["SHADOWPOISSON" + pB] && TB.addFallback(VB, "SHADOWPOISSON" + pB), BB["SHADOWESM" + pB] && TB.addFallback(VB, "SHADOWESM" + pB), BB["SHADOWCLOSEESM" + pB] && TB.addFallback(VB, "SHADOWCLOSEESM" + pB));
      return yB
    }

    function KB(BB, TB, dB, VB, yB, pB, lB) {
      let JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gB = arguments.length > 9 ? arguments[9] : void 0,
        oB = arguments.length > 10 ? arguments[10] : void 0;
      if (lB._areMiscDirty) {
        lB.LOGARITHMICDEPTH = dB, lB.POINTSIZE = VB, lB.FOG = yB && function(BB, TB) {
          return TB.fogEnabled && BB.applyFog && 0 !== TB.fogMode
        }(BB, TB), lB.NONUNIFORMSCALING = BB.nonUniformScaling, lB.ALPHATEST = pB, lB.DECAL_AFTER_DETAIL = JB, lB.USE_VERTEX_PULLING = YB, lB.RIGHT_HANDED = TB.useRightHandedSystem;
        const kB = YB ? gB?.geometry?.getIndexBuffer() : null,
          LB = !!gB && gB.isUnIndexed;
        lB.VERTEX_PULLING_USE_INDEX_BUFFER = !!kB && !LB, lB.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!kB || LB) && kB.is32Bits, lB.VERTEXOUTPUT_INVARIANT = !!oB
      }
    }

    function rB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!BB.lightsEnabled || VB) return !0;
      const yB = TB.lightSources,
        pB = Math.min(yB.length, dB);
      for (let lB = 0; lB < pB; lB++)
        if (!yB[lB].areLightTexturesReady()) return !1;
      return !0
    }

    function IB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!dB._areLightsDirty) return dB._needNormals;
      const JB = pB;
      pB = function(BB, TB) {
        const dB = BB.PD().getCaps().maxUniformBuffersPerShaderStage;
        if (null == dB) return TB;
        const VB = Math.max(dB - sB, 1);
        return Math.min(TB, VB)
      }(BB, pB);
      let YB = 0;
      const gB = {
        needNormals: dB._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (BB.lightsEnabled && !lB) {
        TB.lightSources.length > pB && pB < JB && function(BB, TB, dB, yB) {
          let pB = MB.get(BB);
          pB || (pB = new Set, MB.set(BB, pB)), pB.has(yB) || (pB.add(yB), VB.b.Warn(`maxSimultaneousLights is ${TB} but this engine supports at most ${dB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${yB} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${yB+sB} uniform buffers, over the device limit of ${BB.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${dB}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${dB} or less to silence this warning.`))
        }(BB.PD(), JB, pB, Math.min(TB.lightSources.length, JB));
        for (const VB of TB.lightSources)
          if (SB(BB, TB, VB, YB, dB, yB, gB), YB++, YB === pB) break
      }
      dB.SPECULARTERM = gB.specularEnabled, dB.SHADOWS = gB.shadowEnabled;
      const oB = Math.max(pB, dB.MAXLIGHTCOUNT || 0);
      for (let VB = YB; VB < oB; VB++) void 0 !== dB["LIGHT" + VB] && (dB["LIGHT" + VB] = !1, dB["HEMILIGHT" + VB] = !1, dB["POINTLIGHT" + VB] = !1, dB["DIRLIGHT" + VB] = !1, dB["SPOTLIGHT" + VB] = !1, dB["AREALIGHT" + VB] = !1, dB["CLUSTLIGHT" + VB] = !1, dB["SHADOW" + VB] = !1, dB["SHADOWCSM" + VB] = !1, dB["SHADOWCSMDEBUG" + VB] = !1, dB["SHADOWCSMNUM_CASCADES" + VB] = !1, dB["SHADOWCSMUSESHADOWMAXZ" + VB] = !1, dB["SHADOWCSMNOBLEND" + VB] = !1, dB["SHADOWCSM_RIGHTHANDED" + VB] = !1, dB["SHADOWPCF" + VB] = !1, dB["SHADOWPCSS" + VB] = !1, dB["SHADOWPOISSON" + VB] = !1, dB["SHADOWESM" + VB] = !1, dB["SHADOWCLOSEESM" + VB] = !1, dB["SHADOWCUBE" + VB] = !1, dB["SHADOWLOWQUALITY" + VB] = !1, dB["SHADOWMEDIUMQUALITY" + VB] = !1);
      dB.LIGHTCOUNT = YB, dB.MAXLIGHTCOUNT = pB;
      const kB = BB.PD().getCaps();
      return void 0 === dB.SHADOWFLOAT && (gB.needRebuild = !0), dB.SHADOWFLOAT = gB.shadowEnabled && (kB.textureFloatRender && kB.textureFloatLinearFiltering || kB.textureHalfFloatRender && kB.textureHalfFloatLinearFiltering), dB.LIGHTMAPEXCLUDED = gB.lightmapMode, gB.needRebuild && dB.rebuild(), gB.needNormals
    }

    function cB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (TB && JB.d.ReflectionTextureEnabled) {
        if (!TB.isReadyOrNotBlocking()) return !1;
        dB._needNormals = !0, dB.REFLECTION = !0, dB.GAMMAREFLECTION = TB.gammaSpace, dB.RGBDREFLECTION = TB.isRGBD, dB.LODINREFLECTIONALPHA = TB.lodLevelInAlpha, dB.LINEARSPECULARREFLECTION = TB.linearSpecularLOD, dB.USEIRRADIANCEMAP = !1, dB.LODBASEDMICROSFURACE = BB.PD().getCaps().textureLOD;
        const lB = BB.PD();
        switch (VB && yB > 0 ? (dB.NUM_SAMPLES = "" + yB, lB._features.needTypeSuffixInShaderConstants && (dB.NUM_SAMPLES = dB.NUM_SAMPLES + "u"), dB.REALTIME_FILTERING = !0, BB.iblCdfGenerator && (dB.IBL_CDF_FILTERING = !0)) : dB.REALTIME_FILTERING = !1, dB.INVERTCUBICMAP = 6 === TB.coordinatesMode, dB.REFLECTIONMAP_3D = TB.isCube, dB.REFLECTIONMAP_OPPOSITEZ = dB.REFLECTIONMAP_3D && BB.useRightHandedSystem ? !TB.invertZ : TB.invertZ, dB.REFLECTIONMAP_CUBIC = !1, dB.REFLECTIONMAP_EXPLICIT = !1, dB.REFLECTIONMAP_PLANAR = !1, dB.REFLECTIONMAP_PROJECTION = !1, dB.REFLECTIONMAP_SKYBOX = !1, dB.REFLECTIONMAP_SPHERICAL = !1, dB.REFLECTIONMAP_EQUIRECTANGULAR = !1, dB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, dB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, TB.coordinatesMode) {
          case 0:
            dB.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            dB.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            dB.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            dB.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            dB.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            dB.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            dB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            dB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            dB.REFLECTIONMAP_CUBIC = !0, dB.USE_LOCAL_REFLECTIONMAP_CUBIC = !!TB.boundingBoxSize
        }
        5 !== TB.coordinatesMode && (TB.irradianceTexture ? (dB.USEIRRADIANCEMAP = !0, dB.USESPHERICALFROMREFLECTIONMAP = !1, dB.USESPHERICALINVERTEX = !1, TB.irradianceTexture._dominantDirection ? dB.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : dB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : TB.isCube && (dB.USESPHERICALFROMREFLECTIONMAP = !0, dB.USEIRRADIANCEMAP = !1, dB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, dB.USESPHERICALINVERTEX = pB))
      } else dB.REFLECTION = !1, dB.REFLECTIONMAP_3D = !1, dB.REFLECTIONMAP_SPHERICAL = !1, dB.REFLECTIONMAP_PLANAR = !1, dB.REFLECTIONMAP_CUBIC = !1, dB.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, dB.REFLECTIONMAP_PROJECTION = !1, dB.REFLECTIONMAP_SKYBOX = !1, dB.REFLECTIONMAP_EXPLICIT = !1, dB.REFLECTIONMAP_EQUIRECTANGULAR = !1, dB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, dB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, dB.INVERTCUBICMAP = !1, dB.USESPHERICALFROMREFLECTIONMAP = !1, dB.USEIRRADIANCEMAP = !1, dB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, dB.USESPHERICALINVERTEX = !1, dB.REFLECTIONMAP_OPPOSITEZ = !1, dB.LODINREFLECTIONALPHA = !1, dB.GAMMAREFLECTION = !1, dB.RGBDREFLECTION = !1, dB.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function SB(BB, TB, dB, VB, yB, lB, JB) {
      switch (JB.needNormals = !0, void 0 === yB["LIGHT" + VB] && (JB.needRebuild = !0), yB["LIGHT" + VB] = !0, yB["SPOTLIGHT" + VB] = !1, yB["HEMILIGHT" + VB] = !1, yB["POINTLIGHT" + VB] = !1, yB["DIRLIGHT" + VB] = !1, yB["AREALIGHT" + VB] = !1, yB["CLUSTLIGHT" + VB] = !1, dB.prepareLightSpecificDefines(yB, VB), yB["LIGHT_FALLOFF_PHYSICAL" + VB] = !1, yB["LIGHT_FALLOFF_GLTF" + VB] = !1, yB["LIGHT_FALLOFF_STANDARD" + VB] = !1, dB.falloffType) {
        case pB.b.FALLOFF_GLTF:
          yB["LIGHT_FALLOFF_GLTF" + VB] = !0;
          break;
        case pB.b.FALLOFF_PHYSICAL:
          yB["LIGHT_FALLOFF_PHYSICAL" + VB] = !0;
          break;
        case pB.b.FALLOFF_STANDARD:
          yB["LIGHT_FALLOFF_STANDARD" + VB] = !0
      }
      if (lB && !dB.specular.equalsFloats(0, 0, 0) && (JB.specularEnabled = !0), yB["SHADOW" + VB] = !1, yB["SHADOWCSM" + VB] = !1, yB["SHADOWCSMDEBUG" + VB] = !1, yB["SHADOWCSMNUM_CASCADES" + VB] = !1, yB["SHADOWCSMUSESHADOWMAXZ" + VB] = !1, yB["SHADOWCSMNOBLEND" + VB] = !1, yB["SHADOWCSM_RIGHTHANDED" + VB] = !1, yB["SHADOWPCF" + VB] = !1, yB["SHADOWPCSS" + VB] = !1, yB["SHADOWPOISSON" + VB] = !1, yB["SHADOWESM" + VB] = !1, yB["SHADOWCLOSEESM" + VB] = !1, yB["SHADOWCUBE" + VB] = !1, yB["SHADOWLOWQUALITY" + VB] = !1, yB["SHADOWMEDIUMQUALITY" + VB] = !1, TB && TB.receiveShadows && BB.shadowsEnabled && dB.shadowEnabled) {
        const TB = dB.getShadowGenerator(BB.activeCamera) ?? dB.getShadowGenerator();
        if (TB) {
          const BB = TB.getShadowMap();
          BB && BB.renderList && BB.renderList.length > 0 && (JB.shadowEnabled = !0, TB.prepareDefines(yB, VB))
        }
      }
      dB.lightmapMode != pB.b.LIGHTMAP_DEFAULT ? (JB.lightmapMode = !0, yB["LIGHTMAPEXCLUDED" + VB] = !0, yB["LIGHTMAPNOSPECULAR" + VB] = dB.lightmapMode == pB.b.LIGHTMAP_SHADOWSONLY) : (yB["LIGHTMAPEXCLUDED" + VB] = !1, yB["LIGHTMAPNOSPECULAR" + VB] = !1)
    }

    function PB(BB, TB, dB, VB, yB) {
      let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        YB = function(BB, TB) {
          let dB = !1;
          if (BB.activeCamera) {
            const VB = TB.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              yB = TB.CAMERA_PERSPECTIVE ? 1 : 0,
              pB = 1 === BB.activeCamera.mode ? 1 : 0,
              lB = 0 === BB.activeCamera.mode ? 1 : 0;
            (VB ^ pB || yB ^ lB) && (TB.CAMERA_ORTHOGRAPHIC = 1 === pB, TB.CAMERA_PERSPECTIVE = 1 === lB, dB = !0)
          }
          return dB
        }(BB, VB);
      !1 !== pB && (YB = (0, lB.f)(dB, BB, VB)), VB.DEPTHPREPASS !== !TB.getColorWrite() && (VB.DEPTHPREPASS = !VB.DEPTHPREPASS, YB = !0), VB.INSTANCES !== yB && (VB.INSTANCES = yB, YB = !0), VB.THIN_INSTANCES !== JB && (VB.THIN_INSTANCES = JB, YB = !0), YB && VB.markAsUnprocessed()
    }
    const QB = 40,
      RB = 64,
      aB = new WeakMap,
      ZB = new WeakSet;

    function XB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        JB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!TB._areAttributesDirty && TB._needNormals === TB._normals && TB._needUVs === TB._uvs) return !1;
      TB._normals = TB._needNormals, TB._uvs = TB._needUVs, TB.NORMAL = TB._needNormals && BB.isVerticesDataPresent("normal"), TB._needNormals && BB.isVerticesDataPresent("tangent") && (TB.TANGENT = !0);
      for (let VB = 1; VB <= 6; ++VB) TB["UV" + VB] = !!TB._needUVs && BB.isVerticesDataPresent(`uv${1===VB?"":VB}`);
      if (dB) {
        const dB = BB.useVertexColors && BB.isVerticesDataPresent("color");
        TB.VERTEXCOLOR = dB, TB.VERTEXALPHA = BB.hasVertexAlpha && dB && lB
      }
      return BB.isVerticesDataPresent("instanceColor") && (BB.vyB || BB.hasThinInstances) && (TB.INSTANCESCOLOR = !0), yB && function(BB, TB) {
        if (BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          TB.NUM_BONE_INFLUENCERS = BB.numBoneInfluencers;
          const dB = void 0 !== TB.BONETEXTURE;
          if (BB.skeleton.isUsingTextureForMatrices && dB) TB.BONETEXTURE = !0;
          else {
            TB.BonesPerMesh = BB.skeleton.bones.length + 1, TB.BONETEXTURE = !dB && void 0;
            const yB = BB.jU(),
              pB = yB.prePassRenderer;
            if (pB && pB.enabled) {
              const dB = -1 === pB.excludedSkinnedMesh.indexOf(BB);
              TB.BONES_VELOCITY_ENABLED = dB
            }
            const lB = !0 === TB.MULTIVIEW,
              JB = 2 * TB.BonesPerMesh + (lB ? 1 : 0);
            if (aB.get(BB.skeleton) !== JB) {
              aB.set(BB.skeleton, JB);
              const dB = yB.PD().getCaps().maxVertexUniformVectors;
              if (dB && !ZB.has(BB.skeleton)) {
                const yB = 4 * TB.BonesPerMesh,
                  pB = lB ? RB : QB,
                  JB = Math.max(dB - pB, 0);
                (yB > JB || lB && 3 * yB > dB) && (ZB.add(BB.skeleton), VB.b.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${yB} of ~${JB} usable uniform vectors${lB?" (multiview)":""} on a device reporting ${dB}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else TB.NUM_BONE_INFLUENCERS = 0, TB.BonesPerMesh = 0, void 0 !== TB.BONETEXTURE && (TB.BONETEXTURE = !1)
      }(BB, TB), pB && function(BB, TB) {
        const dB = BB.morphTargetManager;
        dB ? (TB.MORPHTARGETS_UV = dB.supportsUVs && TB.UV1, TB.MORPHTARGETS_UV2 = dB.supportsUV2s && TB.UV2, TB.MORPHTARGETS_TANGENT = dB.supportsTangents && TB.TANGENT, TB.MORPHTARGETS_NORMAL = dB.supportsNormals && TB.NORMAL, TB.MORPHTARGETS_POSITION = dB.supportsPositions, TB.MORPHTARGETS_COLOR = dB.supportsColors, TB.MORPHTARGETTEXTURE_HASUVS = dB.hasUVs, TB.MORPHTARGETTEXTURE_HASUV2S = dB.hasUV2s, TB.MORPHTARGETTEXTURE_HASTANGENTS = dB.hasTangents, TB.MORPHTARGETTEXTURE_HASNORMALS = dB.hasNormals, TB.MORPHTARGETTEXTURE_HASPOSITIONS = dB.hasPositions, TB.MORPHTARGETTEXTURE_HASCOLORS = dB.hasColors, TB.NUM_MORPH_INFLUENCERS = dB.numMaxInfluencers || dB.numInfluencers, TB.MORPHTARGETS = TB.NUM_MORPH_INFLUENCERS > 0, TB.MORPHTARGETS_TEXTURE = dB.isUsingTextureForTargets) : (TB.MORPHTARGETS_UV = !1, TB.MORPHTARGETS_UV2 = !1, TB.MORPHTARGETS_TANGENT = !1, TB.MORPHTARGETS_NORMAL = !1, TB.MORPHTARGETS_POSITION = !1, TB.MORPHTARGETS_COLOR = !1, TB.MORPHTARGETTEXTURE_HASUVS = !1, TB.MORPHTARGETTEXTURE_HASUV2S = !1, TB.MORPHTARGETTEXTURE_HASTANGENTS = !1, TB.MORPHTARGETTEXTURE_HASNORMALS = !1, TB.MORPHTARGETTEXTURE_HASPOSITIONS = !1, TB.MORPHTARGETTEXTURE_HAS_COLORS = !1, TB.MORPHTARGETS = !1, TB.NUM_MORPH_INFLUENCERS = 0)
      }(BB, TB), JB && function(BB, TB) {
        const dB = BB.bakedVertexAnimationManager;
        TB.BAKED_VERTEX_ANIMATION_TEXTURE = !(!dB || !dB.isEnabled)
      }(BB, TB), !0
    }

    function WB(BB, TB) {
      if (BB.activeCamera) {
        const dB = TB.MULTIVIEW;
        TB.MULTIVIEW = null !== BB.activeCamera.outputRenderTarget && BB.activeCamera.outputRenderTarget.getViewCount() > 1, TB.MULTIVIEW != dB && TB.markAsUnprocessed()
      }
    }

    function hB(BB, TB, dB) {
      const VB = TB.ORDER_INDEPENDENT_TRANSPARENCY,
        yB = TB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      TB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && dB, TB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.PD().getCaps().textureFloatLinearFiltering, VB === TB.ORDER_INDEPENDENT_TRANSPARENCY && yB === TB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || TB.markAsUnprocessed()
    }

    function CB(BB, TB, dB) {
      const VB = TB.PREPASS;
      if (!TB._arePrePassDirty) return;
      const yB = [{
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
      if (BB.prePassRenderer && BB.prePassRenderer.enabled && dB) {
        TB.PREPASS = !0, TB.SCENE_MRT_COUNT = BB.prePassRenderer.mrtCount, TB.PREPASS_NORMAL_WORLDSPACE = BB.prePassRenderer.generateNormalsInWorldSpace, TB.PREPASS_COLOR = !0, TB.PREPASS_COLOR_INDEX = 0;
        for (let dB = 0; dB < yB.length; dB++) {
          const VB = BB.prePassRenderer.getIndex(yB[dB].type); - 1 !== VB ? (TB[yB[dB].define] = !0, TB[yB[dB].index] = VB) : TB[yB[dB].define] = !1
        }
      } else {
        TB.PREPASS = !1;
        for (let BB = 0; BB < yB.length; BB++) TB[yB[BB].define] = !1
      }
      TB.PREPASS != VB && (TB.markAsUnprocessed(), TB.markAsImageProcessingDirty())
    }

    function GB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      yB && yB.push("Light" + BB), pB || (TB.push("vLightData" + BB, "vLightDiffuse" + BB, "vLightSpecular" + BB, "vLightDirection" + BB, "vLightWidth" + BB, "vLightHeight" + BB, "vLightFalloff" + BB, "vLightGround" + BB, "vSliceData" + BB, "vSliceRanges" + BB, "lightMatrix" + BB, "shadowsInfo" + BB, "depthValues" + BB), dB.push("shadowTexture" + BB), dB.push("depthTexture" + BB), TB.push("viewFrustumZ" + BB, "cascadeBlendFactor" + BB, "lightSizeUVCorrection" + BB, "depthCorrection" + BB, "penumbraDarkness" + BB, "frustumLengths" + BB), VB && (dB.push("projectionLightTexture" + BB), TB.push("textureProjectionMatrix" + BB)), lB && dB.push("iesLightTexture" + BB), YB && dB.push("rectAreaLightEmissionTexture" + BB), JB && (dB.push("lightDataTexture" + BB), gB || dB.push("tileMaskTexture" + BB)))
    }

    function qB(BB, TB, dB) {
      const VB = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      dB && VB.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), BB.push(...VB);
      TB.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function xB(BB, TB, dB) {
      let VB, yB, pB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        lB = null;
      if (BB.uniformsNames) {
        const JB = BB;
        VB = JB.uniformsNames, yB = JB.uniformBuffersNames, TB = JB.samplers, dB = JB.defines, pB = JB.maxSimultaneousLights || 0, lB = JB.shaderLanguage ?? null
      } else VB = BB, TB || (TB = []);
      for (let JB = 0; JB < pB && dB["LIGHT" + JB]; JB++) GB(JB, VB, TB, dB["PROJECTEDLIGHTTEXTURE" + JB], yB, !1, dB["IESLIGHTTEXTURE" + JB], dB["CLUSTLIGHT" + JB], dB["RECTAREALIGHTEMISSIONTEXTURE" + JB], 1 === lB);
      dB.NUM_MORPH_INFLUENCERS && (VB.push("morphTargetInfluences"), VB.push("morphTargetCount")), dB.BAKED_VERTEX_ANIMATION_TEXTURE && (VB.push("bakedVertexAnimationSettings"), VB.push("bakedVertexAnimationTextureSizeInverted"), VB.push("bakedVertexAnimationTime"), TB.push("bakedVertexAnimationTexture"))
    }

    function jB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      BB.addUniform("vReflectionInfos", 2), BB.addUniform("reflectionMatrix", 16), TB && BB.addUniform("vReflectionMicrosurfaceInfos", 3), dB && (BB.addUniform("vReflectionPosition", 3), BB.addUniform("vReflectionSize", 3)), VB && (BB.addUniform("vReflectionFilteringInfo", 2), BB.addUniform("vReflectionDominantDirection", 3)), pB && BB.addUniform("vReflectionColor", 3), yB && (BB.addUniform("vSphericalL00", 3), BB.addUniform("vSphericalL1_1", 3), BB.addUniform("vSphericalL10", 3), BB.addUniform("vSphericalL11", 3), BB.addUniform("vSphericalL2_2", 3), BB.addUniform("vSphericalL2_1", 3), BB.addUniform("vSphericalL20", 3), BB.addUniform("vSphericalL21", 3), BB.addUniform("vSphericalL22", 3), BB.addUniform("vSphericalX", 3), BB.addUniform("vSphericalY", 3), BB.addUniform("vSphericalZ", 3), BB.addUniform("vSphericalXX_ZZ", 3), BB.addUniform("vSphericalYY_ZZ", 3), BB.addUniform("vSphericalZZ", 3), BB.addUniform("vSphericalXY", 3), BB.addUniform("vSphericalYZ", 3), BB.addUniform("vSphericalZX", 3))
    }
  },
  39080: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(36126),
      yB = dB(39040);
    class pB extends yB.b {
      constructor(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(BB, TB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new VB.b, this._storeEffectOnSubMeshes = dB
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(BB, TB) {
        return !!BB && (!this._storeEffectOnSubMeshes || (!BB.oN || 0 === BB.oN.length || this.isReadyForSubMesh(BB, BB.oN[0], TB)))
      }
      _isReadyForSubMesh(BB) {
        const TB = BB.materialDefines;
        return !(this.checkReadyOnEveryCall || !BB.effect || !TB || TB._renderId !== this.jU().getRenderId())
      }
      bindOnlyWorldMatrix(BB) {
        this._activeEffect.setMatrix("world", BB)
      }
      bindOnlyNormalMatrix(BB) {
        this._activeEffect.setMatrix("normalMatrix", BB)
      }
      bind(BB, TB) {
        TB && this.bindForSubMesh(BB, TB, TB.oN[0])
      }
      _afterBind(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(BB, TB, dB), this.jU()._cachedEffect = TB, dB ? dB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return dB._drawWrapper._forceRebindOnNextCall || BB.isCachedMaterialInvalid(this, TB, VB)
      }
      dispose(BB, TB, dB) {
        this._activeEffect = void 0, super.dispose(BB, TB, dB)
      }
    }
  },
  39101: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      e: () => yB
    });
    const VB = new WeakMap;

    function yB(BB) {
      const TB = BB.getVertexBuffers();
      if (!TB) return null;
      let dB = VB.get(BB);
      if (dB) {
        let BB = !1;
        for (const VB in TB)
          if (!dB.has(VB)) {
            BB = !0;
            break
          } if (!BB) return dB
      } else dB = new Map, VB.set(BB, dB);
      for (const VB in TB) {
        const BB = TB[VB];
        if (BB) {
          const TB = BB.byteOffset,
            yB = BB.byteStride,
            pB = BB.type,
            lB = BB.normalized;
          dB.set(VB, {
            offset: TB,
            stride: yB,
            type: pB,
            normalized: lB
          })
        }
      }
      return dB
    }

    function pB(BB, TB) {
      TB.forEach(((TB, dB) => {
        const VB = `vp_${dB}_info`;
        BB.setFloat4(VB, TB.offset, TB.stride, TB.type, TB.normalized ? 1 : 0)
      }))
    }
  },
  39062: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      i: () => YB
    });
    var VB = dB(38745),
      yB = dB(36126),
      pB = dB(38750);
    let lB = (() => {
      var BB;
      let TB, dB, yB = [];
      return BB = class {
        static extractMinAndMaxIndexed(BB, TB, dB, VB, yB, pB) {
          for (let lB = dB; lB < dB + VB; lB++) {
            const dB = 3 * TB[lB],
              VB = BB[dB],
              JB = BB[dB + 1],
              YB = BB[dB + 2];
            yB.minimizeInPlaceFromFloats(VB, JB, YB), pB.maximizeInPlaceFromFloats(VB, JB, YB)
          }
        }
        static extractMinAndMax(BB, TB, dB, VB, yB, pB) {
          for (let lB = TB, JB = TB * VB; lB < TB + dB; lB++, JB += VB) {
            const TB = BB[JB],
              dB = BB[JB + 1],
              VB = BB[JB + 2];
            yB.minimizeInPlaceFromFloats(TB, dB, VB), pB.maximizeInPlaceFromFloats(TB, dB, VB)
          }
        }
      }, (() => {
        const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [pB.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], dB = [pB.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, VB.g)(BB, null, TB, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMaxIndexed" in BB,
            get: BB => BB.extractMinAndMaxIndexed
          },
          metadata: lB
        }, null, yB), (0, VB.g)(BB, null, dB, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMax" in BB,
            get: BB => BB.extractMinAndMax
          },
          metadata: lB
        }, null, yB), lB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lB
        }), (0, VB.h)(BB, yB)
      })(), BB
    })();

    function JB(BB, TB, dB, VB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const JB = new yB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        YB = new yB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return lB.extractMinAndMaxIndexed(BB, TB, dB, VB, JB, YB), pB && (JB.x -= JB.x * pB.x + pB.y, JB.y -= JB.y * pB.x + pB.y, JB.z -= JB.z * pB.x + pB.y, YB.x += YB.x * pB.x + pB.y, YB.y += YB.y * pB.x + pB.y, YB.z += YB.z * pB.x + pB.y), {
        minimum: JB,
        maximum: YB
      }
    }

    function YB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        pB = arguments.length > 4 ? arguments[4] : void 0;
      const JB = new yB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        YB = new yB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return pB || (pB = 3), lB.extractMinAndMax(BB, TB, dB, pB, JB, YB), VB && (JB.x -= JB.x * VB.x + VB.y, JB.y -= JB.y * VB.x + VB.y, JB.z -= JB.z * VB.x + VB.y, YB.x += YB.x * VB.x + VB.y, YB.y += YB.y * VB.x + VB.y, YB.z += YB.z * VB.x + VB.y), {
        minimum: JB,
        maximum: YB
      }
    }
  },
  39045: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB
    });
    var VB, yB = dB(38897),
      pB = dB(39051),
      lB = dB(39058),
      JB = dB(39062),
      YB = dB(39069),
      gB = dB(38629);
    class oB {
      get materialDefines() {
        const BB = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof BB ? null : BB
      }
      set materialDefines(BB) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = BB
      }
      _getDrawWrapper(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB = BB ?? this._engine.currentRenderPassId;
        let dB = this._drawWrappers[BB];
        return !dB && TB && (this._drawWrappers[BB] = dB = new YB.b(this._mesh.jU().PD())), dB
      }
      _removeDrawWrapper(BB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[BB]?.dispose(TB), this._drawWrappers[BB] = void 0
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yB = this._drawWrapper;
        yB.setEffect(BB, TB, VB), void 0 !== dB && (yB.materialContext = dB), BB || (yB.defines = null, yB.materialContext = void 0)
      }
      resetDrawCache(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== BB) return void this._removeDrawWrapper(BB, !0, TB);
          for (const BB of this._drawWrappers) BB?.dispose(TB)
        }
        this._drawWrappers = []
      }
      static AddToMesh(BB, TB, dB, VB, yB, pB, lB) {
        return new oB(BB, TB, dB, VB, yB, pB, lB, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(BB, TB, dB, VB, yB, pB, lB) {
        let JB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          YB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = BB, this.verticesStart = TB, this.verticesCount = dB, this.indexStart = VB, this.indexCount = yB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = pB, this._renderingMesh = lB || pB, YB && pB.oN.push(this), this._engine = this._mesh.jU().PD(), this.resetDrawCache(), this._trianglePlanes = [], this._id = pB.oN.length - 1, JB && (this.refreshBoundingInfo(), pB.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      IK() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.IK() : this._boundingInfo
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
      XD() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const TB = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!TB) return BB && this._mesh.jU()._hasDefaultMaterial ? this._mesh.jU().defaultMaterial : null;
        if (this._isMultiMaterial(TB)) {
          const BB = TB.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== BB && (this._currentMaterial = BB, this.resetDrawCache()), BB
        }
        return TB
      }
      _isMultiMaterial(BB) {
        return void 0 !== BB.getSubMaterial
      }
      refreshBoundingInfo() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (BB || (BB = this._renderingMesh.getVerticesData(yB.m.PositionKind)), !BB) return this._boundingInfo = this._mesh.IK(), this;
        const TB = this._renderingMesh.elB();
        let dB;
        if (0 === this.indexStart && this.indexCount === TB.length) {
          const BB = this._renderingMesh.IK();
          dB = {
            minimum: BB.minimum.clone(),
            maximum: BB.maximum.clone()
          }
        } else dB = (0, JB.e)(BB, TB, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(dB.minimum, dB.maximum) : this._boundingInfo = new lB.b(dB.minimum, dB.maximum), this
      }
      _checkCollision(BB) {
        return this.IK()._checkCollision(BB)
      }
      updateBoundingInfo(BB) {
        let TB = this.IK();
        return TB || (this.refreshBoundingInfo(), TB = this.IK()), TB && TB.update(BB), this
      }
      isInFrustum(BB) {
        const TB = this.IK();
        return !!TB && TB.isInFrustum(BB, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(BB) {
        const TB = this.IK();
        return !!TB && TB.isCompletelyInFrustum(BB)
      }
      render(BB) {
        return this._renderingMesh.render(this, BB, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(BB, TB) {
        if (!this._linesIndexBuffer) {
          const dB = 6 * Math.floor(this.indexCount / 3),
            VB = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(dB) : new Uint16Array(dB);
          let yB = 0;
          if (0 === BB.length)
            for (let BB = this.indexStart; BB < this.indexStart + this.indexCount; BB += 3) VB[yB++] = BB, VB[yB++] = BB + 1, VB[yB++] = BB + 1, VB[yB++] = BB + 2, VB[yB++] = BB + 2, VB[yB++] = BB;
          else
            for (let TB = this.indexStart; TB < this.indexStart + this.indexCount; TB += 3) VB[yB++] = BB[TB], VB[yB++] = BB[TB + 1], VB[yB++] = BB[TB + 1], VB[yB++] = BB[TB + 2], VB[yB++] = BB[TB + 2], VB[yB++] = BB[TB];
          this._linesIndexBuffer = TB.createIndexBuffer(VB), this._linesIndexCount = VB.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(BB) {
        const TB = this.IK();
        return !!TB && BB.intersectsBox(TB.boundingBox)
      }
      intersects(BB, TB, dB, VB, yB) {
        const pB = this.XD();
        if (!pB) return null;
        let lB = 3,
          JB = !1;
        switch (pB.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            lB = 1, JB = !0
        }
        return 4 === pB.fillMode ? dB.length ? this._intersectLines(BB, TB, dB, this._mesh.intersectionThreshold, VB) : this._intersectUnIndexedLines(BB, TB, dB, this._mesh.intersectionThreshold, VB) : !dB.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(BB, TB, dB, VB, yB) : this._intersectTriangles(BB, TB, dB, lB, JB, VB, yB)
      }
      _intersectLines(BB, TB, dB, VB, yB) {
        let lB = null;
        for (let JB = this.indexStart; JB < this.indexStart + this.indexCount; JB += 2) {
          const YB = TB[dB[JB]],
            gB = TB[dB[JB + 1]],
            oB = BB.intersectionSegment(YB, gB, VB);
          if (!(oB < 0) && ((yB || !lB || oB < lB.distance) && (lB = new pB.d(null, null, oB), lB.faceId = JB / 2, yB))) break
        }
        return lB
      }
      _intersectUnIndexedLines(BB, TB, dB, VB, yB) {
        let lB = null;
        for (let JB = this.verticesStart; JB < this.verticesStart + this.verticesCount; JB += 2) {
          const dB = TB[JB],
            YB = TB[JB + 1],
            gB = BB.intersectionSegment(dB, YB, VB);
          if (!(gB < 0) && ((yB || !lB || gB < lB.distance) && (lB = new pB.d(null, null, gB), lB.faceId = JB / 2, yB))) break
        }
        return lB
      }
      _intersectTriangles(BB, TB, dB, VB, yB, pB, lB) {
        let JB = null,
          YB = -1;
        for (let gB = this.indexStart; gB < this.indexStart + this.indexCount - (3 - VB); gB += VB) {
          YB++;
          const VB = dB[gB],
            oB = dB[gB + 1],
            kB = dB[gB + 2];
          if (yB && 4294967295 === kB) {
            gB += 2;
            continue
          }
          const LB = TB[VB],
            OB = TB[oB],
            DB = TB[kB];
          if (!LB || !OB || !DB) continue;
          if (lB && !lB(LB, OB, DB, BB, VB, oB, kB)) continue;
          const uB = BB.intersectsTriangle(LB, OB, DB);
          if (uB) {
            if (uB.distance < 0) continue;
            if ((pB || !JB || uB.distance < JB.distance) && (JB = uB, JB.faceId = YB, pB)) break
          }
        }
        return JB
      }
      _intersectUnIndexedTriangles(BB, TB, dB, VB, yB) {
        let pB = null;
        for (let lB = this.verticesStart; lB < this.verticesStart + this.verticesCount; lB += 3) {
          const dB = TB[lB],
            JB = TB[lB + 1],
            YB = TB[lB + 2];
          if (yB && !yB(dB, JB, YB, BB, -1, -1, -1)) continue;
          const gB = BB.intersectsTriangle(dB, JB, YB);
          if (gB) {
            if (gB.distance < 0) continue;
            if ((VB || !pB || gB.distance < pB.distance) && (pB = gB, pB.faceId = lB / 3, VB)) break
          }
        }
        return pB
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(BB, TB) {
        const dB = new oB(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, BB, TB, !1);
        if (!this.IsGlobal) {
          const BB = this.IK();
          if (!BB) return dB;
          dB._boundingInfo = new lB.b(BB.minimum, BB.maximum)
        }
        return dB
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.jU().PD()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const TB = this._mesh.oN.indexOf(this);
        this._mesh.oN.splice(TB, 1), this.resetDrawCache(void 0, BB)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(BB, TB, dB, VB, yB) {
        let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = Number.MAX_VALUE,
          JB = -Number.MAX_VALUE;
        const YB = (yB || VB).elB();
        for (let gB = TB; gB < TB + dB; gB++) {
          const BB = YB[gB];
          BB < lB && (lB = BB), BB > JB && (JB = BB)
        }
        return new oB(BB, lB, JB - lB + 1, TB, dB, VB, yB, pB)
      }
    }(VB = oB.prototype).projectToRef ?? (VB.projectToRef = (0, gB.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);