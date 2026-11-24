export const id = 262;
export const ids = [262];
export const modules = {
  40343: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {
      constructor(SS, HS, gS) {
        this.bu = SS, this.bv = HS, this.distance = gS, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40352: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(37129),
      bS = gS(37117),
      XS = gS(37123);
    class xS {
      constructor(SS, HS, gS) {
        this.vectors = (0, tS.d)(8, bS.n.Zero), this.center = bS.n.Zero(), this.centerWorld = bS.n.Zero(), this.extendSize = bS.n.Zero(), this.extendSizeWorld = bS.n.Zero(), this.directions = (0, tS.d)(3, bS.n.Zero), this.vectorsWorld = (0, tS.d)(8, bS.n.Zero), this.minimumWorld = bS.n.Zero(), this.maximumWorld = bS.n.Zero(), this.minimum = bS.n.Zero(), this.maximum = bS.n.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(SS, HS, gS)
      }
      reConstruct(SS, HS, gS) {
        const tS = SS.x,
          XS = SS.y,
          xS = SS.z,
          NS = HS.x,
          qS = HS.y,
          uS = HS.z,
          IS = this.vectors;
        this.minimum.I5(tS, XS, xS), this.maximum.I5(NS, qS, uS), IS[0].I5(tS, XS, xS), IS[1].I5(NS, qS, uS), IS[2].I5(NS, XS, xS), IS[3].I5(tS, qS, xS), IS[4].I5(tS, XS, uS), IS[5].I5(NS, qS, xS), IS[6].I5(tS, qS, uS), IS[7].I5(NS, XS, uS), HS.addToRef(SS, this.center).scaleInPlace(.5), HS.subtractToRef(SS, this.extendSize).scaleInPlace(.5), this._worldMatrix = gS || bS.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(SS) {
        const HS = xS._TmpVector3,
          gS = this.maximum.subtractToRef(this.minimum, HS[0]),
          tS = gS.length();
        gS.normalizeFromLength(tS);
        const bS = tS * SS,
          XS = gS.scaleInPlace(.5 * bS),
          NS = this.center.subtractToRef(XS, HS[1]),
          qS = this.center.addToRef(XS, HS[2]);
        return this.reConstruct(NS, qS, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(SS) {
        const HS = this.minimumWorld,
          gS = this.maximumWorld,
          tS = this.directions,
          XS = this.vectorsWorld,
          xS = this.vectors;
        if (SS.isIdentity()) {
          HS.dJ(this.minimum), gS.dJ(this.maximum);
          for (let SS = 0; SS < 8; ++SS) XS[SS].dJ(xS[SS]);
          this.extendSizeWorld.dJ(this.extendSize), this.centerWorld.dJ(this.center)
        } else {
          HS.o_(Number.MAX_VALUE), gS.o_(-Number.MAX_VALUE);
          for (let tS = 0; tS < 8; ++tS) {
            const NS = XS[tS];
            bS.n.TransformCoordinatesToRef(xS[tS], SS, NS), HS.minimizeInPlace(NS), gS.maximizeInPlace(NS)
          }
          gS.subtractToRef(HS, this.extendSizeWorld).scaleInPlace(.5), gS.addToRef(HS, this.centerWorld).scaleInPlace(.5)
        }
        bS.n.FromArrayToRef(SS.m, 0, tS[0]), bS.n.FromArrayToRef(SS.m, 4, tS[1]), bS.n.FromArrayToRef(SS.m, 8, tS[2]), this._worldMatrix = SS
      }
      isInFrustum(SS) {
        return xS.IsInFrustum(this.vectorsWorld, SS)
      }
      isCompletelyInFrustum(SS) {
        return xS.IsCompletelyInFrustum(this.vectorsWorld, SS)
      }
      intersectsPoint(SS) {
        const HS = this.minimumWorld,
          gS = this.maximumWorld,
          tS = HS.x,
          bS = HS.y,
          xS = HS.z,
          NS = gS.x,
          qS = gS.y,
          uS = gS.z,
          IS = SS.x,
          fS = SS.y,
          kS = SS.z,
          aS = -XS.d;
        return !(NS - IS < aS || aS > IS - tS) && (!(qS - fS < aS || aS > fS - bS) && !(uS - kS < aS || aS > kS - xS))
      }
      intersectsSphere(SS) {
        return xS.IntersectsSphere(this.minimumWorld, this.maximumWorld, SS.centerWorld, SS.radiusWorld)
      }
      intersectsMinMax(SS, HS) {
        const gS = this.minimumWorld,
          tS = this.maximumWorld,
          bS = gS.x,
          XS = gS.y,
          xS = gS.z,
          NS = tS.x,
          qS = tS.y,
          uS = tS.z,
          IS = SS.x,
          fS = SS.y,
          kS = SS.z,
          aS = HS.x,
          KS = HS.y,
          jS = HS.z;
        return !(NS < IS || bS > aS) && (!(qS < fS || XS > KS) && !(uS < kS || xS > jS))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(SS, HS) {
        return SS.intersectsMinMax(HS.minimumWorld, HS.maximumWorld)
      }
      static IntersectsSphere(SS, HS, gS, tS) {
        const XS = xS._TmpVector3[0];
        bS.n.ClampToRef(gS, SS, HS, XS);
        return bS.n.DistanceSquared(gS, XS) <= tS * tS
      }
      static IsCompletelyInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; ++gS) {
          const tS = HS[gS];
          for (let HS = 0; HS < 8; ++HS)
            if (tS.dotCoordinate(SS[HS]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; ++gS) {
          let tS = !0;
          const bS = HS[gS];
          for (let HS = 0; HS < 8; ++HS)
            if (bS.dotCoordinate(SS[HS]) >= 0) {
              tS = !1;
              break
            } if (tS) return !1
        }
        return !0
      }
    }
    xS._TmpVector3 = (0, tS.d)(3, bS.n.Zero)
  },
  40346: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => fS
    });
    var tS = gS(37129),
      bS = gS(37117),
      XS = gS(40352);
    class xS {
      constructor(SS, HS, gS) {
        this.center = bS.n.Zero(), this.centerWorld = bS.n.Zero(), this.minimum = bS.n.Zero(), this.maximum = bS.n.Zero(), this.reConstruct(SS, HS, gS)
      }
      reConstruct(SS, HS, gS) {
        this.minimum.dJ(SS), this.maximum.dJ(HS);
        const tS = bS.n.Distance(SS, HS);
        HS.addToRef(SS, this.center).scaleInPlace(.5), this.radius = .5 * tS, this._update(gS || bS.e.IdentityReadOnly)
      }
      scale(SS) {
        const HS = xS._TmpVector3,
          gS = this.maximum.subtractToRef(this.minimum, HS[0]),
          tS = gS.length();
        gS.normalizeFromLength(tS);
        const bS = tS * SS,
          XS = gS.scaleInPlace(.5 * bS),
          NS = this.center.subtractToRef(XS, HS[1]),
          qS = this.center.addToRef(XS, HS[2]);
        return this.reConstruct(NS, qS, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(SS) {
        if (SS.isIdentity()) this.centerWorld.dJ(this.center), this.radiusWorld = this.radius;
        else {
          bS.n.TransformCoordinatesToRef(this.center, SS, this.centerWorld);
          const HS = xS._TmpVector3[0];
          bS.n.TransformNormalFromFloatsToRef(1, 1, 1, SS, HS), this.radiusWorld = Math.max(Math.abs(HS.x), Math.abs(HS.y), Math.abs(HS.z)) * this.radius
        }
      }
      isInFrustum(SS) {
        const HS = this.centerWorld,
          gS = this.radiusWorld;
        for (let tS = 0; tS < 6; tS++)
          if (SS[tS].dotCoordinate(HS) <= -gS) return !1;
        return !0
      }
      isCenterInFrustum(SS) {
        const HS = this.centerWorld;
        for (let gS = 0; gS < 6; gS++)
          if (SS[gS].dotCoordinate(HS) < 0) return !1;
        return !0
      }
      intersectsPoint(SS) {
        const HS = bS.n.DistanceSquared(this.centerWorld, SS);
        return !(this.radiusWorld * this.radiusWorld < HS)
      }
      static Intersects(SS, HS) {
        const gS = bS.n.DistanceSquared(SS.centerWorld, HS.centerWorld),
          tS = SS.radiusWorld + HS.radiusWorld;
        return !(tS * tS < gS)
      }
      static CreateFromCenterAndRadius(SS, HS, gS) {
        this._TmpVector3[0].dJ(SS), this._TmpVector3[1].I5(0, 0, HS), this._TmpVector3[2].dJ(SS), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].GtS(this._TmpVector3[1]);
        const tS = new xS(this._TmpVector3[0], this._TmpVector3[2]);
        return tS._worldMatrix = gS || bS.e.Identity(), tS
      }
    }
    xS._TmpVector3 = (0, tS.d)(3, bS.n.Zero);
    const NS = {
        min: 0,
        max: 0
      },
      qS = {
        min: 0,
        max: 0
      },
      uS = (SS, HS, gS) => {
        const tS = bS.n.Dot(HS.centerWorld, SS),
          XS = Math.abs(bS.n.Dot(HS.directions[0], SS)) * HS.extendSize.x + Math.abs(bS.n.Dot(HS.directions[1], SS)) * HS.extendSize.y + Math.abs(bS.n.Dot(HS.directions[2], SS)) * HS.extendSize.z;
        gS.min = tS - XS, gS.max = tS + XS
      },
      IS = (SS, HS, gS) => (uS(SS, HS, NS), uS(SS, gS, qS), !(NS.min > qS.max || qS.min > NS.max));
    class fS {
      constructor(SS, HS, gS) {
        this._isLocked = !1, this.boundingBox = new XS.c(SS, HS, gS), this.QtS = new xS(SS, HS, gS)
      }
      reConstruct(SS, HS, gS) {
        this.boundingBox.reConstruct(SS, HS, gS), this.QtS.reConstruct(SS, HS, gS)
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
      set isLocked(SS) {
        this._isLocked = SS
      }
      update(SS) {
        this._isLocked || (this.boundingBox._update(SS), this.QtS._update(SS))
      }
      centerOn(SS, HS) {
        const gS = fS._TmpVector3[0].dJ(SS).GtS(HS),
          tS = fS._TmpVector3[1].dJ(SS).addInPlace(HS);
        return this.boundingBox.reConstruct(gS, tS, this.boundingBox.getWorldMatrix()), this.QtS.reConstruct(gS, tS, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(SS) {
        const HS = bS.n.Minimize(this.minimum, SS),
          gS = bS.n.Maximize(this.maximum, SS);
        return this.reConstruct(HS, gS, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(SS) {
        const HS = bS.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(HS);
        const gS = bS.l.VK[0];
        return bS.n.TransformCoordinatesToRef(SS.boundingBox.minimumWorld, HS, gS), this.encapsulate(gS), bS.n.TransformCoordinatesToRef(SS.boundingBox.maximumWorld, HS, gS), this.encapsulate(gS), this
      }
      scale(SS) {
        return this.boundingBox.scale(SS), this.QtS.scale(SS), this
      }
      isInFrustum(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === HS || 3 === HS) && this.QtS.isCenterInFrustum(SS)) return !0;
        if (!this.QtS.isInFrustum(SS)) return !1;
        return !(1 !== HS && 3 !== HS) || this.boundingBox.isInFrustum(SS)
      }
      get diagonalLength() {
        const SS = this.boundingBox;
        return SS.maximumWorld.subtractToRef(SS.minimumWorld, fS._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(SS) {
        return this.boundingBox.isCompletelyInFrustum(SS)
      }
      _checkCollision(SS) {
        return SS._canDoCollision(this.QtS.centerWorld, this.QtS.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(SS) {
        return !!this.QtS.centerWorld && (!!this.QtS.intersectsPoint(SS) && !!this.boundingBox.intersectsPoint(SS))
      }
      intersects(SS, HS) {
        if (!xS.Intersects(this.QtS, SS.QtS)) return !1;
        if (!XS.c.Intersects(this.boundingBox, SS.boundingBox)) return !1;
        if (!HS) return !0;
        const gS = this.boundingBox,
          tS = SS.boundingBox;
        return !!IS(gS.directions[0], gS, tS) && (!!IS(gS.directions[1], gS, tS) && (!!IS(gS.directions[2], gS, tS) && (!!IS(tS.directions[0], gS, tS) && (!!IS(tS.directions[1], gS, tS) && (!!IS(tS.directions[2], gS, tS) && (!!IS(bS.n.Cross(gS.directions[0], tS.directions[0]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[0], tS.directions[1]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[0], tS.directions[2]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[1], tS.directions[0]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[1], tS.directions[1]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[1], tS.directions[2]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[2], tS.directions[0]), gS, tS) && (!!IS(bS.n.Cross(gS.directions[2], tS.directions[1]), gS, tS) && !!IS(bS.n.Cross(gS.directions[2], tS.directions[2]), gS, tS))))))))))))))
      }
    }
    fS._TmpVector3 = (0, tS.d)(2, bS.n.Zero)
  },
  40375: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      f: () => qS,
      i: () => NS,
      j: () => xS
    });
    var tS = gS(40192),
      bS = gS(37117);

    function XS(SS) {
      -1 === SS.indexOf("vClipPlane") && SS.push("vClipPlane"), -1 === SS.indexOf("vClipPlane2") && SS.push("vClipPlane2"), -1 === SS.indexOf("vClipPlane3") && SS.push("vClipPlane3"), -1 === SS.indexOf("vClipPlane4") && SS.push("vClipPlane4"), -1 === SS.indexOf("vClipPlane5") && SS.push("vClipPlane5"), -1 === SS.indexOf("vClipPlane6") && SS.push("vClipPlane6")
    }

    function xS(SS, HS, gS) {
      const tS = !!(SS.clipPlane ?? HS.clipPlane),
        bS = !!(SS.clipPlane2 ?? HS.clipPlane2),
        XS = !!(SS.clipPlane3 ?? HS.clipPlane3),
        xS = !!(SS.clipPlane4 ?? HS.clipPlane4),
        NS = !!(SS.clipPlane5 ?? HS.clipPlane5),
        qS = !!(SS.clipPlane6 ?? HS.clipPlane6);
      tS && gS.push("#define CLIPPLANE"), bS && gS.push("#define CLIPPLANE2"), XS && gS.push("#define CLIPPLANE3"), xS && gS.push("#define CLIPPLANE4"), NS && gS.push("#define CLIPPLANE5"), qS && gS.push("#define CLIPPLANE6")
    }

    function NS(SS, HS, gS) {
      let tS = !1;
      const bS = !!(SS.clipPlane ?? HS.clipPlane),
        XS = !!(SS.clipPlane2 ?? HS.clipPlane2),
        xS = !!(SS.clipPlane3 ?? HS.clipPlane3),
        NS = !!(SS.clipPlane4 ?? HS.clipPlane4),
        qS = !!(SS.clipPlane5 ?? HS.clipPlane5),
        uS = !!(SS.clipPlane6 ?? HS.clipPlane6);
      return gS.CLIPPLANE !== bS && (gS.CLIPPLANE = bS, tS = !0), gS.CLIPPLANE2 !== XS && (gS.CLIPPLANE2 = XS, tS = !0), gS.CLIPPLANE3 !== xS && (gS.CLIPPLANE3 = xS, tS = !0), gS.CLIPPLANE4 !== NS && (gS.CLIPPLANE4 = NS, tS = !0), gS.CLIPPLANE5 !== qS && (gS.CLIPPLANE5 = qS, tS = !0), gS.CLIPPLANE6 !== uS && (gS.CLIPPLANE6 = uS, tS = !0), tS
    }

    function qS(SS, HS, gS) {
      let tS = HS.clipPlane ?? gS.clipPlane;
      uS(SS, "vClipPlane", tS), tS = HS.clipPlane2 ?? gS.clipPlane2, uS(SS, "vClipPlane2", tS), tS = HS.clipPlane3 ?? gS.clipPlane3, uS(SS, "vClipPlane3", tS), tS = HS.clipPlane4 ?? gS.clipPlane4, uS(SS, "vClipPlane4", tS), tS = HS.clipPlane5 ?? gS.clipPlane5, uS(SS, "vClipPlane5", tS), tS = HS.clipPlane6 ?? gS.clipPlane6, uS(SS, "vClipPlane6", tS)
    }

    function uS(SS, HS, gS) {
      if (gS) {
        const XS = tS.e.lL()?.floatingOriginOffset || bS.n.ZeroReadOnly;
        SS.setFloat4(HS, gS.normal.x, gS.normal.y, gS.normal.z, gS.d + bS.n.Dot(gS.normal, XS))
      }
    }
  },
  40392: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(SS, HS) {
        this._defines[SS] || (SS < this._currentRank && (this._currentRank = SS), SS > this._maxRank && (this._maxRank = SS), this._defines[SS] = new Array), this._defines[SS].push(HS)
      }
      addCPUSkinningFallback(SS, HS) {
        this._mesh = HS, SS < this._currentRank && (this._currentRank = SS), SS > this._maxRank && (this._maxRank = SS)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(SS, HS) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, SS = SS.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), HS._bonesComputationForcedToCPU = !0;
          const gS = this._mesh.lL();
          for (let SS = 0; SS < gS.meshes.length; SS++) {
            const tS = gS.meshes[SS];
            if (tS.material) {
              if (tS.computeBonesUsingShaders && 0 !== tS.numBoneInfluencers)
                if (tS.material.getEffect() === HS) tS.computeBonesUsingShaders = !1;
                else if (tS.dD)
                for (const SS of tS.dD) {
                  if (SS.effect === HS) {
                    tS.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && tS.computeBonesUsingShaders && tS.numBoneInfluencers > 0 && (tS.computeBonesUsingShaders = !1)
          }
        } else {
          const HS = this._defines[this._currentRank];
          if (HS)
            for (let gS = 0; gS < HS.length; gS++) SS = SS.replace("#define " + HS[gS], "");
          this._currentRank++
        }
        return SS
      }
    }
  },
  40331: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => nS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(40133),
      xS = gS(37144),
      NS = gS(37138),
      qS = gS(40337),
      uS = gS(40169),
      IS = gS(38687),
      fS = gS(37791),
      kS = gS(40364),
      aS = gS(40068);
    let KS = (() => {
      var SS;
      let HS, gS, XS, xS, NS, qS, uS, IS, fS, kS, KS, jS, GS = [];
      return SS = class {
        constructor() {
          this._func = (0, tS.k)(this, GS), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(SS) {
          this._func = SS
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(SS) {
          this._backFunc = SS
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(SS) {
          this._funcRef = SS
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(SS) {
          this._funcMask = SS
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(SS) {
          this._opStencilFail = SS
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(SS) {
          this._opDepthFail = SS
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(SS) {
          this._opStencilDepthPass = SS
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(SS) {
          this._backOpStencilFail = SS
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(SS) {
          this._backOpDepthFail = SS
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(SS) {
          this._backOpStencilDepthPass = SS
        }
        get mask() {
          return this._mask
        }
        set mask(SS) {
          this._mask = SS
        }
        get enabled() {
          return this._enabled
        }
        set enabled(SS) {
          this._enabled = SS
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(SS) {
          aS.b.Clone((() => SS), this)
        }
        serialize() {
          return aS.b.Serialize(this)
        }
        parse(SS, HS, gS) {
          aS.b.Parse((() => this), SS, HS, gS)
        }
      }, (() => {
        const aS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], xS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], (0, tS.j)(SS, null, HS, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: SS => "func" in SS,
            get: SS => SS.func
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, gS, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: SS => "backFunc" in SS,
            get: SS => SS.backFunc
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, XS, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: SS => "funcRef" in SS,
            get: SS => SS.funcRef
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, xS, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: SS => "funcMask" in SS,
            get: SS => SS.funcMask
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, NS, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: SS => "opStencilFail" in SS,
            get: SS => SS.opStencilFail
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, qS, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: SS => "opDepthFail" in SS,
            get: SS => SS.opDepthFail
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, uS, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: SS => "opStencilDepthPass" in SS,
            get: SS => SS.opStencilDepthPass
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, IS, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: SS => "backOpStencilFail" in SS,
            get: SS => SS.backOpStencilFail
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, fS, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: SS => "backOpDepthFail" in SS,
            get: SS => SS.backOpDepthFail
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, kS, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: SS => "backOpStencilDepthPass" in SS,
            get: SS => SS.backOpStencilDepthPass
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, KS, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: SS => "mask" in SS,
            get: SS => SS.mask
          },
          metadata: aS
        }, null, GS), (0, tS.j)(SS, null, jS, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "enabled" in SS,
            get: SS => SS.enabled
          },
          metadata: aS
        }, null, GS), aS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aS
        })
      })(), SS
    })();
    var jS = gS(40367),
      GS = gS(39950),
      CS = gS(39926);
    let nS = (() => {
      var SS;
      let HS, gS, CS, nS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS, YS, AS, yS, VS, iS, WS, zS, US, pS, sS, BS, MS, FS = [],
        RS = [],
        TS = [],
        oS = [],
        lS = [],
        mS = [],
        eS = [],
        rS = [],
        SH = [],
        HH = [],
        gH = [],
        tH = [],
        bH = [],
        XH = [],
        xH = [],
        NH = [],
        qH = [],
        uH = [],
        IH = [],
        fH = [],
        kH = [],
        aH = [],
        KH = [],
        jH = [],
        GH = [],
        CH = [],
        nH = [],
        PH = [],
        QH = [],
        DH = [],
        wH = [],
        hH = [],
        ZH = [],
        JH = [],
        OH = [],
        dH = [],
        cH = [],
        vH = [],
        EH = [],
        LH = [],
        YH = [],
        AH = [],
        yH = [],
        VH = [],
        iH = [],
        WH = [],
        zH = [],
        UH = [],
        pH = [],
        sH = [],
        BH = [];
      return SS = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(HS) {
          this._useVertexPulling !== HS && (this._useVertexPulling = HS, this.OHS(SS.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(SS) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(HS) {
          if (this._alpha === HS) return;
          const gS = this._alpha;
          this._alpha = HS, 1 !== gS && 1 !== HS || this.OHS(SS.MiscDirtyFlag + SS.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(HS) {
          this._backFaceCulling !== HS && (this._backFaceCulling = HS, this.OHS(SS.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(HS) {
          const gS = Math.max(0, Math.min(0 | HS, 4));
          this._textureRepetitionMode !== gS && (this._textureRepetitionMode = gS, this.OHS(SS.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(HS) {
          this._cullBackFaces !== HS && (this._cullBackFaces = HS, this.OHS(SS.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(SS) {
          this._blockDirtyMechanism !== SS && (this._blockDirtyMechanism = SS, SS || this.markDirty())
        }
        atomicMaterialsUpdate(SS) {
          this.blockDirtyMechanism = !0;
          try {
            SS(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(SS) {
          this._onDisposeObserver && this.bY.remove(this._onDisposeObserver), this._onDisposeObserver = this.bY.add(SS)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new xS.e), this._onBindObservable
        }
        set onBind(SS) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(SS)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new xS.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new xS.e), this._onEffectCreatedObservable
        }
        set alphaMode(SS) {
          this._alphaMode[0] = SS
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[gS] !== HS && (this._alphaMode[gS] = HS, this.OHS(SS.TextureDirtyFlag))
        }
        set needDepthPrePass(SS) {
          this._needDepthPrePass !== SS && (this._needDepthPrePass = SS, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(HS) {
          this._fogEnabled !== HS && (this._fogEnabled = HS, this.OHS(SS.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case SS.WireFrameFillMode:
            case SS.LineListDrawMode:
            case SS.LineLoopDrawMode:
            case SS.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(HS) {
          this.fillMode = HS ? SS.WireFrameFillMode : SS.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case SS.PointFillMode:
            case SS.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(HS) {
          this.fillMode = HS ? SS.PointFillMode : SS.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(HS) {
          this._fillMode !== HS && (this._fillMode = HS, this.OHS(SS.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(SS) {
          const HS = this.lL().AK().getCaps().fragmentDepthSupported;
          SS && !HS && IS.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = SS && HS, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(SS) {
          this._isVertexOutputInvariant !== SS && (this._isVertexOutputInvariant = SS, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(SS) {
          this._drawWrapper = SS
        }
        constructor(HS, gS, bS) {
          let qS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, tS.k)(this, FS), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, tS.k)(this, RS, void 0), this.uniqueId = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, void 0)), this._loadedUniqueId = (0, tS.k)(this, lS), this.name = (0, tS.k)(this, mS, void 0), this.metadata = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, null)), this._internalMetadata = (0, tS.k)(this, SH), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, tS.k)(this, HH, !1), this.checkReadyOnlyOnce = ((0, tS.k)(this, gH), (0, tS.k)(this, tH, !1)), this.state = ((0, tS.k)(this, bH), (0, tS.k)(this, XH, "")), this._alpha = ((0, tS.k)(this, xH), (0, tS.k)(this, NH, 1)), this.inspectableCustomProperties = (0, tS.k)(this, qH), this._backFaceCulling = (0, tS.k)(this, uH, !0), this._textureRepetitionMode = ((0, tS.k)(this, IH), (0, tS.k)(this, fH, 0)), this.textureRepetitionHexTilingParams = ((0, tS.k)(this, kH), (0, tS.k)(this, aH, [1, .6, 7, .5])), this._cullBackFaces = ((0, tS.k)(this, KH), (0, tS.k)(this, jH, !0)), this._blockDirtyMechanism = ((0, tS.k)(this, GH), !1), this.sideOrientation = (0, tS.k)(this, CH, null), this.onCompiled = ((0, tS.k)(this, nH), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.bY = new xS.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, tS.k)(this, PH, [2]), this._needDepthPrePass = ((0, tS.k)(this, QH), (0, tS.k)(this, DH, !1)), this.disableDepthWrite = ((0, tS.k)(this, wH), (0, tS.k)(this, hH, !1)), this.disableColorWrite = ((0, tS.k)(this, ZH), (0, tS.k)(this, JH, !1)), this.forceDepthWrite = ((0, tS.k)(this, OH), (0, tS.k)(this, dH, !1)), this.depthFunction = ((0, tS.k)(this, cH), (0, tS.k)(this, vH, 0)), this.separateCullingPass = ((0, tS.k)(this, EH), (0, tS.k)(this, LH, !1)), this._fogEnabled = ((0, tS.k)(this, YH), (0, tS.k)(this, AH, !0)), this.pointSize = ((0, tS.k)(this, yH), (0, tS.k)(this, VH, 1)), this.zOffset = ((0, tS.k)(this, iH), (0, tS.k)(this, WH, 0)), this.zOffsetUnits = ((0, tS.k)(this, zH), (0, tS.k)(this, UH, 0)), this.clipPlane = (0, tS.k)(this, pH), this.stencil = new KS, this._isVertexOutputInvariant = (0, tS.k)(this, sH, SS.ForceVertexOutputInvariant), this._materialContext = (0, tS.k)(this, BH), this._useUBO = !1, this._fillMode = SS.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = HS;
          const IS = gS || NS.d.LastCreatedScene;
          IS && (this._scene = IS, this._dirtyCallbacks = {}, this._forceGLSL = qS, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = HS || XS.k.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.AK().createMaterialContext(), this._drawWrapper = new kS.d(this._scene.AK(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new uS.c(this._scene.AK(), void 0, void 0, HS), this._useUBO = this.lL().AK().supportsUniformBuffers, this._createUniformBuffer(), bS || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), SS.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const SS = this.lL().AK();
          this._uniformBuffer?.dispose(), SS.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new uS.c(SS, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new uS.c(this._scene.AK(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(SS) {
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
        isReady(SS, HS) {
          return !0
        }
        isReadyForSubMesh(SS, HS, gS) {
          const tS = HS.materialDefines;
          return !!tS && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = tS, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        lL() {
          return this._scene
        }
        _getEffectiveOrientation(SS) {
          return null !== this.sideOrientation ? this.sideOrientation : SS.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(SS) {
          this._transparencyMode = SS
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === SS.MATERIAL_ALPHABLEND || this._transparencyMode === SS.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === SS.MATERIAL_ALPHATEST || this._transparencyMode === SS.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === SS.MATERIAL_OPAQUE || this._transparencyMode === SS.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(SS) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : SS.visibility < 1 || !this._disableAlphaBlending && (SS.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(SS) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(SS) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const gS = this.lL().meshes;
          for (const SS of gS)
            if (SS.dD)
              for (const gS of SS.dD)
                if (gS.zK() === this)
                  for (const SS of gS._drawWrappers) SS && this._materialContext === SS.materialContext && (SS._wasPreviouslyReady = !1, SS._wasPreviouslyUsingInstances = null, SS._forceRebindOnNextCall = HS);
          HS && this.OHS(SS.AllDirtyFlag)
        }
        _preBind(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const tS = this._scene.AK(),
            bS = (null == gS ? this.sideOrientation : gS) === SS.ClockWiseSideOrientation,
            XS = HS || this._getDrawWrapper();
          return (0, GS.b)(XS) && XS.materialContext && (XS.materialContext.useVertexPulling = this.useVertexPulling), tS.enableEffect(XS), tS.setState(this.backFaceCulling, this.zOffset, !1, bS, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), bS
        }
        bind(SS, HS) {}
        buildUniformLayout() {
          const SS = this._uniformBuffer;
          this._eventInfo.ubo = SS, this._callbackPluginEventGeneric(8, this._eventInfo), SS.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(SS, HS, gS) {
          const tS = gS._drawWrapper;
          this._eventInfo.subMesh = gS, this._callbackPluginEventBindForSubMesh(this._eventInfo), tS._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(SS) {}
        bindView(SS) {
          this._useUBO ? this._needToBindSceneUbo = !0 : SS.setMatrix("view", this.lL().getViewMatrix())
        }
        bindViewProjection(SS) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (SS.setMatrix("viewProjection", this.lL().getTransformMatrix()), SS.setMatrix("projection", this.lL().getProjectionMatrix()), SS.setMatrix("inverseProjection", this.lL().getInverseProjectionMatrix()))
        }
        bindEyePosition(SS, HS) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(SS, HS)
        }
        _afterBind(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && HS && (this._needToBindSceneUbo = !1, (0, jS.v)(HS, this.lL().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = SS ? SS.visibility : 1, this._onBindObservable && SS && this._onBindObservable.notifyObservers(SS), this.disableDepthWrite) {
            const SS = this._scene.AK();
            this._cachedDepthWriteState = SS.getDepthWrite(), SS.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const SS = this._scene.AK();
            this._cachedColorWriteState = SS.getColorWrite(), SS.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const SS = this._scene.AK();
            this._cachedDepthFunctionState = SS.getDepthFunction() || 0, SS.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.AK().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.AK().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.AK().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(SS) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = SS, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(SS) {
          return null
        }
        _clonePlugins(HS, gS) {
          const tS = {};
          if (this._serializePlugins(tS), SS._ParsePlugins(tS, HS, this._scene, gS), this.pluginManager)
            for (const SS of this.pluginManager._plugins) {
              const gS = HS.pluginManager.getPlugin(SS.name);
              gS && SS.copyTo(gS)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const SS = [];
            for (const HS in this.meshMap) {
              const gS = this.meshMap[HS];
              gS && SS.push(gS)
            }
            return SS
          }
          return this._scene.meshes.filter((SS => SS.material === this))
        }
        forceCompilation(SS, HS, gS, tS) {
          const bS = {
              clipPlane: !1,
              useInstances: !1,
              ...gS
            },
            XS = this.lL(),
            xS = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const NS = () => {
            if (!this._scene || !this._scene.AK()) return;
            const gS = XS.clipPlane;
            if (bS.clipPlane && (XS.clipPlane = new fS.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let gS = !0,
                XS = null;
              if (SS.dD) {
                const HS = new qS.e(0, 0, 0, 0, 0, SS, void 0, !1, !1);
                HS.materialDefines && (HS.materialDefines._renderId = -1), this.isReadyForSubMesh(SS, HS, bS.useInstances) || (HS.effect && HS.effect.getCompilationError() && HS.effect.allFallbacksProcessed() ? XS = HS.effect.getCompilationError() : (gS = !1, setTimeout(NS, 16)))
              }
              gS && (this.allowShaderHotSwapping = xS, XS && tS && tS(XS), HS && HS(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = xS, HS && HS(this)) : setTimeout(NS, 16);
            bS.clipPlane && (XS.clipPlane = gS)
          };
          NS()
        }
        async forceCompilationAsync(SS, HS) {
          return await new Promise(((gS, tS) => {
            this.forceCompilation(SS, (() => {
              gS()
            }), HS, (SS => {
              tS(SS)
            }))
          }))
        }
        OHS(HS) {
          this.lL().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (SS._DirtyCallbackArray.length = 0, HS & SS.ImageProcessingDirtyFlag && SS._DirtyCallbackArray.push(SS._ImageProcessingDirtyCallBack), HS & SS.TextureDirtyFlag && SS._DirtyCallbackArray.push(SS._TextureDirtyCallBack), HS & SS.LightDirtyFlag && SS._DirtyCallbackArray.push(SS._LightsDirtyCallBack), HS & SS.FresnelDirtyFlag && SS._DirtyCallbackArray.push(SS._FresnelDirtyCallBack), HS & SS.AttributesDirtyFlag && SS._DirtyCallbackArray.push(SS._AttributeDirtyCallBack), HS & SS.MiscDirtyFlag && SS._DirtyCallbackArray.push(SS._MiscDirtyCallBack), HS & SS.PrePassDirtyFlag && SS._DirtyCallbackArray.push(SS._PrePassDirtyCallBack), SS._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(SS._RunDirtyCallBacks), this.lL().resetCachedMaterial())
        }
        resetDrawCache() {
          const SS = this.lL().meshes;
          for (const HS of SS)
            if (HS.dD)
              for (const SS of HS.dD) SS.zK() === this && SS.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(SS) {
          const HS = this.lL();
          if (HS.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const gS = HS.meshes;
          for (const tS of gS)
            if (tS.dD)
              for (const gS of tS.dD) {
                if ((gS.zK() || (HS._hasDefaultMaterial ? HS.defaultMaterial : null)) === this)
                  for (const HS of gS._drawWrappers) HS && HS.defines && HS.defines.markAllAsDirty && this._materialContext === HS.materialContext && SS(HS.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.lL().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const SS = this.lL().enablePrePassRenderer();
          SS && SS.OHS()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(SS._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(SS._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(SS._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(SS._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(SS._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(SS._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(SS._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(SS._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(SS._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(SS._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const SS = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.bY.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(SS)
            }))
          }
        }
        setPrePassRenderer(SS) {
          return !1
        }
        dispose(SS, HS, gS) {
          const tS = this.lL();
          if (tS.stopAnimation(this), tS.freeProcessedMaterials(), tS.removeMaterial(this), this._eventInfo.forceDisposeTextures = HS, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const SS = this._parentContainer.materials.indexOf(this);
            SS > -1 && this._parentContainer.materials.splice(SS, 1), this._parentContainer = null
          }
          if (!0 !== gS)
            if (this.meshMap)
              for (const bS in this.meshMap) {
                const SS = this.meshMap[bS];
                this._disposeMeshResources(SS)
              } else {
                const SS = tS.meshes;
                for (const HS of SS) this._disposeMeshResources(HS)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.bY.notifyObservers(this), this.bY.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(SS) {
          if (!SS) return;
          const HS = SS.geometry,
            gS = SS._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (SS.dD && gS)
              for (const tS of SS.dD) {
                const SS = tS._drawWrappers;
                for (let bS = 0; bS < SS.length; bS++) {
                  const XS = SS[bS]?.effect;
                  if (!XS) continue;
                  gS[bS] === this && (HS?._releaseVertexArrayObject(XS), tS._removeDrawWrapper(bS, !0, !0))
                }
              }
          } else HS?._releaseVertexArrayObject(this._drawWrapper.effect);
          SS.material !== this || SS.MtS || (SS.material = null)
        }
        serialize() {
          const SS = aS.b.Serialize(this);
          return SS.stencil = this.stencil.serialize(), SS.uniqueId = this.uniqueId, this._serializePlugins(SS), SS
        }
        _serializePlugins(SS) {
          if (SS.plugins = {}, this.pluginManager)
            for (const HS of this.pluginManager._plugins) HS.doNotSerialize || (SS.plugins[HS.getClassName()] = HS.serialize())
        }
        static ParseAlphaMode(SS, HS) {
          void 0 !== SS._alphaMode ? HS._alphaMode = Array.isArray(SS._alphaMode) ? [...SS._alphaMode] : [SS._alphaMode] : void 0 !== SS.alphaMode ? HS._alphaMode = Array.isArray(SS.alphaMode) ? [...SS.alphaMode] : [SS.alphaMode] : HS._alphaMode = [2]
        }
        static Parse(HS, gS, tS) {
          if (HS.customType) {
            if ("BABYLON.PBRMaterial" === HS.customType && HS.overloadedAlbedo && (HS.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return IS.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else HS.customType = "BABYLON.StandardMaterial";
          const bS = XS.k.Instantiate(HS.customType).Parse(HS, gS, tS);
          return bS._loadedUniqueId = HS.uniqueId, SS.ParseAlphaMode(HS, bS), bS
        }
        static _ParsePlugins(SS, HS, gS, tS) {
          if (SS.plugins)
            for (const bS in SS.plugins) {
              const xS = SS.plugins[bS];
              let NS = HS.pluginManager?.getPlugin(xS.name);
              if (!NS) {
                const SS = XS.k.Instantiate("BABYLON." + bS);
                SS && (NS = new SS(HS))
              }
              NS?.parse(xS, gS, tS)
            }
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], CS = [(0, bS.M)()], nS = [(0, bS.M)()], PS = [(0, bS.M)()], QS = [(0, bS.M)()], DS = [(0, bS.M)()], wS = [(0, bS.M)("alpha")], hS = [(0, bS.M)("backFaceCulling")], ZS = [(0, bS.M)("textureRepetitionMode")], JS = [(0, bS.M)("textureRepetitionHexTilingParams")], OS = [(0, bS.M)("cullBackFaces")], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], ES = [(0, bS.M)()], LS = [(0, bS.M)()], YS = [(0, bS.M)()], AS = [(0, bS.M)()], yS = [(0, bS.M)()], VS = [(0, bS.M)("fogEnabled")], iS = [(0, bS.M)()], WS = [(0, bS.M)()], zS = [(0, bS.M)()], US = [(0, bS.M)()], pS = [(0, bS.M)()], sS = [(0, bS.M)()], BS = [(0, bS.M)()], MS = [(0, bS.M)()], (0, tS.j)(SS, null, US, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: SS => "pointsCloud" in SS,
            get: SS => SS.pointsCloud
          },
          metadata: XS
        }, null, FS), (0, tS.j)(SS, null, pS, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "fillMode" in SS,
            get: SS => SS.fillMode
          },
          metadata: XS
        }, null, FS), (0, tS.j)(SS, null, sS, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: SS => "useLogarithmicDepth" in SS,
            get: SS => SS.useLogarithmicDepth
          },
          metadata: XS
        }, null, FS), (0, tS.j)(SS, null, MS, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "transparencyMode" in SS,
            get: SS => SS.transparencyMode
          },
          metadata: XS
        }, null, FS), (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: SS => "id" in SS,
            get: SS => SS.id,
            set: (SS, HS) => {
              SS.id = HS
            }
          },
          metadata: XS
        }, RS, TS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: SS => "uniqueId" in SS,
            get: SS => SS.uniqueId,
            set: (SS, HS) => {
              SS.uniqueId = HS
            }
          },
          metadata: XS
        }, oS, lS), (0, tS.j)(null, null, CS, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: SS => "name" in SS,
            get: SS => SS.name,
            set: (SS, HS) => {
              SS.name = HS
            }
          },
          metadata: XS
        }, mS, eS), (0, tS.j)(null, null, nS, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: SS => "metadata" in SS,
            get: SS => SS.metadata,
            set: (SS, HS) => {
              SS.metadata = HS
            }
          },
          metadata: XS
        }, rS, SH), (0, tS.j)(null, null, PS, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: SS => "checkReadyOnEveryCall" in SS,
            get: SS => SS.checkReadyOnEveryCall,
            set: (SS, HS) => {
              SS.checkReadyOnEveryCall = HS
            }
          },
          metadata: XS
        }, HH, gH), (0, tS.j)(null, null, QS, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: SS => "checkReadyOnlyOnce" in SS,
            get: SS => SS.checkReadyOnlyOnce,
            set: (SS, HS) => {
              SS.checkReadyOnlyOnce = HS
            }
          },
          metadata: XS
        }, tH, bH), (0, tS.j)(null, null, DS, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: SS => "state" in SS,
            get: SS => SS.state,
            set: (SS, HS) => {
              SS.state = HS
            }
          },
          metadata: XS
        }, XH, xH), (0, tS.j)(null, null, wS, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: SS => "_alpha" in SS,
            get: SS => SS._alpha,
            set: (SS, HS) => {
              SS._alpha = HS
            }
          },
          metadata: XS
        }, NH, qH), (0, tS.j)(null, null, hS, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: SS => "_backFaceCulling" in SS,
            get: SS => SS._backFaceCulling,
            set: (SS, HS) => {
              SS._backFaceCulling = HS
            }
          },
          metadata: XS
        }, uH, IH), (0, tS.j)(null, null, ZS, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "_textureRepetitionMode" in SS,
            get: SS => SS._textureRepetitionMode,
            set: (SS, HS) => {
              SS._textureRepetitionMode = HS
            }
          },
          metadata: XS
        }, fH, kH), (0, tS.j)(null, null, JS, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: SS => "textureRepetitionHexTilingParams" in SS,
            get: SS => SS.textureRepetitionHexTilingParams,
            set: (SS, HS) => {
              SS.textureRepetitionHexTilingParams = HS
            }
          },
          metadata: XS
        }, aH, KH), (0, tS.j)(null, null, OS, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: SS => "_cullBackFaces" in SS,
            get: SS => SS._cullBackFaces,
            set: (SS, HS) => {
              SS._cullBackFaces = HS
            }
          },
          metadata: XS
        }, jH, GH), (0, tS.j)(null, null, dS, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: SS => "sideOrientation" in SS,
            get: SS => SS.sideOrientation,
            set: (SS, HS) => {
              SS.sideOrientation = HS
            }
          },
          metadata: XS
        }, CH, nH), (0, tS.j)(null, null, cS, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: SS => "_alphaMode" in SS,
            get: SS => SS._alphaMode,
            set: (SS, HS) => {
              SS._alphaMode = HS
            }
          },
          metadata: XS
        }, PH, QH), (0, tS.j)(null, null, vS, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: SS => "_needDepthPrePass" in SS,
            get: SS => SS._needDepthPrePass,
            set: (SS, HS) => {
              SS._needDepthPrePass = HS
            }
          },
          metadata: XS
        }, DH, wH), (0, tS.j)(null, null, ES, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: SS => "disableDepthWrite" in SS,
            get: SS => SS.disableDepthWrite,
            set: (SS, HS) => {
              SS.disableDepthWrite = HS
            }
          },
          metadata: XS
        }, hH, ZH), (0, tS.j)(null, null, LS, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: SS => "disableColorWrite" in SS,
            get: SS => SS.disableColorWrite,
            set: (SS, HS) => {
              SS.disableColorWrite = HS
            }
          },
          metadata: XS
        }, JH, OH), (0, tS.j)(null, null, YS, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: SS => "forceDepthWrite" in SS,
            get: SS => SS.forceDepthWrite,
            set: (SS, HS) => {
              SS.forceDepthWrite = HS
            }
          },
          metadata: XS
        }, dH, cH), (0, tS.j)(null, null, AS, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: SS => "depthFunction" in SS,
            get: SS => SS.depthFunction,
            set: (SS, HS) => {
              SS.depthFunction = HS
            }
          },
          metadata: XS
        }, vH, EH), (0, tS.j)(null, null, yS, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: SS => "separateCullingPass" in SS,
            get: SS => SS.separateCullingPass,
            set: (SS, HS) => {
              SS.separateCullingPass = HS
            }
          },
          metadata: XS
        }, LH, YH), (0, tS.j)(null, null, VS, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "_fogEnabled" in SS,
            get: SS => SS._fogEnabled,
            set: (SS, HS) => {
              SS._fogEnabled = HS
            }
          },
          metadata: XS
        }, AH, yH), (0, tS.j)(null, null, iS, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: SS => "pointSize" in SS,
            get: SS => SS.pointSize,
            set: (SS, HS) => {
              SS.pointSize = HS
            }
          },
          metadata: XS
        }, VH, iH), (0, tS.j)(null, null, WS, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: SS => "zOffset" in SS,
            get: SS => SS.zOffset,
            set: (SS, HS) => {
              SS.zOffset = HS
            }
          },
          metadata: XS
        }, WH, zH), (0, tS.j)(null, null, zS, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: SS => "zOffsetUnits" in SS,
            get: SS => SS.zOffsetUnits,
            set: (SS, HS) => {
              SS.zOffsetUnits = HS
            }
          },
          metadata: XS
        }, UH, pH), (0, tS.j)(null, null, BS, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: SS => "_isVertexOutputInvariant" in SS,
            get: SS => SS._isVertexOutputInvariant,
            set: (SS, HS) => {
              SS._isVertexOutputInvariant = HS
            }
          },
          metadata: XS
        }, sH, BH), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS.TriangleFillMode = 0, SS.WireFrameFillMode = 1, SS.PointFillMode = 2, SS.PointListDrawMode = 3, SS.LineListDrawMode = 4, SS.LineLoopDrawMode = 5, SS.LineStripDrawMode = 6, SS.TriangleStripDrawMode = 7, SS.TriangleFanDrawMode = 8, SS.ClockWiseSideOrientation = 0, SS.CounterClockWiseSideOrientation = 1, SS.ImageProcessingDirtyFlag = 64, SS.TextureDirtyFlag = 1, SS.LightDirtyFlag = 2, SS.FresnelDirtyFlag = 4, SS.AttributesDirtyFlag = 8, SS.MiscDirtyFlag = 16, SS.PrePassDirtyFlag = 32, SS.AllDirtyFlag = 127, SS.MATERIAL_OPAQUE = 0, SS.MATERIAL_ALPHATEST = 1, SS.MATERIAL_ALPHABLEND = 2, SS.MATERIAL_ALPHATESTANDBLEND = 3, SS.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, SS.MATERIAL_NORMALBLENDMETHOD_RNM = 1, SS.LIGHTFALLOFF_PHYSICAL = 0, SS.LIGHTFALLOFF_GLTF = 1, SS.LIGHTFALLOFF_STANDARD = 2, SS.OnEventObservable = new xS.e, SS.ForceVertexOutputInvariant = !1, SS._AllDirtyCallBack = SS => SS.markAllAsDirty(), SS._ImageProcessingDirtyCallBack = SS => SS.markAsImageProcessingDirty(), SS._TextureDirtyCallBack = SS => SS.markAsTexturesDirty(), SS._FresnelDirtyCallBack = SS => SS.markAsFresnelDirty(), SS._MiscDirtyCallBack = SS => SS.markAsMiscDirty(), SS._PrePassDirtyCallBack = SS => SS.markAsPrePassDirty(), SS._LightsDirtyCallBack = SS => SS.markAsLightDirty(), SS._AttributeDirtyCallBack = SS => SS.markAsAttributesDirty(), SS._FresnelAndMiscDirtyCallBack = HS => {
        SS._FresnelDirtyCallBack(HS), SS._MiscDirtyCallBack(HS)
      }, SS._TextureAndMiscDirtyCallBack = HS => {
        SS._TextureDirtyCallBack(HS), SS._MiscDirtyCallBack(HS)
      }, SS._DirtyCallbackArray = [], SS._RunDirtyCallBacks = HS => {
        for (const gS of SS._DirtyCallbackArray) gS(HS)
      }, SS
    })();
    Object.getOwnPropertyDescriptor(nS.prototype, "pluginManager") || Object.defineProperty(nS.prototype, "pluginManager", (0, CS.f)("Material", "pluginManager"))
  },
  40378: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(39939);
    class bS {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(SS) {
        this._DiffuseTextureEnabled !== SS && (this._DiffuseTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(SS) {
        this._BaseWeightTextureEnabled !== SS && (this._BaseWeightTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(SS) {
        this._BaseDiffuseRoughnessTextureEnabled !== SS && (this._BaseDiffuseRoughnessTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(SS) {
        this._DetailTextureEnabled !== SS && (this._DetailTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(SS) {
        this._DecalMapEnabled !== SS && (this._DecalMapEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(SS) {
        this._AmbientTextureEnabled !== SS && (this._AmbientTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(SS) {
        this._OpacityTextureEnabled !== SS && (this._OpacityTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(SS) {
        this._ReflectionTextureEnabled !== SS && (this._ReflectionTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(SS) {
        this._EmissiveTextureEnabled !== SS && (this._EmissiveTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(SS) {
        this._SpecularTextureEnabled !== SS && (this._SpecularTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(SS) {
        this._BumpTextureEnabled !== SS && (this._BumpTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(SS) {
        this._LightmapTextureEnabled !== SS && (this._LightmapTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(SS) {
        this._RefractionTextureEnabled !== SS && (this._RefractionTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(SS) {
        this._ColorGradingTextureEnabled !== SS && (this._ColorGradingTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(SS) {
        this._FresnelEnabled !== SS && (this._FresnelEnabled = SS, tS.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(SS) {
        this._ClearCoatTextureEnabled !== SS && (this._ClearCoatTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(SS) {
        this._ClearCoatBumpTextureEnabled !== SS && (this._ClearCoatBumpTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(SS) {
        this._ClearCoatTintTextureEnabled !== SS && (this._ClearCoatTintTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(SS) {
        this._SheenTextureEnabled !== SS && (this._SheenTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(SS) {
        this._AnisotropicTextureEnabled !== SS && (this._AnisotropicTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(SS) {
        this._ThicknessTextureEnabled !== SS && (this._ThicknessTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(SS) {
        this._RefractionIntensityTextureEnabled !== SS && (this._RefractionIntensityTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(SS) {
        this._TranslucencyIntensityTextureEnabled !== SS && (this._TranslucencyIntensityTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(SS) {
        this._TranslucencyColorTextureEnabled !== SS && (this._TranslucencyColorTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(SS) {
        this._IridescenceTextureEnabled !== SS && (this._IridescenceTextureEnabled = SS, tS.b.MarkAllMaterialsAsDirty(1))
      }
    }
    bS._DiffuseTextureEnabled = !0, bS._BaseWeightTextureEnabled = !0, bS._BaseDiffuseRoughnessTextureEnabled = !0, bS._DetailTextureEnabled = !0, bS._DecalMapEnabled = !0, bS._AmbientTextureEnabled = !0, bS._OpacityTextureEnabled = !0, bS._ReflectionTextureEnabled = !0, bS._EmissiveTextureEnabled = !0, bS._SpecularTextureEnabled = !0, bS._BumpTextureEnabled = !0, bS._LightmapTextureEnabled = !0, bS._RefractionTextureEnabled = !0, bS._ColorGradingTextureEnabled = !0, bS._FresnelEnabled = !0, bS._ClearCoatTextureEnabled = !0, bS._ClearCoatBumpTextureEnabled = !0, bS._ClearCoatTintTextureEnabled = !0, bS._SheenTextureEnabled = !0, bS._AnisotropicTextureEnabled = !0, bS._ThicknessTextureEnabled = !0, bS._RefractionIntensityTextureEnabled = !0, bS._TranslucencyIntensityTextureEnabled = !0, bS._TranslucencyColorTextureEnabled = !0, bS._IridescenceTextureEnabled = !0
  },
  40367: (SS, HS, gS) => {
    gS.d(HS, {
      D: () => DS,
      F: () => dS,
      H: () => cS,
      K: () => aS,
      L: () => kS,
      O: () => pS,
      R: () => VS,
      S: () => AS,
      T: () => YS,
      X: () => PS,
      Z: () => ES,
      bb: () => sS,
      c: () => LS,
      db: () => BS,
      eb: () => MS,
      f: () => wS,
      i: () => fS,
      ib: () => oS,
      k: () => CS,
      l: () => nS,
      lb: () => RS,
      n: () => OS,
      ob: () => TS,
      q: () => qS,
      sb: () => KS,
      t: () => jS,
      v: () => GS,
      y: () => QS,
      z: () => vS
    });
    var tS = gS(38687),
      bS = gS(37138),
      XS = gS(40229),
      xS = gS(40375),
      NS = gS(40378);

    function qS(SS, HS, gS) {
      if (!SS || SS.LOGARITHMICDEPTH || SS.indexOf && SS.indexOf("LOGARITHMICDEPTH") >= 0) {
        const SS = gS.activeCamera;
        1 === SS.mode && tS.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), HS.setFloat("logarithmicDepthConstant", 2 / (Math.log(SS.maxZ + 1) / Math.LN2))
      }
    }
    const uS = {
        r: 0,
        g: 0,
        b: 0
      },
      IS = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function fS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      gS && SS.fogEnabled && (!HS || HS.applyFog) && 0 !== SS.fogMode && (gS.setFloat4("vFogInfos", SS.fogMode, SS.fogStart, SS.fogEnd, SS.fogDensity), tS ? (SS.fogColor.toLinearSpaceToRef(uS, SS.AK().useExactSrgbConversions), gS.setColor3("vFogColor", uS)) : gS.setColor3("vFogColor", SS.fogColor))
    }

    function kS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
      const fS = SS.numMaxInfluencers || SS.numInfluencers;
      return fS <= 0 ? 0 : (HS.push("#define MORPHTARGETS"), SS.hasPositions && HS.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), SS.hasNormals && HS.push("#define MORPHTARGETTEXTURE_HASNORMALS"), SS.hasTangents && HS.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), SS.hasUVs && HS.push("#define MORPHTARGETTEXTURE_HASUVS"), SS.hasUV2s && HS.push("#define MORPHTARGETTEXTURE_HASUV2S"), SS.hasColors && HS.push("#define MORPHTARGETTEXTURE_HASCOLORS"), SS.supportsPositions && bS && HS.push("#define MORPHTARGETS_POSITION"), SS.supportsNormals && XS && HS.push("#define MORPHTARGETS_NORMAL"), SS.supportsTangents && xS && HS.push("#define MORPHTARGETS_TANGENT"), SS.supportsUVs && NS && HS.push("#define MORPHTARGETS_UV"), SS.supportsUV2s && qS && HS.push("#define MORPHTARGETS_UV2"), SS.supportsColors && uS && HS.push("#define MORPHTARGETS_COLOR"), HS.push("#define NUM_MORPH_INFLUENCERS " + fS), SS.isUsingTextureForTargets && HS.push("#define MORPHTARGETS_TEXTURE"), IS.NUM_MORPH_INFLUENCERS = fS, IS.NORMAL = XS, IS.TANGENT = xS, IS.UV = NS, IS.UV2 = qS, IS.COLOR = uS, aS(gS, tS, IS, bS), fS)
    }

    function aS(SS, HS, gS) {
      let XS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const xS = gS.NUM_MORPH_INFLUENCERS;
      if (xS > 0 && bS.d.LastCreatedEngine) {
        const NS = bS.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          qS = HS.morphTargetManager;
        if (qS?.isUsingTextureForTargets) return;
        const uS = qS && qS.supportsPositions && XS,
          IS = qS && qS.supportsNormals && gS.NORMAL,
          fS = qS && qS.supportsTangents && gS.TANGENT,
          kS = qS && qS.supportsUVs && gS.UV1,
          aS = qS && qS.supportsUV2s && gS.UV2,
          KS = qS && qS.supportsColors && gS.VERTEXCOLOR;
        for (let gS = 0; gS < xS; gS++) uS && SS.push("position" + gS), IS && SS.push("normal" + gS), fS && SS.push("tangent" + gS), kS && SS.push("uv_" + gS), aS && SS.push("uv2_" + gS), KS && SS.push("color" + gS), SS.length > NS && tS.b.Error("Cannot add more vertex attributes for mesh " + HS.name)
      }
    }

    function KS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      SS.push("world0"), SS.push("world1"), SS.push("world2"), SS.push("world3"), HS && (SS.push("previousWorld0"), SS.push("previousWorld1"), SS.push("previousWorld2"), SS.push("previousWorld3"))
    }

    function jS(SS, HS) {
      const gS = SS.morphTargetManager;
      SS && gS && HS.setFloatArray("morphTargetInfluences", gS.influences)
    }

    function GS(SS, HS) {
      HS.bindToEffect(SS, "Scene")
    }

    function CS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        IS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        fS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        kS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (SS.texturesEnabled && bS && NS.e.ReflectionTextureEnabled) {
        if (gS.J7("reflectionMatrix", bS.getReflectionTextureMatrix()), gS.updateFloat2("vReflectionInfos", bS.level * SS.iblIntensity, kS), qS && bS.boundingBoxSize) {
          const SS = bS;
          gS.updateVector3("vReflectionPosition", SS.boundingBoxPosition), gS.updateVector3("vReflectionSize", SS.boundingBoxSize)
        }
        if (XS) {
          const SS = bS.getSize().width;
          gS.updateFloat2("vReflectionFilteringInfo", SS, Math.log2(SS))
        }
        if (IS && !HS.USEIRRADIANCEMAP) {
          const SS = bS.sphericalPolynomial;
          if (HS.USESPHERICALFROMREFLECTIONMAP && SS)
            if (HS.SPHERICAL_HARMONICS) {
              const HS = SS.preScaledHarmonics;
              gS.updateVector3("vSphericalL00", HS.l00), gS.updateVector3("vSphericalL1_1", HS.l1_1), gS.updateVector3("vSphericalL10", HS.l10), gS.updateVector3("vSphericalL11", HS.l11), gS.updateVector3("vSphericalL2_2", HS.l2_2), gS.updateVector3("vSphericalL2_1", HS.l2_1), gS.updateVector3("vSphericalL20", HS.l20), gS.updateVector3("vSphericalL21", HS.l21), gS.updateVector3("vSphericalL22", HS.l22)
            } else gS.updateFloat3("vSphericalX", SS.x.x, SS.x.y, SS.x.z), gS.updateFloat3("vSphericalY", SS.y.x, SS.y.y, SS.y.z), gS.updateFloat3("vSphericalZ", SS.z.x, SS.z.y, SS.z.z), gS.updateFloat3("vSphericalXX_ZZ", SS.xx.x - SS.zz.x, SS.xx.y - SS.zz.y, SS.xx.z - SS.zz.z), gS.updateFloat3("vSphericalYY_ZZ", SS.yy.x - SS.zz.x, SS.yy.y - SS.zz.y, SS.yy.z - SS.zz.z), gS.updateFloat3("vSphericalZZ", SS.zz.x, SS.zz.y, SS.zz.z), gS.updateFloat3("vSphericalXY", SS.xy.x, SS.xy.y, SS.xy.z), gS.updateFloat3("vSphericalYZ", SS.yz.x, SS.yz.y, SS.yz.z), gS.updateFloat3("vSphericalZX", SS.zx.x, SS.zx.y, SS.zx.z)
        } else uS && HS.USEIRRADIANCEMAP && HS.USE_IRRADIANCE_DOMINANT_DIRECTION && bS.irradianceTexture && gS.updateVector3("vReflectionDominantDirection", bS.irradianceTexture._dominantDirection);
        xS && gS.updateFloat3("vReflectionMicrosurfaceInfos", bS.getSize().width, bS.lodGenerationScale, bS.lodGenerationOffset)
      }
      fS && gS.updateColor3("vReflectionColor", tS)
    }

    function nS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (tS && NS.e.ReflectionTextureEnabled) {
        HS.LODBASEDMICROSFURACE ? gS.setTexture("reflectionSampler", tS) : (gS.setTexture("reflectionSampler", tS._lodTextureMid || tS), gS.setTexture("reflectionSamplerLow", tS._lodTextureLow || tS), gS.setTexture("reflectionSamplerHigh", tS._lodTextureHigh || tS)), HS.USEIRRADIANCEMAP && gS.setTexture("irradianceSampler", tS.irradianceTexture);
        const XS = SS.iblCdfGenerator;
        bS && XS && gS.setTexture("icdfSampler", XS.getIcdfTexture())
      }
    }

    function PS(SS, HS, gS) {
      HS._needUVs = !0, HS[gS] = !0, SS.optimizeUVAllocation && SS.getTextureMatrix().isIdentityAs3x2() ? (HS[gS + "DIRECTUV"] = SS.coordinatesIndex + 1, HS["MAINUV" + (SS.coordinatesIndex + 1)] = !0) : HS[gS + "DIRECTUV"] = 0
    }

    function QS(SS, HS, gS) {
      const tS = SS.getTextureMatrix();
      HS.J7(gS + "Matrix", tS)
    }

    function DS(SS, HS, gS) {
      gS.BAKED_VERTEX_ANIMATION_TEXTURE && gS.INSTANCES && SS.push("bakedVertexAnimationSettingsInstanced")
    }

    function wS(SS, HS, gS) {
      var tS;
      if (HS && SS && (SS.computeBonesUsingShaders && HS._bonesComputationForcedToCPU && (SS.computeBonesUsingShaders = !1), SS.useBones && SS.computeBonesUsingShaders && SS.skeleton)) {
        const bS = SS.skeleton;
        if (bS.isUsingTextureForMatrices && HS.getUniformIndex("boneTextureInfo") > -1) {
          const gS = bS.getTransformMatrixTexture(SS);
          HS.setTexture("boneSampler", gS), HS.setFloat2("boneTextureInfo", bS._textureWidth, bS._textureHeight)
        } else {
          const XS = bS.getTransformMatrices(SS);
          XS && (HS.setMatrices("mBones", XS), gS && SS.lL().prePassRenderer && SS.lL().prePassRenderer.getIndex(2) && (gS.previousBones[SS.uniqueId] || (gS.previousBones[SS.uniqueId] = XS.slice()), HS.setMatrices("mPreviousBones", gS.previousBones[SS.uniqueId]), tS = XS, gS.previousBones[SS.uniqueId].set(tS)))
        }
      }
    }

    function hS(SS, HS, gS, tS, bS) {
      let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      SS._bindLight(HS, gS, tS, bS, XS)
    }
    const ZS = 4,
      JS = new WeakMap;

    function OS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const XS = Math.min(HS.lightSources.length, bS);
      for (let xS = 0; xS < XS; xS++) {
        hS(HS.lightSources[xS], xS, SS, gS, "boolean" === typeof tS ? tS : tS.SPECULARTERM, HS.receiveShadows)
      }
    }

    function dS(SS, HS, gS, tS) {
      gS.NUM_BONE_INFLUENCERS > 0 && (tS.addCPUSkinningFallback(0, HS), SS.push("matricesIndices"), SS.push("matricesWeights"), gS.NUM_BONE_INFLUENCERS > 4 && (SS.push("matricesIndicesExtra"), SS.push("matricesWeightsExtra")))
    }

    function cS(SS, HS) {
      (HS.INSTANCES || HS.THIN_INSTANCES) && KS(SS, !!HS.PREPASS_VELOCITY), HS.INSTANCESCOLOR && SS.push("instanceColor")
    }

    function vS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        bS = 0;
      for (let XS = 0; XS < gS && SS["LIGHT" + XS]; XS++) XS > 0 && (bS = tS + XS, HS.addFallback(bS, "LIGHT" + XS)), SS.SHADOWS || (SS["SHADOW" + XS] && HS.addFallback(tS, "SHADOW" + XS), SS["SHADOWPCF" + XS] && HS.addFallback(tS, "SHADOWPCF" + XS), SS["SHADOWPCSS" + XS] && HS.addFallback(tS, "SHADOWPCSS" + XS), SS["SHADOWPOISSON" + XS] && HS.addFallback(tS, "SHADOWPOISSON" + XS), SS["SHADOWESM" + XS] && HS.addFallback(tS, "SHADOWESM" + XS), SS["SHADOWCLOSEESM" + XS] && HS.addFallback(tS, "SHADOWCLOSEESM" + XS));
      return bS
    }

    function ES(SS, HS, gS, tS, bS, XS, xS) {
      let NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uS = arguments.length > 9 ? arguments[9] : void 0,
        IS = arguments.length > 10 ? arguments[10] : void 0;
      if (xS._areMiscDirty) {
        xS.LOGARITHMICDEPTH = gS, xS.POINTSIZE = tS, xS.FOG = bS && function(SS, HS) {
          return HS.fogEnabled && SS.applyFog && 0 !== HS.fogMode
        }(SS, HS), xS.NONUNIFORMSCALING = SS.nonUniformScaling, xS.ALPHATEST = XS, xS.DECAL_AFTER_DETAIL = NS, xS.USE_VERTEX_PULLING = qS, xS.RIGHT_HANDED = HS.useRightHandedSystem;
        const fS = qS ? uS?.geometry?.getIndexBuffer() : null,
          kS = !!uS && uS.isUnIndexed;
        xS.VERTEX_PULLING_USE_INDEX_BUFFER = !!fS && !kS, xS.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!fS || kS) && fS.is32Bits, xS.VERTEXOUTPUT_INVARIANT = !!IS
      }
    }

    function LS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!SS.lightsEnabled || tS) return !0;
      const bS = HS.lightSources,
        XS = Math.min(bS.length, gS);
      for (let xS = 0; xS < XS; xS++)
        if (!bS[xS].areLightTexturesReady()) return !1;
      return !0
    }

    function YS(SS, HS, gS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!gS._areLightsDirty) return gS._needNormals;
      const NS = XS;
      XS = function(SS, HS) {
        const gS = SS.AK().getCaps().maxUniformBuffersPerShaderStage;
        if (null == gS) return HS;
        const tS = Math.max(gS - ZS, 1);
        return Math.min(HS, tS)
      }(SS, XS);
      let qS = 0;
      const uS = {
        needNormals: gS._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (SS.lightsEnabled && !xS) {
        HS.lightSources.length > XS && XS < NS && function(SS, HS, gS, bS) {
          let XS = JS.get(SS);
          XS || (XS = new Set, JS.set(SS, XS)), XS.has(bS) || (XS.add(bS), tS.b.Warn(`maxSimultaneousLights is ${HS} but this engine supports at most ${gS} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${bS} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${bS+ZS} uniform buffers, over the device limit of ${SS.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${gS}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${gS} or less to silence this warning.`))
        }(SS.AK(), NS, XS, Math.min(HS.lightSources.length, NS));
        for (const tS of HS.lightSources)
          if (yS(SS, HS, tS, qS, gS, bS, uS), qS++, qS === XS) break
      }
      gS.SPECULARTERM = uS.specularEnabled, gS.SHADOWS = uS.shadowEnabled;
      const IS = Math.max(XS, gS.MAXLIGHTCOUNT || 0);
      for (let tS = qS; tS < IS; tS++) void 0 !== gS["LIGHT" + tS] && (gS["LIGHT" + tS] = !1, gS["HEMILIGHT" + tS] = !1, gS["POINTLIGHT" + tS] = !1, gS["DIRLIGHT" + tS] = !1, gS["SPOTLIGHT" + tS] = !1, gS["AREALIGHT" + tS] = !1, gS["CLUSTLIGHT" + tS] = !1, gS["SHADOW" + tS] = !1, gS["SHADOWCSM" + tS] = !1, gS["SHADOWCSMDEBUG" + tS] = !1, gS["SHADOWCSMNUM_CASCADES" + tS] = !1, gS["SHADOWCSMUSESHADOWMAXZ" + tS] = !1, gS["SHADOWCSMNOBLEND" + tS] = !1, gS["SHADOWCSM_RIGHTHANDED" + tS] = !1, gS["SHADOWPCF" + tS] = !1, gS["SHADOWPCSS" + tS] = !1, gS["SHADOWPOISSON" + tS] = !1, gS["SHADOWESM" + tS] = !1, gS["SHADOWCLOSEESM" + tS] = !1, gS["SHADOWCUBE" + tS] = !1, gS["SHADOWLOWQUALITY" + tS] = !1, gS["SHADOWMEDIUMQUALITY" + tS] = !1);
      gS.LIGHTCOUNT = qS, gS.MAXLIGHTCOUNT = XS;
      const fS = SS.AK().getCaps();
      return void 0 === gS.SHADOWFLOAT && (uS.needRebuild = !0), gS.SHADOWFLOAT = uS.shadowEnabled && (fS.textureFloatRender && fS.textureFloatLinearFiltering || fS.textureHalfFloatRender && fS.textureHalfFloatLinearFiltering), gS.LIGHTMAPEXCLUDED = uS.lightmapMode, uS.needRebuild && gS.rebuild(), uS.needNormals
    }

    function AS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (HS && NS.e.ReflectionTextureEnabled) {
        if (!HS.isReadyOrNotBlocking()) return !1;
        gS._needNormals = !0, gS.REFLECTION = !0, gS.GAMMAREFLECTION = HS.gammaSpace, gS.RGBDREFLECTION = HS.isRGBD, gS.LODINREFLECTIONALPHA = HS.lodLevelInAlpha, gS.LINEARSPECULARREFLECTION = HS.linearSpecularLOD, gS.USEIRRADIANCEMAP = !1, gS.LODBASEDMICROSFURACE = SS.AK().getCaps().textureLOD;
        const xS = SS.AK();
        switch (tS && bS > 0 ? (gS.NUM_SAMPLES = "" + bS, xS._features.needTypeSuffixInShaderConstants && (gS.NUM_SAMPLES = gS.NUM_SAMPLES + "u"), gS.REALTIME_FILTERING = !0, SS.iblCdfGenerator && (gS.IBL_CDF_FILTERING = !0)) : gS.REALTIME_FILTERING = !1, gS.INVERTCUBICMAP = 6 === HS.coordinatesMode, gS.REFLECTIONMAP_3D = HS.isCube, gS.REFLECTIONMAP_OPPOSITEZ = gS.REFLECTIONMAP_3D && SS.useRightHandedSystem ? !HS.invertZ : HS.invertZ, gS.REFLECTIONMAP_CUBIC = !1, gS.REFLECTIONMAP_EXPLICIT = !1, gS.REFLECTIONMAP_PLANAR = !1, gS.REFLECTIONMAP_PROJECTION = !1, gS.REFLECTIONMAP_SKYBOX = !1, gS.REFLECTIONMAP_SPHERICAL = !1, gS.REFLECTIONMAP_EQUIRECTANGULAR = !1, gS.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, gS.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, HS.coordinatesMode) {
          case 0:
            gS.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            gS.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            gS.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            gS.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            gS.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            gS.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            gS.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            gS.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            gS.REFLECTIONMAP_CUBIC = !0, gS.USE_LOCAL_REFLECTIONMAP_CUBIC = !!HS.boundingBoxSize
        }
        5 !== HS.coordinatesMode && (HS.irradianceTexture ? (gS.USEIRRADIANCEMAP = !0, gS.USESPHERICALFROMREFLECTIONMAP = !1, gS.USESPHERICALINVERTEX = !1, HS.irradianceTexture._dominantDirection ? gS.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : gS.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : HS.isCube && (gS.USESPHERICALFROMREFLECTIONMAP = !0, gS.USEIRRADIANCEMAP = !1, gS.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, gS.USESPHERICALINVERTEX = XS))
      } else gS.REFLECTION = !1, gS.REFLECTIONMAP_3D = !1, gS.REFLECTIONMAP_SPHERICAL = !1, gS.REFLECTIONMAP_PLANAR = !1, gS.REFLECTIONMAP_CUBIC = !1, gS.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, gS.REFLECTIONMAP_PROJECTION = !1, gS.REFLECTIONMAP_SKYBOX = !1, gS.REFLECTIONMAP_EXPLICIT = !1, gS.REFLECTIONMAP_EQUIRECTANGULAR = !1, gS.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, gS.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, gS.INVERTCUBICMAP = !1, gS.USESPHERICALFROMREFLECTIONMAP = !1, gS.USEIRRADIANCEMAP = !1, gS.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, gS.USESPHERICALINVERTEX = !1, gS.REFLECTIONMAP_OPPOSITEZ = !1, gS.LODINREFLECTIONALPHA = !1, gS.GAMMAREFLECTION = !1, gS.RGBDREFLECTION = !1, gS.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function yS(SS, HS, gS, tS, bS, xS, NS) {
      switch (NS.needNormals = !0, void 0 === bS["LIGHT" + tS] && (NS.needRebuild = !0), bS["LIGHT" + tS] = !0, bS["SPOTLIGHT" + tS] = !1, bS["HEMILIGHT" + tS] = !1, bS["POINTLIGHT" + tS] = !1, bS["DIRLIGHT" + tS] = !1, bS["AREALIGHT" + tS] = !1, bS["CLUSTLIGHT" + tS] = !1, gS.prepareLightSpecificDefines(bS, tS), bS["LIGHT_FALLOFF_PHYSICAL" + tS] = !1, bS["LIGHT_FALLOFF_GLTF" + tS] = !1, bS["LIGHT_FALLOFF_STANDARD" + tS] = !1, gS.falloffType) {
        case XS.e.FALLOFF_GLTF:
          bS["LIGHT_FALLOFF_GLTF" + tS] = !0;
          break;
        case XS.e.FALLOFF_PHYSICAL:
          bS["LIGHT_FALLOFF_PHYSICAL" + tS] = !0;
          break;
        case XS.e.FALLOFF_STANDARD:
          bS["LIGHT_FALLOFF_STANDARD" + tS] = !0
      }
      if (xS && !gS.specular.equalsFloats(0, 0, 0) && (NS.specularEnabled = !0), bS["SHADOW" + tS] = !1, bS["SHADOWCSM" + tS] = !1, bS["SHADOWCSMDEBUG" + tS] = !1, bS["SHADOWCSMNUM_CASCADES" + tS] = !1, bS["SHADOWCSMUSESHADOWMAXZ" + tS] = !1, bS["SHADOWCSMNOBLEND" + tS] = !1, bS["SHADOWCSM_RIGHTHANDED" + tS] = !1, bS["SHADOWPCF" + tS] = !1, bS["SHADOWPCSS" + tS] = !1, bS["SHADOWPOISSON" + tS] = !1, bS["SHADOWESM" + tS] = !1, bS["SHADOWCLOSEESM" + tS] = !1, bS["SHADOWCUBE" + tS] = !1, bS["SHADOWLOWQUALITY" + tS] = !1, bS["SHADOWMEDIUMQUALITY" + tS] = !1, HS && HS.receiveShadows && SS.shadowsEnabled && gS.shadowEnabled) {
        const HS = gS.getShadowGenerator(SS.activeCamera) ?? gS.getShadowGenerator();
        if (HS) {
          const SS = HS.getShadowMap();
          SS && SS.renderList && SS.renderList.length > 0 && (NS.shadowEnabled = !0, HS.prepareDefines(bS, tS))
        }
      }
      gS.lightmapMode != XS.e.LIGHTMAP_DEFAULT ? (NS.lightmapMode = !0, bS["LIGHTMAPEXCLUDED" + tS] = !0, bS["LIGHTMAPNOSPECULAR" + tS] = gS.lightmapMode == XS.e.LIGHTMAP_SHADOWSONLY) : (bS["LIGHTMAPEXCLUDED" + tS] = !1, bS["LIGHTMAPNOSPECULAR" + tS] = !1)
    }

    function VS(SS, HS, gS, tS, bS) {
      let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        NS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qS = function(SS, HS) {
          let gS = !1;
          if (SS.activeCamera) {
            const tS = HS.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              bS = HS.CAMERA_PERSPECTIVE ? 1 : 0,
              XS = 1 === SS.activeCamera.mode ? 1 : 0,
              xS = 0 === SS.activeCamera.mode ? 1 : 0;
            (tS ^ XS || bS ^ xS) && (HS.CAMERA_ORTHOGRAPHIC = 1 === XS, HS.CAMERA_PERSPECTIVE = 1 === xS, gS = !0)
          }
          return gS
        }(SS, tS);
      !1 !== XS && (qS = (0, xS.i)(gS, SS, tS)), tS.DEPTHPREPASS !== !HS.getColorWrite() && (tS.DEPTHPREPASS = !tS.DEPTHPREPASS, qS = !0), tS.INSTANCES !== bS && (tS.INSTANCES = bS, qS = !0), tS.THIN_INSTANCES !== NS && (tS.THIN_INSTANCES = NS, qS = !0), qS && tS.markAsUnprocessed()
    }
    const iS = 40,
      WS = 64,
      zS = new WeakMap,
      US = new WeakSet;

    function pS(SS, HS, gS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        NS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!HS._areAttributesDirty && HS._needNormals === HS._normals && HS._needUVs === HS._uvs) return !1;
      HS._normals = HS._needNormals, HS._uvs = HS._needUVs, HS.NORMAL = HS._needNormals && SS.isVerticesDataPresent("normal"), HS._needNormals && SS.isVerticesDataPresent("tangent") && (HS.TANGENT = !0);
      for (let tS = 1; tS <= 6; ++tS) HS["UV" + tS] = !!HS._needUVs && SS.isVerticesDataPresent(`uv${1===tS?"":tS}`);
      if (gS) {
        const gS = SS.useVertexColors && SS.isVerticesDataPresent("color");
        HS.VERTEXCOLOR = gS, HS.VERTEXALPHA = SS.hasVertexAlpha && gS && xS
      }
      return SS.isVerticesDataPresent("instanceColor") && (SS.BtS || SS.hasThinInstances) && (HS.INSTANCESCOLOR = !0), bS && function(SS, HS) {
        if (SS.useBones && SS.computeBonesUsingShaders && SS.skeleton) {
          HS.NUM_BONE_INFLUENCERS = SS.numBoneInfluencers;
          const gS = void 0 !== HS.BONETEXTURE;
          if (SS.skeleton.isUsingTextureForMatrices && gS) HS.BONETEXTURE = !0;
          else {
            HS.BonesPerMesh = SS.skeleton.bones.length + 1, HS.BONETEXTURE = !gS && void 0;
            const bS = SS.lL(),
              XS = bS.prePassRenderer;
            if (XS && XS.enabled) {
              const gS = -1 === XS.excludedSkinnedMesh.indexOf(SS);
              HS.BONES_VELOCITY_ENABLED = gS
            }
            const xS = !0 === HS.MULTIVIEW,
              NS = 2 * HS.BonesPerMesh + (xS ? 1 : 0);
            if (zS.get(SS.skeleton) !== NS) {
              zS.set(SS.skeleton, NS);
              const gS = bS.AK().getCaps().maxVertexUniformVectors;
              if (gS && !US.has(SS.skeleton)) {
                const bS = 4 * HS.BonesPerMesh,
                  XS = xS ? WS : iS,
                  NS = Math.max(gS - XS, 0);
                (bS > NS || xS && 3 * bS > gS) && (US.add(SS.skeleton), tS.b.Warn(`Skeleton "${SS.skeleton.name}": ${SS.skeleton.bones.length} bones stored as vertex uniforms use ${bS} of ~${NS} usable uniform vectors${xS?" (multiview)":""} on a device reporting ${gS}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else HS.NUM_BONE_INFLUENCERS = 0, HS.BonesPerMesh = 0, void 0 !== HS.BONETEXTURE && (HS.BONETEXTURE = !1)
      }(SS, HS), XS && function(SS, HS) {
        const gS = SS.morphTargetManager;
        gS ? (HS.MORPHTARGETS_UV = gS.supportsUVs && HS.UV1, HS.MORPHTARGETS_UV2 = gS.supportsUV2s && HS.UV2, HS.MORPHTARGETS_TANGENT = gS.supportsTangents && HS.TANGENT, HS.MORPHTARGETS_NORMAL = gS.supportsNormals && HS.NORMAL, HS.MORPHTARGETS_POSITION = gS.supportsPositions, HS.MORPHTARGETS_COLOR = gS.supportsColors, HS.MORPHTARGETTEXTURE_HASUVS = gS.hasUVs, HS.MORPHTARGETTEXTURE_HASUV2S = gS.hasUV2s, HS.MORPHTARGETTEXTURE_HASTANGENTS = gS.hasTangents, HS.MORPHTARGETTEXTURE_HASNORMALS = gS.hasNormals, HS.MORPHTARGETTEXTURE_HASPOSITIONS = gS.hasPositions, HS.MORPHTARGETTEXTURE_HASCOLORS = gS.hasColors, HS.NUM_MORPH_INFLUENCERS = gS.numMaxInfluencers || gS.numInfluencers, HS.MORPHTARGETS = HS.NUM_MORPH_INFLUENCERS > 0, HS.MORPHTARGETS_TEXTURE = gS.isUsingTextureForTargets) : (HS.MORPHTARGETS_UV = !1, HS.MORPHTARGETS_UV2 = !1, HS.MORPHTARGETS_TANGENT = !1, HS.MORPHTARGETS_NORMAL = !1, HS.MORPHTARGETS_POSITION = !1, HS.MORPHTARGETS_COLOR = !1, HS.MORPHTARGETTEXTURE_HASUVS = !1, HS.MORPHTARGETTEXTURE_HASUV2S = !1, HS.MORPHTARGETTEXTURE_HASTANGENTS = !1, HS.MORPHTARGETTEXTURE_HASNORMALS = !1, HS.MORPHTARGETTEXTURE_HASPOSITIONS = !1, HS.MORPHTARGETTEXTURE_HAS_COLORS = !1, HS.MORPHTARGETS = !1, HS.NUM_MORPH_INFLUENCERS = 0)
      }(SS, HS), NS && function(SS, HS) {
        const gS = SS.bakedVertexAnimationManager;
        HS.BAKED_VERTEX_ANIMATION_TEXTURE = !(!gS || !gS.isEnabled)
      }(SS, HS), !0
    }

    function sS(SS, HS) {
      if (SS.activeCamera) {
        const gS = HS.MULTIVIEW;
        HS.MULTIVIEW = null !== SS.activeCamera.outputRenderTarget && SS.activeCamera.outputRenderTarget.getViewCount() > 1, HS.MULTIVIEW != gS && HS.markAsUnprocessed()
      }
    }

    function BS(SS, HS, gS) {
      const tS = HS.ORDER_INDEPENDENT_TRANSPARENCY,
        bS = HS.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      HS.ORDER_INDEPENDENT_TRANSPARENCY = SS.useOrderIndependentTransparency && gS, HS.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !SS.AK().getCaps().textureFloatLinearFiltering, tS === HS.ORDER_INDEPENDENT_TRANSPARENCY && bS === HS.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || HS.markAsUnprocessed()
    }

    function MS(SS, HS, gS) {
      const tS = HS.PREPASS;
      if (!HS._arePrePassDirty) return;
      const bS = [{
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
      if (SS.prePassRenderer && SS.prePassRenderer.enabled && gS) {
        HS.PREPASS = !0, HS.SCENE_MRT_COUNT = SS.prePassRenderer.mrtCount, HS.PREPASS_NORMAL_WORLDSPACE = SS.prePassRenderer.generateNormalsInWorldSpace, HS.PREPASS_COLOR = !0, HS.PREPASS_COLOR_INDEX = 0;
        for (let gS = 0; gS < bS.length; gS++) {
          const tS = SS.prePassRenderer.getIndex(bS[gS].type); - 1 !== tS ? (HS[bS[gS].define] = !0, HS[bS[gS].index] = tS) : HS[bS[gS].define] = !1
        }
      } else {
        HS.PREPASS = !1;
        for (let SS = 0; SS < bS.length; SS++) HS[bS[SS].define] = !1
      }
      HS.PREPASS != tS && (HS.markAsUnprocessed(), HS.markAsImageProcessingDirty())
    }

    function FS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      bS && bS.push("Light" + SS), XS || (HS.push("vLightData" + SS, "vLightDiffuse" + SS, "vLightSpecular" + SS, "vLightDirection" + SS, "vLightWidth" + SS, "vLightHeight" + SS, "vLightFalloff" + SS, "vLightGround" + SS, "vSliceData" + SS, "vSliceRanges" + SS, "lightMatrix" + SS, "shadowsInfo" + SS, "depthValues" + SS), gS.push("shadowTexture" + SS), gS.push("depthTexture" + SS), HS.push("viewFrustumZ" + SS, "cascadeBlendFactor" + SS, "lightSizeUVCorrection" + SS, "depthCorrection" + SS, "penumbraDarkness" + SS, "frustumLengths" + SS), tS && (gS.push("projectionLightTexture" + SS), HS.push("textureProjectionMatrix" + SS)), xS && gS.push("iesLightTexture" + SS), qS && gS.push("rectAreaLightEmissionTexture" + SS), NS && (gS.push("lightDataTexture" + SS), uS || gS.push("tileMaskTexture" + SS)))
    }

    function RS(SS, HS, gS) {
      const tS = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      gS && tS.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), SS.push(...tS);
      HS.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function TS(SS, HS, gS) {
      let tS, bS, XS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        xS = null;
      if (SS.uniformsNames) {
        const NS = SS;
        tS = NS.uniformsNames, bS = NS.uniformBuffersNames, HS = NS.samplers, gS = NS.defines, XS = NS.maxSimultaneousLights || 0, xS = NS.shaderLanguage ?? null
      } else tS = SS, HS || (HS = []);
      for (let NS = 0; NS < XS && gS["LIGHT" + NS]; NS++) FS(NS, tS, HS, gS["PROJECTEDLIGHTTEXTURE" + NS], bS, !1, gS["IESLIGHTTEXTURE" + NS], gS["CLUSTLIGHT" + NS], gS["RECTAREALIGHTEMISSIONTEXTURE" + NS], 1 === xS);
      gS.NUM_MORPH_INFLUENCERS && (tS.push("morphTargetInfluences"), tS.push("morphTargetCount")), gS.BAKED_VERTEX_ANIMATION_TEXTURE && (tS.push("bakedVertexAnimationSettings"), tS.push("bakedVertexAnimationTextureSizeInverted"), tS.push("bakedVertexAnimationTime"), HS.push("bakedVertexAnimationTexture"))
    }

    function oS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      SS.addUniform("vReflectionInfos", 2), SS.addUniform("reflectionMatrix", 16), HS && SS.addUniform("vReflectionMicrosurfaceInfos", 3), gS && (SS.addUniform("vReflectionPosition", 3), SS.addUniform("vReflectionSize", 3)), tS && (SS.addUniform("vReflectionFilteringInfo", 2), SS.addUniform("vReflectionDominantDirection", 3)), XS && SS.addUniform("vReflectionColor", 3), bS && (SS.addUniform("vSphericalL00", 3), SS.addUniform("vSphericalL1_1", 3), SS.addUniform("vSphericalL10", 3), SS.addUniform("vSphericalL11", 3), SS.addUniform("vSphericalL2_2", 3), SS.addUniform("vSphericalL2_1", 3), SS.addUniform("vSphericalL20", 3), SS.addUniform("vSphericalL21", 3), SS.addUniform("vSphericalL22", 3), SS.addUniform("vSphericalX", 3), SS.addUniform("vSphericalY", 3), SS.addUniform("vSphericalZ", 3), SS.addUniform("vSphericalXX_ZZ", 3), SS.addUniform("vSphericalYY_ZZ", 3), SS.addUniform("vSphericalZZ", 3), SS.addUniform("vSphericalXY", 3), SS.addUniform("vSphericalYZ", 3), SS.addUniform("vSphericalZX", 3))
    }
  },
  40386: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(37117),
      bS = gS(40331);
    class XS extends bS.d {
      constructor(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(SS, HS, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new tS.e, this._storeEffectOnSubMeshes = gS
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(SS, HS) {
        return !!SS && (!this._storeEffectOnSubMeshes || (!SS.dD || 0 === SS.dD.length || this.isReadyForSubMesh(SS, SS.dD[0], HS)))
      }
      _isReadyForSubMesh(SS) {
        const HS = SS.materialDefines;
        return !(this.checkReadyOnEveryCall || !SS.effect || !HS || HS._renderId !== this.lL().getRenderId())
      }
      bindOnlyWorldMatrix(SS) {
        this._activeEffect.setMatrix("world", SS)
      }
      bindOnlyNormalMatrix(SS) {
        this._activeEffect.setMatrix("normalMatrix", SS)
      }
      bind(SS, HS) {
        HS && this.bindForSubMesh(SS, HS, HS.dD[0])
      }
      _afterBind(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(SS, HS, gS), this.lL()._cachedEffect = HS, gS ? gS._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return gS._drawWrapper._forceRebindOnNextCall || SS.isCachedMaterialInvalid(this, HS, tS)
      }
      dispose(SS, HS, gS) {
        this._activeEffect = void 0, super.dispose(SS, HS, gS)
      }
    }
  },
  40405: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      e: () => bS
    });
    const tS = new WeakMap;

    function bS(SS) {
      const HS = SS.getVertexBuffers();
      if (!HS) return null;
      let gS = tS.get(SS);
      if (gS) {
        let SS = !1;
        for (const tS in HS)
          if (!gS.has(tS)) {
            SS = !0;
            break
          } if (!SS) return gS
      } else gS = new Map, tS.set(SS, gS);
      for (const tS in HS) {
        const SS = HS[tS];
        if (SS) {
          const HS = SS.byteOffset,
            bS = SS.byteStride,
            XS = SS.type,
            xS = SS.normalized;
          gS.set(tS, {
            offset: HS,
            stride: bS,
            type: XS,
            normalized: xS
          })
        }
      }
      return gS
    }

    function XS(SS, HS) {
      HS.forEach(((HS, gS) => {
        const tS = `vp_${gS}_info`;
        SS.setFloat4(tS, HS.offset, HS.stride, HS.type, HS.normalized ? 1 : 0)
      }))
    }
  },
  40361: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      f: () => qS
    });
    var tS = gS(40041),
      bS = gS(37117),
      XS = gS(40048);
    let xS = (() => {
      var SS;
      let HS, gS, bS = [];
      return SS = class {
        static extractMinAndMaxIndexed(SS, HS, gS, tS, bS, XS) {
          for (let xS = gS; xS < gS + tS; xS++) {
            const gS = 3 * HS[xS],
              tS = SS[gS],
              NS = SS[gS + 1],
              qS = SS[gS + 2];
            bS.minimizeInPlaceFromFloats(tS, NS, qS), XS.maximizeInPlaceFromFloats(tS, NS, qS)
          }
        }
        static extractMinAndMax(SS, HS, gS, tS, bS, XS) {
          for (let xS = HS, NS = HS * tS; xS < HS + gS; xS++, NS += tS) {
            const HS = SS[NS],
              gS = SS[NS + 1],
              tS = SS[NS + 2];
            bS.minimizeInPlaceFromFloats(HS, gS, tS), XS.maximizeInPlaceFromFloats(HS, gS, tS)
          }
        }
      }, (() => {
        const xS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [XS.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], gS = [XS.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, tS.j)(SS, null, HS, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: SS => "extractMinAndMaxIndexed" in SS,
            get: SS => SS.extractMinAndMaxIndexed
          },
          metadata: xS
        }, null, bS), (0, tS.j)(SS, null, gS, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: SS => "extractMinAndMax" in SS,
            get: SS => SS.extractMinAndMax
          },
          metadata: xS
        }, null, bS), xS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xS
        }), (0, tS.k)(SS, bS)
      })(), SS
    })();

    function NS(SS, HS, gS, tS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const NS = new bS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qS = new bS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return xS.extractMinAndMaxIndexed(SS, HS, gS, tS, NS, qS), XS && (NS.x -= NS.x * XS.x + XS.y, NS.y -= NS.y * XS.x + XS.y, NS.z -= NS.z * XS.x + XS.y, qS.x += qS.x * XS.x + XS.y, qS.y += qS.y * XS.x + XS.y, qS.z += qS.z * XS.x + XS.y), {
        minimum: NS,
        maximum: qS
      }
    }

    function qS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        XS = arguments.length > 4 ? arguments[4] : void 0;
      const NS = new bS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        qS = new bS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return XS || (XS = 3), xS.extractMinAndMax(SS, HS, gS, XS, NS, qS), tS && (NS.x -= NS.x * tS.x + tS.y, NS.y -= NS.y * tS.x + tS.y, NS.z -= NS.z * tS.x + tS.y, qS.x += qS.x * tS.x + tS.y, qS.y += qS.y * tS.x + tS.y, qS.z += qS.z * tS.x + tS.y), {
        minimum: NS,
        maximum: qS
      }
    }
  },
  40337: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS
    });
    var tS, bS = gS(40183),
      XS = gS(40343),
      xS = gS(40346),
      NS = gS(40361),
      qS = gS(40364),
      uS = gS(39926);
    class IS {
      get materialDefines() {
        const SS = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof SS ? null : SS
      }
      set materialDefines(SS) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = SS
      }
      _getDrawWrapper(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        SS = SS ?? this._engine.currentRenderPassId;
        let gS = this._drawWrappers[SS];
        return !gS && HS && (this._drawWrappers[SS] = gS = new qS.d(this._mesh.lL().AK())), gS
      }
      _removeDrawWrapper(SS) {
        let HS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[SS]?.dispose(HS), this._drawWrappers[SS] = void 0
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
      _setMainDrawWrapperOverride(SS) {
        this._mainDrawWrapperOverride = SS
      }
      setEffect(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const bS = this._drawWrapper;
        bS.setEffect(SS, HS, tS), void 0 !== gS && (bS.materialContext = gS), SS || (bS.defines = null, bS.materialContext = void 0)
      }
      resetDrawCache(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== SS) return void this._removeDrawWrapper(SS, !0, HS);
          for (const SS of this._drawWrappers) SS?.dispose(HS)
        }
        this._drawWrappers = []
      }
      static AddToMesh(SS, HS, gS, tS, bS, XS, xS) {
        return new IS(SS, HS, gS, tS, bS, XS, xS, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(SS, HS, gS, tS, bS, XS, xS) {
        let NS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qS = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = SS, this.verticesStart = HS, this.verticesCount = gS, this.indexStart = tS, this.indexCount = bS, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = XS, this._renderingMesh = xS || XS, qS && XS.dD.push(this), this._engine = this._mesh.lL().AK(), this.resetDrawCache(), this._trianglePlanes = [], this._id = XS.dD.length - 1, NS && (this.refreshBoundingInfo(), XS.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      hA() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.hA() : this._boundingInfo
      }
      setBoundingInfo(SS) {
        return this._boundingInfo = SS, this
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
        const SS = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return SS || this._renderingMesh
      }
      zK() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const HS = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!HS) return SS && this._mesh.lL()._hasDefaultMaterial ? this._mesh.lL().defaultMaterial : null;
        if (this._isMultiMaterial(HS)) {
          const SS = HS.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== SS && (this._currentMaterial = SS, this.resetDrawCache()), SS
        }
        return HS
      }
      _isMultiMaterial(SS) {
        return void 0 !== SS.getSubMaterial
      }
      refreshBoundingInfo() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (SS || (SS = this._renderingMesh.getVerticesData(bS.h.PositionKind)), !SS) return this._boundingInfo = this._mesh.hA(), this;
        const HS = this._renderingMesh.mgS();
        let gS;
        if (0 === this.indexStart && this.indexCount === HS.length) {
          const SS = this._renderingMesh.hA();
          gS = {
            minimum: SS.minimum.clone(),
            maximum: SS.maximum.clone()
          }
        } else gS = (0, NS.c)(SS, HS, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(gS.minimum, gS.maximum) : this._boundingInfo = new xS.e(gS.minimum, gS.maximum), this
      }
      _checkCollision(SS) {
        return this.hA()._checkCollision(SS)
      }
      updateBoundingInfo(SS) {
        let HS = this.hA();
        return HS || (this.refreshBoundingInfo(), HS = this.hA()), HS && HS.update(SS), this
      }
      isInFrustum(SS) {
        const HS = this.hA();
        return !!HS && HS.isInFrustum(SS, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(SS) {
        const HS = this.hA();
        return !!HS && HS.isCompletelyInFrustum(SS)
      }
      render(SS) {
        return this._renderingMesh.render(this, SS, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(SS, HS) {
        if (!this._linesIndexBuffer) {
          const gS = 6 * Math.floor(this.indexCount / 3),
            tS = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(gS) : new Uint16Array(gS);
          let bS = 0;
          if (0 === SS.length)
            for (let SS = this.indexStart; SS < this.indexStart + this.indexCount; SS += 3) tS[bS++] = SS, tS[bS++] = SS + 1, tS[bS++] = SS + 1, tS[bS++] = SS + 2, tS[bS++] = SS + 2, tS[bS++] = SS;
          else
            for (let HS = this.indexStart; HS < this.indexStart + this.indexCount; HS += 3) tS[bS++] = SS[HS], tS[bS++] = SS[HS + 1], tS[bS++] = SS[HS + 1], tS[bS++] = SS[HS + 2], tS[bS++] = SS[HS + 2], tS[bS++] = SS[HS];
          this._linesIndexBuffer = HS.createIndexBuffer(tS), this._linesIndexCount = tS.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(SS) {
        const HS = this.hA();
        return !!HS && SS.intersectsBox(HS.boundingBox)
      }
      intersects(SS, HS, gS, tS, bS) {
        const XS = this.zK();
        if (!XS) return null;
        let xS = 3,
          NS = !1;
        switch (XS.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            xS = 1, NS = !0
        }
        return 4 === XS.fillMode ? gS.length ? this._intersectLines(SS, HS, gS, this._mesh.intersectionThreshold, tS) : this._intersectUnIndexedLines(SS, HS, gS, this._mesh.intersectionThreshold, tS) : !gS.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(SS, HS, gS, tS, bS) : this._intersectTriangles(SS, HS, gS, xS, NS, tS, bS)
      }
      _intersectLines(SS, HS, gS, tS, bS) {
        let xS = null;
        for (let NS = this.indexStart; NS < this.indexStart + this.indexCount; NS += 2) {
          const qS = HS[gS[NS]],
            uS = HS[gS[NS + 1]],
            IS = SS.intersectionSegment(qS, uS, tS);
          if (!(IS < 0) && ((bS || !xS || IS < xS.distance) && (xS = new XS.e(null, null, IS), xS.faceId = NS / 2, bS))) break
        }
        return xS
      }
      _intersectUnIndexedLines(SS, HS, gS, tS, bS) {
        let xS = null;
        for (let NS = this.verticesStart; NS < this.verticesStart + this.verticesCount; NS += 2) {
          const gS = HS[NS],
            qS = HS[NS + 1],
            uS = SS.intersectionSegment(gS, qS, tS);
          if (!(uS < 0) && ((bS || !xS || uS < xS.distance) && (xS = new XS.e(null, null, uS), xS.faceId = NS / 2, bS))) break
        }
        return xS
      }
      _intersectTriangles(SS, HS, gS, tS, bS, XS, xS) {
        let NS = null,
          qS = -1;
        for (let uS = this.indexStart; uS < this.indexStart + this.indexCount - (3 - tS); uS += tS) {
          qS++;
          const tS = gS[uS],
            IS = gS[uS + 1],
            fS = gS[uS + 2];
          if (bS && 4294967295 === fS) {
            uS += 2;
            continue
          }
          const kS = HS[tS],
            aS = HS[IS],
            KS = HS[fS];
          if (!kS || !aS || !KS) continue;
          if (xS && !xS(kS, aS, KS, SS, tS, IS, fS)) continue;
          const jS = SS.intersectsTriangle(kS, aS, KS);
          if (jS) {
            if (jS.distance < 0) continue;
            if ((XS || !NS || jS.distance < NS.distance) && (NS = jS, NS.faceId = qS, XS)) break
          }
        }
        return NS
      }
      _intersectUnIndexedTriangles(SS, HS, gS, tS, bS) {
        let XS = null;
        for (let xS = this.verticesStart; xS < this.verticesStart + this.verticesCount; xS += 3) {
          const gS = HS[xS],
            NS = HS[xS + 1],
            qS = HS[xS + 2];
          if (bS && !bS(gS, NS, qS, SS, -1, -1, -1)) continue;
          const uS = SS.intersectsTriangle(gS, NS, qS);
          if (uS) {
            if (uS.distance < 0) continue;
            if ((tS || !XS || uS.distance < XS.distance) && (XS = uS, XS.faceId = xS / 3, tS)) break
          }
        }
        return XS
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(SS, HS) {
        const gS = new IS(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, SS, HS, !1);
        if (!this.IsGlobal) {
          const SS = this.hA();
          if (!SS) return gS;
          gS._boundingInfo = new xS.e(SS.minimum, SS.maximum)
        }
        return gS
      }
      dispose() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.lL().AK()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const HS = this._mesh.dD.indexOf(this);
        this._mesh.dD.splice(HS, 1), this.resetDrawCache(void 0, SS)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(SS, HS, gS, tS, bS) {
        let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = Number.MAX_VALUE,
          NS = -Number.MAX_VALUE;
        const qS = (bS || tS).mgS();
        for (let uS = HS; uS < HS + gS; uS++) {
          const SS = qS[uS];
          SS < xS && (xS = SS), SS > NS && (NS = SS)
        }
        return new IS(SS, xS, NS - xS + 1, HS, gS, tS, bS, XS)
      }
    }(tS = IS.prototype).projectToRef ?? (tS.projectToRef = (0, uS.i)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);