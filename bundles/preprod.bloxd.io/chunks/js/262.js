export const id = 262;
export const ids = [262];
export const modules = {
  40123: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC, ZC) {
        this.bu = CC, this.bv = zC, this.distance = ZC, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40136: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(36971),
      wC = ZC(36963),
      bC = ZC(36968);
    class nC {
      constructor(CC, zC, ZC) {
        this.vectors = (0, QC.d)(8, wC.r.Zero), this.center = wC.r.Zero(), this.centerWorld = wC.r.Zero(), this.extendSize = wC.r.Zero(), this.extendSizeWorld = wC.r.Zero(), this.directions = (0, QC.d)(3, wC.r.Zero), this.vectorsWorld = (0, QC.d)(8, wC.r.Zero), this.minimumWorld = wC.r.Zero(), this.maximumWorld = wC.r.Zero(), this.minimum = wC.r.Zero(), this.maximum = wC.r.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(CC, zC, ZC)
      }
      reConstruct(CC, zC, ZC) {
        const QC = CC.x,
          bC = CC.y,
          nC = CC.z,
          fC = zC.x,
          oC = zC.y,
          qC = zC.z,
          FC = this.vectors;
        this.minimum.L_(QC, bC, nC), this.maximum.L_(fC, oC, qC), FC[0].L_(QC, bC, nC), FC[1].L_(fC, oC, qC), FC[2].L_(fC, bC, nC), FC[3].L_(QC, oC, nC), FC[4].L_(QC, bC, qC), FC[5].L_(fC, oC, nC), FC[6].L_(QC, oC, qC), FC[7].L_(fC, bC, qC), zC.addToRef(CC, this.center).scaleInPlace(.5), zC.subtractToRef(CC, this.extendSize).scaleInPlace(.5), this._worldMatrix = ZC || wC.b.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(CC) {
        const zC = nC._TmpVector3,
          ZC = this.maximum.subtractToRef(this.minimum, zC[0]),
          QC = ZC.length();
        ZC.normalizeFromLength(QC);
        const wC = QC * CC,
          bC = ZC.scaleInPlace(.5 * wC),
          fC = this.center.subtractToRef(bC, zC[1]),
          oC = this.center.addToRef(bC, zC[2]);
        return this.reConstruct(fC, oC, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(CC) {
        const zC = this.minimumWorld,
          ZC = this.maximumWorld,
          QC = this.directions,
          bC = this.vectorsWorld,
          nC = this.vectors;
        if (CC.isIdentity()) {
          zC.Av(this.minimum), ZC.Av(this.maximum);
          for (let CC = 0; CC < 8; ++CC) bC[CC].Av(nC[CC]);
          this.extendSizeWorld.Av(this.extendSize), this.centerWorld.Av(this.center)
        } else {
          zC.Q_(Number.MAX_VALUE), ZC.Q_(-Number.MAX_VALUE);
          for (let QC = 0; QC < 8; ++QC) {
            const fC = bC[QC];
            wC.r.TransformCoordinatesToRef(nC[QC], CC, fC), zC.minimizeInPlace(fC), ZC.maximizeInPlace(fC)
          }
          ZC.subtractToRef(zC, this.extendSizeWorld).scaleInPlace(.5), ZC.addToRef(zC, this.centerWorld).scaleInPlace(.5)
        }
        wC.r.FromArrayToRef(CC.m, 0, QC[0]), wC.r.FromArrayToRef(CC.m, 4, QC[1]), wC.r.FromArrayToRef(CC.m, 8, QC[2]), this._worldMatrix = CC
      }
      isInFrustum(CC) {
        return nC.IsInFrustum(this.vectorsWorld, CC)
      }
      isCompletelyInFrustum(CC) {
        return nC.IsCompletelyInFrustum(this.vectorsWorld, CC)
      }
      intersectsPoint(CC) {
        const zC = this.minimumWorld,
          ZC = this.maximumWorld,
          QC = zC.x,
          wC = zC.y,
          nC = zC.z,
          fC = ZC.x,
          oC = ZC.y,
          qC = ZC.z,
          FC = CC.x,
          WC = CC.y,
          NC = CC.z,
          MC = -bC.e;
        return !(fC - FC < MC || MC > FC - QC) && (!(oC - WC < MC || MC > WC - wC) && !(qC - NC < MC || MC > NC - nC))
      }
      intersectsSphere(CC) {
        return nC.IntersectsSphere(this.minimumWorld, this.maximumWorld, CC.centerWorld, CC.radiusWorld)
      }
      intersectsMinMax(CC, zC) {
        const ZC = this.minimumWorld,
          QC = this.maximumWorld,
          wC = ZC.x,
          bC = ZC.y,
          nC = ZC.z,
          fC = QC.x,
          oC = QC.y,
          qC = QC.z,
          FC = CC.x,
          WC = CC.y,
          NC = CC.z,
          MC = zC.x,
          gC = zC.y,
          SC = zC.z;
        return !(fC < FC || wC > MC) && (!(oC < WC || bC > gC) && !(qC < NC || nC > SC))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(CC, zC) {
        return CC.intersectsMinMax(zC.minimumWorld, zC.maximumWorld)
      }
      static IntersectsSphere(CC, zC, ZC, QC) {
        const bC = nC._TmpVector3[0];
        wC.r.ClampToRef(ZC, CC, zC, bC);
        return wC.r.DistanceSquared(ZC, bC) <= QC * QC
      }
      static IsCompletelyInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ++ZC) {
          const QC = zC[ZC];
          for (let zC = 0; zC < 8; ++zC)
            if (QC.dotCoordinate(CC[zC]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ++ZC) {
          let QC = !0;
          const wC = zC[ZC];
          for (let zC = 0; zC < 8; ++zC)
            if (wC.dotCoordinate(CC[zC]) >= 0) {
              QC = !1;
              break
            } if (QC) return !1
        }
        return !0
      }
    }
    nC._TmpVector3 = (0, QC.d)(3, wC.r.Zero)
  },
  40127: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC
    });
    var QC = ZC(36971),
      wC = ZC(36963),
      bC = ZC(40136);
    class nC {
      constructor(CC, zC, ZC) {
        this.center = wC.r.Zero(), this.centerWorld = wC.r.Zero(), this.minimum = wC.r.Zero(), this.maximum = wC.r.Zero(), this.reConstruct(CC, zC, ZC)
      }
      reConstruct(CC, zC, ZC) {
        this.minimum.Av(CC), this.maximum.Av(zC);
        const QC = wC.r.Distance(CC, zC);
        zC.addToRef(CC, this.center).scaleInPlace(.5), this.radius = .5 * QC, this._update(ZC || wC.b.IdentityReadOnly)
      }
      scale(CC) {
        const zC = nC._TmpVector3,
          ZC = this.maximum.subtractToRef(this.minimum, zC[0]),
          QC = ZC.length();
        ZC.normalizeFromLength(QC);
        const wC = QC * CC,
          bC = ZC.scaleInPlace(.5 * wC),
          fC = this.center.subtractToRef(bC, zC[1]),
          oC = this.center.addToRef(bC, zC[2]);
        return this.reConstruct(fC, oC, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(CC) {
        if (CC.isIdentity()) this.centerWorld.Av(this.center), this.radiusWorld = this.radius;
        else {
          wC.r.TransformCoordinatesToRef(this.center, CC, this.centerWorld);
          const zC = nC._TmpVector3[0];
          wC.r.TransformNormalFromFloatsToRef(1, 1, 1, CC, zC), this.radiusWorld = Math.max(Math.abs(zC.x), Math.abs(zC.y), Math.abs(zC.z)) * this.radius
        }
      }
      isInFrustum(CC) {
        const zC = this.centerWorld,
          ZC = this.radiusWorld;
        for (let QC = 0; QC < 6; QC++)
          if (CC[QC].dotCoordinate(zC) <= -ZC) return !1;
        return !0
      }
      isCenterInFrustum(CC) {
        const zC = this.centerWorld;
        for (let ZC = 0; ZC < 6; ZC++)
          if (CC[ZC].dotCoordinate(zC) < 0) return !1;
        return !0
      }
      intersectsPoint(CC) {
        const zC = wC.r.DistanceSquared(this.centerWorld, CC);
        return !(this.radiusWorld * this.radiusWorld < zC)
      }
      static Intersects(CC, zC) {
        const ZC = wC.r.DistanceSquared(CC.centerWorld, zC.centerWorld),
          QC = CC.radiusWorld + zC.radiusWorld;
        return !(QC * QC < ZC)
      }
      static CreateFromCenterAndRadius(CC, zC, ZC) {
        this._TmpVector3[0].Av(CC), this._TmpVector3[1].L_(0, 0, zC), this._TmpVector3[2].Av(CC), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].RQC(this._TmpVector3[1]);
        const QC = new nC(this._TmpVector3[0], this._TmpVector3[2]);
        return QC._worldMatrix = ZC || wC.b.Identity(), QC
      }
    }
    nC._TmpVector3 = (0, QC.d)(3, wC.r.Zero);
    const fC = {
        min: 0,
        max: 0
      },
      oC = {
        min: 0,
        max: 0
      },
      qC = (CC, zC, ZC) => {
        const QC = wC.r.Dot(zC.centerWorld, CC),
          bC = Math.abs(wC.r.Dot(zC.directions[0], CC)) * zC.extendSize.x + Math.abs(wC.r.Dot(zC.directions[1], CC)) * zC.extendSize.y + Math.abs(wC.r.Dot(zC.directions[2], CC)) * zC.extendSize.z;
        ZC.min = QC - bC, ZC.max = QC + bC
      },
      FC = (CC, zC, ZC) => (qC(CC, zC, fC), qC(CC, ZC, oC), !(fC.min > oC.max || oC.min > fC.max));
    class WC {
      constructor(CC, zC, ZC) {
        this._isLocked = !1, this.boundingBox = new bC.b(CC, zC, ZC), this.IQC = new nC(CC, zC, ZC)
      }
      reConstruct(CC, zC, ZC) {
        this.boundingBox.reConstruct(CC, zC, ZC), this.IQC.reConstruct(CC, zC, ZC)
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
      set isLocked(CC) {
        this._isLocked = CC
      }
      update(CC) {
        this._isLocked || (this.boundingBox._update(CC), this.IQC._update(CC))
      }
      centerOn(CC, zC) {
        const ZC = WC._TmpVector3[0].Av(CC).RQC(zC),
          QC = WC._TmpVector3[1].Av(CC).addInPlace(zC);
        return this.boundingBox.reConstruct(ZC, QC, this.boundingBox.getWorldMatrix()), this.IQC.reConstruct(ZC, QC, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(CC) {
        const zC = wC.r.Minimize(this.minimum, CC),
          ZC = wC.r.Maximize(this.maximum, CC);
        return this.reConstruct(zC, ZC, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(CC) {
        const zC = wC.j.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(zC);
        const ZC = wC.j.Eg[0];
        return wC.r.TransformCoordinatesToRef(CC.boundingBox.minimumWorld, zC, ZC), this.encapsulate(ZC), wC.r.TransformCoordinatesToRef(CC.boundingBox.maximumWorld, zC, ZC), this.encapsulate(ZC), this
      }
      scale(CC) {
        return this.boundingBox.scale(CC), this.IQC.scale(CC), this
      }
      isInFrustum(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === zC || 3 === zC) && this.IQC.isCenterInFrustum(CC)) return !0;
        if (!this.IQC.isInFrustum(CC)) return !1;
        return !(1 !== zC && 3 !== zC) || this.boundingBox.isInFrustum(CC)
      }
      get diagonalLength() {
        const CC = this.boundingBox;
        return CC.maximumWorld.subtractToRef(CC.minimumWorld, WC._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(CC) {
        return this.boundingBox.isCompletelyInFrustum(CC)
      }
      _checkCollision(CC) {
        return CC._canDoCollision(this.IQC.centerWorld, this.IQC.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(CC) {
        return !!this.IQC.centerWorld && (!!this.IQC.intersectsPoint(CC) && !!this.boundingBox.intersectsPoint(CC))
      }
      intersects(CC, zC) {
        if (!nC.Intersects(this.IQC, CC.IQC)) return !1;
        if (!bC.b.Intersects(this.boundingBox, CC.boundingBox)) return !1;
        if (!zC) return !0;
        const ZC = this.boundingBox,
          QC = CC.boundingBox;
        return !!FC(ZC.directions[0], ZC, QC) && (!!FC(ZC.directions[1], ZC, QC) && (!!FC(ZC.directions[2], ZC, QC) && (!!FC(QC.directions[0], ZC, QC) && (!!FC(QC.directions[1], ZC, QC) && (!!FC(QC.directions[2], ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[0], QC.directions[0]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[0], QC.directions[1]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[0], QC.directions[2]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[1], QC.directions[0]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[1], QC.directions[1]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[1], QC.directions[2]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[2], QC.directions[0]), ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[2], QC.directions[1]), ZC, QC) && !!FC(wC.r.Cross(ZC.directions[2], QC.directions[2]), ZC, QC))))))))))))))
      }
    }
    WC._TmpVector3 = (0, QC.d)(2, wC.r.Zero)
  },
  40157: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      g: () => oC,
      i: () => fC,
      l: () => nC
    });
    var QC = ZC(39969),
      wC = ZC(36963);

    function bC(CC) {
      -1 === CC.indexOf("vClipPlane") && CC.push("vClipPlane"), -1 === CC.indexOf("vClipPlane2") && CC.push("vClipPlane2"), -1 === CC.indexOf("vClipPlane3") && CC.push("vClipPlane3"), -1 === CC.indexOf("vClipPlane4") && CC.push("vClipPlane4"), -1 === CC.indexOf("vClipPlane5") && CC.push("vClipPlane5"), -1 === CC.indexOf("vClipPlane6") && CC.push("vClipPlane6")
    }

    function nC(CC, zC, ZC) {
      const QC = !!(CC.clipPlane ?? zC.clipPlane),
        wC = !!(CC.clipPlane2 ?? zC.clipPlane2),
        bC = !!(CC.clipPlane3 ?? zC.clipPlane3),
        nC = !!(CC.clipPlane4 ?? zC.clipPlane4),
        fC = !!(CC.clipPlane5 ?? zC.clipPlane5),
        oC = !!(CC.clipPlane6 ?? zC.clipPlane6);
      QC && ZC.push("#define CLIPPLANE"), wC && ZC.push("#define CLIPPLANE2"), bC && ZC.push("#define CLIPPLANE3"), nC && ZC.push("#define CLIPPLANE4"), fC && ZC.push("#define CLIPPLANE5"), oC && ZC.push("#define CLIPPLANE6")
    }

    function fC(CC, zC, ZC) {
      let QC = !1;
      const wC = !!(CC.clipPlane ?? zC.clipPlane),
        bC = !!(CC.clipPlane2 ?? zC.clipPlane2),
        nC = !!(CC.clipPlane3 ?? zC.clipPlane3),
        fC = !!(CC.clipPlane4 ?? zC.clipPlane4),
        oC = !!(CC.clipPlane5 ?? zC.clipPlane5),
        qC = !!(CC.clipPlane6 ?? zC.clipPlane6);
      return ZC.CLIPPLANE !== wC && (ZC.CLIPPLANE = wC, QC = !0), ZC.CLIPPLANE2 !== bC && (ZC.CLIPPLANE2 = bC, QC = !0), ZC.CLIPPLANE3 !== nC && (ZC.CLIPPLANE3 = nC, QC = !0), ZC.CLIPPLANE4 !== fC && (ZC.CLIPPLANE4 = fC, QC = !0), ZC.CLIPPLANE5 !== oC && (ZC.CLIPPLANE5 = oC, QC = !0), ZC.CLIPPLANE6 !== qC && (ZC.CLIPPLANE6 = qC, QC = !0), QC
    }

    function oC(CC, zC, ZC) {
      let QC = zC.clipPlane ?? ZC.clipPlane;
      qC(CC, "vClipPlane", QC), QC = zC.clipPlane2 ?? ZC.clipPlane2, qC(CC, "vClipPlane2", QC), QC = zC.clipPlane3 ?? ZC.clipPlane3, qC(CC, "vClipPlane3", QC), QC = zC.clipPlane4 ?? ZC.clipPlane4, qC(CC, "vClipPlane4", QC), QC = zC.clipPlane5 ?? ZC.clipPlane5, qC(CC, "vClipPlane5", QC), QC = zC.clipPlane6 ?? ZC.clipPlane6, qC(CC, "vClipPlane6", QC)
    }

    function qC(CC, zC, ZC) {
      if (ZC) {
        const bC = QC.b.Km()?.floatingOriginOffset || wC.r.ZeroReadOnly;
        CC.setFloat4(zC, ZC.normal.x, ZC.normal.y, ZC.normal.z, ZC.d + wC.r.Dot(ZC.normal, bC))
      }
    }
  },
  40175: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(CC, zC) {
        this._defines[CC] || (CC < this._currentRank && (this._currentRank = CC), CC > this._maxRank && (this._maxRank = CC), this._defines[CC] = new Array), this._defines[CC].push(zC)
      }
      addCPUSkinningFallback(CC, zC) {
        this._mesh = zC, CC < this._currentRank && (this._currentRank = CC), CC > this._maxRank && (this._maxRank = CC)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(CC, zC) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, CC = CC.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), zC._bonesComputationForcedToCPU = !0;
          const ZC = this._mesh.Km();
          for (let CC = 0; CC < ZC.meshes.length; CC++) {
            const QC = ZC.meshes[CC];
            if (QC.material) {
              if (QC.computeBonesUsingShaders && 0 !== QC.numBoneInfluencers)
                if (QC.material.getEffect() === zC) QC.computeBonesUsingShaders = !1;
                else if (QC.Zx)
                for (const CC of QC.Zx) {
                  if (CC.effect === zC) {
                    QC.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && QC.computeBonesUsingShaders && QC.numBoneInfluencers > 0 && (QC.computeBonesUsingShaders = !1)
          }
        } else {
          const zC = this._defines[this._currentRank];
          if (zC)
            for (let ZC = 0; ZC < zC.length; ZC++) CC = CC.replace("#define " + zC[ZC], "");
          this._currentRank++
        }
        return CC
      }
    }
  },
  40110: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => GC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(39913),
      nC = ZC(36987),
      fC = ZC(36985),
      oC = ZC(40119),
      qC = ZC(39950),
      FC = ZC(38507),
      WC = ZC(37596),
      NC = ZC(40148),
      MC = ZC(39842);
    let gC = (() => {
      var CC;
      let zC, ZC, bC, nC, fC, oC, qC, FC, WC, NC, gC, SC, pC = [];
      return CC = class {
        constructor() {
          this._func = (0, QC.n)(this, pC), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(CC) {
          this._func = CC
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(CC) {
          this._backFunc = CC
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(CC) {
          this._funcRef = CC
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(CC) {
          this._funcMask = CC
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(CC) {
          this._opStencilFail = CC
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(CC) {
          this._opDepthFail = CC
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(CC) {
          this._opStencilDepthPass = CC
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(CC) {
          this._backOpStencilFail = CC
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(CC) {
          this._backOpDepthFail = CC
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(CC) {
          this._backOpStencilDepthPass = CC
        }
        get mask() {
          return this._mask
        }
        set mask(CC) {
          this._mask = CC
        }
        get enabled() {
          return this._enabled
        }
        set enabled(CC) {
          this._enabled = CC
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(CC) {
          MC.d.Clone((() => CC), this)
        }
        serialize() {
          return MC.d.Serialize(this)
        }
        parse(CC, zC, ZC) {
          MC.d.Parse((() => this), CC, zC, ZC)
        }
      }, (() => {
        const MC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], (0, QC.j)(CC, null, zC, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: CC => "func" in CC,
            get: CC => CC.func
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, ZC, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: CC => "backFunc" in CC,
            get: CC => CC.backFunc
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, bC, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: CC => "funcRef" in CC,
            get: CC => CC.funcRef
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, nC, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: CC => "funcMask" in CC,
            get: CC => CC.funcMask
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, fC, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: CC => "opStencilFail" in CC,
            get: CC => CC.opStencilFail
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, oC, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: CC => "opDepthFail" in CC,
            get: CC => CC.opDepthFail
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, qC, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: CC => "opStencilDepthPass" in CC,
            get: CC => CC.opStencilDepthPass
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, FC, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: CC => "backOpStencilFail" in CC,
            get: CC => CC.backOpStencilFail
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, WC, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: CC => "backOpDepthFail" in CC,
            get: CC => CC.backOpDepthFail
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, NC, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: CC => "backOpStencilDepthPass" in CC,
            get: CC => CC.backOpStencilDepthPass
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, gC, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: CC => "mask" in CC,
            get: CC => CC.mask
          },
          metadata: MC
        }, null, pC), (0, QC.j)(CC, null, SC, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "enabled" in CC,
            get: CC => CC.enabled
          },
          metadata: MC
        }, null, pC), MC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MC
        })
      })(), CC
    })();
    var SC = ZC(40151),
      pC = ZC(39738),
      PC = ZC(39694);
    let GC = (() => {
      var CC;
      let zC, ZC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC = [],
        yC = [],
        LC = [],
        UC = [],
        BC = [],
        OC = [],
        kC = [],
        VC = [],
        Cz = [],
        zz = [],
        Zz = [],
        Qz = [],
        wz = [],
        bz = [],
        nz = [],
        fz = [],
        oz = [],
        qz = [],
        Fz = [],
        Wz = [],
        Nz = [],
        Mz = [],
        gz = [],
        Sz = [],
        pz = [],
        Pz = [],
        Gz = [],
        Rz = [],
        Az = [],
        xz = [],
        Jz = [],
        Iz = [],
        iz = [],
        vz = [],
        ez = [],
        hz = [],
        Kz = [],
        Yz = [],
        dz = [],
        mz = [],
        Hz = [],
        Ez = [],
        lz = [],
        Xz = [],
        cz = [],
        uz = [],
        rz = [],
        sz = [],
        Tz = [],
        az = [],
        tz = [];
      return CC = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(zC) {
          this._useVertexPulling !== zC && (this._useVertexPulling = zC, this.YzC(CC.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(CC) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(zC) {
          if (this._alpha === zC) return;
          const ZC = this._alpha;
          this._alpha = zC, 1 !== ZC && 1 !== zC || this.YzC(CC.MiscDirtyFlag + CC.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(zC) {
          this._backFaceCulling !== zC && (this._backFaceCulling = zC, this.YzC(CC.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(zC) {
          const ZC = Math.max(0, Math.min(0 | zC, 4));
          this._textureRepetitionMode !== ZC && (this._textureRepetitionMode = ZC, this.YzC(CC.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(zC) {
          this._cullBackFaces !== zC && (this._cullBackFaces = zC, this.YzC(CC.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(CC) {
          this._blockDirtyMechanism !== CC && (this._blockDirtyMechanism = CC, CC || this.markDirty())
        }
        atomicMaterialsUpdate(CC) {
          this.blockDirtyMechanism = !0;
          try {
            CC(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(CC) {
          this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new nC.d), this._onBindObservable
        }
        set onBind(CC) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(CC)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new nC.d), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new nC.d), this._onEffectCreatedObservable
        }
        set alphaMode(CC) {
          this._alphaMode[0] = CC
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[ZC] !== zC && (this._alphaMode[ZC] = zC, this.YzC(CC.TextureDirtyFlag))
        }
        set needDepthPrePass(CC) {
          this._needDepthPrePass !== CC && (this._needDepthPrePass = CC, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(zC) {
          this._fogEnabled !== zC && (this._fogEnabled = zC, this.YzC(CC.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case CC.WireFrameFillMode:
            case CC.LineListDrawMode:
            case CC.LineLoopDrawMode:
            case CC.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(zC) {
          this.fillMode = zC ? CC.WireFrameFillMode : CC.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case CC.PointFillMode:
            case CC.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(zC) {
          this.fillMode = zC ? CC.PointFillMode : CC.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(zC) {
          this._fillMode !== zC && (this._fillMode = zC, this.YzC(CC.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(CC) {
          const zC = this.Km().mg().getCaps().fragmentDepthSupported;
          CC && !zC && FC.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = CC && zC, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(CC) {
          this._isVertexOutputInvariant !== CC && (this._isVertexOutputInvariant = CC, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(CC) {
          this._drawWrapper = CC
        }
        constructor(zC, ZC, wC) {
          let oC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, QC.n)(this, jC), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, QC.n)(this, yC, void 0), this.uniqueId = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, void 0)), this._loadedUniqueId = (0, QC.n)(this, BC), this.name = (0, QC.n)(this, OC, void 0), this.metadata = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, null)), this._internalMetadata = (0, QC.n)(this, Cz), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, QC.n)(this, zz, !1), this.checkReadyOnlyOnce = ((0, QC.n)(this, Zz), (0, QC.n)(this, Qz, !1)), this.state = ((0, QC.n)(this, wz), (0, QC.n)(this, bz, "")), this._alpha = ((0, QC.n)(this, nz), (0, QC.n)(this, fz, 1)), this.inspectableCustomProperties = (0, QC.n)(this, oz), this._backFaceCulling = (0, QC.n)(this, qz, !0), this._textureRepetitionMode = ((0, QC.n)(this, Fz), (0, QC.n)(this, Wz, 0)), this.textureRepetitionHexTilingParams = ((0, QC.n)(this, Nz), (0, QC.n)(this, Mz, [1, .6, 7, .5])), this._cullBackFaces = ((0, QC.n)(this, gz), (0, QC.n)(this, Sz, !0)), this._blockDirtyMechanism = ((0, QC.n)(this, pz), !1), this.sideOrientation = (0, QC.n)(this, Pz, null), this.onCompiled = ((0, QC.n)(this, Gz), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.Tm = new nC.d, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, QC.n)(this, Rz, [2]), this._needDepthPrePass = ((0, QC.n)(this, Az), (0, QC.n)(this, xz, !1)), this.disableDepthWrite = ((0, QC.n)(this, Jz), (0, QC.n)(this, Iz, !1)), this.disableColorWrite = ((0, QC.n)(this, iz), (0, QC.n)(this, vz, !1)), this.forceDepthWrite = ((0, QC.n)(this, ez), (0, QC.n)(this, hz, !1)), this.depthFunction = ((0, QC.n)(this, Kz), (0, QC.n)(this, Yz, 0)), this.separateCullingPass = ((0, QC.n)(this, dz), (0, QC.n)(this, mz, !1)), this._fogEnabled = ((0, QC.n)(this, Hz), (0, QC.n)(this, Ez, !0)), this.pointSize = ((0, QC.n)(this, lz), (0, QC.n)(this, Xz, 1)), this.zOffset = ((0, QC.n)(this, cz), (0, QC.n)(this, uz, 0)), this.zOffsetUnits = ((0, QC.n)(this, rz), (0, QC.n)(this, sz, 0)), this.clipPlane = (0, QC.n)(this, Tz), this.stencil = new gC, this._isVertexOutputInvariant = (0, QC.n)(this, az, CC.ForceVertexOutputInvariant), this._materialContext = (0, QC.n)(this, tz), this._useUBO = !1, this._fillMode = CC.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = zC;
          const FC = ZC || fC.c.LastCreatedScene;
          FC && (this._scene = FC, this._dirtyCallbacks = {}, this._forceGLSL = oC, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = zC || bC.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.mg().createMaterialContext(), this._drawWrapper = new NC.d(this._scene.mg(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new qC.c(this._scene.mg(), void 0, void 0, zC), this._useUBO = this.Km().mg().supportsUniformBuffers, this._createUniformBuffer(), wC || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), CC.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const CC = this.Km().mg();
          this._uniformBuffer?.dispose(), CC.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new qC.c(CC, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new qC.c(this._scene.mg(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(CC) {
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
        isReady(CC, zC) {
          return !0
        }
        isReadyForSubMesh(CC, zC, ZC) {
          const QC = zC.materialDefines;
          return !!QC && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = QC, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        Km() {
          return this._scene
        }
        _getEffectiveOrientation(CC) {
          return null !== this.sideOrientation ? this.sideOrientation : CC.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(CC) {
          this._transparencyMode = CC
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === CC.MATERIAL_ALPHABLEND || this._transparencyMode === CC.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === CC.MATERIAL_ALPHATEST || this._transparencyMode === CC.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === CC.MATERIAL_OPAQUE || this._transparencyMode === CC.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(CC) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : CC.visibility < 1 || !this._disableAlphaBlending && (CC.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(CC) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(CC) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ZC = this.Km().meshes;
          for (const CC of ZC)
            if (CC.Zx)
              for (const ZC of CC.Zx)
                if (ZC.cg() === this)
                  for (const CC of ZC._drawWrappers) CC && this._materialContext === CC.materialContext && (CC._wasPreviouslyReady = !1, CC._wasPreviouslyUsingInstances = null, CC._forceRebindOnNextCall = zC);
          zC && this.YzC(CC.AllDirtyFlag)
        }
        _preBind(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const QC = this._scene.mg(),
            wC = (null == ZC ? this.sideOrientation : ZC) === CC.ClockWiseSideOrientation,
            bC = zC || this._getDrawWrapper();
          return (0, pC.c)(bC) && bC.materialContext && (bC.materialContext.useVertexPulling = this.useVertexPulling), QC.enableEffect(bC), QC.setState(this.backFaceCulling, this.zOffset, !1, wC, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), wC
        }
        bind(CC, zC) {}
        buildUniformLayout() {
          const CC = this._uniformBuffer;
          this._eventInfo.ubo = CC, this._callbackPluginEventGeneric(8, this._eventInfo), CC.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(CC, zC, ZC) {
          const QC = ZC._drawWrapper;
          this._eventInfo.subMesh = ZC, this._callbackPluginEventBindForSubMesh(this._eventInfo), QC._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(CC) {}
        bindView(CC) {
          this._useUBO ? this._needToBindSceneUbo = !0 : CC.setMatrix("view", this.Km().getViewMatrix())
        }
        bindViewProjection(CC) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (CC.setMatrix("viewProjection", this.Km().getTransformMatrix()), CC.setMatrix("projection", this.Km().getProjectionMatrix()), CC.setMatrix("inverseProjection", this.Km().getInverseProjectionMatrix()))
        }
        bindEyePosition(CC, zC) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(CC, zC)
        }
        _afterBind(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && zC && (this._needToBindSceneUbo = !1, (0, SC.x)(zC, this.Km().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = CC ? CC.visibility : 1, this._onBindObservable && CC && this._onBindObservable.notifyObservers(CC), this.disableDepthWrite) {
            const CC = this._scene.mg();
            this._cachedDepthWriteState = CC.getDepthWrite(), CC.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const CC = this._scene.mg();
            this._cachedColorWriteState = CC.getColorWrite(), CC.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const CC = this._scene.mg();
            this._cachedDepthFunctionState = CC.getDepthFunction() || 0, CC.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.mg().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.mg().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.mg().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(CC) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = CC, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(CC) {
          return null
        }
        _clonePlugins(zC, ZC) {
          const QC = {};
          if (this._serializePlugins(QC), CC._ParsePlugins(QC, zC, this._scene, ZC), this.pluginManager)
            for (const CC of this.pluginManager._plugins) {
              const ZC = zC.pluginManager.getPlugin(CC.name);
              ZC && CC.copyTo(ZC)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const CC = [];
            for (const zC in this.meshMap) {
              const ZC = this.meshMap[zC];
              ZC && CC.push(ZC)
            }
            return CC
          }
          return this._scene.meshes.filter((CC => CC.material === this))
        }
        forceCompilation(CC, zC, ZC, QC) {
          const wC = {
              clipPlane: !1,
              useInstances: !1,
              ...ZC
            },
            bC = this.Km(),
            nC = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const fC = () => {
            if (!this._scene || !this._scene.mg()) return;
            const ZC = bC.clipPlane;
            if (wC.clipPlane && (bC.clipPlane = new WC.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let ZC = !0,
                bC = null;
              if (CC.Zx) {
                const zC = new oC.d(0, 0, 0, 0, 0, CC, void 0, !1, !1);
                zC.materialDefines && (zC.materialDefines._renderId = -1), this.isReadyForSubMesh(CC, zC, wC.useInstances) || (zC.effect && zC.effect.getCompilationError() && zC.effect.allFallbacksProcessed() ? bC = zC.effect.getCompilationError() : (ZC = !1, setTimeout(fC, 16)))
              }
              ZC && (this.allowShaderHotSwapping = nC, bC && QC && QC(bC), zC && zC(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = nC, zC && zC(this)) : setTimeout(fC, 16);
            wC.clipPlane && (bC.clipPlane = ZC)
          };
          fC()
        }
        async forceCompilationAsync(CC, zC) {
          return await new Promise(((ZC, QC) => {
            this.forceCompilation(CC, (() => {
              ZC()
            }), zC, (CC => {
              QC(CC)
            }))
          }))
        }
        YzC(zC) {
          this.Km().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (CC._DirtyCallbackArray.length = 0, zC & CC.ImageProcessingDirtyFlag && CC._DirtyCallbackArray.push(CC._ImageProcessingDirtyCallBack), zC & CC.TextureDirtyFlag && CC._DirtyCallbackArray.push(CC._TextureDirtyCallBack), zC & CC.LightDirtyFlag && CC._DirtyCallbackArray.push(CC._LightsDirtyCallBack), zC & CC.FresnelDirtyFlag && CC._DirtyCallbackArray.push(CC._FresnelDirtyCallBack), zC & CC.AttributesDirtyFlag && CC._DirtyCallbackArray.push(CC._AttributeDirtyCallBack), zC & CC.MiscDirtyFlag && CC._DirtyCallbackArray.push(CC._MiscDirtyCallBack), zC & CC.PrePassDirtyFlag && CC._DirtyCallbackArray.push(CC._PrePassDirtyCallBack), CC._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(CC._RunDirtyCallBacks), this.Km().resetCachedMaterial())
        }
        resetDrawCache() {
          const CC = this.Km().meshes;
          for (const zC of CC)
            if (zC.Zx)
              for (const CC of zC.Zx) CC.cg() === this && CC.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(CC) {
          const zC = this.Km();
          if (zC.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const ZC = zC.meshes;
          for (const QC of ZC)
            if (QC.Zx)
              for (const ZC of QC.Zx) {
                if ((ZC.cg() || (zC._hasDefaultMaterial ? zC.defaultMaterial : null)) === this)
                  for (const zC of ZC._drawWrappers) zC && zC.defines && zC.defines.markAllAsDirty && this._materialContext === zC.materialContext && CC(zC.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.Km().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const CC = this.Km().enablePrePassRenderer();
          CC && CC.YzC()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(CC._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(CC._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(CC._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(CC._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(CC._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(CC._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(CC._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(CC._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(CC._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(CC._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const CC = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.Tm.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(CC)
            }))
          }
        }
        setPrePassRenderer(CC) {
          return !1
        }
        dispose(CC, zC, ZC) {
          const QC = this.Km();
          if (QC.stopAnimation(this), QC.freeProcessedMaterials(), QC.removeMaterial(this), this._eventInfo.forceDisposeTextures = zC, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const CC = this._parentContainer.materials.indexOf(this);
            CC > -1 && this._parentContainer.materials.splice(CC, 1), this._parentContainer = null
          }
          if (!0 !== ZC)
            if (this.meshMap)
              for (const wC in this.meshMap) {
                const CC = this.meshMap[wC];
                this._disposeMeshResources(CC)
              } else {
                const CC = QC.meshes;
                for (const zC of CC) this._disposeMeshResources(zC)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Tm.notifyObservers(this), this.Tm.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(CC) {
          if (!CC) return;
          const zC = CC.geometry,
            ZC = CC._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (CC.Zx && ZC)
              for (const QC of CC.Zx) {
                const CC = QC._drawWrappers;
                for (let wC = 0; wC < CC.length; wC++) {
                  const bC = CC[wC]?.effect;
                  if (!bC) continue;
                  ZC[wC] === this && (zC?._releaseVertexArrayObject(bC), QC._removeDrawWrapper(wC, !0, !0))
                }
              }
          } else zC?._releaseVertexArrayObject(this._drawWrapper.effect);
          CC.material !== this || CC.LQC || (CC.material = null)
        }
        serialize() {
          const CC = MC.d.Serialize(this);
          return CC.stencil = this.stencil.serialize(), CC.uniqueId = this.uniqueId, this._serializePlugins(CC), CC
        }
        _serializePlugins(CC) {
          if (CC.plugins = {}, this.pluginManager)
            for (const zC of this.pluginManager._plugins) zC.doNotSerialize || (CC.plugins[zC.getClassName()] = zC.serialize())
        }
        static ParseAlphaMode(CC, zC) {
          void 0 !== CC._alphaMode ? zC._alphaMode = Array.isArray(CC._alphaMode) ? [...CC._alphaMode] : [CC._alphaMode] : void 0 !== CC.alphaMode ? zC._alphaMode = Array.isArray(CC.alphaMode) ? [...CC.alphaMode] : [CC.alphaMode] : zC._alphaMode = [2]
        }
        static Parse(zC, ZC, QC) {
          if (zC.customType) {
            if ("BABYLON.PBRMaterial" === zC.customType && zC.overloadedAlbedo && (zC.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return FC.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else zC.customType = "BABYLON.StandardMaterial";
          const wC = bC.g.Instantiate(zC.customType).Parse(zC, ZC, QC);
          return wC._loadedUniqueId = zC.uniqueId, CC.ParseAlphaMode(zC, wC), wC
        }
        static _ParsePlugins(CC, zC, ZC, QC) {
          if (CC.plugins)
            for (const wC in CC.plugins) {
              const nC = CC.plugins[wC];
              let fC = zC.pluginManager?.getPlugin(nC.name);
              if (!fC) {
                const CC = bC.g.Instantiate("BABYLON." + wC);
                CC && (fC = new CC(zC))
              }
              fC?.parse(nC, ZC, QC)
            }
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)("alpha")], IC = [(0, wC.M)("backFaceCulling")], iC = [(0, wC.M)("textureRepetitionMode")], vC = [(0, wC.M)("textureRepetitionHexTilingParams")], eC = [(0, wC.M)("cullBackFaces")], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], dC = [(0, wC.M)()], mC = [(0, wC.M)()], HC = [(0, wC.M)()], EC = [(0, wC.M)()], lC = [(0, wC.M)()], XC = [(0, wC.M)("fogEnabled")], cC = [(0, wC.M)()], uC = [(0, wC.M)()], rC = [(0, wC.M)()], sC = [(0, wC.M)()], TC = [(0, wC.M)()], aC = [(0, wC.M)()], tC = [(0, wC.M)()], DC = [(0, wC.M)()], (0, QC.j)(CC, null, sC, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: CC => "pointsCloud" in CC,
            get: CC => CC.pointsCloud
          },
          metadata: bC
        }, null, jC), (0, QC.j)(CC, null, TC, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "fillMode" in CC,
            get: CC => CC.fillMode
          },
          metadata: bC
        }, null, jC), (0, QC.j)(CC, null, aC, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: CC => "useLogarithmicDepth" in CC,
            get: CC => CC.useLogarithmicDepth
          },
          metadata: bC
        }, null, jC), (0, QC.j)(CC, null, DC, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "transparencyMode" in CC,
            get: CC => CC.transparencyMode
          },
          metadata: bC
        }, null, jC), (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: CC => "id" in CC,
            get: CC => CC.id,
            set: (CC, zC) => {
              CC.id = zC
            }
          },
          metadata: bC
        }, yC, LC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: CC => "uniqueId" in CC,
            get: CC => CC.uniqueId,
            set: (CC, zC) => {
              CC.uniqueId = zC
            }
          },
          metadata: bC
        }, UC, BC), (0, QC.j)(null, null, PC, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: CC => "name" in CC,
            get: CC => CC.name,
            set: (CC, zC) => {
              CC.name = zC
            }
          },
          metadata: bC
        }, OC, kC), (0, QC.j)(null, null, GC, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: CC => "metadata" in CC,
            get: CC => CC.metadata,
            set: (CC, zC) => {
              CC.metadata = zC
            }
          },
          metadata: bC
        }, VC, Cz), (0, QC.j)(null, null, RC, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: CC => "checkReadyOnEveryCall" in CC,
            get: CC => CC.checkReadyOnEveryCall,
            set: (CC, zC) => {
              CC.checkReadyOnEveryCall = zC
            }
          },
          metadata: bC
        }, zz, Zz), (0, QC.j)(null, null, AC, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: CC => "checkReadyOnlyOnce" in CC,
            get: CC => CC.checkReadyOnlyOnce,
            set: (CC, zC) => {
              CC.checkReadyOnlyOnce = zC
            }
          },
          metadata: bC
        }, Qz, wz), (0, QC.j)(null, null, xC, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: CC => "state" in CC,
            get: CC => CC.state,
            set: (CC, zC) => {
              CC.state = zC
            }
          },
          metadata: bC
        }, bz, nz), (0, QC.j)(null, null, JC, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: CC => "_alpha" in CC,
            get: CC => CC._alpha,
            set: (CC, zC) => {
              CC._alpha = zC
            }
          },
          metadata: bC
        }, fz, oz), (0, QC.j)(null, null, IC, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: CC => "_backFaceCulling" in CC,
            get: CC => CC._backFaceCulling,
            set: (CC, zC) => {
              CC._backFaceCulling = zC
            }
          },
          metadata: bC
        }, qz, Fz), (0, QC.j)(null, null, iC, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "_textureRepetitionMode" in CC,
            get: CC => CC._textureRepetitionMode,
            set: (CC, zC) => {
              CC._textureRepetitionMode = zC
            }
          },
          metadata: bC
        }, Wz, Nz), (0, QC.j)(null, null, vC, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: CC => "textureRepetitionHexTilingParams" in CC,
            get: CC => CC.textureRepetitionHexTilingParams,
            set: (CC, zC) => {
              CC.textureRepetitionHexTilingParams = zC
            }
          },
          metadata: bC
        }, Mz, gz), (0, QC.j)(null, null, eC, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: CC => "_cullBackFaces" in CC,
            get: CC => CC._cullBackFaces,
            set: (CC, zC) => {
              CC._cullBackFaces = zC
            }
          },
          metadata: bC
        }, Sz, pz), (0, QC.j)(null, null, hC, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: CC => "sideOrientation" in CC,
            get: CC => CC.sideOrientation,
            set: (CC, zC) => {
              CC.sideOrientation = zC
            }
          },
          metadata: bC
        }, Pz, Gz), (0, QC.j)(null, null, KC, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "_alphaMode" in CC,
            get: CC => CC._alphaMode,
            set: (CC, zC) => {
              CC._alphaMode = zC
            }
          },
          metadata: bC
        }, Rz, Az), (0, QC.j)(null, null, YC, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: CC => "_needDepthPrePass" in CC,
            get: CC => CC._needDepthPrePass,
            set: (CC, zC) => {
              CC._needDepthPrePass = zC
            }
          },
          metadata: bC
        }, xz, Jz), (0, QC.j)(null, null, dC, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: CC => "disableDepthWrite" in CC,
            get: CC => CC.disableDepthWrite,
            set: (CC, zC) => {
              CC.disableDepthWrite = zC
            }
          },
          metadata: bC
        }, Iz, iz), (0, QC.j)(null, null, mC, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: CC => "disableColorWrite" in CC,
            get: CC => CC.disableColorWrite,
            set: (CC, zC) => {
              CC.disableColorWrite = zC
            }
          },
          metadata: bC
        }, vz, ez), (0, QC.j)(null, null, HC, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: CC => "forceDepthWrite" in CC,
            get: CC => CC.forceDepthWrite,
            set: (CC, zC) => {
              CC.forceDepthWrite = zC
            }
          },
          metadata: bC
        }, hz, Kz), (0, QC.j)(null, null, EC, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: CC => "depthFunction" in CC,
            get: CC => CC.depthFunction,
            set: (CC, zC) => {
              CC.depthFunction = zC
            }
          },
          metadata: bC
        }, Yz, dz), (0, QC.j)(null, null, lC, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: CC => "separateCullingPass" in CC,
            get: CC => CC.separateCullingPass,
            set: (CC, zC) => {
              CC.separateCullingPass = zC
            }
          },
          metadata: bC
        }, mz, Hz), (0, QC.j)(null, null, XC, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "_fogEnabled" in CC,
            get: CC => CC._fogEnabled,
            set: (CC, zC) => {
              CC._fogEnabled = zC
            }
          },
          metadata: bC
        }, Ez, lz), (0, QC.j)(null, null, cC, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: CC => "pointSize" in CC,
            get: CC => CC.pointSize,
            set: (CC, zC) => {
              CC.pointSize = zC
            }
          },
          metadata: bC
        }, Xz, cz), (0, QC.j)(null, null, uC, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: CC => "zOffset" in CC,
            get: CC => CC.zOffset,
            set: (CC, zC) => {
              CC.zOffset = zC
            }
          },
          metadata: bC
        }, uz, rz), (0, QC.j)(null, null, rC, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: CC => "zOffsetUnits" in CC,
            get: CC => CC.zOffsetUnits,
            set: (CC, zC) => {
              CC.zOffsetUnits = zC
            }
          },
          metadata: bC
        }, sz, Tz), (0, QC.j)(null, null, tC, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: CC => "_isVertexOutputInvariant" in CC,
            get: CC => CC._isVertexOutputInvariant,
            set: (CC, zC) => {
              CC._isVertexOutputInvariant = zC
            }
          },
          metadata: bC
        }, az, tz), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC.TriangleFillMode = 0, CC.WireFrameFillMode = 1, CC.PointFillMode = 2, CC.PointListDrawMode = 3, CC.LineListDrawMode = 4, CC.LineLoopDrawMode = 5, CC.LineStripDrawMode = 6, CC.TriangleStripDrawMode = 7, CC.TriangleFanDrawMode = 8, CC.ClockWiseSideOrientation = 0, CC.CounterClockWiseSideOrientation = 1, CC.ImageProcessingDirtyFlag = 64, CC.TextureDirtyFlag = 1, CC.LightDirtyFlag = 2, CC.FresnelDirtyFlag = 4, CC.AttributesDirtyFlag = 8, CC.MiscDirtyFlag = 16, CC.PrePassDirtyFlag = 32, CC.AllDirtyFlag = 127, CC.MATERIAL_OPAQUE = 0, CC.MATERIAL_ALPHATEST = 1, CC.MATERIAL_ALPHABLEND = 2, CC.MATERIAL_ALPHATESTANDBLEND = 3, CC.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, CC.MATERIAL_NORMALBLENDMETHOD_RNM = 1, CC.LIGHTFALLOFF_PHYSICAL = 0, CC.LIGHTFALLOFF_GLTF = 1, CC.LIGHTFALLOFF_STANDARD = 2, CC.OnEventObservable = new nC.d, CC.ForceVertexOutputInvariant = !1, CC._AllDirtyCallBack = CC => CC.markAllAsDirty(), CC._ImageProcessingDirtyCallBack = CC => CC.markAsImageProcessingDirty(), CC._TextureDirtyCallBack = CC => CC.markAsTexturesDirty(), CC._FresnelDirtyCallBack = CC => CC.markAsFresnelDirty(), CC._MiscDirtyCallBack = CC => CC.markAsMiscDirty(), CC._PrePassDirtyCallBack = CC => CC.markAsPrePassDirty(), CC._LightsDirtyCallBack = CC => CC.markAsLightDirty(), CC._AttributeDirtyCallBack = CC => CC.markAsAttributesDirty(), CC._FresnelAndMiscDirtyCallBack = zC => {
        CC._FresnelDirtyCallBack(zC), CC._MiscDirtyCallBack(zC)
      }, CC._TextureAndMiscDirtyCallBack = zC => {
        CC._TextureDirtyCallBack(zC), CC._MiscDirtyCallBack(zC)
      }, CC._DirtyCallbackArray = [], CC._RunDirtyCallBacks = zC => {
        for (const ZC of CC._DirtyCallbackArray) ZC(zC)
      }, CC
    })();
    Object.getOwnPropertyDescriptor(GC.prototype, "pluginManager") || Object.defineProperty(GC.prototype, "pluginManager", (0, PC.d)("Material", "pluginManager"))
  },
  40162: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = ZC(39721);
    class wC {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(CC) {
        this._DiffuseTextureEnabled !== CC && (this._DiffuseTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(CC) {
        this._BaseWeightTextureEnabled !== CC && (this._BaseWeightTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(CC) {
        this._BaseDiffuseRoughnessTextureEnabled !== CC && (this._BaseDiffuseRoughnessTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(CC) {
        this._DetailTextureEnabled !== CC && (this._DetailTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(CC) {
        this._DecalMapEnabled !== CC && (this._DecalMapEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(CC) {
        this._AmbientTextureEnabled !== CC && (this._AmbientTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(CC) {
        this._OpacityTextureEnabled !== CC && (this._OpacityTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(CC) {
        this._ReflectionTextureEnabled !== CC && (this._ReflectionTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(CC) {
        this._EmissiveTextureEnabled !== CC && (this._EmissiveTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(CC) {
        this._SpecularTextureEnabled !== CC && (this._SpecularTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(CC) {
        this._BumpTextureEnabled !== CC && (this._BumpTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(CC) {
        this._LightmapTextureEnabled !== CC && (this._LightmapTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(CC) {
        this._RefractionTextureEnabled !== CC && (this._RefractionTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(CC) {
        this._ColorGradingTextureEnabled !== CC && (this._ColorGradingTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(CC) {
        this._FresnelEnabled !== CC && (this._FresnelEnabled = CC, QC.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(CC) {
        this._ClearCoatTextureEnabled !== CC && (this._ClearCoatTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(CC) {
        this._ClearCoatBumpTextureEnabled !== CC && (this._ClearCoatBumpTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(CC) {
        this._ClearCoatTintTextureEnabled !== CC && (this._ClearCoatTintTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(CC) {
        this._SheenTextureEnabled !== CC && (this._SheenTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(CC) {
        this._AnisotropicTextureEnabled !== CC && (this._AnisotropicTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(CC) {
        this._ThicknessTextureEnabled !== CC && (this._ThicknessTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(CC) {
        this._RefractionIntensityTextureEnabled !== CC && (this._RefractionIntensityTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(CC) {
        this._TranslucencyIntensityTextureEnabled !== CC && (this._TranslucencyIntensityTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(CC) {
        this._TranslucencyColorTextureEnabled !== CC && (this._TranslucencyColorTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(CC) {
        this._IridescenceTextureEnabled !== CC && (this._IridescenceTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
      }
    }
    wC._DiffuseTextureEnabled = !0, wC._BaseWeightTextureEnabled = !0, wC._BaseDiffuseRoughnessTextureEnabled = !0, wC._DetailTextureEnabled = !0, wC._DecalMapEnabled = !0, wC._AmbientTextureEnabled = !0, wC._OpacityTextureEnabled = !0, wC._ReflectionTextureEnabled = !0, wC._EmissiveTextureEnabled = !0, wC._SpecularTextureEnabled = !0, wC._BumpTextureEnabled = !0, wC._LightmapTextureEnabled = !0, wC._RefractionTextureEnabled = !0, wC._ColorGradingTextureEnabled = !0, wC._FresnelEnabled = !0, wC._ClearCoatTextureEnabled = !0, wC._ClearCoatBumpTextureEnabled = !0, wC._ClearCoatTintTextureEnabled = !0, wC._SheenTextureEnabled = !0, wC._AnisotropicTextureEnabled = !0, wC._ThicknessTextureEnabled = !0, wC._RefractionIntensityTextureEnabled = !0, wC._TranslucencyIntensityTextureEnabled = !0, wC._TranslucencyColorTextureEnabled = !0, wC._IridescenceTextureEnabled = !0
  },
  40151: (CC, zC, ZC) => {
    ZC.d(zC, {
      Ab: () => gC,
      B: () => AC,
      F: () => YC,
      J: () => xC,
      K: () => hC,
      N: () => KC,
      Q: () => MC,
      T: () => NC,
      X: () => TC,
      Z: () => XC,
      ab: () => EC,
      d: () => mC,
      db: () => HC,
      f: () => JC,
      gb: () => RC,
      h: () => WC,
      ib: () => dC,
      j: () => PC,
      lb: () => aC,
      n: () => GC,
      nb: () => tC,
      q: () => eC,
      qb: () => DC,
      t: () => oC,
      u: () => SC,
      ub: () => UC,
      wb: () => yC,
      x: () => pC,
      xb: () => LC
    });
    var QC = ZC(38507),
      wC = ZC(36985),
      bC = ZC(40022),
      nC = ZC(40157),
      fC = ZC(40162);

    function oC(CC, zC, ZC) {
      if (!CC || CC.LOGARITHMICDEPTH || CC.indexOf && CC.indexOf("LOGARITHMICDEPTH") >= 0) {
        const CC = ZC.activeCamera;
        1 === CC.mode && QC.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), zC.setFloat("logarithmicDepthConstant", 2 / (Math.log(CC.maxZ + 1) / Math.LN2))
      }
    }
    const qC = {
        r: 0,
        g: 0,
        b: 0
      },
      FC = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function WC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      ZC && CC.fogEnabled && (!zC || zC.applyFog) && 0 !== CC.fogMode && (ZC.setFloat4("vFogInfos", CC.fogMode, CC.fogStart, CC.fogEnd, CC.fogDensity), QC ? (CC.fogColor.toLinearSpaceToRef(qC, CC.mg().useExactSrgbConversions), ZC.setColor3("vFogColor", qC)) : ZC.setColor3("vFogColor", CC.fogColor))
    }

    function NC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
      const WC = CC.numMaxInfluencers || CC.numInfluencers;
      return WC <= 0 ? 0 : (zC.push("#define MORPHTARGETS"), CC.hasPositions && zC.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), CC.hasNormals && zC.push("#define MORPHTARGETTEXTURE_HASNORMALS"), CC.hasTangents && zC.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), CC.hasUVs && zC.push("#define MORPHTARGETTEXTURE_HASUVS"), CC.hasUV2s && zC.push("#define MORPHTARGETTEXTURE_HASUV2S"), CC.hasColors && zC.push("#define MORPHTARGETTEXTURE_HASCOLORS"), CC.supportsPositions && wC && zC.push("#define MORPHTARGETS_POSITION"), CC.supportsNormals && bC && zC.push("#define MORPHTARGETS_NORMAL"), CC.supportsTangents && nC && zC.push("#define MORPHTARGETS_TANGENT"), CC.supportsUVs && fC && zC.push("#define MORPHTARGETS_UV"), CC.supportsUV2s && oC && zC.push("#define MORPHTARGETS_UV2"), CC.supportsColors && qC && zC.push("#define MORPHTARGETS_COLOR"), zC.push("#define NUM_MORPH_INFLUENCERS " + WC), CC.isUsingTextureForTargets && zC.push("#define MORPHTARGETS_TEXTURE"), FC.NUM_MORPH_INFLUENCERS = WC, FC.NORMAL = bC, FC.TANGENT = nC, FC.UV = fC, FC.UV2 = oC, FC.COLOR = qC, MC(ZC, QC, FC, wC), WC)
    }

    function MC(CC, zC, ZC) {
      let bC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const nC = ZC.NUM_MORPH_INFLUENCERS;
      if (nC > 0 && wC.c.LastCreatedEngine) {
        const fC = wC.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          oC = zC.morphTargetManager;
        if (oC?.isUsingTextureForTargets) return;
        const qC = oC && oC.supportsPositions && bC,
          FC = oC && oC.supportsNormals && ZC.NORMAL,
          WC = oC && oC.supportsTangents && ZC.TANGENT,
          NC = oC && oC.supportsUVs && ZC.UV1,
          MC = oC && oC.supportsUV2s && ZC.UV2,
          gC = oC && oC.supportsColors && ZC.VERTEXCOLOR;
        for (let ZC = 0; ZC < nC; ZC++) qC && CC.push("position" + ZC), FC && CC.push("normal" + ZC), WC && CC.push("tangent" + ZC), NC && CC.push("uv_" + ZC), MC && CC.push("uv2_" + ZC), gC && CC.push("color" + ZC), CC.length > fC && QC.c.Error("Cannot add more vertex attributes for mesh " + zC.name)
      }
    }

    function gC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      CC.push("world0"), CC.push("world1"), CC.push("world2"), CC.push("world3"), zC && (CC.push("previousWorld0"), CC.push("previousWorld1"), CC.push("previousWorld2"), CC.push("previousWorld3"))
    }

    function SC(CC, zC) {
      const ZC = CC.morphTargetManager;
      CC && ZC && zC.setFloatArray("morphTargetInfluences", ZC.influences)
    }

    function pC(CC, zC) {
      zC.bindToEffect(CC, "Scene")
    }

    function PC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        FC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        WC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        NC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (CC.texturesEnabled && wC && fC.b.ReflectionTextureEnabled) {
        if (ZC.x_("reflectionMatrix", wC.getReflectionTextureMatrix()), ZC.updateFloat2("vReflectionInfos", wC.level * CC.iblIntensity, NC), oC && wC.boundingBoxSize) {
          const CC = wC;
          ZC.updateVector3("vReflectionPosition", CC.boundingBoxPosition), ZC.updateVector3("vReflectionSize", CC.boundingBoxSize)
        }
        if (bC) {
          const CC = wC.getSize().width;
          ZC.updateFloat2("vReflectionFilteringInfo", CC, Math.log2(CC))
        }
        if (FC && !zC.USEIRRADIANCEMAP) {
          const CC = wC.sphericalPolynomial;
          if (zC.USESPHERICALFROMREFLECTIONMAP && CC)
            if (zC.SPHERICAL_HARMONICS) {
              const zC = CC.preScaledHarmonics;
              ZC.updateVector3("vSphericalL00", zC.l00), ZC.updateVector3("vSphericalL1_1", zC.l1_1), ZC.updateVector3("vSphericalL10", zC.l10), ZC.updateVector3("vSphericalL11", zC.l11), ZC.updateVector3("vSphericalL2_2", zC.l2_2), ZC.updateVector3("vSphericalL2_1", zC.l2_1), ZC.updateVector3("vSphericalL20", zC.l20), ZC.updateVector3("vSphericalL21", zC.l21), ZC.updateVector3("vSphericalL22", zC.l22)
            } else ZC.updateFloat3("vSphericalX", CC.x.x, CC.x.y, CC.x.z), ZC.updateFloat3("vSphericalY", CC.y.x, CC.y.y, CC.y.z), ZC.updateFloat3("vSphericalZ", CC.z.x, CC.z.y, CC.z.z), ZC.updateFloat3("vSphericalXX_ZZ", CC.xx.x - CC.zz.x, CC.xx.y - CC.zz.y, CC.xx.z - CC.zz.z), ZC.updateFloat3("vSphericalYY_ZZ", CC.yy.x - CC.zz.x, CC.yy.y - CC.zz.y, CC.yy.z - CC.zz.z), ZC.updateFloat3("vSphericalZZ", CC.zz.x, CC.zz.y, CC.zz.z), ZC.updateFloat3("vSphericalXY", CC.xy.x, CC.xy.y, CC.xy.z), ZC.updateFloat3("vSphericalYZ", CC.yz.x, CC.yz.y, CC.yz.z), ZC.updateFloat3("vSphericalZX", CC.zx.x, CC.zx.y, CC.zx.z)
        } else qC && zC.USEIRRADIANCEMAP && zC.USE_IRRADIANCE_DOMINANT_DIRECTION && wC.irradianceTexture && ZC.updateVector3("vReflectionDominantDirection", wC.irradianceTexture._dominantDirection);
        nC && ZC.updateFloat3("vReflectionMicrosurfaceInfos", wC.getSize().width, wC.lodGenerationScale, wC.lodGenerationOffset)
      }
      WC && ZC.updateColor3("vReflectionColor", QC)
    }

    function GC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (QC && fC.b.ReflectionTextureEnabled) {
        zC.LODBASEDMICROSFURACE ? ZC.setTexture("reflectionSampler", QC) : (ZC.setTexture("reflectionSampler", QC._lodTextureMid || QC), ZC.setTexture("reflectionSamplerLow", QC._lodTextureLow || QC), ZC.setTexture("reflectionSamplerHigh", QC._lodTextureHigh || QC)), zC.USEIRRADIANCEMAP && ZC.setTexture("irradianceSampler", QC.irradianceTexture);
        const bC = CC.iblCdfGenerator;
        wC && bC && ZC.setTexture("icdfSampler", bC.getIcdfTexture())
      }
    }

    function RC(CC, zC, ZC) {
      zC._needUVs = !0, zC[ZC] = !0, CC.optimizeUVAllocation && CC.getTextureMatrix().isIdentityAs3x2() ? (zC[ZC + "DIRECTUV"] = CC.coordinatesIndex + 1, zC["MAINUV" + (CC.coordinatesIndex + 1)] = !0) : zC[ZC + "DIRECTUV"] = 0
    }

    function AC(CC, zC, ZC) {
      const QC = CC.getTextureMatrix();
      zC.x_(ZC + "Matrix", QC)
    }

    function xC(CC, zC, ZC) {
      ZC.BAKED_VERTEX_ANIMATION_TEXTURE && ZC.INSTANCES && CC.push("bakedVertexAnimationSettingsInstanced")
    }

    function JC(CC, zC, ZC) {
      var QC;
      if (zC && CC && (CC.computeBonesUsingShaders && zC._bonesComputationForcedToCPU && (CC.computeBonesUsingShaders = !1), CC.useBones && CC.computeBonesUsingShaders && CC.skeleton)) {
        const wC = CC.skeleton;
        if (wC.isUsingTextureForMatrices && zC.getUniformIndex("boneTextureInfo") > -1) {
          const ZC = wC.getTransformMatrixTexture(CC);
          zC.setTexture("boneSampler", ZC), zC.setFloat2("boneTextureInfo", wC._textureWidth, wC._textureHeight)
        } else {
          const bC = wC.getTransformMatrices(CC);
          bC && (zC.setMatrices("mBones", bC), ZC && CC.Km().prePassRenderer && CC.Km().prePassRenderer.getIndex(2) && (ZC.previousBones[CC.uniqueId] || (ZC.previousBones[CC.uniqueId] = bC.slice()), zC.setMatrices("mPreviousBones", ZC.previousBones[CC.uniqueId]), QC = bC, ZC.previousBones[CC.uniqueId].set(QC)))
        }
      }
    }

    function IC(CC, zC, ZC, QC, wC) {
      let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      CC._bindLight(zC, ZC, QC, wC, bC)
    }
    const iC = 4,
      vC = new WeakMap;

    function eC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const bC = Math.min(zC.lightSources.length, wC);
      for (let nC = 0; nC < bC; nC++) {
        IC(zC.lightSources[nC], nC, CC, ZC, "boolean" === typeof QC ? QC : QC.SPECULARTERM, zC.receiveShadows)
      }
    }

    function hC(CC, zC, ZC, QC) {
      ZC.NUM_BONE_INFLUENCERS > 0 && (QC.addCPUSkinningFallback(0, zC), CC.push("matricesIndices"), CC.push("matricesWeights"), ZC.NUM_BONE_INFLUENCERS > 4 && (CC.push("matricesIndicesExtra"), CC.push("matricesWeightsExtra")))
    }

    function KC(CC, zC) {
      (zC.INSTANCES || zC.THIN_INSTANCES) && gC(CC, !!zC.PREPASS_VELOCITY), zC.INSTANCESCOLOR && CC.push("instanceColor")
    }

    function YC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        wC = 0;
      for (let bC = 0; bC < ZC && CC["LIGHT" + bC]; bC++) bC > 0 && (wC = QC + bC, zC.addFallback(wC, "LIGHT" + bC)), CC.SHADOWS || (CC["SHADOW" + bC] && zC.addFallback(QC, "SHADOW" + bC), CC["SHADOWPCF" + bC] && zC.addFallback(QC, "SHADOWPCF" + bC), CC["SHADOWPCSS" + bC] && zC.addFallback(QC, "SHADOWPCSS" + bC), CC["SHADOWPOISSON" + bC] && zC.addFallback(QC, "SHADOWPOISSON" + bC), CC["SHADOWESM" + bC] && zC.addFallback(QC, "SHADOWESM" + bC), CC["SHADOWCLOSEESM" + bC] && zC.addFallback(QC, "SHADOWCLOSEESM" + bC));
      return wC
    }

    function dC(CC, zC, ZC, QC, wC, bC, nC) {
      let fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qC = arguments.length > 9 ? arguments[9] : void 0,
        FC = arguments.length > 10 ? arguments[10] : void 0;
      if (nC._areMiscDirty) {
        nC.LOGARITHMICDEPTH = ZC, nC.POINTSIZE = QC, nC.FOG = wC && function(CC, zC) {
          return zC.fogEnabled && CC.applyFog && 0 !== zC.fogMode
        }(CC, zC), nC.NONUNIFORMSCALING = CC.nonUniformScaling, nC.ALPHATEST = bC, nC.DECAL_AFTER_DETAIL = fC, nC.USE_VERTEX_PULLING = oC, nC.RIGHT_HANDED = zC.useRightHandedSystem;
        const WC = oC ? qC?.geometry?.getIndexBuffer() : null,
          NC = !!qC && qC.isUnIndexed;
        nC.VERTEX_PULLING_USE_INDEX_BUFFER = !!WC && !NC, nC.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!WC || NC) && WC.is32Bits, nC.VERTEXOUTPUT_INVARIANT = !!FC
      }
    }

    function mC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!CC.lightsEnabled || QC) return !0;
      const wC = zC.lightSources,
        bC = Math.min(wC.length, ZC);
      for (let nC = 0; nC < bC; nC++)
        if (!wC[nC].areLightTexturesReady()) return !1;
      return !0
    }

    function HC(CC, zC, ZC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!ZC._areLightsDirty) return ZC._needNormals;
      const fC = bC;
      bC = function(CC, zC) {
        const ZC = CC.mg().getCaps().maxUniformBuffersPerShaderStage;
        if (null == ZC) return zC;
        const QC = Math.max(ZC - iC, 1);
        return Math.min(zC, QC)
      }(CC, bC);
      let oC = 0;
      const qC = {
        needNormals: ZC._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (CC.lightsEnabled && !nC) {
        zC.lightSources.length > bC && bC < fC && function(CC, zC, ZC, wC) {
          let bC = vC.get(CC);
          bC || (bC = new Set, vC.set(CC, bC)), bC.has(wC) || (bC.add(wC), QC.c.Warn(`maxSimultaneousLights is ${zC} but this engine supports at most ${ZC} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${wC} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${wC+iC} uniform buffers, over the device limit of ${CC.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${ZC}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${ZC} or less to silence this warning.`))
        }(CC.mg(), fC, bC, Math.min(zC.lightSources.length, fC));
        for (const QC of zC.lightSources)
          if (lC(CC, zC, QC, oC, ZC, wC, qC), oC++, oC === bC) break
      }
      ZC.SPECULARTERM = qC.specularEnabled, ZC.SHADOWS = qC.shadowEnabled;
      const FC = Math.max(bC, ZC.MAXLIGHTCOUNT || 0);
      for (let QC = oC; QC < FC; QC++) void 0 !== ZC["LIGHT" + QC] && (ZC["LIGHT" + QC] = !1, ZC["HEMILIGHT" + QC] = !1, ZC["POINTLIGHT" + QC] = !1, ZC["DIRLIGHT" + QC] = !1, ZC["SPOTLIGHT" + QC] = !1, ZC["AREALIGHT" + QC] = !1, ZC["CLUSTLIGHT" + QC] = !1, ZC["SHADOW" + QC] = !1, ZC["SHADOWCSM" + QC] = !1, ZC["SHADOWCSMDEBUG" + QC] = !1, ZC["SHADOWCSMNUM_CASCADES" + QC] = !1, ZC["SHADOWCSMUSESHADOWMAXZ" + QC] = !1, ZC["SHADOWCSMNOBLEND" + QC] = !1, ZC["SHADOWCSM_RIGHTHANDED" + QC] = !1, ZC["SHADOWPCF" + QC] = !1, ZC["SHADOWPCSS" + QC] = !1, ZC["SHADOWPOISSON" + QC] = !1, ZC["SHADOWESM" + QC] = !1, ZC["SHADOWCLOSEESM" + QC] = !1, ZC["SHADOWCUBE" + QC] = !1, ZC["SHADOWLOWQUALITY" + QC] = !1, ZC["SHADOWMEDIUMQUALITY" + QC] = !1);
      ZC.LIGHTCOUNT = oC, ZC.MAXLIGHTCOUNT = bC;
      const WC = CC.mg().getCaps();
      return void 0 === ZC.SHADOWFLOAT && (qC.needRebuild = !0), ZC.SHADOWFLOAT = qC.shadowEnabled && (WC.textureFloatRender && WC.textureFloatLinearFiltering || WC.textureHalfFloatRender && WC.textureHalfFloatLinearFiltering), ZC.LIGHTMAPEXCLUDED = qC.lightmapMode, qC.needRebuild && ZC.rebuild(), qC.needNormals
    }

    function EC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (zC && fC.b.ReflectionTextureEnabled) {
        if (!zC.isReadyOrNotBlocking()) return !1;
        ZC._needNormals = !0, ZC.REFLECTION = !0, ZC.GAMMAREFLECTION = zC.gammaSpace, ZC.RGBDREFLECTION = zC.isRGBD, ZC.LODINREFLECTIONALPHA = zC.lodLevelInAlpha, ZC.LINEARSPECULARREFLECTION = zC.linearSpecularLOD, ZC.USEIRRADIANCEMAP = !1, ZC.LODBASEDMICROSFURACE = CC.mg().getCaps().textureLOD;
        const nC = CC.mg();
        switch (QC && wC > 0 ? (ZC.NUM_SAMPLES = "" + wC, nC._features.needTypeSuffixInShaderConstants && (ZC.NUM_SAMPLES = ZC.NUM_SAMPLES + "u"), ZC.REALTIME_FILTERING = !0, CC.iblCdfGenerator && (ZC.IBL_CDF_FILTERING = !0)) : ZC.REALTIME_FILTERING = !1, ZC.INVERTCUBICMAP = 6 === zC.coordinatesMode, ZC.REFLECTIONMAP_3D = zC.isCube, ZC.REFLECTIONMAP_OPPOSITEZ = ZC.REFLECTIONMAP_3D && CC.useRightHandedSystem ? !zC.invertZ : zC.invertZ, ZC.REFLECTIONMAP_CUBIC = !1, ZC.REFLECTIONMAP_EXPLICIT = !1, ZC.REFLECTIONMAP_PLANAR = !1, ZC.REFLECTIONMAP_PROJECTION = !1, ZC.REFLECTIONMAP_SKYBOX = !1, ZC.REFLECTIONMAP_SPHERICAL = !1, ZC.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZC.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZC.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, zC.coordinatesMode) {
          case 0:
            ZC.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            ZC.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            ZC.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            ZC.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            ZC.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            ZC.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            ZC.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            ZC.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            ZC.REFLECTIONMAP_CUBIC = !0, ZC.USE_LOCAL_REFLECTIONMAP_CUBIC = !!zC.boundingBoxSize
        }
        5 !== zC.coordinatesMode && (zC.irradianceTexture ? (ZC.USEIRRADIANCEMAP = !0, ZC.USESPHERICALFROMREFLECTIONMAP = !1, ZC.USESPHERICALINVERTEX = !1, zC.irradianceTexture._dominantDirection ? ZC.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : ZC.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : zC.isCube && (ZC.USESPHERICALFROMREFLECTIONMAP = !0, ZC.USEIRRADIANCEMAP = !1, ZC.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZC.USESPHERICALINVERTEX = bC))
      } else ZC.REFLECTION = !1, ZC.REFLECTIONMAP_3D = !1, ZC.REFLECTIONMAP_SPHERICAL = !1, ZC.REFLECTIONMAP_PLANAR = !1, ZC.REFLECTIONMAP_CUBIC = !1, ZC.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, ZC.REFLECTIONMAP_PROJECTION = !1, ZC.REFLECTIONMAP_SKYBOX = !1, ZC.REFLECTIONMAP_EXPLICIT = !1, ZC.REFLECTIONMAP_EQUIRECTANGULAR = !1, ZC.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, ZC.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, ZC.INVERTCUBICMAP = !1, ZC.USESPHERICALFROMREFLECTIONMAP = !1, ZC.USEIRRADIANCEMAP = !1, ZC.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, ZC.USESPHERICALINVERTEX = !1, ZC.REFLECTIONMAP_OPPOSITEZ = !1, ZC.LODINREFLECTIONALPHA = !1, ZC.GAMMAREFLECTION = !1, ZC.RGBDREFLECTION = !1, ZC.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function lC(CC, zC, ZC, QC, wC, nC, fC) {
      switch (fC.needNormals = !0, void 0 === wC["LIGHT" + QC] && (fC.needRebuild = !0), wC["LIGHT" + QC] = !0, wC["SPOTLIGHT" + QC] = !1, wC["HEMILIGHT" + QC] = !1, wC["POINTLIGHT" + QC] = !1, wC["DIRLIGHT" + QC] = !1, wC["AREALIGHT" + QC] = !1, wC["CLUSTLIGHT" + QC] = !1, ZC.prepareLightSpecificDefines(wC, QC), wC["LIGHT_FALLOFF_PHYSICAL" + QC] = !1, wC["LIGHT_FALLOFF_GLTF" + QC] = !1, wC["LIGHT_FALLOFF_STANDARD" + QC] = !1, ZC.falloffType) {
        case bC.c.FALLOFF_GLTF:
          wC["LIGHT_FALLOFF_GLTF" + QC] = !0;
          break;
        case bC.c.FALLOFF_PHYSICAL:
          wC["LIGHT_FALLOFF_PHYSICAL" + QC] = !0;
          break;
        case bC.c.FALLOFF_STANDARD:
          wC["LIGHT_FALLOFF_STANDARD" + QC] = !0
      }
      if (nC && !ZC.specular.equalsFloats(0, 0, 0) && (fC.specularEnabled = !0), wC["SHADOW" + QC] = !1, wC["SHADOWCSM" + QC] = !1, wC["SHADOWCSMDEBUG" + QC] = !1, wC["SHADOWCSMNUM_CASCADES" + QC] = !1, wC["SHADOWCSMUSESHADOWMAXZ" + QC] = !1, wC["SHADOWCSMNOBLEND" + QC] = !1, wC["SHADOWCSM_RIGHTHANDED" + QC] = !1, wC["SHADOWPCF" + QC] = !1, wC["SHADOWPCSS" + QC] = !1, wC["SHADOWPOISSON" + QC] = !1, wC["SHADOWESM" + QC] = !1, wC["SHADOWCLOSEESM" + QC] = !1, wC["SHADOWCUBE" + QC] = !1, wC["SHADOWLOWQUALITY" + QC] = !1, wC["SHADOWMEDIUMQUALITY" + QC] = !1, zC && zC.receiveShadows && CC.shadowsEnabled && ZC.shadowEnabled) {
        const zC = ZC.getShadowGenerator(CC.activeCamera) ?? ZC.getShadowGenerator();
        if (zC) {
          const CC = zC.getShadowMap();
          CC && CC.renderList && CC.renderList.length > 0 && (fC.shadowEnabled = !0, zC.prepareDefines(wC, QC))
        }
      }
      ZC.lightmapMode != bC.c.LIGHTMAP_DEFAULT ? (fC.lightmapMode = !0, wC["LIGHTMAPEXCLUDED" + QC] = !0, wC["LIGHTMAPNOSPECULAR" + QC] = ZC.lightmapMode == bC.c.LIGHTMAP_SHADOWSONLY) : (wC["LIGHTMAPEXCLUDED" + QC] = !1, wC["LIGHTMAPNOSPECULAR" + QC] = !1)
    }

    function XC(CC, zC, ZC, QC, wC) {
      let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oC = function(CC, zC) {
          let ZC = !1;
          if (CC.activeCamera) {
            const QC = zC.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              wC = zC.CAMERA_PERSPECTIVE ? 1 : 0,
              bC = 1 === CC.activeCamera.mode ? 1 : 0,
              nC = 0 === CC.activeCamera.mode ? 1 : 0;
            (QC ^ bC || wC ^ nC) && (zC.CAMERA_ORTHOGRAPHIC = 1 === bC, zC.CAMERA_PERSPECTIVE = 1 === nC, ZC = !0)
          }
          return ZC
        }(CC, QC);
      !1 !== bC && (oC = (0, nC.i)(ZC, CC, QC)), QC.DEPTHPREPASS !== !zC.getColorWrite() && (QC.DEPTHPREPASS = !QC.DEPTHPREPASS, oC = !0), QC.INSTANCES !== wC && (QC.INSTANCES = wC, oC = !0), QC.THIN_INSTANCES !== fC && (QC.THIN_INSTANCES = fC, oC = !0), oC && QC.markAsUnprocessed()
    }
    const cC = 40,
      uC = 64,
      rC = new WeakMap,
      sC = new WeakSet;

    function TC(CC, zC, ZC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        fC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!zC._areAttributesDirty && zC._needNormals === zC._normals && zC._needUVs === zC._uvs) return !1;
      zC._normals = zC._needNormals, zC._uvs = zC._needUVs, zC.NORMAL = zC._needNormals && CC.isVerticesDataPresent("normal"), zC._needNormals && CC.isVerticesDataPresent("tangent") && (zC.TANGENT = !0);
      for (let QC = 1; QC <= 6; ++QC) zC["UV" + QC] = !!zC._needUVs && CC.isVerticesDataPresent(`uv${1===QC?"":QC}`);
      if (ZC) {
        const ZC = CC.useVertexColors && CC.isVerticesDataPresent("color");
        zC.VERTEXCOLOR = ZC, zC.VERTEXALPHA = CC.hasVertexAlpha && ZC && nC
      }
      return CC.isVerticesDataPresent("instanceColor") && (CC.yQC || CC.hasThinInstances) && (zC.INSTANCESCOLOR = !0), wC && function(CC, zC) {
        if (CC.useBones && CC.computeBonesUsingShaders && CC.skeleton) {
          zC.NUM_BONE_INFLUENCERS = CC.numBoneInfluencers;
          const ZC = void 0 !== zC.BONETEXTURE;
          if (CC.skeleton.isUsingTextureForMatrices && ZC) zC.BONETEXTURE = !0;
          else {
            zC.BonesPerMesh = CC.skeleton.bones.length + 1, zC.BONETEXTURE = !ZC && void 0;
            const wC = CC.Km(),
              bC = wC.prePassRenderer;
            if (bC && bC.enabled) {
              const ZC = -1 === bC.excludedSkinnedMesh.indexOf(CC);
              zC.BONES_VELOCITY_ENABLED = ZC
            }
            const nC = !0 === zC.MULTIVIEW,
              fC = 2 * zC.BonesPerMesh + (nC ? 1 : 0);
            if (rC.get(CC.skeleton) !== fC) {
              rC.set(CC.skeleton, fC);
              const ZC = wC.mg().getCaps().maxVertexUniformVectors;
              if (ZC && !sC.has(CC.skeleton)) {
                const wC = 4 * zC.BonesPerMesh,
                  bC = nC ? uC : cC,
                  fC = Math.max(ZC - bC, 0);
                (wC > fC || nC && 3 * wC > ZC) && (sC.add(CC.skeleton), QC.c.Warn(`Skeleton "${CC.skeleton.name}": ${CC.skeleton.bones.length} bones stored as vertex uniforms use ${wC} of ~${fC} usable uniform vectors${nC?" (multiview)":""} on a device reporting ${ZC}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else zC.NUM_BONE_INFLUENCERS = 0, zC.BonesPerMesh = 0, void 0 !== zC.BONETEXTURE && (zC.BONETEXTURE = !1)
      }(CC, zC), bC && function(CC, zC) {
        const ZC = CC.morphTargetManager;
        ZC ? (zC.MORPHTARGETS_UV = ZC.supportsUVs && zC.UV1, zC.MORPHTARGETS_UV2 = ZC.supportsUV2s && zC.UV2, zC.MORPHTARGETS_TANGENT = ZC.supportsTangents && zC.TANGENT, zC.MORPHTARGETS_NORMAL = ZC.supportsNormals && zC.NORMAL, zC.MORPHTARGETS_POSITION = ZC.supportsPositions, zC.MORPHTARGETS_COLOR = ZC.supportsColors, zC.MORPHTARGETTEXTURE_HASUVS = ZC.hasUVs, zC.MORPHTARGETTEXTURE_HASUV2S = ZC.hasUV2s, zC.MORPHTARGETTEXTURE_HASTANGENTS = ZC.hasTangents, zC.MORPHTARGETTEXTURE_HASNORMALS = ZC.hasNormals, zC.MORPHTARGETTEXTURE_HASPOSITIONS = ZC.hasPositions, zC.MORPHTARGETTEXTURE_HASCOLORS = ZC.hasColors, zC.NUM_MORPH_INFLUENCERS = ZC.numMaxInfluencers || ZC.numInfluencers, zC.MORPHTARGETS = zC.NUM_MORPH_INFLUENCERS > 0, zC.MORPHTARGETS_TEXTURE = ZC.isUsingTextureForTargets) : (zC.MORPHTARGETS_UV = !1, zC.MORPHTARGETS_UV2 = !1, zC.MORPHTARGETS_TANGENT = !1, zC.MORPHTARGETS_NORMAL = !1, zC.MORPHTARGETS_POSITION = !1, zC.MORPHTARGETS_COLOR = !1, zC.MORPHTARGETTEXTURE_HASUVS = !1, zC.MORPHTARGETTEXTURE_HASUV2S = !1, zC.MORPHTARGETTEXTURE_HASTANGENTS = !1, zC.MORPHTARGETTEXTURE_HASNORMALS = !1, zC.MORPHTARGETTEXTURE_HASPOSITIONS = !1, zC.MORPHTARGETTEXTURE_HAS_COLORS = !1, zC.MORPHTARGETS = !1, zC.NUM_MORPH_INFLUENCERS = 0)
      }(CC, zC), fC && function(CC, zC) {
        const ZC = CC.bakedVertexAnimationManager;
        zC.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ZC || !ZC.isEnabled)
      }(CC, zC), !0
    }

    function aC(CC, zC) {
      if (CC.activeCamera) {
        const ZC = zC.MULTIVIEW;
        zC.MULTIVIEW = null !== CC.activeCamera.outputRenderTarget && CC.activeCamera.outputRenderTarget.getViewCount() > 1, zC.MULTIVIEW != ZC && zC.markAsUnprocessed()
      }
    }

    function tC(CC, zC, ZC) {
      const QC = zC.ORDER_INDEPENDENT_TRANSPARENCY,
        wC = zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      zC.ORDER_INDEPENDENT_TRANSPARENCY = CC.useOrderIndependentTransparency && ZC, zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !CC.mg().getCaps().textureFloatLinearFiltering, QC === zC.ORDER_INDEPENDENT_TRANSPARENCY && wC === zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || zC.markAsUnprocessed()
    }

    function DC(CC, zC, ZC) {
      const QC = zC.PREPASS;
      if (!zC._arePrePassDirty) return;
      const wC = [{
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
      if (CC.prePassRenderer && CC.prePassRenderer.enabled && ZC) {
        zC.PREPASS = !0, zC.SCENE_MRT_COUNT = CC.prePassRenderer.mrtCount, zC.PREPASS_NORMAL_WORLDSPACE = CC.prePassRenderer.generateNormalsInWorldSpace, zC.PREPASS_COLOR = !0, zC.PREPASS_COLOR_INDEX = 0;
        for (let ZC = 0; ZC < wC.length; ZC++) {
          const QC = CC.prePassRenderer.getIndex(wC[ZC].type); - 1 !== QC ? (zC[wC[ZC].define] = !0, zC[wC[ZC].index] = QC) : zC[wC[ZC].define] = !1
        }
      } else {
        zC.PREPASS = !1;
        for (let CC = 0; CC < wC.length; CC++) zC[wC[CC].define] = !1
      }
      zC.PREPASS != QC && (zC.markAsUnprocessed(), zC.markAsImageProcessingDirty())
    }

    function jC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      wC && wC.push("Light" + CC), bC || (zC.push("vLightData" + CC, "vLightDiffuse" + CC, "vLightSpecular" + CC, "vLightDirection" + CC, "vLightWidth" + CC, "vLightHeight" + CC, "vLightFalloff" + CC, "vLightGround" + CC, "vSliceData" + CC, "vSliceRanges" + CC, "lightMatrix" + CC, "shadowsInfo" + CC, "depthValues" + CC), ZC.push("shadowTexture" + CC), ZC.push("depthTexture" + CC), zC.push("viewFrustumZ" + CC, "cascadeBlendFactor" + CC, "lightSizeUVCorrection" + CC, "depthCorrection" + CC, "penumbraDarkness" + CC, "frustumLengths" + CC), QC && (ZC.push("projectionLightTexture" + CC), zC.push("textureProjectionMatrix" + CC)), nC && ZC.push("iesLightTexture" + CC), oC && ZC.push("rectAreaLightEmissionTexture" + CC), fC && (ZC.push("lightDataTexture" + CC), qC || ZC.push("tileMaskTexture" + CC)))
    }

    function yC(CC, zC, ZC) {
      const QC = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      ZC && QC.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), CC.push(...QC);
      zC.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function LC(CC, zC, ZC) {
      let QC, wC, bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        nC = null;
      if (CC.uniformsNames) {
        const fC = CC;
        QC = fC.uniformsNames, wC = fC.uniformBuffersNames, zC = fC.samplers, ZC = fC.defines, bC = fC.maxSimultaneousLights || 0, nC = fC.shaderLanguage ?? null
      } else QC = CC, zC || (zC = []);
      for (let fC = 0; fC < bC && ZC["LIGHT" + fC]; fC++) jC(fC, QC, zC, ZC["PROJECTEDLIGHTTEXTURE" + fC], wC, !1, ZC["IESLIGHTTEXTURE" + fC], ZC["CLUSTLIGHT" + fC], ZC["RECTAREALIGHTEMISSIONTEXTURE" + fC], 1 === nC);
      ZC.NUM_MORPH_INFLUENCERS && (QC.push("morphTargetInfluences"), QC.push("morphTargetCount")), ZC.BAKED_VERTEX_ANIMATION_TEXTURE && (QC.push("bakedVertexAnimationSettings"), QC.push("bakedVertexAnimationTextureSizeInverted"), QC.push("bakedVertexAnimationTime"), zC.push("bakedVertexAnimationTexture"))
    }

    function UC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      CC.addUniform("vReflectionInfos", 2), CC.addUniform("reflectionMatrix", 16), zC && CC.addUniform("vReflectionMicrosurfaceInfos", 3), ZC && (CC.addUniform("vReflectionPosition", 3), CC.addUniform("vReflectionSize", 3)), QC && (CC.addUniform("vReflectionFilteringInfo", 2), CC.addUniform("vReflectionDominantDirection", 3)), bC && CC.addUniform("vReflectionColor", 3), wC && (CC.addUniform("vSphericalL00", 3), CC.addUniform("vSphericalL1_1", 3), CC.addUniform("vSphericalL10", 3), CC.addUniform("vSphericalL11", 3), CC.addUniform("vSphericalL2_2", 3), CC.addUniform("vSphericalL2_1", 3), CC.addUniform("vSphericalL20", 3), CC.addUniform("vSphericalL21", 3), CC.addUniform("vSphericalL22", 3), CC.addUniform("vSphericalX", 3), CC.addUniform("vSphericalY", 3), CC.addUniform("vSphericalZ", 3), CC.addUniform("vSphericalXX_ZZ", 3), CC.addUniform("vSphericalYY_ZZ", 3), CC.addUniform("vSphericalZZ", 3), CC.addUniform("vSphericalXY", 3), CC.addUniform("vSphericalYZ", 3), CC.addUniform("vSphericalZX", 3))
    }
  },
  40167: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(36963),
      wC = ZC(40110);
    class bC extends wC.d {
      constructor(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(CC, zC, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new QC.b, this._storeEffectOnSubMeshes = ZC
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(CC, zC) {
        return !!CC && (!this._storeEffectOnSubMeshes || (!CC.Zx || 0 === CC.Zx.length || this.isReadyForSubMesh(CC, CC.Zx[0], zC)))
      }
      _isReadyForSubMesh(CC) {
        const zC = CC.materialDefines;
        return !(this.checkReadyOnEveryCall || !CC.effect || !zC || zC._renderId !== this.Km().getRenderId())
      }
      bindOnlyWorldMatrix(CC) {
        this._activeEffect.setMatrix("world", CC)
      }
      bindOnlyNormalMatrix(CC) {
        this._activeEffect.setMatrix("normalMatrix", CC)
      }
      bind(CC, zC) {
        zC && this.bindForSubMesh(CC, zC, zC.Zx[0])
      }
      _afterBind(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(CC, zC, ZC), this.Km()._cachedEffect = zC, ZC ? ZC._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return ZC._drawWrapper._forceRebindOnNextCall || CC.isCachedMaterialInvalid(this, zC, QC)
      }
      dispose(CC, zC, ZC) {
        this._activeEffect = void 0, super.dispose(CC, zC, ZC)
      }
    }
  },
  40196: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      d: () => wC
    });
    const QC = new WeakMap;

    function wC(CC) {
      const zC = CC.getVertexBuffers();
      if (!zC) return null;
      let ZC = QC.get(CC);
      if (ZC) {
        let CC = !1;
        for (const QC in zC)
          if (!ZC.has(QC)) {
            CC = !0;
            break
          } if (!CC) return ZC
      } else ZC = new Map, QC.set(CC, ZC);
      for (const QC in zC) {
        const CC = zC[QC];
        if (CC) {
          const zC = CC.byteOffset,
            wC = CC.byteStride,
            bC = CC.type,
            nC = CC.normalized;
          ZC.set(QC, {
            offset: zC,
            stride: wC,
            type: bC,
            normalized: nC
          })
        }
      }
      return ZC
    }

    function bC(CC, zC) {
      zC.forEach(((zC, ZC) => {
        const QC = `vp_${ZC}_info`;
        CC.setFloat4(QC, zC.offset, zC.stride, zC.type, zC.normalized ? 1 : 0)
      }))
    }
  },
  40145: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      d: () => oC
    });
    var QC = ZC(39811),
      wC = ZC(36963),
      bC = ZC(39818);
    let nC = (() => {
      var CC;
      let zC, ZC, wC = [];
      return CC = class {
        static extractMinAndMaxIndexed(CC, zC, ZC, QC, wC, bC) {
          for (let nC = ZC; nC < ZC + QC; nC++) {
            const ZC = 3 * zC[nC],
              QC = CC[ZC],
              fC = CC[ZC + 1],
              oC = CC[ZC + 2];
            wC.minimizeInPlaceFromFloats(QC, fC, oC), bC.maximizeInPlaceFromFloats(QC, fC, oC)
          }
        }
        static extractMinAndMax(CC, zC, ZC, QC, wC, bC) {
          for (let nC = zC, fC = zC * QC; nC < zC + ZC; nC++, fC += QC) {
            const zC = CC[fC],
              ZC = CC[fC + 1],
              QC = CC[fC + 2];
            wC.minimizeInPlaceFromFloats(zC, ZC, QC), bC.maximizeInPlaceFromFloats(zC, ZC, QC)
          }
        }
      }, (() => {
        const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [bC.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], ZC = [bC.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, QC.j)(CC, null, zC, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: CC => "extractMinAndMaxIndexed" in CC,
            get: CC => CC.extractMinAndMaxIndexed
          },
          metadata: nC
        }, null, wC), (0, QC.j)(CC, null, ZC, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: CC => "extractMinAndMax" in CC,
            get: CC => CC.extractMinAndMax
          },
          metadata: nC
        }, null, wC), nC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nC
        }), (0, QC.n)(CC, wC)
      })(), CC
    })();

    function fC(CC, zC, ZC, QC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return nC.extractMinAndMaxIndexed(CC, zC, ZC, QC, fC, oC), bC && (fC.x -= fC.x * bC.x + bC.y, fC.y -= fC.y * bC.x + bC.y, fC.z -= fC.z * bC.x + bC.y, oC.x += oC.x * bC.x + bC.y, oC.y += oC.y * bC.x + bC.y, oC.z += oC.z * bC.x + bC.y), {
        minimum: fC,
        maximum: oC
      }
    }

    function oC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        bC = arguments.length > 4 ? arguments[4] : void 0;
      const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return bC || (bC = 3), nC.extractMinAndMax(CC, zC, ZC, bC, fC, oC), QC && (fC.x -= fC.x * QC.x + QC.y, fC.y -= fC.y * QC.x + QC.y, fC.z -= fC.z * QC.x + QC.y, oC.x += oC.x * QC.x + QC.y, oC.y += oC.y * QC.x + QC.y, oC.z += oC.z * QC.x + QC.y), {
        minimum: fC,
        maximum: oC
      }
    }
  },
  40119: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC
    });
    var QC, wC = ZC(39959),
      bC = ZC(40123),
      nC = ZC(40127),
      fC = ZC(40145),
      oC = ZC(40148),
      qC = ZC(39694);
    class FC {
      get materialDefines() {
        const CC = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof CC ? null : CC
      }
      set materialDefines(CC) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = CC
      }
      _getDrawWrapper(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        CC = CC ?? this._engine.currentRenderPassId;
        let ZC = this._drawWrappers[CC];
        return !ZC && zC && (this._drawWrappers[CC] = ZC = new oC.d(this._mesh.Km().mg())), ZC
      }
      _removeDrawWrapper(CC) {
        let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[CC]?.dispose(zC), this._drawWrappers[CC] = void 0
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
      _setMainDrawWrapperOverride(CC) {
        this._mainDrawWrapperOverride = CC
      }
      setEffect(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const wC = this._drawWrapper;
        wC.setEffect(CC, zC, QC), void 0 !== ZC && (wC.materialContext = ZC), CC || (wC.defines = null, wC.materialContext = void 0)
      }
      resetDrawCache(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== CC) return void this._removeDrawWrapper(CC, !0, zC);
          for (const CC of this._drawWrappers) CC?.dispose(zC)
        }
        this._drawWrappers = []
      }
      static AddToMesh(CC, zC, ZC, QC, wC, bC, nC) {
        return new FC(CC, zC, ZC, QC, wC, bC, nC, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(CC, zC, ZC, QC, wC, bC, nC) {
        let fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = CC, this.verticesStart = zC, this.verticesCount = ZC, this.indexStart = QC, this.indexCount = wC, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = bC, this._renderingMesh = nC || bC, oC && bC.Zx.push(this), this._engine = this._mesh.Km().mg(), this.resetDrawCache(), this._trianglePlanes = [], this._id = bC.Zx.length - 1, fC && (this.refreshBoundingInfo(), bC.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      WE() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.WE() : this._boundingInfo
      }
      setBoundingInfo(CC) {
        return this._boundingInfo = CC, this
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
        const CC = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return CC || this._renderingMesh
      }
      cg() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const zC = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!zC) return CC && this._mesh.Km()._hasDefaultMaterial ? this._mesh.Km().defaultMaterial : null;
        if (this._isMultiMaterial(zC)) {
          const CC = zC.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== CC && (this._currentMaterial = CC, this.resetDrawCache()), CC
        }
        return zC
      }
      _isMultiMaterial(CC) {
        return void 0 !== CC.getSubMaterial
      }
      refreshBoundingInfo() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (CC || (CC = this._renderingMesh.getVerticesData(wC.k.PositionKind)), !CC) return this._boundingInfo = this._mesh.WE(), this;
        const zC = this._renderingMesh.CQC();
        let ZC;
        if (0 === this.indexStart && this.indexCount === zC.length) {
          const CC = this._renderingMesh.WE();
          ZC = {
            minimum: CC.minimum.clone(),
            maximum: CC.maximum.clone()
          }
        } else ZC = (0, fC.c)(CC, zC, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(ZC.minimum, ZC.maximum) : this._boundingInfo = new nC.d(ZC.minimum, ZC.maximum), this
      }
      _checkCollision(CC) {
        return this.WE()._checkCollision(CC)
      }
      updateBoundingInfo(CC) {
        let zC = this.WE();
        return zC || (this.refreshBoundingInfo(), zC = this.WE()), zC && zC.update(CC), this
      }
      isInFrustum(CC) {
        const zC = this.WE();
        return !!zC && zC.isInFrustum(CC, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(CC) {
        const zC = this.WE();
        return !!zC && zC.isCompletelyInFrustum(CC)
      }
      render(CC) {
        return this._renderingMesh.render(this, CC, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(CC, zC) {
        if (!this._linesIndexBuffer) {
          const ZC = 6 * Math.floor(this.indexCount / 3),
            QC = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ZC) : new Uint16Array(ZC);
          let wC = 0;
          if (0 === CC.length)
            for (let CC = this.indexStart; CC < this.indexStart + this.indexCount; CC += 3) QC[wC++] = CC, QC[wC++] = CC + 1, QC[wC++] = CC + 1, QC[wC++] = CC + 2, QC[wC++] = CC + 2, QC[wC++] = CC;
          else
            for (let zC = this.indexStart; zC < this.indexStart + this.indexCount; zC += 3) QC[wC++] = CC[zC], QC[wC++] = CC[zC + 1], QC[wC++] = CC[zC + 1], QC[wC++] = CC[zC + 2], QC[wC++] = CC[zC + 2], QC[wC++] = CC[zC];
          this._linesIndexBuffer = zC.createIndexBuffer(QC), this._linesIndexCount = QC.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(CC) {
        const zC = this.WE();
        return !!zC && CC.intersectsBox(zC.boundingBox)
      }
      intersects(CC, zC, ZC, QC, wC) {
        const bC = this.cg();
        if (!bC) return null;
        let nC = 3,
          fC = !1;
        switch (bC.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            nC = 1, fC = !0
        }
        return 4 === bC.fillMode ? ZC.length ? this._intersectLines(CC, zC, ZC, this._mesh.intersectionThreshold, QC) : this._intersectUnIndexedLines(CC, zC, ZC, this._mesh.intersectionThreshold, QC) : !ZC.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(CC, zC, ZC, QC, wC) : this._intersectTriangles(CC, zC, ZC, nC, fC, QC, wC)
      }
      _intersectLines(CC, zC, ZC, QC, wC) {
        let nC = null;
        for (let fC = this.indexStart; fC < this.indexStart + this.indexCount; fC += 2) {
          const oC = zC[ZC[fC]],
            qC = zC[ZC[fC + 1]],
            FC = CC.intersectionSegment(oC, qC, QC);
          if (!(FC < 0) && ((wC || !nC || FC < nC.distance) && (nC = new bC.d(null, null, FC), nC.faceId = fC / 2, wC))) break
        }
        return nC
      }
      _intersectUnIndexedLines(CC, zC, ZC, QC, wC) {
        let nC = null;
        for (let fC = this.verticesStart; fC < this.verticesStart + this.verticesCount; fC += 2) {
          const ZC = zC[fC],
            oC = zC[fC + 1],
            qC = CC.intersectionSegment(ZC, oC, QC);
          if (!(qC < 0) && ((wC || !nC || qC < nC.distance) && (nC = new bC.d(null, null, qC), nC.faceId = fC / 2, wC))) break
        }
        return nC
      }
      _intersectTriangles(CC, zC, ZC, QC, wC, bC, nC) {
        let fC = null,
          oC = -1;
        for (let qC = this.indexStart; qC < this.indexStart + this.indexCount - (3 - QC); qC += QC) {
          oC++;
          const QC = ZC[qC],
            FC = ZC[qC + 1],
            WC = ZC[qC + 2];
          if (wC && 4294967295 === WC) {
            qC += 2;
            continue
          }
          const NC = zC[QC],
            MC = zC[FC],
            gC = zC[WC];
          if (!NC || !MC || !gC) continue;
          if (nC && !nC(NC, MC, gC, CC, QC, FC, WC)) continue;
          const SC = CC.intersectsTriangle(NC, MC, gC);
          if (SC) {
            if (SC.distance < 0) continue;
            if ((bC || !fC || SC.distance < fC.distance) && (fC = SC, fC.faceId = oC, bC)) break
          }
        }
        return fC
      }
      _intersectUnIndexedTriangles(CC, zC, ZC, QC, wC) {
        let bC = null;
        for (let nC = this.verticesStart; nC < this.verticesStart + this.verticesCount; nC += 3) {
          const ZC = zC[nC],
            fC = zC[nC + 1],
            oC = zC[nC + 2];
          if (wC && !wC(ZC, fC, oC, CC, -1, -1, -1)) continue;
          const qC = CC.intersectsTriangle(ZC, fC, oC);
          if (qC) {
            if (qC.distance < 0) continue;
            if ((QC || !bC || qC.distance < bC.distance) && (bC = qC, bC.faceId = nC / 3, QC)) break
          }
        }
        return bC
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(CC, zC) {
        const ZC = new FC(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, CC, zC, !1);
        if (!this.IsGlobal) {
          const CC = this.WE();
          if (!CC) return ZC;
          ZC._boundingInfo = new nC.d(CC.minimum, CC.maximum)
        }
        return ZC
      }
      dispose() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.Km().mg()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const zC = this._mesh.Zx.indexOf(this);
        this._mesh.Zx.splice(zC, 1), this.resetDrawCache(void 0, CC)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(CC, zC, ZC, QC, wC) {
        let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = Number.MAX_VALUE,
          fC = -Number.MAX_VALUE;
        const oC = (wC || QC).CQC();
        for (let qC = zC; qC < zC + ZC; qC++) {
          const CC = oC[qC];
          CC < nC && (nC = CC), CC > fC && (fC = CC)
        }
        return new FC(CC, nC, fC - nC + 1, zC, ZC, QC, wC, bC)
      }
    }(QC = FC.prototype).projectToRef ?? (QC.projectToRef = (0, qC.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);