export const id = 285;
export const ids = [285];
export const modules = {
  41383: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {
      constructor(UU, XU, zU) {
        this.bu = UU, this.bv = XU, this.distance = zU, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41389: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(37827),
      yU = zU(37819),
      QU = zU(37825);
    class AU {
      constructor(UU, XU, zU) {
        this.vectors = (0, cU.d)(8, yU.q.Zero), this.center = yU.q.Zero(), this.centerWorld = yU.q.Zero(), this.extendSize = yU.q.Zero(), this.extendSizeWorld = yU.q.Zero(), this.directions = (0, cU.d)(3, yU.q.Zero), this.vectorsWorld = (0, cU.d)(8, yU.q.Zero), this.minimumWorld = yU.q.Zero(), this.maximumWorld = yU.q.Zero(), this.minimum = yU.q.Zero(), this.maximum = yU.q.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(UU, XU, zU)
      }
      reConstruct(UU, XU, zU) {
        const cU = UU.x,
          QU = UU.y,
          AU = UU.z,
          FU = XU.x,
          oU = XU.y,
          DU = XU.z,
          EU = this.vectors;
        this.minimum.sUU(cU, QU, AU), this.maximum.sUU(FU, oU, DU), EU[0].sUU(cU, QU, AU), EU[1].sUU(FU, oU, DU), EU[2].sUU(FU, QU, AU), EU[3].sUU(cU, oU, AU), EU[4].sUU(cU, QU, DU), EU[5].sUU(FU, oU, AU), EU[6].sUU(cU, oU, DU), EU[7].sUU(FU, QU, DU), XU.addToRef(UU, this.center).scaleInPlace(.5), XU.subtractToRef(UU, this.extendSize).scaleInPlace(.5), this._worldMatrix = zU || yU.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(UU) {
        const XU = AU._TmpVector3,
          zU = this.maximum.subtractToRef(this.minimum, XU[0]),
          cU = zU.length();
        zU.normalizeFromLength(cU);
        const yU = cU * UU,
          QU = zU.scaleInPlace(.5 * yU),
          FU = this.center.subtractToRef(QU, XU[1]),
          oU = this.center.addToRef(QU, XU[2]);
        return this.reConstruct(FU, oU, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(UU) {
        const XU = this.minimumWorld,
          zU = this.maximumWorld,
          cU = this.directions,
          QU = this.vectorsWorld,
          AU = this.vectors;
        if (UU.isIdentity()) {
          XU.YL(this.minimum), zU.YL(this.maximum);
          for (let UU = 0; UU < 8; ++UU) QU[UU].YL(AU[UU]);
          this.extendSizeWorld.YL(this.extendSize), this.centerWorld.YL(this.center)
        } else {
          XU.IUU(Number.MAX_VALUE), zU.IUU(-Number.MAX_VALUE);
          for (let cU = 0; cU < 8; ++cU) {
            const FU = QU[cU];
            yU.q.TransformCoordinatesToRef(AU[cU], UU, FU), XU.minimizeInPlace(FU), zU.maximizeInPlace(FU)
          }
          zU.subtractToRef(XU, this.extendSizeWorld).scaleInPlace(.5), zU.addToRef(XU, this.centerWorld).scaleInPlace(.5)
        }
        yU.q.FromArrayToRef(UU.m, 0, cU[0]), yU.q.FromArrayToRef(UU.m, 4, cU[1]), yU.q.FromArrayToRef(UU.m, 8, cU[2]), this._worldMatrix = UU
      }
      isInFrustum(UU) {
        return AU.IsInFrustum(this.vectorsWorld, UU)
      }
      isCompletelyInFrustum(UU) {
        return AU.IsCompletelyInFrustum(this.vectorsWorld, UU)
      }
      intersectsPoint(UU) {
        const XU = this.minimumWorld,
          zU = this.maximumWorld,
          cU = XU.x,
          yU = XU.y,
          AU = XU.z,
          FU = zU.x,
          oU = zU.y,
          DU = zU.z,
          EU = UU.x,
          YU = UU.y,
          NU = UU.z,
          IU = -QU.c;
        return !(FU - EU < IU || IU > EU - cU) && (!(oU - YU < IU || IU > YU - yU) && !(DU - NU < IU || IU > NU - AU))
      }
      intersectsSphere(UU) {
        return AU.IntersectsSphere(this.minimumWorld, this.maximumWorld, UU.centerWorld, UU.radiusWorld)
      }
      intersectsMinMax(UU, XU) {
        const zU = this.minimumWorld,
          cU = this.maximumWorld,
          yU = zU.x,
          QU = zU.y,
          AU = zU.z,
          FU = cU.x,
          oU = cU.y,
          DU = cU.z,
          EU = UU.x,
          YU = UU.y,
          NU = UU.z,
          IU = XU.x,
          pU = XU.y,
          aU = XU.z;
        return !(FU < EU || yU > IU) && (!(oU < YU || QU > pU) && !(DU < NU || AU > aU))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(UU, XU) {
        return UU.intersectsMinMax(XU.minimumWorld, XU.maximumWorld)
      }
      static IntersectsSphere(UU, XU, zU, cU) {
        const QU = AU._TmpVector3[0];
        yU.q.ClampToRef(zU, UU, XU, QU);
        return yU.q.DistanceSquared(zU, QU) <= cU * cU
      }
      static IsCompletelyInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; ++zU) {
          const cU = XU[zU];
          for (let XU = 0; XU < 8; ++XU)
            if (cU.dotCoordinate(UU[XU]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; ++zU) {
          let cU = !0;
          const yU = XU[zU];
          for (let XU = 0; XU < 8; ++XU)
            if (yU.dotCoordinate(UU[XU]) >= 0) {
              cU = !1;
              break
            } if (cU) return !1
        }
        return !0
      }
    }
    AU._TmpVector3 = (0, cU.d)(3, yU.q.Zero)
  },
  41387: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU
    });
    var cU = zU(37827),
      yU = zU(37819),
      QU = zU(41389);
    class AU {
      constructor(UU, XU, zU) {
        this.center = yU.q.Zero(), this.centerWorld = yU.q.Zero(), this.minimum = yU.q.Zero(), this.maximum = yU.q.Zero(), this.reConstruct(UU, XU, zU)
      }
      reConstruct(UU, XU, zU) {
        this.minimum.YL(UU), this.maximum.YL(XU);
        const cU = yU.q.Distance(UU, XU);
        XU.addToRef(UU, this.center).scaleInPlace(.5), this.radius = .5 * cU, this._update(zU || yU.e.IdentityReadOnly)
      }
      scale(UU) {
        const XU = AU._TmpVector3,
          zU = this.maximum.subtractToRef(this.minimum, XU[0]),
          cU = zU.length();
        zU.normalizeFromLength(cU);
        const yU = cU * UU,
          QU = zU.scaleInPlace(.5 * yU),
          FU = this.center.subtractToRef(QU, XU[1]),
          oU = this.center.addToRef(QU, XU[2]);
        return this.reConstruct(FU, oU, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(UU) {
        if (UU.isIdentity()) this.centerWorld.YL(this.center), this.radiusWorld = this.radius;
        else {
          yU.q.TransformCoordinatesToRef(this.center, UU, this.centerWorld);
          const XU = AU._TmpVector3[0];
          yU.q.TransformNormalFromFloatsToRef(1, 1, 1, UU, XU), this.radiusWorld = Math.max(Math.abs(XU.x), Math.abs(XU.y), Math.abs(XU.z)) * this.radius
        }
      }
      isInFrustum(UU) {
        const XU = this.centerWorld,
          zU = this.radiusWorld;
        for (let cU = 0; cU < 6; cU++)
          if (UU[cU].dotCoordinate(XU) <= -zU) return !1;
        return !0
      }
      isCenterInFrustum(UU) {
        const XU = this.centerWorld;
        for (let zU = 0; zU < 6; zU++)
          if (UU[zU].dotCoordinate(XU) < 0) return !1;
        return !0
      }
      intersectsPoint(UU) {
        const XU = yU.q.DistanceSquared(this.centerWorld, UU);
        return !(this.radiusWorld * this.radiusWorld < XU)
      }
      static Intersects(UU, XU) {
        const zU = yU.q.DistanceSquared(UU.centerWorld, XU.centerWorld),
          cU = UU.radiusWorld + XU.radiusWorld;
        return !(cU * cU < zU)
      }
      static CreateFromCenterAndRadius(UU, XU, zU) {
        this._TmpVector3[0].YL(UU), this._TmpVector3[1].sUU(0, 0, XU), this._TmpVector3[2].YL(UU), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].ZyU(this._TmpVector3[1]);
        const cU = new AU(this._TmpVector3[0], this._TmpVector3[2]);
        return cU._worldMatrix = zU || yU.e.Identity(), cU
      }
    }
    AU._TmpVector3 = (0, cU.d)(3, yU.q.Zero);
    const FU = {
        min: 0,
        max: 0
      },
      oU = {
        min: 0,
        max: 0
      },
      DU = (UU, XU, zU) => {
        const cU = yU.q.Dot(XU.centerWorld, UU),
          QU = Math.abs(yU.q.Dot(XU.directions[0], UU)) * XU.extendSize.x + Math.abs(yU.q.Dot(XU.directions[1], UU)) * XU.extendSize.y + Math.abs(yU.q.Dot(XU.directions[2], UU)) * XU.extendSize.z;
        zU.min = cU - QU, zU.max = cU + QU
      },
      EU = (UU, XU, zU) => (DU(UU, XU, FU), DU(UU, zU, oU), !(FU.min > oU.max || oU.min > FU.max));
    class YU {
      constructor(UU, XU, zU) {
        this._isLocked = !1, this.boundingBox = new QU.e(UU, XU, zU), this.dyU = new AU(UU, XU, zU)
      }
      reConstruct(UU, XU, zU) {
        this.boundingBox.reConstruct(UU, XU, zU), this.dyU.reConstruct(UU, XU, zU)
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
      set isLocked(UU) {
        this._isLocked = UU
      }
      update(UU) {
        this._isLocked || (this.boundingBox._update(UU), this.dyU._update(UU))
      }
      centerOn(UU, XU) {
        const zU = YU._TmpVector3[0].YL(UU).ZyU(XU),
          cU = YU._TmpVector3[1].YL(UU).addInPlace(XU);
        return this.boundingBox.reConstruct(zU, cU, this.boundingBox.getWorldMatrix()), this.dyU.reConstruct(zU, cU, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(UU) {
        const XU = yU.q.Minimize(this.minimum, UU),
          zU = yU.q.Maximize(this.maximum, UU);
        return this.reConstruct(XU, zU, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(UU) {
        const XU = yU.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(XU);
        const zU = yU.l.Sp[0];
        return yU.q.TransformCoordinatesToRef(UU.boundingBox.minimumWorld, XU, zU), this.encapsulate(zU), yU.q.TransformCoordinatesToRef(UU.boundingBox.maximumWorld, XU, zU), this.encapsulate(zU), this
      }
      scale(UU) {
        return this.boundingBox.scale(UU), this.dyU.scale(UU), this
      }
      isInFrustum(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === XU || 3 === XU) && this.dyU.isCenterInFrustum(UU)) return !0;
        if (!this.dyU.isInFrustum(UU)) return !1;
        return !(1 !== XU && 3 !== XU) || this.boundingBox.isInFrustum(UU)
      }
      get diagonalLength() {
        const UU = this.boundingBox;
        return UU.maximumWorld.subtractToRef(UU.minimumWorld, YU._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(UU) {
        return this.boundingBox.isCompletelyInFrustum(UU)
      }
      _checkCollision(UU) {
        return UU._canDoCollision(this.dyU.centerWorld, this.dyU.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(UU) {
        return !!this.dyU.centerWorld && (!!this.dyU.intersectsPoint(UU) && !!this.boundingBox.intersectsPoint(UU))
      }
      intersects(UU, XU) {
        if (!AU.Intersects(this.dyU, UU.dyU)) return !1;
        if (!QU.e.Intersects(this.boundingBox, UU.boundingBox)) return !1;
        if (!XU) return !0;
        const zU = this.boundingBox,
          cU = UU.boundingBox;
        return !!EU(zU.directions[0], zU, cU) && (!!EU(zU.directions[1], zU, cU) && (!!EU(zU.directions[2], zU, cU) && (!!EU(cU.directions[0], zU, cU) && (!!EU(cU.directions[1], zU, cU) && (!!EU(cU.directions[2], zU, cU) && (!!EU(yU.q.Cross(zU.directions[0], cU.directions[0]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[0], cU.directions[1]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[0], cU.directions[2]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[1], cU.directions[0]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[1], cU.directions[1]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[1], cU.directions[2]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[2], cU.directions[0]), zU, cU) && (!!EU(yU.q.Cross(zU.directions[2], cU.directions[1]), zU, cU) && !!EU(yU.q.Cross(zU.directions[2], cU.directions[2]), zU, cU))))))))))))))
      }
    }
    YU._TmpVector3 = (0, cU.d)(2, yU.q.Zero)
  },
  41406: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      e: () => oU,
      i: () => FU,
      m: () => AU
    });
    var cU = zU(41246),
      yU = zU(37819);

    function QU(UU) {
      -1 === UU.indexOf("vClipPlane") && UU.push("vClipPlane"), -1 === UU.indexOf("vClipPlane2") && UU.push("vClipPlane2"), -1 === UU.indexOf("vClipPlane3") && UU.push("vClipPlane3"), -1 === UU.indexOf("vClipPlane4") && UU.push("vClipPlane4"), -1 === UU.indexOf("vClipPlane5") && UU.push("vClipPlane5"), -1 === UU.indexOf("vClipPlane6") && UU.push("vClipPlane6")
    }

    function AU(UU, XU, zU) {
      const cU = !!(UU.clipPlane ?? XU.clipPlane),
        yU = !!(UU.clipPlane2 ?? XU.clipPlane2),
        QU = !!(UU.clipPlane3 ?? XU.clipPlane3),
        AU = !!(UU.clipPlane4 ?? XU.clipPlane4),
        FU = !!(UU.clipPlane5 ?? XU.clipPlane5),
        oU = !!(UU.clipPlane6 ?? XU.clipPlane6);
      cU && zU.push("#define CLIPPLANE"), yU && zU.push("#define CLIPPLANE2"), QU && zU.push("#define CLIPPLANE3"), AU && zU.push("#define CLIPPLANE4"), FU && zU.push("#define CLIPPLANE5"), oU && zU.push("#define CLIPPLANE6")
    }

    function FU(UU, XU, zU) {
      let cU = !1;
      const yU = !!(UU.clipPlane ?? XU.clipPlane),
        QU = !!(UU.clipPlane2 ?? XU.clipPlane2),
        AU = !!(UU.clipPlane3 ?? XU.clipPlane3),
        FU = !!(UU.clipPlane4 ?? XU.clipPlane4),
        oU = !!(UU.clipPlane5 ?? XU.clipPlane5),
        DU = !!(UU.clipPlane6 ?? XU.clipPlane6);
      return zU.CLIPPLANE !== yU && (zU.CLIPPLANE = yU, cU = !0), zU.CLIPPLANE2 !== QU && (zU.CLIPPLANE2 = QU, cU = !0), zU.CLIPPLANE3 !== AU && (zU.CLIPPLANE3 = AU, cU = !0), zU.CLIPPLANE4 !== FU && (zU.CLIPPLANE4 = FU, cU = !0), zU.CLIPPLANE5 !== oU && (zU.CLIPPLANE5 = oU, cU = !0), zU.CLIPPLANE6 !== DU && (zU.CLIPPLANE6 = DU, cU = !0), cU
    }

    function oU(UU, XU, zU) {
      let cU = XU.clipPlane ?? zU.clipPlane;
      DU(UU, "vClipPlane", cU), cU = XU.clipPlane2 ?? zU.clipPlane2, DU(UU, "vClipPlane2", cU), cU = XU.clipPlane3 ?? zU.clipPlane3, DU(UU, "vClipPlane3", cU), cU = XU.clipPlane4 ?? zU.clipPlane4, DU(UU, "vClipPlane4", cU), cU = XU.clipPlane5 ?? zU.clipPlane5, DU(UU, "vClipPlane5", cU), cU = XU.clipPlane6 ?? zU.clipPlane6, DU(UU, "vClipPlane6", cU)
    }

    function DU(UU, XU, zU) {
      if (zU) {
        const QU = cU.d.nS()?.floatingOriginOffset || yU.q.ZeroReadOnly;
        UU.setFloat4(XU, zU.normal.x, zU.normal.y, zU.normal.z, zU.d + yU.q.Dot(zU.normal, QU))
      }
    }
  },
  41422: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(UU, XU) {
        this._defines[UU] || (UU < this._currentRank && (this._currentRank = UU), UU > this._maxRank && (this._maxRank = UU), this._defines[UU] = new Array), this._defines[UU].push(XU)
      }
      addCPUSkinningFallback(UU, XU) {
        this._mesh = XU, UU < this._currentRank && (this._currentRank = UU), UU > this._maxRank && (this._maxRank = UU)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(UU, XU) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, UU = UU.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), XU._bonesComputationForcedToCPU = !0;
          const zU = this._mesh.nS();
          for (let UU = 0; UU < zU.meshes.length; UU++) {
            const cU = zU.meshes[UU];
            if (cU.material) {
              if (cU.computeBonesUsingShaders && 0 !== cU.numBoneInfluencers)
                if (cU.material.getEffect() === XU) cU.computeBonesUsingShaders = !1;
                else if (cU.uB)
                for (const UU of cU.uB) {
                  if (UU.effect === XU) {
                    cU.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && cU.computeBonesUsingShaders && cU.numBoneInfluencers > 0 && (cU.computeBonesUsingShaders = !1)
          }
        } else {
          const XU = this._defines[this._currentRank];
          if (XU)
            for (let zU = 0; zU < XU.length; zU++) UU = UU.replace("#define " + XU[zU], "");
          this._currentRank++
        }
        return UU
      }
    }
  },
  41374: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => kU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(41205),
      AU = zU(37846),
      FU = zU(37841),
      oU = zU(41378),
      DU = zU(41228),
      EU = zU(39493),
      YU = zU(38505),
      NU = zU(41395),
      IU = zU(41134);
    let pU = (() => {
      var UU;
      let XU, zU, QU, AU, FU, oU, DU, EU, YU, NU, pU, aU, tU = [];
      return UU = class {
        constructor() {
          this._func = (0, cU.n)(this, tU), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(UU) {
          this._func = UU
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(UU) {
          this._backFunc = UU
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(UU) {
          this._funcRef = UU
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(UU) {
          this._funcMask = UU
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(UU) {
          this._opStencilFail = UU
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(UU) {
          this._opDepthFail = UU
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(UU) {
          this._opStencilDepthPass = UU
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(UU) {
          this._backOpStencilFail = UU
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(UU) {
          this._backOpDepthFail = UU
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(UU) {
          this._backOpStencilDepthPass = UU
        }
        get mask() {
          return this._mask
        }
        set mask(UU) {
          this._mask = UU
        }
        get enabled() {
          return this._enabled
        }
        set enabled(UU) {
          this._enabled = UU
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(UU) {
          IU.b.Clone((() => UU), this)
        }
        serialize() {
          return IU.b.Serialize(this)
        }
        parse(UU, XU, zU) {
          IU.b.Parse((() => this), UU, XU, zU)
        }
      }, (() => {
        const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], (0, cU.j)(UU, null, XU, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: UU => "func" in UU,
            get: UU => UU.func
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, zU, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: UU => "backFunc" in UU,
            get: UU => UU.backFunc
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, QU, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: UU => "funcRef" in UU,
            get: UU => UU.funcRef
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, AU, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "funcMask" in UU,
            get: UU => UU.funcMask
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, FU, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "opStencilFail" in UU,
            get: UU => UU.opStencilFail
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, oU, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "opDepthFail" in UU,
            get: UU => UU.opDepthFail
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, DU, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: UU => "opStencilDepthPass" in UU,
            get: UU => UU.opStencilDepthPass
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, EU, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "backOpStencilFail" in UU,
            get: UU => UU.backOpStencilFail
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, YU, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: UU => "backOpDepthFail" in UU,
            get: UU => UU.backOpDepthFail
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, NU, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: UU => "backOpStencilDepthPass" in UU,
            get: UU => UU.backOpStencilDepthPass
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, pU, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: UU => "mask" in UU,
            get: UU => UU.mask
          },
          metadata: IU
        }, null, tU), (0, cU.j)(UU, null, aU, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "enabled" in UU,
            get: UU => UU.enabled
          },
          metadata: IU
        }, null, tU), IU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IU
        })
      })(), UU
    })();
    var aU = zU(41400),
      tU = zU(41017),
      gU = zU(40989);
    let kU = (() => {
      var UU;
      let XU, zU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU = [],
        xU = [],
        JU = [],
        jU = [],
        KU = [],
        bU = [],
        TU = [],
        hU = [],
        UX = [],
        XX = [],
        zX = [],
        cX = [],
        yX = [],
        QX = [],
        AX = [],
        FX = [],
        oX = [],
        DX = [],
        EX = [],
        YX = [],
        NX = [],
        IX = [],
        pX = [],
        aX = [],
        tX = [],
        gX = [],
        kX = [],
        GX = [],
        BX = [],
        ZX = [],
        RX = [],
        PX = [],
        WX = [],
        dX = [],
        LX = [],
        eX = [],
        CX = [],
        wX = [],
        qX = [],
        OX = [],
        SX = [],
        rX = [],
        uX = [],
        fX = [],
        iX = [],
        HX = [],
        MX = [],
        vX = [],
        VX = [],
        sX = [],
        nX = [];
      return UU = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(XU) {
          this._useVertexPulling !== XU && (this._useVertexPulling = XU, this.OzU(UU.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(UU) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(XU) {
          if (this._alpha === XU) return;
          const zU = this._alpha;
          this._alpha = XU, 1 !== zU && 1 !== XU || this.OzU(UU.MiscDirtyFlag + UU.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(XU) {
          this._backFaceCulling !== XU && (this._backFaceCulling = XU, this.OzU(UU.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(XU) {
          const zU = Math.max(0, Math.min(0 | XU, 4));
          this._textureRepetitionMode !== zU && (this._textureRepetitionMode = zU, this.OzU(UU.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(XU) {
          this._cullBackFaces !== XU && (this._cullBackFaces = XU, this.OzU(UU.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(UU) {
          this._blockDirtyMechanism !== UU && (this._blockDirtyMechanism = UU, UU || this.markDirty())
        }
        atomicMaterialsUpdate(UU) {
          this.blockDirtyMechanism = !0;
          try {
            UU(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(UU) {
          this._onDisposeObserver && this.bS.remove(this._onDisposeObserver), this._onDisposeObserver = this.bS.add(UU)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new AU.e), this._onBindObservable
        }
        set onBind(UU) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(UU)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new AU.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new AU.e), this._onEffectCreatedObservable
        }
        set alphaMode(UU) {
          this._alphaMode[0] = UU
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[zU] !== XU && (this._alphaMode[zU] = XU, this.OzU(UU.TextureDirtyFlag))
        }
        set needDepthPrePass(UU) {
          this._needDepthPrePass !== UU && (this._needDepthPrePass = UU, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(XU) {
          this._fogEnabled !== XU && (this._fogEnabled = XU, this.OzU(UU.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case UU.WireFrameFillMode:
            case UU.LineListDrawMode:
            case UU.LineLoopDrawMode:
            case UU.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(XU) {
          this.fillMode = XU ? UU.WireFrameFillMode : UU.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case UU.PointFillMode:
            case UU.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(XU) {
          this.fillMode = XU ? UU.PointFillMode : UU.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(XU) {
          this._fillMode !== XU && (this._fillMode = XU, this.OzU(UU.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(UU) {
          const XU = this.nS().qp().getCaps().fragmentDepthSupported;
          UU && !XU && EU.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = UU && XU, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(UU) {
          this._isVertexOutputInvariant !== UU && (this._isVertexOutputInvariant = UU, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(UU) {
          this._drawWrapper = UU
        }
        constructor(XU, zU, yU) {
          let oU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, cU.n)(this, lU), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, cU.n)(this, xU, void 0), this.uniqueId = ((0, cU.n)(this, JU), (0, cU.n)(this, jU, void 0)), this._loadedUniqueId = (0, cU.n)(this, KU), this.name = (0, cU.n)(this, bU, void 0), this.metadata = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, null)), this._internalMetadata = (0, cU.n)(this, UX), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, cU.n)(this, XX, !1), this.checkReadyOnlyOnce = ((0, cU.n)(this, zX), (0, cU.n)(this, cX, !1)), this.state = ((0, cU.n)(this, yX), (0, cU.n)(this, QX, "")), this._alpha = ((0, cU.n)(this, AX), (0, cU.n)(this, FX, 1)), this.inspectableCustomProperties = (0, cU.n)(this, oX), this._backFaceCulling = (0, cU.n)(this, DX, !0), this._textureRepetitionMode = ((0, cU.n)(this, EX), (0, cU.n)(this, YX, 0)), this.textureRepetitionHexTilingParams = ((0, cU.n)(this, NX), (0, cU.n)(this, IX, [1, .6, 7, .5])), this._cullBackFaces = ((0, cU.n)(this, pX), (0, cU.n)(this, aX, !0)), this._blockDirtyMechanism = ((0, cU.n)(this, tX), !1), this.sideOrientation = (0, cU.n)(this, gX, null), this.onCompiled = ((0, cU.n)(this, kX), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.bS = new AU.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, cU.n)(this, GX, [2]), this._needDepthPrePass = ((0, cU.n)(this, BX), (0, cU.n)(this, ZX, !1)), this.disableDepthWrite = ((0, cU.n)(this, RX), (0, cU.n)(this, PX, !1)), this.disableColorWrite = ((0, cU.n)(this, WX), (0, cU.n)(this, dX, !1)), this.forceDepthWrite = ((0, cU.n)(this, LX), (0, cU.n)(this, eX, !1)), this.depthFunction = ((0, cU.n)(this, CX), (0, cU.n)(this, wX, 0)), this.separateCullingPass = ((0, cU.n)(this, qX), (0, cU.n)(this, OX, !1)), this._fogEnabled = ((0, cU.n)(this, SX), (0, cU.n)(this, rX, !0)), this.pointSize = ((0, cU.n)(this, uX), (0, cU.n)(this, fX, 1)), this.zOffset = ((0, cU.n)(this, iX), (0, cU.n)(this, HX, 0)), this.zOffsetUnits = ((0, cU.n)(this, MX), (0, cU.n)(this, vX, 0)), this.clipPlane = (0, cU.n)(this, VX), this.stencil = new pU, this._isVertexOutputInvariant = (0, cU.n)(this, sX, UU.ForceVertexOutputInvariant), this._materialContext = (0, cU.n)(this, nX), this._useUBO = !1, this._fillMode = UU.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = XU;
          const EU = zU || FU.b.LastCreatedScene;
          EU && (this._scene = EU, this._dirtyCallbacks = {}, this._forceGLSL = oU, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = XU || QU.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.qp().createMaterialContext(), this._drawWrapper = new NU.c(this._scene.qp(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new DU.b(this._scene.qp(), void 0, void 0, XU), this._useUBO = this.nS().qp().supportsUniformBuffers, this._createUniformBuffer(), yU || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), UU.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const UU = this.nS().qp();
          this._uniformBuffer?.dispose(), UU.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new DU.b(UU, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new DU.b(this._scene.qp(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(UU) {
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
        isReady(UU, XU) {
          return !0
        }
        isReadyForSubMesh(UU, XU, zU) {
          const cU = XU.materialDefines;
          return !!cU && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = cU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        nS() {
          return this._scene
        }
        _getEffectiveOrientation(UU) {
          return null !== this.sideOrientation ? this.sideOrientation : UU.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(UU) {
          this._transparencyMode = UU
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === UU.MATERIAL_ALPHABLEND || this._transparencyMode === UU.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === UU.MATERIAL_ALPHATEST || this._transparencyMode === UU.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === UU.MATERIAL_OPAQUE || this._transparencyMode === UU.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(UU) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : UU.visibility < 1 || !this._disableAlphaBlending && (UU.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(UU) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(UU) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zU = this.nS().meshes;
          for (const UU of zU)
            if (UU.uB)
              for (const zU of UU.uB)
                if (zU.Hp() === this)
                  for (const UU of zU._drawWrappers) UU && this._materialContext === UU.materialContext && (UU._wasPreviouslyReady = !1, UU._wasPreviouslyUsingInstances = null, UU._forceRebindOnNextCall = XU);
          XU && this.OzU(UU.AllDirtyFlag)
        }
        _preBind(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const cU = this._scene.qp(),
            yU = (null == zU ? this.sideOrientation : zU) === UU.ClockWiseSideOrientation,
            QU = XU || this._getDrawWrapper();
          return (0, tU.c)(QU) && QU.materialContext && (QU.materialContext.useVertexPulling = this.useVertexPulling), cU.enableEffect(QU), cU.setState(this.backFaceCulling, this.zOffset, !1, yU, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), yU
        }
        bind(UU, XU) {}
        buildUniformLayout() {
          const UU = this._uniformBuffer;
          this._eventInfo.ubo = UU, this._callbackPluginEventGeneric(8, this._eventInfo), UU.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(UU, XU, zU) {
          const cU = zU._drawWrapper;
          this._eventInfo.subMesh = zU, this._callbackPluginEventBindForSubMesh(this._eventInfo), cU._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(UU) {}
        bindView(UU) {
          this._useUBO ? this._needToBindSceneUbo = !0 : UU.setMatrix("view", this.nS().getViewMatrix())
        }
        bindViewProjection(UU) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (UU.setMatrix("viewProjection", this.nS().getTransformMatrix()), UU.setMatrix("projection", this.nS().getProjectionMatrix()), UU.setMatrix("inverseProjection", this.nS().getInverseProjectionMatrix()))
        }
        bindEyePosition(UU, XU) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(UU, XU)
        }
        _afterBind(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && XU && (this._needToBindSceneUbo = !1, (0, aU.x)(XU, this.nS().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = UU ? UU.visibility : 1, this._onBindObservable && UU && this._onBindObservable.notifyObservers(UU), this.disableDepthWrite) {
            const UU = this._scene.qp();
            this._cachedDepthWriteState = UU.getDepthWrite(), UU.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const UU = this._scene.qp();
            this._cachedColorWriteState = UU.getColorWrite(), UU.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const UU = this._scene.qp();
            this._cachedDepthFunctionState = UU.getDepthFunction() || 0, UU.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.qp().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.qp().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.qp().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(UU) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = UU, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(UU) {
          return null
        }
        _clonePlugins(XU, zU) {
          const cU = {};
          if (this._serializePlugins(cU), UU._ParsePlugins(cU, XU, this._scene, zU), this.pluginManager)
            for (const UU of this.pluginManager._plugins) {
              const zU = XU.pluginManager.getPlugin(UU.name);
              zU && UU.copyTo(zU)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const UU = [];
            for (const XU in this.meshMap) {
              const zU = this.meshMap[XU];
              zU && UU.push(zU)
            }
            return UU
          }
          return this._scene.meshes.filter((UU => UU.material === this))
        }
        forceCompilation(UU, XU, zU, cU) {
          const yU = {
              clipPlane: !1,
              useInstances: !1,
              ...zU
            },
            QU = this.nS(),
            AU = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const FU = () => {
            if (!this._scene || !this._scene.qp()) return;
            const zU = QU.clipPlane;
            if (yU.clipPlane && (QU.clipPlane = new YU.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let zU = !0,
                QU = null;
              if (UU.uB) {
                const XU = new oU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
                XU.materialDefines && (XU.materialDefines._renderId = -1), this.isReadyForSubMesh(UU, XU, yU.useInstances) || (XU.effect && XU.effect.getCompilationError() && XU.effect.allFallbacksProcessed() ? QU = XU.effect.getCompilationError() : (zU = !1, setTimeout(FU, 16)))
              }
              zU && (this.allowShaderHotSwapping = AU, QU && cU && cU(QU), XU && XU(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = AU, XU && XU(this)) : setTimeout(FU, 16);
            yU.clipPlane && (QU.clipPlane = zU)
          };
          FU()
        }
        async forceCompilationAsync(UU, XU) {
          return await new Promise(((zU, cU) => {
            this.forceCompilation(UU, (() => {
              zU()
            }), XU, (UU => {
              cU(UU)
            }))
          }))
        }
        OzU(XU) {
          this.nS().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (UU._DirtyCallbackArray.length = 0, XU & UU.ImageProcessingDirtyFlag && UU._DirtyCallbackArray.push(UU._ImageProcessingDirtyCallBack), XU & UU.TextureDirtyFlag && UU._DirtyCallbackArray.push(UU._TextureDirtyCallBack), XU & UU.LightDirtyFlag && UU._DirtyCallbackArray.push(UU._LightsDirtyCallBack), XU & UU.FresnelDirtyFlag && UU._DirtyCallbackArray.push(UU._FresnelDirtyCallBack), XU & UU.AttributesDirtyFlag && UU._DirtyCallbackArray.push(UU._AttributeDirtyCallBack), XU & UU.MiscDirtyFlag && UU._DirtyCallbackArray.push(UU._MiscDirtyCallBack), XU & UU.PrePassDirtyFlag && UU._DirtyCallbackArray.push(UU._PrePassDirtyCallBack), UU._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(UU._RunDirtyCallBacks), this.nS().resetCachedMaterial())
        }
        resetDrawCache() {
          const UU = this.nS().meshes;
          for (const XU of UU)
            if (XU.uB)
              for (const UU of XU.uB) UU.Hp() === this && UU.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(UU) {
          const XU = this.nS();
          if (XU.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const zU = XU.meshes;
          for (const cU of zU)
            if (cU.uB)
              for (const zU of cU.uB) {
                if ((zU.Hp() || (XU._hasDefaultMaterial ? XU.defaultMaterial : null)) === this)
                  for (const XU of zU._drawWrappers) XU && XU.defines && XU.defines.markAllAsDirty && this._materialContext === XU.materialContext && UU(XU.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.nS().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const UU = this.nS().enablePrePassRenderer();
          UU && UU.OzU()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(UU._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(UU._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(UU._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(UU._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(UU._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(UU._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(UU._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(UU._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(UU._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(UU._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const UU = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.bS.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(UU)
            }))
          }
        }
        setPrePassRenderer(UU) {
          return !1
        }
        dispose(UU, XU, zU) {
          const cU = this.nS();
          if (cU.stopAnimation(this), cU.freeProcessedMaterials(), cU.removeMaterial(this), this._eventInfo.forceDisposeTextures = XU, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const UU = this._parentContainer.materials.indexOf(this);
            UU > -1 && this._parentContainer.materials.splice(UU, 1), this._parentContainer = null
          }
          if (!0 !== zU)
            if (this.meshMap)
              for (const yU in this.meshMap) {
                const UU = this.meshMap[yU];
                this._disposeMeshResources(UU)
              } else {
                const UU = cU.meshes;
                for (const XU of UU) this._disposeMeshResources(XU)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.bS.notifyObservers(this), this.bS.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(UU) {
          if (!UU) return;
          const XU = UU.geometry,
            zU = UU._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (UU.uB && zU)
              for (const cU of UU.uB) {
                const UU = cU._drawWrappers;
                for (let yU = 0; yU < UU.length; yU++) {
                  const QU = UU[yU]?.effect;
                  if (!QU) continue;
                  zU[yU] === this && (XU?._releaseVertexArrayObject(QU), cU._removeDrawWrapper(yU, !0, !0))
                }
              }
          } else XU?._releaseVertexArrayObject(this._drawWrapper.effect);
          UU.material !== this || UU.KyU || (UU.material = null)
        }
        serialize() {
          const UU = IU.b.Serialize(this);
          return UU.stencil = this.stencil.serialize(), UU.uniqueId = this.uniqueId, this._serializePlugins(UU), UU
        }
        _serializePlugins(UU) {
          if (UU.plugins = {}, this.pluginManager)
            for (const XU of this.pluginManager._plugins) XU.doNotSerialize || (UU.plugins[XU.getClassName()] = XU.serialize())
        }
        static ParseAlphaMode(UU, XU) {
          void 0 !== UU._alphaMode ? XU._alphaMode = Array.isArray(UU._alphaMode) ? [...UU._alphaMode] : [UU._alphaMode] : void 0 !== UU.alphaMode ? XU._alphaMode = Array.isArray(UU.alphaMode) ? [...UU.alphaMode] : [UU.alphaMode] : XU._alphaMode = [2]
        }
        static Parse(XU, zU, cU) {
          if (XU.customType) {
            if ("BABYLON.PBRMaterial" === XU.customType && XU.overloadedAlbedo && (XU.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return EU.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else XU.customType = "BABYLON.StandardMaterial";
          const yU = QU.j.Instantiate(XU.customType).Parse(XU, zU, cU);
          return yU._loadedUniqueId = XU.uniqueId, UU.ParseAlphaMode(XU, yU), yU
        }
        static _ParsePlugins(UU, XU, zU, cU) {
          if (UU.plugins)
            for (const yU in UU.plugins) {
              const AU = UU.plugins[yU];
              let FU = XU.pluginManager?.getPlugin(AU.name);
              if (!FU) {
                const UU = QU.j.Instantiate("BABYLON." + yU);
                UU && (FU = new UU(XU))
              }
              FU?.parse(AU, zU, cU)
            }
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, yU.I)()], zU = [(0, yU.I)()], gU = [(0, yU.I)()], kU = [(0, yU.I)()], GU = [(0, yU.I)()], BU = [(0, yU.I)()], ZU = [(0, yU.I)()], RU = [(0, yU.I)("alpha")], PU = [(0, yU.I)("backFaceCulling")], WU = [(0, yU.I)("textureRepetitionMode")], dU = [(0, yU.I)("textureRepetitionHexTilingParams")], LU = [(0, yU.I)("cullBackFaces")], eU = [(0, yU.I)()], CU = [(0, yU.I)()], wU = [(0, yU.I)()], qU = [(0, yU.I)()], OU = [(0, yU.I)()], SU = [(0, yU.I)()], rU = [(0, yU.I)()], uU = [(0, yU.I)()], fU = [(0, yU.I)("fogEnabled")], iU = [(0, yU.I)()], HU = [(0, yU.I)()], MU = [(0, yU.I)()], vU = [(0, yU.I)()], VU = [(0, yU.I)()], sU = [(0, yU.I)()], nU = [(0, yU.I)()], mU = [(0, yU.I)()], (0, cU.j)(UU, null, vU, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: UU => "pointsCloud" in UU,
            get: UU => UU.pointsCloud
          },
          metadata: QU
        }, null, lU), (0, cU.j)(UU, null, VU, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "fillMode" in UU,
            get: UU => UU.fillMode
          },
          metadata: QU
        }, null, lU), (0, cU.j)(UU, null, sU, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLogarithmicDepth" in UU,
            get: UU => UU.useLogarithmicDepth
          },
          metadata: QU
        }, null, lU), (0, cU.j)(UU, null, mU, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "transparencyMode" in UU,
            get: UU => UU.transparencyMode
          },
          metadata: QU
        }, null, lU), (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: UU => "id" in UU,
            get: UU => UU.id,
            set: (UU, XU) => {
              UU.id = XU
            }
          },
          metadata: QU
        }, xU, JU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: UU => "uniqueId" in UU,
            get: UU => UU.uniqueId,
            set: (UU, XU) => {
              UU.uniqueId = XU
            }
          },
          metadata: QU
        }, jU, KU), (0, cU.j)(null, null, gU, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: UU => "name" in UU,
            get: UU => UU.name,
            set: (UU, XU) => {
              UU.name = XU
            }
          },
          metadata: QU
        }, bU, TU), (0, cU.j)(null, null, kU, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: UU => "metadata" in UU,
            get: UU => UU.metadata,
            set: (UU, XU) => {
              UU.metadata = XU
            }
          },
          metadata: QU
        }, hU, UX), (0, cU.j)(null, null, GU, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: UU => "checkReadyOnEveryCall" in UU,
            get: UU => UU.checkReadyOnEveryCall,
            set: (UU, XU) => {
              UU.checkReadyOnEveryCall = XU
            }
          },
          metadata: QU
        }, XX, zX), (0, cU.j)(null, null, BU, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: UU => "checkReadyOnlyOnce" in UU,
            get: UU => UU.checkReadyOnlyOnce,
            set: (UU, XU) => {
              UU.checkReadyOnlyOnce = XU
            }
          },
          metadata: QU
        }, cX, yX), (0, cU.j)(null, null, ZU, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: UU => "state" in UU,
            get: UU => UU.state,
            set: (UU, XU) => {
              UU.state = XU
            }
          },
          metadata: QU
        }, QX, AX), (0, cU.j)(null, null, RU, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "_alpha" in UU,
            get: UU => UU._alpha,
            set: (UU, XU) => {
              UU._alpha = XU
            }
          },
          metadata: QU
        }, FX, oX), (0, cU.j)(null, null, PU, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: UU => "_backFaceCulling" in UU,
            get: UU => UU._backFaceCulling,
            set: (UU, XU) => {
              UU._backFaceCulling = XU
            }
          },
          metadata: QU
        }, DX, EX), (0, cU.j)(null, null, WU, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_textureRepetitionMode" in UU,
            get: UU => UU._textureRepetitionMode,
            set: (UU, XU) => {
              UU._textureRepetitionMode = XU
            }
          },
          metadata: QU
        }, YX, NX), (0, cU.j)(null, null, dU, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: UU => "textureRepetitionHexTilingParams" in UU,
            get: UU => UU.textureRepetitionHexTilingParams,
            set: (UU, XU) => {
              UU.textureRepetitionHexTilingParams = XU
            }
          },
          metadata: QU
        }, IX, pX), (0, cU.j)(null, null, LU, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: UU => "_cullBackFaces" in UU,
            get: UU => UU._cullBackFaces,
            set: (UU, XU) => {
              UU._cullBackFaces = XU
            }
          },
          metadata: QU
        }, aX, tX), (0, cU.j)(null, null, eU, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: UU => "sideOrientation" in UU,
            get: UU => UU.sideOrientation,
            set: (UU, XU) => {
              UU.sideOrientation = XU
            }
          },
          metadata: QU
        }, gX, kX), (0, cU.j)(null, null, CU, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_alphaMode" in UU,
            get: UU => UU._alphaMode,
            set: (UU, XU) => {
              UU._alphaMode = XU
            }
          },
          metadata: QU
        }, GX, BX), (0, cU.j)(null, null, wU, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: UU => "_needDepthPrePass" in UU,
            get: UU => UU._needDepthPrePass,
            set: (UU, XU) => {
              UU._needDepthPrePass = XU
            }
          },
          metadata: QU
        }, ZX, RX), (0, cU.j)(null, null, qU, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableDepthWrite" in UU,
            get: UU => UU.disableDepthWrite,
            set: (UU, XU) => {
              UU.disableDepthWrite = XU
            }
          },
          metadata: QU
        }, PX, WX), (0, cU.j)(null, null, OU, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableColorWrite" in UU,
            get: UU => UU.disableColorWrite,
            set: (UU, XU) => {
              UU.disableColorWrite = XU
            }
          },
          metadata: QU
        }, dX, LX), (0, cU.j)(null, null, SU, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceDepthWrite" in UU,
            get: UU => UU.forceDepthWrite,
            set: (UU, XU) => {
              UU.forceDepthWrite = XU
            }
          },
          metadata: QU
        }, eX, CX), (0, cU.j)(null, null, rU, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: UU => "depthFunction" in UU,
            get: UU => UU.depthFunction,
            set: (UU, XU) => {
              UU.depthFunction = XU
            }
          },
          metadata: QU
        }, wX, qX), (0, cU.j)(null, null, uU, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: UU => "separateCullingPass" in UU,
            get: UU => UU.separateCullingPass,
            set: (UU, XU) => {
              UU.separateCullingPass = XU
            }
          },
          metadata: QU
        }, OX, SX), (0, cU.j)(null, null, fU, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "_fogEnabled" in UU,
            get: UU => UU._fogEnabled,
            set: (UU, XU) => {
              UU._fogEnabled = XU
            }
          },
          metadata: QU
        }, rX, uX), (0, cU.j)(null, null, iU, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: UU => "pointSize" in UU,
            get: UU => UU.pointSize,
            set: (UU, XU) => {
              UU.pointSize = XU
            }
          },
          metadata: QU
        }, fX, iX), (0, cU.j)(null, null, HU, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: UU => "zOffset" in UU,
            get: UU => UU.zOffset,
            set: (UU, XU) => {
              UU.zOffset = XU
            }
          },
          metadata: QU
        }, HX, MX), (0, cU.j)(null, null, MU, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: UU => "zOffsetUnits" in UU,
            get: UU => UU.zOffsetUnits,
            set: (UU, XU) => {
              UU.zOffsetUnits = XU
            }
          },
          metadata: QU
        }, vX, VX), (0, cU.j)(null, null, nU, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: UU => "_isVertexOutputInvariant" in UU,
            get: UU => UU._isVertexOutputInvariant,
            set: (UU, XU) => {
              UU._isVertexOutputInvariant = XU
            }
          },
          metadata: QU
        }, sX, nX), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU.TriangleFillMode = 0, UU.WireFrameFillMode = 1, UU.PointFillMode = 2, UU.PointListDrawMode = 3, UU.LineListDrawMode = 4, UU.LineLoopDrawMode = 5, UU.LineStripDrawMode = 6, UU.TriangleStripDrawMode = 7, UU.TriangleFanDrawMode = 8, UU.ClockWiseSideOrientation = 0, UU.CounterClockWiseSideOrientation = 1, UU.ImageProcessingDirtyFlag = 64, UU.TextureDirtyFlag = 1, UU.LightDirtyFlag = 2, UU.FresnelDirtyFlag = 4, UU.AttributesDirtyFlag = 8, UU.MiscDirtyFlag = 16, UU.PrePassDirtyFlag = 32, UU.AllDirtyFlag = 127, UU.MATERIAL_OPAQUE = 0, UU.MATERIAL_ALPHATEST = 1, UU.MATERIAL_ALPHABLEND = 2, UU.MATERIAL_ALPHATESTANDBLEND = 3, UU.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, UU.MATERIAL_NORMALBLENDMETHOD_RNM = 1, UU.LIGHTFALLOFF_PHYSICAL = 0, UU.LIGHTFALLOFF_GLTF = 1, UU.LIGHTFALLOFF_STANDARD = 2, UU.OnEventObservable = new AU.e, UU.ForceVertexOutputInvariant = !1, UU._AllDirtyCallBack = UU => UU.markAllAsDirty(), UU._ImageProcessingDirtyCallBack = UU => UU.markAsImageProcessingDirty(), UU._TextureDirtyCallBack = UU => UU.markAsTexturesDirty(), UU._FresnelDirtyCallBack = UU => UU.markAsFresnelDirty(), UU._MiscDirtyCallBack = UU => UU.markAsMiscDirty(), UU._PrePassDirtyCallBack = UU => UU.markAsPrePassDirty(), UU._LightsDirtyCallBack = UU => UU.markAsLightDirty(), UU._AttributeDirtyCallBack = UU => UU.markAsAttributesDirty(), UU._FresnelAndMiscDirtyCallBack = XU => {
        UU._FresnelDirtyCallBack(XU), UU._MiscDirtyCallBack(XU)
      }, UU._TextureAndMiscDirtyCallBack = XU => {
        UU._TextureDirtyCallBack(XU), UU._MiscDirtyCallBack(XU)
      }, UU._DirtyCallbackArray = [], UU._RunDirtyCallBacks = XU => {
        for (const zU of UU._DirtyCallbackArray) zU(XU)
      }, UU
    })();
    Object.getOwnPropertyDescriptor(kU.prototype, "pluginManager") || Object.defineProperty(kU.prototype, "pluginManager", (0, gU.i)("Material", "pluginManager"))
  },
  41413: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(41003);
    class yU {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(UU) {
        this._DiffuseTextureEnabled !== UU && (this._DiffuseTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(UU) {
        this._BaseWeightTextureEnabled !== UU && (this._BaseWeightTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(UU) {
        this._BaseDiffuseRoughnessTextureEnabled !== UU && (this._BaseDiffuseRoughnessTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(UU) {
        this._DetailTextureEnabled !== UU && (this._DetailTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(UU) {
        this._DecalMapEnabled !== UU && (this._DecalMapEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(UU) {
        this._AmbientTextureEnabled !== UU && (this._AmbientTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(UU) {
        this._OpacityTextureEnabled !== UU && (this._OpacityTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(UU) {
        this._ReflectionTextureEnabled !== UU && (this._ReflectionTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(UU) {
        this._EmissiveTextureEnabled !== UU && (this._EmissiveTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(UU) {
        this._SpecularTextureEnabled !== UU && (this._SpecularTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(UU) {
        this._BumpTextureEnabled !== UU && (this._BumpTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(UU) {
        this._LightmapTextureEnabled !== UU && (this._LightmapTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(UU) {
        this._RefractionTextureEnabled !== UU && (this._RefractionTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(UU) {
        this._ColorGradingTextureEnabled !== UU && (this._ColorGradingTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(UU) {
        this._FresnelEnabled !== UU && (this._FresnelEnabled = UU, cU.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(UU) {
        this._ClearCoatTextureEnabled !== UU && (this._ClearCoatTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(UU) {
        this._ClearCoatBumpTextureEnabled !== UU && (this._ClearCoatBumpTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(UU) {
        this._ClearCoatTintTextureEnabled !== UU && (this._ClearCoatTintTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(UU) {
        this._SheenTextureEnabled !== UU && (this._SheenTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(UU) {
        this._AnisotropicTextureEnabled !== UU && (this._AnisotropicTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(UU) {
        this._ThicknessTextureEnabled !== UU && (this._ThicknessTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(UU) {
        this._RefractionIntensityTextureEnabled !== UU && (this._RefractionIntensityTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(UU) {
        this._TranslucencyIntensityTextureEnabled !== UU && (this._TranslucencyIntensityTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(UU) {
        this._TranslucencyColorTextureEnabled !== UU && (this._TranslucencyColorTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(UU) {
        this._IridescenceTextureEnabled !== UU && (this._IridescenceTextureEnabled = UU, cU.c.MarkAllMaterialsAsDirty(1))
      }
    }
    yU._DiffuseTextureEnabled = !0, yU._BaseWeightTextureEnabled = !0, yU._BaseDiffuseRoughnessTextureEnabled = !0, yU._DetailTextureEnabled = !0, yU._DecalMapEnabled = !0, yU._AmbientTextureEnabled = !0, yU._OpacityTextureEnabled = !0, yU._ReflectionTextureEnabled = !0, yU._EmissiveTextureEnabled = !0, yU._SpecularTextureEnabled = !0, yU._BumpTextureEnabled = !0, yU._LightmapTextureEnabled = !0, yU._RefractionTextureEnabled = !0, yU._ColorGradingTextureEnabled = !0, yU._FresnelEnabled = !0, yU._ClearCoatTextureEnabled = !0, yU._ClearCoatBumpTextureEnabled = !0, yU._ClearCoatTintTextureEnabled = !0, yU._SheenTextureEnabled = !0, yU._AnisotropicTextureEnabled = !0, yU._ThicknessTextureEnabled = !0, yU._RefractionIntensityTextureEnabled = !0, yU._TranslucencyIntensityTextureEnabled = !0, yU._TranslucencyColorTextureEnabled = !0, yU._IridescenceTextureEnabled = !0
  },
  41400: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => sU,
      B: () => BU,
      D: () => wU,
      F: () => ZU,
      H: () => eU,
      K: () => CU,
      L: () => IU,
      O: () => NU,
      Q: () => VU,
      S: () => fU,
      T: () => rU,
      V: () => SU,
      Z: () => GU,
      _: () => qU,
      bb: () => nU,
      e: () => OU,
      fb: () => mU,
      h: () => RU,
      i: () => YU,
      ib: () => jU,
      kb: () => xU,
      m: () => gU,
      mb: () => JU,
      nb: () => pU,
      p: () => kU,
      q: () => LU,
      t: () => oU,
      w: () => aU,
      x: () => tU
    });
    var cU = zU(39493),
      yU = zU(37841),
      QU = zU(41293),
      AU = zU(41406),
      FU = zU(41413);

    function oU(UU, XU, zU) {
      if (!UU || UU.LOGARITHMICDEPTH || UU.indexOf && UU.indexOf("LOGARITHMICDEPTH") >= 0) {
        const UU = zU.activeCamera;
        1 === UU.mode && cU.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), XU.setFloat("logarithmicDepthConstant", 2 / (Math.log(UU.maxZ + 1) / Math.LN2))
      }
    }
    const DU = {
        r: 0,
        g: 0,
        b: 0
      },
      EU = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function YU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      zU && UU.fogEnabled && (!XU || XU.applyFog) && 0 !== UU.fogMode && (zU.setFloat4("vFogInfos", UU.fogMode, UU.fogStart, UU.fogEnd, UU.fogDensity), cU ? (UU.fogColor.toLinearSpaceToRef(DU, UU.qp().useExactSrgbConversions), zU.setColor3("vFogColor", DU)) : zU.setColor3("vFogColor", UU.fogColor))
    }

    function NU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
      const YU = UU.numMaxInfluencers || UU.numInfluencers;
      return YU <= 0 ? 0 : (XU.push("#define MORPHTARGETS"), UU.hasPositions && XU.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), UU.hasNormals && XU.push("#define MORPHTARGETTEXTURE_HASNORMALS"), UU.hasTangents && XU.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), UU.hasUVs && XU.push("#define MORPHTARGETTEXTURE_HASUVS"), UU.hasUV2s && XU.push("#define MORPHTARGETTEXTURE_HASUV2S"), UU.hasColors && XU.push("#define MORPHTARGETTEXTURE_HASCOLORS"), UU.supportsPositions && yU && XU.push("#define MORPHTARGETS_POSITION"), UU.supportsNormals && QU && XU.push("#define MORPHTARGETS_NORMAL"), UU.supportsTangents && AU && XU.push("#define MORPHTARGETS_TANGENT"), UU.supportsUVs && FU && XU.push("#define MORPHTARGETS_UV"), UU.supportsUV2s && oU && XU.push("#define MORPHTARGETS_UV2"), UU.supportsColors && DU && XU.push("#define MORPHTARGETS_COLOR"), XU.push("#define NUM_MORPH_INFLUENCERS " + YU), UU.isUsingTextureForTargets && XU.push("#define MORPHTARGETS_TEXTURE"), EU.NUM_MORPH_INFLUENCERS = YU, EU.NORMAL = QU, EU.TANGENT = AU, EU.UV = FU, EU.UV2 = oU, EU.COLOR = DU, IU(zU, cU, EU, yU), YU)
    }

    function IU(UU, XU, zU) {
      let QU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const AU = zU.NUM_MORPH_INFLUENCERS;
      if (AU > 0 && yU.b.LastCreatedEngine) {
        const FU = yU.b.LastCreatedEngine.getCaps().maxVertexAttribs,
          oU = XU.morphTargetManager;
        if (oU?.isUsingTextureForTargets) return;
        const DU = oU && oU.supportsPositions && QU,
          EU = oU && oU.supportsNormals && zU.NORMAL,
          YU = oU && oU.supportsTangents && zU.TANGENT,
          NU = oU && oU.supportsUVs && zU.UV1,
          IU = oU && oU.supportsUV2s && zU.UV2,
          pU = oU && oU.supportsColors && zU.VERTEXCOLOR;
        for (let zU = 0; zU < AU; zU++) DU && UU.push("position" + zU), EU && UU.push("normal" + zU), YU && UU.push("tangent" + zU), NU && UU.push("uv_" + zU), IU && UU.push("uv2_" + zU), pU && UU.push("color" + zU), UU.length > FU && cU.b.Error("Cannot add more vertex attributes for mesh " + XU.name)
      }
    }

    function pU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      UU.push("world0"), UU.push("world1"), UU.push("world2"), UU.push("world3"), XU && (UU.push("previousWorld0"), UU.push("previousWorld1"), UU.push("previousWorld2"), UU.push("previousWorld3"))
    }

    function aU(UU, XU) {
      const zU = UU.morphTargetManager;
      UU && zU && XU.setFloatArray("morphTargetInfluences", zU.influences)
    }

    function tU(UU, XU) {
      XU.bindToEffect(UU, "Scene")
    }

    function gU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        DU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        EU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        YU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        NU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (UU.texturesEnabled && yU && FU.b.ReflectionTextureEnabled) {
        if (zU.eUU("reflectionMatrix", yU.getReflectionTextureMatrix()), zU.updateFloat2("vReflectionInfos", yU.level * UU.iblIntensity, NU), oU && yU.boundingBoxSize) {
          const UU = yU;
          zU.updateVector3("vReflectionPosition", UU.boundingBoxPosition), zU.updateVector3("vReflectionSize", UU.boundingBoxSize)
        }
        if (QU) {
          const UU = yU.getSize().width;
          zU.updateFloat2("vReflectionFilteringInfo", UU, Math.log2(UU))
        }
        if (EU && !XU.USEIRRADIANCEMAP) {
          const UU = yU.sphericalPolynomial;
          if (XU.USESPHERICALFROMREFLECTIONMAP && UU)
            if (XU.SPHERICAL_HARMONICS) {
              const XU = UU.preScaledHarmonics;
              zU.updateVector3("vSphericalL00", XU.l00), zU.updateVector3("vSphericalL1_1", XU.l1_1), zU.updateVector3("vSphericalL10", XU.l10), zU.updateVector3("vSphericalL11", XU.l11), zU.updateVector3("vSphericalL2_2", XU.l2_2), zU.updateVector3("vSphericalL2_1", XU.l2_1), zU.updateVector3("vSphericalL20", XU.l20), zU.updateVector3("vSphericalL21", XU.l21), zU.updateVector3("vSphericalL22", XU.l22)
            } else zU.updateFloat3("vSphericalX", UU.x.x, UU.x.y, UU.x.z), zU.updateFloat3("vSphericalY", UU.y.x, UU.y.y, UU.y.z), zU.updateFloat3("vSphericalZ", UU.z.x, UU.z.y, UU.z.z), zU.updateFloat3("vSphericalXX_ZZ", UU.xx.x - UU.zz.x, UU.xx.y - UU.zz.y, UU.xx.z - UU.zz.z), zU.updateFloat3("vSphericalYY_ZZ", UU.yy.x - UU.zz.x, UU.yy.y - UU.zz.y, UU.yy.z - UU.zz.z), zU.updateFloat3("vSphericalZZ", UU.zz.x, UU.zz.y, UU.zz.z), zU.updateFloat3("vSphericalXY", UU.xy.x, UU.xy.y, UU.xy.z), zU.updateFloat3("vSphericalYZ", UU.yz.x, UU.yz.y, UU.yz.z), zU.updateFloat3("vSphericalZX", UU.zx.x, UU.zx.y, UU.zx.z)
        } else DU && XU.USEIRRADIANCEMAP && XU.USE_IRRADIANCE_DOMINANT_DIRECTION && yU.irradianceTexture && zU.updateVector3("vReflectionDominantDirection", yU.irradianceTexture._dominantDirection);
        AU && zU.updateFloat3("vReflectionMicrosurfaceInfos", yU.getSize().width, yU.lodGenerationScale, yU.lodGenerationOffset)
      }
      YU && zU.updateColor3("vReflectionColor", cU)
    }

    function kU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (cU && FU.b.ReflectionTextureEnabled) {
        XU.LODBASEDMICROSFURACE ? zU.setTexture("reflectionSampler", cU) : (zU.setTexture("reflectionSampler", cU._lodTextureMid || cU), zU.setTexture("reflectionSamplerLow", cU._lodTextureLow || cU), zU.setTexture("reflectionSamplerHigh", cU._lodTextureHigh || cU)), XU.USEIRRADIANCEMAP && zU.setTexture("irradianceSampler", cU.irradianceTexture);
        const QU = UU.iblCdfGenerator;
        yU && QU && zU.setTexture("icdfSampler", QU.getIcdfTexture())
      }
    }

    function GU(UU, XU, zU) {
      XU._needUVs = !0, XU[zU] = !0, UU.optimizeUVAllocation && UU.getTextureMatrix().isIdentityAs3x2() ? (XU[zU + "DIRECTUV"] = UU.coordinatesIndex + 1, XU["MAINUV" + (UU.coordinatesIndex + 1)] = !0) : XU[zU + "DIRECTUV"] = 0
    }

    function BU(UU, XU, zU) {
      const cU = UU.getTextureMatrix();
      XU.eUU(zU + "Matrix", cU)
    }

    function ZU(UU, XU, zU) {
      zU.BAKED_VERTEX_ANIMATION_TEXTURE && zU.INSTANCES && UU.push("bakedVertexAnimationSettingsInstanced")
    }

    function RU(UU, XU, zU) {
      var cU;
      if (XU && UU && (UU.computeBonesUsingShaders && XU._bonesComputationForcedToCPU && (UU.computeBonesUsingShaders = !1), UU.useBones && UU.computeBonesUsingShaders && UU.skeleton)) {
        const yU = UU.skeleton;
        if (yU.isUsingTextureForMatrices && XU.getUniformIndex("boneTextureInfo") > -1) {
          const zU = yU.getTransformMatrixTexture(UU);
          XU.setTexture("boneSampler", zU), XU.setFloat2("boneTextureInfo", yU._textureWidth, yU._textureHeight)
        } else {
          const QU = yU.getTransformMatrices(UU);
          QU && (XU.setMatrices("mBones", QU), zU && UU.nS().prePassRenderer && UU.nS().prePassRenderer.getIndex(2) && (zU.previousBones[UU.uniqueId] || (zU.previousBones[UU.uniqueId] = QU.slice()), XU.setMatrices("mPreviousBones", zU.previousBones[UU.uniqueId]), cU = QU, zU.previousBones[UU.uniqueId].set(cU)))
        }
      }
    }

    function PU(UU, XU, zU, cU, yU) {
      let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      UU._bindLight(XU, zU, cU, yU, QU)
    }
    const WU = 4,
      dU = new WeakMap;

    function LU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const QU = Math.min(XU.lightSources.length, yU);
      for (let AU = 0; AU < QU; AU++) {
        PU(XU.lightSources[AU], AU, UU, zU, "boolean" === typeof cU ? cU : cU.SPECULARTERM, XU.receiveShadows)
      }
    }

    function eU(UU, XU, zU, cU) {
      zU.NUM_BONE_INFLUENCERS > 0 && (cU.addCPUSkinningFallback(0, XU), UU.push("matricesIndices"), UU.push("matricesWeights"), zU.NUM_BONE_INFLUENCERS > 4 && (UU.push("matricesIndicesExtra"), UU.push("matricesWeightsExtra")))
    }

    function CU(UU, XU) {
      (XU.INSTANCES || XU.THIN_INSTANCES) && pU(UU, !!XU.PREPASS_VELOCITY), XU.INSTANCESCOLOR && UU.push("instanceColor")
    }

    function wU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yU = 0;
      for (let QU = 0; QU < zU && UU["LIGHT" + QU]; QU++) QU > 0 && (yU = cU + QU, XU.addFallback(yU, "LIGHT" + QU)), UU.SHADOWS || (UU["SHADOW" + QU] && XU.addFallback(cU, "SHADOW" + QU), UU["SHADOWPCF" + QU] && XU.addFallback(cU, "SHADOWPCF" + QU), UU["SHADOWPCSS" + QU] && XU.addFallback(cU, "SHADOWPCSS" + QU), UU["SHADOWPOISSON" + QU] && XU.addFallback(cU, "SHADOWPOISSON" + QU), UU["SHADOWESM" + QU] && XU.addFallback(cU, "SHADOWESM" + QU), UU["SHADOWCLOSEESM" + QU] && XU.addFallback(cU, "SHADOWCLOSEESM" + QU));
      return yU
    }

    function qU(UU, XU, zU, cU, yU, QU, AU) {
      let FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        DU = arguments.length > 9 ? arguments[9] : void 0,
        EU = arguments.length > 10 ? arguments[10] : void 0;
      if (AU._areMiscDirty) {
        AU.LOGARITHMICDEPTH = zU, AU.POINTSIZE = cU, AU.FOG = yU && function(UU, XU) {
          return XU.fogEnabled && UU.applyFog && 0 !== XU.fogMode
        }(UU, XU), AU.NONUNIFORMSCALING = UU.nonUniformScaling, AU.ALPHATEST = QU, AU.DECAL_AFTER_DETAIL = FU, AU.USE_VERTEX_PULLING = oU, AU.RIGHT_HANDED = XU.useRightHandedSystem;
        const YU = oU ? DU?.geometry?.getIndexBuffer() : null,
          NU = !!DU && DU.isUnIndexed;
        AU.VERTEX_PULLING_USE_INDEX_BUFFER = !!YU && !NU, AU.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!YU || NU) && YU.is32Bits, AU.VERTEXOUTPUT_INVARIANT = !!EU
      }
    }

    function OU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!UU.lightsEnabled || cU) return !0;
      const yU = XU.lightSources,
        QU = Math.min(yU.length, zU);
      for (let AU = 0; AU < QU; AU++)
        if (!yU[AU].areLightTexturesReady()) return !1;
      return !0
    }

    function SU(UU, XU, zU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!zU._areLightsDirty) return zU._needNormals;
      const FU = QU;
      QU = function(UU, XU) {
        const zU = UU.qp().getCaps().maxUniformBuffersPerShaderStage;
        if (null == zU) return XU;
        const cU = Math.max(zU - WU, 1);
        return Math.min(XU, cU)
      }(UU, QU);
      let oU = 0;
      const DU = {
        needNormals: zU._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (UU.lightsEnabled && !AU) {
        XU.lightSources.length > QU && QU < FU && function(UU, XU, zU, yU) {
          let QU = dU.get(UU);
          QU || (QU = new Set, dU.set(UU, QU)), QU.has(yU) || (QU.add(yU), cU.b.Warn(`maxSimultaneousLights is ${XU} but this engine supports at most ${zU} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${yU} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${yU+WU} uniform buffers, over the device limit of ${UU.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${zU}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${zU} or less to silence this warning.`))
        }(UU.qp(), FU, QU, Math.min(XU.lightSources.length, FU));
        for (const cU of XU.lightSources)
          if (uU(UU, XU, cU, oU, zU, yU, DU), oU++, oU === QU) break
      }
      zU.SPECULARTERM = DU.specularEnabled, zU.SHADOWS = DU.shadowEnabled;
      const EU = Math.max(QU, zU.MAXLIGHTCOUNT || 0);
      for (let cU = oU; cU < EU; cU++) void 0 !== zU["LIGHT" + cU] && (zU["LIGHT" + cU] = !1, zU["HEMILIGHT" + cU] = !1, zU["POINTLIGHT" + cU] = !1, zU["DIRLIGHT" + cU] = !1, zU["SPOTLIGHT" + cU] = !1, zU["AREALIGHT" + cU] = !1, zU["CLUSTLIGHT" + cU] = !1, zU["SHADOW" + cU] = !1, zU["SHADOWCSM" + cU] = !1, zU["SHADOWCSMDEBUG" + cU] = !1, zU["SHADOWCSMNUM_CASCADES" + cU] = !1, zU["SHADOWCSMUSESHADOWMAXZ" + cU] = !1, zU["SHADOWCSMNOBLEND" + cU] = !1, zU["SHADOWCSM_RIGHTHANDED" + cU] = !1, zU["SHADOWPCF" + cU] = !1, zU["SHADOWPCSS" + cU] = !1, zU["SHADOWPOISSON" + cU] = !1, zU["SHADOWESM" + cU] = !1, zU["SHADOWCLOSEESM" + cU] = !1, zU["SHADOWCUBE" + cU] = !1, zU["SHADOWLOWQUALITY" + cU] = !1, zU["SHADOWMEDIUMQUALITY" + cU] = !1);
      zU.LIGHTCOUNT = oU, zU.MAXLIGHTCOUNT = QU;
      const YU = UU.qp().getCaps();
      return void 0 === zU.SHADOWFLOAT && (DU.needRebuild = !0), zU.SHADOWFLOAT = DU.shadowEnabled && (YU.textureFloatRender && YU.textureFloatLinearFiltering || YU.textureHalfFloatRender && YU.textureHalfFloatLinearFiltering), zU.LIGHTMAPEXCLUDED = DU.lightmapMode, DU.needRebuild && zU.rebuild(), DU.needNormals
    }

    function rU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (XU && FU.b.ReflectionTextureEnabled) {
        if (!XU.isReadyOrNotBlocking()) return !1;
        zU._needNormals = !0, zU.REFLECTION = !0, zU.GAMMAREFLECTION = XU.gammaSpace, zU.RGBDREFLECTION = XU.isRGBD, zU.LODINREFLECTIONALPHA = XU.lodLevelInAlpha, zU.LINEARSPECULARREFLECTION = XU.linearSpecularLOD, zU.USEIRRADIANCEMAP = !1, zU.LODBASEDMICROSFURACE = UU.qp().getCaps().textureLOD;
        const AU = UU.qp();
        switch (cU && yU > 0 ? (zU.NUM_SAMPLES = "" + yU, AU._features.needTypeSuffixInShaderConstants && (zU.NUM_SAMPLES = zU.NUM_SAMPLES + "u"), zU.REALTIME_FILTERING = !0, UU.iblCdfGenerator && (zU.IBL_CDF_FILTERING = !0)) : zU.REALTIME_FILTERING = !1, zU.INVERTCUBICMAP = 6 === XU.coordinatesMode, zU.REFLECTIONMAP_3D = XU.isCube, zU.REFLECTIONMAP_OPPOSITEZ = zU.REFLECTIONMAP_3D && UU.useRightHandedSystem ? !XU.invertZ : XU.invertZ, zU.REFLECTIONMAP_CUBIC = !1, zU.REFLECTIONMAP_EXPLICIT = !1, zU.REFLECTIONMAP_PLANAR = !1, zU.REFLECTIONMAP_PROJECTION = !1, zU.REFLECTIONMAP_SKYBOX = !1, zU.REFLECTIONMAP_SPHERICAL = !1, zU.REFLECTIONMAP_EQUIRECTANGULAR = !1, zU.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, zU.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, XU.coordinatesMode) {
          case 0:
            zU.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            zU.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            zU.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            zU.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            zU.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            zU.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            zU.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            zU.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            zU.REFLECTIONMAP_CUBIC = !0, zU.USE_LOCAL_REFLECTIONMAP_CUBIC = !!XU.boundingBoxSize
        }
        5 !== XU.coordinatesMode && (XU.irradianceTexture ? (zU.USEIRRADIANCEMAP = !0, zU.USESPHERICALFROMREFLECTIONMAP = !1, zU.USESPHERICALINVERTEX = !1, XU.irradianceTexture._dominantDirection ? zU.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : zU.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : XU.isCube && (zU.USESPHERICALFROMREFLECTIONMAP = !0, zU.USEIRRADIANCEMAP = !1, zU.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, zU.USESPHERICALINVERTEX = QU))
      } else zU.REFLECTION = !1, zU.REFLECTIONMAP_3D = !1, zU.REFLECTIONMAP_SPHERICAL = !1, zU.REFLECTIONMAP_PLANAR = !1, zU.REFLECTIONMAP_CUBIC = !1, zU.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, zU.REFLECTIONMAP_PROJECTION = !1, zU.REFLECTIONMAP_SKYBOX = !1, zU.REFLECTIONMAP_EXPLICIT = !1, zU.REFLECTIONMAP_EQUIRECTANGULAR = !1, zU.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, zU.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, zU.INVERTCUBICMAP = !1, zU.USESPHERICALFROMREFLECTIONMAP = !1, zU.USEIRRADIANCEMAP = !1, zU.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, zU.USESPHERICALINVERTEX = !1, zU.REFLECTIONMAP_OPPOSITEZ = !1, zU.LODINREFLECTIONALPHA = !1, zU.GAMMAREFLECTION = !1, zU.RGBDREFLECTION = !1, zU.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function uU(UU, XU, zU, cU, yU, AU, FU) {
      switch (FU.needNormals = !0, void 0 === yU["LIGHT" + cU] && (FU.needRebuild = !0), yU["LIGHT" + cU] = !0, yU["SPOTLIGHT" + cU] = !1, yU["HEMILIGHT" + cU] = !1, yU["POINTLIGHT" + cU] = !1, yU["DIRLIGHT" + cU] = !1, yU["AREALIGHT" + cU] = !1, yU["CLUSTLIGHT" + cU] = !1, zU.prepareLightSpecificDefines(yU, cU), yU["LIGHT_FALLOFF_PHYSICAL" + cU] = !1, yU["LIGHT_FALLOFF_GLTF" + cU] = !1, yU["LIGHT_FALLOFF_STANDARD" + cU] = !1, zU.falloffType) {
        case QU.e.FALLOFF_GLTF:
          yU["LIGHT_FALLOFF_GLTF" + cU] = !0;
          break;
        case QU.e.FALLOFF_PHYSICAL:
          yU["LIGHT_FALLOFF_PHYSICAL" + cU] = !0;
          break;
        case QU.e.FALLOFF_STANDARD:
          yU["LIGHT_FALLOFF_STANDARD" + cU] = !0
      }
      if (AU && !zU.specular.equalsFloats(0, 0, 0) && (FU.specularEnabled = !0), yU["SHADOW" + cU] = !1, yU["SHADOWCSM" + cU] = !1, yU["SHADOWCSMDEBUG" + cU] = !1, yU["SHADOWCSMNUM_CASCADES" + cU] = !1, yU["SHADOWCSMUSESHADOWMAXZ" + cU] = !1, yU["SHADOWCSMNOBLEND" + cU] = !1, yU["SHADOWCSM_RIGHTHANDED" + cU] = !1, yU["SHADOWPCF" + cU] = !1, yU["SHADOWPCSS" + cU] = !1, yU["SHADOWPOISSON" + cU] = !1, yU["SHADOWESM" + cU] = !1, yU["SHADOWCLOSEESM" + cU] = !1, yU["SHADOWCUBE" + cU] = !1, yU["SHADOWLOWQUALITY" + cU] = !1, yU["SHADOWMEDIUMQUALITY" + cU] = !1, XU && XU.receiveShadows && UU.shadowsEnabled && zU.shadowEnabled) {
        const XU = zU.getShadowGenerator(UU.activeCamera) ?? zU.getShadowGenerator();
        if (XU) {
          const UU = XU.getShadowMap();
          UU && UU.renderList && UU.renderList.length > 0 && (FU.shadowEnabled = !0, XU.prepareDefines(yU, cU))
        }
      }
      zU.lightmapMode != QU.e.LIGHTMAP_DEFAULT ? (FU.lightmapMode = !0, yU["LIGHTMAPEXCLUDED" + cU] = !0, yU["LIGHTMAPNOSPECULAR" + cU] = zU.lightmapMode == QU.e.LIGHTMAP_SHADOWSONLY) : (yU["LIGHTMAPEXCLUDED" + cU] = !1, yU["LIGHTMAPNOSPECULAR" + cU] = !1)
    }

    function fU(UU, XU, zU, cU, yU) {
      let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oU = function(UU, XU) {
          let zU = !1;
          if (UU.activeCamera) {
            const cU = XU.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              yU = XU.CAMERA_PERSPECTIVE ? 1 : 0,
              QU = 1 === UU.activeCamera.mode ? 1 : 0,
              AU = 0 === UU.activeCamera.mode ? 1 : 0;
            (cU ^ QU || yU ^ AU) && (XU.CAMERA_ORTHOGRAPHIC = 1 === QU, XU.CAMERA_PERSPECTIVE = 1 === AU, zU = !0)
          }
          return zU
        }(UU, cU);
      !1 !== QU && (oU = (0, AU.i)(zU, UU, cU)), cU.DEPTHPREPASS !== !XU.getColorWrite() && (cU.DEPTHPREPASS = !cU.DEPTHPREPASS, oU = !0), cU.INSTANCES !== yU && (cU.INSTANCES = yU, oU = !0), cU.THIN_INSTANCES !== FU && (cU.THIN_INSTANCES = FU, oU = !0), oU && cU.markAsUnprocessed()
    }
    const iU = 40,
      HU = 64,
      MU = new WeakMap,
      vU = new WeakSet;

    function VU(UU, XU, zU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        FU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!XU._areAttributesDirty && XU._needNormals === XU._normals && XU._needUVs === XU._uvs) return !1;
      XU._normals = XU._needNormals, XU._uvs = XU._needUVs, XU.NORMAL = XU._needNormals && UU.isVerticesDataPresent("normal"), XU._needNormals && UU.isVerticesDataPresent("tangent") && (XU.TANGENT = !0);
      for (let cU = 1; cU <= 6; ++cU) XU["UV" + cU] = !!XU._needUVs && UU.isVerticesDataPresent(`uv${1===cU?"":cU}`);
      if (zU) {
        const zU = UU.useVertexColors && UU.isVerticesDataPresent("color");
        XU.VERTEXCOLOR = zU, XU.VERTEXALPHA = UU.hasVertexAlpha && zU && AU
      }
      return UU.isVerticesDataPresent("instanceColor") && (UU.jyU || UU.hasThinInstances) && (XU.INSTANCESCOLOR = !0), yU && function(UU, XU) {
        if (UU.useBones && UU.computeBonesUsingShaders && UU.skeleton) {
          XU.NUM_BONE_INFLUENCERS = UU.numBoneInfluencers;
          const zU = void 0 !== XU.BONETEXTURE;
          if (UU.skeleton.isUsingTextureForMatrices && zU) XU.BONETEXTURE = !0;
          else {
            XU.BonesPerMesh = UU.skeleton.bones.length + 1, XU.BONETEXTURE = !zU && void 0;
            const yU = UU.nS(),
              QU = yU.prePassRenderer;
            if (QU && QU.enabled) {
              const zU = -1 === QU.excludedSkinnedMesh.indexOf(UU);
              XU.BONES_VELOCITY_ENABLED = zU
            }
            const AU = !0 === XU.MULTIVIEW,
              FU = 2 * XU.BonesPerMesh + (AU ? 1 : 0);
            if (MU.get(UU.skeleton) !== FU) {
              MU.set(UU.skeleton, FU);
              const zU = yU.qp().getCaps().maxVertexUniformVectors;
              if (zU && !vU.has(UU.skeleton)) {
                const yU = 4 * XU.BonesPerMesh,
                  QU = AU ? HU : iU,
                  FU = Math.max(zU - QU, 0);
                (yU > FU || AU && 3 * yU > zU) && (vU.add(UU.skeleton), cU.b.Warn(`Skeleton "${UU.skeleton.name}": ${UU.skeleton.bones.length} bones stored as vertex uniforms use ${yU} of ~${FU} usable uniform vectors${AU?" (multiview)":""} on a device reporting ${zU}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else XU.NUM_BONE_INFLUENCERS = 0, XU.BonesPerMesh = 0, void 0 !== XU.BONETEXTURE && (XU.BONETEXTURE = !1)
      }(UU, XU), QU && function(UU, XU) {
        const zU = UU.morphTargetManager;
        zU ? (XU.MORPHTARGETS_UV = zU.supportsUVs && XU.UV1, XU.MORPHTARGETS_UV2 = zU.supportsUV2s && XU.UV2, XU.MORPHTARGETS_TANGENT = zU.supportsTangents && XU.TANGENT, XU.MORPHTARGETS_NORMAL = zU.supportsNormals && XU.NORMAL, XU.MORPHTARGETS_POSITION = zU.supportsPositions, XU.MORPHTARGETS_COLOR = zU.supportsColors, XU.MORPHTARGETTEXTURE_HASUVS = zU.hasUVs, XU.MORPHTARGETTEXTURE_HASUV2S = zU.hasUV2s, XU.MORPHTARGETTEXTURE_HASTANGENTS = zU.hasTangents, XU.MORPHTARGETTEXTURE_HASNORMALS = zU.hasNormals, XU.MORPHTARGETTEXTURE_HASPOSITIONS = zU.hasPositions, XU.MORPHTARGETTEXTURE_HASCOLORS = zU.hasColors, XU.NUM_MORPH_INFLUENCERS = zU.numMaxInfluencers || zU.numInfluencers, XU.MORPHTARGETS = XU.NUM_MORPH_INFLUENCERS > 0, XU.MORPHTARGETS_TEXTURE = zU.isUsingTextureForTargets) : (XU.MORPHTARGETS_UV = !1, XU.MORPHTARGETS_UV2 = !1, XU.MORPHTARGETS_TANGENT = !1, XU.MORPHTARGETS_NORMAL = !1, XU.MORPHTARGETS_POSITION = !1, XU.MORPHTARGETS_COLOR = !1, XU.MORPHTARGETTEXTURE_HASUVS = !1, XU.MORPHTARGETTEXTURE_HASUV2S = !1, XU.MORPHTARGETTEXTURE_HASTANGENTS = !1, XU.MORPHTARGETTEXTURE_HASNORMALS = !1, XU.MORPHTARGETTEXTURE_HASPOSITIONS = !1, XU.MORPHTARGETTEXTURE_HAS_COLORS = !1, XU.MORPHTARGETS = !1, XU.NUM_MORPH_INFLUENCERS = 0)
      }(UU, XU), FU && function(UU, XU) {
        const zU = UU.bakedVertexAnimationManager;
        XU.BAKED_VERTEX_ANIMATION_TEXTURE = !(!zU || !zU.isEnabled)
      }(UU, XU), !0
    }

    function sU(UU, XU) {
      if (UU.activeCamera) {
        const zU = XU.MULTIVIEW;
        XU.MULTIVIEW = null !== UU.activeCamera.outputRenderTarget && UU.activeCamera.outputRenderTarget.getViewCount() > 1, XU.MULTIVIEW != zU && XU.markAsUnprocessed()
      }
    }

    function nU(UU, XU, zU) {
      const cU = XU.ORDER_INDEPENDENT_TRANSPARENCY,
        yU = XU.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      XU.ORDER_INDEPENDENT_TRANSPARENCY = UU.useOrderIndependentTransparency && zU, XU.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !UU.qp().getCaps().textureFloatLinearFiltering, cU === XU.ORDER_INDEPENDENT_TRANSPARENCY && yU === XU.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || XU.markAsUnprocessed()
    }

    function mU(UU, XU, zU) {
      const cU = XU.PREPASS;
      if (!XU._arePrePassDirty) return;
      const yU = [{
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
      if (UU.prePassRenderer && UU.prePassRenderer.enabled && zU) {
        XU.PREPASS = !0, XU.SCENE_MRT_COUNT = UU.prePassRenderer.mrtCount, XU.PREPASS_NORMAL_WORLDSPACE = UU.prePassRenderer.generateNormalsInWorldSpace, XU.PREPASS_COLOR = !0, XU.PREPASS_COLOR_INDEX = 0;
        for (let zU = 0; zU < yU.length; zU++) {
          const cU = UU.prePassRenderer.getIndex(yU[zU].type); - 1 !== cU ? (XU[yU[zU].define] = !0, XU[yU[zU].index] = cU) : XU[yU[zU].define] = !1
        }
      } else {
        XU.PREPASS = !1;
        for (let UU = 0; UU < yU.length; UU++) XU[yU[UU].define] = !1
      }
      XU.PREPASS != cU && (XU.markAsUnprocessed(), XU.markAsImageProcessingDirty())
    }

    function lU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        DU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      yU && yU.push("Light" + UU), QU || (XU.push("vLightData" + UU, "vLightDiffuse" + UU, "vLightSpecular" + UU, "vLightDirection" + UU, "vLightWidth" + UU, "vLightHeight" + UU, "vLightFalloff" + UU, "vLightGround" + UU, "vSliceData" + UU, "vSliceRanges" + UU, "lightMatrix" + UU, "shadowsInfo" + UU, "depthValues" + UU), zU.push("shadowTexture" + UU), zU.push("depthTexture" + UU), XU.push("viewFrustumZ" + UU, "cascadeBlendFactor" + UU, "lightSizeUVCorrection" + UU, "depthCorrection" + UU, "penumbraDarkness" + UU, "frustumLengths" + UU), cU && (zU.push("projectionLightTexture" + UU), XU.push("textureProjectionMatrix" + UU)), AU && zU.push("iesLightTexture" + UU), oU && zU.push("rectAreaLightEmissionTexture" + UU), FU && (zU.push("lightDataTexture" + UU), DU || zU.push("tileMaskTexture" + UU)))
    }

    function xU(UU, XU, zU) {
      const cU = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      zU && cU.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), UU.push(...cU);
      XU.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function JU(UU, XU, zU) {
      let cU, yU, QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        AU = null;
      if (UU.uniformsNames) {
        const FU = UU;
        cU = FU.uniformsNames, yU = FU.uniformBuffersNames, XU = FU.samplers, zU = FU.defines, QU = FU.maxSimultaneousLights || 0, AU = FU.shaderLanguage ?? null
      } else cU = UU, XU || (XU = []);
      for (let FU = 0; FU < QU && zU["LIGHT" + FU]; FU++) lU(FU, cU, XU, zU["PROJECTEDLIGHTTEXTURE" + FU], yU, !1, zU["IESLIGHTTEXTURE" + FU], zU["CLUSTLIGHT" + FU], zU["RECTAREALIGHTEMISSIONTEXTURE" + FU], 1 === AU);
      zU.NUM_MORPH_INFLUENCERS && (cU.push("morphTargetInfluences"), cU.push("morphTargetCount")), zU.BAKED_VERTEX_ANIMATION_TEXTURE && (cU.push("bakedVertexAnimationSettings"), cU.push("bakedVertexAnimationTextureSizeInverted"), cU.push("bakedVertexAnimationTime"), XU.push("bakedVertexAnimationTexture"))
    }

    function jU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      UU.addUniform("vReflectionInfos", 2), UU.addUniform("reflectionMatrix", 16), XU && UU.addUniform("vReflectionMicrosurfaceInfos", 3), zU && (UU.addUniform("vReflectionPosition", 3), UU.addUniform("vReflectionSize", 3)), cU && (UU.addUniform("vReflectionFilteringInfo", 2), UU.addUniform("vReflectionDominantDirection", 3)), QU && UU.addUniform("vReflectionColor", 3), yU && (UU.addUniform("vSphericalL00", 3), UU.addUniform("vSphericalL1_1", 3), UU.addUniform("vSphericalL10", 3), UU.addUniform("vSphericalL11", 3), UU.addUniform("vSphericalL2_2", 3), UU.addUniform("vSphericalL2_1", 3), UU.addUniform("vSphericalL20", 3), UU.addUniform("vSphericalL21", 3), UU.addUniform("vSphericalL22", 3), UU.addUniform("vSphericalX", 3), UU.addUniform("vSphericalY", 3), UU.addUniform("vSphericalZ", 3), UU.addUniform("vSphericalXX_ZZ", 3), UU.addUniform("vSphericalYY_ZZ", 3), UU.addUniform("vSphericalZZ", 3), UU.addUniform("vSphericalXY", 3), UU.addUniform("vSphericalYZ", 3), UU.addUniform("vSphericalZX", 3))
    }
  },
  41415: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(37819),
      yU = zU(41374);
    class QU extends yU.c {
      constructor(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(UU, XU, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new cU.e, this._storeEffectOnSubMeshes = zU
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(UU, XU) {
        return !!UU && (!this._storeEffectOnSubMeshes || (!UU.uB || 0 === UU.uB.length || this.isReadyForSubMesh(UU, UU.uB[0], XU)))
      }
      _isReadyForSubMesh(UU) {
        const XU = UU.materialDefines;
        return !(this.checkReadyOnEveryCall || !UU.effect || !XU || XU._renderId !== this.nS().getRenderId())
      }
      bindOnlyWorldMatrix(UU) {
        this._activeEffect.setMatrix("world", UU)
      }
      bindOnlyNormalMatrix(UU) {
        this._activeEffect.setMatrix("normalMatrix", UU)
      }
      bind(UU, XU) {
        XU && this.bindForSubMesh(UU, XU, XU.uB[0])
      }
      _afterBind(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(UU, XU, zU), this.nS()._cachedEffect = XU, zU ? zU._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return zU._drawWrapper._forceRebindOnNextCall || UU.isCachedMaterialInvalid(this, XU, cU)
      }
      dispose(UU, XU, zU) {
        this._activeEffect = void 0, super.dispose(UU, XU, zU)
      }
    }
  },
  41438: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      f: () => yU
    });
    const cU = new WeakMap;

    function yU(UU) {
      const XU = UU.getVertexBuffers();
      if (!XU) return null;
      let zU = cU.get(UU);
      if (zU) {
        let UU = !1;
        for (const cU in XU)
          if (!zU.has(cU)) {
            UU = !0;
            break
          } if (!UU) return zU
      } else zU = new Map, cU.set(UU, zU);
      for (const cU in XU) {
        const UU = XU[cU];
        if (UU) {
          const XU = UU.byteOffset,
            yU = UU.byteStride,
            QU = UU.type,
            AU = UU.normalized;
          zU.set(cU, {
            offset: XU,
            stride: yU,
            type: QU,
            normalized: AU
          })
        }
      }
      return zU
    }

    function QU(UU, XU) {
      XU.forEach(((XU, zU) => {
        const cU = `vp_${zU}_info`;
        UU.setFloat4(cU, XU.offset, XU.stride, XU.type, XU.normalized ? 1 : 0)
      }))
    }
  },
  41393: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      e: () => oU
    });
    var cU = zU(41113),
      yU = zU(37819),
      QU = zU(41121);
    let AU = (() => {
      var UU;
      let XU, zU, yU = [];
      return UU = class {
        static extractMinAndMaxIndexed(UU, XU, zU, cU, yU, QU) {
          for (let AU = zU; AU < zU + cU; AU++) {
            const zU = 3 * XU[AU],
              cU = UU[zU],
              FU = UU[zU + 1],
              oU = UU[zU + 2];
            yU.minimizeInPlaceFromFloats(cU, FU, oU), QU.maximizeInPlaceFromFloats(cU, FU, oU)
          }
        }
        static extractMinAndMax(UU, XU, zU, cU, yU, QU) {
          for (let AU = XU, FU = XU * cU; AU < XU + zU; AU++, FU += cU) {
            const XU = UU[FU],
              zU = UU[FU + 1],
              cU = UU[FU + 2];
            yU.minimizeInPlaceFromFloats(XU, zU, cU), QU.maximizeInPlaceFromFloats(XU, zU, cU)
          }
        }
      }, (() => {
        const AU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [QU.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], zU = [QU.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, cU.j)(UU, null, XU, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: UU => "extractMinAndMaxIndexed" in UU,
            get: UU => UU.extractMinAndMaxIndexed
          },
          metadata: AU
        }, null, yU), (0, cU.j)(UU, null, zU, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: UU => "extractMinAndMax" in UU,
            get: UU => UU.extractMinAndMax
          },
          metadata: AU
        }, null, yU), AU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AU
        }), (0, cU.n)(UU, yU)
      })(), UU
    })();

    function FU(UU, XU, zU, cU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const FU = new yU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        oU = new yU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return AU.extractMinAndMaxIndexed(UU, XU, zU, cU, FU, oU), QU && (FU.x -= FU.x * QU.x + QU.y, FU.y -= FU.y * QU.x + QU.y, FU.z -= FU.z * QU.x + QU.y, oU.x += oU.x * QU.x + QU.y, oU.y += oU.y * QU.x + QU.y, oU.z += oU.z * QU.x + QU.y), {
        minimum: FU,
        maximum: oU
      }
    }

    function oU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        QU = arguments.length > 4 ? arguments[4] : void 0;
      const FU = new yU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        oU = new yU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return QU || (QU = 3), AU.extractMinAndMax(UU, XU, zU, QU, FU, oU), cU && (FU.x -= FU.x * cU.x + cU.y, FU.y -= FU.y * cU.x + cU.y, FU.z -= FU.z * cU.x + cU.y, oU.x += oU.x * cU.x + cU.y, oU.y += oU.y * cU.x + cU.y, oU.z += oU.z * cU.x + cU.y), {
        minimum: FU,
        maximum: oU
      }
    }
  },
  41378: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU
    });
    var cU, yU = zU(41237),
      QU = zU(41383),
      AU = zU(41387),
      FU = zU(41393),
      oU = zU(41395),
      DU = zU(40989);
    class EU {
      get materialDefines() {
        const UU = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof UU ? null : UU
      }
      set materialDefines(UU) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = UU
      }
      _getDrawWrapper(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UU = UU ?? this._engine.currentRenderPassId;
        let zU = this._drawWrappers[UU];
        return !zU && XU && (this._drawWrappers[UU] = zU = new oU.c(this._mesh.nS().qp())), zU
      }
      _removeDrawWrapper(UU) {
        let XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[UU]?.dispose(XU), this._drawWrappers[UU] = void 0
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
      _setMainDrawWrapperOverride(UU) {
        this._mainDrawWrapperOverride = UU
      }
      setEffect(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yU = this._drawWrapper;
        yU.setEffect(UU, XU, cU), void 0 !== zU && (yU.materialContext = zU), UU || (yU.defines = null, yU.materialContext = void 0)
      }
      resetDrawCache(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== UU) return void this._removeDrawWrapper(UU, !0, XU);
          for (const UU of this._drawWrappers) UU?.dispose(XU)
        }
        this._drawWrappers = []
      }
      static AddToMesh(UU, XU, zU, cU, yU, QU, AU) {
        return new EU(UU, XU, zU, cU, yU, QU, AU, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(UU, XU, zU, cU, yU, QU, AU) {
        let FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = UU, this.verticesStart = XU, this.verticesCount = zU, this.indexStart = cU, this.indexCount = yU, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = QU, this._renderingMesh = AU || QU, oU && QU.uB.push(this), this._engine = this._mesh.nS().qp(), this.resetDrawCache(), this._trianglePlanes = [], this._id = QU.uB.length - 1, FU && (this.refreshBoundingInfo(), QU.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      gM() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.gM() : this._boundingInfo
      }
      setBoundingInfo(UU) {
        return this._boundingInfo = UU, this
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
        const UU = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return UU || this._renderingMesh
      }
      Hp() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const XU = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!XU) return UU && this._mesh.nS()._hasDefaultMaterial ? this._mesh.nS().defaultMaterial : null;
        if (this._isMultiMaterial(XU)) {
          const UU = XU.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== UU && (this._currentMaterial = UU, this.resetDrawCache()), UU
        }
        return XU
      }
      _isMultiMaterial(UU) {
        return void 0 !== UU.getSubMaterial
      }
      refreshBoundingInfo() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (UU || (UU = this._renderingMesh.getVerticesData(yU.h.PositionKind)), !UU) return this._boundingInfo = this._mesh.gM(), this;
        const XU = this._renderingMesh.yyU();
        let zU;
        if (0 === this.indexStart && this.indexCount === XU.length) {
          const UU = this._renderingMesh.gM();
          zU = {
            minimum: UU.minimum.clone(),
            maximum: UU.maximum.clone()
          }
        } else zU = (0, FU.d)(UU, XU, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(zU.minimum, zU.maximum) : this._boundingInfo = new AU.b(zU.minimum, zU.maximum), this
      }
      _checkCollision(UU) {
        return this.gM()._checkCollision(UU)
      }
      updateBoundingInfo(UU) {
        let XU = this.gM();
        return XU || (this.refreshBoundingInfo(), XU = this.gM()), XU && XU.update(UU), this
      }
      isInFrustum(UU) {
        const XU = this.gM();
        return !!XU && XU.isInFrustum(UU, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(UU) {
        const XU = this.gM();
        return !!XU && XU.isCompletelyInFrustum(UU)
      }
      render(UU) {
        return this._renderingMesh.render(this, UU, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(UU, XU) {
        if (!this._linesIndexBuffer) {
          const zU = 6 * Math.floor(this.indexCount / 3),
            cU = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(zU) : new Uint16Array(zU);
          let yU = 0;
          if (0 === UU.length)
            for (let UU = this.indexStart; UU < this.indexStart + this.indexCount; UU += 3) cU[yU++] = UU, cU[yU++] = UU + 1, cU[yU++] = UU + 1, cU[yU++] = UU + 2, cU[yU++] = UU + 2, cU[yU++] = UU;
          else
            for (let XU = this.indexStart; XU < this.indexStart + this.indexCount; XU += 3) cU[yU++] = UU[XU], cU[yU++] = UU[XU + 1], cU[yU++] = UU[XU + 1], cU[yU++] = UU[XU + 2], cU[yU++] = UU[XU + 2], cU[yU++] = UU[XU];
          this._linesIndexBuffer = XU.createIndexBuffer(cU), this._linesIndexCount = cU.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(UU) {
        const XU = this.gM();
        return !!XU && UU.intersectsBox(XU.boundingBox)
      }
      intersects(UU, XU, zU, cU, yU) {
        const QU = this.Hp();
        if (!QU) return null;
        let AU = 3,
          FU = !1;
        switch (QU.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            AU = 1, FU = !0
        }
        return 4 === QU.fillMode ? zU.length ? this._intersectLines(UU, XU, zU, this._mesh.intersectionThreshold, cU) : this._intersectUnIndexedLines(UU, XU, zU, this._mesh.intersectionThreshold, cU) : !zU.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(UU, XU, zU, cU, yU) : this._intersectTriangles(UU, XU, zU, AU, FU, cU, yU)
      }
      _intersectLines(UU, XU, zU, cU, yU) {
        let AU = null;
        for (let FU = this.indexStart; FU < this.indexStart + this.indexCount; FU += 2) {
          const oU = XU[zU[FU]],
            DU = XU[zU[FU + 1]],
            EU = UU.intersectionSegment(oU, DU, cU);
          if (!(EU < 0) && ((yU || !AU || EU < AU.distance) && (AU = new QU.e(null, null, EU), AU.faceId = FU / 2, yU))) break
        }
        return AU
      }
      _intersectUnIndexedLines(UU, XU, zU, cU, yU) {
        let AU = null;
        for (let FU = this.verticesStart; FU < this.verticesStart + this.verticesCount; FU += 2) {
          const zU = XU[FU],
            oU = XU[FU + 1],
            DU = UU.intersectionSegment(zU, oU, cU);
          if (!(DU < 0) && ((yU || !AU || DU < AU.distance) && (AU = new QU.e(null, null, DU), AU.faceId = FU / 2, yU))) break
        }
        return AU
      }
      _intersectTriangles(UU, XU, zU, cU, yU, QU, AU) {
        let FU = null,
          oU = -1;
        for (let DU = this.indexStart; DU < this.indexStart + this.indexCount - (3 - cU); DU += cU) {
          oU++;
          const cU = zU[DU],
            EU = zU[DU + 1],
            YU = zU[DU + 2];
          if (yU && 4294967295 === YU) {
            DU += 2;
            continue
          }
          const NU = XU[cU],
            IU = XU[EU],
            pU = XU[YU];
          if (!NU || !IU || !pU) continue;
          if (AU && !AU(NU, IU, pU, UU, cU, EU, YU)) continue;
          const aU = UU.intersectsTriangle(NU, IU, pU);
          if (aU) {
            if (aU.distance < 0) continue;
            if ((QU || !FU || aU.distance < FU.distance) && (FU = aU, FU.faceId = oU, QU)) break
          }
        }
        return FU
      }
      _intersectUnIndexedTriangles(UU, XU, zU, cU, yU) {
        let QU = null;
        for (let AU = this.verticesStart; AU < this.verticesStart + this.verticesCount; AU += 3) {
          const zU = XU[AU],
            FU = XU[AU + 1],
            oU = XU[AU + 2];
          if (yU && !yU(zU, FU, oU, UU, -1, -1, -1)) continue;
          const DU = UU.intersectsTriangle(zU, FU, oU);
          if (DU) {
            if (DU.distance < 0) continue;
            if ((cU || !QU || DU.distance < QU.distance) && (QU = DU, QU.faceId = AU / 3, cU)) break
          }
        }
        return QU
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(UU, XU) {
        const zU = new EU(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, UU, XU, !1);
        if (!this.IsGlobal) {
          const UU = this.gM();
          if (!UU) return zU;
          zU._boundingInfo = new AU.b(UU.minimum, UU.maximum)
        }
        return zU
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.nS().qp()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const XU = this._mesh.uB.indexOf(this);
        this._mesh.uB.splice(XU, 1), this.resetDrawCache(void 0, UU)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(UU, XU, zU, cU, yU) {
        let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = Number.MAX_VALUE,
          FU = -Number.MAX_VALUE;
        const oU = (yU || cU).yyU();
        for (let DU = XU; DU < XU + zU; DU++) {
          const UU = oU[DU];
          UU < AU && (AU = UU), UU > FU && (FU = UU)
        }
        return new EU(UU, AU, FU - AU + 1, XU, zU, cU, yU, QU)
      }
    }(cU = EU.prototype).projectToRef ?? (cU.projectToRef = (0, DU.k)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);