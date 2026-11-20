export const id = 252;
export const ids = [252];
export const modules = {
  39870: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu) {
        this.bu = uu, this.bv = Ru, this.distance = yu, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39886: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(36842),
      Ku = yu(36830),
      Qu = yu(36833);
    class mu {
      constructor(uu, Ru, yu) {
        this.vectors = (0, Eu.b)(8, Ku.p.Zero), this.center = Ku.p.Zero(), this.centerWorld = Ku.p.Zero(), this.extendSize = Ku.p.Zero(), this.extendSizeWorld = Ku.p.Zero(), this.directions = (0, Eu.b)(3, Ku.p.Zero), this.vectorsWorld = (0, Eu.b)(8, Ku.p.Zero), this.minimumWorld = Ku.p.Zero(), this.maximumWorld = Ku.p.Zero(), this.minimum = Ku.p.Zero(), this.maximum = Ku.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(uu, Ru, yu)
      }
      reConstruct(uu, Ru, yu) {
        const Eu = uu.x,
          Qu = uu.y,
          mu = uu.z,
          Ju = Ru.x,
          Nu = Ru.y,
          Xu = Ru.z,
          Vu = this.vectors;
        this.minimum.muu(Eu, Qu, mu), this.maximum.muu(Ju, Nu, Xu), Vu[0].muu(Eu, Qu, mu), Vu[1].muu(Ju, Nu, Xu), Vu[2].muu(Ju, Qu, mu), Vu[3].muu(Eu, Nu, mu), Vu[4].muu(Eu, Qu, Xu), Vu[5].muu(Ju, Nu, mu), Vu[6].muu(Eu, Nu, Xu), Vu[7].muu(Ju, Qu, Xu), Ru.addToRef(uu, this.center).scaleInPlace(.5), Ru.subtractToRef(uu, this.extendSize).scaleInPlace(.5), this._worldMatrix = yu || Ku.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(uu) {
        const Ru = mu._TmpVector3,
          yu = this.maximum.subtractToRef(this.minimum, Ru[0]),
          Eu = yu.length();
        yu.normalizeFromLength(Eu);
        const Ku = Eu * uu,
          Qu = yu.scaleInPlace(.5 * Ku),
          Ju = this.center.subtractToRef(Qu, Ru[1]),
          Nu = this.center.addToRef(Qu, Ru[2]);
        return this.reConstruct(Ju, Nu, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(uu) {
        const Ru = this.minimumWorld,
          yu = this.maximumWorld,
          Eu = this.directions,
          Qu = this.vectorsWorld,
          mu = this.vectors;
        if (uu.isIdentity()) {
          Ru.Oyu(this.minimum), yu.Oyu(this.maximum);
          for (let uu = 0; uu < 8; ++uu) Qu[uu].Oyu(mu[uu]);
          this.extendSizeWorld.Oyu(this.extendSize), this.centerWorld.Oyu(this.center)
        } else {
          Ru.e_(Number.MAX_VALUE), yu.e_(-Number.MAX_VALUE);
          for (let Eu = 0; Eu < 8; ++Eu) {
            const Ju = Qu[Eu];
            Ku.p.TransformCoordinatesToRef(mu[Eu], uu, Ju), Ru.minimizeInPlace(Ju), yu.maximizeInPlace(Ju)
          }
          yu.subtractToRef(Ru, this.extendSizeWorld).scaleInPlace(.5), yu.addToRef(Ru, this.centerWorld).scaleInPlace(.5)
        }
        Ku.p.FromArrayToRef(uu.m, 0, Eu[0]), Ku.p.FromArrayToRef(uu.m, 4, Eu[1]), Ku.p.FromArrayToRef(uu.m, 8, Eu[2]), this._worldMatrix = uu
      }
      isInFrustum(uu) {
        return mu.IsInFrustum(this.vectorsWorld, uu)
      }
      isCompletelyInFrustum(uu) {
        return mu.IsCompletelyInFrustum(this.vectorsWorld, uu)
      }
      intersectsPoint(uu) {
        const Ru = this.minimumWorld,
          yu = this.maximumWorld,
          Eu = Ru.x,
          Ku = Ru.y,
          mu = Ru.z,
          Ju = yu.x,
          Nu = yu.y,
          Xu = yu.z,
          Vu = uu.x,
          ru = uu.y,
          Bu = uu.z,
          xu = -Qu.d;
        return !(Ju - Vu < xu || xu > Vu - Eu) && (!(Nu - ru < xu || xu > ru - Ku) && !(Xu - Bu < xu || xu > Bu - mu))
      }
      intersectsSphere(uu) {
        return mu.IntersectsSphere(this.minimumWorld, this.maximumWorld, uu.centerWorld, uu.radiusWorld)
      }
      intersectsMinMax(uu, Ru) {
        const yu = this.minimumWorld,
          Eu = this.maximumWorld,
          Ku = yu.x,
          Qu = yu.y,
          mu = yu.z,
          Ju = Eu.x,
          Nu = Eu.y,
          Xu = Eu.z,
          Vu = uu.x,
          ru = uu.y,
          Bu = uu.z,
          xu = Ru.x,
          Su = Ru.y,
          pu = Ru.z;
        return !(Ju < Vu || Ku > xu) && (!(Nu < ru || Qu > Su) && !(Xu < Bu || mu > pu))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(uu, Ru) {
        return uu.intersectsMinMax(Ru.minimumWorld, Ru.maximumWorld)
      }
      static IntersectsSphere(uu, Ru, yu, Eu) {
        const Qu = mu._TmpVector3[0];
        Ku.p.ClampToRef(yu, uu, Ru, Qu);
        return Ku.p.DistanceSquared(yu, Qu) <= Eu * Eu
      }
      static IsCompletelyInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; ++yu) {
          const Eu = Ru[yu];
          for (let Ru = 0; Ru < 8; ++Ru)
            if (Eu.dotCoordinate(uu[Ru]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; ++yu) {
          let Eu = !0;
          const Ku = Ru[yu];
          for (let Ru = 0; Ru < 8; ++Ru)
            if (Ku.dotCoordinate(uu[Ru]) >= 0) {
              Eu = !1;
              break
            } if (Eu) return !1
        }
        return !0
      }
    }
    mu._TmpVector3 = (0, Eu.b)(3, Ku.p.Zero)
  },
  39877: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ru
    });
    var Eu = yu(36842),
      Ku = yu(36830),
      Qu = yu(39886);
    class mu {
      constructor(uu, Ru, yu) {
        this.center = Ku.p.Zero(), this.centerWorld = Ku.p.Zero(), this.minimum = Ku.p.Zero(), this.maximum = Ku.p.Zero(), this.reConstruct(uu, Ru, yu)
      }
      reConstruct(uu, Ru, yu) {
        this.minimum.Oyu(uu), this.maximum.Oyu(Ru);
        const Eu = Ku.p.Distance(uu, Ru);
        Ru.addToRef(uu, this.center).scaleInPlace(.5), this.radius = .5 * Eu, this._update(yu || Ku.d.IdentityReadOnly)
      }
      scale(uu) {
        const Ru = mu._TmpVector3,
          yu = this.maximum.subtractToRef(this.minimum, Ru[0]),
          Eu = yu.length();
        yu.normalizeFromLength(Eu);
        const Ku = Eu * uu,
          Qu = yu.scaleInPlace(.5 * Ku),
          Ju = this.center.subtractToRef(Qu, Ru[1]),
          Nu = this.center.addToRef(Qu, Ru[2]);
        return this.reConstruct(Ju, Nu, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(uu) {
        if (uu.isIdentity()) this.centerWorld.Oyu(this.center), this.radiusWorld = this.radius;
        else {
          Ku.p.TransformCoordinatesToRef(this.center, uu, this.centerWorld);
          const Ru = mu._TmpVector3[0];
          Ku.p.TransformNormalFromFloatsToRef(1, 1, 1, uu, Ru), this.radiusWorld = Math.max(Math.abs(Ru.x), Math.abs(Ru.y), Math.abs(Ru.z)) * this.radius
        }
      }
      isInFrustum(uu) {
        const Ru = this.centerWorld,
          yu = this.radiusWorld;
        for (let Eu = 0; Eu < 6; Eu++)
          if (uu[Eu].dotCoordinate(Ru) <= -yu) return !1;
        return !0
      }
      isCenterInFrustum(uu) {
        const Ru = this.centerWorld;
        for (let yu = 0; yu < 6; yu++)
          if (uu[yu].dotCoordinate(Ru) < 0) return !1;
        return !0
      }
      intersectsPoint(uu) {
        const Ru = Ku.p.DistanceSquared(this.centerWorld, uu);
        return !(this.radiusWorld * this.radiusWorld < Ru)
      }
      static Intersects(uu, Ru) {
        const yu = Ku.p.DistanceSquared(uu.centerWorld, Ru.centerWorld),
          Eu = uu.radiusWorld + Ru.radiusWorld;
        return !(Eu * Eu < yu)
      }
      static CreateFromCenterAndRadius(uu, Ru, yu) {
        this._TmpVector3[0].Oyu(uu), this._TmpVector3[1].muu(0, 0, Ru), this._TmpVector3[2].Oyu(uu), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].oEu(this._TmpVector3[1]);
        const Eu = new mu(this._TmpVector3[0], this._TmpVector3[2]);
        return Eu._worldMatrix = yu || Ku.d.Identity(), Eu
      }
    }
    mu._TmpVector3 = (0, Eu.b)(3, Ku.p.Zero);
    const Ju = {
        min: 0,
        max: 0
      },
      Nu = {
        min: 0,
        max: 0
      },
      Xu = (uu, Ru, yu) => {
        const Eu = Ku.p.Dot(Ru.centerWorld, uu),
          Qu = Math.abs(Ku.p.Dot(Ru.directions[0], uu)) * Ru.extendSize.x + Math.abs(Ku.p.Dot(Ru.directions[1], uu)) * Ru.extendSize.y + Math.abs(Ku.p.Dot(Ru.directions[2], uu)) * Ru.extendSize.z;
        yu.min = Eu - Qu, yu.max = Eu + Qu
      },
      Vu = (uu, Ru, yu) => (Xu(uu, Ru, Ju), Xu(uu, yu, Nu), !(Ju.min > Nu.max || Nu.min > Ju.max));
    class ru {
      constructor(uu, Ru, yu) {
        this._isLocked = !1, this.boundingBox = new Qu.e(uu, Ru, yu), this.aEu = new mu(uu, Ru, yu)
      }
      reConstruct(uu, Ru, yu) {
        this.boundingBox.reConstruct(uu, Ru, yu), this.aEu.reConstruct(uu, Ru, yu)
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
      set isLocked(uu) {
        this._isLocked = uu
      }
      update(uu) {
        this._isLocked || (this.boundingBox._update(uu), this.aEu._update(uu))
      }
      centerOn(uu, Ru) {
        const yu = ru._TmpVector3[0].Oyu(uu).oEu(Ru),
          Eu = ru._TmpVector3[1].Oyu(uu).addInPlace(Ru);
        return this.boundingBox.reConstruct(yu, Eu, this.boundingBox.getWorldMatrix()), this.aEu.reConstruct(yu, Eu, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(uu) {
        const Ru = Ku.p.Minimize(this.minimum, uu),
          yu = Ku.p.Maximize(this.maximum, uu);
        return this.reConstruct(Ru, yu, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(uu) {
        const Ru = Ku.m.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Ru);
        const yu = Ku.m.MS[0];
        return Ku.p.TransformCoordinatesToRef(uu.boundingBox.minimumWorld, Ru, yu), this.encapsulate(yu), Ku.p.TransformCoordinatesToRef(uu.boundingBox.maximumWorld, Ru, yu), this.encapsulate(yu), this
      }
      scale(uu) {
        return this.boundingBox.scale(uu), this.aEu.scale(uu), this
      }
      isInFrustum(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Ru || 3 === Ru) && this.aEu.isCenterInFrustum(uu)) return !0;
        if (!this.aEu.isInFrustum(uu)) return !1;
        return !(1 !== Ru && 3 !== Ru) || this.boundingBox.isInFrustum(uu)
      }
      get diagonalLength() {
        const uu = this.boundingBox;
        return uu.maximumWorld.subtractToRef(uu.minimumWorld, ru._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(uu) {
        return this.boundingBox.isCompletelyInFrustum(uu)
      }
      _checkCollision(uu) {
        return uu._canDoCollision(this.aEu.centerWorld, this.aEu.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(uu) {
        return !!this.aEu.centerWorld && (!!this.aEu.intersectsPoint(uu) && !!this.boundingBox.intersectsPoint(uu))
      }
      intersects(uu, Ru) {
        if (!mu.Intersects(this.aEu, uu.aEu)) return !1;
        if (!Qu.e.Intersects(this.boundingBox, uu.boundingBox)) return !1;
        if (!Ru) return !0;
        const yu = this.boundingBox,
          Eu = uu.boundingBox;
        return !!Vu(yu.directions[0], yu, Eu) && (!!Vu(yu.directions[1], yu, Eu) && (!!Vu(yu.directions[2], yu, Eu) && (!!Vu(Eu.directions[0], yu, Eu) && (!!Vu(Eu.directions[1], yu, Eu) && (!!Vu(Eu.directions[2], yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[0], Eu.directions[0]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[0], Eu.directions[1]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[0], Eu.directions[2]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[1], Eu.directions[0]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[1], Eu.directions[1]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[1], Eu.directions[2]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[2], Eu.directions[0]), yu, Eu) && (!!Vu(Ku.p.Cross(yu.directions[2], Eu.directions[1]), yu, Eu) && !!Vu(Ku.p.Cross(yu.directions[2], Eu.directions[2]), yu, Eu))))))))))))))
      }
    }
    ru._TmpVector3 = (0, Eu.b)(2, Ku.p.Zero)
  },
  39913: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      f: () => Nu,
      i: () => Ju,
      k: () => mu
    });
    var Eu = yu(39717),
      Ku = yu(36830);

    function Qu(uu) {
      -1 === uu.indexOf("vClipPlane") && uu.push("vClipPlane"), -1 === uu.indexOf("vClipPlane2") && uu.push("vClipPlane2"), -1 === uu.indexOf("vClipPlane3") && uu.push("vClipPlane3"), -1 === uu.indexOf("vClipPlane4") && uu.push("vClipPlane4"), -1 === uu.indexOf("vClipPlane5") && uu.push("vClipPlane5"), -1 === uu.indexOf("vClipPlane6") && uu.push("vClipPlane6")
    }

    function mu(uu, Ru, yu) {
      const Eu = !!(uu.clipPlane ?? Ru.clipPlane),
        Ku = !!(uu.clipPlane2 ?? Ru.clipPlane2),
        Qu = !!(uu.clipPlane3 ?? Ru.clipPlane3),
        mu = !!(uu.clipPlane4 ?? Ru.clipPlane4),
        Ju = !!(uu.clipPlane5 ?? Ru.clipPlane5),
        Nu = !!(uu.clipPlane6 ?? Ru.clipPlane6);
      Eu && yu.push("#define CLIPPLANE"), Ku && yu.push("#define CLIPPLANE2"), Qu && yu.push("#define CLIPPLANE3"), mu && yu.push("#define CLIPPLANE4"), Ju && yu.push("#define CLIPPLANE5"), Nu && yu.push("#define CLIPPLANE6")
    }

    function Ju(uu, Ru, yu) {
      let Eu = !1;
      const Ku = !!(uu.clipPlane ?? Ru.clipPlane),
        Qu = !!(uu.clipPlane2 ?? Ru.clipPlane2),
        mu = !!(uu.clipPlane3 ?? Ru.clipPlane3),
        Ju = !!(uu.clipPlane4 ?? Ru.clipPlane4),
        Nu = !!(uu.clipPlane5 ?? Ru.clipPlane5),
        Xu = !!(uu.clipPlane6 ?? Ru.clipPlane6);
      return yu.CLIPPLANE !== Ku && (yu.CLIPPLANE = Ku, Eu = !0), yu.CLIPPLANE2 !== Qu && (yu.CLIPPLANE2 = Qu, Eu = !0), yu.CLIPPLANE3 !== mu && (yu.CLIPPLANE3 = mu, Eu = !0), yu.CLIPPLANE4 !== Ju && (yu.CLIPPLANE4 = Ju, Eu = !0), yu.CLIPPLANE5 !== Nu && (yu.CLIPPLANE5 = Nu, Eu = !0), yu.CLIPPLANE6 !== Xu && (yu.CLIPPLANE6 = Xu, Eu = !0), Eu
    }

    function Nu(uu, Ru, yu) {
      let Eu = Ru.clipPlane ?? yu.clipPlane;
      Xu(uu, "vClipPlane", Eu), Eu = Ru.clipPlane2 ?? yu.clipPlane2, Xu(uu, "vClipPlane2", Eu), Eu = Ru.clipPlane3 ?? yu.clipPlane3, Xu(uu, "vClipPlane3", Eu), Eu = Ru.clipPlane4 ?? yu.clipPlane4, Xu(uu, "vClipPlane4", Eu), Eu = Ru.clipPlane5 ?? yu.clipPlane5, Xu(uu, "vClipPlane5", Eu), Eu = Ru.clipPlane6 ?? yu.clipPlane6, Xu(uu, "vClipPlane6", Eu)
    }

    function Xu(uu, Ru, yu) {
      if (yu) {
        const Qu = Eu.c.lD()?.floatingOriginOffset || Ku.p.ZeroReadOnly;
        uu.setFloat4(Ru, yu.normal.x, yu.normal.y, yu.normal.z, yu.d + Ku.p.Dot(yu.normal, Qu))
      }
    }
  },
  39931: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(uu, Ru) {
        this._defines[uu] || (uu < this._currentRank && (this._currentRank = uu), uu > this._maxRank && (this._maxRank = uu), this._defines[uu] = new Array), this._defines[uu].push(Ru)
      }
      addCPUSkinningFallback(uu, Ru) {
        this._mesh = Ru, uu < this._currentRank && (this._currentRank = uu), uu > this._maxRank && (this._maxRank = uu)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(uu, Ru) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, uu = uu.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Ru._bonesComputationForcedToCPU = !0;
          const yu = this._mesh.lD();
          for (let uu = 0; uu < yu.meshes.length; uu++) {
            const Eu = yu.meshes[uu];
            if (Eu.material) {
              if (Eu.computeBonesUsingShaders && 0 !== Eu.numBoneInfluencers)
                if (Eu.material.getEffect() === Ru) Eu.computeBonesUsingShaders = !1;
                else if (Eu.mC)
                for (const uu of Eu.mC) {
                  if (uu.effect === Ru) {
                    Eu.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && Eu.computeBonesUsingShaders && Eu.numBoneInfluencers > 0 && (Eu.computeBonesUsingShaders = !1)
          }
        } else {
          const Ru = this._defines[this._currentRank];
          if (Ru)
            for (let yu = 0; yu < Ru.length; yu++) uu = uu.replace("#define " + Ru[yu], "");
          this._currentRank++
        }
        return uu
      }
    }
  },
  39863: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ju
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39655),
      mu = yu(36858),
      Ju = yu(36851),
      Nu = yu(39866),
      Xu = yu(39693),
      Vu = yu(38448),
      ru = yu(37528),
      Bu = yu(39899),
      xu = yu(39582);
    let Su = (() => {
      var uu;
      let Ru, yu, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, Su, pu, Tu = [];
      return uu = class {
        constructor() {
          this._func = (0, Eu.l)(this, Tu), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(uu) {
          this._func = uu
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(uu) {
          this._backFunc = uu
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(uu) {
          this._funcRef = uu
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(uu) {
          this._funcMask = uu
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(uu) {
          this._opStencilFail = uu
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(uu) {
          this._opDepthFail = uu
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(uu) {
          this._opStencilDepthPass = uu
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(uu) {
          this._backOpStencilFail = uu
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(uu) {
          this._backOpDepthFail = uu
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(uu) {
          this._backOpStencilDepthPass = uu
        }
        get mask() {
          return this._mask
        }
        set mask(uu) {
          this._mask = uu
        }
        get enabled() {
          return this._enabled
        }
        set enabled(uu) {
          this._enabled = uu
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(uu) {
          xu.c.Clone((() => uu), this)
        }
        serialize() {
          return xu.c.Serialize(this)
        }
        parse(uu, Ru, yu) {
          xu.c.Parse((() => this), uu, Ru, yu)
        }
      }, (() => {
        const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], mu = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], Vu = [(0, Ku.K)()], ru = [(0, Ku.K)()], Bu = [(0, Ku.K)()], Su = [(0, Ku.K)()], pu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Ru, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: uu => "func" in uu,
            get: uu => uu.func
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, yu, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: uu => "backFunc" in uu,
            get: uu => uu.backFunc
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Qu, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: uu => "funcRef" in uu,
            get: uu => uu.funcRef
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, mu, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "funcMask" in uu,
            get: uu => uu.funcMask
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Ju, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "opStencilFail" in uu,
            get: uu => uu.opStencilFail
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Nu, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "opDepthFail" in uu,
            get: uu => uu.opDepthFail
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Xu, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: uu => "opStencilDepthPass" in uu,
            get: uu => uu.opStencilDepthPass
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Vu, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "backOpStencilFail" in uu,
            get: uu => uu.backOpStencilFail
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, ru, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "backOpDepthFail" in uu,
            get: uu => uu.backOpDepthFail
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Bu, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: uu => "backOpStencilDepthPass" in uu,
            get: uu => uu.backOpStencilDepthPass
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, Su, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: uu => "mask" in uu,
            get: uu => uu.mask
          },
          metadata: xu
        }, null, Tu), (0, Eu.h)(uu, null, pu, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "enabled" in uu,
            get: uu => uu.enabled
          },
          metadata: xu
        }, null, Tu), xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xu
        })
      })(), uu
    })();
    var pu = yu(39905),
      Tu = yu(39471),
      Wu = yu(39430);
    let ju = (() => {
      var uu;
      let Ru, yu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu, nu, su, tu, lu, gu, cu, Lu, zu, Fu, wu, Zu, hu, Pu, iu = [],
        Yu = [],
        ou = [],
        qu = [],
        Ou = [],
        vu = [],
        au = [],
        fu = [],
        uR = [],
        RR = [],
        yR = [],
        ER = [],
        KR = [],
        QR = [],
        mR = [],
        JR = [],
        NR = [],
        XR = [],
        VR = [],
        rR = [],
        BR = [],
        xR = [],
        SR = [],
        pR = [],
        TR = [],
        WR = [],
        jR = [],
        HR = [],
        dR = [],
        bR = [],
        CR = [],
        kR = [],
        eR = [],
        AR = [],
        DR = [],
        MR = [],
        IR = [],
        GR = [],
        UR = [],
        nR = [],
        sR = [],
        tR = [],
        lR = [],
        gR = [],
        cR = [],
        LR = [],
        zR = [],
        FR = [],
        wR = [],
        ZR = [],
        hR = [];
      return uu = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Ru) {
          this._useVertexPulling !== Ru && (this._useVertexPulling = Ru, this.Eyu(uu.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(uu) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(Ru) {
          if (this._alpha === Ru) return;
          const yu = this._alpha;
          this._alpha = Ru, 1 !== yu && 1 !== Ru || this.Eyu(uu.MiscDirtyFlag + uu.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Ru) {
          this._backFaceCulling !== Ru && (this._backFaceCulling = Ru, this.Eyu(uu.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Ru) {
          const yu = Math.max(0, Math.min(0 | Ru, 4));
          this._textureRepetitionMode !== yu && (this._textureRepetitionMode = yu, this.Eyu(uu.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Ru) {
          this._cullBackFaces !== Ru && (this._cullBackFaces = Ru, this.Eyu(uu.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(uu) {
          this._blockDirtyMechanism !== uu && (this._blockDirtyMechanism = uu, uu || this.markDirty())
        }
        atomicMaterialsUpdate(uu) {
          this.blockDirtyMechanism = !0;
          try {
            uu(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(uu) {
          this._onDisposeObserver && this.zD.remove(this._onDisposeObserver), this._onDisposeObserver = this.zD.add(uu)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new mu.b), this._onBindObservable
        }
        set onBind(uu) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(uu)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new mu.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new mu.b), this._onEffectCreatedObservable
        }
        set alphaMode(uu) {
          this._alphaMode[0] = uu
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[yu] !== Ru && (this._alphaMode[yu] = Ru, this.Eyu(uu.TextureDirtyFlag))
        }
        set needDepthPrePass(uu) {
          this._needDepthPrePass !== uu && (this._needDepthPrePass = uu, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(Ru) {
          this._fogEnabled !== Ru && (this._fogEnabled = Ru, this.Eyu(uu.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case uu.WireFrameFillMode:
            case uu.LineListDrawMode:
            case uu.LineLoopDrawMode:
            case uu.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(Ru) {
          this.fillMode = Ru ? uu.WireFrameFillMode : uu.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case uu.PointFillMode:
            case uu.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Ru) {
          this.fillMode = Ru ? uu.PointFillMode : uu.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Ru) {
          this._fillMode !== Ru && (this._fillMode = Ru, this.Eyu(uu.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(uu) {
          const Ru = this.lD().eS().getCaps().fragmentDepthSupported;
          uu && !Ru && Vu.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = uu && Ru, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(uu) {
          this._isVertexOutputInvariant !== uu && (this._isVertexOutputInvariant = uu, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(uu) {
          this._drawWrapper = uu
        }
        constructor(Ru, yu, Ku) {
          let Nu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, Eu.l)(this, iu), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, Eu.l)(this, Yu, void 0), this.uniqueId = ((0, Eu.l)(this, ou), (0, Eu.l)(this, qu, void 0)), this._loadedUniqueId = (0, Eu.l)(this, Ou), this.name = (0, Eu.l)(this, vu, void 0), this.metadata = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, null)), this._internalMetadata = (0, Eu.l)(this, uR), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, Eu.l)(this, RR, !1), this.checkReadyOnlyOnce = ((0, Eu.l)(this, yR), (0, Eu.l)(this, ER, !1)), this.state = ((0, Eu.l)(this, KR), (0, Eu.l)(this, QR, "")), this._alpha = ((0, Eu.l)(this, mR), (0, Eu.l)(this, JR, 1)), this.inspectableCustomProperties = (0, Eu.l)(this, NR), this._backFaceCulling = (0, Eu.l)(this, XR, !0), this._textureRepetitionMode = ((0, Eu.l)(this, VR), (0, Eu.l)(this, rR, 0)), this.textureRepetitionHexTilingParams = ((0, Eu.l)(this, BR), (0, Eu.l)(this, xR, [1, .6, 7, .5])), this._cullBackFaces = ((0, Eu.l)(this, SR), (0, Eu.l)(this, pR, !0)), this._blockDirtyMechanism = ((0, Eu.l)(this, TR), !1), this.sideOrientation = (0, Eu.l)(this, WR, null), this.onCompiled = ((0, Eu.l)(this, jR), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.zD = new mu.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, Eu.l)(this, HR, [2]), this._needDepthPrePass = ((0, Eu.l)(this, dR), (0, Eu.l)(this, bR, !1)), this.disableDepthWrite = ((0, Eu.l)(this, CR), (0, Eu.l)(this, kR, !1)), this.disableColorWrite = ((0, Eu.l)(this, eR), (0, Eu.l)(this, AR, !1)), this.forceDepthWrite = ((0, Eu.l)(this, DR), (0, Eu.l)(this, MR, !1)), this.depthFunction = ((0, Eu.l)(this, IR), (0, Eu.l)(this, GR, 0)), this.separateCullingPass = ((0, Eu.l)(this, UR), (0, Eu.l)(this, nR, !1)), this._fogEnabled = ((0, Eu.l)(this, sR), (0, Eu.l)(this, tR, !0)), this.pointSize = ((0, Eu.l)(this, lR), (0, Eu.l)(this, gR, 1)), this.zOffset = ((0, Eu.l)(this, cR), (0, Eu.l)(this, LR, 0)), this.zOffsetUnits = ((0, Eu.l)(this, zR), (0, Eu.l)(this, FR, 0)), this.clipPlane = (0, Eu.l)(this, wR), this.stencil = new Su, this._isVertexOutputInvariant = (0, Eu.l)(this, ZR, uu.ForceVertexOutputInvariant), this._materialContext = (0, Eu.l)(this, hR), this._useUBO = !1, this._fillMode = uu.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Ru;
          const Vu = yu || Ju.b.LastCreatedScene;
          Vu && (this._scene = Vu, this._dirtyCallbacks = {}, this._forceGLSL = Nu, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Ru || Qu.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.eS().createMaterialContext(), this._drawWrapper = new Bu.b(this._scene.eS(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Xu.c(this._scene.eS(), void 0, void 0, Ru), this._useUBO = this.lD().eS().supportsUniformBuffers, this._createUniformBuffer(), Ku || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), uu.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const uu = this.lD().eS();
          this._uniformBuffer?.dispose(), uu.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Xu.c(uu, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Xu.c(this._scene.eS(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(uu) {
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
        isReady(uu, Ru) {
          return !0
        }
        isReadyForSubMesh(uu, Ru, yu) {
          const Eu = Ru.materialDefines;
          return !!Eu && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Eu, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        lD() {
          return this._scene
        }
        _getEffectiveOrientation(uu) {
          return null !== this.sideOrientation ? this.sideOrientation : uu.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(uu) {
          this._transparencyMode = uu
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === uu.MATERIAL_ALPHABLEND || this._transparencyMode === uu.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === uu.MATERIAL_ALPHATEST || this._transparencyMode === uu.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === uu.MATERIAL_OPAQUE || this._transparencyMode === uu.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(uu) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : uu.visibility < 1 || !this._disableAlphaBlending && (uu.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(uu) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(uu) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const yu = this.lD().meshes;
          for (const uu of yu)
            if (uu.mC)
              for (const yu of uu.mC)
                if (yu.nS() === this)
                  for (const uu of yu._drawWrappers) uu && this._materialContext === uu.materialContext && (uu._wasPreviouslyReady = !1, uu._wasPreviouslyUsingInstances = null, uu._forceRebindOnNextCall = Ru);
          Ru && this.Eyu(uu.AllDirtyFlag)
        }
        _preBind(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Eu = this._scene.eS(),
            Ku = (null == yu ? this.sideOrientation : yu) === uu.ClockWiseSideOrientation,
            Qu = Ru || this._getDrawWrapper();
          return (0, Tu.c)(Qu) && Qu.materialContext && (Qu.materialContext.useVertexPulling = this.useVertexPulling), Eu.enableEffect(Qu), Eu.setState(this.backFaceCulling, this.zOffset, !1, Ku, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Ku
        }
        bind(uu, Ru) {}
        buildUniformLayout() {
          const uu = this._uniformBuffer;
          this._eventInfo.ubo = uu, this._callbackPluginEventGeneric(8, this._eventInfo), uu.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(uu, Ru, yu) {
          const Eu = yu._drawWrapper;
          this._eventInfo.subMesh = yu, this._callbackPluginEventBindForSubMesh(this._eventInfo), Eu._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(uu) {}
        bindView(uu) {
          this._useUBO ? this._needToBindSceneUbo = !0 : uu.setMatrix("view", this.lD().getViewMatrix())
        }
        bindViewProjection(uu) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (uu.setMatrix("viewProjection", this.lD().getTransformMatrix()), uu.setMatrix("projection", this.lD().getProjectionMatrix()), uu.setMatrix("inverseProjection", this.lD().getInverseProjectionMatrix()))
        }
        bindEyePosition(uu, Ru) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(uu, Ru)
        }
        _afterBind(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Ru && (this._needToBindSceneUbo = !1, (0, pu.C)(Ru, this.lD().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = uu ? uu.visibility : 1, this._onBindObservable && uu && this._onBindObservable.notifyObservers(uu), this.disableDepthWrite) {
            const uu = this._scene.eS();
            this._cachedDepthWriteState = uu.getDepthWrite(), uu.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const uu = this._scene.eS();
            this._cachedColorWriteState = uu.getColorWrite(), uu.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const uu = this._scene.eS();
            this._cachedDepthFunctionState = uu.getDepthFunction() || 0, uu.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.eS().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.eS().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.eS().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(uu) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = uu, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(uu) {
          return null
        }
        _clonePlugins(Ru, yu) {
          const Eu = {};
          if (this._serializePlugins(Eu), uu._ParsePlugins(Eu, Ru, this._scene, yu), this.pluginManager)
            for (const uu of this.pluginManager._plugins) {
              const yu = Ru.pluginManager.getPlugin(uu.name);
              yu && uu.copyTo(yu)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const uu = [];
            for (const Ru in this.meshMap) {
              const yu = this.meshMap[Ru];
              yu && uu.push(yu)
            }
            return uu
          }
          return this._scene.meshes.filter((uu => uu.material === this))
        }
        forceCompilation(uu, Ru, yu, Eu) {
          const Ku = {
              clipPlane: !1,
              useInstances: !1,
              ...yu
            },
            Qu = this.lD(),
            mu = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Ju = () => {
            if (!this._scene || !this._scene.eS()) return;
            const yu = Qu.clipPlane;
            if (Ku.clipPlane && (Qu.clipPlane = new ru.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let yu = !0,
                Qu = null;
              if (uu.mC) {
                const Ru = new Nu.c(0, 0, 0, 0, 0, uu, void 0, !1, !1);
                Ru.materialDefines && (Ru.materialDefines._renderId = -1), this.isReadyForSubMesh(uu, Ru, Ku.useInstances) || (Ru.effect && Ru.effect.getCompilationError() && Ru.effect.allFallbacksProcessed() ? Qu = Ru.effect.getCompilationError() : (yu = !1, setTimeout(Ju, 16)))
              }
              yu && (this.allowShaderHotSwapping = mu, Qu && Eu && Eu(Qu), Ru && Ru(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = mu, Ru && Ru(this)) : setTimeout(Ju, 16);
            Ku.clipPlane && (Qu.clipPlane = yu)
          };
          Ju()
        }
        async forceCompilationAsync(uu, Ru) {
          return await new Promise(((yu, Eu) => {
            this.forceCompilation(uu, (() => {
              yu()
            }), Ru, (uu => {
              Eu(uu)
            }))
          }))
        }
        Eyu(Ru) {
          this.lD().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (uu._DirtyCallbackArray.length = 0, Ru & uu.ImageProcessingDirtyFlag && uu._DirtyCallbackArray.push(uu._ImageProcessingDirtyCallBack), Ru & uu.TextureDirtyFlag && uu._DirtyCallbackArray.push(uu._TextureDirtyCallBack), Ru & uu.LightDirtyFlag && uu._DirtyCallbackArray.push(uu._LightsDirtyCallBack), Ru & uu.FresnelDirtyFlag && uu._DirtyCallbackArray.push(uu._FresnelDirtyCallBack), Ru & uu.AttributesDirtyFlag && uu._DirtyCallbackArray.push(uu._AttributeDirtyCallBack), Ru & uu.MiscDirtyFlag && uu._DirtyCallbackArray.push(uu._MiscDirtyCallBack), Ru & uu.PrePassDirtyFlag && uu._DirtyCallbackArray.push(uu._PrePassDirtyCallBack), uu._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(uu._RunDirtyCallBacks), this.lD().resetCachedMaterial())
        }
        resetDrawCache() {
          const uu = this.lD().meshes;
          for (const Ru of uu)
            if (Ru.mC)
              for (const uu of Ru.mC) uu.nS() === this && uu.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(uu) {
          const Ru = this.lD();
          if (Ru.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const yu = Ru.meshes;
          for (const Eu of yu)
            if (Eu.mC)
              for (const yu of Eu.mC) {
                if ((yu.nS() || (Ru._hasDefaultMaterial ? Ru.defaultMaterial : null)) === this)
                  for (const Ru of yu._drawWrappers) Ru && Ru.defines && Ru.defines.markAllAsDirty && this._materialContext === Ru.materialContext && uu(Ru.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.lD().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const uu = this.lD().enablePrePassRenderer();
          uu && uu.Eyu()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(uu._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(uu._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(uu._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(uu._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(uu._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(uu._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(uu._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(uu._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(uu._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(uu._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const uu = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.zD.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(uu)
            }))
          }
        }
        setPrePassRenderer(uu) {
          return !1
        }
        dispose(uu, Ru, yu) {
          const Eu = this.lD();
          if (Eu.stopAnimation(this), Eu.freeProcessedMaterials(), Eu.removeMaterial(this), this._eventInfo.forceDisposeTextures = Ru, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const uu = this._parentContainer.materials.indexOf(this);
            uu > -1 && this._parentContainer.materials.splice(uu, 1), this._parentContainer = null
          }
          if (!0 !== yu)
            if (this.meshMap)
              for (const Ku in this.meshMap) {
                const uu = this.meshMap[Ku];
                this._disposeMeshResources(uu)
              } else {
                const uu = Eu.meshes;
                for (const Ru of uu) this._disposeMeshResources(Ru)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.zD.notifyObservers(this), this.zD.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(uu) {
          if (!uu) return;
          const Ru = uu.geometry,
            yu = uu._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (uu.mC && yu)
              for (const Eu of uu.mC) {
                const uu = Eu._drawWrappers;
                for (let Ku = 0; Ku < uu.length; Ku++) {
                  const Qu = uu[Ku]?.effect;
                  if (!Qu) continue;
                  yu[Ku] === this && (Ru?._releaseVertexArrayObject(Qu), Eu._removeDrawWrapper(Ku, !0, !0))
                }
              }
          } else Ru?._releaseVertexArrayObject(this._drawWrapper.effect);
          uu.material !== this || uu.dKu || (uu.material = null)
        }
        serialize() {
          const uu = xu.c.Serialize(this);
          return uu.stencil = this.stencil.serialize(), uu.uniqueId = this.uniqueId, this._serializePlugins(uu), uu
        }
        _serializePlugins(uu) {
          if (uu.plugins = {}, this.pluginManager)
            for (const Ru of this.pluginManager._plugins) Ru.doNotSerialize || (uu.plugins[Ru.getClassName()] = Ru.serialize())
        }
        static ParseAlphaMode(uu, Ru) {
          void 0 !== uu._alphaMode ? Ru._alphaMode = Array.isArray(uu._alphaMode) ? [...uu._alphaMode] : [uu._alphaMode] : void 0 !== uu.alphaMode ? Ru._alphaMode = Array.isArray(uu.alphaMode) ? [...uu.alphaMode] : [uu.alphaMode] : Ru._alphaMode = [2]
        }
        static Parse(Ru, yu, Eu) {
          if (Ru.customType) {
            if ("BABYLON.PBRMaterial" === Ru.customType && Ru.overloadedAlbedo && (Ru.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Vu.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Ru.customType = "BABYLON.StandardMaterial";
          const Ku = Qu.i.Instantiate(Ru.customType).Parse(Ru, yu, Eu);
          return Ku._loadedUniqueId = Ru.uniqueId, uu.ParseAlphaMode(Ru, Ku), Ku
        }
        static _ParsePlugins(uu, Ru, yu, Eu) {
          if (uu.plugins)
            for (const Ku in uu.plugins) {
              const mu = uu.plugins[Ku];
              let Ju = Ru.pluginManager?.getPlugin(mu.name);
              if (!Ju) {
                const uu = Qu.i.Instantiate("BABYLON." + Ku);
                uu && (Ju = new uu(Ru))
              }
              Ju?.parse(mu, yu, Eu)
            }
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Wu = [(0, Ku.K)()], ju = [(0, Ku.K)()], Hu = [(0, Ku.K)()], du = [(0, Ku.K)()], bu = [(0, Ku.K)()], Cu = [(0, Ku.K)("alpha")], ku = [(0, Ku.K)("backFaceCulling")], eu = [(0, Ku.K)("textureRepetitionMode")], Au = [(0, Ku.K)("textureRepetitionHexTilingParams")], Du = [(0, Ku.K)("cullBackFaces")], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], Gu = [(0, Ku.K)()], Uu = [(0, Ku.K)()], nu = [(0, Ku.K)()], su = [(0, Ku.K)()], tu = [(0, Ku.K)()], lu = [(0, Ku.K)()], gu = [(0, Ku.K)("fogEnabled")], cu = [(0, Ku.K)()], Lu = [(0, Ku.K)()], zu = [(0, Ku.K)()], Fu = [(0, Ku.K)()], wu = [(0, Ku.K)()], Zu = [(0, Ku.K)()], hu = [(0, Ku.K)()], Pu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Fu, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: uu => "pointsCloud" in uu,
            get: uu => uu.pointsCloud
          },
          metadata: Qu
        }, null, iu), (0, Eu.h)(uu, null, wu, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "fillMode" in uu,
            get: uu => uu.fillMode
          },
          metadata: Qu
        }, null, iu), (0, Eu.h)(uu, null, Zu, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLogarithmicDepth" in uu,
            get: uu => uu.useLogarithmicDepth
          },
          metadata: Qu
        }, null, iu), (0, Eu.h)(uu, null, Pu, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "transparencyMode" in uu,
            get: uu => uu.transparencyMode
          },
          metadata: Qu
        }, null, iu), (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: uu => "id" in uu,
            get: uu => uu.id,
            set: (uu, Ru) => {
              uu.id = Ru
            }
          },
          metadata: Qu
        }, Yu, ou), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: uu => "uniqueId" in uu,
            get: uu => uu.uniqueId,
            set: (uu, Ru) => {
              uu.uniqueId = Ru
            }
          },
          metadata: Qu
        }, qu, Ou), (0, Eu.h)(null, null, Wu, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: uu => "name" in uu,
            get: uu => uu.name,
            set: (uu, Ru) => {
              uu.name = Ru
            }
          },
          metadata: Qu
        }, vu, au), (0, Eu.h)(null, null, ju, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: uu => "metadata" in uu,
            get: uu => uu.metadata,
            set: (uu, Ru) => {
              uu.metadata = Ru
            }
          },
          metadata: Qu
        }, fu, uR), (0, Eu.h)(null, null, Hu, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: uu => "checkReadyOnEveryCall" in uu,
            get: uu => uu.checkReadyOnEveryCall,
            set: (uu, Ru) => {
              uu.checkReadyOnEveryCall = Ru
            }
          },
          metadata: Qu
        }, RR, yR), (0, Eu.h)(null, null, du, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: uu => "checkReadyOnlyOnce" in uu,
            get: uu => uu.checkReadyOnlyOnce,
            set: (uu, Ru) => {
              uu.checkReadyOnlyOnce = Ru
            }
          },
          metadata: Qu
        }, ER, KR), (0, Eu.h)(null, null, bu, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: uu => "state" in uu,
            get: uu => uu.state,
            set: (uu, Ru) => {
              uu.state = Ru
            }
          },
          metadata: Qu
        }, QR, mR), (0, Eu.h)(null, null, Cu, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "_alpha" in uu,
            get: uu => uu._alpha,
            set: (uu, Ru) => {
              uu._alpha = Ru
            }
          },
          metadata: Qu
        }, JR, NR), (0, Eu.h)(null, null, ku, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: uu => "_backFaceCulling" in uu,
            get: uu => uu._backFaceCulling,
            set: (uu, Ru) => {
              uu._backFaceCulling = Ru
            }
          },
          metadata: Qu
        }, XR, VR), (0, Eu.h)(null, null, eu, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_textureRepetitionMode" in uu,
            get: uu => uu._textureRepetitionMode,
            set: (uu, Ru) => {
              uu._textureRepetitionMode = Ru
            }
          },
          metadata: Qu
        }, rR, BR), (0, Eu.h)(null, null, Au, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: uu => "textureRepetitionHexTilingParams" in uu,
            get: uu => uu.textureRepetitionHexTilingParams,
            set: (uu, Ru) => {
              uu.textureRepetitionHexTilingParams = Ru
            }
          },
          metadata: Qu
        }, xR, SR), (0, Eu.h)(null, null, Du, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: uu => "_cullBackFaces" in uu,
            get: uu => uu._cullBackFaces,
            set: (uu, Ru) => {
              uu._cullBackFaces = Ru
            }
          },
          metadata: Qu
        }, pR, TR), (0, Eu.h)(null, null, Mu, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: uu => "sideOrientation" in uu,
            get: uu => uu.sideOrientation,
            set: (uu, Ru) => {
              uu.sideOrientation = Ru
            }
          },
          metadata: Qu
        }, WR, jR), (0, Eu.h)(null, null, Iu, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_alphaMode" in uu,
            get: uu => uu._alphaMode,
            set: (uu, Ru) => {
              uu._alphaMode = Ru
            }
          },
          metadata: Qu
        }, HR, dR), (0, Eu.h)(null, null, Gu, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: uu => "_needDepthPrePass" in uu,
            get: uu => uu._needDepthPrePass,
            set: (uu, Ru) => {
              uu._needDepthPrePass = Ru
            }
          },
          metadata: Qu
        }, bR, CR), (0, Eu.h)(null, null, Uu, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableDepthWrite" in uu,
            get: uu => uu.disableDepthWrite,
            set: (uu, Ru) => {
              uu.disableDepthWrite = Ru
            }
          },
          metadata: Qu
        }, kR, eR), (0, Eu.h)(null, null, nu, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableColorWrite" in uu,
            get: uu => uu.disableColorWrite,
            set: (uu, Ru) => {
              uu.disableColorWrite = Ru
            }
          },
          metadata: Qu
        }, AR, DR), (0, Eu.h)(null, null, su, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceDepthWrite" in uu,
            get: uu => uu.forceDepthWrite,
            set: (uu, Ru) => {
              uu.forceDepthWrite = Ru
            }
          },
          metadata: Qu
        }, MR, IR), (0, Eu.h)(null, null, tu, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: uu => "depthFunction" in uu,
            get: uu => uu.depthFunction,
            set: (uu, Ru) => {
              uu.depthFunction = Ru
            }
          },
          metadata: Qu
        }, GR, UR), (0, Eu.h)(null, null, lu, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: uu => "separateCullingPass" in uu,
            get: uu => uu.separateCullingPass,
            set: (uu, Ru) => {
              uu.separateCullingPass = Ru
            }
          },
          metadata: Qu
        }, nR, sR), (0, Eu.h)(null, null, gu, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "_fogEnabled" in uu,
            get: uu => uu._fogEnabled,
            set: (uu, Ru) => {
              uu._fogEnabled = Ru
            }
          },
          metadata: Qu
        }, tR, lR), (0, Eu.h)(null, null, cu, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: uu => "pointSize" in uu,
            get: uu => uu.pointSize,
            set: (uu, Ru) => {
              uu.pointSize = Ru
            }
          },
          metadata: Qu
        }, gR, cR), (0, Eu.h)(null, null, Lu, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: uu => "zOffset" in uu,
            get: uu => uu.zOffset,
            set: (uu, Ru) => {
              uu.zOffset = Ru
            }
          },
          metadata: Qu
        }, LR, zR), (0, Eu.h)(null, null, zu, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: uu => "zOffsetUnits" in uu,
            get: uu => uu.zOffsetUnits,
            set: (uu, Ru) => {
              uu.zOffsetUnits = Ru
            }
          },
          metadata: Qu
        }, FR, wR), (0, Eu.h)(null, null, hu, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: uu => "_isVertexOutputInvariant" in uu,
            get: uu => uu._isVertexOutputInvariant,
            set: (uu, Ru) => {
              uu._isVertexOutputInvariant = Ru
            }
          },
          metadata: Qu
        }, ZR, hR), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu.TriangleFillMode = 0, uu.WireFrameFillMode = 1, uu.PointFillMode = 2, uu.PointListDrawMode = 3, uu.LineListDrawMode = 4, uu.LineLoopDrawMode = 5, uu.LineStripDrawMode = 6, uu.TriangleStripDrawMode = 7, uu.TriangleFanDrawMode = 8, uu.ClockWiseSideOrientation = 0, uu.CounterClockWiseSideOrientation = 1, uu.ImageProcessingDirtyFlag = 64, uu.TextureDirtyFlag = 1, uu.LightDirtyFlag = 2, uu.FresnelDirtyFlag = 4, uu.AttributesDirtyFlag = 8, uu.MiscDirtyFlag = 16, uu.PrePassDirtyFlag = 32, uu.AllDirtyFlag = 127, uu.MATERIAL_OPAQUE = 0, uu.MATERIAL_ALPHATEST = 1, uu.MATERIAL_ALPHABLEND = 2, uu.MATERIAL_ALPHATESTANDBLEND = 3, uu.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, uu.MATERIAL_NORMALBLENDMETHOD_RNM = 1, uu.LIGHTFALLOFF_PHYSICAL = 0, uu.LIGHTFALLOFF_GLTF = 1, uu.LIGHTFALLOFF_STANDARD = 2, uu.OnEventObservable = new mu.b, uu.ForceVertexOutputInvariant = !1, uu._AllDirtyCallBack = uu => uu.markAllAsDirty(), uu._ImageProcessingDirtyCallBack = uu => uu.markAsImageProcessingDirty(), uu._TextureDirtyCallBack = uu => uu.markAsTexturesDirty(), uu._FresnelDirtyCallBack = uu => uu.markAsFresnelDirty(), uu._MiscDirtyCallBack = uu => uu.markAsMiscDirty(), uu._PrePassDirtyCallBack = uu => uu.markAsPrePassDirty(), uu._LightsDirtyCallBack = uu => uu.markAsLightDirty(), uu._AttributeDirtyCallBack = uu => uu.markAsAttributesDirty(), uu._FresnelAndMiscDirtyCallBack = Ru => {
        uu._FresnelDirtyCallBack(Ru), uu._MiscDirtyCallBack(Ru)
      }, uu._TextureAndMiscDirtyCallBack = Ru => {
        uu._TextureDirtyCallBack(Ru), uu._MiscDirtyCallBack(Ru)
      }, uu._DirtyCallbackArray = [], uu._RunDirtyCallBacks = Ru => {
        for (const yu of uu._DirtyCallbackArray) yu(Ru)
      }, uu
    })();
    Object.getOwnPropertyDescriptor(ju.prototype, "pluginManager") || Object.defineProperty(ju.prototype, "pluginManager", (0, Wu.e)("Material", "pluginManager"))
  },
  39921: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    var Eu = yu(39455);
    class Ku {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(uu) {
        this._DiffuseTextureEnabled !== uu && (this._DiffuseTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(uu) {
        this._BaseWeightTextureEnabled !== uu && (this._BaseWeightTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(uu) {
        this._BaseDiffuseRoughnessTextureEnabled !== uu && (this._BaseDiffuseRoughnessTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(uu) {
        this._DetailTextureEnabled !== uu && (this._DetailTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(uu) {
        this._DecalMapEnabled !== uu && (this._DecalMapEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(uu) {
        this._AmbientTextureEnabled !== uu && (this._AmbientTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(uu) {
        this._OpacityTextureEnabled !== uu && (this._OpacityTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(uu) {
        this._ReflectionTextureEnabled !== uu && (this._ReflectionTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(uu) {
        this._EmissiveTextureEnabled !== uu && (this._EmissiveTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(uu) {
        this._SpecularTextureEnabled !== uu && (this._SpecularTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(uu) {
        this._BumpTextureEnabled !== uu && (this._BumpTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(uu) {
        this._LightmapTextureEnabled !== uu && (this._LightmapTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(uu) {
        this._RefractionTextureEnabled !== uu && (this._RefractionTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(uu) {
        this._ColorGradingTextureEnabled !== uu && (this._ColorGradingTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(uu) {
        this._FresnelEnabled !== uu && (this._FresnelEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(uu) {
        this._ClearCoatTextureEnabled !== uu && (this._ClearCoatTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(uu) {
        this._ClearCoatBumpTextureEnabled !== uu && (this._ClearCoatBumpTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(uu) {
        this._ClearCoatTintTextureEnabled !== uu && (this._ClearCoatTintTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(uu) {
        this._SheenTextureEnabled !== uu && (this._SheenTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(uu) {
        this._AnisotropicTextureEnabled !== uu && (this._AnisotropicTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(uu) {
        this._ThicknessTextureEnabled !== uu && (this._ThicknessTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(uu) {
        this._RefractionIntensityTextureEnabled !== uu && (this._RefractionIntensityTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(uu) {
        this._TranslucencyIntensityTextureEnabled !== uu && (this._TranslucencyIntensityTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(uu) {
        this._TranslucencyColorTextureEnabled !== uu && (this._TranslucencyColorTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(uu) {
        this._IridescenceTextureEnabled !== uu && (this._IridescenceTextureEnabled = uu, Eu.d.MarkAllMaterialsAsDirty(1))
      }
    }
    Ku._DiffuseTextureEnabled = !0, Ku._BaseWeightTextureEnabled = !0, Ku._BaseDiffuseRoughnessTextureEnabled = !0, Ku._DetailTextureEnabled = !0, Ku._DecalMapEnabled = !0, Ku._AmbientTextureEnabled = !0, Ku._OpacityTextureEnabled = !0, Ku._ReflectionTextureEnabled = !0, Ku._EmissiveTextureEnabled = !0, Ku._SpecularTextureEnabled = !0, Ku._BumpTextureEnabled = !0, Ku._LightmapTextureEnabled = !0, Ku._RefractionTextureEnabled = !0, Ku._ColorGradingTextureEnabled = !0, Ku._FresnelEnabled = !0, Ku._ClearCoatTextureEnabled = !0, Ku._ClearCoatBumpTextureEnabled = !0, Ku._ClearCoatTintTextureEnabled = !0, Ku._SheenTextureEnabled = !0, Ku._AnisotropicTextureEnabled = !0, Ku._ThicknessTextureEnabled = !0, Ku._RefractionIntensityTextureEnabled = !0, Ku._TranslucencyIntensityTextureEnabled = !0, Ku._TranslucencyColorTextureEnabled = !0, Ku._IridescenceTextureEnabled = !0
  },
  39905: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Tu,
      Cb: () => Su,
      E: () => du,
      F: () => Gu,
      J: () => bu,
      K: () => Mu,
      L: () => Iu,
      P: () => xu,
      T: () => Bu,
      X: () => wu,
      _: () => gu,
      ab: () => tu,
      b: () => nu,
      eb: () => su,
      f: () => Cu,
      fb: () => Hu,
      g: () => ru,
      jb: () => Uu,
      k: () => Wu,
      mb: () => Zu,
      o: () => ju,
      qb: () => hu,
      r: () => Du,
      rb: () => Pu,
      u: () => Nu,
      ub: () => qu,
      xb: () => Yu,
      y: () => pu,
      zb: () => ou
    });
    var Eu = yu(38448),
      Ku = yu(36851),
      Qu = yu(39764),
      mu = yu(39913),
      Ju = yu(39921);

    function Nu(uu, Ru, yu) {
      if (!uu || uu.LOGARITHMICDEPTH || uu.indexOf && uu.indexOf("LOGARITHMICDEPTH") >= 0) {
        const uu = yu.activeCamera;
        1 === uu.mode && Eu.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Ru.setFloat("logarithmicDepthConstant", 2 / (Math.log(uu.maxZ + 1) / Math.LN2))
      }
    }
    const Xu = {
        r: 0,
        g: 0,
        b: 0
      },
      Vu = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function ru(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      yu && uu.fogEnabled && (!Ru || Ru.applyFog) && 0 !== uu.fogMode && (yu.setFloat4("vFogInfos", uu.fogMode, uu.fogStart, uu.fogEnd, uu.fogDensity), Eu ? (uu.fogColor.toLinearSpaceToRef(Xu, uu.eS().useExactSrgbConversions), yu.setColor3("vFogColor", Xu)) : yu.setColor3("vFogColor", uu.fogColor))
    }

    function Bu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
      const ru = uu.numMaxInfluencers || uu.numInfluencers;
      return ru <= 0 ? 0 : (Ru.push("#define MORPHTARGETS"), uu.hasPositions && Ru.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), uu.hasNormals && Ru.push("#define MORPHTARGETTEXTURE_HASNORMALS"), uu.hasTangents && Ru.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), uu.hasUVs && Ru.push("#define MORPHTARGETTEXTURE_HASUVS"), uu.hasUV2s && Ru.push("#define MORPHTARGETTEXTURE_HASUV2S"), uu.hasColors && Ru.push("#define MORPHTARGETTEXTURE_HASCOLORS"), uu.supportsPositions && Ku && Ru.push("#define MORPHTARGETS_POSITION"), uu.supportsNormals && Qu && Ru.push("#define MORPHTARGETS_NORMAL"), uu.supportsTangents && mu && Ru.push("#define MORPHTARGETS_TANGENT"), uu.supportsUVs && Ju && Ru.push("#define MORPHTARGETS_UV"), uu.supportsUV2s && Nu && Ru.push("#define MORPHTARGETS_UV2"), uu.supportsColors && Xu && Ru.push("#define MORPHTARGETS_COLOR"), Ru.push("#define NUM_MORPH_INFLUENCERS " + ru), uu.isUsingTextureForTargets && Ru.push("#define MORPHTARGETS_TEXTURE"), Vu.NUM_MORPH_INFLUENCERS = ru, Vu.NORMAL = Qu, Vu.TANGENT = mu, Vu.UV = Ju, Vu.UV2 = Nu, Vu.COLOR = Xu, xu(yu, Eu, Vu, Ku), ru)
    }

    function xu(uu, Ru, yu) {
      let Qu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const mu = yu.NUM_MORPH_INFLUENCERS;
      if (mu > 0 && Ku.b.LastCreatedEngine) {
        const Ju = Ku.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          Nu = Ru.morphTargetManager;
        if (Nu?.isUsingTextureForTargets) return;
        const Xu = Nu && Nu.supportsPositions && Qu,
          Vu = Nu && Nu.supportsNormals && yu.NORMAL,
          ru = Nu && Nu.supportsTangents && yu.TANGENT,
          Bu = Nu && Nu.supportsUVs && yu.UV1,
          xu = Nu && Nu.supportsUV2s && yu.UV2,
          Su = Nu && Nu.supportsColors && yu.VERTEXCOLOR;
        for (let yu = 0; yu < mu; yu++) Xu && uu.push("position" + yu), Vu && uu.push("normal" + yu), ru && uu.push("tangent" + yu), Bu && uu.push("uv_" + yu), xu && uu.push("uv2_" + yu), Su && uu.push("color" + yu), uu.length > Ju && Eu.e.Error("Cannot add more vertex attributes for mesh " + Ru.name)
      }
    }

    function Su(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      uu.push("world0"), uu.push("world1"), uu.push("world2"), uu.push("world3"), Ru && (uu.push("previousWorld0"), uu.push("previousWorld1"), uu.push("previousWorld2"), uu.push("previousWorld3"))
    }

    function pu(uu, Ru) {
      const yu = uu.morphTargetManager;
      uu && yu && Ru.setFloatArray("morphTargetInfluences", yu.influences)
    }

    function Tu(uu, Ru) {
      Ru.bindToEffect(uu, "Scene")
    }

    function Wu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Nu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Xu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Vu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ru = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        Bu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (uu.texturesEnabled && Ku && Ju.e.ReflectionTextureEnabled) {
        if (yu.v_("reflectionMatrix", Ku.getReflectionTextureMatrix()), yu.updateFloat2("vReflectionInfos", Ku.level * uu.iblIntensity, Bu), Nu && Ku.boundingBoxSize) {
          const uu = Ku;
          yu.updateVector3("vReflectionPosition", uu.boundingBoxPosition), yu.updateVector3("vReflectionSize", uu.boundingBoxSize)
        }
        if (Qu) {
          const uu = Ku.getSize().width;
          yu.updateFloat2("vReflectionFilteringInfo", uu, Math.log2(uu))
        }
        if (Vu && !Ru.USEIRRADIANCEMAP) {
          const uu = Ku.sphericalPolynomial;
          if (Ru.USESPHERICALFROMREFLECTIONMAP && uu)
            if (Ru.SPHERICAL_HARMONICS) {
              const Ru = uu.preScaledHarmonics;
              yu.updateVector3("vSphericalL00", Ru.l00), yu.updateVector3("vSphericalL1_1", Ru.l1_1), yu.updateVector3("vSphericalL10", Ru.l10), yu.updateVector3("vSphericalL11", Ru.l11), yu.updateVector3("vSphericalL2_2", Ru.l2_2), yu.updateVector3("vSphericalL2_1", Ru.l2_1), yu.updateVector3("vSphericalL20", Ru.l20), yu.updateVector3("vSphericalL21", Ru.l21), yu.updateVector3("vSphericalL22", Ru.l22)
            } else yu.updateFloat3("vSphericalX", uu.x.x, uu.x.y, uu.x.z), yu.updateFloat3("vSphericalY", uu.y.x, uu.y.y, uu.y.z), yu.updateFloat3("vSphericalZ", uu.z.x, uu.z.y, uu.z.z), yu.updateFloat3("vSphericalXX_ZZ", uu.xx.x - uu.zz.x, uu.xx.y - uu.zz.y, uu.xx.z - uu.zz.z), yu.updateFloat3("vSphericalYY_ZZ", uu.yy.x - uu.zz.x, uu.yy.y - uu.zz.y, uu.yy.z - uu.zz.z), yu.updateFloat3("vSphericalZZ", uu.zz.x, uu.zz.y, uu.zz.z), yu.updateFloat3("vSphericalXY", uu.xy.x, uu.xy.y, uu.xy.z), yu.updateFloat3("vSphericalYZ", uu.yz.x, uu.yz.y, uu.yz.z), yu.updateFloat3("vSphericalZX", uu.zx.x, uu.zx.y, uu.zx.z)
        } else Xu && Ru.USEIRRADIANCEMAP && Ru.USE_IRRADIANCE_DOMINANT_DIRECTION && Ku.irradianceTexture && yu.updateVector3("vReflectionDominantDirection", Ku.irradianceTexture._dominantDirection);
        mu && yu.updateFloat3("vReflectionMicrosurfaceInfos", Ku.getSize().width, Ku.lodGenerationScale, Ku.lodGenerationOffset)
      }
      ru && yu.updateColor3("vReflectionColor", Eu)
    }

    function ju(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (Eu && Ju.e.ReflectionTextureEnabled) {
        Ru.LODBASEDMICROSFURACE ? yu.setTexture("reflectionSampler", Eu) : (yu.setTexture("reflectionSampler", Eu._lodTextureMid || Eu), yu.setTexture("reflectionSamplerLow", Eu._lodTextureLow || Eu), yu.setTexture("reflectionSamplerHigh", Eu._lodTextureHigh || Eu)), Ru.USEIRRADIANCEMAP && yu.setTexture("irradianceSampler", Eu.irradianceTexture);
        const Qu = uu.iblCdfGenerator;
        Ku && Qu && yu.setTexture("icdfSampler", Qu.getIcdfTexture())
      }
    }

    function Hu(uu, Ru, yu) {
      Ru._needUVs = !0, Ru[yu] = !0, uu.optimizeUVAllocation && uu.getTextureMatrix().isIdentityAs3x2() ? (Ru[yu + "DIRECTUV"] = uu.coordinatesIndex + 1, Ru["MAINUV" + (uu.coordinatesIndex + 1)] = !0) : Ru[yu + "DIRECTUV"] = 0
    }

    function du(uu, Ru, yu) {
      const Eu = uu.getTextureMatrix();
      Ru.v_(yu + "Matrix", Eu)
    }

    function bu(uu, Ru, yu) {
      yu.BAKED_VERTEX_ANIMATION_TEXTURE && yu.INSTANCES && uu.push("bakedVertexAnimationSettingsInstanced")
    }

    function Cu(uu, Ru, yu) {
      var Eu;
      if (Ru && uu && (uu.computeBonesUsingShaders && Ru._bonesComputationForcedToCPU && (uu.computeBonesUsingShaders = !1), uu.useBones && uu.computeBonesUsingShaders && uu.skeleton)) {
        const Ku = uu.skeleton;
        if (Ku.isUsingTextureForMatrices && Ru.getUniformIndex("boneTextureInfo") > -1) {
          const yu = Ku.getTransformMatrixTexture(uu);
          Ru.setTexture("boneSampler", yu), Ru.setFloat2("boneTextureInfo", Ku._textureWidth, Ku._textureHeight)
        } else {
          const Qu = Ku.getTransformMatrices(uu);
          Qu && (Ru.setMatrices("mBones", Qu), yu && uu.lD().prePassRenderer && uu.lD().prePassRenderer.getIndex(2) && (yu.previousBones[uu.uniqueId] || (yu.previousBones[uu.uniqueId] = Qu.slice()), Ru.setMatrices("mPreviousBones", yu.previousBones[uu.uniqueId]), Eu = Qu, yu.previousBones[uu.uniqueId].set(Eu)))
        }
      }
    }

    function ku(uu, Ru, yu, Eu, Ku) {
      let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      uu._bindLight(Ru, yu, Eu, Ku, Qu)
    }
    const eu = 4,
      Au = new WeakMap;

    function Du(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Qu = Math.min(Ru.lightSources.length, Ku);
      for (let mu = 0; mu < Qu; mu++) {
        ku(Ru.lightSources[mu], mu, uu, yu, "boolean" === typeof Eu ? Eu : Eu.SPECULARTERM, Ru.receiveShadows)
      }
    }

    function Mu(uu, Ru, yu, Eu) {
      yu.NUM_BONE_INFLUENCERS > 0 && (Eu.addCPUSkinningFallback(0, Ru), uu.push("matricesIndices"), uu.push("matricesWeights"), yu.NUM_BONE_INFLUENCERS > 4 && (uu.push("matricesIndicesExtra"), uu.push("matricesWeightsExtra")))
    }

    function Iu(uu, Ru) {
      (Ru.INSTANCES || Ru.THIN_INSTANCES) && Su(uu, !!Ru.PREPASS_VELOCITY), Ru.INSTANCESCOLOR && uu.push("instanceColor")
    }

    function Gu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ku = 0;
      for (let Qu = 0; Qu < yu && uu["LIGHT" + Qu]; Qu++) Qu > 0 && (Ku = Eu + Qu, Ru.addFallback(Ku, "LIGHT" + Qu)), uu.SHADOWS || (uu["SHADOW" + Qu] && Ru.addFallback(Eu, "SHADOW" + Qu), uu["SHADOWPCF" + Qu] && Ru.addFallback(Eu, "SHADOWPCF" + Qu), uu["SHADOWPCSS" + Qu] && Ru.addFallback(Eu, "SHADOWPCSS" + Qu), uu["SHADOWPOISSON" + Qu] && Ru.addFallback(Eu, "SHADOWPOISSON" + Qu), uu["SHADOWESM" + Qu] && Ru.addFallback(Eu, "SHADOWESM" + Qu), uu["SHADOWCLOSEESM" + Qu] && Ru.addFallback(Eu, "SHADOWCLOSEESM" + Qu));
      return Ku
    }

    function Uu(uu, Ru, yu, Eu, Ku, Qu, mu) {
      let Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Xu = arguments.length > 9 ? arguments[9] : void 0,
        Vu = arguments.length > 10 ? arguments[10] : void 0;
      if (mu._areMiscDirty) {
        mu.LOGARITHMICDEPTH = yu, mu.POINTSIZE = Eu, mu.FOG = Ku && function(uu, Ru) {
          return Ru.fogEnabled && uu.applyFog && 0 !== Ru.fogMode
        }(uu, Ru), mu.NONUNIFORMSCALING = uu.nonUniformScaling, mu.ALPHATEST = Qu, mu.DECAL_AFTER_DETAIL = Ju, mu.USE_VERTEX_PULLING = Nu, mu.RIGHT_HANDED = Ru.useRightHandedSystem;
        const ru = Nu ? Xu?.geometry?.getIndexBuffer() : null,
          Bu = !!Xu && Xu.isUnIndexed;
        mu.VERTEX_PULLING_USE_INDEX_BUFFER = !!ru && !Bu, mu.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!ru || Bu) && ru.is32Bits, mu.VERTEXOUTPUT_INVARIANT = !!Vu
      }
    }

    function nu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!uu.lightsEnabled || Eu) return !0;
      const Ku = Ru.lightSources,
        Qu = Math.min(Ku.length, yu);
      for (let mu = 0; mu < Qu; mu++)
        if (!Ku[mu].areLightTexturesReady()) return !1;
      return !0
    }

    function su(uu, Ru, yu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!yu._areLightsDirty) return yu._needNormals;
      const Ju = Qu;
      Qu = function(uu, Ru) {
        const yu = uu.eS().getCaps().maxUniformBuffersPerShaderStage;
        if (null == yu) return Ru;
        const Eu = Math.max(yu - eu, 1);
        return Math.min(Ru, Eu)
      }(uu, Qu);
      let Nu = 0;
      const Xu = {
        needNormals: yu._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (uu.lightsEnabled && !mu) {
        Ru.lightSources.length > Qu && Qu < Ju && function(uu, Ru, yu, Ku) {
          let Qu = Au.get(uu);
          Qu || (Qu = new Set, Au.set(uu, Qu)), Qu.has(Ku) || (Qu.add(Ku), Eu.e.Warn(`maxSimultaneousLights is ${Ru} but this engine supports at most ${yu} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Ku} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Ku+eu} uniform buffers, over the device limit of ${uu.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${yu}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${yu} or less to silence this warning.`))
        }(uu.eS(), Ju, Qu, Math.min(Ru.lightSources.length, Ju));
        for (const Eu of Ru.lightSources)
          if (lu(uu, Ru, Eu, Nu, yu, Ku, Xu), Nu++, Nu === Qu) break
      }
      yu.SPECULARTERM = Xu.specularEnabled, yu.SHADOWS = Xu.shadowEnabled;
      const Vu = Math.max(Qu, yu.MAXLIGHTCOUNT || 0);
      for (let Eu = Nu; Eu < Vu; Eu++) void 0 !== yu["LIGHT" + Eu] && (yu["LIGHT" + Eu] = !1, yu["HEMILIGHT" + Eu] = !1, yu["POINTLIGHT" + Eu] = !1, yu["DIRLIGHT" + Eu] = !1, yu["SPOTLIGHT" + Eu] = !1, yu["AREALIGHT" + Eu] = !1, yu["CLUSTLIGHT" + Eu] = !1, yu["SHADOW" + Eu] = !1, yu["SHADOWCSM" + Eu] = !1, yu["SHADOWCSMDEBUG" + Eu] = !1, yu["SHADOWCSMNUM_CASCADES" + Eu] = !1, yu["SHADOWCSMUSESHADOWMAXZ" + Eu] = !1, yu["SHADOWCSMNOBLEND" + Eu] = !1, yu["SHADOWCSM_RIGHTHANDED" + Eu] = !1, yu["SHADOWPCF" + Eu] = !1, yu["SHADOWPCSS" + Eu] = !1, yu["SHADOWPOISSON" + Eu] = !1, yu["SHADOWESM" + Eu] = !1, yu["SHADOWCLOSEESM" + Eu] = !1, yu["SHADOWCUBE" + Eu] = !1, yu["SHADOWLOWQUALITY" + Eu] = !1, yu["SHADOWMEDIUMQUALITY" + Eu] = !1);
      yu.LIGHTCOUNT = Nu, yu.MAXLIGHTCOUNT = Qu;
      const ru = uu.eS().getCaps();
      return void 0 === yu.SHADOWFLOAT && (Xu.needRebuild = !0), yu.SHADOWFLOAT = Xu.shadowEnabled && (ru.textureFloatRender && ru.textureFloatLinearFiltering || ru.textureHalfFloatRender && ru.textureHalfFloatLinearFiltering), yu.LIGHTMAPEXCLUDED = Xu.lightmapMode, Xu.needRebuild && yu.rebuild(), Xu.needNormals
    }

    function tu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Ru && Ju.e.ReflectionTextureEnabled) {
        if (!Ru.isReadyOrNotBlocking()) return !1;
        yu._needNormals = !0, yu.REFLECTION = !0, yu.GAMMAREFLECTION = Ru.gammaSpace, yu.RGBDREFLECTION = Ru.isRGBD, yu.LODINREFLECTIONALPHA = Ru.lodLevelInAlpha, yu.LINEARSPECULARREFLECTION = Ru.linearSpecularLOD, yu.USEIRRADIANCEMAP = !1, yu.LODBASEDMICROSFURACE = uu.eS().getCaps().textureLOD;
        const mu = uu.eS();
        switch (Eu && Ku > 0 ? (yu.NUM_SAMPLES = "" + Ku, mu._features.needTypeSuffixInShaderConstants && (yu.NUM_SAMPLES = yu.NUM_SAMPLES + "u"), yu.REALTIME_FILTERING = !0, uu.iblCdfGenerator && (yu.IBL_CDF_FILTERING = !0)) : yu.REALTIME_FILTERING = !1, yu.INVERTCUBICMAP = 6 === Ru.coordinatesMode, yu.REFLECTIONMAP_3D = Ru.isCube, yu.REFLECTIONMAP_OPPOSITEZ = yu.REFLECTIONMAP_3D && uu.useRightHandedSystem ? !Ru.invertZ : Ru.invertZ, yu.REFLECTIONMAP_CUBIC = !1, yu.REFLECTIONMAP_EXPLICIT = !1, yu.REFLECTIONMAP_PLANAR = !1, yu.REFLECTIONMAP_PROJECTION = !1, yu.REFLECTIONMAP_SKYBOX = !1, yu.REFLECTIONMAP_SPHERICAL = !1, yu.REFLECTIONMAP_EQUIRECTANGULAR = !1, yu.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, yu.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Ru.coordinatesMode) {
          case 0:
            yu.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            yu.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            yu.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            yu.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            yu.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            yu.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            yu.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            yu.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            yu.REFLECTIONMAP_CUBIC = !0, yu.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Ru.boundingBoxSize
        }
        5 !== Ru.coordinatesMode && (Ru.irradianceTexture ? (yu.USEIRRADIANCEMAP = !0, yu.USESPHERICALFROMREFLECTIONMAP = !1, yu.USESPHERICALINVERTEX = !1, Ru.irradianceTexture._dominantDirection ? yu.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : yu.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Ru.isCube && (yu.USESPHERICALFROMREFLECTIONMAP = !0, yu.USEIRRADIANCEMAP = !1, yu.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, yu.USESPHERICALINVERTEX = Qu))
      } else yu.REFLECTION = !1, yu.REFLECTIONMAP_3D = !1, yu.REFLECTIONMAP_SPHERICAL = !1, yu.REFLECTIONMAP_PLANAR = !1, yu.REFLECTIONMAP_CUBIC = !1, yu.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, yu.REFLECTIONMAP_PROJECTION = !1, yu.REFLECTIONMAP_SKYBOX = !1, yu.REFLECTIONMAP_EXPLICIT = !1, yu.REFLECTIONMAP_EQUIRECTANGULAR = !1, yu.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, yu.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, yu.INVERTCUBICMAP = !1, yu.USESPHERICALFROMREFLECTIONMAP = !1, yu.USEIRRADIANCEMAP = !1, yu.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, yu.USESPHERICALINVERTEX = !1, yu.REFLECTIONMAP_OPPOSITEZ = !1, yu.LODINREFLECTIONALPHA = !1, yu.GAMMAREFLECTION = !1, yu.RGBDREFLECTION = !1, yu.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function lu(uu, Ru, yu, Eu, Ku, mu, Ju) {
      switch (Ju.needNormals = !0, void 0 === Ku["LIGHT" + Eu] && (Ju.needRebuild = !0), Ku["LIGHT" + Eu] = !0, Ku["SPOTLIGHT" + Eu] = !1, Ku["HEMILIGHT" + Eu] = !1, Ku["POINTLIGHT" + Eu] = !1, Ku["DIRLIGHT" + Eu] = !1, Ku["AREALIGHT" + Eu] = !1, Ku["CLUSTLIGHT" + Eu] = !1, yu.prepareLightSpecificDefines(Ku, Eu), Ku["LIGHT_FALLOFF_PHYSICAL" + Eu] = !1, Ku["LIGHT_FALLOFF_GLTF" + Eu] = !1, Ku["LIGHT_FALLOFF_STANDARD" + Eu] = !1, yu.falloffType) {
        case Qu.b.FALLOFF_GLTF:
          Ku["LIGHT_FALLOFF_GLTF" + Eu] = !0;
          break;
        case Qu.b.FALLOFF_PHYSICAL:
          Ku["LIGHT_FALLOFF_PHYSICAL" + Eu] = !0;
          break;
        case Qu.b.FALLOFF_STANDARD:
          Ku["LIGHT_FALLOFF_STANDARD" + Eu] = !0
      }
      if (mu && !yu.specular.equalsFloats(0, 0, 0) && (Ju.specularEnabled = !0), Ku["SHADOW" + Eu] = !1, Ku["SHADOWCSM" + Eu] = !1, Ku["SHADOWCSMDEBUG" + Eu] = !1, Ku["SHADOWCSMNUM_CASCADES" + Eu] = !1, Ku["SHADOWCSMUSESHADOWMAXZ" + Eu] = !1, Ku["SHADOWCSMNOBLEND" + Eu] = !1, Ku["SHADOWCSM_RIGHTHANDED" + Eu] = !1, Ku["SHADOWPCF" + Eu] = !1, Ku["SHADOWPCSS" + Eu] = !1, Ku["SHADOWPOISSON" + Eu] = !1, Ku["SHADOWESM" + Eu] = !1, Ku["SHADOWCLOSEESM" + Eu] = !1, Ku["SHADOWCUBE" + Eu] = !1, Ku["SHADOWLOWQUALITY" + Eu] = !1, Ku["SHADOWMEDIUMQUALITY" + Eu] = !1, Ru && Ru.receiveShadows && uu.shadowsEnabled && yu.shadowEnabled) {
        const Ru = yu.getShadowGenerator(uu.activeCamera) ?? yu.getShadowGenerator();
        if (Ru) {
          const uu = Ru.getShadowMap();
          uu && uu.renderList && uu.renderList.length > 0 && (Ju.shadowEnabled = !0, Ru.prepareDefines(Ku, Eu))
        }
      }
      yu.lightmapMode != Qu.b.LIGHTMAP_DEFAULT ? (Ju.lightmapMode = !0, Ku["LIGHTMAPEXCLUDED" + Eu] = !0, Ku["LIGHTMAPNOSPECULAR" + Eu] = yu.lightmapMode == Qu.b.LIGHTMAP_SHADOWSONLY) : (Ku["LIGHTMAPEXCLUDED" + Eu] = !1, Ku["LIGHTMAPNOSPECULAR" + Eu] = !1)
    }

    function gu(uu, Ru, yu, Eu, Ku) {
      let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ju = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Nu = function(uu, Ru) {
          let yu = !1;
          if (uu.activeCamera) {
            const Eu = Ru.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Ku = Ru.CAMERA_PERSPECTIVE ? 1 : 0,
              Qu = 1 === uu.activeCamera.mode ? 1 : 0,
              mu = 0 === uu.activeCamera.mode ? 1 : 0;
            (Eu ^ Qu || Ku ^ mu) && (Ru.CAMERA_ORTHOGRAPHIC = 1 === Qu, Ru.CAMERA_PERSPECTIVE = 1 === mu, yu = !0)
          }
          return yu
        }(uu, Eu);
      !1 !== Qu && (Nu = (0, mu.i)(yu, uu, Eu)), Eu.DEPTHPREPASS !== !Ru.getColorWrite() && (Eu.DEPTHPREPASS = !Eu.DEPTHPREPASS, Nu = !0), Eu.INSTANCES !== Ku && (Eu.INSTANCES = Ku, Nu = !0), Eu.THIN_INSTANCES !== Ju && (Eu.THIN_INSTANCES = Ju, Nu = !0), Nu && Eu.markAsUnprocessed()
    }
    const cu = 40,
      Lu = 64,
      zu = new WeakMap,
      Fu = new WeakSet;

    function wu(uu, Ru, yu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Ju = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Ru._areAttributesDirty && Ru._needNormals === Ru._normals && Ru._needUVs === Ru._uvs) return !1;
      Ru._normals = Ru._needNormals, Ru._uvs = Ru._needUVs, Ru.NORMAL = Ru._needNormals && uu.isVerticesDataPresent("normal"), Ru._needNormals && uu.isVerticesDataPresent("tangent") && (Ru.TANGENT = !0);
      for (let Eu = 1; Eu <= 6; ++Eu) Ru["UV" + Eu] = !!Ru._needUVs && uu.isVerticesDataPresent(`uv${1===Eu?"":Eu}`);
      if (yu) {
        const yu = uu.useVertexColors && uu.isVerticesDataPresent("color");
        Ru.VERTEXCOLOR = yu, Ru.VERTEXALPHA = uu.hasVertexAlpha && yu && mu
      }
      return uu.isVerticesDataPresent("instanceColor") && (uu.HKu || uu.hasThinInstances) && (Ru.INSTANCESCOLOR = !0), Ku && function(uu, Ru) {
        if (uu.useBones && uu.computeBonesUsingShaders && uu.skeleton) {
          Ru.NUM_BONE_INFLUENCERS = uu.numBoneInfluencers;
          const yu = void 0 !== Ru.BONETEXTURE;
          if (uu.skeleton.isUsingTextureForMatrices && yu) Ru.BONETEXTURE = !0;
          else {
            Ru.BonesPerMesh = uu.skeleton.bones.length + 1, Ru.BONETEXTURE = !yu && void 0;
            const Ku = uu.lD(),
              Qu = Ku.prePassRenderer;
            if (Qu && Qu.enabled) {
              const yu = -1 === Qu.excludedSkinnedMesh.indexOf(uu);
              Ru.BONES_VELOCITY_ENABLED = yu
            }
            const mu = !0 === Ru.MULTIVIEW,
              Ju = 2 * Ru.BonesPerMesh + (mu ? 1 : 0);
            if (zu.get(uu.skeleton) !== Ju) {
              zu.set(uu.skeleton, Ju);
              const yu = Ku.eS().getCaps().maxVertexUniformVectors;
              if (yu && !Fu.has(uu.skeleton)) {
                const Ku = 4 * Ru.BonesPerMesh,
                  Qu = mu ? Lu : cu,
                  Ju = Math.max(yu - Qu, 0);
                (Ku > Ju || mu && 3 * Ku > yu) && (Fu.add(uu.skeleton), Eu.e.Warn(`Skeleton "${uu.skeleton.name}": ${uu.skeleton.bones.length} bones stored as vertex uniforms use ${Ku} of ~${Ju} usable uniform vectors${mu?" (multiview)":""} on a device reporting ${yu}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Ru.NUM_BONE_INFLUENCERS = 0, Ru.BonesPerMesh = 0, void 0 !== Ru.BONETEXTURE && (Ru.BONETEXTURE = !1)
      }(uu, Ru), Qu && function(uu, Ru) {
        const yu = uu.morphTargetManager;
        yu ? (Ru.MORPHTARGETS_UV = yu.supportsUVs && Ru.UV1, Ru.MORPHTARGETS_UV2 = yu.supportsUV2s && Ru.UV2, Ru.MORPHTARGETS_TANGENT = yu.supportsTangents && Ru.TANGENT, Ru.MORPHTARGETS_NORMAL = yu.supportsNormals && Ru.NORMAL, Ru.MORPHTARGETS_POSITION = yu.supportsPositions, Ru.MORPHTARGETS_COLOR = yu.supportsColors, Ru.MORPHTARGETTEXTURE_HASUVS = yu.hasUVs, Ru.MORPHTARGETTEXTURE_HASUV2S = yu.hasUV2s, Ru.MORPHTARGETTEXTURE_HASTANGENTS = yu.hasTangents, Ru.MORPHTARGETTEXTURE_HASNORMALS = yu.hasNormals, Ru.MORPHTARGETTEXTURE_HASPOSITIONS = yu.hasPositions, Ru.MORPHTARGETTEXTURE_HASCOLORS = yu.hasColors, Ru.NUM_MORPH_INFLUENCERS = yu.numMaxInfluencers || yu.numInfluencers, Ru.MORPHTARGETS = Ru.NUM_MORPH_INFLUENCERS > 0, Ru.MORPHTARGETS_TEXTURE = yu.isUsingTextureForTargets) : (Ru.MORPHTARGETS_UV = !1, Ru.MORPHTARGETS_UV2 = !1, Ru.MORPHTARGETS_TANGENT = !1, Ru.MORPHTARGETS_NORMAL = !1, Ru.MORPHTARGETS_POSITION = !1, Ru.MORPHTARGETS_COLOR = !1, Ru.MORPHTARGETTEXTURE_HASUVS = !1, Ru.MORPHTARGETTEXTURE_HASUV2S = !1, Ru.MORPHTARGETTEXTURE_HASTANGENTS = !1, Ru.MORPHTARGETTEXTURE_HASNORMALS = !1, Ru.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Ru.MORPHTARGETTEXTURE_HAS_COLORS = !1, Ru.MORPHTARGETS = !1, Ru.NUM_MORPH_INFLUENCERS = 0)
      }(uu, Ru), Ju && function(uu, Ru) {
        const yu = uu.bakedVertexAnimationManager;
        Ru.BAKED_VERTEX_ANIMATION_TEXTURE = !(!yu || !yu.isEnabled)
      }(uu, Ru), !0
    }

    function Zu(uu, Ru) {
      if (uu.activeCamera) {
        const yu = Ru.MULTIVIEW;
        Ru.MULTIVIEW = null !== uu.activeCamera.outputRenderTarget && uu.activeCamera.outputRenderTarget.getViewCount() > 1, Ru.MULTIVIEW != yu && Ru.markAsUnprocessed()
      }
    }

    function hu(uu, Ru, yu) {
      const Eu = Ru.ORDER_INDEPENDENT_TRANSPARENCY,
        Ku = Ru.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Ru.ORDER_INDEPENDENT_TRANSPARENCY = uu.useOrderIndependentTransparency && yu, Ru.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !uu.eS().getCaps().textureFloatLinearFiltering, Eu === Ru.ORDER_INDEPENDENT_TRANSPARENCY && Ku === Ru.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Ru.markAsUnprocessed()
    }

    function Pu(uu, Ru, yu) {
      const Eu = Ru.PREPASS;
      if (!Ru._arePrePassDirty) return;
      const Ku = [{
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
      if (uu.prePassRenderer && uu.prePassRenderer.enabled && yu) {
        Ru.PREPASS = !0, Ru.SCENE_MRT_COUNT = uu.prePassRenderer.mrtCount, Ru.PREPASS_NORMAL_WORLDSPACE = uu.prePassRenderer.generateNormalsInWorldSpace, Ru.PREPASS_COLOR = !0, Ru.PREPASS_COLOR_INDEX = 0;
        for (let yu = 0; yu < Ku.length; yu++) {
          const Eu = uu.prePassRenderer.getIndex(Ku[yu].type); - 1 !== Eu ? (Ru[Ku[yu].define] = !0, Ru[Ku[yu].index] = Eu) : Ru[Ku[yu].define] = !1
        }
      } else {
        Ru.PREPASS = !1;
        for (let uu = 0; uu < Ku.length; uu++) Ru[Ku[uu].define] = !1
      }
      Ru.PREPASS != Eu && (Ru.markAsUnprocessed(), Ru.markAsImageProcessingDirty())
    }

    function iu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Xu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Ku && Ku.push("Light" + uu), Qu || (Ru.push("vLightData" + uu, "vLightDiffuse" + uu, "vLightSpecular" + uu, "vLightDirection" + uu, "vLightWidth" + uu, "vLightHeight" + uu, "vLightFalloff" + uu, "vLightGround" + uu, "vSliceData" + uu, "vSliceRanges" + uu, "lightMatrix" + uu, "shadowsInfo" + uu, "depthValues" + uu), yu.push("shadowTexture" + uu), yu.push("depthTexture" + uu), Ru.push("viewFrustumZ" + uu, "cascadeBlendFactor" + uu, "lightSizeUVCorrection" + uu, "depthCorrection" + uu, "penumbraDarkness" + uu, "frustumLengths" + uu), Eu && (yu.push("projectionLightTexture" + uu), Ru.push("textureProjectionMatrix" + uu)), mu && yu.push("iesLightTexture" + uu), Nu && yu.push("rectAreaLightEmissionTexture" + uu), Ju && (yu.push("lightDataTexture" + uu), Xu || yu.push("tileMaskTexture" + uu)))
    }

    function Yu(uu, Ru, yu) {
      const Eu = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      yu && Eu.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), uu.push(...Eu);
      Ru.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function ou(uu, Ru, yu) {
      let Eu, Ku, Qu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        mu = null;
      if (uu.uniformsNames) {
        const Ju = uu;
        Eu = Ju.uniformsNames, Ku = Ju.uniformBuffersNames, Ru = Ju.samplers, yu = Ju.defines, Qu = Ju.maxSimultaneousLights || 0, mu = Ju.shaderLanguage ?? null
      } else Eu = uu, Ru || (Ru = []);
      for (let Ju = 0; Ju < Qu && yu["LIGHT" + Ju]; Ju++) iu(Ju, Eu, Ru, yu["PROJECTEDLIGHTTEXTURE" + Ju], Ku, !1, yu["IESLIGHTTEXTURE" + Ju], yu["CLUSTLIGHT" + Ju], yu["RECTAREALIGHTEMISSIONTEXTURE" + Ju], 1 === mu);
      yu.NUM_MORPH_INFLUENCERS && (Eu.push("morphTargetInfluences"), Eu.push("morphTargetCount")), yu.BAKED_VERTEX_ANIMATION_TEXTURE && (Eu.push("bakedVertexAnimationSettings"), Eu.push("bakedVertexAnimationTextureSizeInverted"), Eu.push("bakedVertexAnimationTime"), Ru.push("bakedVertexAnimationTexture"))
    }

    function qu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      uu.addUniform("vReflectionInfos", 2), uu.addUniform("reflectionMatrix", 16), Ru && uu.addUniform("vReflectionMicrosurfaceInfos", 3), yu && (uu.addUniform("vReflectionPosition", 3), uu.addUniform("vReflectionSize", 3)), Eu && (uu.addUniform("vReflectionFilteringInfo", 2), uu.addUniform("vReflectionDominantDirection", 3)), Qu && uu.addUniform("vReflectionColor", 3), Ku && (uu.addUniform("vSphericalL00", 3), uu.addUniform("vSphericalL1_1", 3), uu.addUniform("vSphericalL10", 3), uu.addUniform("vSphericalL11", 3), uu.addUniform("vSphericalL2_2", 3), uu.addUniform("vSphericalL2_1", 3), uu.addUniform("vSphericalL20", 3), uu.addUniform("vSphericalL21", 3), uu.addUniform("vSphericalL22", 3), uu.addUniform("vSphericalX", 3), uu.addUniform("vSphericalY", 3), uu.addUniform("vSphericalZ", 3), uu.addUniform("vSphericalXX_ZZ", 3), uu.addUniform("vSphericalYY_ZZ", 3), uu.addUniform("vSphericalZZ", 3), uu.addUniform("vSphericalXY", 3), uu.addUniform("vSphericalYZ", 3), uu.addUniform("vSphericalZX", 3))
    }
  },
  39923: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(36830),
      Ku = yu(39863);
    class Qu extends Ku.d {
      constructor(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(uu, Ru, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Eu.d, this._storeEffectOnSubMeshes = yu
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(uu, Ru) {
        return !!uu && (!this._storeEffectOnSubMeshes || (!uu.mC || 0 === uu.mC.length || this.isReadyForSubMesh(uu, uu.mC[0], Ru)))
      }
      _isReadyForSubMesh(uu) {
        const Ru = uu.materialDefines;
        return !(this.checkReadyOnEveryCall || !uu.effect || !Ru || Ru._renderId !== this.lD().getRenderId())
      }
      bindOnlyWorldMatrix(uu) {
        this._activeEffect.setMatrix("world", uu)
      }
      bindOnlyNormalMatrix(uu) {
        this._activeEffect.setMatrix("normalMatrix", uu)
      }
      bind(uu, Ru) {
        Ru && this.bindForSubMesh(uu, Ru, Ru.mC[0])
      }
      _afterBind(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(uu, Ru, yu), this.lD()._cachedEffect = Ru, yu ? yu._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return yu._drawWrapper._forceRebindOnNextCall || uu.isCachedMaterialInvalid(this, Ru, Eu)
      }
      dispose(uu, Ru, yu) {
        this._activeEffect = void 0, super.dispose(uu, Ru, yu)
      }
    }
  },
  39941: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      e: () => Ku
    });
    const Eu = new WeakMap;

    function Ku(uu) {
      const Ru = uu.getVertexBuffers();
      if (!Ru) return null;
      let yu = Eu.get(uu);
      if (yu) {
        let uu = !1;
        for (const Eu in Ru)
          if (!yu.has(Eu)) {
            uu = !0;
            break
          } if (!uu) return yu
      } else yu = new Map, Eu.set(uu, yu);
      for (const Eu in Ru) {
        const uu = Ru[Eu];
        if (uu) {
          const Ru = uu.byteOffset,
            Ku = uu.byteStride,
            Qu = uu.type,
            mu = uu.normalized;
          yu.set(Eu, {
            offset: Ru,
            stride: Ku,
            type: Qu,
            normalized: mu
          })
        }
      }
      return yu
    }

    function Qu(uu, Ru) {
      Ru.forEach(((Ru, yu) => {
        const Eu = `vp_${yu}_info`;
        uu.setFloat4(Eu, Ru.offset, Ru.stride, Ru.type, Ru.normalized ? 1 : 0)
      }))
    }
  },
  39893: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      d: () => Nu
    });
    var Eu = yu(39560),
      Ku = yu(36830),
      Qu = yu(39566);
    let mu = (() => {
      var uu;
      let Ru, yu, Ku = [];
      return uu = class {
        static extractMinAndMaxIndexed(uu, Ru, yu, Eu, Ku, Qu) {
          for (let mu = yu; mu < yu + Eu; mu++) {
            const yu = 3 * Ru[mu],
              Eu = uu[yu],
              Ju = uu[yu + 1],
              Nu = uu[yu + 2];
            Ku.minimizeInPlaceFromFloats(Eu, Ju, Nu), Qu.maximizeInPlaceFromFloats(Eu, Ju, Nu)
          }
        }
        static extractMinAndMax(uu, Ru, yu, Eu, Ku, Qu) {
          for (let mu = Ru, Ju = Ru * Eu; mu < Ru + yu; mu++, Ju += Eu) {
            const Ru = uu[Ju],
              yu = uu[Ju + 1],
              Eu = uu[Ju + 2];
            Ku.minimizeInPlaceFromFloats(Ru, yu, Eu), Qu.maximizeInPlaceFromFloats(Ru, yu, Eu)
          }
        }
      }, (() => {
        const mu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [Qu.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], yu = [Qu.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Eu.h)(uu, null, Ru, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: uu => "extractMinAndMaxIndexed" in uu,
            get: uu => uu.extractMinAndMaxIndexed
          },
          metadata: mu
        }, null, Ku), (0, Eu.h)(uu, null, yu, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: uu => "extractMinAndMax" in uu,
            get: uu => uu.extractMinAndMax
          },
          metadata: mu
        }, null, Ku), mu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mu
        }), (0, Eu.l)(uu, Ku)
      })(), uu
    })();

    function Ju(uu, Ru, yu, Eu) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Ju = new Ku.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Nu = new Ku.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return mu.extractMinAndMaxIndexed(uu, Ru, yu, Eu, Ju, Nu), Qu && (Ju.x -= Ju.x * Qu.x + Qu.y, Ju.y -= Ju.y * Qu.x + Qu.y, Ju.z -= Ju.z * Qu.x + Qu.y, Nu.x += Nu.x * Qu.x + Qu.y, Nu.y += Nu.y * Qu.x + Qu.y, Nu.z += Nu.z * Qu.x + Qu.y), {
        minimum: Ju,
        maximum: Nu
      }
    }

    function Nu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Qu = arguments.length > 4 ? arguments[4] : void 0;
      const Ju = new Ku.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Nu = new Ku.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Qu || (Qu = 3), mu.extractMinAndMax(uu, Ru, yu, Qu, Ju, Nu), Eu && (Ju.x -= Ju.x * Eu.x + Eu.y, Ju.y -= Ju.y * Eu.x + Eu.y, Ju.z -= Ju.z * Eu.x + Eu.y, Nu.x += Nu.x * Eu.x + Eu.y, Nu.y += Nu.y * Eu.x + Eu.y, Nu.z += Nu.z * Eu.x + Eu.y), {
        minimum: Ju,
        maximum: Nu
      }
    }
  },
  39866: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Vu
    });
    var Eu, Ku = yu(39706),
      Qu = yu(39870),
      mu = yu(39877),
      Ju = yu(39893),
      Nu = yu(39899),
      Xu = yu(39430);
    class Vu {
      get materialDefines() {
        const uu = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof uu ? null : uu
      }
      set materialDefines(uu) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = uu
      }
      _getDrawWrapper(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        uu = uu ?? this._engine.currentRenderPassId;
        let yu = this._drawWrappers[uu];
        return !yu && Ru && (this._drawWrappers[uu] = yu = new Nu.b(this._mesh.lD().eS())), yu
      }
      _removeDrawWrapper(uu) {
        let Ru = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[uu]?.dispose(Ru), this._drawWrappers[uu] = void 0
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
      _setMainDrawWrapperOverride(uu) {
        this._mainDrawWrapperOverride = uu
      }
      setEffect(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ku = this._drawWrapper;
        Ku.setEffect(uu, Ru, Eu), void 0 !== yu && (Ku.materialContext = yu), uu || (Ku.defines = null, Ku.materialContext = void 0)
      }
      resetDrawCache(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== uu) return void this._removeDrawWrapper(uu, !0, Ru);
          for (const uu of this._drawWrappers) uu?.dispose(Ru)
        }
        this._drawWrappers = []
      }
      static AddToMesh(uu, Ru, yu, Eu, Ku, Qu, mu) {
        return new Vu(uu, Ru, yu, Eu, Ku, Qu, mu, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(uu, Ru, yu, Eu, Ku, Qu, mu) {
        let Ju = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = uu, this.verticesStart = Ru, this.verticesCount = yu, this.indexStart = Eu, this.indexCount = Ku, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Qu, this._renderingMesh = mu || Qu, Nu && Qu.mC.push(this), this._engine = this._mesh.lD().eS(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Qu.mC.length - 1, Ju && (this.refreshBoundingInfo(), Qu.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      vI() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.vI() : this._boundingInfo
      }
      setBoundingInfo(uu) {
        return this._boundingInfo = uu, this
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
        const uu = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return uu || this._renderingMesh
      }
      nS() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Ru = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Ru) return uu && this._mesh.lD()._hasDefaultMaterial ? this._mesh.lD().defaultMaterial : null;
        if (this._isMultiMaterial(Ru)) {
          const uu = Ru.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== uu && (this._currentMaterial = uu, this.resetDrawCache()), uu
        }
        return Ru
      }
      _isMultiMaterial(uu) {
        return void 0 !== uu.getSubMaterial
      }
      refreshBoundingInfo() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (uu || (uu = this._renderingMesh.getVerticesData(Ku.h.PositionKind)), !uu) return this._boundingInfo = this._mesh.vI(), this;
        const Ru = this._renderingMesh.DEu();
        let yu;
        if (0 === this.indexStart && this.indexCount === Ru.length) {
          const uu = this._renderingMesh.vI();
          yu = {
            minimum: uu.minimum.clone(),
            maximum: uu.maximum.clone()
          }
        } else yu = (0, Ju.c)(uu, Ru, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(yu.minimum, yu.maximum) : this._boundingInfo = new mu.c(yu.minimum, yu.maximum), this
      }
      _checkCollision(uu) {
        return this.vI()._checkCollision(uu)
      }
      updateBoundingInfo(uu) {
        let Ru = this.vI();
        return Ru || (this.refreshBoundingInfo(), Ru = this.vI()), Ru && Ru.update(uu), this
      }
      isInFrustum(uu) {
        const Ru = this.vI();
        return !!Ru && Ru.isInFrustum(uu, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(uu) {
        const Ru = this.vI();
        return !!Ru && Ru.isCompletelyInFrustum(uu)
      }
      render(uu) {
        return this._renderingMesh.render(this, uu, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(uu, Ru) {
        if (!this._linesIndexBuffer) {
          const yu = 6 * Math.floor(this.indexCount / 3),
            Eu = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(yu) : new Uint16Array(yu);
          let Ku = 0;
          if (0 === uu.length)
            for (let uu = this.indexStart; uu < this.indexStart + this.indexCount; uu += 3) Eu[Ku++] = uu, Eu[Ku++] = uu + 1, Eu[Ku++] = uu + 1, Eu[Ku++] = uu + 2, Eu[Ku++] = uu + 2, Eu[Ku++] = uu;
          else
            for (let Ru = this.indexStart; Ru < this.indexStart + this.indexCount; Ru += 3) Eu[Ku++] = uu[Ru], Eu[Ku++] = uu[Ru + 1], Eu[Ku++] = uu[Ru + 1], Eu[Ku++] = uu[Ru + 2], Eu[Ku++] = uu[Ru + 2], Eu[Ku++] = uu[Ru];
          this._linesIndexBuffer = Ru.createIndexBuffer(Eu), this._linesIndexCount = Eu.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(uu) {
        const Ru = this.vI();
        return !!Ru && uu.intersectsBox(Ru.boundingBox)
      }
      intersects(uu, Ru, yu, Eu, Ku) {
        const Qu = this.nS();
        if (!Qu) return null;
        let mu = 3,
          Ju = !1;
        switch (Qu.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            mu = 1, Ju = !0
        }
        return 4 === Qu.fillMode ? yu.length ? this._intersectLines(uu, Ru, yu, this._mesh.intersectionThreshold, Eu) : this._intersectUnIndexedLines(uu, Ru, yu, this._mesh.intersectionThreshold, Eu) : !yu.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(uu, Ru, yu, Eu, Ku) : this._intersectTriangles(uu, Ru, yu, mu, Ju, Eu, Ku)
      }
      _intersectLines(uu, Ru, yu, Eu, Ku) {
        let mu = null;
        for (let Ju = this.indexStart; Ju < this.indexStart + this.indexCount; Ju += 2) {
          const Nu = Ru[yu[Ju]],
            Xu = Ru[yu[Ju + 1]],
            Vu = uu.intersectionSegment(Nu, Xu, Eu);
          if (!(Vu < 0) && ((Ku || !mu || Vu < mu.distance) && (mu = new Qu.d(null, null, Vu), mu.faceId = Ju / 2, Ku))) break
        }
        return mu
      }
      _intersectUnIndexedLines(uu, Ru, yu, Eu, Ku) {
        let mu = null;
        for (let Ju = this.verticesStart; Ju < this.verticesStart + this.verticesCount; Ju += 2) {
          const yu = Ru[Ju],
            Nu = Ru[Ju + 1],
            Xu = uu.intersectionSegment(yu, Nu, Eu);
          if (!(Xu < 0) && ((Ku || !mu || Xu < mu.distance) && (mu = new Qu.d(null, null, Xu), mu.faceId = Ju / 2, Ku))) break
        }
        return mu
      }
      _intersectTriangles(uu, Ru, yu, Eu, Ku, Qu, mu) {
        let Ju = null,
          Nu = -1;
        for (let Xu = this.indexStart; Xu < this.indexStart + this.indexCount - (3 - Eu); Xu += Eu) {
          Nu++;
          const Eu = yu[Xu],
            Vu = yu[Xu + 1],
            ru = yu[Xu + 2];
          if (Ku && 4294967295 === ru) {
            Xu += 2;
            continue
          }
          const Bu = Ru[Eu],
            xu = Ru[Vu],
            Su = Ru[ru];
          if (!Bu || !xu || !Su) continue;
          if (mu && !mu(Bu, xu, Su, uu, Eu, Vu, ru)) continue;
          const pu = uu.intersectsTriangle(Bu, xu, Su);
          if (pu) {
            if (pu.distance < 0) continue;
            if ((Qu || !Ju || pu.distance < Ju.distance) && (Ju = pu, Ju.faceId = Nu, Qu)) break
          }
        }
        return Ju
      }
      _intersectUnIndexedTriangles(uu, Ru, yu, Eu, Ku) {
        let Qu = null;
        for (let mu = this.verticesStart; mu < this.verticesStart + this.verticesCount; mu += 3) {
          const yu = Ru[mu],
            Ju = Ru[mu + 1],
            Nu = Ru[mu + 2];
          if (Ku && !Ku(yu, Ju, Nu, uu, -1, -1, -1)) continue;
          const Xu = uu.intersectsTriangle(yu, Ju, Nu);
          if (Xu) {
            if (Xu.distance < 0) continue;
            if ((Eu || !Qu || Xu.distance < Qu.distance) && (Qu = Xu, Qu.faceId = mu / 3, Eu)) break
          }
        }
        return Qu
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(uu, Ru) {
        const yu = new Vu(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, uu, Ru, !1);
        if (!this.IsGlobal) {
          const uu = this.vI();
          if (!uu) return yu;
          yu._boundingInfo = new mu.c(uu.minimum, uu.maximum)
        }
        return yu
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.lD().eS()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Ru = this._mesh.mC.indexOf(this);
        this._mesh.mC.splice(Ru, 1), this.resetDrawCache(void 0, uu)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(uu, Ru, yu, Eu, Ku) {
        let Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mu = Number.MAX_VALUE,
          Ju = -Number.MAX_VALUE;
        const Nu = (Ku || Eu).DEu();
        for (let Xu = Ru; Xu < Ru + yu; Xu++) {
          const uu = Nu[Xu];
          uu < mu && (mu = uu), uu > Ju && (Ju = uu)
        }
        return new Vu(uu, mu, Ju - mu + 1, Ru, yu, Eu, Ku, Qu)
      }
    }(Eu = Vu.prototype).projectToRef ?? (Eu.projectToRef = (0, Xu.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);