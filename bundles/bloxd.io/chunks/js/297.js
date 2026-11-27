export const id = 297;
export const ids = [297];
export const modules = {
  41815: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    class yR {
      constructor(RR, JR, GR) {
        this.bu = RR, this.bv = JR, this.distance = GR, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41829: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(38217),
      tR = GR(38204),
      uR = GR(38213);
    class ZR {
      constructor(RR, JR, GR) {
        this.vectors = (0, yR.c)(8, tR.r.Zero), this.center = tR.r.Zero(), this.centerWorld = tR.r.Zero(), this.extendSize = tR.r.Zero(), this.extendSizeWorld = tR.r.Zero(), this.directions = (0, yR.c)(3, tR.r.Zero), this.vectorsWorld = (0, yR.c)(8, tR.r.Zero), this.minimumWorld = tR.r.Zero(), this.maximumWorld = tR.r.Zero(), this.minimum = tR.r.Zero(), this.maximum = tR.r.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(RR, JR, GR)
      }
      reConstruct(RR, JR, GR) {
        const yR = RR.x,
          uR = RR.y,
          ZR = RR.z,
          qR = JR.x,
          iR = JR.y,
          fR = JR.z,
          VR = this.vectors;
        this.minimum.VJR(yR, uR, ZR), this.maximum.VJR(qR, iR, fR), VR[0].VJR(yR, uR, ZR), VR[1].VJR(qR, iR, fR), VR[2].VJR(qR, uR, ZR), VR[3].VJR(yR, iR, ZR), VR[4].VJR(yR, uR, fR), VR[5].VJR(qR, iR, ZR), VR[6].VJR(yR, iR, fR), VR[7].VJR(qR, uR, fR), JR.addToRef(RR, this.center).scaleInPlace(.5), JR.subtractToRef(RR, this.extendSize).scaleInPlace(.5), this._worldMatrix = GR || tR.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(RR) {
        const JR = ZR._TmpVector3,
          GR = this.maximum.subtractToRef(this.minimum, JR[0]),
          yR = GR.length();
        GR.normalizeFromLength(yR);
        const tR = yR * RR,
          uR = GR.scaleInPlace(.5 * tR),
          qR = this.center.subtractToRef(uR, JR[1]),
          iR = this.center.addToRef(uR, JR[2]);
        return this.reConstruct(qR, iR, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(RR) {
        const JR = this.minimumWorld,
          GR = this.maximumWorld,
          yR = this.directions,
          uR = this.vectorsWorld,
          ZR = this.vectors;
        if (RR.isIdentity()) {
          JR.vN(this.minimum), GR.vN(this.maximum);
          for (let RR = 0; RR < 8; ++RR) uR[RR].vN(ZR[RR]);
          this.extendSizeWorld.vN(this.extendSize), this.centerWorld.vN(this.center)
        } else {
          JR.NRR(Number.MAX_VALUE), GR.NRR(-Number.MAX_VALUE);
          for (let yR = 0; yR < 8; ++yR) {
            const qR = uR[yR];
            tR.r.TransformCoordinatesToRef(ZR[yR], RR, qR), JR.minimizeInPlace(qR), GR.maximizeInPlace(qR)
          }
          GR.subtractToRef(JR, this.extendSizeWorld).scaleInPlace(.5), GR.addToRef(JR, this.centerWorld).scaleInPlace(.5)
        }
        tR.r.FromArrayToRef(RR.m, 0, yR[0]), tR.r.FromArrayToRef(RR.m, 4, yR[1]), tR.r.FromArrayToRef(RR.m, 8, yR[2]), this._worldMatrix = RR
      }
      isInFrustum(RR) {
        return ZR.IsInFrustum(this.vectorsWorld, RR)
      }
      isCompletelyInFrustum(RR) {
        return ZR.IsCompletelyInFrustum(this.vectorsWorld, RR)
      }
      intersectsPoint(RR) {
        const JR = this.minimumWorld,
          GR = this.maximumWorld,
          yR = JR.x,
          tR = JR.y,
          ZR = JR.z,
          qR = GR.x,
          iR = GR.y,
          fR = GR.z,
          VR = RR.x,
          KR = RR.y,
          wR = RR.z,
          rR = -uR.c;
        return !(qR - VR < rR || rR > VR - yR) && (!(iR - KR < rR || rR > KR - tR) && !(fR - wR < rR || rR > wR - ZR))
      }
      intersectsSphere(RR) {
        return ZR.IntersectsSphere(this.minimumWorld, this.maximumWorld, RR.centerWorld, RR.radiusWorld)
      }
      intersectsMinMax(RR, JR) {
        const GR = this.minimumWorld,
          yR = this.maximumWorld,
          tR = GR.x,
          uR = GR.y,
          ZR = GR.z,
          qR = yR.x,
          iR = yR.y,
          fR = yR.z,
          VR = RR.x,
          KR = RR.y,
          wR = RR.z,
          rR = JR.x,
          eR = JR.y,
          aR = JR.z;
        return !(qR < VR || tR > rR) && (!(iR < KR || uR > eR) && !(fR < wR || ZR > aR))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(RR, JR) {
        return RR.intersectsMinMax(JR.minimumWorld, JR.maximumWorld)
      }
      static IntersectsSphere(RR, JR, GR, yR) {
        const uR = ZR._TmpVector3[0];
        tR.r.ClampToRef(GR, RR, JR, uR);
        return tR.r.DistanceSquared(GR, uR) <= yR * yR
      }
      static IsCompletelyInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; ++GR) {
          const yR = JR[GR];
          for (let JR = 0; JR < 8; ++JR)
            if (yR.dotCoordinate(RR[JR]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; ++GR) {
          let yR = !0;
          const tR = JR[GR];
          for (let JR = 0; JR < 8; ++JR)
            if (tR.dotCoordinate(RR[JR]) >= 0) {
              yR = !1;
              break
            } if (yR) return !1
        }
        return !0
      }
    }
    ZR._TmpVector3 = (0, yR.c)(3, tR.r.Zero)
  },
  41822: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => KR
    });
    var yR = GR(38217),
      tR = GR(38204),
      uR = GR(41829);
    class ZR {
      constructor(RR, JR, GR) {
        this.center = tR.r.Zero(), this.centerWorld = tR.r.Zero(), this.minimum = tR.r.Zero(), this.maximum = tR.r.Zero(), this.reConstruct(RR, JR, GR)
      }
      reConstruct(RR, JR, GR) {
        this.minimum.vN(RR), this.maximum.vN(JR);
        const yR = tR.r.Distance(RR, JR);
        JR.addToRef(RR, this.center).scaleInPlace(.5), this.radius = .5 * yR, this._update(GR || tR.e.IdentityReadOnly)
      }
      scale(RR) {
        const JR = ZR._TmpVector3,
          GR = this.maximum.subtractToRef(this.minimum, JR[0]),
          yR = GR.length();
        GR.normalizeFromLength(yR);
        const tR = yR * RR,
          uR = GR.scaleInPlace(.5 * tR),
          qR = this.center.subtractToRef(uR, JR[1]),
          iR = this.center.addToRef(uR, JR[2]);
        return this.reConstruct(qR, iR, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(RR) {
        if (RR.isIdentity()) this.centerWorld.vN(this.center), this.radiusWorld = this.radius;
        else {
          tR.r.TransformCoordinatesToRef(this.center, RR, this.centerWorld);
          const JR = ZR._TmpVector3[0];
          tR.r.TransformNormalFromFloatsToRef(1, 1, 1, RR, JR), this.radiusWorld = Math.max(Math.abs(JR.x), Math.abs(JR.y), Math.abs(JR.z)) * this.radius
        }
      }
      isInFrustum(RR) {
        const JR = this.centerWorld,
          GR = this.radiusWorld;
        for (let yR = 0; yR < 6; yR++)
          if (RR[yR].dotCoordinate(JR) <= -GR) return !1;
        return !0
      }
      isCenterInFrustum(RR) {
        const JR = this.centerWorld;
        for (let GR = 0; GR < 6; GR++)
          if (RR[GR].dotCoordinate(JR) < 0) return !1;
        return !0
      }
      intersectsPoint(RR) {
        const JR = tR.r.DistanceSquared(this.centerWorld, RR);
        return !(this.radiusWorld * this.radiusWorld < JR)
      }
      static Intersects(RR, JR) {
        const GR = tR.r.DistanceSquared(RR.centerWorld, JR.centerWorld),
          yR = RR.radiusWorld + JR.radiusWorld;
        return !(yR * yR < GR)
      }
      static CreateFromCenterAndRadius(RR, JR, GR) {
        this._TmpVector3[0].vN(RR), this._TmpVector3[1].VJR(0, 0, JR), this._TmpVector3[2].vN(RR), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].VuR(this._TmpVector3[1]);
        const yR = new ZR(this._TmpVector3[0], this._TmpVector3[2]);
        return yR._worldMatrix = GR || tR.e.Identity(), yR
      }
    }
    ZR._TmpVector3 = (0, yR.c)(3, tR.r.Zero);
    const qR = {
        min: 0,
        max: 0
      },
      iR = {
        min: 0,
        max: 0
      },
      fR = (RR, JR, GR) => {
        const yR = tR.r.Dot(JR.centerWorld, RR),
          uR = Math.abs(tR.r.Dot(JR.directions[0], RR)) * JR.extendSize.x + Math.abs(tR.r.Dot(JR.directions[1], RR)) * JR.extendSize.y + Math.abs(tR.r.Dot(JR.directions[2], RR)) * JR.extendSize.z;
        GR.min = yR - uR, GR.max = yR + uR
      },
      VR = (RR, JR, GR) => (fR(RR, JR, qR), fR(RR, GR, iR), !(qR.min > iR.max || iR.min > qR.max));
    class KR {
      constructor(RR, JR, GR) {
        this._isLocked = !1, this.boundingBox = new uR.c(RR, JR, GR), this.euR = new ZR(RR, JR, GR)
      }
      reConstruct(RR, JR, GR) {
        this.boundingBox.reConstruct(RR, JR, GR), this.euR.reConstruct(RR, JR, GR)
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
      set isLocked(RR) {
        this._isLocked = RR
      }
      update(RR) {
        this._isLocked || (this.boundingBox._update(RR), this.euR._update(RR))
      }
      centerOn(RR, JR) {
        const GR = KR._TmpVector3[0].vN(RR).VuR(JR),
          yR = KR._TmpVector3[1].vN(RR).addInPlace(JR);
        return this.boundingBox.reConstruct(GR, yR, this.boundingBox.getWorldMatrix()), this.euR.reConstruct(GR, yR, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(RR) {
        const JR = tR.r.Minimize(this.minimum, RR),
          GR = tR.r.Maximize(this.maximum, RR);
        return this.reConstruct(JR, GR, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(RR) {
        const JR = tR.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(JR);
        const GR = tR.l.Fe[0];
        return tR.r.TransformCoordinatesToRef(RR.boundingBox.minimumWorld, JR, GR), this.encapsulate(GR), tR.r.TransformCoordinatesToRef(RR.boundingBox.maximumWorld, JR, GR), this.encapsulate(GR), this
      }
      scale(RR) {
        return this.boundingBox.scale(RR), this.euR.scale(RR), this
      }
      isInFrustum(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === JR || 3 === JR) && this.euR.isCenterInFrustum(RR)) return !0;
        if (!this.euR.isInFrustum(RR)) return !1;
        return !(1 !== JR && 3 !== JR) || this.boundingBox.isInFrustum(RR)
      }
      get diagonalLength() {
        const RR = this.boundingBox;
        return RR.maximumWorld.subtractToRef(RR.minimumWorld, KR._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(RR) {
        return this.boundingBox.isCompletelyInFrustum(RR)
      }
      _checkCollision(RR) {
        return RR._canDoCollision(this.euR.centerWorld, this.euR.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(RR) {
        return !!this.euR.centerWorld && (!!this.euR.intersectsPoint(RR) && !!this.boundingBox.intersectsPoint(RR))
      }
      intersects(RR, JR) {
        if (!ZR.Intersects(this.euR, RR.euR)) return !1;
        if (!uR.c.Intersects(this.boundingBox, RR.boundingBox)) return !1;
        if (!JR) return !0;
        const GR = this.boundingBox,
          yR = RR.boundingBox;
        return !!VR(GR.directions[0], GR, yR) && (!!VR(GR.directions[1], GR, yR) && (!!VR(GR.directions[2], GR, yR) && (!!VR(yR.directions[0], GR, yR) && (!!VR(yR.directions[1], GR, yR) && (!!VR(yR.directions[2], GR, yR) && (!!VR(tR.r.Cross(GR.directions[0], yR.directions[0]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[0], yR.directions[1]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[0], yR.directions[2]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[1], yR.directions[0]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[1], yR.directions[1]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[1], yR.directions[2]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[2], yR.directions[0]), GR, yR) && (!!VR(tR.r.Cross(GR.directions[2], yR.directions[1]), GR, yR) && !!VR(tR.r.Cross(GR.directions[2], yR.directions[2]), GR, yR))))))))))))))
      }
    }
    KR._TmpVector3 = (0, yR.c)(2, tR.r.Zero)
  },
  41855: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      c: () => iR,
      g: () => qR,
      j: () => ZR
    });
    var yR = GR(41678),
      tR = GR(38204);

    function uR(RR) {
      -1 === RR.indexOf("vClipPlane") && RR.push("vClipPlane"), -1 === RR.indexOf("vClipPlane2") && RR.push("vClipPlane2"), -1 === RR.indexOf("vClipPlane3") && RR.push("vClipPlane3"), -1 === RR.indexOf("vClipPlane4") && RR.push("vClipPlane4"), -1 === RR.indexOf("vClipPlane5") && RR.push("vClipPlane5"), -1 === RR.indexOf("vClipPlane6") && RR.push("vClipPlane6")
    }

    function ZR(RR, JR, GR) {
      const yR = !!(RR.clipPlane ?? JR.clipPlane),
        tR = !!(RR.clipPlane2 ?? JR.clipPlane2),
        uR = !!(RR.clipPlane3 ?? JR.clipPlane3),
        ZR = !!(RR.clipPlane4 ?? JR.clipPlane4),
        qR = !!(RR.clipPlane5 ?? JR.clipPlane5),
        iR = !!(RR.clipPlane6 ?? JR.clipPlane6);
      yR && GR.push("#define CLIPPLANE"), tR && GR.push("#define CLIPPLANE2"), uR && GR.push("#define CLIPPLANE3"), ZR && GR.push("#define CLIPPLANE4"), qR && GR.push("#define CLIPPLANE5"), iR && GR.push("#define CLIPPLANE6")
    }

    function qR(RR, JR, GR) {
      let yR = !1;
      const tR = !!(RR.clipPlane ?? JR.clipPlane),
        uR = !!(RR.clipPlane2 ?? JR.clipPlane2),
        ZR = !!(RR.clipPlane3 ?? JR.clipPlane3),
        qR = !!(RR.clipPlane4 ?? JR.clipPlane4),
        iR = !!(RR.clipPlane5 ?? JR.clipPlane5),
        fR = !!(RR.clipPlane6 ?? JR.clipPlane6);
      return GR.CLIPPLANE !== tR && (GR.CLIPPLANE = tR, yR = !0), GR.CLIPPLANE2 !== uR && (GR.CLIPPLANE2 = uR, yR = !0), GR.CLIPPLANE3 !== ZR && (GR.CLIPPLANE3 = ZR, yR = !0), GR.CLIPPLANE4 !== qR && (GR.CLIPPLANE4 = qR, yR = !0), GR.CLIPPLANE5 !== iR && (GR.CLIPPLANE5 = iR, yR = !0), GR.CLIPPLANE6 !== fR && (GR.CLIPPLANE6 = fR, yR = !0), yR
    }

    function iR(RR, JR, GR) {
      let yR = JR.clipPlane ?? GR.clipPlane;
      fR(RR, "vClipPlane", yR), yR = JR.clipPlane2 ?? GR.clipPlane2, fR(RR, "vClipPlane2", yR), yR = JR.clipPlane3 ?? GR.clipPlane3, fR(RR, "vClipPlane3", yR), yR = JR.clipPlane4 ?? GR.clipPlane4, fR(RR, "vClipPlane4", yR), yR = JR.clipPlane5 ?? GR.clipPlane5, fR(RR, "vClipPlane5", yR), yR = JR.clipPlane6 ?? GR.clipPlane6, fR(RR, "vClipPlane6", yR)
    }

    function fR(RR, JR, GR) {
      if (GR) {
        const uR = yR.d.jH()?.floatingOriginOffset || tR.r.ZeroReadOnly;
        RR.setFloat4(JR, GR.normal.x, GR.normal.y, GR.normal.z, GR.d + tR.r.Dot(GR.normal, uR))
      }
    }
  },
  41873: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(RR, JR) {
        this._defines[RR] || (RR < this._currentRank && (this._currentRank = RR), RR > this._maxRank && (this._maxRank = RR), this._defines[RR] = new Array), this._defines[RR].push(JR)
      }
      addCPUSkinningFallback(RR, JR) {
        this._mesh = JR, RR < this._currentRank && (this._currentRank = RR), RR > this._maxRank && (this._maxRank = RR)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(RR, JR) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, RR = RR.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), JR._bonesComputationForcedToCPU = !0;
          const GR = this._mesh.jH();
          for (let RR = 0; RR < GR.meshes.length; RR++) {
            const yR = GR.meshes[RR];
            if (yR.material) {
              if (yR.computeBonesUsingShaders && 0 !== yR.numBoneInfluencers)
                if (yR.material.getEffect() === JR) yR.computeBonesUsingShaders = !1;
                else if (yR.XM)
                for (const RR of yR.XM) {
                  if (RR.effect === JR) {
                    yR.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && yR.computeBonesUsingShaders && yR.numBoneInfluencers > 0 && (yR.computeBonesUsingShaders = !1)
          }
        } else {
          const JR = this._defines[this._currentRank];
          if (JR)
            for (let GR = 0; GR < JR.length; GR++) RR = RR.replace("#define " + JR[GR], "");
          this._currentRank++
        }
        return RR
      }
    }
  },
  41810: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => UR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41616),
      ZR = GR(38233),
      qR = GR(38224),
      iR = GR(41813),
      fR = GR(41650),
      VR = GR(39914),
      KR = GR(38933),
      wR = GR(41844),
      rR = GR(41542);
    let eR = (() => {
      var RR;
      let JR, GR, uR, ZR, qR, iR, fR, VR, KR, wR, eR, aR, LR = [];
      return RR = class {
        constructor() {
          this._func = (0, yR.m)(this, LR), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(RR) {
          this._func = RR
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(RR) {
          this._backFunc = RR
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(RR) {
          this._funcRef = RR
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(RR) {
          this._funcMask = RR
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(RR) {
          this._opStencilFail = RR
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(RR) {
          this._opDepthFail = RR
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(RR) {
          this._opStencilDepthPass = RR
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(RR) {
          this._backOpStencilFail = RR
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(RR) {
          this._backOpDepthFail = RR
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(RR) {
          this._backOpStencilDepthPass = RR
        }
        get mask() {
          return this._mask
        }
        set mask(RR) {
          this._mask = RR
        }
        get enabled() {
          return this._enabled
        }
        set enabled(RR) {
          this._enabled = RR
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(RR) {
          rR.c.Clone((() => RR), this)
        }
        serialize() {
          return rR.c.Serialize(this)
        }
        parse(RR, JR, GR) {
          rR.c.Parse((() => this), RR, JR, GR)
        }
      }, (() => {
        const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], ZR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], (0, yR.l)(RR, null, JR, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: RR => "func" in RR,
            get: RR => RR.func
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, GR, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: RR => "backFunc" in RR,
            get: RR => RR.backFunc
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, uR, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: RR => "funcRef" in RR,
            get: RR => RR.funcRef
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, ZR, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: RR => "funcMask" in RR,
            get: RR => RR.funcMask
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, qR, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: RR => "opStencilFail" in RR,
            get: RR => RR.opStencilFail
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, iR, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: RR => "opDepthFail" in RR,
            get: RR => RR.opDepthFail
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, fR, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: RR => "opStencilDepthPass" in RR,
            get: RR => RR.opStencilDepthPass
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, VR, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: RR => "backOpStencilFail" in RR,
            get: RR => RR.backOpStencilFail
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, KR, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: RR => "backOpDepthFail" in RR,
            get: RR => RR.backOpDepthFail
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, wR, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: RR => "backOpStencilDepthPass" in RR,
            get: RR => RR.backOpStencilDepthPass
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, eR, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: RR => "mask" in RR,
            get: RR => RR.mask
          },
          metadata: rR
        }, null, LR), (0, yR.l)(RR, null, aR, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "enabled" in RR,
            get: RR => RR.enabled
          },
          metadata: rR
        }, null, LR), rR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rR
        })
      })(), RR
    })();
    var aR = GR(41852),
      LR = GR(41436),
      nR = GR(41407);
    let UR = (() => {
      var RR;
      let JR, GR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, ER = [],
        YR = [],
        kR = [],
        QR = [],
        FR = [],
        TR = [],
        sR = [],
        hR = [],
        RJ = [],
        JJ = [],
        GJ = [],
        yJ = [],
        tJ = [],
        uJ = [],
        ZJ = [],
        qJ = [],
        iJ = [],
        fJ = [],
        VJ = [],
        KJ = [],
        wJ = [],
        rJ = [],
        eJ = [],
        aJ = [],
        LJ = [],
        nJ = [],
        UJ = [],
        WJ = [],
        AJ = [],
        CJ = [],
        XJ = [],
        MJ = [],
        BJ = [],
        lJ = [],
        pJ = [],
        gJ = [],
        bJ = [],
        vJ = [],
        OJ = [],
        xJ = [],
        NJ = [],
        DJ = [],
        HJ = [],
        oJ = [],
        cJ = [],
        PJ = [],
        IJ = [],
        mJ = [],
        zJ = [],
        SJ = [],
        jJ = [];
      return RR = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(JR) {
          this._useVertexPulling !== JR && (this._useVertexPulling = JR, this.hGR(RR.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(RR) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(JR) {
          if (this._alpha === JR) return;
          const GR = this._alpha;
          this._alpha = JR, 1 !== GR && 1 !== JR || this.hGR(RR.MiscDirtyFlag + RR.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(JR) {
          this._backFaceCulling !== JR && (this._backFaceCulling = JR, this.hGR(RR.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(JR) {
          const GR = Math.max(0, Math.min(0 | JR, 4));
          this._textureRepetitionMode !== GR && (this._textureRepetitionMode = GR, this.hGR(RR.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(JR) {
          this._cullBackFaces !== JR && (this._cullBackFaces = JR, this.hGR(RR.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(RR) {
          this._blockDirtyMechanism !== RR && (this._blockDirtyMechanism = RR, RR || this.markDirty())
        }
        atomicMaterialsUpdate(RR) {
          this.blockDirtyMechanism = !0;
          try {
            RR(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(RR) {
          this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new ZR.b), this._onBindObservable
        }
        set onBind(RR) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(RR)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new ZR.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new ZR.b), this._onEffectCreatedObservable
        }
        set alphaMode(RR) {
          this._alphaMode[0] = RR
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[GR] !== JR && (this._alphaMode[GR] = JR, this.hGR(RR.TextureDirtyFlag))
        }
        set needDepthPrePass(RR) {
          this._needDepthPrePass !== RR && (this._needDepthPrePass = RR, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(JR) {
          this._fogEnabled !== JR && (this._fogEnabled = JR, this.hGR(RR.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case RR.WireFrameFillMode:
            case RR.LineListDrawMode:
            case RR.LineLoopDrawMode:
            case RR.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(JR) {
          this.fillMode = JR ? RR.WireFrameFillMode : RR.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case RR.PointFillMode:
            case RR.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(JR) {
          this.fillMode = JR ? RR.PointFillMode : RR.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(JR) {
          this._fillMode !== JR && (this._fillMode = JR, this.hGR(RR.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(RR) {
          const JR = this.jH().ke().getCaps().fragmentDepthSupported;
          RR && !JR && VR.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = RR && JR, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(RR) {
          this._isVertexOutputInvariant !== RR && (this._isVertexOutputInvariant = RR, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(RR) {
          this._drawWrapper = RR
        }
        constructor(JR, GR, tR) {
          let iR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, yR.m)(this, ER), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, yR.m)(this, YR, void 0), this.uniqueId = ((0, yR.m)(this, kR), (0, yR.m)(this, QR, void 0)), this._loadedUniqueId = (0, yR.m)(this, FR), this.name = (0, yR.m)(this, TR, void 0), this.metadata = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, null)), this._internalMetadata = (0, yR.m)(this, RJ), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, yR.m)(this, JJ, !1), this.checkReadyOnlyOnce = ((0, yR.m)(this, GJ), (0, yR.m)(this, yJ, !1)), this.state = ((0, yR.m)(this, tJ), (0, yR.m)(this, uJ, "")), this._alpha = ((0, yR.m)(this, ZJ), (0, yR.m)(this, qJ, 1)), this.inspectableCustomProperties = (0, yR.m)(this, iJ), this._backFaceCulling = (0, yR.m)(this, fJ, !0), this._textureRepetitionMode = ((0, yR.m)(this, VJ), (0, yR.m)(this, KJ, 0)), this.textureRepetitionHexTilingParams = ((0, yR.m)(this, wJ), (0, yR.m)(this, rJ, [1, .6, 7, .5])), this._cullBackFaces = ((0, yR.m)(this, eJ), (0, yR.m)(this, aJ, !0)), this._blockDirtyMechanism = ((0, yR.m)(this, LJ), !1), this.sideOrientation = (0, yR.m)(this, nJ, null), this.onCompiled = ((0, yR.m)(this, UJ), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.YH = new ZR.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, yR.m)(this, WJ, [2]), this._needDepthPrePass = ((0, yR.m)(this, AJ), (0, yR.m)(this, CJ, !1)), this.disableDepthWrite = ((0, yR.m)(this, XJ), (0, yR.m)(this, MJ, !1)), this.disableColorWrite = ((0, yR.m)(this, BJ), (0, yR.m)(this, lJ, !1)), this.forceDepthWrite = ((0, yR.m)(this, pJ), (0, yR.m)(this, gJ, !1)), this.depthFunction = ((0, yR.m)(this, bJ), (0, yR.m)(this, vJ, 0)), this.separateCullingPass = ((0, yR.m)(this, OJ), (0, yR.m)(this, xJ, !1)), this._fogEnabled = ((0, yR.m)(this, NJ), (0, yR.m)(this, DJ, !0)), this.pointSize = ((0, yR.m)(this, HJ), (0, yR.m)(this, oJ, 1)), this.zOffset = ((0, yR.m)(this, cJ), (0, yR.m)(this, PJ, 0)), this.zOffsetUnits = ((0, yR.m)(this, IJ), (0, yR.m)(this, mJ, 0)), this.clipPlane = (0, yR.m)(this, zJ), this.stencil = new eR, this._isVertexOutputInvariant = (0, yR.m)(this, SJ, RR.ForceVertexOutputInvariant), this._materialContext = (0, yR.m)(this, jJ), this._useUBO = !1, this._fillMode = RR.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = JR;
          const VR = GR || qR.c.LastCreatedScene;
          VR && (this._scene = VR, this._dirtyCallbacks = {}, this._forceGLSL = iR, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = JR || uR.h.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.ke().createMaterialContext(), this._drawWrapper = new wR.c(this._scene.ke(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new fR.b(this._scene.ke(), void 0, void 0, JR), this._useUBO = this.jH().ke().supportsUniformBuffers, this._createUniformBuffer(), tR || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), RR.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const RR = this.jH().ke();
          this._uniformBuffer?.dispose(), RR.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new fR.b(RR, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new fR.b(this._scene.ke(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(RR) {
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
        isReady(RR, JR) {
          return !0
        }
        isReadyForSubMesh(RR, JR, GR) {
          const yR = JR.materialDefines;
          return !!yR && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = yR, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        jH() {
          return this._scene
        }
        _getEffectiveOrientation(RR) {
          return null !== this.sideOrientation ? this.sideOrientation : RR.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(RR) {
          this._transparencyMode = RR
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === RR.MATERIAL_ALPHABLEND || this._transparencyMode === RR.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === RR.MATERIAL_ALPHATEST || this._transparencyMode === RR.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === RR.MATERIAL_OPAQUE || this._transparencyMode === RR.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(RR) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : RR.visibility < 1 || !this._disableAlphaBlending && (RR.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(RR) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(RR) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const GR = this.jH().meshes;
          for (const RR of GR)
            if (RR.XM)
              for (const GR of RR.XM)
                if (GR.he() === this)
                  for (const RR of GR._drawWrappers) RR && this._materialContext === RR.materialContext && (RR._wasPreviouslyReady = !1, RR._wasPreviouslyUsingInstances = null, RR._forceRebindOnNextCall = JR);
          JR && this.hGR(RR.AllDirtyFlag)
        }
        _preBind(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const yR = this._scene.ke(),
            tR = (null == GR ? this.sideOrientation : GR) === RR.ClockWiseSideOrientation,
            uR = JR || this._getDrawWrapper();
          return (0, LR.d)(uR) && uR.materialContext && (uR.materialContext.useVertexPulling = this.useVertexPulling), yR.enableEffect(uR), yR.setState(this.backFaceCulling, this.zOffset, !1, tR, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), tR
        }
        bind(RR, JR) {}
        buildUniformLayout() {
          const RR = this._uniformBuffer;
          this._eventInfo.ubo = RR, this._callbackPluginEventGeneric(8, this._eventInfo), RR.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(RR, JR, GR) {
          const yR = GR._drawWrapper;
          this._eventInfo.subMesh = GR, this._callbackPluginEventBindForSubMesh(this._eventInfo), yR._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(RR) {}
        bindView(RR) {
          this._useUBO ? this._needToBindSceneUbo = !0 : RR.setMatrix("view", this.jH().getViewMatrix())
        }
        bindViewProjection(RR) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (RR.setMatrix("viewProjection", this.jH().getTransformMatrix()), RR.setMatrix("projection", this.jH().getProjectionMatrix()), RR.setMatrix("inverseProjection", this.jH().getInverseProjectionMatrix()))
        }
        bindEyePosition(RR, JR) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(RR, JR)
        }
        _afterBind(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && JR && (this._needToBindSceneUbo = !1, (0, aR.z)(JR, this.jH().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = RR ? RR.visibility : 1, this._onBindObservable && RR && this._onBindObservable.notifyObservers(RR), this.disableDepthWrite) {
            const RR = this._scene.ke();
            this._cachedDepthWriteState = RR.getDepthWrite(), RR.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const RR = this._scene.ke();
            this._cachedColorWriteState = RR.getColorWrite(), RR.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const RR = this._scene.ke();
            this._cachedDepthFunctionState = RR.getDepthFunction() || 0, RR.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.ke().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.ke().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.ke().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(RR) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = RR, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(RR) {
          return null
        }
        _clonePlugins(JR, GR) {
          const yR = {};
          if (this._serializePlugins(yR), RR._ParsePlugins(yR, JR, this._scene, GR), this.pluginManager)
            for (const RR of this.pluginManager._plugins) {
              const GR = JR.pluginManager.getPlugin(RR.name);
              GR && RR.copyTo(GR)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const RR = [];
            for (const JR in this.meshMap) {
              const GR = this.meshMap[JR];
              GR && RR.push(GR)
            }
            return RR
          }
          return this._scene.meshes.filter((RR => RR.material === this))
        }
        forceCompilation(RR, JR, GR, yR) {
          const tR = {
              clipPlane: !1,
              useInstances: !1,
              ...GR
            },
            uR = this.jH(),
            ZR = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const qR = () => {
            if (!this._scene || !this._scene.ke()) return;
            const GR = uR.clipPlane;
            if (tR.clipPlane && (uR.clipPlane = new KR.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let GR = !0,
                uR = null;
              if (RR.XM) {
                const JR = new iR.b(0, 0, 0, 0, 0, RR, void 0, !1, !1);
                JR.materialDefines && (JR.materialDefines._renderId = -1), this.isReadyForSubMesh(RR, JR, tR.useInstances) || (JR.effect && JR.effect.getCompilationError() && JR.effect.allFallbacksProcessed() ? uR = JR.effect.getCompilationError() : (GR = !1, setTimeout(qR, 16)))
              }
              GR && (this.allowShaderHotSwapping = ZR, uR && yR && yR(uR), JR && JR(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = ZR, JR && JR(this)) : setTimeout(qR, 16);
            tR.clipPlane && (uR.clipPlane = GR)
          };
          qR()
        }
        async forceCompilationAsync(RR, JR) {
          return await new Promise(((GR, yR) => {
            this.forceCompilation(RR, (() => {
              GR()
            }), JR, (RR => {
              yR(RR)
            }))
          }))
        }
        hGR(JR) {
          this.jH().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (RR._DirtyCallbackArray.length = 0, JR & RR.ImageProcessingDirtyFlag && RR._DirtyCallbackArray.push(RR._ImageProcessingDirtyCallBack), JR & RR.TextureDirtyFlag && RR._DirtyCallbackArray.push(RR._TextureDirtyCallBack), JR & RR.LightDirtyFlag && RR._DirtyCallbackArray.push(RR._LightsDirtyCallBack), JR & RR.FresnelDirtyFlag && RR._DirtyCallbackArray.push(RR._FresnelDirtyCallBack), JR & RR.AttributesDirtyFlag && RR._DirtyCallbackArray.push(RR._AttributeDirtyCallBack), JR & RR.MiscDirtyFlag && RR._DirtyCallbackArray.push(RR._MiscDirtyCallBack), JR & RR.PrePassDirtyFlag && RR._DirtyCallbackArray.push(RR._PrePassDirtyCallBack), RR._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(RR._RunDirtyCallBacks), this.jH().resetCachedMaterial())
        }
        resetDrawCache() {
          const RR = this.jH().meshes;
          for (const JR of RR)
            if (JR.XM)
              for (const RR of JR.XM) RR.he() === this && RR.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(RR) {
          const JR = this.jH();
          if (JR.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const GR = JR.meshes;
          for (const yR of GR)
            if (yR.XM)
              for (const GR of yR.XM) {
                if ((GR.he() || (JR._hasDefaultMaterial ? JR.defaultMaterial : null)) === this)
                  for (const JR of GR._drawWrappers) JR && JR.defines && JR.defines.markAllAsDirty && this._materialContext === JR.materialContext && RR(JR.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.jH().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const RR = this.jH().enablePrePassRenderer();
          RR && RR.hGR()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(RR._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(RR._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(RR._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(RR._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(RR._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(RR._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(RR._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(RR._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(RR._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(RR._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const RR = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.YH.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(RR)
            }))
          }
        }
        setPrePassRenderer(RR) {
          return !1
        }
        dispose(RR, JR, GR) {
          const yR = this.jH();
          if (yR.stopAnimation(this), yR.freeProcessedMaterials(), yR.removeMaterial(this), this._eventInfo.forceDisposeTextures = JR, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const RR = this._parentContainer.materials.indexOf(this);
            RR > -1 && this._parentContainer.materials.splice(RR, 1), this._parentContainer = null
          }
          if (!0 !== GR)
            if (this.meshMap)
              for (const tR in this.meshMap) {
                const RR = this.meshMap[tR];
                this._disposeMeshResources(RR)
              } else {
                const RR = yR.meshes;
                for (const JR of RR) this._disposeMeshResources(JR)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.YH.notifyObservers(this), this.YH.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(RR) {
          if (!RR) return;
          const JR = RR.geometry,
            GR = RR._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (RR.XM && GR)
              for (const yR of RR.XM) {
                const RR = yR._drawWrappers;
                for (let tR = 0; tR < RR.length; tR++) {
                  const uR = RR[tR]?.effect;
                  if (!uR) continue;
                  GR[tR] === this && (JR?._releaseVertexArrayObject(uR), yR._removeDrawWrapper(tR, !0, !0))
                }
              }
          } else JR?._releaseVertexArrayObject(this._drawWrapper.effect);
          RR.material !== this || RR.IuR || (RR.material = null)
        }
        serialize() {
          const RR = rR.c.Serialize(this);
          return RR.stencil = this.stencil.serialize(), RR.uniqueId = this.uniqueId, this._serializePlugins(RR), RR
        }
        _serializePlugins(RR) {
          if (RR.plugins = {}, this.pluginManager)
            for (const JR of this.pluginManager._plugins) JR.doNotSerialize || (RR.plugins[JR.getClassName()] = JR.serialize())
        }
        static ParseAlphaMode(RR, JR) {
          void 0 !== RR._alphaMode ? JR._alphaMode = Array.isArray(RR._alphaMode) ? [...RR._alphaMode] : [RR._alphaMode] : void 0 !== RR.alphaMode ? JR._alphaMode = Array.isArray(RR.alphaMode) ? [...RR.alphaMode] : [RR.alphaMode] : JR._alphaMode = [2]
        }
        static Parse(JR, GR, yR) {
          if (JR.customType) {
            if ("BABYLON.PBRMaterial" === JR.customType && JR.overloadedAlbedo && (JR.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return VR.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else JR.customType = "BABYLON.StandardMaterial";
          const tR = uR.h.Instantiate(JR.customType).Parse(JR, GR, yR);
          return tR._loadedUniqueId = JR.uniqueId, RR.ParseAlphaMode(JR, tR), tR
        }
        static _ParsePlugins(RR, JR, GR, yR) {
          if (RR.plugins)
            for (const tR in RR.plugins) {
              const ZR = RR.plugins[tR];
              let qR = JR.pluginManager?.getPlugin(ZR.name);
              if (!qR) {
                const RR = uR.h.Instantiate("BABYLON." + tR);
                RR && (qR = new RR(JR))
              }
              qR?.parse(ZR, GR, yR)
            }
        }
      }, (() => {
        const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], nR = [(0, tR.H)()], UR = [(0, tR.H)()], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)("alpha")], MR = [(0, tR.H)("backFaceCulling")], BR = [(0, tR.H)("textureRepetitionMode")], lR = [(0, tR.H)("textureRepetitionHexTilingParams")], pR = [(0, tR.H)("cullBackFaces")], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], OR = [(0, tR.H)()], xR = [(0, tR.H)()], NR = [(0, tR.H)()], DR = [(0, tR.H)()], HR = [(0, tR.H)()], oR = [(0, tR.H)("fogEnabled")], cR = [(0, tR.H)()], PR = [(0, tR.H)()], IR = [(0, tR.H)()], mR = [(0, tR.H)()], zR = [(0, tR.H)()], SR = [(0, tR.H)()], jR = [(0, tR.H)()], dR = [(0, tR.H)()], (0, yR.l)(RR, null, mR, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: RR => "pointsCloud" in RR,
            get: RR => RR.pointsCloud
          },
          metadata: uR
        }, null, ER), (0, yR.l)(RR, null, zR, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "fillMode" in RR,
            get: RR => RR.fillMode
          },
          metadata: uR
        }, null, ER), (0, yR.l)(RR, null, SR, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: RR => "useLogarithmicDepth" in RR,
            get: RR => RR.useLogarithmicDepth
          },
          metadata: uR
        }, null, ER), (0, yR.l)(RR, null, dR, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "transparencyMode" in RR,
            get: RR => RR.transparencyMode
          },
          metadata: uR
        }, null, ER), (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: RR => "id" in RR,
            get: RR => RR.id,
            set: (RR, JR) => {
              RR.id = JR
            }
          },
          metadata: uR
        }, YR, kR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: RR => "uniqueId" in RR,
            get: RR => RR.uniqueId,
            set: (RR, JR) => {
              RR.uniqueId = JR
            }
          },
          metadata: uR
        }, QR, FR), (0, yR.l)(null, null, nR, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: RR => "name" in RR,
            get: RR => RR.name,
            set: (RR, JR) => {
              RR.name = JR
            }
          },
          metadata: uR
        }, TR, sR), (0, yR.l)(null, null, UR, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: RR => "metadata" in RR,
            get: RR => RR.metadata,
            set: (RR, JR) => {
              RR.metadata = JR
            }
          },
          metadata: uR
        }, hR, RJ), (0, yR.l)(null, null, WR, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: RR => "checkReadyOnEveryCall" in RR,
            get: RR => RR.checkReadyOnEveryCall,
            set: (RR, JR) => {
              RR.checkReadyOnEveryCall = JR
            }
          },
          metadata: uR
        }, JJ, GJ), (0, yR.l)(null, null, AR, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: RR => "checkReadyOnlyOnce" in RR,
            get: RR => RR.checkReadyOnlyOnce,
            set: (RR, JR) => {
              RR.checkReadyOnlyOnce = JR
            }
          },
          metadata: uR
        }, yJ, tJ), (0, yR.l)(null, null, CR, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: RR => "state" in RR,
            get: RR => RR.state,
            set: (RR, JR) => {
              RR.state = JR
            }
          },
          metadata: uR
        }, uJ, ZJ), (0, yR.l)(null, null, XR, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "_alpha" in RR,
            get: RR => RR._alpha,
            set: (RR, JR) => {
              RR._alpha = JR
            }
          },
          metadata: uR
        }, qJ, iJ), (0, yR.l)(null, null, MR, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: RR => "_backFaceCulling" in RR,
            get: RR => RR._backFaceCulling,
            set: (RR, JR) => {
              RR._backFaceCulling = JR
            }
          },
          metadata: uR
        }, fJ, VJ), (0, yR.l)(null, null, BR, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "_textureRepetitionMode" in RR,
            get: RR => RR._textureRepetitionMode,
            set: (RR, JR) => {
              RR._textureRepetitionMode = JR
            }
          },
          metadata: uR
        }, KJ, wJ), (0, yR.l)(null, null, lR, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: RR => "textureRepetitionHexTilingParams" in RR,
            get: RR => RR.textureRepetitionHexTilingParams,
            set: (RR, JR) => {
              RR.textureRepetitionHexTilingParams = JR
            }
          },
          metadata: uR
        }, rJ, eJ), (0, yR.l)(null, null, pR, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: RR => "_cullBackFaces" in RR,
            get: RR => RR._cullBackFaces,
            set: (RR, JR) => {
              RR._cullBackFaces = JR
            }
          },
          metadata: uR
        }, aJ, LJ), (0, yR.l)(null, null, gR, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: RR => "sideOrientation" in RR,
            get: RR => RR.sideOrientation,
            set: (RR, JR) => {
              RR.sideOrientation = JR
            }
          },
          metadata: uR
        }, nJ, UJ), (0, yR.l)(null, null, bR, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "_alphaMode" in RR,
            get: RR => RR._alphaMode,
            set: (RR, JR) => {
              RR._alphaMode = JR
            }
          },
          metadata: uR
        }, WJ, AJ), (0, yR.l)(null, null, vR, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: RR => "_needDepthPrePass" in RR,
            get: RR => RR._needDepthPrePass,
            set: (RR, JR) => {
              RR._needDepthPrePass = JR
            }
          },
          metadata: uR
        }, CJ, XJ), (0, yR.l)(null, null, OR, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: RR => "disableDepthWrite" in RR,
            get: RR => RR.disableDepthWrite,
            set: (RR, JR) => {
              RR.disableDepthWrite = JR
            }
          },
          metadata: uR
        }, MJ, BJ), (0, yR.l)(null, null, xR, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: RR => "disableColorWrite" in RR,
            get: RR => RR.disableColorWrite,
            set: (RR, JR) => {
              RR.disableColorWrite = JR
            }
          },
          metadata: uR
        }, lJ, pJ), (0, yR.l)(null, null, NR, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: RR => "forceDepthWrite" in RR,
            get: RR => RR.forceDepthWrite,
            set: (RR, JR) => {
              RR.forceDepthWrite = JR
            }
          },
          metadata: uR
        }, gJ, bJ), (0, yR.l)(null, null, DR, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: RR => "depthFunction" in RR,
            get: RR => RR.depthFunction,
            set: (RR, JR) => {
              RR.depthFunction = JR
            }
          },
          metadata: uR
        }, vJ, OJ), (0, yR.l)(null, null, HR, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: RR => "separateCullingPass" in RR,
            get: RR => RR.separateCullingPass,
            set: (RR, JR) => {
              RR.separateCullingPass = JR
            }
          },
          metadata: uR
        }, xJ, NJ), (0, yR.l)(null, null, oR, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "_fogEnabled" in RR,
            get: RR => RR._fogEnabled,
            set: (RR, JR) => {
              RR._fogEnabled = JR
            }
          },
          metadata: uR
        }, DJ, HJ), (0, yR.l)(null, null, cR, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: RR => "pointSize" in RR,
            get: RR => RR.pointSize,
            set: (RR, JR) => {
              RR.pointSize = JR
            }
          },
          metadata: uR
        }, oJ, cJ), (0, yR.l)(null, null, PR, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: RR => "zOffset" in RR,
            get: RR => RR.zOffset,
            set: (RR, JR) => {
              RR.zOffset = JR
            }
          },
          metadata: uR
        }, PJ, IJ), (0, yR.l)(null, null, IR, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: RR => "zOffsetUnits" in RR,
            get: RR => RR.zOffsetUnits,
            set: (RR, JR) => {
              RR.zOffsetUnits = JR
            }
          },
          metadata: uR
        }, mJ, zJ), (0, yR.l)(null, null, jR, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: RR => "_isVertexOutputInvariant" in RR,
            get: RR => RR._isVertexOutputInvariant,
            set: (RR, JR) => {
              RR._isVertexOutputInvariant = JR
            }
          },
          metadata: uR
        }, SJ, jJ), uR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uR
        })
      })(), RR.TriangleFillMode = 0, RR.WireFrameFillMode = 1, RR.PointFillMode = 2, RR.PointListDrawMode = 3, RR.LineListDrawMode = 4, RR.LineLoopDrawMode = 5, RR.LineStripDrawMode = 6, RR.TriangleStripDrawMode = 7, RR.TriangleFanDrawMode = 8, RR.ClockWiseSideOrientation = 0, RR.CounterClockWiseSideOrientation = 1, RR.ImageProcessingDirtyFlag = 64, RR.TextureDirtyFlag = 1, RR.LightDirtyFlag = 2, RR.FresnelDirtyFlag = 4, RR.AttributesDirtyFlag = 8, RR.MiscDirtyFlag = 16, RR.PrePassDirtyFlag = 32, RR.AllDirtyFlag = 127, RR.MATERIAL_OPAQUE = 0, RR.MATERIAL_ALPHATEST = 1, RR.MATERIAL_ALPHABLEND = 2, RR.MATERIAL_ALPHATESTANDBLEND = 3, RR.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, RR.MATERIAL_NORMALBLENDMETHOD_RNM = 1, RR.LIGHTFALLOFF_PHYSICAL = 0, RR.LIGHTFALLOFF_GLTF = 1, RR.LIGHTFALLOFF_STANDARD = 2, RR.OnEventObservable = new ZR.b, RR.ForceVertexOutputInvariant = !1, RR._AllDirtyCallBack = RR => RR.markAllAsDirty(), RR._ImageProcessingDirtyCallBack = RR => RR.markAsImageProcessingDirty(), RR._TextureDirtyCallBack = RR => RR.markAsTexturesDirty(), RR._FresnelDirtyCallBack = RR => RR.markAsFresnelDirty(), RR._MiscDirtyCallBack = RR => RR.markAsMiscDirty(), RR._PrePassDirtyCallBack = RR => RR.markAsPrePassDirty(), RR._LightsDirtyCallBack = RR => RR.markAsLightDirty(), RR._AttributeDirtyCallBack = RR => RR.markAsAttributesDirty(), RR._FresnelAndMiscDirtyCallBack = JR => {
        RR._FresnelDirtyCallBack(JR), RR._MiscDirtyCallBack(JR)
      }, RR._TextureAndMiscDirtyCallBack = JR => {
        RR._TextureDirtyCallBack(JR), RR._MiscDirtyCallBack(JR)
      }, RR._DirtyCallbackArray = [], RR._RunDirtyCallBacks = JR => {
        for (const GR of RR._DirtyCallbackArray) GR(JR)
      }, RR
    })();
    Object.getOwnPropertyDescriptor(UR.prototype, "pluginManager") || Object.defineProperty(UR.prototype, "pluginManager", (0, nR.e)("Material", "pluginManager"))
  },
  41860: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    var yR = GR(41418);
    class tR {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(RR) {
        this._DiffuseTextureEnabled !== RR && (this._DiffuseTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(RR) {
        this._BaseWeightTextureEnabled !== RR && (this._BaseWeightTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(RR) {
        this._BaseDiffuseRoughnessTextureEnabled !== RR && (this._BaseDiffuseRoughnessTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(RR) {
        this._DetailTextureEnabled !== RR && (this._DetailTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(RR) {
        this._DecalMapEnabled !== RR && (this._DecalMapEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(RR) {
        this._AmbientTextureEnabled !== RR && (this._AmbientTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(RR) {
        this._OpacityTextureEnabled !== RR && (this._OpacityTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(RR) {
        this._ReflectionTextureEnabled !== RR && (this._ReflectionTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(RR) {
        this._EmissiveTextureEnabled !== RR && (this._EmissiveTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(RR) {
        this._SpecularTextureEnabled !== RR && (this._SpecularTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(RR) {
        this._BumpTextureEnabled !== RR && (this._BumpTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(RR) {
        this._LightmapTextureEnabled !== RR && (this._LightmapTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(RR) {
        this._RefractionTextureEnabled !== RR && (this._RefractionTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(RR) {
        this._ColorGradingTextureEnabled !== RR && (this._ColorGradingTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(RR) {
        this._FresnelEnabled !== RR && (this._FresnelEnabled = RR, yR.c.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(RR) {
        this._ClearCoatTextureEnabled !== RR && (this._ClearCoatTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(RR) {
        this._ClearCoatBumpTextureEnabled !== RR && (this._ClearCoatBumpTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(RR) {
        this._ClearCoatTintTextureEnabled !== RR && (this._ClearCoatTintTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(RR) {
        this._SheenTextureEnabled !== RR && (this._SheenTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(RR) {
        this._AnisotropicTextureEnabled !== RR && (this._AnisotropicTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(RR) {
        this._ThicknessTextureEnabled !== RR && (this._ThicknessTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(RR) {
        this._RefractionIntensityTextureEnabled !== RR && (this._RefractionIntensityTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(RR) {
        this._TranslucencyIntensityTextureEnabled !== RR && (this._TranslucencyIntensityTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(RR) {
        this._TranslucencyColorTextureEnabled !== RR && (this._TranslucencyColorTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(RR) {
        this._IridescenceTextureEnabled !== RR && (this._IridescenceTextureEnabled = RR, yR.c.MarkAllMaterialsAsDirty(1))
      }
    }
    tR._DiffuseTextureEnabled = !0, tR._BaseWeightTextureEnabled = !0, tR._BaseDiffuseRoughnessTextureEnabled = !0, tR._DetailTextureEnabled = !0, tR._DecalMapEnabled = !0, tR._AmbientTextureEnabled = !0, tR._OpacityTextureEnabled = !0, tR._ReflectionTextureEnabled = !0, tR._EmissiveTextureEnabled = !0, tR._SpecularTextureEnabled = !0, tR._BumpTextureEnabled = !0, tR._LightmapTextureEnabled = !0, tR._RefractionTextureEnabled = !0, tR._ColorGradingTextureEnabled = !0, tR._FresnelEnabled = !0, tR._ClearCoatTextureEnabled = !0, tR._ClearCoatBumpTextureEnabled = !0, tR._ClearCoatTintTextureEnabled = !0, tR._SheenTextureEnabled = !0, tR._AnisotropicTextureEnabled = !0, tR._ThicknessTextureEnabled = !0, tR._RefractionIntensityTextureEnabled = !0, tR._TranslucencyIntensityTextureEnabled = !0, tR._TranslucencyColorTextureEnabled = !0, tR._IridescenceTextureEnabled = !0
  },
  41852: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => AR,
      F: () => vR,
      I: () => CR,
      M: () => gR,
      N: () => bR,
      R: () => rR,
      T: () => wR,
      X: () => zR,
      Y: () => oR,
      Z: () => DR,
      bb: () => NR,
      db: () => WR,
      e: () => xR,
      eb: () => OR,
      fb: () => SR,
      h: () => XR,
      ib: () => jR,
      jb: () => dR,
      k: () => KR,
      l: () => nR,
      n: () => UR,
      nb: () => QR,
      q: () => pR,
      rb: () => YR,
      sb: () => kR,
      u: () => iR,
      ub: () => eR,
      w: () => aR,
      z: () => LR
    });
    var yR = GR(39914),
      tR = GR(38224),
      uR = GR(41715),
      ZR = GR(41855),
      qR = GR(41860);

    function iR(RR, JR, GR) {
      if (!RR || RR.LOGARITHMICDEPTH || RR.indexOf && RR.indexOf("LOGARITHMICDEPTH") >= 0) {
        const RR = GR.activeCamera;
        1 === RR.mode && yR.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), JR.setFloat("logarithmicDepthConstant", 2 / (Math.log(RR.maxZ + 1) / Math.LN2))
      }
    }
    const fR = {
        r: 0,
        g: 0,
        b: 0
      },
      VR = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function KR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      GR && RR.fogEnabled && (!JR || JR.applyFog) && 0 !== RR.fogMode && (GR.setFloat4("vFogInfos", RR.fogMode, RR.fogStart, RR.fogEnd, RR.fogDensity), yR ? (RR.fogColor.toLinearSpaceToRef(fR, RR.ke().useExactSrgbConversions), GR.setColor3("vFogColor", fR)) : GR.setColor3("vFogColor", RR.fogColor))
    }

    function wR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
      const KR = RR.numMaxInfluencers || RR.numInfluencers;
      return KR <= 0 ? 0 : (JR.push("#define MORPHTARGETS"), RR.hasPositions && JR.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), RR.hasNormals && JR.push("#define MORPHTARGETTEXTURE_HASNORMALS"), RR.hasTangents && JR.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), RR.hasUVs && JR.push("#define MORPHTARGETTEXTURE_HASUVS"), RR.hasUV2s && JR.push("#define MORPHTARGETTEXTURE_HASUV2S"), RR.hasColors && JR.push("#define MORPHTARGETTEXTURE_HASCOLORS"), RR.supportsPositions && tR && JR.push("#define MORPHTARGETS_POSITION"), RR.supportsNormals && uR && JR.push("#define MORPHTARGETS_NORMAL"), RR.supportsTangents && ZR && JR.push("#define MORPHTARGETS_TANGENT"), RR.supportsUVs && qR && JR.push("#define MORPHTARGETS_UV"), RR.supportsUV2s && iR && JR.push("#define MORPHTARGETS_UV2"), RR.supportsColors && fR && JR.push("#define MORPHTARGETS_COLOR"), JR.push("#define NUM_MORPH_INFLUENCERS " + KR), RR.isUsingTextureForTargets && JR.push("#define MORPHTARGETS_TEXTURE"), VR.NUM_MORPH_INFLUENCERS = KR, VR.NORMAL = uR, VR.TANGENT = ZR, VR.UV = qR, VR.UV2 = iR, VR.COLOR = fR, rR(GR, yR, VR, tR), KR)
    }

    function rR(RR, JR, GR) {
      let uR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ZR = GR.NUM_MORPH_INFLUENCERS;
      if (ZR > 0 && tR.c.LastCreatedEngine) {
        const qR = tR.c.LastCreatedEngine.getCaps().maxVertexAttribs,
          iR = JR.morphTargetManager;
        if (iR?.isUsingTextureForTargets) return;
        const fR = iR && iR.supportsPositions && uR,
          VR = iR && iR.supportsNormals && GR.NORMAL,
          KR = iR && iR.supportsTangents && GR.TANGENT,
          wR = iR && iR.supportsUVs && GR.UV1,
          rR = iR && iR.supportsUV2s && GR.UV2,
          eR = iR && iR.supportsColors && GR.VERTEXCOLOR;
        for (let GR = 0; GR < ZR; GR++) fR && RR.push("position" + GR), VR && RR.push("normal" + GR), KR && RR.push("tangent" + GR), wR && RR.push("uv_" + GR), rR && RR.push("uv2_" + GR), eR && RR.push("color" + GR), RR.length > qR && yR.c.Error("Cannot add more vertex attributes for mesh " + JR.name)
      }
    }

    function eR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      RR.push("world0"), RR.push("world1"), RR.push("world2"), RR.push("world3"), JR && (RR.push("previousWorld0"), RR.push("previousWorld1"), RR.push("previousWorld2"), RR.push("previousWorld3"))
    }

    function aR(RR, JR) {
      const GR = RR.morphTargetManager;
      RR && GR && JR.setFloatArray("morphTargetInfluences", GR.influences)
    }

    function LR(RR, JR) {
      JR.bindToEffect(RR, "Scene")
    }

    function nR(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        iR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        VR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        KR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        wR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (RR.texturesEnabled && tR && qR.b.ReflectionTextureEnabled) {
        if (GR.FRR("reflectionMatrix", tR.getReflectionTextureMatrix()), GR.updateFloat2("vReflectionInfos", tR.level * RR.iblIntensity, wR), iR && tR.boundingBoxSize) {
          const RR = tR;
          GR.updateVector3("vReflectionPosition", RR.boundingBoxPosition), GR.updateVector3("vReflectionSize", RR.boundingBoxSize)
        }
        if (uR) {
          const RR = tR.getSize().width;
          GR.updateFloat2("vReflectionFilteringInfo", RR, Math.log2(RR))
        }
        if (VR && !JR.USEIRRADIANCEMAP) {
          const RR = tR.sphericalPolynomial;
          if (JR.USESPHERICALFROMREFLECTIONMAP && RR)
            if (JR.SPHERICAL_HARMONICS) {
              const JR = RR.preScaledHarmonics;
              GR.updateVector3("vSphericalL00", JR.l00), GR.updateVector3("vSphericalL1_1", JR.l1_1), GR.updateVector3("vSphericalL10", JR.l10), GR.updateVector3("vSphericalL11", JR.l11), GR.updateVector3("vSphericalL2_2", JR.l2_2), GR.updateVector3("vSphericalL2_1", JR.l2_1), GR.updateVector3("vSphericalL20", JR.l20), GR.updateVector3("vSphericalL21", JR.l21), GR.updateVector3("vSphericalL22", JR.l22)
            } else GR.updateFloat3("vSphericalX", RR.x.x, RR.x.y, RR.x.z), GR.updateFloat3("vSphericalY", RR.y.x, RR.y.y, RR.y.z), GR.updateFloat3("vSphericalZ", RR.z.x, RR.z.y, RR.z.z), GR.updateFloat3("vSphericalXX_ZZ", RR.xx.x - RR.zz.x, RR.xx.y - RR.zz.y, RR.xx.z - RR.zz.z), GR.updateFloat3("vSphericalYY_ZZ", RR.yy.x - RR.zz.x, RR.yy.y - RR.zz.y, RR.yy.z - RR.zz.z), GR.updateFloat3("vSphericalZZ", RR.zz.x, RR.zz.y, RR.zz.z), GR.updateFloat3("vSphericalXY", RR.xy.x, RR.xy.y, RR.xy.z), GR.updateFloat3("vSphericalYZ", RR.yz.x, RR.yz.y, RR.yz.z), GR.updateFloat3("vSphericalZX", RR.zx.x, RR.zx.y, RR.zx.z)
        } else fR && JR.USEIRRADIANCEMAP && JR.USE_IRRADIANCE_DOMINANT_DIRECTION && tR.irradianceTexture && GR.updateVector3("vReflectionDominantDirection", tR.irradianceTexture._dominantDirection);
        ZR && GR.updateFloat3("vReflectionMicrosurfaceInfos", tR.getSize().width, tR.lodGenerationScale, tR.lodGenerationOffset)
      }
      KR && GR.updateColor3("vReflectionColor", yR)
    }

    function UR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (yR && qR.b.ReflectionTextureEnabled) {
        JR.LODBASEDMICROSFURACE ? GR.setTexture("reflectionSampler", yR) : (GR.setTexture("reflectionSampler", yR._lodTextureMid || yR), GR.setTexture("reflectionSamplerLow", yR._lodTextureLow || yR), GR.setTexture("reflectionSamplerHigh", yR._lodTextureHigh || yR)), JR.USEIRRADIANCEMAP && GR.setTexture("irradianceSampler", yR.irradianceTexture);
        const uR = RR.iblCdfGenerator;
        tR && uR && GR.setTexture("icdfSampler", uR.getIcdfTexture())
      }
    }

    function WR(RR, JR, GR) {
      JR._needUVs = !0, JR[GR] = !0, RR.optimizeUVAllocation && RR.getTextureMatrix().isIdentityAs3x2() ? (JR[GR + "DIRECTUV"] = RR.coordinatesIndex + 1, JR["MAINUV" + (RR.coordinatesIndex + 1)] = !0) : JR[GR + "DIRECTUV"] = 0
    }

    function AR(RR, JR, GR) {
      const yR = RR.getTextureMatrix();
      JR.FRR(GR + "Matrix", yR)
    }

    function CR(RR, JR, GR) {
      GR.BAKED_VERTEX_ANIMATION_TEXTURE && GR.INSTANCES && RR.push("bakedVertexAnimationSettingsInstanced")
    }

    function XR(RR, JR, GR) {
      var yR;
      if (JR && RR && (RR.computeBonesUsingShaders && JR._bonesComputationForcedToCPU && (RR.computeBonesUsingShaders = !1), RR.useBones && RR.computeBonesUsingShaders && RR.skeleton)) {
        const tR = RR.skeleton;
        if (tR.isUsingTextureForMatrices && JR.getUniformIndex("boneTextureInfo") > -1) {
          const GR = tR.getTransformMatrixTexture(RR);
          JR.setTexture("boneSampler", GR), JR.setFloat2("boneTextureInfo", tR._textureWidth, tR._textureHeight)
        } else {
          const uR = tR.getTransformMatrices(RR);
          uR && (JR.setMatrices("mBones", uR), GR && RR.jH().prePassRenderer && RR.jH().prePassRenderer.getIndex(2) && (GR.previousBones[RR.uniqueId] || (GR.previousBones[RR.uniqueId] = uR.slice()), JR.setMatrices("mPreviousBones", GR.previousBones[RR.uniqueId]), yR = uR, GR.previousBones[RR.uniqueId].set(yR)))
        }
      }
    }

    function MR(RR, JR, GR, yR, tR) {
      let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      RR._bindLight(JR, GR, yR, tR, uR)
    }
    const BR = 4,
      lR = new WeakMap;

    function pR(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const uR = Math.min(JR.lightSources.length, tR);
      for (let ZR = 0; ZR < uR; ZR++) {
        MR(JR.lightSources[ZR], ZR, RR, GR, "boolean" === typeof yR ? yR : yR.SPECULARTERM, JR.receiveShadows)
      }
    }

    function gR(RR, JR, GR, yR) {
      GR.NUM_BONE_INFLUENCERS > 0 && (yR.addCPUSkinningFallback(0, JR), RR.push("matricesIndices"), RR.push("matricesWeights"), GR.NUM_BONE_INFLUENCERS > 4 && (RR.push("matricesIndicesExtra"), RR.push("matricesWeightsExtra")))
    }

    function bR(RR, JR) {
      (JR.INSTANCES || JR.THIN_INSTANCES) && eR(RR, !!JR.PREPASS_VELOCITY), JR.INSTANCESCOLOR && RR.push("instanceColor")
    }

    function vR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tR = 0;
      for (let uR = 0; uR < GR && RR["LIGHT" + uR]; uR++) uR > 0 && (tR = yR + uR, JR.addFallback(tR, "LIGHT" + uR)), RR.SHADOWS || (RR["SHADOW" + uR] && JR.addFallback(yR, "SHADOW" + uR), RR["SHADOWPCF" + uR] && JR.addFallback(yR, "SHADOWPCF" + uR), RR["SHADOWPCSS" + uR] && JR.addFallback(yR, "SHADOWPCSS" + uR), RR["SHADOWPOISSON" + uR] && JR.addFallback(yR, "SHADOWPOISSON" + uR), RR["SHADOWESM" + uR] && JR.addFallback(yR, "SHADOWESM" + uR), RR["SHADOWCLOSEESM" + uR] && JR.addFallback(yR, "SHADOWCLOSEESM" + uR));
      return tR
    }

    function OR(RR, JR, GR, yR, tR, uR, ZR) {
      let qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fR = arguments.length > 9 ? arguments[9] : void 0,
        VR = arguments.length > 10 ? arguments[10] : void 0;
      if (ZR._areMiscDirty) {
        ZR.LOGARITHMICDEPTH = GR, ZR.POINTSIZE = yR, ZR.FOG = tR && function(RR, JR) {
          return JR.fogEnabled && RR.applyFog && 0 !== JR.fogMode
        }(RR, JR), ZR.NONUNIFORMSCALING = RR.nonUniformScaling, ZR.ALPHATEST = uR, ZR.DECAL_AFTER_DETAIL = qR, ZR.USE_VERTEX_PULLING = iR, ZR.RIGHT_HANDED = JR.useRightHandedSystem;
        const KR = iR ? fR?.geometry?.getIndexBuffer() : null,
          wR = !!fR && fR.isUnIndexed;
        ZR.VERTEX_PULLING_USE_INDEX_BUFFER = !!KR && !wR, ZR.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!KR || wR) && KR.is32Bits, ZR.VERTEXOUTPUT_INVARIANT = !!VR
      }
    }

    function xR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!RR.lightsEnabled || yR) return !0;
      const tR = JR.lightSources,
        uR = Math.min(tR.length, GR);
      for (let ZR = 0; ZR < uR; ZR++)
        if (!tR[ZR].areLightTexturesReady()) return !1;
      return !0
    }

    function NR(RR, JR, GR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!GR._areLightsDirty) return GR._needNormals;
      const qR = uR;
      uR = function(RR, JR) {
        const GR = RR.ke().getCaps().maxUniformBuffersPerShaderStage;
        if (null == GR) return JR;
        const yR = Math.max(GR - BR, 1);
        return Math.min(JR, yR)
      }(RR, uR);
      let iR = 0;
      const fR = {
        needNormals: GR._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (RR.lightsEnabled && !ZR) {
        JR.lightSources.length > uR && uR < qR && function(RR, JR, GR, tR) {
          let uR = lR.get(RR);
          uR || (uR = new Set, lR.set(RR, uR)), uR.has(tR) || (uR.add(tR), yR.c.Warn(`maxSimultaneousLights is ${JR} but this engine supports at most ${GR} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${tR} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${tR+BR} uniform buffers, over the device limit of ${RR.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${GR}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${GR} or less to silence this warning.`))
        }(RR.ke(), qR, uR, Math.min(JR.lightSources.length, qR));
        for (const yR of JR.lightSources)
          if (HR(RR, JR, yR, iR, GR, tR, fR), iR++, iR === uR) break
      }
      GR.SPECULARTERM = fR.specularEnabled, GR.SHADOWS = fR.shadowEnabled;
      const VR = Math.max(uR, GR.MAXLIGHTCOUNT || 0);
      for (let yR = iR; yR < VR; yR++) void 0 !== GR["LIGHT" + yR] && (GR["LIGHT" + yR] = !1, GR["HEMILIGHT" + yR] = !1, GR["POINTLIGHT" + yR] = !1, GR["DIRLIGHT" + yR] = !1, GR["SPOTLIGHT" + yR] = !1, GR["AREALIGHT" + yR] = !1, GR["CLUSTLIGHT" + yR] = !1, GR["SHADOW" + yR] = !1, GR["SHADOWCSM" + yR] = !1, GR["SHADOWCSMDEBUG" + yR] = !1, GR["SHADOWCSMNUM_CASCADES" + yR] = !1, GR["SHADOWCSMUSESHADOWMAXZ" + yR] = !1, GR["SHADOWCSMNOBLEND" + yR] = !1, GR["SHADOWCSM_RIGHTHANDED" + yR] = !1, GR["SHADOWPCF" + yR] = !1, GR["SHADOWPCSS" + yR] = !1, GR["SHADOWPOISSON" + yR] = !1, GR["SHADOWESM" + yR] = !1, GR["SHADOWCLOSEESM" + yR] = !1, GR["SHADOWCUBE" + yR] = !1, GR["SHADOWLOWQUALITY" + yR] = !1, GR["SHADOWMEDIUMQUALITY" + yR] = !1);
      GR.LIGHTCOUNT = iR, GR.MAXLIGHTCOUNT = uR;
      const KR = RR.ke().getCaps();
      return void 0 === GR.SHADOWFLOAT && (fR.needRebuild = !0), GR.SHADOWFLOAT = fR.shadowEnabled && (KR.textureFloatRender && KR.textureFloatLinearFiltering || KR.textureHalfFloatRender && KR.textureHalfFloatLinearFiltering), GR.LIGHTMAPEXCLUDED = fR.lightmapMode, fR.needRebuild && GR.rebuild(), fR.needNormals
    }

    function DR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (JR && qR.b.ReflectionTextureEnabled) {
        if (!JR.isReadyOrNotBlocking()) return !1;
        GR._needNormals = !0, GR.REFLECTION = !0, GR.GAMMAREFLECTION = JR.gammaSpace, GR.RGBDREFLECTION = JR.isRGBD, GR.LODINREFLECTIONALPHA = JR.lodLevelInAlpha, GR.LINEARSPECULARREFLECTION = JR.linearSpecularLOD, GR.USEIRRADIANCEMAP = !1, GR.LODBASEDMICROSFURACE = RR.ke().getCaps().textureLOD;
        const ZR = RR.ke();
        switch (yR && tR > 0 ? (GR.NUM_SAMPLES = "" + tR, ZR._features.needTypeSuffixInShaderConstants && (GR.NUM_SAMPLES = GR.NUM_SAMPLES + "u"), GR.REALTIME_FILTERING = !0, RR.iblCdfGenerator && (GR.IBL_CDF_FILTERING = !0)) : GR.REALTIME_FILTERING = !1, GR.INVERTCUBICMAP = 6 === JR.coordinatesMode, GR.REFLECTIONMAP_3D = JR.isCube, GR.REFLECTIONMAP_OPPOSITEZ = GR.REFLECTIONMAP_3D && RR.useRightHandedSystem ? !JR.invertZ : JR.invertZ, GR.REFLECTIONMAP_CUBIC = !1, GR.REFLECTIONMAP_EXPLICIT = !1, GR.REFLECTIONMAP_PLANAR = !1, GR.REFLECTIONMAP_PROJECTION = !1, GR.REFLECTIONMAP_SKYBOX = !1, GR.REFLECTIONMAP_SPHERICAL = !1, GR.REFLECTIONMAP_EQUIRECTANGULAR = !1, GR.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, GR.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, JR.coordinatesMode) {
          case 0:
            GR.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            GR.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            GR.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            GR.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            GR.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            GR.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            GR.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            GR.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            GR.REFLECTIONMAP_CUBIC = !0, GR.USE_LOCAL_REFLECTIONMAP_CUBIC = !!JR.boundingBoxSize
        }
        5 !== JR.coordinatesMode && (JR.irradianceTexture ? (GR.USEIRRADIANCEMAP = !0, GR.USESPHERICALFROMREFLECTIONMAP = !1, GR.USESPHERICALINVERTEX = !1, JR.irradianceTexture._dominantDirection ? GR.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : GR.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : JR.isCube && (GR.USESPHERICALFROMREFLECTIONMAP = !0, GR.USEIRRADIANCEMAP = !1, GR.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, GR.USESPHERICALINVERTEX = uR))
      } else GR.REFLECTION = !1, GR.REFLECTIONMAP_3D = !1, GR.REFLECTIONMAP_SPHERICAL = !1, GR.REFLECTIONMAP_PLANAR = !1, GR.REFLECTIONMAP_CUBIC = !1, GR.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, GR.REFLECTIONMAP_PROJECTION = !1, GR.REFLECTIONMAP_SKYBOX = !1, GR.REFLECTIONMAP_EXPLICIT = !1, GR.REFLECTIONMAP_EQUIRECTANGULAR = !1, GR.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, GR.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, GR.INVERTCUBICMAP = !1, GR.USESPHERICALFROMREFLECTIONMAP = !1, GR.USEIRRADIANCEMAP = !1, GR.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, GR.USESPHERICALINVERTEX = !1, GR.REFLECTIONMAP_OPPOSITEZ = !1, GR.LODINREFLECTIONALPHA = !1, GR.GAMMAREFLECTION = !1, GR.RGBDREFLECTION = !1, GR.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function HR(RR, JR, GR, yR, tR, ZR, qR) {
      switch (qR.needNormals = !0, void 0 === tR["LIGHT" + yR] && (qR.needRebuild = !0), tR["LIGHT" + yR] = !0, tR["SPOTLIGHT" + yR] = !1, tR["HEMILIGHT" + yR] = !1, tR["POINTLIGHT" + yR] = !1, tR["DIRLIGHT" + yR] = !1, tR["AREALIGHT" + yR] = !1, tR["CLUSTLIGHT" + yR] = !1, GR.prepareLightSpecificDefines(tR, yR), tR["LIGHT_FALLOFF_PHYSICAL" + yR] = !1, tR["LIGHT_FALLOFF_GLTF" + yR] = !1, tR["LIGHT_FALLOFF_STANDARD" + yR] = !1, GR.falloffType) {
        case uR.c.FALLOFF_GLTF:
          tR["LIGHT_FALLOFF_GLTF" + yR] = !0;
          break;
        case uR.c.FALLOFF_PHYSICAL:
          tR["LIGHT_FALLOFF_PHYSICAL" + yR] = !0;
          break;
        case uR.c.FALLOFF_STANDARD:
          tR["LIGHT_FALLOFF_STANDARD" + yR] = !0
      }
      if (ZR && !GR.specular.equalsFloats(0, 0, 0) && (qR.specularEnabled = !0), tR["SHADOW" + yR] = !1, tR["SHADOWCSM" + yR] = !1, tR["SHADOWCSMDEBUG" + yR] = !1, tR["SHADOWCSMNUM_CASCADES" + yR] = !1, tR["SHADOWCSMUSESHADOWMAXZ" + yR] = !1, tR["SHADOWCSMNOBLEND" + yR] = !1, tR["SHADOWCSM_RIGHTHANDED" + yR] = !1, tR["SHADOWPCF" + yR] = !1, tR["SHADOWPCSS" + yR] = !1, tR["SHADOWPOISSON" + yR] = !1, tR["SHADOWESM" + yR] = !1, tR["SHADOWCLOSEESM" + yR] = !1, tR["SHADOWCUBE" + yR] = !1, tR["SHADOWLOWQUALITY" + yR] = !1, tR["SHADOWMEDIUMQUALITY" + yR] = !1, JR && JR.receiveShadows && RR.shadowsEnabled && GR.shadowEnabled) {
        const JR = GR.getShadowGenerator(RR.activeCamera) ?? GR.getShadowGenerator();
        if (JR) {
          const RR = JR.getShadowMap();
          RR && RR.renderList && RR.renderList.length > 0 && (qR.shadowEnabled = !0, JR.prepareDefines(tR, yR))
        }
      }
      GR.lightmapMode != uR.c.LIGHTMAP_DEFAULT ? (qR.lightmapMode = !0, tR["LIGHTMAPEXCLUDED" + yR] = !0, tR["LIGHTMAPNOSPECULAR" + yR] = GR.lightmapMode == uR.c.LIGHTMAP_SHADOWSONLY) : (tR["LIGHTMAPEXCLUDED" + yR] = !1, tR["LIGHTMAPNOSPECULAR" + yR] = !1)
    }

    function oR(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        iR = function(RR, JR) {
          let GR = !1;
          if (RR.activeCamera) {
            const yR = JR.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              tR = JR.CAMERA_PERSPECTIVE ? 1 : 0,
              uR = 1 === RR.activeCamera.mode ? 1 : 0,
              ZR = 0 === RR.activeCamera.mode ? 1 : 0;
            (yR ^ uR || tR ^ ZR) && (JR.CAMERA_ORTHOGRAPHIC = 1 === uR, JR.CAMERA_PERSPECTIVE = 1 === ZR, GR = !0)
          }
          return GR
        }(RR, yR);
      !1 !== uR && (iR = (0, ZR.g)(GR, RR, yR)), yR.DEPTHPREPASS !== !JR.getColorWrite() && (yR.DEPTHPREPASS = !yR.DEPTHPREPASS, iR = !0), yR.INSTANCES !== tR && (yR.INSTANCES = tR, iR = !0), yR.THIN_INSTANCES !== qR && (yR.THIN_INSTANCES = qR, iR = !0), iR && yR.markAsUnprocessed()
    }
    const cR = 40,
      PR = 64,
      IR = new WeakMap,
      mR = new WeakSet;

    function zR(RR, JR, GR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        qR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!JR._areAttributesDirty && JR._needNormals === JR._normals && JR._needUVs === JR._uvs) return !1;
      JR._normals = JR._needNormals, JR._uvs = JR._needUVs, JR.NORMAL = JR._needNormals && RR.isVerticesDataPresent("normal"), JR._needNormals && RR.isVerticesDataPresent("tangent") && (JR.TANGENT = !0);
      for (let yR = 1; yR <= 6; ++yR) JR["UV" + yR] = !!JR._needUVs && RR.isVerticesDataPresent(`uv${1===yR?"":yR}`);
      if (GR) {
        const GR = RR.useVertexColors && RR.isVerticesDataPresent("color");
        JR.VERTEXCOLOR = GR, JR.VERTEXALPHA = RR.hasVertexAlpha && GR && ZR
      }
      return RR.isVerticesDataPresent("instanceColor") && (RR.PuR || RR.hasThinInstances) && (JR.INSTANCESCOLOR = !0), tR && function(RR, JR) {
        if (RR.useBones && RR.computeBonesUsingShaders && RR.skeleton) {
          JR.NUM_BONE_INFLUENCERS = RR.numBoneInfluencers;
          const GR = void 0 !== JR.BONETEXTURE;
          if (RR.skeleton.isUsingTextureForMatrices && GR) JR.BONETEXTURE = !0;
          else {
            JR.BonesPerMesh = RR.skeleton.bones.length + 1, JR.BONETEXTURE = !GR && void 0;
            const tR = RR.jH(),
              uR = tR.prePassRenderer;
            if (uR && uR.enabled) {
              const GR = -1 === uR.excludedSkinnedMesh.indexOf(RR);
              JR.BONES_VELOCITY_ENABLED = GR
            }
            const ZR = !0 === JR.MULTIVIEW,
              qR = 2 * JR.BonesPerMesh + (ZR ? 1 : 0);
            if (IR.get(RR.skeleton) !== qR) {
              IR.set(RR.skeleton, qR);
              const GR = tR.ke().getCaps().maxVertexUniformVectors;
              if (GR && !mR.has(RR.skeleton)) {
                const tR = 4 * JR.BonesPerMesh,
                  uR = ZR ? PR : cR,
                  qR = Math.max(GR - uR, 0);
                (tR > qR || ZR && 3 * tR > GR) && (mR.add(RR.skeleton), yR.c.Warn(`Skeleton "${RR.skeleton.name}": ${RR.skeleton.bones.length} bones stored as vertex uniforms use ${tR} of ~${qR} usable uniform vectors${ZR?" (multiview)":""} on a device reporting ${GR}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else JR.NUM_BONE_INFLUENCERS = 0, JR.BonesPerMesh = 0, void 0 !== JR.BONETEXTURE && (JR.BONETEXTURE = !1)
      }(RR, JR), uR && function(RR, JR) {
        const GR = RR.morphTargetManager;
        GR ? (JR.MORPHTARGETS_UV = GR.supportsUVs && JR.UV1, JR.MORPHTARGETS_UV2 = GR.supportsUV2s && JR.UV2, JR.MORPHTARGETS_TANGENT = GR.supportsTangents && JR.TANGENT, JR.MORPHTARGETS_NORMAL = GR.supportsNormals && JR.NORMAL, JR.MORPHTARGETS_POSITION = GR.supportsPositions, JR.MORPHTARGETS_COLOR = GR.supportsColors, JR.MORPHTARGETTEXTURE_HASUVS = GR.hasUVs, JR.MORPHTARGETTEXTURE_HASUV2S = GR.hasUV2s, JR.MORPHTARGETTEXTURE_HASTANGENTS = GR.hasTangents, JR.MORPHTARGETTEXTURE_HASNORMALS = GR.hasNormals, JR.MORPHTARGETTEXTURE_HASPOSITIONS = GR.hasPositions, JR.MORPHTARGETTEXTURE_HASCOLORS = GR.hasColors, JR.NUM_MORPH_INFLUENCERS = GR.numMaxInfluencers || GR.numInfluencers, JR.MORPHTARGETS = JR.NUM_MORPH_INFLUENCERS > 0, JR.MORPHTARGETS_TEXTURE = GR.isUsingTextureForTargets) : (JR.MORPHTARGETS_UV = !1, JR.MORPHTARGETS_UV2 = !1, JR.MORPHTARGETS_TANGENT = !1, JR.MORPHTARGETS_NORMAL = !1, JR.MORPHTARGETS_POSITION = !1, JR.MORPHTARGETS_COLOR = !1, JR.MORPHTARGETTEXTURE_HASUVS = !1, JR.MORPHTARGETTEXTURE_HASUV2S = !1, JR.MORPHTARGETTEXTURE_HASTANGENTS = !1, JR.MORPHTARGETTEXTURE_HASNORMALS = !1, JR.MORPHTARGETTEXTURE_HASPOSITIONS = !1, JR.MORPHTARGETTEXTURE_HAS_COLORS = !1, JR.MORPHTARGETS = !1, JR.NUM_MORPH_INFLUENCERS = 0)
      }(RR, JR), qR && function(RR, JR) {
        const GR = RR.bakedVertexAnimationManager;
        JR.BAKED_VERTEX_ANIMATION_TEXTURE = !(!GR || !GR.isEnabled)
      }(RR, JR), !0
    }

    function SR(RR, JR) {
      if (RR.activeCamera) {
        const GR = JR.MULTIVIEW;
        JR.MULTIVIEW = null !== RR.activeCamera.outputRenderTarget && RR.activeCamera.outputRenderTarget.getViewCount() > 1, JR.MULTIVIEW != GR && JR.markAsUnprocessed()
      }
    }

    function jR(RR, JR, GR) {
      const yR = JR.ORDER_INDEPENDENT_TRANSPARENCY,
        tR = JR.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      JR.ORDER_INDEPENDENT_TRANSPARENCY = RR.useOrderIndependentTransparency && GR, JR.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !RR.ke().getCaps().textureFloatLinearFiltering, yR === JR.ORDER_INDEPENDENT_TRANSPARENCY && tR === JR.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || JR.markAsUnprocessed()
    }

    function dR(RR, JR, GR) {
      const yR = JR.PREPASS;
      if (!JR._arePrePassDirty) return;
      const tR = [{
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
      if (RR.prePassRenderer && RR.prePassRenderer.enabled && GR) {
        JR.PREPASS = !0, JR.SCENE_MRT_COUNT = RR.prePassRenderer.mrtCount, JR.PREPASS_NORMAL_WORLDSPACE = RR.prePassRenderer.generateNormalsInWorldSpace, JR.PREPASS_COLOR = !0, JR.PREPASS_COLOR_INDEX = 0;
        for (let GR = 0; GR < tR.length; GR++) {
          const yR = RR.prePassRenderer.getIndex(tR[GR].type); - 1 !== yR ? (JR[tR[GR].define] = !0, JR[tR[GR].index] = yR) : JR[tR[GR].define] = !1
        }
      } else {
        JR.PREPASS = !1;
        for (let RR = 0; RR < tR.length; RR++) JR[tR[RR].define] = !1
      }
      JR.PREPASS != yR && (JR.markAsUnprocessed(), JR.markAsImageProcessingDirty())
    }

    function ER(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      tR && tR.push("Light" + RR), uR || (JR.push("vLightData" + RR, "vLightDiffuse" + RR, "vLightSpecular" + RR, "vLightDirection" + RR, "vLightWidth" + RR, "vLightHeight" + RR, "vLightFalloff" + RR, "vLightGround" + RR, "vSliceData" + RR, "vSliceRanges" + RR, "lightMatrix" + RR, "shadowsInfo" + RR, "depthValues" + RR), GR.push("shadowTexture" + RR), GR.push("depthTexture" + RR), JR.push("viewFrustumZ" + RR, "cascadeBlendFactor" + RR, "lightSizeUVCorrection" + RR, "depthCorrection" + RR, "penumbraDarkness" + RR, "frustumLengths" + RR), yR && (GR.push("projectionLightTexture" + RR), JR.push("textureProjectionMatrix" + RR)), ZR && GR.push("iesLightTexture" + RR), iR && GR.push("rectAreaLightEmissionTexture" + RR), qR && (GR.push("lightDataTexture" + RR), fR || GR.push("tileMaskTexture" + RR)))
    }

    function YR(RR, JR, GR) {
      const yR = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      GR && yR.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), RR.push(...yR);
      JR.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function kR(RR, JR, GR) {
      let yR, tR, uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        ZR = null;
      if (RR.uniformsNames) {
        const qR = RR;
        yR = qR.uniformsNames, tR = qR.uniformBuffersNames, JR = qR.samplers, GR = qR.defines, uR = qR.maxSimultaneousLights || 0, ZR = qR.shaderLanguage ?? null
      } else yR = RR, JR || (JR = []);
      for (let qR = 0; qR < uR && GR["LIGHT" + qR]; qR++) ER(qR, yR, JR, GR["PROJECTEDLIGHTTEXTURE" + qR], tR, !1, GR["IESLIGHTTEXTURE" + qR], GR["CLUSTLIGHT" + qR], GR["RECTAREALIGHTEMISSIONTEXTURE" + qR], 1 === ZR);
      GR.NUM_MORPH_INFLUENCERS && (yR.push("morphTargetInfluences"), yR.push("morphTargetCount")), GR.BAKED_VERTEX_ANIMATION_TEXTURE && (yR.push("bakedVertexAnimationSettings"), yR.push("bakedVertexAnimationTextureSizeInverted"), yR.push("bakedVertexAnimationTime"), JR.push("bakedVertexAnimationTexture"))
    }

    function QR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      RR.addUniform("vReflectionInfos", 2), RR.addUniform("reflectionMatrix", 16), JR && RR.addUniform("vReflectionMicrosurfaceInfos", 3), GR && (RR.addUniform("vReflectionPosition", 3), RR.addUniform("vReflectionSize", 3)), yR && (RR.addUniform("vReflectionFilteringInfo", 2), RR.addUniform("vReflectionDominantDirection", 3)), uR && RR.addUniform("vReflectionColor", 3), tR && (RR.addUniform("vSphericalL00", 3), RR.addUniform("vSphericalL1_1", 3), RR.addUniform("vSphericalL10", 3), RR.addUniform("vSphericalL11", 3), RR.addUniform("vSphericalL2_2", 3), RR.addUniform("vSphericalL2_1", 3), RR.addUniform("vSphericalL20", 3), RR.addUniform("vSphericalL21", 3), RR.addUniform("vSphericalL22", 3), RR.addUniform("vSphericalX", 3), RR.addUniform("vSphericalY", 3), RR.addUniform("vSphericalZ", 3), RR.addUniform("vSphericalXX_ZZ", 3), RR.addUniform("vSphericalYY_ZZ", 3), RR.addUniform("vSphericalZZ", 3), RR.addUniform("vSphericalXY", 3), RR.addUniform("vSphericalYZ", 3), RR.addUniform("vSphericalZX", 3))
    }
  },
  41869: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(38204),
      tR = GR(41810);
    class uR extends tR.d {
      constructor(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(RR, JR, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new yR.e, this._storeEffectOnSubMeshes = GR
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(RR, JR) {
        return !!RR && (!this._storeEffectOnSubMeshes || (!RR.XM || 0 === RR.XM.length || this.isReadyForSubMesh(RR, RR.XM[0], JR)))
      }
      _isReadyForSubMesh(RR) {
        const JR = RR.materialDefines;
        return !(this.checkReadyOnEveryCall || !RR.effect || !JR || JR._renderId !== this.jH().getRenderId())
      }
      bindOnlyWorldMatrix(RR) {
        this._activeEffect.setMatrix("world", RR)
      }
      bindOnlyNormalMatrix(RR) {
        this._activeEffect.setMatrix("normalMatrix", RR)
      }
      bind(RR, JR) {
        JR && this.bindForSubMesh(RR, JR, JR.XM[0])
      }
      _afterBind(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(RR, JR, GR), this.jH()._cachedEffect = JR, GR ? GR._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return GR._drawWrapper._forceRebindOnNextCall || RR.isCachedMaterialInvalid(this, JR, yR)
      }
      dispose(RR, JR, GR) {
        this._activeEffect = void 0, super.dispose(RR, JR, GR)
      }
    }
  },
  41897: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => tR
    });
    const yR = new WeakMap;

    function tR(RR) {
      const JR = RR.getVertexBuffers();
      if (!JR) return null;
      let GR = yR.get(RR);
      if (GR) {
        let RR = !1;
        for (const yR in JR)
          if (!GR.has(yR)) {
            RR = !0;
            break
          } if (!RR) return GR
      } else GR = new Map, yR.set(RR, GR);
      for (const yR in JR) {
        const RR = JR[yR];
        if (RR) {
          const JR = RR.byteOffset,
            tR = RR.byteStride,
            uR = RR.type,
            ZR = RR.normalized;
          GR.set(yR, {
            offset: JR,
            stride: tR,
            type: uR,
            normalized: ZR
          })
        }
      }
      return GR
    }

    function uR(RR, JR) {
      JR.forEach(((JR, GR) => {
        const yR = `vp_${GR}_info`;
        RR.setFloat4(yR, JR.offset, JR.stride, JR.type, JR.normalized ? 1 : 0)
      }))
    }
  },
  41835: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      c: () => iR
    });
    var yR = GR(41520),
      tR = GR(38204),
      uR = GR(41524);
    let ZR = (() => {
      var RR;
      let JR, GR, tR = [];
      return RR = class {
        static extractMinAndMaxIndexed(RR, JR, GR, yR, tR, uR) {
          for (let ZR = GR; ZR < GR + yR; ZR++) {
            const GR = 3 * JR[ZR],
              yR = RR[GR],
              qR = RR[GR + 1],
              iR = RR[GR + 2];
            tR.minimizeInPlaceFromFloats(yR, qR, iR), uR.maximizeInPlaceFromFloats(yR, qR, iR)
          }
        }
        static extractMinAndMax(RR, JR, GR, yR, tR, uR) {
          for (let ZR = JR, qR = JR * yR; ZR < JR + GR; ZR++, qR += yR) {
            const JR = RR[qR],
              GR = RR[qR + 1],
              yR = RR[qR + 2];
            tR.minimizeInPlaceFromFloats(JR, GR, yR), uR.maximizeInPlaceFromFloats(JR, GR, yR)
          }
        }
      }, (() => {
        const ZR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [uR.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], GR = [uR.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, yR.l)(RR, null, JR, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: RR => "extractMinAndMaxIndexed" in RR,
            get: RR => RR.extractMinAndMaxIndexed
          },
          metadata: ZR
        }, null, tR), (0, yR.l)(RR, null, GR, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: RR => "extractMinAndMax" in RR,
            get: RR => RR.extractMinAndMax
          },
          metadata: ZR
        }, null, tR), ZR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZR
        }), (0, yR.m)(RR, tR)
      })(), RR
    })();

    function qR(RR, JR, GR, yR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const qR = new tR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        iR = new tR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return ZR.extractMinAndMaxIndexed(RR, JR, GR, yR, qR, iR), uR && (qR.x -= qR.x * uR.x + uR.y, qR.y -= qR.y * uR.x + uR.y, qR.z -= qR.z * uR.x + uR.y, iR.x += iR.x * uR.x + uR.y, iR.y += iR.y * uR.x + uR.y, iR.z += iR.z * uR.x + uR.y), {
        minimum: qR,
        maximum: iR
      }
    }

    function iR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        uR = arguments.length > 4 ? arguments[4] : void 0;
      const qR = new tR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        iR = new tR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return uR || (uR = 3), ZR.extractMinAndMax(RR, JR, GR, uR, qR, iR), yR && (qR.x -= qR.x * yR.x + yR.y, qR.y -= qR.y * yR.x + yR.y, qR.z -= qR.z * yR.x + yR.y, iR.x += iR.x * yR.x + yR.y, iR.y += iR.y * yR.x + yR.y, iR.z += iR.z * yR.x + yR.y), {
        minimum: qR,
        maximum: iR
      }
    }
  },
  41813: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR
    });
    var yR, tR = GR(41663),
      uR = GR(41815),
      ZR = GR(41822),
      qR = GR(41835),
      iR = GR(41844),
      fR = GR(41407);
    class VR {
      get materialDefines() {
        const RR = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof RR ? null : RR
      }
      set materialDefines(RR) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = RR
      }
      _getDrawWrapper(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        RR = RR ?? this._engine.currentRenderPassId;
        let GR = this._drawWrappers[RR];
        return !GR && JR && (this._drawWrappers[RR] = GR = new iR.c(this._mesh.jH().ke())), GR
      }
      _removeDrawWrapper(RR) {
        let JR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[RR]?.dispose(JR), this._drawWrappers[RR] = void 0
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
      _setMainDrawWrapperOverride(RR) {
        this._mainDrawWrapperOverride = RR
      }
      setEffect(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const tR = this._drawWrapper;
        tR.setEffect(RR, JR, yR), void 0 !== GR && (tR.materialContext = GR), RR || (tR.defines = null, tR.materialContext = void 0)
      }
      resetDrawCache(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== RR) return void this._removeDrawWrapper(RR, !0, JR);
          for (const RR of this._drawWrappers) RR?.dispose(JR)
        }
        this._drawWrappers = []
      }
      static AddToMesh(RR, JR, GR, yR, tR, uR, ZR) {
        return new VR(RR, JR, GR, yR, tR, uR, ZR, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(RR, JR, GR, yR, tR, uR, ZR) {
        let qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          iR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = RR, this.verticesStart = JR, this.verticesCount = GR, this.indexStart = yR, this.indexCount = tR, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = uR, this._renderingMesh = ZR || uR, iR && uR.XM.push(this), this._engine = this._mesh.jH().ke(), this.resetDrawCache(), this._trianglePlanes = [], this._id = uR.XM.length - 1, qR && (this.refreshBoundingInfo(), uR.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      Tm() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.Tm() : this._boundingInfo
      }
      setBoundingInfo(RR) {
        return this._boundingInfo = RR, this
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
        const RR = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return RR || this._renderingMesh
      }
      he() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const JR = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!JR) return RR && this._mesh.jH()._hasDefaultMaterial ? this._mesh.jH().defaultMaterial : null;
        if (this._isMultiMaterial(JR)) {
          const RR = JR.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== RR && (this._currentMaterial = RR, this.resetDrawCache()), RR
        }
        return JR
      }
      _isMultiMaterial(RR) {
        return void 0 !== RR.getSubMaterial
      }
      refreshBoundingInfo() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (RR || (RR = this._renderingMesh.getVerticesData(tR.l.PositionKind)), !RR) return this._boundingInfo = this._mesh.Tm(), this;
        const JR = this._renderingMesh.NuR();
        let GR;
        if (0 === this.indexStart && this.indexCount === JR.length) {
          const RR = this._renderingMesh.Tm();
          GR = {
            minimum: RR.minimum.clone(),
            maximum: RR.maximum.clone()
          }
        } else GR = (0, qR.b)(RR, JR, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(GR.minimum, GR.maximum) : this._boundingInfo = new ZR.c(GR.minimum, GR.maximum), this
      }
      _checkCollision(RR) {
        return this.Tm()._checkCollision(RR)
      }
      updateBoundingInfo(RR) {
        let JR = this.Tm();
        return JR || (this.refreshBoundingInfo(), JR = this.Tm()), JR && JR.update(RR), this
      }
      isInFrustum(RR) {
        const JR = this.Tm();
        return !!JR && JR.isInFrustum(RR, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(RR) {
        const JR = this.Tm();
        return !!JR && JR.isCompletelyInFrustum(RR)
      }
      render(RR) {
        return this._renderingMesh.render(this, RR, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(RR, JR) {
        if (!this._linesIndexBuffer) {
          const GR = 6 * Math.floor(this.indexCount / 3),
            yR = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(GR) : new Uint16Array(GR);
          let tR = 0;
          if (0 === RR.length)
            for (let RR = this.indexStart; RR < this.indexStart + this.indexCount; RR += 3) yR[tR++] = RR, yR[tR++] = RR + 1, yR[tR++] = RR + 1, yR[tR++] = RR + 2, yR[tR++] = RR + 2, yR[tR++] = RR;
          else
            for (let JR = this.indexStart; JR < this.indexStart + this.indexCount; JR += 3) yR[tR++] = RR[JR], yR[tR++] = RR[JR + 1], yR[tR++] = RR[JR + 1], yR[tR++] = RR[JR + 2], yR[tR++] = RR[JR + 2], yR[tR++] = RR[JR];
          this._linesIndexBuffer = JR.createIndexBuffer(yR), this._linesIndexCount = yR.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(RR) {
        const JR = this.Tm();
        return !!JR && RR.intersectsBox(JR.boundingBox)
      }
      intersects(RR, JR, GR, yR, tR) {
        const uR = this.he();
        if (!uR) return null;
        let ZR = 3,
          qR = !1;
        switch (uR.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            ZR = 1, qR = !0
        }
        return 4 === uR.fillMode ? GR.length ? this._intersectLines(RR, JR, GR, this._mesh.intersectionThreshold, yR) : this._intersectUnIndexedLines(RR, JR, GR, this._mesh.intersectionThreshold, yR) : !GR.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(RR, JR, GR, yR, tR) : this._intersectTriangles(RR, JR, GR, ZR, qR, yR, tR)
      }
      _intersectLines(RR, JR, GR, yR, tR) {
        let ZR = null;
        for (let qR = this.indexStart; qR < this.indexStart + this.indexCount; qR += 2) {
          const iR = JR[GR[qR]],
            fR = JR[GR[qR + 1]],
            VR = RR.intersectionSegment(iR, fR, yR);
          if (!(VR < 0) && ((tR || !ZR || VR < ZR.distance) && (ZR = new uR.e(null, null, VR), ZR.faceId = qR / 2, tR))) break
        }
        return ZR
      }
      _intersectUnIndexedLines(RR, JR, GR, yR, tR) {
        let ZR = null;
        for (let qR = this.verticesStart; qR < this.verticesStart + this.verticesCount; qR += 2) {
          const GR = JR[qR],
            iR = JR[qR + 1],
            fR = RR.intersectionSegment(GR, iR, yR);
          if (!(fR < 0) && ((tR || !ZR || fR < ZR.distance) && (ZR = new uR.e(null, null, fR), ZR.faceId = qR / 2, tR))) break
        }
        return ZR
      }
      _intersectTriangles(RR, JR, GR, yR, tR, uR, ZR) {
        let qR = null,
          iR = -1;
        for (let fR = this.indexStart; fR < this.indexStart + this.indexCount - (3 - yR); fR += yR) {
          iR++;
          const yR = GR[fR],
            VR = GR[fR + 1],
            KR = GR[fR + 2];
          if (tR && 4294967295 === KR) {
            fR += 2;
            continue
          }
          const wR = JR[yR],
            rR = JR[VR],
            eR = JR[KR];
          if (!wR || !rR || !eR) continue;
          if (ZR && !ZR(wR, rR, eR, RR, yR, VR, KR)) continue;
          const aR = RR.intersectsTriangle(wR, rR, eR);
          if (aR) {
            if (aR.distance < 0) continue;
            if ((uR || !qR || aR.distance < qR.distance) && (qR = aR, qR.faceId = iR, uR)) break
          }
        }
        return qR
      }
      _intersectUnIndexedTriangles(RR, JR, GR, yR, tR) {
        let uR = null;
        for (let ZR = this.verticesStart; ZR < this.verticesStart + this.verticesCount; ZR += 3) {
          const GR = JR[ZR],
            qR = JR[ZR + 1],
            iR = JR[ZR + 2];
          if (tR && !tR(GR, qR, iR, RR, -1, -1, -1)) continue;
          const fR = RR.intersectsTriangle(GR, qR, iR);
          if (fR) {
            if (fR.distance < 0) continue;
            if ((yR || !uR || fR.distance < uR.distance) && (uR = fR, uR.faceId = ZR / 3, yR)) break
          }
        }
        return uR
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(RR, JR) {
        const GR = new VR(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, RR, JR, !1);
        if (!this.IsGlobal) {
          const RR = this.Tm();
          if (!RR) return GR;
          GR._boundingInfo = new ZR.c(RR.minimum, RR.maximum)
        }
        return GR
      }
      dispose() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.jH().ke()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const JR = this._mesh.XM.indexOf(this);
        this._mesh.XM.splice(JR, 1), this.resetDrawCache(void 0, RR)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(RR, JR, GR, yR, tR) {
        let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = Number.MAX_VALUE,
          qR = -Number.MAX_VALUE;
        const iR = (tR || yR).NuR();
        for (let fR = JR; fR < JR + GR; fR++) {
          const RR = iR[fR];
          RR < ZR && (ZR = RR), RR > qR && (qR = RR)
        }
        return new VR(RR, ZR, qR - ZR + 1, JR, GR, yR, tR, uR)
      }
    }(yR = VR.prototype).projectToRef ?? (yR.projectToRef = (0, fR.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);