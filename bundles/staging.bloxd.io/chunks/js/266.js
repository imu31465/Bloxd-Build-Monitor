export const id = 266;
export const ids = [266];
export const modules = {
  40565: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      constructor(uu, Eu, ju) {
        this.bu = uu, this.bv = Eu, this.distance = ju, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40581: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu
    });
    var su = ju(37498),
      Uu = ju(37494),
      Zu = ju(37496);
    class Xu {
      constructor(uu, Eu, ju) {
        this.vectors = (0, su.e)(8, Uu.t.Zero), this.center = Uu.t.Zero(), this.centerWorld = Uu.t.Zero(), this.extendSize = Uu.t.Zero(), this.extendSizeWorld = Uu.t.Zero(), this.directions = (0, su.e)(3, Uu.t.Zero), this.vectorsWorld = (0, su.e)(8, Uu.t.Zero), this.minimumWorld = Uu.t.Zero(), this.maximumWorld = Uu.t.Zero(), this.minimum = Uu.t.Zero(), this.maximum = Uu.t.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(uu, Eu, ju)
      }
      reConstruct(uu, Eu, ju) {
        const su = uu.x,
          Zu = uu.y,
          Xu = uu.z,
          lu = Eu.x,
          qu = Eu.y,
          fu = Eu.z,
          Cu = this.vectors;
        this.minimum.T6(su, Zu, Xu), this.maximum.T6(lu, qu, fu), Cu[0].T6(su, Zu, Xu), Cu[1].T6(lu, qu, fu), Cu[2].T6(lu, Zu, Xu), Cu[3].T6(su, qu, Xu), Cu[4].T6(su, Zu, fu), Cu[5].T6(lu, qu, Xu), Cu[6].T6(su, qu, fu), Cu[7].T6(lu, Zu, fu), Eu.addToRef(uu, this.center).scaleInPlace(.5), Eu.subtractToRef(uu, this.extendSize).scaleInPlace(.5), this._worldMatrix = ju || Uu.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(uu) {
        const Eu = Xu._TmpVector3,
          ju = this.maximum.subtractToRef(this.minimum, Eu[0]),
          su = ju.length();
        ju.normalizeFromLength(su);
        const Uu = su * uu,
          Zu = ju.scaleInPlace(.5 * Uu),
          lu = this.center.subtractToRef(Zu, Eu[1]),
          qu = this.center.addToRef(Zu, Eu[2]);
        return this.reConstruct(lu, qu, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(uu) {
        const Eu = this.minimumWorld,
          ju = this.maximumWorld,
          su = this.directions,
          Zu = this.vectorsWorld,
          Xu = this.vectors;
        if (uu.isIdentity()) {
          Eu.yJ(this.minimum), ju.yJ(this.maximum);
          for (let uu = 0; uu < 8; ++uu) Zu[uu].yJ(Xu[uu]);
          this.extendSizeWorld.yJ(this.extendSize), this.centerWorld.yJ(this.center)
        } else {
          Eu.k_(Number.MAX_VALUE), ju.k_(-Number.MAX_VALUE);
          for (let su = 0; su < 8; ++su) {
            const lu = Zu[su];
            Uu.t.TransformCoordinatesToRef(Xu[su], uu, lu), Eu.minimizeInPlace(lu), ju.maximizeInPlace(lu)
          }
          ju.subtractToRef(Eu, this.extendSizeWorld).scaleInPlace(.5), ju.addToRef(Eu, this.centerWorld).scaleInPlace(.5)
        }
        Uu.t.FromArrayToRef(uu.m, 0, su[0]), Uu.t.FromArrayToRef(uu.m, 4, su[1]), Uu.t.FromArrayToRef(uu.m, 8, su[2]), this._worldMatrix = uu
      }
      isInFrustum(uu) {
        return Xu.IsInFrustum(this.vectorsWorld, uu)
      }
      isCompletelyInFrustum(uu) {
        return Xu.IsCompletelyInFrustum(this.vectorsWorld, uu)
      }
      intersectsPoint(uu) {
        const Eu = this.minimumWorld,
          ju = this.maximumWorld,
          su = Eu.x,
          Uu = Eu.y,
          Xu = Eu.z,
          lu = ju.x,
          qu = ju.y,
          fu = ju.z,
          Cu = uu.x,
          bu = uu.y,
          cu = uu.z,
          Nu = -Zu.c;
        return !(lu - Cu < Nu || Nu > Cu - su) && (!(qu - bu < Nu || Nu > bu - Uu) && !(fu - cu < Nu || Nu > cu - Xu))
      }
      intersectsSphere(uu) {
        return Xu.IntersectsSphere(this.minimumWorld, this.maximumWorld, uu.centerWorld, uu.radiusWorld)
      }
      intersectsMinMax(uu, Eu) {
        const ju = this.minimumWorld,
          su = this.maximumWorld,
          Uu = ju.x,
          Zu = ju.y,
          Xu = ju.z,
          lu = su.x,
          qu = su.y,
          fu = su.z,
          Cu = uu.x,
          bu = uu.y,
          cu = uu.z,
          Nu = Eu.x,
          Ou = Eu.y,
          Yu = Eu.z;
        return !(lu < Cu || Uu > Nu) && (!(qu < bu || Zu > Ou) && !(fu < cu || Xu > Yu))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(uu, Eu) {
        return uu.intersectsMinMax(Eu.minimumWorld, Eu.maximumWorld)
      }
      static IntersectsSphere(uu, Eu, ju, su) {
        const Zu = Xu._TmpVector3[0];
        Uu.t.ClampToRef(ju, uu, Eu, Zu);
        return Uu.t.DistanceSquared(ju, Zu) <= su * su
      }
      static IsCompletelyInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ++ju) {
          const su = Eu[ju];
          for (let Eu = 0; Eu < 8; ++Eu)
            if (su.dotCoordinate(uu[Eu]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ++ju) {
          let su = !0;
          const Uu = Eu[ju];
          for (let Eu = 0; Eu < 8; ++Eu)
            if (Uu.dotCoordinate(uu[Eu]) >= 0) {
              su = !1;
              break
            } if (su) return !1
        }
        return !0
      }
    }
    Xu._TmpVector3 = (0, su.e)(3, Uu.t.Zero)
  },
  40574: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => bu
    });
    var su = ju(37498),
      Uu = ju(37494),
      Zu = ju(40581);
    class Xu {
      constructor(uu, Eu, ju) {
        this.center = Uu.t.Zero(), this.centerWorld = Uu.t.Zero(), this.minimum = Uu.t.Zero(), this.maximum = Uu.t.Zero(), this.reConstruct(uu, Eu, ju)
      }
      reConstruct(uu, Eu, ju) {
        this.minimum.yJ(uu), this.maximum.yJ(Eu);
        const su = Uu.t.Distance(uu, Eu);
        Eu.addToRef(uu, this.center).scaleInPlace(.5), this.radius = .5 * su, this._update(ju || Uu.e.IdentityReadOnly)
      }
      scale(uu) {
        const Eu = Xu._TmpVector3,
          ju = this.maximum.subtractToRef(this.minimum, Eu[0]),
          su = ju.length();
        ju.normalizeFromLength(su);
        const Uu = su * uu,
          Zu = ju.scaleInPlace(.5 * Uu),
          lu = this.center.subtractToRef(Zu, Eu[1]),
          qu = this.center.addToRef(Zu, Eu[2]);
        return this.reConstruct(lu, qu, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(uu) {
        if (uu.isIdentity()) this.centerWorld.yJ(this.center), this.radiusWorld = this.radius;
        else {
          Uu.t.TransformCoordinatesToRef(this.center, uu, this.centerWorld);
          const Eu = Xu._TmpVector3[0];
          Uu.t.TransformNormalFromFloatsToRef(1, 1, 1, uu, Eu), this.radiusWorld = Math.max(Math.abs(Eu.x), Math.abs(Eu.y), Math.abs(Eu.z)) * this.radius
        }
      }
      isInFrustum(uu) {
        const Eu = this.centerWorld,
          ju = this.radiusWorld;
        for (let su = 0; su < 6; su++)
          if (uu[su].dotCoordinate(Eu) <= -ju) return !1;
        return !0
      }
      isCenterInFrustum(uu) {
        const Eu = this.centerWorld;
        for (let ju = 0; ju < 6; ju++)
          if (uu[ju].dotCoordinate(Eu) < 0) return !1;
        return !0
      }
      intersectsPoint(uu) {
        const Eu = Uu.t.DistanceSquared(this.centerWorld, uu);
        return !(this.radiusWorld * this.radiusWorld < Eu)
      }
      static Intersects(uu, Eu) {
        const ju = Uu.t.DistanceSquared(uu.centerWorld, Eu.centerWorld),
          su = uu.radiusWorld + Eu.radiusWorld;
        return !(su * su < ju)
      }
      static CreateFromCenterAndRadius(uu, Eu, ju) {
        this._TmpVector3[0].yJ(uu), this._TmpVector3[1].T6(0, 0, Eu), this._TmpVector3[2].yJ(uu), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].Qsu(this._TmpVector3[1]);
        const su = new Xu(this._TmpVector3[0], this._TmpVector3[2]);
        return su._worldMatrix = ju || Uu.e.Identity(), su
      }
    }
    Xu._TmpVector3 = (0, su.e)(3, Uu.t.Zero);
    const lu = {
        min: 0,
        max: 0
      },
      qu = {
        min: 0,
        max: 0
      },
      fu = (uu, Eu, ju) => {
        const su = Uu.t.Dot(Eu.centerWorld, uu),
          Zu = Math.abs(Uu.t.Dot(Eu.directions[0], uu)) * Eu.extendSize.x + Math.abs(Uu.t.Dot(Eu.directions[1], uu)) * Eu.extendSize.y + Math.abs(Uu.t.Dot(Eu.directions[2], uu)) * Eu.extendSize.z;
        ju.min = su - Zu, ju.max = su + Zu
      },
      Cu = (uu, Eu, ju) => (fu(uu, Eu, lu), fu(uu, ju, qu), !(lu.min > qu.max || qu.min > lu.max));
    class bu {
      constructor(uu, Eu, ju) {
        this._isLocked = !1, this.boundingBox = new Zu.e(uu, Eu, ju), this.Isu = new Xu(uu, Eu, ju)
      }
      reConstruct(uu, Eu, ju) {
        this.boundingBox.reConstruct(uu, Eu, ju), this.Isu.reConstruct(uu, Eu, ju)
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
        this._isLocked || (this.boundingBox._update(uu), this.Isu._update(uu))
      }
      centerOn(uu, Eu) {
        const ju = bu._TmpVector3[0].yJ(uu).Qsu(Eu),
          su = bu._TmpVector3[1].yJ(uu).addInPlace(Eu);
        return this.boundingBox.reConstruct(ju, su, this.boundingBox.getWorldMatrix()), this.Isu.reConstruct(ju, su, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(uu) {
        const Eu = Uu.t.Minimize(this.minimum, uu),
          ju = Uu.t.Maximize(this.maximum, uu);
        return this.reConstruct(Eu, ju, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(uu) {
        const Eu = Uu.m.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(Eu);
        const ju = Uu.m.dO[0];
        return Uu.t.TransformCoordinatesToRef(uu.boundingBox.minimumWorld, Eu, ju), this.encapsulate(ju), Uu.t.TransformCoordinatesToRef(uu.boundingBox.maximumWorld, Eu, ju), this.encapsulate(ju), this
      }
      scale(uu) {
        return this.boundingBox.scale(uu), this.Isu.scale(uu), this
      }
      isInFrustum(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === Eu || 3 === Eu) && this.Isu.isCenterInFrustum(uu)) return !0;
        if (!this.Isu.isInFrustum(uu)) return !1;
        return !(1 !== Eu && 3 !== Eu) || this.boundingBox.isInFrustum(uu)
      }
      get diagonalLength() {
        const uu = this.boundingBox;
        return uu.maximumWorld.subtractToRef(uu.minimumWorld, bu._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(uu) {
        return this.boundingBox.isCompletelyInFrustum(uu)
      }
      _checkCollision(uu) {
        return uu._canDoCollision(this.Isu.centerWorld, this.Isu.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(uu) {
        return !!this.Isu.centerWorld && (!!this.Isu.intersectsPoint(uu) && !!this.boundingBox.intersectsPoint(uu))
      }
      intersects(uu, Eu) {
        if (!Xu.Intersects(this.Isu, uu.Isu)) return !1;
        if (!Zu.e.Intersects(this.boundingBox, uu.boundingBox)) return !1;
        if (!Eu) return !0;
        const ju = this.boundingBox,
          su = uu.boundingBox;
        return !!Cu(ju.directions[0], ju, su) && (!!Cu(ju.directions[1], ju, su) && (!!Cu(ju.directions[2], ju, su) && (!!Cu(su.directions[0], ju, su) && (!!Cu(su.directions[1], ju, su) && (!!Cu(su.directions[2], ju, su) && (!!Cu(Uu.t.Cross(ju.directions[0], su.directions[0]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[0], su.directions[1]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[0], su.directions[2]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[1], su.directions[0]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[1], su.directions[1]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[1], su.directions[2]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[2], su.directions[0]), ju, su) && (!!Cu(Uu.t.Cross(ju.directions[2], su.directions[1]), ju, su) && !!Cu(Uu.t.Cross(ju.directions[2], su.directions[2]), ju, su))))))))))))))
      }
    }
    bu._TmpVector3 = (0, su.e)(2, Uu.t.Zero)
  },
  40596: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      f: () => qu,
      g: () => lu,
      k: () => Xu
    });
    var su = ju(40412),
      Uu = ju(37494);

    function Zu(uu) {
      -1 === uu.indexOf("vClipPlane") && uu.push("vClipPlane"), -1 === uu.indexOf("vClipPlane2") && uu.push("vClipPlane2"), -1 === uu.indexOf("vClipPlane3") && uu.push("vClipPlane3"), -1 === uu.indexOf("vClipPlane4") && uu.push("vClipPlane4"), -1 === uu.indexOf("vClipPlane5") && uu.push("vClipPlane5"), -1 === uu.indexOf("vClipPlane6") && uu.push("vClipPlane6")
    }

    function Xu(uu, Eu, ju) {
      const su = !!(uu.clipPlane ?? Eu.clipPlane),
        Uu = !!(uu.clipPlane2 ?? Eu.clipPlane2),
        Zu = !!(uu.clipPlane3 ?? Eu.clipPlane3),
        Xu = !!(uu.clipPlane4 ?? Eu.clipPlane4),
        lu = !!(uu.clipPlane5 ?? Eu.clipPlane5),
        qu = !!(uu.clipPlane6 ?? Eu.clipPlane6);
      su && ju.push("#define CLIPPLANE"), Uu && ju.push("#define CLIPPLANE2"), Zu && ju.push("#define CLIPPLANE3"), Xu && ju.push("#define CLIPPLANE4"), lu && ju.push("#define CLIPPLANE5"), qu && ju.push("#define CLIPPLANE6")
    }

    function lu(uu, Eu, ju) {
      let su = !1;
      const Uu = !!(uu.clipPlane ?? Eu.clipPlane),
        Zu = !!(uu.clipPlane2 ?? Eu.clipPlane2),
        Xu = !!(uu.clipPlane3 ?? Eu.clipPlane3),
        lu = !!(uu.clipPlane4 ?? Eu.clipPlane4),
        qu = !!(uu.clipPlane5 ?? Eu.clipPlane5),
        fu = !!(uu.clipPlane6 ?? Eu.clipPlane6);
      return ju.CLIPPLANE !== Uu && (ju.CLIPPLANE = Uu, su = !0), ju.CLIPPLANE2 !== Zu && (ju.CLIPPLANE2 = Zu, su = !0), ju.CLIPPLANE3 !== Xu && (ju.CLIPPLANE3 = Xu, su = !0), ju.CLIPPLANE4 !== lu && (ju.CLIPPLANE4 = lu, su = !0), ju.CLIPPLANE5 !== qu && (ju.CLIPPLANE5 = qu, su = !0), ju.CLIPPLANE6 !== fu && (ju.CLIPPLANE6 = fu, su = !0), su
    }

    function qu(uu, Eu, ju) {
      let su = Eu.clipPlane ?? ju.clipPlane;
      fu(uu, "vClipPlane", su), su = Eu.clipPlane2 ?? ju.clipPlane2, fu(uu, "vClipPlane2", su), su = Eu.clipPlane3 ?? ju.clipPlane3, fu(uu, "vClipPlane3", su), su = Eu.clipPlane4 ?? ju.clipPlane4, fu(uu, "vClipPlane4", su), su = Eu.clipPlane5 ?? ju.clipPlane5, fu(uu, "vClipPlane5", su), su = Eu.clipPlane6 ?? ju.clipPlane6, fu(uu, "vClipPlane6", su)
    }

    function fu(uu, Eu, ju) {
      if (ju) {
        const Zu = su.b.hV()?.floatingOriginOffset || Uu.t.ZeroReadOnly;
        uu.setFloat4(Eu, ju.normal.x, ju.normal.y, ju.normal.z, ju.d + Uu.t.Dot(ju.normal, Zu))
      }
    }
  },
  40610: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(uu, Eu) {
        this._defines[uu] || (uu < this._currentRank && (this._currentRank = uu), uu > this._maxRank && (this._maxRank = uu), this._defines[uu] = new Array), this._defines[uu].push(Eu)
      }
      addCPUSkinningFallback(uu, Eu) {
        this._mesh = Eu, uu < this._currentRank && (this._currentRank = uu), uu > this._maxRank && (this._maxRank = uu)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(uu, Eu) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, uu = uu.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), Eu._bonesComputationForcedToCPU = !0;
          const ju = this._mesh.hV();
          for (let uu = 0; uu < ju.meshes.length; uu++) {
            const su = ju.meshes[uu];
            if (su.material) {
              if (su.computeBonesUsingShaders && 0 !== su.numBoneInfluencers)
                if (su.material.getEffect() === Eu) su.computeBonesUsingShaders = !1;
                else if (su.iG)
                for (const uu of su.iG) {
                  if (uu.effect === Eu) {
                    su.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && su.computeBonesUsingShaders && su.numBoneInfluencers > 0 && (su.computeBonesUsingShaders = !1)
          }
        } else {
          const Eu = this._defines[this._currentRank];
          if (Eu)
            for (let ju = 0; ju < Eu.length; ju++) uu = uu.replace("#define " + Eu[ju], "");
          this._currentRank++
        }
        return uu
      }
    }
  },
  40552: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => gu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40356),
      Xu = ju(37514),
      lu = ju(37506),
      qu = ju(40556),
      fu = ju(40390),
      Cu = ju(39032),
      bu = ju(38154),
      cu = ju(40589),
      Nu = ju(40272);
    let Ou = (() => {
      var uu;
      let Eu, ju, Zu, Xu, lu, qu, fu, Cu, bu, cu, Ou, Yu, hu = [];
      return uu = class {
        constructor() {
          this._func = (0, su.g)(this, hu), this.reset()
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
          Nu.e.Clone((() => uu), this)
        }
        serialize() {
          return Nu.e.Serialize(this)
        }
        parse(uu, Eu, ju) {
          Nu.e.Parse((() => this), uu, Eu, ju)
        }
      }, (() => {
        const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], (0, su.e)(uu, null, Eu, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: uu => "func" in uu,
            get: uu => uu.func
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, ju, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: uu => "backFunc" in uu,
            get: uu => uu.backFunc
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, Zu, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: uu => "funcRef" in uu,
            get: uu => uu.funcRef
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, Xu, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "funcMask" in uu,
            get: uu => uu.funcMask
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, lu, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "opStencilFail" in uu,
            get: uu => uu.opStencilFail
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, qu, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "opDepthFail" in uu,
            get: uu => uu.opDepthFail
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, fu, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: uu => "opStencilDepthPass" in uu,
            get: uu => uu.opStencilDepthPass
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, Cu, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "backOpStencilFail" in uu,
            get: uu => uu.backOpStencilFail
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, bu, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: uu => "backOpDepthFail" in uu,
            get: uu => uu.backOpDepthFail
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, cu, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: uu => "backOpStencilDepthPass" in uu,
            get: uu => uu.backOpStencilDepthPass
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, Ou, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: uu => "mask" in uu,
            get: uu => uu.mask
          },
          metadata: Nu
        }, null, hu), (0, su.e)(uu, null, Yu, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "enabled" in uu,
            get: uu => uu.enabled
          },
          metadata: Nu
        }, null, hu), Nu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nu
        })
      })(), uu
    })();
    var Yu = ju(40592),
      hu = ju(40179),
      Du = ju(40153);
    let gu = (() => {
      var uu;
      let Eu, ju, Du, gu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku, mu, vu, Ku, Vu, ru, Qu, iu, Wu, Su, Iu, Fu, Bu, Lu, tu, xu = [],
        Tu = [],
        Hu = [],
        Au = [],
        nu = [],
        yu = [],
        zu = [],
        Ru = [],
        uE = [],
        EE = [],
        jE = [],
        sE = [],
        UE = [],
        ZE = [],
        XE = [],
        lE = [],
        qE = [],
        fE = [],
        CE = [],
        bE = [],
        cE = [],
        NE = [],
        OE = [],
        YE = [],
        hE = [],
        DE = [],
        gE = [],
        ME = [],
        eE = [],
        GE = [],
        pE = [],
        wE = [],
        JE = [],
        dE = [],
        aE = [],
        PE = [],
        oE = [],
        kE = [],
        mE = [],
        vE = [],
        KE = [],
        VE = [],
        rE = [],
        QE = [],
        iE = [],
        WE = [],
        SE = [],
        IE = [],
        FE = [],
        BE = [],
        LE = [];
      return uu = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(Eu) {
          this._useVertexPulling !== Eu && (this._useVertexPulling = Eu, this.tEu(uu.MiscDirtyFlag))
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
        set alpha(Eu) {
          if (this._alpha === Eu) return;
          const ju = this._alpha;
          this._alpha = Eu, 1 !== ju && 1 !== Eu || this.tEu(uu.MiscDirtyFlag + uu.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(Eu) {
          this._backFaceCulling !== Eu && (this._backFaceCulling = Eu, this.tEu(uu.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(Eu) {
          const ju = Math.max(0, Math.min(0 | Eu, 4));
          this._textureRepetitionMode !== ju && (this._textureRepetitionMode = ju, this.tEu(uu.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(Eu) {
          this._cullBackFaces !== Eu && (this._cullBackFaces = Eu, this.tEu(uu.TextureDirtyFlag))
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
          this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Xu.d), this._onBindObservable
        }
        set onBind(uu) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(uu)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Xu.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Xu.d), this._onEffectCreatedObservable
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
        setAlphaMode(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[ju] !== Eu && (this._alphaMode[ju] = Eu, this.tEu(uu.TextureDirtyFlag))
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
        set fogEnabled(Eu) {
          this._fogEnabled !== Eu && (this._fogEnabled = Eu, this.tEu(uu.MiscDirtyFlag))
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
        set wireframe(Eu) {
          this.fillMode = Eu ? uu.WireFrameFillMode : uu.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case uu.PointFillMode:
            case uu.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(Eu) {
          this.fillMode = Eu ? uu.PointFillMode : uu.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(Eu) {
          this._fillMode !== Eu && (this._fillMode = Eu, this.tEu(uu.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(uu) {
          const Eu = this.hV().wO().getCaps().fragmentDepthSupported;
          uu && !Eu && Cu.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = uu && Eu, this._markAllSubMeshesAsMiscDirty()
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
        constructor(Eu, ju, Uu) {
          let qu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, su.g)(this, xu), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, su.g)(this, Tu, void 0), this.uniqueId = ((0, su.g)(this, Hu), (0, su.g)(this, Au, void 0)), this._loadedUniqueId = (0, su.g)(this, nu), this.name = (0, su.g)(this, yu, void 0), this.metadata = ((0, su.g)(this, zu), (0, su.g)(this, Ru, null)), this._internalMetadata = (0, su.g)(this, uE), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, su.g)(this, EE, !1), this.checkReadyOnlyOnce = ((0, su.g)(this, jE), (0, su.g)(this, sE, !1)), this.state = ((0, su.g)(this, UE), (0, su.g)(this, ZE, "")), this._alpha = ((0, su.g)(this, XE), (0, su.g)(this, lE, 1)), this.inspectableCustomProperties = (0, su.g)(this, qE), this._backFaceCulling = (0, su.g)(this, fE, !0), this._textureRepetitionMode = ((0, su.g)(this, CE), (0, su.g)(this, bE, 0)), this.textureRepetitionHexTilingParams = ((0, su.g)(this, cE), (0, su.g)(this, NE, [1, .6, 7, .5])), this._cullBackFaces = ((0, su.g)(this, OE), (0, su.g)(this, YE, !0)), this._blockDirtyMechanism = ((0, su.g)(this, hE), !1), this.sideOrientation = (0, su.g)(this, DE, null), this.onCompiled = ((0, su.g)(this, gE), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.wV = new Xu.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, su.g)(this, ME, [2]), this._needDepthPrePass = ((0, su.g)(this, eE), (0, su.g)(this, GE, !1)), this.disableDepthWrite = ((0, su.g)(this, pE), (0, su.g)(this, wE, !1)), this.disableColorWrite = ((0, su.g)(this, JE), (0, su.g)(this, dE, !1)), this.forceDepthWrite = ((0, su.g)(this, aE), (0, su.g)(this, PE, !1)), this.depthFunction = ((0, su.g)(this, oE), (0, su.g)(this, kE, 0)), this.separateCullingPass = ((0, su.g)(this, mE), (0, su.g)(this, vE, !1)), this._fogEnabled = ((0, su.g)(this, KE), (0, su.g)(this, VE, !0)), this.pointSize = ((0, su.g)(this, rE), (0, su.g)(this, QE, 1)), this.zOffset = ((0, su.g)(this, iE), (0, su.g)(this, WE, 0)), this.zOffsetUnits = ((0, su.g)(this, SE), (0, su.g)(this, IE, 0)), this.clipPlane = (0, su.g)(this, FE), this.stencil = new Ou, this._isVertexOutputInvariant = (0, su.g)(this, BE, uu.ForceVertexOutputInvariant), this._materialContext = (0, su.g)(this, LE), this._useUBO = !1, this._fillMode = uu.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = Eu;
          const Cu = ju || lu.b.LastCreatedScene;
          Cu && (this._scene = Cu, this._dirtyCallbacks = {}, this._forceGLSL = qu, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = Eu || Zu.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.wO().createMaterialContext(), this._drawWrapper = new cu.b(this._scene.wO(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new fu.d(this._scene.wO(), void 0, void 0, Eu), this._useUBO = this.hV().wO().supportsUniformBuffers, this._createUniformBuffer(), Uu || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), uu.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const uu = this.hV().wO();
          this._uniformBuffer?.dispose(), uu.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new fu.d(uu, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new fu.d(this._scene.wO(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(uu, Eu) {
          return !0
        }
        isReadyForSubMesh(uu, Eu, ju) {
          const su = Eu.materialDefines;
          return !!su && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = su, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        hV() {
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
          let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ju = this.hV().meshes;
          for (const uu of ju)
            if (uu.iG)
              for (const ju of uu.iG)
                if (ju.oO() === this)
                  for (const uu of ju._drawWrappers) uu && this._materialContext === uu.materialContext && (uu._wasPreviouslyReady = !1, uu._wasPreviouslyUsingInstances = null, uu._forceRebindOnNextCall = Eu);
          Eu && this.tEu(uu.AllDirtyFlag)
        }
        _preBind(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const su = this._scene.wO(),
            Uu = (null == ju ? this.sideOrientation : ju) === uu.ClockWiseSideOrientation,
            Zu = Eu || this._getDrawWrapper();
          return (0, hu.e)(Zu) && Zu.materialContext && (Zu.materialContext.useVertexPulling = this.useVertexPulling), su.enableEffect(Zu), su.setState(this.backFaceCulling, this.zOffset, !1, Uu, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), Uu
        }
        bind(uu, Eu) {}
        buildUniformLayout() {
          const uu = this._uniformBuffer;
          this._eventInfo.ubo = uu, this._callbackPluginEventGeneric(8, this._eventInfo), uu.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(uu, Eu, ju) {
          const su = ju._drawWrapper;
          this._eventInfo.subMesh = ju, this._callbackPluginEventBindForSubMesh(this._eventInfo), su._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(uu) {}
        bindView(uu) {
          this._useUBO ? this._needToBindSceneUbo = !0 : uu.setMatrix("view", this.hV().getViewMatrix())
        }
        bindViewProjection(uu) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (uu.setMatrix("viewProjection", this.hV().getTransformMatrix()), uu.setMatrix("projection", this.hV().getProjectionMatrix()), uu.setMatrix("inverseProjection", this.hV().getInverseProjectionMatrix()))
        }
        bindEyePosition(uu, Eu) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(uu, Eu)
        }
        _afterBind(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && Eu && (this._needToBindSceneUbo = !1, (0, Yu.B)(Eu, this.hV().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = uu ? uu.visibility : 1, this._onBindObservable && uu && this._onBindObservable.notifyObservers(uu), this.disableDepthWrite) {
            const uu = this._scene.wO();
            this._cachedDepthWriteState = uu.getDepthWrite(), uu.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const uu = this._scene.wO();
            this._cachedColorWriteState = uu.getColorWrite(), uu.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const uu = this._scene.wO();
            this._cachedDepthFunctionState = uu.getDepthFunction() || 0, uu.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.wO().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.wO().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.wO().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(Eu, ju) {
          const su = {};
          if (this._serializePlugins(su), uu._ParsePlugins(su, Eu, this._scene, ju), this.pluginManager)
            for (const uu of this.pluginManager._plugins) {
              const ju = Eu.pluginManager.getPlugin(uu.name);
              ju && uu.copyTo(ju)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const uu = [];
            for (const Eu in this.meshMap) {
              const ju = this.meshMap[Eu];
              ju && uu.push(ju)
            }
            return uu
          }
          return this._scene.meshes.filter((uu => uu.material === this))
        }
        forceCompilation(uu, Eu, ju, su) {
          const Uu = {
              clipPlane: !1,
              useInstances: !1,
              ...ju
            },
            Zu = this.hV(),
            Xu = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const lu = () => {
            if (!this._scene || !this._scene.wO()) return;
            const ju = Zu.clipPlane;
            if (Uu.clipPlane && (Zu.clipPlane = new bu.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let ju = !0,
                Zu = null;
              if (uu.iG) {
                const Eu = new qu.e(0, 0, 0, 0, 0, uu, void 0, !1, !1);
                Eu.materialDefines && (Eu.materialDefines._renderId = -1), this.isReadyForSubMesh(uu, Eu, Uu.useInstances) || (Eu.effect && Eu.effect.getCompilationError() && Eu.effect.allFallbacksProcessed() ? Zu = Eu.effect.getCompilationError() : (ju = !1, setTimeout(lu, 16)))
              }
              ju && (this.allowShaderHotSwapping = Xu, Zu && su && su(Zu), Eu && Eu(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Xu, Eu && Eu(this)) : setTimeout(lu, 16);
            Uu.clipPlane && (Zu.clipPlane = ju)
          };
          lu()
        }
        async forceCompilationAsync(uu, Eu) {
          return await new Promise(((ju, su) => {
            this.forceCompilation(uu, (() => {
              ju()
            }), Eu, (uu => {
              su(uu)
            }))
          }))
        }
        tEu(Eu) {
          this.hV().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (uu._DirtyCallbackArray.length = 0, Eu & uu.ImageProcessingDirtyFlag && uu._DirtyCallbackArray.push(uu._ImageProcessingDirtyCallBack), Eu & uu.TextureDirtyFlag && uu._DirtyCallbackArray.push(uu._TextureDirtyCallBack), Eu & uu.LightDirtyFlag && uu._DirtyCallbackArray.push(uu._LightsDirtyCallBack), Eu & uu.FresnelDirtyFlag && uu._DirtyCallbackArray.push(uu._FresnelDirtyCallBack), Eu & uu.AttributesDirtyFlag && uu._DirtyCallbackArray.push(uu._AttributeDirtyCallBack), Eu & uu.MiscDirtyFlag && uu._DirtyCallbackArray.push(uu._MiscDirtyCallBack), Eu & uu.PrePassDirtyFlag && uu._DirtyCallbackArray.push(uu._PrePassDirtyCallBack), uu._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(uu._RunDirtyCallBacks), this.hV().resetCachedMaterial())
        }
        resetDrawCache() {
          const uu = this.hV().meshes;
          for (const Eu of uu)
            if (Eu.iG)
              for (const uu of Eu.iG) uu.oO() === this && uu.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(uu) {
          const Eu = this.hV();
          if (Eu.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ju = Eu.meshes;
          for (const su of ju)
            if (su.iG)
              for (const ju of su.iG) {
                if ((ju.oO() || (Eu._hasDefaultMaterial ? Eu.defaultMaterial : null)) === this)
                  for (const Eu of ju._drawWrappers) Eu && Eu.defines && Eu.defines.markAllAsDirty && this._materialContext === Eu.materialContext && uu(Eu.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.hV().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const uu = this.hV().enablePrePassRenderer();
          uu && uu.tEu()
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
            this.wV.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(uu)
            }))
          }
        }
        setPrePassRenderer(uu) {
          return !1
        }
        dispose(uu, Eu, ju) {
          const su = this.hV();
          if (su.stopAnimation(this), su.freeProcessedMaterials(), su.removeMaterial(this), this._eventInfo.forceDisposeTextures = Eu, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const uu = this._parentContainer.materials.indexOf(this);
            uu > -1 && this._parentContainer.materials.splice(uu, 1), this._parentContainer = null
          }
          if (!0 !== ju)
            if (this.meshMap)
              for (const Uu in this.meshMap) {
                const uu = this.meshMap[Uu];
                this._disposeMeshResources(uu)
              } else {
                const uu = su.meshes;
                for (const Eu of uu) this._disposeMeshResources(Eu)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.wV.notifyObservers(this), this.wV.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(uu) {
          if (!uu) return;
          const Eu = uu.geometry,
            ju = uu._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (uu.iG && ju)
              for (const su of uu.iG) {
                const uu = su._drawWrappers;
                for (let Uu = 0; Uu < uu.length; Uu++) {
                  const Zu = uu[Uu]?.effect;
                  if (!Zu) continue;
                  ju[Uu] === this && (Eu?._releaseVertexArrayObject(Zu), su._removeDrawWrapper(Uu, !0, !0))
                }
              }
          } else Eu?._releaseVertexArrayObject(this._drawWrapper.effect);
          uu.material !== this || uu.CUu || (uu.material = null)
        }
        serialize() {
          const uu = Nu.e.Serialize(this);
          return uu.stencil = this.stencil.serialize(), uu.uniqueId = this.uniqueId, this._serializePlugins(uu), uu
        }
        _serializePlugins(uu) {
          if (uu.plugins = {}, this.pluginManager)
            for (const Eu of this.pluginManager._plugins) Eu.doNotSerialize || (uu.plugins[Eu.getClassName()] = Eu.serialize())
        }
        static ParseAlphaMode(uu, Eu) {
          void 0 !== uu._alphaMode ? Eu._alphaMode = Array.isArray(uu._alphaMode) ? [...uu._alphaMode] : [uu._alphaMode] : void 0 !== uu.alphaMode ? Eu._alphaMode = Array.isArray(uu.alphaMode) ? [...uu.alphaMode] : [uu.alphaMode] : Eu._alphaMode = [2]
        }
        static Parse(Eu, ju, su) {
          if (Eu.customType) {
            if ("BABYLON.PBRMaterial" === Eu.customType && Eu.overloadedAlbedo && (Eu.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Cu.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else Eu.customType = "BABYLON.StandardMaterial";
          const Uu = Zu.h.Instantiate(Eu.customType).Parse(Eu, ju, su);
          return Uu._loadedUniqueId = Eu.uniqueId, uu.ParseAlphaMode(Eu, Uu), Uu
        }
        static _ParsePlugins(uu, Eu, ju, su) {
          if (uu.plugins)
            for (const Uu in uu.plugins) {
              const Xu = uu.plugins[Uu];
              let lu = Eu.pluginManager?.getPlugin(Xu.name);
              if (!lu) {
                const uu = Zu.h.Instantiate("BABYLON." + Uu);
                uu && (lu = new uu(Eu))
              }
              lu?.parse(Xu, ju, su)
            }
        }
      }, (() => {
        const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Du = [(0, Uu.E)()], gu = [(0, Uu.E)()], Mu = [(0, Uu.E)()], eu = [(0, Uu.E)()], Gu = [(0, Uu.E)()], pu = [(0, Uu.E)("alpha")], wu = [(0, Uu.E)("backFaceCulling")], Ju = [(0, Uu.E)("textureRepetitionMode")], du = [(0, Uu.E)("textureRepetitionHexTilingParams")], au = [(0, Uu.E)("cullBackFaces")], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], ku = [(0, Uu.E)()], mu = [(0, Uu.E)()], vu = [(0, Uu.E)()], Ku = [(0, Uu.E)()], Vu = [(0, Uu.E)()], ru = [(0, Uu.E)()], Qu = [(0, Uu.E)("fogEnabled")], iu = [(0, Uu.E)()], Wu = [(0, Uu.E)()], Su = [(0, Uu.E)()], Iu = [(0, Uu.E)()], Fu = [(0, Uu.E)()], Bu = [(0, Uu.E)()], Lu = [(0, Uu.E)()], tu = [(0, Uu.E)()], (0, su.e)(uu, null, Iu, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: uu => "pointsCloud" in uu,
            get: uu => uu.pointsCloud
          },
          metadata: Zu
        }, null, xu), (0, su.e)(uu, null, Fu, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "fillMode" in uu,
            get: uu => uu.fillMode
          },
          metadata: Zu
        }, null, xu), (0, su.e)(uu, null, Bu, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLogarithmicDepth" in uu,
            get: uu => uu.useLogarithmicDepth
          },
          metadata: Zu
        }, null, xu), (0, su.e)(uu, null, tu, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "transparencyMode" in uu,
            get: uu => uu.transparencyMode
          },
          metadata: Zu
        }, null, xu), (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: uu => "id" in uu,
            get: uu => uu.id,
            set: (uu, Eu) => {
              uu.id = Eu
            }
          },
          metadata: Zu
        }, Tu, Hu), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: uu => "uniqueId" in uu,
            get: uu => uu.uniqueId,
            set: (uu, Eu) => {
              uu.uniqueId = Eu
            }
          },
          metadata: Zu
        }, Au, nu), (0, su.e)(null, null, Du, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: uu => "name" in uu,
            get: uu => uu.name,
            set: (uu, Eu) => {
              uu.name = Eu
            }
          },
          metadata: Zu
        }, yu, zu), (0, su.e)(null, null, gu, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: uu => "metadata" in uu,
            get: uu => uu.metadata,
            set: (uu, Eu) => {
              uu.metadata = Eu
            }
          },
          metadata: Zu
        }, Ru, uE), (0, su.e)(null, null, Mu, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: uu => "checkReadyOnEveryCall" in uu,
            get: uu => uu.checkReadyOnEveryCall,
            set: (uu, Eu) => {
              uu.checkReadyOnEveryCall = Eu
            }
          },
          metadata: Zu
        }, EE, jE), (0, su.e)(null, null, eu, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: uu => "checkReadyOnlyOnce" in uu,
            get: uu => uu.checkReadyOnlyOnce,
            set: (uu, Eu) => {
              uu.checkReadyOnlyOnce = Eu
            }
          },
          metadata: Zu
        }, sE, UE), (0, su.e)(null, null, Gu, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: uu => "state" in uu,
            get: uu => uu.state,
            set: (uu, Eu) => {
              uu.state = Eu
            }
          },
          metadata: Zu
        }, ZE, XE), (0, su.e)(null, null, pu, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "_alpha" in uu,
            get: uu => uu._alpha,
            set: (uu, Eu) => {
              uu._alpha = Eu
            }
          },
          metadata: Zu
        }, lE, qE), (0, su.e)(null, null, wu, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: uu => "_backFaceCulling" in uu,
            get: uu => uu._backFaceCulling,
            set: (uu, Eu) => {
              uu._backFaceCulling = Eu
            }
          },
          metadata: Zu
        }, fE, CE), (0, su.e)(null, null, Ju, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_textureRepetitionMode" in uu,
            get: uu => uu._textureRepetitionMode,
            set: (uu, Eu) => {
              uu._textureRepetitionMode = Eu
            }
          },
          metadata: Zu
        }, bE, cE), (0, su.e)(null, null, du, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: uu => "textureRepetitionHexTilingParams" in uu,
            get: uu => uu.textureRepetitionHexTilingParams,
            set: (uu, Eu) => {
              uu.textureRepetitionHexTilingParams = Eu
            }
          },
          metadata: Zu
        }, NE, OE), (0, su.e)(null, null, au, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: uu => "_cullBackFaces" in uu,
            get: uu => uu._cullBackFaces,
            set: (uu, Eu) => {
              uu._cullBackFaces = Eu
            }
          },
          metadata: Zu
        }, YE, hE), (0, su.e)(null, null, Pu, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: uu => "sideOrientation" in uu,
            get: uu => uu.sideOrientation,
            set: (uu, Eu) => {
              uu.sideOrientation = Eu
            }
          },
          metadata: Zu
        }, DE, gE), (0, su.e)(null, null, ou, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_alphaMode" in uu,
            get: uu => uu._alphaMode,
            set: (uu, Eu) => {
              uu._alphaMode = Eu
            }
          },
          metadata: Zu
        }, ME, eE), (0, su.e)(null, null, ku, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: uu => "_needDepthPrePass" in uu,
            get: uu => uu._needDepthPrePass,
            set: (uu, Eu) => {
              uu._needDepthPrePass = Eu
            }
          },
          metadata: Zu
        }, GE, pE), (0, su.e)(null, null, mu, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableDepthWrite" in uu,
            get: uu => uu.disableDepthWrite,
            set: (uu, Eu) => {
              uu.disableDepthWrite = Eu
            }
          },
          metadata: Zu
        }, wE, JE), (0, su.e)(null, null, vu, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableColorWrite" in uu,
            get: uu => uu.disableColorWrite,
            set: (uu, Eu) => {
              uu.disableColorWrite = Eu
            }
          },
          metadata: Zu
        }, dE, aE), (0, su.e)(null, null, Ku, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceDepthWrite" in uu,
            get: uu => uu.forceDepthWrite,
            set: (uu, Eu) => {
              uu.forceDepthWrite = Eu
            }
          },
          metadata: Zu
        }, PE, oE), (0, su.e)(null, null, Vu, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: uu => "depthFunction" in uu,
            get: uu => uu.depthFunction,
            set: (uu, Eu) => {
              uu.depthFunction = Eu
            }
          },
          metadata: Zu
        }, kE, mE), (0, su.e)(null, null, ru, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: uu => "separateCullingPass" in uu,
            get: uu => uu.separateCullingPass,
            set: (uu, Eu) => {
              uu.separateCullingPass = Eu
            }
          },
          metadata: Zu
        }, vE, KE), (0, su.e)(null, null, Qu, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "_fogEnabled" in uu,
            get: uu => uu._fogEnabled,
            set: (uu, Eu) => {
              uu._fogEnabled = Eu
            }
          },
          metadata: Zu
        }, VE, rE), (0, su.e)(null, null, iu, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: uu => "pointSize" in uu,
            get: uu => uu.pointSize,
            set: (uu, Eu) => {
              uu.pointSize = Eu
            }
          },
          metadata: Zu
        }, QE, iE), (0, su.e)(null, null, Wu, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: uu => "zOffset" in uu,
            get: uu => uu.zOffset,
            set: (uu, Eu) => {
              uu.zOffset = Eu
            }
          },
          metadata: Zu
        }, WE, SE), (0, su.e)(null, null, Su, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: uu => "zOffsetUnits" in uu,
            get: uu => uu.zOffsetUnits,
            set: (uu, Eu) => {
              uu.zOffsetUnits = Eu
            }
          },
          metadata: Zu
        }, IE, FE), (0, su.e)(null, null, Lu, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: uu => "_isVertexOutputInvariant" in uu,
            get: uu => uu._isVertexOutputInvariant,
            set: (uu, Eu) => {
              uu._isVertexOutputInvariant = Eu
            }
          },
          metadata: Zu
        }, BE, LE), Zu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zu
        })
      })(), uu.TriangleFillMode = 0, uu.WireFrameFillMode = 1, uu.PointFillMode = 2, uu.PointListDrawMode = 3, uu.LineListDrawMode = 4, uu.LineLoopDrawMode = 5, uu.LineStripDrawMode = 6, uu.TriangleStripDrawMode = 7, uu.TriangleFanDrawMode = 8, uu.ClockWiseSideOrientation = 0, uu.CounterClockWiseSideOrientation = 1, uu.ImageProcessingDirtyFlag = 64, uu.TextureDirtyFlag = 1, uu.LightDirtyFlag = 2, uu.FresnelDirtyFlag = 4, uu.AttributesDirtyFlag = 8, uu.MiscDirtyFlag = 16, uu.PrePassDirtyFlag = 32, uu.AllDirtyFlag = 127, uu.MATERIAL_OPAQUE = 0, uu.MATERIAL_ALPHATEST = 1, uu.MATERIAL_ALPHABLEND = 2, uu.MATERIAL_ALPHATESTANDBLEND = 3, uu.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, uu.MATERIAL_NORMALBLENDMETHOD_RNM = 1, uu.LIGHTFALLOFF_PHYSICAL = 0, uu.LIGHTFALLOFF_GLTF = 1, uu.LIGHTFALLOFF_STANDARD = 2, uu.OnEventObservable = new Xu.d, uu.ForceVertexOutputInvariant = !1, uu._AllDirtyCallBack = uu => uu.markAllAsDirty(), uu._ImageProcessingDirtyCallBack = uu => uu.markAsImageProcessingDirty(), uu._TextureDirtyCallBack = uu => uu.markAsTexturesDirty(), uu._FresnelDirtyCallBack = uu => uu.markAsFresnelDirty(), uu._MiscDirtyCallBack = uu => uu.markAsMiscDirty(), uu._PrePassDirtyCallBack = uu => uu.markAsPrePassDirty(), uu._LightsDirtyCallBack = uu => uu.markAsLightDirty(), uu._AttributeDirtyCallBack = uu => uu.markAsAttributesDirty(), uu._FresnelAndMiscDirtyCallBack = Eu => {
        uu._FresnelDirtyCallBack(Eu), uu._MiscDirtyCallBack(Eu)
      }, uu._TextureAndMiscDirtyCallBack = Eu => {
        uu._TextureDirtyCallBack(Eu), uu._MiscDirtyCallBack(Eu)
      }, uu._DirtyCallbackArray = [], uu._RunDirtyCallBacks = Eu => {
        for (const ju of uu._DirtyCallbackArray) ju(Eu)
      }, uu
    })();
    Object.getOwnPropertyDescriptor(gu.prototype, "pluginManager") || Object.defineProperty(gu.prototype, "pluginManager", (0, Du.d)("Material", "pluginManager"))
  },
  40598: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(40168);
    class Uu {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(uu) {
        this._DiffuseTextureEnabled !== uu && (this._DiffuseTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(uu) {
        this._BaseWeightTextureEnabled !== uu && (this._BaseWeightTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(uu) {
        this._BaseDiffuseRoughnessTextureEnabled !== uu && (this._BaseDiffuseRoughnessTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(uu) {
        this._DetailTextureEnabled !== uu && (this._DetailTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(uu) {
        this._DecalMapEnabled !== uu && (this._DecalMapEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(uu) {
        this._AmbientTextureEnabled !== uu && (this._AmbientTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(uu) {
        this._OpacityTextureEnabled !== uu && (this._OpacityTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(uu) {
        this._ReflectionTextureEnabled !== uu && (this._ReflectionTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(uu) {
        this._EmissiveTextureEnabled !== uu && (this._EmissiveTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(uu) {
        this._SpecularTextureEnabled !== uu && (this._SpecularTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(uu) {
        this._BumpTextureEnabled !== uu && (this._BumpTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(uu) {
        this._LightmapTextureEnabled !== uu && (this._LightmapTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(uu) {
        this._RefractionTextureEnabled !== uu && (this._RefractionTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(uu) {
        this._ColorGradingTextureEnabled !== uu && (this._ColorGradingTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(uu) {
        this._FresnelEnabled !== uu && (this._FresnelEnabled = uu, su.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(uu) {
        this._ClearCoatTextureEnabled !== uu && (this._ClearCoatTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(uu) {
        this._ClearCoatBumpTextureEnabled !== uu && (this._ClearCoatBumpTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(uu) {
        this._ClearCoatTintTextureEnabled !== uu && (this._ClearCoatTintTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(uu) {
        this._SheenTextureEnabled !== uu && (this._SheenTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(uu) {
        this._AnisotropicTextureEnabled !== uu && (this._AnisotropicTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(uu) {
        this._ThicknessTextureEnabled !== uu && (this._ThicknessTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(uu) {
        this._RefractionIntensityTextureEnabled !== uu && (this._RefractionIntensityTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(uu) {
        this._TranslucencyIntensityTextureEnabled !== uu && (this._TranslucencyIntensityTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(uu) {
        this._TranslucencyColorTextureEnabled !== uu && (this._TranslucencyColorTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(uu) {
        this._IridescenceTextureEnabled !== uu && (this._IridescenceTextureEnabled = uu, su.d.MarkAllMaterialsAsDirty(1))
      }
    }
    Uu._DiffuseTextureEnabled = !0, Uu._BaseWeightTextureEnabled = !0, Uu._BaseDiffuseRoughnessTextureEnabled = !0, Uu._DetailTextureEnabled = !0, Uu._DecalMapEnabled = !0, Uu._AmbientTextureEnabled = !0, Uu._OpacityTextureEnabled = !0, Uu._ReflectionTextureEnabled = !0, Uu._EmissiveTextureEnabled = !0, Uu._SpecularTextureEnabled = !0, Uu._BumpTextureEnabled = !0, Uu._LightmapTextureEnabled = !0, Uu._RefractionTextureEnabled = !0, Uu._ColorGradingTextureEnabled = !0, Uu._FresnelEnabled = !0, Uu._ClearCoatTextureEnabled = !0, Uu._ClearCoatBumpTextureEnabled = !0, Uu._ClearCoatTintTextureEnabled = !0, Uu._SheenTextureEnabled = !0, Uu._AnisotropicTextureEnabled = !0, Uu._ThicknessTextureEnabled = !0, Uu._RefractionIntensityTextureEnabled = !0, Uu._TranslucencyIntensityTextureEnabled = !0, Uu._TranslucencyColorTextureEnabled = !0, Uu._IridescenceTextureEnabled = !0
  },
  40592: (uu, Eu, ju) => {
    ju.d(Eu, {
      B: () => hu,
      E: () => eu,
      I: () => ku,
      L: () => Gu,
      P: () => Pu,
      S: () => ou,
      U: () => Nu,
      W: () => cu,
      Z: () => Fu,
      ab: () => Qu,
      d: () => vu,
      eb: () => Vu,
      fb: () => Ku,
      h: () => pu,
      j: () => bu,
      jb: () => Mu,
      kb: () => mu,
      lb: () => Bu,
      m: () => Du,
      mb: () => Lu,
      o: () => gu,
      qb: () => tu,
      r: () => au,
      rb: () => Au,
      u: () => qu,
      ub: () => Tu,
      vb: () => Hu,
      x: () => Yu,
      zb: () => Ou
    });
    var su = ju(39032),
      Uu = ju(37506),
      Zu = ju(40450),
      Xu = ju(40596),
      lu = ju(40598);

    function qu(uu, Eu, ju) {
      if (!uu || uu.LOGARITHMICDEPTH || uu.indexOf && uu.indexOf("LOGARITHMICDEPTH") >= 0) {
        const uu = ju.activeCamera;
        1 === uu.mode && su.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), Eu.setFloat("logarithmicDepthConstant", 2 / (Math.log(uu.maxZ + 1) / Math.LN2))
      }
    }
    const fu = {
        r: 0,
        g: 0,
        b: 0
      },
      Cu = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function bu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ju && uu.fogEnabled && (!Eu || Eu.applyFog) && 0 !== uu.fogMode && (ju.setFloat4("vFogInfos", uu.fogMode, uu.fogStart, uu.fogEnd, uu.fogDensity), su ? (uu.fogColor.toLinearSpaceToRef(fu, uu.wO().useExactSrgbConversions), ju.setColor3("vFogColor", fu)) : ju.setColor3("vFogColor", uu.fogColor))
    }

    function cu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
      const bu = uu.numMaxInfluencers || uu.numInfluencers;
      return bu <= 0 ? 0 : (Eu.push("#define MORPHTARGETS"), uu.hasPositions && Eu.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), uu.hasNormals && Eu.push("#define MORPHTARGETTEXTURE_HASNORMALS"), uu.hasTangents && Eu.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), uu.hasUVs && Eu.push("#define MORPHTARGETTEXTURE_HASUVS"), uu.hasUV2s && Eu.push("#define MORPHTARGETTEXTURE_HASUV2S"), uu.hasColors && Eu.push("#define MORPHTARGETTEXTURE_HASCOLORS"), uu.supportsPositions && Uu && Eu.push("#define MORPHTARGETS_POSITION"), uu.supportsNormals && Zu && Eu.push("#define MORPHTARGETS_NORMAL"), uu.supportsTangents && Xu && Eu.push("#define MORPHTARGETS_TANGENT"), uu.supportsUVs && lu && Eu.push("#define MORPHTARGETS_UV"), uu.supportsUV2s && qu && Eu.push("#define MORPHTARGETS_UV2"), uu.supportsColors && fu && Eu.push("#define MORPHTARGETS_COLOR"), Eu.push("#define NUM_MORPH_INFLUENCERS " + bu), uu.isUsingTextureForTargets && Eu.push("#define MORPHTARGETS_TEXTURE"), Cu.NUM_MORPH_INFLUENCERS = bu, Cu.NORMAL = Zu, Cu.TANGENT = Xu, Cu.UV = lu, Cu.UV2 = qu, Cu.COLOR = fu, Nu(ju, su, Cu, Uu), bu)
    }

    function Nu(uu, Eu, ju) {
      let Zu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Xu = ju.NUM_MORPH_INFLUENCERS;
      if (Xu > 0 && Uu.b.LastCreatedEngine) {
        const lu = Uu.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          qu = Eu.morphTargetManager;
        if (qu?.isUsingTextureForTargets) return;
        const fu = qu && qu.supportsPositions && Zu,
          Cu = qu && qu.supportsNormals && ju.NORMAL,
          bu = qu && qu.supportsTangents && ju.TANGENT,
          cu = qu && qu.supportsUVs && ju.UV1,
          Nu = qu && qu.supportsUV2s && ju.UV2,
          Ou = qu && qu.supportsColors && ju.VERTEXCOLOR;
        for (let ju = 0; ju < Xu; ju++) fu && uu.push("position" + ju), Cu && uu.push("normal" + ju), bu && uu.push("tangent" + ju), cu && uu.push("uv_" + ju), Nu && uu.push("uv2_" + ju), Ou && uu.push("color" + ju), uu.length > lu && su.b.Error("Cannot add more vertex attributes for mesh " + Eu.name)
      }
    }

    function Ou(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      uu.push("world0"), uu.push("world1"), uu.push("world2"), uu.push("world3"), Eu && (uu.push("previousWorld0"), uu.push("previousWorld1"), uu.push("previousWorld2"), uu.push("previousWorld3"))
    }

    function Yu(uu, Eu) {
      const ju = uu.morphTargetManager;
      uu && ju && Eu.setFloatArray("morphTargetInfluences", ju.influences)
    }

    function hu(uu, Eu) {
      Eu.bindToEffect(uu, "Scene")
    }

    function Du(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Cu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        bu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        cu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (uu.texturesEnabled && Uu && lu.d.ReflectionTextureEnabled) {
        if (ju.y_("reflectionMatrix", Uu.getReflectionTextureMatrix()), ju.updateFloat2("vReflectionInfos", Uu.level * uu.iblIntensity, cu), qu && Uu.boundingBoxSize) {
          const uu = Uu;
          ju.updateVector3("vReflectionPosition", uu.boundingBoxPosition), ju.updateVector3("vReflectionSize", uu.boundingBoxSize)
        }
        if (Zu) {
          const uu = Uu.getSize().width;
          ju.updateFloat2("vReflectionFilteringInfo", uu, Math.log2(uu))
        }
        if (Cu && !Eu.USEIRRADIANCEMAP) {
          const uu = Uu.sphericalPolynomial;
          if (Eu.USESPHERICALFROMREFLECTIONMAP && uu)
            if (Eu.SPHERICAL_HARMONICS) {
              const Eu = uu.preScaledHarmonics;
              ju.updateVector3("vSphericalL00", Eu.l00), ju.updateVector3("vSphericalL1_1", Eu.l1_1), ju.updateVector3("vSphericalL10", Eu.l10), ju.updateVector3("vSphericalL11", Eu.l11), ju.updateVector3("vSphericalL2_2", Eu.l2_2), ju.updateVector3("vSphericalL2_1", Eu.l2_1), ju.updateVector3("vSphericalL20", Eu.l20), ju.updateVector3("vSphericalL21", Eu.l21), ju.updateVector3("vSphericalL22", Eu.l22)
            } else ju.updateFloat3("vSphericalX", uu.x.x, uu.x.y, uu.x.z), ju.updateFloat3("vSphericalY", uu.y.x, uu.y.y, uu.y.z), ju.updateFloat3("vSphericalZ", uu.z.x, uu.z.y, uu.z.z), ju.updateFloat3("vSphericalXX_ZZ", uu.xx.x - uu.zz.x, uu.xx.y - uu.zz.y, uu.xx.z - uu.zz.z), ju.updateFloat3("vSphericalYY_ZZ", uu.yy.x - uu.zz.x, uu.yy.y - uu.zz.y, uu.yy.z - uu.zz.z), ju.updateFloat3("vSphericalZZ", uu.zz.x, uu.zz.y, uu.zz.z), ju.updateFloat3("vSphericalXY", uu.xy.x, uu.xy.y, uu.xy.z), ju.updateFloat3("vSphericalYZ", uu.yz.x, uu.yz.y, uu.yz.z), ju.updateFloat3("vSphericalZX", uu.zx.x, uu.zx.y, uu.zx.z)
        } else fu && Eu.USEIRRADIANCEMAP && Eu.USE_IRRADIANCE_DOMINANT_DIRECTION && Uu.irradianceTexture && ju.updateVector3("vReflectionDominantDirection", Uu.irradianceTexture._dominantDirection);
        Xu && ju.updateFloat3("vReflectionMicrosurfaceInfos", Uu.getSize().width, Uu.lodGenerationScale, Uu.lodGenerationOffset)
      }
      bu && ju.updateColor3("vReflectionColor", su)
    }

    function gu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (su && lu.d.ReflectionTextureEnabled) {
        Eu.LODBASEDMICROSFURACE ? ju.setTexture("reflectionSampler", su) : (ju.setTexture("reflectionSampler", su._lodTextureMid || su), ju.setTexture("reflectionSamplerLow", su._lodTextureLow || su), ju.setTexture("reflectionSamplerHigh", su._lodTextureHigh || su)), Eu.USEIRRADIANCEMAP && ju.setTexture("irradianceSampler", su.irradianceTexture);
        const Zu = uu.iblCdfGenerator;
        Uu && Zu && ju.setTexture("icdfSampler", Zu.getIcdfTexture())
      }
    }

    function Mu(uu, Eu, ju) {
      Eu._needUVs = !0, Eu[ju] = !0, uu.optimizeUVAllocation && uu.getTextureMatrix().isIdentityAs3x2() ? (Eu[ju + "DIRECTUV"] = uu.coordinatesIndex + 1, Eu["MAINUV" + (uu.coordinatesIndex + 1)] = !0) : Eu[ju + "DIRECTUV"] = 0
    }

    function eu(uu, Eu, ju) {
      const su = uu.getTextureMatrix();
      Eu.y_(ju + "Matrix", su)
    }

    function Gu(uu, Eu, ju) {
      ju.BAKED_VERTEX_ANIMATION_TEXTURE && ju.INSTANCES && uu.push("bakedVertexAnimationSettingsInstanced")
    }

    function pu(uu, Eu, ju) {
      var su;
      if (Eu && uu && (uu.computeBonesUsingShaders && Eu._bonesComputationForcedToCPU && (uu.computeBonesUsingShaders = !1), uu.useBones && uu.computeBonesUsingShaders && uu.skeleton)) {
        const Uu = uu.skeleton;
        if (Uu.isUsingTextureForMatrices && Eu.getUniformIndex("boneTextureInfo") > -1) {
          const ju = Uu.getTransformMatrixTexture(uu);
          Eu.setTexture("boneSampler", ju), Eu.setFloat2("boneTextureInfo", Uu._textureWidth, Uu._textureHeight)
        } else {
          const Zu = Uu.getTransformMatrices(uu);
          Zu && (Eu.setMatrices("mBones", Zu), ju && uu.hV().prePassRenderer && uu.hV().prePassRenderer.getIndex(2) && (ju.previousBones[uu.uniqueId] || (ju.previousBones[uu.uniqueId] = Zu.slice()), Eu.setMatrices("mPreviousBones", ju.previousBones[uu.uniqueId]), su = Zu, ju.previousBones[uu.uniqueId].set(su)))
        }
      }
    }

    function wu(uu, Eu, ju, su, Uu) {
      let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      uu._bindLight(Eu, ju, su, Uu, Zu)
    }
    const Ju = 4,
      du = new WeakMap;

    function au(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Zu = Math.min(Eu.lightSources.length, Uu);
      for (let Xu = 0; Xu < Zu; Xu++) {
        wu(Eu.lightSources[Xu], Xu, uu, ju, "boolean" === typeof su ? su : su.SPECULARTERM, Eu.receiveShadows)
      }
    }

    function Pu(uu, Eu, ju, su) {
      ju.NUM_BONE_INFLUENCERS > 0 && (su.addCPUSkinningFallback(0, Eu), uu.push("matricesIndices"), uu.push("matricesWeights"), ju.NUM_BONE_INFLUENCERS > 4 && (uu.push("matricesIndicesExtra"), uu.push("matricesWeightsExtra")))
    }

    function ou(uu, Eu) {
      (Eu.INSTANCES || Eu.THIN_INSTANCES) && Ou(uu, !!Eu.PREPASS_VELOCITY), Eu.INSTANCESCOLOR && uu.push("instanceColor")
    }

    function ku(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Uu = 0;
      for (let Zu = 0; Zu < ju && uu["LIGHT" + Zu]; Zu++) Zu > 0 && (Uu = su + Zu, Eu.addFallback(Uu, "LIGHT" + Zu)), uu.SHADOWS || (uu["SHADOW" + Zu] && Eu.addFallback(su, "SHADOW" + Zu), uu["SHADOWPCF" + Zu] && Eu.addFallback(su, "SHADOWPCF" + Zu), uu["SHADOWPCSS" + Zu] && Eu.addFallback(su, "SHADOWPCSS" + Zu), uu["SHADOWPOISSON" + Zu] && Eu.addFallback(su, "SHADOWPOISSON" + Zu), uu["SHADOWESM" + Zu] && Eu.addFallback(su, "SHADOWESM" + Zu), uu["SHADOWCLOSEESM" + Zu] && Eu.addFallback(su, "SHADOWCLOSEESM" + Zu));
      return Uu
    }

    function mu(uu, Eu, ju, su, Uu, Zu, Xu) {
      let lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fu = arguments.length > 9 ? arguments[9] : void 0,
        Cu = arguments.length > 10 ? arguments[10] : void 0;
      if (Xu._areMiscDirty) {
        Xu.LOGARITHMICDEPTH = ju, Xu.POINTSIZE = su, Xu.FOG = Uu && function(uu, Eu) {
          return Eu.fogEnabled && uu.applyFog && 0 !== Eu.fogMode
        }(uu, Eu), Xu.NONUNIFORMSCALING = uu.nonUniformScaling, Xu.ALPHATEST = Zu, Xu.DECAL_AFTER_DETAIL = lu, Xu.USE_VERTEX_PULLING = qu, Xu.RIGHT_HANDED = Eu.useRightHandedSystem;
        const bu = qu ? fu?.geometry?.getIndexBuffer() : null,
          cu = !!fu && fu.isUnIndexed;
        Xu.VERTEX_PULLING_USE_INDEX_BUFFER = !!bu && !cu, Xu.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!bu || cu) && bu.is32Bits, Xu.VERTEXOUTPUT_INVARIANT = !!Cu
      }
    }

    function vu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!uu.lightsEnabled || su) return !0;
      const Uu = Eu.lightSources,
        Zu = Math.min(Uu.length, ju);
      for (let Xu = 0; Xu < Zu; Xu++)
        if (!Uu[Xu].areLightTexturesReady()) return !1;
      return !0
    }

    function Ku(uu, Eu, ju, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ju._areLightsDirty) return ju._needNormals;
      const lu = Zu;
      Zu = function(uu, Eu) {
        const ju = uu.wO().getCaps().maxUniformBuffersPerShaderStage;
        if (null == ju) return Eu;
        const su = Math.max(ju - Ju, 1);
        return Math.min(Eu, su)
      }(uu, Zu);
      let qu = 0;
      const fu = {
        needNormals: ju._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (uu.lightsEnabled && !Xu) {
        Eu.lightSources.length > Zu && Zu < lu && function(uu, Eu, ju, Uu) {
          let Zu = du.get(uu);
          Zu || (Zu = new Set, du.set(uu, Zu)), Zu.has(Uu) || (Zu.add(Uu), su.b.Warn(`maxSimultaneousLights is ${Eu} but this engine supports at most ${ju} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${Uu} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${Uu+Ju} uniform buffers, over the device limit of ${uu.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${ju}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${ju} or less to silence this warning.`))
        }(uu.wO(), lu, Zu, Math.min(Eu.lightSources.length, lu));
        for (const su of Eu.lightSources)
          if (ru(uu, Eu, su, qu, ju, Uu, fu), qu++, qu === Zu) break
      }
      ju.SPECULARTERM = fu.specularEnabled, ju.SHADOWS = fu.shadowEnabled;
      const Cu = Math.max(Zu, ju.MAXLIGHTCOUNT || 0);
      for (let su = qu; su < Cu; su++) void 0 !== ju["LIGHT" + su] && (ju["LIGHT" + su] = !1, ju["HEMILIGHT" + su] = !1, ju["POINTLIGHT" + su] = !1, ju["DIRLIGHT" + su] = !1, ju["SPOTLIGHT" + su] = !1, ju["AREALIGHT" + su] = !1, ju["CLUSTLIGHT" + su] = !1, ju["SHADOW" + su] = !1, ju["SHADOWCSM" + su] = !1, ju["SHADOWCSMDEBUG" + su] = !1, ju["SHADOWCSMNUM_CASCADES" + su] = !1, ju["SHADOWCSMUSESHADOWMAXZ" + su] = !1, ju["SHADOWCSMNOBLEND" + su] = !1, ju["SHADOWCSM_RIGHTHANDED" + su] = !1, ju["SHADOWPCF" + su] = !1, ju["SHADOWPCSS" + su] = !1, ju["SHADOWPOISSON" + su] = !1, ju["SHADOWESM" + su] = !1, ju["SHADOWCLOSEESM" + su] = !1, ju["SHADOWCUBE" + su] = !1, ju["SHADOWLOWQUALITY" + su] = !1, ju["SHADOWMEDIUMQUALITY" + su] = !1);
      ju.LIGHTCOUNT = qu, ju.MAXLIGHTCOUNT = Zu;
      const bu = uu.wO().getCaps();
      return void 0 === ju.SHADOWFLOAT && (fu.needRebuild = !0), ju.SHADOWFLOAT = fu.shadowEnabled && (bu.textureFloatRender && bu.textureFloatLinearFiltering || bu.textureHalfFloatRender && bu.textureHalfFloatLinearFiltering), ju.LIGHTMAPEXCLUDED = fu.lightmapMode, fu.needRebuild && ju.rebuild(), fu.needNormals
    }

    function Vu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (Eu && lu.d.ReflectionTextureEnabled) {
        if (!Eu.isReadyOrNotBlocking()) return !1;
        ju._needNormals = !0, ju.REFLECTION = !0, ju.GAMMAREFLECTION = Eu.gammaSpace, ju.RGBDREFLECTION = Eu.isRGBD, ju.LODINREFLECTIONALPHA = Eu.lodLevelInAlpha, ju.LINEARSPECULARREFLECTION = Eu.linearSpecularLOD, ju.USEIRRADIANCEMAP = !1, ju.LODBASEDMICROSFURACE = uu.wO().getCaps().textureLOD;
        const Xu = uu.wO();
        switch (su && Uu > 0 ? (ju.NUM_SAMPLES = "" + Uu, Xu._features.needTypeSuffixInShaderConstants && (ju.NUM_SAMPLES = ju.NUM_SAMPLES + "u"), ju.REALTIME_FILTERING = !0, uu.iblCdfGenerator && (ju.IBL_CDF_FILTERING = !0)) : ju.REALTIME_FILTERING = !1, ju.INVERTCUBICMAP = 6 === Eu.coordinatesMode, ju.REFLECTIONMAP_3D = Eu.isCube, ju.REFLECTIONMAP_OPPOSITEZ = ju.REFLECTIONMAP_3D && uu.useRightHandedSystem ? !Eu.invertZ : Eu.invertZ, ju.REFLECTIONMAP_CUBIC = !1, ju.REFLECTIONMAP_EXPLICIT = !1, ju.REFLECTIONMAP_PLANAR = !1, ju.REFLECTIONMAP_PROJECTION = !1, ju.REFLECTIONMAP_SKYBOX = !1, ju.REFLECTIONMAP_SPHERICAL = !1, ju.REFLECTIONMAP_EQUIRECTANGULAR = !1, ju.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ju.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, Eu.coordinatesMode) {
          case 0:
            ju.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            ju.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            ju.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            ju.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            ju.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            ju.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            ju.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            ju.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            ju.REFLECTIONMAP_CUBIC = !0, ju.USE_LOCAL_REFLECTIONMAP_CUBIC = !!Eu.boundingBoxSize
        }
        5 !== Eu.coordinatesMode && (Eu.irradianceTexture ? (ju.USEIRRADIANCEMAP = !0, ju.USESPHERICALFROMREFLECTIONMAP = !1, ju.USESPHERICALINVERTEX = !1, Eu.irradianceTexture._dominantDirection ? ju.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : ju.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : Eu.isCube && (ju.USESPHERICALFROMREFLECTIONMAP = !0, ju.USEIRRADIANCEMAP = !1, ju.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ju.USESPHERICALINVERTEX = Zu))
      } else ju.REFLECTION = !1, ju.REFLECTIONMAP_3D = !1, ju.REFLECTIONMAP_SPHERICAL = !1, ju.REFLECTIONMAP_PLANAR = !1, ju.REFLECTIONMAP_CUBIC = !1, ju.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, ju.REFLECTIONMAP_PROJECTION = !1, ju.REFLECTIONMAP_SKYBOX = !1, ju.REFLECTIONMAP_EXPLICIT = !1, ju.REFLECTIONMAP_EQUIRECTANGULAR = !1, ju.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ju.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ju.INVERTCUBICMAP = !1, ju.USESPHERICALFROMREFLECTIONMAP = !1, ju.USEIRRADIANCEMAP = !1, ju.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ju.USESPHERICALINVERTEX = !1, ju.REFLECTIONMAP_OPPOSITEZ = !1, ju.LODINREFLECTIONALPHA = !1, ju.GAMMAREFLECTION = !1, ju.RGBDREFLECTION = !1, ju.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function ru(uu, Eu, ju, su, Uu, Xu, lu) {
      switch (lu.needNormals = !0, void 0 === Uu["LIGHT" + su] && (lu.needRebuild = !0), Uu["LIGHT" + su] = !0, Uu["SPOTLIGHT" + su] = !1, Uu["HEMILIGHT" + su] = !1, Uu["POINTLIGHT" + su] = !1, Uu["DIRLIGHT" + su] = !1, Uu["AREALIGHT" + su] = !1, Uu["CLUSTLIGHT" + su] = !1, ju.prepareLightSpecificDefines(Uu, su), Uu["LIGHT_FALLOFF_PHYSICAL" + su] = !1, Uu["LIGHT_FALLOFF_GLTF" + su] = !1, Uu["LIGHT_FALLOFF_STANDARD" + su] = !1, ju.falloffType) {
        case Zu.e.FALLOFF_GLTF:
          Uu["LIGHT_FALLOFF_GLTF" + su] = !0;
          break;
        case Zu.e.FALLOFF_PHYSICAL:
          Uu["LIGHT_FALLOFF_PHYSICAL" + su] = !0;
          break;
        case Zu.e.FALLOFF_STANDARD:
          Uu["LIGHT_FALLOFF_STANDARD" + su] = !0
      }
      if (Xu && !ju.specular.equalsFloats(0, 0, 0) && (lu.specularEnabled = !0), Uu["SHADOW" + su] = !1, Uu["SHADOWCSM" + su] = !1, Uu["SHADOWCSMDEBUG" + su] = !1, Uu["SHADOWCSMNUM_CASCADES" + su] = !1, Uu["SHADOWCSMUSESHADOWMAXZ" + su] = !1, Uu["SHADOWCSMNOBLEND" + su] = !1, Uu["SHADOWCSM_RIGHTHANDED" + su] = !1, Uu["SHADOWPCF" + su] = !1, Uu["SHADOWPCSS" + su] = !1, Uu["SHADOWPOISSON" + su] = !1, Uu["SHADOWESM" + su] = !1, Uu["SHADOWCLOSEESM" + su] = !1, Uu["SHADOWCUBE" + su] = !1, Uu["SHADOWLOWQUALITY" + su] = !1, Uu["SHADOWMEDIUMQUALITY" + su] = !1, Eu && Eu.receiveShadows && uu.shadowsEnabled && ju.shadowEnabled) {
        const Eu = ju.getShadowGenerator(uu.activeCamera) ?? ju.getShadowGenerator();
        if (Eu) {
          const uu = Eu.getShadowMap();
          uu && uu.renderList && uu.renderList.length > 0 && (lu.shadowEnabled = !0, Eu.prepareDefines(Uu, su))
        }
      }
      ju.lightmapMode != Zu.e.LIGHTMAP_DEFAULT ? (lu.lightmapMode = !0, Uu["LIGHTMAPEXCLUDED" + su] = !0, Uu["LIGHTMAPNOSPECULAR" + su] = ju.lightmapMode == Zu.e.LIGHTMAP_SHADOWSONLY) : (Uu["LIGHTMAPEXCLUDED" + su] = !1, Uu["LIGHTMAPNOSPECULAR" + su] = !1)
    }

    function Qu(uu, Eu, ju, su, Uu) {
      let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qu = function(uu, Eu) {
          let ju = !1;
          if (uu.activeCamera) {
            const su = Eu.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              Uu = Eu.CAMERA_PERSPECTIVE ? 1 : 0,
              Zu = 1 === uu.activeCamera.mode ? 1 : 0,
              Xu = 0 === uu.activeCamera.mode ? 1 : 0;
            (su ^ Zu || Uu ^ Xu) && (Eu.CAMERA_ORTHOGRAPHIC = 1 === Zu, Eu.CAMERA_PERSPECTIVE = 1 === Xu, ju = !0)
          }
          return ju
        }(uu, su);
      !1 !== Zu && (qu = (0, Xu.g)(ju, uu, su)), su.DEPTHPREPASS !== !Eu.getColorWrite() && (su.DEPTHPREPASS = !su.DEPTHPREPASS, qu = !0), su.INSTANCES !== Uu && (su.INSTANCES = Uu, qu = !0), su.THIN_INSTANCES !== lu && (su.THIN_INSTANCES = lu, qu = !0), qu && su.markAsUnprocessed()
    }
    const iu = 40,
      Wu = 64,
      Su = new WeakMap,
      Iu = new WeakSet;

    function Fu(uu, Eu, ju, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        lu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!Eu._areAttributesDirty && Eu._needNormals === Eu._normals && Eu._needUVs === Eu._uvs) return !1;
      Eu._normals = Eu._needNormals, Eu._uvs = Eu._needUVs, Eu.NORMAL = Eu._needNormals && uu.isVerticesDataPresent("normal"), Eu._needNormals && uu.isVerticesDataPresent("tangent") && (Eu.TANGENT = !0);
      for (let su = 1; su <= 6; ++su) Eu["UV" + su] = !!Eu._needUVs && uu.isVerticesDataPresent(`uv${1===su?"":su}`);
      if (ju) {
        const ju = uu.useVertexColors && uu.isVerticesDataPresent("color");
        Eu.VERTEXCOLOR = ju, Eu.VERTEXALPHA = uu.hasVertexAlpha && ju && Xu
      }
      return uu.isVerticesDataPresent("instanceColor") && (uu.fUu || uu.hasThinInstances) && (Eu.INSTANCESCOLOR = !0), Uu && function(uu, Eu) {
        if (uu.useBones && uu.computeBonesUsingShaders && uu.skeleton) {
          Eu.NUM_BONE_INFLUENCERS = uu.numBoneInfluencers;
          const ju = void 0 !== Eu.BONETEXTURE;
          if (uu.skeleton.isUsingTextureForMatrices && ju) Eu.BONETEXTURE = !0;
          else {
            Eu.BonesPerMesh = uu.skeleton.bones.length + 1, Eu.BONETEXTURE = !ju && void 0;
            const Uu = uu.hV(),
              Zu = Uu.prePassRenderer;
            if (Zu && Zu.enabled) {
              const ju = -1 === Zu.excludedSkinnedMesh.indexOf(uu);
              Eu.BONES_VELOCITY_ENABLED = ju
            }
            const Xu = !0 === Eu.MULTIVIEW,
              lu = 2 * Eu.BonesPerMesh + (Xu ? 1 : 0);
            if (Su.get(uu.skeleton) !== lu) {
              Su.set(uu.skeleton, lu);
              const ju = Uu.wO().getCaps().maxVertexUniformVectors;
              if (ju && !Iu.has(uu.skeleton)) {
                const Uu = 4 * Eu.BonesPerMesh,
                  Zu = Xu ? Wu : iu,
                  lu = Math.max(ju - Zu, 0);
                (Uu > lu || Xu && 3 * Uu > ju) && (Iu.add(uu.skeleton), su.b.Warn(`Skeleton "${uu.skeleton.name}": ${uu.skeleton.bones.length} bones stored as vertex uniforms use ${Uu} of ~${lu} usable uniform vectors${Xu?" (multiview)":""} on a device reporting ${ju}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else Eu.NUM_BONE_INFLUENCERS = 0, Eu.BonesPerMesh = 0, void 0 !== Eu.BONETEXTURE && (Eu.BONETEXTURE = !1)
      }(uu, Eu), Zu && function(uu, Eu) {
        const ju = uu.morphTargetManager;
        ju ? (Eu.MORPHTARGETS_UV = ju.supportsUVs && Eu.UV1, Eu.MORPHTARGETS_UV2 = ju.supportsUV2s && Eu.UV2, Eu.MORPHTARGETS_TANGENT = ju.supportsTangents && Eu.TANGENT, Eu.MORPHTARGETS_NORMAL = ju.supportsNormals && Eu.NORMAL, Eu.MORPHTARGETS_POSITION = ju.supportsPositions, Eu.MORPHTARGETS_COLOR = ju.supportsColors, Eu.MORPHTARGETTEXTURE_HASUVS = ju.hasUVs, Eu.MORPHTARGETTEXTURE_HASUV2S = ju.hasUV2s, Eu.MORPHTARGETTEXTURE_HASTANGENTS = ju.hasTangents, Eu.MORPHTARGETTEXTURE_HASNORMALS = ju.hasNormals, Eu.MORPHTARGETTEXTURE_HASPOSITIONS = ju.hasPositions, Eu.MORPHTARGETTEXTURE_HASCOLORS = ju.hasColors, Eu.NUM_MORPH_INFLUENCERS = ju.numMaxInfluencers || ju.numInfluencers, Eu.MORPHTARGETS = Eu.NUM_MORPH_INFLUENCERS > 0, Eu.MORPHTARGETS_TEXTURE = ju.isUsingTextureForTargets) : (Eu.MORPHTARGETS_UV = !1, Eu.MORPHTARGETS_UV2 = !1, Eu.MORPHTARGETS_TANGENT = !1, Eu.MORPHTARGETS_NORMAL = !1, Eu.MORPHTARGETS_POSITION = !1, Eu.MORPHTARGETS_COLOR = !1, Eu.MORPHTARGETTEXTURE_HASUVS = !1, Eu.MORPHTARGETTEXTURE_HASUV2S = !1, Eu.MORPHTARGETTEXTURE_HASTANGENTS = !1, Eu.MORPHTARGETTEXTURE_HASNORMALS = !1, Eu.MORPHTARGETTEXTURE_HASPOSITIONS = !1, Eu.MORPHTARGETTEXTURE_HAS_COLORS = !1, Eu.MORPHTARGETS = !1, Eu.NUM_MORPH_INFLUENCERS = 0)
      }(uu, Eu), lu && function(uu, Eu) {
        const ju = uu.bakedVertexAnimationManager;
        Eu.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ju || !ju.isEnabled)
      }(uu, Eu), !0
    }

    function Bu(uu, Eu) {
      if (uu.activeCamera) {
        const ju = Eu.MULTIVIEW;
        Eu.MULTIVIEW = null !== uu.activeCamera.outputRenderTarget && uu.activeCamera.outputRenderTarget.getViewCount() > 1, Eu.MULTIVIEW != ju && Eu.markAsUnprocessed()
      }
    }

    function Lu(uu, Eu, ju) {
      const su = Eu.ORDER_INDEPENDENT_TRANSPARENCY,
        Uu = Eu.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      Eu.ORDER_INDEPENDENT_TRANSPARENCY = uu.useOrderIndependentTransparency && ju, Eu.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !uu.wO().getCaps().textureFloatLinearFiltering, su === Eu.ORDER_INDEPENDENT_TRANSPARENCY && Uu === Eu.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || Eu.markAsUnprocessed()
    }

    function tu(uu, Eu, ju) {
      const su = Eu.PREPASS;
      if (!Eu._arePrePassDirty) return;
      const Uu = [{
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
      if (uu.prePassRenderer && uu.prePassRenderer.enabled && ju) {
        Eu.PREPASS = !0, Eu.SCENE_MRT_COUNT = uu.prePassRenderer.mrtCount, Eu.PREPASS_NORMAL_WORLDSPACE = uu.prePassRenderer.generateNormalsInWorldSpace, Eu.PREPASS_COLOR = !0, Eu.PREPASS_COLOR_INDEX = 0;
        for (let ju = 0; ju < Uu.length; ju++) {
          const su = uu.prePassRenderer.getIndex(Uu[ju].type); - 1 !== su ? (Eu[Uu[ju].define] = !0, Eu[Uu[ju].index] = su) : Eu[Uu[ju].define] = !1
        }
      } else {
        Eu.PREPASS = !1;
        for (let uu = 0; uu < Uu.length; uu++) Eu[Uu[uu].define] = !1
      }
      Eu.PREPASS != su && (Eu.markAsUnprocessed(), Eu.markAsImageProcessingDirty())
    }

    function xu(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      Uu && Uu.push("Light" + uu), Zu || (Eu.push("vLightData" + uu, "vLightDiffuse" + uu, "vLightSpecular" + uu, "vLightDirection" + uu, "vLightWidth" + uu, "vLightHeight" + uu, "vLightFalloff" + uu, "vLightGround" + uu, "vSliceData" + uu, "vSliceRanges" + uu, "lightMatrix" + uu, "shadowsInfo" + uu, "depthValues" + uu), ju.push("shadowTexture" + uu), ju.push("depthTexture" + uu), Eu.push("viewFrustumZ" + uu, "cascadeBlendFactor" + uu, "lightSizeUVCorrection" + uu, "depthCorrection" + uu, "penumbraDarkness" + uu, "frustumLengths" + uu), su && (ju.push("projectionLightTexture" + uu), Eu.push("textureProjectionMatrix" + uu)), Xu && ju.push("iesLightTexture" + uu), qu && ju.push("rectAreaLightEmissionTexture" + uu), lu && (ju.push("lightDataTexture" + uu), fu || ju.push("tileMaskTexture" + uu)))
    }

    function Tu(uu, Eu, ju) {
      const su = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      ju && su.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), uu.push(...su);
      Eu.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Hu(uu, Eu, ju) {
      let su, Uu, Zu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Xu = null;
      if (uu.uniformsNames) {
        const lu = uu;
        su = lu.uniformsNames, Uu = lu.uniformBuffersNames, Eu = lu.samplers, ju = lu.defines, Zu = lu.maxSimultaneousLights || 0, Xu = lu.shaderLanguage ?? null
      } else su = uu, Eu || (Eu = []);
      for (let lu = 0; lu < Zu && ju["LIGHT" + lu]; lu++) xu(lu, su, Eu, ju["PROJECTEDLIGHTTEXTURE" + lu], Uu, !1, ju["IESLIGHTTEXTURE" + lu], ju["CLUSTLIGHT" + lu], ju["RECTAREALIGHTEMISSIONTEXTURE" + lu], 1 === Xu);
      ju.NUM_MORPH_INFLUENCERS && (su.push("morphTargetInfluences"), su.push("morphTargetCount")), ju.BAKED_VERTEX_ANIMATION_TEXTURE && (su.push("bakedVertexAnimationSettings"), su.push("bakedVertexAnimationTextureSizeInverted"), su.push("bakedVertexAnimationTime"), Eu.push("bakedVertexAnimationTexture"))
    }

    function Au(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      uu.addUniform("vReflectionInfos", 2), uu.addUniform("reflectionMatrix", 16), Eu && uu.addUniform("vReflectionMicrosurfaceInfos", 3), ju && (uu.addUniform("vReflectionPosition", 3), uu.addUniform("vReflectionSize", 3)), su && (uu.addUniform("vReflectionFilteringInfo", 2), uu.addUniform("vReflectionDominantDirection", 3)), Zu && uu.addUniform("vReflectionColor", 3), Uu && (uu.addUniform("vSphericalL00", 3), uu.addUniform("vSphericalL1_1", 3), uu.addUniform("vSphericalL10", 3), uu.addUniform("vSphericalL11", 3), uu.addUniform("vSphericalL2_2", 3), uu.addUniform("vSphericalL2_1", 3), uu.addUniform("vSphericalL20", 3), uu.addUniform("vSphericalL21", 3), uu.addUniform("vSphericalL22", 3), uu.addUniform("vSphericalX", 3), uu.addUniform("vSphericalY", 3), uu.addUniform("vSphericalZ", 3), uu.addUniform("vSphericalXX_ZZ", 3), uu.addUniform("vSphericalYY_ZZ", 3), uu.addUniform("vSphericalZZ", 3), uu.addUniform("vSphericalXY", 3), uu.addUniform("vSphericalYZ", 3), uu.addUniform("vSphericalZX", 3))
    }
  },
  40604: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(37494),
      Uu = ju(40552);
    class Zu extends Uu.b {
      constructor(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(uu, Eu, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new su.e, this._storeEffectOnSubMeshes = ju
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(uu, Eu) {
        return !!uu && (!this._storeEffectOnSubMeshes || (!uu.iG || 0 === uu.iG.length || this.isReadyForSubMesh(uu, uu.iG[0], Eu)))
      }
      _isReadyForSubMesh(uu) {
        const Eu = uu.materialDefines;
        return !(this.checkReadyOnEveryCall || !uu.effect || !Eu || Eu._renderId !== this.hV().getRenderId())
      }
      bindOnlyWorldMatrix(uu) {
        this._activeEffect.setMatrix("world", uu)
      }
      bindOnlyNormalMatrix(uu) {
        this._activeEffect.setMatrix("normalMatrix", uu)
      }
      bind(uu, Eu) {
        Eu && this.bindForSubMesh(uu, Eu, Eu.iG[0])
      }
      _afterBind(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(uu, Eu, ju), this.hV()._cachedEffect = Eu, ju ? ju._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return ju._drawWrapper._forceRebindOnNextCall || uu.isCachedMaterialInvalid(this, Eu, su)
      }
      dispose(uu, Eu, ju) {
        this._activeEffect = void 0, super.dispose(uu, Eu, ju)
      }
    }
  },
  40624: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      f: () => Uu
    });
    const su = new WeakMap;

    function Uu(uu) {
      const Eu = uu.getVertexBuffers();
      if (!Eu) return null;
      let ju = su.get(uu);
      if (ju) {
        let uu = !1;
        for (const su in Eu)
          if (!ju.has(su)) {
            uu = !0;
            break
          } if (!uu) return ju
      } else ju = new Map, su.set(uu, ju);
      for (const su in Eu) {
        const uu = Eu[su];
        if (uu) {
          const Eu = uu.byteOffset,
            Uu = uu.byteStride,
            Zu = uu.type,
            Xu = uu.normalized;
          ju.set(su, {
            offset: Eu,
            stride: Uu,
            type: Zu,
            normalized: Xu
          })
        }
      }
      return ju
    }

    function Zu(uu, Eu) {
      Eu.forEach(((Eu, ju) => {
        const su = `vp_${ju}_info`;
        uu.setFloat4(su, Eu.offset, Eu.stride, Eu.type, Eu.normalized ? 1 : 0)
      }))
    }
  },
  40583: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      f: () => qu
    });
    var su = ju(40255),
      Uu = ju(37494),
      Zu = ju(40258);
    let Xu = (() => {
      var uu;
      let Eu, ju, Uu = [];
      return uu = class {
        static extractMinAndMaxIndexed(uu, Eu, ju, su, Uu, Zu) {
          for (let Xu = ju; Xu < ju + su; Xu++) {
            const ju = 3 * Eu[Xu],
              su = uu[ju],
              lu = uu[ju + 1],
              qu = uu[ju + 2];
            Uu.minimizeInPlaceFromFloats(su, lu, qu), Zu.maximizeInPlaceFromFloats(su, lu, qu)
          }
        }
        static extractMinAndMax(uu, Eu, ju, su, Uu, Zu) {
          for (let Xu = Eu, lu = Eu * su; Xu < Eu + ju; Xu++, lu += su) {
            const Eu = uu[lu],
              ju = uu[lu + 1],
              su = uu[lu + 2];
            Uu.minimizeInPlaceFromFloats(Eu, ju, su), Zu.maximizeInPlaceFromFloats(Eu, ju, su)
          }
        }
      }, (() => {
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [Zu.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], ju = [Zu.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, su.e)(uu, null, Eu, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: uu => "extractMinAndMaxIndexed" in uu,
            get: uu => uu.extractMinAndMaxIndexed
          },
          metadata: Xu
        }, null, Uu), (0, su.e)(uu, null, ju, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: uu => "extractMinAndMax" in uu,
            get: uu => uu.extractMinAndMax
          },
          metadata: Xu
        }, null, Uu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        }), (0, su.g)(uu, Uu)
      })(), uu
    })();

    function lu(uu, Eu, ju, su) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const lu = new Uu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qu = new Uu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Xu.extractMinAndMaxIndexed(uu, Eu, ju, su, lu, qu), Zu && (lu.x -= lu.x * Zu.x + Zu.y, lu.y -= lu.y * Zu.x + Zu.y, lu.z -= lu.z * Zu.x + Zu.y, qu.x += qu.x * Zu.x + Zu.y, qu.y += qu.y * Zu.x + Zu.y, qu.z += qu.z * Zu.x + Zu.y), {
        minimum: lu,
        maximum: qu
      }
    }

    function qu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Zu = arguments.length > 4 ? arguments[4] : void 0;
      const lu = new Uu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qu = new Uu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Zu || (Zu = 3), Xu.extractMinAndMax(uu, Eu, ju, Zu, lu, qu), su && (lu.x -= lu.x * su.x + su.y, lu.y -= lu.y * su.x + su.y, lu.z -= lu.z * su.x + su.y, qu.x += qu.x * su.x + su.y, qu.y += qu.y * su.x + su.y, qu.z += qu.z * su.x + su.y), {
        minimum: lu,
        maximum: qu
      }
    }
  },
  40556: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu
    });
    var su, Uu = ju(40399),
      Zu = ju(40565),
      Xu = ju(40574),
      lu = ju(40583),
      qu = ju(40589),
      fu = ju(40153);
    class Cu {
      get materialDefines() {
        const uu = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof uu ? null : uu
      }
      set materialDefines(uu) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = uu
      }
      _getDrawWrapper(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        uu = uu ?? this._engine.currentRenderPassId;
        let ju = this._drawWrappers[uu];
        return !ju && Eu && (this._drawWrappers[uu] = ju = new qu.b(this._mesh.hV().wO())), ju
      }
      _removeDrawWrapper(uu) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[uu]?.dispose(Eu), this._drawWrappers[uu] = void 0
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Uu = this._drawWrapper;
        Uu.setEffect(uu, Eu, su), void 0 !== ju && (Uu.materialContext = ju), uu || (Uu.defines = null, Uu.materialContext = void 0)
      }
      resetDrawCache(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== uu) return void this._removeDrawWrapper(uu, !0, Eu);
          for (const uu of this._drawWrappers) uu?.dispose(Eu)
        }
        this._drawWrappers = []
      }
      static AddToMesh(uu, Eu, ju, su, Uu, Zu, Xu) {
        return new Cu(uu, Eu, ju, su, Uu, Zu, Xu, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(uu, Eu, ju, su, Uu, Zu, Xu) {
        let lu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = uu, this.verticesStart = Eu, this.verticesCount = ju, this.indexStart = su, this.indexCount = Uu, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Zu, this._renderingMesh = Xu || Zu, qu && Zu.iG.push(this), this._engine = this._mesh.hV().wO(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Zu.iG.length - 1, lu && (this.refreshBoundingInfo(), Zu.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      EW() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.EW() : this._boundingInfo
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
      oO() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Eu = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!Eu) return uu && this._mesh.hV()._hasDefaultMaterial ? this._mesh.hV().defaultMaterial : null;
        if (this._isMultiMaterial(Eu)) {
          const uu = Eu.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== uu && (this._currentMaterial = uu, this.resetDrawCache()), uu
        }
        return Eu
      }
      _isMultiMaterial(uu) {
        return void 0 !== uu.getSubMaterial
      }
      refreshBoundingInfo() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (uu || (uu = this._renderingMesh.getVerticesData(Uu.j.PositionKind)), !uu) return this._boundingInfo = this._mesh.EW(), this;
        const Eu = this._renderingMesh.Ysu();
        let ju;
        if (0 === this.indexStart && this.indexCount === Eu.length) {
          const uu = this._renderingMesh.EW();
          ju = {
            minimum: uu.minimum.clone(),
            maximum: uu.maximum.clone()
          }
        } else ju = (0, lu.e)(uu, Eu, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(ju.minimum, ju.maximum) : this._boundingInfo = new Xu.c(ju.minimum, ju.maximum), this
      }
      _checkCollision(uu) {
        return this.EW()._checkCollision(uu)
      }
      updateBoundingInfo(uu) {
        let Eu = this.EW();
        return Eu || (this.refreshBoundingInfo(), Eu = this.EW()), Eu && Eu.update(uu), this
      }
      isInFrustum(uu) {
        const Eu = this.EW();
        return !!Eu && Eu.isInFrustum(uu, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(uu) {
        const Eu = this.EW();
        return !!Eu && Eu.isCompletelyInFrustum(uu)
      }
      render(uu) {
        return this._renderingMesh.render(this, uu, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(uu, Eu) {
        if (!this._linesIndexBuffer) {
          const ju = 6 * Math.floor(this.indexCount / 3),
            su = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ju) : new Uint16Array(ju);
          let Uu = 0;
          if (0 === uu.length)
            for (let uu = this.indexStart; uu < this.indexStart + this.indexCount; uu += 3) su[Uu++] = uu, su[Uu++] = uu + 1, su[Uu++] = uu + 1, su[Uu++] = uu + 2, su[Uu++] = uu + 2, su[Uu++] = uu;
          else
            for (let Eu = this.indexStart; Eu < this.indexStart + this.indexCount; Eu += 3) su[Uu++] = uu[Eu], su[Uu++] = uu[Eu + 1], su[Uu++] = uu[Eu + 1], su[Uu++] = uu[Eu + 2], su[Uu++] = uu[Eu + 2], su[Uu++] = uu[Eu];
          this._linesIndexBuffer = Eu.createIndexBuffer(su), this._linesIndexCount = su.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(uu) {
        const Eu = this.EW();
        return !!Eu && uu.intersectsBox(Eu.boundingBox)
      }
      intersects(uu, Eu, ju, su, Uu) {
        const Zu = this.oO();
        if (!Zu) return null;
        let Xu = 3,
          lu = !1;
        switch (Zu.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Xu = 1, lu = !0
        }
        return 4 === Zu.fillMode ? ju.length ? this._intersectLines(uu, Eu, ju, this._mesh.intersectionThreshold, su) : this._intersectUnIndexedLines(uu, Eu, ju, this._mesh.intersectionThreshold, su) : !ju.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(uu, Eu, ju, su, Uu) : this._intersectTriangles(uu, Eu, ju, Xu, lu, su, Uu)
      }
      _intersectLines(uu, Eu, ju, su, Uu) {
        let Xu = null;
        for (let lu = this.indexStart; lu < this.indexStart + this.indexCount; lu += 2) {
          const qu = Eu[ju[lu]],
            fu = Eu[ju[lu + 1]],
            Cu = uu.intersectionSegment(qu, fu, su);
          if (!(Cu < 0) && ((Uu || !Xu || Cu < Xu.distance) && (Xu = new Zu.c(null, null, Cu), Xu.faceId = lu / 2, Uu))) break
        }
        return Xu
      }
      _intersectUnIndexedLines(uu, Eu, ju, su, Uu) {
        let Xu = null;
        for (let lu = this.verticesStart; lu < this.verticesStart + this.verticesCount; lu += 2) {
          const ju = Eu[lu],
            qu = Eu[lu + 1],
            fu = uu.intersectionSegment(ju, qu, su);
          if (!(fu < 0) && ((Uu || !Xu || fu < Xu.distance) && (Xu = new Zu.c(null, null, fu), Xu.faceId = lu / 2, Uu))) break
        }
        return Xu
      }
      _intersectTriangles(uu, Eu, ju, su, Uu, Zu, Xu) {
        let lu = null,
          qu = -1;
        for (let fu = this.indexStart; fu < this.indexStart + this.indexCount - (3 - su); fu += su) {
          qu++;
          const su = ju[fu],
            Cu = ju[fu + 1],
            bu = ju[fu + 2];
          if (Uu && 4294967295 === bu) {
            fu += 2;
            continue
          }
          const cu = Eu[su],
            Nu = Eu[Cu],
            Ou = Eu[bu];
          if (!cu || !Nu || !Ou) continue;
          if (Xu && !Xu(cu, Nu, Ou, uu, su, Cu, bu)) continue;
          const Yu = uu.intersectsTriangle(cu, Nu, Ou);
          if (Yu) {
            if (Yu.distance < 0) continue;
            if ((Zu || !lu || Yu.distance < lu.distance) && (lu = Yu, lu.faceId = qu, Zu)) break
          }
        }
        return lu
      }
      _intersectUnIndexedTriangles(uu, Eu, ju, su, Uu) {
        let Zu = null;
        for (let Xu = this.verticesStart; Xu < this.verticesStart + this.verticesCount; Xu += 3) {
          const ju = Eu[Xu],
            lu = Eu[Xu + 1],
            qu = Eu[Xu + 2];
          if (Uu && !Uu(ju, lu, qu, uu, -1, -1, -1)) continue;
          const fu = uu.intersectsTriangle(ju, lu, qu);
          if (fu) {
            if (fu.distance < 0) continue;
            if ((su || !Zu || fu.distance < Zu.distance) && (Zu = fu, Zu.faceId = Xu / 3, su)) break
          }
        }
        return Zu
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(uu, Eu) {
        const ju = new Cu(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, uu, Eu, !1);
        if (!this.IsGlobal) {
          const uu = this.EW();
          if (!uu) return ju;
          ju._boundingInfo = new Xu.c(uu.minimum, uu.maximum)
        }
        return ju
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.hV().wO()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const Eu = this._mesh.iG.indexOf(this);
        this._mesh.iG.splice(Eu, 1), this.resetDrawCache(void 0, uu)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(uu, Eu, ju, su, Uu) {
        let Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xu = Number.MAX_VALUE,
          lu = -Number.MAX_VALUE;
        const qu = (Uu || su).Ysu();
        for (let fu = Eu; fu < Eu + ju; fu++) {
          const uu = qu[fu];
          uu < Xu && (Xu = uu), uu > lu && (lu = uu)
        }
        return new Cu(uu, Xu, lu - Xu + 1, Eu, ju, su, Uu, Zu)
      }
    }(su = Cu.prototype).projectToRef ?? (su.projectToRef = (0, fu.g)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);