export const id = 254;
export const ids = [254];
export const modules = {
  39729: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ) {
        this.bu = QQ, this.bv = FQ, this.distance = wQ, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
      }
    }
  },
  39736: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(36709),
      qQ = wQ(36696),
      oQ = wQ(36705);
    class DQ {
      constructor(QQ, FQ, wQ) {
        this.vectors = (0, LQ.b)(8, qQ.p.Zero), this.center = qQ.p.Zero(), this.centerWorld = qQ.p.Zero(), this.extendSize = qQ.p.Zero(), this.extendSizeWorld = qQ.p.Zero(), this.directions = (0, LQ.b)(3, qQ.p.Zero), this.vectorsWorld = (0, LQ.b)(8, qQ.p.Zero), this.minimumWorld = qQ.p.Zero(), this.maximumWorld = qQ.p.Zero(), this.minimum = qQ.p.Zero(), this.maximum = qQ.p.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(QQ, FQ, wQ)
      }
      reConstruct(QQ, FQ, wQ) {
        const LQ = QQ.x,
          oQ = QQ.y,
          DQ = QQ.z,
          kQ = FQ.x,
          vQ = FQ.y,
          mQ = FQ.z,
          uQ = this.vectors;
        this.minimum.vQQ(LQ, oQ, DQ), this.maximum.vQQ(kQ, vQ, mQ), uQ[0].vQQ(LQ, oQ, DQ), uQ[1].vQQ(kQ, vQ, mQ), uQ[2].vQQ(kQ, oQ, DQ), uQ[3].vQQ(LQ, vQ, DQ), uQ[4].vQQ(LQ, oQ, mQ), uQ[5].vQQ(kQ, vQ, DQ), uQ[6].vQQ(LQ, vQ, mQ), uQ[7].vQQ(kQ, oQ, mQ), FQ.addToRef(QQ, this.center).scaleInPlace(.5), FQ.subtractToRef(QQ, this.extendSize).scaleInPlace(.5), this._worldMatrix = wQ || qQ.c.IdentityReadOnly, this._update(this._worldMatrix)
      }
      scale(QQ) {
        const FQ = DQ._TmpVector3,
          wQ = this.maximum.subtractToRef(this.minimum, FQ[0]),
          LQ = wQ.length();
        wQ.normalizeFromLength(LQ);
        const qQ = LQ * QQ,
          oQ = wQ.scaleInPlace(.5 * qQ),
          kQ = this.center.subtractToRef(oQ, FQ[1]),
          vQ = this.center.addToRef(oQ, FQ[2]);
        return this.reConstruct(kQ, vQ, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(QQ) {
        const FQ = this.minimumWorld,
          wQ = this.maximumWorld,
          LQ = this.directions,
          oQ = this.vectorsWorld,
          DQ = this.vectors;
        if (QQ.isIdentity()) {
          FQ.Qs(this.minimum), wQ.Qs(this.maximum);
          for (let QQ = 0; QQ < 8; ++QQ) oQ[QQ].Qs(DQ[QQ]);
          this.extendSizeWorld.Qs(this.extendSize), this.centerWorld.Qs(this.center)
        } else {
          FQ.K3(Number.MAX_VALUE), wQ.K3(-Number.MAX_VALUE);
          for (let LQ = 0; LQ < 8; ++LQ) {
            const kQ = oQ[LQ];
            qQ.p.TransformCoordinatesToRef(DQ[LQ], QQ, kQ), FQ.minimizeInPlace(kQ), wQ.maximizeInPlace(kQ)
          }
          wQ.subtractToRef(FQ, this.extendSizeWorld).scaleInPlace(.5), wQ.addToRef(FQ, this.centerWorld).scaleInPlace(.5)
        }
        qQ.p.FromArrayToRef(QQ.m, 0, LQ[0]), qQ.p.FromArrayToRef(QQ.m, 4, LQ[1]), qQ.p.FromArrayToRef(QQ.m, 8, LQ[2]), this._worldMatrix = QQ
      }
      isInFrustum(QQ) {
        return DQ.IsInFrustum(this.vectorsWorld, QQ)
      }
      isCompletelyInFrustum(QQ) {
        return DQ.IsCompletelyInFrustum(this.vectorsWorld, QQ)
      }
      intersectsPoint(QQ) {
        const FQ = this.minimumWorld,
          wQ = this.maximumWorld,
          LQ = FQ.x,
          qQ = FQ.y,
          DQ = FQ.z,
          kQ = wQ.x,
          vQ = wQ.y,
          mQ = wQ.z,
          uQ = QQ.x,
          HQ = QQ.y,
          bQ = QQ.z,
          YQ = -oQ.b;
        return !(kQ - uQ < YQ || YQ > uQ - LQ) && (!(vQ - HQ < YQ || YQ > HQ - qQ) && !(mQ - bQ < YQ || YQ > bQ - DQ))
      }
      intersectsSphere(QQ) {
        return DQ.IntersectsSphere(this.minimumWorld, this.maximumWorld, QQ.centerWorld, QQ.radiusWorld)
      }
      intersectsMinMax(QQ, FQ) {
        const wQ = this.minimumWorld,
          LQ = this.maximumWorld,
          qQ = wQ.x,
          oQ = wQ.y,
          DQ = wQ.z,
          kQ = LQ.x,
          vQ = LQ.y,
          mQ = LQ.z,
          uQ = QQ.x,
          HQ = QQ.y,
          bQ = QQ.z,
          YQ = FQ.x,
          xQ = FQ.y,
          AQ = FQ.z;
        return !(kQ < uQ || qQ > YQ) && (!(vQ < HQ || oQ > xQ) && !(mQ < bQ || DQ > AQ))
      }
      dispose() {
        this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
      }
      static Intersects(QQ, FQ) {
        return QQ.intersectsMinMax(FQ.minimumWorld, FQ.maximumWorld)
      }
      static IntersectsSphere(QQ, FQ, wQ, LQ) {
        const oQ = DQ._TmpVector3[0];
        qQ.p.ClampToRef(wQ, QQ, FQ, oQ);
        return qQ.p.DistanceSquared(wQ, oQ) <= LQ * LQ
      }
      static IsCompletelyInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; ++wQ) {
          const LQ = FQ[wQ];
          for (let FQ = 0; FQ < 8; ++FQ)
            if (LQ.dotCoordinate(QQ[FQ]) < 0) return !1
        }
        return !0
      }
      static IsInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; ++wQ) {
          let LQ = !0;
          const qQ = FQ[wQ];
          for (let FQ = 0; FQ < 8; ++FQ)
            if (qQ.dotCoordinate(QQ[FQ]) >= 0) {
              LQ = !1;
              break
            } if (LQ) return !1
        }
        return !0
      }
    }
    DQ._TmpVector3 = (0, LQ.b)(3, qQ.p.Zero)
  },
  39731: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => HQ
    });
    var LQ = wQ(36709),
      qQ = wQ(36696),
      oQ = wQ(39736);
    class DQ {
      constructor(QQ, FQ, wQ) {
        this.center = qQ.p.Zero(), this.centerWorld = qQ.p.Zero(), this.minimum = qQ.p.Zero(), this.maximum = qQ.p.Zero(), this.reConstruct(QQ, FQ, wQ)
      }
      reConstruct(QQ, FQ, wQ) {
        this.minimum.Qs(QQ), this.maximum.Qs(FQ);
        const LQ = qQ.p.Distance(QQ, FQ);
        FQ.addToRef(QQ, this.center).scaleInPlace(.5), this.radius = .5 * LQ, this._update(wQ || qQ.c.IdentityReadOnly)
      }
      scale(QQ) {
        const FQ = DQ._TmpVector3,
          wQ = this.maximum.subtractToRef(this.minimum, FQ[0]),
          LQ = wQ.length();
        wQ.normalizeFromLength(LQ);
        const qQ = LQ * QQ,
          oQ = wQ.scaleInPlace(.5 * qQ),
          kQ = this.center.subtractToRef(oQ, FQ[1]),
          vQ = this.center.addToRef(oQ, FQ[2]);
        return this.reConstruct(kQ, vQ, this._worldMatrix), this
      }
      getWorldMatrix() {
        return this._worldMatrix
      }
      _update(QQ) {
        if (QQ.isIdentity()) this.centerWorld.Qs(this.center), this.radiusWorld = this.radius;
        else {
          qQ.p.TransformCoordinatesToRef(this.center, QQ, this.centerWorld);
          const FQ = DQ._TmpVector3[0];
          qQ.p.TransformNormalFromFloatsToRef(1, 1, 1, QQ, FQ), this.radiusWorld = Math.max(Math.abs(FQ.x), Math.abs(FQ.y), Math.abs(FQ.z)) * this.radius
        }
      }
      isInFrustum(QQ) {
        const FQ = this.centerWorld,
          wQ = this.radiusWorld;
        for (let LQ = 0; LQ < 6; LQ++)
          if (QQ[LQ].dotCoordinate(FQ) <= -wQ) return !1;
        return !0
      }
      isCenterInFrustum(QQ) {
        const FQ = this.centerWorld;
        for (let wQ = 0; wQ < 6; wQ++)
          if (QQ[wQ].dotCoordinate(FQ) < 0) return !1;
        return !0
      }
      intersectsPoint(QQ) {
        const FQ = qQ.p.DistanceSquared(this.centerWorld, QQ);
        return !(this.radiusWorld * this.radiusWorld < FQ)
      }
      static Intersects(QQ, FQ) {
        const wQ = qQ.p.DistanceSquared(QQ.centerWorld, FQ.centerWorld),
          LQ = QQ.radiusWorld + FQ.radiusWorld;
        return !(LQ * LQ < wQ)
      }
      static CreateFromCenterAndRadius(QQ, FQ, wQ) {
        this._TmpVector3[0].Qs(QQ), this._TmpVector3[1].vQQ(0, 0, FQ), this._TmpVector3[2].Qs(QQ), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].gLQ(this._TmpVector3[1]);
        const LQ = new DQ(this._TmpVector3[0], this._TmpVector3[2]);
        return LQ._worldMatrix = wQ || qQ.c.Identity(), LQ
      }
    }
    DQ._TmpVector3 = (0, LQ.b)(3, qQ.p.Zero);
    const kQ = {
        min: 0,
        max: 0
      },
      vQ = {
        min: 0,
        max: 0
      },
      mQ = (QQ, FQ, wQ) => {
        const LQ = qQ.p.Dot(FQ.centerWorld, QQ),
          oQ = Math.abs(qQ.p.Dot(FQ.directions[0], QQ)) * FQ.extendSize.x + Math.abs(qQ.p.Dot(FQ.directions[1], QQ)) * FQ.extendSize.y + Math.abs(qQ.p.Dot(FQ.directions[2], QQ)) * FQ.extendSize.z;
        wQ.min = LQ - oQ, wQ.max = LQ + oQ
      },
      uQ = (QQ, FQ, wQ) => (mQ(QQ, FQ, kQ), mQ(QQ, wQ, vQ), !(kQ.min > vQ.max || vQ.min > kQ.max));
    class HQ {
      constructor(QQ, FQ, wQ) {
        this._isLocked = !1, this.boundingBox = new oQ.e(QQ, FQ, wQ), this.BLQ = new DQ(QQ, FQ, wQ)
      }
      reConstruct(QQ, FQ, wQ) {
        this.boundingBox.reConstruct(QQ, FQ, wQ), this.BLQ.reConstruct(QQ, FQ, wQ)
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
        this._isLocked || (this.boundingBox._update(QQ), this.BLQ._update(QQ))
      }
      centerOn(QQ, FQ) {
        const wQ = HQ._TmpVector3[0].Qs(QQ).gLQ(FQ),
          LQ = HQ._TmpVector3[1].Qs(QQ).addInPlace(FQ);
        return this.boundingBox.reConstruct(wQ, LQ, this.boundingBox.getWorldMatrix()), this.BLQ.reConstruct(wQ, LQ, this.boundingBox.getWorldMatrix()), this
      }
      encapsulate(QQ) {
        const FQ = qQ.p.Minimize(this.minimum, QQ),
          wQ = qQ.p.Maximize(this.maximum, QQ);
        return this.reConstruct(FQ, wQ, this.boundingBox.getWorldMatrix()), this
      }
      encapsulateBoundingInfo(QQ) {
        const FQ = qQ.k.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(FQ);
        const wQ = qQ.k.Ox[0];
        return qQ.p.TransformCoordinatesToRef(QQ.boundingBox.minimumWorld, FQ, wQ), this.encapsulate(wQ), qQ.p.TransformCoordinatesToRef(QQ.boundingBox.maximumWorld, FQ, wQ), this.encapsulate(wQ), this
      }
      scale(QQ) {
        return this.boundingBox.scale(QQ), this.BLQ.scale(QQ), this
      }
      isInFrustum(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === FQ || 3 === FQ) && this.BLQ.isCenterInFrustum(QQ)) return !0;
        if (!this.BLQ.isInFrustum(QQ)) return !1;
        return !(1 !== FQ && 3 !== FQ) || this.boundingBox.isInFrustum(QQ)
      }
      get diagonalLength() {
        const QQ = this.boundingBox;
        return QQ.maximumWorld.subtractToRef(QQ.minimumWorld, HQ._TmpVector3[0]).length()
      }
      isCompletelyInFrustum(QQ) {
        return this.boundingBox.isCompletelyInFrustum(QQ)
      }
      _checkCollision(QQ) {
        return QQ._canDoCollision(this.BLQ.centerWorld, this.BLQ.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
      }
      intersectsPoint(QQ) {
        return !!this.BLQ.centerWorld && (!!this.BLQ.intersectsPoint(QQ) && !!this.boundingBox.intersectsPoint(QQ))
      }
      intersects(QQ, FQ) {
        if (!DQ.Intersects(this.BLQ, QQ.BLQ)) return !1;
        if (!oQ.e.Intersects(this.boundingBox, QQ.boundingBox)) return !1;
        if (!FQ) return !0;
        const wQ = this.boundingBox,
          LQ = QQ.boundingBox;
        return !!uQ(wQ.directions[0], wQ, LQ) && (!!uQ(wQ.directions[1], wQ, LQ) && (!!uQ(wQ.directions[2], wQ, LQ) && (!!uQ(LQ.directions[0], wQ, LQ) && (!!uQ(LQ.directions[1], wQ, LQ) && (!!uQ(LQ.directions[2], wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[0], LQ.directions[0]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[0], LQ.directions[1]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[0], LQ.directions[2]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[1], LQ.directions[0]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[1], LQ.directions[1]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[1], LQ.directions[2]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[2], LQ.directions[0]), wQ, LQ) && (!!uQ(qQ.p.Cross(wQ.directions[2], LQ.directions[1]), wQ, LQ) && !!uQ(qQ.p.Cross(wQ.directions[2], LQ.directions[2]), wQ, LQ))))))))))))))
      }
    }
    HQ._TmpVector3 = (0, LQ.b)(2, qQ.p.Zero)
  },
  39754: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => vQ,
      l: () => kQ,
      o: () => DQ
    });
    var LQ = wQ(39571),
      qQ = wQ(36696);

    function oQ(QQ) {
      -1 === QQ.indexOf("vClipPlane") && QQ.push("vClipPlane"), -1 === QQ.indexOf("vClipPlane2") && QQ.push("vClipPlane2"), -1 === QQ.indexOf("vClipPlane3") && QQ.push("vClipPlane3"), -1 === QQ.indexOf("vClipPlane4") && QQ.push("vClipPlane4"), -1 === QQ.indexOf("vClipPlane5") && QQ.push("vClipPlane5"), -1 === QQ.indexOf("vClipPlane6") && QQ.push("vClipPlane6")
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = !!(QQ.clipPlane ?? FQ.clipPlane),
        qQ = !!(QQ.clipPlane2 ?? FQ.clipPlane2),
        oQ = !!(QQ.clipPlane3 ?? FQ.clipPlane3),
        DQ = !!(QQ.clipPlane4 ?? FQ.clipPlane4),
        kQ = !!(QQ.clipPlane5 ?? FQ.clipPlane5),
        vQ = !!(QQ.clipPlane6 ?? FQ.clipPlane6);
      LQ && wQ.push("#define CLIPPLANE"), qQ && wQ.push("#define CLIPPLANE2"), oQ && wQ.push("#define CLIPPLANE3"), DQ && wQ.push("#define CLIPPLANE4"), kQ && wQ.push("#define CLIPPLANE5"), vQ && wQ.push("#define CLIPPLANE6")
    }

    function kQ(QQ, FQ, wQ) {
      let LQ = !1;
      const qQ = !!(QQ.clipPlane ?? FQ.clipPlane),
        oQ = !!(QQ.clipPlane2 ?? FQ.clipPlane2),
        DQ = !!(QQ.clipPlane3 ?? FQ.clipPlane3),
        kQ = !!(QQ.clipPlane4 ?? FQ.clipPlane4),
        vQ = !!(QQ.clipPlane5 ?? FQ.clipPlane5),
        mQ = !!(QQ.clipPlane6 ?? FQ.clipPlane6);
      return wQ.CLIPPLANE !== qQ && (wQ.CLIPPLANE = qQ, LQ = !0), wQ.CLIPPLANE2 !== oQ && (wQ.CLIPPLANE2 = oQ, LQ = !0), wQ.CLIPPLANE3 !== DQ && (wQ.CLIPPLANE3 = DQ, LQ = !0), wQ.CLIPPLANE4 !== kQ && (wQ.CLIPPLANE4 = kQ, LQ = !0), wQ.CLIPPLANE5 !== vQ && (wQ.CLIPPLANE5 = vQ, LQ = !0), wQ.CLIPPLANE6 !== mQ && (wQ.CLIPPLANE6 = mQ, LQ = !0), LQ
    }

    function vQ(QQ, FQ, wQ) {
      let LQ = FQ.clipPlane ?? wQ.clipPlane;
      mQ(QQ, "vClipPlane", LQ), LQ = FQ.clipPlane2 ?? wQ.clipPlane2, mQ(QQ, "vClipPlane2", LQ), LQ = FQ.clipPlane3 ?? wQ.clipPlane3, mQ(QQ, "vClipPlane3", LQ), LQ = FQ.clipPlane4 ?? wQ.clipPlane4, mQ(QQ, "vClipPlane4", LQ), LQ = FQ.clipPlane5 ?? wQ.clipPlane5, mQ(QQ, "vClipPlane5", LQ), LQ = FQ.clipPlane6 ?? wQ.clipPlane6, mQ(QQ, "vClipPlane6", LQ)
    }

    function mQ(QQ, FQ, wQ) {
      if (wQ) {
        const oQ = LQ.c.iN()?.floatingOriginOffset || qQ.p.ZeroReadOnly;
        QQ.setFloat4(FQ, wQ.normal.x, wQ.normal.y, wQ.normal.z, wQ.d + qQ.p.Dot(wQ.normal, oQ))
      }
    }
  },
  39770: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    class LQ {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
      }
      unBindMesh() {
        this._mesh = null
      }
      addFallback(QQ, FQ) {
        this._defines[QQ] || (QQ < this._currentRank && (this._currentRank = QQ), QQ > this._maxRank && (this._maxRank = QQ), this._defines[QQ] = new Array), this._defines[QQ].push(FQ)
      }
      addCPUSkinningFallback(QQ, FQ) {
        this._mesh = FQ, QQ < this._currentRank && (this._currentRank = QQ), QQ > this._maxRank && (this._maxRank = QQ)
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank
      }
      reduce(QQ, FQ) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, QQ = QQ.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), FQ._bonesComputationForcedToCPU = !0;
          const wQ = this._mesh.iN();
          for (let QQ = 0; QQ < wQ.meshes.length; QQ++) {
            const LQ = wQ.meshes[QQ];
            if (LQ.material) {
              if (LQ.computeBonesUsingShaders && 0 !== LQ.numBoneInfluencers)
                if (LQ.material.getEffect() === FQ) LQ.computeBonesUsingShaders = !1;
                else if (LQ.lC)
                for (const QQ of LQ.lC) {
                  if (QQ.effect === FQ) {
                    LQ.computeBonesUsingShaders = !1;
                    break
                  }
                }
            } else !this._mesh.material && LQ.computeBonesUsingShaders && LQ.numBoneInfluencers > 0 && (LQ.computeBonesUsingShaders = !1)
          }
        } else {
          const FQ = this._defines[this._currentRank];
          if (FQ)
            for (let wQ = 0; wQ < FQ.length; wQ++) QQ = QQ.replace("#define " + FQ[wQ], "");
          this._currentRank++
        }
        return QQ
      }
    }
  },
  39717: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => MQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39505),
      DQ = wQ(36722),
      kQ = wQ(36720),
      vQ = wQ(39725),
      mQ = wQ(39550),
      uQ = wQ(38203),
      HQ = wQ(37324),
      bQ = wQ(39748),
      YQ = wQ(39426);
    let xQ = (() => {
      var QQ;
      let FQ, wQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, xQ, AQ, tQ = [];
      return QQ = class {
        constructor() {
          this._func = (0, LQ.l)(this, tQ), this.reset()
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
          YQ.c.Clone((() => QQ), this)
        }
        serialize() {
          return YQ.c.Serialize(this)
        }
        parse(QQ, FQ, wQ) {
          YQ.c.Parse((() => this), QQ, FQ, wQ)
        }
      }, (() => {
        const YQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, FQ, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: QQ => "func" in QQ,
            get: QQ => QQ.func
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, wQ, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backFunc" in QQ,
            get: QQ => QQ.backFunc
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, oQ, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: QQ => "funcRef" in QQ,
            get: QQ => QQ.funcRef
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, DQ, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "funcMask" in QQ,
            get: QQ => QQ.funcMask
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, kQ, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opStencilFail" in QQ,
            get: QQ => QQ.opStencilFail
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, vQ, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opDepthFail" in QQ,
            get: QQ => QQ.opDepthFail
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, mQ, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "opStencilDepthPass" in QQ,
            get: QQ => QQ.opStencilDepthPass
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, uQ, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backOpStencilFail" in QQ,
            get: QQ => QQ.backOpStencilFail
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, HQ, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backOpDepthFail" in QQ,
            get: QQ => QQ.backOpDepthFail
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, bQ, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "backOpStencilDepthPass" in QQ,
            get: QQ => QQ.backOpStencilDepthPass
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, xQ, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mask" in QQ,
            get: QQ => QQ.mask
          },
          metadata: YQ
        }, null, tQ), (0, LQ.i)(QQ, null, AQ, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "enabled" in QQ,
            get: QQ => QQ.enabled
          },
          metadata: YQ
        }, null, tQ), YQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YQ
        })
      })(), QQ
    })();
    var AQ = wQ(39752),
      tQ = wQ(39317),
      eQ = wQ(39277);
    let MQ = (() => {
      var QQ;
      let FQ, wQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ = [],
        nQ = [],
        gQ = [],
        PQ = [],
        ZQ = [],
        yQ = [],
        BQ = [],
        dQ = [],
        QF = [],
        FF = [],
        wF = [],
        LF = [],
        qF = [],
        oF = [],
        DF = [],
        kF = [],
        vF = [],
        mF = [],
        uF = [],
        HF = [],
        bF = [],
        YF = [],
        xF = [],
        AF = [],
        tF = [],
        eF = [],
        MF = [],
        GF = [],
        pF = [],
        cF = [],
        CF = [],
        SF = [],
        iF = [],
        WF = [],
        RF = [],
        OF = [],
        sF = [],
        rF = [],
        IF = [],
        UF = [],
        NF = [],
        TF = [],
        KF = [],
        zF = [],
        lF = [],
        jF = [],
        aF = [],
        XF = [],
        fF = [],
        VF = [],
        hF = [];
      return QQ = class {
        get useVertexPulling() {
          return this._useVertexPulling
        }
        set useVertexPulling(FQ) {
          this._useVertexPulling !== FQ && (this._useVertexPulling = FQ, this.dFQ(QQ.MiscDirtyFlag))
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
        set alpha(FQ) {
          if (this._alpha === FQ) return;
          const wQ = this._alpha;
          this._alpha = FQ, 1 !== wQ && 1 !== FQ || this.dFQ(QQ.MiscDirtyFlag + QQ.PrePassDirtyFlag)
        }
        get alpha() {
          return this._alpha
        }
        set backFaceCulling(FQ) {
          this._backFaceCulling !== FQ && (this._backFaceCulling = FQ, this.dFQ(QQ.TextureDirtyFlag))
        }
        get backFaceCulling() {
          return this._backFaceCulling
        }
        set textureRepetitionMode(FQ) {
          const wQ = Math.max(0, Math.min(0 | FQ, 4));
          this._textureRepetitionMode !== wQ && (this._textureRepetitionMode = wQ, this.dFQ(QQ.TextureDirtyFlag))
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode
        }
        set cullBackFaces(FQ) {
          this._cullBackFaces !== FQ && (this._cullBackFaces = FQ, this.dFQ(QQ.TextureDirtyFlag))
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
          this._onDisposeObserver && this.zN.remove(this._onDisposeObserver), this._onDisposeObserver = this.zN.add(QQ)
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new DQ.e), this._onBindObservable
        }
        set onBind(QQ) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(QQ)
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new DQ.e), this._onUnBindObservable
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new DQ.e), this._onEffectCreatedObservable
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
        setAlphaMode(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[wQ] !== FQ && (this._alphaMode[wQ] = FQ, this.dFQ(QQ.TextureDirtyFlag))
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
        set fogEnabled(FQ) {
          this._fogEnabled !== FQ && (this._fogEnabled = FQ, this.dFQ(QQ.MiscDirtyFlag))
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
        set wireframe(FQ) {
          this.fillMode = FQ ? QQ.WireFrameFillMode : QQ.TriangleFillMode
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case QQ.PointFillMode:
            case QQ.PointListDrawMode:
              return !0
          }
          return this._scene.forcePointsCloud
        }
        set pointsCloud(FQ) {
          this.fillMode = FQ ? QQ.PointFillMode : QQ.TriangleFillMode
        }
        get fillMode() {
          return this._fillMode
        }
        set fillMode(FQ) {
          this._fillMode !== FQ && (this._fillMode = FQ, this.dFQ(QQ.MiscDirtyFlag))
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth
        }
        set useLogarithmicDepth(QQ) {
          const FQ = this.iN().Wx().getCaps().fragmentDepthSupported;
          QQ && !FQ && uQ.c.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = QQ && FQ, this._markAllSubMeshesAsMiscDirty()
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
        constructor(FQ, wQ, qQ) {
          let vQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, LQ.l)(this, EQ), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, LQ.l)(this, nQ, void 0), this.uniqueId = ((0, LQ.l)(this, gQ), (0, LQ.l)(this, PQ, void 0)), this._loadedUniqueId = (0, LQ.l)(this, ZQ), this.name = (0, LQ.l)(this, yQ, void 0), this.metadata = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, null)), this._internalMetadata = (0, LQ.l)(this, QF), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, LQ.l)(this, FF, !1), this.checkReadyOnlyOnce = ((0, LQ.l)(this, wF), (0, LQ.l)(this, LF, !1)), this.state = ((0, LQ.l)(this, qF), (0, LQ.l)(this, oF, "")), this._alpha = ((0, LQ.l)(this, DF), (0, LQ.l)(this, kF, 1)), this.inspectableCustomProperties = (0, LQ.l)(this, vF), this._backFaceCulling = (0, LQ.l)(this, mF, !0), this._textureRepetitionMode = ((0, LQ.l)(this, uF), (0, LQ.l)(this, HF, 0)), this.textureRepetitionHexTilingParams = ((0, LQ.l)(this, bF), (0, LQ.l)(this, YF, [1, .6, 7, .5])), this._cullBackFaces = ((0, LQ.l)(this, xF), (0, LQ.l)(this, AF, !0)), this._blockDirtyMechanism = ((0, LQ.l)(this, tF), !1), this.sideOrientation = (0, LQ.l)(this, eF, null), this.onCompiled = ((0, LQ.l)(this, MF), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.zN = new DQ.e, this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, LQ.l)(this, GF, [2]), this._needDepthPrePass = ((0, LQ.l)(this, pF), (0, LQ.l)(this, cF, !1)), this.disableDepthWrite = ((0, LQ.l)(this, CF), (0, LQ.l)(this, SF, !1)), this.disableColorWrite = ((0, LQ.l)(this, iF), (0, LQ.l)(this, WF, !1)), this.forceDepthWrite = ((0, LQ.l)(this, RF), (0, LQ.l)(this, OF, !1)), this.depthFunction = ((0, LQ.l)(this, sF), (0, LQ.l)(this, rF, 0)), this.separateCullingPass = ((0, LQ.l)(this, IF), (0, LQ.l)(this, UF, !1)), this._fogEnabled = ((0, LQ.l)(this, NF), (0, LQ.l)(this, TF, !0)), this.pointSize = ((0, LQ.l)(this, KF), (0, LQ.l)(this, zF, 1)), this.zOffset = ((0, LQ.l)(this, lF), (0, LQ.l)(this, jF, 0)), this.zOffsetUnits = ((0, LQ.l)(this, aF), (0, LQ.l)(this, XF, 0)), this.clipPlane = (0, LQ.l)(this, fF), this.stencil = new xQ, this._isVertexOutputInvariant = (0, LQ.l)(this, VF, QQ.ForceVertexOutputInvariant), this._materialContext = (0, LQ.l)(this, hF), this._useUBO = !1, this._fillMode = QQ.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = FQ;
          const uQ = wQ || kQ.d.LastCreatedScene;
          uQ && (this._scene = uQ, this._dirtyCallbacks = {}, this._forceGLSL = vQ, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = FQ || oQ.g.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.Wx().createMaterialContext(), this._drawWrapper = new bQ.d(this._scene.Wx(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new mQ.d(this._scene.Wx(), void 0, void 0, FQ), this._useUBO = this.iN().Wx().supportsUniformBuffers, this._createUniformBuffer(), qQ || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), QQ.OnEventObservable.notifyObservers(this, 1))
        }
        _createUniformBuffer() {
          const QQ = this.iN().Wx();
          this._uniformBuffer?.dispose(), QQ.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new mQ.d(QQ, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new mQ.d(this._scene.Wx(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1
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
        isReady(QQ, FQ) {
          return !0
        }
        isReadyForSubMesh(QQ, FQ, wQ) {
          const LQ = FQ.materialDefines;
          return !!LQ && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = LQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        iN() {
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
          let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const wQ = this.iN().meshes;
          for (const QQ of wQ)
            if (QQ.lC)
              for (const wQ of QQ.lC)
                if (wQ.Ux() === this)
                  for (const QQ of wQ._drawWrappers) QQ && this._materialContext === QQ.materialContext && (QQ._wasPreviouslyReady = !1, QQ._wasPreviouslyUsingInstances = null, QQ._forceRebindOnNextCall = FQ);
          FQ && this.dFQ(QQ.AllDirtyFlag)
        }
        _preBind(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const LQ = this._scene.Wx(),
            qQ = (null == wQ ? this.sideOrientation : wQ) === QQ.ClockWiseSideOrientation,
            oQ = FQ || this._getDrawWrapper();
          return (0, tQ.d)(oQ) && oQ.materialContext && (oQ.materialContext.useVertexPulling = this.useVertexPulling), LQ.enableEffect(oQ), LQ.setState(this.backFaceCulling, this.zOffset, !1, qQ, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits), qQ
        }
        bind(QQ, FQ) {}
        buildUniformLayout() {
          const QQ = this._uniformBuffer;
          this._eventInfo.ubo = QQ, this._callbackPluginEventGeneric(8, this._eventInfo), QQ.create(), this._uniformBufferLayoutBuilt = !0
        }
        bindForSubMesh(QQ, FQ, wQ) {
          const LQ = wQ._drawWrapper;
          this._eventInfo.subMesh = wQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), LQ._forceRebindOnNextCall = !1
        }
        bindOnlyWorldMatrix(QQ) {}
        bindView(QQ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : QQ.setMatrix("view", this.iN().getViewMatrix())
        }
        bindViewProjection(QQ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (QQ.setMatrix("viewProjection", this.iN().getTransformMatrix()), QQ.setMatrix("projection", this.iN().getProjectionMatrix()), QQ.setMatrix("inverseProjection", this.iN().getInverseProjectionMatrix()))
        }
        bindEyePosition(QQ, FQ) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(QQ, FQ)
        }
        _afterBind(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && FQ && (this._needToBindSceneUbo = !1, (0, AQ.w)(FQ, this.iN().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = QQ ? QQ.visibility : 1, this._onBindObservable && QQ && this._onBindObservable.notifyObservers(QQ), this.disableDepthWrite) {
            const QQ = this._scene.Wx();
            this._cachedDepthWriteState = QQ.getDepthWrite(), QQ.setDepthWrite(!1)
          }
          if (this.disableColorWrite) {
            const QQ = this._scene.Wx();
            this._cachedColorWriteState = QQ.getColorWrite(), QQ.setColorWrite(!1)
          }
          if (0 !== this.depthFunction) {
            const QQ = this._scene.Wx();
            this._cachedDepthFunctionState = QQ.getDepthFunction() || 0, QQ.setDepthFunction(this.depthFunction)
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.Wx().setDepthFunction(this._cachedDepthFunctionState)
          }
          if (this.disableDepthWrite) {
            this._scene.Wx().setDepthWrite(this._cachedDepthWriteState)
          }
          if (this.disableColorWrite) {
            this._scene.Wx().setColorWrite(this._cachedColorWriteState)
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
        _clonePlugins(FQ, wQ) {
          const LQ = {};
          if (this._serializePlugins(LQ), QQ._ParsePlugins(LQ, FQ, this._scene, wQ), this.pluginManager)
            for (const QQ of this.pluginManager._plugins) {
              const wQ = FQ.pluginManager.getPlugin(QQ.name);
              wQ && QQ.copyTo(wQ)
            }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const QQ = [];
            for (const FQ in this.meshMap) {
              const wQ = this.meshMap[FQ];
              wQ && QQ.push(wQ)
            }
            return QQ
          }
          return this._scene.meshes.filter((QQ => QQ.material === this))
        }
        forceCompilation(QQ, FQ, wQ, LQ) {
          const qQ = {
              clipPlane: !1,
              useInstances: !1,
              ...wQ
            },
            oQ = this.iN(),
            DQ = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const kQ = () => {
            if (!this._scene || !this._scene.Wx()) return;
            const wQ = oQ.clipPlane;
            if (qQ.clipPlane && (oQ.clipPlane = new HQ.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let wQ = !0,
                oQ = null;
              if (QQ.lC) {
                const FQ = new vQ.c(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
                FQ.materialDefines && (FQ.materialDefines._renderId = -1), this.isReadyForSubMesh(QQ, FQ, qQ.useInstances) || (FQ.effect && FQ.effect.getCompilationError() && FQ.effect.allFallbacksProcessed() ? oQ = FQ.effect.getCompilationError() : (wQ = !1, setTimeout(kQ, 16)))
              }
              wQ && (this.allowShaderHotSwapping = DQ, oQ && LQ && LQ(oQ), FQ && FQ(this))
            } else this.isReady() ? (this.allowShaderHotSwapping = DQ, FQ && FQ(this)) : setTimeout(kQ, 16);
            qQ.clipPlane && (oQ.clipPlane = wQ)
          };
          kQ()
        }
        async forceCompilationAsync(QQ, FQ) {
          return await new Promise(((wQ, LQ) => {
            this.forceCompilation(QQ, (() => {
              wQ()
            }), FQ, (QQ => {
              LQ(QQ)
            }))
          }))
        }
        dFQ(FQ) {
          this.iN().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (QQ._DirtyCallbackArray.length = 0, FQ & QQ.ImageProcessingDirtyFlag && QQ._DirtyCallbackArray.push(QQ._ImageProcessingDirtyCallBack), FQ & QQ.TextureDirtyFlag && QQ._DirtyCallbackArray.push(QQ._TextureDirtyCallBack), FQ & QQ.LightDirtyFlag && QQ._DirtyCallbackArray.push(QQ._LightsDirtyCallBack), FQ & QQ.FresnelDirtyFlag && QQ._DirtyCallbackArray.push(QQ._FresnelDirtyCallBack), FQ & QQ.AttributesDirtyFlag && QQ._DirtyCallbackArray.push(QQ._AttributeDirtyCallBack), FQ & QQ.MiscDirtyFlag && QQ._DirtyCallbackArray.push(QQ._MiscDirtyCallBack), FQ & QQ.PrePassDirtyFlag && QQ._DirtyCallbackArray.push(QQ._PrePassDirtyCallBack), QQ._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(QQ._RunDirtyCallBacks), this.iN().resetCachedMaterial())
        }
        resetDrawCache() {
          const QQ = this.iN().meshes;
          for (const FQ of QQ)
            if (FQ.lC)
              for (const QQ of FQ.lC) QQ.Ux() === this && QQ.resetDrawCache()
        }
        _markAllSubMeshesAsDirty(QQ) {
          const FQ = this.iN();
          if (FQ.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const wQ = FQ.meshes;
          for (const LQ of wQ)
            if (LQ.lC)
              for (const wQ of LQ.lC) {
                if ((wQ.Ux() || (FQ._hasDefaultMaterial ? FQ.defaultMaterial : null)) === this)
                  for (const FQ of wQ._drawWrappers) FQ && FQ.defines && FQ.defines.markAllAsDirty && this._materialContext === FQ.materialContext && QQ(FQ.defines)
              }
        }
        _markScenePrePassDirty() {
          if (this.iN().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const QQ = this.iN().enablePrePassRenderer();
          QQ && QQ.dFQ()
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
            this.zN.add((() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(QQ)
            }))
          }
        }
        setPrePassRenderer(QQ) {
          return !1
        }
        dispose(QQ, FQ, wQ) {
          const LQ = this.iN();
          if (LQ.stopAnimation(this), LQ.freeProcessedMaterials(), LQ.removeMaterial(this), this._eventInfo.forceDisposeTextures = FQ, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const QQ = this._parentContainer.materials.indexOf(this);
            QQ > -1 && this._parentContainer.materials.splice(QQ, 1), this._parentContainer = null
          }
          if (!0 !== wQ)
            if (this.meshMap)
              for (const qQ in this.meshMap) {
                const QQ = this.meshMap[qQ];
                this._disposeMeshResources(QQ)
              } else {
                const QQ = LQ.meshes;
                for (const FQ of QQ) this._disposeMeshResources(FQ)
              }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.zN.notifyObservers(this), this.zN.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {})
        }
        _disposeMeshResources(QQ) {
          if (!QQ) return;
          const FQ = QQ.geometry,
            wQ = QQ._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (QQ.lC && wQ)
              for (const LQ of QQ.lC) {
                const QQ = LQ._drawWrappers;
                for (let qQ = 0; qQ < QQ.length; qQ++) {
                  const oQ = QQ[qQ]?.effect;
                  if (!oQ) continue;
                  wQ[qQ] === this && (FQ?._releaseVertexArrayObject(oQ), LQ._removeDrawWrapper(qQ, !0, !0))
                }
              }
          } else FQ?._releaseVertexArrayObject(this._drawWrapper.effect);
          QQ.material !== this || QQ.cqQ || (QQ.material = null)
        }
        serialize() {
          const QQ = YQ.c.Serialize(this);
          return QQ.stencil = this.stencil.serialize(), QQ.uniqueId = this.uniqueId, this._serializePlugins(QQ), QQ
        }
        _serializePlugins(QQ) {
          if (QQ.plugins = {}, this.pluginManager)
            for (const FQ of this.pluginManager._plugins) FQ.doNotSerialize || (QQ.plugins[FQ.getClassName()] = FQ.serialize())
        }
        static ParseAlphaMode(QQ, FQ) {
          void 0 !== QQ._alphaMode ? FQ._alphaMode = Array.isArray(QQ._alphaMode) ? [...QQ._alphaMode] : [QQ._alphaMode] : void 0 !== QQ.alphaMode ? FQ._alphaMode = Array.isArray(QQ.alphaMode) ? [...QQ.alphaMode] : [QQ.alphaMode] : FQ._alphaMode = [2]
        }
        static Parse(FQ, wQ, LQ) {
          if (FQ.customType) {
            if ("BABYLON.PBRMaterial" === FQ.customType && FQ.overloadedAlbedo && (FQ.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return uQ.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null
          } else FQ.customType = "BABYLON.StandardMaterial";
          const qQ = oQ.g.Instantiate(FQ.customType).Parse(FQ, wQ, LQ);
          return qQ._loadedUniqueId = FQ.uniqueId, QQ.ParseAlphaMode(FQ, qQ), qQ
        }
        static _ParsePlugins(QQ, FQ, wQ, LQ) {
          if (QQ.plugins)
            for (const qQ in QQ.plugins) {
              const DQ = QQ.plugins[qQ];
              let kQ = FQ.pluginManager?.getPlugin(DQ.name);
              if (!kQ) {
                const QQ = oQ.g.Instantiate("BABYLON." + qQ);
                QQ && (kQ = new QQ(FQ))
              }
              kQ?.parse(DQ, wQ, LQ)
            }
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], MQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], CQ = [(0, qQ.I)("alpha")], SQ = [(0, qQ.I)("backFaceCulling")], iQ = [(0, qQ.I)("textureRepetitionMode")], WQ = [(0, qQ.I)("textureRepetitionHexTilingParams")], RQ = [(0, qQ.I)("cullBackFaces")], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], NQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], KQ = [(0, qQ.I)()], zQ = [(0, qQ.I)("fogEnabled")], lQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], fQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, XQ, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: QQ => "pointsCloud" in QQ,
            get: QQ => QQ.pointsCloud
          },
          metadata: oQ
        }, null, EQ), (0, LQ.i)(QQ, null, fQ, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "fillMode" in QQ,
            get: QQ => QQ.fillMode
          },
          metadata: oQ
        }, null, EQ), (0, LQ.i)(QQ, null, VQ, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useLogarithmicDepth" in QQ,
            get: QQ => QQ.useLogarithmicDepth
          },
          metadata: oQ
        }, null, EQ), (0, LQ.i)(QQ, null, JQ, {
          kind: "getter",
          name: "transparencyMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "transparencyMode" in QQ,
            get: QQ => QQ.transparencyMode
          },
          metadata: oQ
        }, null, EQ), (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: QQ => "id" in QQ,
            get: QQ => QQ.id,
            set: (QQ, FQ) => {
              QQ.id = FQ
            }
          },
          metadata: oQ
        }, nQ, gQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: QQ => "uniqueId" in QQ,
            get: QQ => QQ.uniqueId,
            set: (QQ, FQ) => {
              QQ.uniqueId = FQ
            }
          },
          metadata: oQ
        }, PQ, ZQ), (0, LQ.i)(null, null, eQ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: QQ => "name" in QQ,
            get: QQ => QQ.name,
            set: (QQ, FQ) => {
              QQ.name = FQ
            }
          },
          metadata: oQ
        }, yQ, BQ), (0, LQ.i)(null, null, MQ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metadata" in QQ,
            get: QQ => QQ.metadata,
            set: (QQ, FQ) => {
              QQ.metadata = FQ
            }
          },
          metadata: oQ
        }, dQ, QF), (0, LQ.i)(null, null, GQ, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: QQ => "checkReadyOnEveryCall" in QQ,
            get: QQ => QQ.checkReadyOnEveryCall,
            set: (QQ, FQ) => {
              QQ.checkReadyOnEveryCall = FQ
            }
          },
          metadata: oQ
        }, FF, wF), (0, LQ.i)(null, null, pQ, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: QQ => "checkReadyOnlyOnce" in QQ,
            get: QQ => QQ.checkReadyOnlyOnce,
            set: (QQ, FQ) => {
              QQ.checkReadyOnlyOnce = FQ
            }
          },
          metadata: oQ
        }, LF, qF), (0, LQ.i)(null, null, cQ, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: QQ => "state" in QQ,
            get: QQ => QQ.state,
            set: (QQ, FQ) => {
              QQ.state = FQ
            }
          },
          metadata: oQ
        }, oF, DF), (0, LQ.i)(null, null, CQ, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_alpha" in QQ,
            get: QQ => QQ._alpha,
            set: (QQ, FQ) => {
              QQ._alpha = FQ
            }
          },
          metadata: oQ
        }, kF, vF), (0, LQ.i)(null, null, SQ, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_backFaceCulling" in QQ,
            get: QQ => QQ._backFaceCulling,
            set: (QQ, FQ) => {
              QQ._backFaceCulling = FQ
            }
          },
          metadata: oQ
        }, mF, uF), (0, LQ.i)(null, null, iQ, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_textureRepetitionMode" in QQ,
            get: QQ => QQ._textureRepetitionMode,
            set: (QQ, FQ) => {
              QQ._textureRepetitionMode = FQ
            }
          },
          metadata: oQ
        }, HF, bF), (0, LQ.i)(null, null, WQ, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: QQ => "textureRepetitionHexTilingParams" in QQ,
            get: QQ => QQ.textureRepetitionHexTilingParams,
            set: (QQ, FQ) => {
              QQ.textureRepetitionHexTilingParams = FQ
            }
          },
          metadata: oQ
        }, YF, xF), (0, LQ.i)(null, null, RQ, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_cullBackFaces" in QQ,
            get: QQ => QQ._cullBackFaces,
            set: (QQ, FQ) => {
              QQ._cullBackFaces = FQ
            }
          },
          metadata: oQ
        }, AF, tF), (0, LQ.i)(null, null, OQ, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "sideOrientation" in QQ,
            get: QQ => QQ.sideOrientation,
            set: (QQ, FQ) => {
              QQ.sideOrientation = FQ
            }
          },
          metadata: oQ
        }, eF, MF), (0, LQ.i)(null, null, sQ, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_alphaMode" in QQ,
            get: QQ => QQ._alphaMode,
            set: (QQ, FQ) => {
              QQ._alphaMode = FQ
            }
          },
          metadata: oQ
        }, GF, pF), (0, LQ.i)(null, null, rQ, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_needDepthPrePass" in QQ,
            get: QQ => QQ._needDepthPrePass,
            set: (QQ, FQ) => {
              QQ._needDepthPrePass = FQ
            }
          },
          metadata: oQ
        }, cF, CF), (0, LQ.i)(null, null, IQ, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableDepthWrite" in QQ,
            get: QQ => QQ.disableDepthWrite,
            set: (QQ, FQ) => {
              QQ.disableDepthWrite = FQ
            }
          },
          metadata: oQ
        }, SF, iF), (0, LQ.i)(null, null, UQ, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: QQ => "disableColorWrite" in QQ,
            get: QQ => QQ.disableColorWrite,
            set: (QQ, FQ) => {
              QQ.disableColorWrite = FQ
            }
          },
          metadata: oQ
        }, WF, RF), (0, LQ.i)(null, null, NQ, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: QQ => "forceDepthWrite" in QQ,
            get: QQ => QQ.forceDepthWrite,
            set: (QQ, FQ) => {
              QQ.forceDepthWrite = FQ
            }
          },
          metadata: oQ
        }, OF, sF), (0, LQ.i)(null, null, TQ, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "depthFunction" in QQ,
            get: QQ => QQ.depthFunction,
            set: (QQ, FQ) => {
              QQ.depthFunction = FQ
            }
          },
          metadata: oQ
        }, rF, IF), (0, LQ.i)(null, null, KQ, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: QQ => "separateCullingPass" in QQ,
            get: QQ => QQ.separateCullingPass,
            set: (QQ, FQ) => {
              QQ.separateCullingPass = FQ
            }
          },
          metadata: oQ
        }, UF, NF), (0, LQ.i)(null, null, zQ, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_fogEnabled" in QQ,
            get: QQ => QQ._fogEnabled,
            set: (QQ, FQ) => {
              QQ._fogEnabled = FQ
            }
          },
          metadata: oQ
        }, TF, KF), (0, LQ.i)(null, null, lQ, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: QQ => "pointSize" in QQ,
            get: QQ => QQ.pointSize,
            set: (QQ, FQ) => {
              QQ.pointSize = FQ
            }
          },
          metadata: oQ
        }, zF, lF), (0, LQ.i)(null, null, jQ, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zOffset" in QQ,
            get: QQ => QQ.zOffset,
            set: (QQ, FQ) => {
              QQ.zOffset = FQ
            }
          },
          metadata: oQ
        }, jF, aF), (0, LQ.i)(null, null, aQ, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: QQ => "zOffsetUnits" in QQ,
            get: QQ => QQ.zOffsetUnits,
            set: (QQ, FQ) => {
              QQ.zOffsetUnits = FQ
            }
          },
          metadata: oQ
        }, XF, fF), (0, LQ.i)(null, null, hQ, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_isVertexOutputInvariant" in QQ,
            get: QQ => QQ._isVertexOutputInvariant,
            set: (QQ, FQ) => {
              QQ._isVertexOutputInvariant = FQ
            }
          },
          metadata: oQ
        }, VF, hF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ.TriangleFillMode = 0, QQ.WireFrameFillMode = 1, QQ.PointFillMode = 2, QQ.PointListDrawMode = 3, QQ.LineListDrawMode = 4, QQ.LineLoopDrawMode = 5, QQ.LineStripDrawMode = 6, QQ.TriangleStripDrawMode = 7, QQ.TriangleFanDrawMode = 8, QQ.ClockWiseSideOrientation = 0, QQ.CounterClockWiseSideOrientation = 1, QQ.ImageProcessingDirtyFlag = 64, QQ.TextureDirtyFlag = 1, QQ.LightDirtyFlag = 2, QQ.FresnelDirtyFlag = 4, QQ.AttributesDirtyFlag = 8, QQ.MiscDirtyFlag = 16, QQ.PrePassDirtyFlag = 32, QQ.AllDirtyFlag = 127, QQ.MATERIAL_OPAQUE = 0, QQ.MATERIAL_ALPHATEST = 1, QQ.MATERIAL_ALPHABLEND = 2, QQ.MATERIAL_ALPHATESTANDBLEND = 3, QQ.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, QQ.MATERIAL_NORMALBLENDMETHOD_RNM = 1, QQ.LIGHTFALLOFF_PHYSICAL = 0, QQ.LIGHTFALLOFF_GLTF = 1, QQ.LIGHTFALLOFF_STANDARD = 2, QQ.OnEventObservable = new DQ.e, QQ.ForceVertexOutputInvariant = !1, QQ._AllDirtyCallBack = QQ => QQ.markAllAsDirty(), QQ._ImageProcessingDirtyCallBack = QQ => QQ.markAsImageProcessingDirty(), QQ._TextureDirtyCallBack = QQ => QQ.markAsTexturesDirty(), QQ._FresnelDirtyCallBack = QQ => QQ.markAsFresnelDirty(), QQ._MiscDirtyCallBack = QQ => QQ.markAsMiscDirty(), QQ._PrePassDirtyCallBack = QQ => QQ.markAsPrePassDirty(), QQ._LightsDirtyCallBack = QQ => QQ.markAsLightDirty(), QQ._AttributeDirtyCallBack = QQ => QQ.markAsAttributesDirty(), QQ._FresnelAndMiscDirtyCallBack = FQ => {
        QQ._FresnelDirtyCallBack(FQ), QQ._MiscDirtyCallBack(FQ)
      }, QQ._TextureAndMiscDirtyCallBack = FQ => {
        QQ._TextureDirtyCallBack(FQ), QQ._MiscDirtyCallBack(FQ)
      }, QQ._DirtyCallbackArray = [], QQ._RunDirtyCallBacks = FQ => {
        for (const wQ of QQ._DirtyCallbackArray) wQ(FQ)
      }, QQ
    })();
    Object.getOwnPropertyDescriptor(MQ.prototype, "pluginManager") || Object.defineProperty(MQ.prototype, "pluginManager", (0, eQ.e)("Material", "pluginManager"))
  },
  39760: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = wQ(39295);
    class qQ {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled
      }
      static set DiffuseTextureEnabled(QQ) {
        this._DiffuseTextureEnabled !== QQ && (this._DiffuseTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled
      }
      static set BaseWeightTextureEnabled(QQ) {
        this._BaseWeightTextureEnabled !== QQ && (this._BaseWeightTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled
      }
      static set BaseDiffuseRoughnessTextureEnabled(QQ) {
        this._BaseDiffuseRoughnessTextureEnabled !== QQ && (this._BaseDiffuseRoughnessTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled
      }
      static set DetailTextureEnabled(QQ) {
        this._DetailTextureEnabled !== QQ && (this._DetailTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled
      }
      static set DecalMapEnabled(QQ) {
        this._DecalMapEnabled !== QQ && (this._DecalMapEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled
      }
      static set AmbientTextureEnabled(QQ) {
        this._AmbientTextureEnabled !== QQ && (this._AmbientTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled
      }
      static set OpacityTextureEnabled(QQ) {
        this._OpacityTextureEnabled !== QQ && (this._OpacityTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled
      }
      static set ReflectionTextureEnabled(QQ) {
        this._ReflectionTextureEnabled !== QQ && (this._ReflectionTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled
      }
      static set EmissiveTextureEnabled(QQ) {
        this._EmissiveTextureEnabled !== QQ && (this._EmissiveTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled
      }
      static set SpecularTextureEnabled(QQ) {
        this._SpecularTextureEnabled !== QQ && (this._SpecularTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled
      }
      static set BumpTextureEnabled(QQ) {
        this._BumpTextureEnabled !== QQ && (this._BumpTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled
      }
      static set LightmapTextureEnabled(QQ) {
        this._LightmapTextureEnabled !== QQ && (this._LightmapTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled
      }
      static set RefractionTextureEnabled(QQ) {
        this._RefractionTextureEnabled !== QQ && (this._RefractionTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled
      }
      static set ColorGradingTextureEnabled(QQ) {
        this._ColorGradingTextureEnabled !== QQ && (this._ColorGradingTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled
      }
      static set FresnelEnabled(QQ) {
        this._FresnelEnabled !== QQ && (this._FresnelEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(4))
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled
      }
      static set ClearCoatTextureEnabled(QQ) {
        this._ClearCoatTextureEnabled !== QQ && (this._ClearCoatTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled
      }
      static set ClearCoatBumpTextureEnabled(QQ) {
        this._ClearCoatBumpTextureEnabled !== QQ && (this._ClearCoatBumpTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled
      }
      static set ClearCoatTintTextureEnabled(QQ) {
        this._ClearCoatTintTextureEnabled !== QQ && (this._ClearCoatTintTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled
      }
      static set SheenTextureEnabled(QQ) {
        this._SheenTextureEnabled !== QQ && (this._SheenTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled
      }
      static set AnisotropicTextureEnabled(QQ) {
        this._AnisotropicTextureEnabled !== QQ && (this._AnisotropicTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set ThicknessTextureEnabled(QQ) {
        this._ThicknessTextureEnabled !== QQ && (this._ThicknessTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled
      }
      static set RefractionIntensityTextureEnabled(QQ) {
        this._RefractionIntensityTextureEnabled !== QQ && (this._RefractionIntensityTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled
      }
      static set TranslucencyIntensityTextureEnabled(QQ) {
        this._TranslucencyIntensityTextureEnabled !== QQ && (this._TranslucencyIntensityTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled
      }
      static set TranslucencyColorTextureEnabled(QQ) {
        this._TranslucencyColorTextureEnabled !== QQ && (this._TranslucencyColorTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled
      }
      static set IridescenceTextureEnabled(QQ) {
        this._IridescenceTextureEnabled !== QQ && (this._IridescenceTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
      }
    }
    qQ._DiffuseTextureEnabled = !0, qQ._BaseWeightTextureEnabled = !0, qQ._BaseDiffuseRoughnessTextureEnabled = !0, qQ._DetailTextureEnabled = !0, qQ._DecalMapEnabled = !0, qQ._AmbientTextureEnabled = !0, qQ._OpacityTextureEnabled = !0, qQ._ReflectionTextureEnabled = !0, qQ._EmissiveTextureEnabled = !0, qQ._SpecularTextureEnabled = !0, qQ._BumpTextureEnabled = !0, qQ._LightmapTextureEnabled = !0, qQ._RefractionTextureEnabled = !0, qQ._ColorGradingTextureEnabled = !0, qQ._FresnelEnabled = !0, qQ._ClearCoatTextureEnabled = !0, qQ._ClearCoatBumpTextureEnabled = !0, qQ._ClearCoatTintTextureEnabled = !0, qQ._SheenTextureEnabled = !0, qQ._AnisotropicTextureEnabled = !0, qQ._ThicknessTextureEnabled = !0, qQ._RefractionIntensityTextureEnabled = !0, qQ._TranslucencyIntensityTextureEnabled = !0, qQ._TranslucencyColorTextureEnabled = !0, qQ._IridescenceTextureEnabled = !0
  },
  39752: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => rQ,
      E: () => cQ,
      F: () => OQ,
      I: () => sQ,
      J: () => YQ,
      K: () => bQ,
      N: () => fQ,
      R: () => zQ,
      T: () => TQ,
      U: () => NQ,
      X: () => GQ,
      Y: () => IQ,
      ab: () => VQ,
      bb: () => hQ,
      c: () => UQ,
      d: () => CQ,
      fb: () => JQ,
      g: () => HQ,
      h: () => eQ,
      j: () => MQ,
      jb: () => PQ,
      lb: () => nQ,
      n: () => RQ,
      pb: () => gQ,
      qb: () => xQ,
      r: () => vQ,
      s: () => AQ,
      w: () => tQ,
      y: () => pQ
    });
    var LQ = wQ(38203),
      qQ = wQ(36720),
      oQ = wQ(39623),
      DQ = wQ(39754),
      kQ = wQ(39760);

    function vQ(QQ, FQ, wQ) {
      if (!QQ || QQ.LOGARITHMICDEPTH || QQ.indexOf && QQ.indexOf("LOGARITHMICDEPTH") >= 0) {
        const QQ = wQ.activeCamera;
        1 === QQ.mode && LQ.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), FQ.setFloat("logarithmicDepthConstant", 2 / (Math.log(QQ.maxZ + 1) / Math.LN2))
      }
    }
    const mQ = {
        r: 0,
        g: 0,
        b: 0
      },
      uQ = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };

    function HQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      wQ && QQ.fogEnabled && (!FQ || FQ.applyFog) && 0 !== QQ.fogMode && (wQ.setFloat4("vFogInfos", QQ.fogMode, QQ.fogStart, QQ.fogEnd, QQ.fogDensity), LQ ? (QQ.fogColor.toLinearSpaceToRef(mQ, QQ.Wx().useExactSrgbConversions), wQ.setColor3("vFogColor", mQ)) : wQ.setColor3("vFogColor", QQ.fogColor))
    }

    function bQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
      const HQ = QQ.numMaxInfluencers || QQ.numInfluencers;
      return HQ <= 0 ? 0 : (FQ.push("#define MORPHTARGETS"), QQ.hasPositions && FQ.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), QQ.hasNormals && FQ.push("#define MORPHTARGETTEXTURE_HASNORMALS"), QQ.hasTangents && FQ.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), QQ.hasUVs && FQ.push("#define MORPHTARGETTEXTURE_HASUVS"), QQ.hasUV2s && FQ.push("#define MORPHTARGETTEXTURE_HASUV2S"), QQ.hasColors && FQ.push("#define MORPHTARGETTEXTURE_HASCOLORS"), QQ.supportsPositions && qQ && FQ.push("#define MORPHTARGETS_POSITION"), QQ.supportsNormals && oQ && FQ.push("#define MORPHTARGETS_NORMAL"), QQ.supportsTangents && DQ && FQ.push("#define MORPHTARGETS_TANGENT"), QQ.supportsUVs && kQ && FQ.push("#define MORPHTARGETS_UV"), QQ.supportsUV2s && vQ && FQ.push("#define MORPHTARGETS_UV2"), QQ.supportsColors && mQ && FQ.push("#define MORPHTARGETS_COLOR"), FQ.push("#define NUM_MORPH_INFLUENCERS " + HQ), QQ.isUsingTextureForTargets && FQ.push("#define MORPHTARGETS_TEXTURE"), uQ.NUM_MORPH_INFLUENCERS = HQ, uQ.NORMAL = oQ, uQ.TANGENT = DQ, uQ.UV = kQ, uQ.UV2 = vQ, uQ.COLOR = mQ, YQ(wQ, LQ, uQ, qQ), HQ)
    }

    function YQ(QQ, FQ, wQ) {
      let oQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const DQ = wQ.NUM_MORPH_INFLUENCERS;
      if (DQ > 0 && qQ.d.LastCreatedEngine) {
        const kQ = qQ.d.LastCreatedEngine.getCaps().maxVertexAttribs,
          vQ = FQ.morphTargetManager;
        if (vQ?.isUsingTextureForTargets) return;
        const mQ = vQ && vQ.supportsPositions && oQ,
          uQ = vQ && vQ.supportsNormals && wQ.NORMAL,
          HQ = vQ && vQ.supportsTangents && wQ.TANGENT,
          bQ = vQ && vQ.supportsUVs && wQ.UV1,
          YQ = vQ && vQ.supportsUV2s && wQ.UV2,
          xQ = vQ && vQ.supportsColors && wQ.VERTEXCOLOR;
        for (let wQ = 0; wQ < DQ; wQ++) mQ && QQ.push("position" + wQ), uQ && QQ.push("normal" + wQ), HQ && QQ.push("tangent" + wQ), bQ && QQ.push("uv_" + wQ), YQ && QQ.push("uv2_" + wQ), xQ && QQ.push("color" + wQ), QQ.length > kQ && LQ.c.Error("Cannot add more vertex attributes for mesh " + FQ.name)
      }
    }

    function xQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      QQ.push("world0"), QQ.push("world1"), QQ.push("world2"), QQ.push("world3"), FQ && (QQ.push("previousWorld0"), QQ.push("previousWorld1"), QQ.push("previousWorld2"), QQ.push("previousWorld3"))
    }

    function AQ(QQ, FQ) {
      const wQ = QQ.morphTargetManager;
      QQ && wQ && FQ.setFloatArray("morphTargetInfluences", wQ.influences)
    }

    function tQ(QQ, FQ) {
      FQ.bindToEffect(QQ, "Scene")
    }

    function eQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        mQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        HQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        bQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (QQ.texturesEnabled && qQ && kQ.e.ReflectionTextureEnabled) {
        if (wQ.Y5("reflectionMatrix", qQ.getReflectionTextureMatrix()), wQ.updateFloat2("vReflectionInfos", qQ.level * QQ.iblIntensity, bQ), vQ && qQ.boundingBoxSize) {
          const QQ = qQ;
          wQ.updateVector3("vReflectionPosition", QQ.boundingBoxPosition), wQ.updateVector3("vReflectionSize", QQ.boundingBoxSize)
        }
        if (oQ) {
          const QQ = qQ.getSize().width;
          wQ.updateFloat2("vReflectionFilteringInfo", QQ, Math.log2(QQ))
        }
        if (uQ && !FQ.USEIRRADIANCEMAP) {
          const QQ = qQ.sphericalPolynomial;
          if (FQ.USESPHERICALFROMREFLECTIONMAP && QQ)
            if (FQ.SPHERICAL_HARMONICS) {
              const FQ = QQ.preScaledHarmonics;
              wQ.updateVector3("vSphericalL00", FQ.l00), wQ.updateVector3("vSphericalL1_1", FQ.l1_1), wQ.updateVector3("vSphericalL10", FQ.l10), wQ.updateVector3("vSphericalL11", FQ.l11), wQ.updateVector3("vSphericalL2_2", FQ.l2_2), wQ.updateVector3("vSphericalL2_1", FQ.l2_1), wQ.updateVector3("vSphericalL20", FQ.l20), wQ.updateVector3("vSphericalL21", FQ.l21), wQ.updateVector3("vSphericalL22", FQ.l22)
            } else wQ.updateFloat3("vSphericalX", QQ.x.x, QQ.x.y, QQ.x.z), wQ.updateFloat3("vSphericalY", QQ.y.x, QQ.y.y, QQ.y.z), wQ.updateFloat3("vSphericalZ", QQ.z.x, QQ.z.y, QQ.z.z), wQ.updateFloat3("vSphericalXX_ZZ", QQ.xx.x - QQ.zz.x, QQ.xx.y - QQ.zz.y, QQ.xx.z - QQ.zz.z), wQ.updateFloat3("vSphericalYY_ZZ", QQ.yy.x - QQ.zz.x, QQ.yy.y - QQ.zz.y, QQ.yy.z - QQ.zz.z), wQ.updateFloat3("vSphericalZZ", QQ.zz.x, QQ.zz.y, QQ.zz.z), wQ.updateFloat3("vSphericalXY", QQ.xy.x, QQ.xy.y, QQ.xy.z), wQ.updateFloat3("vSphericalYZ", QQ.yz.x, QQ.yz.y, QQ.yz.z), wQ.updateFloat3("vSphericalZX", QQ.zx.x, QQ.zx.y, QQ.zx.z)
        } else mQ && FQ.USEIRRADIANCEMAP && FQ.USE_IRRADIANCE_DOMINANT_DIRECTION && qQ.irradianceTexture && wQ.updateVector3("vReflectionDominantDirection", qQ.irradianceTexture._dominantDirection);
        DQ && wQ.updateFloat3("vReflectionMicrosurfaceInfos", qQ.getSize().width, qQ.lodGenerationScale, qQ.lodGenerationOffset)
      }
      HQ && wQ.updateColor3("vReflectionColor", LQ)
    }

    function MQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (LQ && kQ.e.ReflectionTextureEnabled) {
        FQ.LODBASEDMICROSFURACE ? wQ.setTexture("reflectionSampler", LQ) : (wQ.setTexture("reflectionSampler", LQ._lodTextureMid || LQ), wQ.setTexture("reflectionSamplerLow", LQ._lodTextureLow || LQ), wQ.setTexture("reflectionSamplerHigh", LQ._lodTextureHigh || LQ)), FQ.USEIRRADIANCEMAP && wQ.setTexture("irradianceSampler", LQ.irradianceTexture);
        const oQ = QQ.iblCdfGenerator;
        qQ && oQ && wQ.setTexture("icdfSampler", oQ.getIcdfTexture())
      }
    }

    function GQ(QQ, FQ, wQ) {
      FQ._needUVs = !0, FQ[wQ] = !0, QQ.optimizeUVAllocation && QQ.getTextureMatrix().isIdentityAs3x2() ? (FQ[wQ + "DIRECTUV"] = QQ.coordinatesIndex + 1, FQ["MAINUV" + (QQ.coordinatesIndex + 1)] = !0) : FQ[wQ + "DIRECTUV"] = 0
    }

    function pQ(QQ, FQ, wQ) {
      const LQ = QQ.getTextureMatrix();
      FQ.Y5(wQ + "Matrix", LQ)
    }

    function cQ(QQ, FQ, wQ) {
      wQ.BAKED_VERTEX_ANIMATION_TEXTURE && wQ.INSTANCES && QQ.push("bakedVertexAnimationSettingsInstanced")
    }

    function CQ(QQ, FQ, wQ) {
      var LQ;
      if (FQ && QQ && (QQ.computeBonesUsingShaders && FQ._bonesComputationForcedToCPU && (QQ.computeBonesUsingShaders = !1), QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton)) {
        const qQ = QQ.skeleton;
        if (qQ.isUsingTextureForMatrices && FQ.getUniformIndex("boneTextureInfo") > -1) {
          const wQ = qQ.getTransformMatrixTexture(QQ);
          FQ.setTexture("boneSampler", wQ), FQ.setFloat2("boneTextureInfo", qQ._textureWidth, qQ._textureHeight)
        } else {
          const oQ = qQ.getTransformMatrices(QQ);
          oQ && (FQ.setMatrices("mBones", oQ), wQ && QQ.iN().prePassRenderer && QQ.iN().prePassRenderer.getIndex(2) && (wQ.previousBones[QQ.uniqueId] || (wQ.previousBones[QQ.uniqueId] = oQ.slice()), FQ.setMatrices("mPreviousBones", wQ.previousBones[QQ.uniqueId]), LQ = oQ, wQ.previousBones[QQ.uniqueId].set(LQ)))
        }
      }
    }

    function SQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      QQ._bindLight(FQ, wQ, LQ, qQ, oQ)
    }
    const iQ = 4,
      WQ = new WeakMap;

    function RQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const oQ = Math.min(FQ.lightSources.length, qQ);
      for (let DQ = 0; DQ < oQ; DQ++) {
        SQ(FQ.lightSources[DQ], DQ, QQ, wQ, "boolean" === typeof LQ ? LQ : LQ.SPECULARTERM, FQ.receiveShadows)
      }
    }

    function OQ(QQ, FQ, wQ, LQ) {
      wQ.NUM_BONE_INFLUENCERS > 0 && (LQ.addCPUSkinningFallback(0, FQ), QQ.push("matricesIndices"), QQ.push("matricesWeights"), wQ.NUM_BONE_INFLUENCERS > 4 && (QQ.push("matricesIndicesExtra"), QQ.push("matricesWeightsExtra")))
    }

    function sQ(QQ, FQ) {
      (FQ.INSTANCES || FQ.THIN_INSTANCES) && xQ(QQ, !!FQ.PREPASS_VELOCITY), FQ.INSTANCESCOLOR && QQ.push("instanceColor")
    }

    function rQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = 0;
      for (let oQ = 0; oQ < wQ && QQ["LIGHT" + oQ]; oQ++) oQ > 0 && (qQ = LQ + oQ, FQ.addFallback(qQ, "LIGHT" + oQ)), QQ.SHADOWS || (QQ["SHADOW" + oQ] && FQ.addFallback(LQ, "SHADOW" + oQ), QQ["SHADOWPCF" + oQ] && FQ.addFallback(LQ, "SHADOWPCF" + oQ), QQ["SHADOWPCSS" + oQ] && FQ.addFallback(LQ, "SHADOWPCSS" + oQ), QQ["SHADOWPOISSON" + oQ] && FQ.addFallback(LQ, "SHADOWPOISSON" + oQ), QQ["SHADOWESM" + oQ] && FQ.addFallback(LQ, "SHADOWESM" + oQ), QQ["SHADOWCLOSEESM" + oQ] && FQ.addFallback(LQ, "SHADOWCLOSEESM" + oQ));
      return qQ
    }

    function IQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      let kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mQ = arguments.length > 9 ? arguments[9] : void 0,
        uQ = arguments.length > 10 ? arguments[10] : void 0;
      if (DQ._areMiscDirty) {
        DQ.LOGARITHMICDEPTH = wQ, DQ.POINTSIZE = LQ, DQ.FOG = qQ && function(QQ, FQ) {
          return FQ.fogEnabled && QQ.applyFog && 0 !== FQ.fogMode
        }(QQ, FQ), DQ.NONUNIFORMSCALING = QQ.nonUniformScaling, DQ.ALPHATEST = oQ, DQ.DECAL_AFTER_DETAIL = kQ, DQ.USE_VERTEX_PULLING = vQ, DQ.RIGHT_HANDED = FQ.useRightHandedSystem;
        const HQ = vQ ? mQ?.geometry?.getIndexBuffer() : null,
          bQ = !!mQ && mQ.isUnIndexed;
        DQ.VERTEX_PULLING_USE_INDEX_BUFFER = !!HQ && !bQ, DQ.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!HQ || bQ) && HQ.is32Bits, DQ.VERTEXOUTPUT_INVARIANT = !!uQ
      }
    }

    function UQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!QQ.lightsEnabled || LQ) return !0;
      const qQ = FQ.lightSources,
        oQ = Math.min(qQ.length, wQ);
      for (let DQ = 0; DQ < oQ; DQ++)
        if (!qQ[DQ].areLightTexturesReady()) return !1;
      return !0
    }

    function NQ(QQ, FQ, wQ, qQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!wQ._areLightsDirty) return wQ._needNormals;
      const kQ = oQ;
      oQ = function(QQ, FQ) {
        const wQ = QQ.Wx().getCaps().maxUniformBuffersPerShaderStage;
        if (null == wQ) return FQ;
        const LQ = Math.max(wQ - iQ, 1);
        return Math.min(FQ, LQ)
      }(QQ, oQ);
      let vQ = 0;
      const mQ = {
        needNormals: wQ._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (QQ.lightsEnabled && !DQ) {
        FQ.lightSources.length > oQ && oQ < kQ && function(QQ, FQ, wQ, qQ) {
          let oQ = WQ.get(QQ);
          oQ || (oQ = new Set, WQ.set(QQ, oQ)), oQ.has(qQ) || (oQ.add(qQ), LQ.c.Warn(`maxSimultaneousLights is ${FQ} but this engine supports at most ${wQ} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${qQ} lights affecting this mesh plus the scene, mesh, material and leftover buffers would need ${qQ+iQ} uniform buffers, over the device limit of ${QQ.getCaps().maxUniformBuffersPerShaderStage} per shader stage. The light count has been clamped to ${wQ}, so the extra lights will not contribute to the render. Set maxSimultaneousLights to ${wQ} or less to silence this warning.`))
        }(QQ.Wx(), kQ, oQ, Math.min(FQ.lightSources.length, kQ));
        for (const LQ of FQ.lightSources)
          if (KQ(QQ, FQ, LQ, vQ, wQ, qQ, mQ), vQ++, vQ === oQ) break
      }
      wQ.SPECULARTERM = mQ.specularEnabled, wQ.SHADOWS = mQ.shadowEnabled;
      const uQ = Math.max(oQ, wQ.MAXLIGHTCOUNT || 0);
      for (let LQ = vQ; LQ < uQ; LQ++) void 0 !== wQ["LIGHT" + LQ] && (wQ["LIGHT" + LQ] = !1, wQ["HEMILIGHT" + LQ] = !1, wQ["POINTLIGHT" + LQ] = !1, wQ["DIRLIGHT" + LQ] = !1, wQ["SPOTLIGHT" + LQ] = !1, wQ["AREALIGHT" + LQ] = !1, wQ["CLUSTLIGHT" + LQ] = !1, wQ["SHADOW" + LQ] = !1, wQ["SHADOWCSM" + LQ] = !1, wQ["SHADOWCSMDEBUG" + LQ] = !1, wQ["SHADOWCSMNUM_CASCADES" + LQ] = !1, wQ["SHADOWCSMUSESHADOWMAXZ" + LQ] = !1, wQ["SHADOWCSMNOBLEND" + LQ] = !1, wQ["SHADOWCSM_RIGHTHANDED" + LQ] = !1, wQ["SHADOWPCF" + LQ] = !1, wQ["SHADOWPCSS" + LQ] = !1, wQ["SHADOWPOISSON" + LQ] = !1, wQ["SHADOWESM" + LQ] = !1, wQ["SHADOWCLOSEESM" + LQ] = !1, wQ["SHADOWCUBE" + LQ] = !1, wQ["SHADOWLOWQUALITY" + LQ] = !1, wQ["SHADOWMEDIUMQUALITY" + LQ] = !1);
      wQ.LIGHTCOUNT = vQ, wQ.MAXLIGHTCOUNT = oQ;
      const HQ = QQ.Wx().getCaps();
      return void 0 === wQ.SHADOWFLOAT && (mQ.needRebuild = !0), wQ.SHADOWFLOAT = mQ.shadowEnabled && (HQ.textureFloatRender && HQ.textureFloatLinearFiltering || HQ.textureHalfFloatRender && HQ.textureHalfFloatLinearFiltering), wQ.LIGHTMAPEXCLUDED = mQ.lightmapMode, mQ.needRebuild && wQ.rebuild(), mQ.needNormals
    }

    function TQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (FQ && kQ.e.ReflectionTextureEnabled) {
        if (!FQ.isReadyOrNotBlocking()) return !1;
        wQ._needNormals = !0, wQ.REFLECTION = !0, wQ.GAMMAREFLECTION = FQ.gammaSpace, wQ.RGBDREFLECTION = FQ.isRGBD, wQ.LODINREFLECTIONALPHA = FQ.lodLevelInAlpha, wQ.LINEARSPECULARREFLECTION = FQ.linearSpecularLOD, wQ.USEIRRADIANCEMAP = !1, wQ.LODBASEDMICROSFURACE = QQ.Wx().getCaps().textureLOD;
        const DQ = QQ.Wx();
        switch (LQ && qQ > 0 ? (wQ.NUM_SAMPLES = "" + qQ, DQ._features.needTypeSuffixInShaderConstants && (wQ.NUM_SAMPLES = wQ.NUM_SAMPLES + "u"), wQ.REALTIME_FILTERING = !0, QQ.iblCdfGenerator && (wQ.IBL_CDF_FILTERING = !0)) : wQ.REALTIME_FILTERING = !1, wQ.INVERTCUBICMAP = 6 === FQ.coordinatesMode, wQ.REFLECTIONMAP_3D = FQ.isCube, wQ.REFLECTIONMAP_OPPOSITEZ = wQ.REFLECTIONMAP_3D && QQ.useRightHandedSystem ? !FQ.invertZ : FQ.invertZ, wQ.REFLECTIONMAP_CUBIC = !1, wQ.REFLECTIONMAP_EXPLICIT = !1, wQ.REFLECTIONMAP_PLANAR = !1, wQ.REFLECTIONMAP_PROJECTION = !1, wQ.REFLECTIONMAP_SKYBOX = !1, wQ.REFLECTIONMAP_SPHERICAL = !1, wQ.REFLECTIONMAP_EQUIRECTANGULAR = !1, wQ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, wQ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, FQ.coordinatesMode) {
          case 0:
            wQ.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            wQ.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            wQ.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            wQ.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            wQ.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            wQ.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            wQ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            wQ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            wQ.REFLECTIONMAP_CUBIC = !0, wQ.USE_LOCAL_REFLECTIONMAP_CUBIC = !!FQ.boundingBoxSize
        }
        5 !== FQ.coordinatesMode && (FQ.irradianceTexture ? (wQ.USEIRRADIANCEMAP = !0, wQ.USESPHERICALFROMREFLECTIONMAP = !1, wQ.USESPHERICALINVERTEX = !1, FQ.irradianceTexture._dominantDirection ? wQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : wQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : FQ.isCube && (wQ.USESPHERICALFROMREFLECTIONMAP = !0, wQ.USEIRRADIANCEMAP = !1, wQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, wQ.USESPHERICALINVERTEX = oQ))
      } else wQ.REFLECTION = !1, wQ.REFLECTIONMAP_3D = !1, wQ.REFLECTIONMAP_SPHERICAL = !1, wQ.REFLECTIONMAP_PLANAR = !1, wQ.REFLECTIONMAP_CUBIC = !1, wQ.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, wQ.REFLECTIONMAP_PROJECTION = !1, wQ.REFLECTIONMAP_SKYBOX = !1, wQ.REFLECTIONMAP_EXPLICIT = !1, wQ.REFLECTIONMAP_EQUIRECTANGULAR = !1, wQ.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, wQ.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, wQ.INVERTCUBICMAP = !1, wQ.USESPHERICALFROMREFLECTIONMAP = !1, wQ.USEIRRADIANCEMAP = !1, wQ.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, wQ.USESPHERICALINVERTEX = !1, wQ.REFLECTIONMAP_OPPOSITEZ = !1, wQ.LODINREFLECTIONALPHA = !1, wQ.GAMMAREFLECTION = !1, wQ.RGBDREFLECTION = !1, wQ.LINEARSPECULARREFLECTION = !1;
      return !0
    }

    function KQ(QQ, FQ, wQ, LQ, qQ, DQ, kQ) {
      switch (kQ.needNormals = !0, void 0 === qQ["LIGHT" + LQ] && (kQ.needRebuild = !0), qQ["LIGHT" + LQ] = !0, qQ["SPOTLIGHT" + LQ] = !1, qQ["HEMILIGHT" + LQ] = !1, qQ["POINTLIGHT" + LQ] = !1, qQ["DIRLIGHT" + LQ] = !1, qQ["AREALIGHT" + LQ] = !1, qQ["CLUSTLIGHT" + LQ] = !1, wQ.prepareLightSpecificDefines(qQ, LQ), qQ["LIGHT_FALLOFF_PHYSICAL" + LQ] = !1, qQ["LIGHT_FALLOFF_GLTF" + LQ] = !1, qQ["LIGHT_FALLOFF_STANDARD" + LQ] = !1, wQ.falloffType) {
        case oQ.c.FALLOFF_GLTF:
          qQ["LIGHT_FALLOFF_GLTF" + LQ] = !0;
          break;
        case oQ.c.FALLOFF_PHYSICAL:
          qQ["LIGHT_FALLOFF_PHYSICAL" + LQ] = !0;
          break;
        case oQ.c.FALLOFF_STANDARD:
          qQ["LIGHT_FALLOFF_STANDARD" + LQ] = !0
      }
      if (DQ && !wQ.specular.equalsFloats(0, 0, 0) && (kQ.specularEnabled = !0), qQ["SHADOW" + LQ] = !1, qQ["SHADOWCSM" + LQ] = !1, qQ["SHADOWCSMDEBUG" + LQ] = !1, qQ["SHADOWCSMNUM_CASCADES" + LQ] = !1, qQ["SHADOWCSMUSESHADOWMAXZ" + LQ] = !1, qQ["SHADOWCSMNOBLEND" + LQ] = !1, qQ["SHADOWCSM_RIGHTHANDED" + LQ] = !1, qQ["SHADOWPCF" + LQ] = !1, qQ["SHADOWPCSS" + LQ] = !1, qQ["SHADOWPOISSON" + LQ] = !1, qQ["SHADOWESM" + LQ] = !1, qQ["SHADOWCLOSEESM" + LQ] = !1, qQ["SHADOWCUBE" + LQ] = !1, qQ["SHADOWLOWQUALITY" + LQ] = !1, qQ["SHADOWMEDIUMQUALITY" + LQ] = !1, FQ && FQ.receiveShadows && QQ.shadowsEnabled && wQ.shadowEnabled) {
        const FQ = wQ.getShadowGenerator(QQ.activeCamera) ?? wQ.getShadowGenerator();
        if (FQ) {
          const QQ = FQ.getShadowMap();
          QQ && QQ.renderList && QQ.renderList.length > 0 && (kQ.shadowEnabled = !0, FQ.prepareDefines(qQ, LQ))
        }
      }
      wQ.lightmapMode != oQ.c.LIGHTMAP_DEFAULT ? (kQ.lightmapMode = !0, qQ["LIGHTMAPEXCLUDED" + LQ] = !0, qQ["LIGHTMAPNOSPECULAR" + LQ] = wQ.lightmapMode == oQ.c.LIGHTMAP_SHADOWSONLY) : (qQ["LIGHTMAPEXCLUDED" + LQ] = !1, qQ["LIGHTMAPNOSPECULAR" + LQ] = !1)
    }

    function zQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vQ = function(QQ, FQ) {
          let wQ = !1;
          if (QQ.activeCamera) {
            const LQ = FQ.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              qQ = FQ.CAMERA_PERSPECTIVE ? 1 : 0,
              oQ = 1 === QQ.activeCamera.mode ? 1 : 0,
              DQ = 0 === QQ.activeCamera.mode ? 1 : 0;
            (LQ ^ oQ || qQ ^ DQ) && (FQ.CAMERA_ORTHOGRAPHIC = 1 === oQ, FQ.CAMERA_PERSPECTIVE = 1 === DQ, wQ = !0)
          }
          return wQ
        }(QQ, LQ);
      !1 !== oQ && (vQ = (0, DQ.l)(wQ, QQ, LQ)), LQ.DEPTHPREPASS !== !FQ.getColorWrite() && (LQ.DEPTHPREPASS = !LQ.DEPTHPREPASS, vQ = !0), LQ.INSTANCES !== qQ && (LQ.INSTANCES = qQ, vQ = !0), LQ.THIN_INSTANCES !== kQ && (LQ.THIN_INSTANCES = kQ, vQ = !0), vQ && LQ.markAsUnprocessed()
    }
    const lQ = 40,
      jQ = 64,
      aQ = new WeakMap,
      XQ = new WeakSet;

    function fQ(QQ, FQ, wQ, qQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        kQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!FQ._areAttributesDirty && FQ._needNormals === FQ._normals && FQ._needUVs === FQ._uvs) return !1;
      FQ._normals = FQ._needNormals, FQ._uvs = FQ._needUVs, FQ.NORMAL = FQ._needNormals && QQ.isVerticesDataPresent("normal"), FQ._needNormals && QQ.isVerticesDataPresent("tangent") && (FQ.TANGENT = !0);
      for (let LQ = 1; LQ <= 6; ++LQ) FQ["UV" + LQ] = !!FQ._needUVs && QQ.isVerticesDataPresent(`uv${1===LQ?"":LQ}`);
      if (wQ) {
        const wQ = QQ.useVertexColors && QQ.isVerticesDataPresent("color");
        FQ.VERTEXCOLOR = wQ, FQ.VERTEXALPHA = QQ.hasVertexAlpha && wQ && DQ
      }
      return QQ.isVerticesDataPresent("instanceColor") && (QQ.pqQ || QQ.hasThinInstances) && (FQ.INSTANCESCOLOR = !0), qQ && function(QQ, FQ) {
        if (QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton) {
          FQ.NUM_BONE_INFLUENCERS = QQ.numBoneInfluencers;
          const wQ = void 0 !== FQ.BONETEXTURE;
          if (QQ.skeleton.isUsingTextureForMatrices && wQ) FQ.BONETEXTURE = !0;
          else {
            FQ.BonesPerMesh = QQ.skeleton.bones.length + 1, FQ.BONETEXTURE = !wQ && void 0;
            const qQ = QQ.iN(),
              oQ = qQ.prePassRenderer;
            if (oQ && oQ.enabled) {
              const wQ = -1 === oQ.excludedSkinnedMesh.indexOf(QQ);
              FQ.BONES_VELOCITY_ENABLED = wQ
            }
            const DQ = !0 === FQ.MULTIVIEW,
              kQ = 2 * FQ.BonesPerMesh + (DQ ? 1 : 0);
            if (aQ.get(QQ.skeleton) !== kQ) {
              aQ.set(QQ.skeleton, kQ);
              const wQ = qQ.Wx().getCaps().maxVertexUniformVectors;
              if (wQ && !XQ.has(QQ.skeleton)) {
                const qQ = 4 * FQ.BonesPerMesh,
                  oQ = DQ ? jQ : lQ,
                  kQ = Math.max(wQ - oQ, 0);
                (qQ > kQ || DQ && 3 * qQ > wQ) && (XQ.add(QQ.skeleton), LQ.c.Warn(`Skeleton "${QQ.skeleton.name}": ${QQ.skeleton.bones.length} bones stored as vertex uniforms use ${qQ} of ~${kQ} usable uniform vectors${DQ?" (multiview)":""} on a device reporting ${wQ}. This can exceed the GPU vertex-uniform limit and make the mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture.`))
              }
            }
          }
        } else FQ.NUM_BONE_INFLUENCERS = 0, FQ.BonesPerMesh = 0, void 0 !== FQ.BONETEXTURE && (FQ.BONETEXTURE = !1)
      }(QQ, FQ), oQ && function(QQ, FQ) {
        const wQ = QQ.morphTargetManager;
        wQ ? (FQ.MORPHTARGETS_UV = wQ.supportsUVs && FQ.UV1, FQ.MORPHTARGETS_UV2 = wQ.supportsUV2s && FQ.UV2, FQ.MORPHTARGETS_TANGENT = wQ.supportsTangents && FQ.TANGENT, FQ.MORPHTARGETS_NORMAL = wQ.supportsNormals && FQ.NORMAL, FQ.MORPHTARGETS_POSITION = wQ.supportsPositions, FQ.MORPHTARGETS_COLOR = wQ.supportsColors, FQ.MORPHTARGETTEXTURE_HASUVS = wQ.hasUVs, FQ.MORPHTARGETTEXTURE_HASUV2S = wQ.hasUV2s, FQ.MORPHTARGETTEXTURE_HASTANGENTS = wQ.hasTangents, FQ.MORPHTARGETTEXTURE_HASNORMALS = wQ.hasNormals, FQ.MORPHTARGETTEXTURE_HASPOSITIONS = wQ.hasPositions, FQ.MORPHTARGETTEXTURE_HASCOLORS = wQ.hasColors, FQ.NUM_MORPH_INFLUENCERS = wQ.numMaxInfluencers || wQ.numInfluencers, FQ.MORPHTARGETS = FQ.NUM_MORPH_INFLUENCERS > 0, FQ.MORPHTARGETS_TEXTURE = wQ.isUsingTextureForTargets) : (FQ.MORPHTARGETS_UV = !1, FQ.MORPHTARGETS_UV2 = !1, FQ.MORPHTARGETS_TANGENT = !1, FQ.MORPHTARGETS_NORMAL = !1, FQ.MORPHTARGETS_POSITION = !1, FQ.MORPHTARGETS_COLOR = !1, FQ.MORPHTARGETTEXTURE_HASUVS = !1, FQ.MORPHTARGETTEXTURE_HASUV2S = !1, FQ.MORPHTARGETTEXTURE_HASTANGENTS = !1, FQ.MORPHTARGETTEXTURE_HASNORMALS = !1, FQ.MORPHTARGETTEXTURE_HASPOSITIONS = !1, FQ.MORPHTARGETTEXTURE_HAS_COLORS = !1, FQ.MORPHTARGETS = !1, FQ.NUM_MORPH_INFLUENCERS = 0)
      }(QQ, FQ), kQ && function(QQ, FQ) {
        const wQ = QQ.bakedVertexAnimationManager;
        FQ.BAKED_VERTEX_ANIMATION_TEXTURE = !(!wQ || !wQ.isEnabled)
      }(QQ, FQ), !0
    }

    function VQ(QQ, FQ) {
      if (QQ.activeCamera) {
        const wQ = FQ.MULTIVIEW;
        FQ.MULTIVIEW = null !== QQ.activeCamera.outputRenderTarget && QQ.activeCamera.outputRenderTarget.getViewCount() > 1, FQ.MULTIVIEW != wQ && FQ.markAsUnprocessed()
      }
    }

    function hQ(QQ, FQ, wQ) {
      const LQ = FQ.ORDER_INDEPENDENT_TRANSPARENCY,
        qQ = FQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      FQ.ORDER_INDEPENDENT_TRANSPARENCY = QQ.useOrderIndependentTransparency && wQ, FQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !QQ.Wx().getCaps().textureFloatLinearFiltering, LQ === FQ.ORDER_INDEPENDENT_TRANSPARENCY && qQ === FQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || FQ.markAsUnprocessed()
    }

    function JQ(QQ, FQ, wQ) {
      const LQ = FQ.PREPASS;
      if (!FQ._arePrePassDirty) return;
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
      if (QQ.prePassRenderer && QQ.prePassRenderer.enabled && wQ) {
        FQ.PREPASS = !0, FQ.SCENE_MRT_COUNT = QQ.prePassRenderer.mrtCount, FQ.PREPASS_NORMAL_WORLDSPACE = QQ.prePassRenderer.generateNormalsInWorldSpace, FQ.PREPASS_COLOR = !0, FQ.PREPASS_COLOR_INDEX = 0;
        for (let wQ = 0; wQ < qQ.length; wQ++) {
          const LQ = QQ.prePassRenderer.getIndex(qQ[wQ].type); - 1 !== LQ ? (FQ[qQ[wQ].define] = !0, FQ[qQ[wQ].index] = LQ) : FQ[qQ[wQ].define] = !1
        }
      } else {
        FQ.PREPASS = !1;
        for (let QQ = 0; QQ < qQ.length; QQ++) FQ[qQ[QQ].define] = !1
      }
      FQ.PREPASS != LQ && (FQ.markAsUnprocessed(), FQ.markAsImageProcessingDirty())
    }

    function EQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      qQ && qQ.push("Light" + QQ), oQ || (FQ.push("vLightData" + QQ, "vLightDiffuse" + QQ, "vLightSpecular" + QQ, "vLightDirection" + QQ, "vLightWidth" + QQ, "vLightHeight" + QQ, "vLightFalloff" + QQ, "vLightGround" + QQ, "vSliceData" + QQ, "vSliceRanges" + QQ, "lightMatrix" + QQ, "shadowsInfo" + QQ, "depthValues" + QQ), wQ.push("shadowTexture" + QQ), wQ.push("depthTexture" + QQ), FQ.push("viewFrustumZ" + QQ, "cascadeBlendFactor" + QQ, "lightSizeUVCorrection" + QQ, "depthCorrection" + QQ, "penumbraDarkness" + QQ, "frustumLengths" + QQ), LQ && (wQ.push("projectionLightTexture" + QQ), FQ.push("textureProjectionMatrix" + QQ)), DQ && wQ.push("iesLightTexture" + QQ), vQ && wQ.push("rectAreaLightEmissionTexture" + QQ), kQ && (wQ.push("lightDataTexture" + QQ), mQ || wQ.push("tileMaskTexture" + QQ)))
    }

    function nQ(QQ, FQ, wQ) {
      const LQ = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      wQ && LQ.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), QQ.push(...LQ);
      FQ.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
    }

    function gQ(QQ, FQ, wQ) {
      let LQ, qQ, oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        DQ = null;
      if (QQ.uniformsNames) {
        const kQ = QQ;
        LQ = kQ.uniformsNames, qQ = kQ.uniformBuffersNames, FQ = kQ.samplers, wQ = kQ.defines, oQ = kQ.maxSimultaneousLights || 0, DQ = kQ.shaderLanguage ?? null
      } else LQ = QQ, FQ || (FQ = []);
      for (let kQ = 0; kQ < oQ && wQ["LIGHT" + kQ]; kQ++) EQ(kQ, LQ, FQ, wQ["PROJECTEDLIGHTTEXTURE" + kQ], qQ, !1, wQ["IESLIGHTTEXTURE" + kQ], wQ["CLUSTLIGHT" + kQ], wQ["RECTAREALIGHTEMISSIONTEXTURE" + kQ], 1 === DQ);
      wQ.NUM_MORPH_INFLUENCERS && (LQ.push("morphTargetInfluences"), LQ.push("morphTargetCount")), wQ.BAKED_VERTEX_ANIMATION_TEXTURE && (LQ.push("bakedVertexAnimationSettings"), LQ.push("bakedVertexAnimationTextureSizeInverted"), LQ.push("bakedVertexAnimationTime"), FQ.push("bakedVertexAnimationTexture"))
    }

    function PQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      QQ.addUniform("vReflectionInfos", 2), QQ.addUniform("reflectionMatrix", 16), FQ && QQ.addUniform("vReflectionMicrosurfaceInfos", 3), wQ && (QQ.addUniform("vReflectionPosition", 3), QQ.addUniform("vReflectionSize", 3)), LQ && (QQ.addUniform("vReflectionFilteringInfo", 2), QQ.addUniform("vReflectionDominantDirection", 3)), oQ && QQ.addUniform("vReflectionColor", 3), qQ && (QQ.addUniform("vSphericalL00", 3), QQ.addUniform("vSphericalL1_1", 3), QQ.addUniform("vSphericalL10", 3), QQ.addUniform("vSphericalL11", 3), QQ.addUniform("vSphericalL2_2", 3), QQ.addUniform("vSphericalL2_1", 3), QQ.addUniform("vSphericalL20", 3), QQ.addUniform("vSphericalL21", 3), QQ.addUniform("vSphericalL22", 3), QQ.addUniform("vSphericalX", 3), QQ.addUniform("vSphericalY", 3), QQ.addUniform("vSphericalZ", 3), QQ.addUniform("vSphericalXX_ZZ", 3), QQ.addUniform("vSphericalYY_ZZ", 3), QQ.addUniform("vSphericalZZ", 3), QQ.addUniform("vSphericalXY", 3), QQ.addUniform("vSphericalYZ", 3), QQ.addUniform("vSphericalZX", 3))
    }
  },
  39768: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(36696),
      qQ = wQ(39717);
    class oQ extends qQ.d {
      constructor(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(QQ, FQ, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new LQ.c, this._storeEffectOnSubMeshes = wQ
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
      }
      isReady(QQ, FQ) {
        return !!QQ && (!this._storeEffectOnSubMeshes || (!QQ.lC || 0 === QQ.lC.length || this.isReadyForSubMesh(QQ, QQ.lC[0], FQ)))
      }
      _isReadyForSubMesh(QQ) {
        const FQ = QQ.materialDefines;
        return !(this.checkReadyOnEveryCall || !QQ.effect || !FQ || FQ._renderId !== this.iN().getRenderId())
      }
      bindOnlyWorldMatrix(QQ) {
        this._activeEffect.setMatrix("world", QQ)
      }
      bindOnlyNormalMatrix(QQ) {
        this._activeEffect.setMatrix("normalMatrix", QQ)
      }
      bind(QQ, FQ) {
        FQ && this.bindForSubMesh(QQ, FQ, FQ.lC[0])
      }
      _afterBind(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(QQ, FQ, wQ), this.iN()._cachedEffect = FQ, wQ ? wQ._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
      }
      _mustRebind(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return wQ._drawWrapper._forceRebindOnNextCall || QQ.isCachedMaterialInvalid(this, FQ, LQ)
      }
      dispose(QQ, FQ, wQ) {
        this._activeEffect = void 0, super.dispose(QQ, FQ, wQ)
      }
    }
  },
  39787: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => qQ
    });
    const LQ = new WeakMap;

    function qQ(QQ) {
      const FQ = QQ.getVertexBuffers();
      if (!FQ) return null;
      let wQ = LQ.get(QQ);
      if (wQ) {
        let QQ = !1;
        for (const LQ in FQ)
          if (!wQ.has(LQ)) {
            QQ = !0;
            break
          } if (!QQ) return wQ
      } else wQ = new Map, LQ.set(QQ, wQ);
      for (const LQ in FQ) {
        const QQ = FQ[LQ];
        if (QQ) {
          const FQ = QQ.byteOffset,
            qQ = QQ.byteStride,
            oQ = QQ.type,
            DQ = QQ.normalized;
          wQ.set(LQ, {
            offset: FQ,
            stride: qQ,
            type: oQ,
            normalized: DQ
          })
        }
      }
      return wQ
    }

    function oQ(QQ, FQ) {
      FQ.forEach(((FQ, wQ) => {
        const LQ = `vp_${wQ}_info`;
        QQ.setFloat4(LQ, FQ.offset, FQ.stride, FQ.type, FQ.normalized ? 1 : 0)
      }))
    }
  },
  39741: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ,
      e: () => vQ
    });
    var LQ = wQ(39402),
      qQ = wQ(36696),
      oQ = wQ(39409);
    let DQ = (() => {
      var QQ;
      let FQ, wQ, qQ = [];
      return QQ = class {
        static extractMinAndMaxIndexed(QQ, FQ, wQ, LQ, qQ, oQ) {
          for (let DQ = wQ; DQ < wQ + LQ; DQ++) {
            const wQ = 3 * FQ[DQ],
              LQ = QQ[wQ],
              kQ = QQ[wQ + 1],
              vQ = QQ[wQ + 2];
            qQ.minimizeInPlaceFromFloats(LQ, kQ, vQ), oQ.maximizeInPlaceFromFloats(LQ, kQ, vQ)
          }
        }
        static extractMinAndMax(QQ, FQ, wQ, LQ, qQ, oQ) {
          for (let DQ = FQ, kQ = FQ * LQ; DQ < FQ + wQ; DQ++, kQ += LQ) {
            const FQ = QQ[kQ],
              wQ = QQ[kQ + 1],
              LQ = QQ[kQ + 2];
            qQ.minimizeInPlaceFromFloats(FQ, wQ, LQ), oQ.maximizeInPlaceFromFloats(FQ, wQ, LQ)
          }
        }
      }, (() => {
        const DQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [oQ.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
        }))], wQ = [oQ.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, LQ.i)(QQ, null, FQ, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: QQ => "extractMinAndMaxIndexed" in QQ,
            get: QQ => QQ.extractMinAndMaxIndexed
          },
          metadata: DQ
        }, null, qQ), (0, LQ.i)(QQ, null, wQ, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: QQ => "extractMinAndMax" in QQ,
            get: QQ => QQ.extractMinAndMax
          },
          metadata: DQ
        }, null, qQ), DQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DQ
        }), (0, LQ.l)(QQ, qQ)
      })(), QQ
    })();

    function kQ(QQ, FQ, wQ, LQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const kQ = new qQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        vQ = new qQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return DQ.extractMinAndMaxIndexed(QQ, FQ, wQ, LQ, kQ, vQ), oQ && (kQ.x -= kQ.x * oQ.x + oQ.y, kQ.y -= kQ.y * oQ.x + oQ.y, kQ.z -= kQ.z * oQ.x + oQ.y, vQ.x += vQ.x * oQ.x + oQ.y, vQ.y += vQ.y * oQ.x + oQ.y, vQ.z += vQ.z * oQ.x + oQ.y), {
        minimum: kQ,
        maximum: vQ
      }
    }

    function vQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        oQ = arguments.length > 4 ? arguments[4] : void 0;
      const kQ = new qQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        vQ = new qQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return oQ || (oQ = 3), DQ.extractMinAndMax(QQ, FQ, wQ, oQ, kQ, vQ), LQ && (kQ.x -= kQ.x * LQ.x + LQ.y, kQ.y -= kQ.y * LQ.x + LQ.y, kQ.z -= kQ.z * LQ.x + LQ.y, vQ.x += vQ.x * LQ.x + LQ.y, vQ.y += vQ.y * LQ.x + LQ.y, vQ.z += vQ.z * LQ.x + LQ.y), {
        minimum: kQ,
        maximum: vQ
      }
    }
  },
  39725: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ
    });
    var LQ, qQ = wQ(39561),
      oQ = wQ(39729),
      DQ = wQ(39731),
      kQ = wQ(39741),
      vQ = wQ(39748),
      mQ = wQ(39277);
    class uQ {
      get materialDefines() {
        const QQ = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
        return "string" === typeof QQ ? null : QQ
      }
      set materialDefines(QQ) {
        (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = QQ
      }
      _getDrawWrapper(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        QQ = QQ ?? this._engine.currentRenderPassId;
        let wQ = this._drawWrappers[QQ];
        return !wQ && FQ && (this._drawWrappers[QQ] = wQ = new vQ.d(this._mesh.iN().Wx())), wQ
      }
      _removeDrawWrapper(QQ) {
        let FQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[QQ]?.dispose(FQ), this._drawWrappers[QQ] = void 0
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qQ = this._drawWrapper;
        qQ.setEffect(QQ, FQ, LQ), void 0 !== wQ && (qQ.materialContext = wQ), QQ || (qQ.defines = null, qQ.materialContext = void 0)
      }
      resetDrawCache(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== QQ) return void this._removeDrawWrapper(QQ, !0, FQ);
          for (const QQ of this._drawWrappers) QQ?.dispose(FQ)
        }
        this._drawWrappers = []
      }
      static AddToMesh(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        return new uQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
      }
      constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        let kQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = QQ, this.verticesStart = FQ, this.verticesCount = wQ, this.indexStart = LQ, this.indexCount = qQ, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = oQ, this._renderingMesh = DQ || oQ, vQ && oQ.lC.push(this), this._engine = this._mesh.iN().Wx(), this.resetDrawCache(), this._trianglePlanes = [], this._id = oQ.lC.length - 1, kQ && (this.refreshBoundingInfo(), oQ.computeWorldMatrix(!0))
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
      }
      sK() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.sK() : this._boundingInfo
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
      Ux() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const FQ = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
        if (!FQ) return QQ && this._mesh.iN()._hasDefaultMaterial ? this._mesh.iN().defaultMaterial : null;
        if (this._isMultiMaterial(FQ)) {
          const QQ = FQ.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== QQ && (this._currentMaterial = QQ, this.resetDrawCache()), QQ
        }
        return FQ
      }
      _isMultiMaterial(QQ) {
        return void 0 !== QQ.getSubMaterial
      }
      refreshBoundingInfo() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
        if (QQ || (QQ = this._renderingMesh.getVerticesData(qQ.h.PositionKind)), !QQ) return this._boundingInfo = this._mesh.sK(), this;
        const FQ = this._renderingMesh.OLQ();
        let wQ;
        if (0 === this.indexStart && this.indexCount === FQ.length) {
          const QQ = this._renderingMesh.sK();
          wQ = {
            minimum: QQ.minimum.clone(),
            maximum: QQ.maximum.clone()
          }
        } else wQ = (0, kQ.c)(QQ, FQ, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(wQ.minimum, wQ.maximum) : this._boundingInfo = new DQ.d(wQ.minimum, wQ.maximum), this
      }
      _checkCollision(QQ) {
        return this.sK()._checkCollision(QQ)
      }
      updateBoundingInfo(QQ) {
        let FQ = this.sK();
        return FQ || (this.refreshBoundingInfo(), FQ = this.sK()), FQ && FQ.update(QQ), this
      }
      isInFrustum(QQ) {
        const FQ = this.sK();
        return !!FQ && FQ.isInFrustum(QQ, this._mesh.cullingStrategy)
      }
      isCompletelyInFrustum(QQ) {
        const FQ = this.sK();
        return !!FQ && FQ.isCompletelyInFrustum(QQ)
      }
      render(QQ) {
        return this._renderingMesh.render(this, QQ, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
      }
      _getLinesIndexBuffer(QQ, FQ) {
        if (!this._linesIndexBuffer) {
          const wQ = 6 * Math.floor(this.indexCount / 3),
            LQ = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(wQ) : new Uint16Array(wQ);
          let qQ = 0;
          if (0 === QQ.length)
            for (let QQ = this.indexStart; QQ < this.indexStart + this.indexCount; QQ += 3) LQ[qQ++] = QQ, LQ[qQ++] = QQ + 1, LQ[qQ++] = QQ + 1, LQ[qQ++] = QQ + 2, LQ[qQ++] = QQ + 2, LQ[qQ++] = QQ;
          else
            for (let FQ = this.indexStart; FQ < this.indexStart + this.indexCount; FQ += 3) LQ[qQ++] = QQ[FQ], LQ[qQ++] = QQ[FQ + 1], LQ[qQ++] = QQ[FQ + 1], LQ[qQ++] = QQ[FQ + 2], LQ[qQ++] = QQ[FQ + 2], LQ[qQ++] = QQ[FQ];
          this._linesIndexBuffer = FQ.createIndexBuffer(LQ), this._linesIndexCount = LQ.length
        }
        return this._linesIndexBuffer
      }
      canIntersects(QQ) {
        const FQ = this.sK();
        return !!FQ && QQ.intersectsBox(FQ.boundingBox)
      }
      intersects(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this.Ux();
        if (!oQ) return null;
        let DQ = 3,
          kQ = !1;
        switch (oQ.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            DQ = 1, kQ = !0
        }
        return 4 === oQ.fillMode ? wQ.length ? this._intersectLines(QQ, FQ, wQ, this._mesh.intersectionThreshold, LQ) : this._intersectUnIndexedLines(QQ, FQ, wQ, this._mesh.intersectionThreshold, LQ) : !wQ.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(QQ, FQ, wQ, LQ, qQ) : this._intersectTriangles(QQ, FQ, wQ, DQ, kQ, LQ, qQ)
      }
      _intersectLines(QQ, FQ, wQ, LQ, qQ) {
        let DQ = null;
        for (let kQ = this.indexStart; kQ < this.indexStart + this.indexCount; kQ += 2) {
          const vQ = FQ[wQ[kQ]],
            mQ = FQ[wQ[kQ + 1]],
            uQ = QQ.intersectionSegment(vQ, mQ, LQ);
          if (!(uQ < 0) && ((qQ || !DQ || uQ < DQ.distance) && (DQ = new oQ.c(null, null, uQ), DQ.faceId = kQ / 2, qQ))) break
        }
        return DQ
      }
      _intersectUnIndexedLines(QQ, FQ, wQ, LQ, qQ) {
        let DQ = null;
        for (let kQ = this.verticesStart; kQ < this.verticesStart + this.verticesCount; kQ += 2) {
          const wQ = FQ[kQ],
            vQ = FQ[kQ + 1],
            mQ = QQ.intersectionSegment(wQ, vQ, LQ);
          if (!(mQ < 0) && ((qQ || !DQ || mQ < DQ.distance) && (DQ = new oQ.c(null, null, mQ), DQ.faceId = kQ / 2, qQ))) break
        }
        return DQ
      }
      _intersectTriangles(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        let kQ = null,
          vQ = -1;
        for (let mQ = this.indexStart; mQ < this.indexStart + this.indexCount - (3 - LQ); mQ += LQ) {
          vQ++;
          const LQ = wQ[mQ],
            uQ = wQ[mQ + 1],
            HQ = wQ[mQ + 2];
          if (qQ && 4294967295 === HQ) {
            mQ += 2;
            continue
          }
          const bQ = FQ[LQ],
            YQ = FQ[uQ],
            xQ = FQ[HQ];
          if (!bQ || !YQ || !xQ) continue;
          if (DQ && !DQ(bQ, YQ, xQ, QQ, LQ, uQ, HQ)) continue;
          const AQ = QQ.intersectsTriangle(bQ, YQ, xQ);
          if (AQ) {
            if (AQ.distance < 0) continue;
            if ((oQ || !kQ || AQ.distance < kQ.distance) && (kQ = AQ, kQ.faceId = vQ, oQ)) break
          }
        }
        return kQ
      }
      _intersectUnIndexedTriangles(QQ, FQ, wQ, LQ, qQ) {
        let oQ = null;
        for (let DQ = this.verticesStart; DQ < this.verticesStart + this.verticesCount; DQ += 3) {
          const wQ = FQ[DQ],
            kQ = FQ[DQ + 1],
            vQ = FQ[DQ + 2];
          if (qQ && !qQ(wQ, kQ, vQ, QQ, -1, -1, -1)) continue;
          const mQ = QQ.intersectsTriangle(wQ, kQ, vQ);
          if (mQ) {
            if (mQ.distance < 0) continue;
            if ((LQ || !oQ || mQ.distance < oQ.distance) && (oQ = mQ, oQ.faceId = DQ / 3, LQ)) break
          }
        }
        return oQ
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null)
      }
      clone(QQ, FQ) {
        const wQ = new uQ(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, QQ, FQ, !1);
        if (!this.IsGlobal) {
          const QQ = this.sK();
          if (!QQ) return wQ;
          wQ._boundingInfo = new DQ.d(QQ.minimum, QQ.maximum)
        }
        return wQ
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.iN().Wx()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const FQ = this._mesh.lC.indexOf(this);
        this._mesh.lC.splice(FQ, 1), this.resetDrawCache(void 0, QQ)
      }
      getClassName() {
        return "SubMesh"
      }
      static CreateFromIndices(QQ, FQ, wQ, LQ, qQ) {
        let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = Number.MAX_VALUE,
          kQ = -Number.MAX_VALUE;
        const vQ = (qQ || LQ).OLQ();
        for (let mQ = FQ; mQ < FQ + wQ; mQ++) {
          const QQ = vQ[mQ];
          QQ < DQ && (DQ = QQ), QQ > kQ && (kQ = QQ)
        }
        return new uQ(QQ, DQ, kQ - DQ + 1, FQ, wQ, LQ, qQ, oQ)
      }
    }(LQ = uQ.prototype).projectToRef ?? (LQ.projectToRef = (0, mQ.g)("SubMesh", "projectToRef"))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);