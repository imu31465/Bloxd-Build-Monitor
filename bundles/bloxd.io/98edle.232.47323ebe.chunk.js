export const id = 232;
export const ids = [232];
export const modules = {
  37882: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    class wW {
      constructor(WW, RW, MW) {
        this.bu = WW, this.bv = RW, this.distance = MW, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  37888: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(35330),
      CW = MW(35324),
      zR = MW(35328);
    class AW {
      constructor(WW, RW, MW) {
        this.vectors = (0, wW.b)(8, CW.q.Zero), this.center = CW.q.Zero(), this.centerWorld = CW.q.Zero(), this.extendSize = CW.q.Zero(), this.extendSizeWorld = CW.q.Zero(), this.directions = (0, wW.b)(3, CW.q.Zero), this.vectorsWorld = (0, wW.b)(8, CW.q.Zero), this.minimumWorld = CW.q.Zero(), this.maximumWorld = CW.q.Zero(), this.minimum = CW.q.Zero(), this.maximum = CW.q.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(WW, RW, MW)
      }
      reConstruct(WW, RW, MW) {
        const wW = WW.x,
          zR = WW.y,
          AW = WW.z,
          bR = RW.x,
          yR = RW.y,
          NW = RW.z,
          eW = this.vectors;
        this.minimum.nzW(wW, zR, AW), this.maximum.nzW(bR, yR, NW), eW[0].nzW(wW, zR, AW), eW[1].nzW(bR, yR, NW), eW[2].nzW(bR, zR, AW), eW[3].nzW(wW, yR, AW), eW[4].nzW(wW, zR, NW), eW[5].nzW(bR, yR, AW), eW[6].nzW(wW, yR, NW), eW[7].nzW(bR, zR, NW), RW.addToRef(WW, this.center).scaleInPlace(.5), RW.subtractToRef(WW, this.extendSize).scaleInPlace(.5), this._worldMatrix = MW || CW.d.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(WW) {
        const RW = AW._TmpVector3,
          MW = this.maximum.subtractToRef(this.minimum, RW[0]),
          wW = MW.length();
        MW.normalizeFromLength(wW);
        const CW = wW * WW,
          zR = MW.scaleInPlace(.5 * CW),
          bR = this.center.subtractToRef(zR, RW[1]),
          yR = this.center.addToRef(zR, RW[2]);
        return this.reConstruct(bR, yR, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(WW) {
        const RW = this.minimumWorld,
          MW = this.maximumWorld,
          wW = this.directions,
          zR = this.vectorsWorld,
          AW = this.vectors;
        if (WW.isIdentity()) {
          RW.hyW(this.minimum), MW.hyW(this.maximum);
          for (let WW = 0; WW < 8; ++WW) zR[WW].hyW(AW[WW]);
          this.extendSizeWorld.hyW(this.extendSize), this.centerWorld.hyW(this.center)
        } else {
          RW.YzW(Number.MAX_VALUE), MW.YzW(-Number.MAX_VALUE);
          for (let wW = 0; wW < 8; ++wW) {
            const bR = zR[wW];
            CW.q.TransformCoordinatesToRef(AW[wW], WW, bR), RW.minimizeInPlace(bR), MW.maximizeInPlace(bR)
          }
          MW.subtractToRef(RW, this.extendSizeWorld).scaleInPlace(.5), MW.addToRef(RW, this.centerWorld).scaleInPlace(.5)
        }
        CW.q.FromArrayToRef(WW.m, 0, wW[0]), CW.q.FromArrayToRef(WW.m, 4, wW[1]), CW.q.FromArrayToRef(WW.m, 8, wW[2]), this._worldMatrix = WW
      }
      isInFrustum(WW) {
        return AW.IsInFrustum(this.vectorsWorld, WW)
      }
      isCompletelyInFrustum(WW) {
        return AW.IsCompletelyInFrustum(this.vectorsWorld, WW)
      }
      intersectsPoint(WW) {
        const RW = this.minimumWorld,
          MW = this.maximumWorld,
          wW = RW.x,
          CW = RW.y,
          AW = RW.z,
          bR = MW.x,
          yR = MW.y,
          NW = MW.z,
          eW = WW.x,
          BW = WW.y,
          tR = WW.z,
          TW = -zR.c;
        return !(bR - eW < TW || TW > eW - wW) && (!(yR - BW < TW || TW > BW - CW) && !(NW - tR < TW || TW > tR - AW))
      }
      intersectsSphere(WW) {
        return AW.IntersectsSphere(this.minimumWorld, this.maximumWorld, WW.centerWorld, WW.radiusWorld)
      }
      intersectsMinMax(WW, RW) {
        const MW = this.minimumWorld,
          wW = this.maximumWorld,
          CW = MW.x,
          zR = MW.y,
          AW = MW.z,
          bR = wW.x,
          yR = wW.y,
          NW = wW.z,
          eW = WW.x,
          BW = WW.y,
          tR = WW.z,
          TW = RW.x,
          gR = RW.y,
          iR = RW.z;
        return !(bR < eW || CW > TW) && (!(yR < BW || zR > gR) && !(NW < tR || AW > iR))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(WW, RW) {
        return WW.intersectsMinMax(RW.minimumWorld, RW.maximumWorld)
      }
      static IntersectsSphere(WW, RW, MW, wW) {
        const zR = AW._TmpVector3[0];
        CW.q.ClampToRef(MW, WW, RW, zR);
        return CW.q.DistanceSquared(MW, zR) <= wW * wW
      }
      static IsCompletelyInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; ++MW) {
          const wW = RW[MW];
          for (let RW = 0; RW < 8; ++RW)
            if (wW.dotCoordinate(WW[RW]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; ++MW) {
          let wW = !0;
          const CW = RW[MW];
          for (let RW = 0; RW < 8; ++RW)
            if (CW.dotCoordinate(WW[RW]) >= 0) {
              wW = !1;
              break
            } if (wW) return !1
        }
        return !0
      }
    }
    AW._TmpVector3 = (0, wW.b)(3, CW.q.Zero)
  },
  37884: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => BW
    });
    var wW = MW(35330),
      CW = MW(35324),
      zR = MW(37888);
    class AW {
      constructor(WW, RW, MW) {
        this.center = CW.q.Zero(), this.centerWorld = CW.q.Zero(), this.minimum = CW.q.Zero(), this.maximum = CW.q.Zero(), this.reConstruct(WW, RW, MW)
      }
      reConstruct(WW, RW, MW) {
        this.minimum.hyW(WW), this.maximum.hyW(RW);
        const wW = CW.q.Distance(WW, RW);
        RW.addToRef(WW, this.center).scaleInPlace(.5), this.radius = .5 * wW, this._update(MW || CW.d.IdentityReadOnly)
      }
      scale(WW) {
        const RW = AW._TmpVector3,
          MW = this.maximum.subtractToRef(this.minimum, RW[0]),
          wW = MW.length();
        MW.normalizeFromLength(wW);
        const CW = wW * WW,
          zR = MW.scaleInPlace(.5 * CW),
          bR = this.center.subtractToRef(zR, RW[1]),
          yR = this.center.addToRef(zR, RW[2]);
        return this.reConstruct(bR, yR, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(WW) {
        if (WW.isIdentity()) this.centerWorld.hyW(this.center), this.radiusWorld = this.radius;
        else {
          CW.q.TransformCoordinatesToRef(this.center, WW, this.centerWorld);
          const RW = AW._TmpVector3[0];
          CW.q.TransformNormalFromFloatsToRef(1, 1, 1, WW, RW), this.radiusWorld = Math.max(Math.abs(RW.x), Math.abs(RW.y), Math.abs(RW.z)) * this.radius
        }
      }
      isInFrustum(WW) {
        const RW = this.centerWorld,
          MW = this.radiusWorld;
        for (let wW = 0; wW < 6; wW++)
          if (WW[wW].dotCoordinate(RW) <= -MW) return !1;
        return !0
      }
      isCenterInFrustum(WW) {
        const RW = this.centerWorld;
        for (let MW = 0; MW < 6; MW++)
          if (WW[MW].dotCoordinate(RW) < 0) return !1;
        return !0
      }
      intersectsPoint(WW) {
        const RW = CW.q.DistanceSquared(this.centerWorld, WW);
        return !(this.radiusWorld * this.radiusWorld < RW)
      }
      static Intersects(WW, RW) {
        const MW = CW.q.DistanceSquared(WW.centerWorld, RW.centerWorld),
          wW = WW.radiusWorld + RW.radiusWorld;
        return !(wW * wW < MW)
      }
      static CreateFromCenterAndRadius(WW, RW, MW) {
        this._TmpVector3[0].hyW(WW), this._TmpVector3[1].nzW(0, 0, RW), this._TmpVector3[2].hyW(WW), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].pNW(this._TmpVector3[1]);
        const wW = new AW(this._TmpVector3[0], this._TmpVector3[2]);
        return wW._worldMatrix = MW || CW.d.Identity(), wW
      }
    }
    AW._TmpVector3 = (0, wW.b)(3, CW.q.Zero);
    const bR = {
        min: 0,
        max: 0
      },
      yR = {
        min: 0,
        max: 0
      },
      NW = (WW, RW, MW) => {
        const wW = CW.q.Dot(RW.centerWorld, WW),
          zR = Math.abs(CW.q.Dot(RW.directions[0], WW)) * RW.extendSize.x + Math.abs(CW.q.Dot(RW.directions[1], WW)) * RW.extendSize.y + Math.abs(CW.q.Dot(RW.directions[2], WW)) * RW.extendSize.z;
        MW.min = wW - zR, MW.max = wW + zR
      },
      eW = (WW, RW, MW) => (NW(WW, RW, bR), NW(WW, MW, yR), !(bR.min > yR.max || yR.min > bR.max));
    class BW {
      constructor(WW, RW, MW) {
        this._isLocked = !1, this.boundingBox = new zR.e(WW, RW, MW), this.VNW = new AW(WW, RW, MW)
      }
      reConstruct(WW, RW, MW) {
        this.boundingBox.reConstruct(WW, RW, MW), this.VNW.reConstruct(WW, RW, MW)
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
      set isLocked(WW) {
        this._isLocked = WW
      }
      update(WW) {
        this._isLocked || (this.boundingBox._update(WW), this.VNW._update(WW))
      }
      centerOn(WW, RW) {
        const MW = BW._TmpVector3[0].hyW(WW).pNW(RW),
          wW = BW._TmpVector3[1].hyW(WW).addInPlace(RW);
        return this.boundingBox.reConstruct(MW, wW, this.boundingBox.getWorldMatrix()), this.VNW.reConstruct(MW, wW, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(WW) {
        const RW = CW.q.Minimize(this.minimum, WW),
          MW = CW.q.Maximize(this.maximum, WW);
        return this.reConstruct(RW, MW, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(WW) {
        const RW = CW.k.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(RW);
        const MW = CW.k.vC[0];
        return CW.q.TransformCoordinatesToRef(WW.boundingBox.minimumWorld, RW, MW), this.encapsulate(MW), CW.q.TransformCoordinatesToRef(WW.boundingBox.maximumWorld, RW, MW), this.encapsulate(MW), this
      }
      scale(WW) {
        return this.boundingBox.scale(WW), this.VNW.scale(WW), this
      }
      isInFrustum(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === RW || 3 === RW) && this.VNW.isCenterInFrustum(WW)) return !0;
        if (!this.VNW.isInFrustum(WW)) return !1;
        return !(1 !== RW && 3 !== RW) || this.boundingBox.isInFrustum(WW)
      }
      get diagonalLength() {
        const WW = this.boundingBox;
        return WW.maximumWorld.subtractToRef(WW.minimumWorld, BW._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(WW) {
        return this.boundingBox.isCompletelyInFrustum(WW)
      }
      _checkCollision(WW) {
        return WW._canDoCollision(this.VNW.centerWorld, this.VNW.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(WW) {
        return !!this.VNW.centerWorld && (!!this.VNW.intersectsPoint(WW) && !!this.boundingBox.intersectsPoint(WW))
      }
      intersects(WW, RW) {
        if (!AW.Intersects(this.VNW, WW.VNW)) return !1;
        if (!zR.e.Intersects(this.boundingBox, WW.boundingBox)) return !1;
        if (!RW) return !0;
        const MW = this.boundingBox,
          wW = WW.boundingBox;
        return !!eW(MW.directions[0], MW, wW) && (!!eW(MW.directions[1], MW, wW) && (!!eW(MW.directions[2], MW, wW) && (!!eW(wW.directions[0], MW, wW) && (!!eW(wW.directions[1], MW, wW) && (!!eW(wW.directions[2], MW, wW) && (!!eW(CW.q.Cross(MW.directions[0], wW.directions[0]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[0], wW.directions[1]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[0], wW.directions[2]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[1], wW.directions[0]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[1], wW.directions[1]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[1], wW.directions[2]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[2], wW.directions[0]), MW, wW) && (!!eW(CW.q.Cross(MW.directions[2], wW.directions[1]), MW, wW) && !!eW(CW.q.Cross(MW.directions[2], wW.directions[2]), MW, wW))))))))))))))
      }
    }
    BW._TmpVector3 = (0, wW.b)(2, CW.q.Zero)
  },
  37910: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      d: () => yR,
      f: () => bR,
      g: () => AW
    });
    var wW = MW(37735),
      CW = MW(35324);

    function zR(WW) {
      -1 === WW.indexOf("vClipPlane") && WW.push("vClipPlane"), -1 === WW.indexOf("vClipPlane2") && WW.push("vClipPlane2"), -1 === WW.indexOf("vClipPlane3") && WW.push("vClipPlane3"), -1 === WW.indexOf("vClipPlane4") && WW.push("vClipPlane4"), -1 === WW.indexOf("vClipPlane5") && WW.push("vClipPlane5"), -1 === WW.indexOf("vClipPlane6") && WW.push("vClipPlane6")
    }

    function AW(WW, RW, MW) {
      const wW = !!(WW.clipPlane ?? RW.clipPlane),
        CW = !!(WW.clipPlane2 ?? RW.clipPlane2),
        zR = !!(WW.clipPlane3 ?? RW.clipPlane3),
        AW = !!(WW.clipPlane4 ?? RW.clipPlane4),
        bR = !!(WW.clipPlane5 ?? RW.clipPlane5),
        yR = !!(WW.clipPlane6 ?? RW.clipPlane6);
      wW && MW.push("#define CLIPPLANE"), CW && MW.push("#define CLIPPLANE2"), zR && MW.push("#define CLIPPLANE3"), AW && MW.push("#define CLIPPLANE4"), bR && MW.push("#define CLIPPLANE5"), yR && MW.push("#define CLIPPLANE6")
    }

    function bR(WW, RW, MW) {
      let wW = !1;
      const CW = !!(WW.clipPlane ?? RW.clipPlane),
        zR = !!(WW.clipPlane2 ?? RW.clipPlane2),
        AW = !!(WW.clipPlane3 ?? RW.clipPlane3),
        bR = !!(WW.clipPlane4 ?? RW.clipPlane4),
        yR = !!(WW.clipPlane5 ?? RW.clipPlane5),
        NW = !!(WW.clipPlane6 ?? RW.clipPlane6);
      return MW.CLIPPLANE !== CW && (MW.CLIPPLANE = CW, wW = !0), MW.CLIPPLANE2 !== zR && (MW.CLIPPLANE2 = zR, wW = !0), MW.CLIPPLANE3 !== AW && (MW.CLIPPLANE3 = AW, wW = !0), MW.CLIPPLANE4 !== bR && (MW.CLIPPLANE4 = bR, wW = !0), MW.CLIPPLANE5 !== yR && (MW.CLIPPLANE5 = yR, wW = !0), MW.CLIPPLANE6 !== NW && (MW.CLIPPLANE6 = NW, wW = !0), wW
    }

    function yR(WW, RW, MW) {
      let wW = RW.clipPlane ?? MW.clipPlane;
      NW(WW, "vClipPlane", wW), wW = RW.clipPlane2 ?? MW.clipPlane2, NW(WW, "vClipPlane2", wW), wW = RW.clipPlane3 ?? MW.clipPlane3, NW(WW, "vClipPlane3", wW), wW = RW.clipPlane4 ?? MW.clipPlane4, NW(WW, "vClipPlane4", wW), wW = RW.clipPlane5 ?? MW.clipPlane5, NW(WW, "vClipPlane5", wW), wW = RW.clipPlane6 ?? MW.clipPlane6, NW(WW, "vClipPlane6", wW)
    }

    function NW(WW, RW, MW) {
      if (MW) {
        const zR = wW.b.QRW()?.floatingOriginOffset || CW.q.ZeroReadOnly;
        WW.setFloat4(RW, MW.normal.x, MW.normal.y, MW.normal.z, MW.d + CW.q.Dot(MW.normal, zR))
      }
    }
  },
  37930: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    class wW {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(WW, RW) {
        this._defines[WW] || (WW < this._currentRank && (this._currentRank = WW), WW > this._maxRank && (this._maxRank = WW), this._defines[WW] = new Array), this._defines[WW].push(RW)
      }
      addCPUSkinningFallback(WW, RW) {
        this._mesh = RW, WW < this._currentRank && (this._currentRank = WW), WW > this._maxRank && (this._maxRank = WW)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(WW, RW) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, WW = WW.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), RW._bonesComputationForcedToCPU = !0;
          const MW = this._mesh.QRW();
          for (let WW = 0; WW < MW.meshes.length; WW++) {
            const wW = MW.meshes[WW];
            if (wW.material) {
              if (wW.computeBonesUsingShaders && 0 !== wW.numBoneInfluencers)
                if (wW.material.getEffect() === RW) wW.computeBonesUsingShaders = !1;
                else if (wW.Qs)
                for (const WW of wW.Qs) {
                  if (WW.effect === RW) {
                    wW.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && wW.computeBonesUsingShaders && wW.numBoneInfluencers > 0 && (wW.computeBonesUsingShaders = !1)
          }
        } else {
          const RW = this._defines[this._currentRank];
          if (RW)
            for (let MW = 0; MW < RW.length; MW++) WW = WW.replace("#define " + RW[MW], "");
          this._currentRank++
        }
        return WW
      }
    }
  },
  37866: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => PW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37685),
      AW = MW(35346),
      bR = MW(35344),
      yR = MW(37874),
      NW = MW(37712),
      eW = MW(36721),
      BW = MW(35852),
      tR = MW(37900),
      TW = MW(37615);
    let gR = (() => {
      var WW;
      let RW, MW, zR, AW, bR, yR, NW, eW, BW, tR, gR, iR, YW = [];
      return WW = class {
        constructor() {
          this._func = (0, wW.i)(this, YW), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(WW) {
          this._func = WW
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(WW) {
          this._backFunc = WW
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(WW) {
          this._funcRef = WW
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(WW) {
          this._funcMask = WW
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(WW) {
          this._opStencilFail = WW
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(WW) {
          this._opDepthFail = WW
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(WW) {
          this._opStencilDepthPass = WW
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(WW) {
          this._backOpStencilFail = WW
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(WW) {
          this._backOpDepthFail = WW
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(WW) {
          this._backOpStencilDepthPass = WW
        }
        get mask() {
          return this._mask
        }
        set mask(WW) {
          this._mask = WW
        }
        get enabled() {
          return this._enabled
        }
        set enabled(WW) {
          this._enabled = WW
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(WW) {
          TW.d.Clone((() => WW), this)
        }
        serialize() {
          return TW.d.Serialize(this)
        }
        parse(WW, RW, MW) {
          TW.d.Parse((() => this), WW, RW, MW)
        }
      }, (() => {
        const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], AW = [(0, CW.D)()], bR = [(0, CW.D)()], yR = [(0, CW.D)()], NW = [(0, CW.D)()], eW = [(0, CW.D)()], BW = [(0, CW.D)()], tR = [(0, CW.D)()], gR = [(0, CW.D)()], iR = [(0, CW.D)()], (0, wW.e)(WW, null, RW, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: WW => "func" in WW,
            get: WW => WW.func
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, MW, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: WW => "backFunc" in WW,
            get: WW => WW.backFunc
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, zR, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: WW => "funcRef" in WW,
            get: WW => WW.funcRef
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, AW, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "funcMask" in WW,
            get: WW => WW.funcMask
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, bR, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "opStencilFail" in WW,
            get: WW => WW.opStencilFail
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, yR, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "opDepthFail" in WW,
            get: WW => WW.opDepthFail
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, NW, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: WW => "opStencilDepthPass" in WW,
            get: WW => WW.opStencilDepthPass
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, eW, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "backOpStencilFail" in WW,
            get: WW => WW.backOpStencilFail
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, BW, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: WW => "backOpDepthFail" in WW,
            get: WW => WW.backOpDepthFail
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, tR, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: WW => "backOpStencilDepthPass" in WW,
            get: WW => WW.backOpStencilDepthPass
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, gR, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: WW => "mask" in WW,
            get: WW => WW.mask
          },
          metadata: TW
        }, null, YW), (0, wW.e)(WW, null, iR, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "enabled" in WW,
            get: WW => WW.enabled
          },
          metadata: TW
        }, null, YW), TW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TW
        })
      })(), WW
    })();
    var iR = MW(37904),
      YW = MW(37500),
      JW = MW(37470);
    let PW = (() => {
      var WW;
      let RW, MW, JW, PW, IW, oW, lW, FW, fW, QW, rR, cR, XW, jR, kR, aR, sW, dW, pW, hW, UW, EW, VW, mR, xR, vR, KW, uW, OW, nW = [],
        GW = [],
        LW = [],
        HW = [],
        DW = [],
        qR = [],
        ZW = [],
        SW = [],
        WR = [],
        RR = [],
        MR = [],
        wR = [],
        CR = [],
        zM = [],
        AR = [],
        bM = [],
        yM = [],
        NR = [],
        eR = [],
        BR = [],
        tM = [],
        TR = [],
        gM = [],
        iM = [],
        YR = [],
        JR = [],
        PR = [],
        IR = [],
        oR = [],
        lR = [],
        FR = [],
        fR = [],
        QR = [],
        rM = [],
        cM = [],
        XR = [],
        jM = [],
        kM = [],
        aM = [],
        sR = [],
        dR = [],
        pR = [],
        hR = [],
        UR = [],
        ER = [],
        VR = [],
        mM = [],
        xM = [],
        vM = [],
        KR = [],
        uR = [];
      return WW = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(RW) {
          this._useVertexPulling !== RW && (this._useVertexPulling = RW, this.KbW(WW.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(WW) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(RW) {
          if (this._alpha === RW) return;
          const MW = this._alpha;
          this._alpha = RW, 1 !== MW && 1 !== RW || this.KbW(WW.MiscDirtyFlag + WW.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(RW) {
          this._backFaceCulling !== RW && (this._backFaceCulling = RW, this.KbW(WW.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(RW) {
          const MW = Math.max(0, Math.min(0 | RW, 4));
          this._textureRepetitionMode !== MW && (this._textureRepetitionMode = MW, this.KbW(WW.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(RW) {
          this._cullBackFaces !== RW && (this._cullBackFaces = RW, this.KbW(WW.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(WW) {
          this._blockDirtyMechanism !== WW && (this._blockDirtyMechanism = WW, WW || this.markDirty())
        }
        atomicMaterialsUpdate(WW) {
          this.blockDirtyMechanism = !0;
          try {
            WW(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(WW) {
          this._onDisposeObserver && this.rMW.remove(this._onDisposeObserver), this._onDisposeObserver = this.rMW.add(WW)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new AW.c), this._onBindObservable
        }
        set onBind(WW) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(WW)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new AW.c), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new AW.c), this._onEffectCreatedObservable
        }
        set alphaMode(WW) {
          this._alphaMode[0] = WW
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[MW] !== RW && (this._alphaMode[MW] = RW, this.KbW(WW.TextureDirtyFlag))
        }
        set needDepthPrePass(WW) {
          this._needDepthPrePass !== WW && (this._needDepthPrePass = WW, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(RW) {
          this._fogEnabled !== RW && (this._fogEnabled = RW, this.KbW(WW.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case WW.WireFrameFillMode:
            case WW.LineListDrawMode:
            case WW.LineLoopDrawMode:
            case WW.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(RW) {
          this.fillMode = RW ? WW.WireFrameFillMode : WW.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case WW.PointFillMode:
            case WW.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(RW) {
          this.fillMode = RW ? WW.PointFillMode : WW.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(RW) {
          this._fillMode !== RW && (this._fillMode = RW, this.KbW(WW.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(WW) {
          const RW = this.QRW().mC().getCaps().fragmentDepthSupported;
          WW && !RW && eW.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = WW && RW, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(WW) {
          this._isVertexOutputInvariant !== WW && (this._isVertexOutputInvariant = WW, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(WW) {
          this._drawWrapper = WW
        }
        constructor(RW, MW, CW) {
          let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, wW.i)(this, nW), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, wW.i)(this, GW, void 0), this.uniqueId = ((0, wW.i)(this, LW), (0, wW.i)(this, HW, void 0)), this._loadedUniqueId = (0, wW.i)(this, DW), this.name = (0, wW.i)(this, qR, void 0), this.metadata = ((0, wW.i)(this, ZW), (0, wW.i)(this, SW, null)), this._internalMetadata = (0, wW.i)(this, WR), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, wW.i)(this, RR, !1), this.checkReadyOnlyOnce = ((0, wW.i)(this, MR), (0, wW.i)(this, wR, !1)), this.state = ((0, wW.i)(this, CR), (0, wW.i)(this, zM, "")), this._alpha = ((0, wW.i)(this, AR), (0, wW.i)(this, bM, 1)), this.inspectableCustomProperties = (0, wW.i)(this, yM), this._backFaceCulling = (0, wW.i)(this, NR, !0), this._textureRepetitionMode = ((0, wW.i)(this, eR), (0, wW.i)(this, BR, 0)), this.textureRepetitionHexTilingParams = ((0, wW.i)(this, tM), (0, wW.i)(this, TR, [1, .6, 7, .5])), this._cullBackFaces = ((0, wW.i)(this, gM), (0, wW.i)(this, iM, !0)), this._blockDirtyMechanism = ((0, wW.i)(this, YR), !1), this.sideOrientation = (0, wW.i)(this, JR, null), this.onCompiled = ((0, wW.i)(this, PR), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.rMW = new AW.c, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, wW.i)(this, IR, [2]), this._needDepthPrePass = ((0, wW.i)(this, oR), (0, wW.i)(this, lR, !1)), this.disableDepthWrite = ((0, wW.i)(this, FR), (0, wW.i)(this, fR, !1)), this.disableColorWrite = ((0, wW.i)(this, QR), (0, wW.i)(this, rM, !1)), this.forceDepthWrite = ((0, wW.i)(this, cM), (0, wW.i)(this, XR, !1)), this.depthFunction = ((0, wW.i)(this, jM), (0, wW.i)(this, kM, 0)), this.separateCullingPass = ((0, wW.i)(this, aM), (0, wW.i)(this, sR, !1)), this._fogEnabled = ((0, wW.i)(this, dR), (0, wW.i)(this, pR, !0)), this.pointSize = ((0, wW.i)(this, hR), (0, wW.i)(this, UR, 1)), this.zOffset = ((0, wW.i)(this, ER), (0, wW.i)(this, VR, 0)), this.zOffsetUnits = ((0, wW.i)(this, mM), (0, wW.i)(this, xM, 0)), this.clipPlane = (0, wW.i)(this, vM), this.stencil = new gR, this._isVertexOutputInvariant = (0, wW.i)(this, KR, WW.ForceVertexOutputInvariant), this._materialContext = (0, wW.i)(this, uR), this._useUBO = !1, this._fillMode = WW.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = RW;
          const eW = MW || bR.d.LastCreatedScene;
          eW && (this._scene = eW, this._dirtyCallbacks = {}, this._forceGLSL = yR, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = RW || zR.j.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.mC().createMaterialContext(), this._drawWrapper = new tR.d(this._scene.mC(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new NW.b(this._scene.mC(), void 0, void 0, RW), this._useUBO = this.QRW().mC().supportsUniformBuffers, this._createUniformBuffer(), CW || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), WW.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const WW = this.QRW().mC();
          this._uniformBuffer?.dispose(), WW.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new NW.b(WW, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new NW.b(this._scene.mC(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(WW) {
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
        isReady(WW, RW) {
          return !0
        }
        isReadyForSubMesh(WW, RW, MW) {
          const wW = RW.materialDefines;
          return !!wW && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = wW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        QRW() {
          return this._scene
        }
        _getEffectiveOrientation(WW) {
          return null !== this.sideOrientation ? this.sideOrientation : WW.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(WW) {
          this._transparencyMode = WW
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === WW.MATERIAL_ALPHABLEND || this._transparencyMode === WW.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === WW.MATERIAL_ALPHATEST || this._transparencyMode === WW.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === WW.MATERIAL_OPAQUE || this._transparencyMode === WW.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(WW) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : WW.visibility < 1 || !this._disableAlphaBlending && (WW.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(WW) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(WW) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const MW = this.QRW().meshes;
          for (const WW of MW)
            if (WW.Qs)
              for (const MW of WW.Qs)
                if (MW.Ow() === this)
                  for (const WW of MW._drawWrappers) WW && this._materialContext === WW.materialContext && (WW._wasPreviouslyReady = !1, WW._wasPreviouslyUsingInstances = null, WW._forceRebindOnNextCall = RW);
          RW && this.KbW(WW.AllDirtyFlag)
        }
        _preBind(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wW = this._scene.mC(),
            CW = (null == MW ? this.sideOrientation : MW) === WW.ClockWiseSideOrientation,
            zR = RW || this._getDrawWrapper();
          return (0, YW.c)(zR) && zR.materialContext && (zR.materialContext.useVertexPulling = this.useVertexPulling), wW.enableEffect(zR), wW.setState(this.backFaceCulling, this.zOffset, !1, CW, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), CW
        }
        bind(WW, RW) {}
        buildUniformLayout() {
          const WW = this._uniformBuffer;
          this._eventInfo.ubo = WW, this._callbackPluginEventGeneric(8, this._eventInfo), WW.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(WW, RW, MW) {
          const wW = MW._drawWrapper;
          this._eventInfo.subMesh = MW, this._callbackPluginEventBindForSubMesh(this._eventInfo), wW._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(WW) {}
        bindView(WW) {
          this._useUBO ? this._needToBindSceneUbo = !0 : WW.setMatrix("view", this.QRW().getViewMatrix())
        }
        bindViewProjection(WW) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (WW.setMatrix("viewProjection", this.QRW().getTransformMatrix()), WW.setMatrix("projection", this.QRW().getProjectionMatrix()), WW.setMatrix("inverseProjection", this.QRW().getInverseProjectionMatrix()))
        }
        bindEyePosition(WW, RW) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(WW, RW)
        }
        _afterBind(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && RW && (this._needToBindSceneUbo = !1, (0, iR.B)(RW, this.QRW().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = WW ? WW.visibility : 1, this._onBindObservable && WW && this._onBindObservable.notifyObservers(WW), this.disableDepthWrite) {
            const WW = this._scene.mC();
            this._cachedDepthWriteState = WW.getDepthWrite(), WW.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const WW = this._scene.mC();
            this._cachedColorWriteState = WW.getColorWrite(), WW.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const WW = this._scene.mC();
            this._cachedDepthFunctionState = WW.getDepthFunction() || 0, WW.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.mC().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.mC().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.mC().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(WW) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = WW, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(WW) {
          return null
        }
        _clonePlugins(RW, MW) {
          const wW = {};
          if (this._serializePlugins(wW), WW._ParsePlugins(wW, RW, this._scene, MW), this.pluginManager)
            for (const WW of this.pluginManager._plugins) {
              const MW = RW.pluginManager.getPlugin(WW.name);
              MW && WW.copyTo(MW)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const WW = [];
            for (const RW in this.meshMap) {
              const MW = this.meshMap[RW];
              MW && WW.push(MW)
            }
            return WW
          }
          return this._scene.meshes.filter((WW => WW.material === this))
        }
        forceCompilation(WW, RW, MW, wW) {
          const CW = {
              clipPlane: !1,
              useInstances: !1,
              ...MW
            },
            zR = this.QRW(),
            AW = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const bR = () => {
            if (!this._scene || !this._scene.mC()) return;
            const MW = zR.clipPlane;
            if (CW.clipPlane && (zR.clipPlane = new BW.c(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let MW = !0,
                zR = null;
              if (WW.Qs) {
                const RW = new yR.e(0, 0, 0, 0, 0, WW, void 0, !1, !1);
                RW.materialDefines && (RW.materialDefines._renderId = -1), this.isReadyForSubMesh(WW, RW, CW.useInstances) || (RW.effect && RW.effect.getCompilationError() && RW.effect.allFallbacksProcessed() ? zR = RW.effect.getCompilationError() : (MW = !1, setTimeout(bR, 16)))
              }
              MW && (this.allowShaderHotSwapping = AW, zR && wW && wW(zR), RW && RW(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = AW, RW && RW(this)) : setTimeout(bR, 16);
            CW.clipPlane && (zR.clipPlane = MW)
          };
          bR()
        }
        async forceCompilationAsync(WW, RW) {
          return await new Promise(((MW, wW) => {
            this.forceCompilation(WW, (() => {
              MW()
            }), RW, (WW => {
              wW(WW)
            }))
          }))
        }
        KbW(RW) {
          this.QRW().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (WW._DirtyCallbackArray.length = 0, RW & WW.ImageProcessingDirtyFlag && WW._DirtyCallbackArray.push(WW._ImageProcessingDirtyCallBack), RW & WW.TextureDirtyFlag && WW._DirtyCallbackArray.push(WW._TextureDirtyCallBack), RW & WW.LightDirtyFlag && WW._DirtyCallbackArray.push(WW._LightsDirtyCallBack), RW & WW.FresnelDirtyFlag && WW._DirtyCallbackArray.push(WW._FresnelDirtyCallBack), RW & WW.AttributesDirtyFlag && WW._DirtyCallbackArray.push(WW._AttributeDirtyCallBack), RW & WW.MiscDirtyFlag && WW._DirtyCallbackArray.push(WW._MiscDirtyCallBack), RW & WW.PrePassDirtyFlag && WW._DirtyCallbackArray.push(WW._PrePassDirtyCallBack), WW._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(WW._RunDirtyCallBacks), this.QRW().resetCachedMaterial())
        }
        resetDrawCache() {
          const WW = this.QRW().meshes;
          for (const RW of WW)
            if (RW.Qs)
              for (const WW of RW.Qs) WW.Ow() === this && WW.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(WW) {
          const RW = this.QRW();
          if (RW.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const MW = RW.meshes;
          for (const wW of MW)
            if (wW.Qs)
              for (const MW of wW.Qs) {
                if ((MW.Ow() || (RW._hasDefaultMaterial ? RW.defaultMaterial : null)) === this)
                  for (const RW of MW._drawWrappers) RW && RW.defines && RW.defines.markAllAsDirty && this._materialContext === RW.materialContext && WW(RW.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.QRW().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const WW = this.QRW().enablePrePassRenderer();
          WW && WW.KbW()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(WW._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(WW._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(WW._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(WW._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(WW._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(WW._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(WW._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(WW._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(WW._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(WW._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const WW = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.rMW.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(WW)
            }))
          }
        }
        setPrePassRenderer(WW) {
          return !1
        }
        dispose(WW, RW, MW) {
          const wW = this.QRW();
          if (wW.stopAnimation(this), wW.freeProcessedMaterials(), wW.removeMaterial(this), this._eventInfo.forceDisposeTextures = RW, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const WW = this._parentContainer.materials.indexOf(this);
            WW > -1 && this._parentContainer.materials.splice(WW, 1), this._parentContainer = null
          }
          if (!0 !== MW)
            if (this.meshMap)
              for (const CW in this.meshMap) {
                const WW = this.meshMap[CW];
                this._disposeMeshResources(WW)
              } else {
                const WW = wW.meshes;
                for (const RW of WW) this._disposeMeshResources(RW)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.rMW.notifyObservers(this), this.rMW.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(WW) {
          if (!WW) return;
          const RW = WW.geometry,
            MW = WW._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (WW.Qs && MW)
              for (const wW of WW.Qs) {
                const WW = wW._drawWrappers;
                for (let CW = 0; CW < WW.length; CW++) {
                  const zR = WW[CW]?.effect;
                  if (!zR) continue;
                  MW[CW] === this && (RW?._releaseVertexArrayObject(zR), wW._removeDrawWrapper(CW, !0, !0))
                }
              }
          } else RW?._releaseVertexArrayObject(this._drawWrapper.effect);
          WW.material !== this || WW.yBW || (WW.material = null)
        }
        serialize() {
          const WW = TW.d.Serialize(this);
          return WW.stencil = this.stencil.serialize(), WW.uniqueId = this.uniqueId, this._serializePlugins(WW), WW
        }
        _serializePlugins(WW) {
          if (WW.plugins = {}, this.pluginManager)
            for (const RW of this.pluginManager._plugins) RW.doNotSerialize || (WW.plugins[RW.getClassName()] = RW.serialize())
        }
        static ParseAlphaMode(WW, RW) {
          void 0 !== WW._alphaMode ? RW._alphaMode = Array.isArray(WW._alphaMode) ? [...WW._alphaMode] : [WW._alphaMode] : void 0 !== WW.alphaMode ? RW._alphaMode = Array.isArray(WW.alphaMode) ? [...WW.alphaMode] : [WW.alphaMode] : RW._alphaMode = [2]
        }
        static Parse(RW, MW, wW) {
          if (RW.customType) {
            if ("BABYLON.PBRMaterial" === RW.customType && RW.overloadedAlbedo && (RW.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return eW.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else RW.customType = "BABYLON.StandardMaterial";
          const CW = zR.j.Instantiate(RW.customType).Parse(RW, MW, wW);
          return CW._loadedUniqueId = RW.uniqueId, WW.ParseAlphaMode(RW, CW), CW
        }
        static _ParsePlugins(WW, RW, MW, wW) {
          if (WW.plugins)
            for (const CW in WW.plugins) {
              const AW = WW.plugins[CW];
              let bR = RW.pluginManager?.getPlugin(AW.name);
              if (!bR) {
                const WW = zR.j.Instantiate("BABYLON." + CW);
                WW && (bR = new WW(RW))
              }
              bR?.parse(AW, MW, wW)
            }
        }
      }, (() => {
        const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, CW.D)()], MW = [(0, CW.D)()], JW = [(0, CW.D)()], PW = [(0, CW.D)()], IW = [(0, CW.D)()], oW = [(0, CW.D)()], lW = [(0, CW.D)()], FW = [(0, CW.D)("alpha")], fW = [(0, CW.D)("backFaceCulling")], QW = [(0, CW.D)("textureRepetitionMode")], rR = [(0, CW.D)("textureRepetitionHexTilingParams")], cR = [(0, CW.D)("cullBackFaces")], XW = [(0, CW.D)()], jR = [(0, CW.D)()], kR = [(0, CW.D)()], aR = [(0, CW.D)()], sW = [(0, CW.D)()], dW = [(0, CW.D)()], pW = [(0, CW.D)()], hW = [(0, CW.D)()], UW = [(0, CW.D)("fogEnabled")], EW = [(0, CW.D)()], VW = [(0, CW.D)()], mR = [(0, CW.D)()], xR = [(0, CW.D)()], vR = [(0, CW.D)()], KW = [(0, CW.D)()], uW = [(0, CW.D)()], OW = [(0, CW.D)()], (0, wW.e)(WW, null, xR, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: WW => "pointsCloud" in WW,
            get: WW => WW.pointsCloud
          },
          metadata: zR
        }, null, nW), (0, wW.e)(WW, null, vR, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "fillMode" in WW,
            get: WW => WW.fillMode
          },
          metadata: zR
        }, null, nW), (0, wW.e)(WW, null, KW, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLogarithmicDepth" in WW,
            get: WW => WW.useLogarithmicDepth
          },
          metadata: zR
        }, null, nW), (0, wW.e)(WW, null, OW, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "transparencyMode" in WW,
            get: WW => WW.transparencyMode
          },
          metadata: zR
        }, null, nW), (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: WW => "id" in WW,
            get: WW => WW.id,
            set: (WW, RW) => {
              WW.id = RW
            }
          },
          metadata: zR
        }, GW, LW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: WW => "uniqueId" in WW,
            get: WW => WW.uniqueId,
            set: (WW, RW) => {
              WW.uniqueId = RW
            }
          },
          metadata: zR
        }, HW, DW), (0, wW.e)(null, null, JW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: WW => "name" in WW,
            get: WW => WW.name,
            set: (WW, RW) => {
              WW.name = RW
            }
          },
          metadata: zR
        }, qR, ZW), (0, wW.e)(null, null, PW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: WW => "metadata" in WW,
            get: WW => WW.metadata,
            set: (WW, RW) => {
              WW.metadata = RW
            }
          },
          metadata: zR
        }, SW, WR), (0, wW.e)(null, null, IW, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: WW => "checkReadyOnEveryCall" in WW,
            get: WW => WW.checkReadyOnEveryCall,
            set: (WW, RW) => {
              WW.checkReadyOnEveryCall = RW
            }
          },
          metadata: zR
        }, RR, MR), (0, wW.e)(null, null, oW, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: WW => "checkReadyOnlyOnce" in WW,
            get: WW => WW.checkReadyOnlyOnce,
            set: (WW, RW) => {
              WW.checkReadyOnlyOnce = RW
            }
          },
          metadata: zR
        }, wR, CR), (0, wW.e)(null, null, lW, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: WW => "state" in WW,
            get: WW => WW.state,
            set: (WW, RW) => {
              WW.state = RW
            }
          },
          metadata: zR
        }, zM, AR), (0, wW.e)(null, null, FW, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "_alpha" in WW,
            get: WW => WW._alpha,
            set: (WW, RW) => {
              WW._alpha = RW
            }
          },
          metadata: zR
        }, bM, yM), (0, wW.e)(null, null, fW, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: WW => "_backFaceCulling" in WW,
            get: WW => WW._backFaceCulling,
            set: (WW, RW) => {
              WW._backFaceCulling = RW
            }
          },
          metadata: zR
        }, NR, eR), (0, wW.e)(null, null, QW, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_textureRepetitionMode" in WW,
            get: WW => WW._textureRepetitionMode,
            set: (WW, RW) => {
              WW._textureRepetitionMode = RW
            }
          },
          metadata: zR
        }, BR, tM), (0, wW.e)(null, null, rR, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: WW => "textureRepetitionHexTilingParams" in WW,
            get: WW => WW.textureRepetitionHexTilingParams,
            set: (WW, RW) => {
              WW.textureRepetitionHexTilingParams = RW
            }
          },
          metadata: zR
        }, TR, gM), (0, wW.e)(null, null, cR, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: WW => "_cullBackFaces" in WW,
            get: WW => WW._cullBackFaces,
            set: (WW, RW) => {
              WW._cullBackFaces = RW
            }
          },
          metadata: zR
        }, iM, YR), (0, wW.e)(null, null, XW, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: WW => "sideOrientation" in WW,
            get: WW => WW.sideOrientation,
            set: (WW, RW) => {
              WW.sideOrientation = RW
            }
          },
          metadata: zR
        }, JR, PR), (0, wW.e)(null, null, jR, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_alphaMode" in WW,
            get: WW => WW._alphaMode,
            set: (WW, RW) => {
              WW._alphaMode = RW
            }
          },
          metadata: zR
        }, IR, oR), (0, wW.e)(null, null, kR, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: WW => "_needDepthPrePass" in WW,
            get: WW => WW._needDepthPrePass,
            set: (WW, RW) => {
              WW._needDepthPrePass = RW
            }
          },
          metadata: zR
        }, lR, FR), (0, wW.e)(null, null, aR, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableDepthWrite" in WW,
            get: WW => WW.disableDepthWrite,
            set: (WW, RW) => {
              WW.disableDepthWrite = RW
            }
          },
          metadata: zR
        }, fR, QR), (0, wW.e)(null, null, sW, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableColorWrite" in WW,
            get: WW => WW.disableColorWrite,
            set: (WW, RW) => {
              WW.disableColorWrite = RW
            }
          },
          metadata: zR
        }, rM, cM), (0, wW.e)(null, null, dW, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceDepthWrite" in WW,
            get: WW => WW.forceDepthWrite,
            set: (WW, RW) => {
              WW.forceDepthWrite = RW
            }
          },
          metadata: zR
        }, XR, jM), (0, wW.e)(null, null, pW, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: WW => "depthFunction" in WW,
            get: WW => WW.depthFunction,
            set: (WW, RW) => {
              WW.depthFunction = RW
            }
          },
          metadata: zR
        }, kM, aM), (0, wW.e)(null, null, hW, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: WW => "separateCullingPass" in WW,
            get: WW => WW.separateCullingPass,
            set: (WW, RW) => {
              WW.separateCullingPass = RW
            }
          },
          metadata: zR
        }, sR, dR), (0, wW.e)(null, null, UW, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "_fogEnabled" in WW,
            get: WW => WW._fogEnabled,
            set: (WW, RW) => {
              WW._fogEnabled = RW
            }
          },
          metadata: zR
        }, pR, hR), (0, wW.e)(null, null, EW, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: WW => "pointSize" in WW,
            get: WW => WW.pointSize,
            set: (WW, RW) => {
              WW.pointSize = RW
            }
          },
          metadata: zR
        }, UR, ER), (0, wW.e)(null, null, VW, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: WW => "zOffset" in WW,
            get: WW => WW.zOffset,
            set: (WW, RW) => {
              WW.zOffset = RW
            }
          },
          metadata: zR
        }, VR, mM), (0, wW.e)(null, null, mR, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: WW => "zOffsetUnits" in WW,
            get: WW => WW.zOffsetUnits,
            set: (WW, RW) => {
              WW.zOffsetUnits = RW
            }
          },
          metadata: zR
        }, xM, vM), (0, wW.e)(null, null, uW, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: WW => "_isVertexOutputInvariant" in WW,
            get: WW => WW._isVertexOutputInvariant,
            set: (WW, RW) => {
              WW._isVertexOutputInvariant = RW
            }
          },
          metadata: zR
        }, KR, uR), zR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zR
        })
      })(), WW.TriangleFillMode = 0, WW.WireFrameFillMode = 1, WW.PointFillMode = 2, WW.PointListDrawMode = 3, WW.LineListDrawMode = 4, WW.LineLoopDrawMode = 5, WW.LineStripDrawMode = 6, WW.TriangleStripDrawMode = 7, WW.TriangleFanDrawMode = 8, WW.ClockWiseSideOrientation = 0, WW.CounterClockWiseSideOrientation = 1, WW.ImageProcessingDirtyFlag = 64, WW.TextureDirtyFlag = 1, WW.LightDirtyFlag = 2, WW.FresnelDirtyFlag = 4, WW.AttributesDirtyFlag = 8, WW.MiscDirtyFlag = 16, WW.PrePassDirtyFlag = 32, WW.AllDirtyFlag = 127, WW.MATERIAL_OPAQUE = 0, WW.MATERIAL_ALPHATEST = 1, WW.MATERIAL_ALPHABLEND = 2, WW.MATERIAL_ALPHATESTANDBLEND = 3, WW.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, WW.MATERIAL_NORMALBLENDMETHOD_RNM = 1, WW.LIGHTFALLOFF_PHYSICAL = 0, WW.LIGHTFALLOFF_GLTF = 1, WW.LIGHTFALLOFF_STANDARD = 2, WW.OnEventObservable = new AW.c, WW.ForceVertexOutputInvariant = !1, WW._AllDirtyCallBack = WW => WW.markAllAsDirty(), WW._ImageProcessingDirtyCallBack = WW => WW.markAsImageProcessingDirty(), WW._TextureDirtyCallBack = WW => WW.markAsTexturesDirty(), WW._FresnelDirtyCallBack = WW => WW.markAsFresnelDirty(), WW._MiscDirtyCallBack = WW => WW.markAsMiscDirty(), WW._PrePassDirtyCallBack = WW => WW.markAsPrePassDirty(), WW._LightsDirtyCallBack = WW => WW.markAsLightDirty(), WW._AttributeDirtyCallBack = WW => WW.markAsAttributesDirty(), WW._FresnelAndMiscDirtyCallBack = RW => {
        WW._FresnelDirtyCallBack(RW), WW._MiscDirtyCallBack(RW)
      }, WW._TextureAndMiscDirtyCallBack = RW => {
        WW._TextureDirtyCallBack(RW), WW._MiscDirtyCallBack(RW)
      }, WW._DirtyCallbackArray = [], WW._RunDirtyCallBacks = RW => {
        for (const MW of WW._DirtyCallbackArray) MW(RW)
      }, WW
    })();
    Object.getOwnPropertyDescriptor(PW.prototype, "pluginManager") || Object.defineProperty(PW.prototype, "pluginManager", (0, JW.e)("Material", "pluginManager"))
  },
  37917: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(37485);
    class CW {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(WW) {
        this._DiffuseTextureEnabled !== WW && (this._DiffuseTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(WW) {
        this._BaseWeightTextureEnabled !== WW && (this._BaseWeightTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(WW) {
        this._BaseDiffuseRoughnessTextureEnabled !== WW && (this._BaseDiffuseRoughnessTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(WW) {
        this._DetailTextureEnabled !== WW && (this._DetailTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(WW) {
        this._DecalMapEnabled !== WW && (this._DecalMapEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(WW) {
        this._AmbientTextureEnabled !== WW && (this._AmbientTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(WW) {
        this._OpacityTextureEnabled !== WW && (this._OpacityTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(WW) {
        this._ReflectionTextureEnabled !== WW && (this._ReflectionTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(WW) {
        this._EmissiveTextureEnabled !== WW && (this._EmissiveTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(WW) {
        this._SpecularTextureEnabled !== WW && (this._SpecularTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(WW) {
        this._BumpTextureEnabled !== WW && (this._BumpTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(WW) {
        this._LightmapTextureEnabled !== WW && (this._LightmapTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(WW) {
        this._RefractionTextureEnabled !== WW && (this._RefractionTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(WW) {
        this._ColorGradingTextureEnabled !== WW && (this._ColorGradingTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(WW) {
        this._FresnelEnabled !== WW && (this._FresnelEnabled = WW, wW.b.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(WW) {
        this._ClearCoatTextureEnabled !== WW && (this._ClearCoatTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(WW) {
        this._ClearCoatBumpTextureEnabled !== WW && (this._ClearCoatBumpTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(WW) {
        this._ClearCoatTintTextureEnabled !== WW && (this._ClearCoatTintTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(WW) {
        this._SheenTextureEnabled !== WW && (this._SheenTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(WW) {
        this._AnisotropicTextureEnabled !== WW && (this._AnisotropicTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(WW) {
        this._ThicknessTextureEnabled !== WW && (this._ThicknessTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(WW) {
        this._RefractionIntensityTextureEnabled !== WW && (this._RefractionIntensityTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(WW) {
        this._TranslucencyIntensityTextureEnabled !== WW && (this._TranslucencyIntensityTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(WW) {
        this._TranslucencyColorTextureEnabled !== WW && (this._TranslucencyColorTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(WW) {
        this._IridescenceTextureEnabled !== WW && (this._IridescenceTextureEnabled = WW, wW.b.MarkAllMaterialsAsDirty(1))
      }
    }
    CW._DiffuseTextureEnabled = !0, CW._BaseWeightTextureEnabled = !0, CW._BaseDiffuseRoughnessTextureEnabled = !0, CW._DetailTextureEnabled = !0, CW._DecalMapEnabled = !0, CW._AmbientTextureEnabled = !0, CW._OpacityTextureEnabled = !0, CW._ReflectionTextureEnabled = !0, CW._EmissiveTextureEnabled = !0, CW._SpecularTextureEnabled = !0, CW._BumpTextureEnabled = !0, CW._LightmapTextureEnabled = !0, CW._RefractionTextureEnabled = !0, CW._ColorGradingTextureEnabled = !0, CW._FresnelEnabled = !0, CW._ClearCoatTextureEnabled = !0, CW._ClearCoatBumpTextureEnabled = !0, CW._ClearCoatTintTextureEnabled = !0, CW._SheenTextureEnabled = !0, CW._AnisotropicTextureEnabled = !0, CW._ThicknessTextureEnabled = !0, CW._RefractionIntensityTextureEnabled = !0, CW._TranslucencyIntensityTextureEnabled = !0, CW._TranslucencyColorTextureEnabled = !0, CW._IridescenceTextureEnabled = !0
  },
  37904: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => YW,
      D: () => oW,
      H: () => kR,
      J: () => lW,
      K: () => XW,
      O: () => jR,
      S: () => TW,
      T: () => tR,
      V: () => vR,
      X: () => UW,
      _: () => pW,
      ab: () => dW,
      cb: () => IW,
      d: () => sW,
      e: () => FW,
      eb: () => aR,
      fb: () => KW,
      i: () => BW,
      ib: () => uW,
      j: () => JW,
      lb: () => OW,
      n: () => PW,
      ob: () => HW,
      pb: () => GW,
      r: () => cR,
      rb: () => LW,
      t: () => yR,
      ub: () => gR,
      x: () => iR
    });
    var wW = MW(36721),
      CW = MW(35344),
      zR = MW(37774),
      AW = MW(37910),
      bR = MW(37917);

    function yR(WW, RW, MW) {
      if (!WW || WW.LOGARITHMICDEPTH || WW.indexOf && WW.indexOf("LOGARITHMICDEPTH") >= 0) {
        const WW = MW.activeCamera;
        1 === WW.mode && wW.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), RW.setFloat("logarithmicDepthConstant", 2 / (Math.log(WW.maxZ + 1) / Math.LN2))
      }
    }
    const NW = {
        r: 0,
        g: 0,
        b: 0
      },
      eW = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function BW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      MW && WW.fogEnabled && (!RW || RW.applyFog) && 0 !== WW.fogMode && (MW.setFloat4("vFogInfos", WW.fogMode, WW.fogStart, WW.fogEnd, WW.fogDensity), wW ? (WW.fogColor.toLinearSpaceToRef(NW, WW.mC().useExactSrgbConversions), MW.setColor3("vFogColor", NW)) : MW.setColor3("vFogColor", WW.fogColor))
    }

    function tR(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
      const BW = WW.numMaxInfluencers || WW.numInfluencers;
      return BW <= 0 ? 0 : (RW.push("#define MORPHTARGETS"), WW.hasPositions && RW.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), WW.hasNormals && RW.push("#define MORPHTARGETTEXTURE_HASNORMALS"), WW.hasTangents && RW.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), WW.hasUVs && RW.push("#define MORPHTARGETTEXTURE_HASUVS"), WW.hasUV2s && RW.push("#define MORPHTARGETTEXTURE_HASUV2S"), WW.hasColors && RW.push("#define MORPHTARGETTEXTURE_HASCOLORS"), WW.supportsPositions && CW && RW.push("#define MORPHTARGETS_POSITION"), WW.supportsNormals && zR && RW.push("#define MORPHTARGETS_NORMAL"), WW.supportsTangents && AW && RW.push("#define MORPHTARGETS_TANGENT"), WW.supportsUVs && bR && RW.push("#define MORPHTARGETS_UV"), WW.supportsUV2s && yR && RW.push("#define MORPHTARGETS_UV2"), WW.supportsColors && NW && RW.push("#define MORPHTARGETS_COLOR"), RW.push("#define NUM_MORPH_INFLUENCERS " + BW), WW.isUsingTextureForTargets && RW.push("#define MORPHTARGETS_TEXTURE"), eW.NUM_MORPH_INFLUENCERS = BW, eW.NORMAL = zR, eW.TANGENT = AW, eW.UV = bR, eW.UV2 = yR, eW.COLOR = NW, TW(MW, wW, eW, CW), BW)
    }

    function TW(WW, RW, MW) {
      let zR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const AW = MW.NUM_MORPH_INFLUENCERS;
      if (AW > 0 && CW.d.LastCreatedEngine) {
        const bR = CW.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          yR = RW.morphTargetManager;
        if (yR?.isUsingTextureForTargets) return;
        const NW = yR && yR.supportsPositions && zR,
          eW = yR && yR.supportsNormals && MW.NORMAL,
          BW = yR && yR.supportsTangents && MW.TANGENT,
          tR = yR && yR.supportsUVs && MW.UV1,
          TW = yR && yR.supportsUV2s && MW.UV2,
          gR = yR && yR.supportsColors && MW.VERTEXCOLOR;
        for (let MW = 0; MW < AW; MW++) NW && WW.push("position" + MW), eW && WW.push("normal" + MW), BW && WW.push("tangent" + MW), tR && WW.push("uv_" + MW), TW && WW.push("uv2_" + MW), gR && WW.push("color" + MW), WW.length > bR && wW.b.Error("Cannot add more vertex attributes for mesh " + RW.name)
      }
    }

    function gR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      WW.push("world0"), WW.push("world1"), WW.push("world2"), WW.push("world3"), RW && (WW.push("previousWorld0"), WW.push("previousWorld1"), WW.push("previousWorld2"), WW.push("previousWorld3"))
    }

    function iR(WW, RW) {
      const MW = WW.morphTargetManager;
      WW && MW && RW.setFloatArray("morphTargetInfluences", MW.influences)
    }

    function YW(WW, RW) {
      RW.bindToEffect(WW, "Scene")
    }

    function JW(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        NW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        BW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        tR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (WW.texturesEnabled && CW && bR.e.ReflectionTextureEnabled) {
        if (MW.aAW("reflectionMatrix", CW.getReflectionTextureMatrix()), MW.updateFloat2("vReflectionInfos", CW.level * WW.iblIntensity, tR), yR && CW.boundingBoxSize) {
          const WW = CW;
          MW.updateVector3("vReflectionPosition", WW.boundingBoxPosition), MW.updateVector3("vReflectionSize", WW.boundingBoxSize)
        }
        if (zR) {
          const WW = CW.getSize().width;
          MW.updateFloat2("vReflectionFilteringInfo", WW, Math.log2(WW))
        }
        if (eW && !RW.USEIRRADIANCEMAP) {
          const WW = CW.sphericalPolynomial;
          if (RW.USESPHERICALFROMREFLECTIONMAP && WW)
            if (RW.SPHERICAL_HARMONICS) {
              const RW = WW.preScaledHarmonics;
              MW.updateVector3("vSphericalL00", RW.l00), MW.updateVector3("vSphericalL1_1", RW.l1_1), MW.updateVector3("vSphericalL10", RW.l10), MW.updateVector3("vSphericalL11", RW.l11), MW.updateVector3("vSphericalL2_2", RW.l2_2), MW.updateVector3("vSphericalL2_1", RW.l2_1), MW.updateVector3("vSphericalL20", RW.l20), MW.updateVector3("vSphericalL21", RW.l21), MW.updateVector3("vSphericalL22", RW.l22)
            } else MW.updateFloat3("vSphericalX", WW.x.x, WW.x.y, WW.x.z), MW.updateFloat3("vSphericalY", WW.y.x, WW.y.y, WW.y.z), MW.updateFloat3("vSphericalZ", WW.z.x, WW.z.y, WW.z.z), MW.updateFloat3("vSphericalXX_ZZ", WW.xx.x - WW.zz.x, WW.xx.y - WW.zz.y, WW.xx.z - WW.zz.z), MW.updateFloat3("vSphericalYY_ZZ", WW.yy.x - WW.zz.x, WW.yy.y - WW.zz.y, WW.yy.z - WW.zz.z), MW.updateFloat3("vSphericalZZ", WW.zz.x, WW.zz.y, WW.zz.z), MW.updateFloat3("vSphericalXY", WW.xy.x, WW.xy.y, WW.xy.z), MW.updateFloat3("vSphericalYZ", WW.yz.x, WW.yz.y, WW.yz.z), MW.updateFloat3("vSphericalZX", WW.zx.x, WW.zx.y, WW.zx.z)
        } else NW && RW.USEIRRADIANCEMAP && RW.USE_IRRADIANCE_DOMINANT_DIRECTION && CW.irradianceTexture && MW.updateVector3("vReflectionDominantDirection", CW.irradianceTexture._dominantDirection);
        AW && MW.updateFloat3("vReflectionMicrosurfaceInfos", CW.getSize().width, CW.lodGenerationScale, CW.lodGenerationOffset)
      }
      BW && MW.updateColor3("vReflectionColor", wW)
    }

    function PW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (wW && bR.e.ReflectionTextureEnabled) {
        RW.LODBASEDMICROSFURACE ? MW.setTexture("reflectionSampler", wW) : (MW.setTexture("reflectionSampler", wW._lodTextureMid || wW), MW.setTexture("reflectionSamplerLow", wW._lodTextureLow || wW), MW.setTexture("reflectionSamplerHigh", wW._lodTextureHigh || wW)), RW.USEIRRADIANCEMAP && MW.setTexture("irradianceSampler", wW.irradianceTexture);
        const zR = WW.iblCdfGenerator;
        CW && zR && MW.setTexture("icdfSampler", zR.getIcdfTexture())
      }
    }

    function IW(WW, RW, MW) {
      RW._needUVs = !0, RW[MW] = !0, WW.optimizeUVAllocation && WW.getTextureMatrix().isIdentityAs3x2() ? (RW[MW + "DIRECTUV"] = WW.coordinatesIndex + 1, RW["MAINUV" + (WW.coordinatesIndex + 1)] = !0) : RW[MW + "DIRECTUV"] = 0
    }

    function oW(WW, RW, MW) {
      const wW = WW.getTextureMatrix();
      RW.aAW(MW + "Matrix", wW)
    }

    function lW(WW, RW, MW) {
      MW.BAKED_VERTEX_ANIMATION_TEXTURE && MW.INSTANCES && WW.push("bakedVertexAnimationSettingsInstanced")
    }

    function FW(WW, RW, MW) {
      var wW;
      if (RW && WW && (WW.computeBonesUsingShaders && RW._bonesComputationForcedToCPU && (WW.computeBonesUsingShaders = !1), WW.useBones && WW.computeBonesUsingShaders && WW.skeleton)) {
        const CW = WW.skeleton;
        if (CW.isUsingTextureForMatrices && RW.getUniformIndex("boneTextureInfo") > -1) {
          const MW = CW.getTransformMatrixTexture(WW);
          RW.setTexture("boneSampler", MW), RW.setFloat2("boneTextureInfo", CW._textureWidth, CW._textureHeight)
        } else {
          const zR = CW.getTransformMatrices(WW);
          zR && (RW.setMatrices("mBones", zR), MW && WW.QRW().prePassRenderer && WW.QRW().prePassRenderer.getIndex(2) && (MW.previousBones[WW.uniqueId] || (MW.previousBones[WW.uniqueId] = zR.slice()), RW.setMatrices("mPreviousBones", MW.previousBones[WW.uniqueId]), wW = zR, MW.previousBones[WW.uniqueId].set(wW)))
        }
      }
    }

    function fW(WW, RW, MW, wW, CW) {
      let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      WW._bindLight(RW, MW, wW, CW, zR)
    }
    const QW = 4,
      rR = new WeakMap;

    function cR(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const zR = Math.min(RW.lightSources.length, CW);
      for (let AW = 0; AW < zR; AW++) {
        fW(RW.lightSources[AW], AW, WW, MW, "boolean" === typeof wW ? wW : wW.SPECULARTERM, RW.receiveShadows)
      }
    }

    function XW(WW, RW, MW, wW) {
      MW.NUM_BONE_INFLUENCERS > 0 && (wW.addCPUSkinningFallback(0, RW), WW.push("matricesIndices"), WW.push("matricesWeights"), MW.NUM_BONE_INFLUENCERS > 4 && (WW.push("matricesIndicesExtra"), WW.push("matricesWeightsExtra")))
    }

    function jR(WW, RW) {
      (RW.INSTANCES || RW.THIN_INSTANCES) && gR(WW, !!RW.PREPASS_VELOCITY), RW.INSTANCESCOLOR && WW.push("instanceColor")
    }

    function kR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        CW = 0;
      for (let zR = 0; zR < MW && WW["LIGHT" + zR]; zR++) zR > 0 && (CW = wW + zR, RW.addFallback(CW, "LIGHT" + zR)), WW.SHADOWS || (WW["SHADOW" + zR] && RW.addFallback(wW, "SHADOW" + zR), WW["SHADOWPCF" + zR] && RW.addFallback(wW, "SHADOWPCF" + zR), WW["SHADOWPCSS" + zR] && RW.addFallback(wW, "SHADOWPCSS" + zR), WW["SHADOWPOISSON" + zR] && RW.addFallback(wW, "SHADOWPOISSON" + zR), WW["SHADOWESM" + zR] && RW.addFallback(wW, "SHADOWESM" + zR), WW["SHADOWCLOSEESM" + zR] && RW.addFallback(wW, "SHADOWCLOSEESM" + zR));
      return CW
    }

    function aR(WW, RW, MW, wW, CW, zR, AW) {
      let bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        NW = arguments.length > 9 ? arguments[9] : void 0,
        eW = arguments.length > 10 ? arguments[10] : void 0;
      if (AW._areMiscDirty) {
        AW.LOGARITHMICDEPTH = MW, AW.POINTSIZE = wW, AW.FOG = CW && function(WW, RW) {
          return RW.fogEnabled && WW.applyFog && 0 !== RW.fogMode
        }(WW, RW), AW.NONUNIFORMSCALING = WW.nonUniformScaling, AW.ALPHATEST = zR, AW.DECAL_AFTER_DETAIL = bR, AW.USE_VERTEX_PULLING = yR, AW.RIGHT_HANDED = RW.useRightHandedSystem;
        const BW = yR ? NW?.geometry?.getIndexBuffer() : null,
          tR = !!NW && NW.isUnIndexed;
        AW.VERTEX_PULLING_USE_INDEX_BUFFER = !!BW && !tR, AW.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!BW || tR) && BW.is32Bits, AW.VERTEXOUTPUT_INVARIANT = !!eW
      }
    }

    function sW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!WW.lightsEnabled || wW) return !0;
      const CW = RW.lightSources,
        zR = Math.min(CW.length, MW);
      for (let AW = 0; AW < zR; AW++)
        if (!CW[AW].areLightTexturesReady()) return !1;
      return !0
    }

    function dW(WW, RW, MW, CW) {
      let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!MW._areLightsDirty) return MW._needNormals;
      const bR = zR;
      zR = function(WW, RW) {
        const MW = WW.mC().getCaps().maxUniformBuffersPerShaderStage;
        if (null == MW) return RW;
        const wW = Math.max(MW - QW, 1);
        return Math.min(RW, wW)
      }(WW, zR);
      let yR = 0;
      const NW = {
        needNormals: MW._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (WW.lightsEnabled && !AW) {
        RW.lightSources.length > zR && zR < bR && function(WW, RW, MW, CW) {
          let zR = rR.get(WW);
          zR || (zR = new Set, rR.set(WW, zR)), zR.has(CW) || (zR.add(CW), wW.b.Warn(`maxSimultaneousLights is ${RW} but this engine supports at most ${MW} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${CW} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${CW+QW} uniform buffers, over the device limit of ${WW.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${MW}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${MW} or less to silence this warning.`))
        }(WW.mC(), bR, zR, Math.min(RW.lightSources.length, bR));
        for (const wW of RW.lightSources)
          if (hW(WW, RW, wW, yR, MW, CW, NW), yR++, yR === zR) break
      }
      MW.SPECULARTERM = NW.specularEnabled, MW.SHADOWS = NW.shadowEnabled;
      const eW = Math.max(zR, MW.MAXLIGHTCOUNT || 0);
      for (let wW = yR; wW < eW; wW++) void 0 !== MW["LIGHT" + wW] && (MW["LIGHT" + wW] = !1, MW["HEMILIGHT" + wW] = !1, MW["POINTLIGHT" + wW] = !1, MW["DIRLIGHT" + wW] = !1, MW["SPOTLIGHT" + wW] = !1, MW["AREALIGHT" + wW] = !1, MW["CLUSTLIGHT" + wW] = !1, MW["SHADOW" + wW] = !1, MW["SHADOWCSM" + wW] = !1, MW["SHADOWCSMDEBUG" + wW] = !1, MW["SHADOWCSMNUM_CASCADES" + wW] = !1, MW["SHADOWCSMUSESHADOWMAXZ" + wW] = !1, MW["SHADOWCSMNOBLEND" + wW] = !1, MW["SHADOWCSM_RIGHTHANDED" + wW] = !1, MW["SHADOWPCF" + wW] = !1, MW["SHADOWPCSS" + wW] = !1, MW["SHADOWPOISSON" + wW] = !1, MW["SHADOWESM" + wW] = !1, MW["SHADOWCLOSEESM" + wW] = !1, MW["SHADOWCUBE" + wW] = !1, MW["SHADOWLOWQUALITY" + wW] = !1, MW["SHADOWMEDIUMQUALITY" + wW] = !1);
      MW.LIGHTCOUNT = yR, MW.MAXLIGHTCOUNT = zR;
      const BW = WW.mC().getCaps();
      return void 0 === MW.SHADOWFLOAT && (NW.needRebuild = !0), MW.SHADOWFLOAT = NW.shadowEnabled && (BW.textureFloatRender && BW.textureFloatLinearFiltering || BW.textureHalfFloatRender && BW.textureHalfFloatLinearFiltering), MW.LIGHTMAPEXCLUDED = NW.lightmapMode, NW.needRebuild && MW.rebuild(), NW.needNormals
    }

    function pW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (RW && bR.e.ReflectionTextureEnabled) {
        if (!RW.isReadyOrNotBlocking()) return !1;
        MW._needNormals = !0, MW.REFLECTION = !0, MW.GAMMAREFLECTION = RW.gammaSpace, MW.RGBDREFLECTION = RW.isRGBD, MW.LODINREFLECTIONALPHA = RW.lodLevelInAlpha, MW.LINEARSPECULARREFLECTION = RW.linearSpecularLOD, MW.USEIRRADIANCEMAP = !1, MW.LODBASEDMICROSFURACE = WW.mC().getCaps().textureLOD;
        const AW = WW.mC();
        switch (wW && CW > 0 ? (MW.NUM_SAMPLES = "" + CW, AW._features.needTypeSuffixInShaderConstants && (MW.NUM_SAMPLES = MW.NUM_SAMPLES + "u"), MW.REALTIME_FILTERING = !0, WW.iblCdfGenerator && (MW.IBL_CDF_FILTERING = !0)) : MW.REALTIME_FILTERING = !1, MW.INVERTCUBICMAP = 6 === RW.coordinatesMode, MW.REFLECTIONMAP_3D = RW.isCube, MW.REFLECTIONMAP_OPPOSITEZ = MW.REFLECTIONMAP_3D && WW.useRightHandedSystem ? !RW.invertZ : RW.invertZ, MW.REFLECTIONMAP_CUBIC = !1, MW.REFLECTIONMAP_EXPLICIT = !1, MW.REFLECTIONMAP_PLANAR = !1, MW.REFLECTIONMAP_PROJECTION = !1, MW.REFLECTIONMAP_SKYBOX = !1, MW.REFLECTIONMAP_SPHERICAL = !1, MW.REFLECTIONMAP_EQUIRECTANGULAR = !1, MW.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, MW.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, RW.coordinatesMode) {
          case 0:
            MW.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            MW.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            MW.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            MW.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            MW.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            MW.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            MW.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            MW.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            MW.REFLECTIONMAP_CUBIC = !0, MW.USE_LOCAL_REFLECTIONMAP_CUBIC = !!RW.boundingBoxSize
        }
        5 !== RW.coordinatesMode && (RW.irradianceTexture ? (MW.USEIRRADIANCEMAP = !0, MW.USESPHERICALFROMREFLECTIONMAP = !1, MW.USESPHERICALINVERTEX = !1, RW.irradianceTexture._dominantDirection ? MW.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : MW.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : RW.isCube && (MW.USESPHERICALFROMREFLECTIONMAP = !0, MW.USEIRRADIANCEMAP = !1, MW.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, MW.USESPHERICALINVERTEX = zR))
      } else MW.REFLECTION = !1, MW.REFLECTIONMAP_3D = !1, MW.REFLECTIONMAP_SPHERICAL = !1, MW.REFLECTIONMAP_PLANAR = !1, MW.REFLECTIONMAP_CUBIC = !1, MW.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, MW.REFLECTIONMAP_PROJECTION = !1, MW.REFLECTIONMAP_SKYBOX = !1, MW.REFLECTIONMAP_EXPLICIT = !1, MW.REFLECTIONMAP_EQUIRECTANGULAR = !1, MW.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, MW.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, MW.INVERTCUBICMAP = !1, MW.USESPHERICALFROMREFLECTIONMAP = !1, MW.USEIRRADIANCEMAP = !1, MW.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, MW.USESPHERICALINVERTEX = !1, MW.REFLECTIONMAP_OPPOSITEZ = !1, MW.LODINREFLECTIONALPHA = !1, MW.GAMMAREFLECTION = !1, MW.RGBDREFLECTION = !1, MW.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function hW(WW, RW, MW, wW, CW, AW, bR) {
      switch (bR.needNormals = !0, void 0 === CW["LIGHT" + wW] && (bR.needRebuild = !0), CW["LIGHT" + wW] = !0, CW["SPOTLIGHT" + wW] = !1, CW["HEMILIGHT" + wW] = !1, CW["POINTLIGHT" + wW] = !1, CW["DIRLIGHT" + wW] = !1, CW["AREALIGHT" + wW] = !1, CW["CLUSTLIGHT" + wW] = !1, MW.prepareLightSpecificDefines(CW, wW), CW["LIGHT_FALLOFF_PHYSICAL" + wW] = !1, CW["LIGHT_FALLOFF_GLTF" + wW] = !1, CW["LIGHT_FALLOFF_STANDARD" + wW] = !1, MW.falloffType) {
        case zR.c.FALLOFF_GLTF:
          CW["LIGHT_FALLOFF_GLTF" + wW] = !0;
          break;
        case zR.c.FALLOFF_PHYSICAL:
          CW["LIGHT_FALLOFF_PHYSICAL" + wW] = !0;
          break;
        case zR.c.FALLOFF_STANDARD:
          CW["LIGHT_FALLOFF_STANDARD" + wW] = !0
      }
      if (AW && !MW.specular.equalsFloats(0, 0, 0) && (bR.specularEnabled = !0), CW["SHADOW" + wW] = !1, CW["SHADOWCSM" + wW] = !1, CW["SHADOWCSMDEBUG" + wW] = !1, CW["SHADOWCSMNUM_CASCADES" + wW] = !1, CW["SHADOWCSMUSESHADOWMAXZ" + wW] = !1, CW["SHADOWCSMNOBLEND" + wW] = !1, CW["SHADOWCSM_RIGHTHANDED" + wW] = !1, CW["SHADOWPCF" + wW] = !1, CW["SHADOWPCSS" + wW] = !1, CW["SHADOWPOISSON" + wW] = !1, CW["SHADOWESM" + wW] = !1, CW["SHADOWCLOSEESM" + wW] = !1, CW["SHADOWCUBE" + wW] = !1, CW["SHADOWLOWQUALITY" + wW] = !1, CW["SHADOWMEDIUMQUALITY" + wW] = !1, RW && RW.receiveShadows && WW.shadowsEnabled && MW.shadowEnabled) {
        const RW = MW.getShadowGenerator(WW.activeCamera) ?? MW.getShadowGenerator();
        if (RW) {
          const WW = RW.getShadowMap();
          WW && WW.renderList && WW.renderList.length > 0 && (bR.shadowEnabled = !0, RW.prepareDefines(CW, wW))
        }
      }
      MW.lightmapMode != zR.c.LIGHTMAP_DEFAULT ? (bR.lightmapMode = !0, CW["LIGHTMAPEXCLUDED" + wW] = !0, CW["LIGHTMAPNOSPECULAR" + wW] = MW.lightmapMode == zR.c.LIGHTMAP_SHADOWSONLY) : (CW["LIGHTMAPEXCLUDED" + wW] = !1, CW["LIGHTMAPNOSPECULAR" + wW] = !1)
    }

    function UW(WW, RW, MW, wW, CW) {
      let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yR = function(WW, RW) {
          let MW = !1;
          if (WW.activeCamera) {
            const wW = RW.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              CW = RW.CAMERA_PERSPECTIVE ? 1 : 0,
              zR = 1 === WW.activeCamera.mode ? 1 : 0,
              AW = 0 === WW.activeCamera.mode ? 1 : 0;
            (wW ^ zR || CW ^ AW) && (RW.CAMERA_ORTHOGRAPHIC = 1 === zR, RW.CAMERA_PERSPECTIVE = 1 === AW, MW = !0)
          }
          return MW
        }(WW, wW);
      !1 !== zR && (yR = (0, AW.f)(MW, WW, wW)), wW.DEPTHPREPASS !== !RW.getColorWrite() && (wW.DEPTHPREPASS = !wW.DEPTHPREPASS, yR = !0), wW.INSTANCES !== CW && (wW.INSTANCES = CW, yR = !0), wW.THIN_INSTANCES !== bR && (wW.THIN_INSTANCES = bR, yR = !0), yR && wW.markAsUnprocessed()
    }
    const EW = 40,
      VW = 64,
      mR = new WeakMap,
      xR = new WeakSet;

    function vR(WW, RW, MW, CW) {
      let zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        AW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        bR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!RW._areAttributesDirty && RW._needNormals === RW._normals && RW._needUVs === RW._uvs) return !1;
      RW._normals = RW._needNormals, RW._uvs = RW._needUVs, RW.NORMAL = RW._needNormals && WW.isVerticesDataPresent("normal"), RW._needNormals && WW.isVerticesDataPresent("tangent") && (RW.TANGENT = !0);
      for (let wW = 1; wW <= 6; ++wW) RW["UV" + wW] = !!RW._needUVs && WW.isVerticesDataPresent(`uv${1===wW?"":wW}`);
      if (MW) {
        const MW = WW.useVertexColors && WW.isVerticesDataPresent("color");
        RW.VERTEXCOLOR = MW, RW.VERTEXALPHA = WW.hasVertexAlpha && MW && AW
      }
      return WW.isVerticesDataPresent("instanceColor") && (WW.bBW || WW.hasThinInstances) && (RW.INSTANCESCOLOR = !0), CW && function(WW, RW) {
        if (WW.useBones && WW.computeBonesUsingShaders && WW.skeleton) {
          RW.NUM_BONE_INFLUENCERS = WW.numBoneInfluencers;
          const MW = void 0 !== RW.BONETEXTURE;
          if (WW.skeleton.isUsingTextureForMatrices && MW) RW.BONETEXTURE = !0;
          else {
            RW.BonesPerMesh = WW.skeleton.bones.length + 1, RW.BONETEXTURE = !MW && void 0;
            const CW = WW.QRW(),
              zR = CW.prePassRenderer;
            if (zR && zR.enabled) {
              const MW = -1 === zR.excludedSkinnedMesh.indexOf(WW);
              RW.BONES_VELOCITY_ENABLED = MW
            }
            const AW = !0 === RW.MULTIVIEW,
              bR = 2 * RW.BonesPerMesh + (AW ? 1 : 0);
            if (mR.get(WW.skeleton) !== bR) {
              mR.set(WW.skeleton, bR);
              const MW = CW.mC().getCaps().maxVertexUniformVectors;
              if (MW && !xR.has(WW.skeleton)) {
                const CW = 4 * RW.BonesPerMesh,
                  zR = AW ? VW : EW,
                  bR = Math.max(MW - zR, 0);
                (CW > bR || AW && 3 * CW > MW) && (xR.add(WW.skeleton), wW.b.Warn(`Skeleton "${WW.skeleton.name}": ${WW.skeleton.bones.length} bones stored as vertex uniforms use ${CW} of ~${bR} usable uniform vectors${AW?" (multiview)":""} on a device reporting ${MW}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else RW.NUM_BONE_INFLUENCERS = 0, RW.BonesPerMesh = 0, void 0 !== RW.BONETEXTURE && (RW.BONETEXTURE = !1)
      }(WW, RW), zR && function(WW, RW) {
        const MW = WW.morphTargetManager;
        MW ? (RW.MORPHTARGETS_UV = MW.supportsUVs && RW.UV1, RW.MORPHTARGETS_UV2 = MW.supportsUV2s && RW.UV2, RW.MORPHTARGETS_TANGENT = MW.supportsTangents && RW.TANGENT, RW.MORPHTARGETS_NORMAL = MW.supportsNormals && RW.NORMAL, RW.MORPHTARGETS_POSITION = MW.supportsPositions, RW.MORPHTARGETS_COLOR = MW.supportsColors, RW.MORPHTARGETTEXTURE_HASUVS = MW.hasUVs, RW.MORPHTARGETTEXTURE_HASUV2S = MW.hasUV2s, RW.MORPHTARGETTEXTURE_HASTANGENTS = MW.hasTangents, RW.MORPHTARGETTEXTURE_HASNORMALS = MW.hasNormals, RW.MORPHTARGETTEXTURE_HASPOSITIONS = MW.hasPositions, RW.MORPHTARGETTEXTURE_HASCOLORS = MW.hasColors, RW.NUM_MORPH_INFLUENCERS = MW.numMaxInfluencers || MW.numInfluencers, RW.MORPHTARGETS = RW.NUM_MORPH_INFLUENCERS > 0, RW.MORPHTARGETS_TEXTURE = MW.isUsingTextureForTargets) : (RW.MORPHTARGETS_UV = !1, RW.MORPHTARGETS_UV2 = !1, RW.MORPHTARGETS_TANGENT = !1, RW.MORPHTARGETS_NORMAL = !1, RW.MORPHTARGETS_POSITION = !1, RW.MORPHTARGETS_COLOR = !1, RW.MORPHTARGETTEXTURE_HASUVS = !1, RW.MORPHTARGETTEXTURE_HASUV2S = !1, RW.MORPHTARGETTEXTURE_HASTANGENTS = !1, RW.MORPHTARGETTEXTURE_HASNORMALS = !1, RW.MORPHTARGETTEXTURE_HASPOSITIONS = !1, RW.MORPHTARGETTEXTURE_HAS_COLORS = !1, RW.MORPHTARGETS = !1, RW.NUM_MORPH_INFLUENCERS = 0)
      }(WW, RW), bR && function(WW, RW) {
        const MW = WW.bakedVertexAnimationManager;
        RW.BAKED_VERTEX_ANIMATION_TEXTURE = !(!MW || !MW.isEnabled)
      }(WW, RW), !0
    }

    function KW(WW, RW) {
      if (WW.activeCamera) {
        const MW = RW.MULTIVIEW;
        RW.MULTIVIEW = null !== WW.activeCamera.outputRenderTarget && WW.activeCamera.outputRenderTarget.getViewCount() > 1, RW.MULTIVIEW != MW && RW.markAsUnprocessed()
      }
    }

    function uW(WW, RW, MW) {
      const wW = RW.ORDER_INDEPENDENT_TRANSPARENCY,
        CW = RW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      RW.ORDER_INDEPENDENT_TRANSPARENCY = WW.useOrderIndependentTransparency && MW, RW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !WW.mC().getCaps().textureFloatLinearFiltering, wW === RW.ORDER_INDEPENDENT_TRANSPARENCY && CW === RW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || RW.markAsUnprocessed()
    }

    function OW(WW, RW, MW) {
      const wW = RW.PREPASS;
      if (!RW._arePrePassDirty) return;
      const CW = [{
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
      if (WW.prePassRenderer && WW.prePassRenderer.enabled && MW) {
        RW.PREPASS = !0, RW.SCENE_MRT_COUNT = WW.prePassRenderer.mrtCount, RW.PREPASS_NORMAL_WORLDSPACE = WW.prePassRenderer.generateNormalsInWorldSpace, RW.PREPASS_COLOR = !0, RW.PREPASS_COLOR_INDEX = 0;
        for (let MW = 0; MW < CW.length; MW++) {
          const wW = WW.prePassRenderer.getIndex(CW[MW].type); - 1 !== wW ? (RW[CW[MW].define] = !0, RW[CW[MW].index] = wW) : RW[CW[MW].define] = !1
        }
      } else {
        RW.PREPASS = !1;
        for (let WW = 0; WW < CW.length; WW++) RW[CW[WW].define] = !1
      }
      RW.PREPASS != wW && (RW.markAsUnprocessed(), RW.markAsImageProcessingDirty())
    }

    function nW(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        NW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      CW && CW.push("Light" + WW), zR || (RW.push("vLightData" + WW, "vLightDiffuse" + WW, "vLightSpecular" + WW, "vLightDirection" + WW, "vLightWidth" + WW, "vLightHeight" + WW, "vLightFalloff" + WW, "vLightGround" + WW, "vSliceData" + WW, "vSliceRanges" + WW, "lightMatrix" + WW, "shadowsInfo" + WW, "depthValues" + WW), MW.push("shadowTexture" + WW), MW.push("depthTexture" + WW), RW.push("viewFrustumZ" + WW, "cascadeBlendFactor" + WW, "lightSizeUVCorrection" + WW, "depthCorrection" + WW, "penumbraDarkness" + WW, "frustumLengths" + WW), wW && (MW.push("projectionLightTexture" + WW), RW.push("textureProjectionMatrix" + WW)), AW && MW.push("iesLightTexture" + WW), yR && MW.push("rectAreaLightEmissionTexture" + WW), bR && (MW.push("lightDataTexture" + WW), NW || MW.push("tileMaskTexture" + WW)))
    }

    function GW(WW, RW, MW) {
      const wW = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      MW && wW.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), WW.push(...wW);
      RW.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function LW(WW, RW, MW) {
      let wW, CW, zR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        AW = null;
      if (WW.uniformsNames) {
        const bR = WW;
        wW = bR.uniformsNames, CW = bR.uniformBuffersNames, RW = bR.samplers, MW = bR.defines, zR = bR.maxSimultaneousLights || 0, AW = bR.shaderLanguage ?? null
      } else wW = WW, RW || (RW = []);
      for (let bR = 0; bR < zR && MW["LIGHT" + bR]; bR++) nW(bR, wW, RW, MW["PROJECTEDLIGHTTEXTURE" + bR], CW, !1, MW["IESLIGHTTEXTURE" + bR], MW["CLUSTLIGHT" + bR], MW["RECTAREALIGHTEMISSIONTEXTURE" + bR], 1 === AW);
      MW.NUM_MORPH_INFLUENCERS && (wW.push("morphTargetInfluences"), wW.push("morphTargetCount")), MW.BAKED_VERTEX_ANIMATION_TEXTURE && (wW.push("bakedVertexAnimationSettings"), wW.push("bakedVertexAnimationTextureSizeInverted"), wW.push("bakedVertexAnimationTime"), RW.push("bakedVertexAnimationTexture"))
    }

    function HW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      WW.addUniform("vReflectionInfos", 2), WW.addUniform("reflectionMatrix", 16), RW && WW.addUniform("vReflectionMicrosurfaceInfos", 3), MW && (WW.addUniform("vReflectionPosition", 3), WW.addUniform("vReflectionSize", 3)), wW && (WW.addUniform("vReflectionFilteringInfo", 2), WW.addUniform("vReflectionDominantDirection", 3)), zR && WW.addUniform("vReflectionColor", 3), CW && (WW.addUniform("vSphericalL00", 3), WW.addUniform("vSphericalL1_1", 3), WW.addUniform("vSphericalL10", 3), WW.addUniform("vSphericalL11", 3), WW.addUniform("vSphericalL2_2", 3), WW.addUniform("vSphericalL2_1", 3), WW.addUniform("vSphericalL20", 3), WW.addUniform("vSphericalL21", 3), WW.addUniform("vSphericalL22", 3), WW.addUniform("vSphericalX", 3), WW.addUniform("vSphericalY", 3), WW.addUniform("vSphericalZ", 3), WW.addUniform("vSphericalXX_ZZ", 3), WW.addUniform("vSphericalYY_ZZ", 3), WW.addUniform("vSphericalZZ", 3), WW.addUniform("vSphericalXY", 3), WW.addUniform("vSphericalYZ", 3), WW.addUniform("vSphericalZX", 3))
    }
  },
  37925: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(35324),
      CW = MW(37866);
    class zR extends CW.e {
      constructor(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(WW, RW, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new wW.d, this._storeEffectOnSubMeshes = MW
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(WW, RW) {
        return !!WW && (!this._storeEffectOnSubMeshes || (!WW.Qs || 0 === WW.Qs.length || this.isReadyForSubMesh(WW, WW.Qs[0], RW)))
      }
      _isReadyForSubMesh(WW) {
        const RW = WW.materialDefines;
        return !(this.checkReadyOnEveryCall || !WW.effect || !RW || RW._renderId !== this.QRW().getRenderId())
      }
      bindOnlyWorldMatrix(WW) {
        this._activeEffect.setMatrix("world", WW)
      }
      bindOnlyNormalMatrix(WW) {
        this._activeEffect.setMatrix("normalMatrix", WW)
      }
      bind(WW, RW) {
        RW && this.bindForSubMesh(WW, RW, RW.Qs[0])
      }
      _afterBind(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(WW, RW, MW), this.QRW()._cachedEffect = RW, MW ? MW._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return MW._drawWrapper._forceRebindOnNextCall || WW.isCachedMaterialInvalid(this, RW, wW)
      }
      dispose(WW, RW, MW) {
        this._activeEffect = void 0, super.dispose(WW, RW, MW)
      }
    }
  },
  37948: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      e: () => CW
    });
    const wW = new WeakMap;

    function CW(WW) {
      const RW = WW.getVertexBuffers();
      if (!RW) return null;
      let MW = wW.get(WW);
      if (MW) {
        let WW = !1;
        for (const wW in RW)
          if (!MW.has(wW)) {
            WW = !0;
            break
          } if (!WW) return MW
      } else MW = new Map, wW.set(WW, MW);
      for (const wW in RW) {
        const WW = RW[wW];
        if (WW) {
          const RW = WW.byteOffset,
            CW = WW.byteStride,
            zR = WW.type,
            AW = WW.normalized;
          MW.set(wW, {
            offset: RW,
            stride: CW,
            type: zR,
            normalized: AW
          })
        }
      }
      return MW
    }

    function zR(WW, RW) {
      RW.forEach(((RW, MW) => {
        const wW = `vp_${MW}_info`;
        WW.setFloat4(wW, RW.offset, RW.stride, RW.type, RW.normalized ? 1 : 0)
      }))
    }
  },
  37896: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      i: () => yR
    });
    var wW = MW(37587),
      CW = MW(35324),
      zR = MW(37593);
    let AW = (() => {
      var WW;
      let RW, MW, CW = [];
      return WW = class {
        static extractMinAndMaxIndexed(WW, RW, MW, wW, CW, zR) {
          for (let AW = MW; AW < MW + wW; AW++) {
            const MW = 3 * RW[AW],
              wW = WW[MW],
              bR = WW[MW + 1],
              yR = WW[MW + 2];
            CW.minimizeInPlaceFromFloats(wW, bR, yR), zR.maximizeInPlaceFromFloats(wW, bR, yR)
          }
        }
        static extractMinAndMax(WW, RW, MW, wW, CW, zR) {
          for (let AW = RW, bR = RW * wW; AW < RW + MW; AW++, bR += wW) {
            const RW = WW[bR],
              MW = WW[bR + 1],
              wW = WW[bR + 2];
            CW.minimizeInPlaceFromFloats(RW, MW, wW), zR.maximizeInPlaceFromFloats(RW, MW, wW)
          }
        }
      }, (() => {
        const AW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [zR.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], MW = [zR.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, wW.e)(WW, null, RW, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: WW => "extractMinAndMaxIndexed" in WW,
            get: WW => WW.extractMinAndMaxIndexed
          },
          metadata: AW
        }, null, CW), (0, wW.e)(WW, null, MW, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: WW => "extractMinAndMax" in WW,
            get: WW => WW.extractMinAndMax
          },
          metadata: AW
        }, null, CW), AW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AW
        }), (0, wW.i)(WW, CW)
      })(), WW
    })();

    function bR(WW, RW, MW, wW) {
      let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const bR = new CW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        yR = new CW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return AW.extractMinAndMaxIndexed(WW, RW, MW, wW, bR, yR), zR && (bR.x -= bR.x * zR.x + zR.y, bR.y -= bR.y * zR.x + zR.y, bR.z -= bR.z * zR.x + zR.y, yR.x += yR.x * zR.x + zR.y, yR.y += yR.y * zR.x + zR.y, yR.z += yR.z * zR.x + zR.y), {
        minimum: bR,
        maximum: yR
      }
    }

    function yR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        zR = arguments.length > 4 ? arguments[4] : void 0;
      const bR = new CW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        yR = new CW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return zR || (zR = 3), AW.extractMinAndMax(WW, RW, MW, zR, bR, yR), wW && (bR.x -= bR.x * wW.x + wW.y, bR.y -= bR.y * wW.x + wW.y, bR.z -= bR.z * wW.x + wW.y, yR.x += yR.x * wW.x + wW.y, yR.y += yR.y * wW.x + wW.y, yR.z += yR.z * wW.x + wW.y), {
        minimum: bR,
        maximum: yR
      }
    }
  },
  37874: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW
    });
    var wW, CW = MW(37722),
      zR = MW(37882),
      AW = MW(37884),
      bR = MW(37896),
      yR = MW(37900),
      NW = MW(37470);
    class eW {
      get materialDefines() {
        const WW = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof WW ? null : WW
      }
      set materialDefines(WW) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = WW
      }
      _getDrawWrapper(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        WW = WW ?? this._engine.currentRenderPassId;
        let MW = this._drawWrappers[WW];
        return !MW && RW && (this._drawWrappers[WW] = MW = new yR.d(this._mesh.QRW().mC())), MW
      }
      _removeDrawWrapper(WW) {
        let RW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[WW]?.dispose(RW), this._drawWrappers[WW] = void 0
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
      _setMainDrawWrapperOverride(WW) {
        this._mainDrawWrapperOverride = WW
      }
      setEffect(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const CW = this._drawWrapper;
        CW.setEffect(WW, RW, wW), void 0 !== MW && (CW.materialContext = MW), WW || (CW.defines = null, CW.materialContext = void 0)
      }
      resetDrawCache(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== WW) return void this._removeDrawWrapper(WW, !0, RW);
          for (const WW of this._drawWrappers) WW?.dispose(RW)
        }
        this._drawWrappers = []
      }
      static AddToMesh(WW, RW, MW, wW, CW, zR, AW) {
        return new eW(WW, RW, MW, wW, CW, zR, AW, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(WW, RW, MW, wW, CW, zR, AW) {
        let bR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          yR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = WW, this.verticesStart = RW, this.verticesCount = MW, this.indexStart = wW, this.indexCount = CW, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = zR, this._renderingMesh = AW || zR, yR && zR.Qs.push(this), this._engine = this._mesh.QRW().mC(), this.resetDrawCache(), this._trianglePlanes = [], this._id = zR.Qs.length - 1, bR && (this.refreshBoundingInfo(), zR.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      LRW() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.LRW() : this._boundingInfo
      }
      setBoundingInfo(WW) {
        return this._boundingInfo = WW, this
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
        const WW = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return WW || this._renderingMesh
      }
      Ow() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const RW = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!RW) return WW && this._mesh.QRW()._hasDefaultMaterial ? this._mesh.QRW().defaultMaterial : null;
        if (this._isMultiMaterial(RW)) {
          const WW = RW.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== WW && (this._currentMaterial = WW, this.resetDrawCache()), WW
        }
        return RW
      }
      _isMultiMaterial(WW) {
        return void 0 !== WW.getSubMaterial
      }
      refreshBoundingInfo() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (WW || (WW = this._renderingMesh.getVerticesData(CW.j.PositionKind)), !WW) return this._boundingInfo = this._mesh.LRW(), this;
        const RW = this._renderingMesh.ptW();
        let MW;
        if (0 === this.indexStart && this.indexCount === RW.length) {
          const WW = this._renderingMesh.LRW();
          MW = {
            minimum: WW.minimum.clone(),
            maximum: WW.maximum.clone()
          }
        } else MW = (0, bR.e)(WW, RW, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(MW.minimum, MW.maximum) : this._boundingInfo = new AW.e(MW.minimum, MW.maximum), this
      }
      _checkCollision(WW) {
        return this.LRW()._checkCollision(WW)
      }
      updateBoundingInfo(WW) {
        let RW = this.LRW();
        return RW || (this.refreshBoundingInfo(), RW = this.LRW()), RW && RW.update(WW), this
      }
      isInFrustum(WW) {
        const RW = this.LRW();
        return !!RW && RW.isInFrustum(WW, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(WW) {
        const RW = this.LRW();
        return !!RW && RW.isCompletelyInFrustum(WW)
      }
      render(WW) {
        return this._renderingMesh.render(this, WW, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(WW, RW) {
        if (!this._linesIndexBuffer) {
          const MW = 6 * Math.floor(this.indexCount / 3),
            wW = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(MW) : new Uint16Array(MW);
          let CW = 0;
          if (0 === WW.length)
            for (let WW = this.indexStart; WW < this.indexStart + this.indexCount; WW += 3) wW[CW++] = WW, wW[CW++] = WW + 1, wW[CW++] = WW + 1, wW[CW++] = WW + 2, wW[CW++] = WW + 2, wW[CW++] = WW;
          else
            for (let RW = this.indexStart; RW < this.indexStart + this.indexCount; RW += 3) wW[CW++] = WW[RW], wW[CW++] = WW[RW + 1], wW[CW++] = WW[RW + 1], wW[CW++] = WW[RW + 2], wW[CW++] = WW[RW + 2], wW[CW++] = WW[RW];
          this._linesIndexBuffer = RW.createIndexBuffer(wW), this._linesIndexCount = wW.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(WW) {
        const RW = this.LRW();
        return !!RW && WW.intersectsBox(RW.boundingBox)
      }
      intersects(WW, RW, MW, wW, CW) {
        const zR = this.Ow();
        if (!zR) return null;
        let AW = 3,
          bR = !1;
        switch (zR.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            AW = 1, bR = !0
        }
        return 4 === zR.fillMode ? MW.length ? this._intersectLines(WW, RW, MW, this._mesh.intersectionThreshold, wW) : this._intersectUnIndexedLines(WW, RW, MW, this._mesh.intersectionThreshold, wW) : !MW.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(WW, RW, MW, wW, CW) : this._intersectTriangles(WW, RW, MW, AW, bR, wW, CW)
      }
      _intersectLines(WW, RW, MW, wW, CW) {
        let AW = null;
        for (let bR = this.indexStart; bR < this.indexStart + this.indexCount; bR += 2) {
          const yR = RW[MW[bR]],
            NW = RW[MW[bR + 1]],
            eW = WW.intersectionSegment(yR, NW, wW);
          if (!(eW < 0) && ((CW || !AW || eW < AW.distance) && (AW = new zR.e(null, null, eW), AW.faceId = bR / 2, CW))) break
        }
        return AW
      }
      _intersectUnIndexedLines(WW, RW, MW, wW, CW) {
        let AW = null;
        for (let bR = this.verticesStart; bR < this.verticesStart + this.verticesCount; bR += 2) {
          const MW = RW[bR],
            yR = RW[bR + 1],
            NW = WW.intersectionSegment(MW, yR, wW);
          if (!(NW < 0) && ((CW || !AW || NW < AW.distance) && (AW = new zR.e(null, null, NW), AW.faceId = bR / 2, CW))) break
        }
        return AW
      }
      _intersectTriangles(WW, RW, MW, wW, CW, zR, AW) {
        let bR = null,
          yR = -1;
        for (let NW = this.indexStart; NW < this.indexStart + this.indexCount - (3 - wW); NW += wW) {
          yR++;
          const wW = MW[NW],
            eW = MW[NW + 1],
            BW = MW[NW + 2];
          if (CW && 4294967295 === BW) {
            NW += 2;
            continue
          }
          const tR = RW[wW],
            TW = RW[eW],
            gR = RW[BW];
          if (!tR || !TW || !gR) continue;
          if (AW && !AW(tR, TW, gR, WW, wW, eW, BW)) continue;
          const iR = WW.intersectsTriangle(tR, TW, gR);
          if (iR) {
            if (iR.distance < 0) continue;
            if ((zR || !bR || iR.distance < bR.distance) && (bR = iR, bR.faceId = yR, zR)) break
          }
        }
        return bR
      }
      _intersectUnIndexedTriangles(WW, RW, MW, wW, CW) {
        let zR = null;
        for (let AW = this.verticesStart; AW < this.verticesStart + this.verticesCount; AW += 3) {
          const MW = RW[AW],
            bR = RW[AW + 1],
            yR = RW[AW + 2];
          if (CW && !CW(MW, bR, yR, WW, -1, -1, -1)) continue;
          const NW = WW.intersectsTriangle(MW, bR, yR);
          if (NW) {
            if (NW.distance < 0) continue;
            if ((wW || !zR || NW.distance < zR.distance) && (zR = NW, zR.faceId = AW / 3, wW)) break
          }
        }
        return zR
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(WW, RW) {
        const MW = new eW(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, WW, RW, !1);
        if (!this.IsGlobal) {
          const WW = this.LRW();
          if (!WW) return MW;
          MW._boundingInfo = new AW.e(WW.minimum, WW.maximum)
        }
        return MW
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.QRW().mC()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const RW = this._mesh.Qs.indexOf(this);
        this._mesh.Qs.splice(RW, 1), this.resetDrawCache(void 0, WW)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(WW, RW, MW, wW, CW) {
        let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = Number.MAX_VALUE,
          bR = -Number.MAX_VALUE;
        const yR = (CW || wW).ptW();
        for (let NW = RW; NW < RW + MW; NW++) {
          const WW = yR[NW];
          WW < AW && (AW = WW), WW > bR && (bR = WW)
        }
        return new eW(WW, AW, bR - AW + 1, RW, MW, wW, CW, zR)
      }
    }(wW = eW.prototype).projectToRef ?? (wW.projectToRef = (0, NW.f)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);