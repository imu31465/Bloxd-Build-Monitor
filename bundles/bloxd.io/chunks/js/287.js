export const id = 287;
export const ids = [287];
export const modules = {
  41408: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      constructor(MM, rM, iM) {
        this.bu = MM, this.bv = rM, this.distance = iM, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41412: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(38048),
      SM = iM(38040),
      jM = iM(38044);
    class aM {
      constructor(MM, rM, iM) {
        this.vectors = (0, OM.c)(8, SM.q.Zero), this.center = SM.q.Zero(), this.centerWorld = SM.q.Zero(), this.extendSize = SM.q.Zero(), this.extendSizeWorld = SM.q.Zero(), this.directions = (0, OM.c)(3, SM.q.Zero), this.vectorsWorld = (0, OM.c)(8, SM.q.Zero), this.minimumWorld = SM.q.Zero(), this.maximumWorld = SM.q.Zero(), this.minimum = SM.q.Zero(), this.maximum = SM.q.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(MM, rM, iM)
      }
      reConstruct(MM, rM, iM) {
        const OM = MM.x,
          jM = MM.y,
          aM = MM.z,
          PM = rM.x,
          nM = rM.y,
          QM = rM.z,
          zM = this.vectors;
        this.minimum.iMM(OM, jM, aM), this.maximum.iMM(PM, nM, QM), zM[0].iMM(OM, jM, aM), zM[1].iMM(PM, nM, QM), zM[2].iMM(PM, jM, aM), zM[3].iMM(OM, nM, aM), zM[4].iMM(OM, jM, QM), zM[5].iMM(PM, nM, aM), zM[6].iMM(OM, nM, QM), zM[7].iMM(PM, jM, QM), rM.addToRef(MM, this.center).scaleInPlace(.5), rM.subtractToRef(MM, this.extendSize).scaleInPlace(.5), this._worldMatrix = iM || SM.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(MM) {
        const rM = aM._TmpVector3,
          iM = this.maximum.subtractToRef(this.minimum, rM[0]),
          OM = iM.length();
        iM.normalizeFromLength(OM);
        const SM = OM * MM,
          jM = iM.scaleInPlace(.5 * SM),
          PM = this.center.subtractToRef(jM, rM[1]),
          nM = this.center.addToRef(jM, rM[2]);
        return this.reConstruct(PM, nM, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(MM) {
        const rM = this.minimumWorld,
          iM = this.maximumWorld,
          OM = this.directions,
          jM = this.vectorsWorld,
          aM = this.vectors;
        if (MM.isIdentity()) {
          rM.jR(this.minimum), iM.jR(this.maximum);
          for (let MM = 0; MM < 8; ++MM) jM[MM].jR(aM[MM]);
          this.extendSizeWorld.jR(this.extendSize), this.centerWorld.jR(this.center)
        } else {
          rM.P_(Number.MAX_VALUE), iM.P_(-Number.MAX_VALUE);
          for (let OM = 0; OM < 8; ++OM) {
            const PM = jM[OM];
            SM.q.TransformCoordinatesToRef(aM[OM], MM, PM), rM.minimizeInPlace(PM), iM.maximizeInPlace(PM)
          }
          iM.subtractToRef(rM, this.extendSizeWorld).scaleInPlace(.5), iM.addToRef(rM, this.centerWorld).scaleInPlace(.5)
        }
        SM.q.FromArrayToRef(MM.m, 0, OM[0]), SM.q.FromArrayToRef(MM.m, 4, OM[1]), SM.q.FromArrayToRef(MM.m, 8, OM[2]), this._worldMatrix = MM
      }
      isInFrustum(MM) {
        return aM.IsInFrustum(this.vectorsWorld, MM)
      }
      isCompletelyInFrustum(MM) {
        return aM.IsCompletelyInFrustum(this.vectorsWorld, MM)
      }
      intersectsPoint(MM) {
        const rM = this.minimumWorld,
          iM = this.maximumWorld,
          OM = rM.x,
          SM = rM.y,
          aM = rM.z,
          PM = iM.x,
          nM = iM.y,
          QM = iM.z,
          zM = MM.x,
          LM = MM.y,
          mM = MM.z,
          HM = -jM.d;
        return !(PM - zM < HM || HM > zM - OM) && (!(nM - LM < HM || HM > LM - SM) && !(QM - mM < HM || HM > mM - aM))
      }
      intersectsSphere(MM) {
        return aM.IntersectsSphere(this.minimumWorld, this.maximumWorld, MM.centerWorld, MM.radiusWorld)
      }
      intersectsMinMax(MM, rM) {
        const iM = this.minimumWorld,
          OM = this.maximumWorld,
          SM = iM.x,
          jM = iM.y,
          aM = iM.z,
          PM = OM.x,
          nM = OM.y,
          QM = OM.z,
          zM = MM.x,
          LM = MM.y,
          mM = MM.z,
          HM = rM.x,
          hM = rM.y,
          JM = rM.z;
        return !(PM < zM || SM > HM) && (!(nM < LM || jM > hM) && !(QM < mM || aM > JM))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(MM, rM) {
        return MM.intersectsMinMax(rM.minimumWorld, rM.maximumWorld)
      }
      static IntersectsSphere(MM, rM, iM, OM) {
        const jM = aM._TmpVector3[0];
        SM.q.ClampToRef(iM, MM, rM, jM);
        return SM.q.DistanceSquared(iM, jM) <= OM * OM
      }
      static IsCompletelyInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; ++iM) {
          const OM = rM[iM];
          for (let rM = 0; rM < 8; ++rM)
            if (OM.dotCoordinate(MM[rM]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; ++iM) {
          let OM = !0;
          const SM = rM[iM];
          for (let rM = 0; rM < 8; ++rM)
            if (SM.dotCoordinate(MM[rM]) >= 0) {
              OM = !1;
              break
            } if (OM) return !1
        }
        return !0
      }
    }
    aM._TmpVector3 = (0, OM.c)(3, SM.q.Zero)
  },
  41410: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM
    });
    var OM = iM(38048),
      SM = iM(38040),
      jM = iM(41412);
    class aM {
      constructor(MM, rM, iM) {
        this.center = SM.q.Zero(), this.centerWorld = SM.q.Zero(), this.minimum = SM.q.Zero(), this.maximum = SM.q.Zero(), this.reConstruct(MM, rM, iM)
      }
      reConstruct(MM, rM, iM) {
        this.minimum.jR(MM), this.maximum.jR(rM);
        const OM = SM.q.Distance(MM, rM);
        rM.addToRef(MM, this.center).scaleInPlace(.5), this.radius = .5 * OM, this._update(iM || SM.d.IdentityReadOnly)
      }
      scale(MM) {
        const rM = aM._TmpVector3,
          iM = this.maximum.subtractToRef(this.minimum, rM[0]),
          OM = iM.length();
        iM.normalizeFromLength(OM);
        const SM = OM * MM,
          jM = iM.scaleInPlace(.5 * SM),
          PM = this.center.subtractToRef(jM, rM[1]),
          nM = this.center.addToRef(jM, rM[2]);
        return this.reConstruct(PM, nM, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(MM) {
        if (MM.isIdentity()) this.centerWorld.jR(this.center), this.radiusWorld = this.radius;
        else {
          SM.q.TransformCoordinatesToRef(this.center, MM, this.centerWorld);
          const rM = aM._TmpVector3[0];
          SM.q.TransformNormalFromFloatsToRef(1, 1, 1, MM, rM), this.radiusWorld = Math.max(Math.abs(rM.x), Math.abs(rM.y), Math.abs(rM.z)) * this.radius
        }
      }
      isInFrustum(MM) {
        const rM = this.centerWorld,
          iM = this.radiusWorld;
        for (let OM = 0; OM < 6; OM++)
          if (MM[OM].dotCoordinate(rM) <= -iM) return !1;
        return !0
      }
      isCenterInFrustum(MM) {
        const rM = this.centerWorld;
        for (let iM = 0; iM < 6; iM++)
          if (MM[iM].dotCoordinate(rM) < 0) return !1;
        return !0
      }
      intersectsPoint(MM) {
        const rM = SM.q.DistanceSquared(this.centerWorld, MM);
        return !(this.radiusWorld * this.radiusWorld < rM)
      }
      static Intersects(MM, rM) {
        const iM = SM.q.DistanceSquared(MM.centerWorld, rM.centerWorld),
          OM = MM.radiusWorld + rM.radiusWorld;
        return !(OM * OM < iM)
      }
      static CreateFromCenterAndRadius(MM, rM, iM) {
        this._TmpVector3[0].jR(MM), this._TmpVector3[1].iMM(0, 0, rM), this._TmpVector3[2].jR(MM), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].kOM(this._TmpVector3[1]);
        const OM = new aM(this._TmpVector3[0], this._TmpVector3[2]);
        return OM._worldMatrix = iM || SM.d.Identity(), OM
      }
    }
    aM._TmpVector3 = (0, OM.c)(3, SM.q.Zero);
    const PM = {
        min: 0,
        max: 0
      },
      nM = {
        min: 0,
        max: 0
      },
      QM = (MM, rM, iM) => {
        const OM = SM.q.Dot(rM.centerWorld, MM),
          jM = Math.abs(SM.q.Dot(rM.directions[0], MM)) * rM.extendSize.x + Math.abs(SM.q.Dot(rM.directions[1], MM)) * rM.extendSize.y + Math.abs(SM.q.Dot(rM.directions[2], MM)) * rM.extendSize.z;
        iM.min = OM - jM, iM.max = OM + jM
      },
      zM = (MM, rM, iM) => (QM(MM, rM, PM), QM(MM, iM, nM), !(PM.min > nM.max || nM.min > PM.max));
    class LM {
      constructor(MM, rM, iM) {
        this._isLocked = !1, this.boundingBox = new jM.e(MM, rM, iM), this.YOM = new aM(MM, rM, iM)
      }
      reConstruct(MM, rM, iM) {
        this.boundingBox.reConstruct(MM, rM, iM), this.YOM.reConstruct(MM, rM, iM)
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
      set isLocked(MM) {
        this._isLocked = MM
      }
      update(MM) {
        this._isLocked || (this.boundingBox._update(MM), this.YOM._update(MM))
      }
      centerOn(MM, rM) {
        const iM = LM._TmpVector3[0].jR(MM).kOM(rM),
          OM = LM._TmpVector3[1].jR(MM).addInPlace(rM);
        return this.boundingBox.reConstruct(iM, OM, this.boundingBox.getWorldMatrix()), this.YOM.reConstruct(iM, OM, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(MM) {
        const rM = SM.q.Minimize(this.minimum, MM),
          iM = SM.q.Maximize(this.maximum, MM);
        return this.reConstruct(rM, iM, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(MM) {
        const rM = SM.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(rM);
        const iM = SM.l.sh[0];
        return SM.q.TransformCoordinatesToRef(MM.boundingBox.minimumWorld, rM, iM), this.encapsulate(iM), SM.q.TransformCoordinatesToRef(MM.boundingBox.maximumWorld, rM, iM), this.encapsulate(iM), this
      }
      scale(MM) {
        return this.boundingBox.scale(MM), this.YOM.scale(MM), this
      }
      isInFrustum(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === rM || 3 === rM) && this.YOM.isCenterInFrustum(MM)) return !0;
        if (!this.YOM.isInFrustum(MM)) return !1;
        return !(1 !== rM && 3 !== rM) || this.boundingBox.isInFrustum(MM)
      }
      get diagonalLength() {
        const MM = this.boundingBox;
        return MM.maximumWorld.subtractToRef(MM.minimumWorld, LM._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(MM) {
        return this.boundingBox.isCompletelyInFrustum(MM)
      }
      _checkCollision(MM) {
        return MM._canDoCollision(this.YOM.centerWorld, this.YOM.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(MM) {
        return !!this.YOM.centerWorld && (!!this.YOM.intersectsPoint(MM) && !!this.boundingBox.intersectsPoint(MM))
      }
      intersects(MM, rM) {
        if (!aM.Intersects(this.YOM, MM.YOM)) return !1;
        if (!jM.e.Intersects(this.boundingBox, MM.boundingBox)) return !1;
        if (!rM) return !0;
        const iM = this.boundingBox,
          OM = MM.boundingBox;
        return !!zM(iM.directions[0], iM, OM) && (!!zM(iM.directions[1], iM, OM) && (!!zM(iM.directions[2], iM, OM) && (!!zM(OM.directions[0], iM, OM) && (!!zM(OM.directions[1], iM, OM) && (!!zM(OM.directions[2], iM, OM) && (!!zM(SM.q.Cross(iM.directions[0], OM.directions[0]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[0], OM.directions[1]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[0], OM.directions[2]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[1], OM.directions[0]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[1], OM.directions[1]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[1], OM.directions[2]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[2], OM.directions[0]), iM, OM) && (!!zM(SM.q.Cross(iM.directions[2], OM.directions[1]), iM, OM) && !!zM(SM.q.Cross(iM.directions[2], OM.directions[2]), iM, OM))))))))))))))
      }
    }
    LM._TmpVector3 = (0, OM.c)(2, SM.q.Zero)
  },
  41433: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => nM,
      g: () => PM,
      j: () => aM
    });
    var OM = iM(41266),
      SM = iM(38040);

    function jM(MM) {
      -1 === MM.indexOf("vClipPlane") && MM.push("vClipPlane"), -1 === MM.indexOf("vClipPlane2") && MM.push("vClipPlane2"), -1 === MM.indexOf("vClipPlane3") && MM.push("vClipPlane3"), -1 === MM.indexOf("vClipPlane4") && MM.push("vClipPlane4"), -1 === MM.indexOf("vClipPlane5") && MM.push("vClipPlane5"), -1 === MM.indexOf("vClipPlane6") && MM.push("vClipPlane6")
    }

    function aM(MM, rM, iM) {
      const OM = !!(MM.clipPlane ?? rM.clipPlane),
        SM = !!(MM.clipPlane2 ?? rM.clipPlane2),
        jM = !!(MM.clipPlane3 ?? rM.clipPlane3),
        aM = !!(MM.clipPlane4 ?? rM.clipPlane4),
        PM = !!(MM.clipPlane5 ?? rM.clipPlane5),
        nM = !!(MM.clipPlane6 ?? rM.clipPlane6);
      OM && iM.push("#define CLIPPLANE"), SM && iM.push("#define CLIPPLANE2"), jM && iM.push("#define CLIPPLANE3"), aM && iM.push("#define CLIPPLANE4"), PM && iM.push("#define CLIPPLANE5"), nM && iM.push("#define CLIPPLANE6")
    }

    function PM(MM, rM, iM) {
      let OM = !1;
      const SM = !!(MM.clipPlane ?? rM.clipPlane),
        jM = !!(MM.clipPlane2 ?? rM.clipPlane2),
        aM = !!(MM.clipPlane3 ?? rM.clipPlane3),
        PM = !!(MM.clipPlane4 ?? rM.clipPlane4),
        nM = !!(MM.clipPlane5 ?? rM.clipPlane5),
        QM = !!(MM.clipPlane6 ?? rM.clipPlane6);
      return iM.CLIPPLANE !== SM && (iM.CLIPPLANE = SM, OM = !0), iM.CLIPPLANE2 !== jM && (iM.CLIPPLANE2 = jM, OM = !0), iM.CLIPPLANE3 !== aM && (iM.CLIPPLANE3 = aM, OM = !0), iM.CLIPPLANE4 !== PM && (iM.CLIPPLANE4 = PM, OM = !0), iM.CLIPPLANE5 !== nM && (iM.CLIPPLANE5 = nM, OM = !0), iM.CLIPPLANE6 !== QM && (iM.CLIPPLANE6 = QM, OM = !0), OM
    }

    function nM(MM, rM, iM) {
      let OM = rM.clipPlane ?? iM.clipPlane;
      QM(MM, "vClipPlane", OM), OM = rM.clipPlane2 ?? iM.clipPlane2, QM(MM, "vClipPlane2", OM), OM = rM.clipPlane3 ?? iM.clipPlane3, QM(MM, "vClipPlane3", OM), OM = rM.clipPlane4 ?? iM.clipPlane4, QM(MM, "vClipPlane4", OM), OM = rM.clipPlane5 ?? iM.clipPlane5, QM(MM, "vClipPlane5", OM), OM = rM.clipPlane6 ?? iM.clipPlane6, QM(MM, "vClipPlane6", OM)
    }

    function QM(MM, rM, iM) {
      if (iM) {
        const jM = OM.d.Hk()?.floatingOriginOffset || SM.q.ZeroReadOnly;
        MM.setFloat4(rM, iM.normal.x, iM.normal.y, iM.normal.z, iM.d + SM.q.Dot(iM.normal, jM))
      }
    }
  },
  41447: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    class OM {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(MM, rM) {
        this._defines[MM] || (MM < this._currentRank && (this._currentRank = MM), MM > this._maxRank && (this._maxRank = MM), this._defines[MM] = new Array), this._defines[MM].push(rM)
      }
      addCPUSkinningFallback(MM, rM) {
        this._mesh = rM, MM < this._currentRank && (this._currentRank = MM), MM > this._maxRank && (this._maxRank = MM)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(MM, rM) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, MM = MM.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), rM._bonesComputationForcedToCPU = !0;
          const iM = this._mesh.Hk();
          for (let MM = 0; MM < iM.meshes.length; MM++) {
            const OM = iM.meshes[MM];
            if (OM.material) {
              if (OM.computeBonesUsingShaders && 0 !== OM.numBoneInfluencers)
                if (OM.material.getEffect() === rM) OM.computeBonesUsingShaders = !1;
                else if (OM.iG)
                for (const MM of OM.iG) {
                  if (MM.effect === rM) {
                    OM.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && OM.computeBonesUsingShaders && OM.numBoneInfluencers > 0 && (OM.computeBonesUsingShaders = !1)
          }
        } else {
          const rM = this._defines[this._currentRank];
          if (rM)
            for (let iM = 0; iM < rM.length; iM++) MM = MM.replace("#define " + rM[iM], "");
          this._currentRank++
        }
        return MM
      }
    }
  },
  41397: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => lM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(41205),
      aM = iM(38068),
      PM = iM(38064),
      nM = iM(41400),
      QM = iM(41240),
      zM = iM(39711),
      LM = iM(38744),
      mM = iM(41424),
      HM = iM(41121);
    let hM = (() => {
      var MM;
      let rM, iM, jM, aM, PM, nM, QM, zM, LM, mM, hM, JM, dM = [];
      return MM = class {
        constructor() {
          this._func = (0, OM.m)(this, dM), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(MM) {
          this._func = MM
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(MM) {
          this._backFunc = MM
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(MM) {
          this._funcRef = MM
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(MM) {
          this._funcMask = MM
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(MM) {
          this._opStencilFail = MM
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(MM) {
          this._opDepthFail = MM
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(MM) {
          this._opStencilDepthPass = MM
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(MM) {
          this._backOpStencilFail = MM
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(MM) {
          this._backOpDepthFail = MM
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(MM) {
          this._backOpStencilDepthPass = MM
        }
        get mask() {
          return this._mask
        }
        set mask(MM) {
          this._mask = MM
        }
        get enabled() {
          return this._enabled
        }
        set enabled(MM) {
          this._enabled = MM
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(MM) {
          HM.b.Clone((() => MM), this)
        }
        serialize() {
          return HM.b.Serialize(this)
        }
        parse(MM, rM, iM) {
          HM.b.Parse((() => this), MM, rM, iM)
        }
      }, (() => {
        const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], aM = [(0, SM.L)()], PM = [(0, SM.L)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.L)()], mM = [(0, SM.L)()], hM = [(0, SM.L)()], JM = [(0, SM.L)()], (0, OM.i)(MM, null, rM, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: MM => "func" in MM,
            get: MM => MM.func
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, iM, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: MM => "backFunc" in MM,
            get: MM => MM.backFunc
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, jM, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: MM => "funcRef" in MM,
            get: MM => MM.funcRef
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, aM, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: MM => "funcMask" in MM,
            get: MM => MM.funcMask
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, PM, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: MM => "opStencilFail" in MM,
            get: MM => MM.opStencilFail
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, nM, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: MM => "opDepthFail" in MM,
            get: MM => MM.opDepthFail
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, QM, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: MM => "opStencilDepthPass" in MM,
            get: MM => MM.opStencilDepthPass
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, zM, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: MM => "backOpStencilFail" in MM,
            get: MM => MM.backOpStencilFail
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, LM, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: MM => "backOpDepthFail" in MM,
            get: MM => MM.backOpDepthFail
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, mM, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: MM => "backOpStencilDepthPass" in MM,
            get: MM => MM.backOpStencilDepthPass
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, hM, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: MM => "mask" in MM,
            get: MM => MM.mask
          },
          metadata: HM
        }, null, dM), (0, OM.i)(MM, null, JM, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "enabled" in MM,
            get: MM => MM.enabled
          },
          metadata: HM
        }, null, dM), HM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HM
        })
      })(), MM
    })();
    var JM = iM(41426),
      dM = iM(41015),
      yM = iM(40990);
    let lM = (() => {
      var MM;
      let rM, iM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM = [],
        XM = [],
        IM = [],
        KM = [],
        qM = [],
        TM = [],
        VM = [],
        cM = [],
        Mr = [],
        rr = [],
        ir = [],
        Or = [],
        Sr = [],
        jr = [],
        ar = [],
        Pr = [],
        nr = [],
        Qr = [],
        zr = [],
        Lr = [],
        mr = [],
        Hr = [],
        hr = [],
        Jr = [],
        dr = [],
        yr = [],
        lr = [],
        Er = [],
        Ur = [],
        Gr = [],
        Cr = [],
        er = [],
        br = [],
        wr = [],
        tr = [],
        gr = [],
        ur = [],
        Rr = [],
        pr = [],
        Wr = [],
        sr = [],
        Dr = [],
        kr = [],
        Zr = [],
        or = [],
        fr = [],
        Yr = [],
        Nr = [],
        Ar = [],
        xr = [],
        vr = [];
      return MM = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(rM) {
          this._useVertexPulling !== rM && (this._useVertexPulling = rM, this.FrM(MM.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(MM) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(rM) {
          if (this._alpha === rM) return;
          const iM = this._alpha;
          this._alpha = rM, 1 !== iM && 1 !== rM || this.FrM(MM.MiscDirtyFlag + MM.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(rM) {
          this._backFaceCulling !== rM && (this._backFaceCulling = rM, this.FrM(MM.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(rM) {
          const iM = Math.max(0, Math.min(0 | rM, 4));
          this._textureRepetitionMode !== iM && (this._textureRepetitionMode = iM, this.FrM(MM.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(rM) {
          this._cullBackFaces !== rM && (this._cullBackFaces = rM, this.FrM(MM.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(MM) {
          this._blockDirtyMechanism !== MM && (this._blockDirtyMechanism = MM, MM || this.markDirty())
        }
        atomicMaterialsUpdate(MM) {
          this.blockDirtyMechanism = !0;
          try {
            MM(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(MM) {
          this._onDisposeObserver && this.Rk.remove(this._onDisposeObserver), this._onDisposeObserver = this.Rk.add(MM)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new aM.d), this._onBindObservable
        }
        set onBind(MM) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(MM)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new aM.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new aM.d), this._onEffectCreatedObservable
        }
        set alphaMode(MM) {
          this._alphaMode[0] = MM
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[iM] !== rM && (this._alphaMode[iM] = rM, this.FrM(MM.TextureDirtyFlag))
        }
        set needDepthPrePass(MM) {
          this._needDepthPrePass !== MM && (this._needDepthPrePass = MM, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(rM) {
          this._fogEnabled !== rM && (this._fogEnabled = rM, this.FrM(MM.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case MM.WireFrameFillMode:
            case MM.LineListDrawMode:
            case MM.LineLoopDrawMode:
            case MM.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(rM) {
          this.fillMode = rM ? MM.WireFrameFillMode : MM.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case MM.PointFillMode:
            case MM.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(rM) {
          this.fillMode = rM ? MM.PointFillMode : MM.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(rM) {
          this._fillMode !== rM && (this._fillMode = rM, this.FrM(MM.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(MM) {
          const rM = this.Hk().ph().getCaps().fragmentDepthSupported;
          MM && !rM && zM.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = MM && rM, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(MM) {
          this._isVertexOutputInvariant !== MM && (this._isVertexOutputInvariant = MM, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(MM) {
          this._drawWrapper = MM
        }
        constructor(rM, iM, SM) {
          let nM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, OM.m)(this, BM), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, OM.m)(this, XM, void 0), this.uniqueId = ((0, OM.m)(this, IM), (0, OM.m)(this, KM, void 0)), this._loadedUniqueId = (0, OM.m)(this, qM), this.name = (0, OM.m)(this, TM, void 0), this.metadata = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, null)), this._internalMetadata = (0, OM.m)(this, Mr), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, OM.m)(this, rr, !1), this.checkReadyOnlyOnce = ((0, OM.m)(this, ir), (0, OM.m)(this, Or, !1)), this.state = ((0, OM.m)(this, Sr), (0, OM.m)(this, jr, "")), this._alpha = ((0, OM.m)(this, ar), (0, OM.m)(this, Pr, 1)), this.inspectableCustomProperties = (0, OM.m)(this, nr), this._backFaceCulling = (0, OM.m)(this, Qr, !0), this._textureRepetitionMode = ((0, OM.m)(this, zr), (0, OM.m)(this, Lr, 0)), this.textureRepetitionHexTilingParams = ((0, OM.m)(this, mr), (0, OM.m)(this, Hr, [1, .6, 7, .5])), this._cullBackFaces = ((0, OM.m)(this, hr), (0, OM.m)(this, Jr, !0)), this._blockDirtyMechanism = ((0, OM.m)(this, dr), !1), this.sideOrientation = (0, OM.m)(this, yr, null), this.onCompiled = ((0, OM.m)(this, lr), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Rk = new aM.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, OM.m)(this, Er, [2]), this._needDepthPrePass = ((0, OM.m)(this, Ur), (0, OM.m)(this, Gr, !1)), this.disableDepthWrite = ((0, OM.m)(this, Cr), (0, OM.m)(this, er, !1)), this.disableColorWrite = ((0, OM.m)(this, br), (0, OM.m)(this, wr, !1)), this.forceDepthWrite = ((0, OM.m)(this, tr), (0, OM.m)(this, gr, !1)), this.depthFunction = ((0, OM.m)(this, ur), (0, OM.m)(this, Rr, 0)), this.separateCullingPass = ((0, OM.m)(this, pr), (0, OM.m)(this, Wr, !1)), this._fogEnabled = ((0, OM.m)(this, sr), (0, OM.m)(this, Dr, !0)), this.pointSize = ((0, OM.m)(this, kr), (0, OM.m)(this, Zr, 1)), this.zOffset = ((0, OM.m)(this, or), (0, OM.m)(this, fr, 0)), this.zOffsetUnits = ((0, OM.m)(this, Yr), (0, OM.m)(this, Nr, 0)), this.clipPlane = (0, OM.m)(this, Ar), this.stencil = new hM, this._isVertexOutputInvariant = (0, OM.m)(this, xr, MM.ForceVertexOutputInvariant), this._materialContext = (0, OM.m)(this, vr), this._useUBO = !1, this._fillMode = MM.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = rM;
          const zM = iM || PM.c.LastCreatedScene;
          zM && (this._scene = zM, this._dirtyCallbacks = {}, this._forceGLSL = nM, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = rM || jM.e.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.ph().createMaterialContext(), this._drawWrapper = new mM.c(this._scene.ph(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new QM.b(this._scene.ph(), void 0, void 0, rM), this._useUBO = this.Hk().ph().supportsUniformBuffers, this._createUniformBuffer(), SM || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), MM.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const MM = this.Hk().ph();
          this._uniformBuffer?.dispose(), MM.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new QM.b(MM, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new QM.b(this._scene.ph(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(MM) {
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
        isReady(MM, rM) {
          return !0
        }
        isReadyForSubMesh(MM, rM, iM) {
          const OM = rM.materialDefines;
          return !!OM && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = OM, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Hk() {
          return this._scene
        }
        _getEffectiveOrientation(MM) {
          return null !== this.sideOrientation ? this.sideOrientation : MM.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(MM) {
          this._transparencyMode = MM
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === MM.MATERIAL_ALPHABLEND || this._transparencyMode === MM.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === MM.MATERIAL_ALPHATEST || this._transparencyMode === MM.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === MM.MATERIAL_OPAQUE || this._transparencyMode === MM.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(MM) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : MM.visibility < 1 || !this._disableAlphaBlending && (MM.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(MM) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(MM) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const iM = this.Hk().meshes;
          for (const MM of iM)
            if (MM.iG)
              for (const iM of MM.iG)
                if (iM.Zh() === this)
                  for (const MM of iM._drawWrappers) MM && this._materialContext === MM.materialContext && (MM._wasPreviouslyReady = !1, MM._wasPreviouslyUsingInstances = null, MM._forceRebindOnNextCall = rM);
          rM && this.FrM(MM.AllDirtyFlag)
        }
        _preBind(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const OM = this._scene.ph(),
            SM = (null == iM ? this.sideOrientation : iM) === MM.ClockWiseSideOrientation,
            jM = rM || this._getDrawWrapper();
          return (0, dM.e)(jM) && jM.materialContext && (jM.materialContext.useVertexPulling = this.useVertexPulling), OM.enableEffect(jM), OM.setState(this.backFaceCulling, this.zOffset, !1, SM, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), SM
        }
        bind(MM, rM) {}
        buildUniformLayout() {
          const MM = this._uniformBuffer;
          this._eventInfo.ubo = MM, this._callbackPluginEventGeneric(8, this._eventInfo), MM.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(MM, rM, iM) {
          const OM = iM._drawWrapper;
          this._eventInfo.subMesh = iM, this._callbackPluginEventBindForSubMesh(this._eventInfo), OM._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(MM) {}
        bindView(MM) {
          this._useUBO ? this._needToBindSceneUbo = !0 : MM.setMatrix("view", this.Hk().getViewMatrix())
        }
        bindViewProjection(MM) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (MM.setMatrix("viewProjection", this.Hk().getTransformMatrix()), MM.setMatrix("projection", this.Hk().getProjectionMatrix()), MM.setMatrix("inverseProjection", this.Hk().getInverseProjectionMatrix()))
        }
        bindEyePosition(MM, rM) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(MM, rM)
        }
        _afterBind(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && rM && (this._needToBindSceneUbo = !1, (0, JM.v)(rM, this.Hk().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = MM ? MM.visibility : 1, this._onBindObservable && MM && this._onBindObservable.notifyObservers(MM), this.disableDepthWrite) {
            const MM = this._scene.ph();
            this._cachedDepthWriteState = MM.getDepthWrite(), MM.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const MM = this._scene.ph();
            this._cachedColorWriteState = MM.getColorWrite(), MM.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const MM = this._scene.ph();
            this._cachedDepthFunctionState = MM.getDepthFunction() || 0, MM.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.ph().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.ph().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.ph().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(MM) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = MM, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(MM) {
          return null
        }
        _clonePlugins(rM, iM) {
          const OM = {};
          if (this._serializePlugins(OM), MM._ParsePlugins(OM, rM, this._scene, iM), this.pluginManager)
            for (const MM of this.pluginManager._plugins) {
              const iM = rM.pluginManager.getPlugin(MM.name);
              iM && MM.copyTo(iM)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const MM = [];
            for (const rM in this.meshMap) {
              const iM = this.meshMap[rM];
              iM && MM.push(iM)
            }
            return MM
          }
          return this._scene.meshes.filter((MM => MM.material === this))
        }
        forceCompilation(MM, rM, iM, OM) {
          const SM = {
              clipPlane: !1,
              useInstances: !1,
              ...iM
            },
            jM = this.Hk(),
            aM = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const PM = () => {
            if (!this._scene || !this._scene.ph()) return;
            const iM = jM.clipPlane;
            if (SM.clipPlane && (jM.clipPlane = new LM.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let iM = !0,
                jM = null;
              if (MM.iG) {
                const rM = new nM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
                rM.materialDefines && (rM.materialDefines._renderId = -1), this.isReadyForSubMesh(MM, rM, SM.useInstances) || (rM.effect && rM.effect.getCompilationError() && rM.effect.allFallbacksProcessed() ? jM = rM.effect.getCompilationError() : (iM = !1, setTimeout(PM, 16)))
              }
              iM && (this.allowShaderHotSwapping = aM, jM && OM && OM(jM), rM && rM(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = aM, rM && rM(this)) : setTimeout(PM, 16);
            SM.clipPlane && (jM.clipPlane = iM)
          };
          PM()
        }
        async forceCompilationAsync(MM, rM) {
          return await new Promise(((iM, OM) => {
            this.forceCompilation(MM, (() => {
              iM()
            }), rM, (MM => {
              OM(MM)
            }))
          }))
        }
        FrM(rM) {
          this.Hk().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (MM._DirtyCallbackArray.length = 0, rM & MM.ImageProcessingDirtyFlag && MM._DirtyCallbackArray.push(MM._ImageProcessingDirtyCallBack), rM & MM.TextureDirtyFlag && MM._DirtyCallbackArray.push(MM._TextureDirtyCallBack), rM & MM.LightDirtyFlag && MM._DirtyCallbackArray.push(MM._LightsDirtyCallBack), rM & MM.FresnelDirtyFlag && MM._DirtyCallbackArray.push(MM._FresnelDirtyCallBack), rM & MM.AttributesDirtyFlag && MM._DirtyCallbackArray.push(MM._AttributeDirtyCallBack), rM & MM.MiscDirtyFlag && MM._DirtyCallbackArray.push(MM._MiscDirtyCallBack), rM & MM.PrePassDirtyFlag && MM._DirtyCallbackArray.push(MM._PrePassDirtyCallBack), MM._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(MM._RunDirtyCallBacks), this.Hk().resetCachedMaterial())
        }
        resetDrawCache() {
          const MM = this.Hk().meshes;
          for (const rM of MM)
            if (rM.iG)
              for (const MM of rM.iG) MM.Zh() === this && MM.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(MM) {
          const rM = this.Hk();
          if (rM.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const iM = rM.meshes;
          for (const OM of iM)
            if (OM.iG)
              for (const iM of OM.iG) {
                if ((iM.Zh() || (rM._hasDefaultMaterial ? rM.defaultMaterial : null)) === this)
                  for (const rM of iM._drawWrappers) rM && rM.defines && rM.defines.markAllAsDirty && this._materialContext === rM.materialContext && MM(rM.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Hk().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const MM = this.Hk().enablePrePassRenderer();
          MM && MM.FrM()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(MM._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(MM._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(MM._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(MM._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(MM._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(MM._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(MM._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(MM._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(MM._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(MM._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const MM = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Rk.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(MM)
            }))
          }
        }
        setPrePassRenderer(MM) {
          return !1
        }
        dispose(MM, rM, iM) {
          const OM = this.Hk();
          if (OM.stopAnimation(this), OM.freeProcessedMaterials(), OM.removeMaterial(this), this._eventInfo.forceDisposeTextures = rM, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const MM = this._parentContainer.materials.indexOf(this);
            MM > -1 && this._parentContainer.materials.splice(MM, 1), this._parentContainer = null
          }
          if (!0 !== iM)
            if (this.meshMap)
              for (const SM in this.meshMap) {
                const MM = this.meshMap[SM];
                this._disposeMeshResources(MM)
              } else {
                const MM = OM.meshes;
                for (const rM of MM) this._disposeMeshResources(rM)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Rk.notifyObservers(this), this.Rk.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(MM) {
          if (!MM) return;
          const rM = MM.geometry,
            iM = MM._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (MM.iG && iM)
              for (const OM of MM.iG) {
                const MM = OM._drawWrappers;
                for (let SM = 0; SM < MM.length; SM++) {
                  const jM = MM[SM]?.effect;
                  if (!jM) continue;
                  iM[SM] === this && (rM?._releaseVertexArrayObject(jM), OM._removeDrawWrapper(SM, !0, !0))
                }
              }
          } else rM?._releaseVertexArrayObject(this._drawWrapper.effect);
          MM.material !== this || MM.QSM || (MM.material = null)
        }
        serialize() {
          const MM = HM.b.Serialize(this);
          return MM.stencil = this.stencil.serialize(), MM.uniqueId = this.uniqueId, this._serializePlugins(MM), MM
        }
        _serializePlugins(MM) {
          if (MM.plugins = {}, this.pluginManager)
            for (const rM of this.pluginManager._plugins) rM.doNotSerialize || (MM.plugins[rM.getClassName()] = rM.serialize())
        }
        static ParseAlphaMode(MM, rM) {
          void 0 !== MM._alphaMode ? rM._alphaMode = Array.isArray(MM._alphaMode) ? [...MM._alphaMode] : [MM._alphaMode] : void 0 !== MM.alphaMode ? rM._alphaMode = Array.isArray(MM.alphaMode) ? [...MM.alphaMode] : [MM.alphaMode] : rM._alphaMode = [2]
        }
        static Parse(rM, iM, OM) {
          if (rM.customType) {
            if ("BABYLON.PBRMaterial" === rM.customType && rM.overloadedAlbedo && (rM.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return zM.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else rM.customType = "BABYLON.StandardMaterial";
          const SM = jM.e.Instantiate(rM.customType).Parse(rM, iM, OM);
          return SM._loadedUniqueId = rM.uniqueId, MM.ParseAlphaMode(rM, SM), SM
        }
        static _ParsePlugins(MM, rM, iM, OM) {
          if (MM.plugins)
            for (const SM in MM.plugins) {
              const aM = MM.plugins[SM];
              let PM = rM.pluginManager?.getPlugin(aM.name);
              if (!PM) {
                const MM = jM.e.Instantiate("BABYLON." + SM);
                MM && (PM = new MM(rM))
              }
              PM?.parse(aM, iM, OM)
            }
        }
      }, (() => {
        const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], yM = [(0, SM.L)()], lM = [(0, SM.L)()], EM = [(0, SM.L)()], UM = [(0, SM.L)()], GM = [(0, SM.L)()], CM = [(0, SM.L)("alpha")], eM = [(0, SM.L)("backFaceCulling")], bM = [(0, SM.L)("textureRepetitionMode")], wM = [(0, SM.L)("textureRepetitionHexTilingParams")], tM = [(0, SM.L)("cullBackFaces")], gM = [(0, SM.L)()], uM = [(0, SM.L)()], RM = [(0, SM.L)()], pM = [(0, SM.L)()], WM = [(0, SM.L)()], sM = [(0, SM.L)()], DM = [(0, SM.L)()], kM = [(0, SM.L)()], ZM = [(0, SM.L)("fogEnabled")], oM = [(0, SM.L)()], fM = [(0, SM.L)()], YM = [(0, SM.L)()], NM = [(0, SM.L)()], AM = [(0, SM.L)()], xM = [(0, SM.L)()], vM = [(0, SM.L)()], FM = [(0, SM.L)()], (0, OM.i)(MM, null, NM, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: MM => "pointsCloud" in MM,
            get: MM => MM.pointsCloud
          },
          metadata: jM
        }, null, BM), (0, OM.i)(MM, null, AM, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "fillMode" in MM,
            get: MM => MM.fillMode
          },
          metadata: jM
        }, null, BM), (0, OM.i)(MM, null, xM, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: MM => "useLogarithmicDepth" in MM,
            get: MM => MM.useLogarithmicDepth
          },
          metadata: jM
        }, null, BM), (0, OM.i)(MM, null, FM, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "transparencyMode" in MM,
            get: MM => MM.transparencyMode
          },
          metadata: jM
        }, null, BM), (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: MM => "id" in MM,
            get: MM => MM.id,
            set: (MM, rM) => {
              MM.id = rM
            }
          },
          metadata: jM
        }, XM, IM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: MM => "uniqueId" in MM,
            get: MM => MM.uniqueId,
            set: (MM, rM) => {
              MM.uniqueId = rM
            }
          },
          metadata: jM
        }, KM, qM), (0, OM.i)(null, null, yM, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: MM => "name" in MM,
            get: MM => MM.name,
            set: (MM, rM) => {
              MM.name = rM
            }
          },
          metadata: jM
        }, TM, VM), (0, OM.i)(null, null, lM, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: MM => "metadata" in MM,
            get: MM => MM.metadata,
            set: (MM, rM) => {
              MM.metadata = rM
            }
          },
          metadata: jM
        }, cM, Mr), (0, OM.i)(null, null, EM, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: MM => "checkReadyOnEveryCall" in MM,
            get: MM => MM.checkReadyOnEveryCall,
            set: (MM, rM) => {
              MM.checkReadyOnEveryCall = rM
            }
          },
          metadata: jM
        }, rr, ir), (0, OM.i)(null, null, UM, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: MM => "checkReadyOnlyOnce" in MM,
            get: MM => MM.checkReadyOnlyOnce,
            set: (MM, rM) => {
              MM.checkReadyOnlyOnce = rM
            }
          },
          metadata: jM
        }, Or, Sr), (0, OM.i)(null, null, GM, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: MM => "state" in MM,
            get: MM => MM.state,
            set: (MM, rM) => {
              MM.state = rM
            }
          },
          metadata: jM
        }, jr, ar), (0, OM.i)(null, null, CM, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "_alpha" in MM,
            get: MM => MM._alpha,
            set: (MM, rM) => {
              MM._alpha = rM
            }
          },
          metadata: jM
        }, Pr, nr), (0, OM.i)(null, null, eM, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: MM => "_backFaceCulling" in MM,
            get: MM => MM._backFaceCulling,
            set: (MM, rM) => {
              MM._backFaceCulling = rM
            }
          },
          metadata: jM
        }, Qr, zr), (0, OM.i)(null, null, bM, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "_textureRepetitionMode" in MM,
            get: MM => MM._textureRepetitionMode,
            set: (MM, rM) => {
              MM._textureRepetitionMode = rM
            }
          },
          metadata: jM
        }, Lr, mr), (0, OM.i)(null, null, wM, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: MM => "textureRepetitionHexTilingParams" in MM,
            get: MM => MM.textureRepetitionHexTilingParams,
            set: (MM, rM) => {
              MM.textureRepetitionHexTilingParams = rM
            }
          },
          metadata: jM
        }, Hr, hr), (0, OM.i)(null, null, tM, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: MM => "_cullBackFaces" in MM,
            get: MM => MM._cullBackFaces,
            set: (MM, rM) => {
              MM._cullBackFaces = rM
            }
          },
          metadata: jM
        }, Jr, dr), (0, OM.i)(null, null, gM, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: MM => "sideOrientation" in MM,
            get: MM => MM.sideOrientation,
            set: (MM, rM) => {
              MM.sideOrientation = rM
            }
          },
          metadata: jM
        }, yr, lr), (0, OM.i)(null, null, uM, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "_alphaMode" in MM,
            get: MM => MM._alphaMode,
            set: (MM, rM) => {
              MM._alphaMode = rM
            }
          },
          metadata: jM
        }, Er, Ur), (0, OM.i)(null, null, RM, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: MM => "_needDepthPrePass" in MM,
            get: MM => MM._needDepthPrePass,
            set: (MM, rM) => {
              MM._needDepthPrePass = rM
            }
          },
          metadata: jM
        }, Gr, Cr), (0, OM.i)(null, null, pM, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: MM => "disableDepthWrite" in MM,
            get: MM => MM.disableDepthWrite,
            set: (MM, rM) => {
              MM.disableDepthWrite = rM
            }
          },
          metadata: jM
        }, er, br), (0, OM.i)(null, null, WM, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: MM => "disableColorWrite" in MM,
            get: MM => MM.disableColorWrite,
            set: (MM, rM) => {
              MM.disableColorWrite = rM
            }
          },
          metadata: jM
        }, wr, tr), (0, OM.i)(null, null, sM, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: MM => "forceDepthWrite" in MM,
            get: MM => MM.forceDepthWrite,
            set: (MM, rM) => {
              MM.forceDepthWrite = rM
            }
          },
          metadata: jM
        }, gr, ur), (0, OM.i)(null, null, DM, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: MM => "depthFunction" in MM,
            get: MM => MM.depthFunction,
            set: (MM, rM) => {
              MM.depthFunction = rM
            }
          },
          metadata: jM
        }, Rr, pr), (0, OM.i)(null, null, kM, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: MM => "separateCullingPass" in MM,
            get: MM => MM.separateCullingPass,
            set: (MM, rM) => {
              MM.separateCullingPass = rM
            }
          },
          metadata: jM
        }, Wr, sr), (0, OM.i)(null, null, ZM, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "_fogEnabled" in MM,
            get: MM => MM._fogEnabled,
            set: (MM, rM) => {
              MM._fogEnabled = rM
            }
          },
          metadata: jM
        }, Dr, kr), (0, OM.i)(null, null, oM, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: MM => "pointSize" in MM,
            get: MM => MM.pointSize,
            set: (MM, rM) => {
              MM.pointSize = rM
            }
          },
          metadata: jM
        }, Zr, or), (0, OM.i)(null, null, fM, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: MM => "zOffset" in MM,
            get: MM => MM.zOffset,
            set: (MM, rM) => {
              MM.zOffset = rM
            }
          },
          metadata: jM
        }, fr, Yr), (0, OM.i)(null, null, YM, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: MM => "zOffsetUnits" in MM,
            get: MM => MM.zOffsetUnits,
            set: (MM, rM) => {
              MM.zOffsetUnits = rM
            }
          },
          metadata: jM
        }, Nr, Ar), (0, OM.i)(null, null, vM, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: MM => "_isVertexOutputInvariant" in MM,
            get: MM => MM._isVertexOutputInvariant,
            set: (MM, rM) => {
              MM._isVertexOutputInvariant = rM
            }
          },
          metadata: jM
        }, xr, vr), jM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jM
        })
      })(), MM.TriangleFillMode = 0, MM.WireFrameFillMode = 1, MM.PointFillMode = 2, MM.PointListDrawMode = 3, MM.LineListDrawMode = 4, MM.LineLoopDrawMode = 5, MM.LineStripDrawMode = 6, MM.TriangleStripDrawMode = 7, MM.TriangleFanDrawMode = 8, MM.ClockWiseSideOrientation = 0, MM.CounterClockWiseSideOrientation = 1, MM.ImageProcessingDirtyFlag = 64, MM.TextureDirtyFlag = 1, MM.LightDirtyFlag = 2, MM.FresnelDirtyFlag = 4, MM.AttributesDirtyFlag = 8, MM.MiscDirtyFlag = 16, MM.PrePassDirtyFlag = 32, MM.AllDirtyFlag = 127, MM.MATERIAL_OPAQUE = 0, MM.MATERIAL_ALPHATEST = 1, MM.MATERIAL_ALPHABLEND = 2, MM.MATERIAL_ALPHATESTANDBLEND = 3, MM.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, MM.MATERIAL_NORMALBLENDMETHOD_RNM = 1, MM.LIGHTFALLOFF_PHYSICAL = 0, MM.LIGHTFALLOFF_GLTF = 1, MM.LIGHTFALLOFF_STANDARD = 2, MM.OnEventObservable = new aM.d, MM.ForceVertexOutputInvariant = !1, MM._AllDirtyCallBack = MM => MM.markAllAsDirty(), MM._ImageProcessingDirtyCallBack = MM => MM.markAsImageProcessingDirty(), MM._TextureDirtyCallBack = MM => MM.markAsTexturesDirty(), MM._FresnelDirtyCallBack = MM => MM.markAsFresnelDirty(), MM._MiscDirtyCallBack = MM => MM.markAsMiscDirty(), MM._PrePassDirtyCallBack = MM => MM.markAsPrePassDirty(), MM._LightsDirtyCallBack = MM => MM.markAsLightDirty(), MM._AttributeDirtyCallBack = MM => MM.markAsAttributesDirty(), MM._FresnelAndMiscDirtyCallBack = rM => {
        MM._FresnelDirtyCallBack(rM), MM._MiscDirtyCallBack(rM)
      }, MM._TextureAndMiscDirtyCallBack = rM => {
        MM._TextureDirtyCallBack(rM), MM._MiscDirtyCallBack(rM)
      }, MM._DirtyCallbackArray = [], MM._RunDirtyCallBacks = rM => {
        for (const iM of MM._DirtyCallbackArray) iM(rM)
      }, MM
    })();
    Object.getOwnPropertyDescriptor(lM.prototype, "pluginManager") || Object.defineProperty(lM.prototype, "pluginManager", (0, yM.g)("Material", "pluginManager"))
  },
  41438: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(41005);
    class SM {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(MM) {
        this._DiffuseTextureEnabled !== MM && (this._DiffuseTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(MM) {
        this._BaseWeightTextureEnabled !== MM && (this._BaseWeightTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(MM) {
        this._BaseDiffuseRoughnessTextureEnabled !== MM && (this._BaseDiffuseRoughnessTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(MM) {
        this._DetailTextureEnabled !== MM && (this._DetailTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(MM) {
        this._DecalMapEnabled !== MM && (this._DecalMapEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(MM) {
        this._AmbientTextureEnabled !== MM && (this._AmbientTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(MM) {
        this._OpacityTextureEnabled !== MM && (this._OpacityTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(MM) {
        this._ReflectionTextureEnabled !== MM && (this._ReflectionTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(MM) {
        this._EmissiveTextureEnabled !== MM && (this._EmissiveTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(MM) {
        this._SpecularTextureEnabled !== MM && (this._SpecularTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(MM) {
        this._BumpTextureEnabled !== MM && (this._BumpTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(MM) {
        this._LightmapTextureEnabled !== MM && (this._LightmapTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(MM) {
        this._RefractionTextureEnabled !== MM && (this._RefractionTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(MM) {
        this._ColorGradingTextureEnabled !== MM && (this._ColorGradingTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(MM) {
        this._FresnelEnabled !== MM && (this._FresnelEnabled = MM, OM.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(MM) {
        this._ClearCoatTextureEnabled !== MM && (this._ClearCoatTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(MM) {
        this._ClearCoatBumpTextureEnabled !== MM && (this._ClearCoatBumpTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(MM) {
        this._ClearCoatTintTextureEnabled !== MM && (this._ClearCoatTintTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(MM) {
        this._SheenTextureEnabled !== MM && (this._SheenTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(MM) {
        this._AnisotropicTextureEnabled !== MM && (this._AnisotropicTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(MM) {
        this._ThicknessTextureEnabled !== MM && (this._ThicknessTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(MM) {
        this._RefractionIntensityTextureEnabled !== MM && (this._RefractionIntensityTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(MM) {
        this._TranslucencyIntensityTextureEnabled !== MM && (this._TranslucencyIntensityTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(MM) {
        this._TranslucencyColorTextureEnabled !== MM && (this._TranslucencyColorTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(MM) {
        this._IridescenceTextureEnabled !== MM && (this._IridescenceTextureEnabled = MM, OM.d.MarkAllMaterialsAsDirty(1))
      }
    }
    SM._DiffuseTextureEnabled = !0, SM._BaseWeightTextureEnabled = !0, SM._BaseDiffuseRoughnessTextureEnabled = !0, SM._DetailTextureEnabled = !0, SM._DecalMapEnabled = !0, SM._AmbientTextureEnabled = !0, SM._OpacityTextureEnabled = !0, SM._ReflectionTextureEnabled = !0, SM._EmissiveTextureEnabled = !0, SM._SpecularTextureEnabled = !0, SM._BumpTextureEnabled = !0, SM._LightmapTextureEnabled = !0, SM._RefractionTextureEnabled = !0, SM._ColorGradingTextureEnabled = !0, SM._FresnelEnabled = !0, SM._ClearCoatTextureEnabled = !0, SM._ClearCoatBumpTextureEnabled = !0, SM._ClearCoatTintTextureEnabled = !0, SM._SheenTextureEnabled = !0, SM._AnisotropicTextureEnabled = !0, SM._ThicknessTextureEnabled = !0, SM._RefractionIntensityTextureEnabled = !0, SM._TranslucencyIntensityTextureEnabled = !0, SM._TranslucencyColorTextureEnabled = !0, SM._IridescenceTextureEnabled = !0
  },
  41426: (MM, rM, iM) => {
    iM.d(rM, {
      $: () => xM,
      A: () => GM,
      D: () => gM,
      F: () => uM,
      G: () => HM,
      H: () => mM,
      K: () => AM,
      N: () => ZM,
      R: () => DM,
      S: () => sM,
      W: () => EM,
      X: () => pM,
      b: () => WM,
      d: () => CM,
      db: () => vM,
      eb: () => FM,
      fb: () => KM,
      g: () => LM,
      gb: () => XM,
      ib: () => IM,
      j: () => yM,
      jb: () => hM,
      l: () => lM,
      o: () => tM,
      q: () => nM,
      r: () => JM,
      v: () => dM,
      x: () => UM,
      y: () => RM
    });
    var OM = iM(39711),
      SM = iM(38064),
      jM = iM(41309),
      aM = iM(41433),
      PM = iM(41438);

    function nM(MM, rM, iM) {
      if (!MM || MM.LOGARITHMICDEPTH || MM.indexOf && MM.indexOf("LOGARITHMICDEPTH") >= 0) {
        const MM = iM.activeCamera;
        1 === MM.mode && OM.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), rM.setFloat("logarithmicDepthConstant", 2 / (Math.log(MM.maxZ + 1) / Math.LN2))
      }
    }
    const QM = {
        r: 0,
        g: 0,
        b: 0
      },
      zM = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function LM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      iM && MM.fogEnabled && (!rM || rM.applyFog) && 0 !== MM.fogMode && (iM.setFloat4("vFogInfos", MM.fogMode, MM.fogStart, MM.fogEnd, MM.fogDensity), OM ? (MM.fogColor.toLinearSpaceToRef(QM, MM.ph().useExactSrgbConversions), iM.setColor3("vFogColor", QM)) : iM.setColor3("vFogColor", MM.fogColor))
    }

    function mM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
      const LM = MM.numMaxInfluencers || MM.numInfluencers;
      return LM <= 0 ? 0 : (rM.push("#define MORPHTARGETS"), MM.hasPositions && rM.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), MM.hasNormals && rM.push("#define MORPHTARGETTEXTURE_HASNORMALS"), MM.hasTangents && rM.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), MM.hasUVs && rM.push("#define MORPHTARGETTEXTURE_HASUVS"), MM.hasUV2s && rM.push("#define MORPHTARGETTEXTURE_HASUV2S"), MM.hasColors && rM.push("#define MORPHTARGETTEXTURE_HASCOLORS"), MM.supportsPositions && SM && rM.push("#define MORPHTARGETS_POSITION"), MM.supportsNormals && jM && rM.push("#define MORPHTARGETS_NORMAL"), MM.supportsTangents && aM && rM.push("#define MORPHTARGETS_TANGENT"), MM.supportsUVs && PM && rM.push("#define MORPHTARGETS_UV"), MM.supportsUV2s && nM && rM.push("#define MORPHTARGETS_UV2"), MM.supportsColors && QM && rM.push("#define MORPHTARGETS_COLOR"), rM.push("#define NUM_MORPH_INFLUENCERS " + LM), MM.isUsingTextureForTargets && rM.push("#define MORPHTARGETS_TEXTURE"), zM.NUM_MORPH_INFLUENCERS = LM, zM.NORMAL = jM, zM.TANGENT = aM, zM.UV = PM, zM.UV2 = nM, zM.COLOR = QM, HM(iM, OM, zM, SM), LM)
    }

    function HM(MM, rM, iM) {
      let jM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const aM = iM.NUM_MORPH_INFLUENCERS;
      if (aM > 0 && SM.c.LastCreatedEngine) {
        const PM = SM.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          nM = rM.morphTargetManager;
        if (nM?.isUsingTextureForTargets) return;
        const QM = nM && nM.supportsPositions && jM,
          zM = nM && nM.supportsNormals && iM.NORMAL,
          LM = nM && nM.supportsTangents && iM.TANGENT,
          mM = nM && nM.supportsUVs && iM.UV1,
          HM = nM && nM.supportsUV2s && iM.UV2,
          hM = nM && nM.supportsColors && iM.VERTEXCOLOR;
        for (let iM = 0; iM < aM; iM++) QM && MM.push("position" + iM), zM && MM.push("normal" + iM), LM && MM.push("tangent" + iM), mM && MM.push("uv_" + iM), HM && MM.push("uv2_" + iM), hM && MM.push("color" + iM), MM.length > PM && OM.e.Error("Cannot add more vertex attributes for mesh " + rM.name)
      }
    }

    function hM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      MM.push("world0"), MM.push("world1"), MM.push("world2"), MM.push("world3"), rM && (MM.push("previousWorld0"), MM.push("previousWorld1"), MM.push("previousWorld2"), MM.push("previousWorld3"))
    }

    function JM(MM, rM) {
      const iM = MM.morphTargetManager;
      MM && iM && rM.setFloatArray("morphTargetInfluences", iM.influences)
    }

    function dM(MM, rM) {
      rM.bindToEffect(MM, "Scene")
    }

    function yM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        nM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        zM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        LM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        mM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (MM.texturesEnabled && SM && PM.e.ReflectionTextureEnabled) {
        if (iM.p_("reflectionMatrix", SM.getReflectionTextureMatrix()), iM.updateFloat2("vReflectionInfos", SM.level * MM.iblIntensity, mM), nM && SM.boundingBoxSize) {
          const MM = SM;
          iM.updateVector3("vReflectionPosition", MM.boundingBoxPosition), iM.updateVector3("vReflectionSize", MM.boundingBoxSize)
        }
        if (jM) {
          const MM = SM.getSize().width;
          iM.updateFloat2("vReflectionFilteringInfo", MM, Math.log2(MM))
        }
        if (zM && !rM.USEIRRADIANCEMAP) {
          const MM = SM.sphericalPolynomial;
          if (rM.USESPHERICALFROMREFLECTIONMAP && MM)
            if (rM.SPHERICAL_HARMONICS) {
              const rM = MM.preScaledHarmonics;
              iM.updateVector3("vSphericalL00", rM.l00), iM.updateVector3("vSphericalL1_1", rM.l1_1), iM.updateVector3("vSphericalL10", rM.l10), iM.updateVector3("vSphericalL11", rM.l11), iM.updateVector3("vSphericalL2_2", rM.l2_2), iM.updateVector3("vSphericalL2_1", rM.l2_1), iM.updateVector3("vSphericalL20", rM.l20), iM.updateVector3("vSphericalL21", rM.l21), iM.updateVector3("vSphericalL22", rM.l22)
            } else iM.updateFloat3("vSphericalX", MM.x.x, MM.x.y, MM.x.z), iM.updateFloat3("vSphericalY", MM.y.x, MM.y.y, MM.y.z), iM.updateFloat3("vSphericalZ", MM.z.x, MM.z.y, MM.z.z), iM.updateFloat3("vSphericalXX_ZZ", MM.xx.x - MM.zz.x, MM.xx.y - MM.zz.y, MM.xx.z - MM.zz.z), iM.updateFloat3("vSphericalYY_ZZ", MM.yy.x - MM.zz.x, MM.yy.y - MM.zz.y, MM.yy.z - MM.zz.z), iM.updateFloat3("vSphericalZZ", MM.zz.x, MM.zz.y, MM.zz.z), iM.updateFloat3("vSphericalXY", MM.xy.x, MM.xy.y, MM.xy.z), iM.updateFloat3("vSphericalYZ", MM.yz.x, MM.yz.y, MM.yz.z), iM.updateFloat3("vSphericalZX", MM.zx.x, MM.zx.y, MM.zx.z)
        } else QM && rM.USEIRRADIANCEMAP && rM.USE_IRRADIANCE_DOMINANT_DIRECTION && SM.irradianceTexture && iM.updateVector3("vReflectionDominantDirection", SM.irradianceTexture._dominantDirection);
        aM && iM.updateFloat3("vReflectionMicrosurfaceInfos", SM.getSize().width, SM.lodGenerationScale, SM.lodGenerationOffset)
      }
      LM && iM.updateColor3("vReflectionColor", OM)
    }

    function lM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (OM && PM.e.ReflectionTextureEnabled) {
        rM.LODBASEDMICROSFURACE ? iM.setTexture("reflectionSampler", OM) : (iM.setTexture("reflectionSampler", OM._lodTextureMid || OM), iM.setTexture("reflectionSamplerLow", OM._lodTextureLow || OM), iM.setTexture("reflectionSamplerHigh", OM._lodTextureHigh || OM)), rM.USEIRRADIANCEMAP && iM.setTexture("irradianceSampler", OM.irradianceTexture);
        const jM = MM.iblCdfGenerator;
        SM && jM && iM.setTexture("icdfSampler", jM.getIcdfTexture())
      }
    }

    function EM(MM, rM, iM) {
      rM._needUVs = !0, rM[iM] = !0, MM.optimizeUVAllocation && MM.getTextureMatrix().isIdentityAs3x2() ? (rM[iM + "DIRECTUV"] = MM.coordinatesIndex + 1, rM["MAINUV" + (MM.coordinatesIndex + 1)] = !0) : rM[iM + "DIRECTUV"] = 0
    }

    function UM(MM, rM, iM) {
      const OM = MM.getTextureMatrix();
      rM.p_(iM + "Matrix", OM)
    }

    function GM(MM, rM, iM) {
      iM.BAKED_VERTEX_ANIMATION_TEXTURE && iM.INSTANCES && MM.push("bakedVertexAnimationSettingsInstanced")
    }

    function CM(MM, rM, iM) {
      var OM;
      if (rM && MM && (MM.computeBonesUsingShaders && rM._bonesComputationForcedToCPU && (MM.computeBonesUsingShaders = !1), MM.useBones && MM.computeBonesUsingShaders && MM.skeleton)) {
        const SM = MM.skeleton;
        if (SM.isUsingTextureForMatrices && rM.getUniformIndex("boneTextureInfo") > -1) {
          const iM = SM.getTransformMatrixTexture(MM);
          rM.setTexture("boneSampler", iM), rM.setFloat2("boneTextureInfo", SM._textureWidth, SM._textureHeight)
        } else {
          const jM = SM.getTransformMatrices(MM);
          jM && (rM.setMatrices("mBones", jM), iM && MM.Hk().prePassRenderer && MM.Hk().prePassRenderer.getIndex(2) && (iM.previousBones[MM.uniqueId] || (iM.previousBones[MM.uniqueId] = jM.slice()), rM.setMatrices("mPreviousBones", iM.previousBones[MM.uniqueId]), OM = jM, iM.previousBones[MM.uniqueId].set(OM)))
        }
      }
    }

    function eM(MM, rM, iM, OM, SM) {
      let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      MM._bindLight(rM, iM, OM, SM, jM)
    }
    const bM = 4,
      wM = new WeakMap;

    function tM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const jM = Math.min(rM.lightSources.length, SM);
      for (let aM = 0; aM < jM; aM++) {
        eM(rM.lightSources[aM], aM, MM, iM, "boolean" === typeof OM ? OM : OM.SPECULARTERM, rM.receiveShadows)
      }
    }

    function gM(MM, rM, iM, OM) {
      iM.NUM_BONE_INFLUENCERS > 0 && (OM.addCPUSkinningFallback(0, rM), MM.push("matricesIndices"), MM.push("matricesWeights"), iM.NUM_BONE_INFLUENCERS > 4 && (MM.push("matricesIndicesExtra"), MM.push("matricesWeightsExtra")))
    }

    function uM(MM, rM) {
      (rM.INSTANCES || rM.THIN_INSTANCES) && hM(MM, !!rM.PREPASS_VELOCITY), rM.INSTANCESCOLOR && MM.push("instanceColor")
    }

    function RM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SM = 0;
      for (let jM = 0; jM < iM && MM["LIGHT" + jM]; jM++) jM > 0 && (SM = OM + jM, rM.addFallback(SM, "LIGHT" + jM)), MM.SHADOWS || (MM["SHADOW" + jM] && rM.addFallback(OM, "SHADOW" + jM), MM["SHADOWPCF" + jM] && rM.addFallback(OM, "SHADOWPCF" + jM), MM["SHADOWPCSS" + jM] && rM.addFallback(OM, "SHADOWPCSS" + jM), MM["SHADOWPOISSON" + jM] && rM.addFallback(OM, "SHADOWPOISSON" + jM), MM["SHADOWESM" + jM] && rM.addFallback(OM, "SHADOWESM" + jM), MM["SHADOWCLOSEESM" + jM] && rM.addFallback(OM, "SHADOWCLOSEESM" + jM));
      return SM
    }

    function pM(MM, rM, iM, OM, SM, jM, aM) {
      let PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        QM = arguments.length > 9 ? arguments[9] : void 0,
        zM = arguments.length > 10 ? arguments[10] : void 0;
      if (aM._areMiscDirty) {
        aM.LOGARITHMICDEPTH = iM, aM.POINTSIZE = OM, aM.FOG = SM && function(MM, rM) {
          return rM.fogEnabled && MM.applyFog && 0 !== rM.fogMode
        }(MM, rM), aM.NONUNIFORMSCALING = MM.nonUniformScaling, aM.ALPHATEST = jM, aM.DECAL_AFTER_DETAIL = PM, aM.USE_VERTEX_PULLING = nM, aM.RIGHT_HANDED = rM.useRightHandedSystem;
        const LM = nM ? QM?.geometry?.getIndexBuffer() : null,
          mM = !!QM && QM.isUnIndexed;
        aM.VERTEX_PULLING_USE_INDEX_BUFFER = !!LM && !mM, aM.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!LM || mM) && LM.is32Bits, aM.VERTEXOUTPUT_INVARIANT = !!zM
      }
    }

    function WM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!MM.lightsEnabled || OM) return !0;
      const SM = rM.lightSources,
        jM = Math.min(SM.length, iM);
      for (let aM = 0; aM < jM; aM++)
        if (!SM[aM].areLightTexturesReady()) return !1;
      return !0
    }

    function sM(MM, rM, iM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!iM._areLightsDirty) return iM._needNormals;
      const PM = jM;
      jM = function(MM, rM) {
        const iM = MM.ph().getCaps().maxUniformBuffersPerShaderStage;
        if (null == iM) return rM;
        const OM = Math.max(iM - bM, 1);
        return Math.min(rM, OM)
      }(MM, jM);
      let nM = 0;
      const QM = {
        needNormals: iM._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (MM.lightsEnabled && !aM) {
        rM.lightSources.length > jM && jM < PM && function(MM, rM, iM, SM) {
          let jM = wM.get(MM);
          jM || (jM = new Set, wM.set(MM, jM)), jM.has(SM) || (jM.add(SM), OM.e.Warn(`maxSimultaneousLights is ${rM} but this engine supports at most ${iM} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${SM} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${SM+bM} uniform buffers, over the device limit of ${MM.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${iM}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${iM} or less to silence this warning.`))
        }(MM.ph(), PM, jM, Math.min(rM.lightSources.length, PM));
        for (const OM of rM.lightSources)
          if (kM(MM, rM, OM, nM, iM, SM, QM), nM++, nM === jM) break
      }
      iM.SPECULARTERM = QM.specularEnabled, iM.SHADOWS = QM.shadowEnabled;
      const zM = Math.max(jM, iM.MAXLIGHTCOUNT || 0);
      for (let OM = nM; OM < zM; OM++) void 0 !== iM["LIGHT" + OM] && (iM["LIGHT" + OM] = !1, iM["HEMILIGHT" + OM] = !1, iM["POINTLIGHT" + OM] = !1, iM["DIRLIGHT" + OM] = !1, iM["SPOTLIGHT" + OM] = !1, iM["AREALIGHT" + OM] = !1, iM["CLUSTLIGHT" + OM] = !1, iM["SHADOW" + OM] = !1, iM["SHADOWCSM" + OM] = !1, iM["SHADOWCSMDEBUG" + OM] = !1, iM["SHADOWCSMNUM_CASCADES" + OM] = !1, iM["SHADOWCSMUSESHADOWMAXZ" + OM] = !1, iM["SHADOWCSMNOBLEND" + OM] = !1, iM["SHADOWCSM_RIGHTHANDED" + OM] = !1, iM["SHADOWPCF" + OM] = !1, iM["SHADOWPCSS" + OM] = !1, iM["SHADOWPOISSON" + OM] = !1, iM["SHADOWESM" + OM] = !1, iM["SHADOWCLOSEESM" + OM] = !1, iM["SHADOWCUBE" + OM] = !1, iM["SHADOWLOWQUALITY" + OM] = !1, iM["SHADOWMEDIUMQUALITY" + OM] = !1);
      iM.LIGHTCOUNT = nM, iM.MAXLIGHTCOUNT = jM;
      const LM = MM.ph().getCaps();
      return void 0 === iM.SHADOWFLOAT && (QM.needRebuild = !0), iM.SHADOWFLOAT = QM.shadowEnabled && (LM.textureFloatRender && LM.textureFloatLinearFiltering || LM.textureHalfFloatRender && LM.textureHalfFloatLinearFiltering), iM.LIGHTMAPEXCLUDED = QM.lightmapMode, QM.needRebuild && iM.rebuild(), QM.needNormals
    }

    function DM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (rM && PM.e.ReflectionTextureEnabled) {
        if (!rM.isReadyOrNotBlocking()) return !1;
        iM._needNormals = !0, iM.REFLECTION = !0, iM.GAMMAREFLECTION = rM.gammaSpace, iM.RGBDREFLECTION = rM.isRGBD, iM.LODINREFLECTIONALPHA = rM.lodLevelInAlpha, iM.LINEARSPECULARREFLECTION = rM.linearSpecularLOD, iM.USEIRRADIANCEMAP = !1, iM.LODBASEDMICROSFURACE = MM.ph().getCaps().textureLOD;
        const aM = MM.ph();
        switch (OM && SM > 0 ? (iM.NUM_SAMPLES = "" + SM, aM._features.needTypeSuffixInShaderConstants && (iM.NUM_SAMPLES = iM.NUM_SAMPLES + "u"), iM.REALTIME_FILTERING = !0, MM.iblCdfGenerator && (iM.IBL_CDF_FILTERING = !0)) : iM.REALTIME_FILTERING = !1, iM.INVERTCUBICMAP = 6 === rM.coordinatesMode, iM.REFLECTIONMAP_3D = rM.isCube, iM.REFLECTIONMAP_OPPOSITEZ = iM.REFLECTIONMAP_3D && MM.useRightHandedSystem ? !rM.invertZ : rM.invertZ, iM.REFLECTIONMAP_CUBIC = !1, iM.REFLECTIONMAP_EXPLICIT = !1, iM.REFLECTIONMAP_PLANAR = !1, iM.REFLECTIONMAP_PROJECTION = !1, iM.REFLECTIONMAP_SKYBOX = !1, iM.REFLECTIONMAP_SPHERICAL = !1, iM.REFLECTIONMAP_EQUIRECTANGULAR = !1, iM.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, iM.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, rM.coordinatesMode) {
          case 0:
            iM.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            iM.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            iM.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            iM.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            iM.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            iM.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            iM.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            iM.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            iM.REFLECTIONMAP_CUBIC = !0, iM.USE_LOCAL_REFLECTIONMAP_CUBIC = !!rM.boundingBoxSize
        }
        5 !== rM.coordinatesMode && (rM.irradianceTexture ? (iM.USEIRRADIANCEMAP = !0, iM.USESPHERICALFROMREFLECTIONMAP = !1, iM.USESPHERICALINVERTEX = !1, rM.irradianceTexture._dominantDirection ? iM.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : iM.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : rM.isCube && (iM.USESPHERICALFROMREFLECTIONMAP = !0, iM.USEIRRADIANCEMAP = !1, iM.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, iM.USESPHERICALINVERTEX = jM))
      } else iM.REFLECTION = !1, iM.REFLECTIONMAP_3D = !1, iM.REFLECTIONMAP_SPHERICAL = !1, iM.REFLECTIONMAP_PLANAR = !1, iM.REFLECTIONMAP_CUBIC = !1, iM.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, iM.REFLECTIONMAP_PROJECTION = !1, iM.REFLECTIONMAP_SKYBOX = !1, iM.REFLECTIONMAP_EXPLICIT = !1, iM.REFLECTIONMAP_EQUIRECTANGULAR = !1, iM.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, iM.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, iM.INVERTCUBICMAP = !1, iM.USESPHERICALFROMREFLECTIONMAP = !1, iM.USEIRRADIANCEMAP = !1, iM.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, iM.USESPHERICALINVERTEX = !1, iM.REFLECTIONMAP_OPPOSITEZ = !1, iM.LODINREFLECTIONALPHA = !1, iM.GAMMAREFLECTION = !1, iM.RGBDREFLECTION = !1, iM.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function kM(MM, rM, iM, OM, SM, aM, PM) {
      switch (PM.needNormals = !0, void 0 === SM["LIGHT" + OM] && (PM.needRebuild = !0), SM["LIGHT" + OM] = !0, SM["SPOTLIGHT" + OM] = !1, SM["HEMILIGHT" + OM] = !1, SM["POINTLIGHT" + OM] = !1, SM["DIRLIGHT" + OM] = !1, SM["AREALIGHT" + OM] = !1, SM["CLUSTLIGHT" + OM] = !1, iM.prepareLightSpecificDefines(SM, OM), SM["LIGHT_FALLOFF_PHYSICAL" + OM] = !1, SM["LIGHT_FALLOFF_GLTF" + OM] = !1, SM["LIGHT_FALLOFF_STANDARD" + OM] = !1, iM.falloffType) {
        case jM.b.FALLOFF_GLTF:
          SM["LIGHT_FALLOFF_GLTF" + OM] = !0;
          break;
        case jM.b.FALLOFF_PHYSICAL:
          SM["LIGHT_FALLOFF_PHYSICAL" + OM] = !0;
          break;
        case jM.b.FALLOFF_STANDARD:
          SM["LIGHT_FALLOFF_STANDARD" + OM] = !0
      }
      if (aM && !iM.specular.equalsFloats(0, 0, 0) && (PM.specularEnabled = !0), SM["SHADOW" + OM] = !1, SM["SHADOWCSM" + OM] = !1, SM["SHADOWCSMDEBUG" + OM] = !1, SM["SHADOWCSMNUM_CASCADES" + OM] = !1, SM["SHADOWCSMUSESHADOWMAXZ" + OM] = !1, SM["SHADOWCSMNOBLEND" + OM] = !1, SM["SHADOWCSM_RIGHTHANDED" + OM] = !1, SM["SHADOWPCF" + OM] = !1, SM["SHADOWPCSS" + OM] = !1, SM["SHADOWPOISSON" + OM] = !1, SM["SHADOWESM" + OM] = !1, SM["SHADOWCLOSEESM" + OM] = !1, SM["SHADOWCUBE" + OM] = !1, SM["SHADOWLOWQUALITY" + OM] = !1, SM["SHADOWMEDIUMQUALITY" + OM] = !1, rM && rM.receiveShadows && MM.shadowsEnabled && iM.shadowEnabled) {
        const rM = iM.getShadowGenerator(MM.activeCamera) ?? iM.getShadowGenerator();
        if (rM) {
          const MM = rM.getShadowMap();
          MM && MM.renderList && MM.renderList.length > 0 && (PM.shadowEnabled = !0, rM.prepareDefines(SM, OM))
        }
      }
      iM.lightmapMode != jM.b.LIGHTMAP_DEFAULT ? (PM.lightmapMode = !0, SM["LIGHTMAPEXCLUDED" + OM] = !0, SM["LIGHTMAPNOSPECULAR" + OM] = iM.lightmapMode == jM.b.LIGHTMAP_SHADOWSONLY) : (SM["LIGHTMAPEXCLUDED" + OM] = !1, SM["LIGHTMAPNOSPECULAR" + OM] = !1)
    }

    function ZM(MM, rM, iM, OM, SM) {
      let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        nM = function(MM, rM) {
          let iM = !1;
          if (MM.activeCamera) {
            const OM = rM.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              SM = rM.CAMERA_PERSPECTIVE ? 1 : 0,
              jM = 1 === MM.activeCamera.mode ? 1 : 0,
              aM = 0 === MM.activeCamera.mode ? 1 : 0;
            (OM ^ jM || SM ^ aM) && (rM.CAMERA_ORTHOGRAPHIC = 1 === jM, rM.CAMERA_PERSPECTIVE = 1 === aM, iM = !0)
          }
          return iM
        }(MM, OM);
      !1 !== jM && (nM = (0, aM.g)(iM, MM, OM)), OM.DEPTHPREPASS !== !rM.getColorWrite() && (OM.DEPTHPREPASS = !OM.DEPTHPREPASS, nM = !0), OM.INSTANCES !== SM && (OM.INSTANCES = SM, nM = !0), OM.THIN_INSTANCES !== PM && (OM.THIN_INSTANCES = PM, nM = !0), nM && OM.markAsUnprocessed()
    }
    const oM = 40,
      fM = 64,
      YM = new WeakMap,
      NM = new WeakSet;

    function AM(MM, rM, iM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        PM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!rM._areAttributesDirty && rM._needNormals === rM._normals && rM._needUVs === rM._uvs) return !1;
      rM._normals = rM._needNormals, rM._uvs = rM._needUVs, rM.NORMAL = rM._needNormals && MM.isVerticesDataPresent("normal"), rM._needNormals && MM.isVerticesDataPresent("tangent") && (rM.TANGENT = !0);
      for (let OM = 1; OM <= 6; ++OM) rM["UV" + OM] = !!rM._needUVs && MM.isVerticesDataPresent(`uv${1===OM?"":OM}`);
      if (iM) {
        const iM = MM.useVertexColors && MM.isVerticesDataPresent("color");
        rM.VERTEXCOLOR = iM, rM.VERTEXALPHA = MM.hasVertexAlpha && iM && aM
      }
      return MM.isVerticesDataPresent("instanceColor") && (MM.nSM || MM.hasThinInstances) && (rM.INSTANCESCOLOR = !0), SM && function(MM, rM) {
        if (MM.useBones && MM.computeBonesUsingShaders && MM.skeleton) {
          rM.NUM_BONE_INFLUENCERS = MM.numBoneInfluencers;
          const iM = void 0 !== rM.BONETEXTURE;
          if (MM.skeleton.isUsingTextureForMatrices && iM) rM.BONETEXTURE = !0;
          else {
            rM.BonesPerMesh = MM.skeleton.bones.length + 1, rM.BONETEXTURE = !iM && void 0;
            const SM = MM.Hk(),
              jM = SM.prePassRenderer;
            if (jM && jM.enabled) {
              const iM = -1 === jM.excludedSkinnedMesh.indexOf(MM);
              rM.BONES_VELOCITY_ENABLED = iM
            }
            const aM = !0 === rM.MULTIVIEW,
              PM = 2 * rM.BonesPerMesh + (aM ? 1 : 0);
            if (YM.get(MM.skeleton) !== PM) {
              YM.set(MM.skeleton, PM);
              const iM = SM.ph().getCaps().maxVertexUniformVectors;
              if (iM && !NM.has(MM.skeleton)) {
                const SM = 4 * rM.BonesPerMesh,
                  jM = aM ? fM : oM,
                  PM = Math.max(iM - jM, 0);
                (SM > PM || aM && 3 * SM > iM) && (NM.add(MM.skeleton), OM.e.Warn(`Skeleton "${MM.skeleton.name}": ${MM.skeleton.bones.length} bones stored as vertex uniforms use ${SM} of ~${PM} usable uniform vectors${aM?" (multiview)":""} on a device reporting ${iM}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else rM.NUM_BONE_INFLUENCERS = 0, rM.BonesPerMesh = 0, void 0 !== rM.BONETEXTURE && (rM.BONETEXTURE = !1)
      }(MM, rM), jM && function(MM, rM) {
        const iM = MM.morphTargetManager;
        iM ? (rM.MORPHTARGETS_UV = iM.supportsUVs && rM.UV1, rM.MORPHTARGETS_UV2 = iM.supportsUV2s && rM.UV2, rM.MORPHTARGETS_TANGENT = iM.supportsTangents && rM.TANGENT, rM.MORPHTARGETS_NORMAL = iM.supportsNormals && rM.NORMAL, rM.MORPHTARGETS_POSITION = iM.supportsPositions, rM.MORPHTARGETS_COLOR = iM.supportsColors, rM.MORPHTARGETTEXTURE_HASUVS = iM.hasUVs, rM.MORPHTARGETTEXTURE_HASUV2S = iM.hasUV2s, rM.MORPHTARGETTEXTURE_HASTANGENTS = iM.hasTangents, rM.MORPHTARGETTEXTURE_HASNORMALS = iM.hasNormals, rM.MORPHTARGETTEXTURE_HASPOSITIONS = iM.hasPositions, rM.MORPHTARGETTEXTURE_HASCOLORS = iM.hasColors, rM.NUM_MORPH_INFLUENCERS = iM.numMaxInfluencers || iM.numInfluencers, rM.MORPHTARGETS = rM.NUM_MORPH_INFLUENCERS > 0, rM.MORPHTARGETS_TEXTURE = iM.isUsingTextureForTargets) : (rM.MORPHTARGETS_UV = !1, rM.MORPHTARGETS_UV2 = !1, rM.MORPHTARGETS_TANGENT = !1, rM.MORPHTARGETS_NORMAL = !1, rM.MORPHTARGETS_POSITION = !1, rM.MORPHTARGETS_COLOR = !1, rM.MORPHTARGETTEXTURE_HASUVS = !1, rM.MORPHTARGETTEXTURE_HASUV2S = !1, rM.MORPHTARGETTEXTURE_HASTANGENTS = !1, rM.MORPHTARGETTEXTURE_HASNORMALS = !1, rM.MORPHTARGETTEXTURE_HASPOSITIONS = !1, rM.MORPHTARGETTEXTURE_HAS_COLORS = !1, rM.MORPHTARGETS = !1, rM.NUM_MORPH_INFLUENCERS = 0)
      }(MM, rM), PM && function(MM, rM) {
        const iM = MM.bakedVertexAnimationManager;
        rM.BAKED_VERTEX_ANIMATION_TEXTURE = !(!iM || !iM.isEnabled)
      }(MM, rM), !0
    }

    function xM(MM, rM) {
      if (MM.activeCamera) {
        const iM = rM.MULTIVIEW;
        rM.MULTIVIEW = null !== MM.activeCamera.outputRenderTarget && MM.activeCamera.outputRenderTarget.getViewCount() > 1, rM.MULTIVIEW != iM && rM.markAsUnprocessed()
      }
    }

    function vM(MM, rM, iM) {
      const OM = rM.ORDER_INDEPENDENT_TRANSPARENCY,
        SM = rM.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      rM.ORDER_INDEPENDENT_TRANSPARENCY = MM.useOrderIndependentTransparency && iM, rM.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !MM.ph().getCaps().textureFloatLinearFiltering, OM === rM.ORDER_INDEPENDENT_TRANSPARENCY && SM === rM.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || rM.markAsUnprocessed()
    }

    function FM(MM, rM, iM) {
      const OM = rM.PREPASS;
      if (!rM._arePrePassDirty) return;
      const SM = [{
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
      if (MM.prePassRenderer && MM.prePassRenderer.enabled && iM) {
        rM.PREPASS = !0, rM.SCENE_MRT_COUNT = MM.prePassRenderer.mrtCount, rM.PREPASS_NORMAL_WORLDSPACE = MM.prePassRenderer.generateNormalsInWorldSpace, rM.PREPASS_COLOR = !0, rM.PREPASS_COLOR_INDEX = 0;
        for (let iM = 0; iM < SM.length; iM++) {
          const OM = MM.prePassRenderer.getIndex(SM[iM].type); - 1 !== OM ? (rM[SM[iM].define] = !0, rM[SM[iM].index] = OM) : rM[SM[iM].define] = !1
        }
      } else {
        rM.PREPASS = !1;
        for (let MM = 0; MM < SM.length; MM++) rM[SM[MM].define] = !1
      }
      rM.PREPASS != OM && (rM.markAsUnprocessed(), rM.markAsImageProcessingDirty())
    }

    function BM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        QM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      SM && SM.push("Light" + MM), jM || (rM.push("vLightData" + MM, "vLightDiffuse" + MM, "vLightSpecular" + MM, "vLightDirection" + MM, "vLightWidth" + MM, "vLightHeight" + MM, "vLightFalloff" + MM, "vLightGround" + MM, "vSliceData" + MM, "vSliceRanges" + MM, "lightMatrix" + MM, "shadowsInfo" + MM, "depthValues" + MM), iM.push("shadowTexture" + MM), iM.push("depthTexture" + MM), rM.push("viewFrustumZ" + MM, "cascadeBlendFactor" + MM, "lightSizeUVCorrection" + MM, "depthCorrection" + MM, "penumbraDarkness" + MM, "frustumLengths" + MM), OM && (iM.push("projectionLightTexture" + MM), rM.push("textureProjectionMatrix" + MM)), aM && iM.push("iesLightTexture" + MM), nM && iM.push("rectAreaLightEmissionTexture" + MM), PM && (iM.push("lightDataTexture" + MM), QM || iM.push("tileMaskTexture" + MM)))
    }

    function XM(MM, rM, iM) {
      const OM = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      iM && OM.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), MM.push(...OM);
      rM.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function IM(MM, rM, iM) {
      let OM, SM, jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        aM = null;
      if (MM.uniformsNames) {
        const PM = MM;
        OM = PM.uniformsNames, SM = PM.uniformBuffersNames, rM = PM.samplers, iM = PM.defines, jM = PM.maxSimultaneousLights || 0, aM = PM.shaderLanguage ?? null
      } else OM = MM, rM || (rM = []);
      for (let PM = 0; PM < jM && iM["LIGHT" + PM]; PM++) BM(PM, OM, rM, iM["PROJECTEDLIGHTTEXTURE" + PM], SM, !1, iM["IESLIGHTTEXTURE" + PM], iM["CLUSTLIGHT" + PM], iM["RECTAREALIGHTEMISSIONTEXTURE" + PM], 1 === aM);
      iM.NUM_MORPH_INFLUENCERS && (OM.push("morphTargetInfluences"), OM.push("morphTargetCount")), iM.BAKED_VERTEX_ANIMATION_TEXTURE && (OM.push("bakedVertexAnimationSettings"), OM.push("bakedVertexAnimationTextureSizeInverted"), OM.push("bakedVertexAnimationTime"), rM.push("bakedVertexAnimationTexture"))
    }

    function KM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      MM.addUniform("vReflectionInfos", 2), MM.addUniform("reflectionMatrix", 16), rM && MM.addUniform("vReflectionMicrosurfaceInfos", 3), iM && (MM.addUniform("vReflectionPosition", 3), MM.addUniform("vReflectionSize", 3)), OM && (MM.addUniform("vReflectionFilteringInfo", 2), MM.addUniform("vReflectionDominantDirection", 3)), jM && MM.addUniform("vReflectionColor", 3), SM && (MM.addUniform("vSphericalL00", 3), MM.addUniform("vSphericalL1_1", 3), MM.addUniform("vSphericalL10", 3), MM.addUniform("vSphericalL11", 3), MM.addUniform("vSphericalL2_2", 3), MM.addUniform("vSphericalL2_1", 3), MM.addUniform("vSphericalL20", 3), MM.addUniform("vSphericalL21", 3), MM.addUniform("vSphericalL22", 3), MM.addUniform("vSphericalX", 3), MM.addUniform("vSphericalY", 3), MM.addUniform("vSphericalZ", 3), MM.addUniform("vSphericalXX_ZZ", 3), MM.addUniform("vSphericalYY_ZZ", 3), MM.addUniform("vSphericalZZ", 3), MM.addUniform("vSphericalXY", 3), MM.addUniform("vSphericalYZ", 3), MM.addUniform("vSphericalZX", 3))
    }
  },
  41442: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(38040),
      SM = iM(41397);
    class jM extends SM.c {
      constructor(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(MM, rM, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new OM.d, this._storeEffectOnSubMeshes = iM
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(MM, rM) {
        return !!MM && (!this._storeEffectOnSubMeshes || (!MM.iG || 0 === MM.iG.length || this.isReadyForSubMesh(MM, MM.iG[0], rM)))
      }
      _isReadyForSubMesh(MM) {
        const rM = MM.materialDefines;
        return !(this.checkReadyOnEveryCall || !MM.effect || !rM || rM._renderId !== this.Hk().getRenderId())
      }
      bindOnlyWorldMatrix(MM) {
        this._activeEffect.setMatrix("world", MM)
      }
      bindOnlyNormalMatrix(MM) {
        this._activeEffect.setMatrix("normalMatrix", MM)
      }
      bind(MM, rM) {
        rM && this.bindForSubMesh(MM, rM, rM.iG[0])
      }
      _afterBind(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(MM, rM, iM), this.Hk()._cachedEffect = rM, iM ? iM._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return iM._drawWrapper._forceRebindOnNextCall || MM.isCachedMaterialInvalid(this, rM, OM)
      }
      dispose(MM, rM, iM) {
        this._activeEffect = void 0, super.dispose(MM, rM, iM)
      }
    }
  },
  41469: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => SM
    });
    const OM = new WeakMap;

    function SM(MM) {
      const rM = MM.getVertexBuffers();
      if (!rM) return null;
      let iM = OM.get(MM);
      if (iM) {
        let MM = !1;
        for (const OM in rM)
          if (!iM.has(OM)) {
            MM = !0;
            break
          } if (!MM) return iM
      } else iM = new Map, OM.set(MM, iM);
      for (const OM in rM) {
        const MM = rM[OM];
        if (MM) {
          const rM = MM.byteOffset,
            SM = MM.byteStride,
            jM = MM.type,
            aM = MM.normalized;
          iM.set(OM, {
            offset: rM,
            stride: SM,
            type: jM,
            normalized: aM
          })
        }
      }
      return iM
    }

    function jM(MM, rM) {
      rM.forEach(((rM, iM) => {
        const OM = `vp_${iM}_info`;
        MM.setFloat4(OM, rM.offset, rM.stride, rM.type, rM.normalized ? 1 : 0)
      }))
    }
  },
  41416: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      d: () => nM
    });
    var OM = iM(41099),
      SM = iM(38040),
      jM = iM(41105);
    let aM = (() => {
      var MM;
      let rM, iM, SM = [];
      return MM = class {
        static extractMinAndMaxIndexed(MM, rM, iM, OM, SM, jM) {
          for (let aM = iM; aM < iM + OM; aM++) {
            const iM = 3 * rM[aM],
              OM = MM[iM],
              PM = MM[iM + 1],
              nM = MM[iM + 2];
            SM.minimizeInPlaceFromFloats(OM, PM, nM), jM.maximizeInPlaceFromFloats(OM, PM, nM)
          }
        }
        static extractMinAndMax(MM, rM, iM, OM, SM, jM) {
          for (let aM = rM, PM = rM * OM; aM < rM + iM; aM++, PM += OM) {
            const rM = MM[PM],
              iM = MM[PM + 1],
              OM = MM[PM + 2];
            SM.minimizeInPlaceFromFloats(rM, iM, OM), jM.maximizeInPlaceFromFloats(rM, iM, OM)
          }
        }
      }, (() => {
        const aM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [jM.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], iM = [jM.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, OM.i)(MM, null, rM, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: MM => "extractMinAndMaxIndexed" in MM,
            get: MM => MM.extractMinAndMaxIndexed
          },
          metadata: aM
        }, null, SM), (0, OM.i)(MM, null, iM, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: MM => "extractMinAndMax" in MM,
            get: MM => MM.extractMinAndMax
          },
          metadata: aM
        }, null, SM), aM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aM
        }), (0, OM.m)(MM, SM)
      })(), MM
    })();

    function PM(MM, rM, iM, OM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const PM = new SM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        nM = new SM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return aM.extractMinAndMaxIndexed(MM, rM, iM, OM, PM, nM), jM && (PM.x -= PM.x * jM.x + jM.y, PM.y -= PM.y * jM.x + jM.y, PM.z -= PM.z * jM.x + jM.y, nM.x += nM.x * jM.x + jM.y, nM.y += nM.y * jM.x + jM.y, nM.z += nM.z * jM.x + jM.y), {
        minimum: PM,
        maximum: nM
      }
    }

    function nM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        jM = arguments.length > 4 ? arguments[4] : void 0;
      const PM = new SM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        nM = new SM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return jM || (jM = 3), aM.extractMinAndMax(MM, rM, iM, jM, PM, nM), OM && (PM.x -= PM.x * OM.x + OM.y, PM.y -= PM.y * OM.x + OM.y, PM.z -= PM.z * OM.x + OM.y, nM.x += nM.x * OM.x + OM.y, nM.y += nM.y * OM.x + OM.y, nM.z += nM.z * OM.x + OM.y), {
        minimum: PM,
        maximum: nM
      }
    }
  },
  41400: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => zM
    });
    var OM, SM = iM(41250),
      jM = iM(41408),
      aM = iM(41410),
      PM = iM(41416),
      nM = iM(41424),
      QM = iM(40990);
    class zM {
      get materialDefines() {
        const MM = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof MM ? null : MM
      }
      set materialDefines(MM) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = MM
      }
      _getDrawWrapper(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        MM = MM ?? this._engine.currentRenderPassId;
        let iM = this._drawWrappers[MM];
        return !iM && rM && (this._drawWrappers[MM] = iM = new nM.c(this._mesh.Hk().ph())), iM
      }
      _removeDrawWrapper(MM) {
        let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[MM]?.dispose(rM), this._drawWrappers[MM] = void 0
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
      _setMainDrawWrapperOverride(MM) {
        this._mainDrawWrapperOverride = MM
      }
      setEffect(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SM = this._drawWrapper;
        SM.setEffect(MM, rM, OM), void 0 !== iM && (SM.materialContext = iM), MM || (SM.defines = null, SM.materialContext = void 0)
      }
      resetDrawCache(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== MM) return void this._removeDrawWrapper(MM, !0, rM);
          for (const MM of this._drawWrappers) MM?.dispose(rM)
        }
        this._drawWrappers = []
      }
      static AddToMesh(MM, rM, iM, OM, SM, jM, aM) {
        return new zM(MM, rM, iM, OM, SM, jM, aM, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(MM, rM, iM, OM, SM, jM, aM) {
        let PM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          nM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = MM, this.verticesStart = rM, this.verticesCount = iM, this.indexStart = OM, this.indexCount = SM, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = jM, this._renderingMesh = aM || jM, nM && jM.iG.push(this), this._engine = this._mesh.Hk().ph(), this.resetDrawCache(), this._trianglePlanes = [], this._id = jM.iG.length - 1, PM && (this.refreshBoundingInfo(), jM.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      aY() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.aY() : this._boundingInfo
      }
      setBoundingInfo(MM) {
        return this._boundingInfo = MM, this
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
        const MM = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return MM || this._renderingMesh
      }
      Zh() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const rM = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!rM) return MM && this._mesh.Hk()._hasDefaultMaterial ? this._mesh.Hk().defaultMaterial : null;
        if (this._isMultiMaterial(rM)) {
          const MM = rM.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== MM && (this._currentMaterial = MM, this.resetDrawCache()), MM
        }
        return rM
      }
      _isMultiMaterial(MM) {
        return void 0 !== MM.getSubMaterial
      }
      refreshBoundingInfo() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (MM || (MM = this._renderingMesh.getVerticesData(SM.j.PositionKind)), !MM) return this._boundingInfo = this._mesh.aY(), this;
        const rM = this._renderingMesh.hOM();
        let iM;
        if (0 === this.indexStart && this.indexCount === rM.length) {
          const MM = this._renderingMesh.aY();
          iM = {
            minimum: MM.minimum.clone(),
            maximum: MM.maximum.clone()
          }
        } else iM = (0, PM.c)(MM, rM, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(iM.minimum, iM.maximum) : this._boundingInfo = new aM.d(iM.minimum, iM.maximum), this
      }
      _checkCollision(MM) {
        return this.aY()._checkCollision(MM)
      }
      updateBoundingInfo(MM) {
        let rM = this.aY();
        return rM || (this.refreshBoundingInfo(), rM = this.aY()), rM && rM.update(MM), this
      }
      isInFrustum(MM) {
        const rM = this.aY();
        return !!rM && rM.isInFrustum(MM, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(MM) {
        const rM = this.aY();
        return !!rM && rM.isCompletelyInFrustum(MM)
      }
      render(MM) {
        return this._renderingMesh.render(this, MM, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(MM, rM) {
        if (!this._linesIndexBuffer) {
          const iM = 6 * Math.floor(this.indexCount / 3),
            OM = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(iM) : new Uint16Array(iM);
          let SM = 0;
          if (0 === MM.length)
            for (let MM = this.indexStart; MM < this.indexStart + this.indexCount; MM += 3) OM[SM++] = MM, OM[SM++] = MM + 1, OM[SM++] = MM + 1, OM[SM++] = MM + 2, OM[SM++] = MM + 2, OM[SM++] = MM;
          else
            for (let rM = this.indexStart; rM < this.indexStart + this.indexCount; rM += 3) OM[SM++] = MM[rM], OM[SM++] = MM[rM + 1], OM[SM++] = MM[rM + 1], OM[SM++] = MM[rM + 2], OM[SM++] = MM[rM + 2], OM[SM++] = MM[rM];
          this._linesIndexBuffer = rM.createIndexBuffer(OM), this._linesIndexCount = OM.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(MM) {
        const rM = this.aY();
        return !!rM && MM.intersectsBox(rM.boundingBox)
      }
      intersects(MM, rM, iM, OM, SM) {
        const jM = this.Zh();
        if (!jM) return null;
        let aM = 3,
          PM = !1;
        switch (jM.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            aM = 1, PM = !0
        }
        return 4 === jM.fillMode ? iM.length ? this._intersectLines(MM, rM, iM, this._mesh.intersectionThreshold, OM) : this._intersectUnIndexedLines(MM, rM, iM, this._mesh.intersectionThreshold, OM) : !iM.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(MM, rM, iM, OM, SM) : this._intersectTriangles(MM, rM, iM, aM, PM, OM, SM)
      }
      _intersectLines(MM, rM, iM, OM, SM) {
        let aM = null;
        for (let PM = this.indexStart; PM < this.indexStart + this.indexCount; PM += 2) {
          const nM = rM[iM[PM]],
            QM = rM[iM[PM + 1]],
            zM = MM.intersectionSegment(nM, QM, OM);
          if (!(zM < 0) && ((SM || !aM || zM < aM.distance) && (aM = new jM.c(null, null, zM), aM.faceId = PM / 2, SM))) break
        }
        return aM
      }
      _intersectUnIndexedLines(MM, rM, iM, OM, SM) {
        let aM = null;
        for (let PM = this.verticesStart; PM < this.verticesStart + this.verticesCount; PM += 2) {
          const iM = rM[PM],
            nM = rM[PM + 1],
            QM = MM.intersectionSegment(iM, nM, OM);
          if (!(QM < 0) && ((SM || !aM || QM < aM.distance) && (aM = new jM.c(null, null, QM), aM.faceId = PM / 2, SM))) break
        }
        return aM
      }
      _intersectTriangles(MM, rM, iM, OM, SM, jM, aM) {
        let PM = null,
          nM = -1;
        for (let QM = this.indexStart; QM < this.indexStart + this.indexCount - (3 - OM); QM += OM) {
          nM++;
          const OM = iM[QM],
            zM = iM[QM + 1],
            LM = iM[QM + 2];
          if (SM && 4294967295 === LM) {
            QM += 2;
            continue
          }
          const mM = rM[OM],
            HM = rM[zM],
            hM = rM[LM];
          if (!mM || !HM || !hM) continue;
          if (aM && !aM(mM, HM, hM, MM, OM, zM, LM)) continue;
          const JM = MM.intersectsTriangle(mM, HM, hM);
          if (JM) {
            if (JM.distance < 0) continue;
            if ((jM || !PM || JM.distance < PM.distance) && (PM = JM, PM.faceId = nM, jM)) break
          }
        }
        return PM
      }
      _intersectUnIndexedTriangles(MM, rM, iM, OM, SM) {
        let jM = null;
        for (let aM = this.verticesStart; aM < this.verticesStart + this.verticesCount; aM += 3) {
          const iM = rM[aM],
            PM = rM[aM + 1],
            nM = rM[aM + 2];
          if (SM && !SM(iM, PM, nM, MM, -1, -1, -1)) continue;
          const QM = MM.intersectsTriangle(iM, PM, nM);
          if (QM) {
            if (QM.distance < 0) continue;
            if ((OM || !jM || QM.distance < jM.distance) && (jM = QM, jM.faceId = aM / 3, OM)) break
          }
        }
        return jM
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(MM, rM) {
        const iM = new zM(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, MM, rM, !1);
        if (!this.IsGlobal) {
          const MM = this.aY();
          if (!MM) return iM;
          iM._boundingInfo = new aM.d(MM.minimum, MM.maximum)
        }
        return iM
      }
      dispose() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Hk().ph()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const rM = this._mesh.iG.indexOf(this);
        this._mesh.iG.splice(rM, 1), this.resetDrawCache(void 0, MM)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(MM, rM, iM, OM, SM) {
        let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = Number.MAX_VALUE,
          PM = -Number.MAX_VALUE;
        const nM = (SM || OM).hOM();
        for (let QM = rM; QM < rM + iM; QM++) {
          const MM = nM[QM];
          MM < aM && (aM = MM), MM > PM && (PM = MM)
        }
        return new zM(MM, aM, PM - aM + 1, rM, iM, OM, SM, jM)
      }
    }(OM = zM.prototype).projectToRef ?? (OM.projectToRef = (0, QM.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);