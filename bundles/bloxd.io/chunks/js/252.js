export const id = 252;
export const ids = [252];
export const modules = {
  39433: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    class ID {
      constructor(DD, CD, cD) {
        this.bu = DD, this.bv = CD, this.distance = cD, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39447: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(36452),
      pD = cD(36446),
      iD = cD(36449);
    class fD {
      constructor(DD, CD, cD) {
        this.vectors = (0, ID.b)(8, pD.p.Zero), this.center = pD.p.Zero(), this.centerWorld = pD.p.Zero(), this.extendSize = pD.p.Zero(), this.extendSizeWorld = pD.p.Zero(), this.directions = (0, ID.b)(3, pD.p.Zero), this.vectorsWorld = (0, ID.b)(8, pD.p.Zero), this.minimumWorld = pD.p.Zero(), this.maximumWorld = pD.p.Zero(), this.minimum = pD.p.Zero(), this.maximum = pD.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(DD, CD, cD)
      }
      reConstruct(DD, CD, cD) {
        const ID = DD.x,
          iD = DD.y,
          fD = DD.z,
          bD = CD.x,
          QD = CD.y,
          wD = CD.z,
          SD = this.vectors;
        this.minimum.K4(ID, iD, fD), this.maximum.K4(bD, QD, wD), SD[0].K4(ID, iD, fD), SD[1].K4(bD, QD, wD), SD[2].K4(bD, iD, fD), SD[3].K4(ID, QD, fD), SD[4].K4(ID, iD, wD), SD[5].K4(bD, QD, fD), SD[6].K4(ID, QD, wD), SD[7].K4(bD, iD, wD), CD.addToRef(DD, this.center).scaleInPlace(.5), CD.subtractToRef(DD, this.extendSize).scaleInPlace(.5), this._worldMatrix = cD || pD.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(DD) {
        const CD = fD._TmpVector3,
          cD = this.maximum.subtractToRef(this.minimum, CD[0]),
          ID = cD.length();
        cD.normalizeFromLength(ID);
        const pD = ID * DD,
          iD = cD.scaleInPlace(.5 * pD),
          bD = this.center.subtractToRef(iD, CD[1]),
          QD = this.center.addToRef(iD, CD[2]);
        return this.reConstruct(bD, QD, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(DD) {
        const CD = this.minimumWorld,
          cD = this.maximumWorld,
          ID = this.directions,
          iD = this.vectorsWorld,
          fD = this.vectors;
        if (DD.isIdentity()) {
          CD.YCD(this.minimum), cD.YCD(this.maximum);
          for (let DD = 0; DD < 8; ++DD) iD[DD].YCD(fD[DD]);
          this.extendSizeWorld.YCD(this.extendSize), this.centerWorld.YCD(this.center)
        } else {
          CD.YF(Number.MAX_VALUE), cD.YF(-Number.MAX_VALUE);
          for (let ID = 0; ID < 8; ++ID) {
            const bD = iD[ID];
            pD.p.TransformCoordinatesToRef(fD[ID], DD, bD), CD.minimizeInPlace(bD), cD.maximizeInPlace(bD)
          }
          cD.subtractToRef(CD, this.extendSizeWorld).scaleInPlace(.5), cD.addToRef(CD, this.centerWorld).scaleInPlace(.5)
        }
        pD.p.FromArrayToRef(DD.m, 0, ID[0]), pD.p.FromArrayToRef(DD.m, 4, ID[1]), pD.p.FromArrayToRef(DD.m, 8, ID[2]), this._worldMatrix = DD
      }
      isInFrustum(DD) {
        return fD.IsInFrustum(this.vectorsWorld, DD)
      }
      isCompletelyInFrustum(DD) {
        return fD.IsCompletelyInFrustum(this.vectorsWorld, DD)
      }
      intersectsPoint(DD) {
        const CD = this.minimumWorld,
          cD = this.maximumWorld,
          ID = CD.x,
          pD = CD.y,
          fD = CD.z,
          bD = cD.x,
          QD = cD.y,
          wD = cD.z,
          SD = DD.x,
          BD = DD.y,
          yD = DD.z,
          MD = -iD.c;
        return !(bD - SD < MD || MD > SD - ID) && (!(QD - BD < MD || MD > BD - pD) && !(wD - yD < MD || MD > yD - fD))
      }
      intersectsSphere(DD) {
        return fD.IntersectsSphere(this.minimumWorld, this.maximumWorld, DD.centerWorld, DD.radiusWorld)
      }
      intersectsMinMax(DD, CD) {
        const cD = this.minimumWorld,
          ID = this.maximumWorld,
          pD = cD.x,
          iD = cD.y,
          fD = cD.z,
          bD = ID.x,
          QD = ID.y,
          wD = ID.z,
          SD = DD.x,
          BD = DD.y,
          yD = DD.z,
          MD = CD.x,
          tD = CD.y,
          ZD = CD.z;
        return !(bD < SD || pD > MD) && (!(QD < BD || iD > tD) && !(wD < yD || fD > ZD))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(DD, CD) {
        return DD.intersectsMinMax(CD.minimumWorld, CD.maximumWorld)
      }
      static IntersectsSphere(DD, CD, cD, ID) {
        const iD = fD._TmpVector3[0];
        pD.p.ClampToRef(cD, DD, CD, iD);
        return pD.p.DistanceSquared(cD, iD) <= ID * ID
      }
      static IsCompletelyInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; ++cD) {
          const ID = CD[cD];
          for (let CD = 0; CD < 8; ++CD)
            if (ID.dotCoordinate(DD[CD]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; ++cD) {
          let ID = !0;
          const pD = CD[cD];
          for (let CD = 0; CD < 8; ++CD)
            if (pD.dotCoordinate(DD[CD]) >= 0) {
              ID = !1;
              break
            } if (ID) return !1
        }
        return !0
      }
    }
    fD._TmpVector3 = (0, ID.b)(3, pD.p.Zero)
  },
  39441: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => BD
    });
    var ID = cD(36452),
      pD = cD(36446),
      iD = cD(39447);
    class fD {
      constructor(DD, CD, cD) {
        this.center = pD.p.Zero(), this.centerWorld = pD.p.Zero(), this.minimum = pD.p.Zero(), this.maximum = pD.p.Zero(), this.reConstruct(DD, CD, cD)
      }
      reConstruct(DD, CD, cD) {
        this.minimum.YCD(DD), this.maximum.YCD(CD);
        const ID = pD.p.Distance(DD, CD);
        CD.addToRef(DD, this.center).scaleInPlace(.5), this.radius = .5 * ID, this._update(cD || pD.d.IdentityReadOnly)
      }
      scale(DD) {
        const CD = fD._TmpVector3,
          cD = this.maximum.subtractToRef(this.minimum, CD[0]),
          ID = cD.length();
        cD.normalizeFromLength(ID);
        const pD = ID * DD,
          iD = cD.scaleInPlace(.5 * pD),
          bD = this.center.subtractToRef(iD, CD[1]),
          QD = this.center.addToRef(iD, CD[2]);
        return this.reConstruct(bD, QD, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(DD) {
        if (DD.isIdentity()) this.centerWorld.YCD(this.center), this.radiusWorld = this.radius;
        else {
          pD.p.TransformCoordinatesToRef(this.center, DD, this.centerWorld);
          const CD = fD._TmpVector3[0];
          pD.p.TransformNormalFromFloatsToRef(1, 1, 1, DD, CD), this.radiusWorld = Math.max(Math.abs(CD.x), Math.abs(CD.y), Math.abs(CD.z)) * this.radius
        }
      }
      isInFrustum(DD) {
        const CD = this.centerWorld,
          cD = this.radiusWorld;
        for (let ID = 0; ID < 6; ID++)
          if (DD[ID].dotCoordinate(CD) <= -cD) return !1;
        return !0
      }
      isCenterInFrustum(DD) {
        const CD = this.centerWorld;
        for (let cD = 0; cD < 6; cD++)
          if (DD[cD].dotCoordinate(CD) < 0) return !1;
        return !0
      }
      intersectsPoint(DD) {
        const CD = pD.p.DistanceSquared(this.centerWorld, DD);
        return !(this.radiusWorld * this.radiusWorld < CD)
      }
      static Intersects(DD, CD) {
        const cD = pD.p.DistanceSquared(DD.centerWorld, CD.centerWorld),
          ID = DD.radiusWorld + CD.radiusWorld;
        return !(ID * ID < cD)
      }
      static CreateFromCenterAndRadius(DD, CD, cD) {
        this._TmpVector3[0].YCD(DD), this._TmpVector3[1].K4(0, 0, CD), this._TmpVector3[2].YCD(DD), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].EcD(this._TmpVector3[1]);
        const ID = new fD(this._TmpVector3[0], this._TmpVector3[2]);
        return ID._worldMatrix = cD || pD.d.Identity(), ID
      }
    }
    fD._TmpVector3 = (0, ID.b)(3, pD.p.Zero);
    const bD = {
        min: 0,
        max: 0
      },
      QD = {
        min: 0,
        max: 0
      },
      wD = (DD, CD, cD) => {
        const ID = pD.p.Dot(CD.centerWorld, DD),
          iD = Math.abs(pD.p.Dot(CD.directions[0], DD)) * CD.extendSize.x + Math.abs(pD.p.Dot(CD.directions[1], DD)) * CD.extendSize.y + Math.abs(pD.p.Dot(CD.directions[2], DD)) * CD.extendSize.z;
        cD.min = ID - iD, cD.max = ID + iD
      },
      SD = (DD, CD, cD) => (wD(DD, CD, bD), wD(DD, cD, QD), !(bD.min > QD.max || QD.min > bD.max));
    class BD {
      constructor(DD, CD, cD) {
        this._isLocked = !1, this.boundingBox = new iD.c(DD, CD, cD), this.rcD = new fD(DD, CD, cD)
      }
      reConstruct(DD, CD, cD) {
        this.boundingBox.reConstruct(DD, CD, cD), this.rcD.reConstruct(DD, CD, cD)
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
      set isLocked(DD) {
        this._isLocked = DD
      }
      update(DD) {
        this._isLocked || (this.boundingBox._update(DD), this.rcD._update(DD))
      }
      centerOn(DD, CD) {
        const cD = BD._TmpVector3[0].YCD(DD).EcD(CD),
          ID = BD._TmpVector3[1].YCD(DD).addInPlace(CD);
        return this.boundingBox.reConstruct(cD, ID, this.boundingBox.getWorldMatrix()), this.rcD.reConstruct(cD, ID, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(DD) {
        const CD = pD.p.Minimize(this.minimum, DD),
          cD = pD.p.Maximize(this.maximum, DD);
        return this.reConstruct(CD, cD, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(DD) {
        const CD = pD.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(CD);
        const cD = pD.l.cZ[0];
        return pD.p.TransformCoordinatesToRef(DD.boundingBox.minimumWorld, CD, cD), this.encapsulate(cD), pD.p.TransformCoordinatesToRef(DD.boundingBox.maximumWorld, CD, cD), this.encapsulate(cD), this
      }
      scale(DD) {
        return this.boundingBox.scale(DD), this.rcD.scale(DD), this
      }
      isInFrustum(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === CD || 3 === CD) && this.rcD.isCenterInFrustum(DD)) return !0;
        if (!this.rcD.isInFrustum(DD)) return !1;
        return !(1 !== CD && 3 !== CD) || this.boundingBox.isInFrustum(DD)
      }
      get diagonalLength() {
        const DD = this.boundingBox;
        return DD.maximumWorld.subtractToRef(DD.minimumWorld, BD._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(DD) {
        return this.boundingBox.isCompletelyInFrustum(DD)
      }
      _checkCollision(DD) {
        return DD._canDoCollision(this.rcD.centerWorld, this.rcD.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(DD) {
        return !!this.rcD.centerWorld && (!!this.rcD.intersectsPoint(DD) && !!this.boundingBox.intersectsPoint(DD))
      }
      intersects(DD, CD) {
        if (!fD.Intersects(this.rcD, DD.rcD)) return !1;
        if (!iD.c.Intersects(this.boundingBox, DD.boundingBox)) return !1;
        if (!CD) return !0;
        const cD = this.boundingBox,
          ID = DD.boundingBox;
        return !!SD(cD.directions[0], cD, ID) && (!!SD(cD.directions[1], cD, ID) && (!!SD(cD.directions[2], cD, ID) && (!!SD(ID.directions[0], cD, ID) && (!!SD(ID.directions[1], cD, ID) && (!!SD(ID.directions[2], cD, ID) && (!!SD(pD.p.Cross(cD.directions[0], ID.directions[0]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[0], ID.directions[1]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[0], ID.directions[2]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[1], ID.directions[0]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[1], ID.directions[1]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[1], ID.directions[2]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[2], ID.directions[0]), cD, ID) && (!!SD(pD.p.Cross(cD.directions[2], ID.directions[1]), cD, ID) && !!SD(pD.p.Cross(cD.directions[2], ID.directions[2]), cD, ID))))))))))))))
      }
    }
    BD._TmpVector3 = (0, ID.b)(2, pD.p.Zero)
  },
  39460: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => QD,
      m: () => bD,
      o: () => fD
    });
    var ID = cD(39296),
      pD = cD(36446);

    function iD(DD) {
      -1 === DD.indexOf("vClipPlane") && DD.push("vClipPlane"), -1 === DD.indexOf("vClipPlane2") && DD.push("vClipPlane2"), -1 === DD.indexOf("vClipPlane3") && DD.push("vClipPlane3"), -1 === DD.indexOf("vClipPlane4") && DD.push("vClipPlane4"), -1 === DD.indexOf("vClipPlane5") && DD.push("vClipPlane5"), -1 === DD.indexOf("vClipPlane6") && DD.push("vClipPlane6")
    }

    function fD(DD, CD, cD) {
      const ID = !!(DD.clipPlane ?? CD.clipPlane),
        pD = !!(DD.clipPlane2 ?? CD.clipPlane2),
        iD = !!(DD.clipPlane3 ?? CD.clipPlane3),
        fD = !!(DD.clipPlane4 ?? CD.clipPlane4),
        bD = !!(DD.clipPlane5 ?? CD.clipPlane5),
        QD = !!(DD.clipPlane6 ?? CD.clipPlane6);
      ID && cD.push("#define CLIPPLANE"), pD && cD.push("#define CLIPPLANE2"), iD && cD.push("#define CLIPPLANE3"), fD && cD.push("#define CLIPPLANE4"), bD && cD.push("#define CLIPPLANE5"), QD && cD.push("#define CLIPPLANE6")
    }

    function bD(DD, CD, cD) {
      let ID = !1;
      const pD = !!(DD.clipPlane ?? CD.clipPlane),
        iD = !!(DD.clipPlane2 ?? CD.clipPlane2),
        fD = !!(DD.clipPlane3 ?? CD.clipPlane3),
        bD = !!(DD.clipPlane4 ?? CD.clipPlane4),
        QD = !!(DD.clipPlane5 ?? CD.clipPlane5),
        wD = !!(DD.clipPlane6 ?? CD.clipPlane6);
      return cD.CLIPPLANE !== pD && (cD.CLIPPLANE = pD, ID = !0), cD.CLIPPLANE2 !== iD && (cD.CLIPPLANE2 = iD, ID = !0), cD.CLIPPLANE3 !== fD && (cD.CLIPPLANE3 = fD, ID = !0), cD.CLIPPLANE4 !== bD && (cD.CLIPPLANE4 = bD, ID = !0), cD.CLIPPLANE5 !== QD && (cD.CLIPPLANE5 = QD, ID = !0), cD.CLIPPLANE6 !== wD && (cD.CLIPPLANE6 = wD, ID = !0), ID
    }

    function QD(DD, CD, cD) {
      let ID = CD.clipPlane ?? cD.clipPlane;
      wD(DD, "vClipPlane", ID), ID = CD.clipPlane2 ?? cD.clipPlane2, wD(DD, "vClipPlane2", ID), ID = CD.clipPlane3 ?? cD.clipPlane3, wD(DD, "vClipPlane3", ID), ID = CD.clipPlane4 ?? cD.clipPlane4, wD(DD, "vClipPlane4", ID), ID = CD.clipPlane5 ?? cD.clipPlane5, wD(DD, "vClipPlane5", ID), ID = CD.clipPlane6 ?? cD.clipPlane6, wD(DD, "vClipPlane6", ID)
    }

    function wD(DD, CD, cD) {
      if (cD) {
        const iD = ID.b.hq()?.floatingOriginOffset || pD.p.ZeroReadOnly;
        DD.setFloat4(CD, cD.normal.x, cD.normal.y, cD.normal.z, cD.d + pD.p.Dot(cD.normal, iD))
      }
    }
  },
  39474: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    class ID {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(DD, CD) {
        this._defines[DD] || (DD < this._currentRank && (this._currentRank = DD), DD > this._maxRank && (this._maxRank = DD), this._defines[DD] = new Array), this._defines[DD].push(CD)
      }
      addCPUSkinningFallback(DD, CD) {
        this._mesh = CD, DD < this._currentRank && (this._currentRank = DD), DD > this._maxRank && (this._maxRank = DD)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(DD, CD) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, DD = DD.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), CD._bonesComputationForcedToCPU = !0;
          const cD = this._mesh.hq();
          for (let DD = 0; DD < cD.meshes.length; DD++) {
            const ID = cD.meshes[DD];
            if (ID.material) {
              if (ID.computeBonesUsingShaders && 0 !== ID.numBoneInfluencers)
                if (ID.material.getEffect() === CD) ID.computeBonesUsingShaders = !1;
                else if (ID.IH)
                for (const DD of ID.IH) {
                  if (DD.effect === CD) {
                    ID.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && ID.computeBonesUsingShaders && ID.numBoneInfluencers > 0 && (ID.computeBonesUsingShaders = !1)
          }
        } else {
          const CD = this._defines[this._currentRank];
          if (CD)
            for (let cD = 0; cD < CD.length; cD++) DD = DD.replace("#define " + CD[cD], "");
          this._currentRank++
        }
        return DD
      }
    }
  },
  39416: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ND
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39245),
      fD = cD(36473),
      bD = cD(36464),
      QD = cD(39425),
      wD = cD(39281),
      SD = cD(38048),
      BD = cD(37167),
      yD = cD(39456),
      MD = cD(39174);
    let tD = (() => {
      var DD;
      let CD, cD, iD, fD, bD, QD, wD, SD, BD, yD, tD, ZD, oD = [];
      return DD = class {
        constructor() {
          this._func = (0, ID.m)(this, oD), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(DD) {
          this._func = DD
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(DD) {
          this._backFunc = DD
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(DD) {
          this._funcRef = DD
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(DD) {
          this._funcMask = DD
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(DD) {
          this._opStencilFail = DD
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(DD) {
          this._opDepthFail = DD
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(DD) {
          this._opStencilDepthPass = DD
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(DD) {
          this._backOpStencilFail = DD
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(DD) {
          this._backOpDepthFail = DD
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(DD) {
          this._backOpStencilDepthPass = DD
        }
        get mask() {
          return this._mask
        }
        set mask(DD) {
          this._mask = DD
        }
        get enabled() {
          return this._enabled
        }
        set enabled(DD) {
          this._enabled = DD
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(DD) {
          MD.d.Clone((() => DD), this)
        }
        serialize() {
          return MD.d.Serialize(this)
        }
        parse(DD, CD, cD) {
          MD.d.Parse((() => this), DD, CD, cD)
        }
      }, (() => {
        const MD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], fD = [(0, pD.G)()], bD = [(0, pD.G)()], QD = [(0, pD.G)()], wD = [(0, pD.G)()], SD = [(0, pD.G)()], BD = [(0, pD.G)()], yD = [(0, pD.G)()], tD = [(0, pD.G)()], ZD = [(0, pD.G)()], (0, ID.k)(DD, null, CD, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: DD => "func" in DD,
            get: DD => DD.func
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, cD, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: DD => "backFunc" in DD,
            get: DD => DD.backFunc
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, iD, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: DD => "funcRef" in DD,
            get: DD => DD.funcRef
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, fD, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "funcMask" in DD,
            get: DD => DD.funcMask
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, bD, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "opStencilFail" in DD,
            get: DD => DD.opStencilFail
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, QD, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "opDepthFail" in DD,
            get: DD => DD.opDepthFail
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, wD, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: DD => "opStencilDepthPass" in DD,
            get: DD => DD.opStencilDepthPass
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, SD, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "backOpStencilFail" in DD,
            get: DD => DD.backOpStencilFail
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, BD, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: DD => "backOpDepthFail" in DD,
            get: DD => DD.backOpDepthFail
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, yD, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: DD => "backOpStencilDepthPass" in DD,
            get: DD => DD.backOpStencilDepthPass
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, tD, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: DD => "mask" in DD,
            get: DD => DD.mask
          },
          metadata: MD
        }, null, oD), (0, ID.k)(DD, null, ZD, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "enabled" in DD,
            get: DD => DD.enabled
          },
          metadata: MD
        }, null, oD), MD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MD
        })
      })(), DD
    })();
    var ZD = cD(39458),
      oD = cD(39062),
      vD = cD(39027);
    let ND = (() => {
      var DD;
      let CD, cD, vD, ND, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD, KD, aD, VD, zD, jD, lD, LD, TD, GD, RD, kD, dD, YD, WD, sD = [],
        ED = [],
        eD = [],
        uD = [],
        hD = [],
        rD = [],
        AD = [],
        FD = [],
        DC = [],
        CC = [],
        cC = [],
        IC = [],
        pC = [],
        iC = [],
        fC = [],
        bC = [],
        QC = [],
        wC = [],
        SC = [],
        BC = [],
        yC = [],
        MC = [],
        tC = [],
        ZC = [],
        oC = [],
        vC = [],
        NC = [],
        gC = [],
        XC = [],
        mC = [],
        nC = [],
        OC = [],
        PC = [],
        HC = [],
        UC = [],
        xC = [],
        qC = [],
        JC = [],
        KC = [],
        aC = [],
        VC = [],
        zC = [],
        jC = [],
        lC = [],
        LC = [],
        TC = [],
        GC = [],
        RC = [],
        kC = [],
        dC = [],
        YC = [];
      return DD = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(CD) {
          this._useVertexPulling !== CD && (this._useVertexPulling = CD, this.sDD(DD.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(DD) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(CD) {
          if (this._alpha === CD) return;
          const cD = this._alpha;
          this._alpha = CD, 1 !== cD && 1 !== CD || this.sDD(DD.MiscDirtyFlag + DD.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(CD) {
          this._backFaceCulling !== CD && (this._backFaceCulling = CD, this.sDD(DD.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(CD) {
          const cD = Math.max(0, Math.min(0 | CD, 4));
          this._textureRepetitionMode !== cD && (this._textureRepetitionMode = cD, this.sDD(DD.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(CD) {
          this._cullBackFaces !== CD && (this._cullBackFaces = CD, this.sDD(DD.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(DD) {
          this._blockDirtyMechanism !== DD && (this._blockDirtyMechanism = DD, DD || this.markDirty())
        }
        atomicMaterialsUpdate(DD) {
          this.blockDirtyMechanism = !0;
          try {
            DD(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(DD) {
          this._onDisposeObserver && this.Aq.remove(this._onDisposeObserver), this._onDisposeObserver = this.Aq.add(DD)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new fD.c), this._onBindObservable
        }
        set onBind(DD) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(DD)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new fD.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new fD.c), this._onEffectCreatedObservable
        }
        set alphaMode(DD) {
          this._alphaMode[0] = DD
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[cD] !== CD && (this._alphaMode[cD] = CD, this.sDD(DD.TextureDirtyFlag))
        }
        set needDepthPrePass(DD) {
          this._needDepthPrePass !== DD && (this._needDepthPrePass = DD, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(CD) {
          this._fogEnabled !== CD && (this._fogEnabled = CD, this.sDD(DD.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case DD.WireFrameFillMode:
            case DD.LineListDrawMode:
            case DD.LineLoopDrawMode:
            case DD.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(CD) {
          this.fillMode = CD ? DD.WireFrameFillMode : DD.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case DD.PointFillMode:
            case DD.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(CD) {
          this.fillMode = CD ? DD.PointFillMode : DD.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(CD) {
          this._fillMode !== CD && (this._fillMode = CD, this.sDD(DD.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(DD) {
          const CD = this.hq().DZ().getCaps().fragmentDepthSupported;
          DD && !CD && SD.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = DD && CD, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(DD) {
          this._isVertexOutputInvariant !== DD && (this._isVertexOutputInvariant = DD, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(DD) {
          this._drawWrapper = DD
        }
        constructor(CD, cD, pD) {
          let QD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, ID.m)(this, sD), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, ID.m)(this, ED, void 0), this.uniqueId = ((0, ID.m)(this, eD), (0, ID.m)(this, uD, void 0)), this._loadedUniqueId = (0, ID.m)(this, hD), this.name = (0, ID.m)(this, rD, void 0), this.metadata = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, null)), this._internalMetadata = (0, ID.m)(this, DC), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, ID.m)(this, CC, !1), this.checkReadyOnlyOnce = ((0, ID.m)(this, cC), (0, ID.m)(this, IC, !1)), this.state = ((0, ID.m)(this, pC), (0, ID.m)(this, iC, "")), this._alpha = ((0, ID.m)(this, fC), (0, ID.m)(this, bC, 1)), this.inspectableCustomProperties = (0, ID.m)(this, QC), this._backFaceCulling = (0, ID.m)(this, wC, !0), this._textureRepetitionMode = ((0, ID.m)(this, SC), (0, ID.m)(this, BC, 0)), this.textureRepetitionHexTilingParams = ((0, ID.m)(this, yC), (0, ID.m)(this, MC, [1, .6, 7, .5])), this._cullBackFaces = ((0, ID.m)(this, tC), (0, ID.m)(this, ZC, !0)), this._blockDirtyMechanism = ((0, ID.m)(this, oC), !1), this.sideOrientation = (0, ID.m)(this, vC, null), this.onCompiled = ((0, ID.m)(this, NC), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Aq = new fD.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, ID.m)(this, gC, [2]), this._needDepthPrePass = ((0, ID.m)(this, XC), (0, ID.m)(this, mC, !1)), this.disableDepthWrite = ((0, ID.m)(this, nC), (0, ID.m)(this, OC, !1)), this.disableColorWrite = ((0, ID.m)(this, PC), (0, ID.m)(this, HC, !1)), this.forceDepthWrite = ((0, ID.m)(this, UC), (0, ID.m)(this, xC, !1)), this.depthFunction = ((0, ID.m)(this, qC), (0, ID.m)(this, JC, 0)), this.separateCullingPass = ((0, ID.m)(this, KC), (0, ID.m)(this, aC, !1)), this._fogEnabled = ((0, ID.m)(this, VC), (0, ID.m)(this, zC, !0)), this.pointSize = ((0, ID.m)(this, jC), (0, ID.m)(this, lC, 1)), this.zOffset = ((0, ID.m)(this, LC), (0, ID.m)(this, TC, 0)), this.zOffsetUnits = ((0, ID.m)(this, GC), (0, ID.m)(this, RC, 0)), this.clipPlane = (0, ID.m)(this, kC), this.stencil = new tD, this._isVertexOutputInvariant = (0, ID.m)(this, dC, DD.ForceVertexOutputInvariant), this._materialContext = (0, ID.m)(this, YC), this._useUBO = !1, this._fillMode = DD.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = CD;
          const SD = cD || bD.b.LastCreatedScene;
          SD && (this._scene = SD, this._dirtyCallbacks = {}, this._forceGLSL = QD, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = CD || iD.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.DZ().createMaterialContext(), this._drawWrapper = new yD.c(this._scene.DZ(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new wD.b(this._scene.DZ(), void 0, void 0, CD), this._useUBO = this.hq().DZ().supportsUniformBuffers, this._createUniformBuffer(), pD || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), DD.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const DD = this.hq().DZ();
          this._uniformBuffer?.dispose(), DD.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new wD.b(DD, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new wD.b(this._scene.DZ(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(DD) {
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
        isReady(DD, CD) {
          return !0
        }
        isReadyForSubMesh(DD, CD, cD) {
          const ID = CD.materialDefines;
          return !!ID && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ID, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        hq() {
          return this._scene
        }
        _getEffectiveOrientation(DD) {
          return null !== this.sideOrientation ? this.sideOrientation : DD.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(DD) {
          this._transparencyMode = DD
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === DD.MATERIAL_ALPHABLEND || this._transparencyMode === DD.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === DD.MATERIAL_ALPHATEST || this._transparencyMode === DD.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === DD.MATERIAL_OPAQUE || this._transparencyMode === DD.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(DD) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : DD.visibility < 1 || !this._disableAlphaBlending && (DD.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(DD) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(DD) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cD = this.hq().meshes;
          for (const DD of cD)
            if (DD.IH)
              for (const cD of DD.IH)
                if (cD.iZ() === this)
                  for (const DD of cD._drawWrappers) DD && this._materialContext === DD.materialContext && (DD._wasPreviouslyReady = !1, DD._wasPreviouslyUsingInstances = null, DD._forceRebindOnNextCall = CD);
          CD && this.sDD(DD.AllDirtyFlag)
        }
        _preBind(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const ID = this._scene.DZ(),
            pD = (null == cD ? this.sideOrientation : cD) === DD.ClockWiseSideOrientation,
            iD = CD || this._getDrawWrapper();
          return (0, oD.e)(iD) && iD.materialContext && (iD.materialContext.useVertexPulling = this.useVertexPulling), ID.enableEffect(iD), ID.setState(this.backFaceCulling, this.zOffset, !1, pD, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), pD
        }
        bind(DD, CD) {}
        buildUniformLayout() {
          const DD = this._uniformBuffer;
          this._eventInfo.ubo = DD, this._callbackPluginEventGeneric(8, this._eventInfo), DD.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(DD, CD, cD) {
          const ID = cD._drawWrapper;
          this._eventInfo.subMesh = cD, this._callbackPluginEventBindForSubMesh(this._eventInfo), ID._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(DD) {}
        bindView(DD) {
          this._useUBO ? this._needToBindSceneUbo = !0 : DD.setMatrix("view", this.hq().getViewMatrix())
        }
        bindViewProjection(DD) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (DD.setMatrix("viewProjection", this.hq().getTransformMatrix()), DD.setMatrix("projection", this.hq().getProjectionMatrix()), DD.setMatrix("inverseProjection", this.hq().getInverseProjectionMatrix()))
        }
        bindEyePosition(DD, CD) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(DD, CD)
        }
        _afterBind(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && CD && (this._needToBindSceneUbo = !1, (0, ZD.z)(CD, this.hq().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = DD ? DD.visibility : 1, this._onBindObservable && DD && this._onBindObservable.notifyObservers(DD), this.disableDepthWrite) {
            const DD = this._scene.DZ();
            this._cachedDepthWriteState = DD.getDepthWrite(), DD.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const DD = this._scene.DZ();
            this._cachedColorWriteState = DD.getColorWrite(), DD.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const DD = this._scene.DZ();
            this._cachedDepthFunctionState = DD.getDepthFunction() || 0, DD.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.DZ().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.DZ().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.DZ().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(DD) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = DD, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(DD) {
          return null
        }
        _clonePlugins(CD, cD) {
          const ID = {};
          if (this._serializePlugins(ID), DD._ParsePlugins(ID, CD, this._scene, cD), this.pluginManager)
            for (const DD of this.pluginManager._plugins) {
              const cD = CD.pluginManager.getPlugin(DD.name);
              cD && DD.copyTo(cD)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const DD = [];
            for (const CD in this.meshMap) {
              const cD = this.meshMap[CD];
              cD && DD.push(cD)
            }
            return DD
          }
          return this._scene.meshes.filter((DD => DD.material === this))
        }
        forceCompilation(DD, CD, cD, ID) {
          const pD = {
              clipPlane: !1,
              useInstances: !1,
              ...cD
            },
            iD = this.hq(),
            fD = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const bD = () => {
            if (!this._scene || !this._scene.DZ()) return;
            const cD = iD.clipPlane;
            if (pD.clipPlane && (iD.clipPlane = new BD.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let cD = !0,
                iD = null;
              if (DD.IH) {
                const CD = new QD.c(0, 0, 0, 0, 0, DD, void 0, !1, !1);
                CD.materialDefines && (CD.materialDefines._renderId = -1), this.isReadyForSubMesh(DD, CD, pD.useInstances) || (CD.effect && CD.effect.getCompilationError() && CD.effect.allFallbacksProcessed() ? iD = CD.effect.getCompilationError() : (cD = !1, setTimeout(bD, 16)))
              }
              cD && (this.allowShaderHotSwapping = fD, iD && ID && ID(iD), CD && CD(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = fD, CD && CD(this)) : setTimeout(bD, 16);
            pD.clipPlane && (iD.clipPlane = cD)
          };
          bD()
        }
        async forceCompilationAsync(DD, CD) {
          return await new Promise(((cD, ID) => {
            this.forceCompilation(DD, (() => {
              cD()
            }), CD, (DD => {
              ID(DD)
            }))
          }))
        }
        sDD(CD) {
          this.hq().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (DD._DirtyCallbackArray.length = 0, CD & DD.ImageProcessingDirtyFlag && DD._DirtyCallbackArray.push(DD._ImageProcessingDirtyCallBack), CD & DD.TextureDirtyFlag && DD._DirtyCallbackArray.push(DD._TextureDirtyCallBack), CD & DD.LightDirtyFlag && DD._DirtyCallbackArray.push(DD._LightsDirtyCallBack), CD & DD.FresnelDirtyFlag && DD._DirtyCallbackArray.push(DD._FresnelDirtyCallBack), CD & DD.AttributesDirtyFlag && DD._DirtyCallbackArray.push(DD._AttributeDirtyCallBack), CD & DD.MiscDirtyFlag && DD._DirtyCallbackArray.push(DD._MiscDirtyCallBack), CD & DD.PrePassDirtyFlag && DD._DirtyCallbackArray.push(DD._PrePassDirtyCallBack), DD._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(DD._RunDirtyCallBacks), this.hq().resetCachedMaterial())
        }
        resetDrawCache() {
          const DD = this.hq().meshes;
          for (const CD of DD)
            if (CD.IH)
              for (const DD of CD.IH) DD.iZ() === this && DD.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(DD) {
          const CD = this.hq();
          if (CD.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const cD = CD.meshes;
          for (const ID of cD)
            if (ID.IH)
              for (const cD of ID.IH) {
                if ((cD.iZ() || (CD._hasDefaultMaterial ? CD.defaultMaterial : null)) === this)
                  for (const CD of cD._drawWrappers) CD && CD.defines && CD.defines.markAllAsDirty && this._materialContext === CD.materialContext && DD(CD.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.hq().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const DD = this.hq().enablePrePassRenderer();
          DD && DD.sDD()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(DD._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(DD._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(DD._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(DD._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(DD._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(DD._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(DD._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(DD._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(DD._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(DD._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const DD = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Aq.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(DD)
            }))
          }
        }
        setPrePassRenderer(DD) {
          return !1
        }
        dispose(DD, CD, cD) {
          const ID = this.hq();
          if (ID.stopAnimation(this), ID.freeProcessedMaterials(), ID.removeMaterial(this), this._eventInfo.forceDisposeTextures = CD, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const DD = this._parentContainer.materials.indexOf(this);
            DD > -1 && this._parentContainer.materials.splice(DD, 1), this._parentContainer = null
          }
          if (!0 !== cD)
            if (this.meshMap)
              for (const pD in this.meshMap) {
                const DD = this.meshMap[pD];
                this._disposeMeshResources(DD)
              } else {
                const DD = ID.meshes;
                for (const CD of DD) this._disposeMeshResources(CD)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Aq.notifyObservers(this), this.Aq.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(DD) {
          if (!DD) return;
          const CD = DD.geometry,
            cD = DD._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (DD.IH && cD)
              for (const ID of DD.IH) {
                const DD = ID._drawWrappers;
                for (let pD = 0; pD < DD.length; pD++) {
                  const iD = DD[pD]?.effect;
                  if (!iD) continue;
                  cD[pD] === this && (CD?._releaseVertexArrayObject(iD), ID._removeDrawWrapper(pD, !0, !0))
                }
              }
          } else CD?._releaseVertexArrayObject(this._drawWrapper.effect);
          DD.material !== this || DD.OID || (DD.material = null)
        }
        serialize() {
          const DD = MD.d.Serialize(this);
          return DD.stencil = this.stencil.serialize(), DD.uniqueId = this.uniqueId, this._serializePlugins(DD), DD
        }
        _serializePlugins(DD) {
          if (DD.plugins = {}, this.pluginManager)
            for (const CD of this.pluginManager._plugins) CD.doNotSerialize || (DD.plugins[CD.getClassName()] = CD.serialize())
        }
        static ParseAlphaMode(DD, CD) {
          void 0 !== DD._alphaMode ? CD._alphaMode = Array.isArray(DD._alphaMode) ? [...DD._alphaMode] : [DD._alphaMode] : void 0 !== DD.alphaMode ? CD._alphaMode = Array.isArray(DD.alphaMode) ? [...DD.alphaMode] : [DD.alphaMode] : CD._alphaMode = [2]
        }
        static Parse(CD, cD, ID) {
          if (CD.customType) {
            if ("BABYLON.PBRMaterial" === CD.customType && CD.overloadedAlbedo && (CD.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return SD.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else CD.customType = "BABYLON.StandardMaterial";
          const pD = iD.g.Instantiate(CD.customType).Parse(CD, cD, ID);
          return pD._loadedUniqueId = CD.uniqueId, DD.ParseAlphaMode(CD, pD), pD
        }
        static _ParsePlugins(DD, CD, cD, ID) {
          if (DD.plugins)
            for (const pD in DD.plugins) {
              const fD = DD.plugins[pD];
              let bD = CD.pluginManager?.getPlugin(fD.name);
              if (!bD) {
                const DD = iD.g.Instantiate("BABYLON." + pD);
                DD && (bD = new DD(CD))
              }
              bD?.parse(fD, cD, ID)
            }
        }
      }, (() => {
        const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], vD = [(0, pD.G)()], ND = [(0, pD.G)()], gD = [(0, pD.G)()], XD = [(0, pD.G)()], mD = [(0, pD.G)()], nD = [(0, pD.G)("alpha")], OD = [(0, pD.G)("backFaceCulling")], PD = [(0, pD.G)("textureRepetitionMode")], HD = [(0, pD.G)("textureRepetitionHexTilingParams")], UD = [(0, pD.G)("cullBackFaces")], xD = [(0, pD.G)()], qD = [(0, pD.G)()], JD = [(0, pD.G)()], KD = [(0, pD.G)()], aD = [(0, pD.G)()], VD = [(0, pD.G)()], zD = [(0, pD.G)()], jD = [(0, pD.G)()], lD = [(0, pD.G)("fogEnabled")], LD = [(0, pD.G)()], TD = [(0, pD.G)()], GD = [(0, pD.G)()], RD = [(0, pD.G)()], kD = [(0, pD.G)()], dD = [(0, pD.G)()], YD = [(0, pD.G)()], WD = [(0, pD.G)()], (0, ID.k)(DD, null, RD, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: DD => "pointsCloud" in DD,
            get: DD => DD.pointsCloud
          },
          metadata: iD
        }, null, sD), (0, ID.k)(DD, null, kD, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "fillMode" in DD,
            get: DD => DD.fillMode
          },
          metadata: iD
        }, null, sD), (0, ID.k)(DD, null, dD, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLogarithmicDepth" in DD,
            get: DD => DD.useLogarithmicDepth
          },
          metadata: iD
        }, null, sD), (0, ID.k)(DD, null, WD, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "transparencyMode" in DD,
            get: DD => DD.transparencyMode
          },
          metadata: iD
        }, null, sD), (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: DD => "id" in DD,
            get: DD => DD.id,
            set: (DD, CD) => {
              DD.id = CD
            }
          },
          metadata: iD
        }, ED, eD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: DD => "uniqueId" in DD,
            get: DD => DD.uniqueId,
            set: (DD, CD) => {
              DD.uniqueId = CD
            }
          },
          metadata: iD
        }, uD, hD), (0, ID.k)(null, null, vD, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: DD => "name" in DD,
            get: DD => DD.name,
            set: (DD, CD) => {
              DD.name = CD
            }
          },
          metadata: iD
        }, rD, AD), (0, ID.k)(null, null, ND, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: DD => "metadata" in DD,
            get: DD => DD.metadata,
            set: (DD, CD) => {
              DD.metadata = CD
            }
          },
          metadata: iD
        }, FD, DC), (0, ID.k)(null, null, gD, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: DD => "checkReadyOnEveryCall" in DD,
            get: DD => DD.checkReadyOnEveryCall,
            set: (DD, CD) => {
              DD.checkReadyOnEveryCall = CD
            }
          },
          metadata: iD
        }, CC, cC), (0, ID.k)(null, null, XD, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: DD => "checkReadyOnlyOnce" in DD,
            get: DD => DD.checkReadyOnlyOnce,
            set: (DD, CD) => {
              DD.checkReadyOnlyOnce = CD
            }
          },
          metadata: iD
        }, IC, pC), (0, ID.k)(null, null, mD, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: DD => "state" in DD,
            get: DD => DD.state,
            set: (DD, CD) => {
              DD.state = CD
            }
          },
          metadata: iD
        }, iC, fC), (0, ID.k)(null, null, nD, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "_alpha" in DD,
            get: DD => DD._alpha,
            set: (DD, CD) => {
              DD._alpha = CD
            }
          },
          metadata: iD
        }, bC, QC), (0, ID.k)(null, null, OD, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: DD => "_backFaceCulling" in DD,
            get: DD => DD._backFaceCulling,
            set: (DD, CD) => {
              DD._backFaceCulling = CD
            }
          },
          metadata: iD
        }, wC, SC), (0, ID.k)(null, null, PD, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_textureRepetitionMode" in DD,
            get: DD => DD._textureRepetitionMode,
            set: (DD, CD) => {
              DD._textureRepetitionMode = CD
            }
          },
          metadata: iD
        }, BC, yC), (0, ID.k)(null, null, HD, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: DD => "textureRepetitionHexTilingParams" in DD,
            get: DD => DD.textureRepetitionHexTilingParams,
            set: (DD, CD) => {
              DD.textureRepetitionHexTilingParams = CD
            }
          },
          metadata: iD
        }, MC, tC), (0, ID.k)(null, null, UD, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: DD => "_cullBackFaces" in DD,
            get: DD => DD._cullBackFaces,
            set: (DD, CD) => {
              DD._cullBackFaces = CD
            }
          },
          metadata: iD
        }, ZC, oC), (0, ID.k)(null, null, xD, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: DD => "sideOrientation" in DD,
            get: DD => DD.sideOrientation,
            set: (DD, CD) => {
              DD.sideOrientation = CD
            }
          },
          metadata: iD
        }, vC, NC), (0, ID.k)(null, null, qD, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_alphaMode" in DD,
            get: DD => DD._alphaMode,
            set: (DD, CD) => {
              DD._alphaMode = CD
            }
          },
          metadata: iD
        }, gC, XC), (0, ID.k)(null, null, JD, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: DD => "_needDepthPrePass" in DD,
            get: DD => DD._needDepthPrePass,
            set: (DD, CD) => {
              DD._needDepthPrePass = CD
            }
          },
          metadata: iD
        }, mC, nC), (0, ID.k)(null, null, KD, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableDepthWrite" in DD,
            get: DD => DD.disableDepthWrite,
            set: (DD, CD) => {
              DD.disableDepthWrite = CD
            }
          },
          metadata: iD
        }, OC, PC), (0, ID.k)(null, null, aD, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableColorWrite" in DD,
            get: DD => DD.disableColorWrite,
            set: (DD, CD) => {
              DD.disableColorWrite = CD
            }
          },
          metadata: iD
        }, HC, UC), (0, ID.k)(null, null, VD, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceDepthWrite" in DD,
            get: DD => DD.forceDepthWrite,
            set: (DD, CD) => {
              DD.forceDepthWrite = CD
            }
          },
          metadata: iD
        }, xC, qC), (0, ID.k)(null, null, zD, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: DD => "depthFunction" in DD,
            get: DD => DD.depthFunction,
            set: (DD, CD) => {
              DD.depthFunction = CD
            }
          },
          metadata: iD
        }, JC, KC), (0, ID.k)(null, null, jD, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: DD => "separateCullingPass" in DD,
            get: DD => DD.separateCullingPass,
            set: (DD, CD) => {
              DD.separateCullingPass = CD
            }
          },
          metadata: iD
        }, aC, VC), (0, ID.k)(null, null, lD, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "_fogEnabled" in DD,
            get: DD => DD._fogEnabled,
            set: (DD, CD) => {
              DD._fogEnabled = CD
            }
          },
          metadata: iD
        }, zC, jC), (0, ID.k)(null, null, LD, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: DD => "pointSize" in DD,
            get: DD => DD.pointSize,
            set: (DD, CD) => {
              DD.pointSize = CD
            }
          },
          metadata: iD
        }, lC, LC), (0, ID.k)(null, null, TD, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: DD => "zOffset" in DD,
            get: DD => DD.zOffset,
            set: (DD, CD) => {
              DD.zOffset = CD
            }
          },
          metadata: iD
        }, TC, GC), (0, ID.k)(null, null, GD, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: DD => "zOffsetUnits" in DD,
            get: DD => DD.zOffsetUnits,
            set: (DD, CD) => {
              DD.zOffsetUnits = CD
            }
          },
          metadata: iD
        }, RC, kC), (0, ID.k)(null, null, YD, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: DD => "_isVertexOutputInvariant" in DD,
            get: DD => DD._isVertexOutputInvariant,
            set: (DD, CD) => {
              DD._isVertexOutputInvariant = CD
            }
          },
          metadata: iD
        }, dC, YC), iD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iD
        })
      })(), DD.TriangleFillMode = 0, DD.WireFrameFillMode = 1, DD.PointFillMode = 2, DD.PointListDrawMode = 3, DD.LineListDrawMode = 4, DD.LineLoopDrawMode = 5, DD.LineStripDrawMode = 6, DD.TriangleStripDrawMode = 7, DD.TriangleFanDrawMode = 8, DD.ClockWiseSideOrientation = 0, DD.CounterClockWiseSideOrientation = 1, DD.ImageProcessingDirtyFlag = 64, DD.TextureDirtyFlag = 1, DD.LightDirtyFlag = 2, DD.FresnelDirtyFlag = 4, DD.AttributesDirtyFlag = 8, DD.MiscDirtyFlag = 16, DD.PrePassDirtyFlag = 32, DD.AllDirtyFlag = 127, DD.MATERIAL_OPAQUE = 0, DD.MATERIAL_ALPHATEST = 1, DD.MATERIAL_ALPHABLEND = 2, DD.MATERIAL_ALPHATESTANDBLEND = 3, DD.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, DD.MATERIAL_NORMALBLENDMETHOD_RNM = 1, DD.LIGHTFALLOFF_PHYSICAL = 0, DD.LIGHTFALLOFF_GLTF = 1, DD.LIGHTFALLOFF_STANDARD = 2, DD.OnEventObservable = new fD.c, DD.ForceVertexOutputInvariant = !1, DD._AllDirtyCallBack = DD => DD.markAllAsDirty(), DD._ImageProcessingDirtyCallBack = DD => DD.markAsImageProcessingDirty(), DD._TextureDirtyCallBack = DD => DD.markAsTexturesDirty(), DD._FresnelDirtyCallBack = DD => DD.markAsFresnelDirty(), DD._MiscDirtyCallBack = DD => DD.markAsMiscDirty(), DD._PrePassDirtyCallBack = DD => DD.markAsPrePassDirty(), DD._LightsDirtyCallBack = DD => DD.markAsLightDirty(), DD._AttributeDirtyCallBack = DD => DD.markAsAttributesDirty(), DD._FresnelAndMiscDirtyCallBack = CD => {
        DD._FresnelDirtyCallBack(CD), DD._MiscDirtyCallBack(CD)
      }, DD._TextureAndMiscDirtyCallBack = CD => {
        DD._TextureDirtyCallBack(CD), DD._MiscDirtyCallBack(CD)
      }, DD._DirtyCallbackArray = [], DD._RunDirtyCallBacks = CD => {
        for (const cD of DD._DirtyCallbackArray) cD(CD)
      }, DD
    })();
    Object.getOwnPropertyDescriptor(ND.prototype, "pluginManager") || Object.defineProperty(ND.prototype, "pluginManager", (0, vD.g)("Material", "pluginManager"))
  },
  39466: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD
    });
    var ID = cD(39046);
    class pD {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(DD) {
        this._DiffuseTextureEnabled !== DD && (this._DiffuseTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(DD) {
        this._BaseWeightTextureEnabled !== DD && (this._BaseWeightTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(DD) {
        this._BaseDiffuseRoughnessTextureEnabled !== DD && (this._BaseDiffuseRoughnessTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(DD) {
        this._DetailTextureEnabled !== DD && (this._DetailTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(DD) {
        this._DecalMapEnabled !== DD && (this._DecalMapEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(DD) {
        this._AmbientTextureEnabled !== DD && (this._AmbientTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(DD) {
        this._OpacityTextureEnabled !== DD && (this._OpacityTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(DD) {
        this._ReflectionTextureEnabled !== DD && (this._ReflectionTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(DD) {
        this._EmissiveTextureEnabled !== DD && (this._EmissiveTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(DD) {
        this._SpecularTextureEnabled !== DD && (this._SpecularTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(DD) {
        this._BumpTextureEnabled !== DD && (this._BumpTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(DD) {
        this._LightmapTextureEnabled !== DD && (this._LightmapTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(DD) {
        this._RefractionTextureEnabled !== DD && (this._RefractionTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(DD) {
        this._ColorGradingTextureEnabled !== DD && (this._ColorGradingTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(DD) {
        this._FresnelEnabled !== DD && (this._FresnelEnabled = DD, ID.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(DD) {
        this._ClearCoatTextureEnabled !== DD && (this._ClearCoatTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(DD) {
        this._ClearCoatBumpTextureEnabled !== DD && (this._ClearCoatBumpTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(DD) {
        this._ClearCoatTintTextureEnabled !== DD && (this._ClearCoatTintTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(DD) {
        this._SheenTextureEnabled !== DD && (this._SheenTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(DD) {
        this._AnisotropicTextureEnabled !== DD && (this._AnisotropicTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(DD) {
        this._ThicknessTextureEnabled !== DD && (this._ThicknessTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(DD) {
        this._RefractionIntensityTextureEnabled !== DD && (this._RefractionIntensityTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(DD) {
        this._TranslucencyIntensityTextureEnabled !== DD && (this._TranslucencyIntensityTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(DD) {
        this._TranslucencyColorTextureEnabled !== DD && (this._TranslucencyColorTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(DD) {
        this._IridescenceTextureEnabled !== DD && (this._IridescenceTextureEnabled = DD, ID.e.MarkAllMaterialsAsDirty(1))
      }
    }
    pD._DiffuseTextureEnabled = !0, pD._BaseWeightTextureEnabled = !0, pD._BaseDiffuseRoughnessTextureEnabled = !0, pD._DetailTextureEnabled = !0, pD._DecalMapEnabled = !0, pD._AmbientTextureEnabled = !0, pD._OpacityTextureEnabled = !0, pD._ReflectionTextureEnabled = !0, pD._EmissiveTextureEnabled = !0, pD._SpecularTextureEnabled = !0, pD._BumpTextureEnabled = !0, pD._LightmapTextureEnabled = !0, pD._RefractionTextureEnabled = !0, pD._ColorGradingTextureEnabled = !0, pD._FresnelEnabled = !0, pD._ClearCoatTextureEnabled = !0, pD._ClearCoatBumpTextureEnabled = !0, pD._ClearCoatTintTextureEnabled = !0, pD._SheenTextureEnabled = !0, pD._AnisotropicTextureEnabled = !0, pD._ThicknessTextureEnabled = !0, pD._RefractionIntensityTextureEnabled = !0, pD._TranslucencyIntensityTextureEnabled = !0, pD._TranslucencyColorTextureEnabled = !0, pD._IridescenceTextureEnabled = !0
  },
  39458: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => zD,
      C: () => XD,
      D: () => JD,
      H: () => mD,
      K: () => xD,
      L: () => qD,
      O: () => MD,
      R: () => yD,
      V: () => kD,
      Z: () => lD,
      c: () => aD,
      cb: () => VD,
      d: () => nD,
      db: () => gD,
      gb: () => KD,
      h: () => BD,
      hb: () => dD,
      l: () => vD,
      lb: () => YD,
      n: () => ND,
      nb: () => WD,
      ob: () => uD,
      pb: () => ED,
      qb: () => eD,
      r: () => UD,
      sb: () => tD,
      u: () => QD,
      y: () => ZD,
      z: () => oD
    });
    var ID = cD(38048),
      pD = cD(36464),
      iD = cD(39344),
      fD = cD(39460),
      bD = cD(39466);

    function QD(DD, CD, cD) {
      if (!DD || DD.LOGARITHMICDEPTH || DD.indexOf && DD.indexOf("LOGARITHMICDEPTH") >= 0) {
        const DD = cD.activeCamera;
        1 === DD.mode && ID.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), CD.setFloat("logarithmicDepthConstant", 2 / (Math.log(DD.maxZ + 1) / Math.LN2))
      }
    }
    const wD = {
        r: 0,
        g: 0,
        b: 0
      },
      SD = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function BD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      cD && DD.fogEnabled && (!CD || CD.applyFog) && 0 !== DD.fogMode && (cD.setFloat4("vFogInfos", DD.fogMode, DD.fogStart, DD.fogEnd, DD.fogDensity), ID ? (DD.fogColor.toLinearSpaceToRef(wD, DD.DZ().useExactSrgbConversions), cD.setColor3("vFogColor", wD)) : cD.setColor3("vFogColor", DD.fogColor))
    }

    function yD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
      const BD = DD.numMaxInfluencers || DD.numInfluencers;
      return BD <= 0 ? 0 : (CD.push("#define MORPHTARGETS"), DD.hasPositions && CD.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), DD.hasNormals && CD.push("#define MORPHTARGETTEXTURE_HASNORMALS"), DD.hasTangents && CD.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), DD.hasUVs && CD.push("#define MORPHTARGETTEXTURE_HASUVS"), DD.hasUV2s && CD.push("#define MORPHTARGETTEXTURE_HASUV2S"), DD.hasColors && CD.push("#define MORPHTARGETTEXTURE_HASCOLORS"), DD.supportsPositions && pD && CD.push("#define MORPHTARGETS_POSITION"), DD.supportsNormals && iD && CD.push("#define MORPHTARGETS_NORMAL"), DD.supportsTangents && fD && CD.push("#define MORPHTARGETS_TANGENT"), DD.supportsUVs && bD && CD.push("#define MORPHTARGETS_UV"), DD.supportsUV2s && QD && CD.push("#define MORPHTARGETS_UV2"), DD.supportsColors && wD && CD.push("#define MORPHTARGETS_COLOR"), CD.push("#define NUM_MORPH_INFLUENCERS " + BD), DD.isUsingTextureForTargets && CD.push("#define MORPHTARGETS_TEXTURE"), SD.NUM_MORPH_INFLUENCERS = BD, SD.NORMAL = iD, SD.TANGENT = fD, SD.UV = bD, SD.UV2 = QD, SD.COLOR = wD, MD(cD, ID, SD, pD), BD)
    }

    function MD(DD, CD, cD) {
      let iD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const fD = cD.NUM_MORPH_INFLUENCERS;
      if (fD > 0 && pD.b.LastCreatedEngine) {
        const bD = pD.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          QD = CD.morphTargetManager;
        if (QD?.isUsingTextureForTargets) return;
        const wD = QD && QD.supportsPositions && iD,
          SD = QD && QD.supportsNormals && cD.NORMAL,
          BD = QD && QD.supportsTangents && cD.TANGENT,
          yD = QD && QD.supportsUVs && cD.UV1,
          MD = QD && QD.supportsUV2s && cD.UV2,
          tD = QD && QD.supportsColors && cD.VERTEXCOLOR;
        for (let cD = 0; cD < fD; cD++) wD && DD.push("position" + cD), SD && DD.push("normal" + cD), BD && DD.push("tangent" + cD), yD && DD.push("uv_" + cD), MD && DD.push("uv2_" + cD), tD && DD.push("color" + cD), DD.length > bD && ID.e.Error("Cannot add more vertex attributes for mesh " + CD.name)
      }
    }

    function tD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      DD.push("world0"), DD.push("world1"), DD.push("world2"), DD.push("world3"), CD && (DD.push("previousWorld0"), DD.push("previousWorld1"), DD.push("previousWorld2"), DD.push("previousWorld3"))
    }

    function ZD(DD, CD) {
      const cD = DD.morphTargetManager;
      DD && cD && CD.setFloatArray("morphTargetInfluences", cD.influences)
    }

    function oD(DD, CD) {
      CD.bindToEffect(DD, "Scene")
    }

    function vD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        QD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        SD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        BD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        yD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (DD.texturesEnabled && pD && bD.e.ReflectionTextureEnabled) {
        if (cD.o5("reflectionMatrix", pD.getReflectionTextureMatrix()), cD.updateFloat2("vReflectionInfos", pD.level * DD.iblIntensity, yD), QD && pD.boundingBoxSize) {
          const DD = pD;
          cD.updateVector3("vReflectionPosition", DD.boundingBoxPosition), cD.updateVector3("vReflectionSize", DD.boundingBoxSize)
        }
        if (iD) {
          const DD = pD.getSize().width;
          cD.updateFloat2("vReflectionFilteringInfo", DD, Math.log2(DD))
        }
        if (SD && !CD.USEIRRADIANCEMAP) {
          const DD = pD.sphericalPolynomial;
          if (CD.USESPHERICALFROMREFLECTIONMAP && DD)
            if (CD.SPHERICAL_HARMONICS) {
              const CD = DD.preScaledHarmonics;
              cD.updateVector3("vSphericalL00", CD.l00), cD.updateVector3("vSphericalL1_1", CD.l1_1), cD.updateVector3("vSphericalL10", CD.l10), cD.updateVector3("vSphericalL11", CD.l11), cD.updateVector3("vSphericalL2_2", CD.l2_2), cD.updateVector3("vSphericalL2_1", CD.l2_1), cD.updateVector3("vSphericalL20", CD.l20), cD.updateVector3("vSphericalL21", CD.l21), cD.updateVector3("vSphericalL22", CD.l22)
            } else cD.updateFloat3("vSphericalX", DD.x.x, DD.x.y, DD.x.z), cD.updateFloat3("vSphericalY", DD.y.x, DD.y.y, DD.y.z), cD.updateFloat3("vSphericalZ", DD.z.x, DD.z.y, DD.z.z), cD.updateFloat3("vSphericalXX_ZZ", DD.xx.x - DD.zz.x, DD.xx.y - DD.zz.y, DD.xx.z - DD.zz.z), cD.updateFloat3("vSphericalYY_ZZ", DD.yy.x - DD.zz.x, DD.yy.y - DD.zz.y, DD.yy.z - DD.zz.z), cD.updateFloat3("vSphericalZZ", DD.zz.x, DD.zz.y, DD.zz.z), cD.updateFloat3("vSphericalXY", DD.xy.x, DD.xy.y, DD.xy.z), cD.updateFloat3("vSphericalYZ", DD.yz.x, DD.yz.y, DD.yz.z), cD.updateFloat3("vSphericalZX", DD.zx.x, DD.zx.y, DD.zx.z)
        } else wD && CD.USEIRRADIANCEMAP && CD.USE_IRRADIANCE_DOMINANT_DIRECTION && pD.irradianceTexture && cD.updateVector3("vReflectionDominantDirection", pD.irradianceTexture._dominantDirection);
        fD && cD.updateFloat3("vReflectionMicrosurfaceInfos", pD.getSize().width, pD.lodGenerationScale, pD.lodGenerationOffset)
      }
      BD && cD.updateColor3("vReflectionColor", ID)
    }

    function ND(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (ID && bD.e.ReflectionTextureEnabled) {
        CD.LODBASEDMICROSFURACE ? cD.setTexture("reflectionSampler", ID) : (cD.setTexture("reflectionSampler", ID._lodTextureMid || ID), cD.setTexture("reflectionSamplerLow", ID._lodTextureLow || ID), cD.setTexture("reflectionSamplerHigh", ID._lodTextureHigh || ID)), CD.USEIRRADIANCEMAP && cD.setTexture("irradianceSampler", ID.irradianceTexture);
        const iD = DD.iblCdfGenerator;
        pD && iD && cD.setTexture("icdfSampler", iD.getIcdfTexture())
      }
    }

    function gD(DD, CD, cD) {
      CD._needUVs = !0, CD[cD] = !0, DD.optimizeUVAllocation && DD.getTextureMatrix().isIdentityAs3x2() ? (CD[cD + "DIRECTUV"] = DD.coordinatesIndex + 1, CD["MAINUV" + (DD.coordinatesIndex + 1)] = !0) : CD[cD + "DIRECTUV"] = 0
    }

    function XD(DD, CD, cD) {
      const ID = DD.getTextureMatrix();
      CD.o5(cD + "Matrix", ID)
    }

    function mD(DD, CD, cD) {
      cD.BAKED_VERTEX_ANIMATION_TEXTURE && cD.INSTANCES && DD.push("bakedVertexAnimationSettingsInstanced")
    }

    function nD(DD, CD, cD) {
      var ID;
      if (CD && DD && (DD.computeBonesUsingShaders && CD._bonesComputationForcedToCPU && (DD.computeBonesUsingShaders = !1), DD.useBones && DD.computeBonesUsingShaders && DD.skeleton)) {
        const pD = DD.skeleton;
        if (pD.isUsingTextureForMatrices && CD.getUniformIndex("boneTextureInfo") > -1) {
          const cD = pD.getTransformMatrixTexture(DD);
          CD.setTexture("boneSampler", cD), CD.setFloat2("boneTextureInfo", pD._textureWidth, pD._textureHeight)
        } else {
          const iD = pD.getTransformMatrices(DD);
          iD && (CD.setMatrices("mBones", iD), cD && DD.hq().prePassRenderer && DD.hq().prePassRenderer.getIndex(2) && (cD.previousBones[DD.uniqueId] || (cD.previousBones[DD.uniqueId] = iD.slice()), CD.setMatrices("mPreviousBones", cD.previousBones[DD.uniqueId]), ID = iD, cD.previousBones[DD.uniqueId].set(ID)))
        }
      }
    }

    function OD(DD, CD, cD, ID, pD) {
      let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      DD._bindLight(CD, cD, ID, pD, iD)
    }
    const PD = 4,
      HD = new WeakMap;

    function UD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const iD = Math.min(CD.lightSources.length, pD);
      for (let fD = 0; fD < iD; fD++) {
        OD(CD.lightSources[fD], fD, DD, cD, "boolean" === typeof ID ? ID : ID.SPECULARTERM, CD.receiveShadows)
      }
    }

    function xD(DD, CD, cD, ID) {
      cD.NUM_BONE_INFLUENCERS > 0 && (ID.addCPUSkinningFallback(0, CD), DD.push("matricesIndices"), DD.push("matricesWeights"), cD.NUM_BONE_INFLUENCERS > 4 && (DD.push("matricesIndicesExtra"), DD.push("matricesWeightsExtra")))
    }

    function qD(DD, CD) {
      (CD.INSTANCES || CD.THIN_INSTANCES) && tD(DD, !!CD.PREPASS_VELOCITY), CD.INSTANCESCOLOR && DD.push("instanceColor")
    }

    function JD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pD = 0;
      for (let iD = 0; iD < cD && DD["LIGHT" + iD]; iD++) iD > 0 && (pD = ID + iD, CD.addFallback(pD, "LIGHT" + iD)), DD.SHADOWS || (DD["SHADOW" + iD] && CD.addFallback(ID, "SHADOW" + iD), DD["SHADOWPCF" + iD] && CD.addFallback(ID, "SHADOWPCF" + iD), DD["SHADOWPCSS" + iD] && CD.addFallback(ID, "SHADOWPCSS" + iD), DD["SHADOWPOISSON" + iD] && CD.addFallback(ID, "SHADOWPOISSON" + iD), DD["SHADOWESM" + iD] && CD.addFallback(ID, "SHADOWESM" + iD), DD["SHADOWCLOSEESM" + iD] && CD.addFallback(ID, "SHADOWCLOSEESM" + iD));
      return pD
    }

    function KD(DD, CD, cD, ID, pD, iD, fD) {
      let bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wD = arguments.length > 9 ? arguments[9] : void 0,
        SD = arguments.length > 10 ? arguments[10] : void 0;
      if (fD._areMiscDirty) {
        fD.LOGARITHMICDEPTH = cD, fD.POINTSIZE = ID, fD.FOG = pD && function(DD, CD) {
          return CD.fogEnabled && DD.applyFog && 0 !== CD.fogMode
        }(DD, CD), fD.NONUNIFORMSCALING = DD.nonUniformScaling, fD.ALPHATEST = iD, fD.DECAL_AFTER_DETAIL = bD, fD.USE_VERTEX_PULLING = QD, fD.RIGHT_HANDED = CD.useRightHandedSystem;
        const BD = QD ? wD?.geometry?.getIndexBuffer() : null,
          yD = !!wD && wD.isUnIndexed;
        fD.VERTEX_PULLING_USE_INDEX_BUFFER = !!BD && !yD, fD.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!BD || yD) && BD.is32Bits, fD.VERTEXOUTPUT_INVARIANT = !!SD
      }
    }

    function aD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!DD.lightsEnabled || ID) return !0;
      const pD = CD.lightSources,
        iD = Math.min(pD.length, cD);
      for (let fD = 0; fD < iD; fD++)
        if (!pD[fD].areLightTexturesReady()) return !1;
      return !0
    }

    function VD(DD, CD, cD, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!cD._areLightsDirty) return cD._needNormals;
      const bD = iD;
      iD = function(DD, CD) {
        const cD = DD.DZ().getCaps().maxUniformBuffersPerShaderStage;
        if (null == cD) return CD;
        const ID = Math.max(cD - PD, 1);
        return Math.min(CD, ID)
      }(DD, iD);
      let QD = 0;
      const wD = {
        needNormals: cD._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (DD.lightsEnabled && !fD) {
        CD.lightSources.length > iD && iD < bD && function(DD, CD, cD, pD) {
          let iD = HD.get(DD);
          iD || (iD = new Set, HD.set(DD, iD)), iD.has(pD) || (iD.add(pD), ID.e.Warn(`maxSimultaneousLights is ${CD} but this engine supports at most ${cD} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${pD} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${pD+PD} uniform buffers, over the device limit of ${DD.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${cD}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${cD} or less to silence this warning.`))
        }(DD.DZ(), bD, iD, Math.min(CD.lightSources.length, bD));
        for (const ID of CD.lightSources)
          if (jD(DD, CD, ID, QD, cD, pD, wD), QD++, QD === iD) break
      }
      cD.SPECULARTERM = wD.specularEnabled, cD.SHADOWS = wD.shadowEnabled;
      const SD = Math.max(iD, cD.MAXLIGHTCOUNT || 0);
      for (let ID = QD; ID < SD; ID++) void 0 !== cD["LIGHT" + ID] && (cD["LIGHT" + ID] = !1, cD["HEMILIGHT" + ID] = !1, cD["POINTLIGHT" + ID] = !1, cD["DIRLIGHT" + ID] = !1, cD["SPOTLIGHT" + ID] = !1, cD["AREALIGHT" + ID] = !1, cD["CLUSTLIGHT" + ID] = !1, cD["SHADOW" + ID] = !1, cD["SHADOWCSM" + ID] = !1, cD["SHADOWCSMDEBUG" + ID] = !1, cD["SHADOWCSMNUM_CASCADES" + ID] = !1, cD["SHADOWCSMUSESHADOWMAXZ" + ID] = !1, cD["SHADOWCSMNOBLEND" + ID] = !1, cD["SHADOWCSM_RIGHTHANDED" + ID] = !1, cD["SHADOWPCF" + ID] = !1, cD["SHADOWPCSS" + ID] = !1, cD["SHADOWPOISSON" + ID] = !1, cD["SHADOWESM" + ID] = !1, cD["SHADOWCLOSEESM" + ID] = !1, cD["SHADOWCUBE" + ID] = !1, cD["SHADOWLOWQUALITY" + ID] = !1, cD["SHADOWMEDIUMQUALITY" + ID] = !1);
      cD.LIGHTCOUNT = QD, cD.MAXLIGHTCOUNT = iD;
      const BD = DD.DZ().getCaps();
      return void 0 === cD.SHADOWFLOAT && (wD.needRebuild = !0), cD.SHADOWFLOAT = wD.shadowEnabled && (BD.textureFloatRender && BD.textureFloatLinearFiltering || BD.textureHalfFloatRender && BD.textureHalfFloatLinearFiltering), cD.LIGHTMAPEXCLUDED = wD.lightmapMode, wD.needRebuild && cD.rebuild(), wD.needNormals
    }

    function zD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (CD && bD.e.ReflectionTextureEnabled) {
        if (!CD.isReadyOrNotBlocking()) return !1;
        cD._needNormals = !0, cD.REFLECTION = !0, cD.GAMMAREFLECTION = CD.gammaSpace, cD.RGBDREFLECTION = CD.isRGBD, cD.LODINREFLECTIONALPHA = CD.lodLevelInAlpha, cD.LINEARSPECULARREFLECTION = CD.linearSpecularLOD, cD.USEIRRADIANCEMAP = !1, cD.LODBASEDMICROSFURACE = DD.DZ().getCaps().textureLOD;
        const fD = DD.DZ();
        switch (ID && pD > 0 ? (cD.NUM_SAMPLES = "" + pD, fD._features.needTypeSuffixInShaderConstants && (cD.NUM_SAMPLES = cD.NUM_SAMPLES + "u"), cD.REALTIME_FILTERING = !0, DD.iblCdfGenerator && (cD.IBL_CDF_FILTERING = !0)) : cD.REALTIME_FILTERING = !1, cD.INVERTCUBICMAP = 6 === CD.coordinatesMode, cD.REFLECTIONMAP_3D = CD.isCube, cD.REFLECTIONMAP_OPPOSITEZ = cD.REFLECTIONMAP_3D && DD.useRightHandedSystem ? !CD.invertZ : CD.invertZ, cD.REFLECTIONMAP_CUBIC = !1, cD.REFLECTIONMAP_EXPLICIT = !1, cD.REFLECTIONMAP_PLANAR = !1, cD.REFLECTIONMAP_PROJECTION = !1, cD.REFLECTIONMAP_SKYBOX = !1, cD.REFLECTIONMAP_SPHERICAL = !1, cD.REFLECTIONMAP_EQUIRECTANGULAR = !1, cD.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, cD.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, CD.coordinatesMode) {
          case 0:
            cD.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            cD.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            cD.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            cD.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            cD.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            cD.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            cD.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            cD.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            cD.REFLECTIONMAP_CUBIC = !0, cD.USE_LOCAL_REFLECTIONMAP_CUBIC = !!CD.boundingBoxSize
        }
        5 !== CD.coordinatesMode && (CD.irradianceTexture ? (cD.USEIRRADIANCEMAP = !0, cD.USESPHERICALFROMREFLECTIONMAP = !1, cD.USESPHERICALINVERTEX = !1, CD.irradianceTexture._dominantDirection ? cD.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : cD.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : CD.isCube && (cD.USESPHERICALFROMREFLECTIONMAP = !0, cD.USEIRRADIANCEMAP = !1, cD.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, cD.USESPHERICALINVERTEX = iD))
      } else cD.REFLECTION = !1, cD.REFLECTIONMAP_3D = !1, cD.REFLECTIONMAP_SPHERICAL = !1, cD.REFLECTIONMAP_PLANAR = !1, cD.REFLECTIONMAP_CUBIC = !1, cD.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, cD.REFLECTIONMAP_PROJECTION = !1, cD.REFLECTIONMAP_SKYBOX = !1, cD.REFLECTIONMAP_EXPLICIT = !1, cD.REFLECTIONMAP_EQUIRECTANGULAR = !1, cD.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, cD.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, cD.INVERTCUBICMAP = !1, cD.USESPHERICALFROMREFLECTIONMAP = !1, cD.USEIRRADIANCEMAP = !1, cD.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, cD.USESPHERICALINVERTEX = !1, cD.REFLECTIONMAP_OPPOSITEZ = !1, cD.LODINREFLECTIONALPHA = !1, cD.GAMMAREFLECTION = !1, cD.RGBDREFLECTION = !1, cD.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function jD(DD, CD, cD, ID, pD, fD, bD) {
      switch (bD.needNormals = !0, void 0 === pD["LIGHT" + ID] && (bD.needRebuild = !0), pD["LIGHT" + ID] = !0, pD["SPOTLIGHT" + ID] = !1, pD["HEMILIGHT" + ID] = !1, pD["POINTLIGHT" + ID] = !1, pD["DIRLIGHT" + ID] = !1, pD["AREALIGHT" + ID] = !1, pD["CLUSTLIGHT" + ID] = !1, cD.prepareLightSpecificDefines(pD, ID), pD["LIGHT_FALLOFF_PHYSICAL" + ID] = !1, pD["LIGHT_FALLOFF_GLTF" + ID] = !1, pD["LIGHT_FALLOFF_STANDARD" + ID] = !1, cD.falloffType) {
        case iD.d.FALLOFF_GLTF:
          pD["LIGHT_FALLOFF_GLTF" + ID] = !0;
          break;
        case iD.d.FALLOFF_PHYSICAL:
          pD["LIGHT_FALLOFF_PHYSICAL" + ID] = !0;
          break;
        case iD.d.FALLOFF_STANDARD:
          pD["LIGHT_FALLOFF_STANDARD" + ID] = !0
      }
      if (fD && !cD.specular.equalsFloats(0, 0, 0) && (bD.specularEnabled = !0), pD["SHADOW" + ID] = !1, pD["SHADOWCSM" + ID] = !1, pD["SHADOWCSMDEBUG" + ID] = !1, pD["SHADOWCSMNUM_CASCADES" + ID] = !1, pD["SHADOWCSMUSESHADOWMAXZ" + ID] = !1, pD["SHADOWCSMNOBLEND" + ID] = !1, pD["SHADOWCSM_RIGHTHANDED" + ID] = !1, pD["SHADOWPCF" + ID] = !1, pD["SHADOWPCSS" + ID] = !1, pD["SHADOWPOISSON" + ID] = !1, pD["SHADOWESM" + ID] = !1, pD["SHADOWCLOSEESM" + ID] = !1, pD["SHADOWCUBE" + ID] = !1, pD["SHADOWLOWQUALITY" + ID] = !1, pD["SHADOWMEDIUMQUALITY" + ID] = !1, CD && CD.receiveShadows && DD.shadowsEnabled && cD.shadowEnabled) {
        const CD = cD.getShadowGenerator(DD.activeCamera) ?? cD.getShadowGenerator();
        if (CD) {
          const DD = CD.getShadowMap();
          DD && DD.renderList && DD.renderList.length > 0 && (bD.shadowEnabled = !0, CD.prepareDefines(pD, ID))
        }
      }
      cD.lightmapMode != iD.d.LIGHTMAP_DEFAULT ? (bD.lightmapMode = !0, pD["LIGHTMAPEXCLUDED" + ID] = !0, pD["LIGHTMAPNOSPECULAR" + ID] = cD.lightmapMode == iD.d.LIGHTMAP_SHADOWSONLY) : (pD["LIGHTMAPEXCLUDED" + ID] = !1, pD["LIGHTMAPNOSPECULAR" + ID] = !1)
    }

    function lD(DD, CD, cD, ID, pD) {
      let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        QD = function(DD, CD) {
          let cD = !1;
          if (DD.activeCamera) {
            const ID = CD.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              pD = CD.CAMERA_PERSPECTIVE ? 1 : 0,
              iD = 1 === DD.activeCamera.mode ? 1 : 0,
              fD = 0 === DD.activeCamera.mode ? 1 : 0;
            (ID ^ iD || pD ^ fD) && (CD.CAMERA_ORTHOGRAPHIC = 1 === iD, CD.CAMERA_PERSPECTIVE = 1 === fD, cD = !0)
          }
          return cD
        }(DD, ID);
      !1 !== iD && (QD = (0, fD.m)(cD, DD, ID)), ID.DEPTHPREPASS !== !CD.getColorWrite() && (ID.DEPTHPREPASS = !ID.DEPTHPREPASS, QD = !0), ID.INSTANCES !== pD && (ID.INSTANCES = pD, QD = !0), ID.THIN_INSTANCES !== bD && (ID.THIN_INSTANCES = bD, QD = !0), QD && ID.markAsUnprocessed()
    }
    const LD = 40,
      TD = 64,
      GD = new WeakMap,
      RD = new WeakSet;

    function kD(DD, CD, cD, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        bD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!CD._areAttributesDirty && CD._needNormals === CD._normals && CD._needUVs === CD._uvs) return !1;
      CD._normals = CD._needNormals, CD._uvs = CD._needUVs, CD.NORMAL = CD._needNormals && DD.isVerticesDataPresent("normal"), CD._needNormals && DD.isVerticesDataPresent("tangent") && (CD.TANGENT = !0);
      for (let ID = 1; ID <= 6; ++ID) CD["UV" + ID] = !!CD._needUVs && DD.isVerticesDataPresent(`uv${1===ID?"":ID}`);
      if (cD) {
        const cD = DD.useVertexColors && DD.isVerticesDataPresent("color");
        CD.VERTEXCOLOR = cD, CD.VERTEXALPHA = DD.hasVertexAlpha && cD && fD
      }
      return DD.isVerticesDataPresent("instanceColor") && (DD.nID || DD.hasThinInstances) && (CD.INSTANCESCOLOR = !0), pD && function(DD, CD) {
        if (DD.useBones && DD.computeBonesUsingShaders && DD.skeleton) {
          CD.NUM_BONE_INFLUENCERS = DD.numBoneInfluencers;
          const cD = void 0 !== CD.BONETEXTURE;
          if (DD.skeleton.isUsingTextureForMatrices && cD) CD.BONETEXTURE = !0;
          else {
            CD.BonesPerMesh = DD.skeleton.bones.length + 1, CD.BONETEXTURE = !cD && void 0;
            const pD = DD.hq(),
              iD = pD.prePassRenderer;
            if (iD && iD.enabled) {
              const cD = -1 === iD.excludedSkinnedMesh.indexOf(DD);
              CD.BONES_VELOCITY_ENABLED = cD
            }
            const fD = !0 === CD.MULTIVIEW,
              bD = 2 * CD.BonesPerMesh + (fD ? 1 : 0);
            if (GD.get(DD.skeleton) !== bD) {
              GD.set(DD.skeleton, bD);
              const cD = pD.DZ().getCaps().maxVertexUniformVectors;
              if (cD && !RD.has(DD.skeleton)) {
                const pD = 4 * CD.BonesPerMesh,
                  iD = fD ? TD : LD,
                  bD = Math.max(cD - iD, 0);
                (pD > bD || fD && 3 * pD > cD) && (RD.add(DD.skeleton), ID.e.Warn(`Skeleton "${DD.skeleton.name}": ${DD.skeleton.bones.length} bones stored as vertex uniforms use ${pD} of ~${bD} usable uniform vectors${fD?" (multiview)":""} on a device reporting ${cD}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else CD.NUM_BONE_INFLUENCERS = 0, CD.BonesPerMesh = 0, void 0 !== CD.BONETEXTURE && (CD.BONETEXTURE = !1)
      }(DD, CD), iD && function(DD, CD) {
        const cD = DD.morphTargetManager;
        cD ? (CD.MORPHTARGETS_UV = cD.supportsUVs && CD.UV1, CD.MORPHTARGETS_UV2 = cD.supportsUV2s && CD.UV2, CD.MORPHTARGETS_TANGENT = cD.supportsTangents && CD.TANGENT, CD.MORPHTARGETS_NORMAL = cD.supportsNormals && CD.NORMAL, CD.MORPHTARGETS_POSITION = cD.supportsPositions, CD.MORPHTARGETS_COLOR = cD.supportsColors, CD.MORPHTARGETTEXTURE_HASUVS = cD.hasUVs, CD.MORPHTARGETTEXTURE_HASUV2S = cD.hasUV2s, CD.MORPHTARGETTEXTURE_HASTANGENTS = cD.hasTangents, CD.MORPHTARGETTEXTURE_HASNORMALS = cD.hasNormals, CD.MORPHTARGETTEXTURE_HASPOSITIONS = cD.hasPositions, CD.MORPHTARGETTEXTURE_HASCOLORS = cD.hasColors, CD.NUM_MORPH_INFLUENCERS = cD.numMaxInfluencers || cD.numInfluencers, CD.MORPHTARGETS = CD.NUM_MORPH_INFLUENCERS > 0, CD.MORPHTARGETS_TEXTURE = cD.isUsingTextureForTargets) : (CD.MORPHTARGETS_UV = !1, CD.MORPHTARGETS_UV2 = !1, CD.MORPHTARGETS_TANGENT = !1, CD.MORPHTARGETS_NORMAL = !1, CD.MORPHTARGETS_POSITION = !1, CD.MORPHTARGETS_COLOR = !1, CD.MORPHTARGETTEXTURE_HASUVS = !1, CD.MORPHTARGETTEXTURE_HASUV2S = !1, CD.MORPHTARGETTEXTURE_HASTANGENTS = !1, CD.MORPHTARGETTEXTURE_HASNORMALS = !1, CD.MORPHTARGETTEXTURE_HASPOSITIONS = !1, CD.MORPHTARGETTEXTURE_HAS_COLORS = !1, CD.MORPHTARGETS = !1, CD.NUM_MORPH_INFLUENCERS = 0)
      }(DD, CD), bD && function(DD, CD) {
        const cD = DD.bakedVertexAnimationManager;
        CD.BAKED_VERTEX_ANIMATION_TEXTURE = !(!cD || !cD.isEnabled)
      }(DD, CD), !0
    }

    function dD(DD, CD) {
      if (DD.activeCamera) {
        const cD = CD.MULTIVIEW;
        CD.MULTIVIEW = null !== DD.activeCamera.outputRenderTarget && DD.activeCamera.outputRenderTarget.getViewCount() > 1, CD.MULTIVIEW != cD && CD.markAsUnprocessed()
      }
    }

    function YD(DD, CD, cD) {
      const ID = CD.ORDER_INDEPENDENT_TRANSPARENCY,
        pD = CD.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      CD.ORDER_INDEPENDENT_TRANSPARENCY = DD.useOrderIndependentTransparency && cD, CD.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !DD.DZ().getCaps().textureFloatLinearFiltering, ID === CD.ORDER_INDEPENDENT_TRANSPARENCY && pD === CD.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || CD.markAsUnprocessed()
    }

    function WD(DD, CD, cD) {
      const ID = CD.PREPASS;
      if (!CD._arePrePassDirty) return;
      const pD = [{
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
      if (DD.prePassRenderer && DD.prePassRenderer.enabled && cD) {
        CD.PREPASS = !0, CD.SCENE_MRT_COUNT = DD.prePassRenderer.mrtCount, CD.PREPASS_NORMAL_WORLDSPACE = DD.prePassRenderer.generateNormalsInWorldSpace, CD.PREPASS_COLOR = !0, CD.PREPASS_COLOR_INDEX = 0;
        for (let cD = 0; cD < pD.length; cD++) {
          const ID = DD.prePassRenderer.getIndex(pD[cD].type); - 1 !== ID ? (CD[pD[cD].define] = !0, CD[pD[cD].index] = ID) : CD[pD[cD].define] = !1
        }
      } else {
        CD.PREPASS = !1;
        for (let DD = 0; DD < pD.length; DD++) CD[pD[DD].define] = !1
      }
      CD.PREPASS != ID && (CD.markAsUnprocessed(), CD.markAsImageProcessingDirty())
    }

    function sD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      pD && pD.push("Light" + DD), iD || (CD.push("vLightData" + DD, "vLightDiffuse" + DD, "vLightSpecular" + DD, "vLightDirection" + DD, "vLightWidth" + DD, "vLightHeight" + DD, "vLightFalloff" + DD, "vLightGround" + DD, "vSliceData" + DD, "vSliceRanges" + DD, "lightMatrix" + DD, "shadowsInfo" + DD, "depthValues" + DD), cD.push("shadowTexture" + DD), cD.push("depthTexture" + DD), CD.push("viewFrustumZ" + DD, "cascadeBlendFactor" + DD, "lightSizeUVCorrection" + DD, "depthCorrection" + DD, "penumbraDarkness" + DD, "frustumLengths" + DD), ID && (cD.push("projectionLightTexture" + DD), CD.push("textureProjectionMatrix" + DD)), fD && cD.push("iesLightTexture" + DD), QD && cD.push("rectAreaLightEmissionTexture" + DD), bD && (cD.push("lightDataTexture" + DD), wD || cD.push("tileMaskTexture" + DD)))
    }

    function ED(DD, CD, cD) {
      const ID = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      cD && ID.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), DD.push(...ID);
      CD.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function eD(DD, CD, cD) {
      let ID, pD, iD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        fD = null;
      if (DD.uniformsNames) {
        const bD = DD;
        ID = bD.uniformsNames, pD = bD.uniformBuffersNames, CD = bD.samplers, cD = bD.defines, iD = bD.maxSimultaneousLights || 0, fD = bD.shaderLanguage ?? null
      } else ID = DD, CD || (CD = []);
      for (let bD = 0; bD < iD && cD["LIGHT" + bD]; bD++) sD(bD, ID, CD, cD["PROJECTEDLIGHTTEXTURE" + bD], pD, !1, cD["IESLIGHTTEXTURE" + bD], cD["CLUSTLIGHT" + bD], cD["RECTAREALIGHTEMISSIONTEXTURE" + bD], 1 === fD);
      cD.NUM_MORPH_INFLUENCERS && (ID.push("morphTargetInfluences"), ID.push("morphTargetCount")), cD.BAKED_VERTEX_ANIMATION_TEXTURE && (ID.push("bakedVertexAnimationSettings"), ID.push("bakedVertexAnimationTextureSizeInverted"), ID.push("bakedVertexAnimationTime"), CD.push("bakedVertexAnimationTexture"))
    }

    function uD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      DD.addUniform("vReflectionInfos", 2), DD.addUniform("reflectionMatrix", 16), CD && DD.addUniform("vReflectionMicrosurfaceInfos", 3), cD && (DD.addUniform("vReflectionPosition", 3), DD.addUniform("vReflectionSize", 3)), ID && (DD.addUniform("vReflectionFilteringInfo", 2), DD.addUniform("vReflectionDominantDirection", 3)), iD && DD.addUniform("vReflectionColor", 3), pD && (DD.addUniform("vSphericalL00", 3), DD.addUniform("vSphericalL1_1", 3), DD.addUniform("vSphericalL10", 3), DD.addUniform("vSphericalL11", 3), DD.addUniform("vSphericalL2_2", 3), DD.addUniform("vSphericalL2_1", 3), DD.addUniform("vSphericalL20", 3), DD.addUniform("vSphericalL21", 3), DD.addUniform("vSphericalL22", 3), DD.addUniform("vSphericalX", 3), DD.addUniform("vSphericalY", 3), DD.addUniform("vSphericalZ", 3), DD.addUniform("vSphericalXX_ZZ", 3), DD.addUniform("vSphericalYY_ZZ", 3), DD.addUniform("vSphericalZZ", 3), DD.addUniform("vSphericalXY", 3), DD.addUniform("vSphericalYZ", 3), DD.addUniform("vSphericalZX", 3))
    }
  },
  39470: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(36446),
      pD = cD(39416);
    class iD extends pD.d {
      constructor(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(DD, CD, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new ID.d, this._storeEffectOnSubMeshes = cD
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(DD, CD) {
        return !!DD && (!this._storeEffectOnSubMeshes || (!DD.IH || 0 === DD.IH.length || this.isReadyForSubMesh(DD, DD.IH[0], CD)))
      }
      _isReadyForSubMesh(DD) {
        const CD = DD.materialDefines;
        return !(this.checkReadyOnEveryCall || !DD.effect || !CD || CD._renderId !== this.hq().getRenderId())
      }
      bindOnlyWorldMatrix(DD) {
        this._activeEffect.setMatrix("world", DD)
      }
      bindOnlyNormalMatrix(DD) {
        this._activeEffect.setMatrix("normalMatrix", DD)
      }
      bind(DD, CD) {
        CD && this.bindForSubMesh(DD, CD, CD.IH[0])
      }
      _afterBind(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(DD, CD, cD), this.hq()._cachedEffect = CD, cD ? cD._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return cD._drawWrapper._forceRebindOnNextCall || DD.isCachedMaterialInvalid(this, CD, ID)
      }
      dispose(DD, CD, cD) {
        this._activeEffect = void 0, super.dispose(DD, CD, cD)
      }
    }
  },
  39496: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      f: () => pD
    });
    const ID = new WeakMap;

    function pD(DD) {
      const CD = DD.getVertexBuffers();
      if (!CD) return null;
      let cD = ID.get(DD);
      if (cD) {
        let DD = !1;
        for (const ID in CD)
          if (!cD.has(ID)) {
            DD = !0;
            break
          } if (!DD) return cD
      } else cD = new Map, ID.set(DD, cD);
      for (const ID in CD) {
        const DD = CD[ID];
        if (DD) {
          const CD = DD.byteOffset,
            pD = DD.byteStride,
            iD = DD.type,
            fD = DD.normalized;
          cD.set(ID, {
            offset: CD,
            stride: pD,
            type: iD,
            normalized: fD
          })
        }
      }
      return cD
    }

    function iD(DD, CD) {
      CD.forEach(((CD, cD) => {
        const ID = `vp_${cD}_info`;
        DD.setFloat4(ID, CD.offset, CD.stride, CD.type, CD.normalized ? 1 : 0)
      }))
    }
  },
  39454: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      f: () => QD
    });
    var ID = cD(39154),
      pD = cD(36446),
      iD = cD(39156);
    let fD = (() => {
      var DD;
      let CD, cD, pD = [];
      return DD = class {
        static extractMinAndMaxIndexed(DD, CD, cD, ID, pD, iD) {
          for (let fD = cD; fD < cD + ID; fD++) {
            const cD = 3 * CD[fD],
              ID = DD[cD],
              bD = DD[cD + 1],
              QD = DD[cD + 2];
            pD.minimizeInPlaceFromFloats(ID, bD, QD), iD.maximizeInPlaceFromFloats(ID, bD, QD)
          }
        }
        static extractMinAndMax(DD, CD, cD, ID, pD, iD) {
          for (let fD = CD, bD = CD * ID; fD < CD + cD; fD++, bD += ID) {
            const CD = DD[bD],
              cD = DD[bD + 1],
              ID = DD[bD + 2];
            pD.minimizeInPlaceFromFloats(CD, cD, ID), iD.maximizeInPlaceFromFloats(CD, cD, ID)
          }
        }
      }, (() => {
        const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [iD.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], cD = [iD.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, ID.k)(DD, null, CD, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: DD => "extractMinAndMaxIndexed" in DD,
            get: DD => DD.extractMinAndMaxIndexed
          },
          metadata: fD
        }, null, pD), (0, ID.k)(DD, null, cD, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: DD => "extractMinAndMax" in DD,
            get: DD => DD.extractMinAndMax
          },
          metadata: fD
        }, null, pD), fD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fD
        }), (0, ID.m)(DD, pD)
      })(), DD
    })();

    function bD(DD, CD, cD, ID) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const bD = new pD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        QD = new pD.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return fD.extractMinAndMaxIndexed(DD, CD, cD, ID, bD, QD), iD && (bD.x -= bD.x * iD.x + iD.y, bD.y -= bD.y * iD.x + iD.y, bD.z -= bD.z * iD.x + iD.y, QD.x += QD.x * iD.x + iD.y, QD.y += QD.y * iD.x + iD.y, QD.z += QD.z * iD.x + iD.y), {
        minimum: bD,
        maximum: QD
      }
    }

    function QD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        iD = arguments.length > 4 ? arguments[4] : void 0;
      const bD = new pD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        QD = new pD.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return iD || (iD = 3), fD.extractMinAndMax(DD, CD, cD, iD, bD, QD), ID && (bD.x -= bD.x * ID.x + ID.y, bD.y -= bD.y * ID.x + ID.y, bD.z -= bD.z * ID.x + ID.y, QD.x += QD.x * ID.x + ID.y, QD.y += QD.y * ID.x + ID.y, QD.z += QD.z * ID.x + ID.y), {
        minimum: bD,
        maximum: QD
      }
    }
  },
  39425: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD
    });
    var ID, pD = cD(39286),
      iD = cD(39433),
      fD = cD(39441),
      bD = cD(39454),
      QD = cD(39456),
      wD = cD(39027);
    class SD {
      get materialDefines() {
        const DD = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof DD ? null : DD
      }
      set materialDefines(DD) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = DD
      }
      _getDrawWrapper(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        DD = DD ?? this._engine.currentRenderPassId;
        let cD = this._drawWrappers[DD];
        return !cD && CD && (this._drawWrappers[DD] = cD = new QD.c(this._mesh.hq().DZ())), cD
      }
      _removeDrawWrapper(DD) {
        let CD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[DD]?.dispose(CD), this._drawWrappers[DD] = void 0
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
      _setMainDrawWrapperOverride(DD) {
        this._mainDrawWrapperOverride = DD
      }
      setEffect(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pD = this._drawWrapper;
        pD.setEffect(DD, CD, ID), void 0 !== cD && (pD.materialContext = cD), DD || (pD.defines = null, pD.materialContext = void 0)
      }
      resetDrawCache(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== DD) return void this._removeDrawWrapper(DD, !0, CD);
          for (const DD of this._drawWrappers) DD?.dispose(CD)
        }
        this._drawWrappers = []
      }
      static AddToMesh(DD, CD, cD, ID, pD, iD, fD) {
        return new SD(DD, CD, cD, ID, pD, iD, fD, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(DD, CD, cD, ID, pD, iD, fD) {
        let bD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = DD, this.verticesStart = CD, this.verticesCount = cD, this.indexStart = ID, this.indexCount = pD, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = iD, this._renderingMesh = fD || iD, QD && iD.IH.push(this), this._engine = this._mesh.hq().DZ(), this.resetDrawCache(), this._trianglePlanes = [], this._id = iD.IH.length - 1, bD && (this.refreshBoundingInfo(), iD.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      VJ() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.VJ() : this._boundingInfo
      }
      setBoundingInfo(DD) {
        return this._boundingInfo = DD, this
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
        const DD = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return DD || this._renderingMesh
      }
      iZ() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const CD = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!CD) return DD && this._mesh.hq()._hasDefaultMaterial ? this._mesh.hq().defaultMaterial : null;
        if (this._isMultiMaterial(CD)) {
          const DD = CD.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== DD && (this._currentMaterial = DD, this.resetDrawCache()), DD
        }
        return CD
      }
      _isMultiMaterial(DD) {
        return void 0 !== DD.getSubMaterial
      }
      refreshBoundingInfo() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (DD || (DD = this._renderingMesh.getVerticesData(pD.k.PositionKind)), !DD) return this._boundingInfo = this._mesh.VJ(), this;
        const CD = this._renderingMesh.ncD();
        let cD;
        if (0 === this.indexStart && this.indexCount === CD.length) {
          const DD = this._renderingMesh.VJ();
          cD = {
            minimum: DD.minimum.clone(),
            maximum: DD.maximum.clone()
          }
        } else cD = (0, bD.d)(DD, CD, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(cD.minimum, cD.maximum) : this._boundingInfo = new fD.e(cD.minimum, cD.maximum), this
      }
      _checkCollision(DD) {
        return this.VJ()._checkCollision(DD)
      }
      updateBoundingInfo(DD) {
        let CD = this.VJ();
        return CD || (this.refreshBoundingInfo(), CD = this.VJ()), CD && CD.update(DD), this
      }
      isInFrustum(DD) {
        const CD = this.VJ();
        return !!CD && CD.isInFrustum(DD, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(DD) {
        const CD = this.VJ();
        return !!CD && CD.isCompletelyInFrustum(DD)
      }
      render(DD) {
        return this._renderingMesh.render(this, DD, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(DD, CD) {
        if (!this._linesIndexBuffer) {
          const cD = 6 * Math.floor(this.indexCount / 3),
            ID = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(cD) : new Uint16Array(cD);
          let pD = 0;
          if (0 === DD.length)
            for (let DD = this.indexStart; DD < this.indexStart + this.indexCount; DD += 3) ID[pD++] = DD, ID[pD++] = DD + 1, ID[pD++] = DD + 1, ID[pD++] = DD + 2, ID[pD++] = DD + 2, ID[pD++] = DD;
          else
            for (let CD = this.indexStart; CD < this.indexStart + this.indexCount; CD += 3) ID[pD++] = DD[CD], ID[pD++] = DD[CD + 1], ID[pD++] = DD[CD + 1], ID[pD++] = DD[CD + 2], ID[pD++] = DD[CD + 2], ID[pD++] = DD[CD];
          this._linesIndexBuffer = CD.createIndexBuffer(ID), this._linesIndexCount = ID.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(DD) {
        const CD = this.VJ();
        return !!CD && DD.intersectsBox(CD.boundingBox)
      }
      intersects(DD, CD, cD, ID, pD) {
        const iD = this.iZ();
        if (!iD) return null;
        let fD = 3,
          bD = !1;
        switch (iD.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            fD = 1, bD = !0
        }
        return 4 === iD.fillMode ? cD.length ? this._intersectLines(DD, CD, cD, this._mesh.intersectionThreshold, ID) : this._intersectUnIndexedLines(DD, CD, cD, this._mesh.intersectionThreshold, ID) : !cD.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(DD, CD, cD, ID, pD) : this._intersectTriangles(DD, CD, cD, fD, bD, ID, pD)
      }
      _intersectLines(DD, CD, cD, ID, pD) {
        let fD = null;
        for (let bD = this.indexStart; bD < this.indexStart + this.indexCount; bD += 2) {
          const QD = CD[cD[bD]],
            wD = CD[cD[bD + 1]],
            SD = DD.intersectionSegment(QD, wD, ID);
          if (!(SD < 0) && ((pD || !fD || SD < fD.distance) && (fD = new iD.c(null, null, SD), fD.faceId = bD / 2, pD))) break
        }
        return fD
      }
      _intersectUnIndexedLines(DD, CD, cD, ID, pD) {
        let fD = null;
        for (let bD = this.verticesStart; bD < this.verticesStart + this.verticesCount; bD += 2) {
          const cD = CD[bD],
            QD = CD[bD + 1],
            wD = DD.intersectionSegment(cD, QD, ID);
          if (!(wD < 0) && ((pD || !fD || wD < fD.distance) && (fD = new iD.c(null, null, wD), fD.faceId = bD / 2, pD))) break
        }
        return fD
      }
      _intersectTriangles(DD, CD, cD, ID, pD, iD, fD) {
        let bD = null,
          QD = -1;
        for (let wD = this.indexStart; wD < this.indexStart + this.indexCount - (3 - ID); wD += ID) {
          QD++;
          const ID = cD[wD],
            SD = cD[wD + 1],
            BD = cD[wD + 2];
          if (pD && 4294967295 === BD) {
            wD += 2;
            continue
          }
          const yD = CD[ID],
            MD = CD[SD],
            tD = CD[BD];
          if (!yD || !MD || !tD) continue;
          if (fD && !fD(yD, MD, tD, DD, ID, SD, BD)) continue;
          const ZD = DD.intersectsTriangle(yD, MD, tD);
          if (ZD) {
            if (ZD.distance < 0) continue;
            if ((iD || !bD || ZD.distance < bD.distance) && (bD = ZD, bD.faceId = QD, iD)) break
          }
        }
        return bD
      }
      _intersectUnIndexedTriangles(DD, CD, cD, ID, pD) {
        let iD = null;
        for (let fD = this.verticesStart; fD < this.verticesStart + this.verticesCount; fD += 3) {
          const cD = CD[fD],
            bD = CD[fD + 1],
            QD = CD[fD + 2];
          if (pD && !pD(cD, bD, QD, DD, -1, -1, -1)) continue;
          const wD = DD.intersectsTriangle(cD, bD, QD);
          if (wD) {
            if (wD.distance < 0) continue;
            if ((ID || !iD || wD.distance < iD.distance) && (iD = wD, iD.faceId = fD / 3, ID)) break
          }
        }
        return iD
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(DD, CD) {
        const cD = new SD(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, DD, CD, !1);
        if (!this.IsGlobal) {
          const DD = this.VJ();
          if (!DD) return cD;
          cD._boundingInfo = new fD.e(DD.minimum, DD.maximum)
        }
        return cD
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.hq().DZ()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const CD = this._mesh.IH.indexOf(this);
        this._mesh.IH.splice(CD, 1), this.resetDrawCache(void 0, DD)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(DD, CD, cD, ID, pD) {
        let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = Number.MAX_VALUE,
          bD = -Number.MAX_VALUE;
        const QD = (pD || ID).ncD();
        for (let wD = CD; wD < CD + cD; wD++) {
          const DD = QD[wD];
          DD < fD && (fD = DD), DD > bD && (bD = DD)
        }
        return new SD(DD, fD, bD - fD + 1, CD, cD, ID, pD, iD)
      }
    }(ID = SD.prototype).projectToRef ?? (ID.projectToRef = (0, wD.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);