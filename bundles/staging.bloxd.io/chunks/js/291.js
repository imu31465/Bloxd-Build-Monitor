export const id = 291;
export const ids = [291];
export const modules = {
  41424: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    class ye {
      constructor(ee, ie, He) {
        this.bu = ee, this.bv = ie, this.distance = He, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41437: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(37925),
      be = He(37917),
      Me = He(37920);
    class Ke {
      constructor(ee, ie, He) {
        this.vectors = (0, ye.c)(8, be.p.Zero), this.center = be.p.Zero(), this.centerWorld = be.p.Zero(), this.extendSize = be.p.Zero(), this.extendSizeWorld = be.p.Zero(), this.directions = (0, ye.c)(3, be.p.Zero), this.vectorsWorld = (0, ye.c)(8, be.p.Zero), this.minimumWorld = be.p.Zero(), this.maximumWorld = be.p.Zero(), this.minimum = be.p.Zero(), this.maximum = be.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(ee, ie, He)
      }
      reConstruct(ee, ie, He) {
        const ye = ee.x,
          Me = ee.y,
          Ke = ee.z,
          Ue = ie.x,
          Fe = ie.y,
          Je = ie.z,
          oe = this.vectors;
        this.minimum.wie(ye, Me, Ke), this.maximum.wie(Ue, Fe, Je), oe[0].wie(ye, Me, Ke), oe[1].wie(Ue, Fe, Je), oe[2].wie(Ue, Me, Ke), oe[3].wie(ye, Fe, Ke), oe[4].wie(ye, Me, Je), oe[5].wie(Ue, Fe, Ke), oe[6].wie(ye, Fe, Je), oe[7].wie(Ue, Me, Je), ie.addToRef(ee, this.center).scaleInPlace(.5), ie.subtractToRef(ee, this.extendSize).scaleInPlace(.5), this._worldMatrix = He || be.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(ee) {
        const ie = Ke._TmpVector3,
          He = this.maximum.subtractToRef(this.minimum, ie[0]),
          ye = He.length();
        He.normalizeFromLength(ye);
        const be = ye * ee,
          Me = He.scaleInPlace(.5 * be),
          Ue = this.center.subtractToRef(Me, ie[1]),
          Fe = this.center.addToRef(Me, ie[2]);
        return this.reConstruct(Ue, Fe, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(ee) {
        const ie = this.minimumWorld,
          He = this.maximumWorld,
          ye = this.directions,
          Me = this.vectorsWorld,
          Ke = this.vectors;
        if (ee.isIdentity()) {
          ie.jD(this.minimum), He.jD(this.maximum);
          for (let ee = 0; ee < 8; ++ee) Me[ee].jD(Ke[ee]);
          this.extendSizeWorld.jD(this.extendSize), this.centerWorld.jD(this.center)
        } else {
          ie.Iee(Number.MAX_VALUE), He.Iee(-Number.MAX_VALUE);
          for (let ye = 0; ye < 8; ++ye) {
            const Ue = Me[ye];
            be.p.TransformCoordinatesToRef(Ke[ye], ee, Ue), ie.minimizeInPlace(Ue), He.maximizeInPlace(Ue)
          }
          He.subtractToRef(ie, this.extendSizeWorld).scaleInPlace(.5), He.addToRef(ie, this.centerWorld).scaleInPlace(.5)
        }
        be.p.FromArrayToRef(ee.m, 0, ye[0]), be.p.FromArrayToRef(ee.m, 4, ye[1]), be.p.FromArrayToRef(ee.m, 8, ye[2]), this._worldMatrix = ee
      }
      isInFrustum(ee) {
        return Ke.IsInFrustum(this.vectorsWorld, ee)
      }
      isCompletelyInFrustum(ee) {
        return Ke.IsCompletelyInFrustum(this.vectorsWorld, ee)
      }
      intersectsPoint(ee) {
        const ie = this.minimumWorld,
          He = this.maximumWorld,
          ye = ie.x,
          be = ie.y,
          Ke = ie.z,
          Ue = He.x,
          Fe = He.y,
          Je = He.z,
          oe = ee.x,
          Re = ee.y,
          ke = ee.z,
          qe = -Me.b;
        return !(Ue - oe < qe || qe > oe - ye) && (!(Fe - Re < qe || qe > Re - be) && !(Je - ke < qe || qe > ke - Ke))
      }
      intersectsSphere(ee) {
        return Ke.IntersectsSphere(this.minimumWorld, this.maximumWorld, ee.centerWorld, ee.radiusWorld)
      }
      intersectsMinMax(ee, ie) {
        const He = this.minimumWorld,
          ye = this.maximumWorld,
          be = He.x,
          Me = He.y,
          Ke = He.z,
          Ue = ye.x,
          Fe = ye.y,
          Je = ye.z,
          oe = ee.x,
          Re = ee.y,
          ke = ee.z,
          qe = ie.x,
          fe = ie.y,
          Te = ie.z;
        return !(Ue < oe || be > qe) && (!(Fe < Re || Me > fe) && !(Je < ke || Ke > Te))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(ee, ie) {
        return ee.intersectsMinMax(ie.minimumWorld, ie.maximumWorld)
      }
      static IntersectsSphere(ee, ie, He, ye) {
        const Me = Ke._TmpVector3[0];
        be.p.ClampToRef(He, ee, ie, Me);
        return be.p.DistanceSquared(He, Me) <= ye * ye
      }
      static IsCompletelyInFrustum(ee, ie) {
        for (let He = 0; He < 6; ++He) {
          const ye = ie[He];
          for (let ie = 0; ie < 8; ++ie)
            if (ye.dotCoordinate(ee[ie]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(ee, ie) {
        for (let He = 0; He < 6; ++He) {
          let ye = !0;
          const be = ie[He];
          for (let ie = 0; ie < 8; ++ie)
            if (be.dotCoordinate(ee[ie]) >= 0) {
              ye = !1;
              break
            } if (ye) return !1
        }
        return !0
      }
    }
    Ke._TmpVector3 = (0, ye.c)(3, be.p.Zero)
  },
  41429: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    var ye = He(37925),
      be = He(37917),
      Me = He(41437);
    class Ke {
      constructor(ee, ie, He) {
        this.center = be.p.Zero(), this.centerWorld = be.p.Zero(), this.minimum = be.p.Zero(), this.maximum = be.p.Zero(), this.reConstruct(ee, ie, He)
      }
      reConstruct(ee, ie, He) {
        this.minimum.jD(ee), this.maximum.jD(ie);
        const ye = be.p.Distance(ee, ie);
        ie.addToRef(ee, this.center).scaleInPlace(.5), this.radius = .5 * ye, this._update(He || be.b.IdentityReadOnly)
      }
      scale(ee) {
        const ie = Ke._TmpVector3,
          He = this.maximum.subtractToRef(this.minimum, ie[0]),
          ye = He.length();
        He.normalizeFromLength(ye);
        const be = ye * ee,
          Me = He.scaleInPlace(.5 * be),
          Ue = this.center.subtractToRef(Me, ie[1]),
          Fe = this.center.addToRef(Me, ie[2]);
        return this.reConstruct(Ue, Fe, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(ee) {
        if (ee.isIdentity()) this.centerWorld.jD(this.center), this.radiusWorld = this.radius;
        else {
          be.p.TransformCoordinatesToRef(this.center, ee, this.centerWorld);
          const ie = Ke._TmpVector3[0];
          be.p.TransformNormalFromFloatsToRef(1, 1, 1, ee, ie), this.radiusWorld = Math.max(Math.abs(ie.x), Math.abs(ie.y), Math.abs(ie.z)) * this.radius
        }
      }
      isInFrustum(ee) {
        const ie = this.centerWorld,
          He = this.radiusWorld;
        for (let ye = 0; ye < 6; ye++)
          if (ee[ye].dotCoordinate(ie) <= -He) return !1;
        return !0
      }
      isCenterInFrustum(ee) {
        const ie = this.centerWorld;
        for (let He = 0; He < 6; He++)
          if (ee[He].dotCoordinate(ie) < 0) return !1;
        return !0
      }
      intersectsPoint(ee) {
        const ie = be.p.DistanceSquared(this.centerWorld, ee);
        return !(this.radiusWorld * this.radiusWorld < ie)
      }
      static Intersects(ee, ie) {
        const He = be.p.DistanceSquared(ee.centerWorld, ie.centerWorld),
          ye = ee.radiusWorld + ie.radiusWorld;
        return !(ye * ye < He)
      }
      static CreateFromCenterAndRadius(ee, ie, He) {
        this._TmpVector3[0].jD(ee), this._TmpVector3[1].wie(0, 0, ie), this._TmpVector3[2].jD(ee), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].XMe(this._TmpVector3[1]);
        const ye = new Ke(this._TmpVector3[0], this._TmpVector3[2]);
        return ye._worldMatrix = He || be.b.Identity(), ye
      }
    }
    Ke._TmpVector3 = (0, ye.c)(3, be.p.Zero);
    const Ue = {
        min: 0,
        max: 0
      },
      Fe = {
        min: 0,
        max: 0
      },
      Je = (ee, ie, He) => {
        const ye = be.p.Dot(ie.centerWorld, ee),
          Me = Math.abs(be.p.Dot(ie.directions[0], ee)) * ie.extendSize.x + Math.abs(be.p.Dot(ie.directions[1], ee)) * ie.extendSize.y + Math.abs(be.p.Dot(ie.directions[2], ee)) * ie.extendSize.z;
        He.min = ye - Me, He.max = ye + Me
      },
      oe = (ee, ie, He) => (Je(ee, ie, Ue), Je(ee, He, Fe), !(Ue.min > Fe.max || Fe.min > Ue.max));
    class Re {
      constructor(ee, ie, He) {
        this._isLocked = !1, this.boundingBox = new Me.d(ee, ie, He), this.OMe = new Ke(ee, ie, He)
      }
      reConstruct(ee, ie, He) {
        this.boundingBox.reConstruct(ee, ie, He), this.OMe.reConstruct(ee, ie, He)
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
      set isLocked(ee) {
        this._isLocked = ee
      }
      update(ee) {
        this._isLocked || (this.boundingBox._update(ee), this.OMe._update(ee))
      }
      centerOn(ee, ie) {
        const He = Re._TmpVector3[0].jD(ee).XMe(ie),
          ye = Re._TmpVector3[1].jD(ee).addInPlace(ie);
        return this.boundingBox.reConstruct(He, ye, this.boundingBox.getWorldMatrix()), this.OMe.reConstruct(He, ye, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(ee) {
        const ie = be.p.Minimize(this.minimum, ee),
          He = be.p.Maximize(this.maximum, ee);
        return this.reConstruct(ie, He, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(ee) {
        const ie = be.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(ie);
        const He = be.j.rf[0];
        return be.p.TransformCoordinatesToRef(ee.boundingBox.minimumWorld, ie, He), this.encapsulate(He), be.p.TransformCoordinatesToRef(ee.boundingBox.maximumWorld, ie, He), this.encapsulate(He), this
      }
      scale(ee) {
        return this.boundingBox.scale(ee), this.OMe.scale(ee), this
      }
      isInFrustum(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === ie || 3 === ie) && this.OMe.isCenterInFrustum(ee)) return !0;
        if (!this.OMe.isInFrustum(ee)) return !1;
        return !(1 !== ie && 3 !== ie) || this.boundingBox.isInFrustum(ee)
      }
      get diagonalLength() {
        const ee = this.boundingBox;
        return ee.maximumWorld.subtractToRef(ee.minimumWorld, Re._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(ee) {
        return this.boundingBox.isCompletelyInFrustum(ee)
      }
      _checkCollision(ee) {
        return ee._canDoCollision(this.OMe.centerWorld, this.OMe.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(ee) {
        return !!this.OMe.centerWorld && (!!this.OMe.intersectsPoint(ee) && !!this.boundingBox.intersectsPoint(ee))
      }
      intersects(ee, ie) {
        if (!Ke.Intersects(this.OMe, ee.OMe)) return !1;
        if (!Me.d.Intersects(this.boundingBox, ee.boundingBox)) return !1;
        if (!ie) return !0;
        const He = this.boundingBox,
          ye = ee.boundingBox;
        return !!oe(He.directions[0], He, ye) && (!!oe(He.directions[1], He, ye) && (!!oe(He.directions[2], He, ye) && (!!oe(ye.directions[0], He, ye) && (!!oe(ye.directions[1], He, ye) && (!!oe(ye.directions[2], He, ye) && (!!oe(be.p.Cross(He.directions[0], ye.directions[0]), He, ye) && (!!oe(be.p.Cross(He.directions[0], ye.directions[1]), He, ye) && (!!oe(be.p.Cross(He.directions[0], ye.directions[2]), He, ye) && (!!oe(be.p.Cross(He.directions[1], ye.directions[0]), He, ye) && (!!oe(be.p.Cross(He.directions[1], ye.directions[1]), He, ye) && (!!oe(be.p.Cross(He.directions[1], ye.directions[2]), He, ye) && (!!oe(be.p.Cross(He.directions[2], ye.directions[0]), He, ye) && (!!oe(be.p.Cross(He.directions[2], ye.directions[1]), He, ye) && !!oe(be.p.Cross(He.directions[2], ye.directions[2]), He, ye))))))))))))))
      }
    }
    Re._TmpVector3 = (0, ye.c)(2, be.p.Zero)
  },
  41458: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      f: () => Fe,
      g: () => Ue,
      k: () => Ke
    });
    var ye = He(41264),
      be = He(37917);

    function Me(ee) {
      -1 === ee.indexOf("vClipPlane") && ee.push("vClipPlane"), -1 === ee.indexOf("vClipPlane2") && ee.push("vClipPlane2"), -1 === ee.indexOf("vClipPlane3") && ee.push("vClipPlane3"), -1 === ee.indexOf("vClipPlane4") && ee.push("vClipPlane4"), -1 === ee.indexOf("vClipPlane5") && ee.push("vClipPlane5"), -1 === ee.indexOf("vClipPlane6") && ee.push("vClipPlane6")
    }

    function Ke(ee, ie, He) {
      const ye = !!(ee.clipPlane ?? ie.clipPlane),
        be = !!(ee.clipPlane2 ?? ie.clipPlane2),
        Me = !!(ee.clipPlane3 ?? ie.clipPlane3),
        Ke = !!(ee.clipPlane4 ?? ie.clipPlane4),
        Ue = !!(ee.clipPlane5 ?? ie.clipPlane5),
        Fe = !!(ee.clipPlane6 ?? ie.clipPlane6);
      ye && He.push("#define CLIPPLANE"), be && He.push("#define CLIPPLANE2"), Me && He.push("#define CLIPPLANE3"), Ke && He.push("#define CLIPPLANE4"), Ue && He.push("#define CLIPPLANE5"), Fe && He.push("#define CLIPPLANE6")
    }

    function Ue(ee, ie, He) {
      let ye = !1;
      const be = !!(ee.clipPlane ?? ie.clipPlane),
        Me = !!(ee.clipPlane2 ?? ie.clipPlane2),
        Ke = !!(ee.clipPlane3 ?? ie.clipPlane3),
        Ue = !!(ee.clipPlane4 ?? ie.clipPlane4),
        Fe = !!(ee.clipPlane5 ?? ie.clipPlane5),
        Je = !!(ee.clipPlane6 ?? ie.clipPlane6);
      return He.CLIPPLANE !== be && (He.CLIPPLANE = be, ye = !0), He.CLIPPLANE2 !== Me && (He.CLIPPLANE2 = Me, ye = !0), He.CLIPPLANE3 !== Ke && (He.CLIPPLANE3 = Ke, ye = !0), He.CLIPPLANE4 !== Ue && (He.CLIPPLANE4 = Ue, ye = !0), He.CLIPPLANE5 !== Fe && (He.CLIPPLANE5 = Fe, ye = !0), He.CLIPPLANE6 !== Je && (He.CLIPPLANE6 = Je, ye = !0), ye
    }

    function Fe(ee, ie, He) {
      let ye = ie.clipPlane ?? He.clipPlane;
      Je(ee, "vClipPlane", ye), ye = ie.clipPlane2 ?? He.clipPlane2, Je(ee, "vClipPlane2", ye), ye = ie.clipPlane3 ?? He.clipPlane3, Je(ee, "vClipPlane3", ye), ye = ie.clipPlane4 ?? He.clipPlane4, Je(ee, "vClipPlane4", ye), ye = ie.clipPlane5 ?? He.clipPlane5, Je(ee, "vClipPlane5", ye), ye = ie.clipPlane6 ?? He.clipPlane6, Je(ee, "vClipPlane6", ye)
    }

    function Je(ee, ie, He) {
      if (He) {
        const Me = ye.b.Xx()?.floatingOriginOffset || be.p.ZeroReadOnly;
        ee.setFloat4(ie, He.normal.x, He.normal.y, He.normal.z, He.d + be.p.Dot(He.normal, Me))
      }
    }
  },
  41481: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(ee, ie) {
        this._defines[ee] || (ee < this._currentRank && (this._currentRank = ee), ee > this._maxRank && (this._maxRank = ee), this._defines[ee] = new Array), this._defines[ee].push(ie)
      }
      addCPUSkinningFallback(ee, ie) {
        this._mesh = ie, ee < this._currentRank && (this._currentRank = ee), ee > this._maxRank && (this._maxRank = ee)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(ee, ie) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, ee = ee.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), ie._bonesComputationForcedToCPU = !0;
          const He = this._mesh.Xx();
          for (let ee = 0; ee < He.meshes.length; ee++) {
            const ye = He.meshes[ee];
            if (ye.material) {
              if (ye.computeBonesUsingShaders && 0 !== ye.numBoneInfluencers)
                if (ye.material.getEffect() === ie) ye.computeBonesUsingShaders = !1;
                else if (ye.pW)
                for (const ee of ye.pW) {
                  if (ee.effect === ie) {
                    ye.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && ye.computeBonesUsingShaders && ye.numBoneInfluencers > 0 && (ye.computeBonesUsingShaders = !1)
          }
        } else {
          const ie = this._defines[this._currentRank];
          if (ie)
            for (let He = 0; He < ie.length; He++) ee = ee.replace("#define " + ie[He], "");
          this._currentRank++
        }
        return ee
      }
    }
  },
  41414: (ee, ie, He) => {
    He.d(ie, {
      e: () => ze
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(41203),
      Ke = He(37931),
      Ue = He(37929),
      Fe = He(41421),
      Je = He(41238),
      oe = He(39467),
      Re = He(38590),
      ke = He(41446),
      qe = He(41141);
    let fe = (() => {
      var ee;
      let ie, He, Me, Ke, Ue, Fe, Je, oe, Re, ke, fe, Te, pe = [];
      return ee = class {
        constructor() {
          this._func = (0, ye.l)(this, pe), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(ee) {
          this._func = ee
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(ee) {
          this._backFunc = ee
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(ee) {
          this._funcRef = ee
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(ee) {
          this._funcMask = ee
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(ee) {
          this._opStencilFail = ee
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(ee) {
          this._opDepthFail = ee
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(ee) {
          this._opStencilDepthPass = ee
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(ee) {
          this._backOpStencilFail = ee
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(ee) {
          this._backOpDepthFail = ee
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(ee) {
          this._backOpStencilDepthPass = ee
        }
        get mask() {
          return this._mask
        }
        set mask(ee) {
          this._mask = ee
        }
        get enabled() {
          return this._enabled
        }
        set enabled(ee) {
          this._enabled = ee
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(ee) {
          qe.c.Clone((() => ee), this)
        }
        serialize() {
          return qe.c.Serialize(this)
        }
        parse(ee, ie, He) {
          qe.c.Parse((() => this), ee, ie, He)
        }
      }, (() => {
        const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ke = [(0, be.R)()], Ue = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)()], Re = [(0, be.R)()], ke = [(0, be.R)()], fe = [(0, be.R)()], Te = [(0, be.R)()], (0, ye.i)(ee, null, ie, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: ee => "func" in ee,
            get: ee => ee.func
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, He, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: ee => "backFunc" in ee,
            get: ee => ee.backFunc
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Me, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: ee => "funcRef" in ee,
            get: ee => ee.funcRef
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Ke, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: ee => "funcMask" in ee,
            get: ee => ee.funcMask
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Ue, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: ee => "opStencilFail" in ee,
            get: ee => ee.opStencilFail
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Fe, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: ee => "opDepthFail" in ee,
            get: ee => ee.opDepthFail
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Je, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: ee => "opStencilDepthPass" in ee,
            get: ee => ee.opStencilDepthPass
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, oe, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: ee => "backOpStencilFail" in ee,
            get: ee => ee.backOpStencilFail
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Re, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: ee => "backOpDepthFail" in ee,
            get: ee => ee.backOpDepthFail
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, ke, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: ee => "backOpStencilDepthPass" in ee,
            get: ee => ee.backOpStencilDepthPass
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, fe, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: ee => "mask" in ee,
            get: ee => ee.mask
          },
          metadata: qe
        }, null, pe), (0, ye.i)(ee, null, Te, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "enabled" in ee,
            get: ee => ee.enabled
          },
          metadata: qe
        }, null, pe), qe && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qe
        })
      })(), ee
    })();
    var Te = He(41451),
      pe = He(41022),
      Xe = He(40985);
    let ze = (() => {
      var ee;
      let ie, He, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je = [],
        se = [],
        Ie = [],
        he = [],
        Ne = [],
        Ge = [],
        re = [],
        Qe = [],
        ei = [],
        ii = [],
        Hi = [],
        yi = [],
        bi = [],
        Mi = [],
        Ki = [],
        Ui = [],
        Fi = [],
        Ji = [],
        oi = [],
        Ri = [],
        ki = [],
        qi = [],
        fi = [],
        Ti = [],
        Xi = [],
        zi = [],
        Bi = [],
        Ei = [],
        gi = [],
        Oi = [],
        di = [],
        Wi = [],
        ti = [],
        Zi = [],
        wi = [],
        Di = [],
        Pi = [],
        Ai = [],
        Yi = [],
        Vi = [],
        ai = [],
        ci = [],
        xi = [],
        Li = [],
        Ci = [],
        vi = [],
        ui = [],
        mi = [],
        li = [],
        Si = [],
        ni = [];
      return ee = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(ie) {
          this._useVertexPulling !== ie && (this._useVertexPulling = ie, this.tye(ee.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(ee) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(ie) {
          if (this._alpha === ie) return;
          const He = this._alpha;
          this._alpha = ie, 1 !== He && 1 !== ie || this.tye(ee.MiscDirtyFlag + ee.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(ie) {
          this._backFaceCulling !== ie && (this._backFaceCulling = ie, this.tye(ee.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(ie) {
          const He = Math.max(0, Math.min(0 | ie, 4));
          this._textureRepetitionMode !== He && (this._textureRepetitionMode = He, this.tye(ee.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(ie) {
          this._cullBackFaces !== ie && (this._cullBackFaces = ie, this.tye(ee.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(ee) {
          this._blockDirtyMechanism !== ee && (this._blockDirtyMechanism = ee, ee || this.markDirty())
        }
        atomicMaterialsUpdate(ee) {
          this.blockDirtyMechanism = !0;
          try {
            ee(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(ee) {
          this._onDisposeObserver && this.Bx.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bx.add(ee)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new Ke.d), this._onBindObservable
        }
        set onBind(ee) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(ee)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new Ke.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new Ke.d), this._onEffectCreatedObservable
        }
        set alphaMode(ee) {
          this._alphaMode[0] = ee
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[He] !== ie && (this._alphaMode[He] = ie, this.tye(ee.TextureDirtyFlag))
        }
        set needDepthPrePass(ee) {
          this._needDepthPrePass !== ee && (this._needDepthPrePass = ee, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(ie) {
          this._fogEnabled !== ie && (this._fogEnabled = ie, this.tye(ee.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case ee.WireFrameFillMode:
            case ee.LineListDrawMode:
            case ee.LineLoopDrawMode:
            case ee.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(ie) {
          this.fillMode = ie ? ee.WireFrameFillMode : ee.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case ee.PointFillMode:
            case ee.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(ie) {
          this.fillMode = ie ? ee.PointFillMode : ee.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(ie) {
          this._fillMode !== ie && (this._fillMode = ie, this.tye(ee.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(ee) {
          const ie = this.Xx().Nf().getCaps().fragmentDepthSupported;
          ee && !ie && oe.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = ee && ie, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(ee) {
          this._isVertexOutputInvariant !== ee && (this._isVertexOutputInvariant = ee, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(ee) {
          this._drawWrapper = ee
        }
        constructor(ie, He, be) {
          let Fe = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, ye.l)(this, je), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, ye.l)(this, se, void 0), this.uniqueId = ((0, ye.l)(this, Ie), (0, ye.l)(this, he, void 0)), this._loadedUniqueId = (0, ye.l)(this, Ne), this.name = (0, ye.l)(this, Ge, void 0), this.metadata = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, null)), this._internalMetadata = (0, ye.l)(this, ei), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, ye.l)(this, ii, !1), this.checkReadyOnlyOnce = ((0, ye.l)(this, Hi), (0, ye.l)(this, yi, !1)), this.state = ((0, ye.l)(this, bi), (0, ye.l)(this, Mi, "")), this._alpha = ((0, ye.l)(this, Ki), (0, ye.l)(this, Ui, 1)), this.inspectableCustomProperties = (0, ye.l)(this, Fi), this._backFaceCulling = (0, ye.l)(this, Ji, !0), this._textureRepetitionMode = ((0, ye.l)(this, oi), (0, ye.l)(this, Ri, 0)), this.textureRepetitionHexTilingParams = ((0, ye.l)(this, ki), (0, ye.l)(this, qi, [1, .6, 7, .5])), this._cullBackFaces = ((0, ye.l)(this, fi), (0, ye.l)(this, Ti, !0)), this._blockDirtyMechanism = ((0, ye.l)(this, Xi), !1), this.sideOrientation = (0, ye.l)(this, zi, null), this.onCompiled = ((0, ye.l)(this, Bi), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Bx = new Ke.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, ye.l)(this, Ei, [2]), this._needDepthPrePass = ((0, ye.l)(this, gi), (0, ye.l)(this, Oi, !1)), this.disableDepthWrite = ((0, ye.l)(this, di), (0, ye.l)(this, Wi, !1)), this.disableColorWrite = ((0, ye.l)(this, ti), (0, ye.l)(this, Zi, !1)), this.forceDepthWrite = ((0, ye.l)(this, wi), (0, ye.l)(this, Di, !1)), this.depthFunction = ((0, ye.l)(this, Pi), (0, ye.l)(this, Ai, 0)), this.separateCullingPass = ((0, ye.l)(this, Yi), (0, ye.l)(this, Vi, !1)), this._fogEnabled = ((0, ye.l)(this, ai), (0, ye.l)(this, ci, !0)), this.pointSize = ((0, ye.l)(this, xi), (0, ye.l)(this, Li, 1)), this.zOffset = ((0, ye.l)(this, Ci), (0, ye.l)(this, vi, 0)), this.zOffsetUnits = ((0, ye.l)(this, ui), (0, ye.l)(this, mi, 0)), this.clipPlane = (0, ye.l)(this, li), this.stencil = new fe, this._isVertexOutputInvariant = (0, ye.l)(this, Si, ee.ForceVertexOutputInvariant), this._materialContext = (0, ye.l)(this, ni), this._useUBO = !1, this._fillMode = ee.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = ie;
          const oe = He || Ue.b.LastCreatedScene;
          oe && (this._scene = oe, this._dirtyCallbacks = {}, this._forceGLSL = Fe, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = ie || Me.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Nf().createMaterialContext(), this._drawWrapper = new ke.b(this._scene.Nf(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new Je.b(this._scene.Nf(), void 0, void 0, ie), this._useUBO = this.Xx().Nf().supportsUniformBuffers, this._createUniformBuffer(), be || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), ee.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const ee = this.Xx().Nf();
          this._uniformBuffer?.dispose(), ee.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new Je.b(ee, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new Je.b(this._scene.Nf(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(ee) {
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
        isReady(ee, ie) {
          return !0
        }
        isReadyForSubMesh(ee, ie, He) {
          const ye = ie.materialDefines;
          return !!ye && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ye, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Xx() {
          return this._scene
        }
        _getEffectiveOrientation(ee) {
          return null !== this.sideOrientation ? this.sideOrientation : ee.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(ee) {
          this._transparencyMode = ee
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === ee.MATERIAL_ALPHABLEND || this._transparencyMode === ee.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === ee.MATERIAL_ALPHATEST || this._transparencyMode === ee.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === ee.MATERIAL_OPAQUE || this._transparencyMode === ee.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(ee) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : ee.visibility < 1 || !this._disableAlphaBlending && (ee.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(ee) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(ee) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const He = this.Xx().meshes;
          for (const ee of He)
            if (ee.pW)
              for (const He of ee.pW)
                if (He.iT() === this)
                  for (const ee of He._drawWrappers) ee && this._materialContext === ee.materialContext && (ee._wasPreviouslyReady = !1, ee._wasPreviouslyUsingInstances = null, ee._forceRebindOnNextCall = ie);
          ie && this.tye(ee.AllDirtyFlag)
        }
        _preBind(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const ye = this._scene.Nf(),
            be = (null == He ? this.sideOrientation : He) === ee.ClockWiseSideOrientation,
            Me = ie || this._getDrawWrapper();
          return (0, pe.e)(Me) && Me.materialContext && (Me.materialContext.useVertexPulling = this.useVertexPulling), ye.enableEffect(Me), ye.setState(this.backFaceCulling, this.zOffset, !1, be, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), be
        }
        bind(ee, ie) {}
        buildUniformLayout() {
          const ee = this._uniformBuffer;
          this._eventInfo.ubo = ee, this._callbackPluginEventGeneric(8, this._eventInfo), ee.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(ee, ie, He) {
          const ye = He._drawWrapper;
          this._eventInfo.subMesh = He, this._callbackPluginEventBindForSubMesh(this._eventInfo), ye._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(ee) {}
        bindView(ee) {
          this._useUBO ? this._needToBindSceneUbo = !0 : ee.setMatrix("view", this.Xx().getViewMatrix())
        }
        bindViewProjection(ee) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (ee.setMatrix("viewProjection", this.Xx().getTransformMatrix()), ee.setMatrix("projection", this.Xx().getProjectionMatrix()), ee.setMatrix("inverseProjection", this.Xx().getInverseProjectionMatrix()))
        }
        bindEyePosition(ee, ie) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(ee, ie)
        }
        _afterBind(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && ie && (this._needToBindSceneUbo = !1, (0, Te.x)(ie, this.Xx().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = ee ? ee.visibility : 1, this._onBindObservable && ee && this._onBindObservable.notifyObservers(ee), this.disableDepthWrite) {
            const ee = this._scene.Nf();
            this._cachedDepthWriteState = ee.getDepthWrite(), ee.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const ee = this._scene.Nf();
            this._cachedColorWriteState = ee.getColorWrite(), ee.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const ee = this._scene.Nf();
            this._cachedDepthFunctionState = ee.getDepthFunction() || 0, ee.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Nf().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Nf().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Nf().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(ee) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = ee, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(ee) {
          return null
        }
        _clonePlugins(ie, He) {
          const ye = {};
          if (this._serializePlugins(ye), ee._ParsePlugins(ye, ie, this._scene, He), this.pluginManager)
            for (const ee of this.pluginManager._plugins) {
              const He = ie.pluginManager.getPlugin(ee.name);
              He && ee.copyTo(He)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const ee = [];
            for (const ie in this.meshMap) {
              const He = this.meshMap[ie];
              He && ee.push(He)
            }
            return ee
          }
          return this._scene.meshes.filter((ee => ee.material === this))
        }
        forceCompilation(ee, ie, He, ye) {
          const be = {
              clipPlane: !1,
              useInstances: !1,
              ...He
            },
            Me = this.Xx(),
            Ke = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const Ue = () => {
            if (!this._scene || !this._scene.Nf()) return;
            const He = Me.clipPlane;
            if (be.clipPlane && (Me.clipPlane = new Re.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let He = !0,
                Me = null;
              if (ee.pW) {
                const ie = new Fe.b(0, 0, 0, 0, 0, ee, void 0, !1, !1);
                ie.materialDefines && (ie.materialDefines._renderId = -1), this.isReadyForSubMesh(ee, ie, be.useInstances) || (ie.effect && ie.effect.getCompilationError() && ie.effect.allFallbacksProcessed() ? Me = ie.effect.getCompilationError() : (He = !1, setTimeout(Ue, 16)))
              }
              He && (this.allowShaderHotSwapping = Ke, Me && ye && ye(Me), ie && ie(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = Ke, ie && ie(this)) : setTimeout(Ue, 16);
            be.clipPlane && (Me.clipPlane = He)
          };
          Ue()
        }
        async forceCompilationAsync(ee, ie) {
          return await new Promise(((He, ye) => {
            this.forceCompilation(ee, (() => {
              He()
            }), ie, (ee => {
              ye(ee)
            }))
          }))
        }
        tye(ie) {
          this.Xx().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (ee._DirtyCallbackArray.length = 0, ie & ee.ImageProcessingDirtyFlag && ee._DirtyCallbackArray.push(ee._ImageProcessingDirtyCallBack), ie & ee.TextureDirtyFlag && ee._DirtyCallbackArray.push(ee._TextureDirtyCallBack), ie & ee.LightDirtyFlag && ee._DirtyCallbackArray.push(ee._LightsDirtyCallBack), ie & ee.FresnelDirtyFlag && ee._DirtyCallbackArray.push(ee._FresnelDirtyCallBack), ie & ee.AttributesDirtyFlag && ee._DirtyCallbackArray.push(ee._AttributeDirtyCallBack), ie & ee.MiscDirtyFlag && ee._DirtyCallbackArray.push(ee._MiscDirtyCallBack), ie & ee.PrePassDirtyFlag && ee._DirtyCallbackArray.push(ee._PrePassDirtyCallBack), ee._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(ee._RunDirtyCallBacks), this.Xx().resetCachedMaterial())
        }
        resetDrawCache() {
          const ee = this.Xx().meshes;
          for (const ie of ee)
            if (ie.pW)
              for (const ee of ie.pW) ee.iT() === this && ee.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(ee) {
          const ie = this.Xx();
          if (ie.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const He = ie.meshes;
          for (const ye of He)
            if (ye.pW)
              for (const He of ye.pW) {
                if ((He.iT() || (ie._hasDefaultMaterial ? ie.defaultMaterial : null)) === this)
                  for (const ie of He._drawWrappers) ie && ie.defines && ie.defines.markAllAsDirty && this._materialContext === ie.materialContext && ee(ie.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Xx().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ee = this.Xx().enablePrePassRenderer();
          ee && ee.tye()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(ee._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(ee._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(ee._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(ee._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(ee._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(ee._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(ee._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(ee._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(ee._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(ee._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const ee = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Bx.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(ee)
            }))
          }
        }
        setPrePassRenderer(ee) {
          return !1
        }
        dispose(ee, ie, He) {
          const ye = this.Xx();
          if (ye.stopAnimation(this), ye.freeProcessedMaterials(), ye.removeMaterial(this), this._eventInfo.forceDisposeTextures = ie, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const ee = this._parentContainer.materials.indexOf(this);
            ee > -1 && this._parentContainer.materials.splice(ee, 1), this._parentContainer = null
          }
          if (!0 !== He)
            if (this.meshMap)
              for (const be in this.meshMap) {
                const ee = this.meshMap[be];
                this._disposeMeshResources(ee)
              } else {
                const ee = ye.meshes;
                for (const ie of ee) this._disposeMeshResources(ie)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Bx.notifyObservers(this), this.Bx.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(ee) {
          if (!ee) return;
          const ie = ee.geometry,
            He = ee._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (ee.pW && He)
              for (const ye of ee.pW) {
                const ee = ye._drawWrappers;
                for (let be = 0; be < ee.length; be++) {
                  const Me = ee[be]?.effect;
                  if (!Me) continue;
                  He[be] === this && (ie?._releaseVertexArrayObject(Me), ye._removeDrawWrapper(be, !0, !0))
                }
              }
          } else ie?._releaseVertexArrayObject(this._drawWrapper.effect);
          ee.material !== this || ee.jMe || (ee.material = null)
        }
        serialize() {
          const ee = qe.c.Serialize(this);
          return ee.stencil = this.stencil.serialize(), ee.uniqueId = this.uniqueId, this._serializePlugins(ee), ee
        }
        _serializePlugins(ee) {
          if (ee.plugins = {}, this.pluginManager)
            for (const ie of this.pluginManager._plugins) ie.doNotSerialize || (ee.plugins[ie.getClassName()] = ie.serialize())
        }
        static ParseAlphaMode(ee, ie) {
          void 0 !== ee._alphaMode ? ie._alphaMode = Array.isArray(ee._alphaMode) ? [...ee._alphaMode] : [ee._alphaMode] : void 0 !== ee.alphaMode ? ie._alphaMode = Array.isArray(ee.alphaMode) ? [...ee.alphaMode] : [ee.alphaMode] : ie._alphaMode = [2]
        }
        static Parse(ie, He, ye) {
          if (ie.customType) {
            if ("BABYLON.PBRMaterial" === ie.customType && ie.overloadedAlbedo && (ie.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return oe.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else ie.customType = "BABYLON.StandardMaterial";
          const be = Me.h.Instantiate(ie.customType).Parse(ie, He, ye);
          return be._loadedUniqueId = ie.uniqueId, ee.ParseAlphaMode(ie, be), be
        }
        static _ParsePlugins(ee, ie, He, ye) {
          if (ee.plugins)
            for (const be in ee.plugins) {
              const Ke = ee.plugins[be];
              let Ue = ie.pluginManager?.getPlugin(Ke.name);
              if (!Ue) {
                const ee = Me.h.Instantiate("BABYLON." + be);
                ee && (Ue = new ee(ie))
              }
              Ue?.parse(Ke, He, ye)
            }
        }
      }, (() => {
        const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, be.R)()], He = [(0, be.R)()], Xe = [(0, be.R)()], ze = [(0, be.R)()], Be = [(0, be.R)()], Ee = [(0, be.R)()], ge = [(0, be.R)()], Oe = [(0, be.R)("alpha")], de = [(0, be.R)("backFaceCulling")], We = [(0, be.R)("textureRepetitionMode")], te = [(0, be.R)("textureRepetitionHexTilingParams")], Ze = [(0, be.R)("cullBackFaces")], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], Ae = [(0, be.R)()], Ye = [(0, be.R)()], Ve = [(0, be.R)()], ae = [(0, be.R)()], ce = [(0, be.R)()], xe = [(0, be.R)("fogEnabled")], Le = [(0, be.R)()], Ce = [(0, be.R)()], ve = [(0, be.R)()], ue = [(0, be.R)()], me = [(0, be.R)()], le = [(0, be.R)()], Se = [(0, be.R)()], ne = [(0, be.R)()], (0, ye.i)(ee, null, ue, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: ee => "pointsCloud" in ee,
            get: ee => ee.pointsCloud
          },
          metadata: Me
        }, null, je), (0, ye.i)(ee, null, me, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "fillMode" in ee,
            get: ee => ee.fillMode
          },
          metadata: Me
        }, null, je), (0, ye.i)(ee, null, le, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: ee => "useLogarithmicDepth" in ee,
            get: ee => ee.useLogarithmicDepth
          },
          metadata: Me
        }, null, je), (0, ye.i)(ee, null, ne, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "transparencyMode" in ee,
            get: ee => ee.transparencyMode
          },
          metadata: Me
        }, null, je), (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: ee => "id" in ee,
            get: ee => ee.id,
            set: (ee, ie) => {
              ee.id = ie
            }
          },
          metadata: Me
        }, se, Ie), (0, ye.i)(null, null, He, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: ee => "uniqueId" in ee,
            get: ee => ee.uniqueId,
            set: (ee, ie) => {
              ee.uniqueId = ie
            }
          },
          metadata: Me
        }, he, Ne), (0, ye.i)(null, null, Xe, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: ee => "name" in ee,
            get: ee => ee.name,
            set: (ee, ie) => {
              ee.name = ie
            }
          },
          metadata: Me
        }, Ge, re), (0, ye.i)(null, null, ze, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: ee => "metadata" in ee,
            get: ee => ee.metadata,
            set: (ee, ie) => {
              ee.metadata = ie
            }
          },
          metadata: Me
        }, Qe, ei), (0, ye.i)(null, null, Be, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: ee => "checkReadyOnEveryCall" in ee,
            get: ee => ee.checkReadyOnEveryCall,
            set: (ee, ie) => {
              ee.checkReadyOnEveryCall = ie
            }
          },
          metadata: Me
        }, ii, Hi), (0, ye.i)(null, null, Ee, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: ee => "checkReadyOnlyOnce" in ee,
            get: ee => ee.checkReadyOnlyOnce,
            set: (ee, ie) => {
              ee.checkReadyOnlyOnce = ie
            }
          },
          metadata: Me
        }, yi, bi), (0, ye.i)(null, null, ge, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: ee => "state" in ee,
            get: ee => ee.state,
            set: (ee, ie) => {
              ee.state = ie
            }
          },
          metadata: Me
        }, Mi, Ki), (0, ye.i)(null, null, Oe, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "_alpha" in ee,
            get: ee => ee._alpha,
            set: (ee, ie) => {
              ee._alpha = ie
            }
          },
          metadata: Me
        }, Ui, Fi), (0, ye.i)(null, null, de, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: ee => "_backFaceCulling" in ee,
            get: ee => ee._backFaceCulling,
            set: (ee, ie) => {
              ee._backFaceCulling = ie
            }
          },
          metadata: Me
        }, Ji, oi), (0, ye.i)(null, null, We, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "_textureRepetitionMode" in ee,
            get: ee => ee._textureRepetitionMode,
            set: (ee, ie) => {
              ee._textureRepetitionMode = ie
            }
          },
          metadata: Me
        }, Ri, ki), (0, ye.i)(null, null, te, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: ee => "textureRepetitionHexTilingParams" in ee,
            get: ee => ee.textureRepetitionHexTilingParams,
            set: (ee, ie) => {
              ee.textureRepetitionHexTilingParams = ie
            }
          },
          metadata: Me
        }, qi, fi), (0, ye.i)(null, null, Ze, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: ee => "_cullBackFaces" in ee,
            get: ee => ee._cullBackFaces,
            set: (ee, ie) => {
              ee._cullBackFaces = ie
            }
          },
          metadata: Me
        }, Ti, Xi), (0, ye.i)(null, null, we, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: ee => "sideOrientation" in ee,
            get: ee => ee.sideOrientation,
            set: (ee, ie) => {
              ee.sideOrientation = ie
            }
          },
          metadata: Me
        }, zi, Bi), (0, ye.i)(null, null, De, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "_alphaMode" in ee,
            get: ee => ee._alphaMode,
            set: (ee, ie) => {
              ee._alphaMode = ie
            }
          },
          metadata: Me
        }, Ei, gi), (0, ye.i)(null, null, Pe, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: ee => "_needDepthPrePass" in ee,
            get: ee => ee._needDepthPrePass,
            set: (ee, ie) => {
              ee._needDepthPrePass = ie
            }
          },
          metadata: Me
        }, Oi, di), (0, ye.i)(null, null, Ae, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: ee => "disableDepthWrite" in ee,
            get: ee => ee.disableDepthWrite,
            set: (ee, ie) => {
              ee.disableDepthWrite = ie
            }
          },
          metadata: Me
        }, Wi, ti), (0, ye.i)(null, null, Ye, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: ee => "disableColorWrite" in ee,
            get: ee => ee.disableColorWrite,
            set: (ee, ie) => {
              ee.disableColorWrite = ie
            }
          },
          metadata: Me
        }, Zi, wi), (0, ye.i)(null, null, Ve, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: ee => "forceDepthWrite" in ee,
            get: ee => ee.forceDepthWrite,
            set: (ee, ie) => {
              ee.forceDepthWrite = ie
            }
          },
          metadata: Me
        }, Di, Pi), (0, ye.i)(null, null, ae, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: ee => "depthFunction" in ee,
            get: ee => ee.depthFunction,
            set: (ee, ie) => {
              ee.depthFunction = ie
            }
          },
          metadata: Me
        }, Ai, Yi), (0, ye.i)(null, null, ce, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: ee => "separateCullingPass" in ee,
            get: ee => ee.separateCullingPass,
            set: (ee, ie) => {
              ee.separateCullingPass = ie
            }
          },
          metadata: Me
        }, Vi, ai), (0, ye.i)(null, null, xe, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "_fogEnabled" in ee,
            get: ee => ee._fogEnabled,
            set: (ee, ie) => {
              ee._fogEnabled = ie
            }
          },
          metadata: Me
        }, ci, xi), (0, ye.i)(null, null, Le, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: ee => "pointSize" in ee,
            get: ee => ee.pointSize,
            set: (ee, ie) => {
              ee.pointSize = ie
            }
          },
          metadata: Me
        }, Li, Ci), (0, ye.i)(null, null, Ce, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: ee => "zOffset" in ee,
            get: ee => ee.zOffset,
            set: (ee, ie) => {
              ee.zOffset = ie
            }
          },
          metadata: Me
        }, vi, ui), (0, ye.i)(null, null, ve, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: ee => "zOffsetUnits" in ee,
            get: ee => ee.zOffsetUnits,
            set: (ee, ie) => {
              ee.zOffsetUnits = ie
            }
          },
          metadata: Me
        }, mi, li), (0, ye.i)(null, null, Se, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: ee => "_isVertexOutputInvariant" in ee,
            get: ee => ee._isVertexOutputInvariant,
            set: (ee, ie) => {
              ee._isVertexOutputInvariant = ie
            }
          },
          metadata: Me
        }, Si, ni), Me && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Me
        })
      })(), ee.TriangleFillMode = 0, ee.WireFrameFillMode = 1, ee.PointFillMode = 2, ee.PointListDrawMode = 3, ee.LineListDrawMode = 4, ee.LineLoopDrawMode = 5, ee.LineStripDrawMode = 6, ee.TriangleStripDrawMode = 7, ee.TriangleFanDrawMode = 8, ee.ClockWiseSideOrientation = 0, ee.CounterClockWiseSideOrientation = 1, ee.ImageProcessingDirtyFlag = 64, ee.TextureDirtyFlag = 1, ee.LightDirtyFlag = 2, ee.FresnelDirtyFlag = 4, ee.AttributesDirtyFlag = 8, ee.MiscDirtyFlag = 16, ee.PrePassDirtyFlag = 32, ee.AllDirtyFlag = 127, ee.MATERIAL_OPAQUE = 0, ee.MATERIAL_ALPHATEST = 1, ee.MATERIAL_ALPHABLEND = 2, ee.MATERIAL_ALPHATESTANDBLEND = 3, ee.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, ee.MATERIAL_NORMALBLENDMETHOD_RNM = 1, ee.LIGHTFALLOFF_PHYSICAL = 0, ee.LIGHTFALLOFF_GLTF = 1, ee.LIGHTFALLOFF_STANDARD = 2, ee.OnEventObservable = new Ke.d, ee.ForceVertexOutputInvariant = !1, ee._AllDirtyCallBack = ee => ee.markAllAsDirty(), ee._ImageProcessingDirtyCallBack = ee => ee.markAsImageProcessingDirty(), ee._TextureDirtyCallBack = ee => ee.markAsTexturesDirty(), ee._FresnelDirtyCallBack = ee => ee.markAsFresnelDirty(), ee._MiscDirtyCallBack = ee => ee.markAsMiscDirty(), ee._PrePassDirtyCallBack = ee => ee.markAsPrePassDirty(), ee._LightsDirtyCallBack = ee => ee.markAsLightDirty(), ee._AttributeDirtyCallBack = ee => ee.markAsAttributesDirty(), ee._FresnelAndMiscDirtyCallBack = ie => {
        ee._FresnelDirtyCallBack(ie), ee._MiscDirtyCallBack(ie)
      }, ee._TextureAndMiscDirtyCallBack = ie => {
        ee._TextureDirtyCallBack(ie), ee._MiscDirtyCallBack(ie)
      }, ee._DirtyCallbackArray = [], ee._RunDirtyCallBacks = ie => {
        for (const He of ee._DirtyCallbackArray) He(ie)
      }, ee
    })();
    Object.getOwnPropertyDescriptor(ze.prototype, "pluginManager") || Object.defineProperty(ze.prototype, "pluginManager", (0, Xe.d)("Material", "pluginManager"))
  },
  41466: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(41e3);
    class be {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(ee) {
        this._DiffuseTextureEnabled !== ee && (this._DiffuseTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(ee) {
        this._BaseWeightTextureEnabled !== ee && (this._BaseWeightTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(ee) {
        this._BaseDiffuseRoughnessTextureEnabled !== ee && (this._BaseDiffuseRoughnessTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(ee) {
        this._DetailTextureEnabled !== ee && (this._DetailTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(ee) {
        this._DecalMapEnabled !== ee && (this._DecalMapEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(ee) {
        this._AmbientTextureEnabled !== ee && (this._AmbientTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(ee) {
        this._OpacityTextureEnabled !== ee && (this._OpacityTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(ee) {
        this._ReflectionTextureEnabled !== ee && (this._ReflectionTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(ee) {
        this._EmissiveTextureEnabled !== ee && (this._EmissiveTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(ee) {
        this._SpecularTextureEnabled !== ee && (this._SpecularTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(ee) {
        this._BumpTextureEnabled !== ee && (this._BumpTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(ee) {
        this._LightmapTextureEnabled !== ee && (this._LightmapTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(ee) {
        this._RefractionTextureEnabled !== ee && (this._RefractionTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(ee) {
        this._ColorGradingTextureEnabled !== ee && (this._ColorGradingTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(ee) {
        this._FresnelEnabled !== ee && (this._FresnelEnabled = ee, ye.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(ee) {
        this._ClearCoatTextureEnabled !== ee && (this._ClearCoatTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(ee) {
        this._ClearCoatBumpTextureEnabled !== ee && (this._ClearCoatBumpTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(ee) {
        this._ClearCoatTintTextureEnabled !== ee && (this._ClearCoatTintTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(ee) {
        this._SheenTextureEnabled !== ee && (this._SheenTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(ee) {
        this._AnisotropicTextureEnabled !== ee && (this._AnisotropicTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(ee) {
        this._ThicknessTextureEnabled !== ee && (this._ThicknessTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(ee) {
        this._RefractionIntensityTextureEnabled !== ee && (this._RefractionIntensityTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(ee) {
        this._TranslucencyIntensityTextureEnabled !== ee && (this._TranslucencyIntensityTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(ee) {
        this._TranslucencyColorTextureEnabled !== ee && (this._TranslucencyColorTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(ee) {
        this._IridescenceTextureEnabled !== ee && (this._IridescenceTextureEnabled = ee, ye.e.MarkAllMaterialsAsDirty(1))
      }
    }
    be._DiffuseTextureEnabled = !0, be._BaseWeightTextureEnabled = !0, be._BaseDiffuseRoughnessTextureEnabled = !0, be._DetailTextureEnabled = !0, be._DecalMapEnabled = !0, be._AmbientTextureEnabled = !0, be._OpacityTextureEnabled = !0, be._ReflectionTextureEnabled = !0, be._EmissiveTextureEnabled = !0, be._SpecularTextureEnabled = !0, be._BumpTextureEnabled = !0, be._LightmapTextureEnabled = !0, be._RefractionTextureEnabled = !0, be._ColorGradingTextureEnabled = !0, be._FresnelEnabled = !0, be._ClearCoatTextureEnabled = !0, be._ClearCoatBumpTextureEnabled = !0, be._ClearCoatTintTextureEnabled = !0, be._SheenTextureEnabled = !0, be._AnisotropicTextureEnabled = !0, be._ThicknessTextureEnabled = !0, be._RefractionIntensityTextureEnabled = !0, be._TranslucencyIntensityTextureEnabled = !0, be._TranslucencyColorTextureEnabled = !0, be._IridescenceTextureEnabled = !0
  },
  41451: (ee, ie, He) => {
    He.d(ie, {
      A: () => Ee,
      D: () => Pe,
      F: () => ge,
      I: () => we,
      K: () => De,
      O: () => qe,
      R: () => ke,
      T: () => me,
      U: () => xe,
      V: () => ae,
      W: () => Ve,
      Z: () => Be,
      _: () => Ae,
      ab: () => le,
      cb: () => Se,
      d: () => Ye,
      eb: () => ne,
      g: () => Oe,
      hb: () => he,
      k: () => Re,
      kb: () => se,
      l: () => Xe,
      n: () => ze,
      nb: () => Ie,
      r: () => Ze,
      rb: () => fe,
      v: () => Fe,
      w: () => Te,
      x: () => pe
    });
    var ye = He(39467),
      be = He(37929),
      Me = He(41301),
      Ke = He(41458),
      Ue = He(41466);

    function Fe(ee, ie, He) {
      if (!ee || ee.LOGARITHMICDEPTH || ee.indexOf && ee.indexOf("LOGARITHMICDEPTH") >= 0) {
        const ee = He.activeCamera;
        1 === ee.mode && ye.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), ie.setFloat("logarithmicDepthConstant", 2 / (Math.log(ee.maxZ + 1) / Math.LN2))
      }
    }
    const Je = {
        r: 0,
        g: 0,
        b: 0
      },
      oe = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function Re(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      He && ee.fogEnabled && (!ie || ie.applyFog) && 0 !== ee.fogMode && (He.setFloat4("vFogInfos", ee.fogMode, ee.fogStart, ee.fogEnd, ee.fogDensity), ye ? (ee.fogColor.toLinearSpaceToRef(Je, ee.Nf().useExactSrgbConversions), He.setColor3("vFogColor", Je)) : He.setColor3("vFogColor", ee.fogColor))
    }

    function ke(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
      const Re = ee.numMaxInfluencers || ee.numInfluencers;
      return Re <= 0 ? 0 : (ie.push("#define MORPHTARGETS"), ee.hasPositions && ie.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), ee.hasNormals && ie.push("#define MORPHTARGETTEXTURE_HASNORMALS"), ee.hasTangents && ie.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), ee.hasUVs && ie.push("#define MORPHTARGETTEXTURE_HASUVS"), ee.hasUV2s && ie.push("#define MORPHTARGETTEXTURE_HASUV2S"), ee.hasColors && ie.push("#define MORPHTARGETTEXTURE_HASCOLORS"), ee.supportsPositions && be && ie.push("#define MORPHTARGETS_POSITION"), ee.supportsNormals && Me && ie.push("#define MORPHTARGETS_NORMAL"), ee.supportsTangents && Ke && ie.push("#define MORPHTARGETS_TANGENT"), ee.supportsUVs && Ue && ie.push("#define MORPHTARGETS_UV"), ee.supportsUV2s && Fe && ie.push("#define MORPHTARGETS_UV2"), ee.supportsColors && Je && ie.push("#define MORPHTARGETS_COLOR"), ie.push("#define NUM_MORPH_INFLUENCERS " + Re), ee.isUsingTextureForTargets && ie.push("#define MORPHTARGETS_TEXTURE"), oe.NUM_MORPH_INFLUENCERS = Re, oe.NORMAL = Me, oe.TANGENT = Ke, oe.UV = Ue, oe.UV2 = Fe, oe.COLOR = Je, qe(He, ye, oe, be), Re)
    }

    function qe(ee, ie, He) {
      let Me = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ke = He.NUM_MORPH_INFLUENCERS;
      if (Ke > 0 && be.b.LastCreatedEngine) {
        const Ue = be.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          Fe = ie.morphTargetManager;
        if (Fe?.isUsingTextureForTargets) return;
        const Je = Fe && Fe.supportsPositions && Me,
          oe = Fe && Fe.supportsNormals && He.NORMAL,
          Re = Fe && Fe.supportsTangents && He.TANGENT,
          ke = Fe && Fe.supportsUVs && He.UV1,
          qe = Fe && Fe.supportsUV2s && He.UV2,
          fe = Fe && Fe.supportsColors && He.VERTEXCOLOR;
        for (let He = 0; He < Ke; He++) Je && ee.push("position" + He), oe && ee.push("normal" + He), Re && ee.push("tangent" + He), ke && ee.push("uv_" + He), qe && ee.push("uv2_" + He), fe && ee.push("color" + He), ee.length > Ue && ye.e.Error("Cannot add more vertex attributes for mesh " + ie.name)
      }
    }

    function fe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      ee.push("world0"), ee.push("world1"), ee.push("world2"), ee.push("world3"), ie && (ee.push("previousWorld0"), ee.push("previousWorld1"), ee.push("previousWorld2"), ee.push("previousWorld3"))
    }

    function Te(ee, ie) {
      const He = ee.morphTargetManager;
      ee && He && ie.setFloatArray("morphTargetInfluences", He.influences)
    }

    function pe(ee, ie) {
      ie.bindToEffect(ee, "Scene")
    }

    function Xe(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Fe = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Je = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        oe = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Re = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        ke = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (ee.texturesEnabled && be && Ue.c.ReflectionTextureEnabled) {
        if (He.oie("reflectionMatrix", be.getReflectionTextureMatrix()), He.updateFloat2("vReflectionInfos", be.level * ee.iblIntensity, ke), Fe && be.boundingBoxSize) {
          const ee = be;
          He.updateVector3("vReflectionPosition", ee.boundingBoxPosition), He.updateVector3("vReflectionSize", ee.boundingBoxSize)
        }
        if (Me) {
          const ee = be.getSize().width;
          He.updateFloat2("vReflectionFilteringInfo", ee, Math.log2(ee))
        }
        if (oe && !ie.USEIRRADIANCEMAP) {
          const ee = be.sphericalPolynomial;
          if (ie.USESPHERICALFROMREFLECTIONMAP && ee)
            if (ie.SPHERICAL_HARMONICS) {
              const ie = ee.preScaledHarmonics;
              He.updateVector3("vSphericalL00", ie.l00), He.updateVector3("vSphericalL1_1", ie.l1_1), He.updateVector3("vSphericalL10", ie.l10), He.updateVector3("vSphericalL11", ie.l11), He.updateVector3("vSphericalL2_2", ie.l2_2), He.updateVector3("vSphericalL2_1", ie.l2_1), He.updateVector3("vSphericalL20", ie.l20), He.updateVector3("vSphericalL21", ie.l21), He.updateVector3("vSphericalL22", ie.l22)
            } else He.updateFloat3("vSphericalX", ee.x.x, ee.x.y, ee.x.z), He.updateFloat3("vSphericalY", ee.y.x, ee.y.y, ee.y.z), He.updateFloat3("vSphericalZ", ee.z.x, ee.z.y, ee.z.z), He.updateFloat3("vSphericalXX_ZZ", ee.xx.x - ee.zz.x, ee.xx.y - ee.zz.y, ee.xx.z - ee.zz.z), He.updateFloat3("vSphericalYY_ZZ", ee.yy.x - ee.zz.x, ee.yy.y - ee.zz.y, ee.yy.z - ee.zz.z), He.updateFloat3("vSphericalZZ", ee.zz.x, ee.zz.y, ee.zz.z), He.updateFloat3("vSphericalXY", ee.xy.x, ee.xy.y, ee.xy.z), He.updateFloat3("vSphericalYZ", ee.yz.x, ee.yz.y, ee.yz.z), He.updateFloat3("vSphericalZX", ee.zx.x, ee.zx.y, ee.zx.z)
        } else Je && ie.USEIRRADIANCEMAP && ie.USE_IRRADIANCE_DOMINANT_DIRECTION && be.irradianceTexture && He.updateVector3("vReflectionDominantDirection", be.irradianceTexture._dominantDirection);
        Ke && He.updateFloat3("vReflectionMicrosurfaceInfos", be.getSize().width, be.lodGenerationScale, be.lodGenerationOffset)
      }
      Re && He.updateColor3("vReflectionColor", ye)
    }

    function ze(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (ye && Ue.c.ReflectionTextureEnabled) {
        ie.LODBASEDMICROSFURACE ? He.setTexture("reflectionSampler", ye) : (He.setTexture("reflectionSampler", ye._lodTextureMid || ye), He.setTexture("reflectionSamplerLow", ye._lodTextureLow || ye), He.setTexture("reflectionSamplerHigh", ye._lodTextureHigh || ye)), ie.USEIRRADIANCEMAP && He.setTexture("irradianceSampler", ye.irradianceTexture);
        const Me = ee.iblCdfGenerator;
        be && Me && He.setTexture("icdfSampler", Me.getIcdfTexture())
      }
    }

    function Be(ee, ie, He) {
      ie._needUVs = !0, ie[He] = !0, ee.optimizeUVAllocation && ee.getTextureMatrix().isIdentityAs3x2() ? (ie[He + "DIRECTUV"] = ee.coordinatesIndex + 1, ie["MAINUV" + (ee.coordinatesIndex + 1)] = !0) : ie[He + "DIRECTUV"] = 0
    }

    function Ee(ee, ie, He) {
      const ye = ee.getTextureMatrix();
      ie.oie(He + "Matrix", ye)
    }

    function ge(ee, ie, He) {
      He.BAKED_VERTEX_ANIMATION_TEXTURE && He.INSTANCES && ee.push("bakedVertexAnimationSettingsInstanced")
    }

    function Oe(ee, ie, He) {
      var ye;
      if (ie && ee && (ee.computeBonesUsingShaders && ie._bonesComputationForcedToCPU && (ee.computeBonesUsingShaders = !1), ee.useBones && ee.computeBonesUsingShaders && ee.skeleton)) {
        const be = ee.skeleton;
        if (be.isUsingTextureForMatrices && ie.getUniformIndex("boneTextureInfo") > -1) {
          const He = be.getTransformMatrixTexture(ee);
          ie.setTexture("boneSampler", He), ie.setFloat2("boneTextureInfo", be._textureWidth, be._textureHeight)
        } else {
          const Me = be.getTransformMatrices(ee);
          Me && (ie.setMatrices("mBones", Me), He && ee.Xx().prePassRenderer && ee.Xx().prePassRenderer.getIndex(2) && (He.previousBones[ee.uniqueId] || (He.previousBones[ee.uniqueId] = Me.slice()), ie.setMatrices("mPreviousBones", He.previousBones[ee.uniqueId]), ye = Me, He.previousBones[ee.uniqueId].set(ye)))
        }
      }
    }

    function de(ee, ie, He, ye, be) {
      let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      ee._bindLight(ie, He, ye, be, Me)
    }
    const We = 4,
      te = new WeakMap;

    function Ze(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const Me = Math.min(ie.lightSources.length, be);
      for (let Ke = 0; Ke < Me; Ke++) {
        de(ie.lightSources[Ke], Ke, ee, He, "boolean" === typeof ye ? ye : ye.SPECULARTERM, ie.receiveShadows)
      }
    }

    function we(ee, ie, He, ye) {
      He.NUM_BONE_INFLUENCERS > 0 && (ye.addCPUSkinningFallback(0, ie), ee.push("matricesIndices"), ee.push("matricesWeights"), He.NUM_BONE_INFLUENCERS > 4 && (ee.push("matricesIndicesExtra"), ee.push("matricesWeightsExtra")))
    }

    function De(ee, ie) {
      (ie.INSTANCES || ie.THIN_INSTANCES) && fe(ee, !!ie.PREPASS_VELOCITY), ie.INSTANCESCOLOR && ee.push("instanceColor")
    }

    function Pe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        be = 0;
      for (let Me = 0; Me < He && ee["LIGHT" + Me]; Me++) Me > 0 && (be = ye + Me, ie.addFallback(be, "LIGHT" + Me)), ee.SHADOWS || (ee["SHADOW" + Me] && ie.addFallback(ye, "SHADOW" + Me), ee["SHADOWPCF" + Me] && ie.addFallback(ye, "SHADOWPCF" + Me), ee["SHADOWPCSS" + Me] && ie.addFallback(ye, "SHADOWPCSS" + Me), ee["SHADOWPOISSON" + Me] && ie.addFallback(ye, "SHADOWPOISSON" + Me), ee["SHADOWESM" + Me] && ie.addFallback(ye, "SHADOWESM" + Me), ee["SHADOWCLOSEESM" + Me] && ie.addFallback(ye, "SHADOWCLOSEESM" + Me));
      return be
    }

    function Ae(ee, ie, He, ye, be, Me, Ke) {
      let Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Je = arguments.length > 9 ? arguments[9] : void 0,
        oe = arguments.length > 10 ? arguments[10] : void 0;
      if (Ke._areMiscDirty) {
        Ke.LOGARITHMICDEPTH = He, Ke.POINTSIZE = ye, Ke.FOG = be && function(ee, ie) {
          return ie.fogEnabled && ee.applyFog && 0 !== ie.fogMode
        }(ee, ie), Ke.NONUNIFORMSCALING = ee.nonUniformScaling, Ke.ALPHATEST = Me, Ke.DECAL_AFTER_DETAIL = Ue, Ke.USE_VERTEX_PULLING = Fe, Ke.RIGHT_HANDED = ie.useRightHandedSystem;
        const Re = Fe ? Je?.geometry?.getIndexBuffer() : null,
          ke = !!Je && Je.isUnIndexed;
        Ke.VERTEX_PULLING_USE_INDEX_BUFFER = !!Re && !ke, Ke.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Re || ke) && Re.is32Bits, Ke.VERTEXOUTPUT_INVARIANT = !!oe
      }
    }

    function Ye(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!ee.lightsEnabled || ye) return !0;
      const be = ie.lightSources,
        Me = Math.min(be.length, He);
      for (let Ke = 0; Ke < Me; Ke++)
        if (!be[Ke].areLightTexturesReady()) return !1;
      return !0
    }

    function Ve(ee, ie, He, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!He._areLightsDirty) return He._needNormals;
      const Ue = Me;
      Me = function(ee, ie) {
        const He = ee.Nf().getCaps().maxUniformBuffersPerShaderStage;
        if (null == He) return ie;
        const ye = Math.max(He - We, 1);
        return Math.min(ie, ye)
      }(ee, Me);
      let Fe = 0;
      const Je = {
        needNormals: He._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (ee.lightsEnabled && !Ke) {
        ie.lightSources.length > Me && Me < Ue && function(ee, ie, He, be) {
          let Me = te.get(ee);
          Me || (Me = new Set, te.set(ee, Me)), Me.has(be) || (Me.add(be), ye.e.Warn(`maxSimultaneousLights is ${ie} but this engine supports at most ${He} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${be} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${be+We} uniform buffers, over the device limit of ${ee.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${He}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${He} or less to silence this warning.`))
        }(ee.Nf(), Ue, Me, Math.min(ie.lightSources.length, Ue));
        for (const ye of ie.lightSources)
          if (ce(ee, ie, ye, Fe, He, be, Je), Fe++, Fe === Me) break
      }
      He.SPECULARTERM = Je.specularEnabled, He.SHADOWS = Je.shadowEnabled;
      const oe = Math.max(Me, He.MAXLIGHTCOUNT || 0);
      for (let ye = Fe; ye < oe; ye++) void 0 !== He["LIGHT" + ye] && (He["LIGHT" + ye] = !1, He["HEMILIGHT" + ye] = !1, He["POINTLIGHT" + ye] = !1, He["DIRLIGHT" + ye] = !1, He["SPOTLIGHT" + ye] = !1, He["AREALIGHT" + ye] = !1, He["CLUSTLIGHT" + ye] = !1, He["SHADOW" + ye] = !1, He["SHADOWCSM" + ye] = !1, He["SHADOWCSMDEBUG" + ye] = !1, He["SHADOWCSMNUM_CASCADES" + ye] = !1, He["SHADOWCSMUSESHADOWMAXZ" + ye] = !1, He["SHADOWCSMNOBLEND" + ye] = !1, He["SHADOWCSM_RIGHTHANDED" + ye] = !1, He["SHADOWPCF" + ye] = !1, He["SHADOWPCSS" + ye] = !1, He["SHADOWPOISSON" + ye] = !1, He["SHADOWESM" + ye] = !1, He["SHADOWCLOSEESM" + ye] = !1, He["SHADOWCUBE" + ye] = !1, He["SHADOWLOWQUALITY" + ye] = !1, He["SHADOWMEDIUMQUALITY" + ye] = !1);
      He.LIGHTCOUNT = Fe, He.MAXLIGHTCOUNT = Me;
      const Re = ee.Nf().getCaps();
      return void 0 === He.SHADOWFLOAT && (Je.needRebuild = !0), He.SHADOWFLOAT = Je.shadowEnabled && (Re.textureFloatRender && Re.textureFloatLinearFiltering || Re.textureHalfFloatRender && Re.textureHalfFloatLinearFiltering), He.LIGHTMAPEXCLUDED = Je.lightmapMode, Je.needRebuild && He.rebuild(), Je.needNormals
    }

    function ae(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (ie && Ue.c.ReflectionTextureEnabled) {
        if (!ie.isReadyOrNotBlocking()) return !1;
        He._needNormals = !0, He.REFLECTION = !0, He.GAMMAREFLECTION = ie.gammaSpace, He.RGBDREFLECTION = ie.isRGBD, He.LODINREFLECTIONALPHA = ie.lodLevelInAlpha, He.LINEARSPECULARREFLECTION = ie.linearSpecularLOD, He.USEIRRADIANCEMAP = !1, He.LODBASEDMICROSFURACE = ee.Nf().getCaps().textureLOD;
        const Ke = ee.Nf();
        switch (ye && be > 0 ? (He.NUM_SAMPLES = "" + be, Ke._features.needTypeSuffixInShaderConstants && (He.NUM_SAMPLES = He.NUM_SAMPLES + "u"), He.REALTIME_FILTERING = !0, ee.iblCdfGenerator && (He.IBL_CDF_FILTERING = !0)) : He.REALTIME_FILTERING = !1, He.INVERTCUBICMAP = 6 === ie.coordinatesMode, He.REFLECTIONMAP_3D = ie.isCube, He.REFLECTIONMAP_OPPOSITEZ = He.REFLECTIONMAP_3D && ee.useRightHandedSystem ? !ie.invertZ : ie.invertZ, He.REFLECTIONMAP_CUBIC = !1, He.REFLECTIONMAP_EXPLICIT = !1, He.REFLECTIONMAP_PLANAR = !1, He.REFLECTIONMAP_PROJECTION = !1, He.REFLECTIONMAP_SKYBOX = !1, He.REFLECTIONMAP_SPHERICAL = !1, He.REFLECTIONMAP_EQUIRECTANGULAR = !1, He.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, He.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ie.coordinatesMode) {
          case 0:
            He.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            He.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            He.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            He.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            He.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            He.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            He.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            He.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            He.REFLECTIONMAP_CUBIC = !0, He.USE_LOCAL_REFLECTIONMAP_CUBIC = !!ie.boundingBoxSize
        }
        5 !== ie.coordinatesMode && (ie.irradianceTexture ? (He.USEIRRADIANCEMAP = !0, He.USESPHERICALFROMREFLECTIONMAP = !1, He.USESPHERICALINVERTEX = !1, ie.irradianceTexture._dominantDirection ? He.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : He.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : ie.isCube && (He.USESPHERICALFROMREFLECTIONMAP = !0, He.USEIRRADIANCEMAP = !1, He.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, He.USESPHERICALINVERTEX = Me))
      } else He.REFLECTION = !1, He.REFLECTIONMAP_3D = !1, He.REFLECTIONMAP_SPHERICAL = !1, He.REFLECTIONMAP_PLANAR = !1, He.REFLECTIONMAP_CUBIC = !1, He.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, He.REFLECTIONMAP_PROJECTION = !1, He.REFLECTIONMAP_SKYBOX = !1, He.REFLECTIONMAP_EXPLICIT = !1, He.REFLECTIONMAP_EQUIRECTANGULAR = !1, He.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, He.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, He.INVERTCUBICMAP = !1, He.USESPHERICALFROMREFLECTIONMAP = !1, He.USEIRRADIANCEMAP = !1, He.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, He.USESPHERICALINVERTEX = !1, He.REFLECTIONMAP_OPPOSITEZ = !1, He.LODINREFLECTIONALPHA = !1, He.GAMMAREFLECTION = !1, He.RGBDREFLECTION = !1, He.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function ce(ee, ie, He, ye, be, Ke, Ue) {
      switch (Ue.needNormals = !0, void 0 === be["LIGHT" + ye] && (Ue.needRebuild = !0), be["LIGHT" + ye] = !0, be["SPOTLIGHT" + ye] = !1, be["HEMILIGHT" + ye] = !1, be["POINTLIGHT" + ye] = !1, be["DIRLIGHT" + ye] = !1, be["AREALIGHT" + ye] = !1, be["CLUSTLIGHT" + ye] = !1, He.prepareLightSpecificDefines(be, ye), be["LIGHT_FALLOFF_PHYSICAL" + ye] = !1, be["LIGHT_FALLOFF_GLTF" + ye] = !1, be["LIGHT_FALLOFF_STANDARD" + ye] = !1, He.falloffType) {
        case Me.c.FALLOFF_GLTF:
          be["LIGHT_FALLOFF_GLTF" + ye] = !0;
          break;
        case Me.c.FALLOFF_PHYSICAL:
          be["LIGHT_FALLOFF_PHYSICAL" + ye] = !0;
          break;
        case Me.c.FALLOFF_STANDARD:
          be["LIGHT_FALLOFF_STANDARD" + ye] = !0
      }
      if (Ke && !He.specular.equalsFloats(0, 0, 0) && (Ue.specularEnabled = !0), be["SHADOW" + ye] = !1, be["SHADOWCSM" + ye] = !1, be["SHADOWCSMDEBUG" + ye] = !1, be["SHADOWCSMNUM_CASCADES" + ye] = !1, be["SHADOWCSMUSESHADOWMAXZ" + ye] = !1, be["SHADOWCSMNOBLEND" + ye] = !1, be["SHADOWCSM_RIGHTHANDED" + ye] = !1, be["SHADOWPCF" + ye] = !1, be["SHADOWPCSS" + ye] = !1, be["SHADOWPOISSON" + ye] = !1, be["SHADOWESM" + ye] = !1, be["SHADOWCLOSEESM" + ye] = !1, be["SHADOWCUBE" + ye] = !1, be["SHADOWLOWQUALITY" + ye] = !1, be["SHADOWMEDIUMQUALITY" + ye] = !1, ie && ie.receiveShadows && ee.shadowsEnabled && He.shadowEnabled) {
        const ie = He.getShadowGenerator(ee.activeCamera) ?? He.getShadowGenerator();
        if (ie) {
          const ee = ie.getShadowMap();
          ee && ee.renderList && ee.renderList.length > 0 && (Ue.shadowEnabled = !0, ie.prepareDefines(be, ye))
        }
      }
      He.lightmapMode != Me.c.LIGHTMAP_DEFAULT ? (Ue.lightmapMode = !0, be["LIGHTMAPEXCLUDED" + ye] = !0, be["LIGHTMAPNOSPECULAR" + ye] = He.lightmapMode == Me.c.LIGHTMAP_SHADOWSONLY) : (be["LIGHTMAPEXCLUDED" + ye] = !1, be["LIGHTMAPNOSPECULAR" + ye] = !1)
    }

    function xe(ee, ie, He, ye, be) {
      let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Fe = function(ee, ie) {
          let He = !1;
          if (ee.activeCamera) {
            const ye = ie.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              be = ie.CAMERA_PERSPECTIVE ? 1 : 0,
              Me = 1 === ee.activeCamera.mode ? 1 : 0,
              Ke = 0 === ee.activeCamera.mode ? 1 : 0;
            (ye ^ Me || be ^ Ke) && (ie.CAMERA_ORTHOGRAPHIC = 1 === Me, ie.CAMERA_PERSPECTIVE = 1 === Ke, He = !0)
          }
          return He
        }(ee, ye);
      !1 !== Me && (Fe = (0, Ke.g)(He, ee, ye)), ye.DEPTHPREPASS !== !ie.getColorWrite() && (ye.DEPTHPREPASS = !ye.DEPTHPREPASS, Fe = !0), ye.INSTANCES !== be && (ye.INSTANCES = be, Fe = !0), ye.THIN_INSTANCES !== Ue && (ye.THIN_INSTANCES = Ue, Fe = !0), Fe && ye.markAsUnprocessed()
    }
    const Le = 40,
      Ce = 64,
      ve = new WeakMap,
      ue = new WeakSet;

    function me(ee, ie, He, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Ke = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        Ue = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!ie._areAttributesDirty && ie._needNormals === ie._normals && ie._needUVs === ie._uvs) return !1;
      ie._normals = ie._needNormals, ie._uvs = ie._needUVs, ie.NORMAL = ie._needNormals && ee.isVerticesDataPresent("normal"), ie._needNormals && ee.isVerticesDataPresent("tangent") && (ie.TANGENT = !0);
      for (let ye = 1; ye <= 6; ++ye) ie["UV" + ye] = !!ie._needUVs && ee.isVerticesDataPresent(`uv${1===ye?"":ye}`);
      if (He) {
        const He = ee.useVertexColors && ee.isVerticesDataPresent("color");
        ie.VERTEXCOLOR = He, ie.VERTEXALPHA = ee.hasVertexAlpha && He && Ke
      }
      return ee.isVerticesDataPresent("instanceColor") && (ee.nMe || ee.hasThinInstances) && (ie.INSTANCESCOLOR = !0), be && function(ee, ie) {
        if (ee.useBones && ee.computeBonesUsingShaders && ee.skeleton) {
          ie.NUM_BONE_INFLUENCERS = ee.numBoneInfluencers;
          const He = void 0 !== ie.BONETEXTURE;
          if (ee.skeleton.isUsingTextureForMatrices && He) ie.BONETEXTURE = !0;
          else {
            ie.BonesPerMesh = ee.skeleton.bones.length + 1, ie.BONETEXTURE = !He && void 0;
            const be = ee.Xx(),
              Me = be.prePassRenderer;
            if (Me && Me.enabled) {
              const He = -1 === Me.excludedSkinnedMesh.indexOf(ee);
              ie.BONES_VELOCITY_ENABLED = He
            }
            const Ke = !0 === ie.MULTIVIEW,
              Ue = 2 * ie.BonesPerMesh + (Ke ? 1 : 0);
            if (ve.get(ee.skeleton) !== Ue) {
              ve.set(ee.skeleton, Ue);
              const He = be.Nf().getCaps().maxVertexUniformVectors;
              if (He && !ue.has(ee.skeleton)) {
                const be = 4 * ie.BonesPerMesh,
                  Me = Ke ? Ce : Le,
                  Ue = Math.max(He - Me, 0);
                (be > Ue || Ke && 3 * be > He) && (ue.add(ee.skeleton), ye.e.Warn(`Skeleton "${ee.skeleton.name}": ${ee.skeleton.bones.length} bones stored as vertex uniforms use ${be} of ~${Ue} usable uniform vectors${Ke?" (multiview)":""} on a device reporting ${He}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else ie.NUM_BONE_INFLUENCERS = 0, ie.BonesPerMesh = 0, void 0 !== ie.BONETEXTURE && (ie.BONETEXTURE = !1)
      }(ee, ie), Me && function(ee, ie) {
        const He = ee.morphTargetManager;
        He ? (ie.MORPHTARGETS_UV = He.supportsUVs && ie.UV1, ie.MORPHTARGETS_UV2 = He.supportsUV2s && ie.UV2, ie.MORPHTARGETS_TANGENT = He.supportsTangents && ie.TANGENT, ie.MORPHTARGETS_NORMAL = He.supportsNormals && ie.NORMAL, ie.MORPHTARGETS_POSITION = He.supportsPositions, ie.MORPHTARGETS_COLOR = He.supportsColors, ie.MORPHTARGETTEXTURE_HASUVS = He.hasUVs, ie.MORPHTARGETTEXTURE_HASUV2S = He.hasUV2s, ie.MORPHTARGETTEXTURE_HASTANGENTS = He.hasTangents, ie.MORPHTARGETTEXTURE_HASNORMALS = He.hasNormals, ie.MORPHTARGETTEXTURE_HASPOSITIONS = He.hasPositions, ie.MORPHTARGETTEXTURE_HASCOLORS = He.hasColors, ie.NUM_MORPH_INFLUENCERS = He.numMaxInfluencers || He.numInfluencers, ie.MORPHTARGETS = ie.NUM_MORPH_INFLUENCERS > 0, ie.MORPHTARGETS_TEXTURE = He.isUsingTextureForTargets) : (ie.MORPHTARGETS_UV = !1, ie.MORPHTARGETS_UV2 = !1, ie.MORPHTARGETS_TANGENT = !1, ie.MORPHTARGETS_NORMAL = !1, ie.MORPHTARGETS_POSITION = !1, ie.MORPHTARGETS_COLOR = !1, ie.MORPHTARGETTEXTURE_HASUVS = !1, ie.MORPHTARGETTEXTURE_HASUV2S = !1, ie.MORPHTARGETTEXTURE_HASTANGENTS = !1, ie.MORPHTARGETTEXTURE_HASNORMALS = !1, ie.MORPHTARGETTEXTURE_HASPOSITIONS = !1, ie.MORPHTARGETTEXTURE_HAS_COLORS = !1, ie.MORPHTARGETS = !1, ie.NUM_MORPH_INFLUENCERS = 0)
      }(ee, ie), Ue && function(ee, ie) {
        const He = ee.bakedVertexAnimationManager;
        ie.BAKED_VERTEX_ANIMATION_TEXTURE = !(!He || !He.isEnabled)
      }(ee, ie), !0
    }

    function le(ee, ie) {
      if (ee.activeCamera) {
        const He = ie.MULTIVIEW;
        ie.MULTIVIEW = null !== ee.activeCamera.outputRenderTarget && ee.activeCamera.outputRenderTarget.getViewCount() > 1, ie.MULTIVIEW != He && ie.markAsUnprocessed()
      }
    }

    function Se(ee, ie, He) {
      const ye = ie.ORDER_INDEPENDENT_TRANSPARENCY,
        be = ie.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      ie.ORDER_INDEPENDENT_TRANSPARENCY = ee.useOrderIndependentTransparency && He, ie.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !ee.Nf().getCaps().textureFloatLinearFiltering, ye === ie.ORDER_INDEPENDENT_TRANSPARENCY && be === ie.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ie.markAsUnprocessed()
    }

    function ne(ee, ie, He) {
      const ye = ie.PREPASS;
      if (!ie._arePrePassDirty) return;
      const be = [{
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
      if (ee.prePassRenderer && ee.prePassRenderer.enabled && He) {
        ie.PREPASS = !0, ie.SCENE_MRT_COUNT = ee.prePassRenderer.mrtCount, ie.PREPASS_NORMAL_WORLDSPACE = ee.prePassRenderer.generateNormalsInWorldSpace, ie.PREPASS_COLOR = !0, ie.PREPASS_COLOR_INDEX = 0;
        for (let He = 0; He < be.length; He++) {
          const ye = ee.prePassRenderer.getIndex(be[He].type); - 1 !== ye ? (ie[be[He].define] = !0, ie[be[He].index] = ye) : ie[be[He].define] = !1
        }
      } else {
        ie.PREPASS = !1;
        for (let ee = 0; ee < be.length; ee++) ie[be[ee].define] = !1
      }
      ie.PREPASS != ye && (ie.markAsUnprocessed(), ie.markAsImageProcessingDirty())
    }

    function je(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Je = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      be && be.push("Light" + ee), Me || (ie.push("vLightData" + ee, "vLightDiffuse" + ee, "vLightSpecular" + ee, "vLightDirection" + ee, "vLightWidth" + ee, "vLightHeight" + ee, "vLightFalloff" + ee, "vLightGround" + ee, "vSliceData" + ee, "vSliceRanges" + ee, "lightMatrix" + ee, "shadowsInfo" + ee, "depthValues" + ee), He.push("shadowTexture" + ee), He.push("depthTexture" + ee), ie.push("viewFrustumZ" + ee, "cascadeBlendFactor" + ee, "lightSizeUVCorrection" + ee, "depthCorrection" + ee, "penumbraDarkness" + ee, "frustumLengths" + ee), ye && (He.push("projectionLightTexture" + ee), ie.push("textureProjectionMatrix" + ee)), Ke && He.push("iesLightTexture" + ee), Fe && He.push("rectAreaLightEmissionTexture" + ee), Ue && (He.push("lightDataTexture" + ee), Je || He.push("tileMaskTexture" + ee)))
    }

    function se(ee, ie, He) {
      const ye = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      He && ye.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), ee.push(...ye);
      ie.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function Ie(ee, ie, He) {
      let ye, be, Me = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        Ke = null;
      if (ee.uniformsNames) {
        const Ue = ee;
        ye = Ue.uniformsNames, be = Ue.uniformBuffersNames, ie = Ue.samplers, He = Ue.defines, Me = Ue.maxSimultaneousLights || 0, Ke = Ue.shaderLanguage ?? null
      } else ye = ee, ie || (ie = []);
      for (let Ue = 0; Ue < Me && He["LIGHT" + Ue]; Ue++) je(Ue, ye, ie, He["PROJECTEDLIGHTTEXTURE" + Ue], be, !1, He["IESLIGHTTEXTURE" + Ue], He["CLUSTLIGHT" + Ue], He["RECTAREALIGHTEMISSIONTEXTURE" + Ue], 1 === Ke);
      He.NUM_MORPH_INFLUENCERS && (ye.push("morphTargetInfluences"), ye.push("morphTargetCount")), He.BAKED_VERTEX_ANIMATION_TEXTURE && (ye.push("bakedVertexAnimationSettings"), ye.push("bakedVertexAnimationTextureSizeInverted"), ye.push("bakedVertexAnimationTime"), ie.push("bakedVertexAnimationTexture"))
    }

    function he(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      ee.addUniform("vReflectionInfos", 2), ee.addUniform("reflectionMatrix", 16), ie && ee.addUniform("vReflectionMicrosurfaceInfos", 3), He && (ee.addUniform("vReflectionPosition", 3), ee.addUniform("vReflectionSize", 3)), ye && (ee.addUniform("vReflectionFilteringInfo", 2), ee.addUniform("vReflectionDominantDirection", 3)), Me && ee.addUniform("vReflectionColor", 3), be && (ee.addUniform("vSphericalL00", 3), ee.addUniform("vSphericalL1_1", 3), ee.addUniform("vSphericalL10", 3), ee.addUniform("vSphericalL11", 3), ee.addUniform("vSphericalL2_2", 3), ee.addUniform("vSphericalL2_1", 3), ee.addUniform("vSphericalL20", 3), ee.addUniform("vSphericalL21", 3), ee.addUniform("vSphericalL22", 3), ee.addUniform("vSphericalX", 3), ee.addUniform("vSphericalY", 3), ee.addUniform("vSphericalZ", 3), ee.addUniform("vSphericalXX_ZZ", 3), ee.addUniform("vSphericalYY_ZZ", 3), ee.addUniform("vSphericalZZ", 3), ee.addUniform("vSphericalXY", 3), ee.addUniform("vSphericalYZ", 3), ee.addUniform("vSphericalZX", 3))
    }
  },
  41472: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(37917),
      be = He(41414);
    class Me extends be.e {
      constructor(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(ee, ie, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new ye.b, this._storeEffectOnSubMeshes = He
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(ee, ie) {
        return !!ee && (!this._storeEffectOnSubMeshes || (!ee.pW || 0 === ee.pW.length || this.isReadyForSubMesh(ee, ee.pW[0], ie)))
      }
      _isReadyForSubMesh(ee) {
        const ie = ee.materialDefines;
        return !(this.checkReadyOnEveryCall || !ee.effect || !ie || ie._renderId !== this.Xx().getRenderId())
      }
      bindOnlyWorldMatrix(ee) {
        this._activeEffect.setMatrix("world", ee)
      }
      bindOnlyNormalMatrix(ee) {
        this._activeEffect.setMatrix("normalMatrix", ee)
      }
      bind(ee, ie) {
        ie && this.bindForSubMesh(ee, ie, ie.pW[0])
      }
      _afterBind(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(ee, ie, He), this.Xx()._cachedEffect = ie, He ? He._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return He._drawWrapper._forceRebindOnNextCall || ee.isCachedMaterialInvalid(this, ie, ye)
      }
      dispose(ee, ie, He) {
        this._activeEffect = void 0, super.dispose(ee, ie, He)
      }
    }
  },
  41495: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      h: () => be
    });
    const ye = new WeakMap;

    function be(ee) {
      const ie = ee.getVertexBuffers();
      if (!ie) return null;
      let He = ye.get(ee);
      if (He) {
        let ee = !1;
        for (const ye in ie)
          if (!He.has(ye)) {
            ee = !0;
            break
          } if (!ee) return He
      } else He = new Map, ye.set(ee, He);
      for (const ye in ie) {
        const ee = ie[ye];
        if (ee) {
          const ie = ee.byteOffset,
            be = ee.byteStride,
            Me = ee.type,
            Ke = ee.normalized;
          He.set(ye, {
            offset: ie,
            stride: be,
            type: Me,
            normalized: Ke
          })
        }
      }
      return He
    }

    function Me(ee, ie) {
      ie.forEach(((ie, He) => {
        const ye = `vp_${He}_info`;
        ee.setFloat4(ye, ie.offset, ie.stride, ie.type, ie.normalized ? 1 : 0)
      }))
    }
  },
  41439: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      f: () => Fe
    });
    var ye = He(41113),
      be = He(37917),
      Me = He(41121);
    let Ke = (() => {
      var ee;
      let ie, He, be = [];
      return ee = class {
        static extractMinAndMaxIndexed(ee, ie, He, ye, be, Me) {
          for (let Ke = He; Ke < He + ye; Ke++) {
            const He = 3 * ie[Ke],
              ye = ee[He],
              Ue = ee[He + 1],
              Fe = ee[He + 2];
            be.minimizeInPlaceFromFloats(ye, Ue, Fe), Me.maximizeInPlaceFromFloats(ye, Ue, Fe)
          }
        }
        static extractMinAndMax(ee, ie, He, ye, be, Me) {
          for (let Ke = ie, Ue = ie * ye; Ke < ie + He; Ke++, Ue += ye) {
            const ie = ee[Ue],
              He = ee[Ue + 1],
              ye = ee[Ue + 2];
            be.minimizeInPlaceFromFloats(ie, He, ye), Me.maximizeInPlaceFromFloats(ie, He, ye)
          }
        }
      }, (() => {
        const Ke = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [Me.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], He = [Me.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, ye.i)(ee, null, ie, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: ee => "extractMinAndMaxIndexed" in ee,
            get: ee => ee.extractMinAndMaxIndexed
          },
          metadata: Ke
        }, null, be), (0, ye.i)(ee, null, He, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: ee => "extractMinAndMax" in ee,
            get: ee => ee.extractMinAndMax
          },
          metadata: Ke
        }, null, be), Ke && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ke
        }), (0, ye.l)(ee, be)
      })(), ee
    })();

    function Ue(ee, ie, He, ye) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Ue = new be.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Fe = new be.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Ke.extractMinAndMaxIndexed(ee, ie, He, ye, Ue, Fe), Me && (Ue.x -= Ue.x * Me.x + Me.y, Ue.y -= Ue.y * Me.x + Me.y, Ue.z -= Ue.z * Me.x + Me.y, Fe.x += Fe.x * Me.x + Me.y, Fe.y += Fe.y * Me.x + Me.y, Fe.z += Fe.z * Me.x + Me.y), {
        minimum: Ue,
        maximum: Fe
      }
    }

    function Fe(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        Me = arguments.length > 4 ? arguments[4] : void 0;
      const Ue = new be.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        Fe = new be.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return Me || (Me = 3), Ke.extractMinAndMax(ee, ie, He, Me, Ue, Fe), ye && (Ue.x -= Ue.x * ye.x + ye.y, Ue.y -= Ue.y * ye.x + ye.y, Ue.z -= Ue.z * ye.x + ye.y, Fe.x += Fe.x * ye.x + ye.y, Fe.y += Fe.y * ye.x + ye.y, Fe.z += Fe.z * ye.x + ye.y), {
        minimum: Ue,
        maximum: Fe
      }
    }
  },
  41421: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe
    });
    var ye, be = He(41247),
      Me = He(41424),
      Ke = He(41429),
      Ue = He(41439),
      Fe = He(41446),
      Je = He(40985);
    class oe {
      get materialDefines() {
        const ee = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof ee ? null : ee
      }
      set materialDefines(ee) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = ee
      }
      _getDrawWrapper(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        ee = ee ?? this._engine.currentRenderPassId;
        let He = this._drawWrappers[ee];
        return !He && ie && (this._drawWrappers[ee] = He = new Fe.b(this._mesh.Xx().Nf())), He
      }
      _removeDrawWrapper(ee) {
        let ie = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[ee]?.dispose(ie), this._drawWrappers[ee] = void 0
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
      _setMainDrawWrapperOverride(ee) {
        this._mainDrawWrapperOverride = ee
      }
      setEffect(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const be = this._drawWrapper;
        be.setEffect(ee, ie, ye), void 0 !== He && (be.materialContext = He), ee || (be.defines = null, be.materialContext = void 0)
      }
      resetDrawCache(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== ee) return void this._removeDrawWrapper(ee, !0, ie);
          for (const ee of this._drawWrappers) ee?.dispose(ie)
        }
        this._drawWrappers = []
      }
      static AddToMesh(ee, ie, He, ye, be, Me, Ke) {
        return new oe(ee, ie, He, ye, be, Me, Ke, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(ee, ie, He, ye, be, Me, Ke) {
        let Ue = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Fe = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = ee, this.verticesStart = ie, this.verticesCount = He, this.indexStart = ye, this.indexCount = be, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = Me, this._renderingMesh = Ke || Me, Fe && Me.pW.push(this), this._engine = this._mesh.Xx().Nf(), this.resetDrawCache(), this._trianglePlanes = [], this._id = Me.pW.length - 1, Ue && (this.refreshBoundingInfo(), Me.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      WC() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.WC() : this._boundingInfo
      }
      setBoundingInfo(ee) {
        return this._boundingInfo = ee, this
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
        const ee = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return ee || this._renderingMesh
      }
      iT() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const ie = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!ie) return ee && this._mesh.Xx()._hasDefaultMaterial ? this._mesh.Xx().defaultMaterial : null;
        if (this._isMultiMaterial(ie)) {
          const ee = ie.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== ee && (this._currentMaterial = ee, this.resetDrawCache()), ee
        }
        return ie
      }
      _isMultiMaterial(ee) {
        return void 0 !== ee.getSubMaterial
      }
      refreshBoundingInfo() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (ee || (ee = this._renderingMesh.getVerticesData(be.h.PositionKind)), !ee) return this._boundingInfo = this._mesh.WC(), this;
        const ie = this._renderingMesh.eMe();
        let He;
        if (0 === this.indexStart && this.indexCount === ie.length) {
          const ee = this._renderingMesh.WC();
          He = {
            minimum: ee.minimum.clone(),
            maximum: ee.maximum.clone()
          }
        } else He = (0, Ue.b)(ee, ie, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(He.minimum, He.maximum) : this._boundingInfo = new Ke.c(He.minimum, He.maximum), this
      }
      _checkCollision(ee) {
        return this.WC()._checkCollision(ee)
      }
      updateBoundingInfo(ee) {
        let ie = this.WC();
        return ie || (this.refreshBoundingInfo(), ie = this.WC()), ie && ie.update(ee), this
      }
      isInFrustum(ee) {
        const ie = this.WC();
        return !!ie && ie.isInFrustum(ee, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(ee) {
        const ie = this.WC();
        return !!ie && ie.isCompletelyInFrustum(ee)
      }
      render(ee) {
        return this._renderingMesh.render(this, ee, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(ee, ie) {
        if (!this._linesIndexBuffer) {
          const He = 6 * Math.floor(this.indexCount / 3),
            ye = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(He) : new Uint16Array(He);
          let be = 0;
          if (0 === ee.length)
            for (let ee = this.indexStart; ee < this.indexStart + this.indexCount; ee += 3) ye[be++] = ee, ye[be++] = ee + 1, ye[be++] = ee + 1, ye[be++] = ee + 2, ye[be++] = ee + 2, ye[be++] = ee;
          else
            for (let ie = this.indexStart; ie < this.indexStart + this.indexCount; ie += 3) ye[be++] = ee[ie], ye[be++] = ee[ie + 1], ye[be++] = ee[ie + 1], ye[be++] = ee[ie + 2], ye[be++] = ee[ie + 2], ye[be++] = ee[ie];
          this._linesIndexBuffer = ie.createIndexBuffer(ye), this._linesIndexCount = ye.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(ee) {
        const ie = this.WC();
        return !!ie && ee.intersectsBox(ie.boundingBox)
      }
      intersects(ee, ie, He, ye, be) {
        const Me = this.iT();
        if (!Me) return null;
        let Ke = 3,
          Ue = !1;
        switch (Me.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            Ke = 1, Ue = !0
        }
        return 4 === Me.fillMode ? He.length ? this._intersectLines(ee, ie, He, this._mesh.intersectionThreshold, ye) : this._intersectUnIndexedLines(ee, ie, He, this._mesh.intersectionThreshold, ye) : !He.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(ee, ie, He, ye, be) : this._intersectTriangles(ee, ie, He, Ke, Ue, ye, be)
      }
      _intersectLines(ee, ie, He, ye, be) {
        let Ke = null;
        for (let Ue = this.indexStart; Ue < this.indexStart + this.indexCount; Ue += 2) {
          const Fe = ie[He[Ue]],
            Je = ie[He[Ue + 1]],
            oe = ee.intersectionSegment(Fe, Je, ye);
          if (!(oe < 0) && ((be || !Ke || oe < Ke.distance) && (Ke = new Me.b(null, null, oe), Ke.faceId = Ue / 2, be))) break
        }
        return Ke
      }
      _intersectUnIndexedLines(ee, ie, He, ye, be) {
        let Ke = null;
        for (let Ue = this.verticesStart; Ue < this.verticesStart + this.verticesCount; Ue += 2) {
          const He = ie[Ue],
            Fe = ie[Ue + 1],
            Je = ee.intersectionSegment(He, Fe, ye);
          if (!(Je < 0) && ((be || !Ke || Je < Ke.distance) && (Ke = new Me.b(null, null, Je), Ke.faceId = Ue / 2, be))) break
        }
        return Ke
      }
      _intersectTriangles(ee, ie, He, ye, be, Me, Ke) {
        let Ue = null,
          Fe = -1;
        for (let Je = this.indexStart; Je < this.indexStart + this.indexCount - (3 - ye); Je += ye) {
          Fe++;
          const ye = He[Je],
            oe = He[Je + 1],
            Re = He[Je + 2];
          if (be && 4294967295 === Re) {
            Je += 2;
            continue
          }
          const ke = ie[ye],
            qe = ie[oe],
            fe = ie[Re];
          if (!ke || !qe || !fe) continue;
          if (Ke && !Ke(ke, qe, fe, ee, ye, oe, Re)) continue;
          const Te = ee.intersectsTriangle(ke, qe, fe);
          if (Te) {
            if (Te.distance < 0) continue;
            if ((Me || !Ue || Te.distance < Ue.distance) && (Ue = Te, Ue.faceId = Fe, Me)) break
          }
        }
        return Ue
      }
      _intersectUnIndexedTriangles(ee, ie, He, ye, be) {
        let Me = null;
        for (let Ke = this.verticesStart; Ke < this.verticesStart + this.verticesCount; Ke += 3) {
          const He = ie[Ke],
            Ue = ie[Ke + 1],
            Fe = ie[Ke + 2];
          if (be && !be(He, Ue, Fe, ee, -1, -1, -1)) continue;
          const Je = ee.intersectsTriangle(He, Ue, Fe);
          if (Je) {
            if (Je.distance < 0) continue;
            if ((ye || !Me || Je.distance < Me.distance) && (Me = Je, Me.faceId = Ke / 3, ye)) break
          }
        }
        return Me
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(ee, ie) {
        const He = new oe(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, ee, ie, !1);
        if (!this.IsGlobal) {
          const ee = this.WC();
          if (!ee) return He;
          He._boundingInfo = new Ke.c(ee.minimum, ee.maximum)
        }
        return He
      }
      dispose() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Xx().Nf()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const ie = this._mesh.pW.indexOf(this);
        this._mesh.pW.splice(ie, 1), this.resetDrawCache(void 0, ee)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(ee, ie, He, ye, be) {
        let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = Number.MAX_VALUE,
          Ue = -Number.MAX_VALUE;
        const Fe = (be || ye).eMe();
        for (let Je = ie; Je < ie + He; Je++) {
          const ee = Fe[Je];
          ee < Ke && (Ke = ee), ee > Ue && (Ue = ee)
        }
        return new oe(ee, Ke, Ue - Ke + 1, ie, He, ye, be, Me)
      }
    }(ye = oe.prototype).projectToRef ?? (ye.projectToRef = (0, Je.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);