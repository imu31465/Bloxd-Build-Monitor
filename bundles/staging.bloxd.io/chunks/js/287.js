export const id = 287;
export const ids = [287];
export const modules = {
  41563: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor(VV, eV, xV) {
        this.bu = VV, this.bv = eV, this.distance = xV, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  41572: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(38278),
      YV = xV(38269),
      UV = xV(38272);
    class yV {
      constructor(VV, eV, xV) {
        this.vectors = (0, JV.e)(8, YV.o.Zero), this.center = YV.o.Zero(), this.centerWorld = YV.o.Zero(), this.extendSize = YV.o.Zero(), this.extendSizeWorld = YV.o.Zero(), this.directions = (0, JV.e)(3, YV.o.Zero), this.vectorsWorld = (0, JV.e)(8, YV.o.Zero), this.minimumWorld = YV.o.Zero(), this.maximumWorld = YV.o.Zero(), this.minimum = YV.o.Zero(), this.maximum = YV.o.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(VV, eV, xV)
      }
      reConstruct(VV, eV, xV) {
        const JV = VV.x,
          UV = VV.y,
          yV = VV.z,
          pV = eV.x,
          QV = eV.y,
          nV = eV.z,
          wV = this.vectors;
        this.minimum.FeV(JV, UV, yV), this.maximum.FeV(pV, QV, nV), wV[0].FeV(JV, UV, yV), wV[1].FeV(pV, QV, nV), wV[2].FeV(pV, UV, yV), wV[3].FeV(JV, QV, yV), wV[4].FeV(JV, UV, nV), wV[5].FeV(pV, QV, yV), wV[6].FeV(JV, QV, nV), wV[7].FeV(pV, UV, nV), eV.addToRef(VV, this.center).scaleInPlace(.5), eV.subtractToRef(VV, this.extendSize).scaleInPlace(.5), this._worldMatrix = xV || YV.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(VV) {
        const eV = yV._TmpVector3,
          xV = this.maximum.subtractToRef(this.minimum, eV[0]),
          JV = xV.length();
        xV.normalizeFromLength(JV);
        const YV = JV * VV,
          UV = xV.scaleInPlace(.5 * YV),
          pV = this.center.subtractToRef(UV, eV[1]),
          QV = this.center.addToRef(UV, eV[2]);
        return this.reConstruct(pV, QV, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(VV) {
        const eV = this.minimumWorld,
          xV = this.maximumWorld,
          JV = this.directions,
          UV = this.vectorsWorld,
          yV = this.vectors;
        if (VV.isIdentity()) {
          eV.iG(this.minimum), xV.iG(this.maximum);
          for (let VV = 0; VV < 8; ++VV) UV[VV].iG(yV[VV]);
          this.extendSizeWorld.iG(this.extendSize), this.centerWorld.iG(this.center)
        } else {
          eV.HVV(Number.MAX_VALUE), xV.HVV(-Number.MAX_VALUE);
          for (let JV = 0; JV < 8; ++JV) {
            const pV = UV[JV];
            YV.o.TransformCoordinatesToRef(yV[JV], VV, pV), eV.minimizeInPlace(pV), xV.maximizeInPlace(pV)
          }
          xV.subtractToRef(eV, this.extendSizeWorld).scaleInPlace(.5), xV.addToRef(eV, this.centerWorld).scaleInPlace(.5)
        }
        YV.o.FromArrayToRef(VV.m, 0, JV[0]), YV.o.FromArrayToRef(VV.m, 4, JV[1]), YV.o.FromArrayToRef(VV.m, 8, JV[2]), this._worldMatrix = VV
      }
      isInFrustum(VV) {
        return yV.IsInFrustum(this.vectorsWorld, VV)
      }
      isCompletelyInFrustum(VV) {
        return yV.IsCompletelyInFrustum(this.vectorsWorld, VV)
      }
      intersectsPoint(VV) {
        const eV = this.minimumWorld,
          xV = this.maximumWorld,
          JV = eV.x,
          YV = eV.y,
          yV = eV.z,
          pV = xV.x,
          QV = xV.y,
          nV = xV.z,
          wV = VV.x,
          ZV = VV.y,
          vV = VV.z,
          rV = -UV.b;
        return !(pV - wV < rV || rV > wV - JV) && (!(QV - ZV < rV || rV > ZV - YV) && !(nV - vV < rV || rV > vV - yV))
      }
      intersectsSphere(VV) {
        return yV.IntersectsSphere(this.minimumWorld, this.maximumWorld, VV.centerWorld, VV.radiusWorld)
      }
      intersectsMinMax(VV, eV) {
        const xV = this.minimumWorld,
          JV = this.maximumWorld,
          YV = xV.x,
          UV = xV.y,
          yV = xV.z,
          pV = JV.x,
          QV = JV.y,
          nV = JV.z,
          wV = VV.x,
          ZV = VV.y,
          vV = VV.z,
          rV = eV.x,
          kV = eV.y,
          bV = eV.z;
        return !(pV < wV || YV > rV) && (!(QV < ZV || UV > kV) && !(nV < vV || yV > bV))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(VV, eV) {
        return VV.intersectsMinMax(eV.minimumWorld, eV.maximumWorld)
      }
      static IntersectsSphere(VV, eV, xV, JV) {
        const UV = yV._TmpVector3[0];
        YV.o.ClampToRef(xV, VV, eV, UV);
        return YV.o.DistanceSquared(xV, UV) <= JV * JV
      }
      static IsCompletelyInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; ++xV) {
          const JV = eV[xV];
          for (let eV = 0; eV < 8; ++eV)
            if (JV.dotCoordinate(VV[eV]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; ++xV) {
          let JV = !0;
          const YV = eV[xV];
          for (let eV = 0; eV < 8; ++eV)
            if (YV.dotCoordinate(VV[eV]) >= 0) {
              JV = !1;
              break
            } if (JV) return !1
        }
        return !0
      }
    }
    yV._TmpVector3 = (0, JV.e)(3, YV.o.Zero)
  },
  41566: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ZV
    });
    var JV = xV(38278),
      YV = xV(38269),
      UV = xV(41572);
    class yV {
      constructor(VV, eV, xV) {
        this.center = YV.o.Zero(), this.centerWorld = YV.o.Zero(), this.minimum = YV.o.Zero(), this.maximum = YV.o.Zero(), this.reConstruct(VV, eV, xV)
      }
      reConstruct(VV, eV, xV) {
        this.minimum.iG(VV), this.maximum.iG(eV);
        const JV = YV.o.Distance(VV, eV);
        eV.addToRef(VV, this.center).scaleInPlace(.5), this.radius = .5 * JV, this._update(xV || YV.d.IdentityReadOnly)
      }
      scale(VV) {
        const eV = yV._TmpVector3,
          xV = this.maximum.subtractToRef(this.minimum, eV[0]),
          JV = xV.length();
        xV.normalizeFromLength(JV);
        const YV = JV * VV,
          UV = xV.scaleInPlace(.5 * YV),
          pV = this.center.subtractToRef(UV, eV[1]),
          QV = this.center.addToRef(UV, eV[2]);
        return this.reConstruct(pV, QV, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(VV) {
        if (VV.isIdentity()) this.centerWorld.iG(this.center), this.radiusWorld = this.radius;
        else {
          YV.o.TransformCoordinatesToRef(this.center, VV, this.centerWorld);
          const eV = yV._TmpVector3[0];
          YV.o.TransformNormalFromFloatsToRef(1, 1, 1, VV, eV), this.radiusWorld = Math.max(Math.abs(eV.x), Math.abs(eV.y), Math.abs(eV.z)) * this.radius
        }
      }
      isInFrustum(VV) {
        const eV = this.centerWorld,
          xV = this.radiusWorld;
        for (let JV = 0; JV < 6; JV++)
          if (VV[JV].dotCoordinate(eV) <= -xV) return !1;
        return !0
      }
      isCenterInFrustum(VV) {
        const eV = this.centerWorld;
        for (let xV = 0; xV < 6; xV++)
          if (VV[xV].dotCoordinate(eV) < 0) return !1;
        return !0
      }
      intersectsPoint(VV) {
        const eV = YV.o.DistanceSquared(this.centerWorld, VV);
        return !(this.radiusWorld * this.radiusWorld < eV)
      }
      static Intersects(VV, eV) {
        const xV = YV.o.DistanceSquared(VV.centerWorld, eV.centerWorld),
          JV = VV.radiusWorld + eV.radiusWorld;
        return !(JV * JV < xV)
      }
      static CreateFromCenterAndRadius(VV, eV, xV) {
        this._TmpVector3[0].iG(VV), this._TmpVector3[1].FeV(0, 0, eV), this._TmpVector3[2].iG(VV), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].IYV(this._TmpVector3[1]);
        const JV = new yV(this._TmpVector3[0], this._TmpVector3[2]);
        return JV._worldMatrix = xV || YV.d.Identity(), JV
      }
    }
    yV._TmpVector3 = (0, JV.e)(3, YV.o.Zero);
    const pV = {
        min: 0,
        max: 0
      },
      QV = {
        min: 0,
        max: 0
      },
      nV = (VV, eV, xV) => {
        const JV = YV.o.Dot(eV.centerWorld, VV),
          UV = Math.abs(YV.o.Dot(eV.directions[0], VV)) * eV.extendSize.x + Math.abs(YV.o.Dot(eV.directions[1], VV)) * eV.extendSize.y + Math.abs(YV.o.Dot(eV.directions[2], VV)) * eV.extendSize.z;
        xV.min = JV - UV, xV.max = JV + UV
      },
      wV = (VV, eV, xV) => (nV(VV, eV, pV), nV(VV, xV, QV), !(pV.min > QV.max || QV.min > pV.max));
    class ZV {
      constructor(VV, eV, xV) {
        this._isLocked = !1, this.boundingBox = new UV.d(VV, eV, xV), this.xUV = new yV(VV, eV, xV)
      }
      reConstruct(VV, eV, xV) {
        this.boundingBox.reConstruct(VV, eV, xV), this.xUV.reConstruct(VV, eV, xV)
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
      set isLocked(VV) {
        this._isLocked = VV
      }
      update(VV) {
        this._isLocked || (this.boundingBox._update(VV), this.xUV._update(VV))
      }
      centerOn(VV, eV) {
        const xV = ZV._TmpVector3[0].iG(VV).IYV(eV),
          JV = ZV._TmpVector3[1].iG(VV).addInPlace(eV);
        return this.boundingBox.reConstruct(xV, JV, this.boundingBox.getWorldMatrix()), this.xUV.reConstruct(xV, JV, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(VV) {
        const eV = YV.o.Minimize(this.minimum, VV),
          xV = YV.o.Maximize(this.maximum, VV);
        return this.reConstruct(eV, xV, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(VV) {
        const eV = YV.l.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(eV);
        const xV = YV.l.Ik[0];
        return YV.o.TransformCoordinatesToRef(VV.boundingBox.minimumWorld, eV, xV), this.encapsulate(xV), YV.o.TransformCoordinatesToRef(VV.boundingBox.maximumWorld, eV, xV), this.encapsulate(xV), this
      }
      scale(VV) {
        return this.boundingBox.scale(VV), this.xUV.scale(VV), this
      }
      isInFrustum(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === eV || 3 === eV) && this.xUV.isCenterInFrustum(VV)) return !0;
        if (!this.xUV.isInFrustum(VV)) return !1;
        return !(1 !== eV && 3 !== eV) || this.boundingBox.isInFrustum(VV)
      }
      get diagonalLength() {
        const VV = this.boundingBox;
        return VV.maximumWorld.subtractToRef(VV.minimumWorld, ZV._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(VV) {
        return this.boundingBox.isCompletelyInFrustum(VV)
      }
      _checkCollision(VV) {
        return VV._canDoCollision(this.xUV.centerWorld, this.xUV.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(VV) {
        return !!this.xUV.centerWorld && (!!this.xUV.intersectsPoint(VV) && !!this.boundingBox.intersectsPoint(VV))
      }
      intersects(VV, eV) {
        if (!yV.Intersects(this.xUV, VV.xUV)) return !1;
        if (!UV.d.Intersects(this.boundingBox, VV.boundingBox)) return !1;
        if (!eV) return !0;
        const xV = this.boundingBox,
          JV = VV.boundingBox;
        return !!wV(xV.directions[0], xV, JV) && (!!wV(xV.directions[1], xV, JV) && (!!wV(xV.directions[2], xV, JV) && (!!wV(JV.directions[0], xV, JV) && (!!wV(JV.directions[1], xV, JV) && (!!wV(JV.directions[2], xV, JV) && (!!wV(YV.o.Cross(xV.directions[0], JV.directions[0]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[0], JV.directions[1]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[0], JV.directions[2]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[1], JV.directions[0]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[1], JV.directions[1]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[1], JV.directions[2]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[2], JV.directions[0]), xV, JV) && (!!wV(YV.o.Cross(xV.directions[2], JV.directions[1]), xV, JV) && !!wV(YV.o.Cross(xV.directions[2], JV.directions[2]), xV, JV))))))))))))))
      }
    }
    ZV._TmpVector3 = (0, JV.e)(2, YV.o.Zero)
  },
  41591: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => QV,
      i: () => pV,
      k: () => yV
    });
    var JV = xV(41405),
      YV = xV(38269);

    function UV(VV) {
      -1 === VV.indexOf("vClipPlane") && VV.push("vClipPlane"), -1 === VV.indexOf("vClipPlane2") && VV.push("vClipPlane2"), -1 === VV.indexOf("vClipPlane3") && VV.push("vClipPlane3"), -1 === VV.indexOf("vClipPlane4") && VV.push("vClipPlane4"), -1 === VV.indexOf("vClipPlane5") && VV.push("vClipPlane5"), -1 === VV.indexOf("vClipPlane6") && VV.push("vClipPlane6")
    }

    function yV(VV, eV, xV) {
      const JV = !!(VV.clipPlane ?? eV.clipPlane),
        YV = !!(VV.clipPlane2 ?? eV.clipPlane2),
        UV = !!(VV.clipPlane3 ?? eV.clipPlane3),
        yV = !!(VV.clipPlane4 ?? eV.clipPlane4),
        pV = !!(VV.clipPlane5 ?? eV.clipPlane5),
        QV = !!(VV.clipPlane6 ?? eV.clipPlane6);
      JV && xV.push("#define CLIPPLANE"), YV && xV.push("#define CLIPPLANE2"), UV && xV.push("#define CLIPPLANE3"), yV && xV.push("#define CLIPPLANE4"), pV && xV.push("#define CLIPPLANE5"), QV && xV.push("#define CLIPPLANE6")
    }

    function pV(VV, eV, xV) {
      let JV = !1;
      const YV = !!(VV.clipPlane ?? eV.clipPlane),
        UV = !!(VV.clipPlane2 ?? eV.clipPlane2),
        yV = !!(VV.clipPlane3 ?? eV.clipPlane3),
        pV = !!(VV.clipPlane4 ?? eV.clipPlane4),
        QV = !!(VV.clipPlane5 ?? eV.clipPlane5),
        nV = !!(VV.clipPlane6 ?? eV.clipPlane6);
      return xV.CLIPPLANE !== YV && (xV.CLIPPLANE = YV, JV = !0), xV.CLIPPLANE2 !== UV && (xV.CLIPPLANE2 = UV, JV = !0), xV.CLIPPLANE3 !== yV && (xV.CLIPPLANE3 = yV, JV = !0), xV.CLIPPLANE4 !== pV && (xV.CLIPPLANE4 = pV, JV = !0), xV.CLIPPLANE5 !== QV && (xV.CLIPPLANE5 = QV, JV = !0), xV.CLIPPLANE6 !== nV && (xV.CLIPPLANE6 = nV, JV = !0), JV
    }

    function QV(VV, eV, xV) {
      let JV = eV.clipPlane ?? xV.clipPlane;
      nV(VV, "vClipPlane", JV), JV = eV.clipPlane2 ?? xV.clipPlane2, nV(VV, "vClipPlane2", JV), JV = eV.clipPlane3 ?? xV.clipPlane3, nV(VV, "vClipPlane3", JV), JV = eV.clipPlane4 ?? xV.clipPlane4, nV(VV, "vClipPlane4", JV), JV = eV.clipPlane5 ?? xV.clipPlane5, nV(VV, "vClipPlane5", JV), JV = eV.clipPlane6 ?? xV.clipPlane6, nV(VV, "vClipPlane6", JV)
    }

    function nV(VV, eV, xV) {
      if (xV) {
        const UV = JV.e.dD()?.floatingOriginOffset || YV.o.ZeroReadOnly;
        VV.setFloat4(eV, xV.normal.x, xV.normal.y, xV.normal.z, xV.d + YV.o.Dot(xV.normal, UV))
      }
    }
  },
  41610: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(VV, eV) {
        this._defines[VV] || (VV < this._currentRank && (this._currentRank = VV), VV > this._maxRank && (this._maxRank = VV), this._defines[VV] = new Array), this._defines[VV].push(eV)
      }
      addCPUSkinningFallback(VV, eV) {
        this._mesh = eV, VV < this._currentRank && (this._currentRank = VV), VV > this._maxRank && (this._maxRank = VV)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(VV, eV) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, VV = VV.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), eV._bonesComputationForcedToCPU = !0;
          const xV = this._mesh.dD();
          for (let VV = 0; VV < xV.meshes.length; VV++) {
            const JV = xV.meshes[VV];
            if (JV.material) {
              if (JV.computeBonesUsingShaders && 0 !== JV.numBoneInfluencers)
                if (JV.material.getEffect() === eV) JV.computeBonesUsingShaders = !1;
                else if (JV.hT)
                for (const VV of JV.hT) {
                  if (VV.effect === eV) {
                    JV.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && JV.computeBonesUsingShaders && JV.numBoneInfluencers > 0 && (JV.computeBonesUsingShaders = !1)
          }
        } else {
          const eV = this._defines[this._currentRank];
          if (eV)
            for (let xV = 0; xV < eV.length; xV++) VV = VV.replace("#define " + eV[xV], "");
          this._currentRank++
        }
        return VV
      }
    }
  },
  41553: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => jV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41341),
      yV = xV(38296),
      pV = xV(38287),
      QV = xV(41559),
      nV = xV(41383),
      wV = xV(39870),
      ZV = xV(38917),
      vV = xV(41577),
      rV = xV(41279);
    let kV = (() => {
      var VV;
      let eV, xV, UV, yV, pV, QV, nV, wV, ZV, vV, kV, bV, EV = [];
      return VV = class {
        constructor() {
          this._func = (0, JV.l)(this, EV), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(VV) {
          this._func = VV
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(VV) {
          this._backFunc = VV
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(VV) {
          this._funcRef = VV
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(VV) {
          this._funcMask = VV
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(VV) {
          this._opStencilFail = VV
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(VV) {
          this._opDepthFail = VV
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(VV) {
          this._opStencilDepthPass = VV
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(VV) {
          this._backOpStencilFail = VV
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(VV) {
          this._backOpDepthFail = VV
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(VV) {
          this._backOpStencilDepthPass = VV
        }
        get mask() {
          return this._mask
        }
        set mask(VV) {
          this._mask = VV
        }
        get enabled() {
          return this._enabled
        }
        set enabled(VV) {
          this._enabled = VV
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(VV) {
          rV.b.Clone((() => VV), this)
        }
        serialize() {
          return rV.b.Serialize(this)
        }
        parse(VV, eV, xV) {
          rV.b.Parse((() => this), VV, eV, xV)
        }
      }, (() => {
        const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], yV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], (0, JV.i)(VV, null, eV, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: VV => "func" in VV,
            get: VV => VV.func
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, xV, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: VV => "backFunc" in VV,
            get: VV => VV.backFunc
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, UV, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: VV => "funcRef" in VV,
            get: VV => VV.funcRef
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, yV, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: VV => "funcMask" in VV,
            get: VV => VV.funcMask
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, pV, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: VV => "opStencilFail" in VV,
            get: VV => VV.opStencilFail
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, QV, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: VV => "opDepthFail" in VV,
            get: VV => VV.opDepthFail
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, nV, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: VV => "opStencilDepthPass" in VV,
            get: VV => VV.opStencilDepthPass
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, wV, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: VV => "backOpStencilFail" in VV,
            get: VV => VV.backOpStencilFail
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, ZV, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: VV => "backOpDepthFail" in VV,
            get: VV => VV.backOpDepthFail
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, vV, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: VV => "backOpStencilDepthPass" in VV,
            get: VV => VV.backOpStencilDepthPass
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, kV, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: VV => "mask" in VV,
            get: VV => VV.mask
          },
          metadata: rV
        }, null, EV), (0, JV.i)(VV, null, bV, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "enabled" in VV,
            get: VV => VV.enabled
          },
          metadata: rV
        }, null, EV), rV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rV
        })
      })(), VV
    })();
    var bV = xV(41583),
      EV = xV(41168),
      BV = xV(41138);
    let jV = (() => {
      var VV;
      let eV, xV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV = [],
        HV = [],
        uV = [],
        sV = [],
        SV = [],
        IV = [],
        dV = [],
        OV = [],
        Ve = [],
        ee = [],
        xe = [],
        Je = [],
        Ye = [],
        Ue = [],
        ye = [],
        pe = [],
        Qe = [],
        ne = [],
        we = [],
        Ze = [],
        ve = [],
        re = [],
        ke = [],
        be = [],
        Ee = [],
        Be = [],
        je = [],
        qe = [],
        te = [],
        Fe = [],
        Te = [],
        Pe = [],
        Ae = [],
        Ne = [],
        Xe = [],
        Me = [],
        ze = [],
        Ge = [],
        We = [],
        Re = [],
        ge = [],
        De = [],
        ie = [],
        Ce = [],
        ae = [],
        oe = [],
        ce = [],
        he = [],
        le = [],
        Le = [],
        fe = [];
      return VV = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(eV) {
          this._useVertexPulling !== eV && (this._useVertexPulling = eV, this.nJV(VV.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(VV) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(eV) {
          if (this._alpha === eV) return;
          const xV = this._alpha;
          this._alpha = eV, 1 !== xV && 1 !== eV || this.nJV(VV.MiscDirtyFlag + VV.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(eV) {
          this._backFaceCulling !== eV && (this._backFaceCulling = eV, this.nJV(VV.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(eV) {
          const xV = Math.max(0, Math.min(0 | eV, 4));
          this._textureRepetitionMode !== xV && (this._textureRepetitionMode = xV, this.nJV(VV.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(eV) {
          this._cullBackFaces !== eV && (this._cullBackFaces = eV, this.nJV(VV.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(VV) {
          this._blockDirtyMechanism !== VV && (this._blockDirtyMechanism = VV, VV || this.markDirty())
        }
        atomicMaterialsUpdate(VV) {
          this.blockDirtyMechanism = !0;
          try {
            VV(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(VV) {
          this._onDisposeObserver && this.eC.remove(this._onDisposeObserver), this._onDisposeObserver = this.eC.add(VV)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new yV.c), this._onBindObservable
        }
        set onBind(VV) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(VV)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new yV.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new yV.c), this._onEffectCreatedObservable
        }
        set alphaMode(VV) {
          this._alphaMode[0] = VV
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[xV] !== eV && (this._alphaMode[xV] = eV, this.nJV(VV.TextureDirtyFlag))
        }
        set needDepthPrePass(VV) {
          this._needDepthPrePass !== VV && (this._needDepthPrePass = VV, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(eV) {
          this._fogEnabled !== eV && (this._fogEnabled = eV, this.nJV(VV.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case VV.WireFrameFillMode:
            case VV.LineListDrawMode:
            case VV.LineLoopDrawMode:
            case VV.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(eV) {
          this.fillMode = eV ? VV.WireFrameFillMode : VV.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case VV.PointFillMode:
            case VV.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(eV) {
          this.fillMode = eV ? VV.PointFillMode : VV.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(eV) {
          this._fillMode !== eV && (this._fillMode = eV, this.nJV(VV.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(VV) {
          const eV = this.dD().sk().getCaps().fragmentDepthSupported;
          VV && !eV && wV.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = VV && eV, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(VV) {
          this._isVertexOutputInvariant !== VV && (this._isVertexOutputInvariant = VV, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(VV) {
          this._drawWrapper = VV
        }
        constructor(eV, xV, YV) {
          let QV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, JV.l)(this, KV), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, JV.l)(this, HV, void 0), this.uniqueId = ((0, JV.l)(this, uV), (0, JV.l)(this, sV, void 0)), this._loadedUniqueId = (0, JV.l)(this, SV), this.name = (0, JV.l)(this, IV, void 0), this.metadata = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, null)), this._internalMetadata = (0, JV.l)(this, Ve), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, JV.l)(this, ee, !1), this.checkReadyOnlyOnce = ((0, JV.l)(this, xe), (0, JV.l)(this, Je, !1)), this.state = ((0, JV.l)(this, Ye), (0, JV.l)(this, Ue, "")), this._alpha = ((0, JV.l)(this, ye), (0, JV.l)(this, pe, 1)), this.inspectableCustomProperties = (0, JV.l)(this, Qe), this._backFaceCulling = (0, JV.l)(this, ne, !0), this._textureRepetitionMode = ((0, JV.l)(this, we), (0, JV.l)(this, Ze, 0)), this.textureRepetitionHexTilingParams = ((0, JV.l)(this, ve), (0, JV.l)(this, re, [1, .6, 7, .5])), this._cullBackFaces = ((0, JV.l)(this, ke), (0, JV.l)(this, be, !0)), this._blockDirtyMechanism = ((0, JV.l)(this, Ee), !1), this.sideOrientation = (0, JV.l)(this, Be, null), this.onCompiled = ((0, JV.l)(this, je), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.eC = new yV.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, JV.l)(this, qe, [2]), this._needDepthPrePass = ((0, JV.l)(this, te), (0, JV.l)(this, Fe, !1)), this.disableDepthWrite = ((0, JV.l)(this, Te), (0, JV.l)(this, Pe, !1)), this.disableColorWrite = ((0, JV.l)(this, Ae), (0, JV.l)(this, Ne, !1)), this.forceDepthWrite = ((0, JV.l)(this, Xe), (0, JV.l)(this, Me, !1)), this.depthFunction = ((0, JV.l)(this, ze), (0, JV.l)(this, Ge, 0)), this.separateCullingPass = ((0, JV.l)(this, We), (0, JV.l)(this, Re, !1)), this._fogEnabled = ((0, JV.l)(this, ge), (0, JV.l)(this, De, !0)), this.pointSize = ((0, JV.l)(this, ie), (0, JV.l)(this, Ce, 1)), this.zOffset = ((0, JV.l)(this, ae), (0, JV.l)(this, oe, 0)), this.zOffsetUnits = ((0, JV.l)(this, ce), (0, JV.l)(this, he, 0)), this.clipPlane = (0, JV.l)(this, le), this.stencil = new kV, this._isVertexOutputInvariant = (0, JV.l)(this, Le, VV.ForceVertexOutputInvariant), this._materialContext = (0, JV.l)(this, fe), this._useUBO = !1, this._fillMode = VV.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = eV;
          const wV = xV || pV.d.LastCreatedScene;
          wV && (this._scene = wV, this._dirtyCallbacks = {}, this._forceGLSL = QV, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = eV || UV.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.sk().createMaterialContext(), this._drawWrapper = new vV.d(this._scene.sk(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new nV.b(this._scene.sk(), void 0, void 0, eV), this._useUBO = this.dD().sk().supportsUniformBuffers, this._createUniformBuffer(), YV || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), VV.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const VV = this.dD().sk();
          this._uniformBuffer?.dispose(), VV.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new nV.b(VV, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new nV.b(this._scene.sk(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(VV) {
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
        isReady(VV, eV) {
          return !0
        }
        isReadyForSubMesh(VV, eV, xV) {
          const JV = eV.materialDefines;
          return !!JV && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = JV, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        dD() {
          return this._scene
        }
        _getEffectiveOrientation(VV) {
          return null !== this.sideOrientation ? this.sideOrientation : VV.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(VV) {
          this._transparencyMode = VV
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === VV.MATERIAL_ALPHABLEND || this._transparencyMode === VV.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === VV.MATERIAL_ALPHATEST || this._transparencyMode === VV.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === VV.MATERIAL_OPAQUE || this._transparencyMode === VV.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(VV) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : VV.visibility < 1 || !this._disableAlphaBlending && (VV.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(VV) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(VV) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const xV = this.dD().meshes;
          for (const VV of xV)
            if (VV.hT)
              for (const xV of VV.hT)
                if (xV.eb() === this)
                  for (const VV of xV._drawWrappers) VV && this._materialContext === VV.materialContext && (VV._wasPreviouslyReady = !1, VV._wasPreviouslyUsingInstances = null, VV._forceRebindOnNextCall = eV);
          eV && this.nJV(VV.AllDirtyFlag)
        }
        _preBind(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const JV = this._scene.sk(),
            YV = (null == xV ? this.sideOrientation : xV) === VV.ClockWiseSideOrientation,
            UV = eV || this._getDrawWrapper();
          return (0, EV.e)(UV) && UV.materialContext && (UV.materialContext.useVertexPulling = this.useVertexPulling), JV.enableEffect(UV), JV.setState(this.backFaceCulling, this.zOffset, !1, YV, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), YV
        }
        bind(VV, eV) {}
        buildUniformLayout() {
          const VV = this._uniformBuffer;
          this._eventInfo.ubo = VV, this._callbackPluginEventGeneric(8, this._eventInfo), VV.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(VV, eV, xV) {
          const JV = xV._drawWrapper;
          this._eventInfo.subMesh = xV, this._callbackPluginEventBindForSubMesh(this._eventInfo), JV._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(VV) {}
        bindView(VV) {
          this._useUBO ? this._needToBindSceneUbo = !0 : VV.setMatrix("view", this.dD().getViewMatrix())
        }
        bindViewProjection(VV) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (VV.setMatrix("viewProjection", this.dD().getTransformMatrix()), VV.setMatrix("projection", this.dD().getProjectionMatrix()), VV.setMatrix("inverseProjection", this.dD().getInverseProjectionMatrix()))
        }
        bindEyePosition(VV, eV) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(VV, eV)
        }
        _afterBind(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && eV && (this._needToBindSceneUbo = !1, (0, bV.x)(eV, this.dD().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = VV ? VV.visibility : 1, this._onBindObservable && VV && this._onBindObservable.notifyObservers(VV), this.disableDepthWrite) {
            const VV = this._scene.sk();
            this._cachedDepthWriteState = VV.getDepthWrite(), VV.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const VV = this._scene.sk();
            this._cachedColorWriteState = VV.getColorWrite(), VV.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const VV = this._scene.sk();
            this._cachedDepthFunctionState = VV.getDepthFunction() || 0, VV.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.sk().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.sk().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.sk().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(VV) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = VV, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(VV) {
          return null
        }
        _clonePlugins(eV, xV) {
          const JV = {};
          if (this._serializePlugins(JV), VV._ParsePlugins(JV, eV, this._scene, xV), this.pluginManager)
            for (const VV of this.pluginManager._plugins) {
              const xV = eV.pluginManager.getPlugin(VV.name);
              xV && VV.copyTo(xV)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const VV = [];
            for (const eV in this.meshMap) {
              const xV = this.meshMap[eV];
              xV && VV.push(xV)
            }
            return VV
          }
          return this._scene.meshes.filter((VV => VV.material === this))
        }
        forceCompilation(VV, eV, xV, JV) {
          const YV = {
              clipPlane: !1,
              useInstances: !1,
              ...xV
            },
            UV = this.dD(),
            yV = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const pV = () => {
            if (!this._scene || !this._scene.sk()) return;
            const xV = UV.clipPlane;
            if (YV.clipPlane && (UV.clipPlane = new ZV.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let xV = !0,
                UV = null;
              if (VV.hT) {
                const eV = new QV.c(0, 0, 0, 0, 0, VV, void 0, !1, !1);
                eV.materialDefines && (eV.materialDefines._renderId = -1), this.isReadyForSubMesh(VV, eV, YV.useInstances) || (eV.effect && eV.effect.getCompilationError() && eV.effect.allFallbacksProcessed() ? UV = eV.effect.getCompilationError() : (xV = !1, setTimeout(pV, 16)))
              }
              xV && (this.allowShaderHotSwapping = yV, UV && JV && JV(UV), eV && eV(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = yV, eV && eV(this)) : setTimeout(pV, 16);
            YV.clipPlane && (UV.clipPlane = xV)
          };
          pV()
        }
        async forceCompilationAsync(VV, eV) {
          return await new Promise(((xV, JV) => {
            this.forceCompilation(VV, (() => {
              xV()
            }), eV, (VV => {
              JV(VV)
            }))
          }))
        }
        nJV(eV) {
          this.dD().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (VV._DirtyCallbackArray.length = 0, eV & VV.ImageProcessingDirtyFlag && VV._DirtyCallbackArray.push(VV._ImageProcessingDirtyCallBack), eV & VV.TextureDirtyFlag && VV._DirtyCallbackArray.push(VV._TextureDirtyCallBack), eV & VV.LightDirtyFlag && VV._DirtyCallbackArray.push(VV._LightsDirtyCallBack), eV & VV.FresnelDirtyFlag && VV._DirtyCallbackArray.push(VV._FresnelDirtyCallBack), eV & VV.AttributesDirtyFlag && VV._DirtyCallbackArray.push(VV._AttributeDirtyCallBack), eV & VV.MiscDirtyFlag && VV._DirtyCallbackArray.push(VV._MiscDirtyCallBack), eV & VV.PrePassDirtyFlag && VV._DirtyCallbackArray.push(VV._PrePassDirtyCallBack), VV._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(VV._RunDirtyCallBacks), this.dD().resetCachedMaterial())
        }
        resetDrawCache() {
          const VV = this.dD().meshes;
          for (const eV of VV)
            if (eV.hT)
              for (const VV of eV.hT) VV.eb() === this && VV.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(VV) {
          const eV = this.dD();
          if (eV.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const xV = eV.meshes;
          for (const JV of xV)
            if (JV.hT)
              for (const xV of JV.hT) {
                if ((xV.eb() || (eV._hasDefaultMaterial ? eV.defaultMaterial : null)) === this)
                  for (const eV of xV._drawWrappers) eV && eV.defines && eV.defines.markAllAsDirty && this._materialContext === eV.materialContext && VV(eV.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.dD().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const VV = this.dD().enablePrePassRenderer();
          VV && VV.nJV()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(VV._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(VV._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(VV._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(VV._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(VV._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(VV._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(VV._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(VV._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(VV._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(VV._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const VV = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.eC.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(VV)
            }))
          }
        }
        setPrePassRenderer(VV) {
          return !1
        }
        dispose(VV, eV, xV) {
          const JV = this.dD();
          if (JV.stopAnimation(this), JV.freeProcessedMaterials(), JV.removeMaterial(this), this._eventInfo.forceDisposeTextures = eV, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const VV = this._parentContainer.materials.indexOf(this);
            VV > -1 && this._parentContainer.materials.splice(VV, 1), this._parentContainer = null
          }
          if (!0 !== xV)
            if (this.meshMap)
              for (const YV in this.meshMap) {
                const VV = this.meshMap[YV];
                this._disposeMeshResources(VV)
              } else {
                const VV = JV.meshes;
                for (const eV of VV) this._disposeMeshResources(eV)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.eC.notifyObservers(this), this.eC.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(VV) {
          if (!VV) return;
          const eV = VV.geometry,
            xV = VV._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (VV.hT && xV)
              for (const JV of VV.hT) {
                const VV = JV._drawWrappers;
                for (let YV = 0; YV < VV.length; YV++) {
                  const UV = VV[YV]?.effect;
                  if (!UV) continue;
                  xV[YV] === this && (eV?._releaseVertexArrayObject(UV), JV._removeDrawWrapper(YV, !0, !0))
                }
              }
          } else eV?._releaseVertexArrayObject(this._drawWrapper.effect);
          VV.material !== this || VV.XUV || (VV.material = null)
        }
        serialize() {
          const VV = rV.b.Serialize(this);
          return VV.stencil = this.stencil.serialize(), VV.uniqueId = this.uniqueId, this._serializePlugins(VV), VV
        }
        _serializePlugins(VV) {
          if (VV.plugins = {}, this.pluginManager)
            for (const eV of this.pluginManager._plugins) eV.doNotSerialize || (VV.plugins[eV.getClassName()] = eV.serialize())
        }
        static ParseAlphaMode(VV, eV) {
          void 0 !== VV._alphaMode ? eV._alphaMode = Array.isArray(VV._alphaMode) ? [...VV._alphaMode] : [VV._alphaMode] : void 0 !== VV.alphaMode ? eV._alphaMode = Array.isArray(VV.alphaMode) ? [...VV.alphaMode] : [VV.alphaMode] : eV._alphaMode = [2]
        }
        static Parse(eV, xV, JV) {
          if (eV.customType) {
            if ("BABYLON.PBRMaterial" === eV.customType && eV.overloadedAlbedo && (eV.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return wV.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else eV.customType = "BABYLON.StandardMaterial";
          const YV = UV.j.Instantiate(eV.customType).Parse(eV, xV, JV);
          return YV._loadedUniqueId = eV.uniqueId, VV.ParseAlphaMode(eV, YV), YV
        }
        static _ParsePlugins(VV, eV, xV, JV) {
          if (VV.plugins)
            for (const YV in VV.plugins) {
              const yV = VV.plugins[YV];
              let pV = eV.pluginManager?.getPlugin(yV.name);
              if (!pV) {
                const VV = UV.j.Instantiate("BABYLON." + YV);
                VV && (pV = new VV(eV))
              }
              pV?.parse(yV, xV, JV)
            }
        }
      }, (() => {
        const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, YV.J)()], xV = [(0, YV.J)()], BV = [(0, YV.J)()], jV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)("alpha")], PV = [(0, YV.J)("backFaceCulling")], AV = [(0, YV.J)("textureRepetitionMode")], NV = [(0, YV.J)("textureRepetitionHexTilingParams")], XV = [(0, YV.J)("cullBackFaces")], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], WV = [(0, YV.J)()], RV = [(0, YV.J)()], gV = [(0, YV.J)()], DV = [(0, YV.J)()], iV = [(0, YV.J)()], CV = [(0, YV.J)("fogEnabled")], aV = [(0, YV.J)()], oV = [(0, YV.J)()], cV = [(0, YV.J)()], hV = [(0, YV.J)()], lV = [(0, YV.J)()], LV = [(0, YV.J)()], fV = [(0, YV.J)()], mV = [(0, YV.J)()], (0, JV.i)(VV, null, hV, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: VV => "pointsCloud" in VV,
            get: VV => VV.pointsCloud
          },
          metadata: UV
        }, null, KV), (0, JV.i)(VV, null, lV, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "fillMode" in VV,
            get: VV => VV.fillMode
          },
          metadata: UV
        }, null, KV), (0, JV.i)(VV, null, LV, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: VV => "useLogarithmicDepth" in VV,
            get: VV => VV.useLogarithmicDepth
          },
          metadata: UV
        }, null, KV), (0, JV.i)(VV, null, mV, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "transparencyMode" in VV,
            get: VV => VV.transparencyMode
          },
          metadata: UV
        }, null, KV), (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: VV => "id" in VV,
            get: VV => VV.id,
            set: (VV, eV) => {
              VV.id = eV
            }
          },
          metadata: UV
        }, HV, uV), (0, JV.i)(null, null, xV, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: VV => "uniqueId" in VV,
            get: VV => VV.uniqueId,
            set: (VV, eV) => {
              VV.uniqueId = eV
            }
          },
          metadata: UV
        }, sV, SV), (0, JV.i)(null, null, BV, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: VV => "name" in VV,
            get: VV => VV.name,
            set: (VV, eV) => {
              VV.name = eV
            }
          },
          metadata: UV
        }, IV, dV), (0, JV.i)(null, null, jV, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: VV => "metadata" in VV,
            get: VV => VV.metadata,
            set: (VV, eV) => {
              VV.metadata = eV
            }
          },
          metadata: UV
        }, OV, Ve), (0, JV.i)(null, null, qV, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: VV => "checkReadyOnEveryCall" in VV,
            get: VV => VV.checkReadyOnEveryCall,
            set: (VV, eV) => {
              VV.checkReadyOnEveryCall = eV
            }
          },
          metadata: UV
        }, ee, xe), (0, JV.i)(null, null, tV, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: VV => "checkReadyOnlyOnce" in VV,
            get: VV => VV.checkReadyOnlyOnce,
            set: (VV, eV) => {
              VV.checkReadyOnlyOnce = eV
            }
          },
          metadata: UV
        }, Je, Ye), (0, JV.i)(null, null, FV, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: VV => "state" in VV,
            get: VV => VV.state,
            set: (VV, eV) => {
              VV.state = eV
            }
          },
          metadata: UV
        }, Ue, ye), (0, JV.i)(null, null, TV, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "_alpha" in VV,
            get: VV => VV._alpha,
            set: (VV, eV) => {
              VV._alpha = eV
            }
          },
          metadata: UV
        }, pe, Qe), (0, JV.i)(null, null, PV, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: VV => "_backFaceCulling" in VV,
            get: VV => VV._backFaceCulling,
            set: (VV, eV) => {
              VV._backFaceCulling = eV
            }
          },
          metadata: UV
        }, ne, we), (0, JV.i)(null, null, AV, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "_textureRepetitionMode" in VV,
            get: VV => VV._textureRepetitionMode,
            set: (VV, eV) => {
              VV._textureRepetitionMode = eV
            }
          },
          metadata: UV
        }, Ze, ve), (0, JV.i)(null, null, NV, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: VV => "textureRepetitionHexTilingParams" in VV,
            get: VV => VV.textureRepetitionHexTilingParams,
            set: (VV, eV) => {
              VV.textureRepetitionHexTilingParams = eV
            }
          },
          metadata: UV
        }, re, ke), (0, JV.i)(null, null, XV, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: VV => "_cullBackFaces" in VV,
            get: VV => VV._cullBackFaces,
            set: (VV, eV) => {
              VV._cullBackFaces = eV
            }
          },
          metadata: UV
        }, be, Ee), (0, JV.i)(null, null, MV, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: VV => "sideOrientation" in VV,
            get: VV => VV.sideOrientation,
            set: (VV, eV) => {
              VV.sideOrientation = eV
            }
          },
          metadata: UV
        }, Be, je), (0, JV.i)(null, null, zV, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "_alphaMode" in VV,
            get: VV => VV._alphaMode,
            set: (VV, eV) => {
              VV._alphaMode = eV
            }
          },
          metadata: UV
        }, qe, te), (0, JV.i)(null, null, GV, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: VV => "_needDepthPrePass" in VV,
            get: VV => VV._needDepthPrePass,
            set: (VV, eV) => {
              VV._needDepthPrePass = eV
            }
          },
          metadata: UV
        }, Fe, Te), (0, JV.i)(null, null, WV, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: VV => "disableDepthWrite" in VV,
            get: VV => VV.disableDepthWrite,
            set: (VV, eV) => {
              VV.disableDepthWrite = eV
            }
          },
          metadata: UV
        }, Pe, Ae), (0, JV.i)(null, null, RV, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: VV => "disableColorWrite" in VV,
            get: VV => VV.disableColorWrite,
            set: (VV, eV) => {
              VV.disableColorWrite = eV
            }
          },
          metadata: UV
        }, Ne, Xe), (0, JV.i)(null, null, gV, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: VV => "forceDepthWrite" in VV,
            get: VV => VV.forceDepthWrite,
            set: (VV, eV) => {
              VV.forceDepthWrite = eV
            }
          },
          metadata: UV
        }, Me, ze), (0, JV.i)(null, null, DV, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: VV => "depthFunction" in VV,
            get: VV => VV.depthFunction,
            set: (VV, eV) => {
              VV.depthFunction = eV
            }
          },
          metadata: UV
        }, Ge, We), (0, JV.i)(null, null, iV, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: VV => "separateCullingPass" in VV,
            get: VV => VV.separateCullingPass,
            set: (VV, eV) => {
              VV.separateCullingPass = eV
            }
          },
          metadata: UV
        }, Re, ge), (0, JV.i)(null, null, CV, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "_fogEnabled" in VV,
            get: VV => VV._fogEnabled,
            set: (VV, eV) => {
              VV._fogEnabled = eV
            }
          },
          metadata: UV
        }, De, ie), (0, JV.i)(null, null, aV, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: VV => "pointSize" in VV,
            get: VV => VV.pointSize,
            set: (VV, eV) => {
              VV.pointSize = eV
            }
          },
          metadata: UV
        }, Ce, ae), (0, JV.i)(null, null, oV, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: VV => "zOffset" in VV,
            get: VV => VV.zOffset,
            set: (VV, eV) => {
              VV.zOffset = eV
            }
          },
          metadata: UV
        }, oe, ce), (0, JV.i)(null, null, cV, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: VV => "zOffsetUnits" in VV,
            get: VV => VV.zOffsetUnits,
            set: (VV, eV) => {
              VV.zOffsetUnits = eV
            }
          },
          metadata: UV
        }, he, le), (0, JV.i)(null, null, fV, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: VV => "_isVertexOutputInvariant" in VV,
            get: VV => VV._isVertexOutputInvariant,
            set: (VV, eV) => {
              VV._isVertexOutputInvariant = eV
            }
          },
          metadata: UV
        }, Le, fe), UV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UV
        })
      })(), VV.TriangleFillMode = 0, VV.WireFrameFillMode = 1, VV.PointFillMode = 2, VV.PointListDrawMode = 3, VV.LineListDrawMode = 4, VV.LineLoopDrawMode = 5, VV.LineStripDrawMode = 6, VV.TriangleStripDrawMode = 7, VV.TriangleFanDrawMode = 8, VV.ClockWiseSideOrientation = 0, VV.CounterClockWiseSideOrientation = 1, VV.ImageProcessingDirtyFlag = 64, VV.TextureDirtyFlag = 1, VV.LightDirtyFlag = 2, VV.FresnelDirtyFlag = 4, VV.AttributesDirtyFlag = 8, VV.MiscDirtyFlag = 16, VV.PrePassDirtyFlag = 32, VV.AllDirtyFlag = 127, VV.MATERIAL_OPAQUE = 0, VV.MATERIAL_ALPHATEST = 1, VV.MATERIAL_ALPHABLEND = 2, VV.MATERIAL_ALPHATESTANDBLEND = 3, VV.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, VV.MATERIAL_NORMALBLENDMETHOD_RNM = 1, VV.LIGHTFALLOFF_PHYSICAL = 0, VV.LIGHTFALLOFF_GLTF = 1, VV.LIGHTFALLOFF_STANDARD = 2, VV.OnEventObservable = new yV.c, VV.ForceVertexOutputInvariant = !1, VV._AllDirtyCallBack = VV => VV.markAllAsDirty(), VV._ImageProcessingDirtyCallBack = VV => VV.markAsImageProcessingDirty(), VV._TextureDirtyCallBack = VV => VV.markAsTexturesDirty(), VV._FresnelDirtyCallBack = VV => VV.markAsFresnelDirty(), VV._MiscDirtyCallBack = VV => VV.markAsMiscDirty(), VV._PrePassDirtyCallBack = VV => VV.markAsPrePassDirty(), VV._LightsDirtyCallBack = VV => VV.markAsLightDirty(), VV._AttributeDirtyCallBack = VV => VV.markAsAttributesDirty(), VV._FresnelAndMiscDirtyCallBack = eV => {
        VV._FresnelDirtyCallBack(eV), VV._MiscDirtyCallBack(eV)
      }, VV._TextureAndMiscDirtyCallBack = eV => {
        VV._TextureDirtyCallBack(eV), VV._MiscDirtyCallBack(eV)
      }, VV._DirtyCallbackArray = [], VV._RunDirtyCallBacks = eV => {
        for (const xV of VV._DirtyCallbackArray) xV(eV)
      }, VV
    })();
    Object.getOwnPropertyDescriptor(jV.prototype, "pluginManager") || Object.defineProperty(jV.prototype, "pluginManager", (0, BV.g)("Material", "pluginManager"))
  },
  41598: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = xV(41150);
    class YV {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(VV) {
        this._DiffuseTextureEnabled !== VV && (this._DiffuseTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(VV) {
        this._BaseWeightTextureEnabled !== VV && (this._BaseWeightTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(VV) {
        this._BaseDiffuseRoughnessTextureEnabled !== VV && (this._BaseDiffuseRoughnessTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(VV) {
        this._DetailTextureEnabled !== VV && (this._DetailTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(VV) {
        this._DecalMapEnabled !== VV && (this._DecalMapEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(VV) {
        this._AmbientTextureEnabled !== VV && (this._AmbientTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(VV) {
        this._OpacityTextureEnabled !== VV && (this._OpacityTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(VV) {
        this._ReflectionTextureEnabled !== VV && (this._ReflectionTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(VV) {
        this._EmissiveTextureEnabled !== VV && (this._EmissiveTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(VV) {
        this._SpecularTextureEnabled !== VV && (this._SpecularTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(VV) {
        this._BumpTextureEnabled !== VV && (this._BumpTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(VV) {
        this._LightmapTextureEnabled !== VV && (this._LightmapTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(VV) {
        this._RefractionTextureEnabled !== VV && (this._RefractionTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(VV) {
        this._ColorGradingTextureEnabled !== VV && (this._ColorGradingTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(VV) {
        this._FresnelEnabled !== VV && (this._FresnelEnabled = VV, JV.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(VV) {
        this._ClearCoatTextureEnabled !== VV && (this._ClearCoatTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(VV) {
        this._ClearCoatBumpTextureEnabled !== VV && (this._ClearCoatBumpTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(VV) {
        this._ClearCoatTintTextureEnabled !== VV && (this._ClearCoatTintTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(VV) {
        this._SheenTextureEnabled !== VV && (this._SheenTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(VV) {
        this._AnisotropicTextureEnabled !== VV && (this._AnisotropicTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(VV) {
        this._ThicknessTextureEnabled !== VV && (this._ThicknessTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(VV) {
        this._RefractionIntensityTextureEnabled !== VV && (this._RefractionIntensityTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(VV) {
        this._TranslucencyIntensityTextureEnabled !== VV && (this._TranslucencyIntensityTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(VV) {
        this._TranslucencyColorTextureEnabled !== VV && (this._TranslucencyColorTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(VV) {
        this._IridescenceTextureEnabled !== VV && (this._IridescenceTextureEnabled = VV, JV.d.MarkAllMaterialsAsDirty(1))
      }
    }
    YV._DiffuseTextureEnabled = !0, YV._BaseWeightTextureEnabled = !0, YV._BaseDiffuseRoughnessTextureEnabled = !0, YV._DetailTextureEnabled = !0, YV._DecalMapEnabled = !0, YV._AmbientTextureEnabled = !0, YV._OpacityTextureEnabled = !0, YV._ReflectionTextureEnabled = !0, YV._EmissiveTextureEnabled = !0, YV._SpecularTextureEnabled = !0, YV._BumpTextureEnabled = !0, YV._LightmapTextureEnabled = !0, YV._RefractionTextureEnabled = !0, YV._ColorGradingTextureEnabled = !0, YV._FresnelEnabled = !0, YV._ClearCoatTextureEnabled = !0, YV._ClearCoatBumpTextureEnabled = !0, YV._ClearCoatTintTextureEnabled = !0, YV._SheenTextureEnabled = !0, YV._AnisotropicTextureEnabled = !0, YV._ThicknessTextureEnabled = !0, YV._RefractionIntensityTextureEnabled = !0, YV._TranslucencyIntensityTextureEnabled = !0, YV._TranslucencyColorTextureEnabled = !0, YV._IridescenceTextureEnabled = !0
  },
  41583: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => WV,
      A: () => FV,
      E: () => MV,
      H: () => zV,
      L: () => rV,
      O: () => vV,
      P: () => lV,
      Q: () => CV,
      U: () => DV,
      X: () => gV,
      Y: () => qV,
      bb: () => LV,
      c: () => RV,
      cb: () => fV,
      e: () => TV,
      fb: () => mV,
      g: () => ZV,
      gb: () => sV,
      hb: () => HV,
      k: () => BV,
      lb: () => uV,
      m: () => jV,
      ob: () => kV,
      p: () => XV,
      r: () => QV,
      u: () => bV,
      x: () => EV,
      y: () => tV,
      z: () => GV
    });
    var JV = xV(39870),
      YV = xV(38287),
      UV = xV(41458),
      yV = xV(41591),
      pV = xV(41598);

    function QV(VV, eV, xV) {
      if (!VV || VV.LOGARITHMICDEPTH || VV.indexOf && VV.indexOf("LOGARITHMICDEPTH") >= 0) {
        const VV = xV.activeCamera;
        1 === VV.mode && JV.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), eV.setFloat("logarithmicDepthConstant", 2 / (Math.log(VV.maxZ + 1) / Math.LN2))
      }
    }
    const nV = {
        r: 0,
        g: 0,
        b: 0
      },
      wV = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function ZV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      xV && VV.fogEnabled && (!eV || eV.applyFog) && 0 !== VV.fogMode && (xV.setFloat4("vFogInfos", VV.fogMode, VV.fogStart, VV.fogEnd, VV.fogDensity), JV ? (VV.fogColor.toLinearSpaceToRef(nV, VV.sk().useExactSrgbConversions), xV.setColor3("vFogColor", nV)) : xV.setColor3("vFogColor", VV.fogColor))
    }

    function vV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
      const ZV = VV.numMaxInfluencers || VV.numInfluencers;
      return ZV <= 0 ? 0 : (eV.push("#define MORPHTARGETS"), VV.hasPositions && eV.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), VV.hasNormals && eV.push("#define MORPHTARGETTEXTURE_HASNORMALS"), VV.hasTangents && eV.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), VV.hasUVs && eV.push("#define MORPHTARGETTEXTURE_HASUVS"), VV.hasUV2s && eV.push("#define MORPHTARGETTEXTURE_HASUV2S"), VV.hasColors && eV.push("#define MORPHTARGETTEXTURE_HASCOLORS"), VV.supportsPositions && YV && eV.push("#define MORPHTARGETS_POSITION"), VV.supportsNormals && UV && eV.push("#define MORPHTARGETS_NORMAL"), VV.supportsTangents && yV && eV.push("#define MORPHTARGETS_TANGENT"), VV.supportsUVs && pV && eV.push("#define MORPHTARGETS_UV"), VV.supportsUV2s && QV && eV.push("#define MORPHTARGETS_UV2"), VV.supportsColors && nV && eV.push("#define MORPHTARGETS_COLOR"), eV.push("#define NUM_MORPH_INFLUENCERS " + ZV), VV.isUsingTextureForTargets && eV.push("#define MORPHTARGETS_TEXTURE"), wV.NUM_MORPH_INFLUENCERS = ZV, wV.NORMAL = UV, wV.TANGENT = yV, wV.UV = pV, wV.UV2 = QV, wV.COLOR = nV, rV(xV, JV, wV, YV), ZV)
    }

    function rV(VV, eV, xV) {
      let UV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const yV = xV.NUM_MORPH_INFLUENCERS;
      if (yV > 0 && YV.d.LastCreatedEngine) {
        const pV = YV.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          QV = eV.morphTargetManager;
        if (QV?.isUsingTextureForTargets) return;
        const nV = QV && QV.supportsPositions && UV,
          wV = QV && QV.supportsNormals && xV.NORMAL,
          ZV = QV && QV.supportsTangents && xV.TANGENT,
          vV = QV && QV.supportsUVs && xV.UV1,
          rV = QV && QV.supportsUV2s && xV.UV2,
          kV = QV && QV.supportsColors && xV.VERTEXCOLOR;
        for (let xV = 0; xV < yV; xV++) nV && VV.push("position" + xV), wV && VV.push("normal" + xV), ZV && VV.push("tangent" + xV), vV && VV.push("uv_" + xV), rV && VV.push("uv2_" + xV), kV && VV.push("color" + xV), VV.length > pV && JV.b.Error("Cannot add more vertex attributes for mesh " + eV.name)
      }
    }

    function kV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      VV.push("world0"), VV.push("world1"), VV.push("world2"), VV.push("world3"), eV && (VV.push("previousWorld0"), VV.push("previousWorld1"), VV.push("previousWorld2"), VV.push("previousWorld3"))
    }

    function bV(VV, eV) {
      const xV = VV.morphTargetManager;
      VV && xV && eV.setFloatArray("morphTargetInfluences", xV.influences)
    }

    function EV(VV, eV) {
      eV.bindToEffect(VV, "Scene")
    }

    function BV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        QV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ZV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        vV = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (VV.texturesEnabled && YV && pV.b.ReflectionTextureEnabled) {
        if (xV.peV("reflectionMatrix", YV.getReflectionTextureMatrix()), xV.updateFloat2("vReflectionInfos", YV.level * VV.iblIntensity, vV), QV && YV.boundingBoxSize) {
          const VV = YV;
          xV.updateVector3("vReflectionPosition", VV.boundingBoxPosition), xV.updateVector3("vReflectionSize", VV.boundingBoxSize)
        }
        if (UV) {
          const VV = YV.getSize().width;
          xV.updateFloat2("vReflectionFilteringInfo", VV, Math.log2(VV))
        }
        if (wV && !eV.USEIRRADIANCEMAP) {
          const VV = YV.sphericalPolynomial;
          if (eV.USESPHERICALFROMREFLECTIONMAP && VV)
            if (eV.SPHERICAL_HARMONICS) {
              const eV = VV.preScaledHarmonics;
              xV.updateVector3("vSphericalL00", eV.l00), xV.updateVector3("vSphericalL1_1", eV.l1_1), xV.updateVector3("vSphericalL10", eV.l10), xV.updateVector3("vSphericalL11", eV.l11), xV.updateVector3("vSphericalL2_2", eV.l2_2), xV.updateVector3("vSphericalL2_1", eV.l2_1), xV.updateVector3("vSphericalL20", eV.l20), xV.updateVector3("vSphericalL21", eV.l21), xV.updateVector3("vSphericalL22", eV.l22)
            } else xV.updateFloat3("vSphericalX", VV.x.x, VV.x.y, VV.x.z), xV.updateFloat3("vSphericalY", VV.y.x, VV.y.y, VV.y.z), xV.updateFloat3("vSphericalZ", VV.z.x, VV.z.y, VV.z.z), xV.updateFloat3("vSphericalXX_ZZ", VV.xx.x - VV.zz.x, VV.xx.y - VV.zz.y, VV.xx.z - VV.zz.z), xV.updateFloat3("vSphericalYY_ZZ", VV.yy.x - VV.zz.x, VV.yy.y - VV.zz.y, VV.yy.z - VV.zz.z), xV.updateFloat3("vSphericalZZ", VV.zz.x, VV.zz.y, VV.zz.z), xV.updateFloat3("vSphericalXY", VV.xy.x, VV.xy.y, VV.xy.z), xV.updateFloat3("vSphericalYZ", VV.yz.x, VV.yz.y, VV.yz.z), xV.updateFloat3("vSphericalZX", VV.zx.x, VV.zx.y, VV.zx.z)
        } else nV && eV.USEIRRADIANCEMAP && eV.USE_IRRADIANCE_DOMINANT_DIRECTION && YV.irradianceTexture && xV.updateVector3("vReflectionDominantDirection", YV.irradianceTexture._dominantDirection);
        yV && xV.updateFloat3("vReflectionMicrosurfaceInfos", YV.getSize().width, YV.lodGenerationScale, YV.lodGenerationOffset)
      }
      ZV && xV.updateColor3("vReflectionColor", JV)
    }

    function jV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (JV && pV.b.ReflectionTextureEnabled) {
        eV.LODBASEDMICROSFURACE ? xV.setTexture("reflectionSampler", JV) : (xV.setTexture("reflectionSampler", JV._lodTextureMid || JV), xV.setTexture("reflectionSamplerLow", JV._lodTextureLow || JV), xV.setTexture("reflectionSamplerHigh", JV._lodTextureHigh || JV)), eV.USEIRRADIANCEMAP && xV.setTexture("irradianceSampler", JV.irradianceTexture);
        const UV = VV.iblCdfGenerator;
        YV && UV && xV.setTexture("icdfSampler", UV.getIcdfTexture())
      }
    }

    function qV(VV, eV, xV) {
      eV._needUVs = !0, eV[xV] = !0, VV.optimizeUVAllocation && VV.getTextureMatrix().isIdentityAs3x2() ? (eV[xV + "DIRECTUV"] = VV.coordinatesIndex + 1, eV["MAINUV" + (VV.coordinatesIndex + 1)] = !0) : eV[xV + "DIRECTUV"] = 0
    }

    function tV(VV, eV, xV) {
      const JV = VV.getTextureMatrix();
      eV.peV(xV + "Matrix", JV)
    }

    function FV(VV, eV, xV) {
      xV.BAKED_VERTEX_ANIMATION_TEXTURE && xV.INSTANCES && VV.push("bakedVertexAnimationSettingsInstanced")
    }

    function TV(VV, eV, xV) {
      var JV;
      if (eV && VV && (VV.computeBonesUsingShaders && eV._bonesComputationForcedToCPU && (VV.computeBonesUsingShaders = !1), VV.useBones && VV.computeBonesUsingShaders && VV.skeleton)) {
        const YV = VV.skeleton;
        if (YV.isUsingTextureForMatrices && eV.getUniformIndex("boneTextureInfo") > -1) {
          const xV = YV.getTransformMatrixTexture(VV);
          eV.setTexture("boneSampler", xV), eV.setFloat2("boneTextureInfo", YV._textureWidth, YV._textureHeight)
        } else {
          const UV = YV.getTransformMatrices(VV);
          UV && (eV.setMatrices("mBones", UV), xV && VV.dD().prePassRenderer && VV.dD().prePassRenderer.getIndex(2) && (xV.previousBones[VV.uniqueId] || (xV.previousBones[VV.uniqueId] = UV.slice()), eV.setMatrices("mPreviousBones", xV.previousBones[VV.uniqueId]), JV = UV, xV.previousBones[VV.uniqueId].set(JV)))
        }
      }
    }

    function PV(VV, eV, xV, JV, YV) {
      let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      VV._bindLight(eV, xV, JV, YV, UV)
    }
    const AV = 4,
      NV = new WeakMap;

    function XV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const UV = Math.min(eV.lightSources.length, YV);
      for (let yV = 0; yV < UV; yV++) {
        PV(eV.lightSources[yV], yV, VV, xV, "boolean" === typeof JV ? JV : JV.SPECULARTERM, eV.receiveShadows)
      }
    }

    function MV(VV, eV, xV, JV) {
      xV.NUM_BONE_INFLUENCERS > 0 && (JV.addCPUSkinningFallback(0, eV), VV.push("matricesIndices"), VV.push("matricesWeights"), xV.NUM_BONE_INFLUENCERS > 4 && (VV.push("matricesIndicesExtra"), VV.push("matricesWeightsExtra")))
    }

    function zV(VV, eV) {
      (eV.INSTANCES || eV.THIN_INSTANCES) && kV(VV, !!eV.PREPASS_VELOCITY), eV.INSTANCESCOLOR && VV.push("instanceColor")
    }

    function GV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        YV = 0;
      for (let UV = 0; UV < xV && VV["LIGHT" + UV]; UV++) UV > 0 && (YV = JV + UV, eV.addFallback(YV, "LIGHT" + UV)), VV.SHADOWS || (VV["SHADOW" + UV] && eV.addFallback(JV, "SHADOW" + UV), VV["SHADOWPCF" + UV] && eV.addFallback(JV, "SHADOWPCF" + UV), VV["SHADOWPCSS" + UV] && eV.addFallback(JV, "SHADOWPCSS" + UV), VV["SHADOWPOISSON" + UV] && eV.addFallback(JV, "SHADOWPOISSON" + UV), VV["SHADOWESM" + UV] && eV.addFallback(JV, "SHADOWESM" + UV), VV["SHADOWCLOSEESM" + UV] && eV.addFallback(JV, "SHADOWCLOSEESM" + UV));
      return YV
    }

    function WV(VV, eV, xV, JV, YV, UV, yV) {
      let pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        nV = arguments.length > 9 ? arguments[9] : void 0,
        wV = arguments.length > 10 ? arguments[10] : void 0;
      if (yV._areMiscDirty) {
        yV.LOGARITHMICDEPTH = xV, yV.POINTSIZE = JV, yV.FOG = YV && function(VV, eV) {
          return eV.fogEnabled && VV.applyFog && 0 !== eV.fogMode
        }(VV, eV), yV.NONUNIFORMSCALING = VV.nonUniformScaling, yV.ALPHATEST = UV, yV.DECAL_AFTER_DETAIL = pV, yV.USE_VERTEX_PULLING = QV, yV.RIGHT_HANDED = eV.useRightHandedSystem;
        const ZV = QV ? nV?.geometry?.getIndexBuffer() : null,
          vV = !!nV && nV.isUnIndexed;
        yV.VERTEX_PULLING_USE_INDEX_BUFFER = !!ZV && !vV, yV.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!ZV || vV) && ZV.is32Bits, yV.VERTEXOUTPUT_INVARIANT = !!wV
      }
    }

    function RV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!VV.lightsEnabled || JV) return !0;
      const YV = eV.lightSources,
        UV = Math.min(YV.length, xV);
      for (let yV = 0; yV < UV; yV++)
        if (!YV[yV].areLightTexturesReady()) return !1;
      return !0
    }

    function gV(VV, eV, xV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!xV._areLightsDirty) return xV._needNormals;
      const pV = UV;
      UV = function(VV, eV) {
        const xV = VV.sk().getCaps().maxUniformBuffersPerShaderStage;
        if (null == xV) return eV;
        const JV = Math.max(xV - AV, 1);
        return Math.min(eV, JV)
      }(VV, UV);
      let QV = 0;
      const nV = {
        needNormals: xV._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (VV.lightsEnabled && !yV) {
        eV.lightSources.length > UV && UV < pV && function(VV, eV, xV, YV) {
          let UV = NV.get(VV);
          UV || (UV = new Set, NV.set(VV, UV)), UV.has(YV) || (UV.add(YV), JV.b.Warn(`maxSimultaneousLights is ${eV} but this engine supports at most ${xV} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${YV} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${YV+AV} uniform buffers, over the device limit of ${VV.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${xV}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${xV} or less to silence this warning.`))
        }(VV.sk(), pV, UV, Math.min(eV.lightSources.length, pV));
        for (const JV of eV.lightSources)
          if (iV(VV, eV, JV, QV, xV, YV, nV), QV++, QV === UV) break
      }
      xV.SPECULARTERM = nV.specularEnabled, xV.SHADOWS = nV.shadowEnabled;
      const wV = Math.max(UV, xV.MAXLIGHTCOUNT || 0);
      for (let JV = QV; JV < wV; JV++) void 0 !== xV["LIGHT" + JV] && (xV["LIGHT" + JV] = !1, xV["HEMILIGHT" + JV] = !1, xV["POINTLIGHT" + JV] = !1, xV["DIRLIGHT" + JV] = !1, xV["SPOTLIGHT" + JV] = !1, xV["AREALIGHT" + JV] = !1, xV["CLUSTLIGHT" + JV] = !1, xV["SHADOW" + JV] = !1, xV["SHADOWCSM" + JV] = !1, xV["SHADOWCSMDEBUG" + JV] = !1, xV["SHADOWCSMNUM_CASCADES" + JV] = !1, xV["SHADOWCSMUSESHADOWMAXZ" + JV] = !1, xV["SHADOWCSMNOBLEND" + JV] = !1, xV["SHADOWCSM_RIGHTHANDED" + JV] = !1, xV["SHADOWPCF" + JV] = !1, xV["SHADOWPCSS" + JV] = !1, xV["SHADOWPOISSON" + JV] = !1, xV["SHADOWESM" + JV] = !1, xV["SHADOWCLOSEESM" + JV] = !1, xV["SHADOWCUBE" + JV] = !1, xV["SHADOWLOWQUALITY" + JV] = !1, xV["SHADOWMEDIUMQUALITY" + JV] = !1);
      xV.LIGHTCOUNT = QV, xV.MAXLIGHTCOUNT = UV;
      const ZV = VV.sk().getCaps();
      return void 0 === xV.SHADOWFLOAT && (nV.needRebuild = !0), xV.SHADOWFLOAT = nV.shadowEnabled && (ZV.textureFloatRender && ZV.textureFloatLinearFiltering || ZV.textureHalfFloatRender && ZV.textureHalfFloatLinearFiltering), xV.LIGHTMAPEXCLUDED = nV.lightmapMode, nV.needRebuild && xV.rebuild(), nV.needNormals
    }

    function DV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (eV && pV.b.ReflectionTextureEnabled) {
        if (!eV.isReadyOrNotBlocking()) return !1;
        xV._needNormals = !0, xV.REFLECTION = !0, xV.GAMMAREFLECTION = eV.gammaSpace, xV.RGBDREFLECTION = eV.isRGBD, xV.LODINREFLECTIONALPHA = eV.lodLevelInAlpha, xV.LINEARSPECULARREFLECTION = eV.linearSpecularLOD, xV.USEIRRADIANCEMAP = !1, xV.LODBASEDMICROSFURACE = VV.sk().getCaps().textureLOD;
        const yV = VV.sk();
        switch (JV && YV > 0 ? (xV.NUM_SAMPLES = "" + YV, yV._features.needTypeSuffixInShaderConstants && (xV.NUM_SAMPLES = xV.NUM_SAMPLES + "u"), xV.REALTIME_FILTERING = !0, VV.iblCdfGenerator && (xV.IBL_CDF_FILTERING = !0)) : xV.REALTIME_FILTERING = !1, xV.INVERTCUBICMAP = 6 === eV.coordinatesMode, xV.REFLECTIONMAP_3D = eV.isCube, xV.REFLECTIONMAP_OPPOSITEZ = xV.REFLECTIONMAP_3D && VV.useRightHandedSystem ? !eV.invertZ : eV.invertZ, xV.REFLECTIONMAP_CUBIC = !1, xV.REFLECTIONMAP_EXPLICIT = !1, xV.REFLECTIONMAP_PLANAR = !1, xV.REFLECTIONMAP_PROJECTION = !1, xV.REFLECTIONMAP_SKYBOX = !1, xV.REFLECTIONMAP_SPHERICAL = !1, xV.REFLECTIONMAP_EQUIRECTANGULAR = !1, xV.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, xV.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, eV.coordinatesMode) {
          case 0:
            xV.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            xV.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            xV.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            xV.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            xV.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            xV.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            xV.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            xV.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            xV.REFLECTIONMAP_CUBIC = !0, xV.USE_LOCAL_REFLECTIONMAP_CUBIC = !!eV.boundingBoxSize
        }
        5 !== eV.coordinatesMode && (eV.irradianceTexture ? (xV.USEIRRADIANCEMAP = !0, xV.USESPHERICALFROMREFLECTIONMAP = !1, xV.USESPHERICALINVERTEX = !1, eV.irradianceTexture._dominantDirection ? xV.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : xV.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : eV.isCube && (xV.USESPHERICALFROMREFLECTIONMAP = !0, xV.USEIRRADIANCEMAP = !1, xV.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, xV.USESPHERICALINVERTEX = UV))
      } else xV.REFLECTION = !1, xV.REFLECTIONMAP_3D = !1, xV.REFLECTIONMAP_SPHERICAL = !1, xV.REFLECTIONMAP_PLANAR = !1, xV.REFLECTIONMAP_CUBIC = !1, xV.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, xV.REFLECTIONMAP_PROJECTION = !1, xV.REFLECTIONMAP_SKYBOX = !1, xV.REFLECTIONMAP_EXPLICIT = !1, xV.REFLECTIONMAP_EQUIRECTANGULAR = !1, xV.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, xV.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, xV.INVERTCUBICMAP = !1, xV.USESPHERICALFROMREFLECTIONMAP = !1, xV.USEIRRADIANCEMAP = !1, xV.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, xV.USESPHERICALINVERTEX = !1, xV.REFLECTIONMAP_OPPOSITEZ = !1, xV.LODINREFLECTIONALPHA = !1, xV.GAMMAREFLECTION = !1, xV.RGBDREFLECTION = !1, xV.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function iV(VV, eV, xV, JV, YV, yV, pV) {
      switch (pV.needNormals = !0, void 0 === YV["LIGHT" + JV] && (pV.needRebuild = !0), YV["LIGHT" + JV] = !0, YV["SPOTLIGHT" + JV] = !1, YV["HEMILIGHT" + JV] = !1, YV["POINTLIGHT" + JV] = !1, YV["DIRLIGHT" + JV] = !1, YV["AREALIGHT" + JV] = !1, YV["CLUSTLIGHT" + JV] = !1, xV.prepareLightSpecificDefines(YV, JV), YV["LIGHT_FALLOFF_PHYSICAL" + JV] = !1, YV["LIGHT_FALLOFF_GLTF" + JV] = !1, YV["LIGHT_FALLOFF_STANDARD" + JV] = !1, xV.falloffType) {
        case UV.b.FALLOFF_GLTF:
          YV["LIGHT_FALLOFF_GLTF" + JV] = !0;
          break;
        case UV.b.FALLOFF_PHYSICAL:
          YV["LIGHT_FALLOFF_PHYSICAL" + JV] = !0;
          break;
        case UV.b.FALLOFF_STANDARD:
          YV["LIGHT_FALLOFF_STANDARD" + JV] = !0
      }
      if (yV && !xV.specular.equalsFloats(0, 0, 0) && (pV.specularEnabled = !0), YV["SHADOW" + JV] = !1, YV["SHADOWCSM" + JV] = !1, YV["SHADOWCSMDEBUG" + JV] = !1, YV["SHADOWCSMNUM_CASCADES" + JV] = !1, YV["SHADOWCSMUSESHADOWMAXZ" + JV] = !1, YV["SHADOWCSMNOBLEND" + JV] = !1, YV["SHADOWCSM_RIGHTHANDED" + JV] = !1, YV["SHADOWPCF" + JV] = !1, YV["SHADOWPCSS" + JV] = !1, YV["SHADOWPOISSON" + JV] = !1, YV["SHADOWESM" + JV] = !1, YV["SHADOWCLOSEESM" + JV] = !1, YV["SHADOWCUBE" + JV] = !1, YV["SHADOWLOWQUALITY" + JV] = !1, YV["SHADOWMEDIUMQUALITY" + JV] = !1, eV && eV.receiveShadows && VV.shadowsEnabled && xV.shadowEnabled) {
        const eV = xV.getShadowGenerator(VV.activeCamera) ?? xV.getShadowGenerator();
        if (eV) {
          const VV = eV.getShadowMap();
          VV && VV.renderList && VV.renderList.length > 0 && (pV.shadowEnabled = !0, eV.prepareDefines(YV, JV))
        }
      }
      xV.lightmapMode != UV.b.LIGHTMAP_DEFAULT ? (pV.lightmapMode = !0, YV["LIGHTMAPEXCLUDED" + JV] = !0, YV["LIGHTMAPNOSPECULAR" + JV] = xV.lightmapMode == UV.b.LIGHTMAP_SHADOWSONLY) : (YV["LIGHTMAPEXCLUDED" + JV] = !1, YV["LIGHTMAPNOSPECULAR" + JV] = !1)
    }

    function CV(VV, eV, xV, JV, YV) {
      let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        pV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        QV = function(VV, eV) {
          let xV = !1;
          if (VV.activeCamera) {
            const JV = eV.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              YV = eV.CAMERA_PERSPECTIVE ? 1 : 0,
              UV = 1 === VV.activeCamera.mode ? 1 : 0,
              yV = 0 === VV.activeCamera.mode ? 1 : 0;
            (JV ^ UV || YV ^ yV) && (eV.CAMERA_ORTHOGRAPHIC = 1 === UV, eV.CAMERA_PERSPECTIVE = 1 === yV, xV = !0)
          }
          return xV
        }(VV, JV);
      !1 !== UV && (QV = (0, yV.i)(xV, VV, JV)), JV.DEPTHPREPASS !== !eV.getColorWrite() && (JV.DEPTHPREPASS = !JV.DEPTHPREPASS, QV = !0), JV.INSTANCES !== YV && (JV.INSTANCES = YV, QV = !0), JV.THIN_INSTANCES !== pV && (JV.THIN_INSTANCES = pV, QV = !0), QV && JV.markAsUnprocessed()
    }
    const aV = 40,
      oV = 64,
      cV = new WeakMap,
      hV = new WeakSet;

    function lV(VV, eV, xV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        pV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!eV._areAttributesDirty && eV._needNormals === eV._normals && eV._needUVs === eV._uvs) return !1;
      eV._normals = eV._needNormals, eV._uvs = eV._needUVs, eV.NORMAL = eV._needNormals && VV.isVerticesDataPresent("normal"), eV._needNormals && VV.isVerticesDataPresent("tangent") && (eV.TANGENT = !0);
      for (let JV = 1; JV <= 6; ++JV) eV["UV" + JV] = !!eV._needUVs && VV.isVerticesDataPresent(`uv${1===JV?"":JV}`);
      if (xV) {
        const xV = VV.useVertexColors && VV.isVerticesDataPresent("color");
        eV.VERTEXCOLOR = xV, eV.VERTEXALPHA = VV.hasVertexAlpha && xV && yV
      }
      return VV.isVerticesDataPresent("instanceColor") && (VV.NUV || VV.hasThinInstances) && (eV.INSTANCESCOLOR = !0), YV && function(VV, eV) {
        if (VV.useBones && VV.computeBonesUsingShaders && VV.skeleton) {
          eV.NUM_BONE_INFLUENCERS = VV.numBoneInfluencers;
          const xV = void 0 !== eV.BONETEXTURE;
          if (VV.skeleton.isUsingTextureForMatrices && xV) eV.BONETEXTURE = !0;
          else {
            eV.BonesPerMesh = VV.skeleton.bones.length + 1, eV.BONETEXTURE = !xV && void 0;
            const YV = VV.dD(),
              UV = YV.prePassRenderer;
            if (UV && UV.enabled) {
              const xV = -1 === UV.excludedSkinnedMesh.indexOf(VV);
              eV.BONES_VELOCITY_ENABLED = xV
            }
            const yV = !0 === eV.MULTIVIEW,
              pV = 2 * eV.BonesPerMesh + (yV ? 1 : 0);
            if (cV.get(VV.skeleton) !== pV) {
              cV.set(VV.skeleton, pV);
              const xV = YV.sk().getCaps().maxVertexUniformVectors;
              if (xV && !hV.has(VV.skeleton)) {
                const YV = 4 * eV.BonesPerMesh,
                  UV = yV ? oV : aV,
                  pV = Math.max(xV - UV, 0);
                (YV > pV || yV && 3 * YV > xV) && (hV.add(VV.skeleton), JV.b.Warn(`Skeleton "${VV.skeleton.name}": ${VV.skeleton.bones.length} bones stored as vertex uniforms use ${YV} of ~${pV} usable uniform vectors${yV?" (multiview)":""} on a device reporting ${xV}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else eV.NUM_BONE_INFLUENCERS = 0, eV.BonesPerMesh = 0, void 0 !== eV.BONETEXTURE && (eV.BONETEXTURE = !1)
      }(VV, eV), UV && function(VV, eV) {
        const xV = VV.morphTargetManager;
        xV ? (eV.MORPHTARGETS_UV = xV.supportsUVs && eV.UV1, eV.MORPHTARGETS_UV2 = xV.supportsUV2s && eV.UV2, eV.MORPHTARGETS_TANGENT = xV.supportsTangents && eV.TANGENT, eV.MORPHTARGETS_NORMAL = xV.supportsNormals && eV.NORMAL, eV.MORPHTARGETS_POSITION = xV.supportsPositions, eV.MORPHTARGETS_COLOR = xV.supportsColors, eV.MORPHTARGETTEXTURE_HASUVS = xV.hasUVs, eV.MORPHTARGETTEXTURE_HASUV2S = xV.hasUV2s, eV.MORPHTARGETTEXTURE_HASTANGENTS = xV.hasTangents, eV.MORPHTARGETTEXTURE_HASNORMALS = xV.hasNormals, eV.MORPHTARGETTEXTURE_HASPOSITIONS = xV.hasPositions, eV.MORPHTARGETTEXTURE_HASCOLORS = xV.hasColors, eV.NUM_MORPH_INFLUENCERS = xV.numMaxInfluencers || xV.numInfluencers, eV.MORPHTARGETS = eV.NUM_MORPH_INFLUENCERS > 0, eV.MORPHTARGETS_TEXTURE = xV.isUsingTextureForTargets) : (eV.MORPHTARGETS_UV = !1, eV.MORPHTARGETS_UV2 = !1, eV.MORPHTARGETS_TANGENT = !1, eV.MORPHTARGETS_NORMAL = !1, eV.MORPHTARGETS_POSITION = !1, eV.MORPHTARGETS_COLOR = !1, eV.MORPHTARGETTEXTURE_HASUVS = !1, eV.MORPHTARGETTEXTURE_HASUV2S = !1, eV.MORPHTARGETTEXTURE_HASTANGENTS = !1, eV.MORPHTARGETTEXTURE_HASNORMALS = !1, eV.MORPHTARGETTEXTURE_HASPOSITIONS = !1, eV.MORPHTARGETTEXTURE_HAS_COLORS = !1, eV.MORPHTARGETS = !1, eV.NUM_MORPH_INFLUENCERS = 0)
      }(VV, eV), pV && function(VV, eV) {
        const xV = VV.bakedVertexAnimationManager;
        eV.BAKED_VERTEX_ANIMATION_TEXTURE = !(!xV || !xV.isEnabled)
      }(VV, eV), !0
    }

    function LV(VV, eV) {
      if (VV.activeCamera) {
        const xV = eV.MULTIVIEW;
        eV.MULTIVIEW = null !== VV.activeCamera.outputRenderTarget && VV.activeCamera.outputRenderTarget.getViewCount() > 1, eV.MULTIVIEW != xV && eV.markAsUnprocessed()
      }
    }

    function fV(VV, eV, xV) {
      const JV = eV.ORDER_INDEPENDENT_TRANSPARENCY,
        YV = eV.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      eV.ORDER_INDEPENDENT_TRANSPARENCY = VV.useOrderIndependentTransparency && xV, eV.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !VV.sk().getCaps().textureFloatLinearFiltering, JV === eV.ORDER_INDEPENDENT_TRANSPARENCY && YV === eV.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || eV.markAsUnprocessed()
    }

    function mV(VV, eV, xV) {
      const JV = eV.PREPASS;
      if (!eV._arePrePassDirty) return;
      const YV = [{
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
      if (VV.prePassRenderer && VV.prePassRenderer.enabled && xV) {
        eV.PREPASS = !0, eV.SCENE_MRT_COUNT = VV.prePassRenderer.mrtCount, eV.PREPASS_NORMAL_WORLDSPACE = VV.prePassRenderer.generateNormalsInWorldSpace, eV.PREPASS_COLOR = !0, eV.PREPASS_COLOR_INDEX = 0;
        for (let xV = 0; xV < YV.length; xV++) {
          const JV = VV.prePassRenderer.getIndex(YV[xV].type); - 1 !== JV ? (eV[YV[xV].define] = !0, eV[YV[xV].index] = JV) : eV[YV[xV].define] = !1
        }
      } else {
        eV.PREPASS = !1;
        for (let VV = 0; VV < YV.length; VV++) eV[YV[VV].define] = !1
      }
      eV.PREPASS != JV && (eV.markAsUnprocessed(), eV.markAsImageProcessingDirty())
    }

    function KV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        nV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      YV && YV.push("Light" + VV), UV || (eV.push("vLightData" + VV, "vLightDiffuse" + VV, "vLightSpecular" + VV, "vLightDirection" + VV, "vLightWidth" + VV, "vLightHeight" + VV, "vLightFalloff" + VV, "vLightGround" + VV, "vSliceData" + VV, "vSliceRanges" + VV, "lightMatrix" + VV, "shadowsInfo" + VV, "depthValues" + VV), xV.push("shadowTexture" + VV), xV.push("depthTexture" + VV), eV.push("viewFrustumZ" + VV, "cascadeBlendFactor" + VV, "lightSizeUVCorrection" + VV, "depthCorrection" + VV, "penumbraDarkness" + VV, "frustumLengths" + VV), JV && (xV.push("projectionLightTexture" + VV), eV.push("textureProjectionMatrix" + VV)), yV && xV.push("iesLightTexture" + VV), QV && xV.push("rectAreaLightEmissionTexture" + VV), pV && (xV.push("lightDataTexture" + VV), nV || xV.push("tileMaskTexture" + VV)))
    }

    function HV(VV, eV, xV) {
      const JV = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      xV && JV.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), VV.push(...JV);
      eV.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function uV(VV, eV, xV) {
      let JV, YV, UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        yV = null;
      if (VV.uniformsNames) {
        const pV = VV;
        JV = pV.uniformsNames, YV = pV.uniformBuffersNames, eV = pV.samplers, xV = pV.defines, UV = pV.maxSimultaneousLights || 0, yV = pV.shaderLanguage ?? null
      } else JV = VV, eV || (eV = []);
      for (let pV = 0; pV < UV && xV["LIGHT" + pV]; pV++) KV(pV, JV, eV, xV["PROJECTEDLIGHTTEXTURE" + pV], YV, !1, xV["IESLIGHTTEXTURE" + pV], xV["CLUSTLIGHT" + pV], xV["RECTAREALIGHTEMISSIONTEXTURE" + pV], 1 === yV);
      xV.NUM_MORPH_INFLUENCERS && (JV.push("morphTargetInfluences"), JV.push("morphTargetCount")), xV.BAKED_VERTEX_ANIMATION_TEXTURE && (JV.push("bakedVertexAnimationSettings"), JV.push("bakedVertexAnimationTextureSizeInverted"), JV.push("bakedVertexAnimationTime"), eV.push("bakedVertexAnimationTexture"))
    }

    function sV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      VV.addUniform("vReflectionInfos", 2), VV.addUniform("reflectionMatrix", 16), eV && VV.addUniform("vReflectionMicrosurfaceInfos", 3), xV && (VV.addUniform("vReflectionPosition", 3), VV.addUniform("vReflectionSize", 3)), JV && (VV.addUniform("vReflectionFilteringInfo", 2), VV.addUniform("vReflectionDominantDirection", 3)), UV && VV.addUniform("vReflectionColor", 3), YV && (VV.addUniform("vSphericalL00", 3), VV.addUniform("vSphericalL1_1", 3), VV.addUniform("vSphericalL10", 3), VV.addUniform("vSphericalL11", 3), VV.addUniform("vSphericalL2_2", 3), VV.addUniform("vSphericalL2_1", 3), VV.addUniform("vSphericalL20", 3), VV.addUniform("vSphericalL21", 3), VV.addUniform("vSphericalL22", 3), VV.addUniform("vSphericalX", 3), VV.addUniform("vSphericalY", 3), VV.addUniform("vSphericalZ", 3), VV.addUniform("vSphericalXX_ZZ", 3), VV.addUniform("vSphericalYY_ZZ", 3), VV.addUniform("vSphericalZZ", 3), VV.addUniform("vSphericalXY", 3), VV.addUniform("vSphericalYZ", 3), VV.addUniform("vSphericalZX", 3))
    }
  },
  41606: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(38269),
      YV = xV(41553);
    class UV extends YV.e {
      constructor(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(VV, eV, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new JV.d, this._storeEffectOnSubMeshes = xV
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(VV, eV) {
        return !!VV && (!this._storeEffectOnSubMeshes || (!VV.hT || 0 === VV.hT.length || this.isReadyForSubMesh(VV, VV.hT[0], eV)))
      }
      _isReadyForSubMesh(VV) {
        const eV = VV.materialDefines;
        return !(this.checkReadyOnEveryCall || !VV.effect || !eV || eV._renderId !== this.dD().getRenderId())
      }
      bindOnlyWorldMatrix(VV) {
        this._activeEffect.setMatrix("world", VV)
      }
      bindOnlyNormalMatrix(VV) {
        this._activeEffect.setMatrix("normalMatrix", VV)
      }
      bind(VV, eV) {
        eV && this.bindForSubMesh(VV, eV, eV.hT[0])
      }
      _afterBind(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(VV, eV, xV), this.dD()._cachedEffect = eV, xV ? xV._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return xV._drawWrapper._forceRebindOnNextCall || VV.isCachedMaterialInvalid(this, eV, JV)
      }
      dispose(VV, eV, xV) {
        this._activeEffect = void 0, super.dispose(VV, eV, xV)
      }
    }
  },
  41630: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      e: () => YV
    });
    const JV = new WeakMap;

    function YV(VV) {
      const eV = VV.getVertexBuffers();
      if (!eV) return null;
      let xV = JV.get(VV);
      if (xV) {
        let VV = !1;
        for (const JV in eV)
          if (!xV.has(JV)) {
            VV = !0;
            break
          } if (!VV) return xV
      } else xV = new Map, JV.set(VV, xV);
      for (const JV in eV) {
        const VV = eV[JV];
        if (VV) {
          const eV = VV.byteOffset,
            YV = VV.byteStride,
            UV = VV.type,
            yV = VV.normalized;
          xV.set(JV, {
            offset: eV,
            stride: YV,
            type: UV,
            normalized: yV
          })
        }
      }
      return xV
    }

    function UV(VV, eV) {
      eV.forEach(((eV, xV) => {
        const JV = `vp_${xV}_info`;
        VV.setFloat4(JV, eV.offset, eV.stride, eV.type, eV.normalized ? 1 : 0)
      }))
    }
  },
  41575: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      g: () => QV
    });
    var JV = xV(41257),
      YV = xV(38269),
      UV = xV(41263);
    let yV = (() => {
      var VV;
      let eV, xV, YV = [];
      return VV = class {
        static extractMinAndMaxIndexed(VV, eV, xV, JV, YV, UV) {
          for (let yV = xV; yV < xV + JV; yV++) {
            const xV = 3 * eV[yV],
              JV = VV[xV],
              pV = VV[xV + 1],
              QV = VV[xV + 2];
            YV.minimizeInPlaceFromFloats(JV, pV, QV), UV.maximizeInPlaceFromFloats(JV, pV, QV)
          }
        }
        static extractMinAndMax(VV, eV, xV, JV, YV, UV) {
          for (let yV = eV, pV = eV * JV; yV < eV + xV; yV++, pV += JV) {
            const eV = VV[pV],
              xV = VV[pV + 1],
              JV = VV[pV + 2];
            YV.minimizeInPlaceFromFloats(eV, xV, JV), UV.maximizeInPlaceFromFloats(eV, xV, JV)
          }
        }
      }, (() => {
        const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [UV.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], xV = [UV.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, JV.i)(VV, null, eV, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: VV => "extractMinAndMaxIndexed" in VV,
            get: VV => VV.extractMinAndMaxIndexed
          },
          metadata: yV
        }, null, YV), (0, JV.i)(VV, null, xV, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: VV => "extractMinAndMax" in VV,
            get: VV => VV.extractMinAndMax
          },
          metadata: yV
        }, null, YV), yV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yV
        }), (0, JV.l)(VV, YV)
      })(), VV
    })();

    function pV(VV, eV, xV, JV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const pV = new YV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        QV = new YV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return yV.extractMinAndMaxIndexed(VV, eV, xV, JV, pV, QV), UV && (pV.x -= pV.x * UV.x + UV.y, pV.y -= pV.y * UV.x + UV.y, pV.z -= pV.z * UV.x + UV.y, QV.x += QV.x * UV.x + UV.y, QV.y += QV.y * UV.x + UV.y, QV.z += QV.z * UV.x + UV.y), {
        minimum: pV,
        maximum: QV
      }
    }

    function QV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        UV = arguments.length > 4 ? arguments[4] : void 0;
      const pV = new YV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        QV = new YV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return UV || (UV = 3), yV.extractMinAndMax(VV, eV, xV, UV, pV, QV), JV && (pV.x -= pV.x * JV.x + JV.y, pV.y -= pV.y * JV.x + JV.y, pV.z -= pV.z * JV.x + JV.y, QV.x += QV.x * JV.x + JV.y, QV.y += QV.y * JV.x + JV.y, QV.z += QV.z * JV.x + JV.y), {
        minimum: pV,
        maximum: QV
      }
    }
  },
  41559: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV
    });
    var JV, YV = xV(41394),
      UV = xV(41563),
      yV = xV(41566),
      pV = xV(41575),
      QV = xV(41577),
      nV = xV(41138);
    class wV {
      get materialDefines() {
        const VV = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof VV ? null : VV
      }
      set materialDefines(VV) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = VV
      }
      _getDrawWrapper(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        VV = VV ?? this._engine.currentRenderPassId;
        let xV = this._drawWrappers[VV];
        return !xV && eV && (this._drawWrappers[VV] = xV = new QV.d(this._mesh.dD().sk())), xV
      }
      _removeDrawWrapper(VV) {
        let eV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[VV]?.dispose(eV), this._drawWrappers[VV] = void 0
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
      _setMainDrawWrapperOverride(VV) {
        this._mainDrawWrapperOverride = VV
      }
      setEffect(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const YV = this._drawWrapper;
        YV.setEffect(VV, eV, JV), void 0 !== xV && (YV.materialContext = xV), VV || (YV.defines = null, YV.materialContext = void 0)
      }
      resetDrawCache(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== VV) return void this._removeDrawWrapper(VV, !0, eV);
          for (const VV of this._drawWrappers) VV?.dispose(eV)
        }
        this._drawWrappers = []
      }
      static AddToMesh(VV, eV, xV, JV, YV, UV, yV) {
        return new wV(VV, eV, xV, JV, YV, UV, yV, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(VV, eV, xV, JV, YV, UV, yV) {
        let pV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QV = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = VV, this.verticesStart = eV, this.verticesCount = xV, this.indexStart = JV, this.indexCount = YV, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = UV, this._renderingMesh = yV || UV, QV && UV.hT.push(this), this._engine = this._mesh.dD().sk(), this.resetDrawCache(), this._trianglePlanes = [], this._id = UV.hT.length - 1, pV && (this.refreshBoundingInfo(), UV.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      qL() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.qL() : this._boundingInfo
      }
      setBoundingInfo(VV) {
        return this._boundingInfo = VV, this
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
        const VV = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return VV || this._renderingMesh
      }
      eb() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const eV = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!eV) return VV && this._mesh.dD()._hasDefaultMaterial ? this._mesh.dD().defaultMaterial : null;
        if (this._isMultiMaterial(eV)) {
          const VV = eV.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== VV && (this._currentMaterial = VV, this.resetDrawCache()), VV
        }
        return eV
      }
      _isMultiMaterial(VV) {
        return void 0 !== VV.getSubMaterial
      }
      refreshBoundingInfo() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (VV || (VV = this._renderingMesh.getVerticesData(YV.j.PositionKind)), !VV) return this._boundingInfo = this._mesh.qL(), this;
        const eV = this._renderingMesh.RYV();
        let xV;
        if (0 === this.indexStart && this.indexCount === eV.length) {
          const VV = this._renderingMesh.qL();
          xV = {
            minimum: VV.minimum.clone(),
            maximum: VV.maximum.clone()
          }
        } else xV = (0, pV.e)(VV, eV, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(xV.minimum, xV.maximum) : this._boundingInfo = new yV.b(xV.minimum, xV.maximum), this
      }
      _checkCollision(VV) {
        return this.qL()._checkCollision(VV)
      }
      updateBoundingInfo(VV) {
        let eV = this.qL();
        return eV || (this.refreshBoundingInfo(), eV = this.qL()), eV && eV.update(VV), this
      }
      isInFrustum(VV) {
        const eV = this.qL();
        return !!eV && eV.isInFrustum(VV, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(VV) {
        const eV = this.qL();
        return !!eV && eV.isCompletelyInFrustum(VV)
      }
      render(VV) {
        return this._renderingMesh.render(this, VV, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(VV, eV) {
        if (!this._linesIndexBuffer) {
          const xV = 6 * Math.floor(this.indexCount / 3),
            JV = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(xV) : new Uint16Array(xV);
          let YV = 0;
          if (0 === VV.length)
            for (let VV = this.indexStart; VV < this.indexStart + this.indexCount; VV += 3) JV[YV++] = VV, JV[YV++] = VV + 1, JV[YV++] = VV + 1, JV[YV++] = VV + 2, JV[YV++] = VV + 2, JV[YV++] = VV;
          else
            for (let eV = this.indexStart; eV < this.indexStart + this.indexCount; eV += 3) JV[YV++] = VV[eV], JV[YV++] = VV[eV + 1], JV[YV++] = VV[eV + 1], JV[YV++] = VV[eV + 2], JV[YV++] = VV[eV + 2], JV[YV++] = VV[eV];
          this._linesIndexBuffer = eV.createIndexBuffer(JV), this._linesIndexCount = JV.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(VV) {
        const eV = this.qL();
        return !!eV && VV.intersectsBox(eV.boundingBox)
      }
      intersects(VV, eV, xV, JV, YV) {
        const UV = this.eb();
        if (!UV) return null;
        let yV = 3,
          pV = !1;
        switch (UV.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            yV = 1, pV = !0
        }
        return 4 === UV.fillMode ? xV.length ? this._intersectLines(VV, eV, xV, this._mesh.intersectionThreshold, JV) : this._intersectUnIndexedLines(VV, eV, xV, this._mesh.intersectionThreshold, JV) : !xV.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(VV, eV, xV, JV, YV) : this._intersectTriangles(VV, eV, xV, yV, pV, JV, YV)
      }
      _intersectLines(VV, eV, xV, JV, YV) {
        let yV = null;
        for (let pV = this.indexStart; pV < this.indexStart + this.indexCount; pV += 2) {
          const QV = eV[xV[pV]],
            nV = eV[xV[pV + 1]],
            wV = VV.intersectionSegment(QV, nV, JV);
          if (!(wV < 0) && ((YV || !yV || wV < yV.distance) && (yV = new UV.d(null, null, wV), yV.faceId = pV / 2, YV))) break
        }
        return yV
      }
      _intersectUnIndexedLines(VV, eV, xV, JV, YV) {
        let yV = null;
        for (let pV = this.verticesStart; pV < this.verticesStart + this.verticesCount; pV += 2) {
          const xV = eV[pV],
            QV = eV[pV + 1],
            nV = VV.intersectionSegment(xV, QV, JV);
          if (!(nV < 0) && ((YV || !yV || nV < yV.distance) && (yV = new UV.d(null, null, nV), yV.faceId = pV / 2, YV))) break
        }
        return yV
      }
      _intersectTriangles(VV, eV, xV, JV, YV, UV, yV) {
        let pV = null,
          QV = -1;
        for (let nV = this.indexStart; nV < this.indexStart + this.indexCount - (3 - JV); nV += JV) {
          QV++;
          const JV = xV[nV],
            wV = xV[nV + 1],
            ZV = xV[nV + 2];
          if (YV && 4294967295 === ZV) {
            nV += 2;
            continue
          }
          const vV = eV[JV],
            rV = eV[wV],
            kV = eV[ZV];
          if (!vV || !rV || !kV) continue;
          if (yV && !yV(vV, rV, kV, VV, JV, wV, ZV)) continue;
          const bV = VV.intersectsTriangle(vV, rV, kV);
          if (bV) {
            if (bV.distance < 0) continue;
            if ((UV || !pV || bV.distance < pV.distance) && (pV = bV, pV.faceId = QV, UV)) break
          }
        }
        return pV
      }
      _intersectUnIndexedTriangles(VV, eV, xV, JV, YV) {
        let UV = null;
        for (let yV = this.verticesStart; yV < this.verticesStart + this.verticesCount; yV += 3) {
          const xV = eV[yV],
            pV = eV[yV + 1],
            QV = eV[yV + 2];
          if (YV && !YV(xV, pV, QV, VV, -1, -1, -1)) continue;
          const nV = VV.intersectsTriangle(xV, pV, QV);
          if (nV) {
            if (nV.distance < 0) continue;
            if ((JV || !UV || nV.distance < UV.distance) && (UV = nV, UV.faceId = yV / 3, JV)) break
          }
        }
        return UV
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(VV, eV) {
        const xV = new wV(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, VV, eV, !1);
        if (!this.IsGlobal) {
          const VV = this.qL();
          if (!VV) return xV;
          xV._boundingInfo = new yV.b(VV.minimum, VV.maximum)
        }
        return xV
      }
      dispose() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.dD().sk()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const eV = this._mesh.hT.indexOf(this);
        this._mesh.hT.splice(eV, 1), this.resetDrawCache(void 0, VV)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(VV, eV, xV, JV, YV) {
        let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = Number.MAX_VALUE,
          pV = -Number.MAX_VALUE;
        const QV = (YV || JV).RYV();
        for (let nV = eV; nV < eV + xV; nV++) {
          const VV = QV[nV];
          VV < yV && (yV = VV), VV > pV && (pV = VV)
        }
        return new wV(VV, yV, pV - yV + 1, eV, xV, JV, YV, UV)
      }
    }(JV = wV.prototype).projectToRef ?? (JV.projectToRef = (0, nV.j)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);