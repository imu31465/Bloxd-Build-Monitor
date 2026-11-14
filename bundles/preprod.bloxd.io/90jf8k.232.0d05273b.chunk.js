export const id = 232;
export const ids = [232];
export const modules = {
  38278: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    class CF {
      constructor(FF, WF, SF) {
        this.bu = FF, this.bv = WF, this.distance = SF, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  38286: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(35631),
      AF = SF(35623),
      uF = SF(35625);
    class hF {
      constructor(FF, WF, SF) {
        this.vectors = (0, CF.e)(8, AF.r.Zero), this.center = AF.r.Zero(), this.centerWorld = AF.r.Zero(), this.extendSize = AF.r.Zero(), this.extendSizeWorld = AF.r.Zero(), this.directions = (0, CF.e)(3, AF.r.Zero), this.vectorsWorld = (0, CF.e)(8, AF.r.Zero), this.minimumWorld = AF.r.Zero(), this.maximumWorld = AF.r.Zero(), this.minimum = AF.r.Zero(), this.maximum = AF.r.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(FF, WF, SF)
      }
      reConstruct(FF, WF, SF) {
        const CF = FF.x,
          uF = FF.y,
          hF = FF.z,
          bW = WF.x,
          dF = WF.y,
          PF = WF.z,
          RF = this.vectors;
        this.minimum.FhF(CF, uF, hF), this.maximum.FhF(bW, dF, PF), RF[0].FhF(CF, uF, hF), RF[1].FhF(bW, dF, PF), RF[2].FhF(bW, uF, hF), RF[3].FhF(CF, dF, hF), RF[4].FhF(CF, uF, PF), RF[5].FhF(bW, dF, hF), RF[6].FhF(CF, dF, PF), RF[7].FhF(bW, uF, PF), WF.addToRef(FF, this.center).scaleInPlace(.5), WF.subtractToRef(FF, this.extendSize).scaleInPlace(.5), this._worldMatrix = SF || AF.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(FF) {
        const WF = hF._TmpVector3,
          SF = this.maximum.subtractToRef(this.minimum, WF[0]),
          CF = SF.length();
        SF.normalizeFromLength(CF);
        const AF = CF * FF,
          uF = SF.scaleInPlace(.5 * AF),
          bW = this.center.subtractToRef(uF, WF[1]),
          dF = this.center.addToRef(uF, WF[2]);
        return this.reConstruct(bW, dF, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(FF) {
        const WF = this.minimumWorld,
          SF = this.maximumWorld,
          CF = this.directions,
          uF = this.vectorsWorld,
          hF = this.vectors;
        if (FF.isIdentity()) {
          WF.fdF(this.minimum), SF.fdF(this.maximum);
          for (let FF = 0; FF < 8; ++FF) uF[FF].fdF(hF[FF]);
          this.extendSizeWorld.fdF(this.extendSize), this.centerWorld.fdF(this.center)
        } else {
          WF.DuF(Number.MAX_VALUE), SF.DuF(-Number.MAX_VALUE);
          for (let CF = 0; CF < 8; ++CF) {
            const bW = uF[CF];
            AF.r.TransformCoordinatesToRef(hF[CF], FF, bW), WF.minimizeInPlace(bW), SF.maximizeInPlace(bW)
          }
          SF.subtractToRef(WF, this.extendSizeWorld).scaleInPlace(.5), SF.addToRef(WF, this.centerWorld).scaleInPlace(.5)
        }
        AF.r.FromArrayToRef(FF.m, 0, CF[0]), AF.r.FromArrayToRef(FF.m, 4, CF[1]), AF.r.FromArrayToRef(FF.m, 8, CF[2]), this._worldMatrix = FF
      }
      isInFrustum(FF) {
        return hF.IsInFrustum(this.vectorsWorld, FF)
      }
      isCompletelyInFrustum(FF) {
        return hF.IsCompletelyInFrustum(this.vectorsWorld, FF)
      }
      intersectsPoint(FF) {
        const WF = this.minimumWorld,
          SF = this.maximumWorld,
          CF = WF.x,
          AF = WF.y,
          hF = WF.z,
          bW = SF.x,
          dF = SF.y,
          PF = SF.z,
          RF = FF.x,
          iW = FF.y,
          eF = FF.z,
          EF = -uF.c;
        return !(bW - RF < EF || EF > RF - CF) && (!(dF - iW < EF || EF > iW - AF) && !(PF - eF < EF || EF > eF - hF))
      }
      intersectsSphere(FF) {
        return hF.IntersectsSphere(this.minimumWorld, this.maximumWorld, FF.centerWorld, FF.radiusWorld)
      }
      intersectsMinMax(FF, WF) {
        const SF = this.minimumWorld,
          CF = this.maximumWorld,
          AF = SF.x,
          uF = SF.y,
          hF = SF.z,
          bW = CF.x,
          dF = CF.y,
          PF = CF.z,
          RF = FF.x,
          iW = FF.y,
          eF = FF.z,
          EF = WF.x,
          QF = WF.y,
          rW = WF.z;
        return !(bW < RF || AF > EF) && (!(dF < iW || uF > QF) && !(PF < eF || hF > rW))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(FF, WF) {
        return FF.intersectsMinMax(WF.minimumWorld, WF.maximumWorld)
      }
      static IntersectsSphere(FF, WF, SF, CF) {
        const uF = hF._TmpVector3[0];
        AF.r.ClampToRef(SF, FF, WF, uF);
        return AF.r.DistanceSquared(SF, uF) <= CF * CF
      }
      static IsCompletelyInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; ++SF) {
          const CF = WF[SF];
          for (let WF = 0; WF < 8; ++WF)
            if (CF.dotCoordinate(FF[WF]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; ++SF) {
          let CF = !0;
          const AF = WF[SF];
          for (let WF = 0; WF < 8; ++WF)
            if (AF.dotCoordinate(FF[WF]) >= 0) {
              CF = !1;
              break
            } if (CF) return !1
        }
        return !0
      }
    }
    hF._TmpVector3 = (0, CF.e)(3, AF.r.Zero)
  },
  38281: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => iW
    });
    var CF = SF(35631),
      AF = SF(35623),
      uF = SF(38286);
    class hF {
      constructor(FF, WF, SF) {
        this.center = AF.r.Zero(), this.centerWorld = AF.r.Zero(), this.minimum = AF.r.Zero(), this.maximum = AF.r.Zero(), this.reConstruct(FF, WF, SF)
      }
      reConstruct(FF, WF, SF) {
        this.minimum.fdF(FF), this.maximum.fdF(WF);
        const CF = AF.r.Distance(FF, WF);
        WF.addToRef(FF, this.center).scaleInPlace(.5), this.radius = .5 * CF, this._update(SF || AF.b.IdentityReadOnly)
      }
      scale(FF) {
        const WF = hF._TmpVector3,
          SF = this.maximum.subtractToRef(this.minimum, WF[0]),
          CF = SF.length();
        SF.normalizeFromLength(CF);
        const AF = CF * FF,
          uF = SF.scaleInPlace(.5 * AF),
          bW = this.center.subtractToRef(uF, WF[1]),
          dF = this.center.addToRef(uF, WF[2]);
        return this.reConstruct(bW, dF, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(FF) {
        if (FF.isIdentity()) this.centerWorld.fdF(this.center), this.radiusWorld = this.radius;
        else {
          AF.r.TransformCoordinatesToRef(this.center, FF, this.centerWorld);
          const WF = hF._TmpVector3[0];
          AF.r.TransformNormalFromFloatsToRef(1, 1, 1, FF, WF), this.radiusWorld = Math.max(Math.abs(WF.x), Math.abs(WF.y), Math.abs(WF.z)) * this.radius
        }
      }
      isInFrustum(FF) {
        const WF = this.centerWorld,
          SF = this.radiusWorld;
        for (let CF = 0; CF < 6; CF++)
          if (FF[CF].dotCoordinate(WF) <= -SF) return !1;
        return !0
      }
      isCenterInFrustum(FF) {
        const WF = this.centerWorld;
        for (let SF = 0; SF < 6; SF++)
          if (FF[SF].dotCoordinate(WF) < 0) return !1;
        return !0
      }
      intersectsPoint(FF) {
        const WF = AF.r.DistanceSquared(this.centerWorld, FF);
        return !(this.radiusWorld * this.radiusWorld < WF)
      }
      static Intersects(FF, WF) {
        const SF = AF.r.DistanceSquared(FF.centerWorld, WF.centerWorld),
          CF = FF.radiusWorld + WF.radiusWorld;
        return !(CF * CF < SF)
      }
      static CreateFromCenterAndRadius(FF, WF, SF) {
        this._TmpVector3[0].fdF(FF), this._TmpVector3[1].FhF(0, 0, WF), this._TmpVector3[2].fdF(FF), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].IPF(this._TmpVector3[1]);
        const CF = new hF(this._TmpVector3[0], this._TmpVector3[2]);
        return CF._worldMatrix = SF || AF.b.Identity(), CF
      }
    }
    hF._TmpVector3 = (0, CF.e)(3, AF.r.Zero);
    const bW = {
        min: 0,
        max: 0
      },
      dF = {
        min: 0,
        max: 0
      },
      PF = (FF, WF, SF) => {
        const CF = AF.r.Dot(WF.centerWorld, FF),
          uF = Math.abs(AF.r.Dot(WF.directions[0], FF)) * WF.extendSize.x + Math.abs(AF.r.Dot(WF.directions[1], FF)) * WF.extendSize.y + Math.abs(AF.r.Dot(WF.directions[2], FF)) * WF.extendSize.z;
        SF.min = CF - uF, SF.max = CF + uF
      },
      RF = (FF, WF, SF) => (PF(FF, WF, bW), PF(FF, SF, dF), !(bW.min > dF.max || dF.min > bW.max));
    class iW {
      constructor(FF, WF, SF) {
        this._isLocked = !1, this.boundingBox = new uF.e(FF, WF, SF), this.nPF = new hF(FF, WF, SF)
      }
      reConstruct(FF, WF, SF) {
        this.boundingBox.reConstruct(FF, WF, SF), this.nPF.reConstruct(FF, WF, SF)
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
      set isLocked(FF) {
        this._isLocked = FF
      }
      update(FF) {
        this._isLocked || (this.boundingBox._update(FF), this.nPF._update(FF))
      }
      centerOn(FF, WF) {
        const SF = iW._TmpVector3[0].fdF(FF).IPF(WF),
          CF = iW._TmpVector3[1].fdF(FF).addInPlace(WF);
        return this.boundingBox.reConstruct(SF, CF, this.boundingBox.getWorldMatrix()), this.nPF.reConstruct(SF, CF, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(FF) {
        const WF = AF.r.Minimize(this.minimum, FF),
          SF = AF.r.Maximize(this.maximum, FF);
        return this.reConstruct(WF, SF, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(FF) {
        const WF = AF.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(WF);
        const SF = AF.j.HC[0];
        return AF.r.TransformCoordinatesToRef(FF.boundingBox.minimumWorld, WF, SF), this.encapsulate(SF), AF.r.TransformCoordinatesToRef(FF.boundingBox.maximumWorld, WF, SF), this.encapsulate(SF), this
      }
      scale(FF) {
        return this.boundingBox.scale(FF), this.nPF.scale(FF), this
      }
      isInFrustum(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === WF || 3 === WF) && this.nPF.isCenterInFrustum(FF)) return !0;
        if (!this.nPF.isInFrustum(FF)) return !1;
        return !(1 !== WF && 3 !== WF) || this.boundingBox.isInFrustum(FF)
      }
      get diagonalLength() {
        const FF = this.boundingBox;
        return FF.maximumWorld.subtractToRef(FF.minimumWorld, iW._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(FF) {
        return this.boundingBox.isCompletelyInFrustum(FF)
      }
      _checkCollision(FF) {
        return FF._canDoCollision(this.nPF.centerWorld, this.nPF.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(FF) {
        return !!this.nPF.centerWorld && (!!this.nPF.intersectsPoint(FF) && !!this.boundingBox.intersectsPoint(FF))
      }
      intersects(FF, WF) {
        if (!hF.Intersects(this.nPF, FF.nPF)) return !1;
        if (!uF.e.Intersects(this.boundingBox, FF.boundingBox)) return !1;
        if (!WF) return !0;
        const SF = this.boundingBox,
          CF = FF.boundingBox;
        return !!RF(SF.directions[0], SF, CF) && (!!RF(SF.directions[1], SF, CF) && (!!RF(SF.directions[2], SF, CF) && (!!RF(CF.directions[0], SF, CF) && (!!RF(CF.directions[1], SF, CF) && (!!RF(CF.directions[2], SF, CF) && (!!RF(AF.r.Cross(SF.directions[0], CF.directions[0]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[0], CF.directions[1]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[0], CF.directions[2]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[1], CF.directions[0]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[1], CF.directions[1]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[1], CF.directions[2]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[2], CF.directions[0]), SF, CF) && (!!RF(AF.r.Cross(SF.directions[2], CF.directions[1]), SF, CF) && !!RF(AF.r.Cross(SF.directions[2], CF.directions[2]), SF, CF))))))))))))))
      }
    }
    iW._TmpVector3 = (0, CF.e)(2, AF.r.Zero)
  },
  38312: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      h: () => dF,
      l: () => bW,
      o: () => hF
    });
    var CF = SF(38116),
      AF = SF(35623);

    function uF(FF) {
      -1 === FF.indexOf("vClipPlane") && FF.push("vClipPlane"), -1 === FF.indexOf("vClipPlane2") && FF.push("vClipPlane2"), -1 === FF.indexOf("vClipPlane3") && FF.push("vClipPlane3"), -1 === FF.indexOf("vClipPlane4") && FF.push("vClipPlane4"), -1 === FF.indexOf("vClipPlane5") && FF.push("vClipPlane5"), -1 === FF.indexOf("vClipPlane6") && FF.push("vClipPlane6")
    }

    function hF(FF, WF, SF) {
      const CF = !!(FF.clipPlane ?? WF.clipPlane),
        AF = !!(FF.clipPlane2 ?? WF.clipPlane2),
        uF = !!(FF.clipPlane3 ?? WF.clipPlane3),
        hF = !!(FF.clipPlane4 ?? WF.clipPlane4),
        bW = !!(FF.clipPlane5 ?? WF.clipPlane5),
        dF = !!(FF.clipPlane6 ?? WF.clipPlane6);
      CF && SF.push("#define CLIPPLANE"), AF && SF.push("#define CLIPPLANE2"), uF && SF.push("#define CLIPPLANE3"), hF && SF.push("#define CLIPPLANE4"), bW && SF.push("#define CLIPPLANE5"), dF && SF.push("#define CLIPPLANE6")
    }

    function bW(FF, WF, SF) {
      let CF = !1;
      const AF = !!(FF.clipPlane ?? WF.clipPlane),
        uF = !!(FF.clipPlane2 ?? WF.clipPlane2),
        hF = !!(FF.clipPlane3 ?? WF.clipPlane3),
        bW = !!(FF.clipPlane4 ?? WF.clipPlane4),
        dF = !!(FF.clipPlane5 ?? WF.clipPlane5),
        PF = !!(FF.clipPlane6 ?? WF.clipPlane6);
      return SF.CLIPPLANE !== AF && (SF.CLIPPLANE = AF, CF = !0), SF.CLIPPLANE2 !== uF && (SF.CLIPPLANE2 = uF, CF = !0), SF.CLIPPLANE3 !== hF && (SF.CLIPPLANE3 = hF, CF = !0), SF.CLIPPLANE4 !== bW && (SF.CLIPPLANE4 = bW, CF = !0), SF.CLIPPLANE5 !== dF && (SF.CLIPPLANE5 = dF, CF = !0), SF.CLIPPLANE6 !== PF && (SF.CLIPPLANE6 = PF, CF = !0), CF
    }

    function dF(FF, WF, SF) {
      let CF = WF.clipPlane ?? SF.clipPlane;
      PF(FF, "vClipPlane", CF), CF = WF.clipPlane2 ?? SF.clipPlane2, PF(FF, "vClipPlane2", CF), CF = WF.clipPlane3 ?? SF.clipPlane3, PF(FF, "vClipPlane3", CF), CF = WF.clipPlane4 ?? SF.clipPlane4, PF(FF, "vClipPlane4", CF), CF = WF.clipPlane5 ?? SF.clipPlane5, PF(FF, "vClipPlane5", CF), CF = WF.clipPlane6 ?? SF.clipPlane6, PF(FF, "vClipPlane6", CF)
    }

    function PF(FF, WF, SF) {
      if (SF) {
        const uF = CF.e.OWF()?.floatingOriginOffset || AF.r.ZeroReadOnly;
        FF.setFloat4(WF, SF.normal.x, SF.normal.y, SF.normal.z, SF.d + AF.r.Dot(SF.normal, uF))
      }
    }
  },
  38323: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(FF, WF) {
        this._defines[FF] || (FF < this._currentRank && (this._currentRank = FF), FF > this._maxRank && (this._maxRank = FF), this._defines[FF] = new Array), this._defines[FF].push(WF)
      }
      addCPUSkinningFallback(FF, WF) {
        this._mesh = WF, FF < this._currentRank && (this._currentRank = FF), FF > this._maxRank && (this._maxRank = FF)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(FF, WF) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, FF = FF.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), WF._bonesComputationForcedToCPU = !0;
          const SF = this._mesh.OWF();
          for (let FF = 0; FF < SF.meshes.length; FF++) {
            const CF = SF.meshes[FF];
            if (CF.material) {
              if (CF.computeBonesUsingShaders && 0 !== CF.numBoneInfluencers)
                if (CF.material.getEffect() === WF) CF.computeBonesUsingShaders = !1;
                else if (CF.Om)
                for (const FF of CF.Om) {
                  if (FF.effect === WF) {
                    CF.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && CF.computeBonesUsingShaders && CF.numBoneInfluencers > 0 && (CF.computeBonesUsingShaders = !1)
          }
        } else {
          const WF = this._defines[this._currentRank];
          if (WF)
            for (let SF = 0; SF < WF.length; SF++) FF = FF.replace("#define " + WF[SF], "");
          this._currentRank++
        }
        return FF
      }
    }
  },
  38267: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => TF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(38065),
      hF = SF(35647),
      bW = SF(35639),
      dF = SF(38269),
      PF = SF(38098),
      RF = SF(37076),
      iW = SF(36181),
      eF = SF(38301),
      EF = SF(37994);
    let QF = (() => {
      var FF;
      let WF, SF, uF, hF, bW, dF, PF, RF, iW, eF, QF, rW, gW = [];
      return FF = class {
        constructor() {
          this._func = (0, CF.k)(this, gW), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(FF) {
          this._func = FF
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(FF) {
          this._backFunc = FF
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(FF) {
          this._funcRef = FF
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(FF) {
          this._funcMask = FF
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(FF) {
          this._opStencilFail = FF
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(FF) {
          this._opDepthFail = FF
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(FF) {
          this._opStencilDepthPass = FF
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(FF) {
          this._backOpStencilFail = FF
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(FF) {
          this._backOpDepthFail = FF
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(FF) {
          this._backOpStencilDepthPass = FF
        }
        get mask() {
          return this._mask
        }
        set mask(FF) {
          this._mask = FF
        }
        get enabled() {
          return this._enabled
        }
        set enabled(FF) {
          this._enabled = FF
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(FF) {
          EF.e.Clone((() => FF), this)
        }
        serialize() {
          return EF.e.Serialize(this)
        }
        parse(FF, WF, SF) {
          EF.e.Parse((() => this), FF, WF, SF)
        }
      }, (() => {
        const EF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], hF = [(0, AF.H)()], bW = [(0, AF.H)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], RF = [(0, AF.H)()], iW = [(0, AF.H)()], eF = [(0, AF.H)()], QF = [(0, AF.H)()], rW = [(0, AF.H)()], (0, CF.j)(FF, null, WF, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: FF => "func" in FF,
            get: FF => FF.func
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, SF, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: FF => "backFunc" in FF,
            get: FF => FF.backFunc
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, uF, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: FF => "funcRef" in FF,
            get: FF => FF.funcRef
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, hF, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: FF => "funcMask" in FF,
            get: FF => FF.funcMask
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, bW, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: FF => "opStencilFail" in FF,
            get: FF => FF.opStencilFail
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, dF, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: FF => "opDepthFail" in FF,
            get: FF => FF.opDepthFail
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, PF, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: FF => "opStencilDepthPass" in FF,
            get: FF => FF.opStencilDepthPass
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, RF, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: FF => "backOpStencilFail" in FF,
            get: FF => FF.backOpStencilFail
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, iW, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: FF => "backOpDepthFail" in FF,
            get: FF => FF.backOpDepthFail
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, eF, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: FF => "backOpStencilDepthPass" in FF,
            get: FF => FF.backOpStencilDepthPass
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, QF, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: FF => "mask" in FF,
            get: FF => FF.mask
          },
          metadata: EF
        }, null, gW), (0, CF.j)(FF, null, rW, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "enabled" in FF,
            get: FF => FF.enabled
          },
          metadata: EF
        }, null, gW), EF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EF
        })
      })(), FF
    })();
    var rW = SF(38303),
      gW = SF(37886),
      tW = SF(37855);
    let TF = (() => {
      var FF;
      let WF, SF, tW, TF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF, oF, YF, MF, cW, GF, zW, IF, fF, yW, sF, nF, HF, KF, wF, XF = [],
        UF = [],
        BF = [],
        jW = [],
        vW = [],
        JF = [],
        pF = [],
        lF = [],
        FW = [],
        WW = [],
        SW = [],
        CW = [],
        AW = [],
        uW = [],
        hW = [],
        bS = [],
        dW = [],
        PW = [],
        RW = [],
        iS = [],
        eW = [],
        EW = [],
        QW = [],
        rS = [],
        gS = [],
        tS = [],
        TW = [],
        aS = [],
        kS = [],
        qS = [],
        VW = [],
        NW = [],
        DW = [],
        LW = [],
        mS = [],
        OW = [],
        xS = [],
        ZW = [],
        oW = [],
        YW = [],
        MW = [],
        cS = [],
        GW = [],
        zS = [],
        IW = [],
        fW = [],
        yS = [],
        sW = [],
        nW = [],
        HW = [],
        KW = [];
      return FF = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(WF) {
          this._useVertexPulling !== WF && (this._useVertexPulling = WF, this.XbF(FF.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(FF) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(WF) {
          if (this._alpha === WF) return;
          const SF = this._alpha;
          this._alpha = WF, 1 !== SF && 1 !== WF || this.XbF(FF.MiscDirtyFlag + FF.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(WF) {
          this._backFaceCulling !== WF && (this._backFaceCulling = WF, this.XbF(FF.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(WF) {
          const SF = Math.max(0, Math.min(0 | WF, 4));
          this._textureRepetitionMode !== SF && (this._textureRepetitionMode = SF, this.XbF(FF.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(WF) {
          this._cullBackFaces !== WF && (this._cullBackFaces = WF, this.XbF(FF.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(FF) {
          this._blockDirtyMechanism !== FF && (this._blockDirtyMechanism = FF, FF || this.markDirty())
        }
        atomicMaterialsUpdate(FF) {
          this.blockDirtyMechanism = !0;
          try {
            FF(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(FF) {
          this._onDisposeObserver && this.xSF.remove(this._onDisposeObserver), this._onDisposeObserver = this.xSF.add(FF)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new hF.b), this._onBindObservable
        }
        set onBind(FF) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(FF)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new hF.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new hF.b), this._onEffectCreatedObservable
        }
        set alphaMode(FF) {
          this._alphaMode[0] = FF
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[SF] !== WF && (this._alphaMode[SF] = WF, this.XbF(FF.TextureDirtyFlag))
        }
        set needDepthPrePass(FF) {
          this._needDepthPrePass !== FF && (this._needDepthPrePass = FF, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(WF) {
          this._fogEnabled !== WF && (this._fogEnabled = WF, this.XbF(FF.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case FF.WireFrameFillMode:
            case FF.LineListDrawMode:
            case FF.LineLoopDrawMode:
            case FF.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(WF) {
          this.fillMode = WF ? FF.WireFrameFillMode : FF.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case FF.PointFillMode:
            case FF.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(WF) {
          this.fillMode = WF ? FF.PointFillMode : FF.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(WF) {
          this._fillMode !== WF && (this._fillMode = WF, this.XbF(FF.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(FF) {
          const WF = this.OWF().sC().getCaps().fragmentDepthSupported;
          FF && !WF && RF.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = FF && WF, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(FF) {
          this._isVertexOutputInvariant !== FF && (this._isVertexOutputInvariant = FF, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(FF) {
          this._drawWrapper = FF
        }
        constructor(WF, SF, AF) {
          let dF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, CF.k)(this, XF), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, CF.k)(this, UF, void 0), this.uniqueId = ((0, CF.k)(this, BF), (0, CF.k)(this, jW, void 0)), this._loadedUniqueId = (0, CF.k)(this, vW), this.name = (0, CF.k)(this, JF, void 0), this.metadata = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, null)), this._internalMetadata = (0, CF.k)(this, FW), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, CF.k)(this, WW, !1), this.checkReadyOnlyOnce = ((0, CF.k)(this, SW), (0, CF.k)(this, CW, !1)), this.state = ((0, CF.k)(this, AW), (0, CF.k)(this, uW, "")), this._alpha = ((0, CF.k)(this, hW), (0, CF.k)(this, bS, 1)), this.inspectableCustomProperties = (0, CF.k)(this, dW), this._backFaceCulling = (0, CF.k)(this, PW, !0), this._textureRepetitionMode = ((0, CF.k)(this, RW), (0, CF.k)(this, iS, 0)), this.textureRepetitionHexTilingParams = ((0, CF.k)(this, eW), (0, CF.k)(this, EW, [1, .6, 7, .5])), this._cullBackFaces = ((0, CF.k)(this, QW), (0, CF.k)(this, rS, !0)), this._blockDirtyMechanism = ((0, CF.k)(this, gS), !1), this.sideOrientation = (0, CF.k)(this, tS, null), this.onCompiled = ((0, CF.k)(this, TW), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.xSF = new hF.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, CF.k)(this, aS, [2]), this._needDepthPrePass = ((0, CF.k)(this, kS), (0, CF.k)(this, qS, !1)), this.disableDepthWrite = ((0, CF.k)(this, VW), (0, CF.k)(this, NW, !1)), this.disableColorWrite = ((0, CF.k)(this, DW), (0, CF.k)(this, LW, !1)), this.forceDepthWrite = ((0, CF.k)(this, mS), (0, CF.k)(this, OW, !1)), this.depthFunction = ((0, CF.k)(this, xS), (0, CF.k)(this, ZW, 0)), this.separateCullingPass = ((0, CF.k)(this, oW), (0, CF.k)(this, YW, !1)), this._fogEnabled = ((0, CF.k)(this, MW), (0, CF.k)(this, cS, !0)), this.pointSize = ((0, CF.k)(this, GW), (0, CF.k)(this, zS, 1)), this.zOffset = ((0, CF.k)(this, IW), (0, CF.k)(this, fW, 0)), this.zOffsetUnits = ((0, CF.k)(this, yS), (0, CF.k)(this, sW, 0)), this.clipPlane = (0, CF.k)(this, nW), this.stencil = new QF, this._isVertexOutputInvariant = (0, CF.k)(this, HW, FF.ForceVertexOutputInvariant), this._materialContext = (0, CF.k)(this, KW), this._useUBO = !1, this._fillMode = FF.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = WF;
          const RF = SF || bW.e.LastCreatedScene;
          RF && (this._scene = RF, this._dirtyCallbacks = {}, this._forceGLSL = dF, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = WF || uF.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.sC().createMaterialContext(), this._drawWrapper = new eF.e(this._scene.sC(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new PF.c(this._scene.sC(), void 0, void 0, WF), this._useUBO = this.OWF().sC().supportsUniformBuffers, this._createUniformBuffer(), AF || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), FF.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const FF = this.OWF().sC();
          this._uniformBuffer?.dispose(), FF.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new PF.c(FF, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new PF.c(this._scene.sC(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(FF) {
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
        isReady(FF, WF) {
          return !0
        }
        isReadyForSubMesh(FF, WF, SF) {
          const CF = WF.materialDefines;
          return !!CF && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = CF, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        OWF() {
          return this._scene
        }
        _getEffectiveOrientation(FF) {
          return null !== this.sideOrientation ? this.sideOrientation : FF.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(FF) {
          this._transparencyMode = FF
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === FF.MATERIAL_ALPHABLEND || this._transparencyMode === FF.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === FF.MATERIAL_ALPHATEST || this._transparencyMode === FF.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === FF.MATERIAL_OPAQUE || this._transparencyMode === FF.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(FF) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : FF.visibility < 1 || !this._disableAlphaBlending && (FF.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(FF) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(FF) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const SF = this.OWF().meshes;
          for (const FF of SF)
            if (FF.Om)
              for (const SF of FF.Om)
                if (SF.XC() === this)
                  for (const FF of SF._drawWrappers) FF && this._materialContext === FF.materialContext && (FF._wasPreviouslyReady = !1, FF._wasPreviouslyUsingInstances = null, FF._forceRebindOnNextCall = WF);
          WF && this.XbF(FF.AllDirtyFlag)
        }
        _preBind(WF) {
          let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const CF = this._scene.sC(),
            AF = (null == SF ? this.sideOrientation : SF) === FF.ClockWiseSideOrientation,
            uF = WF || this._getDrawWrapper();
          return (0, gW.e)(uF) && uF.materialContext && (uF.materialContext.useVertexPulling = this.useVertexPulling), CF.enableEffect(uF), CF.setState(this.backFaceCulling, this.zOffset, !1, AF, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), AF
        }
        bind(FF, WF) {}
        buildUniformLayout() {
          const FF = this._uniformBuffer;
          this._eventInfo.ubo = FF, this._callbackPluginEventGeneric(8, this._eventInfo), FF.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(FF, WF, SF) {
          const CF = SF._drawWrapper;
          this._eventInfo.subMesh = SF, this._callbackPluginEventBindForSubMesh(this._eventInfo), CF._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(FF) {}
        bindView(FF) {
          this._useUBO ? this._needToBindSceneUbo = !0 : FF.setMatrix("view", this.OWF().getViewMatrix())
        }
        bindViewProjection(FF) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (FF.setMatrix("viewProjection", this.OWF().getTransformMatrix()), FF.setMatrix("projection", this.OWF().getProjectionMatrix()), FF.setMatrix("inverseProjection", this.OWF().getInverseProjectionMatrix()))
        }
        bindEyePosition(FF, WF) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(FF, WF)
        }
        _afterBind(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && WF && (this._needToBindSceneUbo = !1, (0, rW.w)(WF, this.OWF().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = FF ? FF.visibility : 1, this._onBindObservable && FF && this._onBindObservable.notifyObservers(FF), this.disableDepthWrite) {
            const FF = this._scene.sC();
            this._cachedDepthWriteState = FF.getDepthWrite(), FF.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const FF = this._scene.sC();
            this._cachedColorWriteState = FF.getColorWrite(), FF.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const FF = this._scene.sC();
            this._cachedDepthFunctionState = FF.getDepthFunction() || 0, FF.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.sC().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.sC().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.sC().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(FF) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = FF, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(FF) {
          return null
        }
        _clonePlugins(WF, SF) {
          const CF = {};
          if (this._serializePlugins(CF), FF._ParsePlugins(CF, WF, this._scene, SF), this.pluginManager)
            for (const FF of this.pluginManager._plugins) {
              const SF = WF.pluginManager.getPlugin(FF.name);
              SF && FF.copyTo(SF)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const FF = [];
            for (const WF in this.meshMap) {
              const SF = this.meshMap[WF];
              SF && FF.push(SF)
            }
            return FF
          }
          return this._scene.meshes.filter((FF => FF.material === this))
        }
        forceCompilation(FF, WF, SF, CF) {
          const AF = {
              clipPlane: !1,
              useInstances: !1,
              ...SF
            },
            uF = this.OWF(),
            hF = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const bW = () => {
            if (!this._scene || !this._scene.sC()) return;
            const SF = uF.clipPlane;
            if (AF.clipPlane && (uF.clipPlane = new iW.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let SF = !0,
                uF = null;
              if (FF.Om) {
                const WF = new dF.c(0, 0, 0, 0, 0, FF, void 0, !1, !1);
                WF.materialDefines && (WF.materialDefines._renderId = -1), this.isReadyForSubMesh(FF, WF, AF.useInstances) || (WF.effect && WF.effect.getCompilationError() && WF.effect.allFallbacksProcessed() ? uF = WF.effect.getCompilationError() : (SF = !1, setTimeout(bW, 16)))
              }
              SF && (this.allowShaderHotSwapping = hF, uF && CF && CF(uF), WF && WF(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = hF, WF && WF(this)) : setTimeout(bW, 16);
            AF.clipPlane && (uF.clipPlane = SF)
          };
          bW()
        }
        async forceCompilationAsync(FF, WF) {
          return await new Promise(((SF, CF) => {
            this.forceCompilation(FF, (() => {
              SF()
            }), WF, (FF => {
              CF(FF)
            }))
          }))
        }
        XbF(WF) {
          this.OWF().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (FF._DirtyCallbackArray.length = 0, WF & FF.ImageProcessingDirtyFlag && FF._DirtyCallbackArray.push(FF._ImageProcessingDirtyCallBack), WF & FF.TextureDirtyFlag && FF._DirtyCallbackArray.push(FF._TextureDirtyCallBack), WF & FF.LightDirtyFlag && FF._DirtyCallbackArray.push(FF._LightsDirtyCallBack), WF & FF.FresnelDirtyFlag && FF._DirtyCallbackArray.push(FF._FresnelDirtyCallBack), WF & FF.AttributesDirtyFlag && FF._DirtyCallbackArray.push(FF._AttributeDirtyCallBack), WF & FF.MiscDirtyFlag && FF._DirtyCallbackArray.push(FF._MiscDirtyCallBack), WF & FF.PrePassDirtyFlag && FF._DirtyCallbackArray.push(FF._PrePassDirtyCallBack), FF._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(FF._RunDirtyCallBacks), this.OWF().resetCachedMaterial())
        }
        resetDrawCache() {
          const FF = this.OWF().meshes;
          for (const WF of FF)
            if (WF.Om)
              for (const FF of WF.Om) FF.XC() === this && FF.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(FF) {
          const WF = this.OWF();
          if (WF.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const SF = WF.meshes;
          for (const CF of SF)
            if (CF.Om)
              for (const SF of CF.Om) {
                if ((SF.XC() || (WF._hasDefaultMaterial ? WF.defaultMaterial : null)) === this)
                  for (const WF of SF._drawWrappers) WF && WF.defines && WF.defines.markAllAsDirty && this._materialContext === WF.materialContext && FF(WF.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.OWF().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const FF = this.OWF().enablePrePassRenderer();
          FF && FF.XbF()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(FF._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(FF._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(FF._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(FF._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(FF._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(FF._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(FF._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(FF._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(FF._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(FF._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const FF = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.xSF.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(FF)
            }))
          }
        }
        setPrePassRenderer(FF) {
          return !1
        }
        dispose(FF, WF, SF) {
          const CF = this.OWF();
          if (CF.stopAnimation(this), CF.freeProcessedMaterials(), CF.removeMaterial(this), this._eventInfo.forceDisposeTextures = WF, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const FF = this._parentContainer.materials.indexOf(this);
            FF > -1 && this._parentContainer.materials.splice(FF, 1), this._parentContainer = null
          }
          if (!0 !== SF)
            if (this.meshMap)
              for (const AF in this.meshMap) {
                const FF = this.meshMap[AF];
                this._disposeMeshResources(FF)
              } else {
                const FF = CF.meshes;
                for (const WF of FF) this._disposeMeshResources(WF)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.xSF.notifyObservers(this), this.xSF.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(FF) {
          if (!FF) return;
          const WF = FF.geometry,
            SF = FF._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (FF.Om && SF)
              for (const CF of FF.Om) {
                const FF = CF._drawWrappers;
                for (let AF = 0; AF < FF.length; AF++) {
                  const uF = FF[AF]?.effect;
                  if (!uF) continue;
                  SF[AF] === this && (WF?._releaseVertexArrayObject(uF), CF._removeDrawWrapper(AF, !0, !0))
                }
              }
          } else WF?._releaseVertexArrayObject(this._drawWrapper.effect);
          FF.material !== this || FF.iiF || (FF.material = null)
        }
        serialize() {
          const FF = EF.e.Serialize(this);
          return FF.stencil = this.stencil.serialize(), FF.uniqueId = this.uniqueId, this._serializePlugins(FF), FF
        }
        _serializePlugins(FF) {
          if (FF.plugins = {}, this.pluginManager)
            for (const WF of this.pluginManager._plugins) WF.doNotSerialize || (FF.plugins[WF.getClassName()] = WF.serialize())
        }
        static ParseAlphaMode(FF, WF) {
          void 0 !== FF._alphaMode ? WF._alphaMode = Array.isArray(FF._alphaMode) ? [...FF._alphaMode] : [FF._alphaMode] : void 0 !== FF.alphaMode ? WF._alphaMode = Array.isArray(FF.alphaMode) ? [...FF.alphaMode] : [FF.alphaMode] : WF._alphaMode = [2]
        }
        static Parse(WF, SF, CF) {
          if (WF.customType) {
            if ("BABYLON.PBRMaterial" === WF.customType && WF.overloadedAlbedo && (WF.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return RF.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else WF.customType = "BABYLON.StandardMaterial";
          const AF = uF.h.Instantiate(WF.customType).Parse(WF, SF, CF);
          return AF._loadedUniqueId = WF.uniqueId, FF.ParseAlphaMode(WF, AF), AF
        }
        static _ParsePlugins(FF, WF, SF, CF) {
          if (FF.plugins)
            for (const AF in FF.plugins) {
              const hF = FF.plugins[AF];
              let bW = WF.pluginManager?.getPlugin(hF.name);
              if (!bW) {
                const FF = uF.h.Instantiate("BABYLON." + AF);
                FF && (bW = new FF(WF))
              }
              bW?.parse(hF, SF, CF)
            }
        }
      }, (() => {
        const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], tW = [(0, AF.H)()], TF = [(0, AF.H)()], aW = [(0, AF.H)()], kW = [(0, AF.H)()], qW = [(0, AF.H)()], VF = [(0, AF.H)("alpha")], NF = [(0, AF.H)("backFaceCulling")], DF = [(0, AF.H)("textureRepetitionMode")], LF = [(0, AF.H)("textureRepetitionHexTilingParams")], mW = [(0, AF.H)("cullBackFaces")], OF = [(0, AF.H)()], xW = [(0, AF.H)()], ZF = [(0, AF.H)()], oF = [(0, AF.H)()], YF = [(0, AF.H)()], MF = [(0, AF.H)()], cW = [(0, AF.H)()], GF = [(0, AF.H)()], zW = [(0, AF.H)("fogEnabled")], IF = [(0, AF.H)()], fF = [(0, AF.H)()], yW = [(0, AF.H)()], sF = [(0, AF.H)()], nF = [(0, AF.H)()], HF = [(0, AF.H)()], KF = [(0, AF.H)()], wF = [(0, AF.H)()], (0, CF.j)(FF, null, sF, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: FF => "pointsCloud" in FF,
            get: FF => FF.pointsCloud
          },
          metadata: uF
        }, null, XF), (0, CF.j)(FF, null, nF, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "fillMode" in FF,
            get: FF => FF.fillMode
          },
          metadata: uF
        }, null, XF), (0, CF.j)(FF, null, HF, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: FF => "useLogarithmicDepth" in FF,
            get: FF => FF.useLogarithmicDepth
          },
          metadata: uF
        }, null, XF), (0, CF.j)(FF, null, wF, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "transparencyMode" in FF,
            get: FF => FF.transparencyMode
          },
          metadata: uF
        }, null, XF), (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: FF => "id" in FF,
            get: FF => FF.id,
            set: (FF, WF) => {
              FF.id = WF
            }
          },
          metadata: uF
        }, UF, BF), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: FF => "uniqueId" in FF,
            get: FF => FF.uniqueId,
            set: (FF, WF) => {
              FF.uniqueId = WF
            }
          },
          metadata: uF
        }, jW, vW), (0, CF.j)(null, null, tW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: FF => "name" in FF,
            get: FF => FF.name,
            set: (FF, WF) => {
              FF.name = WF
            }
          },
          metadata: uF
        }, JF, pF), (0, CF.j)(null, null, TF, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: FF => "metadata" in FF,
            get: FF => FF.metadata,
            set: (FF, WF) => {
              FF.metadata = WF
            }
          },
          metadata: uF
        }, lF, FW), (0, CF.j)(null, null, aW, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: FF => "checkReadyOnEveryCall" in FF,
            get: FF => FF.checkReadyOnEveryCall,
            set: (FF, WF) => {
              FF.checkReadyOnEveryCall = WF
            }
          },
          metadata: uF
        }, WW, SW), (0, CF.j)(null, null, kW, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: FF => "checkReadyOnlyOnce" in FF,
            get: FF => FF.checkReadyOnlyOnce,
            set: (FF, WF) => {
              FF.checkReadyOnlyOnce = WF
            }
          },
          metadata: uF
        }, CW, AW), (0, CF.j)(null, null, qW, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: FF => "state" in FF,
            get: FF => FF.state,
            set: (FF, WF) => {
              FF.state = WF
            }
          },
          metadata: uF
        }, uW, hW), (0, CF.j)(null, null, VF, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: FF => "_alpha" in FF,
            get: FF => FF._alpha,
            set: (FF, WF) => {
              FF._alpha = WF
            }
          },
          metadata: uF
        }, bS, dW), (0, CF.j)(null, null, NF, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: FF => "_backFaceCulling" in FF,
            get: FF => FF._backFaceCulling,
            set: (FF, WF) => {
              FF._backFaceCulling = WF
            }
          },
          metadata: uF
        }, PW, RW), (0, CF.j)(null, null, DF, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "_textureRepetitionMode" in FF,
            get: FF => FF._textureRepetitionMode,
            set: (FF, WF) => {
              FF._textureRepetitionMode = WF
            }
          },
          metadata: uF
        }, iS, eW), (0, CF.j)(null, null, LF, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: FF => "textureRepetitionHexTilingParams" in FF,
            get: FF => FF.textureRepetitionHexTilingParams,
            set: (FF, WF) => {
              FF.textureRepetitionHexTilingParams = WF
            }
          },
          metadata: uF
        }, EW, QW), (0, CF.j)(null, null, mW, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: FF => "_cullBackFaces" in FF,
            get: FF => FF._cullBackFaces,
            set: (FF, WF) => {
              FF._cullBackFaces = WF
            }
          },
          metadata: uF
        }, rS, gS), (0, CF.j)(null, null, OF, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: FF => "sideOrientation" in FF,
            get: FF => FF.sideOrientation,
            set: (FF, WF) => {
              FF.sideOrientation = WF
            }
          },
          metadata: uF
        }, tS, TW), (0, CF.j)(null, null, xW, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: FF => "_alphaMode" in FF,
            get: FF => FF._alphaMode,
            set: (FF, WF) => {
              FF._alphaMode = WF
            }
          },
          metadata: uF
        }, aS, kS), (0, CF.j)(null, null, ZF, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: FF => "_needDepthPrePass" in FF,
            get: FF => FF._needDepthPrePass,
            set: (FF, WF) => {
              FF._needDepthPrePass = WF
            }
          },
          metadata: uF
        }, qS, VW), (0, CF.j)(null, null, oF, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: FF => "disableDepthWrite" in FF,
            get: FF => FF.disableDepthWrite,
            set: (FF, WF) => {
              FF.disableDepthWrite = WF
            }
          },
          metadata: uF
        }, NW, DW), (0, CF.j)(null, null, YF, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: FF => "disableColorWrite" in FF,
            get: FF => FF.disableColorWrite,
            set: (FF, WF) => {
              FF.disableColorWrite = WF
            }
          },
          metadata: uF
        }, LW, mS), (0, CF.j)(null, null, MF, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: FF => "forceDepthWrite" in FF,
            get: FF => FF.forceDepthWrite,
            set: (FF, WF) => {
              FF.forceDepthWrite = WF
            }
          },
          metadata: uF
        }, OW, xS), (0, CF.j)(null, null, cW, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: FF => "depthFunction" in FF,
            get: FF => FF.depthFunction,
            set: (FF, WF) => {
              FF.depthFunction = WF
            }
          },
          metadata: uF
        }, ZW, oW), (0, CF.j)(null, null, GF, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: FF => "separateCullingPass" in FF,
            get: FF => FF.separateCullingPass,
            set: (FF, WF) => {
              FF.separateCullingPass = WF
            }
          },
          metadata: uF
        }, YW, MW), (0, CF.j)(null, null, zW, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "_fogEnabled" in FF,
            get: FF => FF._fogEnabled,
            set: (FF, WF) => {
              FF._fogEnabled = WF
            }
          },
          metadata: uF
        }, cS, GW), (0, CF.j)(null, null, IF, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: FF => "pointSize" in FF,
            get: FF => FF.pointSize,
            set: (FF, WF) => {
              FF.pointSize = WF
            }
          },
          metadata: uF
        }, zS, IW), (0, CF.j)(null, null, fF, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: FF => "zOffset" in FF,
            get: FF => FF.zOffset,
            set: (FF, WF) => {
              FF.zOffset = WF
            }
          },
          metadata: uF
        }, fW, yS), (0, CF.j)(null, null, yW, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: FF => "zOffsetUnits" in FF,
            get: FF => FF.zOffsetUnits,
            set: (FF, WF) => {
              FF.zOffsetUnits = WF
            }
          },
          metadata: uF
        }, sW, nW), (0, CF.j)(null, null, KF, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: FF => "_isVertexOutputInvariant" in FF,
            get: FF => FF._isVertexOutputInvariant,
            set: (FF, WF) => {
              FF._isVertexOutputInvariant = WF
            }
          },
          metadata: uF
        }, HW, KW), uF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uF
        })
      })(), FF.TriangleFillMode = 0, FF.WireFrameFillMode = 1, FF.PointFillMode = 2, FF.PointListDrawMode = 3, FF.LineListDrawMode = 4, FF.LineLoopDrawMode = 5, FF.LineStripDrawMode = 6, FF.TriangleStripDrawMode = 7, FF.TriangleFanDrawMode = 8, FF.ClockWiseSideOrientation = 0, FF.CounterClockWiseSideOrientation = 1, FF.ImageProcessingDirtyFlag = 64, FF.TextureDirtyFlag = 1, FF.LightDirtyFlag = 2, FF.FresnelDirtyFlag = 4, FF.AttributesDirtyFlag = 8, FF.MiscDirtyFlag = 16, FF.PrePassDirtyFlag = 32, FF.AllDirtyFlag = 127, FF.MATERIAL_OPAQUE = 0, FF.MATERIAL_ALPHATEST = 1, FF.MATERIAL_ALPHABLEND = 2, FF.MATERIAL_ALPHATESTANDBLEND = 3, FF.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, FF.MATERIAL_NORMALBLENDMETHOD_RNM = 1, FF.LIGHTFALLOFF_PHYSICAL = 0, FF.LIGHTFALLOFF_GLTF = 1, FF.LIGHTFALLOFF_STANDARD = 2, FF.OnEventObservable = new hF.b, FF.ForceVertexOutputInvariant = !1, FF._AllDirtyCallBack = FF => FF.markAllAsDirty(), FF._ImageProcessingDirtyCallBack = FF => FF.markAsImageProcessingDirty(), FF._TextureDirtyCallBack = FF => FF.markAsTexturesDirty(), FF._FresnelDirtyCallBack = FF => FF.markAsFresnelDirty(), FF._MiscDirtyCallBack = FF => FF.markAsMiscDirty(), FF._PrePassDirtyCallBack = FF => FF.markAsPrePassDirty(), FF._LightsDirtyCallBack = FF => FF.markAsLightDirty(), FF._AttributeDirtyCallBack = FF => FF.markAsAttributesDirty(), FF._FresnelAndMiscDirtyCallBack = WF => {
        FF._FresnelDirtyCallBack(WF), FF._MiscDirtyCallBack(WF)
      }, FF._TextureAndMiscDirtyCallBack = WF => {
        FF._TextureDirtyCallBack(WF), FF._MiscDirtyCallBack(WF)
      }, FF._DirtyCallbackArray = [], FF._RunDirtyCallBacks = WF => {
        for (const SF of FF._DirtyCallbackArray) SF(WF)
      }, FF
    })();
    Object.getOwnPropertyDescriptor(TF.prototype, "pluginManager") || Object.defineProperty(TF.prototype, "pluginManager", (0, tW.f)("Material", "pluginManager"))
  },
  38317: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(37867);
    class AF {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(FF) {
        this._DiffuseTextureEnabled !== FF && (this._DiffuseTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(FF) {
        this._BaseWeightTextureEnabled !== FF && (this._BaseWeightTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(FF) {
        this._BaseDiffuseRoughnessTextureEnabled !== FF && (this._BaseDiffuseRoughnessTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(FF) {
        this._DetailTextureEnabled !== FF && (this._DetailTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(FF) {
        this._DecalMapEnabled !== FF && (this._DecalMapEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(FF) {
        this._AmbientTextureEnabled !== FF && (this._AmbientTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(FF) {
        this._OpacityTextureEnabled !== FF && (this._OpacityTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(FF) {
        this._ReflectionTextureEnabled !== FF && (this._ReflectionTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(FF) {
        this._EmissiveTextureEnabled !== FF && (this._EmissiveTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(FF) {
        this._SpecularTextureEnabled !== FF && (this._SpecularTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(FF) {
        this._BumpTextureEnabled !== FF && (this._BumpTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(FF) {
        this._LightmapTextureEnabled !== FF && (this._LightmapTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(FF) {
        this._RefractionTextureEnabled !== FF && (this._RefractionTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(FF) {
        this._ColorGradingTextureEnabled !== FF && (this._ColorGradingTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(FF) {
        this._FresnelEnabled !== FF && (this._FresnelEnabled = FF, CF.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(FF) {
        this._ClearCoatTextureEnabled !== FF && (this._ClearCoatTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(FF) {
        this._ClearCoatBumpTextureEnabled !== FF && (this._ClearCoatBumpTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(FF) {
        this._ClearCoatTintTextureEnabled !== FF && (this._ClearCoatTintTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(FF) {
        this._SheenTextureEnabled !== FF && (this._SheenTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(FF) {
        this._AnisotropicTextureEnabled !== FF && (this._AnisotropicTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(FF) {
        this._ThicknessTextureEnabled !== FF && (this._ThicknessTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(FF) {
        this._RefractionIntensityTextureEnabled !== FF && (this._RefractionIntensityTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(FF) {
        this._TranslucencyIntensityTextureEnabled !== FF && (this._TranslucencyIntensityTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(FF) {
        this._TranslucencyColorTextureEnabled !== FF && (this._TranslucencyColorTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(FF) {
        this._IridescenceTextureEnabled !== FF && (this._IridescenceTextureEnabled = FF, CF.e.MarkAllMaterialsAsDirty(1))
      }
    }
    AF._DiffuseTextureEnabled = !0, AF._BaseWeightTextureEnabled = !0, AF._BaseDiffuseRoughnessTextureEnabled = !0, AF._DetailTextureEnabled = !0, AF._DecalMapEnabled = !0, AF._AmbientTextureEnabled = !0, AF._OpacityTextureEnabled = !0, AF._ReflectionTextureEnabled = !0, AF._EmissiveTextureEnabled = !0, AF._SpecularTextureEnabled = !0, AF._BumpTextureEnabled = !0, AF._LightmapTextureEnabled = !0, AF._RefractionTextureEnabled = !0, AF._ColorGradingTextureEnabled = !0, AF._FresnelEnabled = !0, AF._ClearCoatTextureEnabled = !0, AF._ClearCoatBumpTextureEnabled = !0, AF._ClearCoatTintTextureEnabled = !0, AF._SheenTextureEnabled = !0, AF._AnisotropicTextureEnabled = !0, AF._ThicknessTextureEnabled = !0, AF._RefractionIntensityTextureEnabled = !0, AF._TranslucencyIntensityTextureEnabled = !0, AF._TranslucencyColorTextureEnabled = !0, AF._IridescenceTextureEnabled = !0
  },
  38303: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => kW,
      E: () => ZF,
      G: () => qW,
      J: () => OF,
      L: () => xW,
      P: () => EF,
      S: () => eF,
      W: () => nF,
      X: () => zW,
      _: () => cW,
      cb: () => MF,
      e: () => YF,
      eb: () => aW,
      f: () => VF,
      fb: () => oF,
      hb: () => HF,
      i: () => iW,
      ib: () => KF,
      kb: () => wF,
      m: () => tW,
      mb: () => jW,
      o: () => TF,
      q: () => mW,
      qb: () => UF,
      r: () => dF,
      rb: () => BF,
      t: () => rW,
      tb: () => QF,
      w: () => gW
    });
    var CF = SF(37076),
      AF = SF(35639),
      uF = SF(38166),
      hF = SF(38312),
      bW = SF(38317);

    function dF(FF, WF, SF) {
      if (!FF || FF.LOGARITHMICDEPTH || FF.indexOf && FF.indexOf("LOGARITHMICDEPTH") >= 0) {
        const FF = SF.activeCamera;
        1 === FF.mode && CF.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), WF.setFloat("logarithmicDepthConstant", 2 / (Math.log(FF.maxZ + 1) / Math.LN2))
      }
    }
    const PF = {
        r: 0,
        g: 0,
        b: 0
      },
      RF = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function iW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      SF && FF.fogEnabled && (!WF || WF.applyFog) && 0 !== FF.fogMode && (SF.setFloat4("vFogInfos", FF.fogMode, FF.fogStart, FF.fogEnd, FF.fogDensity), CF ? (FF.fogColor.toLinearSpaceToRef(PF, FF.sC().useExactSrgbConversions), SF.setColor3("vFogColor", PF)) : SF.setColor3("vFogColor", FF.fogColor))
    }

    function eF(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
      const iW = FF.numMaxInfluencers || FF.numInfluencers;
      return iW <= 0 ? 0 : (WF.push("#define MORPHTARGETS"), FF.hasPositions && WF.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), FF.hasNormals && WF.push("#define MORPHTARGETTEXTURE_HASNORMALS"), FF.hasTangents && WF.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), FF.hasUVs && WF.push("#define MORPHTARGETTEXTURE_HASUVS"), FF.hasUV2s && WF.push("#define MORPHTARGETTEXTURE_HASUV2S"), FF.hasColors && WF.push("#define MORPHTARGETTEXTURE_HASCOLORS"), FF.supportsPositions && AF && WF.push("#define MORPHTARGETS_POSITION"), FF.supportsNormals && uF && WF.push("#define MORPHTARGETS_NORMAL"), FF.supportsTangents && hF && WF.push("#define MORPHTARGETS_TANGENT"), FF.supportsUVs && bW && WF.push("#define MORPHTARGETS_UV"), FF.supportsUV2s && dF && WF.push("#define MORPHTARGETS_UV2"), FF.supportsColors && PF && WF.push("#define MORPHTARGETS_COLOR"), WF.push("#define NUM_MORPH_INFLUENCERS " + iW), FF.isUsingTextureForTargets && WF.push("#define MORPHTARGETS_TEXTURE"), RF.NUM_MORPH_INFLUENCERS = iW, RF.NORMAL = uF, RF.TANGENT = hF, RF.UV = bW, RF.UV2 = dF, RF.COLOR = PF, EF(SF, CF, RF, AF), iW)
    }

    function EF(FF, WF, SF) {
      let uF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const hF = SF.NUM_MORPH_INFLUENCERS;
      if (hF > 0 && AF.e.LastCreatedEngine) {
        const bW = AF.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          dF = WF.morphTargetManager;
        if (dF?.isUsingTextureForTargets) return;
        const PF = dF && dF.supportsPositions && uF,
          RF = dF && dF.supportsNormals && SF.NORMAL,
          iW = dF && dF.supportsTangents && SF.TANGENT,
          eF = dF && dF.supportsUVs && SF.UV1,
          EF = dF && dF.supportsUV2s && SF.UV2,
          QF = dF && dF.supportsColors && SF.VERTEXCOLOR;
        for (let SF = 0; SF < hF; SF++) PF && FF.push("position" + SF), RF && FF.push("normal" + SF), iW && FF.push("tangent" + SF), eF && FF.push("uv_" + SF), EF && FF.push("uv2_" + SF), QF && FF.push("color" + SF), FF.length > bW && CF.b.Error("Cannot add more vertex attributes for mesh " + WF.name)
      }
    }

    function QF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      FF.push("world0"), FF.push("world1"), FF.push("world2"), FF.push("world3"), WF && (FF.push("previousWorld0"), FF.push("previousWorld1"), FF.push("previousWorld2"), FF.push("previousWorld3"))
    }

    function rW(FF, WF) {
      const SF = FF.morphTargetManager;
      FF && SF && WF.setFloatArray("morphTargetInfluences", SF.influences)
    }

    function gW(FF, WF) {
      WF.bindToEffect(FF, "Scene")
    }

    function tW(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dF = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        PF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        RF = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        iW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        eF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (FF.texturesEnabled && AF && bW.e.ReflectionTextureEnabled) {
        if (SF.yhF("reflectionMatrix", AF.getReflectionTextureMatrix()), SF.updateFloat2("vReflectionInfos", AF.level * FF.iblIntensity, eF), dF && AF.boundingBoxSize) {
          const FF = AF;
          SF.updateVector3("vReflectionPosition", FF.boundingBoxPosition), SF.updateVector3("vReflectionSize", FF.boundingBoxSize)
        }
        if (uF) {
          const FF = AF.getSize().width;
          SF.updateFloat2("vReflectionFilteringInfo", FF, Math.log2(FF))
        }
        if (RF && !WF.USEIRRADIANCEMAP) {
          const FF = AF.sphericalPolynomial;
          if (WF.USESPHERICALFROMREFLECTIONMAP && FF)
            if (WF.SPHERICAL_HARMONICS) {
              const WF = FF.preScaledHarmonics;
              SF.updateVector3("vSphericalL00", WF.l00), SF.updateVector3("vSphericalL1_1", WF.l1_1), SF.updateVector3("vSphericalL10", WF.l10), SF.updateVector3("vSphericalL11", WF.l11), SF.updateVector3("vSphericalL2_2", WF.l2_2), SF.updateVector3("vSphericalL2_1", WF.l2_1), SF.updateVector3("vSphericalL20", WF.l20), SF.updateVector3("vSphericalL21", WF.l21), SF.updateVector3("vSphericalL22", WF.l22)
            } else SF.updateFloat3("vSphericalX", FF.x.x, FF.x.y, FF.x.z), SF.updateFloat3("vSphericalY", FF.y.x, FF.y.y, FF.y.z), SF.updateFloat3("vSphericalZ", FF.z.x, FF.z.y, FF.z.z), SF.updateFloat3("vSphericalXX_ZZ", FF.xx.x - FF.zz.x, FF.xx.y - FF.zz.y, FF.xx.z - FF.zz.z), SF.updateFloat3("vSphericalYY_ZZ", FF.yy.x - FF.zz.x, FF.yy.y - FF.zz.y, FF.yy.z - FF.zz.z), SF.updateFloat3("vSphericalZZ", FF.zz.x, FF.zz.y, FF.zz.z), SF.updateFloat3("vSphericalXY", FF.xy.x, FF.xy.y, FF.xy.z), SF.updateFloat3("vSphericalYZ", FF.yz.x, FF.yz.y, FF.yz.z), SF.updateFloat3("vSphericalZX", FF.zx.x, FF.zx.y, FF.zx.z)
        } else PF && WF.USEIRRADIANCEMAP && WF.USE_IRRADIANCE_DOMINANT_DIRECTION && AF.irradianceTexture && SF.updateVector3("vReflectionDominantDirection", AF.irradianceTexture._dominantDirection);
        hF && SF.updateFloat3("vReflectionMicrosurfaceInfos", AF.getSize().width, AF.lodGenerationScale, AF.lodGenerationOffset)
      }
      iW && SF.updateColor3("vReflectionColor", CF)
    }

    function TF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (CF && bW.e.ReflectionTextureEnabled) {
        WF.LODBASEDMICROSFURACE ? SF.setTexture("reflectionSampler", CF) : (SF.setTexture("reflectionSampler", CF._lodTextureMid || CF), SF.setTexture("reflectionSamplerLow", CF._lodTextureLow || CF), SF.setTexture("reflectionSamplerHigh", CF._lodTextureHigh || CF)), WF.USEIRRADIANCEMAP && SF.setTexture("irradianceSampler", CF.irradianceTexture);
        const uF = FF.iblCdfGenerator;
        AF && uF && SF.setTexture("icdfSampler", uF.getIcdfTexture())
      }
    }

    function aW(FF, WF, SF) {
      WF._needUVs = !0, WF[SF] = !0, FF.optimizeUVAllocation && FF.getTextureMatrix().isIdentityAs3x2() ? (WF[SF + "DIRECTUV"] = FF.coordinatesIndex + 1, WF["MAINUV" + (FF.coordinatesIndex + 1)] = !0) : WF[SF + "DIRECTUV"] = 0
    }

    function kW(FF, WF, SF) {
      const CF = FF.getTextureMatrix();
      WF.yhF(SF + "Matrix", CF)
    }

    function qW(FF, WF, SF) {
      SF.BAKED_VERTEX_ANIMATION_TEXTURE && SF.INSTANCES && FF.push("bakedVertexAnimationSettingsInstanced")
    }

    function VF(FF, WF, SF) {
      var CF;
      if (WF && FF && (FF.computeBonesUsingShaders && WF._bonesComputationForcedToCPU && (FF.computeBonesUsingShaders = !1), FF.useBones && FF.computeBonesUsingShaders && FF.skeleton)) {
        const AF = FF.skeleton;
        if (AF.isUsingTextureForMatrices && WF.getUniformIndex("boneTextureInfo") > -1) {
          const SF = AF.getTransformMatrixTexture(FF);
          WF.setTexture("boneSampler", SF), WF.setFloat2("boneTextureInfo", AF._textureWidth, AF._textureHeight)
        } else {
          const uF = AF.getTransformMatrices(FF);
          uF && (WF.setMatrices("mBones", uF), SF && FF.OWF().prePassRenderer && FF.OWF().prePassRenderer.getIndex(2) && (SF.previousBones[FF.uniqueId] || (SF.previousBones[FF.uniqueId] = uF.slice()), WF.setMatrices("mPreviousBones", SF.previousBones[FF.uniqueId]), CF = uF, SF.previousBones[FF.uniqueId].set(CF)))
        }
      }
    }

    function NF(FF, WF, SF, CF, AF) {
      let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      FF._bindLight(WF, SF, CF, AF, uF)
    }
    const DF = 4,
      LF = new WeakMap;

    function mW(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const uF = Math.min(WF.lightSources.length, AF);
      for (let hF = 0; hF < uF; hF++) {
        NF(WF.lightSources[hF], hF, FF, SF, "boolean" === typeof CF ? CF : CF.SPECULARTERM, WF.receiveShadows)
      }
    }

    function OF(FF, WF, SF, CF) {
      SF.NUM_BONE_INFLUENCERS > 0 && (CF.addCPUSkinningFallback(0, WF), FF.push("matricesIndices"), FF.push("matricesWeights"), SF.NUM_BONE_INFLUENCERS > 4 && (FF.push("matricesIndicesExtra"), FF.push("matricesWeightsExtra")))
    }

    function xW(FF, WF) {
      (WF.INSTANCES || WF.THIN_INSTANCES) && QF(FF, !!WF.PREPASS_VELOCITY), WF.INSTANCESCOLOR && FF.push("instanceColor")
    }

    function ZF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AF = 0;
      for (let uF = 0; uF < SF && FF["LIGHT" + uF]; uF++) uF > 0 && (AF = CF + uF, WF.addFallback(AF, "LIGHT" + uF)), FF.SHADOWS || (FF["SHADOW" + uF] && WF.addFallback(CF, "SHADOW" + uF), FF["SHADOWPCF" + uF] && WF.addFallback(CF, "SHADOWPCF" + uF), FF["SHADOWPCSS" + uF] && WF.addFallback(CF, "SHADOWPCSS" + uF), FF["SHADOWPOISSON" + uF] && WF.addFallback(CF, "SHADOWPOISSON" + uF), FF["SHADOWESM" + uF] && WF.addFallback(CF, "SHADOWESM" + uF), FF["SHADOWCLOSEESM" + uF] && WF.addFallback(CF, "SHADOWCLOSEESM" + uF));
      return AF
    }

    function oF(FF, WF, SF, CF, AF, uF, hF) {
      let bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PF = arguments.length > 9 ? arguments[9] : void 0,
        RF = arguments.length > 10 ? arguments[10] : void 0;
      if (hF._areMiscDirty) {
        hF.LOGARITHMICDEPTH = SF, hF.POINTSIZE = CF, hF.FOG = AF && function(FF, WF) {
          return WF.fogEnabled && FF.applyFog && 0 !== WF.fogMode
        }(FF, WF), hF.NONUNIFORMSCALING = FF.nonUniformScaling, hF.ALPHATEST = uF, hF.DECAL_AFTER_DETAIL = bW, hF.USE_VERTEX_PULLING = dF, hF.RIGHT_HANDED = WF.useRightHandedSystem;
        const iW = dF ? PF?.geometry?.getIndexBuffer() : null,
          eF = !!PF && PF.isUnIndexed;
        hF.VERTEX_PULLING_USE_INDEX_BUFFER = !!iW && !eF, hF.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!iW || eF) && iW.is32Bits, hF.VERTEXOUTPUT_INVARIANT = !!RF
      }
    }

    function YF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!FF.lightsEnabled || CF) return !0;
      const AF = WF.lightSources,
        uF = Math.min(AF.length, SF);
      for (let hF = 0; hF < uF; hF++)
        if (!AF[hF].areLightTexturesReady()) return !1;
      return !0
    }

    function MF(FF, WF, SF, AF) {
      let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!SF._areLightsDirty) return SF._needNormals;
      const bW = uF;
      uF = function(FF, WF) {
        const SF = FF.sC().getCaps().maxUniformBuffersPerShaderStage;
        if (null == SF) return WF;
        const CF = Math.max(SF - DF, 1);
        return Math.min(WF, CF)
      }(FF, uF);
      let dF = 0;
      const PF = {
        needNormals: SF._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (FF.lightsEnabled && !hF) {
        WF.lightSources.length > uF && uF < bW && function(FF, WF, SF, AF) {
          let uF = LF.get(FF);
          uF || (uF = new Set, LF.set(FF, uF)), uF.has(AF) || (uF.add(AF), CF.b.Warn(`maxSimultaneousLights is ${WF} but this engine supports at most ${SF} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${AF} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${AF+DF} uniform buffers, over the device limit of ${FF.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${SF}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${SF} or less to silence this warning.`))
        }(FF.sC(), bW, uF, Math.min(WF.lightSources.length, bW));
        for (const CF of WF.lightSources)
          if (GF(FF, WF, CF, dF, SF, AF, PF), dF++, dF === uF) break
      }
      SF.SPECULARTERM = PF.specularEnabled, SF.SHADOWS = PF.shadowEnabled;
      const RF = Math.max(uF, SF.MAXLIGHTCOUNT || 0);
      for (let CF = dF; CF < RF; CF++) void 0 !== SF["LIGHT" + CF] && (SF["LIGHT" + CF] = !1, SF["HEMILIGHT" + CF] = !1, SF["POINTLIGHT" + CF] = !1, SF["DIRLIGHT" + CF] = !1, SF["SPOTLIGHT" + CF] = !1, SF["AREALIGHT" + CF] = !1, SF["CLUSTLIGHT" + CF] = !1, SF["SHADOW" + CF] = !1, SF["SHADOWCSM" + CF] = !1, SF["SHADOWCSMDEBUG" + CF] = !1, SF["SHADOWCSMNUM_CASCADES" + CF] = !1, SF["SHADOWCSMUSESHADOWMAXZ" + CF] = !1, SF["SHADOWCSMNOBLEND" + CF] = !1, SF["SHADOWCSM_RIGHTHANDED" + CF] = !1, SF["SHADOWPCF" + CF] = !1, SF["SHADOWPCSS" + CF] = !1, SF["SHADOWPOISSON" + CF] = !1, SF["SHADOWESM" + CF] = !1, SF["SHADOWCLOSEESM" + CF] = !1, SF["SHADOWCUBE" + CF] = !1, SF["SHADOWLOWQUALITY" + CF] = !1, SF["SHADOWMEDIUMQUALITY" + CF] = !1);
      SF.LIGHTCOUNT = dF, SF.MAXLIGHTCOUNT = uF;
      const iW = FF.sC().getCaps();
      return void 0 === SF.SHADOWFLOAT && (PF.needRebuild = !0), SF.SHADOWFLOAT = PF.shadowEnabled && (iW.textureFloatRender && iW.textureFloatLinearFiltering || iW.textureHalfFloatRender && iW.textureHalfFloatLinearFiltering), SF.LIGHTMAPEXCLUDED = PF.lightmapMode, PF.needRebuild && SF.rebuild(), PF.needNormals
    }

    function cW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (WF && bW.e.ReflectionTextureEnabled) {
        if (!WF.isReadyOrNotBlocking()) return !1;
        SF._needNormals = !0, SF.REFLECTION = !0, SF.GAMMAREFLECTION = WF.gammaSpace, SF.RGBDREFLECTION = WF.isRGBD, SF.LODINREFLECTIONALPHA = WF.lodLevelInAlpha, SF.LINEARSPECULARREFLECTION = WF.linearSpecularLOD, SF.USEIRRADIANCEMAP = !1, SF.LODBASEDMICROSFURACE = FF.sC().getCaps().textureLOD;
        const hF = FF.sC();
        switch (CF && AF > 0 ? (SF.NUM_SAMPLES = "" + AF, hF._features.needTypeSuffixInShaderConstants && (SF.NUM_SAMPLES = SF.NUM_SAMPLES + "u"), SF.REALTIME_FILTERING = !0, FF.iblCdfGenerator && (SF.IBL_CDF_FILTERING = !0)) : SF.REALTIME_FILTERING = !1, SF.INVERTCUBICMAP = 6 === WF.coordinatesMode, SF.REFLECTIONMAP_3D = WF.isCube, SF.REFLECTIONMAP_OPPOSITEZ = SF.REFLECTIONMAP_3D && FF.useRightHandedSystem ? !WF.invertZ : WF.invertZ, SF.REFLECTIONMAP_CUBIC = !1, SF.REFLECTIONMAP_EXPLICIT = !1, SF.REFLECTIONMAP_PLANAR = !1, SF.REFLECTIONMAP_PROJECTION = !1, SF.REFLECTIONMAP_SKYBOX = !1, SF.REFLECTIONMAP_SPHERICAL = !1, SF.REFLECTIONMAP_EQUIRECTANGULAR = !1, SF.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, SF.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, WF.coordinatesMode) {
          case 0:
            SF.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            SF.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            SF.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            SF.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            SF.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            SF.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            SF.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            SF.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            SF.REFLECTIONMAP_CUBIC = !0, SF.USE_LOCAL_REFLECTIONMAP_CUBIC = !!WF.boundingBoxSize
        }
        5 !== WF.coordinatesMode && (WF.irradianceTexture ? (SF.USEIRRADIANCEMAP = !0, SF.USESPHERICALFROMREFLECTIONMAP = !1, SF.USESPHERICALINVERTEX = !1, WF.irradianceTexture._dominantDirection ? SF.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : SF.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : WF.isCube && (SF.USESPHERICALFROMREFLECTIONMAP = !0, SF.USEIRRADIANCEMAP = !1, SF.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, SF.USESPHERICALINVERTEX = uF))
      } else SF.REFLECTION = !1, SF.REFLECTIONMAP_3D = !1, SF.REFLECTIONMAP_SPHERICAL = !1, SF.REFLECTIONMAP_PLANAR = !1, SF.REFLECTIONMAP_CUBIC = !1, SF.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, SF.REFLECTIONMAP_PROJECTION = !1, SF.REFLECTIONMAP_SKYBOX = !1, SF.REFLECTIONMAP_EXPLICIT = !1, SF.REFLECTIONMAP_EQUIRECTANGULAR = !1, SF.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, SF.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, SF.INVERTCUBICMAP = !1, SF.USESPHERICALFROMREFLECTIONMAP = !1, SF.USEIRRADIANCEMAP = !1, SF.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, SF.USESPHERICALINVERTEX = !1, SF.REFLECTIONMAP_OPPOSITEZ = !1, SF.LODINREFLECTIONALPHA = !1, SF.GAMMAREFLECTION = !1, SF.RGBDREFLECTION = !1, SF.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function GF(FF, WF, SF, CF, AF, hF, bW) {
      switch (bW.needNormals = !0, void 0 === AF["LIGHT" + CF] && (bW.needRebuild = !0), AF["LIGHT" + CF] = !0, AF["SPOTLIGHT" + CF] = !1, AF["HEMILIGHT" + CF] = !1, AF["POINTLIGHT" + CF] = !1, AF["DIRLIGHT" + CF] = !1, AF["AREALIGHT" + CF] = !1, AF["CLUSTLIGHT" + CF] = !1, SF.prepareLightSpecificDefines(AF, CF), AF["LIGHT_FALLOFF_PHYSICAL" + CF] = !1, AF["LIGHT_FALLOFF_GLTF" + CF] = !1, AF["LIGHT_FALLOFF_STANDARD" + CF] = !1, SF.falloffType) {
        case uF.e.FALLOFF_GLTF:
          AF["LIGHT_FALLOFF_GLTF" + CF] = !0;
          break;
        case uF.e.FALLOFF_PHYSICAL:
          AF["LIGHT_FALLOFF_PHYSICAL" + CF] = !0;
          break;
        case uF.e.FALLOFF_STANDARD:
          AF["LIGHT_FALLOFF_STANDARD" + CF] = !0
      }
      if (hF && !SF.specular.equalsFloats(0, 0, 0) && (bW.specularEnabled = !0), AF["SHADOW" + CF] = !1, AF["SHADOWCSM" + CF] = !1, AF["SHADOWCSMDEBUG" + CF] = !1, AF["SHADOWCSMNUM_CASCADES" + CF] = !1, AF["SHADOWCSMUSESHADOWMAXZ" + CF] = !1, AF["SHADOWCSMNOBLEND" + CF] = !1, AF["SHADOWCSM_RIGHTHANDED" + CF] = !1, AF["SHADOWPCF" + CF] = !1, AF["SHADOWPCSS" + CF] = !1, AF["SHADOWPOISSON" + CF] = !1, AF["SHADOWESM" + CF] = !1, AF["SHADOWCLOSEESM" + CF] = !1, AF["SHADOWCUBE" + CF] = !1, AF["SHADOWLOWQUALITY" + CF] = !1, AF["SHADOWMEDIUMQUALITY" + CF] = !1, WF && WF.receiveShadows && FF.shadowsEnabled && SF.shadowEnabled) {
        const WF = SF.getShadowGenerator(FF.activeCamera) ?? SF.getShadowGenerator();
        if (WF) {
          const FF = WF.getShadowMap();
          FF && FF.renderList && FF.renderList.length > 0 && (bW.shadowEnabled = !0, WF.prepareDefines(AF, CF))
        }
      }
      SF.lightmapMode != uF.e.LIGHTMAP_DEFAULT ? (bW.lightmapMode = !0, AF["LIGHTMAPEXCLUDED" + CF] = !0, AF["LIGHTMAPNOSPECULAR" + CF] = SF.lightmapMode == uF.e.LIGHTMAP_SHADOWSONLY) : (AF["LIGHTMAPEXCLUDED" + CF] = !1, AF["LIGHTMAPNOSPECULAR" + CF] = !1)
    }

    function zW(FF, WF, SF, CF, AF) {
      let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dF = function(FF, WF) {
          let SF = !1;
          if (FF.activeCamera) {
            const CF = WF.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              AF = WF.CAMERA_PERSPECTIVE ? 1 : 0,
              uF = 1 === FF.activeCamera.mode ? 1 : 0,
              hF = 0 === FF.activeCamera.mode ? 1 : 0;
            (CF ^ uF || AF ^ hF) && (WF.CAMERA_ORTHOGRAPHIC = 1 === uF, WF.CAMERA_PERSPECTIVE = 1 === hF, SF = !0)
          }
          return SF
        }(FF, CF);
      !1 !== uF && (dF = (0, hF.l)(SF, FF, CF)), CF.DEPTHPREPASS !== !WF.getColorWrite() && (CF.DEPTHPREPASS = !CF.DEPTHPREPASS, dF = !0), CF.INSTANCES !== AF && (CF.INSTANCES = AF, dF = !0), CF.THIN_INSTANCES !== bW && (CF.THIN_INSTANCES = bW, dF = !0), dF && CF.markAsUnprocessed()
    }
    const IF = 40,
      fF = 64,
      yW = new WeakMap,
      sF = new WeakSet;

    function nF(FF, WF, SF, AF) {
      let uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        bW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!WF._areAttributesDirty && WF._needNormals === WF._normals && WF._needUVs === WF._uvs) return !1;
      WF._normals = WF._needNormals, WF._uvs = WF._needUVs, WF.NORMAL = WF._needNormals && FF.isVerticesDataPresent("normal"), WF._needNormals && FF.isVerticesDataPresent("tangent") && (WF.TANGENT = !0);
      for (let CF = 1; CF <= 6; ++CF) WF["UV" + CF] = !!WF._needUVs && FF.isVerticesDataPresent(`uv${1===CF?"":CF}`);
      if (SF) {
        const SF = FF.useVertexColors && FF.isVerticesDataPresent("color");
        WF.VERTEXCOLOR = SF, WF.VERTEXALPHA = FF.hasVertexAlpha && SF && hF
      }
      return FF.isVerticesDataPresent("instanceColor") && (FF.RRF || FF.hasThinInstances) && (WF.INSTANCESCOLOR = !0), AF && function(FF, WF) {
        if (FF.useBones && FF.computeBonesUsingShaders && FF.skeleton) {
          WF.NUM_BONE_INFLUENCERS = FF.numBoneInfluencers;
          const SF = void 0 !== WF.BONETEXTURE;
          if (FF.skeleton.isUsingTextureForMatrices && SF) WF.BONETEXTURE = !0;
          else {
            WF.BonesPerMesh = FF.skeleton.bones.length + 1, WF.BONETEXTURE = !SF && void 0;
            const AF = FF.OWF(),
              uF = AF.prePassRenderer;
            if (uF && uF.enabled) {
              const SF = -1 === uF.excludedSkinnedMesh.indexOf(FF);
              WF.BONES_VELOCITY_ENABLED = SF
            }
            const hF = !0 === WF.MULTIVIEW,
              bW = 2 * WF.BonesPerMesh + (hF ? 1 : 0);
            if (yW.get(FF.skeleton) !== bW) {
              yW.set(FF.skeleton, bW);
              const SF = AF.sC().getCaps().maxVertexUniformVectors;
              if (SF && !sF.has(FF.skeleton)) {
                const AF = 4 * WF.BonesPerMesh,
                  uF = hF ? fF : IF,
                  bW = Math.max(SF - uF, 0);
                (AF > bW || hF && 3 * AF > SF) && (sF.add(FF.skeleton), CF.b.Warn(`Skeleton "${FF.skeleton.name}": ${FF.skeleton.bones.length} bones stored as vertex uniforms use ${AF} of ~${bW} usable uniform vectors${hF?" (multiview)":""} on a device reporting ${SF}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else WF.NUM_BONE_INFLUENCERS = 0, WF.BonesPerMesh = 0, void 0 !== WF.BONETEXTURE && (WF.BONETEXTURE = !1)
      }(FF, WF), uF && function(FF, WF) {
        const SF = FF.morphTargetManager;
        SF ? (WF.MORPHTARGETS_UV = SF.supportsUVs && WF.UV1, WF.MORPHTARGETS_UV2 = SF.supportsUV2s && WF.UV2, WF.MORPHTARGETS_TANGENT = SF.supportsTangents && WF.TANGENT, WF.MORPHTARGETS_NORMAL = SF.supportsNormals && WF.NORMAL, WF.MORPHTARGETS_POSITION = SF.supportsPositions, WF.MORPHTARGETS_COLOR = SF.supportsColors, WF.MORPHTARGETTEXTURE_HASUVS = SF.hasUVs, WF.MORPHTARGETTEXTURE_HASUV2S = SF.hasUV2s, WF.MORPHTARGETTEXTURE_HASTANGENTS = SF.hasTangents, WF.MORPHTARGETTEXTURE_HASNORMALS = SF.hasNormals, WF.MORPHTARGETTEXTURE_HASPOSITIONS = SF.hasPositions, WF.MORPHTARGETTEXTURE_HASCOLORS = SF.hasColors, WF.NUM_MORPH_INFLUENCERS = SF.numMaxInfluencers || SF.numInfluencers, WF.MORPHTARGETS = WF.NUM_MORPH_INFLUENCERS > 0, WF.MORPHTARGETS_TEXTURE = SF.isUsingTextureForTargets) : (WF.MORPHTARGETS_UV = !1, WF.MORPHTARGETS_UV2 = !1, WF.MORPHTARGETS_TANGENT = !1, WF.MORPHTARGETS_NORMAL = !1, WF.MORPHTARGETS_POSITION = !1, WF.MORPHTARGETS_COLOR = !1, WF.MORPHTARGETTEXTURE_HASUVS = !1, WF.MORPHTARGETTEXTURE_HASUV2S = !1, WF.MORPHTARGETTEXTURE_HASTANGENTS = !1, WF.MORPHTARGETTEXTURE_HASNORMALS = !1, WF.MORPHTARGETTEXTURE_HASPOSITIONS = !1, WF.MORPHTARGETTEXTURE_HAS_COLORS = !1, WF.MORPHTARGETS = !1, WF.NUM_MORPH_INFLUENCERS = 0)
      }(FF, WF), bW && function(FF, WF) {
        const SF = FF.bakedVertexAnimationManager;
        WF.BAKED_VERTEX_ANIMATION_TEXTURE = !(!SF || !SF.isEnabled)
      }(FF, WF), !0
    }

    function HF(FF, WF) {
      if (FF.activeCamera) {
        const SF = WF.MULTIVIEW;
        WF.MULTIVIEW = null !== FF.activeCamera.outputRenderTarget && FF.activeCamera.outputRenderTarget.getViewCount() > 1, WF.MULTIVIEW != SF && WF.markAsUnprocessed()
      }
    }

    function KF(FF, WF, SF) {
      const CF = WF.ORDER_INDEPENDENT_TRANSPARENCY,
        AF = WF.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      WF.ORDER_INDEPENDENT_TRANSPARENCY = FF.useOrderIndependentTransparency && SF, WF.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !FF.sC().getCaps().textureFloatLinearFiltering, CF === WF.ORDER_INDEPENDENT_TRANSPARENCY && AF === WF.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || WF.markAsUnprocessed()
    }

    function wF(FF, WF, SF) {
      const CF = WF.PREPASS;
      if (!WF._arePrePassDirty) return;
      const AF = [{
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
      if (FF.prePassRenderer && FF.prePassRenderer.enabled && SF) {
        WF.PREPASS = !0, WF.SCENE_MRT_COUNT = FF.prePassRenderer.mrtCount, WF.PREPASS_NORMAL_WORLDSPACE = FF.prePassRenderer.generateNormalsInWorldSpace, WF.PREPASS_COLOR = !0, WF.PREPASS_COLOR_INDEX = 0;
        for (let SF = 0; SF < AF.length; SF++) {
          const CF = FF.prePassRenderer.getIndex(AF[SF].type); - 1 !== CF ? (WF[AF[SF].define] = !0, WF[AF[SF].index] = CF) : WF[AF[SF].define] = !1
        }
      } else {
        WF.PREPASS = !1;
        for (let FF = 0; FF < AF.length; FF++) WF[AF[FF].define] = !1
      }
      WF.PREPASS != CF && (WF.markAsUnprocessed(), WF.markAsImageProcessingDirty())
    }

    function XF(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PF = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      AF && AF.push("Light" + FF), uF || (WF.push("vLightData" + FF, "vLightDiffuse" + FF, "vLightSpecular" + FF, "vLightDirection" + FF, "vLightWidth" + FF, "vLightHeight" + FF, "vLightFalloff" + FF, "vLightGround" + FF, "vSliceData" + FF, "vSliceRanges" + FF, "lightMatrix" + FF, "shadowsInfo" + FF, "depthValues" + FF), SF.push("shadowTexture" + FF), SF.push("depthTexture" + FF), WF.push("viewFrustumZ" + FF, "cascadeBlendFactor" + FF, "lightSizeUVCorrection" + FF, "depthCorrection" + FF, "penumbraDarkness" + FF, "frustumLengths" + FF), CF && (SF.push("projectionLightTexture" + FF), WF.push("textureProjectionMatrix" + FF)), hF && SF.push("iesLightTexture" + FF), dF && SF.push("rectAreaLightEmissionTexture" + FF), bW && (SF.push("lightDataTexture" + FF), PF || SF.push("tileMaskTexture" + FF)))
    }

    function UF(FF, WF, SF) {
      const CF = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      SF && CF.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), FF.push(...CF);
      WF.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function BF(FF, WF, SF) {
      let CF, AF, uF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        hF = null;
      if (FF.uniformsNames) {
        const bW = FF;
        CF = bW.uniformsNames, AF = bW.uniformBuffersNames, WF = bW.samplers, SF = bW.defines, uF = bW.maxSimultaneousLights || 0, hF = bW.shaderLanguage ?? null
      } else CF = FF, WF || (WF = []);
      for (let bW = 0; bW < uF && SF["LIGHT" + bW]; bW++) XF(bW, CF, WF, SF["PROJECTEDLIGHTTEXTURE" + bW], AF, !1, SF["IESLIGHTTEXTURE" + bW], SF["CLUSTLIGHT" + bW], SF["RECTAREALIGHTEMISSIONTEXTURE" + bW], 1 === hF);
      SF.NUM_MORPH_INFLUENCERS && (CF.push("morphTargetInfluences"), CF.push("morphTargetCount")), SF.BAKED_VERTEX_ANIMATION_TEXTURE && (CF.push("bakedVertexAnimationSettings"), CF.push("bakedVertexAnimationTextureSizeInverted"), CF.push("bakedVertexAnimationTime"), WF.push("bakedVertexAnimationTexture"))
    }

    function jW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      FF.addUniform("vReflectionInfos", 2), FF.addUniform("reflectionMatrix", 16), WF && FF.addUniform("vReflectionMicrosurfaceInfos", 3), SF && (FF.addUniform("vReflectionPosition", 3), FF.addUniform("vReflectionSize", 3)), CF && (FF.addUniform("vReflectionFilteringInfo", 2), FF.addUniform("vReflectionDominantDirection", 3)), uF && FF.addUniform("vReflectionColor", 3), AF && (FF.addUniform("vSphericalL00", 3), FF.addUniform("vSphericalL1_1", 3), FF.addUniform("vSphericalL10", 3), FF.addUniform("vSphericalL11", 3), FF.addUniform("vSphericalL2_2", 3), FF.addUniform("vSphericalL2_1", 3), FF.addUniform("vSphericalL20", 3), FF.addUniform("vSphericalL21", 3), FF.addUniform("vSphericalL22", 3), FF.addUniform("vSphericalX", 3), FF.addUniform("vSphericalY", 3), FF.addUniform("vSphericalZ", 3), FF.addUniform("vSphericalXX_ZZ", 3), FF.addUniform("vSphericalYY_ZZ", 3), FF.addUniform("vSphericalZZ", 3), FF.addUniform("vSphericalXY", 3), FF.addUniform("vSphericalYZ", 3), FF.addUniform("vSphericalZX", 3))
    }
  },
  38320: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF
    });
    var CF = SF(35623),
      AF = SF(38267);
    class uF extends AF.c {
      constructor(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(FF, WF, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new CF.b, this._storeEffectOnSubMeshes = SF
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(FF, WF) {
        return !!FF && (!this._storeEffectOnSubMeshes || (!FF.Om || 0 === FF.Om.length || this.isReadyForSubMesh(FF, FF.Om[0], WF)))
      }
      _isReadyForSubMesh(FF) {
        const WF = FF.materialDefines;
        return !(this.checkReadyOnEveryCall || !FF.effect || !WF || WF._renderId !== this.OWF().getRenderId())
      }
      bindOnlyWorldMatrix(FF) {
        this._activeEffect.setMatrix("world", FF)
      }
      bindOnlyNormalMatrix(FF) {
        this._activeEffect.setMatrix("normalMatrix", FF)
      }
      bind(FF, WF) {
        WF && this.bindForSubMesh(FF, WF, WF.Om[0])
      }
      _afterBind(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(FF, WF, SF), this.OWF()._cachedEffect = WF, SF ? SF._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return SF._drawWrapper._forceRebindOnNextCall || FF.isCachedMaterialInvalid(this, WF, CF)
      }
      dispose(FF, WF, SF) {
        this._activeEffect = void 0, super.dispose(FF, WF, SF)
      }
    }
  },
  38341: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => AF
    });
    const CF = new WeakMap;

    function AF(FF) {
      const WF = FF.getVertexBuffers();
      if (!WF) return null;
      let SF = CF.get(FF);
      if (SF) {
        let FF = !1;
        for (const CF in WF)
          if (!SF.has(CF)) {
            FF = !0;
            break
          } if (!FF) return SF
      } else SF = new Map, CF.set(FF, SF);
      for (const CF in WF) {
        const FF = WF[CF];
        if (FF) {
          const WF = FF.byteOffset,
            AF = FF.byteStride,
            uF = FF.type,
            hF = FF.normalized;
          SF.set(CF, {
            offset: WF,
            stride: AF,
            type: uF,
            normalized: hF
          })
        }
      }
      return SF
    }

    function uF(FF, WF) {
      WF.forEach(((WF, SF) => {
        const CF = `vp_${SF}_info`;
        FF.setFloat4(CF, WF.offset, WF.stride, WF.type, WF.normalized ? 1 : 0)
      }))
    }
  },
  38293: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      f: () => dF
    });
    var CF = SF(37972),
      AF = SF(35623),
      uF = SF(37974);
    let hF = (() => {
      var FF;
      let WF, SF, AF = [];
      return FF = class {
        static extractMinAndMaxIndexed(FF, WF, SF, CF, AF, uF) {
          for (let hF = SF; hF < SF + CF; hF++) {
            const SF = 3 * WF[hF],
              CF = FF[SF],
              bW = FF[SF + 1],
              dF = FF[SF + 2];
            AF.minimizeInPlaceFromFloats(CF, bW, dF), uF.maximizeInPlaceFromFloats(CF, bW, dF)
          }
        }
        static extractMinAndMax(FF, WF, SF, CF, AF, uF) {
          for (let hF = WF, bW = WF * CF; hF < WF + SF; hF++, bW += CF) {
            const WF = FF[bW],
              SF = FF[bW + 1],
              CF = FF[bW + 2];
            AF.minimizeInPlaceFromFloats(WF, SF, CF), uF.maximizeInPlaceFromFloats(WF, SF, CF)
          }
        }
      }, (() => {
        const hF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [uF.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], SF = [uF.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, CF.j)(FF, null, WF, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: FF => "extractMinAndMaxIndexed" in FF,
            get: FF => FF.extractMinAndMaxIndexed
          },
          metadata: hF
        }, null, AF), (0, CF.j)(FF, null, SF, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: FF => "extractMinAndMax" in FF,
            get: FF => FF.extractMinAndMax
          },
          metadata: hF
        }, null, AF), hF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hF
        }), (0, CF.k)(FF, AF)
      })(), FF
    })();

    function bW(FF, WF, SF, CF) {
      let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const bW = new AF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        dF = new AF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return hF.extractMinAndMaxIndexed(FF, WF, SF, CF, bW, dF), uF && (bW.x -= bW.x * uF.x + uF.y, bW.y -= bW.y * uF.x + uF.y, bW.z -= bW.z * uF.x + uF.y, dF.x += dF.x * uF.x + uF.y, dF.y += dF.y * uF.x + uF.y, dF.z += dF.z * uF.x + uF.y), {
        minimum: bW,
        maximum: dF
      }
    }

    function dF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        uF = arguments.length > 4 ? arguments[4] : void 0;
      const bW = new AF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        dF = new AF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return uF || (uF = 3), hF.extractMinAndMax(FF, WF, SF, uF, bW, dF), CF && (bW.x -= bW.x * CF.x + CF.y, bW.y -= bW.y * CF.x + CF.y, bW.z -= bW.z * CF.x + CF.y, dF.x += dF.x * CF.x + CF.y, dF.y += dF.y * CF.x + CF.y, dF.z += dF.z * CF.x + CF.y), {
        minimum: bW,
        maximum: dF
      }
    }
  },
  38269: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => RF
    });
    var CF, AF = SF(38109),
      uF = SF(38278),
      hF = SF(38281),
      bW = SF(38293),
      dF = SF(38301),
      PF = SF(37855);
    class RF {
      get materialDefines() {
        const FF = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof FF ? null : FF
      }
      set materialDefines(FF) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = FF
      }
      _getDrawWrapper(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        FF = FF ?? this._engine.currentRenderPassId;
        let SF = this._drawWrappers[FF];
        return !SF && WF && (this._drawWrappers[FF] = SF = new dF.e(this._mesh.OWF().sC())), SF
      }
      _removeDrawWrapper(FF) {
        let WF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[FF]?.dispose(WF), this._drawWrappers[FF] = void 0
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
      _setMainDrawWrapperOverride(FF) {
        this._mainDrawWrapperOverride = FF
      }
      setEffect(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AF = this._drawWrapper;
        AF.setEffect(FF, WF, CF), void 0 !== SF && (AF.materialContext = SF), FF || (AF.defines = null, AF.materialContext = void 0)
      }
      resetDrawCache(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== FF) return void this._removeDrawWrapper(FF, !0, WF);
          for (const FF of this._drawWrappers) FF?.dispose(WF)
        }
        this._drawWrappers = []
      }
      static AddToMesh(FF, WF, SF, CF, AF, uF, hF) {
        return new RF(FF, WF, SF, CF, AF, uF, hF, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(FF, WF, SF, CF, AF, uF, hF) {
        let bW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dF = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = FF, this.verticesStart = WF, this.verticesCount = SF, this.indexStart = CF, this.indexCount = AF, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = uF, this._renderingMesh = hF || uF, dF && uF.Om.push(this), this._engine = this._mesh.OWF().sC(), this.resetDrawCache(), this._trianglePlanes = [], this._id = uF.Om.length - 1, bW && (this.refreshBoundingInfo(), uF.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      JWF() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.JWF() : this._boundingInfo
      }
      setBoundingInfo(FF) {
        return this._boundingInfo = FF, this
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
        const FF = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return FF || this._renderingMesh
      }
      XC() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const WF = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!WF) return FF && this._mesh.OWF()._hasDefaultMaterial ? this._mesh.OWF().defaultMaterial : null;
        if (this._isMultiMaterial(WF)) {
          const FF = WF.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== FF && (this._currentMaterial = FF, this.resetDrawCache()), FF
        }
        return WF
      }
      _isMultiMaterial(FF) {
        return void 0 !== FF.getSubMaterial
      }
      refreshBoundingInfo() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (FF || (FF = this._renderingMesh.getVerticesData(AF.k.PositionKind)), !FF) return this._boundingInfo = this._mesh.JWF(), this;
        const WF = this._renderingMesh.yEF();
        let SF;
        if (0 === this.indexStart && this.indexCount === WF.length) {
          const FF = this._renderingMesh.JWF();
          SF = {
            minimum: FF.minimum.clone(),
            maximum: FF.maximum.clone()
          }
        } else SF = (0, bW.d)(FF, WF, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(SF.minimum, SF.maximum) : this._boundingInfo = new hF.b(SF.minimum, SF.maximum), this
      }
      _checkCollision(FF) {
        return this.JWF()._checkCollision(FF)
      }
      updateBoundingInfo(FF) {
        let WF = this.JWF();
        return WF || (this.refreshBoundingInfo(), WF = this.JWF()), WF && WF.update(FF), this
      }
      isInFrustum(FF) {
        const WF = this.JWF();
        return !!WF && WF.isInFrustum(FF, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(FF) {
        const WF = this.JWF();
        return !!WF && WF.isCompletelyInFrustum(FF)
      }
      render(FF) {
        return this._renderingMesh.render(this, FF, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(FF, WF) {
        if (!this._linesIndexBuffer) {
          const SF = 6 * Math.floor(this.indexCount / 3),
            CF = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(SF) : new Uint16Array(SF);
          let AF = 0;
          if (0 === FF.length)
            for (let FF = this.indexStart; FF < this.indexStart + this.indexCount; FF += 3) CF[AF++] = FF, CF[AF++] = FF + 1, CF[AF++] = FF + 1, CF[AF++] = FF + 2, CF[AF++] = FF + 2, CF[AF++] = FF;
          else
            for (let WF = this.indexStart; WF < this.indexStart + this.indexCount; WF += 3) CF[AF++] = FF[WF], CF[AF++] = FF[WF + 1], CF[AF++] = FF[WF + 1], CF[AF++] = FF[WF + 2], CF[AF++] = FF[WF + 2], CF[AF++] = FF[WF];
          this._linesIndexBuffer = WF.createIndexBuffer(CF), this._linesIndexCount = CF.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(FF) {
        const WF = this.JWF();
        return !!WF && FF.intersectsBox(WF.boundingBox)
      }
      intersects(FF, WF, SF, CF, AF) {
        const uF = this.XC();
        if (!uF) return null;
        let hF = 3,
          bW = !1;
        switch (uF.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            hF = 1, bW = !0
        }
        return 4 === uF.fillMode ? SF.length ? this._intersectLines(FF, WF, SF, this._mesh.intersectionThreshold, CF) : this._intersectUnIndexedLines(FF, WF, SF, this._mesh.intersectionThreshold, CF) : !SF.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(FF, WF, SF, CF, AF) : this._intersectTriangles(FF, WF, SF, hF, bW, CF, AF)
      }
      _intersectLines(FF, WF, SF, CF, AF) {
        let hF = null;
        for (let bW = this.indexStart; bW < this.indexStart + this.indexCount; bW += 2) {
          const dF = WF[SF[bW]],
            PF = WF[SF[bW + 1]],
            RF = FF.intersectionSegment(dF, PF, CF);
          if (!(RF < 0) && ((AF || !hF || RF < hF.distance) && (hF = new uF.d(null, null, RF), hF.faceId = bW / 2, AF))) break
        }
        return hF
      }
      _intersectUnIndexedLines(FF, WF, SF, CF, AF) {
        let hF = null;
        for (let bW = this.verticesStart; bW < this.verticesStart + this.verticesCount; bW += 2) {
          const SF = WF[bW],
            dF = WF[bW + 1],
            PF = FF.intersectionSegment(SF, dF, CF);
          if (!(PF < 0) && ((AF || !hF || PF < hF.distance) && (hF = new uF.d(null, null, PF), hF.faceId = bW / 2, AF))) break
        }
        return hF
      }
      _intersectTriangles(FF, WF, SF, CF, AF, uF, hF) {
        let bW = null,
          dF = -1;
        for (let PF = this.indexStart; PF < this.indexStart + this.indexCount - (3 - CF); PF += CF) {
          dF++;
          const CF = SF[PF],
            RF = SF[PF + 1],
            iW = SF[PF + 2];
          if (AF && 4294967295 === iW) {
            PF += 2;
            continue
          }
          const eF = WF[CF],
            EF = WF[RF],
            QF = WF[iW];
          if (!eF || !EF || !QF) continue;
          if (hF && !hF(eF, EF, QF, FF, CF, RF, iW)) continue;
          const rW = FF.intersectsTriangle(eF, EF, QF);
          if (rW) {
            if (rW.distance < 0) continue;
            if ((uF || !bW || rW.distance < bW.distance) && (bW = rW, bW.faceId = dF, uF)) break
          }
        }
        return bW
      }
      _intersectUnIndexedTriangles(FF, WF, SF, CF, AF) {
        let uF = null;
        for (let hF = this.verticesStart; hF < this.verticesStart + this.verticesCount; hF += 3) {
          const SF = WF[hF],
            bW = WF[hF + 1],
            dF = WF[hF + 2];
          if (AF && !AF(SF, bW, dF, FF, -1, -1, -1)) continue;
          const PF = FF.intersectsTriangle(SF, bW, dF);
          if (PF) {
            if (PF.distance < 0) continue;
            if ((CF || !uF || PF.distance < uF.distance) && (uF = PF, uF.faceId = hF / 3, CF)) break
          }
        }
        return uF
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(FF, WF) {
        const SF = new RF(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, FF, WF, !1);
        if (!this.IsGlobal) {
          const FF = this.JWF();
          if (!FF) return SF;
          SF._boundingInfo = new hF.b(FF.minimum, FF.maximum)
        }
        return SF
      }
      dispose() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.OWF().sC()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const WF = this._mesh.Om.indexOf(this);
        this._mesh.Om.splice(WF, 1), this.resetDrawCache(void 0, FF)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(FF, WF, SF, CF, AF) {
        let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = Number.MAX_VALUE,
          bW = -Number.MAX_VALUE;
        const dF = (AF || CF).yEF();
        for (let PF = WF; PF < WF + SF; PF++) {
          const FF = dF[PF];
          FF < hF && (hF = FF), FF > bW && (bW = FF)
        }
        return new RF(FF, hF, bW - hF + 1, WF, SF, CF, AF, uF)
      }
    }(CF = RF.prototype).projectToRef ?? (CF.projectToRef = (0, PF.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);