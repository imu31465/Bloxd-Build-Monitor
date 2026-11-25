export const id = 270;
export const ids = [270];
export const modules = {
  40557: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ) {
        this.bu = QQ, this.bv = WQ, this.distance = XQ, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  40564: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(37379),
      qQ = XQ(37370),
      TQ = XQ(37374);
    class zQ {
      constructor(QQ, WQ, XQ) {
        this.vectors = (0, wQ.c)(8, qQ.s.Zero), this.center = qQ.s.Zero(), this.centerWorld = qQ.s.Zero(), this.extendSize = qQ.s.Zero(), this.extendSizeWorld = qQ.s.Zero(), this.directions = (0, wQ.c)(3, qQ.s.Zero), this.vectorsWorld = (0, wQ.c)(8, qQ.s.Zero), this.minimumWorld = qQ.s.Zero(), this.maximumWorld = qQ.s.Zero(), this.minimum = qQ.s.Zero(), this.maximum = qQ.s.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(QQ, WQ, XQ)
      }
      reConstruct(QQ, WQ, XQ) {
        const wQ = QQ.x,
          TQ = QQ.y,
          zQ = QQ.z,
          sQ = WQ.x,
          FQ = WQ.y,
          PQ = WQ.z,
          gQ = this.vectors;
        this.minimum.XQQ(wQ, TQ, zQ), this.maximum.XQQ(sQ, FQ, PQ), gQ[0].XQQ(wQ, TQ, zQ), gQ[1].XQQ(sQ, FQ, PQ), gQ[2].XQQ(sQ, TQ, zQ), gQ[3].XQQ(wQ, FQ, zQ), gQ[4].XQQ(wQ, TQ, PQ), gQ[5].XQQ(sQ, FQ, zQ), gQ[6].XQQ(wQ, FQ, PQ), gQ[7].XQQ(sQ, TQ, PQ), WQ.addToRef(QQ, this.center).scaleInPlace(.5), WQ.subtractToRef(QQ, this.extendSize).scaleInPlace(.5), this._worldMatrix = XQ || qQ.e.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(QQ) {
        const WQ = zQ._TmpVector3,
          XQ = this.maximum.subtractToRef(this.minimum, WQ[0]),
          wQ = XQ.length();
        XQ.normalizeFromLength(wQ);
        const qQ = wQ * QQ,
          TQ = XQ.scaleInPlace(.5 * qQ),
          sQ = this.center.subtractToRef(TQ, WQ[1]),
          FQ = this.center.addToRef(TQ, WQ[2]);
        return this.reConstruct(sQ, FQ, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(QQ) {
        const WQ = this.minimumWorld,
          XQ = this.maximumWorld,
          wQ = this.directions,
          TQ = this.vectorsWorld,
          zQ = this.vectors;
        if (QQ.isIdentity()) {
          WQ.WH(this.minimum), XQ.WH(this.maximum);
          for (let QQ = 0; QQ < 8; ++QQ) TQ[QQ].WH(zQ[QQ]);
          this.extendSizeWorld.WH(this.extendSize), this.centerWorld.WH(this.center)
        } else {
          WQ.h_(Number.MAX_VALUE), XQ.h_(-Number.MAX_VALUE);
          for (let wQ = 0; wQ < 8; ++wQ) {
            const sQ = TQ[wQ];
            qQ.s.TransformCoordinatesToRef(zQ[wQ], QQ, sQ), WQ.minimizeInPlace(sQ), XQ.maximizeInPlace(sQ)
          }
          XQ.subtractToRef(WQ, this.extendSizeWorld).scaleInPlace(.5), XQ.addToRef(WQ, this.centerWorld).scaleInPlace(.5)
        }
        qQ.s.FromArrayToRef(QQ.m, 0, wQ[0]), qQ.s.FromArrayToRef(QQ.m, 4, wQ[1]), qQ.s.FromArrayToRef(QQ.m, 8, wQ[2]), this._worldMatrix = QQ
      }
      isInFrustum(QQ) {
        return zQ.IsInFrustum(this.vectorsWorld, QQ)
      }
      isCompletelyInFrustum(QQ) {
        return zQ.IsCompletelyInFrustum(this.vectorsWorld, QQ)
      }
      intersectsPoint(QQ) {
        const WQ = this.minimumWorld,
          XQ = this.maximumWorld,
          wQ = WQ.x,
          qQ = WQ.y,
          zQ = WQ.z,
          sQ = XQ.x,
          FQ = XQ.y,
          PQ = XQ.z,
          gQ = QQ.x,
          JQ = QQ.y,
          rQ = QQ.z,
          IQ = -TQ.b;
        return !(sQ - gQ < IQ || IQ > gQ - wQ) && (!(FQ - JQ < IQ || IQ > JQ - qQ) && !(PQ - rQ < IQ || IQ > rQ - zQ))
      }
      intersectsSphere(QQ) {
        return zQ.IntersectsSphere(this.minimumWorld, this.maximumWorld, QQ.centerWorld, QQ.radiusWorld)
      }
      intersectsMinMax(QQ, WQ) {
        const XQ = this.minimumWorld,
          wQ = this.maximumWorld,
          qQ = XQ.x,
          TQ = XQ.y,
          zQ = XQ.z,
          sQ = wQ.x,
          FQ = wQ.y,
          PQ = wQ.z,
          gQ = QQ.x,
          JQ = QQ.y,
          rQ = QQ.z,
          IQ = WQ.x,
          jQ = WQ.y,
          BQ = WQ.z;
        return !(sQ < gQ || qQ > IQ) && (!(FQ < JQ || TQ > jQ) && !(PQ < rQ || zQ > BQ))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(QQ, WQ) {
        return QQ.intersectsMinMax(WQ.minimumWorld, WQ.maximumWorld)
      }
      static IntersectsSphere(QQ, WQ, XQ, wQ) {
        const TQ = zQ._TmpVector3[0];
        qQ.s.ClampToRef(XQ, QQ, WQ, TQ);
        return qQ.s.DistanceSquared(XQ, TQ) <= wQ * wQ
      }
      static IsCompletelyInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; ++XQ) {
          const wQ = WQ[XQ];
          for (let WQ = 0; WQ < 8; ++WQ)
            if (wQ.dotCoordinate(QQ[WQ]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; ++XQ) {
          let wQ = !0;
          const qQ = WQ[XQ];
          for (let WQ = 0; WQ < 8; ++WQ)
            if (qQ.dotCoordinate(QQ[WQ]) >= 0) {
              wQ = !1;
              break
            } if (wQ) return !1
        }
        return !0
      }
    }
    zQ._TmpVector3 = (0, wQ.c)(3, qQ.s.Zero)
  },
  40561: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => JQ
    });
    var wQ = XQ(37379),
      qQ = XQ(37370),
      TQ = XQ(40564);
    class zQ {
      constructor(QQ, WQ, XQ) {
        this.center = qQ.s.Zero(), this.centerWorld = qQ.s.Zero(), this.minimum = qQ.s.Zero(), this.maximum = qQ.s.Zero(), this.reConstruct(QQ, WQ, XQ)
      }
      reConstruct(QQ, WQ, XQ) {
        this.minimum.WH(QQ), this.maximum.WH(WQ);
        const wQ = qQ.s.Distance(QQ, WQ);
        WQ.addToRef(QQ, this.center).scaleInPlace(.5), this.radius = .5 * wQ, this._update(XQ || qQ.e.IdentityReadOnly)
      }
      scale(QQ) {
        const WQ = zQ._TmpVector3,
          XQ = this.maximum.subtractToRef(this.minimum, WQ[0]),
          wQ = XQ.length();
        XQ.normalizeFromLength(wQ);
        const qQ = wQ * QQ,
          TQ = XQ.scaleInPlace(.5 * qQ),
          sQ = this.center.subtractToRef(TQ, WQ[1]),
          FQ = this.center.addToRef(TQ, WQ[2]);
        return this.reConstruct(sQ, FQ, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(QQ) {
        if (QQ.isIdentity()) this.centerWorld.WH(this.center), this.radiusWorld = this.radius;
        else {
          qQ.s.TransformCoordinatesToRef(this.center, QQ, this.centerWorld);
          const WQ = zQ._TmpVector3[0];
          qQ.s.TransformNormalFromFloatsToRef(1, 1, 1, QQ, WQ), this.radiusWorld = Math.max(Math.abs(WQ.x), Math.abs(WQ.y), Math.abs(WQ.z)) * this.radius
        }
      }
      isInFrustum(QQ) {
        const WQ = this.centerWorld,
          XQ = this.radiusWorld;
        for (let wQ = 0; wQ < 6; wQ++)
          if (QQ[wQ].dotCoordinate(WQ) <= -XQ) return !1;
        return !0
      }
      isCenterInFrustum(QQ) {
        const WQ = this.centerWorld;
        for (let XQ = 0; XQ < 6; XQ++)
          if (QQ[XQ].dotCoordinate(WQ) < 0) return !1;
        return !0
      }
      intersectsPoint(QQ) {
        const WQ = qQ.s.DistanceSquared(this.centerWorld, QQ);
        return !(this.radiusWorld * this.radiusWorld < WQ)
      }
      static Intersects(QQ, WQ) {
        const XQ = qQ.s.DistanceSquared(QQ.centerWorld, WQ.centerWorld),
          wQ = QQ.radiusWorld + WQ.radiusWorld;
        return !(wQ * wQ < XQ)
      }
      static CreateFromCenterAndRadius(QQ, WQ, XQ) {
        this._TmpVector3[0].WH(QQ), this._TmpVector3[1].XQQ(0, 0, WQ), this._TmpVector3[2].WH(QQ), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].YwQ(this._TmpVector3[1]);
        const wQ = new zQ(this._TmpVector3[0], this._TmpVector3[2]);
        return wQ._worldMatrix = XQ || qQ.e.Identity(), wQ
      }
    }
    zQ._TmpVector3 = (0, wQ.c)(3, qQ.s.Zero);
    const sQ = {
        min: 0,
        max: 0
      },
      FQ = {
        min: 0,
        max: 0
      },
      PQ = (QQ, WQ, XQ) => {
        const wQ = qQ.s.Dot(WQ.centerWorld, QQ),
          TQ = Math.abs(qQ.s.Dot(WQ.directions[0], QQ)) * WQ.extendSize.x + Math.abs(qQ.s.Dot(WQ.directions[1], QQ)) * WQ.extendSize.y + Math.abs(qQ.s.Dot(WQ.directions[2], QQ)) * WQ.extendSize.z;
        XQ.min = wQ - TQ, XQ.max = wQ + TQ
      },
      gQ = (QQ, WQ, XQ) => (PQ(QQ, WQ, sQ), PQ(QQ, XQ, FQ), !(sQ.min > FQ.max || FQ.min > sQ.max));
    class JQ {
      constructor(QQ, WQ, XQ) {
        this._isLocked = !1, this.boundingBox = new TQ.b(QQ, WQ, XQ), this.mwQ = new zQ(QQ, WQ, XQ)
      }
      reConstruct(QQ, WQ, XQ) {
        this.boundingBox.reConstruct(QQ, WQ, XQ), this.mwQ.reConstruct(QQ, WQ, XQ)
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
      set isLocked(QQ) {
        this._isLocked = QQ
      }
      update(QQ) {
        this._isLocked || (this.boundingBox._update(QQ), this.mwQ._update(QQ))
      }
      centerOn(QQ, WQ) {
        const XQ = JQ._TmpVector3[0].WH(QQ).YwQ(WQ),
          wQ = JQ._TmpVector3[1].WH(QQ).addInPlace(WQ);
        return this.boundingBox.reConstruct(XQ, wQ, this.boundingBox.getWorldMatrix()), this.mwQ.reConstruct(XQ, wQ, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(QQ) {
        const WQ = qQ.s.Minimize(this.minimum, QQ),
          XQ = qQ.s.Maximize(this.maximum, QQ);
        return this.reConstruct(WQ, XQ, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(QQ) {
        const WQ = qQ.m.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(WQ);
        const XQ = qQ.m.vj[0];
        return qQ.s.TransformCoordinatesToRef(QQ.boundingBox.minimumWorld, WQ, XQ), this.encapsulate(XQ), qQ.s.TransformCoordinatesToRef(QQ.boundingBox.maximumWorld, WQ, XQ), this.encapsulate(XQ), this
      }
      scale(QQ) {
        return this.boundingBox.scale(QQ), this.mwQ.scale(QQ), this
      }
      isInFrustum(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === WQ || 3 === WQ) && this.mwQ.isCenterInFrustum(QQ)) return !0;
        if (!this.mwQ.isInFrustum(QQ)) return !1;
        return !(1 !== WQ && 3 !== WQ) || this.boundingBox.isInFrustum(QQ)
      }
      get diagonalLength() {
        const QQ = this.boundingBox;
        return QQ.maximumWorld.subtractToRef(QQ.minimumWorld, JQ._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(QQ) {
        return this.boundingBox.isCompletelyInFrustum(QQ)
      }
      _checkCollision(QQ) {
        return QQ._canDoCollision(this.mwQ.centerWorld, this.mwQ.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(QQ) {
        return !!this.mwQ.centerWorld && (!!this.mwQ.intersectsPoint(QQ) && !!this.boundingBox.intersectsPoint(QQ))
      }
      intersects(QQ, WQ) {
        if (!zQ.Intersects(this.mwQ, QQ.mwQ)) return !1;
        if (!TQ.b.Intersects(this.boundingBox, QQ.boundingBox)) return !1;
        if (!WQ) return !0;
        const XQ = this.boundingBox,
          wQ = QQ.boundingBox;
        return !!gQ(XQ.directions[0], XQ, wQ) && (!!gQ(XQ.directions[1], XQ, wQ) && (!!gQ(XQ.directions[2], XQ, wQ) && (!!gQ(wQ.directions[0], XQ, wQ) && (!!gQ(wQ.directions[1], XQ, wQ) && (!!gQ(wQ.directions[2], XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[0], wQ.directions[0]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[0], wQ.directions[1]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[0], wQ.directions[2]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[1], wQ.directions[0]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[1], wQ.directions[1]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[1], wQ.directions[2]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[2], wQ.directions[0]), XQ, wQ) && (!!gQ(qQ.s.Cross(XQ.directions[2], wQ.directions[1]), XQ, wQ) && !!gQ(qQ.s.Cross(XQ.directions[2], wQ.directions[2]), XQ, wQ))))))))))))))
      }
    }
    JQ._TmpVector3 = (0, wQ.c)(2, qQ.s.Zero)
  },
  40589: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      d: () => FQ,
      e: () => sQ,
      g: () => zQ
    });
    var wQ = XQ(40414),
      qQ = XQ(37370);

    function TQ(QQ) {
      -1 === QQ.indexOf("vClipPlane") && QQ.push("vClipPlane"), -1 === QQ.indexOf("vClipPlane2") && QQ.push("vClipPlane2"), -1 === QQ.indexOf("vClipPlane3") && QQ.push("vClipPlane3"), -1 === QQ.indexOf("vClipPlane4") && QQ.push("vClipPlane4"), -1 === QQ.indexOf("vClipPlane5") && QQ.push("vClipPlane5"), -1 === QQ.indexOf("vClipPlane6") && QQ.push("vClipPlane6")
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = !!(QQ.clipPlane ?? WQ.clipPlane),
        qQ = !!(QQ.clipPlane2 ?? WQ.clipPlane2),
        TQ = !!(QQ.clipPlane3 ?? WQ.clipPlane3),
        zQ = !!(QQ.clipPlane4 ?? WQ.clipPlane4),
        sQ = !!(QQ.clipPlane5 ?? WQ.clipPlane5),
        FQ = !!(QQ.clipPlane6 ?? WQ.clipPlane6);
      wQ && XQ.push("#define CLIPPLANE"), qQ && XQ.push("#define CLIPPLANE2"), TQ && XQ.push("#define CLIPPLANE3"), zQ && XQ.push("#define CLIPPLANE4"), sQ && XQ.push("#define CLIPPLANE5"), FQ && XQ.push("#define CLIPPLANE6")
    }

    function sQ(QQ, WQ, XQ) {
      let wQ = !1;
      const qQ = !!(QQ.clipPlane ?? WQ.clipPlane),
        TQ = !!(QQ.clipPlane2 ?? WQ.clipPlane2),
        zQ = !!(QQ.clipPlane3 ?? WQ.clipPlane3),
        sQ = !!(QQ.clipPlane4 ?? WQ.clipPlane4),
        FQ = !!(QQ.clipPlane5 ?? WQ.clipPlane5),
        PQ = !!(QQ.clipPlane6 ?? WQ.clipPlane6);
      return XQ.CLIPPLANE !== qQ && (XQ.CLIPPLANE = qQ, wQ = !0), XQ.CLIPPLANE2 !== TQ && (XQ.CLIPPLANE2 = TQ, wQ = !0), XQ.CLIPPLANE3 !== zQ && (XQ.CLIPPLANE3 = zQ, wQ = !0), XQ.CLIPPLANE4 !== sQ && (XQ.CLIPPLANE4 = sQ, wQ = !0), XQ.CLIPPLANE5 !== FQ && (XQ.CLIPPLANE5 = FQ, wQ = !0), XQ.CLIPPLANE6 !== PQ && (XQ.CLIPPLANE6 = PQ, wQ = !0), wQ
    }

    function FQ(QQ, WQ, XQ) {
      let wQ = WQ.clipPlane ?? XQ.clipPlane;
      PQ(QQ, "vClipPlane", wQ), wQ = WQ.clipPlane2 ?? XQ.clipPlane2, PQ(QQ, "vClipPlane2", wQ), wQ = WQ.clipPlane3 ?? XQ.clipPlane3, PQ(QQ, "vClipPlane3", wQ), wQ = WQ.clipPlane4 ?? XQ.clipPlane4, PQ(QQ, "vClipPlane4", wQ), wQ = WQ.clipPlane5 ?? XQ.clipPlane5, PQ(QQ, "vClipPlane5", wQ), wQ = WQ.clipPlane6 ?? XQ.clipPlane6, PQ(QQ, "vClipPlane6", wQ)
    }

    function PQ(QQ, WQ, XQ) {
      if (XQ) {
        const TQ = wQ.e.sE()?.floatingOriginOffset || qQ.s.ZeroReadOnly;
        QQ.setFloat4(WQ, XQ.normal.x, XQ.normal.y, XQ.normal.z, XQ.d + qQ.s.Dot(XQ.normal, TQ))
      }
    }
  },
  40602: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(QQ, WQ) {
        this._defines[QQ] || (QQ < this._currentRank && (this._currentRank = QQ), QQ > this._maxRank && (this._maxRank = QQ), this._defines[QQ] = new Array), this._defines[QQ].push(WQ)
      }
      addCPUSkinningFallback(QQ, WQ) {
        this._mesh = WQ, QQ < this._currentRank && (this._currentRank = QQ), QQ > this._maxRank && (this._maxRank = QQ)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(QQ, WQ) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, QQ = QQ.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), WQ._bonesComputationForcedToCPU = !0;
          const XQ = this._mesh.sE();
          for (let QQ = 0; QQ < XQ.meshes.length; QQ++) {
            const wQ = XQ.meshes[QQ];
            if (wQ.material) {
              if (wQ.computeBonesUsingShaders && 0 !== wQ.numBoneInfluencers)
                if (wQ.material.getEffect() === WQ) wQ.computeBonesUsingShaders = !1;
                else if (wQ.ZD)
                for (const QQ of wQ.ZD) {
                  if (QQ.effect === WQ) {
                    wQ.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && wQ.computeBonesUsingShaders && wQ.numBoneInfluencers > 0 && (wQ.computeBonesUsingShaders = !1)
          }
        } else {
          const WQ = this._defines[this._currentRank];
          if (WQ)
            for (let XQ = 0; XQ < WQ.length; XQ++) QQ = QQ.replace("#define " + WQ[XQ], "");
          this._currentRank++
        }
        return QQ
      }
    }
  },
  40551: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => DQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40357),
      zQ = XQ(37399),
      sQ = XQ(37392),
      FQ = XQ(40555),
      PQ = XQ(40400),
      gQ = XQ(38956),
      JQ = XQ(38047),
      rQ = XQ(40578),
      IQ = XQ(40286);
    let jQ = (() => {
      var QQ;
      let WQ, XQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, jQ, BQ, yQ = [];
      return QQ = class {
        constructor() {
          this._func = (0, wQ.n)(this, yQ), this.reset()
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681
        }
        get func() {
          return this._func
        }
        set func(QQ) {
          this._func = QQ
        }
        get backFunc() {
          return this._backFunc
        }
        set backFunc(QQ) {
          this._backFunc = QQ
        }
        get funcRef() {
          return this._funcRef
        }
        set funcRef(QQ) {
          this._funcRef = QQ
        }
        get funcMask() {
          return this._funcMask
        }
        set funcMask(QQ) {
          this._funcMask = QQ
        }
        get opStencilFail() {
          return this._opStencilFail
        }
        set opStencilFail(QQ) {
          this._opStencilFail = QQ
        }
        get opDepthFail() {
          return this._opDepthFail
        }
        set opDepthFail(QQ) {
          this._opDepthFail = QQ
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass
        }
        set opStencilDepthPass(QQ) {
          this._opStencilDepthPass = QQ
        }
        get backOpStencilFail() {
          return this._backOpStencilFail
        }
        set backOpStencilFail(QQ) {
          this._backOpStencilFail = QQ
        }
        get backOpDepthFail() {
          return this._backOpDepthFail
        }
        set backOpDepthFail(QQ) {
          this._backOpDepthFail = QQ
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass
        }
        set backOpStencilDepthPass(QQ) {
          this._backOpStencilDepthPass = QQ
        }
        get mask() {
          return this._mask
        }
        set mask(QQ) {
          this._mask = QQ
        }
        get enabled() {
          return this._enabled
        }
        set enabled(QQ) {
          this._enabled = QQ
        }
        getClassName() {
          return "MaterialStencilState"
        }
        copyTo(QQ) {
          IQ.b.Clone((() => QQ), this)
        }
        serialize() {
          return IQ.b.Serialize(this)
        }
        parse(QQ, WQ, XQ) {
          IQ.b.Parse((() => this), QQ, WQ, XQ)
        }
      }, (() => {
        const IQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, WQ, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: QQ => "func" in QQ,
            get: QQ => QQ.func
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, XQ, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backFunc" in QQ,
            get: QQ => QQ.backFunc
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, TQ, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: QQ => "funcRef" in QQ,
            get: QQ => QQ.funcRef
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, zQ, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "funcMask" in QQ,
            get: QQ => QQ.funcMask
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, sQ, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opStencilFail" in QQ,
            get: QQ => QQ.opStencilFail
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, FQ, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opDepthFail" in QQ,
            get: QQ => QQ.opDepthFail
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, PQ, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opStencilDepthPass" in QQ,
            get: QQ => QQ.opStencilDepthPass
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, gQ, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backOpStencilFail" in QQ,
            get: QQ => QQ.backOpStencilFail
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, JQ, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backOpDepthFail" in QQ,
            get: QQ => QQ.backOpDepthFail
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, rQ, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backOpStencilDepthPass" in QQ,
            get: QQ => QQ.backOpStencilDepthPass
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, jQ, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mask" in QQ,
            get: QQ => QQ.mask
          },
          metadata: IQ
        }, null, yQ), (0, wQ.k)(QQ, null, BQ, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "enabled" in QQ,
            get: QQ => QQ.enabled
          },
          metadata: IQ
        }, null, yQ), IQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IQ
        })
      })(), QQ
    })();
    var BQ = XQ(40584),
      yQ = XQ(40188),
      VQ = XQ(40153);
    let DQ = (() => {
      var QQ;
      let WQ, XQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ = [],
        YQ = [],
        NQ = [],
        ZQ = [],
        OQ = [],
        KQ = [],
        mQ = [],
        MQ = [],
        QW = [],
        WW = [],
        XW = [],
        wW = [],
        qW = [],
        TW = [],
        zW = [],
        sW = [],
        FW = [],
        PW = [],
        gW = [],
        JW = [],
        rW = [],
        IW = [],
        jW = [],
        BW = [],
        yW = [],
        VW = [],
        DW = [],
        pW = [],
        GW = [],
        UW = [],
        bW = [],
        vW = [],
        dW = [],
        HW = [],
        aW = [],
        lW = [],
        hW = [],
        iW = [],
        cW = [],
        AW = [],
        RW = [],
        EW = [],
        CW = [],
        uW = [],
        LW = [],
        kW = [],
        fW = [],
        SW = [],
        tW = [],
        oW = [],
        eW = [];
      return QQ = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(WQ) {
          this._useVertexPulling !== WQ && (this._useVertexPulling = WQ, this.KWQ(QQ.MiscDirtyFlag))
        }
        get _supportGlowLayer() {
          return !1
        }
        set _glowModeEnabled(QQ) {}
        get shaderLanguage() {
          return this._shaderLanguage
        }
        get canRenderToMRT() {
          return !1
        }
        set alpha(WQ) {
          if (this._alpha === WQ) return;
          const XQ = this._alpha;
          this._alpha = WQ, 1 !== XQ && 1 !== WQ || this.KWQ(QQ.MiscDirtyFlag + QQ.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(WQ) {
          this._backFaceCulling !== WQ && (this._backFaceCulling = WQ, this.KWQ(QQ.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(WQ) {
          const XQ = Math.max(0, Math.min(0 | WQ, 4));
          this._textureRepetitionMode !== XQ && (this._textureRepetitionMode = XQ, this.KWQ(QQ.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(WQ) {
          this._cullBackFaces !== WQ && (this._cullBackFaces = WQ, this.KWQ(QQ.TextureDirtyFlag))
        }
        get cullBackFaces() {
          return this._cullBackFaces
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism
        }
        set blockDirtyMechanism(QQ) {
          this._blockDirtyMechanism !== QQ && (this._blockDirtyMechanism = QQ, QQ || this.markDirty())
        }
        atomicMaterialsUpdate(QQ) {
          this.blockDirtyMechanism = !0;
          try {
            QQ(this)
          } finally {
            this.blockDirtyMechanism = !1
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
        }
        set onDispose(QQ) {
          this._onDisposeObserver && this.yE.remove(this._onDisposeObserver), this._onDisposeObserver = this.yE.add(QQ)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new zQ.b), this._onBindObservable
        }
        set onBind(QQ) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(QQ)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new zQ.b), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new zQ.b), this._onEffectCreatedObservable
        }
        set alphaMode(QQ) {
          this._alphaMode[0] = QQ
        }
        get alphaMode() {
          return this._alphaMode[0]
        }
        get alphaModes() {
          return this._alphaMode
        }
        setAlphaMode(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[XQ] !== WQ && (this._alphaMode[XQ] = WQ, this.KWQ(QQ.TextureDirtyFlag))
        }
        set needDepthPrePass(QQ) {
          this._needDepthPrePass !== QQ && (this._needDepthPrePass = QQ, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0))
        }
        get needDepthPrePass() {
          return this._needDepthPrePass
        }
        get isPrePassCapable() {
          return !1
        }
        set fogEnabled(WQ) {
          this._fogEnabled !== WQ && (this._fogEnabled = WQ, this.KWQ(QQ.MiscDirtyFlag))
        }
        get fogEnabled() {
          return this._fogEnabled
        }
        get wireframe() {
          switch (this._fillMode) {
            case QQ.WireFrameFillMode:
            case QQ.LineListDrawMode:
            case QQ.LineLoopDrawMode:
            case QQ.LineStripDrawMode:
              return !0
          }
          return this._scene.forceWireframe
        }
        set wireframe(WQ) {
          this.fillMode = WQ ? QQ.WireFrameFillMode : QQ.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case QQ.PointFillMode:
            case QQ.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(WQ) {
          this.fillMode = WQ ? QQ.PointFillMode : QQ.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(WQ) {
          this._fillMode !== WQ && (this._fillMode = WQ, this.KWQ(QQ.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(QQ) {
          const WQ = this.sE().Uj().getCaps().fragmentDepthSupported;
          QQ && !WQ && gQ.b.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = QQ && WQ, this._markAllSubMeshesAsMiscDirty()
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant
        }
        set isVertexOutputInvariant(QQ) {
          this._isVertexOutputInvariant !== QQ && (this._isVertexOutputInvariant = QQ, this._markAllSubMeshesAsMiscDirty())
        }
        _getDrawWrapper() {
          return this._drawWrapper
        }
        _setDrawWrapper(QQ) {
          this._drawWrapper = QQ
        }
        constructor(WQ, XQ, qQ) {
          let FQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, wQ.n)(this, xQ), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, wQ.n)(this, YQ, void 0), this.uniqueId = ((0, wQ.n)(this, NQ), (0, wQ.n)(this, ZQ, void 0)), this._loadedUniqueId = (0, wQ.n)(this, OQ), this.name = (0, wQ.n)(this, KQ, void 0), this.metadata = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, null)), this._internalMetadata = (0, wQ.n)(this, QW), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, wQ.n)(this, WW, !1), this.checkReadyOnlyOnce = ((0, wQ.n)(this, XW), (0, wQ.n)(this, wW, !1)), this.state = ((0, wQ.n)(this, qW), (0, wQ.n)(this, TW, "")), this._alpha = ((0, wQ.n)(this, zW), (0, wQ.n)(this, sW, 1)), this.inspectableCustomProperties = (0, wQ.n)(this, FW), this._backFaceCulling = (0, wQ.n)(this, PW, !0), this._textureRepetitionMode = ((0, wQ.n)(this, gW), (0, wQ.n)(this, JW, 0)), this.textureRepetitionHexTilingParams = ((0, wQ.n)(this, rW), (0, wQ.n)(this, IW, [1, .6, 7, .5])), this._cullBackFaces = ((0, wQ.n)(this, jW), (0, wQ.n)(this, BW, !0)), this._blockDirtyMechanism = ((0, wQ.n)(this, yW), !1), this.sideOrientation = (0, wQ.n)(this, VW, null), this.onCompiled = ((0, wQ.n)(this, DW), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.yE = new zQ.b, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, wQ.n)(this, pW, [2]), this._needDepthPrePass = ((0, wQ.n)(this, GW), (0, wQ.n)(this, UW, !1)), this.disableDepthWrite = ((0, wQ.n)(this, bW), (0, wQ.n)(this, vW, !1)), this.disableColorWrite = ((0, wQ.n)(this, dW), (0, wQ.n)(this, HW, !1)), this.forceDepthWrite = ((0, wQ.n)(this, aW), (0, wQ.n)(this, lW, !1)), this.depthFunction = ((0, wQ.n)(this, hW), (0, wQ.n)(this, iW, 0)), this.separateCullingPass = ((0, wQ.n)(this, cW), (0, wQ.n)(this, AW, !1)), this._fogEnabled = ((0, wQ.n)(this, RW), (0, wQ.n)(this, EW, !0)), this.pointSize = ((0, wQ.n)(this, CW), (0, wQ.n)(this, uW, 1)), this.zOffset = ((0, wQ.n)(this, LW), (0, wQ.n)(this, kW, 0)), this.zOffsetUnits = ((0, wQ.n)(this, fW), (0, wQ.n)(this, SW, 0)), this.clipPlane = (0, wQ.n)(this, tW), this.stencil = new jQ, this._isVertexOutputInvariant = (0, wQ.n)(this, oW, QQ.ForceVertexOutputInvariant), this._materialContext = (0, wQ.n)(this, eW), this._useUBO = !1, this._fillMode = QQ.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = WQ;
          const gQ = XQ || sQ.d.LastCreatedScene;
          gQ && (this._scene = gQ, this._dirtyCallbacks = {}, this._forceGLSL = FQ, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = WQ || TQ.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Uj().createMaterialContext(), this._drawWrapper = new rQ.d(this._scene.Uj(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new PQ.c(this._scene.Uj(), void 0, void 0, WQ), this._useUBO = this.sE().Uj().supportsUniformBuffers, this._createUniformBuffer(), qQ || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), QQ.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const QQ = this.sE().Uj();
          this._uniformBuffer?.dispose(), QQ.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new PQ.c(QQ, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new PQ.c(this._scene.Uj(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
        }
        toString(QQ) {
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
        isReady(QQ, WQ) {
          return !0
        }
        isReadyForSubMesh(QQ, WQ, XQ) {
          const wQ = WQ.materialDefines;
          return !!wQ && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = wQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        sE() {
          return this._scene
        }
        _getEffectiveOrientation(QQ) {
          return null !== this.sideOrientation ? this.sideOrientation : QQ.sideOrientation
        }
        get transparencyMode() {
          return this._transparencyMode
        }
        set transparencyMode(QQ) {
          this._transparencyMode = QQ
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === QQ.MATERIAL_ALPHABLEND || this._transparencyMode === QQ.MATERIAL_ALPHATESTANDBLEND
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === QQ.MATERIAL_ALPHATEST || this._transparencyMode === QQ.MATERIAL_ALPHATESTANDBLEND
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === QQ.MATERIAL_OPAQUE || this._transparencyMode === QQ.MATERIAL_ALPHATEST
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1
        }
        needAlphaBlendingForMesh(QQ) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : QQ.visibility < 1 || !this._disableAlphaBlending && (QQ.hasVertexAlpha || this.needAlphaBlending())
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest
        }
        needAlphaTestingForMesh(QQ) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(QQ) && this.needAlphaTesting()
        }
        getAlphaTestTexture() {
          return null
        }
        markDirty() {
          let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const XQ = this.sE().meshes;
          for (const QQ of XQ)
            if (QQ.ZD)
              for (const XQ of QQ.ZD)
                if (XQ.lj() === this)
                  for (const QQ of XQ._drawWrappers) QQ && this._materialContext === QQ.materialContext && (QQ._wasPreviouslyReady = !1, QQ._wasPreviouslyUsingInstances = null, QQ._forceRebindOnNextCall = WQ);
          WQ && this.KWQ(QQ.AllDirtyFlag)
        }
        _preBind(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wQ = this._scene.Uj(),
            qQ = (null == XQ ? this.sideOrientation : XQ) === QQ.ClockWiseSideOrientation,
            TQ = WQ || this._getDrawWrapper();
          return (0, yQ.c)(TQ) && TQ.materialContext && (TQ.materialContext.useVertexPulling = this.useVertexPulling), wQ.enableEffect(TQ), wQ.setState(this.backFaceCulling, this.zOffset, !1, qQ, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), qQ
        }
        bind(QQ, WQ) {}
        buildUniformLayout() {
          const QQ = this._uniformBuffer;
          this._eventInfo.ubo = QQ, this._callbackPluginEventGeneric(8, this._eventInfo), QQ.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(QQ, WQ, XQ) {
          const wQ = XQ._drawWrapper;
          this._eventInfo.subMesh = XQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), wQ._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(QQ) {}
        bindView(QQ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : QQ.setMatrix("view", this.sE().getViewMatrix())
        }
        bindViewProjection(QQ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (QQ.setMatrix("viewProjection", this.sE().getTransformMatrix()), QQ.setMatrix("projection", this.sE().getProjectionMatrix()), QQ.setMatrix("inverseProjection", this.sE().getInverseProjectionMatrix()))
        }
        bindEyePosition(QQ, WQ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(QQ, WQ)
        }
        _afterBind(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && WQ && (this._needToBindSceneUbo = !1, (0, BQ.C)(WQ, this.sE().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = QQ ? QQ.visibility : 1, this._onBindObservable && QQ && this._onBindObservable.notifyObservers(QQ), this.disableDepthWrite) {
            const QQ = this._scene.Uj();
            this._cachedDepthWriteState = QQ.getDepthWrite(), QQ.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const QQ = this._scene.Uj();
            this._cachedColorWriteState = QQ.getColorWrite(), QQ.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const QQ = this._scene.Uj();
            this._cachedDepthFunctionState = QQ.getDepthFunction() || 0, QQ.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Uj().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Uj().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Uj().setColorWrite(this._cachedColorWriteState)
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
        }
        hasTexture(QQ) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = QQ, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
        }
        clone(QQ) {
          return null
        }
        _clonePlugins(WQ, XQ) {
          const wQ = {};
          if (this._serializePlugins(wQ), QQ._ParsePlugins(wQ, WQ, this._scene, XQ), this.pluginManager)
            for (const QQ of this.pluginManager._plugins) {
              const XQ = WQ.pluginManager.getPlugin(QQ.name);
              XQ && QQ.copyTo(XQ)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const QQ = [];
            for (const WQ in this.meshMap) {
              const XQ = this.meshMap[WQ];
              XQ && QQ.push(XQ)
            }
            return QQ
          }
          return this._scene.meshes.filter((QQ => QQ.material === this))
        }
        forceCompilation(QQ, WQ, XQ, wQ) {
          const qQ = {
              clipPlane: !1,
              useInstances: !1,
              ...XQ
            },
            TQ = this.sE(),
            zQ = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const sQ = () => {
            if (!this._scene || !this._scene.Uj()) return;
            const XQ = TQ.clipPlane;
            if (qQ.clipPlane && (TQ.clipPlane = new JQ.b(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let XQ = !0,
                TQ = null;
              if (QQ.ZD) {
                const WQ = new FQ.b(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
                WQ.materialDefines && (WQ.materialDefines._renderId = -1), this.isReadyForSubMesh(QQ, WQ, qQ.useInstances) || (WQ.effect && WQ.effect.getCompilationError() && WQ.effect.allFallbacksProcessed() ? TQ = WQ.effect.getCompilationError() : (XQ = !1, setTimeout(sQ, 16)))
              }
              XQ && (this.allowShaderHotSwapping = zQ, TQ && wQ && wQ(TQ), WQ && WQ(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = zQ, WQ && WQ(this)) : setTimeout(sQ, 16);
            qQ.clipPlane && (TQ.clipPlane = XQ)
          };
          sQ()
        }
        async forceCompilationAsync(QQ, WQ) {
          return await new Promise(((XQ, wQ) => {
            this.forceCompilation(QQ, (() => {
              XQ()
            }), WQ, (QQ => {
              wQ(QQ)
            }))
          }))
        }
        KWQ(WQ) {
          this.sE().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (QQ._DirtyCallbackArray.length = 0, WQ & QQ.ImageProcessingDirtyFlag && QQ._DirtyCallbackArray.push(QQ._ImageProcessingDirtyCallBack), WQ & QQ.TextureDirtyFlag && QQ._DirtyCallbackArray.push(QQ._TextureDirtyCallBack), WQ & QQ.LightDirtyFlag && QQ._DirtyCallbackArray.push(QQ._LightsDirtyCallBack), WQ & QQ.FresnelDirtyFlag && QQ._DirtyCallbackArray.push(QQ._FresnelDirtyCallBack), WQ & QQ.AttributesDirtyFlag && QQ._DirtyCallbackArray.push(QQ._AttributeDirtyCallBack), WQ & QQ.MiscDirtyFlag && QQ._DirtyCallbackArray.push(QQ._MiscDirtyCallBack), WQ & QQ.PrePassDirtyFlag && QQ._DirtyCallbackArray.push(QQ._PrePassDirtyCallBack), QQ._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(QQ._RunDirtyCallBacks), this.sE().resetCachedMaterial())
        }
        resetDrawCache() {
          const QQ = this.sE().meshes;
          for (const WQ of QQ)
            if (WQ.ZD)
              for (const QQ of WQ.ZD) QQ.lj() === this && QQ.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(QQ) {
          const WQ = this.sE();
          if (WQ.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const XQ = WQ.meshes;
          for (const wQ of XQ)
            if (wQ.ZD)
              for (const XQ of wQ.ZD) {
                if ((XQ.lj() || (WQ._hasDefaultMaterial ? WQ.defaultMaterial : null)) === this)
                  for (const WQ of XQ._drawWrappers) WQ && WQ.defines && WQ.defines.markAllAsDirty && this._materialContext === WQ.materialContext && QQ(WQ.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.sE().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const QQ = this.sE().enablePrePassRenderer();
          QQ && QQ.KWQ()
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(QQ._AllDirtyCallBack)
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(QQ._ImageProcessingDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(QQ._TextureDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(QQ._FresnelDirtyCallBack)
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(QQ._FresnelAndMiscDirtyCallBack)
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(QQ._LightsDirtyCallBack)
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(QQ._AttributeDirtyCallBack)
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(QQ._MiscDirtyCallBack)
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(QQ._PrePassDirtyCallBack)
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(QQ._TextureAndMiscDirtyCallBack)
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const QQ = this._scene.onScenePerformancePriorityChangedObservable.addOnce((() => {
              this.checkReadyOnlyOnce = !1
            }));
            this.yE.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(QQ)
            }))
          }
        }
        setPrePassRenderer(QQ) {
          return !1
        }
        dispose(QQ, WQ, XQ) {
          const wQ = this.sE();
          if (wQ.stopAnimation(this), wQ.freeProcessedMaterials(), wQ.removeMaterial(this), this._eventInfo.forceDisposeTextures = WQ, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const QQ = this._parentContainer.materials.indexOf(this);
            QQ > -1 && this._parentContainer.materials.splice(QQ, 1), this._parentContainer = null
          }
          if (!0 !== XQ)
            if (this.meshMap)
              for (const qQ in this.meshMap) {
                const QQ = this.meshMap[qQ];
                this._disposeMeshResources(QQ)
              } else {
                const QQ = wQ.meshes;
                for (const WQ of QQ) this._disposeMeshResources(WQ)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.yE.notifyObservers(this), this.yE.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(QQ) {
          if (!QQ) return;
          const WQ = QQ.geometry,
            XQ = QQ._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (QQ.ZD && XQ)
              for (const wQ of QQ.ZD) {
                const QQ = wQ._drawWrappers;
                for (let qQ = 0; qQ < QQ.length; qQ++) {
                  const TQ = QQ[qQ]?.effect;
                  if (!TQ) continue;
                  XQ[qQ] === this && (WQ?._releaseVertexArrayObject(TQ), wQ._removeDrawWrapper(qQ, !0, !0))
                }
              }
          } else WQ?._releaseVertexArrayObject(this._drawWrapper.effect);
          QQ.material !== this || QQ.bqQ || (QQ.material = null)
        }
        serialize() {
          const QQ = IQ.b.Serialize(this);
          return QQ.stencil = this.stencil.serialize(), QQ.uniqueId = this.uniqueId, this._serializePlugins(QQ), QQ
        }
        _serializePlugins(QQ) {
          if (QQ.plugins = {}, this.pluginManager)
            for (const WQ of this.pluginManager._plugins) WQ.doNotSerialize || (QQ.plugins[WQ.getClassName()] = WQ.serialize())
        }
        static ParseAlphaMode(QQ, WQ) {
          void 0 !== QQ._alphaMode ? WQ._alphaMode = Array.isArray(QQ._alphaMode) ? [...QQ._alphaMode] : [QQ._alphaMode] : void 0 !== QQ.alphaMode ? WQ._alphaMode = Array.isArray(QQ.alphaMode) ? [...QQ.alphaMode] : [QQ.alphaMode] : WQ._alphaMode = [2]
        }
        static Parse(WQ, XQ, wQ) {
          if (WQ.customType) {
            if ("BABYLON.PBRMaterial" === WQ.customType && WQ.overloadedAlbedo && (WQ.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return gQ.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else WQ.customType = "BABYLON.StandardMaterial";
          const qQ = TQ.g.Instantiate(WQ.customType).Parse(WQ, XQ, wQ);
          return qQ._loadedUniqueId = WQ.uniqueId, QQ.ParseAlphaMode(WQ, qQ), qQ
        }
        static _ParsePlugins(QQ, WQ, XQ, wQ) {
          if (QQ.plugins)
            for (const qQ in QQ.plugins) {
              const zQ = QQ.plugins[qQ];
              let sQ = WQ.pluginManager?.getPlugin(zQ.name);
              if (!sQ) {
                const QQ = TQ.g.Instantiate("BABYLON." + qQ);
                QQ && (sQ = new QQ(WQ))
              }
              sQ?.parse(zQ, XQ, wQ)
            }
        }
      }, (() => {
        const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)("alpha")], vQ = [(0, qQ.I)("backFaceCulling")], dQ = [(0, qQ.I)("textureRepetitionMode")], HQ = [(0, qQ.I)("textureRepetitionHexTilingParams")], aQ = [(0, qQ.I)("cullBackFaces")], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], EQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], uQ = [(0, qQ.I)("fogEnabled")], LQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], fQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], tQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], nQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, SQ, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: QQ => "pointsCloud" in QQ,
            get: QQ => QQ.pointsCloud
          },
          metadata: TQ
        }, null, xQ), (0, wQ.k)(QQ, null, tQ, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "fillMode" in QQ,
            get: QQ => QQ.fillMode
          },
          metadata: TQ
        }, null, xQ), (0, wQ.k)(QQ, null, oQ, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLogarithmicDepth" in QQ,
            get: QQ => QQ.useLogarithmicDepth
          },
          metadata: TQ
        }, null, xQ), (0, wQ.k)(QQ, null, nQ, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "transparencyMode" in QQ,
            get: QQ => QQ.transparencyMode
          },
          metadata: TQ
        }, null, xQ), (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: QQ => "id" in QQ,
            get: QQ => QQ.id,
            set: (QQ, WQ) => {
              QQ.id = WQ
            }
          },
          metadata: TQ
        }, YQ, NQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: QQ => "uniqueId" in QQ,
            get: QQ => QQ.uniqueId,
            set: (QQ, WQ) => {
              QQ.uniqueId = WQ
            }
          },
          metadata: TQ
        }, ZQ, OQ), (0, wQ.k)(null, null, VQ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: QQ => "name" in QQ,
            get: QQ => QQ.name,
            set: (QQ, WQ) => {
              QQ.name = WQ
            }
          },
          metadata: TQ
        }, KQ, mQ), (0, wQ.k)(null, null, DQ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metadata" in QQ,
            get: QQ => QQ.metadata,
            set: (QQ, WQ) => {
              QQ.metadata = WQ
            }
          },
          metadata: TQ
        }, MQ, QW), (0, wQ.k)(null, null, pQ, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: QQ => "checkReadyOnEveryCall" in QQ,
            get: QQ => QQ.checkReadyOnEveryCall,
            set: (QQ, WQ) => {
              QQ.checkReadyOnEveryCall = WQ
            }
          },
          metadata: TQ
        }, WW, XW), (0, wQ.k)(null, null, GQ, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: QQ => "checkReadyOnlyOnce" in QQ,
            get: QQ => QQ.checkReadyOnlyOnce,
            set: (QQ, WQ) => {
              QQ.checkReadyOnlyOnce = WQ
            }
          },
          metadata: TQ
        }, wW, qW), (0, wQ.k)(null, null, UQ, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: QQ => "state" in QQ,
            get: QQ => QQ.state,
            set: (QQ, WQ) => {
              QQ.state = WQ
            }
          },
          metadata: TQ
        }, TW, zW), (0, wQ.k)(null, null, bQ, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_alpha" in QQ,
            get: QQ => QQ._alpha,
            set: (QQ, WQ) => {
              QQ._alpha = WQ
            }
          },
          metadata: TQ
        }, sW, FW), (0, wQ.k)(null, null, vQ, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_backFaceCulling" in QQ,
            get: QQ => QQ._backFaceCulling,
            set: (QQ, WQ) => {
              QQ._backFaceCulling = WQ
            }
          },
          metadata: TQ
        }, PW, gW), (0, wQ.k)(null, null, dQ, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_textureRepetitionMode" in QQ,
            get: QQ => QQ._textureRepetitionMode,
            set: (QQ, WQ) => {
              QQ._textureRepetitionMode = WQ
            }
          },
          metadata: TQ
        }, JW, rW), (0, wQ.k)(null, null, HQ, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: QQ => "textureRepetitionHexTilingParams" in QQ,
            get: QQ => QQ.textureRepetitionHexTilingParams,
            set: (QQ, WQ) => {
              QQ.textureRepetitionHexTilingParams = WQ
            }
          },
          metadata: TQ
        }, IW, jW), (0, wQ.k)(null, null, aQ, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_cullBackFaces" in QQ,
            get: QQ => QQ._cullBackFaces,
            set: (QQ, WQ) => {
              QQ._cullBackFaces = WQ
            }
          },
          metadata: TQ
        }, BW, yW), (0, wQ.k)(null, null, lQ, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "sideOrientation" in QQ,
            get: QQ => QQ.sideOrientation,
            set: (QQ, WQ) => {
              QQ.sideOrientation = WQ
            }
          },
          metadata: TQ
        }, VW, DW), (0, wQ.k)(null, null, hQ, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_alphaMode" in QQ,
            get: QQ => QQ._alphaMode,
            set: (QQ, WQ) => {
              QQ._alphaMode = WQ
            }
          },
          metadata: TQ
        }, pW, GW), (0, wQ.k)(null, null, iQ, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_needDepthPrePass" in QQ,
            get: QQ => QQ._needDepthPrePass,
            set: (QQ, WQ) => {
              QQ._needDepthPrePass = WQ
            }
          },
          metadata: TQ
        }, UW, bW), (0, wQ.k)(null, null, cQ, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableDepthWrite" in QQ,
            get: QQ => QQ.disableDepthWrite,
            set: (QQ, WQ) => {
              QQ.disableDepthWrite = WQ
            }
          },
          metadata: TQ
        }, vW, dW), (0, wQ.k)(null, null, AQ, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableColorWrite" in QQ,
            get: QQ => QQ.disableColorWrite,
            set: (QQ, WQ) => {
              QQ.disableColorWrite = WQ
            }
          },
          metadata: TQ
        }, HW, aW), (0, wQ.k)(null, null, RQ, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceDepthWrite" in QQ,
            get: QQ => QQ.forceDepthWrite,
            set: (QQ, WQ) => {
              QQ.forceDepthWrite = WQ
            }
          },
          metadata: TQ
        }, lW, hW), (0, wQ.k)(null, null, EQ, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "depthFunction" in QQ,
            get: QQ => QQ.depthFunction,
            set: (QQ, WQ) => {
              QQ.depthFunction = WQ
            }
          },
          metadata: TQ
        }, iW, cW), (0, wQ.k)(null, null, CQ, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "separateCullingPass" in QQ,
            get: QQ => QQ.separateCullingPass,
            set: (QQ, WQ) => {
              QQ.separateCullingPass = WQ
            }
          },
          metadata: TQ
        }, AW, RW), (0, wQ.k)(null, null, uQ, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_fogEnabled" in QQ,
            get: QQ => QQ._fogEnabled,
            set: (QQ, WQ) => {
              QQ._fogEnabled = WQ
            }
          },
          metadata: TQ
        }, EW, CW), (0, wQ.k)(null, null, LQ, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: QQ => "pointSize" in QQ,
            get: QQ => QQ.pointSize,
            set: (QQ, WQ) => {
              QQ.pointSize = WQ
            }
          },
          metadata: TQ
        }, uW, LW), (0, wQ.k)(null, null, kQ, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zOffset" in QQ,
            get: QQ => QQ.zOffset,
            set: (QQ, WQ) => {
              QQ.zOffset = WQ
            }
          },
          metadata: TQ
        }, kW, fW), (0, wQ.k)(null, null, fQ, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zOffsetUnits" in QQ,
            get: QQ => QQ.zOffsetUnits,
            set: (QQ, WQ) => {
              QQ.zOffsetUnits = WQ
            }
          },
          metadata: TQ
        }, SW, tW), (0, wQ.k)(null, null, eQ, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_isVertexOutputInvariant" in QQ,
            get: QQ => QQ._isVertexOutputInvariant,
            set: (QQ, WQ) => {
              QQ._isVertexOutputInvariant = WQ
            }
          },
          metadata: TQ
        }, oW, eW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TQ
        })
      })(), QQ.TriangleFillMode = 0, QQ.WireFrameFillMode = 1, QQ.PointFillMode = 2, QQ.PointListDrawMode = 3, QQ.LineListDrawMode = 4, QQ.LineLoopDrawMode = 5, QQ.LineStripDrawMode = 6, QQ.TriangleStripDrawMode = 7, QQ.TriangleFanDrawMode = 8, QQ.ClockWiseSideOrientation = 0, QQ.CounterClockWiseSideOrientation = 1, QQ.ImageProcessingDirtyFlag = 64, QQ.TextureDirtyFlag = 1, QQ.LightDirtyFlag = 2, QQ.FresnelDirtyFlag = 4, QQ.AttributesDirtyFlag = 8, QQ.MiscDirtyFlag = 16, QQ.PrePassDirtyFlag = 32, QQ.AllDirtyFlag = 127, QQ.MATERIAL_OPAQUE = 0, QQ.MATERIAL_ALPHATEST = 1, QQ.MATERIAL_ALPHABLEND = 2, QQ.MATERIAL_ALPHATESTANDBLEND = 3, QQ.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, QQ.MATERIAL_NORMALBLENDMETHOD_RNM = 1, QQ.LIGHTFALLOFF_PHYSICAL = 0, QQ.LIGHTFALLOFF_GLTF = 1, QQ.LIGHTFALLOFF_STANDARD = 2, QQ.OnEventObservable = new zQ.b, QQ.ForceVertexOutputInvariant = !1, QQ._AllDirtyCallBack = QQ => QQ.markAllAsDirty(), QQ._ImageProcessingDirtyCallBack = QQ => QQ.markAsImageProcessingDirty(), QQ._TextureDirtyCallBack = QQ => QQ.markAsTexturesDirty(), QQ._FresnelDirtyCallBack = QQ => QQ.markAsFresnelDirty(), QQ._MiscDirtyCallBack = QQ => QQ.markAsMiscDirty(), QQ._PrePassDirtyCallBack = QQ => QQ.markAsPrePassDirty(), QQ._LightsDirtyCallBack = QQ => QQ.markAsLightDirty(), QQ._AttributeDirtyCallBack = QQ => QQ.markAsAttributesDirty(), QQ._FresnelAndMiscDirtyCallBack = WQ => {
        QQ._FresnelDirtyCallBack(WQ), QQ._MiscDirtyCallBack(WQ)
      }, QQ._TextureAndMiscDirtyCallBack = WQ => {
        QQ._TextureDirtyCallBack(WQ), QQ._MiscDirtyCallBack(WQ)
      }, QQ._DirtyCallbackArray = [], QQ._RunDirtyCallBacks = WQ => {
        for (const XQ of QQ._DirtyCallbackArray) XQ(WQ)
      }, QQ
    })();
    Object.getOwnPropertyDescriptor(DQ.prototype, "pluginManager") || Object.defineProperty(DQ.prototype, "pluginManager", (0, VQ.g)("Material", "pluginManager"))
  },
  40591: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(40170);
    class qQ {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(QQ) {
        this._DiffuseTextureEnabled !== QQ && (this._DiffuseTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(QQ) {
        this._BaseWeightTextureEnabled !== QQ && (this._BaseWeightTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(QQ) {
        this._BaseDiffuseRoughnessTextureEnabled !== QQ && (this._BaseDiffuseRoughnessTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(QQ) {
        this._DetailTextureEnabled !== QQ && (this._DetailTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(QQ) {
        this._DecalMapEnabled !== QQ && (this._DecalMapEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(QQ) {
        this._AmbientTextureEnabled !== QQ && (this._AmbientTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(QQ) {
        this._OpacityTextureEnabled !== QQ && (this._OpacityTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(QQ) {
        this._ReflectionTextureEnabled !== QQ && (this._ReflectionTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(QQ) {
        this._EmissiveTextureEnabled !== QQ && (this._EmissiveTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(QQ) {
        this._SpecularTextureEnabled !== QQ && (this._SpecularTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(QQ) {
        this._BumpTextureEnabled !== QQ && (this._BumpTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(QQ) {
        this._LightmapTextureEnabled !== QQ && (this._LightmapTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(QQ) {
        this._RefractionTextureEnabled !== QQ && (this._RefractionTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(QQ) {
        this._ColorGradingTextureEnabled !== QQ && (this._ColorGradingTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(QQ) {
        this._FresnelEnabled !== QQ && (this._FresnelEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(QQ) {
        this._ClearCoatTextureEnabled !== QQ && (this._ClearCoatTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(QQ) {
        this._ClearCoatBumpTextureEnabled !== QQ && (this._ClearCoatBumpTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(QQ) {
        this._ClearCoatTintTextureEnabled !== QQ && (this._ClearCoatTintTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(QQ) {
        this._SheenTextureEnabled !== QQ && (this._SheenTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(QQ) {
        this._AnisotropicTextureEnabled !== QQ && (this._AnisotropicTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(QQ) {
        this._ThicknessTextureEnabled !== QQ && (this._ThicknessTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(QQ) {
        this._RefractionIntensityTextureEnabled !== QQ && (this._RefractionIntensityTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(QQ) {
        this._TranslucencyIntensityTextureEnabled !== QQ && (this._TranslucencyIntensityTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(QQ) {
        this._TranslucencyColorTextureEnabled !== QQ && (this._TranslucencyColorTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(QQ) {
        this._IridescenceTextureEnabled !== QQ && (this._IridescenceTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
      }
    }
    qQ._DiffuseTextureEnabled = !0, qQ._BaseWeightTextureEnabled = !0, qQ._BaseDiffuseRoughnessTextureEnabled = !0, qQ._DetailTextureEnabled = !0, qQ._DecalMapEnabled = !0, qQ._AmbientTextureEnabled = !0, qQ._OpacityTextureEnabled = !0, qQ._ReflectionTextureEnabled = !0, qQ._EmissiveTextureEnabled = !0, qQ._SpecularTextureEnabled = !0, qQ._BumpTextureEnabled = !0, qQ._LightmapTextureEnabled = !0, qQ._RefractionTextureEnabled = !0, qQ._ColorGradingTextureEnabled = !0, qQ._FresnelEnabled = !0, qQ._ClearCoatTextureEnabled = !0, qQ._ClearCoatBumpTextureEnabled = !0, qQ._ClearCoatTintTextureEnabled = !0, qQ._SheenTextureEnabled = !0, qQ._AnisotropicTextureEnabled = !0, qQ._ThicknessTextureEnabled = !0, qQ._RefractionIntensityTextureEnabled = !0, qQ._TranslucencyIntensityTextureEnabled = !0, qQ._TranslucencyColorTextureEnabled = !0, qQ._IridescenceTextureEnabled = !0
  },
  40584: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => EQ,
      A: () => BQ,
      C: () => yQ,
      E: () => GQ,
      G: () => iQ,
      J: () => UQ,
      N: () => lQ,
      R: () => hQ,
      S: () => IQ,
      W: () => rQ,
      X: () => tQ,
      _: () => uQ,
      ab: () => RQ,
      db: () => pQ,
      e: () => AQ,
      fb: () => cQ,
      hb: () => oQ,
      i: () => bQ,
      jb: () => eQ,
      l: () => JQ,
      mb: () => nQ,
      nb: () => ZQ,
      p: () => VQ,
      r: () => DQ,
      rb: () => YQ,
      t: () => aQ,
      tb: () => NQ,
      w: () => FQ,
      xb: () => jQ
    });
    var wQ = XQ(38956),
      qQ = XQ(37392),
      TQ = XQ(40470),
      zQ = XQ(40589),
      sQ = XQ(40591);

    function FQ(QQ, WQ, XQ) {
      if (!QQ || QQ.LOGARITHMICDEPTH || QQ.indexOf && QQ.indexOf("LOGARITHMICDEPTH") >= 0) {
        const QQ = XQ.activeCamera;
        1 === QQ.mode && wQ.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), WQ.setFloat("logarithmicDepthConstant", 2 / (Math.log(QQ.maxZ + 1) / Math.LN2))
      }
    }
    const PQ = {
        r: 0,
        g: 0,
        b: 0
      },
      gQ = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function JQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      XQ && QQ.fogEnabled && (!WQ || WQ.applyFog) && 0 !== QQ.fogMode && (XQ.setFloat4("vFogInfos", QQ.fogMode, QQ.fogStart, QQ.fogEnd, QQ.fogDensity), wQ ? (QQ.fogColor.toLinearSpaceToRef(PQ, QQ.Uj().useExactSrgbConversions), XQ.setColor3("vFogColor", PQ)) : XQ.setColor3("vFogColor", QQ.fogColor))
    }

    function rQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
      const JQ = QQ.numMaxInfluencers || QQ.numInfluencers;
      return JQ <= 0 ? 0 : (WQ.push("#define MORPHTARGETS"), QQ.hasPositions && WQ.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), QQ.hasNormals && WQ.push("#define MORPHTARGETTEXTURE_HASNORMALS"), QQ.hasTangents && WQ.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), QQ.hasUVs && WQ.push("#define MORPHTARGETTEXTURE_HASUVS"), QQ.hasUV2s && WQ.push("#define MORPHTARGETTEXTURE_HASUV2S"), QQ.hasColors && WQ.push("#define MORPHTARGETTEXTURE_HASCOLORS"), QQ.supportsPositions && qQ && WQ.push("#define MORPHTARGETS_POSITION"), QQ.supportsNormals && TQ && WQ.push("#define MORPHTARGETS_NORMAL"), QQ.supportsTangents && zQ && WQ.push("#define MORPHTARGETS_TANGENT"), QQ.supportsUVs && sQ && WQ.push("#define MORPHTARGETS_UV"), QQ.supportsUV2s && FQ && WQ.push("#define MORPHTARGETS_UV2"), QQ.supportsColors && PQ && WQ.push("#define MORPHTARGETS_COLOR"), WQ.push("#define NUM_MORPH_INFLUENCERS " + JQ), QQ.isUsingTextureForTargets && WQ.push("#define MORPHTARGETS_TEXTURE"), gQ.NUM_MORPH_INFLUENCERS = JQ, gQ.NORMAL = TQ, gQ.TANGENT = zQ, gQ.UV = sQ, gQ.UV2 = FQ, gQ.COLOR = PQ, IQ(XQ, wQ, gQ, qQ), JQ)
    }

    function IQ(QQ, WQ, XQ) {
      let TQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const zQ = XQ.NUM_MORPH_INFLUENCERS;
      if (zQ > 0 && qQ.d.LastCreatedEngine) {
        const sQ = qQ.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          FQ = WQ.morphTargetManager;
        if (FQ?.isUsingTextureForTargets) return;
        const PQ = FQ && FQ.supportsPositions && TQ,
          gQ = FQ && FQ.supportsNormals && XQ.NORMAL,
          JQ = FQ && FQ.supportsTangents && XQ.TANGENT,
          rQ = FQ && FQ.supportsUVs && XQ.UV1,
          IQ = FQ && FQ.supportsUV2s && XQ.UV2,
          jQ = FQ && FQ.supportsColors && XQ.VERTEXCOLOR;
        for (let XQ = 0; XQ < zQ; XQ++) PQ && QQ.push("position" + XQ), gQ && QQ.push("normal" + XQ), JQ && QQ.push("tangent" + XQ), rQ && QQ.push("uv_" + XQ), IQ && QQ.push("uv2_" + XQ), jQ && QQ.push("color" + XQ), QQ.length > sQ && wQ.b.Error("Cannot add more vertex attributes for mesh " + WQ.name)
      }
    }

    function jQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      QQ.push("world0"), QQ.push("world1"), QQ.push("world2"), QQ.push("world3"), WQ && (QQ.push("previousWorld0"), QQ.push("previousWorld1"), QQ.push("previousWorld2"), QQ.push("previousWorld3"))
    }

    function BQ(QQ, WQ) {
      const XQ = QQ.morphTargetManager;
      QQ && XQ && WQ.setFloatArray("morphTargetInfluences", XQ.influences)
    }

    function yQ(QQ, WQ) {
      WQ.bindToEffect(QQ, "Scene")
    }

    function VQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        PQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        JQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        rQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (QQ.texturesEnabled && qQ && sQ.e.ReflectionTextureEnabled) {
        if (XQ.N_("reflectionMatrix", qQ.getReflectionTextureMatrix()), XQ.updateFloat2("vReflectionInfos", qQ.level * QQ.iblIntensity, rQ), FQ && qQ.boundingBoxSize) {
          const QQ = qQ;
          XQ.updateVector3("vReflectionPosition", QQ.boundingBoxPosition), XQ.updateVector3("vReflectionSize", QQ.boundingBoxSize)
        }
        if (TQ) {
          const QQ = qQ.getSize().width;
          XQ.updateFloat2("vReflectionFilteringInfo", QQ, Math.log2(QQ))
        }
        if (gQ && !WQ.USEIRRADIANCEMAP) {
          const QQ = qQ.sphericalPolynomial;
          if (WQ.USESPHERICALFROMREFLECTIONMAP && QQ)
            if (WQ.SPHERICAL_HARMONICS) {
              const WQ = QQ.preScaledHarmonics;
              XQ.updateVector3("vSphericalL00", WQ.l00), XQ.updateVector3("vSphericalL1_1", WQ.l1_1), XQ.updateVector3("vSphericalL10", WQ.l10), XQ.updateVector3("vSphericalL11", WQ.l11), XQ.updateVector3("vSphericalL2_2", WQ.l2_2), XQ.updateVector3("vSphericalL2_1", WQ.l2_1), XQ.updateVector3("vSphericalL20", WQ.l20), XQ.updateVector3("vSphericalL21", WQ.l21), XQ.updateVector3("vSphericalL22", WQ.l22)
            } else XQ.updateFloat3("vSphericalX", QQ.x.x, QQ.x.y, QQ.x.z), XQ.updateFloat3("vSphericalY", QQ.y.x, QQ.y.y, QQ.y.z), XQ.updateFloat3("vSphericalZ", QQ.z.x, QQ.z.y, QQ.z.z), XQ.updateFloat3("vSphericalXX_ZZ", QQ.xx.x - QQ.zz.x, QQ.xx.y - QQ.zz.y, QQ.xx.z - QQ.zz.z), XQ.updateFloat3("vSphericalYY_ZZ", QQ.yy.x - QQ.zz.x, QQ.yy.y - QQ.zz.y, QQ.yy.z - QQ.zz.z), XQ.updateFloat3("vSphericalZZ", QQ.zz.x, QQ.zz.y, QQ.zz.z), XQ.updateFloat3("vSphericalXY", QQ.xy.x, QQ.xy.y, QQ.xy.z), XQ.updateFloat3("vSphericalYZ", QQ.yz.x, QQ.yz.y, QQ.yz.z), XQ.updateFloat3("vSphericalZX", QQ.zx.x, QQ.zx.y, QQ.zx.z)
        } else PQ && WQ.USEIRRADIANCEMAP && WQ.USE_IRRADIANCE_DOMINANT_DIRECTION && qQ.irradianceTexture && XQ.updateVector3("vReflectionDominantDirection", qQ.irradianceTexture._dominantDirection);
        zQ && XQ.updateFloat3("vReflectionMicrosurfaceInfos", qQ.getSize().width, qQ.lodGenerationScale, qQ.lodGenerationOffset)
      }
      JQ && XQ.updateColor3("vReflectionColor", wQ)
    }

    function DQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (wQ && sQ.e.ReflectionTextureEnabled) {
        WQ.LODBASEDMICROSFURACE ? XQ.setTexture("reflectionSampler", wQ) : (XQ.setTexture("reflectionSampler", wQ._lodTextureMid || wQ), XQ.setTexture("reflectionSamplerLow", wQ._lodTextureLow || wQ), XQ.setTexture("reflectionSamplerHigh", wQ._lodTextureHigh || wQ)), WQ.USEIRRADIANCEMAP && XQ.setTexture("irradianceSampler", wQ.irradianceTexture);
        const TQ = QQ.iblCdfGenerator;
        qQ && TQ && XQ.setTexture("icdfSampler", TQ.getIcdfTexture())
      }
    }

    function pQ(QQ, WQ, XQ) {
      WQ._needUVs = !0, WQ[XQ] = !0, QQ.optimizeUVAllocation && QQ.getTextureMatrix().isIdentityAs3x2() ? (WQ[XQ + "DIRECTUV"] = QQ.coordinatesIndex + 1, WQ["MAINUV" + (QQ.coordinatesIndex + 1)] = !0) : WQ[XQ + "DIRECTUV"] = 0
    }

    function GQ(QQ, WQ, XQ) {
      const wQ = QQ.getTextureMatrix();
      WQ.N_(XQ + "Matrix", wQ)
    }

    function UQ(QQ, WQ, XQ) {
      XQ.BAKED_VERTEX_ANIMATION_TEXTURE && XQ.INSTANCES && QQ.push("bakedVertexAnimationSettingsInstanced")
    }

    function bQ(QQ, WQ, XQ) {
      var wQ;
      if (WQ && QQ && (QQ.computeBonesUsingShaders && WQ._bonesComputationForcedToCPU && (QQ.computeBonesUsingShaders = !1), QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton)) {
        const qQ = QQ.skeleton;
        if (qQ.isUsingTextureForMatrices && WQ.getUniformIndex("boneTextureInfo") > -1) {
          const XQ = qQ.getTransformMatrixTexture(QQ);
          WQ.setTexture("boneSampler", XQ), WQ.setFloat2("boneTextureInfo", qQ._textureWidth, qQ._textureHeight)
        } else {
          const TQ = qQ.getTransformMatrices(QQ);
          TQ && (WQ.setMatrices("mBones", TQ), XQ && QQ.sE().prePassRenderer && QQ.sE().prePassRenderer.getIndex(2) && (XQ.previousBones[QQ.uniqueId] || (XQ.previousBones[QQ.uniqueId] = TQ.slice()), WQ.setMatrices("mPreviousBones", XQ.previousBones[QQ.uniqueId]), wQ = TQ, XQ.previousBones[QQ.uniqueId].set(wQ)))
        }
      }
    }

    function vQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      QQ._bindLight(WQ, XQ, wQ, qQ, TQ)
    }
    const dQ = 4,
      HQ = new WeakMap;

    function aQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const TQ = Math.min(WQ.lightSources.length, qQ);
      for (let zQ = 0; zQ < TQ; zQ++) {
        vQ(WQ.lightSources[zQ], zQ, QQ, XQ, "boolean" === typeof wQ ? wQ : wQ.SPECULARTERM, WQ.receiveShadows)
      }
    }

    function lQ(QQ, WQ, XQ, wQ) {
      XQ.NUM_BONE_INFLUENCERS > 0 && (wQ.addCPUSkinningFallback(0, WQ), QQ.push("matricesIndices"), QQ.push("matricesWeights"), XQ.NUM_BONE_INFLUENCERS > 4 && (QQ.push("matricesIndicesExtra"), QQ.push("matricesWeightsExtra")))
    }

    function hQ(QQ, WQ) {
      (WQ.INSTANCES || WQ.THIN_INSTANCES) && jQ(QQ, !!WQ.PREPASS_VELOCITY), WQ.INSTANCESCOLOR && QQ.push("instanceColor")
    }

    function iQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = 0;
      for (let TQ = 0; TQ < XQ && QQ["LIGHT" + TQ]; TQ++) TQ > 0 && (qQ = wQ + TQ, WQ.addFallback(qQ, "LIGHT" + TQ)), QQ.SHADOWS || (QQ["SHADOW" + TQ] && WQ.addFallback(wQ, "SHADOW" + TQ), QQ["SHADOWPCF" + TQ] && WQ.addFallback(wQ, "SHADOWPCF" + TQ), QQ["SHADOWPCSS" + TQ] && WQ.addFallback(wQ, "SHADOWPCSS" + TQ), QQ["SHADOWPOISSON" + TQ] && WQ.addFallback(wQ, "SHADOWPOISSON" + TQ), QQ["SHADOWESM" + TQ] && WQ.addFallback(wQ, "SHADOWESM" + TQ), QQ["SHADOWCLOSEESM" + TQ] && WQ.addFallback(wQ, "SHADOWCLOSEESM" + TQ));
      return qQ
    }

    function cQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      let sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PQ = arguments.length > 9 ? arguments[9] : void 0,
        gQ = arguments.length > 10 ? arguments[10] : void 0;
      if (zQ._areMiscDirty) {
        zQ.LOGARITHMICDEPTH = XQ, zQ.POINTSIZE = wQ, zQ.FOG = qQ && function(QQ, WQ) {
          return WQ.fogEnabled && QQ.applyFog && 0 !== WQ.fogMode
        }(QQ, WQ), zQ.NONUNIFORMSCALING = QQ.nonUniformScaling, zQ.ALPHATEST = TQ, zQ.DECAL_AFTER_DETAIL = sQ, zQ.USE_VERTEX_PULLING = FQ, zQ.RIGHT_HANDED = WQ.useRightHandedSystem;
        const JQ = FQ ? PQ?.geometry?.getIndexBuffer() : null,
          rQ = !!PQ && PQ.isUnIndexed;
        zQ.VERTEX_PULLING_USE_INDEX_BUFFER = !!JQ && !rQ, zQ.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!JQ || rQ) && JQ.is32Bits, zQ.VERTEXOUTPUT_INVARIANT = !!gQ
      }
    }

    function AQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!QQ.lightsEnabled || wQ) return !0;
      const qQ = WQ.lightSources,
        TQ = Math.min(qQ.length, XQ);
      for (let zQ = 0; zQ < TQ; zQ++)
        if (!qQ[zQ].areLightTexturesReady()) return !1;
      return !0
    }

    function RQ(QQ, WQ, XQ, qQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!XQ._areLightsDirty) return XQ._needNormals;
      const sQ = TQ;
      TQ = function(QQ, WQ) {
        const XQ = QQ.Uj().getCaps().maxUniformBuffersPerShaderStage;
        if (null == XQ) return WQ;
        const wQ = Math.max(XQ - dQ, 1);
        return Math.min(WQ, wQ)
      }(QQ, TQ);
      let FQ = 0;
      const PQ = {
        needNormals: XQ._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (QQ.lightsEnabled && !zQ) {
        WQ.lightSources.length > TQ && TQ < sQ && function(QQ, WQ, XQ, qQ) {
          let TQ = HQ.get(QQ);
          TQ || (TQ = new Set, HQ.set(QQ, TQ)), TQ.has(qQ) || (TQ.add(qQ), wQ.b.Warn(`maxSimultaneousLights is ${WQ} but this engine supports at most ${XQ} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${qQ} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${qQ+dQ} uniform buffers, over the device limit of ${QQ.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${XQ}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${XQ} or less to silence this warning.`))
        }(QQ.Uj(), sQ, TQ, Math.min(WQ.lightSources.length, sQ));
        for (const wQ of WQ.lightSources)
          if (CQ(QQ, WQ, wQ, FQ, XQ, qQ, PQ), FQ++, FQ === TQ) break
      }
      XQ.SPECULARTERM = PQ.specularEnabled, XQ.SHADOWS = PQ.shadowEnabled;
      const gQ = Math.max(TQ, XQ.MAXLIGHTCOUNT || 0);
      for (let wQ = FQ; wQ < gQ; wQ++) void 0 !== XQ["LIGHT" + wQ] && (XQ["LIGHT" + wQ] = !1, XQ["HEMILIGHT" + wQ] = !1, XQ["POINTLIGHT" + wQ] = !1, XQ["DIRLIGHT" + wQ] = !1, XQ["SPOTLIGHT" + wQ] = !1, XQ["AREALIGHT" + wQ] = !1, XQ["CLUSTLIGHT" + wQ] = !1, XQ["SHADOW" + wQ] = !1, XQ["SHADOWCSM" + wQ] = !1, XQ["SHADOWCSMDEBUG" + wQ] = !1, XQ["SHADOWCSMNUM_CASCADES" + wQ] = !1, XQ["SHADOWCSMUSESHADOWMAXZ" + wQ] = !1, XQ["SHADOWCSMNOBLEND" + wQ] = !1, XQ["SHADOWCSM_RIGHTHANDED" + wQ] = !1, XQ["SHADOWPCF" + wQ] = !1, XQ["SHADOWPCSS" + wQ] = !1, XQ["SHADOWPOISSON" + wQ] = !1, XQ["SHADOWESM" + wQ] = !1, XQ["SHADOWCLOSEESM" + wQ] = !1, XQ["SHADOWCUBE" + wQ] = !1, XQ["SHADOWLOWQUALITY" + wQ] = !1, XQ["SHADOWMEDIUMQUALITY" + wQ] = !1);
      XQ.LIGHTCOUNT = FQ, XQ.MAXLIGHTCOUNT = TQ;
      const JQ = QQ.Uj().getCaps();
      return void 0 === XQ.SHADOWFLOAT && (PQ.needRebuild = !0), XQ.SHADOWFLOAT = PQ.shadowEnabled && (JQ.textureFloatRender && JQ.textureFloatLinearFiltering || JQ.textureHalfFloatRender && JQ.textureHalfFloatLinearFiltering), XQ.LIGHTMAPEXCLUDED = PQ.lightmapMode, PQ.needRebuild && XQ.rebuild(), PQ.needNormals
    }

    function EQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (WQ && sQ.e.ReflectionTextureEnabled) {
        if (!WQ.isReadyOrNotBlocking()) return !1;
        XQ._needNormals = !0, XQ.REFLECTION = !0, XQ.GAMMAREFLECTION = WQ.gammaSpace, XQ.RGBDREFLECTION = WQ.isRGBD, XQ.LODINREFLECTIONALPHA = WQ.lodLevelInAlpha, XQ.LINEARSPECULARREFLECTION = WQ.linearSpecularLOD, XQ.USEIRRADIANCEMAP = !1, XQ.LODBASEDMICROSFURACE = QQ.Uj().getCaps().textureLOD;
        const zQ = QQ.Uj();
        switch (wQ && qQ > 0 ? (XQ.NUM_SAMPLES = "" + qQ, zQ._features.needTypeSuffixInShaderConstants && (XQ.NUM_SAMPLES = XQ.NUM_SAMPLES + "u"), XQ.REALTIME_FILTERING = !0, QQ.iblCdfGenerator && (XQ.IBL_CDF_FILTERING = !0)) : XQ.REALTIME_FILTERING = !1, XQ.INVERTCUBICMAP = 6 === WQ.coordinatesMode, XQ.REFLECTIONMAP_3D = WQ.isCube, XQ.REFLECTIONMAP_OPPOSITEZ = XQ.REFLECTIONMAP_3D && QQ.useRightHandedSystem ? !WQ.invertZ : WQ.invertZ, XQ.REFLECTIONMAP_CUBIC = !1, XQ.REFLECTIONMAP_EXPLICIT = !1, XQ.REFLECTIONMAP_PLANAR = !1, XQ.REFLECTIONMAP_PROJECTION = !1, XQ.REFLECTIONMAP_SKYBOX = !1, XQ.REFLECTIONMAP_SPHERICAL = !1, XQ.REFLECTIONMAP_EQUIRECTANGULAR = !1, XQ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, XQ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, WQ.coordinatesMode) {
          case 0:
            XQ.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            XQ.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            XQ.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            XQ.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            XQ.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            XQ.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            XQ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            XQ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            XQ.REFLECTIONMAP_CUBIC = !0, XQ.USE_LOCAL_REFLECTIONMAP_CUBIC = !!WQ.boundingBoxSize
        }
        5 !== WQ.coordinatesMode && (WQ.irradianceTexture ? (XQ.USEIRRADIANCEMAP = !0, XQ.USESPHERICALFROMREFLECTIONMAP = !1, XQ.USESPHERICALINVERTEX = !1, WQ.irradianceTexture._dominantDirection ? XQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : XQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : WQ.isCube && (XQ.USESPHERICALFROMREFLECTIONMAP = !0, XQ.USEIRRADIANCEMAP = !1, XQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, XQ.USESPHERICALINVERTEX = TQ))
      } else XQ.REFLECTION = !1, XQ.REFLECTIONMAP_3D = !1, XQ.REFLECTIONMAP_SPHERICAL = !1, XQ.REFLECTIONMAP_PLANAR = !1, XQ.REFLECTIONMAP_CUBIC = !1, XQ.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, XQ.REFLECTIONMAP_PROJECTION = !1, XQ.REFLECTIONMAP_SKYBOX = !1, XQ.REFLECTIONMAP_EXPLICIT = !1, XQ.REFLECTIONMAP_EQUIRECTANGULAR = !1, XQ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, XQ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, XQ.INVERTCUBICMAP = !1, XQ.USESPHERICALFROMREFLECTIONMAP = !1, XQ.USEIRRADIANCEMAP = !1, XQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, XQ.USESPHERICALINVERTEX = !1, XQ.REFLECTIONMAP_OPPOSITEZ = !1, XQ.LODINREFLECTIONALPHA = !1, XQ.GAMMAREFLECTION = !1, XQ.RGBDREFLECTION = !1, XQ.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function CQ(QQ, WQ, XQ, wQ, qQ, zQ, sQ) {
      switch (sQ.needNormals = !0, void 0 === qQ["LIGHT" + wQ] && (sQ.needRebuild = !0), qQ["LIGHT" + wQ] = !0, qQ["SPOTLIGHT" + wQ] = !1, qQ["HEMILIGHT" + wQ] = !1, qQ["POINTLIGHT" + wQ] = !1, qQ["DIRLIGHT" + wQ] = !1, qQ["AREALIGHT" + wQ] = !1, qQ["CLUSTLIGHT" + wQ] = !1, XQ.prepareLightSpecificDefines(qQ, wQ), qQ["LIGHT_FALLOFF_PHYSICAL" + wQ] = !1, qQ["LIGHT_FALLOFF_GLTF" + wQ] = !1, qQ["LIGHT_FALLOFF_STANDARD" + wQ] = !1, XQ.falloffType) {
        case TQ.e.FALLOFF_GLTF:
          qQ["LIGHT_FALLOFF_GLTF" + wQ] = !0;
          break;
        case TQ.e.FALLOFF_PHYSICAL:
          qQ["LIGHT_FALLOFF_PHYSICAL" + wQ] = !0;
          break;
        case TQ.e.FALLOFF_STANDARD:
          qQ["LIGHT_FALLOFF_STANDARD" + wQ] = !0
      }
      if (zQ && !XQ.specular.equalsFloats(0, 0, 0) && (sQ.specularEnabled = !0), qQ["SHADOW" + wQ] = !1, qQ["SHADOWCSM" + wQ] = !1, qQ["SHADOWCSMDEBUG" + wQ] = !1, qQ["SHADOWCSMNUM_CASCADES" + wQ] = !1, qQ["SHADOWCSMUSESHADOWMAXZ" + wQ] = !1, qQ["SHADOWCSMNOBLEND" + wQ] = !1, qQ["SHADOWCSM_RIGHTHANDED" + wQ] = !1, qQ["SHADOWPCF" + wQ] = !1, qQ["SHADOWPCSS" + wQ] = !1, qQ["SHADOWPOISSON" + wQ] = !1, qQ["SHADOWESM" + wQ] = !1, qQ["SHADOWCLOSEESM" + wQ] = !1, qQ["SHADOWCUBE" + wQ] = !1, qQ["SHADOWLOWQUALITY" + wQ] = !1, qQ["SHADOWMEDIUMQUALITY" + wQ] = !1, WQ && WQ.receiveShadows && QQ.shadowsEnabled && XQ.shadowEnabled) {
        const WQ = XQ.getShadowGenerator(QQ.activeCamera) ?? XQ.getShadowGenerator();
        if (WQ) {
          const QQ = WQ.getShadowMap();
          QQ && QQ.renderList && QQ.renderList.length > 0 && (sQ.shadowEnabled = !0, WQ.prepareDefines(qQ, wQ))
        }
      }
      XQ.lightmapMode != TQ.e.LIGHTMAP_DEFAULT ? (sQ.lightmapMode = !0, qQ["LIGHTMAPEXCLUDED" + wQ] = !0, qQ["LIGHTMAPNOSPECULAR" + wQ] = XQ.lightmapMode == TQ.e.LIGHTMAP_SHADOWSONLY) : (qQ["LIGHTMAPEXCLUDED" + wQ] = !1, qQ["LIGHTMAPNOSPECULAR" + wQ] = !1)
    }

    function uQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        FQ = function(QQ, WQ) {
          let XQ = !1;
          if (QQ.activeCamera) {
            const wQ = WQ.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              qQ = WQ.CAMERA_PERSPECTIVE ? 1 : 0,
              TQ = 1 === QQ.activeCamera.mode ? 1 : 0,
              zQ = 0 === QQ.activeCamera.mode ? 1 : 0;
            (wQ ^ TQ || qQ ^ zQ) && (WQ.CAMERA_ORTHOGRAPHIC = 1 === TQ, WQ.CAMERA_PERSPECTIVE = 1 === zQ, XQ = !0)
          }
          return XQ
        }(QQ, wQ);
      !1 !== TQ && (FQ = (0, zQ.e)(XQ, QQ, wQ)), wQ.DEPTHPREPASS !== !WQ.getColorWrite() && (wQ.DEPTHPREPASS = !wQ.DEPTHPREPASS, FQ = !0), wQ.INSTANCES !== qQ && (wQ.INSTANCES = qQ, FQ = !0), wQ.THIN_INSTANCES !== sQ && (wQ.THIN_INSTANCES = sQ, FQ = !0), FQ && wQ.markAsUnprocessed()
    }
    const LQ = 40,
      kQ = 64,
      fQ = new WeakMap,
      SQ = new WeakSet;

    function tQ(QQ, WQ, XQ, qQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!WQ._areAttributesDirty && WQ._needNormals === WQ._normals && WQ._needUVs === WQ._uvs) return !1;
      WQ._normals = WQ._needNormals, WQ._uvs = WQ._needUVs, WQ.NORMAL = WQ._needNormals && QQ.isVerticesDataPresent("normal"), WQ._needNormals && QQ.isVerticesDataPresent("tangent") && (WQ.TANGENT = !0);
      for (let wQ = 1; wQ <= 6; ++wQ) WQ["UV" + wQ] = !!WQ._needUVs && QQ.isVerticesDataPresent(`uv${1===wQ?"":wQ}`);
      if (XQ) {
        const XQ = QQ.useVertexColors && QQ.isVerticesDataPresent("color");
        WQ.VERTEXCOLOR = XQ, WQ.VERTEXALPHA = QQ.hasVertexAlpha && XQ && zQ
      }
      return QQ.isVerticesDataPresent("instanceColor") && (QQ.UqQ || QQ.hasThinInstances) && (WQ.INSTANCESCOLOR = !0), qQ && function(QQ, WQ) {
        if (QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton) {
          WQ.NUM_BONE_INFLUENCERS = QQ.numBoneInfluencers;
          const XQ = void 0 !== WQ.BONETEXTURE;
          if (QQ.skeleton.isUsingTextureForMatrices && XQ) WQ.BONETEXTURE = !0;
          else {
            WQ.BonesPerMesh = QQ.skeleton.bones.length + 1, WQ.BONETEXTURE = !XQ && void 0;
            const qQ = QQ.sE(),
              TQ = qQ.prePassRenderer;
            if (TQ && TQ.enabled) {
              const XQ = -1 === TQ.excludedSkinnedMesh.indexOf(QQ);
              WQ.BONES_VELOCITY_ENABLED = XQ
            }
            const zQ = !0 === WQ.MULTIVIEW,
              sQ = 2 * WQ.BonesPerMesh + (zQ ? 1 : 0);
            if (fQ.get(QQ.skeleton) !== sQ) {
              fQ.set(QQ.skeleton, sQ);
              const XQ = qQ.Uj().getCaps().maxVertexUniformVectors;
              if (XQ && !SQ.has(QQ.skeleton)) {
                const qQ = 4 * WQ.BonesPerMesh,
                  TQ = zQ ? kQ : LQ,
                  sQ = Math.max(XQ - TQ, 0);
                (qQ > sQ || zQ && 3 * qQ > XQ) && (SQ.add(QQ.skeleton), wQ.b.Warn(`Skeleton "${QQ.skeleton.name}": ${QQ.skeleton.bones.length} bones stored as vertex uniforms use ${qQ} of ~${sQ} usable uniform vectors${zQ?" (multiview)":""} on a device reporting ${XQ}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else WQ.NUM_BONE_INFLUENCERS = 0, WQ.BonesPerMesh = 0, void 0 !== WQ.BONETEXTURE && (WQ.BONETEXTURE = !1)
      }(QQ, WQ), TQ && function(QQ, WQ) {
        const XQ = QQ.morphTargetManager;
        XQ ? (WQ.MORPHTARGETS_UV = XQ.supportsUVs && WQ.UV1, WQ.MORPHTARGETS_UV2 = XQ.supportsUV2s && WQ.UV2, WQ.MORPHTARGETS_TANGENT = XQ.supportsTangents && WQ.TANGENT, WQ.MORPHTARGETS_NORMAL = XQ.supportsNormals && WQ.NORMAL, WQ.MORPHTARGETS_POSITION = XQ.supportsPositions, WQ.MORPHTARGETS_COLOR = XQ.supportsColors, WQ.MORPHTARGETTEXTURE_HASUVS = XQ.hasUVs, WQ.MORPHTARGETTEXTURE_HASUV2S = XQ.hasUV2s, WQ.MORPHTARGETTEXTURE_HASTANGENTS = XQ.hasTangents, WQ.MORPHTARGETTEXTURE_HASNORMALS = XQ.hasNormals, WQ.MORPHTARGETTEXTURE_HASPOSITIONS = XQ.hasPositions, WQ.MORPHTARGETTEXTURE_HASCOLORS = XQ.hasColors, WQ.NUM_MORPH_INFLUENCERS = XQ.numMaxInfluencers || XQ.numInfluencers, WQ.MORPHTARGETS = WQ.NUM_MORPH_INFLUENCERS > 0, WQ.MORPHTARGETS_TEXTURE = XQ.isUsingTextureForTargets) : (WQ.MORPHTARGETS_UV = !1, WQ.MORPHTARGETS_UV2 = !1, WQ.MORPHTARGETS_TANGENT = !1, WQ.MORPHTARGETS_NORMAL = !1, WQ.MORPHTARGETS_POSITION = !1, WQ.MORPHTARGETS_COLOR = !1, WQ.MORPHTARGETTEXTURE_HASUVS = !1, WQ.MORPHTARGETTEXTURE_HASUV2S = !1, WQ.MORPHTARGETTEXTURE_HASTANGENTS = !1, WQ.MORPHTARGETTEXTURE_HASNORMALS = !1, WQ.MORPHTARGETTEXTURE_HASPOSITIONS = !1, WQ.MORPHTARGETTEXTURE_HAS_COLORS = !1, WQ.MORPHTARGETS = !1, WQ.NUM_MORPH_INFLUENCERS = 0)
      }(QQ, WQ), sQ && function(QQ, WQ) {
        const XQ = QQ.bakedVertexAnimationManager;
        WQ.BAKED_VERTEX_ANIMATION_TEXTURE = !(!XQ || !XQ.isEnabled)
      }(QQ, WQ), !0
    }

    function oQ(QQ, WQ) {
      if (QQ.activeCamera) {
        const XQ = WQ.MULTIVIEW;
        WQ.MULTIVIEW = null !== QQ.activeCamera.outputRenderTarget && QQ.activeCamera.outputRenderTarget.getViewCount() > 1, WQ.MULTIVIEW != XQ && WQ.markAsUnprocessed()
      }
    }

    function eQ(QQ, WQ, XQ) {
      const wQ = WQ.ORDER_INDEPENDENT_TRANSPARENCY,
        qQ = WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      WQ.ORDER_INDEPENDENT_TRANSPARENCY = QQ.useOrderIndependentTransparency && XQ, WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !QQ.Uj().getCaps().textureFloatLinearFiltering, wQ === WQ.ORDER_INDEPENDENT_TRANSPARENCY && qQ === WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || WQ.markAsUnprocessed()
    }

    function nQ(QQ, WQ, XQ) {
      const wQ = WQ.PREPASS;
      if (!WQ._arePrePassDirty) return;
      const qQ = [{
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
      if (QQ.prePassRenderer && QQ.prePassRenderer.enabled && XQ) {
        WQ.PREPASS = !0, WQ.SCENE_MRT_COUNT = QQ.prePassRenderer.mrtCount, WQ.PREPASS_NORMAL_WORLDSPACE = QQ.prePassRenderer.generateNormalsInWorldSpace, WQ.PREPASS_COLOR = !0, WQ.PREPASS_COLOR_INDEX = 0;
        for (let XQ = 0; XQ < qQ.length; XQ++) {
          const wQ = QQ.prePassRenderer.getIndex(qQ[XQ].type); - 1 !== wQ ? (WQ[qQ[XQ].define] = !0, WQ[qQ[XQ].index] = wQ) : WQ[qQ[XQ].define] = !1
        }
      } else {
        WQ.PREPASS = !1;
        for (let QQ = 0; QQ < qQ.length; QQ++) WQ[qQ[QQ].define] = !1
      }
      WQ.PREPASS != wQ && (WQ.markAsUnprocessed(), WQ.markAsImageProcessingDirty())
    }

    function xQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      qQ && qQ.push("Light" + QQ), TQ || (WQ.push("vLightData" + QQ, "vLightDiffuse" + QQ, "vLightSpecular" + QQ, "vLightDirection" + QQ, "vLightWidth" + QQ, "vLightHeight" + QQ, "vLightFalloff" + QQ, "vLightGround" + QQ, "vSliceData" + QQ, "vSliceRanges" + QQ, "lightMatrix" + QQ, "shadowsInfo" + QQ, "depthValues" + QQ), XQ.push("shadowTexture" + QQ), XQ.push("depthTexture" + QQ), WQ.push("viewFrustumZ" + QQ, "cascadeBlendFactor" + QQ, "lightSizeUVCorrection" + QQ, "depthCorrection" + QQ, "penumbraDarkness" + QQ, "frustumLengths" + QQ), wQ && (XQ.push("projectionLightTexture" + QQ), WQ.push("textureProjectionMatrix" + QQ)), zQ && XQ.push("iesLightTexture" + QQ), FQ && XQ.push("rectAreaLightEmissionTexture" + QQ), sQ && (XQ.push("lightDataTexture" + QQ), PQ || XQ.push("tileMaskTexture" + QQ)))
    }

    function YQ(QQ, WQ, XQ) {
      const wQ = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      XQ && wQ.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), QQ.push(...wQ);
      WQ.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function NQ(QQ, WQ, XQ) {
      let wQ, qQ, TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        zQ = null;
      if (QQ.uniformsNames) {
        const sQ = QQ;
        wQ = sQ.uniformsNames, qQ = sQ.uniformBuffersNames, WQ = sQ.samplers, XQ = sQ.defines, TQ = sQ.maxSimultaneousLights || 0, zQ = sQ.shaderLanguage ?? null
      } else wQ = QQ, WQ || (WQ = []);
      for (let sQ = 0; sQ < TQ && XQ["LIGHT" + sQ]; sQ++) xQ(sQ, wQ, WQ, XQ["PROJECTEDLIGHTTEXTURE" + sQ], qQ, !1, XQ["IESLIGHTTEXTURE" + sQ], XQ["CLUSTLIGHT" + sQ], XQ["RECTAREALIGHTEMISSIONTEXTURE" + sQ], 1 === zQ);
      XQ.NUM_MORPH_INFLUENCERS && (wQ.push("morphTargetInfluences"), wQ.push("morphTargetCount")), XQ.BAKED_VERTEX_ANIMATION_TEXTURE && (wQ.push("bakedVertexAnimationSettings"), wQ.push("bakedVertexAnimationTextureSizeInverted"), wQ.push("bakedVertexAnimationTime"), WQ.push("bakedVertexAnimationTexture"))
    }

    function ZQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      QQ.addUniform("vReflectionInfos", 2), QQ.addUniform("reflectionMatrix", 16), WQ && QQ.addUniform("vReflectionMicrosurfaceInfos", 3), XQ && (QQ.addUniform("vReflectionPosition", 3), QQ.addUniform("vReflectionSize", 3)), wQ && (QQ.addUniform("vReflectionFilteringInfo", 2), QQ.addUniform("vReflectionDominantDirection", 3)), TQ && QQ.addUniform("vReflectionColor", 3), qQ && (QQ.addUniform("vSphericalL00", 3), QQ.addUniform("vSphericalL1_1", 3), QQ.addUniform("vSphericalL10", 3), QQ.addUniform("vSphericalL11", 3), QQ.addUniform("vSphericalL2_2", 3), QQ.addUniform("vSphericalL2_1", 3), QQ.addUniform("vSphericalL20", 3), QQ.addUniform("vSphericalL21", 3), QQ.addUniform("vSphericalL22", 3), QQ.addUniform("vSphericalX", 3), QQ.addUniform("vSphericalY", 3), QQ.addUniform("vSphericalZ", 3), QQ.addUniform("vSphericalXX_ZZ", 3), QQ.addUniform("vSphericalYY_ZZ", 3), QQ.addUniform("vSphericalZZ", 3), QQ.addUniform("vSphericalXY", 3), QQ.addUniform("vSphericalYZ", 3), QQ.addUniform("vSphericalZX", 3))
    }
  },
  40596: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(37370),
      qQ = XQ(40551);
    class TQ extends qQ.b {
      constructor(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(QQ, WQ, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new wQ.e, this._storeEffectOnSubMeshes = XQ
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(QQ, WQ) {
        return !!QQ && (!this._storeEffectOnSubMeshes || (!QQ.ZD || 0 === QQ.ZD.length || this.isReadyForSubMesh(QQ, QQ.ZD[0], WQ)))
      }
      _isReadyForSubMesh(QQ) {
        const WQ = QQ.materialDefines;
        return !(this.checkReadyOnEveryCall || !QQ.effect || !WQ || WQ._renderId !== this.sE().getRenderId())
      }
      bindOnlyWorldMatrix(QQ) {
        this._activeEffect.setMatrix("world", QQ)
      }
      bindOnlyNormalMatrix(QQ) {
        this._activeEffect.setMatrix("normalMatrix", QQ)
      }
      bind(QQ, WQ) {
        WQ && this.bindForSubMesh(QQ, WQ, WQ.ZD[0])
      }
      _afterBind(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(QQ, WQ, XQ), this.sE()._cachedEffect = WQ, XQ ? XQ._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return XQ._drawWrapper._forceRebindOnNextCall || QQ.isCachedMaterialInvalid(this, WQ, wQ)
      }
      dispose(QQ, WQ, XQ) {
        this._activeEffect = void 0, super.dispose(QQ, WQ, XQ)
      }
    }
  },
  40621: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      d: () => qQ
    });
    const wQ = new WeakMap;

    function qQ(QQ) {
      const WQ = QQ.getVertexBuffers();
      if (!WQ) return null;
      let XQ = wQ.get(QQ);
      if (XQ) {
        let QQ = !1;
        for (const wQ in WQ)
          if (!XQ.has(wQ)) {
            QQ = !0;
            break
          } if (!QQ) return XQ
      } else XQ = new Map, wQ.set(QQ, XQ);
      for (const wQ in WQ) {
        const QQ = WQ[wQ];
        if (QQ) {
          const WQ = QQ.byteOffset,
            qQ = QQ.byteStride,
            TQ = QQ.type,
            zQ = QQ.normalized;
          XQ.set(wQ, {
            offset: WQ,
            stride: qQ,
            type: TQ,
            normalized: zQ
          })
        }
      }
      return XQ
    }

    function TQ(QQ, WQ) {
      WQ.forEach(((WQ, XQ) => {
        const wQ = `vp_${XQ}_info`;
        QQ.setFloat4(wQ, WQ.offset, WQ.stride, WQ.type, WQ.normalized ? 1 : 0)
      }))
    }
  },
  40573: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      c: () => FQ
    });
    var wQ = XQ(40260),
      qQ = XQ(37370),
      TQ = XQ(40268);
    let zQ = (() => {
      var QQ;
      let WQ, XQ, qQ = [];
      return QQ = class {
        static extractMinAndMaxIndexed(QQ, WQ, XQ, wQ, qQ, TQ) {
          for (let zQ = XQ; zQ < XQ + wQ; zQ++) {
            const XQ = 3 * WQ[zQ],
              wQ = QQ[XQ],
              sQ = QQ[XQ + 1],
              FQ = QQ[XQ + 2];
            qQ.minimizeInPlaceFromFloats(wQ, sQ, FQ), TQ.maximizeInPlaceFromFloats(wQ, sQ, FQ)
          }
        }
        static extractMinAndMax(QQ, WQ, XQ, wQ, qQ, TQ) {
          for (let zQ = WQ, sQ = WQ * wQ; zQ < WQ + XQ; zQ++, sQ += wQ) {
            const WQ = QQ[sQ],
              XQ = QQ[sQ + 1],
              wQ = QQ[sQ + 2];
            qQ.minimizeInPlaceFromFloats(WQ, XQ, wQ), TQ.maximizeInPlaceFromFloats(WQ, XQ, wQ)
          }
        }
      }, (() => {
        const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [TQ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], XQ = [TQ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, wQ.k)(QQ, null, WQ, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: QQ => "extractMinAndMaxIndexed" in QQ,
            get: QQ => QQ.extractMinAndMaxIndexed
          },
          metadata: zQ
        }, null, qQ), (0, wQ.k)(QQ, null, XQ, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: QQ => "extractMinAndMax" in QQ,
            get: QQ => QQ.extractMinAndMax
          },
          metadata: zQ
        }, null, qQ), zQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zQ
        }), (0, wQ.n)(QQ, qQ)
      })(), QQ
    })();

    function sQ(QQ, WQ, XQ, wQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const sQ = new qQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        FQ = new qQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return zQ.extractMinAndMaxIndexed(QQ, WQ, XQ, wQ, sQ, FQ), TQ && (sQ.x -= sQ.x * TQ.x + TQ.y, sQ.y -= sQ.y * TQ.x + TQ.y, sQ.z -= sQ.z * TQ.x + TQ.y, FQ.x += FQ.x * TQ.x + TQ.y, FQ.y += FQ.y * TQ.x + TQ.y, FQ.z += FQ.z * TQ.x + TQ.y), {
        minimum: sQ,
        maximum: FQ
      }
    }

    function FQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        TQ = arguments.length > 4 ? arguments[4] : void 0;
      const sQ = new qQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        FQ = new qQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return TQ || (TQ = 3), zQ.extractMinAndMax(QQ, WQ, XQ, TQ, sQ, FQ), wQ && (sQ.x -= sQ.x * wQ.x + wQ.y, sQ.y -= sQ.y * wQ.x + wQ.y, sQ.z -= sQ.z * wQ.x + wQ.y, FQ.x += FQ.x * wQ.x + wQ.y, FQ.y += FQ.y * wQ.x + wQ.y, FQ.z += FQ.z * wQ.x + wQ.y), {
        minimum: sQ,
        maximum: FQ
      }
    }
  },
  40555: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ, qQ = XQ(40404),
      TQ = XQ(40557),
      zQ = XQ(40561),
      sQ = XQ(40573),
      FQ = XQ(40578),
      PQ = XQ(40153);
    class gQ {
      get materialDefines() {
        const QQ = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof QQ ? null : QQ
      }
      set materialDefines(QQ) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = QQ
      }
      _getDrawWrapper(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        QQ = QQ ?? this._engine.currentRenderPassId;
        let XQ = this._drawWrappers[QQ];
        return !XQ && WQ && (this._drawWrappers[QQ] = XQ = new FQ.d(this._mesh.sE().Uj())), XQ
      }
      _removeDrawWrapper(QQ) {
        let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[QQ]?.dispose(WQ), this._drawWrappers[QQ] = void 0
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
      _setMainDrawWrapperOverride(QQ) {
        this._mainDrawWrapperOverride = QQ
      }
      setEffect(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qQ = this._drawWrapper;
        qQ.setEffect(QQ, WQ, wQ), void 0 !== XQ && (qQ.materialContext = XQ), QQ || (qQ.defines = null, qQ.materialContext = void 0)
      }
      resetDrawCache(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== QQ) return void this._removeDrawWrapper(QQ, !0, WQ);
          for (const QQ of this._drawWrappers) QQ?.dispose(WQ)
        }
        this._drawWrappers = []
      }
      static AddToMesh(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        return new gQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        let sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          FQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = QQ, this.verticesStart = WQ, this.verticesCount = XQ, this.indexStart = wQ, this.indexCount = qQ, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = TQ, this._renderingMesh = zQ || TQ, FQ && TQ.ZD.push(this), this._engine = this._mesh.sE().Uj(), this.resetDrawCache(), this._trianglePlanes = [], this._id = TQ.ZD.length - 1, sQ && (this.refreshBoundingInfo(), TQ.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      uC() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.uC() : this._boundingInfo
      }
      setBoundingInfo(QQ) {
        return this._boundingInfo = QQ, this
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
        const QQ = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return QQ || this._renderingMesh
      }
      lj() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const WQ = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!WQ) return QQ && this._mesh.sE()._hasDefaultMaterial ? this._mesh.sE().defaultMaterial : null;
        if (this._isMultiMaterial(WQ)) {
          const QQ = WQ.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== QQ && (this._currentMaterial = QQ, this.resetDrawCache()), QQ
        }
        return WQ
      }
      _isMultiMaterial(QQ) {
        return void 0 !== QQ.getSubMaterial
      }
      refreshBoundingInfo() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (QQ || (QQ = this._renderingMesh.getVerticesData(qQ.l.PositionKind)), !QQ) return this._boundingInfo = this._mesh.uC(), this;
        const WQ = this._renderingMesh.lwQ();
        let XQ;
        if (0 === this.indexStart && this.indexCount === WQ.length) {
          const QQ = this._renderingMesh.uC();
          XQ = {
            minimum: QQ.minimum.clone(),
            maximum: QQ.maximum.clone()
          }
        } else XQ = (0, sQ.b)(QQ, WQ, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(XQ.minimum, XQ.maximum) : this._boundingInfo = new zQ.e(XQ.minimum, XQ.maximum), this
      }
      _checkCollision(QQ) {
        return this.uC()._checkCollision(QQ)
      }
      updateBoundingInfo(QQ) {
        let WQ = this.uC();
        return WQ || (this.refreshBoundingInfo(), WQ = this.uC()), WQ && WQ.update(QQ), this
      }
      isInFrustum(QQ) {
        const WQ = this.uC();
        return !!WQ && WQ.isInFrustum(QQ, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(QQ) {
        const WQ = this.uC();
        return !!WQ && WQ.isCompletelyInFrustum(QQ)
      }
      render(QQ) {
        return this._renderingMesh.render(this, QQ, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(QQ, WQ) {
        if (!this._linesIndexBuffer) {
          const XQ = 6 * Math.floor(this.indexCount / 3),
            wQ = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(XQ) : new Uint16Array(XQ);
          let qQ = 0;
          if (0 === QQ.length)
            for (let QQ = this.indexStart; QQ < this.indexStart + this.indexCount; QQ += 3) wQ[qQ++] = QQ, wQ[qQ++] = QQ + 1, wQ[qQ++] = QQ + 1, wQ[qQ++] = QQ + 2, wQ[qQ++] = QQ + 2, wQ[qQ++] = QQ;
          else
            for (let WQ = this.indexStart; WQ < this.indexStart + this.indexCount; WQ += 3) wQ[qQ++] = QQ[WQ], wQ[qQ++] = QQ[WQ + 1], wQ[qQ++] = QQ[WQ + 1], wQ[qQ++] = QQ[WQ + 2], wQ[qQ++] = QQ[WQ + 2], wQ[qQ++] = QQ[WQ];
          this._linesIndexBuffer = WQ.createIndexBuffer(wQ), this._linesIndexCount = wQ.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(QQ) {
        const WQ = this.uC();
        return !!WQ && QQ.intersectsBox(WQ.boundingBox)
      }
      intersects(QQ, WQ, XQ, wQ, qQ) {
        const TQ = this.lj();
        if (!TQ) return null;
        let zQ = 3,
          sQ = !1;
        switch (TQ.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            zQ = 1, sQ = !0
        }
        return 4 === TQ.fillMode ? XQ.length ? this._intersectLines(QQ, WQ, XQ, this._mesh.intersectionThreshold, wQ) : this._intersectUnIndexedLines(QQ, WQ, XQ, this._mesh.intersectionThreshold, wQ) : !XQ.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(QQ, WQ, XQ, wQ, qQ) : this._intersectTriangles(QQ, WQ, XQ, zQ, sQ, wQ, qQ)
      }
      _intersectLines(QQ, WQ, XQ, wQ, qQ) {
        let zQ = null;
        for (let sQ = this.indexStart; sQ < this.indexStart + this.indexCount; sQ += 2) {
          const FQ = WQ[XQ[sQ]],
            PQ = WQ[XQ[sQ + 1]],
            gQ = QQ.intersectionSegment(FQ, PQ, wQ);
          if (!(gQ < 0) && ((qQ || !zQ || gQ < zQ.distance) && (zQ = new TQ.c(null, null, gQ), zQ.faceId = sQ / 2, qQ))) break
        }
        return zQ
      }
      _intersectUnIndexedLines(QQ, WQ, XQ, wQ, qQ) {
        let zQ = null;
        for (let sQ = this.verticesStart; sQ < this.verticesStart + this.verticesCount; sQ += 2) {
          const XQ = WQ[sQ],
            FQ = WQ[sQ + 1],
            PQ = QQ.intersectionSegment(XQ, FQ, wQ);
          if (!(PQ < 0) && ((qQ || !zQ || PQ < zQ.distance) && (zQ = new TQ.c(null, null, PQ), zQ.faceId = sQ / 2, qQ))) break
        }
        return zQ
      }
      _intersectTriangles(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        let sQ = null,
          FQ = -1;
        for (let PQ = this.indexStart; PQ < this.indexStart + this.indexCount - (3 - wQ); PQ += wQ) {
          FQ++;
          const wQ = XQ[PQ],
            gQ = XQ[PQ + 1],
            JQ = XQ[PQ + 2];
          if (qQ && 4294967295 === JQ) {
            PQ += 2;
            continue
          }
          const rQ = WQ[wQ],
            IQ = WQ[gQ],
            jQ = WQ[JQ];
          if (!rQ || !IQ || !jQ) continue;
          if (zQ && !zQ(rQ, IQ, jQ, QQ, wQ, gQ, JQ)) continue;
          const BQ = QQ.intersectsTriangle(rQ, IQ, jQ);
          if (BQ) {
            if (BQ.distance < 0) continue;
            if ((TQ || !sQ || BQ.distance < sQ.distance) && (sQ = BQ, sQ.faceId = FQ, TQ)) break
          }
        }
        return sQ
      }
      _intersectUnIndexedTriangles(QQ, WQ, XQ, wQ, qQ) {
        let TQ = null;
        for (let zQ = this.verticesStart; zQ < this.verticesStart + this.verticesCount; zQ += 3) {
          const XQ = WQ[zQ],
            sQ = WQ[zQ + 1],
            FQ = WQ[zQ + 2];
          if (qQ && !qQ(XQ, sQ, FQ, QQ, -1, -1, -1)) continue;
          const PQ = QQ.intersectsTriangle(XQ, sQ, FQ);
          if (PQ) {
            if (PQ.distance < 0) continue;
            if ((wQ || !TQ || PQ.distance < TQ.distance) && (TQ = PQ, TQ.faceId = zQ / 3, wQ)) break
          }
        }
        return TQ
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(QQ, WQ) {
        const XQ = new gQ(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, QQ, WQ, !1);
        if (!this.IsGlobal) {
          const QQ = this.uC();
          if (!QQ) return XQ;
          XQ._boundingInfo = new zQ.e(QQ.minimum, QQ.maximum)
        }
        return XQ
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.sE().Uj()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const WQ = this._mesh.ZD.indexOf(this);
        this._mesh.ZD.splice(WQ, 1), this.resetDrawCache(void 0, QQ)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(QQ, WQ, XQ, wQ, qQ) {
        let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = Number.MAX_VALUE,
          sQ = -Number.MAX_VALUE;
        const FQ = (qQ || wQ).lwQ();
        for (let PQ = WQ; PQ < WQ + XQ; PQ++) {
          const QQ = FQ[PQ];
          QQ < zQ && (zQ = QQ), QQ > sQ && (sQ = QQ)
        }
        return new gQ(QQ, zQ, sQ - zQ + 1, WQ, XQ, wQ, qQ, TQ)
      }
    }(wQ = gQ.prototype).projectToRef ?? (wQ.projectToRef = (0, PQ.h)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);