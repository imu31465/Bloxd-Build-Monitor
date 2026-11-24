export const id = 266;
export const ids = [266];
export const modules = {
  40396: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    class QB {
      constructor(BB, jB, zB) {
        this.bu = BB, this.bv = jB, this.distance = zB, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40412: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(37186),
      nB = zB(37171),
      dB = zB(37178);
    class IB {
      constructor(BB, jB, zB) {
        this.vectors = (0, QB.c)(8, nB.m.Zero), this.center = nB.m.Zero(), this.centerWorld = nB.m.Zero(), this.extendSize = nB.m.Zero(), this.extendSizeWorld = nB.m.Zero(), this.directions = (0, QB.c)(3, nB.m.Zero), this.vectorsWorld = (0, QB.c)(8, nB.m.Zero), this.minimumWorld = nB.m.Zero(), this.maximumWorld = nB.m.Zero(), this.minimum = nB.m.Zero(), this.maximum = nB.m.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(BB, jB, zB)
      }
      reConstruct(BB, jB, zB) {
        const QB = BB.x,
          dB = BB.y,
          IB = BB.z,
          NB = jB.x,
          uB = jB.y,
          UB = jB.z,
          aB = this.vectors;
        this.minimum.U3(QB, dB, IB), this.maximum.U3(NB, uB, UB), aB[0].U3(QB, dB, IB), aB[1].U3(NB, uB, UB), aB[2].U3(NB, dB, IB), aB[3].U3(QB, uB, IB), aB[4].U3(QB, dB, UB), aB[5].U3(NB, uB, IB), aB[6].U3(QB, uB, UB), aB[7].U3(NB, dB, UB), jB.addToRef(BB, this.center).scaleInPlace(.5), jB.subtractToRef(BB, this.extendSize).scaleInPlace(.5), this._worldMatrix = zB || nB.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(BB) {
        const jB = IB._TmpVector3,
          zB = this.maximum.subtractToRef(this.minimum, jB[0]),
          QB = zB.length();
        zB.normalizeFromLength(QB);
        const nB = QB * BB,
          dB = zB.scaleInPlace(.5 * nB),
          NB = this.center.subtractToRef(dB, jB[1]),
          uB = this.center.addToRef(dB, jB[2]);
        return this.reConstruct(NB, uB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        const jB = this.minimumWorld,
          zB = this.maximumWorld,
          QB = this.directions,
          dB = this.vectorsWorld,
          IB = this.vectors;
        if (BB.isIdentity()) {
          jB.jH(this.minimum), zB.jH(this.maximum);
          for (let BB = 0; BB < 8; ++BB) dB[BB].jH(IB[BB]);
          this.extendSizeWorld.jH(this.extendSize), this.centerWorld.jH(this.center)
        } else {
          jB.S_(Number.MAX_VALUE), zB.S_(-Number.MAX_VALUE);
          for (let QB = 0; QB < 8; ++QB) {
            const NB = dB[QB];
            nB.m.TransformCoordinatesToRef(IB[QB], BB, NB), jB.minimizeInPlace(NB), zB.maximizeInPlace(NB)
          }
          zB.subtractToRef(jB, this.extendSizeWorld).scaleInPlace(.5), zB.addToRef(jB, this.centerWorld).scaleInPlace(.5)
        }
        nB.m.FromArrayToRef(BB.m, 0, QB[0]), nB.m.FromArrayToRef(BB.m, 4, QB[1]), nB.m.FromArrayToRef(BB.m, 8, QB[2]), this._worldMatrix = BB
      }
      isInFrustum(BB) {
        return IB.IsInFrustum(this.vectorsWorld, BB)
      }
      isCompletelyInFrustum(BB) {
        return IB.IsCompletelyInFrustum(this.vectorsWorld, BB)
      }
      intersectsPoint(BB) {
        const jB = this.minimumWorld,
          zB = this.maximumWorld,
          QB = jB.x,
          nB = jB.y,
          IB = jB.z,
          NB = zB.x,
          uB = zB.y,
          UB = zB.z,
          aB = BB.x,
          pB = BB.y,
          rB = BB.z,
          sB = -dB.c;
        return !(NB - aB < sB || sB > aB - QB) && (!(uB - pB < sB || sB > pB - nB) && !(UB - rB < sB || sB > rB - IB))
      }
      intersectsSphere(BB) {
        return IB.IntersectsSphere(this.minimumWorld, this.maximumWorld, BB.centerWorld, BB.radiusWorld)
      }
      intersectsMinMax(BB, jB) {
        const zB = this.minimumWorld,
          QB = this.maximumWorld,
          nB = zB.x,
          dB = zB.y,
          IB = zB.z,
          NB = QB.x,
          uB = QB.y,
          UB = QB.z,
          aB = BB.x,
          pB = BB.y,
          rB = BB.z,
          sB = jB.x,
          JB = jB.y,
          mB = jB.z;
        return !(NB < aB || nB > sB) && (!(uB < pB || dB > JB) && !(UB < rB || IB > mB))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(BB, jB) {
        return BB.intersectsMinMax(jB.minimumWorld, jB.maximumWorld)
      }
      static IntersectsSphere(BB, jB, zB, QB) {
        const dB = IB._TmpVector3[0];
        nB.m.ClampToRef(zB, BB, jB, dB);
        return nB.m.DistanceSquared(zB, dB) <= QB * QB
      }
      static IsCompletelyInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; ++zB) {
          const QB = jB[zB];
          for (let jB = 0; jB < 8; ++jB)
            if (QB.dotCoordinate(BB[jB]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; ++zB) {
          let QB = !0;
          const nB = jB[zB];
          for (let jB = 0; jB < 8; ++jB)
            if (nB.dotCoordinate(BB[jB]) >= 0) {
              QB = !1;
              break
            } if (QB) return !1
        }
        return !0
      }
    }
    IB._TmpVector3 = (0, QB.c)(3, nB.m.Zero)
  },
  40404: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB
    });
    var QB = zB(37186),
      nB = zB(37171),
      dB = zB(40412);
    class IB {
      constructor(BB, jB, zB) {
        this.center = nB.m.Zero(), this.centerWorld = nB.m.Zero(), this.minimum = nB.m.Zero(), this.maximum = nB.m.Zero(), this.reConstruct(BB, jB, zB)
      }
      reConstruct(BB, jB, zB) {
        this.minimum.jH(BB), this.maximum.jH(jB);
        const QB = nB.m.Distance(BB, jB);
        jB.addToRef(BB, this.center).scaleInPlace(.5), this.radius = .5 * QB, this._update(zB || nB.c.IdentityReadOnly)
      }
      scale(BB) {
        const jB = IB._TmpVector3,
          zB = this.maximum.subtractToRef(this.minimum, jB[0]),
          QB = zB.length();
        zB.normalizeFromLength(QB);
        const nB = QB * BB,
          dB = zB.scaleInPlace(.5 * nB),
          NB = this.center.subtractToRef(dB, jB[1]),
          uB = this.center.addToRef(dB, jB[2]);
        return this.reConstruct(NB, uB, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(BB) {
        if (BB.isIdentity()) this.centerWorld.jH(this.center), this.radiusWorld = this.radius;
        else {
          nB.m.TransformCoordinatesToRef(this.center, BB, this.centerWorld);
          const jB = IB._TmpVector3[0];
          nB.m.TransformNormalFromFloatsToRef(1, 1, 1, BB, jB), this.radiusWorld = Math.max(Math.abs(jB.x), Math.abs(jB.y), Math.abs(jB.z)) * this.radius
        }
      }
      isInFrustum(BB) {
        const jB = this.centerWorld,
          zB = this.radiusWorld;
        for (let QB = 0; QB < 6; QB++)
          if (BB[QB].dotCoordinate(jB) <= -zB) return !1;
        return !0
      }
      isCenterInFrustum(BB) {
        const jB = this.centerWorld;
        for (let zB = 0; zB < 6; zB++)
          if (BB[zB].dotCoordinate(jB) < 0) return !1;
        return !0
      }
      intersectsPoint(BB) {
        const jB = nB.m.DistanceSquared(this.centerWorld, BB);
        return !(this.radiusWorld * this.radiusWorld < jB)
      }
      static Intersects(BB, jB) {
        const zB = nB.m.DistanceSquared(BB.centerWorld, jB.centerWorld),
          QB = BB.radiusWorld + jB.radiusWorld;
        return !(QB * QB < zB)
      }
      static CreateFromCenterAndRadius(BB, jB, zB) {
        this._TmpVector3[0].jH(BB), this._TmpVector3[1].U3(0, 0, jB), this._TmpVector3[2].jH(BB), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].MQB(this._TmpVector3[1]);
        const QB = new IB(this._TmpVector3[0], this._TmpVector3[2]);
        return QB._worldMatrix = zB || nB.c.Identity(), QB
      }
    }
    IB._TmpVector3 = (0, QB.c)(3, nB.m.Zero);
    const NB = {
        min: 0,
        max: 0
      },
      uB = {
        min: 0,
        max: 0
      },
      UB = (BB, jB, zB) => {
        const QB = nB.m.Dot(jB.centerWorld, BB),
          dB = Math.abs(nB.m.Dot(jB.directions[0], BB)) * jB.extendSize.x + Math.abs(nB.m.Dot(jB.directions[1], BB)) * jB.extendSize.y + Math.abs(nB.m.Dot(jB.directions[2], BB)) * jB.extendSize.z;
        zB.min = QB - dB, zB.max = QB + dB
      },
      aB = (BB, jB, zB) => (UB(BB, jB, NB), UB(BB, zB, uB), !(NB.min > uB.max || uB.min > NB.max));
    class pB {
      constructor(BB, jB, zB) {
        this._isLocked = !1, this.boundingBox = new dB.e(BB, jB, zB), this.fQB = new IB(BB, jB, zB)
      }
      reConstruct(BB, jB, zB) {
        this.boundingBox.reConstruct(BB, jB, zB), this.fQB.reConstruct(BB, jB, zB)
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
        this._isLocked || (this.boundingBox._update(BB), this.fQB._update(BB))
      }
      centerOn(BB, jB) {
        const zB = pB._TmpVector3[0].jH(BB).MQB(jB),
          QB = pB._TmpVector3[1].jH(BB).addInPlace(jB);
        return this.boundingBox.reConstruct(zB, QB, this.boundingBox.getWorldMatrix()), this.fQB.reConstruct(zB, QB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(BB) {
        const jB = nB.m.Minimize(this.minimum, BB),
          zB = nB.m.Maximize(this.maximum, BB);
        return this.reConstruct(jB, zB, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(BB) {
        const jB = nB.h.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(jB);
        const zB = nB.h.KJ[0];
        return nB.m.TransformCoordinatesToRef(BB.boundingBox.minimumWorld, jB, zB), this.encapsulate(zB), nB.m.TransformCoordinatesToRef(BB.boundingBox.maximumWorld, jB, zB), this.encapsulate(zB), this
      }
      scale(BB) {
        return this.boundingBox.scale(BB), this.fQB.scale(BB), this
      }
      isInFrustum(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === jB || 3 === jB) && this.fQB.isCenterInFrustum(BB)) return !0;
        if (!this.fQB.isInFrustum(BB)) return !1;
        return !(1 !== jB && 3 !== jB) || this.boundingBox.isInFrustum(BB)
      }
      get diagonalLength() {
        const BB = this.boundingBox;
        return BB.maximumWorld.subtractToRef(BB.minimumWorld, pB._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(BB) {
        return this.boundingBox.isCompletelyInFrustum(BB)
      }
      _checkCollision(BB) {
        return BB._canDoCollision(this.fQB.centerWorld, this.fQB.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(BB) {
        return !!this.fQB.centerWorld && (!!this.fQB.intersectsPoint(BB) && !!this.boundingBox.intersectsPoint(BB))
      }
      intersects(BB, jB) {
        if (!IB.Intersects(this.fQB, BB.fQB)) return !1;
        if (!dB.e.Intersects(this.boundingBox, BB.boundingBox)) return !1;
        if (!jB) return !0;
        const zB = this.boundingBox,
          QB = BB.boundingBox;
        return !!aB(zB.directions[0], zB, QB) && (!!aB(zB.directions[1], zB, QB) && (!!aB(zB.directions[2], zB, QB) && (!!aB(QB.directions[0], zB, QB) && (!!aB(QB.directions[1], zB, QB) && (!!aB(QB.directions[2], zB, QB) && (!!aB(nB.m.Cross(zB.directions[0], QB.directions[0]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[0], QB.directions[1]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[0], QB.directions[2]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[1], QB.directions[0]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[1], QB.directions[1]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[1], QB.directions[2]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[2], QB.directions[0]), zB, QB) && (!!aB(nB.m.Cross(zB.directions[2], QB.directions[1]), zB, QB) && !!aB(nB.m.Cross(zB.directions[2], QB.directions[2]), zB, QB))))))))))))))
      }
    }
    pB._TmpVector3 = (0, QB.c)(2, nB.m.Zero)
  },
  40432: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => uB,
      i: () => NB,
      l: () => IB
    });
    var QB = zB(40225),
      nB = zB(37171);

    function dB(BB) {
      -1 === BB.indexOf("vClipPlane") && BB.push("vClipPlane"), -1 === BB.indexOf("vClipPlane2") && BB.push("vClipPlane2"), -1 === BB.indexOf("vClipPlane3") && BB.push("vClipPlane3"), -1 === BB.indexOf("vClipPlane4") && BB.push("vClipPlane4"), -1 === BB.indexOf("vClipPlane5") && BB.push("vClipPlane5"), -1 === BB.indexOf("vClipPlane6") && BB.push("vClipPlane6")
    }

    function IB(BB, jB, zB) {
      const QB = !!(BB.clipPlane ?? jB.clipPlane),
        nB = !!(BB.clipPlane2 ?? jB.clipPlane2),
        dB = !!(BB.clipPlane3 ?? jB.clipPlane3),
        IB = !!(BB.clipPlane4 ?? jB.clipPlane4),
        NB = !!(BB.clipPlane5 ?? jB.clipPlane5),
        uB = !!(BB.clipPlane6 ?? jB.clipPlane6);
      QB && zB.push("#define CLIPPLANE"), nB && zB.push("#define CLIPPLANE2"), dB && zB.push("#define CLIPPLANE3"), IB && zB.push("#define CLIPPLANE4"), NB && zB.push("#define CLIPPLANE5"), uB && zB.push("#define CLIPPLANE6")
    }

    function NB(BB, jB, zB) {
      let QB = !1;
      const nB = !!(BB.clipPlane ?? jB.clipPlane),
        dB = !!(BB.clipPlane2 ?? jB.clipPlane2),
        IB = !!(BB.clipPlane3 ?? jB.clipPlane3),
        NB = !!(BB.clipPlane4 ?? jB.clipPlane4),
        uB = !!(BB.clipPlane5 ?? jB.clipPlane5),
        UB = !!(BB.clipPlane6 ?? jB.clipPlane6);
      return zB.CLIPPLANE !== nB && (zB.CLIPPLANE = nB, QB = !0), zB.CLIPPLANE2 !== dB && (zB.CLIPPLANE2 = dB, QB = !0), zB.CLIPPLANE3 !== IB && (zB.CLIPPLANE3 = IB, QB = !0), zB.CLIPPLANE4 !== NB && (zB.CLIPPLANE4 = NB, QB = !0), zB.CLIPPLANE5 !== uB && (zB.CLIPPLANE5 = uB, QB = !0), zB.CLIPPLANE6 !== UB && (zB.CLIPPLANE6 = UB, QB = !0), QB
    }

    function uB(BB, jB, zB) {
      let QB = jB.clipPlane ?? zB.clipPlane;
      UB(BB, "vClipPlane", QB), QB = jB.clipPlane2 ?? zB.clipPlane2, UB(BB, "vClipPlane2", QB), QB = jB.clipPlane3 ?? zB.clipPlane3, UB(BB, "vClipPlane3", QB), QB = jB.clipPlane4 ?? zB.clipPlane4, UB(BB, "vClipPlane4", QB), QB = jB.clipPlane5 ?? zB.clipPlane5, UB(BB, "vClipPlane5", QB), QB = jB.clipPlane6 ?? zB.clipPlane6, UB(BB, "vClipPlane6", QB)
    }

    function UB(BB, jB, zB) {
      if (zB) {
        const dB = QB.d.aY()?.floatingOriginOffset || nB.m.ZeroReadOnly;
        BB.setFloat4(jB, zB.normal.x, zB.normal.y, zB.normal.z, zB.d + nB.m.Dot(zB.normal, dB))
      }
    }
  },
  40445: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(BB, jB) {
        this._defines[BB] || (BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB), this._defines[BB] = new Array), this._defines[BB].push(jB)
      }
      addCPUSkinningFallback(BB, jB) {
        this._mesh = jB, BB < this._currentRank && (this._currentRank = BB), BB > this._maxRank && (this._maxRank = BB)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(BB, jB) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, BB = BB.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), jB._bonesComputationForcedToCPU = !0;
          const zB = this._mesh.aY();
          for (let BB = 0; BB < zB.meshes.length; BB++) {
            const QB = zB.meshes[BB];
            if (QB.material) {
              if (QB.computeBonesUsingShaders && 0 !== QB.numBoneInfluencers)
                if (QB.material.getEffect() === jB) QB.computeBonesUsingShaders = !1;
                else if (QB.cL)
                for (const BB of QB.cL) {
                  if (BB.effect === jB) {
                    QB.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && QB.computeBonesUsingShaders && QB.numBoneInfluencers > 0 && (QB.computeBonesUsingShaders = !1)
          }
        } else {
          const jB = this._defines[this._currentRank];
          if (jB)
            for (let zB = 0; zB < jB.length; zB++) BB = BB.replace("#define " + jB[zB], "");
          this._currentRank++
        }
        return BB
      }
    }
  },
  40380: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => GB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(40164),
      IB = zB(37202),
      NB = zB(37197),
      uB = zB(40388),
      UB = zB(40195),
      aB = zB(38783),
      pB = zB(37869),
      rB = zB(40423),
      sB = zB(40086);
    let JB = (() => {
      var BB;
      let jB, zB, dB, IB, NB, uB, UB, aB, pB, rB, JB, mB, yB = [];
      return BB = class {
        constructor() {
          this._func = (0, QB.g)(this, yB), this.reset()
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
          sB.b.Clone((() => BB), this)
        }
        serialize() {
          return sB.b.Serialize(this)
        }
        parse(BB, jB, zB) {
          sB.b.Parse((() => this), BB, jB, zB)
        }
      }, (() => {
        const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], IB = [(0, nB.A)()], NB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)()], pB = [(0, nB.A)()], rB = [(0, nB.A)()], JB = [(0, nB.A)()], mB = [(0, nB.A)()], (0, QB.e)(BB, null, jB, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: BB => "func" in BB,
            get: BB => BB.func
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, zB, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: BB => "backFunc" in BB,
            get: BB => BB.backFunc
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, dB, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcRef" in BB,
            get: BB => BB.funcRef
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, IB, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "funcMask" in BB,
            get: BB => BB.funcMask
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, NB, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilFail" in BB,
            get: BB => BB.opStencilFail
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, uB, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "opDepthFail" in BB,
            get: BB => BB.opDepthFail
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, UB, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "opStencilDepthPass" in BB,
            get: BB => BB.opStencilDepthPass
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, aB, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilFail" in BB,
            get: BB => BB.backOpStencilFail
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, pB, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpDepthFail" in BB,
            get: BB => BB.backOpDepthFail
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, rB, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "backOpStencilDepthPass" in BB,
            get: BB => BB.backOpStencilDepthPass
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, JB, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: BB => "mask" in BB,
            get: BB => BB.mask
          },
          metadata: sB
        }, null, yB), (0, QB.e)(BB, null, mB, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "enabled" in BB,
            get: BB => BB.enabled
          },
          metadata: sB
        }, null, yB), sB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sB
        })
      })(), BB
    })();
    var mB = zB(40428),
      yB = zB(39997),
      kB = zB(39965);
    let GB = (() => {
      var BB;
      let jB, zB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, xB = [],
        KB = [],
        CB = [],
        cB = [],
        bB = [],
        vB = [],
        RB = [],
        OB = [],
        Bj = [],
        jj = [],
        zj = [],
        Qj = [],
        nj = [],
        dj = [],
        Ij = [],
        Nj = [],
        uj = [],
        Uj = [],
        aj = [],
        pj = [],
        rj = [],
        sj = [],
        Jj = [],
        mj = [],
        yj = [],
        kj = [],
        Gj = [],
        Lj = [],
        gj = [],
        tj = [],
        Sj = [],
        Mj = [],
        Ej = [],
        ij = [],
        qj = [],
        fj = [],
        oj = [],
        Hj = [],
        Dj = [],
        Fj = [],
        Yj = [],
        Vj = [],
        hj = [],
        Xj = [],
        Zj = [],
        Aj = [],
        Tj = [],
        Pj = [],
        Wj = [],
        ej = [],
        lj = [];
      return BB = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(jB) {
          this._useVertexPulling !== jB && (this._useVertexPulling = jB, this.DjB(BB.MiscDirtyFlag))
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
        set alpha(jB) {
          if (this._alpha === jB) return;
          const zB = this._alpha;
          this._alpha = jB, 1 !== zB && 1 !== jB || this.DjB(BB.MiscDirtyFlag + BB.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(jB) {
          this._backFaceCulling !== jB && (this._backFaceCulling = jB, this.DjB(BB.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(jB) {
          const zB = Math.max(0, Math.min(0 | jB, 4));
          this._textureRepetitionMode !== zB && (this._textureRepetitionMode = zB, this.DjB(BB.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(jB) {
          this._cullBackFaces !== jB && (this._cullBackFaces = jB, this.DjB(BB.TextureDirtyFlag))
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
          this._onDisposeObserver && this.pY.remove(this._onDisposeObserver), this._onDisposeObserver = this.pY.add(BB)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new IB.c), this._onBindObservable
        }
        set onBind(BB) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(BB)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new IB.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new IB.c), this._onEffectCreatedObservable
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
        setAlphaMode(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[zB] !== jB && (this._alphaMode[zB] = jB, this.DjB(BB.TextureDirtyFlag))
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
        set fogEnabled(jB) {
          this._fogEnabled !== jB && (this._fogEnabled = jB, this.DjB(BB.MiscDirtyFlag))
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
        set wireframe(jB) {
          this.fillMode = jB ? BB.WireFrameFillMode : BB.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case BB.PointFillMode:
            case BB.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(jB) {
          this.fillMode = jB ? BB.PointFillMode : BB.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(jB) {
          this._fillMode !== jB && (this._fillMode = jB, this.DjB(BB.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(BB) {
          const jB = this.aY().wJ().getCaps().fragmentDepthSupported;
          BB && !jB && aB.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = BB && jB, this._markAllSubMeshesAsMiscDirty()
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
        constructor(jB, zB, nB) {
          let uB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, QB.g)(this, xB), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, QB.g)(this, KB, void 0), this.uniqueId = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, void 0)), this._loadedUniqueId = (0, QB.g)(this, bB), this.name = (0, QB.g)(this, vB, void 0), this.metadata = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, null)), this._internalMetadata = (0, QB.g)(this, Bj), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, QB.g)(this, jj, !1), this.checkReadyOnlyOnce = ((0, QB.g)(this, zj), (0, QB.g)(this, Qj, !1)), this.state = ((0, QB.g)(this, nj), (0, QB.g)(this, dj, "")), this._alpha = ((0, QB.g)(this, Ij), (0, QB.g)(this, Nj, 1)), this.inspectableCustomProperties = (0, QB.g)(this, uj), this._backFaceCulling = (0, QB.g)(this, Uj, !0), this._textureRepetitionMode = ((0, QB.g)(this, aj), (0, QB.g)(this, pj, 0)), this.textureRepetitionHexTilingParams = ((0, QB.g)(this, rj), (0, QB.g)(this, sj, [1, .6, 7, .5])), this._cullBackFaces = ((0, QB.g)(this, Jj), (0, QB.g)(this, mj, !0)), this._blockDirtyMechanism = ((0, QB.g)(this, yj), !1), this.sideOrientation = (0, QB.g)(this, kj, null), this.onCompiled = ((0, QB.g)(this, Gj), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.pY = new IB.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, QB.g)(this, Lj, [2]), this._needDepthPrePass = ((0, QB.g)(this, gj), (0, QB.g)(this, tj, !1)), this.disableDepthWrite = ((0, QB.g)(this, Sj), (0, QB.g)(this, Mj, !1)), this.disableColorWrite = ((0, QB.g)(this, Ej), (0, QB.g)(this, ij, !1)), this.forceDepthWrite = ((0, QB.g)(this, qj), (0, QB.g)(this, fj, !1)), this.depthFunction = ((0, QB.g)(this, oj), (0, QB.g)(this, Hj, 0)), this.separateCullingPass = ((0, QB.g)(this, Dj), (0, QB.g)(this, Fj, !1)), this._fogEnabled = ((0, QB.g)(this, Yj), (0, QB.g)(this, Vj, !0)), this.pointSize = ((0, QB.g)(this, hj), (0, QB.g)(this, Xj, 1)), this.zOffset = ((0, QB.g)(this, Zj), (0, QB.g)(this, Aj, 0)), this.zOffsetUnits = ((0, QB.g)(this, Tj), (0, QB.g)(this, Pj, 0)), this.clipPlane = (0, QB.g)(this, Wj), this.stencil = new JB, this._isVertexOutputInvariant = (0, QB.g)(this, ej, BB.ForceVertexOutputInvariant), this._materialContext = (0, QB.g)(this, lj), this._useUBO = !1, this._fillMode = BB.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = jB;
          const aB = zB || NB.c.LastCreatedScene;
          aB && (this._scene = aB, this._dirtyCallbacks = {}, this._forceGLSL = uB, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = jB || dB.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.wJ().createMaterialContext(), this._drawWrapper = new rB.e(this._scene.wJ(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new UB.d(this._scene.wJ(), void 0, void 0, jB), this._useUBO = this.aY().wJ().supportsUniformBuffers, this._createUniformBuffer(), nB || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), BB.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const BB = this.aY().wJ();
          this._uniformBuffer?.dispose(), BB.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new UB.d(BB, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new UB.d(this._scene.wJ(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(BB, jB) {
          return !0
        }
        isReadyForSubMesh(BB, jB, zB) {
          const QB = jB.materialDefines;
          return !!QB && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = QB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        aY() {
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
          let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zB = this.aY().meshes;
          for (const BB of zB)
            if (BB.cL)
              for (const zB of BB.cL)
                if (zB.bJ() === this)
                  for (const BB of zB._drawWrappers) BB && this._materialContext === BB.materialContext && (BB._wasPreviouslyReady = !1, BB._wasPreviouslyUsingInstances = null, BB._forceRebindOnNextCall = jB);
          jB && this.DjB(BB.AllDirtyFlag)
        }
        _preBind(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const QB = this._scene.wJ(),
            nB = (null == zB ? this.sideOrientation : zB) === BB.ClockWiseSideOrientation,
            dB = jB || this._getDrawWrapper();
          return (0, yB.e)(dB) && dB.materialContext && (dB.materialContext.useVertexPulling = this.useVertexPulling), QB.enableEffect(dB), QB.setState(this.backFaceCulling, this.zOffset, !1, nB, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), nB
        }
        bind(BB, jB) {}
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          this._eventInfo.ubo = BB, this._callbackPluginEventGeneric(8, this._eventInfo), BB.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(BB, jB, zB) {
          const QB = zB._drawWrapper;
          this._eventInfo.subMesh = zB, this._callbackPluginEventBindForSubMesh(this._eventInfo), QB._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(BB) {}
        bindView(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : BB.setMatrix("view", this.aY().getViewMatrix())
        }
        bindViewProjection(BB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (BB.setMatrix("viewProjection", this.aY().getTransformMatrix()), BB.setMatrix("projection", this.aY().getProjectionMatrix()), BB.setMatrix("inverseProjection", this.aY().getInverseProjectionMatrix()))
        }
        bindEyePosition(BB, jB) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(BB, jB)
        }
        _afterBind(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && jB && (this._needToBindSceneUbo = !1, (0, mB.z)(jB, this.aY().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = BB ? BB.visibility : 1, this._onBindObservable && BB && this._onBindObservable.notifyObservers(BB), this.disableDepthWrite) {
            const BB = this._scene.wJ();
            this._cachedDepthWriteState = BB.getDepthWrite(), BB.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const BB = this._scene.wJ();
            this._cachedColorWriteState = BB.getColorWrite(), BB.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const BB = this._scene.wJ();
            this._cachedDepthFunctionState = BB.getDepthFunction() || 0, BB.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.wJ().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.wJ().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.wJ().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(jB, zB) {
          const QB = {};
          if (this._serializePlugins(QB), BB._ParsePlugins(QB, jB, this._scene, zB), this.pluginManager)
            for (const BB of this.pluginManager._plugins) {
              const zB = jB.pluginManager.getPlugin(BB.name);
              zB && BB.copyTo(zB)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const BB = [];
            for (const jB in this.meshMap) {
              const zB = this.meshMap[jB];
              zB && BB.push(zB)
            }
            return BB
          }
          return this._scene.meshes.filter((BB => BB.material === this))
        }
        forceCompilation(BB, jB, zB, QB) {
          const nB = {
              clipPlane: !1,
              useInstances: !1,
              ...zB
            },
            dB = this.aY(),
            IB = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const NB = () => {
            if (!this._scene || !this._scene.wJ()) return;
            const zB = dB.clipPlane;
            if (nB.clipPlane && (dB.clipPlane = new pB.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let zB = !0,
                dB = null;
              if (BB.cL) {
                const jB = new uB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
                jB.materialDefines && (jB.materialDefines._renderId = -1), this.isReadyForSubMesh(BB, jB, nB.useInstances) || (jB.effect && jB.effect.getCompilationError() && jB.effect.allFallbacksProcessed() ? dB = jB.effect.getCompilationError() : (zB = !1, setTimeout(NB, 16)))
              }
              zB && (this.allowShaderHotSwapping = IB, dB && QB && QB(dB), jB && jB(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = IB, jB && jB(this)) : setTimeout(NB, 16);
            nB.clipPlane && (dB.clipPlane = zB)
          };
          NB()
        }
        async forceCompilationAsync(BB, jB) {
          return await new Promise(((zB, QB) => {
            this.forceCompilation(BB, (() => {
              zB()
            }), jB, (BB => {
              QB(BB)
            }))
          }))
        }
        DjB(jB) {
          this.aY().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (BB._DirtyCallbackArray.length = 0, jB & BB.ImageProcessingDirtyFlag && BB._DirtyCallbackArray.push(BB._ImageProcessingDirtyCallBack), jB & BB.TextureDirtyFlag && BB._DirtyCallbackArray.push(BB._TextureDirtyCallBack), jB & BB.LightDirtyFlag && BB._DirtyCallbackArray.push(BB._LightsDirtyCallBack), jB & BB.FresnelDirtyFlag && BB._DirtyCallbackArray.push(BB._FresnelDirtyCallBack), jB & BB.AttributesDirtyFlag && BB._DirtyCallbackArray.push(BB._AttributeDirtyCallBack), jB & BB.MiscDirtyFlag && BB._DirtyCallbackArray.push(BB._MiscDirtyCallBack), jB & BB.PrePassDirtyFlag && BB._DirtyCallbackArray.push(BB._PrePassDirtyCallBack), BB._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(BB._RunDirtyCallBacks), this.aY().resetCachedMaterial())
        }
        resetDrawCache() {
          const BB = this.aY().meshes;
          for (const jB of BB)
            if (jB.cL)
              for (const BB of jB.cL) BB.bJ() === this && BB.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(BB) {
          const jB = this.aY();
          if (jB.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const zB = jB.meshes;
          for (const QB of zB)
            if (QB.cL)
              for (const zB of QB.cL) {
                if ((zB.bJ() || (jB._hasDefaultMaterial ? jB.defaultMaterial : null)) === this)
                  for (const jB of zB._drawWrappers) jB && jB.defines && jB.defines.markAllAsDirty && this._materialContext === jB.materialContext && BB(jB.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.aY().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const BB = this.aY().enablePrePassRenderer();
          BB && BB.DjB()
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
            this.pY.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(BB)
            }))
          }
        }
        setPrePassRenderer(BB) {
          return !1
        }
        dispose(BB, jB, zB) {
          const QB = this.aY();
          if (QB.stopAnimation(this), QB.freeProcessedMaterials(), QB.removeMaterial(this), this._eventInfo.forceDisposeTextures = jB, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const BB = this._parentContainer.materials.indexOf(this);
            BB > -1 && this._parentContainer.materials.splice(BB, 1), this._parentContainer = null
          }
          if (!0 !== zB)
            if (this.meshMap)
              for (const nB in this.meshMap) {
                const BB = this.meshMap[nB];
                this._disposeMeshResources(BB)
              } else {
                const BB = QB.meshes;
                for (const jB of BB) this._disposeMeshResources(jB)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.pY.notifyObservers(this), this.pY.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(BB) {
          if (!BB) return;
          const jB = BB.geometry,
            zB = BB._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (BB.cL && zB)
              for (const QB of BB.cL) {
                const BB = QB._drawWrappers;
                for (let nB = 0; nB < BB.length; nB++) {
                  const dB = BB[nB]?.effect;
                  if (!dB) continue;
                  zB[nB] === this && (jB?._releaseVertexArrayObject(dB), QB._removeDrawWrapper(nB, !0, !0))
                }
              }
          } else jB?._releaseVertexArrayObject(this._drawWrapper.effect);
          BB.material !== this || BB.vQB || (BB.material = null)
        }
        serialize() {
          const BB = sB.b.Serialize(this);
          return BB.stencil = this.stencil.serialize(), BB.uniqueId = this.uniqueId, this._serializePlugins(BB), BB
        }
        _serializePlugins(BB) {
          if (BB.plugins = {}, this.pluginManager)
            for (const jB of this.pluginManager._plugins) jB.doNotSerialize || (BB.plugins[jB.getClassName()] = jB.serialize())
        }
        static ParseAlphaMode(BB, jB) {
          void 0 !== BB._alphaMode ? jB._alphaMode = Array.isArray(BB._alphaMode) ? [...BB._alphaMode] : [BB._alphaMode] : void 0 !== BB.alphaMode ? jB._alphaMode = Array.isArray(BB.alphaMode) ? [...BB.alphaMode] : [BB.alphaMode] : jB._alphaMode = [2]
        }
        static Parse(jB, zB, QB) {
          if (jB.customType) {
            if ("BABYLON.PBRMaterial" === jB.customType && jB.overloadedAlbedo && (jB.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return aB.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else jB.customType = "BABYLON.StandardMaterial";
          const nB = dB.i.Instantiate(jB.customType).Parse(jB, zB, QB);
          return nB._loadedUniqueId = jB.uniqueId, BB.ParseAlphaMode(jB, nB), nB
        }
        static _ParsePlugins(BB, jB, zB, QB) {
          if (BB.plugins)
            for (const nB in BB.plugins) {
              const IB = BB.plugins[nB];
              let NB = jB.pluginManager?.getPlugin(IB.name);
              if (!NB) {
                const BB = dB.i.Instantiate("BABYLON." + nB);
                BB && (NB = new BB(jB))
              }
              NB?.parse(IB, zB, QB)
            }
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, nB.A)()], zB = [(0, nB.A)()], kB = [(0, nB.A)()], GB = [(0, nB.A)()], LB = [(0, nB.A)()], gB = [(0, nB.A)()], tB = [(0, nB.A)()], SB = [(0, nB.A)("alpha")], MB = [(0, nB.A)("backFaceCulling")], EB = [(0, nB.A)("textureRepetitionMode")], iB = [(0, nB.A)("textureRepetitionHexTilingParams")], qB = [(0, nB.A)("cullBackFaces")], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], DB = [(0, nB.A)()], FB = [(0, nB.A)()], YB = [(0, nB.A)()], VB = [(0, nB.A)()], hB = [(0, nB.A)()], XB = [(0, nB.A)("fogEnabled")], ZB = [(0, nB.A)()], AB = [(0, nB.A)()], TB = [(0, nB.A)()], PB = [(0, nB.A)()], WB = [(0, nB.A)()], eB = [(0, nB.A)()], lB = [(0, nB.A)()], wB = [(0, nB.A)()], (0, QB.e)(BB, null, PB, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointsCloud" in BB,
            get: BB => BB.pointsCloud
          },
          metadata: dB
        }, null, xB), (0, QB.e)(BB, null, WB, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fillMode" in BB,
            get: BB => BB.fillMode
          },
          metadata: dB
        }, null, xB), (0, QB.e)(BB, null, eB, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLogarithmicDepth" in BB,
            get: BB => BB.useLogarithmicDepth
          },
          metadata: dB
        }, null, xB), (0, QB.e)(BB, null, wB, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "transparencyMode" in BB,
            get: BB => BB.transparencyMode
          },
          metadata: dB
        }, null, xB), (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, jB) => {
              BB.id = jB
            }
          },
          metadata: dB
        }, KB, CB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: BB => "uniqueId" in BB,
            get: BB => BB.uniqueId,
            set: (BB, jB) => {
              BB.uniqueId = jB
            }
          },
          metadata: dB
        }, cB, bB), (0, QB.e)(null, null, kB, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: BB => "name" in BB,
            get: BB => BB.name,
            set: (BB, jB) => {
              BB.name = jB
            }
          },
          metadata: dB
        }, vB, RB), (0, QB.e)(null, null, GB, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: BB => "metadata" in BB,
            get: BB => BB.metadata,
            set: (BB, jB) => {
              BB.metadata = jB
            }
          },
          metadata: dB
        }, OB, Bj), (0, QB.e)(null, null, LB, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnEveryCall" in BB,
            get: BB => BB.checkReadyOnEveryCall,
            set: (BB, jB) => {
              BB.checkReadyOnEveryCall = jB
            }
          },
          metadata: dB
        }, jj, zj), (0, QB.e)(null, null, gB, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: BB => "checkReadyOnlyOnce" in BB,
            get: BB => BB.checkReadyOnlyOnce,
            set: (BB, jB) => {
              BB.checkReadyOnlyOnce = jB
            }
          },
          metadata: dB
        }, Qj, nj), (0, QB.e)(null, null, tB, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: BB => "state" in BB,
            get: BB => BB.state,
            set: (BB, jB) => {
              BB.state = jB
            }
          },
          metadata: dB
        }, dj, Ij), (0, QB.e)(null, null, SB, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alpha" in BB,
            get: BB => BB._alpha,
            set: (BB, jB) => {
              BB._alpha = jB
            }
          },
          metadata: dB
        }, Nj, uj), (0, QB.e)(null, null, MB, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_backFaceCulling" in BB,
            get: BB => BB._backFaceCulling,
            set: (BB, jB) => {
              BB._backFaceCulling = jB
            }
          },
          metadata: dB
        }, Uj, aj), (0, QB.e)(null, null, EB, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_textureRepetitionMode" in BB,
            get: BB => BB._textureRepetitionMode,
            set: (BB, jB) => {
              BB._textureRepetitionMode = jB
            }
          },
          metadata: dB
        }, pj, rj), (0, QB.e)(null, null, iB, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRepetitionHexTilingParams" in BB,
            get: BB => BB.textureRepetitionHexTilingParams,
            set: (BB, jB) => {
              BB.textureRepetitionHexTilingParams = jB
            }
          },
          metadata: dB
        }, sj, Jj), (0, QB.e)(null, null, qB, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: BB => "_cullBackFaces" in BB,
            get: BB => BB._cullBackFaces,
            set: (BB, jB) => {
              BB._cullBackFaces = jB
            }
          },
          metadata: dB
        }, mj, yj), (0, QB.e)(null, null, fB, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: BB => "sideOrientation" in BB,
            get: BB => BB.sideOrientation,
            set: (BB, jB) => {
              BB.sideOrientation = jB
            }
          },
          metadata: dB
        }, kj, Gj), (0, QB.e)(null, null, oB, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_alphaMode" in BB,
            get: BB => BB._alphaMode,
            set: (BB, jB) => {
              BB._alphaMode = jB
            }
          },
          metadata: dB
        }, Lj, gj), (0, QB.e)(null, null, HB, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: BB => "_needDepthPrePass" in BB,
            get: BB => BB._needDepthPrePass,
            set: (BB, jB) => {
              BB._needDepthPrePass = jB
            }
          },
          metadata: dB
        }, tj, Sj), (0, QB.e)(null, null, DB, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableDepthWrite" in BB,
            get: BB => BB.disableDepthWrite,
            set: (BB, jB) => {
              BB.disableDepthWrite = jB
            }
          },
          metadata: dB
        }, Mj, Ej), (0, QB.e)(null, null, FB, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableColorWrite" in BB,
            get: BB => BB.disableColorWrite,
            set: (BB, jB) => {
              BB.disableColorWrite = jB
            }
          },
          metadata: dB
        }, ij, qj), (0, QB.e)(null, null, YB, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceDepthWrite" in BB,
            get: BB => BB.forceDepthWrite,
            set: (BB, jB) => {
              BB.forceDepthWrite = jB
            }
          },
          metadata: dB
        }, fj, oj), (0, QB.e)(null, null, VB, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: BB => "depthFunction" in BB,
            get: BB => BB.depthFunction,
            set: (BB, jB) => {
              BB.depthFunction = jB
            }
          },
          metadata: dB
        }, Hj, Dj), (0, QB.e)(null, null, hB, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: BB => "separateCullingPass" in BB,
            get: BB => BB.separateCullingPass,
            set: (BB, jB) => {
              BB.separateCullingPass = jB
            }
          },
          metadata: dB
        }, Fj, Yj), (0, QB.e)(null, null, XB, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "_fogEnabled" in BB,
            get: BB => BB._fogEnabled,
            set: (BB, jB) => {
              BB._fogEnabled = jB
            }
          },
          metadata: dB
        }, Vj, hj), (0, QB.e)(null, null, ZB, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: BB => "pointSize" in BB,
            get: BB => BB.pointSize,
            set: (BB, jB) => {
              BB.pointSize = jB
            }
          },
          metadata: dB
        }, Xj, Zj), (0, QB.e)(null, null, AB, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffset" in BB,
            get: BB => BB.zOffset,
            set: (BB, jB) => {
              BB.zOffset = jB
            }
          },
          metadata: dB
        }, Aj, Tj), (0, QB.e)(null, null, TB, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: BB => "zOffsetUnits" in BB,
            get: BB => BB.zOffsetUnits,
            set: (BB, jB) => {
              BB.zOffsetUnits = jB
            }
          },
          metadata: dB
        }, Pj, Wj), (0, QB.e)(null, null, lB, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: BB => "_isVertexOutputInvariant" in BB,
            get: BB => BB._isVertexOutputInvariant,
            set: (BB, jB) => {
              BB._isVertexOutputInvariant = jB
            }
          },
          metadata: dB
        }, ej, lj), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB.TriangleFillMode = 0, BB.WireFrameFillMode = 1, BB.PointFillMode = 2, BB.PointListDrawMode = 3, BB.LineListDrawMode = 4, BB.LineLoopDrawMode = 5, BB.LineStripDrawMode = 6, BB.TriangleStripDrawMode = 7, BB.TriangleFanDrawMode = 8, BB.ClockWiseSideOrientation = 0, BB.CounterClockWiseSideOrientation = 1, BB.ImageProcessingDirtyFlag = 64, BB.TextureDirtyFlag = 1, BB.LightDirtyFlag = 2, BB.FresnelDirtyFlag = 4, BB.AttributesDirtyFlag = 8, BB.MiscDirtyFlag = 16, BB.PrePassDirtyFlag = 32, BB.AllDirtyFlag = 127, BB.MATERIAL_OPAQUE = 0, BB.MATERIAL_ALPHATEST = 1, BB.MATERIAL_ALPHABLEND = 2, BB.MATERIAL_ALPHATESTANDBLEND = 3, BB.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, BB.MATERIAL_NORMALBLENDMETHOD_RNM = 1, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.OnEventObservable = new IB.c, BB.ForceVertexOutputInvariant = !1, BB._AllDirtyCallBack = BB => BB.markAllAsDirty(), BB._ImageProcessingDirtyCallBack = BB => BB.markAsImageProcessingDirty(), BB._TextureDirtyCallBack = BB => BB.markAsTexturesDirty(), BB._FresnelDirtyCallBack = BB => BB.markAsFresnelDirty(), BB._MiscDirtyCallBack = BB => BB.markAsMiscDirty(), BB._PrePassDirtyCallBack = BB => BB.markAsPrePassDirty(), BB._LightsDirtyCallBack = BB => BB.markAsLightDirty(), BB._AttributeDirtyCallBack = BB => BB.markAsAttributesDirty(), BB._FresnelAndMiscDirtyCallBack = jB => {
        BB._FresnelDirtyCallBack(jB), BB._MiscDirtyCallBack(jB)
      }, BB._TextureAndMiscDirtyCallBack = jB => {
        BB._TextureDirtyCallBack(jB), BB._MiscDirtyCallBack(jB)
      }, BB._DirtyCallbackArray = [], BB._RunDirtyCallBacks = jB => {
        for (const zB of BB._DirtyCallbackArray) zB(jB)
      }, BB
    })();
    Object.getOwnPropertyDescriptor(GB.prototype, "pluginManager") || Object.defineProperty(GB.prototype, "pluginManager", (0, kB.f)("Material", "pluginManager"))
  },
  40435: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(39980);
    class nB {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(BB) {
        this._DiffuseTextureEnabled !== BB && (this._DiffuseTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(BB) {
        this._BaseWeightTextureEnabled !== BB && (this._BaseWeightTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(BB) {
        this._BaseDiffuseRoughnessTextureEnabled !== BB && (this._BaseDiffuseRoughnessTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(BB) {
        this._DetailTextureEnabled !== BB && (this._DetailTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(BB) {
        this._DecalMapEnabled !== BB && (this._DecalMapEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(BB) {
        this._AmbientTextureEnabled !== BB && (this._AmbientTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(BB) {
        this._OpacityTextureEnabled !== BB && (this._OpacityTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(BB) {
        this._ReflectionTextureEnabled !== BB && (this._ReflectionTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(BB) {
        this._EmissiveTextureEnabled !== BB && (this._EmissiveTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(BB) {
        this._SpecularTextureEnabled !== BB && (this._SpecularTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(BB) {
        this._BumpTextureEnabled !== BB && (this._BumpTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(BB) {
        this._LightmapTextureEnabled !== BB && (this._LightmapTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(BB) {
        this._RefractionTextureEnabled !== BB && (this._RefractionTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(BB) {
        this._ColorGradingTextureEnabled !== BB && (this._ColorGradingTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(BB) {
        this._FresnelEnabled !== BB && (this._FresnelEnabled = BB, QB.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(BB) {
        this._ClearCoatTextureEnabled !== BB && (this._ClearCoatTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(BB) {
        this._ClearCoatBumpTextureEnabled !== BB && (this._ClearCoatBumpTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(BB) {
        this._ClearCoatTintTextureEnabled !== BB && (this._ClearCoatTintTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(BB) {
        this._SheenTextureEnabled !== BB && (this._SheenTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(BB) {
        this._AnisotropicTextureEnabled !== BB && (this._AnisotropicTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(BB) {
        this._ThicknessTextureEnabled !== BB && (this._ThicknessTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(BB) {
        this._RefractionIntensityTextureEnabled !== BB && (this._RefractionIntensityTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(BB) {
        this._TranslucencyIntensityTextureEnabled !== BB && (this._TranslucencyIntensityTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(BB) {
        this._TranslucencyColorTextureEnabled !== BB && (this._TranslucencyColorTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(BB) {
        this._IridescenceTextureEnabled !== BB && (this._IridescenceTextureEnabled = BB, QB.c.MarkAllMaterialsAsDirty(1))
      }
    }
    nB._DiffuseTextureEnabled = !0, nB._BaseWeightTextureEnabled = !0, nB._BaseDiffuseRoughnessTextureEnabled = !0, nB._DetailTextureEnabled = !0, nB._DecalMapEnabled = !0, nB._AmbientTextureEnabled = !0, nB._OpacityTextureEnabled = !0, nB._ReflectionTextureEnabled = !0, nB._EmissiveTextureEnabled = !0, nB._SpecularTextureEnabled = !0, nB._BumpTextureEnabled = !0, nB._LightmapTextureEnabled = !0, nB._RefractionTextureEnabled = !0, nB._ColorGradingTextureEnabled = !0, nB._FresnelEnabled = !0, nB._ClearCoatTextureEnabled = !0, nB._ClearCoatBumpTextureEnabled = !0, nB._ClearCoatTintTextureEnabled = !0, nB._SheenTextureEnabled = !0, nB._AnisotropicTextureEnabled = !0, nB._ThicknessTextureEnabled = !0, nB._RefractionIntensityTextureEnabled = !0, nB._TranslucencyIntensityTextureEnabled = !0, nB._TranslucencyColorTextureEnabled = !0, nB._IridescenceTextureEnabled = !0
  },
  40428: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => gB,
      E: () => HB,
      H: () => tB,
      J: () => fB,
      K: () => oB,
      N: () => sB,
      Q: () => rB,
      S: () => WB,
      U: () => XB,
      Y: () => VB,
      ab: () => YB,
      c: () => FB,
      cb: () => LB,
      db: () => DB,
      f: () => SB,
      gb: () => eB,
      hb: () => lB,
      j: () => pB,
      lb: () => wB,
      n: () => kB,
      nb: () => cB,
      q: () => GB,
      rb: () => KB,
      t: () => qB,
      vb: () => CB,
      x: () => uB,
      xb: () => JB,
      y: () => mB,
      z: () => yB
    });
    var QB = zB(38783),
      nB = zB(37197),
      dB = zB(40284),
      IB = zB(40432),
      NB = zB(40435);

    function uB(BB, jB, zB) {
      if (!BB || BB.LOGARITHMICDEPTH || BB.indexOf && BB.indexOf("LOGARITHMICDEPTH") >= 0) {
        const BB = zB.activeCamera;
        1 === BB.mode && QB.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), jB.setFloat("logarithmicDepthConstant", 2 / (Math.log(BB.maxZ + 1) / Math.LN2))
      }
    }
    const UB = {
        r: 0,
        g: 0,
        b: 0
      },
      aB = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function pB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      zB && BB.fogEnabled && (!jB || jB.applyFog) && 0 !== BB.fogMode && (zB.setFloat4("vFogInfos", BB.fogMode, BB.fogStart, BB.fogEnd, BB.fogDensity), QB ? (BB.fogColor.toLinearSpaceToRef(UB, BB.wJ().useExactSrgbConversions), zB.setColor3("vFogColor", UB)) : zB.setColor3("vFogColor", BB.fogColor))
    }

    function rB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
      const pB = BB.numMaxInfluencers || BB.numInfluencers;
      return pB <= 0 ? 0 : (jB.push("#define MORPHTARGETS"), BB.hasPositions && jB.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), BB.hasNormals && jB.push("#define MORPHTARGETTEXTURE_HASNORMALS"), BB.hasTangents && jB.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), BB.hasUVs && jB.push("#define MORPHTARGETTEXTURE_HASUVS"), BB.hasUV2s && jB.push("#define MORPHTARGETTEXTURE_HASUV2S"), BB.hasColors && jB.push("#define MORPHTARGETTEXTURE_HASCOLORS"), BB.supportsPositions && nB && jB.push("#define MORPHTARGETS_POSITION"), BB.supportsNormals && dB && jB.push("#define MORPHTARGETS_NORMAL"), BB.supportsTangents && IB && jB.push("#define MORPHTARGETS_TANGENT"), BB.supportsUVs && NB && jB.push("#define MORPHTARGETS_UV"), BB.supportsUV2s && uB && jB.push("#define MORPHTARGETS_UV2"), BB.supportsColors && UB && jB.push("#define MORPHTARGETS_COLOR"), jB.push("#define NUM_MORPH_INFLUENCERS " + pB), BB.isUsingTextureForTargets && jB.push("#define MORPHTARGETS_TEXTURE"), aB.NUM_MORPH_INFLUENCERS = pB, aB.NORMAL = dB, aB.TANGENT = IB, aB.UV = NB, aB.UV2 = uB, aB.COLOR = UB, sB(zB, QB, aB, nB), pB)
    }

    function sB(BB, jB, zB) {
      let dB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const IB = zB.NUM_MORPH_INFLUENCERS;
      if (IB > 0 && nB.c.LastCreatedEngine) {
        const NB = nB.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          uB = jB.morphTargetManager;
        if (uB?.isUsingTextureForTargets) return;
        const UB = uB && uB.supportsPositions && dB,
          aB = uB && uB.supportsNormals && zB.NORMAL,
          pB = uB && uB.supportsTangents && zB.TANGENT,
          rB = uB && uB.supportsUVs && zB.UV1,
          sB = uB && uB.supportsUV2s && zB.UV2,
          JB = uB && uB.supportsColors && zB.VERTEXCOLOR;
        for (let zB = 0; zB < IB; zB++) UB && BB.push("position" + zB), aB && BB.push("normal" + zB), pB && BB.push("tangent" + zB), rB && BB.push("uv_" + zB), sB && BB.push("uv2_" + zB), JB && BB.push("color" + zB), BB.length > NB && QB.c.Error("Cannot add more vertex attributes for mesh " + jB.name)
      }
    }

    function JB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      BB.push("world0"), BB.push("world1"), BB.push("world2"), BB.push("world3"), jB && (BB.push("previousWorld0"), BB.push("previousWorld1"), BB.push("previousWorld2"), BB.push("previousWorld3"))
    }

    function mB(BB, jB) {
      const zB = BB.morphTargetManager;
      BB && zB && jB.setFloatArray("morphTargetInfluences", zB.influences)
    }

    function yB(BB, jB) {
      jB.bindToEffect(BB, "Scene")
    }

    function kB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        aB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        pB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        rB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (BB.texturesEnabled && nB && NB.d.ReflectionTextureEnabled) {
        if (zB.l_("reflectionMatrix", nB.getReflectionTextureMatrix()), zB.updateFloat2("vReflectionInfos", nB.level * BB.iblIntensity, rB), uB && nB.boundingBoxSize) {
          const BB = nB;
          zB.updateVector3("vReflectionPosition", BB.boundingBoxPosition), zB.updateVector3("vReflectionSize", BB.boundingBoxSize)
        }
        if (dB) {
          const BB = nB.getSize().width;
          zB.updateFloat2("vReflectionFilteringInfo", BB, Math.log2(BB))
        }
        if (aB && !jB.USEIRRADIANCEMAP) {
          const BB = nB.sphericalPolynomial;
          if (jB.USESPHERICALFROMREFLECTIONMAP && BB)
            if (jB.SPHERICAL_HARMONICS) {
              const jB = BB.preScaledHarmonics;
              zB.updateVector3("vSphericalL00", jB.l00), zB.updateVector3("vSphericalL1_1", jB.l1_1), zB.updateVector3("vSphericalL10", jB.l10), zB.updateVector3("vSphericalL11", jB.l11), zB.updateVector3("vSphericalL2_2", jB.l2_2), zB.updateVector3("vSphericalL2_1", jB.l2_1), zB.updateVector3("vSphericalL20", jB.l20), zB.updateVector3("vSphericalL21", jB.l21), zB.updateVector3("vSphericalL22", jB.l22)
            } else zB.updateFloat3("vSphericalX", BB.x.x, BB.x.y, BB.x.z), zB.updateFloat3("vSphericalY", BB.y.x, BB.y.y, BB.y.z), zB.updateFloat3("vSphericalZ", BB.z.x, BB.z.y, BB.z.z), zB.updateFloat3("vSphericalXX_ZZ", BB.xx.x - BB.zz.x, BB.xx.y - BB.zz.y, BB.xx.z - BB.zz.z), zB.updateFloat3("vSphericalYY_ZZ", BB.yy.x - BB.zz.x, BB.yy.y - BB.zz.y, BB.yy.z - BB.zz.z), zB.updateFloat3("vSphericalZZ", BB.zz.x, BB.zz.y, BB.zz.z), zB.updateFloat3("vSphericalXY", BB.xy.x, BB.xy.y, BB.xy.z), zB.updateFloat3("vSphericalYZ", BB.yz.x, BB.yz.y, BB.yz.z), zB.updateFloat3("vSphericalZX", BB.zx.x, BB.zx.y, BB.zx.z)
        } else UB && jB.USEIRRADIANCEMAP && jB.USE_IRRADIANCE_DOMINANT_DIRECTION && nB.irradianceTexture && zB.updateVector3("vReflectionDominantDirection", nB.irradianceTexture._dominantDirection);
        IB && zB.updateFloat3("vReflectionMicrosurfaceInfos", nB.getSize().width, nB.lodGenerationScale, nB.lodGenerationOffset)
      }
      pB && zB.updateColor3("vReflectionColor", QB)
    }

    function GB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (QB && NB.d.ReflectionTextureEnabled) {
        jB.LODBASEDMICROSFURACE ? zB.setTexture("reflectionSampler", QB) : (zB.setTexture("reflectionSampler", QB._lodTextureMid || QB), zB.setTexture("reflectionSamplerLow", QB._lodTextureLow || QB), zB.setTexture("reflectionSamplerHigh", QB._lodTextureHigh || QB)), jB.USEIRRADIANCEMAP && zB.setTexture("irradianceSampler", QB.irradianceTexture);
        const dB = BB.iblCdfGenerator;
        nB && dB && zB.setTexture("icdfSampler", dB.getIcdfTexture())
      }
    }

    function LB(BB, jB, zB) {
      jB._needUVs = !0, jB[zB] = !0, BB.optimizeUVAllocation && BB.getTextureMatrix().isIdentityAs3x2() ? (jB[zB + "DIRECTUV"] = BB.coordinatesIndex + 1, jB["MAINUV" + (BB.coordinatesIndex + 1)] = !0) : jB[zB + "DIRECTUV"] = 0
    }

    function gB(BB, jB, zB) {
      const QB = BB.getTextureMatrix();
      jB.l_(zB + "Matrix", QB)
    }

    function tB(BB, jB, zB) {
      zB.BAKED_VERTEX_ANIMATION_TEXTURE && zB.INSTANCES && BB.push("bakedVertexAnimationSettingsInstanced")
    }

    function SB(BB, jB, zB) {
      var QB;
      if (jB && BB && (BB.computeBonesUsingShaders && jB._bonesComputationForcedToCPU && (BB.computeBonesUsingShaders = !1), BB.useBones && BB.computeBonesUsingShaders && BB.skeleton)) {
        const nB = BB.skeleton;
        if (nB.isUsingTextureForMatrices && jB.getUniformIndex("boneTextureInfo") > -1) {
          const zB = nB.getTransformMatrixTexture(BB);
          jB.setTexture("boneSampler", zB), jB.setFloat2("boneTextureInfo", nB._textureWidth, nB._textureHeight)
        } else {
          const dB = nB.getTransformMatrices(BB);
          dB && (jB.setMatrices("mBones", dB), zB && BB.aY().prePassRenderer && BB.aY().prePassRenderer.getIndex(2) && (zB.previousBones[BB.uniqueId] || (zB.previousBones[BB.uniqueId] = dB.slice()), jB.setMatrices("mPreviousBones", zB.previousBones[BB.uniqueId]), QB = dB, zB.previousBones[BB.uniqueId].set(QB)))
        }
      }
    }

    function MB(BB, jB, zB, QB, nB) {
      let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      BB._bindLight(jB, zB, QB, nB, dB)
    }
    const EB = 4,
      iB = new WeakMap;

    function qB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const dB = Math.min(jB.lightSources.length, nB);
      for (let IB = 0; IB < dB; IB++) {
        MB(jB.lightSources[IB], IB, BB, zB, "boolean" === typeof QB ? QB : QB.SPECULARTERM, jB.receiveShadows)
      }
    }

    function fB(BB, jB, zB, QB) {
      zB.NUM_BONE_INFLUENCERS > 0 && (QB.addCPUSkinningFallback(0, jB), BB.push("matricesIndices"), BB.push("matricesWeights"), zB.NUM_BONE_INFLUENCERS > 4 && (BB.push("matricesIndicesExtra"), BB.push("matricesWeightsExtra")))
    }

    function oB(BB, jB) {
      (jB.INSTANCES || jB.THIN_INSTANCES) && JB(BB, !!jB.PREPASS_VELOCITY), jB.INSTANCESCOLOR && BB.push("instanceColor")
    }

    function HB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nB = 0;
      for (let dB = 0; dB < zB && BB["LIGHT" + dB]; dB++) dB > 0 && (nB = QB + dB, jB.addFallback(nB, "LIGHT" + dB)), BB.SHADOWS || (BB["SHADOW" + dB] && jB.addFallback(QB, "SHADOW" + dB), BB["SHADOWPCF" + dB] && jB.addFallback(QB, "SHADOWPCF" + dB), BB["SHADOWPCSS" + dB] && jB.addFallback(QB, "SHADOWPCSS" + dB), BB["SHADOWPOISSON" + dB] && jB.addFallback(QB, "SHADOWPOISSON" + dB), BB["SHADOWESM" + dB] && jB.addFallback(QB, "SHADOWESM" + dB), BB["SHADOWCLOSEESM" + dB] && jB.addFallback(QB, "SHADOWCLOSEESM" + dB));
      return nB
    }

    function DB(BB, jB, zB, QB, nB, dB, IB) {
      let NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        UB = arguments.length > 9 ? arguments[9] : void 0,
        aB = arguments.length > 10 ? arguments[10] : void 0;
      if (IB._areMiscDirty) {
        IB.LOGARITHMICDEPTH = zB, IB.POINTSIZE = QB, IB.FOG = nB && function(BB, jB) {
          return jB.fogEnabled && BB.applyFog && 0 !== jB.fogMode
        }(BB, jB), IB.NONUNIFORMSCALING = BB.nonUniformScaling, IB.ALPHATEST = dB, IB.DECAL_AFTER_DETAIL = NB, IB.USE_VERTEX_PULLING = uB, IB.RIGHT_HANDED = jB.useRightHandedSystem;
        const pB = uB ? UB?.geometry?.getIndexBuffer() : null,
          rB = !!UB && UB.isUnIndexed;
        IB.VERTEX_PULLING_USE_INDEX_BUFFER = !!pB && !rB, IB.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!pB || rB) && pB.is32Bits, IB.VERTEXOUTPUT_INVARIANT = !!aB
      }
    }

    function FB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!BB.lightsEnabled || QB) return !0;
      const nB = jB.lightSources,
        dB = Math.min(nB.length, zB);
      for (let IB = 0; IB < dB; IB++)
        if (!nB[IB].areLightTexturesReady()) return !1;
      return !0
    }

    function YB(BB, jB, zB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!zB._areLightsDirty) return zB._needNormals;
      const NB = dB;
      dB = function(BB, jB) {
        const zB = BB.wJ().getCaps().maxUniformBuffersPerShaderStage;
        if (null == zB) return jB;
        const QB = Math.max(zB - EB, 1);
        return Math.min(jB, QB)
      }(BB, dB);
      let uB = 0;
      const UB = {
        needNormals: zB._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (BB.lightsEnabled && !IB) {
        jB.lightSources.length > dB && dB < NB && function(BB, jB, zB, nB) {
          let dB = iB.get(BB);
          dB || (dB = new Set, iB.set(BB, dB)), dB.has(nB) || (dB.add(nB), QB.c.Warn(`maxSimultaneousLights is ${jB} but this engine supports at most ${zB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${nB} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${nB+EB} uniform buffers, over the device limit of ${BB.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${zB}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${zB} or less to silence this warning.`))
        }(BB.wJ(), NB, dB, Math.min(jB.lightSources.length, NB));
        for (const QB of jB.lightSources)
          if (hB(BB, jB, QB, uB, zB, nB, UB), uB++, uB === dB) break
      }
      zB.SPECULARTERM = UB.specularEnabled, zB.SHADOWS = UB.shadowEnabled;
      const aB = Math.max(dB, zB.MAXLIGHTCOUNT || 0);
      for (let QB = uB; QB < aB; QB++) void 0 !== zB["LIGHT" + QB] && (zB["LIGHT" + QB] = !1, zB["HEMILIGHT" + QB] = !1, zB["POINTLIGHT" + QB] = !1, zB["DIRLIGHT" + QB] = !1, zB["SPOTLIGHT" + QB] = !1, zB["AREALIGHT" + QB] = !1, zB["CLUSTLIGHT" + QB] = !1, zB["SHADOW" + QB] = !1, zB["SHADOWCSM" + QB] = !1, zB["SHADOWCSMDEBUG" + QB] = !1, zB["SHADOWCSMNUM_CASCADES" + QB] = !1, zB["SHADOWCSMUSESHADOWMAXZ" + QB] = !1, zB["SHADOWCSMNOBLEND" + QB] = !1, zB["SHADOWCSM_RIGHTHANDED" + QB] = !1, zB["SHADOWPCF" + QB] = !1, zB["SHADOWPCSS" + QB] = !1, zB["SHADOWPOISSON" + QB] = !1, zB["SHADOWESM" + QB] = !1, zB["SHADOWCLOSEESM" + QB] = !1, zB["SHADOWCUBE" + QB] = !1, zB["SHADOWLOWQUALITY" + QB] = !1, zB["SHADOWMEDIUMQUALITY" + QB] = !1);
      zB.LIGHTCOUNT = uB, zB.MAXLIGHTCOUNT = dB;
      const pB = BB.wJ().getCaps();
      return void 0 === zB.SHADOWFLOAT && (UB.needRebuild = !0), zB.SHADOWFLOAT = UB.shadowEnabled && (pB.textureFloatRender && pB.textureFloatLinearFiltering || pB.textureHalfFloatRender && pB.textureHalfFloatLinearFiltering), zB.LIGHTMAPEXCLUDED = UB.lightmapMode, UB.needRebuild && zB.rebuild(), UB.needNormals
    }

    function VB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (jB && NB.d.ReflectionTextureEnabled) {
        if (!jB.isReadyOrNotBlocking()) return !1;
        zB._needNormals = !0, zB.REFLECTION = !0, zB.GAMMAREFLECTION = jB.gammaSpace, zB.RGBDREFLECTION = jB.isRGBD, zB.LODINREFLECTIONALPHA = jB.lodLevelInAlpha, zB.LINEARSPECULARREFLECTION = jB.linearSpecularLOD, zB.USEIRRADIANCEMAP = !1, zB.LODBASEDMICROSFURACE = BB.wJ().getCaps().textureLOD;
        const IB = BB.wJ();
        switch (QB && nB > 0 ? (zB.NUM_SAMPLES = "" + nB, IB._features.needTypeSuffixInShaderConstants && (zB.NUM_SAMPLES = zB.NUM_SAMPLES + "u"), zB.REALTIME_FILTERING = !0, BB.iblCdfGenerator && (zB.IBL_CDF_FILTERING = !0)) : zB.REALTIME_FILTERING = !1, zB.INVERTCUBICMAP = 6 === jB.coordinatesMode, zB.REFLECTIONMAP_3D = jB.isCube, zB.REFLECTIONMAP_OPPOSITEZ = zB.REFLECTIONMAP_3D && BB.useRightHandedSystem ? !jB.invertZ : jB.invertZ, zB.REFLECTIONMAP_CUBIC = !1, zB.REFLECTIONMAP_EXPLICIT = !1, zB.REFLECTIONMAP_PLANAR = !1, zB.REFLECTIONMAP_PROJECTION = !1, zB.REFLECTIONMAP_SKYBOX = !1, zB.REFLECTIONMAP_SPHERICAL = !1, zB.REFLECTIONMAP_EQUIRECTANGULAR = !1, zB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, zB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, jB.coordinatesMode) {
          case 0:
            zB.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            zB.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            zB.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            zB.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            zB.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            zB.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            zB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            zB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            zB.REFLECTIONMAP_CUBIC = !0, zB.USE_LOCAL_REFLECTIONMAP_CUBIC = !!jB.boundingBoxSize
        }
        5 !== jB.coordinatesMode && (jB.irradianceTexture ? (zB.USEIRRADIANCEMAP = !0, zB.USESPHERICALFROMREFLECTIONMAP = !1, zB.USESPHERICALINVERTEX = !1, jB.irradianceTexture._dominantDirection ? zB.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : zB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : jB.isCube && (zB.USESPHERICALFROMREFLECTIONMAP = !0, zB.USEIRRADIANCEMAP = !1, zB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, zB.USESPHERICALINVERTEX = dB))
      } else zB.REFLECTION = !1, zB.REFLECTIONMAP_3D = !1, zB.REFLECTIONMAP_SPHERICAL = !1, zB.REFLECTIONMAP_PLANAR = !1, zB.REFLECTIONMAP_CUBIC = !1, zB.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, zB.REFLECTIONMAP_PROJECTION = !1, zB.REFLECTIONMAP_SKYBOX = !1, zB.REFLECTIONMAP_EXPLICIT = !1, zB.REFLECTIONMAP_EQUIRECTANGULAR = !1, zB.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, zB.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, zB.INVERTCUBICMAP = !1, zB.USESPHERICALFROMREFLECTIONMAP = !1, zB.USEIRRADIANCEMAP = !1, zB.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, zB.USESPHERICALINVERTEX = !1, zB.REFLECTIONMAP_OPPOSITEZ = !1, zB.LODINREFLECTIONALPHA = !1, zB.GAMMAREFLECTION = !1, zB.RGBDREFLECTION = !1, zB.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function hB(BB, jB, zB, QB, nB, IB, NB) {
      switch (NB.needNormals = !0, void 0 === nB["LIGHT" + QB] && (NB.needRebuild = !0), nB["LIGHT" + QB] = !0, nB["SPOTLIGHT" + QB] = !1, nB["HEMILIGHT" + QB] = !1, nB["POINTLIGHT" + QB] = !1, nB["DIRLIGHT" + QB] = !1, nB["AREALIGHT" + QB] = !1, nB["CLUSTLIGHT" + QB] = !1, zB.prepareLightSpecificDefines(nB, QB), nB["LIGHT_FALLOFF_PHYSICAL" + QB] = !1, nB["LIGHT_FALLOFF_GLTF" + QB] = !1, nB["LIGHT_FALLOFF_STANDARD" + QB] = !1, zB.falloffType) {
        case dB.d.FALLOFF_GLTF:
          nB["LIGHT_FALLOFF_GLTF" + QB] = !0;
          break;
        case dB.d.FALLOFF_PHYSICAL:
          nB["LIGHT_FALLOFF_PHYSICAL" + QB] = !0;
          break;
        case dB.d.FALLOFF_STANDARD:
          nB["LIGHT_FALLOFF_STANDARD" + QB] = !0
      }
      if (IB && !zB.specular.equalsFloats(0, 0, 0) && (NB.specularEnabled = !0), nB["SHADOW" + QB] = !1, nB["SHADOWCSM" + QB] = !1, nB["SHADOWCSMDEBUG" + QB] = !1, nB["SHADOWCSMNUM_CASCADES" + QB] = !1, nB["SHADOWCSMUSESHADOWMAXZ" + QB] = !1, nB["SHADOWCSMNOBLEND" + QB] = !1, nB["SHADOWCSM_RIGHTHANDED" + QB] = !1, nB["SHADOWPCF" + QB] = !1, nB["SHADOWPCSS" + QB] = !1, nB["SHADOWPOISSON" + QB] = !1, nB["SHADOWESM" + QB] = !1, nB["SHADOWCLOSEESM" + QB] = !1, nB["SHADOWCUBE" + QB] = !1, nB["SHADOWLOWQUALITY" + QB] = !1, nB["SHADOWMEDIUMQUALITY" + QB] = !1, jB && jB.receiveShadows && BB.shadowsEnabled && zB.shadowEnabled) {
        const jB = zB.getShadowGenerator(BB.activeCamera) ?? zB.getShadowGenerator();
        if (jB) {
          const BB = jB.getShadowMap();
          BB && BB.renderList && BB.renderList.length > 0 && (NB.shadowEnabled = !0, jB.prepareDefines(nB, QB))
        }
      }
      zB.lightmapMode != dB.d.LIGHTMAP_DEFAULT ? (NB.lightmapMode = !0, nB["LIGHTMAPEXCLUDED" + QB] = !0, nB["LIGHTMAPNOSPECULAR" + QB] = zB.lightmapMode == dB.d.LIGHTMAP_SHADOWSONLY) : (nB["LIGHTMAPEXCLUDED" + QB] = !1, nB["LIGHTMAPNOSPECULAR" + QB] = !1)
    }

    function XB(BB, jB, zB, QB, nB) {
      let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        NB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uB = function(BB, jB) {
          let zB = !1;
          if (BB.activeCamera) {
            const QB = jB.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              nB = jB.CAMERA_PERSPECTIVE ? 1 : 0,
              dB = 1 === BB.activeCamera.mode ? 1 : 0,
              IB = 0 === BB.activeCamera.mode ? 1 : 0;
            (QB ^ dB || nB ^ IB) && (jB.CAMERA_ORTHOGRAPHIC = 1 === dB, jB.CAMERA_PERSPECTIVE = 1 === IB, zB = !0)
          }
          return zB
        }(BB, QB);
      !1 !== dB && (uB = (0, IB.i)(zB, BB, QB)), QB.DEPTHPREPASS !== !jB.getColorWrite() && (QB.DEPTHPREPASS = !QB.DEPTHPREPASS, uB = !0), QB.INSTANCES !== nB && (QB.INSTANCES = nB, uB = !0), QB.THIN_INSTANCES !== NB && (QB.THIN_INSTANCES = NB, uB = !0), uB && QB.markAsUnprocessed()
    }
    const ZB = 40,
      AB = 64,
      TB = new WeakMap,
      PB = new WeakSet;

    function WB(BB, jB, zB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        IB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        NB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!jB._areAttributesDirty && jB._needNormals === jB._normals && jB._needUVs === jB._uvs) return !1;
      jB._normals = jB._needNormals, jB._uvs = jB._needUVs, jB.NORMAL = jB._needNormals && BB.isVerticesDataPresent("normal"), jB._needNormals && BB.isVerticesDataPresent("tangent") && (jB.TANGENT = !0);
      for (let QB = 1; QB <= 6; ++QB) jB["UV" + QB] = !!jB._needUVs && BB.isVerticesDataPresent(`uv${1===QB?"":QB}`);
      if (zB) {
        const zB = BB.useVertexColors && BB.isVerticesDataPresent("color");
        jB.VERTEXCOLOR = zB, jB.VERTEXALPHA = BB.hasVertexAlpha && zB && IB
      }
      return BB.isVerticesDataPresent("instanceColor") && (BB.bQB || BB.hasThinInstances) && (jB.INSTANCESCOLOR = !0), nB && function(BB, jB) {
        if (BB.useBones && BB.computeBonesUsingShaders && BB.skeleton) {
          jB.NUM_BONE_INFLUENCERS = BB.numBoneInfluencers;
          const zB = void 0 !== jB.BONETEXTURE;
          if (BB.skeleton.isUsingTextureForMatrices && zB) jB.BONETEXTURE = !0;
          else {
            jB.BonesPerMesh = BB.skeleton.bones.length + 1, jB.BONETEXTURE = !zB && void 0;
            const nB = BB.aY(),
              dB = nB.prePassRenderer;
            if (dB && dB.enabled) {
              const zB = -1 === dB.excludedSkinnedMesh.indexOf(BB);
              jB.BONES_VELOCITY_ENABLED = zB
            }
            const IB = !0 === jB.MULTIVIEW,
              NB = 2 * jB.BonesPerMesh + (IB ? 1 : 0);
            if (TB.get(BB.skeleton) !== NB) {
              TB.set(BB.skeleton, NB);
              const zB = nB.wJ().getCaps().maxVertexUniformVectors;
              if (zB && !PB.has(BB.skeleton)) {
                const nB = 4 * jB.BonesPerMesh,
                  dB = IB ? AB : ZB,
                  NB = Math.max(zB - dB, 0);
                (nB > NB || IB && 3 * nB > zB) && (PB.add(BB.skeleton), QB.c.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${nB} of ~${NB} usable uniform vectors${IB?" (multiview)":""} on a device reporting ${zB}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else jB.NUM_BONE_INFLUENCERS = 0, jB.BonesPerMesh = 0, void 0 !== jB.BONETEXTURE && (jB.BONETEXTURE = !1)
      }(BB, jB), dB && function(BB, jB) {
        const zB = BB.morphTargetManager;
        zB ? (jB.MORPHTARGETS_UV = zB.supportsUVs && jB.UV1, jB.MORPHTARGETS_UV2 = zB.supportsUV2s && jB.UV2, jB.MORPHTARGETS_TANGENT = zB.supportsTangents && jB.TANGENT, jB.MORPHTARGETS_NORMAL = zB.supportsNormals && jB.NORMAL, jB.MORPHTARGETS_POSITION = zB.supportsPositions, jB.MORPHTARGETS_COLOR = zB.supportsColors, jB.MORPHTARGETTEXTURE_HASUVS = zB.hasUVs, jB.MORPHTARGETTEXTURE_HASUV2S = zB.hasUV2s, jB.MORPHTARGETTEXTURE_HASTANGENTS = zB.hasTangents, jB.MORPHTARGETTEXTURE_HASNORMALS = zB.hasNormals, jB.MORPHTARGETTEXTURE_HASPOSITIONS = zB.hasPositions, jB.MORPHTARGETTEXTURE_HASCOLORS = zB.hasColors, jB.NUM_MORPH_INFLUENCERS = zB.numMaxInfluencers || zB.numInfluencers, jB.MORPHTARGETS = jB.NUM_MORPH_INFLUENCERS > 0, jB.MORPHTARGETS_TEXTURE = zB.isUsingTextureForTargets) : (jB.MORPHTARGETS_UV = !1, jB.MORPHTARGETS_UV2 = !1, jB.MORPHTARGETS_TANGENT = !1, jB.MORPHTARGETS_NORMAL = !1, jB.MORPHTARGETS_POSITION = !1, jB.MORPHTARGETS_COLOR = !1, jB.MORPHTARGETTEXTURE_HASUVS = !1, jB.MORPHTARGETTEXTURE_HASUV2S = !1, jB.MORPHTARGETTEXTURE_HASTANGENTS = !1, jB.MORPHTARGETTEXTURE_HASNORMALS = !1, jB.MORPHTARGETTEXTURE_HASPOSITIONS = !1, jB.MORPHTARGETTEXTURE_HAS_COLORS = !1, jB.MORPHTARGETS = !1, jB.NUM_MORPH_INFLUENCERS = 0)
      }(BB, jB), NB && function(BB, jB) {
        const zB = BB.bakedVertexAnimationManager;
        jB.BAKED_VERTEX_ANIMATION_TEXTURE = !(!zB || !zB.isEnabled)
      }(BB, jB), !0
    }

    function eB(BB, jB) {
      if (BB.activeCamera) {
        const zB = jB.MULTIVIEW;
        jB.MULTIVIEW = null !== BB.activeCamera.outputRenderTarget && BB.activeCamera.outputRenderTarget.getViewCount() > 1, jB.MULTIVIEW != zB && jB.markAsUnprocessed()
      }
    }

    function lB(BB, jB, zB) {
      const QB = jB.ORDER_INDEPENDENT_TRANSPARENCY,
        nB = jB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      jB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && zB, jB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.wJ().getCaps().textureFloatLinearFiltering, QB === jB.ORDER_INDEPENDENT_TRANSPARENCY && nB === jB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || jB.markAsUnprocessed()
    }

    function wB(BB, jB, zB) {
      const QB = jB.PREPASS;
      if (!jB._arePrePassDirty) return;
      const nB = [{
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
      if (BB.prePassRenderer && BB.prePassRenderer.enabled && zB) {
        jB.PREPASS = !0, jB.SCENE_MRT_COUNT = BB.prePassRenderer.mrtCount, jB.PREPASS_NORMAL_WORLDSPACE = BB.prePassRenderer.generateNormalsInWorldSpace, jB.PREPASS_COLOR = !0, jB.PREPASS_COLOR_INDEX = 0;
        for (let zB = 0; zB < nB.length; zB++) {
          const QB = BB.prePassRenderer.getIndex(nB[zB].type); - 1 !== QB ? (jB[nB[zB].define] = !0, jB[nB[zB].index] = QB) : jB[nB[zB].define] = !1
        }
      } else {
        jB.PREPASS = !1;
        for (let BB = 0; BB < nB.length; BB++) jB[nB[BB].define] = !1
      }
      jB.PREPASS != QB && (jB.markAsUnprocessed(), jB.markAsImageProcessingDirty())
    }

    function xB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        UB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      nB && nB.push("Light" + BB), dB || (jB.push("vLightData" + BB, "vLightDiffuse" + BB, "vLightSpecular" + BB, "vLightDirection" + BB, "vLightWidth" + BB, "vLightHeight" + BB, "vLightFalloff" + BB, "vLightGround" + BB, "vSliceData" + BB, "vSliceRanges" + BB, "lightMatrix" + BB, "shadowsInfo" + BB, "depthValues" + BB), zB.push("shadowTexture" + BB), zB.push("depthTexture" + BB), jB.push("viewFrustumZ" + BB, "cascadeBlendFactor" + BB, "lightSizeUVCorrection" + BB, "depthCorrection" + BB, "penumbraDarkness" + BB, "frustumLengths" + BB), QB && (zB.push("projectionLightTexture" + BB), jB.push("textureProjectionMatrix" + BB)), IB && zB.push("iesLightTexture" + BB), uB && zB.push("rectAreaLightEmissionTexture" + BB), NB && (zB.push("lightDataTexture" + BB), UB || zB.push("tileMaskTexture" + BB)))
    }

    function KB(BB, jB, zB) {
      const QB = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      zB && QB.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), BB.push(...QB);
      jB.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function CB(BB, jB, zB) {
      let QB, nB, dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        IB = null;
      if (BB.uniformsNames) {
        const NB = BB;
        QB = NB.uniformsNames, nB = NB.uniformBuffersNames, jB = NB.samplers, zB = NB.defines, dB = NB.maxSimultaneousLights || 0, IB = NB.shaderLanguage ?? null
      } else QB = BB, jB || (jB = []);
      for (let NB = 0; NB < dB && zB["LIGHT" + NB]; NB++) xB(NB, QB, jB, zB["PROJECTEDLIGHTTEXTURE" + NB], nB, !1, zB["IESLIGHTTEXTURE" + NB], zB["CLUSTLIGHT" + NB], zB["RECTAREALIGHTEMISSIONTEXTURE" + NB], 1 === IB);
      zB.NUM_MORPH_INFLUENCERS && (QB.push("morphTargetInfluences"), QB.push("morphTargetCount")), zB.BAKED_VERTEX_ANIMATION_TEXTURE && (QB.push("bakedVertexAnimationSettings"), QB.push("bakedVertexAnimationTextureSizeInverted"), QB.push("bakedVertexAnimationTime"), jB.push("bakedVertexAnimationTexture"))
    }

    function cB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      BB.addUniform("vReflectionInfos", 2), BB.addUniform("reflectionMatrix", 16), jB && BB.addUniform("vReflectionMicrosurfaceInfos", 3), zB && (BB.addUniform("vReflectionPosition", 3), BB.addUniform("vReflectionSize", 3)), QB && (BB.addUniform("vReflectionFilteringInfo", 2), BB.addUniform("vReflectionDominantDirection", 3)), dB && BB.addUniform("vReflectionColor", 3), nB && (BB.addUniform("vSphericalL00", 3), BB.addUniform("vSphericalL1_1", 3), BB.addUniform("vSphericalL10", 3), BB.addUniform("vSphericalL11", 3), BB.addUniform("vSphericalL2_2", 3), BB.addUniform("vSphericalL2_1", 3), BB.addUniform("vSphericalL20", 3), BB.addUniform("vSphericalL21", 3), BB.addUniform("vSphericalL22", 3), BB.addUniform("vSphericalX", 3), BB.addUniform("vSphericalY", 3), BB.addUniform("vSphericalZ", 3), BB.addUniform("vSphericalXX_ZZ", 3), BB.addUniform("vSphericalYY_ZZ", 3), BB.addUniform("vSphericalZZ", 3), BB.addUniform("vSphericalXY", 3), BB.addUniform("vSphericalYZ", 3), BB.addUniform("vSphericalZX", 3))
    }
  },
  40438: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(37171),
      nB = zB(40380);
    class dB extends nB.b {
      constructor(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(BB, jB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new QB.c, this._storeEffectOnSubMeshes = zB
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(BB, jB) {
        return !!BB && (!this._storeEffectOnSubMeshes || (!BB.cL || 0 === BB.cL.length || this.isReadyForSubMesh(BB, BB.cL[0], jB)))
      }
      _isReadyForSubMesh(BB) {
        const jB = BB.materialDefines;
        return !(this.checkReadyOnEveryCall || !BB.effect || !jB || jB._renderId !== this.aY().getRenderId())
      }
      bindOnlyWorldMatrix(BB) {
        this._activeEffect.setMatrix("world", BB)
      }
      bindOnlyNormalMatrix(BB) {
        this._activeEffect.setMatrix("normalMatrix", BB)
      }
      bind(BB, jB) {
        jB && this.bindForSubMesh(BB, jB, jB.cL[0])
      }
      _afterBind(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(BB, jB, zB), this.aY()._cachedEffect = jB, zB ? zB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return zB._drawWrapper._forceRebindOnNextCall || BB.isCachedMaterialInvalid(this, jB, QB)
      }
      dispose(BB, jB, zB) {
        this._activeEffect = void 0, super.dispose(BB, jB, zB)
      }
    }
  },
  40466: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      d: () => nB
    });
    const QB = new WeakMap;

    function nB(BB) {
      const jB = BB.getVertexBuffers();
      if (!jB) return null;
      let zB = QB.get(BB);
      if (zB) {
        let BB = !1;
        for (const QB in jB)
          if (!zB.has(QB)) {
            BB = !0;
            break
          } if (!BB) return zB
      } else zB = new Map, QB.set(BB, zB);
      for (const QB in jB) {
        const BB = jB[QB];
        if (BB) {
          const jB = BB.byteOffset,
            nB = BB.byteStride,
            dB = BB.type,
            IB = BB.normalized;
          zB.set(QB, {
            offset: jB,
            stride: nB,
            type: dB,
            normalized: IB
          })
        }
      }
      return zB
    }

    function dB(BB, jB) {
      jB.forEach(((jB, zB) => {
        const QB = `vp_${zB}_info`;
        BB.setFloat4(QB, jB.offset, jB.stride, jB.type, jB.normalized ? 1 : 0)
      }))
    }
  },
  40418: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => uB
    });
    var QB = zB(40066),
      nB = zB(37171),
      dB = zB(40068);
    let IB = (() => {
      var BB;
      let jB, zB, nB = [];
      return BB = class {
        static extractMinAndMaxIndexed(BB, jB, zB, QB, nB, dB) {
          for (let IB = zB; IB < zB + QB; IB++) {
            const zB = 3 * jB[IB],
              QB = BB[zB],
              NB = BB[zB + 1],
              uB = BB[zB + 2];
            nB.minimizeInPlaceFromFloats(QB, NB, uB), dB.maximizeInPlaceFromFloats(QB, NB, uB)
          }
        }
        static extractMinAndMax(BB, jB, zB, QB, nB, dB) {
          for (let IB = jB, NB = jB * QB; IB < jB + zB; IB++, NB += QB) {
            const jB = BB[NB],
              zB = BB[NB + 1],
              QB = BB[NB + 2];
            nB.minimizeInPlaceFromFloats(jB, zB, QB), dB.maximizeInPlaceFromFloats(jB, zB, QB)
          }
        }
      }, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [dB.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], zB = [dB.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, QB.e)(BB, null, jB, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMaxIndexed" in BB,
            get: BB => BB.extractMinAndMaxIndexed
          },
          metadata: IB
        }, null, nB), (0, QB.e)(BB, null, zB, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: BB => "extractMinAndMax" in BB,
            get: BB => BB.extractMinAndMax
          },
          metadata: IB
        }, null, nB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        }), (0, QB.g)(BB, nB)
      })(), BB
    })();

    function NB(BB, jB, zB, QB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const NB = new nB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        uB = new nB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return IB.extractMinAndMaxIndexed(BB, jB, zB, QB, NB, uB), dB && (NB.x -= NB.x * dB.x + dB.y, NB.y -= NB.y * dB.x + dB.y, NB.z -= NB.z * dB.x + dB.y, uB.x += uB.x * dB.x + dB.y, uB.y += uB.y * dB.x + dB.y, uB.z += uB.z * dB.x + dB.y), {
        minimum: NB,
        maximum: uB
      }
    }

    function uB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        dB = arguments.length > 4 ? arguments[4] : void 0;
      const NB = new nB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        uB = new nB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return dB || (dB = 3), IB.extractMinAndMax(BB, jB, zB, dB, NB, uB), QB && (NB.x -= NB.x * QB.x + QB.y, NB.y -= NB.y * QB.x + QB.y, NB.z -= NB.z * QB.x + QB.y, uB.x += uB.x * QB.x + QB.y, uB.y += uB.y * QB.x + QB.y, uB.z += uB.z * QB.x + QB.y), {
        minimum: NB,
        maximum: uB
      }
    }
  },
  40388: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB
    });
    var QB, nB = zB(40211),
      dB = zB(40396),
      IB = zB(40404),
      NB = zB(40418),
      uB = zB(40423),
      UB = zB(39965);
    class aB {
      get materialDefines() {
        const BB = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof BB ? null : BB
      }
      set materialDefines(BB) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = BB
      }
      _getDrawWrapper(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB = BB ?? this._engine.currentRenderPassId;
        let zB = this._drawWrappers[BB];
        return !zB && jB && (this._drawWrappers[BB] = zB = new uB.e(this._mesh.aY().wJ())), zB
      }
      _removeDrawWrapper(BB) {
        let jB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[BB]?.dispose(jB), this._drawWrappers[BB] = void 0
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const nB = this._drawWrapper;
        nB.setEffect(BB, jB, QB), void 0 !== zB && (nB.materialContext = zB), BB || (nB.defines = null, nB.materialContext = void 0)
      }
      resetDrawCache(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== BB) return void this._removeDrawWrapper(BB, !0, jB);
          for (const BB of this._drawWrappers) BB?.dispose(jB)
        }
        this._drawWrappers = []
      }
      static AddToMesh(BB, jB, zB, QB, nB, dB, IB) {
        return new aB(BB, jB, zB, QB, nB, dB, IB, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(BB, jB, zB, QB, nB, dB, IB) {
        let NB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          uB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = BB, this.verticesStart = jB, this.verticesCount = zB, this.indexStart = QB, this.indexCount = nB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = dB, this._renderingMesh = IB || dB, uB && dB.cL.push(this), this._engine = this._mesh.aY().wJ(), this.resetDrawCache(), this._trianglePlanes = [], this._id = dB.cL.length - 1, NB && (this.refreshBoundingInfo(), dB.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      rV() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.rV() : this._boundingInfo
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
      bJ() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const jB = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!jB) return BB && this._mesh.aY()._hasDefaultMaterial ? this._mesh.aY().defaultMaterial : null;
        if (this._isMultiMaterial(jB)) {
          const BB = jB.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== BB && (this._currentMaterial = BB, this.resetDrawCache()), BB
        }
        return jB
      }
      _isMultiMaterial(BB) {
        return void 0 !== BB.getSubMaterial
      }
      refreshBoundingInfo() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (BB || (BB = this._renderingMesh.getVerticesData(nB.l.PositionKind)), !BB) return this._boundingInfo = this._mesh.rV(), this;
        const jB = this._renderingMesh.dQB();
        let zB;
        if (0 === this.indexStart && this.indexCount === jB.length) {
          const BB = this._renderingMesh.rV();
          zB = {
            minimum: BB.minimum.clone(),
            maximum: BB.maximum.clone()
          }
        } else zB = (0, NB.c)(BB, jB, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(zB.minimum, zB.maximum) : this._boundingInfo = new IB.c(zB.minimum, zB.maximum), this
      }
      _checkCollision(BB) {
        return this.rV()._checkCollision(BB)
      }
      updateBoundingInfo(BB) {
        let jB = this.rV();
        return jB || (this.refreshBoundingInfo(), jB = this.rV()), jB && jB.update(BB), this
      }
      isInFrustum(BB) {
        const jB = this.rV();
        return !!jB && jB.isInFrustum(BB, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(BB) {
        const jB = this.rV();
        return !!jB && jB.isCompletelyInFrustum(BB)
      }
      render(BB) {
        return this._renderingMesh.render(this, BB, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(BB, jB) {
        if (!this._linesIndexBuffer) {
          const zB = 6 * Math.floor(this.indexCount / 3),
            QB = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(zB) : new Uint16Array(zB);
          let nB = 0;
          if (0 === BB.length)
            for (let BB = this.indexStart; BB < this.indexStart + this.indexCount; BB += 3) QB[nB++] = BB, QB[nB++] = BB + 1, QB[nB++] = BB + 1, QB[nB++] = BB + 2, QB[nB++] = BB + 2, QB[nB++] = BB;
          else
            for (let jB = this.indexStart; jB < this.indexStart + this.indexCount; jB += 3) QB[nB++] = BB[jB], QB[nB++] = BB[jB + 1], QB[nB++] = BB[jB + 1], QB[nB++] = BB[jB + 2], QB[nB++] = BB[jB + 2], QB[nB++] = BB[jB];
          this._linesIndexBuffer = jB.createIndexBuffer(QB), this._linesIndexCount = QB.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(BB) {
        const jB = this.rV();
        return !!jB && BB.intersectsBox(jB.boundingBox)
      }
      intersects(BB, jB, zB, QB, nB) {
        const dB = this.bJ();
        if (!dB) return null;
        let IB = 3,
          NB = !1;
        switch (dB.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            IB = 1, NB = !0
        }
        return 4 === dB.fillMode ? zB.length ? this._intersectLines(BB, jB, zB, this._mesh.intersectionThreshold, QB) : this._intersectUnIndexedLines(BB, jB, zB, this._mesh.intersectionThreshold, QB) : !zB.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(BB, jB, zB, QB, nB) : this._intersectTriangles(BB, jB, zB, IB, NB, QB, nB)
      }
      _intersectLines(BB, jB, zB, QB, nB) {
        let IB = null;
        for (let NB = this.indexStart; NB < this.indexStart + this.indexCount; NB += 2) {
          const uB = jB[zB[NB]],
            UB = jB[zB[NB + 1]],
            aB = BB.intersectionSegment(uB, UB, QB);
          if (!(aB < 0) && ((nB || !IB || aB < IB.distance) && (IB = new dB.d(null, null, aB), IB.faceId = NB / 2, nB))) break
        }
        return IB
      }
      _intersectUnIndexedLines(BB, jB, zB, QB, nB) {
        let IB = null;
        for (let NB = this.verticesStart; NB < this.verticesStart + this.verticesCount; NB += 2) {
          const zB = jB[NB],
            uB = jB[NB + 1],
            UB = BB.intersectionSegment(zB, uB, QB);
          if (!(UB < 0) && ((nB || !IB || UB < IB.distance) && (IB = new dB.d(null, null, UB), IB.faceId = NB / 2, nB))) break
        }
        return IB
      }
      _intersectTriangles(BB, jB, zB, QB, nB, dB, IB) {
        let NB = null,
          uB = -1;
        for (let UB = this.indexStart; UB < this.indexStart + this.indexCount - (3 - QB); UB += QB) {
          uB++;
          const QB = zB[UB],
            aB = zB[UB + 1],
            pB = zB[UB + 2];
          if (nB && 4294967295 === pB) {
            UB += 2;
            continue
          }
          const rB = jB[QB],
            sB = jB[aB],
            JB = jB[pB];
          if (!rB || !sB || !JB) continue;
          if (IB && !IB(rB, sB, JB, BB, QB, aB, pB)) continue;
          const mB = BB.intersectsTriangle(rB, sB, JB);
          if (mB) {
            if (mB.distance < 0) continue;
            if ((dB || !NB || mB.distance < NB.distance) && (NB = mB, NB.faceId = uB, dB)) break
          }
        }
        return NB
      }
      _intersectUnIndexedTriangles(BB, jB, zB, QB, nB) {
        let dB = null;
        for (let IB = this.verticesStart; IB < this.verticesStart + this.verticesCount; IB += 3) {
          const zB = jB[IB],
            NB = jB[IB + 1],
            uB = jB[IB + 2];
          if (nB && !nB(zB, NB, uB, BB, -1, -1, -1)) continue;
          const UB = BB.intersectsTriangle(zB, NB, uB);
          if (UB) {
            if (UB.distance < 0) continue;
            if ((QB || !dB || UB.distance < dB.distance) && (dB = UB, dB.faceId = IB / 3, QB)) break
          }
        }
        return dB
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(BB, jB) {
        const zB = new aB(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, BB, jB, !1);
        if (!this.IsGlobal) {
          const BB = this.rV();
          if (!BB) return zB;
          zB._boundingInfo = new IB.c(BB.minimum, BB.maximum)
        }
        return zB
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.aY().wJ()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const jB = this._mesh.cL.indexOf(this);
        this._mesh.cL.splice(jB, 1), this.resetDrawCache(void 0, BB)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(BB, jB, zB, QB, nB) {
        let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = Number.MAX_VALUE,
          NB = -Number.MAX_VALUE;
        const uB = (nB || QB).dQB();
        for (let UB = jB; UB < jB + zB; UB++) {
          const BB = uB[UB];
          BB < IB && (IB = BB), BB > NB && (NB = BB)
        }
        return new aB(BB, IB, NB - IB + 1, jB, zB, QB, nB, dB)
      }
    }(QB = aB.prototype).projectToRef ?? (QB.projectToRef = (0, UB.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);